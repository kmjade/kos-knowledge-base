---
title: "无头模式 Headless"
aliases: [Headless, 无头模式, codex exec]
type: concept
udc: "004.8"
tags: [codex, headless, ci-cd]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 无头模式 Headless

## 定义

无头模式（Headless）指**程序化/脚本化运行** Codex，不经交互式终端：`codex exec "prompt"` 一次性执行、管道输入、CI 中配合 `--ask-for-approval never`。也可通过 **Codex SDK** 作为库嵌入。

## 关键特性

| 特性 | 说明 |
|------|------|
| CLI | `codex exec`、管道输入 |
| CI | `--ask-for-approval never` |
| SDK | 程序化嵌入 |

## 相关

[[审批模式-Approval-Modes|审批模式]] · [[08-自动化与CI-CD]]

## Sources

[[source-Codex-Docs]] · [[08-自动化与CI-CD]]
