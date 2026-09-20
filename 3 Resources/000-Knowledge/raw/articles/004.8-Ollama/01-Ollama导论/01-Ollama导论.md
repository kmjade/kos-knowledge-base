---
title: "01 Ollama 导论"
aliases: [Ollama Introduction, Ollama 导论]
udc: "004.8"
tags: [ollama, llm, intro]
created: 2026-09-08
updated: 2026-09-08
---

# 01 Ollama 导论

## 什么是 Ollama

Ollama 是**最流行的本地大语言模型运行工具**，由 Ollama Inc. 出品。它把「下载、运行、管理开源 LLM」打包成一条极简命令行体验，让任何人都能在自己的电脑上私有化运行 Llama、Qwen、DeepSeek、Mistral 等模型。

## 核心理念

| 特性 | 说明 |
|------|------|
| **一键运行** | `ollama run llama3.2` 即可本地对话 |
| **模型管理** | pull / run / list / rm 统一管理模型 |
| **可定制** | Modelfile 声明式定制系统提示与参数 |
| **可编程** | REST API + OpenAI 兼容接口 + SDK |
| **私有化** | 数据不出本机，CPU/GPU 均可跑 |

## 出品方：Ollama Inc.

Ollama Inc. 是 2023 年成立于旧金山的公司，聚焦「让大模型在本地运行变得简单」。产品包括 Ollama（CLI/服务）、Ollama Library（模型库）、Open WebUI 生态（社区）。

## 与同类工具对比

| 工具 | 定位 | 与 Ollama 的差异 |
|------|------|------------------|
| LM Studio | 图形界面本地运行 | GUI 优先，Ollama CLI/API 优先 |
| llama.cpp | 底层推理引擎 | Ollama 上层封装了 llama.cpp |
| vLLM | 高吞吐推理服务 | 面向生产集群，Ollama 面向个人/边缘 |
| GPT4All | 本地 LLM 桌面应用 | 偏桌面应用，Ollama 偏服务/API |
| Transformers (HF) | 通用模型库 | 研究导向，Ollama 是开箱即用运行时 |

## 状态（2026）

- MIT 许可，GitHub 星数持续增长，活跃开发
- 底层基于 llama.cpp，支持 GGUF 量化模型
- 支持 macOS（Metal）、Linux（CUDA/ROCm）、Windows、Docker
- 模型库覆盖 Llama / Qwen / DeepSeek / Mistral / Gemma / Phi 等主流开源模型

## 免费与付费

| 项 | 说明 |
|----|------|
| 本地运行 | 完全免费开源（MIT） |
| 模型 | 开源模型免费下载（部分需接受协议） |
| 云端 | 第三方托管（如 Open WebUI 云）另计 |

## 关联

[[02-安装与快速入门]] · [[03-核心架构]] · [[00-MOCs/Ollama知识地图|知识地图]]
