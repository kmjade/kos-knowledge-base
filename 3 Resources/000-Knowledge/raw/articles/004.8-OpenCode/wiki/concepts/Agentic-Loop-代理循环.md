---
title: "Agentic Loop 代理循环"
aliases: [Agentic Loop, 代理循环, agentic loop]
type: concept
udc: "004.8"
tags: [opencode, agentic-loop]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Agentic Loop 代理循环

## 定义

Agentic Loop 是 OpenCode 的核心执行模型：模型对代码库推理（含 LSP 类型/诊断/符号上下文），调用内置工具执行操作，观察结果，再决定下一步，循环直到完成任务。

## 关键特性

| 特性 | 说明 |
|------|------|
| 推理驱动 | 模型自主规划多步操作 |
| LSP 上下文 | 类型/诊断/符号级上下文 |
| 工具调用 | 文件、搜索、终端、网络 |
| 多会话 | 同项目并行多个会话 |

## 相关

[[配置-Config|配置]] · [[技能系统-Skills|技能]] · [[03-核心架构]]

## Sources

[[source-OpenCode-Docs]] · [[03-核心架构]]
