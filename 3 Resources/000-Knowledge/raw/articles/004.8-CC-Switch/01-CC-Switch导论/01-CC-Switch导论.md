---
title: "01 CC Switch 导论"
aliases: [CC Switch Introduction, CC Switch 导论]
udc: "004.8"
tags: [cc-switch, claude-code, intro]
created: 2026-09-08
updated: 2026-09-08
---

# 01 CC Switch 导论

## 什么是 CC Switch

CC Switch 是**最流行的 Claude Code / Codex / Gemini CLI 供应商切换工具**。它通过管理多套 API 供应商配置（profile），一键切换 Claude Code 等编码 Agent 所使用的模型端点、密钥与模型映射，让用户摆脱对单一官方供应商的绑定。

## 核心理念

| 特性 | 说明 |
|------|------|
| **一键切换** | 在不同供应商 profile 间即时切换 |
| **多供应商** | 官方 Anthropic + 第三方中转（GLM/DeepSeek/Kimi…） |
| **多 Agent 覆盖** | 同时管 Claude Code、Codex、Gemini CLI |
| **可扩展** | 附加 MCP 管理、Prompts、Skills |
| **图形化** | 桌面 GUI（Tauri + React），免手改配置 |

## 出品与生态

官方桌面版为 `farion1231/cc-switch`（跨平台，Tauri + React），此外存在多个同名/近似工具：

| 工具 | 形态 | 特点 |
|------|------|------|
| farion1231/cc-switch | 桌面 GUI | 官方，管 CC/Codex/Gemini + MCP |
| huangdijia/ccswitch | Go CLI | 命令行 profile 切换 |
| aravhawk/cc-switch | npm CLI | Node 环境 profile 管理 |
| ccswitch-tui | TUI | 无头服务器/SSH 场景 |
| thomas-jack/cc-switch-cli | Rust CLI | 官方 CLI 分支 |

## 解决的问题

Claude Code 默认绑定 Anthropic 官方 API。CC Switch 让用户：

- 切换**第三方中转**以降低成本（DeepSeek/Kimi/GLM 等）
- 切换**国内可用端点**（规避网络访问限制）
- 管理**多套密钥/账号**（工作/个人分离）
- 统一管理 **MCP 服务器**与**提示词**

## 状态（2026）

- 支持 macOS（`brew install --cask cc-switch`）、Windows、Linux、Web
- 支持 `ccswitch://` deep link 协议一键导入配置
- 覆盖 Claude Code、Codex、Gemini CLI 三类 Agent

## 关联

[[02-安装与快速入门]] · [[03-供应商与配置]] · [[00-MOCs/CC-Switch知识地图|知识地图]]
