---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [design, analysis, skills, claude-obsidian]
status: draft
---

# claude-obsidian 项目分析

> 基于 2026-06-09 全项目扫描
> 项目主页：https://github.com/AgriciDaniel/claude-obsidian

---

## 概述

**claude-obsidian** 是一个开源的 Claude Code 插件 + Obsidian vault 模板，基于 Andrej Karpathy 的 LLM Wiki 模式。

- **版本**：v1.9.2 "Compound Vault"
- **作者**：AgriciDaniel
- **许可证**：MIT
- **定位**：Claude Code marketplace 插件，同时可直接在 Obsidian 中打开

---

## 项目结构

```
4 Archives/claude-obsidian/
├── skills/                 # 15 个可执行 Skill（核心资产）
├── agents/                 # AI agent 定义（wiki-lint）
├── commands/               # 命令参考
├── hooks/hooks.json        # Claude Code 生命周期钩子
├── scripts/                # 工具脚本
├── bin/                    # 安装与设置脚本
├── .claude-plugin/         # 插件清单
├── .raw/                   # 不可变源文档
├── wiki/                   # 知识库输出
├── assets/diagrams/        # 架构图
├── docs/                   # 文档
└── tests/                  # 测试脚本
```

---

## Skills 清单（15 个）

| Skill | 功能 | 类别 |
|-------|------|------|
| `wiki` | 初始化/检查 vault 状态 | 核心 |
| `wiki-ingest` | 摄入源文件，创建 8-15 个 wiki 页面 | 核心 |
| `wiki-query` | 回答 wiki 问题（Quick/Standard/Deep） | 核心 |
| `wiki-lint` | 健康检查：断链、孤立页面、frontmatter | 核心 |
| `wiki-fold` | 日志折叠归纳 | 高级 |
| `wiki-cli` | Obsidian CLI 传输包装 | 基础设施 |
| `wiki-retrieve` | 混合检索（BM25 + cosine rerank） | 高级 |
| `wiki-mode` | 方法论模式（LYT/PARA/ZK/Generic） | 高级 |
| `save` | 保存会话为 wiki 笔记 | 工具 |
| `autoresearch` | 自主研究循环 | 工具 |
| `canvas` | 创建/编辑 Obsidian Canvas | 工具 |
| `think` | 10 原则思考框架 | 元技能 |
| `defuddle` | 清理网页内容 | 工具 |
| `obsidian-markdown` | Obsidian Markdown 语法参考 | 参考 |
| `obsidian-bases` | Obsidian Bases 参考 | 参考 |

---

## 关键技术特性

### 1. Hooks 系统

| 钩子 | 触发时机 | 行为 |
|------|---------|------|
| SessionStart | 会话启动 | 读 wiki/hot.md；清理过期锁 |
| PostCompact | 上下文压缩后 | 重新读取热缓存 |
| PostToolUse | Write/Edit 后 | 自动 git add + commit |
| Stop | 会话结束 | 提示更新 hot.md |

### 2. 传输层

`scripts/detect-transport.sh` 自动检测可用通道：Obsidian CLI → MCP → 文件系统。

### 3. 并发控制

`scripts/wiki-lock.sh`：基于 noclobber 原子锁，60s 超时回收。

### 4. 检索系统

混合检索：Contextual Prefix + BM25 + Cosine Rerank（Anthropic 2024.09 论文）。

### 5. 方法论模式

四种组织模式：Generic / LYT / PARA / Zettelkasten。

---

## 与本 vault 的关联

### 直接关联

- `.flownote/skills/` — claude-obsidian 的 skills 派生副本
- `.opencode/skills/` — claude-obsidian 的 skills 派生副本
- AH Skills 系列（ah-inbox, ah-note 等）— 源自 claude-obsidian
- `.opencode/backups/` — 多次冗余备份

### 间接关联

| 本 vault 特性 | claude-obsidian 对应 |
|--------------|---------------------|
| AGENTS.md KOS 引擎 | commands/ + agents/wiki-lint.md |
| 会话协议 | hooks/hooks.json |
| KOS-Triage | skills/wiki-ingest/ |
| KOS-Link | skills/wiki-lint/ + agents/wiki-lint.md |
| _meta/Templates/ | _templates/ |
| raw/wiki 双层结构 | .raw/ + wiki/ |

---

## 核心差异对比

| 维度 | claude-obsidian | KOS_LLM-Wiki |
|------|----------------|--------------|
| 语言 | 英文 | 简中/繁中/英文 三语 |
| 分类 | LYT/PARA/ZK 模式 | UDC 国际十进分类 |
| 技能格式 | SKILL.md（标准格式） | AGENTS.md + _agents/ |
| 生命周期 | hooks.json | AGENTS.md 会话协议 |
| Agent 架构 | 单一 agent | 多角色引擎 |

---

## 可借鉴的设计

1. **Hooks 机制** — AGENTS.md 协议形式化为 hooks.json
2. **wiki-lock.sh** — 防并发冲突
3. **wiki-fold** — 日志定期折叠归纳
4. **wiki-retrieve** — 混合检索
5. **think 框架** — 10 原则元技能

---

## 相关笔记

- [[_meta/design/skills体系分析.md]] — 全 vault skills 现状
- [[Claudian 配置分析]] — Claude Code 配置优化视角
