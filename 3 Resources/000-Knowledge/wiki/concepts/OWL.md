---
aliases:
  - OWL
  - Web Ontology Language
  - OWL 本体语言
  - Web 本体语言
created: 2026-06-03
type: concept
updated: 2026-06-13
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

OWL (Web Ontology Language) W3C 推荐的本体描述語言，用於在語義網上定義類、屬性和推理規則。本系統的實體類型體系和關係推斷遵循 OWL 模型。

## 实体类型体系

```yaml
owl:Class:
  concept:         概念      wiki/concepts/
  entity:          实体      wiki/entities/
    person:        人物      entity_type: person
    tool:          工具      entity_type: tool
    organization:  组织      entity_type: organization
    paper:         论文      entity_type: paper
    product:       产品      entity_type: product
  source:          来源      wiki/sources/
```

## 推理规则

### 規則 1: 傳遞性 (Transitive)

```
IF A broader B AND B broader C
THEN A broader C

例: IF 分類法 broader 知识组织 AND DDC broader 分类
    THEN DDC broader 知识组织
```

### 規則 2: 對稱性 (Symmetric)

```
IF A related B
THEN B related A

例: IF DDC related UDC
    THEN UDC related DDC
```

### 規則 3: 逆關係 (Inverse)

```
IF A broader B
THEN B narrower A

例: IF 分類法 broader DDC
    THEN DDC narrower 分類法
```

### 規則 4: 實例化 (Instantiation)

```
IF A rdf:type owl:Class 人物
AND B rdf:type 人物
THEN B is-instance-of A

例: IF 人物 rdf:type owl:Class
    AND Paul-Otlet rdf:type 人物
    THEN Paul-Otlet is-instance-of 人物
```

## 本系統推理示例

```
知識   broader 分類法   (传前)
分類法 broader DDC       (传前)
──────
知识   broader DDC       (傳遞後: 规则1)

DDC related UDC          (已知)
──────
UDC related DDC          (推断: 规则2)

分類法 broader DDC       (已知)
──────
DDC narrower 分類法     (推断: 规则3)
```

## 參考

- [[SKOS]] `broader` — SKOS 是 OWL 的輕量級前身
- [[ISO-25964]]  — `related` 敘詞表關係標準
- [[KOS]] `part-of` 本體是 KOS 的一種
