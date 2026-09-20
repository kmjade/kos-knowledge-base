---
title: "ACP"
aliases: [ACP, Agent Client Protocol, Agent 客户端协议]
type: entity
entity_type: protocol
udc: "004.8"
tags: [hermes-agent, acp, protocol]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# ACP

ACP（Agent Client Protocol）是 Hermes 作为**编辑器原生 Agent** 暴露给 VS Code、Zed 与 JetBrains 的协议。`acp_adapter/` 把同步 `AIAgent` 包装为异步 JSON-RPC stdio 服务器。

## 核心规格

| 参数 | 说明 |
|------|------|
| 类型 | Agent 客户端协议 |
| 传输 | stdio + JSON-RPC |
| 支持编辑器 | VS Code / Zed / JetBrains |
| 能力 | 会话管理、事件桥接、权限桥接、工具渲染 |

## 关键特性

- 会话生命周期：新建/加载/恢复/分叉/取消
- 权限桥接：危险命令确认映射到编辑器审批
- 工具渲染：patch→diff、terminal→命令文本、read_file→预览

## 相关

[[Hermes-Agent|Hermes Agent]] · [[Agent-Loop-代理循环|Agent Loop]] · [[03-核心架构]]

## Sources

[[source-HermesAgent-CN]] · [[03-核心架构]]
