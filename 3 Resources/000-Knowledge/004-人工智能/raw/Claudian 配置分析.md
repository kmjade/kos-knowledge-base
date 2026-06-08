---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [claude, config, analysis, skills, reference]
---

# claude-obsidian 分析 — Claudian 配置视角

> 从当前 Claude Code 配置出发，提取 claude-obsidian 中可直接应用的部分

---

## 当前配置现状

`Claudian 配置.md` 中仅记录了 2 条路径：

```
C:\Users\Administrator\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code\bin\claude.exe
C:\Users\Administrator\AppData\Roaming\npm\node_modules\@openai\codex\vendor\x86_64-unknown-linux-musl\bin\codex.exe
```

**缺失**：
- ❌ 无 `.claude/` 目录（skills, settings, 等）
- ❌ 无 hooks 配置
- ❌ 无任何可调用的自定义 skill
- ❌ 无系统级热缓存（hot.md）机制

---

## claude-obsidian 可复用的核心资产

### 1. Hooks 系统（最高优先级）

claude-obsidian 的 `hooks/hooks.json` 定义了 4 个生命周期钩子，可直接复用：

| 钩子 | 作用 | 在当前 vault 的对应 |
|------|------|-------------------|
| **SessionStart** | 自动加载热缓存 + 清理过期锁 | 替代 AGENTS.md 中手动的"会话开始"协议 |
| **PostCompact** | 上下文压缩后恢复热缓存 | 新增（当前无此能力） |
| **PostToolUse** | 每次写操作后自动 git commit | 新增（当前需手动） |
| **Stop** | 会话结束时提示更新 hot.md | 增强 AGENTS.md 的"会话结束"协议 |

**实现路径**：创建 `.claude/hooks.json`，将 AGENTS.md 的会话协议迁移为自动执行的 hooks。

### 2. Hot Cache 模式（wiki/hot.md）

claude-obsidian 的核心模式：

```markdown
# Hot Cache

> Last updated: YYYY-MM-DD HH:MM

## Key Recent Facts
- ...

## Recent Changes
- ...

## Active Threads
- ...
```

- 每次会话结束覆写，限制 500 tokens
- 会话开始时自动加载（SessionStart hook）
- 上下文压缩后自动重新加载（PostCompact hook）

**在当前 vault 可做到**：
- 在 `_meta/` 下创建 `hot.md`
- 会话结束时 AI 自动更新
- 解决跨会话上下文丢失的问题

### 3. Per-file Advisory Locking（wiki-lock.sh）

并发安全机制，当多 writer 同时操作时防止冲突：

```bash
bash scripts/wiki-lock.sh acquire "path/to/file.md"
# ... 执行写操作 ...
bash scripts/wiki-lock.sh release "path/to/file.md"
```

**问题**：当前 vault 使用 Bash 工具时每次都是独立进程，AGENTS.md 定义的 KOS-Triage 和 KOS-Wiki-Compile 如果被并行调用可能冲突。

**实现**：可将 `wiki-lock.sh` 复制到 vault 的 `_meta/scripts/` 下，在技能中引用。

### 4. CLI Transport 检测机制

```bash
bash scripts/detect-transport.sh
# 输出到 .vault-meta/transport.json
```

自动检测可用通道：Obsidian CLI → MCP → 文件系统直接写入。

**在当前 vault 的应用**：可检测 claude.exe / codex.exe 的可用性，写入 `_meta/transport.json`，让技能根据可用工具选择最优写入路径。

### 5. 可引入的技能模板

| claude-obsidian Skill | 当前 vault 的替代 | 建议 |
|----------------------|------------------|------|
| `wiki-ingest` | AGENTS.md 的 KOS-Triage + KOS-Wiki-Compile | 规则更详细，可参考强化 |
| `wiki-lint` | AGENTS.md 的 KOS-Link | 增加了孤立页面检测和 age 检查 |
| `wiki-fold` | 无对应 | **新增**：日志折叠归纳 |
| `save` | 无对应 | **新增**：会话内容直接归档为笔记 |
| `think` | 无对应 | **新增**：10 原则思考框架 |
| `wiki-query` | 无对应 | **新增**：结构化问答模式 |

---

## 优先级建议

| 优先级 | 事项 | 工作量 | 价值 |
|--------|------|--------|------|
| 🔴 P0 | 创建 `.claude/skills/`，迁移 AH Skills | 中 | 高 |
| 🔴 P0 | 创建 `.claude/settings.json` 基础配置 | 低 | 高 |
| 🟡 P1 | 实现 `_meta/hot.md` 热缓存机制 | 低 | 中 |
| 🟡 P1 | 创建 `.claude/hooks.json`，自动化会话协议 | 中 | 高 |
| 🟢 P2 | 引入 `wiki-fold` 日志折叠能力 | 中 | 中 |
| 🟢 P2 | 引入 `wiki-lock.sh` 并发保护 | 低 | 低（单用户场景） |
| 🟢 P2 | 引入 `think` 思考框架作为元技能 | 低 | 中 |

---

## 参考资源

- 项目主页：https://github.com/AgriciDaniel/claude-obsidian
- 原始 LLM Wiki 模式：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Obsidian Skills（kepano）：https://github.com/kepano/obsidian-skills
- 完整分析笔记：[[_meta/design/claude-obsidian分析.md|claude-obsidian 分析]]
