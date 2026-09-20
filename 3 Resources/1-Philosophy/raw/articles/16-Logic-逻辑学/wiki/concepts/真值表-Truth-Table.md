---
title: "真值表 Truth Table"
aliases: [Truth Table, 真值表]
type: concept
udc: "16"
tags: [logic, propositional-logic, truth-table]
created: 2026-09-06
updated: 2026-09-06
compiled: true
reviewed: false
---

# 真值表 Truth Table

## 定义

「真值表」（Truth Table）是命题逻辑中刻画复合命题真值的一种表格，它系统地列出组成命题在各真值指派下的真假，从而判定命题是重言式、矛盾式还是偶真式。

## 五个联结词的真值表

| p | q | ¬p | p∧q | p∨q | p→q | p↔q |
|---|---|----|-----|-----|-----|-----|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

## 判定用途

| 用途 | 方法 |
|------|------|
| 判定重言式 | 主联结词列全为 T |
| 判定矛盾式 | 主联结词列全为 F |
| 判定逻辑等价 | 两公式真值表完全一致 |

## 相关

[[命题-Proposition|命题]] · [[03-命题逻辑]]

## Sources

[[source-概念文字-弗雷格]] · [[03-命题逻辑]]
