---
title: "LoRA 低秩适配"
aliases: [LoRA, 低秩适配, Low-Rank Adaptation]
type: concept
udc: "004.8"
tags: [stable-diffusion, lora]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# LoRA 低秩适配

## 定义

LoRA（Low-Rank Adaptation）是 Stable Diffusion 的**轻量微调**方式，文件存放于 `models/Lora/`，提示词中以 `<lora:model_name:0.8>` 引用，可堆叠多个。用于学习风格/角色/概念。

## 关键特性

| 特性 | 说明 |
|------|------|
| 轻量 | 几 MB 到几百 MB |
| 引用 | `<lora:name:0.8>` |
| 堆叠 | 多个 LoRA 叠加 |

## 相关

[[Checkpoint-模型权重|Checkpoint]] · [[ControlNet-结构控制|ControlNet]] · [[05-模型管理]]

## Sources

[[source-SDWebUI-GitHub]] · [[05-模型管理]]
