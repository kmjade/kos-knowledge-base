---
title: "GPIO 通用输入输出 General Purpose Input Output"
aliases: [GPIO, General Purpose Input Output]
type: concept
udc: "004.165"
tags: [raspberry-pi, gpio]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# GPIO 通用输入输出 General Purpose Input Output

## 定义

GPIO（General Purpose Input/Output）是树莓派 40-pin 排针提供的可编程数字引脚，允许用软件读取传感器状态或驱动执行器。它是树莓派与 Arduino / MCU 共享的核心能力，也是嵌入式应用的基础。

## 40-pin 引脚资源

| 类别 | 数量 | 说明 |
|------|:----:|------|
| 通用 GPIO | 26 | 可配置为输入/输出 |
| 3.3V 电源 | 2 | 最大 50mA |
| 5V 电源 | 2 | 直通 USB |
| GND | 8 | 共地 |
| I²C / SPI / UART | 专用 | 复用引脚 |
| ID EEPROM | 2 | HAT 自动识别 |

## 电气特性

| 参数 | 规格 | 风险 |
|------|------|------|
| 逻辑电平 | **3.3V** | 5V 信号直连会烧毁 SoC |
| 单脚最大电流 | 16mA | 超限永久损坏 |
| 总电流 | ~50mA | 需外接驱动 |
| 内部上/下拉 | ~50kΩ，可编程 | — |

## 编程库生态

| 库 | 层级 | 状态 |
|----|:----:|:----:|
| gpiozero | 高级 | ✅ 官方推荐 |
| libgpiod | 中级 | ✅ Linux 标准 |
| RPi.GPIO | 低级 | ⚠️ 维护放缓 |
| pigpio | 精密 | ✅ DMA 定时 |

## 相关

[[GPIO-Pinout-引脚定义|GPIO Pinout]] · [[I2C-SPI-UART-通信总线|I²C/SPI/UART]] · [[HAT-扩展板|HAT]]

## Sources

[[source-RaspberryPi-com]] · [[04-GPIO与外围接口]]
