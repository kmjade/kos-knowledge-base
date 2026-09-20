---
title: "Raspberry Pi OS 操作系统"
aliases: [Raspberry Pi OS, Raspbian]
type: concept
udc: "004.165"
tags: [raspberry-pi, os, linux]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Raspberry Pi OS 操作系统

## 定义

Raspberry Pi OS（原名 Raspbian）是树莓派官方操作系统，基于 **Debian** 定制，提供 32-bit 与 64-bit 双版本，是绝大多数树莓派项目的首选系统。

## 版本演进

| 代号 | Debian | 时期 | 关键变化 |
|------|--------|------|----------|
| Bullseye | 11 | 2021–2023 | — |
| Bookworm | 12 | 2023–2025 | Wayland 优先、Piwiz |
| **Trixie** | 13 | 2025– | 更新的核心包 |

- 最新稳定版：**Raspberry Pi OS 6.3**（2026-06-18），Linux 6.18 LTS 内核、LabWC 合成器。

## 安装与配置

- **Raspberry Pi Imager**：官方刷写工具，支持预配置 WiFi / SSH / 用户。
- **Headless**：boot 分区写 `ssh` 空文件 + `userconf.txt`。
- **配置**：`sudo raspi-config`；更新 `sudo apt full-upgrade`；Pi 5 bootloader 用 `rpi-eeprom-update`。

## 相关

[[SBC-单板计算机|SBC]] · [[Raspberry-Pi-Platform-树莓派平台|Raspberry Pi Platform]] · [[Raspberry-Pi-5|Pi 5]]

## Sources

[[source-RaspberryPi-com]] · [[03-操作系统与设置]]
