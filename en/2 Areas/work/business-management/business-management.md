---
created: 2026-06-09
updated: 2026-06-09
udc: 334.7
tags: [work, business, management]
status: draft
lang: en
---

# Business Management

> Sole proprietor management subsystem under the Work pillar.

## Module Structure

| Module | Path | Frequency |
|:-------|:-----|:---------:|
| Business Classification | `system/business-classification.md` | One-time |
| Templates | `system/templates/` | As needed |
| Client Management | `data/clients/` | As needed |
| Contracts | `data/contracts/` | As needed |
| Finance | `data/finance/` | Daily/Monthly |
| Projects | `data/projects/` | As needed |
| Reviews | `data/reviews/` | Weekly/Monthly |

## Daily Flow

```
Daily
├── Client communication -> clients/ record
├── Contract signing -> contracts/ archive
├── Income/expense -> finance/ record
└── Task progress -> projects/ update

Month-end -> finance summary
Quarter-end -> business review + tax prep
```

## Links

- [[../work|Work Index]]
- [[../../_meta/design/企业管理-架构设计.md|Architecture Design]]
