---
title: "Codex 知识地图"
aliases: [Codex Knowledge Map]
udc: "004.8"
tags: [codex, MOC]
created: 2026-09-05
updated: 2026-09-05
---

# Codex 知识地图

```mermaid
graph TD
    A[01 Codex 导论] --> B[02 安装与快速入门]
    A --> C[03 核心架构]
    B --> C
    C --> D[04 沙箱与审批]
    C --> E[05 配置与 AGENTS.md]
    D --> F[06 技能与子代理]
    E --> F
    C --> G[07 钩子与 MCP]
    F --> H[08 自动化与 CI/CD]
    G --> H
    H --> I[09 平台与实战]
```

## 分层学习路线

| 层级 | 技能 | 对应章节 |
|:--:|------|:--:|
| L1 | 理解 Codex 定位与核心理念 | 01 |
| L2 | 安装、登录、跑通首次对话 | 02 |
| L3 | 掌握核心架构、沙箱、审批、配置 | 03–05 |
| L4 | 扩展系统：技能、子代理、钩子、MCP | 06–07 |
| L5 | 自动化 CI/CD、多平台实战 | 08–09 |

## 三条主线

| 主线 | 内容 |
|------|------|
| **核心线** | Agentic 循环 → 内置工具 → 上下文 |
| **安全线** | 沙箱（read-only/workspace-write/danger）→ 审批（untrusted/on-request/never） |
| **扩展线** | AGENTS.md → Skills → Subagents → Hooks → MCP |

## 关联

[[004.8-Codex]] · [[3 Resources/000-Knowledge/raw/articles/004.8-Codex/wiki/index|Wiki 索引]] · [[3 Resources/000-Knowledge/raw/articles/004.8-Codex/99-资源收集/资源总览|资源总览]]
