# CLAUDE.md

> **Claude Code / Codex 快速参考**
> 完整行为规范请参见 `AGENTS.md`（权威源）。首次会话请读 `WIKI.md`。

## 快速命令

| 命令 | 用途 |
|------|------|
| `KOS-Status` | Vault 健康摘要 |
| `KOS-Triage [--mode <para\|lyt\|zettel\|generic>] [--file <path>]` | 分拣 Inbox |
| `KOS-Wiki-Compile [--mode <...>] [--file <path>]` | 编译 Wiki 页面 |
| `KOS-Research --topic "..." [--depth quick\|standard\|deep]` | 自主研究（搜索→抓取→综合） |
| `KOS-Link [--path <dir>] [--fix]` | 健康检查（L1-L7） |
| `KOS-Query [quick\|standard\|deep] <问题>` | 三级知识库查询（BM25 + 重排序） |
| `KOS-Project` | 创建/管理项目 |
| `KOS-Init [--status] [--fix]` | 初始化/健康检查 vault |
| `Daily Open` / `Day-Review` / `Week-Review` | 周期笔记 |

## 方法论模式

笔记通过 `methodology` frontmatter 字段声明模式：

```yaml
methodology: para | lyt | zettel | generic
```

无则默认 `para`，完全向后兼容。

| 模式 | 适用场景 | 关键字段 |
|------|---------|---------|
| PARA | 项目驱动工作流 | （默认，无额外字段） |
| LYT | 探索性学习 | `ace:`, `mocs:` |
| Zettelkasten | 学术写作 | `hub:`, `folgezettel:`, `liveness:` |
| Generic | 轻量笔记 | （仅 methodology 字段） |

Triage 和 Compile 支持 `--mode` 参数指定模式。

## 关键文件

- `AGENTS.md` — AI 行为规范（必读）
- `WIKI.md` — Vault 入口
- `_meta/hot.md` — 热缓存 / 会话上下文
- `_meta/index/links/Index/_index-zh-cn.md` — 总索引
- `_meta/system/templates/modes/` — 模式模板目录

## 会话协议

首次会话：`WIKI.md` → `AGENTS.md` → `_meta/hot.md` → `KOS-Status` → `Daily Open`
结束会话：更新 `_meta/hot.md`
