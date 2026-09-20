---
title: "05 Modelfile 与定制"
aliases: [Modelfile, Ollama Modelfile, 模型定制]
udc: "004.8"
tags: [ollama, llm, modelfile, customization]
created: 2026-09-08
updated: 2026-09-08
---

# 05 Modelfile 与定制

## 什么是 Modelfile

Modelfile 是 Ollama 的声明式模型定制文件，类似 Dockerfile，用于定义基础模型、系统提示、参数，从而派生出自定义模型。

## Modelfile 示例

```dockerfile
FROM qwen2.5:7b

SYSTEM """你是一位专业的中文技术文档助手，回答简洁、准确、结构化。"""

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 8192

TEMPLATE """{{ .System }}
用户：{{ .Prompt }}
助手："""
```

## 常用指令

| 指令 | 作用 |
|------|------|
| `FROM` | 指定基础模型 |
| `SYSTEM` | 设置系统提示词 |
| `PARAMETER` | 设置推理参数 |
| `TEMPLATE` | 自定义提示模板 |
| `ADAPTER` | 挂载 LoRA 适配器 |
| `LICENSE` | 声明许可证 |

## 创建与运行

```bash
ollama create my-assistant -f Modelfile   # 创建自定义模型
ollama run my-assistant                    # 运行
ollama show my-assistant                   # 查看生成的完整 Modelfile
```

## 常用参数

| 参数 | 含义 | 默认 |
|------|------|------|
| `temperature` | 采样温度（创造性） | 0.8 |
| `top_p` | 核采样 | 0.9 |
| `top_k` | Top-K 采样 | 40 |
| `num_ctx` | 上下文窗口长度 | 2048/8192 |
| `num_predict` | 最大生成长度 | -1（不限） |
| `stop` | 停止符 | — |

## 系统提示最佳实践

- 明确角色与边界
- 指定输出格式（如 Markdown 表格）
- 设定风格（简洁/详细/专业）
- 用 `TEMPLATE` 适配特殊对话格式（如 RAG、工具调用）

## 关联

[[04-模型管理]] · [[06-API与集成]] · [[Modelfile]] · [[上下文窗口-Context-Window]]
