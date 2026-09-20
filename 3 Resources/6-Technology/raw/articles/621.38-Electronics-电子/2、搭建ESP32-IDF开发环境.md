---
title: "2、搭建ESP32-IDF开发环境"
source: "https://www.yahboom.com/build?id=9270&cid=630"
author:
published:
created: 2026-09-15
description: "2、搭建ESP32-IDF开发环境"
tags:
  - "clippings"
udc: 621.38
updated: 2026-09-15
methodology: para
triage:
  status: processed
  routed_at: "2026-09-15T14:38:02Z"
  routed_to: "3 Resources\6-Technology\raw\articles\621.38-Electronics-电子"
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

## 搭建ESP32-IDF开发环境

[搭建ESP32-IDF开发环境](#搭建esp32-idf开发环境) [一、ESP32开发环境介绍](#一esp32开发环境介绍) [二、安装依赖](#二安装依赖) [三、下载ESP-IDF](#三下载esp-idf) [四、激活ESP-IDF开发环境](#四激活esp-idf开发环境) [五、编译和烧录固件](#五编译和烧录固件) [六、快捷命令](#六快捷命令) [七、ESP-IDF API参考](#七esp-idf-api参考)

### 一、ESP32开发环境介绍

ESP32开发环境支持Windows、Linux和Mac平台。

在Linux和Mac平台需要从源码下载并安装ESP-IDF开发环境。

在Windows平台有多种开发环境可选，有官方的ESP-IDF环境，有使用arduino IDE软件开发环境，有使用VS Code+PlatformIO IDE开发方式等。

这里以Ubuntu系统从源码下载并安装ESP-IDF开发环境的方式为例。

### 二、安装依赖

打开Ubuntu系统终端，并运行以下命令安装相关依赖。

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

### 三、下载ESP-IDF

打开Ubuntu系统终端，运行以下命令下载esp-idf-v5.1.2版本

```
xxxxxxxxxx
mkdir -p ~/esp
cd ~/espgit clone -b v5.1.2 --recursive https://github.com/espressif/esp-idf.git
```

设置工具支持的芯片esp32s3。

```
xxxxxxxxxx
cd esp-idf
./install.sh esp32s3
```

### 四、激活ESP-IDF开发环境

在esp-idf工具目录下运行以下命令

```
xxxxxxxxxx
source ~/esp/esp-idf/export.sh
```

注意：每次打开新终端都需要先激活ESP-IDF开发环境才可以编译ESP-IDF的工程。

![image-20240116122133981](http://admin.yahboom.com/public/upload/upload-html/1706346640/image-20240116122133981.png)

### 五、编译和烧录固件

将microROS控制板连接到虚拟机/电脑上，接下来测试编译hello\_world程序生成固件。

```
xxxxxxxxxx
cd examples/get-started/hello_world
idf.py set-target esp32s3idf.py build
```

当看到以下提示表示编译通过。

![image-20240108171646634](http://admin.yahboom.com/public/upload/upload-html/1706346640/image-20240108171646634.png)

查看生成的固件

```
xxxxxxxxxx
ls build/*.bin
ls build/bootloader/*.binls build/partition_table/*.bin
```

![image-20240108171119601](http://admin.yahboom.com/public/upload/upload-html/1706346640/image-20240108171119601.png)

运行以下命令将生成的固件烧录到microROS控制板上。

```
xxxxxxxxxx
idf.py flash
```

使用此命令烧录前需要确认电脑只连接一个串口设备，如果连接多个串口设备，为了区分可手动指定串口号，例如指定烧录的串口号为 /dev/ttyUSB0

```
xxxxxxxxxx
idf.py flash -p /dev/ttyUSB0
```

当下载进度达到100%，并且显示Done时表示烧录完成。

![image-20240108171957072](http://admin.yahboom.com/public/upload/upload-html/1706346640/image-20240108171957072.png)

打开串口模拟器

```
xxxxxxxxxx
idf.py monitor
```

如果需要退出串口模拟器，请按 **Ctrl+\]** 退出。

### 六、快捷命令

如果需要编译、烧录、打开串口模拟机，请输入以下命令

```
xxxxxxxxxx
idf.py build flash monitor
```

### 七、ESP-IDF API参考

打开以下链接即可查看ESP32S3官方API参考内容

```
xxxxxxxxxx
https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32s3/api-reference/index.html
```

如果需要显示中文可以点击【中文】跳转。

![image-20240110115514778](http://admin.yahboom.com/public/upload/upload-html/1706346640/image-20240110115514778.png)