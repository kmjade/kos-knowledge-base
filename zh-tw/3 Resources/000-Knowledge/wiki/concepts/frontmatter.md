---
aliases: [Frontmatter, 前置元數據, YAML Frontmatter, Metadata Header]
created: 2026-06-07
updated: 2026-06-07
udc: "025.3"
ddc: "050"
tags:
  - #udc/025
type: concept
topic: knowledge-organization
category: 元數據
lang: zh-tw
status: draft
---

# 前置元數據 (Frontmatter)

> Markdown 檔案開頭的 YAML 元數據區塊，用於結構化描述筆記屬性。

## 定義

Frontmatter（前置元數據）是 Markdown 檔案最頂部的 YAML 格式元數據區塊，以 `---` 分隔，用於記錄檔案的建立日期、更新日期、分類號、標籤等結構化資訊。本知識庫的每條筆記都包含標準的 frontmatter 欄位：`created`、`updated`、`udc`、`tags`。

## 標準欄位

| 欄位 | 說明 | 範例 |
|:----|:-----|:-----|
| `created` | 建立日期 | `2026-06-07` |
| `updated` | 最後更新日期 | `2026-06-07` |
| `udc` | UDC 分類號 | `"004.8"` |
| `tags` | 標籤列表 | `[ai, llm]` |

## 相關概念

- [[3 Resources/000-Knowledge/wiki/concepts/YAML|YAML]] — Frontmatter 使用的序列化格式
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|元數據]] — 關於數據的數據，Frontmatter 是其一種實現
