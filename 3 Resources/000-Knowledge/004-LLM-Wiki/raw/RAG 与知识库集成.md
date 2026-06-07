---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8
tags: [resource, llm, rag, retrieval]
compiled: true
compiled_at: "2026-06-07T00:00"
compiled_by: "KOS-Wiki-Compile"
---

# RAG 与知识库集成

> **资源：** 检索增强生成（RAG）技术在本知识库中的应用方案。
> UDC: 001.8:004.8

---

## 什么是 RAG？

RAG（Retrieval-Augmented Generation）是将信息检索与 LLM 生成相结合的技术范式：

```
用户查询 → [检索] → [相关知识片段]
                            ↓
用户查询 + 知识片段 → [LLM] → 回答
```

## RAG 与本知识库

### 方案架构
```
KOS_LLM-Wiki (Markdown)
       ↓
文本分块 (Chunking)
       ↓
Embedding 向量化
       ↓
向量数据库 ← → LLM
       ↑
用户查询 (向量化后检索)
```

### 实施路径
1. 将 Markdown 笔记转换为纯文本块
2. 使用 Embedding 模型（如 text-embedding-3-small）生成向量
3. 存储到向量数据库（Chroma / FAISS）
4. 用户提问时检索相关片段
5. 将片段注入 LLM 上下文生成回答

## 优势
- **知识截断** — 不受 LLM 训练数据截止日期的限制
- **可溯源** — 回答可引用具体笔记
- **成本低** — 不需要重新训练/微调模型
- **易更新** — 新增笔记即刻可用

## 与 UDC 的结合

UDC 分类号可以作为 RAG 的**过滤元数据**，实现：

```
查询 → 限定 UDC 类号 → 在该类中检索 → 更精确的结果
```

## 相关笔记

- [[03-Resources/LLM-Wiki/知识组织与大模型|知识组织与 LLM]]
- [[03-Resources/LLM-Wiki/LLM 基础|LLM 基础]]
