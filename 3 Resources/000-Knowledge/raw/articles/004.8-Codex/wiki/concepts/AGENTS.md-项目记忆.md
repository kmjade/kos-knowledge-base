---
title: "AGENTS.md 项目记忆"
aliases: [AGENTS.md, 项目记忆, Project Memory]
type: concept
udc: "004.8"
tags: [codex, memory, agents-md]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# AGENTS.md 项目记忆

## 定义

AGENTS.md 是 Codex 的**持久系统级指令文件**，每会话读取，定义 Agent 对项目「始终知道」的内容。分两层：全局 `~/.codex/AGENTS.md`（跨项目规则）与项目根 `AGENTS.md`（覆盖全局冲突项）。`/init` 可生成骨架。AGENTS.md 已成为跨工具通用约定。

## 关键特性

| 特性 | 说明 |
|------|------|
| 始终加载 | 每会话自动注入 |
| 分层 | 全局 + 项目（项目优先） |
| 简短 | 建议 ~150 行以内 |
| 规则化 | 写规则而非故事 |

## 相关

[[配置-Profiles|Profiles]] · [[03-核心架构]] · [[05-配置与AGENTS]]

## Sources

[[source-Codex-Docs]] · [[05-配置与AGENTS]]
