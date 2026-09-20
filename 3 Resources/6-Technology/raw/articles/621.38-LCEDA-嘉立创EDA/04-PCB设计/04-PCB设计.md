---
title: "04 PCB设计"
aliases: [PCB Design, 电路板设计]
udc: "621.38"
tags: [eda, lceda, pcb]
created: 2026-09-11
updated: 2026-09-11
---

# 04 PCB设计

## 板框（Board Outline）

- PCB 尺寸由板框决定，需自行创建
- 圆形/异形板框：切换到板框层，用圆弧 + 线段 + 圆弧组合绘制
- 开槽/挖空：绘制走线后右键「Convert to Board Cutout」，或绘制图形转换

## 布局与布线

| 操作 | 说明 |
|:--|:--|
| 布局 | 元件摆放、对齐 |
| 布线 | `W` 走线，`V` 过孔 |
| 换层 | `*` 循环切换层 |
| 线宽 | `+` / `-` 调整 |
| 高亮网络 | `H` |
| 单层显示 | `Shift+S` |

## 层管理

- 点击层选项按钮，勾选附加层（可增加内电层等）
- 元件放到底层：激活底层后放置，或右侧面板把层属性改为 Bottom

## 铺铜与阻焊开窗

| 功能 | 说明 |
|:--|:--|
| 铺铜 | `Shift+B` 重建铺铜 |
| 阻焊开窗（露铜） | 先在阻焊层画区域覆盖铜对象（铜皮/走线/实心区域）；常见错误是只画阻焊层而无铜区域。也可选中走线后点右侧「Expose Copper」 |

## 检查

- 未布线检查：使用 Design Manager（设计管理器）
- 删除所有走线：`Route → Unroute All` + `Edit → Global Delete`
- DRC：`F8` 运行设计规则检查

## 关联

[[03-原理图设计]] · [[06-高级功能]] · [[07-制造与下单]] · [[wiki/concepts/PCB|PCB]] · [[wiki/concepts/板框-BoardOutline|板框]] · [[wiki/concepts/阻焊开窗-ExposeCopper|阻焊开窗]]
