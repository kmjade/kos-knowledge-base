---
title: "01 Claude Code 导论"
aliases: [Claude Code Introduction, Claude Code 导论]
udc: "004.8"
tags: [claude-code, ai-coding, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 Claude Code 导论

## 什么是 Claude Code

Claude Code 是 **Anthropic** 出品的**智能编码 Agent（agentic coding tool）**：能读取整个代码库、编辑文件、运行命令，并集成进开发工具链。它运行在**终端、IDE、桌面应用与浏览器**四个表面上，由「推理模型 + 内置工具 + 分层扩展系统」三部分构成。

## 核心理念

| 特性 | 说明 |
|------|------|
| **理解整个代码库** | 不局限于单文件，可跨多文件、多工具协同完成编码任务 |
| **本地优先** | 终端 CLI 直接在你的仓库上工作，配置、记忆、会话存于本地 |
| **多表面** | 终端 / VS Code / JetBrains / 桌面 / Web / 移动 / Slack |
| **分层扩展** | CLAUDE.md → Skills → Subagents → Hooks → MCP → Plugins |
| **模型无关（部分）** | 终端/VS Code/JetBrains 支持第三方提供者；云平台接入 Bedrock/Vertex/Foundry |

## 出品方：Anthropic

Anthropic 是 Claude 系列模型与 Claude Code 的出品方。Claude Code 是其将 Claude 模型「产品化」为编码 Agent 的核心工具，代码托管于 `anthropics/claude-code`，文档位于 `code.claude.com/docs`。

## 与同类工具对比

| 工具 | 定位 | 与 Claude Code 的差异 |
|------|------|----------------------|
| GitHub Copilot | IDE 内联补全 + Chat | Claude Code 是完整 Agent，可执行命令、跨文件改造 |
| Cursor / Windsurf | AI IDE | Claude Code 是终端优先，可嵌入 VS Code/JetBrains |
| Cline / Aider | 开源编码 Agent | Claude Code 由 Anthropic 官方维护，扩展系统更完整 |
| Hermes Agent | 通用个人 Agent | Claude Code 聚焦编码，Hermes 更偏通用助手 + 消息网关 |
| Codex CLI | OpenAI 编码 Agent | 生态不同，Claude Code 有 Skills/Hooks/CLAUDE.md 体系 |

## 版本与演进

- 版本号通过 `claude --version` 查看，变更记录于 `anthropics/claude-code` 的 CHANGELOG.md
- 迭代极快，近期加入 `/diff` 面板、`/advisor`、`/goal`、`/loop`、`/code-review ultra`、Artifacts、Routines、Agent Teams、动态工作流等能力
- 模型随 Claude 系列演进：默认 Opus（`claude-opus-4-8`），可选 Fable / Sonnet / Haiku，`[1m]` 变体支持超长上下文

## 免费与付费

| 方式 | 说明 |
|------|------|
| Claude 订阅（Pro/Max/Team/Enterprise） | 最常用，登录即用 |
| Anthropic Console（API Key） | 按 token 计费 |
| 云平台 | Amazon Bedrock / Google Cloud Agent Platform / Microsoft Foundry / Claude Platform on AWS |
| 第三方提供者 | 终端/VS Code/JetBrains 支持自定义端点 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/ClaudeCode知识地图|知识地图]]
