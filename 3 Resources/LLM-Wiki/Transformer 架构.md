---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8:519.6
tags: [resource, llm, transformer, deep-learning]
aliases:
  - Transformer Architecture
compiled: true
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
---

# Transformer 架构

> **资源：** 现代 LLM 的基石——Transformer 架构详解。
> UDC: 004.8:519.6（AI + 计算数学/神经网络）

---

## 核心创新

Transformer（Vaswani et al., 2017）的核心是**注意力机制（Attention）**，它替代了 RNN 的循环结构，实现了：

- **并行计算** — 不再需要序列依赖
- **长距离依赖** — 任意两个位置的 token 可以直接交互
- **可扩展性** — 深度和宽度都可堆叠

## 基本架构

```
输入序列 → [Token Embedding + Positional Encoding]
              ↓
       [ Multi-Head Self-Attention ]
              ↓
       [ Add & LayerNorm ]
              ↓
       [ Feed Forward (MLP) ]
              ↓
       [ Add & LayerNorm ]
              ↓
             ×N 层
              ↓
       [输出：序列中各位置的表征]
```

### 关键组件

| 组件 | 作用 |
|------|------|
| Token Embedding | 将文本转换为向量 |
| Positional Encoding | 注入位置信息 |
| Multi-Head Attention | 同时关注不同子空间 |
| Feed-Forward Network | 非线性变换 |
| LayerNorm | 稳定训练 |
| Residual Connection | 缓解梯度消失 |

## 注意力机制

```
Attention(Q, K, V) = softmax(Q × K^T / √d_k) × V
```

- **Q** (Query) — 当前 token 的查询向量
- **K** (Key) — 各 token 的键向量
- **V** (Value) — 各 token 的值向量
- **√d_k** — 缩放因子，防止 softmax 饱和

## 变体演进

| 架构 | 代表模型 | 特点 |
|------|---------|------|
| Encoder-only | BERT | 理解任务 |
| Decoder-only | GPT 系列 | 生成任务 |
| Encoder-Decoder | T5, BART | 序列转换 |
| MoE | Mixtral 8x7B | 稀疏激活 |
| Mamba | Mamba | 状态空间模型替代注意力 |

## 相关笔记

- [[03-Resources/LLM-Wiki/LLM 基础|LLM 基础]]
- [[03-Resources/LLM-Wiki/训练与微调|训练与微调]]
