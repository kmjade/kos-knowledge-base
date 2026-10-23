---
title: "渐进式披露 Progressive Disclosure"
aliases: [Progressive Disclosure, 渐进式披露, 渐进披露]
type: concept
udc: "004.8"
tags: [hermes-agent, skills, token-efficiency]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 渐进式披露 Progressive Disclosure

## 定义

渐进式披露是 Hermes 技能系统**最小化 token 使用**的加载模式：Agent 先只获取技能的名称/描述/分类列表（约 3k tokens），仅在实际需要时才加载完整技能内容或特定参考文件。

## 三级加载

| 层级 | 调用 | 内容 |
|------|------|------|
| Level 0 | `skills_list()` | name + description + category |
| Level 1 | `skill_view(name)` | 完整内容 + 元数据 |
| Level 2 | `skill_view(name, path)` | 特定参考文件 |

## 相关

[[技能系统-Skills|技能系统]] · [[Agent-Loop-代理循环|Agent Loop]]

## Sources

[[source-HermesAgent-CN]] · [[05-技能系统]]
