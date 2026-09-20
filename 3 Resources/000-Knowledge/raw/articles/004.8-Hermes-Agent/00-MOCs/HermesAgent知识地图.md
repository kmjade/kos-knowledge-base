---
title: "Hermes Agent 知识地图"
aliases: [Hermes Agent Knowledge Map]
udc: "004.8"
tags: [hermes-agent, MOC]
created: 2026-09-05
updated: 2026-09-05
---

# Hermes Agent 知识地图

```mermaid
graph TD
    A[01 Hermes 导论] --> B[02 安装与快速入门]
    A --> C[03 核心架构]
    B --> C
    C --> D[04 工具与 MCP]
    C --> E[05 技能系统]
    C --> F[06 记忆与上下文]
    D --> G[08 自动化与委派]
    E --> G
    F --> G
    C --> H[07 消息网关]
    H --> I[09 实战案例]
    G --> I
```

## 分层学习路线

| 层级 | 技能 | 对应章节 |
|:--:|------|:--:|
| L1 | 理解 Hermes Agent 定位与版本演进 | 01 |
| L2 | 安装、配置模型、跑通首次对话 | 02 |
| L3 | 掌握核心架构：AIAgent、工具集、技能、记忆 | 03–06 |
| L4 | 接入消息网关、自动化与委派 | 07–08 |
| L5 | 实战：简报机器人、PR 审查、并行研究、本地 LLM | 09 |

## 三条主线

| 主线 | 内容 |
|------|------|
| **能力线** | 工具/工具集 → MCP → 技能 → 记忆 → 消息网关 |
| **架构线** | AIAgent 循环 → 提示词组装 → 提供者解析 → 会话持久化 → 插件系统 |
| **自动化线** | Cron 定时任务 → 子代理委派 → 代码执行 → 事件钩子 → 批量处理 |

## 关联

[[004.8-Hermes-Agent]] · [[3 Resources/000-Knowledge/raw/articles/004.8-Hermes-Agent/wiki/index|Wiki 索引]] · [[3 Resources/000-Knowledge/raw/articles/004.8-Hermes-Agent/99-资源收集/资源总览|资源总览]]
