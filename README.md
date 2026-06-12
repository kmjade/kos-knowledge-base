# KOS_LLM-Wiki

**Knowledge Organization System** — v3.0.1

PARA × UDC × LLM-Wiki — 三语言知识中枢，AI 驱动的个人知识管理。

![version](https://img.shields.io/badge/version-v3.0.1-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![lang](https://img.shields.io/badge/lang-CN%20%7C%20EN%20%7C%20TW-orange)

---

## 快速开始

```bash
# 用 Obsidian 打开本仓库作为 vault
# 启用核心插件「模板」，模板文件夹设为 _meta/system/templates/
```

### AI Agent 用户

首次会话读取 `WIKI.md` 入门，`AGENTS.md` 了解完整规范。常用命令：

```
KOS-Status                      # 查看 vault 状态
KOS-Triage [--file <path>]      # 分拣 Inbox
KOS-Wiki-Compile [--topic <>]   # 编译知识页
KOS-Research --topic "<主题>"     # 自主研究（搜索→抓取→综合）
KOS-Query [quick|standard|deep] # 三级知识查询
KOS-Link [--path <dir>] [--fix] # 健康检查（7级）
Daily Open                      # 今日笔记
```

---

## 核心特性

| 特性 | 说明 |
|------|------|
| **四方法论模式** | PARA / LYT / Zettelkasten / Generic，`methodology` 字段切换 |
| **AI 引擎** | 9 引擎：Triage / Compile / Research / Link / Query / Daily / Project / Archive / Init |
| **AutoResearch** | 自主研究管道：搜索→抓取→综合→Inbox→Triage |
| **矛盾检测** | Compile 自动检测矛盾，`[!contradiction]` callout 标记 |
| **检索增强** | BM25 粗排 + 语义重排序 |
| **热缓存** | `_meta/hot.md` 跨会话上下文 |
| **文件锁** | 多 writer 并发安全，advisory lock 可见锁 |
| **七级健康检查** | Frontmatter → UDC → 链接 → 跨语言 → 项目 → 空正文 → 陈旧声明 |
| **UDC 分类法** | 四层自动建议管道 |
| **三语言镜像** | CN / EN / TW 全对齐 |
| **三平台** | Codex / Claude Code / FLOWnote，统一 canon 源 |
| **People CRM** | 三级人物体系，隐私保护 |
| **周期回顾** | 日/周/月/季/年模板化 |
| **Canvas 可视化** | JSON Canvas 1.0 支持 |
| **生命周期 Hooks** | SessionStart / PostCompact / PostToolUse / Stop |

---

## 目录结构

```
├── 0 Inbox/          待分拣流水线
├── 1 Projects/       项目生命周期
├── 2 Areas/          长期领域
├── 3 Resources/      知识库
├── 4 Archives/       冷存储
├── _meta/            系统元数据
├── en/ + zh-tw/      语言镜像
├── Periodic/         周期笔记
│
├── AGENTS.md         AI 行为规范（权威源）
├── SYSTEM_GUIDE.md   系统完整指南
├── WIKI.md           Vault 入口
├── CLAUDE.md         快速参考
├── Home.md           Obsidian 首页
└── README.md         本文件
```

---

## 方法论模式

笔记通过 frontmatter 声明模式，无字段则默认 PARA：

```yaml
methodology: lyt
ace: "一句话定义"
mocs: ["[[MOC 路径]]"]
```

| 模式 | 适用场景 | 模板位置 |
|------|---------|---------|
| PARA | 项目驱动工作流 | `modes/para/` |
| LYT | 探索性学习 | `modes/lyt/` |
| Zettelkasten | 学术写作 | `modes/zettel/` |
| Generic | 轻量笔记 | `modes/generic/` |

---

## 版本历史

| 版本 | 日期 | 概要 |
|------|------|------|
| **v3.0.1** | 2026-06-12 | Phase 1 WP 全部实施完成 + 验收测试通过 + 文档同步 |
| **v3.0** | 2026-06-12 (v3.0.1) | 方法论模式 + AutoResearch + 检索增强 + 矛盾标记 + WIKI.md |
| v3.0-rc | 2026-06-09 | 三平台 Skill 架构 / KOS 引擎 / 热缓存 / 文件锁 / Canvas |
| v2.0 | 2026-06-07 | LifeOS × LLM-Wiki 融合 / Codex 适配 / 三语言 |
| v1.0 | 2026-06-03 | 初始系统构建 |

---

## 参考

- `SYSTEM_GUIDE.md` — 完整系统指南
- `WIKI.md` — Vault 入口
- `AGENTS.md` — AI 行为规范
- `_meta/hot.md` — 热缓存
- `_meta/index/links/Index/_index-zh-cn.md` — 总索引
- `1 Projects/26-15 KOS 吸收 claude-obsidian/` — 26-15 吸收项目文档

---

## 许可

MIT


