---
title: "代理 Agents"
aliases: [Agents, 代理, OpenCode Agents]
type: concept
udc: "004.8"
tags: [opencode, agents]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 代理 Agents

## 定义

代理（Agents）是 OpenCode 的**角色化 agent**：内置 `build`/`plan`（主代理）与 `general`/`explore`/`scout`（子代理），自定义代理放 `.opencode/agents/`（YAML frontmatter：description/mode/model/permission）。Tab 循环主代理，`@name` 调用子代理。

## 关键特性

| 特性 | 说明 |
|------|------|
| 内置代理 | build/plan/general/explore/scout |
| 自定义 | `.opencode/agents/` + YAML frontmatter |
| mode | primary / subagent / all |
| 权限 | Bash 权限 glob 映射 |

## 相关

[[技能系统-Skills|技能]] · [[Agentic-Loop-代理循环|代理循环]] · [[05-代理与技能]]

## Sources

[[source-OpenCode-Docs]] · [[05-代理与技能]]
