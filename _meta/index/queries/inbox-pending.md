---
tags: [query, inbox]
---

# Inbox 待处理文件

```dataview
TABLE created, file.folder AS "位置"
FROM "0 Inbox"
WHERE file.name != "0 Inbox"
SORT created ASC
```
