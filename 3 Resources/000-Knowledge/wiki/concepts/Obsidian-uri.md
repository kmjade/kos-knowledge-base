---
aliases: [Obsidian URI, Obsidian-uri, obsidian://, obsidian URL scheme]
created: 2026-06-07
updated: 2026-06-07
udc: "004.9"
ddc: "005"
tags:
  - #udc/004
type: concept
topic: applications
category: 知识管理工具
status: draft
---

# Obsidian URI

> `obsidian://` 协议 — Obsidian 笔记应用的 URL Scheme，用于跨应用链接与自动化。

## 定义

Obsidian URI 是 Obsidian 笔记应用的 URL Scheme（`obsidian://`），允许从浏览器、其他应用或脚本直接打开 Obsidian 中的特定笔记、执行命令或搜索内容。

## 常见用法

```
obsidian://open?vault=我的知识库&file=笔记路径
obsidian://search?vault=我的知识库&query=搜索关键词
obsidian://new?vault=我的知识库&name=新笔记
```

## 关联概念

- [[frontmatter]] — 笔记元数据
- [[File-format]] — Obsidian 使用的 Markdown 文件格式

## 外部链接

- [Obsidian URI 官方文档](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI)
