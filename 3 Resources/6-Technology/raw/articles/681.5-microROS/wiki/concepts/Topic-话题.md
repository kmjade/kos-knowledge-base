---
title: "Topic 话题"
aliases: [话题, Topic]
type: concept
udc: "681.5"
tags: [micro-ros, ros2]
created: 2026-09-10
updated: 2026-09-19
compiled: true
reviewed: false
---

# Topic 话题

## 定义

Topic 是 ROS 2 / [[micro-ROS]] 最基础的发布/订阅通信实体，MCU 侧用 [[rclc]] 的 publisher/subscriber 发布或订阅话题（如 `/odom`、`/cmd_vel`）。标准消息类型（`sensor_msgs`、`nav_msgs`、`geometry_msgs`）是本项目「接口契约」的载体。

## 相关

[[micro-ROS]] · [[rclc]] · [[Service-服务]] · [[05-话题与通信]]

## Sources

[[source-microROS-docs]]
