---
title: "上下文窗口 Context Window"
aliases: [Context Window, 上下文窗口, 上下文]
type: concept
udc: "004.8"
tags: [claude-code, context-window]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 上下文窗口 Context Window

## 定义

上下文窗口是 Claude Code 会话中模型可「看见」的 token 总量，随会话逐渐填满：系统提示与工具定义（可缓存）、CLAUDE.md 与记忆（自动加载）、文件读取/搜索结果/命令输出（按需）、会话历史（持续累积）。超阈值需 `/compact` 压缩。

## 关键机制

| 机制 | 说明 |
|------|------|
| 提示缓存 | 自动前缀缓存，降成本 |
| `/context` | 查看占用 |
| `/compact` | 压缩历史释放空间 |

## 相关

[[Agentic-Loop-代理循环|代理循环]] · [[检查点-Checkpoints|检查点]] · [[03-核心架构]]

## Sources

[[source-Claude-Code-Docs]] · [[03-核心架构]]
