---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:004.8
tags: [project, codex-logs, requirements, kos]
---

# Codex-logs 需求說明書

> **LifeOS × LLM-Wiki 融合系統 → KOS_LLM-Wiki 本地化適配**
> ——基於 Codex 的 AI 操作日誌系統需求定義

---

## 1. 背景與定位

### 1.1 來源

本需求源自「LifeOS × LLM-Wiki 融合系統」（一隻阿木木, 2026），該設計提出了完整的 `AI-Log/` 日誌體系。KOS_LLM-Wiki 將其本地化為 `_meta/system/logs/` 目錄，適配 Codex 作為 AI Agent 的執行環境。

### 1.2 為什麼需要日誌系統

| 需求 | 說明 |
|------|------|
| 審計追蹤 | 記錄 Agent 每次操作，形成可追溯的歷史 |
| 上下文恢復 | 新會話可讀取最近操作摘要，保持連續性 |
| 效能度量 | 統計編譯、分揀等操作的耗時與產出 |
| 故障排查 | Agent 操作出錯時，日誌提供診斷依據 |
| 知識溯源 | wiki/ 中的每處更新都能追溯到對應的日誌條目 |
| 行為分析 | 長期日誌揭示 Agent 使用模式和知識增長趨勢 |

### 1.3 設計原則

- **追加不覆蓋**：日誌只追加，永不改寫歷史記錄
- **結構化 + 自然語言**：日誌同時包含機器可解析的 frontmatter 和人類可讀的敘述
- **最少侵入**：日誌操作不應成為 Agent 工作的瓶頸
- **跨語言同步**：日誌內容本身以簡體中文為主（根目錄），但目錄結構三語言鏡像

---

## 2. 目錄結構

```
_meta/system/logs/
├── _index.md                # 日誌系統總索引
├── sessions/                # 會話日誌
│   ├── 2026/
│   │   ├── 2026-06-06.md    # 按日匯總的 Agent 會話記錄
│   │   └── ...
│   └── README.md            # 會話日誌格式說明
├── operations/              # 操作日誌（按操作類型）
│   ├── triage.md            # 分揀操作日誌
│   ├── compile.md           # 編譯操作日誌
│   └── maintenance.md       # 維護操作日誌（lint、清理等）
├── tasks/                   # 任務追蹤日誌
│   └── 2026/
│       └── 06.md            # 月度任務執行記錄
├── reports/                 # 報告與統計
│   ├── YYYY-WW.md            # 週報
│   └── YYYY-MM.md           # 月報
└── archive/                 # 歸檔日誌（超過 6 個月的舊日誌）
    └── ...
```

### 2.1 目錄職責矩陣

| 路徑 | 內容 | 寫入者 | 讀取者 |
|------|------|--------|--------|
| `sessions/` | Agent 每次會話的關鍵操作摘要 | Codex | Codex（會話恢復）、人類 |
| `operations/triage.md` | 分揀操作記錄 | Codex | Codex、人類（審計） |
| `operations/compile.md` | Wiki 編譯操作記錄 | Codex | Codex、人類（審計） |
| `operations/maintenance.md` | 系統維護記錄 | Codex | Codex |
| `tasks/` | 跨會話任務追蹤 | Codex | Codex |
| `reports/` | 週期統計分析 | Codex（自動） | 人類 |

---

## 3. 資料模型

### 3.1 會話日誌（sessions/YYYY/YYYY-MM-DD.md）

```yaml
---
created: 2026-06-06T18:30:00+08:00
type: session-log
agent: codex
session-id: 20260606-1830
duration_min: 45
operations:
  - type: triage
    count: 3
  - type: compile
    count: 1
    topics: [llm-wiki]
  - type: edit
    count: 5
files_modified: 8
files_created: 2
tokens_estimate: 15000
summary: "處理了 3 個 Inbox 文件，編譯了 LLM-Wiki 子庫，更新了索引"
---
```

### 3.2 操作日誌條目（operations/*.md）

```markdown
## 2026-06-06T18:30 — [操作類型]

- **操作**：[簡短描述]
- **輸入**：[源檔案或資料]
- **輸出**：[產出的文件列表]
- **耗時**：N 分鐘
- **狀態**：[success|partial|failed]
- **備註**：[異常、矛盾、待確認事項]
```

### 3.3 任務追蹤（tasks/YYYY/MM.md）

```
- [x] 完成 LLM-Wiki 子庫首次編譯 📅 2026-06-05 ✅ 2026-06-05
- [ ] 搭建 _logs 日誌系統 📅 2026-06-10
- [/] 生成 2026-W23 週報 🛫 2026-06-06
```

### 3.4 報告（reports/*.md）

```markdown
---
created: 2026-06-06
type: report
period: weekly
week: 2026-W23
---

# Week 23 日誌報告

## 操作統計
| 操作類型 | 次數 | 涉及文件 |
|----------|------|----------|
| 分揀     | 5    | 8        |
| 編譯     | 2    | 12       |
| 編輯     | 15   | 20       |
| 維護     | 1    | 3        |

## 知識增長
- 新增 Wiki 頁面：5
- 更新 Wiki 頁面：3
- 新增原始資料：4

## 待辦事項
- [ ] 無待辦
```

---

## 4. UDC 分類映射

| UDC | 類目 | 對應日誌類型 |
|-----|------|-------------|
| 001.8:004.8 | 知識組織與 AI 日誌 | 系統總日誌、會話日誌 |
| 004.8:005.1 | AI 操作審計 | 操作日誌（triage/compile） |
| 004.8:681.5 | AI 系統維護 | 維護日誌、任務追蹤 |
| 001.8:311 | 知識管理統計 | 報告、統計分析 |

所有 _logs 下的文件使用 `001.8:004.8` 作為預設 UDC，具體子類按上表細分。

---

## 5. 標籤規範

| 標籤 | 用途 |
|------|------|
| `#codex-log` | 所有日誌文件的通用標籤 |
| `#codex-log/session` | 會話日誌 |
| `#codex-log/operation` | 操作日誌 |
| `#codex-log/task` | 任務追蹤 |
| `#codex-log/report` | 報告 |
| `#codex-log/archive` | 歸檔日誌 |

---

## 6. 操作流程規範

### 6.1 會話開始

當 Codex 被調用時：

1. 讀取 `_meta/system/logs/sessions/YYYY/` 最近 3 條會話日誌
2. 讀取 `_meta/system/logs/operations/maintenance.md` 末尾 10 條（系統狀態）
3. 檢查 `_meta/system/logs/tasks/` 中的未完成任務
4. 將本次會話 ID 記錄到上下文

### 6.2 會話結束

Codex 退出或用戶終止時：

1. 在 `_meta/system/logs/sessions/YYYY/YYYY-MM-DD.md` 追加新的會話區塊
2. 更新 `_meta/system/logs/operations/` 中對應的操作日誌
3. 如生成了報告資料，更新 `_meta/system/logs/reports/`

### 6.3 日誌寫入約束

- 日誌追加視為低風險操作，不觸發二次確認
- 日誌內容應簡潔（每操作條目不超過 200 字敘述）
- 涉及敏感資訊（如文件路徑含私密內容）時，記錄路徑摘要而非完整路徑
- 不得在日誌中包含密碼、金鑰、Token 等憑證資訊

---

## 7. 與現有系統的整合

### 7.1 與 _索引.md 的聯動

在 `_索引.md` 的 PARA 分類表中，05 — Logs 段落已預留。該段落應保持為目錄佔位，不自動索引日誌文件，避免索引文件因日誌頻繁追加而產生大量 diff。

### 7.2 與 3 Resources 的聯動

各 Wiki 子庫中的 `wiki/log.md` 是技術編譯日誌，_logs 是 Agent 操作日誌，二者關係：

```
3 Resources/[topic]/wiki/log.md  ← 該子庫的編譯詳情
_meta/system/logs/operations/compile.md     ← 全域編譯操作彙總（引用子庫日誌）
```

子庫日誌記錄「什麼內容被編譯」，全域日誌記錄「編譯操作本身」。

### 7.3 與 AGENTS.md 的聯動

`AGENTS.md` 中已記錄 `_meta/system/logs/` 目錄定義。後續如需增加日誌規範，應同步更新 AGENTS.md 中的相關章節。

---

## 8. 生命週期與歸檔

| 日誌類型 | 保留期 | 歸檔策略 |
|----------|--------|----------|
| 會話日誌 | 永久 | 按年劃分子目錄 |
| 操作日誌 | 永久 | 追加式，不刪除 |
| 任務追蹤 | 12 個月 | 年度歸檔至 `archive/` |
| 報告 | 24 個月 | 年度歸檔至 `archive/` |

歸檔後的文件在 frontmatter 中添加 `archived: true` 字段。

---

## 9. 實施路線圖

| 階段 | 內容 | 前置條件 |
|------|------|----------|
| **P0 — 基礎設施** | 創建 _logs 目錄骨架、_index.md | 無 |
| **P1 — 會話日誌** | 實現 sessions/ 的讀寫規範 | P0 |
| **P2 — 操作日誌** | 實現 operations/ 的讀寫規範 | P1 |
| **P3 — 任務追蹤** | 實現 tasks/ 的讀寫規範 | P0 |
| **P4 — 報告生成** | 實現 reports/ 的自動生成 | P2 |
| **P5 — 索引同步** | 完善與 _索引.md 的聯動 | P1 |
| **P6 — 歸檔機制** | 實現 archive/ 的移動邏輯 | P4 |

---

## 10. 附錄：術語表

| 術語 | 定義 |
|------|------|
| **Codex** | OpenAI 的 Coding Agent（本系統使用的 AI Agent） |
| **Session** | 一次 Codex 調用（從啟動到結束的完整互動） |
| **Triage** | 從 Inbox 到目標目錄的智慧分揀 |
| **Compile** | 從 raw/ 原始資料生成 wiki/ 知識頁面的過程 |
| **LifeOS** | 基於 PARA 方法的 Obsidian 個人管理系統 |
| **LLM-Wiki** | 由 LLM 自動編譯維護的個人知識 Wiki |
| **KOS** | Knowledge Organization System（知識組織系統） |
| **UDC** | 國際十進分類法（Universal Decimal Classification） |


