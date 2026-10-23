---
title: "Arm Compiler for Embedded 嵌入式编译器"
aliases: [Arm Compiler, AC6, AC5, armclang, armcc]
type: concept
udc: "004.4"
tags: [keil, arm, compiler]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Arm Compiler for Embedded 嵌入式编译器

## 定义

Arm Compiler for Embedded 是 Arm 面向 Cortex-M 等嵌入式内核的 C/C++ 编译器，包含两代：AC5（`armcc`，专有后端，legacy）与 AC6（`armclang`，基于 LLVM/Clang，现行默认）。

## AC5 vs AC6

| 维度 | AC5 | AC6 |
|------|-----|-----|
| 编译器 | armcc | armclang |
| 架构 | 专有 | LLVM/Clang |
| 标准 | C90/C99 | C11/C++14/17 |
| 状态 | legacy | 默认 |
| CMSIS-DSP v6 | ❌ | ✅ |

## 优化等级

| 等级 | 目标 |
|:----:|------|
| `-O0` | 调试 |
| `-O1` | 平衡 |
| `-O2` | 速度（默认） |
| `-O3` | 最大速度 |
| `-Oz` | 最小体积 |

## 相关

[[Keil-嵌入式工具链]] · [[链接器与定位]] · [[Arm-Keil-MDK]]

## Sources

[[source-Arm-Keil-MDK]] · [[07-编译器与链接器]]
