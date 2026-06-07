---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [resource, llm, source, lifeos, architecture]
type: wiki-source
reviewed: true
---

# Source: LifeOS × LLM-Wiki Fusion System

> Original article by 一只阿木木 (Yi Zhi A Mu Mu), May 2026.
> This is the design source and inspiration for KOS_LLM-Wiki.

## Summary

This article proposes the **LifeOS × LLM-Wiki Fusion System** architecture — the core design source for this knowledge base. The system is built on three axioms:

**Axiom 1: Single Vault, Never Split** — All content enters one Obsidian Vault, managed via clear isolation boundaries (not multiple vaults).

**Axiom 2: AI is a Compiler, Not a Conversation Partner** — For life information AI is a router; for professional knowledge AI is a compiler. The user only produces and consumes information; all organization work is handled by AI.

**Axiom 3: Information Has a Lifecycle** — Not everything deserves permanent storage. The system's core goal is to reduce maintenance cost to zero.

## Mapping to KOS_LLM-Wiki

| Original Concept | KOS_LLM-Wiki Implementation |
|-----------------|------------------------------|
| 00-Inbox | 0 Inbox/ |
| 01-Projects / 02-Areas | 1 Projects/ / 2 Areas/ |
| 03-Resources/{raw,wiki} | 3 Resources/ with raw/wiki |
| 04-Archive | 4 Archives/ |
| AI-Log/ | _logs/ |
| CLAUDE.md (constitution) | AGENTS.md |
| /triage engine | KOS-Triage |
| /wiki-compile engine | KOS-Wiki-Compile |
| People CRM | 3 Resources/People/wiki/ |
| Tri-language | CN/EN/TW (new in KOS) |
| UDC Classification | Added in KOS (original used tags only) |

## Key Differences from Original

| Dimension | Original Design | KOS_LLM-Wiki |
|-----------|----------------|--------------|
| Agent | Claude Code | Codex (OpenAI) |
| Classification | Tag system | UDC + tags dual-dimension |
| Language | Single | Tri-language mirror |
| Constitution | CLAUDE.md | AGENTS.md |

## Reference

- Source: `3 Resources/000-Knowledge/raw/articles/LifeOS/LifeOS × LLM-Wiki 融合系统.md`
- Related: [[kos-and-llm]]
- Author: 一只阿木木 (Yizhi Amumu)
