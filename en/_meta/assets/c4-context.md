---
created: 2026-06-06
updated: 2026-06-06
udc: 004.4
tags: [c4, architecture, diagram, software-engineering]
---

# C4 Model Diagrams — KOS_LLM-Wiki

> **Reference Architecture:** PARA × LLM-Wiki Fusion System + LifeOS Design Philosophy
> **Tool:** Mermaid.js (inline Markdown rendering)

---

## L1 — Context

```mermaid
C4Context
  title System Context — KOS_LLM-Wiki

  Person(user, "Knowledge Worker", "Note creator and consumer")

  System_Boundary(kos, "KOS_LLM-Wiki Knowledge System") {
    System(vault, "Obsidian Vault", "Markdown note repository")
    System(codex, "Codex AI Agent", "Auto triage, compile, audit")
  }

  System_Ext(git, "Git Version Control", "Change history & multi-device sync")
  System_Ext(editor, "Obsidian Editor", "Note writing & graph browsing")

  Rel(user, vault, "Read/write notes")
  Rel(user, codex, "Issue commands")
  Rel(codex, vault, "Automated maintenance")
  Rel(codex, git, "Commit changes")
  Rel(vault, editor, "Render & edit")
  Rel(vault, git, "Store history")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L1 Description

| Element | Role |
|---------|------|
| **Knowledge Worker** | Core user. Creates notes, issues commands, consumes knowledge |
| **Obsidian Vault** | Markdown note repository. Stores all content & metadata |
| **Codex AI Agent** | Automated maintenance engine. Performs triage, compile, logging |
| **Git** | Version control backend. Ensures traceability & rollback |
| **Obsidian Editor** | Frontend tool. Provides graph view, bidirectional links, templates |

---

## L2 — Container View

```mermaid
C4Container
  title Container Diagram — KOS_LLM-Wiki Internal Containers

  Person(user, "Knowledge Worker")

  System_Boundary(vault, "Obsidian Vault") {
    Container(para, "PARA Directory", "File System", "0 Inbox → 1 Projects → 2 Areas → 3 Resources → 4 Archives")
    Container(meta, "Metadata Layer", "YAML frontmatter", "UDC + tags + timestamps")
    Container(index, "Index System", "Markdown tables", "PARA table + UDC table + tag groups")
    Container(templates, "Template System", "Markdown templates", "Project/Area/Resource/Concept/Daily/ADR")
    Container(logs, "Audit Layer", "Markdown logs", "Session + Operations + Task tracking")
  }

  System_Ext(codex, "Codex AI Agent")
  System_Ext(obsidian, "Obsidian Editor")

  Rel(user, para, "Browse & organize")
  Rel(user, meta, "Fill UDC & tags")
  Rel(user, index, "Navigate")
  Rel(user, codex, "Issue commands")
  Rel(codex, para, "Triage inbox, create notes")
  Rel(codex, meta, "Maintain frontmatter")
  Rel(codex, index, "Sync updates")
  Rel(codex, logs, "Write operation logs")
  Rel(templates, meta, "Provide frontmatter skeleton")
  Rel(index, para, "Aggregate note list")
  Rel(logs, para, "Record operation targets")
  Rel(user, obsidian, "Edit notes")
  Rel(obsidian, para, "Read/write files")
  Rel(obsidian, meta, "Render frontmatter")
```

### L2 Description

| Container | Technology | Responsibility |
|-----------|------------|----------------|
| **PARA Directory** | Filesystem dirs | Organize notes by Inbox/Projects/Areas/Resources/Archives |
| **Metadata Layer** | YAML frontmatter | UDC, tags, timestamps per note |
| **Index System** | Markdown tables | Master index (PARA + UDC + tags) |
| **Template System** | Templater templates | Standardized skeleton for new notes |
| **Audit Layer** | Markdown logs | Full-chain audit trail for Codex operations |

---

## L3 — Component View: PARA Directory Structure

```mermaid
C4Component
  title Component Diagram — PARA Directory Structure

  Container_Boundary(para, "PARA Directory") {
    Component(inbox, "0 Inbox", "Inbox", "Unprocessed notes & clippings")
    Component(projects, "1 Projects", "Projects", "Active projects with deadlines")
    Component(areas, "2 Areas", "Areas", "Ongoing topics of responsibility")
    Component(resources, "3 Resources", "Resources", "Reference materials & knowledge")
    Component(archives, "4 Archives", "Archives", "Inactive content")
    Component(daily, "Periodic", "Periodic Notes", "Year/month/day layered timeline")
  }

  Component(agent, "Codex Agent", "Automation engine")
  Component(triage, "Triage Flow", "Inbox → target directory")
  Component(compile, "Compile Flow", "Compile wiki pages")

  Rel(inbox, triage, "Processed by")
  Rel(triage, projects, "Route to", "Task content")
  Rel(triage, areas, "Route to", "Area content")
  Rel(triage, resources, "Route to", "Reference content")
  Rel(triage, daily, "Route to", "Fleeting ideas")
  Rel(agent, triage, "Triggers")
  Rel(agent, compile, "Triggers")
  Rel(compile, resources, "Write wiki pages")
  Rel(projects, archives, "Archive on completion")
  Rel(areas, archives, "Archive if inactive")
  Rel(resources, archives, "Archive if expired")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L3 Description

| Component | Lifecycle | Operator |
|-----------|-----------|----------|
| **0 Inbox** | Capture → Process | Human writes, Codex triages |
| **1 Projects** | Execute → Archive | Human + Codex |
| **2 Areas** | Maintain → Archive | Human + Codex |
| **3 Resources** | Reference → Archive | Human writes raw, Codex compiles wiki |
| **4 Archives** | Dormant | Codex auto-archives |
| **Periodic** | Journal | Human + Codex |

---

## L4 — Code Patterns (ADR & Flows)

```mermaid
flowchart LR
  subgraph ADR[ADR Decision Flow]
    A[Problem raised] --> B[Research options]
    B --> C[Evaluate tradeoffs]
    C --> D{Decision}
    D -->|Accepted| E[Execute]
    D -->|Deprecated| F[Mark deprecated]
    E --> G[Record consequences]
    G --> H[Periodic review]
    H -->|New info| D
  end

  subgraph UDC[UDC Classification Flow]
    I[New note] --> J[Determine UDC main class]
    J --> K{Composite topic?}
    K -->|Yes| L[Use : separator]
    K -->|No| M[Single class number]
    L --> N[Fill frontmatter]
    M --> N
    N --> O[Update index]
  end

  subgraph LOG[Log Audit Flow]
    P[Codex operation] --> Q{Operation type}
    Q -->|Triage| R[triage.md]
    Q -->|Compile| S[compile.md]
    Q -->|Edit| T[Session log]
    Q -->|Maintenance| U[maintenance.md]
    R --> V[Append record]
    S --> V
    T --> V
    U --> V
  end
```

---

## Legend & Usage

| C4 Level | View | Audience | File Location |
|----------|------|----------|---------------|
| L1 Context | System panorama | All stakeholders | `_meta/assets/c4-context.md` |
| L2 Container | Technical containers | Architects, developers | `_meta/assets/c4-container.md` |
| L3 Component | Component details | Developers | `_meta/assets/c4-component.md` |
| L4 Code | Key patterns | Developers | `_meta/assets/c4-patterns.md` |

### Rendering Requirements

C4 diagrams use Mermaid.js syntax. Obsidian requires **Mermaid plugin** or native Mermaid support (v1.8+ built-in). Diagrams render automatically in Obsidian Publish.

---

> **Maintainer:** These C4 diagrams should stay in sync with `_meta/architecture.md`. Update the corresponding level when system architecture changes.


