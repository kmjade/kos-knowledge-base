---
title: "图形界面 II: 分隔线和上下文菜单元件 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-09T12:31:00+00:00Z
created: 2026-06-28
description: "在本文中, 我们将会创建分隔线元件. 它可以用作独立的界面元件, 也可以作为许多其他元件的一部分. 之后, 我们就拥有了开发上下文菜单的全部所需, 在本文中会加以详细介绍. 另外, 我们还会对类作必要的扩充, 即用于保存应用程序中图形界面所有元件的指针库."
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_22)
- [开发创建分隔线的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_23)
- [测试附加的分隔线](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_24)
- [开发创建上下文菜单的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_25)
- [测试附加的上下文菜单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_26)
- [进一步开发存储所有元件指针的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_27)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_28)

### 简介

第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细考虑了库的目标. 文章链接的完整列表在系列文章每章的最后. 在那里您还可以下载当前开发阶段的库的完整版本. 文件在目录中的位置必须和在档案中相同.

在前面的一章中, 我们写了一个创建菜单项的类. 它既可以用作独立控件也可以作为上下文菜单和主菜单的一部分. 在本文中, 我们将描述分隔线元件的创建, 它也可以不仅作为独立界面元件, 还可以是其他元件的一部分. 之后, 我们就万事俱备, 可以开发上下文菜单类了, 我们会在文章中详细讨论. 另外, 我们还会对类作必要的扩充, 即用于保存应用程序中图形界面所有元件的指针库.

### 开发创建分隔线的类

在一个上下文菜单中, 除了不同的菜单项类型, 我们经常那个可以看到一个或者多个界面元件 - 分隔线. 这个元件不仅能在上下文菜单中遇到. 例如, 在 **MetaTrader** 交易终端的状态栏和 **MetaEditor** 代码编辑器中都有垂直的分隔线. 这也是为什么我们将为这个对象创建一个独立的类, 这样它就可以在任何其他控件中作为独立的图形界面元件来使用了.

为了给予一种立体的错觉, 分隔线至少包括两个部分. 如果一条线颜色比背景色浅, 另外一条深一些, 这会产生一种平面上沟槽的视觉效果. 有两种方法来创建分隔线: (1) 使用两个 **CRectLabel** 类型的基本对象, 它们在 **Objects.mqh** 文件中已经有了, 或者 (2) 创建一个 [OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl) 类型的对象, 然后使用它作为画布在上面绘图. 让我们使用第二种方法. 标准库建议使用 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类来绘图. 这个类中已经有了用于绘制简单几何图形所需的方法, 它们会大幅简化设计的实现并将节约我们很多的时间.

**CCanvas** 类需要使用某种方式嵌入其中, 这样才能如那些已经在 **Objects.mqh** 文件中的基本对象那样使用. 通过使得 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类继承于 **CChartObjectBmpLabel** 类, 就能简单做到这一点. 需要对 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类的代码做一点小的改动, 这样晚些时候在编译程序时就不会有错误或者警告了. 这是因为在 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类和 **CChartObject** 类中都有 **m\_chart\_id** 栏位(变量). 后者是 **CChartObjectBmpLabel** 类的基类. 结果, 编译器会报警告, 说明这样名称的变量已经存在:

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-05_gn%5D_3.rne)
![[Pasted image 20260628211008.png]]
图 1. 编译器警告

在实际使用中, 这样的警告不会造成严重错误, 编译会忽略这个问题而继续进行. 然而我们还是推荐避免这种情况, 因为它对我们程序的运行可能有潜在未知的影响. 让我们把它作为一条规则并遵守. 另外, 还需要对 **Canvas.mqh** 文件进行修改是因为 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类必须派生于 **CChartObjectBmpLabel** 类. 这样我们就能够轻易解决出现的警告. 我们只需要把 **m\_chart\_id** 变量从 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类中删除. 修改标准库中的类, 必须要注意的是下一次终端更新的时候, 可能会更新标准库的文件, 现在的修改可能会被清除. 所以, 因为我们无法不改动 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类就达到我们的目标, 所以要复制一份并把它放到我们库文件所在的目录中.

在 **Include** 文件夹下创建Canvas文件夹. 复制 [СCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类所在的文件并把它重命名为 **CustomCanvas.mqh** 并把类的名字改为 **CCustomCanvas**. 在 **CustomCanvas.mqh** 文件中包含标准库的 **ChartObjectsBmpControls.mqh** 文件, 并使 **CCustomCanvas** 类继承于 **CChartObjectBmpLabel** 类. 然后从 **CCustomCanvas** 类中和构造函数中删除 **m\_chart\_id** 变量.

```
//+------------------------------------------------------------------+
//|                                                 CustomCanvas.mqh |
//|                   Copyright 2009-2013, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include <Files\FileBin.mqh>
#include <Controls\Rect.mqh>
#include <ChartObjects\ChartObjectsBmpControls.mqh>

//...

//+------------------------------------------------------------------+
//| Class CCustomCanvas                                              |
//| 用途: 用于操作动态资源的类                 |
//+------------------------------------------------------------------+
class CCustomCanvas : public CChartObjectBmpLabel
  {
//...
```

现在, 在 **Objects.mqh** 文件中包含 **CustomCanvas.mqh** 文件:

```
//+------------------------------------------------------------------+
//|                                                      Objects.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Enums.mqh"
#include "Defines.mqh"
#include "..\Canvas\CustomCanvas.mqh"
#include <ChartObjects\ChartObjectsBmpControls.mqh>
#include <ChartObjects\ChartObjectsTxtControls.mqh>
```

然后, 让我们创建 **CRectCanvas** 类, 它必须是 **CCustomCanvas** 类的派生类. **CRectCanvas** 类和其他的类一样, 也是位于 **Objects.mqh** 文件中. 它们的内容在前一篇文章中介绍过. 现在, 它可以用于绘制其他界面元件了, 它们是我们正在开发的界面库的一部分.

对于 **CSeparateLine** 类的开发已经万事俱备, 可以准备创建分隔线了. 在 **Controls** 文件夹下创建 **SeparateLine.mqh** 文件. 在其中包含 **Element.mqh** 和 **Window.mqh** 文件. 然后, 按照以下步骤顺序进行:

1) 创建 **CSeparateLine** 类;

2) 在这个类中, 声明一个指向元件将要附加的表单的指针, 然后创建一个方法来保存指针;

3) 创建一个 **CRectCanvas** 类的实例;

4) 声明和实现所有元件中共有的用于管理元件的标准虚方法.

```
//+------------------------------------------------------------------+
//|                                                 SeparateLine.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 创建分隔线的类                             |
//+------------------------------------------------------------------+
class CSeparateLine : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //--- 用于创建分隔线的对象
   CRectCanvas       m_canvas;
   //---
public:
                     CSeparateLine(void);
                    ~CSeparateLine(void);
   //--- 保存传来的指针
   void              WindowPointer(CWindow &object) { m_wnd=::GetPointer(object); }
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
//| 构造函数                                                      |
//+------------------------------------------------------------------+
CSeparateLine::CSeparateLine(void)
  {
//--- 在基类中保存元件类的名称  
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       |
//+------------------------------------------------------------------+
CSeparateLine::~CSeparateLine(void)
  {
  }
//+------------------------------------------------------------------+
```

为了设置分隔线的外观, 让我们创建三个方法. 这些方法将用于设置:

- 分隔线的类型: (1) 水平方向, (2) 垂直方向.
- 深色部分的颜色.
- 浅色部分的颜色.

用于设定类型的枚举需要加到 **Enums.mqh** 文件中:

```
//+------------------------------------------------------------------+
//| 分隔线类型的枚举                         |
//+------------------------------------------------------------------+
enum ENUM_TYPE_SEP_LINE
  {
   H_SEP_LINE =0,
   V_SEP_LINE =1
  };
```

现在, 我们可以在 **CSeparateLine** 类中加入相应的变量和方法了, 并且在构造函数中使用默认值进行初始化:

```
class CSeparateLine : public CElement
  {
private:
   //--- 属性
   ENUM_TYPE_SEP_LINE m_type_sep_line;   
   color             m_dark_color;
   color             m_light_color;
   //---
public:
   //--- (1) 线的类型, (2) 线的颜色
   void              TypeSepLine(const ENUM_TYPE_SEP_LINE type) { m_type_sep_line=type; }
   void              DarkColor(const color clr)                 { m_dark_color=clr;     }
   void              LightColor(const color clr)                { m_light_color=clr;    }
   //---
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      |
//+------------------------------------------------------------------+
CSeparateLine::CSeparateLine(void) : m_type_sep_line(H_SEP_LINE),
                                     m_dark_color(clrBlack),
                                     m_light_color(clrDimGray)
  {
  }
```

我们只需要加入用于创建元件和在画布上绘制分隔线的方法. 在自定义应用程序中调用时, 必须在用于创建元件的 **公有** 方法 **CreateSeparateLine** () 中传入以下参数:

- 图表 id;
- 图表窗口编号number of the chart window;
- 线的索引编号. 这个参数在以下情况下是必要的: 在上下文菜单中或者其他界面元件中需要在循环中创建多个分隔线. 在这种情况下, 只有元件 id 是不够的, 无法创建图形对象的唯一名称;
- 坐标;
- 大小.

```
class CSeparateLine : public CElement
  {
public:
   //--- 创建分隔线
   bool              CreateSeparateLine(const long chart_id,const int subwin,const int index,
                                        const int x,const int y,const int x_size,const int y_size);
   //---
private:
   //--- 创建用于绘制分隔线的画布
   bool              CreateSepLine(void);
   //--- 绘制分隔线
   void              DrawSeparateLine(void);
   //---
  };
```

**CreateSeparateLine** () 方法的代码和其它类似方法没有本质上的差别(例如, **CMenuItem** 类), 所以我们下面看 **CreateSepLine** () 方法的代码.

和这个类型的所有其他方法类似, 开始要设置图形对象的名称. 然后创建我们将要绘制的图形对象(画布). 需要注意的是, 创建对象的类型是 [OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl), 使用的是 **CCustomCavas** 类中的 **CreateBitmapLabel** () 方法. 在这个类中, 当对象被创建时, 并没有把对象附加到图表中, 不像 **CChartObjectBmpLabel** 类中那样, 在创建完对象后直接调用基类的 [CChartObject::Attach](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv%2Facjaptmbheatctvaah) () 方法. 我们必须自己管理这个任务. 因为 **CCustomCanvas** 类是派生于 **CChartObjectBmpLabel** 的, 我们可以访问基类的 [CChartObject::Attach](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv%2Facjaptmbheatctvaah) () 方法. 如果对象没有附加到图表, 就不可能对其进行管理.

在对象被创建之后, 把它附加到图标中并设置相关属性, 就可以使用 **DrawSeparateLine** ()方法在我们的自定义画布上绘制分隔线了. 这个过程显示在以下代码中. 然后对象的指针保存在基类的 **CElement** 数组中.

```
//+------------------------------------------------------------------+
//| 创建用于绘制分隔线的画布                   |
//+------------------------------------------------------------------+
bool CSeparateLine::CreateSepLine(void)
  {
//--- 构造对象名称  
   string name=CElement::ProgramName()+"_separate_line_"+(string)CElement::Index()+"__"+(string)CElement::Id();
//--- Creating an object
   if(!m_canvas.CreateBitmapLabel(m_chart_id,m_subwin,name,m_x,m_y,m_x_size,m_y_size,COLOR_FORMAT_ARGB_NORMALIZE))
      return(false);
//--- Attaching to the chart
   if(!m_canvas.Attach(m_chart_id,name,m_subwin,1))
      return(false);
//--- 属性
   m_canvas.Background(false);
//--- 到边缘的距离
   m_canvas.XGap(m_x-m_wnd.X());
   m_canvas.YGap(m_y-m_wnd.Y());
//--- 绘制分隔线
   DrawSeparateLine();
//--- 加到数组中
   CElement::AddToArray(m_canvas);
   return(true);
  }
```

**DrawSeparateLine** () 方法的代码很简单. 首先, 取得画布的大小. 然后使用 **CCustomCanvas::Erase** () 方法清空画布. 进而根据是要画水平线还是垂直线, 程序会转向对应的代码模块. 我们将构造一条水平分隔线作为实例. 首先, 定义两个点的坐标, 然后在画布的上面部分画第一条线. 第二条线的坐标是在画布的下半部分. 如果画布的高度是两个像素, 那么线相互之间的距离将非常接近. 通过把画布高度设为高于两个像素点, 您可以在上下两线之间留出一定的距离. 为了显示出变化, 需要在方法的最后使用 **CCustomCanvas::Update** () 方法来刷新画布.

```
//+------------------------------------------------------------------+
//|  绘制分隔线                                         |
//+------------------------------------------------------------------+
void CSeparateLine::DrawSeparateLine(void)
  {
//--- 线的坐标
   int x1=0,x2=0,y1=0,y2=0;
//--- 画布大小
   int   x_size =m_canvas.X_Size()-1;
   int   y_size =m_canvas.Y_Size()-1;
//--- 清空画布
   m_canvas.Erase(::ColorToARGB(clrNONE,0));
//--- 如果是水平线
   if(m_type_sep_line==H_SEP_LINE)
     {
      //--- 上方的深色线
      x1=0;
      y1=0;
      x2=x_size;
      y2=0;
      //---
      m_canvas.Line(x1,y1,x2,y2,::ColorToARGB(m_dark_color));
      //--- 下方的浅色线
      x1=0;
      x2=x_size;
      y1=y_size;
      y2=y_size;
      //---
      m_canvas.Line(x1,y1,x2,y2,::ColorToARGB(m_light_color));
     }
//--- 如果是垂直线
   else
     {
      //--- 左边的神色线
      x1=0;
      x2=0;
      y1=0;
      y2=y_size;
      //---
      m_canvas.Line(x1,y1,x2,y2,::ColorToARGB(m_dark_color));
      //--- 右边的浅色线
      x1=x_size;
      y1=0;
      x2=x_size;
      y2=y_size;
      //---
      m_canvas.Line(x1,y1,x2,y2,::ColorToARGB(m_light_color));
     }
//--- 刷新画布
   m_canvas.Update();
  }
```

### 测试附加的分隔线

现在, 我们可以进行测试了. 在前面一篇文章中, 我们把一个菜单项附加到表单中. 根据同样的原则, 分隔线可以作为独立的界面元件来附加.

我将简要提醒您把元件附加到表单的过程.

- 如果元件类还没有在库中, 它的文件需要包含在 **WndContainer.mqh** 文件中.
- 因为应用程序的自定义类 (在我们的实例中是 **CProgram**) 必须从 **CWndContainer** -> **CWndEvents** 派生, 所以在包含了元件文件之后, 就可以创建元件类的实例和使用它的方法了.
- 然后, 在图形界面程序创建的方法中调用创建元件的方法.

如果一切操作正确, 在编译程序并把它载入图表之后, 结果应如下显示:

![图 2. 分隔线元件的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-0%3A_niehv.rne "图 2. 分隔线元件的测试.")
![[Pasted image 20260628211205.png]]
图 2. 分隔线元件的测试.

**CSeparateLine** 类的开发结束了, 我们开始开发创建上下文菜单所需都已具备.

### 开发创建上下文菜单的类

之前, 在库的开发过程中, 创建了三个界面元件: (1) 控件表单 (**CWindow**), (2) 菜单项控件 (**CMenuItem**) 以及 (3) 分隔线元件 (**CSeparateLine**). 它们中的每一个都属于简单类型的元件, 因为它们只是由基本对象构成. 上下文菜单则归类为复杂(组合)类型的控件. 它不仅由基本对象构成, 还包含其它元件. 这些元件的基类是 **CElement**.

在我们库的 **Controls** 目录中创建 **ContextMenu.mqh** 文件. 在这个文件中包含用于创建上下文菜单的文件:

```
//+------------------------------------------------------------------+
//|                                                  ContextMenu.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "MenuItem.mqh"
#include "SeparateLine.mqh"
```

然后, 创建 **CContextMenu** 类, 其中包含所有库元件共有的标准虚方法集合, 表单指针以及用于保存它的方法. 我们需要一个 [OBJ\_RECTANGLE\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_peatcnelg_na%60en) 类型的对象作为元件的背景. 所以我们需要使用 **Object.mqh** 文件中的 **CRectLabel** 类来创建这个对象. 代表菜单项的 **CMenuItem** 类是在前面的文章中创建的. 因为上下文菜单通常含有多个CMenuItem类的对象, 并且数量在开始时还不知道, 所以对于这个类的实例需要声明一个动态数组. 对于上下文菜单中的分隔线 (**CSeparateLine**) 也会使用同样的原则.

```
//+------------------------------------------------------------------+
//| 用于创建上下文菜单的类                                |
//+------------------------------------------------------------------+
class CContextMenu : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //--- 用于创建菜单项的对象
   CRectLabel        m_area;
   CMenuItem         m_items[];
   CSeparateLine     m_sep_line[];
   //---
public:
                     CContextMenu(void);
                    ~CContextMenu(void);
   //--- 保存传来的指针
   void              WindowPointer(CWindow &object) { m_wnd=::GetPointer(object); }

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
   //--- (1) 设置, (2) 重置鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      |
//+------------------------------------------------------------------+
CContextMenu::CContextMenu(void)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 上下文菜单是一种下拉元件
   CElement::m_is_dropdown=true;
  }
//+------------------------------------------------------------------+
//| 析构函数                                                       |
//+------------------------------------------------------------------+
CContextMenu::~CContextMenu(void)
  {
  }
//+------------------------------------------------------------------+
```

为了设置上下文菜单的外观, 需要对应的栏位和方法为:

```
class CContextMenu : public CElement
  {
private:
   //--- 背景属性
   int               m_area_zorder;
   color             m_area_color;
   color             m_area_border_color;
   color             m_area_color_hover;
   color             m_area_color_array[];
   //--- 菜单项属性
   int               m_item_y_size;
   color             m_item_back_color;
   color             m_item_border_color;
   color             m_item_back_color_hover;
   color             m_item_back_color_hover_off;
   color             m_label_color;
   color             m_label_color_hover;
   string            m_right_arrow_file_on;
   string            m_right_arrow_file_off;
   //--- 分隔线属性
   color             m_sepline_dark_color;
   color             m_sepline_light_color;
   //---
public:
   //--- 菜单项数量
   int               ItemsTotal(void)                         const { return(::ArraySize(m_items));         }
   //--- 用于设置上下文菜单外观的方法:
   //    上下文菜单背景颜色
   void              MenuBackColor(const color clr)                 { m_area_color=clr;                     }
   void              MenuBorderColor(const color clr)               { m_area_border_color=clr;              }
   //--- (1) 高度, (2) 背景色 and (3) 菜单项边框颜色 
   void              ItemYSize(const int y_size)                    { m_item_y_size=y_size;                 }
   void              ItemBackColor(const color clr)                 { m_item_back_color=clr;                }
   void              ItemBorderColor(const color clr)               { m_item_border_color=clr;              }
   //--- 当鼠标掠过菜单项时的背景色 (1) 可用状态 (2) 禁用状态
   void              ItemBackColorHover(const color clr)            { m_item_back_color_hover=clr;          }
   void              ItemBackColorHoverOff(const color clr)         { m_item_back_color_hover_off=clr;      }
   //--- (1) 标准 (2) 有焦点时 的文字颜色 
   void              LabelColor(const color clr)                    { m_label_color=clr;                    }
   void              LabelColorHover(const color clr)               { m_label_color_hover=clr;              }
   //--- 指示菜单项有上下文菜单时的图标
   void              RightArrowFileOn(const string file_path)       { m_right_arrow_file_on=file_path;      }
   void              RightArrowFileOff(const string file_path)      { m_right_arrow_file_off=file_path;     }
   //--- 分隔线的 (1) 深色 和 (2) 浅色
   void              SeparateLineDarkColor(const color clr)         { m_sepline_dark_color=clr;             }
   void              SeparateLineLightColor(const color clr)        { m_sepline_light_color=clr;            }
   //---
  };
```

菜单项和它的上下文菜单必须联系起来, 否则就不能正确地管理那些元件. 说得更清楚一些, 上下文菜单和它的项目必须能够访问它所附加的菜单项, 就是它们的前一个结点. 这就意味着 **CContextMenu** 类和 **CMenuItem** 类必须有一个 **CMenuItem** 类型的指针以及保存和获取这个指针的方法. 这个指针也要用于检查在创建程序图形界面时顺序的正确性. 这一点将在晚些时候, 在创建上下文菜单的方法中做演示.

把指针以及保存和获取它的方法加到 **CContextMenu** 类:

```
class CContextMenu : public CElement
  {
private:
   //--- 指向前一节点的指针
   CMenuItem        *m_prev_node;
   //---
public:
   //--- 获取和保存前一个节点的指针
   CMenuItem        *PrevNodePointer(void)                    const { return(m_prev_node);                  }
   void              PrevNodePointer(CMenuItem &object)             { m_prev_node=::GetPointer(object);     }
   //---
  };
```

在 **CMenuItem** 类中也需要这样做:

```
class CMenuItem : public CElement
  {
private:
   //--- 指向前一节点的指针
   CMenuItem        *m_prev_node;
   //---
public:
   //--- 获取和保存前一个节点的指针
   CMenuItem        *PrevNodePointer(void)                    const { return(m_prev_node);                  }
   void              PrevNodePointer(CMenuItem &object)             { m_prev_node=::GetPointer(object);     }
   //---
  };
```

将在应用程序的自定义类(**CProgram**)中创建图形界面. 当创建上下文菜单时, 我们将需要一个方法来指定上下文菜单中需要的菜单项数量以及这些菜单项的一些参数值. 让我们写下 **CContextMenu::AddItem** () 方法, 它的参数如下: (1) 菜单项文字, (2) 项目可用图标的路径, (3) 项目禁用图标的路径, 以及 (4) 菜单项类型. 还需要保存传入数值的数组. 这些数组的大小每次在调用 **CContextMenu::AddItem** () 方法时会增加一个元件.

```
class CContextMenu : public CElement
  {
private:
   //--- 菜单项属性的数组:
   //    (1) 文字, (2) 可用项标签, (3) 禁用项标签
   string            m_label_text[];
   string            m_path_bmp_on[];
   string            m_path_bmp_off[];
   //---
public:
   //--- 在创建上下文菜单前使用指定属性增加一个菜单项
   void              AddItem(const string text,const string path_bmp_on,const string path_bmp_off,const ENUM_TYPE_MENU_ITEM type);
   //---
  };
//+------------------------------------------------------------------+
//| 增加一个菜单项                                                 |
//+------------------------------------------------------------------+
void CContextMenu::AddItem(const string text,const string path_bmp_on,const string path_bmp_off,const ENUM_TYPE_MENU_ITEM type)
  {
//--- 把数组大小增加一个元件
   int array_size=::ArraySize(m_items);
   ::ArrayResize(m_items,array_size+1);
   ::ArrayResize(m_label_text,array_size+1);
   ::ArrayResize(m_path_bmp_on,array_size+1);
   ::ArrayResize(m_path_bmp_off,array_size+1);
//--- 保存传入参数的值
   m_label_text[array_size]   =text;
   m_path_bmp_on[array_size]  =path_bmp_on;
   m_path_bmp_off[array_size] =path_bmp_off;
//--- 设置菜单项类型
   m_items[array_size].TypeMenuItem(type);
  }
```

为了在上下文菜单中加入分隔线, 我们需要一个数组来保存设置分隔线的菜单项索引编号. 菜单项的索引编号将会传入到 **CContextMenu::AddSeparateLine** () 方法中. 代码显示如下.

```
class CContextMenu : public CElement
  {
private:
   //--- 加入分隔线后菜单项的索引编号
   int               m_sep_line_index[];
   //---
public:
   //--- 创建上下文菜单前, 在指定的菜单项处增加分隔线
   void              AddSeparateLine(const int item_index);
   //---
  };
//+------------------------------------------------------------------+
//| 增加分隔线                                           |
//+------------------------------------------------------------------+
void CContextMenu::AddSeparateLine(const int item_index)
  {
//--- 把数组大小增加一个元件
   int array_size=::ArraySize(m_sep_line);
   ::ArrayResize(m_sep_line,array_size+1);
   ::ArrayResize(m_sep_line_index,array_size+1);
//--- 保存索引编号
   m_sep_line_index[array_size]=item_index;
  }
```

我们将需要方法来取得指定索引的菜单项的如下信息: (1) 菜单项的指针, (2) 描述 (显示的文字) 以及 (3) 类型. 在每个方法中, 在返回属性值之前, 首先检查是否超出了数组界限, 然后再调节索引. 它是这样实现的, 如果传入的索引大于数组大小, 就调用最后的项目, 而如果索引值小于零, 就调用第一个项目.

```
class CContextMenu : public CElement
  {
public:
   //--- 从上下文菜单返回项目指针
   CMenuItem        *ItemPointerByIndex(const int index);
   //--- 返回描述 (显示的文字)
   string            DescriptionByIndex(const int index);
   //--- 返回菜单项类型
   ENUM_TYPE_MENU_ITEM TypeMenuItemByIndex(const int index);
   //---
  };
//+------------------------------------------------------------------+
//| 根据索引返回菜单项指针                         |
//+------------------------------------------------------------------+
CMenuItem *CContextMenu::ItemPointerByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果上下文菜单没有项目, 报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "如果上下文菜单至少有一个项目!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 :(index<0)? 0 : index;
//--- 返回指针
   return(::GetPointer(m_items[i]));
  }
//+------------------------------------------------------------------+
//| 根据索引返回项目名称                               |
//+------------------------------------------------------------------+
string CContextMenu::DescriptionByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果上下文菜单没有项目, 报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "如果上下文菜单至少有一个项目!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 :(index<0)? 0 : index;
//--- 返回项目描述
   return(m_items[i].LabelText());
  }
//+------------------------------------------------------------------+
//| 根据索引返回项目类型                               |
//+------------------------------------------------------------------+
ENUM_TYPE_MENU_ITEM CContextMenu::TypeMenuItemByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果上下文菜单没有项目, 报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "如果上下文菜单至少有一个项目!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 :(index<0)? 0 : index;
//--- 返回项目类型
   return(m_items[i].TypeMenuItem());
  }
```

一个上下文菜单可能有几组单选项目. 为了避免在确定哪个项目被点击时出现混淆, 每个单选项都要有自己的组编号以及在组中的相对索引. 以下的结构图显示了上下文菜单元素的通用索引和标识号, 以及一个单选项独有的特点.

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-0%3B_%5D1%5Del_%5D1%2Cplg)
![[Pasted image 20260628211256.png]]
图 3. 上下文菜单中不同组的标识号与索引结构图.

当建立上下文菜单时, 菜单项的类型必须在菜单附加到图表之前就指定. 如果这是个单选项, 就需要指出它所属的组. 换句话说, 我们需要一个方法来获取每个单选项的标识号. 单选项的默认标识号将等于零. 如果我们不做处理, 上下文菜单就只能有一组单选项目, 不论我们加了多少. 有时候我们需要得到单选项的标识号, 例如现在强调的项目. 而且需要在单选项之间做切换.

另外, 还需要操作复选框的方法. 它们都要求能够得到复选框的状态以及有需要时改变它的状态. 这些方法的声明与实现在以下代码中.

```
class CContextMenu : public CElement
  {
public:
   //--- (1) 获取 以及 (2) 设置复选框的状态
   bool              CheckBoxStateByIndex(const int index);
   void              CheckBoxStateByIndex(const int index,const bool state);
   //--- 根据索引 (1) 返回 以及 (2) 设置单选项的 id
   int               RadioItemIdByIndex(const int index);
   void              RadioItemIdByIndex(const int item_index,const int radio_id);
   //--- (1) 返回选定的单选项, (2) 切换单选项
   int               SelectedRadioItem(const int radio_id);
   void              SelectedRadioItem(const int radio_index,const int radio_id);
   //---
  };
//+------------------------------------------------------------------+
//| 根据索引返回复选框状态                          |
//+------------------------------------------------------------------+
bool CContextMenu::CheckBoxStateByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果上下文菜单没有项目, 报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "如果上下文菜单至少有一个项目!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 :(index<0)? 0 : index;
//--- 返回项目状态
   return(m_items[i].CheckBoxState());
  }
//+------------------------------------------------------------------+
//| 根据索引设置复选框状态                             |
//+------------------------------------------------------------------+
void CContextMenu::CheckBoxStateByIndex(const int index,const bool state)
  {
//--- 检查是否超出范围
   int size=::ArraySize(m_items);
   if(size<1 || index<0 || index>=size)
      return;
//--- 设置状态
   m_items[index].CheckBoxState(state);
  }
//+------------------------------------------------------------------+
//| 根据索引返回单选项id                           |
//+------------------------------------------------------------------+
int CContextMenu::RadioItemIdByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果上下文菜单没有项目, 报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "如果上下文菜单至少有一个项目!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 :(index<0)? 0 : index;
//--- 返回 id
   return(m_items[i].RadioButtonID());
  }
//+------------------------------------------------------------------+
//| 根据索引设置单选项id                              |
//+------------------------------------------------------------------+
void CContextMenu::RadioItemIdByIndex(const int index,const int id)
  {
//--- 检查是否超出范围
   int array_size=::ArraySize(m_items);
   if(array_size<1 || index<0 || index>=array_size)
      return;
//--- 设置 id
   m_items[index].RadioButtonID(id);
  }
//+------------------------------------------------------------------+
//| 根据id返回单选项索引                           |
//+------------------------------------------------------------------+
int CContextMenu::SelectedRadioItem(const int radio_id)
  {
//--- 单选项计数器
   int count_radio_id=0;
//--- 在上下文菜单项做循环
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果不是单选项, 转到下一个
      if(m_items[i].TypeMenuItem()!=MI_RADIOBUTTON)
         continue;
      //--- 如果id匹配
      if(m_items[i].RadioButtonID()==radio_id)
        {
         //--- 如果这是个激活状态的单选项, 退出循环
         if(m_items[i].RadioButtonState())
            break;
         //--- 增加单选项计数器的计数
         count_radio_id++;
        }
     }
//--- 返回索引
   return(count_radio_id);
  }
//+------------------------------------------------------------------+
//| 根据索引和id切换单选项                      |
//+------------------------------------------------------------------+
void CContextMenu::SelectedRadioItem(const int radio_index,const int radio_id)
  {
//--- 单选项计数器
   int count_radio_id=0;
//--- 在上下文菜单项做循环
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果不是单选项, 转到下一个
      if(m_items[i].TypeMenuItem()!=MI_RADIOBUTTON)
         continue;
      //--- 如果id匹配
      if(m_items[i].RadioButtonID()==radio_id)
        {
         //--- 切换单选项
         if(count_radio_id==radio_index)
            m_items[i].RadioButtonState(true);
         else
            m_items[i].RadioButtonState(false);
         //--- 增加单选项计数器的计数
         count_radio_id++;
        }
     }
  }
```

用于创建附加上下文菜单至图表的方法所需都已具备. 附加将分三步:

- 创建上下文菜单背景.
- 创建菜单项.
- 创建分隔线.

每一步都需要一个 **私有(private)** 方法. 之后, 它们会被通用的 **公有(public)** 方法调用. 在类中声明它们:

```
class CContextMenu : public CElement
  {
public:
   //--- 用于创建上下文菜单的方法
   bool              CreateContextMenu(const long chart_id,const int window,const int x=0,const int y=0);
   //---
private:
   bool              CreateArea(void);
   bool              CreateItems(void);
   bool              CreateSeparateLine(const int line_number,const int x,const int y);
   //---
  };
```

上下文菜单背景的高度依赖于菜单项和分隔线的数量. 所以在此设置它的值没有意义, 因为这个值将被设置上下文菜单背景的方法 **CContextMenu::CreateArea** () 所替代. 分隔线区域的高度等于9个像素点, 所以, 计算它们所占用的区域需要把分隔线的数量乘以这个数字.

```
//+------------------------------------------------------------------+
//| 创建上下文菜单的一般区域                      |
//+------------------------------------------------------------------+
bool CContextMenu::CreateArea(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_contextmenu_bg_"+(string)CElement::Id();
//--- 根据菜单项和分隔线的数量来计算上下文菜单的高度
   int items_total =ItemsTotal();
   int sep_y_size  =::ArraySize(m_sep_line)*9;
   1

//--- 设置上下文菜单的背景
   if(!m_area.Create(m_chart_id,name,m_subwin,m_x,m_y,m_x_size,m_y_size))
      return(false);
//--- 设置属性
   m_area.BackColor(m_area_color);
   m_area.Color(m_area_border_color);
   m_area.BorderType(BORDER_FLAT);
   m_area.Corner(m_corner);
   m_area.Selectable(false);
   m_area.Z_Order(m_area_zorder);
   m_area.Tooltip("\n");
//--- 到边缘的距离
   m_area.XGap(m_x-m_wnd.X());
   m_area.YGap(m_y-m_wnd.Y());
//--- 设置区域大小
   m_area.XSize(m_x_size);
   m_area.YSize(m_y_size);
//--- 设置对象指针
   CElement::AddToArray(m_area);
   return(true);
  }
```

分隔线将通过 **CContextMenu::CreateSeparateLine** () 方法来设置. 线的编号和坐标作为参数传给此方法:

```
//+------------------------------------------------------------------+
//| 创建分隔线                                        |
//+------------------------------------------------------------------+
bool CContextMenu::CreateSeparateLine(const int line_number,const int x,const int y)
  {
//--- 保存表单指针
   m_sep_line[line_number].WindowPointer(m_wnd);
//--- 设置属性
   m_sep_line[line_number].TypeSepLine(H_SEP_LINE);
   m_sep_line[line_number].DarkColor(m_sepline_dark_color);
   m_sep_line[line_number].LightColor(m_sepline_light_color);
//--- 创建分隔线
   if(!m_sep_line[line_number].CreateSeparateLine(m_chart_id,m_subwin,line_number,x,y,m_x_size-10,2))
      return(false);
//--- 设置对象指针
   CElement::AddToArray(m_sep_line[line_number].Object(0));
   return(true);
  }
```

**CContextMenu::CreateSeparateLine** () 方法将在 **CContextMenu::CreateItems** () 方法中调用以设置菜单项. 将在一个循环中按顺序设置这些元件的坐标. 之前, 我们已经看到了 **m\_sep\_line\_index** \[\] 数组. 在创建上下文菜单时, 设置过分隔线后, 菜单项的索引编号将保存在其中. 在循环中比较当前菜单项的索引编号和保存在 **m\_sep\_line\_index** \[\] 数组中的编号, 就可以知道在哪里设置分隔线了.

另外在设置上下文菜单中的每个菜单项之前, 还需要保存前一节点的指针. **CContextMenu::CreateItems** () 方法的代码和详细注释如下.

```
//+------------------------------------------------------------------+
//| 创建菜单项列表                                     |
//+------------------------------------------------------------------+
bool CContextMenu::CreateItems(void)
  {
   int s =0;     // 用于标记分隔线的位置
   int x =m_x+1; // X 坐标
   int y =m_y+1; // Y 坐标. 将在每个菜单项的循环中计算.
//--- 分隔线的数量
   int sep_lines_total=::ArraySize(m_sep_line_index);
//---
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 计算 Y 坐标
      y=(i>0)? y+m_item_y_size-1 : y;
      //--- 保存表单指针
      m_items[i].WindowPointer(m_wnd);
      //--- 加上指向前一节点的指针
      m_items[i].PrevNodePointer(m_prev_node);
      //--- 设置属性
      m_items[i].XSize(m_x_size-2);
      m_items[i].YSize(m_item_y_size);
      m_items[i].IconFileOn(m_path_bmp_on[i]);
      m_items[i].IconFileOff(m_path_bmp_off[i]);
      m_items[i].AreaBackColor(m_area_color);
      m_items[i].AreaBackColorOff(m_item_back_color_hover_off);
      m_items[i].AreaBorderColor(m_area_color);
      m_items[i].LabelColor(m_label_color);
      m_items[i].LabelColorHover(m_label_color_hover);
      m_items[i].RightArrowFileOn(m_right_arrow_file_on);
      m_items[i].RightArrowFileOff(m_right_arrow_file_off);
      m_items[i].IsDropdown(m_is_dropdown);
      //--- 与面板边缘的距离
      m_items[i].XGap(x-m_wnd.X());
      m_items[i].YGap(y-m_wnd.Y());
      //--- 创建一个菜单项
      if(!m_items[i].CreateMenuItem(m_chart_id,m_subwin,i,m_label_text[i],x,y))
         return(false);
      //--- 如果设置了全部分隔线就转向下一个
      if(s>=sep_lines_total)
         continue;
      //--- 如果所有的索引都匹配, 那么这个项目的后面可以设置分隔线
      if(i==m_sep_line_index[s])
        {
         //--- 坐标
         int l_x=x+5;
         y=y+m_item_y_size+2;
         //--- 设置分隔线
         if(!CreateSeparateLine(s,l_x,y))
            return(false);
         //--- 调整下面菜单项的Y坐标
         y=y-m_item_y_size+7;
         //--- 分隔线计数器增加计数
         s++;
        }
     }
   return(true);
  }
```

然后, 需要实现给外部使用的 **CContextMenu::CreateContextMenu** () 方法. 在此阶段, 让我们考虑一个选项, 可以使上下文菜单附加在外部菜单的某个菜单项上或是附加在一个独立的菜单项上. 这意味着在创建上下文菜单之前, 需要传给它一个之前我们说过的前面节点的指针. 另外, 还需要检查表单指针是否存在, 检查前面节点的指针是否存在. 对于库的用户, 这里是另一个可能造成错误图形界面构造的检查点.

在创建过后, 上下文菜单通常是隐藏的, 因为设计它是为了在点击了另外某个控件或者点击了工作区域时会弹出来. **Hide** () 方法就是设计哟哦你过来隐藏每个元件中的对象的. 在 **CContextMenu** 类中也有一个类似的方法. 开始, 上下文菜单的对象 - 背景和一条分隔线会通过它隐藏. 然后在循环中隐藏所有菜单项. 同时, 会调用菜单项自己的 **CMenuItem::Hide** () 方法. 分隔线也可以通过类似的方法隐藏, 因为这种元件也有它自己的 **CSeparateLine::Hide** () 方法. 然而, 因为它只是一个设计元件, 只是包含了一个图形对象而且不是用于和用户交互的, 在上下文菜单创建时加到通用的对象数组中, 将在对应的循环中隐藏.

```
//+------------------------------------------------------------------+
//| 隐藏上下文菜单                                           |
//+------------------------------------------------------------------+
void CContextMenu::Hide(void)
  {
//--- 如果元件是隐藏的, 退出
   if(!CElement::m_is_visible)
      return;
//--- 隐藏上下文菜单的对象
   for(int i=0; i<ObjectsElementTotal(); i++)
      Object(i).Timeframes(OBJ_NO_PERIODS);
//--- 隐藏菜单项
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
      m_items[i].Hide();
//--- 清除焦点
   CElement::MouseFocus(false);
//--- 设置隐藏控件的状态
   CElement::m_is_visible=false;
  }
```

所有管理上下文菜单的方法的结构都于此类似, 我们在此不再列出它们的代码. 您可以在文章的附件中查阅代码. 我们只讨论用于删除元件的代码, 即 **CContextMenu::Delete** () 方法. 在此, 除了删除所有的图形对象之外, 用于构建上下文菜单的所有数组也要被清空. 如果不这样做, 当交易品种或者时段变化时, 菜单项列表将会增加. 在测试阶段, 您可以做试验试试看, 只需要把那些行代码注释掉.

```
//+------------------------------------------------------------------+
//| 删除                                                         |
//+------------------------------------------------------------------+
void CContextMenu::Delete(void)
  {
//--- 删除对象  
   m_area.Delete();
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
      m_items[i].Delete();
//--- 删除分隔线
   int sep_total=::ArraySize(m_sep_line);
   for(int i=0; i<sep_total; i++)
      m_sep_line[i].Delete();
//--- 清空控件数组
   ::ArrayFree(m_items);
   ::ArrayFree(m_sep_line);
   ::ArrayFree(m_sep_line_index);
   ::ArrayFree(m_label_text);
   ::ArrayFree(m_path_bmp_on);
   ::ArrayFree(m_path_bmp_off);
//--- 清空对象数组
   CElement::FreeObjectsArray();
  }
```

回到创建上下文菜单的方法, 必须声明的是, 其中的坐标是相对前节点而言的. 我们可以设置使得库的用户可以在有需要的时候使用自定义的坐标. 在创建上下文菜单时, **CContextMenu::CreateContextMenu** () 方法中的默认坐标需要被设置为零. 坐标是根据前节点自动计算的, 除非设置了至少一个坐标. 如果两个坐标都指定了, 自动计算就被取消.

对于那些从其他上下文菜单中打开的上下文菜单, 它们的坐标会根据它附加菜单的右侧来自动计算. 对于那些附加到主菜单菜单项的上下文菜单, 坐标的计算是根据菜单项的底部进行的. 为了管理这个系统, 需要在 **CContextMenu** 类中加入另外一个栏位和方法. 让我们在 **Enums.mqh** 文件中加入新的枚举:

```
//+------------------------------------------------------------------+
//| 菜单附加方向的枚举                            |
//+------------------------------------------------------------------+
enum ENUM_FIX_CONTEXT_MENU
  {
   FIX_RIGHT  =0,
   FIX_BOTTOM =1
  };
```

在上下文菜单类中要加上对应的栏位和设置坐标计算模式的方法. 默认情况下, 坐标是根据菜单项的右侧来计算的.

```
class CContextMenu : public CElement
  {
private:
   //--- 上下文菜单附加的方向
   ENUM_FIX_CONTEXT_MENU m_fix_side;
   //---
public:
   //--- 设置上下文菜单附加模式
   void              FixSide(const ENUM_FIX_CONTEXT_MENU side)      { m_fix_side=side;                      }
  };
//+------------------------------------------------------------------+
//| 构造函数                                                      |
//+------------------------------------------------------------------+
CContextMenu::CContextMenu(void) : m_fix_side(FIX_RIGHT)
  {
  }
```

以下是 **CContextMenu::CreateContextMenu** () 方法的代码. 只有在有指针的时候才能创建元件. 只有在经过我们之前讨论的对应检查之后才能取得这个节点的属性, 并且这可以自动计算相对坐标. 在创建之后, 必须使用代码隐藏上下文菜单.

```
//+------------------------------------------------------------------+
//| 创建上下文菜单                                           |
//+------------------------------------------------------------------+
bool CContextMenu::CreateContextMenu(const long chart_id,const int subwin,const int x=0,const int y=0)
  {
//--- 如果没有表单指针, 退出
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建上下文菜单之前  "
              "必须传入一个使用WindowPointer(CWindow &object)取得的窗口指针.");
      return(false);
     }
//--- 如果没有前节点的指针 
   if(::CheckPointer(m_prev_node)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建上下文菜单之前 "
              "必须传入一个使用CContextMenu::PrevNodePointer(CMenuItem &object) 方法取得的节点指针.");
      return(false);
     }
//--- 初始化变量
   m_id       =m_wnd.LastId()+1;
   m_chart_id =chart_id;
   m_subwin   =subwin;
//--- 如果没有指定坐标
   if(x==0 || y==0)
     {
      m_x =(m_fix_side==FIX_RIGHT)? m_prev_node.X2()-3 : m_prev_node.X()+1;
      m_y =(m_fix_side==FIX_RIGHT)? m_prev_node.Y()-1  : m_prev_node.Y2()-1;
     }
//--- 如果指定了坐标
   else
     {
      m_x =x;
      m_y =y;
     } 
//--- 到边缘的距离
   CElement::XGap(m_x-m_wnd.X());
   CElement::YGap(m_y-m_wnd.Y());
//--- 创建上下文菜单
   if(!CreateArea())
      return(false);
   if(!CreateItems())
      return(false);
//--- 隐藏元件
   Hide();
   return(true);
  }
```

在 **CMenuItem** 类的 **CreateMenuItem** () 方法中需要加入一个条件, 检查前节点是否存在. 如果没有指针就意味着一个独立的菜单项. 这就是说这个项目不是上下文菜单的一部分. 这样的项目可能是一种简单类型 (**MI\_SIMPLE**) 或者包含上下文菜单的项目 (**MI\_HAS\_CONTEXT\_MENU**). 也许现在很难理解, 但是在本文末尾看过例子之后就很清楚了.

把这部分代码放到 **CMenuItem::CreateMenuItem** () 方法中, 检查表单指针是否存在的代码之后.

```
//--- 如果没有指向前节点的指针, 那么
//    说明这是一个独立菜单项, 它并非是上下文菜单的一部分
   if(::CheckPointer(m_prev_node)==POINTER_INVALID)
     {
      //--- 如果类型不匹配就退出
      if(m_type_menu_item!=MI_SIMPLE && m_type_menu_item!=MI_HAS_CONTEXT_MENU)
        {
         ::Print(__FUNCTION__," > 独立菜单项的类型只能是 MI_SIMPLE 或者 MI_HAS_CONTEXT_MENU,",
                 "才能用于上下文菜单.\n",
                 __FUNCTION__," > 可以使用 CMenuItem::TypeMenuItem()") 方法设置菜单项类型");
         return(false);
        }
     }
```

### 测试附加的上下文菜单

把上下文菜单附加到图标就可以立即进行测试了. 包含 **ContextMenu.mqh** 文件, 引入 **CContextMenu** 菜单类, 代码显示如下.

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Window.mqh"
#include "MenuItem.mqh"
#include "ContextMenu.mqh"
#include "SeparateLine.mqh"
```

在 **CProgram** 应用程序自定义类中创建一个 **CContextMenu** 类的实例, 并声明方法用于创建一个上下文菜单不一定要指定距离表单边缘的距离, 因为它们会根据附加到菜单项的来自动计算.

```
class CProgram : public CWndEvents
  {
private:
   //--- 菜单项和上下文菜单
   CMenuItem         m_menu_item1;
   CContextMenu      m_mi1_contextmenu1;
   //---
private:
#define MENU_ITEM1_GAP_X (6)
#define MENU_ITEM1_GAP_Y (25)
   bool              CreateMenuItem1(const string item_text);
   bool              CreateMI1ContextMenu1(void);
  };
```

现在, 让我们构造上下文菜单. 它将含有五个项目: 三个简单项 (**MI\_SIMPLE**) 和两个复选框类型的 (**MI\_CHECKBOX**). 在方法外包含图标和简单项的标签等资源. 图标分为可用状态的彩色和不可用状态的无色两类. 您可以根据文章末尾的链接下载它们. 然后, 在方法的最开始, 保存表单指针和上下文菜单的前节点. 不进行这些操作, 图形界面就无法创建并将被从图表上移除. 然后是数组 (1) 项目描述 (显示的文字), 图标 (2) 可用状态 和 (3) 禁用状态 (4) 以及项目类型. 在那以后, 我们需要设置所有项目的通用属性, 并在循环中使用 **CContextMenu::AddItem** () 方法把它们加到上下文菜单中. 在第二个项目(索引 1)之后加上分隔线. 在完成了以上所有操作后, 上下文菜单就可以附加到图表上了. 在方法的最后, 把元件指针加到库中. 以下是方法的代码.

```
//+------------------------------------------------------------------+
//| 创建上下文菜单                                           |
//+------------------------------------------------------------------+
#resource "\\Images\\Controls\\coins.bmp"
#resource "\\Images\\Controls\\coins_colorless.bmp"
#resource "\\Images\\Controls\\line_chart.bmp"
#resource "\\Images\\Controls\\line_chart_colorless.bmp"
#resource "\\Images\\Controls\\safe.bmp"
#resource "\\Images\\Controls\\safe_colorless.bmp"
//---
bool CProgram::CreateMI1ContextMenu1(void)
  {
//--- 上下文菜单中有五个菜单项
#define CONTEXTMENU_ITEMS1 5
//--- 保存窗口指针
   m_mi1_contextmenu1.WindowPointer(m_window);
//--- 保存前节点的指针
   m_mi1_contextmenu1.PrevNodePointer(m_menu_item1);
//--- 项目名称数组
   string items_text[CONTEXTMENU_ITEMS1]=
     {
      "ContextMenu 1 Item 1",
      "ContextMenu 1 Item 2",
      "ContextMenu 1 Item 3",
      "ContextMenu 1 Item 4",
      "ContextMenu 1 Item 5"
     };
//--- 可用模式的标签数组
   string items_bmp_on[CONTEXTMENU_ITEMS1]=
     {
      "Images\\Controls\\coins.bmp",
      "Images\\Controls\\line_chart.bmp",
      "Images\\Controls\\safe.bmp",
      "",""
     };
//--- 禁用模式的标签数组
   string items_bmp_off[CONTEXTMENU_ITEMS1]=
     {
      "Images\\Controls\\coins_colorless.bmp",
      "Images\\Controls\\line_chart_colorless.bmp",
      "Images\\Controls\\safe_colorless.bmp",
      "",""
     };
//--- 项目类型数组
   ENUM_TYPE_MENU_ITEM items_type[CONTEXTMENU_ITEMS1]=
     {
      MI_SIMPLE,
      MI_SIMPLE,
      MI_SIMPLE,
      MI_CHECKBOX,
      MI_CHECKBOX
     };
//--- 在创建之前设置属性
   m_mi1_contextmenu1.XSize(160);
   m_mi1_contextmenu1.ItemYSize(24);
   m_mi1_contextmenu1.AreaBackColor(C'240,240,240');
   m_mi1_contextmenu1.AreaBorderColor(clrSilver);
   m_mi1_contextmenu1.ItemBackColorHover(C'240,240,240');
   m_mi1_contextmenu1.ItemBackColorHoverOff(clrLightGray);
   m_mi1_contextmenu1.ItemBorderColor(C'240,240,240');
   m_mi1_contextmenu1.LabelColor(clrBlack);
   m_mi1_contextmenu1.LabelColorHover(clrWhite);
   m_mi1_contextmenu1.RightArrowFileOff("Images\\EasyAndFastGUI\\Controls\\RightTransp_black.bmp");
   m_mi1_contextmenu1.SeparateLineDarkColor(C'160,160,160');
   m_mi1_contextmenu1.SeparateLineLightColor(clrWhite);
//--- 在上下文菜单中加入菜单项
   for(int i=0; i<CONTEXTMENU_ITEMS1; i++)
      m_mi1_contextmenu1.AddItem(items_text[i],items_bmp_on[i],items_bmp_off[i],items_type[i]);
//--- 第二个项目后的分隔线
   m_mi1_contextmenu1.AddSeparateLine(1);
//--- 创建上下文菜单
   if(!m_mi1_contextmenu1.CreateContextMenu(m_chart_id,m_subwin))
      return(false);
//--- 在库中加上控件指针
   CWndContainer::AddToElementsArray(0,m_mi1_contextmenu1);
   return(true);
  }
```

现在, 在 创建图形界面的主方法中加上创建上下文菜单的方法调用. 尽管在设置时上下文菜单是隐藏的, 它会在这个测试中显示出来. 以下代码显示了要加到 **CProgram::CreateTradePanel** () 方法的代码行.

```
//+------------------------------------------------------------------+
//| 创建交易面板                                          |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
   if(!CreateWindow("EXPERT PANEL"))
      return(false);
//--- 创建控件:
//    菜单项
   if(!CreateMenuItem1("Menu item"))
      return(false);
   if(!CreateMI1ContextMenu1())
      return(false);
//--- 分隔线
   if(!CreateSepLine())
      return(false);
//--- 显示上下文菜单
   m_mi1_contextmenu1.Show();
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

编译文件并把程序加到图表上. 结果应如以下屏幕截图所示

![图 4. 上下文菜单元件的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-12_niehv.rne "图 4. 上下文菜单元件的测试.")
![[Pasted image 20260628211600.png]]
图 4. 上下文菜单元件的测试.

在此阶段, 当鼠标光标掠过上下文菜单的菜单项时, 它们不会改变颜色. 这种功能可以在上下文菜单的 **CContextMenu** 类中创建, 或者您也可以使用菜单项的 **CMenuItem** 类中已经做好的部分. 在上下文菜单附加到图表之后, 它的指针加到库中. 然而, 每个菜单项的指针在用于处理事件的 **CWndEvents** 类中并不起作用, 因为没有加到类中的元件通用指针数组中. 对于每个包含多个元件的复杂 (组合) 控件, 我们将会在 **CWndContainer** 类中创建一个方法以获取这些元件的指针. 为此, 我们在 **CContextMenu** 类中实现了 **ItemPointerByIndex** () 方法, 我们可以使用它通过指定索引来取得菜单项的指针.

### 进一步开发存储所有元件指针的类

让我们在 **CWndContainer** 类中实现 **AddContextMenuElements** () 方法用于操作上下文菜单的元件. 传入参数是表单的索引和元件对象. 在方法的开头, 需要检查传入的元件是否为上下文菜单. 如果是, 就需要一个上下文菜单(**CContextMenu**)的指针来访问它的方法. 如果传入的对象属于它的基类(**CElement**)那应该怎样做呢?为此, 只需要声明一个 **CContextMenu** 类型的指针, 然后把它赋值为传入的对象指针就可以了. 在以下代码中用黄色高亮显示. 通过这种方法, 就可以访问上下文菜单中的项目了. 然后, 它们会在循环中加到它们表单中的通用元件数组中. 在每个循环的末尾, 菜单项会传给 **CWndContainer::AddToObjectsArray** () 方法以把它们保存到 **CChartObject** 类型的对象数组中.

```
//+------------------------------------------------------------------+
//| 保存所有界面对象的类                          |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 把上下文菜单元件中的指针保存到库中
   bool              AddContextMenuElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 把上下文菜单元件的指针保存到库中         |
//+------------------------------------------------------------------+
bool CWndContainer::AddContextMenuElements(const int window_index,CElement &object)
  {
//--- 如果不是上下文菜单就退出
   if(object.ClassName()!="CContextMenu")
      return(false);
//--- 取得上下文菜单指针
   CContextMenu *cm=::GetPointer(object);
//--- 在库中保存它的对象指针
   int items_total=cm.ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 加大元件数组
      int size=::ArraySize(m_wnd[window_index].m_elements);
      ::ArrayResize(m_wnd[window_index].m_elements,size+1);
      //--- 取得菜单项指针
      CMenuItem *mi=cm.ItemPointerByIndex(i);
      //--- 在数组中保存指针
      m_wnd[window_index].m_elements[size]=mi;
      //--- 把菜单项中的对象指针加到通用数组中
      AddToObjectsArray(window_index,mi);
     }
//---
   return(true);
  }
```

在加大了元件计数器后, 它将在 **CWndContainer::AddToElementsArray** () 方法后直接调用. 为了节约文章占用的空间, 我们只展示缩短版本的代码. 完整版代码可以在文章附件中找到.

```
//+------------------------------------------------------------------+
//| 把指针加到元件数组                              |
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
   if(AddContextMenuElements(window_index,object))
      return;
  }
```

**CWndContainer::AddToElementsArray** () 方法将使用同样的方法加强, 就像其他复杂(组合)元件的类似方法.

如果我们编译全部文件并把程序载入到图表上, 上下文菜单上的项目在鼠标光标掠过时将能够改变它们的外观了.

![图 5. 上下文菜单项的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-13_niehv_%5D1%2Cplg "图 5. 上下文菜单项的测试.")
![[Pasted image 20260628211624.png]]
图 5. 上下文菜单项的测试.

用于创建上下文菜单的类的开发就完成了. 下一步是设置它的事件处理函数和菜单项的事件处理函数. 我们将在下一篇文章中处理它.

### 结论

我们的库现在已经有了三个可以创建这样元件的类:

- 菜单项;
- 分隔线;
- 上下文菜单.

在以后的文章中, 我们将为库的主类和以前创建的控件类设置事件处理函数.

您可以在本文中下载当前开发阶段的库文件, 图标和本文中其他程序文件(EA交易, 指标和脚本程序). 然后在 **Metatrader 4** 和 **Metatrader 5** 终端上进行测试. 如果您对如何使用资料中的文件有问题, 您可以参考列表文章中对库开发的详细描述, 并且在对应文章的注释部分问问题.

**第二部分文章(章节)列表:**

- [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)
- [图形界面 II: 分隔线和上下文菜单元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222!pcrv_21)
- 图形界面 II: 设置库的事件处理函数 (第三章)
- 图形界面 II: 主菜单元件 (第四章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2202](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0222)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2000.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2000%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (94.18 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2000%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (101.01 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-96911)** (3)

![Igor Volodin](https://c.mql5.com/avatar/2011/6/4DE8F2C4-8FB3.jpg "Igor Volodin")

| 24 2月 2016 在 15:30

是否有将操作/命令绑定/委托给不同控件的机制？例如，绑定到工具栏中的按钮和 [上下文菜单项](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222 "\"文章：图形界面 II：\"分割线 \"和 \"上下文菜单 \"元素（第 2 章）\"") ？命令 "模式就很适合。与此同时，还可以通过存储已执行命令的历史记录、保存接收者的初始值来实现撤消/重做机制。  
  
最好还能引入一个模型的概念，由这个或那个控件（模式观察者）来监听。  
  
例如，在用户尚未初始化图表模型之前，所有与图表管理相关的控件都具有禁用视图。这样，在某些情况下就无需直接访问控件和负责其行为的逻辑。

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 24 2月 2016 在 18:50

**Igor Volodin:**  
是否有将操作/命令绑定/委托给不同控件的机制？例如，绑定到工具栏中的按钮和上下文菜单项？命令 "模式就很适合。与此同时，还可以通过存储已执行命令的历史记录、保存接收者的初始值来实现撤消/重做机制。 最好还能引入一个模型的概念，由这个或那个控件（模式观察者）来监听。 例如，在用户尚未初始化图表模型之前，所有与图表管理相关的控件都具有禁用视图。这样，在某些情况下就无需直接访问控件及其行为逻辑。  

在当前版本的程序库中，某些情况下元素之间的命令交换是通过 [自定义事件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq "MQL5 文档：图表事件类型") 实现的。下一篇文章将对此进行详细介绍。

至于其他机制，一切都可以协商。在整个系列出版后，您可以仔细阅读该方案的所有项目，并列出一份清单，列出应更改或添加的内容，如果有理由认为这样做会更好/更可靠/更方便等。

我可能误解了你的问题。那你就需要澄清你到底需要得到什么，以及它应该是什么样的。

![Dmitriy Konogorov](https://c.mql5.com/avatar/2022/4/626D2435-56D8.jpg "Dmitriy Konogorov")

| 18 12月 2021 在 12:58

为什么要使用变量数组？

```
color             m_area_color_array[];
```

在 CContextMenu() 构造函数中，你需要将 m\_item\_Ysize 变量默认设置为大于 0 的大小。

[计量经济学 EURUSD 先行预测](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3365)

本文主要讲述使用 EViews 软件对 EURUSD 的先行预测以及使用 EViews 语言程序对预测结果进行的进一步评估。 此预测采用回归模型，通过专为 MetaTrader 4 开发的 Expert Advisor 进行评估。

[外部指标的提醒和注释](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3548)

在实际交易中，交易者可能面临下面的情形：需要在显示器（图表窗口）上得到指示关于指标出现的信号的“提醒”或文本信息。 本文包含了一个示例，显示了由外部指标创建的图形对象的信息。

[Expert Advisor 参数的测试(优化)技术和一些选择条件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3367)

我们可以毫不费力地找到测试的圣杯，然而，要摆脱它却困难得多。 本文重点介绍 Expert Advisor 操作参数的选择，以及在最大限度利用终端性能和最大限度减少终端用户负载的情况下对优化和测试结果进行自动化分组处理。

[交易者的工具箱: 设计指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3549)

本文主要介绍设计指标的主要任务，解决方案和自动化。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fanct%606z210rj3d5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F69%3A%251Fwto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fhmw%2Cbwy%2Cezpgrv%2506wto_aoltgnv%251D%60u%7B.gxrept'24uvm%5Dccmrakgl%251D2602%2CMSL7.aoo.Knvepncl%24a%3Fkaceu%7Bwgqlv%60kughmjdztcdgb%7Bismlvu%26q%3D%3B3676a30fcg86e%60a%3B0%60b3c10%3Bc2565%603473611gf%3A03f0a%3B93a6b4ed9f930df70%24v%3F1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24ukd%3Fznt%7Bwmxwkiuwpqejcqonkflduoaojzwo%26qsl%3D37%3A2450158321130%3A85%26qsl_fr%3F1%24sqn%5Dsp%3D2%26dv%5Ddctg%3D37%3A24430%3B9%24rgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0222%24bcci_ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fwsgrq%250Fvon66%250Fraee6%251F'21uqepAatkols%24tktne%3F%25G5'9%40%25%40E'E7%25%40D'A0%25G7'97%25%3AC'E%3B%25%3BD'A0%2500KI'3C%2500'E7%25%3A8'84%25G9'9C%25%3B4'E5%25%40A'BD%25G5'90%25%3AC'E6%25%408'8C%25G4'B%3A%25%3AB'E4%25%3B6'85%25G8'8D%25%3BC'E7%25%3AD'97%25G5'87%25%3A3'E6%25%40B'B4%2500*%25G7'AA%25CC'E6%25%40A'8A%25G7'A%40%25C0%2B%2500%2F%2500OQN5'E4%25%3B6'85%25G7'A%40%25C0%24sar%5Drgs%3F1%3B22x30%3A0%24aa%3D37%3A245015935255311%24fx_wnkq%3F615%3A016%3B03232540623%24st%3D0572)