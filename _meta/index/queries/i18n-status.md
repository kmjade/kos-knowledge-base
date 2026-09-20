---
created: 2026-06-13
tags: [query, i18n]
updated: 2026-06-13
---

# 璺ㄨ瑷€鍚屾鐘舵€?

> 瀵规瘮鏍圭洰褰曚笌 en/ 鐩綍鐨勬枃浠舵竻鍗曪紝鎵惧嚭缂哄け鐨勯暅鍍忔枃浠躲€?

```dataview
TABLE length(filter(rows, (x) => contains(x.file.folder, "en/"))) AS "鏈夎嫳鏂囩増",
      length(filter(rows, (x) => contains(x.file.folder, "zh-tw/"))) AS "鏈夌箒浣撶増"
FROM ""
WHERE file.folder = "/"
SORT file.name ASC
```

## 鑻辨枃鐗堢壒鏈?鈫?闇€鍚屾鍒颁腑鏂?

```dataview
LIST
FROM "en/"
WHERE file.name != "_index"
```
