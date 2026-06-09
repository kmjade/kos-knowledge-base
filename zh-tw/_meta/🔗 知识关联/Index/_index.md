---
created: 2026-06-06
updated: 2026-06-09
udc: 001.8:025.4
tags: [index, moc, kos, navigation]
---

# 總索引 · Master Index

> **PARA + UDC + LLM-Wiki 三維導航**
> Dataview 自動維護 Projects 和 People；其餘為精簡入口頁。

---

## 按 PARA 分類

### 1 — Projects（專案）

```dataview
TABLE file.link as 專案, status
FROM "zh-tw/1 Projects"
WHERE contains(file.path, "zh-tw/1 Projects")
SORT status ASC
```

| 專案 | 狀態 |
|:-----|:----:|
| [[zh-tw/4 Archives/26-04 UDC整合實施/26-04 UDC整合實施\|26-04 UDC整合實施]] | archived |
| [[zh-tw/4 Archives/26-07 Life+AI 融合/26-07 Life+AI 融合\|26-07 Life+AI 融合]] | archived |
| [[zh-tw/4 Archives/26-08 個人財務系統/26-08 個人財務系統\|26-08 個人財務系統]] | archived |
| [[zh-tw/4 Archives/26-09 企業管理/26-09 企業管理\|26-09 企業管理]] | archived |
| [[zh-tw/4 Archives/26-10 學習管理/26-10 學習管理\|26-10 學習管理]] | archived |

### 2 — Areas（領域入口）

| 領域 | 子模組 |
|:-----|:-------|
| [[zh-tw/2 Areas/生活/生活\|生活]] | 個人財務 |
| [[zh-tw/2 Areas/學習/學習\|學習]] | 學習管理 |
| [[zh-tw/2 Areas/工作/工作\|工作]] | 企業管理 |
| [[zh-tw/2 Areas/知識組織/知識組織\|知識組織]] | KOS / UDC |

### 3 — Resources（資源入口）

| 子庫 | 入口頁 |
|:-----|:-------|
| LLM-Wiki 概念 | [[zh-tw/3 Resources/000-Knowledge/wiki/_index\|_index]] |
| PARA 方法 | [[zh-tw/3 Resources/PARA/PARA 方法概覽\|PARA 方法概覽]] |
| UDC 分類 | [[zh-tw/3 Resources/UDC/UDC 概述\|UDC 概述]] |
| 人物 | 見下方 People 列表 |

#### People（人物）

```dataview
TABLE file.link as 人物, udc, tags
FROM "zh-tw/3 Resources/People/wiki/entities"
SORT tags ASC
```

---

## 快速跳轉

| 目標 | 連結 |
|:-----|:------|
| 🏔 首頁 | [[zh-tw/Home.md\|Home]] |
| 📨 Inbox | [[zh-tw/0 Inbox/README\|收件箱]] |

---

> **三語言索引：**
> - CN → [[_meta/🔗 知識關聯/Index/_index-zh-cn\|索引]]
> - EN → [[en/_meta/Knowledge-Links/Index/_index-en\|Index]]
> - TW → [[zh-tw/_meta/🔗 知識關聯/Index/_index\|索引]]