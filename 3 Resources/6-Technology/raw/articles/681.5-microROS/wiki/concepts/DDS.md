---
title: "DDS"
aliases: [Data Distribution Service, 数据分发服务]
type: concept
udc: "681.5"
tags: [ros2, dds]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# DDS

## 定义

DDS（Data Distribution Service）是 ROS 2 默认的中间件通信标准，以发布/订阅模型在分布式节点间分发数据。micro-ROS 通过 [[Micro-XRCE-DDS]] 让 MCU 侧的轻量 client 接入这个 DDS 图，而无需在 MCU 上运行完整 DDS 栈。

## 相关

[[micro-ROS]] · [[Micro-XRCE-DDS]] · [[rmw]] · [[02-架构与原理]]

## Sources

[[source-microROS-docs]]
