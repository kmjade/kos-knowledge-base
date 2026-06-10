# Plan: `_index-zh-cn.md` 优化 — 从空壳到完整 Dataview 主索引

**日期**: 2026-06-08  
**作者**: Hermes (plan mode)  
**关联 BUG**: [BUG-004](../1%20Projects/Bug追踪/bugs/BUG-004-_index-zh-cn-dataview无数据.md)

---

## Goal

将 `_meta/index/links/Index/_index-zh-cn.md` 从只有 frontmatter 的空文件，填充为与 `en/_index.md` / `zh-tw/_index.md` 同等质量的 **Dataview 自动聚合主索引**，作为简体中文 vault 的中央导航枢纽。

---

## Current State

| 文件 | 行数 | 内容 |
|------|------|------|
| `_index-zh-cn.md` | 7 | 仅 frontmatter，无正文 |
| `en/_index.md` | 182 | 完整 Dataview-powered index (v2.0) |
| `zh-tw/_index.md` | 169 | 完整 Dataview-powered index (v2.0) |
| `Index.md` | 78 | 字母索引概念说明页（不同文件） |

**根因**: `_index-zh-cn.md` 从未被填充过内容。BUG-004 的诊断方向正确（数据存在、Dataview 插件正常），但实际问题是文件里根本没有 Dataview 查询块。

---

## Proposed Structure

以 `en/_index.md` 为蓝本，调整为 CN vault 路径。9 个区块：

### 1. 头部
- 更新 `updated: 2026-06-08`
- 版本号升为 `2.1`
- 中文标题 + 一句话描述

### 2. 🚀 快速入口
CN 路径的 4 个关键入口链接：
| 入口 | 路径 |
|------|------|
| Home 仪表板 | `🏠Home` |
| 000 知识库 | `3 Resources/000-Knowledge/000-Knowledge` |
| People CRM | `3 Resources/People/wiki/index` |
| Codex 日志 | `_meta/system/logs/_index` |

### 3. 按 PARA 分类
- **1 — Projects**: Dataview FROM `"1 Projects"` WHERE status IN active/planning
- **2 — Areas**: 静态表（CN Areas 7 个：知识组织、知识管理、LLM研究、软件工程架构设计、生活、学习、工作）
- **_logs**: Dataview FROM `"_logs"`

### 4. 3 — Resources
- 按 UDC 分组: FROM `"3 Resources"` excluding People/000-Knowledge index pages
- 按标签分组: 同上
- 人物思想库: FROM `"3 Resources/People/wiki/entities"` GROUP BY tier
- 概念索引: FROM `"3 Resources/000-Knowledge/wiki/concepts"`

### 5. 系统设计文档
Dataview FROM `"_meta/design"`

### 6. UDC 分类总览
Dataview FROM `""`（全局）WHERE udc，GROUP BY udc

### 7. 标签聚合
Dataview FROM `""` WHERE tags，GROUP BY tags

### 8. 知识关联网络
Dataview FROM `""` WHERE outlinks > 0 OR inlinks > 0, TOP 30

### 9. 维护提示
与 en/zh-tw 一致的 tip callout，说明 Dataview 自动聚合、无需手动维护条目。

---

## Step-by-Step Plan

### Step 1: 验证 Data（只读）
- 抽查几个目标目录确认 .md 文件存在且有 frontmatter（udc/tags/status）
- 验证路径：`1 Projects/*/README.md` 含 status 字段
- 验证：`_meta/system/logs/` 下 8 个 .md 文件
- 验证：`3 Resources/People/wiki/entities/` 下有 ~30 个实体
- 验证：`3 Resources/000-Knowledge/wiki/concepts/` 下有 ~30 个概念
- 验证：`_meta/architecture/design/` 下 17 个设计文档

### Step 2: 填充 `_index-zh-cn.md`
写入完整内容到 `/mnt/j/KOS_LLM-Wiki/_meta/index/links/Index/_index-zh-cn.md`

**关键对齐检查**:
- [ ] 所有 Dataview FROM 路径去掉 `en/` / `zh-tw/` 前缀
- [ ] 快速入口链接使用 CN root 路径
- [ ] Areas 静态表使用 CN 目录名和文件名
- [ ] 中文 label（"筆記" → "笔记"、"狀態" → "状态"）
- [ ] People GROUP BY 使用 `tier` 字段（与 en/zh-tw 一致）
- [ ] Concepts 路径指向 `3 Resources/000-Knowledge/wiki/concepts`
- [ ] UDC 总览和标签聚合使用 `""`（全局搜索）

### Step 3: 更新关联引用
- 更新 `_meta/index/links/🔗 知识关联.md` 中指向 `_index-zh-cn` 的链接（已有，确认无误）
- 更新 `🏠Home.md` 中的索引链接（如需要）
- 关闭 BUG-004（标记为已修复）

### Step 4: 三语言一致性校验
- 确认 `_index-zh-cn.md` / `zh-tw/_index.md` / `en/_index.md` 结构对齐
- 确认三个文件 frontmatter 的 `udc: 001.8:025.4` 一致
- 确认 `tags: [index, moc, kos, navigation]` 一致

### Step 5: 幂等性保障
- 写入前检查目标文件当前内容
- 不被 Obsidian 打开时写入（避免缓存冲突）
- 完成后运行 `KOS-Link --file _meta/index/links/Index/_index-zh-cn.md` 验证

---

## Files to Change

| 文件 | 操作 | 行数变化 |
|------|------|----------|
| `_meta/index/links/Index/_index-zh-cn.md` | **重写** | 7 → ~170 行 |
| `_meta/index/links/🔗 知识关联.md` | 验证（无修改） | 0 |
| `1 Projects/Bug追踪/bugs/BUG-004-*.md` | 更新状态为 closed | ~3 行 |

---

## Risks & Notes

1. **Dataview 索引延迟**: 文件写入后 Obsidian 的 Dataview 需要重新索引才能显示数据。这是 Obsidian 端的正常行为，非文件问题。写入后提示用户在 Obsidian 中运行 `Dataview: Re-index Vault`。

2. **路径差异**: CN vault 的 `3 Resources` 下内容远多于 en/zh-tw（DDC 004~900 域，128+ 文件），Dataview 查询会返回更多行。这是正确的——CN 是主 vault。

3. **简体 vs 繁体**: CN 文件的列标题使用简体中文（"笔记"/"状态"/"标签"），与 zh-tw（"筆記"/"狀態"/"標籤"）区分。

4. **不可执行的操作**（plan mode）: 本计划不执行任何写操作。执行需切换到普通模式。

---

## Validation

执行后验证：
```bash
# 1. 文件非空
wc -l _meta/index/links/Index/_index-zh-cn.md  # 预期 > 50

# 2. 包含 Dataview 块
grep -c '```dataview' _meta/index/links/Index/_index-zh-cn.md  # 预期 8+

# 3. 不包含 en/ 或 zh-tw/ 前缀（确认是 CN 路径）
grep 'en/' _meta/index/links/Index/_index-zh-cn.md  # 预期 0
grep 'zh-tw/' _meta/index/links/Index/_index-zh-cn.md  # 预期 0

# 4. KOS-Link 检查
KOS-Link --file _meta/index/links/Index/_index-zh-cn.md
```

---

## Open Questions

- **是否需要 `_index.md`（无后缀）作为 `_index-zh-cn.md` 的符号链接或别名？** AGENTS.md 中有两处矛盾引用：
  - "更新 `_index.md`（简体）" 
  - "CN 页面引用 `_index-zh-cn`"
  
  建议：统一使用 `_index-zh-cn.md`，不创建无后缀版本，保持与 en/zh-tw 的命名一致性（它们都用 `_index.md` 因为它就在自己的语言目录里，不需要后缀区分）。
