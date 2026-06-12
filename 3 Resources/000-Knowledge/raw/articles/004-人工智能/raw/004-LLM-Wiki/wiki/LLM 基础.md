---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
ddc: "006.3"
tags: [resource, llm, #udc/004.8]
---

# LLM 基础

> 源：LLM 基础.md — 编译整理。

## 核心内容

### 什么是 LLM？

大语言模型（Large Language Model）是基于海量文本数据训练的神经网络模型，能够理解和生成人类语言。核心特点：
- **规模效应** — 参数规模达到数十亿至数千亿
- **涌现能力** — 在规模突破后出现小模型不具备的能力
- **上下文学习** — 无需微调即可通过示例完成新任务

### 关键技术

- **Transformer 架构** — 自注意力机制实现并行计算与长距离依赖
- **预训练 + 微调范式** — 先在大规模数据上预训练，再在特定任务上微调
- **RLHF（人类反馈强化学习）** — 使模型输出与人类偏好对齐

### 代表性模型

| 系列 | 代表 | 特点 |
|------|------|------|
| GPT | GPT-4 | 闭源，多模态 |
| Llama | Llama 3 | 开源，可本地部署 |
| Claude | Claude 3 | 安全对齐，长上下文 |

## 相关笔记

-[[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/知识组织与大模型|知识组织与 LLM]]]
-[[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/提示工程]]]

## 参考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\LLM 基础.md




