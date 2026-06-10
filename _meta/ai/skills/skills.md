---
created: 2026-06-09
updated: 2026-06-10
udc: 001.8:004.8:005.1
tags: [meta, skills, registry, reference]
---

# 技能注册表

> **规范源：** `_meta/skills/canon/`
> **同步契约：** `scripts/sync-skills.py`
> **更新于：** 2026-06-10 — 采用两层结构（KOS + Utility），AH 已退役/冻结；W2 版本漂移修复完成；W3 退役标记部署完成

---

## 使用说明

| 状态 | 含义 |
|:----:|------|
| `active` | 在规范源中，由 `sync-skills.py` 部署到全平台 |
| `retired` | 功能已被 KOS 吸收，原地保留不再同步 |
| `frozen` | 暂不维护，待未来由 `life` 吸收 |

---

## 规范（Active — 规范源部署）

| 技能 | 家族 | 目录名 | 状态 | 全平台 | 参考文件 | 说明 |
|------|:----:|:------:|:----:|:------:|:--------:|------|
| kos | KOS | kos/ | active | ✅ | — | 统一入口 |
| kos-triage | KOS | kos-triage/ | active | ✅ | — | Inbox 四维分拣 |
| kos-compile | KOS | kos-compile/ | active | ✅ | — | Wiki 六步编译 |
| kos-link | KOS | kos-link/ | active | ✅ | — | 六级健康检查（含 L6 空正文检测） |
| kos-query | KOS | kos-query/ | active | ✅ | — | 三级知识查询 |
| kos-daily | KOS | kos-daily/ | active | ✅ | — | 周期笔记 |
| kos-init | KOS | kos-init/ | active | ✅ | — | 系统初始化 |
| kos-project | KOS | kos-project/ | active | ✅ | — | 项目管理 |
| kos-archive | KOS | kos-archive/ | active | ✅ | — | 项目归档 |
| think | Utility | think/ | active | ✅ | — | 10 原则思维 |
| life | Utility | life/ | active | ✅ | — | 三支柱周期 |
| canvas | Utility | canvas/ | active | ✅ | — | 可视层 |
| json-canvas | Utility | json-canvas/ | active | ✅ | EXAMPLES.md | JSON Canvas |
| defuddle | Utility | defuddle/ | active | ✅ | — | 网页提取 |
| obsidian-markdown | Utility | obsidian-markdown/ | active | ✅ | CALLOUTS.md / EMBEDS.md / PROPERTIES.md | Markdown 语法 |
| obsidian-cli | Utility | obsidian-cli/ | active | ✅ | — | CLI 工具 |
| obsidian-bases | Utility | obsidian-bases/ | active | ✅ | FUNCTIONS_REFERENCE.md | Bases 规范 |

**合计：17 active**

---

## 退役（Retired — 已吸收到 KOS）

| 技能 | 替代 | 退役原因 |
|:----:|:----:|:---------|
| ah-project | kos-project | KOS 已吸收 |
| ah-archive | kos-archive | KOS 已吸收 |
| ah-init | kos-init | KOS 已吸收 |
| ah-inbox | kos-triage | KOS 已吸收 |
| ah-memory | hot.md + ai-memory/ | KOS 已吸收 |
| ah-week | kos-daily | KOS 已增强覆盖 |
| ah-month | kos-daily | KOS 已增强覆盖 |
| ah-year | kos-daily | KOS 已增强覆盖 |
| ah-legacy | — | 一次性迁移，已完成使命 |

**合计：9 retired**

---

## 冻结（Frozen — 待未来由 life 吸收）

| 技能 | 持有能力 | 未来归属 |
|:----:|:---------|:--------:|
| ah-read | 微信读书划线 → 文献笔记全流程 | life |
| ah-card | 卢曼卡片笔记法 | life |
| ah-think | 10 原则思维循环 + 30 思维模型 | life |
| ah-capture | 日间快速记录 | life |
| ah-note | 晨间笔记创建 | life |
| ah-review | 晚间复盘 | life |

**合计：6 frozen**

---

## 快速导航

| 分类 | 数量 | 位置 |
|:----|:----:|:-----|
| Active | 17 | `_meta/skills/canon/` |
| Retired | 9 | `.opencode/skills/`（原地保留） |
| Frozen | 6 | `.opencode/skills/`（原地保留） |
| **总计** | **32** | |
