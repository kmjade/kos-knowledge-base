---
created: 2026-06-13
tags: [query, tag]
updated: 2026-06-13
---

# 鎸夋爣绛捐仛鍚堣祫婧?

```dataview
TABLE rows.file.link AS "绗旇", rows.udc AS "UDC"
FROM ""
WHERE tags
FLATTEN tags AS tag
GROUP BY tag
SORT tag ASC
```

## 鎸?#resource/* 鏍囩绛涢€?

```dataview
TABLE udc, file.folder AS "浣嶇疆"
FROM ""
WHERE contains(tags, "resource")
SORT file.name ASC
```
