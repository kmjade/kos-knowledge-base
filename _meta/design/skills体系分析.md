---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:004.8
tags: [design, analysis, architecture, skills]
status: draft
---

# Skills 体系现状分析

> 基于 2026-06-09 全 vault 扫描的 skills 体系全景分析。

## 发现：4 套独立 Skills 体系

### 1. `.flownote/skills/` + `.opencode/skills/` — AH Skills 套件

完整的 Obsidian AI Agent 技能包，共 18 个专用 skill：

| Skill | 用途 | 状态 |
|-------|------|------|
| `ah-inbox` | 收件箱处理 | ✅ 完整 |
| `ah-note` | 笔记创建 | ✅ 完整 |
| `ah-card` | 卡片笔记 (Zettelkasten) | ✅ 完整 |
| `ah-read` | 阅读工作流 | ✅ 完整 |
| `ah-think` | 思维模型库（费曼、MECE 等 30+） | ✅ 完整 |
| `ah-review` | 回顾体系 | ✅ 完整 |
| `ah-week` | 周报 | ✅ 完整 |
| `ah-month` | 月报 | ✅ 完整 |
| `ah-year` | 年报 | ✅ 完整 |
| `ah-memory` | 记忆/状态管理 | ✅ 完整 |
| `ah-project` | 项目管理 | ✅ 完整 |
| `ah-capture` | 快速捕获 | ✅ 完整 |
| `ah-archive` | 归档 | ✅ 完整 |
| `ah-init` | 初始化 | ✅ 完整 |
| `ah-legacy` | 遗留内容处理 | ✅ 完整 |
| `obsidian-markdown` | Obsidian Markdown 工具 | ✅ 完整 |
| `obsidian-cli` | Obsidian CLI 工具 | ✅ 完整 |
| `obsidian-bases` | Obsidian Bases 工具 | ✅ 完整 |

**问题：** 放在 `.flownote/` 和 `.opencode/` 下，Claude Code 不会识别（需放入 `.claude/skills/` 才能调用）。

**冗余：** `.opencode/backups/` 下有多次备份，内容重复。

### 2. `_agents/` — 自定义角色定义

| 文件 | 内容 | 问题 |
|------|------|------|
| `_agents/life/分析师.md` | 周/月三支柱趋势报告 | ❌ 仅文档，不可执行 |
| `_agents/life/简报员.md` | 晨间简报 + 傍晚回顾 | ❌ 与 AGENTS.md 会话协议重叠 |
| `_agents/life/协作者.md` | 目标进度异常提醒 | ❌ 仅文档，不可执行 |
| `_agents/kos/README.md` | 空占位 | ❌ 未填充 |

### 3. AGENTS.md — KOS 引擎命令

| 命令 | 优先级 | 状态 |
|------|--------|------|
| `KOS-Triage` | P0 | ✅ 规则完整 |
| `KOS-Wiki-Compile` | P0 | ✅ 规则完整 |
| `KOS-Link` | P2 | ✅ 规则完整 |
| `Daily Open` | P1 | ⚠️ 规则不完整 |
| `Day-Review` ~ `Year-Review` | P1 | ⚠️ 规则不完整 |

### 4. `_meta/skills/skills.md`

❌ 空文件，仅 1 行，无实质内容。

## 核心问题汇总

| # | 问题 | 影响 |
|---|------|------|
| 1 | 无 `.claude/skills/` 目录 | AH Skills 套件无法被当前 AI 调用 |
| 2 | `_agents/life/` 是文档而非可执行 skill | 分析师/简报员/协作者功能无法自动触发 |
| 3 | `_agents/kos/README.md` 为空 | KOS agent 定义缺失 |
| 4 | `_meta/skills/skills.md` 为空 | 技能追踪索引缺失 |
| 5 | `_agents/life/` 与 AGENTS.md 功能重叠 | 会话协议 vs 角色定义，职责不清 |
| 6 | `.opencode/backups/` 冗余备份 | 占用空间，内容重复 |

## 优化方向建议

- **A — 体系整合**：创建 `.claude/skills/`，将 AH Skills 迁移过去，让 Claude Code 可调用
- **B — Life+AI Agent 升级**：将 `_agents/life/` 角色转化为 SKILL.md，解决与 AGENTS.md 的重叠
- **C — KOS Agent 填充**：完善 `_agents/kos/` 的 agent 定义
- **D — 清理去重**：删除 `.opencode/backups/` 备份，合并重复内容，填补空文件
