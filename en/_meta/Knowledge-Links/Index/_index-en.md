---
created: 2026-06-06
updated: 2026-06-09
udc: 001.8:025.4
tags: [index, moc, kos, navigation]
---

# Master Index

> **PARA + UDC + LLM-Wiki Three-dimensional Navigation**
> Dataview auto-maintains Projects and People; remaining sections are curated entry points.

---

## By PARA

### 1 — Projects

```dataview
TABLE file.link as Project, priority, status
FROM "en/1 Projects"
WHERE contains(file.path, "en/1 Projects")
SORT status ASC
```

| Project | Priority | Status |
|:--------|:--------:|:------:|
| [[en/1 Projects/26-02 Bug追踪/26-02 Bug追踪\|26-02 Bug Tracking]] | active |
| [[en/4 Archives/26-03 文件锁实现/26-03 文件锁实现\|26-03 File Lock]] | archived |
| [[en/4 Archives/26-04 UDC整合实施/26-04 UDC整合实施\|26-04 UDC Integration]] | archived |
| [[en/4 Archives/26-07 Life+AI 融合/26-07 Life+AI 融合\|26-07 Life+AI Fusion]] | archived |
| [[en/4 Archives/26-08 个人财务系统/26-08 个人财务系统\|26-08 Personal Finance]] | archived |
| [[en/4 Archives/26-09 企业管理/26-09 企业管理\|26-09 Business Management]] | archived |
| [[en/4 Archives/26-10 学习管理/26-10 学习管理\|26-10 Learning Management]] | archived |

### 2 — Areas (Entry Points)

| Area | Modules |
|:-----|:--------|
| [[en/2 Areas/生活/生活\|Life]] | Personal Finance |
| [[en/2 Areas/学习/学习\|Study]] | Learning Management |
| [[en/2 Areas/工作/工作\|Work]] | Business Management |
| [[en/2 Areas/知识组织/知识组织\|Knowledge Organization]] | KOS / UDC / SE |

### 3 — Resources (Entry Points)

| Sub-lib | Entry |
|:--------|:------|
| LLM-Wiki Concepts | [[en/3 Resources/000-Knowledge/wiki/_index\|_index]] |
| PARA Method | [[en/3 Resources/PARA/PARA 方法概览\|PARA Overview]] |
| UDC Classification | [[en/3 Resources/UDC/UDC 概述\|UDC Overview]] |
| People | See People section below |

#### People

```dataview
TABLE file.link as Person, udc, tags
FROM "en/3 Resources/People/wiki/entities"
SORT tags ASC
```

### _meta — System Metadata

| File | Description |
|:-----|:------------|
| [[en/_meta/hot.md\|Hot Cache]] | Recent context |
| [[en/_meta/design/架构说明书\|Architecture Guide]] | System architecture |
| [[en/_meta/design/KOS-LLM-Wiki架构说明v3.0\|KOS Arch v3.0]] | Detailed architecture |

---

## Quick Links

| Target | Link |
|:-------|:-----|
| 🏔 Home | [[en/Home.md\|Home]] |
| 🔟 Hot Cache | [[en/_meta/hot.md\|Hot Cache]] |
| 📨 Inbox | [[en/0 Inbox/README\|Inbox]] |

---

> **Index links:**
> - CN → [[_meta/🔗 知识关联/Index/_index-zh-cn\|索引]]
> - EN → [[en/_meta/Knowledge-Links/Index/_index-en\|Index]]
> - TW → [[zh-tw/_meta/🔗 知识关联/Index/_index\|索引]]