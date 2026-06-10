---
created: 2026-06-07
updated: 2026-06-07
udc: 025.4:004
aliases: [UDC 標籤體系, DDC 标签体系]
tags: [resource, udc, tagging, metadata]
---

# UDC 标签体系

> KOS_LLM-Wiki 中的 UDC 标签使用规范与索引。
> 本系统使用 `#udc/*` 格式标记笔记的 UDC 分类。

## 标签格式规范

### 基本格式

```
#udc/{类号}          — 单类号（如 #udc/004.8）
#udc/{类号}-{类号}   — 复合类号，连字符替换冒号
```

### 标签命名规则

| UDC 类号 | 标签 | 说明 |
|---------|------|------|
| 001.8 | `#udc/001.8` | 知识组织与管理 |
| 004.8 | `#udc/004.8` | 人工智能 / LLM |
| 025.4 | `#udc/025.4` | 分类法 |
| 001.8:004.8 | `#udc/001.8-004.8` | 知识管理+AI 复合 |
| 004.8:519.6 | `#udc/004.8-519.6` | 神经网络 |
| 929 | `#udc/929` | 人物传记 |

### 标签 vs UDC frontmatter

UDC 信息在笔记中通过两个字段表达：

```
---
udc: 004.8           # 精确分类号（用于 Dataview 查询）
tags: [udc/004.8]    # 标签（用于 Obsidian 图谱/搜索）
---
```

- `udc:` — 严格遵循 UDC 规范，支持组合类号如 `001.8:004.8`
- `tags:` — 标记 `#udc/...` 用于 Obsidian 原生搜索和图谱视图

## 标签分组

### 按知识领域

| 领域 | UDC 标签 | 覆盖笔记 |
|------|---------|---------|
| 知识管理 | `#udc/001.8` | PARA 方法、KM、索引 |
| AI / LLM | `#udc/004.8` | LLM 基础、Transformer、提示工程 |
| 软件 | `#udc/004.4` | 软件工程、项目工单 |
| 分类法 | `#udc/025.4` | UDC 概述、DDC、CLC、LCC |
| 人物 | `#udc/929` | People CRM 全部实体 |

### 按子库

| 子库目录 | 默认 UDC 标签 |
|---------|--------------|
| `3 Resources/LLM-Wiki/*` | `#udc/004.8` |
| `3 Resources/PARA/*` | `#udc/001.8-005` |
| `3 Resources/UDC/*` | `#udc/025.4` |
| `3 Resources/People/*` | `#udc/929` |
| `_meta/system/logs/operations/*` | `#udc/004.8-005.1` |
| `_meta/system/logs/reports/*` | `#udc/001.8-311` |
| `Periodic/*` | `#udc/001.8-004.8` |

## Dataview 查询

```dataview
TABLE udc, file.folder AS "位置"
FROM ""
WHERE contains(tags, "udc/004.8")
SORT created DESC
```

```dataview
TABLE udc, tags
FROM "3 Resources"
WHERE udc LIKE "004.%"
```

## 标签维护

- 新增 UDC 类号需先在 `_meta/udc-keywords.json` 的映射表中注册
- 标签分组同步更新到 `_meta/index/links/Index/_index.md`
- 复合类号标签统一使用 `-` 替换 `:`

## 参考

- [[UDC 分类索引]]
- [[UDC 概述]]
- [[DDC-UDC 映射表]]
- [[3 Resources/000-Knowledge/_meta/UDC映射|UDC映射]]
