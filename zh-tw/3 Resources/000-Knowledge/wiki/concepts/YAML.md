---
aliases: [YAML, YAML Ain't Markup Language, YAML 語法, YAML 格式]
created: 2026-06-07
updated: 2026-06-07
udc: "004.6"
ddc: "005"
tags:
  - #udc/004
type: concept
topic: data-formats
category: 資料格式
lang: zh-tw
status: draft
---

# YAML

> "YAML Ain't Markup Language" — 人類可讀的資料序列化格式。

## 定義

YAML (.yaml / .yml) 是一種人類可讀的資料序列化語言，常用於設定檔、元資料宣告和資料交換。其設計目標是在保留結構化表達能力的同時，最大限度提升可讀性。

## 核心語法

```yaml
# 鍵值對
key: value

# 巢狀
parent:
  child: value

# 列表
items:
  - item1
  - item2

# 多行文字
text: |
  第一行
  第二行
```

## 在本知識庫中的應用

- **Frontmatter** — Markdown 筆記的元資料區塊使用 YAML 格式
- **設定檔** — Obsidian、Templater、Dataview 等外掛的設定

## 相關概念

- [[3 Resources/000-Knowledge/wiki/concepts/frontmatter|前置元數據]] — YAML 在 Markdown 筆記中的應用
- [[3 Resources/000-Knowledge/wiki/concepts/Unicode|Unicode]] — YAML 檔案使用的字元編碼
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|元數據]] — YAML 是元資料表達的一種格式
