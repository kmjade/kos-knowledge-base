---
title: "阻焊开窗 Expose Copper"
aliases: [Expose Copper, 露铜, 开窗]
type: concept
udc: "621.38"
tags: [eda, lceda, pcb]
created: 2026-09-11
updated: 2026-09-11
compiled: true
reviewed: false
---

# 阻焊开窗 Expose Copper

阻焊开窗（露铜）是在 [[PCB]] 阻焊层上开区域，使下方铜暴露出来，用于焊盘扩展、散热、天线净空、大电流加锡等。

## 正确做法

1. 先有铜对象（铜皮/走线/实心区域）
2. 在阻焊层画区域覆盖该铜对象
3. 或选中走线后点右侧「Expose Copper」

> 常见错误：只画阻焊层而无铜区域，不会露铜。

## 相关

- [[PCB]]
- [[嘉立创EDA-LCEDA|嘉立创EDA]]
