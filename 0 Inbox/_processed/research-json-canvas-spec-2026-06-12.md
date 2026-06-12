---
title: "研究简报：JSON Canvas 1.0 规范"
origin: kos-research
source: "auto"
created: 2026-06-12
tags: [clippings, research, json-canvas, obsidian]
udc: "001.8:004.8"
triage.status: ready
methodology: generic
---

## 研究简报：JSON Canvas 1.0 规范

### 概览

JSON Canvas 1.0 是 Obsidian Canvas 功能的基础数据格式。它定义了一种基于 JSON 的开放标准，
用于描述无限画布上的节点、边和组，支持可视化知识组织。

### 关键发现

1. JSON Canvas 1.0 由 Obsidian 团队发布，作为 .canvas 文件的底层格式规范
2. 核心数据结构包含 nodes（节点）、edges（边）和 groups（组）三个顶层数组
3. 节点类型包括 text（文本）、file（文件引用）、group（分组）三种
4. 边用于连接节点，支持方向性和标签
5. 格式完全开放，不依赖 Obsidian 专有功能
6. KOS 的 json-canvas skill 已实现对该规范的完整支持

### 提取的概念

| 概念 | 说明 |
|------|------|
| JSON Canvas | 基于 JSON 的无限画布数据格式，开放标准 |
| Canvas Node | 画布上的基本元素，可包含文本、文件引用或分组 |
| Canvas Edge | 节点间的连接线，可带方向和标签 |
| Canvas Group | 节点的逻辑分组，支持背景色和标签 |

### 来源列表

| # | 标题 | URL |
|---|------|-----|
| 1 | JSON Canvas Specification | https://jsoncanvas.org/ |
| 2 | Obsidian Canvas Docs | https://help.obsidian.md/Plugins/Canvas |

### 待探索

- [ ] JSON Canvas 与 SVG 的互转
- [ ] KOS canvas skill 对 JSON Canvas 的完整支持清单
