---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:004.8
tags: [resource, llm, rag, retrieval]
---

# RAG 與知識庫整合

> **資源：** 檢索增強生成（RAG）技術在本知識庫中的應用方案。
> UDC: 001.8:004.8

---

## 核心內容

### 什麼是 RAG？

RAG（Retrieval-Augmented Generation）是將信息檢索與 LLM 生成相結合的技術範式：

### RAG 與本知識庫

### 方案架構
### 實施路徑
1. 將 Markdown 筆記轉換為純文本塊
2. 使用 Embedding 模型（如 text-embedding-3-small）生成向量
3. 存儲到向量資料庫（Chroma / FAISS）
4. 用戶提問時檢索相關片段

### 優勢

- 知識截斷 — 不受 LLM 訓練數據截止日期的限制
- 可溯源 — 回答可引用具體筆記
- 成本低 — 不需要重新訓練/微調模型
- 易更新 — 新增筆記即刻可用

### 與 UDC 的結合

UDC 分類號可以作為 RAG 的過濾元數據，實現：


## 什麼是 RAG？

RAG（Retrieval-Augmented Generation）是將資訊檢索與 LLM 生成相結合的技術：

```
使用者查詢 → [檢索] → [相關知識片段]
                            ↓
使用者查詢 + 知識片段 → [LLM] → 回答
```

## RAG 與本知識庫

### 架構
```
KOS_LLM-Wiki (Markdown)
       ↓
文字分塊 (Chunking)
       ↓
Embedding 向量化
       ↓
向量資料庫 ← → LLM
       ↑
使用者查詢 (向量化後檢索)
```

### 實施路徑
1. 將 Markdown 筆記轉換為純文字區塊
2. 使用 Embedding 模型（如 text-embedding-3-small）產生向量
3. 儲存到向量資料庫（Chroma / FAISS）
4. 使用者提問時檢索相關片段
5. 將片段注入 LLM 上下文生成回答

## 優勢
- **知識時效** — 不受 LLM 訓練資料截止日期的限制
- **可溯源** — 回答可引用具體筆記
- **成本低** — 不需要重新訓練/微調模型
- **易更新** — 新增筆記即刻可用

## 與 UDC 的結合

UDC 分類號可以作為 RAG 的**過濾元資料**：

```
查詢 → 限定 UDC 類號 → 在該類中檢索 → 更精確的結果
```

## 相關筆記

- [[zh-tw/3 Resources/LLM-Wiki/知識組織與大模型|知識組織與大模型]]
- [[zh-tw/3 Resources/LLM-Wiki/LLM 基礎|LLM 基礎]]
