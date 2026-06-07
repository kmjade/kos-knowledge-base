---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8:519.6
tags: [concept, wiki, llm, transformer]
compiled: true
compiled_from: "[[3 Resources/LLM-Wiki/Transformer-架构解读.md]]"
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
compiled_version: 1
reviewed: false
conflict: false
---

# Transformer 架构详解

> **概念** — Transformer 架构详解

## 定义

Transformer 是 Google 在 2017 年提出的深度学习架构，核心创新是自注意力机制（Self-Attention）。

## 关键特征

- 并行计算：不同于 RNN 的序列处理，Transformer 可并行训练
- 长距离依赖：自注意力直接建模任意两个位置的交互
- 可扩展性：增加层数和头数可显著提升能力
- Attention Is All You Need (Vaswani et al., 2017)
- BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al., 2019)
- GPT-3: Language Models are Few-Shot Learners (Brown et al., 2020)

## 与其他概念的关系


## 参考来源

- [[3 Resources/LLM-Wiki/Transformer-架构解读.md]]
