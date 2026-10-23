---
type: audit
audit_id: "AUDIT-{seq}"
audit_type: "{architecture|schema|code|product|progress|inbox|security|legacy}"
status: "{draft|active|resolved}"
scope: ""
findings_total: 0
findings_resolved: 0
findings_by_severity: {BLOCKER: 0, HIGH: 0, MEDIUM: 0, LOW: 0}
verdict: ""
next_review: ""
trigger: "{manual|scheduled|agent}"
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: 001.8
tags: [audit, kos]
aliases: []
---

# {标题} 审计报告

> **审计时间：** YYYY-MM-DD
> **审计范围：** {scope}
> **审计方法：** {method}
> **审计 ID：** `AUDIT-{seq}` — 见 [[_meta/system/registry/audit-registry.yaml|审计登记册]]

---

## 执行摘要

| 维度 | 评分 | 说明 |
|:----|:----:|:------|
| 覆盖度 | 🟢 全面 / 🟡 部分 / 🔴 不足 | |
| 严重发现 | N 个 (B/H/M/L) | |
| 已解决 | N / {findings_total} | |
| 下次复查 | {next_review} | |

**裁决：** {verdict}

---

## 发现清单

| # | 类型 | 发现描述 | 严重度 | 文件/位置 | 状态 | 行动计划 | 验证日期 |
|:-:|:----:|---------|:------:|:---------|:----:|---------|:-------:|
| 1 | | | BLOCKER| | open | | |
| 2 | | | HIGH | | open | | |
| 3 | | | MEDIUM | | resolved | | ✅ |
| 4 | | | LOW | | wontfix | | |

### 严重度定义

| 级别 | 定义 | 响应 |
|:----:|------|:----:|
| **BLOCKER** | 阻止后续工作，必须立即修复 | 停止→修复→验证→继续 |
| **HIGH** | 显著影响质量/安全/可用性 | 排入当前迭代 |
| **MEDIUM** | 有影响但不阻塞 | 排入下一迭代 |
| **LOW** | 锦上添花/代码洁癖/文档优化 | 积压，随用随修 |
| **INFO** | 观察/建议，非缺陷 | 记录但不追踪 |

---

## 行动追踪

| # | 行动项 | 关联发现 | 负责人 | 目标日期 | 完成日期 | 验证 |
|:-:|-------|:-------:|:-----:|:-------:|:-------:|:----:|
| A1 | | #1 | | | | ⬡ |

---

## 审计方法

<!-- 描述审计的执行方法、工具、检查列表 -->

### 检查列表

- [ ] 检查项 1
- [ ] 检查项 2
- [ ] 检查项 3

---

## 审计日志

| 时间 | 事件 |
|:----|:-----|
| YYYY-MM-DD HH:mm | 开始审计 |
| YYYY-MM-DD HH:mm | 发现 #1 确认 |
| YYYY-MM-DD HH:mm | 审计完成 |

---

## 相关文档

- [[_meta/system/registry/audit-registry.yaml|审计登记册]]
- [[相关文档 1]]
- [[相关文档 2]]

---

> **登记册索引：** 本报告已注册于 [[_meta/system/registry/audit-registry.yaml|审计登记册]] `AUDIT-{seq}`
