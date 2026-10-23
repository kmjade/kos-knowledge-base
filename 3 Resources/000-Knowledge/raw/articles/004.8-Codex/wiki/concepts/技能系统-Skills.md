---
title: "技能系统 Skills"
aliases: [Skills, 技能系统, Codex Skills]
type: concept
udc: "004.8"
tags: [codex, skills]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 技能系统 Skills

## 定义

技能（Skills）是 Codex 中**可复用的知识、指令与工作流**，由 `SKILL.md`（含 name、description）与可选 `agents/openai.yaml` 元数据定义。调用方式分**显式**（`/skills` 或 `$skill-name`）与**隐式**（按描述自动匹配）。

## 关键特性

| 特性 | 说明 |
|------|------|
| 双调用 | 显式 + 隐式（allow_implicit_invocation） |
| 元数据 | display_name / icons / default_prompt |
| MCP 依赖 | 技能可声明依赖的 MCP 工具 |

## 相关

[[子代理-Subagent|子代理]] · [[钩子-Hooks|钩子]] · [[06-技能与子代理]]

## Sources

[[source-Codex-Docs]] · [[06-技能与子代理]]
