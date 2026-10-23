---
title: "06 平台与 Broker"
aliases: [Platforms & Broker, IoT 平台]
udc: "004.7"
tags: [iot, emqx, mosquitto, broker, platform]
created: 2026-09-16
updated: 2026-09-16
---

# 06 平台与 Broker

## 开源 Broker

| Broker | 特点 |
|--------|------|
| EMQX | 开源 MQTT broker，6.2 引入 A2A 注册中心 + MCP |
| Mosquitto | 轻量开源，边缘 broker 模式常用 |
| Zenoh | 跨 8 位 MCU 到云集群的高速数据织物 |

## 云平台

| 平台 | 说明 |
|------|------|
| AWS IoT Core + Greengrass | 云端 broker + 边缘处理 |
| Azure IoT / ThingWorx / FIWARE | 国际主流 |
| 阿里云 IoT / 华为云 IoTDA / 天翼物联 / JetLinks | 国产主流，国标协议支持是差异点 |

## Broker 选型维度

| 维度 | 说明 |
|------|------|
| 规模 | 连接数、吞吐 |
| 协议 | MQTT/CoAP/多种 |
| 国标 | HJ212/SL651/GB28181 原生支持 |
| 边缘 | 是否支持边缘部署 |

## 关联

[[05-架构与计算连续体]] · [[EMQX]] · [[Mosquitto]] · [[Zenoh]] · [[AWS-IoT-Core]] · [[华为云-IoTDA]]
