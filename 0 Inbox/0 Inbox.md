---
created: 2026-06-12
updated: 2026-06-12
udc: 001.8:005.1
tags: [inbox, dashboard, pipeline, structure]
status: live
---

# 收件箱 | 0 Inbox

> IOO 知识生产流水线：**Input → Output → Outcome**

---

## 各区状态

| 分区 | 文件数 | 状态 |
|------|--------|------|
| [[./1-input/1-input\|1-input/]] | _ | 待处理 |
| [[./2-output/2-output\|2-output/]] | _ | 待使用 |
| [[./3-outcome/3-outcome\|3-outcome/]] | _ | 已闭环 |

---

## 各区说明

| 分区 | 用途 | 操作人 |
|------|------|--------|
| `1-input/` | 新捕获的材料（剪藏、碎片想法） | AI Triage |
| `2-output/` | 处理后的输出件（待使用） | 人确认 + 使用 |
| `3-outcome/` | 已闭环的记录（知识沉淀、实际影响） | 人记录 |
| `_processed/` | AI 处理后暂存区 | AI |

---

## 流程规则

1. 文件从 `1-input/` 进入流水线
2. AI 执行 Triage/Compile，处理后放入 `2-output/` 或 `_processed/`
3. 人确认后，闭环记录移入 `3-outcome/`
4. 不允许跳过阶段

## 镜像


| EN | [[../../en/0-inbox/0-inbox\|en/0-inbox/]] |

| TW | [[../../zh-tw/0-收件匣/0-收件匣\|zh-tw/0-收件匣/]] |

