---
title: "Dataview"
aliases: [Dataview, dataview 插件]
type: entity
entity_type: plugin
udc: "001.8"
tags: [obsidian, plugin]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Dataview

社区插件，用类 SQL 的 DQL 查询语言把 Vault 变成可查询数据库，生成动态列表、表格、任务汇总与仪表盘。

## 关键信息

| 参数 | 说明 |
|------|------|
| 类型 | 社区插件（查询引擎） |
| 下载量 | ~111 万 |
| 语言 | DQL / JavaScript（dataviewjs） |

## 用法

````markdown
```dataview
TABLE file.link AS "笔记", status
FROM "项目"
WHERE status = "进行中"
```
````

## 相关

[[Bases-数据库|Bases]] · [[Properties-属性|Properties]] · [[Plugin-插件|Plugin]]

## Sources

[[source-Obsidian-com]] · [[04-插件与主题]]
