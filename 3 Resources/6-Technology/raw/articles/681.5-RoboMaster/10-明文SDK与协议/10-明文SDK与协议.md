---
title: "10 明文 SDK 与协议"
aliases: [Plaintext SDK, 明文 SDK, Text SDK]
udc: "681.5"
tags: [robomaster, plaintext-sdk, protocol]
created: 2026-09-05
updated: 2026-09-05
---

# 10 明文 SDK 与协议

## 什么是明文 SDK

明文 SDK 是 RoboMaster 提供的**纯文本协议通信**开发方式：

| 特性 | 说明 |
|------|------|
| 语言无关 | 支持 Python / C++ / C# / Java 等任意语言 |
| 协议简单 | 文本格式，易理解、易调试 |
| 连接灵活 | 串口 / WiFi / USB |
| 嵌入式友好 | 适合单片机等资源受限环境 |

## 特点与优势

- 低学习成本（协议简单直观）
- 调试方便（可用串口调试助手测试）
- 兼容性好（不依赖特定 SDK 版本）
- 底层控制（更直接的设备控制能力）

## 接入方式

| 方式 | 说明 |
|------|------|
| UART 串口 | 直连开发板/单片机 |
| WiFi | 局域网通信 |
| USB | 直连 |

## 明文协议

文本命令帧控制机器人（运动、云台、射击、LED、传感器数据），适合第三方平台（Arduino、STM32 等）接入。

## 关联

[[06-编程与SDK]] · [[12-开发板与嵌入式]] · [[wiki/concepts/明文SDK-Plaintext-SDK|明文 SDK]]
