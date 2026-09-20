---
title: "08 Headless 与集成"
aliases: [OpenCode Headless, OpenCode Integrations]
udc: "004.8"
tags: [opencode, headless, integration, sdk]
created: 2026-09-05
updated: 2026-09-05
---

# 08 Headless 与集成

## 无头模式（Headless）

```bash
opencode run "修复这个 bug"              # 一次性执行
cat task.md | opencode run -             # 管道输入
opencode run --agent plan "分析架构"      # 指定代理
```

常用 flags：`-m provider/model`、`--agent`、`--session`、`--continue`、`--fork`、`--prompt`、`--share`、`--attach`、`--thinking`、`--dangerously-skip-permissions`。

## Server 模式

`opencode serve` 提供 headless API，供桌面应用、IDE 扩展与自定义客户端接入。

## SDK / 开发

OpenCode 提供 SDK 与开发文档，支持程序化集成。

## 编辑器集成

| 集成 | 说明 |
|------|------|
| ACP 支持 | Agent Client Protocol，供支持 ACP 的编辑器接入 |
| IDE 扩展 | VS Code 等 IDE 扩展 |
| 桌面应用 | OpenCode Desktop |

## 平台集成

| 集成 | 说明 |
|------|------|
| GitHub | GitHub Copilot 登录、GitHub 集成 |
| GitLab | GitLab 集成 |
| Share | `--share` 生成会话分享链接 |

## 关联

[[03-核心架构]] · [[09-平台与实战]] · [[wiki/concepts/无头模式-Headless|无头模式]]
