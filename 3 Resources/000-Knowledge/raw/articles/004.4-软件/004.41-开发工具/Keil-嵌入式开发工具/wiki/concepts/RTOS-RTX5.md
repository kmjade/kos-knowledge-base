---
title: "RTOS RTX5 实时操作系统"
aliases: [RTX5, Keil RTX, CMSIS-RTOS2]
type: concept
udc: "004.4"
tags: [keil, rtos, rtx5, cmsis-rtos]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# RTOS RTX5 实时操作系统

## 定义

RTX5 是 Arm 官方（Keil 团队维护）的确定性实时操作系统，实现 CMSIS-RTOS2 标准接口，面向 Cortex-M 提供多线程调度、同步与通信原语，与 MDK 深度集成，µVision 提供 RTOS 可视化调试。

## 核心能力

| 能力 | 说明 |
|------|------|
| 抢占式调度 | 基于优先级的多线程调度 |
| 同步 | 互斥锁、信号量、事件标志 |
| 通信 | 消息队列、内存池 |
| 时间 | 定时器、时间片轮转 |
| 确定性 | 固定的时间开销，适合硬实时 |

## 与 FreeRTOS 的关系

- MDK 同时提供 **CMSIS-FreeRTOS**（Amazon FreeRTOS 内核，封装为 CMSIS-RTOS2 API）。
- RTX5 免版税、官方支持；FreeRTOS 生态更广、跨平台。

## RTX5 核心对象（CMSIS-RTOS2）

| 对象 | 创建函数 | 功能 |
|------|---------|------|
| osThread | `osThreadNew()` | 独立线程 |
| osMutex | `osMutexNew()` | 互斥锁（含优先级继承） |
| osSemaphore | `osSemaphoreNew()` | 计数/二元信号量 |
| osMessageQueue | `osMessageQueueNew()` | FIFO 消息队列 |
| osTimer | `osTimerNew()` | 单次/周期软件定时器 |
| osEventFlags | `osEventFlagsNew()` | 32-bit 事件标志 |
| osMemoryPool | `osMemoryPoolNew()` | 固定大小内存池 |

## RTX5 配置（RTX_Config.h）

```c
#define OS_TICK_FREQ      1000   // 1 kHz tick
#define OS_ROBIN_ENABLE   1      // Round-Robin 启用
#define OS_ROBIN_TIMEOUT  5      // 5 ticks 时间片
#define OS_ISR_FIFO_QUEUE 16     // ISR 事件 FIFO 深度
#define OS_STACK_SIZE     200    // 默认 stack（words）
```

## 相关

[[CMSIS-软件接口标准]] · [[Arm-Keil-MDK]] · [[µVision-IDE]]

## Sources

[[source-Arm-Keil-MDK]] · [[02-MDK-ARM]]
