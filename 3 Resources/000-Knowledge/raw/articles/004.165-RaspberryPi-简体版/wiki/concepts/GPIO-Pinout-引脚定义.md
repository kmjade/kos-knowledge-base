---
title: "GPIO Pinout 引脚定义"
aliases: [GPIO Pinout, 引脚定义, BCM 编号]
type: concept
udc: "004.165"
tags: [raspberry-pi, gpio]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# GPIO Pinout 引脚定义

## 两种编号方式

| 编号方式 | 说明 |
|----------|------|
| **BCM（Broadcom）** | 按 SoC 内部 GPIO 编号，推荐使用 |
| **Board（物理）** | 按排针物理位置 1–40 编号 |

> 编程时务必明确使用哪种编号。gpiozero 默认用 BCM 编号，例如 `LED(17)` 指 BCM 17。

## 常用引脚速查

| 功能 | 引脚（BCM） |
|------|-------------|
| 默认 I²C | SDA = GPIO2，SCL = GPIO3 |
| 默认 SPI0 | MOSI=10、MISO=9、SCLK=11、CE0=8、CE1=7 |
| 默认 UART | TX = GPIO14，RX = GPIO15 |
| 默认 1-Wire | GPIO4 |
| PWM（硬件） | GPIO12/13/18/19 |
| 常用数据 | GPIO17/18/22/23/24/25/27 |

## 注意事项

- **3.3V 电平**：勿接 5V 信号。
- **上电状态**：部分引脚上电有默认状态（如 I²C 上拉），设计电路需注意。
- **查询工具**：命令行 `pinout`，或参考 [pinout.xyz](https://pinout.xyz/)。

## 相关

[[GPIO-通用输入输出|GPIO]] · [[I2C-SPI-UART-通信总线|I²C/SPI/UART]] · [[HAT-扩展板|HAT]]

## Sources

[[source-RaspberryPi-com]] · [[04-GPIO与外围接口]]
