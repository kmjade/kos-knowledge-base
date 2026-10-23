---
title: "08 自动化与 CI/CD"
aliases: [Codex Automation, Codex CI/CD]
udc: "004.8"
tags: [codex, automation, ci-cd, headless]
created: 2026-09-05
updated: 2026-09-05
---

# 08 自动化与 CI/CD

## 无头模式（Headless）

```bash
codex exec "修复这个 bug"                    # 一次性执行
cat task.md | codex exec -                    # 管道输入
codex exec --ask-for-approval never ...       # 不交互
```

`codex exec` 是脚本化/CI 的核心入口。

## CI/CD

| 要点 | 说明 |
|------|------|
| 审批 | CI 必须 `--ask-for-approval never`，否则交互式审批会挂起 |
| 配置 | `codex exec --profile ci` 用专用 profile |
| 沙箱 | CI 中常用 `workspace-write` 或更严格沙箱 |

## Codex SDK

把 Codex 作为库程序化调用（自动化/集成）：

- 提供与 `codex exec` 类似的能力，可嵌入 Python/Node 等应用
- 用于构建自定义 agent 工作流、CI 集成、批量任务

## 多代理与编排

| 能力 | 说明 |
|------|------|
| 子代理 | 隔离上下文并行处理 |
| `/agent` / `/multi-agents` | 多代理切换 |
| Hooks `SubagentStop` | 编排子代理生命周期 |

## 关联

[[04-沙箱与审批]] · [[06-技能与子代理]] · [[wiki/concepts/无头模式-Headless|无头模式]] · [[wiki/concepts/子代理-Subagent|子代理]]
