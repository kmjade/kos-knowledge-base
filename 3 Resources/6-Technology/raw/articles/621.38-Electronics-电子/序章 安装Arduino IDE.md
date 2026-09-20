---
title: "序章 安装Arduino IDE"
source: "https://www.waveshare.net/wiki/%E5%BA%8F%E7%AB%A0_%E5%AE%89%E8%A3%85Arduino_IDE"
author:
published:
created: 2026-09-15
description:
tags:
  - "clippings"
udc: 621.38
updated: 2026-09-15
methodology: para
triage:
  status: processed
  routed_at: "2026-09-15T14:36:56Z"
  routed_to: "3 Resources/6-Technology/raw/articles/621.38-Electronics-电子"
---
## 各模块使用教程

- 序章 安装Arduino IDE
- [教程一 带编码器电机控制例程一](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%B8%80_%E5%B8%A6%E7%BC%96%E7%A0%81%E5%99%A8%E7%94%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B%E4%B8%80 "教程一 带编码器电机控制例程一")
- [教程二 带编码器电机控制例程二](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%BA%8C_%E5%B8%A6%E7%BC%96%E7%A0%81%E5%99%A8%E7%94%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B%E4%BA%8C "教程二 带编码器电机控制例程二")
- [教程三 带编码器电机控制例程三](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%B8%89_%E5%B8%A6%E7%BC%96%E7%A0%81%E5%99%A8%E7%94%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B%E4%B8%89 "教程三 带编码器电机控制例程三")
- [教程四 无编码器电机控制例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E5%9B%9B_%E6%97%A0%E7%BC%96%E7%A0%81%E5%99%A8%E7%94%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B "教程四 无编码器电机控制例程")
- [教程五 ST3215总线舵机控制例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%BA%94_ST3215%E6%80%BB%E7%BA%BF%E8%88%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B "教程五 ST3215总线舵机控制例程")
- [教程六 PWM舵机控制例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E5%85%AD_PWM%E8%88%B5%E6%9C%BA%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B "教程六 PWM舵机控制例程")
- [教程七 IMU数据读取例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%B8%83_IMU%E6%95%B0%E6%8D%AE%E8%AF%BB%E5%8F%96%E4%BE%8B%E7%A8%8B "教程七 IMU数据读取例程")
- [教程八 SD卡读取例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E5%85%AB_SD%E5%8D%A1%E8%AF%BB%E5%8F%96%E4%BE%8B%E7%A8%8B "教程八 SD卡读取例程")
- [教程九 INA219电压电流监测例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E4%B9%9D_INA219%E7%94%B5%E5%8E%8B%E7%94%B5%E6%B5%81%E7%9B%91%E6%B5%8B%E4%BE%8B%E7%A8%8B "教程九 INA219电压电流监测例程")
- [教程十 OLED屏幕控制例程](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E5%8D%81_OLED%E5%B1%8F%E5%B9%95%E6%8E%A7%E5%88%B6%E4%BE%8B%E7%A8%8B "教程十 OLED屏幕控制例程")
- [教程十一 激光雷达和在ROS2中发布雷达话题](https://www.waveshare.net/wiki/%E6%95%99%E7%A8%8B%E5%8D%81%E4%B8%80_%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%E5%92%8C%E5%9C%A8ROS2%E4%B8%AD%E5%8F%91%E5%B8%83%E9%9B%B7%E8%BE%BE%E8%AF%9D%E9%A2%98 "教程十一 激光雷达和在ROS2中发布雷达话题")
- [General Driver for Robots 主页](https://www.waveshare.net/wiki/General_Driver_for_Robots "General Driver for Robots")

### Arduino IDE 是什么

Arduino IDE(Integrated Development Environment)，是一个基于开源代码的开发平台，有独立语言和开发环境。由于 Arduino IDE 提供了广泛的库，因此复杂的部件（如显示器、传感器）以及软件平台易于使用。

### Arduino IDE 安装

#### 1\. 下载 Arduino IDE

先到 [**Arduino 官网**](https://www.arduino.cc/en/software) 下载最新版本 Arduino IDE 的安装包。官方 IDE 支持不同操作系统下载，根据您的操作系统进行选择。这里下载的是 Windows 的，如果已安装，直接跳到第二步。安装过程很简单，一直点击下一步即可。

![![ArduinoIDE1.png](https://www.waveshare.net/w/upload/thumb/5/58/ArduinoIDE1.png/700px-ArduinoIDE1.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:ArduinoIDE1.png)


![[Pasted image 20260915152146.png]]

**注意：安装过程中会提示安装驱动，一直点击安装即可。**

[![Arduino驱动安装水印.jpg](https://www.waveshare.net/w/upload/thumb/8/83/Arduino%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85%E6%B0%B4%E5%8D%B0.jpg/500px-Arduino%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85%E6%B0%B4%E5%8D%B0.jpg)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:Arduino%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85%E6%B0%B4%E5%8D%B0.jpg)
![[Pasted image 20260915152254.png]]
#### 2\. 设置 Arduino IDE 为中文界面

第一次安装完成后，打开 Arduino IDE 是英文界面的，可以点击“File”→“Preferences”。

[![安装Arduino2.png](https://www.waveshare.net/w/upload/9/9d/%E5%AE%89%E8%A3%85Arduino2.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:%E5%AE%89%E8%A3%85Arduino2.png)
![[Pasted image 20260915152306.png]]
在“Language”里面选择简体中文，点击OK。

[![安装Arduino3.png](https://www.waveshare.net/w/upload/thumb/e/e2/%E5%AE%89%E8%A3%85Arduino3.png/550px-%E5%AE%89%E8%A3%85Arduino3.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:%E5%AE%89%E8%A3%85Arduino3.png)
![[Pasted image 20260915152316.png]]
### 开发环境安装

General Driver for Robots 驱动板的主控模组是 ESP32，所以我们在 Arduino IDE 开发环境中需要安装好 ESP32 对应的开发板。步骤如下：

**1.** 打开 Arduino IDE，点击“文件”→“首选项”。

[![M2ESP321.png](https://www.waveshare.net/w/upload/thumb/f/fd/M2ESP321.png/250px-M2ESP321.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP321.png)
![[Pasted image 20260915152344.png]]
**2.** 在附加开发板管理器网址中添加如下链接，点击“确定”保存设置。

```
https://dl.espressif.com/dl/package_esp32_index.json
```

[![M2ESP322.png](https://www.waveshare.net/w/upload/thumb/6/69/M2ESP322.png/600px-M2ESP322.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP322.png)
![[Pasted image 20260915152354.png]]
**注意：如果您需要添加多个开发板URL，那无需将ESP32开发板支持的URL删掉，可以直接将其他URL添加至另一行，默认显示是逗号分隔开URL的。** 例如：如果您需要添加ESP8266开发板的URL，直接添加至另一行，显示出来如下为：

```
https://dl.espressif.com/dl/package_esp32_index.json，http://arduino.esp8266.com/stable/package_esp8266com_index.json
```

[![M2ESP323.png](https://www.waveshare.net/w/upload/thumb/3/3a/M2ESP323.png/600px-M2ESP323.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP323.png) [![M2ESP324.png](https://www.waveshare.net/w/upload/thumb/7/7f/M2ESP324.png/600px-M2ESP324.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP324.png)
![[Pasted image 20260915152411.png]]

![[Pasted image 20260915152428.png]]

**3.** 点击 ESP32 开发包百度网盘的链接： [**ESP32 开发包**](https://pan.baidu.com/s/1HGb9JRaN8oqGDEeOAsKVWQ?pwd=fm9g) ，进行下载并解压缩，在“我的电脑”中输入以下路径：

```
C:\Users\username\AppData\Local\Arduino15
```

username 需要根据自己电脑的用户名更改，新建一个 packages 文件夹，将解压后的文件夹中的 esp32 开发包复制到 packages 文件夹下。

[![M2ESP325.png](https://www.waveshare.net/w/upload/thumb/4/4c/M2ESP325.png/700px-M2ESP325.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP325.png)
![[Pasted image 20260915152441.png]]
可以从 packages-esp32-hardware-esp32 中看见安装的 ESP32 开发板为 2.0.11 版本的，WAVE ROVER、UGV01、UGV02 的开源程序开发板 ESP32 的版本为 2.0.11。

[![M2ESP326.png](https://www.waveshare.net/w/upload/2/2f/M2ESP326.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2ESP326.png)
![[Pasted image 20260915152455.png]]
### 依赖库安装

下载 [**依赖库文件**](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:General-Libraries.zip "文件:General-Libraries.zip") ，进行解压缩，打开 Arduino IDE ，选择左上角的“文件”➡“首选项”查看依赖库默认安装位置：C:\\Users\\username\\Documents\\Arduino（结合自己实际位置），再该目录下，新建一个名为 libraries 的文件夹，把图中文件夹复制到新建的 libraries 文件夹里。

[![General-libraries2.png](https://www.waveshare.net/w/upload/thumb/0/0b/General-libraries2.png/600px-General-libraries2.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:General-libraries2.png)
![[Pasted image 20260915152648.png]]
### 上传程序

这里上传程序以 WAVE ROVER 的程序为例，您对程序进行二次开发后，可以通过以下方法上传给 General Driver for Robots 驱动板。

**1.** 下载 [**WAVE ROVER 开源例程**](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WAVE_ROVER.zip "文件:WAVE ROVER.zip") ，解压后双击打开 WAVE\_ROVER\_v0.9.ino。注意这个目录下的所有文件要在同一个文件夹下。

[![WR上传程序.png](https://www.waveshare.net/w/upload/thumb/1/1c/WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F.png/600px-WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F.png)
![[Pasted image 20260915152659.png]]


**2.** 点击“工具”→“端口”，记住自己电脑上已有的 COM，不需要点击这个 COM（此时我这里显示的 COM 为 COM1、COM28、COM30，不同电脑已有的会显示不一样的 COM）。

[![WR上传程序1.png](https://www.waveshare.net/w/upload/thumb/1/19/WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F1.png/600px-WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F1.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F1.png)
![[Pasted image 20260915152712.png]]
**3.** 用 USB 线将 RoArm-M2-S 机械臂上的驱动板和计算机连接起来（注意要连接左边的 USB 接口），点击“工具”→“端口”，再点击新出现的 COM（我这里新出现的 COM 为 COM33）。

[![WR上传程序2.png](https://www.waveshare.net/w/upload/thumb/5/5b/WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F2.png/600px-WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F2.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F2.png)
![[Pasted image 20260915152724.png]]
**4.** 在 Arduino IDE 中，点击“工具”→“开发板”→“ESP32”→“ESP32 Dev Module”。

[![WR上传程序3.png](https://www.waveshare.net/w/upload/thumb/1/17/WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F3.png/800px-WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F3.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F3.png)
![[Pasted image 20260915152735.png]]
**5.** 点击“工具”，其他设置如下：（Partition Scheme 最好用 Huge APP，PSRAM 必须使用 Enabled）

[![M2上传程序4.png](https://www.waveshare.net/w/upload/9/9c/M2%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F4.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:M2%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F4.png)
![[Pasted image 20260915152747.png]]
**6.** 设置全部完成后，点击“上传”将程序上传至机械臂的驱动板上。

[![WR上传程序4.png](https://www.waveshare.net/w/upload/7/77/WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F4.png)](https://www.waveshare.net/wiki/%E6%96%87%E4%BB%B6:WR%E4%B8%8A%E4%BC%A0%E7%A8%8B%E5%BA%8F4.png)
![[Pasted image 20260915152758.png]]
**如果上传期间遇到了问题，需要重新安装或者更换 Arduino IDE 版本时，在这之前，您需要将 Arduino IDE 卸载干净，卸载软件后需要将 C:\\Users\\username\\AppData\\Local\\Arduino15 这个文件夹内的所有内容手动删除（一些隐藏文件需要显示才能看到），接着再重新下载安装。**