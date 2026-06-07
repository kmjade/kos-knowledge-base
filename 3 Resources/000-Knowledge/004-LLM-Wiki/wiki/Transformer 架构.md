---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# Transformer 架构

> 源：Transformer 架构.md — 编译整理。

## 核心内容

### 核心创新

Transformer（Vaswani et al., 2017）的核心是注意力机制（Attention），它替代了 RNN 的循环结构，实现了：
- 并行计算 — 不再需要序列依赖
- 长距离依赖 — 任意两个位置的 token 可以直接交互
- 可扩展性 — 深度和宽度都可堆叠

### 基本架构

### 关键组件

### 注意力机制

- Q (Query) — 当前 token 的查询向量
- K (Key) — 各 token 的键向量
- V (Value) — 各 token 的值向量
- √d_k — 缩放因子，防止 softmax 饱和


### 工作机制

自注意力机制的计算过程可概括为：

1. 为每个输入 token 生成 Q（查询）、K（键）、V（值）三个向量
2. 计算所有 Q 与 K 的点积，得到注意力分数矩阵
3. 经 softmax 归一化后，对 V 进行加权求和

这一机制使模型能够动态关注输入序列中的任意位置，不受距离限制。
## 相关笔记

- [[LLM 基础]]
- [[知识组织与大模型|知识组织与 LLM]]
- [[提示工程]]

## 参考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer 架构.md




