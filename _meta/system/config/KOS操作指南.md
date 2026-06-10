---
created: 2026-06-10
updated: 2026-06-10
udc: 001.8:004.8
tags: [meta, guide, operations, reference]
---

# KOS 操作指南

> 面向用户的 KOS_LLM-Wiki 知识系统操作手册。记录日常操作流程、命令速查与最佳实践。

---

## 1. 系统概览

### 目录结构

| 目录 | 用途 | 维护方式 |
|:----|:-----|:---------|
| `0 Inbox/` | 待分拣笔记入口 | KOS-Triage 自动分拣 |
| `1 Projects/` | 有目标与截止日期的项目 | KOS-Project 立项 / KOS-Archive 归档 |
| `2 Areas/` | 持续关注的长期领域 | 人工维护 |
| `3 Resources/` | 主题资料与知识库 | KOS-Wiki-Compile 编译 |
| `4 Archives/` | 已完成/归档项目 | KOS-Archive 归档 |
| `Periodic/` | 日/周/月/年笔记 | KOS-Daily 自动生成 |
| `_meta/` | 模板、脚本、系统文档 | 架构层同步 |
| `_meta/system/logs/` | 操作日志与审计 | 自动记录 |
| `en/` / `zh-tw/` | 多语言镜像 | 索引同步 |

### 双库拓扑

| 角色 | 路径 | 用途 |
|:----|:-----|:-----|
| 主库 J: | `J:\KOS_LLM-Wiki` | 日常使用，所有变更在此进行 |
| 从库 F: | `F:\KOS_LLM-Wiki` | 备份/只读参考 |

> 架构层（_meta/ _meta/ai/agents/ .codex/）由 sync-vaults.py 自动同步。
> 内容层（Inbox/Projects/Areas/Resources/Archives）两库独立。

---

## 2. 日常操作

### 会话启动流程

启动新会话时系统自动执行：
1. 加载 AGENTS.md + hot.md + STATE.md
2. 检查 Inbox 待处理文件
3. Life-Brief 晨间简报（昨日三支柱速写 + 今日任务提示）
4. Life-Check 目标检查（时间过半且完成 < 50% 时提醒）

### 会话结束流程

结束会话时：
1. 更新 hot.md（本会话摘要、关键进展、活跃线程）
2. Life-Brief 傍晚回顾（检查今日三支柱更新）
3. 清理 _meta/.locks/ 残留锁
4. 提醒未完成的 Triage/Compile

---

## 3. 内容管理

### KOS-Triage：分拣 Inbox

将 `0 Inbox/` 中的笔记按四维分析路由到目标目录。

| 命令 | 功能 |
|:----|:------|
| `KOS-Triage` | 全量分拣 Inbox 根目录全部 .md 文件 |
| `KOS-Triage --file <路径>` | 单文件分拣 |
| `KOS-Triage --status` | 查询分拣状态 |

**四维分析**：时效性（ephemeral/operational/reference/evergreen）→ 主题（匹配项目或领域）→ 类型（task/reference/fleeting/people/clipping）→ 复杂度（low/medium/high）

**路由结果**：文件复制到目标目录（添加 frontmatter + UDC 建议）→ 原始文件移入 `0 Inbox/_processed/`

### KOS-Wiki-Compile：编译知识

将 `3 Resources/` 中的 raw/ 资料编译为 wiki/ 概念页。

| 命令 | 功能 |
|:----|:------|
| `KOS-Wiki-Compile` | 全量编译 |
| `KOS-Wiki-Compile --topic <子库>` | 按主题编译（如 `--topic 300-Social`）|
| `KOS-Wiki-Compile --file <路径>` | 单文件编译 |
| `KOS-Wiki-Compile --status` | 查询编译状态 |

**六步管道**：来源分析 → 概念提取 → 页面创建/更新 → 交叉引用 → 索引更新 → 日志记录

---

## 4. 项目管理

### KOS-Project：新建项目

| 命令 | 功能 |
|:----|:------|
| `KOS-Project --name <名称> --area <领域>` | 创建新项目，自动分配编号与目录 |

**流程**：编号分配（同年递增）→ 目录创建 → 主页生成（项目模板）→ 项目总览更新 → 领域页同步

### KOS-Archive：归档项目

| 命令 | 功能 |
|:----|:------|
| `KOS-Archive --project <编号> --quick` | 归档项目，完成度核查/复盘/目录迁移 |

---

## 5. 质量检查

### KOS-Link：链接校验

五级检查，从 frontmatter 到跨语言一致性。

| 级别 | 检查内容 |
|:----:|:---------|
| L1 | Frontmatter 完整性（created/updated/udc/tags + 日期格式）|
| L2 | UDC 类号格式 + 是否在映射表中 |
| L3 | `[[wiki链接]]` 目标存在性 |
| L4 | 三语言镜像齐全 + udc/tags 一致 |
| L5 | 项目状态一致性（completed 仍留 1 Projects/）|

| 命令 | 功能 |
|:----|:------|
| `KOS-Link` | 全量校验 |
| `KOS-Link --path <目录>` | 指定路径校验 |
| `KOS-Link --file <路径>` | 单文件校验 |
| `KOS-Link --fix` | 自动修复（需确认）|

---

## 6. 知识查询

### KOS-Query：三级查询

| 模式 | 范围 | 适用场景 |
|:----:|:-----|:---------|
| Quick | hot.md 最近上下文 | 快速回顾当前状态 |
| Standard | 索引 + 关键页面 | 日常知识检索 |
| Deep | 全库 + 归档 | 专题研究 / 全面调研 |

| 命令                        | 示例                                  |
| :------------------------ | :---------------------------------- |
| `KOS-Query quick <问题>`    | `KOS-Query quick 当前活跃项目有哪些`         |
| `KOS-Query standard <问题>` | `KOS-Query standard UDC 336.76 是什么` |
| `KOS-Query deep <问题>`     | `KOS-Query deep 交易系统的设计决策`          |

---

## 7. 生命周期管理（Life+AI）

### 周期回顾

| 命令 | 输出位置 | 频率 |
|:----|:---------|:----:|
| `Daily Open` / `Day-Review` | `Periodic/YYYY/MM/YYYY-MM-DD.md` | 每日 |
| `Week-Review` | `_meta/system/logs/reports/YYYY-WW.md` | 每周 |
| `Month-Review` | `_meta/system/logs/reports/YYYY-MM.md` | 每月 |
| `Quarter-Review` | `_meta/system/logs/reports/YYYY-QQ.md` | 每季 |
| `Year-Review` | `_meta/system/logs/reports/YYYY.md` | 每年 |

### 三支柱报告

| 命令 | 功能 |
|:----|:------|
| `Life-Report` | 生成周/月三支柱报告 |
| `Life-Check` | 目标进度检查 |
| `Life-Brief` | 晨间简报 / 傍晚回顾 |

---

## 8. 系统维护

### 双库同步

```powershell
# 架构层增量同步（自动 SHA-256 比对）
python _meta/system/scripts/sync-vaults.py

# 内容层手动同步（以 300-Social 为例）
robocopy "J:\KOS_LLM-Wiki\3 Resources\300-Social" "F:\KOS_LLM-Wiki\3 Resources\300-Social" /E /COPY:DT
```

> 详细操作参见 [[_meta/同步操作指南]]

### 健康检查

```powershell
# 完整健康检查
KOS-Init

# 仅状态查询
KOS-Init --status

# 自动修复
KOS-Init --fix
```

---

## 9. 命令速查表

| 类别 | 命令 | 功能 |
|:----|:-----|:------|
| 分拣 | `KOS-Triage` | 全量分拣 Inbox |
| 编译 | `KOS-Wiki-Compile` | 全量编译 raw/ → wiki/ |
| 校验 | `KOS-Link` | 五级链接校验 |
| 查询 | `KOS-Query [quick\|standard\|deep]` | 三级知识库查询 |
| 项目 | `KOS-Project --name <名称> --area <领域>` | 新建项目 |
| 归档 | `KOS-Archive --project <编号>` | 归档项目 |
| 周期 | `Daily Open` / `Day-Review` / `Week-Review` | 日/周/月/季/年笔记 |
| 生活 | `Life-Report` / `Life-Check` / `Life-Brief` | 三支柱报告 |
| 初始化 | `KOS-Init` / `KOS-Init --status` / `KOS-Init --fix` | 健康检查 |
| 同步 | `python _meta/system/scripts/sync-vaults.py` | 双库架构同步 |
| 思考 | `/think` / `深度思考` / `帮我理清` | 10 原则思维循环 |

---

## 10. 相关文档

| 文档        | 路径                                     | 说明               |         |
| :-------- | :------------------------------------- | :--------------- | ------- |
| 系统配置      | [[_meta/system/config/系统配置\|系统配置]]     | 路径常量、UDC 体系、标签规则 |         |
| 同步指南      | [[_meta/system/config/同步操作指南\|同步操作指南]] | 双库同步操作           |         |
| AGENTS.md | [[AGENTS.md]]                          | AI 行为规范          |         |