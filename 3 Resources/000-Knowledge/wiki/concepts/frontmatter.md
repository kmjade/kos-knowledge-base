---
aliases: [Frontmatter, 前置元数据, 前置元數據, YAML Frontmatter, Metadata Header]
created: 2026-06-07
updated: 2026-06-07
udc: "025.3"
ddc: "050"
tags:
  - #udc/025
type: concept
topic: knowledge-organization
category: 元数据
status: draft
---

# 前置元数据 (Frontmatter)

> Markdown 文件开头的 YAML 元数据区块，用于结构化描述笔记属性。

## 定义

Frontmatter（前置元数据）是 Markdown 文件最顶部的 YAML 格式元数据块，以 `---` 分隔，用于记录文件的创建日期、更新日期、分类号、标签等结构化信息。本知识库的每条笔记都包含标准的 frontmatter 字段：`created`、`updated`、`udc`、`tags`。

## 标准字段

| 字段 | 说明 | 示例 |
|:----|:-----|:-----|
| `created` | 创建日期 | `2026-06-07` |
| `updated` | 最后更新日期 | `2026-06-07` |
| `udc` | UDC 分类号 | `"004.8"` |
| `tags` | 标签列表 | `[ai, llm]` |

## 相关概念

- [[YAML]] — Frontmatter 使用的序列化格式
- [[元数据]] — 关于数据的数据，Frontmatter 是其一种实现
- [[Unicode]] — Frontmatter 中的字符编码基础

## 工具支持

- Obsidian 原生支持 frontmatter 解析
- Dataview 插件通过 frontmatter 进行元数据查询
