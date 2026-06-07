---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [resource, llm, source, lifeos, architecture]
type: wiki-source
reviewed: true
---

# Source: LifeOS × LLM-Wiki 融合系统

> 来源文章。作者 一只阿木木，2026 年 5 月。
> 本系统（KOS_LLM-Wiki）的设计来源与灵感基础。

## 摘要

该文章提出了 **LifeOS × LLM-Wiki 融合系统** 的完整架构设计，是本知识库的核心设计来源。系统建立在三条公理之上：

**公理一：单一 Vault，永不分裂** — 所有内容进入同一个 Obsidian Vault，通过明确的隔离边界（而非多个 Vault）管理不同用途的信息。

**公理二：AI 是编译器，不是对话伙伴** — 对生活信息 AI 是路由器，对专业知识 AI 是编译器。用户只负责生产和消费信息，中间整理工作全部由 AI 承担。

**公理三：信息有生命周期** — 不是所有东西都值得永久存储。系统核心目标是将维护成本降到零。

## 与本系统的对应关系

| 原文概念 | 本系统实现 |
|---------|-----------|
| 00-Inbox → _processed | `0 Inbox/` → `_processed/` |
| 01-Projects / 02-Areas | `1 Projects/` / `2 Areas/` |
| 03-Resources/[topic]/{raw,wiki} | `3 Resources/[topic]/` 含 raw/wiki |
| 04-Archive | `4 Archives/` |
| AI-Log/ | `_logs/` |
| CLAUDE.md（宪法） | `AGENTS.md` |
| /triage 分拣引擎 | KOS-Triage |
| /wiki-compile 编译引擎 | KOS-Wiki-Compile |
| People CRM | `3 Resources/People/wiki/` |
| 三语言 | CN/EN/TW（原文未涉及） |
| UDC 分类法 | 本系统新增（原文使用标签） |

## 本系统与原文的关键差异

| 维度 | 原文设计 | KOS_LLM-Wiki |
|------|---------|-------------|
| Agent | Claude Code | Codex (OpenAI) |
| 分类法 | 标签系统 | UDC + 标签双维度 |
| 语言 | 单语言 | 三语言镜像 |
| 宪法文件 | CLAUDE.md | AGENTS.md |
| 周期笔记 | Periodic/daily/weekly/... | Periodic/ 年/月/日分层 |

## 参考

- 源文件：`3 Resources/000-Knowledge/raw/articles/LifeOS/LifeOS × LLM-Wiki 融合系统.md`
- 相关页面：[[Knowledge+PARA+LLM-Wiki融合系統]]
- 作者：[[一只阿木木]]（原文作者）
- [[LLM 基础]] / [[RAG 与知识库集成]]
