---
title: "消息网关 Messaging Gateway"
aliases: [Messaging Gateway, 消息网关, Gateway]
type: concept
udc: "004.8"
tags: [hermes-agent, messaging, gateway]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 消息网关 Messaging Gateway

## 定义

消息网关是 Hermes 的**长驻后台进程**（`gateway/run.py`），统一连接 30+ 消息平台、管理会话、运行定时任务、发送语音消息。每个平台适配器接收消息，按聊天划分的 Session 存储路由到 `AIAgent` 处理，再回传响应。

## 关键特性

| 特性 | 说明 |
|------|------|
| 多平台 | Telegram/Discord/Slack/WhatsApp/微信/飞书/钉钉等 30+ |
| 安全默认 | 拒绝未授权用户，白名单 + 私信配对 |
| 后台会话 | `/background` 独立 Agent 异步运行 |
| 服务化 | systemd（Linux）/ launchd（macOS） |
| 调度器 | 每 60 秒触发 Cron 到期任务 |

## 相关

[[定时任务-Cron|定时任务]] · [[Agent-Loop-代理循环|Agent Loop]] · [[07-消息网关]]

## Sources

[[source-HermesAgent-CN]] · [[07-消息网关]]
