---
title: "rmw"
aliases: [rmw_microxrcedds, ROS Middleware]
type: concept
udc: "681.5"
tags: [micro-ros, ros2]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# rmw

## 定义

rmw（ROS Middleware Interface）是 ROS 2 与底层 DDS 实现之间的抽象接口层。[[micro-ROS]] 使用 `rmw_microxrcedds` 作为其 rmw 实现，把 ROS 2 API 映射到 [[Micro-XRCE-DDS]] 协议，从而在 MCU 上运行。

## 相关

[[micro-ROS]] · [[Micro-XRCE-DDS]] · [[DDS]] · [[rclc]]

## Sources

[[source-microROS-docs]]
