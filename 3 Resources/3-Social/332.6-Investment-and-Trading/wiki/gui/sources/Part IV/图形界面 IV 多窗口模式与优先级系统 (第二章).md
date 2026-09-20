---
title: "图形界面 IV: 多窗口模式与优先级系统 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-25T11:07:32+00:00Z
created: 2026-06-28
description: "在本章中，我们将扩展库的实现，为MQL应用程序创建多窗口界面。我们还将开发一个优先级系统，用于管理鼠标左键对图形对象的点击，它是用于避免元件对用户操作没有回应的问题的。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_22)
- [多窗口模式](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_23)
- [测试多窗口模式](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_24)
- [鼠标左键优先级系统的增强](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_25)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_26)

### 简介

第一篇文章 [图形界面I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 解释了库的详细目的. 您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在前面的章节中，我们讨论了状态栏和工具提示等图形界面信息元件，在本章中，我们将扩展库的实现，为MQL应用程序创建多窗口界面。另外，我们还将开发鼠标左键点击图形对象的优先级系统，因为没有它的话，控件无法回应用户的操作。

### 多窗口模式

让我们在正在开发的界面库中讨论多窗口模式，直到现在， **ENUM\_WINDOW\_TYPE** 枚举提供了两个标识符，分别代表主窗口(**W\_MAIN**)和对话框(**W\_DIALOG**)窗口。只是使用了单窗口模式。在我们增加功能之后，启用多窗口模式将会在库中创建和增加多个控件表单。

在事件处理的主类， **CWndEvents** 中创建一个栏位用于保存当前活动的窗口索引。

```
class CWndEvents : public CWndContainer
  {
protected:
   //--- 活动窗口的索引
   int               m_active_window_index;
  };
```

让我们看如何识别活动窗口的索引，例如，用户按下了某些按钮能够打开对话框窗口(**W\_DIALOG**)，当按钮被按下时，会生成 **ON\_CLICK\_BUTTON** 自定义事件，这个事件可以在自定义类的 **CProgram::OnEvent** ()事件处理函数中跟踪到，我们还将使用表单的 **CWindow::Show** ()方法来显示窗口，库的当前实现是不够的，我们将引入所需的加强。

**CWindow::Show** ()方法必须发送一条自定义消息，指出一个窗口已经打开，图形界面系统的参数值必须更新。这样的事件需要独立的标识符，让我们称它为 **ON\_OPEN\_DIALOG\_BOX** ， 并把它放到其他库标识符所在的 **Defines.mqh** 文件中。

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_OPEN_DIALOG_BOX        (11) // 打开对话框窗口的事件
```

在 **CWindow::Show** ()方法的最后加上一行如下的代码，这是该方法的精简版本，为了更清晰地区分事件初始者，除了事件ID之外，还需要发送元件的ID和程序的名称。

```
//+------------------------------------------------------------------+
//| 显示窗口                                                 |
//+------------------------------------------------------------------+
void CWindow::Show(void)
  {
//--- 使得所有对象可见
//--- 可见状态
//--- 焦点清零
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_OPEN_DIALOG_BOX,(long)CElement::Id(),0,m_program_name);
  }
```

此事件将在 **CWndEvents** 类中处理。在实现处理的方法之前，我们需要在 **CWindow** 类中另外创建三个方法，其中两个方法用于保存和获取对话框窗口将要打开的表单的索引，而另外一个用于管理表单的状态。

必须保存之前活动的窗口索引，因为几个窗口可能同时打开，这就是为什么当关闭对话框窗口时，很重要的一点是要知道哪个窗口要回到活动状态。

```
class CWindow : public CElement
  {
private:
   //--- 之前活动窗口的索引
   int               m_prev_active_window_index;
   //---
public:
   //--- (1) 保存 和 (2) 获取 之前活动窗口的索引
   void              PrevActiveWindowIndex(const int index)                  { m_prev_active_window_index=index;   }
   int               PrevActiveWindowIndex(void)                       const { return(m_prev_active_window_index); }
  };
```

对于表单状态的管理，非活动表单将有不同的标题颜色，用户可以对之修改，当鼠标光标掠过时，元件的颜色不会改变，因为表单将被屏蔽。另外，在表单失去活动状态时，会生成自定义事件，这将会发出通知，表单被屏蔽并且它的元件的焦点和颜色必须清零。当表单被屏蔽时，就不会跟踪元件的焦点。在打开对话框窗口的时候，弹出窗口的元件的颜色将保持鼠标光标掠过它时的颜色。

在 **Defines.mqh** 文件中创建 **ON\_RESET\_WINDOW\_COLORS** 标识符用于这样的事件:

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_RESET_WINDOW_COLORS    (13) // 清空表单上所有元件的颜色
```

用于管理表单状态的方法代码如下所示。

```
class CWindow : public CElement
  {
public:
   //--- 设置窗口的状态
   void              State(const bool flag);
  };
//+------------------------------------------------------------------+
//| 设置窗口的状态                            |
//+------------------------------------------------------------------+
void CWindow::State(const bool flag)
  {
//--- 如果窗口被屏蔽
   if(!flag)
     {
      //--- 设置状态
      m_is_locked=true;
      //--- 设置标题颜色
      m_caption_bg.BackColor(m_caption_bg_color_off);
      //--- 清除颜色的信号还将在其他元件上进行重置。
      ::EventChartCustom(m_chart_id,ON_RESET_WINDOW_COLORS,(long)CElement::Id(),0,"");
     }
//--- 如果窗口要被屏蔽
   else
     {
      //--- 设置状态
      m_is_locked=false;
      //--- 设置标题颜色
      m_caption_bg.BackColor(m_caption_bg_color);
      //--- 焦点清零
      CElement::MouseFocus(false);
     }
  }
```

让我们回到 **ON\_OPEN\_DIALOG\_BOX** 事件的处理上来，在处理图形界面事件的主类(**CWndEvents**)中创建 **CWndEvents::OnOpenDialogBox** ()方法, 它将在处理所有自定义事件的通用方法 **CWndEvents::ChartEventCustom** ()中调用。

**CWndEvents::OnOpenDialogBox** ()方法开始会有两个检查: 一个检查事件ID，另一个检查程序名称。如果检查都通过了，就在所有窗口中迭代找出是哪个窗口生成了该事件。这条消息中含有元件的ID(**lparam**)，将用于实现此功能。与该ID不匹配的表单将和所有附加在上面的元件一起被屏蔽，所有对象的优先级都将在 **ResetZorders** ()方法的帮助下清零，而不会对鼠标左键点击事件产生回应。对于ID匹配的窗口，会把当前活动的窗口索引保存为之前活动窗口的索引，激活此表单并恢复其对象的鼠标左键点击优先级。再把这个窗口的索引设为当前活动的，然后，使表单上的所有元件可见并恢复它们的鼠标左键点击优先级，要忽略掉已经可见的对象和下拉的元件。

如果当工具提示可见时打开了对话框，那么工具提示必须要隐藏。 它将不会自己消失，因为它所附加的表单已经被屏蔽了。早些时候创建的工具提示私有数组就是为了应对这种情况的。对任何库中元件方法的访问都可以在事件处理的主类 **CWndEvents** 中接收到。

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 打开对话框窗口
   bool              OnOpenDialogBox(void);
  };
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM 事件                        |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- 如果信号是最小化表单
//--- 如果信号是最大化表单
//--- 如果信号是需要隐藏菜单项下的上下文菜单
//--- 如果信号是隐藏所有上下文菜单

//--- 如果信号是打开对话框窗口
   if(OnOpenDialogBox())
      return;
  }
//+------------------------------------------------------------------+
//| ON_OPEN_DIALOG_BOX 事件                       |
//+------------------------------------------------------------------+
bool CWndEvents::OnOpenDialogBox(void)
  {
//--- 如果信号是打开对话框窗口
   if(m_id!=CHARTEVENT_CUSTOM+ON_OPEN_DIALOG_BOX)
      return(false);
//--- 如果消息是来自其他程序
   if(m_sparam!=m_program_name)
      return(true);
//--- 在窗口数组中迭代
   int window_total=CWndContainer::WindowsTotal();
   for(int w=0; w<window_total; w++)
     {
      //--- 如果id匹配
      if(m_windows[w].Id()==m_lparam)
        {
         //--- 在弹出表单的表单中保存表单索引
         m_windows[w].PrevActiveWindowIndex(m_active_window_index);
         //--- 激活表单
         m_windows[w].State(true);
         //--- 恢复表单对象的鼠标左键点击优先级
         m_windows[w].SetZorders();
         //--- 保存活动窗口的索引
         m_active_window_index=w;
         //--- 使活动窗口中的所有元件可见
         int elements_total=CWndContainer::ElementsTotal(w);
         for(int e=0; e<elements_total; e++)
           {
            //--- 跳过表单和下拉元件
            if(m_wnd[w].m_elements[e].ClassName()=="CWindow" || 
               m_wnd[w].m_elements[e].IsDropdown())
               continue;
            //--- 使元件可见
            m_wnd[w].m_elements[e].Show();
            //--- 恢复鼠标左键点击元件的优先级
            m_wnd[w].m_elements[e].SetZorders();
           }
         //--- 隐藏工具提示
         int tooltips_total=CWndContainer::TooltipsTotal(m_windows[w].PrevActiveWindowIndex());
         for(int t=0; t<tooltips_total; t++)
            m_wnd[m_windows[w].PrevActiveWindowIndex()].m_tooltips[t].FadeOutTooltip();
        }
      //--- 其他表单将被屏蔽，直到活动窗口被关闭
      else
        {
         //--- 屏蔽表单
         m_windows[w].State(false);
         //--- 表单元件鼠标左键点击优先级清零
         int elements_total=CWndContainer::ElementsTotal(w);
         for(int e=0; e<elements_total; e++)
            m_wnd[w].m_elements[e].ResetZorders();
        }
     }
//---
   return(true);
  }
```

现在，我们将处理之前文章中创建的 **ON\_RESET\_WINDOW\_COLORS** 标识符。在写下处理此事件的方法之前，必须在所有元件的基类 **CElement** 类中再加入一个标准虚方法来清除颜色，称它为 **CElement::ResetColors** ():

```
class CElement
  {
public:
   //--- 元件颜色清除
   virtual void      ResetColors(void) {}
  };
```

**ResetColors** () 方法对于每种元件是有不同特点的，必须在所有的派生类中创建。以下代码显示了图标按钮元件(**CIconButton**)的实例。所有其他元件的 **ResetColors** ()方法可以在文章附件的文件中找到。

```
class CIconButton : public CElement
  {
public:
   //--- 元件颜色清除
   void              ResetColors(void);
  };
//+------------------------------------------------------------------+
//| 清空颜色                               |
//+------------------------------------------------------------------+
void CIconButton::ResetColors(void)
  {
//--- 如果这是一个两种状态模式的按钮并且已经按下，就退出
   if(m_two_state && m_button_state)
      return;
//--- 清除颜色
   m_button.BackColor(m_back_color);
//--- 清除焦点
   m_button.MouseFocus(false);
   CElement::MouseFocus(false);
  }
```

就这样，所有元件基类中的一个虚方法就在它的派生类中有了它自己的版本，使得在事件处理的主类(**CWndEvents**)中，可以在一个循环内把所有元件颜色清空。

写下 **CWndEvents::OnResetWindowColors** ()方法用于处理the **ON\_RESET\_WINDOW\_COLORS** 事件，这非常简单。根据在消息中受到的元件ID找到刚刚失去活动状态的表单，如果找到了，就保存它的索引，如果保存了索引，就清空这个表单上所有元件的颜色。从以下代码中可以找到这个方法的细节。

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 清除表单和它的元件的颜色
   bool              OnResetWindowColors(void);
  };
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM 事件                        |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- 如果信号是最小化表单
//--- 如果信号是最大化表单
//--- 如果信号是需要隐藏菜单项下的上下文菜单
//--- 如果信号是隐藏所有上下文菜单
//--- 如果信号是打开对话框窗口
//--- 如果信号是清除指定表单上所有元件的颜色
   if(OnResetWindowColors())
      return;
  }
//+------------------------------------------------------------------+
//| ON_RESET_WINDOW_COLORS 事件                     |
//+------------------------------------------------------------------+
bool CWndEvents::OnResetWindowColors(void)
  {
//--- 如果信号是清除窗口颜色
   if(m_id!=CHARTEVENT_CUSTOM+ON_RESET_WINDOW_COLORS)
      return(false);
//--- 从收到的消息中识别表单的索引
   int index=WRONG_VALUE;
//--- 在窗口数组中迭代
   int window_total=CWndContainer::WindowsTotal();
   for(int w=0; w<window_total; w++)
     {
      //--- 如果id匹配
      if(m_windows[w].Id()==m_lparam)
        {
         //--- 保存索引
         index=w;
         //--- 清除表单颜色
         m_windows[w].ResetColors();
         break;
        }
     }
//--- 如果没有识别出索引，退出
   if(index==WRONG_VALUE)
      return(true);
//--- 清除所有表单元件的颜色
   int elements_total=CWndContainer::ElementsTotal(index);
   for(int e=0; e<elements_total; e++)
      m_wnd[index].m_elements[e].ResetColors();
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

我们已经解决了打开窗口的问题，现在，我们必须事先关闭并恢复之前活动窗口的方法。为了处理此事件，我们必须在 **Defines.mqh** 文件中创建 **ON\_CLOSE\_DIALOG\_BOX** 标识符。

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_CLOSE_DIALOG_BOX       (12) // 关闭对话框窗口事件
```

在 **CWindow** 类中我们使用 **CWindow::CloseWindow** ()方法来一起关闭表单和程序，在那时，还没有实现对话框窗口(**W\_DIALOG**)的关闭。让我们多写一个方法来生成关闭对话框窗口的事件。除了(1) 事件ID, 该消息还包含(2)元件ID, (3)之前活动窗口的索引， 以及(4)标题的文字。让我们把这个方法称为 **CWindow::CloseDialogBox** ()。晚些时候，我们将在复杂控件中使用它，有时窗口关闭是由关闭按钮之外的元件引起的。

```
class CWindow : public CElement
  {
public:
   //--- 关闭对话框窗口
   void              CloseDialogBox(void);
  };
//+------------------------------------------------------------------+
//| 关闭对话框窗口                              |
//+------------------------------------------------------------------+
void CWindow::CloseDialogBox(void)
  {
//--- 可见状态
   CElement::IsVisible(false);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLOSE_DIALOG_BOX,CElement::Id(),m_prev_active_window_index,m_caption_text);
  }
```

在 **CWindow** 类中, **CWindow::CloseDialogBox** () 方法会在 **CWindow::CloseWindow** ()方法中调用，以下显示了精简版的代码，完整版代码可以在本文附件的文件中找到。

```
//+------------------------------------------------------------------+
//| 关闭对话框或者程序                         |
//+------------------------------------------------------------------+
bool CWindow::CloseWindow(const string pressed_object)
  {
//--- 如果不是按下关闭窗口按钮
   if(pressed_object!=m_button_close.Name())
      return(false);
//--- 如果是主窗口
   if(m_window_type==W_MAIN)
     {
      //--- ...
     }
//--- 如果这是一个对话框窗口
   else if(m_window_type==W_DIALOG)
     {
      //--- 关闭它
      CloseDialogBox();
     }
//---
   return(false);
  }
```

在发送了ID为 **ON\_CLOSE\_DIALOG\_BOX** 的消息之后, 必须在 **CWndEvents** 类的处理函数中对其跟踪处理，为此，让我们写下 **CWndEvents::OnCloseDialogBox** ()方法。在库中所有的窗口中迭代，寻找ID符合此消息ID的状况。如果找到了这样的窗口，它必须被去除活动状态。然后，把它和其上所有元件隐藏，并且根据传来消息的索引激活表单。在那之后，保存当前活动窗口的索引并恢复其元件鼠标左键点击的优先级。

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 关闭对话框窗口
   bool              OnCloseDialogBox(void);
  };
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM 事件                        |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- 如果信号是最小化表单
//--- 如果信号是最大化表单
//--- 如果信号是需要隐藏菜单项下的上下文菜单
//--- 如果信号是隐藏所有上下文菜单
//--- 如果信号是打开对话框窗口
//--- 如果信号是关闭一个对话框窗口
   if(OnCloseDialogBox())
      return;
//--- 如果信号是清除指定表单上所有元件的颜色
  }
//+------------------------------------------------------------------+
//| ON_CLOSE_DIALOG_BOX 事件                     |
//+------------------------------------------------------------------+
bool CWndEvents::OnCloseDialogBox(void)
  {
//--- 如果信号是关闭一个对话框窗口
   if(m_id!=CHARTEVENT_CUSTOM+ON_CLOSE_DIALOG_BOX)
      return(false);
//--- 在窗口数组中迭代
   int window_total=CWndContainer::WindowsTotal();
   for(int w=0; w<window_total; w++)
     {
      //--- 如果id匹配
      if(m_windows[w].Id()==m_lparam)
        {
         //--- 屏蔽表单
         m_windows[w].State(false);
         //--- 隐藏表单
         int elements_total=CWndContainer::ElementsTotal(w);
         for(int e=0; e<elements_total; e++)
            m_wnd[w].m_elements[e].Hide();
         //--- 激活之前的表单
         m_windows[int(m_dparam)].State(true);
         //--- 重画图表
         m_chart.Redraw();
         break;
        }
     }
//--- 设置前面窗口的索引
   m_active_window_index=int(m_dparam);
//--- 恢复活动窗口的鼠标左键点击优先级
   int elements_total=CWndContainer::ElementsTotal(m_active_window_index);
   for(int e=0; e<elements_total; e++)
      m_wnd[m_active_window_index].m_elements[e].SetZorders();
//---
   return(true);
  }
```

现在测试多窗口模式所需已经齐备。

### 测试多窗口模式

在我们用于测试信息界面元件的EA中创建两个 **CWindow** 类的实例，结果将是在EA的图形界面上出现了三个表单。第一个表单将是主窗口(**W\_MAIN**)，其它的两个都是对话框角色 (**W\_DIALOG**)。在主表单的按钮上附加第一个对话框窗口，在第一个对话框窗口中创建三个按钮，第二个对话框窗口将有新创建的按钮。通过这种方式我们就有了同时打开的三个表单，而只有它们中的一个可以活动(可用)，

以下显示了需要在当前开发的自定义类 **CProgram** 中加入的代码。

```
class CProgram : public CWndEvents
  {
private:
   //--- 表单 2
   CWindow           m_window2;
   //--- 图标按钮
   CIconButton       m_icon_button6;
   CIconButton       m_icon_button7;
   CIconButton       m_icon_button8;

   //--- 表单 3
   CWindow           m_window3;
   //---
private:
   //--- 表单 2
   bool              CreateWindow2(const string text);
   //--- 图标按钮
#define ICONBUTTON6_GAP_X        (7)
#define ICONBUTTON6_GAP_Y        (25)
   bool              CreateIconButton6(const string text);
#define ICONBUTTON7_GAP_X        (7)
#define ICONBUTTON7_GAP_Y        (50)
   bool              CreateIconButton7(const string text);
#define ICONBUTTON8_GAP_X        (7)
#define ICONBUTTON8_GAP_Y        (75)
   bool              CreateIconButton8(const string text);

   //--- 表单 3
   bool              CreateWindow3(const string text);
  };
```

在创建图形界面的主方法中调用这些方法，以下是这个方法的精简版。

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

//--- 创建表单2的控件
   if(!CreateWindow2("Icon Button 1"))
      return(false);
//--- 图标按钮
   if(!CreateIconButton6("Icon Button 6..."))
      return(false);
   if(!CreateIconButton7("Icon Button 7"))
      return(false);
   if(!CreateIconButton8("Icon Button 8"))
      return(false);

//--- 创建控件表单3
   if(!CreateWindow3("Icon Button 6"))
      return(false);

//--- 工具提示
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

我们将只讨论第一个对话框窗口(第二个表单)的方法，您也许记得，您需要使用 **CWndContainer::AddWindow** ()方法把表单加到库中，请注意在以下代码中表单坐标是如何定义的。因为当程序在图表上载入时，默认的坐标为零，您应当设置适合的坐标。在本例中，这些数值为 **x** =1, **y** =20。在那之后，表单可以移动，而图表的时段或者交易品种可能切换。以下代码显示了表单将停留在上次它所在的地方。如果您希望表单位于它第一次在程序载入到图表时的位置，就把这些条件删除。在这个例子中，程序中这三个图形界面的表单都将有相同的条件，

让我们处理使得对话框可以在图表上移动，窗口类型应当被设为对话框(**W\_DIALOG**), 否则，您将会遇到图形界面工作不正确的状况。窗口图标可以使用 **CWindow::IconFile** ()方法来重新定义。对于对话框窗口，可以使用弹出它的窗口的图标。

```
//+------------------------------------------------------------------+
//| 创建控件表单2                                |
//+------------------------------------------------------------------+
bool CProgram::CreateWindow2(const string caption_text)
  {
//--- 在窗口数组中加入窗口指针
   CWndContainer::AddWindow(m_window2);
//--- 坐标
   int x=(m_window2.X()>0) ? m_window2.X() : 1;
   int y=(m_window2.Y()>0) ? m_window2.Y() : 20;
//--- 属性
   m_window2.Movable(true);
   m_window2.WindowType(W_DIALOG);
   m_window2.XSize(160);
   m_window2.YSize(160);
   m_window2.IconFile("Images\\EasyAndFastGUI\\Icons\\bmp16\\coins.bmp");
   m_window2.CaptionBgColor(clrCornflowerBlue);
   m_window2.CaptionBgColorHover(C'150,190,240');
//--- 创建表单
   if(!m_window2.CreateWindow(m_chart_id,m_subwin,caption_text,x,y))
      return(false);
//---
   return(true);
  }
```

让我提醒您一些如何把控件附加到某个对话框窗口的详细方法，作为例子，让我们考虑一个为表单设计的按钮方法，我只想强调两件事，

您需要记住的是:

- 元件必须传来将要附加的表单的指针。
- 当元件指针保存在库中时，指定元件需要附加的表单的索引。在本例中是索引1。

```
//+------------------------------------------------------------------+
//| 创建图表按钮 6                                            |
//+------------------------------------------------------------------+
bool CProgram::CreateIconButton6(const string button_text)
  {
//--- 保存窗口指针
   m_icon_button6.WindowPointer(m_window2);
//--- 坐标
   int x=m_window2.X()+ICONBUTTON6_GAP_X;
   int y=m_window2.Y()+ICONBUTTON6_GAP_Y;
//--- 在创建之前设置属性
   m_icon_button6.TwoState(false);
   m_icon_button6.ButtonXSize(146);
   m_icon_button6.ButtonYSize(22);
   m_icon_button6.LabelColor(clrBlack);
   m_icon_button6.LabelColorPressed(clrBlack);
   m_icon_button6.BorderColorOff(clrWhite);
   m_icon_button6.BackColor(clrLightGray);
   m_icon_button6.BackColorHover(C'193,218,255');
   m_icon_button6.BackColorPressed(C'153,178,215');
   m_icon_button6.IconFileOn("Images\\EasyAndFastGUI\\Icons\\bmp16\\script.bmp");
   m_icon_button6.IconFileOff("Images\\EasyAndFastGUI\\Icons\\bmp16\\script_colorless.bmp");
//--- 创建控件
   if(!m_icon_button6.CreateIconButton(m_chart_id,m_subwin,button_text,x,y))
      return(false);
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(1,m_icon_button6);
   return(true);
  }
```

应用程序的开发者有责任管理窗口的显示，自定义类 **CProgram** 的事件处理函数中，跟踪任何控件并显示相关窗口。把调用第一个对话框窗口指派给EA交易中主窗口上的按钮 (第二个表单),以及把第二个对话框窗口指派给第一个对话框窗口中的按钮。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按钮按下事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 如果文字匹配
      if(sparam==m_icon_button1.Text())
        {
         //--- 显示窗口 2
         m_window2.Show();
        }
      //--- 如果文字匹配
      if(sparam==m_icon_button6.Text())
        {
         //--- 显示窗口 3
         m_window3.Show();
        }
     }
  }
```

想要的结果如以下屏幕截图所示。请注意 « **Icon Button 1...**» 和 « **Icon Button 6...**»按钮后的省略号，这是一种常用方式，用于使用户知道按下此元件将打开对话框窗口。

![图 1. 测试多窗口模式。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-07_n.rne "图 1. 测试多窗口模式。")
![[Pasted image 20260628213706.png]]
图 1. 测试多窗口模式。

在有几个表单都打开的时候，如果您切换交易品种或者图表的时段，您将会遇到一个问题，对话框窗口将会消失，因为管理系统没有把它们传给主窗口，而表单不会回应用户的操作。解决这个问题的方案很简单，您也许记得，在自定义类取初始化的 **CProgram::OnDeinitEvent()** 方法中，会调用 **CWndEvents::Destroy** ()方法，应用程序的图形界面就是在这个方法中删除的。在删除图形界面的时候需要让主窗口进行管理，所以，需要在 **CWndEvents::Destroy** ()方法中增加一些代码:

- 把主窗口的索引设为活动状态，
- 激活主窗口并把其他窗口变成非活动状态。

以下是当前版本的 **CWndEvents::Destroy** () 方法的代码。

```
//+------------------------------------------------------------------+
//| 删除全部对象                                             |
//+------------------------------------------------------------------+
void CWndEvents::Destroy(void)
  {
//--- 设置主窗口的索引
   m_active_window_index=0;
//--- 取得窗口数量
   int window_total=CWndContainer::WindowsTotal();
//--- 在窗口数组中迭代
   for(int w=0; w<window_total; w++)
     {
      //--- 激活主窗口
      if(m_windows[w].WindowType()==W_MAIN)
         m_windows[w].State(true);
      //--- 屏蔽对话框窗口
      else
         m_windows[w].State(false);
     }
//--- 清空元件数组
   for(int w=0; w<window_total; w++)
     {
      int elements_total=CWndContainer::ElementsTotal(w);
      for(int e=0; e<elements_total; e++)
        {
         //--- 如果指针无效，转到后面执行
         if(::CheckPointer(m_wnd[w].m_elements[e])==POINTER_INVALID)
            continue;
         //--- 删除元件对象
         m_wnd[w].m_elements[e].Delete();
        }
      //--- 清空元件数组
      ::ArrayFree(m_wnd[w].m_objects);
      ::ArrayFree(m_wnd[w].m_elements);
      ::ArrayFree(m_wnd[w].m_context_menus);
     }
//--- 清空表单数组
   ::ArrayFree(m_wnd);
   ::ArrayFree(m_windows);
  }
```

第一个版本的多窗口模式已经实现了，一切看起来比最初想像得要简单一些。

### 鼠标左键优先级系统的增强

直到现在，鼠标在界面元件上使用左键点击优先级的管理一直是通过 **ON\_OPEN\_DIALOG\_BOX** 和 **ON\_CLOSE\_DIALOG\_BOX** 为标识符的事件的处理而进行的，这样做的原因是，当开发以后的下拉元件时，用户可以自己设置元件中每个对象的优先级数值。需要考虑的是其他元件的优先级有可能比它更低。然而，当创建复杂的组合控件时，这个系统变得糟糕而容易混淆。为了使事情更简单，让我们为这样的事件多创建两个标识符：

- **ON\_ZERO\_PRIORITIES** – 优先级清零
- **ON\_SET\_PRIORITIES** – 恢复优先级

把它们加到 **Defines.mqh** 文件中。

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_ZERO_PRIORITIES        (14) // 重置鼠标左键点击优先级
#define ON_SET_PRIORITIES         (15) // 恢复鼠标左键点击优先级
```

以这些标识符标识的事件必须在能够下拉或者拥有下拉元件的类中生成。在当前的开发阶段，在已有的界面中，上下文菜单就是这样的元件。所以，把代码加到 **CContextMenu** 类的 **Show** ()和 **Hide** ()方法中， 以下是精简版的代码。

```
//+------------------------------------------------------------------+
//| 显示上下文菜单                           |
//+------------------------------------------------------------------+
void CContextMenu::Show(void)
  {
//--- 如果元件已经可见, 退出
//--- 显示上下文菜单的对象
//--- 显示菜单项
//--- 给可见元件设置状态
//--- 上下文菜单的状态
//--- 在前一节点注册状态
//--- 屏蔽表单

//--- 发送鼠标左键优先级清零的信号
   ::EventChartCustom(m_chart_id,ON_ZERO_PRIORITIES,CElement::Id(),0.0,"");
  }
//+------------------------------------------------------------------+
//| 隐藏上下文菜单                                           |
//+------------------------------------------------------------------+
void CContextMenu::Hide(void)
  {
//--- 如果元件是隐藏的, 退出
//--- 隐藏上下文菜单的对象
//--- 隐藏菜单项
//--- 清除焦点
//--- 上下文菜单的状态
//--- 在前一节点注册状态

//--- 发送恢复鼠标左键点击优先级的信号
   ::EventChartCustom(m_chart_id,ON_SET_PRIORITIES,0,0.0,"");
  }
```

我们将会在处理所有消息的主类(**CWndEvents**)中接收到这些消息，为此，我们将为每个标识符写一个独立的处理函数，这些函数将在处理自定义事件的主方法， **CWndEvents::ChartEventCustom** ()中调用。

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 重置鼠标左键点击优先级
   bool              OnZeroPriorities(void);
   //--- 恢复鼠标左键点击优先级
   bool              OnSetPriorities(void);
  };
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM 事件                        |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- 如果信号是最小化表单
//--- 如果信号是最大化表单
//--- 如果信号是需要隐藏菜单项下的上下文菜单
//--- 如果信号是隐藏所有上下文菜单
//--- 如果信号是打开对话框窗口
//--- 如果信号是关闭一个对话框窗口
//--- 如果信号是清除指定表单上所有元件的颜色

//--- 如果信号是重设鼠标左键点击优先级
   if(OnZeroPriorities())
      return;
//--- 如果信号是恢复鼠标左键点击优先级
   if(OnSetPriorities())
      return;
  }
```

在 **CWndEvents::OnZeroPriorities** ()方法中, 在活动窗口的全部元件中做迭代，把除了在消息中包含的ID(**lparam** -参数)的元件，以及上下文菜单和菜单项之外的元件的优先级全部清零，我们把菜单项和上下文菜单排除在外的原因是，几个上下文菜单有可能同时打开(一个挨一个)。

```
//+------------------------------------------------------------------+
//| ON_ZERO_PRIORITIES 事件                       |
//+------------------------------------------------------------------+
bool CWndEvents::OnZeroPriorities(void)
  {
//--- 如果信号是把鼠标左键点击优先级清零
   if(m_id!=CHARTEVENT_CUSTOM+ON_ZERO_PRIORITIES)
      return(false);
//---
   int elements_total=CWndContainer::ElementsTotal(m_active_window_index);
   for(int e=0; e<elements_total; e++)
     {
      //--- 把除了传入id的元件之外的元件优先级清零
      if(m_lparam!=m_wnd[m_active_window_index].m_elements[e].Id())
        {
         //--- ... 以及除了上下文菜单
         if(m_wnd[m_active_window_index].m_elements[e].ClassName()=="CMenuItem" ||
            m_wnd[m_active_window_index].m_elements[e].ClassName()=="CContextMenu")
            continue;
         //---
         m_wnd[m_active_window_index].m_elements[e].ResetZorders();
        }
     }
//---
   return(true);
  }
```

如果收到的消息包含 **ON\_SET\_PRIORITIES** 事件标识符, 就恢复活动窗口中所有元件的鼠标左键点击优先级。

```
//+------------------------------------------------------------------+
//| ON_SET_PRIORITIES 事件                       |
//+------------------------------------------------------------------+
bool CWndEvents::OnSetPriorities(void)
  {
//--- 如果信号是恢复鼠标左键点击优先级
   if(m_id!=CHARTEVENT_CUSTOM+ON_SET_PRIORITIES)
      return(false);
//---
   int elements_total=CWndContainer::ElementsTotal(m_active_window_index);
   for(int e=0; e<elements_total; e++)
      m_wnd[m_active_window_index].m_elements[e].SetZorders();
//---
   return(true);
  }
```

### 结论

当前阶段的图形界面开发库看起来如以下结构图所示。

![图 2. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-04.rne "图 2. 当前开发阶段的库结构。")
![[Pasted image 20260628213737.png]]
图 2. 当前开发阶段的库结构。

这是图形界面开发系列第四部分的最后一篇文章，在这个部分的第一篇文章中，我们实现了状态栏和工具提示信息界面元件，在第二章中，我们讨论了多窗口模式和鼠标左键点击优先级系统。

您可以在系列文章的第一部分附带的文件中找到和下载所有资料，这样您就可以测试看它是如何工作的。如果您对如何使用资料中的文件有问题，您可以参考列表文章中对库开发的详细描述，并且在对应文章的留言部分问问题。

**第四部分的文章列表 (章节):**

- [图形界面 IV: 信息界面元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327)
- [图形界面 IV: 多窗口模式与优先级系统 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328!pcrv_21)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2308](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0328)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-210%3A.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-210%3A%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (170.53 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-210%3A%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (170.51 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[MQL5酷客宝典 - 滑动通道编程](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3842)

本文提出了一种用于等距通道系统的编程方法，在此将会探讨构建这种通道的细节，并且提供了通道的分类，提出了一个统一的滑动通道方法。在代码的实现中使用了面向对象的编程(OOP)。

[图形界面 IV: 信息界面元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327)

在当前开发阶段，用于创建图形界面的库包含了表单以及可以附加其中的几个控件。之前已经说过，未来的文章中将有一篇专门致力于多窗口模式，现在，我们已经万事具备，我们将在下面的章节中讨论它。在本章中，我们将开发用于创建状态栏和工具提示信息界面元件的类。

[在交易中以 MQL4 手段运用模糊逻辑](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0012)

本文举例说明在交易中以 MQL4 手段运用模糊逻辑。以及描述如何使用 MQL4 版本的 FuzzyNet 函数库开发指标和智能交易系统。

[图形界面III：简单与多功能按钮组(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8)

本系列的第一章是关于简单和多功能按钮的，第二篇文章将致力于相互关联的按钮组，这样在应用程序中就可以创建元件，让用户从一个集合(组)中选择一个选项。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fvq5a0k0nizq41754x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dfmrwm'2D469111%26c%3Djhspectkxqtcptpjpposzwsknojeftoj%24s%3F977%605g5g50e%3A5%601cd2c%605%3A6af%60d7500f8%604427970%3B3590ef06af07156ce1dd9%3A%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0328%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>