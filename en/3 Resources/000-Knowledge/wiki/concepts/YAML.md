---
aliases: [YAML, YAML Ain't Markup Language, YAML format]
created: 2026-06-07
updated: 2026-06-07
udc: "004.6"
ddc: "005"
tags:
  - #udc/004
type: concept
topic: data-formats
category: Data Formats
lang: en
status: draft
---

# YAML

> "YAML Ain't Markup Language" — A human-readable data serialization format.

## Definition

YAML (.yaml / .yml) is a human-readable data serialization language commonly used for configuration files, metadata declarations, and data exchange. Its design goal is readability while retaining structured data expression capabilities.

## Core Syntax

```yaml
# Key-value pair
key: value

# Nested
parent:
  child: value

# Lists
items:
  - item1
  - item2

# Multiline text
text: |
  Line 1
  Line 2
```

## Applications in This Knowledge Base

- **Frontmatter** — Markdown note metadata uses YAML format
- **Configuration** — Obsidian, Templater, Dataview plugin configs
- **Data Exchange** — Tag classifications, UDC mappings

## Related Concepts

- [[3 Resources/000-Knowledge/wiki/concepts/frontmatter|frontmatter]] — YAML in Markdown note metadata
- [[3 Resources/000-Knowledge/wiki/concepts/Unicode|Unicode]] — Character encoding for YAML files
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|Metadata]] — YAML as a metadata expression format
