---
title: "AgriciDaniel/claude-obsidian: Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern."
source: "https://github.com/AgriciDaniel/claude-obsidian"
author:
published:
created: 2026-06-08
description: "Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern. - AgriciDaniel/claude-obsidian"
tags:
  - "clippings"
---
## claude-obsidian: Self-Organizing AI Second Brain for Obsidian + Claude Code

[![claude-obsidian: persistent compounding wiki vault for Claude Code and Obsidian](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/claude-obsidian-gif-cover-16x9.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/claude-obsidian-gif-cover-16x9.gif)

Claude + Obsidian knowledge companion and self-organizing AI second brain. A running AI notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest.

Open-source Obsidian AI plugin for AI note-taking, personal knowledge management (PKM), second-brain workflows, and a private Notion alternative. **15 Claude Code skills**, multi-agent support, multi-writer safe (v1.7+), first-class methodology modes (LYT / PARA / Zettelkasten / Generic via v1.8), and the 10-principle thinking framework (v1.9). Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

> **Two ways to get this skill.** Pick the one that fits how you work.
> 
> - 🌐 **Public open-source build** (latest:, recommended): the free, MIT-licensed release on [Daniel Agrici's GitHub](https://github.com/AgriciDaniel/claude-obsidian). Open to anyone, no membership required. Ships everything: v1.7 Compound Vault, v1.8 methodology modes, and the v1.9 thinking framework plus audit hardening.`v1.9.2`
> - ⚡ **AI Marketing Hub Pro**: the same MIT-licensed core, plus earliest access to in-development features before they land here, direct collaboration, and the [Pro community](https://www.skool.com/ai-marketing-hub-pro). Pro members install from the [AI Marketing Hub](https://github.com/AI-Marketing-Hub) org mirror (swap note under Option 2 below).

> ✨ **v1.7 "Compound Vault" refoundation**: Obsidian CLI as default transport, hybrid retrieval (contextual prefix + BM25 + cosine rerank per [Anthropic's Sept 2024 research](https://www.anthropic.com/news/contextual-retrieval)), per-file advisory locking that closes a latent multi-writer corruption hole, and substrate alignment with [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills). Full guide: [docs/compound-vault-guide.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/compound-vault-guide.md). Optional [DragonScale Memory](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/dragonscale-guide.md) extension (log folds, deterministic page addresses, semantic tiling lint, boundary-first autoresearch).

---

## Contents

- [What It Does](#what-it-does)
- [Why claude-obsidian?](#why-claude-obsidian)
- [Quick Start](#quick-start)
- [Commands](#commands)
	- [`/wiki`: setup, scaffold, continue](#wiki-setup-scaffold-continue)
		- [`/autoresearch`: autonomous research loop](#autoresearch-autonomous-research-loop)
		- [`/canvas`: visual layer](#canvas-visual-layer)
		- [`/think`: 10-principle thinking loop](#think-10-principle-thinking-loop)
- [Methodology Modes (v1.8+)](#methodology-modes-v18)
- [Vault Use Cases (v1.0+)](#vault-use-cases-v10)
- [Cross-Project Knowledge Base](#cross-project-knowledge-base)
- [What Gets Created](#what-gets-created)
- [Architecture](#architecture)
- [MCP Setup (Optional)](#mcp-setup-optional)
- [Plugins](#plugins)
- [CSS Snippets](#css-snippets-auto-enabled-by-setup-vaultsh)
- [Banner Plugin](#banner-plugin)
- [File Structure](#file-structure)
- [AutoResearch Configuration](#autoresearch-programmd)
- [Seed Vault](#seed-vault)
- [Companion: claude-canvas](#companion-claude-canvas)
- [FAQ](#faq)
- [Requirements](#requirements)
- [Uninstall](#uninstall)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [Community](#community)
- [License](#license)

---

## What It Does

### YouTube Demo

[![claude-obsidian welcome canvas: visual demo of the wiki vault workflow](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/welcome-canvas.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/welcome-canvas.gif)

You drop sources. Claude reads them, extracts entities and concepts, updates cross-references, and files everything into a structured Obsidian vault. The wiki gets richer with every ingest.

You ask questions. Claude reads the hot cache (recent context), scans the index, drills into relevant pages, and synthesizes an answer. It cites specific wiki pages, not training data.

You lint. Claude finds orphans, dead links, stale claims, and missing cross-references. Your wiki stays healthy without manual cleanup.

At the end of every session, Claude updates a hot cache. The next session starts with full recent context, no recap needed.

[![Obsidian graph view showing the claude-obsidian knowledge graph with color-coded nodes for concepts, entities, and sources](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/image-example-graph-view.png)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/image-example-graph-view.png) [![Wiki Map canvas: visual hub linking domain pages, concepts, and entities](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/image-example-wiki-map-view.png)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/image-example-wiki-map-view.png)

---

## Why claude-obsidian?

Most Obsidian AI plugins are chat interfaces. They answer questions about your existing notes. claude-obsidian is a knowledge engine. It creates, organizes, maintains, and evolves your notes autonomously.

| Capability | claude-obsidian | Smart Connections | Copilot |
| --- | --- | --- | --- |
| **Auto-organize notes** | ✅ Creates entities, concepts, cross-references | ❌ | ❌ |
| **Contradiction flagging** | ✅ callouts with sources `[!contradiction]` | ❌ | ❌ |
| **Session memory** | ✅ Hot cache persists between conversations | ❌ | ❌ |
| **Vault maintenance** | ✅ 8-category lint (orphans, dead links, gaps) | ❌ | ❌ |
| **Autonomous research** | ✅ 3-round web research with gap-filling | ❌ | ❌ |
| **Methodology modes** | ✅ LYT / PARA / Zettelkasten / Generic (first-class) | ❌ | ❌ |
| **Thinking framework** | ✅ 10-principle loop as invocable skill | ❌ | ❌ |
| **Multi-model support** | ✅ Claude, Gemini, Codex, Cursor, Windsurf | ❌ Claude only | ✅ Multiple |
| **Visual canvas** | ✅ Via [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) | ❌ | ❌ |
| **Multi-writer safe** | ✅ Per-file advisory locks (v1.7+) | ❌ | ❌ |
| **Query with citations** | ✅ Cites specific wiki pages | ✅ Cites similar notes | ✅ Cites notes |
| **Batch ingestion** | ✅ Parallel agents for multiple sources | ❌ | ❌ |
| **Open source** | ✅ MIT | ✅ MIT | ⚠️  Freemium |

> 📖 **Deep dive:** [I Turned Obsidian Into a Self-Organizing AI Brain](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain). Full breakdown with data visualizations, market context, and workflow demos.

---

## Quick Start

> ℹ️ The commands below install the **public open-source build** from (recommended, no membership needed). **AI Marketing Hub Pro members** who want early access to in-development features can swap for (Option 2 also swaps the plugin slug; see the note under that option).`AgriciDaniel/claude-obsidian` `AgriciDaniel/claude-obsidian` `AI-Marketing-Hub/claude-obsidian`

```
git clone https://github.com/AgriciDaniel/claude-obsidian
cd claude-obsidian
bash bin/setup-vault.sh
```

Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**.

Open Claude Code in the same folder. Type.`/wiki`

> ℹ️ configures (filter + colors), (excludes plugin dirs), and (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.`setup-vault.sh` `graph.json` `app.json` `appearance.json`

---

### Option 2: Install as Claude Code plugin

Plugin installation is a two-step process. First add the marketplace catalog, then install the plugin from it.

> i️ **你安装的是哪个版本？**
> 
> - **公开（推荐，无会员资格）：** 以下命令安装由 [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian) 免费授权的 MIT 授权版本。没什么好签约的。
> - AI **Marketing Hub Pro 会员？** 要提前体验开发中的功能，可以将 和 替换为 的插件 slug 。组织镜像需要认证（或GitHub PAT）才能访问该组织。如果是退回404，说明你的账户还没进入组织。在 [Skool社区](https://www.skool.com/ai-marketing-hub-pro) 私信我，希望被加入。 `AgriciDaniel/claude-obsidian` `AI-Marketing-Hub/claude-obsidian` `claude-obsidian@agricidaniel-claude-obsidian` `claude-obsidian@ai-marketing-hub-claude-obsidian` `gh auth login` `AI-Marketing-Hub` `/plugin marketplace add`

```
# Step 1: add the marketplace
claude plugin marketplace add AgriciDaniel/claude-obsidian

# Step 2: install the plugin
claude plugin install claude-obsidian@agricidaniel-claude-obsidian
```

在任何Claude代码会话中： 。Claude 会带你了解保险库的设置。 `/wiki`

检查一下是否有效：

```
claude plugin list
```

---

### 选项三：添加到现有保险库

复制到你的保险库根目录。粘贴到 Claude 里： `WIKI.md`

```
Read WIKI.md in this project. Then:
1. Check if Obsidian is installed. If not, install it.
2. Check if the Local REST API plugin is running on port 27124.
3. Configure the MCP server.
4. Ask me ONE question: "What is this vault for?"
Then scaffold the full wiki structure.
```

---

## 指挥

| 你说 | 克洛德会 |
| --- | --- |
| `/wiki` | 设置检查、搭架，或者从上次停下的地方继续 |
| `ingest [file]` | 阅读源代码，创建8-15个维基页面，更新索引和日志 |
| `ingest all of these` | 批量处理多个源，然后交叉核对 |
| `what do you know about X?` | 阅读索引，深入相关页面，综合答案 |
| `/save` | 把当前的对话归档为维基笔记 |
| `/save [name]` | 用具体标题保存（跳过命名问题） |
| `/autoresearch [topic]` | 运行自主研究循环：搜索、取物、综合、归档 |
| `/canvas` | 打开或创建可视化画布，列出区域和节点 |
| `/canvas add image [path]` | 用自动布局向画布添加图片（URL）或本地路径 |
| `/canvas add text [content]` | 在画布上添加一张标记下载文本卡 |
| `/canvas add pdf [path]` | 添加一个 PDF 文档作为渲染预览节点 |
| `/canvas add note [page]` | 将维基页面作为链接卡片置顶在画布上 |
| `/canvas zone [name]` | 添加一个新的标记区域来组织视觉内容 |
| `/canvas from banana` | 将最近生成的图像捕捉到画布上 |
| `/think [problem]` | 将十原则思维循环应用于一个非平凡的问题 |
| `lint the wiki` | 健康检查：孤儿、失效链接、漏洞、建议 |
| `update hot cache` | 用最新的上下文摘要刷新 hot.md |

> ✨ **想了解更多吗？** [Claude-Canvas](https://github.com/AgriciDaniel/claude-canvas) 增加了 12 个模板、6 个布局算法、AI 图像生成、演示和完整的画布编排功能。两者都装，它们互补。

### /wiki：搭建，搭架，继续

首次运行设置流程：

1. 检查Obsidian是否安装
2. 检查本地 REST API 插件（如果需要 MCP 传输的话）
3. 问“这个金库是干什么用的？”（一个问题，推动脚手架）
4. 根据所选 [方法模式](#methodology-modes-v18) 和 [保险库用例](#vault-use-cases-v10) 的脚手架
5. 种子，，， ， `hot.md` `index.md` `log.md` `wiki/meta/dashboard.base`
6. 建议首次摄入

后续游戏继续，接上你停下的地方。它检查保险库健康状况，显示过时的申诉，并显示近期活动。 `/wiki` `hot.md`

### /autoresearch：自治研究环路

可配置程序，载于 [`skills/autoresearch/references/program.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/references/program.md) ：

- 最大弹数（默认3发）
- 每场会话最大页数（默认15页）
- 来源偏好规则（学术、官方文档、新闻）
- 置信度评分 + 领域约束

循环：

1. **第一轮，广泛搜索** ：分解成3-5个角度，每个角度运行2-3次查询，每个角度获取前2-3个结果
2. **第二轮，空白填补** ：针对矛盾和缺失部分进行有针对性的搜索
3. **第三轮，合成检定** （可选）：如果还有重大空隙，再进行一次
4. **归档** ：综合页 + 源页 + 实体页 + 概念页，全部交叉引用

根据 [`skills/autoresearch/SKILL.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/SKILL.md) 中的政策，URL 验证 + 内容净化应用：拒绝 / / RFC1918 host，条带和 wikilink 注入尝试，caps 抓取正文 50KB。 `## Web egress hygiene (v1.8.2+)` `file://` `javascript:``<script>`

### /canvas：视觉层

将图片、PDF、笔记和AI生成的图像添加到Obsidian画布上。分组区域管理。自动布局可避免重叠的节点位置。

```
/canvas                       # open or create the canvas
/canvas add image <path>      # add an image with auto-layout
/canvas add pdf <path>        # render PDF as preview node
/canvas add note <wiki-page>  # pin a wiki page as a linked card
/canvas zone <name>           # add a labeled zone
/canvas from banana           # capture recent banana-generated images
```

JSON Canvas 1.0 规范兼容（ [`skills/canvas/references/canvas-spec.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/canvas/references/canvas-spec.md) ）。配套 [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) 中支持完整的编排（12 个模板、6 个布局算法、演示文稿）。

### /think：10原则思维循环

将观察-观察-倾听-连接-感受-接受-创建-增长框架应用于任何非简单问题（架构决策、审计、事后分析、模糊的用户请求）。

```
/think <problem statement>
```

该框架带领Claude完成10个阶段，每个阶段都有提示。当问题新颖性+不可逆性证明该学科的合理性时使用。完整框架请参见 [`skills/think/SKILL.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/think/SKILL.md) 。其他技能都有“如何思考”附录，将框架对应到其具体工作。 [v1.8.0 的推送前审计](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/audits/v1.8.0-pre-push-audit-2026-05-18.md) 以该框架为其方法论主干。

---

## 方法论模式（v1.8+）

四种组织理念，通过 选择加入。该技能（v1.8+）会相应地读取并路由新页面。默认是（v1.7行为，不强制使用意见）。 `bash bin/setup-mode.sh` `wiki-mode``.vault-meta/mode.json` `generic`

| 模式 | 理念 | 提交惯例 |
| --- | --- | --- |
| **通用** （默认） | 没有意见。v1.7 行为保持。 | `wiki/sources/`,,,`wiki/entities/` `wiki/concepts/` `wiki/sessions/` |
| **LYT** （连接你的思维） | 笔记链接，文件夹不行。MOCs是导航原语。 | `wiki/mocs/<topic>-moc.md` + `wiki/notes/<atomic-note>.md` |
| **PARA** （蒂亚戈·福尔特） | 按可行动性（项目、领域、资源、档案）组织。 | `wiki/projects/`,,,`wiki/areas/` `wiki/resources/` `wiki/archives/` |
| **Zettelkasten** （卢曼滑套箱） | 原子笔记，唯一ID，密集的双向链接，没有文件夹。 | `wiki/<YYYYMMDDHHMMSSffffff>-<slug>.md` （平淡，时间戳） |

切换模式不会自动迁移已有文件。完整指南： [`docs/methodology-modes-guide.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/methodology-modes-guide.md) 。

---

## Vault 使用场景（v1.0+）

这些 **描述了** 你的金库的用途。它们采用方法论模式（描述其 **组织方式** ）。

| 使用场景 | 使用时机 |
| --- | --- |
| **答：网站** | 网站地图、内容审核、SEO维基 |
| **B：GitHub** | 代码库映射，架构维基 |
| **C：商业** | 项目维基，竞争情报 |
| **D：个人生活** | 第二大脑，目标，期刊综合 |
| **E：研究** | 论文、概念、论文 |
| **F：书籍/课程** | 章节追踪器，课程笔记 |

这些用例可以结合使用。以PAR形式组织的商业+研究保险库是一种有效的组合。

---

## 跨项目知识库

把任何Claude代码项目指向这个保险库。补充该项目： `CLAUDE.md`

```
## Wiki Knowledge Base
Path: ~/path/to/vault

When you need context not already in this project:
1. Read wiki/hot.md first (recent context cache)
2. If not enough, read wiki/index.md
3. If you need domain details, read the relevant domain sub-index
4. Only then drill into specific wiki pages

Do NOT read the wiki for general coding questions or tasks unrelated to [domain].
```

你的执行助理、编程项目和内容工作流程都基于同一个知识库。

---

## 创造了什么

一个典型的脚手架会形成：

- 针对你选择的用例 + 方法论模式的文件夹结构
- `wiki/index.md` ：主目录
- `wiki/log.md` ：仅附加操作日志
- `wiki/hot.md` ：近期上下文缓存
- `wiki/overview.md` ：执行摘要
- `wiki/meta/dashboard.base` ： Bases 仪表盘（主，原生 Obsidian）
- `wiki/meta/dashboard.md` ： Legacy Dataview 仪表盘（可选备份）
- `_templates/` ： 每种音符类型的Obsidian Templater模板
- `.obsidian/snippets/vault-colors.css` ：颜色编码的文件资源管理器
- Vault ：自动加载的项目指令 `CLAUDE.md`

---

## 建筑

三张图解了插件的实质性设计选择。

### 穹顶流

来源归入。代理读取每个源，提取实体和概念，将它们归档到相应的子文件夹（采用主动方法论模式），并更新索引、日志和热缓存。查询按该顺序读取热→索引→页面，以降低代币成本。`.raw/` `/wiki-ingest` `wiki/`

[![架构图：源代码流向维基摄入代理，生成实体页、概念页和源码页。索引和热缓存都会更新。维基查询界面读取缓存、索引和页面，以综合引用答案。](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/vault-flow.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/vault-flow.svg)

### 多写入安全（v1.7+）

如果用户批量处理多个源码，并行摄取子代理可以针对同一维基页面。提供每个文件的建议锁：一名写作者获取，另一名作者等待并在下一次尝试。PostToolUse 自动提交钩子在预设前检查锁列表，在写入过程中推迟提交。 `scripts/wiki-lock.sh`

[![Architecture diagram: two parallel writers attempt to acquire a lock on the same wiki page via wiki-lock.sh. One writer is granted, writes the page, and releases the lock. The other writer logs the skip and retries on the next pass. No corruption, no half-written pages.](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/multi-writer-locking.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/multi-writer-locking.svg)

### Hybrid retrieval (v1.7+, opt-in)

The skill ships a three-tier retrieval pipeline based on [Anthropic's Sept 2024 contextual retrieval research](https://www.anthropic.com/news/contextual-retrieval). BM25 is the always-on sparse layer. The contextual-prefix tier is consent-gated () for users who want to send page bodies to the Anthropic API for prefix generation. Cosine rerank uses a local ollama model by default. The 50-query benchmark in v1.7 measured +32 percentage points top-1 accuracy and +41 percent error reduction vs the v1.6 baseline.`/wiki-retrieve` `--allow-egress`

[![Architecture diagram: user query feeds both BM25 sparse search and an optional contextual-prefix Anthropic API call. Both feed a cosine rerank via local ollama embeddings. The output is a ranked list of candidates with --explain traceability for every score.](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/hybrid-retrieval.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/hybrid-retrieval.svg)

> ℹ️ Provision the pipeline with. It builds the BM25 index, prompts for egress consent, and validates the ollama connection. The pipeline degrades gracefully: if any tier is unavailable, the rest still return useful results.`bash bin/setup-retrieve.sh`

---

## MCP Setup (Optional)

MCP lets Claude read and write vault notes directly without copy-paste.

**Option A (REST API based):**

1. Install the Local REST API plugin in Obsidian
2. Copy your API key
3. Run:
```
claude mcp add-json obsidian-vault '{
  "type": "stdio",
  "command": "uvx",
  "args": ["mcp-obsidian"],
  "env": {
    "OBSIDIAN_API_KEY": "your-key",
    "OBSIDIAN_HOST": "127.0.0.1",
    "OBSIDIAN_PORT": "27124",
    "NODE_TLS_REJECT_UNAUTHORIZED": "0"
  }
}' --scope user
```

**Option B (filesystem based, no plugin needed):**

```
claude mcp add-json obsidian-vault '{
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
}' --scope user
```

> ℹ️ Both transports are auto-detected by. The result lands in. To pin a manual choice, edit that file and set (v1.8.2+ honors it).`scripts/detect-transport.sh``.vault-meta/transport.json` `"manual_override": true`

---

## Plugins

### Core Plugins (built into Obsidian, no install needed)

| Plugin | Purpose |
| --- | --- |
| **Bases** | Powers: native database views. Available since Obsidian v1.9.10 (August 2025). Replaces Dataview for the primary dashboard.`wiki/meta/dashboard.base` |
| **Properties** | Visual frontmatter editor |
| **Backlinks**, **Outline**, **Graph view** | Standard navigation |

### Pre-installed Community Plugins (ship with this vault)

Enable in **Settings → Community Plugins → enable**:

| Plugin | Purpose | Notes |
| --- | --- | --- |
| **Calendar** | Right-sidebar calendar with word count + task dots | Pre-installed |
| **Thino** | Quick memo capture panel | Pre-installed |
| **Excalidraw** | Freehand drawing canvas, annotate images | Pre-installed\* |
| **Banners** | Notion-style header image via frontmatter `banner:` | Pre-installed |

\* Excalidraw (8MB) is downloaded automatically by. It is not tracked in git.`main.js` `setup-vault.sh`

### Also install from Community Plugins (not pre-installed)

| Plugin | Purpose |
| --- | --- |
| **Templater** | Auto-fills frontmatter from `_templates/` |
| **Obsidian Git** | Auto-commits vault every 15 minutes |
| **Dataview** *(optional, legacy)* | Only needed for the legacy queries. The primary dashboard now uses Bases.`wiki/meta/dashboard.md` |

Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to in one click.`.raw/`

---

## CSS Snippets (auto-enabled by setup-vault.sh)

Three snippets ship with the vault and are enabled automatically:

| Snippet | Effect |
| --- | --- |
| `vault-colors` | Color-codes folders by type in the file explorer (blue = concepts, green = sources, purple = entities) `wiki/` |
| `ITS-Dataview-Cards` | Turns Dataview queries into visual card grids: use with class `TABLE` ` ```dataviewjs ``.cards` |
| `ITS-Image-Adjustments` | Fine-grained image sizing in notes: append to any image embed `\|100` |

---

## Banner Plugin

Add to any wiki page frontmatter:

```
banner: "_attachments/images/your-image.png"
banner_icon: "🧠"
```

The page renders a full-width header image in Obsidian. Works great for hub pages and overviews.

---

## File Structure

```
claude-obsidian/
├── .claude-plugin/
│   ├── plugin.json              # manifest
│   └── marketplace.json         # distribution
├── skills/                       # 15 Claude Code skills (v1.9.2)
│   ├── wiki/                    # orchestrator + references
│   ├── wiki-ingest/             # source ingestion
│   ├── wiki-query/              # answer questions from the vault
│   ├── wiki-lint/               # vault health check
│   ├── wiki-cli/                # Obsidian CLI transport (v1.7+)
│   ├── wiki-retrieve/           # hybrid retrieval (v1.7+, opt-in)
│   ├── wiki-mode/               # methodology modes router (v1.8+)
│   ├── wiki-fold/               # log rollup (DragonScale opt-in)
│   ├── save/                    # /save: file conversations to wiki
│   ├── autoresearch/            # autonomous research loop
│   ├── canvas/                  # visual layer (images, PDFs, notes)
│   ├── defuddle/                # web extraction wrapper
│   ├── obsidian-bases/          # Bases schema reference
│   ├── obsidian-markdown/       # OFM syntax reference
│   └── think/                   # 10-principle thinking framework (v1.9+)
├── agents/
│   ├── verifier.md              # pre-commit audit agent (v1.7.1+)
│   ├── wiki-ingest.md           # parallel batch ingestion agent
│   └── wiki-lint.md             # health check agent
├── commands/                     # slash command entry points
├── hooks/
│   └── hooks.json               # SessionStart + Stop + PostToolUse hooks
├── scripts/                      # 12 helper scripts (transport, locking, retrieval, etc.)
├── _meta/system/tests/                        # 9 hermetic test suites (~1240 assertions, make test)
├── bin/                          # 5 setup scripts (setup-vault, setup-retrieve, setup-mode, etc.)
├── _templates/                   # Obsidian Templater templates
├── wiki/                         # seeded vault content (demo)
│   ├── canvases/                # welcome.canvas + main.canvas
│   ├── concepts/                # seeded: LLM Wiki Pattern, Hot Cache, Compounding Knowledge
│   ├── entities/                # seeded: Andrej Karpathy
│   ├── sources/                 # populated by your first ingest
│   └── meta/
│       ├── dashboard.base       # Bases dashboard (primary)
│       └── dashboard.md         # Legacy Dataview dashboard (optional)
├── docs/                         # guides + audits + release notes
├── .raw/                         # source documents (hidden in Obsidian)
├── .obsidian/snippets/           # vault-colors.css (3-color scheme)
├── WIKI.md                       # full schema reference
├── CLAUDE.md                     # project instructions
└── README.md                     # this file
```

---

## AutoResearch: program.md

The command is configurable. Edit [`skills/autoresearch/references/program.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/references/program.md) to control:`/autoresearch`

- What sources to prefer (academic, official docs, news)
- Confidence scoring rules
- Max rounds and max pages per session
- Domain-specific constraints

The default program works for general research. Override it for your domain. A medical researcher would add "prefer PubMed". A business analyst would add "focus on market data and filings".

---

## Seed Vault

This repo ships with a seeded vault. Open it in Obsidian and you will see:

- `wiki/concepts/`: LLM Wiki Pattern, Hot Cache, Compounding Knowledge
- `wiki/entities/`: Andrej Karpathy
- `wiki/sources/`: empty until your first ingest
- `wiki/meta/dashboard.base`: Bases dashboard (works in any Obsidian v1.9.10+)
- `wiki/meta/dashboard.md`: Legacy Dataview dashboard (optional fallback)

The graph view will show a connected cluster of 5 pages. This is what the wiki looks like after one ingest. Add more sources and it grows from there.

[![Animated GIF: claude-obsidian knowledge graph growing from a few seeded pages to a dense web of cross-referenced concepts after multiple ingests](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/wiki-graph-grow.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/wiki-graph-grow.gif)

[![Animated GIF: claude-obsidian workflow loop showing ingest, query, lint, save, and hot-cache refresh cycle](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/workflow-loop.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/workflow-loop.gif)

---

## Companion: claude-canvas

For the visual layer, [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) adds AI-orchestrated canvas creation: knowledge graphs, presentations, flowcharts, mood boards with 12 templates and 6 layout algorithms. Auto-detects claude-obsidian vaults.

```
claude plugin install AgriciDaniel/claude-canvas
```

---

## FAQ

**What is the best AI second brain app?** The best AI second brain keeps your data yours. claude-obsidian stores everything as plain Markdown files you own (no database, no lock-in, no subscription) and lets Claude read, link, and organize them into one connected knowledge graph. It is free and open source (MIT).

**How do I build a second brain with AI?** Drop any source into the vault. Claude reads it, extracts the entities and concepts, links them to what you already have, and files it into a structured Obsidian vault. You ask questions; it answers from everything it has read and cites the pages. The knowledge base gets richer and more connected with every session.

**How do I connect Claude to Obsidian as a second brain?** Two lines:, then. Open the folder as an Obsidian vault, open Claude Code in the same folder, and type. Full steps in [Quick Start](#quick-start).`git clone https://github.com/AgriciDaniel/claude-obsidian` `cd claude-obsidian && bash bin/setup-vault.sh` `/wiki`

**Is there a good Notion alternative for a private, AI-powered knowledge base?** Yes. claude-obsidian is an open-source, local-first alternative: your notes are plain Markdown on your own disk instead of a hosted database, and AI organizes them for you. No vendor lock-in and no monthly fee.

**Does this auto-sync across devices?** Not on its own. The vault is a plain folder of Markdown files. Pair with Obsidian Sync, Obsidian Git, or any file-sync tool (Syncthing, iCloud, Dropbox) for cross-device sync.

**Can multiple people edit the same vault safely?** Yes (v1.7+). Per-file advisory locking via [`scripts/wiki-lock.sh`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/scripts/wiki-lock.sh) prevents concurrent writes from corrupting pages. Parallel ingest sub-agents acquire locks before writes. Stale locks self-reap after 60 seconds.

**What is the difference between `hot.md` and `index.md`?** is the recent-context cache (~500 words, refreshed each session). is the master catalog of every page in the vault. Claude reads first, then, then drills into specific pages. The two-layer design keeps token cost low for repeat queries.`hot.md` `index.md` `hot.md` `index.md`

**Can I use this without Claude Code?** The skills are Agent Skills compatible (experimental support for OpenAI Codex CLI, Cursor, Windsurf, Gemini CLI, Goose). Production verification is only on Claude Code today. Cross-host install paths follow each host's conventions but skill discovery may differ.

**How do I migrate from Dataview to Bases?** Both ship side-by-side. is the primary; is the legacy Dataview fallback. Pick one in Obsidian, the other is harmless. Bases requires Obsidian v1.9.10+ (August 2025).`wiki/meta/dashboard.base` `wiki/meta/dashboard.md`

**What is the difference between Methodology Modes (LYT/PARA/Zettelkasten) and Vault Use Cases (Website/GitHub/Business)?** Methodology Modes (v1.8+) control **how** pages are organized: folder structure + filename conventions. Vault Use Cases (v1.0+) describe **what** the vault is for: content type. They compose. A "Business" vault using PARA methodology is a valid configuration.

**Does this send my notes to Anthropic?** No by default. The optional skill has API egress () gated behind the consent flag. Without that flag, retrieval is fully local (BM25 + optional ollama rerank). Web egress in follows the same opt-in principle.`/wiki-retrieve` `contextual-prefix.py` `--allow-egress` `/autoresearch`

**What is the difference between the public build and AI Marketing Hub Pro?** Both share the same MIT-licensed core on [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian), which is the recommended install for everyone. AI Marketing Hub Pro members get earliest access to in-development features before they ship here, plus direct collaboration and the community. There are no paid-only features in the core.

**What is DragonScale Memory?** An optional opt-in extension () that adds four memory mechanisms: log folds (rollup of past entries), deterministic page addresses (counter-based unique IDs), semantic tiling lint (chunk-boundary validation via ollama), and boundary-first autoresearch (research the vault's "frontier" first). Not required for normal use. Full guide: [`docs/dragonscale-guide.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/dragonscale-guide.md).`bash bin/setup-dragonscale.sh`

---

## Requirements

| Component | Minimum | Notes |
| --- | --- | --- |
| Claude Code | latest | [https://claude.com/claude-code](https://claude.com/claude-code) |
| Obsidian | v1.9.10+ (for Bases) | [https://obsidian.md](https://obsidian.md/). v1.6+ works with Dataview fallback. |
| Python | 3.10+ | For the optional retrieval pipeline and the test suite |
| Bash | 4.0+ (or zsh) | For setup scripts |
| Git | any | For vault auto-commits via the Obsidian Git plugin |

**Optional:**

- **ollama** (for local rerank in `/wiki-retrieve`)
- **defuddle-cli** (for clean web extraction in `/defuddle`)
- **Anthropic API key** (for contextual prefix tier, opt-in via `/wiki-retrieve` `--allow-egress`)
- **Local REST API plugin** (for the REST-API MCP transport)

---

## Uninstall

Plugin install:

```
claude plugin uninstall claude-obsidian@agricidaniel-claude-obsidian
claude plugin marketplace remove AgriciDaniel/claude-obsidian
```

Clone install (delete the folder):

```
rm -rf /path/to/claude-obsidian
```

Your vault content (under ) is plain Markdown and survives uninstall. To clear the runtime state without uninstalling, run from the repo root.`wiki/` `make clean-test-state`

---

## Contributing

PRs welcome. Read these first:

- [`CONTRIBUTING.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CONTRIBUTING.md): workflow, six-cut self-review checklist, commit conventions, hermetic test requirements
- [`CODE_OF_CONDUCT.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CODE_OF_CONDUCT.md): Contributor Covenant v2.1
- [`SECURITY.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/SECURITY.md): responsible security disclosure policy
- [`CHANGELOG.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CHANGELOG.md): version history (latest: v1.9.2)

Issue + PR templates available under [`.github/`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/.github). CI runs + SKILL.md frontmatter validation + plugin manifest JSON validity on every PR. The pre-commit verifier agent at [`agents/verifier.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/agents/verifier.md) applies the six-cut + agent kernel to staged diffs.`make test`

---

## Related Projects

- 🎨 [**claude-canvas**](https://github.com/AgriciDaniel/claude-canvas): visual canvas orchestration (12 templates, 6 layout algorithms, AI image generation). Companion to this plugin.
- 📊 [**claude-ads**](https://github.com/AgriciDaniel/claude-ads): multi-platform paid advertising audit (250+ checks across Google, Meta, LinkedIn, TikTok, Microsoft, Apple, Amazon Ads).
- 🔍 [**claude-seo**](https://github.com/AgriciDaniel/claude-seo): technical SEO + GEO audit suite.
- 🧠 [**best-practices**](https://github.com/AgriciDaniel/best-practices): composable engineering kernel. Source for the six-cut + agent kernel that enforces.`agents/verifier.md`

---

## Community

- 📝 [**Blog post**](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain): deep dive with competitor analysis, data charts, and workflow demos
- 💬 [**AI Marketing Hub**](https://www.skool.com/ai-marketing-hub): 2,800+ members, free community
- ⚡ [**AI Marketing Hub Pro**](https://www.skool.com/ai-marketing-hub-pro): early access to in-development features and direct collaboration
- 🎬 [**YouTube**](https://www.youtube.com/@AgriciDaniel): tutorials and demos
- 🔧 [**All open-source tools**](https://github.com/AgriciDaniel): claude-seo, claude-ads, claude-blog, and more

---

## License

MIT License. See [LICENSE](https://github.com/AgriciDaniel/claude-obsidian/blob/main/LICENSE) for full text. Free for personal and commercial use. Attribution appreciated but not required.

---

## Star History

[![Star history chart for AgriciDaniel/claude-obsidian on GitHub](https://camo.githubusercontent.com/06d85dc96c4ff043bd8cd2a6cfa670e07340807d773c78290244da3ae217c923/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d41677269636944616e69656c2f636c617564652d6f6273696469616e26747970653d44617465)](https://star-history.com/#AgriciDaniel/claude-obsidian&Date)

---

*Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). Built by [Agrici Daniel](https://agricidaniel.com/about). Compounding knowledge is the highest-leverage habit a thinking person can build.*