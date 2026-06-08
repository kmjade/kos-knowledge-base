---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:004.8
tags: [meta, skills, index, reference]
---

# Skills 索引

> KOS_LLM-Wiki 全部可用技能速查手册
> 更新于：2026-06-09

---

## 🎯 KOS 核心引擎（.claude/skills/）

由 `/kos` 统一入口调度，覆盖知识组织全流程。

| 技能 | 命令 | 功能 | 优先级 |
|------|------|------|--------|
| **KOS** | `/kos` | 统一入口，自动识别意图分发给子技能 | P0 |
| **Triage** | `/kos-triage` | 分拣 Inbox → 目标目录（四维分析） | P0 |
| **Compile** | `/kos-compile` | 编译 raw → wiki 知识页面（六步管道） | P0 |
| **Link** | `/kos-link` | 五级健康校验（Frontmatter/UDC/链接/跨语言/项目） | P2 |
| **Daily** | `/kos-daily` | 每日笔记 + 周期回顾（日/周/月/季/年） | P1 |

### 详细参考

- [[../.claude/skills/kos/SKILL.md|KOS 统一入口]]
- [[../.claude/skills/kos-triage/SKILL.md|KOS-Triage 规则]]
- [[../.claude/skills/kos-compile/SKILL.md|KOS-Compile 规则]]
- [[../.claude/skills/kos-link/SKILL.md|KOS-Link 规则]]
- [[../.claude/skills/kos-daily/SKILL.md|KOS-Daily 规则]]

---

## 🤖 Life+AI 角色（_agents/life/）

三支柱日常辅助角色，在会话中由 AI 主动触发。

| 角色 | 文件 | 职责 | 触发时机 |
|------|------|------|---------|
| 简报员 | [[../../_agents/life/简报员.md]] | 晨间简报 + 傍晚回顾 | 会话开始/结束 |
| 分析师 | [[../../_agents/life/分析师.md]] | 周/月三支柱趋势报告 | 周日/月初 |
| 协作者 | [[../../_agents/life/协作者.md]] | 目标进度异常提醒 | 时间过半 + 进度不足 |

---

## 📚 AH Skills 套件（.flownote/skills/）

完整的 Obsidian 工作流技能包，源自 claude-obsidian 项目。

| 领域 | 包含技能 | 说明 |
|------|---------|------|
| 📥 收件箱 | `ah-inbox` | 收件箱处理与路由 |
| 📝 笔记 | `ah-note` | 笔记创建与维护 |
| 🃏 卡片 | `ah-card` | Zettelkasten 卡片笔记 |
| 📖 阅读 | `ah-read` | 阅读工作流 |
| 🧠 思维 | `ah-think` | 30+ 思维模型（费曼、MECE 等） |
| 🔄 回顾 | `ah-review`, `ah-week`, `ah-month`, `ah-year` | 周期回顾体系 |
| 💾 记忆 | `ah-memory` | 状态管理 |
| 📁 项目 | `ah-project` | 项目管理 |
| 🎯 捕获 | `ah-capture` | 快速捕获 |
| 📦 归档 | `ah-archive` | 归档处理 |
| 🚀 初始化 | `ah-init` | 系统初始化 |
| ♻️ 遗留 | `ah-legacy` | 遗留内容处理 |
| 📐 Obsidian | `obsidian-markdown`, `obsidian-cli`, `obsidian-bases` | Obsidian 工具集 |

**注意**：AH Skills 位于 `.flownote/skills/`，当前 Claude Code 不自动识别。需迁移至 `.claude/skills/` 方可调用。

---

## 📦 外部参考项目

| 项目 | 版本 | 仓库 | 说明 |
|------|------|------|------|
| claude-obsidian | v1.9.2 | [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | AH Skills 和 hooks 系统的来源项目 |
| obsidian-skills | — | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Obsidian 官方技能参考 |

---

## 📊 技能分布总览

```
.claude/skills/       → 5 KOS 技能 ✅ 可用
_agents/life/         → 3 角色定义 📄 参考
.flownote/skills/     → 18 AH Skills 📦 待迁移
_opencode/skills/     → 18 AH Skills（副本）
_agents/_agents.md    → Agents 索引 ✅ 已创建
_agents/kos/          → KOS Agent 规格 ✅ 已定义
```

---

## 🔜 待办

- [ ] AH Skills 迁移到 `.claude/skills/`
- [x] 创建 `.claude/settings.json` ✅
- [x] 填充 `_agents/kos/README.md` ✅
- [ ] 实现 `_meta/hot.md` 热缓存机制
