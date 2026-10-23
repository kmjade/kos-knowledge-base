---
title: "Raspberry Pi Pico"
aliases: [Pi Pico, Raspberry Pi Pico, RP2040, RP2350]
type: entity
entity_type: product
udc: "004.165"
tags: [raspberry-pi, mcu, pico]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Raspberry Pi Pico

树莓派基金会 2021 年推出的首款微控制器开发板，搭载自研 RP2040 MCU 芯片。Pico 是 MCU（非 Linux SBC），定位于实时控制、传感器读取、低功耗嵌入式应用。2024 年推出 Pico 2，搭载新一代 RP2350 芯片。

## 核心规格对比

| 参数 | Pico / Pico W | Pico 2 / Pico 2 W |
|------|:------------:|:----------------:|
| **MCU** | RP2040 | RP2350 |
| **核心** | 2× Cortex-M0+ @ 133 MHz | 2× Cortex-M33 / RISC-V @ 150 MHz |
| **Flash** | 2MB（外挂 QSPI） | 4MB（外挂 QSPI） |
| **SRAM** | 264KB | 520KB |
| **GPIO** | 26-pin（3.3V） | 26-pin（3.3V） |
| **ADC** | 3 通道 12-bit | 4 通道 12-bit |
| **PIO** | 2× PIO（8 状态机） | 3× PIO（12 状态机） |
| **通信** | 2×UART/2×SPI/2×I²C | 2×UART/2×SPI/2×I²C |
| **USB** | USB 1.1 Device/Host | USB 1.1 Device/Host |
| **无线（W）** | WiFi 4（2.4GHz） | WiFi 4 + BT 5.2 |
| **价格** | $4 / $6（W） | $5 / $7（2W） |

## PIO（Programmable I/O）特色

RP2040/RP2350 的标志性创新：8/12 个独立状态机可在不占用 CPU 周期的情况下生成或解码任意通信协议。常用于产生 NeoPixel 波形、VGA 信号、自定义协议。

## 与 Pi SBC 的关系

| 维度 | Raspberry Pi 5（SBC） | Raspberry Pi Pico 2（MCU） |
|------|:--------------------:|:-------------------------:|
| **类型** | 单板计算机（Linux） | 微控制器（Bare metal） |
| **任务** | 多任务、AI、网络服务器 | 实时控制、低功耗传感器 |
| **协作场景** | UGV 上位机（ROS2） | UGV 下位机（电机控制） |

> Pico 适合低功耗实时控制，Pi SBC 适合复杂运算与联网。两者通过 UART/SPI/I²C 互补协作。完整 MCU 开发指南参见 004.16 嵌入式系统。

## 相关

[[Raspberry-Pi-Platform-树莓派平台|Raspberry Pi Platform]] · [[SBC-单板计算机|SBC]] · [[Raspberry-Pi-5|Pi 5]] · [[Raspberry-Pi-Pico-2|Pico 2]]

## Sources

[[source-RaspberryPi-com]] · [[02-硬件平台与型号]]
