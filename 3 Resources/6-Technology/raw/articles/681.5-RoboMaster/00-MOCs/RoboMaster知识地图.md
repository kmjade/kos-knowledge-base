---
title: "RoboMaster 知识地图"
aliases: [RoboMaster Knowledge Map]
udc: "681.5"
tags: [robomaster, MOC]
created: 2026-09-05
updated: 2026-09-05
---

# RoboMaster 知识地图

```mermaid
graph TD
    A[01 RoboMaster 导论] --> B[02 安装与环境]
    B --> C[03 机器人基础]
    C --> D[04 射击与图传]
    C --> E[05 传感器与识别]
    D --> F[06 编程与 SDK]
    E --> F
    F --> G[07 飞行控制]
    F --> H[08 扩展与第三方]
    F --> J[10 明文 SDK]
    J --> K[11 多机控制]
    J --> L[12 开发板与嵌入式]
    L --> M[13 RoboRTS]
    G --> I[09 赛事与实战]
    H --> I
    K --> I
    M --> I
```

## 分层学习路线

| 层级 | 技能 | 对应章节 |
|:--:|------|:--:|
| L1 | 理解 RoboMaster 定位与产品线 | 01 |
| L2 | SDK 安装、连接机器人 | 02 |
| L3 | 底盘/云台/射击/图传 | 03–04 |
| L4 | 传感器/识别、SDK 编程 | 05–06 |
| L5 | 明文 SDK、多机、开发板、RoboRTS | 10–13 |
| L6 | 飞行、扩展、赛事实战 | 07–09 |

## 三条主线

| 主线 | 内容 |
|------|------|
| **硬件线** | 底盘 → 云台 → 射击 → 图传 → 传感器 |
| **软件线** | SDK 安装 → Robot 对象 → API → 事件回调 |
| **教育线** | 编程教育 → 扩展 → 赛事 |
| **深度线** | 明文 SDK → 多机编队 → 开发板 → RoboRTS |

## 关联

[[681.5-RoboMaster]] · [[3 Resources/6-Technology/raw/articles/681.5-RoboMaster/wiki/index|Wiki 索引]] · [[3 Resources/6-Technology/raw/articles/681.5-RoboMaster/99-资源收集/资源总览|资源总览]]
