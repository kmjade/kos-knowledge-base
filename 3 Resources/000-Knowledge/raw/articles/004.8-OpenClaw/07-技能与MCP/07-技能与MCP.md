---
title: "07 技能与 MCP"
aliases: [OpenClaw Skills, OpenClaw MCP]
udc: "004.8"
tags: [openclaw, skills, mcp, acp]
created: 2026-09-05
updated: 2026-09-05
---

# 07 技能与 MCP

## 技能（Skills）

OpenClaw 内置 **100+ AgentSkills**，社区生态 **7000+ Skills**。

```bash
openclaw skills search/install/update/verify/list
```

## ClawHub（技能市场）

ClawHub 是技能/插件的发现、安装、发布市场：

| 能力 | 说明 |
|------|------|
| 发现/安装 | 查找、安装、更新技能与插件 |
| 发布 | 发布技能/插件，含 review |
| 安全审计 | 安装前查看安全审计结果 |
| CLI | `openclaw skills` + ClawHub CLI |

## MCP

```bash
openclaw mcp          # 通过 MCP 暴露渠道会话 + 管理 MCP 服务器定义
```

- 把 OpenClaw 渠道会话暴露给其他 MCP 客户端
- 管理保存的 MCP 服务器定义

## ACP（Agent Client Protocol）

```bash
openclaw acp          # 运行 ACP bridge，供 IDE 集成
openclaw attach       # 用 scoped Gateway MCP grant 启动 Claude Code
```

OpenClaw 可作为网关「前端」，把消息渠道接到外部编码 agent（如 Claude Code）。

## 关联

[[06-自动化与调度]] · [[08-安全与治理]] · [[wiki/concepts/技能系统-Skills|技能系统]] · [[wiki/concepts/MCP-模型上下文协议|MCP]]
