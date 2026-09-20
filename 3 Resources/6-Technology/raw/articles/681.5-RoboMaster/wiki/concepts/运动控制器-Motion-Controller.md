---
title: "运动控制器 Motion Controller"
aliases: [运动控制器, Motion Controller, 运动控制板]
type: concept
udc: "681.5"
tags: [robomaster, controller, 运动控制器]
created: 2026-09-15
updated: 2026-09-19
compiled: true
reviewed: false
---

# 运动控制器 Motion Controller

运动控制器是 RoboMaster S1/EP 的**底层实时电机控制器**，负责底盘（麦轮）、云台、发射器等执行机构的驱动，与 [[智能中控-Intelligent-Controller|智能中控]] 构成**双控制器架构**。

## 双控制器分工

| 控制器 | 层级 | 职责 | 系统 |
|:--|:--|:--|:--|
| [[智能中控-Intelligent-Controller|智能中控]] | 高层 | 通信、WiFi/USB、摄像头、视觉 | Android |
| **运动控制器** | 底层 | 电机驱动、底盘/云台执行 | 实时固件 |

两者通过 **CAN 总线** 连接；运动控制器对上层（SDK/App）透明。

## 接口

| 接口 | 用途 |
|:--|:--|
| **CAN** | 连接智能中控（内部） |
| **UART** | 外部直连，[[明文SDK-Plaintext-SDK|明文 SDK]] 的嵌入式接入点（115200） |
| 电机驱动口 | 驱动麦轮/云台/发射器电机 |

## UART 明文直连（嵌入式路径）

运动控制器的 **UART 接口** 是第三方微控制器**绕开智能中控、直接控底盘**的关口：

```
MCU（STM32/Arduino）──UART 115200──▶ 运动控制器 ──▶ 麦轮/云台电机
```

| 参数 | 值 |
|:--|:--|
| 波特率 | 115200 |
| 数据位 / 停止位 / 校验 | 8 / 1 / None |
| 引脚 | TX↔RX、GND 共地 |

### 明文命令示例

```text
发送: command;                  → 进入 SDK 模式
发送: chassis speed 0.5 0 0;    → 麦轮前进
发送: gimbal moveto 0 0;        → 云台回中
发送: robot battery?;           → 查询电量
发送: quit;                     → 退出
```

> 明文 SDK 走 TCP（控制端口 40923）或 UART，语言无关，是资源受限环境的直控通道。

## 对本项目的意义

- **MCU 层直控**：micro-ROS MCU 可经 UART 明文协议直接驱动 RoboMaster 底盘，**绕开 Python SDK + 智能中控**，契合「底盘后置」与「MCU 接入」原则。
- **低延迟**：UART 直连无 WiFi/Android 中转，比「SDK over WiFi」路径更短。
- **对比 Python SDK**：Python SDK 经智能中控（Android）走 TCP，明文 UART 直连运动控制器是另一条更「嵌入」的通道。

## 相关

- [[智能中控-Intelligent-Controller|智能中控]]
- [[明文SDK-Plaintext-SDK|明文 SDK]]
- [[开发板-Dev-Board|开发板]] · [[Chassis-底盘|底盘]]

## Sources

- [[source-RoboMaster-Docs]] · [[source-RoboMaster-Deep]] · [[10-明文SDK与协议]]
