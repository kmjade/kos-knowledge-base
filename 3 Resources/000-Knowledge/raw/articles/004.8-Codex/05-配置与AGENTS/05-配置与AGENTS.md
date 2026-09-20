---
title: "05 配置与 AGENTS.md"
aliases: [Codex Config, Codex 配置, AGENTS.md]
udc: "004.8"
tags: [codex, config, memory, profiles]
created: 2026-09-05
updated: 2026-09-05
---

# 05 配置与 AGENTS.md

## 配置文件

| 文件 | 作用域 |
|------|--------|
| `~/.codex/config.toml` | 用户级 |
| `.codex/config.toml` | 项目级 |

### 命名 Profiles

```bash
codex --profile review           # 用 review 配置启动
codex exec --profile ci ...      # CI 专用配置
```

Profiles 让同一台机器上为不同场景（审查、CI、日常）维护不同配置。

### config.toml 示例

```toml
model = "gpt-5.1-codex"
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[mcp_servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]

[hooks]
# 见 07 章
```

## AGENTS.md — 项目记忆

AGENTS.md 是 Codex 的**持久系统级指令文件**，每会话读取。`/init` 可自动生成骨架。

### 层级

| 文件 | 作用域 |
|------|--------|
| `~/.codex/AGENTS.md` | 全局跨项目规则 |
| `AGENTS.md`（仓库根） | 项目级（覆盖全局冲突项） |

### 最佳实践

- 保持简短（约 150 行以内）
- 写**规则而非故事**（如 "Never touch migrations"，而非架构历史）
- 用祈使句
- 明确禁止项

> AGENTS.md 已成为跨工具通用约定（Claude Code、Hermes 等也读取），是「可移植的编码 Agent 记忆」。

## 常用命令

```bash
codex config           # 查看配置
/init                  # 初始化 AGENTS.md
/model                 # 切换模型
/permissions           # 查看/改审批设置
```

## 关联

[[03-核心架构]] · [[04-沙箱与审批]] · [[wiki/concepts/AGENTS.md-项目记忆|AGENTS.md]] · [[wiki/concepts/配置-Profiles|Profiles]]
