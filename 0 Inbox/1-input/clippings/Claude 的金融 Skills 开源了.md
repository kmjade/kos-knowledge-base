---
title: "Claude 的金融 Skills 开源了"
source: "https://mp.weixin.qq.com/s/8_S8ynPyy7SHy_OW0lbYuA"
author:
  - "[[老章很忙]]"
published:
created: 2026-06-12
description:
tags:
  - "clippings"
---
老章很忙 *2026年5月10日 06:47*

关于 Claude Skills，我之前写过几篇：

- [大模型世界新宠，Agent Skills 10000字教程](http://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2649006999&idx=1&sn=f7ac86380ca2572cc91a66f4c2f16da8&chksm=879331bdb0e4b8abf6ea86b057649ae5ff8ab0bae8b140092446c256cbca9918fdad6a4bb24f&scene=21#wechat_redirect)
- [AI时代，PPT的未来是HTML，一个神奇的 Skills 推荐](http://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2649007136&idx=1&sn=17eb37522718519d867a10ab66069088&chksm=8793360ab0e4bf1c723b697978fbc6f34535e0c42a4205c3021517df4b597572595975d11f36&scene=21#wechat_redirect)
- [Claude Code 是需要管的，实测一个靠谱的Skills](http://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2649007136&idx=2&sn=886c8ba39823af88ff5fa228be3f7b43&chksm=8793360ab0e4bf1c8ad6e1c85dd84636967a22e9b0a6a694d4b814e324f03d665c7226e0289c&scene=21#wechat_redirect)
- [大模型将超长文章转知识卡片，Skills实现过程分享](http://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2649006211&idx=1&sn=a212dd928bc16c9461539673e0da6885&chksm=879332a9b0e4bbbf169627dc83307b622c5aba3852605a3c009d19c0e555e3e28f490d7b16ee&scene=21#wechat_redirect)
- [视频号做到6000粉，我每天只做一件事](https://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2649013460&idx=2&sn=e5687422fe9b1256fa5aeb58bd794cfe&scene=21#wechat_redirect)

之前看到的 Skills 大多是社区开发者鼓捣出来的小工具——做 PPT、转知识卡片、约束 Claude Code 别瞎改代码

Anthropic 官方亲自下场了，仓库名字叫 `claude-for-financial-services` ，一上来就把投行、股票研究、私募股权、财富管理这四条华尔街最贵的赛道全端了出来

仓库地址：github.com/anthropics/financial-services

License 是 Apache 2.0，全部 Markdown + YAML，没有 build step，fork 下来就能改

### 一、它到底是个啥

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

简单说一句， **Anthropic 把华尔街分析师每天干的活，拆成了一套 Claude 可以直接装的插件包**

官方原话挺有意思——这些 Agent 是替分析师起草工作底稿（模型、备忘录、研报、对账单）的， **不做投资决策、不执行交易、不绑定风险、不批准开户** ，每一份产出都摆在那儿等人类签字

这个边界划得很干净，金融行业最敏感的就是责任，能跑活但不背锅，反而是 To B 落地最现实的姿势

整个仓库分两层：

- **Agents（11 个）** ：端到端的工作流智能体，比如 Pitch Agent、Earnings Reviewer、GL Reconciler，每个都是自包含插件，装上就能跑一整条流水线
- **Vertical Plugins（7 个垂直行业包 + 2 个合作伙伴包）** ：底层的 Skill、斜杠命令、数据连接器，按金融子行业打包，你不想要完整 Agent，只装这些底层能力也行

而且所有东西 **两种部署方式同源** ——既能在 Claude Cowork 里当插件用，也能通过 Claude Managed Agents API（ `/v1/agents` ）丢到自家工作流引擎后面跑无头模式，同一个 system prompt、同一组 skill，你选在哪儿落地

### 二、11 个 Agent，覆盖了哪些场景

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这是仓库 README 里最让我眼前一亮的一张表，我搬过来给大家看

| 业务方向 | Agent | 干什么活 |
| --- | --- | --- |
| 客户与咨询 | **Pitch Agent** | 可比公司 + 先例交易 + LBO → 出一份带品牌的 pitch deck |
|  | **Meeting Prep Agent** | 客户会议前自动出一份 briefing pack |
| 研究与建模 | **Market Researcher** | 给一个赛道/主题 → 行业概览 + 竞争格局 + peer comps + 标的清单 |
|  | **Earnings Reviewer** | 财报电话会 + 公告 → 更新模型 → 起草研报 |
|  | **Model Builder** | DCF、LBO、三表模型、可比公司分析， **直接在 Excel 里跑** |
| 基金运营 | **Valuation Reviewer** | 接收 GP 报送包 → 跑估值模板 → 准备 LP 报告 |
|  | **GL Reconciler** | 找总账 break、追根溯源、走签字流程 |
|  | **Month-End Closer** | 月末结账：计提、滚存、差异说明 |
|  | **Statement Auditor** | LP 报表分发前的审计 |
| 运营与开户 | **KYC Screener** | 解析开户文档 + 跑规则引擎 + 标记缺口 |

每个 Agent 都是 **独立打包** 的，bundle 了它要用的全部 skill，装一个就够，不用先装一堆依赖

如果你是金融从业者，看到 Pitch Agent 那一行心里大概已经在算账了——以前 MD 让你周五交一份 pitch，你周三就得开始拉 comps、跑 DCF、做 deck，现在这个流程被压成了一条命令

我个人觉得最有想象力的是 **Model Builder** ，DCF 和 LBO 直接活在 Excel 里跑，不是导出来一个表格，是 Claude 真的在你的 xlsx 文件里写公式、改单元格

### 三、底层的 Skill 才是真宝藏

Vertical Plugins 是这套东西的底盘， **先装 `financial-analysis` 这个核心包** ，它带着所有共用建模 skill 和 11 个数据连接器，再按需要叠垂直行业

我把每个垂直包里有头有脸的 Skill 列一下，这部分是金融人最该收藏的

#### financial-analysis（核心建模）

| Skill | 命令 | 作用 |
| --- | --- | --- |
| comps-analysis | `/comps` | 可比公司分析 + 交易倍数 |
| dcf-model | `/dcf` | DCF 估值 + WACC + 敏感性分析 |
| lbo-model | `/lbo` | 杠杆收购模型 |
| 3-statement-model | `/3-statement-model` | 三表模型填充 |
| audit-xls | `/debug-model` | Excel 模型审计——公式追溯、硬编码检测、平衡校验 |
| ib-check-deck | — | PPT 错误一致性 QC |
| ppt-template-creator | `/ppt-template` | 把你公司的品牌 PPT 模板教给 Claude |

那个 `audit-xls` 我看一眼就笑了，这是把分析师最痛的「老板甩过来一个十年没人维护的 Excel，让你看里面到底哪个数错了」直接做成了 skill

#### investment-banking（投行）

`/cim` （信息备忘录）、 `/teaser` （一页匿名简介）、 `/buyer-list` （潜在买家清单）、 `/merger-model` （增发摊薄分析）、 `/process-letter` （流程函）、 `/deal-tracker` （项目跟踪）

#### equity-research（卖方研究）

`/earnings` （财报点评）、 `/earnings-preview` （业绩前瞻）、 `/initiate` （首次覆盖报告）、 `/morning-note` （晨会纪要）、 `/sector` （行业研究）、 `/thesis` （投资逻辑跟踪）、 `/catalysts` （催化剂日历）、 `/screen` （选股）

#### private-equity（私募股权）

`/source` （项目挖掘 + CRM 检查 + 创始人 outreach）、 `/dd-checklist` （尽调清单）、 `/unit-economics` （ARR cohorts、LTV/CAC、留存）、 `/ic-memo` （投委会备忘录）、 `/value-creation` （投后 100 天计划 + EBITDA bridge）、 `/ai-readiness` （评估被投公司 AI 准备度）

#### wealth-management（财富管理）

`/client-review` （客户复盘）、 `/financial-plan` （退休、教育、遗产、现金流规划）、 `/rebalance` （含税务感知的再平衡）、 `/tlh` （税损收割）

#### fund-admin & operations（运营）

总账对账、break 追溯、计提滚存、差异说明、NAV 验算，KYC 文档解析

### 四、11 个数据连接器，这才是真正的护城河

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

我觉得这个仓库最值钱的部分不是 Skill， **是那 11 个 MCP 连接器**

| 数据源 | 内容 |
| --- | --- |
| Daloopa | 标准化财务数据 |
| Morningstar | 基金研究 |
| S&P Global | 标普全球 + Capital IQ |
| FactSet | 万得海外版 |
| Moody's | 评级与信用数据 |
| MT Newswires | 即时新闻 |
| Aiera | 财报会议转写 |
| LSEG | 伦交所/路孚特 |
| PitchBook | 一级市场数据 |
| Chronograph | PE 投后监控 |
| Egnyte | 文档存储 |

国内同行看到这表估计要叹气一下，这些都是金融行业付费才能用的高墙数据，Anthropic 一口气给做了官方 MCP 适配

注意 README 里有句话—— **MCP 访问可能需要数据商的订阅或 API Key** ，Anthropic 只是搭好了接口，数据钱还是得你自己掏

合作伙伴还专门提供了两个增强包： **LSEG 包** （债券相对价值、互换曲线、外汇套息、期权波动率、宏观利率监控）， **S&P 包** （公司速览、财报前瞻、融资动态）

### 五、安装：Claude Code 三行命令

如果你用的是 **Cowork** ，进设置 → 插件 → 添加插件，把仓库地址 `https://github.com/anthropics/claude-for-financial-services` 粘进去，挑想要的就行

我自己更喜欢命令行， **Claude Code** 装法是这样：

```
# 1. 添加 marketplace
claude plugin marketplace add anthropics/claude-for-financial-services

# 2. 先装核心包（带所有数据连接器）
claude plugin install financial-analysis@claude-for-financial-services

# 3. 按需挑 Agent
claude plugin install pitch-agent@claude-for-financial-services
claude plugin install gl-reconciler@claude-for-financial-services
claude plugin install market-researcher@claude-for-financial-services

# 4. 按需挑垂直行业包
claude plugin install investment-banking@claude-for-financial-services
claude plugin install equity-research@claude-for-financial-services
```

装完 Agent 在 Cowork 派发列表里出现，Skill 在合适的场景自动触发，斜杠命令立即可用—— `/comps` 、 `/dcf` 、 `/earnings` 、 `/ic-memo` 直接敲就行

如果你是部署到自家服务器，走 **Managed Agents API** ：

```
export ANTHROPIC_API_KEY=sk-ant-...
scripts/deploy-managed-agent.sh gl-reconciler
```

脚本会自动解析文件引用、上传 skill、创建 leaf-worker 子代理，最后 POST 到 `/v1/agents` 完成注册

### 六、它的真实定位

我看完整个仓库的感受—— **这不是一个产品，是一份参考实现**

官方在 README 里写得很坦白：「这些都是参考模板，按你公司的方式调一调才好用」，给了五个改造方向：

- **换连接器** ：把 `.mcp.json` 指向你自家的数据商和内部系统
- **加公司语境** ：把你公司的术语、流程、格式标准塞进 skill 文件
- **带上你的模板** ： `/ppt-template` 教 Claude 学会你公司的品牌 PPT 版式
- **调整 Agent 边界** ：编辑 `agents/<slug>.md` 改成你团队真实的工作流
- **自己加新的** ：照着结构 copy 一份就能扩展

整个仓库是 file-based， **Markdown + YAML，没有 build step** ，对二开极其友好，金融机构内部 IT 团队拿来当骨架再合适不过

还有一份单独的 `claude-for-msft-365-install/` 工具，让管理员把 Claude 的 Microsoft 365 插件部署到 **你公司自己的 Vertex AI、Bedrock 或内部 LLM 网关** 上跑，而不是直连 Anthropic 的 API，这是给合规要求高的机构准备的

### 七、谁该看这个仓库

我真诚说几句

**强烈推荐** ：

- 投行、券商研究所、PE/VC、家办、基金运营的从业者，里面那些 skill 名字你应该一眼就能对上自己工位上的活
- 给金融机构做 AI 解决方案的乙方团队，这是一份现成的 RFP 答卷
- 想学怎么写「能用」的 Claude Skill 的人， **官方写法就是最好的范本**

**会有点失望的** ：

- 想直接拿来 C 端创业的——这玩意儿不是产品，是骨架，没数据接入跑不起来
- 国内场景——大部分 MCP 连接器都是海外数据源，A 股、港股、信贷的数据需要自己接
- 想看模型亮活的——这里展示的是工程化能力，不是大模型边界， **Claude 能不能比得过 ChatGPT 在这场景里其实不是重点** ，重点是这套架构本身

**几个坑要先说** ：

1. MCP 连接器要订阅，Daloopa、FactSet、PitchBook 这些都是 **机构席位** ，普通人买不起
2. 子代理委托（ `callable_agents` ）目前还是 Research Preview 状态，生产用要谨慎
3. 默认是英文语境，中文金融术语和中国会计准则需要自己改 skill 文件

### 八、我的判断

Anthropic 这一手不是为了卖订阅，是在 **给整个企业级 AI Agent 行业立标准**

把 Skill 系统从「社区好玩工具」推到了「金融机构生产级参考实现」这个台阶上，下一步保守估计医疗、法律、咨询、政务都会有官方仓库出现

对我们普通开发者来说， **这是一份免费的高质量 Skill 写作教科书** ，去翻一翻 `plugins/agent-plugins/pitch-agent/` 里的目录结构，看看 Anthropic 自己是怎么组织 system prompt、skill、subagent 的，比看十篇博客都有用

仓库地址再贴一次：

**github.com/anthropics/financial-services**

#ClaudeSkills #Anthropic #金融AI #ClaudeCode #开源

**制作不易，如果这篇文章觉得对你有用，可否点个关注。给我个三连击：点赞、转发和在看。若可以再给我加个🌟，谢谢你看我的文章，我们下篇再见！**

好用的 AI 工具 · 目录

继续滑动看下一个

Ai学习的老章

向上滑动看下一个