---
title: "Agentic Loop 代理循环"
aliases: [Agentic Loop, 代理循环, agentic loop]
type: concept
udc: "004.8"
tags: [codex, agentic-loop]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Agentic Loop 代理循环

## 定义

Agentic Loop 是 Codex 的核心执行模型：模型对代码库推理，调用内置工具（读/搜/改/执行）执行操作，观察结果，再决定下一步，循环直到完成任务。这是「智能编码 Agent」区别于「补全工具」的本质。

## 关键特性

| 特性 | 说明 |
|------|------|
| 推理驱动 | 模型自主规划多步操作 |
| 工具调用 | 文件操作、搜索、执行、网络 |
| 沙箱约束 | 执行边界由沙箱模式决定 |
| 可中断 | 用户可随时干预 |

## 相关

[[沙箱-Sandbox|沙箱]] · [[技能系统-Skills|技能]] · [[03-核心架构]]

## Sources

[[source-Codex-Docs]] · [[03-核心架构]]
