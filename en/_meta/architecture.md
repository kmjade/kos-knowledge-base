# KOS_LLM-Wiki Architecture Specification

> **Document Status:** v1.0 · 2026-06-06  
> **UDC:** 001.8:025.4:004.8  
> **Tags:** `#architecture` `#kos` `#design`

---

## 1. Overview

KOS_LLM-Wiki is a personal knowledge management system that integrates three knowledge organization methods:

| Method | Role | Level |
|--------|------|-------|
| **PARA** (Tiago Forte) | Operational context | Folder level |
| **UDC** (Universal Decimal Classification) | Subject classification | Note metadata |
| **LLM-Wiki** | Knowledge domain | Content topic |

### Core Goals

1. **Actionability** — Knowledge serves action; every note has a clear contextual归属
2. **Discoverability** — Triple mechanism of UDC + tags + bidirectional links ensures retrievability
3. **Evolvability** — The system can be restructured as understanding deepens, without tool lock-in
4. **Multilingual** — Same knowledge base supports Simplified Chinese, English, and Traditional Chinese

---

## 2. System Architecture

### 2.1 Three-Layer Model

```
┌──────────────────────────────────────────────────────┐
│                 Navigation Layer                       │
│    Home.md · Master Index · Tag System · Graph View   │
├──────────────────────────────────────────────────────┤
│                   Content Layer                        │
│   PARA Directory Structure + UDC Metadata + Markdown  │
│   Simplified Chinese (/) · English (en/) · Traditional Chinese (zh-tw/) │
├──────────────────────────────────────────────────────┤
│                  Foundation Layer                      │
│   Obsidian · Git · Markdown · Template System · Dataview │
└──────────────────────────────────────────────────────┘
```

### 2.2 Component Relationships

```
┌───────────┐     Links/Refs     ┌───────────┐
│  Home.md  │ ◄──────────────►  │ Index Files│
└─────┬─────┘                   └─────┬─────┘
      │ Navigation                    │ Summary
      ▼                               ▼
┌─────────────────────────────────────────┐
│          PARA Folder Hierarchy           │
│  00-Inbox → 01-Projects → 02-Areas      │
│  → 03-Resources → 04-Archives           │
├─────────────────────────────────────────┤
│  Each Note: frontmatter (udc + tags)    │
│  Content: Markdown + [[bidirectional links]] │
└─────────────────────────────────────────┘
```

---

## 3. PARA Folder Structure

### 3.1 Hierarchy

| Level | Folder | Lifecycle | Characteristics |
|-------|--------|-----------|-----------------|
| 0 | `00-Inbox/` | Capture | Fleeting notes, clippings, temp files |
| 1 | `01-Projects/` | Execute | Tasks with deadlines and deliverables |
| 2 | `02-Areas/` | Maintain | Ongoing areas of responsibility |
| 3 | `03-Resources/` | Reference | Topical archives organized by subject |
| 4 | `04-Archives/` | Dormant | Inactive content from above categories |
| — | `06-Daily/` | Journal | Daily notes, timeline perspective |
| — | `_meta/` | Meta | System templates, scripts, attachments |

### 3.2 Information Flow

```
Capture (Inbox) → Projectize (Projects) → Complete
    ↓                                              ↓
Archive (Archives) ← Area-ize (Areas) ← Extract (Resources)
```

- Inbox notes are processed into Projects or Resources
- Completed projects: deliverables → Resources, project notes → Archives
- Frequently referenced Resources can be promoted to Areas

---

## 4. UDC Classification System

### 4.1 Main Classes Used

| UDC Number | Category | Coverage |
|------------|----------|----------|
| 001.8 | Knowledge Organization | PARA method, KM notes, index |
| 004.8 | AI / LLM | All LLM-related notes |
| 025.4 | Classification | UDC-related notes |
| 001.8:005 | KM Methodology | PARA method details |
| 001.8:004.8 | KOS + AI | LLM-assisted KM, RAG |

### 4.2 Classification Rules

1. **Single class** — Use one UDC number for focused topics
2. **Composite class** — Use `:` for interdisciplinary topics (e.g., `001.8:004.8`)
3. **Granularity** — Typically 4-7 digits, extend as needed
4. **Consistency** — Same concept uses same UDC number across all languages

### 4.3 Obsidian Implementation

```yaml
---
udc: 001.8:004.8
tags: [resource, llm, kos]
---
```

Query methods:
- Obsidian search: `udc:004.8`
- Dataview: `TABLE udc FROM "en/03-Resources" WHERE contains(udc, "004.8")`

---

## 5. Multi-language Architecture

### 5.1 Directory Mapping

```
Simplified Chinese (default)   English               Traditional Chinese
───────────────────────────    ──────────────        ────────────────────
/Home.md                       en/Home.md            zh-tw/首頁.md
/_索引.md                      en/_index.md          zh-tw/_index.md
/02-Areas/                     en/02-Areas/          zh-tw/02-Areas/
/03-Resources/PARA/            en/03-Resources/PARA/ zh-tw/03-Resources/PARA/
/...                           en/...                zh-tw/...
/_meta/Templates/              en/_meta/Templates/   zh-tw/_meta/Templates/
```

### 5.2 Sync Rules

- When adding or modifying a note, create/update all three language versions
- Keep `udc` and `tags` fields consistent across versions
- Use language prefix (`en/`, `zh-tw/`) for cross-referencing links
- Each language's home page includes language switcher links in the footer

---

## 6. Data Model

### 6.1 Note-level Metadata (frontmatter)

```yaml
---
created:      YYYY-MM-DD       # Creation date, required
updated:      YYYY-MM-DD       # Last update date, required
udc:          <class number>   # UDC classification, required
tags:         [tag1, tag2]     # Tag array, required (at least one classification tag)
aliases:      [alias1, alias2] # Alternative names, optional
status:       active | archived # Status, Projects only
priority:     <number>         # Priority, Projects only
---
```

### 6.2 Tag Taxonomy

| Category | Format | Example |
|----------|--------|---------|
| System | `#kos` | Core system notes |
| Area | `#area/*` | `#area/llm` |
| Resource | `#resource/*` | `#resource/paras` |
| UDC | `#udc/*` | `#udc/004.8` |
| Template | `#template` | Template notes |
| Daily | `#daily` | Daily notes |

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
Level 2: Folder README       — Category overview (reserved)
Level 3: Note bidirectional links — Semantic relationships
```

### 7.2 Index Table Structure

**PARA Dimension Table:**

```
| Note                              | UDC          | Tags                   |
|-----------------------------------|--------------|------------------------|
| [[link to note\|display name]]    | 001.8:005    | #resource/paras        |
```

**UDC Dimension Table:**

```
| UDC Number    | Category           | Related Notes                         |
|---------------|--------------------|---------------------------------------|
| 001.8         | Knowledge Organization | Home, _index, Knowledge Management, ... |
```

---

## 8. Template System

### 8.1 Template Inventory

| Template | File Name | Purpose |
|----------|-----------|---------|
| Project | `project-template.md` | Tasks with deadlines |
| Area | `area-template.md` | Ongoing topics |
| Resource | `resource-template.md` | Reference material |
| Concept | `concept-template.md` | Atomic note for one concept |
| Daily | `daily-note-template.md` | Daily journal |

### 8.2 Common Fields

All templates include:
- `created` / `updated` — timestamps
- `udc` — UDC classification (blank, fill on use)
- `tags` — tag array (pre-filled with basic classification tag)

---

## 9. RAG Integration

### 9.1 Architecture

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

### 9.2 UDC Filtering

UDC numbers serve as metadata filters for RAG retrieval:

```
User query
  → Identify relevant UDC class (via LLM classification or explicit)
  → Restrict search scope to that class
  → Hybrid search (vector + keyword)
  → Rank and inject into LLM context
```

---

## 10. Maintenance Workflow

### 10.1 New Note Workflow

```
1. Determine note type → Select template
2. Fill UDC number and tags
3. Write content, link related notes
4. Create all three language versions
5. Update index files (PARA table and UDC table)
```

### 10.2 Monthly Review Cycle

```
1. Check 00-Inbox → Process uncategorized notes
2. Check 01-Projects → Update progress or archive
3. Check 02-Areas → Assess continued relevance
4. Check 04-Archives → Restore if needed
5. Update index files (if notes added/deleted)
```

### 10.3 Git-based CI/CD

```
Local edit → git commit → Push to remote
  → (Optional) GitHub Action triggers:
    - Markdown lint: validate frontmatter completeness
    - Verify UDC numbers exist in index
    - Check cross-language consistency
    - Generate RAG vector index
```

---

## 11. Technology Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Editor | Obsidian | Local-first, Markdown-native, graph view, plugin ecosystem |
| Version Control | Git | Content history, branching, multi-device sync |
| Format | Markdown + YAML frontmatter | Plain text, tool-agnostic, version-control friendly |
| Classification | UDC | Full subject coverage, language-neutral, flexible composition |
| Methodology | PARA | Action-oriented, natural fit with folder structure |
| Query | Dataview (Obsidian plugin) | SQL-like metadata queries |
| Templates | Templater (Obsidian plugin) | Dynamic templates with date variables |
| Vector Search | Chroma / FAISS (optional) | RAG-enabled knowledge Q&A |

---

> **Document Maintenance:** This specification evolves with the system. Major architectural changes should update this document.
