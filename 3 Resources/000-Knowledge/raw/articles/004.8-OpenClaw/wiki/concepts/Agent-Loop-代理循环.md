---
title: "Agent Loop 代理循环"
aliases: [Agent Loop, 代理循环, agent loop]
type: concept
udc: "004.8"
tags: [openclaw, agent-loop]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Agent Loop 代理循环

## 定义

Agent Loop 是 OpenClaw 的执行模型：**观察（observe）→ 思考（think）→ 行动（act）** 循环，由 Agent Runtime 执行。含 LLM 调用、工具执行、推理循环、记忆读写与子代理生成，支持流式、块回复、进度草稿。

## 关键特性

| 特性 | 说明 |
|------|------|
| 循环 | observe → think → act |
| 执行 | Agent Runtime |
| 命令队列 | 串行化防并发破坏 |

## 相关

[[Gateway-网关架构|Gateway]] · [[记忆系统-Memory|记忆系统]] · [[03-核心架构]]

## Sources

[[source-OpenClaw-Docs]] · [[03-核心架构]]
