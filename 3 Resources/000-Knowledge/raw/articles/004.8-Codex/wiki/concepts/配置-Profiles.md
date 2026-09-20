---
title: "配置 Profiles"
aliases: [Profiles, 配置, Codex Profiles]
type: concept
udc: "004.8"
tags: [codex, config, profiles]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 配置 Profiles

## 定义

Profiles 是 Codex 的**命名配置**机制：在 `~/.codex/config.toml`（用户级）与 `.codex/config.toml`（项目级）中定义，通过 `codex --profile <name>` 切换，为不同场景（审查/CI/日常）维护不同配置。

## 关键特性

| 特性 | 说明 |
|------|------|
| 命名切换 | `--profile review` / `--profile ci` |
| 两级配置 | 用户级 + 项目级 |
| 配置项 | model / approval_policy / sandbox_mode / mcp_servers / hooks |

## 相关

[[AGENTS.md-项目记忆|AGENTS.md]] · [[沙箱-Sandbox|沙箱]] · [[05-配置与AGENTS]]

## Sources

[[source-Codex-Docs]] · [[05-配置与AGENTS]]
