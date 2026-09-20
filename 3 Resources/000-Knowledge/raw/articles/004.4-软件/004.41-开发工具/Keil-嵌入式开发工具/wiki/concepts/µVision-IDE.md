---
title: "µVision IDE 集成开发环境"
aliases: [µVision, uVision, Keil µVision, µVision5]
type: concept
udc: "004.4"
tags: [keil, ide]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# µVision IDE 集成开发环境

## 定义

µVision 是 Keil 的 Windows 传统集成开发环境（IDE），把代码编辑、工程管理、编译链接、软件仿真与硬件调试集成在同一界面，是 8051 与大量 Cortex-M 项目的默认开发环境。

## 核心模块

| 模块 | 功能 |
|------|------|
| 编辑器 | 语法高亮、补全、导航 |
| 工程管理 | 多目标、分组、构建配置（`.uvprojx`） |
| 构建 | 调用编译器/汇编器/链接器 |
| 软件仿真 | 无硬件调试（模拟 CPU + 外设） |
| 硬件调试 | ULINK/CMSIS-DAP 在线调试 |
| 分析 | 逻辑分析仪、性能分析、代码覆盖率 |

## 与 Keil Studio 的关系

| 维度 | µVision | Keil Studio |
|------|---------|-------------|
| 平台 | 仅 Windows | 跨平台（VS Code） |
| 工程格式 | `.uvprojx` | `csolution.yml` |
| 定位 | legacy IDE | MDK v6 新范式 |

## 相关

[[Keil-嵌入式工具链]] · [[Arm-Keil-MDK]] · [[ULINK-调试探针]]

## Sources

[[source-Keil-com]] · [[06-µVision-IDE]]
