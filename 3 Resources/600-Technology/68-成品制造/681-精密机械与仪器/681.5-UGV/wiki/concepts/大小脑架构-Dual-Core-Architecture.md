---
title: "大小脑架构 Dual-Core Architecture"
aliases: [Dual-Core Architecture, 大小脑架构]
type: concept
udc: "681.5"
tags: [ugv, architecture]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 大小脑架构 Dual-Core Architecture

## 定义

大小脑架构是 UGV Rover PT 的**双层架构**：下位机 ESP32（小脑）负责电机 PID/IMU/OLED/舵机等实时控制，上位机 Jetson Orin Nano（大脑）负责高阶算力与 AI 视觉，两层通过通信接口协同。

## 相关

[[上位机-Host-Computer|上位机]] · [[ESP32-下位机|ESP32]] · [[11-UGV-Rover-PT-AI-Kit]]

## Sources

[[source-UGV-Wiki]] · [[11-UGV-Rover-PT-AI-Kit]]
