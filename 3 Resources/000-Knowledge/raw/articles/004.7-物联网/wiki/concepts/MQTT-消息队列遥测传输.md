---
title: "MQTT 消息队列遥测传输"
aliases: [MQTT, 消息队列遥测传输]
type: concept
udc: "004.7"
tags: [iot, mqtt, protocol]
created: 2026-09-16
updated: 2026-09-16
compiled: true
reviewed: false
---

# MQTT 消息队列遥测传输

## 定义

MQTT（Message Queuing Telemetry Transport）是 broker 型发布/订阅协议，持久 TCP 长连接、低带宽，三档 QoS，物联网事实标准。v5 共享订阅支撑 1000+ 设备。

## 关键特性

- 三档 QoS：0（至多一次）/ 1（至少一次）/ 2（恰好一次）
- broker 私有主题模型，灵活但互操作弱于 LwM2M
- 云端直连与工业遥测主导

## 相关

[[CoAP-受限应用协议|CoAP]] · [[LwM2M-轻量机器对机器|LwM2M]] · [[EMQX]] · [[02-应用层协议]]

## Sources

[[source-IoT-Research]] · [[02-应用层协议]]
