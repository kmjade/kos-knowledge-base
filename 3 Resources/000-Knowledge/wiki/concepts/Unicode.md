---
aliases: [Unicode, 统一码, 統一碼, Unicode 标准, Unicode Standard, UCS]
created: 2026-06-07
updated: 2026-06-07
udc: "003"
ddc: "400"
tags:
  - #udc/003
type: concept
topic: standards
category: 字符编码
status: draft
---

# Unicode

> 全球统一的字符编码标准，为每个字符分配唯一的码点。

## 定义

Unicode 是一种业界标准，旨在为全世界所有书写系统的每个字符分配一个唯一的数字标识符（码点，Code Point）。它解决了传统编码方案（如 ASCII、ISO-8859 系列）的互操作性问题，使多语言文本能在同一文档中共存。

## 核心概念

| 概念 | 说明 |
|:----|:------|
| 码点 (Code Point) | 每个字符的唯一编号，格式为 `U+XXXX` |
| 平面 (Plane) | 17 个平面，每个 65536 码点 |
| BMP (Basic Multilingual Plane) | 基本多文种平面，U+0000 ~ U+FFFF |
| 编码方式 | UTF-8、UTF-16、UTF-32 |

## 在本知识库中的应用

- 三语言支持（简体中文、English、繁體中文）依赖 Unicode 编码
- 文件名和文档内容使用 UTF-8 编码
- YAML frontmatter 中的 Unicode 字符处理

## 编码方式对比

| 方式 | 字节/字符 | 特点 |
|:----|:---------:|:-----|
| UTF-8 | 1~4 | 兼容 ASCII，Web 主流 |
| UTF-16 | 2~4 | Windows/Java 内部使用 |
| UTF-32 | 4 | 定长，空间效率低 |

## 相关概念

- [[YAML]] — 配置文件中 Unicode 字符的表达
- [[frontmatter]] — 笔记元数据中的 Unicode 文本
- [[元数据]] — Unicode 是元数据可读性的基础
