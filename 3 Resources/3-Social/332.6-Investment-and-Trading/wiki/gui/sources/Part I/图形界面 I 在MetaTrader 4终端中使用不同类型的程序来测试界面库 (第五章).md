---
title: "图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-10T13:26:22+00:00Z
created: 2026-06-28
description: "在图形界面系列的第一部分前面的章节中, 我们已经丰富了表单类, 可以通过按下其中的控件来管理表单. 在本文中, 我们将使用不同类型的MQL程序, 例如指标和脚本程序, 来测试我们的成果. 因为此函数库被设计为跨平台的, 因而它可以用于所有MetaTrader平台, 我们也会在MetaTrader 4中测试它."
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109!pcrv_22)
- [在指标中使用表单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109!pcrv_23)
- [在脚本程序中使用表单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109!pcrv_24)
- [在 MetaTrader 4中使用界面库](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109!mgtctpafep_6)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109!pcrv_26)

### 简介

本文是关于图形界面系列文章第一部分的续篇. 第一篇文章, [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细考虑了这个库的目标. 在每一章的末尾, 都有第一部分文章的完整列表. 在那里您还可以下载当前开发阶段的库的完整版本. 文件在目录中的位置必须和在档案中相同.

在图形界面系列第一部分 [前面](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108) 一章中, 我们丰富了表单类的方法, 使得可以通过按下控件的方法管理表单. 之前所执行的测试都是使用"EA交易"类型的程序, 并且只在 **MetaTrader 5** 终端中运行. 在本文中, 我们将使用不同类型的MQL程序, 例如指标和脚本程序, 来测试我们的成果. 因为这个函数库设计时就是跨平台的, 所以它应该可以被用于所有平台, 我们也将在 **MetaTrader 4** 中进行测试.

### 在指标中使用表单

在MetaTrader 5终端的指标目录 (**<data\_directory>\\MQL5\\Indicators**)中为新指标创建一个目录. 和我们之前进行的EA测试一样, 在这个目录中创建一个主程序文件, 并且 **Program.mqh** 文件会包含 **CProgram** 类. 您可以只是把 **Program.mqh** 文件从为EA交易创建的文件夹中复制到指标的文件夹中. 在本阶段, 代码已经足够用于在指标中测试控件表单了. 在指标的主文件中输入代码, 如下文所示.

使用黄色高亮显示的意思是指标将位于主图表窗口. 指标缓冲区的数量现在可以设为零, 我们只是将测试指标中图形界面的元, 而会跳过指标对价格数组的计算.

```
//+------------------------------------------------------------------+
//|                                                  ChartWindow.mq5 |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "2015, MetaQuotes Software Corp."
#property link      "http://www.mql5.com"
#property indicator_chart_window
#property indicator_buffers 0
#property indicator_plots   0
//--- 包含交易面板类
#include "Program.mqh"
CProgram program;
//+------------------------------------------------------------------+
//| 自定义指标初始化函数                         |
//+------------------------------------------------------------------+
int OnInit(void)
  {
   program.OnInitEvent();  
//--- 设置交易面板
   if(!program.CreateTradePanel())
     {
      ::Print(__FUNCTION__," > 创建图形界面失败!");
      return(INIT_FAILED);
     }
//--- 初始化成功
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| EA 终止化函数                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
   program.OnDeinitEvent(reason);
  }
//+------------------------------------------------------------------+
//| 自定义指标迭代函数                              |
//+------------------------------------------------------------------+
int OnCalculate (const int    rates_total,     // price[] 数组的大小
                 const int    prev_calculated, // 前一次调用处理过的柱数
                 const int    begin,           // 主要数据的起点
                 const double &price[])        // 用于计算的数组
  {
   return(rates_total);
  }
//+------------------------------------------------------------------+
//| 计时器函数                                                   |
//+------------------------------------------------------------------+
void OnTimer(void)
  {
   program.OnTimerEvent();
  }
//+------------------------------------------------------------------+
//| ChartEvent 函数                                              |
//+------------------------------------------------------------------+
void OnChartEvent(const int    id,
                  const long   &lparam,
                  const double &dparam,
                  const string &sparam)
  {
   program.ChartEvent(id,lparam,dparam,sparam);
  }
//+------------------------------------------------------------------+
```

编译指标并把它载入到图表中. 结果应该如下图截屏所示. 和在EA交易中使用的时候一样, 表单可以被最小化, 最大化以及在图表中移动. 它的控件可以对光标移动做出回应, 如果按下了"关闭"按钮(右上角的叉), 指标将从图表上删除.

![图 1. 在图表主窗口的指标中测试表单.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-15_niehv.rne "图 1. 在图表主窗口的指标中测试表单.")
![[Pasted image 20260628210438.png]]
图 1. 在图表主窗口的指标中测试表单

请注意表单左上角的图标. 程序自动识别了程序的类型并设置了默认的图标. 您也许记得, 在开发 **CWindow** 类的阶段, 是可以改变这个图标的.

不需要对代码做大的修改, 控件表单就可以用于指标. 然而, 如果我们试着在另外的窗口而不是主窗口中创建指标, 不是所有的功能都可以正常工作. 例如, (1) 表单的设置还是在主窗口中进行而不是在所要求的子窗口中, (2) 按下 "关闭" 按钮不能从图表上删除指标. 那是为什么呢?我们将看看如何改变这种情形.

实际上, 我们之前所做的都不需要做修改. 我们所要做的就是在 **CWndEvents** 类中创建一个方法, 能够根据程序类型和指标所在的图表子窗口的编号来自动识别程序所在的窗口编号. 让我们把这个方法称为 **DetermineSubwindow** (). 在这个方法的一开始必须检查程序是否是一个指标. 如果这不是指标, 就没有必要继续下去了, 因为所有MQL程序类型中, 只有指标是可以位于子窗口中的.

然后, 使用 [ChartWindowFind](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fahcrv_mpgrctkols-cjaptuildmwdild) () 函数来获得指标窗口的编号. 如果没有成功, 函数就返回 - **1**, 然后在日志中打印对应的消息并结束工作. 如果窗口编号大于0, 意思是这不是在图表的主窗口中. 需要进行进一步检查, 看子窗口中是否含有其他的指标. 如果这个子窗口中没有其他指标, 那么我们的指标将从窗口中删除, 并在日志中报告删除的原因. 为此, 需要使用 [ChartIndicatorsTotal](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fahcrv_mpgrctkols-cjaptknfiaavopsvovan) () 函数来获得指定子窗口中的指标总数. 然后, 如果指标的数量不等于 **1**, 从列表中取得最后一个指标的短名称, 从图表中删除程序. 取得指标的短名称是必须的, 因为从图表上删除指标只能通过指定的短名称.

在 **CWndEvents** 类中增加 **DetermineSubwindow** () 方法的声明和实现, 代码如下所示:

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 识别子窗口编号
   void              DetermineSubwindow(void);
  };
//+------------------------------------------------------------------+
//| 识别子窗口编号                               |
//+------------------------------------------------------------------+
void CWndEvents::DetermineSubwindow(void)
  {
//--- 如果程序类型不是指标, 退出
   if(PROGRAM_TYPE!=PROGRAM_INDICATOR)
      return;
//--- 重置最后的错误代码
   ::ResetLastError();
//--- 识别指标窗口编号
   m_subwin=::ChartWindowFind();
//--- 如果识别编号出错, 退出
   if(m_subwin<0)
     {
      ::Print(__FUNCTION__," > 识别子窗口编号错误: ",::GetLastError());
      return;
     }
//--- 如果这不是图表的主窗口
   if(m_subwin>0)
     {
      //--- 取得指定子窗口中指标的总数
      int total=::ChartIndicatorsTotal(m_chart_id,m_subwin);
      //--- 取得列表中最后一个指标的短名称
      string indicator_name=::ChartIndicatorName(m_chart_id,m_subwin,total-1);
      //--- 如果子窗口中已经有了一个指标, 从图表中删除程序
      if(total!=1)
        {
         ::Print(__FUNCTION__," > 这个子窗口中已经包含了一个指标.");
         ::ChartIndicatorDelete(m_chart_id,m_subwin,indicator_name);
         return;
        }
     }
  }
```

这个方法必须在 **CWndEvents** 类的构造函数中调用:

```
//+------------------------------------------------------------------+
//| 构造函数                                                      |
//+------------------------------------------------------------------+
CWndEvents::CWndEvents(void)
  {
//--- 识别子窗口编号
   DetermineSubwindow();
  }
```

现在, 界面库已经可以用于不在图表主窗口中的指标了. 我们将进行测试, 如果发现缺陷再修改错误.

当位于子窗口中时, 库的图形界面有三种主要模式:

1. 自由模式. 在此模式中, 指标子窗口的高度不是固定的, 可以由用户不加限制地改变. 当控件表单最小化时, 指标子窗口的高度不变, 还是可以自由调整.
2. 固定模式. 指标子窗口的高度与控件表单高度一致. 当表单最小化时, 子窗口的高度保持不变.
3. 可以最小化子窗口的固定模式. 它的意思是, 当指标在图表中载入时, 子窗口的高度和控件表单高度设置相同, 但是当表单最小化时, 子窗口的高度就和表单的表头部分高度相同.

为了方便设置以上所述的几种模式, 我们之前在 **CWindow** 类中创建了 **RollUpSubwindowMode** () 方法. 晚些时候我们会看如何使用它.

让我们创建三个指标来演示每种模式. 为了更有趣, 我们在外部参数中设置了枚举(下拉列表)来对应这些指标. 下拉列表提供了设置表单的三个选项:

1. 在图表窗口的左侧;
2. 在图表窗口的右侧;
3. 占满图表的整个宽度.

如果选了第三个选项, 表单的宽度必须随着图表宽度的改变而调整. **CWindow** 类现在还没有包含这样做的代码. 让我们创建一个方法并称它为 **ChangeWindowWidth** (). 在这个方法的开始, 会比较当前的宽度和传给方法的参数值. 如果传入的数值不同, 则表单对象的宽度必须改变, 按钮的坐标必须更新.

**CWindow::ChangeWindowWidth** () 方法的声明和实现:

```
class CWindow : public CElement
  {
public:
   //--- 修改窗口的宽度
   void              ChangeWindowWidth(const int width);
  };
//+------------------------------------------------------------------+
//| 修改窗口的宽度                                  |
//+------------------------------------------------------------------+
void CWindow::ChangeWindowWidth(const int width)
  {
//--- 如果宽度没有改变, 就退出
   if(width==m_bg.XSize())
      return;
//--- 更新背景和表头的宽度
   CElement::XSize(width);
   m_bg.XSize(width);
   m_bg.X_Size(width);
   m_caption_bg.XSize(width);
   m_caption_bg.X_Size(width);
//--- 更新坐标和所有按钮的边界:
//--- 关闭按钮
   int x=CElement::X2()-CLOSE_BUTTON_OFFSET;
   m_button_close.X(x);
   m_button_close.XGap(x-m_x);
   m_button_close.X_Distance(x);
//--- 最大化按钮
   x=CElement::X2()-ROLL_BUTTON_OFFSET;
   m_button_unroll.X(x);
   m_button_unroll.XGap(x-m_x);
   m_button_unroll.X_Distance(x);
//--- 最小化按钮
   m_button_rollup.X(x);
   m_button_rollup.XGap(x-m_x);
   m_button_rollup.X_Distance(x);
//--- 工具提示按钮 (如果已启用)
   if(m_tooltips_button)
     {
      x=CElement::X2()-TOOLTIP_BUTTON_OFFSET;
      m_button_tooltip.X(x);
      m_button_tooltip.XGap(x-m_x);
      m_button_tooltip.X_Distance(x);
     }
  }
```

使用之前在图表主窗口中测试的指标, 创建这个指标的三份拷贝. 每个拷贝将用于以上列出模式的一种. 然后给它们中的每一个起个唯一的名称.

例如:

- **FreeHeight** — 用于自由模式.
- **RollUp** — 用于固定模式.
- **DownFall** — 用于子窗口可以最小化的固定模式.

在这些指标的主文件中, 有一行代码需要修改. 指标不能再位于主窗口中, 而必须指定在子窗口中创建指标:

```
//+------------------------------------------------------------------+
//|                                                   FreeHeight.mq5 |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "2015, MetaQuotes Software Corp."
#property link      "http://www.mql5.com"
#property indicator_separate_window
#property indicator_buffers 0
#property indicator_plots   0
```

然后, 在每个 **Program.mqh** 包含文件的开头部分包含枚举([enum](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Fknveeep%2Fgnwmgrctkol)) 和用于选择表单设置模式的外部参数 ([input](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Ftapicbneq%2Fknruvvcrka%60lgs)):

```
//--- 窗口设置模式的枚举
enum ENUM_WINDOW_MODE
  {
   LEFT  =0,
   RIGHT =1,
   FULL  =2
  };
//--- 外部参数
input ENUM_WINDOW_MODE WindowMode=LEFT;
```

如果在外部参数设置中选择了 **RIGHT** 或者 **FULL**, 当图表窗口改变时, 程序会调整表单的坐标(在 **RIGHT** 模式中) 或者大小 (在 **FULL** 模式中), 这样表单的右侧边界就不会超出图表边框

我想没有必要在指标子窗口这样的狭小空间内移动表单. 在当前的表单实现中, 当图表大小改变时, 如果它的属性中指定了它不能移动, 它也不会做出调整. 这也是为什么在我们即将开发的MQL应用程序中, 对于不能移动的表单, 要在它的内部事件处理程序中要单独处理. 把以下代码增加到所创建指标的 **Program.mqh** 中的 **CProgram::OnEvent** () 处理函数中:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                                              |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_CHART_CHANGE)
     {
      //--- 如果选择了表单宽度等于整个图表宽度的模式
      if(WindowMode==FULL)
         m_window.ChangeWindowWidth(m_chart.WidthInPixels()-2);
      //--- 如果选择了表单在右侧的模式
      else if(WindowMode==RIGHT)
         m_window.X(m_chart.WidthInPixels()-(m_window.XSize()+1));
     }
  }
```

您可以看到, 现在所创建的所有指标的文件内容都是完全相同的. 最后, 我们到了回答如何使用 **CWindow::RollUpSubwindowMode** () 方法来设置控件表单所在指标子窗口的时候了.

默认情况下, 当指标子窗口高度能够改变时, **CWindow** 类中用于标识指标子窗口模式变量的值是在类的构造函数中初始化的. 所以, 在 **FreeHeight** 指标中这种模式可以完全略过. 用于在子窗口中设置表单的 **CProgram** 类的代码如下所示. 请记住, 表单的宽度和它的坐标是在外部设置中使用可选选项来定义的. 在指标的不同模式下使用 **CWindow::RollUpSubwindowMode** () 方法的地方已经使用黄色高亮标出了.

```
//+------------------------------------------------------------------+
//| 创建用于控件的表单                                      |
//+------------------------------------------------------------------+
bool CProgram::CreateWindow(const string caption_text)
  {
//--- 在窗口数组中增加一个窗口指针
   CWndContainer::AddWindow(m_window);
//--- 大小
   int x_size=(WindowMode!=FULL)? 205 : m_chart.WidthInPixels()-2;
   int y_size=243;
//--- 坐标
   int x=(WindowMode!=RIGHT)? 1 : m_chart.WidthInPixels()-(x_size+1);
   int y=1;
//--- 属性
   m_window.XSize(x_size);
   m_window.YSize(y_size);
// ...
//--- 创建一个表单
   if(!m_window.CreateWindow(m_chart_id,m_subwin,caption_text,x,y))
      return(false);
//---
   return(true);
  }
```

**RollUp** 指标用于在子窗口中高度固定, 并且在表单最小化时子窗口高度也不变的模式. 那就是为什么以下这行代码需要添加到高亮代码的上面:

```
m_window.RollUpSubwindowMode(false,true);
```

第一个参数的值意思是子窗口在表单最小化时不能最小化. 第二个参数指出, 子窗口的高度必须固定等于表单的高度. 在 **DownFall** 指标中, **CWindow::RollUpSubwindowMode** () 方法的参数必须按以下方式指定:

```
m_window.RollUpSubwindowMode(true,true);
```

第一个参数的值设定了, 当表单最小化时, 子窗口高度必须等于表单表头的高度.

编译您做过修改的文件以及指标文件. 在图表中测试它们中的每一个. 根据设置的模式, 一切都可以正确工作. 您将会注意到, 当图表窗口大小改变时, 坐标(在 **RIGHT** 模式中) 和表单宽度 (在 **FULL** 模式中) 没有调整. 这并不令人惊讶!现在, 事件流不会走向 **CProgram** 类的 **OnEvent** () 图表时间处理函数了. 当我们构造库的主体结构时, 我们曾提到, 图表事件流可以从 **CWndEvents** 类的 **ChartEvent** ()方法传到 **CProgram** 类中的 **OnEvent** ()本地处理函数中. 后面的这个正是我们在开发的应用程序类.

让我们把事件的转发直接放到 **CWndEvents::CheckElementsEvents** ()方法中循环处理所有控件事件之后:

```
//+------------------------------------------------------------------+
//| 检查控件事件                                          |
//+------------------------------------------------------------------+
void CWndEvents::CheckElementsEvents(void)
  {
   int elements_total=CWndContainer::ElementsTotal(0);
   for(int e=0; e<elements_total; e++)
      m_wnd[0].m_elements[e].OnEvent(m_id,m_lparam,m_dparam,m_sparam);
//--- 把事件转发到应用程序文件
   OnEvent(m_id,m_lparam,m_dparam,m_sparam);
  }
```

就算到了现在, 在 **RIGHT** 模式下表单坐标的调整还是不正确的. 原因是程序就算使用 [CHARTEVENT\_CHART\_CHANGE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件调用了 **CWindow** 类中的事件处理函数, 坐标还是没有更新, 因为 **UpdateWindowXY** () 方法只有在表单是可以移动的时候才会更新坐标. 您也许记得, 之前我们同意, 表单在指标中是固定的. 在循环处理了所有控件之后, 程序会调用 **CProgram** 类中的图表事件处理函数, 如以上代码中所示, 将会根据图表窗口的当前宽度更新X坐标.

然后, 程序会退出 **CWndEvents** 类中的 **CheckElementsEvents** ()方法, 还将调用 **CWndEvents::ChartEventMouseMove** () 方法, 如果事件不是鼠标事件的话就直接退出. 现在, 只有在 **CWndEvents::ChartEventMouseMove** ()方法中, 才会根据表单属性中的真实坐标来更新表单的位置. 是时候把 **CHARTEVENT\_CHART\_CHANGE** 事件的处理添加到 [CWndEvents::ChartEvent](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) () 方法中了, 代码使用黄色高亮显示.

```
//+------------------------------------------------------------------+
//| 事件处理程序                                           |
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
//--- 图表属性改变的事件
   ChartEventChartChange();
  }
```

把根据真实坐标调用窗口移动函数并重绘图表的代码添加到 **CWndEvents::ChartEventChartChange** () 方法中:

```
//+------------------------------------------------------------------+
//| CHARTEVENT CHART CHANGE 事件                                    |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventChartChange(void)
  {
//--- 图表属性改变的事件
   if(m_id!=CHARTEVENT_CHART_CHANGE)
      return;
//--- 移动窗口
   MovingWindow();
//--- 重绘图表
   m_chart.Redraw();
  }
```

编译库文件和指标. 把它们载入图表来测试. 现在 **RIGHT** 模式下的表单坐标可以被正确更新了.

还有一个细节我们之前没有考虑到. 在当前的实现中, 当一个创建好的指标和控件表单载入到图表上时, 子窗口编号会自动在类的构造函数中使用 **CWndEvents::DetermineSubwindow** () 方法来获得. 如果载入指标时, 图表上已经有了另外一个指标也在子窗口中, 指标在图表中时一切运行正常. 当它被删除时, 我们的指标会获得一个新的窗口编号. 而界面库需要窗口编号才能正常工作(例如, 取得相对坐标), 这样一些功能将不能正确运行. 由于这个原因, 必须跟踪图表上的窗口数量. 一旦它们的数量改变, 必须要在类中所需的栏位声明.

当程序在图表中载入和删除时, 会生成 [CHARTEVENT\_CHART\_CHANGE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件. 所以必须在 **CWndEvents::ChartEventChartChange** () 方法中做检查. 让我们创建一个新的方法专门做这类检查, 并把它叫做 **CWndEvents::CheckSubwindowNumber** (). 它的声明和显示在以下代码中. 首先有检查程序窗口的编号和在图表上载入程序时保存的编号是否一致. 当它们不能匹配时, 位于程序中的当前窗口的编号需要在所有表单控件中做更新.

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 验证控件事件
   void              CheckSubwindowNumber(void);
   //---
  };
//+------------------------------------------------------------------+
//| 检查和更新程序窗口编号                  |
//+------------------------------------------------------------------+
void CWndEvents::CheckSubwindowNumber(void)
  {
//--- 如果程序子窗口编号不匹配
   if(m_subwin!=0 && m_subwin!=::ChartWindowFind())
     {
      //--- 取得子窗口编号
      DetermineSubwindow();
      //--- 保存在所有控件中
      int windows_total=CWndContainer::WindowsTotal();
      for(int w=0; w<windows_total; w++)
        {
         int elements_total=CWndContainer::ElementsTotal(w);
         for(int e=0; e<elements_total; e++)
            m_wnd[w].m_elements[e].SubwindowNumber(m_subwin);
        }
     }
  }
```

必须在 **CWndEvents::ChartEventChartChange** () 方法中调用此方法:

```
//+------------------------------------------------------------------+
//| CHARTEVENT CHART CHANGE 事件                                    |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventChartChange(void)
  {
//--- 图表属性改变的事件
   if(m_id!=CHARTEVENT_CHART_CHANGE)
      return;
//--- 检查并更新程序窗口编号
   CheckSubwindowNumber();
//--- 移动窗口
   MovingWindow();
//--- 重绘图表
   m_chart.Redraw();
  }
```

现在, 一切都可以和设计的那样运行了. 用于以上测试的各种模式的指标都可以在文章末尾处下载.

![图 2. 测试在图表子窗口指标中的表单.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-1%3A_niehv.rne "图 2. 测试在图表子窗口指标中的表单.")
![[Pasted image 20260628210547.png]]
图 2. 测试在图表子窗口指标中的表单

在当前的实现中, 为了能够正常工作, 推荐在一个图表上只使用一个使用此界面库开发的应用程序. 以上屏幕截图显示的在一张图表上有几个指标只是为了节约空间, 才把所有模式放到一起的. 在启用/禁用图表滚动的时候, 使用此界面库开发的程序之间会有冲突. 解决程序之间的冲突问题有几种思路. 如果测试结果令人满意并且解决方案切实可行, 未来会有一篇文章单独处理它.

### 在脚本程序中使用表单

我们已经在EA交易和指标中使用了表单. 表单可以在脚本程序中使用吗?答案是可以. 在脚本程序中, 表单的功能将很受限制. 脚本程序没有事件处理. 这就是为什么 (1) 表单不能移动, (2) 表单上不能设置控件用于完成某种功能, 以及 (3) 图形对象不能对鼠标移动产生回应.

然而, 如果您需要在脚本程序的执行过程中, 快速创建一个信息面板来向用户显示一些统计信息, 为什么不使用表单作为基础呢?也就是说, 不论您的MQL程序属于那种类型, 您都可以使用一个界面库并且只有一种设计.

创建一个文件夹用于放入脚本程序的主文件和 **Program.mqh** 文件. 文件中的 **CProgram** 类从 **CWndEvents** 类派生, 与以上在EA交易和指标中相同. 在大体上, 一切都是相同的. 唯一的例外是这里只有一个 **OnEvent** () 处理函数, 事件是脚本程序中由无尽的循环人工产生的. 这个方法只有一个参数, 就是退出此方法前暂停的毫秒数.

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                                |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
protected:
   //--- 窗口
   CWindow           m_window;
   //---
public:
                     CProgram(void);
                    ~CProgram(void);
   //--- 事件处理函数
   virtual void      OnEvent(const int milliseconds);
   //--- 创建信息面板
   bool              CreateInfoPanel(void);
   //---
protected:
   //--- 创建一个表单
   bool              CreateWindow(const string text);
  };
```

为了模仿一些过程, 我们将在 **CProgram::OnEvent** ()方法中使用传入的毫秒数间隔修改表单表头文本. 让我们创建一个椭圆处理指标. 以下代码显示了它是如何实现的:

```
//+------------------------------------------------------------------+
//| 事件                                                           |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int milliseconds)
  {
   static int count =0;  // 计数器
   string     str   =""; // 表头文字行
//--- 使用处理过程格式化表头
   switch(count)
     {
      case 0 : str="SCRIPT PANEL";     break;
      case 1 : str="SCRIPT PANEL .";   break;
      case 2 : str="SCRIPT PANEL ..";  break;
      case 3 : str="SCRIPT PANEL ..."; break;
     }
//--- 更新表头文字
   m_window.CaptionText(str);
//--- 重绘图表
   m_chart.Redraw();
//--- Increase the counter
   count++;
//--- 如果大于3就清零
   if(count>3)
      count=0;
//--- 暂停
   ::Sleep(milliseconds);
  }
```

现在, 我们只需创建一个面板, 然后在脚本程序的主文件的 [OnStart](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnqtcrv) ()函数中不断调用 **CProgram::OnEvent** () 方法就可以了. 以下代码演示了每隔250毫秒调用一次这个方法. 在 [IsStopped](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fahgci%2Fksqtmpref) () 函数返回 **false** 值的时候会一直工作. 为了停止永久的循环, 必须人工从图表上删除脚本程序. 当用户删除程序时, [IsStopped](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fahgci%2Fksqtmpref) () 函数将返回 true, 循环就会停止, 然后脚本也就停止工作.

```
//+------------------------------------------------------------------+
//|                                                    InfoPanel.mq5 |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2015, MetaQuotes Software Corp."
#property link      "http://www.mql5.com"
#property version   "1.0"
//--- 包含交易面板类
#include "Program.mqh"
CProgram program;
//+------------------------------------------------------------------+
//| 脚本程序起始函数                                    |
//+------------------------------------------------------------------+
void OnStart(void)
  {
//--- 设置交易面板
   if(!program.CreateInfoPanel())
     {
      ::Print(__FUNCTION__," > 创建图形界面失败!");
      return;
     }
//--- 脚本直到被删除会一直运行
   while(!::IsStopped())
     {
      //--- 每隔250毫秒生成一个事件
      program.OnEvent(250);
     }
  }
//+------------------------------------------------------------------+
```

编译文件并把脚本程序载入图表:

![图 3. 在脚本程序中测试表单.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-1%3B_niehv.rne "图 3. 在脚本程序中测试表单.")
![[Pasted image 20260628210615.png]]
图 3. 在脚本程序中测试表单.

您可以看到, 在以上的屏幕截图中, 界面库已经识别了程序类型并设置了默认的图标作为表单标签. 脚本程序可以在文章末尾下载. 在其他实例中它会被进一步丰富, 增加元素和信息组. 这个脚本程序, 以及本文中的EA交易和指标, 可以用作您开发程序的模板.

### 在 MetaTrader 4中使用界面库

这个用于创建图形界面的库可以用在 **MetaTrader 4** 交易平台上. 把库中所有文件和这篇文章中创建的程序从 **MetaTrader 5** 终端的目录中复制到 **MetaTrader 4** 终端中. 此界面库几乎就可以使用了.

唯一要做的就是在一些库文件中增加一个特别参数, 通知编译器使用一个特别的严格模式来检验错误, 以避免编译错误. 为此把以下这行代码添加到库头文件的开头部分:

```
#property strict
```

需要添加的文件有 **WndContainer.mqh**, **Element.mqh** 和程序的主文件. 这将使得编译这些文件的代码时不会出错.

如果一切正常并且所有文件成功编译, 就可以在 **MetaTrader 4** 终端中测试本文中的所有程序了. 一切都应该和 **MetaTrader 5** 终端中相同.

![图 4. 在 Metatrader 4 终端中测试界面库.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-22_niehv.rne "图 4. 在 Metatrader 4 终端中测试界面库.")
![[Pasted image 20260628210635.png]]
图 4. 在MetaTrader 4终端中测试界面库

### 结论

我们可以评估一下, 在创建图形界面库的开发到了什么阶段. 在此阶段, 库结构如下所示. 如果您已经完全阅读了文章, 此架构应该是很有逻辑性并易于理解的.

![图 5. 当前开发阶段的库结构](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-23.rne "图 5. 当前开发阶段的库结构")
![[Pasted image 20260628210647.png]]
图 5. 当前开发阶段的库结构

我将简单提醒您, 这个结构中元素的含义:

- 蓝色箭头表示类之间的相互关联, 例如: **基类** -> **派生类 1** -> **派生类 2** -> **派生类 N**.
- 黄色箭头表示在一个文件中包含另外一个文件. 但是, 如果一个包含文件中包括一个雷, 它就不能是它所包含类的基类. 它可以用做类中的一个对象或者一个链条 (**基类** -> **派生类**)中的一个类.
- 使用半粗字体标注的浅棕色方框来自于MQL的标准库, 其余属于自定义库.
- 灰色边框的白色长方形是单独文件中的类或者属于某个组的宏定义 ([define](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Frrgppoqeqsmr-cmnqtcnv)) 或枚举 ([enum](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Fknveeep%2Fgnwmgrctkol)).
- 如果深蓝色边框的灰色长方形有一个标头, 还有文件名, 它的意思是其中所有的类, 除了蓝色边框白色长方形之外的, 都包含在此头文件中.
- 如果一个深蓝色边框的灰色长方形没有标头, 则其中的所有类都位于不同文件中, 但是有一个共同的基类. 也就是说, 如果一个深蓝色边框的灰色长方形通过蓝色箭头与类相连接, 它的意思是那个类是灰色长方形中所有类的基类.
- 一个浅棕色长方形, 带有 **CChartObject…** 文字并与深蓝色边框的灰色长方形关联的, 意思是标准库中的一个类, 它是一个基本对象, 是那些在灰色长方形中类的基类.

本系列的第一部分考虑了主界面库结构的准备工作, 可以创建图形界面以及主要的界面元件 - 表单或窗口. 其他控件将添加到这个表单上. 它们的创建将在此系列文章的后续部分介绍. 继续这个系列文章的详细讨论将是很有意义的, 您可以创建自己的自定义控件并把它加到库中成为一个集成良好的部分, 不与其他控件相冲突.

下面的归档文件是当前开发阶段的库文件, 图片和在本文中使用的程序文件(EA交易, 指标和脚本), 可以下载到 **MetaTrader 4** 和 **MetaTrader 5** 终端中进行测试. 如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第一系列的文章(章节)列表:**

- [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I: 用于控件的表单 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I: 图形界面的动画 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- [图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2129](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0109)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3B.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3B%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (51.67 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3B%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (51.59 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)

在本系列文章的第二部分中, 我们将向您展示界面元件开发的详细过程, 例如主菜单和上下文菜单. 我们还会提到元件的绘制以及为此开发一个特别的类. 我们还将深度讨论程序事件管理, 包括自定义事件的问题.

[图形界面 I：控件构成(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)

在本文中我们将创建第一个图形界面的主元素 — 控件的一个窗体。多个控件可以以任何组合被附加到此窗体的任何地方。

[使用分形绘制水平突破位](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3415)

本文描述了使用上/下分形显示支撑/阻力位的指标创建。

[图形界面 I：库结构(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)

本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fi2w97jwxv83f6d5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F721%251Fwto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fcjomsg.qienclq%2506wto_aoltgnv%251Dqu%60sarkbg.qiencl'24uvm%5Dccmrakgl%251D2602%2CMSL7.aoo.Knvepncl%24a%3Fchgopwvlrsamowguxopmwjkavgjhyuoh%26q%3D%3B70b%3B5fb0e0b6a1472cb%3Ad%60f055c%60e527765af51d1%3B11e4042ddda66a3%3A778g5%24v%3F1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24ukd%3Fp%60ywvhfxrkkqn%7Bo%7Bctwgeasmiikwfwln%26qsl%3D37%3A2453826624870377%26qsl_fr%3F0%24sqn%5Dsp%3D2%26dv%5Ddctg%3D37%3A24430%3B9%24rgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0109%24bcci_ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fwsgrq%250Fvon66%250Fraee6%251F'21uqepAatkols%24tktne%3F%25G5'9%40%25%40E'E7%25%40D'A0%25G7'97%25%3AC'E%3B%25%3BD'A0%2500K%251A'22%25G5'9A%25C8OevaVrcdgr'224'E5%25%40B'8%3A%25G7'A%40%25CF'E6%25%408'AF%25G4'BF%25%40F'E5%25%3B4'A%3A%25G4'B%3A%25%3AD'E7%25%3B0'8A%25G7'B3%25%40B'E7%25%3BE'8%40%25G7'9C%25%3A4'E5%25C8'8%40%25G5'BC%25%3AF'E4%25%3BD'A7%25G6'B7%25%3AB'E%3A%25CF'97%25G7'97%25%3AC'E%3B%25%3BD'A0%25G5'BC%25%3B3'22\('E5%25CC'AA%25G4'BC%25%3B4'E5%25CB'A2\)'22-'22MSL7%25G6'94%25%3A7'E5%25CB'A2%26qcp_peq%3D3900z1282%26cc%3F1580671%3A0485966782%26dz%5Dulis%3D4378234921010762401%26qv%3F2750)