---
created: 2026-06-06
updated: 2026-06-06
udc: 004.4
tags: [c4, architecture, diagram, software-engineering]
---

# C4 模型範例圖 — KOS_LLM-Wiki

> **參考架構：** PARA × LLM-Wiki 融合系統 + LifeOS 設計哲學
> **工具：** Mermaid.js（Markdown 內聯渲染）

---

## L1 — Context 系統上下文

```mermaid
C4Context
  title System Context — KOS_LLM-Wiki

  Person(user, "知識工作者", "筆記的建立者與消費者")

  System_Boundary(kos, "KOS_LLM-Wiki 知識管理系統") {
    System(vault, "Obsidian Vault", "Markdown 筆記倉庫")
    System(codex, "Codex AI Agent", "自動分揀、編譯、審計")
  }

  System_Ext(git, "Git 版本控制", "變更追溯與多裝置同步")
  System_Ext(editor, "Obsidian 編輯器", "筆記編寫與圖譜瀏覽")

  Rel(user, vault, "讀寫筆記")
  Rel(user, codex, "發出操作指令")
  Rel(codex, vault, "自動維護操作")
  Rel(codex, git, "提交變更")
  Rel(vault, editor, "渲染與編輯")
  Rel(vault, git, "儲存歷史版本")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L1 說明

| 元素 | 角色 |
|------|------|
| **知識工作者** | 系統的核心使用者。建立筆記、發出指令、消費知識 |
| **Obsidian Vault** | Markdown 筆記倉庫。儲存所有內容與元資料 |
| **Codex AI Agent** | 自動化維護引擎。執行分揀、編譯、日誌記錄 |
| **Git** | 版本控制後端。確保變更可追溯、可回滾 |
| **Obsidian 編輯器** | 前端工具。提供圖譜檢視、雙向連結、模板等功能 |

---

## L2 — Container 容器視圖

```mermaid
C4Container
  title Container Diagram — KOS_LLM-Wiki 內部容器

  Person(user, "知識工作者")

  System_Boundary(vault, "Obsidian Vault") {
    Container(para, "PARA 目錄結構", "檔案系統", "0 Inbox → 1 Projects → 2 Areas → 3 Resources → 4 Archives")
    Container(meta, "元資料層", "YAML frontmatter", "UDC 分類號 + 標籤 + 建立/更新日期")
    Container(index, "索引系統", "Markdown 表格", "PARA 維度表 + UDC 維度表 + 標籤組")
    Container(templates, "模板系統", "Markdown 模板", "專案/領域/資源/概念/每日/ADR")
    Container(logs, "審計層", "Markdown 日誌", "會話日誌 + 操作日誌 + 任務追蹤")
  }

  System_Ext(codex, "Codex AI Agent")
  System_Ext(obsidian, "Obsidian 編輯器")

  Rel(user, para, "瀏覽與組織筆記")
  Rel(user, meta, "填寫 UDC 與標籤")
  Rel(user, index, "查閱與導航")
  Rel(user, codex, "發出操作指令")
  Rel(codex, para, "分揀 Inbox、建立筆記")
  Rel(codex, meta, "維護 frontmatter")
  Rel(codex, index, "同步更新索引")
  Rel(codex, logs, "寫入操作日誌")
  Rel(templates, meta, "提供 frontmatter 骨架")
  Rel(index, para, "彙總筆記列表")
  Rel(logs, para, "記錄操作對象")
  Rel(user, obsidian, "編輯筆記")
  Rel(obsidian, para, "讀取/寫入檔案")
  Rel(obsidian, meta, "渲染 frontmatter")
```

### L2 說明

| 容器 | 技術實現 | 職責 |
|------|----------|------|
| **PARA 目錄結構** | 檔案系統目錄 | 按 Inbox/Projects/Areas/Resources/Archives 組織筆記 |
| **元資料層** | YAML frontmatter | 每條筆記的 UDC 分類號、標籤、時間戳 |
| **索引系統** | Markdown 表格 | 總索引（PARA 表 + UDC 表 + 標籤組） |
| **模板系統** | Templater 模板 | 新建筆記時的標準化骨架 |
| **審計層** | Markdown 日誌 | Codex 操作的全鏈路審計追蹤 |

---

## L3 — Component 組件視圖：PARA 目錄結構

```mermaid
C4Component
  title Component Diagram — PARA Directory Structure

  Container_Boundary(para, "PARA 目錄結構") {
    Component(inbox, "0 Inbox", "收件匣", "待處理的臨時筆記與外部剪藏")
    Component(projects, "1 Projects", "專案", "有截止日期的活躍專案")
    Component(areas, "2 Areas", "領域", "持續關注的長期主題")
    Component(resources, "3 Resources", "資源", "主題資料與參考資源")
    Component(archives, "4 Archives", "歸檔", "非活躍內容")
    Component(daily, "Periodic", "週期筆記", "年/月/日分層的時間軸")
  }

  Component(agent, "Codex Agent", "自動化引擎")
  Component(triage, "分揀流程", "Inbox → 目標目錄")
  Component(compile, "編譯流程", "編譯 wiki 頁面")

  Rel(inbox, triage, "被處理")
  Rel(triage, projects, "路由至", "任務類內容")
  Rel(triage, areas, "路由至", "領域類內容")
  Rel(triage, resources, "路由至", "參考類內容")
  Rel(triage, daily, "路由至", "閃念類內容")
  Rel(agent, triage, "觸發")
  Rel(agent, compile, "觸發")
  Rel(compile, resources, "寫入 wiki 頁面")
  Rel(projects, archives, "完成後歸檔")
  Rel(areas, archives, "不再關注後歸檔")
  Rel(resources, archives, "過期後歸檔")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L3 說明

| 組件 | 生命週期 | 操作者 |
|------|----------|--------|
| **0 Inbox** | 捕獲 → 處理 | 人類寫入，Codex 分揀 |
| **1 Projects** | 執行 → 歸檔 | 人類 + Codex |
| **2 Areas** | 維護 → 歸檔 | 人類 + Codex |
| **3 Resources** | 參考 → 歸檔 | 人類寫入 raw，Codex 編譯 wiki |
| **4 Archives** | 休眠 | Codex 自動歸檔 |
| **Periodic** | 日記 | 人類 + Codex |

---

## L4 — Code 層級（關鍵模式）

```mermaid
flowchart LR
  subgraph ADR[ADR 決策流]
    A[問題提出] --> B[調研可選方案]
    B --> C[評估權衡]
    C --> D{決策}
    D -->|Accepted| E[執行]
    D -->|Deprecated| F[標記棄用]
    E --> G[記錄後果]
    G --> H[定期評審]
    H -->|新資訊出現| D
  end

  subgraph UDC[UDC 分類流]
    I[新建筆記] --> J[確定 UDC 主類]
    J --> K{複合主題？}
    K -->|是| L[使用 : 組合]
    K -->|否| M[單類號]
    L --> N[填寫 frontmatter]
    M --> N
    N --> O[更新索引]
  end

  subgraph LOG[日誌審計流]
    P[Codex 操作] --> Q{操作類型}
    Q -->|分揀| R[triage.md]
    Q -->|編譯| S[compile.md]
    Q -->|編輯| T[會話日誌]
    Q -->|維護| U[maintenance.md]
    R --> V[追加記錄]
    S --> V
    T --> V
    U --> V
  end
```

---

## 圖例與使用說明

| C4 層 | 視圖 | 讀者 | 檔案位置 |
|-------|------|------|----------|
| L1 Context | 系統全景 | 所有參與者 | `_meta/assets/c4-context.md` |
| L2 Container | 技術容器 | 架構師、開發者 | `_meta/assets/c4-container.md` |
| L3 Component | 組件細節 | 開發者 | `_meta/assets/c4-component.md` |
| L4 Code | 關鍵模式 | 開發者 | `_meta/assets/c4-patterns.md` |

### Mermaid 渲染要求

本系統 C4 圖使用 Mermaid.js 語法。Obsidian 中需要安裝 **Mermaid** 外掛或啟用 **Obsidian 原生 Mermaid** 支援（v1.8+ 內建）。若使用 Obsidian Publish，Mermaid 圖自動渲染。

---

> **維護者：** 這些 C4 圖應與 `zh-tw/_meta/架構說明書.md` 同步更新。當系統架構發生變更時，更新對應層次的圖。


