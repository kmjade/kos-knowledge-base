---
title: "CLAUDE.md 项目记忆"
aliases: [CLAUDE.md, 项目记忆, Project Memory]
type: concept
udc: "004.8"
tags: [claude-code, memory, claude-md]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# CLAUDE.md 项目记忆

## 定义

CLAUDE.md 是 Claude Code 的**持久上下文文件**，每个会话/请求都会加载，定义 Claude 对项目「始终知道」的内容：项目概览、技术栈、关键命令、架构约定。分三层：全局 `~/.claude/CLAUDE.md`、项目级 `CLAUDE.md`、个人本地 `CLAUDE.local.md`，叠加加载、更具体者优先。

## 关键特性

| 特性 | 说明 |
|------|------|
| 始终加载 | 无需手动引用 |
| 分层叠加 | 全局 + 项目 + 本地 |
| 自动记忆 | Claude 可自动累积学习 |
| 建议性 | 是 advisory，非强制执行（护栏用 Hooks/权限） |

## 相关

[[权限系统-Permissions|权限系统]] · [[钩子-Hooks|钩子]] · [[04-配置与CLAUDE]]

## Sources

[[source-Claude-Code-Docs]] · [[04-配置与CLAUDE]]
