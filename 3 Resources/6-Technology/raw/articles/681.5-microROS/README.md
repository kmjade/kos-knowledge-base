---
title: "681.5 micro-ROS 知识库"
aliases: [micro-ROS 知识库, micro-ROS KB]
udc: "681.5"
tags: [micro-ros, ros2, esp32, robot, mcu]
created: 2026-09-10
updated: 2026-09-19
---

# 681.5 micro-ROS 知识库

> micro-ROS 是 ROS 2 官方面向微控制器（MCU）的生态，通过 Micro XRCE-DDS 把资源受限设备接入 ROS 2 DDS 图。本知识库覆盖架构原理、环境搭建、Agent 与传输、话题/服务/动作、外设驱动、与上位机协同、硬件平台、对比选型与实战。
> 定位为本项目的「小脑层」标准参照——把 RoboMaster SDK / UGV JSON / micro-ROS 三条协议线收敛到 ROS 2 topic。数据更新至 2026-09。

## 快速导航

| #  | 章节 | 核心内容 |
|:-:|------|----------|
| 01 | [[01-micro-ROS导论]] | 定位、与 ROS 2 关系、适用场景 |
| 02 | [[02-架构与原理]] | Micro XRCE-DDS、client-agent、DDS 三层 |
| 03 | [[03-环境搭建]] | ESP-IDF、micro-ROS component、工具链 |
| 04 | [[04-Agent与传输]] | 串口/UDP/WiFi、micro-ros-agent 配置 |
| 05 | [[05-话题与通信]] | pub/sub、自定义消息、rclc |
| 06 | [[06-服务与动作]] | service/action、executor |
| 07 | [[07-外设驱动]] | 电机/编码器/IMU/LiDAR/舵机 → topic |
| 08 | [[08-与上位机协同]] | Pi/Jetson 大小脑、Docker、rosbridge |
| 09 | [[09-硬件平台]] | ESP32-S3 / Yahboom 板 / STM32 |
| 10 | [[10-对比与选型]] | micro-ROS vs rosserial vs RoboMaster SDK vs UGV JSON |
| 11 | [[11-应用与实战]] | 遥操作、多机、案例 |
| 12 | [[12-资源收集]] | 官方文档、教程、代码 |

## 学习路径

1. **入门** → [[01-micro-ROS导论]] → [[02-架构与原理]]
2. **环境** → [[03-环境搭建]] → [[04-Agent与传输]]
3. **通信** → [[05-话题与通信]] → [[06-服务与动作]]
4. **落地** → [[07-外设驱动]] → [[08-与上位机协同]] → [[09-硬件平台]] → [[10-对比与选型]] → [[11-应用与实战]]

## 知识地图

参见 [[微ROS知识地图|micro-ROS 知识地图]]。

## 学习路径

参见 [[学习路径|micro-ROS 学习路径]]（6 阶段，从环境搭建到机器人控制）。

## 例程集

参见 [[例程索引|ESP32 例程集]]（45 个 Yahboom 官方教程例程，8 模块：开发环境/基础外设/电机/传感器/通信存储/MicroROS 基础/ROS2 课程/机器人控制，含完整 C 代码）。

## 资源

参见 [[12-资源收集]]。

## 关联

[[681.5-microROS]] · [[3 Resources/6-Technology/raw/articles/681.5-UGV/681.5-UGV|681.5 UGV 知识库]]
