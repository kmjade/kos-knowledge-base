---
title: "WIKI — 知识库入口"
created: 2026-06-12
updated: 2026-06-12
udc: 001.8
tags: [meta, entry, guide]
---

# KOS_LLM-Wiki — 知识库入口

> 请先阅读此页。它说明此知识库的用途与使用方式。

## 这是什么知识库？

一个基于 Obsidian、由 AI 代理驱动的**知识组织系统**。它结合 PARA 方法、UDC 分类法与 LLM-Wiki 知识图谱模式，支持三种语言（CN/EN/TW）。

## AI 代理快速入门

```
1. 阅读此文件 (WIKI.md) — 你正在这里
2. 阅读 AGENTS.md 了解完整行为规范
3. 阅读 _meta/hot.md 获取近期上下文
4. 执行 KOS-Status 检查知识库健康状态
```

## 可用命令

| 命令 | 功能 |
| :--- | :--- |
| `KOS-Status` | 知识库健康摘要 |
| `KOS-Triage [--mode <para&#124;lyt&#124;zettel&#124;generic>] [--file <path>]` | 处理收件箱 → 路由到目标目录 |
| `KOS-Wiki-Compile [--mode <...>] [--file <path>]` | 编译 raw → wiki 页面 |
| `KOS-Research --topic "..." [--depth <quick&#124;standard&#124;deep>]` | 自主网络研究 |
| `KOS-Link [--path <dir>] [--fix]` | 健康检查（7 层级） |
| `KOS-Query [quick&#124;standard&#124;deep] <question>` | 知识库查询 |
| `KOS-Project` | 创建/管理项目 |
| `KOS-Archive` | 归档已完成项目 |
| `Daily Open` / `Day-Review` | 每日笔记 / 回顾 |
| `KOS-Init [--status] [--fix]` | 初始化 / 健康检查知识库 |

## 知识库结构

```
0 Inbox/          → 收件箱流水线 (1-input → 2-output → 3-outcome)
1 Projects/       → ITO 生命周期 (proposal → execution → completion → archive)
2 Areas/          → 人生领域 (学习/工作/生活)
3 Resources/      → 知识库 (概念/实体/来源)
4 Archives/       → 冷存储
_meta/            → 系统 (模板/脚本/日志/AI/记忆)
Periodic/         → 每日/每周/每月笔记
en/ + zh-tw/      → 语言镜像
```

## 方法论模式

此知识库支持四种组织方法论（通过 `methodology` frontmatter 字段设定）：

- `para` — 项目/领域/资源/归档（默认）
- `lyt` — MOC 导航 + Ace 原则
- `zettel` — 原子笔记 + Folgezettel + Hubs
- `generic` — 最小结构，标签 + 链接

## 关键文件

| 文件 | 用途 |
| :--- | :--- |
| [[AGENTS.md]] | AI 代理完整行为规范 |
| [[_meta/hot.md]] | 会话上下文缓存 |
| [[_meta/index/links/Index/_index-zh-cn.md]] | 主索引（CN） |
| `_meta/system/templates/modes/`（目录） | 模式专用笔记模板（5 种模式） |
| [[.codex/skills/]] | KOS 技能定义（权威来源） |
| [[.claude/hooks.json]] | 会话生命周期钩子 |
| [[_meta/system/scripts/wiki-lock.py]] | 多写入者文件锁定 |

## 首次设置

如果是新的知识库会话：
1. 确认 Obsidian 可用
2. 如需 MCP 传输，检查 Local REST API 插件（端口 27124）
3. 执行 `KOS-Init --status` 验证知识库完整性
4. 执行 `KOS-Status` 检查收件箱/项目健康状态
5. 执行 `Daily Open` 创建今日笔记
