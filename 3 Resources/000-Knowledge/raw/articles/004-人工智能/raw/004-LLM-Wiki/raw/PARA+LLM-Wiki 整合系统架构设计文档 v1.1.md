---
compiled_at: "2026-06-07"
compiled_by: "KOS-Wiki-Compile"
compiled-pages: [wiki/PARA+LLM-WIKI架构，实现个人知识与生活管理的自动化革命.md]
compiled: true
created: PARA+LLM-W
updated: 2026-06-07
udc:
tags: [triage, resource]
triage:
  status: processed
  date: 2026-06-07
  confidence: medium
  source: 0 Inbox/PARA+LLM-Wiki 整合系统架构设计文档 v1.1.md
  route: 3 Resources/000-Knowledge/004-LLM-Wiki/
lifecycle: reference
---

# Knowledge + PARA + LLM-Wiki 融合系統架構設計文檔

**版本**: v1.1
**日期**: 2026-05-29
**狀態**: ✅ 已實施 / 持續演進

> v1.1 變更：將 DDC 知識分類體系正式納入架構核心，記錄 AI Agent 驅動的 KB 構建工作流，反映 vault 實際結構（非理想化設計）。

---

## 目錄

1. [設計哲學](#1-設計哲學)
2. [系統全景圖](#2-系統全景圖)
3. [三層融合架構](#3-三層融合架構)
4. [DDC 知識分類體系](#4-ddc-知識分類體系)
5. [KB 標準化結構](#5-kb-標準化結構)
6. [AI Agent 工作流](#6-ai-agent-工作流)
7. [LLM-Wiki 子庫模式](#7-llm-wiki-子庫模式)
8. [目錄權限矩陣](#8-目錄權限矩陣)
9. [Frontmatter 標準](#9-frontmatter-標準)
10. [多語言策略](#10-多語言策略)
11. [Git 工作流](#11-git-工作流)
12. [附錄：演進路線圖](#12-附錄演進路線圖)

---

## 1. 設計哲學

### 1.1 三條核心公理

#### 公理一：單一 Vault，永不分裂

> 所有內容進入同一個 Obsidian Vault。多 Vault 切換的摩擦是偽問題——真正的解是在單一 Vault 內建立明確的隔離邊界。

- 一個 Vault，全部 Markdown，全部對 AI Agent 可訪問
- 權限控制通過 AI 規則實現，而非物理分割

#### 公理二：AI 是編譯器 + 構建者

> AI 從「對話夥伴」升級為「知識庫構建者」。人類定義主題（一句話/一個詞），AI 完成結構化構建（14+ 文件、DDC 分類、Git 提交）。

v1.0 定義：「人類維護 raw/，AI 維護 wiki/」
v1.1 擴展：「AI 直接構建完整 KB——從 DDC 分類、MOC 導航到章節內容」

#### 公理三：信息有生命周期，知識庫有結構標準

> 不是所有信息都值得永久存儲。但值得存儲的，必須遵循統一的結構標準。

- DDC 提供普世分類框架
- 標準化 KB 結構確保一致性
- AI 負責維護，人類負責消費和方向指引

### 1.2 設計原則

| 原則 | v1.0 | v1.1 擴展 |
|------|------|-----------|
| **關注點分離** | raw/ vs wiki/ | + KB 結構層（00-MOCs, 01-09, ram/） |
| **標準化優先** | Frontmatter | + DDC 分類 + KB 結構模板 |
| **溯源優先** | sources/ | + `source:` frontmatter + wiki 鏈接 |
| **AI 可構建** | /wiki-compile | + 單詞命令觸發完整 KB 構建 |
| **故障安全** | Markdown 人類可讀 | Git 版本控制可回滾 |

---

## 2. 系統全景圖

### 2.1 架構總覽

```
┌─────────────────────────────────────────────────────────────────┐
│                        Knowledge Vault                          │
│                                                                 │
│  ┌──────────┐   ┌──────────────┐   ┌────────────────────────┐  │
│  │  PARA    │   │     DDC      │   │     LLM-Wiki           │  │
│  │ 行動管理  │