---
title: "工具集 Toolset"
aliases: [Toolset, 工具集]
type: concept
udc: "004.8"
tags: [hermes-agent, tools, toolset]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 工具集 Toolset

## 定义

工具集（Toolset）是 Hermes Agent 中把**工具函数按逻辑分组**并可按平台启用/禁用的机制。内置约 48 个工具、20 个工具集，每个平台（CLI、Telegram、Discord 等）有专属工具集预设，如 `hermes-cli`、`hermes-telegram`、`hermes-feishu`。

## 关键特性

| 特性 | 说明 |
|------|------|
| 中央注册表 | `tools/registry.py`，工具文件导入时自动注册 |
| 平台预设 | 按平台决定可用的工具集 |
| 后端多态 | 终端 6 后端、浏览器 5 后端、Web 4 后端 |
| MCP 动态工具集 | 每个 MCP 服务器自动生成 `mcp-<server>` 工具集 |

## 常见工具集

| 工具集 | 内容 |
|--------|------|
| `terminal` | 终端执行（6 后端） |
| `file` | 文件读写/补丁/搜索 |
| `web` | 网络搜索/提取/爬取 |
| `browser` | 浏览器自动化（11 个工具） |
| `delegation` | 子代理委派 |
| `memory` | 记忆管理 |

## 相关

[[技能系统-Skills|技能系统]] · [[MCP-模型上下文协议|MCP]] · [[Agent-Loop-代理循环|Agent Loop]]

## Sources

[[source-HermesAgent-CN]] · [[04-工具与MCP]]
