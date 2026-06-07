---
created: 2026-06-07
updated: 2026-06-07
udc: 004.4
tags: [adr, architecture, decision, logging]
---

# ADR-002: Logging System Design

> **Architecture Decision Record**

| Field | Value |
|-------|-------|
| ID | ADR-002 |
| Status | Accepted |
| Date | 2026-06-07 |
| Author | Codex |
| Relation | ADR-001 |

---

## Context

KOS_LLM-Wiki initially had both `05-Logs/` (from PARA numbering) and `_logs/` (from LifeOS convention) directories.

- **Problem**: Dual log directories caused fragmented operation records; no unified log format; blurry boundaries between session logs, operation logs, and periodic notes.
- **Constraints**: Logs must be append-only; support multilingual environment but not require full translation; all Codex Agent operations must be auditable.
- **Options**:
  1. Keep `05-Logs/` as part of PARA
  2. Unify under `_logs/` with `_meta/` as system directory family
  3. Distribute logs to each PARA directory

## Decision

**Chosen: Option 2** — Unify under `_logs/` underscore prefix.

**Rationale:**
1. `_logs/` matches `_meta/` as system infrastructure, not user content
2. Underscore prefix sorts to top of directory listing
3. Logs are meta-operations, should not mix with content classification
4. Supports append-only audit logs independent of PARA restructuring

## Consequences

### Positive
- Single log root directory, clean structure
- Operation logs (triage.md / compile.md / maintenance.md) centralized
- Session logs (sessions/) separated from operation logs

### Negative
- Log directory independent of PARA system, not indexed
- Historical logs in `05-Logs/` need migration

### Mitigation
- `_logs/` directory structure:
  ```
  _logs/
  ├── operations/
  │   ├── maintenance.md
  │   ├── triage.md
  │   └── compile.md
  └── sessions/
  ```
- Each log entry uses `YYYY-MM-DDTHH:MM` timestamp prefix
- `05-Logs/` migrated and cleaned up

---

> **References:** LifeOS x LLM-Wiki Fusion System | ADR-001 Directory Naming Convention
