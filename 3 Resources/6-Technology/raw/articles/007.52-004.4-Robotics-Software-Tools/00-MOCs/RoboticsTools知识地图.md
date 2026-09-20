---
title: "机器人软件开发工具知识地图"
aliases: [Robotics Software Tools Knowledge Map]
udc: "007.52:004.4"
tags: [ros2, MOC]
created: 2026-09-05
updated: 2026-09-05
---

# 机器人软件开发工具知识地图

```mermaid
graph TD
    A[01 导论] --> B[02 ROS2 基础]
    B --> C[03 建模与描述]
    B --> D[04 可视化与调试]
    C --> E[05 仿真]
    D --> E
    E --> F[06 运动规划]
    E --> G[07 导航与 SLAM]
    F --> H[08 硬件接口与控制]
    G --> H
    H --> I[09 开发与实战]
```

## 分层学习路线

| 层级 | 技能 | 对应章节 |
|:--:|------|:--:|
| L1 | 理解工具链与 ROS2 发行版 | 01 |
| L2 | ROS2 基础、建模、可视化 | 02–04 |
| L3 | 仿真、运动规划、导航 SLAM | 05–07 |
| L4 | 硬件控制、开发实战 | 08–09 |

## 三条主线

| 主线 | 内容 |
|------|------|
| **通信线** | ROS2 → DDS → 节点/话题/服务 |
| **建模线** | URDF → tf2 → Gazebo → MoveIt |
| **控制线** | Nav2 → ros2_control → micro-ROS |

## 关联

[[007.52-004.4-Robotics-Software-Tools]] · [[3 Resources/6-Technology/raw/articles/007.52-004.4-Robotics-Software-Tools/wiki/index|Wiki 索引]] · [[3 Resources/6-Technology/raw/articles/007.52-004.4-Robotics-Software-Tools/99-资源收集/资源总览|资源总览]]
