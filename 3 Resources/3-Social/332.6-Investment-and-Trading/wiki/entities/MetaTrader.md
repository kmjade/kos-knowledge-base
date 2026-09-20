---
aliases:
  - MetaTrader 交易平台
  - MT平台
created: 2026-05-27
updated: 2026-06-16
type: entity
entity_type: platform
topic: 332.6-Investment-and-Trading
status: reviewed
udc: "336.76"
tags:
  - udc/929
---

# MetaTrader

## 基本信息

| 属性 | 值 |
|------|------|
| **类型** | 在线交易平台 |
| **开发商** | MetaQuotes Software |
| **官网** | https://www.metatrader.com |
| **产品线** | MT4 (2005), MT5 (2010) |
| **编程语言** | MQL4 / MQL5 |
| **许可证** | 经纪商授权 |

## 描述

MetaTrader 是全球最广泛使用的零售在线交易平台，由 MetaQuotes Software 开发。自 2000 年首次推出以来，经历过五代迭代，当前主流版本是 MT4 和 MT5。覆盖外汇、股票、指数、商品、加密货币 CFD 等资产类别。

## 发展历程

| 年份 | 版本 | 编程语言 | 里程碑 |
|------|------|----------|--------|
| 2000 | FX Charts | — | 第一代图表软件 |
| 2001 | MetaQuotes | MQL | 首次引入编程语言 |
| 2002 | MetaTrader 3 | MQL II | 正式启用 MetaTrader 品牌 |
| 2005 | MetaTrader 4 | MQL4 | 最成功的版本，主导外汇市场 20 年 |
| 2010 | MetaTrader 5 | MQL5 | 多资产综合交易平台 |

## 平台特性

- **多端支持** — 桌面端（Windows）、Web 端、iOS、Android
- **内置图表分析** — 技术指标、分析对象、多时间框架
- **自动交易 (EA)** — 支持 MQL 编写的智能交易系统
- **策略测试** — 历史数据回测和优化
- **应用市场** — 交易机器人和指标的买卖生态
- **社区** — MQL5.com 全球最大算法交易社区

## 核心特征

| 特征 | 描述 |
|------|------|
| **安全性** | 加密数据传输，从经纪商官方下载 |
| **可扩展性** | 通过 MQL 语言无限扩展功能 |
| **离线能力** | 桌面端完整离线功能 |
| **图表引擎** | 专业级交互式图表，支持多周期分析 |
| **订单管理** | 多种订单类型，一键交易 |

## 访问限制

> [!warning] 中国境内访问限制
> `mql5.com` 及其相关域名在中国大陆被 **GFW（Great Firewall）** 长期封锁，**非 VPN/代理环境无法直连**。

### 受影响服务

| 域名 | 用途 | 状态 |
|------|------|:----:|
| `www.mql5.com` | MQL5 主站（社区、市场、信号） | 🔴 封锁 |
| `www.metatrader5.com` | MT5 官网 | 🔴 封锁 |
| `mql5.community` | MT4/MT5 社区登录 | 🔴 封锁 |

### 典型错误

- **错误码 1009** — "access to MQL5.com is restricted by your Chinese Internet provider"
- **错误码 10054** — WSA 连接被重置（Connection reset）
- **浏览器超时/空白** — DNS 劫持或 TCP 阻断

### 解决方案

| 方案 | 说明 |
|------|------|
| **VPN / 科学上网** | 需配合 Clash / V2ray 等工具，HTTP 代理对 MT4/MT5 客户端无效 |
| **Proxifier + SOCKS5** | 代理 MT4/MT5 终端流量，使客户端能登录社区和市场 |
| **海外 VPS** | 租用海外 Windows VPS 运行 MT4/MT5，彻底绕过限制 |
| **重启路由器** | 更换公网 IP，解决 IP 临时封禁问题 |
| **清理 HOSTS** | 检查 `C:\Windows\System32\drivers\etc\hosts` 中 mql5 相关条目 |

> 注：MQL5 官方已知悉此问题，确认仅能通过 VPN 解决。

### 参考来源

- [MQL5 Forum: IP Address banned](https://www.mql5.com/en/forum/509586)
- [MQL5 Forum: down in US (site update)](https://www.mql5.com/en/forum/510170)
- [MQL5 Forum: China EA download issues](https://www.mql5.com/zh/forum/503987)

## 相关实体

- [[MT4]] — MetaTrader 4，外汇交易标准
- [[MT5]] — MetaTrader 5，多资产升级版

## 相关概念

- [[Expert-Advisor]] — EA 智能交易系统
- [[MQL]] — MetaQuotes 编程语言
- [[Algorithmic-Trading]] — 算法交易
- [[Technical-Analysis]] — 技术分析

## Sources

- [MetaTrader 官方网站](https://www.metatrader.com/zh)
- [MetaTrader 百度百科](https://baike.baidu.com/item/MetaTrader)
- [[3 Resources/finance/raw/MetaTrader/01-平台概览/01-平台概览.md]]
