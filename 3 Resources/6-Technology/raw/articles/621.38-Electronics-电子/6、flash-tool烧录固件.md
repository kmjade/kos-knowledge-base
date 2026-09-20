---
title: "6、flash-tool烧录固件"
source: "https://www.yahboom.com/build?id=9274&cid=630"
author:
published:
created: 2026-09-15
description: "6、flash-tool烧录固件"
tags:
  - "clippings"
udc: 621.38
updated: 2026-09-15
methodology: para
triage:
  status: processed
  routed_at: "2026-09-15T15:13:29Z"
  routed_to: "3 Resources/6-Technology/raw/articles/621.38-Electronics-电子"
---
教育机器人

JETSON

树莓派

地瓜RDK

嵌入式专区

视觉模块

激光雷达

传感器/电子模块

机器人配件区

搜索

您当前位置： [首页](https://www.yahboom.com/) > [MicroROS机器人控制板](https://www.yahboom.com/study/MicroROS-Board) >开发环境搭建

## esp-flash-tool烧录固件

[esp-flash-tool烧录固件](#esp-flash-tool烧录固件) [一、下载Flash工具](#一下载flash工具) [二、配置烧录工具](#二配置烧录工具) [三、开始烧录固件](#三开始烧录固件) [四、烧录完成](#四烧录完成)

## 一、下载Flash工具

下载网址：

```
https://www.espressif.com.cn/zh-hans/support/download/other-tools
```

![image-20231114193421867](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20231114193421867.png)

解压得到flash\_download\_tool，双击打开。选择串口烧录ESP32-S3。点击OK打开烧录工具。

![image-20231114194008120](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20231114194008120.png)

## 二、配置烧录工具

从工程项目(以main项目为例)中复制编译好的bin文件到flash-download-tool目录的bin文件夹下。

bin文件路径：

```
xxxxxxxxxx
build/bootloader/bootloader.bin
build/partition_table/partition-table.binbuild/main.bin
```

![image-20240108115432227](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20240108115432227.png)

在‘SPIDownload’选择要烧录到ESP32S3的固件，文件与地址对应关系如下表所示，再选择连接的COM口，其他配置保持默认即可。

| 固件名称 | 固件地址 | 备注 |
| --- | --- | --- |
| bootloader.bin | 0x0000 | 引导文件 |
| partition-table.bin | 0x8000 | 分区表文件 |
| main.bin | 0x10000 | 功能文件 |

![image-20240108114630313](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20240108114630313.png)

## 三、开始烧录固件

点击Start按钮，工具即自动开始烧录固件。

注：如果没有自动开始烧录固件，请先按住boot0键，再按复位键，松开boot0键，手动进入烧录模式。

![image-20231114195532948](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20231114195532948.png)

## 四、烧录完成

下载完成后，提示蓝色FINISH标识。此时断电重启单片机或者按一下复位键启动程序。

![image-20231114195617817](http://admin.yahboom.com/public/upload/upload-html/1706346701/image-20231114195617817.png)