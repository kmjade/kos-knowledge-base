---
name: kos-code
description: MQL4 代码管理引擎。工单 → Git 提交 → 状态追踪闭环。触发词：代码工单、提交代码、代码审计、工单状态、KOS-Code。
allowed-tools: Read Write Edit Bash Grep
---

# kos-code：代码管理引擎

> 工单 → 编码 → 提交 → 闭环，全程可追溯

---

## 工作流

```
步骤1: 分析/审核 → 产出发现清单
                   ↓
步骤2: 创建工单 → 写入 26-{project}/工单-{PREFIX}-{NNN}.md
                   ↓
步骤3: 执行编码 → git add + git commit -m "fix: msg (TICKET-ID)"
                   ↓
步骤4: 更新工单 → status: resolved + 执行记录
                   ↓
步骤5: 沉淀知识 → 更新 2 Areas/ 或 3 Resources/
```

---

## 工单编号规则

```
格式: 工单-{前缀}-{NNN}.md
前缀: ENC = 编码, AUD = 审计, FIX = 修复, FEA = 功能, DOC = 文档
NNN:  三位顺序号 (001-999)

示例: 工单-ENC-003.md
```

## 工单模板

```yaml
---
id: ENC-003
title: "简短标题"
created: YYYY-MM-DD
updated: YYYY-MM-DD
severity: critical | major | minor
priority: P0 | P1 | P2 | P3
tags: [tag1, tag2]
status: open | in_progress | resolved
project: "26-NN xxx"
---
```

## Git 提交规范

```
格式: <type>(<scope>): <description> (<TICKET-ID>)

类型: feat / fix / chore / refactor / docs / style / perf
作用域: risk / data / exec / ui / core / config / docs

示例:
  fix(risk): 修复 MagicNumber 未定义引用 (ENC-003)
  feat(strategy): 添加自适应 ATR 参数 (FEA-001)
```

---

## 主流程

### 阶段一：创建工单

1. 从审核报告或用户描述中提取问题
2. 分配严重性/优先级：
   - P0：风控失效、非预期交易 → 立即修复
   - P1：多品种异常、架构缺陷 → 本迭代修复
   - P2：功能增强 → 可排期
   - P3：优化建议 → 低优先级
3. 写入 `1 Projects/2-execution/26-{project}/工单-{PREFIX}-{NNN}.md`

### 阶段二：执行修复

1. 读取源码定位问题
2. 执行编码修改
3. `git add` + `git commit -m "fix(scope): desc (TICKET-ID)"`
4. 验证：括号平衡检查

### 阶段三：更新工单

1. 更新 `status: resolved`
2. 追加执行记录到执行记录表
3. 关联提交：在工单末尾添加 `**提交：** \`{hash}\``

### 阶段四：状态报告

`KOS-Code --status` 或"代码工单状态"：

```
示例项目
├── 工单-ENC-001  ✅ resolved  示例事项一
├── 工单-ENC-002  ✅ resolved  示例事项二
├── 工单-ENC-003  ✅ resolved  示例事项三
├── 工单-ENC-004  ✅ resolved  示例事项四
└── 工单-ENC-005  ✅ resolved  示例事项五
```

---

## 扫描范围

| 参数 | 说明 | 默认 |
|:----|------|:----:|
| `--status` | 显示所有工单状态 | — |
| `--project <path>` | 指定项目路径 | `1 Projects/2-execution/` |
| `--git <path>` | 关联 Git 仓库 | `<本地 MQL4 仓库路径>` |
| `--audit <file>` | 从审核报告生成工单 | — |

---

## 幂等规则

- 已有 `status: resolved` 的工单不重复操作
- 已包含工单 ID 的 commit 不重复引用
- 工单文件已存在则跳过创建
