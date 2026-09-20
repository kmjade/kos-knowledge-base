---
title: "技能系统 Skills"
aliases: [Skills, 技能系统, Claude Code Skills]
type: concept
udc: "004.8"
tags: [claude-code, skills]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 技能系统 Skills

## 定义

技能（Skills）是 Claude Code 中**可复用的知识、指令与多步工作流**，由含 YAML frontmatter 的 `SKILL.md` 定义，存放于 `.claude/skills/<name>/`（项目）或 `~/.claude/skills/`（个人）。既可斜杠命令手动调用，也可在任务匹配描述时自动加载。

## 关键特性

| 特性 | 说明 |
|------|------|
| 双调用 | 斜杠命令 + 自动加载 |
| SKILL.md | YAML frontmatter + Markdown 正文 |
| 按需加载 | 描述常驻，正文需要时读入 |

## 相关

[[子代理-Subagent|子代理]] · [[钩子-Hooks|钩子]] · [[05-技能与子代理]]

## Sources

[[source-Claude-Code-Docs]] · [[05-技能与子代理]]
