---
title: "Windsurf 国内使用指南（2025-03 快照）"
aliases: [source-Windsurf-国内使用指南, Windsurf国内使用指南]
type: source
udc: "004.8"
tags: [windsurf, source, clipping, cascade]
created: 2026-10-17
updated: 2026-10-17
compiled: true
reviewed: false
---

# Windsurf 国内使用指南（2025-03 快照）

## 原文信息

| 项 | 内容 |
|----|------|
| 标题 | Windsurf国内使用指南(超详细) |
| 作者 | 文字机器凸哥 |
| 平台 | 知乎专栏《全球AI使用指南》 |
| 链接 | https://zhuanlan.zhihu.com/p/29217549585 |
| 发布/编辑 | 2025-03-11 |
| 热度 | 99 赞同 |
| 本地副本 | `3 Resources/000-Knowledge/raw/articles/004.8-Windsurf/99-资源收集/clippings/Windsurf国内使用指南(超详细).md`（2026-10-17 Triage 入库） |

> **时点判定：这是一篇 2025-03 的 Windsurf 1.x 上手教程，早于 Google 授权、Cognition 收购与 Devin Desktop 更名。** 其操作层内容有参考价值，产品事实层已大面积失效，引用时须标注时点。

## 内容摘要

1. **定位**：Windsurf 是 VS Code 的分支，操作与 VS Code 基本一致；作者认为它比 Cursor「更适合 AI 编程新手」。
2. **核心功能**：Cascade 代理，可自动写代码、找 bug、自动发布；当时刚更新预览元素回传、Tab-to-import、Linter 自动修复、MCP 可发现性、拖放文件、Claude 3.7 优化。
3. **安装与汉化**：官网下载；可导入 VS Code / Cursor 配置；注册建议 Gmail / Outlook（称不支持 QQ 邮箱）；扩展市场装「简体中文」包。
4. **使用**：
   - `Ctrl + I` 打开命令窗口，`Ctrl + L` 开关 Cascade 面板；
   - `@` 引用函数、文件、文件夹或图片作为上下文；
   - 模型可选 o3-mini、Claude 3.7 等，**Cascade base 模型永久免费**；
   - **Write 模式**直接改文件，**Chat 模式**仅给建议；
   - 「记忆和全局规则」可约束语言与代码保密；
   - Cascade 可检测并直接安装缺失的软件包与工具。
5. **订阅**：免费档只能 chat、不能改文件；付费 **$15/月**（称比 Cursor 便宜）；国内不支持直接支付，需虚拟卡（文中为推广链接）；新用户两周试用、邀请 1 人得 500 积分。

## 事实对照（2025-03 → 2026-10）

| 文章说法 | 当前状态 | 结论 |
|---------|---------|------|
| 产品名 Windsurf | 2026-06-02 更名 **Devin Desktop** | ❌ 失效 |
| 核心代理 Cascade | 2026-07-01 停止支持，由 **Devin Local** 接替（Rust 重写） | ❌ 失效 |
| 付费 $15/月 | 现为 Pro $20/月；另有 Max 档（二手来源） | ❌ 失效 |
| 免费档不能改文件 | 现免费档含 SWE-1.6、Tab 不耗额度（二手来源） | ❌ 需重核 |
| 模型 o3-mini / Claude 3.7 | 已迭代数代 | ❌ 失效 |
| VS Code 分支、可导入配置 | 仍成立 | ✅ 有效 |
| 扩展市场装简体中文包 | 仍成立 | ✅ 有效 |
| `@` 引用上下文 | 概念延续至 Devin Local | ✅ 大体有效 |
| Write / Chat 模式区分 | 心智模型可映射到 Devin Local 的自动/建议行为 | ⚠️ 需重核 |
| 国内支付需虚拟卡 | 结构性现实未变，具体渠道需自行甄别 | ⚠️ 有效但过期 |

## 价值与风险

**仍有的价值**

- 记录了 **Cascade 时代**的产品形态与中文用户上手路径，可作为「产品演进前史」的一手用户侧材料。
- 反映了中国大陆使用 AI IDE 的两个结构性约束：**支付通道**与**账号/网络可达性**。
- 「新手友好」的判断依据——可直接安装依赖、终端操作可视化——在 Devin Local 时代仍部分成立。

**风险提示**

- 文中含**推广/返利链接**（虚拟卡服务、邀请码），引用时不得视为中立推荐。
- 作者对「更适合新手」的判断是个人体验，非评测数据。
- 教程截图与快捷键基于旧版 UI，Cascade 下线后部分入口已不存在。

## 相关

- [[3 Resources/000-Knowledge/raw/articles/004.8-Windsurf/004.8-Windsurf|004.8 Windsurf / Devin Desktop]]
- [[3 Resources/000-Knowledge/raw/articles/004.8-Claude-Code/004.8-Claude-Code|004.8 Claude Code]]
- [[3 Resources/000-Knowledge/raw/articles/004.8-Codex/004.8-Codex|004.8 Codex]]
