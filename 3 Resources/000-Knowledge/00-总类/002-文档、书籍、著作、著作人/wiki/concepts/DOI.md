---
title: "DOI Digital Object Identifier"
aliases: [DOI, 数字对象标识, 数字对象唯一标识符]
type: concept
udc: "002"
tags: [documentation, concept, DOI, udc-002]
created: 2026-10-19
updated: 2026-10-19
compiled: true
reviewed: false
---

# DOI Digital Object Identifier

## 定义

**DOI**（ISO 26324）是建立在 **Handle System** 之上的命名与解析机制。它由前缀（`10.` + 注册机构编号）与后缀（注册者分配）组成，通过 `doi.org` 解析到当前地址。DOI 承诺的是**解析**，不是**内容正确**或**永久可用**。

## 要点

| 组成 | 说明 | 形态 |
|:------|:------|:------|
| **前缀** | 注册机构编号 | `10.1000` |
| **后缀** | 注册者自行分配 | `xyz123` |
| **解析** | 查询当前 URL | `https://doi.org/10.1000/xyz123` |

- **DOI 标识内容，不标识载体**：同一论文的 HTML 与 PDF 通常共用一个 DOI。
- **版本化 DOI**：数据集、软件常用「概念 DOI + 版本 DOI」两套并存。
- **DOI ≠ URL**：URL 是地址，会失效；DOI 是名字，由解析服务转向当前地址。
- 其他持久标识（Handle · ARK · PURL · URN/NBN）各有治理模式（见 [[标识符-Identifier|标识符]]）。

## 要义

- 引用时优先用 DOI / Handle，而不是裸 URL；网页引用应附访问日期与存档副本。
- **有 DOI 不代表打得开**：登记方可以撤销解析或下线内容。
- **有 DOI 不代表经过评议**：预印本、数据集也可以有 DOI（见 [[预印本-Preprint|预印本]]）。
- DOI 的长期可用性依赖注册机构与保存策略（见 [[数字保存-Digital-Preservation|数字保存]]）。
- 注册、元数据与解析政策属出版与信息机构；本库只讨论其作为文档标识的性质。

## 相关

[[标识符-Identifier|标识符]] · [[ISBN]] · [[预印本-Preprint|预印本]] · [[数字保存-Digital-Preservation|数字保存]] · [[真实性-Authenticity|真实性]]

## Sources

[[04-标识与书目记录|章 04 标识与书目记录]] · [[08-出版、传播与获取|章 08 出版、传播与获取]] · UDC 002
