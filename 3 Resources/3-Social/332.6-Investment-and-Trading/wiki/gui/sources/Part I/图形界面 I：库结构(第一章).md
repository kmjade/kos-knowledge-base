---
title: "图形界面 I：库结构(第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_22"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-09T13:46:01+00:00Z
created: 2026-06-28
description: "本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。"
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

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_22)
- [控件列表](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_23)
- [作为基本对象的标准库的基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_24)
- [带有附加方法的基本对象的衍生类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_25)
- [所有空间的基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_26)
- [带有图形界面的应用程序的基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_27)
- [程序库和程序类的事件句柄测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_28)
- [总结](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105!pcrv_29)

### 简介

本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。

本项目的目标是为终端用户提供使用图形界面的机会，并展示在此库的帮助下是如何实现的。我尽可能的使其易于理解并留给读者进一步开发的空间。

值得一提的是 [Dmitry Fedoseev](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-uqeps-iltgggr) 在他的系列文章中分享的代码库：

- [自定义图形控件。Part 1. 创建一个简单的空间](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F112)
- [自定义图形控件。Part 2. 创建一个简单的空间](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F111)
- [自定义图形控件。Part 3. 样式](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F120)

虽然Dmitry提供的库和标准库各有优点，但同时它们也有各自的不足。Dmitry以说明书的形式提供了一份详细的关于库的描述，以及较标准库更为广泛的用户界面元素。然而，我不认可其中的一些功能以及实现的控制机制。一些论坛成员在他们的评论中分享了有趣的想法，我将其中的一些想法吸收了进来。

标准库没有配备详细的说明，在我看来它的结构框架更好，但仍然有改进的余地。另外，标准库没有包含很多特定图形界面需要的控件。在这两种实现中，当标准化和高质量不可兼得时，人们不禁会想到重新建立。在我的文章中，我试图汇集所有优点并消除一切缺陷。

早些时候，我写了两篇简单的介绍控件的文章：

- [MQL5 宝典：指标子窗口控件 - 按钮](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F552)
- [MQL5 宝典：指标子窗口控件 - 滚动条](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F553)

这些都是以面向过程的方式写的并且目标是为了熟悉MQL语言。现在是时候通过一个大项目的案例来介绍一个更为复杂的结构了，它通过面向对象的形式实现。

读者在阅读这些文章后将获得什么收获呢？

- 本项目的目标是为终端用户提供最为直观的用户界面。我会提供给那些用户界面的开发者一个简单易学及便于使用的代码库，使其能够用于后续开发。
- 那些即将使用面向对象的方法实施大型项目或者开始学习面向对象编程的开发者，将能找到大量的从开始到实现的学习资料。
- 有经验的开发者能找到图形用户界面开发库的实例，使其能够开始实现他们的想法。有选择总是好事。
- 那些能够创建这类程序库的以及有类似程序库的专家可以对我建议的实现方式进行批判和挑战。他们可能能够提出更为合适和高效的方法来实现这类课题，对于初学者来说或许有帮助。这类讨论有时候比文章本身更有意思。

我将这一些列文章中使用的叙述方法称为“思维序列的模拟尝试”。通常，在现实生活中大型项目开发过程中，动作顺序和思维方式都比较混乱，包括许多实验、尝试和错误。这里我们将跳过所有这些问题。对于那些首次遇到这种规模项目的读者来说，为了更好的理解本文，当研究这个库及其开发过程时建议重复所有的操作。这一系列的文章提供了一个契机，当大多数问题的答案已经给出并且项目的所有部分都已经按需求创建之后，以理想的顺序进行思维训练。

### 控件列表

那么，这个库是什么样的呢？这个面向对象编程的代码库的结构是什么样的呢？我们从哪里开始？事实上，前面还有很多问题。让我们定义创建一个便捷的MQL应用所需的控件和元素。每个人都有自己的需求并且想法千差万别。对于某些人，几个按钮和选项框就足够了。另一些人则需要多窗口界面，针对不同的数据类型和控件。

我要提醒读者的是在发布后，本系列文章中的实现的程序能够在 **MetaTrader 4** 和 **MetaTrader 5** 平台中作为产品直接使用。如果我们将其和理想状态进行比较，显然还有提升的空间。当这一系列文章发布之后，我会分享我的想法，关于在MQL中创建图形界面库的理想实现应是什么样的。

库的初始版本将包含下面列表中的界面元素。它们中的一些将以几种方式来实现，并作为单独的代码类给出，其中每一个都为特定的场景而设计。也就是说它们中的一些对某种场景更合适，而另一些则针对其他场景。

- 窗口，可以向其中添加任何顺序的多个控件。
- 带有下拉列表的菜单。
- 文本菜单。
- 状态栏。
- 按钮：
	- 简单的按钮。
		- 带有扩展功能的图标按钮。
		- 带有几个功能的分离按钮。
- 按钮组：
	- 简单按钮组。
		- 电台按钮组。
		- 带有扩展功能的图标按钮组。
- 复选框。
- 旋转编辑栏。
- 带有旋转编辑栏的复选框。
- 滚动条：
	- 垂直滚动条。
		- 水平滚动条。
- 查看列表。
- 带有下拉列表试图的组合框。
- 带有一个下拉列表视图的复选框。
- 带有一个下拉列表组合框和编辑视图。
- 编辑滑块：
	- 单边滑块。
		- 双边滑块。
- 日历：
	- 静态日历。
		- 下拉日历。
- 提示框。
- 进度条。
- 表格：
	- 标签表格。
		- 标记表。
		- 画布表。
- 标签。
- 树形或等级列表视图。

上面列出的列表包含控件，为了实现其功能还包含此列表中的其他元素。例如，在上面的枚举值中，组合框空间包含 **列表试图** 控件，以及 **列表试图** 又包含一个垂直 **滚动条** 。水平和垂直滚动条也包含在所有类型的表中。 **下拉日历** 中包含一个能独立作为控件来使用的 **日历** 控件。在我们定义好项目结构之后将深入考虑创建每个元素。

### 作为基本对象的标准库的基类

我们打算使用标准库中的一些类的代码。它们属于基本的图形元素，是所有控件的组成部分。这些类中的每一个都允许快速创建或删除图形对象，获取或者改变其属性。

图形基本元素的类文件位于：

- MetaTrader 4: *\<Data folder>\\MQL4\\Include\\ChartObjects*
- MetaTrader 5: *\<Data folder>\\MQL5\\Include\\ChartObjects*

文章 [使用标准类库创建你自己的市场窗口](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F37%3B) 给出了一个全面的描述和使用这些类的例子，因此我们不打算详细讨论它们了。让我提醒你一下，这个类组的基类是 [CObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fao%60jgcv) 。类 [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) 从其派生而来。它包含了适用于所有图形对象的常用方法。所有其他类都是从 [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) 类派生而来，包含了管理每一个独立图形对象属性的方法。

属于图形对象的标准类库之间的相互关联结构如下。蓝色箭头代表一个基类和一个派生类之间的关联。

![图 1. 标准类库关联结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-03_%5D1%2Cplg "图 1. 标准类库关联结构。")
![[Pasted image 20260628180700.png]]
图 1. 标准类库关联结构

因为我们要写一个类库，我们将以类似的图表在本文中展示它的结构。为了简洁起见，我们将采用一个精简的版本，如下所示。这就意味着所示图表中的最后一个元素，可以是上图中任何一个（…）图形对象。

![图 2. 标准类库图形对象结构的精简版。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-00_%5D1%2Cplg "图 2. 标准类库图形对象结构的精简版。")
![[Pasted image 20260628180721.png]]
图 2. 标准类库图形对象结构的精简版

要建立图形化界面，我们只需要其中的一些类：

- [CChartObjectRectLabel](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheatpeatna%60en) **—** 矩形标签。
- [CChartObjectEdit](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheatgdkt) **—** 编辑框。
- [CChartObjectLabel](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheatna%60en) **—** 文本标签。
- [CChartObjectBmpLabel](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheat%60mrlcbgl) **—** 位图标签。
- [CChartObjectButton](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-o%60j%5Dcmnvrmlq%2Facjaptmbheat%60uvtmn) **—** 按钮。

它们的共同属性是都和时间无关，也就是说它们不会随着图表的滚动而移动。那么每一个基本元素都需要创建派生类来存储一些经常要引用的属性：

- 坐标。
- 尺寸。
- 从包含其的元素的边缘缩进。
- 当贯标悬停在对象上时聚焦。

这些类还要包含能够获取和保存这些属性的方法。实际上，可以在上层基类的帮助下获取这些属性的值。然而这种方式在考虑资源方面并不是最高效的。

### 带有附加方法的基本对象的衍生类

在 **\<data folder>\\MQL5\\Include** 目录（对于MetaTrader 4: **\<data folder>\\MQL4\\Include** ）下创建一个文件夹命名为 **EasyAndFastGUI** 。我们将把库的所有文件放在这个文件夹下。要找到数据文件夹，在MetaTrader 或者 MetaEditor 的主菜单上选择 **File > Open Data Folder** 。在 **EasyAndFastGUI** 文件夹，用于创建图形界面库的所有文件都将保存在 **Controls** 子文件夹下。然后，在 **Controls** 子文件夹下创建一个文件命名为 **Objects.mqh** 。它将包含之前提到的派生类。

在 **Objects.mqh** 文件的开始部分，包含我们所需要的来自标准库的文件。

```
//+------------------------------------------------------------------+
//|                                                      Objects.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include <ChartObjects\ChartObjectsBmpControls.mqh>
#include <ChartObjects\ChartObjectsTxtControls.mqh>
```

以上所列对象的所有类都是相同类型的，因此，我将只展示它们其中之一的代码。事实上，所有这些方法可以在一行中处理。为了节省文件中的空间，并以最紧凑的形式呈现信息，这样的方法将直接放在类的主体中。

在类的构造函数中对所有变量进行初始化。其中一部分在构造函数初始化列表中（在类的主体之前）进行。实际上这并不重要，因为在整个库的发展过程中，不存在单一的需要考虑派生类和基类的字段（变量）的初始化顺序的情况。这也是为何在类体中所有变量可以被初始化或有些仅仅需要做些注释。

```
//+------------------------------------------------------------------+
//| 带有附加属性的矩形标签对象类                                    
//+------------------------------------------------------------------+
class CRectLabel : public CChartObjectRectLabel
  {
protected:
   int               m_x;
   int               m_y;
   int               m_x2;
   int               m_y2;
   int               m_x_gap;
   int               m_y_gap;
   int               m_x_size;
   int               m_y_size;
   bool              m_mouse_focus;
public:
                     CRectLabel(void);
                    ~CRectLabel(void);
   //--- 坐标
   int               X(void)                      { return(m_x);           }
   void              X(const int x)               { m_x=x;                 }
   int               Y(void)                      { return(m_y);           }
   void              Y(const int y)               { m_y=y;                 }
   int               X2(void)                     { return(m_x+m_x_size);  }
   int               Y2(void)                     { return(m_y+m_y_size);  }
   //--- 从边缘点（xy）侧缩进
   int               XGap(void)                   { return(m_x_gap);       }
   void              XGap(const int x_gap)        { m_x_gap=x_gap;         }
   int               YGap(void)                   { return(m_y_gap);       }
   void              YGap(const int y_gap)        { m_y_gap=y_gap;         }
   //--- 尺寸
   int               XSize(void)                  { return(m_x_size);      }
   void              XSize(const int x_size)      { m_x_size=x_size;       }
   int               YSize(void)                  { return(m_y_size);      }
   void              YSize(const int y_size)      { m_y_size=y_size;       }
   //--- 焦点
   bool              MouseFocus(void)             { return(m_mouse_focus); }
   void              MouseFocus(const bool focus) { m_mouse_focus=focus;   }
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CRectLabel::CRectLabel(void) : m_x(0),
                               m_y(0),
                               m_x2(0),
                               m_y2(0),
                               m_x_gap(0),
                               m_y_gap(0),
                               m_x_size(0),
                               m_y_size(0),
                               m_mouse_focus(false)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       
//+------------------------------------------------------------------+
CRectLabel::~CRectLabel(void)
  {
  }
```

一个文件将包含多个类。为了在它们之间进行快速导航，在标准库包含文件后的文件开始部分，写一段文件内容，即没有类体的类列表。

```
//--- 用于快速导航(Alt+G)的类列表
class CRectLabel;
class CEdit;
class CLabel;
class CBmpLabel;
class CButton;
```

现在，用类似的方式，你可以通过将光标放在列表中的类名上并按下 **Alt+G** 在函数和方法之间移动，就能导航到文件中需要的类。

在先进诶段，此方式可以用下面所示的图表来描述。这里，深蓝色边框的矩形是 **Objects.mqh** 文件，其中包含了（浅蓝色矩形框）上面描述过的类。蓝色框意味着该文件中的所有类都是由 **CChartObject…** 派生而来的，即最后蓝色箭头所指。

![图 3. 为一个原始对象创建派生类来扩展结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-01_%5D1%2Cplg "图 3. 为一个原始对象创建派生类来扩展结构。")
![[Pasted image 20260628180836.png]]
图 3. 为一个原始对象创建派生类来扩展结构

图形元的问题解决了。然后，当它们为一组的时候，即几乎每个控件都将包含几个简单的对象，我们需要决定如何管理这些它们。每个控件都是独立的但是它们都有一个共同的属性集。让我们创建一个名为 **CElement** 的基类，其中包含每一个控件的共有属性集。

### 所有空间的基类

**CElement** 类位于 **Element.mqh** 文件中， **Objects.mqh** 文件通过 [#](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Frrgppoqeqsmr-ilcnufe) [include](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Frrgppoqeqsmr-ilcnufe) 命令将被包含在其中。

```
//+------------------------------------------------------------------+
//|                                                      Element.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Objects.mqh"
//+------------------------------------------------------------------+
//| 控件基类                                                      
//+------------------------------------------------------------------+
class CElement
  {
public:
                     CElement(void);
                    ~CElement(void);
  };
```

为了节省篇幅，我会在类体中以单独分组的方式展示这个类的方法。在文章的结尾，你可以下载到类的完整版本，其中有后面将描述的所有方法。其他类我们也将同样方式来处理。

需要注意的是，在 **Objects.mqh** 文件中的类都不是 **CElement** 的基类，并且也不会被包含在这个类的对象中。后面，它们将被用作从 **CElement** 类派生而来的所有类中的对象，并仅仅作为对象指针数组存储在基类中。当 **Objects.mqh** 文件被包含在 **Element.mqh** 文件中时，我们就无需在任何其他文件中包含它了。因此，我们无需包含两个文件（ **Objects.mqh** 和 **Element.mqh** ），仅需包含 **Element.mqh** 就可以了。

在 **Controls** 文件夹下创建另一个文件，我们将在其中用 [#define](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Frrgppoqeqsmr-cmnqtcnv) 指令定义整个程序所需的一些公共属性：

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//--- 类名
#define CLASS_NAME ::StringSubstr(__FUNCTION__,0,::StringFind(__FUNCTION__,"::"))
//--- 程序名
#define PROGRAM_NAME ::MQLInfoString(MQL_PROGRAM_NAME)
//--- 程序类型
#define PROGRAM_TYPE (ENUM_PROGRAM_TYPE)::MQLInfoInteger(MQL_PROGRAM_TYPE)
//---放置数组大小溢出
#define PREVENTING_OUT_OF_RANGE __FUNCTION__," > Prevention of exceeding the array size."

//--- 字体
#define FONT      ("Calibri")
#define FONT_SIZE (8)
```

请注意上面代码中函数之前的双冒号。它们不是必须要的，没有它们程序也能正确运行。然而在编程中，在系统函数之前用双冒号是一个好习惯。这能够明确此函数是一个系统函数。

在 **Objects.mqh** 文件中包含 **Defines.mqh** ，这样就使得整个文件链都相互包含（ **Defines.mqh** -> **Objects.mqh** -> **Element.mqh** ）：

```
//+------------------------------------------------------------------+
//|                                                      Objects.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Defines.mqh"
#include <ChartObjects\ChartObjectsBmpControls.mqh>
#include <ChartObjects\ChartObjectsTxtControls.mqh>
```

现在我们要定义哪些属性是控件应该具有的公共属性。每一个控件是一个独立的程序模块，它在功能上独立于其他所有类似模块。然而，因为一些控件将以组的形式聚集在一起，在更为复杂（混合）的控件中，控件将向主程序模块和其他控件传送信息。这就可能需要确定消息是否是从我们程序中的一个控件发出的，因为有可能有多个MQL应用在同一个图表上运行。

我们还要确定：

- 控件名称，同类名。
- 程序类型（EA，indicator）。
- 是否是当前隐藏的控件。
- 是否是下拉控件的一部分。
- 是否附着在一组标签上的控件。
- 鼠标的光标是否在控件上。

```
class CElement
  {
protected:
   //--- (1) 类名 (2) 程序 (3) 程序类型
   string            m_class_name;
   string            m_program_name;
   ENUM_PROGRAM_TYPE m_program_type;
   //--- 控件状态
   bool              m_is_visible;
   bool              m_is_dropdown;
   int               m_is_object_tabs;
   //--- 焦点
   bool              m_mouse_focus;
   //---
public:
                     CElement(void);
                    ~CElement(void);
   //--- (1) 获取并设置类名 (2) 获取程序名， 
   //    (3) 获取程序类型
   string            ClassName(void)                    const { return(m_class_name);           }
   void              ClassName(const string class_name)       { m_class_name=class_name;        }
   string            ProgramName(void)                  const { return(m_program_name);         }
   ENUM_PROGRAM_TYPE ProgramType(void)                  const { return(m_program_type);         }
   //--- 控件状态
   void              IsVisible(const bool flag)               { m_is_visible=flag;              }
   bool              IsVisible(void)                    const { return(m_is_visible);           }
   void              IsDropdown(const bool flag)              { m_is_dropdown=flag;             }
   bool              IsDropdown(void)                   const { return(m_is_dropdown);          }
   void              IsObjectTabs(const int index)            { m_is_object_tabs=index;         }
   int               IsObjectTabs(void)                 const { return(m_is_object_tabs);       }
   //--- 焦点
   bool              MouseFocus(void)                   const { return(m_mouse_focus);          }
   void              MouseFocus(const bool focus)             { m_mouse_focus=focus;            }
  };
```

因为有可能在程序界面有多个控件如按钮或复选框，它们各自都应该有其独特的编号或标识 (**id**)。与此同时，如果一个控件元素由其他整个控件数组组成，其中的每一个都必须有索引编号。

```
class CElement
  {
protected:
   //--- 控件的标识和索引
   int               m_id;
   int               m_index;
   //---
public:
   //--- 设置并或获取控件标识
   void              Id(const int id)                         { m_id=id;                      }
   int               Id(void)                           const { return(m_id);                 }
   //---设置并获取控件索引
   void              Index(const int index)                   { m_index=index;                }
   int               Index(void)                        const { return(m_index);              }
  };
```

如前所述，所有的控件图形元素对象都将以这些对象的指针形式存储在 [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) 类型的数组中。为了实现这个目的，我们将需要一个插入对象指针的方法，之后成功创建并赋值给数组。我们还需要 (1) 已知索引的情况下从数组中获取对象指针 (2) 获取对象数组的大小 (3) 清除指针缓存

```
class CElement
  {
protected:
   //--- 此控件中所有对象的公共指针数组
   CChartObject     *m_objects[];
   //---
public:
   //--- 通过指定的索引获取对象指针
   CChartObject     *Object(const int index);
   //--- (1) 获取控件对象数量 (2) 清空对象数组
   int               ObjectsElementTotal(void)          const { return(::ArraySize(m_objects)); }
   void              FreeObjectsArray(void)                   { ::ArrayFree(m_objects);         }
   //---
protected:
   //--- 向共有数组中添加原始对象的指针的方法
   void              AddToArray(CChartObject &object);
  };
//+------------------------------------------------------------------+
//| 通过索引返回控件对象的指针                                    
//+------------------------------------------------------------------+
CChartObject *CElement::Object(const int index)
  {
   int array_size=::ArraySize(m_objects);
//--- 效验对象数组的大小
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > No ("+m_class_name+") objects in this element!");
      return(NULL);
     }
//--- 如果数组大小越界则修正
   int i=(index>=array_size)? array_size-1 : (index<0)? 0 : index;
//--- 返回对象指针
   return(m_objects[i]);
  }
//+------------------------------------------------------------------+
//| 向数组中添加对象指针                                       
//+------------------------------------------------------------------+
void CElement::AddToArray(CChartObject &object)
  {
   int size=ObjectsElementTotal();
   ::ArrayResize(m_objects,size+1);
   m_objects[size]=::GetPointer(object);
  }
```

每个控件都将有自己的事件处理句柄，用于图表事件和它自己的计时器。在 **CElement** 类中，这些方法将是虚拟的，因为每个控件都是独特的无法使之通用。当我们开发一个类时，我们将详细讨论这个问题，它将是所有对象（控件）的容器。下面的方法也将是虚拟的：

- 移动控件。
- 显示控件。
- 隐藏控件。
- 重置。当需要时，所有与控制相关的对象都在不相关的上面。
- 删除所有图形控件对象。
- 设置鼠标左键的优先级值。
- 清除鼠标左键的优先级值。

```
class CElement
  {
public:
   //--- 图表事件句柄
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam) {}
   //--- 计时器
   virtual void      OnEventTimer(void) {}
   //--- 移动控件
   virtual void      Moving(const int x,const int y) {}
   //--- (1) 显示， (2) 隐藏， (3) 重置， (4) 删除
   virtual void      Show(void) {}
   virtual void      Hide(void) {}
   virtual void      Reset(void) {}
   virtual void      Delete(void) {}
   //--- (1) 设置， (2) 按鼠标左键重置属性
   virtual void      SetZorders(void) {}
   virtual void      ResetZorders(void) {}
  };
```

你已经看到 **Objects.mqh** 文件中的图形基类和 **CElement** 中的类，都有允许我们获取对象边界的属性和方法。因此，就能够知道鼠标指针是否在控件区域内以及是否在一个或其他基本对象上。我们为何要知道这个？这将使我们程序的图形界面对用户来说非常直观。

当光标在一个界面元素之上时，它的背景颜色或者边框会改变，预示界面的这个元素可以被点击，即将响应鼠标的操作。要在 **CElement** 类中实现此功能，我们需要处理颜色的一些方法。颜色数组将被定义在它们中的一个之中，并且只有两个颜色将被传递给此方法。在此方法中计算颜色的变化。对每个对象的计算只会发生一次，发生在将对象附着到图表上的时刻。在第二个方法中，处理颜色仅使用已经定义的颜色数组，这样会大大节省资源。

你可以创建一个梯度计算方法，但我们打算使用现成的代码类，可以从 [Code Base中下载](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-cmdg%2F%3A8%3A) 。本项目的其他类将使用Code Base中的许多方法。 [Dmitry Fedoseev](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-uqeps-iltgggr) 在代码库中提供了处理颜色的类 ([IncColors](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-cmdg%2F%3A8%3A)) ，但我建议使用由我略微修改过的版本。可以在本文的结尾处下载 (**Colors.mqh**)。

(**CColors**) 有应用于所有场景的众多方法。我所作的唯一改变是，添加了当方法名在类体内且方法本身在类体外时，快速导航的可能性。这将使你能够快速高效的找到所需的方法，并在方法和方法体之间通过 **Alt+G** 键切换。文件应位于 **EasyAndFastGUI** 文件夹下。我们将在将通过**..\\EasyAndFastGUI\\Controls** 目录下的 **Element.mqh** 文件把它包含到我们的界面库中。因为这个文件将位于上一层的目录中，必须使用下面的方式来将其包含进去：

```
//+------------------------------------------------------------------+
//|                                                      Element.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Objects.mqh"
#include "..\Colors.mqh"
```

将 **CColors** 类的对象包含到 **CElement** 类中，然后 (1) 添加一个变量和方法来确定渐变色的颜色数量 (2)初始化渐变色数组的方法以及改变特定对象的颜色：

```
class CElement
  {
protected:
   //--- 处理颜色的类的实例
   CColors           m_clr;
   //--- 渐变色数量
   int               m_gradient_colors_total;
   //---
public:
   //--- 设置渐变尺寸
   void              GradientColorsTotal(const int total)     { m_gradient_colors_total=total;  }
   //---
protected:
   //--- 初始化渐变色数组
   void              InitColorArray(const color outer_color,const color hover_color,color &color_array[]);
   //--- 改变对象颜色
   void              ChangeObjectColor(const string name,const bool mouse_focus,const ENUM_OBJECT_PROPERTY_INTEGER property,
                                       const color outer_color,const color hover_color,const color &color_array[]);
  };
```

要初始化渐变色数组，使用 **CColors** 类中的 **Gradient** () 方法 。一下应作为参数传递到此方法中：(1) 用于计算渐变色的颜色数组， (2) 将保存渐变色序列的数组 (3) 数组大小，即渐变色的数量。

```
//+------------------------------------------------------------------+
//| 初始化渐变色数组                                          
//+------------------------------------------------------------------+
void CElement::InitColorArray(const color outer_color,const color hover_color,color &color_array[])
  {
//--- 渐变色数组
   color colors[2];
   colors[0]=outer_color;
   colors[1]=hover_color;
//--- 构造颜色数组
   m_clr.Gradient(colors,color_array,m_gradient_colors_total);
  }
```

在改变对象颜色的方法的中需要确定参数：

- 对象名称。
- 鼠标的光标是否在控件上。
- 对象的哪一部分颜色需要改变（例如：背景色，边框色等）。
- 由于渐变色由两个颜色组成，那么这些颜色应该作为2个参数传入。
- 渐变色数组在 **InitColorArray** () 函数中形成。

请在下面的 **ChangeObjectColor** () 方法中查看更多的注释：

```
//+------------------------------------------------------------------+
//| 当鼠标悬停在对象上时改变对象的颜色                        
//+------------------------------------------------------------------+
void CElement::ChangeObjectColor(const string name,const bool mouse_focus,const ENUM_OBJECT_PROPERTY_INTEGER property,
                                 const color outer_color,const color hover_color,const color &color_array[])
  {
   if(::ArraySize(color_array)<1)
      return;
//--- 获取当前对象颜色
   color current_color=(color)::ObjectGetInteger(m_chart_id,name,property);
//--- 如果光标在对象上
   if(mouse_focus)
     {
      //--- 离开，如果指定的颜色已经实现
      if(current_color==hover_color)
         return;
      //--- 从第一个移动到最后一个
      for(int i=0; i<m_gradient_colors_total; i++)
        {
         //--- 如果颜色不匹配，移动到下一个
         if(color_array[i]!=current_color)
            continue;
         //---
         color new_color=(i+1==m_gradient_colors_total)? color_array[i] : color_array[i+1];
         //--- 改变颜色
         ::ObjectSetInteger(m_chart_id,name,property,new_color);
         break;
        }
     }
//--- 如果光标不在对象范围内
   else
     {
      //--- 离开，如果指定的颜色已经实现
      if(current_color==outer_color)
         return;
      //--- 从最后移到最前
      for(int i=m_gradient_colors_total-1; i>=0; i--)
        {
         //--- 如果颜色不匹配，移动到下一个
         if(color_array[i]!=current_color)
            continue;
         //---
         color new_color=(i-1<0)? color_array[i] : color_array[i-1];
         //--- 改变颜色
         ::ObjectSetInteger(m_chart_id,name,property,new_color);
         break;
        }
     }
  }
```

所有控件的其他公共属性是对象锚点和图表角落。

```
class CElement
  {
protected:
   //--- 图表角落和对象锚点
   ENUM_BASE_CORNER  m_corner;
   ENUM_ANCHOR_POINT m_anchor;
  }
```

我们完成了 **CElement** 类的创建。在本文的最后你可以下载这个类的完成代码。目前，库结构看起来如下图所示。我们假设，黄色箭头代表文件被包含。如果它含有一个类，后者将不是那些被包含文件中类的基类。它将被作为类中的对象，如上面介绍的 **CElement** 和 **CColors** 一样。

![图 4. 包含CColors类来处理颜色。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-06_%5D1%2Cplg "图 4. 包含CColors类来处理颜色。")
![[Pasted image 20260628180945.png]]
图 4. CElement 控件的基类

### 带有图形界面的应用程序的基类

在我们开始创建接口元素之前，我们必须定义如何实现对象之间如何交互。方案必须能做到可以从一个类中访问每一个对象，这个类中不仅仅存储对象还对对象进行分类。因此，不仅可以找出有多少以及是什么对象在这个容器中，还可以对他们进行管理。

将所有功能都放在一个类中实现不是很方便，因为这样会导致类十分冗长。这样的类（对象）称为God对象，这有违面向对象编程模式的思想，因为一个类实现过多的任务。随着项目结构的增长，将很难再引入附加功能或变化。因此，对象将和类分开，存储在处理事件的地方。对象将被包含在基类 **CWndContainer** 中，事件将在从其派生而来的 **CWndEvents** 类中进行处理。

现在让我们创建 **CWndContainer** 和 **CWndEvents** 类。当我们创建了所有本文开始部分列出的控件之后，就要用所需的功能来填充这些类。现在，我们打算确定此项目的一般结构。

在 **Controls** 文件夹下，创建文件 **WndContainer.mqh** 和 **WndEvents.mqh** 。 **CWndContainer** 类将是空的因为我们还没有创建任何控件。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//+------------------------------------------------------------------+
//| 存储所有界面对象的类                                           
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
                     CWndContainer(void);
                    ~CWndContainer(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CWndContainer::CWndContainer(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       
//+------------------------------------------------------------------+
CWndContainer::~CWndContainer(void)
  {
  }
//+------------------------------------------------------------------+
```

**WndContainer.mqh** 必须被包含到 **WndEvents.mqh** 文件中，因为 **CWndEvents** 类派生自 **CWndContainer** 类：

```
//+------------------------------------------------------------------+
//|                                                    WndEvents.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "WndContainer.mqh"
//+------------------------------------------------------------------+
//| 事件处理类                                                 
//+------------------------------------------------------------------+
class CWndEvents : public CWndContainer
  {
protected:
                     CWndEvents(void);
                    ~CWndEvents(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CWndEvents::CWndEvents(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       
//+------------------------------------------------------------------+
CWndEvents::~CWndEvents(void)
  {
  }
//+------------------------------------------------------------------+
```

类 **CWndContainer** 和 **CWndEvents** 将是需要图形界面的MQL应用的基类。

为了进一步在开发过程中对这个库进行测试，我们将创建一个EA。它必须在一个独立的文件夹下创建，因为除了主程序文件之外，还有含有我们程序(**CProgram**)的包含文件 **Program.mqh** 。此类派生自 **CWndEvents** 类。

```
//+------------------------------------------------------------------+
//|                                                      Program.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include <EasyAndFastGUI\Controls\WndEvents.mqh>
//+------------------------------------------------------------------+
//| 创建交易面板的类                                      
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
public:
                     CProgram(void);
                    ~CProgram(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      
//+------------------------------------------------------------------+
CProgram::CProgram(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       
//+------------------------------------------------------------------+
CProgram::~CProgram(void)
  {
  }
//+------------------------------------------------------------------+
```

我们需要事件处理方法，随后它将在主程序中被调用，即在MQL应用程序事件的主函数中：

```
class CProgram : public CWndEvents
  {
public:
   //--- 初始化/反初始化
   void              OnInitEvent(void);
   void              OnDeinitEvent(const int reason);
   //--- 计时器
   void              OnTimerEvent(void);
   //---
protected:
   //--- 图表的虚拟事件处理程序
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
  };
```

图表的计时器和事件句柄也必须在上一层的基类 **CWndEvents** 中创建：

```
class CWndEvents : public CWndContainer
  {
protected:
   //--- 计时器
   void              OnTimerEvent(void);
   //--- 图表的虚拟事件处理程序
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam) {}
  };
```

请注意上面的代码，在基类 **CWndEvents** 和派生类 **CProgram** 中， **OnEvent** 被声明为 [virtual](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fmor%2Ftiptwan) 。也就是说，在 **CWndEvents** 类中这个方法是空的“{}”。这将允许我们在需要时从基类到派生类指定事件处理流。这些类中的虚拟方法 **OnEvent** () 供类内部使用。要从主程序文件中调用，将使用 **CWndEvents** 类中的另一个方法。我们称其为 **ChartEvent** ()。我们也将为每个类型的主要事件创建辅助方法，这将使得代码更为清晰可读。

除了含有检查自定义事件的辅助函数外，还需要在控件中检查事件的方法。我们将之命名为 **CheckElementsEvents** ()。下面用绿色高亮显示：

```
class CWndEvents : public CWndContainer
  {
public:
   //--- 图表事件处理程序
   void              ChartEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //---
private:
   void              ChartEventCustom(void);
   void              ChartEventClick(void);
   void              ChartEventMouseMove(void);
   void              ChartEventObjectClick(void);
   void              ChartEventEndEdit(void);
   void              ChartEventChartChange(void);
   //--- 在控件中检查事件
   void              CheckElementsEvents(void);
  };
```

辅助方法将仅在 **CWndEvents** 类的 **ChartEvent** () 方法中被使用。为了避免给它们传递相同的参数，让我们以类成员的形式创建类似的变量以及一个初始化它们的方法，此方法将在 **ChartEvent** () 方法的一开始就被调用。它们位于私有 (**private**)块中，因为仅在这个类中被使用。

```
class CWndEvents : public CWndContainer
  {
private:
   //---  事件参数
   int               m_id;
   long              m_lparam;
   double            m_dparam;
   string            m_sparam;
   //--- 初始化事件参数
   void              InitChartEventsParams(const int id,const long lparam,const double dparam,const string sparam);
  };
//+------------------------------------------------------------------+
//| 初始化事件变量                                      
//+------------------------------------------------------------------+
void CWndEvents::InitChartEventsParams(const int id,const long lparam,const double dparam,const string sparam)
  {
   m_id     =id;
   m_lparam =lparam;
   m_dparam =dparam;
   m_sparam =sparam;
  }
```

现在，在主程序文件中， (1) 包含含有 **CProgram** 类的文件， (2) 创建它的实例，并且(3) 将其同主函数连接起来：

```
//+------------------------------------------------------------------+
//|                                                  TestLibrary.mq5 |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "2015, MetaQuotes Software Corp."
#property link      "http://www.mql5.com"
//--- 包含交易面板类
#include "Program.mqh"
CProgram program;
//+------------------------------------------------------------------+
//| EA初始化函数                                                 
//+------------------------------------------------------------------+
int OnInit(void)
  {
   program.OnInitEvent();
//--- 初始化成功
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| EA反初始化函数                                               
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
   program.OnDeinitEvent(reason);
  }
//+------------------------------------------------------------------+
//| EA的ontick函数                                          
//+------------------------------------------------------------------+
void OnTick(void)
  {
  }
//+------------------------------------------------------------------+
//|  计时器函数                                                        
//+------------------------------------------------------------------+
void OnTimer(void)
  {
   program.OnTimerEvent();
  }
//+------------------------------------------------------------------+
//| 交易函数                                                   
//+------------------------------------------------------------------+
void OnTrade(void)
  {
  }
//+------------------------------------------------------------------+
//| ChartEvent函数                                                    |
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

如果需要，其他事件处理程序的方法 [OnTick](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnviak) ()， [OnTrade](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnvrcdg) ()等也可以在 **CProgram** 类中进行创建。

### 程序库和程序类的事件句柄测试

之前提到的 **CProgram** 类的虚拟方法 **OnEvent** () 可以通过 **ChartEvent** ()方法中的基类 **CWndEvents** 进行调用。我们想要确保可以正确运行，现在让我们测试一下。在 **CWndEvents::ChartEvent** () 方法中调用 **CProgram::OnEvent** () 的方法如下所示：

```
//+------------------------------------------------------------------+
//| 程序处理事件                                                    
//+------------------------------------------------------------------+
void CWndEvents::ChartEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   OnEvent(id,lparam,dparam,sparam);
  }
```

然后，在 **CProgram::OnEvent** ()方法中写入如下代码：

```
//+------------------------------------------------------------------+
//| 事件处理程序                                              
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_CLICK)
     {
      ::Comment("x: ",lparam,"; y: ",(int)dparam);
     }
  }
```

编译文件并将EA加载到图表上。如果你按下鼠标左键，释放鼠标按键时刻的光标坐标将显示在左上角。测试结束之后，最后两个代码中的高亮部分可以从 **CWndEvents::ChartEvent** () 和 **CProgram::OnEvent** () 方法中删除。

### 总结

作为总结，让我们在一个图表中展现出我们所要所的一切。

![图. 5. 包含到本项目中的，用于存储指针和事件处理函数的类。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-07_%5D1%2Cplg "图. 5. 包含到本项目中的，用于存储指针和事件处理函数的类。")
![[Pasted image 20260628181023.png]]
图. 5. 包含到本项目中的，用于存储指针和事件处理函数的类

昂前方案由两个相互独立的部分组成。要将它们结合起来，首先，需要创建用户界面的主元素。主元素是表格或者 **窗口** ，在其中所有其他控件将被结合起来。因此，我们打算写一个这样的类，称为 **CWindow** 。将 **CElement** 类作为 **CWindow** 类的基类，把文件 **Element.mqh** 类同文件 **Window.mqh** 连接起来。

你可以从第一部分（Part I）找到相关资料并测试它是如何运作的。如果你对使用这些文件有任何疑问，你可以在下面列表中的文章中查详细的类库开发说明，或者你可以在本文的评论部分发问。

**第一部分的文章（章节）列表：**

- [图形界面 I：库结构（第一章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I：控件构成（第二章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I：充实图形界面（第三章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I：创建按钮及删除界面元素的函数（第四章）](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- 图形界面 I：在MetaTrader 4 终端中用不同类型的程序测试界面库（第五章）

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2125](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0105)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2327.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2327%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (51.67 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2327%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (51.59 KB)

---

## 关联笔记

- **编译版**：（内部笔记，未公开）— 知识库精华版（含架构分析、继承树）
- **系列后续**：[[MQL图形界面II-菜单系统]] | [[MQL图形界面III-按钮系统]] | [[MQL图形界面IV-信息元件与多窗口]] | ...
- **同类库**：[[2 Areas/量化交易/知识库/EasyAndFastGUI图形界面库]]

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)