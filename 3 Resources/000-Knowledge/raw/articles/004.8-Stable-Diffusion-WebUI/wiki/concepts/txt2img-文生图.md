---
title: "txt2img 文生图"
aliases: [txt2img, 文生图, Text-to-Image]
type: concept
udc: "004.8"
tags: [stable-diffusion, txt2img]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# txt2img 文生图

## 定义

txt2img 是 SD WebUI 的**核心生成功能**：从文本提示生成图像，控制采样器、采样步数、CFG scale、分辨率与种子。支持注意力加权（`((term))`、`(term:1.21)`）、反向提示词、prompt editing/调度与风格。

## 关键参数

| 参数 | 说明 |
|------|------|
| Sampler | 去噪算法 |
| Steps | 迭代次数 |
| CFG Scale | 提示词引导强度 |
| Seed | 随机种子（可复现） |

## 相关

[[提示词-Prompt|提示词]] · [[采样器-Sampler|采样器]] · [[03-文生图与提示词]]

## Sources

[[source-SDWebUI-GitHub]] · [[03-文生图与提示词]]
