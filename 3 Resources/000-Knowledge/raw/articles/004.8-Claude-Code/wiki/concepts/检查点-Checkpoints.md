---
title: "检查点 Checkpoints"
aliases: [Checkpoints, 检查点, 回滚]
type: concept
udc: "004.8"
tags: [claude-code, checkpoints]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 检查点 Checkpoints

## 定义

检查点是 Claude Code 在修改文件前自动创建的**文件系统快照**，支持安全回滚：`/undo` 撤销最近改动，`/rewind` 回退到更早检查点，`/diff` 查看未提交改动。

## 关键命令

| 命令 | 功能 |
|------|------|
| `/undo` | 撤销最近改动 |
| `/rewind` | 回退到更早检查点 |
| `/diff` | 查看未提交改动 |

## 相关

[[Agentic-Loop-代理循环|代理循环]] · [[07-会话与检查点]]

## Sources

[[source-Claude-Code-Docs]] · [[07-会话与检查点]]
