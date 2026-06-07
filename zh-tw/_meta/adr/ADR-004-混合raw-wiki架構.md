---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [adr, architecture, sub-library, raw-wiki]
status: accepted
---

# ADR-004: Wiki 子庫分層架構 — 混合 raw/wiki 方案

## 上下文

V1.1 規劃（M3）要求將 `3 Resources/` 下的子庫升級為獨立的 `raw/` + `wiki/` 雙層結構。

## 決策

採用**共享 + 子庫獨立**的混合結構。

子庫層（001-PARA、004-LLM-Wiki、025-UDC）各保留自己的 raw/ + wiki/ 存放專題內容；共享層（000-Knowledge/raw/、000-Knowledge/wiki/）存放跨主題內容。

## 狀態

Accepted。M3 以此架構結項。
