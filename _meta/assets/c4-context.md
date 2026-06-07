---
created: 2026-06-06
updated: 2026-06-06
udc: 004.4
tags: [c4, architecture, diagram, software-engineering]
---

# C4 模型示例图 — KOS_LLM-Wiki

> **参考架构：** PARA × LLM-Wiki 融合系统 + LifeOS 设计哲学
> **工具：** Mermaid.js（Markdown 内联渲染）

---

## L1 — Context 系统上下文

```mermaid
C4Context
  title System Context — KOS_LLM-Wiki

  Person(user, "知识工作者", "笔记的创建者与消费者")

  System_Boundary(kos, "KOS_LLM-Wiki 知识管理系统") {
    System(vault, "Obsidian Vault", "Markdown 笔记仓库")
    System(codex, "Codex AI Agent", "自动分拣、编译、审计")
  }

  System_Ext(git, "Git 版本控制", "变更追溯与多设备同步")
  System_Ext(editor, "Obsidian 编辑器", "笔记编写与图谱浏览")

  Rel(user, vault, "读写笔记")
  Rel(user, codex, "发出操作指令")
  Rel(codex, vault, "自动维护操作")
  Rel(codex, git, "提交变更")
  Rel(vault, editor, "渲染与编辑")
  Rel(vault, git, "存储历史版本")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L1 说明

| 元素 | 角色 |
|------|------|
| **知识工作者** | 系统的核心用户。创建笔记、发出指令、消费知识 |
| **Obsidian Vault** | Markdown 笔记仓库。存储所有内容与元数据 |
| **Codex AI Agent** | 自动化维护引擎。执行分拣、编译、日志记录 |
| **Git** | 版本控制后端。确保变更可追溯、可回滚 |
| **Obsidian 编辑器** | 前端工具。提供图谱视图、双向链接、模板等功能 |

---

## L2 — Container 容器视图

```mermaid
C4Container
  title Container Diagram — KOS_LLM-Wiki 内部容器

  Person(user, "知识工作者")

  System_Boundary(vault, "Obsidian Vault") {
    Container(para, "PARA 目录结构", "文件系统", "0 Inbox → 1 Projects → 2 Areas → 3 Resources → 4 Archives")
    Container(meta, "元数据层", "YAML frontmatter", "UDC 分类号 + 标签 + 创建/更新日期")
    Container(index, "索引系统", "Markdown 表格", "PARA 维度表 + UDC 维度表 + 标签组")
    Container(templates, "模板系统", "Markdown 模板", "项目/领域/资源/概念/每日/ADR")
    Container(logs, "审计层", "Markdown 日志", "会话日志 + 操作日志 + 任务追踪")
  }

  System_Ext(codex, "Codex AI Agent")
  System_Ext(obsidian, "Obsidian 编辑器")

  Rel(user, para, "浏览与组织笔记")
  Rel(user, meta, "填写 UDC 与标签")
  Rel(user, index, "查阅与导航")
  Rel(user, codex, "发出操作指令")
  Rel(codex, para, "分拣 Inbox、创建笔记")
  Rel(codex, meta, "维护 frontmatter")
  Rel(codex, index, "同步更新索引")
  Rel(codex, logs, "写入操作日志")
  Rel(templates, meta, "提供 frontmatter 骨架")
  Rel(index, para, "汇总笔记列表")
  Rel(logs, para, "记录操作对象")
  Rel(user, obsidian, "编辑笔记")
  Rel(obsidian, para, "读取/写入文件")
  Rel(obsidian, meta, "渲染 frontmatter")
```

### L2 说明

| 容器 | 技术实现 | 职责 |
|------|----------|------|
| **PARA 目录结构** | 文件系统目录 | 按 Inbox/Projects/Areas/Resources/Archives 组织笔记 |
| **元数据层** | YAML frontmatter | 每条笔记的 UDC 分类号、标签、时间戳 |
| **索引系统** | Markdown 表格 | 总索引（PARA 表 + UDC 表 + 标签组） |
| **模板系统** | Templater 模板 | 新建笔记时的标准化骨架 |
| **审计层** | Markdown 日志 | Codex 操作的全链路审计追踪 |

---

## L3 — Component 组件视图：PARA 目录结构

```mermaid
C4Component
  title Component Diagram — PARA Directory Structure

  Container_Boundary(para, "PARA 目录结构") {
    Component(inbox, "0 Inbox", "收件箱", "待处理的临时笔记与外部剪藏")
    Component(projects, "1 Projects", "项目", "有截止日期的活跃项目")
    Component(areas, "2 Areas", "领域", "持续关注的长期主题")
    Component(resources, "3 Resources", "资源", "主题资料与参考资源")
    Component(archives, "4 Archives", "归档", "非活跃内容")
    Component(daily, "Periodic", "周期笔记", "年/月/日分层的时间轴")
  }

  Component(agent, "Codex Agent", "自动化引擎")
  Component(triage, "分拣流程", "Inbox → 目标目录")
  Component(compile, "编译流程", "raw → wiki 页面")

  Rel(inbox, triage, "被处理")
  Rel(triage, projects, "路由至", "任务类内容")
  Rel(triage, areas, "路由至", "领域类内容")
  Rel(triage, resources, "路由至", "参考类内容")
  Rel(triage, daily, "路由至", "闪念类内容")
  Rel(agent, triage, "触发")
  Rel(agent, compile, "触发")
  Rel(compile, resources, "写入 wiki 页面")
  Rel(projects, archives, "完成后归档")
  Rel(areas, archives, "不再关注后归档")
  Rel(resources, archives, "过期后归档")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

### L3 说明

| 组件 | 生命周期 | 操作者 |
|------|----------|--------|
| **0 Inbox** | 捕获 → 处理 | 人类写入，Codex 分拣 |
| **1 Projects** | 执行 → 归档 | 人类 + Codex |
| **2 Areas** | 维护 → 归档 | 人类 + Codex |
| **3 Resources** | 参考 → 归档 | 人类写入 raw，Codex 编译 wiki |
| **4 Archives** | 休眠 | Codex 自动归档 |
| **Periodic** | 日记 | 人类 + Codex |

---

## L4 — Code 层级（ADR 决策记录范式）

```mermaid
flowchart LR
  subgraph ADR[ADR 决策流]
    A[问题提出] --> B[调研可选方案]
    B --> C[评估权衡]
    C --> D{决策}
    D -->|Accepted| E[执行]
    D -->|Deprecated| F[标记弃用]
    E --> G[记录后果]
    G --> H[定期评审]
    H -->|新信息出现| D
  end

  subgraph UDC[UDC 分类流]
    I[新建笔记] --> J[确定 UDC 主类]
    J --> K{复合主题？}
    K -->|是| L[使用 : 组合]
    K -->|否| M[单类号]
    L --> N[填写 frontmatter]
    M --> N
    N --> O[更新索引]
  end

  subgraph LOG[日志审计流]
    P[Codex 操作] --> Q{操作类型}
    Q -->|分拣| R[triage.md]
    Q -->|编译| S[compile.md]
    Q -->|编辑| T[会话日志]
    Q -->|维护| U[maintenance.md]
    R --> V[追加记录]
    S --> V
    T --> V
    U --> V
  end
```

---

## 图例与使用说明

| C4 层 | 视图 | 读者 | 文件位置 |
|-------|------|------|----------|
| L1 Context | 系统全景 | 所有参与者 | `_meta/assets/c4-context.md` |
| L2 Container | 技术容器 | 架构师、开发者 | `_meta/assets/c4-container.md` |
| L3 Component | 组件细节 | 开发者 | `_meta/assets/c4-component.md` |
| L4 Code | 关键模式 | 开发者 | `_meta/assets/c4-patterns.md` |

### Mermaid 渲染要求

本系统 C4 图使用 Mermaid.js 语法。Obsidian 中需要安装 **Mermaid** 插件或启用 **Obsidian 原生 Mermaid** 支持（v1.8+ 内置）。如使用 Obsidian Publish，Mermaid 图自动渲染。

---

> **维护者：** 这些 C4 图应与 `_meta/架构说明书.md` 同步更新。当系统架构发生变更时，更新对应层次的图。


