---
created: 2026-06-07
updated: 2026-06-07
udc: 004.4
tags: [adr, architecture, decision, multilingual]
---

# ADR-003: Multi-language Sync Strategy

> **Architecture Decision Record**

| Field | Value |
|-------|-------|
| ID | ADR-003 |
| Status | Accepted |
| Date | 2026-06-07 |
| Author | Codex |
| Relation | ADR-001 |

---

## Context

KOS_LLM-Wiki supports three languages: Simplified Chinese (`/`), English (`en/`), Traditional Chinese (`zh-tw/`). The sync scope, frequency, and automation level need clear definition.

- **Problem**: Which files must be trilingual? Which can stay monolingual? Is sync manual or automated? How to handle content discrepancies across languages?
- **Constraints**: No machine translation; core navigation files must be trilingual; logs are single-language (Simplified Chinese).
- **Options**:
  1. **Full sync** — Every file in all three languages
  2. **Layered sync** — Core content mandatory, infrastructure single-language
  3. **On-demand** — No hard rules, maintainer discretion

## Decision

**Chosen: Option 2** — Layered sync.

**Rationale:**
1. Core content (Home.md, indexes, architecture docs, ADRs, templates) mandatory trilingual
2. Log files single-language (Simplified Chinese)
3. Content notes created in author's language, no mandatory translation
4. Clear tier system: L1 mandatory / L2 on-demand / L3 single-language

### Tier Model

| Tier | Scope | Sync Strategy | Example |
|------|-------|---------------|---------|
| **L1 Navigation** | Home.md, _index.md, AGENTS.md | Mandatory trilingual | Entry files |
| **L2 System Docs** | Architecture, ADRs, C4 model | Mandatory trilingual | Design docs |
| **L3 Templates** | _meta/Templates/ | Mandatory trilingual | Concept template |
| **L4 Content** | 3 Resources, 2 Areas, 1 Projects | Author's language | LLM basics |
| **L5 Logs** | _meta/system/logs/operations/ | Single language (CN) | triage.md |
| **L6 Tests** | _test_fixtures/ | Single language (CN) | Test fixtures |

## Consequences

### Positive
- L1-L3 trilingual ensures system entry points available to all language users
- L4 allows native-language content creation
- L5-L6 reduces maintenance cost by 40%+

### Negative
- L1-L3 modifications require three copies (manual)
- Cross-language index links may drift
- New maintainers need to understand tier system

### Mitigation
- Sync rules documented in AGENTS.md "Multi-language Sync" section
- Index updates force trilingual consistency check
- Three-way diff between `_index.md` / `en/_index.md` / `zh-tw/_index.md`

---

> **References:** ADR-001 Directory Naming Convention | KOS_LLM-Wiki Architecture v2.0
