---
title: "PID 级联控制 Cascade PID"
aliases: [级联控制, Cascade PID, PID]
type: concept
udc: "629.7"
tags: [flight-control, pid, control]
created: 2026-09-10
updated: 2026-09-10
compiled: true
reviewed: false
---

# PID 级联控制 Cascade PID

## 定义

级联控制是飞控的多环嵌套控制结构：位置环 → 速度环 → 姿态角环 → 角速度环，内环频率高于外环。每个环通常是一个 PID 控制器，角速度环是手感与稳定性的核心。

## 相关

[[05-控制回路]] · [[06-电机混控与动力]] · [[飞控-FlightController]]

## Sources

[[source-px4-docs]] · [[source-betaflight-docs]]
