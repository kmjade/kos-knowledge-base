---
created: 2026-06-07
updated: 2026-06-08
udc: 004.8
tags: [resource, raw, entity, tool]
compiled: true
compiled_at: \"2026-06-07T00:00\"
compiled_by: \"KOS-Wiki-Compile\"
---

# Codex — OpenAI 编程代理

> Codex 是 OpenAI 推出的 AI 编程助手，基于 GPT-4 架构，深度集成于开发环境中。

## 基本资料

| 属性 | 值 |
|------|-----|
| 类型 | AI 编程代理 |
| 开发者 | OpenAI |
| 发布时间 | 2024 |
| 最新版本 | GPT-5 驱动 |
| 运行环境 | 桌面应用 / CLI / IDE 插件 |

## 核心能力

- 代码生成与补全
- 多文件编辑与重构
- Git 工作流集成
- Shell 命令执行
- 项目管理（任务分解、工单追踪）
- 长上下文理解（128K tokens）

## 技术架构

Codex 基于 GPT-5 模型，采用 Agent 架构运行：

```
用户输入 → 规划器 → 工具调用 → 执行反馈 → 迭代优化
```

## 相关工具对比

| 工具 | 类型 | 基础模型 | 开放程度 |
|------|------|----------|----------|
| Codex | 编程 Agent | GPT-5 | 闭源 |
| Claude Code | 编程 Agent | Claude 4 | 闭源 |
| Cursor | IDE 插件 | GPT-4 / Claude | 闭源 |
| Copilot | IDE 插件 | GPT-4 | 闭源 |

## 参考来源

- https://openai.com/codex

## 更新记录

- 2026-06-07: 新增项目管理能力说明
- 2026-06-08: 新增多模态支持特性

Codex 现已支持图像识别和多模态输入，可以在代码审查中同时理解截图和代码。