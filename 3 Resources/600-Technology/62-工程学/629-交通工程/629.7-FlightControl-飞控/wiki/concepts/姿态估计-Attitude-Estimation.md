---
title: "姿态估计 Attitude Estimation"
aliases: [姿态估计, Attitude Estimation, 姿态解算]
type: concept
udc: "629.7"
tags: [flight-control, estimation, imu]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# 姿态估计 Attitude Estimation

## 定义

姿态估计是飞控从传感器原始数据解算出机体姿态（roll/pitch/yaw）与位置/速度的过程。核心策略是「陀螺短时积分 + 加速计/磁力计长时校正」互补融合，算法从简单 [[04-姿态估计|互补滤波]] 到 [[EKF]]。

## 相关

[[EKF]] · [[04-姿态估计]] · [[05-控制回路]] · [[03-硬件平台]]

## Sources

[[source-px4-docs]]
