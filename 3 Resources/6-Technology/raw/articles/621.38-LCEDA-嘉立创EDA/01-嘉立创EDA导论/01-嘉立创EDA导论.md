---
title: "01 嘉立创EDA导论"
aliases: [LCEDA Introduction, 立创EDA简介]
udc: "621.38"
tags: [eda, lceda, introduction]
created: 2026-09-11
updated: 2026-09-11
---

# 01 嘉立创EDA导论

## 定位

[[嘉立创EDA-LCEDA|嘉立创EDA]]（LCEDA）是免费的网页版原理图/PCB 设计工具，无需安装，用 HTML5 浏览器即可完成电路设计，并与 [[嘉立创JLC|嘉立创]] PCB 打样、[[立创商城LCSC|立创商城]] 元器件采购深度绑定。

## 标准版 vs 专业版

| 维度 | 标准版 | 专业版 |
|:--|:--|:--|
| 入口 | lceda.cn/editor | pro.lceda.cn/editor |
| PCB 引擎 | 旧引擎 | 新引擎（流畅、缩放不卡） |
| 适用 | 小板子 | 元件多的项目 |
| 原理图引擎 | — | 与 PCB 不同（建议每页 ≤150 元件） |

> 专业版采用新的 PCB 引擎，元件数量多时更流畅；但原理图未使用新引擎，元件多时应新建图页。

## 与 EasyEDA 的关系

[[EasyEDA]] 是嘉立创EDA 的海外版，功能一致，但**账号与数据系统独立、不互通**。国内用嘉立创EDA，海外用 EasyEDA。

## 免费与开源

- 免费使用，无功能锁
- 开源硬件生态：[[立创开源广场-OSHWHub|立创开源广场（OSHWHub）]] 提供海量开源工程
- 器件库与立创商城联动，带真实库存与价格

## 浏览器要求

- 推荐最新版 Chrome / Firefox（HTML5）
- 专业版依赖 indexedDB（本地存储）与 WebGL（显卡加速）
- 不支持时会有相应提示

## 关联

[[02-环境与界面]] · [[03-原理图设计]] · [[04-PCB设计]] · [[wiki/concepts/嘉立创EDA-LCEDA|嘉立创EDA]]
