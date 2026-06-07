---
aliases:
  - KOS+LLM-Wiki Architecture
  - 知识组织系统架构说明书
created: 2026-06-03
version: "1.0"
status: draft
type: design
topic: knowledge-systems
ddc: "025.4"
udc: "025.4"
tags:
  - kos
  - classification
  - ontology
  - metadata
  - architecture
  - #udc/025
  - #ddc/025
---

# KOS+LLM-Wiki 架构设计说明书 v1.0

> 知识组织系统 (Knowledge Organization Systems) × LLM-Wiki 编译引擎
> DDC 025.4 · UDC 025.4 · 覆盖分类法·叙词表·本体·元数据

---

## 目录

1. [设计哲学](#1-设计哲学)
2. [KOS 谱系图](#2-kos-谱系图)
3. [五层架构](#3-五层架构)
4. [KOS 类型与 LLM-Wiki 映射](#4-kos-类型与-llm-wiki-映射)
5. [分类法层](#5-分类法层)
6. [叙词表层](#6-叙词表层)
7. [本体层](#7-本体层)
8. [元数据层](#8-元数据层)
9. [主题图](#9-主题图)
10. [实现计划](#10-实现计划)

---

## 1. 设计哲学

### 核心公理

```
KOS 是知识组织的语法，LLM-Wiki 是知识编译的引擎。
语法定义规则，引擎执行编译。
```

### 三条原则

| 原则 | 含义 | 体现 |
|:-----|:-----|:-----|
| **谱系完整性** | 覆盖 KOS 全谱系 (分类法→叙词表→本体→元数据→主题图) | DDC·UDC·CLC·LCC 四体系 + SKOS·OWL·RDF |
| **互操作性** | 不同 KOS 之间可映射和翻译 | 跨体系映射表 (UC-40~43) |
| **编译驱动** | KOS 是 AI 编译的规则而非手工维护的目录 | /triage + /wiki-compile 自动应用 |

---

## 2. KOS 谱系图

```
KOS 复杂程度光谱 (低 → 高)

分类法 (Classification)
  ├── DDC         层级枚举            ← 本系统骨架
  ├── UDC         分面组合            ← 本系统关节
  ├── CLC         中图分类法          ← 兼容层
  └── LCC         国会分类法          ← 兼容层

叙词表 (Thesaurus)
  ├── SKOS        语义网叙词表        ← 概念关系建模
  └── ISO 25964   叙词表标准          ← 关系模型 (BT/NT/RT/EQ) + 互操作框架 (=EQ/=BM/=NM/=RM)

本体 (Ontology)
  ├── OWL         Web 本体语言       ← 知识图谱
  ├── RDFS         RDF Schema        ← 语义推理
  └── 概念模型     〖已实现〗          ← wiki/ 概念页关系

元数据 (Metadata)
  ├── Dublin Core   DC 元数据         ← Frontmatter 标准
  └── MARC         机读目录           ← 参考

主题图 (Topic Map)
  ├── ISO 13250    主题图标准         ← 跨库关联
  └── XTM          XML 主题图         ← 知识导航
```

---

## 3. 五层架构

```
┌─────────────────────────────────────────────────────────────────────┐
│   Layer 5: 知识图谱 (Knowledge Graph)                                │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐                    │
│   │ Concepts │◄──►│ Entities │◄──►│ Sources  │                    │
│   │  概念节点  │    │  实体节点  │    │  来源节点  │                    │
│   └────┬─────┘    └────┬─────┘    └────┬─────┘                    │
│        │               │               │                           │
├────────┼───────────────┼───────────────┼────────────────────────────┤
│  Layer 4: 本体层 (Ontology) — OWL/RDF                              │
│  关系推断: is-a · part-of · uses · created · exemplifies           │
├─────────────────────────────────────────────────────────────────────┤
│  Layer 3: 叙词表层 (Thesaurus) — SKOS                              │
│  概念关联: broader · narrower · related · use · use-for            │
├─────────────────────────────────────────────────────────────────────┤
│  Layer 2: 分类法层 (Classification) — DDC·UDC·CLC·LCC              │
│  体系编码: ddc · udc · clc · lcc + #udc/ · #ddc/ 标签              │
├─────────────────────────────────────────────────────────────────────┤
│  Layer 1: 元数据层 (Metadata) — Frontmatter + DC                   │
│  YAML frontmatter: type · created · topic · aliases · sources      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. KOS 类型与 LLM-Wiki 映射

| KOS 类型 | 标准 | 本系统实现 | 文件/配置 |
|:---------|:-----|:-----------|:----------|
| 分类法 | DDC | 子库组织 + #ddc/ | [[DDC-UDC 映射表]] |
| 分类法 | UDC | 分面标引 + #udc/ | [[UDC 標籤體系]] |
| 分类法 | CLC | 兼容映射 | [[CLC 映射表]] |
| 分类法 | LCC | 兼容映射 | [[LCC 映射表]] |
| 叙词表 | SKOS | 概念关系 (is-a/part-of) | wiki/concepts/ 链接 |
| 元数据 | Dublin Core | Frontmatter (type/created/source) | 所有 .md 文件 |
| 本体 | OWL | 实体类型 + 关系推断 | wiki/entities/ |
| 主题图 | ISO 13250 | META-INDEX + 跨库关联 | [[_META-INDEX]] |

---

## 5. 分类法层

### 5.1 四体系并行

| 体系 | 角色 | 编码 | 文件数 | 维护 |
|:-----|:-----|:----:|:------:|:-----|
| DDC | 子库骨架 | `ddc: "XXX"` | 92+ wiki 页 | AI + 人类 |
| UDC | 分面标签 | `udc: "XXX"` | 92+ wiki 页 | AI 自动 (UC-07) |
| CLC | 中文兼容 | `clc: "XXX"` | 映射表 | 人类 (UC-40) |
| LCC | 学术兼容 | `lcc: "XXX"` | 映射表 | 人类 (UC-41) |

### 5.2 双标签体系

```
#udc/004.8  ←→  #ddc/006.3
  UDC 标签        DDC 标签 (镜像)

使用原则:
  - wiki 概念页: 双标签同时存在
  - raw/ 资料: #udc/ 优先
  - 日常查询: #udc/ 首选 (更精确)
```

---

## 6. 叙词表层

### 6.0 ISO 25964 叙词表标准

ISO 25964（分两部分：25964-1 叙词表设计与维护，25964-2 与其他词表的互操作）是国际叙词表标准，定义概念关系的统一模型。

#### ISO 25964 核心关系

| 关系 | 符号 | ISO 25964 定义 | 本系统等价 |
|:-----|:----:|:---------------|:-----------|
| 等同关系 | EQ | 优选词 ↔ 非优选词 | `aliases:` 字段 |
| 层级关系 | BT/NT | 上位词/下位词 | `broader` `narrower` |
| 关联关系 | RT | 语义关联 | `related` |
| 用代关系 | USE/UF | 用/代 | `aliases:` 首项为优选 |

#### ISO 25964 ↔ 本系统映射

```yaml
# ISO 25964 概念记录 → wiki/concepts/ frontmatter
---
aliases: [优选词, 非优选词1, 非优选词2]   # EQ: USE/UF
created: YYYY-MM-DD
type: concept
topic: [domain]
ddc: "XXX"
udc: "XXX"

# 叙词关系 (在正文中以 wikilink 表达)
# BT: broader → [[parent-concept]]
# NT: narrower → [[child-concept]]
# RT: related  → [[related-concept]] — related
---
```

#### ISO 25964 互操作性 (Part 2)

```
ISO 25964-2 定义了不同 KOS 之间的映射：
  =EQ  (等同映射)  →  exactMatch
  =BM  (上位映射)  →  broaderMatch
  =NM  (下位映射)  →  narrowerMatch
  =RM  (关联映射)  →  relatedMatch

本系统跨体系映射 (UC-40~43)：
  DDC =EQ CLC TP18    (人工智能)
  DDC =EQ LCC Q335    (AI)
  UDC =BM DDC         (UDC broader DDC)
```

### 6.1 SKOS 关系映射

| SKOS 关系 | 本系统等价 | 示例 |
|:----------|:-----------|:-----|
| `skos:broader` | `[[parent-concept]]` | [[Classification]] `broader` [[DDC]] |
| `skos:narrower` | `[[child-concept]]` | [[UDC]] `narrower` [[Classification]] |
| `skos:related` | `[[related-concept]] — related` | [[DDC]] `related` [[UDC]] |
| `skos:exactMatch` | `[[equivalent]] — is-a` | [[DDC]] `≠` [[UDC]] |
| `skos:closeMatch` | `[[similar]]` | [[CLC-TP18]] `closeMatch` [[DDC-006.3]] |

### 6.2 叙词表结构

```
知识组织 (broader)
  ├── 分类法 (narrower)
  │   ├── DDC (exactMatch: 025.4)
  │   ├── UDC (related: DDC)
  │   ├── CLC (related: DDC)
  │   └── LCC (related: DDC)
  ├── 叙词表 (narrower)
  │   └── SKOS (exactMatch: 025.4)
  ├── 本体 (narrower)
  │   └── OWL (related: RDF)
  └── 元数据 (narrower)
      └── Dublin Core (exactMatch: Frontmatter)
```

---

## 7. 本体层

### 7.1 实体类型体系

```yaml
owl:Class:
  - concept:      概念      ← wiki/concepts/
  - entity:       实体      ← wiki/entities/
    - person:     人物      ← entity_type: person
    - tool:       工具      ← entity_type: tool
    - organization: 组织    ← entity_type: organization
    - paper:      论文      ← entity_type: paper
    - product:    产品      ← entity_type: product
  - source:       来源      ← wiki/sources/
```

### 7.2 关系本体

```
概念 → 概念 (C→C)
  is-a (子类型)      如: RAG is-a Information-Retrieval
  part-of (组成)     如: Attention part-of Transformer
  related (关联)     如: PKM related Zettelkasten
  precedes (前置)    如: Classification precedes Thesaurus

概念 → 实体 (C→E)
  implements (实现)  如: Obsidian implements PKM
  uses (使用)        如: RAG uses Vector-Database
  exemplifies (例证) 如: DDC exemplifies Classification-Systems

实体 → 实体 (E→E)
  created (创建)     如: Otlet created UDC
  collaborates (协作) 如: Otlet collaborates La-Fontaine
  competes (竞争)     如: Notion competes Obsidian
```

---

## 8. 元数据层

### 8.1 Dublin Core ↔ Frontmatter 映射

| Dublin Core | Frontmatter | 示例 |
|:------------|:------------|:-----|
| dc:title | aliases (首项) | `aliases: [UDC, 国际十进分类法]` |
| dc:creator | author | `author: "Paul Otlet"` |
| dc:date | created | `created: 2026-06-02` |
| dc:type | type | `type: concept` |
| dc:subject | topic | `topic: knowledge-systems` |
| dc:identifier | ddc + udc | `ddc: "001"` `udc: "001"` |
| dc:source | sources | `sources: [raw/articles/...]` |
| dc:language | — | `language: zh` (文件隐含) |

### 8.2 Frontmatter 完整规范

```yaml
# 必填 (Dublin Core 映射)
aliases: [名称]          # dc:title
created: YYYY-MM-DD     # dc:date
type: concept|entity|source  # dc:type
topic: [子库名称]         # dc:subject

# 分类法 (KOS)
ddc: "XXX"              # DDC 编码
udc: "XXX"              # UDC 编码
clc: "XXX"              # CLC 编码 (可选)
lcc: "XXX"              # LCC 编码 (可选)

# 关系 (Ontology)
tags:                   # skos:subject
  - #udc/XXX            # UDC 标签
  - #ddc/XXX            # DDC 标签

# 来源 (Provenance)
sources:                # dc:source
  - raw/path/file.md
```

---

## 9. 主题图层

### 9.0 ISO 13250 主题图标准

ISO 13250 定义 Topic Map 的数据模型：Topic(主题) · Association(关联) · Occurrence(资源引用)。

#### ISO 13250 ↔ 本系统映射

| ISO 13250 | 本系统 | 示例 |
|:----------|:-------|:-----|
| Topic | wiki/concepts/ · wiki/entities/ | UDC.md · Paul-Otlet.md |
| Topic Name | `aliases[]` | `[UDC, 国际十进分类法]` |
| Occurrence | `sources[]` | `raw/articles/...` |
| Association | `[[wikilink]]` | `[[DDC]] — evolved-from` |
| Association Type | 关系类型 | `is-a` · `part-of` · `created` |
| Scope | `topic:` 字段 | `topic: knowledge-systems` |

### 9.1 XTM (XML Topic Maps)

XTM 是 ISO 13250 的 XML 序列化语法。本系统的 META-INDEX 和跨库关联矩阵是 XTM 的轻量级等价实现。

```xml
<!-- XTM Topic → wiki 概念页 -->
<topic id="udc">
  <baseName><baseNameString>UDC 国际十进分类法</baseNameString></baseName>
</topic>
<!-- 等价于: aliases: [UDC, 国际十进分类法] -->
```

### 9.2 主题图

### 9.1 跨库关联矩阵

```
        000  060  100  200  300  400  500  600  700  800  900
000      —    🟢   🟢   —    —    🟢   —    🟢   —    —    —
060      🟢   —    🟢   —    —    —    —    —    —    —    —
100      🟢   🟢   —    🟢   🟢   —    —    —    —    —    —
```

### 9.2 主题图导航

```
从 DDC 000 (知识组织) 出发:
  → 100 (哲学)       认识论基础
  → 400 (语言)       知识表示
  → 600 (应用科学)    计算机实现

从 #udc/004.8 (AI) 出发:
  → #ddc/006.3        DDC 镜像
  → CLC TP18          中图法
  → LCC Q335          国会法
```

---

## 10. 实现计划

| Phase   | 任务                    | 优先级 |
| :------ | :-------------------- | :-: |
| **已完成** | DDC·UDC·CLC·LCC 四体系映射 |  ✅  |
| **已完成** | #udc/ + #ddc/ 双标签体系   |  ✅  |
| **已完成** | Frontmatter 元数据标准     |  ✅  |
| **已完成** | 概念·实体·来源 三节点图谱        |  ✅  |
| P1      | SKOS 叙词表关系标准化         |  ✅  |
| P2      | OWL 本体推理规则            |  ✅  |
| P2      | Dublin Core 元数据审计     |  ✅  |

---

## 参考

- [[DDC-UDC 映射表]]
- [[CLC 映射表]]
- [[LCC 映射表]]
- [[UDC 標籤體系]]
- [[DDC 标签体系]]
- [[UDC 辅助表索引]]
- [[UDC 标签使用指南]]
- [[Knowledge-Wiki 架构设计]]

---

*KOS+LLM-Wiki 架构设计说明书 v1.0 · DDC 025.4 · UDC 025.4*
*知识组织系统 × LLM-Wiki 编译引擎 · 2026-06-03*
