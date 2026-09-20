---
title: "RoboMaster 快速入门"
aliases: [RoboMaster Quick Start, RoboMaster 快速入门指南]
udc: "681.5"
tags: [robomaster, sdk, 快速入门]
created: 2026-09-17
updated: 2026-09-17
---

# RoboMaster 快速入门

> 00 级入口，三分钟上手。深度学习路线见 [[RoboMaster知识地图]]，SDK 细节见 [[RoboMaster SDK技术文档]]。

## 1. 这是什么

RoboMaster 是**大疆（DJI）教育机器人平台**，把竞技机器人简化成量产教育产品，支持 **Scratch + Python**。Python 侧用官方 `robomaster` SDK 控制底盘/云台/射击/图传。

## 2. 产品线（选型）

| 产品 | 定位 | 特点 |
|------|------|------|
| **S1** | 首款智能教育机器人 | 全向移动、水弹射击、FPV（战士形态，摄像头在云台） |
| **EP** | 教育拓展套装 | 开放官方 SDK、机械臂/机械爪、第三方硬件（可切战士/工程师形态） |
| **TT** | 教育无人机 | Tello EDU 升级、多机协同、AI |

> 底盘结构件（麦轮/装甲）S1↔EP 通用，但智能中控/运动控制器硬件不同、**不可互换**。

## 3. 三步上手

**① 安装**（Python 3.6.6–3.8.9，64 位）

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple robomaster
```

**② 连接**（四种方式，首次用 WiFi 直连）

```python
from robomaster import robot
ep = robot.Robot()
ep.initialize(conn_type="ap")                        # WiFi 直连
# ep.initialize(conn_type="sta", ip="192.168.2.1")   # 路由器模式（开发调试）
# ep.initialize(conn_type="usb")                     # USB
# ep.initialize(conn_type="uart", uart_name="...")   # UART（生产，最稳）
```

**③ 第一个程序**（拿版本 → 关闭）

```python
ep = robot.Robot(); ep.initialize(conn_type="ap")
print(ep.get_version())
ep.close()
```

## 4. 核心模块速查

| 模块 | 用途 | 示例 |
|------|------|------|
| `robot` | 核心（初始化/版本/SN/电量） | `ep.get_battery()` |
| `chassis` | 底盘 | `ep_chassis.drive_speed(x=0.5, y=0, z=0)` |
| `gimbal` | 云台 | `ep_gimbal.drive_speed(pitch=10, yaw=10)` |
| `blaster` | 发射器 | `ep_blaster.fire()` |
| `camera` / `vision` | 图传 / 智能识别 | `ep_camera.start_video_stream(display=True)` |
| `led` / `armor` / `battery` | 灯效 / 装甲 / 电量 | `ep_led.set_led(comp="all", r=255, g=0, b=0)` |

## 5. 底盘控制（最常用）

- `drive_speed(x, y, z, timeout)`：**速度**控制（x/y m/s 平移，z °/s 原地旋转）
- `move(x, y, z)`：**相对位移**（x/y m，z °，相对当前位置）
- 订阅回调拿位姿：`sub_position`（x/y/yaw 航位推算）、`sub_attitude`（pitch/roll/yaw）

## 6. 下一步（学习路线）

| 层级 | 内容 |
|:--:|------|
| L2 | SDK 安装、连接机器人（`02-安装与环境`） |
| L3 | 底盘/云台/射击/图传（`03-04`） |
| L4 | 传感器/识别 + SDK 编程（`05-06`） |
| L5 | 明文 SDK / 多机编队 / 开发板 / RoboRTS（`10-13`） |

## 关联

[[RoboMaster知识地图]] · [[01-RoboMaster导论]] · [[RoboMaster SDK技术文档]]
