---
title: "07 嵌入与 RAG"
aliases: [Ollama Embeddings, Ollama RAG]
udc: "004.8"
tags: [ollama, llm, embeddings, rag]
created: 2026-09-08
updated: 2026-09-08
---

# 07 嵌入与 RAG

## 嵌入（Embeddings）

Ollama 支持生成文本向量，模型如 `nomic-embed-text`、`mxbai-embed-large`、`bge-m3`：

```bash
curl http://localhost:11434/api/embed -d '{
  "model": "nomic-embed-text",
  "input": "Ollama 本地运行大模型"
}'
```

Python：

```python
import ollama
ollama.embed(model="nomic-embed-text", input="本地大模型")
```

## 常用嵌入模型

| 模型 | 维度 | 特点 |
|------|:--:|------|
| nomic-embed-text | 768 | 轻量通用 |
| mxbai-embed-large | 1024 | 高质量 |
| bge-m3 | 1024 | 多语言/长文本 |

## RAG 流程

```
文档 → 切分(chunk) → 嵌入(embed) → 向量库存储
                                          ↓ 检索
用户问题 → 嵌入 → 相似度检索 → Top-K 上下文 → 拼入提示 → LLM 生成
```

## 端到端 RAG 示例

```python
import ollama
docs = ["...文档块1...", "...文档块2..."]
# 1. 建索引
vecs = [ollama.embed(model="nomic-embed-text", input=d)["embeddings"] for d in docs]
# 2. 检索
qvec = ollama.embed(model="nomic-embed-text", input="问题")["embeddings"]
# 3. 相似度（余弦）取 top-k
# 4. 生成
ollama.chat(model="qwen2.5:7b", messages=[
  {"role": "system", "content": "基于以下上下文回答"},
  {"role": "user", "content": "上下文: " + ctx + "\n问题: ..."}
])
```

## 向量库

| 方案 | 说明 |
|------|------|
| Chroma | 轻量嵌入式向量库 |
| FAISS | Facebook 高效检索 |
| Milvus / Qdrant | 生产级向量数据库 |
| pgvector | PostgreSQL 扩展 |

## 关联

[[06-API与集成]] · [[08-高级与优化]] · [[嵌入-Embeddings]] · [[模型-Model]]
