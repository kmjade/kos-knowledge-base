---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:004.8
tags: [project, codex-logs, requirements, kos]
---

# Codex-logs Requirements Specification

> **LifeOS × LLM-Wiki Fusion System → KOS_LLM-Wiki Localization**
> AI Agent (Codex) Operation Log System Requirements Definition

---

## 1. Background & Positioning

### 1.1 Origin

This specification is derived from the "LifeOS × LLM-Wiki Fusion System" (by 一只阿木木, 2026), which proposed a complete `AI-Log/` architecture. KOS_LLM-Wiki localizes this as the `_logs/` directory, adapting it for Codex as the AI Agent runtime environment.

### 1.2 Why a Log System

| Need | Description |
|------|-------------|
| Audit trail | Record every Agent operation for traceable history |
| Context recovery | New sessions can read recent operation summaries for continuity |
| Performance measurement | Track duration and output of compile, triage operations |
| Troubleshooting | Logs provide diagnostic data when Agent operations fail |
| Knowledge traceability | Every wiki/ update can be traced back to its log entry |
| Behavior analysis | Long-term logs reveal usage patterns and knowledge growth trends |

### 1.3 Design Principles

- **Append-only**: Logs are always appended, never overwritten
- **Structured + Natural language**: Logs contain both machine-parseable frontmatter and human-readable narrative
- **Minimal overhead**: Log operations must not become a bottleneck for Agent work
- **Cross-language sync**: Directory structure mirrors across all three languages; content primarily in Chinese

---

## 2. Directory Structure

```
_logs/
├── _index.md                # Log system master index
├── sessions/                # Session logs
│   ├── 2026/
│   │   ├── 2026-06-06.md    # Daily Agent session records
│   │   └── ...
│   └── README.md            # Session log format guide
├── operations/              # Operation logs (by type)
│   ├── triage.md            # Triage operation log
│   ├── compile.md           # Compile operation log
│   └── maintenance.md       # Maintenance operation log (lint, cleanup)
├── tasks/                   # Cross-session task tracking
│   └── 2026/
│       └── 06.md            # Monthly task execution records
├── reports/                 # Reports & statistics
│   ├── weekly.md            # Weekly report
│   └── monthly.md           # Monthly report
└── archive/                 # Archived logs (> 6 months old)
    └── ...
```

### 2.1 Responsibility Matrix

| Path | Content | Writer | Reader |
|------|---------|--------|--------|
| `sessions/` | Key operation summary per session | Codex | Codex (recovery), Human |
| `operations/triage.md` | Triage records | Codex | Codex, Human (audit) |
| `operations/compile.md` | Wiki compile records | Codex | Codex, Human (audit) |
| `operations/maintenance.md` | System maintenance records | Codex | Codex |
| `tasks/` | Cross-session task tracking | Codex | Codex |
| `reports/` | Periodic statistics | Codex (auto) | Human |

---

## 3. Data Models

### 3.1 Session Log (sessions/YYYY/YYYY-MM-DD.md)

```yaml
---
created: 2026-06-06T18:30:00+08:00
type: session-log
agent: codex
session-id: 20260606-1830
duration_min: 45
operations:
  - type: triage
    count: 3
  - type: compile
    count: 1
    topics: [llm-wiki]
  - type: edit
    count: 5
files_modified: 8
files_created: 2
tokens_estimate: 15000
summary: "Processed 3 Inbox files, compiled LLM-Wiki sub-library, updated indexes"
---
```

### 3.2 Operation Log Entry (operations/*.md)

Each entry follows this format:

```markdown
## 2026-06-06T18:30 — [Operation Type]

- **Operation**: [Brief description]
- **Input**: [Source file or data]
- **Output**: [Produced files]
- **Duration**: N minutes
- **Status**: [success|partial|failed]
- **Notes**: [Exceptions, contradictions, pending items]
```

### 3.3 Task Tracking (tasks/YYYY/MM.md)

Tasks use Obsidian Tasks format:

```
- [x] Complete LLM-Wiki initial compile 📅 2026-06-05 ✅ 2026-06-05
- [ ] Set up _logs logging system 📅 2026-06-10
- [/] Generate 2026-W23 weekly report 🛫 2026-06-06
```

### 3.4 Reports (reports/*.md)

```markdown
---
created: 2026-06-06
type: report
period: weekly
week: 2026-W23
---

# Week 23 Log Report

## Operation Statistics
| Operation Type | Count | Files Involved |
|----------------|-------|----------------|
| Triage         | 5     | 8              |
| Compile        | 2     | 12             |
| Edit           | 15    | 20             |
| Maintenance    | 1     | 3              |

## Knowledge Growth
- New Wiki pages: 5
- Updated Wiki pages: 3
- New raw materials: 4

## Pending Items
- [ ] None
```

---

## 4. UDC Classification Mapping

| UDC | Category | Corresponding Log Type |
|-----|----------|------------------------|
| 001.8:004.8 | Knowledge Organization & AI Logs | System logs, session logs |
| 004.8:005.1 | AI Operation Audit | Operation logs (triage/compile) |
| 004.8:681.5 | AI System Maintenance | Maintenance logs, task tracking |
| 001.8:311 | KM Statistics | Reports |

All files under _logs use `001.8:004.8` as default UDC, with subcategories as above.

---

## 5. Tag Specifications

| Tag | Usage |
|-----|-------|
| `#codex-log` | Universal tag for all log files |
| `#codex-log/session` | Session logs |
| `#codex-log/operation` | Operation logs |
| `#codex-log/task` | Task tracking |
| `#codex-log/report` | Reports |
| `#codex-log/archive` | Archived logs |

---

## 6. Operation Flow

### 6.1 Session Start

When Codex is invoked:

1. Read the latest 3 session logs from `_logs/sessions/YYYY/`
2. Read the last 10 entries from `_logs/operations/maintenance.md`
3. Check `_logs/tasks/` for unfinished tasks
4. Record session ID in context

### 6.2 Session End

On Codex exit or user termination:

1. Append new session block to `_logs/sessions/YYYY/YYYY-MM-DD.md`
2. Update corresponding operation logs in `_logs/operations/`
3. If report data is available, update `_logs/reports/`

### 6.3 Log Write Constraints

- Log append is a low-risk operation, no secondary confirmation required
- Keep entries concise (≤ 200 chars narrative per operation entry)
- For paths containing private content, record path summaries only
- Never include passwords, keys, tokens, or credentials in logs

---

## 7. System Integration

### 7.1 With _index.md

The PARA section for 05 — Logs is already reserved in `_index.md`. This section should remain a directory placeholder and not auto-index log files to avoid excessive diffs from frequent log appends.

### 7.2 With 3 Resources

Relationship between Wiki sub-library logs and global logs:

```
3 Resources/[topic]/wiki/log.md  ← Sub-library compile details
_logs/operations/compile.md     ← Global compile summary (references sub-library logs)
```

Sub-library logs record "what content was compiled"; global logs record "the compilation operation itself".

### 7.3 With AGENTS.md

`AGENTS.md` already records the `_logs/` directory definition. Subsequent log specification changes should be synced to AGENTS.md.

---

## 8. Lifecycle & Archiving

| Log Type | Retention | Archival Strategy |
|----------|-----------|-------------------|
| Session logs | Permanent | Yearly subdirectory |
| Operation logs | Permanent | Append-only, never deleted |
| Task tracking | 12 months | Annual archive to `archive/` |
| Reports | 24 months | Annual archive to `archive/` |

Archived files get `archived: true` in frontmatter.

---

## 9. Implementation Roadmap

| Phase | Content | Prerequisite |
|-------|---------|--------------|
| **P0 — Infrastructure** | Create _logs directory skeleton, _index.md | None |
| **P1 — Session logs** | Implement sessions/ read/write spec | P0 |
| **P2 — Operation logs** | Implement operations/ read/write spec | P1 |
| **P3 — Task tracking** | Implement tasks/ read/write spec | P0 |
| **P4 — Reports** | Implement automated reports | P2 |
| **P5 — Index sync** | Improve _index.md integration | P1 |
| **P6 — Archival** | Implement archive move logic | P4 |

---

## 10. Glossary

| Term | Definition |
|------|------------|
| **Codex** | OpenAI's Coding Agent |
| **Session** | One Codex invocation (complete interaction from start to end) |
| **Triage** | Intelligent routing from Inbox to target directories |
| **Compile** | Process of generating wiki/ knowledge pages from raw/ materials |
| **LifeOS** | Obsidian personal management system based on the PARA method |
| **LLM-Wiki** | Personal knowledge Wiki maintained by LLM automatic compilation |
| **KOS** | Knowledge Organization System |
| **UDC** | Universal Decimal Classification |


