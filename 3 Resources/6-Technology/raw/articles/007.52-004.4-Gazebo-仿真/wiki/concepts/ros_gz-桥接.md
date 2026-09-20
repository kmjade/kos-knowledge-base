---
title: "ros_gz 桥接"
aliases: [ros_gz, ros_gz_bridge, 桥接]
type: concept
udc: "007.52:004.4"
tags: [gazebo, simulation, ros2]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# ros_gz 桥接

`ros_gz` 是 [[新版Gazebo-Ignition|新版 Gazebo]] 与 [[ROS2]] 的集成包，`ros_gz_bridge` 在 Gazebo Transport 与 ROS2 之间双向转发话题。

## 关键点

- `parameter_bridge` 声明映射：`ROS2话题@消息类型@gz消息类型`
- `@[` 数组后缀（如 `JointState[`）
- `B`/`F` 指定方向
- 仿真内话题 ↔ ROS2 话题（`/odom`、`/tf`、`/scan`、`/clock`）

## 相关

- [[Gazebo-仿真|Gazebo 仿真]]
- [[ROS2]]
