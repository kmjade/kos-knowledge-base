---
created: 2026-06-07
updated: 2026-06-07
udc: 
tags: [resource, llm, triage]
---

# Applied Sciences + LLM-Wiki

> 源：Applied Sciences + LLM-Wiki 整合系统架构设计 v1.0.md — 编译整理。

## 核心内容

### 目錄

1. 領域定位與範圍
2. 雙層組織架構
3. DDC 子 KB 結構規範
4. 深度子 KB 模式
5. LLM-Wiki 整合層
6. raw/ 原始素材管理

### 1. 領域定位與範圍

### 1.1 DDC 600 定位
DDC 600 Technology (Applied Sciences) 涵蓋人類將科學知識轉化為實用技術的全部領域。
### 1.2 600 覆蓋範圍
---

### 2. 雙層組織架構

### 2.1 架構全景
### 2.2 兩種組織模式的共存
### 2.3 MOC 設計
600 級 MOC 作為所有子 KB 的統一中樞：
```markdown
# 600 Applied Sciences

### 快速導航

### 概述章節
### DDC 子知識庫
### 活躍子領域
```
---


### 核心价值

本架构的核心价值在于将 DDC 600 应用科学与 LLM-Wiki 知识管理系统的整合，实现技术知识的系统化积累与 AI 增强检索。通过双层组织架构（DDC 层级 + MOC 导航），既保持了标准分类的严谨性，又获得了跨主题聚合的灵活性。

### 整合层功能

- **LLM-Wiki 编译** — 将 raw/ 源文件自动编译为结构化 wiki 页面
- **交叉引用** — 自动建立相关笔记间的链接关系
- **三语言同步** — 确保 CN/EN/TW 版本的一致性
## 相关笔记

- [[LLM 基础]]
- [[知识组织与大模型|知识组织与 LLM]]
- [[提示工程]]

## 参考

- 源文件：3 Resources\000-Knowledge\004-LLM-Wiki\raw\Applied Sciences + LLM-Wiki 整合系统架构设计 v1.0.md




