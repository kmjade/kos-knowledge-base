---
title: "WIKI — Vault Entry Point"
created: 2026-06-12
updated: 2026-06-12
udc: 001.8
tags: [meta, entry, guide]
---

# KOS_LLM-Wiki — Vault Entry

> 請先閱讀此頁。它說明此知識庫的用途與使用方式。

## 這是什麼知識庫？

一個基於 Obsidian、由 AI 代理驅動的**知識組織系統**。它結合 PARA 方法、UDC 分類法與 LLM-Wiki 知識圖譜模式，支援三種語言（CN/EN/TW）。

## AI 代理快速入門

```
1. 閱讀此檔案 (WIKI.md) — 你正在這裡
2. 閱讀 [[../AGENTS.md|AGENTS.md]] 了解完整行為規範
3. 閱讀 [[_meta/hot.md]] 取得近期上下文
4. 執行 KOS-Status 檢查知識庫健康狀態
```

## 可用指令

| 指令 | 功能 |
| :--- | :--- |
| `KOS-Status` | 知識庫健康摘要 |
| `KOS-Triage [--mode <para&#124;lyt&#124;zettel&#124;generic>] [--file <path>]` | 處理收件匣 → 路由到目標目錄 |
| `KOS-Wiki-Compile [--mode <...>] [--file <path>]` | 編譯 raw → wiki 頁面 |
| `KOS-Research --topic "..." [--depth <quick&#124;standard&#124;deep>]` | 自主網路研究 |
| `KOS-Link [--path <dir>] [--fix]` | 健康檢查（7 層級） |
| `KOS-Query [quick&#124;standard&#124;deep] <question>` | 知識庫查詢 |
| `KOS-Project` | 建立/管理專案 |
| `KOS-Archive` | 歸檔已完成專案 |
| `Daily Open` / `Day-Review` | 每日筆記 / 回顧 |
| `KOS-Init [--status] [--fix]` | 初始化 / 健康檢查知識庫 |

## 知識庫結構

```
0 Inbox/          → 收件匣流水線 (1-input → 2-output → 3-outcome)
1 Projects/       → ITO 生命週期 (proposal → execution → completion → archive)
2 Areas/          → 人生領域 (學習/工作/生活)
3 Resources/      → 知識庫 (概念/實體/來源)
4 Archives/       → 冷儲存
_meta/            → 系統 (模板/腳本/日誌/AI/記憶)
Periodic/         → 每日/每週/每月筆記
en/ + zh-tw/      → 語言鏡像
```

## 方法論模式

此知識庫支援四種組織方法論（透過 `methodology` frontmatter 欄位設定）：

- `para` — 專案/領域/資源/歸檔（預設）
- `lyt` — MOC 導航 + Ace 原則
- `zettel` — 原子筆記 + Folgezettel + Hubs
- `generic` — 最小結構，標籤 + 連結

## 關鍵檔案

| 檔案 | 用途 |
| :--- | :--- |
| [[../AGENTS.md]] | AI 代理完整行為規範 |
| [[_meta/hot.md]] | 會話上下文快取 |
| [[../_meta/index/links/Index/_index-zh-cn.md]] | 主索引（CN） |
| `_meta/system/templates/modes/`（目錄） | 模式專用筆記模板（5 種模式） |
| [[../.codex/skills/]] | KOS 技能定義（權威來源） |
| [[../.claude/hooks.json]] | 會話生命週期鉤子 |
| [[../_meta/system/scripts/wiki-lock.py]] | 多寫入者檔案鎖定 |

## 首次設定

如果這是新的知識庫會話：
1. 確認 Obsidian 可用
2. 如有需要 MCP 傳輸，檢查 Local REST API 外掛（連接埠 27124）
3. 執行 `KOS-Init --status` 驗證知識庫完整性
4. 執行 `KOS-Status` 檢查收件匣/專案健康狀態
5. 執行 `Daily Open` 建立今日筆記
