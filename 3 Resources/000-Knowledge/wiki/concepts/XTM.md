---
aliases:
  - XTM
  - XML Topic Maps
  - XML 主题图
  - XML Topic Map Syntax
created: 2026-06-03
type: concept
topic: knowledge-organization
category: 主题图
status: reviewed
ddc: "025.4"
udc: "025.4"
confidence: high
tags:
  - #udc/025
  - #ddc/025
---

# XTM (XML 主题图)

> ISO 13250 的 XML 语法 · 主题图的标准化交换格式

---

## 定义

XTM (XML Topic Maps) 是 [[ISO-13250]] 主题图标准的 XML 序列化语法。用于在系统间交换主题图数据。本系统的 META-INDEX 和跨库关联矩阵可以视为 XTM 的轻量级等价。

## XTM 结构

```xml
<topicMap xmlns="http://www.topicmaps.org/xtm/1.0/">

  <!-- Topic 定义 (等价于 wiki/concepts/) -->
  <topic id="udc">
    <baseName>
      <baseNameString>UDC 国际十进分类法</baseNameString>
    </baseName>
  </topic>

  <topic id="ddc">
    <baseName>
      <baseNameString>DDC 杜威十进分类法</baseNameString>
    </baseName>
  </topic>

  <!-- Association (等价于 [[wikilink]] -- relation) -->
  <association>
    <instanceOf><topicRef href="#evolution"/></instanceOf>
    <member>
      <roleSpec><topicRef href="#derived"/></roleSpec>
      <topicRef href="#udc"/>
    </member>
    <member>
      <roleSpec><topicRef href="#base"/></roleSpec>
      <topicRef href="#ddc"/>
    </member>
  </association>

</topicMap>
```

## XTM ↔ 本系统映射

| XTM | 本系统 |
|:----|:-------|
| `<topic id="...">` | `wiki/concepts/[name].md` |
| `<baseNameString>` | `aliases[0]` |
| `<association>` | `[[wikilink]] — relation` |
| `<occurrence>` | `sources[]` |
| `<topicRef>` | `[[wikilink]]` 引用 |
| 主题图合并 | META-INDEX 跨库矩阵 |

## 在本系统的等价

```yaml
# XTM Topic → wiki 概念页
---
id: udc                              # <topic id="udc">
aliases: [UDC, 国际十进分类法]        # <baseNameString>
type: concept
topic: knowledge-systems             # <scope>
sources:                             # <occurrence>
  - raw/articles/udc-history.md
---

# UDC
## 相关概念
- [[DDC]] — evolved-from            # <association>
```

## 相关概念

- [[ISO-13250]] — `specifies` ISO 13250 是 XTM 的规范
- [[SKOS]] — `related` SKOS 叙词表语法
- [[KOS]] — `part-of` 主题图是 KOS 的一种
- [[META-INDEX]] — `implements` 本系统的主题图

## Sources

- XTM 1.0 Specification — www.topicmaps.org/xtm/1.0/
- ISO/IEC 13250:2003 — Topic Maps
