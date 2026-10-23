---
title: "micro-ROS Agent"
aliases: [micro-ros-agent, Agent]
type: concept
udc: "681.5"
tags: [micro-ros, ros2]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# micro-ROS Agent

## 定义

micro-ROS Agent 是运行在上位机/主机上的桥接进程，把 MCU 侧 [[micro-ROS]] client 的实体（节点/发布者/订阅者）代理进 ROS 2 DDS 图。支持串口（`serial --dev /dev/ttyUSB0`）、UDP（`udp4 --port 8090`）、TCP 传输，常以 Docker（`microros/micro-ros-agent:humble`）运行，同一时刻只能跑一个实例。

## 相关

[[micro-ROS]] · [[Micro-XRCE-DDS]] · [[Transport-传输]] · [[04-Agent与传输]]

## Sources

[[source-yahboom]] · [[source-microROS-docs]]
