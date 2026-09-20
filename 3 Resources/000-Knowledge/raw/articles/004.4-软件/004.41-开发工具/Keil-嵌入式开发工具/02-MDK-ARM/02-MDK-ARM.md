---
title: "02 MDK-ARM（Arm Keil MDK）"
aliases: [MDK-ARM, Arm Keil MDK, MDK v6]
udc: "004.4"
tags: [keil, arm, cortex-m, mdk]
created: 2026-09-05
updated: 2026-09-05
---

# 02 MDK-ARM（Arm Keil MDK）

> Arm Keil MDK 是面向 ARM Cortex-M（及 Arm7/Arm9/Cortex-R4）的完整软件开发工具套件，集 µVision IDE、Arm Compiler for Embedded、CMSIS 生态、RTOS 与调试支持于一体。

## MDK v6 三个版本

| 版本 | 商业用途 | 定位 |
|------|:-------:|------|
| **Community** | ❌ 仅非商业 | 免费学习、评估、开源项目 |
| **Essential** | ✅ | 商业入门级许可 |
| **Professional** | ✅ | 全功能 + 功能安全 + Legacy 支持 |

> 没有单独的「Legacy 版本」——**Legacy 设备/工具链支持是 Professional 独有特性**。

## 版本能力对比

| 能力 | Community | Essential | Professional |
|------|:---:|:---:|:---:|
| µVision IDE（Windows） | ✅ | ✅ | ✅ |
| Keil Studio（VS Code） | ✅ | ✅ | ✅ |
| Arm Compiler 6（AC6 / armclang） | ✅ | ✅ | ✅ |
| RTX5 / CMSIS-FreeRTOS / MDK-Middleware | ✅ | ✅ | ✅ |
| CMSIS-Toolbox CLI（cpackget/csolution/cbuild） | ✅ | ✅ | ✅ |
| 全部现行 Cortex-M 内核 | ✅ | ✅ | ✅ |
| 技术更新与支持 | ❌ | ✅ | ✅ |
| AC6 功能安全编译器（IEC 61508 / ISO 26262） | ❌ | ❌ | ✅ |
| Fast Models / Arm Virtual Hardware | ❌ | ❌ | ✅ |
| Legacy 设备（Arm7/Arm9/Cortex-R4/SecurCore） | ❌ | ❌ | ✅ |
| Legacy 工具链（PK51/DK251/PK166/AC5） | ❌ | ❌ | ✅ |

## 核心组件

| 组件 | 作用 |
|------|------|
| µVision IDE | Windows 传统集成开发环境（编辑器/工程/调试） |
| Keil Studio | VS Code 扩展，跨平台（Win/Linux/macOS） |
| Arm Compiler for Embedded | AC5（armcc，legacy）/ AC6（armclang，LLVM） |
| CMSIS-Toolbox | CLI 工具集：`cpackget`、`csolution`、`cbuild`/`cbuildgen` |
| Software Packs | CMSIS-Pack 格式的芯片/板卡/中间件软件包 |
| RTOS & Middleware | RTX5、CMSIS-FreeRTOS、网络/文件系统/IoT 客户端 |
| 调试适配器 | ULINK 家族、CMSIS-DAP、第三方探针 |

## MDK v6 工作流（CMSIS-Toolbox）

```
工程描述  csolution.yml（多工程解决方案）
    │
    ├─ cpackget   → 拉取 Software Packs（芯片/中间件）
    ├─ csolution  → 解析工程、依赖与构建配置
    └─ cbuild     → 生成并执行编译、链接、下载
```

> MDK v6 以 `csolution.yml` 替代传统 `.uvprojx` 工程文件，是 CLI 与 CI 友好的新范式；µVision 仍向后兼容旧的 `.uvprojx` 工程。

## 许可体系（User-Based Licensing, UBL）

- MDK v6 全部版本通过 **UBL** 激活：一个开发者身份 = 一个席位，可跨多台机器。
- Community 免费但**仅限非商业**；商业团队必须使用 Essential 或 Professional。
- Professional 是唯一解锁 legacy 工具链（PK51/DK251/PK166、AC5）的版本。

## CMSIS 组件架构

```
CMSIS 生态
├── CMSIS-Core       — 核心寄存器 / 系统时钟 / NVIC / SysTick
├── CMSIS-DSP        — 数字信号处理库（FIR/FFT/矩阵）
├── CMSIS-NN         — 神经网络推理库（TinyML）
├── CMSIS-RTOS v2    — RTOS 抽象 API（RTX5/FreeRTOS）
├── CMSIS-Driver     — 外设驱动 API（UART/SPI/I2C/USB/Ethernet）
├── CMSIS-Pack       — 软件包描述格式（pdsc）
└── CMSIS-Toolbox    — CLI 工具（cbuild/cpackget）
```

| CMSIS-Core 头文件 | 功能 |
|------------------|------|
| `core_cm4.h` / `core_cm7.h` | 核心寄存器（SCB/NVIC/SysTick/MPU） |
| `system_<device>.h` | 系统初始化（`SystemInit()`） |
| `startup_<device>.s` | 启动代码（向量表、Reset_Handler） |

## Middleware 中间件家族

| 组件 | 功能 |
|------|------|
| RL-TCPnet | TCP/IP 协议栈（IPv4/IPv6、BSD Socket、mbedTLS） |
| RL-USB | USB Device/Host 栈（CDC/HID/MSC/Audio） |
| RL-FlashFS | 嵌入式文件系统（FAT/exFAT、NAND/NOR、SD/MMC） |
| emWin | 图形 GUI 库（SEGGER 授权版） |

## 关联

[[01-Keil概述]] · [[06-µVision-IDE]] · [[07-编译器与链接器]] · [[wiki/entities/Arm-Keil-MDK|Arm Keil MDK]]
