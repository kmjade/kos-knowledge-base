---
title: "MCP 模型上下文协议"
aliases: [MCP, Model Context Protocol, 模型上下文协议]
type: concept
udc: "004.8"
tags: [hermes-agent, mcp]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# MCP 模型上下文协议

## 定义

MCP（Model Context Protocol）是连接 Agent 与**外部工具服务器**的标准协议。Hermes Agent 通过 MCP 访问位于自身之外的 GitHub、数据库、文件系统、浏览器栈、内部 API 等工具，无需先写原生工具。

## 关键特性

| 特性 | 说明 |
|------|------|
| 两种传输 | Stdio（本地子进程）+ HTTP（远程端点） |
| 自动注册 | 启动时发现并注册工具，带 `mcp_<server>_<tool>` 前缀 |
| 每服务器过滤 | include/exclude 白名单/黑名单，`enabled: false` 完全禁用 |
| 采样支持 | 服务器可反向请求 Hermes 做 LLM 推理 |
| 反向运行 | `hermes mcp serve` 让 Hermes 作为 MCP 服务器 |

## 工具命名

`mcp_github_create_issue`、`mcp_filesystem_read_file`——前缀避免与内置工具冲突。

## 相关

[[工具集-Toolset|工具集]] · [[04-工具与MCP]] · [[Agent-Loop-代理循环|Agent Loop]]

## Sources

[[source-HermesAgent-CN]] · [[04-工具与MCP]]
