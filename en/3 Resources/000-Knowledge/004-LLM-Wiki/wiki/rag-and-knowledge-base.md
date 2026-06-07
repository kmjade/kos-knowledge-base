---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# RAG and Knowledge Base Integration

> Source: Compiled from RAG and Knowledge Base Integration raw.

## Core Concepts

### What is RAG?

RAG (Retrieval-Augmented Generation) combines information retrieval with LLM generation.

### RAG in This Knowledge Base

### Architecture
### Implementation Path
1. Convert Markdown notes to plain text chunks
2. Generate embeddings (e.g., text-embedding-3-small)
3. Store in vector database (Chroma / FAISS)
4. Retrieve relevant chunks on user queries

### Advantages

- Knowledge cutoff independence — Not limited by LLM training data date
- Traceability — Answers can cite specific notes
- Low cost — No retraining/fine-tuning needed
- Easy updates — New notes are immediately usable

### Integration with UDC

UDC classification numbers can serve as RAG filtering metadata.

## Related Notes

- [[llm-fundamentals]]
- [[kos-and-llm]]
- [[prompt-engineering]]

## Reference

- Source: 3 Resources\000-Knowledge\004-LLM-Wiki\raw\RAG 与知识库集成.md
