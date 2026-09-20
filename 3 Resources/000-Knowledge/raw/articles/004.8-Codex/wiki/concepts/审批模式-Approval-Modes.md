---
title: "审批模式 Approval Modes"
aliases: [Approval Modes, 审批模式, 审批]
type: concept
udc: "004.8"
tags: [codex, approval, security]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 审批模式 Approval Modes

## 定义

审批模式控制 Codex 对潜在危险操作是否询问用户。三种模式：`untrusted`（仅安全读自动，其余全问）、`on-request`（默认，沙箱内自动，逃逸沙箱才问）、`never`（从不问，配合严格沙箱用于 CI）。

## 关键用法

```bash
codex --ask-for-approval on-request   # 或 -a
codex exec --ask-for-approval never   # CI 标准形态
```

## 相关

[[沙箱-Sandbox|沙箱]] · [[无头模式-Headless|无头模式]] · [[04-沙箱与审批]]

## Sources

[[source-Codex-Docs]] · [[04-沙箱与审批]]
