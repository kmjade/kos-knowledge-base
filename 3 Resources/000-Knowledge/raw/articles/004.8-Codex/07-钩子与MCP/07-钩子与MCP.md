---
title: "07 钩子与 MCP"
aliases: [Codex Hooks, Codex MCP]
udc: "004.8"
tags: [codex, hooks, mcp]
created: 2026-09-05
updated: 2026-09-05
---

# 07 钩子与 MCP

## 钩子（Hooks）

钩子在 Codex 到达**生命周期事件**时运行脚本/命令，用于强制自动化（lint、校验、日志、安全拦截）。

### 生命周期事件

| 事件 | 触发时机 |
|------|----------|
| `PreToolUse` / `PostToolUse` | 工具调用前/后 |
| `SubagentStop` | 子代理停止（`decision: "block"` 可继续） |
| 其他会话事件 | 启动/结束等 |

### 典型用途

- 编辑后自动 lint / 格式化
- 阻止不安全命令
- 拦截 MCP 工具调用（匹配 `mcp__…` 工具名）

## MCP（模型上下文协议）

Codex 通过 MCP 连接外部工具/服务，在 `config.toml` 中配置：

```toml
[mcp_servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]

[mcp_servers.my-api]
command = "my-mcp-server"
```

### 说明

- 已在 Claude Code 中配置好的 MCP 服务器，一般也适用于 Codex
- 技能可声明 MCP 工具依赖（`skill_mcp_dependency_install` 特性控制自动安装）
- Codex 不使用独立的 `.mcp.json`，统一在 config.toml

## 关联

[[06-技能与子代理]] · [[05-配置与AGENTS]] · [[wiki/concepts/钩子-Hooks|钩子]] · [[wiki/concepts/MCP-模型上下文协议|MCP]]
