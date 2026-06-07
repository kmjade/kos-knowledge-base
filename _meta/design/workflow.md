---
created: 2026-06-07
updated: 2026-06-07
udc: 001.8:004.8
tags: [architecture, workflow, kos, reference]
---

# KOS_LLM-Wiki 工作流程总图

> **UDC 001.8:004.8** — 知识组织系统全生命周期工作流。
>
> 本文档定义从内容捕获到发布的端到端管道，以及 AI Agent 的操作流程。

---

## 1. 内容生命周期管道

从内容进入系统到最终成为可检索知识，经历六个阶段：

```mermaid
flowchart LR
  Capture["📥 Capture<br/>捕获"] --> Inbox["📬 0 Inbox/<br/>收件箱"]
  Inbox --> Triage{"🔀 KOS-Triage<br/>分拣"}
  Triage -->|"时效性内容"| Periodic["📅 Periodic/<br/>日记/周记"]
  Triage -->|"项目任务"| Projects["📋 1 Projects/<br/>项目笔记"]
  Triage -->|"领域知识"| Areas["📂 2 Areas/<br/>领域笔记"]
  Triage -->|"主题资料"| Resources["📚 3 Resources/<br/>资源笔记"]
  Triage -->|"已归档"| Archives["🗄️ 4 Archives/<br/>归档"]
  Triage -->|"需人工判断"| Inbox

  Resources --> Compile{"⚙️ KOS-Wiki-Compile<br/>编译"}
  Compile -->|"概念页"| Concepts["🧠 wiki/concepts/<br/>概念"]
  Compile -->|"实体页"| Entities["🏛️ wiki/entities/<br/>实体"]
  Compile -->|"来源页"| Sources["📖 wiki/sources/<br/>来源"]
  Compile -->|"reviewed: true<br/>跳过"| Resources

  Concepts --> Index["📇 更新索引<br/>_索引.md"]
  Entities --> Index
  Sources --> Index

  Index --> Sync["🌐 多语言同步<br/>en/ · zh-tw/"]
  Sync --> Publish["✅ 可检索知识"]
```

### 阶段说明

| 阶段 | 触发器 | 输出 | 负责人 |
|------|--------|------|--------|
| **Capture** 捕获 | 用户手动 / Web Clipper / 速记 | `0 Inbox/` 新 `.md` 文件 | 用户 |
| **Triage** 分拣 | `KOS-Triage` 命令 / 会话自动提示 | 文件路由到 PARA 目录 + `triage.md` 日志 | Agent |
| **Compile** 编译 | `KOS-Wiki-Compile` 命令 / 会话自动提示 | wiki/ 概念/实体/来源页 + `compile.md` 日志 | Agent |
| **Index** 索引 | 每次新增/修改笔记后 | `_索引.md` / `en/_index.md` / `zh-tw/_index.md` 更新 | Agent |
| **Sync** 多语言同步 | 新增/修改笔记时同步执行 | `en/` + `zh-tw/` 镜像目录的对应文件 | Agent |
| **Review** 人工审核 | 用户主动查看 | `reviewed: true` 标记 | 用户 |

---

## 2. Agent 会话工作流

每次 AI Agent 启动会话时的标准操作流程：

```mermaid
flowchart TD
  Start["▶️ 会话开始"] --> Check{"🔍 检测状态"}
  Check --> DirCheck["📂 确认当前工作目录<br/>J:/KOS_LLM-Wiki"]
  DirCheck --> BuildContext["📖 读取上下文<br/>AGENTS.md / Home.md"]

  BuildContext --> InboxCheck{"📬 0 Inbox/<br/>有待处理文件？"}
  InboxCheck -->|"有"| PromptTriage["💡 提示用户运行 KOS-Triage"]
  InboxCheck -->|"无"| ResCheck{"📚 3 Resources/<br/>有未编译文件？"}

  ResCheck -->|"有"| PromptCompile["💡 提示用户运行 KOS-Wiki-Compile"]
  ResCheck -->|"无"| Ready["✅ 就绪，等待用户指令"]

  PromptTriage --> Ready
  PromptCompile --> Ready

  Ready --> Command["👤 用户指令"]

  Command -->|"KOS-Triage"| ExecuteTriage["🔀 执行分拣"]
  Command -->|"KOS-Wiki-Compile"| ExecuteCompile["⚙️ 执行编译"]
  Command -->|"新增笔记"| NewNote["📝 创建笔记"]
  Command -->|"修改笔记"| EditNote["✏️ 编辑笔记"]
  Command -->|"复盘 / 查询"| Query["🔎 查询与报告"]

  ExecuteTriage --> Log["📝 写入日志<br/>_logs/operations/"]
  ExecuteCompile --> Log
  NewNote --> SyncMulti["🌐 多语言同步"]
  EditNote --> SyncMulti

  SyncMulti --> UpdateIndex["📇 更新索引"]
  UpdateIndex --> Done["✅ 完成"]
  Log --> Done
  Query --> Done
```

---

## 3. KOS-Triage 分拣流程

Inbox 文件从收件箱路由到正确目录的决策树：

```mermaid
flowchart TD
  File["📄 Inbox 文件"] --> ReadFM["📖 读取 frontmatter"]

  ReadFM --> Already{"triage.status: processed？"}
  Already -->|"是"| Skip["⏭️ 跳过（幂等性）"]
  Already -->|"否"| Analyze["🔍 四维分析"]

  Analyze --> DimA{"A 时效性判定"}
  DimA -->|"含日期 + 动作动词"| Ephemeral["ephemeral\n→ Periodic/"]
  DimA -->|"含项目名 + 任务"| Operational["operational\n→ 1 Projects/"]
  DimA -->|"技术文章/教程"| Reference["reference\n→ 3 Resources/"]
  DimA -->|"原则/方法论"| Evergreen["evergreen\n→ 2 Areas/"]

  Ephemeral --> DimB
  Operational --> DimB
  Reference --> DimB
  Evergreen --> DimB

  DimB{"B 主题识别"} -->|"匹配项目名"| ProjectMatch["关联项目"]
  DimB -->|"匹配领域关键词"| AreaMatch["关联领域"]
  DimB -->|"无匹配"| NeedsMapping["needs-mapping"]

  ProjectMatch --> DimC
  AreaMatch --> DimC
  NeedsMapping --> DimC

  DimC{"C 类型判定"} -->|"动作 + 交付物"| Task["task"]
  DimC -->|"纯知识内容"| RefType["reference"]
  DimC -->|"碎片想法 < 50 字"| Fleeting["fleeting"]
  DimC -->|"含人名"| People["people"]
  DimC -->|"webclipper"| Clipping["clipping"]

  Task --> Route["🚀 执行路由"]
  RefType --> Route
  Fleeting --> Route
  People --> Route
  Clipping --> Route

  Route --> WriteFM["📝 写入 frontmatter"]
  WriteFM --> Move["📂 移动到目标目录"]
  Move --> LogTriage["📋 记录 triage.md 日志"]
```

### 路由目标矩阵

| 四维分析结果 | 目标目录 | 说明 |
|-------------|----------|------|
| ephemeral | `Periodic/YYYY/MM/` | 按日期归档的时效性内容 |
| operational | `1 Projects/<项目名>/` | 匹配到项目则归入，否则标记 |
| reference | `3 Resources/<子库>/` | 按 UDC 归入 000-Knowledge 下对应子库 |
| evergreen | `2 Areas/<领域>/` | 持续关注的责任领域 |
| fleeting | `0 Inbox/_processed/` | 简短碎片，标记后归档 |
| people | `2 Areas/人脉/` 或 `3 Resources/<子库>/` | 人物笔记 |
| clipping | `3 Resources/<子库>/raw/` | Web 剪藏原始资料 |

---

## 4. KOS-Wiki-Compile 编译流程

从原始资料到结构化 wiki 页面的六步管道：

```mermaid
flowchart TD
  Source["📄 原始资料\n3 Resources/<子库>/"] --> Step1

  subgraph Step1["Step 1 — 来源分析"]
    A1["读取 frontmatter + 全文"]
    A2["确定主题领域与 UDC"]
    A3["输出：待编译文件清单"]
  end

  Step1 --> Step2

  subgraph Step2["Step 2 — 概念提取"]
    B1{"页面类型判定"}
    B1 -->|"核心理论/方法/原理"| Concept["🧠 概念页 Concept"]
    B1 -->|"工具/框架/人物"| Entity["🏛️ 实体页 Entity"]
    B1 -->|"论文/书籍引用"| SourcePg["📖 来源页 Source"]
  end

  Step2 --> Step3

  subgraph Step3["Step 3 — 页面创建/更新"]
    C1{"目标页面已存在？"}
    C1 -->|"不存在"| Create["按模板新建"]
    C1 -->|"存在 + reviewed: false"| Merge["合并更新"]
    C1 -->|"存在 + reviewed: true"| Skip["⏭️ 跳过"]
  end

  Step3 --> Step4

  subgraph Step4["Step 4 — 交叉引用"]
    D1["扫描 [[链接]]"]
    D2["追加反向引用到目标页"]
  end

  Step4 --> Step5

  subgraph Step5["Step 5 — 元数据写入"]
    E1["compiled: true"]
    E2["compiled_at: 时间戳"]
    E3["compiled_by: KOS-Wiki-Compile"]
  end

  Step5 --> Step6

  subgraph Step6["Step 6 — 日志与报告"]
    F1["写入 compile.md"]
    F2["输出编译统计"]
  end
```

### 编译阈值

| 条件 | 处理方式 |
|------|----------|
| 文件 < 50 字 | 跳过，标记 `too-short` |
| 文件 > 10,000 字 | 跳过，标记 `long-doc`，建议拆分 |
| `compiled: true` 且 `reviewed: true` | 跳过（保护人工审核内容） |
| `compiled: true` 且 `reviewed: false` | 重新编译合并 |

---

## 5. 多语言同步流程

新增或修改笔记后，同步三个语言版本的步骤：

```mermaid
flowchart LR
  CN["🇨🇳 简体中文 (root)"] -->|"翻译"| EN["🇬🇧 English (en/)"]
  CN -->|"转换"| TW["🇭🇰 繁體中文 (zh-tw/)"]

  EN -->|"索引更新"| IndexEN["📇 en/_index.md"]
  TW -->|"索引更新"| IndexTW["📇 zh-tw/_index.md"]

  CN -->|"索引更新"| IndexCN["📇 _索引.md"]
```

### 同步规则

| 元素 | 同步方式 |
|------|----------|
| `created` 日期 | 三语言保持一致 |
| `udc` 分类号 | 三语言保持一致 |
| `tags` 标签 | 三语言保持一致 |
| 文件命名 | 简体中文→中文空格；English→kebab-case；繁体中文→中文空格 |
| 内容正文 | 分别翻译，保持结构对齐 |
| 镜像路径 | `en/` + `zh-tw/` 镜像根目录 PARA 结构 |

---

## 6. 触发器汇总

| 触发方式 | 命令/条件 | 执行动作 |
|----------|-----------|----------|
| **完整分拣** | `KOS-Triage` | 全量扫描 Inbox |
| **单文件分拣** | `KOS-Triage --file <路径>` | 仅处理指定文件 |
| **分拣状态** | `KOS-Triage --status` | 输出 Inbox 待处理概览 |
| **完整编译** | `KOS-Wiki-Compile` | 全量扫描 3 Resources |
| **按主题编译** | `KOS-Wiki-Compile --topic <子库>` | 仅编译指定子库 |
| **单文件编译** | `KOS-Wiki-Compile --file <路径>` | 仅编译单个文件 |
| **编译状态** | `KOS-Wiki-Compile --status` | 输出编译状态总览 |
| **会话自动提示** | Inbox 有未处理 / 资源未编译 | 提示用户执行对应操作 |

---

## 7. 相关文档

| 文档 | 路径 | 说明 |
|------|------|------|
| 架构说明书 | [[_meta/架构说明书\|架构说明书]] | 系统架构总览 |
| AGENTS.md | [[AGENTS\|AGENTS.md]] | AI 助手操作规范 |
| KOS-Triage 详细设计 | [[_meta/design/KOS-Triage详细设计\|KOS-Triage 设计]] | 分拣引擎详细设计 |
| KOS-Wiki-Compile 详细设计 | [[_meta/design/KOS-Wiki-Compile详细设计\|KOS-Wiki-Compile 设计]] | 编译引擎详细设计 |
| 子模块分解 | [[_meta/v1.1-子模块分解\|子模块分解]] | 可执行工作包 |
| ADR 索引 | [[_meta/adr/README\|ADR 索引]] | 架构决策记录 |
