---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [design, analysis, opencode, claude-obsidian, reference]
status: draft
---

# claude-obsidian 项目分析 — OpenCode 视角

> 基于 2026-06-09 全项目扫描，从 OpenCode 兼容性角度分析

---

## 一、OpenCode 的技能体系

OpenCode 使用 `.opencode/skills/` 目录下的 SKILL.md 文件定义技能，遵循 Agent Skills 规范。与 Claude Code 高度兼容。

### 格式对比

| 维度 | Claude Code | OpenCode |
|------|------------|----------|
| 技能目录 | `.claude/skills/` | `.opencode/skills/` |
| SKILL.md 格式 | 标准 Agent Skills | 完全兼容 |
| 生命周期 | hooks.json | 无原生 hooks |
| 规则文件 | CLAUDE.md | OPENCODE.md |
| 多 Agent | 单 Agent | 多 Agent 友好 |

---

## 二、本 vault 的 OpenCode 现状

当前 `.opencode/skills/` 已完整部署 **AH Skills 套件**（18 个技能），但与 `.flownote/skills/` **完全重复**。

### 现有技能列表

```
.opencode/skills/
├── ah/                   # 统一入口
├── ah-archive/           # 归档
├── ah-capture/           # 快速捕获
├── ah-card/              # 卡片笔记
├── ah-inbox/             # 收件箱处理
├── ah-init/              # 初始化
├── ah-legacy/            # 遗留内容
├── ah-memory/            # 记忆/状态
├── ah-month/             # 月报
├── ah-note/              # 笔记创建
├── ah-project/           # 项目管理
├── ah-read/              # 阅读引导
├── ah-review/            # 每日回顾
├── ah-think/             # 思维模型
├── ah-week/              # 周报
├── ah-year/              # 年报
├── defuddle/             # 网页清理
├── json-canvas/          # Canvas 格式
├── obsidian-bases/       # Bases 参考
├── obsidian-cli/         # CLI 工具
└── obsidian-markdown/    # Markdown 参考
```

### 问题

| # | 问题 | 影响 |
|---|------|------|
| 1 | 与 `.flownote/skills/` 完全重复 | 维护两倍文件 |
| 2 | 没有 KOS 引擎技能 | KOS-Triage/Compile/Link 只能手动执行 |
| 3 | `.opencode/backups/` 有冗余备份 | 占用空间 |

---

## 三、claude-obsidian → OpenCode 可移植性

OpenCode 与 Claude Code 的 SKILL.md 格式**完全兼容**，因此 claude-obsidian 的所有技能可以直接复制到 `.opencode/skills/`。

### 可直接复制的技能

| 技能 | 路径 | 改动量 |
|------|------|-------|
| obsidian-markdown | `.opencode/skills/obsidian-markdown/` | 已存在 |
| obsidian-bases | `.opencode/skills/obsidian-bases/` | 已存在 |
| obsidian-cli | `.opencode/skills/obsidian-cli/` | 已存在 |
| defuddle | `.opencode/skills/defuddle/` | 已存在 |
| json-canvas | `.opencode/skills/json-canvas/` | 已存在 |

### 需要新增的 KOS 技能

| KOS 技能 | 目标路径 | 说明 |
|----------|---------|------|
| kos-triage | `.opencode/skills/kos-triage/` | Inbox 分拣 |
| kos-compile | `.opencode/skills/kos-compile/` | Wiki 编译 |
| kos-link | `.opencode/skills/kos-link/` | 链接检查 |
| kos-daily | `.opencode/skills/kos-daily/` | 每日笔记+回顾 |

---

## 四、对 KOS_LLM-Wiki 的启示

### 优势

OpenCode 的 SKILL.md 兼容性使得 claude-obsidian 的技能**零改动移植**。本 vault 只需将 KOS 引擎也实现为 SKILL.md 格式，即可在 OpenCode 中直接调用。

### 建议

1. **KOS 技能化** — 将 AGENTS.md 中的 KOS 命令转为 `.opencode/skills/kos-*/` 的 SKILL.md
2. **去重** — 确认 `.opencode/skills/` 与 `.flownote/skills/` 是否需同步维护
3. **清理备份** — 移除 `.opencode/backups/` 中的冗余备份
4. **统一入口** — 创建 `/kos` 入口技能，类似 `ah` 的调度中心

---

## 五、总结

OpenCode 对 claude-obsidian 技能的兼容性最好（格式完全一致）。本 vault 的核心任务是：

1. ✅ AH Skills 已部署（需去重）
2. ⬜ KOS 引擎需实现为 Skill 格式
3. ⬜ 冗余备份需清理
4. ⬜ 统一入口 `kos` 需创建

---

## 参考资料

- [[_meta/architecture/design/claude-obsidian分析-claude.md|claude-obsidian 分析 — Claude 视角]]
- [[_meta/architecture/design/claude-obsidian分析-codex.md|claude-obsidian 分析 — Codex 视角]]
- [[_meta/architecture/design/skills体系分析.md|Skills 体系现状分析]]
