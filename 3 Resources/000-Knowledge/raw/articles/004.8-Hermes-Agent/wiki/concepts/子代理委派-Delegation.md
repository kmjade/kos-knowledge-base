---
title: "子代理委派 Delegation"
aliases: [Delegation, delegate_task, 子代理委派]
type: concept
udc: "004.8"
tags: [hermes-agent, delegation, subagent]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 子代理委派 Delegation

## 定义

子代理委派通过 `delegate_task` 工具启动**隔离上下文、受限工具集、独立终端**的子 AIAgent 实例。每个子代理从全新对话开始，仅最终摘要回传父 Agent，用于并行处理多个工作流。

## 关键约束

| 属性 | 值 |
|------|-----|
| 最大并发 | 3 个子代理 |
| 深度限制 | 2（子代理不能再委派） |
| 默认迭代 | 50 轮 |
| 禁止工具 | delegate_task / clarify / memory / send_message / execute_code |
| 模型覆盖 | `delegation.model` 可路由到更便宜模型 |

## 相关

[[Agent-Loop-代理循环|Agent Loop]] · [[定时任务-Cron|定时任务]] · [[08-自动化与委派]]

## Sources

[[source-HermesAgent-CN]] · [[08-自动化与委派]]
