---
name: kos-link
description: 校验 vault 健康度。七级检查：L1 Frontmatter → L2 UDC → L3 链接 → L4 跨语言 → L5 项目状态 → L6 空正文检测 → L7 陈旧声明。支持 --fix 自动修复。
---

# KOS-Link：链接与健康度校验引擎

> 只读操作（不加 `--fix` 不修改任何文件）；扫描结果记录到 `_meta/.manifest.json` 追踪健康度趋势

---

## 六级检查体系

### L1 — Frontmatter 完整性

| 检查项 | 排除目录 |
|--------|---------|
| created/updated 字段存在 | `_meta/system/logs/`、`0 Inbox/` |
| 日期格式 YYYY-MM-DD | — |
| udc 字段存在 | — |
| tags 字段存在 | — |

### L2 — UDC 校验

| 检查项 | 排除目录 |
|--------|---------|
| 格式 `\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*` | `_meta/system/logs/`、`0 Inbox/`、`Periodic/`、`_meta/` |
| 类号是否在映射表中 | 同上 |

### L3 — 链接完整性

| 检查项 | 处理 |
|--------|------|
| `[[wiki链接]]` 目标存在 | 不通过则报 broken |
| `[md](link.md)` 目标存在 | 不通过则报 broken |
| 循环引用 >10 跳 | 报 info（非 error） |
| 外部 URL | 忽略 |

### L4 — 跨语言一致性

| 检查项 | 排除目录 |
|--------|---------|
| 三语言镜像齐全 | `_meta/system/logs/`、`0 Inbox/`、`Periodic/` |
| udc/tags 一致 | 同上 |
| methodology 字段一致（若任一语言有该字段，其他语言也应有且值相同） | 同上 |

### L5 — 项目状态

| 检查项 |
|--------|
| `status: completed` 仍留在 `1 Projects/` |
| `[x]` 任务但 status: active |

### L6 — 空正文检测

| 检查项 | 排除目录 |
|--------|---------|
| 文件是否仅含 frontmatter 无正文 | `_meta/system/logs/`、`0 Inbox/`、`.git/`、`.obsidian/` |
| `--fix` 时自动从备份恢复 | 同上 |

### L7 — 陈旧声明检测

| 检查项 | 排除目录 | 阈值 |
|--------|---------|:----:|
| `updated` 字段超过 90 天未更新 | `_meta/system/logs/`、`0 Inbox/`、`Periodic/`、`4 Archives/` | 90 天 |
| 含时效性关键词（当前/最新/最近/目前）但 `updated` > 90 天 | 同上 | 90 天 |
| 含 `liveness: budding` 超过 180 天未升级 | 同上 | 180 天 |
| 含 `status: draft` 超过 365 天 | 同上 | 365 天 |

**陈旧标记**: 扫描结果在 manifest 中记录为 `stale_count`，不自动修改文件。



| 检查项 | 排除目录 |
|--------|---------|
| 文件是否仅含 frontmatter 无正文（`---\n...\n---\nEOF`） | `_meta/system/logs/`、`0 Inbox/`、`.git/`、`.obsidian/` |
| `--fix` 时自动从备份恢复 | 同上 |

**恢复优先级（`--fix`）：**
1. 同仓库 `_meta/` 下同名文件（支持 KOS 前缀变体）
2. 其他备份源

---

## 自动修复（`--fix`，需确认）

### 可自动修复

| 问题 | 修复方式 |
|------|---------|
| created/updated 缺失 | 用当前日期填充 |
| UDC 格式错误 | 标准化（不改类号） |
| 跨语言文件缺失 | 复制骨架文件 |
| methodology 字段缺失/不一致（跨语言时） | 按主语言值补齐 |
| L6: 空正文（有备份时） | 从备份恢复 |

### 不可自动修复

| 问题 | 处理 |
|------|------|
| udc/tags 缺失 | 报错，人工处理 |
| 断链 | 报错，人工处理 |
| 项目状态不一致 | 报错，人工处理 |
| L6: 空正文（无备份时） | 报错，人工从 git 或备用源恢复 |

---

## Delta 追踪（v1.4+）

> 每次扫描后记录结果到 `_meta/.manifest.json`，追踪 vault 健康度趋势。

### 更新 Manifest

```bash
python3 -c "
import json, os
mf = '_meta/.manifest.json'
m = json.load(open(mf)) if os.path.exists(mf) else {'sources':{}, 'engines':{}}
m.setdefault('engines', {})
m['engines']['link'] = {
    'last_run': '$(date -u +%Y-%m-%dT%H:%M:%SZ)',
    'files_scanned': 42,       # 实际扫描文件数
    'issues_found': 3,          # 实际发现问题数
    'result': 'issues'          # 'clean' 或 'issues'
}
json.dump(m, open(mf, 'w'), indent=2, ensure_ascii=False)
"
```

---

## 参数

## 如何思考（10 原则映射）

| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 完整扫描文件，不预设问题清单 |
| 4 | THINK | 七级检查：L1 Frontmatter → L2 UDC → L3 链接 → L4 跨语言 → L5 项目 → L6 空正文 |
| 6 | CONNECT(sys) | 检查后更新 manifest.engines.link |
| 8 | ACCEPT | 断链和缺失如实报告，不加滤镜 |
| 9 | CREATE | 生成扫描报告 |
| 10 | GROW | 记录扫描结果用于健康度趋势分析 |


- `--path <dir>` — 校验指定目录
- `--file <path>` — 校验指定文件
- `--fix` — 启用自动修复（需用户确认）
- `--status` — 仅显示状态
