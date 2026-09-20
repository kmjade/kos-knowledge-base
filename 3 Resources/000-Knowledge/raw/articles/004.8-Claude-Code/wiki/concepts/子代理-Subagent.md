---
title: "子代理 Subagent"
aliases: [Subagent, 子代理, Subagents]
type: concept
udc: "004.8"
tags: [claude-code, subagent]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 子代理 Subagent

## 定义

子代理是 Claude Code 中**隔离上下文**运行的专用 AI 助手，在 `.claude/agents/` 下以 Markdown + YAML frontmatter 定义，运行自己的循环并只回传摘要。适用于上下文隔离、并行任务与专用 worker。

## Frontmatter 关键字段

`name` / `description` / `tools` / `disallowedTools` / `model` / `permissionMode` / `maxTurns` / `skills` / `mcpServers` / `hooks` / `memory`。

## 相关

[[技能系统-Skills|技能]] · [[Agentic-Loop-代理循环|代理循环]] · [[05-技能与子代理]]

## Sources

[[source-Claude-Code-Docs]] · [[05-技能与子代理]]
