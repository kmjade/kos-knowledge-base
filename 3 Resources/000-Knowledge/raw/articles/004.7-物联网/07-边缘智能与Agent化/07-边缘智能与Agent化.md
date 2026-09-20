---
title: "07 边缘智能与 Agent 化"
aliases: [Edge Intelligence, 终端 Agent 化]
udc: "004.7"
tags: [iot, edge-ai, mcp, a2a, agent]
created: 2026-09-16
updated: 2026-09-16
---

# 07 边缘智能与 Agent 化

## 终端 Agent 化（连接智能）

以 EMQX 6.2 为代表，消息管道内置 A2A 智能体注册中心 + MCP over MQTT。

## 技术三角

| 组件 | 角色 |
|------|------|
| MQTT | 数据管道 |
| MCP | 垂直连接工具/数据 |
| A2A | 水平连接智能体协作 |

> 核心转变：从「协议解析」走向「意图解析」。

## 边缘 AI

边缘执行推理，云做训练与全局分析；联邦学习 + 差分隐私保障数据隐私。

## 关联

[[06-平台与Broker]] · [[08-安全与互操作]] · [[MCP-over-MQTT]] · [[A2A-智能体协作|A2A]]
