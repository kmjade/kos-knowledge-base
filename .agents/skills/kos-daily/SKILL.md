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
| `Week-Review` | `_meta/system/logs/reports/YYYY-WW.md` | triage/compile 统计 + 日记数 + 项目状态 |
| `Month-Review` | `_meta/system/logs/reports/YYYY-MM.md` | 聚合周报 + 子库增长统计 |
| `Quarter-Review` | `_meta/system/logs/reports/YYYY-QQ.md` | 聚合月报 + 项目完成统计 |
| `Year-Review` | `_meta/system/logs/reports/YYYY.md` | 聚合季度 + ADR 变更历史 |

---

## Daily Open 流程

1. 检查 `Periodic/YYYY/MM/YYYY-MM-DD.md` 是否存在
2. 若存在 → 跳过（幂等）
3. 若不存在 → 使用 `_meta/system/templates/每日笔记模板.md` 创建
4. 填充：当前活跃工单、未完成任务、待处理 Inbox 数量
5. 日志写入 `_meta/system/logs/operations/maintenance.md`

---

## Day-Review 流程

1. 读取今日笔记内容
2. 汇总已完成/未完成任务
3. 更新笔记中的回顾部分
4. 更新全局状态 `_meta/ai/memory/全局状态.md`

---

## Week-Review 流程

> 目标：完成"本周复盘 + 残留清理 + 下周计划"闭环

1. 汇总本周每日笔记，读取上周周记的 `## 下周计划`（若存在）
2. 对照分析：上周计划 vs 本周执行 → 输出完成/部分完成/未完成 + 原因
3. 处理本周残留记录（四选一：转任务 / 已处理 / 延期 / 转 kos-compile）
4. 引导反思：成就 / 挑战 / 洞察 / 改进（用户互动，原话优先）
5. 生成下周框架建议 → 用户确认 → 写入 `## 下周计划`
6. 写入 `_meta/system/logs/reports/YYYY-WW.md`
7. 更新 `_meta/system/logs/operations/maintenance.md`

---

## Month-Review 流程

> 目标：完成"月度复盘 + 计划对照 + 残留清零 + 下月规划"闭环

1. 聚合本月周报（缺失周报时补读每日笔记）
2. 对照分析：上月计划 vs 本月执行 → 完成/部分完成/未完成 + 原因
3. 残留清零：处理本月未完成记录 + "以后再说"缓冲（逐条定去向）
4. 领域检查：各领域进展（用户互动）
5. 下月规划：对齐年度方向，生成下月框架 → 用户确认
6. 写入 `_meta/system/logs/reports/YYYY-MM.md`
7. 更新 `_meta/system/logs/operations/maintenance.md`

---

## Quarter-Review 流程

> 目标：聚合季度数据 + 项目完成统计

1. 聚合本季度月报
2. 项目完成统计
3. 写入 `_meta/system/logs/reports/YYYY-QQ.md`
4. 更新 `_meta/system/logs/operations/maintenance.md`

---

## Year-Review 流程

> 目标：完成"全年复盘 + 年度计划对照 + 新年计划确认"闭环

1. 聚合全年月报（缺失月报时补读周报/关键日记）
2. 对照分析：年初计划 vs 全年执行 → 完成/部分完成/未完成 + 原因
3. 引导年度反思：成就 / 挑战 / 成长 / 关系 / 价值观（用户互动）
4. 生成新年框架建议（含延续事项 + 新方向 + 启动动作）→ 用户确认
5. 写入 `_meta/system/logs/reports/YYYY.md`（年度回顾 + 下一年计划）
6. 更新 `_meta/system/logs/operations/maintenance.md`

---

## 关于模板

所有周期笔记使用 `_meta/system/templates/` 下对应模板：
- 每日笔记 → `每日笔记模板.md`
- 周记 → `周记模板.md`
- 月记 → `月记模板.md`
- 季度 → `季度模板.md`
- 年度 → `年度模板.md`

---

## 如何思考（10 原则映射）

| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 先检查周期笔记是否已存在；读取上周/上月计划做对照 |
| 3 | LISTEN | 反思阶段用户原话优先，AI 不预设答案 |
| 4 | THINK | 对照分析 + 框架建议 + 对齐年度计划 |
| 6 | CONNECT(sys) | 日→周→月→季→年递进聚合 |
| 9 | CREATE | 写入周期笔记 + 计划区块 |
| 10 | GROW | 写操作日志供后续周期引用 |
