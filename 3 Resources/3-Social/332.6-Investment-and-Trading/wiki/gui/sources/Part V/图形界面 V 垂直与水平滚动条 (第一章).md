---
title: "图形界面 V: 垂直与水平滚动条 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-06-02T11:43:31+00:00Z
created: 2026-06-28
description: "我们仍然在讨论在MetaTrader环境下开发创建图形界面库的开发，在本系列第五部分的第一篇文章中，我们将开发用于创建垂直与水平滚动条的类。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359!pcrv_22)
- [滚动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359!pcrv_23)
- [控件的基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359!pcrv_24)
- [控件的派生类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359!pcrv_25)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359!pcrv_26)

### 简介

在有关在 **MetaTrader** 环境下开发图形界面系列的之前的文章中, 我们谈到，库的主要部分还在开发过程中，并且创建了几个界面元件：主菜单，上下文菜单，状态栏，按钮，按钮组和工具提示。本系列的第五部分将集中介绍滚动条和列表视图控件。在第一章中，我们会开发用于创建水平和垂直的滚动条的类，在第二章中，我们将开发列表视图 - 一个组合界面元件，它是组合的，因为滚动条将是它的一部分，所以让我们开始创建它。

### 滚动条控件

当列表视图和表格中的数据不能全部容纳在设计的区域中时，就需要在其中使用滚动条。滚动条的主要对象是用于每步移动数据的按钮和用于快速移动数据的滑动条，可以使用鼠标左键按住它然后进行拖动。

我们将使用五个图形对象构成滚动条。

1. 主背景；
2. 滑动条区域的背景；
3. 两个用于按每步移动数据的按钮；
4. 用于快速移动数据的滑动条。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-03_%5D2%5Del_%5D2%2Cplg)
![[Pasted image 20260628213918.png]]
图 1. 滚动条控件的组成部分。

滚动条可以有两种类型 - 水平的和垂直的，将每种类型创建为一个单独的类将会比较有用，它们将是派生类，含有每种类型滚动条的独特属性。

- **CScrollV** – 垂直滚动条的派生类；
- **CScrollH** – 水平滚动条的派生类；

**CScroll** 类将是它们的基类，它将包含每种类型共有的栏位和方法。所有这三个类都将放到 **Scrolls.mqh** 文件中。滚动条控件的架构将如下所示:

![图 2. 滚动条控件的架构](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-00.rne "图 2. 滚动条控件的架构")
![[Pasted image 20260628213936.png]]
图 2. 滚动条控件的架构

现在，我们将考虑这个控件的基类， **CScroll** 的开发。

### 控件的基类

滚动条控件不是图形界面中的独立元件，它是一个辅助元件，将与其他需要在工作区域内滚动数据的元件相联系。也就是说， **Scrolls.mqh** 文件不需要直接包含在 **WndContainer.mqh** 文件中，通过包含其他元件类的文件就可以在库中使用滚动条的类了。

在 **Scrolls.mqh** 文件中创建 **CScroll** 类，并在其中包含所有界面元件的标准方法：

```
//+------------------------------------------------------------------+
//|                                                      Scrolls.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 用于创建滚动条的基类                            |
//+------------------------------------------------------------------+
class CScroll : public CElement
  {
protected:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)           { m_wnd=::GetPointer(object);       }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void) {}
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重设鼠标左键点击优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重置颜色
   virtual void      ResetColors(void) {}
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CScroll::CScroll(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CScroll::~CScroll(void)
  {
  }
```

跳过开头，需要说明的是，派生类必须在同一文件中创建，如以下代码所示。根据将要使用哪个类, 元件会在构造函数中得到对应的名称。

```
//+------------------------------------------------------------------+
//| 用于管理垂直滚动条的类                                 |
//+------------------------------------------------------------------+
class CScrollV : public CScroll
  {
public:
                     CScrollV(void);
                    ~CScrollV(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CScrollV::CScrollV(void)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CScrollV::~CScrollV(void)
  {
  }
//+------------------------------------------------------------------+
//| 用于管理水平滚动条的类                                   |
//+------------------------------------------------------------------+
class CScrollH : public CScroll
  {
public:
                     CScrollH(void);
                    ~CScrollH(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CScrollH::CScrollH(void)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CScrollH::~CScrollH(void)
  {
  }
```

之前已经提到，让我们启用滚动条外观的自定义，为此，在 **CScroll** 基类中创建用于设置如下元件对象参数的栏位和方法：

- 滚动条的宽度
- 一般背景边框的颜色
- 背景和滚动条滑块所在区域边框的颜色
- 背景和滑轨边框背景在不同状态下的颜色
- 当滚动数据时，按钮不同状态的图标

必须要注意的是，垂直滚动条它对象的宽度由 **X** 轴的大小决定，而水平滚动条的宽度由 **Y** 轴上的大小决定，默认宽度将是 **15** 个像素。按钮默认图标会根据尺寸选择，它们位于通用背景之内，距离边缘 **1** 个像素点，所以它们不会覆盖背景的边框，它们的大小是 **13** x **13** 像素点。所以，如果您打算改变滚动条的宽度，您将需要改变按钮图标，让我们创建相关的方法。

滚动条其它对象的宽度(内部区域和滑轨)将根据它们与通用背景宽度的关系自动计算，长度也会自动计算，因为这个参数依赖于列表中项目的数量以及它们在 **Y** 轴上的大小。实现将会在本文中作进一步描述。

```
class CScroll : public CElement
  {
protected:
   //--- 滚动条通用区域的属性
   int               m_area_width;
   int               m_area_length;
   color             m_area_color;
   color             m_area_border_color;
   //--- 滑轨背景的属性
   int               m_bg_length;
   color             m_bg_border_color;
   //--- 按钮图标
   string            m_inc_file_on;
   string            m_inc_file_off;
   string            m_dec_file_on;
   string            m_dec_file_off;
   //--- 滑轨不同状态的颜色
   color             m_thumb_color;
   color             m_thumb_color_hover;
   color             m_thumb_color_pressed;
   color             m_thumb_border_color;
   color             m_thumb_border_color_hover;
   color             m_thumb_border_color_pressed;
   //--- (1) 滑轨的宽度, (2) 滑轨的长度 (3) 以及它的最小长度
   int               m_thumb_width;
   int               m_thumb_length;
   int               m_thumb_min_length;
   //--- (1) 滑轨的步长 以及(2)步数
   double            m_thumb_step_size;
   double            m_thumb_steps_total;
   //--- 鼠标左键点击优先级
   int               m_area_zorder;
   int               m_bg_zorder;
   int               m_arrow_zorder;
   int               m_thumb_zorder;
   //---
public:
   //--- 滑轨的宽度
   void              ScrollWidth(const int width)             { m_area_width=width;               }
   int               ScrollWidth(void)                  const { return(m_area_width);             }
   //--- (1) 背景的颜色, (2) 背景边框的颜色 以及 (3) 背景内部框的颜色
   void              AreaColor(const color clr)               { m_area_color=clr;                 }
   void              AreaBorderColor(const color clr)         { m_area_border_color=clr;          }
   void              BgBorderColor(const color clr)           { m_bg_border_color=clr;            }
   //--- 设置按钮图标
   void              IncFileOn(const string file_path)        { m_inc_file_on=file_path;          }
   void              IncFileOff(const string file_path)       { m_inc_file_off=file_path;         }
   void              DecFileOn(const string file_path)        { m_dec_file_on=file_path;          }
   void              DecFileOff(const string file_path)       { m_dec_file_off=file_path;         }
   //--- (1) 滑轨背景的颜色 以及(2)滑轨背景边框的颜色
   void              ThumbColor(const color clr)              { m_thumb_border_color=clr;         }
   void              ThumbColorHover(const color clr)         { m_thumb_border_color_hover=clr;   }
   void              ThumbColorPressed(const color clr)       { m_thumb_border_color_pressed=clr; }
   void              ThumbBorderColor(const color clr)        { m_thumb_border_color=clr;         }
   void              ThumbBorderColorHover(const color clr)   { m_thumb_border_color_hover=clr;   }
   void              ThumbBorderColorPressed(const color clr) { m_thumb_border_color_pressed=clr; }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CScroll::CScroll(void) : m_area_width(15),
                         m_area_length(0),
                         m_inc_file_on(""),
                         m_inc_file_off(""),
                         m_dec_file_on(""),
                         m_dec_file_off(""),
                         m_thumb_width(0),
                         m_thumb_length(0),
                         m_thumb_min_length(15),
                         m_area_color(C'210,210,210'),
                         m_area_border_color(C'240,240,240'),
                         m_bg_border_color(C'210,210,210'),
                         m_thumb_color(C'190,190,190'),
                         m_thumb_color_hover(C'180,180,180'),
                         m_thumb_color_pressed(C'160,160,160'),
                         m_thumb_border_color(C'170,170,170'),
                         m_thumb_border_color_hover(C'160,160,160'),
                         m_thumb_border_color_pressed(C'140,140,140')
  {
//--- 设置鼠标左键点击的优先级
   m_area_zorder  =8;
   m_bg_zorder    =9;
   m_arrow_zorder =10;
   m_thumb_zorder =11;
  }
```

让我们探讨用于创建滚动条元件的方法，它的每个部分都是由一个独立的私有方法创建的。列表视图的大小以及列表视图可见部分的大小必须作为最后两个参数传到主方法中，这些参数将被用于计算滚动条滑轨的步数。

```
class CScroll : public CElement
  {
protected:
   //--- 用于创建滚动条的对象
   CRectLabel        m_area;
   CRectLabel        m_bg;
   CBmpLabel         m_inc;
   CBmpLabel         m_dec;
   CRectLabel        m_thumb;
   //---
public:
   //--- 用于创建滚动条的方法
   bool              CreateScroll(const long chart_id,const int subwin,const int x,const int y,const int items_total,const int visible_items_total);
   //---
private:
   bool              CreateArea(void);
   bool              CreateBg(void);
   bool              CreateInc(void);
   bool              CreateDec(void);
   bool              CreateThumb(void);
  };
```

我们将只展示这些方法中的一部分作为示例，因为在其余的方法中使用的是类似的原则，很容易理解。看一下 **CScroll::CreateBg** ()方法的代码，请注意，对象名称的构造依赖于滚动条的类型以及是否指定了元件的索引，当开发组合空间，需要同一类型的多个滚动条时可能需要指定索引，这样的例子将会在以后的一篇文章中介绍。

滚动条的类型也定义了参数的计算，例如(1)坐标, (2)滑轨区域的长度以及(3)它的大小。这个部分在以下代码中用蓝色强调显示。

```
//+------------------------------------------------------------------+
//| 创建滚动条背景                           |
//+------------------------------------------------------------------+
bool CScroll::CreateBg(void)
  {
//--- 构造对象名称
   string name      ="";
   string name_part =(CElement::ClassName()=="CScrollV")? "_scrollv_bg_" : "_scrollh_bg_";
//--- 如果没有指定索引
   if(CElement::Index()==WRONG_VALUE)
      name=CElement::ProgramName()+name_part+(string)CElement::Id();
//--- 如果已经指定了索引
   else
      name=CElement::ProgramName()+name_part+(string)CElement::Index()+"__"+(string)CElement::Id();
//--- 坐标
   int x=0;
   int y=0;
//--- 大小
   int x_size=0;
   int y_size=0;
//--- 根据滚动条类型设置属性
   if(CElement::ClassName()=="CScrollV")
     {
      m_bg_length =CElement::YSize()-(m_thumb_width*2)-2;
      x           =CElement::X()+1;
      y           =CElement::Y()+m_thumb_width+1;
      x_size      =m_thumb_width;
      y_size      =m_bg_length;
     }
   else
     {
      m_bg_length =CElement::XSize()-(m_thumb_width*2)-2;
      x           =CElement::X()+m_thumb_width+1;
      y           =CElement::Y()+1;
      x_size      =m_bg_length;
      y_size      =m_thumb_width;
     }
//--- 创建对象
   if(!m_bg.Create(m_chart_id,name,m_subwin,x,y,x_size,y_size))
      return(false);
//--- 设置属性
   m_bg.BackColor(m_area_color);
   m_bg.Color(m_bg_border_color);
   m_bg.BorderType(BORDER_FLAT);
   m_bg.Corner(m_corner);
   m_bg.Selectable(false);
   m_bg.Z_Order(m_bg_zorder);
   m_bg.Tooltip("\n");
//--- 保存坐标
   m_bg.X(x);
   m_bg.Y(y);
//--- 保存边缘
   m_bg.XGap(x-m_wnd.X());
   m_bg.YGap(y-m_wnd.Y());
//--- 保存大小
   m_bg.XSize(x_size);
   m_bg.YSize(y_size);
//--- 保存对象指针
   CElement::AddToArray(m_bg);
   return(true);
  }
```

当创建用于滚动条滑轨的图形对象时，我们将需要一个方法来计算它的长度，长度依赖于列表视图中项目的数量和可见部分项目的数量。让我们创建这样的方法并称它为 **CScroll::CalculateThumbSize** ()。

在此方法的开始有对滑轨区域大小的检查，如果此区域的长度小于滑轨的最小长度，就没有必要进行计算，方法会返回false，而滑轨将不会创建，因为这种情况不需要。如果检查通过，计算将有几个步骤:

- 计算滑轨步长，
- 如果去的的数值小于 **1**, 就使得它等于 **1** 。
- 计算用于移动滑轨的工作区域，
- 如果工作区域的大小小于移动滑轨的整个区域的大小，我们就要计算滑轨的长度，否则，就设置默认最小长度为 **15** 个像素点。
- 对滑轨长度计算的检查，包含在此方法的末尾转换为整数类型([int](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Fknveeep%2Fknveeept%7Bpgs))，以及如果计算所得长度小于最小值时调整为最小值。

**CScroll::CalculateThumbSize** () 方法的详细代码如下所示。

```
class CScroll : public CElement
  {
protected:

public:
   //--- 计算滚动条滑轨的长度
   bool              CalculateThumbSize(void);
  };
//+------------------------------------------------------------------+
//| 计算滚动条滑轨的长度                                |
//+------------------------------------------------------------------+
bool CScroll::CalculateThumbSize(void)
  {
//--- 如果移动滑轨的区域长度小于最小滑轨长度，就不需要计算
   if(m_bg_length<m_thumb_min_length)
      return(false);
//--- 计算滑轨步长
   m_thumb_step_size=(double)(m_bg_length-m_thumb_min_length)/m_thumb_steps_total;
//--- 步长不能小于1
   m_thumb_step_size=(m_thumb_step_size<1)? 1 : m_thumb_step_size;
//--- 计算用于移动滑轨的工作区域的大小
   double work_area=m_thumb_step_size*m_thumb_steps_total;
//--- 如果工作区域的大小小于整个区域的大小，取得滑轨的大小，否则设置最小值
   double thumb_size=(work_area<m_bg_length)? m_bg_length-work_area+m_thumb_step_size : m_thumb_min_length;
//--- 使用类型转换检查滑轨大小
   m_thumb_length=((int)thumb_size<m_thumb_min_length)? m_thumb_min_length :(int)thumb_size;
   return(true);
  }
```

必须在 **CScroll::CreateThumb** ()方法中在创建对象之前调用 **CScroll::CalculateThumbSize** ()，之后，我们会演示另外一种情况，在使用控件的过程中计算滚动条的长度，我们会在开发此控件时介绍它。

```
//+------------------------------------------------------------------+
//| 创建滚动条的滑轨                          |
//+------------------------------------------------------------------+
bool CScroll::CreateThumb(void)
  {
//--- 构造对象名称  
   string name      ="";
   string name_part =(CElement::ClassName()=="CScrollV")? "_scrollv_thumb_" : "_scrollh_thumb_";
//--- 如果没有指定索引
   if(CElement::Index()==WRONG_VALUE)
      name=CElement::ProgramName()+name_part+(string)CElement::Id();
//--- 如果已经指定了索引
   else
      name=CElement::ProgramName()+name_part+(string)CElement::Index()+"__"+(string)CElement::Id();
//--- 坐标
   int x=0;
   int y=0;
//--- 大小
   int x_size=0;
   int y_size=0;
//--- 计算滚动条的大小
   if(!CalculateThumbSize())
      return(true);
//--- 根据滚动条类型设置属性
   if(CElement::ClassName()=="CScrollV")
     {
      x      =(m_thumb.X()>0) ? m_thumb.X() : m_x+1;
      y      =(m_thumb.Y()>0) ? m_thumb.Y() : m_y+m_thumb_width+1;
      x_size =m_thumb_width;
      y_size =m_thumb_length;
     }
   else
     {
      x      =(m_thumb.X()>0) ? m_thumb.X() : m_x+m_thumb_width+1;
      y      =(m_thumb.Y()>0) ? m_thumb.Y() : m_y+1;
      x_size =m_thumb_length;
      y_size =m_thumb_width;
     }
//--- 创建对象
   if(!m_thumb.Create(m_chart_id,name,m_subwin,x,y,x_size,y_size))
      return(false);
//--- 设置属性
   m_thumb.BackColor(m_thumb_color);
   m_thumb.Color(m_thumb_border_color);
   m_thumb.BorderType(BORDER_FLAT);
   m_thumb.Corner(m_corner);
   m_thumb.Selectable(false);
   m_thumb.Z_Order(m_thumb_zorder);
   m_thumb.Tooltip("\n");
//--- 保存坐标
   m_thumb.X(x);
   m_thumb.Y(y);
//--- 保存边缘
   m_thumb.XGap(x-m_wnd.X());
   m_thumb.YGap(y-m_wnd.Y());
//--- 保存大小
   m_thumb.XSize(x_size);
   m_thumb.YSize(y_size);
//--- 保存对象指针
   CElement::AddToArray(m_thumb);
   return(true);
  }
```

用于创建滚动条对象的其他方法用于个人学习，它们可以在本文附件中的文件中找到。

在创建滚动条的主(公有)方法中增加对类的类型的检查，类的名称将不会保存在元件的基类 **CScroll** 中，这就是为什么当试图使用基类创建滚动条时，图形界面的创建会被终止。日志中将会收到消息，说明必须使用派生类， **CScrollV** 或者 **CScrollH** 。请注意元件的这些参数是如何被初始化的，这样的做法可以使得库的用户在创建滚动条控件时，只需要指定最小数量的属性就能自动完成。

```
//+------------------------------------------------------------------+
//| 创建滚动条                              |
//+------------------------------------------------------------------+
bool CScroll::CreateScroll(const long chart_id,const int subwin,const int x,const int y,const int items_total,const int visible_items_total)
  {
//--- 如果没有表单指针
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建滚动条之前, 类必须传入"
              "表单指针: CScroll::WindowPointer(CWindow &object)");
      return(false);
     }
//--- 如果尝试使用滚动条的基类，就退出
   if(CElement::ClassName()=="")
     {
      ::Print(__FUNCTION__," > 使用滚动条的派生类 (CScrollV 或者 CScrollH).");
      return(false);
     }
//--- 初始化变量
   m_chart_id          =chart_id;
   m_subwin            =subwin;
   m_x                 =x;
   m_y                 =y;
   m_area_width        =(CElement::ClassName()=="CScrollV")? CElement::XSize() : CElement::YSize();
   m_area_length       =(CElement::ClassName()=="CScrollV")? CElement::YSize() : CElement::XSize();
   m_thumb_width       =m_area_width-2;
   m_thumb_steps_total =items_total-visible_items_total+1;
//--- 到边缘的距离
   CElement::XGap(m_x-m_wnd.X());
   CElement::YGap(m_y-m_wnd.Y());
//--- 创建按钮
   if(!CreateArea())
      return(false);
   if(!CreateBg())
      return(false);
   if(!CreateInc())
      return(false);
   if(!CreateDec())
      return(false);
   if(!CreateThumb())
      return(false);
//--- 如果是对话框或者最小化，隐藏元件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

为了标识鼠标左键按钮与滚动条滑轨之间关系的状态，在 **Enums.mqh** 文件中创建 **ENUM\_THUMB\_MOUSE\_STATE** 枚举。

```
//+------------------------------------------------------------------+
//| 鼠标左键对于滚动条状态的枚举                                       |
//+------------------------------------------------------------------+
enum ENUM_THUMB_MOUSE_STATE
  {
   THUMB_NOT_PRESSED     =0,
   THUMB_PRESSED_OUTSIDE =1,
   THUMB_PRESSED_INSIDE  =2
  };
```

为此，我们需要创建对应的栏位和方法。 **CScroll::CheckMouseButtonState** ()方法是用于标识鼠标左键是在哪个区域中按下的； **CScroll::ZeroThumbVariables** ()方法是用于清空与移动滑轨相关的变量，当鼠标左键松开时在 **CScroll::CheckMouseButtonState** ()方法中调用。

请记住，当滚动条的模式是移动滑轨时，表单只有在元件不是下拉式的时候才会被屏蔽。这就需要当鼠标光标掠过其他元件，滚动条滑轨在移动模式下而光标在其范围之外的时候不要高亮显示它们。当禁用了滑轨的移动模式，表单必须在 **CScroll::ZeroThumbVariables** () 方法中解除屏蔽。

```
class CScroll : public CElement
  {
protected:
   //--- 与滑轨移动相关的变量
   bool              m_scroll_state;
   int               m_thumb_size_fixing;
   int               m_thumb_point_fixing;
   //--- 为标识按下鼠标左键的区域
   ENUM_THUMB_MOUSE_STATE m_clamping_area_mouse;
   //---
public:
   //--- 标识按下鼠标左键的区域
   void              CheckMouseButtonState(const bool mouse_state);
   //--- 变量清零
   void              ZeroThumbVariables(void);
  };
//+------------------------------------------------------------------+
//| 标识按下鼠标左键的区域                                     |
//+------------------------------------------------------------------+
void CScroll::CheckMouseButtonState(const bool mouse_state)
  {
//--- 识别鼠标按键的状态:
//    如果已释放
   if(!mouse_state)
     {
      //--- 变量清零
      ZeroThumbVariables();
      return;
     }
//--- 如果已按下
   if(mouse_state)
     {
      //--- 如果按键在另一个区域内按下，就退出
      if(m_clamping_area_mouse!=THUMB_NOT_PRESSED)
         return;
      //--- 在滑轨区域之外
      if(!m_thumb.MouseFocus())
         m_clamping_area_mouse=THUMB_PRESSED_OUTSIDE;
      //--- 在滑轨区域之内
      else
        {
         m_clamping_area_mouse=THUMB_PRESSED_INSIDE;
         //--- 如果不是下拉元件
         if(!CElement::IsDropdown())
           {
            //--- 屏蔽表单并保存活动元件的ID
            m_wnd.IsLocked(true);
            m_wnd.IdActivatedElement(CElement::Id());
           }
        }
     }
  }
//+------------------------------------------------------------------+
//| 把与滑轨移动相关的变量清零                                   |
//+------------------------------------------------------------------+
void CScroll::ZeroThumbVariables(void)
  {
//--- 如果不是一个下拉元件
   if(!CElement::IsDropdown())
     {
      //--- 解除表单屏蔽并重置活动元件ID
      m_wnd.IsLocked(false);
      m_wnd.IdActivatedElement(WRONG_VALUE);
     }
   m_thumb_size_fixing   =0;
   m_clamping_area_mouse =THUMB_NOT_PRESSED;
  }
```

为了根据鼠标光标位置和它左键的状态改变滚动条的颜色，创建 **CScroll::ChangeObjectsColor** () 方法。在这个方法的开始，会检查表单是否被屏蔽以及滚动条的ID与内存中存储的ID是否不同，如果两个条件都符合，根据滚动条的当前模式和其按钮的焦点，它们得到一个对应的状态。滚动条可以有两种状态: (1) 空闲 以及(2) 滑轨移动过程中。在那之后，根据光标的位置以及鼠标左键在哪个区域内被按下，滑轨取得相关的颜色。滚动条的状态也在这里定义。

```
class CScroll : public CElement
  {
public:
   //--- 改变滚动条对象的颜色
   void              ChangeObjectsColor(void);
  };
//+------------------------------------------------------------------+
//| 改变列表视图滚动条对象的颜色                               |
//+------------------------------------------------------------------+
void CScroll::ChangeObjectsColor(void)
  {
//--- 如果表单被屏蔽并且当前活动的元件ID不同，就退出
   if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
      return;
//--- 列表视图滚动条按钮的颜色
   if(!m_scroll_state)
     {
      m_inc.State(m_inc.MouseFocus());
      m_dec.State(m_dec.MouseFocus());
     }
//--- 如果光标在滚动条区域之内
   if(m_thumb.MouseFocus())
     {
      //--- 如果松开了鼠标左键
      if(m_clamping_area_mouse==THUMB_NOT_PRESSED)
        {
         m_scroll_state=false;
         m_thumb.BackColor(m_thumb_color_hover);
         m_thumb.Color(m_thumb_border_color_hover);
        }
      //--- 在滑轨上按下了鼠标左键
      else if(m_clamping_area_mouse==THUMB_PRESSED_INSIDE)
        {
         m_scroll_state=true;
         m_thumb.BackColor(m_thumb_color_pressed);
         m_thumb.Color(m_thumb_border_color_pressed);
        }
     }
//--- 如果光标在滚动条区域之外
   else
     {
      //--- 松开了鼠标左键
      if(m_clamping_area_mouse==THUMB_NOT_PRESSED)
        {
         m_scroll_state=false;
         m_thumb.BackColor(m_thumb_color);
         m_thumb.Color(m_thumb_border_color);
        }
     }
  }
```

在开发使用滚动条的界面元件时，将需要能够取得滚动条按钮名称和状态的方法，另外，我们还需要用于设置和识别滚动条滑轨移动状态和与其所附加的列表视图当前相对位置的方法。

```
class CScroll : public CElement
  {
protected:
   //--- 定义滚动条的状态
   bool              m_scroll_state;
   //--- 滑轨的当前位置
   int               m_current_pos;
   //---
public:
   //--- 按钮对象的名称
   string            ScrollIncName(void)                const { return(m_inc.Name());             }
   string            ScrollDecName(void)                const { return(m_dec.Name());             }
   //--- 按钮的状态
   bool              ScrollIncState(void)               const { return(m_inc.State());            }
   bool              ScrollDecState(void)               const { return(m_dec.State());            }
   //--- 滚动条的状态
   void              ScrollState(const bool scroll_state)     { m_scroll_state=scroll_state;      }
   bool              ScrollState(void)                  const { return(m_scroll_state);           }
   //--- 滑轨的当前位置
   void              CurrentPos(const int pos)                { m_current_pos=pos;                }
   int               CurrentPos(void)                   const { return(m_current_pos);            }
  };
```

我们已经完成了滚动条基类的开发，现在，我们将填充该控件的派生类。

### 控件的派生类

滚动条的基类中填充了用于创建对象，设置参数以及取得它们的数值的通用方法，而派生类则用于管理这个控件。我们之前已经在 **Scrolls.mqh** 中创建了派生类 **CScrollV** 和 **CScrollH** ，我们将只讨论它们中的一个 - 垂直滚动条(**CScrollV**)中的方法。在第二个类(**CScrollH**)中，一切都和它类似，只有一个对于滚动条类型的调整，在水平滚动条类中，我们在 **X** 坐标上操作，这与垂直滚动条不同，在其中我们在 Y 坐标上操作。

首先，我们将探讨 **CScrollV::OnDragThumb** () 和 **CScrollV::UpdateThumb** () 方法的代码，它们是设计用于移动滚动条的滑轨的。它们必须在类的私有部分声明，因为它们只是在 **CScrollV** 类的内部使用。

```
//+------------------------------------------------------------------+
//| 用于管理垂直滚动条的类                                 |
//+------------------------------------------------------------------+
class CScrollV : public CScroll
  {
private:
   //--- 移动滑轨
   void              OnDragThumb(const int y);
   //--- 更新滑轨的位置
   void              UpdateThumb(const int new_y_point);
  };
```

**CScrollV::OnDragThumb** () 方法是用于识别用户移动滑轨的尝试的，如果在滚动条的滑轨上按下了鼠标键并且鼠标光标在 **Y** 轴上移动, 就意味着移动过程已经开始，对象需要被移动。滑轨滑块坐标的更新是通过使用 **CScrollV::UpdateThumb** ()进行的。

```
//+------------------------------------------------------------------+
//| 移动滑轨                                |
//+------------------------------------------------------------------+
void CScrollV::OnDragThumb(const int y)
  {
//--- 为识别新的 Y 坐标
   int new_y_point=0;
//--- 如果滚动条是不活动的, ...
   if(!CScroll::ScrollState())
     {
      //--- ...把用于移动滑轨的辅助变量清零
      CScroll::m_thumb_size_fixing  =0;
      CScroll::m_thumb_point_fixing =0;
      return;
     }
//--- 如果固定点是零，保存光标当前的坐标
   if(CScroll::m_thumb_point_fixing==0)
      CScroll::m_thumb_point_fixing=y;
//--- 如果滑轨边缘距离鼠标光标当前坐标距离为零，就进行计算
   if(CScroll::m_thumb_size_fixing==0)
      CScroll::m_thumb_size_fixing=m_thumb.Y()-y;
//--- 如果在按下状态超过了向下的阈值
   if(y-CScroll::m_thumb_point_fixing>0)
     {
      //--- 计算 Y 坐标
      new_y_point=y+CScroll::m_thumb_size_fixing;
      //--- 更新滑轨的位置
      UpdateThumb(new_y_point);
      return;
     }
//--- 如果在按下状态超过了向上的阈值
   if(y-CScroll::m_thumb_point_fixing<0)
     {
      //--- 计算 Y 坐标
      new_y_point=y-::fabs(CScroll::m_thumb_size_fixing);
      //--- 更新滑轨的位置
      UpdateThumb(new_y_point);
      return;
     }
  }
```

以下是 **CScrollV::UpdateThumb** ()方法的详细代码，向其中传入 **CScrollV::OnDragThumb** ()方法中计算得到的Y坐标 **，** 在其中会检测正确性。如果发现在移动滑轨的过程中超过了工作区域的界限，该数值会被调整。只有在那之后，坐标才会被更新并保存在基类的栏位中。

```
//+------------------------------------------------------------------+
//| 更新滑轨的位置                            |
//+------------------------------------------------------------------+
void CScrollV::UpdateThumb(const int new_y_point)
  {
   int y=new_y_point;
//--- 固定点清零
   CScroll::m_thumb_point_fixing=0;
//--- 检查是否向下超过工作区域并做调整
   if(new_y_point>m_bg.Y2()-CScroll::m_thumb_length)
     {
      y=m_bg.Y2()-CScroll::m_thumb_length;
      CScroll::CurrentPos(int(CScroll::m_thumb_steps_total));
     }
//--- 检查是否向上超过工作区域并作调整
   if(new_y_point<=m_bg.Y())
     {
      y=m_bg.Y();
      CScroll::CurrentPos(0);
     }
//--- 更新坐标和边缘
   m_thumb.Y(y);
   m_thumb.Y_Distance(y);
   m_thumb.YGap(m_thumb.Y()-(CElement::Y()-CElement::YGap()));
  }
```

我们将需要另外一个私有方法用于修正滑轨滑块当前位置在 **Y** 轴上的相对坐标。让我们称它为 **CScrollV::CalculateThumbPos** ()，它的代码显示如下。

```
class CScrollV : public CScroll
  {
private:
   //--- 修正滑轨滑块的位置
   void              CalculateThumbPos(void);
  };
//+------------------------------------------------------------------+
//| 修改滑轨滑块位置数值                                |
//+------------------------------------------------------------------+
void CScrollV::CalculateThumbPos(void)
  {
//--- 如果步长为零，退出
   if(CScroll::m_thumb_step_size==0)
      return;
//--- 修正滚动条位置的数值
   CScroll::CurrentPos(int((m_thumb.Y()-m_bg.Y())/CScroll::m_thumb_step_size));
//--- 检查是否向上/向下超出了工作区域
   if(m_thumb.Y2()>=m_bg.Y2()-1)
      CScroll::CurrentPos(int(CScroll::m_thumb_steps_total-1));
   if(m_thumb.Y()<m_bg.Y())
      CScroll::CurrentPos(0);
  }
```

现在，让我们创建 **CScrollV::ScrollBarControl** ()公有方法用于管理滑轨，所有以上讨论的私有方法都在这个方法中调用。它将在包含滚动条元件的 **OnEvent** ()事件处理函数中被调用。我们将在第二章中带来一个详细的实例，在那里我们将开发一个类用于创建列表视图控件，

**CScrollV::ScrollBarControl** ()方法的代码显示如下。光标的坐标和鼠标左键的状态会作为参数传给它。在开始，我们检查滚动条上的焦点，然后，我们检查鼠标左键在哪个区域内按下，根据光标的位置和鼠标左键的状态，滚动条会改变颜色，在那之后，如果管理被传到滚动条，滚动条就移动到计算所得的新的 **Y** 坐标。 再计算与之相关的列表视图项目的数量。

```
class CScrollV : public CScroll
  {
public:
   //--- 管理滚动条
   bool              ScrollBarControl(const int x,const int y,const bool mouse_state);
  };
//+------------------------------------------------------------------+
//| 管理滚动条                              |
//+------------------------------------------------------------------+
bool CScrollV::ScrollBarControl(const int x,const int y,const bool mouse_state)
  {
//--- 检查滚动条的焦点
   m_thumb.MouseFocus(x>m_thumb.X() && x<m_thumb.X2() && 
                      y>m_thumb.Y() && y<m_thumb.Y2());
//--- 检查并保存鼠标按键的状态
   CScroll::CheckMouseButtonState(mouse_state);
//--- 改变滚动条的颜色
   CScroll::ChangeObjectsColor();
//--- 如果管理被传到滚动条，识别滚动条的位置
   if(CScroll::ScrollState())
     {
      //--- 移动滑轨
      OnDragThumb(y);
      //--- 改变滚动条的位置
      CalculateThumbPos();
      return(true);
     }
//---
   return(false);
  }
```

**CScrollV::CalculateThumbPos** () 方法把 **Y** 坐标转换为列表视图项目的数量。我们还需要一个方法来做相反的转换，也就是计算滚动条当前位置相对的 **Y** 坐标。在此，也有对于超过工作区域的检测并在出现超出时做调整。在方法的末尾，更新坐标和对象的边缘。

```
class CScrollV : public CScroll
  {
public:
   //--- 计算滚动条的Y坐标
   void              CalculateThumbY(void);
  };
//+------------------------------------------------------------------+
//| 计算滚动条的Y坐标                                   |
//+------------------------------------------------------------------+
void CScrollV::CalculateThumbY(void)
  {
//--- 识别当前滚动条的 Y 坐标
   int scroll_thumb_y=int(m_bg.Y()+(CScroll::CurrentPos()*CScroll::m_thumb_step_size));
//--- 如果向上超出了工作区域
   if(scroll_thumb_y<=m_bg.Y())
      scroll_thumb_y=m_bg.Y();
//--- 如果向下超出了工作区域u
   if(scroll_thumb_y+CScroll::m_thumb_length>=m_bg.Y2() || 
      CScroll::CurrentPos()>=CScroll::m_thumb_steps_total-1)
     {
      scroll_thumb_y=int(m_bg.Y2()-CScroll::m_thumb_length);
     }
//--- 更新在Y轴的坐标和边缘
   m_thumb.Y(scroll_thumb_y);
   m_thumb.Y_Distance(scroll_thumb_y);
   m_thumb.YGap(m_thumb.Y()-m_wnd.Y());
  }
```

**CScrollV::CalculateThumbY** ()方法将会在处理按下滚动条按钮的方法中调用，代码如下所示。对象的名称是传给 **CScrollV::OnClickScrollInc** () 和 **CScrollV::OnClickScrollDec** () 方法的仅有参数。在方法的最开始会检查以下参数：

- 如果按钮被按下，就检查对象的名称。
- 滚动条的状态，如果检查通过，就一定是空闲模式。
- 必须定义步数，它的值不能小于一。

如果检查通过了，位置就会改变一步，而且要考虑到不能超出工作范围。在那之后, 在 **CScrollV::CalculateThumbY** ()方法中，还要计算和更新 **Y** 坐标，以及与表单边界的距离。在按钮被按下之后，它必须保持在按下状态。

```
class CScrollV : public CScroll
  {
public:
   //--- 处理滚动条按钮被按下的情况
   bool              OnClickScrollInc(const string clicked_object);
   bool              OnClickScrollDec(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 处理按下向上/向左按钮                                          |
//+------------------------------------------------------------------+
bool CScrollV::OnClickScrollInc(const string clicked_object)
  {
//--- 如果不是按下此对象或者滚动条不是活动的或者没有步数，就退出
   if(m_inc.Name()!=clicked_object || CScroll::ScrollState() || CScroll::m_thumb_steps_total<1)
      return(false);
//--- 减小滚动条的位置
   if(CScroll::CurrentPos()>0)
      CScroll::m_current_pos--;
//--- 计算滚动条的Y坐标
   CalculateThumbY();
//--- 设置按下状态
   m_inc.State(true);
   return(true);
  }
//+------------------------------------------------------------------+
//| 处理按下向下/向右按钮                                     |
//+------------------------------------------------------------------+
bool CScrollV::OnClickScrollDec(const string clicked_object)
  {
//--- 如果不是按下此对象或者滚动条不是活动的或者没有步数，就退出
   if(m_dec.Name()!=clicked_object || CScroll::ScrollState() || CScroll::m_thumb_steps_total<1)
      return(false);
//--- 增加滚动条位置值
   if(CScroll::CurrentPos()<CScroll::m_thumb_steps_total-1)
      CScroll::m_current_pos++;
//--- 计算滚动条的Y坐标
   CalculateThumbY();
//--- 设置按下状态
   m_dec.State(true);
   return(true);
  }
```

用于管理垂直滚动条的方法已经开发结束了，水平类型滚动条的方法是一样的，只是计算是在 **X** 坐标上进行的。

### 结论

在本章中，我们已经探讨了垂直和水平滚动条，在以后的文章中，我们将开发图形界面的另外一个元件 - 列表视图(list view)。列表视图项目的数量可能无法容纳在可用的空间内，在那种情况下我们将需要在本文中开发的滚动条控件。

您可以在第五部分中下载资料来测试看它如何工作。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第五部分的文章列表:**

- [图形界面 V: 垂直与水平滚动条 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359)
- 图形界面 V: 列表视图元件 (第二章)
- 图形界面 V: 组合框元件 (第三章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2379](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0359)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-217%3B.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-217%3B%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (196.34 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-217%3B%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (196.3 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[图形界面 V: 列表视图元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0)

在前一章中，我们开发了用于创建垂直和水平滚动条的类。在本章中，我们将应用它们，我们将开发一个用于创建列表视图元件的类，它的一个组成部分将是一个垂直滚动条。

[自组织特征映射 (Kohonen 映射) - 再访主题](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0063)

本文描述利用 Kohonen 映射进行操作的技术。本主题对那些在他们的项目中运用 Kohonen 映射进行市场研究时遇到困难的 MQL4/MQL5 初级程序员和经验丰富的程序员都有益处。

[如何为 MetaTrader 市场创建一款非标准图表的指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B7)

通过离线图表, 以 MQL4 编程, 以及合理的意愿, 您可以得到各种图表类型: "点线图", "Renko", "Kagi", "范围柱线", 等量图表, 等等。在本文中, 我们将展示如何在不使用 DLL 的情况下来实现它, 而且这种 "二并一" 的指标可以发布, 并从市场上购买。

[通用智能交易系统:组合交易及管理策略组合(第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0159)

在最后一篇关于CStrategy交易引擎的系列文章中，我们将考虑多个交易算法同时运行，学习如何从XML文件加载策略，并将给出一个简单的面板，用于从可执行模块中选择EA，并管理它们的交易模式。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fwyxn2tfzit%3Ac%3B654x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dvrs%24a%3Fqmizcrggjqdeaoxewkgdzsvtxaopyziq%26q%3D180bf1%60cfaf0g2%3Be6e%3B502c53b%3Bcge%3B212fdf052g8%60376fd%3A3gc590438475139%24v%3F1%24w%3F820%24h%3F82%26p%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fcrvialgs'2D217%3B%26joqt%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fdf'2D%26kd%3Fwfawszxsrrvjeibujpjnhsjeh%7Bhgspqsaw%26dz%5Dulis%3D4378234921010762401%26auqtmm%3F"></iframe>