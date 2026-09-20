---
title: "004.4 Keil 嵌入式开发工具"
aliases: [Keil, Arm Keil, Keil MDK, 嵌入式开发工具, Keil 工具链]
udc: "004.4"
tags: [DDC/004.4, keil, embedded, arm, compiler]
created: 2026-09-05
updated: 2026-09-05
---

# 004.4 Keil 嵌入式开发工具

> Keil（现属 Arm）是嵌入式软件开发工具链的核心品牌，旗下 µVision IDE 与 C51/C251/C166/Arm Compiler 编译器覆盖 8051、80251、C166、ARM Cortex-M 等主流单片机内核，是工业界与高校教学最广泛使用的 MCU 开发环境之一。

## 章节导航

| 章节 | 主题 | English |
|:----:|------|---------|
| [[01-Keil概述]] | 历史、Arm 收购、产品家族总览 | Keil Overview |
| [[02-MDK-ARM]] | Arm Keil MDK、MDK v6 版本、CMSIS-Toolbox | MDK-ARM |
| [[03-C51工具链]] | 8051 工具链（C51/A51/BL51/LX51） | C51 (8051) |
| [[04-C251工具链]] | 80251 工具链 | C251 (80251) |
| [[05-C166工具链]] | Infineon C166 工具链（legacy） | C166 |
| [[06-µVision-IDE]] | 编辑器、工程管理、调试器、仿真 | µVision IDE |
| [[07-编译器与链接器]] | AC5/AC6、优化等级、C51 内存模型 | Compiler & Linker |
| [[08-调试与仿真]] | ULINK、CMSIS-DAP、SWD/JTAG、Trace | Debug & Simulation |
| [[09-选型与实战]] | 按内核选产品线、许可、工程搭建 | Selection & Practice |

## 核心问题

如何根据目标单片机内核选择正确的 Keil 产品线（C51/C251/C166/MDK），配置编译器与链接器，并完成从工程创建、调试到量产烧录的全流程？

## 学习路径

1. **入门** → [[01-Keil概述]]：理解 Keil 历史定位与产品家族
2. **ARM** → [[02-MDK-ARM]]：MDK v6 版本、组件、许可
3. **8/16 位** → [[03-C51工具链]] → [[04-C251工具链]] → [[05-C166工具链]]：传统 MCU 工具链
4. **IDE** → [[06-µVision-IDE]]：工程管理与调试界面
5. **编译** → [[07-编译器与链接器]]：编译器、优化、内存模型
6. **调试** → [[08-调试与仿真]]：探针、仿真器、Trace
7. **实战** → [[09-选型与实战]]：选型与工程搭建

## 跨库连接

- **嵌入式硬件**：链接 004.3 计算机硬件 / 621.38 电子工程 — MCU 内核、存储器映射、寄存器
- **嵌入式系统**：链接 004.16 嵌入式系统 — RTOS、中断、低功耗（与 Keil 调试 / RTX 协同）
- **繁体 raw 源**：[[4 Archives/legacy/Keil-MDK/Keil-MDK|Keil-MDK]] — 已吸收并归档至 4 Archives/legacy（原 DDC 004.16，8 章深度实操）

## 资源

[[3 Resources/000-Knowledge/raw/articles/004.4-软件/004.41-开发工具/Keil-嵌入式开发工具/99-资源收集/资源总览|资源总览]] · [[3 Resources/000-Knowledge/raw/articles/004.4-软件/004.41-开发工具/Keil-嵌入式开发工具/wiki/index|Wiki 索引]] · [[00-MOCs/Keil知识地图|知识地图]]
