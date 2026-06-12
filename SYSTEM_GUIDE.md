---
title: "KOS 系统指南"
created: 2026-06-12
updated: 2026-06-12
udc: 001.8
tags: [meta, guide, kos, system]
---

# KOS 系统指南

> **Knowledge Organization System** — PARA × UDC × LLM-Wiki 三语言知识中枢
> 版本 3.0.2 | 三平台：Codex / Claude Code / FLOWnote

---

## 一、什么是 KOS

KOS（Knowledge Organization System）是一个基于 Obsidian 的个人知识管理系统。它融合了：

- **PARA 方法** — 项目（Projects）/ 领域（Areas）/ 资源（Resources）/ 归档（Archives）
- **UDC 分类法** — 国际十进分类法，支持复合类号
- **LLM-Wiki 模式** — 概念（Concept）/ 实体（Entity）/ 来源（Source）知识图谱
- **三语言镜像** — 简体中文 / English / 繁體中文 同步
- **四方法论模式** — PARA / LYT / Zettelkasten / Generic
- **AI 引擎驱动** — Triage / Compile / Link / Research / Query / Daily 等技能

---

## 二、Vault 结构

```
KOS_LLM-Wiki/
├── 0 Inbox/              待分拣流水线
│   ├── 1-input/          输入（clippings/ + fleeting/）
│   ├── 2-output/         分拣输出
│   ├── 3-outcome/        沉淀成果（learnings/ + impacts/）
│   └── _processed/       已处理暂存
│
├── 1 Projects/           项目生命周期
│   ├── 1-proposal/       验入法论证通过待立项
│   ├── 2-execution/      执行中
│   ├── 3-completion/     产出完成待确认
│   └── 4-archived/       已结项待归档
│
├── 2 Areas/              长期领域
│   ├── 生活/             个人财务等
│   ├── 学习/             学习管理
│   └── 工作/             企业/KOS 管理
│
├── 3 Resources/          知识库
│   ├── 000-Knowledge/    核心知识（wiki/ 下分 concepts/entities/sources/）
│   ├── PARA/             PARA 方法
│   ├── UDC/              UDC 分类
│   └── People/           人物 CRM
│
├── 4 Archives/           冷存储（gitignored）
│   ├── projects/         已归档项目
│   ├── tasks/            已归档工单
│   └── legacy/           不明遗留
│
├── _meta/                系统元数据
│   ├── ai/               AI 技能/记忆/角色
│   ├── architecture/     架构设计/ADR
│   ├── index/            索引/查询/导航
│   ├── system/           模板/脚本/配置/日志
│   └── assets/           架构图
│
├── en/ + zh-tw/          语言镜像
├── Periodic/             周期笔记（日/周/月/季/年，gitignored）
├── .codex/ .claude/ .flownote/  AI 平台技能
│
├── AGENTS.md             AI 行为规范（权威）
├── WIKI.md               Vault 入口
├── README.md             项目说明
├── Home.md               Obsidian 首页
└── CLAUDE.md             Claude Code 快速参考
```

---

## 三、AI 引擎命令

所有引擎幂等（已处理文件不重复操作）。

### KOS-Triage — Inbox 分拣

```
KOS-Triage [--mode <para|lyt|zettel|generic>] [--file <path>]
           [--batch] [--status] [--force] [--inbox] [--legacy]
```

四维分析：时效性(A) → 主题(B) → 类型(C) → 复杂度(D) → UDC(E)
支持模式感知路由（按 mode 分叉目标目录和 frontmatter 注入）。

### KOS-Compile — Wiki 编译

```
KOS-Wiki-Compile [--mode <...>] [--topic <name>] [--file <path>]
                 [--fold] [--contradiction-check] [--force]
```

六步管道：来源分析 → 概念提取 → 页面创建/更新 → 交叉引用 → 索引更新 → 日志
支持模式感知模板选择 + 矛盾检测与 `[!contradiction]` 标记。

### KOS-Research — 自主研究

```
KOS-Research --topic "<主题>" [--depth quick|standard|deep]
             [--sources <url1,url2,...>] [--force]
```

三阶段管道：搜索(Search) → 抓取(Fetch) → 综合(Synthesize)
产物 → `0 Inbox/1-input/clippings/` → 触发 Triage 续接。

### KOS-Link — 健康校验

```
KOS-Link [--path <dir>] [--file <path>] [--fix] [--status]
```

七级检查：

| 级别 | 检查项 |
|:----:|--------|
| L1 | Frontmatter 完整性（created/updated/udc/tags） |
| L2 | UDC 格式 + 映射表存在性 |
| L3 | 链接完整性 + 循环引用检测 |
| L4 | 跨语言一致性（镜像齐全 + udc/tags/methodology 一致） |
| L5 | 项目状态一致性 |
| L6 | 空正文检测 |
| L7 | 陈旧声明检测（90天/180天/365天阈值） |

### KOS-Query — 知识查询

```
KOS-Query [quick|standard|deep] <问题>
```

| 模式 | 读取范围 | 适用场景 |
|------|---------|---------|
| Quick | hot.md 仅 | 简单事实查询 |
| Standard | hot.md + 索引 + 3-5 页面 | 大多数查询（默认） |
| Deep | 全库搜索 + 可选 web | 综合分析、对比 |

内置 BM25 粗排 + 语义重排序检索增强。

### KOS-Daily — 周期笔记

```
Daily Open          # 今日笔记
Day-Review          # 日回顾
Week-Review         # 周回顾
Month-Review        # 月回顾
Quarter-Review      # 季度回顾
Year-Review         # 年回顾
```

### KOS-Project — 项目管理

```
KOS-Project         # 创建/管理项目
```

自动编号分配 → 目录创建 → 主页生成 → 领域关联。

### KOS-Archive — 项目归档

```
KOS-Archive         # 归档已完成项目
```

完成度核查 → 复盘 → 目录迁移 → 领域页同步。

### KOS-Init — 初始化/健康检查

```
KOS-Init [--status] [--fix]
```

检查 vault 结构完整性、模板、索引、跨语言、技能部署状态。

---

## 四、方法论模式

笔记通过 frontmatter 的 `methodology` 字段声明模式：

```yaml
methodology: para | lyt | zettel | generic
```

| 模式 | 核心思想 | 页面类型 |
|------|---------|---------|
| `para` | 项目/领域/资源/归档 | project / area / resource + concept/entity/source |
| `lyt` | MOC 导航 + Ace 原则 | home / moc / concept(+ace) / entity / idea |
| `zettel` | 原子笔记 + Folgezettel | hub / permanent / literature |
| `generic` | 最少结构，链接+标签 | note |

模板位于 `_meta/system/templates/modes/{mode}/`。

无 `methodology` 字段 → 默认 `para`，完全向后兼容。

---

## 五、Frontmatter 规范

所有笔记（除 `0 Inbox/` 和 `_meta/system/logs/` 外）必须包含：

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: "001.8"          # UDC 类号（支持复合：001.8:004.8）
tags: [tag1, tag2]    # 标签（PARA 用 #area/* / #resource/* / #project）
methodology: para     # 可选，默认 para
---
```

### 模式专有字段

| 模式 | 字段 | 说明 |
|------|------|------|
| lyt | `ace:` | 笔记的一句话定义（用于 MOC Ace 列） |
| lyt | `mocs:` | 该笔记出现在哪些 MOC |
| zettel | `hub:` | 所属 Hub（集线页）路径 |
| zettel | `folgezettel:` | 前一个笔记路径（序列链） |
| zettel | `liveness:` | budding / green / ripe / evergreen |

---

## 六、UDC 分类法

格式：`\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*`

| 类号 | 类目 |
|------|------|
| 001.8 | 知识组织与管理 |
| 004.8 | 人工智能 / LLM |
| 025.4 | 分类法 / 索引 |
| 929 | 人物传记 |
| 001.8:004.8 | 知识组织与 AI |
| 004.8:519.6 | AI 数学基础 |

自动建议管道：模板默认 → 目录启发 → 关键词匹配 → AI 兜底。

---

## 七、三语言镜像

| 语言 | 路径前缀 | 命名约定 |
|------|---------|---------|
| 简体中文 | 根目录 | 中文描述 + 空格 |
| English | `en/` | kebab-case |
| 繁體中文 | `zh-tw/` | 中文描述 + 空格 |

跨语言链接规则：
- 同语言存在 → 指向同语言
- 同语言不存在 → fallback CN 完整路径
- 索引页例外：各自指向同语言索引

---

## 八、Advisory Lock 规程

编辑已有文件前，在 frontmatter 添加可见锁：

```yaml
lock_advisory: {holder: "agent-name", acquired_at: "2026-06-12T14:30:00"}
```

编辑完成后退除。读操作不上锁。锁有效期 10 分钟。

---

## 九、关键参考文件

| 文件 | 用途 |
|------|------|
| `AGENTS.md` | AI 行为规范（权威） |
| `WIKI.md` | Vault 入口快速引导 |
| `_meta/hot.md` | 热缓存（会话上下文） |
| `_meta/index/links/Index/_index-zh-cn.md` | 总索引 |
| `_meta/ai/skills/registry.md` | 技能注册表 |
| `_meta/system/templates/` | 全部模板 |
| `_meta/system/scripts/wiki-lock.py` | 文件锁脚本 |
| `.codex/hooks.json` / `.claude/hooks.json` | 会话生命周期 |

---

## 十、平台部署

KOS 技能通过 canon 源同步到各 AI 平台：

```
_meta/ai/skills/canon/   → 权威源
  → .codex/skills/        → Codex 平台
  → .claude/skills/       → Claude Code 平台
  → .flownote/skills/     → FLOWnote 平台
```

同步脚本：`_meta/system/scripts/sync-skills.py`

---

## 十一、版本历史

| 版本 | 日期 | 概要 |
|------|------|------|
| **v3.0.2** | 2026-06-12 | WIKI.md 表格修复（管道符转义/目录链接/对齐）+ 三语言同步 |
| **v3.0.1** | 2026-06-12 | Phase 1 WP 全部实施完成 + 验收测试通过 + 文档同步 |
| **v3.0** | 2026-06-12 (v3.0.1) | 方法论模式 + AutoResearch + 检索增强 + 矛盾标记 + WIKI.md |
| v3.0-rc | 2026-06-09 | 三平台 Skill 架构 / KOS 引擎 / 热缓存 / 文件锁 / Canvas |
| v2.0 | 2026-06-07 | LifeOS × LLM-Wiki 融合 / Codex 适配 / 三语言 |
| v1.0 | 2026-06-03 | 初始系统构建 |

