---
title: "img2img 图生图"
aliases: [img2img, 图生图, Image-to-Image]
type: concept
udc: "004.8"
tags: [stable-diffusion, img2img]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# img2img 图生图

## 定义

img2img 用提示词 + **denoising strength（去噪强度）** 改造现有图像：强度越接近 1 变化越大，越接近 0 越保留原图。支持 loopback 迭代精炼与 resize。

## 关键特性

| 特性 | 说明 |
|------|------|
| Denoising strength | 控制改造幅度 |
| Loopback | 迭代精炼 |
| Resize | 调尺寸重绘 |

## 相关

[[Inpainting-局部重绘|Inpainting]] · [[txt2img-文生图|txt2img]] · [[04-图生图与修复]]

## Sources

[[source-SDWebUI-GitHub]] · [[04-图生图与修复]]
