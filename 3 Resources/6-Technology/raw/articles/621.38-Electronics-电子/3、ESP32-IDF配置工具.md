---
title: "3、ESP32-IDF配置工具"
source: "https://www.yahboom.com/build?id=9271&cid=630"
author:
published:
created: 2026-09-15
description: "3、ESP32-IDF配置工具"
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

## ESP32-IDF配置工具

[ESP32-IDF配置工具](#esp32-idf配置工具) [一、ESP32-IDF配置工具介绍](#一esp32-idf配置工具介绍) [二、激活ESP-IDF开发环境](#二激活esp-idf开发环境) [三、新建工程](#三新建工程) [四、配置工程](#四配置工程)

### 一、ESP32-IDF配置工具介绍

在ESP32-IDF项目根目录中，有一个sdkconfig文件，是用来存储ESP32-IDF的配置内容。

### 二、激活ESP-IDF开发环境

在esp-idf工具目录下运行以下命令

```
source ~/esp/esp-idf/export.sh
```

注意：每次打开新终端都需要先激活ESP-IDF开发环境才可以编译ESP-IDF的工程。

### 三、新建工程

新建一个空白工程，作为基础工程来使用。

```
xxxxxxxxxx
mkdir ~/esp/Samples/esp32_samples
cd ~/esp/Samples/esp32_samplesidf.py create-project maincd main
```

### 四、配置工程

设置目标芯片为esp32s3芯片，打开配置界面。

```
xxxxxxxxxx
idf.py set-target esp32s3
idf.py menuconfig
```

![image-20240108180425720](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108180425720.png)

1.配置在烧录的时候自动检测flash的大小。

在Serial flasher config里面将Flash size修改为4MB，并且勾选Detect flash size when flashing bootloader。

![image-20240108180531325](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108180531325.png)

2.配置外部PSRAM

打开Component config->ESP PSRAM，使能Support for external, SPI-connected RAM.

![image-20240108181431852](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108181431852.png)

SPI RAM config配置里如下图所示保持默认即可。

![image-20240108181813163](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108181813163.png)

3.配置CPU频率为240MHz

打开Component config->ESP System Settings->CPU frequency，将CPU频率修改为240MHz。

![image-20240108181942412](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108181942412.png)

4.配置freertos的频率为1000hz

打开Component config->FreeRTOS->Kernel，找到configTICK\_RATE\_HZ，将数值修改为1000即可。

![image-20240108182159576](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108182159576.png)

5.配置分区表，加大程序空间

打开Parttition Table->Partition Table，选择Single factory app (large), no OTA.

![image-20240108183010970](http://admin.yahboom.com/public/upload/upload-html/1706346658/image-20240108183010970.png)