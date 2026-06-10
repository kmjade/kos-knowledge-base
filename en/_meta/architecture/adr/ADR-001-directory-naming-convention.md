---
created: 2026-06-06
updated: 2026-06-06
udc: 004.4
tags: [adr, architecture, decision]
---

# ADR-001: Directory Naming Convention

> **Architecture Decision Record**

| Field | Value |
|-------|-------|
| Number | ADR-001 |
| Status | Accepted |
| Date | 2026-06-06 |
| Author | Codex |
| Related | — |

---

## Context

KOS_LLM-Wiki initially used `00-Inbox/`, `01-Projects/`, `02-Areas/`, `03-Resources/`, `04-Archives/`, `05-Logs/`, `06-Daily/` with leading zeros, while also having a `0 Inbox/` directory at root.

- **Problem statement**: Dual Inbox directories (`00-Inbox` and `0 Inbox`) caused confusion; leading-zero numbering was inconsistent with the LifeOS fusion system's `0 Inbox` style; `05-Logs/` duplicated the existing `_meta/system/logs/` directory.
- **Constraints**: Backward compatibility with Obsidian links; PARA level numbering must remain identifiable; directory names must be filesystem-legal.
- **Alternatives considered**:
  1. Keep leading-zero format (`00-`), merge duplicates
  2. Remove leading zeros uniformly (`0 Inbox`, `1 Projects`), `_logs` keeps underscore prefix
  3. Switch to English-only naming (`inbox/`, `projects/`)

## Decision

**Chosen option:** Option 2 — Remove leading zeros uniformly; `_logs` uses underscore prefix for system directories.

**Rationale:**
1. Consistent with LifeOS × LLM-Wiki fusion system's `0 Inbox` style, reducing cognitive load
2. `_logs` underscore prefix follows `_meta` convention, clearly marking system directories
3. Numeric ordering preserved (0→4) for intuitive PARA hierarchy
4. Mixed Chinese-English format (`1 Projects`) renders well in Obsidian

## Consequences

### Positive
- Cleaner directory structure with no redundancy
- `_meta/system/logs/` and `_meta/` share consistent naming style
- All links updated (one-time cost)

### Negative
- All existing wiki links need batch updates
- External references pointing to old paths break

### Mitigation
- PowerShell script for batch path replacement across all files
- Old-to-new path mapping documented in AGENTS.md
- Old directory names traceable in git history; no compatibility layer needed

---

> **References:** LifeOS × LLM-Wiki Fusion System (by 一只阿木木, 2026) | PARA Method (Tiago Forte)
