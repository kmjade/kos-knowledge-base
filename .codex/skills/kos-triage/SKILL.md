---
name: kos-triage
description: "分拣 0 Inbox/ 待处理笔记。按时效性/主题/类型/复杂度四维分析，复制到目标目录，原始文件移入 _processed/。增强：残留记录扫描、去向决策、旧笔记分流。"
---

# KOS-Triage：Inbox 分拣引擎

> 幂等操作（triage.status: processed 文件跳过 + _meta/.manifest.json 哈希校验双重保障）

---

## 扫描范围

- 读取 0 Inbox/ 根目录 .md 文件
- 忽略 _processed/ 子目录
- 忽略 triage.status: processed 文件
- 非 .md 文件仅记录日志

---

## 并发安全

目标目录写入必须先获取文件锁，防止 KOS-Triage 与 KOS-Compile 同时操作同一文件。

### 锁协议

if python3 _meta/system/scripts/wiki-lock.py acquire "$TARGET"; then
    # ... 写入 ...
    python3 _meta/system/scripts/wiki-lock.py release "$TARGET"
else
    sleep 2
    if python3 _meta/system/scripts/wiki-lock.py acquire "$TARGET"; then
        python3 _meta/system/scripts/wiki-lock.py release "$TARGET"
    fi
fi

---

## Delta 追踪

使用 _meta/.manifest.json 记录哈希和处理结果，避免重复分拣。

---

## 四维分析

### A - 时效性
- 日期+动作动词 -> ephemeral -> Periodic/
- 项目+任务无截止 -> operational -> 1 Projects/
- 技术文章/教程 -> reference -> 3 Resources/
- 原则/方法论 -> evergreen -> 2 Areas/

### B - 主题
扫描 1 Projects/ 所有 README，匹配项目名，否则 needs-mapping

### C - 类型
- 动作动词+可交付物 -> task
- 知识内容无动作 -> reference
- <50字碎片 -> fleeting
- 人名+背景 -> people
- 含 origin: webclipper -> clipping

### D - 复杂度
- <500字单主题 -> low
- 500-2000字多主题 -> medium
- >2000字或多独立段 -> high

### E - UDC 建议
四层管道：模板默认 -> 目录启发 -> 关键词匹配 -> AI 兜底

---

## 模式感知路由

分拣时若指定 `--mode`，路由目标和 frontmatter 注入按模式分叉：

### 路由矩阵

| 四维 C（类型） | PARA 路由 | LYT 路由 | Zettel 路由 | Generic 路由 |
|--------------|----------|---------|------------|------------|
| concept | wiki/concepts/ | wiki/concepts/ + ace | wiki/permanent/ | notes/ |
| entity | wiki/entities/ | wiki/entities/ + ace | wiki/permanent/ | notes/ |
| source | wiki/sources/ | wiki/sources/ | wiki/literature/ | wiki/sources/ |
| fleeting | 0 Inbox/ 保留 | wiki/ideas/ | 合并到永久 | notes/ |
| task | 1 Projects/ | 2 Areas/ | 不适用 | notes/ |

### Frontmatter 注入差异

| 模式 | 额外字段 |
|------|---------|
| para | （无，保持现状） |
| lyt | `methodology: lyt`, `ace:`, `mocs:` |
| zettel | `methodology: zettel`, `liveness:`, `hub:` |
| generic | `methodology: generic` |

- 无 `--mode` 或无 `methodology` 字段 → 默认 `para` 行为

---

## 执行流程

步骤0: Delta 检查（哈希比对，匹配则跳过）
步骤1: 扫描 Inbox 待处理文件
步骤2: 四维分析
步骤3: 添加 frontmatter（需加锁）
步骤4: 复制到目标目录（需加锁）
步骤5: 原始文件移入 _processed/
步骤6: 更新 Manifest
步骤7: 日志记录
步骤8: 可选批次折叠

---

## 残留记录处理（增强）

分拣完成后，对路由到 Periodic/ 的 ephemeral 类型文件，扫描其中的未处理记录。

### 去向决策

每条未处理记录仅选一种：
- 转知识页 -> kos-compile（高价值内容，后续编译）
- 转任务 -> 任务（可执行的动作项）
- 已处理 -> 标记完成（已读完，无需后续操作）
- 延期 -> 待处理（下次回顾再审）

### 回写标记规范

直接在源文件中追加：
- -> [[笔记名]] — 转永久笔记（建议 KOS-Compile）
- -> 任务 — 转任务项
- 已处理 — 已完成
- 待处理 — 延期

---

## 旧笔记分流（增强）

当 triage 识别到文件属于旧笔记/遗留笔记类型时，提供分流引导：

- 观点/概念/方法论/洞见 -> kos-compile（知识型）
- 任务/计划/执行记录/产出物 -> kos-project（项目型）
- 已完成/已放弃的项目资料 -> kos-archive（归档型）
- 混合型 -> 先拆分再分流

---

## 渐进处理追踪

每次 triage 执行后更新 _meta/ai/memory/全局状态.md 的 inbox 区块。
记录：已处理数/总数/上次处理时间/残留去向统计。

---

## 参数

- --file <path> — 仅分拣指定文件
- --status — 仅显示状态
- --force — 跳过 Delta 检查
- --fold — 生成批次折叠报告
- --inbox — 残留记录处理模式
- --legacy — 旧笔记分流模式
- --batch — 批量处理模式（一次处理 Inbox 中所有待处理文件）
- --mode <para|lyt|zettel|generic> — 方法论模式（默认 para）

---

## 批量处理模式

当指定 `--batch` 时，一次处理 `0 Inbox/1-input/` 下所有待处理文件。

### 批量流程

1. 扫描 Inbox 所有待处理文件，生成文件列表
2. 对每个文件执行四维分析（A/B/C/D/E）
3. 批量添加 frontmatter（逐文件加锁）
4. 批量复制到目标目录（逐文件加锁）
5. 原始文件批量移入 _processed/
6. 生成批次折叠报告到 _meta/system/logs/reports/

### 批次折叠报告格式

```markdown
## Triage Batch Report: {YYYY-MM-DD HH:mm}

| 文件 | 类型 | 路由 | 状态 |
|------|------|------|:----:|
| file1.md | concept | wiki/concepts/ | ok |
| file2.md | task | 1 Projects/ | ok |

处理: 3 文件 | 成功: 2 | 跳过: 1 | 失败: 0
```

### 注意事项
- 批量模式仍然逐文件加锁，非并发
- 单个文件失败不影响其他文件
- 批次折叠报告写入 `_meta/system/logs/reports/triage-batch-{YYYY-MM-DD}.md`


## Advisory Lock（可见锁）

当编辑一个已有文件时，先在文件 frontmatter 中添加可见锁标记，以便其他协作者知晓。

### 上锁

在文件 frontmatter 的 tags 行后追加：

```
lock_advisory: {holder: <agent_name>, acquired_at: "YYYY-MM-DDTHH:MM:SS"}
```

### 解锁

编辑完成后，从 frontmatter 中移除 `lock_advisory` 行。

### 规则

- 每次编辑前检查目标文件是否有 `lock_advisory`。若有且 `acquired_at` 在 10 分钟内，等待或跳过。
- 若 `acquired_at` 超过 10 分钟，视为过期锁，可以覆盖。
- 读操作不需要上锁。
- 锁是 advisory（建议性）的，不强制执行，但应尊重。

## 10原则映射

1. OBSERVE — 完整读取后分析
2. LISTEN — 文件中的日期/动作动词是分类信号
3. THINK — 四维分析 + 去向决策 + 分流判断
4. CONNECT — 新笔记与现有项目/领域/人物的关联
5. SYSTEM — 锁 -> Delta -> 写入 -> Manifest -> 日志
6. CREATE — 写入目标文件 + frontmatter + manifest
7. GROW — 残留追踪 + 跨会话进度记录
