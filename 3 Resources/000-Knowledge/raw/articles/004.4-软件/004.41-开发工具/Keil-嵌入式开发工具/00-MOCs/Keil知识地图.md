---
title: "Keil 知识地图"
aliases: [Keil MOC, Keil 知识地图]
udc: "004.4"
tags: [DDC/004.4, keil, moc]
created: 2026-09-05
updated: 2026-09-05
---

# Keil 知识地图

> Keil 嵌入式工具链的结构化导航——按「产品线 → IDE → 编译 → 调试 → 实战」分层。

## 分层总览

```
Keil 嵌入式开发工具 (004.4)
├── 产品线（按目标内核）
│   ├── MDK-ARM  → ARM Cortex-M / Arm7 / Arm9 / Cortex-R4
│   ├── C51      → 8051 兼容内核（8 位）
│   ├── C251     → 80251 增强内核（8/16 位）
│   └── C166     → Infineon C166 / XC16x（16 位，legacy）
├── IDE 与工程
│   ├── µVision IDE（Windows，legacy）
│   └── Keil Studio（VS Code 扩展，跨平台）
├── 编译与链接
│   ├── Arm Compiler（AC5 armcc / AC6 armclang）
│   └── C51/C251/C166 编译器 + 链接器/定位器
├── 调试与仿真
│   ├── ULINK2 / ULINKpro / ULINKplus
│   ├── CMSIS-DAP（第三方探针）
│   └── 软件仿真器（Simulator）
└── 生态标准
    └── CMSIS（HAL / DSP / RTOS2 / NN）+ Software Packs
```

## 学习路线

```mermaid
graph LR
  A[01 Keil 概述] --> B[02 MDK-ARM]
  A --> C[03 C51 工具链]
  A --> D[04 C251 工具链]
  A --> E[05 C166 工具链]
  B --> F[06 µVision IDE]
  C --> F
  F --> G[07 编译器与链接器]
  G --> H[08 调试与仿真]
  H --> I[09 选型与实战]
  I --> J[99 资源收集]
```

## 关联

[[Keil-嵌入式开发工具|主索引]] · [[3 Resources/People/wiki/index|Wiki 索引]] · [[3 Resources/000-Knowledge/raw/articles/004.4-软件/004.41-开发工具/Keil-嵌入式开发工具/99-资源收集/资源总览|资源总览]]
