---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [design, analysis, codex, claude-obsidian, reference]
status: draft
---

# claude-obsidian 项目分析 — Codex CLI 视角

> 基于 2026-06-09 全项目扫描，从 Codex CLI 兼容性角度分析

---

## 一、Codex CLI 的技能体系

Codex CLI 使用 `.codex/skills/` 目录下的 SKILL.md 文件定义技能，遵循 Agent Skills 规范：

```yaml
---
name: skill-name
description: 一行描述
---
```

与 Claude Code 的关键差异：

| 维度 | Claude Code | Codex CLI |
|------|------------|-----------|
| 技能目录 | `.claude/skills/` | `.codex/skills/` |
| 入口文件 | `CLAUDE.md` | `AGENTS.md` |
| Hooks 机制 | `hooks/hooks.json` 原生支持 | 无原生 hooks，通过 AGENTS.md 协议模拟 |
| Marketplace | 有（插件市场） | 无（直接读取 SKILL.md） |
| 生命周期 | SessionStart/PostCompact/PostToolUse/Stop | 依赖 AGENTS.md 会话协议 |
| 多 Agent | Claude Code 专属 | Codex + Claude + Gemini 均可 |

---

## 二、claude-obsidian 对 Codex CLI 的可移植性

### 可直接复用的技能

| 技能 | 适配方式 | 改动量 |
|------|---------|-------|
| `obsidian-markdown` | 纯参考文档，零改动 | 无 |
| `obsidian-bases` | 纯参考文档，零改动 | 无 |
| `obsidian-cli` | 纯参考文档，零改动 | 无 |
| `defuddle` | 纯参考逻辑 | 无 |
| `json-canvas` | 纯参考文档，零改动 | 无 |
| `think`（10原则） | 纯方法论，平台无关 | 无 |

### 需适配的技能

| 技能 | 适配原因 | 改动量 |
|------|---------|-------|
| `wiki` | 初始化逻辑相同，需复制到 `.codex/skills/wiki/` | 低 |
| `wiki-ingest` | 核心逻辑相同，路径/命令微调 | 低 |
| `wiki-query` | 检索逻辑相同，查询指令格式微调 | 低 |
| `wiki-lint` | 检查逻辑相同，输出格式微调 | 低 |
| `wiki-fold` | 纯逻辑，平台无关 | 无 |
| `wiki-retrieve` | Python 脚本可跨平台调用 | 低 |
| `wiki-mode` | 方法论切换，平台无关 | 无 |
| `save` | 文件操作逻辑相同 | 低 |
| `autoresearch` | 循环逻辑可复用 | 中 |
| `canvas` | JSON Canvas 逻辑相同 | 低 |

### 不可移植的部分

| 特性 | 原因 |
|------|------|
| `hooks/hooks.json` | Codex CLI 无原生 Hooks 系统 |
| `marketplace.json` | Codex CLI 无 Marketplace |
| `plugin.json` | Codex CLI 无插件系统 |
| `bin/setup-vault.sh` | 脚本中的 Claude Code 特定逻辑 |
| `bin/setup-multi-agent.sh` | Codex CLI 路径不同 |

---

## 三、Codex CLI 版本的优化机会

### 用 AGENTS.md 替代 hooks.json

```
AGENTS.md（Codex 原生）
├── 会话协议 → 替代 SessionStart / Stop
├── 上下文管理 → 替代 PostCompact（读取 hot.md）
├── 操作日志 → 替代 PostToolUse（手动记录而非 git commit）
└── 状态检查 → 会话启动时自动检查 Inbox
```

### 核心差异：git 自动提交

Claude Code 的 PostToolUse hook 自动执行 `git add + commit`。Codex CLI 无此机制，替代方案：
- 在 AGENTS.md 中要求每次 Write/Edit 后执行 `git commit`
- 或使用外部 watcher（如 `watchman`）

### 路径差异

| 资源 | Claude Code | Codex CLI |
|------|------------|-----------|
| Vault 根路径 | `~/claude-obsidian/` | `J:\KOS_LLM-Wiki` |
| Skills 目录 | `.claude/skills/` | `.codex/skills/` |
| Agent 定义 | `agents/` | `AGENTS.md` + `.codex/` |

---

## 四、对 KOS_LLM-Wiki 的启示

本 vault 当前使用 Codex CLI（通过 AGENTS.md），因此 claude-obsidian 的 hooks 机制需要转换为 AGENTS.md 会话协议。

### 可立即借鉴的设计

| 特性 | Codex 实现方式 |
|------|--------------|
| **热缓存** | AGENTS.md 要求启动时读取 `wiki/hot.md` |
| **文件锁** | `.codex/scripts/wiki-lock.sh`（移植脚本） |
| **三级查询** | 在 AGENTS.md 中定义 KOS-Query 三级模式 |
| **Delta 追踪** | `.raw/.manifest.json` 记录文件哈希 |

### 需改造的设计

| 特性 | 原因 | 替代方案 |
|------|------|---------|
| PostCompact hook | Codex 无此机制 | AGENTS.md 要求每次工具调用后检查上下文 |
| PostToolUse | Codex 无此机制 | AGENTS.md 要求 Write/Edit 后写日志 |
| SessionStart hook | Codex 无此机制 | AGENTS.md 会话协议实现 |

---

## 五、总结

claude-obsidian 的技能体系约 **80% 可移植**到 Codex CLI，核心障碍在于 Hooks 机制。本 vault 的 AGENTS.md 已经部分解决了这个问题，但仍缺少：

1. **文件锁** — 防止并发冲突
2. **热缓存** — 跨会话上下文恢复
3. **Delta 追踪** — 避免重复编译

这些是生成 KOS Skill 文件时的优先实现项。

---

## 参考资料

- [[_meta/design/claude-obsidian分析-claude.md|claude-obsidian 分析 — Claude 视角]]
- [[4 Archives/claude-obsidian/claude-obsidian.md|claude-obsidian 归档]]
- [[_meta/design/skills体系分析.md|Skills 体系现状分析]]
