---
title: "uORB"
aliases: [Micro Object Request Broker]
type: concept
udc: "629.7"
tags: [flight-control, px4, ipc]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# uORB

## 定义

uORB 是 [[PX4]] 的进程间消息总线（IPC），各模块通过发布/订阅 uORB 主题（vehicle_attitude、vehicle_odometry、trajectory_setpoint 等）解耦通信。这是 PX4 模块化架构的基础，也是 [[10-与ROS2协同|ROS 2 桥接]] 时映射到 ROS 消息的来源。

## 相关

[[PX4]] · [[02-架构与原理]] · [[10-与ROS2协同]]

## Sources

[[source-px4-docs]]
