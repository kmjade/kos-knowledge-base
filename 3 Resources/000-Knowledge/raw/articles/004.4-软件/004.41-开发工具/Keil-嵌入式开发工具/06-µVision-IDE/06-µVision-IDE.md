---
title: "06 µVision IDE"
aliases: [µVision, uVision IDE, Keil µVision, µVision5]
udc: "004.4"
tags: [keil, ide, µvision, debugger]
created: 2026-09-05
updated: 2026-09-05
---

# 06 µVision IDE

> µVision 是 Keil 的传统集成开发环境（Windows），整合代码编辑、工程管理、编译链接、软件仿真与硬件调试于一体。µVision5 仍是大量 8051/Cortex-M 项目的默认 IDE，未来由 Keil Studio（VS Code）逐步承接跨平台职责。

## 核心功能

| 模块 | 功能 |
|------|------|
| 编辑器 | 语法高亮、代码补全、函数导航、模板 |
| 工程管理 | 多目标（Target）、分组（Group）、构建配置 |
| 构建系统 | 调用 C51/C251/Arm Compiler + 链接器 |
| 软件仿真器 | 无需硬件即可调试（模拟 CPU + 外设） |
| 硬件调试 | ULINK / CMSIS-DAP / ST-Link 在线调试 |
| 分析工具 | 逻辑分析仪、性能分析、代码覆盖率 |
| RTOS 视图 | RTX/FreeRTOS 任务、信号量可视化 |

## 工程文件结构

| 文件 | 说明 |
|------|------|
| `*.uvprojx` | 工程文件（XML，µVision v5） |
| `*.uvoptx` | 工程选项 / 会话（界面布局） |
| `*.uvguix.*` | 用户专属 GUI 设置 |
| `*.sct` | Scatter-loading 分散加载脚本（链接脚本） |
| `*.scvd` | Watch 窗口变量文件 |

## Options for Target 配置（Alt+F7）

| 分页 Tab | 关键设置 |
|---------|---------|
| **Target** | Xtal 频率、ARM Compiler v5/v6、调试器选项 |
| **Output** | 勾选 `Create HEX File` 生成烧录文件 |
| **Listing** | 汇编清单、map 文件 |
| **C/C++** | 优化等级（-O0~-Ofast）、宏定义、include 路径 |
| **Linker** | Scatter file（.sct）、R/O / R/W Base |
| **Debug** | ULINK / ST-Link / J-Link、初始化脚本 `.ini` |
| **Utilities** | Flash Download 算法 |

## 构建流程 Build Flow

```
Source Code (*.c/*.s)
    │
    ├── C Compiler (armclang -c)  → *.o
    ├── Assembler (armasm)        → *.o
    │
    ├── Linker (armlink + .sct)   → *.axf (ELF)
    │
    └── FromELF (hex/bin)         → *.hex / *.bin
```

## 常用快捷键（必记）

| 快捷键 | 功能 |
|-------|------|
| **F7** | Build（编译修改过的文件） |
| **Ctrl+F7** | 编译当前文件 |
| **Ctrl+Alt+F7** | Rebuild All |
| **Ctrl+F5** | 开始调试会话 |
| **F5** | Run（全速执行） |
| **F10** | Step Over（逐过程） |
| **F11** | Step Into（逐语句） |
| **Ctrl+F10** | Run to Cursor |
| **F9** | 切换断点 |
| **Alt+F7** | Options for Target |
| **F12** | Go To Definition |

## 编辑器功能

- **Dynamic Syntax Checking** — 实时语法检查（红色波浪线）
- **Code Completion** — 结构体/枚举成员自动补全
- **Go To Definition（F12）** — 跳转到定义
- **Go To Reference** — 查找所有引用
- **Bookmarks（Ctrl+F2）** — 代码书签导航
- **Configuration Wizard** — `// <<< Use Configuration Wizard >>>` 注释配置界面

## µVision vs Keil Studio

| 维度 | µVision | Keil Studio（VS Code） |
|------|---------|----------------------|
| 平台 | 仅 Windows | Windows / Linux / macOS |
| 形态 | 独立 IDE | VS Code 扩展 |
| 工程格式 | `.uvprojx` | `csolution.yml`（CMSIS-Toolbox） |
| 定位 | Legacy / 存量项目 | MDK v6 新范式 |
| 适用 | 8051 + 传统 Cortex-M | Cortex-M 跨平台开发 |

## 软件仿真器（Simulator）

- 无需开发板即可调试：单步、断点、观察窗口、寄存器/内存查看。
- 可模拟 UART、GPIO、定时器、ADC 等常用外设（通过外设对话框）。
- 适合算法验证与教学，但**时序与真实硬件不完全一致**。

## 关联

[[02-MDK-ARM]] · [[07-编译器与链接器]] · [[08-调试与仿真]] · [[wiki/concepts/µVision-IDE|µVision IDE]]

## 来源

[[4 Archives/legacy/Keil-MDK/Keil-MDK|Keil-MDK 繁体 raw]]（02 μVision IDE 详解）· [[source-Keil-com]]
