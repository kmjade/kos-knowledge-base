---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8:519.6
tags: [resource, llm, transformer, deep-learning]
aliases:
  - Transformer 架構
---

# Transformer 架構

> **資源：** 現代 LLM 的基石——Transformer 架構詳解。
> UDC: 004.8:519.6（AI + 計算數學/神經網路）

---

## 核心創新

Transformer（Vaswani et al., 2017）的核心是**注意力機制（Attention）**，它替代了 RNN 的循環結構，實現了：

- **平行計算** — 不再需要序列依賴
- **長距離依賴** — 任意兩個位置的 token 可以直接互動
- **可擴展性** — 深度和寬度都可堆疊

## 核心內容

### 核心創新

Transformer（Vaswani et al., 2017）的核心是注意力機制（Attention），它替代了 RNN 的循環結構，實現了：
- 並行計算 — 不再需要序列依賴
- 長距離依賴 — 任意兩個位置的 token 可以直接交互
- 可擴展性 — 深度和寬度都可堆疊

### 基本架構

### 關鍵組件

### 注意力機制

- Q (Query) — 當前 token 的查詢向量
- K (Key) — 各 token 的鍵向量
- V (Value) — 各 token 的值向量
- √d_k — 縮放因子，防止 softmax 飽和


## 基本架構

```
輸入序列 → [Token Embedding + Positional Encoding]
              ↓
       [ Multi-Head Self-Attention ]
              ↓
       [ Add & LayerNorm ]
              ↓
       [ Feed Forward (MLP) ]
              ↓
       [ Add & LayerNorm ]
              ↓
             ×N 層
              ↓
       [輸出：序列中各位置的表徵]
```

### 關鍵組件

| 組件 | 作用 |
|------|------|
| Token Embedding | 將文字轉換為向量 |
| Positional Encoding | 注入位置資訊 |
| Multi-Head Attention | 同時關注不同子空間 |
| Feed-Forward Network | 非線性變換 |
| LayerNorm | 穩定訓練 |
| Residual Connection | 緩解梯度消失 |

## 注意力機制

```
Attention(Q, K, V) = softmax(Q × K^T / √d_k) × V
```

- **Q** (Query) — 當前 token 的查詢向量
- **K** (Key) — 各 token 的鍵向量
- **V** (Value) — 各 token 的值向量
- **√d_k** — 縮放因子，防止 softmax 飽和

## 變體演進

| 架構 | 代表模型 | 特點 |
|------|---------|------|
| Encoder-only | BERT | 理解任務 |
| Decoder-only | GPT 系列 | 生成任務 |
| Encoder-Decoder | T5, BART | 序列轉換 |
| MoE | Mixtral 8x7B | 稀疏激活 |
| Mamba | Mamba | 狀態空間模型替代注意力 |

## 相關筆記

- [[zh-tw/3 Resources/LLM-Wiki/LLM 基礎|LLM 基礎]]
- [[zh-tw/3 Resources/LLM-Wiki/訓練與微調|訓練與微調]]
