---
title: "WIKI — Vault Entry Point"
created: 2026-06-12
updated: 2026-06-12
udc: 001.8
tags: [meta, entry, guide]
---

# KOS_LLM-Wiki — Vault Entry

> Read this page first. It explains what this vault is and how to use it.

## What is this vault?

A **Knowledge Organization System** built on Obsidian, powered by AI agents. It combines PARA method, UDC classification, and LLM-Wiki knowledge graph patterns across three languages (CN/EN/TW).

## Quick start for AI agents

```
1. Read this file (WIKI.md) — you're here
2. Read AGENTS.md for full behavioral rules
3. Read _meta/hot.md for recent context
4. Run KOS-Status to check vault health
```

## Available commands

| Command | What it does |
|---------|-------------|
| `KOS-Status` | Vault health summary |
| `KOS-Triage [--mode <para|lyt|zettel|generic>] [--file <path>]` | Process inbox → route to target |
| `KOS-Wiki-Compile [--mode <...>] [--file <path>]` | Compile raw → wiki pages |
| `KOS-Research --topic "..." [--depth <quick|standard|deep>]` | Autonomous web research |
| `KOS-Link [--path <dir>] [--fix]` | Health check (7 levels) |
| `KOS-Query [quick|standard|deep] <question>` | Knowledge base query |
| `KOS-Project` | Create/manage projects |
| `Daily Open` / `Day-Review` | Daily note / review |
| `KOS-Init [--status] [--fix]` | Initialize / health check vault |

## Vault structure

```
0 Inbox/          → Inbox pipeline (1-input → 2-output → 3-outcome)
1 Projects/       → ITO lifecycle (proposal → execution → completion → archive)
2 Areas/          → Life domains (学习/工作/生活)
3 Resources/      → Knowledge base (concepts/entities/sources)
4 Archives/       → Cold storage
_meta/            → System (templates/scripts/logs/ai/memory)
Periodic/         → Daily/weekly/monthly notes
en/ + zh-tw/      → Language mirrors
```

## Methodology modes

This vault supports four organizational methodologies (set via `methodology` frontmatter field):

- `para` — Projects/Areas/Resources/Archives (default)
- `lyt` — MOC navigation + Ace principle
- `zettel` — Atomic notes + Folgezettel + Hubs
- `generic` — Minimal structure, tags + links

## Key files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Full behavioral rules for AI agents |
| `_meta/hot.md` | Session context cache |
| `_meta/index/links/Index/_index-zh-cn.md` | Master index (CN) |
| `_meta/system/templates/modes/` | Mode-specific note templates |
| `.codex/skills/` | KOS skill definitions (authoritative source) |
| `.claude/hooks.json` | Session lifecycle hooks |
| `_meta/system/scripts/wiki-lock.py` | File locking for multi-writer safety |

## First-time setup

If this is a new vault session:
1. Confirm Obsidian is available
2. Check Local REST API plugin (port 27124) if MCP transport needed
3. Run `KOS-Init --status` to verify vault integrity
4. Run `KOS-Status` to check inbox/project health
5. Run `Daily Open` to create today's note
