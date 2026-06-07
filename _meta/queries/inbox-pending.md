---
tags: [query, inbox]
---

# Inbox 待处理文件

```dataview
TABLE created, file.folder AS "位置"
FROM "00-Inbox"
SORT created ASC
```
