---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:004.8
tags: [architecture, design, canvas, visual-layer, v3]
status: draft
---

# Canvas 可视层 — 设计文档

> KOS 第三个知识捕获层：**可视化参考层**
> 对应 claude-obsidian 的 `canvas` 技能，针对 KOS_LLM-Wiki 适配

---

## 1. 三个知识捕获层

| 层 | 名称 | 功能 | 输出格式 | KOS 对应 |
|:--:|------|------|---------|----------|
| L1 | **文本综合** (Text Synthesis) | 对话 → 结构化文本知识 | `.md` wiki 页面 | KOS-Compile |
| L2 | **结构化知识** (Structured Knowledge) | 分类 → 索引与查询 | `.md` 索引 + Dataview | KOS-Triage + KOS-Query |
| **L3** | **可视化参考** (Visual Reference) | 视觉 → 空间关系画布 | `.canvas` (JSON Canvas) | **Canvas 可视层** ← 本次新增 |

### 三者关系

```
文本综合 ──→ 产出可读、可搜索的笔记
结构化知识 ──→ 产出可发现、可关联的索引
可视化参考 ──→ 产出可感知、可探索的空间布局
```

- L1 和 L2 处理文本；L3 处理**视觉关系**
- Canvas 不替代笔记，而是用**空间布局**补充知识关联
- 同一话题可同时拥有 wiki 页面（L1）和 canvas 画布（L3）

---

## 2. 核心概念

### 2.1 什么是 Canvas

Canvas 是 Obsidian 原生的 `.canvas` 文件（JSON Canvas 1.0 格式），渲染为无限视觉面板。支持四种节点类型：

| 节点类型 | 用途 | 示例 |
|---------|------|------|
| `text` | Markdown 文本卡片 | 标题、说明、注释 |
| `file` | 嵌入文件（图片/PDF/笔记） | `![[architecture.png]]` |
| `group` | 分组区域（Zone） | 带标签的矩形区域，视觉分组 |
| `link` | 网页 URL 预览 | `https://...` 自动抓取 OG 信息 |

### 2.2 适用场景

| 场景 | 优先级 | 说明 |
|------|:------:|------|
| **概念关系图** | 高 | 用空间位置 + 连线表达概念间关联 |
| **视觉素材板** | 中 | 收集图片、截图、PDF 到同一面板 |
| **项目看板** | 中 | 用 Zone 做阶段分组，卡片代表任务 |
| **研究路线图** | 低 | 时间线 + 里程碑的视觉展示 |
| **演示/展示** | 低 | Obsidian 全屏模式展示 Canvas |

### 2.3 不适用场景

- 纯文本内容（用 wiki 页面即可）
- 需要版本对比的内容（Git 对 .canvas JSON 的 diff 可读性差）
- 大量图片的批量存储（图片用 `_attachments/media/` 统一管理）

---

## 3. 目录结构

### 3.1 存储路径

所有 Canvas 可视层文件集中存放于 `_attachments/` 目录：

```
_attachments/
├── canvases/          # 📋 .canvas 画布文件
│   ├── _index.canvas  # 总览画布（默认入口）
│   └── ...
├── media/             # 🖼️ 图片 / PDF / 其他二进制资源
│   ├── images/        #    图片
│   ├── pdfs/          #    PDF
│   └── .gitkeep       #    占位
└── .gitkeep           # 占位
```

**设计理由：**

| 维度 | 集中式 (`_attachments/`) | 分散式 (`3 Resources/.../wiki/canvases/`) |
|------|:------------------------:|:----------------------------------------:|
| 跨域共享 | ✅ 一个画布可引用多个领域内容 | ❌ 画布局限于单个领域 |
| 发现性 | ✅ 一处找到所有画布 | ❌ 散布在多个 topic 目录 |
| Git 管理 | ✅ `_attachments/` 可统一 `.gitignore` | ❌ 需要逐个目录配置 |
| 与 PARA 一致性 | ❌ 偏离 PARA 领域分离原则 | ✅ 符合领域归属 |

**结论：** 采用 **集中式**，因为 Canvas 本质上是**跨领域**的可视层，不应被单一领域限制。

### 3.2 Git 策略

| 内容 | 是否入 Git | 原因 |
|------|:----------:|------|
| `.canvas` 文件（JSON） | ✅ 跟踪 | 纯文本，diff 可读 |
| `.gitkeep` 占位 | ✅ 跟踪 | 保持目录结构 |
| 图片 (`media/images/`) | ❌ 忽略 | 二进制大文件 |
| PDF (`media/pdfs/`) | ❌ 忽略 | 二进制大文件 |

在 `.gitignore` 中添加：

```
# Canvas media assets
_attachments/media/
```

---

## 4. 命令集

### 4.1 命令清单

| 命令 | 功能 | 参数 | 对应 claude-obsidian |
|------|------|------|:-------------------:|
| `Canvas-Status` | 查询画布状态 | 可选指定画布名 | `/canvas` |
| `Canvas-New <name>` | 新建画布 | name: 画布名称 | `/canvas new` |
| `Canvas-Add-Image <path>` | 添加图片 | path: 本地路径或 URL | `/canvas add image` |
| `Canvas-Add-Text <content>` | 添加文本卡片 | content: Markdown 文本 | `/canvas add text` |
| `Canvas-Add-Note <page>` | 添加笔记链接 | page: wiki 页面路径 | `/canvas add note` |
| `Canvas-Add-PDF <path>` | 添加 PDF | path: 本地路径或 URL | `/canvas add pdf` |
| `Canvas-Zone <name> [color]` | 添加区域分组 | name+颜色(1-6) | `/canvas zone` |
| `Canvas-List` | 列出所有画布 | — | `/canvas list` |

### 4.2 与 KOS 命令风格一致

遵循 KOS 引擎的 `KOS-*` 命名惯例：
- 命令前缀：`Canvas-`
- 参数风格：`Canvas-Command <required> [optional]`
- 幂等性：已存在的画布不覆盖，报提示

### 4.3 自动定位算法

与 claude-obsidian 相同（参见 `references/canvas-spec.md`）：

```
1. 找到目标 Zone（group 节点）
2. Zone 内从左→右排列节点（间距 40px）
3. 超出 Zone 宽度 → 换行（间距 20px）
4. 无 Zone → 放在所有节点下方
5. 图片按宽高比自适应尺寸
```

---

## 5. 三平台技能架构

### 5.1 技能依赖链

```
json-canvas (参考层)     canvas (工作流层)
     │                        │
     │  JSON Canvas 1.0 格式规范  │  命令解析 + 文件操作 + 定位算法
     ▼                        ▼
  ┌───────────────────────────────────┐
  │       三平台共享 SKILL.md          │
  │  Claude Code / Codex CLI / OpenCode │
  └───────────────────────────────────┘
```

### 5.2 技能部署

| 技能 | Claude Code | Codex CLI | OpenCode |
|------|:-----------:|:---------:|:--------:|
| `json-canvas` | ✅ 新增 | ✅ 新增 | ✅ 已有 |
| `canvas` | ✅ 新增 | ✅ 新增 | ✅ 新增 |

### 5.3 与 KOS 统一入口集成

在 `kos/SKILL.md` 中新增意图识别规则：

| 用户表达 | 路由 |
|---------|------|
| canvas、画布、可视、visual、visualize | **canvas** |

---

## 6. 与现有 KOS 引擎的集成

### 6.1 KOS-Compile 可选联动

- **编译后**：对概念关系明确的 topic，询问用户是否生成关系 canvas
- **不自动生成**：避免噪音，需用户确认
- **输出**：`_attachments/canvases/[topic]-relations.canvas`

### 6.2 KOS-Triage 可选路由

- **分拣时**：如果 Inbox 文件包含图片、截图或视觉素材，提示"是否加入 canvas"
- **不自动路由**：文本文件照常三档分拣

### 6.3 KOS-Link 兼容

- L3 链接检查：扫描 `.canvas` 中的 `[[wiki-link]]` 和 `file` 路径
- 注意：.canvas 是 JSON 不是 Markdown，解析方式不同
- 初期 L3 跳过 `.canvas` 文件（P3 功能不做 L3 检查）

---

## 7. 文件锁集成

所有 `Canvas-Add-*` 和 `Canvas-Zone` 操作涉及写入 `.canvas` 文件，需**获取文件锁**：

```
python3 scripts/wiki-lock.py acquire _attachments/canvases/target.canvas
... 写入操作 ...
python3 scripts/wiki-lock.py release _attachments/canvases/target.canvas
```

已在 wiki-lock.py 的并发安全范围内。

---

## 8. 限制与边界

| 维度 | 限制 | 原因 |
|------|------|------|
| 图片处理 | 不裁剪/不压缩/不转换格式 | 保持原图质量 |
| 批量操作 | 一次建议 ≤5 个节点 | 避免 canvas JSON 过大 |
| 画布大小 | 不主动清理节点 | 用户手动管理 |
| 异步入图 | 不支持 | Obsidian 同步加载 |
| 搜索引擎 | Canvas 内容不在 KOS-Query 范围内 | JSON 非 Markdown |
| 跨语言 | Canvas 不翻译 | 视觉内容语言无关 |

---

## 9. 与 claude-obsidian 对比

| 特性 | claude-obsidian | KOS 适配 | 理由 |
|------|:--------------:|:--------:|------|
| 默认画布 | `wiki/canvases/main.canvas` | `_attachments/canvases/_index.canvas` | 集中式存储 |
| 附件目录 | `_attachments/images/canvas/` | `_attachments/media/images/` | 统一 media 管理 |
| /banana 集成 | ✅ | ❌ 跳过 | 无 banana-claude 插件 |
| 会话日志 | `.recent-images.txt` | ❌ 跳过 | vault 无持续图片生成 |
| auto-positioning | Python PIL 检测 | ✅ 保留 | 平台无关基础知识 |
| 画布列表 | `wiki/canvases/*.canvas` | `_attachments/canvases/*.canvas` | 路径适配 |
| 索引更新 | `wiki/overview.md` | KOS-Query 间接覆盖 | 不新增维护点 |

---

## 10. 实施路线

| 阶段 | 内容 | 前置条件 |
|:----:|------|----------|
| **P0** | 设计文档 + 目录结构 + `.gitkeep` | 本文档完成 |
| **P1** | 三平台 `json-canvas` 参考 SKILL.md | 参考 spec 已有 |
| **P2** | 三平台 `canvas` 工作流 SKILL.md | json-canvas 部署完成 |
| **P3** | KOS 统一入口集成 + 默认 `_index.canvas` | canvas 技能可用 |
| **未来** | KOS-Compile/Triage 可选联动 | 视觉内容量增长后 |

---

## 11. 参考资料

| 文件 | 说明 |
|------|------|
| [[4 Archives/claude-obsidian/skills/canvas/SKILL.md]] | 原始 canvas 技能 |
| [[4 Archives/claude-obsidian/skills/canvas/SKILL_CN.md]] | 中文版 |
| [[4 Archives/claude-obsidian/skills/canvas/references/canvas-spec.md]] | JSON Canvas 格式全参考 |
| [[.opencode/skills/json-canvas/SKILL.md]] | 已部署的 json-canvas 参考 |
| [[.flownote/skills/json-canvas/SKILL.md]] | Flownote 版 json-canvas |
| [[_meta/design/KOS-LLM-Wiki架构说明v3.0.md]] | 当前架构文档 |
| [JSON Canvas 1.0 规范](https://jsoncanvas.org/spec/1.0/) | 开放标准 |

---

> **设计状态：** v1.0 初稿 · P3 优先级
> **维护人：** AI Agent（KOS 引擎）
