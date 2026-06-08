#!/usr/bin/env bash
# wiki-lock.sh — per-file advisory locking for safe multi-agent vault mutation.
#
# Adapted from claude-obsidian (AgriciDaniel) for KOS-LLM-Wiki vault.
# Closes the latent multi-writer corruption hole where two parallel agents
# writing to the same file could silently trample each other.
#
# Design (age-based, not flock-style):
#   flock(2) advisory locks release when the holding process exits. That
#   doesn't fit our model where `acquire` and `release` are SEPARATE bash
#   invocations from the same skill (each Bash tool call is its own short-
#   lived process — neither's PID survives long enough to mean anything).
#   So we use atomic lockfile creation with `set -o noclobber` plus
#   epoch-timestamp AGE-based staleness detection. Race-safe because the
#   noclobber write itself is atomic on POSIX filesystems.
#
#   The PID written into the lockfile is informational only (helpful for
#   `list` and debugging). The acquire decision considers AGE only:
#     - If lockfile age < STALE_AFTER_SEC → refuse (return 75 EX_TEMPFAIL)
#     - If lockfile age >= STALE_AFTER_SEC → reap and acquire
#   Default STALE_AFTER_SEC=60.
#
# Semantics:
#   acquire <vault-rel-path>
#     - Atomically creates lockfile with PID + epoch
#     - Returns 0 if acquired, 75 (EX_TEMPFAIL) if held and age < threshold
#     - Auto-reaps locks older than STALE_AFTER_SEC
#   release <vault-rel-path>
#     - Removes the lockfile unconditionally (rm -f). Idempotent.
#     - Cross-process release IS allowed by design
#   list
#     - Prints currently-held lock records (pid age path)
#   clear-stale [--max-age N]
#     - Removes lockfiles whose PID is dead OR age > N seconds. Default 3600.
#   peek <vault-rel-path>
#     - Prints holder info or "unheld"; exit 0; never mutates.
#
# Usage:
#   bash scripts/wiki-lock.sh acquire 3 Resources/004-LLM-Wiki/wiki/concepts/Foo.md
#   bash scripts/wiki-lock.sh release 3 Resources/004-LLM-Wiki/wiki/concepts/Foo.md
#   bash scripts/wiki-lock.sh list
#   bash scripts/wiki-lock.sh clear-stale --max-age 1800
#   bash scripts/wiki-lock.sh peek 3 Resources/004-LLM-Wiki/wiki/concepts/Foo.md
#
# Exit codes:
#   0  — success
#   2  — usage error
#   75 — acquire failed (lock held by alive process)
#   3  — lock dir creation failed
#   4  — invalid vault-relative path (escape attempt)

set -euo pipefail

VAULT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
META_DIR="${VAULT_ROOT}/.vault-meta"
LOCK_DIR="${META_DIR}/locks"
META_LOCK="${META_DIR}/.wiki-lock.meta"
STALE_AFTER_SEC=60

# Allow tests / non-default vault roots to override
if [ -n "${WIKI_LOCK_VAULT:-}" ]; then
  VAULT_ROOT="$WIKI_LOCK_VAULT"
  META_DIR="${VAULT_ROOT}/.vault-meta"
  LOCK_DIR="${META_DIR}/locks"
  META_LOCK="${META_DIR}/.wiki-lock.meta"
fi

# ── helpers ──────────────────────────────────────────────────────────────────
die() { echo "ERR: $*" >&2; exit "${2:-2}"; }
log() { echo "$*" >&2; }

sha1_of() {
  if command -v sha1sum >/dev/null 2>&1; then
    printf '%s' "$1" | sha1sum | awk '{print $1}'
  else
    # macOS fallback
    printf '%s' "$1" | shasum -a 1 | awk '{print $1}'
  fi
}

ensure_dirs() {
  mkdir -p "$LOCK_DIR" 2>/dev/null || die "cannot create $LOCK_DIR" 3
}

validate_path() {
  local p="$1"
  [ -z "$p" ] && die "path cannot be empty" 4
  case "$p" in
    /*) die "path must be vault-relative, not absolute: $p" 4 ;;
    *..*) die "path may not contain '..': $p" 4 ;;
    *$'\n'*) die "path may not contain newlines (lockfile format would break)" 4 ;;
    *$'\r'*) die "path may not contain carriage returns" 4 ;;
  esac
  # Symlink canonicalization
  if command -v python3 >/dev/null 2>&1; then
    local resolved
    resolved=$(VAULT_ROOT_BASH="$VAULT_ROOT" P_BASH="$p" python3 -c '
import os, sys
root = os.path.realpath(os.environ["VAULT_ROOT_BASH"])
candidate = os.environ["P_BASH"]
target = os.path.realpath(os.path.join(root, candidate))
common = os.path.commonpath([root, target]) if target else ""
sys.stdout.write("INSIDE" if common == root else "OUTSIDE")
' 2>/dev/null)
    [ "$resolved" = "OUTSIDE" ] && die "path resolves outside vault via symlink: $p" 4
  fi
  return 0
}

now_epoch() { date +%s; }

is_alive() { kill -0 "$1" 2>/dev/null; }

# Meta-lock to serialize concurrent acquire/release/clear-stale operations.
# flock(1) is Linux-only - gracefully fall back to direct execution on
# platforms where it's unavailable (macOS, Git Bash on Windows, etc.).
with_meta_lock() {
  ensure_dirs
  if command -v flock >/dev/null 2>&1; then
    (
      flock -x -w 5 9 || die "could not acquire meta-lock within 5s" 1
      "$@"
    ) 9>"$META_LOCK"
  else
    "$@"
  fi
}

read_lockfile() {
  local lf="$1"
  [ -f "$lf" ] || return 0
  head -1 "$lf" 2>/dev/null || true
}

# ── commands ─────────────────────────────────────────────────────────────────
_cmd_acquire() {
  local path="$1"
  validate_path "$path"
  ensure_dirs
  local lf="${LOCK_DIR}/$(sha1_of "$path").lock"
  local now
  now=$(now_epoch)

  # Try the cheap path first: noclobber-atomic create
  if (set -o noclobber; printf '%s %s %s\n' "$$" "$now" "$path" > "$lf") 2>/dev/null; then
    return 0
  fi

  # Lockfile already exists — examine age
  local existing
  existing=$(read_lockfile "$lf")
  if [ -z "$existing" ]; then
    rm -f "$lf"
    if (set -o noclobber; printf '%s %s %s\n' "$$" "$now" "$path" > "$lf") 2>/dev/null; then
      return 0
    fi
    return 75
  fi

  local eepoch
  eepoch=$(printf '%s' "$existing" | awk '{print $2}')
  case "$eepoch" in
    ''|*[!0-9]*) rm -f "$lf"
                 (set -o noclobber; printf '%s %s %s\n' "$$" "$now" "$path" > "$lf") 2>/dev/null && return 0
                 return 75 ;;
  esac
  local age=$((now - eepoch))

  if [ "$age" -gt "$STALE_AFTER_SEC" ]; then
    rm -f "$lf"
    if (set -o noclobber; printf '%s %s %s\n' "$$" "$now" "$path" > "$lf") 2>/dev/null; then
      return 0
    fi
    return 75
  fi

  return 75
}

_cmd_release() {
  local path="$1"
  validate_path "$path"
  ensure_dirs
  local lf="${LOCK_DIR}/$(sha1_of "$path").lock"
  rm -f "$lf"
  return 0
}

_cmd_list() {
  ensure_dirs
  local count=0
  for lf in "$LOCK_DIR"/*.lock; do
    [ -f "$lf" ] || continue
    local rec
    rec=$(read_lockfile "$lf")
    [ -n "$rec" ] || continue
    local pid epoch path now age
    pid=$(printf '%s' "$rec" | awk '{print $1}')
    epoch=$(printf '%s' "$rec" | awk '{print $2}')
    path=$(printf '%s' "$rec" | cut -d' ' -f3-)
    now=$(now_epoch)
    age=$((now - epoch))
    printf 'pid=%s age=%ss path=%s\n' "$pid" "$age" "$path"
    count=$((count + 1))
  done
  return 0
}

_cmd_clear_stale() {
  local max_age="$1"
  ensure_dirs
  local removed=0
  local now
  now=$(now_epoch)
  for lf in "$LOCK_DIR"/*.lock; do
    [ -f "$lf" ] || continue
    local rec
    rec=$(read_lockfile "$lf")
    if [ -z "$rec" ]; then
      rm -f "$lf"; removed=$((removed + 1)); continue
    fi
    local pid epoch age
    pid=$(printf '%s' "$rec" | awk '{print $1}')
    epoch=$(printf '%s' "$rec" | awk '{print $2}')
    age=$((now - epoch))
    if ! is_alive "$pid" || [ "$age" -gt "$max_age" ]; then
      rm -f "$lf"; removed=$((removed + 1))
    fi
  done
  echo "$removed"
  return 0
}

_cmd_peek() {
  local path="$1"
  validate_path "$path"
  ensure_dirs
  local lf="${LOCK_DIR}/$(sha1_of "$path").lock"
  if [ ! -f "$lf" ]; then
    echo "unheld"
    return 0
  fi
  local rec
  rec=$(read_lockfile "$lf")
  echo "$rec"
  return 0
}

# ── arg parsing ──────────────────────────────────────────────────────────────
if [ $# -lt 1 ]; then
  sed -n '2,46p' "$0" | sed 's/^# \{0,1\}//'
  exit 2
fi

CMD=""
ARGS=()
MAX_AGE_OVERRIDE=""
while [ $# -gt 0 ]; do
  case "$1" in
    --stale-after-sec) STALE_AFTER_SEC="$2"; shift 2 ;;
    --max-age)         MAX_AGE_OVERRIDE="$2"; shift 2 ;;
    -h|--help)         sed -n '2,46p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    --) shift; while [ $# -gt 0 ]; do ARGS+=("$1"); shift; done ;;
    -*) die "unknown flag: $1" ;;
    *)
      if [ -z "$CMD" ]; then
        CMD="$1"
      else
        ARGS+=("$1")
      fi
      shift
      ;;
  esac
done

[ -n "$CMD" ] || die "no command given"

case "$CMD" in
  acquire)
    [ ${#ARGS[@]} -ge 1 ] || die "acquire needs a path"
    with_meta_lock _cmd_acquire "${ARGS[0]}"
    ;;
  release)
    [ ${#ARGS[@]} -ge 1 ] || die "release needs a path"
    with_meta_lock _cmd_release "${ARGS[0]}"
    ;;
  list)
    with_meta_lock _cmd_list
    ;;
  clear-stale)
    MAX="${MAX_AGE_OVERRIDE:-${ARGS[0]:-3600}}"
    with_meta_lock _cmd_clear_stale "$MAX"
    ;;
  peek)
    [ ${#ARGS[@]} -ge 1 ] || die "peek needs a path"
    with_meta_lock _cmd_peek "${ARGS[0]}"
    ;;
  *)
    die "unknown command: $CMD (try acquire|release|list|clear-stale|peek)"
    ;;
esac
