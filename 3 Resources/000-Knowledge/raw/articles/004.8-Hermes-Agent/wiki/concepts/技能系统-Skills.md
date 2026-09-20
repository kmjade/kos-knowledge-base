---
title: "技能系统 Skills"
aliases: [Skills, 技能系统, Hermes Skills]
type: concept
udc: "004.8"
tags: [hermes-agent, skills]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 技能系统 Skills

## 定义

技能（Skills）是 Hermes Agent **按需加载的知识文档**，Agent 在需要时载入，遵循渐进式披露模式最小化 token 使用。技能位于 `~/.hermes/skills/`，兼容 [agentskills.io](https://agentskills.io/specification) 开放标准，每个技能由 `SKILL.md` 定义，并自动成为斜杠命令。

## 关键特性

| 特性 | 说明 |
|------|------|
| 渐进式披露 | 先看列表，需要时才加载完整内容 |
| 斜杠命令 | `/plan`、`/gif-search` 等直接调用 |
| 技能中心 | Skills Hub + skills.sh + well-known 发现 |
| Agent 自管理 | Agent 可创建/修改/删除技能 |
| 安全扫描 | 安装时扫描危险内容与提示注入 |

## 技能 vs 工具

| 维度 | 技能 | 工具 |
|------|------|------|
| 本质 | 知识文档 | 可执行函数 |
| 加载 | 按需渐进披露 | 随工具集启用 |

## 相关

[[渐进式披露-Progressive-Disclosure|渐进式披露]] · [[工具集-Toolset|工具集]] · [[05-技能系统]]

## Sources

[[source-HermesAgent-CN]] · [[05-技能系统]]
