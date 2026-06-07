---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8:005.1
tags: [codex-log, operation, compile]
---

# 编译操作日志

> KOS-Wiki-Compile 的每次编译操作在此追加记录。

| 日期 | 操作 | 处理数 | 新建 | 更新 | 跳过 | 冲突 | 交叉引用 |
|------|------|--------|------|------|------|------|----------|
| 2026-06-07 | topic:LLM-Wiki | 7 | 7 | 0 | 0 | 0 | 21 |

## 2026-06-07T00:00

- **操作**：KOS-Wiki-Compile
- **触发方式**：manual
- **主题范围**：LLM-Wiki
- **处理文件数**：7
- **编译结果**：
  | 来源文件 | 编译产物 | 类型 | 操作 |
  |----------|----------|------|------|
  | 3 Resources/LLM-Wiki/LLM 基础.md | 3 Resources/LLM-Wiki/LLM 基础 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/Transformer 架构.md | 3 Resources/LLM-Wiki/Transformer 架构 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/提示工程.md | 3 Resources/LLM-Wiki/提示工程 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/训练与微调.md | 3 Resources/LLM-Wiki/训练与微调 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/RAG 与知识库集成.md | 3 Resources/LLM-Wiki/RAG 与知识库集成 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/知识组织与大模型.md | 3 Resources/LLM-Wiki/知识组织与大模型 (wiki).md | concept | created |
  | 3 Resources/LLM-Wiki/Transformer-架构解读.md | 3 Resources/LLM-Wiki/Transformer-架构解读 (wiki).md | concept | created |
- **新建页面**：7
- **更新页面**：0
- **跳过（已编译）**：0
- **冲突标记**：0
- **交叉引用追加**：21 个链接
- **索引更新**：待执行（需更新 _索引.md 及三语言镜像）
- **状态**：success

## 2026-06-07T00:30

- **操作**：KOS-Wiki-Compile — 回归测试
- **触发方式**：manual
- **主题范围**：_test_fixtures (5 个夹具)
- **测试结果**：
  | TC | 场景 | 结果 |
  |----|------|------|
  | TC-C01 | Concept 类型判定（LLM-Wiki 7 文件） | PASS |
  | TC-C02 | Entity 类型判定（Codex 介绍 → entity_type: tool） | PASS |
  | TC-C03 | Source 类型判定（Attention论文摘要 → source_type: paper） | PASS |
  | TC-C04 | 幂等性（compiled: true 文件不重复编译） | PASS |
  | TC-C05 | 增量编译（version 1→2，新增内容合并） | PASS |
  | TC-C06 | 内容冲突（conflict: true + CONFLICT 标记） | PASS |
  | TC-C07 | 多主题处理（跨领域链接 KOS-Triage ↔ KOS-Wiki-Compile） | PASS |
  | TC-C08 | 交叉引用提取（61 个 [[链接]] 全量提取） | PASS |
  | TC-C09 | 短内容跳过（< 50 字，无 wiki 产物） | PASS |
  | TC-C10 | 超长文档跳过（> 10000 字，无 wiki 产物） | PASS |
- **结论**：10/10 通过
- **状态**：success
