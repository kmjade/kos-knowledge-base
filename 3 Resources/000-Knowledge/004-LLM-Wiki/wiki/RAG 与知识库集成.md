---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
ddc: "006.3"
tags: [resource, llm, #udc/004.8, #udc/001.8]
---

# RAG 与知识库集成

> 源：RAG 与知识库集成.md — 编译整理。

## 核心内容

### 什么是 RAG？

RAG（Retrieval-Augmented Generation）是将信息检索与 LLM 生成相结合的技术范式：

### RAG 与本知识库

### 方案架构
### 实施路径
1. 将 Markdown 笔记转换为纯文本块
2. 使用 Embedding 模型（如 text-embedding-3-small）生成向量
3. 存储到向量数据库（Chroma / FAISS）
4. 用户提问时检索相关片段

### 优势

- 知识截断 — 不受 LLM 训练数据截止日期的限制
- 可溯源 — 回答可引用具体笔记
- 成本低 — 不需要重新训练/微调模型
- 易更新 — 新增笔记即刻可用

### 与 UDC 的结合

UDC 分类号可以作为 RAG 的过滤元数据，实现：


### RAG 架构在本系统的实现

基于本知识库的 UDC 分类体系和 PARA 层级结构，RAG 可以实现精细化检索：

1. **按 UDC 过滤** — 只检索特定学科的笔记片段
2. **按 PARA 层级过滤** — 区分资源（通用知识）与项目（具体上下文）
3. **标签交叉** — 组合 #resource/llm 等标签实现多维度筛选

这种分级检索策略能有效减少 RAG 中的语义污染问题。
## 相关笔记

- [[LLM 基础]]
- [[知识组织与大模型|知识组织与 LLM]]
- [[提示工程]]

## 参考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\RAG 与知识库集成.md



