---
title: "下位机 MCU"
aliases: [下位机, 小脑, MCU]
type: concept
udc: "681.5"
tags: [micro-ros, mcu]
created: 2026-09-10
updated: 2026-09-19
compiled: true
reviewed: false
---

# 下位机 MCU

## 定义

下位机（MCU，小脑）是本项目架构中的实时底层控制器（如 [[ESP32-S3]]），负责电机驱动、编码器、IMU/LiDAR 采集等时序敏感任务；上位机（Pi/Jetson，大脑）负责算法与规划。二者经 [[micro-ROS-Agent]] 在 ROS 2 DDS 图上对接，构成「大小脑」分工。

## 相关

[[micro-ROS]] · [[ESP32-S3]] · [[07-外设驱动]] · [[08-与上位机协同]]

## Sources

[[source-yahboom]]
