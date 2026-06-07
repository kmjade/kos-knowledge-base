---
created: 2026-06-07
updated: 2026-06-07
udc: 004.4
tags: [meta, plugin, config]
---

# Obsidian 插件配置指南

> 本知识库的 Obsidian 插件配置清单与适用场景说明。

## 必装插件

| 插件 | 用途 | 配置要点 |
|------|------|----------|
| **Dataview** | 元数据查询与动态列表 | 启用 JavaScript 查询；自动刷新 |
| **Templater** | 模板引擎（支持 `{{date:}}` 语法） | 模板目录设为 `_meta/Templates/`；触发快捷键 `Alt+T` |
| **Obsidian Tasks** | 任务管理与查询 | 启用全局任务查询；日期格式 `YYYY-MM-DD` |
| **Folder Notes** | 为文件夹创建索引页 | 自动创建与文件夹同名的索引文件 |

## 推荐插件

| 插件 | 适用场景 | 说明 |
|------|----------|------|
| **BRAT** | 测试社区新插件 | 已安装，用于接收 Beta 更新 |
| **Flownote** | 思维导图式笔记 | 适合 brainstorming 和概念关联 |
| **Ioto Update** | 插件更新管理 | 已安装，简化更新流程 |

## 可选插件

| 插件 | 场景 | 决策建议 |
|------|------|----------|
| Excalidraw | 手绘图形/图表 | 需要视觉笔记时启用 |
| Kanban | 看板式项目管理 | 项目数量 > 5 时启用 |
| Calendar | 日历视图查看笔记 | 日常使用 Daily Notes 时推荐 |
| Graph Analysis | 关系图谱增强 | 图谱浏览频繁时启用 |
| Pandoc Plugin | 导出 Word/PDF | 需要导出文档时启用 |
| Omnisearch | 全文搜索增强 | Dataview 查询不满足需求时启用 |

## 已禁用插件说明

本知识库不需要以下插件：
- **Live Preview** 增强插件（Obsidian 原生已支持）
- **Web Clipper**（使用独立剪藏方案）
- **Publish**（不开源发布）
