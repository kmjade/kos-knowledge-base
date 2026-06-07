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
- 目标页面已存在且 eviewed: false → 合并更新
- 目标页面已存在且 eviewed: true → 跳过（不覆盖人工审核内容）

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
- 不修改 eviewed: true 的已审核页面（除非显式请求）
- 不覆盖人工编辑的内容
- 不对 compiled: true 的文件重复编译（幂等性）

