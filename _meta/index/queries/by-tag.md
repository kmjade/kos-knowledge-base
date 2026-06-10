---
tags: [query, tag]
---

# 按标签聚合资源

```dataview
TABLE rows.file.link AS "笔记", rows.udc AS "UDC"
FROM ""
WHERE tags
FLATTEN tags AS tag
GROUP BY tag
SORT tag ASC
```

## 按 #resource/* 标签筛选

```dataview
TABLE udc, file.folder AS "位置"
FROM ""
WHERE contains(tags, "resource")
SORT file.name ASC
```
