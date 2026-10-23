---
title: "MCP 模型上下文协议"
aliases: [MCP, Model Context Protocol, 模型上下文协议]
type: concept
udc: "004.8"
tags: [opencode, mcp]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# MCP 模型上下文协议

## 定义

MCP（Model Context Protocol）连接 OpenCode 与**外部工具/服务**。服务器在 `opencode.json` 的 `mcp.servers` 下配置（`type: "local"` + `command` 数组 + `environment` 键），权限在 `mcp.permissions`（allow/deny）。

## 关键命令

```bash
opencode mcp add / list / auth / debug
```

## 相关

[[权限系统-Permissions|权限系统]] · [[06-工具与MCP]]

## Sources

[[source-OpenCode-Docs]] · [[06-工具与MCP]]
