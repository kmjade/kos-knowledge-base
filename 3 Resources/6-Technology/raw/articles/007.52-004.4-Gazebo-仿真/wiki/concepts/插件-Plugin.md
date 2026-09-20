---
title: "插件 Plugin"
aliases: [Plugin, gazebo插件]
type: concept
udc: "007.52:004.4"
tags: [gazebo, simulation, plugin]
created: 2026-09-15
updated: 2026-09-15
compiled: true
reviewed: false
---

# 插件 Plugin

插件是 [[Gazebo-仿真|Gazebo]] 的扩展机制，用于自定义世界逻辑、模型控制、传感器与 GUI。

## 类型

World / Model / Sensor / System / Visual 插件。

## 两版差异

- [[Gazebo-Classic|Classic]]：继承 `ModelPlugin`/`WorldPlugin`，`GZ_REGISTER_*_PLUGIN`
- [[新版Gazebo-Ignition|新版]]：`gz-plugin` 的 System 接口，SDF `<plugin>` 声明

## 相关

- [[Gazebo-仿真|Gazebo 仿真]]
- [[传感器模型|传感器模型]]
