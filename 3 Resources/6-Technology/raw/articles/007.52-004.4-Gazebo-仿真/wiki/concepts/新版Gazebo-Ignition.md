---
title: "新版 Gazebo（Ignition）"
aliases: [Ignition, gz-sim, 新版Gazebo]
type: concept
udc: "007.52:004.4"
tags: [gazebo, simulation]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# 新版 Gazebo（Ignition）

新版 Gazebo 是 [[Gazebo-仿真|Gazebo]] 的模块化重构，原代号「Ignition」，后产品名改回 Gazebo，用城市名做发行（Fortress/Harmonic/Ionic/Jetty），命令 `gz sim`。

## 模块化架构

`gz-sim`（仿真）+ `gz-physics`（物理）+ `gz-rendering`（渲染）+ `gz-sensors`（传感器）+ `gz-transport`（通信）+ `gz-gui` + `gz-plugin` + `gz-launch` + `gz-fuel`。

## 与 ROS2 集成

通过 [[ros_gz-桥接|ros_gz]] bridge；ROS2 Jazzy ↔ Harmonic 为推荐组合。

## 相关

- [[Gazebo-Classic|Gazebo Classic]]
- [[Gazebo-仿真|Gazebo 仿真]]
