---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# Transformer 架構詳解

> 源：Transformer-架構解讀.md — 編譯整理。

## 核心概念

Transformer 是 Google 在 2017 年提出的深度學習架構，核心創新是自注意力機制（Self-Attention）。

### 主要組件

### 多頭注意力
Multi-Head Attention 允許模型同時關注不同位置的表示子空間。
### 前饋網路
每個 Transformer Block 包含兩個前饋網路層，中間使用 ReLU 激活。
### 位置編碼
由於自注意力本身不具備位置感知能力，Transformer 使用正弦位置編碼注入位置資訊。

### 關鍵優勢

- 並行計算：不同於 RNN 的序列處理，Transformer 可並行訓練
- 長距離依賴：自注意力直接建模任意兩個位置的交互
- 可擴展性：增加層數和頭數可顯著提升能力

## 相關筆記

-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/LLM 基础]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/知识组织与大模型|知識組織與 LLM]]]
-[[zh-tw/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/提示工程]]]

## 參考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer-架構解讀.md
