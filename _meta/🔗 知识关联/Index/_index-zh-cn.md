---
created: 2026-06-06
updated: 2026-06-09
udc: 001.8:025.4
tags: [index, moc, kos, navigation]
---

# 总索引 · Master Index

> **PARA + UDC + LLM-Wiki 三维导航**
> 本索引同时按 PARA 分类和 UDC 分类组织所有笔记。
> Dataview 自动维护 Projects 和 People；其余为精简入口页，子模块靠目录浏览。

---

## 按 PARA 分类

### 1 — Projects（项目）

```dataview
TABLE file.link as 项目, status
FROM "1 Projects"
WHERE contains(file.path, "1 Projects")
SORT status ASC
```

| 项目 | 状态 |
|------|:----:|
| [[1 Projects/26-02 Bug追踪/26-02 Bug追踪\|26-02 Bug追踪]] | active |
| [[1 Projects/26-11 KOS 功能吸收/26-11 KOS 功能吸收\|26-11 KOS 功能吸收]] | active |
| [[4 Archives/26-03 文件锁实现/26-03 文件锁实现\|26-03 文件锁实现]] | archived |
| [[4 Archives/26-04 UDC整合实施/26-04 UDC整合实施\|26-04 UDC整合实施]] | archived |
| [[4 Archives/26-07 Life+AI 融合/26-07 Life+AI 融合\|26-07 Life+AI 融合]] | archived |
| [[4 Archives/26-08 个人财务系统/26-08 个人财务系统\|26-08 个人财务系统]] | archived |
| [[4 Archives/26-09 企业管理/26-09 企业管理\|26-09 企业管理]] | archived |
| [[4 Archives/26-10 学习管理/26-10 学习管理\|26-10 学习管理]] | archived |

### 2 — Areas（领域入口）

| 领域 | 子模块 |
|:----|:-------|
| [[2 Areas/生活/生活\|生活]] | 个人财务 |
| [[2 Areas/学习/学习\|学习]] | 学习管理 |
| [[2 Areas/工作/工作\|工作]] | 企业管理 |
| [[2 Areas/知识组织/知识组织\|知识组织]] | KOS 架构 / UDC / 软件工程 |

### 3 — Resources（资源入口）

| 子库 | 入口页 |
|:----|:-------|
| LLM-Wiki 概念 | [[3 Resources/000-Knowledge/wiki/_index\|_index]] |
| PARA 方法 | [[3 Resources/PARA/PARA 方法概览\|PARA 方法概览]] |
| UDC 分类 | [[3 Resources/UDC/UDC 概述\|UDC 概述]] |
| 人物 | 见下方 People 列表 |

#### People（人物）

```dataview
TABLE file.link as 人物, udc, tags
FROM "3 Resources/People/wiki/entities"
SORT tags ASC
```

### _logs — Logs（日志）

| 文件 | 说明 |
|:----|:-----|
| [[_logs/_index.md\|Codex-logs 需求说明书]] | 日志系统设计 |
| [[_logs/operations/triage.md\|分拣日志]] | Triage 操作记录 |
| [[_logs/operations/compile.md\|编译日志]] | Compile 操作记录 |
| [[_logs/operations/maintenance.md\|维护日志]] | 系统维护记录 |

### _meta — 系统元数据

| 文件 | 说明 |
|:----|:-----|
| [[_meta/hot.md\|热缓存 Hot Cache]] | 最近上下文 |
| [[_meta/ai-memory/STATE.md\|全局状态]] | 跨会话状态 |
| [[_meta/design/架构说明书\|架构说明书]] | 系统架构 |
| [[_meta/design/KOS-LLM-Wiki架构说明v3.0\|KOS 架构 v3.0]] | 详细架构 |
| [[_meta/design/Life+AI-架构设计\|Life+AI 架构]] | 三支柱体系 |
| [[_meta/🔗 知识关联/🔗 知识关联\|知识关联总入口]] | 知识图谱 |
| [[_meta/scripts/wiki-lock.sh\|wiki-lock.sh]] | 文件锁脚本 |

---

## 按 UDC 分类

| UDC 类号 | 类目 | 典型笔记 |
|----------|------|----------|
| 000 | 总类 | 0-总类 |
| 001.8 | 知识组织与管理 | 索引, 知识组织, 架构说明书 |
| 001.8:005 | 知识管理方法 | PARA 方法概览 |
| 001.8:004.8 | 知识组织与 AI | Codex-logs, Life+AI |
| 004.8 | 人工智能 / LLM | LLM 基础, Claude Code |
| 004.8:005.1 | AI 操作审计 | hot.md, wiki-lock.sh |
| 004.8:316.77 | Life+AI 融合 | Life+AI 架构设计 |
| 025.4 | 分类法 / 索引 | UDC 概述, UDC 分类索引 |
| 37 | 教育 / 学习 | 学习管理 |
| 336 | 个人财务 | 个人财务系统 |
| 334.7 | 企业管理 | 企业管理 |
| 929 | 人物传记 | 30 人物实体 |

---

## 按标签分组

- `#area/*` — 领域笔记（生活/学习/工作/知识组织）
- `#resource/*` — 资源笔记
- `#project` — 项目笔记
- `#daily` — 每日笔记（Periodic 下）
- `#design` — 设计文档
- `#meta` — 系统元数据

---

## 快速跳转

| 目标 | 链接 |
|:----|:-----|
| 🏔 首页 | [[Home.md\|Home]] |
| 🔟 热缓存 | [[_meta/hot.md\|Hot Cache]] |
| 🏗 架构 | [[_meta/design/架构说明书\|架构说明书]] |
| 🔆 知识关联 | [[_meta/🔗 知识关联/🔗 知识关联\|知识关联]] |
| 📨 Inbox | [[0 Inbox/README\|收件箱]] |

---

> [!tip] 维护提示
> 新增笔记时同步更新 UDC 表。Projects 和 People 由 Dataview 自动维护。
>
> 三语言索引：
> - CN → [[_meta/🔗 知识关联/Index/_index-zh-cn\|索引]]
> - EN → [[en/_meta/Knowledge-Links/Index/_index-en\|Index]]
> - TW → [[zh-tw/_meta/🔗 知识关联/Index/_index\|索引]]