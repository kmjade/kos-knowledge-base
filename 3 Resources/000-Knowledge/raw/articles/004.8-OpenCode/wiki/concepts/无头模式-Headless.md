---
title: "无头模式 Headless"
aliases: [Headless, 无头模式, opencode run]
type: concept
udc: "004.8"
tags: [opencode, headless, ci-cd]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 无头模式 Headless

## 定义

无头模式（Headless）指**程序化/脚本化运行** OpenCode，不经交互式 TUI：`opencode run "prompt"` 一次性执行、管道输入、指定代理。另有 Server 模式（headless API）供桌面/IDE/自定义客户端接入。

## 关键特性

| 特性 | 说明 |
|------|------|
| CLI | `opencode run`、管道输入 |
| 代理 | `--agent` 指定 |
| Server | `opencode serve` headless API |

## 相关

[[代理-Agents|代理]] · [[08-Headless与集成]]

## Sources

[[source-OpenCode-Docs]] · [[08-Headless与集成]]
