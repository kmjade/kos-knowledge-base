---
name: kos-init
description: KOS 知识库初始化与健康检查引擎。检查目录完整性、Home 页、模板、索引、三平台技能部署状态。命令：KOS-Init, KOS-Init --status, KOS-Init --fix.
allowed-tools: Read Write Edit Glob Grep
---

# KOS-Init：知识库初始化引擎

> 一键初始化与健康检查 — 幂等操作，绝不覆盖已有内容

---

## 命令

| 命令 | 别名 | 功能 |
|------|------|------|
| `KOS-Init` | `KOS-Init full` | 完整初始化（目录 + Home + 模板 + 状态报告） |
| `KOS-Init --status` | `KOS-Init check` | 只读检查，输出状态报告，不写文件 |
| `KOS-Init --fix` | `KOS-Init repair` | 检查 + 修复可自动修复项（逐项确认） |

---

## 检查清单（10 项）

| # | 检查项 | 自动修复 | 检查方式 |
|:-:|--------|:--------:|----------|
| L1 | PARA 目录 | ✅ | 5 个根目录存在性 |
| L2 | 系统目录 | ✅ | 4 个系统目录存在性 |
| L3 | `_logs/` 子目录 | ✅ | sessions/ operations/ tasks/ reports/ |
| L4 | `_meta/` 子目录 | ✅ | Templates/ design/ adr/ queries/ |
| L5 | `_attachments/` 子目录 | ✅ | canvases/ media/images/ media/pdfs/ |
| L6 | Home 页 | ✅ | 检查 `_meta/🔗 知识关联/Dashboard/Home.md`（或 `🏠Home.md`） |
| L7 | 模板完整性 | ❌ | 列出 `_meta/Templates/` 下应有模板 |
| L8 | 三语言索引 | ❌ | 检查 CN/EN/TW 索引文件存在性 |
| L9 | 三平台技能部署 | ❌ | 报告各平台 KOS 引擎技能数量 |
| L10 | 热缓存 | ✅ | `_meta/hot.md` 存在性 |

---

## 完整初始化流程（`KOS-Init`）

### Step 1：目录检查

1. 检查 PARA 目录：`0 Inbox/` `1 Projects/` `2 Areas/` `3 Resources/` `4 Archives/`
2. 检查系统目录：`_meta/` `_logs/` `_attachments/` `scripts/` `tests/`
3. 检查 `_logs/` 子目录：`sessions/` `operations/` `tasks/` `reports/`
4. 检查 `_meta/` 子目录：`Templates/` `design/` `adr/` `queries/`
5. 检查 `_attachments/` 子目录：`canvases/` `media/images/` `media/pdfs/`
6. 缺失 → 创建（幂等，已存在则跳过）

### Step 2：Home 页检查

1. 查找 `_meta/🔗 知识关联/Dashboard/Home.md`（优先）或 `🏠Home.md`
2. 如果都不存在 → 用 Home 模板创建 `_meta/🔗 知识关联/Dashboard/Home.md`
3. 模板路径：`_meta/Templates/` 下查找，无模板则创建最小骨架

### Step 3：模板检查

1. 列出 `_meta/Templates/*.md`
2. 与期望模板清单对比，报告缺失

### Step 4：索引检查

1. CN: `_meta/🔗 知识关联/Index/_index-zh-cn.md`
2. EN: `en/_meta/Knowledge-Links/Index/_index-en.md`
3. TW: `zh-tw/_meta/🔗 知识关联/Index/_index.md`
4. 报告存在/缺失

### Step 5：热缓存检查

1. 检查 `_meta/hot.md`
2. 不存在 → 创建骨架 frontmatter

### Step 6：输出报告

按以下格式输出状态报告。

---

## --status 模式（只读）

执行 Step 1-6 的检查部分，**不创建任何文件**。输出状态报告后结束。

---

## --fix 模式（修复）

执行 Step 1-6 的检查部分，对标记为"自动修复"的项目：

1. 对每个可修复问题，输出问题描述和修复方案
2. 逐项询问用户确认：`"是否创建 [缺失项]？(y/n)"`
3. 用户确认后执行创建
4. 用户拒绝则跳过，标记为 WARN
5. 修复完成后输出最终报告

---

## 不覆盖规则

- 绝不修改已有文件内容
- 绝不删除任何文件
- 创建操作幂等（已存在则跳过）
- `--fix` 模式每个创建操作需逐项确认
- 仅创建目录和缺失的骨架文件

---

## 输出示例

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
[OK]  scripts/          — 存在
[OK]  tests/            — 存在
[OK]  Dashboard/Home.md  — 存在
[WARN] 模板检查           — 缺少 概念模板.md
[OK]  索引 (CN)         — _index-zh-cn.md 存在
[OK]  索引 (EN)         — _index-en.md 存在
[OK]  索引 (TW)         — _index.md 存在
[OK]  hot.md            — 存在
[INFO] .claude/skills/  — 7/7 KOS 引擎
[INFO] .codex/skills/   — 7/7 KOS 引擎
[INFO] .opencode/skills/— 7/7 KOS 引擎

Summary: 18/18 checks passed. 1 warning. 0 errors.
```

---

## 参见

- [[_meta/design/kos-init-设计.md]] — 完整设计文档
- 各 KOS 引擎 SKILL.md：kos-triage, kos-compile, kos-link, kos-daily, kos-query, canvas
