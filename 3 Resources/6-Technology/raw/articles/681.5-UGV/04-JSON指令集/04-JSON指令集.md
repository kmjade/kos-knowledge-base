---
title: "04 JSON 指令集"
aliases: [JSON Commands, JSON 指令]
udc: "681.5"
tags: [ugv02, json, commands]
created: 2026-09-05
updated: 2026-09-05
---

# 04 JSON 指令集

## 为什么用 JSON

UGV 用 **JSON 指令**与机器人交互：文本格式、易理解、语言无关，可通过多种通信方式下达。

## 指令分类

| 类别 | 指令 |
|------|------|
| 底盘移动 | CMD_SPEED_CTRL（左右轮速度）、CMD_PWM_INPUT（PWM）、CMD_ROS_CTRL（ROS 控制） |
| 电机 PID | 设置电机 PID |
| OLED | OLED 屏幕控制/恢复 |
| 信息获取 | IMU 数据、CMD_BASE_FEEDBACK（底盘反馈）、串口连续反馈/回声 |
| IO | IO4/IO5 控制 |
| 扩展 | 云台基础控制、机械臂控制、外接模块类型 |

## 示例（底盘速度）

```json
{"T":1,"L":0.5,"R":0.5}   // 左右轮速度控制
```

## 关联

[[05-通信方式]] · [[06-上位机与ROS]] · [[JSON指令集-JSON-Commands|JSON 指令集]]
