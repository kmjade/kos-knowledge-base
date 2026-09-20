---
title: "629.7 飞控知识库"
aliases: [飞控知识库, Flight Controller KB, 飞行控制知识库]
udc: "629.7"
tags: [flight-control, px4, ardupilot, betaflight, drone, uav, mavlink]
created: 2026-09-10
updated: 2026-09-19
---

# 629.7 飞控知识库

> 飞控（Flight Controller）是飞行器的「小脑」——一个硬实时的「感知 → 估计 → 控制 → 执行」闭环系统，把姿态稳定、导航与安全冗余做成成品。本知识库覆盖 PX4 / ArduPilot / Betaflight 三大开源生态，以及姿态估计、PID 级联控制、电机混控、MAVLink、与 ROS 2 协同、云台稳定与空中底盘。
> 定位为本项目的「空中/云台小脑」参照——与地面 micro-ROS 小脑是同一控制层槽位的不同域实现。数据更新至 2026-09。

## 快速导航

| #  | 章节 | 核心内容 |
|:-:|------|----------|
| 01 | [[01-飞控导论]] | 飞控 vs 开发板、三大生态总览、适用场景 |
| 02 | [[02-架构与原理]] | 感知→估计→控制→执行闭环、硬件分层 |
| 03 | [[03-硬件平台]] | Pixhawk/Cube、STM32 F4/F7/H7、IMU/气压/GPS、ESC |
| 04 | [[04-姿态估计]] | EKF、互补滤波、Mahony、磁力计融合 |
| 05 | [[05-控制回路]] | PID 级联（角速度→姿态→位置）、调参 |
| 06 | [[06-电机混控与动力]] | multirotor mixer、多旋翼构型、DShot |
| 07 | [[07-自动驾驶栈]] | PX4（NuttX/uORB）、ArduPilot（ChibiOS）、Betaflight |
| 08 | [[08-通信协议]] | MAVLink、地面站 QGC/Mission Planner、数传 |
| 09 | [[09-安全与故障处理]] | failsafe、RTL、geofence、冗余 |
| 10 | [[10-与ROS2协同]] | uXRCE-DDS、mavros、接口契约收敛 |
| 11 | [[11-云台与空中底盘]] | gimbal 姿态稳定、空中作业平台 |
| 12 | [[12-选型与资源]] | 三生态对比、官方文档、社区 |

## 学习路径

参见 [[飞控学习路径|飞控学习路径]]（从硬件认知到空中作业实战）。

## 知识地图

参见 [[飞控知识地图|飞控知识地图]]。

## 资源

参见 [[12-选型与资源]]。

## 关联

[[629.7-FlightControl-飞控]] · [[3 Resources/6-Technology/raw/articles/681.5-microROS/681.5-microROS|681.5 micro-ROS 知识库]] · [[3 Resources/6-Technology/raw/articles/681.5-UGV/681.5-UGV|681.5 UGV 知识库]] · [[3 Resources/6-Technology/raw/articles/681.5-RoboMaster/681.5-RoboMaster|681.5 RoboMaster]]
