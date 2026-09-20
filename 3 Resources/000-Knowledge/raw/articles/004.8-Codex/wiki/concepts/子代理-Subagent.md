---
title: "子代理 Subagent"
aliases: [Subagent, 子代理, Subagents]
type: concept
udc: "004.8"
tags: [codex, subagent]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 子代理 Subagent

## 定义

子代理是 Codex 中**隔离上下文**运行的专用 agent，通过 `/agent`（或 `/multi-agents`）切换活跃子代理线程，`multi_agent` 特性可在 config 中启用。适用于上下文隔离与并行任务。

## 关键命令

| 命令 | 功能 |
|------|------|
| `/agent` | 切换活跃子代理 |
| `/multi-agents` | 别名 |
| `SubagentStop` hook | 编排子代理生命周期 |

## 相关

[[技能系统-Skills|技能]] · [[Agentic-Loop-代理循环|代理循环]] · [[06-技能与子代理]]

## Sources

[[source-Codex-Docs]] · [[06-技能与子代理]]
