---
title: "Raspberry Pi 5"
aliases: [Pi 5, Raspberry Pi 5, 树莓派5]
type: entity
entity_type: product
udc: "004.165"
tags: [raspberry-pi, sbc]
created: 2026-09-05
updated: 2026-09-05
compiled: true
reviewed: false
---

# Raspberry Pi 5

树莓派基金会 2023 年推出的第五代旗舰单板计算机。搭载四核 Cortex-A76 SoC 与自研 RP1 I/O 芯片，性能较 Pi 4B 提升 2–3 倍，首次加入 PCIe 2.0 接口支持 NVMe SSD。

## 核心规格

| 参数 | 规格 |
|------|------|
| SoC | BCM2712（16nm） |
| CPU | 4× ARM Cortex-A76 @ 2.4GHz（64-bit） |
| GPU | VideoCore VII @ 800MHz，Vulkan 1.2 |
| RAM | 2 / 4 / 8 / 16GB LPDDR4X-4267 |
| 存储 | microSD + PCIe 2.0 ×1（M.2 NVMe） |
| USB | 2× USB 3.0（5Gbps）+ 2× USB 2.0 |
| 显示 | 2× micro HDMI 4Kp60（HDR） |
| 网络 | 千兆以太网、WiFi 5、BT 5.0 / BLE |
| GPIO | 40-pin（3.3V），由 RP1 驱动 |
| CSI/DSI | 2× 4-lane MIPI |
| 电源 | 5V/5A USB-PD，内建 RTC 电池接口、电源键、风扇接口 |
| 尺寸 | 85 × 56 mm |
| 价格 | $50（2GB）/ $60（4GB）/ $80（8GB）/ $120（16GB） |

## 关键创新

| 特性 | 相较 Pi 4B |
|------|-----------|
| 性能 | 2–3× 提升（A76 vs A72） |
| RP1 I/O 芯片 | 自研南桥，USB / GbE / MIPI / GPIO 稳定性大幅提升 |
| PCIe 2.0 ×1 | 首次支持 NVMe SSD |
| 电源键 / RTC | 内建软开关机与 RTC 电池接口 |
| UART | RP1 接管，不再与蓝牙冲突 |

## 内存档位演进

- 2023：4GB / 8GB 首发
- 2024 夏：2GB（$50）
- 2025-01：16GB（$120，BCM2712 D0 芯片）

## 相关

[[Raspberry-Pi-Platform-树莓派平台|Raspberry Pi Platform]] · [[Raspberry-Pi-500|Pi 500]] · [[Compute-Module-5|CM5]] · [[SBC-单板计算机|SBC]]

## Sources

[[source-RaspberryPi-com]] · [[02-硬件平台与型号]]
