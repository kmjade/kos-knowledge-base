---
created: 2026-06-12
updated: 2026-06-12
udc: 001.8
tags: [bug, wiki, table]
phase: capture
---

# 问题卡：WIKI.md 表格管道符断裂

## 症状

WIKI.md 的 **Available commands** 表格中，含 `<para|lyt|zettel|generic>` 的行内代码内的 `|` 被 Markdown 解析器误判为表格列分隔符，导致整个表格从 2 列撑裂为 5 列，渲染错乱。

## 影响行

| 行内代码内容 | 所在行 |
|-------------|--------|
| `--mode <para&#124;lyt&#124;zettel&#124;generic>` | KOS-Triage |
| `--depth <quick&#124;standard&#124;deep>` | KOS-Research |
| `[quick&#124;standard&#124;deep]` | KOS-Query |

## 根因

Markdown 表格解析器的优先级：**先按 `|` 拆分列 → 再解析行内代码**。因此行内代码中的 `|` 仍被视为列分隔符。

## 修复

将行内代码中的 `|` 替换为 HTML 实体 `&#124;`。

## 参考

AGENTS.md 规范：

> 表格内 `[[wikilink]]` 中的 `|` 须转义为 `\|`

同理，行内代码中的 `|` 也需要转义。

## 已修复文件

- `WIKI.md` — Available commands 表格（3处转义）+ Key files 表格（代码引用 → wikilink）+ 分隔行对齐修复

## 相关笔记

- [[WIKI.md]]
- [[AGENTS.md]]
