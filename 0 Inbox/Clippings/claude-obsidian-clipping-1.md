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
├── tests/                        # 9 hermetic test suites (~1240 assertions, make test)
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