---
title: "安全 Security"
aliases: [Security, 安全, OpenClaw Security]
type: concept
udc: "004.8"
tags: [openclaw, security]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 安全 Security

## 定义

安全是 OpenClaw 的**治理机制**：审批（HITL）、沙箱（sandbox 运行时与策略）、secrets（`${VAR_NAME}` 引用避免硬编码）、security 审计、访问控制（allowlist/pairing/access groups）。应对 prompt injection、记忆中毒、明文密钥等风险。

## 关键机制

| 机制 | 说明 |
|------|------|
| 审批 | HITL 人工审批 |
| 沙箱 | 沙箱运行时 + 策略 |
| Secrets | `${VAR_NAME}` 引用 |
| 审计 | `openclaw security` |

## 相关

[[消息渠道-Channels|消息渠道]] · [[自动化-Automation|自动化]] · [[08-安全与治理]]

## Sources

[[source-OpenClaw-Docs]] · [[08-安全与治理]]
