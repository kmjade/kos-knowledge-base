---
title: "Camera Module 摄像头模组"
aliases: [Camera Module, 摄像头模组, AI Camera]
type: concept
udc: "004.165"
tags: [raspberry-pi, camera, ai]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Camera Module 摄像头模组

## 定义

树莓派官方摄像头模组通过 MIPI CSI 排线连接，配合 **libcamera** 软件栈进行图像采集与处理。

## 型号

| 型号 | 传感器 | 规格 | 说明 |
|------|--------|------|------|
| Camera Module 3 | Sony IMX708 | 12MP、自动对焦、HDR | 主流视觉应用 |
| AI Camera | Sony IMX500 | 12.3MP、**片上 NPU**、RP2040 协处理器 | 端侧 AI，图像不离开芯片 |

## 软件栈

- **libcamera**：现代相机栈（`libcamera-still` / `libcamera-vid`），取代旧版 raspistill / raspivid。
- **OpenCV / Picamera2**：计算机视觉开发。

## 相关

[[HAT-扩展板|AI HAT+]] · [[Raspberry-Pi-5|Pi 5]] · [[07-多媒体与摄像头]]

## Sources

[[source-RaspberryPi-com]] · [[07-多媒体与摄像头]]
