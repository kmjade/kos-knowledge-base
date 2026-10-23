---
title: "Transport 传输层"
aliases: [Transport, 传输层]
type: concept
udc: "681.5"
tags: [micro-ros, transport]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# Transport 传输层

## 定义

Transport 是 [[micro-ROS]] client 与 [[micro-ROS-Agent]] 之间的物理/链路通道，决定二者如何承载 [[Micro-XRCE-DDS]] 流。常见方式：串口/USB（有线、稳定、首选）、UDP（WiFi 无线）、TCP（局域网可靠）、自定义（6lowpan/BLE）。

## 相关

[[micro-ROS-Agent]] · [[Micro-XRCE-DDS]] · [[04-Agent与传输]]

## Sources

[[source-yahboom]]
