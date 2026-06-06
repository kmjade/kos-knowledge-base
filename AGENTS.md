# AGENTS — KOS_LLM-Wiki 维护指南

本文件为 AI 助手（如 Codex）维护此知识库的操作规范。

---

## 系统概述

KOS_LLM-Wiki 是一个融合 **PARA**、**UDC** 与 **LLM-Wiki** 的个人知识管理系统。

- **PARA** — 文件夹级别分类（Inbox / Projects / Areas / Resources / Archives）
- **UDC** — 每个笔记标注国际十进分类号
- 支持三语言：简体中文（根目录）、English（`en/`）、繁體中文（`zh-tw/`）

## 目录结构

```
/
├── 00-Inbox/      # 收件箱：待处理的临时笔记
├── 01-Projects/   # 项目笔记
├── 02-Areas/      # 领域笔记
├── 03-Resources/  # 资源笔记
│   ├── PARA/
│   ├── UDC/
│   └── LLM-Wiki/
├── 04-Archives/   # 归档
├── _meta/         # 模板和系统文件
├── 06-Daily/      # 每日笔记
├── en/            # 英文版（镜像结构）
├── zh-tw/         # 繁体中文版（镜像结构）
├── Home.md        # 首页
├── _索引.md       # 总索引
└── AGENTS.md      # 本文件
```

## 新增笔记规范

### 1. 文件命名
- 简体中文/繁体中文：中文描述，空格分隔（如 `提示工程.md`）
- English：kebab-case（如 `prompt-engineering.md`）

### 2. 前置元数据（frontmatter）

每条笔记必须包含以下字段：

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <UDC类号>
tags: [tag1, tag2]
---
```

### 3. UDC 分类规则

| 类号      | 类目             |
|-----------|------------------|
| 001.8     | 知识组织与管理   |
| 004.8     | 人工智能 / LLM   |
| 025.4     | 分类法           |
| 001.8:005 | PARA 方法        |
| 001.8:004.8 | 知识组织与 AI  |

组合使用 `:` 符号表达复合主题。

### 4. 标签规则

- PARA 所属：`#area/*`（领域）、`#resource/*`（资源）、`#project`（项目）
- 跨语言翻译：三语言版本保持相同标签
- 新增标签需同时在 `_索引.md` 的标签分组中记录

### 5. 多语言同步

新增或修改笔记时，需同步三个版本（简体、繁体、英文）：
- 简体中文 -> 根目录
- English -> `en/`
- 繁體中文 -> `zh-tw/`

### 6. 更新索引

每次新增笔记后，同步更新以下索引文件：
- `_索引.md`（简体）- PARA 表、UDC 表
- `en/_index.md`（英文）
- `zh-tw/_index.md`（繁体）

## 表格格式

所有 Markdown 表格必须使用对齐的分隔行：

```
| 列名                         | 列名                         |
|------------------------------|------------------------------|
| 内容                         | 内容                         |
```

表格内 Obsidian wiki 链接中的 `|` 须转义为 `\|`。

## 模板

模板位于各语言版本的 `_meta/Templates/`：
- `project-template.md` / `项目模板.md`
- `area-template.md` / `领域模板.md`
- `resource-template.md` / `资源模板.md`
- `concept-template.md` / `概念模板.md`
- `daily-note-template.md` / `每日笔记模板.md`
