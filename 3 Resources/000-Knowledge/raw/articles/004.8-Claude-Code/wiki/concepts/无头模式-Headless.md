---
title: "无头模式 Headless"
aliases: [Headless, 无头模式, Claude Agent SDK]
type: concept
udc: "004.8"
tags: [claude-code, headless, agent-sdk]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 无头模式 Headless

## 定义

无头模式（Headless）指**程序化运行** Claude Code，不经交互式终端：CLI `claude -p "prompt"` 一次性执行，或通过 **Claude Agent SDK**（Python `claude-agent-sdk` / TypeScript `@anthropic-ai/claude-agent-sdk`）作为库嵌入，获得内置工具、完整 agent 循环、上下文管理、hooks、子代理、权限与会话。

## 关键特性

| 特性 | 说明 |
|------|------|
| CLI | `claude -p`、管道输入 |
| SDK | Python / TypeScript |
| 能力 | 完整 agent 循环 + 内置工具 |

## 相关

[[Agentic-Loop-代理循环|代理循环]] · [[08-多代理与自动化]]

## Sources

[[source-Claude-Code-Docs]] · [[08-多代理与自动化]]
