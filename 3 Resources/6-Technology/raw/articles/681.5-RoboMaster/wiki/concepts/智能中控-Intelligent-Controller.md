---
title: "智能中控 Intelligent Controller"
aliases: [智能中控, Intelligent Controller, 主控, 智能控制器]
type: concept
udc: "681.5"
tags: [robomaster, controller, 智能中控]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# 智能中控 Intelligent Controller

智能中控是 RoboMaster S1/EP 的**高层控制微处理器**，运行 Android，负责对外通信、图传与机器视觉，是整个机器人对外（SDK/App）的**唯一接入关口**。

## 双控制器架构

S1/EP 内部有**两个控制器**，分工明确：

| 控制器 | 层级 | 职责 | 系统 |
|:--|:--|:--|:--|
| **智能中控** | 高层 | 通信、WiFi/USB、摄像头、视觉、扬声器 | Android |
| **运动控制器** | 底层 | 电机驱动、底盘/云台执行 | 实时固件 |

两者通过 **CAN 总线** 连接。SDK 只跟智能中控对话，运动控制器对上层透明。

## 连接模式（SDK 接入）

| 模式 | 开关位置 | 机器人 IP | 说明 |
|:--|:--|:--|:--|
| WiFi 直连（AP） | 直连模式 | `192.168.2.1` | 机器人自己开热点，点对点 |
| WiFi 组网（STA） | 组网模式 | 路由器动态分配 | 广播端口 40926 发现，或 App 查看 |
| USB（RNDIS） | 无需关心开关 | `192.168.42.2` | USB 虚拟网卡，低延迟首选 |
| UART | — | — | 仅控制/消息/事件，无视频音频 |

## 通信端口

| 数据 | 端口 | 协议 |
|:--|:--|:--|
| 视频流 | 40921 | TCP |
| 音频流 | 40922 | TCP |
| 控制命令 | 40923 | TCP |
| 消息推送 | 40924 | UDP |
| 事件上报 | 40925 | TCP |
| IP 广播 | 40926 | UDP |

## 扩展接口

智能中控是扩展模块的电气汇聚点：机械臂走 **CAN**，机械爪/舵机走 **PWM/485**，另有 UART 接口。

## S1 / EP / EP Core 差异

**智能中控与运动控制器在 S1 与 EP 间是不同硬件、不可互换**（EP 的控制器处理能力更强，为 SDK/机械臂/明文协议/第三方硬件预留）。差异既在整机形态，也在核心控制器：

| 型号 | 形态 | 摄像头位置 |
|:--|:--|:--|
| S1 | 云台 + 发射器（战士形态） | 云台 |
| EP Core | 机械臂 + 夹爪（工程师形态） | 机械臂 |
| EP | 两者可切换（EP Core + 云台/发射器） | 随形态 |

> 三者架构相同（都是「运动控制器 + 智能中控」双控制器），但**可通用的只有结构件**（麦克纳姆轮、装甲、水晶弹等）；智能中控、运动控制器、云台、发射器不可通用。

## 延迟规格（Phase 1 关键）

| 连接 | 延迟 |
|:--|:--|
| WiFi 直连 | 80–100 ms |
| 路由器组网 | 100–120 ms |
| USB RNDIS | 更低（推荐） |

> 视频 720p/30fps。Phase 1 Gate「端到端延迟 < 100ms」下，**WiFi 直连已卡在边界**，USB RNDIS 是满足门禁的推荐接入方式。

## 相关

- [[RoboMaster-EP|RoboMaster EP]] · [[RoboMaster-S1|RoboMaster S1]]
- [[RoboMaster-SDK|RoboMaster SDK]] · [[RoboMaster|RoboMaster]]

## Sources

- [[source-RoboMaster-Docs]] · [[03-机器人基础]]
