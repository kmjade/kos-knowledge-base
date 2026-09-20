---
title: "CMSIS 软件接口标准"
aliases: [CMSIS, Cortex Microcontroller Software Interface Standard]
type: concept
udc: "004.4"
tags: [keil, arm, cmsis]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# CMSIS 软件接口标准

## 定义

CMSIS（Cortex Microcontroller Software Interface Standard）是 Arm 定义的 Cortex-M 软件接口标准，统一了内核访问、外设 HAL、DSP、RTOS 与神经网络的 API，让软件跨芯片厂商复用。

## 组成

| 组件 | 作用 |
|------|------|
| CMSIS-Core | 内核与外设寄存器访问、启动、SysTick |
| CMSIS-DSP | 定点/浮点数字信号处理库 |
| CMSIS-RTOS2 | 统一 RTOS API（RTX、FreeRTOS 实现） |
| CMSIS-NN | 神经网络内核（面向 Cortex-M 的 AI） |
| CMSIS-Driver | 外设驱动标准接口 |
| CMSIS-DAP | 调试探针固件标准 |

## 与 MDK 的关系

- MDK v6 以 CMSIS-Pack 为核心：芯片、板卡、中间件均打包为 Pack。
- CMSIS-Toolbox 的 `cpackget` 负责安装 Pack，`csolution`/`cbuild` 负责工程与构建。

## CMSIS-DSP 模块

| 模块 | 功能 | 关键函数 |
|------|------|---------|
| Basic Math | 向量加减乘除 | `arm_add_f32()` |
| Filtering | FIR/IIR/LMS 滤波 | `arm_fir_f32()` |
| Transform | FFT/DCT | `arm_cfft_f32()` |
| Matrix | 矩阵运算 | `arm_mat_mult_f32()` |
| Statistics | 均值/方差/RMS | `arm_rms_f32()` |

> CMSIS-DSP 针对 Cortex-M4/M7 的 FPU + SIMD 指令深度优化。

## CMSIS-RTOS v2 API

| API 类型 | 关键函数 |
|---------|---------|
| Thread | `osThreadNew()` / `osThreadYield()` |
| Mutex | `osMutexNew()` / `osMutexAcquire()` |
| Semaphore | `osSemaphoreNew()` / `osSemaphoreAcquire()` |
| Message Queue | `osMessageQueueNew()` / `osMessageQueuePut()` |
| Timer | `osTimerNew()` / `osTimerStart()` |

## 相关

[[软件包-Software-Packs]] · [[RTOS-RTX5]] · [[Arm-Keil-MDK]]

## Sources

[[source-Arm-Keil-MDK]] · [[02-MDK-ARM]]
