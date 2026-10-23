---
title: "01 OpenChamber 导论"
aliases: [OpenChamber Introduction, OpenChamber 导论, ADE 导论]
udc: "004.8"
tags: [openchamber, opencode, ai-agent, ade, intro]
created: 2026-10-17
updated: 2026-10-17
---

# 01 OpenChamber 导论

## 什么是 OpenChamber

OpenChamber 是一个**开源的智能体开发环境（Agentic Development Environment, ADE）**：它不提供代码编辑器，而是把 AI 编码 agent 的**会话、目标、并行运行、变更审阅与跨设备接续**组织成一套可自托管的工作台。

它自己不做推理，也不直接改文件——这些交给 **OpenCode**。OpenChamber 运行在 OpenCode SDK 之上，负责的是 agent 工作的**控制面**：决定任务怎么开始、跑几个模型、何时算完成、结果怎么审、从哪台设备继续。

> 一句话：**OpenCode 负责「执行」，OpenChamber 负责「掌控」。**

## 核心理念

| 理念 | 具体表现 |
|------|---------|
| **工作台而非编辑器** | 以 VS Code / Cursor / Windsurf / Trae 扩展寄生，内置浏览器；不另造 IDE |
| **实例化（Instance）** | 每个 OpenChamber 是跑在你掌控机器上的实例；会话属于实例，关闭客户端不丢失 |
| **会话生命周期管理** | Session Goals 设定终点；调度让任务按计划推进；跨项目追踪状态、成本与审批 |
| **多模型并行** | Multi-run 将同一任务分给最多 5 个模型（各自 worktree），Fusion 合并最强部分 |
| **本地优先、可自托管** | 默认监听 localhost；桌面、Web/PWA、CLI/Server 均可自持；远程经 E2E 加密的 Private Relay |
| **可审阅性** | Changes Walkthrough 把大 diff 拆成有序步骤；失败 CI 可直接回传 agent |
| **开放可验证** | MIT 许可，隐私模型可在源码中核对 |

## 项目信息

| 项 | 内容 |
|----|------|
| 性质 | 独立开源项目，与 OpenCode 团队无隶属关系 |
| 仓库 | https://github.com/openchamber/openchamber |
| 官网 / 文档 | https://openchamber.dev/ · https://docs.openchamber.dev/ |
| 许可证 | MIT |
| 建库时间 | 2025-09-11 |
| 规模快照（2026-10-17） | 11,716 stars · 1,310 forks · 248 open issues |
| 最近提交 | 2026-10-17（持续活跃） |
| 上游依赖 | OpenCode（agent 运行时）；Pierre（diff 查看）；T3 Code / libghostty-vt（终端） |

## 与同类工具对比

| 工具 | 定位 | 与 OpenChamber 的差异 |
|------|------|----------------------|
| [[3 Resources/000-Knowledge/raw/articles/004.8-Windsurf/004.8-Windsurf\|Windsurf / Devin Desktop]] | 商业 IDE + 云代理 | 自带编辑器与自有运行时；通过 ACP 纳管第三方 agent；OpenChamber 则寄生宿主 IDE |
| Trae | 商业 IDE + SOLO 自主代理 | 自有 SOLO 全周期交付；OpenChamber 不提供自主交付产品，而是管理 OpenCode 的运行 |
| Cursor | AI IDE | 编辑器优先；OpenChamber 无编辑器，专注会话与审阅 |
| [[3 Resources/000-Knowledge/raw/articles/004.8-Claude-Code/004.8-Claude-Code\|Claude Code]] | 终端优先的编码 agent | 运行时不同，**不能**把 Claude Code 作为 agent 纳管；但可通过 Claude Code 集成把 Claude 订阅接入为模型 provider（见 [[08-生态与扩展]]） |
| [[3 Resources/000-Knowledge/raw/articles/004.8-Codex/004.8-Codex\|Codex]] | OpenAI CLI + 云端 | 同上，运行时不同；OpenChamber 只接 OpenCode |
| [[3 Resources/000-Knowledge/raw/articles/004.8-OpenCode/004.8-OpenCode\|OpenCode]] | 开源编码 agent 运行时 | **上游**：OpenChamber 是它的工作台/控制面 |

> 选型要点：如果你的 agent 运行时是 OpenCode，OpenChamber 提供的是「生命周期管理」；如果你已经押注 Claude Code 或 Codex，它不是替代品，而是另一个生态的工作台。

## 版本与演进

| 时间 | 节点 |
|------|------|
| 2025-09-11 | 仓库创建 |
| 2026 年内 | 持续迭代；出现 v1.17.x 版本（二手来源，未核） |
| 2026-10-17 | 仍在每日提交；11.7k stars |

> 版本号与变更记录以 GitHub Releases / CHANGELOG 为准；本页不逐版追踪。

## 免费与付费

| 项 | 说明 |
|----|------|
| 软件本身 | **免费**，MIT 开源 |
| 模型费用 | 自备服务商密钥，按 token 向模型厂商付费 |
| 远程访问 | Private Relay 与隧道能力包含在开源版本内 |
| 赞助 | 官方提供 Patreon 捐赠入口（不影响功能） |

## 学习路径

1. **定位** → 本页（ADE 是什么、与 IDE/运行时的边界）
2. **上手** → 安装 Desktop 或 CLI，跑通一个会话
3. **核心** → Session Goals / Multi-run / Fusion / Changes Walkthrough
4. **部署** → 实例模型、Private Relay、局域网与安全边界
5. **接入** → GitHub / Linear 工作流、IDE 扩展

## 关联

- 子库主页：[[3 Resources/000-Knowledge/raw/articles/004.8-OpenChamber/004.8-OpenChamber|004.8 OpenChamber]]
- 来源页：[[3 Resources/000-Knowledge/raw/articles/004.8-OpenChamber/wiki/sources/source-OpenChamber-README|source-OpenChamber-README]]
- 上游：[[3 Resources/000-Knowledge/raw/articles/004.8-OpenCode/004.8-OpenCode|004.8 OpenCode]]
