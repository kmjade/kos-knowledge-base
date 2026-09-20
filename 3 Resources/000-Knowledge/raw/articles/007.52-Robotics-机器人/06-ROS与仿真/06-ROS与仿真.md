---
title: "06 ROS 与仿真"
aliases: [ROS, ROS2, Simulation]
udc: "007.52"
tags: [robotics, ros, simulation]
created: 2026-09-05
updated: 2026-09-05
---

# 06 ROS 与仿真

## ROS / ROS2

| 要点 | 说明 |
|------|------|
| ROS2 | 商用机器人事实标准中间件 |
| 通信 | DDS，可配置 QoS（高频传感器 best-effort，命令 reliable） |
| 工具 | rviz（可视化）、tf（坐标变换）、URDF（模型） |
| 实时 | 搭配 Linux PREEMPT_RT 平衡实时与 AI 负载 |

## 仿真

| 工具 | 说明 |
|------|------|
| Gazebo | 经典开源仿真器 |
| NVIDIA Isaac Sim | 物理 AI 仿真、数字孪生 |
| MuJoCo / PyBullet | 强化学习物理仿真 |

## 仿真驱动开发

2026 年最佳实践：仿真 + 数字孪生低成本训练与验证，再迁移真机（sim-to-real）。

## 关联

[[05-控制与规划]] · [[07-具身智能]] · [[ROS-机器人操作系统|ROS]]
