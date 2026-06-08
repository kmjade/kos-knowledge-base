# CLAUDE.md

本文件为 Claude Code（claude.ai/code）提供使用此仓库的指引。

## 仓库概述

KOS_LLM-Wiki 是一个**个人知识管理系统**——非软件项目。它融合了 PARA 方法论、UDC 分类法和 LLM-Wiki 概念，通过 Obsidian 管理并辅以 AI Agent 驱动。没有构建系统、测试套件或应用代码。

规范行为参考为 `AGENTS.md`——本文未覆盖的任何操作请先阅读该文件。本文覆盖的是 AI Agent 快速上手所需的信息。

## 核心架构

```
KOS_LLM-Wiki/
├── 0 Inbox/          # 待分拣笔记
├── 1 Projects/       # 有目标和截止日期的项目
├── 2 Areas/          # 持续关注的领域（生活/学习/工作）
├── 3 Resources/      # 参考资料库（LLM-Wiki, PARA, UDC, People）
│   └── 000-Knowledge/wikis/ → concepts/ entities/ sources/
├── 4 Archives/       # 已完成项目（gitignored）
├── Periodic/         # 日/周/月/季/年笔记（gitignored）
├── _meta/            # 系统配置：模板、ADR、查询、索引、ai-memory
│   └── hot.md        # 热缓存：会话上下文摘要（~500 字）
├── en/               # English mirror
├── zh-tw/            # 繁體中文鏡像
├── _agents/          # AI 角色定义（简报员, 分析师, 协作者）
├── _logs/            # 操作日志（triage, compile, maintenance, reports）
├── .claude/          # Claude Code 配置
│   └── hooks.json    # 生命周期 hooks（SessionStart, PostCompact, PostToolUse, Stop）
├── scripts/          # 工具脚本
│   └── wiki-lock.sh  # 文件锁（多 agent 安全写入）
├── AGENTS.md         # AI 行为规范（主）
└── CLAUDE.md         # 本文件
```

## 语言与命名规范

- **简体中文（CN）**：根目录，中文文件名加空格（如 `提示工程.md`）
- **English（EN）**：`en/` 目录，kebab-case 文件名（如 `prompt-engineering.md`）
- **繁體中文（TW）**：`zh-tw/` 目录，中文文件名加空格

三语言版本必须保持同步。CN 为权威来源；当 EN/TW 不存在对应页面时，跨语言链接回退到 CN 完整路径。

## AI 引擎命令

| 命令 | 功能 |
|------|------|
| `KOS-Triage [--file <path>] [--status]` | Inbox 四维分拣：时效性、主题、类型、复杂度；路由到目标目录 |
| `KOS-Wiki-Compile [--topic <name>] [--file <path>] [--status]` | raw/ 编译为 wiki/ 页面（六步管道） |
| `KOS-Link [--path <dir>] [--file <path>] [--fix] [--status]` | 校验 frontmatter、UDC 索引、断链、跨语言一致性 |
| `KOS-Query [quick\|standard\|deep] <问题>` | 三级知识库查询（Quick/Standard/Deep） |
| `Day-Review` / `Week-Review` / `Month-Review` / `Quarter-Review` / `Year-Review` | 周期回顾 |
| `Daily Open` | 创建今日笔记 |

所有引擎**幂等**——已处理的内容不重复操作，绝不覆盖 `reviewed: true` 的内容。

## 笔记 Frontmatter（必填）

每篇笔记必须包含 YAML frontmatter：

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <UDC 类号>
tags: [tag1, tag2]
---
```

UDC 类号遵循 `\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*` 模式。常用 UDC 前缀：`004.8`（AI/LLM）、`001.8`（知识组织）、`025.4`（分类法）、`929`（人物/传记）。UDC 建议遵循四层管道：模板默认值 → 目录启发式 → 关键词匹配 → AI 分析。

## 表格格式

所有 Markdown 表格必须使用对齐分隔行。Obsidian wikilink 中的 `|` 须转义为 `\|`。

## 跨语言链接规则

- **A — 同语言存在对应页面** → 指向同语言（EN→EN，TW→TW）
- **B — 不存在翻译** → 回退到 CN 并带完整路径（如 `[[3 Resources/000-Knowledge/xxx\|显示名]]`）
- **C — 共享内容**（索引、模板、分类页面） → 始终指向 CN

索引链接（按语言）：
- CN → `[[_meta/🔗 知识关联/Index/_index-zh-cn\|索引]]`
- EN → `[[en/_meta/Knowledge-Links/Index/_index-en\|Index]]`
- TW → `[[zh-tw/_meta/🔗 知识关联/Index/_index\|索引]]`

## 热缓存

`_meta/hot.md` 是一个约 500 字的最新会话上下文摘要。任何会话都可以通过它获取最近上下文，而无需爬取整个 vault。

- **会话启动**：Claude Code 通过 `hooks.json` SessionStart hook 自动读取
- **压缩后**：通过 PostCompact hook 自动重新读取
- **运行中**：重大 KOS 操作（Triage/Compile/Review）后更新
- **会话结束**：写入本次变更摘要

## 会话协议

**开始**：加载 AGENTS.md → 读取 `_meta/hot.md`（Claude Code 通过 hooks 自动完成）→ 检查活跃工单 → 检查 Inbox → 检查编译状态 → 检查当日笔记 → 输出状态摘要。

**运行中**：重大 KOS 操作后更新 `_meta/hot.md`。其他变更通过 `hooks.json` PostToolUse 自动追踪。

**结束**：更新 `_meta/hot.md`（会话摘要）→ 操作日志写入 `_logs/operations/maintenance.md` → 记录 Agent 活动到当日笔记 → 清理临时文件。

## AI 记忆

`_meta/ai-memory/全局状态.md` 追踪初始化状态、阅读队列、卡片笔记、活跃项目和跨会话的回顾状态。

## 关键参考文件

- `AGENTS.md` — AI 完整行为规范（引擎、规则、模板）
- `_meta/hot.md` — 热缓存：最近会话上下文（~500 字）
- `_meta/🔗 知识关联/Index/_index-zh-cn.md` — 主索引（CN）
- `en/_meta/Knowledge-Links/Index/_index-en.md` — 主索引（EN）
- `zh-tw/_meta/🔗 知识关联/Index/_index.md` — 主索引（TW）
- `_meta/Templates/` — 笔记模板（全部类型）
- `_meta/queries/` — Dataview 查询库（6 个预定义查询）
- `_meta/adr/` — 架构决策记录
- `_meta/design/KOS-LLM-Wiki架构说明.md` — 架构说明书 v3.0
- `.claude/hooks.json` — 生命周期 hooks（SessionStart, PostCompact, PostToolUse, Stop）
- `.claude/skills/kos-query/SKILL.md` — 三级查询技能定义
- `scripts/wiki-lock.sh` — 文件锁（多 agent 安全写入）
- `1 Projects/UDC 自动建议/build_keyword_map.py` — 从标注笔记生成 UDC 关键词映射
