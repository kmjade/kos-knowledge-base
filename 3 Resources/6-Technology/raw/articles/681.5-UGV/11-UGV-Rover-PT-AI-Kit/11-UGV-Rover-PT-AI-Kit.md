---
title: "11 UGV Rover PT Jetson Orin AI Kit"
aliases: [UGV Rover PT, Jetson Orin AI Kit, UGV AI 套件]
udc: "681.5"
tags: [ugv, waveshare, jetson, ai-vision]
created: 2026-09-05
updated: 2026-09-05
---

# 11 UGV Rover PT Jetson Orin AI Kit

## 什么是 UGV Rover PT AI Kit

UGV Rover PT Jetson Orin AI Kit 是微雪基于**六轮四驱架构**的开源移动机器人 AI 套件，采用「大小脑架构」：ESP32 下位机 + Jetson Orin Nano 上位机，配备 2 自由度云台与 500 万像素摄像头，支持机器视觉。

## 大小脑架构

| 层级 | 芯片 | 职责 |
|------|------|------|
| 下位机（小脑） | ESP32 | 电机 PID、IMU、OLED、舵机、灯光 |
| 上位机（大脑） | Jetson Orin Nano | 高阶算力、AI 视觉、策略 |

## 硬件

| 部件 | 说明 |
|------|------|
| 底盘 | 六轮四驱，2mm 铝合金外壳 |
| 电机 | 4× 编码器减速电机（闭环速度控制） |
| 速度 | 最高 1.3 m/s |
| 供电 | 3S 锂电池 UPS（边充边用） |
| 云台 | 2 自由度大扭矩（横向 360°） |
| 摄像头 | 160° 超广角、500 万像素 |
| 补光 | 高亮度 LED 聚光灯 |
| 扩展 | 鱼骨导轨 |

## 软件与视觉

| 功能 | 说明 |
|------|------|
| WEB 应用 | Flask + Python，实时视频 + 状态显示 |
| 教程 | JupyterLab 交互式教程 |
| 机器视觉 | 颜色/物体/手势识别、人脸/运动检测 |
| 远程控制 | 蒲公英/Cpolar/LocalTunnel 跨平台 |

## 初始化与使用

1. 手柄使用（首次使用）
2. 网络配置
3. 固件更新（ESP32）
4. 上位机初始化（Jetson Orin Nano 系统安装 + 软件程序）

## 关联

[[02-硬件与架构]] · [[06-上位机与ROS]] · [[wiki/concepts/大小脑架构-Dual-Core-Architecture|大小脑架构]]
