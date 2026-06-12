---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# Transformer 架構

> 源：Transformer 架構.md — 編譯整理。

## 核心創新

Transformer（Vaswani et al., 2017）的核心是注意力機制（Attention），它替代了 RNN 的循環結構，實現了：
- 並行計算 — 不再需要序列依賴
- 長距離依賴 — 任意兩個位置的 token 可以直接交互
- 可擴展性 — 深度和寬度都可堆疊

### 關鍵組件

### 注意力機制

- Q (Query) — 當前 token 的查詢向量
- K (Key) — 各 token 的鍵向量
- V (Value) — 各 token 的值向量
- √d_k — 縮放因子，防止 softmax 飽和

## 相關筆記

-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/LLM 基础]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/知识组织与大模型|知識組織與 LLM]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/提示工程]]]

## 參考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer 架構.md
