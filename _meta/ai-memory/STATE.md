---
type: ai-memory-state
last_updated: 2026-06-09T18:00:00
version: 2
---

# KOS 引擎全局状态

> 各引擎执行结束时写入本节，下一个引擎启动时读取。hot.md 负责会话级摘要，STATE.md 负责引擎级追踪。

---

## triage

- last_run: 2026-06-09
- pending: 0
- summary: Inbox 已清空
- next: -

## compile

- last_run: -
- pending: 0
- summary: -
- next: -

## link

- last_run: -
- pending: 0
- summary: -
- next: -

## daily

- last_daily: 2026-06-09
- last_week: -
- last_month: -
- next: -

## project

- last_run: 2026-06-09
- pending: 0
- summary: kos-project 引擎创建，11 个项目完成编号
- next: -

$12026-06-09
- pending: 0
- summary: kos-archive 引擎创建
- next: -

## canvas

- last_run: -
- pending: 0
- summary: -
- next: -

## kos-init

- last_run: 2026-06-09
- status: healthy
- summary: 全部 10 项检查通过
- next: -

---

## 跨引擎传递

| 源引擎 | 目标引擎 | 传递内容 |
|--------|---------|---------|
| triage | compile | 新路由的 reference 文件路径 |
| triage | project | 识别到的项目型内容 |
| project | archive | 待归档的已完成项目 |
| compile | link | 新创建的 wiki 页面路径 |
| daily | triage | Day-Review 中标记的未处理记录 |