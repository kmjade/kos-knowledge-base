---
title: "06 Manager 与自定义节点"
aliases: [ComfyUI Manager, Custom Nodes]
udc: "004.8"
tags: [comfyui, manager, custom-nodes]
created: 2026-09-05
updated: 2026-09-05
---

# 06 Manager 与自定义节点

## ComfyUI Manager

ComfyUI Manager 是**近乎必装**的自定义节点管理器：

| 能力 | 说明 |
|------|------|
| 安装 | 一键安装/更新/卸载自定义节点 |
| 依赖 | 检测缺失 Python 依赖 |
| 模型 | 模型下载管理 |
| 修复 | 工作流修复 |

```bash
# 安装到 custom_nodes/
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

## 自定义节点（Custom Nodes）

**1000+ 社区自定义节点**：

| 节点 | 用途 |
|------|------|
| comfyui-impact-pack | 通用工具包 |
| comfyui-animatediff-evolved | 视频生成 |
| comfyui-controlnet-aux | ControlNet 预处理 |
| comfyui_ipadapter_plus | IPAdapter |
| comfyui-videohelpersuite | 视频合成 |

## 最佳实践

- 一次装一个节点，测试后再加
- 关闭激进自动更新与「unsafe」安装
- 不要随意自动升级 Torch/CUDA
- 大改动前备份

## 关联

[[05-模型与多模态]] · [[07-API与自动化]] · [[wiki/concepts/自定义节点-Custom-Nodes|自定义节点]] · [[wiki/concepts/ComfyUI-Manager|ComfyUI Manager]]
