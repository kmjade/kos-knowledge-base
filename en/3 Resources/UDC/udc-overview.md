---
created: 2026-06-06
updated: 2026-06-06
udc: 025.4
tags: [resource, udc, classification]
---

# UDC Overview

> **Resource:** Introduction to the Universal Decimal Classification system.
> UDC: 025.4 (Classification & Indexing)

---

## What is UDC?

The Universal Decimal Classification (UDC) was created by Paul Otlet and Henri La Fontaine between 1895-1905. It is one of the earliest universal classification systems, using Arabic numerals and auxiliary symbols to represent the entire domain of human knowledge.

## UDC Structure

### Main Classes

```
0 — Generalities (science, knowledge, information)
1 — Philosophy, Psychology
2 — Religion, Theology
3 — Social Sciences
4 — Vacant (formerly Linguistics, merged into 8)
5 — Natural Sciences
6 — Applied Sciences, Medicine, Technology
7 — Arts, Recreation, Sports
8 — Language, Linguistics, Literature
9 — Geography, History
```

### Auxiliary Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| `:` | Relation (combines classes) | 001.8:004.8 → Knowledge Organization & AI |
| `+` | Coordination | 004+005 → Computers + Management |
| `/` | Range | 004/006 → Computers through Standardization |
| `-` | Hyphen (subclass) | 004.8-02 → LLM properties |
| `(0)` | Document type | (03) → Encyclopedia |
| `(=)` | Language | =111 → English |

### Common Subdivisions

- `.0` — General subdivisions
- `.1` — Theory, principles
- `.2` — Analysis, methods
- `.3` — Equipment, tools
- `.5` — Management, organization
- `.8` — Applications

## Using UDC in This System

Each note's frontmatter includes a `udc` field:

```yaml
---
udc: 004.8
tags: [resource, llm]
---
```

This enables filtering notes by UDC number via Obsidian search or DataView queries.

## Why UDC?

1. **Universality** — Covers all knowledge domains
2. **Flexibility** — Composite symbols express complex subjects
3. **Hierarchy** — Fine-grained control from broad to specific
4. **Language-neutral** — Numeric identifiers

## Related Notes

- [[en/03-Resources/UDC/udc-classification-index|UDC Classification Index]]
- [[en/03-Resources/UDC/udc-and-digital-km|UDC & Digital KM]]
- [[en/03-Resources/PARA/para-overview|PARA Method Overview]]
