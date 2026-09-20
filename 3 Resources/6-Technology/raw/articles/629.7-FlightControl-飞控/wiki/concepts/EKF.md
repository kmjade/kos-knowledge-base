---
title: "EKF"
aliases: [扩展卡尔曼滤波, Extended Kalman Filter]
type: concept
udc: "629.7"
tags: [flight-control, estimation, ekf]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# EKF

## 定义

扩展卡尔曼滤波（Extended Kalman Filter）是飞控主流的[[姿态估计-Attitude-Estimation|状态估计]]算法，用「预测-更新」概率框架融合 IMU、GPS、气压计、磁力计、光流等多传感器，输出姿态、速度、位置及其协方差。PX4 的 EKF2 与 ArduPilot 均以 EKF 为核心估计器。

## 相关

[[姿态估计-Attitude-Estimation]] · [[04-姿态估计]] · [[PX4]] · [[ArduPilot]]

## Sources

[[source-px4-docs]]
