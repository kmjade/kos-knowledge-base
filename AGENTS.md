# AGENTS �?KOS_LLM-Wiki 维护指南
- `_meta/ai-memory/全局状�?md` �?跨会话状�?- `_agents/life/` �?Life+AI 三支柱角色定�?
# AGENTS �?KOS_LLM-Wiki 维护指南

> 本仓库是个人知识管理系统�?*非软件项�?* �?无构建系统、无测试套件、无应用代码。通过 Obsidian 管理，AI 辅助分拣、编译与链接校验�?> `CLAUDE.md` 是快速上手参考；本文件是权威行为规范�?
---

## 目录结构

```
├── 0 Inbox/          # 待分拣笔记（仅根目录 .md；_processed/ 内文件忽略）
├── 1 Projects/       # 有目标与截止日期的项�?├── 2 Areas/          # 持续关注的长期领�?├── 3 Resources/      # 参考资料与知识�?├── 4 Archives/       # 已完成项目（gitignored�?├── _logs/            # 操作日志（operations/ + reports/�?├── _meta/            # 模板、ADR、查询、索引、ai-memory
├── _agents/          # AI 角色定义（kos/ + life/�?├── Periodic/         # �?�?�?�?年笔记（gitignored�?├── en/               # English 镜像
├── zh-tw/            # 繁體中文鏡像
└── .obsidian/        # Obsidian 配置（gitignored�?```

---

## 笔记规范

### 文件命名

| 语言 | 约定 | 示例 |
|------|------|------|
| 简体中文（根目录） | 中文描述 + 空格分隔 | `提示工程.md` |
| English（`en/`�?| kebab-case | `prompt-engineering.md` |
| 繁體中文（`zh-tw/`�?| 中文描述 + 空格分隔 | `提示工程.md` |

### Frontmatter（必填）

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <类号>
tags: [tag1, tag2]
---
```

- `_logs/` �?`0 Inbox/` 下的文件不要求完�?frontmatter
- `tags` �?PARA 所属用 `#area/*` / `#resource/*` / `#project`
- 三语言版本必须保持相同标签

### UDC 分类�?
UDC 格式：`\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*`

| 类号 | 类目 |
|------|------|
| `001.8` | 知识组织与管�?|
| `004.8` | 人工智能 / LLM |
| `025.4` | 分类�?|
| `929` | 人物传记 |
| `001.8:005` | PARA 方法 |
| `001.8:004.8` | 知识组织�?AI |
| `004.8:519.6` | AI 数学基础 |
| `004.8:159.9` | 提示工程 / 认知 |
| `001.8:311` | 报告与统�?|
| `929:316.77` | 核心人物 |

组合使用 `:` 表达复合主题�?
#### UDC 自动建议（四层管道，优先级递减�?
**L1 �?模板默认�?*

| 模板 | 默认 UDC | | 模板 | 默认 UDC |
|------|----------|---|------|----------|
| 每日笔记 / 周报 / 月报 / 年报 | `001.8:004.8` �?`001.8:311` | | 概念 / 领域 / 资源 | `001.8` |
| 项目模板 | `001.8:005` | | 人物-核心/重要/背景 | `929:316.77` / `929:65.01` / `929` |

**L2 �?目录启发�?*

| 目录匹配 | UDC | | 目录匹配 | UDC |
|----------|-----|---|----------|-----|
| `3 Resources/LLM-Wiki/*` | `004.8` | | `_logs/operations/*` | `004.8:005.1` |
| `3 Resources/PARA/*` | `001.8:005` | | `_logs/reports/*` | `001.8:311` |
| `3 Resources/UDC/*` | `025.4` | | `Periodic/*` | `001.8:004.8` |
| `3 Resources/People/*` | `929` | | `_meta/adr/*` / `_meta/design/*` | `001.8` |
| `2 Areas/*` | `001.8` | | `_meta/queries/*` | `001.8:025.4` |

**L3 �?关键词匹配：** 扫描标题和内容，对照映射表中�?`title_map`（首选）、`keyword_map`�?2 条，置信�?�?0%）和 `compound_rules`�?0 条正则规则）�?
**L4 �?AI 兜底�?* 前三层无匹配时按内容特征推断�?
| 内容特征 | UDC |
|----------|-----|
| transformer / attention / neural network | `004.8:519.6` |
| RAG / 向量检�?/ Chroma / FAISS | `001.8:004.8` |
| 提示�?/ prompt / system prompt | `004.8:159.9` |
| 学习�?/ 损失函数 / 训练 | `004.8:681.3` |
| PARA / 项目管理 / GTD | `001.8:005` |
| 分类 / 索引 / ontology / taxonomy | `025.4` |
| 人物 / 传记 / 生平（非模板�?| `929` |
| 无特征匹�?| `001.8` |

建议值写入后标记 `udc:suggested` 待人工审核。映射表更新脚本：`1 Projects/UDC 自动建议/build_keyword_map.py`�?
### 表格格式

所�?Markdown 表格**必须使用对齐的分隔行**。表格内 `[[wikilink]]` 中的 `|` 须转义为 `\|`�?
### 跨语言链接

**A �?同语言存在对应页面 �?指向同语言**

| 场景 | 正确 | 错误 |
|------|------|------|
| EN 页引用另一 EN �?| `[[llm-fundamentals]]` | `[[LLM 基础]]` |
| TW 页引用另一 TW �?| `[[LLM 基础]]` | `[[LLM 基礎]]` |

> EN 文件名使�?kebab-case（实际文件名），非显示名�?
**B �?同语言不存�?�?fallback �?CN，使用完整路�?*

`[[3 Resources/000-Knowledge/xxx/xxx|显示名]]`

**C �?共享内容统一指向 CN**

索引页（前缀 `en/` �?`zh-tw/`）、模板、UDC/DDC 分类法、raw/ 目录 �?CN 路径�?
**索引页例外：**
- EN �?`[[en/_meta/Knowledge-Links/Index/_index-en|display]]`
- TW �?`[[zh-tw/_meta/🔗 知识关联/Index/_index|顯示]]`
- CN �?`[[_meta/🔗 知识关联/Index/_index-zh-cn|索引]]`

### 新建笔记后必须更新索�?
三语言同步更新�?- `_meta/🔗 知识关联/Index/_index.md`
- `en/_meta/Knowledge-Links/Index/_index.md`
- `zh-tw/_meta/🔗 知识关联/Index/_index.md`

---

## AI 引擎命令

所有引�?*幂等**（已处理的文件不重复操作）�?
| 命令 | 功能 |
|------|------|
| `KOS-Triage [--file <path>] [--status]` | 分拣 Inbox 文件 → 路由到目标目录 |
| `KOS-Wiki-Compile [--topic <name>] [--file <path>] [--status]` | 编译 raw/ → wiki/ 页面 |
| `KOS-Link [--path <dir>] [--file <path>] [--fix] [--status]` | 校验 frontmatter / UDC / 断链 / 跨语言一致性 |
| `Daily Open` | 创建今日笔记 |
| `KOS-Query [quick|standard|deep] <问题>` | 三级知识库查询（Quick/Standard/Deep） |
| `Day-Review` / `Week-Review` / `Month-Review` / `Quarter-Review` / `Year-Review` | 周期回顾 |
| `KOS-Project [--name <名称>] [--area <领域>]` | 创建新项目，自动分配编号与目录 |
| `KOS-Archive [--project <编号>] [--quick]` | 归档项目，完成度核查/复盘/目录迁移 |
### KOS-Triage 规则

**扫描�?* �?`0 Inbox/` 根目�?`.md` 文件，忽�?`_processed/` 子目录和 `triage.status: processed` 文件。非 `.md` 文件仅记录日志�?
**四维分析�?*

| 维度 | 判定规则 |
|------|---------|
| **A �?时效�?* | 日期 + 动作动词（提�?发�?完成/�?�?提醒）→ `ephemeral`；项�?任务无截�?�?`operational`；技术文�?教程 �?`reference`；原�?方法�?�?`evergreen` |
| **B �?主题** | 匹配项目名（扫描 `1 Projects/` 所�?README）→ 领域关键�?�?否则 `needs-mapping` |
| **C �?类型** | 动作动词 + 可交付物 �?`task`；知识内容无动作 �?`reference`�?50字碎�?�?`fleeting`；人�?背景 �?`people`；含 `origin: webclipper` �?`clipping` |
| **D �?复杂�?* | <500字单主题 �?`low`�?00�?000字多主题 �?`medium`�?2000字或多独立段 �?`high` |
| **E �?UDC** | 按四层管道建议，无匹配标�?`needs-mapping` |

**路由�?* 复制文件到目标目录（添加 frontmatter + UDC 建议）→ 原始文件移入 `0 Inbox/_processed/` �?日志写入 `_logs/operations/triage.md`�?
### KOS-Wiki-Compile 规则

**扫描�?* `3 Resources/` �?`.md` 文件，忽�?`compiled: true`。文�?<50字标�?`too-short` 跳过�?10000字标�?`long-doc` 建议拆分�?
**Delta 追踪（v1.1+）：** 编译前先检�?`_meta/.manifest.json`，避免重复处理未变更的来源文件�?
```bash
# 检�?manifest 是否存在
[ -f _meta/.manifest.json ] && echo "exists" || echo "no manifest"
```

**Manifest 格式（自动创建）�?* `_meta/.manifest.json`
```json
{
  "version": 1,
  "updated": "YYYY-MM-DD",
  "sources": {
    "3 Resources/004-LLM-Wiki/raw/llm-fundamentals.md": {
      "hash": "abc123",
      "compiled_at": "2026-06-07",
      "pages_created": ["3 Resources/000-Knowledge/004-LLM-Wiki/wiki/concepts/LLM 基础.md"],
      "pages_updated": ["3 Resources/000-Knowledge/004-LLM-Wiki/wiki/_index.md"]
    }
  }
}
```

**编译前检查（接入扫描阶段）：**
1. 计算源文件哈希：`sha256sum <file> | cut -d' ' -f1`（Linux/macOS）或 `certutil -hashfile <file> SHA256`（Windows�?2. 检查路径是否在 manifest 中且哈希匹配
3. 哈希匹配 �?跳过，报告："已编译且无变更。使�?--force 强制重新编译�?
4. 文件缺失或哈希不�?�?继续编译

**编译后记录：**
1. 记录 `{hash, compiled_at, pages_created, pages_updated}` �?manifest
2. 写回 manifest 文件

**跳过 delta�?* 用户指定 `--force` �?`force compile` 时跳�?delta 检查�?
**六步管道�?*
1. **来源分析** �?确定主题领域
2. **概念提取** �?决定页面类型：Concept（理�?方法）| Entity（工�?人物/产品）| Source（论�?文章/书）
3. **页面创建/更新** �?不存�?�?按模板新建；存在�?`reviewed: false` �?合并更新；`reviewed: true` �?跳过
4. **交叉引用** �?扫描 `[[链接]]`，按上下文推导关联原因（直接引用/主体定义/比较引用/依赖关系�?5. **索引更新** �?三语言 `_index.md`
6. **日志记录** �?`_logs/operations/compile.md`

**冲突处理�?* 一致跳�?| 补充追加 | 矛盾双方保留 + 标记 `conflict: true` | 完全覆盖时旧版移�?`_archived/`

### KOS-Link 检查项

| 级别 | 检查内�?| 排除目录 |
|------|---------|---------|
| **L1** | Frontmatter 完整性（created/updated/udc/tags + 日期格式�?| `_logs/`、`0 Inbox/` |
| **L2** | UDC 类号格式 + 是否在映射表�?| `_logs/`、`0 Inbox/`、`Periodic/`、`_meta/` |
| **L3** | `[[wiki链接]]` �?`[md](link.md)` 目标存在性；循环引用 >10 跳报 info | 忽略外部 URL |
| **L4** | 三语言镜像齐全 + udc/tags 一�?| `_logs/`、`0 Inbox/`、`Periodic/` |
| **L5** | 项目 `status: completed` 仍留�?`1 Projects/`；`[x]` 任务�?status: active | �?|

**自动修复（`--fix`，须用户确认）：** created/updated 缺失 �?用当前日期；UDC 格式错误 �?标准化（不改类号）；跨语言文件缺失 �?复制骨架。不可自动修复：udc/tags 缺失、断链、项目状态�?
---

## 周期自动�?
### 每日 / 每周 / 每月 / 每季 / 每年

所有周期操�?*幂等**（已有则跳过）。创建时使用 `_meta/Templates/` 对应模板�?
| 操作 | 输出位置 | 关键输入 |
|------|---------|---------|
| `Daily Open` / `Day-Review` | `Periodic/YYYY/MM/YYYY-MM-DD.md` | 活跃工单未完成任�?|
| `Week-Review` | `_logs/reports/YYYY-WW.md` | triage/compile 统计 + 本周日记�?+ 项目状�?|
| `Month-Review` | `_logs/reports/YYYY-MM.md` | 聚合本月周报 + 子库增长统计 |
| `Quarter-Review` | `_logs/reports/YYYY-QQ.md` | 聚合本月�?+ 项目完成统计 |
| `Year-Review` | `_logs/reports/YYYY.md` | 聚合全季�?+ ADR 变更历史 |

---

## People CRM

人物页面位于 `3 Resources/People/wiki/entities/`，使用英文文件名�?
| Tier | 定义 | 模板 | UDC | 标签 |
|------|------|------|-----|------|
| 1 �?核心 | 频繁互动�?| `person-核心人物.md` | `929:316.77` | `#people/tier-1` |
| 2 �?重要 | 定期互动�?| `person-重要联系�?md` | `929:65.01` | `#people/tier-2` |
| 3 �?背景 | 知识库引�?| `person-背景人物.md` | `929` | `#people/tier-3` |

- 首次出现的人名自动标注为 Tier 3 stub
- 互动记录格式：`{date, type: meeting|chat|email|note, summary, tags}`
- **禁止记录�?* 电话号码、住址、银行账户、健康信息。所有人物页 frontmatter 标记 `privacy: restricted`�?
---

## 会话协议

**开始：** 加载 AGENTS.md -> 读取 `_meta/hot.md` 恢复最近上下文 -> **读取 `_meta/ai-memory/STATE.md` 恢复引擎状态** -> 扫描 `1 Projects/` 活跃工单 -> 检查 Inbox 待处理文件 -> 检查编译状态 -> **检查 `_meta/.locks/` 残留锁（如有则 `python3 _meta/scripts/wiki-lock.py clear-stale --max-age 3600` 清理并记录）** -> 检查当日笔记 -> **Life-Brief 晨间简报**（昨日三支柱速写 + 今日任务提示）-> **Life-Check 目标检查**（时间过半且完成 < 50% 时提醒）-> 输出状态摘要。
**运行中：** KOS-Triage / KOS-Compile / 周期回顾 / KOS-Project / KOS-Archive 完成后，更新 `_meta/hot.md` + `_meta/ai-memory/STATE.md` 记录最新上下文。仅记录对 vault 知识状态有实质改变的操作。
**结束：** 更新 `_meta/hot.md`（本会话摘要、关键进展、活跃线程、当前状态）-> **Life-Brief 傍晚回顾**（检查今日三支柱是否有更新，有则提示）-> **检查 `_meta/.locks/` 确认所有锁已释放（如有则 `python3 _meta/scripts/wiki-lock.py clear-stale --max-age 0` 强制清理并记录）** -> 操作日志写入 `_logs/operations/maintenance.md` -> 有未完成 Triage/Compile 时提醒用户。
---

## 全局约束

- **绝不修改** `reviewed: true` 的页�?- **绝不删除**文件（Triage 移入 `_processed/`，Compile 是复制）
- **绝不覆盖**人工编辑内容
- **不重�?* `compiled: true` �?`triage.status: processed` 文件
- **不扫�?* `.git/`、`.obsidian/`、`node_modules/`
- **不加 `--fix` 不修改任何文�?*

---

## 关键参考文�?
- `CLAUDE.md` �?快速上手参�?- `_meta/🔗 知识关联/Index/_index-zh-cn.md` �?总索�?- `_meta/Templates/` �?全部模板
- `_meta/queries/` �?Dataview 查询库（6 个预定义查询�?- `_meta/adr/` �?架构决策记录
- `_meta/ai-memory/全局状�?md` �?跨会话状�?- `_agents/life/` �?Life+AI 三支柱角色定�?
