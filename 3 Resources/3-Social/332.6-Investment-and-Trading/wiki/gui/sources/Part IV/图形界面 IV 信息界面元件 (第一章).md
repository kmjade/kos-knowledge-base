---
title: "图形界面 IV: 信息界面元件 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-25T10:48:10+00:00Z
created: 2026-06-28
description: "在当前开发阶段，用于创建图形界面的库包含了表单以及可以附加其中的几个控件。之前已经说过，未来的文章中将有一篇专门致力于多窗口模式，现在，我们已经万事具备，我们将在下面的章节中讨论它。在本章中，我们将开发用于创建状态栏和工具提示信息界面元件的类。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_22)
- [状态栏元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_23)
- [状态栏的测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_24)
- [工具提示元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_25)
- [工具提示测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_26)
- [工具提示的私有数组](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_27)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_28)

### 简介

第一篇文章, [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细考虑了这个库的目标. 文章链接的完整列表在系列文章每章的最后。在那里您可以找到和下载当前开发阶段的完整版本的库。文件在目录中的位置必须和在档案中相同。

在当前开发阶段，用于创建图形界面的库包含了表单以及可以附加其中的几个控件。之前已经说过，未来的文章中将有一篇专门致力于多窗口模式，现在，我们已经万事具备，我们将在下面的章节中讨论它。在本章中，我们将开发用于创建状态栏和工具提示信息界面元件的类。

### 状态栏元件

状态栏是图形界面的信息元件之一，这个元件是用于重要数据，详细信息，数值等内容的快速访问的。 **MetaTrader** 终端也有一个状态栏。它包含了几个部分(项目)，第一部分显示了鼠标光标所在终端部分的信息或程序命令的名称，还有一些项目在鼠标光标在价格图表区域中移动时显示了日期和价格，有些项目包含上下文菜单，可以同过点击鼠标左键弹出。 **MetaEditor** 代码编辑器也有状态栏，它的项目也反映了程序的命令，光标的位置(行/列)以及文字输入的模式(插入/覆盖)，终端和代码编辑器状态栏的更加详细的信息可以在它们的帮助(**F1**)中找到。

在本文中，我们将创建一个简单的状态栏，不支持项目中包含上下文菜单选项。与其他界面元件类似，状态栏由几个基本对象构成:

- 背景.
- 项目.
- 分隔线.

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-03_%5D1%5Del.rne)
![[Pasted image 20260628213130.png]]
图 1. 状态栏元件的组成部分.

创建 **StatusBar.mqh** 文件，并在 **WndContainer.mqh** 文件中包含它，这样整个库中就可以使用它了。以下代码显示了 **CStatusBar** 类以及所有控件类中使用的标准虚方法。

```
//+------------------------------------------------------------------+
//|                                                    StatusBar.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 创建状态栏的类                            |
//+------------------------------------------------------------------+
class CStatusBar : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CStatusBar(void);
                    ~CStatusBar(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)                   { m_wnd=::GetPointer(object);   }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam) {}
   //--- 计时器
   virtual void      OnEventTimer(void) {}
//--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重置鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CStatusBar::CStatusBar(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CStatusBar::~CStatusBar(void)
  {
  }
//+------------------------------------------------------------------+
```

这个版本中并没有使用 **OnEvent** ()和 **OnEventTimer** ()事件处理函数，它们只是为了与其他控件类保持一致而保留。

现在，我们将探讨状态栏的属性。这里需要使用对象数组，包括通用属性和特定属性。特定属性只有项目的宽度，而通用属性列表要长一些，显示如下。

**共有属性:**

- 背景和背景边框的颜色；
- 文字颜色；
- 分隔线的颜色；
- 鼠标左键点击优先级。

在构造函数中使用默认值初始化属性栏位，在创建元件的时候，用户可以使用类的公有方法重新定义它们。

```
class CStatusBar : public CElement
  {
private:
   //--- 属性:
   //    特别属性的数组
   int               m_width[];
   //--- (1) 背景色 以及 (2)背景边框的颜色
   color             m_area_color;
   color             m_area_border_color;
   //--- 文字颜色
   color             m_label_color;
   //--- 鼠标左键点击的优先级
   int               m_zorder;
   //--- 分隔线的颜色
   color             m_sepline_dark_color;
   color             m_sepline_light_color;
   //---
public:
   //--- 设置颜色 (1)背景, (2) 背景边框 以及 (3) 文字
   void              AreaColor(const color clr)                       { m_area_color=clr;             }
   void              AreaBorderColor(const color clr)                 { m_area_border_color=clr;      }
   void              LabelColor(const color clr)                      { m_label_color=clr;            }
   //--- 分隔线的颜色
   void              SeparateLineDarkColor(const color clr)           { m_sepline_dark_color=clr;     }
   void              SeparateLineLightColor(const color clr)          { m_sepline_light_color=clr;    }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CStatusBar::CStatusBar(void) : m_area_color(C'240,240,240'),
                               m_area_border_color(clrSilver),
                               m_label_color(clrBlack),
                               m_sepline_dark_color(C'160,160,160'),
                               m_sepline_light_color(clrWhite)
  {
//--- 在基类中保存元件类的名称  
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击的优先级
   m_zorder=2;
  }
```

让我们考虑创建状态栏的方法，为了创建背景，我们将使用 **CRectLabel** 类型的基本对象，使用 **CEdit** 类型基本对象的动态数组来创建项目，之前已经写好了用于创建分隔线的 **CSeparateLine** 类，这个类可以用作独立的界面元件，而在本例中，它将被用作状态栏的组成部分，我们需要一个这种元件的数组。

必须在创建状态栏之前使用 **CStatusBar::AddItem** ()方法来增加项目，否则图形界面的创建就会中断。项目的数量可以通过调用 **CStatusBar::ItemsTotal** ()方法来获得。

```
//+------------------------------------------------------------------+
//|                                                    StatusBar.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "SeparateLine.mqh"
//+------------------------------------------------------------------+
//| 创建状态栏的类                            |
//+------------------------------------------------------------------+
class CStatusBar : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CRectLabel        m_area;
   CEdit             m_items[];
   CSeparateLine     m_sep_line[];
   //---
public:
   //--- 用于创建状态栏的方法
   bool              CreateStatusBar(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateItems(void);
   bool              CreateSeparateLine(const int line_number,const int x,const int y);
   //---
public:
   //--- 项目数量
   int               ItemsTotal(void)                           const { return(::ArraySize(m_items)); }

   //--- 在创建状态栏之前使用指定属性增加项目
   void              AddItem(const int width);
  };
```

我们将只会详细讨论创建状态栏项目的 **CStatusBar::CreateItems** ()方法，其他的方法与之前讨论的其他控件类没有本质区别。

项目设置在背景区域之内，不能超出边框，这就是为什么在最开头要在坐标上加上一个像素宽的边缘。然后会检查项目的数量，如果没有设置任何项目，会在日志中打印消息而图形界面的创建将终止。

我们将会实现，如果第一个项目的宽度没有定义，它将被自动计算。状态栏的宽度正好就是它所附加的表单的宽度(少两个像素以便位于表单区域之内)，为了得到第一个项目的宽度，将会在循环中加上其他项目的大小(宽度)，然后从表单宽度上减去这个值。

然后，在随后的循环中会创建项目，然后是创建分隔线的循环。分隔线的坐标是根据相对每个项目的坐标来计算的，第一个项目不用创建分隔线。通过这种方式，分隔线的数量总是比项目数量少一。

```
//+------------------------------------------------------------------+
//| 创建状态栏项目                              |
//+------------------------------------------------------------------+
bool CStatusBar::CreateItems(void)
  {
   int l_w=0;
   int l_x=m_x+1;
   int l_y=m_y+1;
//--- 取得项目数量
   int items_total=ItemsTotal();
//--- 如果组中没有项目，报告并退出
   if(items_total<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "组中至少包含一个项目!使用 CStatusBar::AddItem() 方法");
      return(false);
     }
//--- 如果第一个项目的宽度没有设置，则...
   if(m_width[0]<1)
     {
      //--- ...计算它与其他项目相关的宽度
      for(int i=1; i<items_total; i++)
         l_w+=m_width[i];
      //---
      m_width[0]=m_wnd.XSize()-l_w-(items_total+2);
     }
//--- 创建指定数量的项目
   for(int i=0; i<items_total; i++)
     {
      //--- 构建对象名称
      string name=CElement::ProgramName()+"_statusbar_edit_"+string(i)+"__"+(string)CElement::Id();
      //--- X 坐标
      l_x=(i>0)? l_x+m_width[i-1] : l_x;
      //--- 创建对象
      if(!m_items[i].Create(m_chart_id,name,m_subwin,l_x,l_y,m_width[i],m_y_size-2))
         return(false);
      //--- 设置属性
      m_items[i].Description("");
      m_items[i].TextAlign(ALIGN_LEFT);
      m_items[i].Font(FONT);
      m_items[i].FontSize(FONT_SIZE);
      m_items[i].Color(m_label_color);
      m_items[i].BorderColor(m_area_color);
      m_items[i].BackColor(m_area_color);
      m_items[i].Corner(m_corner);
      m_items[i].Anchor(m_anchor);
      m_items[i].Selectable(false);
      m_items[i].Z_Order(m_zorder);
      m_items[i].ReadOnly(true);
      m_items[i].Tooltip("\n");
      //--- 面板边缘的距离
      m_items[i].XGap(l_x-m_wnd.X());
      m_items[i].YGap(l_y-m_wnd.Y());
      //--- 坐标
      m_items[i].X(l_x);
      m_items[i].Y(l_y);
      //--- 大小
      m_items[i].XSize(m_width[i]);
      m_items[i].YSize(m_y_size-2);
      //--- 保存对象指针
      CElement::AddToArray(m_items[i]);
     }
//--- 创建分隔线
   for(int i=1; i<items_total; i++)
     {
      //--- X 坐标
      l_x=m_items[i].X();
      //--- 创建分隔线
      CreateSeparateLine(i,l_x,l_y+2);
     }
//---
   return(true);
  }
```

我们还将需要一个公有方法用于修改每个项目的文字，让我们创建这样的方法并称它为 **CStatusBar::ValueToItem** ()。它将接收的参数是项目的索引编号和需要反映在其中的文字。

```
class CStatusBar : public CElement
  {
public:
   //--- 根据指定的索引设置数值
   void              ValueToItem(const int index,const string value);
  };
//+------------------------------------------------------------------+
//| 根据指定索引设置数值                             |
//+------------------------------------------------------------------+
void CStatusBar::ValueToItem(const int index,const string value)
  {
//--- 检查是否超出数组范围
   int array_size=::ArraySize(m_items);
   if(array_size<1 || index<0 || index>=array_size)
      return;
//--- 设置传入的文字
   m_items[index].Description(value);
  }
```

### 状态栏的测试

我们已经准备测试状态栏元件了，我们将使用系列文章中前一部份(第三部分)的第一个EA来进行测试。保留住菜单和五个 **CIconButton** 类型的按钮，并且删除所有其他控件。 type and delete all other controls. **StatusBar.mqh** 文件已经包含在库中，可以在 **CProgram** 自定义类中创建用于创建状态栏的方法和它的实例。

创建包含两个项目的状态栏，我们将不会定义第一个项目的宽度，它会被自动计算。在创建状态栏之后，设置文字«For Help, press F1(按F1以取得帮助)»作为例子。

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                         |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 状态栏
   CStatusBar        m_status_bar;
   //---
private:
   //--- 状态栏
#define STATUSBAR1_GAP_X         (1)
#define STATUSBAR1_GAP_Y         (175)
   bool              CreateStatusBar(void);
  };
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 为控件创建表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
   if(!CreateStatusBar())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
//+------------------------------------------------------------------+
//| 创建状态栏                                           |
//+------------------------------------------------------------------+
bool CProgram::CreateStatusBar(void)
  {
#define STATUS_LABELS_TOTAL 2
//--- 传入面板对象
   m_status_bar.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+STATUSBAR1_GAP_X;
   int y=m_window1.Y()+STATUSBAR1_GAP_Y;
//--- 宽度th
   int width[]={0,110};
//--- 在创建之前设置属性
   m_status_bar.YSize(24);
//--- 指定部分的数量并设置它们的属性
   for(int i=0; i<STATUS_LABELS_TOTAL; i++)
      m_status_bar.AddItem(width[i]);
//--- 创建控件
   if(!m_status_bar.CreateStatusBar(m_chart_id,m_subwin,x,y))
      return(false);
//--- 设置状态栏第一个项目的文字
   "For Help, press F1"

//--- 把对象加到通用对象数组中
   CWndContainer::AddToElementsArray(0,m_status_bar);
   return(true);
  }
```

状态栏的第二个项目将显示本地时间，为此，在应用程序的计时器函数中增加代码，如下所示。这意味着该项目将每隔 **500** 毫秒更新一次。

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CProgram::OnTimerEvent(void)
  {
   CWndEvents::OnTimerEvent();

//--- 每500毫秒更新一次状态栏的第二个项目
   static int count=0;
   if(count<500)
     {
      count+=TIMER_STEP_MSC;
      return;
     }
//---
   count=0;
   m_status_bar.ValueToItem(1,TimeToString(TimeLocal(),TIME_DATE|TIME_SECONDS));
   m_chart.Redraw();
  }
```

如果一切工作正常，您将会得到如以下屏幕截图所示的结果：

![图 2. 状态栏元件的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-00_n.rne "图 2. 状态栏元件的测试.")
![[Pasted image 20260628213319.png]]
图 2. 状态栏元件的测试.

我们已经完成了用于创建状态栏元件的类的开发，该类的完整版本可以在文章附件的文件中找到。

### 工具提示元件

现在，我们将开发用于创建工具提示(tooltips)的类。在本系列文章第一部分的第四章中，当讨论表单按钮的功能时，已经详细解释了为什么这个元件需要一个独立的类，简而言之，工具提示要求不能对字符数量加以限制并且要有选项可以高亮显示一些词语。为了实现这些，我们将使用一个用于绘制元件的类。如何绘制界面元件的例子之前已经演示过，本系列文章第二部分的第二章中开发了用于创建分隔线元件的 **CSeparateLine** 类。现在，根据相同的原则，我们将开发用于工具提示的类。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-01_gn%2Cplg)
![[Pasted image 20260628213332.png]]
图 3. Word 中的工具提示实例.

创建 **Tooltip.mqh** 文件，并在包含所有界面元件的 **WndContainer.mqh** 文件中包含它。然后，在这个新的文件中创建一个类以及所有界面元件都有的，我们已经熟悉的标准方法。在这个类中，除了表单指针，我们还将需要工具提示所要附加的元件的指针以及保存这个指针的方法。

```
//+------------------------------------------------------------------+
//|                                                      Tooltip.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 用于创建工具提示的类                          |
//+------------------------------------------------------------------+
class CTooltip : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //--- 工具提示将要附加的元件的指针
   CElement         *m_element;
   //---
public:
   //--- (1) 保存表单指针, (2) 保存元件指针
   void              WindowPointer(CWindow &object)   { m_wnd=::GetPointer(object);     }
   void              ElementPointer(CElement &object) { m_element=::GetPointer(object); }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CTooltip::CTooltip(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CTooltip::~CTooltip(void)
  {
  }
```

用户可以在创建工具提示之前设置的属性:

- 标题；
- 文字行数组；

其他属性将使用默认值。它们是:

- 工具提示背景渐变色；
- 背景边框的颜色；
- 标题颜色；
- 文字颜色；
- Alpha 通道；用于管理工具提示的透明度。

文字行数组可以在创建工具提示之前，使用 **CTooltip::AddString** ()方法一行一行地添加。

```
class CTooltip : public CElement
  {
private:
   //--- 属性:
   //    标题
   string            m_header;
   //--- 工具提示的文字行数组
   string            m_tooltip_lines[];
   //--- alpha 通道的数值 (工具提示的透明度)
   uchar             m_alpha;
   //--- 颜色设置 (1) 文字, (2) 标题 以及 (3) 背景边框
   color             m_text_color;
   color             m_header_color;
   color             m_border_color;
   //--- 背景渐变色数组
   color             m_array_color[];
   //---
public:
   //--- 工具提示标题
   void              Header(const string text)        { m_header=text;                  }
   //--- 为工具提示增加文字行
   void              AddString(const string text);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CTooltip::CTooltip(void) : m_header(""),
                           m_alpha(0),
                           m_text_color(clrDimGray),
                           m_header_color(C'50,50,50'),
                           m_border_color(C'118,118,118'),
                           m_gradient_top_color(clrWhite),
                           m_gradient_bottom_color(C'208,208,235')
  {
//--- 在基类中保存元件类的名称  
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 加上一行                               |
//+------------------------------------------------------------------+
void CTooltip::AddString(const string text)
  {
//--- 把数组大小增加一个元件
   int array_size=::ArraySize(m_tooltip_lines);
   ::ArrayResize(m_tooltip_lines,array_size+1);
//--- 保存传入的参数值
   m_tooltip_lines[array_size]=text;
  }
```

与分隔线元件类相似，我们将使用 **CRectCanvas** 类和两个方法(公有和私有)来创建工具提示。

```
class CTooltip : public CElement
  {
private:
   //--- 用于创建工具提示的对象
   CRectCanvas       m_canvas;
   //---
public:
   //--- 创建工具提示的方法
   bool              CreateTooltip (const long chart_id,const int subwin);
   //---
private:
   //--- 为工具提示创建画布
   bool              CreateCanvas(void);
  };
```

除了检查元件将要附加的表单的指针， **CTooltip::CreateTooltip** ()公有方法还包含了对将要附加工具提示的元件的检查,如果元件指针存在，工具提示的坐标就根据与该元件坐标的相对关系进行计算，在我们的实例中，它比元件的底边低一个像素点。

```
//+------------------------------------------------------------------+
//| 创建工具提示对象                           |
//+------------------------------------------------------------------+
bool CTooltip::CreateTooltip(const long chart_id,const int subwin)
  {
//--- 如果没有表单指针
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建工具提示之前，该类必须 "
              "传入表单指针: CTooltip::WindowPointer(CWindow &object).");
      return(false);
     }
//--- 如果没有元件指针就退出
   if(::CheckPointer(m_element)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建工具提示之前，该类必须 "
              "传入元件指针: CTooltip::ElementPointer(CElement &object).");
      return(false);
     }
//--- 指针初始化
   m_id       =m_wnd.LastId()+1;
   m_chart_id =chart_id;
   m_subwin   =subwin;
   m_x        =m_element.X();
   m_y        =m_element.Y2()+1;
//--- 到边缘的距离
   CElement::XGap(m_x-m_wnd.X());
   CElement::YGap(m_y-m_wnd.Y());
//--- 创建工具提示
   if(!CreateTooltip())
      return(false);
//---
   return(true);
  }
```

与 **CSeparateLine** 类中近似的方法不同, 在创建画布的 **CTooltip::CreateCanvas** ()私有方法中，需要进行以下操作，而不是在创建对象和设置属性后开始画图。

- 设置工具提示背景渐变色数组大小，数组的大小等于对象高度的像素点数(**Y** 轴大小)；
- 初始化渐变色数组；
- 清空画布；设置透明度为 **100** %时，alpha 通道值为零；

在方法的末尾，该对象被加入到元件对象的通用数组中。这个方法的代码显示如下。

```
//+------------------------------------------------------------------+
//| 创建用于画图的画布                          |
//+------------------------------------------------------------------+
bool CTooltip::CreateCanvas(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_help_tooltip_"+(string)CElement::Id();
//--- 创建画布
   if(!m_canvas.CreateBitmapLabel(m_chart_id,m_subwin,name,m_x,m_y,m_x_size,m_y_size,COLOR_FORMAT_ARGB_NORMALIZE))
      return(false);
//--- 附加到图表
   if(!m_canvas.Attach(m_chart_id,name,m_subwin,1))
      return(false);
//--- 设置属性
   m_canvas.Background(false);
//--- 到边缘的距离
   m_canvas.XGap(m_x-m_wnd.X());
   m_canvas.YGap(m_y-m_wnd.Y());
//--- 设置工具提示背景渐变色数组的大小
   CElement::GradientColorsTotal(m_y_size);
   ::ArrayResize(m_array_color,m_y_size);
//--- 初始化渐变色数组
   CElement::InitColorArray(m_gradient_top_color,m_gradient_bottom_color,m_array_color);
//--- 清空画布
   m_canvas.Erase(::ColorToARGB(clrNONE,0));
   m_canvas.Update();
   m_alpha=0;
//--- 保存对象指针
   CElement::AddToArray(m_canvas);
   return(true);
  }
```

让我们看一下绘制垂直渐变和边框的方法。对于渐变，在创建画布时已经有了使用所需数值初始化过的数组，这就是为什么我们只要循环中一行一行使用指定颜色画线就可以了，循环次数等于画布的高度。关于绘制边框，在方法的开始，先要声明和初始化画布每条边的坐标数组，在画完边框之后，角上要进行一个像素的圆滑，然后在画布内四个角上额外增加四个像素点。

这两个方法都只有一个参数 - alpha 通道，也就是说渐变色和边框的透明度可以在调用这些方法时指定。

```
//+------------------------------------------------------------------+
//| 垂直渐变                               |
//+------------------------------------------------------------------+
void CTooltip::VerticalGradient(const uchar alpha)
  {
//--- X 坐标
   int x1=0;
   int x2=m_x_size;
//--- 画出渐变
   for(int y=0; y<m_y_size; y++)
      m_canvas.Line(x1,y,x2,y,::ColorToARGB(m_array_color[y],alpha));
  }
//+------------------------------------------------------------------+
//| 边框                                 |
//+------------------------------------------------------------------+
void CTooltip::Border(const uchar alpha)
  {
//--- 边框颜色
   color clr=m_border_color;
//--- 边界
   int x_size =m_canvas.X_Size()-1;
   int y_size =m_canvas.Y_Size()-1;
//--- 坐标: 顶部/右侧/底部/左侧
   int x1[4]; x1[0]=0;      x1[1]=x_size; x1[2]=0;      x1[3]=0;
   int y1[4]; y1[0]=0;      y1[1]=0;      y1[2]=y_size; y1[3]=0;
   int x2[4]; x2[0]=x_size; x2[1]=x_size; x2[2]=x_size; x2[3]=0;
   int y2[4]; y2[0]=0;      y2[1]=y_size; y2[2]=y_size; y2[3]=y_size;
//--- 根据指定坐标画边框
   for(int i=0; i<4; i++)
      m_canvas.Line(x1[i],y1[i],x2[i],y2[i],::ColorToARGB(clr,alpha));
//--- 使用一个像素点圆滑边角
   clr=clrBlack;
   m_canvas.PixelSet(0,0,::ColorToARGB(clr,0));
   m_canvas.PixelSet(0,m_y_size-1,::ColorToARGB(clr,0));
   m_canvas.PixelSet(m_x_size-1,0,::ColorToARGB(clr,0));
   m_canvas.PixelSet(m_x_size-1,m_y_size-1,::ColorToARGB(clr,0));
//--- 在指定坐标点增加像素点
   clr=C'180,180,180';
   m_canvas.PixelSet(1,1,::ColorToARGB(clr,alpha));
   m_canvas.PixelSet(1,m_y_size-2,::ColorToARGB(clr,alpha));
   m_canvas.PixelSet(m_x_size-2,1,::ColorToARGB(clr,alpha));
   m_canvas.PixelSet(m_x_size-2,m_y_size-2,::ColorToARGB(clr,alpha));
  }
```

让我们实现当鼠标光标掠过元件时，立即出现工具提示，而当光标离开元件区域，工具提示渐渐消失的效果。

我们创建 **CTooltip::ShowTooltip** () 方法来显示工具提示。在这个方法的开始，会检查 **m\_alpha** 栏位(alpha通道)的值，如果alpha通道的值等于或者大于 **255**, 意思是程序已经完成，工具提示已经 **100** %可见，不需要再继续了。否则，下一步是设置工具提示标题的坐标和边缘，以及绘制渐变和边框。如果用户没有指定标题的文字，标题就不会画出，如果提供了标题文字，那么会设置字体参数并画出标题。

在那之后，会根据标题的显示来设置工具提示主体文字的坐标，然后，再设置主体文字参数。与标题文字的粗体字不同([FW\_BLACK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmbheatq%2Fveztqevfmnv)), 主体部分的字体比较纤细([FW\_THIN](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmbheatq%2Fveztqevfmnv))。之后，工具提示文字会在循环中从用户初始化过的数组中写入画布，在每次迭代中，每行的 **Y** 坐标会根据指定值做调整，在最后，画布会更新并显示修改，设置的工具提示完全可见。这个方法的代码显示如下。

```
//+------------------------------------------------------------------+
//| 显示工具提示                             |
//+------------------------------------------------------------------+
void CTooltip::ShowTooltip(void)
  {
//--- 如果工具提示100%可见，退出
   if(m_alpha>=255)
      return;
//--- 标题的坐标和边缘
   int  x        =5;
   int  y        =5;
   int  y_offset =15;
//--- 画出渐变
   VerticalGradient(255);
//--- 画出边框
   Border(255);
//--- 画出标题 (如果已指定)
   if(m_header!="")
     {
      //--- 设置字体参数
      m_canvas.FontSet(FONT,-80,FW_BLACK);
      //--- 画出标题文字
      m_canvas.TextOut(x,y,m_header,::ColorToARGB(m_header_color),TA_LEFT|TA_TOP);
     }
//--- 工具提示主体文字的坐标(考虑到标题存在与否)
   x=(m_header!="")? 15 : 5;
   y=(m_header!="")? 25 : 5;
//--- 设置字体参数
   m_canvas.FontSet(FONT,-80,FW_THIN);
//--- 画出工具提示的主体文字
   int lines_total=::ArraySize(m_tooltip_lines);
   for(int i=0; i<lines_total; i++)
     {
      m_canvas.TextOut(x,y,m_tooltip_lines[i],::ColorToARGB(m_text_color),TA_LEFT|TA_TOP);
      y=y+y_offset;
     }
//--- 更新画布
   m_canvas.Update();
//--- 指出工具提示完全可见
   m_alpha=255;
  }
```

让我们写一个方法来显示工具提示的逐渐淡出功能并把它命名为 **CTooltip::FadeOutTooltip** ()。在方法的开始，进行相反的alpha通道值的检查，它的意思是，如果已经完全透明，就没有必要继续了，如果不是这样，就在循环中使用指定步长淡出方式重绘画布，直到完全透明。以下部分是完整版代码。

```
//+------------------------------------------------------------------+
//| 工具提示的逐渐淡出                             |
//+------------------------------------------------------------------+
void CTooltip::FadeOutTooltip(void)
  {
//--- 如果工具提示已经100%隐藏
   if(m_alpha<1)
      return;
//--- 标题的边缘
   int y_offset=15;
//--- 透明度步长
   uchar fadeout_step=7;
//--- 工具提示的逐渐淡出
   for(uchar a=m_alpha; a>=0; a-=fadeout_step)
     {
      //--- 如果下一步就变成负值，停止循环
      if(a-fadeout_step<0)
        {
         a=0;
         m_canvas.Erase(::ColorToARGB(clrNONE,0));
         m_canvas.Update();
         m_alpha=0;
         break;
        }
      //--- 标题坐标
      int x =5;
      int y =5;
      //--- 画出渐变和边框
      VerticalGradient(a);
      Border(a);
      //--- 画出标题 (如果指定)
      if(m_header!="")
        {
         //--- 设置字体参数
         m_canvas.FontSet(FONT,-80,FW_BLACK);
         //--- 画出标题文字
         m_canvas.TextOut(x,y,m_header,::ColorToARGB(m_header_color,a),TA_LEFT|TA_TOP);
        }
      //--- 工具提示中主体文字的坐标 (考虑到标题存在与否)
      x=(m_header!="")? 15 : 5;
      y=(m_header!="")? 25 : 5;
      //--- 设置字体参数
      m_canvas.FontSet(FONT,-80,FW_THIN);
      //--- 画出工具提示主体文字
      int lines_total=::ArraySize(m_tooltip_lines);
      for(int i=0; i<lines_total; i++)
        {
         m_canvas.TextOut(x,y,m_tooltip_lines[i],::ColorToARGB(m_text_color,a),TA_LEFT|TA_TOP);
         y=y+y_offset;
        }
      //--- 更新画布
      m_canvas.Update();
     }
  }
```

现在，我们已经有了创建和绘制工具提示的所有所需方法，它们将在元件的事件处理函数中调用。为了判断显示工具提示的按钮在表单上是否被按下，在 **CWindow** 类中创建 **\>CWindow::TooltipBmpState** ()方法。

```
class CWindow : public CElement
  {
public:
   //--- 检查工具提示显示模式
   bool              TooltipBmpState(void)                             const { return(m_button_tooltip.State());   }
  };
```

现在，如果元件上有焦点，并且启用了工具提示显示模式，工具提示就会显示出来，如果鼠标光标位于元件区域之外或者表单被屏蔽，那么工具提示就会隐藏。

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                                              |
//+------------------------------------------------------------------+
void CTooltip::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 如果表单上的工具提示按钮被禁用，就退出
      if(!m_wnd.TooltipBmpState())
         return;
      //--- 如果表单被屏蔽
      if(m_wnd.IsLocked())
        {
         //--- 隐藏工具提示
         FadeOutTooltip();
         return;
        }
      //--- 如果元件上有焦点
      if(m_element.MouseFocus())
         //--- 显示工具提示
         ShowTooltip();
      //--- 如果没有焦点
      else
      //--- 隐藏工具提示
         FadeOutTooltip();
      //---
      return;
     }
  }
```

### 工具提示测试

现在，我们可以测试了，看它工作得如何。在测试EA的表单上，现在有5个按钮，让我们为每个按钮都创建一个工具提示。声明5个 **CTooltip** 类型的实例和5个方法，我们将展示其中一个实现来作为例子。

```
class CProgram : public CWndEvents
  {
private:
   CTooltip          m_tooltip1;
   CTooltip          m_tooltip2;
   CTooltip          m_tooltip3;
   CTooltip          m_tooltip4;
   CTooltip          m_tooltip5;
   //---
private:
   bool              CreateTooltip1(void);
   bool              CreateTooltip2(void);
   bool              CreateTooltip3(void);
   bool              CreateTooltip4(void);
   bool              CreateTooltip5(void);
  };
//+------------------------------------------------------------------+
//| 创建工具提示 5                                  |
//+------------------------------------------------------------------+
bool CProgram::CreateTooltip5(void)
  {
#define TOOLTIP5_LINES_TOTAL 3
//--- 保存窗口指针
   m_tooltip5.WindowPointer(m_window1);
//--- 保存元件指针
   m_tooltip5.ElementPointer(m_icon_button5);
//--- 工具提示文字的数组
   string text[]=
     {
      "Control \"Icon button\" (5).",
      "This is the second line of the tooltip.",
      "This is the third line of the tooltip."
     };
//--- 在创建之前设置属性
   m_tooltip5.Header("Icon Button 5");
   m_tooltip5.XSize(250);
   m_tooltip5.YSize(80);
//--- Добавим текст построчно
   for(int i=0; i<TOOLTIP5_LINES_TOTAL; i++)
      m_tooltip5.AddString(text[i]);
//--- 创建控件
   if(!m_tooltip5.CreateTooltip(m_chart_id,m_subwin))
      return(false);
//--- 把对象加到通用对象数组中
   CWndContainer::AddToElementsArray(0,m_tooltip5);
   return(true);
  }
```

工具提示的创建必须在创建图形界面方法的最后进行，这样它们就在库中元件数组的最后，通过这种方式，工具提示就一直在图表的其他对象上方。

```
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 为控件创建表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
//--- 图标按钮

//--- 工具提示
   if(!CreateTooltip1())
      return(false);
   if(!CreateTooltip2())
      return(false);
   if(!CreateTooltip3())
      return(false);
   if(!CreateTooltip4())
      return(false);
   if(!CreateTooltip5())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

为了在图表上显示工具提示按钮，在创建时使用 **CWindow::UseTooltipsButton** ()方法。

```
//+------------------------------------------------------------------+
//| 创建控件表单1                                |
//+------------------------------------------------------------------+
bool CProgram::CreateWindow1(const string caption_text)
  {
//--- 在窗口数组中加入窗口指针
   CWndContainer::AddWindow(m_window1);
//--- 坐标
   int x=1;
   int y=20;
//--- 属性
   m_window1.Movable(true);
   m_window1.XSize(251);
   m_window1.YSize(200);
   m_window1.UseTooltipsButton();
   m_window1.CaptionBgColor(clrCornflowerBlue);
   m_window1.CaptionBgColorHover(C'150,190,240');
//--- 创建表单
   if(!m_window1.CreateWindow(m_chart_id,m_subwin,caption_text,x,y))
      return(false);
//---
   return(true);
  }
```

您应该看到如以下屏幕截图所示的结果：

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-06_n_%5D1%5Del.rne)
![[Pasted image 20260628213453.png]]
图 4. 工具提示的测试。

它看起来工作得很好！现在，这个元件需要在库中有一个私有的数组，当我们在多窗口模式下开发时，会说明什么时候我们会需要这样的数组。

### 工具提示的私有数组

所以，转到 **CWndContainer** 类，为它增加新成员，在 **WindowElements** 结构中增加了一个为工具提示使用的私有数组，我们还将创建 (1) **CWndContainer::TooltipsTotal** ()方法以获得工具提示的数量，以及(2) **CWndContainer::AddTooltipElements** ()方法，用来向私有数组中增加工具提示指针。

```
class CWndContainer
  {
protected:
   //--- 元件数组结构
   struct WindowElements
     {
      //--- 工具提示
      CTooltip         *m_tooltips[];
     };
   //--- 每个窗口的元件数组的数组
   WindowElements    m_wnd[];
   //---
public:
   //--- 工具提示的数量
   int               TooltipsTotal(const int window_index);
   //---
private:
   //--- 保存库中元件的工具提示指针
   bool              AddTooltipElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 根据指定窗口索引返回工具提示数量                                |
//+------------------------------------------------------------------+
int CWndContainer::TooltipsTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_tooltips));
  }
//+------------------------------------------------------------------+
//| 在私有数组中保存工具提示的指针                             |
//+------------------------------------------------------------------+
bool CWndContainer::AddTooltipElements(const int window_index,CElement &object)
  {
//--- 如果不是工具提示，退出
   if(object.ClassName()!="CTooltip")
      return(false);
//--- 取得工具提示指针
   CTooltip *t=::GetPointer(object);
//--- 把指针加到私有数组中
   AddToRefArray(t,m_wnd[window_index].m_tooltips);
   return(true);
  }
```

**CWndContainer::AddTooltipElements** ()方法是在 **CWndContainer::AddToElementsArray** ()公有方法中调用的, 它将在自定义类项库中增加元件时调用。它的精简版代码显示如下。

```
//+------------------------------------------------------------------+
//| 把指针加到元件数组中                         |
//+------------------------------------------------------------------+
void CWndContainer::AddToElementsArray(const int window_index,CElement &object)
  {
//--- 如果库中没有包含控件表单
//--- 如果需求是为了不存在的表单
//--- 添加到通用元件数组中
//--- 把元件对象加到通用对象数组中
//--- 保存所有表单中最后一个元件的id
//--- 元件id计数器加1

//--- 在库中保存上下文菜单对象的指针
//--- 在库中保存主菜单对象的指针
//--- 在库中保存分割按钮对象的指针 

//--- 在库中保存工具提示对象的指针
   if(AddTooltipElements(window_index,object))
      return;
  }
```

创建工具提示类的开发现在完成了，它的完整版可以在本文附件的文件中下载。

### 结论

在本文中，我们探讨了状态栏和工具提示信息界面元件的开发，在下一章中，我们将实现创建多窗口图形界面，并且讨论鼠标左键点击优先级管理系统。

您可以在本系列的第一部分的附属文件中下载资料，这样您就可以测试看它如何工作。如果您对如何使用资料中的文件有问题，您可以参考列表文章中对库开发的详细描述，并且在对应文章的留言部分问问题。

**第四部分文章列表(章节):**

- [图形界面 IV: 信息界面元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327!pcrv_21)
- 图形界面 IV: 多窗口模式与优先级系统 (第二章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2307](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0327)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2105.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2105%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (170.75 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2105%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (170.73 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[图形界面 IV: 多窗口模式与优先级系统 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328)

在本章中，我们将扩展库的实现，为MQL应用程序创建多窗口界面。我们还将开发一个优先级系统，用于管理鼠标左键对图形对象的点击，它是用于避免元件对用户操作没有回应的问题的。

[图形界面III：简单与多功能按钮组(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8)

本系列的第一章是关于简单和多功能按钮的，第二篇文章将致力于相互关联的按钮组，这样在应用程序中就可以创建元件，让用户从一个集合(组)中选择一个选项。

[MQL5酷客宝典 - 滑动通道编程](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3842)

本文提出了一种用于等距通道系统的编程方法，在此将会探讨构建这种通道的细节，并且提供了通道的分类，提出了一个统一的滑动通道方法。在代码的实现中使用了面向对象的编程(OOP)。

[通用智能交易系统：事件模型和交易策略原型(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0149)

本文是通用智能交易模型系列文章的又一篇。这一部分详细介绍了基于数据集中处理的原始事件模型，并考虑了交易引擎CStrategy基类的结构。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fi9u0fk2m%7Bftbl963x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dtpafe%2Cmgtctpafep5%2Ccmm'2D%26c%3Dea%7Blajzatodaibmswthtsapqmxjiumqe%24s%3F7a3ab7d266b%3Aag7c02f23g57d40%3A3ab27c8f0653171cc367270%3B7514c3b6a%3A54%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0327%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>