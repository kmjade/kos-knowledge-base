---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:025.4:004.8
tags: [architecture, kos, design, integration, v3]
status: current
---

# KOS-LLM-Wiki 集成系统架构说明 v3.0

> KOS_LLM-Wiki Integrated System — Architecture Specification v3.0
> 文档状态：v3.0 · 2026-06-09
> 整合：PARA + UDC + LLM-Wiki + 三平台技能（Claude Code / Codex CLI / OpenCode）

---

## 版本变更

| 版本 | 日期 | 变更内容 |
|------|------|---------|
| v1.0 | — | 初始架构设计 |
| v2.0 | 2026-06-06 | LifeOS × LLM-Wiki 融合，Codex 适配，三语言镜像 |
| **v3.0** | **2026-06-09** | **三平台 Skill 架构、KOS 引擎技能化、claude-obsidian 借鉴集成** |
| **v3.0 (更新)** | **2026-06-09** | **文件锁 (wiki-lock.py) 实现、并发安全机制引入、scripts/ + tests/ 目录新增** |
| **v3.0 (更新)** | **2026-06-09** | **Canvas 可视层实现（设计doc + 三平台 SKILL.md + _attachments/ 结构）** |

---

## 1. 系统概述

KOS-LLM-Wiki 是一个融合四种知识组织方法的个人知识管理系统，并在多平台 AI Agent 驱动下运行。

| 方法 | 角色 | 层级 |
|------|------|------|
| **PARA** (Tiago Forte) | 操作上下文 | 文件夹级别 |
| **UDC** (Universal Decimal Classification) | 学科分类 | 笔记元数据 |
| **LLM-Wiki** (Karpathy Pattern) | 知识领域 | 内容主题 |
| **三平台 Skills** | AI 自动化 | 可执行技能 |

### 核心目标

1. **可操作性** — 知识服务于行动，每个笔记都有明确的上下文归属
2. **可发现性** — UDC 分类 + 标签 + 双向链接三重机制
3. **可演化性** — 系统随认知深化可重构，不依赖单一工具
4. **多语言性** — 简中 / English / 繁中 三语言同步
5. **可追溯性** — 所有 AI Agent 操作通过 `_logs/` 全程审计
6. **三平台兼容** — Claude Code / Codex CLI / OpenCode 共享技能体系

---

## 2. 系统架构

### 2.1 四层模型

```
┌─────────────────────────────────────────────────────────┐
│                    导航层 (Navigation)                     │
│    Home.md · 总索引 · 标签系统 · 图谱视图 · 链接网络      │
├─────────────────────────────────────────────────────────┤
│                    内容层 (Content)                       │
│   PARA 目录结构 + UDC 元数据 + Markdown 笔记              │
│   简体中文 (/) · English (en/) · 繁體中文 (zh-tw/)        │
├─────────────────────────────────────────────────────────┤
│                    审计层 (Audit)                         │
│   _logs/ · 会话日志 · 操作日志 · 任务追踪 · 报告          │
│   三平台 AI Agent 操作全程记录                             │
├─────────────────────────────────────────────────────────┤
│                    技能层 (Skills)                        │
│   .claude/skills/ · .codex/skills/ · .opencode/skills/   │
│   KOS 引擎 + Obsidian 参考技能                            │
├─────────────────────────────────────────────────────────┤
│                    基础层 (Foundation)                    │
│   Obsidian · Git · Markdown · YAML Frontmatter           │
│   模板系统 · Dataview · AGENTS.md · 三平台适配            │
└─────────────────────────────────────────────────────────┘
```

---

## 3. 完整目录结构

```
/
├── 0 Inbox/               # 📥 收件箱：待处理的临时笔记与素材
│   └── Clippings/         #    外部内容剪藏
├── 1 Projects/            # 🚀 项目：有明确目标和截止日期的任务
├── 2 Areas/               # 🗄️ 领域：持续关注的责任领域
├── 3 Resources/           # 📚 资源：主题资料与参考资料库
├── 4 Archives/            # 🗃️ 归档：已归档的非活跃内容
├── Periodic/              # 📅 周期笔记（年/月/日分层）
├── _logs/                 # 🕹️ AI 平台操作日志（审计追踪）
│   ├── sessions/          #   会话日志
│   ├── operations/        #   操作日志（triage/compile/maintenance）
│   ├── tasks/             #   任务追踪
│   └── reports/           #   报告与统计
├── _meta/                 # ⚙️ 系统元数据
│   ├── Templates/         #   笔记模板
│   ├── design/            #   设计文档
│   ├── adr/               #   架构决策记录
│   └── queries/           #   Dataview 查询库
├── _attachments/          # 🖼️ Canvas 可视层
│   ├── canvases/          #   .canvas 画布文件
│   └── media/             #   图片 / PDF 等资源
├── scripts/               # 🐍 工具脚本
│   └── wiki-lock.py       #   文件锁（跨平台 Python）
├── tests/                 # 🧪 测试
│   └── test_wiki_lock.py  #   文件锁单元测试
├── en/                    # English mirror
├── zh-tw/                 # 繁體中文鏡像
│
├── .claude/               # Claude Code 配置
│   └── skills/            # KOS 引擎技能（7个）+ canvas + json-canvas
│       ├── kos/           #   统一入口
│       ├── kos-triage/    #   Inbox 分拣
│       ├── kos-compile/   #   Wiki 编译
│       ├── kos-link/      #   链接校验
│       ├── kos-daily/     #   周期回顾
│       ├── kos-query/     #   知识库查询
│       └── canvas/        #   可视化参考层
├── .codex/                # Codex CLI 配置
│   └── skills/            # KOS 引擎技能（同上）
├── .opencode/             # OpenCode 配置
│   └── skills/            # KOS 引擎技能（同上）
│
├── AGENTS.md              # AI 行为规范（主）
├── CLAUDE.md              # Claude Code 快速参考
├── Home.md                # 首页
└── README.md              # 系统说明
```

---

## 4. 技能体系全景

### 4.1 KOS 引擎技能（v3.0 新增）

| 技能 | 目录 | 功能 | 来源 |
|------|------|------|------|
| **kos** | `kos/` | 统一入口，意图分发 | 新建 |
| **kos-triage** | `kos-triage/` | Inbox 四维分拣 | AGENTS.md 规则 → Skill |
| **kos-compile** | `kos-compile/` | Wiki 六步编译 | AGENTS.md 规则 → Skill |
| **kos-link** | `kos-link/` | 五级健康检查 | AGENTS.md 规则 → Skill |
| **kos-daily** | `kos-daily/` | 笔记 + 周期回顾 | AGENTS.md 规则 → Skill |
| **kos-query** | `kos-query/` | 三级知识库查询 | AGENTS.md 规则 → Skill |
| **canvas** | `canvas/` | 可视化参考层 | claude-obsidian → Skill |

### 4.2 三个知识捕获层

| 层 | 名称 | 功能 | 输出 | 对应技能 |
|:--:|------|------|:----:|----------|
| L1 | **文本综合** | 对话 → 结构化文本知识 | `.md` wiki 页面 | KOS-Compile |
| L2 | **结构化知识** | 分类 → 索引与查询 | 索引 + Dataview | KOS-Triage + KOS-Query |
| L3 | **可视化参考** | 视觉 → 空间关系画布 | `.canvas` (JSON Canvas) | Canvas |

### 4.3 Obsidian 参考技能（来自 kepano/obsidian-skills）

| 技能 | 功能 | 部署平台 |
|------|------|----------|
| obsidian-markdown | Obsidian 语法参考 | `.flownote/` + `.opencode/` |
| obsidian-bases | Obsidian Bases 参考 | `.flownote/` + `.opencode/` |
| obsidian-cli | Obsidian CLI 工具 | `.flownote/` + `.opencode/` |
| defuddle | 网页内容清理 | `.flownote/` + `.opencode/` |
| json-canvas | JSON Canvas 参考 | 三平台 |

---

## 5. 从 claude-obsidian 借鉴的关键机制

### 5.1 Hooks 体系的等价实现

| claude-obsidian Hook | 本系统实现方式 | 状态 |
|---------------------|--------------|------|
| **SessionStart** | AGENTS.md 会话协议：启动时读 Inbox + 全局状态 | ✅ 已有 |
| **PostCompact** | hooks.json: PostCompact 自动重读 hot.md + AGENTS.md 协议 | ✅ 已实现 |
| **PostToolUse** | hooks.json: Write/Edit 后追踪变更文件 → Stop 时用于 hot.md 精确摘要 | ✅ 已增强 |
| **Stop** | AGENTS.md 会话协议：结束时写日志 + 更新状态 | ✅ 已有 |

### 5.2 直接借鉴的设计

| 特性 | 来源 | 本系统状态 | 优先级 |
|------|------|-----------|:------:|
| **文件锁 (wiki-lock.py)** | claude-obsidian → 自实现 | ✅ 已实现（scripts/wiki-lock.py） | **P0** |
| **热缓存 (hot.md)** | claude-obsidian | ✅ 已实现 | **P0** |
| **三级查询 (Quick/Standard/Deep)** | claude-obsidian | ✅ 已实现 | **P1** |
| **Delta 追踪 (.manifest.json)** | claude-obsidian | ✅ 全线接入（4 引擎） | **P1** |
| **wiki-fold（日志折叠）** | claude-obsidian | ✅ 轻量实现（--fold 参数） | **P2** |
| **Life Agent 转 SKILL.md** | 本系统分析 | ✅ 三平台 life/SKILL.md | **P2** |
| **Think 框架（10原则）** | claude-obsidian | ✅ 已实现（方向 B：嵌入引擎 SKILL.md） | **P3** |
| **Canvas 可视层** | claude-obsidian | ✅ 已实现（设计 + 三平台 SKILL.md） | **P3** |

---

## 6. UDC 分类体系

### 6.1 本系统使用的 UDC 主类

| UDC 类号 | 类目 | 覆盖内容 |
|----------|------|----------|
| 001.8 | 知识组织与管理 | PARA 方法、KM 笔记、索引 |
| 001.8:005 | 知识管理方法 | PARA 方法详述 |
| 001.8:025.4 | 索引与分类 | 索引体系 |
| 001.8:004.8 | 知识组织 + AI | LLM 辅助 KM、RAG、AI 日志 |
| 001.8:311 | 知识管理统计 | 日志报告、统计分析 |
| 004.8 | 人工智能 / LLM | 所有 LLM 相关笔记 |
| 004.8:005.1 | AI 操作审计 | 操作日志（triage/compile） |
| 004.8:519.6 | 计算智能 / 神经网络 | Transformer 架构 |
| 004.8:681.3 | 机器学习训练 | 训练与微调 |
| 004.8:159.9 | 认知与提示 | 提示工程 |
| 025.4 | 分类法 | UDC 相关笔记 |
| 929 | 人物传记 | People CRM |
| 929:316.77 | 核心人物（Tier 1） | 频繁互动者 |
| 929:65.01 | 重要联系人（Tier 2） | 定期互动者 |

### 6.2 跨语言 UDC 一致性

所有三语言版本的同一笔记使用相同的 UDC 类号。

---

## 7. 多语言架构

### 7.1 目录映射

```
简体中文版（默认）       English 版              繁體中文版
──────────────────      ──────────              ──────────
/Home.md                en/Home.md              zh-tw/首頁.md
/AGENTS.md              （仅根目录）               （仅根目录）
/2 Areas/               en/2 Areas/             zh-tw/2 Areas/
/3 Resources/...        en/3 Resources/...      zh-tw/3 Resources/...
/_logs/                 en/_logs/               zh-tw/_logs/
/_meta/                 en/_meta/               zh-tw/_meta/
```

### 7.2 同步规则

- 新建或修改笔记时，三个版本同时创建或更新
- 前置元数据中的 `udc`、`tags` 字段保持一致
- 链接交叉引用使用对应语言前缀（`en/`、`zh-tw/`）
- `AGENTS.md` 仅存在于根目录，无需翻译
- 三平台技能目录（`.claude/`、`.codex/`、`.opencode/`）仅存在于根目录

### 7.3 跨语言链接策略

**A — 同语言存在对应页面 → 指向同语言**

| 场景 | 正确 | 错误 |
|------|------|------|
| EN 页引用另一 EN 页 | `[[llm-fundamentals]]` | `[[LLM 基础]]` |
| TW 页引用另一 TW 页 | `[[LLM 基礎]]` | `[[LLM 基础]]` |

**B — 同语言不存在 → fallback 到 CN，使用完整路径**

`[[3 Resources/000-Knowledge/xxx/xxx|显示名]]`

**C — 共享内容统一指向 CN**

索引页、模板、UDC/DDC 分类法、raw/ 目录 → CN 路径。

---

## 8. AI Agent 集成（三平台）

### 8.1 平台对比

| 维度 | Claude Code | Codex CLI | OpenCode |
|------|------------|-----------|----------|
| 入口文件 | `CLAUDE.md` | `AGENTS.md` | `OPENCODE.md` |
| 技能目录 | `.claude/skills/` | `.codex/skills/` | `.opencode/skills/` |
| Hooks 机制 | hooks.json 原生 | AGENTS.md 模拟 | AGENTS.md 模拟 |
| SKILL.md 格式 | 标准 Agent Skills | 兼容 | 完全兼容 |
| 生命周期 | 原生 hooks | 会话协议 | 会话协议 |

### 8.2 三平台操作矩阵

| 操作 | Claude Code | Codex CLI | OpenCode |
|------|:-----------:|:---------:|:--------:|
| KOS-Triage | `/kos-triage` | `KOS-Triage` | `/kos-triage` |
| KOS-Compile | `/kos-compile` | `KOS-Wiki-Compile` | `/kos-compile` |
| KOS-Link | `/kos-link` | `KOS-Link` | `/kos-link` |
| KOS-Daily | `/kos-daily` | `Daily Open` | `/kos-daily` |
| Canvas | `Canvas-*` | `Canvas-*` | `Canvas-*` |

### 8.3 操作流程

| 操作 | 触发 | 写入 | 前置锁 | 日志记录 |
|------|------|------|--------|----------|
| 分拣 Inbox | 用户请求 / 自动 | 目标目录 + _processed/ | acquire 目标路径 | operations/triage.md |
| Wiki 编译 | 新资料入库后 | 3 Resources/[topic]/wiki/ | acquire 每个写入目标 | operations/compile.md |
| Canvas 操作 | 用户请求 | _attachments/canvases/ | acquire 目标 .canvas | 会话日志 |
| 文件编辑 | 用户指令 | 目标文件 | acquire 目标文件 | 会话日志 |
| 系统维护 | 用户请求 /lint | — | — | operations/maintenance.md |
| 会话结束 | 自动 | — | clear-stale 清理残留 | sessions/YYYY-MM-DD.md |

---

## 9. 已知问题与优化方向

### 9.1 当前问题

| # | 问题 | 影响 | 优先级 |
|---|------|------|:------:|
| 1 | `_agents/kos/README.md` 为空 | KOS agent 定义缺失 | P2 |
| 2 | `_meta/skills/skills.md` 为空 | 技能追踪索引缺失 | P2 |
| 3 | `.opencode/backups/` 冗余备份 | 占用空间，内容重复 | P3 |
| 4 | `.flownote/skills/` 与 `.opencode/skills/` 重复 | 维护两倍文件 | P2 |

### 9.2 从 claude-obsidian 借鉴（全部完成）

| 特性 | 优先级 | 状态 |
|------|:------:|------|
| **文件锁 (wiki-lock.py)** | **P0** | ✅ 已实现 |
| **热缓存 (hot.md)** | **P0** | ✅ 已实现 |
| **三级查询模式** | **P1** | ✅ 已实现 |
| **PostCompact 上下文恢复** | **P1** | ✅ 已实现 |
| **Delta 追踪 (.manifest.json)** | **P1** | ✅ 全线接入（Triage/Compile/Link/Daily） |
| **wiki-fold 日志折叠** | **P2** | ✅ 已实现（--fold 参数方向） |
| **Life Agent 转 SKILL.md** | **P2** | ✅ 已实现（三平台 life/SKILL.md） |
| **Think 框架（10原则）** | **P3** | ✅ 已实现（方向 B：嵌入引擎 SKILL.md） |
| **Canvas 可视层** | **P3** | ✅ 已实现（设计 + 三平台 SKILL.md） |

---

## 10. 技术栈

| 组件 | 选型 | 原因 |
|------|------|------|
| 编辑器 | Obsidian | 本地优先，Markdown 原生，图谱视图，插件生态 |
| AI Agent (1) | Claude Code | 原生 hooks 支持，Skill 体系最成熟 |
| AI Agent (2) | Codex CLI | 通过 AGENTS.md 驱动，适合本 vault 主引擎 |
| AI Agent (3) | OpenCode | SKILL.md 完全兼容，多 agent 友好 |
| 版本控制 | Git | 内容追溯，分支管理，多设备同步 |
| 格式 | Markdown + YAML frontmatter | 纯文本，工具无关，易于版本控制 |
| 工具脚本 | Python（跨平台） | 文件锁 wiki-lock.py、测试、自动化工具 |
| 分类法 | UDC | 学科全覆盖，语言中立，组合表达灵活 |
| 方法论 | PARA | 操作导向，与文件夹结构自然契合 |
| 查询 | Dataview（Obsidian 插件） | SQL 风格查询笔记元数据 |
| 模板 | Templater（Obsidian 插件） | 动态模板，插入日期等变量 |
| 向量检索 | Chroma / FAISS（可选） | RAG 知识问答 |

---

## 11. 模板系统

### 11.1 模板清单

| 模板 | 文件名 | 用途 |
|------|--------|------|
| 项目 | `项目模板.md` | 有截止日期的任务 |
| 领域 | `领域模板.md` | 长期关注的主题 |
| 资源 | `资源模板.md` | 参考资料 |
| 概念 | `概念模板.md` | 单个概念的原子笔记 |
| 每日 | `每日笔记模板.md` | 日常记录 |
| 人物-核心 | `person-核心人物.md` | Tier 1 人物 |
| 人物-重要 | `person-重要联系人.md` | Tier 2 人物 |
| 人物-背景 | `person-背景人物.md` | Tier 3 人物 |

### 11.2 统一字段

所有模板均包含：

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <类号>
tags: [tag1, tag2]
---
```

---

## 12. 信息生命周期

```
捕获 (Inbox) ──→ 分拣 (Triage) ──→ 项目化 (Projects) ──→ 完成
    │                              │                    │     │
    │                              ▼                    ▼     │
    │                        提炼 (Resources)        归档 (Archives)
    │                              │
    └──→ 闪念 (Daily) ──→ 编译 (Compile) ──→ Wiki 页面
                              │
                          _logs/ 记录全程
```

---

## 13. 参考资料

| 文件 | 说明 |
|------|------|
| [[_meta/design/canvas-可视层设计.md]] | Canvas 可视层完整设计 |
| [[_meta/design/claude-obsidian分析-claude.md]] | claude-obsidian Claude 视角分析 |
| [[_meta/design/claude-obsidian分析-codex.md]] | claude-obsidian Codex 视角分析 |
| [[_meta/design/claude-obsidian分析-opencode.md]] | claude-obsidian OpenCode 视角分析 |
| [[_meta/design/skills体系分析.md]] | Skills 体系现状分析 |
| [[_meta/design/架构说明书.md]] | 原 v2.0 架构说明 |
| [[AGENTS.md]] | AI 行为规范 |
| [[CLAUDE.md]] | Claude Code 快速参考 |
| [[_meta/adr/]] | 架构决策记录 |
| [[4 Archives/claude-obsidian/claude-obsidian.md]] | claude-obsidian 归档 |
| [[1 Projects/文件锁实现/README.md]] | 文件锁实现项目（含 6 个 TASK） |
| [[scripts/wiki-lock.py]] | 跨平台文件锁脚本 |

---

> **文档维护：** 本说明书随系统演进同步更新。重大架构变更需更新本文档。
> 对应英文版：`en/_meta/architecture.md`，繁体版：`zh-tw/_meta/架構說明書.md`
