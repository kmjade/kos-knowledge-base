---
name: kos-daily
description: 创建每日笔记与周期回顾。幂等操作（已存在则跳过），支持 Daily Open / Day-Review / Week-Review / Month-Review / Quarter-Review / Year-Review。
---

# KOS-Daily：每日笔记与周期回顾

> 所有操作幂等（已有则跳过）；创建结果记录到 `_meta/.manifest.json` 追踪周期状态

---

## 命令一览

| 命令 | 输出位置 | 关键输入 |
|------|---------|---------|
| `Daily Open` | `Periodic/YYYY/MM/YYYY-MM-DD.md` | 活跃工单未完成任务 |
| `Day-Review` | `Periodic/YYYY/MM/YYYY-MM-DD.md` | 当日活动总结 |
| `Week-Review` | `_logs/reports/YYYY-WW.md` | triage/compile 统计 + 日记数 + 项目状态 |
| `Month-Review` | `_logs/reports/YYYY-MM.md` | 聚合周报 + 子库增长统计 |
| `Quarter-Review` | `_logs/reports/YYYY-QQ.md` | 聚合月报 + 项目完成统计 |
| `Year-Review` | `_logs/reports/YYYY.md` | 聚合季度 + ADR 变更历史 |

---

## Delta 追踪（v1.4+）

> 每次创建周期笔记后更新 `_meta/.manifest.json`，追踪各周期的最新状态。

### 更新 Manifest

```bash
REVIEW_TYPE="$1"  # daily | week | month | quarter | year
REVIEW_DATE="$2"  # YYYY-MM-DD 或 YYYY-WW 或 YYYY-MM 等

python3 -c "
import json, os, sys
mf = '_meta/.manifest.json'
m = json.load(open(mf)) if os.path.exists(mf) else {'sources':{}, 'engines':{}}
m.setdefault('engines', {})
m['engines'].setdefault('daily', {})

review_type = sys.argv[1]
review_date = sys.argv[2]

mapping = {
    'daily': 'last_daily',
    'week': 'last_weekly',
    'month': 'last_monthly',
    'quarter': 'last_quarter',
    'year': 'last_year'
}
key = mapping.get(review_type)
if key:
    m['engines']['daily'][key] = review_date

json.dump(m, open(mf, 'w'), indent=2, ensure_ascii=False)
print(f'Updated manifest: engines.daily.{key} = {review_date}')
" "$REVIEW_TYPE" "$REVIEW_DATE"
```

---

## Daily Open 流程

1. 检查 `Periodic/YYYY/MM/YYYY-MM-DD.md` 是否存在
2. 若存在 → 跳过（幂等）
3. 若不存在 → 使用 `_meta/Templates/每日笔记模板.md` 创建
4. 填充：当前活跃工单、未完成任务、待处理 Inbox 数量
5. **更新 Manifest：** `engines.daily.last_daily = YYYY-MM-DD`
6. 日志写入 `_logs/operations/maintenance.md`

---

## Day-Review 流程

1. 读取今日笔记内容
2. 汇总已完成/未完成任务
3. 更新笔记中的回顾部分
4. 更新全局状态 `_meta/ai-memory/全局状态.md`

---

## 周期回顾流程

各周期回顾聚合下级数据：

```
Year-Review ← Quarter-Review ← Month-Review ← Week-Review ← Day-Review
```

创建完成后，**更新 Manifest** 记录该周期的最新日期。

---

## 参数

## 如何思考（10 原则映射）

| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 先检查周期笔记是否已存在 |
| 4 | THINK | 聚合下级数据：日→周→月→季→年 |
| 6 | CONNECT(sys) | 创建笔记后更新 manifest.engines.daily |
| 9 | CREATE | 创建笔记 + 填充活跃工单数据 |
| 10 | GROW | 写操作日志供后续周期回顾 |


- `--type <daily|day|week|month|quarter|year>` — 指定回顾类型
- `--date <YYYY-MM-DD>` — 指定日期（默认今天）
- `--status` — 仅显示状态
