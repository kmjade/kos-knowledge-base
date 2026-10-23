---
aliases: [YAML, YAML Ain't Markup Language, YAML 语法, YAML 格式]
created: 2026-06-07
updated: 2026-06-07
udc: "004.6"
ddc: "005"
tags:
  - #udc/004
type: concept
topic: data-formats
category: 数据格式
status: draft
---

# YAML

> "YAML Ain't Markup Language" — 人类可读的数据序列化格式。

## 定义

YAML（.yaml / .yml）是一种人类可读的数据序列化语言，常用于配置文件、元数据声明和数据交换。其设计目标是在保留结构化表达能力的同时，最大限度提升可读性。

## 核心语法

```yaml
# 键值对
key: value

# 嵌套
parent:
  child: value

# 列表
items:
  - item1
  - item2

# 多行文本
text: |
  第一行
  第二行
```

## 在本知识库中的应用

- **Frontmatter** — Markdown 笔记的元数据区块使用 YAML 格式
- **配置文件** — Obsidian、Templater、Dataview 等插件的配置
- **数据交换** — 标签分类、UDC 映射等结构化数据

## 相关概念

- [[frontmatter]] — YAML 在 Markdown 笔记中的应用
- [[Unicode]] — YAML 文件使用的字符编码
- [[元数据]] — YAML 是元数据表达的一种格式

## 格式对比

| 格式 | 可读性 | 复杂度 | 典型用途 |
|:----|:-----:|:------:|:---------|
| YAML | 高 | 低 | 配置、元数据 |
| JSON | 中 | 低 | API 数据交换 |
| XML | 低 | 高 | 文档标记 |
| TOML | 高 | 低 | 项目配置 |
