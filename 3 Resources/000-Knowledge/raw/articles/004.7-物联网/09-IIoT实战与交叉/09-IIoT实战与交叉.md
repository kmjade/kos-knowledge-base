---
title: "09 IIoT 实战与交叉"
aliases: [IIoT Practice, 工业物联网实战]
udc: "004.7"
tags: [iot, iiot, robotics]
created: 2026-09-16
updated: 2026-09-16
---

# 09 IIoT 实战与交叉

## OT/IT 融合

- Broker 隔离 + 边缘协议归一化（Modbus / PROFINET / OPC-UA → MQTT）
- 统一命名空间（ISA-95）替代点对点集成

## 与机器人领域交叉

| 库 | 接口契约 |
|----|---------|
| 681.5-microROS | MCU 层 ROS2 通路（DDS/XRCE） |
| 681.5-UGV | 底盘契约 `/cmd_vel` + `/odom` |
| 681.5-RoboMaster | 下位机 + 上云链路 |

> 机器人的「下位机 + 上云」链路即 IoT 的工程实例：`/cmd_vel` + `/odom` 与 MQTT topic 契约的统一是待探索项。

## 选型对照表

| 场景 | 建议协议/平台 |
|------|--------------|
| 设备直连 | MQTT / CoAP / LwM2M |
| 串口/485/PLC | 网关转 Modbus → MQTT |
| 环保/水利/电力/车载/视频 | HJ212 / SL651 / DL/T645 / JT808 / GB28181 |

## 关联

[[05-架构与计算连续体]] · [[08-安全与互操作]] · [[3 Resources/6-Technology/raw/articles/681.5-microROS/681.5-microROS|681.5 micro-ROS]] · [[3 Resources/6-Technology/raw/articles/681.5-UGV/681.5-UGV|681.5 UGV]]
