---
title: "SOUL 人格"
aliases: [SOUL, SOUL.md, 人格]
type: concept
udc: "004.8"
tags: [hermes-agent, personality, soul]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# SOUL 人格

## 定义

`SOUL.md` 是 Hermes Agent 的**主身份文件**，占据系统提示中的第 #1 槽位，完全取代内置默认身份。通过编辑该文件可完全自定义 Agent 的身份；缺失/为空时回退到内置默认身份，并自动创建默认 `SOUL.md`。

## 关键特性

| 特性 | 说明 |
|------|------|
| 位置 | `~/.hermes/SOUL.md` |
| 优先级 | 系统提示第 #1 槽，始终独立加载 |
| 运行时切换 | `/personality [name]` 切换内置或自定义预设 |
| 与项目上下文 | 独立于 `.hermes.md`/`AGENTS.md` 项目级指令 |

## 相关

[[持久记忆-Persistent-Memory|持久记忆]] · [[06-记忆与上下文]]

## Sources

[[source-HermesAgent-CN]] · [[06-记忆与上下文]]
