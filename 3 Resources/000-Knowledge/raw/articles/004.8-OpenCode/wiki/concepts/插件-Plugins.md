---
title: "插件 Plugins"
aliases: [Plugins, 插件, OpenCode Plugins]
type: concept
udc: "004.8"
tags: [opencode, plugins]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# 插件 Plugins

## 定义

插件（Plugins）是 OpenCode 的**扩展系统**，用 TypeScript/JavaScript 编写，提供 ~25+ 生命周期钩子/事件，可注册工具、命令、拦截会话事件。配置于 `opencode.json` 的 `plugin` 数组与 `~/.config/opencode/tui.json`。

## 关键特性

| 特性 | 说明 |
|------|------|
| 语言 | TypeScript / JavaScript |
| 钩子 | 25+ 生命周期事件 |
| 定位 | 「AI 会话的 husky」 |

> 插件以用户权限运行任意代码，第三方插件需谨慎。

## 相关

[[代理-Agents|代理]] · [[07-插件与主题]]

## Sources

[[source-OpenCode-Docs]] · [[07-插件与主题]]
