---
title: "01 OpenCode 导论"
aliases: [OpenCode Introduction, OpenCode 导论]
udc: "004.8"
tags: [opencode, ai-coding, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 OpenCode 导论

## 什么是 OpenCode

OpenCode 是 **SST** 出品的**开源终端 AI 编码 Agent**（MIT 协议、Go 编写的单二进制），定位「厂商中立的 Claude Code 替代」。它与 Claude Code 拥有相同的 TUI 表面与 agentic 编码循环，但**提供者无关**——支持 Anthropic、OpenAI、Google、本地模型与自定义路由。

## 核心理念

| 特性 | 说明 |
|------|------|
| **开源中立** | MIT 协议，厂商无关，无锁定 |
| **多提供者** | 75+ 模型提供者，经 Models.dev 注册表 |
| **三种模式** | TUI（默认）/ CLI（无头）/ Server（headless API） |
| **本地优先** | 配置、规则、技能存于本地，隐私优先 |
| **复用订阅** | 登录 GitHub 用 Copilot，登录 OpenAI 用 ChatGPT Plus/Pro |

## 出品方：SST

SST 是 OpenCode 的出品方（`sst/opencode` 仓库）。OpenCode 是其开源的旗舰编码 Agent，社区规模快速增长（2026 年已达约 195K GitHub stars、950+ 贡献者、16M 月活开发者）。

## 与同类工具对比

| 工具 | 定位 | 与 OpenCode 的差异 |
|------|------|------------------|
| Claude Code | Anthropic 编码 Agent | OpenCode 是厂商中立替代，同 TUI 表面但多提供者 |
| Codex | OpenAI 编码 Agent | OpenCode 开源中立，可接 Claude/GPT/Gemini/本地 |
| Cursor / Windsurf | AI IDE | OpenCode 终端优先 + 桌面 + IDE 扩展 |
| Hermes Agent | 通用个人 Agent | OpenCode 聚焦编码 |

## 关键数据（2026）

| 指标 | 值 |
|------|-----|
| GitHub Stars | ~195K |
| 贡献者 | ~950 |
| 月活开发者 | ~16M |
| 模型提供者 | 75+ |

## 免费与付费

| 方式 | 说明 |
|------|------|
| 自带 Key | 用任意提供者 API Key（BYOK） |
| GitHub Copilot | 登录 GitHub 复用 Copilot 账户 |
| ChatGPT Plus/Pro | 登录 OpenAI 复用订阅 |
| 免费模型 | 内置部分免费模型 |
| OpenCode Zen/Go | 托管/订阅服务 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/OpenCode知识地图|知识地图]]
