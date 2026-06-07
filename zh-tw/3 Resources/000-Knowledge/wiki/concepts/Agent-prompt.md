---
aliases: [Agent Prompt, 代理提示, 代理提示詞, Agent Prompting]
created: 2026-06-07
updated: 2026-06-07
udc: "004.8"
ddc: "006"
tags:
  - #udc/004
type: concept
topic: ai-prompting
category: LLM
lang: zh-tw
status: draft
---

# Agent 提示 (Agent Prompt)

> 面向 AI 代理（Agent）的指令設計策略，不同於普通單輪提示。

## 定義

Agent Prompt（代理提示）是專門為 AI 代理（能執行多步操作、呼叫工具、管理上下文的 AI 系統）設計的提示工程方法。與普通提示不同，Agent Prompt 需要包含工具定義、行動空間約束、狀態管理指令和錯誤回復策略。

## 關鍵要素

- **系統角色** — 定義代理的身份與行為邊界
- **工具描述** — 可用工具的簽名與用途說明
- **行動格式** — 代理輸出動作的結構化格式
- **回復策略** — 遇到錯誤或歧義時的處理規則

## 外部連結

- [Anthropic — Prompt Engineering for Claude](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
