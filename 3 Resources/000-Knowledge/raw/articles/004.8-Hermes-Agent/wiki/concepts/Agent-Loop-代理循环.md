---
title: "Agent Loop 代理循环"
aliases: [Agent Loop, AIAgent, 代理循环]
type: concept
udc: "004.8"
tags: [hermes-agent, agent-loop]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Agent Loop 代理循环

## 定义

Agent Loop 是 Hermes Agent 的**核心编排引擎**，由 `run_agent.py` 中的 `AIAgent` 类实现（约 9,200 行）。它负责从提示词组装到工具分发、再到提供方故障转移的完整执行流程，是驱动所有入口（CLI、网关、ACP、批处理、API Server）的同一套同步循环。

## 关键职责

| 职责 | 说明 |
|------|------|
| 提供者选择 | 通过运行时解析器确定 `api_mode` + 凭证 |
| 提示词构建 | 组装 SOUL.md、记忆、技能、上下文文件 |
| 工具执行 | 分发函数调用、串行/并发处理 |
| 重试与降级 | 提供方故障自动回退 |
| 压缩与持久化 | 上下文超阈值时摘要，会话写入 SQLite |

## 三种 API 模式

`chat_completions`（OpenAI 兼容）、`codex_responses`（Codex）、`anthropic_messages`（Anthropic），以适配不同提供者后端。

## 相关

[[工具集-Toolset|工具集]] · [[持久记忆-Persistent-Memory|持久记忆]] · [[03-核心架构]]

## Sources

[[source-HermesAgent-CN]] · [[03-核心架构]]
