# KOS_LLM-Wiki

**Knowledge Organization System + LLM-Wiki** — v3.0

一个融合 **PARA 方法**、**UDC 分类法** 与 **LLM 知识库** 的个人知识管理系统，支持三语言 + 三平台 AI Agent。

![version](https://img.shields.io/badge/version-v3.0-blue)

---

## 系统架构

```
KOS_LLM-Wiki/                  # 四层模型
├── 0 Inbox/                   # 收件箱
├── 1 Projects/                # 项目
├── 2 Areas/                   # 领域
├── 3 Resources/               # 资源
│   └── 000-Knowledge/         # 通用知识层
│       ├── raw/               # 原始资料
│       └── wiki/              # 编译知识页面
├── 4 Archives/                # 归档
├── Periodic/                  # 周期笔记
│
├── _logs/                     # 审计层
├── _meta/                     # 系统元数据
├── _attachments/              # Canvas 可视层
├── scripts/ + tests/          # 工具脚本
│
├── en/ + zh-tw/               # 多语言层
├── .claude/ + .codex/ + .opencode/  # 技能层（三平台）
│
├── AGENTS.md                  # AI 行为规范
├── Home.md                    # 首页
└── README.md                  # 系统说明
```

---

## 三个知识捕获层

| 层 | 名称 | 功能 | 输出 | 引擎 |
|:--:|------|------|:----:|:----:|
| L1 | **文本综合** | 对话 → 结构化文本知识 | `.md` wiki 页面 | KOS-Compile |
| L2 | **结构化知识** | 分类 → 索引与查询 | 索引 + Dataview | KOS-Triage + KOS-Query |
| L3 | **可视化参考** | 视觉 → 空间关系画布 | `.canvas` (JSON Canvas) | Canvas |

---

## KOS 引擎（7 技能）

| 技能 | 命令 | 功能 |
|------|------|------|
| **kos** | `/kos` | 统一入口，意图分发 |
| **kos-triage** | `KOS-Triage` | Inbox 四维分拣 → 路由入库 |
| **kos-compile** | `KOS-Compile` | raw/ → wiki/ 六步编译 |
| **kos-link** | `KOS-Link` | 五级健康检查（Frontmatter/UDC/链接/跨语言/项目） |
| **kos-daily** | `Daily Open` | 每日笔记 + 周期回顾 |
| **kos-query** | `KOS-Query` | 三级知识库查询（Quick/Standard/Deep） |
| **canvas** | `Canvas-*` | 可视化参考层（画布创建/管理） |

---

## 三平台兼容

| 平台 | 入口 | Hooks | 技能目录 |
|------|:----:|:-----:|----------|
| **Claude Code** | `CLAUDE.md` | hooks.json 原生 | `.claude/skills/` |
| **Codex CLI** | `AGENTS.md` | 会话协议 | `.codex/skills/` |
| **OpenCode** | `OPENCODE.md` | 会话协议 | `.opencode/skills/` |

---

## 从 claude-obsidian 借鉴（9/9 ✅）

| 特性 | 优先级 | 状态 |
|------|:------:|:----:|
| **文件锁 (wiki-lock.py)** | **P0** | ✅ `scripts/wiki-lock.py` |
| **热缓存 (hot.md)** | **P0** | ✅ 跨会话上下文恢复 |
| **三级查询** | **P1** | ✅ Quick / Standard / Deep |
| **Delta 追踪 (.manifest.json)** | **P1** | ✅ 4 引擎接入 |
| **PostCompact 上下文恢复** | **P1** | ✅ hooks.json 自动重读 |
| **wiki-fold 日志折叠** | **P2** | ✅ `--fold` 参数 |
| **Life Agent 转 SKILL.md** | **P2** | ✅ 三平台 life/SKILL.md |
| **Think 框架（10原则）** | **P3** | ✅ 嵌入引擎 SKILL.md |
| **Canvas 可视层** | **P3** | ✅ 设计 + 三平台 SKILL.md |

---

## 语言版本

| 语言 | 首页 | 索引 |
|------|------|------|
| English | [[en/Home.md]] | [[en/_meta/Knowledge-Links/Index/_index-en.md]] |
| 简体中文 | [[Home.md]] | [[_meta/🔗 知识关联/Index/_index-zh-cn.md]] |
| 繁體中文 | [[zh-tw/首頁.md]] | [[zh-tw/_meta/🔗 知识关联/Index/_index.md]] |

---

## 规模

| 度量 | 值 |
|------|:---:|
| 知识页 (wiki/) | **89**（concepts 19 + entities 31 + sources 2 + 专题页 37） |
| 原始资料 (raw/) | **30+** 篇 |
| 人物实体 (People CRM) | **30**（Tier 1-3） |
| UDC 分类覆盖 | **14** 个主类 |
| 三语言同步 | **CN / EN / ZH-TW** 全对齐 |
| KOS 引擎技能 | **7** 个 |
| 三平台技能总文件 | **30+** SKILL.md |

---

## 核心技术栈

| 组件 | 选型 |
|------|------|
| 编辑器 | Obsidian |
| AI Agent | Claude Code / Codex CLI / OpenCode |
| 版本控制 | Git |
| 格式 | Markdown + YAML Frontmatter |
| 工具脚本 | Python（跨平台） |
| 分类法 | UDC |
| 方法论 | PARA |
| 查询 | Dataview |
| 模板 | Templater |

---

## 快速开始

1. 用 [Obsidian](https://obsidian.md) 打开本仓库
2. 启用「设置 → 核心插件 → 模板」，模板文件夹设为 `_meta/Templates/`
3. 从 [[Home.md]] 开始浏览
4. AI 操作：输入 `KOS-Status` 查看当前状态，或 `KOS-Triage` 分拣收件箱

---

## 版本历史

| 版本 | 日期 | 内容 |
|------|------|------|
| **v3.0** | **2026-06-09** | **三平台 Skill 架构 + KOS 引擎 7 技能 + Canvas 可视层 + claude-obsidian 借鉴 9/9** |
| v2.0 | 2026-06-07 | LifeOS × LLM-Wiki 融合，Codex 适配，三语言镜像 |
| v1.1.0 | 2026-06-07 | KOS-Compile 引擎、周期自动化、搜索层 |
| v1.0.0 | 2026-06-03 | 初始系统构建 |

---

## 许可

见 LICENSE 文件。
