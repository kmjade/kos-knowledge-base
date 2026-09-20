---
title: "定位与里程计"
aliases: [Localization, Odometry, 里程计, 定位, 里程计漂移]
type: concept
udc: "681.5"
tags: [robomaster, localization, odometry, 里程计]
created: 2026-09-17
updated: 2026-09-17
compiled: true
reviewed: false
---

# 定位与里程计

## 定义

定位（Localization）回答「机器人在哪」。RoboMaster 的 SDK 只给**航位推算（dead reckoning）**：`sub_position` 返回「上电以来」的 `(x, y, yaw)`，由轮编码器 + IMU 在 MCU 内融合积分得到，**无绝对参考系**。因此随时间产生**里程计漂移（odometry drift）**，需外部绝对定位补偿。

## 漂移的两个根源

1. **麦轮打滑**：45° 辊子在地面滑动，轮编码器读数 ≠ 地面位移，打滑率随地面材质/负载/速度非线性变化——比差速轮更严重的误差源；
2. **误差积分无界**：位置 = 速度×Δt 累加，常数偏差线性累积，航位推算本身无法自校正。

## 补偿路径

- **视觉绝对定位（AprilTag）**：S1 视觉标签为 **Tag25h9**（数字 0-9 + 字母 A-Z），用 RMVL/OpenCV 检测 + SolvePnP 求相机↔标签位姿 → 绝对定位，纠正漂移。
- **RoboRTS 激光/相机 SLAM**：另一条绝对定位路线（见 [[RoboRTS-框架]]）。
- 融合上常用 EKF（`robot_localization`）：轮式里程计 + IMU 作预测，视觉 Tag 位姿作测量更新。

## 相关

[[Chassis-底盘|底盘]] · [[Vision-视觉识别|视觉识别]] · [[RoboRTS-框架|RoboRTS]] · [[RoboMaster-SDK|SDK]]

## Sources

[[source-RoboMaster-Docs]] · [[source-RoboMaster-Deep]] · [[research-robomaster-chassis-2026-09-16|研究简报：RoboMaster 底盘]]
