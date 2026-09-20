---
title: "Gateway 网关架构"
aliases: [Gateway, 网关架构, Gateway 架构]
type: concept
udc: "004.8"
tags: [openclaw, gateway, architecture]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Gateway 网关架构

## 定义

Gateway 是 OpenClaw 的**控制面**：长驻 Node.js 进程，处理 WebSocket（默认端口 18789，仅 loopback）、渠道消息接入、会话管理、访问控制、路由与命令队列。与 Agent Runtime（执行面）组成**双进程模型**。

## 关键特性

| 特性 | 说明 |
|------|------|
| 控制面 | 消息接入、路由、会话、访问控制 |
| 双进程 | Gateway + Agent Runtime |
| 命令队列 | 串行化防止并发破坏状态 |

## 相关

[[Agent-Loop-代理循环|Agent Loop]] · [[消息渠道-Channels|消息渠道]] · [[03-核心架构]]

## Sources

[[source-OpenClaw-Docs]] · [[03-核心架构]]
