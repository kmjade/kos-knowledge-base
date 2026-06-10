# KOS_LLM-Wiki

**Knowledge Organization System + LLM-Wiki** — v3.0

一个融合 **PARA 方法**、**UDC 分类法** 与 **LLM-Wiki 概念** 的个人知识管理系统，支持三语言 + 三平台 AI Agent。

![version](https://img.shields.io/badge/version-v3.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![lang](https://img.shields.io/badge/lang-CN%20%7C%20EN%20%7C%20TW-orange)

---

## 目录结构

```
KOS_LLM-Wiki/
├── 0 Inbox/              # 待分拣笔记
├── 1 Projects/           # 活跃项目
├── 2 Areas/              # 长期领域
│   ├── 生活/ 学习/ 工作/ 知识组织
├── 3 Resources/          # 知识库
├── 4 Archives/           # 归档（gitignored）
├── Periodic/             # 周期笔记（gitignored）
│
├── _meta/                # 系统元数据
│   ├── architecture/     # 架构设计（adr + design；私密）
│   ├── index/            # 导航（links / queries / indices）
│   ├── system/           # 运维（templates / scripts / config / logs）
│   ├── ai/               # AI（skills / memory / agents）
│   └── assets/           # 架构图
│
├── _attachments/         # 媒体附件（canvases / images / pdfs）
├── en/ + zh-tw/          # 多语言镜像
│
├── .claude/ .codex/ .opencode/   # AI 平台配置
├── AGENTS.md             # AI 行为规范
├── CLAUDE.md             # Claude Code 快速参考
└── README.md
```

---

## 快速开始

### Obsidian 用户

1. 用 [Obsidian](https://obsidian.md) 打开本仓库
2. 启用核心插件「模板」，模板文件夹设为 `_meta/system/templates/`

### AI Agent 用户

首次开始前读取 `AGENTS.md` 了解完整规范。常用命令：

| 命令 | 用途 |
|------|------|
| `KOS-Status` | 查看 vault 状态总览 |
| `KOS-Triage [--file <path>]` | 分拣 Inbox 收件箱 |
| `KOS-Wiki-Compile [--topic <name>]` | 编译 raw/ 到 wiki/ |
| `KOS-Link [--path <dir>] [--fix]` | 健康检查（Frontmatter/UDC/链接/跨语言） |
| `KOS-Query [quick\|standard\|deep] <问题>` | 三级知识查询 |
| `Daily Open` / `Day-Review` | 今日笔记 / 每日回顾 |

---

## 核心特性

| 特性 | 状态 | 说明 |
|------|:----:|------|
| **热缓存 (hot.md)** | 可用 | `_meta/hot.md` 会话上下文；hooks 自动读写 |
| **生命周期 Hooks** | 可用 | `.claude/hooks.json` — SessionStart / PostCompact / PostToolUse / Stop |
| **文件锁** | 可用 | `_meta/system/scripts/wiki-lock.py` — 多 agent 并发写入安全保护 |
| **三级查询** | 可用 | Quick / Standard / Deep — Token 分层消耗 |
| **KOS 引擎** | 可用 | 9 引擎：triage/compile/link/daily/canvas/init/project/archive/life |
| **UDC 自动分类** | 可用 | 四层管道：模板→目录→关键词→AI 兜底 |
| **三语言镜像** | 可用 | CN / EN / TW 全对齐，含跨语言链接规则 |
| **People CRM** | 可用 | 三级人物体系（Tier 1-3），隐私保护 |
| **周期回顾** | 可用 | 日/周/月/季/年，模板化自动化 |
| **Canvas 可视化** | 可用 | JSON Canvas 1.0，三平台 SKILL.md |
| **Think 框架** | 可用 | 10 原则思维循环，嵌入 SKILL.md |
| **Delta 追踪** | 骨架 | `_meta/.manifest.json` 已创建，KOS 引擎待集成 |
| **wiki-fold 日志折叠** | 设计阶段 | 提炼机制已规划，待实现 |

---

## 技术栈

| 组件 | 选型 |
|------|------|
| 编辑器 | Obsidian v1.9+ |
| AI Agent | Claude Code / Codex CLI / OpenCode |
| AI 技能标准 | Agent Skills |
| 分类法 | UDC 国际十进分类法（含自动建议管道） |
| 方法论 | PARA + LLM-Wiki |
| 数据格式 | Markdown + YAML Frontmatter |
| 版本控制 | Git |
| 工具脚本 | Python（跨平台） |
| 查询 | Dataview（Obsidian 插件） |
| 模板 | Templater（Obsidian 插件） |

---

## 规模

| 度量 | 值 |
|------|:---:|
| 知识页合计 | **~107**（概念 + 实体 + 来源 + 子库） |
| 人物实体 (People CRM) | **30**（Tier 1-3） |
| UDC 分类覆盖 | **14** 个主类 |
| KOS 引擎技能 | **9** 个 |
| 三平台技能总文件 | **30+** SKILL.md |
| 三语言同步 | **CN / EN / TW** 全对齐 |

---

## 语言版本

| 语言 | 首页 | 索引 |
|------|------|------|
| **简体中文** | [[Home]] | [[_meta/index/links/Index/_index-zh-cn\|索引]] |
| **English** | [[en/Home]] | [[en/_meta/index/links/Index/_index-en\|Index]] |
| **繁體中文** | [[zh-tw/首頁]] | [[zh-tw/_meta/index/links/Index/_index\|索引]] |

---

## 版本历史

| 版本 | 日期 | 概要 |
|------|------|------|
| **v3.0** | 2026-06-09 | 三平台 Skill 架构 / KOS 引擎 / 热缓存 / 文件锁 / 三级查询 / Canvas / 结构重组 |
| v2.0 | 2026-06-07 | LifeOS x LLM-Wiki 融合 / Codex 适配 / 三语言镜像 |
| v1.1 | 2026-06-07 | KOS-Compile 引擎 / 周期自动化 / 搜索层 |
| v1.0 | 2026-06-03 | 初始系统构建 |

---

## 参考

- `AGENTS.md` — AI 行为规范（引擎命令、规则、模板）
- `CLAUDE.md` — Claude Code 快速上手
- `_meta/hot.md` — 热缓存：最近会话上下文
- `_meta/index/links/Index/_index-zh-cn.md` — 主索引
- `.claude/hooks.json` — 生命周期 hooks

---

## 许可

详见 [LICENSE](./LICENSE)。
