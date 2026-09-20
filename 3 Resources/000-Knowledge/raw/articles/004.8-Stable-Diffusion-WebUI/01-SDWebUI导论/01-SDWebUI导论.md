---
title: "01 SD WebUI 导论"
aliases: [SD WebUI Introduction, SDWebUI 导论]
udc: "004.8"
tags: [stable-diffusion, ai-image, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 SD WebUI 导论

## 什么是 Stable Diffusion Web UI

Stable Diffusion Web UI（作者 **AUTOMATIC1111**，简称 **A1111**）是**最流行的开源本地 Stable Diffusion 图形界面**，基于 Gradio 构建，浏览器访问。它是运行 Stable Diffusion 的「事实标准」，被誉为「AI 绘画的瑞士军刀」。

## 核心理念

| 特性 | 说明 |
|------|------|
| **本地运行** | 模型与图片都在本地，隐私可控 |
| **浏览器界面** | Gradio，无需命令行操作 |
| **三大核心** | txt2img / img2img / inpainting |
| **模型管理** | Checkpoint 热切换、合并、LoRA/VAE |
| **扩展生态** | 100–300+ 社区扩展 |

## 出品方与技术底座

- **界面作者**：AUTOMATIC1111（个人开发者）
- **底层模型**：Stable Diffusion（Stability AI 的扩散模型）
- **技术栈**：Python + PyTorch + Gradio

## 与同类工具对比

| 工具                     | 定位         | 与 SD WebUI 的差异             |
| ---------------------- | ---------- | -------------------------- |
| ComfyUI                | 节点式界面      | 更灵活/更底层，学习曲线陡              |
| Fooocus                | 极简界面       | 开箱即用，控制项少                  |
| Stable Diffusion Forge | A1111 活跃继任 | 兼容扩展 + 更省显存 + 更快 SDXL/Flux |
| Midjourney / DALL·E    | 云端商业服务     | SD WebUI 本地免费、可控、可训练       |

## 状态（2026）

原 A1111 项目仍在维护但开发放缓，**Stable Diffusion Forge**（lllyasviel）成为活跃继任，兼容大多数 A1111 扩展。

## 免费与许可

| 项 | 说明 |
|----|------|
| 界面 | 开源（AGPL-3.0） |
| 模型 | SD 1.5 等开源；部分需遵循模型许可 |
| 硬件 | 本地 GPU（NVIDIA 推荐） |

## 关联

[[02-安装与快速入门]] · [[03-文生图与提示词]] · [[00-MOCs/SDWebUI知识地图|知识地图]]
