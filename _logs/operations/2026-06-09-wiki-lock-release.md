---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [release, wiki-lock, v1.3]
---

## 2026-06-09：文件锁系统发布（v1.3）

### 背景

从 claude-obsidian 的 wiki-lock.sh 借鉴，实现跨平台文件锁机制，消除多 writer 并发写入同一笔记时的数据竞争风险。

### 交付清单

| 组件 | 说明 |
|------|------|
| scripts/wiki-lock.py | 跨平台 Python 锁脚本（acquire/release/list/clear-stale/peek） |
| 	ests/test_wiki_lock.py | 17 项单元测试全部通过 |
| KOS-Compile SKILL.md（三平台） | 并发安全章节 + acquire/release 模式 |
| KOS-Triage SKILL.md（三平台） | 并发安全章节 + acquire/release 模式 |
| AGENTS.md | 会话开始清残留锁 + 结束释放检查 |
| 架构文档 | 文件锁状态更新为 ✅ 已实现 |

### 核心设计

- 锁文件: _meta/.locks/<sha1(path)>.lock
- 原子创建: os.open(O_CREAT | O_EXCL)
- 过期阈值: 60s（acquire）/ 3600s（clear-stale）
- 元锁: 目录锁（os.mkdir 跨平台原子）

### 影响范围

- 新增 2 个文件（scripts/wiki-lock.py, tests/test_wiki_lock.py）
- 修改 7 个文件（AGENTS.md, 架构文档, 三平台 Compile + Triage SKILL, 项目 README）
- 所有 AI Agent 写入操作前必须 acquire 锁
