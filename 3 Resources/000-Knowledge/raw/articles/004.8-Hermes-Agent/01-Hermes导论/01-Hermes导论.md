---
title: "01 Hermes 导论"
aliases: [Hermes Introduction, Hermes 导论]
udc: "004.8"
tags: [hermes-agent, ai-agent, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 Hermes 导论

## 什么是 Hermes Agent

Hermes Agent 是 **Nous Research** 出品的开源**个人 AI Agent 框架**。它不是单一聊天机器人，而是一个把大语言模型编排成**能自主工作**的助手的基础设施：具备工具调用、持久记忆、技能加载、定时任务、子代理委派、消息网关与浏览器自动化等完整能力，可本地部署、模型无关、平台无关。

## 核心理念

| 特性 | 说明 |
|------|------|
| **模型无关** | 支持 18+ 推理提供者（Nous Portal、Anthropic、Codex、OpenRouter、DeepSeek、Kimi、智谱、MiniMax、本地 Ollama 等） |
| **平台无关** | 同一 `AIAgent` 内核驱动 CLI、TUI、桌面版、Web Dashboard、消息网关、ACP、API Server |
| **本地优先** | 配置、记忆、技能、会话全部存于 `~/.hermes/`，数据归你所有 |
| **可扩展** | 工具/工具集 + 技能系统 + MCP + 插件系统 + 子代理委派，四层扩展机制 |
| **安全默认** | 危险命令审批、网关白名单/配对、密钥脱敏、网站黑名单、终端沙箱 |

## 出品方：Nous Research

Nous Research 是 Hermes 系列模型（Nous Hermes）与 Hermes Agent 的出品方，专注开放权重模型与 Agent 基础设施。Hermes Agent 是其将模型能力"产品化"为可运行 Agent 框架的开源项目，代码托管于 `NousResearch/hermes-agent`。

## 历史（2026-04 → 2026-08）

| 版本 | 时间 | 代号 | 关键进展 |
|------|------|------|----------|
| v0.7.0 | 2026-04-03 | — | 可插拔记忆提供者、密钥池、Camofox 浏览器、API Server |
| v0.8.0 | 2026-04-08 | — | 后台任务通知、`/model`、Gemini 原生、MCP OAuth 2.1 |
| v0.9.0 | 2026-04-13 | — | 本地 Web Dashboard、微信/企业微信、Termux |
| v0.10.0 | 2026-04-16 | — | Nous Tool Gateway（订阅直连搜索/图像/TTS/浏览器） |
| v0.11.0 | 2026-04-23 | Interface | React/Ink 重写 TUI、可插拔传输层、AWS Bedrock |
| v0.12.0 | 2026-04-30 | Curator | 自治 Curator 后台代理、自我改进回路、Teams/元宝 |
| v0.13.0 | 2026-05-07 | Tenacity | 多代理 Kanban、`/goal` 持久目标、Checkpoints v2 |
| v0.14.0 | 2026-05-16 | Foundation | PyPI 安装、原生 Windows beta、`hermes proxy`、x_search |
| v0.15.0 | 2026-05-28 | Velocity | `run_agent.py` 16k→3.8k 行、Kanban 成熟、session_search 4,500x |
| v0.16.0 | 2026-06-05 | Surface | 原生桌面版三平台、Dashboard 管理面板、简体中文 |
| v0.17.0 | 2026-06-19 | Reach | iMessage(Photon)、Raft agent network、Automation Blueprints |
| v0.18.0 | 2026-07-01 | Judgment | Mixture-of-Agents 一等模型、`/learn` 蒸馏、`/journey` |
| v0.19.0 | 2026-07-20 | Quicksilver | 首轮响应降 80%、实时流式推理、智能审批默认 |
| v0.20.0 | 2026-08-03 | Herald | 可打断实时语音、A2A v1.0、可核验引用、Artifacts |

> 版本节奏极快：约 2 周一个大版本，每个版本都有代号（Interface / Curator / Tenacity / Foundation / Velocity / Surface / Reach / Judgment / Quicksilver / Herald）。

## 与同类工具对比

| 工具 | 定位 | 与 Hermes 的差异 |
|------|------|------------------|
| Claude Code / Codex | 编码 Agent（IDE/CLI） | Hermes 是通用个人 Agent：编码 + 消息 + 定时 + 多平台 |
| OpenClaw | 开源消息 Agent | Hermes 提供 `migrate-from-openclaw` 迁移指南，能力面更广 |
| n8n / Zapier | 工作流自动化 | Hermes 是 LLM 驱动的自主 Agent，而非规则工作流 |
| Cursor / Trae | IDE 内置 Agent | Hermes 通过 ACP 也可嵌入编辑器，且独立成框架 |

## 免费与许可

| 版本 | 价格 | 说明 |
|------|------|------|
| 核心框架 | 免费开源 | `NousResearch/hermes-agent` |
| 中文社区桌面版 | 免费开源 | Tauri v2 + Rust + React |
| Nous Portal | 订阅 | 零配置接入网页搜索/图像/TTS/浏览器等工具网关 |
| 模型 API | 按量 | 可选 Anthropic/OpenRouter/DeepSeek 等，或本地 Ollama 零成本 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/HermesAgent知识地图|知识地图]]
