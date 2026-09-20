---
title: "01 Keil 概述"
aliases: [Keil Overview, Keil 概述]
udc: "004.4"
tags: [keil, embedded, intro]
created: 2026-09-05
updated: 2026-09-05
---

# 01 Keil 概述

## Keil 是什么

Keil 是嵌入式软件开发工具的领先品牌，以 µVision IDE 与 C51/C251/C166/Arm Compiler 系列编译器著称。2005 年被 Arm 收购后，Keil 工具链并入 Arm 开发工具体系，现统称 **Arm Keil**，与 Arm Development Studio、Keil Studio（VS Code）共同构成 Arm 嵌入式软件开发生态。

## 历史沿革

| 年份 | 事件 |
|:----:|------|
| 1982 | Keil 创立于德国慕尼黑（创始人 Günter / Reinhard Keil） |
| 1988 | 推出 C51 编译器，成为 8051 事实标准工具链 |
| 1997 | µVision IDE 问世，整合编译、调试、仿真 |
| 2005 | Arm 收购 Keil，C51/C251/C166 并入 Arm |
| 2013 | 推出 MDK-ARM v5，Software Packs 生态 |
| 2018 | Arm Compiler 6（armclang，LLVM 架构）成为默认编译器 |
| 2023 | 推出 MDK v6，CMSIS-Toolbox（csolution/cbuild）原生工作流 |
| 2024+ | Keil Studio（VS Code）逐步替代 µVision 成为跨平台主 IDE |

## 产品家族总览

| 产品线 | 目标内核 | 编译器 | 状态 |
|--------|---------|--------|------|
| **MDK-ARM（Arm Keil MDK）** | ARM Cortex-M / Arm7 / Arm9 / Cortex-R4 | Arm Compiler 5/6 | 活跃（MDK v6） |
| **C51（PK51）** | 8051 兼容（8 位） | C51 + A51 | 活跃（v9.61） |
| **C251（DK251）** | 80251（8/16 位增强） | C251 + A251 | 维护（并入 MDK-Pro） |
| **C166（PK166）** | Infineon C166 / XC16x（16 位） | C166 + A166 | Legacy |

## 关键结论：产品线必须与内核匹配

- 各产品线的**安装包与授权相互独立**，不能混用。
- MDK-ARM 生成 ARM 指令，**不能**用于 8051；反之 C51 也不能编译 ARM。
- 经典 8051（AT89C51、STC89C52、NXP 8051）→ **C51**；80251 增强内核 → **C251**；Cortex-M → **MDK**。
- MDK v6 Professional 的「Legacy」能力可通过 `armlm genLIC` 解锁 PK51/DK251/PK166 与 AC5，实现单一许可覆盖全内核。

## 与竞品的定位对比

| 工具 | 厂商 | 侧重内核 | 特点 |
|------|------|---------|------|
| **Keil MDK** | Arm | Cortex-M | 官方、CMSIS 原生、商业支持 |
| IAR EWARM | IAR | Cortex-M/R/A | 编译器优化强、认证多 |
| GCC + Eclipse | 开源 | Cortex-M/RISC-V | 免费、灵活、无官方支持 |
| STM32CubeIDE | ST | STM32 | 免费、HAL/代码生成 |

> 选择建议：**官方生态与 CMSIS 一致 → Keil MDK；极致优化/功能安全 → IAR；免费开源 → GCC**。

## 安装与 Pack 管理

```bash
# 1. 下载 MDK 安装包 from keil.com/download
MDKxxx.EXE
# 2. 安装后启动 Pack Installer（Project → Manage → Pack Installer, Ctrl+Shift+U）
# 3. 安装芯片 Support Pack（Pack Installer → Devices → STM32F4xx → Install）
```

| Pack 类型 | 说明 | 示例 |
|----------|------|------|
| DFP（Device Family Pack） | 芯片外设驱动库 | `Keil.STM32F4xx_DFP.2.17.0.pack` |
| CMSIS Pack | CMSIS 软件标准 | `ARM.CMSIS.6.0.0.pack` |
| Middleware Pack | 中间件库 | `Keil.MDK-Middleware.8.0.0.pack` |
| BSP（Board Support Pack） | 开发板例程 | `Keil.Boards.STM32F4-Discovery.pack` |

## MDK-Community 免费版

| 项目 | 限制 |
|------|------|
| 授权 | 非商业用途 |
| 支持内核 | Cortex-M0/M0+/M3/M4/M7/M23/M33 |
| 编译器 | armclang v6（LLVM） |
| RTOS | RTX5、CMSIS-RTOS2 |
| 代码大小 | 无限制 |

## 关联

[[02-MDK-ARM]] · [[03-C51工具链]] · [[00-MOCs/Keil知识地图|知识地图]]
