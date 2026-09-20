---
title: "图形界面III：简单与多功能按钮(第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-20T08:39:51+00:00Z
created: 2026-06-28
description: "让我们探讨按钮控件。我们将讨论几个用于创建简单按钮，扩展功能按钮(图标按钮和分割按钮)以及关联按钮(按钮组和单选按钮)的类的实例。另外，我们还将在已有的类中增加一些内容以扩展它们的功能。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6!pcrv_22)
- [开发用于创建简单按钮的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6!pcrv_23)
- [开发用于创建图标按钮的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6!pcrv_24)
- [开发用于创建分割按钮的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6!pcrv_25)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6!pcrv_26)

### 简介

在本系列的前面两个部分中，我们探讨了关于创建图形界面库结构的开发和管理对象的基本机制等许多方面的内容。

- [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I: 用于控件的表单 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I: 图形界面的动画 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- [图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109)

在本系列的第二部分中，我们详细探讨了创建控件并将其与库引擎相连接的实例，那个例子比较难，确实，主菜单和上下文菜单属于最复杂的控件。

- [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)
- [图形界面 II: 分隔线和上下文菜单元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222)
- [图形界面 II: 设置库的事件处理函数 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224)
- [图形界面 II: 主菜单元件 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227)

本文将比前面的文章简单得多，在此，我们将讨论按钮控件，

按钮是图形界面中用户可以互操作的最简单的控件。同时，还有多个实现选项。在本文中，我们将针对不同复杂度水平的按钮创建三个类。

- 简单按钮， **CSimpleButton** 类；
- 图标按钮， **CIconButton** 类；
- 分割按钮， **CSplitButton** 类。

另外，我们还将实现另外三个类用于创建相关联的按钮组。

- 简单按钮组， **CButtonsGroup** 类；
- 图标按钮组， **CIconButtonsGroup** 类；
- 单选按钮组， **CRadioButtons** 类。

我们还将在上下文菜单中增加一个模式，增强它的功能并增加一些内容。 **CWindow** 表单类将使用方法多接收一个栏位，使得可以定义到底是哪个控件在激活时封锁了表单，这将使表单只能被封锁它的控件来解锁。

我们不会讨论针对所有控件的方法，因为在前面的文章中我们已经完整学习过了。这样的方法只会在类的代码中以声明的形式显示。

### 开发用于创建简单按钮的类

让我们从简单按钮开始。在 **Objects.mqh** 文件中，我们已经准备了一个类用于创建 **CButton** 类型的基本对象。它的基类是 [CChartObjectButton](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheat%60uvtmn), 它可以用于创建 [OBJ\_BUTTON](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60uvtmn) 类型的图形对象。这个对象的属性已经表明它有两个状态 - 打开和关闭。它的图形形式根据是否显示对象边框也有两个选项，在两种模式下，按钮的颜色在按下时比没有按下时要稍微深一些。

该对象可以人工从主菜单上附加到图表中： **插入** -> **对象** -> **图形对象** -> **按钮** 。也可以人工从图形对象的设置窗口中修改参数：

![图 1. 按钮图形对象的设置窗口](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-03_gn%2Cplg "图 1. 按钮图形对象的设置窗口")
![[Pasted image 20260628212337.png]]
图 1. 按钮图形对象的设置窗口

那么，就在我们库中其他控件文件所在的 **Controls** 文件夹下创建 **SimpleButton.mqh** 文件，在这个文件中，创建 **CSimpleButton** 类以及针对所有控件的标准方法，在前面的文章中已经详细提到。

```
//+------------------------------------------------------------------+
//|                                                 SimpleButton.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 创建简单按钮的类                           |
//+------------------------------------------------------------------+
class CSimpleButton : public CElement
  {
private:
   //--- 指向附加元件表单的指针 
   CWindow          *m_wnd;
   //---
public:
                     CSimpleButton(void);
                    ~CSimpleButton(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)          { m_wnd=::GetPointer(object);     }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void);
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重置 鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
```

让我们在创建按钮之前定义哪些属性可以设置：

- 大小；
- 根据鼠标光标位置而显示不同状态的背景色；
- 不同状态的边框颜色；
- 文字颜色。

有时，会要求按钮在按下以后自动回到它的初始(没有按下)的状态，还有些时候，按钮被松开时还会处于按下的状态，而再次按下才变成抬起的状态。我们将依此实现，按钮可以根据用户的选择以两种模式工作。所以有必要使用 **IsPressed** ()方法来识别按钮当前是按下还是抬起的状态。

另外，如果程序开发人员需要，还需要可以封锁/解锁按钮，例如，如果使用按钮功能的条件没有达到，按钮就应该被封锁禁用，而当条件一旦满足，按钮就变成可用状态。我们将会在本文中讨论这样的实例。

让我们把用于创建按钮的方法加到类中，它们在本质上没有多少不同，我们已经讨论过了，您可以在本文附件中的文件里看到这些方法的代码。

```
class CSimpleButton : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CButton           m_button;
   //--- 按钮属性:
   //    (1) Text, (2) size
   string            m_button_text;
   int               m_button_x_size;
   int               m_button_y_size;
   //--- 背景颜色
   color             m_back_color;
   color             m_back_color_off;
   color             m_back_color_hover;
   color             m_back_color_pressed;
   color             m_back_color_array[];
   //--- 边框颜色
   color             m_border_color;
   color             m_border_color_off;
   //--- 文字颜色
   color             m_text_color;
   color             m_text_color_off;
   color             m_text_color_pressed;
   //--- 鼠标左键点击的优先级
   int               m_button_zorder;
   //--- 两种按钮状态的模式
   bool              m_two_state;
   //--- 可用/禁用
   bool              m_button_state;
   //---
public:
   //--- 用于创建简单按钮的方法
   bool              CreateSimpleButton(const long chart_id,const int subwin,const string button_text,const int x,const int y);
   //---
private:
   bool              CreateButton(void);
   //---
public:
   //--- (1) 设置按钮模式,
   //    (2) 按钮的一般状态 (可用/封锁禁用)
   void              TwoState(const bool flag)               { m_two_state=flag;               }
   bool              IsPressed(void)                   const { return(m_button.State());       }
   bool              ButtonState(void)                 const { return(m_button_state);         }
   void              ButtonState(const bool state);
   //--- 按钮大小
   void              ButtonXSize(const int x_size)           { m_button_x_size=x_size;         }
   void              ButtonYSize(const int y_size)           { m_button_y_size=y_size;         }
   //--- (1) 返回按钮文字, (2) 设置按钮文字的颜色
   string            Text(void)                        const { return(m_button.Description()); }
   void              TextColor(const color clr)              { m_text_color=clr;               }
   void              TextColorOff(const color clr)           { m_text_color_off=clr;           }
   void              TextColorPressed(const color clr)       { m_text_color_pressed=clr;       }
   //--- 设置按钮背景的颜色
   void              BackColor(const color clr)              { m_back_color=clr;               }
   void              BackColorOff(const color clr)           { m_back_color_off=clr;           }
   void              BackColorHover(const color clr)         { m_back_color_hover=clr;         }
   void              BackColorPressed(const color clr)       { m_back_color_pressed=clr;       }
   //--- 设置按钮边框的颜色
   void              BorderColor(const color clr)            { m_border_color=clr;             }
   void              BorderColorOff(const color clr)         { m_border_color_off=clr;         }
   //---
  };
//+------------------------------------------------------------------+
//| 修改按钮状态                              |
//+------------------------------------------------------------------+
void CSimpleButton::ButtonState(const bool state)
  {
   m_button_state=state;
   m_button.State(false);
   m_button.Color((state)? m_text_color : m_text_color_off);
   m_button.BackColor((state)? m_back_color : m_back_color_off);
   m_button.BorderColor((state)? m_border_color : m_border_color_off);
  }
```

下面我们将考虑当按钮被按下时的事件处理逻辑，在 **Defines.mqh** 文件中加上一个标识符 **ON\_CLICK\_BUTTON** ，用于生成自定义事件，它将在所有类中使用，专门用于创建按钮。

```
#define ON_CLICK_BUTTON           (8)  // 按下按钮
```

现在，创建 **CSimpleButton::OnClickButton** ()方法用于处理按钮按下的事件。在这个方法的开头需要做两项检查：一个是按下对象的名称，另一个是对象当前的状态。如果结果不符合，都要退出方法。如果检查通过，则继续根据按钮的状态进行处理。如果它自己变成抬起状态，就要恢复其初始状态以及对应的颜色。对于两种状态的模式，每种状态又有两组颜色。在方法的末尾，发送一条消息，其中包含 **ON\_CLICK\_BUTTON** 标识符, 元件标识符, 元件的索引和按钮的名称。

```
class CSimpleButton : public CElement
  {
private:
   //--- 处理按钮按下事件
   bool              OnClickButton(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 事件处理                               |
//+------------------------------------------------------------------+
void CSimpleButton::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标左键点击对象事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      if(OnClickButton(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 处理按钮按下事件                           |
//+------------------------------------------------------------------+
bool CSimpleButton::OnClickButton(const string clicked_object)
  {
//--- 检查对象名称
   if(m_button.Name()!=clicked_object)
      return(false);
//--- 如果按钮被封锁禁用
   if(!m_button_state)
     {
      m_button.State(false);
      return(false);
     }
//--- 如果按钮模式是单个状态
   if(!m_two_state)
     {
      m_button.State(false);
      m_button.Color(m_text_color);
      m_button.BackColor(m_back_color);
     }
//--- 如果按钮模式是两种状态
   else
     {
      //--- 如果按钮被按下
      if(m_button.State())
        {
         //--- 改变按钮颜色 
         m_button.State(true);
         m_button.Color(m_text_color_pressed);
         m_button.BackColor(m_back_color_pressed);
         CElement::InitColorArray(m_back_color_pressed,m_back_color_pressed,m_back_color_array);
        }
      //--- 如果按钮被松开
      else
        {
         //--- 改变按钮颜色 
         m_button.State(false);
         m_button.Color(m_text_color);
         m_button.BackColor(m_back_color);
         CElement::InitColorArray(m_back_color,m_back_color_hover,m_back_color_array);
        }
     }
//--- 发送事件
   ::EventChartCustom(m_chart_id,ON_CLICK_BUTTON,CElement::Id(),CElement::Index(),m_button.Description());
   return(true);
  }
```

我们已经可以测试按钮的设置了，可以把它附加到表单上并从应用程序自定义类的处理函数中接收消息。让我们复制前文中的测试EA,只留下主菜单以及附加其菜单项上的上下文菜单。包含 **CSimpleButton** 类的文件必须在 **WndContainer.mqh** 文件中包含，这样才能在自定义类中使用它。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "SimpleButton.mqh"
```

在那以后， **CSimpleButton** 类以及创建按钮的方法就能够在应用程序的自定义 **CProgram** 类中声明了。让我们创建三个按钮作为实例，它们中的两个在被按下以后会自己抬起，而第三个按钮有选项可以被固定，也就是将有两个状态(按下/抬起)。

```
class CProgram : public CWndEvents
  {
private:
   //--- 简单按钮
   CSimpleButton     m_simple_button1;
   CSimpleButton     m_simple_button2;
   CSimpleButton     m_simple_button3;
   //---
private:
#define BUTTON1_GAP_X            (7)
#define BUTTON1_GAP_Y            (50)
   bool              CreateSimpleButton1(const string text);
#define BUTTON2_GAP_X            (128)
#define BUTTON2_GAP_Y            (50)
   bool              CreateSimpleButton2(const string text);
#define BUTTON3_GAP_X            (7)
#define BUTTON3_GAP_Y            (75)
   bool              CreateSimpleButton3(const string text);
  };
```

我们将只讨论它们其中一个的代码，请注意，代码中高亮显示的部分就是启用按钮两种状态模式的代码。

```
//+------------------------------------------------------------------+
//| 创建简单按钮 3                             |
//+------------------------------------------------------------------+
bool CProgram::CreateSimpleButton3(string button_text)
  {
//--- 传入面板对象
   m_simple_button3.WindowPointer(m_window);
//--- 坐标
   int x=m_window.X()+BUTTON3_GAP_X;
   int y=m_window.Y()+BUTTON3_GAP_Y;
//--- 在创建之前设置属性
   m_simple_button3.TwoState(true);
   m_simple_button3.ButtonXSize(237);
   m_simple_button3.TextColor(clrBlack);
   m_simple_button3.TextColorPressed(clrBlack);
   m_simple_button3.BackColor(clrLightGray);
   m_simple_button3.BackColorHover(C'193,218,255');
   m_simple_button3.BackColorPressed(C'153,178,215');
//--- 创建一个按钮
   if(!m_simple_button3.CreateSimpleButton(m_chart_id,m_subwin,button_text,x,y))
      return(false);
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_simple_button3);
   return(true);
  }
```

所有创建图形界面元件的方法都在 **CProgram::CreateTradePanel** () 方法中调用:

```
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 简单按钮
   if(!CreateSimpleButton1("Simple Button 1"))
      return(false);
   if(!CreateSimpleButton2("Simple Button 2"))
      return(false);
   if(!CreateSimpleButton3("Simple Button 3"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

带有 **ON\_CLICK\_BUTTON** 事件标识符的消息将在 **CProgram::OnEvent** ()事件处理函数种接收到，如以下代码所示。作为例子，我们将实现检查按钮名称的代码模块。如果发现是第三个按钮被按下，它当前的状态将定义第二个按钮的状态，也就是说，如果第三个按钮被按下，第二个按钮会被封锁禁用，反之亦然。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下按钮事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      ::Print("id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //---
      if(sparam==m_simple_button3.Text())
        {
         if(m_simple_button3.IsPressed())
            m_simple_button1.ButtonState(false);
         else
            m_simple_button1.ButtonState(true);
        }
     }
  }
```

以下的屏幕截图中显示了编译的结果以及把程序附加到图表上。在左侧的屏幕截图中， **Simple Button 3** 按钮是放开的，而 **Simple Button 1** 按钮是可用的，在右侧的屏幕截图中， **Simple Button 3** 按钮被按下，而 **Simple Button 1** 按钮就被禁用了。

![图 2. 把按钮控件附加到图表的测试。不同状态的按钮。 ](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-06_n.rne "图 2. 把按钮控件附加到图表的测试。不同状态的按钮。 ")
![[Pasted image 20260628212409.png]]
图 2. 把按钮控件附加到图表的测试。不同状态的按钮。

当前的实现还缺少了一点内容，应该增加一些与按钮的互动，我们需要使按钮被按下时改变颜色。在 [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 鼠标光标移动事件中可以检查鼠标左键是否被按下，因而我们在 **CSimpleButton::OnEvent** ()事件处理函数中增加对应的代码，

如果当时 (1)元件是隐藏的, (2) 表单被封锁禁用, (3) 梭镖左键没有被按下 (4) 以及按钮被禁用, 程序会从事件处理函数中退出。如果这些检查都通过了，根据焦点所在以及按钮的当前状态会设置相关颜色。

```
//+------------------------------------------------------------------+
//| 事件处理                               |
//+------------------------------------------------------------------+
void CSimpleButton::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 识别焦点
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 如果表单被封锁屏蔽，则退出
      if(m_wnd.IsLocked())
         return;
      //--- 如果鼠标按钮松开，就退出
      if(sparam=="0")
         return;
      //--- 如果按钮被封锁禁用，就退出
      if(!m_button_state)
         return;
      //--- 如果没有焦点
      if(!CElement::MouseFocus())
        {
         //--- 如果按钮被松开
         if(!m_button.State())
            {
             m_button.Color(m_text_color);
             m_button.BackColor(m_back_color);
            }
         //---
         return;
        }
      //--- 如果有焦点
      else
        {
         m_button.Color(m_text_color_pressed);
         m_button.BackColor(m_back_color_pressed);
         return;
        }
      //---
      return;
     }
  }
```

现在，一切都应和设计得那样工作了。用于创建简单按钮的类已经开发完毕了，您可以在文章附件中的文件中查看详细的代码。现在，我们将探讨一个扩展功能按钮的类。

### 开发用于创建图标按钮的类

一个图标按钮将由三个基本图形对象构成：

1. 背景.
2. 图标.
3. 文字标签.

![图 3. 图标按钮的构成。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-07_gn%2Cplg "图 3. 图标按钮的构成。")
![[Pasted image 20260628212422.png]]
图 3. 图标按钮的构成。

文本标签是自由的按钮文字位置所需，例如，一个按钮可以由底部的文字和上部的图标构成，反之亦然。我们将在下面的文章中继续讨论。

用于创建这个空间的类将和用于创建简单按钮的 **CSimpleButton** 类具有相同的栏位和方法。除了有关按钮大小和颜色的属性之外，我们将需要用于设置图标与边框距离，文字与控件坐标相对位置，以及图标激活和禁用状态的栏位和方法。让我们再增加一个选项来创建只有图标的按钮，这样的话，按钮将只由一个 [OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl) 类型的对象组成。

然后，创建 **IconButton.mqh** 文件并在其中创建 **CIconButton** 类，在 **WndContainer.mqh** 文件中包含它，与其他控件方式一样。以下的代码只显示了 **CIconButton** 类中与创建简单按钮的 **CSimpleButton** 类中不同的栏位和方法。

```
class CIconButton : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CButton           m_button;
   CBmpLabel         m_icon;
   CLabel            m_label;
   //--- 按钮属性:
   //    按钮中激活和禁用状态的图标
   string            m_icon_file_on;
   string            m_icon_file_off;
   //--- 图标边缘
   int               m_icon_x_gap;
   int               m_icon_y_gap;
   //--- 文本标签中的文字和边缘
   string            m_label_text;
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 如果按钮只由BmpLabel对象构成，它就是单纯图标模式
   bool              m_only_icon;
   //---
public:
   //--- 创建按钮的方法
   bool              CreateIconButton(const long chart_id,const int subwin,const string button_text,const int x,const int y);
   //---
private:
   bool              CreateButton(void);
   bool              CreateIcon(void);
   bool              CreateLabel(void);
   //---
public:
   //--- 设置单纯图标模式
   void              OnlyIcon(const bool flag)                { m_only_icon=flag;               }
   //--- 设置按钮在激活和禁用状态下的图标
   void              IconFileOn(const string file_path)       { m_icon_file_on=file_path;       }
   void              IconFileOff(const string file_path)      { m_icon_file_off=file_path;      }
   //--- 图标边缘
   void              IconXGap(const int x_gap)                { m_icon_x_gap=x_gap;             }
   void              IconYGap(const int y_gap)                { m_icon_y_gap=y_gap;             }
   //--- 文字标签边缘
   void              LabelXGap(const int x_gap)               { m_label_x_gap=x_gap;            }
   void              LabelYGap(const int y_gap)               { m_label_y_gap=y_gap;            }
  };
```

所有的类栏位都必须以默认值初始化:

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CIconButton::CIconButton(void) : m_icon_x_gap(4),
                                 m_icon_y_gap(3),
                                 m_label_x_gap(25),
                                 m_label_y_gap(4),
                                 m_icon_file_on(""),
                                 m_icon_file_off(""),
                                 m_button_state(true),
                                 m_two_state(false),
                                 m_only_icon(false),
                                 m_button_y_size(18),
                                 m_back_color(clrLightGray),
                                 m_back_color_off(clrLightGray),
                                 m_back_color_hover(clrSilver),
                                 m_back_color_pressed(clrBlack),
                                 m_border_color(clrWhite),
                                 m_border_color_off(clrDarkGray),
                                 m_label_color(clrBlack),
                                 m_label_color_off(clrDarkGray),
                                 m_label_color_hover(clrBlack),
                                 m_label_color_pressed(clrBlack)
  {
//--- 在基类中保存元件类的名称  
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击的优先级
   m_button_zorder =1;
   m_zorder        =0;
  }
```

用于创建所有按钮对象的方法将包含对单纯图标模式的检查，如果按钮只由一个图标构成，那么程序将在创建背景和创建文字标签的方法开始部分退出。

```
//+------------------------------------------------------------------+
//| 创建按钮背景                              |
//+------------------------------------------------------------------+
bool CIconButton::CreateButton(void)
  {
//--- 如果是单纯图标模式
   if(m_only_icon)
      return(true);
//--- ... 等等.
  }
//+------------------------------------------------------------------+
//| 创建按钮文字                              |
//+------------------------------------------------------------------+
bool CIconButton::CreateLabel(void)
  {
//--- 如果是单纯图标模式
   if(m_only_icon)
      return(true);
//--- ... 等等.
  }
```

当按钮只由一个图标构成时，创建的方法会多做一次检查，看图标是否存在。如果用户没有定义图标，图形界面的创建在这一步就会结束，并且在日志中会收到消息说明在这种模式下图标是必需的。用于创建按钮图标的 **CIconButton::CreateIcon** () 方法的代码如下所示:

```
//+------------------------------------------------------------------+
//| 创建一个按钮图标                           |
//+------------------------------------------------------------------+
bool CIconButton::CreateIcon(void)
  {
//--- 如果禁用单纯图标模式
   if(!m_only_icon)
     {
      //--- 如果不需要按钮图标就退出
      if(m_icon_file_on=="" || m_icon_file_off=="")
         return(true);
     }
//--- 如果启用了单纯图标模式 
   else
     {
      //--- 如果图标没有被定义，打印消息并退出
      if(m_icon_file_on=="" || m_icon_file_off=="")
        {
         ::Print(__FUNCTION__," > 在 \"单纯图标\"模式下必须定义图标.");
         return(false);
        }
     }
//--- 构建对象名称
   string name=CElement::ProgramName()+"_icon_button_bmp_"+(string)CElement::Id();
//--- 坐标
   int x =(!m_only_icon)? m_x+m_icon_x_gap : m_x;
   int y =(!m_only_icon)? m_y+m_icon_y_gap : m_y;
//--- 设置图标
   if(!m_icon.Create(m_chart_id,name,m_subwin,x,y))
      return(false);
//--- 设置属性
   m_icon.BmpFileOn("::"+m_icon_file_on);
   m_icon.BmpFileOff("::"+m_icon_file_off);
   m_icon.State(true);
   m_icon.Corner(m_corner);
   m_icon.GetInteger(OBJPROP_ANCHOR,m_anchor);
   m_icon.Selectable(false);
   m_icon.Z_Order((!m_only_icon)? m_zorder : m_button_zorder);
   m_icon.Tooltip((!m_only_icon)? "\n" : m_label_text);
//--- 保存坐标
   m_icon.X(x);
   m_icon.Y(y);
//--- 保存大小
   m_icon.XSize(m_icon.X_Size());
   m_icon.YSize(m_icon.Y_Size());
//--- 到边缘的距离
   m_icon.XGap(x-m_wnd.X());
   m_icon.YGap(y-m_wnd.Y());
//--- 保存对象指针
   CElement::AddToArray(m_icon);
   return(true);
  }
```

**CIconButton** 类与我们之前讨论过的 **CSimpleButton** 类就没有其他区别了。您可以在文章附件中找到文件的完整版本。

现在我们将测试 **CIconButton** 类型的按钮。为了演示功能，在测试的EA中创建五个不同模式，大小以及状态的这样的按钮。在测试EA的自定义类中创建5个 **CIconButton** 类的实例，并且声明5个用于创建按钮的方法，代码如下所示。

```
class CProgram : public CWndEvents
  {
private:
   //--- 图标按钮
   CIconButton       m_icon_button1;
   CIconButton       m_icon_button2;
   CIconButton       m_icon_button3;
   CIconButton       m_icon_button4;
   CIconButton       m_icon_button5;
   //---
private:
   //--- 图标按钮
#define ICONBUTTON1_GAP_X        (7)
#define ICONBUTTON1_GAP_Y        (105)
   bool              CreateIconButton1(const string text);
#define ICONBUTTON2_GAP_X        (128)
#define ICONBUTTON2_GAP_Y        (105)
   bool              CreateIconButton2(const string text);
#define ICONBUTTON3_GAP_X        (7)
#define ICONBUTTON3_GAP_Y        (130)
   bool              CreateIconButton3(const string text);
#define ICONBUTTON4_GAP_X        (88)
#define ICONBUTTON4_GAP_Y        (130)
   bool              CreateIconButton4(const string text);
#define ICONBUTTON5_GAP_X        (169)
#define ICONBUTTON5_GAP_Y        (130)
   bool              CreateIconButton5(const string text);
  };
```

我们将只使用这些方法中的一个实现来作为例子，因为它们除了设置的参数值之外都是一样的：

```
//+------------------------------------------------------------------+
//| 创建图标按钮 5                             |
//+------------------------------------------------------------------+
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp64\\gold.bmp"
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp64\\gold_colorless.bmp"
//---
bool CProgram::CreateIconButton5(const string button_text)
  {
//--- 传入面板对象
   m_icon_button5.WindowPointer(m_window);
//--- 坐标
   int x=m_window.X()+ICONBUTTON5_GAP_X;
   int y=m_window.Y()+ICONBUTTON5_GAP_Y;
//--- 在创建之前设置属性
   m_icon_button5.ButtonXSize(76);
   m_icon_button5.ButtonYSize(87);
   m_icon_button5.LabelXGap(6);
   m_icon_button5.LabelYGap(69);
   m_icon_button5.LabelColor(clrBlack);
   m_icon_button5.LabelColorPressed(clrBlack);
   m_icon_button5.BackColor(clrGainsboro);
   m_icon_button5.BackColorHover(C'193,218,255');
   m_icon_button5.BackColorPressed(C'210,210,220');
   m_icon_button5.BorderColor(C'150,170,180');
   m_icon_button5.BorderColorOff(C'178,195,207');
   m_icon_button5.IconXGap(6);
   m_icon_button5.IconYGap(3);
   m_icon_button5.IconFileOn("Images\\EasyAndFastGUI\\Icons\\bmp64\\gold.bmp");
   m_icon_button5.IconFileOff("Images\\EasyAndFastGUI\\Icons\\bmp64\\gold_colorless.bmp");
//--- 创建控件
   if(!m_icon_button5.CreateIconButton(m_chart_id,m_subwin,button_text,x,y))
      return(false);
//--- 在库中加上控件指针
   CWndContainer::AddToElementsArray(0,m_icon_button5);
   return(true);
  }
```

把这些方法的调用放到程序创建图形界面的主方法中，

再在事件处理函数中加上按下 **Icon Button 2** 的处理方法。在本文末尾附件的EA版本中，这个按钮是在两种模式下工作的(按下/抬起)。 **Icon Button 1** 和 **Icon Button 4** 是否可用就依赖于 **Icon Button 2** 的状态，如果这个按钮是抬起的，所有依赖于它的按钮就是被封锁禁用的，相反情况就是可用的。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下按钮事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      Print("id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //---
      if(sparam==m_simple_button3.Text())
        {
         if(m_simple_button3.IsPressed())
            m_simple_button1.ButtonState(false);
         else
            m_simple_button1.ButtonState(true);
        }
      //---
      if(sparam==m_icon_button2.Text())
        {
         if(m_icon_button2.IsPressed())
           {
            m_icon_button1.ButtonState(true);
            m_icon_button4.ButtonState(true);
           }
         else
           {
            m_icon_button1.ButtonState(false);
            m_icon_button4.ButtonState(false);
           }
        }
     }
  }
```

编译文件之后，再把测试EA附加到图表上，您就应该能够看到如以下屏幕截图所示的结果:

![图 4. 图标按钮控件的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-04_n.rne "图 4. 图标按钮控件的测试.")
![[Pasted image 20260628212447.png]]
图 4. 图标按钮控件的测试.

我们已经完成了扩展功能按钮 **CIconButton** 的开发，您在上述屏幕截图中看到的按钮图标可以在文章末尾下载。现在，我们将讨论用于创建分隔按钮的类。

### 开发用于创建分割按钮的类

什么是分割按钮?分割按钮是一种由两个功能部分组成的按钮:

- 第一个部分就是含有内建主要功能的按钮，
- 第二部分是一个带有其他功能的上下文菜单的按钮，

这种类型的控件在很多程序的图形界面中都频繁使用，这样的按钮使用的场合是，有多个功能必须被紧密分组并且它们全都属于相同的类别。

一个分割按钮将由5个对象(图形元素)和一个可附加的元素(上下文菜单)构成：

1. 背景.
2. 图标.
3. 文字.
4. 另外按钮的背景.
5. 下拉菜单指示.

![图 5. 分隔按钮控件的组成部分.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-05_gn%5D_0.rne "图 5. 分隔按钮控件的组成部分.")
![[Pasted image 20260628212459.png]]
图 5. 分隔按钮控件的组成部分.

我们可以看到，上下文菜单(**CContextMenu** 类的对象)不能附加到 **CMenuItem** 类的对象中，也就是说，我们需要另外一种模式，使得上下文菜单可以是任何其他元件的一部分，甚至也可以分离。

另外，我们还需要一个参考点，用于有效设置这些控件与之之间的临时互操作(下拉元件)。这是必须的，因为我们需要使表单只能由屏蔽它的那个控件来解除屏蔽，如果不这样做，元件之间可能互相冲突，因为表单的状态可能决定了其它一些控件的状态。晚些时候我们会用实例说明，将会进行一个测试，以便我们更好理解在何种情况下可能发生冲突。为了实现这个功能，需要在表单的 **CWindow** 类中加上一个栏位和一个方法来保存和获得激活的元件，代码如下所示。

```
class CWindow : public CElement
  {
private:
   //--- 激活控件的标识符
   int               m_id_activated_element;
   //---
public:
   //--- 用于保存和获取激活元件的标识符
   int               IdActivatedElement(void)                          const { return(m_id_activated_element);     }
   void              IdActivatedElement(const int id)                        { m_id_activated_element=id;          }
  };
```

如果在元件激活过程中它屏蔽了表单，这个元件的ID就要保存在表单中。在表单被解除屏蔽时的地方，需要对屏蔽它的元件ID进行检查，如果在对表单解除屏蔽之前已经检查过按下对象的名称，那么对屏蔽表单元件ID的检查就不需要了。

之后，我们将介绍 **CContextMenu** 类中增加的内容，它们将允许启用和处理上下文菜单的分离模式，代码如下所示。默认条件下的设置是上下文菜单附加到前一节点的模式:

```
class CContextMenu : public CElement
  {
   //--- 分离上下文菜单模式这表明前一节点没有附加上下文菜单。
   bool              m_free_context_menu;
   //---
public:
   //--- 设置分离的上下文菜单模式
   void              FreeContextMenu(const bool flag)               { m_free_context_menu=flag;             }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CContextMenu::CContextMenu(void) : m_free_context_menu(false)
  {
  }
```

在上下文菜单的附加状态和分离状态下处理菜单项被按下事件的内部ID是不同的，这种分离将使代码清晰，减少条件的数量并可以是用更灵活的方法来管理不同模式下元件的事件。

为了从分离的上下文菜单中生成事件，在 **Defines.mqh** 文件中增加一个新的ID(**ON\_CLICK\_FREEMENU\_ITEM**):

```
#define ON_CLICK_FREEMENU_ITEM    (9)  // 点击了分离模式下的上下文菜单
```

在 **CContextMenu** 类中后面的位置要加上检查分离的上下文菜单模式的条件。以下是方法的精简版代码，注释部分留下了，以便指示更加清晰。

> 1\. 在事件处理函数中:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CContextMenu::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      //--- 取得焦点
      //--- 如果这是一个分离状态的上下文菜单
      if(m_free_context_menu)
         return;
      //--- 如果上下文菜单被启用并且鼠标左键按下
      //--- 检查关闭后面所有上下文菜单的条件
      return;
     }
//--- 处理鼠标左键点击对象事件
//--- 处理 ON_CLICK_MENU_ITEM 事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_MENU_ITEM)
     {
      //--- 如果这是一个分离状态的上下文菜单
      if(m_free_context_menu)
         return;
      //--- 从处理的菜单项接收消息
      return;
     }
  }
```

> 2\. 在创建上下文菜单的方法中:

```
//+------------------------------------------------------------------+
//| 创建上下文菜单               　　　　　        |
//+------------------------------------------------------------------+
bool CContextMenu::CreateContextMenu(const long chart_id,const int subwin,const int x=0,const int y=0)
  {
//--- 如果没有表单指针
//--- 如果是一个附加的上下文菜单
   if(!m_free_context_menu)
     {
      //--- 如果没有指向前一节点的指针就退出
      if(::CheckPointer(m_prev_node)==POINTER_INVALID)
        {
         ::Print(__FUNCTION__," > 在创建上下文菜单之前"
                 "必须传入一个使用CContextMenu::PrevNodePointer(CMenuItem &object) 方法取得的节点指针.");
         return(false);
        }
     }
//--- 初始化变量
//--- 如果坐标没有被指定
//--- 如果坐标已经指定
//--- 到边缘的距离
//--- 创建一个上下文菜单
//--- 隐藏元件
   return(true);
  }
```

> 3\. 在创建菜单项的方法中:

```
//+------------------------------------------------------------------+
//| 创建菜单项列表                          |
//+------------------------------------------------------------------+
bool CContextMenu::CreateItems(void)
  {
   int s =0;     // 用于标记分隔线的位置
   int x =m_x+1; // X 坐标
   int y =m_y+1; // Y 坐标. 应该在循环中对每个菜单项进行计算。
//--- 分隔线的数量
//---
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 计算 Y 坐标
      //--- 保存表单指针
      //--- 如果上下文菜单有附件，加上前一节点的指针
      if(!m_free_context_menu)
         m_items[i].PrevNodePointer(m_prev_node);
      //--- 设置属性
      //--- 面板边缘的距离
      //--- 创建一个菜单项
      //--- 如果所有分隔线都已经设置，就转到下一个
      //--- 如果索引匹配，在这个菜单项之后设置一个分隔线
     }
   return(true);
  }
```

> 4\. 在显示和隐藏上下文菜单的方法中:

```
//+------------------------------------------------------------------+
//| 显示一个上下文菜单         　                  |
//+------------------------------------------------------------------+
void CContextMenu::Show(void)
  {
//--- 如果控件已经可见，退出
//--- 显示上下文菜单的对象
//--- 显示菜单项
//--- 设置可见控件的状态
//--- 上下文菜单的状态
//--- 在前一节点注册状态
   if(!m_free_context_menu)
      m_prev_node.ContextMenuState(true);
//--- 屏蔽表单
  }
//+------------------------------------------------------------------+
//| 隐藏上下文菜单                            |
//+------------------------------------------------------------------+
void CContextMenu::Hide(void)
  {
//--- 如果元件是隐藏的, 退出
//--- 隐藏上下文菜单的对象
//--- 隐藏菜单项
//--- 清除焦点
//--- 设置隐藏元件的状态
//--- 上下文菜单的状态
//--- 在前一节点注册状态
   if(!m_free_context_menu)
      m_prev_node.ContextMenuState(false);
  }
```

> 5\. 在处理菜单项按下的方法中，在新加的代码块里，在分离上下文菜单模式下，需要在循环中检查按下对象的名称，如果找到了这样的对象，就发送一条 **ON\_CLICK\_FREEMENU\_ITEM identifier** 的事件。晚些时候，这个事件将会在那些包含上下文菜单的控件(在例子中就是分割按钮)的事件处理程序中进行处理。

```
//+------------------------------------------------------------------+
//| 处理按下菜单项的事件                         |
//+------------------------------------------------------------------+
bool CContextMenu::OnClickMenuItem(const string clicked_object)
  {
//--- 如果本菜单项有前一节点并且已经打开，就退出
   if(!m_free_context_menu && m_context_menu_state)
      return(true);
//--- 如果按下的不是菜单项，就退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_menuitem_",0)<0)
      return(false);
//--- 从对象名称取得ID和索引
   int id    =IdFromObjectName(clicked_object);
   int index =IndexFromObjectName(clicked_object);
//--- 如果上下文菜单有前一节点
   if(!m_free_context_menu)
     {
      //--- 如果按下的菜单项不是本上下文菜单所附加的，就退出
      if(id!=m_prev_node.Id() || index!=m_prev_node.Index())
         return(false);
      //--- 显示上下文菜单
      Show();
     }
//--- 如果这是一个分离的上下文菜单
   else
     {
      //--- 在循环中寻找按下的菜单项
      int total=ItemsTotal();
      for(int i=0; i<total; i++)
        {
         if(m_items[i].Object(0).Name()!=clicked_object)
            continue;
         //--- 发送相关消息
         ::EventChartCustom(m_chart_id,ON_CLICK_FREEMENU_ITEM,CElement::Id(),i,DescriptionByIndex(i));
         break;
        }
     }
//---
   return(true);
  }
```

开发分割按钮类之所需已经完备，在所有控件所在的 **Controls** 文件夹下使用 **CSplitButton** 类和方法创建 **SplitButton.mqh** 文件:

```
//+------------------------------------------------------------------+
//|                                                  SplitButton.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "ContextMenu.mqh"
//+------------------------------------------------------------------+
//| 创建分割按钮的类                           |
//+------------------------------------------------------------------+
class CSplitButton : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CSplitButton();
                    ~CSplitButton();

   //--- 保存表单指针
   void              WindowPointer(CWindow &object)           { m_wnd=::GetPointer(object);         }

   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void);
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重置 鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
```

在本文中，已经描述了各种类型按钮共有的属性和方法，除此之外，我们还需要一个用于设置按钮上下文菜单的方法:

- 大小；在这个版本中，我们只使用宽度，高度将等于主按钮的高度。
- 鼠标左键点击的优先级；带有下拉菜单的按钮的优先级高于简单按钮。
- 按钮图标的图标和边缘；
- 上下文菜单按钮的状态(可见/隐藏).

```
class CSplitButton : public CElement
  {
private:
   //--- 带有下拉菜单按钮的大小和鼠标左键点击优先级
   int               m_drop_button_x_size;
   int               m_drop_button_zorder;
   //--- 图标边缘
   int               m_drop_arrow_x_gap;
   int               m_drop_arrow_y_gap;
   //--- 带有下拉菜单按钮在激活和屏蔽状态下的图标
   string            m_drop_arrow_file_on;
   string            m_drop_arrow_file_off;
   //--- 上下文菜单的状态 
   bool              m_drop_menu_state;
   //---
public:
   //--- 带有下拉菜单按钮的大小
   void              DropButtonXSize(const int x_size)        { m_drop_button_x_size=x_size;        }
   //--- 设置带有下拉菜单按钮在激活和屏蔽状态下的图标
   void              DropArrowFileOn(const string file_path)  { m_drop_arrow_file_on=file_path;     }
   void              DropArrowFileOff(const string file_path) { m_drop_arrow_file_off=file_path;    }
   //--- 图标边缘
   void              DropArrowXGap(const int x_gap)           { m_drop_arrow_x_gap=x_gap;           }
   void              DropArrowYGap(const int y_gap)           { m_drop_arrow_y_gap=y_gap;           }
  };
```

我们之前说过，创建一个分割按钮需要5个基本对象和一个上下文菜单，让我们声明在创建它们时所需类的实例。我们还将需要构造上下文菜单的方法(增加菜单项和分隔线)。因为上下文菜单的属性是由用户设置的，我们需要一个方法来取得指向按钮上下文菜单的指针。

```
class CSplitButton : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CButton           m_button;
   CBmpLabel         m_icon;
   CLabel            m_label;
   CEdit             m_drop_button;
   CBmpLabel         m_drop_arrow;
   CContextMenu      m_drop_menu;
   //---
public:
   //--- 创建按钮的方法
   bool              CreateSplitButton(const long chart_id,const string button_text,const int window,const int x,const int y);
   //---
private:
   bool              CreateButton(void);
   bool              CreateIcon(void);
   bool              CreateLabel(void);
   bool              CreateDropButton(void);
   bool              CreateDropIcon(void);
   bool              CreateDropMenu(void);
   //---
public:
   //--- 取得上下文菜单的指针,
   CContextMenu     *GetContextMenuPointer(void)        const { return(::GetPointer(m_drop_menu));  }
   //--- 在创建上下文菜单之前使用指定属性添加菜单项
   void              AddItem(const string text,const string path_bmp_on,const string path_bmp_off);
   //--- 在创建上下文菜单之前在指定菜单项后加上分隔线
   void              AddSeparateLine(const int item_index);
  };
```

用于创建元件对象的方法和之前讨论过的没有本质的区别，唯一重要的细微差别就是，在创建上下文菜单的方法中，必须把设置分割按钮的ID设为控件的一部分，代码如下所示。之后，根据此ID就能够知道 **ON\_CLICK\_FREEMENU\_ITEM** 消息的来源是哪里。

```
//+------------------------------------------------------------------+
//| 创建下拉菜单                             |
//+------------------------------------------------------------------+
bool CSplitButton::CreateDropMenu(void)
  {
//--- 传入面板对象
   m_drop_menu.WindowPointer(m_wnd);
//--- 分离的上下文菜单
   m_drop_menu.FreeContextMenu(true);
//--- 坐标
   int x=m_x;
   int y=m_y+m_y_size;
//--- 设置属性
   m_drop_menu.Id(CElement::Id());
   m_drop_menu.XSize((m_drop_menu.XSize()>0)? m_drop_menu.XSize() : m_button_x_size);
//--- 设置上下文菜单
   if(!m_drop_menu.CreateContextMenu(m_chart_id,m_subwin,x,y))
      return(false);
//---
   return(true);
  }
```

我们将探讨用于与分割按钮交互的方法，因为这种类型的按钮有两个部分，就需要两个独立的方法来处理它们被按下的场景，这些方法将在类处理函数中的 [CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件代码部分被调用:

```
class CSplitButton : public CElement
  {
private:
   //--- 处理按钮按下事件
   bool              OnClickButton(const string clicked_object);
   //--- 处理带有下拉菜单的按钮被按下的事件
   bool              OnClickDropButton(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CSplitButton::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标左键点击对象事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 按下简单按钮
      if(OnClickButton(sparam))
         return;
      //--- 按下含有下拉菜单的按钮
      if(OnClickDropButton(sparam))
         return;
     }
  }
```

在处理主按钮被按下的 **CSplitButton::OnClickButton** ()方法中，首先检查对象名称，如果它是这种类的实例的名称，然后检查按钮状态，如果按钮是被屏蔽禁用的，程序会退出此方法。主按钮只能有一种状态，这就是说它被按下之后必须返回到抬起的状态。如果所有的检查都通过了，那么 (1) 上下文菜单如果是可见的，就必须隐藏，(2)必须设置菜单和按钮对应的状态和颜色，(3)表单必须解除屏蔽，并且激活元件的ID在记录中必须清零。

在方法的末尾，发送了一条消息，它可以在自定义类中接收到。这条消息将包含 (1) **ON\_CLICK\_BUTTON** 事件的ID, (2) 元件的ID, (3) 元件的索引， 以及(4)按钮显示的描述信息。

```
//+------------------------------------------------------------------+
//| 按下按钮                               |
//+------------------------------------------------------------------+
bool CSplitButton::OnClickButton(const string clicked_object)
  {
//--- 如果对象名称不匹配，就退出  
   if(clicked_object!=m_button.Name())
      return(false);
//--- 如果按钮被屏蔽禁用，就退出
   if(!m_button_state)
     {
      //--- 抬起按钮
      m_button.State(false);
      return(false);
     }
//--- 隐藏菜单
   m_drop_menu.Hide();
   m_drop_menu_state=false;
//--- 抬起按钮并设置焦点的颜色
   m_button.State(false);
   m_button.BackColor(m_back_color_hover);
   m_drop_button.BackColor(m_back_color_hover);
//--- 解锁表单
   m_wnd.IsLocked(false);
   m_wnd.IdActivatedElement(WRONG_VALUE);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_BUTTON,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

在 **CSplitButton::OnClickDropButton** ()方法中，会处理含有下拉菜单的按钮按下的事件，在最开头也包含了两个检查，它们是(1)对名称的检查，以及(2)对按钮可用性的检查。之后，程序根据上下文菜单按钮的当前可见状态，执行两段代码中的一段，对按钮菜单隐藏或者显示。

```
//+------------------------------------------------------------------+
//| 按下含有上下文菜单的按钮                         |
//+------------------------------------------------------------------+
bool CSplitButton::OnClickDropButton(const string clicked_object)
  {
//--- 如果对象名称不匹配，就退出  
   if(clicked_object!=m_drop_button.Name())
      return(false);
//--- 如果按钮被屏蔽禁用，就退出
   if(!m_button_state)
     {
      //--- 抬起按钮
      m_button.State(false);
      return(false);
     }
//--- 如果列表已经显示，就隐藏它
   if(m_drop_menu_state)
     {
      m_drop_menu_state=false;
      m_drop_menu.Hide();
      m_button.BackColor(m_back_color_hover);
      m_drop_button.BackColor(m_back_color_hover);
      //--- 解除表单的屏蔽并把激活它的元件ID清零
      m_wnd.IsLocked(false);
      m_wnd.IdActivatedElement(WRONG_VALUE);
     }
//--- 如果列表是隐藏的，显示它
   else
     {
      m_drop_menu_state=true;
      m_drop_menu.Show();
      m_button.BackColor(m_back_color_hover);
      m_drop_button.BackColor(m_back_color_pressed);
      //--- 屏蔽表单并保存激活的元件ID
      m_wnd.IsLocked(true);
      m_wnd.IdActivatedElement(CElement::Id());
     }
//---
   return(true);
  }
```

在本文的早些时候，我们加强了 **CContextMenu** 类，加入了在自由模式下发送内部使用的以 **ON\_CLICK\_FREEMENU\_ITEM** 为ID的事件，这个消息将会在分割按钮 **CSplitButton** 类的处理函数中接收到。为了识别该消息是从哪个上下文菜单中发送而来，必须检查元件的ID，它包含在 **lparam** 参数中。如果ID是匹配的，那么(1) 菜单必须隐藏, (2) 必须设置对应按钮状态的颜色，以及(3)如果这个元件屏蔽了表单就需要把表单解除屏蔽。在那之后，需要发送一条ID为 **ON\_CLICK\_CONTEXTMENU\_ITEM** 的消息，这个消息能够在自定义类中接收到。

另外，我们还将创建另外一个具有多种用途的叫作 **CSplitButton::HideDropDownMenu** ()的方法，这个方法的目的是隐藏菜单，并且解除表单的屏蔽，再把激活元件的ID清零。

```
class CSplitButton : public CElement
  {
private:
   //--- 隐藏下拉菜单
   void              HideDropDownMenu(void);
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CSplitButton::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理自由菜单项的按下事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_FREEMENU_ITEM)
     {
      //--- 如果ID不匹配，就退出
      if(CElement::Id()!=lparam)
         return;
      //--- 隐藏下拉菜单
      HideDropDownMenu();
      //--- 发送消息
      ::EventChartCustom(m_chart_id,ON_CLICK_CONTEXTMENU_ITEM,lparam,dparam,sparam);
      return;
     }
  }
//+------------------------------------------------------------------+
//| 隐藏下拉菜单                              |
//+------------------------------------------------------------------+
void CSplitButton::HideDropDownMenu(void)
  {
//--- 隐藏菜单并设置对应的指示
   m_drop_menu.Hide();
   m_drop_menu_state=false;
   m_button.BackColor(m_back_color);
   m_drop_button.BackColor(m_back_color);
//--- 如果表单记录的ID与该元件匹配，接触表单屏蔽
   if(m_wnd.IdActivatedElement()==CElement::Id())
     {
      m_wnd.IsLocked(false);
      m_wnd.IdActivatedElement(WRONG_VALUE);
     }
  }
```

现在，我们必须设置分割按钮对鼠标光标位置，对鼠标左键状态，以及鼠标光标掠过时的回应，这将需要另外一个方法，叫做 **CSplitButton::CheckPressedOverButton** ()，这个方法只有一个参数 - 鼠标左键的状态。在开始处有两个检查，如果发现(1)光标在按钮区域之外，并且(2) 当它不是激活元件时而表单被屏蔽，程序就会退出此方法。如果检查通过，程序会根据鼠标左键的状态以及光标位于按钮的哪个部分来设置相关的颜色。

```
class CSplitButton : public CElement
  {
private:
   //--- 检查在分割按钮上按下鼠标左键
   void              CheckPressedOverButton(const bool mouse_state);
  };
//+------------------------------------------------------------------+
//| 检查在分割按钮上按下鼠标左键                                  |
//+------------------------------------------------------------------+
void CSplitButton::CheckPressedOverButton(const bool mouse_state)
  {
//--- 如果在元件范围之外，就退出
   if(!CElement::MouseFocus())
      return;
//--- 如果表单被屏蔽并且屏蔽表单的ID与元件ID不匹配，就退出
   if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
      return;
//--- 鼠标按钮被按下
   if(mouse_state)
     {
      //--- 在菜单按钮区域
      if(m_drop_button.MouseFocus())
        {
         m_button.BackColor(m_back_color_hover);
         m_drop_button.BackColor(m_back_color_pressed);
        }
      else
        {
         m_button.BackColor(m_back_color_pressed);
         m_drop_button.BackColor(m_back_color_pressed);
        }
     }
//--- 鼠标按钮抬起
   else
     {
      if(m_drop_menu_state)
        {
         m_button.BackColor(m_back_color_hover);
         m_drop_button.BackColor(m_back_color_pressed);
        }
     }
  }
```

在鼠标光标移动事件的处理函数中会调用 **CSplitButton::CheckPressedOverButton** ()方法，在调用此方法之前会做一些检查，例如 (1)元件是否隐藏, (2) 焦点, (3) 元件是否可用，以及(4)如果光标在元件范围之外，这些都可能会使菜单隐藏并且在处理函数调用 **CSplitButton::CheckPressedOverButton** ()方法之前就退出。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CSplitButton::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 识别焦点
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      m_drop_button.MouseFocus(x>m_drop_button.X() && x<m_drop_button.X2() && 
                               y>m_drop_button.Y() && y<m_drop_button.Y2());
      //--- 如果按钮被封锁禁用，就退出
      if(!m_button_state)
         return;
      //--- 在元件范围之外按下鼠标键
      if(!CElement::MouseFocus() && sparam=="1")
        {
         //--- 如果焦点在上下文菜单上，就退出
         if(m_drop_menu.MouseFocus())
            return;
         //--- 隐藏下拉菜单
         HideDropDownMenu();
         return;
        }
      //--- 检查在分割按钮上按下鼠标左键
      CheckPressedOverButton(bool((int)sparam));
      return;
     }
  }
```

分割按钮控件类已经可以测试了，为了使它能够正常工作，还需要在库结构中正确包含它。每次创建复杂(组合)控件时都需要这样做。 **CSimpleButton** 和 **CIconButton** 类的按钮不需要加上这些，分割按钮与它们不同，它除了有实际的按钮之外，还有一个上下文菜单，并且必须在控件ID的基础上还要有相关的私有数组，开发库的最终用户将使用最终版而不会处理这部分代码，他不会知道这里是如何工作的。库的开发者的主要目标就是使库的使用非常简单，以保证只使用最少的步骤就能创建出程序的图形界面来。

在 **WndContainer.mqh** 文件中包含 **CSplitButton** 类的文件:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "SplitButton.mqh"
```

然后，声明并实现方法来把分割按钮中上下文菜单的指针加到之前创建的私有数组中：

```
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                          |
//+------------------------------------------------------------------+
class CWndContainer
  {
private:
   //--- 在库中存储指向分割按钮元件的指针
   bool              AddSplitButtonElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 在库中存储指向分割按钮的指针                                       |
//+------------------------------------------------------------------+
bool CWndContainer::AddSplitButtonElements(const int window_index,CElement &object)
  {
//--- 如果不是分割按钮，就退出
   if(object.ClassName()!="CSplitButton")
      return(false);
//--- 取得分割按钮的指针
   CSplitButton *sb=::GetPointer(object);
//--- 加大元件数组
   int size=::ArraySize(m_wnd[window_index].m_elements);
   ::ArrayResize(m_wnd[window_index].m_elements,size+1);
//--- 取得上下文菜单指针
   CContextMenu *cm=sb.GetContextMenuPointer();
//--- 在库中保存元件和对象
   m_wnd[window_index].m_elements[size]=cm;
   AddToObjectsArray(window_index,cm);
//--- 在库中保存它的对象指针
   int items_total=cm.ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 加大元件数组
      size=::ArraySize(m_wnd[window_index].m_elements);
      ::ArrayResize(m_wnd[window_index].m_elements,size+1);
      //--- 取得菜单项的指针
      CMenuItem *mi=cm.ItemPointerByIndex(i);
      //--- 在数组中保存指针
      m_wnd[window_index].m_elements[size]=mi;
      //--- 把指向所有菜单项的指针加到通用数组中
      AddToObjectsArray(window_index,mi);
     }
//--- 把指针加到私有数组中
   AddToRefArray(cm,m_wnd[window_index].m_context_menus);
   return(true);
  }
```

您可能记得，在 **CWndContainer::AddToElementsArray** ()方法中必须调用诸如 **CWndContainer::AddSplitButtonElements** ()之类的方法，这个方法的精简版代码如下。

```
//+------------------------------------------------------------------+
//| 把指针加到元件数组中                          |
//+------------------------------------------------------------------+
void CWndContainer::AddToElementsArray(const int window_index,CElement &object)
  {
//--- 如果库中没有包含任何表单控件
//--- 如果需求是为了不存在的表单
//--- 添加到通用元件数组中
//--- 把元件对象加到通用对象数组中
//--- 保存所有表单中最后一个元件的id
//--- 增加元件ID计数器
//--- 在库中保存上下文菜单对象的指针
//--- 把主菜单对象的指针存储到库中
//--- 在库中保存分割按钮的指针
   if(AddSplitButtonElements(window_index,object))
      return;
  }
```

分割按钮已经完成，可以测试了。在测试EA中创建四个这样的按钮，声明 **CSplitButton** 类的实例，以及根据到表单左上角边缘的距离来创建按钮的方法，在程序创建图形界面的主方法中调用它们。

```
class CProgram : public CWndEvents
  {
private:
   //--- 分割按钮
   CSplitButton      m_split_button1;
   CSplitButton      m_split_button2;
   CSplitButton      m_split_button3;
   CSplitButton      m_split_button4;
   //---
private:
   //--- 分割按钮
#define SPLITBUTTON1_GAP_X       (7)
#define SPLITBUTTON1_GAP_Y       (225)
   bool              CreateSplitButton1(const string text);
#define SPLITBUTTON2_GAP_X       (128)
#define SPLITBUTTON2_GAP_Y       (225)
   bool              CreateSplitButton2(const string text);
#define SPLITBUTTON3_GAP_X       (7)
#define SPLITBUTTON3_GAP_Y       (250)
   bool              CreateSplitButton3(const string text);
#define SPLITBUTTON4_GAP_X       (128)
#define SPLITBUTTON4_GAP_Y       (250)
   bool              CreateSplitButton4(const string text);
  };
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 简单按钮
//--- 图标按钮
//--- 分割按钮
   if(!CreateSplitButton1("Split Button 1"))
      return(false);
   if(!CreateSplitButton2("Split Button 2"))
      return(false);
   if(!CreateSplitButton3("Split Button 3"))
      return(false);
   if(!CreateSplitButton4("Split Button 4"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

我们将会使用它们中的一个来作为例子，在以下代码中显示它。请注意，为了设置上下文菜单的属性，首先要使用 **CSplitButton::GetContextMenuPointer** () 方法来取得它的指针。

```
//+------------------------------------------------------------------+
//| 创建 split button 1                           |
//+------------------------------------------------------------------+
bool CProgram::CreateSplitButton1(const string button_text)
  {
//--- 上下文菜单中有三项
#define CONTEXTMENU_ITEMS5 3
//--- 传入面板对象
   m_split_button1.WindowPointer(m_window);
//--- 坐标
   int x=m_window.X()+SPLITBUTTON1_GAP_X;
   int y=m_window.Y()+SPLITBUTTON1_GAP_Y;
//--- 菜单项名称数组
   string items_text[]=
     {
      "Item 1",
      "Item 2",
      "Item 3"
     };
//--- 可用模式的图标数组
   string items_bmp_on[]=
     {
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\coins.bmp",
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\line_chart.bmp",
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\bar_chart.bmp"
     };
//--- 屏蔽模式的图标数组 
   string items_bmp_off[]=
     {
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\coins_colorless.bmp",
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\line_chart_colorless.bmp",
      "Images\\EasyAndFastGUI\\Icons\\bmp16\\bar_chart_colorless.bmp"
     };
//--- 在创建之前设置属性
   m_split_button1.ButtonXSize(116);
   m_split_button1.ButtonYSize(22);
   m_split_button1.DropButtonXSize(16);
   m_split_button1.LabelColor(clrBlack);
   m_split_button1.LabelColorPressed(clrBlack);
   m_split_button1.BackColor(clrGainsboro);
   m_split_button1.BackColorHover(C'193,218,255');
   m_split_button1.BackColorPressed(C'190,190,200');
   m_split_button1.BorderColor(C'150,170,180');
   m_split_button1.BorderColorOff(C'178,195,207');
   m_split_button1.BorderColorHover(C'150,170,180');
   m_split_button1.IconFileOn("Images\\EasyAndFastGUI\\Icons\\bmp16\\script.bmp");
   m_split_button1.IconFileOff("Images\\EasyAndFastGUI\\Icons\\bmp16\\script_colorless.bmp");
//--- 取得按钮上下文菜单的指针
   CContextMenu *cm=m_split_button1.GetContextMenuPointer();
//--- 设置上下文菜单属性
   cm.AreaBackColor(C'240,240,240');
   cm.AreaBorderColor(clrSilver);
   cm.ItemBackColor(C'240,240,240');
   cm.ItemBorderColor(C'240,240,240');
   cm.LabelColor(clrBlack);
   cm.LabelColorHover(clrWhite);
   cm.SeparateLineDarkColor(C'160,160,160');
   cm.SeparateLineLightColor(clrWhite);
//--- 在上下文菜单中加入菜单项
   for(int i=0; i<CONTEXTMENU_ITEMS5; i++)
      m_split_button1.AddItem(items_text[i],items_bmp_on[i],items_bmp_off[i]);
//--- 在第一个菜单项后设置分隔线
   m_split_button1.AddSeparateLine(1);
//--- 创建控件
   if(!m_split_button1.CreateSplitButton(m_chart_id,button_text,m_subwin,x,y))
      return(false);
//--- 在库中加上控件指针
   CWndContainer::AddToElementsArray(0,m_split_button1);
   return(true);
  }
```

在编译文件并在图表上载入后您应该看到如下结果:

![图 6. 分割按钮的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-0%3A_n.rne "图 6. 分割按钮的测试。")
![[Pasted image 20260628212552.png]]
图 6. 分割按钮的测试。

分割按钮类的开发结束了，您可以下载本文的附件，以及如上面屏幕截图中展示的当前版本的EA交易。在下面的文章中，我们将会探讨创建按钮组，也就是相互关联按钮的类的开发。

### 结论

本文致力于描述简单和多功能按钮的创建，在下面的文章中，我们将加强我们的开发库，加入创建按钮组的类。

下面的档案是当前开发阶段的库文件，图片以及本文中探讨过的程序文件，可以下载后在 **MetaTrader** 终端中测试。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第三部分的文章(章节)列表:**

- [图形界面III：简单与多功能按钮(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6)
- 图形界面III：简单与多功能按钮组(第二章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2296](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F02%3B6)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2094.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2094%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (94.18 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2094%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (101.01 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[通用智能交易系统：事件模型和交易策略原型(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0149)

本文是通用智能交易模型系列文章的又一篇。这一部分详细介绍了基于数据集中处理的原始事件模型，并考虑了交易引擎CStrategy基类的结构。

[使用比尔威廉姆系统的交易信号模块](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0069)

本文描述了比尔威廉姆交易系统的规则，开发一个在图表上搜索和标记该系统模式的MQL5应用程序模块，根据找到的模式进行交易，并且也展示了在各种交易品种上的测试结果。

[图形界面III：简单与多功能按钮组(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8)

本系列的第一章是关于简单和多功能按钮的，第二篇文章将致力于相互关联的按钮组，这样在应用程序中就可以创建元件，让用户从一个集合(组)中选择一个选项。

[MеtaTrader 4 和 MATLAB Engine 的交互(虚拟 MATLAB 机)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3547)

本文探讨了 DLL 库 - 包装程序的创建，它能使 MetaTrader 4 和 MATLAB 数学桌面包进行交互。 文章对其中的&ldquo;陷阱&rdquo;以及克服的方法进行了介绍。 本文面向的读者是使用 Borland C++ Builder 6 编译器且具有 C/C++ 基础的程序员。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F26aworhz31u8a5x9x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dngupo%60omk'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_vepm'3Frgaf.lewrmbmoi%2506wto_aoltgnv%251Dtiqiv.raee'24uvm%5Dccmrakgl%251Dlewrmbmoi.rrmmm.24%2C2226%26c%3Dcdzrdboatedtcghfnfkpkmzprkxplfct%24s%3Fbg3ce54%3B8ab%60c5c5cge%3A2a3%3A1612f1c3bf704441d744517a0390a%604462642%3Ba0%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F02%3B6%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>