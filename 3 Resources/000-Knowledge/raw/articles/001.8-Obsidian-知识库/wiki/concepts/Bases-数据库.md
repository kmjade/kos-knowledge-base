---
title: "Bases 数据库"
aliases: [Bases, Obsidian Bases, 数据库]
type: concept
udc: "001.8"
tags: [obsidian, bases, database]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Bases 数据库

## 定义

Bases 是 Obsidian 的原生数据库层（核心插件），把 Vault 笔记变成可查询的动态视图——笔记为行、属性为列，无需查询语言即可构建数据库视图。

## 关键点

| 要点 | 说明 |
|------|------|
| `.base` 文件 | YAML 定义（filters/properties/formulas/summaries/views） |
| 视图 | 表格、卡片、列表、地图、看板（1.14） |
| 嵌入 | `![[我的库.base]]` |
| 发布 | 2025-08 随 v1.9.10 公开 |

## vs Dataview

Bases 覆盖 80% 常见查询（GUI、无代码），Dataview 更灵活强大（DQL/JS）。两者可共存。

## 相关

[[Properties-属性|Properties]] · [[Plugin-插件|Plugin]] · [[Dataview|Dataview]]

## Sources

[[source-Obsidian-com]] · [[05-Bases与数据库]]
