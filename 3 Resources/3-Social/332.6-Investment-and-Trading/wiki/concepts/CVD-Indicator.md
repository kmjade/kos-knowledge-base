---
aliases:
  - CVD
  - Cumulative Volume Delta
  - 累積成交量差值
  - 成交量差
created: 2026-06-14
updated: 2026-09-20
type: concept
topic: 技術分析
status: draft
udc: "336.76"
tags:
  - udc/330
  - indicator/orderflow
---

# CVD 指標 CVD Indicator (Cumulative Volume Delta)

## 定義

CVD（累積成交量差值）是衡量買賣壓力的**訂單流指標**，通過逐根 K 線的成交量方向累積來判斷市場中主動買入與主動賣出的力量對比。不同於傳統成交量指標（只看總量），CVD 追蹤**資金流向的方向**。

```
CVD = 累積 (買方成交量 − 賣方成交量)
```

> **核心假設**：MQL4 環境中無真實 Bid/Ask Volume，以價格方向代理判斷：
> - 陽線 (Close > Open) → 買方主動 → Delta = +Volume
> - 陰線 (Close < Open) → 賣方主動 → Delta = −Volume
> - 平盤 → 中性 → Delta = 0

---

## 計算公式

### 單根 Delta

**簡單模式（預設）：**
```
Delta(i) = Volume(i)    當 Close(i) > Open(i)
Delta(i) = −Volume(i)   當 Close(i) < Open(i)
Delta(i) = 0            當 Close(i) = Open(i)
```

**精度模式（範圍加權）：**
```
Delta(i) = Volume(i) × (Close(i) − Open(i)) / (High(i) − Low(i))
```

### 累積 CVD

```
CVD(i) = Σₖ₌₀ⁱ Delta(k)
```

### 歸一化

```
CVD_Norm(i) = (CVD(i) − Min(CVD, N)) / (Max(CVD, N) − Min(CVD, N)) × 100 − 50
範圍：[-50, +50]，0 = 中性
```

---

## 交易信號

| 信號 | 條件 | 含義 |
|------|------|------|
| **CVD 上升 + 價格上升** | CVD ↑ & Price ↑ | 🟢 趨勢健康，多頭確認 |
| **CVD 下降 + 價格下降** | CVD ↓ & Price ↓ | 🔴 趨勢健康，空頭確認 |
| **頂背離** | Price ↑ High, CVD ↓ Lower High | 🔴 買方衰竭，反轉信號 |
| **底背離** | Price ↓ Low, CVD ↑ Higher Low | 🟢 賣方衰竭，反轉信號 |
| **CVD 上穿均線** | CVD > MA(CVD) 且 CVD > 0 | 🟢 動能轉多 |
| **CVD 下穿均線** | CVD < MA(CVD) 且 CVD < 0 | 🔴 動能轉空 |
| **CVD 增速放緩** | CVD 持續上升但斜率變緩 | ⚠️ 趨勢減速，注意反轉 |

---

## 背離 Divergence

CVD 背離是**最可靠的訂單流信號**之一：

```
頂背離（看跌）：
  價格：Higher High    ↑
  CVD： Lower High     ↓
  → 價格上漲但買方量能減弱 → 即將反轉

底背離（看漲）：
  價格：Lower Low      ↓
  CVD： Higher Low     ↑
  → 價格下跌但賣方量能減弱 → 即將反轉
```

### 背離強度評級

| 強度 | 條件 | 勝率估計 |
|:----:|------|:--------:|
| ⭐⭐⭐ | 多時間框架同時背離 | ~75% |
| ⭐⭐ | 單框架背離 + CVD 趨勢線突破 | ~65% |
| ⭐ | 單框架背離 | ~55% |

---

## CVD vs 傳統成交量指標

| 特徵 | CVD | OBV | 普通 Volume |
|:----|:---|:---|:----------|
| 方向性 | ✅ 區分買賣 | ✅ 價格方向分配 | ❌ 僅總量 |
| 累積性 | ✅ 累積差值 | ✅ 累積 | ❌ 單根 |
| 背離檢測 | ✅ 強 | ✅ 一般 | ❌ 無法 |
| MQL4 適用 | ✅ Tick Volume | ✅ Tick Volume | ✅ Tick Volume |
| 真實訂單流 | ❌ Tick 近似 | ❌ Tick 近似 | ❌ 僅計數 |

---

## MQL4 實現

### 內置函數（無，需自定義）

MQL4 無內建 CVD 函數，需自行實現。以下是核心計算邏輯：

```cpp
// 單根 Delta 計算
double CalcDelta(double open, double close, long volume, int mode)
{
   if (volume <= 0) return 0.0;
   
   if (mode == 0) // 簡單模式
   {
      if (close > open)  return (double)volume;
      if (close < open)  return -(double)volume;
      return 0.0;
   }
   else // 精度模式
   {
      double range = high - low;
      if (range <= 0.0) return 0.0;
      double ratio = (close - open) / range;
      return (double)volume * fmax(-1.0, fmin(1.0, ratio));
   }
}

// 累積 CVD
// 在 OnCalculate 中逐根累積
double cumulativeDelta = 0.0;
for (int i = 0; i < ratesTotal; i++)
{
   double delta = CalcDelta(open[i], close[i], tickVolume[i], 0);
   cumulativeDelta += delta;
   cvdBuffer[i] = cumulativeDelta;
}
```

### 完整實現參考

完整 **設計稿**（`CCVD` 類 + `.mq4` 圖表指標源碼）位於**內部提案筆記**（內部專案，2026-09-20 審核後歸檔；不隨本庫公開）。

> ⚠️ **狀態更正（2026-09-20）：** 該設計稿為**未實現、未編譯**狀態 —— 審核確認全庫無任何 CVD 實作檔案（`find -iname "*cvd*"` 零命中），
> 且設計稿內含 **3 處硬編譯錯誤 + 9 處邏輯缺陷**（其中歸一化 `GetNormalized` 與趨勢強度 `GetStrength` 兩個 API，
> 因 `UpdateRange` 讀取尚未賦值的欄位而**恆返回 0**，完全失效）。
> **復活前須先修正**，缺陷清單見歸檔頁的「歸檔」區塊。原文記「完整實現」與實測不符。

---

## 參數建議

| 週期 | CVD 均線 | 背離週期 | 用途 |
|:----:|:--------:|:--------:|------|
| M15 | 7 | 7 | 短線交易 |
| 1H | 14 | 14 | 日內交易 |
| 4H | 21 | 21 | 波段交易 |
| D1 | 34 | 34 | 趨勢交易 |

---

## 限制與注意事項

1. **Tick Volume ≠ Real Volume** — MT4 的 Volume 是 Tick 次數，非真實合約成交量。CVD 反映的是「交易頻率方向」，適合做**相對比較**而非絕對分析。
2. **外匯市場特殊性** — 外匯為分散式市場，無中心交易所，Tick Volume 的代表性低於期貨。
3. **跳空處理** — 週末/假期後 Tick Volume 為 0，CVD 值需維持或重設。
4. **多品種不可比** — EURUSD 的 Tick 數遠多於 XAUUSD，CVD 值量級不同，跨品種應使用歸一化值。

---

## MQL4 環境限制（設計約束）

> 來源：**內部提案筆記** §2 非目標（內部專案，已歸檔；不隨本庫公開）。2026-09-20 審核認定此三條判斷準確，於提案歸檔前抽取至此。

| 約束 | 說明 |
|:---|:---|
| **無 Bid/Ask Volume API** | MQL4 不暴露主動買賣量，**無法**精確計算真實訂單流 → CVD 只能作方向性估計 |
| **無真實成交量** | MQL4 僅有 Tick Volume（Tick 次數），非期貨／股票級真實成交量 |
| **回測 Tick 級不可靠** | Strategy Tester 中 `RefreshRates()` 行為與實盤不同，**Tick 級 CVD 不宜作為回測依據** |

---

## 多時間框架用法

> 來源：同上提案 §5.3。原頁面僅有單週期參數建議，缺多週期分工。

| 層級 | 建議週期 | 用途 |
|:---|:---|:---|
| 方向過濾 | 1H / 4H | 計算 CVD 判斷主導方向 |
| 入場執行 | M15 | 在方向約束下執行交易 |

> ⚠️ **待商榷的既有信號定義（2026-09-20 審核發現）：** 上方「交易信號」表中
> 「CVD 上穿均線」的條件含 **`且 CVD > 0`** —— 此部分存在問題：CVD 自序列起點累加，
> **符號取決於起點選擇而非市場方向**，不具絕對意義。原文保留以存史，採用前請先重新論證。

---

## 相關概念

- [[OBV-Indicator]] — 類似累積邏輯，但 CVD 更靈敏
- [[Volume-Analysis]] — 成交量分析的總體框架
- [[Order-Flow]] — 訂單流交易方法論
- [[MACD-Indicator]] — 同樣使用背離概念
- [[Technical-Analysis]] — 技術分析總論

## 相關實體

- 自有 EA 框架 — CVD **尚未實現**，僅有設計稿（2026-09-20 審核更正；原記「已在其中實現」與實測不符）
- [[MT4]] — CVD 運行平台

## Sources

- [[source-投資與交易-KB]]
