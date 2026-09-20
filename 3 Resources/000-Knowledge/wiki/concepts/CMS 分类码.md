---
title: CMS 分类码对DDC · UDC · CLC · LCC
aliases: [CMS Classification Codes, 内容管理系统分类 WordPress Classification]
tags: [classification, cms, wordpress, web, ddc, udc, clc, lcc]
created: 2026-06-01
---
updated: 2026-06-13

# CMS 分类码对

> 内容管理系统 (Content Management System) 在四大图书馆分类体系中的精确分类号覆盖传CMS · 无头 CMS · 静站点生成器三世代

---

## 丢、四体系总览

| 体系 | 类号 | 名称 | 分类逻辑 |
|:---:|:---:|------|------|
| **DDC** | `006.78` | Multimedia systems / CMS | 以软件类型分|
| **UDC** | `004.774` | Web content management | 以技术栈」分|
| **CLC** | `TP393.092` | 网站建设/Web 弢| 以应用场景分|
| **LCC** | `TK5105.888` | Web site development | 以信抢术分|

---

## 二CMS 三代演进与分类对

| 世代 | 代表 | 架构 | 分类侧重 |
|:---:|------|------|------|
| **CMS 1.0** 传统 | WordPress · Drupal · Joomla | 单体 LAMP | DDC `006.78` |
| **CMS 2.0** 无头 | Strapi · Contentful · Sanity | API-first | UDC `004.774:004.43` |
| **CMS 3.0** 静| Hugo · Jekyll · Astro | SSG Git-based | DDC `006.78` + `005.13` |

---

## 三DDC 层级详解

```
006 特殊计算机方(Special computer methods)
  └─┢ 006.7 多媒体系(Multimedia systems)
       └─┢ 006.78 多媒体程序·内容管理系(Programs; content management)
            ├─┢ 006.78 WordPress
            ├─┢ 006.78 Drupal
            ├─┢ 006.78 Joomla
            ├─┢ 006.78 Hugo (SSG)
            └─┢ 006.78 Ghost
```

### DDC 备

| 类号 | 名称 | 适用 |
|:---:|------|------|
| `006.78` | **Multimedia / CMS** | 主分|
| `005.3` | Specific types of programs | 通用软件 |
| `005.13` | Programming languages | 侧重 SSG 弢|
| `025.04` | Information storage & retrieval | 侧重内容架构 |

---

## 四UDC 层级详解

```
004 计算机科学与抢(Computer Science)
  └─┢ 004.7 计算机网(Computer networks)
       └─┢ 004.77 网络应用 (Network applications)
            └─┢ 004.774 Web 内容管理 (Web content management)
                 ├─┢ 004.774WordPress
                 ├─┢ 004.774Drupal
                 ├─┢ 004.774Strapi
                 └─┢ 004.774Contentful
```

### UDC 维度组合

| 维度 | UDC 组合 | 示例 |
|------|:---:|------|
| CMS + PHP | `004.774:004.43PHP` | WordPress |
| CMS + JS | `004.774:004.43JS` | Ghost · Strapi |
| CMS + 数据| `004.774:004.6MySQL` | WordPress + MySQL |
| 无头 CMS | `004.774:004.451` | Strapi · Contentful |

---

## 五CLC 层级详解（中图法

```
T 工业抢
  └─┢ TP 自动化技术计算机抢
       └─┢ TP393 计算机网
            └─┢ TP393.09 计算机网络应用程
                 ├─┢ TP393.092 网站建设/Web弢CMS
                 ├─┢ TP393.094 社交网络
                 └─┢ TP393.098 博客
```

### CLC CMS 细分

| CLC | 子类 | 代表 |
|:---:|------|------|
| `TP393.092` | 网站建设Web 弢| WordPress · Drupal · Hugo |
| `TP393.094` | 社交网络 | 社群 CMS · BuddyPress |
| `TP393.098` | 博客系统 | Ghost · Hexo · Medium |

> **CLC 特点**：CMS 归入「网络应用非「应用软件TP317) —因为 CMS 的核心特征不是软件是「网络服务

---

## 六LCC 层级详解

```
T 抢(Technology)
  └─┢ TK 电气工程·电子·核工(Electrical engineering)
       └─┢ TK5101-6720 电信 (Telecommunication)
            └─┢ TK5105.888 Web 网站弢(Web site development)
                 ├─┢ TK5105.8885.W66 WordPress
                 ├─┢ TK5105.8885.D78 Drupal
                 └─┢ TK5105.8883 Web 内容管理 (CMS)
```

### LCC DDC/CLC 的差

| 体系 | CMS 归属 | 哲学 |
|:---:|:---:|------|
| **LCC** | TK（电信工程） | CMS 是信抢术的应用 |
| **DDC** | 006（特殊计算机方法| CMS 是多媒体软件|
| **CLC** | TP393（计算机网络| CMS 是网络应用|

> LCC CMS 归入 TK 电信工程类是四体系中朢独特的分法它Web 视为通信基础设施而非计算机科学

---

## 七CMS 工具分类号对

| 工具 | DDC | UDC | CLC | LCC | 类型 |
|------|:---:|:---:|:---:|:---:|------|
| **WordPress** | `006.78` | `004.774` | `TP393.092` | `TK5105.8885.W66` | 传统 CMS |
| Drupal | `006.78` | `004.774` | `TP393.092` | `TK5105.8885.D78` | 传统 CMS |
| Joomla | `006.78` | `004.774` | `TP393.092` | `TK5105.8885.J66` | 传统 CMS |
| Ghost | `006.78` | `004.774` | `TP393.098` | `TK5105.8885.G46` | 博客 CMS |
| **Strapi** | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` | 无头 CMS |
| Contentful | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` | 无头 CMS |
| Sanity | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` | 无头 CMS |
| **Hugo** | `006.78` | `004.774` | `TP393.092` | `TK5105.8885.H84` | SSG |
| Jekyll | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` | SSG |
| Astro | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` | 混合 SSG |
| Wix | `006.78` | `004.774` | `TP393.092` | `TK5105.888` | SaaS CMS |
| Notion | `005.57` | `004.91` | `TP317.1` | `QA76.76.I58` | 全能（非 CMS|
| Obsidian | `005.52` | `004.91` | `TP317.1` | `QA76.76.T48` | PKM（非 CMS|

---

## 八CLC TP393.09 完整细分（网络应用全家福

```
TP393.09 计算机网络应用程
  ├─┢ TP393.092 网站建设/Web 弢(CMS · SSG · 前端)
  ├─┢ TP393.093 搜索引擎
  ├─┢ TP393.094 社交网络
  ├─┢ TP393.095 即时通讯
  ├─┢ TP393.096 电子商务
  ├─┢ TP393.097 云计算平
  └─┢ TP393.098 博客系统
```

---

## 九CMS vs 相关概念分类对照

| 概念 | DDC | UDC | CLC | LCC |
|------|:---:|:---:|:---:|:---:|
| **CMS** | `006.78` | `004.774` | `TP393.092` | `TK5105.888` |
| Web 框架 (React/Vue) | `006.78` | `004.774` | `TP393.092` | `TK5105.888` |
| 静站(SSG) | `006.78` | `004.774` | `TP393.092` | `TK5105.8883` |
| 博客 (Blogging) | `006.752` | `004.774` | `TP393.098` | `TK5105.8884` |
| Wiki 系统 | `006.75` | `004.774` | `TP393.092` | `TK5105.8882` |
| 电子商务 | `658.872` | `004.738.5:339` | `F713.36` | `HF5548.32` |
| Web 服务| `005.713` | `004.738.5` | `TP393.09` | `TK5105.888` |
| 文档处理| `005.52` | `004.91` | `TP317.1` | `QA76.76.T48` |

---

## 十在Vault 中的对应

| 主题 | Vault 位置 | 状|
|------|-----------|:---:|
| 文档处理 KB | [[004.91-文档处理与生]] | 9|
| 数字出版| [[09-數位出版]] (CMS · SSG · EPUB) | 已创|
| 计算机语訢 KB | [[004.43-计算机语訢/]] | 多语訢 |
| CMS 分类| 本页 | 新创|
| 分类码参| [[操作系统分类码]] · [[InDesign 分类码]] · [[Obsidian 分类码]] · [[People 分类码]] | 已创|

---

## 参

- [[09-數位出版]] 数字出版章节 (SSG · CMS · EPUB)
- [[04-桌面出版與排版]] DTP vs CMS 对比
- [[InDesign 分类码]] · [[Obsidian 分类码]] 同类分类码参
- [[CLC-中國圖書館分類法]] · [[DDC]] · [[UDC]] · [[LCC]]
- OCLC. *Dewey Decimal Classification* (DDC 23, 2011)
