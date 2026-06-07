---
created: 2026-06-06
updated: 2026-06-06
udc: 001.8:004.8
tags: [design, triage, detailed, kos, implementation]
---

# KOS-Triage 详细设计

> **版本：** v0.2 详细设计
> **状态：** Draft
> **前置文档：** [[_meta/design/KOS-Triage原型设计.md]]
> **参考：** [[_meta/v1.1-子模块分解.md]] · [[_logs/_index.md]]

---

## 1. AGENTS.md 植入文本

以下为 `AGENTS.md` 中需要新增的 KOS-Triage 完整章节。可直接复制粘贴。

```markdown
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
3. 对 task 类型：同时追加 Obsidian Task 条目到 tasks.md 或 Periodic/
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
```

---

## 2. 关键词映射表（完整版）

### 2.1 领域关键词 → UDC → 目标目录

```yaml
# 优先级从上到下递减。匹配到第一个即停止。
LLM-Wiki:
  keywords: [LLM, 大模型, 语言模型, transformer, attention, GPT, 神经网络, 深度学习,
             RAG, 检索增强, prompt, 提示工程, 微调, fine-tuning, embedding, tokenizer]
  udc: 004.8
  route: 3 Resources/LLM-Wiki/
  lifecycle: reference

PARA:
  keywords: [PARA, 项目, 领域, 资源, 归档, GTD, 知识管理, PKM, Tiago Forte, 收件箱]
  udc: 001.8
  route: 3 Resources/PARA/
  lifecycle: reference

UDC:
  keywords: [UDC, 十进分类, 分类法, 分类号, 杜威, 国际十进]
  udc: 025.4
  route: 3 Resources/UDC/
  lifecycle: reference

软件工程:
  keywords: [架构, 设计模式, C4, ADR, SOLID, DDD, 微服务, UML, 重构, 代码质量,
             软件工程, 设计原则, 六边形架构, 事件驱动, CQRS, 事件溯源]
  udc: 004.4
  route: 2 Areas/软件工程架构设计/
  lifecycle: evergreen

知识管理:
  keywords: [知识组织, KOS, 知识图谱, 元数据, 信息架构, 分类, 标签系统]
  udc: 001.8
  route: 2 Areas/知识管理/
  lifecycle: evergreen
```

### 2.2 项目名动态匹配

从 `1 Projects/[项目名]/README.md` 的 frontmatter 中读取 `tags` 和 `title`，构建动态匹配表：

```yaml
# 自动生成，无需手工维护
projects:
  - name: 软件工程架构设计工单
    keywords: [软件工程, 架构设计, 工单, ADR, C4]
    route: 1 Projects/软件工程架构设计工单/
  # 后续新增项目自动加入
```

### 2.3 匹配算法

```
1. 对项目名做全匹配（最高优先级）
2. 对领域关键词做包含匹配（次高优先级）
3. 对文件全文做包含匹配（最低优先级）
4. 多关键词匹配时取匹配数最多的领域
5. 平局时取匹配优先级更高的领域（表中排上者优先）
```

---

## 3. Frontmatter 变异规则

### 3.1 无 frontmatter 的文件

原始文件无 frontmatter 时，分拣后在其顶部插入：

```yaml
---
created: <原始文件修改日期>
updated: <分拣日期>
udc: <匹配到的 UDC 类号，留空则空>
tags: [triage, <路由标签>]
triage:
  status: processed
  date: <分拣日期>
  confidence: <high|medium|low>
  source: 0 Inbox/<原文件名>
  route: <目标路径>
lifecycle: <匹配到的生命周期>
origin: manual
---
```

### 3.2 已有 frontmatter 的文件

保留已有字段，仅更新/新增 `triage` 命名空间和 `status` 字段：

```yaml
---
# 保留原有字段不变
created: 2026-06-05     # 保留
updated: 2026-06-06     # 更新为分拣日期
udc: 004.8               # 保留（如已有）
tags: [原有标签, triage]  # 追加 triage 标签
triage:                  # 新增 triage 块
  status: processed
  date: 2026-06-06
  confidence: high
  source: 0 Inbox/xxx.md
  route: 3 Resources/LLM-Wiki/
# 保留其他原有字段
---
```

### 3.3 _processed/ 中文件的标记

移入 `0 Inbox/_processed/` 后，文件的 frontmatter 更新为：

```yaml
---
triage:
  status: processed
  date: <分拣日期>
  confidence: <high|medium|low>
  route: <目标路径>
  processed-action: copy  # copy | split | needs-review
---
```

保留所有原始 frontmatter 不变。

---

## 4. 伪代码实现

### 4.1 主流程

```python
def kos_triage(file_path=None, status_only=False):
    # Step 1: 扫描
    if status_only:
        return scan_inbox_status()
    
    if file_path:
        files = [validate_file(file_path)]
    else:
        files = scan_inbox()
    
    # Step 2: 跳过已处理
    pending = [f for f in files if not is_already_processed(f)]
    
    if not pending:
        return report("无待处理文件")
    
    # Step 3: 逐文件分拣
    results = []
    for f in pending:
        analysis = analyze_four_dimensions(f)       # 四维分析
        route = routing_decision(analysis)          # 路由决策
        if route.confidence >= HIGH_CONFIDENCE:
            execute_route(f, route)                 # 执行路由
        else:
            mark_needs_review(f)                    # 标记需人工
        log_triage(f, route)                        # 写入日志
        results.append(route)
    
    # Step 4: 报告
    return generate_report(results)
```

### 4.2 四维分析

```python
def analyze_four_dimensions(file_content):
    return {
        'timeliness': analyze_timeliness(file_content),
        'topic': analyze_topic(file_content),
        'type': analyze_type(file_content),
        'complexity': analyze_complexity(file_content)
    }

def analyze_timeliness(content):
    # 检查日期模式: YYYY-MM-DD 或 今天/明天/下周等
    date_patterns = [r'\d{4}-\d{2}-\d{2}', r'今天', r'明天', r'下周', r'周五前']
    action_verbs = ['提交', '发送', '完成', '买', '约', '提醒',
                    'review', 'submit', 'send', 'complete', 'buy', 'remind']
    
    has_date = any(re.search(p, content) for p in date_patterns)
    has_action = any(v in content.lower() for v in action_verbs)
    
    if has_date and has_action:
        return 'ephemeral'
    if has_action and not has_date:
        return 'operational'
    if is_technical_content(content):
        return 'reference'
    return 'evergreen'

def analyze_topic(content):
    # 按优先级匹配关键词表
    for domain in KEYWORD_TABLE:
        if any(kw in content for kw in domain.keywords):
            return domain
    # 匹配项目名
    for project in get_active_projects():
        if any(kw in content for kw in project.keywords):
            return project
    return None  # needs-mapping

def analyze_type(content):
    if has_action_verb(content) and has_deliverable(content):
        return 'task'
    if len(content) < 50:
        return 'fleeting'
    if has_person_name(content):
        return 'people'
    if is_technical_content(content):
        return 'reference'
    return 'reference'  # 默认

def analyze_complexity(content):
    word_count = len(content)
    topic_count = count_distinct_topics(content)
    
    if word_count < 500 and topic_count <= 1:
        return 'low'
    if word_count < 2000 and topic_count <= 3:
        return 'medium'
    return 'high'
```

### 4.3 路由执行

```python
def execute_route(file, route):
    target_dir = route.target
    target_path = os.path.join(target_dir, file.name)
    
    # 处理重名
    target_path = resolve_conflict(target_path)
    
    # 复制文件到目标
    copy_file(file.path, target_path)
    
    # 写入 frontmatter
    fm = generate_frontmatter(file, route)
    prepend_frontmatter(target_path, fm)
    
    # 对 task 类型，追加到 tasks.md
    if route.content_type == 'task':
        append_obsidian_task(target_dir, file, route)
    
    # 对 ephemeral 类型，追加到今日日记
    if route.lifecycle == 'ephemeral':
        today_note = get_today_daily_note()
        append_fleeting_idea(today_note, file)
    
    # 移入 _processed/
    move_to_processed(file)
```

---

## 5. 文件操作规范

### 5.1 文件操作原子指令

| 操作 | Codex 指令 | 备注 |
|------|-----------|------|
| 扫描 Inbox | 读取 0 Inbox/ 下所有文件 | 排除 _processed/ |
| 判断已处理 | 读取 frontmatter triage.status | processed 则跳过 |
| 复制文件 | 复制内容到目标路径 | 不修改原始文件 |
| 写入 frontmatter | 在文件顶部插入 YAML 块 | 已有则合并 |
| 追加 task | 在 tasks.md 末尾追加 `- [ ] 标题 📅 日期` | Obsidian Tasks 格式 |
| 移入 processed | 移动文件到 0 Inbox/_processed/ | 保持文件名不变 |
| 写入日志 | 在 _logs/operations/triage.md 追加条目 | 追加式 |

### 5.2 重名冲突解决

```
目标目录已有同名文件:
  1. 计算内容哈希（MD5 of first 100 chars + file size）
  2. 哈希相同 → 跳过（已存在内容相同的文件）
  3. 哈希不同 → 追加时间戳: <文件名>_<YYYYMMDDHHMMSS>.md
```

---

## 6. 测试用例

### 6.1 单元测试场景

```
场景 TC-01: 纯技术文章
  输入: "Transformer 架构详解" (3000字技术文章, 无日期)
  期望: 3 Resources/LLM-Wiki/ + lifecycle: reference + confidence: high

场景 TC-02: 任务提醒
  输入: "记得周五前提交周报" (15字)
  期望: Periodic/2026/06/2026-06-09.md 追加 task + lifecycle: ephemeral

场景 TC-03: 复合文档
  输入: "LLM 知识管理方案" (含项目计划+技术方案, 2500字)
  期望: 
    - 路由A: 1 Projects/软件工程架构设计工单/ (task)
    - 路由B: 3 Resources/LLM-Wiki/ (reference)
    - 标记 dual-routed: true

场景 TC-04: 空内容
  输入: 文件仅含 frontmatter, 正文 < 10 字
  期望: Periodic/ + lifecycle: ephemeral + type: fleeting

场景 TC-05: 已有 frontmatter 的文件
  输入: 文件已有完整 frontmatter (udc/tags 已填写)
  期望: 保留原有字段, 仅追加 triage 块

场景 TC-06: 重复文件
  输入: 文件内容与目标目录已有文件相同
  期望: 跳过 (content hash 匹配), 日志记录 skipped

场景 TC-07: 跨领域内容
  输入: "使用 LLM 进行知识分类" (LLM + 分类双领域)
  期望: 匹配 LLM-Wiki (优先级高), 日志记录 multi-topic

场景 TC-08: 全英文内容
  输入: "A Comprehensive Guide to Prompt Engineering" (英文)
  期望: 正常分拣, 匹配 LLM-Wiki, 语言不影响路由

场景 TC-09: Web Clipper 剪藏
  输入: 文件标记 origin: webclipper
  期望: 标准分拣, 输出中标注 clipped

场景 TC-10: 无匹配主题
  输入: "今天去公园散步，天气很好" (个人日记类)
  期望: Periodic/ + lifecycle: ephemeral + type: fleeting
```

### 6.2 验收标准

```
PASS 条件:
  - 所有测试场景的输出符合预期
  - 0 Inbox/ 中无残留未处理文件（排除 needs-review）
  - _logs/operations/triage.md 有完整的操作记录
  - 已处理文件在 _processed/ 中可追溯
  - 重复执行幂等：第二次运行不重复处理

FAIL 条件:
  - 任何文件被错误删除
  - 已处理文件被重复处理
  - frontmatter 格式错误导致 Obsidian 无法解析
```

---

## 7. 日志格式规范

### 7.1 _logs/operations/triage.md

```
## 2026-06-06T18:30

- **操作**：KOS-Triage
- **触发方式**：manual | auto | single-file
- **处理文件数**：N
- **成功路由**：M
- **待确认**：K
- **耗时**：X 分钟
- **处理详情**：
  | 源文件 | 目标 | 置信度 | 生命周期 | 操作 |
  |--------|------|--------|----------|------|
  | xxx.md | 3 Resources/LLM-Wiki/ | high | reference | copy |
  | yyy.md | Periodic/ | high | ephemeral | append |
  | zzz.md | _processed/ | low | — | needs-review |
- **路由分布**：
  - 3 Resources：N 个
  - 1 Projects：N 个
  - 2 Areas：N 个
  - Periodic：N 个
  - needs-review：N 个
- **异常记录**：
  - 文件 A：原因（如无法读取、编码异常）
  - 文件 B：原因
```

### 7.2 _logs/sessions/ 会话摘要引用

每次分拣操作应在会话日志中引用：

```
- KOS-Triage 分拣: N 个文件, M 成功, K 待确认
  详情见 _logs/operations/triage.md#<timestamp>
```

---

## 8. 实施检查清单（可执行）

### Phase A: AGENTS.md 植入

- [ ] 复制第 1 节的 AGENTS.md 文本到 AGENTS.md
- [ ] 验证格式对齐（保持 AGENTS.md 原有的缩进风格）

### Phase B: 目录就绪

- [ ] `0 Inbox/_processed/` 目录已存在
- [ ] `_logs/operations/triage.md` 已创建并写入表头
- [ ] 各目标目录存在（1 Projects/* / 2 Areas/* / 3 Resources/* / Periodic/）

### Phase C: 首次运行

- [ ] 准备 3 个测试文件放入 0 Inbox/
- [ ] 执行 `KOS-Triage`
- [ ] 验证文件路由正确
- [ ] 验证 frontmatter 格式
- [ ] 验证日志写入

### Phase D: 回归验证

- [ ] 运行 TC-01 至 TC-10 所有测试场景
- [ ] 检查幂等性（重复运行无副作用）
- [ ] 检查边界情况（空文件 / 长文 / 二进制 / 编码异常）

### Phase E: 上线

- [ ] AGENTS.md 最终评审
- [ ] 运行日志记录
- [ ] 项目 tickts.md 更新（P1 标记完成）

---

## 9. 后续迭代

| 版本 | 功能 | 触发条件 |
|------|------|----------|
| v0.2（当前） | 四维分析 + 单一路由 | 手动触发 |
| v0.3 | 双重路由（任务+知识分离） | 检测到双重属性 |
| v0.4 | 自动编译触发 | 新 reference 入库后自动建议 Compile |
| v0.5 | 机器学习辅助分类 | 积累足够路由历史后 |

---

> **文档维护：** 本详细设计在实施过程中持续更新。首次运行后根据实际效果调整关键词表和路由规则。
