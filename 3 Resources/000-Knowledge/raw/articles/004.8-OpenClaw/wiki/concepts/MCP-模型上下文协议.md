---
title: "MCP 模型上下文协议"
aliases: [MCP, Model Context Protocol, 模型上下文协议]
type: concept
udc: "004.8"
tags: [openclaw, mcp]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# MCP 模型上下文协议

## 定义

MCP（Model Context Protocol）在 OpenClaw 中双向使用：`openclaw mcp` 把渠道会话**暴露为 MCP** 供其他客户端调用，同时管理保存的 MCP 服务器定义。`openclaw attach` 则用 scoped Gateway MCP grant 启动外部编码 agent（如 Claude Code）。

## 关键特性

| 特性 | 说明 |
|------|------|
| 暴露会话 | 渠道会话 → MCP |
| 管理定义 | 保存的 MCP 服务器 |
| attach | 启动 Claude Code 等外部 agent |

## 相关

[[技能系统-Skills|技能]] · [[消息渠道-Channels|消息渠道]] · [[07-技能与MCP]]

## Sources

[[source-OpenClaw-Docs]] · [[07-技能与MCP]]
