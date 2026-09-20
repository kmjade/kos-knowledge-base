---
title: "06 钩子与 MCP"
aliases: [Claude Code Hooks, Claude Code MCP]
udc: "004.8"
tags: [claude-code, hooks, mcp, plugins]
created: 2026-09-05
updated: 2026-09-05
---

# 06 钩子与 MCP

## 钩子（Hooks）

钩子在 Claude Code 到达**生命周期事件**时运行脚本/HTTP 请求/MCP 调用/提示/子代理。它们是**确定性的**（匹配事件必触发），适合强制执行与自动化。

### 生命周期事件

| 事件 | 触发时机 |
|------|----------|
| `PreToolUse` / `PostToolUse` | 工具调用前/后 |
| `SessionStart` / `SessionEnd` | 会话开始/结束 |
| `UserPromptSubmit` | 用户提交提示 |
| `Notification` | 通知事件 |
| `Stop` / `SubagentStop` | 停止 |

### 典型用途

- 编辑后自动 lint / 格式化
- 阻止不安全命令（真正的护栏）
- 日志记录、通知、命令校验

> **钩子 vs 提示**：CLAUDE.md 的说明是建议性的，Claude 可能不遵守；钩子保证每次都触发。像「绝不编辑 .env」这类规则应放在钩子里，而非仅靠文字说明。

## MCP（模型上下文协议）

MCP 连接 Claude Code 与外部服务/工具（数据库查询、Slack 发消息、浏览器控制等）。

### 配置位置

| 文件 | 说明 |
|------|------|
| `.mcp.json` | 项目级 |
| settings 文件 | 项目/全局 |
| 覆盖规则 | 按名称覆盖：local > project > user |

```bash
claude mcp add <name> <command/url>   # 添加 MCP 服务器
claude mcp list                       # 查看已连接服务器
/mcp                                  # 会话内查看
```

## 插件（Plugins）

插件把技能、钩子、子代理、MCP 服务器打包成一个可安装单元，通过**市场（marketplaces）**分发。插件技能有命名空间（如 `/my-plugin:review`），多插件可共存。

| 能力 | 说明 |
|------|------|
| 打包 | Skills + Agents + Hooks + MCP 一体 |
| 分发 | 市场安装，`/plugin` 管理 |
| 隔离 | 命名空间避免冲突 |

## 功能选择速查

| 功能 | 何时用 |
|------|--------|
| CLAUDE.md | 始终在线的项目约定 |
| Skill | 可复用知识/流程 |
| Subagent | 上下文隔离、并行任务 |
| Hook | 每次都必须触发的自动化 |
| MCP | 外部数据/动作 |
| Plugin | 打包分发整套扩展 |

## 关联

[[05-技能与子代理]] · [[04-配置与CLAUDE]] · [[wiki/concepts/钩子-Hooks|钩子]] · [[wiki/concepts/MCP-模型上下文协议|MCP]]
