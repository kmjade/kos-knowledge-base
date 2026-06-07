---
tags: [query, i18n]
---

# 跨语言同步状态

> 对比根目录与 en/ 目录的文件清单，找出缺失的镜像文件。

```dataview
TABLE length(filter(rows, (x) => contains(x.file.folder, "en/"))) AS "有英文版",
      length(filter(rows, (x) => contains(x.file.folder, "zh-tw/"))) AS "有繁体版"
FROM ""
WHERE file.folder = "/"
SORT file.name ASC
```

## 英文版特有 → 需同步到中文

```dataview
LIST
FROM "en/"
WHERE file.name != "_index"
```
