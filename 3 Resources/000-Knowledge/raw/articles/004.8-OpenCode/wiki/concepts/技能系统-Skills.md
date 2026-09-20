---
title: "技能系统 Skills"
aliases: [Skills, 技能系统, OpenCode Skills]
type: concept
udc: "004.8"
tags: [opencode, skills]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 技能系统 Skills

## 定义

技能（Skills）是 OpenCode 中**可复用的知识、指令与工作流**，存于 `.opencode/skills/<name>/SKILL.md`（项目）或 `~/.config/opencode/skills/<name>/SKILL.md`（全局），YAML frontmatter（name、description）。由**描述匹配**触发模型自动加载。

## 关键特性

| 特性 | 说明 |
|------|------|
| 位置 | `.opencode/skills/` + 全局 |
| 触发 | 描述匹配（模型自动加载） |
| frontmatter | name（≤64 字符）+ description |

## 相关

[[代理-Agents|代理]] · [[命令-Commands|命令]] · [[05-代理与技能]]

## Sources

[[source-OpenCode-Docs]] · [[05-代理与技能]]
