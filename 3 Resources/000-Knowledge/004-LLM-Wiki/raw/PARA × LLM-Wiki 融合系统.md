---
compiled_at: "2026-06-07"
compiled_by: "KOS-Wiki-Compile"
compiled-pages: [wiki/Knowledge+PARA+LLM-Wiki融合系統.md]
compiled: true
created: PARA × LLM
updated: 2026-06-07
udc:
tags: [triage, resource]
triage:
  status: processed
  date: 2026-06-07
  confidence: medium
  source: 0 Inbox/PARA × LLM-Wiki 融合系统.md
  route: 3 Resources/000-Knowledge/004-LLM-Wiki/
lifecycle: reference
---

## 从零开始的完整架构设计文档 v1.0

---

## 第零章：设计哲学与核心假设

在动手之前，必须先确立三条设计公理，所有后续决策都从这里推导。

**公理一：单一 Vault，永不分裂**

当所有内容都进入同一个 Obsidian Vault，工具碎片化的问题就消失了——一个 Vault，全部 Markdown，全部对 Claude Code 可访问。 多 Vault 切换的摩擦是伪问题，真正的解是 **在单一 Vault 内建立明确的隔离边界** 。

**公理二：AI 是编译器，不是对话伙伴**

这一转变重新定义了整个问题：从「检索」到「编译」。 对生活信息，AI 是 **路由器** ；对专业知识，AI 是 **编译器** 。你只是信息的生产者和最终消费者，中间的所有整理工作都由 AI 承担。

**公理三：信息有生命周期，不是所有东西都值得永久存储**

知识管理系统失败的根源不是工具——是维护成本。构建知识库有三个步骤：收集（容易）、组织（困难）、维护（规模化后几乎不可能）。整理、交叉引用、摘要、更新的繁重工作才是系统死亡的地方。 本系统的核心设计目标就是把这个维护成本降到零。

---

## 第一章：Vault 目录结构设计（物理层）

## 1.1 完整目录树

```
~/ObsidianVault/               ← Vault 根目录（= Claude Code 工作目录）
│
├── CLAUDE.md                  ← 🧠 Agent 宪法（最重要的文件）
├── .gitignore                 ← Git 版本控制配置
│
├── .claude/                   ← Claude Code 配置目录
│   ├── skills/                ← 所有 Skills（/triage、/wiki-compile 等）
│   │   ├── triage.md          ← 核心：Inbox 分拣 Skill
│   │   ├── wiki-compile.md    ← 知识编译 Skill
│   │   ├── daily-open.md      ← 每日开启仪式 Skill
│   │   ├── weekly-review.md   ← 每周回顾 Skill
│   │   ├── context.md         ← 会话状态加载 Skill
│   │   └── lint.md            ← 系统健康检查 Skill
│   └── hooks/
│       └── hooks.json         ← SessionStart/Stop 自动钩子
│
├── 00-Inbox/                  ← 📥 唯一入口（永远只往这里扔东西）
│   ├── _processed/            ← 已分拣存档（不删除，留痕迹）
│   └── [新内容直接扔这里]
│
├── 01-Projects/               ← 🎯 活跃项目（有截止日期、有结果）
│   ├── _INDEX.md              ← 所有项目快照（Dataview 自动生成）
│   ├── [项目名]/
│   │   ├── README.md          ← 项目定义：目标、截止、状态
│   │   ├── tasks.md           ← 任务列表（Obsidian Tasks 格式）
│   │   ├── log.md             ← 追加式进展日志
│   │   └── refs/              ← 项目相关参考资料
│   └── ...
│
├── 02-Areas/                  ← 🏠 持续领域（无截止日期、持续维护）
│   ├── health/                ← 健康领域
│   ├── finance/   