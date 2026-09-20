---
title: "提示词 Prompt"
aliases: [Prompt, 提示词]
type: concept
udc: "004.8"
tags: [stable-diffusion, prompt]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 提示词 Prompt

## 定义

提示词（Prompt）是 SD WebUI 的**文本输入**，分正向（主体+风格+质量）与反向（排除瑕疵）。支持注意力加权（`((term))`、`(term:1.21)`、`[term]`）、prompt editing（`[a:b:step]`）与调度。

## 关键语法

| 语法 | 说明 |
|------|------|
| `((term))` / `(term:1.21)` | 加强 |
| `[term]` | 减弱 |
| `[a:b:step]` | 步数切换 |

## 相关

[[txt2img-文生图|txt2img]] · [[采样器-Sampler|采样器]] · [[03-文生图与提示词]]

## Sources

[[source-SDWebUI-GitHub]] · [[03-文生图与提示词]]
