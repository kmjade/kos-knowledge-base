---
title: "13 RoboRTS"
aliases: [RoboRTS, RoboMaster Real-Time System]
udc: "681.5"
tags: [robomaster, roborts, ros]
created: 2026-09-05
updated: 2026-09-05
---

# 13 RoboRTS

## 什么是 RoboRTS

RoboRTS（RoboMaster Real-Time System）是 RoboMaster **AI 机器人平台**，基于 ROS 的自主移动机器人系统，覆盖感知、定位、决策、规划、控制全栈技术。用于 ICRA RoboMaster AI Challenge。

| 项目 | 说明 |
|------|------|
| 开发语言 | C++ |
| 框架 | ROS |
| 仓库 | RoboMaster/RoboRTS-Tutorial |

## 双层架构

```
上位机层（Manifold 2 / Jetson）
├── 定位 AMCL
├── 感知 Detection
├── 决策 Decision
├── 规划 Planning
└── 追踪 Tracking
       ↓ 串口（921600 bps）
底层控制层（STM32F427）
```

## 核心模块

| 模块 | 功能 |
|------|------|
| roborts_base | 底盘控制 |
| roborts_detection | 目标检测 |
| roborts_localization | 定位（AMCL） |
| roborts_planning | 路径规划 |
| roborts_decision | 行为决策 |

## 关联

[[12-开发板与嵌入式]] · [[09-赛事与实战]] · [[wiki/concepts/RoboRTS-框架|RoboRTS]]
