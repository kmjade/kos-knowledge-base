---
title: "工具调用 Tool Calling"
aliases: [Tool Calling, Function Calling, 函数调用]
type: concept
udc: "004.8"
tags: [ollama, tool-calling]
created: 2026-09-08
updated: 2026-09-08
compiled: true
reviewed: false
---

# 工具调用 Tool Calling

## 定义

工具调用（Tool Calling）是让模型输出结构化函数调用（含参数 JSON），供程序执行并回填结果的机制，是构建 Agent 的关键。Ollama 通过 `/api/chat` 的 `tools` 字段支持（需模型具备该能力）。

## 相关

[[Ollama-API|Ollama API]] · [[06-API与集成]] · [[模型-Model|模型]]

## Sources

[[source-Ollama-Docs]] · [[06-API与集成]]
