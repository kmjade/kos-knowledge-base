---
aliases: [Frontmatter, YAML Frontmatter, Metadata Header, Front matter]
created: 2026-06-07
updated: 2026-06-07
udc: "025.3"
ddc: "050"
tags:
  - #udc/025
type: concept
topic: knowledge-organization
category: Metadata
lang: en
status: draft
---

# Frontmatter

> YAML metadata block at the top of Markdown files for structured note properties.

## Definition

Frontmatter is a YAML-format metadata block at the top of Markdown files, delimited by `---`, used to record structured information such as creation date, update date, classification code, and tags. Every note in this knowledge base includes standard frontmatter fields: `created`, `updated`, `udc`, `tags`.

## Standard Fields

| Field | Description | Example |
|:------|:------------|:--------|
| `created` | Creation date | `2026-06-07` |
| `updated` | Last updated date | `2026-06-07` |
| `udc` | UDC class number | `"004.8"` |
| `tags` | Tag list | `[ai, llm]` |

## Related Concepts

- [[3 Resources/000-Knowledge/wiki/concepts/YAML|YAML]] — Serialization format used by frontmatter
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|Metadata]] — Data about data, frontmatter is one implementation

## Tool Support

- Obsidian natively parses frontmatter
- Dataview plugin queries frontmatter for metadata search
