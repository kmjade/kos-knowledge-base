---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [query, llm, index]
---

# LLM-Wiki 页面清单

> 列出所有 LLM-Wiki wiki 页面的元数据与多语言同步状态。

## 所有页面

`dataview
TABLE WITHOUT ID
  file.link AS "页面",
  udc AS "UDC",
  tags AS "标签",
  dateformat(file.ctime, "yyyy-MM-dd") AS "创建",
  dateformat(file.mtime, "yyyy-MM-dd") AS "更新"
FROM "3 Resources/000-Knowledge/004-LLM-Wiki/wiki"
SORT file.name ASC
`

## 英文版

`dataview
TABLE WITHOUT ID
  file.link AS "Page",
  udc AS "UDC",
  tags AS "Tags",
  dateformat(file.ctime, "yyyy-MM-dd") AS "Created",
  dateformat(file.mtime, "yyyy-MM-dd") AS "Updated"
FROM "en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki"
SORT file.name ASC
`

## 繁体版

`dataview
TABLE WITHOUT ID
  file.link AS "頁面",
  udc AS "UDC",
  tags AS "標籤",
  dateformat(file.ctime, "yyyy-MM-dd") AS "建立",
  dateformat(file.mtime, "yyyy-MM-dd") AS "更新"
FROM "zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki"
SORT file.name ASC
`

## 多语言同步状态

`dataview
TABLE WITHOUT ID
  file.name AS "CN 文件名",
  choice(length(filter(rows, (x) => contains(x.file.folder, "en/"))) > 0, "✓", "✗") AS "EN",
  choice(length(filter(rows, (x) => contains(x.file.folder, "zh-tw/"))) > 0, "✓", "✗") AS "TW"
FROM "3 Resources/000-Knowledge/004-LLM-Wiki/wiki"
SORT file.name ASC
`

> 维护提示：新增或翻译 LLM-Wiki 页面后，同步更新本查询。
