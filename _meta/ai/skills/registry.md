---
created: 2026-06-10
updated: 2026-09-20
udc: "001.8:004.8:005.1"
tags: [meta, skills, registry, design]
status: live
---

# 🗂️ 技能注册表 | Skill Registry

> **权威来源：** `_meta/ai/skills/canon/`（规范源）
> **同步规则：** `.claude/skills/`、`.codex/skills/`、`.opencode/skills/` 从 canon 同步（`_meta/system/scripts/sync-skills.py`）
> **不在契约内：** `.agents/skills/`（2026-09-20 标记 deprecated，见 §一 同步实测表）· `.flownote/skills/`（暂缓）
> **创建：** 2026-06-10 · 依据「技能体系收敛设计」（内部设计文档，`_meta/design/`，不发布）

---

## 图例

| 状态 | 含义 |
|:----:|:-----|
| ✅ active | 活跃维护，可用 |
| 🔶 legacy | 功能有 KOS 替代，保留待观察（30 天后决定删除） |
| 💡 incubating | 功能待吸收到 KOS |
| 📄 reference | 只参考不执行 |
| ⏸️ paused | 暂不维护 |

---

## 一、KOS 引擎（核心 · `_meta/ai/skills/canon/` · 同步到 `.claude/` · `.codex/` · `.opencode/`）

| Skill | 状态 | 平台 | 功能 | 备注 |
|:------|:----:|:----:|:-----|:-----|
| `kos` | ✅ active | Cx·Cl·Oc | 统一入口 / 意图路由 | 入口文件，不执行具体操作 |
| `kos-triage` | ✅ active | Cx·Cl·Oc | Inbox 分拣 — 四维分析 + 三阶门禁 | 💡 待吸收 ah-inbox 残留记录扫描 |
| `kos-compile` | ✅ active | Cx·Cl·Oc | raw → wiki 编译 — 六步管道 + delta 追踪 | 💡 待吸收 ah-note 笔记创建模板 |
| `kos-link` | ✅ active | Cx·Cl·Oc | 五级健康校验 — frontmatter/UDC/链接/跨语言/项目 | — |
| `kos-daily` | ✅ active | Cx·Cl·Oc | 每日笔记 + 周期回顾（日/周/月/季/年） | 💡 待吸收 ah-review 格式模板 |
| `kos-query` | ✅ active | Cx·Cl·Oc | 三级知识库查询 — Quick/Standard/Deep | — |
| `kos-init` | ✅ active | Cx·Cl·Oc | 知识库初始化 + 健康检查 | — |
| `kos-project` | ✅ active | Cx·Cl·Oc | 项目管理 — 编号/目录/主页/领域关联 | — |
| `kos-code` | ✅ active | Cx·Cl·Oc | MQL4 代码管理 — 工单/提交/状态追踪 | — |
| `kos-archive` | ✅ active | Cx·Cl·Oc | 项目归档 — 完成度核查/复盘/迁移/同步 | — |
| `kos-research` | ✅ active | Cx·Cl·Oc | 自主研究 — 搜索→抓取→综合→归档 | — |
| `kos-audit` | ✅ active | Cx·Cl·Oc | 审计管理与执行 — 注册/发现/到期/Schema | — |
| `kos-life` | ✅ active | Cx·Cl·Oc | 三支柱（学习/工作/生活）周期管理 | 2026-09-20 目录名由 `life/` 改为 `kos-life/`（对齐 `name:` 字段） |
| `kos-think` | ✅ active | Cx·Cl·Oc | 10 原则思维框架 | 2026-09-20 目录名由 `think/` 改为 `kos-think/`（对齐 `name:` 字段） |
| `canvas` | ✅ active | Cx·Cl·Oc | Canvas 可视化参考层 | 技能壳已就位 |
| `json-canvas` | ✅ active | Cx·Cl·Oc | JSON Canvas 文件创建/编辑 | — |
| `kos-novel` | ✅ active | Cx·Cl·Oc | AI 长篇小说创作系统 — 四层架构 + 圣经契约 + 切片法 | 2026-09-20 从 `dee1d80^` 恢复入 canon |

**同步实测（2026-09-20 复测，替换原「20 个 active 已同步 ✅」之失实表述）：**

| 平台目录 | 实测 | 判定 |
|:---------|:-----|:-----|
| `.codex/skills/` | 与 canon 逐项一致 | ✅ |
| `.opencode/skills/` | canon + 16 AH（退役/冻结原地保留） | ✅ 符合设计 |
| `.claude/skills/` | **目录不存在** —— 31 文件于 `dee1d80`（2026-09-16）被删 | 🔴 未恢复（2026-09-20 裁定：本 harness 走 `.claude/commands/`，不恢复） |
| `.agents/skills/` | 17 项，冻结于 2026-06-12 | ⛔ **deprecated** —— 非本契约平台，不纳入同步 |
| `.flownote/skills/` | canon −15 + 16 AH | 契约内「暂缓操作」 |

> 原表述「三平台 20 个 active 技能已从 canon 同步 ✅」**对 `.claude/` 为假**（该目录当时已不存在），
> 且 `sync-skills.py` 的 `PLATFORMS` 从来不含 `.agents/`。两者已于 2026-09-20 归并收敛裁定中一并更正。

---

## 二、AH 技能套件（`.opencode/skills/` + `.flownote/skills/`）

### 2.1 待吸收（功能有价值，KOS 缺此能力 → 合并到对应 KOS 技能）

| Skill | 当前状态 | 目标 | 吸收目标 | 优先级 |
|:------|:-------:|:-----|:---------|:------:|
| `ah-inbox` | 🔶 legacy | → 吸收到 | `kos-triage` | **P1** — 残留记录扫描 |
| `ah-note` | 🔶 legacy | → 吸收到 | `kos-compile` 或新建 `kos-note` | **P1** — 笔记创建模板 |
| `ah-card` | 💡 incubating | → 新建 | `kos-card`（Zettelkasten 工作流） | P2 — 先有需求再建 |
| `ah-review` | 🔶 legacy | → 吸收到 | `kos-daily` | **P1** — 周/月/年回顾格式 |
| `ah-week` | 🔶 legacy | → 吸收到 | `kos-daily` | **P1** — 周报模板 |
| `ah-month` | 🔶 legacy | → 吸收到 | `kos-daily` | P2 — 月报模板 |
| `ah-year` | 🔶 legacy | → 吸收到 | `kos-daily` | P2 — 年报模板 |
| `ah-memory` | 💡 incubating | → 吸收到 | `_meta/ai-memory/` 体系 | P2 — 状态管理 |
| `ah-capture` | 💡 incubating | → 吸收到 | Inbox 流程文档 | P3 — 移动端捕获 |
| `ah-legacy` | 🔶 legacy | → 吸收到 | `kos-triage` + `kos-compile` | P3 — 遗留内容处理 |

### 2.2 待弃用（功能已被 KOS 完全覆盖）

| Skill | 当前状态 | KOS 替代 | 保留期 |
|:------|:-------:|:---------|:------:|
| `ah-project` | 🔶 legacy | `kos-project` | 30 天（→ 2026-07-10） |
| `ah-archive` | 🔶 legacy | `kos-archive` | 30 天（→ 2026-07-10） |
| `ah-init` | 🔶 legacy | `kos-init` | 30 天（→ 2026-07-10） |

### 2.3 保持独立（无重叠，不冲突）

| Skill | 状态 | 理由 |
|:------|:----:|:------|
| `ah-think` | 📄 reference | 30 种思维模型参考，与 `kos-think` 10 原则互补 |
| `ah-read` | 📄 reference | 阅读工作流，独立领域 |
| `defuddle` | 📄 reference | 网页内容清理工具，轻量无依赖 |
| `obsidian-markdown` | 📄 reference | Obsidian 语法参考 |
| `obsidian-bases` | 📄 reference | Obsidian Bases 参考 |
| `obsidian-cli` | 📄 reference | Obsidian CLI 参考 |
| `ah` | 🔶 legacy | AH 路由入口 — 功能被 `kos` 替代 |

---

## 三、Life 角色（`_meta/ai/agents/life/` — 非技能，是角色定义）

| 角色 | 状态 | 文件 | 说明 |
|:-----|:----:|:-----|:------|
| 简报员 | ⏸️ paused | `_meta/ai/agents/life/简报员.md` | 晨间简报 + 傍晚回顾，当前未集成到会话协议 |
| 分析师 | ⏸️ paused | `_meta/ai/agents/life/分析师.md` | 周/月三支柱趋势，等待自动化触发 |
| 协作者 | ⏸️ paused | `_meta/ai/agents/life/协作者.md` | 目标进度异常提醒，等待自动化触发 |

**建议：** 三个 Life 角色的功能正在从 `_meta/ai/agents/life/` 的文档形式向 `kos-life/SKILL.md` 的技能形式迁移。完成后此处标记 deprecated。

---

## 四、KOS Agent（`_meta/ai/agents/kos/README.md` — 空占位）

| 文件 | 状态 | 说明 |
|:-----|:----:|:------|
| `_meta/ai/agents/kos/README.md` | ⏸️ paused | 空文件。当前 KOS 引擎由 AGENTS.md + 分散的 SKILL.md 驱动，未使用 agent 模式 |

**决策：** 暂时不填充。KOS 引擎的当前架构（AGENTS.md 规则 + SKILL.md 技能定义）工作良好。Agent 模式引入额外的间接层，收益不明确。观察 claude-obsidian 的 agent 模式成熟后再定。

---

## 五、目录大小 & 清理潜力

| 目录 | 当前体积 | 阶段 2 目标体积 | 清理量 |
|:-----|:-------:|:--------------:|:------:|
| `.codex/skills/` | 63 KB | 63 KB | 0（权威来源，不动） |
| `.claude/skills/` | 66 KB | 63 KB | ~3 KB（同步即可） |
| `.opencode/skills/` | 336 KB | ~200 KB | ~136 KB（标记 AH → legacy 后） |
| `.flownote/skills/` | 278 KB | 待定 | 取决于是否继续使用 flownote |

---

## 六、变更日志

| 日期 | 变更 |
|:----|:-----|
| 2026-06-10 | 初始创建。13 KOS ✅ / 15 AH 🔶 / 7 工具 📄 |
| 2026-09-20 | **归并收敛裁定（Tier 2 / 原 D2）**：`.agents/` 标记 deprecated（非契约平台）· `.claude/skills/` 确认未恢复（走 `.claude/commands/`）· `kos-novel` 从 `dee1d80^` 恢复入 canon（active 20 → 21）· 更正原「20 个 active 已同步 ✅」失实表述 · `sync-skills.py` 修复「平台目录缺失即跳过」缺陷 |
| 2026-09-20 | **H1 命名口径收口**：目录名对齐 `name:` 字段 —— `canon/life/` → `canon/kos-life/`、`canon/think/` → `canon/kos-think/`（经 Obsidian `fileManager.renameFile`），并同步 `.codex/` `.opencode/` `.agents/` 三处平台目录。依据内部深度分析文档:45-46「目录名 ≠ name 字段 → 技能静默不可用」；`workspace-tools.yaml` 的 `id:` 本已为 `kos-life`/`kos-think`，本次仅为路径对齐 |
