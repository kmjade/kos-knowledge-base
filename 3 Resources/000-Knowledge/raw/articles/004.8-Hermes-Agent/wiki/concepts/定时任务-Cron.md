---
title: "定时任务 Cron"
aliases: [Cron, 定时任务, cronjob]
type: concept
udc: "004.8"
tags: [hermes-agent, cron, automation]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 定时任务 Cron

## 定义

定时任务是 Hermes 的**原生 Agent 调度机制**——用自然语言或 Cron 表达式安排任务自动运行，而非简单 shell 任务。通过单一 `cronjob` 工具管理，任务以 JSON 存于 `~/.hermes/cron/jobs.json`，由网关每 60 秒触发，在全新 `AIAgent` 会话中执行。

## 关键特性

| 特性 | 说明 |
|------|------|
| 调度格式 | 相对延迟 / 间隔 / Cron 表达式 / ISO 时间戳 |
| 附加技能 | 可附加零/一/多个技能 |
| 生命周期 | create/list/pause/resume/run/remove/edit |
| 投递目标 | origin/local/telegram/feishu 等任意平台 |
| 防递归 | Cron 会话内禁用 Cron 管理工具 |

## 相关

[[消息网关-Messaging-Gateway|消息网关]] · [[子代理委派-Delegation|委派]] · [[08-自动化与委派]]

## Sources

[[source-HermesAgent-CN]] · [[08-自动化与委派]]
