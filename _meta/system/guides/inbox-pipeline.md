---
created: 2026-06-12
updated: 2026-06-12
udc: 001.8:005.1
tags: [manual, inbox, pipeline, workflow]
status: live
---

# Inbox 流水线操作手册

> 定位：AGENTS.md 约束"不能做什么"；本手册说明"怎么做"。
> 概念基础：IOO（Input → Output → Outcome）知识生产流水线。

---

## 流程总览

```
1-input/ ──→ Triage/Compile ──→ 2-output/ ──→ 3-outcome/
   ↑              ↑                  ↑              ↑
   捕获      AI 自动处理          人确认使用      闭环记录
```

**核心规则：** 文件从 `1-input/` 进入，不允许跳过阶段。前一个阶段未完成，不移入下一阶段。

---

## 各阶段操作

### 1-input/ — 捕获

| 子目录 | 放什么 | 谁放 |
|--------|--------|------|
| `clippings/` | 网页剪藏、文章摘录、教程引用 | AI（webclipper）/ 人 |
| `fleeting/` | 碎片想法、闪念、随手记、未归类笔记 | 人 |

**操作步骤：**

1. 新捕获的材料放入对应的子目录
2. AI 定期扫描 `1-input/` 执行 Triage
3. 无需手动标记——AI 通过 frontmatter `triage.status` 追踪

**准入条件：** 任何未处理的 `.md` 文件
**准出条件：** AI 完成 Triage 分析并移出

### 2-output/ — 输出

| 放什么 | 说明 |
|--------|------|
| AI 编译完成的 wiki 页面 | 等待人手确认后同步到 `3 Resources/` |
| 处理后的知识卡片 | 等待人使用或引用 |
| 项目候选 | 可转入 Projects 流水线 |

**操作步骤：**

1. 人审阅 `2-output/` 中的文件
2. 确认内容准确 → 同步到 `3 Resources/` 或归档
3. 确认有实际影响 → 记录到 `3-outcome/impacts/`
4. 确认为知识沉淀 → 记录到 `3-outcome/learnings/`

**准入条件：** AI 完成处理并放入
**准出条件：** 人确认并归档或使用

### 3-outcome/ — 成果

| 子目录 | 放什么 |
|--------|--------|
| `learnings/` | 认知提升、沉淀的知识、可复用的方法 |
| `impacts/` | 实际行动、决策影响、项目结项 Outcome |

**操作步骤：**

1. 日常产生的学习收获 → 写入 `learnings/`
2. 项目结项后 → 将 Outcome 摘要写入 `impacts/`
3. 重要决策或行为改变 → 写入 `impacts/`

**准入条件：** 已经过确认的知识或影响
**准出条件：** 无（成果是终点，不需再移出）

### _processed/ — AI 处理暂存区

AI 完成 Triage/Compile 后，原始文件移入此区作为处理记录。
**人不需操作此区。**

---

## 角色分工

| 角色 | 做的事 |
|------|--------|
| **AI** | 扫描 `1-input/`、Triage 分析、Compile 编译、移入 `2-output/` 或 `_processed/` |
| **人** | 确认 `2-output/` 内容、记录 `3-outcome/`、做实际决策 |

---

## 常见场景

### 场景 1：网页剪藏进来

```
clippings/ 捕获 → AI 提取核心内容 → Triage 判断类型
                                      ↓
                              知识文章 → 编译 → 2-output/
                              引用片段 → 直接 → 2-output/
                              碎片信息 → 过滤 → 丢弃
```

### 场景 2：碎片想法记下来

```
fleeting/ 捕获 → AI 判断复杂度
                   ↓
            < 50 字 → 补充上下文后进 2-output/
            ≥ 50 字 → 完整 Triage 分析
            项目候选 → 转入 1-proposal/
```

### 场景 3：项目结项

```
3-completion/ 确认完成 → 写 Outcome 摘要 → 存 3-outcome/impacts/
                                        → 物理归档到 4 Archives/
```

---

## Triage 适配说明

- 扫描路径：`0 Inbox/1-input/`（不是根目录）
- 忽略条件：`triage.status: processed`
- 去向路由：
  - 知识内容 → `0 Inbox/2-output/`
  - 闭环记录 → `0 Inbox/3-outcome/`
  - 原始文件 → `0 Inbox/_processed/`

---

## 阶段约束

- 文件必须按 `1-input → 2-output → 3-outcome` 顺序流动
- 前一个阶段未完成（无 `triage.status: processed` 标记），不移入下一阶段
- 不允许直接跳入 `3-outcome/`（除非是人为记录的项目 Outcome）
