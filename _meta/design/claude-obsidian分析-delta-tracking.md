---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [design, analysis, claude-obsidian, delta-tracking, reference]
status: current
---

# claude-obsidian Delta 追踪机制深度分析

> 基于 `.raw/.manifest.json` 源码 + `wiki-ingest/SKILL.md` + `setup-dragonscale.sh` 的实际代码审查

---

## 一、机制全景

Delta 追踪的核心文件是 `.raw/.manifest.json`，它位于**不可变的源文档层**（`.raw/`）。这是该目录下 AI **唯一可以维护的文件** — 其他所有 `.raw/` 下的文件都是用户投递的源文档，AI 只读不可写。

```
.raw/
├── .manifest.json         ← AI 维护的 Delta 追踪文件（唯一例外）
├── articles/              ← 用户投递的文章（不可变，AI 只读）
├── images/                ← 图像描述（不可变）
└── ...
```

---

## 二、Manifest JSON 结构

### 基础结构（v1 + DragonScale 可选）

```json
{
  "version": 1,
  "created": "2026-04-23",
  "description": "Ingest delta tracker and address map for the claude-obsidian vault. Do not hand-edit; wiki-ingest maintains this.",
  "sources": {
    ".raw/articles/article-slug-2026-04-08.md": {
      "hash": "abc123def456",
      "ingested_at": "2026-04-08",
      "pages_created": [
        "wiki/sources/article-slug.md",
        "wiki/entities/Person.md",
        "wiki/concepts/Idea.md"
      ],
      "pages_updated": [
        "wiki/index.md"
      ]
    }
  },
  "address_map": {                   ← DragonScale 可选（Mechanism 2）
    "wiki/concepts/DragonScale Memory.md": "c-000001",
    "wiki/concepts/Foo.md": "c-000042"
  }
}
```

### 三个顶层键

| 键 | 必选 | 用途 |
|---|:---:|------|
| `sources` | ✅ | **核心 Delta 追踪** — 记录每个源文件的哈希和产出 |
| `address_map` | ❌ | DragonScale M2 — 路径↔地址映射，用于重摄入稳定性 |
| `version` / `created` / `description` | ✅ | 元数据 |

### `sources` 条目字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `hash` | string | `md5sum` 或 `sha256sum` 输出的文件内容哈希 |
| `ingested_at` | date | 摄入日期（`YYYY-MM-DD`） |
| `pages_created` | string[] | **本次摄入新建**的 wiki 页面路径 |
| `pages_updated` | string[] | **本次摄入更新**的 wiki 页面路径（如 index.md） |

---

## 三、Delta 追踪的工作流

### 摄入前（检查）

```
1. 计算源文件哈希     md5sum .raw/articles/foo.md | cut -d' ' -f1
2. 查 manifest       读取 .raw/.manifest.json → sources["path"].hash
3. 判断
   ├─ 存在且哈希匹配  → 跳过，报告 "Already ingested (unchanged)"
   ├─ 存在但哈希不同  → 源文件有变化，重新摄入
   └─ 不存在          → 新文件，正常摄入
4. 强制覆盖           force ingest / re-ingest 跳过所有检查
```

代码级检查（摘自 `wiki-ingest/SKILL.md`）：

```bash
# 检查 manifest 是否存在
[ -f .raw/.manifest.json ] && echo "exists" || echo "no manifest yet"

# 检查路径是否在 manifest 中存在且哈希相同
# 如果哈希匹配，跳过。用 "force" 可以重新摄入。
# 如果缺失或哈希不同，继续摄入。
```

### 摄入后（记录）

```
1. 记录 {hash, ingested_at, pages_created, pages_updated}
2. 写回 .raw/.manifest.json
```

### 重摄入的幂等性（DragonScale）

当 DragonScale 启用时，`address_map` 记录路径到地址的映射：

```yaml
# 重摄入同一源文件时，如果 address_map 中已有该路径→地址映射
# 复用映射，不分配新地址
address: c-000042    ← 重摄入前后保持一致
```

```bash
# 页面重命名时，skill 必须更新 address_map 键（旧路径→新路径）
# 同时保留地址值不变
```

---

## 四、设计与实现细节

### 4.1 哈希算法

```bash
# macOS 用 md5, Linux 用 md5sum
md5sum [file] | cut -d' ' -f1
# 或
sha256sum [file] | cut -d' ' -f1
```

跨平台兼容，输出仅取哈希值部分，去掉文件名。

### 4.2 跳过条件

三个条件任一满足即跳过：
1. Manifest 中该路径存在
2. 该路径的哈希与当前计算值一致
3. 用户没有指定 `force` / `re-ingest`

### 4.3 与 "What Not to Do" 的一致性

```markdown
**Source files under `.raw/` are immutable.** Do not modify the files that
users drop there (articles, transcripts, images). The `.raw/.manifest.json`
delta tracker and its `address_map` are the ONLY files under `.raw/` that
`wiki-ingest` itself maintains.
```

关键约束：**manifest 是 `.raw/` 下唯一可写的文件**。它不修改源文档本身，而是**旁路记录**。

### 4.4 Bin 初始化脚本（幂等）

`setup-dragonscale.sh` 负责首次创建 manifest：

```bash
# 幂等安装：仅当 manifest 不存在时创建
if [ ! -f .raw/.manifest.json ]; then
  cat > .raw/.manifest.json <<'JSON'
{
  "version": 1,
  "created": "DRAGONSCALE_SETUP",
  "description": "Ingest delta tracker and address map. Do not hand-edit; wiki-ingest maintains this.",
  "sources": {},
  "address_map": {}
}
JSON
  sed -i.bak "s/DRAGONSCALE_SETUP/$(date +%Y-%m-%d)/" .raw/.manifest.json
  echo "OK  .raw/.manifest.json initialized (empty sources + address_map)"
else
  echo "--  .raw/.manifest.json already present (not overwritten)"
fi
```

---

## 五、与 KOS_LLM-Wiki 的对比

### 当前 KOS 做法

```
源文件
  → 读取 frontmatter，检查 triage.status: processed
  → 未处理 → 四维分析 → 写入 frontmatter + UDC 建议
  → 移入 0 Inbox/_processed/
  → 源文件被修改 + 移走
```

### 核心差异

| 维度 | claude-obsidian | KOS_LLM-Wiki |
|------|----------------|-------------|
| **检测方式** | 内容哈希（md5） | 前置元数据标记 |
| **标记位置** | `.raw/.manifest.json`（独立文件） | 文件 frontmatter + 目录移动 |
| **粒度** | 文件级，精确匹配内容 | 布隆型存在性检查 |
| **强制覆盖** | `force` / `re-ingest` | 无等价机制 |
| **是否篡改源文件** | **否** — manifest 独立于源文档 | **是** — 需在 frontmatter 加 `triage.status` |
| **源文件位置** | 原地保留 | 移入 `_processed/` |
| **追踪产出** | 记录具体创建的页面列表 | 仅在日志中提及 |
| **哈希计算** | 显式 `md5sum` 命令 | 无 |
| **内容变更检测** | ✅ 可检测，哈希变→重新处理 | ❌ 无法检测，文件名相同即跳过 |

### KOS 的具体问题

1. **违反源文档不可变原则** — 在源文件 frontmatter 中写入 `triage.status: processed` 修改了原始内容
2. **移入 `_processed/` 丢失路径关联** — 后续回溯源文件需要查询日志的间接关系
3. **无哈希校验** — 文件内容变了也不会被重新处理（仅靠文件名匹配）
4. **重命名即重复** — 文件改名后，新文件名无法匹配旧 `processed` 标记

### claude-obsidian 方案的优势

```
哈希校验 → 文件重命名？不匹配 → 内容相同？哈希一致 → 跳过
                              → 内容不同？哈希变化 → 重新摄入

普通标记 → 文件重命名？不匹配 → 视为新文件 → 重复处理（即使内容完全一样）
```

---

## 六、Delta 追踪 vs 幂等机制的关系

claude-obsidian 在整个管道中实现了**两层幂等**：

| 层 | 机制 | 适用范围 | KOS 等价物 |
|---|------|---------|-----------|
| **L1 — Delta 追踪** | manifest 哈希校验 | `wiki-ingest` 源文档→wiki | ❌ 缺失 |
| **L2 — Frontmatter 标记** | `compiled: true` | `wiki-query`/`wiki-lint` | ✅ `triage.status` / `compiled` |

KOS_LLM-Wiki 只有 L2（frontmatter 标记），缺少 L1（哈希校验），因此：
- 文件标记 `processed` 后，外部工具修改了它 → KOS-Triage 不会发现
- 文件重命名 → 视为新文件，重复处理
- 文件内容实质未变，但因某种原因重新投递 → 被重复处理

---

## 七、迁移到 KOS_LLM-Wiki 的方案

### 方案一：轻量级 JSON 追踪文件（推荐）

```
_meta/delta-manifest.json         ← 统一追踪文件
```

结构设计：

```json
{
  "version": 1,
  "created": "2026-06-09",
  "description": "KOS_LLM-Wiki delta tracking manifest. Maintained by KOS engines.",
  "triage": {
    "0 Inbox/clipping-article.md": {
      "hash": "abc123def456",
      "routed_to": "3 Resources/LLM-Wiki/article.md",
      "routed_at": "2026-06-09",
      "udc_suggested": "004.8",
      "frontmatter_added": true
    }
  },
  "compile": {
    "3 Resources/LLM-Wiki/article.md": {
      "hash": "abc123def456",
      "compiled": true,
      "pages_created": [
        "3 Resources/LLM-Wiki/wiki/concepts/concept.md",
        "3 Resources/LLM-Wiki/wiki/entities/entity.md"
      ],
      "compiled_at": "2026-06-09"
    }
  },
  "link": {
    "last_run": "2026-06-09T12:00:00Z",
    "files_scanned": 42,
    "issues_found": 3
  }
}
```

### 方案二：零侵入（仅 AGENTS.md 规则）

在现有 frontmatter 的 `triage.status: processed` 旁新增哈希字段：

```yaml
---
triage:
  status: processed
  hash: abc123def456            ← 新增
  processed_at: 2026-06-09
---
```

但此方案仍违反"源文档不可变"原则。

---

## 八、设计原则总结

从 claude-obsidian 的 Delta 追踪可提取 4 条核心设计原则：

> **① 追踪文件与源文档分离** — Manifest 独立于 `.raw/`，不污染源文档。KOS 当前在源文件 frontmatter 写 `triage.status: processed` 属于反模式。

> **② 内容哈希 > 存在性标记** — `processed` 标记只回答"这个文件我见过"，哈希回答"这个内容我见过"。前者无法检测变化，后者可以。

> **③ 记录产出关系** — Manifest 不仅记录"已处理"，还记录"处理产生了哪些页面"。这使得回滚、重建、审计成为可能。

> **④ 幂等要有强制逃生口** — `force ingest` 跳过哈希检查，应对 manifest 损坏或人工需要重处理的场景。

---

## 参考资料

- [[4 Archives/claude-obsidian/skills/wiki-ingest/SKILL.md]] — 摄入 Skill 完整源码（含 Delta 追踪规则）
- [[4 Archives/claude-obsidian/bin/setup-dragonscale.sh]] — Manifest 初始化脚本
- [[4 Archives/claude-obsidian/.raw/.manifest.json]] — 实际 manifest 文件（9 行）
- [[4 Archives/claude-obsidian/agents/wiki-ingest.md]] — 并行摄入子代理规则
- [[4 Archives/claude-obsidian/CHANGELOG.md]] — v1.1 引入 delta tracking + v1.5 DragonScale 地址映射
- [[_meta/design/claude-obsidian分析-claude.md]] — Claude 全景分析
- [[_meta/design/claude-obsidian分析-opencode.md]] — OpenCode 全景分析
- [[_meta/design/skills体系分析.md]] — Skills 体系现状分析
- [[AGENTS.md]] — KOS 引擎行为规范
