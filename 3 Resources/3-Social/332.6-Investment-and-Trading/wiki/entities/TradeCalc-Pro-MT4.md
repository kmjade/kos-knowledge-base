---
created: 2026-06-28
updated: 2026-09-19
type: entity
udc: "332.6"
tags:
  - mql5
  - mql4
  - tradecalc
  - trading-tools
  - position-sizing
  - risk-management
  - MT4
methodology: para
status: active
aliases:
  - TradeCalc Pro
  - TradeCalc Pro MT4
  - 交易计算器
---

# TradeCalc Pro MT4

> **作者**：[[Anatoli Kazharski]]（tol64）—— EasyAndFastGUI 库作者  
> **平台**：MetaTrader 4  
> **价格**：30 USD  
> **版本**：1.12（2026-06-23 发布）  
> **类型**：MQL5 Market 实用工具  
> **MQL5 页面**：https://www.mql5.com/en/users/tol64/seller

---

## 概述

**TradeCalc Pro MT4** 是一款高交互图表交易计算器，通过在图表上拖拽 **Entry / TP / SL** 交互线，即可直观规划交易并实时计算：

- 仓位大小（手数）
- 保证金
- 点值
- 隔夜利息（库存费 / Swap）
- 盈亏

替代 **6 种零散分析工具**，在图表上秒级完成风险评估。

> ⚠️ 本工具专为分析计算与交易建模设计，**不直接执行交易**，也不开立真实订单。

---

## 六合一计算器

所有计算器通过导航选项卡切换，参数自动保存并在下次启动时无缝恢复。

### TRADE — 交易规划

| 功能 | 说明 |
|------|------|
| 仓位模式 | 自动计算（Auto Lot Size Mode）或手动输入 |
| 输入方式 | 以点数（Pips）指定 Stop Loss 和 Take Profit |
| 输出指标 | R:R 风险回报比、Risk Money、Reward、Required Margin、Breakeven Win Rate |
| 视觉交互 | 图表上 Entry/TP/SL 交互式连线，拖拽即可调整 |

### ACCOUNT — 账户监控

| 指标 | 说明 |
|------|------|
| 实时显示 | Balance、Equity、Margin Used、Free Margin、Margin Level、Margin Load |
| 经纪商阈值 | Margin Call / Stop Out |
| 模拟模式 | SIMULATE 模式，通过滑块调整参数安全模拟多种资金/净值场景 |

### POINTS — 点值计算

| 功能 | 说明 |
|------|------|
| 计算内容 | Value per Pip、Value per Point、Tick Value |
| Pip Multiplier | 可选 1, 10, 100, 1000, 10000, 100000，自动同步到 TRADE 模块 |
| 额外信息 | Pip Size、Point Size、数学比例关系 Relation |

### MARGIN — 保证金计算

| 功能 | 说明 |
|------|------|
| 参数 | Account Leverage、Side（Buy/Sell）、Lots、Price（Ask/Bid 快速同步） |
| 输出 | Required Margin、Margin Added、Free Margin After、Margin Level After |
| 安全边界 | Distance to Margin Call / Stop Out（点数/价格） |
| 支持锁仓 | 对冲（Hedging）模式下的保证金计算 |

### SWAP — 库存费计算

| 功能 | 说明 |
|------|------|
| 持仓天数 | Days Held（快捷按钮：1 Day / 7 Days / 30 Days） |
| 输出 | Total Swap Long / Short，日均与累计利息 |
| 智能对比 | Better Swap Side 自动对比最优利息方向并结算差额 |
| 附加信息 | Swap Mode、Triple Day（三倍利息收取日） |

### PROFIT — 盈亏计算

| 功能 | 说明 |
|------|------|
| 输入 | Open Price → Close Price 或 Profit in Points |
| 持仓成本 | Days Held 自动计入库存费 |
| 输出 | Trade Profit、累计 Swap、最终 Net Profit |

---

## 功能特点

### 交互与可视化

- 在图表上通过交互式可拖拽的 **Entry/TP/SL** 连线直观规划订单参数
- 高质量矢量渲染，控件边缘圆润流畅
- 完美适配深色与浅色主题，一键切换配色方案
- 任何高分辨率及高 DPI 屏幕均可呈现清晰无锯齿缩放效果

### 计算与风控

- 仓位大小自动计算模式，支持固定手数、风险比例、固定金额等多种风控维度
- 支持以点数输入 SL/TP，自动计算精确 R:R
- 实时显示 Risk Money、Reward、Breakeven Win Rate
- 支持佣金扣减模式（Commission Mode），实现精确仓位额度测算

### 自动化与兼容

- 自动随图表切换同步当前 Symbol 与 Lots
- POINTS 与 TRADE 模块之间 Pip Multiplier 自动同步
- 所有参数持久化保存，重新加载无需重复配置
- 支持所有资产类别（外汇、CFD、加密货币、指数等）
- 兼容对冲（Hedging）和净额（Netting）账户

---

## 作者信息

TradeCalc Pro MT4 由 **Anatoli Kazharski**（社区昵称 **tol64**）开发，他也是著名的 MQL5 图形界面库 **EasyAndFastGUI** 的作者。

| 资源 | 链接 |
|------|------|
| 作者全部产品 | https://www.mql5.com/en/users/tol64/seller |
| 联系作者 | https://www.mql5.com/en/users/tol64 |
| EasyAndFastGUI 代码库 | https://www.mql5.com/en/code/19703 |
| EasyAndFastGUI 编译笔记 | （内部笔记，未公开） |

---

## 关联笔记

- [[MQL5]] — MQL5 语言参考
- [[MT4]] — MetaTrader 4 平台
- [[Position-Sizing]] — 仓位计算相关概念
- [[Risk-Management]] — 风险管理
- 作者的另一项目 EasyAndFastGUI
- [[2 Areas/量化交易/知识库/EasyAndFastGUI图形界面库]]
