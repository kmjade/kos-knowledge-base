---
title: "05 Bases 与数据库"
aliases: [Bases & Database, Obsidian Bases]
udc: "001.8"
tags: [obsidian, bases, database]
created: 2026-09-05
updated: 2026-09-05
---

# 05 Bases 与数据库

## Bases 是什么

Bases 是 Obsidian **原生数据库层**（核心插件），把 Vault 笔记变成可查询的动态视图——**笔记为行、属性为列**，无需查询语言或第三方插件，即可构建 Notion 风格的数据库视图。

- 2025-08 随 v1.9.10 公开；2026 成为标志性核心功能。
- 在「设置 → 核心插件」启用 **Bases**（建议同时启用 **Properties**）。

## `.base` 文件

Bases 由 `.base` 文件定义，内容为合法 YAML，根键为：

| 根键 | 作用 |
|------|------|
| `filters` | 过滤条件 |
| `properties` | 显示的属性列 |
| `formulas` | 计算字段 |
| `summaries` | 汇总（计数/求和/平均等） |
| `views` | 视图定义 |

## 视图类型

| 视图 | 说明 |
|------|------|
| 表格（Table） | 行列网格，可内联编辑属性 |
| 卡片（Cards） | 卡片式浏览 |
| 列表（List） | 列表式 |
| 地图（Map） | 需 Maps 社区插件 |
| **看板（Kanban）** | 1.14 新增，按「分组」排成列，拖拽排序 |

## 嵌入

用嵌入语法把数据库视图插入任意笔记：

```markdown
![[我的会议库.base]]
```

## Bases vs Dataview

| 维度 | Bases | Dataview |
|------|-------|----------|
| 类型 | 核心插件（官方维护） | 社区插件 |
| 上手 | GUI 点击，无需代码 | 需学 DQL / JS |
| 能力 | 覆盖 80% 常见查询 | 更灵活强大 |
| 关系 | 早期无 1:n 关系链接 | 支持复杂查询 |
| 稳定性 | 官方维护，长期稳定 | 依赖插件作者 |

> 结论：**Bases 负责日常浏览/仪表盘，Dataview 负责复杂查询**，两者可共存，Bases 不是 Dataview 的完全替代。

## 常见用途

会议数据库、项目跟踪、客户看板、任务清单、阅读清单、文献登记、内容仪表盘。

## 关联

[[03-核心功能]] · [[04-插件与主题]] · [[02-Vault与Markdown]]
