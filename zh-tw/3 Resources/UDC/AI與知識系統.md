---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8
tags: [[resource, knowledge-organization, kos]]
---

# AI與知識系統

> 源：08-AI-and-Knowledge-Systems.md — 編譯整理。

## 核心內容
### RAG (檢索增強生成)

| LLM知識有截止日期+可能幻覺——RAG: 先檢索——再生成——用真實文檔約束輸出 |
|------|

### 知識圖譜 + LLM

| GraphRAG: 不是檢索文檔——檢索知識圖譜——關係更準確 |
|------|
| LLM可以從文本自動構建知識圖譜——從非結構化到結構化 |

### 相關

- [[05-Knowledge-Graph-知识图谱|05 知識圖譜]]
- [[06-Linked-Data-关联数据|06 關聯數據]]
- [[KOS|Wiki: KOS]]
| 應用 | 技術 | 效果 |
|------|------|------|
| 自動分類 | ML分類器 | 批量標註主題、標籤 |
| 實體抽取 | NLP命名實體識別 | 從文本提取人、地、組織 |
| 聚類 | 無監督學習 | 發現隱含分類 |
| 推薦 | 協同過濾+內容推薦 | 發現相關知識 |
| RAG | 檢索增強生成 | 精確知識問答 |

**LLM與RAG：**
- 純LLM: 知識有截止日期，可能幻覺
- RAG: 先檢索相關文檔，再生成回答——用真實文檔約束輸出
- GraphRAG: 檢索知識圖譜而非文檔——關係更精確

**共生關係：**
更好的KOS → 更好的AI訓練數據 → 更智能的系統
更好的AI → 更自動化的KOS維護 → 更全面的知識庫


## 相關筆記

- [[分類法概述]]
- [[UDC 概述|UDC 分類體系]]

## 參考

- 源文件：3 Resources\000-Knowledge\raw\articles\025-Knowledge-Organization\08-AI-and-Knowledge-Systems.md

