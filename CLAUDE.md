本文档为 Claude Code（claude.ai/code）提供使用此仓库的指南。

## 仓库概述

KOS_LLM-Wiki 是一个**个人知识管理系统**——非软件项目。融合 PARA 方法论、UDC 分类法和 LLM-Wiki 概念，通过 Obsidian 管理并辅以 AI Agent 驱动。没有构建系统、测试套件或应用代码。

规范行为参考 `AGENTS.md`——本文未覆盖的操作请先阅读该文件。

## 目录结构

```
KOS_LLM-Wiki/
├── 0 Inbox/              # 待分拣笔记
├── 1 Projects/           # 活跃项目
├── 2 Areas/              # 长期领域（生活/学习/工作/知识组织）
├── 3 Resources/          # 知识库（LLM-Wiki, PARA, UDC, People）
├── 4 Archives/           # 已归档（gitignored）
├── Periodic/             # 周期笔记（gitignored）
├── _meta/                # 系统元数据
│   ├── architecture/     # 架构设计（私密）
│   ├── index/            # 导航（links/queries/indices）
│   ├── system/           # 运维（templates/scripts/config/logs）
│   ├── ai/               # AI 层（skills/memory/agents）
│   └── assets/           # 架构图
├── _attachments/         # 媒体附件（images/pdfs/canvases）
├── en/ + zh-tw/          # 多语言镜像
├── .claude/ .codex/ .opencode/  # AI 平台配置
├── AGENTS.md             # AI 行为规范
├── CLAUDE.md             # 本文件
└── README.md
```

## AI 引擎命令

| 命令 | 功能 |
|------|------|
| `KOS-Triage [--file <path>]` | Inbox 四维分拣 |
| `KOS-Wiki-Compile [--topic <name>]` | raw/ 编译为 wiki/ |
| `KOS-Link [--path <dir>]` | 校验 frontmatter/UDC/链接/跨语言 |
| `KOS-Query [quick|standard|deep] <问题>` | 三级知识库查询 |
| `Daily Open` / `Day-Review` | 今日笔记 / 每日回顾 |
| `Week-Review` / `Month-Review` | 周报 / 月报 |

所有引擎**幂等**，绝不覆盖 `reviewed: true` 的内容。

## Frontmatter

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <类号>
tags: [tag1, tag2]
---
```
UDC 格式：`\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*`。四层管道：模板→目录→关键词→AI。

## 跨语言链接

- A. 同语言存在对应页面 → 指向同语言（EN 用 kebab-case）
- B. 同语言不存在 → Fallback 到 CN 完整路径
- C. 共享内容（索引/模板/分类法）→ 统一指向 CN

## 全局约束

- 绝不修改 `reviewed: true` 的页面
- 绝不删除文件
- 绝不覆盖人工编辑内容
- 不重复已处理文件
- 不加 `--fix` 不修改
