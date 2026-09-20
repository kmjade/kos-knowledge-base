---
title: "ControlNet 结构控制"
aliases: [ControlNet, 结构控制]
type: concept
udc: "004.8"
tags: [stable-diffusion, controlnet]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# ControlNet 结构控制

## 定义

ControlNet 是 SD WebUI 的**结构控制扩展**（`Mikubill/sd-webui-controlnet`），用结构输入（深度图/姿态骨架/边缘图）条件化生成，最多同时 3 个 ControlNet 单元。

## 常见模式

| 模式 | 输入 |
|------|------|
| Canny | 边缘图 |
| Depth | 深度图 |
| OpenPose | 姿态骨架 |
| Scribble / Segmentation | 涂鸦/分割 |

## 相关

[[扩展-Extensions|扩展]] · [[LoRA-低秩适配|LoRA]] · [[06-扩展与控制]]

## Sources

[[source-SDWebUI-GitHub]] · [[06-扩展与控制]]
