---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8:519.6
tags: [concept, wiki, llm, transformer, deep-learning]
aliases:
  - Transformer Architecture
compiled: true
compiled_from: "[[3 Resources/LLM-Wiki/Transformer 架构.md]]"
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
compiled_version: 1
reviewed: false
conflict: false
---

# Transformer 架构

> **概念** — Transformer 架构

## 定义

Transformer（Vaswani et al., 2017）的核心是**注意力机制（Attention）**，它替代了 RNN 的循环结构，实现了：

## 关键特征

- **并行计算** — 不再需要序列依赖
- **长距离依赖** — 任意两个位置的 token 可以直接交互
- **可扩展性** — 深度和宽度都可堆叠
- **Q** (Query) — 当前 token 的查询向量
- **K** (Key) — 各 token 的键向量
- **V** (Value) — 各 token 的值向量
- **√d_k** — 缩放因子，防止 softmax 饱和
- [[03-Resources/LLM-Wiki/LLM 基础|LLM 基础]]
- [[03-Resources/LLM-Wiki/训练与微调|训练与微调]]

## 与其他概念的关系

- [[LLM 基础]] — 关联概念
- [[训练与微调]] — 关联概念

## 参考来源

- [[3 Resources/LLM-Wiki/Transformer 架构.md]]
