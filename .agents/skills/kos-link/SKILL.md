---
name: kos-link
description: "校验 vault 健康度。五级核心检查：L1 Frontmatter → L2 UDC → L3 链接 → L4 跨语言 → L5 项目状态。可选: L6(空正文), L7(陈旧声明)。"
allowed-tools: Read Write Edit Bash
---

# KOS-Link：链接与健康度校验引擎

> 只读操作（不加 `--fix` 不修改任何文件）
> **核心检查 L1-L5（始终运行）**。可选检查 L6-L7 使用 `--all` 或 `--level 6` 启用。

---

## 检查体系

### L1 — Frontmatter 完整性 [核心]

| 检查项 | 排除目录 |
|--------|---------|
| created/updated 字段存在 | `_meta/system/logs/`、`0 Inbox/` |
| 日期格式 YYYY-MM-DD | — |
| udc 字段存在 | — |
| tags 字段存在 | — |

### L2 — UDC 校验 [核心]

| 检查项 | 排除目录 |
|--------|---------|
| 格式 `\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*` | `_meta/system/logs/`、`0 Inbox/`、`Periodic/`、`_meta/` |
| 类号是否在映射表中 | 同上 |

### L3 — 链接完整性 [核心]

| 检查项 | 处理 |
|--------|------|
| `[[wiki\u94fe\u63a5]]` 目标存在 | 不通过则报 broken |
| `[md](link.md)` 目标存在 | 不通过则报 broken |
| 循环引用 >10 跳 | 报 info（非 error） |
| 外部 URL | 忽略 |

### L4 — 跨语言一致性 [核心]

| 检查项 | 排除目录 |
|--------|---------|
| 三语言镜像齐全 | `_meta/system/logs/`、`0 Inbox/`、`Periodic/` |
| udc/tags/methodology 一致 | 同上 |

> \methodology\ 为 v1.4 新增字段（para/lyt/zettel/generic）。三语言镜像必须保持相同的 methodology 值。


### L5 — 项目状态 [核心]

| 检查项 |
|--------|
| `status: completed` 仍留在 `1 Projects/` |
| `[x]` 任务但 status: active |

### L6 — 空正文检测 [可选]

> 默认跳过。使用 `--level 6` 或 `--all` 启用。

| 检查项 | 排除目录 |
|--------|---------|
| 文件是否仅含 frontmatter 无正文 | `_meta/system/logs/`、`0 Inbox/`、`.git/`、`.obsidian/` |
| `--fix` 时自动从备份恢复 | 同上 |

### L7 — 陈旧声明检测 [可选]

> 默认跳过。使用 `--level 7` 或 `--all` 启用。

| 检查项 |
|--------|
| updated > 180 天且无 `stale: true` 标记 |
| updated > 365 天自动标记 `stale: true` |

---

## 自动修复（`--fix`，需确认）

### 可自动修复

| 问题 | 修复方式 |
|------|---------|
| created/updated 缺失 | 用当前日期填充 |
| UDC 格式错误 | 标准化（不改类号） |
| 跨语言文件缺失 | 复制骨架文件 |

### 不可自动修复

| 问题 | 处理 |
|------|------|
| udc/tags/methodology 缺失或不一致 | 报错，人工处理 |
| 断链 | 报错，人工处理 |
| 项目状态不一致 | 报错，人工处理 |

---

## 参数

- `--path <dir>` — 校验指定目录
- `--file <path>` — 校验指定文件
- `--fix` — 启用自动修复（需用户确认）
- `--status` — 仅显示状态
- `--level <N>` — 指定检查级别（默认 1-5）
- `--all` — 启用全部检查（含 L6/L7）


