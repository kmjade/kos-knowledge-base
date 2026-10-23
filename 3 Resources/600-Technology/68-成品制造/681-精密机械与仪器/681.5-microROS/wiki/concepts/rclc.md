---
title: "rclc"
aliases: [rclc, rcl + executor]
type: concept
udc: "681.5"
tags: [micro-ros, ros2]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# rclc

## 定义

rclc 是 [[micro-ROS]] 的 C 客户端库，= rcl（ROS Client Library）+ 轻量 executor，是 MCU 侧的编程接口。提供 publisher/subscriber/service/timer 等 API，用单线程 executor 轮询驱动回调，适配资源受限环境。

## 相关

[[micro-ROS]] · [[Topic-话题]] · [[rmw]] · [[05-话题与通信]]

## Sources

[[source-microROS-docs]]
