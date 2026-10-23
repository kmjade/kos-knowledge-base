---
title: "Raspberry Pi Pico 2"
aliases: [Pico 2, Raspberry Pi Pico 2, Pico 2 W, RP2350]
type: entity
entity_type: product
udc: "004.165"
tags: [raspberry-pi, mcu, pico]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Raspberry Pi Pico 2

基于自研 RP2350 微控制器的开发板，树莓派进军 MCU 市场的第二代产品，不运行 Linux，用 MicroPython / C / C++ 做实时控制。

## 核心规格

| 参数 | 规格 |
|------|------|
| SoC | RP2350 |
| CPU | 双 Cortex-M33 @150MHz **或** 双 Hazard3 RISC-V @150MHz（二选一） |
| SRAM | 520KB |
| Flash | 4MB QSPI |
| GPIO | 26 个多功能引脚 |
| 外设 | 2× UART、2× SPI、2× I²C、24× PWM、12× PIO 状态机、ADC |
| 安全 | Arm TrustZone、安全启动、SHA-256 加速、真随机数、毛刺检测 |
| 电源 | 1.8–5.5V |
| 价格 | $5（Pico 2）/ $7（Pico 2 W） |

## Pico 2 W 无线版

在 Pico 2 基础上集成 Infineon **CYW43439** 模组：2.4GHz WiFi 4（802.11n）+ BT 5.2 / BLE，支持 WPA3 与 SoftAP（最多 4 客户端），通过 SPI（约 33MHz）连接 RP2350。

## 定位

面向实时控制、传感器读取、电机驱动与自定义外设，可与 Pi（SBC）协作：Pi 做上位机，Pico 做下位机。兼容早期 Pico 引脚。

## 相关

[[Raspberry-Pi-5|Pi 5]] · [[Raspberry-Pi-Zero-2-W|Zero 2 W]] · [[Raspberry-Pi-Platform-树莓派平台|Raspberry Pi Platform]]

## Sources

[[source-RaspberryPi-com]] · [[02-硬件平台与型号]]
