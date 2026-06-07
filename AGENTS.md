# AGENTS — KOS_LLM-Wiki 维护指南

本文件为 AI 助手（如 Codex）维护此知识库的操作规范。

---

## 系统概述

KOS_LLM-Wiki 是一个融合 **PARA**、**UDC** 与 **LLM-Wiki** 的个人知识管理系统。

- **PARA** — 文件夹级别分类（Inbox / Projects / Areas / Resources / Archives）
- **UDC** — 每个笔记标注国际十进分类号
- 支持三语言：简体中文（根目录）、English（`en/`）、繁體中文（`zh-tw/`）

## 目录结构

```
/
├── 0 Inbox/      # 收件箱：待处理的临时笔记
├── 1 Projects/   # 项目笔记
├── 2 Areas/      # 领域笔记
├── 3 Resources/  # 资源笔记
│   ├── PARA/
│   ├── UDC/
│   └── LLM-Wiki/
├── 4 Archives/   # 归档
├── _logs/       # 日志记录
├── _meta/         # 模板和系统文件
├── Periodic/       # 📅 周期笔记（年/月/日分层）
├── en/            # 英文版（镜像结构）
├── zh-tw/         # 繁体中文版（镜像结构）
├── Home.md        # 首页
├── _索引.md       # 总索引
└── AGENTS.md      # 本文件
```

## 新增笔记规范

### 1. 文件命名
- 简体中文/繁体中文：中文描述，空格分隔（如 `提示工程.md`）
- English：kebab-case（如 `prompt-engineering.md`）

### 2. 前置元数据（frontmatter）

每条笔记必须包含以下字段：

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <UDC类号>
tags: [tag1, tag2]
---
```

### 3. UDC 分类规则

| 类号      | 类目             |
|-----------|------------------|
| 001.8     | 知识组织与管理   |
| 004.8     | 人工智能 / LLM   |
| 025.4     | 分类法           |
| 001.8:005 | PARA 方法        |
| 001.8:004.8 | 知识组织与 AI  |

组合使用 `:` 符号表达复合主题。

### 4. 标签规则

- PARA 所属：`#area/*`（领域）、`#resource/*`（资源）、`#project`（项目）
- 跨语言翻译：三语言版本保持相同标签
- 新增标签需同时在 `_索引.md` 的标签分组中记录

### 5. 多语言同步

新增或修改笔记时，需同步三个版本（简体、繁体、英文）：
- 简体中文 -> 根目录
- English -> `en/`
- 繁體中文 -> `zh-tw/`

### 6. 更新索引

每次新增笔记后，同步更新以下索引文件：
- `_索引.md`（简体）- PARA 表、UDC 表
- `en/_index.md`（英文）
- `zh-tw/_index.md`（繁体）

### 7. 跨语言链接规则

三语言版本间的 wiki 链接遵循以下优先级策略：

#### 场景 A：同语言存在对应页面 → 指向同语言

当目标页面在当前语言中存在翻译版时，必须指向同语言版本。

| 场景 | 正确 | 错误 |
|------|------|------|
| EN 页面引用另一 EN 页面 | [[llm-fundamentals]] | [[LLM 基础]] |
| TW 页面引用另一 TW 页面 | [[LLM 基础]] | [[LLM 基礎]]（文件名为简体） |

注意：EN 文件名使用 kebab-case（实际 .md 文件名），而非显示名。

#### 场景 B：同语言不存在对应页面 → 指向 CN 原文（fallback）

当目标页面在当前语言中无翻译版时，使用完整路径指向 CN 原文：

| 场景 | 示例 |
|------|------|
| EN 引用仅有 CN 的页面 | [[3 Resources/000-Knowledge/xxx/xxx|显示名]] |
| TW 引用仅有 CN 的页面 | [[3 Resources/000-Knowledge/xxx/xxx|顯示名]] |

#### 场景 C：共享内容（索引/模板/分类页）→ 指向 CN

以下类型内容统一指向 CN 版本（不考虑同语言是否存在）：
- 索引页（_索引.md / _index.md）→ 使用语言前缀：[[en/_index]] / [[zh-tw/_index]]
- 模板文件（_meta/Templates/）→ CN 路径
- 分类法页（UDC/DDC 体系）→ CN 路径
- 原始素材（`raw/` 目录）→ CN 路径

#### 例外：跨语言链接到索引

EN 页面中引用索引：[[en/_index|display text]]（前缀 en/）
TW 页面中引用索引：[[zh-tw/_index|顯示文字]]（前缀 zh-tw/）
CN 页面中引用索引：[[_索引]]（无前缀）

#### 新增页面时的链接默认规则

创建新翻译页面时：
1. 检查目标语言是否有对应的同语言页面
2. 有 → 使用场景 A（同语言链接）
3. 无 → 使用场景 B（fallback 到 CN）
4. 共享内容 → 使用场景 C（指向 CN）
5. 更新后运行 KOS-Link --path <目录> 验证零断链

## KOS-Triage 分拣引擎

### 触发方式
- 手动：用户输入 `KOS-Triage`，对所有未处理文件执行一次完整分拣
- 单文件：用户输入 `KOS-Triage --file <路径>`，仅处理指定文件
- 状态查询：用户输入 `KOS-Triage --status`，返回当前 Inbox 待处理概览
- 自动提示：每次会话开始，检测 0 Inbox/ 中是否有 status 不为 processed 的文件

### 扫描规则
1. 读取 0 Inbox/ 根目录下所有 .md 文件
2. 忽略 _processed/ 子目录内的文件
3. 忽略 frontmatter 中标记 `triage.status: processed` 的文件（幂等性）
4. 忽略非 .md 文件（.png, .pdf 等，仅记录到日志）

### 四维分析规则

**维度 A — 时效性判定**
扫描文件全文，按以下优先级匹配：
- 含 `YYYY-MM-DD` 日期 + 动作动词（提交/发送/完成/买/约/提醒）→ ephemeral
- 含项目名+任务描述，无明确截止 → operational
- 技术文章/论文/教程/书摘，无时效性关键词 → reference
- 原则/方法论/核心概念表述 → evergreen

动作动词表：提交,发送,完成,买,约,提醒,review,submit,send,complete,buy,remind

**维度 B — 主题识别**
对文件全文做关键词匹配，按以下优先顺序匹配：
1. 项目名匹配：扫描 1 Projects/ 下所有 README.md 中的项目名
2. 领域关键词匹配：对照下述关键词表
3. 无匹配 → 标记 topic: needs-mapping

**维度 C — 类型判定**
- 含动作动词 + 可交付物描述 → task
- 含知识性内容，无动作动词 → reference
- 纯碎片想法，< 50 字 → fleeting
- 含人名称谓 + 背景 → people
- 标记 origin: webclipper → clipping

**维度 D — 复杂度评估**
- < 500 字 + 单主题 → low
- 500–2000 字 + 多主题 → medium
- > 2000 字 或 含多个独立段 → high

### 路由执行
1. 复制文件到目标目录（保留原始内容不变）
2. 在目标文件顶部添加标准 frontmatter
3. 对 task 类型：追加 Obsidian Task 条目到 tasks.md 或 Periodic/
4. 将原始文件移入 0 Inbox/_processed/
5. 追加日志到 _logs/operations/triage.md

### 输出要求
分拣完成后，向用户输出以下格式的报告：

```markdown
## KOS-Triage 结果
处理 N 个文件 → M 个已路由 + K 个待确认
├── 成功路由：
│   ├── [路径] ← [文件名] ([生命周期])
│   └── ...
└── 待人工确认：
    └── [文件名] → 原因
建议：...
```

### 禁止行为
- 不删除原始文件（仅复制+移动原始到 _processed/）
- 不修改 raw 中的文件（本系统无 raw/ 层，但保持原则）
- 不强制分类低置信度内容（标记 needs-review）
- 不对已标记 triage.status: processed 的文件重复处理

## 表格格式

所有 Markdown 表格必须使用对齐的分隔行：

```
| 列名                         | 列名                         |
|------------------------------|------------------------------|
| 内容                         | 内容                         |
```

表格内 Obsidian wiki 链接中的 `|` 须转义为 `\|`。

## 模板

模板位于各语言版本的 `_meta/Templates/`：
- `project-template.md` / `项目模板.md`
- `area-template.md` / `领域模板.md`
- `resource-template.md` / `资源模板.md`
- `concept-template.md` / `概念模板.md`
- `daily-note-template.md` / `每日笔记模板.md`

## KOS-Wiki-Compile 编译引擎


### 触发方式
- 完整编译：用户输入 KOS-Wiki-Compile，对所有未编译原始资料执行编译
- 按主题：用户输入 KOS-Wiki-Compile --topic <子库名>，仅编译指定子库（LLM-Wiki / PARA / UDC）
- 单文件：用户输入 KOS-Wiki-Compile --file <路径>，仅编译单个文件
- 状态查询：用户输入 KOS-Wiki-Compile --status，返回编译状态总览
- 自动提示：每次会话开始，检测 3 Resources/ 中存在 compiled: false 的原始资料则提示用户

### 扫描规则
1. 读取 3 Resources/ 下所有子库目录中的 .md 文件
2. 若 M3 子库分层已完成，优先扫描 raw/ 子目录；否则扫描子库根目录
3. 忽略 frontmatter 中 compiled: true 的文件（幂等性）
4. 忽略非 .md 文件（仅记录到日志）
5. 文件 < 50 字 → 标记 	oo-short，跳过编译
6. 文件 > 10000 字 → 标记 long-doc，建议人工拆分

### 编译流程（六步管道）

**Step 1 — 来源分析**
读取文件 frontmatter 和全文，确定主题领域。
输出：待编译文件清单 + 各文件元数据摘要。

**Step 2 — 概念提取**
从内容中识别可编译的知识单元，决定页面类型：
- 核心理论/方法/原理 → **概念页 (Concept)**
- 工具/框架/产品/人物 → **实体页 (Entity)**
- 论文/文章/书籍引用 → **来源页 (Source)**

**Step 3 — 页面创建/更新**
使用对应模板创建或更新 Wiki 页面：
- 目标页面不存在 → 按模板新建
- 目标页面已存在且 
eviewed: false → 合并更新
- 目标页面已存在且 
eviewed: true → 跳过（不覆盖人工审核内容）

**Step 4 — 交叉引用**
扫描新页面中的 [[链接]]，追加到目标页面的反向引用区。
关联原因推导：

| 上下文 | 关联原因 |
|--------|----------|
| "参见 [[X]]" | 直接引用 |
| "[[X]] 是一种..." | 主体定义 |
| "与 [[X]] 不同" | 比较引用 |
| "基于 [[X]]" | 依赖关系 |

**Step 5 — 索引更新**
更新 _索引.md、en/_index.md、zh-tw/_index.md，新增条目。

**Step 6 — 日志记录**
写入 _logs/operations/compile.md。

### 冲突处理
| 场景 | 策略 |
|------|------|
| 新内容与现有一致 | 跳过（不重复写入） |
| 新内容补充现有 | 追加到对应章节 |
| 新内容与现有矛盾 | 双方保留，标记 conflict: true |
| 完全覆盖 | 旧版本移入页面 _archived/ 子目录 |

### 输出要求
编译完成后，向用户输出以下格式的报告：

`markdown
## KOS-Wiki-Compile 结果
处理 N 个来源 → 新建 M 个 + 更新 K 个 + 跳过 S 个
├── 新建：
│   ├── [页面路径] ([类型]) ← [来源文件]
│   └── ...
├── 更新：
│   ├── [页面路径] (新增 X 章节)
│   └── ...
├── 跳过：
│   └── [来源文件] (原因: 已编译/太短/太长)
└── 冲突标记：C 个
交叉引用追加：L 个链接
建议：...
`

### 禁止行为
- 不修改原始 raw 文件（src 只读原则）
- 不自动删除任何文件
- 不修改 
eviewed: true 的已审核页面（除非显式请求）
- 不覆盖人工编辑的内容
- 不对 compiled: true 的文件重复编译（幂等性）

## 周期自动化

### Day-Review

**触发方式：**
- 自动：每次 Codex 会话启动时，Context 加载完毕后顺带执行
- 手动：用户输入 Day-Review，强制创建今日笔记

**执行规则：**
1. 检查 Periodic/YYYY/MM/YYYY-MM-DD.md 是否存在
2. 存在 → 跳过（幂等性）
3. 不存在 → 使用 _meta/Templates/每日笔记模板.md 创建
4. 填充今日日期到 created / updated / day / week 字段
5. 扫描 1 Projects/ 下未完成任务，填充到今日关注
6. 记录操作到 _logs/operations/maintenance.md

**输出示例：**

    📅 今日笔记已创建：Periodic/2026/06/2026-06-07.md
    📋 来自项目任务：3 个未完成任务已填充

### Week-Review

**触发方式：**
- 手动：用户输入 Week-Review，生成当期周报
- 按周指定：Week-Review --week 2026-W23，生成指定周报
- 状态查询：Week-Review --status，返回最近一期周报信息

**执行规则：**
1. 检查 _logs/reports/YYYY-WW.md 是否存在（幂等性）
2. 从 _logs/operations/triage.md 提取本周分拣统计
3. 从 _logs/operations/compile.md 提取本周编译统计
4. 从 Periodic/YYYY/MM/ 统计本周日记数量
5. 扫描 3 Resources/ 按 updated 日期筛选本周新增/修改文件
6. 读取 1 Projects/ 下各项目状态
7. 写入 _logs/reports/YYYY-WW.md

### Month-Review

**触发方式：**
- 手动：Month-Review
- 按月指定：Month-Review --month 2026-06
- 状态查询：Month-Review --status

**执行规则：**
1. 检查 _logs/reports/YYYY-MM.md 是否存在（幂等性）
2. 聚合本月所有周报（从 _logs/reports/ 筛选 period: weekly）
3. 统计本月操作汇总
4. 统计各子库本月增长
5. 写入 _logs/reports/YYYY-MM.md

### Quarter-Review

**触发方式：**
- 手动：Quarter-Review
- 按季度指定：Quarter-Review --quarter 2026-Q2
- 状态查询：Quarter-Review --status

**执行规则：**
1. 检查 _logs/reports/YYYY-QQ.md 是否存在（幂等性）
2. 聚合本季度所有月报
3. 统计本季度项目启动/完成情况
4. 统计子库季度增长
5. 写入 _logs/reports/YYYY-QQ.md

### Year-Review

**触发方式：**
- 手动：Year-Review
- 按年指定：Year-Review --year 2026
- 状态查询：Year-Review --status

**执行规则：**
1. 检查 _logs/reports/YYYY.md 是否存在（幂等性）
2. 聚合全年所有季度报告
3. 统计全年总览指标
4. 统计各季度趋势
5. 记录 ADR 变更历史
6. 写入 _logs/reports/YYYY.md

### 禁止行为
- 不修改已有报告（幂等性优先）
- 不删除已有日记
- 不覆盖用户手动编写的笔记
- 不对空周期生成报告（无数据则不创建）


## KOS-Link 系统检查


### 触发方式
- 全量检查：用户输入 `KOS-Link`，扫描所有 `.md` 文件
- 指定目录：`KOS-Link --path <目录>`，仅扫描指定目录
- 单文件：`KOS-Link --file <路径>`，仅检查单个文件
- 自动修复：`KOS-Link --fix`，检查并修复可修复项
- 状态摘要：`KOS-Link --status`，只输出问题统计

### KOS-Link 知识关联

知识关联系统提供基于链接的知识导航，位于 `_meta/link/`。

| 子系统 | 路径 | 用途 |
|--------|------|------|
| Dashboard | `_meta/link/Dashboard/` | 全局视图与收件箱面板 |
| Index | `_meta/link/Index/` | 字母索引，快速定位内容 |
| MOCs | `_meta/link/MOCs/` | Maps of Content，主题聚合 |

### 检查项

**L1 — Frontmatter 完整性**
检查每个 `.md` 文件的 frontmatter 是否包含 `created`、`updated`、`udc`、`tags` 字段，以及日期格式是否正确。
排除规则：`_logs/`、`0 Inbox/` 下的文件跳过 L1 检查（这些目录的 frontmatter 规则不同）。

**L2 — UDC 索引验证**
检查 `udc` 类号是否在 `3 Resources/000-Knowledge/025-UDC/UDC 分类索引.md（无独立映射文件，以此为对照源）` 的映射表中，格式是否匹配 `\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*`。
排除规则：`_logs/`、`0 Inbox/`、`Periodic/`、`_meta/` 下的文件跳过 L2 检查。

**L3 — 断链检测**
扫描所有 `[[wiki链接]]` 和 `[markdown](link.md)`，检查目标文件是否存在。
忽略外部 URL（以 `http://` 或 `https://` 开头）。
检测循环引用链超过 10 跳时报 info。
排除规则：忽略 `]]` 后的显示文本部分。

**L4 — 跨语言一致性**
检查三语言版本（根目录 / en/ / zh-tw/）是否齐全，udc 和 tags 是否一致。
匹配规则：简体路径 `3 Resources/xxx.md` → 英文 `en/3 Resources/xxx.md` → 繁体 `zh-tw/3 Resources/xxx.md`。
排除规则：`_logs/`、`0 Inbox/`、`Periodic/` 不要求三语言同步。

**L5 — 未归档项目**
检查 `1 Projects/` 中 `status: completed` 但仍在项目目录中的项目。
检查 `tasks.md` 中所有任务标记 `[x]` 但 `status` 仍是 `active` 的项目。

### 自动修复（--fix）

执行 `--fix` 时，先显示待修复清单并请求用户确认，确认后执行：

| 问题 | 自动修复 | 说明 |
|------|----------|------|
| `created` 缺失 | 使用当前日期填充 | 无风险 |
| `updated` 缺失 | 使用当前日期填充 | 无风险 |
| UDC 格式错误 | 标准化为 `\d{3}(\.\d+)?` 格式 | 仅修复格式，不改类号 |
| 跨语言文件缺失 | 复制简体文件创建对应空文件（需确认） | 仅创建骨架 |

不可自动修复：`udc` 缺失、`tags` 缺失、断链、项目状态（需人工判断）。

### 报告格式
    [KOS-Link Report]
    \u2705 正常: N 文件
    \u274c 错误: N | \u26a0 警告: N | \u2139 信息: N
    \u2705 可自动修复: N

详细条目格式：

    [等级] L{N} — {文件路径}: {描述}

### 禁止行为
- 不加 `--fix` 时不修改任何文件
- 不自动删除文件
- 不自动添加 udc/tags（需人工判断）
- 不修改 `reviewed: true` 的文件
- 不扫描 `.git/`、`node_modules/` 等非仓库目录


## 搜索层（Dataview 查询库）

本仓库使用 **Obsidian Dataview 插件** 进行元数据搜索与组合查询。

### 安装
在 Obsidian 设置 → 社区插件中搜索 Dataview 并启用。

### 预定义查询库

_meta/queries/ 目录包含 6 个可直接使用的查询：

| 查询文件 | 用途 | 备注 |
|----------|------|------|
| by-udc.md | 按 UDC 分类列出所有笔记 | 查看知识体系分布 |
| recently-modified.md | 最近 20 篇修改笔记 | 快速跟进变更 |
| i18n-status.md | 三语言同步状态对比 | 定位缺失的镜像文件 |
| by-tag.md | 按标签聚合资源 | 浏览特定主题 |
| active-projects.md | 活跃项目清单 | 项目总览 |
| inbox-pending.md | Inbox 待处理文件 | 收件箱清空检查 |

### 使用方式

在 Obsidian 中打开任意 .md 文件，将查询内容（dataview 代码块）复制到笔记中即可实时渲染结果。

### 常用搜索语法速查

| 场景 | 示例 |
|------|------|
| 按 UDC 筛选 | WHERE udc = "004.8" |
| 按路径筛选 | FROM "3 Resources" |
| 按标签筛选 | WHERE contains(tags, "ai") |
| 日期范围 | WHERE created >= date("2026-01-01") AND created < date("2026-07-01") |
| 组合条件 | WHERE udc LIKE "004%" AND contains(tags, "llm") |
| 排序 + 限制 | SORT updated DESC LIMIT 10 |
## Context 加载

### 会话开始协议

每次新会话开始时执行以下上下文加载流程：

**Step 1 — 加载核心文档**
1. AGENTS.md — 系统规则与操作规范
2. _索引.md — 知识库总索引
3. Home.md — 首页导航

**Step 2 — 检查活跃工单**
扫描 1 Projects/ 下所有 status: active 的工单，输出：

    活跃工单：{N}
    - [{优先级}] {工单名} — {目标简述}
    - [...]

**Step 3 — 检查今日日志**
检查  6-Daily/ 是否存在当日笔记（YYYY-MM-DD.md），若不存在则提示创建。

**Step 4 — 检查 Inbox**
检查  0-Inbox/ 是否有待处理文件，若有则提示执行 Triage。

**Step 5 — 检查编译状态**
检查 3 Resources/ 下是否存在 compiled: false 的原始资料，若有则提示执行 Compile。

### 会话开场信息模板

每场会话开场输出：

``
## KOS_LLM-Wiki 会话 

**活跃工单：** {数量}
{列表}

**待办提示：**
- [Inbox] {文件数} 个待处理
- [Compile] {数量} 个未编译文件
- [Daily] 每日笔记 {存在/缺失}
``

### 禁止行为
- 不自动加载 _logs/ 下全部日志文件（仅按需加载）
- 不加载 .git/、
ode_modules/ 目录
- 不自动修改 AGENTS.md 以外的系统文件
--- Context ---
索引: [路径] (条目数)
收件箱: [待处理数] 个文件
活跃项目: [项目列表]
今日笔记: [存在/不存在]
最近操作: [摘要]
-----------------
```

## Hooks

### 会话开始协议

参见 [[#Context 加载]] 章节的完整流程（Step 1-5）。会话开始时的自动操作：

1. **Context 加载** — 读取核心文档、检查工单、检查今日日志、检查 Inbox、检查编译状态
2. **状态摘要** — 输出结构化上下文块
3. **Triage 检查** — 若 Inbox 有待处理文件，提示执行 Triage

### 会话结束协议

会话结束时自动执行以下收尾操作：

1. **操作日志** — 将本次会话的关键操作写入 `_logs/operations/maintenance.md`
2. **状态持久化** — 更新当日笔记中的 Agent 操作记录区块
3. **清理** — 删除会话过程中创建的临时文件
4. **提示** — 若有未完成的 Triage 或 Compile，提醒用户下次处理

### Hooks 流程图

```
[Session Start]
    -> Context Load
    -> Daily Check
    -> Status Summary
    -> [User Interaction...]
    -> [Optional: Triage / Compile / Lint...]
[Session End]
    -> Operation Log
    -> Status Persist
    -> Cleanup
```

## Daily Open


### 触发方式
- 自动提示：会话开始时，若  6-Daily/ 无当日笔记，提示用户创建
- 手动创建：用户输入 Daily Open

### 执行流程

**Step 1 — 检查存在性**
检查  6-Daily/{YYYY-MM-DD}.md 是否存在。

**Step 2 — 创建（若缺失）**
1. 复制 _meta/Templates/每日笔记模板.md 到  6-Daily/{YYYY-MM-DD}.md
2. 替换模板占位符 {{date:YYYY-MM-DD}} 和 {{date:YYYY-WW}} 为实际值

**Step 3 — 填充任务清单**
扫描 1 Projects/ 下 status: active 的工单，提取未完成任务写入：

`
## 今日关注
- [ ] 来自 {工单名}: {任务描述}
`

**Step 4 — 填充 Agent 操作记录**
初始化 Agent 操作记录表：

`
| 操作 | 文件 | 状态 |
|------|------|------|
| Daily Open | 06-Daily/{YYYY-MM-DD}.md | created |
`

### 禁止行为
- 不覆盖已有的当日笔记（仅创建缺失时执行）
- 不修改已标记 
eviewed: true 的笔记
- 不自动执行 Triage/Compile 等其他操作（仅提示）
## Weekly Review


### 触发方式
- 手动触发：用户输入 Weekly Review
- 自动提示：每周一首次会话时检测前一周是否有周报，若无则提示创建

### 执行流程

**Step 1 — 创建/更新周报**
检查  6-Daily/ 下是否存在 Week-{YYYY-WW}.md：
- 不存在 → 使用 _meta/Templates/周记模板.md 创建
- 已存在 → 在现有内容上追加本周汇总

**Step 2 — 操作聚合**
从 _logs/operations/maintenance.md 提取本周（周一至周日）的所有操作记录，按日期汇总：

    ## 本周操作汇总（Week {N}）
    | 日期 | 操作 | 涉及模块 |
    |------|------|----------|
    | YYYY-MM-DD | {操作简述} | {模块} |

**Step 3 — 知识增长统计**
对比本周与上周的笔记数量变化：

    ## 知识增长统计
    - 新增页面：{N}
    - 更新页面：{N}
    - 当前总页面：{N}
    - 本周活跃模块：{模块列表}

统计来源：遍历 3 Resources/ 和 2 Areas/ 下文件 frontmatter 中的 created 和 updated 字段。

**Step 4 — 下周建议**
基于以下输入生成建议：
1. 活跃工单中未完成的任务
2. 本周未编译的原始资料数量
3. Inbox 待处理文件数
4. 周期自动化状态（Daily Open 是否正常运行）

    ## 下周建议
    1. {建议1}
    2. {建议2}
    ...

### 周报存档
周报存放在  6-Daily/ 目录下，文件名为 Week-{YYYY-WW}.md。
不归档旧周报（保留在  6-Daily/ 中作为时间线记录）。
## Hooks 配置

### 会话开始协议

每次新会话启动时执行：

1. **Context 加载**（参见「Context 加载」章节）
   - 加载 AGENTS.md、_索引.md、Home.md
   - 扫描活跃工单、Inbox、Compile 状态

2. **Daily Open 检查**（参见「Daily Open」章节）
   - 检查当日笔记是否存在，缺失则提示创建

3. **状态摘要输出**
   输出当前会话的上下文摘要：

``
## KOS_LLM-Wiki 会话开始
日付：YYYY-MM-DD
活跃工单：{N}
待办：Inbox={N} | Compile={N} | Daily={status}
``

### 会话结束协议

每次会话结束时执行：

1. **日志写入**（若会话中有文件操作）
   追加记录到 _logs/operations/maintenance.md：
   - 日期
   - 操作摘要
   - 涉及文件清单
   - 状态（completed / partial / pending）

2. **状态检查**
   - 若有未完成任务 → 更新对应工单 tasks.md
   - 若有未关闭的问题 → 保持工单 active

3. **清理**
   - 不保留中间产物（测试夹具等）
   - 不修改已 review 的文件

### 会话生命周期

``
[Session Start]
    → Context Load
    → Daily Check
    → Status Summary
    → [User Interaction...]
    → [Optional: Triage / Compile / Lint...]
[Session End]
    → Operation Log
    → Status Persist
    → Cleanup
``
## People CRM

### 人物库位置
人物页面位于 3 Resources/People/wiki/entities/。

### 人物分类
采用 Tier 分级：

| Tier | 定义 | 示例 |
|------|------|------|
| 1 | 核心圈 — 频繁互动者 | 家人、同事 |
| 2 | 重要联系人 — 定期互动者 | 客户、导师 |
| 3 | 背景人物 — 知识库引用 | 学者、历史人物 |

### 使用规则
- 新增人物：使用 _meta/Templates/实体模板.md 创建
- 标签规则：#people/tier-{N}
- UDC：人物传记使用 929 子类
- 跨语言：人物页统一使用英文文件名，内容可用中文
- 互动记录：写入 wiki/log.md

### 维护
- Tier 3 人物自动从 vault 扫描创建（stub）
- 每周 Review 时检查 Tier 1/2 人物是否有新互动需记录
## 移动端捕获

### 概览
移动端捕获通过 iOS Shortcut 将内容快速送入  0-Inbox/，由 Triage 引擎统一处理。
详细方案见 _meta/design/mobile-capture.md。

### 捕获流程
1. 移动端 → iOS Shortcut →  0-Inbox/{文件}.md
2. Triage 时检测 	ags: [inbox, mobile] → 按规则路由
3. 路由后移除 inbox 标签，添加目标子库标签

### 支持的内容类型
- 快速想法：纯文本，无格式
- 网页剪藏：标题 + URL + 选中文本
- 拍照捕获：图片 + 引用文件

### 同步要求
- iOS Obsidian 需启用同步（iCloud / Obsidian Sync）
- 桌面端启动时自动检查 Inbox 是否有新文件

