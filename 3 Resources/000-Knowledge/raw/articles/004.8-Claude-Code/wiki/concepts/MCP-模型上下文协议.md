---
title: "MCP 模型上下文协议"
aliases: [MCP, Model Context Protocol, 模型上下文协议]
type: concept
udc: "004.8"
tags: [claude-code, mcp]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# MCP 模型上下文协议

## 定义

MCP（Model Context Protocol）连接 Claude Code 与**外部服务/工具**（数据库查询、Slack 发消息、浏览器控制等），处理连接与认证。配置于 `.mcp.json` 或 settings 文件，按名称覆盖（local > project > user）。

## 关键特性

| 特性 | 说明 |
|------|------|
| 配置 | `.mcp.json` + settings |
| 覆盖规则 | local > project > user |
| 管理 | `claude mcp add/list`、`/mcp` |
| 插件集成 | 插件可打包 MCP 服务器 |

## 相关

[[钩子-Hooks|钩子]] · [[技能系统-Skills|技能]] · [[06-钩子与MCP]]

## Sources

[[source-Claude-Code-Docs]] · [[06-钩子与MCP]]
