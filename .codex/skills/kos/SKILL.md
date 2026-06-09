---
name: kos
description: KOS LLM-Wiki 知识组织系统统一入口。自动识别意图，分发给 KOS-Triage / KOS-Compile / KOS-Link / KOS-Daily / KOS-Query / Canvas / KOS-Init 子技能。
---

# KOS LLM-Wiki 知识组织引擎

> **统一入口** — 只需 `/kos`，AI 帮你完成知识组织操作

---

## 技能速查

| # | 技能 | 功能 |
|---|------|------|
| 1 | `/kos-triage` | 分拣 Inbox 文件 → 路由到目标目录 |
| 2 | `/kos-compile` | 编译 raw/ → wiki/ 页面 |
| 3 | `/kos-link` | 校验 frontmatter / UDC / 断链 / 跨语言一致性 |
| 4 | `/kos-daily` | 创建每日笔记 / 周期回顾 |
| 5 | **Canvas** | **可视化参考层 — 创建/管理 Obsidian Canvas 画布** |
| 6 | **KOS-Init** | **知识库初始化与健康检查 — 一键检查/修复 vault 结构** |

---

## 意图识别

| 用户表达 | 匹配技能 |
|---------|---------|
| 分拣、Inbox、收件箱、整理文件 | **kos-triage** |
| 编译、生成 wiki、知识库页面 | **kos-compile** |
| 检查链接、校验、frontmatter、UDC | **kos-link** |
| 今日笔记、日回顾、周报、月报、年报 | **kos-daily** |
| canvas、画布、可视、visual、visualize、展示 | **Canvas** |
| 初始化、检查、修复、健康、init、setup、一键初始化 | **KOS-Init** |
| 状态、进度、当前情况 | 显示各技能状态 |

---

## 执行步骤

1. **识别意图** — 匹配用户输入到对应子技能
2. **加载技能** — `Read .codex/skills/kos-xxx/SKILL.md`
3. **执行任务** — 按技能指引操作
4. **完成确认** — 询问是否继续

---

## 元信息

```yaml
name: kos
version: 1.0.0
description: KOS LLM-Wiki 知识组织引擎统一入口
dependencies:
  - kos-triage
  - kos-compile
  - kos-link
  - kos-daily
  - canvas
  - kos-init
```
