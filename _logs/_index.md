---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:004.8
tags: [project, codex-logs, requirements, kos]
---

# Codex-logs 需求说明书

> **LifeOS × LLM-Wiki 融合系统 → KOS_LLM-Wiki 本地化适配**
> ——基于 Codex 的 AI 操作日志系统需求定义

---

## 1. 背景与定位

### 1.1 来源

本需求源自「LifeOS × LLM-Wiki 融合系统」（一只阿木木, 2026），该设计提出了完整的 `AI-Log/` 日志体系。KOS_LLM-Wiki 将其本地化为 `_logs/` 目录，适配 Codex 作为 AI Agent 的运行环境。

### 1.2 为什么需要日志系统

| 需求 | 说明 |
|------|------|
| 审计追踪 | 记录 Agent 每次操作，形成可追溯的历史 |
| 上下文恢复 | 新会话可读取最近操作摘要，保持连续性 |
| 性能度量 | 统计编译、分拣等操作的耗时与产出 |
| 故障排查 | Agent 操作出错时，日志提供诊断依据 |
| 知识溯源 | wiki/ 中的每处更新都能追溯到对应的日志条目 |
| 行为分析 | 长期日志揭示 Agent 使用模式和知识增长趋势 |

### 1.3 设计原则

- **追加不覆盖**：日志只追加，永不改写历史记录
- **结构化 + 自然语言**：日志同时包含机器可解析的 frontmatter 和人类可读的叙述
- **最少侵入**：日志操作不应成为 Agent 工作的瓶颈
- **跨语言同步**：日志内容本身以简体中文为主（根目录），但目录结构三语言镜像

---

## 2. 目录结构

```
_logs/
├── _index.md                # 日志系统总索引
├── sessions/                # 会话日志
│   ├── 2026/
│   │   ├── 2026-06-06.md    # 按日汇总的 Agent 会话记录
│   │   └── ...
│   └── README.md            # 会话日志格式说明
├── operations/              # 操作日志（按操作类型）
│   ├── triage.md            # 分拣操作日志
│   ├── compile.md           # 编译操作日志
│   └── maintenance.md       # 维护操作日志（lint、清理等）
├── tasks/                   # 任务追踪日志
│   └── 2026/
│       └── 06.md            # 月度任务执行记录
├── reports/                 # 报告与统计
│   ├── weekly.md            # 周报
│   └── monthly.md           # 月报
└── archive/                 # 归档日志（超过 6 个月的旧日志）
    └── ...
```

### 2.1 目录职责矩阵

| 路径 | 内容 | 写入者 | 读取者 |
|------|------|--------|--------|
| `sessions/` | Agent 每次会话的关键操作摘要 | Codex | Codex（会话恢复）、人类 |
| `operations/triage.md` | 分拣操作记录 | Codex | Codex、人类（审计） |
| `operations/compile.md` | Wiki 编译操作记录 | Codex | Codex、人类（审计） |
| `operations/maintenance.md` | 系统维护记录 | Codex | Codex |
| `tasks/` | 跨会话任务追踪 | Codex | Codex |
| `reports/` | 周期统计分析 | Codex（自动） | 人类 |

---

## 3. 数据模型

### 3.1 会话日志（sessions/YYYY/YYYY-MM-DD.md）

```yaml
---
created: 2026-06-06T18:30:00+08:00
type: session-log
agent: codex
session-id: 20260606-1830
duration_min: 45
operations:
  - type: triage
    count: 3
  - type: compile
    count: 1
    topics: [llm-wiki]
  - type: edit
    count: 5
files_modified: 8
files_created: 2
tokens_estimate: 15000
summary: "处理了 3 个 Inbox 文件，编译了 LLM-Wiki 子库，更新了索引"
---
```

### 3.2 操作日志条目（operations/*.md）

每行是一个 markdown 列表项 + 可选详细区块：

```markdown
## 2026-06-06T18:30 — [操作类型]

- **操作**：[简短描述]
- **输入**：[源文件或数据]
- **输出**：[产出的文件列表]
- **耗时**：N 分钟
- **状态**：[success|partial|failed]
- **备注**：[异常、矛盾、待确认事项]
```

### 3.3 任务追踪（tasks/YYYY/MM.md）

```yaml
---
created: 2026-06-01
updated: 2026-06-06
type: task-log
period: monthly
---
```

任务以 Obsidian Tasks 格式记录：

```
- [x] 完成 LLM-Wiki 子库首次编译 📅 2026-06-05 ✅ 2026-06-05
- [ ] 搭建 _logs 日志系统 📅 2026-06-10
- [/] 生成 2026-W23 周报 🛫 2026-06-06
```

### 3.4 报告（reports/*.md）

**周报结构**：

```markdown
---
created: 2026-06-06
type: report
period: weekly
week: 2026-W23
---

# Week 23 日志报告

## 操作统计
| 操作类型 | 次数 | 涉及文件 |
|----------|------|----------|
| 分拣     | 5    | 8        |
| 编译     | 2    | 12       |
| 编辑     | 15   | 20       |
| 维护     | 1    | 3        |

## 知识增长
- 新增 Wiki 页面：5
- 更新 Wiki 页面：3
- 新增原始资料：4

## 待办事项
- [ ] 无待办
```

---

## 4. UDC 分类映射

| UDC | 类目 | 对应日志类型 |
|-----|------|-------------|
| 001.8:004.8 | 知识组织与 AI 日志 | 系统总日志、会话日志 |
| 004.8:005.1 | AI 操作审计 | 操作日志（triage/compile） |
| 004.8:681.5 | AI 系统维护 | 维护日志、任务追踪 |
| 001.8:311 | 知识管理统计 | 报告、统计分析 |

所有 _logs 下的文件使用 `001.8:004.8` 作为默认 UDC，具体子类按上表细分。

---

## 5. 标签规范

| 标签 | 用途 |
|------|------|
| `#codex-log` | 所有日志文件的通用标签 |
| `#codex-log/session` | 会话日志 |
| `#codex-log/operation` | 操作日志 |
| `#codex-log/task` | 任务追踪 |
| `#codex-log/report` | 报告 |
| `#codex-log/archive` | 归档日志 |

---

## 6. 操作流程规范

### 6.1 会话开始

当 Codex 被调用时：

1. 读取 `_logs/sessions/YYYY/` 最近 3 条会话日志
2. 读取 `_logs/operations/maintenance.md` 末尾 10 条（系统状态）
3. 检查 `_logs/tasks/` 中的未完成任务
4. 将本次会话 ID 记录到上下文

### 6.2 会话结束

Codex 退出或用户终止时：

1. 在 `_logs/sessions/YYYY/YYYY-MM-DD.md` 追加新的会话区块
2. 更新 `_logs/operations/` 中对应的操作日志
3. 如生成了报告数据，更新 `_logs/reports/`

### 6.3 操作记录时机

| 操作类型 | 记录时机 | 记录位置 |
|----------|----------|----------|
| 文件分拣 | 每次 `/triage` 执行完毕后 | `operations/triage.md` |
| Wiki 编译 | 每次 `/wiki-compile` 执行完毕后 | `operations/compile.md` |
| 文件编辑（批量） | 单次会话编辑 ≥ 3 文件时 | 会话日志 |
| 系统维护（lint） | 每次 `/lint` 或等价操作后 | `operations/maintenance.md` |
| 任务完成 | 任务状态变更时 | `tasks/` 对应文件 |

### 6.4 写日志的约束

- 日志追加视为低风险操作，不触发二次确认
- 日志内容应简洁（每操作条目不超过 200 字叙述）
- 涉及敏感信息（如文件路径含私密内容）时，记录路径摘要而非完整路径
- 不得在日志中包含密码、密钥、Token 等凭证信息

---

## 7. 与现有系统的集成

### 7.1 与 _索引.md 的联动

在 `_索引.md` 的 PARA 分类表中，05 — Logs 段落已预留。该段落应保持为目录占位，不自动索引日志文件，避免索引文件因日志频繁追加而产生大量 diff。

### 7.2 与 3 Resources 的联动

各 Wiki 子库中的 `wiki/log.md` 是技术编译日志，_logs 是 Agent 操作日志，二者关系：

```
3 Resources/[topic]/wiki/log.md  ← 该子库的编译详情
_logs/operations/compile.md     ← 全局编译操作汇总（引用子库日志）
```

子库日志记录「什么内容被编译」，全局日志记录「编译操作本身」。

### 7.3 与 AGENTS.md 的联动

`AGENTS.md` 中已记录 `_logs/` 目录定义。后续如需增加日志规范，应同步更新 AGENTS.md 中的相关章节。

---

## 8. 生命周期与归档

| 日志类型 | 保留期 | 归档策略 |
|----------|--------|----------|
| 会话日志 | 永久 | 按年划分子目录 |
| 操作日志 | 永久 | 追加式，不删除 |
| 任务追踪 | 12 个月 | 年度归档至 `archive/` |
| 报告 | 24 个月 | 年度归档至 `archive/` |

归档后的文件在 frontmatter 中添加 `archived: true` 字段。

---

## 9. 实施路线图

| 阶段 | 内容 | 前置条件 |
|------|------|----------|
| **P0 — 基础设施** | 创建 _logs 目录骨架、_index.md | 无 |
| **P1 — 会话日志** | 实现 sessions/ 的读写规范 | P0 |
| **P2 — 操作日志** | 实现 operations/ 的读写规范 | P1 |
| **P3 — 任务追踪** | 实现 tasks/ 的读写规范 | P0 |
| **P4 — 报告生成** | 实现 reports/ 的自动生成 | P2 |
| **P5 — 索引同步** | 完善与 _索引.md 的联动 | P1 |
| **P6 — 归档机制** | 实现 archive/ 的移动逻辑 | P4 |

---

## 10. 附录：术语表

| 术语 | 定义 |
|------|------|
| **Codex** | OpenAI 的 Coding Agent（本系统使用的 AI Agent） |
| **Session** | 一次 Codex 调用（从启动到结束的完整交互） |
| **Triage** | 从 Inbox 到目标目录的智能分拣 |
| **Compile** | 从 raw/ 原始资料生成 wiki/ 知识页面的过程 |
| **LifeOS** | 基于 PARA 方法的 Obsidian 个人管理系统 |
| **LLM-Wiki** | 由 LLM 自动编译维护的个人知识 Wiki |
| **KOS** | Knowledge Organization System（知识组织系统） |
| **UDC** | 国际十进分类法（Universal Decimal Classification） |


