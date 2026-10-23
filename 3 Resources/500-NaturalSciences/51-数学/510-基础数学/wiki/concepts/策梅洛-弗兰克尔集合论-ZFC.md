---
title: "策梅洛-弗兰克尔集合论 ZFC"
aliases: [ZFC, Zermelo-Fraenkel Set Theory, 公理集合论, 策梅洛-弗兰克尔集合论]
type: concept
udc: "510.3"
tags: [mathematics, set-theory, foundations, ZFC]
created: 2026-10-07
updated: 2026-10-07
compiled: true
reviewed: false
---

# 策梅洛-弗兰克尔集合论 ZFC

## 定义

**ZFC**（Zermelo–Fraenkel Set Theory with **Choice**）是当代数学的**标准公理化基础**：ZF 公理集 + [[51-数学/510-基础数学/wiki/concepts/选择公理|选择公理（AC）]]。

## 公理（ZF 部分）

| 公理 | 作用 |
|:--|:--|
| 外延 Extensionality | 集合由元素决定 |
| 空集 Empty Set | $\varnothing$ 存在 |
| 配对 Pairing | $\{a,b\}$ 存在 |
| 并集 Union | $\bigcup A$ 存在 |
| 幂集 Power Set | $\mathcal{P}(A)$ 存在 |
| **分离** Separation | 从已有集合取满足性质之子集（**规避罗素悖论**） |
| **替换** Replacement | 沿函数像构造集合（Fraenkel 1922 / Skolem） |
| 无穷 Infinity | 归纳集存在（得到 $\mathbb{N}$） |
| 正则 Foundation | 禁止 $\in$-无穷下降链（良基） |
| （+ 选择 Choice） | 非空族有选择函数 |

## 史实

- **1908** [[51-数学/510-基础数学/wiki/entities/策梅洛|策梅洛]] 提出首个集合论公理系统（含分离公理，回避[[51-数学/510-基础数学/wiki/concepts/罗素悖论|罗素悖论]]）。
- **1922** 弗兰克尔与斯科伦补**替换公理** → **ZF**。
- **1920s–30s** 冯·诺依曼等整理；**ZFC** 成为标准。

## 关键性质

| 性质 | 内容 |
|:--|:--|
| **不可自证一致** | 由哥德尔第二不完备定理，ZFC 不能证明自身一致性 |
| **独立性** | AC · CH · 苏斯林假设等与 ZFC 独立 |
| **判据地位** | 独立性把争议转为「**公理选择的自由度**」 |

## 相关

- [[51-数学/510-基础数学/wiki/concepts/公理化方法|公理化方法]] — 方法
- [[51-数学/510-基础数学/wiki/concepts/罗素悖论|罗素悖论]] · [[51-数学/510-基础数学/wiki/concepts/选择公理|选择公理]] · [[51-数学/510-基础数学/wiki/concepts/连续统假设|连续统假设]]
- [[510.3-集合论|510.3 集合论]] · [[00-数学基础危机|00 数学基础危机]]

## Sources

- [[ZFC-公理系统|ZFC 公理系统]]
