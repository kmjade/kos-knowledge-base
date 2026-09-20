---
title: "URDF 统一机器人描述格式"
aliases: [URDF, Unified Robot Description Format]
type: concept
udc: "007.52:004.4"
tags: [gazebo, simulation, urdf]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# URDF 统一机器人描述格式

URDF（Unified Robot Description Format）是 [[ROS2]] 生态的机器人描述格式，用 link + joint 描述运动学，`robot_state_publisher` 据此发布 `/tf`。

## 与 SDF 关系

URDF 用于运动学/`/tf`；[[Gazebo-仿真|Gazebo]] 仿真时通过 `<gazebo>` 扩展标签补物理参数，或转成 [[SDF-仿真描述格式|SDF]]。

## 相关

- [[SDF-仿真描述格式|SDF]]
- [[ros_gz-桥接|ros_gz]]
