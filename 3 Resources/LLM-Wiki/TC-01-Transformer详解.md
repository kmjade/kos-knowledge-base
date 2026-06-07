---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [triage, 3 resources]
triage:
  status: processed
  date: 2026-06-07
  confidence: high
  source: 0 Inbox/_test/TC-01-Transformer详解.md
  route: 3 Resources/LLM-Wiki/
lifecycle: reference
triage_type: reference
---

# Transformer 架构详解

Transformer 是 Google 在 2017 年提出的深度学习架构。其核心创新是注意力机制（Attention），它替代了 RNN 的循环结构，实现了并行计算和长距离依赖建模。

## 核心组件

1. Multi-Head Self-Attention
2. Feed-Forward Network
3. Layer Normalization
4. Residual Connection

## 应用场景

- 机器翻译
- 文本生成
- 多模态理解