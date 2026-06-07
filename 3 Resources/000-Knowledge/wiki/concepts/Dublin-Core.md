---
aliases: [Dublin Core, DC 元数据, Dublin Core Metadata, 都柏林核心]
created: 2026-06-03
type: concept
topic: knowledge-organization
category: 元数据
status: reviewed
ddc: "025.3"
udc: "025.3"
confidence: high
tags:
  - #udc/025
  - #ddc/025
---

# Dublin Core (DC 元数据)

> 国际元数据标准 · ISO 15836 · 15 核心元素 · 用于 Frontmatter 映射

---

## 定义

Dublin Core Metadata Initiative (DCMI) 定义的 15 元素元数据集，用于描述数字资源的通用元数据标准。本系统的 Frontmatter 标准基于 Dublin Core 映射。

## 15 核心元素

| # | 元素 | 含义 | 本系统 Frontmatter |
|:-:|:-----|:-----|:-------------------|
| 1 | title | 标题 | `aliases[0]` |
| 2 | creator | 创建者 | `author` |
| 3 | subject | 主题 | `topic` + `tags` |
| 4 | description | 描述 | `aliases` (副标题) |
| 5 | publisher | 发布者 | `source` (URL) |
| 6 | contributor | 贡献者 | `author` (多人) |
| 7 | date | 日期 | `created` · `updated` |
| 8 | type | 类型 | `type: concept|entity|source` |
| 9 | format | 格式 | `md` (固定) |
| 10 | identifier | 标识符 | `ddc` + `udc` |
| 11 | source | 来源 | `sources[]` |
| 12 | language | 语言 | `zh` (文件隐含) |
| 13 | relation | 关联 | `parent` · `[[]]` 链接 |
| 14 | coverage | 覆盖范围 | `udc-aux: geo/time` |
| 15 | rights | 权限 | — |

## 在本系统的应用

```yaml
# Dublin Core → Frontmatter 映射示例
---
aliases: [UDC, 国际十进分类法]          # dc:title
created: 2026-06-02                    # dc:date
type: concept                           # dc:type
topic: knowledge-systems                # dc:subject
ddc: "001"                              # dc:identifier
udc: "001"                              # dc:identifier
sources:                                # dc:source
  - raw/articles/udc-history.md
---
```

## 相关概念

- [[KOS]] — `part-of` 元数据是 KOS 的一种
- [[Frontmatter]] — `implements` Frontmatter 实现 DC
- [[ISO-25964]] — `related` 叙词表标准
- [[MARC]] — `related` 另一种元数据标准

## Sources

- DCMI Metadata Terms — dublincore.org/specifications/
- ISO 15836:2009 — Information and documentation — The Dublin Core metadata element set
