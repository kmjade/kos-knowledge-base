---
title: "OpenChamber README"
aliases: [source-OpenChamber-README, OpenChamber README]
type: source
udc: "004.8"
tags: [openchamber, opencode, source, ade]
created: 2026-10-17
updated: 2026-10-17
compiled: true
reviewed: false
---

# OpenChamber README

## 原文信息

| 项 | 内容 |
|----|------|
| 标题 | OpenChamber |
| 仓库 | https://github.com/openchamber/openchamber |
| 原文 | https://raw.githubusercontent.com/openchamber/openchamber/main/README.md |
| 官网 | https://openchamber.dev/ · 中文站 https://openchamber.dev/zh/ |
| 抓取日期 | 2026-10-17 |
| 补充来源 | `packages/docs/content/docs/*.mdx`（quickstart / install / multi-run / session-goals / walkthrough / preview / github / worktrees / security / extensions / mcp / providers / scheduled-tasks 等，同日抓取） |
| 许可证 | MIT |
| README 标题句 | "Agentic Development Environment based on OpenCode AI agent" |
| 主旨句 | "Run agent work. Keep control. Ship from anywhere." |

## 仓库快照（GitHub API，2026-10-17）

| 指标 | 数值 |
|------|------|
| Stars | 11,716 |
| Forks | 1,310 |
| Open issues | 248 |
| 创建时间 | 2025-09-11 |
| 最近 push | 2026-10-17 |

## 原文要点

### 产品定义

- 开源工作台，用于**运行与审阅 AI 编码工作**，覆盖桌面、Web、VS Code、移动端。
- 基于 [OpenCode](https://opencode.ai) 运行编码 agent；选择理由：开源、API 稳定、易扩展。
- **独立项目**，与 OpenCode 团队无隶属关系。

### 十项能力（原文小标题）

1. **Session Goals** — 为会话设定终点；每次回合后检查结果，持续工作直到完成、受阻或触限；关闭应用后仍可继续。
2. **Multi-run** — 同一任务交给最多五个模型，各自独立 session、可选独立 worktree；可择优，或用 **Fusion** 合并最强部分为新 session。
3. **Changes Walkthrough** — 将大 diff 转为 AI 引导的分步导览，按理解顺序重新组织并解释。
4. **Preview** — 在对话旁运行应用；指向元素即发送截图、样式、位置与浏览器错误；桌面端内置浏览器对任意网页同理。
5. **GitHub** — 从 issue/PR 带上下文启动会话；把失败检查或评审意见回传 agent；可在 OpenChamber 内更新或合并 PR。
6. **跨设备接续** — Desktop / Web/PWA / VS Code / iOS / Android 共享项目与会话；可重连运行中的终端。
7. **Private Relay** — 一次性二维码配对；E2E 加密；无需开端口或暴露公网；可随时撤销。另支持直连、LAN/VPN、Cloudflare/Ngrok、SSH。
8. **跨项目追踪** — 会话状态、审批、计划任务、provider 限额、token 与成本；会话可归入文件夹，附笔记、待办与可复用项目动作。
9. **调度** — 一次性 / 每日 / 每周 / cron；可叠加 Session Goals。
10. **多端形态** — Desktop（完整工作台）、Web/PWA、VS Code、移动端、CLI/Server。

### 安装事实

| 方式 | 关键约束 |
|------|---------|
| Desktop | Releases 下载；**捆绑匹配版本 OpenCode CLI**，无需另装 |
| Linux | `.deb` / `.rpm` / AppImage；AppImage 需 FUSE，否则 `APPIMAGE_EXTRACT_AND_RUN=1` |
| VS Code | Marketplace（`fedaykindev.openchamber`） |
| CLI/Web | **Node.js 24.14+** + 已安装 OpenCode CLI |

常用命令：`status`、`connect-url --qr`、`tunnel start --provider cloudflare --mode quick --qr`、`startup enable`、`logs`、`stop`、`update`。

### 安全相关原文

- 默认绑定 localhost；
- `--lan` 仅限可信网络；
- 浏览器访问需 `--ui-password`；
- 另有 `SECURITY` / `security.mdx` 指南（未抓取正文）。

### 技术致谢（可追溯依赖）

- **OpenCode** — agent API 与开源架构；
- **Pierre** — diff 查看器与语法高亮；
- **T3 Code / libghostty-vt** — 终端实现；
- 文档位于 `packages/docs/content/docs/`。

## 官网中文站补充（2026-10-17 抓取）

以下内容 README 未展开或表述不同，来自 `openchamber.dev/zh/`：

| 主题 | 官方表述 |
|------|---------|
| **实例模型** | OpenChamber 以「实例」形式跑在你掌控的机器上；桌面应用既运行本地实例，也能连接远程实例并在应用内切换 |
| **会话持久性** | 会话保留在实例上，关闭应用不丢失 |
| **配对链路** | `openchamber connect-url --relay` 生成 `openchamber://connect?v=2&p=…`、LAN Server URL、`wss://relay.openchamber.dev/ws` 与 Fingerprint |
| **IDE 扩展** | 官方为 **VS Code、Cursor、Windsurf、Trae** 四款编辑器提供扩展（README 仅提 VS Code） |
| **桌面能力** | 终端、文件浏览器、笔记、待办、可复用操作；服务商额度、token 用量与每会话费用 |
| **移动端** | 原生应用目前为 **beta**，另有 PWA |
| **集成** | GitHub issue/PR、Linear 工单；**GitLab 正在开发中** |
| **三阶段工作流** | 开始（issue/目标/计划）→ 运行（Multi-run / Fusion / Browser Use）→ 审阅（Walkthrough / 失败 CI 回传 / 窗口内合并） |
| **Browser Use** | 你点击元素，agent 也能点击；agent 能看到报错并检查自己的工作 |
| **隐私** | 不收集项目名、路径、提示词、代码、diff 或会话内容；代码与会话留在本机 |
| **费用** | 软件免费；只需自付模型服务商费用 |
| **前置条件** | FAQ 称需要一台装好 OpenCode 的机器（基于 OpenCode SDK） |

> ⚠️ **文档不一致**：README 称 Desktop 捆绑 OpenCode CLI，官网 FAQ 称需自行安装 OpenCode。两者可能对应不同版本/安装路径，落地前以安装包实测为准。

## 解读与局限

- README 是**产品自述**，能力描述未经第三方验证；尤其 Session Goals 的实际完成率无公开数据。
- 「最多五个模型」「独立 worktree」等参数来自 README，属产品声明。
- 与 ACP 路线（Devin Desktop）相比，OpenChamber **绑定单一运行时**，这是架构选择而非缺陷，但决定了它无法纳管 Claude Agent / Codex CLI。
- 项目年轻（约 13 个月），issue 存量与迭代速度需持续观察。

## 相关

- [[3 Resources/000-Knowledge/raw/articles/004.8-OpenChamber/004.8-OpenChamber|004.8 OpenChamber]]
- [[3 Resources/000-Knowledge/raw/articles/004.8-OpenCode/004.8-OpenCode|004.8 OpenCode]]
