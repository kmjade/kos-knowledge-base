---
tags: [query, project]
---

# 活跃项目任务表

```dataview
TABLE status, priority, created, updated
FROM "1 Projects"
WHERE status = "active"
SORT priority ASC, created DESC
```
