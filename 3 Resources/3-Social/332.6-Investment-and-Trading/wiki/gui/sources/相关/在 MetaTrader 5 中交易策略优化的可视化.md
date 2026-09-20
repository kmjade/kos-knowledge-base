---
title: "在 MetaTrader 5 中交易策略优化的可视化"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5"
author:
  - "[[Anatoli Kazharski]]"
published: 2018-04-24T14:43:00+00:00Z
created: 2026-06-28
description: "本文采用图形界面实现 MQL 应用程序来扩展可视化的优化过程。 图形界面采用 EasyAndFast 函数库的最新版本。 许多用户可能会问为什么他们在 MQL 应用程序中需要图形界面。 本文为交易者展示了众多实用情况之一。"
tags:
  - "clippings"
---
### 目录

- [概述](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc1)
- [开发图形界面](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc2)
- [开发用于处理帧数据的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc3)
- [在应用程序类中处理数据优化](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc4)
- [显示获得的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc5)
- [结束语](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3B5!pcrc6)

### 概述

在开发交易算法时，在优化参数时查看测试结果会实用。 然而， **优化图** 选项卡上的单一图形可能不足以评估交易策略的效率。 在优化之后，同时查看多个所分析测试的余额曲线会更好。 我们已在文章 ["在 MetaTrader 5 的可视化策略测试器"](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F601) 中验证过这样的应用程序。 不过，自那以后出现了许多新的机会。 因此，现在可以实现一个类似但更强大的应用程序。

本文采用图形界面实现 MQL 应用程序来扩展可视化的优化过程。 图形界面应用 [EasyAndFast 函数库的最新版本](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-cmdg%2F39501) 。 许多 MQL 社区用户可能会问，为什么他们在 MQL 应用程序中需要图形界面。 本文将展示它们的潜在用途。 对于那些正在其工作采用函数库的人来说，这也可能是有用的。

### 开发图形界面

在此我将简要介绍一下开发图形界面。 如果您已经掌握了 **EasyAndFast** 函数库，您将能够快速理解为何它会令您的 MQL 应用程序开发图形界面更轻松。

首先，我们来描述开发应用程序的一般结构。 **Program.mqh** 文件包括 **CProgram** 应用类。 这个基类应该被 连接到图形库引擎。

```c++
//+------------------------------------------------------------------+
//|                                                      Program.mqh |
//|                                  版权所有 2018, MetaQuotes 软件公司 |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//--- 用于创建图形界面的库类
#include <EasyAndFastGUI\WndEvents.mqh>
//+------------------------------------------------------------------+
//| 用于开发应用程序的类                                                 |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
  };
```

**EasyAndFast** 函数库显示为单一块 (GUI 函数库), 以免令图像混乱。 您可以在 [函数库页面](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-cmdg%2F39501) 上查看它的完整内容。

![图例 1. 包括用于创建 GUI 的函数库](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-021%2Cplg "图例 1. 包括用于创建 GUI 的函数库")
![[Pasted image 20260628235459.png]]


![[Pasted image 20260719054622.png]]
图例 1. 包括用于创建 GUI 的函数库

在 **CProgram** 类中应该创建类似的方法来连接 MQL 程序的主要函数。 我们需要来自 **OnTesterXXX** () 类别中的方法来处理帧。

```c++
class CProgram : public CWndEvents
  {
public:
   //--- 初始化/逆初始化
   bool              OnInitEvent(void);
   void              OnDeinitEvent(const int reason);
   //--- "新逐笔报价" 事件处理器
   void              OnTickEvent(void);
   //--- 交易事件处理器
   void              OnTradeEvent(void);
   //--- 计时器
   void              OnTimerEvent(void);
   //--- 测试器
   double            OnTesterEvent(void);
   void              OnTesterPassEvent(void);
   void              OnTesterInitEvent(void);
   void              OnTesterDeinitEvent(void);
  };
```

在这种情况下，应在应用程序的主文件中按以下方式调用方法:

```c++
//--- 包含应用程序类
#include "Program.mqh"
CProgram program;
//+------------------------------------------------------------------+
//| 智能系统初始化函数                                                   |
//+------------------------------------------------------------------+
int OnInit(void)
  {
//--- 初始化程序
   if(!program.OnInitEvent())
     {
      ::Print(__FUNCTION__," > 初始化失败!");
      return(INIT_FAILED);
     }  
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| 智能系统逆初始化函数                                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason) { program.OnDeinitEvent(reason); }
//+------------------------------------------------------------------+
//| 智能系统逐笔报价函数                                                 |
//+------------------------------------------------------------------+
void OnTick(void) { program.OnTickEvent(); }
//+------------------------------------------------------------------+
//| 计数器函数                                                         |
//+------------------------------------------------------------------+
void OnTimer(void) { program.OnTimerEvent(); }
//+------------------------------------------------------------------+
//| ChartEvent 函数                                                   |
//+------------------------------------------------------------------+
void OnChartEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
   { program.ChartEvent(id,lparam,dparam,sparam); }
//+------------------------------------------------------------------+
//| Tester 函数                                                       |
//+------------------------------------------------------------------+
double OnTester(void) { return(program.OnTesterEvent()); }
//+------------------------------------------------------------------+
//| TesterInit 函数                                                   |
//+------------------------------------------------------------------+
void OnTesterInit(void) { program.OnTesterInitEvent(); }
//+------------------------------------------------------------------+
//| TesterPass 函数                                                   |
//+------------------------------------------------------------------+
void OnTesterPass(void) { program.OnTesterPassEvent(); }
//+------------------------------------------------------------------+
//| TesterDeinit 函数                                                 |
//+------------------------------------------------------------------+
void OnTesterDeinit(void) { program.OnTesterDeinitEvent(); }
//+------------------------------------------------------------------+
```

因此，开发应用程序图形界面的工件已准备就绪。 主要工作在 **CProgram** 类中进行。 工作所需的所有文件都包含在 **Program.mqh** 中。

现在我们来定义图形界面的内容。 列出所有要创建的元素。

- 控件窗体。
- 指定将要在图形上显示的余额数额的字段。
- 调整优化结果重复显示速度的字段。
- 启动重复显示的按钮。
- 结果统计表。
- 显示 EA 外部参数的表格。
- 余额曲线图形。
- 优化结果图形。
- 显示附加摘要信息的状态栏。
- 进度条显示重新滚动时总显示结果的百分比。

下面是控件元素类实例及其创建方法的声明 (请参见下面的代码清单)。 这些方法的代码被放入一个单独的文件 — **CreateFrameModeGUI.mqh** ，它与 **CProgram** 类文件相关联。 随着开发应用程序的代码的增长，通过单个文件进行分发的方法变得更加相关，从而更容易梳理项目。

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 窗口
   CWindow           m_window1;
   //--- 状态栏
   CStatusBar        m_status_bar;
   //--- 输入字段
   CTextEdit         m_curves_total;
   CTextEdit         m_sleep_ms;
   //--- 按钮
   CButton           m_reply_frames;
   //--- 表格
   CTable            m_table_stat;
   CTable            m_table_param;
   //--- 图形
   CGraph            m_graph1;
   CGraph            m_graph2;
   //--- 进度条
   CProgressBar      m_progress_bar;
   //---
public:
   //--- 创建优化模式下处理帧的图形界面
   bool              CreateFrameModeGUI(void);
   //---
private:
   //--- 窗体
   bool              CreateWindow(const string text);
   //--- 状态栏
   bool              CreateStatusBar(const int x_gap,const int y_gap);
   //--- 表格
   bool              CreateTableStat(const int x_gap,const int y_gap);
   bool              CreateTableParam(const int x_gap,const int y_gap);
   //--- 输入字段
   bool              CreateCurvesTotal(const int x_gap,const int y_gap,const string text);
   bool              CreateSleep(const int x_gap,const int y_gap,const string text);
   //--- 按钮
   bool              CreateReplyFrames(const int x_gap,const int y_gap,const string text);
   //--- 图形
   bool              CreateGraph1(const int x_gap,const int y_gap);
   bool              CreateGraph2(const int x_gap,const int y_gap);
   //--- 进度条
   bool              CreateProgressBar(const int x_gap,const int y_gap,const string text);
  };
//+------------------------------------------------------------------+
//| 创建控件元素的方法                                                  |
//+------------------------------------------------------------------+
#include "CreateFrameModeGUI.mqh"
//+------------------------------------------------------------------+
```

我们还要启用包含在 **CreateFrameModeGUI.mqh** 中要连接的文件。 我们在此仅展示一个用于创建应用程序图形界面的主要方法 作为示例:

```c++
//+------------------------------------------------------------------+
//|                                           CreateFrameModeGUI.mqh |
//|                                  版权所有 2018, MetaQuotes 软件公司 |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Program.mqh"
//+------------------------------------------------------------------+
//| 创建图形界面                                                       |
//| 用于分析优化结果并处理帧                                             |
//+------------------------------------------------------------------+
bool CProgram::CreateFrameModeGUI(void)
  {
//--- 仅在处理优化帧的模式下创建界面
   if(!::MQLInfoInteger(MQL_FRAME_MODE))
      return(false);
//--- 为控件元素创建窗体
   if(!CreateWindow("Frame mode"))
      return(false);
//--- 创建控件元素
   if(!CreateStatusBar(1,23))
      return(false);
   if(!CreateCurvesTotal(7,25,"Curves total:"))
      return(false);
   if(!CreateSleep(145,25,"Sleep:"))
      return(false);
   if(!CreateReplyFrames(255,25,"Replay frames"))
      return(false);
   if(!CreateTableStat(2,50))
      return(false);
   if(!CreateTableParam(2,212))
      return(false);
   if(!CreateGraph1(200,50))
      return(false);
   if(!CreateGraph2(200,159))
      return(false);
//--- 进度条
   if(!CreateProgressBar(2,3,"Processing..."))
      return(false);
//--- 完成 GUI 创建
   CWndEvents::CompletedGUI();
   return(true);
  }
...
```

属于同一类的文件之间用双面黄色箭头显示连接:

![图例 2. 将项目切分成若干文件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-022%2Cplg "图例 2. 将项目切分成若干文件")
![[Pasted image 20260629001715.png]]

![[Pasted image 20260719054949.png]]
图例 2. 将项目切分成若干文件

### 开发用于处理帧数据的类

我们编写一个单独的类 **CFrameGenerator** 来处理帧。 该类应包含在 **Program.mqh** 当中，并再被包含于 **FrameGenerator.mqh** 中。 作为一个例子，我将演示两种接收这些帧的选项，以便在图形界面元素中显示。

- 在第一种情况下，为了在图形对象上显示帧，需将指向这些对象的指针传递给类方法。
- 在第二种情况下，我们使用特殊方法接收帧数据以便填充其它类别的表格。

您来决定，这些选项中的哪一个将作为主要选项。

**EasyAndFast** 函数库采用来自标准库的 **CGraphic** 类将数据可视化。 我们将 它包含在 **FrameGenerator.mqh** 当中来访问其方法。

```c++
//+------------------------------------------------------------------+
//|                                               FrameGenerator.mqh |
//|                                  版权所有 2018, MetaQuotes 软件公司 |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include <Graphics\Graphic.mqh>
//+------------------------------------------------------------------+
//| 用于接收优化结果的类                                                 |
//+------------------------------------------------------------------+
class CFrameGenerator
  {
  };
```

程序排布现在看起来如下:

![图例 3. 连接到类项目以便工作](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-023%2Cplg "图例 3. 连接到类项目以便工作")
![[Pasted image 20260629001730.png]]

![[Pasted image 20260719055105.png]]
图例 3 连接到类项目以便工作

现在，我们看看 **CFrameGenerator** 类是如何组织的。 它还需要处理策略测试器事件的方法 (请参阅下面的代码清单)。 在我们开发的程序中它们如同类方法那样被调用 — **CProgram** 。 将当前优化过程显示在图形对象上的指针传递给 **CFrameGenerator::OnTesterInitEvent** () 方法。

- 第一个图形 (**graph\_balance**) 显示优化结果余额的最后一连串指定数量。
- 第二个图形 (**graph\_result**) 显示整体优化结果。

```c++
class CFrameGenerator
  {
private:
   //--- 数据可视化的图形指针
   CGraphic         *m_graph_balance;
   CGraphic         *m_graph_results;
   //---
public:
   //--- 策略测试器事件处理程序
   void              OnTesterEvent(const double on_tester_value);
   void              OnTesterInitEvent(CGraphic *graph_balance,CGraphic *graph_result);
   void              OnTesterDeinitEvent(void);
   bool              OnTesterPassEvent(void);
  };
//+------------------------------------------------------------------+
//| 应在 OnTesterInit() 处理器中调用                                    |
//+------------------------------------------------------------------+
void CFrameGenerator::OnTesterInitEvent(CGraphic *graph_balance,CGraphic *graph_results)
  {
   m_graph_balance =graph_balance;
   m_graph_results =graph_results;
  }
```

在这两个图形中，正数结果都显示为绿色，而负数显示为红色。

在 **CFrameGenerator::OnTesterEvent** () 方法中，我们得到测试结果余额和统计参数。 这些数据使用 **CFrameGenerator::GetBalanceData** () 和 **CFrameGenerator::GetStatData** () 方法传递给帧。 **CFrameGenerator::GetBalanceData** () 方法接收整个测试历史并汇总所有 **in** -/ **inout** 交易。 得到的结果将逐步保存到 **m\_balance** \[\] 数组中。 这个数组实际上还是 **CFrameGenerator** 类的成员。

发送到帧的动态数组传递给 **CFrameGenerator::GetStatData** () 方法。 其大小与先前接收结果余额的数组大小相匹配。 此外，我们添加了一些要接收的统计参数的元素。

```c++
//--- 统计参数数量
#define STAT_TOTAL 7
//+------------------------------------------------------------------+
//| 用于处理优化结果的类                                                 |
//+------------------------------------------------------------------+
class CFrameGenerator
  {
private:
   //--- 结果余额
   double            m_balance[];
   //---
private:
   //--- 接收余额数据
   int               GetBalanceData(void);
   //--- 接收统计数据
   void              GetStatData(double &dst_array[],double on_tester_value);
  };
//+------------------------------------------------------------------+
//| 获取余额数据                                                       |
//+------------------------------------------------------------------+
int CFrameGenerator::GetBalanceData(void)
  {
   int    data_count      =0;
   double balance_current =0;
//--- 请求所有交易历史
   ::HistorySelect(0,LONG_MAX);
   uint deals_total=::HistoryDealsTotal();
//--- 收集交易数据
   for(uint i=0; i<deals_total; i++)
     {
      //--- 接收单号
      ulong ticket=::HistoryDealGetTicket(i);
      if(ticket<1)
         continue;
      //--- 如果是初始余额或 out/inout 交易
      long entry=::HistoryDealGetInteger(ticket,DEAL_ENTRY);
      if(i==0 || entry==DEAL_ENTRY_OUT || entry==DEAL_ENTRY_INOUT)
        {
         double swap      =::HistoryDealGetDouble(ticket,DEAL_SWAP);
         double profit    =::HistoryDealGetDouble(ticket,DEAL_PROFIT);
         double commision =::HistoryDealGetDouble(ticket,DEAL_COMMISSION);
         //--- 计算余额
         balance_current+=(profit+swap+commision);
         //--- 保存到数组
         data_count++;
         ::ArrayResize(m_balance,data_count,100000);
         m_balance[data_count-1]=balance_current;
        }
     }
//--- 获取数据量
   return(data_count);
  }
//+------------------------------------------------------------------+
//| 接收统计数据                                                       |
//+------------------------------------------------------------------+
void CFrameGenerator::GetStatData(double &dst_array[],double on_tester_value)
  {
   ::ArrayResize(dst_array,::ArraySize(m_balance)+STAT_TOTAL);
   ::ArrayCopy(dst_array,m_balance,STAT_TOTAL,0);
//--- 用测试结果填写第一个数组值 (STAT_TOTAL)
   dst_array[0] =::TesterStatistics(STAT_PROFIT);               // 净盈利
   dst_array[1] =::TesterStatistics(STAT_PROFIT_FACTOR);        // 盈利因子
   dst_array[2] =::TesterStatistics(STAT_RECOVERY_FACTOR);      // 恢复因子
   dst_array[3] =::TesterStatistics(STAT_TRADES);               // 交易数量
   dst_array[4] =::TesterStatistics(STAT_DEALS);                // 成交数量
   dst_array[5] =::TesterStatistics(STAT_EQUITY_DDREL_PERCENT); // 最大资金回撤 % 
   dst_array[6] =on_tester_value;                               // 自定义优化条件值
  }
```

**CFrameGenerator::GetBalanceData** () 和 **CFrameGenerator::GetStatData** () 方法在测试完成事件处理器中调用 — **CFrameGenerator::OnTesterEvent** ()。 已接收数据。 将它们按帧发送到终端。

```c++
//+------------------------------------------------------------------+
//| 准备余额值数组并将其在一个帧中发送                                      |
//| 函数应在 EA 的 OnTester() 处理器中调用                                |
//+------------------------------------------------------------------+
void CFrameGenerator::OnTesterEvent(const double on_tester_value)
  {
//--- 获取余额数据
   int data_count=GetBalanceData();
//--- 用于将数据发送到帧的数组
   double stat_data[];
   GetStatData(stat_data,on_tester_value);
//--- 用数据创建一个帧并将其发送到终端
   if(!::FrameAdd(::MQLInfoString(MQL_PROGRAM_NAME),1,data_count,stat_data))
      ::Print(__FUNCTION__," > 帧添加错误: ",::GetLastError());
   else
      ::Print(__FUNCTION__," > 帧已添加");
  }
```

现在我们研究优化期间在帧到达事件处理程序中使用的方法 — **CFrameGenerator::OnTesterPassEvent** ()。 我们需要用于处理帧的变量: 名称，ID，传递数，接收的值和可接收的数据数组。 所有这些数据都使用上面显示的 [FrameAdd()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmpvioixavimn%5Dfpaoeq%2Fdrcmgafd) 函数发送到帧。

```c++
class CFrameGenerator
  {
private:
   //--- 处理帧的变量
   string            m_name;
   ulong             m_pass;
   long              m_id;
   double            m_value;
   double            m_data[];
  };
```

**CFrameGenerator::SaveStatData** () 方法从我们在帧中接收的数组中获取统计参数并将其保存到 单独的字符串数组 中。 那里的数据将包含指标名称和其值。 '=' 符号被用作分隔符。

```c++
class CFrameGenerator
  {
private:
   //--- 含有统计参数的数组
   string            m_stat_data[];
   //---
private:
   //--- 保存统计数据 
   void              SaveStatData(void);
  };
//+------------------------------------------------------------------+
//| 将结果统计参数保存到数组中                                            |
//+------------------------------------------------------------------+
void CFrameGenerator::SaveStatData(void)
  {
//--- 接收帧统计参数的数组
   double stat[];
   ::ArrayCopy(stat,m_data,0,0,STAT_TOTAL);
   ::ArrayResize(m_stat_data,STAT_TOTAL);
//--- 填充测试结果数组
   m_stat_data[0] ="Net profit="+::StringFormat("%.2f",stat[0]);
   m_stat_data[1] ="Profit Factor="+::StringFormat("%.2f",stat[1]);
   m_stat_data[2] ="Factor Recovery="+::StringFormat("%.2f",stat[2]);
   m_stat_data[3] ="Trades="+::StringFormat("%G",stat[3]);
   m_stat_data[4] ="Deals="+::StringFormat("%G",stat[4]);
   m_stat_data[5] ="Equity DD="+::StringFormat("%.2f%%",stat[5]);
   m_stat_data[6] ="OnTester()="+::StringFormat("%G",stat[6]);
  }
```

统计数据应保存在单独的数组中，以便可以在应用程序 (**CProgram**) 中恢复它们来填充表格。 **CFrameGenerator::CopyStatData** () 公共方法在传递数组进行复制之后被调用来接收它们。

```c++
class CFrameGenerator
  {
public:
   //--- 获取传递数组的统计参数
   int               CopyStatData(string &dst_array[]) { return(::ArrayCopy(dst_array,m_stat_data)); }
  };
```

若要在优化过程中更新结果图形，我们需要辅助方法负责向数组添加正数和负数结果。 请注意，结果沿 X 轴添加到当前帧计数器值。 结果，形成的空隙不会在图形上映射为零值。

```c++
//--- 数组的待定尺寸
#define RESERVE_FRAMES 1000000
//+------------------------------------------------------------------+
//| 用于处理优化结果的类                                                 |
//+------------------------------------------------------------------+
class CFrameGenerator
  {
private:
   //--- 帧计数器
   ulong             m_frames_counter;
   //--- 有关正数和负数结果的数据
   double            m_loss_x[];
   double            m_loss_y[];
   double            m_profit_x[];
   double            m_profit_y[];
   //---
private:
   //--- 添加 (1) 负数和 (2) 正数结果至数组
   void              AddLoss(const double loss);
   void              AddProfit(const double profit);
  };
//+------------------------------------------------------------------+
//| 添加负数结果至数组                                                  |
//+------------------------------------------------------------------+
void CFrameGenerator::AddLoss(const double loss)
  {
   int size=::ArraySize(m_loss_y);
   ::ArrayResize(m_loss_y,size+1,RESERVE_FRAMES);
   ::ArrayResize(m_loss_x,size+1,RESERVE_FRAMES);
   m_loss_y[size] =loss;
   m_loss_x[size] =(double)m_frames_counter;
  }
//+------------------------------------------------------------------+
//| 添加正数结果至数组                                                   |
//+------------------------------------------------------------------+
void CFrameGenerator::AddProfit(const double profit)
  {
   int size=::ArraySize(m_profit_y);
   ::ArrayResize(m_profit_y,size+1,RESERVE_FRAMES);
   ::ArrayResize(m_profit_x,size+1,RESERVE_FRAMES);
   m_profit_y[size] =profit;
   m_profit_x[size] =(double)m_frames_counter;
  }
```

此处更新图形的主要方法是 **CFrameGenerator::UpdateResultsGraph** () 和 **CFrameGenerator::UpdateBalanceGraph** ():

```c++
class CFrameGenerator
  {
private:
   //--- 更新结果图形
   void              UpdateResultsGraph(void);
   //--- 更新余额图形
   void              UpdateBalanceGraph(void);
  };
```

在 **CFrameGenerator::UpdateResultsGraph** () 方法中，将测试结果 (正/负利润) 添加到数组中。然后，这些数据显示在相应的图形上。 图形序列的名称 显示当前正数和负数结果的数量。

```c++
//+------------------------------------------------------------------+
//| 更新结果图形                                                       |
//+------------------------------------------------------------------+
void CFrameGenerator::UpdateResultsGraph(void)
  {
//--- 负数结果
   if(m_data[0]<0)
      AddLoss(m_data[0]);
//--- 正数结果
   else
      AddProfit(m_data[0]);
//--- 在优化结果图形上更新序列
   CCurve *curve=m_graph_results.CurveGetByIndex(0);
   curve.Name("P: "+(string)ProfitsTotal());
   curve.Update(m_profit_x,m_profit_y);
//---
   curve=m_graph_results.CurveGetByIndex(1);
   curve.Name("L: "+(string)LossesTotal());
   curve.Update(m_loss_x,m_loss_y);
//--- 水平轴属性
   CAxis *x_axis=m_graph_results.XAxis();
   x_axis.Min(0);
   x_axis.Max(m_frames_counter);
   x_axis.DefaultStep((int)(m_frames_counter/8.0));
//--- 更新图形
   m_graph_results.CalculateMaxMinValues();
   m_graph_results.CurvePlotAll();
   m_graph_results.Update();
  }
```

在 **CFrameGenerator::UpdateBalanceGraph** () 方法的开始处，从帧中传递的数据数组中提取与余额相关的数据。 由于可以在图形上显示若干序列，我们应该令序列更新一致。 为达此目的，我们将使用一个单独的 序列计数器。 若要配置图形中同时显示的余额序列数量，我们需要 **CFrameGenerator::SetCurvesTotal** () 公共方法。 一旦序列计数器达到设定的极限，计数从头 开始。 帧计数器用作序列名称。 序列颜色也取决于结果: 绿色代表正面的结果，红色 — 代表负面的结果。

由于每个结果的交易次数不同，我们应该定义最大的序列，并且 设置沿 X 轴最大值 以适合图上所有必要的序列。

```c++
class CFrameGenerator
  {
private:
   //--- 序列数量
   uint              m_curves_total;
   //--- 图上的当前序列索引
   uint              m_last_serie_index;
   //--- 定义最大序列
   double            m_curve_max[];
   //---
public:
   //--- 设置要在图表上显示的序列数量
   void              SetCurvesTotal(const uint total);
  };
//+------------------------------------------------------------------+
//| 设置要在图表上显示的序列数量                                          |
//+------------------------------------------------------------------+
void CFrameGenerator::SetCurvesTotal(const uint total)
  {
   m_curves_total=total;
   ::ArrayResize(m_curve_max,total);
   ::ArrayInitialize(m_curve_max,0);
  }
//+------------------------------------------------------------------+
//| 更新余额图                                                         |
//+------------------------------------------------------------------+
void CFrameGenerator::UpdateBalanceGraph(void)
  {
//--- 接收当前帧的余额值的数组
   double serie[];
   ::ArrayCopy(serie,m_data,0,STAT_TOTAL,::ArraySize(m_data)-STAT_TOTAL);
//--- 发送数组以便在余额图上显示
   CCurve *curve=m_graph_balance.CurveGetByIndex(m_last_serie_index);
   curve.Name((string)m_frames_counter);
   curve.Color((m_data[0]>=0)? ::ColorToARGB(clrLimeGreen) : ::ColorToARGB(clrRed));
   curve.Update(serie);
//--- 获取序列大小
   int serie_size=::ArraySize(serie);
   m_curve_max[m_last_serie_index]=serie_size;
//--- 定义具有最大元素数两的序列
   double x_max=0;
   for(uint i=0; i<m_curves_total; i++)
      x_max=::fmax(x_max,m_curve_max[i]);
//--- 水平轴属性
   CAxis *x_axis=m_graph_balance.XAxis();
   x_axis.Min(0);
   x_axis.Max(x_max);
   x_axis.DefaultStep((int)(x_max/8.0));
//--- 更新结果图
   m_graph_balance.CalculateMaxMinValues();
   m_graph_balance.CurvePlotAll();
   m_graph_balance.Update();
//--- 增加序列计数器
   m_last_serie_index++;
//--- 如果达到极限，请将序列计数器设置为零
   if(m_last_serie_index>=m_curves_total)
      m_last_serie_index=0;
  }
```

我们已研究了在帧处理器中组织工作所需的方法。 现在，我们仔细看看 **CFrameGenerator::OnTesterPassEvent** () 处理器方法本身。 优化正在进行中，且 [FrameNext()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmpvioixavimn%5Dfpaoeq%2Fdrcmgngxv) 函数获取帧数据，它返回 **true** 。 完成优化后，该方法返回 **false** 。

使用 [FrameInputs()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmpvioixavimn%5Dfpaoeq%2Fdrcmgilpwtq) 函数可以获得 EA 参数列表，需优化的参数集合在那些不参与优化的参数之前。

如果获得帧数据, [FrameInputs()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmpvioixavimn%5Dfpaoeq%2Fdrcmgilpwtq) 函数允许我们在当前优化阶段获取 EA 参数。 然后我们保存统计数据，更新图形并增加帧计数器。 之后， **CFrameGenerator::OnTesterPassEvent** () 方法返回 **true** 直到下一次调用。

```c++
class CFrameGenerator
  {
private:
   //--- EA 参数
   string            m_param_data[];
   uint              m_par_count;
  };
//+------------------------------------------------------------------+
//| 在优化过程中接收数据帧并显示图形                                       |
//+------------------------------------------------------------------+
bool CFrameGenerator::OnTesterPassEvent(void)
  {
//--- 获取新帧后，尝试从中提取数据
   if(::FrameNext(m_pass,m_name,m_id,m_value,m_data))
     {
      //--- 获取所形成帧的 EA 输入参数
      ::FrameInputs(m_pass,m_param_data,m_par_count);
      //--- 将结果统计参数保存到数组中
      SaveStatData();
      //--- 更新结果和余额图
      UpdateResultsGraph();
      UpdateBalanceGraph();
      //--- 增加处理帧的计数器
      m_frames_counter++;
      return(true);
     }
//---
   return(false);
  }
```

优化完成后，会生成 [TesterDeinit](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnveqtgrfeknkt) 事件，并在帧处理模式下调用 **CFrameGenerator::OnTesterDeinitEvent** () 方法。 目前并不是所有的帧都可以在优化过程中处理，因此可视化结果图形可能不完整。 若要查看完整的图片，您需要使用 **CFrameGenerator::FinalRecalculateFrames** () 方法遍历所有帧，并在优化后重新加载图形。

为此，请将指针重定位到帧列表的开始位置，然后将 结果数组 和帧计数器设置为零。 然后，遍历完整的帧列表，以正数和负数结果填充数组，最终更新图形。

```c++
class CFrameGenerator
  {
private:
   //--- 释放数组
   void              ArraysFree(void);
   //--- 优化后所有帧的最终数据重新计算
   void              FinalRecalculateFrames(void);
  };
//+------------------------------------------------------------------+
//| 释放数组                                                           |
//+------------------------------------------------------------------+
void CFrameGenerator::ArraysFree(void)
  {
   ::ArrayFree(m_loss_y);
   ::ArrayFree(m_loss_x);
   ::ArrayFree(m_profit_y);
   ::ArrayFree(m_profit_x);
  }
//+------------------------------------------------------------------+
//| 优化后所有帧的最终数据重新计算                                         |
//+------------------------------------------------------------------+
void CFrameGenerator::FinalRecalculateFrames(void)
  {
//--- 将帧指针设置到开始
   ::FrameFirst();
//--- 重置计数器和数组
   ArraysFree();
   m_frames_counter=0;
//--- 启动循环遍历帧
   while(::FrameNext(m_pass,m_name,m_id,m_value,m_data))
     {
      //--- 负数结果
      if(m_data[0]<0)
         AddLoss(m_data[0]);
      //--- 正数结果
      else
         AddProfit(m_data[0]);
      //--- 增加处理帧的计数器
      m_frames_counter++;
     }
//--- 在图形上更新序列
   CCurve *curve=m_graph_results.CurveGetByIndex(0);
   curve.Name("P: "+(string)ProfitsTotal());
   curve.Update(m_profit_x,m_profit_y);
//---
   curve=m_graph_results.CurveGetByIndex(1);
   curve.Name("L: "+(string)LossesTotal());
   curve.Update(m_loss_x,m_loss_y);
//--- 水平轴属性
   CAxis *x_axis=m_graph_results.XAxis();
   x_axis.Min(0);
   x_axis.Max(m_frames_counter);
   x_axis.DefaultStep((int)(m_frames_counter/8.0));
//--- 更新结果图
   m_graph_results.CalculateMaxMinValues();
   m_graph_results.CurvePlotAll();
   m_graph_results.Update();
  }
```

在这种情况下， **CFrameGenerator::OnTesterDeinitEvent** () 方法代码如下所示。 此处我们还需记住总帧数，并将计数器设置为零。

```c++
//+------------------------------------------------------------------+
//| 应在 OnTesterDeinit() 处理器中调用                                  |
//+------------------------------------------------------------------+
void CFrameGenerator::OnTesterDeinitEvent(void)
  {
//--- 优化后最终重新计算所有帧的数据
   FinalRecalculateFrames();
//--- 记住总帧数并将计数器设置为零
   m_frames_total     =m_frames_counter;
   m_frames_counter   =0;
   m_last_serie_index =0;
  }
```

接下来，我们看看在应用程序类中使用 **CFrameGenerator** 类方法。

### 在应用程序类中处理数据优化

图形界面在 **CProgram::OnTesterInitEvent** () 测试初始化方法中创建。 之后，图形界面应该无法访问。 为此，我们需要额外的 **CProgram::IsAvailableGUI** () 和 **CProgram::IsLockedGUI** () 方法，它们将用在其它 **CProgram** 类方法之中。

我们初始化帧生成器: 传递指向图形的指针，用于可视化优化结果。

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 界面可用性
   void              IsAvailableGUI(const bool state);
   void              IsLockedGUI(const bool state);
  }
//+------------------------------------------------------------------+
//| 优化开始事件                                                       |
//+------------------------------------------------------------------+
void CProgram::OnTesterInitEvent(void)
  {
//--- 创建图形界面
   if(!CreateFrameModeGUI())
     {
      ::Print(__FUNCTION__," > 不能创建图形界面！");
      return;
     }
//--- 令界面无法访问
   IsLockedGUI(false);
//--- 初始化帧生成器
   m_frame_gen.OnTesterInitEvent(m_graph1.GetGraphicPointer(),m_graph2.GetGraphicPointer());
  }
//+------------------------------------------------------------------+
//| 界面可用性                                                         |
//+------------------------------------------------------------------+
void CProgram::IsAvailableGUI(const bool state)
  {
   m_window1.IsAvailable(state);
   m_sleep_ms.IsAvailable(state);
   m_curves_total.IsAvailable(state);
   m_reply_frames.IsAvailable(state);
  }
//+------------------------------------------------------------------+
//| 阻塞界面                                                          |
//+------------------------------------------------------------------+
void CProgram::IsLockedGUI(const bool state)
  {
   m_window1.IsAvailable(state);
   m_sleep_ms.IsLocked(!state);
   m_curves_total.IsLocked(!state);
   m_reply_frames.IsLocked(!state);
  }
```

我们已经提到表中的数据将在应用程序类中使用 **CProgram::UpdateStatTable** () 和 **CProgram::UpdateParamTable** () 方法进行更新。 两个表的代码都是相同的，所以我们只举一个例子。 参数名称和值在同一行中使用 '=' 作为分隔符显示。 因此，我们在一个循环中遍历它们，并将其拆分成分成两个元素的单独数组。 然后，我们将这些值输入到表格单元格中。

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 更新统计表
   void              UpdateStatTable(void);
   //--- 更新参数表
   void              UpdateParamTable(void);
  }
//+------------------------------------------------------------------+
//| 更新统计表                                                         |
//+------------------------------------------------------------------+
void CProgram::UpdateStatTable(void)
  {
//--- 获取统计表的数据数组
   string stat_data[];
   int total=m_frame_gen.CopyStatData(stat_data);
   for(int i=0; i<total; i++)
     {
      //--- 分成两行并输入到表格
      string array[];
      if(::StringSplit(stat_data[i],'=',array)==2)
        {
         if(m_frame_gen.CurrentFrame()>1)
            m_table_stat.SetValue(1,i,array[1],0,true);
         else
           {
            m_table_stat.SetValue(0,i,array[0],0,true);
            m_table_stat.SetValue(1,i,array[1],0,true);
           }
        }
     }
//--- 更新表格
   m_table_stat.Update();
  }
```

在表格中更新数据的两个方法 会在 **CProgram::OnTesterPassEvent** () 方法中以来自 **CFrameGenerator::OnTesterPassEvent** () 的正数应答调用:

```c++
//+------------------------------------------------------------------+
//| 优化通关处理事件                                                    |
//+------------------------------------------------------------------+
void CProgram::OnTesterPassEvent(void)
  {
//--- 处理获得的测试结果并显示图形
   if(m_frame_gen.OnTesterPassEvent())
     {
      UpdateStatTable();
      UpdateParamTable();
     }
  }
```

完成优化后， **CProgram::CalculateProfitsAndLosses** () 方法计算正数和负数结果的百分比，并在状态栏中显示数据:

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 计算正数和负数结果的比率
   void              CalculateProfitsAndLosses(void);
  }
//+------------------------------------------------------------------+
//| 计算正数和负数结果的比率                                              |
//+------------------------------------------------------------------+
void CProgram::CalculateProfitsAndLosses(void)
  {
//--- 如果没有帧，退出
   if(m_frame_gen.FramesTotal()<1)
      return;
//--- 负数和正数结果的数量
   int losses  =m_frame_gen.LossesTotal();
   int profits =m_frame_gen.ProfitsTotal();
//--- 百分比
   string pl =::DoubleToString(((double)losses/(double)m_frame_gen.FramesTotal())*100,2);
   string pp =::DoubleToString(((double)profits/(double)m_frame_gen.FramesTotal())*100,2);;
//--- 显示在状态栏中
   m_status_bar.SetValue(1,"Profits: "+(string)profits+" ("+pp+"%)"+" / Losses: "+(string)losses+" ("+pl+"%)");
   m_status_bar.GetItemPointer(1).Update(true);
  }
```

下面显示处理 [TesterDeinit](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnveqtgrfeknkt) 事件的方法代码。 初始化图形核心 意味着要跟踪鼠标光标的移动并启动计时器。 不幸的是，在当前的 **MetaTrader 5** 版本中，计时器在优化完成时无法打开。 我们希望这个机会将来会出现。

```c++
//+------------------------------------------------------------------+
//| 优化完成事件                                                       |
//+------------------------------------------------------------------+
void CProgram::OnTesterDeinitEvent(void)
  {
//--- 优化完成
   m_frame_gen.OnTesterDeinitEvent();
//--- 令界面可访问
   IsLockedGUI(true);
//--- 计算正数和负数结果的比率
   CalculateProfitsAndLosses();
//--- 初始化图形界面核心
   CWndEvents::InitializeCore();
  }
```

现在我们还可以在优化完成后处理帧数据。 EA 放置在终端图表中，可以访问这些帧来分析结果。 图形界面令其非常直观。 在 **CProgram::OnEvent** () 事件处理器方法中, 我们跟踪:

- 输入字段中的变化用于设置图形上显示的余额序列的数量;
- 启动查看优化结果。

**CProgram::UpdateBalanceGraph** () 方法用于更改序列数量后更新图形。 此处我们设置在帧生成器中工作的序列数量，然后在图形上保留这个数字。

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 更新结果图
   void              UpdateBalanceGraph(void);
  };
//+------------------------------------------------------------------+
//| 更新图形                                                           |
//+------------------------------------------------------------------+
void CProgram::UpdateBalanceGraph(void)
  {
//--- 设置工作序列的数量
   int curves_total=(int)m_curves_total.GetValue();
   m_frame_gen.SetCurvesTotal(curves_total);
//--- 删除序列
   CGraphic *graph=m_graph1.GetGraphicPointer();
   int total=graph.CurvesTotal();
   for(int i=total-1; i>=0; i--)
      graph.CurveRemoveByIndex(i);
//--- 添加序列
   double data[];
   for(int i=0; i<curves_total; i++)
      graph.CurveAdd(data,CURVE_LINES,"");
//--- 更新结果图
   graph.CurvePlotAll();
   graph.Update();
  }
```

在事件处理函数中， **CProgram::UpdateBalanceGraph** () 方法在 输入字段切换按钮 (**ON\_CLICK\_BUTTON**)，以及 键盘在字段中输入数值 (**ON\_END\_EDIT**) 时被调用:

```c++
//+------------------------------------------------------------------+
//| 事件处理器                                                         |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按钮触发事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 更改图表上的序列数量
      if(lparam==m_curves_total.Id())
        {
         UpdateBalanceGraph();
         return;
        }
      return;
     }
//--- 在输入字段中输入数值的事件
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      //--- 更改图表上的序列数量
      if(lparam==m_curves_total.Id())
        {
         UpdateBalanceGraph();
         return;
        }
      return;
     }
  }
```

若要在 **CFrameGenerator** 类中查看优化后的结果，需要实现 **CFrameGenerator::ReplayFrames** () 公共方法。 在此，我们首先通过帧计数器来定义以下内容: 如果进程刚刚启动，则数组设置为零，帧指针移动到列表的最开始处。 之后，循环遍历帧，并执行与前面介绍的 **CFrameGenerator::OnTesterPassEvent** () 方法相同的操作。 如果收到一个帧，该方法返回 **true** 。 完成后，帧和序列计数器设置为零，方法返回 **false** 。

```c++
class CFrameGenerator
  {
public:
   //--- 循环遍历帧
   bool              ReplayFrames(void);
  };
//+------------------------------------------------------------------+
//| 优化完成后重演帧                                                    |
//+------------------------------------------------------------------+
bool CFrameGenerator::ReplayFrames(void)
  {
//--- 将帧指针设置为开头
   if(m_frames_counter<1)
     {
      ArraysFree();
      ::FrameFirst();
     }
//--- 启动循环遍历帧
   if(::FrameNext(m_pass,m_name,m_id,m_value,m_data))
     {
      //--- 获取 EA 输入，哪个帧已经形成
      ::FrameInputs(m_pass,m_param_data,m_par_count);
      //--- 将统计结果参数保存到数组中
      SaveStatData();
      //--- 更新结果和余额图
      UpdateResultsGraph();
      UpdateBalanceGraph();
      //--- 增加处理帧的计数器
      m_frames_counter++;
      return(true);
     }
//--- 循环完成
   m_frames_counter   =0;
   m_last_serie_index =0;
   return(false);
  }
```

**CFrameGenerator::ReplayFrames** () 方法在 **CProgram** 类中由 **ViewOptimizationResults** () 方法调用。 在启动帧之前，图形界面变得不可用。 可在 **Sleep** 输入字段中指定暂停来调整滚动速度。 同时，状态栏会显示 进度条，示意进程结束前的时间。

```c++
class CFrameGenerator
  {
private:
   //--- 查看优化结果
   void              ViewOptimizationResults(void);
  };
//+------------------------------------------------------------------+
//| 查看优化结果                                                        |
//+------------------------------------------------------------------+
void CProgram::ViewOptimizationResults(void)
  {
//--- 令界面不可访问
   IsAvailableGUI(false);
//--- 暂停
   int pause=(int)m_sleep_ms.GetValue();
//--- 播放帧
   while(m_frame_gen.ReplayFrames() && !::IsStopped())
     {
      //--- 更新表格
      UpdateStatTable();
      UpdateParamTable();
      //--- 更新进度条
      m_progress_bar.Show();
      m_progress_bar.LabelText("Replay frames: "+string(m_frame_gen.CurrentFrame())+"/"+string(m_frame_gen.FramesTotal()));
      m_progress_bar.Update((int)m_frame_gen.CurrentFrame(),(int)m_frame_gen.FramesTotal());
      //--- 暂停
      ::Sleep(pause);
     }
//--- 计算正数和负数结果的比率
   CalculateProfitsAndLosses();
//--- 隐藏进度条
   m_progress_bar.Hide();
//--- 令界面可用
   IsAvailableGUI(true);
   m_reply_frames.MouseFocus(false);
   m_reply_frames.Update(true);
  }
```

**CProgram::ViewOptimizationResults** () 方法通过在应用程序图形界面上按 **重演帧** 按钮来调用。 **ON\_CLICK\_BUTTON** 事件生成。

```c++
//+------------------------------------------------------------------+
//| 事件处理器                                                         |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 查看优化结果 
      if(lparam==m_reply_frames.Id())
        {
         ViewOptimizationResults();
         return;
        }
      //--- 
      ...
      return;
     }
  }
```

现在是时候查看结果并在使用帧进行优化期间定义用户在图形上实际看到的内容。

### 显示获得的结果

对于测试，我们将使用标准交付的交易算法 — **移动平均线** 。 我们将 ("按原样") 实现它，没有附加和调整。 开发应用程序的所有文件都位于同一个文件夹中。 策略文件包含在 **Program.mqh** 文件中。

**FormatString.mqh** 在这里作为一个附加函数用于行格式化。 它们不是任何类的一员，所以我们用黑色标记箭头。 由此产生的应用程序结构如下所示:

![图例 4. 包括交易策略类和附加函数的文件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-024%2Cplg "图例 4. 包括交易策略类和附加函数的文件")
![[Pasted image 20260629001835.png]]

![[Pasted image 20260719060155.png]]
图例 4. 包括交易策略类和附加函数的文件

我们尝试优化参数并查看它在终端图表上的外观。 测试器设置: EURUSD H1，时间范围 2017.01.01 – 2018.01.01。

![图例 5. 显示标准交付的移动平均 EA 结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-025%2Cplg "图例 5. 显示标准交付的移动平均 EA 结果")
![[Pasted image 20260629001847.png]]

![[Pasted image 20260719060218.png]]
图例 5. 显示标准交付的移动平均 EA 结果

正如我们所看到的，事实证明信息量相当丰富。 几乎所有交易算法的结果均为负值 (95.23％)。 如果我们增加时间范围，它们会变得更糟。 但是，在开发交易系统时，我们应该确保大多数结果都是正数。 否则，该算法会导致亏损，不应该使用。 有必要优化更多数据的参数，并确保尽可能多的交易。

我们尝试从标准交付测试另一种交易算法 — **MACD Sample.mq5** 。 它已经作为一个类实现。 经过小小的改进之后，我们可以简单地将它连接到我们的应用程序，就像上一个。 我们应该在相同的品种和时间帧上测试它。 我们增加测试中更多交易的时间范围 (2010.01.01 – 2018.01.01)。 以下是交易 EA 的优化结果:

![图例 6. 显示标准交付的 MACD 示例结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-026%2Cplg "图例 6. 显示标准交付的 MACD 示例结果")
![[Pasted image 20260629001859.png]]

![[Pasted image 20260719060326.png]]
图例 6. 显示标准交付的 MACD 示例结果

在此我们看到一个非常不同的结果: 90.89％ 的正面成果。

根据所使用的数据量，参数的优化可能需要很长时间。 在整个过程中，您无需坐在电脑前。 优化后，您可以按 **重演帧** 以加速模式启动重复查看结果。 我们开始播放帧，显示限制为 25 个序列。 这是它的外观:

![图例 7. 显示优化后 MACD 示例 EA 结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F11-027%2Cgkf "图例 7. 显示优化后 MACD 示例 EA 结果")
![[Pasted image 20260629001916.png]]

![[Pasted image 20260719060514.png]]

![[Pasted image 20260719060551.png]]
图例 7. 显示优化后 MACD 示例 EA 结果

### 结束语

在本文中，我们介绍了用于接收和分析优化帧的现代版程序。 在基于 **EasyAndFast** 函数库开发的图形界面环境中将数据可视化。

该解决方案的缺点是，在帧处理模式下完成优化后，不能启动计时器。 这对使用相同图形界面有一定的限制。 第二个问题是，从图表中删除 EA 时，不会触发 [OnDeinit()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnfeknkt) 函数中的逆初始化。 这会干扰正确的事件处理。 也许，这些问题将在未来的 **MetaTrader 5** 版本中解决。

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/4395](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F63%3B5)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-4197.xir "下载单独ZIP中的所有附件")

[MQL5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-4197%2Foqn5%2Czkp "下载 MQL5.zip") (33.34 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[如何创建任意复杂度的图形面板](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6523)

本文详细介绍了如何在 CAppDialog 类的基础上创建面板，以及如何在面板上增加控件。它描述了面板的结构和框架，显示了对象的继承关系。从这篇文章中，您还可以学习到事件是怎样处理的以及它们是怎样在独立的控件之间传递的。另外还有实例演示了如何编辑面板参数，例如大小和背景颜色。

[交易者生活窍门: 利用 defines (#define) 融合 ForEach](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6312)

对于那些仍然使用 MQL4 编程且不想切换到 MQL5 的人来说, 本文是一个过渡步骤。 我们继续寻找以 MQL4 风格编写代码的机会。 这一次, 我们将研究 #define 预处理器的宏替代。

[自置缓存的指标速度比较](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F63%3A8)

本文将经典的 MQL5 指标访问方法与 MQL4 风格的替代方法进行比较。 研究若干种 MQL4 风格的指标访问方法: 带有和未带有指标句柄缓存。 还会研究分析 MQL5 核心内部的指标句柄。

[如何创建订购指标的需求规范](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6324)

大多数情况下, 开发交易系统的第一步是创建技术指标, 以便识别有价值的市场行为形态。 专业开发的指标可以从自由职业服务板块订购。 从本文中, 您将学习如何创建一份适当的需求规范, 这将有助于您更快地获得所需的指标。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fpgxn2twxxmdkrd5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F41%3A%251Fwto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fskglan.cdtaltcgg%2506wto_aoltgnv%251Dqu%60sarkbg.qiencl'24uvm%5Dccmrakgl%251D2602%2CMSL7.aoo.Knvepncl%24a%3Fsexitsl%7Betz%60jafxdlgsjerdutjjaduh%26q%3D68671e46513071%3Bd183d%3B608a0a0ff%60032f7d0472960710f487331dc11%3Bc%3Ad48%24v%3F1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24ukd%3Fxtqphgikbew%7Brxwgmeu%60easvvlw%60cmij%26qsl%3D37%3A2463657377204745%26qsl_fr%3F1%24sqn%5Dsp%3D2%26dv%5Ddctg%3D37%3A24430%3B9%24rgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F63%3B5%24bcci_ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fwsgrq%250Fvon66%250Fraee0%251F'21uqepAatkols%24tktne%3F%25G5'9A%25C8'22MgtcTpafep%25007%2500'E6%25%408'AF%25G4'BC%25C4'E4%25%3B8'91%25G7'AF%25%3B6'E5%25%3B5'A7%25G4'BA%25%3B8'E7%25%3AC'94%25G7'9C%25%3A4'E7%25%3AF'AD%25G8'A5%25%3A6'E7%25%3AC'94%2500%2F%2500OQN5'E4%25%3B6'85%25G7'A%40%25C0%24sar%5Drgs%3F1%3B22x30%3A0%24aa%3D37%3A24636586209%3B162%24fx_wnkq%3F615%3A016%3B03232540623%24st%3D0572)