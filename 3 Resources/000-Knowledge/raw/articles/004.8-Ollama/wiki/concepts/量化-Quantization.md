---
title: "量化 Quantization"
aliases: [Quantization, 模型量化]
type: concept
udc: "004.8"
tags: [ollama, quantization]
created: 2026-09-08
updated: 2026-09-08
compiled: true
reviewed: false
---

# 量化 Quantization

## 定义

量化（Quantization）是用低位宽（如 4 bit、8 bit）表示模型权重以减小体积与显存占用的技术。Ollama 的 GGUF 模型提供 q4_0、q4_K_M、q8_0、f16 等多档量化，权衡质量与体积。

## 相关

[[GGUF-格式|GGUF]] · [[模型-Model|模型]] · [[03-核心架构]]

## Sources

[[source-Ollama-Docs]] · [[03-核心架构]]
