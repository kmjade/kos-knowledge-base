---
title: "failsafe"
aliases: [失控保护, 故障安全]
type: concept
udc: "629.7"
tags: [flight-control, safety]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# failsafe

## 定义

failsafe 是飞控的失控保护机制：当遥控信号丢失、GPS 失效、数传中断、低电量、传感器故障或越界时，触发预设动作（RTL 返航 / Land 降落 / Hold 悬停）。设计核心是「任何链路失效都能安全处置」，配合冗余传感器投票仲裁。

## 相关

[[09-安全与故障处理]] · [[飞控-FlightController]] · [[02-架构与原理]]

## Sources

[[source-px4-docs]] · [[source-ardupilot-docs]]
