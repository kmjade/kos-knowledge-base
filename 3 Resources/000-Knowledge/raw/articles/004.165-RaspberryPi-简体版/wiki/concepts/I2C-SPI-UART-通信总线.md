---
title: "I²C / SPI / UART 通信总线"
aliases: [I2C SPI UART, 通信总线, 通信协议]
type: concept
udc: "004.165"
tags: [raspberry-pi, i2c, spi, uart]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# I²C / SPI / UART 通信总线

## 定义

树莓派与传感器、外设、MCU 之间最常用的三种串行通信协议，各有适用场景。

## 对比

| 协议 | 线数 | 速率 | 拓扑 | 典型用途 |
|------|:----:|------|------|----------|
| **I²C** | 2（SDA/SCL） | 100kHz–1MHz | 多从机（地址） | BME280、MPU6050 |
| **SPI** | 4 | 数十 MHz | 多从机（片选） | 屏幕、高速 ADC |
| **UART** | 2（TX/RX） | 115200 | 点对点 | GPS、MCU 通信 |

## 要点

- **I²C**：自带上拉，7 位地址寻址，`i2cdetect -y 1` 扫描，Python 用 `smbus2`。
- **SPI**：全双工高速，CS 片选区分从机，Python 用 `spidev`。
- **UART**：异步点对点，注意 3.3V 电平；Pi 5 由 RP1 接管，不再与蓝牙冲突。
- **1-Wire**（补充）：单数据线，用于 DS18B20，需 `dtoverlay=w1-gpio`。

## 相关

[[GPIO-通用输入输出|GPIO]] · [[HAT-扩展板|HAT]] · [[05-传感器与执行器]]

## Sources

[[source-RaspberryPi-com]] · [[06-通信协议]]
