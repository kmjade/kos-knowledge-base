---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:004.8:005.1
tags: [architecture, design, init, setup, v3]
status: draft
---

# KOS-Init：知识库初始化引擎

> KOS 第 8 个引擎 — 一键初始化与健康检查
> 对应 ah-init 的初始化/索引更新/主页刷新三模式，适配 KOS 架构

---

## 1. 动机

当前 KOS 系统的初始化分散在多个位置：

| 功能 | 当前位置 | 问题 |
|------|---------|------|
| 目录结构检查 | AGENTS.md 会话协议（隐式） | 新用户看不到 |
| Home 页维护 | 手动 | 无自动刷新机制 |
| 模板完整性 | 无检查 | 缺模板不报错 |
| 索引存在性 | KOS-Link L1 检查 | 需手动触发 |
| 三平台技能部署 | 手动 | 缺技能不报错 |

**KOS-Init** 将所有初始化逻辑集中为一个入口，提供三种模式。

---

## 2. 模式

| 模式 | 命令 | 行为 |
|:----:|------|------|
| **检查** | `KOS-Init --status` | 只读扫描，报告状态，不写任何文件 |
| **修复** | `KOS-Init --fix` | 检查 + 修复可自动修复项（需用户逐项确认） |
| **完整初始化** | `KOS-Init` | 首次运行：目录创建 + Home 页 + 索引 + 模板 + 报告 |

### 2.1 检查清单（10 项）

| # | 检查项 | 自动修复 | 说明 |
|:-:|--------|:--------:|------|
| L1 | PARA 目录完整性 | ✅ | `0 Inbox/` `1 Projects/` `2 Areas/` `3 Resources/` `4 Archives/` |
| L2 | 系统目录完整性 | ✅ | `_meta/` `_logs/` `_attachments/` `_meta/scripts/` `tests/` |
| L3 | `_logs/` 子目录 | ✅ | sessions/ operations/ tasks/ reports/ |
| L4 | `_meta/` 子目录 | ✅ | Templates/ design/ adr/ queries/ |
| L5 | `_attachments/` 子目录 | ✅ | canvases/ media/images/ media/pdfs/ |
| L6 | Home 页存在性 | ✅ | 检查 `_meta/🔗 知识关联/Dashboard/Home.md`（或 `🏠Home.md`）→ 不存在则用模板创建 |
| L7 | 模板完整性 | ❌ | 列出 `_meta/Templates/` 下应有模板，报告缺失 |
| L8 | 索引存在性 | ❌ | 三语言 `_index.md` 存在性检查 |
| L9 | 三平台技能目录 | ❌ | 报告各平台缺失的关键技能 |
| L10 | 热缓存存在性 | ✅ | `_meta/hot.md` 不存在则创建骨架 |

### 2.2 自动修复规则（--fix 模式）

- 缺失目录 → 创建（幂等）
- 缺失 `_meta/🔗 知识关联/Dashboard/Home.md` → 用模板创建
- 缺失 `_meta/hot.md` → 创建骨架（不含具体内容）
- 缺失 `.gitkeep` 占位 → 创建
- **不改动**：已有内容、模板内容、索引内容、技能文件

---

## 3. 与 ah-init 对比

| 特性 | ah-init | KOS-Init | 说明 |
|------|:-------:|:--------:|------|
| 初始化模式 | ✅ A | ✅ | PARA 结构 + HOME 创建 |
| 索引更新模式 | ✅ B | ✅ `--status` | 扫描报告 |
| 主页刷新模式 | ✅ C | ✅ `--fix` Home 检查 | 不含自动区替换 |
| 领域页确认 | ✅ 交互式 | ❌ | KOS 领域由 PARA 目录定义 |
| 主题笔记确认 | ✅ 交互式 | ❌ | KOS 主题由 Compile 管理 |
| 旧笔记迁移 | ✅ 交互式 | ❌ | 由 KOS-Triage 负责 |
| 记忆系统初始化 | ✅ STATUS.md | ✅ hot.md | 热缓存等效 |

---

## 4. 命令集

| 命令 | 别名 | 功能 |
|------|------|------|
| `KOS-Init` | `KOS-Init full` | 完整初始化（目录 + Home + 模板 + 报告） |
| `KOS-Init --status` | `KOS-Init check` | 只读检查，输出状态报告 |
| `KOS-Init --fix` | `KOS-Init repair` | 检查 + 修复（逐项确认） |

---

## 5. 输出格式

所有模式输出结构化状态报告：

```
KOS-Init Status Report
======================
[OK]  0 Inbox/          — 存在
[OK]  1 Projects/       — 存在
[OK]  2 Areas/          — 存在
[OK]  3 Resources/      — 存在
[OK]  4 Archives/       — 存在
[OK]  _meta/            — 存在
[OK]  _logs/            — 存在（4/4 子目录）
[OK]  _attachments/     — 存在（3/3 子目录）
[OK]  _meta/scripts/    — 存在
[OK]  Dashboard/Home.md  — 存在
[WARN] _meta/Templates/ — 缺少 概念模板.md
[OK]  索引 (CN/EN/TW)   — 完整
[OK]  _meta/hot.md      — 存在
[INFO] .claude/skills/  — 7/7 KOS 引擎
[INFO] .codex/skills/   — 7/7 KOS 引擎
[INFO] .opencode/skills/— 7/7 KOS 引擎

Summary: 15/16 checks passed. 1 warning. 0 errors.
```

---

## 6. 不覆盖规则

- 绝不修改已有文件内容
- 绝不删除任何文件
- 创建操作幂等（已存在则跳过）
- `--fix` 模式下每个创建操作需用户确认
- 仅创建目录和缺失的骨架文件

---

## 7. 实施路线

| 阶段 | 内容 | 状态 |
|:----:|------|:----:|
| P0 | 设计文档 | ✅ 本文档 |
| P1 | 三平台 SKILL.md | ✅ |
| P2 | KOS 统一入口集成 | ✅ |
| P3 | `--status` 模式脚本化 | 未来 |
| P4 | `--fix` 模式脚本化 | 未来 |

---

## 8. 参考资料

| 文件 | 说明 |
|------|------|
| [[.flownote/skills/ah-init/SKILL.md]] | ah-init 原始技能 |
| [[.opencode/skills/ah-init/SKILL.md]] | OpenCode 镜像 |
| [[AGENTS.md]] | AI 行为规范（含会话协议） |
| [[_meta/design/KOS-LLM-Wiki架构说明v3.0.md]] | 当前架构说明 |
| [[_meta/Templates/]] | 模板目录 |

---

> **设计状态：** v1.0 初稿
