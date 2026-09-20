---
name: kos-audit
description: "审计管理与执行引擎。注册审计、列出发现、检查到期复查、执行 Schema 一致性审计。"
allowed-tools: Read Write Edit Bash Glob Grep
---

# KOS-Audit：审计管理与执行引擎

> 基于 [[_meta/system/registry/audit-registry.yaml|审计登记册]] 驱动。
> 所有审计文档统一使用 [[_meta/system/templates/tpl-audit.md|审计模板]]。

---

## 命令参考

### `--list` — 审计登记册列表

列出 `audit-registry.yaml` 中注册的全部审计。

```
KOS-Audit --list
KOS-Audit --list --type code       # 按类型过滤
KOS-Audit --list --status resolved  # 按解决状态过滤
```

| 输出列 | 说明 |
|--------|------|
| ID | AUDIT-NNN |
| 类型 | architecture/schema/code/product/progress/inbox/security/legacy |
| 日期 | 审计日期 |
| 范围 | 审计范围摘要 |
| 发现 | 已解决/总数 |
| 下次复查 | 到期日 |

### `--findings` — 审计发现查询

```
KOS-Audit --findings                    # 全部未解决发现
KOS-Audit --findings --open             # 未解决的
KOS-Audit --findings --resolved         # 已解决的
KOS-Audit --findings --severity HIGH    # 按严重度过滤
KOS-Audit --findings --audit AUDIT-006  # 按审计 ID 过滤
```

输出格式：每个发现一行，含 `[AUDIT-NNN] [SEVERITY] 描述 → 状态`

### `--overdue` — 逾期复查清单

```
KOS-Audit --overdue
```

检查 `audit-registry.yaml` 中 `next_review` 已过当前日期的审计。
输出：逾期审计列表 + 逾期天数 + 建议动作。

### `--status <AUDIT-ID>` — 审计详情

```
KOS-Audit --status AUDIT-006
```

输出：该审计的完整状态 — 发现清单/已解决率/行动计划/关联文档。

### `--type schema` — Schema 一致性检查

```
KOS-Audit --type schema                  # 标准检查
KOS-Audit --type schema --strict         # 严格模式（硬阻断）
KOS-Audit --type schema --fix            # 自动修复轻微问题
```

执行 6 项检查：

| # | 检查 | 方法 | 可自动修复 |
|:-:|------|------|:---------:|
| 1 | IOO 管线 | subsystems.yaml vs inbox-pipeline.md | ❌ |
| 2 | ITO 管线 | subsystems.yaml vs project-lifecycle.md | ❌ |
| 3 | 跨工作区 | workspace-index.yaml vs subsystems.yaml | ❌ |
| 4 | pipeline_stages | workspace-index.yaml stages vs subsystems.yaml stages | ✅ 补漏 |
| 5 | Type 枚举 | taxonomy.yaml vs subsystems.yaml allowed_types | ✅ 补漏 |
| 6 | Frontmatter 约束 | frontmatter.yaml vs 实际文件 | ❌ |

结果输出到 `_meta/architecture/adr/` 并更新 `AUDIT-005` 条目。

### `--register` — 注册新审计

```
KOS-Audit --register --file <path> --type <type>
```

从审计文档 frontmatter 读取 `audit_id/audit_type/findings_total` 等字段，
自动追加到 `audit-registry.yaml`。

---

## 审计类型与对应检查

| audit_type | 典型触发条件 | 标准检查内容 |
|:----------:|:------------:|-------------|
| architecture | 季度 / 架构变更 | PARA/UDC/DDC 轴一致性、平台镜像状态、管道健康 |
| schema | 月度 / Schema 变更 | 6 项一致性检查（见 `--type schema`）|
| code | Phase 交付 / PR | 编译检查、默认参数对齐、注释审计、enum 标准化 |
| product | 路线图版本更新 | 思维审计（10 原则）、竞品定位、GTM 评估 |
| progress | 里程碑 / 半月 | 完成度追踪、规划 vs 实际偏差 |
| inbox | 每次 session / 周 | 路由正确率、积压趋势、错误模式 |
| security | 公开发布前 | 安全/隐私/数据/引用 四维检查 |

---

## 工作流

```
触发审计
  │
  ├─→ 选择审计类型（或 KOS-Audit --type schema 自动执行）
  │
  ├─→ 使用 tpl-audit.md 创建审计文档
  │     ├─ frontmatter: audit_id, audit_type, findings_total, ...
  │     └─ 内容: 发现清单 → 行动追踪 → 审计日志
  │
  ├─→ 注册到审计登记册
  │     └─ KOS-Audit --register --file <path>
  │
  ├─→ 行动追踪（发现 → 工单/任务）
  │     ├─ 为每个 BLOCKER/HIGH 发现创建工单
  │     └─ 在审计文档中更新行动追踪表
  │
  └─→ 验证闭环
        ├─ 下次复查时验证已解决状态
        └─ KOS-Audit --overdue 检查到期情况
```

---

## 登记册操作

### 手动追加审计（YAML）

```yaml
  - id: AUDIT-009
    type: code
    title: "审计标题"
    date: 2026-07-18
    scope: "审计范围"
    method: "审计方法"
    findings_total: N
    findings_resolved: N
    verdict: "总体裁决"
    next_review: 2026-MM-DD
    link: "path/to/audit-doc.md"
    tags: [kos-audit]
```

### 更新审计状态

```yaml
    findings_resolved: N  # 更新已解决数
    next_review: 2026-MM-DD  # 设定下次复查日
```

---

## 相关文档

- [[_meta/system/registry/audit-registry.yaml]] — 审计登记册权威源
- [[_meta/system/templates/tpl-audit.md]] — 审计报告模板
- [[_meta/system/logs/reports/0002-schema-consistency-audit.md]] — Schema 一致性审计（AUDIT-005，2026-09-20 自 `_meta/architecture/adr/` 移入）
- [[_meta/architecture/design/架构审计-2026-06-10.md]] — 架构审计（AUDIT-003）
- 产品思维审计（AUDIT-006）— 报告位于内部领域区（未公开）
