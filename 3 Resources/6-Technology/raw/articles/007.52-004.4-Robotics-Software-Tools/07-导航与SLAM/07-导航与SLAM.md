---
title: "07 导航与 SLAM"
aliases: [Nav2, SLAM, Navigation]
udc: "007.52:004.4"
tags: [ros2, nav2, slam]
created: 2026-09-05
updated: 2026-09-05
---

# 07 导航与 SLAM

## Nav2

ROS1 导航的继任，核心是**行为树架构**：

| 组件 | 说明 |
|------|------|
| 规划器 | NavFn、SmacPlanner2D/Hybrid、ThetaStar |
| 控制器 | DWB、RPP（Regulated Pure Pursuit）、MPPI |
| Costmap | static / obstacle / inflation / voxel 层 |

## SLAM

| 工具 | 说明 |
|------|------|
| SLAM Toolbox | 在线 async / lifelong 建图 |
| Cartographer | Google 2D/3D SLAM |
| AMCL | 定位（粒子滤波） |

## 2026 事实标准栈

`SLAM Toolbox + AMCL + Nav2 + RPP/MPPI + 行为树`

## 关联

[[06-运动规划]] · [[08-硬件接口与控制]] · [[wiki/concepts/Nav2-导航|Nav2]] · [[wiki/concepts/SLAM-同步定位建图|SLAM]] · [[wiki/concepts/行为树-Behavior-Tree|行为树]]
