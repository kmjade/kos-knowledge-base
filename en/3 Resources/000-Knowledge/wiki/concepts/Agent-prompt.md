---
aliases: [Agent Prompt, Agent Prompting, AI Agent Prompt]
created: 2026-06-07
updated: 2026-06-07
udc: "004.8"
ddc: "006"
tags:
  - #udc/004
type: concept
topic: ai-prompting
category: LLM
lang: en
status: draft
---

# Agent Prompt

> Instruction design strategies for AI agents, distinct from single-turn prompting.

## Definition

Agent Prompt refers to prompt engineering methods designed for AI agents that can execute multi-step operations, call tools, and manage context. Unlike ordinary prompts, agent prompts must include tool definitions, action space constraints, state management instructions, and error recovery strategies.

## Key Elements

- **System Role** — Agent identity and behavioral boundaries
- **Tool Descriptions** — Available tool signatures and usage
- **Action Format** — Structured output format for agent actions
- **Recovery Strategy** — Handling errors and ambiguities

## External Links

- [Anthropic — Prompt Engineering for Claude](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
