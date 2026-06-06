---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:005
tags: [resource, para, methodology]
aliases:
  - PARA Method
---

# PARA Method Overview

> **Resource:** Tiago Forte's personal knowledge management methodology.
> UDC: 001.8:005 (Knowledge Organization & Management Methods)

---

## What is PARA?

PARA is an acronym for four top-level folder categories:

| Level | Name | Description | Characteristic |
|-------|------|-------------|----------------|
| **P** | **Projects** | Goals with deadlines | Time-bound, requires output |
| **A** | **Areas** | Ongoing responsibilities | No deadline, long-term maintenance |
| **R** | **Resources** | Topics of interest | Reference material, not current responsibility |
| **A** | **Archives** | Inactive content | Dormant items from the other three categories |

## Core Principles

### 1. Actionability-centered
- Only **Projects** contain actionable tasks
- **Areas** are **standards** to maintain, not task lists
- **Resources** are **reference material** for passive consumption

### 2. Information Flow
- Information flows between P → A → R → A
- Completed projects can be promoted to areas, demoted to resources, or archived
- Archiving is not deletion — it reduces cognitive load

### 3. Minimalist File Organization
- Only four top-level directories + one archive
- Organize by topic within each directory, not by file type

## PARA in This System

```
KOS_LLM-Wiki/
├── 01-Projects/     ← Projects: clear goals and deadlines
├── 02-Areas/        ← Areas: ongoing long-term topics
├── 03-Resources/    ← Resources: reference and knowledge base
│   ├── PARA/        ← PARA method materials
│   ├── UDC/         ← Classification materials
│   └── LLM-Wiki/    ← LLM knowledge base
├── 04-Archives/     ← Archives: inactive content
├── _meta/           ← System templates/scripts
└── 06-Daily/        ← Daily notes and fleeting thoughts
```

## Integration with UDC

Each note's frontmatter includes a `udc` field, combining PARA's folder structure with UDC's subject classification for a **dual organizational dimension**:

- **PARA** provides operational context (project/area/resource)
- **UDC** provides subject classification (knowledge management/AI/classification)

## References

- Tiago Forte, *Building a Second Brain* (2022)
- [PARA Method Official Site](https://fortelabs.com/blog/para/)

## Related Notes

- [[en/03-Resources/PARA/para-and-knowledge-management|PARA & Knowledge Management]]
- [[en/03-Resources/UDC/udc-overview|UDC Overview]]
- [[en/_index|Master Index]]
