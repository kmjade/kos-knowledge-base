---
title: "上下文窗口 Context Window"
aliases: [Context Window, num_ctx, 上下文长度]
type: concept
udc: "004.8"
tags: [ollama, context-window]
created: 2026-09-08
updated: 2026-09-08
compiled: true
reviewed: false
---

# 上下文窗口 Context Window

## 定义

上下文窗口（Context Window）是模型一次能处理的 token 数量上限，由 `num_ctx` 参数控制。更大的窗口支持更长对话与文档，但消耗更多 KV 缓存显存。

## 相关

[[Modelfile]] · [[量化-Quantization|量化]] · [[08-高级与优化]]

## Sources

[[source-Ollama-Docs]] · [[08-高级与优化]]
