---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [resource, llm, source, lifeos, architecture]
type: wiki-source
reviewed: true
---

# 來源：LifeOS × LLM-Wiki 融合系統

> 原始文章。作者 一隻阿木木，2026 年 5 月。
> 本系統（KOS_LLM-Wiki）的設計來源與靈感基礎。

## 摘要

該文章提出了 **LifeOS × LLM-Wiki 融合系統** 的完整架構設計，是本知識庫的核心設計來源。系統建立在三條公理之上：

**公理一：單一 Vault，永不分裂** — 所有內容進入同一個 Obsidian Vault，透過明確的隔離邊界管理不同用途的資訊。

**公理二：AI 是編譯器，不是對話夥伴** — 對生活資訊 AI 是路由器，對專業知識 AI 是編譯器。使用者只負責生產和消費資訊，中間整理工作全部由 AI 承擔。

**公理三：資訊有生命週期** — 不是所有東西都值得永久儲存。系統核心目標是將維護成本降到零。

## 與本系統的對應關係

| 原文概念 | 本系統實現 |
|---------|-----------|
| 00-Inbox | 0 Inbox/ |
| 01-Projects / 02-Areas | 1 Projects/ / 2 Areas/ |
| 03-Resources/{raw,wiki} | 3 Resources/ 含 raw/wiki |
| 04-Archive | 4 Archives/ |
| AI-Log/ | _meta/system/logs/ |
| CLAUDE.md（憲法） | AGENTS.md |
| /triage 分揀引擎 | KOS-Triage |
| /wiki-compile 編譯引擎 | KOS-Wiki-Compile |
| People CRM | 3 Resources/People/wiki/ |
| UDC 分類法 | 本系統新增（原文使用標籤） |

## 參考

- 原始檔案：LifeOS × LLM-Wiki 融合系統.md
- 相關頁面：[[zh-tw/3 Resources/LLM-Wiki/Knowledge+PARA+LLM-Wiki融合系統]]
