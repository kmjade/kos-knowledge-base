---
created: 2026-06-08
updated: 2026-06-08
udc: 336
tags: [life, finance, personal-finance]
status: draft
lang: en
---

# Personal Finance System

> Life pillar subsystem — Tracking · Budget · Assets · Review

## Structure

| Layer | Path | Access |
|:------|:-----|:-------|
| System | `system/` | Public (git) |
| Data | `data/` | Private (gitignored) |

### System Layer (versioned)

| Module | Path | Frequency |
|:-------|:-----|:---------:|
| Finance Classification | `system/finance-classification.md` | One-time |
| Transaction Template | `system/transaction-template.md` | One-time |

### Data Layer (local only)

| Module | Path | Frequency |
|:-------|:-----|:---------:|
| Transactions | `data/transactions/` | Daily |
| Budget | `data/budget/` | Monthly |
| Assets | `data/assets/` | Monthly |
| Reviews | `data/reviews/` | Weekly/Monthly |

## Related

- [[../life|Life Index]]
