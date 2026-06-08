---
name: kos-query
description: "对 KOS 知识库进行三级深度查询：Quick（快速查 hot.md）、Standard（索引+页面）、Deep（全库+归档）。触发词：查询、搜索知识库、找一下、search wiki、query、查找、告诉我关于、quick query、deep query。"
allowed-tools: Read Glob Grep
---

# kos-query: 三级知识查询

对 KOS-LLM-Wiki 知识库进行结构化查询。根据问题复杂度选择查询深度，用最少的 token 获取最精确的答案。

---

## 查询模式

| 模式 | 触发器 | 读取范围 | Token 成本 | 适用场景 |
|------|--------|---------|------------|---------|
| **Quick** | `query quick:` 或简单事实问题 | hot.md 仅 | ~500 | "X 是什么？"、日期查询、快速事实 |
| **Standard** | 默认（无前缀） | hot.md + 索引 + 3-5 页面 | ~3,000 | 大多数知识查询 |
| **Deep** | `query deep:` 或 "全面分析"、"对比" | 全库搜索 + 可选 web | ~8,000+ | 综合对比、差距分析、全面调研 |

---

## 知识库结构

### 内容分布

```
3 Resources/000-Knowledge/       # 知识库核心（wikis/ 下分 concepts/entities/sources/）
   └── wikis/
       ├── concepts/             # 概念页面（理论、方法、框架）
       ├── entities/             # 实体页面（工具、人物、产品）
       └── sources/              # 来源页面（论文、文章、书籍）
2 Areas/                         # 领域笔记（长期关注的责任领域）
1 Projects/                      # 项目笔记（有截止日期的任务）
_meta/                           # 系统元数据（设计、ADR、模板）
```

### 索引文件

| 索引 | 路径 | 内容 |
|------|------|------|
| **热缓存** | `_meta/hot.md` | 最近会话上下文 (~500 字) |
| **主索引 (CN)** | `_meta/🔗 知识关联/Index/_index-zh-cn.md` | 全库 Dataview 索引 |
| **主索引 (EN)** | `en/_meta/Knowledge-Links/Index/_index.md` | English 镜像 |
| **主索引 (TW)** | `zh-tw/_meta/🔗 知识关联/Index/_index.md` | 繁體镜像 |
| **UDC 分类索引** | `3 Resources/000-Knowledge/wikis/concepts/UDC 分类索引.md` | 按 UDC 类号组织的索引 |

### UDC 分类导航

当问题涉及特定学科时，可直接用 UDC 类号定位：

| UDC | 领域 | 查找策略 |
|-----|------|---------|
| `004.8` | AI / LLM | `3 Resources/004-LLM-Wiki/` |
| `001.8` | 知识组织 | `3 Resources/025-Knowledge-Organization/` |
| `025.4` | 分类法 | `3 Resources/025-Classification-Metadata/` |
| `929` | 人物 | `3 Resources/People/` |

---

## Quick Mode

当答案很可能在 hot.md 或索引摘要中时使用。

1. **读** `_meta/hot.md`。如果回答了问题，立即回复。
2. 如果不够，**读** `_meta/🔗 知识关联/Index/_index-zh-cn.md`。扫描描述找答案。
3. 如果在索引摘要中找到，回复，**不打开任何页面**。
4. 如果找不到，回复："Quick 缓存未命中。需要执行 Standard 查询？"

**禁止在 Quick 模式下打开任何知识页面。**

---

## Standard Query Workflow

大多数查询走此路径。

1. **读** `_meta/hot.md` — 可能已有答案或相关上下文。
2. **定位相关页面** — 使用以下策略之一：
   - **关键词 Grep**：`grep -ri "<关键词>" --include="*.md" 3 Resources/ | head -20`
   - **UDC 定位**：如果问题有明确学科归属，直接读对应子库的索引
   - **标签搜索**：通过 Glob 匹配 `**/*.md` + Grep frontmatter 中的 tags
3. **读 3-5 个最相关页面**。对关键实体可跟随 wikilink 到深度 2。
4. **综合答案**。用 wikilink 引用来源：`(来源: [[页面名]])`。
5. **提供归档建议**："这个回答值得保存。需要归档为笔记吗？"
6. 如果问题暴露了**知识空白**：说"关于 X 的资料还不够。需要找一个来源？"

### 查找策略优先级

```
问题有明确 UDC 类号？→ 直接读对应子库索引 → 读具体页面
问题有关键词？     → Grep 搜索 → 按匹配度读页面
问题涉及人物？     → 读 3 Resources/People/wiki/entities/ → 读匹配条目
问题跨多个领域？   → 读主索引 → 多子库搜索
```

---

## Deep Mode

用于综合分析、跨领域对比、"关于 X 的一切"。

1. **读** `_meta/hot.md` 和主索引。
2. **识别所有相关领域**（concepts / entities / sources / areas / projects）。
3. **读每个相关页面**。不跳过。
4. 如果知识库覆盖不足，**提供 web 搜索补充**。
5. **综合完整答案**，带完整引用。
6. **始终将答案归档为笔记**。Deep 答案太有价值，不应流失。

### 归档格式

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <对应类号>
tags: [query, <领域>]
type: query-answer
status: developing
---
```

保存在 `3 Resources/000-Knowledge/wikis/questions/` 下，并链入主索引。

---

## Token 纪律

| 从...开始 | 约成本 | 何时停止 |
|-----------|--------|---------|
| hot.md | ~500 tokens | 如果有答案 |
| 主索引 | ~1000 tokens | 如果能定位 3-5 个相关页面 |
| 3-5 个页面 | ~300 tokens/页 | 通常足够 |
| 10+ 个页面 | 昂贵 | 仅用于全库综合分析 |

如果 hot.md 有答案，**不读更多就回复**。

---

## 空白处理

如果无法从知识库回答：

1. 明确说："知识库中关于此问题的资料不足。"
2. 识别具体空白："缺少关于 [子主题] 的内容。"
3. 建议："需要找一个来源吗？我可以帮你搜索或处理一个。"
4. **不编造**。如果问题涉及本知识库的具体领域，不从训练数据中回答。

---

## 跨语言查询

- 默认从简体中文索引开始
- 如果问题为英文 → 读 `en/_meta/Knowledge-Links/Index/_index.md`
- 如果问题为繁体 → 读 `zh-tw/_meta/🔗 知识关联/Index/_index.md`
- 答案用提问的语言回复
