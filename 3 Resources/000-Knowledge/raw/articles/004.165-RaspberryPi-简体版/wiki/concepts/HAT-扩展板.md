---
title: "HAT 扩展板 Hardware Attached on Top"
aliases: [HAT, Hardware Attached on Top, 扩展板]
type: concept
udc: "004.165"
tags: [raspberry-pi, hat]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# HAT 扩展板 Hardware Attached on Top

## 定义

HAT（Hardware Attached on Top）是树莓派官方扩展板标准：直接插在 40-pin 排针上，通过板载 EEPROM 自动识别，系统开机自动加载对应设备树与驱动。

## 标准 vs 新标准

| 标准 | 说明 |
|------|------|
| HAT | 40-pin 直插 + EEPROM 识别（Pi 2 以来） |
| **HAT+** | Pi 5 时代新标准，支持更大功率、更灵活安装 |

## 常见 HAT

| HAT | 功能 |
|-----|------|
| AI HAT+（Hailo-8L/8） | 13 / 26 TOPS 边缘 AI 加速 |
| M.2 HAT+ | 为 Pi 5 增加 NVMe SSD |
| Sense HAT | 温湿压 + 陀螺仪 + LED 矩阵 |
| PoE HAT | 以太网供电 |

## 相关

[[GPIO-通用输入输出|GPIO]] · [[I2C-SPI-UART-通信总线|I²C/SPI/UART]] · [[Raspberry-Pi-5|Pi 5]]

## Sources

[[source-RaspberryPi-com]] · [[04-GPIO与外围接口]]
