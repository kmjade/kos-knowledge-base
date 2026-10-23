---
title: "ISBN International Standard Book Number"
aliases: [ISBN, 国际标准书号, 书号]
type: concept
udc: "002"
tags: [documentation, books, concept, ISBN, udc-002]
created: 2026-10-19
updated: 2026-10-19
compiled: true
reviewed: false
---

# ISBN International Standard Book Number

## 定义

**ISBN**（ISO 2108）标识**出版单元**——某出版社的某一版、某一装帧形态，而不是「这部著作」。它回答「这是哪个可独立销售的产品」，不回答「这是哪部作品」。2007 年起统一为 13 位。

## 要点

| 段 | 位数 | 含义 |
|:------|:------|:------|
| **GS1 前缀** | 3 | `978`（图书）或 `979` |
| **注册组** | 1–5 | 语言 / 国家 / 地区组 |
| **出版者** | 1–7 | 出版者代码 |
| **出版物** | 1–6 | 出版者内序号 |
| **校验位** | 1 | 模 10，权重 1 / 3 交替 |

- **一版一装帧一 ISBN**：精装、平装、电子书通常各有 ISBN。
- **同一著作可有很多 ISBN**：不同出版社、版次、装帧、语种。
- **ISBN-10** 仍见于旧书与旧库，转换时补 `978` 并重算校验位。
- 连续出版物用 ISSN，不用 ISBN。

## 要义

- **ISBN 不标识著作**：要指认作品本身需 ISTC 一类作品级标识（实践中很少用）。
- **ISBN 不标识单次印刷**：印次变化通常不改 ISBN，引用时仍需标注版次与印次（见 [[版次与印次-Edition-and-Impression|版次与印次]]）。
- 丛书有双层级：丛编 ISSN + 各册 ISBN。
- ISBN 是**商业与书目系统的主键**，不是学术引用的充分条件。
- 分配与登记由出版者与国家书号机构负责；著录规则归 [[3 Resources/000-Knowledge/01-目录学/01-目录学|01 目录学]]。

## 相关

[[标识符-Identifier|标识符]] · [[DOI]] · [[版次与印次-Edition-and-Impression|版次与印次]] · [[副文本-Paratext|副文本]] · [[灰色文献-Grey-Literature|灰色文献]]

## Sources

[[04-标识与书目记录|章 04 标识与书目记录]] · UDC 002
