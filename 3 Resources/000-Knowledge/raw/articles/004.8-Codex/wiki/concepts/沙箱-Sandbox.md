---
title: "沙箱 Sandbox"
aliases: [Sandbox, 沙箱, 沙箱模式]
type: concept
udc: "004.8"
tags: [codex, sandbox, security]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 沙箱 Sandbox

## 定义

沙箱是 Codex 的**内核级隔离机制**，约束内置工具的执行边界。三种模式：`read-only`（只读探索）、`workspace-write`（默认，读全部写工作目录+/tmp）、`danger-full-access`（无沙箱）。

## 平台实现

| 平台 | 实现 |
|------|------|
| macOS | Seatbelt（sandbox-exec） |
| Linux | Landlock + seccomp / bwrap |
| Windows | 原生实验性沙箱 |

## 相关

[[审批模式-Approval-Modes|审批模式]] · [[Agentic-Loop-代理循环|代理循环]] · [[04-沙箱与审批]]

## Sources

[[source-Codex-Docs]] · [[04-沙箱与审批]]
