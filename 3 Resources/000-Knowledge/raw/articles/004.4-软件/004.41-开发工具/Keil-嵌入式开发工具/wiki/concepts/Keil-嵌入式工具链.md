---
title: "Keil 嵌入式工具链 Keil Embedded Toolchain"
aliases: [Keil Toolchain, Keil 工具链]
type: concept
udc: "004.4"
tags: [keil, embedded, toolchain]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Keil 嵌入式工具链 Keil Embedded Toolchain

## 定义

Keil 嵌入式工具链是 Arm 旗下用于嵌入式单片机软件开发的成套工具集合，覆盖「编辑 → 编译 → 汇编 → 链接/定位 → 调试 → 烧录」全流程，按目标内核分为 MDK-ARM、C51、C251、C166 四大产品线。

## 核心组成

| 环节 | 工具 |
|------|------|
| 编辑/工程 | µVision IDE、Keil Studio（VS Code） |
| 编译 | Arm Compiler（AC6）、C51/C251/C166 编译器 |
| 汇编 | armasm、A51/A251/A166 |
| 链接/定位 | armlink、BL51/LX51/L251/L166 |
| 库管理 | armlib、LIB51 |
| 转换 | fromelf、OH51/OH251/OH166 |
| 调试 | ULINK 探针、软件仿真器、CMSIS-DAP |

## 四大产品线

| 产品线 | 目标内核 | 位宽 |
|--------|---------|:----:|
| MDK-ARM | ARM Cortex-M / Arm7 / Arm9 / Cortex-R4 | 32 位 |
| C51（PK51） | 8051 | 8 位 |
| C251（DK251） | 80251 | 8/16 位 |
| C166（PK166） | Infineon C166/XC16x | 16 位 |

## 关键约束

- 产品线授权相互独立，不能混用。
- 工具必须与目标芯片内核匹配：C51 编 8051，MDK 编 Cortex-M。

## 相关

[[µVision-IDE]] · [[Arm-Compiler-for-Embedded]] · [[链接器与定位]] · [[Arm-Keil-MDK]]

## Sources

[[source-Keil-com]] · [[01-Keil概述]]
