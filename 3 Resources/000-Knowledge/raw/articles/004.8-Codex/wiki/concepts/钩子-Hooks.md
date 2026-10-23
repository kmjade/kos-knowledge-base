---
title: "钩子 Hooks"
aliases: [Hooks, 钩子, Codex Hooks]
type: concept
udc: "004.8"
tags: [codex, hooks]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 钩子 Hooks

## 定义

钩子（Hooks）在 Codex 到达**生命周期事件**时运行脚本/命令，用于强制自动化（lint、校验、日志、安全拦截）。关键事件：`PreToolUse` / `PostToolUse` / `SubagentStop`（`decision: "block"` 可继续子代理）。

## 典型用途

- 编辑后自动 lint / 格式化
- 阻止不安全命令
- 拦截 MCP 工具调用（匹配 `mcp__…`）

## 相关

[[AGENTS.md-项目记忆|AGENTS.md]] · [[沙箱-Sandbox|沙箱]] · [[07-钩子与MCP]]

## Sources

[[source-Codex-Docs]] · [[07-钩子与MCP]]
