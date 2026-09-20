---
title: "图形界面 I: 图形界面的动画 (第三章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-07T11:18:31+00:00Z
created: 2026-06-28
description: "在前面的文章中, 我们开始开发了一个容纳控件的表单类. 在本文中, 我们将继续丰富此表单类的内容, 增加在图表区域内移动表单的方法. 接着我们会把这个界面组件与核心库整合. 而且我们会实现这样的功能, 在鼠标光标移动到表单之上时, 表单控件会改变它的颜色."
tags:
  - "clippings"
  - "mql5"
  - "gui"
  - "easyandfastgui"
triage:
  status: processed
  timeliness: reference
  type: reference
  complexity: high
see_also:
  - "[[gui/compiled/MQL图形界面I-库结构]]"
  - "[[3 Resources/People/wiki/entities/Anatoli-Kazharski-tol64]]"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_22)
- [管理图形界面](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_23)
- [移动表单的功能](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_24)
- [测试表单在图表上的移动](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_25)
- [当界面控件上有鼠标掠过时改变外观](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_26)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107!pcrv_27)

### 简介

本文是关于图形界面系列文章第一部分的续篇. 第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了库的目标. 在每章末尾会有第一部分文章的完整链接列表. 在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在本系列 [前面的文章](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106) 中, 我们开始开发了一个用于控件的表单类. 在本文中, 我们将继续开发此类, 为它加上在图表区域内移动表单的方法. 我们也会把这个界面组建与核心库整合. 而且, 我们会在鼠标掠过表单控件的时候改变它的颜色.

### 管理图形界面

把用于控件的表单附加到图表. 现在它是完全没有反应的. 我们的目标是使表单和控件对用户的操作进行回应. 为此, 我们需要追踪光标在图表中的位置. 程序必须在任何时间点都能够"识别"光标的坐标. 在MQL应用程序中, 使用默认的图表参数是不可能实现这一点的. 必须启用对光标位置和鼠标按钮点击的追踪. 回顾之前的文章, 在开发过程中, 需要使用一些图表的属性. 也就是说, 我们需要在我们的库中包含标准库的 [WndEvents.mqh](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Facjapt) 文件, 使用其中的CChart类创建它的实例.

```
//+------------------------------------------------------------------+
//|                                                    WndEvents.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Defines.mqh"
#include "WndContainer.mqh"
#include <Charts\Chart.mqh>
//+------------------------------------------------------------------+
//| Class for event handling                                         |
//+------------------------------------------------------------------+
class CWndEvents : public CWndContainer
  {
protected:
   CChart            m_chart;
  };
```

在类的构造函数中, 把对象附加到当前图表, 获取它的标识符, 然后启用它对光标位置的跟踪. 在析构函数中, 从图表上分离对象(以下代码中使用绿色高亮标出). 否则, 当程序从图表上移除时, 图表本身会被关闭.

```
//+------------------------------------------------------------------+
//| 构造函数                                                          |
//+------------------------------------------------------------------+
CWndEvents::CWndEvents(void) : m_chart_id(0),
                               m_subwin(0),
                               m_indicator_name(""),
                               m_program_name(PROGRAM_NAME)
  {
//--- 取得当前图表的ID
   m_chart.Attach();
//---  启用鼠标事件的跟踪
   m_chart.EventMouseMove(true);
  }
//+------------------------------------------------------------------+
//| 析构函数                                                          |
//+------------------------------------------------------------------+
CWndEvents::~CWndEvents(void)
  {
//--- 从图表上分离
   m_chart.Detach();
  }
```

如我们之前所说, 类中的每个控件都将需要拥有自己的事件处理函数. 现在, 在 **CWindow** 类中, 我们创建几个方法用于管理表单. 它们中的全部都会在 **CWindow::OnEvent** ()方法中调用. 让我们决定功能, 再把它们加到 **CWindow** 类中:

> 1\. 光标所在的窗口必须被定义. 这是因为一个图表可以分为几个部分, 即主图表和指标的子窗口, MQL应用程序可能是一个指标, 并非位于主窗口而是其他的子窗口中.
> 
> 2\. 如果MQL应用程序是一个指标而且不在图表的主窗口中, Y坐标就必须调整.
> 
> 3\. 鼠标左键的状态必须和按下它的地方一样, 都要做检查. 共有四种状态:

> - **NOT\_PRESSED** — 按键没有被按下.
> - **PRESSED\_OUTSIDE** — 按键在表单之外的区域被按下.
> - **PRESSED\_INSIDE\_WINDOW** — 按键在表单区域内被按下.
> - **PRESSED\_INSIDE\_HEADER** — 按键在表单头部按下.
> 
> 把 **ENUM\_WMOUSE\_STATE** 枚举加到 **Enums.mqh** 文件中:
> 
> ```
> //+------------------------------------------------------------------+
> //|                                                        Enums.mqh |
> //|                        Copyright 2015, MetaQuotes Software Corp. |
> //|                                              http://www.mql5.com |
> //+------------------------------------------------------------------+
> //+-------------------------------------------------------------------+
> //|表单中鼠标左键状态的枚举                                              |                                       
> //+-------------------------------------------------------------------+
> enum ENUM_WMOUSE_STATE
>   {
>    NOT_PRESSED           =0,
>    PRESSED_OUTSIDE       =1,
>    PRESSED_INSIDE_WINDOW =2,
>    PRESSED_INSIDE_HEADER =3
>   };
> ```

> 4\. 如果光标在表单区域之内或者在某个界面组件范围之内, 图表的滚动和交易水平管理必须被禁止.
> 
> 5\. 如果光标在表头的抓取区域之内并且按下了鼠标左键, 程序就进入表单坐标更新模式.
> 
> 6\. 当坐标被更新时, 需要检测它是否离开了图表区域以及是否需要作对应的调整. 这种检测要求 (1) [CChart](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Facjapt) 类的对象, (2) 变量以及获取图表大小的方法.
> 
> 7\. 还需要一个方法来相对更新的坐标移动所有的对象. 为此, 之前我们声明了 **CWindow::Moving** () 虚方法. 现在, 我们要实现它了.
> 
> 8\. 我们还需要一些辅助方法来识别光标在表头区域的位置以及用于对一些辅助变量清零.
> 
> 9\. 需要对窗口中所有的对象跟踪鼠标的焦点. 因而, 我们需要在此创建一个方法用于检测.
> 
> 10\. 并不是所有时候都需要图形界面能够在图表上移动. 因此, 我们增加了一个方法用于启用/禁用这个功能.

### 移动表单的功能

让我们实现以上讨论的功能. 在类中, 增加所需方法的声明以及一些变量. 包含 [CChart](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Facjapt) 类的文件并且创建它的实例 (黄色高亮):

```
//+------------------------------------------------------------------+
//|                                                       Window.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include <Charts\Chart.mqh>
//+------------------------------------------------------------------+
//| 用于创建控件的表单类                                                |
//+------------------------------------------------------------------+
class CWindow : public CElement
  {
private:
   CChart            m_chart;
   //--- 能否在图表上移动窗口
   bool              m_movable;
   //--- 图表大小
   int               m_chart_width;
   int               m_chart_height;
   //--- 变量, 用于位置安排
   int               m_prev_x;        // 点击时的固定点X
   int               m_prev_y;        // 点击时的固定点Y
   int               m_size_fixing_x; // 两点之前横向(X)距离
   int               m_size_fixing_y; // 两点之间纵向(Y)距离
   //--- 鼠标点击时的鼠标状态
   ENUM_WMOUSE_STATE m_clamping_area_mouse;
   //---
public:
   //--- 能否移动窗口
   bool              Movable(void)                                     const { return(m_movable);                  }
   void              Movable(const bool flag)                                { m_movable=flag;                     }
   //--- 取得图表大小
   void              SetWindowProperties(void);
   //--- 把Y坐标转换为相对坐标
   void              YToRelative(const int y);
   //--- 在表头区域内检测光标 
   bool              CursorInsideCaption(const int x,const int y);
   //--- 变量清零
   void              ZeroPanelVariables(void);
   //--- 验证鼠标焦点
   void              CheckMouseFocus(const int x,const int y,const int subwin);
   //--- 验证鼠标左键状态
   void              CheckMouseButtonState(const int x,const int y,const string state);
   //--- 设置图表模式
   void              SetChartState(const int subwindow_number);
   //--- 更新表单坐标
   void              UpdateWindowXY(const int x,const int y);
  };
```

**SetWindowProperties** (), **YToRelative** (), **CursorInsideCaption** () 和 **ZeroPanelVariables** () 方法的代码比较简单, 不需要更多解释了. 唯一我想请您注意的是传给 [CChart](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Facjapt) 对象方法的子窗口编号 (**m\_subwin**). 它必须是包含MQL程序的子窗口的编号.

```
//+------------------------------------------------------------------+
//| 取得图表大小                                                       |
//+------------------------------------------------------------------+
void CWindow::SetWindowProperties(void)
  {
//--- 取得图表窗口的宽度和高度
   m_chart_width  =m_chart.WidthInPixels();
   m_chart_height =m_chart.HeightInPixels(m_subwin);
  }
//+------------------------------------------------------------------+
//| 把Y坐标转换为相对坐标                                               |
//+------------------------------------------------------------------+
int CWindow::YToRelative(const int y)
  {
//--- 取得图表顶端到指标子窗口的纵向距离
   int chart_y_distance=m_chart.SubwindowY(m_subwin);
//--- 把Y坐标转换为相对坐标
   return(y-chart_y_distance);
  }
//+------------------------------------------------------------------+
//| 验证光标在窗口标题区域的位置                                         |
//+------------------------------------------------------------------+
bool CWindow::CursorInsideCaption(const int x,const int y)
  {
   return(x>m_x && x<X2()-m_right_limit && y>m_y && y<m_caption_bg.Y2());
  }
//+------------------------------------------------------------------+
//| 变量清零, 有关窗口的位置和                                          
//| 鼠标按键的状态                                                     |
//+------------------------------------------------------------------+
void CWindow::ZeroPanelVariables(void)
  {
   m_prev_x              =0;
   m_prev_y              =0;
   m_size_fixing_x       =0;
   m_size_fixing_y       =0;
   m_clamping_area_mouse =NOT_PRESSED;
  }
```

在表单中鼠标左键状态的验证位于 **CWindow::CheckMouseButtonState** () 方法中. 为此, 需要传入光标的坐标以及图表事件模式的字符串型参数. 当 [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件被处理时, 字符串参数显示了鼠标左键的状态. 这说明如果鼠标按键松开, 参数的数值是"0", 如果鼠标按键按下, 它的数值就是"1".

如果案件松开, 所有的辅助变量都被清零, 此方法的工作就完成了. 如果按键被按下, 就在 **CWindow::CheckMouseButtonState** () 方法中检查它是否在图表区域之内发生. 如果此案件已经有了记录过, 在图表的某区域内按下的状态, 程序就会退出此方法 ([return](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fmpgrctmrq%2Fpevupn)).

```
//+------------------------------------------------------------------+
//| 验证鼠标按键的状态                                                  |
//+------------------------------------------------------------------+
void CWindow::CheckMouseButtonState(const int x,const int y,const string state)
  {
//--- 如果按钮被松开
   if(state=="0")
     {
      //--- 变量清零
      ZeroPanelVariables();
      return;
     }
//--- 如果按键被按下
   if(state=="1")
     {
      //--- 如果状态已经被记录就离开
      if(m_clamping_area_mouse!=NOT_PRESSED)
         return;
      //--- 面板区域之外
      if(!CElement::MouseFocus())
         m_clamping_area_mouse=PRESSED_OUTSIDE;
      //--- 面板区域之内
      else
        {
         //--- 在表头之内
         if(CursorInsideCaption(x,y))
           {
            m_clamping_area_mouse=PRESSED_INSIDE_HEADER;
            return;
           }
         //--- 如果在窗口区域之内
         m_clamping_area_mouse=PRESSED_INSIDE_WINDOW;
        }
     }
  }
```

对于基本的对象类, 定义对象边界的方法都在 **Objects.mqh** 文件中提供. 这些方法用于简单快速地确认对象是否位于鼠标的焦点之中. 焦点是否位于表单中以及表单对象中可以使用 **CWindow** 类中的 **CheckMouseFocus** () 方法来检测. 光标的当前坐标和光标所在的子窗口编号作为参数传给此方法. 晚些时候我们会演示取得光标所在子窗口编号的方法.

```
//+------------------------------------------------------------------+
//| 确认鼠标焦点                                                       |
//+------------------------------------------------------------------+
void CWindow::CheckMouseFocus(const int x,const int y,const int subwin)
  {
//--- 如果光标在程序窗口区域之内
   if(subwin==m_subwin)
     {
      //--- 如果当前不是在表单的替换模式中
      if(m_clamping_area_mouse!=PRESSED_INSIDE_HEADER)
        {
         //--- 确认光标位置
         CElement::MouseFocus(x>m_x && x<X2() && y>m_y && y<Y2());
         //---
         m_button_rollup.MouseFocus(x>m_button_rollup.X() && x<m_button_rollup.X2() && 
                                    y>m_button_rollup.Y() && y<m_button_rollup.Y2());
         m_button_close.MouseFocus(x>m_button_close.X() && x<m_button_close.X2() && 
                                   y>m_button_close.Y() && y<m_button_close.Y2());
         m_button_unroll.MouseFocus(x>m_button_unroll.X() && x<m_button_unroll.X2() && 
                                    y>m_button_unroll.Y() && y<m_button_unroll.Y2());
        }
     }
   else
     {
      CElement::MouseFocus(false);
     }
  }
```

检验表单焦点和鼠标按键的状态与图表关系的结果可以指出, 图表的滚动和交易水平的管理应该被启用还是禁止. 如果图表的这些属性没有被禁用, 当光标在表单上的时候, 图表会跟着表单一起滚动, 交易水平也会跟着改变, 而这些是不需要的.

```
//+------------------------------------------------------------------+
//| 设置图表状态                                                       |
//+------------------------------------------------------------------+
void CWindow::SetChartState(const int subwindow_number)
  {
//--- 如果光标在面板区域之内并且鼠标按键松开或者
//    鼠标按键在表单或表头区域内被按下
   if((CElement::MouseFocus() && m_clamping_area_mouse==NOT_PRESSED) || 
      m_clamping_area_mouse==PRESSED_INSIDE_WINDOW ||
      m_clamping_area_mouse==PRESSED_INSIDE_HEADER)
     {
      //--- 禁用滚动和交易水平的管理
      m_chart.MouseScroll(false);
      m_chart.SetInteger(CHART_DRAG_TRADE_LEVELS,false);
     }
//--- 如果光标在窗口区域之外, 启用管理
   else
     {
      m_chart.MouseScroll(true);
      m_chart.SetInteger(CHART_DRAG_TRADE_LEVELS,true);
     }
  }
```

在 **CWindow::UpdateWindowXY** () 方法中进行窗口坐标的更新. 在开始的时候, 会检测窗口的模式. 如果表单是在固定模式中, 程序会退出此方法, 因为没有必要更新坐标. 然后, 如果鼠标按键被按下, 就记录当前的坐标, 同时也记录表单的边缘和光标的距离, 然后计算图表区域的范围限制, 再计算终点位置, 如果有必要, 就更新表单的坐标. 您可以学习研究以下的代码:

```
//+------------------------------------------------------------------+
//| 更新窗口坐标                                                       |
//+------------------------------------------------------------------+
void CWindow::UpdateWindowXY(const int x,const int y)
  {
//--- 如果表单是固定模式
   if(!m_movable)
      return;
//---
   int new_x_point =0; // 新的 X 坐标
   int new_y_point =0; // 新的 Y 坐标
//--- 范围限制
   int limit_top    =0;
   int limit_left   =0;
   int limit_bottom =0;
   int limit_right  =0;
//--- 如果鼠标按键被按下
   if((bool)m_clamping_area_mouse)
     {
      //--- 保存光标当前的XY坐标
      if(m_prev_y==0 || m_prev_x==0)
        {
         m_prev_y=y;
         m_prev_x=x;
        }
      //--- 保存表单边缘和光标的距离
      if(m_size_fixing_y==0 || m_size_fixing_x==0)
        {
         m_size_fixing_y=m_y-m_prev_y;
         m_size_fixing_x=m_x-m_prev_x;
        }
     }
//--- 设置限制
   limit_top    =y-::fabs(m_size_fixing_y);
   limit_left   =x-::fabs(m_size_fixing_x);
   limit_bottom =m_y+m_caption_height;
   limit_right  =m_x+m_x_size;
//--- 如果图表的边界没有向下/向上/向左/向右超过边界
   if(limit_bottom<m_chart_height && limit_top>=0 && 
      limit_right<m_chart_width && limit_left>=0)
     {
      new_y_point =y+m_size_fixing_y;
      new_x_point =x+m_size_fixing_x;
     }
//--- 如果图表边界被超过
   else
     {
      if(limit_bottom>m_chart_height) // > 向下
        {
         new_y_point =m_chart_height-m_caption_height;
         new_x_point =x+m_size_fixing_x;
        }
      if(limit_top<0) // > 向上
        {
         new_y_point =0;
         new_x_point =x+m_size_fixing_x;
        }
      if(limit_right>m_chart_width) // > 向右
        {
         new_x_point =m_chart_width-m_x_size;
         new_y_point =y+m_size_fixing_y;
        }
      if(limit_left<0) // > 向左
        {
         new_x_point =0;
         new_y_point =y+m_size_fixing_y;
        }
     }
//--- 如果有移动, 就更新坐标
   if(new_x_point>0 || new_y_point>0)
     {
      //--- 调整表单坐标
      m_x =(new_x_point<=0)? 1 : new_x_point;
      m_y =(new_y_point<=0)? 1 : new_y_point;
      //---
      if(new_x_point>0)
         m_x=(m_x>m_chart_width-m_x_size-1) ? m_chart_width-m_x_size-1 : m_x;
      if(new_y_point>0)
         m_y=(m_y>m_chart_height-m_caption_height-1) ? m_chart_height-m_caption_height-2 : m_y;
      //--- 固定点清零
      m_prev_x=0;
      m_prev_y=0;
     }
  }
```

在 **CWindow** 类的 **OnEvent** () 图表事件处理函数中, 当处理鼠标移动事件时([CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq)), 子窗口编号可以通过 [ChartXYToTimePrice](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fahcrv_mpgrctkols-cjaptzyvovioerrkcg) () 函数获得. 如果函数返回 **true**, 则使用之前创建的 **CWindow::YToRelative** () 方法来得到一个相对的Y坐标, 然后再循环迭代以上所有的方法:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                                                   |
//+------------------------------------------------------------------+
void CWindow::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      int      x      =(int)lparam; // X轴上的坐标
      int      y      =(int)dparam; // Y轴上的坐标
      int      subwin =WRONG_VALUE; // 光标所在的窗口编号
      datetime time   =NULL;        // 根据X坐标对应的时间
      double   level  =0.0;         // 根据Y坐标对应的水平 (价格) 
      int      rel_y  =0;           // 用于标识相对Y坐标
      //--- 取得光标位置
      if(!::ChartXYToTimePrice(m_chart_id,x,y,subwin,time,level))
         return;
      //--- 取得相对 Y 坐标
      rel_y=YToRelative(y);
      //--- 验证和保存鼠标按键状态
      CheckMouseButtonState(x,rel_y,sparam);
      //--- 验证鼠标焦点
      CheckMouseFocus(x,rel_y,subwin);
      //--- 设置图表状态
      SetChartState(subwin);
      //--- 如果管理被移交到窗口, 标记它的位置
      if(m_clamping_area_mouse==PRESSED_INSIDE_HEADER)
        {
         //--- 更新窗口坐标
         UpdateWindowXY(x,rel_y);
        }
      return;
     }
  }
```

为了测试表单的移动, 只需要实现剩下的 **CWindow::Moving** () 方法了. 可能看起来这个方法将被直接用于类的内部事件处理函数中, 在 **UpdateWindowXY** () 方法之后, 但是其实并非如此. 如果我们当表单上没有其他控件时, 现在就做, 结果会非常好. 根据这个逻辑, 在其他控件类中, 您还是需要做同样的事情. 结果, 当表单中有了很多控件并且需要移动时, 所有控件将一起移动, 会有某种形式的延迟. 这就是不好的结果了.

出现这种情况的原因是, 如果每个移动界面控件的方法都在内部处理函数中实现, 所有的控件都要根据不同条件作分类和检测. 这会导致延迟. 为了使全部控件能够同时移动, 在 **Moving** () 方法之间必须不能有其他操作. 那可以通过从 **CWndContainer** 类中派生 **CWndEvents** 类, 它可以访问所有保存的对象指针.

**CWindow::Moving** () 方法的内容包含两个部分. 首先, 组成表单的所有对象的坐标都被保存, 然后对象的坐标在图表上更新. 类似地, **Moving** () 方法在晚些时候将被实现于各个控件中.

```
//+------------------------------------------------------------------+
//| 移动窗口                                                          |
//+------------------------------------------------------------------+
void CWindow::Moving(const int x,const int y)
  {
//--- 在变量中保存坐标
   m_bg.X(x);
   m_bg.Y(y);
   m_caption_bg.X(x);
   m_caption_bg.Y(y);
   m_icon.X(x+m_icon.XGap());
   m_icon.Y(y+m_icon.YGap());
   m_label.X(x+m_label.XGap());
   m_label.Y(y+m_label.YGap());
   m_button_close.X(x+m_button_close.XGap());
   m_button_close.Y(y+m_button_close.YGap());
   m_button_unroll.X(x+m_button_unroll.XGap());
   m_button_unroll.Y(y+m_button_unroll.YGap());
   m_button_rollup.X(x+m_button_rollup.XGap());
   m_button_rollup.Y(y+m_button_rollup.YGap());
   m_button_tooltip.X(x+m_button_tooltip.XGap());
   m_button_tooltip.Y(y+m_button_tooltip.YGap());
//--- 更新图形对象的坐标
   m_bg.X_Distance(m_bg.X());
   m_bg.Y_Distance(m_bg.Y());
   m_caption_bg.X_Distance(m_caption_bg.X());
   m_caption_bg.Y_Distance(m_caption_bg.Y());
   m_icon.X_Distance(m_icon.X());
   m_icon.Y_Distance(m_icon.Y());
   m_label.X_Distance(m_label.X());
   m_label.Y_Distance(m_label.Y());
   m_button_close.X_Distance(m_button_close.X());
   m_button_close.Y_Distance(m_button_close.Y());
   m_button_unroll.X_Distance(m_button_unroll.X());
   m_button_unroll.Y_Distance(m_button_unroll.Y());
   m_button_rollup.X_Distance(m_button_rollup.X());
   m_button_rollup.Y_Distance(m_button_rollup.Y());
   m_button_tooltip.X_Distance(m_button_tooltip.X());
   m_button_tooltip.Y_Distance(m_button_tooltip.Y());
  }
```

### 测试表单在图表上的移动

所有事件都在 **CWndEvents::ChartEvent** () 方法中处理, 之前我们已经创建好了, 现在还是空的. 首先, 我们需要检查窗口指针数组的大小. 如果它是空的, 就没有必要继续下去, 直接退出 ([return](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fmpgrctmrq%2Fpevupn)). 然后, 代表图表事件参数的类成员将被初始化. 我们现在使用两个函数用于处理事件: (1) 检查每个控件的事件处理使用 **CWndEvents::CheckElementsEvents** (), 另外 (2)使用 **CWndEvents::ChartEventMouseMove** () 来跟踪鼠标光标.

这样, 现在 **CWndEvents::ChartEvent** () 方法的内容应该如以下代码所示:

```
//+------------------------------------------------------------------+
//| 事件处理程序                                                       |
//+------------------------------------------------------------------+
void CWndEvents::ChartEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 如果数组为空, 退出
   if(CWndContainer::WindowsTotal()<1)
      return;
//--- 初始化事件参数成员变量
   InitChartEventsParams(id,lparam,dparam,sparam);
//--- 验证界面控件事件
   CheckElementsEvents();
//--- 鼠标移动事件
   ChartEventMouseMove();
  }
```

**CWndEvents::CheckElementsEvents** () 和 **CWndEvents::ChartEventMouseMove** () 方法的实现部分现在是空的. 检查界面控件的事件现在是在一个循环中进行的. 我们会在其中顺序调用所有控件的 **OnEvent** () 处理函数. 现在, 我们的测试文件只含有一个窗口, 我们会临时使用CWndEvents中窗口数组中索引为零的窗口. 当我们继续进行多窗口模式开发时就需要改变了.

```
//+------------------------------------------------------------------+
//| 验证控件事件                                                       |
//+------------------------------------------------------------------+
void CWndEvents::CheckElementsEvents(void)
  {
   int elements_total=CWndContainer::ElementsTotal(0);
   for(int e=0; e<elements_total; e++)
      m_wnd[0].m_elements[e].OnEvent(m_id,m_lparam,m_dparam,m_sparam);
  }
```

让我们在 **CWndEvents** 类中创建一个方法来控制控件在图表上的移动. 我们把它命名为 **MovingWindow** (). 首先, 在函数中要执行表单的移动, 然后再移动上面的所有控件.

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 移动窗口
   void              MovingWindow(void);
  };
//+------------------------------------------------------------------+
//| 移动窗口                                                          |
//+------------------------------------------------------------------+
void CWndEvents::MovingWindow(void)
  {
//--- 移动窗口
   int x=m_windows[0].X();
   int y=m_windows[0].Y();
   m_windows[0].Moving(x,y);
//--- 移动控件
   int elements_total=CWndContainer::ElementsTotal(0);
   for(int e=0; e<elements_total; e++)
      m_wnd[0].m_elements[e].Moving(x,y);
  }
```

现在, 这些代码可以加到 **CWndEvents::ChartEventMouseMove** () 方法中, 显示如下. 不要忘记每次当对象在图表的坐标更新后重绘图表, 否则变化都不会反映出来.

```
//+------------------------------------------------------------------+
//| 鼠标移动图表事件                                                   |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventMouseMove(void)
  {
//--- 如果不是光标移动事件, 退出处理
   if(m_id!=CHARTEVENT_MOUSE_MOVE)
      return;
//--- 移动窗口
   MovingWindow();
//--- 重绘图表
   m_chart.Redraw();
  }
```

库的开发过程已经到了最后一步, 可以测试窗口在图表上的移动了. 在 **CWindow::OnEvent** () 方法的函数体中, 使用代码在图表左上角显示数据, 就能够实时显示以下内容:

- 光标坐标;
- 相对Y坐标;
- 表单坐标;
- 光标所在图表的窗口数量;
- MQL程序所在图表的窗口数量;
- 鼠标左键模式.

测试以后, 这些代码可以删除.

```
::Comment("x: ",x,"\n",
                "y: ",y,"\n",
                "rel_y: ",rel_y,"\n",
                "w.x: ",m_x,"\n",
                "w.y: ",m_y,"\n",
                "subwin: ",subwin,"\n",
                "m_subwin: ",m_subwin,"\n",
                "clamping mode: ",m_clamping_area_mouse);
```

编译项目并把程序载入图表. 为了验证程序能够正确地跟踪光标所在图表窗口, 以及任何指标, 包括不在图表主窗口中载入的状况.

我基本确定您在程序载入图表之后将不能移动窗口了. 原因就是在 **CWindow** 类的构造函数中, **m\_movable** 变量是使用 **false** 值来初始化的, 它的意思是用户无法在图表中移动表单. 这就是为什么MQL程序的开发人员必须在代码中指定是否需要表单的移动.

在 **CProgram** 类的 **CreateWindow** () 方法中, 按照以下代码加上一行, 编译文件并再次测试程序.

```
//+------------------------------------------------------------------+
//| 创建用于控件的表单                                                  |
//+------------------------------------------------------------------+
bool CProgram::CreateWindow(const string caption_text)
  {
//--- 在窗口数组中增加一个窗口指针
   CWndContainer::AddWindow(m_window);
//--- 坐标
   int x=1;
   int y=1;
//--- 属性
   m_window.Movable(true);
   m_window.XSize(200);
   m_window.YSize(200);
//--- 创建一个表单
   if(!m_window.CreateWindow(m_chart_id,m_subwin,caption_text,x,y))
      return(false);
//---
   return(true);
  }
```

现在, 应该没有什么问题阻止表单的移动了:

![图 1. 在图表上测试表单的移动](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-13_niehv.rne "图 1. 在图表上测试表单的移动")
![[Pasted image 20260628182042.png]]
图 1. 测试表单在图表上的移动

有的时候图表窗口的大小必须能改变. 在这种时候, 会产生 [CHARTEVENT\_CHART\_CHANGE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 的修改图表属性的事件. 此时, 我们还没有使用任何一种方法来跟踪表单部分或全部超出图表窗口的情形. 为了避免这一点, 我们也必须在 **CWindow::OnEvent** () 图表事件处理函数中检测此类事件.

因为这个事件在图表滚动时也会产生, 为了避免进行过多没有必要的操作, 我们需要检查在事件发生时鼠标左键有没有点击. 如果鼠标左键松开了, 我们就取得图表的大小并检查是否超出了图表窗口的限制, 然后我们再调整坐标. 以下是需要添加到 **CWindow::OnEvent** () 方法末尾, 在处理过其它事件之后的代码:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                                                   |
//+------------------------------------------------------------------+
void CWindow::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 图表属性改变的事件
   if(id==CHARTEVENT_CHART_CHANGE)
     {
      //--- 如果是松开按键
      if(m_clamping_area_mouse==NOT_PRESSED)
        {
         //--- 取得窗口大小
         SetWindowProperties();
         //--- 调整坐标
         UpdateWindowXY(m_x,m_y);
        }
      return;
     }
  }
```

以上工作的结果是我们可以移动用于控件的表单了. 然后, 我们需要加入按钮用于最小化和最大化窗口. 另外, 这些按钮也要对鼠标光标移动做出回应, 这样用户就知道它们不只是图标或者设计元件了.

### 当界面控件上有鼠标掠过时改变外观

之前我们已经考虑了 **CElement** 类的实现, 它是所有控件的基类. 我们创建了 [**CElement::ChangeObjectColor**](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!CjalggO%60jgcvCmlmr) () 方法, 用于当光标掠过它时改变颜色. 是时候使用一种机制使我们可以在工作中使用它了. 增加这样的功能需要一个计时器. 它在MQL程序的设置中默认是禁用的. 由应用程序的开发人员根据设计要求来决定计时器是否启用.

为了启动计时器, MQL 语言对于使用不同频率具有两个函数: [EventSetTimer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltqevtkmgr) () 和 [EventSetMillisecondTimer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltqevmklniqeaoldvioep) (). 第一个允许设置时间间隔大于一秒. 这不符合我们的要求, 因为一秒钟对于控件在光标掠过时改变外观的动作来说太长了. 改变应该是立刻进行而没有延迟的. 我们将使用 [EventSetMillisecondTimer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltqevmklniqeaoldvioep) () 函数, 它支持以毫秒级的间隔设置计时器. 根据 MQL 参考资料, 使用这个函数设置的最小时间间隔可以是10到16毫秒. 这对实现我们的计划足够了.

在我们界面库的 **Defines.mqh** 文件中加入一个代表时间步长的常数:

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//--- 时间步长 (毫秒)
#define TIMER_STEP_MSC (16)
```

您可能会问个逻辑性的问题例如"这是不是太频繁了?"以及"程序会消耗很多资源吗?". 我们将在测试了这一思路后再回答这些问题.

在 **CWndEvents** 类中启用计时器, 它是我们开发库的核心. 为此, 在它的构造函数和析构函数中增加以下代码行:

```
//+------------------------------------------------------------------+
//| 构造函数                                                          |
//+------------------------------------------------------------------+
CWndEvents::CWndEvents(void)
  {
//--- 启用计时器
   if(!::MQLInfoInteger(MQL_TESTER))
      ::EventSetMillisecondTimer(TIMER_STEP_MSC);
  }
//+------------------------------------------------------------------+
//| 析构函数                                                          |
//+------------------------------------------------------------------+
CWndEvents::~CWndEvents(void)
  {
//--- 删除计时器
   ::EventKillTimer();
  }
```

在 **CWndEvents** 类的构造函数中, 计时器只有在策略测试器之外时才会被启用. 我们的界面库现在不能在测试器下运行, 因为现在它在操作图形对象上有些限制. 另外, 测试器中的计时器最小间隔是一秒, 就算您使用了 [EventSetMillisecondTimer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltqevmklniqeaoldvioep) () 函数也一样. 在析构函数中, 计时器被禁用, 使用的是 [EventKillTimer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltiinlvioep) () 函数.

在每个控件类中, 都会有自己实现的 **OnEventTimer** () 方法, 为此在 **CElement** 类中有一个这个名字的虚方法. 和 **CWndEvents::CheckElementsEvents** () 方法类似, 我们在那里使用 **OnEvent** () 方法迭代每个控件, 我们必须创建一个方法以使得程序可以迭代 **OnEventTimer** () 方法. 让我们称它为 **CheckElementsEventsTimer** ().

**CWndEvents::CheckElementsEventsTimer** () 方法的声明和实现:

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 根据计时器检查所有控件的事件
   void              CheckElementsEventsTimer(void);
  };
//+------------------------------------------------------------------+
//| 根据计时器检查所有控件的事件                                         |
//+------------------------------------------------------------------+
void CWndEvents::CheckElementsEventsTimer(void)
  {
   int elements_total=CWndContainer::ElementsTotal(0);
   for(int e=0; e<elements_total; e++)
      m_wnd[0].m_elements[e].OnEventTimer();
  }
```

然后, 这个方法必须在 **CWndEvents::OnTimerEvent** () 方法中调用, 并且在最开始检查窗口数组的大小, 就像 **CWndEvents::ChartEvent** () 方法中做得那样.

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CWndEvents::OnTimerEvent(void)
  {
//--- 如果数组为空, 退出  
   if(CWndContainer::WindowsTotal()<1)
      return;
//--- 根据计时器
   CheckElementsEventsTimer();
//--- 重绘图表
   m_chart.Redraw();
  }
```

在 **CProgram** 类中, MQL应用程序的开发人员会在其中创建图形界面, 在 **CProgram::OnTimerEvent** () 方法中, 它与主程序文件相连, 只需调用同名的基类方法就可以, 代码如下所示:

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CProgram::OnTimerEvent(void)
  {
   CWndEvents::OnTimerEvent();
  }
```

通过这种方法, 在 **OnEventTimer** () 方法中所有控件的操作就可以在程序的计时器事件流中了.

我们现在还没有全部准备好测试. 我们开发的这个库现在只包含一个界面组件 - 一个用于控件的表单, 即 **CWindow** 类. 我们将在其中创建所需的功能, 会加到 **OnEventTimer** () 方法的本地版本中.

修改颜色的名字将称为 **CWindow::ChangeObjectsColor** (). 以下是它在 **CWindow** 类中的声明和实现:

```
class CWindow: public CElement
  {
private:
   //--- 修改表单对象的颜色
   void              ChangeObjectsColor(void);
  };
//+------------------------------------------------------------------+
//| 当光标掠过对象时改变它的颜色                                         |
//+------------------------------------------------------------------+
void CWindow::ChangeObjectsColor(void)
  {
//--- 修改按钮的图标
   m_button_rollup.State(m_button_rollup.MouseFocus());
   m_button_unroll.State(m_button_unroll.MouseFocus());
   m_button_close.State(m_button_close.MouseFocus());
//--- 修改表头的颜色
   CElement::ChangeObjectColor(m_caption_bg.Name(),CElement::MouseFocus(),OBJPROP_BGCOLOR,
                               m_caption_bg_color,m_caption_bg_color_hover,m_caption_color_bg_array);
  }
```

您可以在代码中看到, **CWindow::ChangeObjectsColor** () 方法中没有什么复杂的. **MouseFocus** () 方法会返回所有对象中有光标焦点的那个, 它是当光标在图表上移动时, 在 **CWindow::CheckMouseFocus** () 方法中作检查的. 早些时候, 有两个图标载入到对象中, 以作为按钮的角色. 它们可以使用 **CChartObjectBmpLabel::State** () 方法来切换设置它们的状态. **CElement::ChangeObjectColor** () 方法可以操作对象指定部分的颜色.

在本例中, 当光标在窗口区域内时, 表头背景色会发生改变. 如果顺序使用对象的名称作为第一个参数, 调用 **CElement::ChangeObjectColor()** 方法, 表头边框的颜色或者和背景色一起也可以发生改变.

现在剩下的唯一事情就是在本地计时器中放入对此方法的调用了:

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CWindow::OnEventTimer(void)
  {
//--- 修改表单对象的颜色
   ChangeObjectsColor();
  }
```

编译项目中所有改过的文件, 载入程序以便在图表上测试. 现在, 当光标在表单对象之上时, 对象的颜色就会发生改变了.

![图 2. 测试对象对于鼠标光标的反应.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-10_niehv.rne "图 2. 测试对象对于鼠标光标的反应.")
![[Pasted image 20260628182102.png]]
图 2. 测试对象对于鼠标光标的反应

### 结论

在本文中, 我们引入了一些更多的变化, 使得我们能够在图表上移动表单. 表单上的控件现在能够对鼠标光标的移动进行回应了. 在下面的文章中, 我们将继续开发 **CWindow** 类. 我们会使它的方法更加丰富, 用于通过点击它的控件来管理表单.

您可以从此系列的第一部分下载资料, 这样您就可以测试看它如何工作了. 如果您对如何使用资料中的文件有问题, 您可以参考列表文章中对库开发的详细描述, 并且在对应文章的注释部分问问题.

**第一部分的文章列表 (章节):**

- [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I: 用于控件的表单 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I: 图形界面的动画 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- 图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2127](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0107)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2325.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2325%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (51.67 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2325%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (51.59 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-772%3B4)** (5)

![Pavel Trofimov](https://c.mql5.com/avatar/2021/4/6075DAED-FF88.jpg "Pavel Trofimov")

| 25 12月 2015 在 17:29

阿纳托利编码水平、质量--一切都达到了我个人难以置信的高度。非常感谢你的出色工作！我们期待着余下的部分！

![netzer](https://c.mql5.com/avatar/avatar_na2.png "netzer")

| 22 6月 2016 在 20:41

你好，阿纳托利、

我对使用图形界面非常感兴趣。但它在我的应用程序中不起作用。面板窗口无法移动。在示例程序 "InfoPanel.mq5 "中（将 [属性](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Frrgppoqeqsmr-cmmrinavimn "MQL5 文档：程序属性 (#property)") "Movable "设置为 true）也是如此。面板出现了，但不能移动。也许您知道问题出在哪里？(我使用的是 Windows10 和 Metatrader 5.0 版本 1340）。

罗兰

![netzer](https://c.mql5.com/avatar/avatar_na2.png "netzer")

| 24 6月 2016 在 11:54

大家好、

我从上一部分（4）获得了源代码。现在一切正常。

致罗兰

![Samuel Manoel De Souza](https://c.mql5.com/avatar/2026/2/69930246-2466.jpg "Samuel Manoel De Souza")

| 31 3月 2020 在 00:43

使用标准库处理鼠标移动的方法是什么？我使用位于 Experts\\Examples\\Controls 的文件进行了测试。  
当我只使用.ChartEvent(...) 函数时，ON\_MOUSE\_ [FOCUS](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cniqttigw "标准库：CListView 类") \_SET 事件不会被处理。  
当我使用.OnEvent(...) 函数时，ON\_MOUSE\_FOCUS\_SET 事件得到了处理，但我无法移动窗口。  
当我同时使用这两个函数（先调用.ChartEvent() 然后再调用.OnEvent()）时，ON\_MOUSE\_FOCUS\_SET 事件得到了处理，但当我单击递增和递减按钮时，它的变化超过了一步。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F1%2F111%2Fkmcgg_%5D66.rne)

```
virtual bool      OnItemFocusSet(const int index);
   //--- 重新绘制
   bool              Redraw(void);
   bool              RowState(const int index,const bool select);
   bool              CheckView(void);
  };
//+------------------------------------------------------------------+
//| 图表事件的通用处理程序|
//+------------------------------------------------------------------+
EVENT_MAP_BEGIN(CListView)
ON_INDEXED_EVENT(ON_CLICK,m_rows,OnItemClick)
ON_INDEXED_EVENT(ON_MOUSE_FOCUS_SET,m_rows,OnItemFocusSet)
EVENT_MAP_END(CWndClient)
```

```
bool CListView::OnItemFocusSet(const int index)
  {
//--- 选择 "行"
   Select(index+m_offset);
//--- 发送通知
   EventChartCustom(CONTROLS_SELF_MESSAGE,ON_CHANGE,m_id,0.0,m_name);
//--- 已处理
   return(true);
  }
```

![SERGEI NAIDENOV](https://c.mql5.com/avatar/2019/11/5DE2C04F-1280.jpg "SERGEI NAIDENOV")

| 14 2月 2025 在 21:44

这个例子非常有趣，对个人成长很有帮助:)))))))非常感谢作者！  
我有一个问题：当改变时间框架（重新初始化）时，图块会飞向左上角（x=0，y=0）......如何正确实现保存图块的当前坐标？  
  
HI: 在我的脑海中有 2 种变体：  
1) 将坐标写入 [全局变量](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Ftapicbneq%2Felmbcl "MQL5 文档：全局变量")...  
2) 写入文件...  
3) 很好奇您对此问题的专业解决方案！您是如何实现的？

[图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)

在本文中, 我们将继续开发CWindow类, 增加它的类方法, 可以通过点击它的控件来对它进行管理. 我们将可以通过表单按钮来关闭程序, 也会实现表单的最小化和最大化功能.

[在指标中添加声音提醒](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3468)

如何为日常使用创建"语音"指标。

[图形界面 I：库结构(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)

本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。

[什么是马丁格尔?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3466)

人们使用马丁格尔赌博策略进行交易或者滥用尖峰和类似方法时所出现的各种错觉的简短描述。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fvq5a0k0nizq41754x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dfmrwm'2D469111%26c%3Djhspectkxqtcptpjpposzwsknojeftoj%24s%3F977%605g5g50e%3A5%601cd2c%605%3A6af%60d7500f8%604427970%3B3590ef06af07156ce1dd9%3A%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0107%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>