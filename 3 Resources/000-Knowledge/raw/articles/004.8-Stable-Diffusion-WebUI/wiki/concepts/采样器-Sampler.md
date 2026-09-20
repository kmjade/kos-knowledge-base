---
title: "采样器 Sampler"
aliases: [Sampler, 采样器, 采样]
type: concept
udc: "004.8"
tags: [stable-diffusion, sampler]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 采样器 Sampler

## 定义

采样器（Sampler）是 Stable Diffusion 的**去噪算法**，决定从噪声逐步生成图像的路径。常见：Euler a、DPM++ 2M Karras、DDIM、UniPC 等。不同采样器在速度/质量/收敛步数上各有差异。

## 关键特性

| 特性 | 说明 |
|------|------|
| 步数 | 通常 20–50 |
| Karras | 改进噪声调度 |
| 选择 | 影响速度与质量 |

## 相关

[[txt2img-文生图|txt2img]] · [[03-文生图与提示词]]

## Sources

[[source-SDWebUI-GitHub]] · [[03-文生图与提示词]]
