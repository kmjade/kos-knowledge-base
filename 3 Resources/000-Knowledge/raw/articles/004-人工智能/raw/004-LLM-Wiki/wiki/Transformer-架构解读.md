---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
ddc: "006.3"
tags: [resource, llm, #udc/004.8, #udc/004.8:519.6]
---

# Transformer 架构详解

> 源：Transformer-架构解读.md — 编译整理。

## 核心内容

### 核心概念

Transformer 是 Google 在 2017 年提出的深度学习架构，核心创新是自注意力机制（Self-Attention）。

### 主要组件

### 多头注意力
Multi-Head Attention 允许模型同时关注不同位置的表示子空间。
### 前馈网络
每个 Transformer Block 包含两个前馈网络层，中间使用 ReLU 激活。
### 位置编码
由于自注意力本身不具备位置感知能力，Transformer 使用正弦位置编码注入位置信息。

### 关键优势

- 并行计算：不同于 RNN 的序列处理，Transformer 可并行训练
- 长距离依赖：自注意力直接建模任意两个位置的交互
- 可扩展性：增加层数和头数可显著提升能力

### 参考

- Attention Is All You Need (Vaswani et al., 2017)
- BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al., 2019)
- GPT-3: Language Models are Few-Shot Learners (Brown et al., 2020)

## 相关笔记

-[[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/LLM 基础]]]
-[[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/知识组织与大模型|知识组织与 LLM]]]
-[[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/提示工程]]]

## 参考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer-架构解读.md




