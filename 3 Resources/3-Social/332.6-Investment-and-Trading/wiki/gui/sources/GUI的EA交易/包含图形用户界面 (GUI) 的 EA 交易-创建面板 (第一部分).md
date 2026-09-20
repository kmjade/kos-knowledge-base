---
created: 2026-06-22
tags:
  - mql5
  - gui
  - ea
triage:
  status: processed
  timeliness: reference
  type: reference
  complexity: medium
see_also:
  - "[[gui/compiled/MQL图形界面I-库结构]]"
---

### 目录

- [简介](https://www.mql5.com/zh/articles/4715#para1)
- [GUI 元件](https://www.mql5.com/zh/articles/4715#para3)
- [组装 GUI](https://www.mql5.com/zh/articles/4715#para4)

- [用于控件的表单](https://www.mql5.com/zh/articles/4715#para5)
- [状态条](https://www.mql5.com/zh/articles/4715#para6)
- [页面组](https://www.mql5.com/zh/articles/4715#para7)
- [输入栏位](https://www.mql5.com/zh/articles/4715#para8)
- [按钮](https://www.mql5.com/zh/articles/4715#para9)
- [带有下拉列表的组合框](https://www.mql5.com/zh/articles/4715#para10)
- [复选框](https://www.mql5.com/zh/articles/4715#para11)
- [表格](https://www.mql5.com/zh/articles/4715#para12)
- [标准图表](https://www.mql5.com/zh/articles/4715#para13)
- [进度条](https://www.mql5.com/zh/articles/4715#para14)

- [EasyAndFast 开发库的更新](https://www.mql5.com/zh/articles/4715#para2)
- [结论](https://www.mql5.com/zh/articles/4715#para21)

### 简介

尽管算法交易的发展非常活跃，很多交易者还是倾向于人工交易。然而，很难完全避免一些重复性操作的自动化。

本文展示了一个用于人工交易的多交易品种信号 EA 交易的开发，作为例子，让我们使用来自终端标准发布的 **随机振荡指标(Stochastic)**的信号。您可以使用这里的代码来开发您自己的含有图形界面(GUI)的 EA 交易：可以在其中包含任何其他指标，也可以根据某些计算结果来做交易决定。

对于执行其它交易者订单的人来说，本文也是有用的，可以用于向客户演示一些技术任务的实例。这个例子可以在您准备开发含有 GUI 的程序需求规格的时候节约您的时间。

这里是本文详细讨论的一些问题：  

- 创建 GUI.
- 使用指定的属性取得交易品种的列表。 
- 交易操作的控制。 
- 在图表上快速切换交易品种和时段而不用重新初始化 EA 交易。
- 通过用户界面管理图表的属性。
- 从多个交易品种中使用颜色指示接收指标信号。
- 操作已经开启的仓位。 
- [EasyAndFast](https://www.mql5.com/zh/code/19703) 开发库的更新。

本文将分为两部分发表， 在这篇文章中，我们会探讨开发面板，而下一篇则描述使用功能来填补它。  

### GUI 元件

我们将要开发一个含有 GUI 的 EA 交易，这可以使用户和程序之间实现交互，并且可以把数据可视化。可以使用标准库的功能来创建 GUI，但是在我的例子中，它是基于 [EasyAndFast](https://www.mql5.com/zh/code/19703) 开发库来实现的。它的功能很丰富，可以集中精力于程序的功能方面，而不用被图形部分的优化来分神。

首先，让我们规划一下大致的 GUI 结构，下面的图表显示，GUI 窗口含有两个页面，下面的列表显示了它们要有的功能。这是一个简化过的例子，客户和开发者可以在讨论的时候更加详细地合作。

![[Pasted image 20260622073241.png]]

图 1. 含有注释的 GUI 总体视图

可能会有很多的 GUI 控件，所以，让我们首先以分级表单方式列出它们:

- 用于控件的表单
	- 用于显示额外总体信息的状态栏
	- 页面组:
		- **交易**:
			- 带有复选框的输入栏位，用于给交易品种列表排序
			- 请求按钮用于开始构建交易品种列表
			- 卖出按钮
			- 买入按钮
			- 交易量输入栏位
			- 用于关闭所有开启仓位的按钮
			- 用于设置卖出信号水平的输入栏位
			- 用于设置买入信号水平的输入栏位
			- 交易品种表格
			- 用于可视化交易品种数据的图表为了更加方便，让我们把一些图表属性使用下面的元件组来进行管理:
				- 用于选择时段开关的带有下拉列表的组合框 
				- 用于启用/禁止时间伸缩的复选框 
				- 用于启用/禁止价格伸缩的复选框 
				- 管理伸缩的输入栏位 
				- 用于启用缩进的按钮 
				- 用于显示指标的复选框 
		- **仓位**:
			- 仓位的表格
	- 用于重放帧的指示

在主程序类 (**CProgram**) 中, 声明方法类以上列出的元件类的实例。用于创建元件的方法的代码位于单独的文件中，使用 MQL 程序类包含在文件中:

```c++

//+------------------------------------------------------------------+
//| 应用程序开发类                                                      |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 窗口
   CWindow           m_window1;
   //--- 状态条
   CStatusBar        m_status_bar;
   //--- 页面
   CTabs             m_tabs1;
   //--- 输入栏位
   CTextEdit         m_symb_filter;
   CTextEdit         m_lot;
   CTextEdit         m_up_level;
   CTextEdit         m_down_level;
   CTextEdit         m_chart_scale;
   //--- 按钮
   CButton           m_request;
   CButton           m_chart_shift;
   CButton           m_buy;
   CButton           m_sell;
   CButton           m_close_all;
   //--- 组合框
   CComboBox         m_timeframes;
   //--- 复选框
   CCheckBox         m_date_scale;
   CCheckBox         m_price_scale;
   CCheckBox         m_show_indicator;
   //--- 表格
   CTable            m_table_positions;
   CTable            m_table_symb;
   //--- 标准图表
   CStandardChart    m_sub_chart1;
   //--- 进度条
   CProgressBar      m_progress_bar;
   //---
public:
   //--- 创建 GUI
   bool              CreateGUI(void);
   //---
private:
   //--- 表单
   bool              CreateWindow(const string text);
   //--- 状态条
   bool              CreateStatusBar(const int x_gap,const int y_gap);
   //--- 页面
   bool              CreateTabs1(const int x_gap,const int y_gap);
   //--- 输入栏位
   bool              CreateSymbFilter(const int x_gap,const int y_gap,const string text);
   bool              CreateLot(const int x_gap,const int y_gap,const string text);
   bool              CreateUpLevel(const int x_gap,const int y_gap,const string text);
   bool              CreateDownLevel(const int x_gap,const int y_gap,const string text);
   bool              CreateChartScale(const int x_gap,const int y_gap,const string text);
   //--- 按钮
   bool              CreateRequest(const int x_gap,const int y_gap,const string text);
   bool              CreateChartShift(const int x_gap,const int y_gap,const string text);
   bool              CreateBuy(const int x_gap,const int y_gap,const string text);
   bool              CreateSell(const int x_gap,const int y_gap,const string text);
   bool              CreateCloseAll(const int x_gap,const int y_gap,const string text);
   //--- 组合框
   bool              CreateComboBoxTF(const int x_gap,const int y_gap,const string text);
   //--- 复选框
   bool              CreateDateScale(const int x_gap,const int y_gap,const string text);
   bool              CreatePriceScale(const int x_gap,const int y_gap,const string text);
   bool              CreateShowIndicator(const int x_gap,const int y_gap,const string text);
   //--- 表格
   bool              CreatePositionsTable(const int x_gap,const int y_gap);
   bool              CreateSymbolsTable(const int x_gap,const int y_gap);
   //--- 标准图表
   bool              CreateSubChart1(const int x_gap,const int y_gap);
   //--- 进度条
   bool              CreateProgressBar(const int x_gap,const int y_gap,const string text);
  };
//+------------------------------------------------------------------+
//| 用于创建控件的代码                                                   |
//+------------------------------------------------------------------+
#include "CreateGUI.mqh"
//+------------------------------------------------------------------+

```

下一步，让我们着重于 GUI 的组装，用于创建它的元件以及属性的方法。

### 组装 GUI

在程序 GUI 的开发中，我们将使用10类 GUI 元件。

- 控件表单 (**CWindow**)
- 状态条 (**CStatusBar**)
- 页面组 (**CTabs**)
- 输入栏位 (**CTextEdit**)
- 按钮 (**CButton**)
- 带有下拉列表的组合框 (**CComboBox**)
- 复选框 (**CCheckBox**)
- 表格 (**CTable**)
- 标准图表 (**CStandardChart**)
- 进度条 (**CProgressBar**)

在这个列表的一些种类中，我们会需要多个元件，所以我们每个组只会讨论一个元件，让我们使用相同的顺序来探讨创建它们的方法。 

### 用于控件的表单

下面是用于创建容纳所有其他元件的表单的方法，首先，我们需要把表单加到程序 GUI 元件列表中，为此，调用 **CWndContainer::AddWindow**() 方法， 传入 **CWindow** 类型的元件对象。然后，在创建表单之前设置它的属性，我们要设置以下属性 (和下面列表中顺序相同):

- 表单的大小 (宽度和高度)
- 抬头字体大小
- 表单的移动模式 (在图表之内)
- 人工改变表单大小的模式 (通过拖曳边框)
- 表单的按钮. 每个按钮是否可见是可以自定义的. 在本例中，可以使用下面的按钮:
	- 关闭表单. 当点击按钮时，在程序主表单中出现程序关闭确认窗口。
	- 最大化/最小化表单. 
	- 元件的工具提示. 这个按钮还有两个状态. 如果被启用，在控件中会显示指定的工具提示，
	- 把表单展开到整个图表区域，这可以通过再次点击按钮来撤销操作。
- 可以为每个按钮设置工具提示。

在设置完属性之后，调用创建表单的方法 — **CWindow::CreateWindow**() 并传给它：

- 图表 ID,      
- 图表子窗口索引，      
- 表头文字,
- 表单的初始坐标.

```c++

//+------------------------------------------------------------------+
//| 创建控件表单                                                        |
//+------------------------------------------------------------------+
bool CProgram::CreateWindow(const string caption_text)
  {
//--- 把窗口指针加到窗口数组中
   CWndContainer::AddWindow(m_window1);
//--- 属性
   m_window1.XSize(750);
   m_window1.YSize(450);
   m_window1.FontSize(9);
   m_window1.IsMovable(true);
   m_window1.ResizeMode(true);
   m_window1.CloseButtonIsUsed(true);
   m_window1.CollapseButtonIsUsed(true);
   m_window1.TooltipsButtonIsUsed(true);
   m_window1.FullscreenButtonIsUsed(true);
//--- 设置工具提示
   m_window1.GetCloseButtonPointer().Tooltip("Close");
   m_window1.GetTooltipButtonPointer().Tooltip("Tooltips");
   m_window1.GetFullscreenButtonPointer().Tooltip("Fullscreen");
   m_window1.GetCollapseButtonPointer().Tooltip("Collapse/Expand");
//--- 创建表单
   if(!m_window1.CreateWindow(m_chart_id,m_subwin,caption_text,1,1))
      return(false);
//---
   return(true);
  }

```


推荐每次在您加上新的 GUI 元件的时候都编译程序并检查结果。 

![[Pasted image 20260622073941.png]]

图 2. 用于控件的表单

所有中间过程的结果都显示如下.

### 状态条

用于根据指定的主元件来创建状态条的方法的代码，也用于计算其中元件的边界以及它们的大小，这在开发应用程序的时候可以节约时间: 一组相关元件可以只根据主元件来改变它们的坐标。为了绑定元件，它的指针要传给 **CElement::MainPointer**() 方法。在本例中，我们把状态条绑定到表单，所以， 要把表单对象传给这个方法。

然后，再设置状态条的属性。它包含了三个部分，向用户显示信息。 

- 为了不必指定相对表单的宽度，要确保宽度在表单宽度改变时自动变化，
- 元件右侧边界的缩进是1个像素。
- 把状态条绑定到表单的底部，这样它就可以在表单高度变化时自动根据底部边界调节。
- 然后，当增加点的时候，设置它们每个的宽度，

在设置了属性之后，再创建元件。现在，它已经可以工作了，我们可以在运行时刻改变它分段中的文字，在我们的例子中，第一个分段的文字设为 "For Help, press F1（如需取得帮助，按F1）" . 

在方法的最后，要确保把所创建元件的指针保存到总的 GUI 元件列表中，为此，要调用 **CWndContainer::AddToElementsArray**() 方法，并且把表单索引和元件对象传给它。因为我们只有一个表单，它的索引将是0。

```c++

//+------------------------------------------------------------------+
//| 创建状态条                                                         |
//+------------------------------------------------------------------+
bool CProgram::CreateStatusBar(const int x_gap,const int y_gap)
  {
#define STATUS_LABELS_TOTAL 3
//--- 保存窗口指针
   m_status_bar.MainPointer(m_window1);
//--- 属性
   m_status_bar.AutoXResizeMode(true);
   m_status_bar.AutoXResizeRightOffset(1);
   m_status_bar.AnchorBottomWindowSide(true);
//--- 设置分段的数量以及它们的属性
   int width[STATUS_LABELS_TOTAL]={0,200,110};
   for(int i=0; i<STATUS_LABELS_TOTAL; i++)
      m_status_bar.AddItem(width[i]);
//--- 创建控件
   if(!m_status_bar.CreateStatusBar(x_gap,y_gap))
      return(false);
//--- 在状态条分段中设置文字
   m_status_bar.SetValue(0,"For Help, press F1");
//--- 把对象加到总的对象组数组中
   CWndContainer::AddToElementsArray(0,m_status_bar);
   return(true);
  }

```


[EasyAndFast](https://www.mql5.com/zh/code/19703) 开发库中其余元件的创建也是基于相同的原则，所以，我们只会讨论我们 EA 中需要使用的可自定义的属性。

![[Pasted image 20260622074110.png]]

图 3. 加上状态条

### 页面组

让我们在创建页面组的方法中设置以下的元件属性:

- 在页面中文字为中间对齐.
- 把页面放置在工作区域的顶部.
- 大小根据主元件(表单)区域自动调节. 在本例中，没有必要指定页面组区域的大小.
- 设置相对于主元件的右侧和底部边缘的缩进. 如果表单大小改变，它们的缩进会保持不变.
- 当加上下面的页面时，页面的名称和宽度也会传到这个方法中，

下面是方法的代码:

```c++

//+------------------------------------------------------------------+
//| 创建页面组 1                                                       |
//+------------------------------------------------------------------+
bool CProgram::CreateTabs1(const int x_gap,const int y_gap)
  {
#define TABS1_TOTAL 2
//--- 保存指向主元件的指针
   m_tabs1.MainPointer(m_window1);
//--- 属性
   m_tabs1.IsCenterText(true);
   m_tabs1.PositionMode(TABS_TOP);
   m_tabs1.AutoXResizeMode(true);
   m_tabs1.AutoYResizeMode(true);
   m_tabs1.AutoXResizeRightOffset(3);
   m_tabs1.AutoYResizeBottomOffset(25);
//--- 使用指定的属性增加页面
   string tabs_names[TABS1_TOTAL]={"Trade","Positions"};
   for(int i=0; i<TABS1_TOTAL; i++)
      m_tabs1.AddTab(tabs_names[i],100);
//--- 创建控件
   if(!m_tabs1.CreateTabs(x_gap,y_gap))
      return(false);
//--- 把对象加到总的对象组数组中
   CWndContainer::AddToElementsArray(0,m_tabs1);
   return(true);
  }

```

![[Pasted image 20260622074248.png]]

图 4. 加上页面组

### 输入栏位

例如，让我们探讨一个输入栏位，用户可以从一个表格中的交易品种列表中指定货币和/或货币对。它的主元件是一个页面组，我们在此需要指定输入栏位应该显示的页面，为此， 要调用 **CTabs::AddToElementsArray**() 方法，并向它传递页面的索引和附加的元件对象。

现在，让我们探讨这个输入栏位的属性。

- 默认情况下, 输入栏位中输入的是 "USD" : 程序会在表格中收集含有 USD 的交易品种。这个输入栏位中的货币和/或交易品种是以逗号分隔的，下面，我将展示在这个输入栏位中构建一个逗号分隔的交易品种列表的方法。
- 这个输入栏位还会有一个复选框，在禁用了复选框之后，输入栏位中的文字就会被忽略。所有侦测到的货币对都会包含在交易品种列表中。
- 输入栏位的宽度等于主元件的整个宽度，在页面区域宽度改变时，它会做调整。
- **Request(请求)**按钮位于输入栏位的右侧，当程序正在运行时，您可以在输入栏位中指定其他货币和/或交易品种，点击这个按钮就会生成列表。因为输入栏位的宽度会自动改变，而 **Request** 按钮应当永远位于它的右侧，所以要确保输入栏位的右侧相对于主元件的右侧边界要有一定的缩进。 

**CTextEdit** 类型的元件包含了几种其他元件，所以，如果您需要改变它的属性，您可以得到它们的指针，我们必须修改一些文本输入栏位 (**CTextBox**)的一些属性。让我们按照下面代码列表中实现的相同顺序来讨论它们：

- 输入栏位相对主元件 (**CTextEdit**) 左侧边界的缩进. 
- 自动调整相对主元件的宽度.
- 当激活输入栏位的时候 (通过鼠标左键点击输入栏位), 文字会快速自动突出显示.
- 如果输入栏位中完全没有文字，就显示下面的提示: "Example: EURUSD, GBP, NOK".  

输入栏位的复选框默认是启用的. 为此，要在创建元件时立即激活它.

```c++

//+------------------------------------------------------------------+
//| 创建一个复选框，带有 "Symbols filter" 输入栏位                         |
//+------------------------------------------------------------------+
bool CProgram::CreateSymbolsFilter(const int x_gap,const int y_gap,const string text)
  {
//--- 保存指向主元件的指针
   m_symb_filter.MainPointer(m_tabs1);
//---为页面做保留
   m_tabs1.AddToElementsArray(0,m_symb_filter);
//--- 属性
   m_symb_filter.SetValue("USD"); // "EUR,USD" "EURUSD,GBPUSD" "EURUSD,GBPUSD,AUDUSD,NZDUSD,USDCHF"
   m_symb_filter.CheckBoxMode(true);
   m_symb_filter.AutoXResizeMode(true);
   m_symb_filter.AutoXResizeRightOffset(90);
   m_symb_filter.GetTextBoxPointer().XGap(100);
   m_symb_filter.GetTextBoxPointer().AutoXResizeMode(true);
   m_symb_filter.GetTextBoxPointer().AutoSelectionMode(true);
   m_symb_filter.GetTextBoxPointer().DefaultText("Example: EURUSD,GBP,NOK");
//--- 创建控件
   if(!m_symb_filter.CreateTextEdit(text,x_gap,y_gap))
      return(false);
//--- 启用复选框
   m_symb_filter.IsPressed(true);
//--- 把对象加到对象组的统一数组中
   CWndContainer::AddToElementsArray(0,m_symb_filter);
   return(true);
  }

```

除了文本输入栏位，在 GUI 中还有数字式输入的。例如, **Lot** 输入栏位 (用于建立仓位的交易量). 这种类型的其他元件应当是输入栏位.  

- 元件的总宽度，
- 入场的最大值，
- 入场的最小值.
- 当使用增加和减少按钮时的步长.
- 小数点后的小数位数.
- 为了使输入栏位变成数字型，我们应当使用 **CTextEdit::SpinEditMode**() 方法来指定.
- 从终端图表中下载程序之后的默认值.
- 输入栏位的宽度.
- 在点击时自动突出输入栏位中的文字.
- 把输入栏位的锚点设置在元件的右侧边界.

这里是方法的代码:

```c++

//+------------------------------------------------------------------+
//| 创建 "Lot" 输入栏位                                                 |
//+------------------------------------------------------------------+
bool CProgram::CreateLot(const int x_gap,const int y_gap,const string text)
  {
//--- 保存指向主元件的指针
   m_lot.MainPointer(m_tabs1);
//---为页面做保留
   m_tabs1.AddToElementsArray(0,m_lot);
//--- 属性
   m_lot.XSize(80);
   m_lot.MaxValue(1000);
   m_lot.MinValue(0.01);
   m_lot.StepValue(0.01);
   m_lot.SetDigits(2);
   m_lot.SpinEditMode(true);
   m_lot.SetValue((string)0.1);
   m_lot.GetTextBoxPointer().XSize(50);
   m_lot.GetTextBoxPointer().AutoSelectionMode(true);
   m_lot.GetTextBoxPointer().AnchorRightWindowSide(true);
//--- 创建控件
   if(!m_lot.CreateTextEdit(text,x_gap,y_gap))
      return(false);
//--- 把对象加到对象组的统一数组中
   CWndContainer::AddToElementsArray(0,m_lot);
   return(true);
  }

```

![[Pasted image 20260622074812.png]]

图 5. 增加输入栏位

图片看起来不是很有逻辑，但是当您加上其它元件的时候，一切就变得合理了。

### 按钮

让我们在 EA 的 GUI 上加上几个按钮，我们将通过一个按钮探讨主要的属性：用于开启卖出仓位的按钮。

- 按钮的宽度.
- 按钮的文字在垂直和水平方向上都正确地位于中央.
- 按钮的背景颜色.
- 当鼠标掠过按钮时的背景颜色.
- 当鼠标左键点击时的背景颜色.
- 按钮文字的颜色.
- 当鼠标掠过时的文字颜色.
- 当鼠标左键点击时的文字颜色.
- 按钮边框的颜色.
- 当鼠标掠过时的边框颜色.
- 当鼠标左键点击时的边框颜色.

对于买入按钮，属性的变化是相同的，除了指定的背景颜色。

```c++

//+------------------------------------------------------------------+
//| 创建 '卖出' 按钮                                         |
//+------------------------------------------------------------------+
bool CProgram::CreateSell(const int x_gap,const int y_gap,const string text)
  {
//--- 保存指向主元件的指针
   m_sell.MainPointer(m_tabs1);
//---为页面做保留
   m_tabs1.AddToElementsArray(0,m_sell);
//--- 属性
   m_sell.XSize(80);
   m_sell.IsCenterText(true);
   m_sell.BackColor(C'255,51,51');
   m_sell.BackColorHover(C'255,100,100');
   m_sell.BackColorPressed(C'195,0,0');
   m_sell.LabelColor(clrWhite);
   m_sell.LabelColorHover(clrWhite);
   m_sell.LabelColorPressed(clrWhite);
   m_sell.BorderColor(clrBlack);
   m_sell.BorderColorHover(clrBlack);
   m_sell.BorderColorPressed(clrBlack);
//--- 创建控件
   if(!m_sell.CreateButton(text,x_gap,y_gap))
      return(false);
//--- 把元件指针加到数据库中
   CWndContainer::AddToElementsArray(0,m_sell);
   return(true);
  }

```

![[Pasted image 20260622074955.png]]

图 6. 增加按钮

### 带有下拉列表的组合框

为了改变时段，让我们制作一个含有下拉列表的组合框。定义它的配置的属性.

- 元件的总宽度， 
- 列出的项目的数量 (在我们的例子中，是21个项目，对应了终端中的时段的数量).
- 元件会被绑定到页面的右侧区域.
- 组合框按钮的宽度.
- 按钮绑定到元件的右边，

给每个列表项目赋值，有些属性是通过指针随后赋值的.

- 当鼠标光标掠过时高亮显示项目.
- 高亮显示的项目. 在我们的实例中，它是索引18所指向的 (D1 时段).

下面是用于创建组合框方法的代码:

```c++

//+------------------------------------------------------------------+
//| 创建用于生成时段的组合框                                              |
//+------------------------------------------------------------------+
bool CProgram::CreateComboBoxTF(const int x_gap,const int y_gap,const string text)
  {
//--- 列表项目总数
#define ITEMS_TOTAL2 21
//--- 传递面板对象
   m_timeframes.MainPointer(m_tabs1);
//--- 锚点设向页面
   m_tabs1.AddToElementsArray(0,m_timeframes);
//--- 属性
   m_timeframes.XSize(115);
   m_timeframes.ItemsTotal(ITEMS_TOTAL2);
   m_timeframes.AnchorRightWindowSide(true);
   m_timeframes.GetButtonPointer().XSize(50);
   m_timeframes.GetButtonPointer().AnchorRightWindowSide(true);
//--- 把项目值保存到组合框列表
   string items_text[ITEMS_TOTAL2]={"M1","M2","M3","M4","M5","M6","M10","M12","M15","M20","M30","H1","H2","H3","H4","H6","H8","H12","D1","W1","MN"};
   for(int i=0; i<ITEMS_TOTAL2; i++)
      m_timeframes.SetValue(i,items_text[i]);
//--- 取得列表指针
   CListView *lv=m_timeframes.GetListViewPointer();
//--- 设置列表属性
   lv.LightsHover(true);
   lv.SelectItem(18);
//--- 创建控件
   if(!m_timeframes.CreateComboBox(text,x_gap,y_gap))
      return(false);
//--- 把元件指针加到数据库中
   CWndContainer::AddToElementsArray(0,m_timeframes);
   return(true);
  }

```

![[Pasted image 20260622075141.png]]

图 7. 加上组合框

### 复选框

复选框是最简单的元件，只需要为它指定两个属性。

- 宽度
- 位于主元件的右边部分.

在创建元件之后，我们可以编程启用复选框。

```c++

//+------------------------------------------------------------------+
//| 创建 "Date scale" 复选框                                           |
//+------------------------------------------------------------------+
bool CProgram::CreateDateScale(const int x_gap,const int y_gap,const string text)
  {
//--- 保存窗口指针
   m_date_scale.MainPointer(m_tabs1);
//---为页面做保留
   m_tabs1.AddToElementsArray(0,m_date_scale);
//--- 属性
   m_date_scale.XSize(70);
   m_date_scale.AnchorRightWindowSide(true);
//--- 创建控件
   if(!m_date_scale.CreateCheckBox(text,x_gap,y_gap))
      return(false);
//--- 启用复选框
   m_date_scale.IsPressed(true);
//--- 把对象加到对象组的统一数组中
   CWndContainer::AddToElementsArray(0,m_date_scale);
   return(true);
  }

```

![[Pasted image 20260622075315.png]]

图 8. 加上复选框

### 表格

GUI 含有两个表格，让我们探讨可视化交易品种列表和开启仓位信号的那个表格，它位于第一个页面。首先，声明和初始化用于设置表格属性的数组，设置以下属性.  

- 元件宽度.
- 表格维度 (列和行的数量).
- 列的宽度 (数值以数组传递).
- 文字对齐方式 (数值以数组传递).
- 文字与单元边界的缩进.
- 显示表头.
- 能否选择行.
- 能否通过拖曳表头边界手动调节列的大小.
- 以斑马风格显示.
- 根据主元件自动改变垂直方向大小.
- 底部边界对主元件的缩进.

创建表格后需要设置的表头文字:

```c++

//+------------------------------------------------------------------+
//| 创建交易品种表格                                            |
//+------------------------------------------------------------------+
bool CProgram::CreateSymbolsTable(const int x_gap,const int y_gap)
  {
#define COLUMNS1_TOTAL 2
#define ROWS1_TOTAL    1
//--- 保存指向主元件的指针
   m_table_symb.MainPointer(m_tabs1);
//---为页面做保留
   m_tabs1.AddToElementsArray(0,m_table_symb);
//--- 列的宽度数组
   int width[COLUMNS1_TOTAL]={95,58};
//--- 列中文字对齐方式的数组
   ENUM_ALIGN_MODE align[COLUMNS1_TOTAL]={ALIGN_LEFT,ALIGN_RIGHT};
//--- X轴方向上文字缩进数组
   int text_x_offset[COLUMNS1_TOTAL]={5,5};
//--- 属性
   m_table_symb.XSize(168);
   m_table_symb.TableSize(COLUMNS1_TOTAL,ROWS1_TOTAL);
   m_table_symb.ColumnsWidth(width);
   m_table_symb.TextAlign(align);
   m_table_symb.TextXOffset(text_x_offset);
   m_table_symb.ShowHeaders(true);
   m_table_symb.SelectableRow(true);
   m_table_symb.ColumnResizeMode(true);
   m_table_symb.IsZebraFormatRows(clrWhiteSmoke);
   m_table_symb.AutoYResizeMode(true);
   m_table_symb.AutoYResizeBottomOffset(2);
//--- 创建控件
   if(!m_table_symb.CreateTable(x_gap,y_gap))
      return(false);
//--- 设置表头名称
   m_table_symb.SetHeaderText(0,"Symbol");
   m_table_symb.SetHeaderText(1,"Values");
//--- 把对象加到对象组的统一数组中
   CWndContainer::AddToElementsArray(0,m_table_symb);
   return(true);
  }

```

第二个表格显示了开启仓位的一些属性，有10列显示下面的数据。

- 仓位的交易品种
- 仓位数量.
- 所有开启仓位的总交易量.
- 买入仓位的交易量.
- 卖出仓位的交易量.
- 当前所有开启仓位的总的结果.
- 当前所有买入仓位的总的结果.
- 当前所有卖出仓位的总的结果.
- 每个独立交易品种所加载的存款.
- 中间价

下面这些属性在第二个表格中应当另外配置.  

- 图片距离单元顶部和右侧边界的缩进.
- 能否对数值排序.
- 自动改变相对主元件的水平方向大小.
- 距离主元件右侧边界的缩进.

第一列中图片单元将作为按钮，通过点击您可以关闭一个仓位，或者指定交易品种是对冲状况可以关闭所有这些仓位。 

```c++

//+------------------------------------------------------------------+
//| 创建仓位表格                                                       |
//+------------------------------------------------------------------+
bool CProgram::CreatePositionsTable(const int x_gap,const int y_gap)
  {
...
//--- 属性
   m_table_positions.TableSize(COLUMNS2_TOTAL,ROWS2_TOTAL);
   m_table_positions.ColumnsWidth(width);
   m_table_positions.TextAlign(align);
   m_table_positions.TextXOffset(text_x_offset);
   m_table_positions.ImageXOffset(image_x_offset);
   m_table_positions.ImageYOffset(image_y_offset);
   m_table_positions.ShowHeaders(true);
   m_table_positions.IsSortMode(true);
   m_table_positions.SelectableRow(true);
   m_table_positions.ColumnResizeMode(true);
   m_table_positions.IsZebraFormatRows(clrWhiteSmoke);
   m_table_positions.AutoXResizeMode(true);
   m_table_positions.AutoYResizeMode(true);
   m_table_positions.AutoXResizeRightOffset(2);
   m_table_positions.AutoYResizeBottomOffset(2);
...
   return(true);
  }

```

![[Pasted image 20260622075823.png]]

图 9. 在第一个页面上加上表格

![[Pasted image 20260622075915.png]]

图 10. 在第二个页面上加上表格

操作表格的详细内容在主程序文件 (**CProgram**) 中，会在下面文章部分中讨论。

### 标准图表

**CStandardChart** 类型的元件是用于根据交易品种可视化数据的。默认显示 EURUSD D1它含有下面的特性：

- 水平方向滚动.
- 宽度自动调节.
- 高度自动调节.
- 距离主元件右侧边界的缩进.
- 底部边界对主元件的缩进.

如有必要，可以创建一个水平方向上的图表数组，为此， 要使用 **CStandardChart::AddSubChart**() 方法，并且传递交易品种和时段作为参数。但是，在本例中，我们只需要一个图表，而交易品种和时段的切换是使用其它控件切换的。

```c++

//+------------------------------------------------------------------+
//| 创建标准图表 1                                                     |
//+------------------------------------------------------------------+
bool CProgram::CreateSubChart1(const int x_gap,const int y_gap)
  {
//--- 保存窗口指针
   m_sub_chart1.MainPointer(m_tabs1);
//--- 为第一个页面保留
   m_tabs1.AddToElementsArray(0,m_sub_chart1);
//--- 属性
   m_sub_chart1.XScrollMode(true);
   m_sub_chart1.AutoXResizeMode(true);
   m_sub_chart1.AutoYResizeMode(true);
   m_sub_chart1.AutoXResizeRightOffset(125);
   m_sub_chart1.AutoYResizeBottomOffset(2);
//--- 加上图表
   m_sub_chart1.AddSubChart("EURUSD",PERIOD_D1);
//--- 创建控件
   if(!m_sub_chart1.CreateStandardChart(x_gap,y_gap))
      return(false);
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_sub_chart1);
   return(true);
  }

```

![[Pasted image 20260622080305.png]]

图 11. 加上图表

### 进度条

进度条可以使用户了解到程序现在正在做什么，所以让我们把它加到 GUI 上。下面是我们例子中的属性 (与代码中的顺序相同).  

- 元件的总高度.
- 指示条的高度 (进度条线宽).
- 横方向上的条形缩进.
- 纵方向上的条形缩进.
- 横方向上主文字的缩进.
- 纵方向上主文字的缩进.
- 横方向上百分比文字标签的缩进.
- 纵方向上百分比文字的缩进.
- 下拉控件的指示 (用于自动隐藏). 
- 字体. 
- 指示针边框的颜色.
- 指示针背景颜色.
- 指示针进度条线.
- 宽度自动调节.
- 距离主元件右侧边界的缩进.

使用进度条的实例在下面显示.  

```c++

//+------------------------------------------------------------------+
//| 创建进度条                                                         |
//+------------------------------------------------------------------+
bool CProgram::CreateProgressBar(const int x_gap,const int y_gap,const string text)
  {
//--- 保存指向主元件的指针
   m_progress_bar.MainPointer(m_status_bar);
//--- 属性
   m_progress_bar.YSize(17);
   m_progress_bar.BarYSize(14);
   m_progress_bar.BarXGap(0);
   m_progress_bar.BarYGap(1);
   m_progress_bar.LabelXGap(5);
   m_progress_bar.LabelYGap(2);
   m_progress_bar.PercentXGap(5);
   m_progress_bar.PercentYGap(2);
   m_progress_bar.IsDropdown(true);
   m_progress_bar.Font("Consolas");
   m_progress_bar.BorderColor(clrSilver);
   m_progress_bar.IndicatorBackColor(clrWhiteSmoke);
   m_progress_bar.IndicatorColor(clrLightGreen);
   m_progress_bar.AutoXResizeMode(true);
   m_progress_bar.AutoXResizeRightOffset(2);
//--- 创建元件
   if(!m_progress_bar.CreateProgressBar(text,x_gap,y_gap))
      return(false);
//--- 把元件指针加到数据库中
   CWndContainer::AddToElementsArray(0,m_progress_bar);
   return(true);
  }

```

我们已经描述了在我们 EA 的 GUI 中所有的控件，现在，这只是一个图形化的外壳，下一步，我们将会开发所有所需的方法，来使得一切都按照最初的想法来工作。

### EasyAndFast 开发库的更新

在 [EasyAndFast](https://www.mql5.com/zh/code/19703) 开发库中,  **CTable::SortData**() 公有方法已经在 **CTable** 类中修改过了，现在，对第二个参数，您可以指定 表格的排序方向 (可选参数)。之前,  **CTable::SortData**() 方法会开始根据当前方向相反的方向开始排序。另外，还加上了用于取得 当前排序方向和排序列的索引的方法。如果表格已经由用户手动排序过 (通过点击一个表头), 而表格中的数据没有使用相同顺序更新，可以在得到当前排序方向后恢复它。 

```c++

//+------------------------------------------------------------------+
//| 用于创建绘制表格的类                                                 |
//+------------------------------------------------------------------+
class CTable : public CElement
  {
public:
...
   //--- 根据指定列排序数据
   void              SortData(const uint column_index=0,const int direction=WRONG_VALUE);
   //--- (1) 当前排序方向, (2) 排序数组索引
   int               IsSortDirection(void)             const { return(m_last_sort_direction);    }
   int               IsSortedColumnIndex(void)         const { return(m_is_sorted_column_index); }
...
  };
//+------------------------------------------------------------------+
//| 根据指定列排序数据                                                   |
//+------------------------------------------------------------------+
void CTable::SortData(const uint column_index=0,const int direction=WRONG_VALUE)
  {
//--- 如果超出表格边界就退出
   if(column_index>=m_columns_total)
      return;
//--- 开始排序的索引
   uint first_index=0;
//--- 最后的索引
   uint last_index=m_rows_total-1;
//--- 方向不是由用户管理的
   if(direction==WRONG_VALUE)
     {
      //--- 第一次，根据升序排序，随后每次按照相反方向排序
      if(m_is_sorted_column_index==WRONG_VALUE || column_index!=m_is_sorted_column_index || m_last_sort_direction==SORT_DESCEND)
         m_last_sort_direction=SORT_ASCEND;
      else
         m_last_sort_direction=SORT_DESCEND;
     }
   else
     {
      m_last_sort_direction=(ENUM_SORT_MODE)direction;
     }
//--- 记住最后一次排序的列的索引
   m_is_sorted_column_index=(int)column_index;
//--- Sorting
   QuickSort(first_index,last_index,column_index,m_last_sort_direction);
  }

```

另外，还在  **CKeys** 类的 **CKeys::KeySymbol**() 方法中加入了一点小的改进，数字键盘 (键盘右侧部分中单独的一个按键块) 之前没有做处理，现在您也可以从键盘的这个部分输入数字和字符了。

```c++

//+------------------------------------------------------------------+
//| 返回按下的按钮字符                                                  |
//+------------------------------------------------------------------+
string CKeys::KeySymbol(const long key_code)
  {
   string key_symbol="";
//--- 如果需要空格 (空格键)
   if(key_code==KEY_SPACE)
     {
      key_symbol=" ";
     }
//--- 如果需要 (1)一个字母字符或者 (2) 数字字符 或者 (3) 特殊字符
   else if((key_code>=KEY_A && key_code<=KEY_Z) ||
           (key_code>=KEY_0 && key_code<=KEY_9) ||
           (key_code>=KEY_NUMLOCK_0 && key_code<=KEY_NUMLOCK_SLASH) ||
           (key_code>=KEY_SEMICOLON && key_code<=KEY_SINGLE_QUOTE))
     {
      key_symbol=::ShortToString(::TranslateKey((int)key_code));
     }
//--- 返回字符
   return(key_symbol);
  }

```

新版本的 **CTable** 和 **CKeys** 类可以在文章末尾下载。

### 结论

这是文章的第一部分，我们已经讨论了如何不花费额外经历为任何复杂程序开发 GUI，您可以继续开发这个程序，为您自己的目标使用它。在文章的第二部分，我将会向您展示如何操作 GUI，其中最重要的是 - 怎样填补功能。 

在下面，您可以下载文件来测试和仔细学习本文提供的代码。

|文件名|注释|
|---|---|
|MQL5\Experts\TradePanel\TradePanel.mq5|用于有GUI的人工交易 EA|
|MQL5\Experts\TradePanel\Program.mqh|含有程序类的文件|
|MQL5\Experts\TradePanel\CreateGUI.mqh|实现在 Program.mqh 中程序类开发 GUI 的方法的文件|
|MQL5\Include\EasyAndFastGUI\Controls\Table.mqh|更新过的 CTable 类|
|MQL5\Include\EasyAndFastGUI\Keys.mqh|更新过的 CKeys 类|
