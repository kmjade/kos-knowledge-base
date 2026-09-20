---
title: "SBC 单板计算机 Single Board Computer"
aliases: [SBC, Single Board Computer, 单板计算机]
type: concept
udc: "004.165"
tags: [raspberry-pi, sbc]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# SBC 单板计算机 Single Board Computer

## 定义

单板计算机（Single Board Computer, SBC）把 CPU、内存、存储接口与 I/O 集成在一块 PCB 上，插电即可运行完整操作系统。树莓派是最具代表性的 SBC，特点是信用卡大小、低成本、可运行 Linux。

## 核心特征

| 特征 | 说明 |
|------|------|
| 集成度 | 一块板 = 一台主机 |
| 操作系统 | 完整 Linux（Raspberry Pi OS / Ubuntu） |
| 功耗 | 数瓦级，适合长时运行 |
| 成本 | 数十到上百美元 |
| 扩展 | 40-pin GPIO + USB + HDMI + 摄像头/显示接口 |

## SBC vs MCU

| 维度 | SBC | MCU |
|------|-----|-----|
| 芯片 | 应用处理器（Cortex-A） | 微控制器（Cortex-M / RISC-V） |
| 系统 | Linux | 无 OS / MicroPython |
| 内存 | GB 级 | KB 级 |
| 场景 | 桌面、服务器、AI、多媒体 | 实时控制、传感器、电机 |

## 代表产品

- 树莓派系列（Pi 5 / 500 / Zero 2 W）
- 其他 SBC：Orange Pi、Banana Pi、Rock Pi、Jetson（带 GPU 的 AI SBC）

## 相关

[[Raspberry-Pi-Platform-树莓派平台|Raspberry Pi Platform]] · [[GPIO-通用输入输出|GPIO]] · [[Raspberry-Pi-5|Pi 5]]

## Sources

[[source-RaspberryPi-com]] · [[01-树莓派导论]]
