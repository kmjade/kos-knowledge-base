---
name: kos-triage
description: 分拣 0 Inbox/ 待处理笔记。按时效性/主题/类型/复杂度四维分析，复制到目标目录，原始文件移入 _processed/。
---

# KOS-Triage：Inbox 分拣引擎

> 幂等操作（`triage.status: processed` 文件跳过 + `_meta/.manifest.json` 哈希校验双重保障）

---

## 扫描范围

- 读取 `0 Inbox/` 根目录 `.md` 文件
- 忽略 `_processed/` 子目录
- 忽略 `triage.status: processed` 文件
- 非 `.md` 文件仅记录日志

---

## 并发安全（v1.3+）

> ⚠️ **目标目录写入必须先获取文件锁**，防止 KOS-Triage 与 KOS-Compile 同时操作同一文件导致数据竞争。

### 锁协议

```bash
# 模式：acquire → 写入 → release
TARGET="2 Areas/finance/investment-note.md"
if python3 scripts/wiki-lock.py acquire "$TARGET"; then
    # ... 复制文件 + 添加 frontmatter ...
    python3 scripts/wiki-lock.py release "$TARGET"
else
    # rc=75: 被占用 → 重试一次
    sleep 2
    if python3 scripts/wiki-lock.py acquire "$TARGET"; then
        python3 scripts/wiki-lock.py release "$TARGET"
    else
        echo "SKIPPED triage to $TARGET — locked by another writer"
    fi
fi
```

### 加锁目标

| 执行步骤 | 加锁目标 | 说明 |
|---------|----------|------|
| 步骤 3（加 frontmatter） | 目标文件路径 | 写入 frontmatter 到已复制文件 |
| 步骤 4（复制到目标） | 目标文件路径 | 复制笔记到目标目录 |
| 步骤 7（写日志） | `_logs/operations/triage.md` | 日志追加 |

### 锁文件位置

所有锁文件存放在 `_meta/.locks/` 目录（自动创建）。锁过期时间默认 60 秒。

---

## Delta 追踪（v1.4+）

> 使用 `_meta/.manifest.json` 记录每个源文件的哈希和处理结果，避免重复分拣。

### 哈希计算

```bash
# 计算文件的 SHA256 哈希（跨平台 Python）
HASH=$(python3 -c "
import hashlib
print(hashlib.sha256(open('0 Inbox/note.md', 'rb').read()).hexdigest())
")
```

### 检查逻辑

```bash
# 查询 manifest 中该路径的哈希
PREV_HASH=$(python3 -c "
import json
try:
    m = json.load(open('_meta/.manifest.json'))
    h = m.get('sources', {}).get('0 Inbox/note.md', {}).get('hash', '')
    print(h)
except: print('')
")

if [ -n "$PREV_HASH" ] && [ "$PREV_HASH" = "$HASH" ]; then
    echo "SKIPPED 0 Inbox/note.md — unchanged since last triage"
    # 跳过整个分拣流程
fi
```

### 更新 Manifest（分拣完成后）

```bash
python3 -c "
import json, os
path = '0 Inbox/note.md'
hash = '...'  # 上文计算的哈希
mf = '_meta/.manifest.json'
m = json.load(open(mf)) if os.path.exists(mf) else {'sources':{}, 'engines':{}}
m['sources'][path] = {
    'hash': hash,
    'first_seen': m['sources'].get(path, {}).get('first_seen', '$(date +%Y-%m-%d)'),
    'last_seen': '$(date +%Y-%m-%d)',
    'triage': {
        'status': 'processed',
        'routed_at': '$(date +%Y-%m-%d)',
        'routed_to': 'target/path.md',
        'udc_suggested': '004.8'
    }
}
json.dump(m, open(mf, 'w'), indent=2, ensure_ascii=False)
"
```

---

## 四维分析

### A — 时效性

| 特征 | 判定 | 路由 |
|------|------|------|
| 日期 + 动作动词（提交/发送/完成/买/约/提醒） | ephemeral | Periodic/ |
| 项目 + 任务无截止日期 | operational | 1 Projects/ |
| 技术文章/教程 | reference | 3 Resources/ |
| 原则/方法论 | evergreen | 2 Areas/ |

### B — 主题

扫描 `1 Projects/` 所有 README → 匹配项目名 → 领域关键词 → 否则 `needs-mapping`

### C — 类型

| 特征 | 判定 |
|------|------|
| 动作动词 + 可交付物 | task |
| 知识内容无动作 | reference |
| <50 字碎片 | fleeting |
| 人名 + 背景 | people |
| 含 `origin: webclipper` | clipping |

### D — 复杂度

| 字数 | 判定 |
|------|------|
| <500 字单主题 | low |
| 500–2000 字多主题 | medium |
| >2000 字或多独立段 | high |

### E — UDC 建议

按四层管道建议（模板默认 → 目录启发 → 关键词匹配 → AI 兜底）

---

## 执行流程

### 步骤 0：Delta 检查

对每个待处理文件：
1. 计算 SHA256 哈希
2. 查询 `_meta/.manifest.json` 中 `sources[path].hash`
3. 若哈希匹配 → **跳过**（标记 unchanged，记录日志）
4. 若哈希不匹配或不存在 → 继续步骤 1

### 步骤 1：扫描 Inbox 待处理文件

读取 `0 Inbox/` 根目录 `.md` 文件（跳过 `_processed/`、`triage.status: processed`、以及 Delta 检查命中者）。

### 步骤 2：四维分析

对每个文件执行时效性/主题/类型/复杂度/UDC 分析。

### 步骤 3：添加 frontmatter（需加锁）

在目标文件添加 `created/updated/udc/tags` 等 frontmatter。
**acquire 目标路径 → 写入 frontmatter → release**

### 步骤 4：复制到目标目录（需加锁）

将文件复制到路由目标目录。如目标文件已存在且 `triage.status: processed` 则跳过。
**acquire 目标路径 → 复制文件 → release**

### 步骤 5：原始文件移入 `_processed/`

将原始 Inbox 文件移动到 `0 Inbox/_processed/`（无锁 — 仅 Inbox 单写入者）。

### 步骤 6：更新 Manifest

将分拣结果写入 `_meta/.manifest.json`：
- `hash` — 步骤 0 计算的 SHA256
- `first_seen` — 首次出现日期（已有则保留）
- `last_seen` — 当前日期
- `triage.status` — `processed`
- `triage.routed_to` — 路由目标路径
- `triage.udc_suggested` — UDC 建议值

### 步骤 7：日志记录（需加锁）

写入 `_logs/operations/triage.md`。
**acquire 日志路径 → append → release**

### 步骤 8（可选）：生成批次折叠

仅在指定 `--fold` 参数时执行。将本次分拣批次的关键结果压缩为报告：

写入 `_logs/reports/triage-fold-YYYY-MM-DD-HHmm.md`。通过时间戳到分钟实现天然幂等。

**与 Week-Review 的关系：** 批次折叠是实时的操作摘要，Week-Review 是定期的聚合统计，两者互补。

---

## 参数

- `--file <path>` — 仅分拣指定文件
- `--status` — 仅显示状态，不执行
- `--force` — 跳过 Delta 检查，强制分拣
- `--fold` — 分拣完成后生成批次折叠报告到 `_logs/reports/`

---

## 如何思考（10 原则映射）

| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 完整读取 Inbox 文件 frontmatter + 内容后再分析，不跳读 |
| 2 | OBSERVE(内) | 检查是否有"路由到熟悉目录"的惯性，避免路径偏好 |
| 3 | LISTEN | 文件中的日期/动作动词是分类信号，不是噪音 |
| 4 | THINK | 四维分析：时效性/主题/类型/复杂度/UDC |
| 5 | CONNECT(lat) | 新笔记是否与现有项目/领域/人物有关联 |
| 6 | CONNECT(sys) | acquire 锁 → Delta manifest 检查 → 写入 → 更新 manifest → 日志 |
| 7 | FEEL | 无法路由时标记 `needs-mapping`，不强塞 |
| 8 | ACCEPT | 复杂度超出能力时标记 `needs-review`，不强行分析 |
| 9 | CREATE | 写入目标文件 + frontmatter + manifest |
| 10 | GROW | 写操作日志供周 Review 聚合 |
