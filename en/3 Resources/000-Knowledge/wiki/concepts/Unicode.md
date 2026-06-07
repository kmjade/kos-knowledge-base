---
aliases: [Unicode, Unicode Standard, UCS]
created: 2026-06-07
updated: 2026-06-07
udc: "003"
ddc: "400"
tags:
  - #udc/003
type: concept
topic: standards
category: Character Encoding
lang: en
status: draft
---

# Unicode

> The universal character encoding standard that assigns a unique code point to every character.

## Definition

Unicode is an industry standard that assigns a unique numeric identifier (code point) to every character across all writing systems worldwide. It solves the interoperability problems of legacy encoding schemes (such as ASCII, ISO-8859 series), enabling multilingual text to coexist in the same document.

## Core Concepts

| Concept | Description |
|:--------|:------------|
| Code Point | Unique number for each character, formatted as `U+XXXX` |
| Plane | 17 planes, each with 65536 code points |
| BMP (Basic Multilingual Plane) | U+0000 ~ U+FFFF |
| Encoding Forms | UTF-8, UTF-16, UTF-32 |

## Encoding Comparison

| Form | Bytes/Char | Features |
|:-----|:----------:|:---------|
| UTF-8 | 1~4 | ASCII-compatible, web standard |
| UTF-16 | 2~4 | Windows/Java internal use |
| UTF-32 | 4 | Fixed-width, space-inefficient |

## Related Concepts

- [[3 Resources/000-Knowledge/wiki/concepts/YAML|YAML]] — Unicode characters in configuration files
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|Metadata]] — Unicode as the foundation of metadata readability
