---
title: "06 编程与 SDK"
aliases: [RoboMaster SDK, Python SDK]
udc: "681.5"
tags: [robomaster, sdk, python]
created: 2026-09-05
updated: 2026-09-05
---

# 06 编程与 SDK

## SDK 概述

官方 RoboMaster SDK（Python，`robomaster` 包），用于 EP 与 Tello Edu（TT），提供运动控制、飞行控制、智能识别、灯效、数据推送、视频流与音频流 API。

## 模块化设计

| 模块 | 功能 |
|------|------|
| robot | 核心对象/连接 |
| chassis | 底盘运动 |
| gimbal | 云台 |
| blaster | 射击 |
| camera | 图传视频流 |
| sensor | 传感器 |
| vision | 视觉识别 |
| led | 灯效 |
| arm / gripper | 机械臂/爪（EP） |
| flight | 飞行（TT） |

## 事件回调

SDK 采用**订阅回调**模式：

```python
def callback(data):
    print(data)

ep_sensor.sub_distance(freq=5, callback=callback)
```

- 数据推送（距离、击打、姿态、视觉）
- 事件回调（连接断开等）

## 编程流程

```python
from robomaster import robot

if __name__ == '__main__':
    ep = robot.Robot()
    ep.initialize(conn_type="ap")
    # ... 控制逻辑 ...
    ep.close()
```

## 关联

[[03-机器人基础]] · [[05-传感器与识别]] · [[wiki/concepts/RoboMaster-SDK|RoboMaster SDK]]
