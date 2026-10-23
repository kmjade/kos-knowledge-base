---
title: "软件包 Software Packs（CMSIS-Pack）"
aliases: [Software Packs, CMSIS-Pack, cpackget, 芯片支持包]
type: concept
udc: "004.4"
tags: [keil, cmsis, packs]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 软件包 Software Packs（CMSIS-Pack）

## 定义

Software Pack（CMSIS-Pack 格式）是 Arm 生态中分发芯片、板卡与软件组件的标准打包格式，让同一套代码可跨厂商、跨芯片复用。MDK v5 引入，MDK v6 以此为核心。

## Pack 内容

| 内容 | 说明 |
|------|------|
| 芯片描述 | 内存布局、寄存器、启动文件、Flash 算法 |
| 板卡描述 | 板级外设、示例工程 |
| 中间件 | RTOS、协议栈、文件系统 |
| 文档 | API 手册、示例 |

## 工具

| 命令 | 作用 |
|------|------|
| `cpackget` | 拉取/安装 Pack |
| `packchk` | 校验 Pack 规范 |
| `csolution` | 解析工程与依赖 |
| `cbuild` | 执行构建 |

## 常见问题

- CMSIS-DSP v6 需安装 **ARM.CMSIS.V6** 包（从 `keil.arm.com/packs`）。
- 报错 `Component ... API version required` → 升级对应 Pack。

## 相关

[[CMSIS-软件接口标准]] · [[Arm-Keil-MDK]]

## Sources

[[source-Arm-Keil-MDK]] · [[02-MDK-ARM]]
