---
title: "04 Agent 与传输"
udc: "681.5"
tags: [micro-ros, ros2, transport]
created: 2026-09-10
updated: 2026-09-10
---

# 04 Agent 与传输

## micro-ROS Agent

[[micro-ROS-Agent|micro-ROS Agent]] 是 Client（MCU）与 ROS 2 DDS 图之间的桥接进程，把 MCU 侧创建的实体（节点/发布者/订阅者）代理进 DDS。它必须运行在上位机（或同一网络主机）上，且**同一时刻只能跑一个**。

## 传输方式

| 传输 | 命令（humble 版 Agent） | 适用 |
|:----|:----------------------|:-----|
| 串口/USB | `serial --dev /dev/ttyUSB0 -b 921600` | 有线、稳定、首选 |
| UDP | `udp4 --port 8090` | WiFi 无线 |
| TCP | `tcp4 --port 8888` | 局域网可靠传输 |

### Docker 串口示例

```bash
docker run -it --rm -v /dev:/dev -v /dev/shm:/dev/shm --privileged --net=host \
  microros/micro-ros-agent:humble serial --dev /dev/ttyUSB0 -b 921600 -v4
```

### UDP 示例

```bash
docker run -it --rm --privileged --net=host \
  microros/micro-ros-agent:humble udp4 --port 8090 -v4
```

## 关键注意

- **串口电平**：ESP32-S3 GPIO 为 3.3V，不 5V 容忍；UART 需交叉连接（TX↔RX）并共地
- **波特率**：Client 固件与 Agent 必须一致（常用 921600）
- **独占**：一个串口只挂一个 Agent；Docker 与源码方式二选一

## 相关

[[02-架构与原理]] · [[Transport-传输]] · [[03-环境搭建]]

## Sources

[[source-yahboom]] · [[source-microROS-docs]]
