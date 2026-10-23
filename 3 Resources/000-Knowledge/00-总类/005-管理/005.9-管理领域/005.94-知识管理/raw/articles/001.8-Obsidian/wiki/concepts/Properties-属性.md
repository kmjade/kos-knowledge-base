---
title: "Properties 属性"
aliases: [Properties, Frontmatter, 属性, 元数据]
type: concept
udc: "001.8"
tags: [obsidian, properties, frontmatter]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Properties 属性

## 定义

属性（Properties）是笔记顶部的 YAML frontmatter，为笔记添加结构化元数据。它是 Obsidian 的「数据库字段」，Bases 与 Dataview 都依赖它来查询与组织笔记。

## 语法

```yaml
---
tags: [obsidian]
status: 进行中
priority: 高
---
```

## 用途

| 用途 | 说明 |
|------|------|
| 查询 | Dataview / Bases 的过滤、分组、计算 |
| 组织 | 状态、类型、优先级等元数据 |
| 别名 | `aliases` 让笔记可被多名字找到 |

## 相关

[[Markdown-Obsidian风格|Markdown]] · [[Bases-数据库|Bases]] · [[Plugin-插件|Dataview]]

## Sources

[[source-Obsidian-com]] · [[02-Vault与Markdown]]
