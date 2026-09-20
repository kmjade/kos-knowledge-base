---
title: "图形界面 IX: 进度条和线形图表控件 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-10-18T10:58:02+00:00Z
created: 2026-06-28
description: "第九部份的第二章致力于开发进度条和线形图表控件。与以往一样，会提供详细的实例展示如何在自定义的MQL应用程序中使用这些控件。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc1)
- [进度条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc2)
- [线形图表控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc5)
- [增强来自标准库的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc6)
	- [CLineGraph 类的开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc7)
	- [写用于测试线形图表的应用程序](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!cnileercpj)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc9)

### 简介

请阅读第一篇文章，名为 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 以更好地理解本开发库的目标。在每个部分的文章末尾，都提供了章节链接的列表，您也可以从那里下载开发库最新的完整版本，文件必须按照它们在归档中的位置，放到相同的目录下。

在前一篇文章中，我们已经讨论了两种相互关联的控件: 颜色选择器和颜色按钮，第二章将致力于开发界面中的进度条和线形图表控件。与以往一样，会提供详细的实例展示如何在自定义的MQL应用程序中使用这些控件。

### 进度条控件

当进行一个长时间的过程时，需要一个界面控件来向用户显示当前进行的阶段，以及大约还剩多少时间结束，这通常是使用图形界面中的进度条控件来完成的。这个控件最简单的实现方式是使用两个长方形：其中一个显示过程的总长度，而第二个就是这个过程的完成部分。在进度条不同的实现方法中，经常可以看到百分比，并且还可以在这个控件中加入更多的相关信息。

让我们列出所有用于开发库中创建进度条的组件。

1. 背景
2. 描述
3. 指针滚动条
4. 指针背景
5. 百分比

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-el.rne)
![[Pasted image 20260628224537.png]]
图 1. 进度条控件的组成部分

让我们仔细研究用于开发这个控件的类。

### 开发 CProgressBar 类

我们创建 **ProgressBar.mqh** 文件，其中含有 **CProgressBar** 类以及所有控件都有的标准方法，并且在库引擎(**WndContainer.mqh** 文件)中包含它。以下是可以用来配置的组件列表。

- 控件的通用背景颜色
- 描述的文字
- 描述文字的颜色
- 两个轴 (x, y) 上描述的偏移
- 区域的颜色和指针区域边框的颜色
- 指示区域背景的大小
- 指示区域边框的宽度
- 指示滚动条的颜色
- 进行过程的百分比标签的偏移
- 百分比中的小数点位数

```
class CProgressBar : public CElement
  {
private:
   //--- 控件的范围颜色
   color             m_area_color;
   //--- 显示过程的颜色
   string            m_label_text;
   //--- 文字颜色
   color             m_label_color;
   //--- 两个轴上文字标签的偏移
   int               m_label_x_offset;
   int               m_label_y_offset;
   //--- 进度条的颜色和区域边框的颜色
   color             m_bar_area_color;
   color             m_bar_border_color;
   //--- 进度条的大小
   int               m_bar_x_size;
   int               m_bar_y_size;
   //--- 进度条在两个轴上的偏移
   int               m_bar_x_offset;
   int               m_bar_y_offset;
   //--- 进度条的边框宽度
   int               m_bar_border_width;
   //--- 指针颜色
   color             m_indicator_color;
   //--- 百分比标签的偏移
   int               m_percent_x_offset;
   int               m_percent_y_offset;
   //--- 小数点位数
   int               m_digits;
   //---
public:
   //--- 小数点位数
   void              SetDigits(const int digits)        { m_digits=::fabs(digits);         }
   //--- (1) 区域的颜色, (2) 标签的文字 以及(3)标签的颜色
   void              AreaColor(const color clr)         { m_area_color=clr;                }
   void              LabelText(const string text)       { m_label_text=text;               }
   void              LabelColor(const color clr)        { m_label_color=clr;               }
   //--- 文字标签的偏移
   void              LabelXOffset(const int x_offset)   { m_label_x_offset=x_offset;       }
   void              LabelYOffset(const int y_offset)   { m_label_y_offset=y_offset;       }
   //--- (1) 区域的颜色 (2) 进度条边框的颜色, (3) 指针的颜色
   void              BarAreaColor(const color clr)      { m_bar_area_color=clr;            }
   void              BarBorderColor(const color clr)    { m_bar_border_color=clr;          }
   void              IndicatorColor(const color clr)    { m_indicator_color=clr;           }
   //--- (1) 边框宽度, (2) 指针区域的大小
   void              BarBorderWidth(const int width)    { m_bar_border_width=width;        }
   void              BarXSize(const int x_size)         { m_bar_x_size=x_size;             }
   void              BarYSize(const int y_size)         { m_bar_y_size=y_size;             }
   //--- (1) 进度条在两个轴上的偏移, (2) 百分比标签的偏移
   void              BarXOffset(const int x_offset)     { m_bar_x_offset=x_offset;         }
   void              BarYOffset(const int y_offset)     { m_bar_y_offset=y_offset;         }
   //--- 文字标签的偏移 (过程的百分比)
   void              PercentXOffset(const int x_offset) { m_percent_x_offset=x_offset;     }
   void              PercentYOffset(const int y_offset) { m_percent_y_offset=y_offset;     }
  };
```

为了创建进度条控件，我们将使用5个 **私有(private)** 方法和1个 **公有(public)** 方法:

```
class CProgressBar : public CElement
  {
private:
   //--- 用于创建控件的对象
   CRectLabel        m_area;
   CLabel            m_label;
   CRectLabel        m_bar_bg;
   CRectLabel        m_indicator;
   CLabel            m_percent;
   //---
public:
   //--- 用于创建控件的方法
   bool              CreateProgressBar(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabel(void);
   bool              CreateBarArea(void);
   bool              CreateIndicator(void);
   bool              CreatePercent(void);
  };
```

为了使进度条可以像所期待的那样工作，我们需要指示一个过程中的总的步数(迭代次数)，以及所关联的当前迭代的索引，我们将需要两个辅助方法，分别是 **CProgressBar::StepsTotal** () 和 **CProgressBar::CurrentIndex** ()。它们是用于 **私有(private)** 的，这两个方法都只有一个参数，它们的数值可以修正以免超出有效的范围。

```
class CProgressBar : public CElement
  {
private:
   //--- 总的步数
   double            m_steps_total;
   //--- 当前的指示位置
   double            m_current_index;
   //---
private:
   //--- 设置指针新的数值
   void              CurrentIndex(const int index);
   void              StepsTotal(const int total);
  };
//+------------------------------------------------------------------+
//| 进度条的总步数                          |
//+------------------------------------------------------------------+
void CProgressBar::StepsTotal(const int total)
  {
//--- 如果小于0，就要修正
   m_steps_total=(total<1)? 1 : total;
//--- 如果超出范围，就要修正
   if(m_current_index>m_steps_total)
      m_current_index=m_steps_total;
  }
//+------------------------------------------------------------------+
//| 指示的当前状态                         |
//+------------------------------------------------------------------+
void CProgressBar::CurrentIndex(const int index)
  {
//--- 如果小于0，就要修正
   if(index<0)
      m_current_index=1;
//--- 如果超出范围，就要修正
   else
      m_current_index=(index>m_steps_total)? m_steps_total : index;
  }
```

**CProgressBar::StepsTotal** () 和 **CProgressBar::CurrentIndex** () 方法是在控件与外界交互的主方法中调用的 — **CProgressBar::Update** ()，进度条会使用发送过来的参数来进行必要的计算并且重绘。第一个参数是进度的迭代索引(**index**), 第二个则是 — 迭代的总次数 (**total**)。在所有这些数值经过检查之后，就会计算得到指示滚动条的新的宽度。这个数值如有必要可以再做修改。下面, (1) 指示滚动条会设置新的宽度, (2) 计算百分比数值并构建它的字符串, 并且在方法的最后 (3) 在百分比文字标签中设置新的值。

```
class CProgressBar : public CElement
  {
public:
   //--- 使用指定数值更新指示
   void              Update(const int index,const int total);
  };
//+------------------------------------------------------------------+
//| 更新进度条                            |
//+------------------------------------------------------------------+
void CProgressBar::Update(const int index,const int total)
  {
//--- 设置新的索引
   CurrentIndex(index);
//--- 设置新的范围
   StepsTotal(total);
//--- 计算指示宽度
   double new_width=(m_current_index/m_steps_total)*m_bar_bg.XSize();
//--- 如果小于1，做出修正
   if((int)new_width<1)
      new_width=1;
   else
     {
      //--- 考虑到边框的宽度进行修正
      int x_size=m_bar_bg.XSize()-(m_bar_border_width*2);
      //--- 如果超出边界就进行修正
      if((int)new_width>=x_size)
         new_width=x_size;
     }
//--- 为指示设置新的宽度
   m_indicator.X_Size((int)new_width);
//--- 计算百分比并构造一个字符串
   double percent =m_current_index/m_steps_total*100;
   string desc    =::DoubleToString((percent>100)? 100 : percent,m_digits)+"%";
//--- 设置新的值
   m_percent.Description(desc);
  }
```

所有用于创建和管理进度条的方法都已经准备完毕，现在，我们将测试它并看它在MQL应用程序的图形界面中运行得如何。

### 测试进度条

前面文章中的EA交易可以拿来作为测试的模板，我们将删除除了主菜单和状态条之外的所有控件，我们将在这个EA交易的图形界面上加上8个进度条，为了使这项任务更加有趣，我们使用滑轨来管理迭代的次数。

在 **CProgram** 自定义类中，我们生命所需类型控件的实例以及创建它们的方法，并设定距离表单边缘的距离:

```
class CProgram : public CWndEvents
  {
private:
   //--- 滑轨
   CSlider           m_slider1;
   //--- 进度条
   CProgressBar      m_progress_bar1;
   CProgressBar      m_progress_bar2;
   CProgressBar      m_progress_bar3;
   CProgressBar      m_progress_bar4;
   CProgressBar      m_progress_bar5;
   CProgressBar      m_progress_bar6;
   CProgressBar      m_progress_bar7;
   CProgressBar      m_progress_bar8;
   //---
private:
   //--- 滑轨
#define SLIDER1_GAP_X         (7)
#define SLIDER1_GAP_Y         (50)
   bool              CreateSlider1(const string text);
//---
#define PROGRESSBAR1_GAP_X    (7)
#define PROGRESSBAR1_GAP_Y    (100)
   bool              CreateProgressBar1(void);
//---
#define PROGRESSBAR2_GAP_X    (7)
#define PROGRESSBAR2_GAP_Y    (125)
   bool              CreateProgressBar2(void);
//---
#define PROGRESSBAR3_GAP_X    (7)
#define PROGRESSBAR3_GAP_Y    (150)
   bool              CreateProgressBar3(void);
//---
#define PROGRESSBAR4_GAP_X    (7)
#define PROGRESSBAR4_GAP_Y    (175)
   bool              CreateProgressBar4(void);
//---
#define PROGRESSBAR5_GAP_X    (7)
#define PROGRESSBAR5_GAP_Y    (200)
   bool              CreateProgressBar5(void);
//---
#define PROGRESSBAR6_GAP_X    (7)
#define PROGRESSBAR6_GAP_Y    (225)
   bool              CreateProgressBar6(void);
//---
#define PROGRESSBAR7_GAP_X    (7)
#define PROGRESSBAR7_GAP_Y    (250)
   bool              CreateProgressBar7(void);
//---
#define PROGRESSBAR8_GAP_X    (7)
#define PROGRESSBAR8_GAP_Y    (275)
   bool              CreateProgressBar8(void);
  };
```

在之前的文章中已经讨论了所有控件的创建，所以，我们可以只提供创建一个进度条的方法代码作为实例 (参见下面的代码)。我们可以看到，没有什么难以理解的内容，一切都简单而直接。

```
//+------------------------------------------------------------------+
//| 创建进度条1                           |
//+------------------------------------------------------------------+
bool CProgram::CreateProgressBar1(void)
  {
//--- 保存表单的指针
   m_progress_bar1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+PROGRESSBAR1_GAP_X;
   int y=m_window1.Y()+PROGRESSBAR1_GAP_Y;
//--- 在创建之前设置属性
   m_progress_bar1.XSize(220);
   m_progress_bar1.YSize(15);
   m_progress_bar1.BarXSize(123);
   m_progress_bar1.BarYSize(11);
   m_progress_bar1.BarXOffset(65);
   m_progress_bar1.BarYOffset(2);
   m_progress_bar1.LabelText("Progress 01:");
//--- 创建控件
   if(!m_progress_bar1.CreateProgressBar(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把控件指针加到库中
   CWndContainer::AddToElementsArray(0,m_progress_bar1);
   return(true);
  }
```

应该在创建图形界面的主方法中调用这些方法，以下显示了精简版的这个方法的代码，只显示了增加的内容:

```
//+------------------------------------------------------------------+
//| 创建 EA 交易的面板                       |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 创建用于控件元件的表单
//--- 创建控件:
//    主菜单
//--- 上下文菜单

//--- 滑轨
   if(!CreateSlider1("迭代总次数:"))
      return(false);
//--- 进度条
   if(!CreateProgressBar1())
      return(false);
   if(!CreateProgressBar2())
      return(false);
   if(!CreateProgressBar3())
      return(false);
   if(!CreateProgressBar4())
      return(false);
   if(!CreateProgressBar5())
      return(false);
   if(!CreateProgressBar6())
      return(false);
   if(!CreateProgressBar7())
      return(false);
   if(!CreateProgressBar8())
      return(false);
      
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

现在，让我们谈谈它将如何运行。我们在自定义类的 **CProgram::OnTimerEvent** ()计时器函数中模拟所有进度条的处理，迭代的次数可以通过滑轨人工进行控制，每次计时器事件中都有一个选项来获取编辑框的当前数值，对于每个进度条，都有一个静态的计数器，我们将会使用不同的数值使它们增加。通过这种方式，我们将能模拟进度条以异步方式进行不同的工作。

```
//+------------------------------------------------------------------+
//| 计时器函数                             |
//+------------------------------------------------------------------+
void CProgram::OnTimerEvent(void)
  {
   CWndEvents::OnTimerEvent();
//--- 迭代次数
   int total=(int)m_slider1.GetValue();
//--- 8个进度条
   static int count1=0;
   count1=(count1>=total) ? 0 : count1+=8;
   m_progress_bar1.Update(count1,total);
//---
   static int count2=0;
   count2=(count2>=total) ? 0 : count2+=3;
   m_progress_bar2.Update(count2,total);
//---
   static int count3=0;
   count3=(count3>=total) ? 0 : count3+=12;
   m_progress_bar3.Update(count3,total);
//---
   static int count4=0;
   count4=(count4>=total) ? 0 : count4+=6;
   m_progress_bar4.Update(count4,total);
//---
   static int count5=0;
   count5=(count5>=total) ? 0 : count5+=18;
   m_progress_bar5.Update(count5,total);
//---
   static int count6=0;
   count6=(count6>=total) ? 0 : count6+=10;
   m_progress_bar6.Update(count6,total);
//---
   static int count7=0;
   count7=(count7>=total) ? 0 : count7+=1;
   m_progress_bar7.Update(count7,total);
//---
   static int count8=0;
   count8=(count8>=total) ? 0 : count8+=15;
   m_progress_bar8.Update(count8,total);
   
//--- 状态条的计时器函数
   static int count9=0;
   if(count9<TIMER_STEP_MSC*10)
     {
      count9+=TIMER_STEP_MSC;
      return;
     }
   count9=0;
   m_status_bar.ValueToItem(1,::TimeToString(::TimeLocal(),TIME_DATE|TIME_SECONDS));
  }
```

我们编译程序并且在图表上载入，结果如下:

![图 2. 测试进度条控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-05_%5D3%2Cjrg "图 2. 测试进度条控件。")
![[Pasted image 20260628224623.png]]
图 2. 测试进度条控件。

还不错!下面，在线形图表的测试程序中，我们将以更加特别的方式测试进度条。

### 线形图表控件

线形图表使得可以在设计的长方形区域中使用垂直和水平尺度使数据数组可视化，点和连线位于其中。不能低估这种工具的优点，比如，可以在图表中显示交易账户的余额和净值，以我的观点， **MetaTrader** 终端中标准的指标标准类型程序不是非常方便，因为它不允许在窗口的可见部分中显示所有数据数组，

终端图表的尺度设置只能是从0 **0** (最强程度的压缩)到 **5** 。最强等级的压缩表明一个像素来代表数组中的一个记录，并且如果整个数组无法容纳到所选择的区域中时，有选项可以在图表中使用滚动条。容纳更多数据的第二种方法是转到更高级的时段，如果设置烛形或者柱形，我们至少可以在指定的时段中看到完整范围的数据。

如果图表的缩放没有限制那将是最方便的，任何大小的数组都能容纳在宽度大于一个像素点宽的范围中。同时，要求数据永远明确把位置设为从范围的开头直到结束,也就是说数据的第一个点(数组控件)必须靠在区域的左边儿最后一个点 - 在右边。例如， **Excel** 中的图表就是这样制作的。通过这种方式，您可以把任何大小的数组容纳在线形图表中而不会丢失最小值和最大值。

作为实例，下面的屏幕截图提供了一个来自 **Excel** 的线形图表, 其中包含了 **50000** 个数据大小的数组容纳其中，而没有任何损失 (最小值和最大值)。

![图 3. Excel 中的线形图表。数据数组的大小 - 50000 个](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-0%3A_%5D3%2Cjrg "图 3. Excel 中的线形图表。数据数组的大小 - 50000 个")
![[Pasted image 20260628224635.png]]
图 3. Excel 中的线形图表。数据数组的大小 - 50000 个

终端的开发人员已经在标准库中提供了用于创建几种类型图表的类，它们的位置是: *\<data folder>\\MQLX\\Include\\Canvas\\Charts* 。我们把这些类列在下面的列表中:

- **CChartCanvas** – 用于创建三种类型图表的基类。
- **CLineChart** – 从 **CChartCanvas** 类派生，用于创建线形图表。
- **CHistogramChart** – 从 **CChartCanvas** 类派生，用于创建柱形图。
- **CPieChart** – 从 **CChartCanvas** 类中派生，用于创建饼图。

作为一个临时方案，图表已经可以用在MQL应用程序的图形界面中，我们将应用现在在标准库中所提供的。这些类的一些方法将要改变，而其中的一些将被完全取代。我们还将加入额外的选型，最终，在写未来文章的过程中，我们将会擦汗那个是创建一个额外的库来绘制更高质量的图表。

### 增强来自标准库的类

上面提到，所需类的文件位于以下目录: *<数据路径>\\MQLX\\Include\\Canvas\\Charts*. 让我们在开发库的目录中创建 **Charts** 文件夹， (*\<data folder>\\MQLX\\Include\\EasyAndFastGUI\\Canvas*)并从标准库中复制 **ChartCanvas.mqh** 和 **LineChart.mqh** 文件。

首先我们对基类做一些修改 **CChartCanvas**. 此时它的基类是 **CCanvas** ，早些时候，把一个来自标准库的 **CCanvas** 类的复制品，重命名为 **CCustomCanvas** ，现在它需要变成 **CChartCanvas** 的基类，在下面的代码中，它显示了字符串是在 **ChartCanvas.mqh** 文件中做完的。

```
//+------------------------------------------------------------------+
//|                                                  ChartCanvas.mqh |
//|                   Copyright 2009-2016, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "..\CustomCanvas.mqh"
...
//+------------------------------------------------------------------+
//| Class CChartCanvas                                               |
//| 用途: 用于图形界面的基类                     |
//+------------------------------------------------------------------+
class CChartCanvas : public CCustomCanvas
  {
...
```

图表可以有一个渐变的背景，所以我们将加上这个选项，为了实现它，我们在 **CustomCanvas.mqh** 文件中包含操作颜色的类(**CColors**):

```
//+------------------------------------------------------------------+
//|                                                 CustomCanvas.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "..\Colors.mqh"
...
```

在 **CChartCanvas** 类中我们可以声明这个类的实例，并且在项目中使用它。

在开发的当前阶段，考虑到必须从头写标准库，就不需要提供我们将要使用的类方法的详细描述，我们将简单指出需要修改和制作的，以及那些方法要加上，我们就可以在有需要的时候做出比较。

让我们继续枚举。至少需要有两种颜色来进行区域的渐变，在 **CChartCanvas** 类中有有方法来设置背景颜色 — **CChartCanvas::ColorBackground** ()，类似的方法 **CChartCanvas::ColorBackground2** () 是加上用到第二个颜色。一个特别的方法用来初始化渐变色数组，和 **CElements** 类是一样的， **InitColorArray** () 方法。为了画出渐变，是要改变 **CChartCanvas::DrawBackground** () 方法。如果以前只要简单调用 **CCustomCanvas::Erase** () 方法，所需的颜色作为一个参数，现在 (1) 需要声明数组并设置画布区域的大小，为了把数组清零，需要在类中再加一个方法 **CChartCanvas::DeleteAll** ()，

所有 **CChartCanvas** 类的变化都会影响到相关方法，已经找到偏移的话，绘图板的大小和本序列的描述和计算兵设置网格类型. 这些新增的代码和改变，您可以在附加的文件中学习，比较它们和标准库中的初始版本。

另外，我们将探讨影响到 **CLineChart** 类的改变。 **CChartCanvas** 是它的一个基类，. 用于删除 — **CLineChart::DeleteAll** () 的方法，并且需要的时候您需要在此创建。主要的变化包含了在图表上绘制在图表上，使用的是 **CLineChart::DrawData** ()方法。首先三个辅助方法， **CLineChart::CheckLimitWhile** (), **CLineChart::CalculateVariables** () 和 **CLineChart::CalculateArray** () ，应该把它们加到其中。另外，最重要的是，数据显示在图表的压缩算法也改正了。在建议的选项中，进行了压缩，这样当数组显示的像素点数量超过图表中的所选区域时，数组会被分割为多个部分，然后在数量相同进行压缩，然后，每个部分(除了第一个和最后一个），都和前面的覆盖。通过这种方式，偏移超过右侧边缘的话，就会减小，右边的数组永远都倾向右侧，而且相关最小值和最大值数据都没有损失。

现在我们需要创建一个类来创建线形图表，它与库中所有其他控件很类似。

### CLineGraph 类的开发

首先，要在 **Objects.mqh** 文件中创建一个新的类型，它将是 **CLineChartObject** 类，与这篇文章中所有其他类类似。 **CLineChart** 将是一个基类，而且它的文件应该被包含到 **Objects.mqh** 文件中:

```
//+------------------------------------------------------------------+
//|                                                      Objects.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "..\Canvas\Charts\LineChart.mqh"
...
```

我们将创建 **LineGraph.mqh** 文件，其中含有 **CLineGraph** 类，并且在库引擎(**WndContainer.mqh**)中包含它。 **CLineGraph** 类需要拥有标准的虚方法，和库中的其他控件相同:

```
//+------------------------------------------------------------------+
//| 用于创建线形图表的类                       |
//+------------------------------------------------------------------+
class CLineGraph : public CElement
  {
private:
   //--- 控件所附加的表单的指针
   CWindow          *m_wnd;
public:
   //--- 保存表单的指针
   void              WindowPointer(CWindow &object)    { m_wnd=::GetPointer(object);  }
   //---
public:
   //--- 事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam) {}
   //--- 计时器
   virtual void      OnEventTimer(void) {}
   //--- 移动控件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
  };
```

我们将列出用于设置线形图表外观的属性。

- 背景渐变的颜色
- 边框颜色
- 网格颜色
- 文字颜色
- 小数点位数(用于垂直尺度上的数值)

```
class CLineGraph : public CElement
  {
private:
   //--- 渐变颜色
   color             m_bg_color;
   color             m_bg_color2;
   //--- 边框颜色
   color             m_border_color;
   //--- 网格颜色
   color             m_grid_color;
   //--- 文字颜色
   color             m_text_color;
   //--- 小数点位数
   int               m_digits;
   //---
public:
   //--- 小数点位数
   void              SetDigits(const int digits)       { m_digits=::fabs(digits);     }
   //--- 另个用于渐变的颜色
   void              BackgroundColor(const color clr)  { m_bg_color=clr;              }
   void              BackgroundColor2(const color clr) { m_bg_color2=clr;             }
   //--- (1) 边框, (2) 网格 和 (3)文字 的颜色
   void              BorderColor(const color clr)      { m_border_color=clr;          }
   void              GridColor(const color clr)        { m_grid_color=clr;            }
   void              TextColor(const color clr)        { m_text_color=clr;            }
  };
```

为了创建线形图表，需要一个 **私有(private)** 和一个 **公有(public)** 方法：

```
class CLineGraph : public CElement
  {
public:
   //--- 用于创建控件的方法
   bool              CreateLineGraph(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateGraph(void);
  };
```

而且最终，为了操作创建的线形图表，我们将使用方法来:

- 设置图表中系列的最大数目;
- 设置垂直尺度的最大/最小值以及网格的线数;
- 增加数据序列;
- 刷新数据序列;
- 删除数据序列。

```
class CLineGraph : public CElement
  {
public:
   //--- 最大数据序列
   void              MaxData(const int total)          { m_line_chart.MaxData(total); }
   //--- 设置垂直尺度上的参数
   void              VScaleParams(const double max,const double min,const int num_grid);
   //--- 在图表中加入序列
   void              SeriesAdd(double &data[],const string descr,const color clr);
   //--- 更新图表上的序列
   void              SeriesUpdate(const uint pos,const double &data[],const string descr,const color clr);
   //--- 从图表上删除序列
   void              SeriesDelete(const uint pos);
  };
```

这种最小程度的设置对于在MQL应用程序中使用线形图表来说已经足够了，然后，我们将创建一个应用程序来测试看一切运行得如何。

### 写用于测试线形图表的应用程序

为了进行测试，我们可以复制一份之前已经在文章中使用过的用于测试进度条控件的EA交易,我们将从中删除所有的控件，只留下状态栏。我们要确定哪些控件用来管理在图形界面中创建的线形图表，

我们实现了在数组中自动进行增加和减少数据的模式，该过程将由 **CProgram** 用户类的计时器函数控制。让我们保证过程的速度可以通过在编辑框中指定的延迟毫秒数(**Delay** 参数)所控制,还要再此模式下增加两个另外的控件，在编辑框中您可以指定一个数组大小的范围，也就是最小值(**Min. limit size** 参数)和最大值(**Max. limit size** 参数)。通过启用这种模式，每次计时器事件都会使数组增加一个单位的数据，直到指定的最大值大小，然后会逐渐减小直到达到指定的最小值大小，然后再重复地重新开始。当前数组的大小(**Size of series** 参数)也可以人工控制，它显示在独立的编辑框控件中。

序列的数量(数据序列)可以通过从下拉列表中选择，从 **1** 到 **24** (**Number of series** 参数)，数据将根据三角几何公式中正弦和余弦数学函数的返回值来计算，我们会加上对管理参与计算的参数的控制，这里将有(1) 增加比例 (**Increment ratio** 参数) 和 (2) 每个序列与之前的数据序列之间的偏移(**Offset series** 参数)。通过改变增加的比例我们可以得到各种序列的可视效果， **Increment ratio** 参数将有一个复选框，在这种模式被启用时，用于当增加/减少序列大小的循环结束后立即自动切换到下一个数值。 这里增加的比例也会在达到控件的最大限制时持续进行，直到达到限制，会有一个计数器转为减少 **Increment ratio** 参数的数值。换句话说，计数器将会在达到最小和最大限制时进行反转。

为了使这次试验更加有趣，我们实现了允许使序列产生"奔跑"动画的效果，并且也加入了另外的参数来控制 **奔跑速度(Run speed)** 。另外，我们还在图形界面中加入了进度条，如果启用了自动增加和减少序列数组的模式，它会显示这个过程剩余的时间。

所以，我们要声明用于创建图形界面程序的控件类的实例和创建它们的方法，并且指定距离表单边缘的距离:

```
class CProgram : public CWndEvents
  {
private:
   //--- 控件
   CSpinEdit         m_delay_ms;
   CComboBox         m_series_total;
   CCheckBoxEdit     m_increment_ratio;
   CSpinEdit         m_offset_series;
   CSpinEdit         m_min_limit_size;
   CCheckBoxEdit     m_max_limit_size;
   CCheckBoxEdit     m_run_speed;
   CSpinEdit         m_series_size;
   CLineGraph        m_line_chart;
   CProgressBar      m_progress_bar;
   //---
private:
   //--- 用于管理线形图表的控件
#define SPINEDIT1_GAP_X       (7)
#define SPINEDIT1_GAP_Y       (25)
   bool              CreateSpinEditDelay(const string text);
#define COMBOBOX1_GAP_X       (7)
#define COMBOBOX1_GAP_Y       (50)
   bool              CreateComboBoxSeriesTotal(const string text);
#define CHECKBOX_EDIT1_GAP_X  (161)
#define CHECKBOX_EDIT1_GAP_Y  (25)
   bool              CreateCheckBoxEditIncrementRatio(const string text);
#define SPINEDIT2_GAP_X       (161)
#define SPINEDIT2_GAP_Y       (50)
   bool              CreateSpinEditOffsetSeries(const string text);
#define SPINEDIT3_GAP_X       (330)
#define SPINEDIT3_GAP_Y       (25)
   bool              CreateSpinEditMinLimitSize(const string text);
#define CHECKBOX_EDIT2_GAP_X  (330)
#define CHECKBOX_EDIT2_GAP_Y  (50)
   bool              CreateCheckBoxEditMaxLimitSize(const string text);
#define CHECKBOX_EDIT3_GAP_X  (501)
#define CHECKBOX_EDIT3_GAP_Y  (25)
   bool              CreateCheckBoxEditRunSpeed(const string text);
#define SPINEDIT4_GAP_X       (501)
#define SPINEDIT4_GAP_Y       (50)
   bool              CreateSpinEditSeriesSize(const string text);
   //--- 线形图表
#define LINECHART1_GAP_X      (5)
#define LINECHART1_GAP_Y      (75)
   bool              CreateLineChart(void);
   //--- 运行的指示
#define PROGRESSBAR1_GAP_X    (5)
#define PROGRESSBAR1_GAP_Y    (364)
   bool              CreateProgressBar(void);
  };
```

所有用于在自定义类中创建控件的方法已经在前面的文章中讨论过，这里将显示用于创建线形图表的方法的代码，但是在那之前我们需要创建一个方法来创建数组和用于计算它们的数据。我们声明了 **Series** 结构，以及相关数组来显示数据(**data** \[\]),还有另外的用于预先计算的数组 **data\_temp** \[\]。还需要序列的颜色(colors)和描述(descriptions )的数组。

```
class CProgram : public CWndEvents
  {
private:
   //--- 图表上的序列结构
   struct Series
     {
      double            data[];      // 用于显示数据的数组
      double            data_temp[]; // 用来计算的额外数组
     };
   Series            m_series[];

   //--- 序列的 (1) 名称 和 (2) 颜色
   string            m_series_name[];
   color             m_series_color[];
  };
```

**CProgram::ResizeDataArrays** () 方法将用于设置数组新的大小，当前序列的数量和它们的大小是通过控件取得的:

```
class CProgram : public CWndEvents
  {
private:
   //--- 设置序列的新的大小
   void              ResizeDataArrays(void);
  };
//+------------------------------------------------------------------+
//| 设置数组新的大小                          |
//+------------------------------------------------------------------+
void CProgram::ResizeDataArrays(void)
  {
   int total          =(int)m_series_total.ButtonText();
   int size_of_series =(int)m_series_size.GetValue();
//---
   for(int s=0; s<total; s++)
     {
      //--- 设置数组新的大小
      ::ArrayResize(m_series[s].data,size_of_series);
      ::ArrayResize(m_series[s].data_temp,size_of_series);
     }
  }
```

在设置大小之后，用于计算的数组应当使用新的数据来初始化，我们将为此应用 **CProgram::InitArrays** () 方法。为了进行参数的预先计算，需要使用 **Offset series** 和 **Increment ratio** 参数，为了支持序列的"奔跑"模式，将需要 **m\_run\_speed\_counter** 计数器，当在计时器函数中调用 **CProgram::ShiftLineChartSeries** ()方法时，如果控件的复选框被启用的话它将会根据编辑框中的 **Run Speed** 控制参数来增加数值。

```
class CProgram : public CWndEvents
  {
private:
   //--- "奔跑"序列的速度计数器
   double            m_run_speed_counter;

   //--- 初始化用于计算的辅助数组
   void              InitArrays(void);

   //--- 移动线形图表序列 ("奔跑"的图表)
   void              ShiftLineChartSeries(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CProgram::CProgram(void) : m_run_speed_counter(0.0)
  {
//--- ...
  }
//+------------------------------------------------------------------+
//| 移动线形图表序列                         |
//+------------------------------------------------------------------+
void CProgram::ShiftLineChartSeries(void)
  {
   if(m_run_speed.CheckButtonState())
      m_run_speed_counter+=m_run_speed.GetValue();
  }
//+------------------------------------------------------------------+
//| 初始化用于计算的辅助数组                           |
//+------------------------------------------------------------------+
void CProgram::InitArrays(void)
  {
   int total=(int)m_series_total.ButtonText();
//---
   for(int s=0; s<total; s++)
     {
      int size_of_series=::ArraySize(m_series[s].data_temp);
      //---
      for(int i=0; i<size_of_series; i++)
        {
         if(i==0)
           {
            if(s>0)
               m_series[s].data_temp[i]=m_series[s-1].data_temp[i]+m_offset_series.GetValue();
            else
               m_series[s].data_temp[i]=m_run_speed_counter;
           }
         else
            m_series[s].data_temp[i]=m_series[s].data_temp[i-1]+(int)m_increment_ratio.GetValue();
        }
     }
  }
```

例如，我们根据三个公式来计算序列，它可以通过EA交易的外部参数来选择，为此我们声明了 **ENUM\_FORMULA** 枚举。序列颜色的设置参数也转移到外部参数中 (参见以下的代码)。

```
//--- 公式的枚举
enum ENUM_FORMULA
  {
   FORMULA_1=0, // 公式 1
   FORMULA_2=1, // 公式 2
   FORMULA_3=2  // 公式 3
  };
//--- 外部参数
input ENUM_FORMULA Formula        =FORMULA_1;       // 公式
input color        ColorSeries_01 =clrRed;          // 颜色序列 01
input color        ColorSeries_02 =clrDodgerBlue;   // 颜色序列 02
input color        ColorSeries_03 =clrWhite;        // 颜色序列 03
input color        ColorSeries_04 =clrYellow;       // 颜色序列 04
input color        ColorSeries_05 =clrMediumPurple; // 颜色序列 05
input color        ColorSeries_06 =clrMagenta;      // 颜色序列 06
```

设置序列数组的初始大小, 以及初始化序列的descriptions(描述)和color(颜色)数组都是在 **CProgram** 类的构造函数中进行的:

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CProgram::CProgram(void) : m_run_speed_counter(0.0)
  {
//--- 设置序列数组的大小
   int number_of_series=24;
   ::ArrayResize(m_series,number_of_series);
   ::ArrayResize(m_series_name,number_of_series);
   ::ArrayResize(m_series_color,number_of_series);
//--- 初始化序列名称数组
   for(int i=0; i<number_of_series; i++)
      m_series_name[i]="Series "+string(i+1);
//--- 初始化序列颜色数组
   m_series_color[0] =m_series_color[6]  =m_series_color[12] =m_series_color[18] =ColorSeries_01;
   m_series_color[1] =m_series_color[7]  =m_series_color[13] =m_series_color[19] =ColorSeries_02;
   m_series_color[2] =m_series_color[8]  =m_series_color[14] =m_series_color[20] =ColorSeries_03;
   m_series_color[3] =m_series_color[9]  =m_series_color[15] =m_series_color[21] =ColorSeries_04;
   m_series_color[4] =m_series_color[10] =m_series_color[16] =m_series_color[22] =ColorSeries_05;
   m_series_color[5] =m_series_color[11] =m_series_color[17] =m_series_color[23] =ColorSeries_06;
  }
```

为了根据外部参数的公式计算序列，我们使用了 **CProgram::CalculateSeries** () 方法:

```
class CProgram : public CWndEvents
  {
private:
   //--- 计算序列
   void              CalculateSeries(void);
  };
//+------------------------------------------------------------------+
//| 计算序列                             |
//+------------------------------------------------------------------+
void CProgram::CalculateSeries(void)
  {
   int total=(int)m_series_total.ButtonText();
//---
   for(int s=0; s<total; s++)
     {
      int size_of_series=::ArraySize(m_series[s].data_temp);
      //---
      for(int i=0; i<size_of_series; i++)
        {
         m_series[s].data_temp[i]+=m_offset_series.GetValue();
         //---
         switch(Formula)
           {
            case FORMULA_1 :
               m_series[s].data[i]=::sin(m_series[s].data_temp[i])-::cos(m_series[s].data_temp[i]);
               break;
            case FORMULA_2 :
               m_series[s].data[i]=::sin(m_series[s].data_temp[i]-::cos(m_series[s].data_temp[i]));
               break;
            case FORMULA_3 :
               m_series[s].data[i]=::sin(m_series[s].data_temp[i]*10)-::cos(m_series[s].data_temp[i]);
               break;
           }

        }
     }
  }
```

在把所有计算序列的数据转到数组中之后，我们可以把它们加到图表中， (1)使用 **CProgram::AddSeries** ()方法, 或者它们之前已经加过了，就(2) 使用 **CProgram::UpdateSeries** () 方法更新它们。

```
class CProgram : public CWndEvents
  {
private:
   //--- 把序列加到图表
   void              AddSeries(void);
   //--- 更新图表上的序列
   void              UpdateSeries(void);
  };
//+------------------------------------------------------------------+
//| 计算和在图表上设置序列                         |
//+------------------------------------------------------------------+
void CProgram::AddSeries(void)
  {
   int total=(int)m_series_total.ButtonText();
   for(int s=0; s<total; s++)
      m_line_chart.SeriesAdd(m_series[s].data,m_series_name[s],m_series_color[s]);
  }
//+------------------------------------------------------------------+
//| 在图表上计算和更新序列                      |
//+------------------------------------------------------------------+
void CProgram::UpdateSeries(void)
  {
   int total=(int)m_series_total.ButtonText();
   for(int s=0; s<total; s++)
      m_line_chart.SeriesUpdate(s,m_series[s].data,m_series_name[s],m_series_color[s]);
  }
```

在创建线形图表之后, (1)序列中数组的大小要进行设置，并且(2)进行辅助数组的初始化，然后, (3)计算序列 并且(4)把它们加到图表上。

```
//+------------------------------------------------------------------+
//| 创建线形图表                            |
//+------------------------------------------------------------------+
bool CProgram::CreateLineChart(void)
  {
//--- 保存窗口指针
   m_line_chart.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+LINECHART1_GAP_X;
   int y=m_window1.Y()+LINECHART1_GAP_Y;
//--- 在创建之前设置属性
   m_line_chart.XSize(630);
   m_line_chart.YSize(280);
   m_line_chart.BorderColor(clrSilver);
   m_line_chart.VScaleParams(2,-2,4);
   m_line_chart.MaxData(int(m_series_total.ButtonText()));
//--- 创建控件
   if(!m_line_chart.CreateLineGraph(m_chart_id,m_subwin,x,y))
      return(false);
//--- (1) 设置数组大小 以及 (2)初始化它们
   ResizeDataArrays();
   InitArrays();
//--- (1) 计算 并且(2)把序列加到图表上
   CalculateSeries();
   AddSeries();
//--- 把控件指针加到库中
   CWndContainer::AddToElementsArray(0,m_line_chart);
   return(true);
  }
```

当使用空间与线形图表进行交互时，会重复需要进行相同顺序的操作，但只是更新序列，所以，我们将写一个辅助方法 **CProgram::RecalculatingSeries** () 来简化代码，只调用一个方法而不是四个:

```
class CProgram : public CWndEvents
  {
private:
   //--- 在图表上重新计算序列
   void              RecalculatingSeries(void);
  };
//+------------------------------------------------------------------+
//| 在图表上重新计算序列                       |
//+------------------------------------------------------------------+
void CProgram::RecalculatingSeries(void)
  {
//--- (1) 设置数组大小 以及 (2)初始化它们
   ResizeDataArrays();
   InitArrays();
//--- (1) 计算 和 (2) 更新序列
   CalculateSeries();
   UpdateSeries();
  }
```

在开发的当前阶段，通过在图表上运行应用程序，您将能够获得以下结果:

![图 4. 测试线形图表控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-0%3B.rne "图 4. 测试线形图表控件。")
![[Pasted image 20260628224713.png]]
图 4. 测试线形图表控件。

如果复选框参数 **Max. limit size(最大限制)** 被启用, 则会在 **CProgram::AutoResizeLineChartSeries** ()方法中自动运行序列数组大小的修改，这种算法已经在本部分的开头进行了完整的描述, 所以这里详细的注释对学习这个方法的代码已经足够了 (参见以下代码)。

```
class CProgram : public CWndEvents
  {
private:
   //--- 自动修改线形图表序列的大小
   void              AutoResizeLineChartSeries(void);
  };
//+------------------------------------------------------------------+
//| 自动修改线形图表序列的大小                            |
//+------------------------------------------------------------------+
void CProgram::AutoResizeLineChartSeries(void)
  {
//--- 如果禁止使用计时器增加序列数组，退出
   if(!m_max_limit_size.CheckButtonState())
      return;
//--- 用于指定数组大小改变的方向
   static bool resize_direction=false;
//--- 如果达到了数组大小的最小值
   if((int)m_series_size.GetValue()<=m_min_limit_size.GetValue())
     {
      //--- 把方向切换为增加数组大小
      resize_direction=false;
      //--- 如果需要修改 X 值
      if(m_increment_ratio.CheckButtonState())
        {
         //--- 指出了增加比例的方向
         static bool increment_ratio_direction=true;
         //--- 如果计数器指向增加方向
         if(increment_ratio_direction)
           {
            //--- 如果达到了最大限制，我们把计数器方向改为相反方向
            if(m_increment_ratio.GetValue()>=m_increment_ratio.MaxValue()-1)
               increment_ratio_direction=false;
           }
         //--- 如果目标指向减少的方向
         else
           {
            //--- 如果达到了最小值限制，就把计数器方向改为相反方向
            if(m_increment_ratio.GetValue()<=m_increment_ratio.MinValue()+1)
               increment_ratio_direction=true;
           }
         //--- 取得当前的"Increment ratio"参数的值并且根据方向做修改
         int increase_value=(int)m_increment_ratio.GetValue();
         m_increment_ratio.ChangeValue((increment_ratio_direction)? ++increase_value : --increase_value);
        }
     }
//--- 当达到最大值时把方向切换为减小数组的方向
   if((int)m_series_size.GetValue()>=m_max_limit_size.GetValue())
      resize_direction=true;

//--- 如果启用了进度条，显示过程
   if(m_progress_bar.IsVisible())
     {
      if(!resize_direction)
         m_progress_bar.Update((int)m_series_size.GetValue(),(int)m_max_limit_size.GetValue());
      else
         m_progress_bar.Update(int(m_max_limit_size.GetValue()-m_series_size.GetValue()),(int)m_max_limit_size.GetValue());
     }
//--- 根据方向改变数组的大小
   int size_of_series=(int)m_series_size.GetValue();
   m_series_size.ChangeValue((!resize_direction)? ++size_of_series : --size_of_series);
//--- 设置数组新的大小
   ResizeDataArrays();
  }
```

图表的动画，就像之前所说的那样，是在计时器函数中进行的。所有所需的行为都位于 **CProgram::UpdateLineChartByTimer** ()方法之中。程序在以下情况下会立即退出此方法：(1) 表单是最小化的, 或者 (2) 根据计时器来更新的模式是禁用的。另外，还有一个难点是由于在编辑框中的延迟造成的。如果所有的检查都结束了，就对启用的模式进行必要的计算并继续进行处理，然后再更新线形图表上的序列。

```
class CProgram : public CWndEvents
  {
private:
   //--- 根据计时器更新线形图表
   void              UpdateLineChartByTimer(void);
  };
//+------------------------------------------------------------------+
//| 根据计时器更新                          |
//+------------------------------------------------------------------+
void CProgram::UpdateLineChartByTimer(void)
  {
//--- 如果表单是最小化的或者在移动过程中，退出
   if(m_window1.IsMinimized())
      return;
//--- 如果禁用动画，退出
   if(!m_max_limit_size.CheckButtonState() && !m_run_speed.CheckButtonState())
      return;
//--- 延迟
   static int count=0;
   if(count<m_delay_ms.GetValue())
     {
      count+=TIMER_STEP_MSC;
      return;
     }
   count=0;
//--- 如果启用了"奔跑序列"选项，那么我们将移动系列的第一个值
   ShiftLineChartSeries();
//--- 如果启用了根据计时器管理系列中数组的大小
   AutoResizeLineChartSeries();
//--- 初始化数组
   InitArrays();
//--- (1) 计算 和 (2) 更新序列
   CalculateSeries();
   UpdateSeries();
  }
```

我们将快速浏览一下所开发应用程序的 **CProgram::OnEvent** ()事件处理函数，为了在线形图表上立即看到变化，需要使用以下所述的控件。

- **序列的数量(Number of series)** 参数 (组合框)。每次在这个控件选择了新的数值时，在线形图表上序列的数量就将改变。处理这个事件的代码块显示如下:

```
...
//--- 在组合框中选择项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_COMBOBOX_ITEM)
     {
      //--- 取得新的总序列数量
      m_line_chart.MaxData((int)m_series_total.ButtonText());
      //--- (1) 设置数组的大小 和 (2) 初始化它们
      ResizeDataArrays();
      InitArrays();
      //--- (1) 计算, (2) 加到图表 以及 (3) 更新序列
      CalculateSeries();
      AddSeries();
      UpdateSeries();
      return;
     }
...
```

> 比如，在组合框中默认显示6个序列(**6** 的数值). 把它改为 **3**. 结果在以下屏幕截图中显示:

![图 5. 在线形图表上改变序列总数的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-12.rne "图 5. 在线形图表上改变序列总数的测试.")
![[Pasted image 20260628224733.png]]
图 5. 在线形图表上改变序列总数的测试.

- **最大限制参数** (带有编辑框的复选框) 和 **序列的大小** (编辑框)。当点击这些控件时会生成ID为 **ON\_CLICK\_LABEL** 的事件。如果点击了 **序列大小(Size of series)** 控件，在编辑框中的数值将会被重置到最小值。点击 **最大限制(Max control limit size)** 将会把它的复选框状态改成相反状态。根据复选框的状态，它决定了当启用了自动改变线形图表中序列大小的模式下，进度条是应该显示还是隐藏。

```
...
//--- 在文字标签控件上的点击事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      //--- 如果消息是来自 'Size of series(序列大小)' 控件
      if(sparam==m_series_size.LabelText())
        {
         //--- 在图表上重新计算序列
         RecalculatingSeries();
         return;
        }
      //--- 如果这消息是来自 'Max. Limit Size'(最大限制大小) 控件
      if(sparam==m_max_limit_size.LabelText())
        {
         //--- 根据复选框状态显示或者隐藏进度条，复选框为 '最大限制大小'控件
         if(m_max_limit_size.CheckButtonState())
            m_progress_bar.Show();
         else
            m_progress_bar.Hide();
         //---
         return;
        }
     }
...
```

> 以下屏幕截图显示了过程中的样子:

![图 6. 测试线形图表自动修改序列大小的模式。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-13.rne "图 6. 测试线形图表自动修改序列大小的模式。")
![[Pasted image 20260628224749.png]]
图 6. 测试线形图表自动修改序列大小的模式。

- 当在编辑框 **Increment ratio（增加比例）**, **Offset series（序列偏移）** 和 **Size of series(序列大小)** 中输入数值时, 会调用 **CProgram::RecalculatingSeries** ()方法来重新计算序列 (参见以下代码)。

```
...
//--- 在编辑框中输入新的数值的事件
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      //--- 如果是来自'增加比例' 或者 '序列偏移' 或者 '序列大小'控件
      if(sparam==m_increment_ratio.LabelText() ||
         sparam==m_offset_series.LabelText() ||
         sparam==m_series_size.LabelText())
        {
         //--- 在图表上重新计算序列
         RecalculatingSeries();
         return;
        }
      return;
     }
//--- 点击了切换编辑框按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_INC || id==CHARTEVENT_CUSTOM+ON_CLICK_DEC)
     {
      //--- 如果是来自'增加比例' 或者 '序列偏移' 或者 '序列大小'控件
      if(sparam==m_increment_ratio.LabelText() ||
         sparam==m_offset_series.LabelText() ||
         sparam==m_series_size.LabelText())
        {
         //--- 在图表上重新计算序列
         RecalculatingSeries();
         return;
        }
      return;
     }
...
```

> 下面的屏幕截图显示了另外一个例子。试一试在您的版本中设置相同的参数，来看一下动画模式的样子。

![图 7. 测试 "奔跑序列" 模式。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-11.rne "图 7. 测试 "奔跑序列" 模式。")
![[Pasted image 20260628224806.png]]
图 7. 测试 "奔跑序列" 模式。

在改变了标准库的类之后，多个元素数组就能够正确地分布在线形图表的序列区域中了，下面的屏幕截图显示了当序列的大小等于1000的状态(参见 **Size of series（序列大小）** 参数).

![图 8. 测试大数据量的序列。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-16.rne "图 8. 测试大数据量的序列。")
![[Pasted image 20260628224818.png]]
图 8. 测试大数据量的序列。

应用程序已经可以测试了。您可以在文章末尾下载此EA交易的文件并且进一步测试它。

### 结论

本文提供了用于创建进度条和线形图表界面控件的类的代码，

在当前开发阶段的图形界面开发库中，它的概要图如下面所示。概要图的一部分片段只是临时方案，在开发库的过程中还将引入某些变化。

![图 9. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-17_%5D2%2Cjrg "图 9. 当前开发阶段的库结构。")
![[Pasted image 20260628224830.png]]
图 9. 当前开发阶段的库结构。

这决定了系列文章的主要部分致力于开发 **简单而快速** 的库来用于在 **MetaTrader** 中创建图形界面，下面的文章将集中于使用这个开发库，将会提供许多不同的实例，新增和更新。如果您想要，您可以参加开发这个项目的过程，如果您对结果很满意，请在您的项目中测试此开发库，报告错误，以及您可以发现和提出问题。

以下是第九部分的所有资料，可以用于下载和测试。如果您对使用这些文件中的资料有任何问题，您可以参考库开发过程中的列表中的对应文章，或者直接在文章的留言部分问问题。question in the comments section of this article.

**第九部份的文章(章节)列表:**

- [图形界面 IX: 颜色选择器控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559)
- [图形界面 IX: 进度条和线形图表控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3A0!pcrc1)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2580](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F05%3A0)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2782.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2782%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (353.29 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2782%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (353.27 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)