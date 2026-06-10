# KOS_LLM-Wiki Integrated System

> **架构说明书 v2.0 — English**
> **Document Status:** v2.0 · 2026-06-06
> **UDC:** 001.8:025.4:004.8
> **Tags:** `#architecture` `#kos` `#design` `#integration`

---

## 1. Overview

KOS_LLM-Wiki is a personal knowledge management system integrating three knowledge organization methods, extended with an AI Agent (Codex) operation logging system.

| Method | Role | Level |
|--------|------|-------|
| **PARA** (Tiago Forte) | Operational context | Folder level |
| **UDC** (Universal Decimal Classification) | Subject classification | Note metadata |
| **LLM-Wiki** | Knowledge domain | Content topic |
| **Codex-logs** | AI audit trail | Operation logs |

### Core Goals

1. **Actionability** — Knowledge serves action; every note has a clear contextual home
2. **Discoverability** — Triple mechanism of UDC + tags + bidirectional links ensures retrievability
3. **Evolvability** — System restructures as understanding deepens, without tool lock-in
4. **Multilingual** — Same knowledge base supports Simplified Chinese, English, and Traditional Chinese
5. **Traceability** — All AI Agent operations are fully audited through `_meta/system/logs/`

### Design Origin

This system is inspired by the "LifeOS × LLM-Wiki Fusion System" (by 一只阿木木, 2026). The original `AI-Log/` system was localized as `_meta/system/logs/`, and the Agent was switched from Claude Code to Codex (OpenAI Coding Agent), adapted to KOS_LLM-Wiki's PARA + UDC + trilingual architecture.

---

## 2. System Architecture

### 2.1 Four-Layer Model

```
┌──────────────────────────────────────────────────────────┐
│                  Navigation Layer                          │
│     Home.md · Master Index · Tag System · Graph View      │
├──────────────────────────────────────────────────────────┤
│                  Content Layer                             │
│     PARA Directory Structure + UDC Metadata + Markdown     │
│     Simplified Chinese (/) · English (en/) · Trad. Chinese (zh-tw/) │
├──────────────────────────────────────────────────────────┤
│                  Audit Layer                               │
│     _meta/system/logs/ · Session Logs · Operation Logs · Tasks · Reports│
│     Full audit trail of all Codex Agent operations         │
├──────────────────────────────────────────────────────────┤
│                  Foundation Layer                           │
│     Obsidian · Codex · Git · Markdown · Templates · Dataview │
└──────────────────────────────────────────────────────────┘
```

### 2.2 Component Relationships

```
┌───────────┐    Links/Refs    ┌───────────┐    Writes    ┌───────────┐
│  Home.md  │ ◄──────────────► │ Index File│ ◄─────────── │   Codex   │
└─────┬─────┘                  └─────┬─────┘               │  (Agent)  │
      │ Navigation                   │ Summary             └─────┬─────┘
      ▼                              ▼                          │ Logs
┌─────────────────────────────────────────┐                      │
│         PARA Folder Hierarchy            │                     │
│  0 Inbox → 1 Projects → 2 Areas          │                     │
│  → 3 Resources → 4 Archives              │                     ▼
├─────────────────────────────────────────┤              ┌───────────┐
│  Each Note: frontmatter (udc + tags)    │              │  _meta/system/logs/   │
│  Content: Markdown + [[bidirectional links]] │           │  Audit    │
└─────────────────────────────────────────┘              └───────────┘
```

### 2.3 Information Lifecycle

```
Capture (Inbox) ──→ Triage ──→ Projectize (Projects) ──→ Complete
    │                                │                       │
    │                                ▼                       ▼
    │                          Extract (Resources)      Archive
    │                                │
    └──→ Fleeting (Daily) ──→ Compile ──→ Wiki Pages
                          │
                          ▼
                     _meta/system/logs/ records everything
```

---

## 3. Complete Directory Structure

```
/
├── 0 Inbox/            # 📥 Inbox: unprocessed notes & material
│   └── Clippings/      #   External clippings (e.g., WeChat articles)
├── 1 Projects/         # 🎯 Active projects with clear goals
├── 2 Areas/            # 🏠 Ongoing areas of responsibility
├── 3 Resources/        # 📚 Reference materials & knowledge base
│   ├── LLM-Wiki/       #   LLM knowledge base
│   ├── PARA/           #   PARA methodology
│   └── UDC/            #   Universal Decimal Classification
├── 4 Archives/         # 🗄️ Archived inactive content
├── Periodic/            # 📅 Periodic notes (year/month/day)
├── _meta/system/logs/              # 🤖 Agent operation logs (audit trail)
│   ├── _index.md       #   Log system requirements specification
│   ├── sessions/       #   Session logs (by year)
│   ├── operations/     #   Operation logs (triage/compile/maintenance)
│   ├── tasks/          #   Task tracking
│   └── reports/        #   Reports & statistics
├── _meta/              # ⚙️ System metadata
│   ├── architecture.md #   This file
│   └── Templates/      #   Note templates
├── en/                 # English version (mirror structure)
├── zh-tw/              # Traditional Chinese version (mirror structure)
├── Home.md             # Home page
├── _index.md           # Master index (PARA + UDC)
├── AGENTS.md           # AI maintenance guide
└── README.md           # System readme
```

### 3.1 Hierarchy

| Level | Directory | UDC | Lifecycle | Description |
|-------|-----------|-----|-----------|-------------|
| 0 | `0 Inbox/` | — | Capture | Fleeting notes, clippings, temp files |
| 1 | `1 Projects/` | Project | Execute | Tasks with deadlines and deliverables |
| 2 | `2 Areas/` | Area | Maintain | Ongoing areas of responsibility |
| 3 | `3 Resources/` | Subject | Reference | Topical archives organized by subject |
| 4 | `4 Archives/` | — | Dormant | Inactive content from above categories |
| — | `Periodic/` | — | Journal | Periodic notes by year/month/day |
| — | `_meta/system/logs/` | 001.8:004.8 | Audit | Agent operation logs |
| — | `_meta/` | — | Meta | System templates, scripts, attachments |

---

## 4. UDC Classification System

### 4.1 Main Classes Used

| UDC Number | Category | Coverage |
|------------|----------|----------|
| 001.8 | Knowledge Organization | PARA method, KM notes, index |
| 001.8:005 | KM Methodology | PARA method details |
| 001.8:025.4 | Index & Classification | _index.md |
| 001.8:004.8 | KOS + AI | LLM-assisted KM, RAG, Codex-logs |
| 001.8:311 | KM Statistics | Log reports, statistical analysis |
| 004.8 | AI / LLM | All LLM-related notes |
| 004.8:005.1 | AI Operation Audit | Operation logs (triage/compile) |
| 004.8:519.6 | Neural Networks | Transformer architecture |
| 004.8:681.3 | ML Training | Training & fine-tuning |
| 004.8:681.5 | AI System Maintenance | Maintenance logs, task tracking |
| 004.8:159.9 | Cognitive Science | Prompt engineering |
| 025.4 | Classification | UDC-related notes |
| 025.4:001 | Classification Theory | UDC classification index |
| 025.4:004 | Digital Classification | UDC & digital KM |

### 4.2 Classification Rules

1. **Single class** — One UDC number for focused topics
2. **Composite class** — Use `:` for interdisciplinary topics (e.g., `001.8:004.8`)
3. **Granularity** — Typically 4-7 digits, extend as needed
4. **Consistency** — Same concept, same UDC across all languages
5. **Log class** — Files under `_meta/system/logs/` default to `001.8:004.8`

### 4.3 Obsidian Implementation

```yaml
---
udc: 001.8:004.8
tags: [resource, llm, kos]
---
```

---

## 5. Multi-language Architecture

### 5.1 Directory Mapping

```
Simplified Chinese (default)   English               Traditional Chinese
───────────────────────────    ──────────────        ────────────────────
/Home.md                       en/Home.md            zh-tw/首頁.md
/_索引.md                      en/_index.md          zh-tw/_index.md
/AGENTS.md                     —                     —
/2 Areas/                      en/2 Areas/           zh-tw/2 Areas/
/3 Resources/000-Knowledge/001-PARA/             en/3 Resources/000-Knowledge/001-PARA/  zh-tw/3 Resources/000-Knowledge/001-PARA/
/_meta/system/logs/                        en/_meta/system/logs/             zh-tw/_meta/system/logs/
/_meta/                        en/_meta/             zh-tw/_meta/
/_meta/Templates/              en/_meta/Templates/   zh-tw/_meta/Templates/
```

### 5.2 Sync Rules

- Create/update all three language versions when adding or modifying a note
- Keep `udc` and `tags` consistent across versions
- Use language prefix (`en/`, `zh-tw/`) for cross-referencing links
- Each language's home page includes language switcher links
- `_meta/system/logs/` content primarily in Simplified Chinese; directory structure mirrors trilingually
- `AGENTS.md` exists only at root (for Codex), no translation needed

---

## 6. Data Model

### 6.1 Note-level Metadata (frontmatter)

```yaml
---
created:      YYYY-MM-DD       # Creation date, required
updated:      YYYY-MM-DD       # Last update date, required
udc:          <class number>   # UDC classification, required
tags:         [tag1, tag2]     # Tag array, required
aliases:      [alias1, alias2] # Alternative names, optional
status:       active | archived # Status, Projects only
priority:     <number>         # Priority, Projects only
---
```

### 6.2 Tag Taxonomy

| Category | Format | Example | Description |
|----------|--------|---------|-------------|
| System | `#kos` | Core system notes | All system-level documents |
| Area | `#area/*` | `#area/llm` | Notes under 2 Areas |
| Resource | `#resource/*` | `#resource/paras` | Notes under 3 Resources |
| UDC | `#udc/*` | `#udc/004.8` | UDC classification tags |
| Template | `#template` | Template notes | Under _meta/Templates |
| Daily | `#daily` | Daily notes | Under Periodic |
| Log | `#codex-log` | Codex operation logs | Under _logs |

### 6.3 File Naming

| Language | Format | Example |
|----------|--------|---------|
| Simplified Chinese | Chinese characters + spaces | `提示工程.md` |
| English | kebab-case | `prompt-engineering.md` |
| Traditional Chinese | Chinese characters + spaces | `提示工程.md` |

---

## 7. Navigation System

### 7.1 Entry Levels

```
Level 0: Home.md             — System entry, quick navigation table
Level 1: _index.md           — Master index (PARA + UDC dual dimension)
Level 2: _meta/system/logs/_index.md     — Log system requirements & navigation
Level 3: Individual notes    — Categorized content
Level 4: Bidirectional links — Semantic relationships
```

---

## 8. Codex-logs Logging System

### 8.1 Positioning

`_meta/system/logs/` is the audit layer of KOS_LLM-Wiki, recording all Codex (AI Agent) operations. It is derived from the `AI-Log/` concept in the "LifeOS × LLM-Wiki Fusion System".

### 8.2 Directory Structure

```
_meta/system/logs/
├── _index.md         # Log system requirements spec (full format spec)
├── sessions/         # Session logs (by year: YYYY/YYYY-MM-DD.md)
├── operations/       # Operation logs
│   ├── triage.md     #   Triage operation records
│   ├── compile.md    #   Compile operation records
│   └── maintenance.md #  Maintenance operation records
├── tasks/            # Cross-session task tracking (YYYY/MM.md)
└── reports/          # Periodic reports (YYYY-WW.md, YYYY-MM.md)
```

### 8.3 Relationship with Content Layer

```
3 Resources/[topic]/wiki/log.md  ← Sub-library compile details (technical log)
_meta/system/logs/operations/compile.md      ← Global compile summary (operation log)
_meta/system/logs/sessions/YYYY-MM-DD.md     ← Session-level operation summary (audit log)
```

Sub-library logs record "what was compiled"; global logs record "the compilation operation"; session logs record "what happened in this session".

### 8.4 UDC Classification

| UDC | Category | Log Type |
|-----|----------|----------|
| 001.8:004.8 | KOS & AI Logs | System logs, session logs |
| 004.8:005.1 | AI Operation Audit | Operation logs (triage/compile) |
| 004.8:681.5 | AI System Maintenance | Maintenance logs, task tracking |
| 001.8:311 | KM Statistics | Reports |

---

## 9. AI Agent Integration (Codex)

### 9.1 Positioning

Codex is the AI Agent for this system, responsible for automated maintenance: Inbox triage, Wiki compilation, index maintenance, and log recording.

### 9.2 Operation Flow

| Operation | Trigger | Writes to | Logs to |
|-----------|---------|-----------|---------|
| Inbox triage | User: /triage | Target dir + _processed/ | `operations/triage.md` |
| Wiki compile | New material | 3 Resources/[topic]/wiki/ | `operations/compile.md` |
| File edit | User instruction | Target files | Session log |
| System maintenance | User: /lint | — | `operations/maintenance.md` |
| Session end | Auto | — | `sessions/YYYY-MM-DD.md` |

### 9.3 Constitutional Document

The system uses `AGENTS.md` (at root) to define Codex behavior rules, including:
- Directory structure definition
- New note creation rules (frontmatter, UDC, tags, multilingual sync)
- Index update requirements
- Log writing constraints

### 9.4 Differences from LifeOS × LLM-Wiki

| Dimension | Original Design | KOS_LLM-Wiki Adaptation |
|-----------|----------------|-------------------------|
| Agent | Claude Code | Codex (OpenAI) |
| Constitution | CLAUDE.md | AGENTS.md |
| Log dir | AI-Log/ | _meta/system/logs/ |
| Inbox | 00-Inbox/ → _processed/ | 0 Inbox/ → Clippings/ |
| Wiki structure | raw/ + wiki/ two-layer | Single topic dir (no raw/wiki split) |
| Classification | LifeOS tags | UDC + tags dual dimension |
| Language | Single language | Trilingual mirror |

---

## 10. Template System

### 10.1 Template Inventory

| Template | File Name | Purpose |
|----------|-----------|---------|
| Project | `project-template.md` | Tasks with deadlines |
| Area | `area-template.md` | Ongoing topics |
| Resource | `resource-template.md` | Reference material |
| Concept | `concept-template.md` | Atomic note for one concept |
| Daily | `daily-note-template.md` | Daily journal |

### 10.2 Common Fields

All templates include:
- `created` / `updated` — timestamps
- `udc` — UDC classification (blank, fill on use)
- `tags` — tag array (pre-filled with basic classification tag)

---

## 11. RAG Integration

### 11.1 Architecture

```
KOS_LLM-Wiki (Markdown)
       ↓
Text Chunking → Split by paragraphs/headings
       ↓
Embedding → text-embedding-3-small / other models
       ↓
Vector Database → Chroma / FAISS / pgvector
       ↓
Retrieval Interface → User query → Vector search → Relevant chunks → LLM answer
```

### 11.2 UDC Filtering

UDC numbers serve as metadata filters for RAG retrieval:

```
User query
  → Identify relevant UDC class (via LLM or explicit)
  → Restrict search scope to that class
  → Hybrid search (vector + keyword)
  → Rank and inject into LLM context
```

---

## 12. Maintenance Workflow

### 12.1 New Note Workflow

```
1. Determine note type → Select template
2. Fill UDC number and tags
3. Write content, link related notes
4. Create all three language versions
5. Update all three index files (PARA + UDC tables)
6. If done by Codex, log to _meta/system/logs/operations/
```

### 12.2 Monthly Review

```
1. Check 0 Inbox → Process uncategorized notes
2. Check 1 Projects → Update progress or archive
3. Check 2 Areas → Assess continued relevance
4. Check 4 Archives → Restore if needed
5. Check _meta/system/logs/ → Review Agent operations, assess system health
6. Update index files (if notes added/deleted)
```

### 12.3 Git-based CI/CD

```
Local edit → git commit → Push to remote
  → (Optional) GitHub Action triggers:
    - Markdown lint: validate frontmatter completeness
    - Verify UDC numbers exist in index
    - Check cross-language consistency
    - Generate RAG vector index
```

---

## 13. Technology Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Editor | Obsidian | Local-first, Markdown-native, graph view, plugin ecosystem |
| AI Agent | Codex (OpenAI) | Code-level agent with file read/write, search, multi-step workflows |
| Version Control | Git | Content history, branching, multi-device sync |
| Format | Markdown + YAML frontmatter | Plain text, tool-agnostic, version-control friendly |
| Classification | UDC | Full subject coverage, language-neutral, flexible composition |
| Methodology | PARA | Action-oriented, natural fit with folder structure |
| Query | Dataview (Obsidian plugin) | SQL-like metadata queries |
| Templates | Templater (Obsidian plugin) | Dynamic templates with date variables |
| Vector Search | Chroma / FAISS (optional) | RAG-enabled knowledge Q&A |

---

> **Document Maintenance:** This specification evolves with the system. Major architectural changes should update this document. Chinese original at `_meta/架构说明书.md`, Traditional Chinese at `zh-tw/_meta/架構說明書.md`.



