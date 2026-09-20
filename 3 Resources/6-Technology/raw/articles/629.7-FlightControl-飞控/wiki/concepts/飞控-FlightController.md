---
title: "飞控 Flight Controller"
aliases: [飞控, Flight Controller, FC]
type: concept
udc: "629.7"
tags: [flight-control, uav]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# 飞控 Flight Controller

## 定义

飞控是飞行器的硬实时「感知 → 估计 → 控制 → 执行」闭环系统，把 [[姿态估计-Attitude-Estimation|姿态估计]]、[[PID级联控制-Cascade-PID|控制回路]] 与 [[failsafe]] 做成成品。它是飞行器的「小脑」，本质是「预装好姿态控制闭环的开发板」。

## 相关

[[02-架构与原理]] · [[PX4]] · [[ArduPilot]] · [[Betaflight]] · [[01-飞控导论]]

## Sources

[[source-px4-docs]] · [[source-ardupilot-docs]]
