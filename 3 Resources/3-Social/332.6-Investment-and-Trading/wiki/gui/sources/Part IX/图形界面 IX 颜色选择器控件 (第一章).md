---
title: "图形界面 IX: 颜色选择器控件 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-10-18T10:39:04+00:00Z
created: 2026-06-28
description: "从本文开始，我们来到了致力于在 MetaTrader 交易终端中创建图形界面系列文章的第九部份。它有两章，包含了新的控件和接口，例如颜色选择器，颜色按钮，进度条和线性图表等。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc2)
- [颜色选择器控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc3)
- [CColorPicker 类的开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!caonoppkciep)
	- [处理控件事件的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc5)
- [颜色按钮](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc6)
- [控件的测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc7)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc8)

### 简介

请阅读第一篇文章，名为 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 以更好地理解本开发库的目标。在每个部分文章的末尾，有一个含有各章节链接的列表，您也可以下载当前开发阶段的开发库的完整版本。文件必须按照它们在归档中的位置，放到相同的目录下。

本系列文章的第九部份描述了以下控件和界面元件:

1\. 第一章:

- 颜色选择器控件 (**CColorPicker** 类)；
- 颜色按钮控件 (**CColorButton** 类)。

2\. 第二章:

- 进度条控件 (**CProgressBar** 类)；
- 线性图表控件 (**CLineGraph** 类)。

文章会为以上提到的控件提供易于理解的实例，以展示它们是如何在应用程序中使用的。

### 颜色选择器控件

在各种提供选项指示对象颜色的应用程序中都可以找到调色盘，在 MetaTrader 交易终端中，调色盘可以使您在您的MQL应用程序中快速改变控件的颜色。例如，当创建一个可视化设计界面的工具，可以设置每个控件的颜色，如果没有调色盘功能，就会很不方便。

调色盘是一种复杂的组合控件元件，除了真正的调色盘部分，它还含有其他的对象和成组的控件。这个控件的组成部分在下面列出。

1. 背景
2. 显示了指定颜色模型的调色盘
3. 设置颜色的标记
4. 选中颜色的标记
5. 鼠标光标掠过的颜色的标记
6. 一组带有编辑框的单选按钮，用于人工配置颜色模式的组成部分
7. 用于取消颜色选择的按钮
8. 用于配置(固定)在第二个标记中颜色的按钮

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-el1%5D_3.rne)
![[Pasted image 20260628224215.png]]
图 1. 颜色选择器的组成部份。

上面的屏幕截图显示了有一组单选按钮分为三个子组，每个子组有三个单选按钮。每个子组是一个颜色模型，而每个单选按钮都是这种模型的组成部分 (颜色区域的坐标)。下面的列表提供了所有颜色模型的简单介绍，它们将用于为开发库创建一个颜色调色盘。

1\. **HSL** 颜色模型:

- **H** - 色相. 数值范围从 **0** 到 **360** 。
- **S** - 饱和度. 数值范围从 **0** 到 **100** 。
- **L** - 亮度. 数值范围从 **0** 到 **100** 。

2\. **RGB** 颜色模型:

- **R** - 红色. 数值范围从 **0** 到 **255** 。
- **G** - 绿色. 数值范围从 **0** 到 **255** 。
- **B** - 蓝色. 数值范围从 **0** 到 **255** 。

3\. **Lab** 颜色模型:

- **L** - 明度. 数值范围从 **0** 到 **100** 。
- **a** – 第一色彩坐标定义了从绿色到粉色的颜色通道，数值范围从 **\-128** 到 **127** 。
- **b** – 第二色彩坐标定义了从蓝色到黄色的颜色通道，数值范围从 **\-128** 到 **127** 。

下面, 我们将深入了解用于创建颜色调色盘的 CColorPicker 类。

### CColorPicker 类的开发

我们在与其他控件所在的相同目录中创建 **ColorPicker.mqh** 文件(<数据文件夹>\\MQLX\\Include\\EasyAndFastGUI\\Controls)，在文件中我们应该创建 **CColorPicker** 类和它的标准方法，代码如下所示:

```
//+------------------------------------------------------------------+
//|                                                  ColorPicker.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 用于创建颜色选择器的类                               |
//+------------------------------------------------------------------+
class CColorPicker : public CElement
  {
private:
   //--- 控件所附加的表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CColorPicker(void);
                    ~CColorPicker(void);
   //---
public:
   //--- 保存表单的指针
   void              WindowPointer(CWindow &object)           { m_wnd=::GetPointer(object);            }
   //---
public:
   //--- 事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void);
   //--- 移动控件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重设 鼠标左键点击优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重置颜色
   virtual void      ResetColors(void) {}
  };
```

以下属性将用于设置控件的图形对象:

- 控件区域的颜色
- 控件区域的边框颜色
- 调色板和标记边框的颜色

其他控件图形对象的属性可以通过取得它们的指针后进行修改。

```
class CColorPicker : public CElement
  {
private:
   //--- (1) 区域 和 (2)区域边框的颜色
   color             m_area_color;
   color             m_area_border_color;
   //--- 调色板边框的颜色
   color             m_palette_border_color;
   //---
public:
   //--- 设置颜色 (1) 区域 (2) 区域边框 (3) 调色板边框
   void              AreaBackColor(const color clr)           { m_area_color=clr;                      }
   void              AreaBorderColor(const color clr)         { m_area_border_color=clr;               }
   void              PaletteBorderColor(const color clr)      { m_palette_border_color=clr;            }
  };
```

因为其它控件将作为颜色调色板的组成部份，所以需要把这些控件类的文件包含到 **ColorPicker.mqh** 文件中，总共需要17个 **私有(private)** 方法和1个 **公有(public)** 方法来创建颜色调色板。

```
//+------------------------------------------------------------------+
//|                                                  ColorPicker.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "SpinEdit.mqh"
#include "SimpleButton.mqh"
#include "RadioButtons.mqh"
//+------------------------------------------------------------------+
//| 用于创建颜色调色板的类                              |
//+------------------------------------------------------------------+
class CColorPicker : public CElement
  {
private:
   //--- 用于创建控件的对象
   CRectLabel        m_area;
   CRectCanvas       m_canvas;
   CRectLabel        m_current;
   CRectLabel        m_picked;
   CRectLabel        m_hover;
   //---
   CRadioButtons     m_radio_buttons;
   CSpinEdit         m_hsl_h_edit;
   CSpinEdit         m_hsl_s_edit;
   CSpinEdit         m_hsl_l_edit;
   //---
   CSpinEdit         m_rgb_r_edit;
   CSpinEdit         m_rgb_g_edit;
   CSpinEdit         m_rgb_b_edit;
   //---
   CSpinEdit         m_lab_l_edit;
   CSpinEdit         m_lab_a_edit;
   CSpinEdit         m_lab_b_edit;
   //---
   CSimpleButton     m_button_ok;
   CSimpleButton     m_button_cancel;
   //---
public:
   //--- 用于创建控件的方法
   bool              CreateColorPicker(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreatePalette(void);
   bool              CreateCurrentSample(void);
   bool              CreatePickedSample(void);
   bool              CreateHoverSample(void);
   bool              CreateRadioButtons(void);
   bool              CreateHslHEdit(void);
   bool              CreateHslSEdit(void);
   bool              CreateHslLEdit(void);
   bool              CreateRgbREdit(void);
   bool              CreateRgbGEdit(void);
   bool              CreateRgbBEdit(void);
   bool              CreateLabLEdit(void);
   bool              CreateLabAEdit(void);
   bool              CreateLabBEdit(void);
   bool              CreateButtonOK(const string text);
   bool              CreateButtonCancel(const string text);
  };
```

当切换颜色调色板旁边的单选按钮时，二维颜色区域将会根据选中组件的数值来显示，换句话说，为了绘制首先您需要根据它的组成部分当前数值进行计算。所以，我们将为每个颜色模型写三个独立的方法，被选中的单选按钮索引将被传到所有这些方法中(选中的索引)。

为了修改颜色，我们使用 **CColors** 类的实例的方法，它在控件的基类(**CElement**)中声明。在 **CColors** 类中没有合适的方法来把 **RGB** 格式转换为 **Lab** 格式，所以, 当需要 **RGB** -> **Lab** 转换时, 需要使用 **XYZ** 颜色模型进行二次修正: **RGB** -> **XYZ** -> **Lab**. 为了在 **CColorPicker** 类中计算和存储所有颜色模式组成部份的数值，需要声明相关的栏位。

```
class CColorPicker : public CElement
  {
private:
   //--- 不同颜色模型的组成部份的数值:
   //    HSL
   double            m_hsl_h;
   double            m_hsl_s;
   double            m_hsl_l;
   //--- RGB
   double            m_rgb_r;
   double            m_rgb_g;
   double            m_rgb_b;
   //--- Lab
   double            m_lab_l;
   double            m_lab_a;
   double            m_lab_b;
   //--- XYZ
   double            m_xyz_x;
   double            m_xyz_y;
   double            m_xyz_z;
   //---
private:
   //--- 根据HSL颜色模型(0: H, 1: S, 2: L)绘制调色板
   void              DrawHSL(const int index);
   //--- 根据 RGB 颜色模型(3: R, 4: G, 5: B)绘制调色板
   void              DrawRGB(const int index);
   //--- 根据 LAB 颜色模型(6: L, 7: a, 8: b)绘制调色板
   void              DrawLab(const int index);
  };
```

作为例子，我们在此只提供其中一个方法的代码 - **CColorPicker::DrawHSL** (), 因为它们之间的唯一区别就是在改变之前预先计算组成部分的值，其它方法的代码在本文的附件文件中可以找到。

计算和绘制是在显示的每个像素点上进行的。请注意，计算是相对于颜色调色板的大小进行的，也就是说，通过使用这个代码，您可以创建类似的控件，而调色板可以具有不同的大小或者形状(不一定是正方形)。

![图 2. 大小为 500x255 像素点的调色板实例。 ](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-00_%5D3%2Cjrg "图 2. 大小为 500x255 像素点的调色板实例。 ")
![[Pasted image 20260628224257.png]]
图 2. 大小为 500x255 像素点的调色板实例。

```
//+------------------------------------------------------------------+
//| 绘制 HSL 调色板                          |
//+------------------------------------------------------------------+
void CColorPicker::DrawHSL(const int index)
  {
   switch(index)
     {
      //--- 色相 (H) - 颜色值范围从 0 到 360
      case 0 :
        {
         //--- 计算 H 组成部分
         m_hsl_h=m_hsl_h_edit.GetValue()/360.0;
         //---
         for(int ly=0; ly<m_canvas.YSize(); ly++)
           {
            //--- 计算 L 组分
            m_hsl_l=ly/(double)m_canvas.YSize();
            //---
            for(int lx=0; lx<m_canvas.XSize(); lx++)
              {
               //--- 计算 S 组分
               m_hsl_s=lx/(double)m_canvas.XSize();
               //--- 把 HSL 组分转换为 RGB
               m_clr.HSLtoRGB(m_hsl_h,m_hsl_s,m_hsl_l,m_rgb_r,m_rgb_g,m_rgb_b);
               //--- 连接通道
               uint rgb_color=XRGB(m_rgb_r,m_rgb_g,m_rgb_b);
               m_canvas.PixelSet(lx,m_canvas.YSize()-ly,rgb_color);
              }
           }
         break;
        }
      //--- 饱和度 (S) - 饱和度范围从 0 到 100
      case 1 :
        {
         //--- 计算 S 组分
         m_hsl_s=m_hsl_s_edit.GetValue()/100.0;
         //---
         for(int ly=0; ly<m_canvas.YSize(); ly++)
           {
            //--- 计算 L 组分
            m_hsl_l=ly/(double)m_canvas.YSize();
            //---
            for(int lx=0; lx<m_canvas.XSize(); lx++)
              {
               //--- 计算 H 组成部分
               m_hsl_h=lx/(double)m_canvas.XSize();
               //--- 把 HSL 组分转换为 RGB
               m_clr.HSLtoRGB(m_hsl_h,m_hsl_s,m_hsl_l,m_rgb_r,m_rgb_g,m_rgb_b);
               //--- 连接通道
               uint rgb_color=XRGB(m_rgb_r,m_rgb_g,m_rgb_b);
               m_canvas.PixelSet(lx,m_canvas.YSize()-ly,rgb_color);
              }
           }
         break;
        }
      //--- 亮度 (L) - 亮度范围从 0 到 100
      case 2 :
        {
         //--- 计算 L 组分
         m_hsl_l=m_hsl_l_edit.GetValue()/100.0;
         //---
         for(int ly=0; ly<m_canvas.YSize(); ly++)
           {
            //--- 计算 S 组分
            m_hsl_s=ly/(double)m_canvas.YSize();
            //---
            for(int lx=0; lx<m_canvas.XSize(); lx++)
              {
               //--- 计算 H 组成部分
               m_hsl_h=lx/(double)m_canvas.XSize();
               //--- 把 HSL 组分转换为 RGB
               m_clr.HSLtoRGB(m_hsl_h,m_hsl_s,m_hsl_l,m_rgb_r,m_rgb_g,m_rgb_b);
               //--- 连接通道
               uint rgb_color=XRGB(m_rgb_r,m_rgb_g,m_rgb_b);
               m_canvas.PixelSet(lx,m_canvas.YSize()-ly,rgb_color);
              }
           }
         break;
        }
     }
  }
```

我们将写下 **CColorPicker::DrawPaletteBorder** () 方法用于在颜色调色板的画布上绘制边框:

```
class CColorPicker : public CElement
  {
private:
   //--- 绘制调色板的边框
   void              DrawPaletteBorder(void);
  };
//+------------------------------------------------------------------+
//| 绘制调色板的边框                          |
//+------------------------------------------------------------------+
void CColorPicker::DrawPaletteBorder(void)
  {
//--- 调色板的大小
   int x_size=m_canvas.XSize()-1;
   int y_size=m_canvas.YSize()-1;
//--- 绘制边框
   m_canvas.Line(0,0,x_size,0,m_palette_border_color);
   m_canvas.Line(0,y_size,x_size,y_size,m_palette_border_color);
   m_canvas.Line(0,0,0,y_size,m_palette_border_color);
   m_canvas.Line(x_size,0,x_size,y_size,m_palette_border_color);
  }
```

以上说过的绘制方法将最终在绘制调色板的主方法中调用 **CColorPicker::DrawPalette** ():

```
class CColorPicker : public CElement
  {
private:
   //--- 绘制调色板
   void              DrawPalette(const int index);
  };
//+------------------------------------------------------------------+
//| 绘制调色板                                                     |
//+------------------------------------------------------------------+
void CColorPicker::DrawPalette(const int index)
  {
   switch(index)
     {
      //--- HSL (0: H, 1: S, 2: L)
      case 0 : case 1 : case 2 :
        {
         DrawHSL(index);
         break;
        }
      //--- RGB (3: R, 4: G, 5: B)
      case 3 : case 4 : case 5 :
        {
         DrawRGB(index);
         break;
        }
      //--- LAB (6: L, 7: a, 8: b)
      case 6 : case 7 : case 8 :
        {
         DrawLab(index);
         break;
        }
     }
//--- 绘制调色板的边框
   DrawPaletteBorder();
//--- 更新调色板
   m_canvas.Update();
  }
```

当从调色板中选择颜色或者在控件中配置任何颜色模型的组成部分时，在编辑框中的数值将自动重新计算。我们需要方法能够用于计算所有颜色模型的组成部分，根据是在当前时刻显示的选择(所选的单选按钮)。

首先，将会需要在许多类方法中调用到的，用于修正 **RGB** 组分和 **HSL** 模型的方法:

```
class CColorPicker : public CElement
  {
private:
   //--- 修正 RGB 组分
   void              AdjustmentComponentRGB(void);
   //--- 修正 HSL 组分
   void              AdjustmentComponentHSL(void);
  };
//+------------------------------------------------------------------+
//| 修正 RGB 组分                          |
//+------------------------------------------------------------------+
void CColorPicker::AdjustmentComponentRGB(void)
  {
   m_rgb_r=::fmin(::fmax(m_rgb_r,0),255);
   m_rgb_g=::fmin(::fmax(m_rgb_g,0),255);
   m_rgb_b=::fmin(::fmax(m_rgb_b,0),255);
  }
//+------------------------------------------------------------------+
//| 修正 HSL 组分                          |
//+------------------------------------------------------------------+
void CColorPicker::AdjustmentComponentHSL(void)
  {
   m_hsl_h*=360;
   m_hsl_s*=100;
   m_hsl_l*=100;
  }
```

在计算了所有组分以后，我们需要在编辑框中设置新的数值，在一些情况下，可能需要 (1) 设置所有组分的数值, 偶尔还会有 - (2) 除了当前所选之外所有的数值。为了处理这种情况，我们将写一个 **CColorPicker::SetControls** ()方法，它可以在两种模式下工作。

```
class CColorPicker : public CElement
  {
private:
   //--- 在编辑框中设置当前的参数
   void              SetControls(const int index,const bool fix_selected);
  };
//+------------------------------------------------------------------+
//| 在编辑框中设置当前的参数                      |
//+------------------------------------------------------------------+
void CColorPicker::SetControls(const int index,const bool fix_selected)
  {
//--- 如果数值需要在所选单选按钮的编辑框中固定
   if(fix_selected)
     {
      //--- HSL 组分
      if(index!=0)
         m_hsl_h_edit.ChangeValue(m_hsl_h);
      if(index!=1)
         m_hsl_s_edit.ChangeValue(m_hsl_s);
      if(index!=2)
         m_hsl_l_edit.ChangeValue(m_hsl_l);
      //--- RGB 组分
      if(index!=3)
         m_rgb_r_edit.ChangeValue(m_rgb_r);
      if(index!=4)
         m_rgb_g_edit.ChangeValue(m_rgb_g);
      if(index!=5)
         m_rgb_b_edit.ChangeValue(m_rgb_b);
      //--- Lab 组分
      if(index!=6)
         m_lab_l_edit.ChangeValue(m_lab_l);
      if(index!=7)
         m_lab_a_edit.ChangeValue(m_lab_a);
      if(index!=8)
         m_lab_b_edit.ChangeValue(m_lab_b);
      return;
     }
//--- 如果需要修正所有颜色模型中编辑框的当前数值
   m_hsl_h_edit.ChangeValue(m_hsl_h);
   m_hsl_s_edit.ChangeValue(m_hsl_s);
   m_hsl_l_edit.ChangeValue(m_hsl_l);
//---
   m_rgb_r_edit.ChangeValue(m_rgb_r);
   m_rgb_g_edit.ChangeValue(m_rgb_g);
   m_rgb_b_edit.ChangeValue(m_rgb_b);
//---
   m_lab_l_edit.ChangeValue(m_lab_l);
   m_lab_a_edit.ChangeValue(m_lab_a);
   m_lab_b_edit.ChangeValue(m_lab_b);
  }
```

为了根据当前时刻调色板中显示的选择(所选的单选按钮)来计算控件中所有颜色模型的组分，我们将写三个独立的方法: **CColorPicker::SetHSL** (), **CColorPicker::SetRGB** () 和 **CColorPicker::SetLab** ()。因为这些方法的内容很接近，我们这里只提供其中之一的代码 — **CColorPicker::SetRGB** ()。在这个方法的开始，我们从 **RGB** 模型的编辑框中取得数值并保存到类栏位中,取得的数值会转换为 **HSL** 和 **Lab** 格式。在最后，我们调用 **CColorPicker::SetControls** () 方法来设置控件中所有颜色模型的数值 (**false**)。

```
class CColorPicker : public CElement
  {
private:
   //--- 设置颜色模型的参数值，相对于 (1) HSL, (2) RGB, (3) Lab
   void              SetHSL(void);
   void              SetRGB(void);
   void              SetLab(void);
  };
//+------------------------------------------------------------------+
//| 根据 RGB 模式设置颜色模型的参数                       |
//+------------------------------------------------------------------+
void CColorPicker::SetRGB(void)
  {
//--- 取得当前的 RGB 组分值
   m_rgb_r=m_rgb_r_edit.GetValue();
   m_rgb_g=m_rgb_g_edit.GetValue();
   m_rgb_b=m_rgb_b_edit.GetValue();
//--- 把 RGB 组分转换为 HSL 组分
   m_clr.RGBtoHSL(m_rgb_r,m_rgb_g,m_rgb_b,m_hsl_h,m_hsl_s,m_hsl_l);
//--- 修正 HSL 组分
   AdjustmentComponentHSL();
//--- 把 RGB 组分转换为 Lab 组分
   m_clr.RGBtoXYZ(m_rgb_r,m_rgb_g,m_rgb_b,m_xyz_x,m_xyz_y,m_xyz_z);
   m_clr.XYZtoCIELab(m_xyz_x,m_xyz_y,m_xyz_z,m_lab_l,m_lab_a,m_lab_b);
//--- 在编辑框中设置当前的数值
   SetControls(0,false);
  }
```

而最终，我们需要主方法来在控件的编辑框中调用以上所述的用于计算，绘图和设置组分值的方法，它就是这里的 **CColorPicker::SetComponents** () 方法，它也有两种运行模式，如果 **fix\_selected** 参数等于 **true** ，组分会根据所选择的颜色模型进行计算, 选择的数值是选中单选按钮对应的编辑框的数值。如果 **fix\_selected** 参数等于 **false**, 就根据指定的颜色模型进行计算。在所有计算完成后，调色板要重绘。

```
class CColorPicker : public CElement
  {
private:
   //--- 计算和设置颜色组分
   void              SetComponents(const int index,const bool fix_selected);
  };
//+------------------------------------------------------------------+
//| 计算和设置颜色组分                        |
//+------------------------------------------------------------------+
void CColorPicker::SetComponents(const int index=0,const bool fix_selected=true)
  {
//--- 如果需要根据所选单选按钮对应的组分修正颜色
   if(fix_selected)
     {
      //--- 把所选的颜色解开到RGB组分
      m_rgb_r=m_clr.GetR(m_picked_color);
      m_rgb_g=m_clr.GetG(m_picked_color);
      m_rgb_b=m_clr.GetB(m_picked_color);
      //--- 把 RGB 组分转换为 HSL 组分
      m_clr.RGBtoHSL(m_rgb_r,m_rgb_g,m_rgb_b,m_hsl_h,m_hsl_s,m_hsl_l);
      //--- 修正 HSL 组分
      AdjustmentComponentHSL();
      //--- 把 RGB 组分转换到 LAB 组分
      m_clr.RGBtoXYZ(m_rgb_r,m_rgb_g,m_rgb_b,m_xyz_x,m_xyz_y,m_xyz_z);
      m_clr.XYZtoCIELab(m_xyz_x,m_xyz_y,m_xyz_z,m_lab_l,m_lab_a,m_lab_b);
      //--- 在编辑框中设置颜色
      SetControls(m_radio_buttons.SelectedButtonIndex(),true);
      return;
     }
//--- 设置颜色模型的参数
   switch(index)
     {
      case 0 : case 1 : case 2 :
         SetHSL();
         break;
      case 3 : case 4 : case 5 :
         SetRGB();
         break;
      case 6 : case 7 : case 8 :
         SetLab();
         break;
     }
//--- 根据所选的单选按钮绘制调色板
   DrawPalette(m_radio_buttons.SelectedButtonIndex());
  }
```

为了设置调色板中的当前颜色并传到所有的标记对象中，我们写了 **CColorPicker::CurrentColor** () 方法。本文会进一步揭示它在哪里使用。

```
class CColorPicker : public CElement
  {
public:
   //--- 设置用户从调色板中选择的颜色
   void              CurrentColor(const color clr);
  };
//+------------------------------------------------------------------+
//| 设置当前颜色                           |
//+------------------------------------------------------------------+
void CColorPicker::CurrentColor(const color clr)
  {
   m_hover_color=clr;
   m_hover.Color(clr);
   m_hover.BackColor(clr);
   m_hover.Tooltip(::ColorToString(clr));
//---
   m_picked_color=clr;
   m_picked.Color(clr);
   m_picked.BackColor(clr);
   m_picked.Tooltip(::ColorToString(clr));
//---
   m_current_color=clr;
   m_current.BackColor(clr);
   m_current.Tooltip(::ColorToString(clr));
  }
```

所有用于计算的方法都准备好了，下面进行到处理控件事件的方法。

### 处理控件事件的方法

以下方法将需要用于处理事件和管理颜色调色板:

- **CColorPicker::OnHoverColor** () 方法 — 取得鼠标光标(在调色板上)对应的方法。如果鼠标光标超出了调色板的范围，程序就退出此方法。如果光标在区域之内，我们就确定它的坐标并且获取鼠标光标处的颜色。在这之后，会为特别设计的标记设置新的颜色，并且使用 [ColorToString()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolvgrv%2Faonoptmsvrkne) 方法, 标记的图形对象和调色板有工具提示 – **RGB** 格式的颜色字符串。

```
//+------------------------------------------------------------------+
//| 取得鼠标光标所在处的颜色                     |
//+------------------------------------------------------------------+
bool CColorPicker::OnHoverColor(const int x,const int y)
  {
//--- 如果焦点不在调色板上，退出
   if(!m_canvas.MouseFocus())
      return(false);
//--- 定义鼠标光标处调色板的颜色
   int lx =x-m_canvas.X();
   int ly =y-m_canvas.Y();
   m_hover_color=(color)::ColorToARGB(m_canvas.PixelGet(lx,ly),0);
//--- 在相关位置(标记)设置颜色和工具提示
   m_hover.Color(m_hover_color);
   m_hover.BackColor(m_hover_color);
   m_hover.Tooltip(::ColorToString(m_hover_color));
//--- 设置调色板的工具提示
   m_canvas.Tooltip(::ColorToString(m_hover_color));
   return(true);
  }
```

- **CColorPicker::OnClickPalette** () 方法 — 处理调色板上的点击事件。在方法的开始，检查对象的名称，如果点击发生在调色板上，就保存和设置鼠标光标对应的颜色和相关标记的工具提示，在最后会调用 **CColorPicker::SetComponents** ()方法来计算和设置控件中所选单选按钮对应的颜色模式的组分值。

```
//+------------------------------------------------------------------+
//| 处理在调色板上的点击                      |
//+------------------------------------------------------------------+
bool CColorPicker::OnClickPalette(const string clicked_object)
  {
//--- 如果对象名称不匹配，退出
   if(clicked_object!=m_canvas.Name())
      return(false);
//--- 在相关位置(标记)设置颜色和工具提示
   m_picked_color=m_hover_color;
   m_picked.Color(m_picked_color);
   m_picked.BackColor(m_picked_color);
   m_picked.Tooltip(::ColorToString(m_picked_color));
//--- 根据所选的单选按钮计算和设置颜色组分值
   SetComponents();
   return(true);
  }
```

- **CColorPicker::OnClickRadioButton** () 方法 — 处理点击单选按钮。首先，需要进行两项检查: (1) 通过元件的ID 以及 (2) 通过单选按钮的显示文字。如果检查通过，则根据所选颜色模型的组分重绘颜色调色板。

```
//+------------------------------------------------------------------+
//| 处理点击单选按钮                         |
//+------------------------------------------------------------------+
bool CColorPicker::OnClickRadioButton(const long id,const int button_index,const string button_text)
  {
//--- 如果ID不匹配，退出
   if(id!=CElement::Id())
      return(false);
//--- 如果单选按钮文字不匹配，退出
   if(button_text!=m_radio_buttons.SelectedButtonText())
      return(false);
//--- 根据最新的变化更新调色板
   DrawPalette(button_index);
   return(true);
  }
```

- **CColorPicker::OnEndEdit** () 方法 — 处理在编辑框中输入新的数值。只要检查元件的ID就够了，在完成后，根据当前所选的单选按钮对应的组分来计算所有颜色模型的组分。

```
//+------------------------------------------------------------------+
//| 处理在编辑框中输入新的数值                   |
//+------------------------------------------------------------------+
bool CColorPicker::OnEndEdit(const long id,const int button_index)
  {
//--- 如果ID不匹配，退出
   if(id!=CElement::Id())
      return(false);
//--- 计算和设置所有颜色模型的颜色组分 
   SetComponents(button_index,false);
   return(true);
  }
```

- **CColorPicker::OnClickButtonOK** () 方法 — 处理点击了' **OK** '按钮。这并不是此方法的最终版本，在文章中还会对它进行修改，我们现在需要知道只是在点击按钮时，所选的颜色会保存为当前颜色。

```
//+------------------------------------------------------------------+
//| 处理点击了 'OK' 按钮                       |
//+------------------------------------------------------------------+
bool CColorPicker::OnClickButtonOK(const string clicked_object)
  {
//--- 如果对象名称不匹配，退出
   if(clicked_object!=m_button_ok.Text())
      return(false);
//--- 保存所选的颜色
   m_current_color=m_picked_color;
   m_current.BackColor(m_current_color);
   m_current.Tooltip(::ColorToString(m_current_color));
   return(true);
  }
```

- **CColorPicker::OnClickButtonCancel** () 方法 — 处理点击 'Cancel' 按钮事件。在这个方法中要检查对象的名称，然后，如果包含控件的表单是对话框窗口类型，它就会关闭。

```
//+------------------------------------------------------------------+
//| 处理点击 'Cancel' 按钮的事件                   |
//+------------------------------------------------------------------+
bool CColorPicker::OnClickButtonCancel(const string clicked_object)
  {
//--- 如果对象名称不匹配，退出
   if(clicked_object!=m_button_cancel.Text())
      return(false);
//--- 如果是对话框就关闭窗口
   if(m_wnd.WindowType()==W_DIALOG)
      m_wnd.CloseDialogBox();
//---
   return(true);
  }
```

在调色板的 **CColorPicker::OnEvent** () 事件处理函数中，代码总共分为6块，以上列出的方法都将根据到来事件的ID来分别调用，整个事件处理的代码如下:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                          |
//+------------------------------------------------------------------+
void CColorPicker::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理移动鼠标的事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果控件是隐藏的，退出
      if(!CElement::IsVisible())
         return;
      //--- 坐标以及鼠标左键的状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      m_canvas.MouseFocus(x>m_canvas.X() && x<m_canvas.X2()-1 && y>m_canvas.Y() && y<m_canvas.Y2()-1);
      //--- 取得鼠标光标所在的颜色
      if(OnHoverColor(x,y))
         return;
      //---
      return;
     }
//--- 处理鼠标左键点击对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果点击了调色板
      if(OnClickPalette(sparam))
         return;
      //---
      return;
     }
//--- 处理在编辑框中输入数值
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      //--- 检查输入的新数值
      if(OnEndEdit(lparam,(int)dparam))
         return;
      //---
      return;
     }
//--- 处理点击控件事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      //--- 如果点击了单选按钮
      if(OnClickRadioButton(lparam,(int)dparam,sparam))
         return;
      //---
      return;
     }
//--- 处理点击切换编辑框
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_INC || id==CHARTEVENT_CUSTOM+ON_CLICK_DEC)
     {
      //--- 检查输入的新数值
      if(OnEndEdit(lparam,(int)dparam))
         return;
      //---
      return;
     }
//--- 处理点击控件按钮
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 如果ID不匹配
      if(lparam!=CElement::Id())
         return;
      //--- 如果点击了 "OK" 按钮
      if(OnClickButtonOK(sparam))
         return;
      //--- 如果点击了 "CANCEL" 按钮
      if(OnClickButtonCancel(sparam))
         return;
      //---
      return;
     }
  }
```

许多控件开发库都有 **FastSwitching** ()方法，它一般是用来在编辑框，滚动条或者表格列表中快速变换数值使用的，但是，这里在快速变换控件的编辑框时，需要重绘调色板， **CColorPicker::FastSwitching** () 方法的代码可以在文章附件的文件中找到。

### 颜色按钮

用于创建颜色选择器的类已经准备好了，但是还没有一个使用它完整功能的原件，我们需要一个按钮来用于调用含有调色板的窗口，而这个按钮应该有选项来看到当前时刻选择的颜色。我们将写一个类来创建这样的按钮，以下列表显示了它的组成部分。

1. 控件区域
2. 带有描述信息的文字标签
3. 所选颜色的指示
4. 按钮区域
5. 以RGB格式描述的所选颜色

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-el2%5D_3.rne)
![[Pasted image 20260628224348.png]]
图 3. 用于调用调色板按钮的组成部分。

在前面的文章中，我们已经讨论了类似的控件，所以我们就不提供这个类代码的描述了，我们将直接进行按钮与调色板之间的互操作，请在本文附件中的 **ColorButton.mqh** 文件中找到 **CColorButton** 类来了解更多内容。

我们需要把调色板和按钮相关联，然后才能调用。我们将通过把按钮指针保存到 **CColorPicker** 类中以完成这一点。为此我们要把 **ColorButton.mqh** 文件包含到 **ColorPicker.mqh** 文件中并且声明 **CColorButton** 类的实例，也就是调用调色板的按钮指针在那里保存。

```
//+------------------------------------------------------------------+
//|                                                  ColorPicker.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "SpinEdit.mqh"
#include "SimpleButton.mqh"
#include "RadioButtons.mqh"
#include "ColorButton.mqh"
//+------------------------------------------------------------------+
//| 用于创建颜色选择器的类                               |
//+------------------------------------------------------------------+
class CColorPicker : public CElement
  {
private:
   //--- 调用控件用于选择颜色的按钮指针
   CColorButton     *m_color_button;
  };
```

还会需要一个公有方法来存储按钮的指针，为了简化调用按钮和调色板之间的互操作，当存储按钮对象的指针时，所有的调色板标记都会设为按钮的当前颜色。然后会打开一个相关联的调色板窗口 (参见以下代码)。

```
class CColorPicker : public CElement
  {
public:
   //--- 保存调用颜色调色板的按钮指针
   void              ColorButtonPointer(CColorButton &object);
  };
//+------------------------------------------------------------------+
//| 保存调用调色板按钮的指针并且                             |
//| 打开相关连的调色板窗口                        |
//+------------------------------------------------------------------+
void CColorPicker::ColorButtonPointer(CColorButton &object)
  {
//--- 保存按钮的指针
   m_color_button=::GetPointer(object);
//--- 把发送按钮的颜色设置给所有的调色板标记
   CurrentColor(object.CurrentColor());
//--- 打开关联的调色板窗口
   m_wnd.Show();
  }
```

另外，我们还需要方法来设置和取得按钮的颜色。设置的颜色将出现在按钮的标记(指示)上，从按钮的文字中可以得到更多信息，显示了以 **RGB** 格式表示的颜色字符串。

```
class CColorButton : public CElement
  {
public:
   //--- 返回/设置当前颜色参数
   color             CurrentColor(void)                 const { return(m_current_color);       }
   void              CurrentColor(const color clr);
  };
//+------------------------------------------------------------------+
//| 修改当前颜色参数                         |
//+------------------------------------------------------------------+
void CColorButton::CurrentColor(const color clr)
  {
   m_current_color=clr;
   m_button_icon.BackColor(clr);
   m_button_label.Description(::ColorToString(clr));
  }
```

需要在 **CColorPicker::OnClickButtonOK** ()方法中加入少量内容。如果设置了按钮的指针:

- 为按钮设置在调色板上选中的颜色;
- 关闭关联的颜色调色板窗口;
- 生成在调色板中选择了新的颜色的消息。在此需要在 **Defines.mqh** 文件中加入新的事件ID, **ON\_CHANGE\_COLOR** 。这个消息还将包含 (1) 控件ID (2) 元件索引 以及 (3) 调用调色板的按钮文字。通过这种方式，您将能在事件处理函数中知道这个消息是来自哪个按钮，这样对我们正确处理事件会有所帮助。
- 按钮的指针被清空，

如果没有按钮指针，那么就会在终端的记录中显示来自MQL应用程序开发者的消息。

```
//+------------------------------------------------------------------+
//| 处理点击了 'OK' 按钮                       |
//+------------------------------------------------------------------+
bool CColorPicker::OnClickButtonOK(const string clicked_object)
  {
//--- 如果对象名称不匹配，退出
   if(clicked_object!=m_button_ok.Text())
      return(false);
//--- 保存所选的颜色
   m_current_color=m_picked_color;
   m_current.BackColor(m_current_color);
   m_current.Tooltip(::ColorToString(m_current_color));
//--- 如果有调用颜色选择窗口的按钮的指针
   if(::CheckPointer(m_color_button)!=POINTER_INVALID)
     {
      //--- 为按钮设置选中的颜色
      m_color_button.CurrentColor(m_current_color);
      //--- 关闭窗口
      m_wnd.CloseDialogBox();
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_CHANGE_COLOR,CElement::Id(),CElement::Index(),m_color_button.LabelText());
      //--- 重置指针
      m_color_button=NULL;
     }
   else
     {
      //--- 如果没有指针并且是个对话框,
      //    显示消息说明没有调用控件的按钮指针
      if(m_wnd.WindowType()==W_DIALOG)
         ::Print(__FUNCTION__," > 无效的调用控件指针(CColorButton).");
     }
//---
   return(true);
  }
```

现在我们有了一切用于测试颜色调色板的准备。

### 控件的测试

任何来自之前文章的EA交易都可以用做测试，让我们制作一份拷贝并只保存主菜单和状态字符串，在图形界面的主窗口(**W\_MAIN**)中我们创建5个按钮用于调用含有调色板的对话框窗口(**W\_DIALOG**)。换句话说，整个MQL应用程序只需要创建一个颜色调色板就足够了。每次点击按钮调用调色板窗口时，调用的将是同样的窗口。但是按钮的指针在调用时必须独立地发送到 **CColorPicker** 类中，以后将会演示在应用程序的自定义类中将如何实现。

在称为 **CProgram** 的自定义类中，我们需要声明用于创建另外窗口(**CWindow**)的类, 5个按钮用于调用调色板， **CColorButton** 和 **CColorPicker** 类型, 以及用于创建它们并设置距离表单边缘距离的方法。

```
class CProgram : public CWndEvents
  {
private:
   //--- 表单 2 - 含有用于选择颜色的调色板的窗口
   CWindow           m_window2;
   //--- 用于调用调色板窗口的按钮
   CColorButton      m_color_button1;
   CColorButton      m_color_button2;
   CColorButton      m_color_button3;
   CColorButton      m_color_button4;
   CColorButton      m_color_button5;
   //--- 颜色调色板
   CColorPicker      m_color_picker;
   //---
private:
   //--- 表单 2
   bool              CreateWindow2(const string text);
   //--- 用于调用调色板的按钮
#define COLORBUTTON1_GAP_X    (7)
#define COLORBUTTON1_GAP_Y    (50)
   bool              CreateColorButton1(const string text);
#define COLORBUTTON2_GAP_X    (7)
#define COLORBUTTON2_GAP_Y    (75)
   bool              CreateColorButton2(const string text);
#define COLORBUTTON3_GAP_X    (7)
#define COLORBUTTON3_GAP_Y    (100)
   bool              CreateColorButton3(const string text);
#define COLORBUTTON4_GAP_X    (7)
#define COLORBUTTON4_GAP_Y    (125)
   bool              CreateColorButton4(const string text);
#define COLORBUTTON5_GAP_X    (7)
#define COLORBUTTON5_GAP_Y    (150)
   bool              CreateColorButton5(const string text);
   //--- 颜色调色板
#define COLORPICKER_GAP_X     (1)
#define COLORPICKER_GAP_Y     (20)
   bool              CreateColorPicker(void);
  };
```

用于创建调用调色板按钮的方法基本上是一样的，所以我们这里只提供它们其中一个作为例子，唯一的差别是在设置初始颜色中，设置以后会在按钮上显示出来，并且在描述中也有文字。

```
//+------------------------------------------------------------------+
//| 创建调用调色板的按钮1                         |
//+------------------------------------------------------------------+
bool CProgram::CreateColorButton1(const string text)
  {
//--- 保存窗口的指针
   m_color_button1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+COLORBUTTON1_GAP_X;
   int y=m_window1.Y()+COLORBUTTON1_GAP_Y;
//--- 在创建之前设置属性
   m_color_button1.XSize(195);
   m_color_button1.YSize(18);
   m_color_button1.ButtonXSize(100);
   m_color_button1.ButtonYSize(18);
   m_color_button1.AreaColor(clrWhiteSmoke);
   m_color_button1.LabelColor(clrBlack);
   m_color_button1.BackColor(C'220,220,220');
   m_color_button1.BorderColor(clrSilver);
   m_color_button1.CurrentColor(clrRed);
//--- 创建元件
   if(!m_color_button1.CreateColorButton(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 把控件指针加到库中
   CWndContainer::AddToElementsArray(0,m_color_button1);
   return(true);
  }
```

创建调色板对话框表单的方法与主窗口相比，差别只是指出的窗口类型(**W\_DIALOG**)。另外，我们为这个窗口设置了唯一的图片以指出这种差别。所有的图片都附在本文的附件中。

```
//+------------------------------------------------------------------+
//| 创建用于调色板的表单 2                      |
//+------------------------------------------------------------------+
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\color_picker.bmp"
//---
bool CProgram::CreateWindow2(const string caption_text)
  {
//--- 保存窗口的指针
   CWndContainer::AddWindow(m_window2);
//--- 坐标
   int x=(m_window2.X()>0) ? m_window2.X() : 30;
   int y=(m_window2.Y()>0) ? m_window2.Y() : 30;
//--- 属性
   m_window2.Movable(true);
   m_window2.XSize(350);
   m_window2.YSize(286);
   m_window2.WindowType(W_DIALOG);
   m_window2.WindowBgColor(clrWhiteSmoke);
   m_window2.WindowBorderColor(clrLightSteelBlue);
   m_window2.CaptionBgColor(clrLightSteelBlue);
   m_window2.CaptionBgColorHover(clrLightSteelBlue);
   m_window2.IconFile("Images\\EasyAndFastGUI\\Icons\\bmp16\\color_picker.bmp");
//--- 创建一个表单
   if(!m_window2.CreateWindow(m_chart_id,m_subwin,caption_text,x,y))
      return(false);
//---
   return(true);
  }
```

以下是用于创建颜色调色板的 **CProgram::CreateColorPicker** ()方法的代码，很重要的一点是要保存对话框窗口的指针，控件会与它关联。当在控件库中加入控件指针时, 需要发送与控件关联的窗口的索引，在本例中它是对话框窗口的索引\[1\]。

```
//+------------------------------------------------------------------+
//| 创建用于选择颜色的调色板                    |
//+------------------------------------------------------------------+
bool CProgram::CreateColorPicker(void)
  {
//--- 保存窗口的指针
   m_color_picker.WindowPointer(m_window2);
//--- 坐标
   int x=m_window2.X()+COLORPICKER_GAP_X;
   int y=m_window2.Y()+COLORPICKER_GAP_Y;
//--- 创建控件
   if(!m_color_picker.CreateColorPicker(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把控件指针加到库中
   CWndContainer::AddToElementsArray(1,m_color_picker);
   return(true);
  }
```

我们需要确保当点击按钮时，它的指针被发送给调色板，它可以在自定义类的 **CProgram::OnEvent** ()时间处理函数中进行，当点击按钮时，会生成事件ID为 **ON\_CLICK\_BUTTON** 的消息，消息还包含按钮描述的文字，用于定义哪个 **CColorButton** 类型的对象需要被发送给调色板。在发送按钮对象之后，会打开调色板窗口，而按钮的颜色会发出兵显示在所有的标记中。它的代码如下所示:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按钮点击事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 如果点击了按钮 1
      if(sparam==m_color_button1.LabelText())
        {
         m_color_picker.ColorButtonPointer(m_color_button1);
         return;
        }
      //--- 如果点击了按钮2
      if(sparam==m_color_button2.LabelText())
        {
         m_color_picker.ColorButtonPointer(m_color_button2);
         return;
        }
      //--- 如果点击了按钮3
      if(sparam==m_color_button3.LabelText())
        {
         m_color_picker.ColorButtonPointer(m_color_button3);
         return;
        }
      //--- 如果点击了按钮4
      if(sparam==m_color_button4.LabelText())
        {
         m_color_picker.ColorButtonPointer(m_color_button4);
         return;
        }
      //--- 如果点击了按钮5
      if(sparam==m_color_button5.LabelText())
        {
         m_color_picker.ColorButtonPointer(m_color_button5);
         return;
        }
     }
  }
```

在颜色选择通过点击调色板上的 "ОК" 按钮确定以后，就会处理ID为 **ON\_CHANGE\_COLOR** 的消息，代码如下所示。

```
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 使用调色板改变颜色的事件
   if(id==CHARTEVENT_CUSTOM+ON_CHANGE_COLOR)
     {
      //---如果控件ID匹配
      if(lparam==m_color_picker.Id())
        {
         //--- 如果回应来自按钮1
         if(sparam==m_color_button1.LabelText())
           {
            //--- 根据按钮1改变颜色...
            return;
           }
         //--- 如果回应来自按钮2
         if(sparam==m_color_button2.LabelText())
           {
            //--- 根据按钮2改变颜色...
            return;
           }
         //--- 如果回应来自按钮3
         if(sparam==m_color_button3.LabelText())
           {
            //--- 根据按钮3改变颜色...
            return;
           }
         //--- 如果回应来自按钮4
         if(sparam==m_color_button4.LabelText())
           {
            //--- 根据按钮4改变对象颜色...
            return;
           }
         //--- 如果回应来自按钮5
         if(sparam==m_color_button5.LabelText())
           {
            //--- 根据按钮5改变对象颜色...
            return;
           }
        }
      return;
     }
  }
```

编译程序并且在终端图表上载入，结果在以下屏幕截图中显示:

![图 4. 测试使用按钮调用调色板。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-06_%5D3%2Cjrg "图 4. 测试使用按钮调用调色板。")
![[Pasted image 20260628224415.png]]
图 4. 测试使用按钮调用调色板。

通过点击在主窗口上的5个不同颜色按钮调用调色板，颜色选择器窗口将如下面屏幕截图般打开:

![图 5. 测试颜色选择器元件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-07_%5D3%2Cjrg "图 5. 测试颜色选择器元件。")
![[Pasted image 20260628224426.png]]
图 5. 测试颜色选择器元件。

现在一切都运行得和所期待的一样。

### 结论

在本文中，我们展示了一个叫做颜色选择器的复杂的组合图形界面控件，还创建了另外一个控件，它是一种特殊的按钮，用于调用调色板，现在开发库的用户可以使用 MQL 应用程序的图形界面来管理对象的颜色了，

在后面的文章中将包含其它控件的类，例如进度条和线形图表。

以下是系列文章中第九部份的资料，您可以下载到您的电脑中来测试看它们如何工作。如有使用这些文件中资料的任何问题，您可以参考列表中所提供的开发库对应的文章以取得详细信息，或者在文章的留言处问问题。

**第九部份的文章(章节)列表:**

- [图形界面 IX: 颜色选择器控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559!pcrc1)
- 图形界面 IX: 进度条和线形图表控件 (第二章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2579](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0559)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-277%3B.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-277%3B%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (353.29 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-277%3B%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (353.27 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[评估信号的最简单方式: 交易活动, 回撤/负载, 和 MFE/MAE 分布图表](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0724)

订阅者经常通过分析信号在提供者账户里的总增长来搜索适当的信号, 这不是个坏主意。然而, 分析特定交易策略的潜在风险也很重要。在本文中, 我们将展示一种基于其绩效值来评估交易信号的简单有效方法。

[采用栈式 RBM 的深度神经网络。自训练, 自控制](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3608)

本文是有关深度神经网络和预测器选择的前文之续篇。在此我们将涵盖由栈式 RBM 初始化的深度神经网络特性, 以及它在 "darch" 软件包里的实现。

[MQL5 中的统计分布 - 充分利用 R 并使其更快](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0762)

本文讨论使用 R 语言实现的处理基本统计分布的函数。这些包括柯西, 威布尔, 正态, 对数正态, 逻辑斯谛, 指数, 均匀, γ 分布, 中心和非中心 β, 卡方, 费舍尔 F-分布, 学生 t-分布, 以及离散二项式和负二项式分布, 几何, 超几何和泊松分布。这些函数还用于计算理论分布力矩, 可评估真实分布到建模的一致性程度。

[图形界面 VIII: 文件导航器控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561)

在系列文章第八部分前面的章节中，我们的库加入了几个类用于开发鼠标指针，日历和树形视图，本文介绍的是文件导航器控件，可以用作MQL应用程序图形界面的一部分。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fj0vhanlk%7Bn58wd5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dskglans'2Dmv5'2Dpcgg1'3Dppeqev%251D0%2506wto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fmcx%2Cppodiv.qienclq%2506wto_aoltgnv%251Dqu%60sarkbg.qiencl'24uvm%5Dccmrakgl%251D2602%2CMSL7.aoo.Knvepncl%24a%3Fnontcvyjnqb%60jzvlljyuguvgoswocns%7B%26q%3D106f%609f00b%603gb172e310b%60e7c1f6c%3Ab%3B1g5d5%3Beg17a%600541871%3A100a862d64e%24v%3F1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24ukd%3Fzgcpumiayzlzufqznezcghqvtxgdapzc%26qsl%3D37%3A245572440%3B023512%26qsl_fr%3F1%24sqn%5Dsp%3D2%26dv%5Ddctg%3D37%3A24430%3B9%24rgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0559%24bcci_ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fwsgrq%250Fvon66%250Fraee1%251F'21uqepAatkols%24tktne%3F%25G5'9%40%25%40E'E7%25%40D'A0%25G7'97%25%3AC'E%3B%25%3BD'A0%2500KX'3C%2500'E%3B%25C2'9A%25G8'8%3B%25%402'E%3B%25%3A0'8%3B%25G6'8%40%25C9'E7%25%3B9'A%3A%25G6'8G%25C7'E6%25%40B'B4%2500*%25G7'AA%25CC'E6%25%408'82%25G7'A%40%25C0%2B%2500%2F%2500OQN5'E4%25%3B6'85%25G7'A%40%25C0%24sar%5Drgs%3F1%3B22x30%3A0%24aa%3D37%3A245572575110879%24fx_wnkq%3F615%3A016%3B03232540623%24st%3D0572)