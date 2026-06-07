---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [concept, wiki, llm, training, fine-tuning]
compiled: true
compiled_from: "[[3 Resources/LLM-Wiki/训练与微调.md]]"
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
compiled_version: 1
reviewed: false
conflict: false
---

# 训练与微调

> **概念** — 训练与微调

## 定义

```

## 关键特征

- **目标**：下一 token 预测（自回归）
- **数据**：TB 级互联网文本、书籍、代码
- **计算**：数千 GPU 并行训练数周至数月
- **产出**：Base 模型（具备语言能力，但未对齐）
- **目标**：指令跟随与对话能力
- **数据**：人工标注的指令-回答对
- **方法**：全参数微调或 Lora/QLora
- **RLHF**：基于人类反馈的强化学习
- 训练 reward model → PPO 优化
- **DPO**：直接偏好优化（更简单，无需 reward model）
- [[03-Resources/LLM-Wiki/LLM 基础|LLM 基础]]
- [[03-Resources/LLM-Wiki/Transformer 架构|Transformer 架构]]

## 与其他概念的关系

- [[LLM 基础]] — 关联概念
- [[Transformer 架构]] — 关联概念

## 参考来源

- [[3 Resources/LLM-Wiki/训练与微调.md]]
