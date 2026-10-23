---
title: "钩子 Hooks"
aliases: [Hooks, 钩子, Claude Code Hooks]
type: concept
udc: "004.8"
tags: [claude-code, hooks]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 钩子 Hooks

## 定义

钩子（Hooks）在 Claude Code 到达**生命周期事件**时运行脚本/HTTP 请求/MCP 调用/提示/子代理。它们是**确定性**的——匹配事件必触发，适合强制执行与自动化（lint、阻止不安全命令、日志）。

## 关键事件

`PreToolUse` / `PostToolUse` / `SessionStart` / `SessionEnd` / `UserPromptSubmit` / `Notification` / `Stop`。

## 相关

[[CLAUDE.md-项目记忆|CLAUDE.md]] · [[权限系统-Permissions|权限系统]] · [[06-钩子与MCP]]

## Sources

[[source-Claude-Code-Docs]] · [[06-钩子与MCP]]
