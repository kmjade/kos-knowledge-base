---
title: "准实验 Quasi-Experiment"
aliases: [准实验, Quasi-Experiment, 自然实验, 双重差分, 断点回归, 工具变量]
type: concept
udc: "001.8"
tags: [methodology, research-design, concept, 准实验, 因果推断, udc-001.8]
created: 2026-10-19
updated: 2026-10-19
compiled: true
reviewed: false
---

# 准实验 Quasi-Experiment

## 定义

**准实验**在无法随机分配时，利用政策断点、时间冲击、分配规则等**自然变异**来近似反事实。它不是「低配实验」，而是依赖可论证识别假设的一类因果设计。

## 要点

| 方法 | 识别来源 | 关键假设 | 主要威胁 |
|:------|:------|:------|:------|
| 双重差分（DID） | 处理组与对照组的前后变化 | 平行趋势 | 趋势差异 · 同期冲击 |
| 断点回归（RDD） | 阈值两侧的近似随机 | 断点连续性 · 无操纵 | 断点操纵 · 带宽选择 |
| 工具变量（IV） | 只通过处理影响结果的变量 | 相关性 · 排他性约束 | 工具外生性不可检验 |
| 倾向得分匹配（PSM） | 可观测特征相似 | 可忽略性（无未观测混杂） | 残余混杂 · 共同支撑不足 |

## 要义

- 每种准实验方法都**自带假设**；方法名称不构成证据，必须写出并尽量检验识别假设。
- PSM 只能平衡**已测量**变量，不能替代随机化；「匹配后仍可能有未观测混杂」要明说。
- 自然实验的价值在于：在真实情境中保留识别力，常兼具较好的外部效度。
- 与 [[随机对照试验-Randomized-Controlled-Trial|RCT]] 的分工：可干预时 RCT 优先；不可干预时准实验是主要路径。
- 参见 [[因果推断-Causal-Inference|因果推断]]、[[混杂-Confounding|混杂]]、[[效度-Validity|效度]]。

## 相关

[[研究设计-Research-Design|研究设计]] · [[因果推断-Causal-Inference|因果推断]] · [[随机对照试验-Randomized-Controlled-Trial|随机对照试验]] · [[混杂-Confounding|混杂]] · [[选择偏差-Selection-Bias|选择偏差]]

## Sources

[[03-研究设计四维|章 03 研究设计四维]] · [[04-证据与推断|章 04 证据与推断]] · UDC 001.8
