---
created: 2026-06-06
updated: 2026-06-06
udc: 025.4:004
tags: [resource, udc, digital, knowledge-management]
---

# UDC 與數位知識管理

> **資源：** UDC 分類法在數位環境和個人知識管理中的應用。

---

## 核心內容

### 數字時代的 UDC

UDC 作為百年分類體系，在數字時代面臨新的機遇與挑戰：

#### 優勢
- **學科全覆蓋** — 不需要像標籤那樣逐個定義
- **層級可擴展** — 從粗到細，按需展開
- **組合表達** — `:`符號實現多維度分類
- **語言無關** — 數字標識，便於多語言切換

#### 挑戰
- **學習曲線** — 需要了解分類表
- **粒度過粗** — 對前沿領域（如 LLM）覆蓋有限
- **維護成本** — 分類映射需要持續更新

### 在 Obsidian 中的應用

#### 方法一：frontmatter 欄位

```yaml
---
udc: 004.8:519.6
tags: [ai, transformer]
---
```

在 Obsidian 中搜索 `udc:004.8` 即可找到所有 AI 相關筆記。

#### 方法二：Dataview 查詢

```dataview
TABLE udc, tags
FROM "3 Resources"
WHERE contains(udc, "004.8")
SORT file.name
```

### 與 PARA 的集成

兩者提供**正交維度**：PARA 回答"筆記處於哪個生命周期"，UDC 回答"筆記屬於哪個學科"。


## 數位時代的 UDC

UDC 作為百年分類體系，在數位時代面臨新的機遇與挑戰：

### 優勢
- **學科全覆蓋** — 不需要像標籤那樣逐個定義
- **層級可擴展** — 從粗到細，按需展開
- **組合表達** — `:` 符號實現多維度分類
- **語言無關** — 數字標識，便於多語言切換

### 挑戰
- **學習曲線** — 需要了解分類表
- **粒度和前緣** — 對前緣領域（如 LLM）覆蓋有限
- **維護成本** — 分類映射需要持續更新

## 在 Obsidian 中的應用

### 方法一：frontmatter 欄位
```yaml
---
udc: 004.8:519.6
tags: [ai, transformer]
---
```
透過 Obsidian 搜尋 `udc:004.8` 即可找到所有 AI 相關筆記。

### 方法二：結合 Dataview 查詢
````markdown
```dataview
TABLE udc, tags
FROM "zh-tw/3 Resources"
WHERE contains(udc, "004.8")
SORT file.name
```
````

## 與 PARA 的結合

```
┌─────────────────────────────────┐
│         KOS_LLM-Wiki            │
├──────────┬──────────────────────┤
│  PARA    │  UDC                 │
│──────────┼──────────────────────┤
│ 操作維度  │  學科維度            │
│ 上下文    │  分類                │
│ 樹狀結構  │  網狀分類            │
│ 資料夾    │  frontmatter + 標籤  │
└──────────┴──────────────────────┘
```

兩者提供**正交的維度**：PARA 回答「這個筆記在哪個生命週期」，UDC 回答「這個筆記屬於哪個學科」。

## 相關筆記

- [[zh-tw/3 Resources/UDC/UDC 概述|UDC 概述]]
- [[zh-tw/3 Resources/UDC/UDC 分類索引|UDC 分類索引]]
- [[zh-tw/3 Resources/PARA/PARA 與知識管理|PARA 與知識管理]]
