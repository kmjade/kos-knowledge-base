---
aliases:
  - UDC+LLM-Wiki Architecture
  - UDC-Wiki Integration
created: 2026-06-07
updated: 2026-06-08
version: "1.0"
status: stable
type: design
parent: "[[../../../../2 Areas/知识组织/UDC+LLM-Wiki 整合系统/UDC+LLM-Wiki 整合系统 v1.0|UDC+LLM-Wiki Integration (CN)]]"
tags:
  - architecture
  - design
  - udc
  - classification
  - knowledge-organization
---

# UDC+LLM-Wiki Integration System v1.0

> Universal Decimal Classification x LLM-Wiki Knowledge Compilation Engine
> Faceted Classification | Cross-System Mapping | Knowledge Graph Enhancement

English mirror of [[UDC+LLM-Wiki 整合系统 v1.0 (CN)]]. See CN version for the full architecture document.

## Key Concepts

- **DDC as Skeleton, UDC as Joints** — DDC provides rigid structure (10-class system), UDC provides flexible movement (faceted composition)
- **Cross-System Translation** — DDC, UDC, CLC, LCC are mutually translatable classification languages
- **Facets as Hyperlinks** — UDC compound numbers (`:`) are explicit concept-to-concept links

## System Architecture

```
DDC Skeleton Layer (macro classification)
    |
UDC Joint Layer (micro indexing + facets)
    |
Facet Engine (compound number generation)
    |
Cross-Mapping Matrix (DDC <-> UDC <-> CLC <-> LCC)
    |
wiki/concepts/[concept].md (frontmatter with classification codes)
```

## Frontmatter Example

```yaml
udc: "004.8:004.93"     # UDC compound number
ddc: "000"              # DDC main class
clc: "TP18"             # CLC
lcc: "QA76.9.N38"       # LCC
tags: ["#udc/tech/ai"]  # UDC tags
```

## Related

- [[kos-llm-wiki-architecture|KOS+LLM-Wiki Architecture]]
- [[../../../../_meta/🔗 知识关联/Index/_index|Master Index]]
