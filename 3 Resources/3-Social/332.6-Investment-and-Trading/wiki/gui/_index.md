---
created: 2026-06-28
updated: 2026-09-19
type: moc
udc: "332.6:004.8"
tags:
  - mql5
  - gui
  - easyandfastgui
  - index
methodology: para
status: active
aliases:
  - MQL 图形界面
  - EasyAndFastGUI 目录
---

# MQL 图形界面库

> EasyAndFastGUI 图形界面开发库 — 完整资料汇总
> **作者**：[[3 Resources/People/wiki/entities/Anatoli-Kazharski-tol64|Anatoli Kazharski (tol64)]]

---

## 目录结构

```
gui/
├── _index.md                        ← 本文：目录入口
├── compiled/                        ← 编译知识笔记（11 篇）
│   ├── MQL图形界面I-库结构.md
│   ├── MQL图形界面II-菜单系统.md
│   ├── MQL图形界面III-按钮系统.md
│   ├── ...
│   └── MQL图形界面XI-渲染控件与标准图形库.md
├── sources/                         ← 原始剪藏（48 篇 + 图片）
│   ├── Part I/                      ← 库结构·控件·动画·按钮·跨平台
│   ├── Part II/                     ← 菜单系统
│   ├── Part III/                    ← 按钮系统
│   ├── Part IV/                     ← 信息元件与多窗口
│   ├── Part V/                      ← 滚动条·列表视图·组合框
│   ├── Part VI/                     ← 复选框·编辑框·滑动条
│   ├── Part VII/                    ← 表格·页面控件
│   ├── Part VIII/                   ← 日历·树形视图·文件导航
│   ├── Part IX/                     ← 颜色选择器·进度条·图表
│   ├── Part X/                      ← 集成构建 2~13
│   ├── Part XI/                     ← 统合构建 14~16
│   ├── 相关/                       ← 其他参考（EasyAndFastGUI介绍等）
│   └── GUI的EA交易/                ← 带 GUI 的 EA 教程（2 篇 + 图片）
└── EasyAndFastGUI图形界面库.md      ← 知识库参考笔记
```

---

## 编译笔记一览

| # | 文件 | 核心内容 |
|:-:|------|---------|
| I | [[gui/compiled/MQL图形界面I-库结构\|MQL图形界面I-库结构]] | 库结构、基类设计、控件继承树、CWindow、引擎层架构、事件流、动画、表单按钮、跨平台。**含第 I~V 章完整内容** |
| II | [[gui/compiled/MQL图形界面II-菜单系统\|MQL图形界面II-菜单系统]] | 菜单系统 |
| III | [[gui/compiled/MQL图形界面III-按钮系统\|MQL图形界面III-按钮系统]] | 按钮系统 |
| IV | [[gui/compiled/MQL图形界面IV-信息元件与多窗口\|MQL图形界面IV-信息元件与多窗口]] | 信息元件与多窗口 |
| V | [[gui/compiled/MQL图形界面V-滚动条与列表视图\|MQL图形界面V-滚动条与列表视图]] | 滚动条与列表视图 |
| VI | [[gui/compiled/MQL图形界面VI-复选框与编辑框\|MQL图形界面VI-复选框与编辑框]] | 复选框与编辑框 |
| VII | [[gui/compiled/MQL图形界面VII-表格与页面控件\|MQL图形界面VII-表格与页面控件]] | 表格与页面控件 |
| VIII | [[gui/compiled/MQL图形界面VIII-日历与树形视图\|MQL图形界面VIII-日历与树形视图]] | 日历与树形视图 |
| IX | [[gui/compiled/MQL图形界面IX-颜色选择器与图表\|MQL图形界面IX-颜色选择器与图表]] | 颜色选择器与图表 |
| X | [[gui/compiled/MQL图形界面X-库更新Build2-3\|MQL图形界面X-库更新Build2-3]] | 库更新 Build 2~3 |
| XI | [[gui/compiled/MQL图形界面XI-渲染控件与标准图形库\|MQL图形界面XI-渲染控件与标准图形库]] | 渲染控件与标准图形库 |

### 作者产品

| 产品 | 说明 |
|------|------|
| [[entities/TradeCalc-Pro-MT4\|TradeCalc Pro MT4]] | 六合一交互式图表交易计算器 |
| [[EasyAndFastGUI图形界面库\|EasyAndFastGUI 图形界面库]] | 知识库参考笔记 |

---

## 原始剪藏（按系列分目）

| 系列 | 篇数 | 对应文章 |
|------|:---:|---------|
| `sources/Part I/` | 5 | 库结构·控件·动画·按钮·跨平台（#2125–#2129） |
| `sources/Part II/` | 4 | 菜单系统（#2186+） |
| `sources/Part III/` | 2 | 按钮系统（#2223） |
| `sources/Part IV/` | 2 | 信息元件与多窗口（#2281） |
| `sources/Part V/` | 3 | 滚动条·列表视图·组合框（#2323） |
| `sources/Part VI/` | 2 | 复选框·编辑框·滑动条（#2406） |
| `sources/Part VII/` | 2 | 表格·页面控件（#2471） |
| `sources/Part VIII/` | 3 | 日历·树形视图·文件导航（#2572） |
| `sources/Part IX/` | 2 | 颜色选择器·进度条·图表（#2634） |
| `sources/Part X/` | 12 | 集成构建 2~13 |
| `sources/Part XI/` | 4 | 统合构建 14~16 |
| `sources/相关/` | 4 | EasyAndFastGUI 介绍/评测/CSDN 转载/优化可视化 |
| `sources/GUI的EA交易/` | 2 | 带 GUI 的 EA 教程（#4715 · #4727）+ 图片

---

## 关联笔记

### 相关脉络

编译笔记原位于内部工作区，内含自研 EA 面板开发的关联分析和路线图决策参考。

- 自研 EA 产品路线图 — Canvas GUI 决策
- 自研面板项目 — Canvas GUI 开发

### 工具与语言

- [[gui/../entities/MQL5\|MQL5]] | [[gui/../entities/MT4\|MT4]] | [[gui/../entities/MT5\|MT5]] | [[gui/../entities/MetaTrader\|MetaTrader]]

### 相关文章

- `3 Resources/3-Social/332.6-Investment-and-Trading/99-Resources/` 目录下的 MQL GUI 相关资源
