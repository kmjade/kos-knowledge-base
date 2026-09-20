---
title: "持久记忆 Persistent Memory"
aliases: [Persistent Memory, 持久记忆, MEMORY.md]
type: concept
udc: "004.8"
tags: [hermes-agent, memory]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 持久记忆 Persistent Memory

## 定义

持久记忆是 Hermes Agent 在会话间保留的**有界且经过筛选**的记忆，由两个文件组成：`MEMORY.md`（Agent 个人笔记，2,200 字符）与 `USER.md`（用户档案，1,375 字符）。会话开始时作为冻结快照注入系统提示，Agent 通过 `memory` 工具自管理。

## 关键特性

| 特性 | 说明 |
|------|------|
| 冻结快照 | 会话开始注入一次，保护前缀缓存 |
| 操作 | `add` / `replace` / `remove`（子字符串匹配） |
| 容量管理 | 超 80% 时合并/替换旧条目 |
| 会话搜索 | `session_search` 检索 SQLite+FTS5 历史对话 |
| 外部提供者 | 8 个插件（Honcho、Mem0 等）并行扩展 |

## 相关

[[SOUL-人格|SOUL]] · [[Agent-Loop-代理循环|Agent Loop]] · [[06-记忆与上下文]]

## Sources

[[source-HermesAgent-CN]] · [[06-记忆与上下文]]
