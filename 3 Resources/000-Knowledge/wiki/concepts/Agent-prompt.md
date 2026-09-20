---
aliases: [Agent Prompt, 代理提示, 代理提示词, Agent Prompting]
created: 2026-06-07
updated: 2026-06-07
udc: "004.8"
ddc: "006"
tags:
  - #udc/004
type: concept
topic: ai-prompting
category: LLM
status: draft
---

# Agent 提示 (Agent Prompt)

> 面向 AI 代理（Agent）的指令设计策略，不同于普通单轮提示。

## 定义

Agent Prompt（代理提示）是专门为 AI 代理（能执行多步操作、调用工具、管理上下文的 AI 系统）设计的提示工程方法。与普通提示不同，Agent Prompt 需要包含工具定义、行动空间约束、状态管理指令和错误恢复策略。

## 关键要素

- **系统角色** — 定义代理的身份与行为边界
- **工具描述** — 可用工具的签名与用途说明
- **行动格式** — 代理输出动作的结构化格式
- **回复策略** — 遇到错误或歧义时的处理规则

## 关联概念

- [[claude-code]] — 采用 Agent Prompt 设计的编码代理
- [[../../../../zh-tw/3 Resources/LLM-Wiki/提示工程|提示工程]] — Agent Prompt 的上位方法论
- [[GPT-5]] — 大语言模型代理能力对比

## 外部链接

- [Anthropic — Prompt Engineering for Claude](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
