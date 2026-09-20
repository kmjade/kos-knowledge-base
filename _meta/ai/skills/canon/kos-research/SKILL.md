---
name: kos-research
description: "自主研究引擎。接受研究主题，执行三阶段管道：搜索 → 抓取 → 综合 → 归档，产物进入 0 Inbox/1-input/clippings/ 并触发 Triage 续接。"
---

# KOS-Research：自主研究引擎

> 幂等操作（同一主题 + 同一日期不重复研究，除非 `--force`）

---

## 扫描与触发

### 触发方式

| 方式 | 示例 |
|------|------|
| 直接命令 | `KOS-Research --topic "RAG 最新进展"` |
| kos 入口 | `/kos research --topic "..."` |
| cli 集成 | `research --topic "..." --depth deep` |

### 输出位置

所有研究产物写入：
```
0 Inbox/1-input/clippings/research-{topic-slug}-{date}.md
```

---

## 三阶段管道

### Phase 1 — 搜索 (Search)

| 维度 | 规则 |
|------|------|
| 目标 | 针对研究主题找到 3-8 个高质量来源 |
| 工具 | 平台可用搜索工具（web_search / search / 浏览器） |
| 来源类型 | 论文 / 技术博客 / 官方文档 / 社区讨论 / 新闻 |
| 过滤 | 排除 SEO 优化文章、广告、过期内容（>3 年） |
| 输出 | 来源列表（标题 + URL + 类型 + 一句话说明） |

**平台适配：**

| 平台 | 搜索方式 |
|------|---------|
| Codex | 内置 web_search 或浏览器工具 |
| Claude Code | 可用的 web 工具或插件 |
| 回退 | 用户手动提供 URL 列表 |

### Phase 2 — 抓取 (Fetch)

对 Phase 1 的来源列表，逐篇抓取内容。

| 维度 | 规则 |
|------|------|
| 工具 | `defuddle` / `web_fetch` |
| 每篇处理 | 提取标题、发布日期、正文（去除导航/广告/页脚） |
| 最大 Token | 每篇 ~4000 tokens（超出部分截断） |
| 失败处理 | 抓取失败 → 记录错误 URL 到日志，继续下一篇 |

### Phase 3 — 综合 (Synthesize)

将 Phase 2 的抓取内容综合为结构化笔记。

| 步骤 | 输出内容 |
|------|---------|
| 3a. 摘要 | 主题的 2-3 句话概览 |
| 3b. 关键发现 | 3-8 条核心发现（每条 1-2 行） |
| 3c. 提取的概念 | 该主题特有的概念、术语、方法名称 |
| 3d. 提取的实体 | 相关工具、人物、产品、组织 |
| 3e. 提取的来源 | 每篇抓取过的文章（带 URL） |
| 3f. 矛盾/争议点 | 各来源间的不同观点（若有） |
| 3g. 待探索 | 未覆盖但值得深挖的方向 |

---

## 产物格式

研究产物写入 `0 Inbox/1-input/clippings/`，格式如下：

```markdown
---
title: "研究简报：{主题}"
origin: kos-research
source: "auto"
created: {YYYY-MM-DD}
tags: [clippings, research, {topic-tag}]
udc: {自动建议}
triage.status: ready
---

## 研究简报：{主题}

### 概览

{2-3 句话摘要}

### 关键发现

1. {发现 1}
2. {发现 2}
...

### 提取的概念

| 概念 | 说明 |
|------|------|
| {概念名} | {一句话定义} |

### 提取的实体

| 实体 | 类型 | 说明 |
|------|------|------|
| {实体名} | tool/person/product | {说明} |

### 来源列表

| # | 标题 | URL |
|---|------|-----|
| 1 | {标题} | {URL} |

### 矛盾/争议

- 来源 X 认为... 但来源 Y 认为...

### 待探索

- [ ] {未覆盖的方向}
```

---

## 与 Triage 的衔接

研究产物写入 `0 Inbox/1-input/clippings/` 后：

1. **自动标记**：frontmatter 写入 `triage.status: ready`，表示可被 Triage 处理
2. **Triage 触发**：研究完成后提示用户执行 `KOS-Triage` 处理新的 clipping
3. **Compile 接续**：Triage 路由到 `3 Resources/` 后，可被 `KOS-Compile` 编译为 wiki 页面

### 数据流

```
User: "研究 RAG 最新进展"
  → KOS-Research (搜索 → 抓取 → 综合)
    → 0 Inbox/1-input/clippings/research-rag-2026-06-12.md
      → KOS-Triage (分拣 → 路由到 3 Resources/)
        → KOS-Compile (编译为 wiki 概念/实体/来源页面)
```

---

## Delta 追踪

同一主题同一日期不重复研究。

```bash
# 检查是否已存在
RESEARCH_FILE="0 Inbox/1-input/clippings/research-{slug}-{date}.md"
if [ -f "$RESEARCH_FILE" ]; then
    echo "SKIPPED — 今日已研究此主题。使用 --force 覆盖。"
    exit 0
fi
```

Manifest 记录在 `_meta/.manifest.json`：

```json
{
  "engines": {
    "research": {
      "last_run": "YYYY-MM-DD",
      "topic": "{主题}",
      "sources_found": 5,
      "sources_fetched": 4,
      "pages_created": ["0 Inbox/1-input/clippings/research-{slug}-{date}.md"]
    }
  }
}
```

---

## 并发安全

| 操作 | 加锁目标 |
|------|---------|
| 写入 clipping 文件 | `0 Inbox/1-input/clippings/research-{file}.md` |
| 更新 manifest | `_meta/.manifest.json` |

锁协议同 `kos-triage`：acquire → 写入 → release。

---

## 参数

- `--topic <string>` — 研究主题（必填）
- `--depth <quick|standard|deep>` — 搜索深度（默认 standard）
  - quick: 2-3 篇来源，快速摘要
  - standard: 3-5 篇来源，完整综合（默认）
  - deep: 5-8 篇来源，含矛盾分析 + 待探索方向
- `--sources <url1,url2,...>` — 手动指定来源（跳过 Phase 1）
- `--force` — 跳过 Delta 检查，覆盖已有研究
- `--status` — 仅显示状态

---

## 相关技能

| 技能 | 关系 |
|------|------|
| `defuddle` | Phase 2 依赖 — 网页内容抓取 |
| `kos-triage` | 下游 — 处理研究产物 |
| `kos-compile` | 下游 — 将研究产物编译为 wiki 页面 |
| `kos-query` | 查询已有知识库，避免重复研究已知内容 |

---

## 如何思考（10 原则映射）

| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 先搜索获取全貌，不急于下结论 |
| 2 | OBSERVE | 检查是否有"已有知识偏见"，先查库内已有什么再研究 |
| 3 | LISTEN | 来源中的术语决定提取的概念和实体 |
| 4 | THINK | 三阶段管道：搜索 → 抓取 → 综合 |
| 5 | CONNECT | 新发现与现有知识库有何关联/矛盾 |
| 6 | CONNECT(sys) | 产物 → Inbox → Triage → Compile 完整链路 |
| 7 | FEEL | 矛盾/争议点如实记录，不强行调和 |
| 8 | ACCEPT | 来源有限时承认"信息不足"，不硬凑结论 |
| 9 | CREATE | 生成结构化研究简报 |
| 10 | GROW | 日志记录供后续查证与改进 |
