---
title: "图形界面 I：控件构成(第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-10T11:44:41+00:00Z
created: 2026-06-28
description: "在本文中我们将创建第一个图形界面的主元素 — 控件的一个窗体。多个控件可以以任何组合被附加到此窗体的任何地方。"
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

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106!pcrv_22)
- [控件的窗体类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106!pcrv_23)
- [创建窗体的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106!pcrv_24)
- [向图表附加窗体](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106!pcrv_25)
- [总结](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106!pcrv_26)

### 简介

本文是关于图形界面系列第一部分文章的延续。第一篇文章 [图形界面 I：准备库结构（第一章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细介绍了此库的用处。第一部分文章的完整链接的列表在每一章的最后给出。在那里你可以找到并下载截至当前开发阶段的库的完整版本。文件必须位于和资料中同样的目录中。

在 [前一章](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 中，我们讨论了用于创建图形界面的类库结构。在那里讨论了：(1) 原始对象的派生类，(2) 所有控件的基类， (3) 创建存储控件指针和在公共事件处理程序中管理那些控件的主类。

在本文中我们将创建第一个图形界面的主元素 — 控件的一个窗体。多个控件可以以任何组合被附加到此窗体的任何地方。窗体是可以移动的，并且附着在其上的所有控件都将一起移动。

### 控件的窗体类

如前面所讨论的， **CElement** 类 [的描述中已经含有](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!cglgmgnv) 一些对每一个控件来说都是独特的虚拟方法。让我们把它们的副本放到 **CWindow** 类中，并且在其他控件的每一个描述中我们都应这么做。那些方法的代码将在我们创建了建立控件窗体（窗口）的方法之后考虑。

```
//+------------------------------------------------------------------+
//|                                                       Window.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
//+------------------------------------------------------------------+
//| 创建控件窗体的类
//+------------------------------------------------------------------+
class CWindow : public CElement
  {
public:
                     CWindow(void);
                    ~CWindow(void);
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void);
   //--- 移动控件
   virtual void      Moving(const int x,const int y);
   //--- 显示，隐藏，重置，删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //---点击鼠标左键设置，重置属性
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CWindow::CWindow(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       
//+------------------------------------------------------------------+
CWindow::~CWindow(void)
  {
  }
//+------------------------------------------------------------------+
```

在 **CWindow** 类及其他一些类中，许多不同的操作模式将被使用。所有模式和数据类型的命名常量标识符列表将被存储在独立的 **Enums.mqh** 文件中。将其包含在 **Objects.mqh** 文件中，这样所有模式和类型枚举值都能够被所有库文件使用：

```
//+------------------------------------------------------------------+
//|                                                      Objects.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Enums.mqh"
#include "Defines.mqh"
#include <ChartObjects\ChartObjectsBmpControls.mqh>
#include <ChartObjects\ChartObjectsTxtControls.mqh>
```

我们将要创建的窗口由哪些部分组成呢？

1. 背景。所有的控件都将位于此区域。
2. 头部。这个部分可以移动窗口并且包含下面列出的界面控件。
3. 图标。利于视觉识别的附加物。
4. 标题。窗口名称。
5. “提示信息”按钮。按下此按钮可以开启控件提示显示模式。
6. 最小化/最大化窗口按钮。
7. 关闭窗口按钮。

![图 1. 控件窗体的组合部分](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-04_%5D2%2Cplg "图 1. 控件窗体的组合部分")
![[Pasted image 20260628181405.png]]
图 1. 控件窗体的组合部分

在正在开发的图形界面库中，将实现一个多窗口模式。一个应用程序可能仅有一个窗口。然而，当一个程序有许多选项时，将它们放在一个窗体中就不可能了，此时就需要另外的窗体了。可用于应用程序、引用或窗口打开/保存文件，甚至是选择颜色调色板的一些常用设置。因此，很多想法都需要额外的窗口来实现。通常它们被称为“对话框”。

**CWindow** 类必须具备定义窗口类型的功能，即那个是应用程序主窗口以及哪个是对话窗口。开发过程中可能会出现一些新窗口类型的想法，但是现在，我们将在 **Enums.mqh** 文件中创建一个枚举值，仅包含两个类型 (1) 主窗口 (2) 对话窗口：

```
//+------------------------------------------------------------------+
//| 窗口类型的枚举                         
//+------------------------------------------------------------------+
enum ENUM_WINDOW_TYPE
  {
   W_MAIN   =0,
   W_DIALOG =1
  };
```

背景和头部将由原始对象“Rectangle Label”创建。我们有 **CRectLabel** 类。对于标题，我们将使用 **CLabel** 类，通过它可以创建“Text Label”对象。对于上面列出的窗口图标和按钮需要“Bitmap Label”对象，对此我们已经有了 **CBmpLabel** 类。

如果 **Element.mqh** 文件已经被包含，那么所有在 **Object.mqh** 文件中定义的类都可以被使用了。让我们在 **CWindow** 类体中为窗口的每个控件创建实例以及所有创建窗口所需的方法：

```
class CWindow : public CElement
  {
private:
   //--- 创建一个窗体的对象
   CRectLabel        m_bg;
   CRectLabel        m_caption_bg;
   CBmpLabel         m_icon;
   CLabel            m_label;
   CBmpLabel         m_button_tooltip;
   CBmpLabel         m_button_unroll;
   CBmpLabel         m_button_rollup;
   CBmpLabel         m_button_close;
   //---
public:
   //--- 创建一个窗口的方法
   bool              CreateWindow(const long chart_id,const int window,const string caption_text,const int x,const int y);
   //---
private:
   bool              CreateBackground(void);
   bool              CreateCaption(void);
   bool              CreateIcon(void);
   bool              CreateLabel(void);
   bool              CreateButtonClose(void);
   bool              CreateButtonRollUp(void);
   bool              CreateButtonUnroll(void);
   bool              CreateButtonTooltip(void);
  };
```

在我们开始填充这些方法之前，我们得在 **CWndContainer** 类中实现些功能，其中数组将存储所有界面控件的指针以及它们的组成部分。我们还得在开发库结构的过程中执行如下步骤并准备一个测试程序。

在含有 **CWndContainer** 类的 **WndContainer.mqh** 中包含带有 **CWindow** 类的 **Window.mqh** 文件。我们也将在这里包含其他控件的类。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Window.mqh"
// ...
// 在此处我们还会包含控件的所有其他类
// ...
```

这样它们就能被在 **CProgram** 类中使用了，MQL程序的用户界面就在此类中被创建。在 **CWndContainer** 和 **CWndEvents** 类中可以创建和使用这些数据类型的类成员。例如，在包含了 **Window.mqh** 文件后，一个 **CWindow** 类型的动态指针数组被创建（运行时并不需要它），不会有任何问题且不会显示报错信息。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 存储所有界面对象的类
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 窗口数组
   CWindow          *m_windows[];
  };
```

然而，如果 **Window.mqh** 文件没有被包含，那么当创建 **CWindow** 类型的类成员时，当你试图编译文件时将会收到一个报错信息。

![图 2. 编译时特定类型缺失的报错信息](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-05_%5D1%2Cplg "图 2. 编译时特定类型缺失的报错信息")
![[Pasted image 20260628181520.png]]
图 2. 编译时特定类型缺失的报错信息

除了动态窗口数组，我们需要一个针对所有控件（ **CElement** ）的动态指针数组以及所有组成对象（ [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) ）的数组。作为这种结构的一个实例，让我们创建一个大小和窗口数组(**m\_window** \[\])一样的动态数组。因此，对于每一个窗体，我们将得到一个控件指针数组的数组。

请注意 **m\_objects** \[\] 数组被声明为 [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) 类型。在编译时不会出现任何错误，因为这个对象类型已经存在于开发的库结构中了，它被包含在 **Objects.mqh** 文件中。

```
class CWndContainer
  {
protected:
   //--- 控件数组结构
   struct WindowElements
     {
      //--- 所有对象的共同数组
      CChartObject     *m_objects[];
      //--- 所有控件的共同数组
      CElement         *m_elements[];
     };
   //--- 每个窗口的数组控件数组
   WindowElements    m_wnd[];
  };
```

没有一个完整的 **WindowElements** 结构的动态数组列表。随着其他控件的创建，这个列表将被更新。

要获取数组大小，需要合适的方法。所有控件的对象数量以及每个窗口的控件数量，可以通过将窗口索引(**window\_index**)作为参数传递过去来获得。

```
class CWndContainer
  {
public:
   //--- 界面中的窗口数量
   int               WindowsTotal(void) { return(::ArraySize(m_windows)); }
   //--- 所有控件的对象数量
   int               ObjectsElementsTotal(const int window_index);
   //--- 控件数量
   int               ElementsTotal(const int window_index);
  };
```

我们必须检查数数组是否越界。通常一个重复的表达式可以通过在开始时添加一个含有函数名称([\_\_FUNCTION\_\_](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Flaoefcmnqtcnvs-cmmrineoaarms))的预定义宏作为宏替换。让我们编写这个宏替换(**PREVENTING\_OUT\_OF\_RANGE**)并且将其添加到 **Defines.mqh** 文件中：

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//---放置数组大小溢出
#define PREVENTING_OUT_OF_RANGE __FUNCTION__," > Prevention of exceeding the array size."
```

现在，在所有函数中检查数组是否越界使用起来将非常方便。

```
//+------------------------------------------------------------------+
//| 通过指定的窗口索引返回对象数量
//+------------------------------------------------------------------+
int CWndContainer::ObjectsElementsTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_objects));
  }
//+------------------------------------------------------------------+
//| 通过窗口索引返回控件数量
//+------------------------------------------------------------------+
int CWndContainer::ElementsTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_elements));
  }
```

现在，想象一下你是这个库的使用者，想将 **CProgram** 类应用于 [之前创建的用于测试的](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!crrmgpao) EA。让我们假设需要创建一个交易面板。为此，我们在 **CProgram** 类中创建 **CreateTradePanel** ()方法。不要忘记，为了节省文章篇幅，我们仅会在之前已经完成的基础上进一步创建我们需要的，并且随着项目的进行只讨论我们向不同类中添加了什么。

```
class CProgram : public CWndEvents
  {
public:
   //--- 创建交易面板
   bool              CreateTradePanel(void);
  };
//+------------------------------------------------------------------+
//| 创建一个交易面板          
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建一个控件窗体
// ...
//--- 创建控件
// ...
//---
   ::ChartRedraw();
   return(true);
  }
```

该方法的主体当前是空的，但很快它将被填充所需的功能。从方法主体的注释中可以看到，很明显，控件窗口是第一个要创建的。我们需要一个可以定义创建窗口属性的方法。因为我们已经在 **WndContainer.mqh** 文件中包含 **Window.mqh** 文件，现在 **CWindow** 类在 **CProgram** 类中可用了。因此，我们打算创建一个这个类的实例以及一个创建控件窗体的方法 **CreateWindow** ()：

```
class CProgram : public CWndEvents
  {
private:
   //--- 控件窗体
   CWindow           m_window;
   //---
private:
   //--- 创建一个窗体
   bool              CreateWindow(const string caption_text);
  };
```

现在是时候回答下面的问题了：

1. 控件指针和它们的对象如何在数组（我们之前在 **CWndContainer** 类中创建的）里找到自身的位置？
2. 每个界面控件的标识符将如何定义？

因为创建一个界面需要一个特定的（严格的）序列，界面开发的过程必须以这样的方式来组织，如果不是的话，当序列没有被准确遵循的情况下，开发者在不知如何处理的时候会迷失自我。这就是为什么库用户的每一个操作都会被库引擎所控制的原因。让我们来组织一下使得不可能创建一个指针不在 **CWndContainer** 类的基类指针中的控件窗体。直到控件要附着窗体的指针没有被保存在它的类中，才会创建一个控件。

让我们创建 **AddWindow** ()方法来添加一个窗口指针到 **CWndContainer** 类的界面控件基类中。还有，(1) 在控件数组中存储指针。(2) 在公共对象指针数组中存储控件对象的指针，为此我们需要 **AddToObjectsArray** ()方法，以及(3) 设置标识符。另外，还需要(4) 存储窗口属性中的最后一个标识符，因为必须在它们的类中定义每个控件的标识符。这将是可能的，因为正如前面提到的，每一个控件都有一个指向父窗口的指针。

让我们从在 **CWindow** 中创建 **LastId** ()方法开始，存储并获取最近创建的界面控件的标识符。

```
class CWindow : public CElement
  {
private:
   //--- 最近一个控件的标识符
   int               m_last_id;
   //---
public:
   //--- 存储及获取最近创建的控件ID的方法
   void              LastId(const int id)                                    { m_last_id=id;                       }
   int               LastId(void)                                      const { return(m_last_id);                  }
  };
```

让我们在 **CWndContainer** 类中创建剩余的将在 **AddWindow** ()中被使用的方法。每一个控件都有其独有的类名，因此 **AddToObjectsArray** ()方法将是一个 **模板** 方法，不同控件的对象都将被传入其中。在这个方法中，我们将遍历控制对象数组，依次在基类数组中添加它们每一个的指针。为此，我们需要另一个方法。我们将其命名为 **AddToArray** ()。由于仅有一种类型的对象([CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv))将被传入此方法中，因此没有必要将其制作为模板。

```
class CWndContainer
  {
protected:
   //--- 向公共数组中添加控件对象的指针
   template<typename T>
   void              AddToObjectsArray(const int window_index,T &object);
   //--- 向数组中添加对象指针
   void              AddToArray(const int window_index,CChartObject &object);
  };
//+------------------------------------------------------------------+
//| 向公共数组中添加控件对象的指针
//+------------------------------------------------------------------+
template<typename T>
void CWndContainer::AddToObjectsArray(const int window_index,T &object)
  {
   int total=object.ObjectsElementTotal();
   for(int i=0; i<total; i++)
      AddToArray(window_index,object.Object(i));
  }
//+------------------------------------------------------------------+
//| 向数组中添加对象指针
//+------------------------------------------------------------------+
void CWndContainer::AddToArray(const int window_index,CChartObject &object)
  {
   int size=::ArraySize(m_wnd[window_index].m_objects);
   ::ArrayResize(m_wnd[window_index].m_objects,size+1);
   m_wnd[window_index].m_objects[size]=::GetPointer(object);
  }
```

现在，可以创建 **AddWindow** ()方法了。此处，我们还需要一个控件计数器(**m\_counter\_element\_id**)。在每次向基类中添加另一个控件之后，必须增加此变量的值。

```
class CWndContainer
  {
private:
   //--- 控件计数器
   int               m_counter_element_id;
   //---
protected:
   //--- 向界面控件的基类中添加窗口指针
   void              AddWindow(CWindow &object);
  };
//+------------------------------------------------------------------+
//| 向界面控件的基类中添加窗口指针
//+------------------------------------------------------------------+
void CWndContainer::AddWindow(CWindow &object)
  {
   int windows_total=::ArraySize(m_windows);
//--- 如果没有任何窗口，清空控件计数器
   if(windows_total<1)
      m_counter_element_id=0;
//--- 向窗口数组添加指针
   ::ArrayResize(m_wnd,windows_total+1);
   ::ArrayResize(m_windows,windows_total+1);
   m_windows[windows_total]=::GetPointer(object);
//--- 向公共控件数组中添加指针
   int elements_total=::ArraySize(m_wnd[windows_total].m_elements);
   ::ArrayResize(m_wnd[windows_total].m_elements,elements_total+1);
   m_wnd[windows_total].m_elements[elements_total]=::GetPointer(object);
//--- 向公共对象数组中添加控件对象
   AddToObjectsArray(windows_total,object);
//--- 设置标识符并且存储最近一个控件的id
   m_windows[windows_total].Id(m_counter_element_id);
   m_windows[windows_total].LastId(m_counter_element_id);
//--- 增加控件标识符计时器的值
   m_counter_element_id++;
  }
```

从现在开始，每一次在MQL应用（在本文中是 **CProgram** ）中创建一个自定义类的新窗口，你必须使用 **AddWindow** ()方法将它添加到基类中。

然后，先前声明的用于创建窗口的方法必须在 **CWindow** 类中实现。为此，我们需要额外的变量和方法，它们同窗口展现类型以及窗口模式（由用户设置或者取决于MQL应用类型）相关。在下面列出它们并且辅以简短的描述：

1. 用于设置及获取窗口状态（最小化/最大化）的方法。
2. 用于设置和获取窗口类型（主窗口/对话窗口）的方法。
3. 将所创建的MQL应用（EA，指标）的类型考虑在内的，用于设置窗口最小化模式的方法。为此，如果这是一个不在主图表窗口的指标，我们需要可以管理其窗口大小的方法。
4. 用户设置每个窗口对象颜色的方法。
5. 用于设置窗口标签的方法。
6. 定义窗口的默认标签的方法（如果用户没有定义窗口标签）。
7. 窗口标题中捕获区域边界的识别。
8. 离窗口右边缘的按钮缩进量常数。
9. 展现工具提示显示模式的按钮。
10. 每个窗口对象单击鼠标左键的优先级变量。

将上面所有的内容列到 **CWindow** 类中。按钮从窗体右边缘缩进的常量在文件开始时被定义：

```
//+------------------------------------------------------------------+
//|                                                       Window.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
//--- 按钮从窗口右边缘缩进
#define CLOSE_BUTTON_OFFSET   (20)
#define ROLL_BUTTON_OFFSET    (36)
#define TOOLTIP_BUTTON_OFFSET (53)
```

在类体中创建变量和方法：

```
//+------------------------------------------------------------------+
//| 创建控件窗体的类
//+------------------------------------------------------------------+
class CWindow : public CElement
  {
private:
   //--- 最近一个控件的标识符
   int               m_last_id;
   //--- 最小化窗口的状态
   bool              m_is_minimized;
   //--- 窗口类型
   ENUM_WINDOW_TYPE  m_window_type;
   //--- 子窗口的高度设置模式（用于指标）
   bool              m_height_subwindow_mode;
   //--- 在指示子窗口中最小化窗体的模式
   bool              m_rollup_subwindow_mode;
   //--- 指标子窗口的高度
   int               m_subwindow_height;
   //--- 背景的属性/s0>
   int               m_bg_zorder;
   color             m_bg_color;
   int               m_bg_full_height;
   //--- 头部的属性
   int               m_caption_zorder;
   string            m_caption_text;
   int               m_caption_height;
   color             m_caption_bg_color;
   color             m_caption_bg_color_hover;
   color             m_caption_bg_color_off;
   color             m_caption_color_bg_array[];
   //--- 按钮的属性
   int               m_button_zorder;
   //--- 窗体（北京，头部）的颜色
   color             m_border_color;
   //--- 窗体按钮
   string            m_icon_file;
   //--- 工具提示方式的按钮显示
   bool              m_tooltips_button;
   //--- 在窗口头部确定捕获区域的边界
   int               m_right_limit;
   //---
public:
   //--- 窗口类型
   ENUM_WINDOW_TYPE  WindowType(void)                                  const { return(m_window_type);              }
   void              WindowType(const ENUM_WINDOW_TYPE flag)                 { m_window_type=flag;                 }
   //--- 默认图标
   string            DefaultIcon(void);
   //--- (1) 窗口的自定义图标， (2) 使用信息提示按钮 (3) 头部捕获区域的界限
   void              IconFile(const string file_path)                        { m_icon_file=file_path;              }
   void              UseTooltipsButton(void)                                 { m_tooltips_button=true;             }
   void              RightLimit(const int value)                             { m_right_limit=value;                }
   //--- 最小化窗口的状态
   bool              IsMinimized(void)                                 const { return(m_is_minimized);             }
   void              IsMinimized(const bool flag)                            { m_is_minimized=flag;                }
   //--- 头部的属性
   void              CaptionText(const string text);
   string            CaptionText(void)                                 const { return(m_caption_text);             }
   void              CaptionHeight(const int height)                         { m_caption_height=height;            }
   int               CaptionHeight(void)                               const { return(m_caption_height);           }
   void              CaptionBgColor(const color clr)                         { m_caption_bg_color=clr;             }
   color             CaptionBgColor(void)                              const { return(m_caption_bg_color);         }
   void              CaptionBgColorHover(const color clr)                    { m_caption_bg_color_hover=clr;       }
   color             CaptionBgColorHover(void)                         const { return(m_caption_bg_color_hover);   }
   void              CaptionBgColorOff(const color clr)                      { m_caption_bg_color_off=clr;         }
   //--- 窗口属性
   void              WindowBgColor(const color clr)                          { m_bg_color=clr;                     }
   color             WindowBgColor(void)                                     { return(m_bg_color);                 }
   void              WindowBorderColor(const color clr)                      { m_border_color=clr;                 }
   color             WindowBorderColor(void)                                 { return(m_border_color);             }
   //--- 指标子窗口模式
   void              RollUpSubwindowMode(const bool flag,const bool height_mode);
   //--- 改变指标子窗口高度
   void              ChangeSubwindowHeight(const int height);
  };
```

使用默认值初始化类构造函数中的变量。在构造函数中，我们还存储了界面控件的类名称，并设置了一个严格的鼠标左键优先级序列。

```
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CWindow::CWindow(void) : m_last_id(0),
                         m_subwindow_height(0),
                         m_rollup_subwindow_mode(false),
                         m_height_subwindow_mode(false),
                         m_is_minimized(false),
                         m_tooltips_button(false),
                         m_window_type(W_MAIN),
                         m_icon_file(""),
                         m_right_limit(20),
                         m_caption_height(20),
                         m_caption_bg_color(C'88,157,255'),
                         m_caption_bg_color_off(clrSilver),
                         m_caption_bg_color_hover(C'118,177,255'),
                         m_bg_color(C'15,15,15'),
                         m_border_color(clrLightGray)

  {
//--- 在基类中存储控件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置一个严格的优先级序列
   m_bg_zorder      =0;
   m_caption_zorder =1;
   m_button_zorder  =2;
  }
```

上面代码中以黄色突出显示的方法的具体实现如下：如果需要基类中的变量和方法，那么最好在它们的前面加上类名和双冒号作为前缀(**ClassName::**)。这样可以使代码易读，并且当你有段时间没有看到它们后能够快速的回忆起来。 **m\_subwindow\_height** 变量的名称将在窗口创建时被自动定义。

```
//+------------------------------------------------------------------+
//| 最小化指标子窗口的模式
//+------------------------------------------------------------------+
void CWindow::RollUpSubwindowMode(const bool rollup_mode=false,const bool height_mode=false)
  {
   if(CElement::m_program_type!=PROGRAM_INDICATOR)
      return;
//---
   m_rollup_subwindow_mode =rollup_mode;
   m_height_subwindow_mode =height_mode;
//---
   if(m_height_subwindow_mode)
      ChangeSubwindowHeight(m_subwindow_height);
  }
```

当我们研究终端图表上的实际例子时，我们会在后续章节中回到 **CWindow::RollUpSubwindowMode** ()方法上来。这样我们嫩更为清晰的了解每一个提出的方法是用作何处的。

**CWindow::ChangeSubwindowHeight** ()方法允许我们改变指标子窗口的高度，如果程序在此模式下：

```
//+------------------------------------------------------------------+
//| 改变指标子窗口高度
//+------------------------------------------------------------------+
void CWindow::ChangeSubwindowHeight(const int height)
  {
   if(CElement::m_subwin<1 || CElement::m_program_type!=PROGRAM_INDICATOR)
      return;
//---
   if(height>0)
      ::IndicatorSetInteger(INDICATOR_HEIGHT,height);
  }
```

### 创建窗体的方法

对于所有可见的窗口组合部件，在创建后它们必须被设置在一个严格的（逐层的）序列中：

1. 背景。
2. 头部。
3. 头部控件。

在 **CWindow::CreateWindow** () 方法的一开始，即窗口的所有组成部分被创建的地方，检查此窗口的指针是否被保存在控件基类中。如果没有，则窗口标识符的值将为 [WRONG\_VALUE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Flaoefcmnqtcnvs-ovhgraolsvaltq) 。在那种情况下，窗口将不会被创建并且函数返回 **false** ，在日志中打印一条关于应采取何种措施的消息。如果一切就绪，那么当前类和基类的变量将通过传入的参数初始化。其中参数有：

- 图表标识符。
- 图表窗口编号。
- 窗口名称（标题中的文本）。
- 设置窗口的坐标 (x, y)。
- 窗体高度变量副本 (**m\_bg\_full\_height**)。将用于改变窗体尺寸。窗体的高度在应用创建窗体的方法前设置（例子在下面给出）。

图表标识符和图标窗口编号在类 **CWndEvents** 的构造函数中定义。挡在自定义类 (**CWndEvents::CProgram**)中创建控件时，这些值将被传递到创建它们的方法中去。

然后，紧接着创建窗体对象的方法。如果任何一个对象没有被创建，那么函数将返回 **false** 。在初始化所有对象之后，根据程序的类型和设置模式，必须检查是否需要设置窗口的尺寸（如果这是一个在独立窗口中展现的指标）。之前，我提到过 **m\_subwindow\_height** 变量，它在窗口被创建时初始化。这正是这个初始化发生的地方。在下面的代码中它被以黄色高亮显示出来。

并且最后，如果这个是对话框窗口，必须将其隐藏。在此需要做一些解释。如果程序包含多个窗口，那么这些窗口将在程序加载时被附加到图表上。所以，当调用一个或另一个对话框窗口时，用户将不需要继续创建和删除对话框窗口。它们将以隐藏模式全部出现在图表上。当一个对话框被调用时，它会被设为可见状态，当它被关闭时，它会被隐藏，但不会被删除。

上面我所说的一切都反映在下面的代码中：

```
//+------------------------------------------------------------------+
//| 为控件创建一个窗体
//+------------------------------------------------------------------+
bool CWindow::CreateWindow(const long chart_id,const int subwin,const string caption_text,const int x,const int y)
  {
   if(CElement::Id()==WRONG_VALUE)
     {
      ::Print(__FUNCTION__," > Before creating a window, its pointer is to be passed "
            "to the window array using the CWndContainer::AddWindow(CWindow &object) method.");
      return(false);
     }
//--- 变量初始化
   m_chart_id       =chart_id;
   m_subwin         =subwin;
   m_caption_text   =caption_text;
   m_x              =x;
   m_y              =y;
   m_bg_full_height =m_y_size;
//--- 创建所有窗口对象
   if(!CreateBackground())
      return(false);
   if(!CreateCaption())
      return(false);
   if(!CreateLabel())
      return(false);
   if(!CreateIcon())
      return(false);
   if(!CreateButtonClose())
      return(false);
   if(!CreateButtonRollUp())
      return(false);
   if(!CreateButtonUnroll())
      return(false);
   if(!CreateButtonTooltip())
      return(false);
//--- 如果这个程序是一个指标
   if(CElement::ProgramType()==PROGRAM_INDICATOR)
     {
      //--- 如果设置为设置子窗口高度模式
      if(m_height_subwindow_mode)
        {
         m_subwindow_height=m_bg_full_height+3;
         ChangeSubwindowHeight(m_subwindow_height);
        }
     }
//--- 如果是一个对话框窗口，隐藏窗口
   if(m_window_type==W_DIALOG)
      Hide();
//---
   return(true);
  }
```

虚函数 **Hide** ()用于隐藏控件对象。在上面的代码中，用绿色高亮显示。先前在 **CWindow** 类中，我们仅仅做了声明。在它的代码中，窗口的所有对象在所有时间框架上都被隐藏了，并且基类的 **m\_is\_visible** 变量为 **false** 状态。

```
//+------------------------------------------------------------------+
//| 隐藏窗口
//+------------------------------------------------------------------+
void CWindow::Hide(void)
  {
//--- 隐藏所有对象
   for(int i=0; i<ObjectsElementTotal(); i++)
      Object(i).Timeframes(OBJ_NO_PERIODS);
//--- 可见状态
   CElement::IsVisible(false);
  }
```

如果你已经引入了上面所有的变化，不要急于编译带有 **CWindow** 类的文件，因为你将收到一个报错信息（请看下面的截图）。因为所有创建窗口组成部分的方法目前还没有方法体。现在我们要花些时间来完成它们的具体实现。

![图 3. 缺少方法体的报错信息](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-0%3A.rne "图 3. 缺少方法体的报错信息")
![[Pasted image 20260628181613.png]]
图 3. 缺少方法体的报错信息

让我们从背景和 **CWindow::CreateBackground** ()方法的使用开始。在每一个和对象创建有关的方法的开始处，我们要为此对象命名。它将由多个部分组成：

- 程序名称。
- 控件的归属（“窗口”）。
- 控件一部分的归属（“bg”）。
- 控件标识符。

不同的部分将通过下下划线“\_”来分隔。程序的名称保存在 **CElement** 基类构造函数初始化列表中。控件标识符在向控件基类添加窗口的时候被获取。

然后，我们要执行窗口背景大小的检查，并且如果窗口被最小化或最大化的话还要调整其大小。我们打算继续往前。当时间框架或者图表的交易对象改变了，所有的对象将通过程序反初始化函数移除。在程序的初始化函数中，它们将根据当前类域（变量）中的值被重置。

在调整了背景大小之后，进行对象设置，紧接着设置其属性。在方法的最后，对象的指针被保存在基类数组中。 **CWindow::CreateBackground** ()函数代码如下所示：

```
//+------------------------------------------------------------------+
//| 创建窗口背景
//+------------------------------------------------------------------+
bool CWindow::CreateBackground(void)
  {
//--- 形成窗口名称
   string name=CElement::ProgramName()+"_window_bg_"+(string)CElement::Id();
//--- 取决于窗口状态的窗口大小（最小化/最大化）
   int y_size=0;
   if(m_is_minimized)
     {
      y_size=m_caption_height;
      CElement::YSize(m_caption_height);
     }
   else
     {
      y_size=m_bg_full_height;
      CElement::YSize(m_bg_full_height);
     }
//--- 设置窗口背景
   if(!m_bg.Create(m_chart_id,name,m_subwin,m_x,m_y,m_x_size,y_size))
      return(false);
//--- 设置属性
   m_bg.BackColor(m_bg_color);
   m_bg.Color(m_border_color);
   m_bg.BorderType(BORDER_FLAT);
   m_bg.Corner(m_corner);
   m_bg.Selectable(false);
   m_bg.Z_Order(m_bg_zorder);
   m_bg.Tooltip("\n");
//--- 存储对象指针
   CElement::AddToArray(m_bg);
   return(true);
  }
```

在窗口标题的创建方法中，除了同创建窗口背景方法的实现类似的基本操作外，还需要在位于 **Objects.mqh** 文件中的原始对象类 **CRectLabel** 内存储坐标和大小。当窗口被转移（因此它的坐标产生了变化）及窗口大小改变时，这些字段的值将被更新。如果这些值是静态的，要光标跟踪窗口标题是不可能的。此规则将适用于所有其他控件中的所有其他对象。

另一个区别在于当鼠标光标在窗口区域或当其离开窗口区域时，窗口头部能够对其作出响应。为此，在 **CElement** 类中创建 **InitColorArray** ()方法。

**CElement::CreateCaption** ()方法的代码：

```
//+------------------------------------------------------------------+
//| 创建窗口标题
//+------------------------------------------------------------------+
bool CWindow::CreateCaption(void)
  {
   string name=CElement::ProgramName()+"_window_caption_"+(string)CElement::Id();
//--- 设置窗口标题
   if(!m_caption_bg.Create(m_chart_id,name,m_subwin,m_x,m_y,m_x_size,m_caption_height))
      return(false);
//--- 设置属性
   m_caption_bg.BackColor(m_caption_bg_color);
   m_caption_bg.Color(m_border_color);
   m_caption_bg.BorderType(BORDER_FLAT);
   m_caption_bg.Corner(m_corner);
   m_caption_bg.Selectable(false);
   m_caption_bg.Z_Order(m_caption_zorder);
   m_caption_bg.Tooltip("\n");
//--- 存储坐标
   m_caption_bg.X(m_x);
   m_caption_bg.Y(m_y);
//--- 存储大小（对象内）
   m_caption_bg.XSize(m_caption_bg.X_Size());
   m_caption_bg.YSize(m_caption_bg.Y_Size());
//--- 初始化渐变色数组
   CElement::InitColorArray(m_caption_bg_color,m_caption_bg_color_hover,m_caption_color_bg_array);
//--- 存储对象指针
   CElement::AddToArray(m_caption_bg);
   return(true);
  }
```

界面主窗口中的程序标签将展现为事先准备的默认图标。至于将使用哪一个这取决于所开发的程序类型([ENUM\_PROGRAM\_TYPE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fgntipolmgnv_qtctg%2Foqn5%5Dppoercmo_kndo))。所有的标签图标可以再本文的结尾处下载。在程序中，那些不能被点击的标签图标控件，应该被放在 **\<data folder>\\MQLX\\Images\\EasyAndFastGUI\\Icons\\bmp16** 目录中。文件夹名 **bmp16** 意味着其下包含大小为 **16** x **16** 像素的图标。如果你的库中的图标是 **24** x **24** 大小的，那么应该将文件夹命名为 **bmp24** ，以此类推。

创建控件使用默认的标准图标，必须放在 **\<data folder>\\MQLX\\Images\\EasyAndFastGUI\\Controls** 目录下。

为了自动识别主程序窗口的标签，在 **CWindow** 类中声明 **DefaultIcon** ()方法。下面是此方法的代码：

```
//+------------------------------------------------------------------+
//| 识别默认标签
//+------------------------------------------------------------------+
string CWindow::DefaultIcon(void)
  {
   string path="Images\\EasyAndFastGUI\\Icons\\bmp16\\advisor.bmp";
//---
   switch(CElement::ProgramType())
     {
      case PROGRAM_SCRIPT:
        {
         path="Images\\EasyAndFastGUI\\Icons\\bmp16\\script.bmp";
         break;
        }
      case PROGRAM_EXPERT:
        {
         path="Images\\EasyAndFastGUI\\Icons\\bmp16\\advisor.bmp";
         break;
        }
      case PROGRAM_INDICATOR:
        {
         path="Images\\EasyAndFastGUI\\Icons\\bmp16\\indicator.bmp";
         break;
        }
     }
//---
   return(path);
  }
```

必须注意的是，只有同数据可视化有关的界面控件才能被用在脚本中。因为脚本无法使用函数来追踪事件。

如果窗口图标必须被重新定义，可以使用 **CWindow::IconFile** ()方法。当我们基于这个程序库在终端图表上进行界面测试时，将考虑这个和其他方法的使用样例。

不同控件的图标资源将紧接着方法（在方法体外）被包含([#resource](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fpultkmg%2Fpeqowraeq))到它们要被使用的地方（黄色高亮）。标签始终有一种状态（一种图标），因此只有一个路径将会在原始对象的 **CChartObjectBmpLabel::BmpFileOn** () 和 **CChartObjectBmpLabel::BmpFileOff** ()方法中被指定。

每个窗口所有控件的所有对象的坐标（除了窗口标题）的计算，都和作为此方法局部变量的、该窗口的坐标（左上角）有关。因此，相对于窗口坐标的所有对象的缩进被存储在 **Objects.mqh** 文件中的原始对象类的相关区域中。当一个窗口被移动时，无需再次计算其坐标。这也就意味着更新所有控件的每个对象的坐标只需要一次操作而不是两次，就像对象设置的时候那样。在下面的代码中，从窗口边缘点缩进的代码以绿色高亮显示。

```
//+------------------------------------------------------------------+
//| 创建程序标签
//+------------------------------------------------------------------+
//--- 代表程序类型的图标（默认）
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\advisor.bmp"
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\indicator.bmp"
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\script.bmp"
//---
bool CWindow::CreateIcon(void)
  {
   string name=CElement::ProgramName()+"_window_icon_"+(string)CElement::Id();
//--- 对象坐标
   int x=m_x+5;
   int y=m_y+2;
//--- 设置窗口图标
   if(!m_icon.Create(m_chart_id,name,m_subwin,x,y))
      return(false);
//--- 如果用户没有指定，默认图标
   if(m_icon_file=="")
      m_icon_file=DefaultIcon();
//--- 设置属性
   m_icon.BmpFileOn("::"+m_icon_file);
   m_icon.BmpFileOff("::"+m_icon_file);
   m_icon.Corner(m_corner);
   m_icon.Selectable(false);
   m_icon.Z_Order(m_button_zorder);
   m_icon.Tooltip("\n");
//--- 存储坐标
   m_icon.X(x);
   m_icon.Y(y);   
//--- 从边缘点缩进
   m_icon.XGap(x-m_x);
   m_icon.YGap(y-m_y);
//--- 存储大小（对象内）
   m_icon.XSize(m_icon.X_Size());
   m_icon.YSize(m_icon.Y_Size());
//--- 向数组中添加对象
   CElement::AddToArray(m_icon);
   return(true);
  }
```

由于用以创建标题文本的函数代码 **CWindow::CreateLabel** ()同之前介绍的用于创建程序标签的方法没有任何不同之处，为了节省篇幅我们在此就不再赘述了。你可以在文本的结尾处的 **Window.mqh** 文件中找到它。

现在我们将讨论位于窗口标题的按钮。所有这些按钮都含有和上述方法不同的规则：

- 当光标悬停时改变其外观。这就是为何这样的按钮需要两个图标。一个图标将被用于 **ON** 状态，即当光标在按钮上时。另一个将被用于 **OFF** 状态，即光标在按钮区域外时。
- 脚本将不会有按钮。
- 对话框窗口仅有关闭窗口的按钮。
- 用于移动窗口的标题捕获区域大小的计算，取决于设置多少个按钮。

最小化和最大化窗口的功能需要2个按钮。一个在另一个上方，每一个按钮是否可见取决于当前窗口的状态。当窗口被对大化时，最小化窗口按钮可见，反之亦然。

其他一切情况下，这些按钮和控件窗体组成部分的方法没什么两样。更多关于 **CreateButtonClose** ()， **CreateButtonRollUp** ()， **CreateButtonUnroll** () 以及 **CreateButtonTooltip** ()方法的详细说明可以在文章结尾的 **Window.mqh** 文件中找到。

所有按钮的图标将在下面的例子中被使用，可以在本文的最后下载它们。你可以使用你自己的图标。在这种情况下，请记住，如果你文件的名称同本文中建议的不一样的话，必须被保存为同附件代码中bmp文件相同的文件名，或者bmp文件的路径必须改变。

### 向图表附加窗体

最后，我们已经到了可以测试部分完成的代码并查看结果的阶段了。让我们来看看一个控件窗体在图表上是什么样的。创建此窗体的功能函数已经在上面创建好了。

我们将继续在先前创建的用于测试的文件中进行开发。在那里，我们停在了 **CProgram::CreateTradePanel** ()方法（创建界面的公共方法）和 **CProgram::CreateWindow** ()方法（创建控件的方法）上。下面是创建一个窗体的代码。请注意背景色和窗体标题是能够如何被重新定义的。

```
//+------------------------------------------------------------------+
//| 为控件创建一个窗体
//+------------------------------------------------------------------+
bool CProgram::CreateWindow(const string caption_text)
  {
//--- 向窗口数组中添加一个而窗口指针
   CWndContainer::AddWindow(m_window);
//--- 属性
   m_window.XSize(200);
   m_window.YSize(200);
   m_window.WindowBgColor(clrWhiteSmoke);
   m_window.WindowBorderColor(clrLightSteelBlue);
   m_window.CaptionBgColor(clrLightSteelBlue);
   m_window.CaptionBgColorHover(C'200,210,225');
//--- 创建一个窗体
   if(!m_window.CreateWindow(m_chart_id,m_subwin,caption_text,1,1))
      return(false);
//---
   return(true);
  }
```

在公共方法 **CProgram::CreateTradePanel** ()中调用 **CProgram::CreateWindow** ()方法，传入一个文本作为窗口标题的唯一参数：

```
//+------------------------------------------------------------------+
//| 创建一个交易面板          
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建一个控件窗体
   if(!CreateWindow("EXPERT PANEL"))
      return(false);
//--- 创建控件
// ...
//---
   ::ChartRedraw();
   return(true);
  }
```

现在我们只需要在 [OnInit](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnknkt) ()函数中调用主程序文件中的 **CProgram::CreateTradePanel** ()方法。如果当创建程序界面时出现一个错误，在日志中打印相应的消息并结束程序：

```
//+------------------------------------------------------------------+
//| EA初始化函数                                                 
//+------------------------------------------------------------------+
int OnInit(void)
  {
   program.OnInitEvent();
//--- 设置交易面板
   if(!program.CreateTradePanel())
     {
      ::Print(__FUNCTION__," > Failed to create graphical interface!");
      return(INIT_FAILED);
     }
//--- 初始化成功
   return(INIT_SUCCEEDED);
  }
```

便以文件并将程序加载到图表上。如果一切顺利，你会在图表上看到如下面截图所示的一个窗体：

![图 4. 将窗体附加到图表上的第一次测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-06_niehv.rne "图 4. 将窗体附加到图表上的第一次测试")
![[Pasted image 20260628181644.png]]
图 4. 将窗体附加到图表上的第一次测试

如果在开发一个MQL应用时你忘记添加窗口指针了，你还是能够编译代码的。然而，当你试图将程序加载到图表上时，你会发现程序将立即被删除并且会在“Expert Advisors”标签页（“Tools”面板）的日志中打印出下面的报错信息：

```
2015.09.23 19:26:10.398 TestLibrary (EURUSD,D1) OnInit > Failed to create graphical interface!
2015.09.23 19:26:10.398 TestLibrary (EURUSD,D1) CWindow::CreateWindow > Before creating a window, its pointer is to be saved in the base: CWndContainer::AddWindow(CWindow &object).
```

在指标和脚本中使用 **CWindow** 类方法的更多详细的例子，将在此系列的后续文章中进行阐述。

### 总结

正在开发的程序库的当前结构如下图表所示：

![图. 5. 在项目中添加主界面控件和控件窗体。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-12.rne "图. 5. 在项目中添加主界面控件和控件窗体")
![[Pasted image 20260628181702.png]]
图. 5. 在项目中添加主界面控件和控件窗体

所有和界面控件相关的类以及从 **CElement** 基类派生而来的类，都在带深蓝色箭头的大矩形框中。所有的界面元素都将被包含在含有 **CWndContainer** 类的文件中。

你可以下载本系列文章第一部分的所有资料到你的电脑中并自行测试。如果您对如何使用这些文件中的材料有疑问，您可以参考下面的列表中的某一篇文章中的详细说明，或者在下面的评论中提出你的问题。

**第一部分的文章（章节）列表：**

- [图形界面 I：库结构（第一章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I：控件构成（第二章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I：充实图形界面（第三章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I：创建按钮及删除界面元素的函数（第四章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- 图形界面 I：在MetaTrader 4 终端中用不同类型的程序测试界面库（第五章）

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2126](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0106)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2324.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2324%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (51.67 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2324%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (51.59 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-77870)** (9)

![Pavel Trofimov](https://c.mql5.com/avatar/2021/4/6075DAED-FF88.jpg "Pavel Trofimov")

| 23 12月 2015 在 08:30

谢谢你的澄清！

![Alexander Fedosov](https://c.mql5.com/avatar/2019/5/5CE6AA22-02C3.jpg "Alexander Fedosov")

| 24 2月 2017 在 09:42

我找不到改变页眉文本颜色的方法，因此决定在 window.mqh 中添加：

//--- 标题属性  
string m\_caption\_text;  
int m\_caption\_height;  
color m\_caption\_text\_color;  
color m\_caption\_bg\_color;  
color m\_caption\_bg\_color\_off;  
color m\_caption\_bg\_color\_hover;  
color m\_caption\_color\_bg\_array\[\];

和方法：

void CaptionTextColor(const color text\_color) { m\_caption\_text\_color=text\_color; }  
color CaptionTextColor(void) const { return(m\_caption\_text\_color); }

好了，这个方法也会相应改变：

//+------------------------------------------------------------------+  
//|| 创建页眉文本标签|  
//+------------------------------------------------------------------+  
bool CWindow::CreateLabel(void)  
{  
string name=CElementBase::ProgramName()+"\_window\_label\_"+(string)CElementBase::Id();  
//--- 对象坐标  
int x=CElementBase::X()+m\_label\_x\_gap;  
int y=CElementBase::Y()+m\_label\_y\_gap;  
//--- 设置文本标签  
if(!m\_label.Create(m\_chart\_id,name,m\_subwin,x,y))  
return(false);  
//--- 设置属性  
m\_label.Description(m\_caption\_text);  
m\_label.Font(CElementBase::Font());  
m\_label.FontSize(CElementBase::FontSize());  
m\_label.Color(m\_caption\_text\_color);  
m\_label.Corner(m\_corner);  
m\_label.Selectable(false);  
m\_label.Z\_Order(m\_button\_zorder);  
m\_label.Tooltip("\\n");  
//--- 保存坐标  
m\_label.X(x);  
m\_label.Y(y);  
//--- 从终点开始缩进  
m\_label.XGap(x-m\_x);  
m\_label.YGap(y-m\_y);  
//--- 保存尺寸  
m\_label.XSize(m\_label.X\_Size());  
m\_label.YSize(m\_label.Y\_Size());  
//-- 保存对象指针  
CElementBase::AddToArray(m\_label);  
return(true);  
}

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 24 2月 2017 在 12:07

**Alexander Fedosov:**  

我找不到改变页眉文本颜色的方法，所以决定在 window.mqh 中添加：

很好。我还将在下一篇文章中添加这一功能。

最新版本的程序库可在以下文章中下载： [GUI X：绘制表格的新功能（第 9 版）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F1010) 。

下周可能会发布新版本 **（第 10 版** ）。

![Khaled.Mel](https://c.mql5.com/avatar/avatar_na2.png "Khaled.Mel")

| 15 3月 2023 在 10:05

您好，阿纳托利先生，您的文章非常好，编码也令人印象深刻。

我需要帮助在图表上建立我的面板。您能帮帮我吗？

谢谢。

![Marco](https://c.mql5.com/avatar/avatar_na2.png "Marco")

| 10 12月 2023 在 18:15

你好。我想问一下如何才能修复所有这些错误。谢谢。

```
'Window.mqh'    Window.mqh      1       1
'Element.mqh'   Element.mqh     1       1
'Objects.mqh'   Objects.mqh     1       1
'Enums.mqh'     Enums.mqh       1       1
'Defines.mqh'   Defines.mqh     1       1
'ChartObjectsBmpControls.mqh'   ChartObjectsBmpControls.mqh     1       1
'ChartObject.mqh'       ChartObject.mqh 1       1
'Object.mqh'    Object.mqh      1       1
'StdLibErr.mqh' StdLibErr.mqh   1       1
'ChartObjectsTxtControls.mqh'   ChartObjectsTxtControls.mqh     1       1
'Colors.mqh'    Colors.mqh      1       1
undefined class 'CBmpLabel' cannot be used      Window.mqh      25      15
   see declaration of class 'CBmpLabel' Objects.mqh     20      7
undefined class 'CLabel' cannot be used Window.mqh      26      12
   see declaration of class 'CLabel'    Objects.mqh     19      7
undefined class 'CBmpLabel' cannot be used      Window.mqh      27      15
   see declaration of class 'CBmpLabel' Objects.mqh     20      7
undefined class 'CBmpLabel' cannot be used      Window.mqh      28      15
   see declaration of class 'CBmpLabel' Objects.mqh     20      7
undefined class 'CBmpLabel' cannot be used      Window.mqh      29      15
   see declaration of class 'CBmpLabel' Objects.mqh     20      7
undefined class 'CBmpLabel' cannot be used      Window.mqh      30      15
   see declaration of class 'CBmpLabel' Objects.mqh     20      7
'ENUM_WINDOW_TYPE' - unexpected token, probably type is missing?        Window.mqh      36      5
'm_window_type' - semicolon expected    Window.mqh      36      22
'ENUM_WINDOW_TYPE' - unexpected token, probably type is missing?        Window.mqh      99      5
'WindowType' - semicolon expected       Window.mqh      99      23
'void' - name expected  Window.mqh      102     5
'}' - expressions are not allowed on a global scope     Window.mqh      104     5
'const' modifier not allowed for nonmember functions    Window.mqh      118     28
'const' modifier not allowed for nonmember functions    Window.mqh      126     30
'const' modifier not allowed for nonmember functions    Window.mqh      132     29
'const' modifier not allowed for nonmember functions    Window.mqh      138     32
'const' modifier not allowed for nonmember functions    Window.mqh      144     37
'public' - unexpected token, probably type is missing?  Window.mqh      168     3
'long' - unexpected token, probably type is missing?    Window.mqh      170     46
'double' - unexpected token, probably type is missing?  Window.mqh      170     66
'string' - unexpected token, probably type is missing?  Window.mqh      170     88
'virtual' - unexpected token    Window.mqh      172     5
'virtual' - unexpected token    Window.mqh      174     5
'virtual' - unexpected token    Window.mqh      176     5
'virtual' - unexpected token    Window.mqh      177     5
'virtual' - unexpected token    Window.mqh      178     5
'virtual' - unexpected token    Window.mqh      179     5
'virtual' - unexpected token    Window.mqh      181     5
'virtual' - unexpected token    Window.mqh      182     5
'}' - expressions are not allowed on a global scope     Window.mqh      183     1
'RollUpSubwindowMode' - member function not defined     Window.mqh      222     15
'ChangeSubwindowHeight' - member function not defined   Window.mqh      235     15
'Hide' - member function not defined    Window.mqh      294     15
'DefaultIcon' - member function not defined     Window.mqh      362     17
'advisor.bmp' as resource "::Images\EasyAndFastGUI\Icons\bmp16\advisor.bmp"     advisor.bmp     1       1
'indicator.bmp' as resource "::Images\EasyAndFastGUI\Icons\bmp16\indicator.bmp" indicator.bmp   1       1
'script.bmp' as resource "::Images\EasyAndFastGUI\Icons\bmp16\script.bmp"       script.bmp      1       1
'm_window_type' - struct member undefined       Window.mqh      193     5
'm_chart' - undeclared identifier       Window.mqh      210     5
'SetWindowProperties' - undeclared identifier   Window.mqh      212     5
')' - expression expected       Window.mqh      212     25
'm_window_type' - undeclared identifier Window.mqh      286     8
'W_DIALOG' - undeclared identifier      Window.mqh      286     25
'.' - struct or class type expected     Window.mqh      396     15
'Create' - undeclared identifier        Window.mqh      396     16
'Create' - some operator expected       Window.mqh      396     16
'(' - unbalanced left parenthesis       Window.mqh      396     7
',' - unexpected token  Window.mqh      396     33
'name' - some operator expected Window.mqh      396     35
expression has no effect        Window.mqh      396     23
',' - unexpected token  Window.mqh      396     49
expression has no effect        Window.mqh      396     41
',' - unexpected token  Window.mqh      396     52
expression has no effect        Window.mqh      396     51
')' - unexpected token  Window.mqh      396     55
expression has no effect        Window.mqh      396     54
')' - unexpected token  Window.mqh      396     56
'.' - struct or class type expected     Window.mqh      402     11
'BmpFileOn' - undeclared identifier     Window.mqh      402     12
'BmpFileOn' - some operator expected    Window.mqh      402     12
')' - unexpected token  Window.mqh      402     40
expression has no effect        Window.mqh      402     27
'.' - struct or class type expected     Window.mqh      403     11
'BmpFileOff' - undeclared identifier    Window.mqh      403     12
'BmpFileOff' - some operator expected   Window.mqh      403     12
')' - unexpected token  Window.mqh      403     41
expression has no effect        Window.mqh      403     28
'.' - struct or class type expected     Window.mqh      404     11
'Corner' - undeclared identifier        Window.mqh      404     12
'Corner' - some operator expected       Window.mqh      404     12
')' - unexpected token  Window.mqh      404     27
expression has no effect        Window.mqh      404     19
'.' - struct or class type expected     Window.mqh      405     11
'Selectable' - undeclared identifier    Window.mqh      405     12
'Selectable' - some operator expected   Window.mqh      405     12
')' - unexpected token  Window.mqh      405     28
expression has no effect        Window.mqh      405     23
'.' - struct or class type expected     Window.mqh      406     11
'Z_Order' - undeclared identifier       Window.mqh      406     12
'Z_Order' - some operator expected      Window.mqh      406     12
')' - unexpected token  Window.mqh      406     35
expression has no effect        Window.mqh      406     20
'.' - struct or class type expected     Window.mqh      407     11
'Tooltip' - undeclared identifier       Window.mqh      407     12
'Tooltip' - some operator expected      Window.mqh      407     12
')' - unexpected token  Window.mqh      407     24
expression has no effect        Window.mqh      407     21
'.' - struct or class type expected     Window.mqh      409     11
'X' - some operator expected    Window.mqh      409     12
'.' - struct or class type expected     Window.mqh      410     11
'Y' - some operator expected    Window.mqh      410     12
'.' - struct or class type expected     Window.mqh      412     11
'XGap' - some operator expected Window.mqh      412     12
'.' - struct or class type expected     Window.mqh      413     11
'YGap' - some operator expected Window.mqh      413     12
'.' - struct or class type expected     Window.mqh      415     11
'.' - struct or class type expected     Window.mqh      415     24
'X_Size' - undeclared identifier        Window.mqh      415     25
'X_Size' - some operator expected       Window.mqh      415     25
'(' - unexpected token  Window.mqh      415     31
'XSize' - some operator expected        Window.mqh      415     12
'.' - struct or class type expected     Window.mqh      416     11
'.' - struct or class type expected     Window.mqh      416     24
'Y_Size' - undeclared identifier        Window.mqh      416     25
'Y_Size' - some operator expected       Window.mqh      416     25
'(' - unexpected token  Window.mqh      416     31
'YSize' - some operator expected        Window.mqh      416     12
'm_icon' - parameter conversion not allowed     Window.mqh      418     26
   void CElement::AddToArray(CChartObject&)     Element.mqh     195     10
'm_icon_file' - undeclared identifier   Window.mqh      109     9
'm_tooltips_button' - undeclared identifier     Window.mqh      112     9
'm_right_limit' - undeclared identifier Window.mqh      115     9
'm_is_minimized' - undeclared identifier        Window.mqh      119     16
expression not boolean  Window.mqh      119     16
'm_is_minimized' - undeclared identifier        Window.mqh      122     9
100 errors, 11 warnings         101     12
```

[图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109)

在图形界面系列的第一部分前面的章节中, 我们已经丰富了表单类, 可以通过按下其中的控件来管理表单. 在本文中, 我们将使用不同类型的MQL程序, 例如指标和脚本程序, 来测试我们的成果. 因为此函数库被设计为跨平台的, 因而它可以用于所有MetaTrader平台, 我们也会在MetaTrader 4中测试它.

[图形界面 I：库结构(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)

本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。

[图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)

在本系列文章的第二部分中, 我们将向您展示界面元件开发的详细过程, 例如主菜单和上下文菜单. 我们还会提到元件的绘制以及为此开发一个特别的类. 我们还将深度讨论程序事件管理, 包括自定义事件的问题.

[图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)

在本文中, 我们将继续开发CWindow类, 增加它的类方法, 可以通过点击它的控件来对它进行管理. 我们将可以通过表单按钮来关闭程序, 也会实现表单的最小化和最大化功能.

