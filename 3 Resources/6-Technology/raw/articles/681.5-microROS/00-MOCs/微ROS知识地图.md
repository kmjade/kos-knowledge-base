---
title: "micro-ROS 知识地图"
aliases: [micro-ROS Knowledge Map, 微ROS知识地图]
udc: "681.5"
tags: [micro-ros, MOC]
created: 2026-09-10
updated: 2026-09-10
---

# micro-ROS 知识地图

```mermaid
graph TD
    A[01 micro-ROS 导论] --> B[02 架构与原理]
    B --> C[03 环境搭建]
    C --> D[04 Agent 与传输]
    B --> D
    D --> E[05 话题与通信]
    E --> F[06 服务与动作]
    B --> G[07 外设驱动]
    F --> G
    G --> H[08 与上位机协同]
    D --> H
    H --> I[09 硬件平台]
    I --> J[10 对比与选型]
    J --> K[11 应用与实战]
    K --> L[12 资源收集]
```

## 分层学习路线

| 层级 | 技能 | 对应章节 |
|:--:|------|:--:|
| L1 | 理解 micro-ROS 定位与 ROS 2 关系 | 01 |
| L2 | 掌握 Micro XRCE-DDS / client-agent 架构 | 02 |
| L3 | 搭环境、配 Agent 与传输 | 03–04 |
| L4 | 话题/服务/动作、外设驱动 | 05–07 |
| L5 | 上位机协同、选型、实战、资源 | 08–12 |

## 三条主线

| 主线 | 内容 |
|------|------|
| **协议线** | Micro XRCE-DDS → DDS → topic/service/action |
| **链路线** | MCU(client) → Agent → ROS 2 DDS 图 → 上位机 |
| **硬件线** | ESP32-S3 → 电机/编码器/IMU/LiDAR → 上位机(Pi/Jetson) |

## 关联

[[681.5-microROS]] · [[3 Resources/6-Technology/raw/articles/681.5-microROS/wiki/index|Wiki 索引]] · [[学习路径|学习路径]] · [[例程索引|例程集]] · [[12-资源收集]]
