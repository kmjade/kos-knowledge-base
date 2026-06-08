#!/usr/bin/env python3
"""
wiki-lock.py — per-file advisory locking for safe multi-writer vault mutation.

Port of claude-obsidian's scripts/wiki-lock.sh to Python (cross-platform).

Design (age-based, not flock-style):
  flock(2) / LockFileEx advisory locks release when the holding process exits.
  That doesn't fit our model where `acquire` and `release` are SEPARATE
  invocations from the same skill (each tool call is its own short-lived
  process — neither's PID survives long enough to mean anything).
  So we use atomic lockfile creation with os.open(O_CREAT|O_EXCL) plus
  epoch-timestamp AGE-based staleness detection. Race-safe because the
  O_EXCL create itself is atomic on all POSIX and Windows filesystems.

  The PID written into the lockfile is informational only (helpful for
  `list` and debugging). The acquire decision considers AGE only:
    - If lockfile age < STALE_AFTER_SEC → refuse (return 75 EX_TEMPFAIL)
    - If lockfile age >= STALE_AFTER_SEC → reap and acquire
  Default STALE_AFTER_SEC=60. Long enough for any single skill operation
  (page writes are milliseconds; a multi-write ingest pass is seconds);
  short enough that a crashed holder unblocks quickly.

Commands:
  acquire <vault-rel-path>     Acquire lock → 0 (ok) / 75 (held)
  release <vault-rel-path>     Release lock → 0 (idempotent)
  list                         List all held locks
  clear-stale [--max-age N]    Remove stale locks → prints count removed
  peek <vault-rel-path>        Query lock state → "unheld" or holder info

Global options:
  --stale-after-sec N          Override acquire stale threshold (default 60)

Exit codes:
  0  — success
  1  — runtime error
  2  — usage error
  3  — lock directory creation failed
  4  — path validation error
  75 — acquire failed (lock held by another writer)
"""

import argparse
import hashlib
import os
import sys
import time

# ── constants ────────────────────────────────────────────────────────────────
LOCK_DIR_REL = os.path.join("_meta", ".locks")
META_LOCK_DIR = ".meta_lock_dir"  # directory-based meta-lock (atomic mkdir)
STALE_AFTER_SEC_DEFAULT = 60
CLEAR_STALE_MAX_AGE_DEFAULT = 3600
META_LOCK_TIMEOUT = 5
EX_TEMPFAIL = 75
EX_USAGE = 2
EX_PATH = 4


# ── vault root detection ─────────────────────────────────────────────────────
def detect_vault_root() -> str:
    """Return vault root, preferring WIKI_LOCK_VAULT env var, else script parent."""
    env = os.environ.get("WIKI_LOCK_VAULT")
    if env:
        return os.path.abspath(env)
    # assume script lives at <vault>/scripts/wiki-lock.py
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


VAULT_ROOT = detect_vault_root()
LOCK_DIR = os.path.join(VAULT_ROOT, LOCK_DIR_REL)


# ── helpers ──────────────────────────────────────────────────────────────────
def die(msg: str, code: int = 1):
    print(f"ERR: {msg}", file=sys.stderr)
    sys.exit(code)


def log(msg: str):
    print(msg, file=sys.stderr)


def now_epoch() -> int:
    return int(time.time())


def sha1_of(s: str) -> str:
    return hashlib.sha1(s.encode("utf-8")).hexdigest()


def lock_path(rel_path: str) -> str:
    return os.path.join(LOCK_DIR, f"{sha1_of(rel_path)}.lock")


def ensure_lock_dir():
    os.makedirs(LOCK_DIR, exist_ok=True)


def read_lockfile(lf_path: str) -> tuple | None:
    """
    Read lockfile contents. Returns (pid: int, epoch: int, path: str) or None.
    Corrupt/unreadable files return None.
    """
    try:
        with open(lf_path, "r", encoding="utf-8") as f:
            line = f.readline().strip()
        if not line:
            return None
        parts = line.split(None, 2)
        if len(parts) < 3:
            return None
        pid = int(parts[0])
        epoch = int(parts[1])
        rpath = parts[2]
        return (pid, epoch, rpath)
    except (OSError, ValueError, IndexError):
        return None


def is_alive(pid: int) -> bool:
    """Return True if process with given PID exists."""
    try:
        os.kill(pid, 0)
        return True
    except OSError:
        return False


def is_within_vault(path: str) -> bool:
    """Check if resolved path stays inside vault root (anti-symlink-escape)."""
    try:
        resolved = os.path.realpath(path)
        root = os.path.realpath(VAULT_ROOT)
        return os.path.commonpath([root, resolved]) == root
    except (ValueError, OSError):
        return False


# ── path validation ──────────────────────────────────────────────────────────
def validate_path(rel_path: str):
    """Validate vault-relative path. Exit(4) on any violation."""
    if not rel_path:
        die("path cannot be empty", EX_PATH)
    if os.path.isabs(rel_path):
        die(f"path must be vault-relative, not absolute: {rel_path}", EX_PATH)
    if ".." in rel_path:
        die(f"path may not contain '..': {rel_path}", EX_PATH)
    if "\n" in rel_path:
        die("path may not contain newlines", EX_PATH)
    if "\r" in rel_path:
        die("path may not contain carriage returns", EX_PATH)

    # Symlink escape check (resolve the path if it exists or its parent exists)
    candidate = os.path.join(VAULT_ROOT, rel_path)
    if not is_within_vault(candidate):
        die(f"path resolves outside vault via symlink: {rel_path}", EX_PATH)


# ── meta-lock (directory-based, cross-platform atomic) ───────────────────────
def _with_meta_lock(func, *args, **kwargs):
    """
    Execute func under meta-lock using atomic os.mkdir().
    Cross-platform: mkdir is atomic on both POSIX and Windows.
    """
    ensure_lock_dir()
    meta_dir = os.path.join(LOCK_DIR, META_LOCK_DIR)
    start = time.time()

    while True:
        try:
            os.mkdir(meta_dir)
            break
        except FileExistsError:
            # Check staleness
            try:
                mtime = os.path.getmtime(meta_dir)
                if time.time() - mtime > META_LOCK_TIMEOUT:
                    os.rmdir(meta_dir)
                    continue
            except (OSError, FileNotFoundError):
                continue
            if time.time() - start > META_LOCK_TIMEOUT:
                die(f"could not acquire meta-lock within {META_LOCK_TIMEOUT}s", 1)
            time.sleep(0.05)

    try:
        return func(*args, **kwargs)
    finally:
        try:
            os.rmdir(meta_dir)
        except OSError:
            pass


# ── commands ─────────────────────────────────────────────────────────────────
def cmd_acquire(rel_path: str, stale_after: int) -> int:
    validate_path(rel_path)
    ensure_lock_dir()
    lf = lock_path(rel_path)
    now = now_epoch()

    # Attempt 1: atomic O_EXCL create
    try:
        fd = os.open(lf, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        content = f"{os.getpid()} {now} {rel_path}\n"
        os.write(fd, content.encode("utf-8"))
        os.close(fd)
        return 0
    except FileExistsError:
        pass

    # Lock exists — examine age
    record = read_lockfile(lf)
    if record is None:
        # Corrupt/unreadable — clean and retry once
        try:
            os.remove(lf)
        except OSError:
            pass
        try:
            fd = os.open(lf, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            content = f"{os.getpid()} {now} {rel_path}\n"
            os.write(fd, content.encode("utf-8"))
            os.close(fd)
            return 0
        except FileExistsError:
            return EX_TEMPFAIL

    _, eepoch, _ = record
    age = now - eepoch

    if age > stale_after:
        # Stale by age — reap and re-acquire
        try:
            os.remove(lf)
        except OSError:
            pass
        try:
            fd = os.open(lf, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            content = f"{os.getpid()} {now} {rel_path}\n"
            os.write(fd, content.encode("utf-8"))
            os.close(fd)
            return 0
        except FileExistsError:
            return EX_TEMPFAIL

    # Held and not yet stale
    return EX_TEMPFAIL


def cmd_release(rel_path: str) -> int:
    validate_path(rel_path)
    ensure_lock_dir()
    lf = lock_path(rel_path)
    try:
        os.remove(lf)
    except FileNotFoundError:
        pass  # idempotent
    return 0


def cmd_list() -> int:
    ensure_lock_dir()
    now = now_epoch()
    try:
        entries = os.listdir(LOCK_DIR)
    except FileNotFoundError:
        return 0

    for name in sorted(entries):
        if not name.endswith(".lock") or name == META_LOCK_DIR:
            continue
        lf = os.path.join(LOCK_DIR, name)
        if not os.path.isfile(lf):
            continue
        record = read_lockfile(lf)
        if record is None:
            continue
        pid, epoch, rpath = record
        age = now - epoch
        print(f"pid={pid} age={age}s path={rpath}")

    return 0


def cmd_clear_stale(max_age: int) -> int:
    ensure_lock_dir()
    removed = 0
    now = now_epoch()
    try:
        entries = os.listdir(LOCK_DIR)
    except FileNotFoundError:
        print(0)
        return 0

    for name in entries:
        if not name.endswith(".lock") or name == META_LOCK_DIR:
            continue
        lf = os.path.join(LOCK_DIR, name)
        if not os.path.isfile(lf):
            continue
        record = read_lockfile(lf)
        if record is None:
            try:
                os.remove(lf)
                removed += 1
            except OSError:
                pass
            continue
        pid, epoch, _ = record
        age = now - epoch
        if not is_alive(pid) or age >= max_age:
            try:
                os.remove(lf)
                removed += 1
            except OSError:
                pass

    print(removed)
    return 0


def cmd_peek(rel_path: str) -> int:
    validate_path(rel_path)
    ensure_lock_dir()
    lf = lock_path(rel_path)
    if not os.path.isfile(lf):
        print("unheld")
        return 0
    record = read_lockfile(lf)
    if record is None:
        print("unheld (corrupt lockfile)")
        return 0
    pid, epoch, rpath = record
    print(f"{pid} {epoch} {rpath}")
    return 0


# ── arg parsing ──────────────────────────────────────────────────────────────
def build_parser():
    parser = argparse.ArgumentParser(
        prog="wiki-lock.py",
        description="Per-file advisory locking for safe multi-writer vault mutation.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Commands:\n"
            "  acquire <path>     Acquire lock (0=ok, 75=held)\n"
            "  release <path>     Release lock (idempotent)\n"
            "  list               List held locks\n"
            "  clear-stale        Remove stale locks (prints count)\n"
            "  peek <path>        Query lock state\n"
        ),
    )
    parser.add_argument(
        "--stale-after-sec",
        type=int,
        default=STALE_AFTER_SEC_DEFAULT,
        help=f"Acquire stale threshold in seconds (default {STALE_AFTER_SEC_DEFAULT})",
    )
    parser.add_argument(
        "--max-age",
        type=int,
        default=None,
        help="Max age for clear-stale in seconds (default 3600)",
    )
    parser.add_argument("command", nargs="?", help="Command: acquire|release|list|clear-stale|peek")
    parser.add_argument("path", nargs="?", help="Vault-relative path")
    return parser


def main():
    parser = build_parser()
    args_flat = sys.argv[1:]

    stale_after = STALE_AFTER_SEC_DEFAULT
    max_age = None
    cmd = None
    path = None

    i = 0
    while i < len(args_flat):
        a = args_flat[i]
        if a in ("-h", "--help"):
            parser.print_help()
            sys.exit(0)
        elif a == "--stale-after-sec" and i + 1 < len(args_flat):
            stale_after = int(args_flat[i + 1])
            i += 2
        elif a == "--max-age" and i + 1 < len(args_flat):
            max_age = int(args_flat[i + 1])
            i += 2
        elif a.startswith("--stale-after-sec="):
            stale_after = int(a.split("=", 1)[1])
            i += 1
        elif a.startswith("--max-age="):
            max_age = int(a.split("=", 1)[1])
            i += 1
        elif a.startswith("-"):
            parser.print_usage()
            die(f"unknown flag: {a}", EX_USAGE)
        else:
            if cmd is None:
                cmd = a
            elif path is None:
                path = a
            else:
                die(f"unexpected argument: {a}", EX_USAGE)
            i += 1

    if cmd is None:
        parser.print_help()
        sys.exit(EX_USAGE)

    # ── dispatch ──
    try:
        if cmd == "acquire":
            if path is None:
                die("acquire needs a vault-relative path", EX_USAGE)
            rc = _with_meta_lock(cmd_acquire, path, stale_after)
            sys.exit(rc)

        elif cmd == "release":
            if path is None:
                die("release needs a vault-relative path", EX_USAGE)
            rc = _with_meta_lock(cmd_release, path)
            sys.exit(rc)

        elif cmd == "list":
            rc = _with_meta_lock(cmd_list)
            sys.exit(rc)

        elif cmd == "clear-stale":
            effective_max_age = max_age if max_age is not None else CLEAR_STALE_MAX_AGE_DEFAULT
            rc = _with_meta_lock(cmd_clear_stale, effective_max_age)
            sys.exit(rc)

        elif cmd == "peek":
            if path is None:
                die("peek needs a vault-relative path", EX_USAGE)
            rc = cmd_peek(path)  # peek is read-only, no meta-lock needed
            sys.exit(rc)

        else:
            die(f"unknown command: {cmd} (try acquire|release|list|clear-stale|peek)", EX_USAGE)

    except Exception as e:
        die(f"unexpected error: {e}", 1)


if __name__ == "__main__":
    main()
