---
title: "01 micro-ROS 导论"
udc: "681.5"
tags: [micro-ros, ros2]
created: 2026-09-10
updated: 2026-09-10
---

# 01 micro-ROS 导论

## 是什么

[[micro-ROS|micro-ROS]] 是 ROS 2 官方生态中面向**微控制器（MCU）**的分支，目标是把 ROS 2 的编程模型（节点、话题、服务、动作）下沉到 ESP32、STM32 这类资源受限设备上，让它们直接以 ROS 2 节点身份接入 DDS 数据图。

## 解决什么问题

传统 ROS 2 需要 Linux + 完整 DDS 栈，跑不动 MCU。此前 MCU 只能用 `rosserial`（非标、单主、低效）或私有 JSON 协议（如 [[3 Resources/6-Technology/raw/articles/681.5-UGV/04-JSON指令集/04-JSON指令集|UGV JSON 指令集]]）。micro-ROS 用轻量的 [[Micro-XRCE-DDS|Micro XRCE-DDS]] 协议 + [[micro-ROS-Agent|Agent]] 桥接，让 MCU 侧代码与上位机侧代码**同构**——都写 ROS 2 API。

## 与 ROS 2 的关系

| 层 | 组件 | 跑在哪 |
|:--|:-----|:------|
| 上位机 | ROS 2（DDS 图 + 驱动 + 算法） | Pi / Jetson / PC |
| 桥 | [[micro-ROS-Agent\|micro-ROS Agent]] | 上位机（或独立容器） |
| 下位机 | micro-ROS Client（rcl/rclc） | ESP32-S3 等 MCU |

micro-ROS **不是** ROS 2 的替代，而是它的嵌入式延伸：上位机侧完全无感，看到的就是普通 topic。

## 适用场景

- 底盘驱动（电机/编码器）→ 发布 `/odom`、订阅 `/cmd_vel`
- 传感器采集（IMU/LiDAR/编码器）→ 发布标准 `sensor_msgs`
- 遥操作、多机集群、工业/教育机器人

## 相关

[[02-架构与原理]] · [[09-硬件平台]] · [[3 Resources/6-Technology/raw/articles/681.5-microROS/wiki/index|Wiki 索引]]

## Sources

[[source-microROS-docs]] · [[source-yahboom]]
