---
title: "PCB"
aliases: [印刷电路板, Printed Circuit Board]
type: concept
udc: "621.38"
tags: [eda, lceda, pcb]
created: 2026-09-11
updated: 2026-09-11
compiled: true
reviewed: false
---

# PCB

PCB（印刷电路板）是承载电子元件的物理载体，由 [[板框-BoardOutline|板框]] 定义外形，[[封装-Footprint|封装]] 定义焊盘，走线/铺铜实现电气连接。

## 设计要点

- 布局：元件摆放
- 布线：走线（`W`）、过孔（`V`）、换层（`*`）
- 铺铜：`Shift+B` 重建
- 检查：[[DRC]]（`F8`）

## 制造

通过 [[Gerber]] 文件交付 [[嘉立创JLC|嘉立创]] 打样。

## 相关

- [[嘉立创EDA-LCEDA|嘉立创EDA]]
- [[原理图-Schematic|原理图]]
- [[阻焊开窗-ExposeCopper|阻焊开窗]]
