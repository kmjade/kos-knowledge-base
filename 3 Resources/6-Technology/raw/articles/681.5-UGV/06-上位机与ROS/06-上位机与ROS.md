---
title: "06 上位机与 ROS"
aliases: [Host Computer, ROS, 上位机]
udc: "681.5"
tags: [ugv02, host, ros]
created: 2026-09-05
updated: 2026-09-05
---

# 06 上位机与 ROS

## 支持的上位机

| 上位机 | 说明 |
|------|------|
| 树莓派 | 主流 Linux 上位机 |
| Jetson Nano / Orin Nano | NVIDIA AI 边缘计算 |
| 地平线旭日 X3 | 国产 AI 边缘计算 |

## 通信

上位机通过**串口**与 ESP32 下位机通信，下发 JSON 指令。

## ROS 控制

- 下位机支持 `CMD_ROS_CTRL`（ROS 控制指令）
- 上位机可运行 ROS2，将 `/cmd_vel` 转换为 JSON 指令驱动底盘
- 六轮四驱底盘适配 ROS2 差速/全向运动学

## 关联

[[05-通信方式]] · [[07-扩展与二次开发]] · [[上位机-Host-Computer|上位机]] · [[ROS控制-ROS-Control|ROS 控制]]
