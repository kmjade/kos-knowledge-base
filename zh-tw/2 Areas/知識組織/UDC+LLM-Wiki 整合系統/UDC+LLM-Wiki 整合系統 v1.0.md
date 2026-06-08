---
aliases:
  - UDC+LLM-Wiki 整合系統架構
  - UDC-Wiki 整合 (TW)
created: 2026-06-07
updated: 2026-06-08
version: "1.0"
status: stable
type: design
parent: "[[../../../../2 Areas/知识组织/UDC+LLM-Wiki 整合系统/UDC+LLM-Wiki 整合系统 v1.0|UDC+LLM-Wiki 整合系統 (CN)]]"
tags:
  - architecture
  - design
  - udc
  - classification
  - knowledge-organization
---

# UDC+LLM-Wiki 整合系統 v1.0

> 國際十進分類法 x LLM-Wiki 知識編譯引擎
> 分面分類 | 跨體系映射 | 知識圖譜增強

此為 [[UDC+LLM-Wiki 整合系统 v1.0|簡體中文版 (CN)]] 的繁體鏡像。完整架構文檔請參閱簡體版。

## 核心觀點

- **DDC 是骨架，UDC 是關節** — DDC 提供剛性結構（十類體系），UDC 提供靈活運動（分面組合）
- **分類體系間可翻譯** — DDC、UDC、CLC、LCC 互為方言
- **分面是超鏈接** — UDC 複合號 (`:`) 本質上是概念間的鏈接

## Frontmatter 示例

```yaml
udc: "004.8:004.93"
ddc: "000"
clc: "TP18"
lcc: "QA76.9.N38"
tags: ["#udc/tech/ai"]
```
