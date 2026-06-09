---
type: ai-memory-state
last_updated: 2026-06-09T21:00:00
version: 3
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
- summary: 11 个项目完成编号，6 个已归档
- next: -

## archive

- last_run: 2026-06-09
- pending: 0
- summary: 26-03/04/08/09/10 已归档
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

## life

- last_brief: 2026-06-09
- last_check: 2026-06-09
- last_report_weekly: -
- last_report_monthly: -
- summary: Life+AI 会话协议已统一，三支柱目标已录入
- pillars:
    life:
      goals:
        - 建立健康的生活节奏（作息/运动/饮食）
        - 个人财务系统投入使用
    study:
      goals:
        - 每周至少完成一次知识回顾
        - 持续追踪 AI/LLM 领域进展
    work:
      goals:
        - 维护 KOS_LLM-Wiki 日常运行
        - 推进活跃工单
- next: Life-Report weekly

---

## 跨引擎传递

| 源引擎 | 目标引擎 | 传递内容 |
|--------|---------|---------|
| triage | compile | 新路由的 reference 文件路径 |
| triage | project | 识别到的项目型内容 |
| project | archive | 待归档的已完成项目 |
| compile | link | 新创建的 wiki 页面路径 |
| daily | triage | Day-Review 中标记的未处理记录 |
| daily | life | 三支柱速写数据 |
| life | daily | Life-Report 周期数据 |
