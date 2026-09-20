---
title: "图形界面 VIII: 树形视图控件 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-10-11T11:27:51+00:00Z
created: 2026-06-28
description: "图形界面第八部分前面的章节中介绍了静态与下拉日历元件，第二章将集中介绍一个同样复杂的元件 — 树形视图(tree view), 它在每个用于创建图形界面的完整开发库中都会包含。本文中实现的树形视图包含了多种灵活的设置和模式，使得这个控件元件易于调整以满足您的需求。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc2)
- [树形视图元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc3)
- [用于创建树形视图项目的 CTreeItem 类的开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!cvrgektgm)
- [用于创建鼠标指针的 CPointer 类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!croknvep)
- [用于创建树形视图的 CTreeView 类的开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!cvrgetigw)
- [构建元件列表的参数](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc7)
	- [管理元件列表的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc8)
	- [管理列表区域的宽度](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc9)
	- [页面项目的模式](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc12)
	- [事件处理的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc13)
	- [把元件集成到库引擎](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc10)
- [测试树形视图元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc11)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc16)

### 简介

这个开发库目标的详细信息在第一篇文章中 — [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 。在每个部分的文章末尾，都提供了章节链接的列表，您可以从那里下载当前开发阶段库的完整版本。文件必须按照它们在归档中的位置，放到相同的目录下。

图形界面第八部分前面的章节中介绍了静态与下拉日历元件，第二章将集中介绍一个同样复杂的元件 — 树形视图(tree view), 它在每个用于创建图形界面的完整开发库中都会包含。本文中实现的树形视图包含了多种灵活的设置和模式，使得这个控件元件易于调整以满足您的需求。

另外一个用于创建鼠标指针的类的实现也将在本文中包含，此外，我们还将提供实例，看这种类型的元件如何在树形视图中使用。

### 树形视图元件

与简单的列表不同，树形视图使我们可以根据类别在无限的嵌入水平中排布元件，包含其他一系列元件(1个和多个)的每个元件(项目或者节点)都含有一个控件，可以收起和展开局部的列表。除了文字描述之外，每个项目还可以带有一个标签(图标)，使用户更加方便使用。终节点(没有局部列表的)可以包含一组控件，在图形界面上显示信息或者执行某种功能。

树形视图可以用于创建由分级元素构成的目录，例如，它可以用于创建一个文件导航器，就和 Windows 资源管理器(Explorer)类似。 **MetaTrader** 和 **MetaEditor** 也有这样的导航窗口，其中都应用了树形视图。

在 **MetaTrader** 中, 您可以通过按下‘ **Ctrl** + **N** ’的按键显示/隐藏"导航"窗口(参见以下的屏幕截图):

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-07_%5D2%5Del.hpe)
![[Pasted image 20260628222748.png]]
图 1. MetaTrader 中的"导航"窗口。

在 **MetaEditor** 中，您可以通过按下‘ **Ctrl** + **D** ’的按键显示/隐藏"导航"窗口(参见以下的屏幕截图):

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-04_%5D2%5Del.hpe)
![[Pasted image 20260628222802.png]]
图 2. MetaEditor 中的"导航"窗口。

### 用于创建树形视图项目的 CTreeItem 类的开发

在我们继续树形视图类的开发之前，必须先创建另外两个元件，树形视图项目是必须的一个，它的结构和上下文菜单项(**CMenuItem**)有些类似，我们已经在文章 [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220) 讨论过它, 但是，它也有它所特有的属性，所以需要为它创建一个独立的类。

第二个元件是鼠标指针，它将用于指示是否可以修改列表视图区域的宽度。为了创建这种类型的元件，我们将写一个独立的类，称为 **CPointer** ，也可以以后再其它元件中使用。 **CPointer** 类将在后面的部分中探讨，

在开始阶段我们需要确保树形视图项目的对象都被收集到，

树形视图项目的组成部分在下面列出。

1. 背景
2. 局部列表项目的标记，箭头和+/-符号是用于显示状态的(展开/收起)。
3. 项目标签，例如，有可能需要根据某些种类来把项目进行区分。
4. 项目的文字形式的描述。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_3.rne)
![[Pasted image 20260628222838.png]]
图 3. 树形视图项目的组件。

我们创建一个文件，把它命名为 **TreeItem.mqh** ，并且在库文件(**WndContainer.mqh**)中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "TreeItem.mqh"
```

在 **TreeItem.mqh** 文件中，我们需要创建 **CTreeItem** 类，其中包含所有库元件的标准方法 (参见以下代码):

```
//+------------------------------------------------------------------+
//|                                                     TreeItem.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 用于创建树形视图项目的类                       |
//+------------------------------------------------------------------+
class CTreeItem : public CElement
  {
private:
   //--- 指向元件所附加的表单的指针.
   CWindow          *m_wnd;
   //---
public:
                     CTreeItem (void);
                    ~CTreeItem (void);
   //--- 把指针保存到表单中
   void              WindowPointer(CWindow &object)             { m_wnd=::GetPointer(object);            }
   //---
public:
   //--- 事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void) {}
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
   //--- 重置颜色
   virtual void      ResetColors(void);
  };
```

以下属性用于在创建元件之前设置它的外观。

- 在不同状态下项目背景的颜色
- 项目标签
- 显示局部项目列表的当前状态(展开/收起)的箭头图标
- 文字标签的偏移
- 不同状态下的文字颜色

```
class CTreeItem : public CElement
  {
private:
   //--- 不同状态下的背景颜色
   color             m_item_back_color;
   color             m_item_back_color_hover;
   color             m_item_back_color_selected;
   //--- 项目箭头的图标
   string            m_item_arrow_file_on;
   string            m_item_arrow_file_off;
   string            m_item_arrow_selected_file_on;
   string            m_item_arrow_selected_file_off;
   //--- 项目标签
   string            m_icon_file;
   //--- 文字标签的偏移
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 项目不同状态下的文字颜色
   color             m_item_text_color;
   color             m_item_text_color_hover;
   color             m_item_text_color_selected;
   //---
public:
   //--- 项目背景的颜色
   void              ItemBackColor(const color clr)                   { m_item_back_color=clr;                    }
   void              ItemBackColorHover(const color clr)              { m_item_back_color_hover=clr;              }
   void              ItemBackColorSelected(const color clr)           { m_item_back_color_selected=clr;           }
   //--- (1) 设置项目标签, (2) 设置项目箭头的图标
   void              IconFile(const string file_path)                 { m_icon_file=file_path;                    }
   void              ItemArrowFileOn(const string file_path)          { m_item_arrow_file_on=file_path;           }
   void              ItemArrowFileOff(const string file_path)         { m_item_arrow_file_off=file_path;          }
   void              ItemArrowSelectedFileOn(const string file_path)  { m_item_arrow_selected_file_on=file_path;  }
   void              ItemArrowSelectedFileOff(const string file_path) { m_item_arrow_selected_file_off=file_path; }
   //--- (1) 返回项目文字, (2) 设置文字标签的偏移
   string            LabelText(void)                            const { return(m_label.Description());            }
   void              LabelXGap(const int x_gap)                       { m_label_x_gap=x_gap;                      }
   void              LabelYGap(const int y_gap)                       { m_label_y_gap=y_gap;                      }
   //--- 不同状态下的文字颜色
   void              ItemTextColor(const color clr)                   { m_item_text_color=clr;                    }
   void              ItemTextColorHover(const color clr)              { m_item_text_color_hover=clr;              }
   void              ItemTextColorSelected(const color clr)           { m_item_text_color_selected=clr;           }
  };
```

我们将需要4个 **私有(private)** 方法和1个 **公有(public)** 方法用于创建树形列表，请注意，我们将使用 **CEdit** 之类的图形对象作为文字标签，为此我们将进行简要的必需设置。

```
class CTreeItem : public CElement
  {
private:
   //--- 用于创建树形类型视图的对象
   CRectLabel        m_area;
   CBmpLabel         m_arrow;
   CBmpLabel         m_icon;
   CEdit             m_label;
   //---
public:
   //--- 用于创建树形项目的方法
   bool              CreateTreeItem(const long chart_id,const int subwin,const int x,const int y,const ENUM_TYPE_TREE_ITEM type,
                                    const int list_index,const int node_level,const string item_text,const bool item_state);
   //---
private:
   bool              CreateArea(void);
   bool              CreateArrow(void);
   bool              CreateIcon(void);
   bool              CreateLabel(void);
  };
```

必须向公有方法 **CTreeItem::CreateTreeItem** ()中传入项目相对于列表中其它项目的位置参数值，它们中的一些将用于构造元件中图形对象的名称。类中的相关栏位初始化时使用的数值是来自创建元件对象的私有方法中传入的参数值。

主要特性在下面列出，

- 项目的类型可以从两个选项中选择: (1) 简单项 (**TI\_SIMPLE**)，是终节点，不包含其它项, 或者 (2) 含有其它项的项目 (**TI\_HAS\_ITEMS**)。所以，要在 **Enums.mqh** 文件中加入 **ENUM\_TYPE\_TREE\_ITEM** 枚举:

```
//+------------------------------------------------------------------+
//| 树形视图项的类型枚举                         |
//+------------------------------------------------------------------+
enum ENUM_TYPE_TREE_ITEM
  {
   TI_SIMPLE    =0,
   TI_HAS_ITEMS =1
  };
```

- 列表中的总索引。
- 节点级别 (编号)。
- 显示的文字 (描述)。
- 项目的状态。

请注意箭头的偏移是如何计算的 (在项目中含有局部列表的标记)。最终，树形视图中的每个节点都会根据计算的数值进行移动。

```
class CTreeItem : public CElement
  {
private:
   //--- 箭头(标记)的偏移
   int               m_arrow_x_offset;
   //--- 项目类型
   ENUM_TYPE_TREE_ITEM m_item_type;
   //--- 总列表中的项目索引
   int               m_list_index;
   //--- 节点的级别
   int               m_node_level;
   //--- 显示的项目文字
   string            m_item_text;
   //--- 项目列表的状态 (展开/收起)
   bool              m_item_state;
  };
//+------------------------------------------------------------------+
//| 创建树形的一个项目　                         |
//+------------------------------------------------------------------+
bool CTreeItem::CreateTreeItem(const long chart_id,const int subwin,const int x,const int y,const ENUM_TYPE_TREE_ITEM type,
                               const int list_index,const int node_level,const string item_text,const bool item_state)
  {
//--- 如果没有表单指针，退出
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建列表项目之前，我们需要发送"
              "表单指针用于 CTreeItem::WindowPointer(CWindow &object)") 类方法;
      return(false);
     }
//--- 初始化变量
   m_id             =m_wnd.LastId()+1;
   m_chart_id       =chart_id;
   m_subwin         =subwin;
   m_x              =x;
   m_y              =y;
   m_item_type      =type;
   m_list_index     =list_index;
   m_node_level     =node_level;
   m_item_text      =item_text;
   m_item_state     =item_state;
   m_arrow_x_offset =(m_node_level>0)? (12*m_node_level)+5 : 5;
//--- 与表单边缘的距离
   CElement::XGap(CElement::X()-m_wnd.X());
   CElement::YGap(CElement::Y()-m_wnd.Y());
//--- 创建菜单项
   if(!CreateArea())
      return(false);
   if(!CreateArrow())
      return(false);
   if(!CreateIcon())
      return(false);
   if(!CreateLabel())
      return(false);
//--- 在对话框或者最小化窗口中隐藏控件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

以下的组成部分将用于构建元件对象的名称 (参见以下代码):

- 程序名称
- 元件索引
- 属于元件的标记 («treeitem»)
- 属于元件部分的标记
- 树形项目的总索引
- 元件的ID

我们将以创建对象的私有方法 **CTreeItem::CreateArrow** () 为例，开发库中有默认的用于下拉列表的图标，您可以从文章末尾的附件中下载它们。如有必要，它们可以在创建元件之前重新设置。

对象相对元件左边的偏移是使用 **m\_node\_level** 参数(节点级别)计算的，在创建元件的主方法中创建元件对象之前进行。如果这是一个简单项目类型 (**TI\_SIMPLE**), 程序就退出此方法，请注意，对象的坐标必须保存，用于检查项目的类型 (在可能退出方法之前), 因为它们将会用于计算随后创建的元件对象。在创建项目标签的 **CTreeItem::CreateIcon** ()方法中采用的也是同样的原则，

在创建之后，对象会具有状态，然后通过 **item\_state** 值发给住方法，而它可以用于控制在树形视图创建之后有哪些项目应该展开。

```
//+------------------------------------------------------------------+
//| 创建箭头 (下拉列表标记)                       |
//+------------------------------------------------------------------+
#resource "\\Images\\EasyAndFastGUI\\Controls\\RightTransp_black.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\RightTransp_white.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\RightTransp_rotate_black.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\RightTransp_rotate_white.bmp"
//---
bool CTreeItem::CreateArrow(void)
  {
//--- 计算坐标
   int x =CElement::X()+m_arrow_x_offset;
   int y =CElement::Y()+2;
//--- 保存坐标用于计算队列中之后创建元件对象的坐标
   m_arrow.X(x);
   m_arrow.Y(y);
//--- 如果没有下拉列表，退出
   if(m_item_type!=TI_HAS_ITEMS)
      return(true);
//--- 创建对象名称
   string name=CElement::ProgramName()+"_"+(string)CElement::Index()+"_treeitem_arrow_"+(string)m_list_index+"__"+(string)CElement::Id();
//--- 设置默认图标
   if(m_item_arrow_file_on=="")
      m_item_arrow_file_on="Images\\EasyAndFastGUI\\Controls\\RightTransp_rotate_black.bmp";
   if(m_item_arrow_file_off=="")
      m_item_arrow_file_off="Images\\EasyAndFastGUI\\Controls\\RightTransp_black.bmp";
   if(m_item_arrow_selected_file_on=="")
      m_item_arrow_selected_file_on="Images\\EasyAndFastGUI\\Controls\\RightTransp_rotate_white.bmp";
   if(m_item_arrow_selected_file_off=="")
      m_item_arrow_selected_file_off="Images\\EasyAndFastGUI\\Controls\\RightTransp_white.bmp";
//--- 设置对象
   if(!m_arrow.Create(m_chart_id,name,m_subwin,x,y))
      return(false);
//--- 设置属性
   m_arrow.BmpFileOn("::"+m_item_arrow_file_on);
   m_arrow.BmpFileOff("::"+m_item_arrow_file_off);
   m_arrow.State(m_item_state);
   m_arrow.Corner(m_corner);
   m_arrow.GetInteger(OBJPROP_ANCHOR,m_anchor);
   m_arrow.Selectable(false);
   m_arrow.Z_Order(m_arrow_zorder);
   m_arrow.Tooltip("\n");
//--- 与表单边缘的距离
   m_arrow.XGap(x-m_wnd.X());
   m_arrow.YGap(y-m_wnd.Y());
//--- 保存对象指针
   CElement::AddToArray(m_arrow);
   return(true);
  }
```

我们还将需要方法用于管理树形视图在创建之后的大小(宽度)和颜色，树形视图的设置与其级别列表部分分开实现，这可以使用在属性视图右侧显示选中项目的内容的模式，换句话说，可以在这个区域中显示树形视图列表中选中项目中所包含的项目的列表。当您在这些区域的边缘移动鼠标时，还可以按住鼠标左键，(同时)改变树形视图区域和内容列表区域的宽度。

当改变这些区域的大小时，(1) 内容列表项目的对象坐标 **X** 　和 (2) 两个列表中项目对象的宽度都会更新。所以，我们在这里使用 **CEdit** 对象, 而不是 **CLabel** 类型来显示项目的文字。如果您使用 **CLabel** 类型的对象，那么当您改变列表区域的大小时，您可能遇到问题，文字标签可能会超出表单(窗口)的边界。

为了更新 **X** 坐标, 我们写下 **CTreeItem::UpdateX** ()方法，为了设置 **X** 坐标, 也可以使用这个方法，在这种情况下，所有的计算都在树形视图类内部进行，我们晚点会处理这件事。

```
class CTreeItem : public CElement
  {
public:
   void              UpdateX(const int x);
  };
//+------------------------------------------------------------------+
//| 更新X坐标　　　                          |
//+------------------------------------------------------------------+
void CTreeItem::UpdateX(const int x)
  {
//--- 更新通用坐标以及距离边缘的偏移
   CElement::X(x);
   CElement::XGap(CElement::X()-m_wnd.X());
//--- 坐标和背景的偏移
   m_area.X_Distance(CElement::X());
   m_area.XGap(CElement::X()-m_wnd.X());
//--- 坐标和箭头的偏移
   int l_x=CElement::X()+m_arrow_x_offset;
   m_arrow.X(l_x);
   m_arrow.X_Distance(l_x);
   m_arrow.XGap(l_x-m_wnd.X());
//--- 坐标和图标的偏移
   l_x=m_arrow.X()+17;
   m_icon.X(l_x);
   m_icon.X_Distance(l_x);
   m_icon.XGap(l_x-m_wnd.X());
//--- 坐标和文字标签的偏移
   l_x=(m_icon_file=="")? m_icon.X() : m_icon.X()+m_label_x_gap;
   m_label.X(l_x);
   m_label.X_Distance(l_x);
   m_label.XGap(l_x-m_wnd.X());
  }
```

如需修改列表项目的宽度，应该使用 **CTreeItem::UpdateWidth** ()方法:

```
class CTreeItem : public CElement
  {
public:
   void              UpdateWidth(const int width);
  };
//+------------------------------------------------------------------+
//| 更新宽度                              |
//+------------------------------------------------------------------+
void CTreeItem::UpdateWidth(const int width)
  {
//--- 背景宽度
   CElement::XSize(width);
   m_area.XSize(width);
   m_area.X_Size(width);
//--- 文字标签宽度
   int w=CElement::X2()-m_label.X()-1;
   m_label.XSize(w);
   m_label.X_Size(w);
  }
```

除了更新 **X** 坐标和项目的宽度, 还需要一个更新 **Y** 坐标的方法。在两种列表的实现中假定，当实现 **CTreeView** 元件时，列表中的所有项目都是立刻创建好的，只是它们显示的数量不同，这与之前系列文章中讨论过的 **CListView**, **CLabelsTable** 和 **CTable** 类型不同。当项目不应该显示在列表区域的时候，会把它们隐藏起来。当上下滚动列表或者收起/展开局部列表项目时，只会处理项目是否可见，而不是通常情况下更新对象的几个参数。当需要隐藏某个时刻不要显示的项目时， **Y** 坐标在显示的时候也要更新。为此，我们需要写下 **CTreeItem::UpdateY** ()方法, 以下就是方法的代码。

```
class CTreeItem : public CElement
  {
public:
   void              UpdateY(const int y);
  };
//+------------------------------------------------------------------+
//| 更新Y坐标                             |
//+------------------------------------------------------------------+
void CTreeItem::UpdateY(const int y)
  {
//--- 更新通用坐标以及距离边缘的偏移
   CElement::Y(y);
   CElement::YGap(CElement::Y()-m_wnd.Y());
//--- 坐标和背景的偏移
   m_area.Y_Distance(CElement::Y());
   m_area.YGap(CElement::Y()-m_wnd.Y());
//--- 坐标和箭头的偏移
   int l_y=CElement::Y()+2;
   m_arrow.Y(l_y);
   m_arrow.Y_Distance(l_y);
   m_arrow.YGap(l_y-m_wnd.Y());
//--- 坐标和图标的偏移
   l_y=CElement::Y()+2;
   m_icon.Y(l_y);
   m_icon.Y_Distance(l_y);
   m_icon.YGap(l_y-m_wnd.Y());
//--- 坐标和文字标签的偏移
   l_y=CElement::Y()+m_label_y_gap;
   m_label.Y(l_y);
   m_label.Y_Distance(l_y);
   m_label.YGap(l_y-m_wnd.Y());
  }
```

项目颜色的管理将在树形视图类(**CTreeView**)中进行, 并且需要以下方法:

- 根据指示的状态改变项目的颜色;
- 当鼠标掠过时改变对象的颜色。

这些方法的代码如下所示:

```
class CTreeItem : public CElement
  {
public:
   //--- 根据突出显示的状态改变项目的颜色
   void              HighlightItemState(const bool state);
   //--- 当鼠标光标掠过时改变颜色
   void              ChangeObjectsColor(void);
  };
//+------------------------------------------------------------------+
//| 根据突出显示的状态改变项目颜色　　　　　　　　　　　　　      |
//+------------------------------------------------------------------+
void CTreeItem::HighlightItemState(const bool state)
  {
   m_area.BackColor((state)? m_item_back_color_selected : m_item_back_color);
   m_label.BackColor((state)? m_item_back_color_selected : m_item_back_color);
   m_label.BorderColor((state)? m_item_back_color_selected : m_item_back_color);
   m_label.Color((state)? m_item_text_color_selected : m_item_text_color);
   m_arrow.BmpFileOn((state)? "::"+m_item_arrow_selected_file_on : "::"+m_item_arrow_file_on);
   m_arrow.BmpFileOff((state)? "::"+m_item_arrow_selected_file_off : "::"+m_item_arrow_file_off);
  }
//+------------------------------------------------------------------+
//| 当鼠标光标掠过时改变对象的颜色　　　　　　　　　　　　　      |
//+------------------------------------------------------------------+
void CTreeItem::ChangeObjectsColor(void)
  {
   if(CElement::MouseFocus())
     {
      m_area.BackColor(m_item_back_color_hover);
      m_label.BackColor(m_item_back_color_hover);
      m_label.BorderColor(m_item_back_color_hover);
      m_label.Color(m_item_text_color_hover);
     }
   else
     {
      m_area.BackColor(m_item_back_color);
      m_label.BackColor(m_item_back_color);
      m_label.BorderColor(m_item_back_color);
      m_label.Color(m_item_text_color);
     }
  }
```

另外，我们还将探讨用于在图形界面中创建鼠标光标指针的类。

### 用于创建鼠标指针的 CPointer 类

树形视图元件包含两个区域，左边的区域是一个分级列表，在右边显示的是树形视图中突出显示的项目的内容。以下将提供更加详细的内容，我们现在集中精力于改变这些区域的大小(宽度)，就像在 **Windows资源管理器(Windows Explorer)** 中一样。当鼠标光标掠过树形视图和内容区域的边界时，指针的形状会变成双向的箭头。让我们在开发库中创建 **CPointer** 类，它具有管理鼠标光标指针的功能，在当前版本的终端中，不能使用MQL替换鼠标的系统光标，但是我们可以使用用户图标，使图形界面对用户更加友好。

**CPointer** 类和库中的其他元件一样，也将继承于 **CElement** 类，您可以只在需要用到的时候包含哪些元件，不需要在表单中包含指针类，因为这种类型的对象和其它没有关联，在元件的基类中不需要它，只是由控件类来决定是否需要在类中包含它。

在开发库的文件所在目录中，我们创建 **Pointer.mqh** 文件，其中含有 **CPointer** 类，为了创建指针，我们使用的对象类型是 **CBmpLabel** 。 **CBmpLabel** 类位于 **Objects.mqh** 文件中，它的内容在系列文章的第一部分已经看过。

```
//+------------------------------------------------------------------+
//|                                                      Pointer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
//+------------------------------------------------------------------+
//| 用于创建鼠标光标指针的类　                     |
//+------------------------------------------------------------------+
class CPointer : public CElement
  {
private:
   //--- 用于创建元件的对象
   CBmpLabel         m_pointer_bmp;
   /---
public:
                     CPointer(void);
                    ~CPointer(void);
   //---
public:
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CPointer::CPointer(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                              |
//+------------------------------------------------------------------+
CPointer::~CPointer(void)
  {
  }
```

在当前版本的开发库中，我们可以设置四种类型的鼠标光标指针。为了方便使用，我们在 **Enums.mqh** 文件中加上 **ENUM\_MOUSE\_POINTER** 枚举(参见以下的代码). 除了四种预先设定的类型，我们还可以选择自定义类型(**MP\_CUSTOM**)。

```
//+------------------------------------------------------------------+
//| 指针类型的枚举　                          |
//+------------------------------------------------------------------+
enum ENUM_MOUSE_POINTER
  {
   MP_CUSTOM     =0,
   MP_X_RESIZE   =1,
   MP_Y_RESIZE   =2,
   MP_XY1_RESIZE =3,
   MP_XY2_RESIZE =4
  };
```

对以上列表的描述:

- **MP\_CUSTOM** — 自定义类型；
- **MP\_X\_RESIZE** — 可修改水平方向的大小；
- **MP\_Y\_RESIZE** — 可修改垂直方向大小；
- **MP\_XY1\_RESIZE** — 可在角 **1** 上修改大小；
- **MP\_XY2\_RESIZE** — 可在角 **2** 上修改大小.

在创建鼠标光标之前，只要设置它的类型，就会从元件的资源中选择预先设置好的图形对象作为对应的图标。这些图标的档案可以下载到您的电脑上，请在本文末尾的附件中查找它们。

```
//--- 资源
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_x_resize.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_x_resize_blue.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_y_resize.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_y_resize_blue.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_xy1_resize.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_xy1_resize_blue.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_xy2_resize.bmp"
#resource "\\Images\\EasyAndFastGUI\\Controls\\pointer_xy2_resize_blue.bmp"
```

如果您想使用您自己的图标设置指针，就从 **ENUM\_MOUSE\_POINTER** 枚举中选择 **MP\_CUSTOM** 类型，并使用 **CPointer::FileOn** () 和 **CPointer::FileOff** () 方法来指定图标的路径。

```
class CPointer : public CElement
  {
private:
   //--- 指针的图标
   string            m_file_on;
   string            m_file_off;
   //--- 指针的类型
   ENUM_MOUSE_POINTER m_type;
   //---
public:
   //--- 设置指针的标签
   void              FileOn(const string file_path)       { m_file_on=file_path;         }
   void              FileOff(const string file_path)      { m_file_off=file_path;        }
   //--- 返回和设置指针的类型
   ENUM_MOUSE_POINTER Type(void)                    const { return(m_type);              }
   void              Type(ENUM_MOUSE_POINTER type)        { m_type=type;                 }
  };
```

另外，这里还需要更新坐标以及返回/设置指针状态的方法:

```
class CPointer : public CElement
  {
public:
   //---返回和设置指针的状态
   bool              State(void)                    const { return(m_pointer_bmp.State()); }
   void              State(const bool state)              { m_pointer_bmp.State(state);    }
   //--- 更新坐标
   void              UpdateX(const int x)                 { m_pointer_bmp.X_Distance(x);   }
   void              UpdateY(const int y)                 { m_pointer_bmp.Y_Distance(y);   }
  };
```

指针类的构造函数以 **MP\_X\_RESIZE** 类型为默认值:

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CPointer::CPointer(void) : m_file_on(""),
                           m_file_off(""),
                           m_type(MP_X_RESIZE)
  {
  }
```

我们需要一个方法，在创建指针之前，根据设置的类型设置元件的图标，我们将会写一个 **CPointer::SetPointerBmp** ()方法完成这个目标。如果选择了用户自定义类型(**MP\_CUSTOM**), 而没有指明图标的路径，就会在记录中显示相关的信息。

```
class CPointer : public CElement
  {
private:
   //--- 设置鼠标指针的图标
   void              SetPointerBmp(void);
  };
//+------------------------------------------------------------------+
//| 根据指针类型设置指针的图标　　　　　　　　　　　          |
//+------------------------------------------------------------------+
void CPointer::SetPointerBmp(void)
  {
   switch(m_type)
     {
      case MP_X_RESIZE :
         m_file_on  ="Images\\EasyAndFastGUI\\Controls\\pointer_x_resize_blue.bmp";
         m_file_off ="Images\\EasyAndFastGUI\\Controls\\pointer_x_resize.bmp";
         break;
      case MP_Y_RESIZE :
         m_file_on  ="Images\\EasyAndFastGUI\\Controls\\pointer_y_resize_blue.bmp";
         m_file_off ="Images\\EasyAndFastGUI\\Controls\\pointer_y_resize.bmp";
         break;
      case MP_XY1_RESIZE :
         m_file_on  ="Images\\EasyAndFastGUI\\Controls\\pointer_xy1_resize_blue.bmp";
         m_file_off ="Images\\EasyAndFastGUI\\Controls\\pointer_xy1_resize.bmp";
         break;
      case MP_XY2_RESIZE :
         m_file_on  ="Images\\EasyAndFastGUI\\Controls\\pointer_xy2_resize_blue.bmp";
         m_file_off ="Images\\EasyAndFastGUI\\Controls\\pointer_xy2_resize.bmp";
         break;
     }
//--- 如果是自定义类型 (MP_CUSTOM)
   if(m_file_on=="" || m_file_off=="")
      ::Print(__FUNCTION__," > 应该为光标指针设置两个图标!");
  }
```

我们还需要一个公有方法 **CPointer::CreatePointer** ()来创建一个元件，它的代码在下面展示。元件的索引将会参与构建图形对象的名称，它的值是在 **CPointer** 类的构造函数中设置的，默认值为0。还需要可以在一个元件中创建多个 **CPointer** 类型的对象，并把它们与元件相关联以完成各种任务。

```
class CPointer : public CElement
  {
public:
   //--- 创建指标标签
   bool              CreatePointer(const long chart_id,const int subwin);
  };
//+------------------------------------------------------------------+
//| 创建指针                             |
//+------------------------------------------------------------------+
bool CPointer::CreatePointer(const long chart_id,const int subwin)
  {
//--- 创建对象名称
   string name=CElement::ProgramName()+"_pointer_bmp_"+(string)CElement::Index()+"__"+(string)CElement::Id();
//--- 设置指针的图标
   SetPointerBmp();
//--- 创建一个对象
   if(!m_pointer_bmp.Create(m_chart_id,name,m_subwin,0,0))
      return(false);
//--- 设置属性
   m_pointer_bmp.BmpFileOn("::"+m_file_on);
   m_pointer_bmp.BmpFileOff("::"+m_file_off);
   m_pointer_bmp.Corner(m_corner);
   m_pointer_bmp.Selectable(false);
   m_pointer_bmp.Z_Order(0);
   m_pointer_bmp.Tooltip("\n");
//--- 隐藏对象
   m_pointer_bmp.Timeframes(OBJ_NO_PERIODS);
   return(true);
  }
```

现在我们已经有了用于创建树形视图的所有元件，我们可以继续在创建它之前学习更多 **CTreeView** 类的内容。

### 用于创建树形视图的 CTreeView 类的开发

我们创建 **TreeView.mqh** 文件，其中含有 **CTreeView** 类和它的标准方法，就和所有库的元件一样，并且在 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "TreeView.mqh"
```

让我们列出树形视图包含的组成元件：

1. 树形视图的背景
2. 树形视图的项目列表
3. 树形视图的垂直滚动条
4. 内容列表的背景
5. 内容项目的列表
6. 内容列表的水平滚动条
7. 用于追踪树形视图区域和内容区域宽度变化的鼠标光标指针

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_0.rne)
![[Pasted image 20260628222936.png]]
图 4. 树形视图的组成部分

在创建之后鼠标光标箭头的图标会被隐藏，只有当鼠标光标在列表连接区域的边界上掠过时才会出现。

为了创建树形视图元件，将会需要7个 **私有(private)** 方法和1个 **公有(public)** 方法:

```
class CTreeView : public CElement
  {
private:
   //--- 用于创建元件的对象
   CRectLabel        m_area;
   CRectLabel        m_content_area;
   CTreeItem         m_items[];
   CTreeItem         m_content_items[];
   CScrollV          m_scrollv;
   CScrollV          m_content_scrollv;
   CPointer          m_x_resize;
   //---
public:
   //--- 用于创建树形视图的方法
   bool              CreateTreeView(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateContentArea(void);
   bool              CreateItems(void);
   bool              CreateScrollV(void);
   bool              CreateContentItems(void);
   bool              CreateContentScrollV(void);
   bool              CreateXResizePointer(void);
  };
```

作为示例，我们将只提供其中一个方法的代码 – 用于创建鼠标光标指针的 **CTreeView::CreateXResizePointer** () 方法 (参加下方代码)。我们需要注意以下的细节:

- 如果以下条件之一是正确的，光标指针就不会被创建:
- 修改列表宽度的模式被禁用；
	- 启用了页面项目模式；
- 指针的偏移将会根据鼠标的系统光标来计算(此元件类型没有与窗口相关联，和其它元件不同)。
- 如果元件需要多个指针，它们中的每一个都需要自己的元件索引集。因为当前版本的树形视图将只会使用1个光标指针，这个属性在这里可以跳过，因为它在指针的构造函数中默认被初始化为 **0** 。
- 需要指明指针相关联的元件的ID,这是因为需要在使用光标指针时避免不同元件中图形对象名称的冲突。

```
//+------------------------------------------------------------------+
//| 创建用于修改宽度的光标指针　　　                  |
//+------------------------------------------------------------------+
bool CTreeView::CreateXResizePointer(void)
  {
//--- 如果内容区域的宽度不需要改变或者
//  启用了页面项目模式，则退出
   if(!m_resize_content_area_mode || m_tab_items_mode)
      return(true);
//--- 设置属性
   m_x_resize.XGap(12);
   m_x_resize.YGap(9);
   m_x_resize.Id(CElement::Id());
   m_x_resize.Type(MP_X_RESIZE);
//--- 创建元件
   if(!m_x_resize.CreatePointer(m_chart_id,m_subwin))
      return(false);
//---
   return(true);
  }
```

在描述 **CTreeView** 类的其他方法之前，让我们看一下树形视图元件需要哪些功能。我们是为了创建这个元件而实现这个类，所以我们最终可以针对各种目标创建分等级的列表。

比如，您应该记住一些特性，在未来开发文件导航器的时候在类中使用。请注意在 **Windows 资源管理器** 中的文件导航是如何工作的，如果树形视图显示在窗口的左边 (在 **Windows 7** 中它被称为"导航面板"), 您将只能看到文件夹，而没有文件，所有的文件都显示在Windows资源管理器的内容区域 (参见下方的屏幕截图)。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_1.rne)
![[Pasted image 20260628223046.png]]
图 5. Windows 7 中的文件导航器。树形视图在左侧，内容区域在右侧。

然而，在树形视图中，除了文件夹之外还经常需要显示文件。例如，您可以设置，当在树形视图中选择一个文件时，它的内容会在右侧区域中显示，所以，如果 **CTreeView** 类型的元件类用于创建文件导航器，库的用户应该可以选择两种模式，在树形视图中: (1) 显示文件夹和文件 或者 (2) 只显示文件夹。因此，我们将会把 **ENUM\_FILE\_NAVIGATOR\_MODE** 枚举加到 Enums.mqh 文件中(参见以下代码)。

```
//+------------------------------------------------------------------+
//| 文件导航器的模式枚举                        |
//+------------------------------------------------------------------+
enum ENUM_FILE_NAVIGATOR_MODE
  {
   FN_ALL          =0,
   FN_ONLY_FOLDERS =1
  };
```

并不是一直需要在内容区域中显示项目的内容，所以我们需要有一个选项来禁用它。比如，把树形视图用在可以连接一组控件元件的页面中，就像文章 [图形界面 VII: 页面控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523) 中那样，可能会很有用。

另外，我们还会提供额外的模式用于更加明确地设置树形视图元件。以下是当前版本模式的完整列表。

- 文件导航器模式
- 当鼠标光标掠过时的突出显示模式
- 在内容区域中显示项目内容的模式
- 修改内容与区宽度的模式
- 页面项目的模式

为了设置元件模式，在创建之前我们应当应用以下列表中提供的模式:

```
class CTreeView : public CElement
  {
private:
   //--- 文件导航器模式
   ENUM_FILE_NAVIGATOR_MODE m_file_navigator_mode;
   //--- 当鼠标光标掠过时突出显示的模式
   bool              m_lights_hover;
   //--- 在工作区域内显示项目内容的模式
   bool              m_show_item_content;
   //--- 修改列表宽度的模式
   bool              m_resize_list_area_mode;
   //--- 页面项目的模式
   bool              m_tab_items_mode;
   //---
public:
   //--- (1) 文件导航器模式, (2) 当鼠标光标掠过时突出显示的模式, 
   //    (3) 显示项目内容的模式, (4) 修改列表宽度的模式, (5) 页面项目的模式
   void              NavigatorMode(const ENUM_FILE_NAVIGATOR_MODE mode) { m_file_navigator_mode=mode;                   }
   void              LightsHover(const bool state)                      { m_lights_hover=state;                         }
   void              ShowItemContent(const bool state)                  { m_show_item_content=state;                    }
   void              ResizeListAreaMode(const bool state)               { m_resize_list_area_mode=state;                }
   void              TabItemsMode(const bool state)                     { m_tab_items_mode=state;                       }
  };
```

以下列表包含了可以用于设置元件外观的属性。

- 树形视图区域的宽度
- 背景颜色
- 背景边框的颜色
- 内容区域的宽度
- 列表中项目的高度
- 不同状态下背景的颜色
- 不同状态下项目文字的颜色
- 指示项目内容的图标 (默认图标是指向右方的箭头)

```
class CTreeView : public CElement
  {
private:
   //--- 树形视图区域的宽度
   int               m_treeview_area_width;
   //--- 背景和边框的颜色
   color             m_area_color;
   color             m_area_border_color;
   //--- 内容区域的宽度
   int               m_content_area_width;
   //--- 项目的高度
   int               m_item_y_size;
   //--- 不同状态下项目的颜色
   color             m_item_back_color_hover;
   color             m_item_back_color_selected;
   //--- 不同状态下的文字颜色
   color             m_item_text_color;
   color             m_item_text_color_hover;
   color             m_item_text_color_selected;
   //--- 箭头的图标
   string            m_item_arrow_file_on;
   string            m_item_arrow_file_off;
   string            m_item_arrow_selected_file_on;
   string            m_item_arrow_selected_file_off;
   //---
public:
   //--- (1) 项目的高度, (2) 树形视图的宽度 和 (3) 内容列表的宽度
   void              ItemYSize(const int y_size)                        { m_item_y_size=y_size;                         }
   void              TreeViewAreaWidth(const int x_size)                { m_treeview_area_width=x_size;                 }
   void              ContentAreaWidth(const int x_size)                 { m_content_area_width=x_size;                  }
   //--- 背景和元件背景边框的颜色
   void              AreaBackColor(const color clr)                     { m_area_color=clr;                             }
   void              AreaBorderColor(const color clr)                   { m_area_border_color=clr;                      }
   //--- 不同状态下项目的颜色
   void              ItemBackColorHover(const color clr)                { m_item_back_color_hover=clr;                  }
   void              ItemBackColorSelected(const color clr)             { m_item_back_color_selected=clr;               }
   //--- 不同状态下的文字颜色
   void              ItemTextColor(const color clr)                     { m_item_text_color=clr;                        }
   void              ItemTextColorHover(const color clr)                { m_item_text_color_hover=clr;                  }
   void              ItemTextColorSelected(const color clr)             { m_item_text_color_selected=clr;               }
   //--- 项目箭头的图标
   void              ItemArrowFileOn(const string file_path)            { m_item_arrow_file_on=file_path;               }
   void              ItemArrowFileOff(const string file_path)           { m_item_arrow_file_off=file_path;              }
   void              ItemArrowSelectedFileOn(const string file_path)    { m_item_arrow_selected_file_on=file_path;      }
   void              ItemArrowSelectedFileOff(const string file_path)   { m_item_arrow_selected_file_off=file_path;     }
  };
```

我们将需要在树形视图和内容区域列表中需要突出显示项目的索引，并且加以保存。在创建树形视图之前使用 **CTreeView::SelectedItemIndex** ()方法, 我们可以选择在创建之后需要被突出显示的项目。

```
class CTreeView : public CElement
  {
private:
   //--- 列表中选中项目的索引
   int               m_selected_item_index;
   int               m_selected_content_item_index;
   //---
public:
   //--- (1) 根据索引选择项目 以及(2)返回所选项目的索引
   void              SelectedItemIndex(const int index)                 { m_selected_item_index=index;              }
   int               SelectedItemIndex(void)                      const { return(m_selected_item_index);            }
  };
```

### 构建元件列表的参数

在创建 **CTreeView** 类型的元件之前，首先，我们需要创建一个树形视图。我们将需要一个方法来把一定参数的项目加到列表中，它们将用于帮助程序在使用树形视图的过程中按顺序安排项目，缺少一些参数的话，就无法得到分级的顺序，以下展示了这些参数的完整列表。

- 在列表中的总的索引

> 所有的树形视图项目在循环中按顺序设置，并且为每个项目设置当前的迭代索引。当使用元件时，不论当前时刻用户如何扩展树形视图，每个项目的总列表索引都会一直保持不变，
> 
> 例如，对于项目 **A**, **B**, **C**, **D**, **E** 和 **F** ，它们对应的总列表索引将是 **0**, **1**, **2**, **3**, **4** 和 **5** 。举例来说， **B** 点和 **C** 点在 **A** 项中, 而项目 **E** 在项目 **D** 中。为了演示的目的，以下显示了树形视图状态的两个选项。左边的图片 (1) 是一个扩展过的索引为连续顺序的列表。右边的图片 (2) 显示了在项目的列表中， **A** 和 **D** 包含了 **B**, **C** 和 **E** 项目, 它们被收起来了，而它们在树形视图的构建和初始化时赋予的索引已经保存好了。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_6.rne)
![[Pasted image 20260628223126.png]]
图 6. 左边 1) – 完全展开的列表. 右边 2) – 收起来的列表.

- 之前节点列表的总索引

> 例如，在路由目录的项目中没有前一节点，所以它们的参数值为-1，如果项目有内容(局部项目列表), 那么在设置时会给所有的元件设置总的索引。
> 
> 以下的示意图显示，根目录的 **A**, **D** 和 **H** 项目的赋值为 **\-1** ，而 **B** 点和 **C** 点的总索引\[0\]，为前一节点 **A**, 而对于 **E** 点, **F** 点和 **G** 点 – 总索引\[3\]，前一节点是 **D** 。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_7.rne)
![[Pasted image 20260628223140.png]]
图 7. 一个节点的所有子元件都有一个列表赋予的总索引。

- 项目的描述(项目中显示的文字)

> 例如，它可能是文件夹和文件的名称(如果创建的是文件导航器)或者种类或者子类的名称，某些元件组的名称(如果创建了"页面"元件)。

- 节点等级的编号

> 从0开始计数，也就是说，根目录的点的数值为 **0** 。而且，在增加嵌套等级时，嵌套项目的值会增加1个单位，为了更好地理解，请参照下方的图片。项目的列中在水平尺度上有它们级别的编号。 **A**, **D** 和 **J** 节点的级别数值为 **0** 。项目 **B**, **C**, **E**, **I** 和 **K** 的数值为 **1**, 而项目 **F**, **G** 和 **H** – 数值为 **2** 。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_4.rne)
![[Pasted image 20260628223200.png]]
图 8. 节点编号与嵌套级别相关联。

- 局部索引

> 如果项目有内容(局部元件列表), 则这个列表会拥有从0开始的自定义ID，局部列表索引在下面的概要图中以蓝色数字显示。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_5.rne)
![[Pasted image 20260628223230.png]]
图 9. 局部列表的索引。

- 前一节点的局部索引

> 这里使用的是与前一节点总索引相同的原则，在根目录的项目没有前一节点，所以这个参数的值等于 **\-1** ，有前一节点的项目有其局部索引，在下图中前一节点的局部索引使用红色做了标记。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_%3A.rne)
![[Pasted image 20260628223241.png]]
图 10. 前一节点的局部索引。

- 项目的数量(节点局部列表的数组大小)。

> 在 **CTreeItem** 类中项目类型(来自 **ENUM\_TYPE\_TREE\_ITEM** 枚举)的赋值依赖于这个值。以下的概要图中有一些项目，其中都含有局部列表，以数字形式提供，它显示了，项目 **A**, **D**, **E** 和 **J** 有内容(对应着 **2**, **2**, **3** 和 **1**), 在点 **B**, **C**, **F**, **G**, **H**, **I** 和 **K** 是空的 (0)。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_%3B.rne)
![[Pasted image 20260628223252.png]]
图 11. 节点的局部列表中元件的数量。

- 项目的状态。

> 对于局部列表(内容), 它可能是收起的/展开的。可以允许指示在树形视图创建之后，有哪些应该是展开的。
> 
> 在示例中，所有用于定义树形视图中项目的关键参数现在都显示在单独的总结表格中(参见以下的图片示例)。为了更直接的解释，所有参数的值都以不同的颜色做了标记。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_30%2Cplg)
![[Pasted image 20260628223304.png]]
图 12. 树形视图中定义项目的关键(重要)参数总结表格。

当开发用于创建文件导航器的类时，所有这些参数必须通过读取终端中文件目录的等级结构而自动计算。这将在第8部分的下一章中详细展示，但是为了在树形视图类(**CTreeView**)中适应文件导航器的创建，其中有些方面已经讲到了，比如，除了节点局部列表的项目数量之外，当创建文件导航器时，必须指出多少个项目是文件夹。另外，每个项目都需要参数用来定义它是否是一个文件夹。在文件导航器的上下文中，项目没有局部列表并不能说明它是一个文件，

但是当创建一个简单树形视图时，它的结构需要独立构建。在任何情况下，这两种情况下都可以用 **CTreeView::AddItem** ()方法，它可以在树形视图列表中增加一个项目，指定传入的参数。以下代码展示了这个方法的代码以及保存所有项目参数的数组列表，请注意，可以为每个项目设置唯一的图标。

```
class CTreeView : public CElement
  {
private:
   //--- 所有树形视图项目的数组 (通用列表)
   int               m_t_list_index[];
   int               m_t_prev_node_list_index[];
   string            m_t_item_text[];
   string            m_t_path_bmp[];
   int               m_t_item_index[];
   int               m_t_node_level[];
   int               m_t_prev_node_item_index[];
   int               m_t_items_total[];
   int               m_t_folders_total[];
   bool              m_t_item_state[];
   bool              m_t_is_folder[];
   //---
public:
   //--- 在树形视图中增加项目u
   void              AddItem(const int list_index,const int list_id,const string item_name,const string path_bmp,const int item_index,
                             const int node_number,const int item_number,const int items_total,const int folders_total,const bool item_state,const bool is_folder=true);
  };
//+------------------------------------------------------------------+
//| 在树形视图的通用数组中增加项目                       |
//+------------------------------------------------------------------+
void CTreeView::AddItem(const int list_index,const int prev_node_list_index,const string item_text,const string path_bmp,const int item_index,
                        const int node_level,const int prev_node_item_index,const int items_total,const int folders_total,const bool item_state,const bool is_folder)
  {
//--- 给数组大小增加一个元素
   int array_size =::ArraySize(m_items);
   m_items_total  =array_size+1;
   ::ArrayResize(m_items,m_items_total);
   ::ArrayResize(m_t_list_index,m_items_total);
   ::ArrayResize(m_t_prev_node_list_index,m_items_total);
   ::ArrayResize(m_t_item_text,m_items_total);
   ::ArrayResize(m_t_path_bmp,m_items_total);
   ::ArrayResize(m_t_item_index,m_items_total);
   ::ArrayResize(m_t_node_level,m_items_total);
   ::ArrayResize(m_t_prev_node_item_index,m_items_total);
   ::ArrayResize(m_t_items_total,m_items_total);
   ::ArrayResize(m_t_folders_total,m_items_total);
   ::ArrayResize(m_t_item_state,m_items_total);
   ::ArrayResize(m_t_is_folder,m_items_total);
//--- 保存传入参数的数值
   m_t_list_index[array_size]           =list_index;
   m_t_prev_node_list_index[array_size] =prev_node_list_index;
   m_t_item_text[array_size]            =item_text;
   m_t_path_bmp[array_size]             =path_bmp;
   m_t_item_index[array_size]           =item_index;
   m_t_node_level[array_size]           =node_level;
   m_t_prev_node_item_index[array_size] =prev_node_item_index;
   m_t_items_total[array_size]          =items_total;
   m_t_folders_total[array_size]        =folders_total;
   m_t_item_state[array_size]           =item_state;
   m_t_is_folder[array_size]            =is_folder;
  }
```

在创建一个元件之前，可以设置它的参数，并指定树形区域和内容区域的初始宽度。在默认情况下，类中内容区域宽度栏位的数值是使用 [WRONG\_VALUE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Flaoefcmnqtcnvs-ovhgraolsvaltq) 初始化的(参见下方代码)，这就是说，如果内容区域的宽度没有设置，那么有三个元件组件将不会创建: (1) 内容区域的背景, (2) 此区域的项目数组 以及 (3) 此区域中列表的滚动条。h即使在参数中使用了"在树形视图中显示所选项目的内容"模式，也不会创建。所以，您可以通过保留背景而禁止列表显示，但是，反过来就是不行的。

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CTreeView::CTreeView(void) : m_treeview_area_width(180),
                             m_content_area_width(WRONG_VALUE),
                             m_item_y_size(20),
                             m_visible_items_total(13),
                             m_tab_items_mode(false),
                             m_lights_hover(false),
                             m_show_item_content(true)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击优先级
   m_zorder=0;
  }
```

内容区域的项目列表将需要一个独立的动态数组列表，它不会有树形视图那么大，因为它不需要遵从级别的顺序。为了创建这样的列表，只需要3个参数。

- 内容区域列表的总索引
- 树形视图的总索引
- 项目描述(显示的文字)

```
class CTreeView : public CElement
  {
private:
   //--- 用于包含树形视图中所选项目的列表 (完整列表)
   int               m_c_list_index[];
   int               m_c_tree_list_index[];
   string            m_c_item_text[];
  };
```

设置这些数组的大小以及初始化过程是在创建内容列表的方法中进行的 - **CTreeView::CreateContentItems** ()。除了那些属于根目录的项目，所有其它项目都将加到数组中, 因为根节点之上没有可能在树形视图中选择的节点。在此，在方法的开始，您可以看到会进行设置模式的检查，内容区域的创建会依赖它。

```
//+------------------------------------------------------------------+
//| 创建所选择项目的内容列表                       |
//+------------------------------------------------------------------+
bool CTreeView::CreateContentItems(void)
  {
//--- 如果项目内容不需要显示或者
//    内容区域不需要显示
   if(!m_show_item_content || m_content_area_width<0)
      return(true);
//--- 坐标和宽度
   int x =m_content_area.X()+1;
   int y =CElement::Y()+1;
   int w =m_content_area.X2()-x-1;
//--- 项目计数器
   int c=0;
//--- 
   int items_total=::ArraySize(m_items);
   for(int i=0; i<items_total; i++)
     {
      //--- 来自根目录的项目不会进入此列表，
      //    所以，如果节点级别小于1，我们按以下继续
      if(m_t_node_level[i]<1)
         continue;
      //--- 增加数组的大小，增加一个单位
      int new_size=c+1;
      ::ArrayResize(m_content_items,new_size);
      ::ArrayResize(m_c_item_text,new_size);
      ::ArrayResize(m_c_tree_list_index,new_size);
      ::ArrayResize(m_c_list_index,new_size);
      //--- 计算Y坐标
      y=(c>0)? y+m_item_y_size-1 : y;
      //--- 传入面板对象
      m_content_items[c].WindowPointer(m_wnd);
      //--- 在创建之前设置属性
      m_content_items[c].Index(1);
      m_content_items[c].Id(CElement::Id());
      m_content_items[c].XSize(w);
      m_content_items[c].YSize(m_item_y_size);
      m_content_items[c].IconFile(m_t_path_bmp[i]);
      m_content_items[c].ItemBackColor(m_area_color);
      m_content_items[c].ItemBackColorHover(m_item_back_color_hover);
      m_content_items[c].ItemBackColorSelected(m_item_back_color_selected);
      m_content_items[c].ItemTextColor(m_item_text_color);
      m_content_items[c].ItemTextColorHover(m_item_text_color_hover);
      m_content_items[c].ItemTextColorSelected(m_item_text_color_selected);
      //--- 坐标
      m_content_items[c].X(x);
      m_content_items[c].Y(y);
      //--- 距离面板边缘的距离偏移
      m_content_items[c].XGap(x-m_wnd.X());
      m_content_items[c].YGap(y-m_wnd.Y());
      //--- 创建对象
      if(!m_content_items[c].CreateTreeItem(m_chart_id,m_subwin,x,y,TI_SIMPLE,c,0,m_t_item_text[i],false))
         return(false);
      //--- 隐藏元件
      m_content_items[c].Hide();
      //--- 项目将是下拉元件
      m_content_items[c].IsDropdown(true);
      //--- 保存 (1) 内容总列表的索引, (2) 树形视图的索引 以及 (3) 项目文字
      m_c_list_index[c]      =c;
      m_c_tree_list_index[c] =m_t_list_index[i];
      m_c_item_text[c]       =m_t_item_text[i];
      //---
      c++;
     }
//--- 保存列表的大小
   m_content_items_total=::ArraySize(m_content_items);
   return(true);
  }
```

树形视图的动态数组和我们已经探讨过的内容区域的列表是用于保存完整列表的，但是因为并不是所有的项目同时都会显示出来，需要在与树形视图交互时经常性地重建另外两组动态数组，还要考虑到含有局部列表的节点的当前状态，可能是收起的或是展开的。让我们看一下另外一个详细的实例，

例如，我们有一个树形视图，它含有 **11** 项:

![图 13. 包含11个项目的树形视图模型。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-15_%5D1%2Cjrg "图 13. 包含11个项目的树形视图模型。")
![[Pasted image 20260628223327.png]]
图 13. 包含11个项目的树形视图模型。

因为项目 **A**, **D** 和 **J** 是在根目录列表中，它们不会进入内容区域的项目完整列表中。下图(1)显示了在左边所有树形视图项目的列表，用于保存这个列表参数的动态数组，它们的名称中包含了‘ **t** ’ 的前缀(单词‘ **tree(树形)** ’的缩写)。右侧的图片显示了 (2) 内容区域中项目的列表，用于保存这个列表参数的动态数组，它们的名称中包含了‘ **c** ’ 的前缀 (单词‘ **content(内容)** ’的缩写)。

![图 14. 两个组的完整列表。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-1%3A_%5D1%2Cjrg "图 14. 两个组的完整列表。")
![[Pasted image 20260628223338.png]]
图 14. 两个组的完整列表。

在实例中，位于项目 **A**, **D**, **E** 和 **J** 的局部列表，在下图中它们用蓝色标记。

![图 15. 包含局部列表的项目(使用蓝色标记)。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-1%3B.hpe "图 15. 包含局部列表的项目(使用蓝色标记)。")
![[Pasted image 20260628223353.png]]
图 15. 包含局部列表的项目(使用蓝色标记)。

每一次选中了树形视图中含有内容的项目时，会在内容区域重新构建一个列表，例如，当选择 **A**, 就会在内容区域构成由项目 **B** 和 **C** 组成的列表 (图片上的选项1)，如果选择了 **D**, 就会构成由项目 **E** 和 **I** 组成的列表 (图片上的选项2).

![图 16. 构建内容区域列表的示例。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-22.hpe "图 16. 构建内容区域列表的示例。")
![[Pasted image 20260628223404.png]]
图 16. 构建内容区域列表的示例。

在收起和展开项目的局部节点列表时，会在树形视图中重新构建显示项目的列表，这是显而易见的。收起的列表项目会不被显示，并且不会包含在用于保存树形视图中显示的项目数组中，

为了做到以上这些，您将需要在树形视图中有一个用于显示项目列表的数组，它会保存树形视图中的通用索引，还有用于内容列表的3个数组，它们将保存(1)内容列表的通用索引, (2) 树形列表的通用索引 以及 (3) 项目的描述(显示的文字):

```
class CTreeView : public CElement
  {
private:
   //--- 用于树形视图中显示项目列表的数组
   int               m_td_list_index[];
   //--- 用于在内容列表中显示项目列表的数组
   int               m_cd_list_index[];
   int               m_cd_tree_list_index[];
   string            m_cd_item_text[];
  };
```

以下我们将探讨用于构建和管理以上提到列表的算法的方法。

### 管理元件列表的方法

在所有的参数都发送到 **CTreeView** 类以及元件创建之后，我们需要构建和更新需要显示的项目，为了减少主方法的代码，我们创建出额外的私有栏位和方法用于相关的处理。我们将需要节点的最小和最大等级值和树形视图中根目录项目的数量。

```
class CTreeView : public CElement
  {
private:
   //--- 节点的(1) 最小 和 (2) 最大等级
   int               m_min_node_level;
   int               m_max_node_level;
   //--- 根目录的项目数量
   int               m_root_items_total;
   //---
private:
   //--- 确定及设置 (1) 节点的边界 以及 (2) 根目录的大小
   void              SetNodeLevelBoundaries(void);
   void              SetRootItemsTotal(void);
  };
//+------------------------------------------------------------------+
//| 确定和设置节点的边界                          |
//+------------------------------------------------------------------+
void CTreeView::SetNodeLevelBoundaries(void)
  {
//--- 定义节点的最小和最大等级
   m_min_node_level =m_t_node_level[::ArrayMinimum(m_t_node_level)];
   m_max_node_level =m_t_node_level[::ArrayMaximum(m_t_node_level)];
  }
//+------------------------------------------------------------------+
//| 定义和设置根目录的大小                               |
//+------------------------------------------------------------------+
void CTreeView::SetRootItemsTotal(void)
  {
//--- 定义根目录的项目数量
   int items_total=::ArraySize(m_items);
   for(int i=0; i<items_total; i++)
     {
      //--- 如果是最小等级，我们增加计数器
      if(m_t_node_level[i]==m_min_node_level)
         m_root_items_total++;
     }
  }
```

我们之前已经讨论了用于构建显示项目列表的数组，我们将会须要 **CTreeView::AddDisplayedTreeItem** () 方法来填充这些树形视图的数组，为了把项目加到列表中，列表的总索引必须传给这个方法。

```
class CTreeView : public CElement
  {
private:
   //--- 把项目加到内容区域的列表中
   void              AddDisplayedTreeItem(const int list_index);
  };
//+------------------------------------------------------------------+
//| 把项目加到显示项目的数组中                     |
//| 应用于树形视图                            |
//+------------------------------------------------------------------+
void CTreeView::AddDisplayedTreeItem(const int list_index)
  {
//--- 给数组大小增加一个元素
   int array_size=::ArraySize(m_td_list_index);
   ::ArrayResize(m_td_list_index,array_size+1);
//--- 保存传入参数的数值
   m_td_list_index[array_size]=list_index;
  }
```

在构建完数组之后，项目应当被保存，而元件需要重绘以显示最新的变化，为此，我们将创建另一个辅助方法 - **CTreeView::RedrawTreeList** ()。在方法的开始，元件会被隐藏，然后 (1) 计算第一个点的 **Y** 坐标, (2) 修正滚动条的大小 并且 (3)考虑滚动条是否存在而计算项目的宽度，然后再在循环中的每一次迭代中计算每个项目的 **Y** 坐标并更新它的属性，在循环结束之后，元件会再次显示。

```
class CTreeView : public CElement
  {
private:
   //--- 重绘树形视图
   void              RedrawTreeList(void);
  };
//+------------------------------------------------------------------+
//| 重绘元件                              |
//+------------------------------------------------------------------+
void CTreeView::RedrawTreeList(void)
  {
//--- 隐藏元件
   Hide();
//--- 树形视图中第一个项目的 Y 坐标
   int y=CElement::Y()+1;
//--- 取得项目数量
   m_items_total=::ArraySize(m_td_list_index);
//--- 修正滚动条的大小
   m_scrollv.ChangeThumbSize(m_items_total,m_visible_items_total);
//--- 计算树形视图项目的宽度
   int w=(m_items_total>m_visible_items_total) ? CElement::XSize()-m_scrollv.ScrollWidth() : CElement::XSize()-2;
//--- 设置新的值
   for(int i=0; i<m_items_total; i++)
     {
      //--- 计算每个项目的Y坐标
      y=(i>0)? y+m_item_y_size-1 : y;
      //--- 取得项目在列表中的通用索引
      int li=m_td_list_index[i];
      //--- 更新坐标和大小
      m_items[li].UpdateY(y);
      m_items[li].UpdateWidth(w);
     }
//--- 显示元件
   Show();
  }
```

以上所列出的栏位和方法将在 **CTreeView::UpdateTreeViewList** ()方法中调用，在这个方法中树形视图会被构建和更新 (参见下方代码)，让我们仔细研究这个方法

这里将需要四个局部动态数组，它们将用于在构建列表的过程中控制项目的顺序。其中有以下的数组用于:

- 之前节点列表的通用索引；
- 项目的局部索引；
- 节点的项目数量；
- 节点中文件夹的数量。

数组的初始大小是比树形视图的最大节点数多两个，需要这样才能在下个元件数组中保存当前项目(在循环中)的数值，并且前一项目的数值会根据当前循环的索引在下次迭代中作检查。数组最初是使用 **\-1** 来进行初始化的。请注意，每次程序进入此方法时，在创建树形视图时需要的数组缓冲区 **m\_td\_list\_index** \[\]都会被释放, 而数组的大小会设为0。我们将需要另外一个项目计数器(**ii**)和一个变量(**end\_list**)来设置根目录中最后一个项目的标志。

在声明了所有的局部数组和变量后， **CTreeView::UpdateTreeViewList** () 方法的主循环就开始运行，它会一直工作，直到:

- 节点计数器(**nl**)超出设置的最大值；
- 我们没有到达根目录的最后项目(在检查过插入的所有项目之后)；
- 用于没有删除这个程序。

这是一个双循环，在第一级计算树形视图的节点，当前节点局部列表中的所有项目在第二级中进行检查。在第二个循环的开始，先要检查文件导航器模式，看树形视图是否用于此目的。如果启用了"在树形视图中只显示文件夹"的模式，如果当前项目是文件夹就需要作此检查，否则继续处理随后的项目。

如果符合了这些条件，之后会另外进行三项检查，程序会在以下三种情况下继续处理后面的项目：

- 如果节点不匹配；
- 项目的局部索引的顺序不符合要求；
- 如果我们不是在循环目录中，而前一节点列表的总索引不等于保存在内存中的索引。

在通过以上列出的三项检查之后，如果后面的项目超出了局部列表的大小，我们把项目的局部索引保存下来。

另外，如果发现项目有局部列表而且它当前是展开的，我们将在树形视图显示项目的数组中加入一项，在此，您应该把当前项目的数值保存到方法的局部数组中，唯一的例外是项目的局部索引，它应当被保存到当前节点的索引中(**nl**), 其他剩下参数的数值 — 保存到下个节点索引中 (**n**)。另外，局部项目索引的计数器要在这里清零，而用于处理下一个节点的当前(第二重)循环要在此停止。

如果转到下一个节点出现失败，表明它是一个没有列表的项目，或者列表当前是收起来的，在这种情况下，首先在树形视图的显示项目数组中加入一个点，然后，再增加项目的局部索引计数器，

如果我们现在是在根目录，并且已经达到了列表的最后一个项目，就表明列表已经成功构建，设置标志，而循环就结束了。如果我们还没有达到根目录的最后一个项目，如果设置了对应的模式，我们将或则当前节点的项目数量或者文件夹数量，如果这不是列表的最后一个项目，我们就转到下一个。如果我们已经达到了最后一个项目，我们就继续转到前一个节点，继续上次在列表中检查的项目，然后继续直到达到根目录的最后的项目。

在树形视图创建好以后，在方法的末尾元件会重绘。

```
class CTreeView : public CElement
  {
private:
   //--- 更新树形视图
   void              UpdateTreeViewList(void);
  };
//+------------------------------------------------------------------+
//| 更新树形视图列表                          |
//+------------------------------------------------------------------+
void CTreeView::UpdateTreeViewList(void)
  {
//--- 用于控制项目顺序的数组:
   int l_prev_node_list_index[]; // 前一节点的列表的通用索引 
   int l_item_index[];           // 项目的局部索引
   int l_items_total[];          // 节点中的项目数量
   int l_folders_total[];        // 节点中的文件夹数量
//--- 设置数组的初始大小
   int begin_size=m_max_node_level+2;
   ::ArrayResize(l_prev_node_list_index,begin_size);
   ::ArrayResize(l_item_index,begin_size);
   ::ArrayResize(l_items_total,begin_size);
   ::ArrayResize(l_folders_total,begin_size);
//--- 初始化数组
   ::ArrayInitialize(l_prev_node_list_index,-1);
   ::ArrayInitialize(l_item_index,-1);
   ::ArrayInitialize(l_items_total,-1);
   ::ArrayInitialize(l_folders_total,-1);
//--- 清空树形视图项目显示数组
   ::ArrayFree(m_td_list_index);
//--- 项目局部索引计数器
   int ii=0;
//--- 用于设置根目录中最后项目的标志
   bool end_list=false;
//--- 把显示的项目收集到数组中，循环将一直工作直到: 
//    1: 节点计数器超过了最大值;
//    2: 达到了最后的项目 (在检查完所有输入项目之后);
//    3: 用户删除了程序.
   int items_total=::ArraySize(m_items);
   for(int nl=m_min_node_level; nl<=m_max_node_level && !end_list; nl++)
     {
      for(int i=0; i<items_total && !::IsStopped(); i++)
        {
         //--- 如果启用了"只显示文件夹"模式
         if(m_file_navigator_mode==FN_ONLY_FOLDERS)
           {
            //--- 如果是一个文件，就继续到下一个项目
            if(!m_t_is_folder[i])
               continue;
           }
         //--- 如果 (1) 它不是我们的节点 或者 (2) 项目局部索引的顺序不符合要求,
         //    我们就转到下一个项目
         if(nl!=m_t_node_level[i] || m_t_item_index[i]<=l_item_index[nl])
            continue;
         //--- 继续下一个项目，如果这不是根目录并且
         //  前一节点列表的总索引不等于内存中保存的数值
         if(nl>m_min_node_level && m_t_prev_node_list_index[i]!=l_prev_node_list_index[nl])
            continue;
         //--- 如果下一个项目超出了局部列表的大小，记住项目的局部索引
         if(m_t_item_index[i]+1>=l_items_total[nl])
            ii=m_t_item_index[i];
         //--- 如果当前项目的列表已经最大
         if(m_t_item_state[i])
           {
            //--- 把项目加到树形视图中的显示项目数组中
            AddDisplayedTreeItem(i);
            //--- 记住当前的数值并继续到下一个节点
            int n=nl+1;
            l_prev_node_list_index[n] =m_t_list_index[i];
            l_item_index[nl]          =m_t_item_index[i];
            l_items_total[n]          =m_t_items_total[i];
            l_folders_total[n]        =m_t_folders_total[i];
            //--- 项目局部索引计数器清零
            ii=0;
            //--- 继续下一个节点
            break;
           }
         //--- 把项目加到树形视图中的显示项目数组中
         AddDisplayedTreeItem(i);
         //--- 增加局部索引计数器
         ii++;
         //--- 如果到了根目录的最后一个项目
         if(nl==m_min_node_level && ii>=m_root_items_total)
           {
            //--- 设置标志并结束当前的循环
            end_list=true;
            break;
           }
         //--- 如果我们没有达到根目录的最后一个项目
         else if(nl>m_min_node_level)
           {
            //--- 取得当前节点的项目数量
            int total=(m_file_navigator_mode==FN_ONLY_FOLDERS)? l_folders_total[nl]: l_items_total[nl];
            //--- 如果不是项目中的最后一个局部索引，我们就继续下一个
            if(ii<total)
               continue;
            //--- 如果我们达到了最后的局部索引，则
            //    我们需要返回到前一节点而从我们之前停止的地方再继续
            while(true)
              {
               //--- 在以下列出的数组中重置当前节点的值
               l_prev_node_list_index[nl] =-1;
               l_item_index[nl]           =-1;
               l_items_total[nl]          =-1;
               //--- 减少节点数量，而保持局部列表中项目的数量不变 
               //  或者我们没有达到根目录
               if(l_item_index[nl-1]+1>=l_items_total[nl-1])
                 {
                  if(nl-1==m_min_node_level)
                     break;
                  //---
                  nl--;
                  continue;
                 }
               //---
               break;
              }
            //--- 继续前一节点
            nl=nl-2;
            //--- 项目的局部索引计数器清零，继续下一个节点
            ii=0;
            break;
           }
        }
     }
//--- 重绘元件
   RedrawTreeList();
  }
```

根据滚动条而移动列表将通过 **CTreeView::ShiftTreeList** () 和 **CTreeView::ShiftContentList** () 方法进行，这些方法的主要逻辑基本是一样的，所以我们在例子中只提供它们之中一个的代码 (针对树形视图)。

在方法的开始，所有树形视图项目都要隐藏，然后根据滚动条在当前列表中的情况来计算项目的宽度，如果有滚动条，就要取得滚动条滑块的位置。然后，在循环中计算和更新每个项目的坐标和宽度，再使得项目可见。在方法的最后，如果需要显示滚动条，它必须被重绘并放置在列表上方。

```
class CTreeView : public CElement
  {
private:
   //--- 移动列表
   void              ShiftTreeList(void);
   void              ShiftContentList(void);
  };
//+------------------------------------------------------------------+
//| 根据滚动条移动树形视图                                    |
//+------------------------------------------------------------------+
void CTreeView::ShiftTreeList(void)
  {
//--- 隐藏树形视图中的所有项目
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
      m_items[i].Hide();
//--- 如果需要滚动条
   bool is_scroll=m_items_total>m_visible_items_total;
//--- 计算列表项目的宽度
   int w=(is_scroll)? m_area.XSize()-m_scrollv.ScrollWidth()-1 : m_area.XSize()-2;
//--- 定义滚动条的位置
   int v=(is_scroll)? m_scrollv.CurrentPos() : 0;
   m_scrollv.CurrentPos(v);
//--- 树形视图中第一个项目的 Y 坐标
   int y=CElement::Y()+1;
//---
   for(int r=0; r<m_visible_items_total; r++)
     {
      //--- 检查以防超出范围
      if(v>=0 && v<m_items_total)
        {
         //--- 计算 Y 坐标
         y=(r>0)? y+m_item_y_size-1 : y;
         //--- 取得树形视图项目的通用索引
         int li=m_td_list_index[v];
         //--- 设置坐标和宽度
         m_items[li].UpdateX(m_area.X()+1);
         m_items[li].UpdateY(y);
         m_items[li].UpdateWidth(w);
         //--- 显示项目
         m_items[li].Show();
         v++;
        }
     }
//--- 重绘滚动条
   if(is_scroll)
      m_scrollv.Reset();
  }
```

用于构建和更新内容列表的方法就简单多了，因为这里的列表是普通的而不需要遵循等级顺序。在 **CTreeView::UpdateContentList** () 方法的开始，用于构建内容列表的数组会先被释放，然后，我们在第一个循环中迭代所有树形视图的项目，并只保存以下参数中与树形视图所选择的项目相匹配的项目:

- 节点的等级
- 项目的局部索引
- 项目的通用索引

循环只会保存项目的描述(显示的文字)和在树形视图中的总索引。

在第二个循环中，我们必须迭代内容列表并在数组中填充列表的总索引，为了确定所需的项目, 将会使用第一个循环中所取得的参数值，在方法的最后，修正滚动条的大小，并更新最后的变化来显示列表。

```
class CTreeView : public CElement
  {
private:
   //--- 刷新内容列表
   void              UpdateContentList(void);
  };
//+------------------------------------------------------------------+
//| 更新内容列表                            |
//+------------------------------------------------------------------+
void CTreeView::UpdateContentList(void)
  {
//--- 所选择项目的索引
   int li=m_selected_item_index;
//--- 释放内容列表的数组
   ::ArrayFree(m_cd_item_text);
   ::ArrayFree(m_cd_list_index);
   ::ArrayFree(m_cd_tree_list_index);
//--- 构建内容列表
   int items_total=::ArraySize(m_items);
   for(int i=0; i<items_total; i++)
     {
      //--- 如果 (1) 节点的等级 以及 (2) 项目的局部索引匹配, 并且
      //    (3) 前一节点的索引与所选择项目的索引匹配
      if(m_t_node_level[i]==m_t_node_level[li]+1 && 
         m_t_prev_node_item_index[i]==m_t_item_index[li] &&
         m_t_prev_node_list_index[i]==li)
        {
         //--- 加大内容列表显示项目的数组
         int size     =::ArraySize(m_cd_list_index);
         int new_size =size+1;
         ::ArrayResize(m_cd_item_text,new_size);
         ::ArrayResize(m_cd_list_index,new_size);
         ::ArrayResize(m_cd_tree_list_index,new_size);
         //--- 在数组中保存项目的文字和树形视图中的总索引
         m_cd_item_text[size]       =m_t_item_text[i];
         m_cd_tree_list_index[size] =m_t_list_index[i];
        }
     }
//--- 如果最后列表不为空，我们就在数组中填充内容列表的总索引
   int cd_items_total=::ArraySize(m_cd_list_index);
   if(cd_items_total>0)
     {
      //--- 项目计数器
      int c=0;
      //--- 在列表中迭代
      int c_items_total=::ArraySize(m_c_list_index);
      for(int i=0; i<c_items_total; i++)
        {
         //--- 如果描述和树形视图项目的通用索引匹配
         if(m_c_item_text[i]==m_cd_item_text[c] && 
            m_c_tree_list_index[i]==m_cd_tree_list_index[c])
           {
            //--- 保存内容列表的总索引并继续下一个
            m_cd_list_index[c]=m_c_list_index[i];
            c++;
            //--- 退出循环，我们已经到了显示列表的结尾
            if(c>=cd_items_total)
               break;
           }
        }
     }
//--- 修正滚动条滑块的大小
   m_content_scrollv.ChangeThumbSize(cd_items_total,m_visible_items_total);
//--- 修正内容列表项目
   ShiftContentList();
  }
```

### 管理列表区域的宽度

现在，我们在深入研究修改列表宽度的模式是如何工作的。我们所需要的是: (1) 一个主私有方法 **CTreeView::ResizeListArea** (), 在其中会进行主要的检查，根据的检查 — 列表宽度的改变 以及 (2) 四个辅助私有方法来解决下面谈到的任务。

- **CTreeView::CheckXResizePointer** () 方法 — 检查修改列表宽度是否准备完毕，这个方法的代码包含相关联的两个部分。如果光标指针没有激活，但是鼠标光标在区域之内，就更新指针的坐标并显示。如果按下了鼠标左键，指针就激活，如果方法的第一个条件没有达成，光标指针就解除激活状态并隐藏。

```
class CTreeView : public CElement
  {
private:
   //--- 检查修改列表宽度的准备工作
   void              CheckXResizePointer(const int x,const int y);
  };
//+------------------------------------------------------------------+
//| 检查修改列表宽度的准备工作                           |
//+------------------------------------------------------------------+
void CTreeView::CheckXResizePointer(const int x,const int y)
  {
//--- 如果指针没有激活，但是鼠标光标在区域之内
   if(!m_x_resize.State() && 
      y>m_area.Y() && y<m_area.Y2() && x>m_area.X2()-2 && x<m_area.X2()+3)
     {
      //--- 更新指针的坐标并显示
      int l_x=x-m_x_resize.XGap();
      int l_y=y-m_x_resize.YGap();
      m_x_resize.Moving(l_x,l_y);
      m_x_resize.Show();
      //--- 设置可见标志
      m_x_resize.IsVisible(true);
      //--- 如果按下了鼠标左键
      if(m_mouse_state)
         //--- 激活指针
         m_x_resize.State(true);
     }
   else
     {
      //--- 如果按下了鼠标左键
      if(!m_mouse_state)
        {
         //--- 解除激活并隐藏指针
         m_x_resize.State(false);
         m_x_resize.Hide();
         //--- 删除可见标志
         m_x_resize.IsVisible(false);
        }
     }
  }
```

- **CTreeView::CheckOutOfArea** () 方法用于测试是否超出限制，没有必要把列表宽度减小到看不见，所以，我们把限制设为 **80** 个像素点。让我们这样处理，如果光标在水平方向上超出了设置的限制，在列表的连接区域之内就只会有垂直方向上的指针。

```
class CTreeView : public CElement
  {
private:
   //--- 检查是否超出限制
   bool              CheckOutOfArea(const int x,const int y);
  };
//+------------------------------------------------------------------+
//| 检查是否超出限制                          |
//+------------------------------------------------------------------+
bool CTreeView::CheckOutOfArea(const int x,const int y)
  {
//--- 限制
   int area_limit=80;
//--- 如果我们在水平方向上超出了元件的边界 ...
   if(x<m_area.X()+area_limit || x>m_content_area.X2()-area_limit)
     {
      // ... 把指针变成只有垂直方向，不能超出边界
      if(y>m_area.Y() && y<m_area.Y2())
         m_x_resize.UpdateY(y-m_x_resize.YGap());
      //--- 不要修改列表的宽度
      return(false);
     }
//--- 修改列表的宽度
   return(true);
  }
```

- **CTreeView::UpdateTreeListWidth** () 和 **CTreeView::UpdateContentListWidth** () 方法是用于更新 (1)树形视图的宽度 以及(2)内容区域的列表宽度。在树形视图中只有右侧边框可以移动，为此，只有它的宽度需要改变，另外，还需要更新滚动条的坐标。对于在内容区域中的列表，您需要同时更新它的宽度和 **X** 坐标，并且只能移动它的左边框。

```
class CTreeView : public CElement
  {
private:
   //--- 更新树形视图的宽度
   void              UpdateTreeListWidth(const int x);
   //--- 更新内容区域列表的宽度
   void              UpdateContentListWidth(const int x);
  };
//+------------------------------------------------------------------+
//| 更新树形视图的宽度                        |
//+------------------------------------------------------------------+
void CTreeView::UpdateTreeListWidth(const int x)
  {
//--- 计算和设置树形视图的宽度
   m_area.X_Size(x-m_area.X());
   m_area.XSize(m_area.X_Size());
//--- 根据滚动条计算和设置树形视图中项目的宽度
   int l_w=(m_items_total>m_visible_items_total) ? m_area.XSize()-m_scrollv.ScrollWidth()-4 : m_area.XSize()-1;
   int items_total=::ArraySize(m_items);
   for(int i=0; i<items_total; i++)
      m_items[i].UpdateWidth(l_w);
//--- 计算和设置树形视图滚动条的坐标
   m_scrollv.X(m_area.X2()-m_scrollv.ScrollWidth());
   m_scrollv.XDistance(m_scrollv.X());
  }
//+------------------------------------------------------------------+
//| 更新内容区域中列表的宽度                      |
//+------------------------------------------------------------------+
void CTreeView::UpdateContentListWidth(const int x)
  {
//--- 计算和设置 X 坐标, 偏移和内容区域的宽度
   int l_x=m_area.X2()-1;
   m_content_area.X(l_x);
   m_content_area.X_Distance(l_x);
   m_content_area.XGap(l_x-m_wnd.X());
   m_content_area.XSize(CElement::X2()-m_content_area.X());
   m_content_area.X_Size(m_content_area.XSize());
//--- 计算和设置内容列表中的 X 坐标和项目宽度
   l_x=m_content_area.X()+1;
   int l_w=(m_content_items_total>m_visible_items_total) ? m_content_area.XSize()-m_content_scrollv.ScrollWidth()-4 : m_content_area.XSize()-2;
   int total=::ArraySize(m_content_items);
   for(int i=0; i<total; i++)
     {
      m_content_items[i].UpdateX(l_x);
      m_content_items[i].UpdateWidth(l_w);
     }
  }
```

所有这些辅助方法将在主方法 **CTreeView::ResizeListArea** ()中调用，它最终会用于处理应用程序的事件。需要在这个方法的开始进行几项检查，程序在遇到以下情形时会退出。

- 如果禁用改变列表宽度的模式
- 如果内容区域被禁用
- 如果启用了页面项目模式
- 如果滚动条是激活的(滑块正处于移动模式)

如果这些检查完成后，就调用 **CTreeView::CheckXResizePointer** ()方法来确定修改列表宽度的准备工作是否就绪，如果最终发现指针被禁用，我们就应该解除之前被屏蔽表单的屏蔽，

如果启用了指针，首先我们要看我们是否超出了指定的限制，如果是，程序就在这个方法中终止。如果我们在工作区域，表单会被屏蔽。元件的ID必须保存，因为只有屏蔽表单的元件可以解除它的屏蔽。鼠标光标的指针坐标会根据列表的坐标和它们的宽度再被更新。

```
//+------------------------------------------------------------------+
//| 管理列表的宽度                          |
//+------------------------------------------------------------------+
void CTreeView::ResizeListArea(const int x,const int y)
  {
//--- 退出, (1) 如果内容区域的宽度不应被改变或者
//    (2) 如果内容区域被禁用 或者(3)启用了页面项目模式
   if(!m_resize_list_area_mode || m_content_area_width<0 || m_tab_items_mode)
      return;
//--- 如果滚动条是激活的，退出
   if(m_scrollv.ScrollState())
      return;
//--- 检查修改列表宽度的准备工作
   CheckXResizePointer(x,y);
//--- 如果指针被禁用，解除表单的屏蔽
   if(!m_x_resize.State())
     {
      //--- 谁屏蔽了表单，谁才能解除它的屏蔽
      if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()==CElement::Id())
        {
         m_wnd.IsLocked(false);
         m_wnd.IdActivatedElement(WRONG_VALUE);
         return;
        }
     }
   else
     {
      //--- 检查是否超出指定的界限 
      if(!CheckOutOfArea(x,y))
         return;
      //--- 屏蔽表单，记住活动元件的ID
      m_wnd.IsLocked(true);
      m_wnd.IdActivatedElement(CElement::Id());
      //--- 设置鼠标光标中间对象的 X 坐标
      m_x_resize.UpdateX(x-m_x_resize.XGap());
      //--- Y 坐标只有我们没有超出元件区域时设置
      if(y>m_area.Y() && y<m_area.Y2())
         m_x_resize.UpdateY(y-m_x_resize.YGap());
      //--- 更新树形视图的宽度
      UpdateTreeListWidth(x);
      //--- 更新内容列表的宽度
      UpdateContentListWidth(x);
      //--- 更新列表的坐标和宽度
      ShiftTreeList();
      ShiftContentList();
      //--- 重绘指针
      m_x_resize.Reset();
     }
  }
```

为了暂时过渡我们可以提供元件事件处理函数 **CTreeView::OnEvent** ()的代码，移动鼠标的 [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件就是在这里处理的，许多上面讨论的方法都会在这里应用。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CTreeView::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件  
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的，退出
      if(!CElement::IsVisible())
         return;
      //--- 鼠标左键的坐标和状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      //--- 检查在列表上的焦点
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 移动树形视图，如果滚动条滑块在活动状态
      if(m_scrollv.ScrollBarControl(x,y,m_mouse_state))
        {
         ShiftTreeList();
         return;
        }
      //--- 如果在移动滚动条滑块式移动内容列表
      if(m_content_scrollv.ScrollBarControl(x,y,m_mouse_state))
        {
         ShiftContentList();
         return;
        }
      //--- 管理内容区域的宽度
      ResizeListArea(x,y);
      //--- 如果表单被屏蔽，退出
      if(m_wnd.IsLocked())
         return;
      //--- 当鼠标光标掠过时改变颜色
      ChangeObjectsColor();
      return;
     }
  }
```

### 页面项目的模式

我们将尝试看在树形视图中的页面模式是如何工作的，在当前时刻，开发库已经有了两个用于创建页面(tab)的类: **CTabs** 和 **CIconTabs** ，它们是如何设计的以及更加详细的信息可以在文章 [图形界面 VII: 页面元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523) 中找到。在这些类中，页面可以在水平方向或者垂直方向上创建，在树形视图中，元件应该可以根据种类排布，这在应用程序的图形界面中有很多元件而需要分组时非常方便。

所以，当创建页面元件的树形视图模式设置后，在所有元件对象创建以后，就应该确定哪些树形视图项目将是页面。页面只能是哪些不包含局部列表的项目，应该想到的是，页面项目应该有它们自己的索引顺序(参见下面的图片)。这种特别的索引顺序应当在把控件加到页面项目时特别注意，

下图展示了页面项目索引顺序的示例。点 **A**, **D**, **G** 和 **H** 不是页面，因为它们包含了列表。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_31%2Cplg)
![[Pasted image 20260628223505.png]]
图 17. 页面项目的索引.

为了解决这个问题，我们需要一个结构(声明它的实例的数组), 它将含有一个用于保存元件指针的动态数组和一个用于保存页面索引的栏位:

```
class CTreeView : public CElement
  {
private:
   //--- 每个页面项目的元件结构
   struct TVElements
     {
      CElement         *elements[];
      int               list_index;
     };
   TVElements        m_tab_items[];
  };
```

为了确定哪些点将是页面并且来创建它们的数组，将会使用 **CTreeView::GenerateTabItemsArray** ()方法。如果禁用了页面项目模式, 程序会立即从这个方法中退出，然后，我们将在整个树形视图迭代，每次找到简单项目时，我们将减小 **TVElements** 数组一个元素并且保存项目的总索引，

然后，如果项目内容显示，则列表中的第一个项目会默认被选中，如果禁止显示项目内容，如果超出了范围就会修正索引，属性中指定的页面项目将会被选中。

```
class CTreeView : public CElement
  {
private:
   //--- 构建页面项目的数组
   void              GenerateTabItemsArray(void);
  };
//+------------------------------------------------------------------+
//| 构建页面项目的数组                          |
//+------------------------------------------------------------------+
void CTreeView::GenerateTabItemsArray(void)
  {
//--- 如果禁用了页面项目模式，退出
   if(!m_tab_items_mode)
      return;
//--- 只把空的项目加到项目页面数组中
   int items_total=::ArraySize(m_items);
   for(int i=0; i<items_total; i++)
     {
      //--- 如果这个项目含有其他项目，我们就继续下一个
      if(m_t_items_total[i]>0)
         continue;
      //--- 增加页面项目数组1个元素
      int array_size=::ArraySize(m_tab_items);
      ::ArrayResize(m_tab_items,array_size+1);
      //--- 保存项目的总索引
      m_tab_items[array_size].list_index=i;
     }
//--- 如果禁用项目内容的显示
   if(!m_show_item_content)
     {
      //--- 取得页面项目数组的大小
      int tab_items_total=::ArraySize(m_tab_items);
      //--- 如果超出范围，修正索引
      if(m_selected_item_index>=tab_items_total)
         m_selected_item_index=tab_items_total-1;
      //--- 禁止在列表中选择当前项目
      m_items[m_selected_item_index].HighlightItemState(false);
      //--- 所选择页面的索引
      int tab_index=m_tab_items[m_selected_item_index].list_index;
      m_selected_item_index=tab_index;
      //--- 选择这个项目
      m_items[tab_index].HighlightItemState(true);
     }
  }
```

为了在树形视图页面中关联任何控件，应该使用 **CTreeView::AddToElementsArray** () 方法，这个方法有两个参数: (1) 页面项目的索引 和 (2) **CElement** 类型的对象，它的指针应该保存在指定页面项目的数组中。

```
class CTreeView : public CElement
  {
public:
   //--- 把元件加到页面项目数组中
   void              AddToElementsArray(const int item_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 把元件加到指定页面的数组中                    |
//+------------------------------------------------------------------+
void CTreeView::AddToElementsArray(const int tab_index,CElement &object)
  {
//--- 检查是否超出范围
   int array_size=::ArraySize(m_tab_items);
   if(array_size<1 || tab_index<0 || tab_index>=array_size)
      return;
//--- 把元件的指针加到指定页面的数组中
   int size=::ArraySize(m_tab_items[tab_index].elements);
   ::ArrayResize(m_tab_items[tab_index].elements,size+1);
   m_tab_items[tab_index].elements[size]=::GetPointer(object);
  }
```

**CTreeView::ShowTabElements** ()方法是用于显示所选择页面项目的元件的，如果元件是隐藏或者模式被禁用，程序就会退出此方法，然后，在方法的第一个循环中，确定所选择页面项目的索引，之后，在第二个循环中，只有附加于所选择页面的元件才会显示出来，其余的要隐藏。

```
class CTreeView : public CElement
  {
public:
   //--- 只显示所选择页面项的元件
   void              ShowTabElements(void);
  };
//+------------------------------------------------------------------+
//| 只显示所选择页面项目的元件                            |
//+------------------------------------------------------------------+
void CTreeView::ShowTabElements(void)
  {
//--- 如果元件是隐藏的或者页面项目模式被禁用，则退出
   if(!CElement::IsVisible() || !m_tab_items_mode)
      return;
//--- 所选择页面的索引
   int tab_index=WRONG_VALUE;
//--- 定义所选择页面的索引
   int tab_items_total=::ArraySize(m_tab_items);
   for(int i=0; i<tab_items_total; i++)
     {
      if(m_tab_items[i].list_index==m_selected_item_index)
        {
         tab_index=i;
         break;
        }
     }
//--- 只显示所选页面的元件
   for(int i=0; i<tab_items_total; i++)
     {
      //--- 取得与本页面关联的元件数量
      int tab_elements_total=::ArraySize(m_tab_items[i].elements);
      //--- 如果选择了这个页面
      if(i==tab_index)
        {
         //--- 显示元件
         for(int j=0; j<tab_elements_total; j++)
            m_tab_items[i].elements[j].Reset();
        }
      else
        {
         //--- 隐藏元件
         for(int j=0; j<tab_elements_total; j++)
            m_tab_items[i].elements[j].Hide();
        }
     }
  }
```

### 事件处理的方法

当从列表中选择项目时，会有消息生成，生命树形视图项目的路径已经有所改变，之后，这个时间将会在文件导航器中接收以确定文件的路径。为了实现我们的计划，我们将需要把 **ON\_CHANGE\_TREE\_PATH** 标识符加到 **Defines.mqh** 文件中 (参见下方代码):

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_CHANGE_TREE_PATH       (23) // 树形视图中路径已经改变
```

为了确定所选项目的路径，我们将写一个公有方法 **CTreeView::CurrentFullPath** ()，它将在文件导航器中调用以取得文件的路径。还需要一个栏位和方法用来在元件列表中取得所选的文件，它们将只在树形视图作为文件导航器的组件时才有意义。让我们讨论 **CTreeView::CurrentFullPath** ()方法的细节。

路径是通过一个个把项目加到 **path\_parts** \[\] 数组中构成的，从当前时刻所选的项目开始，然后上升到列表的各个分级中。在最开始，我们检查所选的项目是不是个文件，如果它是文件夹，我们就把它加到数组中 (文件名不会加到路径中)，

然后，我们在整个树形视图中从所选项目开始向上迭代，上面也是对应的实现，我们跳过所有是文件的项目。为了把项目加到数组中，所有三个条件都需要为真。

- 列表的总索引应当与前一节点的列表总索引匹配；
- 项目的局部列表索引需要与前一节点项目的索引匹配；
- 节点的下降顺序必须保证。

如果这3个条件都满足: (1) 项目的名称加到数组中, (2) 保存循环中的当前索引以备随后的检查 以及 (3)重设循环计数器。但是如果我们达到了节点的第0级, 循环就结束。

然后，在独立的循环中，加上分隔符"\\\\"来构建字符串(所选项目的完整路径)，另外，如果在树形视图中所选的项目是一个文件夹, 我们将检查所选项目是否在内容区域列表中存在，如果它是一个文件，如果"在树形视图中显示文件"模式被启用，当文件被选中时，它的名称会在构成字符串之后立即被保存下来。

在方法的最后，返回所选项目的路径字符串。如果文件在当前种类中也被选中，它就可以使用公有方法 **CTreeView::SelectedItemFileName** ()来获得。

```
class CTreeView : public CElement
  {
private:
   //--- 列表中所选项目的文字。
   //    只用于创建文件导航器类，
   //    如果它不是在列表中所选的文件，栏位会是一个空字符串"".
   string            m_selected_item_file_name;
   //---
public:
   //--- 返回文件名称
   string            SelectedItemFileName(void)                   const { return(m_selected_item_file_name);        }
   //--- 返回所选项目的完整路径
   string            CurrentFullPath(void);
  };
//+------------------------------------------------------------------+
//| 返回当前的完整路径                         |
//+------------------------------------------------------------------+
string CTreeView::CurrentFullPath(void)
  {
//--- 用于构建所选项目所在的目录
   string path="";
//--- 所选择项目的索引
   int li=m_selected_item_index;
//--- 用于构建目录的数组
   string path_parts[];
//--- 返回树形视图中所选项目的描述(文字) ，
//    但只有是文件夹的时候起作用
   if(m_t_is_folder[li])
     {
      ::ArrayResize(path_parts,1);
      path_parts[0]=m_t_item_text[li];
     }
//--- 在整个列表中迭代
   int total=::ArraySize(m_t_list_index);
   for(int i=0; i<total; i++)
     {
      //--- 只考虑文件夹.
      //    如果是一个文件，我们就继续下一项.
      if(!m_t_is_folder[i])
         continue;
      //--- 如果列表总索引匹配前一节点的列表总索引，并且
      //  项目的局部列表索引与前一节点项目的索引匹配,
      //  则维持节点的顺序级别
      if(m_t_list_index[i]==m_t_prev_node_list_index[li] &&
         m_t_item_index[i]==m_t_prev_node_item_index[li] &&
         m_t_node_level[i]==m_t_node_level[li]-1)
        {
         //--- 把数组扩大一个元素并保存项目描述
         int sz=::ArraySize(path_parts);
         ::ArrayResize(path_parts,sz+1);
         path_parts[sz]=m_t_item_text[i];
         //--- 记住索引用于下面的检查
         li=i;
         //--- 如果我们已经到达了节点的第0层，从循环中退出
         if(m_t_node_level[i]==0 || i<=0)
            break;
         //--- 重设循环计数器
         i=-1;
        }
     }
//--- 构建一个字符串 - 在树形视图中所选择项目的完整路径
   total=::ArraySize(path_parts);
   for(int i=total-1; i>=0; i--)
      ::StringAdd(path,path_parts[i]+"\\");
//--- 如果树形视图中所选的项目是一个文件夹
   if(m_t_is_folder[m_selected_item_index])
     {
      m_selected_item_file_name="";
      //--- 如果在内容区域选择了一个项目
      if(m_selected_content_item_index>0)
        {
         //--- 如果所选项目是一个文件，我们保存它的名称
         if(!m_t_is_folder[m_c_tree_list_index[m_selected_content_item_index]])
            m_selected_item_file_name=m_c_item_text[m_selected_content_item_index];
        }
     }
//--- 如果在树形视图中所选的项目是文件
   else
//--- 保存名称
      m_selected_item_file_name=m_t_item_text[m_selected_item_index];
//--- 返回目录
   return(path);
  }
```

在当前版本的树形视图元件中将会处理三种用户的行为，

- 按下收起/展开项目局部列表的按钮 - **CTreeView::OnClickItemArrow** () 方法，如果发现图形对象的名称不是来自树形视图或者元件的ID与树形视图的ID不匹配，程序就从这个方法中退出。然后 (1) 我们需要取得项目按钮的状态并把它改为相反状态, (2) 更新树形视图以显示最新的变化, (3) 计算滚动条滑块的位置 以及(4)如果启用了相应的模式，在所选择的页面项目中显示本身的元件。

```
class CTreeView : public CElement
  {
private:
   //--- 处理按下按钮以收起/展开项目列表的事件
   bool              OnClickItemArrow(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 按下项目列表中收起/展开按钮                                |
//+------------------------------------------------------------------+
bool CTreeView::OnClickItemArrow(const string clicked_object)
  {
//--- 如果对象名称不同，退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_0_treeitem_arrow_",0)<0)
      return(false);
//--- 从对象名称取得ID
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 取得总列表中的项目索引
   int list_index=IndexFromObjectName(clicked_object);
//--- 取得项目箭头的状态并设置到相反状态
   m_t_item_state[list_index]=!m_t_item_state[list_index];
   ((CChartObjectBmpLabel*)m_items[list_index].Object(1)).State(m_t_item_state[list_index]);
//--- 更新树形视图
   UpdateTreeViewList();
//--- 计算滚动条滑块的位置
   m_scrollv.CalculateThumbY();
//--- 显示所选择页面项目的元件
   ShowTabElements();
   return(true);
  }
```

- 在树形视图中点击项目 - **CTreeView::OnClickItem** () 方法。在最开始要进行几项检查，和之前描述过的一样，和其他不同的是，当元件中有一个滚动条处于激活状态时，就从方法中退出。

> 然后，在循环中我们迭代树形视图的可见部分，我们寻找被按下的项目，如果发现项目已经被选中了, 程序就从方法中退出。如果没有被选中，如果启用了页面项目模式并且禁止显示所选项目的内容，而项目不包含列表，循环就立即停止而且不需要有变化。否则，项目就在按下时被选中。
> 
> 在循环之后，如果我们达到了这一步，就选中了一个新的项目。这表明内容区域列表中选中项目的索引和颜色必须重置。例如， **Windows Explorer(Windows资源管理器)** 就是这样实现的。然后，内容区域中的列表会更新以显示最近的变化。在最后, 会生成含有 **ON\_CHANGE\_TREE\_PATH** 为事件ID的消息, 而它可以在自定义程序的事件处理函数中或者其他元件中得到处理。

```
class CTreeView : public CElement
  {
private:
   //--- 处理在树形视图中处理点击项目
   bool              OnClickItem(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 在树形视图中点击项目                         |
//+------------------------------------------------------------------+
bool CTreeView::OnClickItem(const string clicked_object)
  {
//--- 如果滚动条是激活的，推出
   if(m_scrollv.ScrollState() || m_content_scrollv.ScrollState())
      return(false);
//--- 如果对象名称不同，退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_0_treeitem_area_",0)<0)
      return(false);
//--- 从对象名称取得ID
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 取得滚动条滑块的当前位置
   int v=m_scrollv.CurrentPos();
//--- 在列表中迭代
   for(int r=0; r<m_visible_items_total; r++)
     {
      //--- 检查以防超出范围
      if(v>=0 && v<m_items_total)
        {
         //--- 取得项目总索引
         int li=m_td_list_index[v];
         //--- 如果此项目在列表中被选择
         if(m_items[li].Object(0).Name()==clicked_object)
           {
            //--- 如果项目已经选中，就退出。
            if(li==m_selected_item_index)
               return(false);
            //--- 如果启用了页面项目模式，而禁止显示内容，
            //    我们将选择不带列表的项目
            if(m_tab_items_mode && !m_show_item_content)
              {
               //--- 如果当前项目不含列表，我们退出循环
               if(m_t_items_total[li]>0)
                  break;
              }
            //--- 设置之前选择项目的颜色
            m_items[m_selected_item_index].HighlightItemState(false);
            //--- 记住当前索引并改变它的颜色
            m_selected_item_index=li;
            m_items[li].HighlightItemState(true);
            break;
           }
         v++;
        }
     }
//--- 重设内容区域的颜色
   if(m_selected_content_item_index>=0)
      m_content_items[m_selected_content_item_index].HighlightItemState(false);
//--- 重设选中的项目
   m_selected_content_item_index=WRONG_VALUE;
//--- 更新内容列表
   UpdateContentList();
//--- 计算滚动条滑块的位置
   m_content_scrollv.CalculateThumbY();
//--- 修正内容列表
   ShiftContentList();
//--- 显示所选择页面项目的元件
   ShowTabElements();
//--- 发送在树形视图中选择了新目录的消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_TREE_PATH,0,0,"");
   return(true);
  }
```

- 在内容区域的列表中按下了项目 – **CTreeView::OnClickContentListItem** () 方法。这个方法的代码和之前描述的很类似，甚至还要简单得多，所以我们在这里就不详细介绍了。只是需要注意的是，当点击内容区域的项目时，也会生成ID为 **ON\_CHANGE\_TREE\_PATH** 的事件，例如，在文件导航器中就是文件被选择。

最终，和元件交互的过程是通过本文之前谈到的方法中进行的，它的两个列表(如果启用了内容区域)将随时重新构建。元件的事件处理函数代码部分会调用上面的方法，可以从以下代码中学习:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CTreeView::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件  
//...
//--- 处理鼠标左键点击对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果正处于修改内容区域列表大小的模式，就退出
      if(m_x_resize.IsVisible() || m_x_resize.State())
         return;
      //--- 处理点击项目箭头
      if(OnClickItemArrow(sparam))
         return;
      //--- 处理在树形视图中处理点击项目
      if(OnClickItem(sparam))
         return;
      //--- 处理点击在内容区域的项目
      if(OnClickContentListItem(sparam))
         return;
      //--- 根据滚动条移动列表
      if(m_scrollv.OnClickScrollInc(sparam) || m_scrollv.OnClickScrollDec(sparam))
         ShiftTreeList();
      if(m_content_scrollv.OnClickScrollInc(sparam) || m_content_scrollv.OnClickScrollDec(sparam))
         ShiftContentList();
      //---
      return;
     }
  }
```

用于创建树形视图元件类的第一个版本就结束了，但是为了使它可以在所有模式下正确工作，它需要与开发库集成。

### 把元件集成到库引擎

树形视图的类文件必须在 **WndContainer.mqh** 文件中包含 (参见下方代码)，我们将在元件数组结构中加入一个树形视图的数组，另外，还需要取得树形视图列表数量的方法和把属于树形视图列表元件的指针保存到库中的方法。这些方法的代码可以在本文末尾的附件中更加完整地学习。

```
#include "TreeItem.mqh"
#include "TreeView.mqh"
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                          |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 窗口数组
   CWindow          *m_windows[];
   //--- 元件数组的结构
   struct WindowElements
     {
      //--- 树形视图列表
      CTreeView        *m_treeview_lists[];
     };
   //--- 每个窗口的元件数组
   WindowElements    m_wnd[];
   //---
public:
   //--- 树形视图列表的数量
   int               TreeViewListsTotal(const int window_index);
   //---
private:
   //--- 保存树形视图列表元件的指针
   bool              AddTreeViewListsElements(const int window_index,CElement &object);
  };
```

需要在 **CWndEvents** 类中增加一些内容，这个类从 **CWndContainer** 类中派生，处理主要的事件。首先，当在图形界面中打开的表单中有使用页面来组织元件的树形视图时，需要只显示所选择页面的元件，所以，必须在 **CWndEvents::OnWindowUnroll** ()方法中加入代码，如下所示。为了这种特殊情况，元件要分布在它们各自的数组中，只需要在这些私有数组中做迭代就足够了，而不用迭代所有元件的整个数组。

```
//+------------------------------------------------------------------+
//| ON_WINDOW_UNROLL 事件                                           |
//+------------------------------------------------------------------+
bool CWndEvents::OnWindowUnroll(void)
  {
//--- 如果是 "展开窗口" 信号
   if(m_id!=CHARTEVENT_CUSTOM+ON_WINDOW_UNROLL)
      return(false);
//--- 活动窗口的索引
   int awi=m_active_window_index;
//--- 如果窗口id和子窗口编号相匹配
   if(m_lparam==m_windows[awi].Id() && (int)m_dparam==m_subwin)
     {
      int elements_total=CWndContainer::ElementsTotal(awi);
      for(int e=0; e<elements_total; e++)
        {
         //--- 显示除了表单中的全部元件 ...
         if(m_wnd[awi].m_elements[e].ClassName()!="CWindow")
           {
            //--- ... 除非是在下拉列表中的
            if(!m_wnd[awi].m_elements[e].IsDropdown())
               m_wnd[awi].m_elements[e].Show();
           }
        }
      //--- 如果有页面，只显示所选择页面的元件
      int tabs_total=CWndContainer::TabsTotal(awi);
      for(int t=0; t<tabs_total; t++)
         m_wnd[awi].m_tabs[t].ShowTabElements();
      //--- 如果有树形视图列表，就只显示选择的页面项目的元件
      int treeview_total=CWndContainer::TreeViewListsTotal(awi);
      for(int tv=0; tv<treeview_total; tv++)
         m_wnd[awi].m_treeview_lists[tv].ShowTabElements();
     }
//--- 更新所有元件的位置
   MovingWindow();
   m_chart.Redraw();
   return(true);
  }
```

在 **CWndEvents::OnOpenDialogBox** () 方法中应该加入相同的循环，用于 **CTabs** 类型(tab)的元件。我们不在这里提供代码了，可以节省些本文中的空间。

清空树形视图列表中这些私有数组也很重要，以下代码应该加到 **CWndEvents::Destroy** () 方法中, 就像其它控件的私有数组一样处理:

```
::ArrayFree(m_wnd[w].m_treeview_lists);
```

### 测试树形视图元件

看起来测试树形视图的准备工作都完成了，我们将使用来自前面文章中的EA交易，把除了主菜单和状态条的其它所有元件都清除，另外，我们要声明 **CTreeView** 类类型的实例，用于创建树形视图列表的方法，定义它们距离表单边缘的距离:

```
class CProgram : public CWndEvents
  {
private:
   //--- 树形视图
   CTreeView         m_treeview;
   //---
private:
   //--- 树形视图
#define TREEVIEW1_GAP_X       (2)
#define TREEVIEW1_GAP_Y       (43)
   bool              CreateTreeView(void);
  };
```

作为实例，我们创建在本文中早些时候使用的图 **12** 中展示的树形视图 (参见下方代码)，在列表中一共有 **25** 个项目，可见的项目不超过 **10** 。在文章的相同部分，有了明确的说明，为了创建这样的列表，它的参数需要独立设置，在构建每个项目的参数数组之前，最好在表格编辑器中显示它们，通过这样简单的可视化工作将使任务简化而减少犯错误的风险。

我们将为每组项目都设置图片，第一个项目将包含列表例如，我们将在创建元件后展开它(**true** 状态), 而对于列表中的其他项目，我们将它们收起来(**false** 状态)，我们启用这样的模式，(1) 当鼠标光标掠过时突出显示项目, (2) 在临近区域内显示项目的内容 以及 (3) 可以修改列表区域的宽度，

在设置好所有的元件属性以后，我们将使用参数加入项目，使用 **CTreeView::AddItem** () 方法把它们加到数组中。之后就创建树形视图，然后在库中保存它的指针。

```
//+------------------------------------------------------------------+
//| 创建树形视图                            |
//+------------------------------------------------------------------+
bool CProgram::CreateTreeView(void)
  {
//--- 树形视图中的项目数量
#define TREEVIEW_ITEMS 25
//--- 保存窗口的指针
   m_treeview.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+TREEVIEW1_GAP_X;
   int y=m_window1.Y()+TREEVIEW1_GAP_Y;
//--- 构建树形视图的数组:
//    项目的图片
#define A "Images\\EasyAndFastGUI\\Icons\\bmp16\\advisor.bmp"   // EA交易
#define I "Images\\EasyAndFastGUI\\Icons\\bmp16\\indicator.bmp" // 指标
#define S "Images\\EasyAndFastGUI\\Icons\\bmp16\\script.bmp"    // 脚本
   string path_bmp[TREEVIEW_ITEMS]=
     {A,I,I,I,I,I,I,I,I,S,S,S,S,S,S,S,S,S,S,S,S,S,S,A,A};
//--- 项目的描述 (显示的文字)
   string item_text[TREEVIEW_ITEMS]=
     {"Advisor01","Indicators","01","02","03","04","05","06","07",
      "Scripts","01","02","03","04","05","06","07","08","09","10","11","12","13",
      "Advisor02","Advisor03"};
//--- 前面节点的列表总索引
   int prev_node_list_index[TREEVIEW_ITEMS]=
     {-1,0,1,1,1,1,1,1,1,0,9,9,9,9,9,9,9,9,9,9,9,9,9,-1,-1};
//--- 项目的局部列表索引
   int item_index[TREEVIEW_ITEMS]=
     {0,0,0,1,2,3,4,5,6,1,0,1,2,3,4,5,6,7,8,9,10,11,12,1,2};
//--- 节点等级数量
   int node_level[TREEVIEW_ITEMS]=
     {0,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0};
//--- 前一节点的项目局部索引
   int prev_node_item_index[TREEVIEW_ITEMS]=
     {-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1};
//--- 局部列表中的项目数量
   int items_total[TREEVIEW_ITEMS]=
     {2,7,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
//--- 项目列表的状态
   bool item_state[TREEVIEW_ITEMS]=
     {1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
//--- 在创建之前设置属性
   m_treeview.TreeViewAreaWidth(180);
   m_treeview.ContentAreaWidth(0);
   m_treeview.VisibleItemsTotal(10);
   m_treeview.LightsHover(true);
   m_treeview.ShowItemContent(true);
   m_treeview.ResizeListAreaMode(true);
//--- 滚动条的属性
   m_treeview.GetScrollVPointer().AreaBorderColor(clrLightGray);
   m_treeview.GetContentScrollVPointer().AreaBorderColor(clrLightGray);
//--- 增加项目
   for(int i=0; i<TREEVIEW_ITEMS; i++)
      m_treeview.AddItem(i,prev_node_list_index[i],item_text[i],path_bmp[i],
                         item_index[i],node_level[i],prev_node_item_index[i],items_total[i],0,item_state[i],true);
//--- 创建树形视图
   if(!m_treeview.CreateTreeView(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(0,m_treeview);
   return(true);
  }
```

必须在创建MQL应用程序图形界面的主方法中调用这个方法，在本例中，此方法称为 **CProgram::CreateExpertPanel** ()，

我们编译程序并在图表上运行EA交易，结果应该是最终在图片中显示的那样，第一个项目是展开并且被选中的。在右方区域中加上它的内容。

![图 18. 树形视图元件的测试，列表中只有第一个项目是展开的。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-20.hpe "图 18. 树形视图元件的测试，列表中只有第一个项目是展开的。")
![[Pasted image 20260628223600.png]]
图 18. 树形视图元件的测试，列表中只有第一个项目是展开的。

为了向您展示，我们将展开所有项目的列表。所以，必须按下项目的箭头按钮，我们就这样做并选择带有"Scripts"描述的项目以便在内容区域显示列表，结果如下图所示。看起来当项目的数量在范围为 **10** 个可见项目之下无法容纳，滚动条出现了。在内容区域中选中了第三个项目。我们可以看到，当鼠标光标掠过元件列表之间的连接区域时，鼠标光标的用户指针(双向箭头)就出现了。

![图 19. 所有项目的列表都展开了。.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-21.hpe "图 19. 所有项目的列表都展开了。.")
![[Pasted image 20260628223608.png]]
图 19. 所有项目的列表都展开了。.

我们创建另一个EA用于测试页面项目模式，我们根据下图的框架制作三个展开的列表。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-273%3B_32%2Cplg)
![[Pasted image 20260628223621.png]]
图 20. 树形视图概要。

我们在页面项目列表中使用了像 **CCheckBox** 和 **CTable** ，列表中有 "Advisors" 和 "Indicators"，"Scripts"列表页面项目是空的，您可以快速练习，我们不会使用完整的代码，我们只应该注意在这个选项中使用了哪些主要的模式和属性: (1) 启用了页面项目模式, (2) 禁止项目内容的显示 以及 (3) 选中了第三个页面项目。

```
//...
   m_treeview.TabItemsMode(true);
   m_treeview.LightsHover(true);
   m_treeview.ShowItemContent(false);
   m_treeview.SelectedItemIndex((m_treeview.SelectedItemIndex()==WRONG_VALUE) ? 3 : m_treeview.SelectedItemIndex());
//--- 滚动条的属性
//...
```

我们只需要编译并在图表上载入程序，以下屏幕截图展示了结果:

![图 21. 页面项目模式的测试。 ](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-27.hpe "图 21. 页面项目模式的测试。 ")
![[Pasted image 20260628223631.png]]
图 21. 页面项目模式的测试。

### 结论

在本文(系列文章第8部分的第2章)中, 我们探讨了图形界面库中最复杂的元件之一 - 树形视图元件，本文提供了三个用于元件的类:

- **CPointer** 类用于创建用户鼠标光标的指针，
- **CTreeItem** 类用于创建树形视图的项目，
- **CTreeView** 类用于创建树形视图。

在下一篇文章中，我们将进一步深入这个主题，创建一个非常有用的代码类，我们可以在您的MQL应用程序中创建一个文件导航器。

以下是从系列文章第8部分的资料，您可以下载并测试它们。如果您有任何使用这些文件的问题，您可以参考开发过程的对应文章以获得更加详细的信息，或者在文章的留言处问问题。

**第八部分的文章(章节)列表:**

- [图形界面 VIII: 日历控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517)
- [图形界面 VIII: 树形视图控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519!pcrc1)
- [图形界面 VIII: 文件浏览器控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2539](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0519)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-273%3B.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-273%3B%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (324.35 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-273%3B%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (324.47 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[交易员之活学活用: "平静" 优化或绘制交易分布](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0606)

分析交易历史, 并依据仓位的入场时间以 HTML 形式绘制交易结果的分布图表。图表显示三个部分 - 按小时, 按周内天数和按月份。

[在 MetaTrader 4 中的投资组合交易](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0666)

本文揭示了投资组合交易及其在外汇市场中的应用。研究几种简单的投资组合数学模型。本文包含在 MetaTrader4 中的实际投资交易组合的实施例子: 投资组合指标和半自动化智能交易程序。交易策略的元素, 还针对它们的优点和缺陷进行了说明。

[MQL5 对决 QLUA - 为什么在 MQL5 中交易操作速度快达 28 倍?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0615)

您可曾想过您的订单是如何迅速传递到交易所, 它的执行速度如何, 而您的终端需要多久才能收到操作结果？我们已经准备好一场交易操作执行速度的比对, 因为从未有人测量过使用 MQL5 和 QLUA 应用时的这些数值。

[跨平台智能交易程序: 订单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3B0)

MetaTrader 4 和 MetaTrader 5 在处理交易请求时使用不同的约定。本文讨论使用类对象来表达由服务器处理的交易的可能性, 目的是让跨平台智能交易程序可以无视交易平台版本和使用模式均可工作。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F%7B8qmt5ow%7Bv%3Bsa5x9x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dngupo%60omk'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_vepm'3Frgaf.lewrmbmoi%2506wto_aoltgnv%251Dtiqiv.raee'24uvm%5Dccmrakgl%251Dlewrmbmoi.rrmmm.24%2C2226%26c%3Drruwvorbnxtwauromqkqsnwidlacuhfn%24s%3F024271cf4%3A07740a5ca%3B1fb7a1017gb31595a16db057770773659504e2bc96f1%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0519%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>