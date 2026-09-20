---
title: "04 GPIO 与外围接口"
aliases: [GPIO & Peripherals, General Purpose Input Output]
udc: "004.165"
tags: [raspberry-pi, gpio, hardware]
created: 2026-09-05
updated: 2026-09-05
---

# 04 GPIO 与外围接口

## 40-pin GPIO 引脚定义

树莓派自 Pi 1 B+ 起使用标准 **40-pin GPIO 排针**（2×20，2.54mm 间距）。

### 引脚功能分类

| Pin# | 名称 | 功能 |
|:----:|------|------|
| 1, 17 | 3.3V | 3.3V 电源输出（最大 50mA） |
| 2, 4 | 5V | 5V 电源输出（直通 USB 供电） |
| 6, 9, 14, 20, 25, 30, 34, 39 | GND | 接地 |
| 3, 5 | GPIO 2/3（SDA1/SCL1） | I²C 总线（默认带 1.8kΩ pull-up） |
| 8, 10 | GPIO 14/15（TXD0/RXD0） | UART 串口 |
| 9, 11 | GPIO 9/11（SPI0） | SPI0 |
| 12 | GPIO 18 | PCM_CLK / PWM0 |
| 19, 21, 23, 24, 26 | GPIO 10/9/11/8/7 | SPI0 |
| 27, 28 | GPIO 0/1（ID_SD/ID_SC） | HAT EEPROM 通信（I²C） |
| 其余 | GPIO 4-27 | 通用数字 I/O |

> 使用 `pinout` 命令可在终端显示交互式 GPIO 图。

## ⚠️ 3.3V 逻辑电平警告

| 参数 | 规格 | 注意 |
|------|------|------|
| **GPIO 逻辑电平** | **3.3V** | 非 5V 容忍！ |
| **最大输出电流** | 16mA per pin，总和 50mA | 超过可能烧毁 GPIO |
| **输入容忍** | 最高 3.3V | **接 5V 信号 = 永久损坏！** |

> **致命错误**：将 5V 信号（如 Arduino）直接连到 Pi 的 GPIO 输入引脚会烧毁 SoC。务必使用**逻辑电平转换器**（Level Shifter，如 TXS0108E）或**分压电阻**（1kΩ + 2kΩ）把 5V 降至 3.3V。

## GPIO 编程库比较

| 库 | 语言 | 特点 | 活跃维护 | 推荐度 |
|----|:----:|------|:-------:|:------:|
| **gpiozero** | Python | 高级 API、设备抽象、文档极佳 | ✅ | ⭐⭐⭐ |
| **RPi.GPIO** | Python | 经典、简单、低级 | ⚠️ 维护放缓 | ⭐⭐ |
| **libgpiod** | C/Python | 基于 Linux GPIO 子系统、未来标准 | ✅ | ⭐⭐⭐ |
| **pigpio** | C/Python | DMA 硬件定时 PWM、远程 GPIO | ✅ | ⭐⭐⭐（精密控制） |
| **WiringPi** | C | 类 Arduino 风格 | ❌ 已弃用 | ⭐（不推荐新项目） |

## gpiozero 快速入门

```python
from gpiozero import LED, Button
from signal import pause

# LED 闪烁
led = LED(17)      # GPIO 17
led.blink(0.5)     # 0.5 秒间隔闪烁

# 按钮控制 LED
button = Button(2)  # GPIO 2
button.when_pressed = led.on
button.when_released = led.off

pause()  # 保持程序运行
```

## PWM（脉冲宽度调制）

Pi 提供两种 PWM：

| 类型 | GPIO | 特点 |
|------|------|------|
| **硬件 PWM** | GPIO 12/13（PWM0），GPIO 18/19（PWM1） | 精确、稳定（推荐） |
| **软件 PWM** | 任意 GPIO | 灵活、但精度受 CPU 负载影响 |

```python
from gpiozero import PWMLED
led = PWMLED(18)   # 硬件 PWM0
led.value = 0.5    # 50% 亮度
led.pulse()        # 呼吸灯效果
```

## 上下拉电阻（Pull-up / Pull-down）

| 设定 | 效果 |
|------|------|
| **Pull-up**（默认高电平） | 未连接时读取为 HIGH，按下按钮接地 → LOW |
| **Pull-down**（默认低电平） | 未连接时读取为 LOW，按下按钮接 VCC → HIGH |

```python
from gpiozero import Button
btn = Button(2, pull_up=True)   # 内部 pull-up（默认）
btn = Button(2, pull_up=False)  # 内部 pull-down
```

> gpiozero 默认使用内部 pull-up。Pi 所有 GPIO 内置可编程上下拉（~50kΩ）。

## HAT 扩展板

HAT（Hardware Attached on Top）是树莓派官方扩展板标准：40-pin 直插 + EEPROM 自动识别，系统开机自动加载对应设备树。HAT+ 是 Pi 5 时代的新标准，支持更大功率与更灵活安装。

## GPIO 引脚图速查（关键引脚）

```
    3.3V  (1)  (2)  5V
  SDA1/GPIO2  (3)  (4)  5V
  SCL1/GPIO3  (5)  (6)  GND
     GPIO4  (7)  (8)  GPIO14/TXD
       GND  (9)  (10) GPIO15/RXD
    GPIO17 (11)  (12) GPIO18/PWM0
    GPIO27 (13)  (14) GND
    GPIO22 (15)  (16) GPIO23
       3.3V (17)  (18) GPIO24
   SPI_MOSI (19)  (20) GND
   SPI_MISO (21)  (22) GPIO25
   SPI_SCLK (23)  (24) SPI_CE0
       GND (25)  (26) SPI_CE1
  ID_SD/I2C (27)  (28) ID_SC/I2C
     GPIO5 (29)  (30) GND
     GPIO6 (31)  (32) GPIO12/PWM0
    GPIO13 (33)  (34) GND
    GPIO19 (35)  (36) GPIO16
    GPIO26 (37)  (38) GPIO20/PCM
       GND (39)  (40) GPIO21/PCM
```

> 完整引脚图请使用 `pinout` 命令查看。

## 关联

[[05-传感器与执行器]] · [[06-通信协议]] · [[wiki/concepts/GPIO-通用输入输出|GPIO 概念页]]
