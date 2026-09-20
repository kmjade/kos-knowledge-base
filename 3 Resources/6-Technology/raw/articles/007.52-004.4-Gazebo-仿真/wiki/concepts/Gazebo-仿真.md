---
title: "Gazebo 仿真"
aliases: [Gazebo, gazebosim, 仿真器]
type: concept
udc: "007.52:004.4"
tags: [gazebo, simulation]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# Gazebo 仿真

Gazebo 是由 [[Open-Robotics|Open Robotics]] 维护的开源机器人仿真器，提供物理引擎、传感器模型、渲染与插件系统，让机器人在虚拟环境中开发与验证。

## 两版谱系

- [[Gazebo-Classic|Gazebo Classic]]：旧单体外壳（≤ Gazebo 11）
- [[新版Gazebo-Ignition|新版 Gazebo]]：模块化 `gz-*`（Fortress/Harmonic/Ionic/Jetty）

## 核心组成

- [[世界-World|世界]]：场景容器（物理/灯光/地面）
- [[SDF-仿真描述格式|SDF]] / [[URDF-统一机器人描述格式|URDF]]：模型描述
- [[插件-Plugin|插件]]：扩展机制
- [[传感器模型|传感器]]：感知模型
- [[ros_gz-桥接|ros_gz]]：与 [[ROS2]] 集成
