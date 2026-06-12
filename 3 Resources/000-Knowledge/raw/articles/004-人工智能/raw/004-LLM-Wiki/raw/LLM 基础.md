---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8
tags: [resource, llm, ai, fundamental]
aliases:
  - Large Language Model
  - LLM Fundamentals
compiled: true
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
---

# LLM 基础

> **资源：** 大语言模型（LLM）的核心概念与知识架构。

---

## 什么是 LLM？

大语言模型（Large Language Model）是基于海量文本数据训练的神经网络模型，能够理解和生成人类语言。核心特点是：

- **规模效应** — 参数规模达到数十亿至数千亿
- **涌现能力** — 在规模突破后出现小模型不具备的能力
- **上下文学习** — 无需微调即可通过示例完成新任务

## 发展简史

```
2017 — Transformer 架构提出
2018 — BERT（Google）、GPT-1（OpenAI）
2019 — GPT-2（15亿参数）
2020 — GPT-3（1750亿参数）
2022 — ChatGPT（对话式 AI 爆发）
2023 — GPT-4、Llama 2、Claude 等
2024+ — 多模态、推理增强、开源生态
```

## 核心能力

| 能力 | 说明 |
|------|------|
| 文本生成 | 对话、写作、代码生成 |
| 推理 | 逻辑推理、数学求解、分析 |
| 知识问答 | 从训练数据中提取事实 |
| 翻译 | 多语言翻译与转换 |
| 摘要 | 长文本浓缩与提取 |
| 分类 | 文本分类与情感分析 |
| 代码 | 编程、调试、解释 |

## 关键模型家族

| 家族 | 代表模型 | 特点 |
|------|---------|------|
| GPT | GPT-4, GPT-4o | 闭源，能力全面 |
| Llama | Llama 2/3 | 开源，社区活跃 |
| Claude | Claude 3/4 | 安全优先，长上下文 |
| Gemini | Gemini 1.5/2 | 多模态，谷歌生态 |
| Qwen | Qwen 2/2.5 | 中文能力强，阿里系 |
| DeepSeek | DeepSeek-V2/R1 | 推理增强，高性价比 |

## 局限与挑战

- **幻觉** — 生成不实信息
- **知识截止** — 训练数据有截断日期
- **上下文限制** — 信息窗口有限
- **计算成本** — 训练和推理资源消耗大
- **对齐问题** — 价值观与安全性

## 相关笔记

- [[03-Resources/LLM-Wiki/Transformer 架构|Transformer 架构]]
- [[03-Resources/LLM-Wiki/训练与微调|训练与微调]]
- [[03-Resources/LLM-Wiki/提示工程|提示工程]]
- [[03-Resources/LLM-Wiki/知识组织与大模型|知识组织与 LLM]]
- [[02-Areas/LLM 研究|LLM 研究]]
