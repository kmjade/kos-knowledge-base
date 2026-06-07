---
aliases: [Unicode, 統一碼, Unicode 標準, Unicode Standard, UCS]
created: 2026-06-07
updated: 2026-06-07
udc: "003"
ddc: "400"
tags:
  - #udc/003
type: concept
topic: standards
category: 字元編碼
lang: zh-tw
status: draft
---

# Unicode

> 全球統一的字元編碼標準，為每個字元指派唯一的碼點。

## 定義

Unicode 是一種業界標準，旨在為全世界所有書寫系統的每個字元指派一個唯一的數字識別碼（碼點，Code Point）。它解決了傳統編碼方案（如 ASCII、ISO-8859 系列）的互操作性問題，使多語言文字能在同一文件中共存。

## 核心概念

| 概念 | 說明 |
|:----|:------|
| 碼點 (Code Point) | 每個字元的唯一編號，格式為 `U+XXXX` |
| 平面 (Plane) | 17 個平面，每個 65536 碼點 |
| BMP (Basic Multilingual Plane) | 基本多文種平面，U+0000 ~ U+FFFF |
| 編碼方式 | UTF-8、UTF-16、UTF-32 |

## 編碼方式對比

| 方式 | 位元組/字元 | 特點 |
|:----|:----------:|:-----|
| UTF-8 | 1~4 | 相容 ASCII，Web 主流 |
| UTF-16 | 2~4 | Windows/Java 內部使用 |
| UTF-32 | 4 | 定長，空間效率低 |

## 在本知識庫中的應用

- 三語言支援（简体中文、English、繁體中文）依賴 Unicode 編碼
- 檔案名稱和文件內容使用 UTF-8 編碼
- YAML frontmatter 中的 Unicode 字元處理

## 相關概念

- [[3 Resources/000-Knowledge/wiki/concepts/YAML|YAML]] — 設定檔中 Unicode 字元的表達
- [[3 Resources/000-Knowledge/wiki/concepts/frontmatter|前置元數據]] — 筆記元資料中的 Unicode 文字
- [[3 Resources/000-Knowledge/wiki/concepts/元数据|元數據]] — Unicode 是元資料可讀性的基礎
