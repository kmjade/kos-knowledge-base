---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# RAG 與知識庫整合

> 源：RAG 與知識庫整合.md — 編譯整理。

## 核心內容

### 什麼是 RAG？

RAG（Retrieval-Augmented Generation）是將資訊檢索與 LLM 生成相結合的技術範式。

### RAG 在本知識庫

### 方案架構
### 實施路徑
1. 將 Markdown 筆記轉換為純文字區塊
2. 使用 Embedding 模型（如 text-embedding-3-small）生成向量
3. 儲存到向量資料庫（Chroma / FAISS）
4. 用戶提問時檢索相關片段

### 優勢

- 知識截斷 — 不受 LLM 訓練數據截止日期的限制
- 可溯源 — 回答可引用具體筆記
- 成本低 — 不需要重新訓練/微調模型
- 易更新 — 新增筆記即刻可用

### 與 UDC 的結合

UDC 分類號可以作為 RAG 的過濾元數據。

## 相關筆記

-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/LLM 基础]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/知识组织与大模型|知識組織與 LLM]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/提示工程]]]

## 參考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\RAG 與知識庫整合.md
