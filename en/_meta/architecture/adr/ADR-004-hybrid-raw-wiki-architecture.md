---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [adr, architecture, sub-library, raw-wiki]
status: accepted
---

# ADR-004: Wiki Sub-library Architecture — Hybrid raw/wiki Scheme

## Context

V1.1 (M3) planned to upgrade each sub-library under `3 Resources/` (LLM-Wiki, PARA, UDC) with independent `raw/` + `wiki/` two-layer structures.

## Decision

Adopt a **shared + per-sublibrary** hybrid structure:

```
3 Resources/000-Knowledge/
├── 001-PARA/
│   ├── raw/          # PARA-specific source materials
│   └── wiki/         # PARA-specific compiled pages
├── 004-LLM-Wiki/
│   ├── raw/          # LLM-Wiki-specific source materials
│   └── wiki/         # LLM-Wiki-specific compiled pages
├── 025-UDC/
│   ├── raw/          # UDC-specific source materials
│   └── wiki/         # UDC-specific compiled pages
├── raw/              # Cross-cutting source materials (by type)
├── wiki/             # Cross-cutting compiled content (by type)
└── _meta/            # System metadata
```

## Rationale

1. **Avoid fragmentation** — Cross-cutting content stored once
2. **Shared entities** — People, concepts shared across sub-libraries
3. **Topic focus** — Each sub-library maintains its own raw/wiki for UDC-specific content
4. **Gradual migration** — No need for one-shot restructuring

## Status

Accepted. M3 closed with this architecture.
