---
title: "Gazebo 知识地图"
aliases: [Gazebo MOC, 仿真知识地图]
udc: "007.52:004.4"
tags: [gazebo, simulation, moc]
created: 2026-09-15
updated: 2026-09-15
---

# Gazebo 知识地图

## 学习路径

```mermaid
graph LR
    A[01-导论] --> B[02-版本与架构]
    B --> C[03-安装与环境]
    C --> D[04-模型描述]
    D --> E[05-世界与场景]
    E --> F[06-仿真运行]
    F --> G[07-插件系统]
    G --> H[08-传感器]
    H --> I[09-与ROS集成]
    I --> J[10-实践与排障]
```

## 两版并列索引

| 主题 | Classic | 新版 |
|:--|:--|:--|
| 架构 | 单体 | gz-sim/gz-transport/gz-physics... |
| 安装 | `apt install gazebo11` | `apt install gz-harmonic` |
| 运行 | `gazebo world.sdf` | `gz sim world.sdf` |
| ROS | `gazebo_ros` | `ros_gz` |

## 关联 KB

- [[3 Resources/6-Technology/raw/articles/007.52-004.4-Robotics-Software-Tools/007.52-004.4-Robotics-Software-Tools\|机器人软件开发工具]]
- [[3 Resources/000-Knowledge/raw/articles/007.52-Robotics-机器人/007.52-Robotics-机器人\|机器人]]
