# KOS_LLM-Wiki

**Knowledge Organization System + LLM-Wiki** �?v3.0

一个融�?**PARA 方法**�?*UDC 分类�?* �?**LLM-Wiki 概念** 的个人知识管理系统，支持三语言 + 三平�?AI Agent�?
![version](https://img.shields.io/badge/version-v3.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![lang](https://img.shields.io/badge/lang-CN%20%7C%20EN%20%7C%20TW-orange)

---

## 目录结构

```
KOS_LLM-Wiki/
├── 0 Inbox/          # 📥 待分拣笔记（根目�?.md；_processed/ 内忽略）
├── 1 Projects/       # 🚀 有目标与截止日期的项�?├── 2 Areas/          # 🗄�?持续关注的长期领�?├── 3 Resources/      # 📚 参考资料与知识库（LLM-Wiki, PARA, UDC, People�?�?  └── 000-Knowledge/raw/ + wiki/
├── 4 Archives/       # 🗃�?已完成项目（gitignored�?├── Periodic/         # 📅 周期笔记（日/�?�?�?年；gitignored�?├── _meta/            # ⚙️ 系统元数据（hot.md, 模板, ADR, 索引, manifest�?├── _logs/            # 🕹�?审计层（triage, compile, maintenance, reports�?├── _agents/          # 🤖 AI 角色定义（简报员, 分析�? 协作者）
├── _attachments/     # 🖼�?附件/画布资源
├── en/ + zh-tw/      # 🌐 多语言镜像�?├── .claude/           # Claude Code 配置 + hooks + skills
├── .opencode/         # OpenCode 配置 + skills
├── _meta/scripts/          # 🔧 工具脚本（wiki-lock.sh, wiki-lock.py�?├── AGENTS.md         # AI 行为规范（主�?└── CLAUDE.md         # Claude Code 快速参�?```

---

## 快速开�?
### Obsidian 用户

1. �?[Obsidian](https://obsidian.md) 打开本仓�?2. 启用核心插件「模板」，模板文件夹设�?`_meta/Templates/`


### AI Agent 用户

首次开始前读取 `AGENTS.md` 了解完整规范。常用命令：

| 命令 | 用�?|
|------|------|
| `KOS-Status` | 查看 vault 状态总览 |
| `KOS-Triage [--file <path>]` | 分拣 Inbox 收件�?|
| `KOS-Wiki-Compile [--topic <name>]` | 编译 raw/ �?wiki/ |
| `KOS-Link [--path <dir>] [--fix]` | 健康检查（Frontmatter/UDC/链接/跨语言�?|
| `KOS-Query [quick\|standard\|deep] <问题>` | 三级知识查询 |
| `Daily Open` / `Day-Review` | 今日笔记 / 每日回顾 |

---

## 核心特�?
| 特�?| 状�?| 说明 |
|------|:----:|------|
| **热缓�?(hot.md)** | �?可用 | `_meta/hot.md` ~500 字会话上下文；hooks 自动读写 |
| **生命周期 Hooks** | �?可用 | `.claude/hooks.json` �?SessionStart / PostCompact / PostToolUse / Stop |
| **文件�?* | �?可用 | `_meta/scripts/wiki-lock.sh` �?�?agent 并发写入安全保护 |
| **三级查询** | �?可用 | Quick / Standard / Deep �?Token 分层消�?|
| **AH Skills 套件** | �?可用 | 18 �?skill 部署�?`.claude/skills/` + `.opencode/skills/` |
| **UDC 自动分类** | �?可用 | 四层管道：模板→目录→关键词→AI 兜底 |
| **三语言镜像** | �?可用 | CN / EN / TW 全对齐，含跨语言链接规则 |
| **People CRM** | �?可用 | 三级人物体系（Tier 1-3），隐私保护 |
| **周期回顾** | �?可用 | �?�?�?�?年，模板化自动化 |
| **Canvas 可视�?* | �?可用 | JSON Canvas 1.0，三平台 SKILL.md |
| **Think 框架** | �?可用 | 10 原则思维循环，嵌入引�?SKILL.md |
| **Delta 追踪** | ⚙️ 骨架 | `_meta/.manifest.json` 已创建，KOS 引擎待集�?|
| **wiki-fold 日志折叠** | ⚙️ 设计阶段 | 提炼机制已规划，待实�?|

---

## 技术栈

| 组件 | 选型 |
|------|------|
| 编辑�?| Obsidian v1.9+ |
| AI Agent | Claude Code / Codex CLI / OpenCode |
| AI 技能标�?| [Agent Skills](https://github.com/kepano/obsidian-skills) |
| 分类�?| UDC 国际十进分类法（含自动建议管道） |
| 方法�?| PARA + LLM-Wiki |
| 数据格式 | Markdown + YAML Frontmatter |
| 版本控制 | Git |
| 工具脚本 | Bash + Python（跨平台�?|
| 查询 | Dataview（Obsidian 插件�?|
| 模板 | Templater（Obsidian 插件�?|

---

## 规模

| 度量 | �?|
|------|:---:|
| 知识页合�?| **~107**（概�?+ 实体 + 来源 + 子库�?|
| 人物实体 (People CRM) | **30**（Tier 1-3�?|
| UDC 分类覆盖 | **14** 个主�?|
| KOS 引擎技�?| **7** �?|
| 三平台技能总文�?| **30+** SKILL.md |
| 三语言同步 | **CN / EN / TW** 全对�?|

---

## 语言版本

| 语言 | 首页 | 索引 |
|------|------|------|
| **简体中�?* | [[🏠Home.md]] | [[_meta/🔗 知识关联/Index/_index-zh-cn\|索引]] |
| **English** | [[en/Home.md]] | [[en/_meta/Knowledge-Links/Index/_index-en\|Index]] |
| **繁體中文** | [[zh-tw/首頁.md]] | [[zh-tw/_meta/🔗 知识关联/Index/_index\|索引]] |

---

## 版本历史

| 版本 | 日期 | 概要 |
|------|------|------|
| **v3.0** | 2026-06-09 | 三平�?Skill 架构 · KOS 引擎 7 技�?· 热缓�?· 文件�?· 三级查询 · Canvas �?· Delta 追踪骨架 |
| v2.0 | 2026-06-07 | LifeOS × LLM-Wiki 融合 · Codex 适配 · 三语言镜像 |
| v1.1 | 2026-06-07 | KOS-Compile 引擎 · 周期自动�?· 搜索�?|
| v1.0 | 2026-06-03 | 初始系统构建 |

---

## 参�?
- `AGENTS.md` �?AI 行为规范（引擎命令、规则、模板）
- `CLAUDE.md` �?Claude Code 快速上�?- `_meta/hot.md` �?热缓存：最近会话上下文
- `_meta/🔗 知识关联/Index/_index-zh-cn.md` �?主索�?- `_meta/design/` �?架构与设计文�?- `_meta/adr/` �?架构决策记录
- `.claude/hooks.json` �?生命周期 hooks

---

## 许可

�?[LICENSE](./LICENSE)�?