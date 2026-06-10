---
title: "claude-obsidian: AI Second Brain for Obsidian + Claude Code"
source: "https://github.com/AgriciDaniel/claude-obsidian"
created: 2026-06-08
tags: [clippings, obsidian, claude, knowledge-management]
udc: 004.8:005.1
triage.status: suggested
---

# claude-obsidian: AI Second Brain for Obsidian + Claude Code

> Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. Based on Karpathy's LLM Wiki pattern.

## 原始剪藏（合并自 3 次剪藏）

### Part 1
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
## Claude-Obsidian：Obsidian + Claude Code 的自组织 AI 第二大脑

[![claude-obsidian：Claude Code 和 Obsidian 的持久复合维基库](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/claude-obsidian-gif-cover-16x9.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/claude-obsidian-gif-cover-16x9.gif)

Claude + Obsidian 知识伙伴和自组织的人工智能第二大脑。一个运行中的AI笔记工具，构建并维护一个持续且不断积累的维基库。你添加的每个资源都会被整合。你提出的每个问题都源自所有已阅读的内容。知识会像利息一样复得。

开源的Obsidian AI插件，用于AI笔记、个人知识管理（PKM）、第二大脑工作流程以及私密的Notion替代方案。 **15 种 Claude 代码技能** ，多智能体支持，多写者安全（v1.7+），一流的方法论模式（LYT / PARA / Zettelkasten / Generic 至 v1.8），以及十原则思维框架（v1.9）。基于 [Andrej Karpathy的LLM维基模式](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 。

> **获得这项技能有两种方式。** 选择适合你工作方式的那个。
> 
> - 🌐 **公开开源构建** （最新：推荐）： [Daniel Agrici GitHub](https://github.com/AgriciDaniel/claude-obsidian) 上的免费、MIT授权版本。对所有人开放，无需会员资格。包含：v1.7 复合金库、v1.8 方法论模式、v1.9 思维框架和审计硬化。 `v1.9.2`
> - ⚡ **AI Marketing Hub Pro** ：同样拥有MIT授权的核心，并且在功能上线前最早获得开发中的访问权限，直接协作，并支持 [Pro社区](https://www.skool.com/ai-marketing-hub-pro) 。专业会员通过 [AI Marketing Hub](https://github.com/AI-Marketing-Hub) 组织镜像安装（在下方选项 2 下交换备注）。

> ✨ **v1.7 “Compound Vault”重构** ：Obsidian CLI作为默认传输，混合检索（根据 [Anthropic 2024年9月的研究](https://www.anthropic.com/news/contextual-retrieval) ，上下文前缀+BM25+余弦重排序），每个文件的建议锁定以关闭潜在的多写者损坏漏洞，并与 [kepano/obsidian技能](https://github.com/kepano/obsidian-skills) 进行基底对齐。完整指南： [docs/compound-vault-guide.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/compound-vault-guide.md) 。可选的 [DragonScale 内存](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/dragonscale-guide.md) 扩展（日志折叠、确定性页面地址、语义平铺、边界优先自动研究）。

---

## 目录

- [它的作用](#what-it-does)
- [为什么是克劳德黑曜石？](#why-claude-obsidian)
- [快速入门](#quick-start)
- [指挥](#commands)
	- [`/wiki` ：设置，搭建支架，继续](#wiki-setup-scaffold-continue)
		- [`/autoresearch` ：自主研究循环](#autoresearch-autonomous-research-loop)
		- [`/canvas` ：可视化图层](#canvas-visual-layer)
		- [`/think` ：十原则思维循环](#think-10-principle-thinking-loop)
- [方法论模式（v1.8+）](#methodology-modes-v18)
- [Vault 使用场景（v1.0+）](#vault-use-cases-v10)
- [跨项目知识库](#cross-project-knowledge-base)
- [创造了什么](#what-gets-created)
- [建筑](#architecture)
- [MCP设置（可选）](#mcp-setup-optional)
- [插件](#plugins)
- [CSS 摘要](#css-snippets-auto-enabled-by-setup-vaultsh)
- [横幅插件](#banner-plugin)
- [文件结构](#file-structure)
- [AutoResearch 配置](#autoresearch-programmd)
- [种子库](#seed-vault)
- [伴侣：claude-canvas](#companion-claude-canvas)
- [常见问题](#faq)
- [要求](#requirements)
- [卸载](#uninstall)
- [贡献](#contributing)
- [相关项目](#related-projects)
- [社区](#community)
- [许可](#license)

---

## 它的作用

### YouTube 演示

[![Claude-Obsidian 欢迎画布：Wiki Vault 工作流程的视觉演示](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/welcome-canvas.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/welcome-canvas.gif)

你会泄露消息来源。克劳德会阅读这些文件，提取实体和概念，更新交叉引用，并将所有内容归档到一个结构化的黑曜石保险库中。每读一遍，维基就更丰富。

你会问问题。Claude读取热缓存（近期上下文），扫描索引，深入相关页面，并综合答案。它引用的是具体的维基页面，而不是训练数据。

你这绒毛。克洛德发现了孤儿、失效链接、陈旧的说法和缺失的交叉引用。你的维基无需手动清理也能保持健康。

每次会话结束时，Claude 都会更新一个热缓存。下一场游戏将以完整的近期背景开始，无需回顾。

[![Obsidian图视图，展示了Claude-Obsidian知识图，并以颜色编码的节点表示概念、实体和来源](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/image-example-graph-view.png)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/image-example-graph-view.png) [![维基地图画布：链接领域页面、概念和实体的可视化枢纽](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/image-example-wiki-map-view.png)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/image-example-wiki-map-view.png)

---

## 为什么是克劳德黑曜石？

大多数Obsidian AI插件都是聊天界面。他们会回答关于你现有笔记的问题。Claude-Obsidian 是一个知识引擎。它会自动创建、组织、维护并演变你的笔记。

| 能力 | 克劳德-黑曜石 | 智能连接 | 副驾驶 |
| --- | --- | --- | --- |
| **自动整理笔记** | ✅ 创建实体、概念、交叉引用 | ❌ | ❌ |
| **矛盾标记** | ✅ 引用来源 `[!contradiction]` | ❌ | ❌ |
| **会话内存** | ✅ 热缓存在对话之间持续存在 | ❌ | ❌ |
| **金库维护** | ✅ 8类绒毛（孤儿、死链、空档） | ❌ | ❌ |
| **自主研究** | ✅ 三轮网络研究，并填充空白 | ❌ | ❌ |
| **方法论模式** | ✅ LYT / PARA / Zettelkasten / 通用（头等） | ❌ | ❌ |
| **思维框架** | ✅ 10原则循环作为可调用技能 | ❌ | ❌ |
| **多模型支持** | ✅ 克劳德、双子座、法典、光标、风帆冲浪 | ❌ 只有克洛德 | ✅ 多重 |
| **视觉画布** | ✅ 通过 [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) | ❌ | ❌ |
| **多写者保险箱** | ✅ 按文件进行的咨询锁（v1.7+） | ❌ | ❌ |
| **带引用的查询** | ✅ 引用具体的维基页面 | ✅ 引用了类似的注释 | ✅ 参考文献 |
| **批量摄取** | ✅ 多源的并行代理 | ❌ | ❌ |
| **开源** | ✅ 麻省理工学院 | ✅ 麻省理工学院 | ⚠️  免费增值 |

> 📖 **深入分析：** [我把Obsidian变成了一个自组织的AI大脑](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) 。包含数据可视化、市场背景和工作流程演示的完整解析。

---

## 快速入门

> i️ 下面的命令是安装 **公开的开源构建** 版本（推荐，无需会员资格）。希望提前访问开发中的功能的 **AI Marketing Hub Pro 会员** 可以更换为（选项 2 也替换插件 slug;详见该选项下方的说明）。 `AgriciDaniel/claude-obsidian` `AgriciDaniel/claude-obsidian` `AI-Marketing-Hub/claude-obsidian`

### 选项一：克隆作为避难所（推荐，2分钟内完成完整设置）

```
git clone https://github.com/AgriciDaniel/claude-obsidian
cd claude-obsidian
bash bin/setup-vault.sh
```

在Obsidian中打开文件夹： **管理金库→以vault打开文件夹→选择 `claude-obsidian/`** 。

在同一文件夹里打开Claude Code。类型。 `/wiki`

> i️ 配置（filter + colors）、（排除插件 dir）、（启用 CSS）。在第一次Obsidian开启前跑一次。你开箱即用，拥有完全预配置的图表视图、配色方案和维基结构。 `setup-vault.sh` `graph.json` `app.json` `appearance.json`

---

### 选项二：安装为 Claude Code 插件

插件安装是一个两步过程。先添加市场目录，然后从中安装插件。

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

[![架构图：两位并行作者试图通过 wiki-lock.sh 获得同一维基页面的锁。一名写手获准，写下该页并解开锁。另一位写手记录跳过，并在下一次尝试。没有腐败，没有半成品的页面。](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/multi-writer-locking.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/multi-writer-locking.svg)

### 混合检索（v1.7+，选择加入）

该技能基于 [Anthropic 2024年9月的情境检索研究](https://www.anthropic.com/news/contextual-retrieval) ，提供三层检索流程。BM25是始终在线的稀疏层。上下文前缀层是同意门禁（）的，适用于希望将页面正文发送到 Anthropic API 进行前缀生成的用户。余弦重秩默认使用局部ollama模型。v1.7 的 50 查询基准测试测量出 +32 个百分点的顶级准确率和 +41% 的错误减少，相较于 v1.6 基线。 `/wiki-retrieve` `--allow-egress`

[![架构图：用户查询同时提供 BM25 稀疏搜索和可选的上下文前缀 Anthropic API 调用。两者都通过局部 ollama 嵌入输入余弦重秩。输出是一个排名候选人的列表，每个分数的可追溯性都存在 --explain。](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/hybrid-retrieval.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/hybrid-retrieval.svg)

> i️ 为管道配置 。它构建BM25索引，提示退出同意，并验证ollama连接。流水线的降级很自然：如果某个层不可用，其他层级仍然返回有用结果。 `bash bin/setup-retrieve.sh`

---

## MCP设置（可选）

MCP 允许 Claude 直接读写保险库笔记，无需复制粘贴。

**选项A（基于REST API）：**

1. 在 Obsidian 中安装本地 REST API 插件
2. 复制你的API密钥
3. 跑步：
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

**选项B（基于文件系统，无需插件）：**

```
claude mcp add-json obsidian-vault '{
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
}' --scope user
```

> i️ 两种运输都由 自动检测。结果为 。要固定手动选项，编辑该文件并设置（v1.8.2+ 遵守）。 `scripts/detect-transport.sh``.vault-meta/transport.json` `"manual_override": true`

---

## 插件

### 核心插件（内置于 Obsidian，无需安装）

| 插件 | 目的 |
| --- | --- |
| **基地** | 能力：原生数据库视图。自 Obsidian v1.9.10（2025 年 8 月）起可使用。取代了主仪表盘的Dataview。 `wiki/meta/dashboard.base` |
| **性质** | 可视化前置信息编辑器 |
| **反向链接** 、 **大纲** 、 **图表视图** | 标准导航 |

### 预装社区插件（随本保险库附带）

在设置中启用 **→社区插件→启用** ：

| 插件 | 目的 | 注释 |
| --- | --- | --- |
| **赛程** | 右侧栏日历，带字数+任务点 | 预装 |
| **蒂诺** | 快速备忘录捕捉面板 | 预装 |
| **Excalidraw** | 自由手绘画布，注释图像 | 预装\* |
| **旗帜** | Notion风格的标题图片，来源于前置 `banner:` | 预装 |

\* Excalidraw（8MB）由 S 自动下载。git 里不会追踪。 `main.js` `setup-vault.sh`

### 也请从社区插件安装（非预装）。

| 插件 | 目的 |
| --- | --- |
| **模板器** | 自动填充前置内容 `_templates/` |
| **黑曜石** | 每15分钟自动提交一次保险库 |
| **Dataview** *（可选，遗留）* | 只用于遗留查询。主仪表盘现在使用基站。 `wiki/meta/dashboard.md` |

另外安装 **[Obsidian Web Clipper](https://obsidian.md/clipper)** 浏览器扩展。一键发送网页。`.raw/`

---

## CSS 片段（由 setup-vault.sh 自动启用）

有三个片段随保险库一起发货并会自动启用：

| 摘录 | 影响 |
| --- | --- |
| `vault-colors` | 在文件资源管理器中按类型对文件夹进行颜色编码（蓝色=概念，绿色=源代码，紫色=实体） `wiki/` |
| `ITS-Dataview-Cards` | 将Dataview查询转换为可视化卡片网格：与类结合使用 `TABLE` ` ```dataviewjs ``.cards` |
| `ITS-Image-Adjustments` | 注释中的细粒度图像尺寸：附加到任何图像嵌入 `\|100` |

---

## 横幅插件

添加在任何维基页面的前言中：

```
banner: "_attachments/images/your-image.png"
banner_icon: "🧠"
```

该页面在 Obsidian 中渲染的是全宽的头部图像。对于枢纽页和概览效果很好。

---

## 文件结构

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

## AutoResearch：program.md

该命令是可配置的。编辑 [`技能/自动研究/参考文献/program.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/references/program.md) 至控制： `/autoresearch`

- 更倾向于选择哪些来源（学术、官方文件、新闻）
- 信心评分规则
- 每场最大回合数和最大页数
- 领域特定约束

默认程序适用于一般研究。覆盖你的域名。医学研究者会补充“更喜欢PubMed”。商业分析师会补充“关注市场数据和申报”。

---

## 种子库

这个仓库会带着一个种子化的保险库。用Obsidian打开它，你会看到：

- `wiki/concepts/` ：LLM 维基模式，热缓存，复利知识
- `wiki/entities/` ：安德烈·卡帕西
- `wiki/sources/` ：空的，直到你第一次摄入
- `wiki/meta/dashboard.base` ： Bases 仪表盘（在任何 Obsidian v1.9.10+ 上都能使用）
- `wiki/meta/dashboard.md` ： Legacy Dataview 仪表盘（可选备份）

图表视图会显示一个由5个页面组成的连接集群。这是维基在一次下载后看起来的样子。增加更多来源，它就会逐渐增长。

[![动画GIF：克劳德黑曜石知识图谱从几页种子页面发展成多次导入后密集的交叉引用概念网络](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/wiki-graph-grow.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/wiki-graph-grow.gif)

[![动画GIF：Claude-Obsidian工作流程循环，展示导入、查询、lint、保存和热缓存刷新周期](https://github.com/AgriciDaniel/claude-obsidian/raw/main/wiki/meta/workflow-loop.gif)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/wiki/meta/workflow-loop.gif)

---

## 伴侣：claude-canvas

在视觉层， [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) 增加了 AI 编排的画布创建功能：知识图、演示文稿、流程图、情绪板，包含 12 个模板和 6 个布局算法。自动检测克劳德黑曜石金库。

```
claude plugin install AgriciDaniel/claude-canvas
```

---

## 常见问题

**什么是最好的AI第二大脑应用？** 最好的AI第二大脑会让你的数据属于你自己。Claude-Obsidian 将所有内容存储为你拥有的普通 Markdown 文件（无数据库、无锁定、无订阅），并允许 Claude 阅读、链接并组织成一个连接的知识图谱。它是免费且开源的（MIT）。

**我该如何用人工智能构建第二个大脑？** 把任何消息源放进保险库。Claude会读取这些文件，提取实体和概念，将它们与你已有的关联，并存档到一个结构化的Obsidian保险库中。你会提问;它根据所读内容回答并引用相关页面。每一次会谈，知识库都会更加丰富和紧密相连。

**我该如何将克劳德与黑曜石作为第二个大脑连接起来？** 两行：，则。以Obsidian vault的身份打开文件夹，在同一文件夹里打开Claude Code，然后输入 。快速 [入门](#quick-start) 的完整步骤。 `git clone https://github.com/AgriciDaniel/claude-obsidian` `cd claude-obsidian && bash bin/setup-vault.sh` `/wiki`

**有没有适合私密、由AI驱动的Notion知识库替代品？** 是的。Claude-Obsidian 是一个开源、本地优先的替代方案：你的笔记是你自己磁盘上的普通 Markdown，而不是托管数据库，AI 帮你整理笔记。没有供应商锁定，也没有月费。

**这会在不同设备之间自动同步吗？** 单靠这个就不行了。保险库是一个普通的Markdown文件夹。可以搭配Obsidian Sync、Obsidian Git或任何文件同步工具（Syncthing、iCloud、Dropbox）进行跨设备同步。

**多人可以安全地编辑同一个保险库吗？** 是的（v1.7+）。通过 [`脚本/wiki-lock.sh`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/scripts/wiki-lock.sh) 实现逐文件的警告锁定防止并发写入导致页面损坏。并行导入子代理在写入前获得锁。过期锁在60秒后自收。

**`hot.md` 和 `index.md` 有什么区别？** 是最近的上下文缓存（~500字，每次会话刷新）。 是保险库中每一页的主目录。Claude先读，然后，再深入具体页面。两层设计使重复查询的令牌成本较低。 `hot.md` `index.md` `hot.md` `index.md`

**我能不用Claude代码用这个吗？** 这些技能兼容 Agent Skills（实验性支持 OpenAI Codex CLI、Cursor、Windsurf、Gemini CLI、Goose）。生产验证目前仅在Claude Code上进行。跨主机安装路径遵循各主机的惯例，但技能发现可能有所不同。

**我该如何从 Dataview 迁移到 Bases？** 两者并排运输。 是主项; 是Dataview的遗留备份。选一个Obsidian，另一个无害。Bases 需要 Obsidian v1.9.10+（2025 年 8 月）。 `wiki/meta/dashboard.base` `wiki/meta/dashboard.md`

**方法论模式（LYT/PARA/Zettelkasten）和 Vault 用例（网站/GitHub/业务）有什么区别？** 方法论模式（v1.8+）控制页面 **的组织方式** ：文件夹结构 + 文件名约定。Vault 用例（v1.0+ **）描述了** Vault 的用途：内容类型。他们作曲。使用PAR方法的“业务”保险库是有效的配置。

**这会把我的笔记发送到Anthropic吗？** 默认情况下没有。可选技能的 API 出口（）被授权标志封锁。没有该标志，检索完全是本地的（BM25 + 可选的ollama重新排序）。网页退出也遵循相同的选择加入原则。 `/wiki-retrieve` `contextual-prefix.py` `--allow-egress` `/autoresearch`

**公开版本和 AI Marketing Hub Pro 有什么区别？** 两者在 [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian) 上共用同一个MIT授权的核心，这是推荐所有人安装的方案。AI Marketing Hub Pro 会员可在发货前获得开发中的功能，并可直接参与协作和社区交流。核心版没有付费功能。

**什么是DragonScale内存？** 一个可选的选择加入扩展（），增加了四种内存机制：日志折叠（过去条目的汇总）、确定性页面地址（基于计数器的唯一ID）、语义平铺林（通过ollama验证区块边界）和边界优先自动研究（先研究保险库的“边界”）。正常使用时不要求。完整指南： [`docs/dragonscale-guide.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/dragonscale-guide.md) 。 `bash bin/setup-dragonscale.sh`

---

## 要求

| 组成部分 | 最低限度 | 注释 |
| --- | --- | --- |
| 克劳德密码 | 最新消息 | [https://claude.com/claude-code](https://claude.com/claude-code) |
| 黑曜石 | v1.9.10+（用于垒包） | [https://obsidian.md](https://obsidian.md/) 。v1.6+ 支持Dataview的备援。 |
| 蟒蛇 | 3.10+ | 针对可选的检索流水线和测试套件 |
| 巴什 | 4.0+（或zsh） | 用于设置脚本 |
| Git | 任何 | 通过 Obsidian Git 插件进行保险库自动提交 |

**可选：**

- **ollama** （代表 in 的 Local Rerank `/wiki-retrieve`)
- **DeFuddle-CLI** （用于在 `/defuddle`)
- **Anthropic API 密钥** （用于上下文前缀层级，通过 `/wiki-retrieve` `--allow-egress`)
- **本地 REST API 插件** （用于 REST-API MCP 传输）

---

## 卸载

插件安装：

```
claude plugin uninstall claude-obsidian@agricidaniel-claude-obsidian
claude plugin marketplace remove AgriciDaniel/claude-obsidian
```

克隆安装（删除文件夹）：

```
rm -rf /path/to/claude-obsidian
```

你的保险库内容（在 下）是普通的 Markdown，卸载后还能保存。要清除运行时状态而不卸载，可以从仓库根节点运行。 `wiki/` `make clean-test-state`

---

## 贡献

欢迎公关。先阅读以下内容：

- [`CONTRIBUTING.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CONTRIBUTING.md) ：工作流程、六项自我审查检查表、提交约定、密封测试要求
- [`CODE_OF_CONDUCT.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CODE_OF_CONDUCT.md) ：贡献者契约 v2.1
- [`SECURITY.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/SECURITY.md) ：负责任的安全披露政策
- [`CHANGELOG.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CHANGELOG.md) ：版本历史（最新版本：v1.9.2）

Issue + PR 模板可在 [`.github/`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/.github) 下获取。CI在每个PR上运行+SKILL.md 前置验证+插件manifest JSON有效性。 [`agents/verifier.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/agents/verifier.md) 的预提交验证代理将六割+代理内核应用于分级差分。 `make test`

---

## 相关项目

- 🎨 [**Claude-Canvas**](https://github.com/AgriciDaniel/claude-canvas) ：视觉画布编排（12个模板，6种布局算法，AI图像生成）。这个插件的配套。
- 📊 [**Claude-Ads**](https://github.com/AgriciDaniel/claude-ads) ：多平台付费广告审计（涵盖Google、Meta、LinkedIn、TikTok、Microsoft、Apple、Amazon Ads共250+次）。
- 🔍 [**Claude-SEO**](https://github.com/AgriciDaniel/claude-seo) ：技术SEO+地理环境审计套件。
- 🧠 [**最佳实践**](https://github.com/AgriciDaniel/best-practices) ：可组合工程内核。六割+代理内核的来源，用于强制执行。 `agents/verifier.md`

---

## 社区

- 📝 [**博客文章**](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) ：深入分析竞争对手分析、数据图表和工作流程演示
- 💬 [**AI营销中心** ：2800](https://www.skool.com/ai-marketing-hub) +会员，免费社区
- ⚡ [**AI Marketing Hub Pro**](https://www.skool.com/ai-marketing-hub-pro) ：抢先体验正在开发中的功能和直接协作
- 🎬 [**YouTube**](https://www.youtube.com/@AgriciDaniel) ：教程和演示
- 🔧 [**所有开源工具：**](https://github.com/AgriciDaniel) claude-seo、claude-ads、claude-blog 等

---

## 许可

麻省理工学院执照。全文请参见 [许可](https://github.com/AgriciDaniel/claude-obsidian/blob/main/LICENSE) 。免费供个人和商业使用。感谢署名，但非强制要求。

---

## 星级历史

[![GitHub上的AgriciDaniel/claude-obsidian恒星历史图表](https://camo.githubusercontent.com/06d85dc96c4ff043bd8cd2a6cfa670e07340807d773c78290244da3ae217c923/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d41677269636944616e69656c2f636c617564652d6f6273696469616e26747970653d44617465)](https://star-history.com/#AgriciDaniel/claude-obsidian&Date)

---

*基于 [Andrej Karpathy的LLM维基模式](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 。由 [Agrici Daniel](https://agricidaniel.com/about) 建造。积累知识是思考型人能建立的最有效习惯。*

### Part 2
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
> - 🌐 **Public open-source build** (latest: `v1.9.2`, recommended): the free, MIT-licensed release on [Daniel Agrici's GitHub](https://github.com/AgriciDaniel/claude-obsidian). Open to anyone, no membership required. Ships everything: v1.7 Compound Vault, v1.8 methodology modes, and the v1.9 thinking framework plus audit hardening.
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
| **Contradiction flagging** | ✅ `[!contradiction]` callouts with sources | ❌ | ❌ |
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

> ℹ️ The commands below install the **public open-source build** from `AgriciDaniel/claude-obsidian` (recommended, no membership needed). **AI Marketing Hub Pro members** who want early access to in-development features can swap `AgriciDaniel/claude-obsidian` for `AI-Marketing-Hub/claude-obsidian` (Option 2 also swaps the plugin slug; see the note under that option).

```
git clone https://github.com/AgriciDaniel/claude-obsidian
cd claude-obsidian
bash bin/setup-vault.sh
```

Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**.

Open Claude Code in the same folder. Type `/wiki`.

> ℹ️ `setup-vault.sh` configures `graph.json` (filter + colors), `app.json` (excludes plugin dirs), and `appearance.json` (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.

---

### Option 2: Install as Claude Code plugin

Plugin installation is a two-step process. First add the marketplace catalog, then install the plugin from it.

> ℹ️ **Which version are you installing?**
> 
> - **Public (recommended, no membership):** the commands below install the free, MIT-licensed release from [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian). Nothing to sign up for.
> - **AI Marketing Hub Pro member?** For early access to in-development features, swap `AgriciDaniel/claude-obsidian` for `AI-Marketing-Hub/claude-obsidian` and the plugin slug `claude-obsidian@agricidaniel-claude-obsidian` for `claude-obsidian@ai-marketing-hub-claude-obsidian`. The org mirror requires an authenticated `gh auth login` (or GitHub PAT) with access to the `AI-Marketing-Hub` org. If `/plugin marketplace add` returns a 404, your account is not in the org yet. DM in the [Skool community](https://www.skool.com/ai-marketing-hub-pro) to get added.

```
# Step 1: add the marketplace
claude plugin marketplace add AgriciDaniel/claude-obsidian

# Step 2: install the plugin
claude plugin install claude-obsidian@agricidaniel-claude-obsidian
```

In any Claude Code session: `/wiki`. Claude walks you through vault setup.

To check it worked:

```
claude plugin list
```

---

### Option 3: Add to an existing vault

Copy `WIKI.md` into your vault root. Paste into Claude:

```
Read WIKI.md in this project. Then:
1. Check if Obsidian is installed. If not, install it.
2. Check if the Local REST API plugin is running on port 27124.
3. Configure the MCP server.
4. Ask me ONE question: "What is this vault for?"
Then scaffold the full wiki structure.
```

---

## Commands

| You say | Claude does |
| --- | --- |
| `/wiki` | Setup check, scaffold, or continue where you left off |
| `ingest [file]` | Read source, create 8-15 wiki pages, update index and log |
| `ingest all of these` | Batch process multiple sources, then cross-reference |
| `what do you know about X?` | Read index, drill into relevant pages, synthesize answer |
| `/save` | File the current conversation as a wiki note |
| `/save [name]` | Save with a specific title (skips the naming question) |
| `/autoresearch [topic]` | Run the autonomous research loop: search, fetch, synthesize, file |
| `/canvas` | Open or create the visual canvas, list zones and nodes |
| `/canvas add image [path]` | Add an image (URL or local path) to the canvas with auto-layout |
| `/canvas add text [content]` | Add a markdown text card to the canvas |
| `/canvas add pdf [path]` | Add a PDF document as a rendered preview node |
| `/canvas add note [page]` | Pin a wiki page as a linked card on the canvas |
| `/canvas zone [name]` | Add a new labeled zone to organize visual content |
| `/canvas from banana` | Capture recently generated images onto the canvas |
| `/think [problem]` | Apply the 10-principle thinking loop to a non-trivial problem |
| `lint the wiki` | Health check: orphans, dead links, gaps, suggestions |
| `update hot cache` | Refresh hot.md with latest context summary |

> ✨ **Want more?** [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) adds 12 templates, 6 layout algorithms, AI image generation, presentations, and full canvas orchestration. Install both, they complement each other.

### /wiki: setup, scaffold, continue

First-run setup walks through:

1. Check Obsidian is installed
2. Check Local REST API plugin (if MCP transport desired)
3. Ask "What is this vault for?" (one question, drives the scaffold)
4. Scaffold per chosen [Methodology Mode](#methodology-modes-v18) and [Vault Use Case](#vault-use-cases-v10)
5. Seed `hot.md`, `index.md`, `log.md`, `wiki/meta/dashboard.base`
6. Suggest the first ingest

On subsequent runs, `/wiki` continues where you left off. It checks vault health, surfaces stale claims, and shows recent activity from `hot.md`.

### /autoresearch: autonomous research loop

Configurable program at [`skills/autoresearch/references/program.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/references/program.md):

- Max rounds (default 3)
- Max pages per session (default 15)
- Source preference rules (academic, official docs, news)
- Confidence scoring + domain constraints

The loop:

1. **Round 1, broad search**: decompose into 3-5 angles, run 2-3 queries per angle, fetch top 2-3 results per angle
2. **Round 2, gap fill**: targeted searches for contradictions and missing pieces
3. **Round 3, synthesis check** (optional): one more pass if major gaps remain
4. **Filing**: synthesis page + source pages + entity pages + concept pages, all cross-referenced

URL validation + content sanitization applied per the `## Web egress hygiene (v1.8.2+)` policy in [`skills/autoresearch/SKILL.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/SKILL.md): rejects `file://` / `javascript:` / RFC1918 hosts, strips `<script>` and wikilink-injection attempts, caps fetch bodies at 50KB.

### /canvas: visual layer

Add images, PDFs, notes, and AI-generated images to an Obsidian canvas. Zone management for grouping. Auto-layout positions nodes without overlap.

```
/canvas                       # open or create the canvas
/canvas add image <path>      # add an image with auto-layout
/canvas add pdf <path>        # render PDF as preview node
/canvas add note <wiki-page>  # pin a wiki page as a linked card
/canvas zone <name>           # add a labeled zone
/canvas from banana           # capture recent banana-generated images
```

JSON Canvas 1.0 spec compliant ([`skills/canvas/references/canvas-spec.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/canvas/references/canvas-spec.md)). Full orchestration (12 templates, 6 layout algorithms, presentations) in the companion [claude-canvas](https://github.com/AgriciDaniel/claude-canvas).

### /think: 10-principle thinking loop

Apply the OBSERVE-OBSERVE-LISTEN-THINK-CONNECT-CONNECT-FEEL-ACCEPT-CREATE-GROW framework to any non-trivial problem (architectural decisions, audits, post-mortems, ambiguous user requests).

```
/think <problem statement>
```

The framework walks Claude through 10 stages with prompts at each. Use when problem novelty + irreversibility justify the discipline. See [`skills/think/SKILL.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/think/SKILL.md) for the full framework. Every other skill has a "How to think" appendix mapping the framework to its specific work. The [v1.8.0 pre-push audit](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/audits/v1.8.0-pre-push-audit-2026-05-18.md) used this framework as its methodology spine.

---

## Methodology Modes (v1.8+)

Four organizational philosophies, opt-in via `bash bin/setup-mode.sh`. The `wiki-mode` skill (v1.8+) reads `.vault-meta/mode.json` and routes new pages accordingly. Default is `generic` (v1.7 behavior, no opinion imposed).

| Mode | Philosophy | Filing convention |
| --- | --- | --- |
| **Generic** (default) | No opinion. v1.7 behavior preserved. | `wiki/sources/`, `wiki/entities/`, `wiki/concepts/`, `wiki/sessions/` |
| **LYT** (Linking Your Thinking) | Notes link, folders don't. MOCs are the navigation primitive. | `wiki/mocs/<topic>-moc.md` + `wiki/notes/<atomic-note>.md` |
| **PARA** (Tiago Forte) | Organize by actionability (Projects, Areas, Resources, Archives). | `wiki/projects/`, `wiki/areas/`, `wiki/resources/`, `wiki/archives/` |
| **Zettelkasten** (Luhmann slip-box) | Atomic notes, unique IDs, dense bidirectional linking, no folders. | `wiki/<YYYYMMDDHHMMSSffffff>-<slug>.md` (flat, timestamped) |

Switching modes does NOT auto-migrate existing files. Full guide: [`docs/methodology-modes-guide.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/methodology-modes-guide.md).

---

## Vault Use Cases (v1.0+)

These describe **what** your vault is for. They compose with Methodology Modes (which describe **how** it is organized).

| Use case | When to use |
| --- | --- |
| **A: Website** | Sitemap, content audit, SEO wiki |
| **B: GitHub** | Codebase map, architecture wiki |
| **C: Business** | Project wiki, competitive intelligence |
| **D: Personal** | Second brain, goals, journal synthesis |
| **E: Research** | Papers, concepts, thesis |
| **F: Book/Course** | Chapter tracker, course notes |

Use cases can be combined. A Business + Research vault organized in PARA is a valid composition.

---

## Cross-Project Knowledge Base

Point any Claude Code project at this vault. Add to that project's `CLAUDE.md`:

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

Your executive assistant, coding projects, and content workflows all draw from the same knowledge base.

---

## What Gets Created

A typical scaffold creates:

- Folder structure for your chosen use case + methodology mode
- `wiki/index.md`: master catalog
- `wiki/log.md`: append-only operation log
- `wiki/hot.md`: recent context cache
- `wiki/overview.md`: executive summary
- `wiki/meta/dashboard.base`: Bases dashboard (primary, native Obsidian)
- `wiki/meta/dashboard.md`: Legacy Dataview dashboard (optional fallback)
- `_templates/`: Obsidian Templater templates for each note type
- `.obsidian/snippets/vault-colors.css`: color-coded file explorer
- Vault `CLAUDE.md`: auto-loaded project instructions

---

## Architecture

Three diagrams explain the substantive design choices of the plugin.

### Vault flow

Sources land in `.raw/`. The `/wiki-ingest` agent reads each source, extracts entities and concepts, files them into the appropriate `wiki/` subfolder (per active methodology mode), and updates the index, log, and hot cache. Queries read hot → index → pages in that order to keep token cost low.

[![Architecture diagram: sources flow into the wiki-ingest agent, which produces entity, concept, and source pages. The index and hot cache are updated. The wiki-query interface reads the cache, index, and pages to synthesize cited answers.](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/vault-flow.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/vault-flow.svg)

### Multi-writer safety (v1.7+)

Parallel ingest sub-agents can target the same wiki page if the user batches multiple sources. `scripts/wiki-lock.sh` provides per-file advisory locks: one writer acquires, the other waits and retries on the next pass. The PostToolUse auto-commit hook checks the lock list before staging, deferring the commit while writes are in flight.

[![Architecture diagram: two parallel writers attempt to acquire a lock on the same wiki page via wiki-lock.sh. One writer is granted, writes the page, and releases the lock. The other writer logs the skip and retries on the next pass. No corruption, no half-written pages.](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/multi-writer-locking.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/multi-writer-locking.svg)

### Hybrid retrieval (v1.7+, opt-in)

The `/wiki-retrieve` skill ships a three-tier retrieval pipeline based on [Anthropic's Sept 2024 contextual retrieval research](https://www.anthropic.com/news/contextual-retrieval). BM25 is the always-on sparse layer. The contextual-prefix tier is consent-gated (`--allow-egress`) for users who want to send page bodies to the Anthropic API for prefix generation. Cosine rerank uses a local ollama model by default. The 50-query benchmark in v1.7 measured +32 percentage points top-1 accuracy and +41 percent error reduction vs the v1.6 baseline.

[![Architecture diagram: user query feeds both BM25 sparse search and an optional contextual-prefix Anthropic API call. Both feed a cosine rerank via local ollama embeddings. The output is a ranked list of candidates with --explain traceability for every score.](https://github.com/AgriciDaniel/claude-obsidian/raw/main/assets/diagrams/hybrid-retrieval.svg)](https://github.com/AgriciDaniel/claude-obsidian/blob/main/assets/diagrams/hybrid-retrieval.svg)

> ℹ️ Provision the pipeline with `bash bin/setup-retrieve.sh`. It builds the BM25 index, prompts for egress consent, and validates the ollama connection. The pipeline degrades gracefully: if any tier is unavailable, the rest still return useful results.

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

> ℹ️ Both transports are auto-detected by `scripts/detect-transport.sh`. The result lands in `.vault-meta/transport.json`. To pin a manual choice, edit that file and set `"manual_override": true` (v1.8.2+ honors it).

---

## Plugins

### Core Plugins (built into Obsidian, no install needed)

| Plugin | Purpose |
| --- | --- |
| **Bases** | Powers `wiki/meta/dashboard.base`: native database views. Available since Obsidian v1.9.10 (August 2025). Replaces Dataview for the primary dashboard. |
| **Properties** | Visual frontmatter editor |
| **Backlinks**, **Outline**, **Graph view** | Standard navigation |

### Pre-installed Community Plugins (ship with this vault)

Enable in **Settings → Community Plugins → enable**:

| Plugin | Purpose | Notes |
| --- | --- | --- |
| **Calendar** | Right-sidebar calendar with word count + task dots | Pre-installed |
| **Thino** | Quick memo capture panel | Pre-installed |
| **Excalidraw** | Freehand drawing canvas, annotate images | Pre-installed\* |
| **Banners** | Notion-style header image via `banner:` frontmatter | Pre-installed |

\* Excalidraw `main.js` (8MB) is downloaded automatically by `setup-vault.sh`. It is not tracked in git.

### Also install from Community Plugins (not pre-installed)

| Plugin | Purpose |
| --- | --- |
| **Templater** | Auto-fills frontmatter from `_templates/` |
| **Obsidian Git** | Auto-commits vault every 15 minutes |
| **Dataview** *(optional, legacy)* | Only needed for the legacy `wiki/meta/dashboard.md` queries. The primary dashboard now uses Bases. |

Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to `.raw/` in one click.

---

## CSS Snippets (auto-enabled by setup-vault.sh)

Three snippets ship with the vault and are enabled automatically:

| Snippet | Effect |
| --- | --- |
| `vault-colors` | Color-codes `wiki/` folders by type in the file explorer (blue = concepts, green = sources, purple = entities) |
| `ITS-Dataview-Cards` | Turns Dataview `TABLE` queries into visual card grids: use ` ```dataviewjs ` with `.cards` class |
| `ITS-Image-Adjustments` | Fine-grained image sizing in notes: append `\|100` to any image embed |

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

The `/autoresearch` command is configurable. Edit [`skills/autoresearch/references/program.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/autoresearch/references/program.md) to control:

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

**How do I connect Claude to Obsidian as a second brain?** Two lines: `git clone https://github.com/AgriciDaniel/claude-obsidian`, then `cd claude-obsidian && bash bin/setup-vault.sh`. Open the folder as an Obsidian vault, open Claude Code in the same folder, and type `/wiki`. Full steps in [Quick Start](#quick-start).

**Is there a good Notion alternative for a private, AI-powered knowledge base?** Yes. claude-obsidian is an open-source, local-first alternative: your notes are plain Markdown on your own disk instead of a hosted database, and AI organizes them for you. No vendor lock-in and no monthly fee.

**Does this auto-sync across devices?** Not on its own. The vault is a plain folder of Markdown files. Pair with Obsidian Sync, Obsidian Git, or any file-sync tool (Syncthing, iCloud, Dropbox) for cross-device sync.

**Can multiple people edit the same vault safely?** Yes (v1.7+). Per-file advisory locking via [`scripts/wiki-lock.sh`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/scripts/wiki-lock.sh) prevents concurrent writes from corrupting pages. Parallel ingest sub-agents acquire locks before writes. Stale locks self-reap after 60 seconds.

**What is the difference between `hot.md` and `index.md`?** `hot.md` is the recent-context cache (~500 words, refreshed each session). `index.md` is the master catalog of every page in the vault. Claude reads `hot.md` first, then `index.md`, then drills into specific pages. The two-layer design keeps token cost low for repeat queries.

**Can I use this without Claude Code?** The skills are Agent Skills compatible (experimental support for OpenAI Codex CLI, Cursor, Windsurf, Gemini CLI, Goose). Production verification is only on Claude Code today. Cross-host install paths follow each host's conventions but skill discovery may differ.

**How do I migrate from Dataview to Bases?** Both ship side-by-side. `wiki/meta/dashboard.base` is the primary; `wiki/meta/dashboard.md` is the legacy Dataview fallback. Pick one in Obsidian, the other is harmless. Bases requires Obsidian v1.9.10+ (August 2025).

**What is the difference between Methodology Modes (LYT/PARA/Zettelkasten) and Vault Use Cases (Website/GitHub/Business)?** Methodology Modes (v1.8+) control **how** pages are organized: folder structure + filename conventions. Vault Use Cases (v1.0+) describe **what** the vault is for: content type. They compose. A "Business" vault using PARA methodology is a valid configuration.

**Does this send my notes to Anthropic?** No by default. The optional `/wiki-retrieve` skill has API egress (`contextual-prefix.py`) gated behind the `--allow-egress` consent flag. Without that flag, retrieval is fully local (BM25 + optional ollama rerank). Web egress in `/autoresearch` follows the same opt-in principle.

**What is the difference between the public build and AI Marketing Hub Pro?** Both share the same MIT-licensed core on [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian), which is the recommended install for everyone. AI Marketing Hub Pro members get earliest access to in-development features before they ship here, plus direct collaboration and the community. There are no paid-only features in the core.

**What is DragonScale Memory?** An optional opt-in extension (`bash bin/setup-dragonscale.sh`) that adds four memory mechanisms: log folds (rollup of past entries), deterministic page addresses (counter-based unique IDs), semantic tiling lint (chunk-boundary validation via ollama), and boundary-first autoresearch (research the vault's "frontier" first). Not required for normal use. Full guide: [`docs/dragonscale-guide.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/docs/dragonscale-guide.md).

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
- **Anthropic API key** (for `/wiki-retrieve` contextual prefix tier, opt-in via `--allow-egress`)
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

Your vault content (under `wiki/`) is plain Markdown and survives uninstall. To clear the runtime state without uninstalling, run `make clean-test-state` from the repo root.

---

## Contributing

PRs welcome. Read these first:

- [`CONTRIBUTING.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CONTRIBUTING.md): workflow, six-cut self-review checklist, commit conventions, hermetic test requirements
- [`CODE_OF_CONDUCT.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CODE_OF_CONDUCT.md): Contributor Covenant v2.1
- [`SECURITY.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/SECURITY.md): responsible security disclosure policy
- [`CHANGELOG.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/CHANGELOG.md): version history (latest: v1.9.2)

Issue + PR templates available under [`.github/`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/.github). CI runs `make test` + SKILL.md frontmatter validation + plugin manifest JSON validity on every PR. The pre-commit verifier agent at [`agents/verifier.md`](https://github.com/AgriciDaniel/claude-obsidian/blob/main/agents/verifier.md) applies the six-cut + agent kernel to staged diffs.

---

## Related Projects

- 🎨 [**claude-canvas**](https://github.com/AgriciDaniel/claude-canvas): visual canvas orchestration (12 templates, 6 layout algorithms, AI image generation). Companion to this plugin.
- 📊 [**claude-ads**](https://github.com/AgriciDaniel/claude-ads): multi-platform paid advertising audit (250+ checks across Google, Meta, LinkedIn, TikTok, Microsoft, Apple, Amazon Ads).
- 🔍 [**claude-seo**](https://github.com/AgriciDaniel/claude-seo): technical SEO + GEO audit suite.
- 🧠 [**best-practices**](https://github.com/AgriciDaniel/best-practices): composable engineering kernel. Source for the six-cut + agent kernel that `agents/verifier.md` enforces.

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

### Part 3
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
