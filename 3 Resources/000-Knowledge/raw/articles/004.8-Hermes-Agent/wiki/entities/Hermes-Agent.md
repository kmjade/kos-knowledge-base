---
title: "Hermes Agent"
aliases: [Hermes Agent, Hermes, hermes-agent]
type: entity
entity_type: product
udc: "004.8"
tags: [hermes-agent, ai-agent, nous-research]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Hermes Agent

Nous Research 出品的开源个人 AI Agent 框架，以 `AIAgent` 核心编排引擎驱动多入口，内置技能、记忆、MCP、定时任务与子代理委派。

## 核心规格

| 参数 | 说明 |
|------|------|
| 类型 | 开源个人 AI Agent 框架 |
| 出品方 | Nous Research |
| 核心 | AIAgent（run_agent.py，约 9,200 行） |
| 入口 | CLI / TUI / 桌面版 / Dashboard / 网关 / ACP / API Server |
| 模型 | 18+ 提供者（含本地 Ollama） |
| 版本 | v0.20.0（2026-08-03，代号 Herald） |
| 许可 | 开源（`NousResearch/hermes-agent`） |

## 关键特性

- 工具/工具集（约 48 工具、20 工具集）
- 技能系统（渐进式披露 + 技能中心）
- 持久记忆（MEMORY.md / USER.md）+ 会话搜索
- MCP 集成 + 反向 MCP 服务器
- 消息网关（30+ 平台）
- 定时任务 + 子代理委派（最多 3 并发）
- 6 终端后端 / 5 浏览器后端 / 4 Web 后端

## 相关

[[Nous-Research|Nous Research]] · [[Nous-Portal|Nous Portal]] · [[Agent-Loop-代理循环|Agent Loop]] · [[01-Hermes导论]]

## Sources

[[source-HermesAgent-CN]] · [[01-Hermes导论]]
