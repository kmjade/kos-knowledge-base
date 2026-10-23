---
aliases:
  - XTM
  - XML Topic Maps
  - XML 主題圖
  - XML Topic Map Syntax
created: 2026-06-03
type: concept
updated: 2026-06-13
topic: knowledge-organization
category: 主題圖
status: reviewed
ddc: "025.4"
udc: "025.4"
confidence: high
tags:
  - #udc/025
  - #ddc/025
---

# XTM (XML 主題圖)

> ISO 13250 的 XML 語法 · 主题图的標準化交換格式

---

## 定义

XTM (XML Topic Maps) - [[ISO-13250]] 主题图标准的 XML 序列化语法。用於在系统间交换主题图数据。本系統的 META-INDEX 和跨库关联矩阵可以視為 XTM 的轻量级等价。

## XTM 结构

```xml
<topicMap xmlns="http://www.topicmaps.org/xtm/1.0/">

  <!-- Topic 定义 (等價於 wiki/concepts/) -->
  <topic id="udc">
    <baseName>
      <baseNameString>UDC 國際十進分類法</baseNameString>
    </baseName>
  </topic>

  <topic id="ddc">
    <baseName>
      <baseNameString>DDC 杜威十進分類法</baseNameString>
    </baseName>
  </topic>

  <!-- Association (等價於 [[wikilink]] -- relation) -->
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

## XTM →本系統映射

| XTM | 本系統 |
|:----|:-------|
| `<topic id="...">` | `wiki/concepts/[name].md` |
| `<baseNameString>` | `aliases[0]` |
| `<association>` | `[[wikilink]]` — relation |
| `<occurrence>` | `sources[]` |
| `<topicRef>` | `[[wikilink]]` 引用 |
| 主題圖合併 | META-INDEX 跨库矩阵 |

## 在本系统的等價

```yaml
# XTM Topic →wiki 概念頁
---
id: udc                              # <topic id="udc">
aliases: [UDC, 國際十進分類法]        # <baseNameString>
type: concept
topic: knowledge-systems             # <scope>
sources:                             # <occurrence>
  - raw/articles/udc-history.md
---

# UDC
## 相关概念
- [[DDC]]  — evolved-from            # <association>
```

## 相关概念

- [[ISO-13250]]  — `specifies` ISO 13250 XTM 的規範
- [[SKOS]]  — `related` SKOS 敘詞表語法
- [[KOS]]  — `part-of` 主題图是 KOS 的一種
- [[META-INDEX]]  — `implements` 本系统的主題圖

## Sources

- XTM 1.0 Specification — www.topicmaps.org/xtm/1.0/
- ISO/IEC 13250:2003  — Topic Maps
