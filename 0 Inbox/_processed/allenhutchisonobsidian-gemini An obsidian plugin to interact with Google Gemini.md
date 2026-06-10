---
title: "allenhutchison/obsidian-gemini: An obsidian plugin to interact with Google Gemini"
source: "https://github.com/allenhutchison/obsidian-gemini"
author:
published:
created: 2026-06-08
description: "An obsidian plugin to interact with Google Gemini. Contribute to allenhutchison/obsidian-gemini development by creating an account on GitHub."
tags:
  - "clippings"
---
## 黑曜石的双子座书记员

Gemini Scribe 是一款集成谷歌 Gemini AI 模型的 Obsidian 插件，直接在 Obsidian 内为笔记、写作和知识管理提供强大的 AI 辅助。它利用你的笔记作为 AI 交互的上下文，打造高度个性化且集成的体验。

> **注：** 在插件设置→ **提供者** 中选择两个设置路径之一：
> 
> - **Google Gemini（云端）** ——需要Gemini API密钥（Google [AI Studio](https://aistudio.google.com/apikey) 可免费获取）。
> - **Ollama（本地）** ——本地运行，无需API密钥;安装 [Ollama](https://ollama.com/) ，拉出一个模型，然后在设置里选择它。关于功能奇偶校验表，请参见 [docs/guide/ollama-setup.md](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/ollama-setup.md) 。

## v4.9.1 新增内容

**🔧 Gemini Scribe 4.9.1 - Vault 上下文修复**

- **🗂️ 初始化保险库上下文修复——** 修复了“初始化保险库上下文”/“更新保险库上下文”按钮，该按钮发送了格式错误的模型请求且无法生成 AGENTS.md。该功能现在正常工作了。

**之前更新（v4.9.0）：**

**🪝 Gemini Scribe 4.9 - 生命周期钩子、稳定前缀缓存、自定义端点**

- **🪝 生命周期钩子** ——触发无头AI代理会响应保险库事件（文件创建、修改、删除、重命名）。通过 **Open Hook Manager** 命令创建和管理钩子。请参阅 [生命周期钩子指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/lifecycle-hooks.md) 。
- **⚡ 稳定前缀缓存** ——代理的系统指令现在在每回合和工具跟进间实现字节稳定，恢复了 Gemini 隐式前缀缓存，使得长时间会话停止每回合重新处理历史。
- **🌐 自定义API端点** ——新增设置，将所有Gemini API调用通过代理或备用端点路由，覆盖所有SDK调用站点。
- **📐 可折叠设置部分** ——设置页面重新整理成可折叠部分，界面更简洁。
- **🔐 MCP 加固** ——Stdio 服务器环境变量现存于 Obsidian 加密的 SecretStorage;离线或无法访问的MCP服务器不再阻碍插件加载。
- **🛡️ 统一工具-策略** ——会话、项目、计划任务和钩子现在共享一个策略模型，因此每个功能权限的行为一致。
- **📦 两阶段上下文压缩** ——长时间对话先截断旧工具结果负载，再进行总结，以便在令牌限制附近更清晰地处理。

**之前更新（v4.8.0）：**

- **⏰ 定时任务** ——按cron、按时间或按星期的安排运行代理任务，并配备完整的管理界面。请参阅 [计划任务指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/scheduled-tasks.md) 。
- **🌙 错过运行补进** ——本应在Obsidian启动时关闭时运行的任务进行审核。
- **🛰️ 后台任务** ——深度研究和图像生成现在在后台运行，输出集中在 。请参阅 [背景任务指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/background-tasks.md) 。 `[state-folder]/Background-Tasks/`
- **🦙 Ollama 提供者** ——将插件指向本地 Ollama 服务器，进行离线本地模式聊天。请参见 [Ollama 设置指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/ollama-setup.md) 。
- **🛑 失控环路中止** ——在一个回合内反复检测到工具环路时，现在会明确通知终止该回合，而不是“切换”。
- **🛠️ 无头代理循环** ——AgentLoop 从代理视图中提取，因此调度运行者和后台运行者共享同一执行引擎。

## 特色

- **代理模式与工具调用：** 一个能主动与你的金库协作的AI代理！它可以搜索文件、阅读内容、创建新笔记、编辑现有笔记、移动和重命名文件、创建文件夹，甚至进行带有正确引用的深入研究。它支持持久会话、细粒权限控制、会话专用模型配置，以及一个差异审查视图，允许你在文件写入前检查和编辑拟议文件更改。
- 语 **义库搜索：** 按意义搜索你的保险库，而不仅仅是关键词。使用谷歌的文件搜索API在后台索引你的笔记。即使你记不清确切词汇，AI也能找到相关内容。支持PDF和附件，支持暂停/续写控制和详细状态追踪。
- **上下文感知代理：** 为你的经纪人会话添加具体的记录作为持续的上下文。客服可以在通话过程中访问并引用这些上下文文件，提供高度相关且个性化的回答。
- **智能总结：** 快速生成简明的一句话笔记摘要，并自动存储在文档前言中，使用专门优化的 Gemini 模型进行摘要。
- **基于选择的AI功能：** 以有力的方式处理选定文本：
	- **重写** ：用自定义指令转换选定文本——右键点击并选择“Gemini Scribe： Rewrite Text...”
		- **解释选择** ：使用可定制提示获取AI解释——右键点击并选择“Gemini Scribe： 应用提示......”
		- **询问选择** ：对所选文本提出任何问题——右键点击并选择“Gemini Scribe： Ask Question...”
- **IDE风格的补全：** 你可以实时获得上下文感知的文本补全，类似于IDE。接受完备，或用其他键拒绝。该功能使用专用的双子座模型以优化完井生成。 `Tab`
- **持久代理会话：** 将您的代理对话历史直接存储在仓库中，作为标记文件。每个会话都存储在文件夹中，便于备份、版本控制和跨会话继续对话。 `gemini-scribe/Agent-Sessions/`
- **可配置模型：选择** 不同的Gemini模型进行聊天、总结和完成，方便你根据每个任务调整AI的行为。
- **自定义提示系统：** 为代理会话创建可重复使用的AI指令模板，允许你根据不同工作流程（如技术文档、创意写作、研究）定制AI行为。包含命令调色板命令，便于创建和管理。
- **图片粘贴支持：** 直接将图片粘贴到聊天输入中，发送到 Gemini 进行多模态分析。图片会自动保存到你的 Obsidian 附件文件夹，发送前以缩略图形式显示，AI 会接收嵌入笔记的图像路径。
- **MCP服务器支持：** \[实验性\] 连接 [模型上下文协议](https://modelcontextprotocol.io/) 服务器，通过外部工具扩展代理。支持stdio（桌面）和HTTP传输（包括移动端所有平台），支持远程服务器的OAuth认证。配置每个工具的信任设置，并无缝集成到确认流程中。
- **定时任务：** 自动化重复的AI提示——每日摘要、周报告、定期保险库维护——无需人工干预。通过 **Open Scheduler** 命令或Gemini Scribe →自动化→设置创建和管理任务。每个任务都有前置计划（、等）和提示文;任务作为无头代理会话运行，并将输出写入你的保险库。支持按任务模型和工具类别覆盖，可配置工具迭代上限（默认20），用于长时间多步运行，针对Obsidian关闭期间错过的任务进行补上运行（），反复失败自动暂停，并通过命令面板实现任务监控。 `daily` `daily@HH:MM` `weekly` `weekly@HH:MM:DAYS` `interval:Xm` `maxIterations` `runIfMissed: true`
- **生命周期钩子：** \[选择加入\] 触发无头 AI 代理响应保险库事件——文件已创建、修改、删除或重命名。通过 **Open Hook Manager** 命令或 Gemini Scribe →自动化设置创建和管理钩子→ Hook。每个钩子指定触发器、可选路径块和前置问题过滤器，以及提示模板;运行内容包括去弹跳、每小时速率限制、冷却时间、可配置工具迭代上限（默认 20 个）以及自动暂停保护以控制 API 成本。需要启用该设置。 `maxIterations` `hooksEnabled`
- **项目：** 为保险库的不同区域创建有范围的代理档案。一个项目将自定义指令、文件范围、技能选择和权限覆盖捆绑成一个配置。代理会自动从你的文件夹结构中检测项目，并应用项目特定的行为——包括有范围的文件发现、筛选技能以及按工具覆盖权限。详情请参见 [项目指南](https://allenhutchison.github.io/obsidian-gemini/guide/projects) ，博客 [文章](https://allen.hutchison.org/2026/04/09/scoping-ai-context-with-projects-in-gemini-scribe/) 中有详细介绍。
- **特工技能：** 创建、编辑并使用可扩展的技能包，为客服提供专业知识和工作流程。技能遵循 [agentskills.io](https://agentskills.io/) 规范，存储在插件状态文件夹中。特工会自动发现可用技能并按需激活。通过带有差异复习的工具更新现有技能。 `edit_skill`
- **内置提示模板：** 该插件使用精心设计的Handlebar模板，用于系统提示、代理提示、摘要提示、选择重写提示和完成提示。这些措施确保了AI互动的一致性和有效性。
- **数据隐私：** 所有与Gemini API的交互都是直接在你的机器上完成的。除了谷歌服务器外，不会将数据发送到任何第三方服务器。代理会话历史会以 Markdown 文件形式存储在你的 Obsidian 仓库本地。
- **强有力的会话管理：**
	- 重启后存活的持久代理会话
		- 会话专用权限和设置
		- 贯穿整个会话的上下文文件
		- 完整的对话历史及工具执行日志
		- 会话的便捷备份和版本控制
		- 当对话变得庞大时，自动上下文压缩
		- 可选的令牌使用显示显示实时上下文消费情况

## 快速入门

1. 从社区插件安装插件
2. 从 [Google AI Studio](https://aistudio.google.com/apikey) 获取免费API密钥
3. 在插件设置中添加API密钥
4. 用带状图标或命令面板打开代理聊天
5. 通过命令调色板操作直接管理会话：“新代理会话”、“浏览代理会话”、“将项目链接到代理会话”和“代理会话设置”
6. 开始用AI代理来管理你的保险库吧！

**更喜欢本地运行模型？** Gemini Scribe 也支持 [Ollama](https://ollama.com/) ——安装 Ollama，拉取带有 的模型，然后在设置中将 **Provider** 切换为“Ollama （local）”。Gemini内置的一些功能（Google搜索、URL上下文、深度研究、图像生成、RAG）在Ollama上不可用;详情请参见 [docs/guide/ollama-setup.md](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/ollama-setup.md) 。 `ollama pull llama3.2`

## 安装

1. **社区插件（推荐）：**
	- 打开Obsidian设置。
		- 进入“社区插件”。
		- 确保“限制模式”关闭。
		- 点击“浏览”并搜索“Gemini Scribe”。
		- 点击“安装”，然后点击“启用”。
2. **手动安装：**
	- 从 [GitHub发布](https://github.com/allenhutchison/obsidian-gemini/releases) 页面下载最新版本（你需要、、和）。 `main.js` `manifest.json` `styles.css`
		- 在你的保险库目录里创建一个命名的文件夹。 `obsidian-gemini``.obsidian/plugins/`
		- 把下载的文件复制到文件夹里。 `obsidian-gemini`
		- 在 Obsidian 中，进入社区插件设置→启用“Gemini Scribe”。

## 配置

1. **获取Gemini API密钥：**
	- 访问 [Google AI工作室](https://aistudio.google.com/apikey) 。
		- 创建一个新的API密钥。
2. **配置插件设置：**
	- 打开Obsidian设置。
		- 进入“Gemini Scribe”，在“社区插件”里。
		- **提供者：** 选择（默认）或 。Ollama 选项会暴露一个基础 URL 字段，并刷新模型列表。 `Google Gemini (cloud)` `Ollama (local)` `GET /api/tags`
		- **API 密钥：** （仅限 Gemini）将你的 Gemini API 密钥粘贴到这里。你的密钥通过Obsidian的SecretStorage被安全存储。
		- **聊天模式：** 选择首选的 Gemini 模型进行聊天互动（默认：）。 `gemini-flash-latest`
		- **模型总结：** 选择首选的双子座模型生成摘要（默认：）。 `gemini-flash-latest`
		- **完成模型：** 选择IDE风格补全的首选模型（默认：）。 `gemini-flash-lite-latest`
		- **摘要前言说明：** 在前言中指定存储摘要时使用的键（默认：）。 `summary`
		- **你的名字：** 输入你的名字，AI在称呼你时会用这个名字。
		- **聊天记录：**
		- **启用会话历史：** 切换是否保存代理会话历史。
				- **插件状态文件夹：** 选择你保险库内存储插件数据的文件夹（代理会话和自定义提示）。
		- **自定义提示：**
		- **允许系统提示符覆盖：** 允许自定义提示完全替代系统提示（请谨慎使用）。
		- **用户界面设置：**
		- **启用流媒体：** 切换流式回复，享受更具互动性的聊天体验。
		- **高级设置：** （点击“显示高级设置”以显示）
		- **温度：** 控制AI创造力和随机性（0-2.0，根据可用模型自动调整）。
				- **顶部P：** 控制反应多样性和专注力（0-1.0）。
				- **模型发现：** Gemini模型启动时会自动检索（缓存24小时）;在通用设置中点击 **“刷新模型列表** ”或运行“Gemini Scribe： 刷新模型列表”命令即可立即获取新发布的模型。Ollama 用户在拉取新模型后，可以点击相同的 **刷新模型列表** 按钮。
				- **API 配置：** 配置重试行为和退回延迟。
				- **工具执行：** 控制是否在工具错误时停止代理执行。
				- **工具循环检测：** 防止无限次工具执行循环。
				- **开发者选项：** 调试模式、文件日志和高级配置工具。

## 用途

### 代理模式

让AI通过工具调用功能主动与你的保险库协作。

**快速入门：**

1. 打开使用命令调色板或功能区图标的客服聊天
2. 请代理人帮忙处理保险库操作
3. 审核并批准操作（如果启用确认功能）

**可用工具：**

- **按名称搜索文件：** 查找任何按文件名排列的文件模式（支持万用字）
- **检索文件内容：** 在笔记内容中支持Grep风格的文本搜索（支持正则表达式和区分大小写的搜索）
- **阅读文件：** 通过 Gemini 直接访问文本文件或分析二进制文件（图片、音频、视频、PDF）
- **创建笔记：** 生成指定内容的新笔记
- **编辑说明：** 精准地修改现有音符
- **移动/重命名文件：** 重新整理和重命名你的保险库中的笔记
- **删除备注：** 删除笔记或文件夹（附确认）
- **创建文件夹：** 用新的文件夹结构来组织你的保险库
- **列表文件：** 浏览保险库目录及其内容
- **网络搜索：** 在谷歌搜索最新信息（如果启用的话）
- **获取网址：** 检索和分析网页内容
- **深入调研：** 进行全面的多来源研究并附有引用
- **特工技能：** 激活针对特定领域任务的专业技能包

**主要特色：**

- **持续会话：** 继续对话，Obsidian 重启
- **权限控制：** 选择哪些工具需要确认
- **上下文文件：** 添加具体的注释作为持续上下文
- **会话配置：** 每次会话覆盖模型、温度和提示
- **安全功能：** 系统文件夹受到修改保护
- **工具权限** ：每个工具的细致权限系统，包含预设（只读、谨慎、编辑模式、YOLO）和每个工具的覆盖。控制哪些工具自动运行，哪些需要确认，哪些完全禁用。
- **附加工具** ：
	- `update_frontmatter` ：安全修改笔记属性（状态、标签、日期），无需重写内容
		- `append_content` ：高效地在笔记末尾添加文字（非常适合日志和日志）

**示例命令：**

- “查找所有关于项目规划的笔记”
- “创建一份新笔记，总结我本周的会议记录。”
- “研究量子计算的最新发展并保存报告”
- “分析我的日常笔记，找出共同主题”
- “将所有已完成的项目笔记移到档案文件夹”
- “搜索关于Zettelkasten方法的信息并制作指南”

### 自定义提示

创建可重复使用的AI指令模板，以定制不同类型内容的行为。

**快速入门：**

1. 在 `[Plugin State Folder]/Prompts/`
2. 打开代理面板，点击会话头中的齿轮图标
3. 从“提示模板”下拉菜单中选择你的提示

**了解更多：** 请参阅全面的 [自定义提示指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/custom-prompts.md) ，了解详细说明、示例和最佳实践。

### 文献资料

有关所有功能的详细指南，请访问 [文档网站](https://allenhutchison.github.io/obsidian-gemini/) ：

**核心功能：**

- [代理模式指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/agent-mode.md) ——具备工具调用功能的AI代理
- [自定义提示指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/custom-prompts.md)
- [人工智能辅助写作指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/ai-writing.md)
- [完成指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/completions.md)
- [摘要指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/summarization.md)
- [上下文系统指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/context-system.md)
- [MCP服务器指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/mcp-servers.md) - 连接外部工具服务器
- [代理技能指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/agent-skills.md) - 创建可扩展的AI技能包
- [定时任务指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/scheduled-tasks.md) ——自动化重复的AI提示
- [生命周期钩子指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/lifecycle-hooks.md) ——触发AI从保险库事件中运行

**配置与开发：**

- [设置参考](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/reference/settings.md) ——完整设置文档
- [高级设置指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/reference/advanced-settings.md)
- [工具开发指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/contributing/tool-development.md) - 创建自定义代理工具

### 聊天界面

1. **公开聊天：**
	- 使用命令面板“Gemini Scribe： Open Gemini Chat”或点击功能区图标
		- 现在所有聊天都具备完整的客服功能，并配备了工具调用
2. **带背景聊天：**
	- 在输入框中输入你的信息
		- 按 **回车** 发送， **Shift+回车** 表示新行（换行码保留在消息中）
		- AI会自动将你当前的笔记作为上下文
		- 用 **@** 来表示文件（文本、二进制或文件夹）作为持久上下文
		- 会话会自动保存并可继续
3. **AI回复：**
	- 回复会通过“复制”按钮出现在聊天中
		- 自定义提示会修改AI的响应方式（如果配置好的话）
		- 工具调用和结果以可折叠部分显示，便于清晰

### 文档摘要

1. **打开备注：** 导航到你想总结的Markdown文件
2. **生成摘要：** 按 Ctrl/Cmd + P 并运行“Gemini Scribe： Summarize Active File”
3. **查看结果：** 摘要会被添加到你的笔记前言中（默认按键： `summary`)

**提示：** 非常适合快速浏览长笔记或生成笔记索引的描述。

### 基于选择的文本重写

借助AI协助，精确地重写你文本的任何部分。此功能为特定章节提供外科手术般的精准度，同时不影响文档的其他部分。

1. **选择文本：** 在任何Markdown文件中选出你想重写的文本。
2. **访问重写选项：**
	- **右键点击方法：** 右键点击选中的文本，选择“Gemini Scribe： Rewrite Text...”
		- **指令方法：** 使用命令面板（Ctrl/Cmd + P）搜索“用 AI 重写文本”
3. **提供说明：** 会显示你选中的文本。输入你想要重写的指示（例如，“让这更简洁”、“修正语法”、“让它更正式”）。
4. **审核与应用：** AI会根据你的指示只重写你选定的文本，保持与周围内容的一致性。

**重写指令示例：**

- “说得更简洁点”
- “修正语法和拼写”
- “让它更正式/随意”
- “详细展开”
- “简化语言”
- “让它更技术性一些”

**福利：**

- **精准控制：** 它只会重写你选择的内容
- 情 **境感知：** 保持与周围文本及链接文档的一致性
- **安全：** 没有意外修改整份文件的风险
- **直观：** 自然文本编辑工作流程

### IDE风格补全

1. **切换完成：** 使用命令面板（Ctrl/Cmd + P）选择“Gemini Scribe： Toggle completions”。通知将确认是否启用或禁用完成服务。
2. **写：** 开始输入一个Markdown文件。
3. **建议：** 在短暂停顿（750毫秒）后，Gemini会根据你当前的上下文提供内联建议。
4. **接受/驳回：**
	- 请点击接受建议。 `Tab`
		- 按任何其他键可以关闭建议，继续输入。
5. 上下文 **感知：** 补全则考虑周围的文本和文档结构，以获得更相关的建议。

### 聊天记录

- 你的 **宝库中的会话：** 代理会话以 markdown 文件存储，方便浏览、备份和版本控制。 `[Plugin State Folder]/Agent-Sessions/`
- **浏览与简历：** 使用代理面板中的会话下拉菜单加载上一个会话并继续对话。
- **手动管理：** 会话是纯粹的 markdown——删除文件以删除旧对话。应用内没有“全部清除”命令。 `Agent-Sessions/`
- **自动管理：** 插件会自动：
	- 第一次发送消息时会创建一个会话文件
		- 在第一次交流后，在会话标题中添加 YYYY-MM-DD 前缀和 AI 生成的描述
		- 跟踪代理在 Frontmatter 中读取或写入的每个文件进行审计和调回 `accessed_files`

### 自定义提示

创建可重复使用的AI指令模板，针对特定会话定制AI的行为。

1. **创建新提示：**
	- 使用命令调色板：“Gemini Scribe： Create New Custom Prompt”
		- 输入一个名字并编辑生成的模板
		- 或者手动创建文件`.md` `[Plugin State Folder]/Prompts/`
2. **申请课程：**
	- 打开代理面板，点击会话头中的齿轮图标
		- 从“提示模板”下拉菜单中选择你的提示
		- 该提示适用于该会话中的所有消息

**提示：** 请参阅全面的 [自定义提示指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/custom-prompts.md) ，获取示例和最佳实践。

## 故障排除

- **API 密钥错误：** 确保您的 API 密钥正确且具备必要的权限。在 [Google AI Studio](https://aistudio.google.com/apikey) 获取新的密钥。
- **无回复：检查** 你的网络连接，确保你的API密钥有效。
- **响应缓慢：** 响应速度取决于Gemini模型和请求的复杂程度。较大的上下文窗口会花费更长时间。
- **未显示完成项目：**
	- 确保通过命令调色板启用补全
		- 试着输入几个词，然后暂停一下触发提示
		- 检查你是否在Markdown文件中
		- 禁用其他可能冲突的补全插件
- **会话未加载：** 确保“启用会话历史”且“插件状态文件夹”路径正确。Sessions 位于 。 `[Plugin State Folder]/Agent-Sessions/`
- **自定义提示无效：**
	- 确认提示文件是否存在于文件夹中 `[Plugin State Folder]/Prompts/`
		- 检查提示是否在会话设置中被选中（齿轮图标）
		- 详细的故障排除请参见 [自定义提示指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/guide/custom-prompts.md)
- **参数/高级设置问题：**
	- 检查一下你的型号是否支持你使用的温度范围
		- 如果收到意外回复，请将温度和Top P重置为默认值
		- 重启 Obsidian 以触发新的模型列表获取（针对 Gemini），或者点击 **刷新模型列表** （用于 Ollama）
		- 详细配置帮助请参见 [高级设置指南](https://github.com/allenhutchison/obsidian-gemini/blob/master/docs/reference/advanced-settings.md)
- **代理模式 / 工具问题：**
	- 确认你的 Gemini 型号支持函数调用（所有 Gemini 2.0+ 型号都支持）
		- 如果工具失效，检查文件权限和路径
		- 系统文件夹（插件状态文件夹、.obsidian）受到修改保护
		- 对于会话问题，试着从聊天界面创建一个新会话
		- 检查控制台（Ctrl/Cmd + Shift + I），或者在设置中启用“日志到文件”，然后在插件状态文件夹里查看详细的错误信息 `debug.log`
		- 刀具环检测可能会阻止重复操作——如有需要调整设置

## 许可

麻省理工学院许可证——详情请参见 [许可证](https://github.com/allenhutchison/obsidian-gemini/blob/master/LICENSE) 。

## 支持

- 在 [GitHub](https://github.com/allenhutchison/obsidian-gemini/issues) 上报告问题或建议功能。
- 更多信息请访问 [作者官网](https://allen.hutchison.org/) 。

## 发展

欢迎大家的贡献！有关开发指南和架构细节，请参见 [CLAUDE.md](https://github.com/allenhutchison/obsidian-gemini/blob/master/CLAUDE.md) 。

```
npm install     # Install dependencies
npm run dev     # Development build with watch
npm run build   # Production build
npm test        # Run tests
```

## 制作人员

由艾伦·哈钦森创作