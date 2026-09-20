---
title: "04 配置与 CLAUDE.md"
aliases: [Claude Code Config, Claude Code 配置, CLAUDE.md]
udc: "004.8"
tags: [claude-code, config, memory, permissions]
created: 2026-09-05
updated: 2026-09-05
---

# 04 配置与 CLAUDE.md

## 配置层级

| 文件 | 作用域 | 优先级 |
|------|--------|:--:|
| `~/.claude/settings.json` | 全局（所有项目） | 低 |
| `.claude/settings.json` | 项目（共享给团队） | 中 |
| `.claude/settings.local.json` | 个人本地（gitignore） | 高 |
| 托管设置（企业） | 组织下发，覆盖本地 | 最高 |

```bash
claude config          # 查看/修改配置
claude /config         # 交互式配置
```

## 权限系统（Permissions）

`settings.json` 中的 `permissions` 定义工具使用规则，三种动作：`allow` / `deny` / `ask`。

```json
{
  "permissions": {
    "allow": ["Bash(npm run test:*)", "Read(./docs/**)"],
    "deny": ["Edit(.env)", "Bash(rm -rf /*)"],
    "ask": ["Bash(git push:*)"]
  }
}
```

| 规则 | 说明 |
|------|------|
| 工具级 | `Bash` / `Edit` / `Write` / `Read` / `WebFetch` 等 |
| 规则通配 | 支持 `*`、路径匹配 |
| 模式 | 可设 `defaultMode`（默认 ask）、Plan Mode 只读 |

> 权限是可执行护栏（enforcement）；CLAUDE.md 的说明只是建议（advisory）。真正「禁止改 .env」应写在权限里而非仅靠 CLAUDE.md 文字。

## CLAUDE.md — 项目记忆

CLAUDE.md 是**持久上下文**：每个会话/请求都会加载，定义 Claude 对项目的「始终知道」的内容。

### 三个层级

| 文件 | 作用域 |
|------|--------|
| `~/.claude/CLAUDE.md` | 全局个人记忆 |
| `CLAUDE.md`（项目根/`.claude/`） | 项目级（提交给团队） |
| `CLAUDE.local.md` | 个人本地（gitignore） |

### 最佳实践

- 内容：项目概览、技术栈、关键命令、架构约定
- 保持 **200 行以内**（过长会被忽略）
- 用祈使句（"Use X"、"Never do Y"）
- 明确禁止项
- 用 `@path/to/file` 引用其他文件
- 多层级叠加加载，更具体的指令优先

### 自动记忆（Auto Memory）

除 CLAUDE.md 外，Claude 可**自动累积学习**（auto memory），把会话中学到的经验沉淀为记忆，跨会话复用。

## 调试配置

| 命令 | 用途 |
|------|------|
| `/context` | 查看实际加载了哪些上下文 |
| `/doctor` | 诊断配置问题 |
| `/hooks` | 查看钩子 |
| `/mcp` | 查看 MCP 服务器 |
| `/status` | 查看账号/配置状态 |

## 关联

[[03-核心架构]] · [[07-会话与检查点]] · [[wiki/concepts/CLAUDE.md-项目记忆|CLAUDE.md]] · [[wiki/concepts/权限系统-Permissions|权限系统]]
