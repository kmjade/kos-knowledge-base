---
name: kos-fold
description: 日志折叠。把 _meta/system/logs/operations/ 下的操作日志（maintenance/triage/compile）按 2^k 批折叠成可追溯的摘要页（fold），确定性结构由脚本保证、抽取式摘要由本技能纪律约束。触发词：折叠日志、fold、日志折叠、rollup、roll up log、折这批日志。
allowed-tools: Read Write Edit Bash
---

# kos-fold：日志折叠

> 吸收自 claude-obsidian `wiki-fold`（`4 Archives/legacy/claude-obsidian/skills/wiki-fold/`），按 Phase5-吸收方案 §5.1–§5.6 逐条适配 KOS 的三条异构日志。
> 定位：补齐 KOS 在「日志汇总体」上的**实现层**缺口 —— 此前全库 grep `fold|rollup|折叠` 零命中，日志无上界纯追加（maintenance.md 2927 行 / 292 KB 实测）。

---

## 分工：脚本 vs 技能（非散文-only 的落点）

`kos-fold` 与 Phase 1–4「只吸散文」的路径**本质不同**，按三件套落地：

| 层 | 载体 | 职责 |
|:--|:--|:--|
| **确定性结构层** | `_meta/system/scripts/kos-fold.py` | 二进制安全读 · 条目切分 · 批选择 · 确定性 FOLD-ID · 重复拦截 · 加锁写 scaffold · dry-run 零残留 |
| **抽取式摘要层** | 本 SKILL.md（模型按纪律执行） | 有界读子条目引用页 · 抽取式 Summary / Key Outcomes / Cross-entry Themes（不许编造） |

脚本保证**结构正确**（幂等、加法、确定性），本技能保证**内容诚实**（extractive-only）。二者互补，缺一即为「散文-only」。

---

## 执行流程

```
1. dry-run 取 scaffold + FOLD-ID
   python _meta/system/scripts/kos-fold.py --log maintenance --k 4
   （或 --range 1-16 显式区间；--log 缺省 maintenance）

2. 读子条目引用页（有界：0–15，硬上限 15）
   仅读「日志条目 bullet 未完整捕获」的引用页；缺页记 page_missing，不编造。

3. 抽取式填充（见下「抽取规则」）
   Summary 列 + Key Outcomes + Cross-entry Themes + Child Pages

4. 写 scaffold（加锁）
   python _meta/system/scripts/kos-fold.py --log maintenance --k 4 --commit

5. Edit scaffold 填入抽取内容
   脚本写的是确定性骨架（frontmatter + Child Entries 表日期/标题），
   本技能用 Edit 填入 Summary / Key Outcomes / Themes（替换占位符）。

6. 汇报：FOLD-ID、折叠条数、以及 --commit 只写了文件（未碰 git）。
```

> ⚠️ **`--commit` 只写文件，绝不碰 git**（见「与 legacy 的差异」#1）。提交与否由用户裁定，与 全局规约「Commit only when the user asks」一致。

---

## 抽取规则（extractive-only，核心纪律）

1. **只抽取不发明** —— 每条 Summary / Key Outcome / Theme 必须能追溯到**具体子条目**（引用日期或原文行）；不引入子条目没有的事件、计数、解读。
2. **数字回 grep 校验** —— 若写「N 个概念页」「M 次提交」，回源条目 grep 该数字核对；不符即 dry-run 阻断。
3. **跨条目主题须点名** —— 一个跨多条的 Theme 必须逐个写出贡献条目；否则不写。
4. **歧义是特性** —— 条目含糊时写「ambiguous in source: [[条目]]」，不强行选一种解读。
5. **不跨条目合并而不点名** —— 见 legacy `wiki-fold` 的 What NOT to do。

---

## 参数（脚本 CLI）

| 参数 | 默认 | 说明 |
|:--|:--|:--|
| `--log <name>` | `maintenance` | 目标日志（maintenance/triage/compile），一次只折一条 |
| `--k` | 4 | 批指数，批大小 = `2^k`（16 条） |
| `--range a-b` | — | 显式条目区间（1-indexed，文件序），覆盖 `k` |
| `--commit` | 关 | 写 scaffold 文件；缺省 dry-run 仅 stdout |
| `--force` | 关 | 覆盖同 ID 已存在的 fold |

**条目不足 `2^k` 时脚本报缺口并 exit 3** —— 不静默折一个残缺批次。

---

## 不变量（继承 legacy，逐条适配 KOS）

| # | 不变量 | KOS 适配 |
|:--:|:--|:--|
| 1 | **结构幂等** | 同 range + 同 k → 同 ID → 重复检测拦截。不承诺字节一致（模型措辞会变） |
| 2 | **加法性** | 原日志条目**绝不修改、移动、删除** —— 与「绝不删除文件」一致 |
| 3 | **有界读** | 每次折叠读取引用页 0–15，硬上限 15 |
| 4 | **extractive-only** | 每条论断可追溯到具体子条目；数字回 grep 校验 |
| 5 | **不链式调用** | 不调用 triage/compile/link/research |

---

## 与 legacy 的四处必须差异

1. **不引入自动提交** —— legacy 靠 PostToolUse hook 自动 `git add/commit`；KOS 规约是「Commit only when the user asks」。`--commit` 只写文件，绝不碰 git。
2. **并发保护复用 `wiki-lock.py`**（非 `.sh`）—— fold 写入前 acquire、写完 release。
3. **无外发** —— 纯本地 extractive，无任何网络调用。
4. **dry-run 零残留** —— 不写任何文件，不留临时文件。

---

## 边界（不做）

- 不实现 fold-of-folds（层级堆叠，同 legacy 明确排除）。
- 不自动触发（fold 一律人工/技能显式调用）。
- 不改动原日志条目（加法性硬约束）。
- 不改动 `4 Archives/legacy/claude-obsidian/`（只读来源）。
- 不碰任何 `reviewed: true` 页面。

---

## 相关引擎

- `kos-triage` / `kos-compile` —— 二者是 fold 的**源日志**生产者（`operations/triage.md` / `operations/compile.md`）
- `kos-audit` —— 折叠结果可纳入审计复核
- `kos-task-executor` —— 同为「三件套非散文-only」落地（先例）
