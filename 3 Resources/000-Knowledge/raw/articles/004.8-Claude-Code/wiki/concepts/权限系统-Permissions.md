---
title: "权限系统 Permissions"
aliases: [Permissions, 权限系统, 权限]
type: concept
udc: "004.8"
tags: [claude-code, permissions]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 权限系统 Permissions

## 定义

权限系统是 Claude Code 的**工具使用护栏**，在 `settings.json` 的 `permissions` 中定义规则，三种动作：`allow` / `deny` / `ask`。这是可执行的 enforcement，与 CLAUDE.md 的 advisory 建议相对。

## 关键特性

| 特性 | 说明 |
|------|------|
| 三种动作 | allow / deny / ask |
| 规则通配 | `*`、路径匹配、工具名 |
| 默认模式 | defaultMode、Plan Mode 只读 |
| 强制护栏 | 「禁止改 .env」应写在权限而非文字 |

## 相关

[[CLAUDE.md-项目记忆|CLAUDE.md]] · [[钩子-Hooks|钩子]] · [[04-配置与CLAUDE]]

## Sources

[[source-Claude-Code-Docs]] · [[04-配置与CLAUDE]]
