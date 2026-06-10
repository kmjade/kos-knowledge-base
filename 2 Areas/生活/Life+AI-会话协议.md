---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [life-ai, protocol, session, design]
status: draft
---

# Life+AI 会话协议

> 统一 Life+AI 三角色（简报员/分析师/协作者）与 KOS 引擎的会话交互规范。

---

## 1. 会话生命周期

```
SessionStart ──→ 运行中 ──→ SessionEnd
     │                │            │
     ├─ KOS 上下文    ├─ KOS 命令  ├─ hot.md 更新
     ├─ Life-Brief    ├─ Life-命令 ├─ 锁清理
     └─ Life-Check    └─ 用户交互  └─ 操作日志
```

### SessionStart（自动）

按顺序执行：

1. KOS 上下文加载（hot.md + STATE.md + 锁清理）
2. **Life-Brief** — 检查昨日三支柱速写 + 今日任务，提示"简报已就绪"
3. **Life-Check** — 检查三支柱目标进度，时间过半且完成 < 50% 时提醒

### 运行中（按需）

- 用户主动调用 `Life-Report` / `Life-Brief` / `Life-Check`
- KOS 引擎命令（Triage/Compile/Link 等）正常执行
- 两者互不干扰

### SessionEnd（自动）

1. 用户/系统触发结束
2. **Life-Brief 傍晚回顾** — 检查今日是否有三支柱更新，有则提示
3. KOS 收尾（hot.md 更新 + 锁清理 + 操作日志）

---

## 2. 角色与命令映射

| 角色 | 命令 | 自动触发 | 用户调用 | 数据源 |
|:----|:----|:--------:|:--------:|--------|
| 简报员 | `Life-Brief` | SessionStart + SessionEnd | 支持 | Periodic/日记 三支柱速写 |
| 分析师 | `Life-Report` | 否 | `Life-Report weekly/monthly` | 各支柱日志 |
| 协作者 | `Life-Check` | SessionStart | `Life-Check` | 各支柱索引页目标 |

---

## 3. 与 KOS 引擎的交互规则

| 场景 | 规则 |
|:----|------|
| 同时激活 | Life 优先读取，KOS 优先写入（避免竞争） |
| 数据冲突 | Life 写 `2 Areas/{支柱}/日志/`，KOS 写 `_meta/` 和 `3 Resources/`，互不重叠 |
| hot.md 更新 | 仅 KOS 引擎写入；Life 不写 hot.md |
| 锁机制 | Life 不使用文件锁（只读操作不涉及） |
| 状态持久化 | Life 不读写 STATE.md（那是 KOS 引擎专用） |

---

## 4. 会话输出规范

| 时机 | 输出内容 | 格式 |
|:----|---------|------|
| SessionStart Brief | 昨日回顾 + 今日任务 | 一句话提示，用户确认后展开 |
| SessionStart Check | 目标进度异常 | 仅在有异常时输出 |
| 运行中 | 按用户调用的命令 | 对应命令的输出格式 |
| SessionEnd | 今日更新汇总 | 仅在有变化时输出 |

---

## 5. 文件位置

| 文件 | 用途 |
|:----|------|
| `_meta/ai/agents/life/简报员.md` | 简报员角色定义 |
| `_meta/ai/agents/life/分析师.md` | 分析师角色定义 |
| `_meta/ai/agents/life/协作者.md` | 协作者角色定义 |
| `.codex/skills/life/SKILL.md` | kos-life 技能入口（三平台同步） |
| `_meta/architecture/design/Life+AI-会话协议.md` | 本文档 |

---

## 6. 后续

- Life+AI 数据迁移至 KOS（STATE.md 对接）
- KOS 三支柱报告引擎对接
