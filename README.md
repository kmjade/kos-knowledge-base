# KOS_LLM-Wiki

**Knowledge Organization System + LLM-Wiki**

一个融合 **PARA 方法**、**UDC 分类法** 与 **LLM 知识库** 的个人知识管理系统，支持三语言。

![version](https://img.shields.io/badge/version-v1.2.1-blue)

## 系统架构

```
KOS_LLM-Wiki/
├── 1 Projects/          # 项目：有明确目标与截止日期
├── 2 Areas/             # 领域：持续关注的长期主题
├── 3 Resources/         # 资源：参考资料与知识库
│   └── 000-Knowledge/    # 通用知识层
│       ├── raw/           # 原始资料（输入）
│       ├── wiki/          # 编译知识页（Concepts / Entities / Sources）
│       │   ├── concepts/  # 概念定义
│       │   ├── entities/  # 实体（人物、组织）
│       │   └── sources/   # 来源资料
│       ├── outputs/       # 对外发布文章（衍生输出）
│       │   ├── wechat/
│       │   ├── xiaohongshu/
│       │   └── blog/
│       ├── 001-PARA/      # PARA 方法论
│       ├── 004-LLM-Wiki/  # AI / LLM 知识库
│       └── 025-UDC/       # UDC 分类法体系
├── 4 Archives/          # 归档：已完成工单与设计文档
├── _meta/               # 系统配置
│   ├── 🔗 知识关联/Index/ # 总索引
│   ├── Templates/        # 笔记模板
│   └── design/           # 设计文档
├── Periodic/            # 周期笔记（日/周/月/季/年）
├── en/                  # English version
├── zh-tw/               # 繁體中文版
├── Home.md              # 主页
└── README.md
```

## 语言版本

| 语言 | 首页 | 索引 |
|------|------|------|
| English | [Home](en/Home.md) | [Master Index](en/_meta/Knowledge-Links/Index/_index.md) |
| 简体中文 | [首页](_meta/🔗%20知识关联/Dashboard/Home.md) | [总索引](_meta/🔗%20知识关联/Index/_index.md) |
| 繁體中文 | [首頁](zh-tw/首頁.md) | [總索引](zh-tw/_meta/🔗%20知识关联/Index/_index.md) |

## 规模

| 度量 | 值 |
|------|-----|
| 知识页 (wiki/) | **89**（concepts 19 + entities 31 + sources 2 + 专题页 37） |
| 原始资料 (raw/) | **30+** 篇 |
| 人物实体 (People CRM) | **30**（Tier 1: Paul-Otlet, Tier 2: La-Fontaine, Tier 3: 28 人） |
| UDC 分类覆盖 | **25** 个类目 |
| LLM 专题 | **11** 页（Transformer/RAG/Prompt/Training...） |
| 三语言同步 | **CN / EN / ZH-TW** 全对齐 |

## 核心特性

- **PARA 组织** — 项目/领域/资源/归档四级结构
- **UDC 分类** — 每个笔记标注国际十进分类号
- **KOS-Wiki-Compile** — raw/ → wiki/ 自动编译引擎
- **People CRM** — 三层人物实体系统（核心/重要/背景）
- **三语言支持** — 简体中文、English、繁體中文
- **对外输出** — outputs/ 目录，支持微信/小红书/博客发布
- **Obsidian 原生** — 完整 frontmatter、模板系统、Dataview 查询库

## 版本历史

| 版本 | 日期 | 内容 |
|------|------|------|
| v1.2.0 | 2026-06-07 | People 多语言化、模板重命名、索引修正、outputs 目录 |
| v1.1.1 | 2026-06-07 | 索引迁移至 _meta/、三语言同步 |
| v1.1.0 | 2026-06-07 | KOS-Wiki-Compile 引擎、周期自动化、搜索层 |
| v1.0.0 | 2026-06-03 | 初始系统构建 |

## 快速开始

1. 用 [Obsidian](https://obsidian.md) 打开本仓库
2. 启用「设置 → 核心插件 → 模板」，模板文件夹设为 `_meta/Templates`
3. 从 [Home.md](Home.md) 开始浏览
4. 新建笔记使用 `Ctrl/Cmd+P` → `插入模板`

## 许可

见 LICENSE 文件。