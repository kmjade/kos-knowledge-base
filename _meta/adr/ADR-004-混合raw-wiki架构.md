---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [adr, architecture, sub-library, raw-wiki]
status: accepted
---

# ADR-004: Wiki 子库分层架构 — 混合 raw/wiki 方案

## 上下文

V1.1 规划（M3）要求将 `3 Resources/` 下的子库（LLM-Wiki、PARA、UDC）升级为独立的 `raw/` + `wiki/` 双层结构，使每个子库自包含原始资料和编译产物。

## 决策

采用**共享 + 子库独立**的混合结构：

```
3 Resources/000-Knowledge/
├── 001-PARA/
│   ├── raw/          # PARA 专题原始资料
│   └── wiki/         # PARA 专题编译页面
├── 004-LLM-Wiki/
│   ├── raw/          # LLM-Wiki 专题原始资料
│   └── wiki/         # LLM-Wiki 专题编译页面
├── 025-UDC/
│   ├── raw/          # UDC 专题原始资料
│   └── wiki/         # UDC 专题编译页面
├── raw/              # 跨主题原始资料（按类型：articles/books/conversations/papers）
├── wiki/             # 跨主题编译内容（按类型：concepts/entities/sources）
└── _meta/            # 系统元数据
```

## 理由

1. **避免碎片化** — 跨主题内容（如分类学通论、多主题交叉文章）只需存一份
2. **共享实体** — 人物、概念等实体跨子库引用时，统一维护在共享 wiki/entities 和 wiki/concepts
3. **专题聚焦** — 各子库的专题原始资料和编译产物仍保持独立，便于按 UDC 管理
4. **渐进迁移** — 无需一次性全部拆分，遗留内容可逐步归位

## 影响

- 正面：减少重复，降低维护成本
- 正面：共享 wiki 层的概念页可被多子库引用
- 权衡：查询时需跨两个层次的 wiki 目录（子库 wiki + 共享 wiki）

## 状态

Accepted。M3 以此架构结项。
