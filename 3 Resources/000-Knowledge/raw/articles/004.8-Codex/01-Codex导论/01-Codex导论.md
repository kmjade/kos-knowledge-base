---
title: "01 Codex 导论"
aliases: [Codex Introduction, Codex 导论]
udc: "004.8"
tags: [codex, ai-coding, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 Codex 导论

## 什么是 Codex

Codex 是 **OpenAI** 出品的**智能编码 Agent**：能理解整个代码库、编辑文件、运行命令，运行于**终端（Rust 编写的 `codex` CLI）、IDE、ChatGPT 云端与 CI/CD**。由「推理模型 + 内核级沙箱 + 分层扩展系统」三部分构成。

## 核心理念

| 特性 | 说明 |
|------|------|
| **理解整个代码库** | 跨多文件、多工具协同完成编码任务 |
| **本地优先** | 终端 CLI 直接在仓库上工作，配置存于本地 |
| **内核级沙箱** | macOS Seatbelt / Linux Landlock+seccomp / bwrap，默认隔离 |
| **安全审批** | 三级审批模式，危险操作默认需确认 |
| **分层扩展** | AGENTS.md → Skills → Subagents → Hooks → MCP |

## 出品方：OpenAI

OpenAI 是 GPT 系列模型与 Codex 的出品方。Codex 是其将 GPT 模型「产品化」为编码 Agent 的核心工具，Rust CLI 源码开源（`openai/codex`），文档位于 `developers.openai.com/codex`。

## 与同类工具对比

| 工具 | 定位 | 与 Codex 的差异 |
|------|------|------------------|
| Claude Code | Anthropic 编码 Agent | 直接对标；Codex 用 AGENTS.md 记忆，Claude Code 用 CLAUDE.md |
| GitHub Copilot | IDE 内联补全 + Chat | Codex 是完整 Agent，可执行命令、跨文件改造 |
| Cursor / Windsurf | AI IDE | Codex 是终端优先，可嵌入 IDE |
| Aider / Cline | 开源编码 Agent | Codex 官方维护，有内核级沙箱 |
| Hermes Agent | 通用个人 Agent | Codex 聚焦编码，Hermes 更偏通用助手 |

## 版本与演进

- 版本号通过 `codex --version` 查看，Rust CLI 版本快速迭代（2026 年已到 0.14x）
- 模型随 GPT 系列演进：`gpt-5.1-codex`（标准）、`gpt-5.1-codex-max`（长任务）、`gpt-5.1-codex-mini`（经济）
- 沙箱从早期版本演进：bwrap 自 v0.100 内置，Windows 沙箱为实验性

## 免费与付费

| 方式 | 说明 |
|------|------|
| ChatGPT 订阅 | Plus/Pro/Business/Edu/Enterprise，OAuth 登录 |
| API Key | `OPENAI_API_KEY`，按 token 计费 |
| 企业 | 团队管理、审批策略、沙箱配置 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/Codex知识地图|知识地图]]
