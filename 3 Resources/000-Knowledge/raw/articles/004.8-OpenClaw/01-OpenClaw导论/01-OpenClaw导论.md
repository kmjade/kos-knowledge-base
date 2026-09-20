---
title: "01 OpenClaw 导论"
aliases: [OpenClaw Introduction, OpenClaw 导论]
udc: "004.8"
tags: [openclaw, ai-agent, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 OpenClaw 导论

## 什么是 OpenClaw

OpenClaw 是**自托管的开源个人 AI Agent 平台**，运行在你自己的机器/服务器上，定位「真正会做事的 AI」——整理收件箱、发邮件、管理日历、值机登机、运行命令、控制浏览器，24/7 自主工作。核心是一个**本地网关（Gateway）**，把 AI 模型连接到真实工具与消息应用。

## 核心理念

| 特性 | 说明 |
|------|------|
| **自托管** | 跑在 Mac / Windows / Linux / VPS / 树莓派 |
| **多消息渠道** | WhatsApp、Telegram、Discord、微信、飞书等 30+ |
| **真实工具** | 浏览器、shell、文件、邮件/日历、API |
| **持久记忆** | Markdown 工作区文件，跨会话跨平台 |
| **自主调度** | cron + heartbeat，无人时也能工作 |
| **模型无关** | Claude / GPT / Gemini / 本地，自带 Key |

## 更名史

| 时间 | 名称 | 说明 |
|------|------|------|
| 2025-11 | **Clawd** | 首发（「Claude + claw」谐音） |
| 2025-12 底 | **Moltbot** | 因 Anthropic 商标要求更名 |
| 2026-01-29 | **OpenClaw** | 最终定名 |

创始人 **Peter Steinberger**（PSPDFKit 创始人），2026-02 宣布加入 OpenAI，项目转向开源基金会治理。

## 影响力（2026 初）

| 指标 | 值 |
|------|-----|
| 72 小时 GitHub Stars | 60K+ |
| 数周内 Stars | ~145–180K+ |
| Forks | 20K+ |
| 社区 Skills | 7000+ |

被称作「最接近 JARVIS 的开源项目」，并催生了 150 万 AI agent 涌入的 Moltbook 社交实验。

## 与同类工具对比

| 工具 | 定位 | 与 OpenClaw 的差异 |
|------|------|------------------|
| Hermes Agent | 通用个人 Agent | 定位最接近，OpenClaw 社区规模更大 |
| Claude Code / Codex / OpenCode | 编码 Agent | OpenClaw 侧重「个人助手」而非编码 |
| n8n / Zapier | 工作流自动化 | OpenClaw 是 LLM 驱动的自主 Agent |

## 免费与许可

| 项 | 说明 |
|----|------|
| 核心 Gateway | MIT 协议 |
| 模型 | 自带 Key（Claude/GPT/Gemini/本地） |
| 托管 | DigitalOcean 等提供 1-Click 安全部署 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/OpenClaw知识地图|知识地图]]
