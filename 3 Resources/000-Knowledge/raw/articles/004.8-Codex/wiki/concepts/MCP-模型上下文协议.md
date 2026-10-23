---
title: "MCP 模型上下文协议"
aliases: [MCP, Model Context Protocol, 模型上下文协议]
type: concept
udc: "004.8"
tags: [codex, mcp]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# MCP 模型上下文协议

## 定义

MCP（Model Context Protocol）连接 Codex 与**外部工具/服务**。服务器在 `config.toml` 中配置为 `[mcp_servers.NAME]` 表（含 `command`、`args`）。已在 Claude Code 配置好的 MCP 服务器一般也适用。

## 关键特性

| 特性 | 说明 |
|------|------|
| 配置 | `config.toml` 的 `[mcp_servers.*]` |
| 无独立 .mcp.json | 统一在 config.toml |
| 技能依赖 | 技能可声明 MCP 工具依赖 |

## 相关

[[钩子-Hooks|钩子]] · [[技能系统-Skills|技能]] · [[07-钩子与MCP]]

## Sources

[[source-Codex-Docs]] · [[07-钩子与MCP]]
