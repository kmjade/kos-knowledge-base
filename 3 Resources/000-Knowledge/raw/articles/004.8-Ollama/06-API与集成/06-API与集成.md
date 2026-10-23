---
title: "06 API 与集成"
aliases: [Ollama API, Ollama Integration]
udc: "004.8"
tags: [ollama, llm, api, integration]
created: 2026-09-08
updated: 2026-09-08
---

# 06 API 与集成

## REST API

默认监听 `http://localhost:11434`：

| 端点 | 作用 |
|------|------|
| `POST /api/generate` | 生成补全（流式/非流式） |
| `POST /api/chat` | 多轮对话（messages 格式） |
| `POST /api/embed` | 生成向量嵌入 |
| `GET /api/tags` | 列出本地模型 |
| `POST /api/pull` | 拉取模型 |
| `POST /api/create` | 创建模型（Modelfile） |

## 生成示例（curl）

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2.5:7b",
  "prompt": "解释什么是 RAG",
  "stream": false
}'
```

## OpenAI 兼容接口

Ollama 提供 OpenAI 兼容端点 `http://localhost:11434/v1`，可直接替换 OpenAI SDK 的 `base_url`：

```python
from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
resp = client.chat.completions.create(
    model="qwen2.5:7b",
    messages=[{"role": "user", "content": "你好"}],
)
```

## 语言 SDK

| SDK | 安装 |
|-----|------|
| Python | `pip install ollama` |
| JavaScript | `npm install ollama` |
| Go | `go get github.com/ollama/ollama` |
| LangChain | `langchain-ollama` |

## 生态集成

| 集成 | 说明 |
|------|------|
| LangChain / LlamaIndex | RAG 框架的 LLM/嵌入后端 |
| Open WebUI | 自托管 Web 界面 |
| Continue / Cline | IDE 编码助手后端 |
| Dify / Flowise | 低代码 AI 应用平台 |

## 关联

[[05-Modelfile与定制]] · [[07-嵌入与RAG]] · [[Ollama-API]] · [[工具调用-Tool-Calling]]
