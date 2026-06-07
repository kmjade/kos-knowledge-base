---
aliases:
  - OWL
  - Web Ontology Language
  - OWL 本体语言
  - Web 本体语言
created: 2026-06-03
type: concept
topic: knowledge-organization
category: 本体
status: reviewed
ddc: "025.4"
udc: "025.4"
confidence: high
tags:
  - #udc/025
  - #ddc/025
---

# OWL 本体推理规则

> W3C 标准 · Web Ontology Language · 实体类型 + 关系推断

---

## 定义

OWL (Web Ontology Language) 是 W3C 推荐的本体描述语言，用于在语义网上定义类、属性和推理规则。本系统的实体类型体系和关系推断遵循 OWL 模型。

## 实体类型体系

```yaml
owl:Class:
  concept:         概念      ← wiki/concepts/
  entity:          实体      ← wiki/entities/
    person:        人物      ← entity_type: person
    tool:          工具      ← entity_type: tool
    organization:  组织      ← entity_type: organization
    paper:         论文      ← entity_type: paper
    product:       产品      ← entity_type: product
  source:          来源      ← wiki/sources/
```

## 推理规则

### 规则 1: 传递性 (Transitive)

```
IF A — broader → B AND B — broader → C
THEN A — broader → C

例: IF 分类法 broader 知识组织 AND DDC broader 分类法
    THEN DDC broader 知识组织
```

### 规则 2: 对称性 (Symmetric)

```
IF A — related → B
THEN B — related → A

例: IF DDC related UDC
    THEN UDC related DDC
```

### 规则 3: 逆关系 (Inverse)

```
IF A — broader → B
THEN B — narrower → A

例: IF 分类法 broader DDC
    THEN DDC narrower 分类法
```

### 规则 4: 实例化 (Instantiation)

```
IF A rdf:type owl:Class → 人物
AND B rdf:type 人物
THEN B — is-instance-of → A

例: IF 人物 rdf:type owl:Class
    AND Paul-Otlet rdf:type 人物
    THEN Paul-Otlet is-instance-of 人物
```

## 本系统推理示例

```
知识   broader 分类法    (传递前)
分类法 broader DDC       (传递前)
──────
知识   broader DDC       (传递后: 规则1)

DDC related UDC          (已知)
──────
UDC related DDC          (推断: 规则2)

分类法 broader DDC       (已知)
──────
DDC narrower 分类法      (推断: 规则3)
```

## 参考

- [[SKOS]] — `broader` SKOS 是 OWL 的轻量级前身
- [[ISO-25964]] — `related` 叙词表关系标准
- [[KOS]] — `part-of` 本体是 KOS 的一种
