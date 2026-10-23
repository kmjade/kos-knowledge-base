---
name: kos-task-executor
description: 单任务委派执行器。安全执行工单里委派给 AI 的单个子任务，复用而非覆盖、先查再建、产物加 wikilink。触发词：执行工单、执行任务、跑这个任务、execute task。
allowed-tools: Read Write Edit Bash
---

# kos-task-executor：单任务委派执行器

> 吸收自 IOTO `obsidian-task-executor` 的执行纪律（[[_meta/architecture/adr/ADR-008-KOS吸收IOTO任务调度台-CLI原生|ADR-008]]）。
> 定位：补齐 KOS「引擎式批处理」（`kos-triage` / `kos-compile`）之外的粒度盲区——执行工单里被委派的**单个**子任务。
> 调用方（`kos` orchestrator / 用户）负责排程，本技能负责干活，不越权重排。

---

## 触发机制

- **主动触发**：「执行 26-XX」「执行工单的 WP-NN」「把 XX 任务跑一遍」
- **路由触发**：`kos` 入口识别到「执行单个委派任务」的意图

## 执行纪律（核心，吸收自 `obsidian-task-executor`）

1. **复用而非覆盖** — 先读相关笔记，保留已有内容，优先「扩展 / 追加 / 合并」，绝不覆盖人工编辑。
2. **只做被委派的那一个** — 若只派了一个子任务，就只做那一个；不脑补隐藏任务，不动无关的 checklist。
3. **先查再建** — 目标笔记存在则更新，不存在才新建，绝不造重名副本。
4. **产物加 wikilink** — 生成的交付物用 `[[wikilink]]` 串回工单与相关笔记。

## 三锚点前置检查（[[_meta/architecture/design/KOS吸收IOTO-全量差距报告|PRD]] §8.3）

执行前核对工单三锚点。**确定性硬校验**用脚本（缺「交付物」exit 1）：

```bash
python _meta/system/scripts/kos-task-check.py <工单.md>
```

| 锚点 | 稳定标记 | 缺失时的行为 |
|------|---------|-------------|
| 交付什么 | `## 交付物` / `## 验收标准` | **拒绝执行**，提示补全 |
| 有什么材料 | `## 背景` / `## 相关链接` | 允许缺，提示「上下文不完整」 |
| 想到什么 | `## 目标与工作包` / `## 决策日志` | 缺 WP 视为「无执行计划」，退回提案 |

> 校验器容忍编号标题（`## 1. 背景`）与非编号（`## 背景`）两种形态，与实际工单一致。

## 执行流程

```
收到工单 / 子任务
  │
  ├── 1. 三锚点检查（缺「交付物」→ 拒绝，提示补全）
  ├── 2. 读相关笔记与 frontmatter
  ├── 3. 目标笔记已存在？──是→ 更新（合并而非覆盖）
  │                     └─否→ 在正确目录新建
  ├── 4. 产物加 [[wikilink]] 引用
  └── 5. 汇报：完成了什么、创建/更新了哪些笔记
```

## 安全约束（对齐 AGENTS.md）

- 绝不删除文件（移动走 `kos-archive` / Obsidian move）
- 绝不修改 `reviewed: true` 的页面
- 不加 `--fix` 不修改任何文件
- 路径用 Vault-relative 或绝对路径，操作前确认目标目录存在

## 边界（不做）

- 不越权重排整个工单的任务顺序（那是调用方的职责）
- 不做全库 / 目录级批处理（那是 `kos-triage` / `kos-compile` 的职责）
- 不登记新技能到 `workspace-tools.yaml`（那是 WP-04 的职责）

## 相关引擎

- `kos-project` — 立项与工单结构（三锚点载体）
- `kos-triage` / `kos-compile` — 引擎式批处理（本技能的互补）
- `kos-archive` — 完成后的归档
