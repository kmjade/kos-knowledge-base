---
aliases:
  - SKOS
  - Simple Knowledge Organization System
  - SKOS 敘詞表
  - 簡易知識組織系統
created: 2026-06-03
type: concept
updated: 2026-06-13
topic: knowledge-organization
category: 敘詞表
status: reviewed
ddc: "025.4"
udc: "025.4"
confidence: high
tags:
  - #udc/025
  - #ddc/025
---

# SKOS 敘詞表

> W3C 标准 · RDF 敘詞表模型· `skos:broader` · `skos:narrower` · `skos:related`

---

## 定义

SKOS (Simple Knowledge Organization System) 是 W3C 推薦的敘詞表 RDF 表示标准，用于在语义网中表达概念体系及其关系。本系统的概念页关系遵循 SKOS 模型。

## 核心关系

| SKOS | 含义 | wikilink 格式 |
|:-----|:-----|:--------------|
| `skos:broader` | 上位概念 | `[[Parent]] — broader` |
| `skos:narrower` | 下位概念 | `[[Child]] — narrower` |
| `skos:related` | 关联概念 | `[[Related]] — related` |
| `skos:exactMatch` | 精确匹配 | `[[Equivalent]] — =EQ` |
| `skos:closeMatch` | 近似匹配 | `[[Similar]]` |

## 標準化格式

所有概念页的相关概念章节应使用统一格式，

```markdown
## 相关概念
- [[broader-concept]]  — broader  上位概念
- [[narrower-concept]]  — narrower 下位概念
- [[related-concept]]  — related  关联概念
```

## 本系統應用

| 标准 | ISO 25964 | SKOS |
|:-----|:----------|:-----|
| 等同 | EQ | `skos:exactMatch` |
| 层级 | BT/NT | `skos:broader`/`skos:narrower` |
| 关联 | RT | `skos:related` |

- [[ISO-25964]] `related` — SKOS 是 ISO 25964 的 RDF 實現
- [[Dublin-Core]] `related` — 元數據標準
- [[OWL]] `broader` — OWL 是 SKOS 的擴展(更复杂的本体)
