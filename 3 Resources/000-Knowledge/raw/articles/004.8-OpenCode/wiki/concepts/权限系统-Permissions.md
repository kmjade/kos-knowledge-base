---
title: "权限系统 Permissions"
aliases: [Permissions, 权限系统, 权限]
type: concept
udc: "004.8"
tags: [opencode, permissions]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 权限系统 Permissions

## 定义

权限系统是 OpenCode 的**工具使用护栏**，在 `opencode.json` 的 `permissions` 下定义 allow/deny 列表，**deny 优先于 allow**。代理的 Bash 权限支持 glob 模式映射（`{"*": "ask", "rm -rf*": "deny"}`），规则按顺序匹配、最后一个匹配生效。

## 关键特性

| 特性 | 说明 |
|------|------|
| allow/deny | deny 优先 |
| glob 映射 | Bash 权限按模式匹配 |
| MCP 权限 | `mcp.permissions` 单独管理 |

## 相关

[[规则-Rules|规则]] · [[MCP-模型上下文协议|MCP]] · [[04-配置与规则]]

## Sources

[[source-OpenCode-Docs]] · [[04-配置与规则]]
