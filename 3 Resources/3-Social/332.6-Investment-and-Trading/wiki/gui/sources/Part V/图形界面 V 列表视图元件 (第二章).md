---
title: "图形界面 V: 列表视图元件 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-06-02T11:52:23+00:00Z
created: 2026-06-28
description: "在前一章中，我们开发了用于创建垂直和水平滚动条的类。在本章中，我们将应用它们，我们将开发一个用于创建列表视图元件的类，它的一个组成部分将是一个垂直滚动条。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_22)
- [列表视图元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_23)
- [开发用于创建元件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_24)
- [测试列表视图的设置](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_25)
- [管理元件的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_26)
- [列表视图的快进](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_27)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0!pcrv_28)

### 简介

第一篇文章 [图形界面I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 解释了库的详细目的. 您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在前一章中，我们开发了用于创建垂直和水平滚动条的类。在本章中，我们将应用它们，我们将开发一个用于创建列表视图元件的类，它的一个组成部分将是一个垂直滚动条。我们还将演示当持续按下滚动条按钮时自动滚动列表视图机制的实现。在最后，我们将使用一个真实的MQL应用程序实例进行详细测试。

### 列表视图元件

图形界面列表视图元件给用户一个多个选项的选择。列表视图项目的总数和在它可视部分的项目数量，在总数太大而不能容纳在界面明显的工作区域时是不同的，在这种情况下就要使用滚动条，

我们将使用几个基本对象和一个内含元件组成列表视图。它们是:

1. 列表视图背景；
2. 列表视图项目数组；
3. 垂直滚动条控件；

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-42il84jn.rne)
![[Pasted image 20260628214138.png]]
图 1. 列表视图元件的组成部分

以下我们将探讨用于创建列表视图元件类的开发。

### 开发用于创建元件的类

为了创建该元件并把它加入正在开发的库中，我们需要创建一个文件并把元件的 **CListView** 类加入其中。在我们的例子中它是 **ListView.mqh** 。然后我们需要在 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "ListView.mqh"
```

与我们在之前的系列文章中讨论过的控件类相似， **CListView** 类有一组标准的方法。为了在这个元件中使用滚动条，必须在 **ListView.mqh** 文件中包含 **Scrolls.mqh** 文件。

```
//+------------------------------------------------------------------+
//|                                                     ListView.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "Scrolls.mqh"
//+------------------------------------------------------------------+
//| 用于创建列表视图的类                         |
//+------------------------------------------------------------------+
class CListView : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CListView(void);
                    ~CListView(void);
   //--- (1) Stores the form pointer
   void              WindowPointer(CWindow &object)                      { m_wnd=::GetPointer(object);       }
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
   //--- (1) 设置, (2) 重设鼠标左键的属性
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CListView::CListView(void)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CListView::~CListView(void)
  {
  }
```

用于设置基本对象(列表视图的组成部分)属性的方法将在它们的创建之前就需要。

- 列表视图对象的高度；
- 列表视图背景边框的颜色；
- 不同状态下项目的背景色；
- 不同状态下项目文字的颜色；

以上属性数值的设定是在类的构造函数中进行的。

```
class CListView : public CElement
  {
private:
   //--- 列表视图背景的属性
   int               m_area_zorder;
   color             m_area_border_color;
   //--- 列表视图项目的属性
   int               m_item_zorder;
   int               m_item_y_size;
   color             m_item_color;
   color             m_item_color_hover;
   color             m_item_color_selected;
   color             m_item_text_color;
   color             m_item_text_color_hover;
   color             m_item_text_color_selected;
   //---
public:
   //--- 项目的高度
   void              ItemYSize(const int y_size)                         { m_item_y_size=y_size;             }
   //--- 背景框的颜色
   void              AreaBorderColor(const color clr)                    { m_area_border_color=clr;          }
   //--- 列表视图项目在不同状态下的颜色
   void              ItemColor(const color clr)                          { m_item_color=clr;                 }
   void              ItemColorHover(const color clr)                     { m_item_color_hover=clr;           }
   void              ItemColorSelected(const color clr)                  { m_item_color_selected=clr;        }
   void              ItemTextColor(const color clr)                      { m_item_text_color=clr;            }
   void              ItemTextColorHover(const color clr)                 { m_item_text_color_hover=clr;      }
   void              ItemTextColorSelected(const color clr)              { m_item_text_color_selected=clr;   }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CListView::CListView(void) : m_item_y_size(18),
                             m_area_border_color(C'235,235,235'),
                             m_item_color(clrWhite),
                             m_item_color_hover(C'240,240,240'),
                             m_item_color_selected(C'51,153,255'),
                             m_item_text_color(clrBlack),
                             m_item_text_color_hover(clrBlack),
                             m_item_text_color_selected(clrWhite)
  {
//--- 设置鼠标左键点击的优先级
   m_area_zorder =1;
   m_item_zorder =2;
  }
```

有三个私有方法和一个公有方法用于创建列表视图的对象,为创建列表视图的项目，声明了一个 **CEdit** 类型的实例数组，这个数组可以用于创建 [OBJ\_EDIT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_gdkt) 类型(可输入栏位)的图形对象。

```
class CListView : public CElement
  {
private:
   //--- 用于创建列表视图的对象
   CRectLabel        m_area;
   CEdit             m_items[];
   CScrollV          m_scrollv;
   //---
public:
   //--- 用于创建列表视图的方法
   bool              CreateListView(const long chart_id,const int window,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateList(void);
   bool              CreateScrollV(void);
  };
```

列表视图的默认大小和它的可见部分等于两个元件，因为不可能创建出只含有一个项目的列表视图。为了设置列表视图的大小以及它的可见部分，让我们创建 **CListView::ListSize** () 和 **CListView::VisibleListSize** () 方法，检验项目的数量不能小于二。

```
class CListView : public CElement
  {
private:
   //--- 列表视图数值的数组
   string            m_value_items[];
   //--- 列表视图的大小和它的可见部分
   int               m_items_total;
   int               m_visible_items_total;
   //---
public:
   //--- 返回 (1)列表视图 以及(2)它的可见部分 的大小
   int               ItemsTotal(void)                              const { return(m_items_total);            }
   int               VisibleItemsTotal(void)                       const { return(m_visible_items_total);    }
   //--- 设置 (1)列表视图 以及(2)它的可见部分 的大小
   void              ListSize(const int items_total);
   void              VisibleListSize(const int visible_items_total);
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CListView::CListView(void) : m_items_total(2),
                             m_visible_items_total(2)
  {
//--- 设置列表视图与它可见部分的大小
   ListSize(m_items_total);
   VisibleListSize(m_visible_items_total);
  }
//+------------------------------------------------------------------+
//| 设置列表视图的大小                         |
//+------------------------------------------------------------------+
void CListView::ListSize(const int items_total)
  {
//--- 不能使列表视图少于两个项目
   m_items_total=(items_total<2) ? 2 : items_total;
   ::ArrayResize(m_value_items,m_items_total);
  }
//+------------------------------------------------------------------+
//| 设置列表视图可见部分的大小                            |
//+------------------------------------------------------------------+
void CListView::VisibleListSize(const int visible_items_total)
  {
//--- 不能使列表视图少于两个项目
   m_visible_items_total=(visible_items_total<2) ? 2 : visible_items_total;
   ::ArrayResize(m_items,m_visible_items_total);
  }
```

还需要用于保存和取得列表视图中突出显示的项目的索引和文字的相关方法。列表视图的第一个项目将默认突出显示，如果在列表视图创建以后，需要突出显示其他项目，使用 **CListView::SelectedItemIndex** () 方法。您将需要在创建列表视图之前，并且在定义了元素的数量之后指定项目的索引。

```
class CListView : public CElement
  {
private:
   //--- 突出显示项目的 (1) 索引 以及 (2) 文字
   int               m_selected_item_index;
   string            m_selected_item_text;
   //---
public:
   //--- 返回/保存列表视图中突出显示项目的 (1) 索引 以及 (2) 文字
   void              SelectedItemIndex(const int index);
   int               SelectedItemIndex(void)                       const { return(m_selected_item_index);    }
   void              SelectedItemText(const string text)                 { m_selected_item_text=text;        }
   string            SelectedItemText(void)                        const { return(m_selected_item_text);     }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CListView::CListView(void) : m_selected_item_index(0),
                             m_selected_item_text("")
  {
//--- ...
  }
//+------------------------------------------------------------------+
//| 保存索引                               |
//+------------------------------------------------------------------+
void CListView::SelectedItemIndex(const int index)
  {
//---如果超出范围就做调整
   m_selected_item_index=(index>=m_items_total)? m_items_total-1 : (index<0)? 0 : index;
  }
```

在列表视图创建之后，并且就在选择一个项目时，该项目必须使用一种不同的颜色突出显示。让我们为此开发 **CListView::HighlightSelectedItem** ()方法。在这个方法的开始，有一项对滚动条当前状态的检查，如果它是活动的并且并且滑轨可以移动，程序就退出此方法。如果检查通过，则在列表视图中取得滑轨的当前位置，取得的数值将用于循环计数器的开始值，在循环的帮助下，我们就可以识别突出显示哪一个元素。

```
class CListView : public CElement
  {
public:
   //--- 突出显示选择的项目
   void              HighlightSelectedItem(void);
  };
//+------------------------------------------------------------------+
//| 突出显示选择的项目                          |
//+------------------------------------------------------------------+
void CListView::HighlightSelectedItem(void)
  {
//--- 如果滚动条是活动的，就退出
   if(m_scrollv.ScrollState())
      return;
//--- 取得滚动条滑轨的当前位置
   int v=m_scrollv.CurrentPos();
//--- 在列表视图可见部分迭代
   for(int r=0; r<m_visible_items_total; r++)
     {
      //--- 如果在列表视图范围之内
      if(v>=0 && v<m_items_total)
        {
         //--- 改变背景色和文字颜色
         m_items[r].BackColor((m_selected_item_index==v) ? m_item_color_selected : m_item_color);
         m_items[r].Color((m_selected_item_index==v) ? m_item_text_color_selected : m_item_text_color);
         //--- 增加计数器
         v++;
        }
     }
  }
```

当列表项目在 **CListView::CreateList** ()方法中创建时，会计算坐标和宽度以使得它们不会占据列表视图背景边框。项目的宽度的计算要考虑列表视图是否会有滚动条。在列表视图中所有低于第一个项目的项目都挨个顶住其上方的项目，有一个像素点的重合。这是为了避免在鼠标光标掠过它们时，当项目被突出显示，在两个像素点之间出现间隙。我们需要在计算列表视图背景高度和滚动条高度时考虑到这一点。在创建了所有元素之后，在方法的末尾，被选择的项目会突出显示，它的文字会被保存。

```
//+------------------------------------------------------------------+
//| 创建列表视图项目                          |
//+------------------------------------------------------------------+
bool CListView::CreateList(void)
  {
//--- 坐标
   int x =CElement::X()+1;
   int y =0;
//--- 计算列表视图项目的宽度
   int w=(m_items_total>m_visible_items_total) ? CElement::XSize()-m_scrollv.ScrollWidth() : CElement::XSize()-2;
//---
   for(int i=0; i<m_visible_items_total; i++)
     {
      //--- 构建对象名称
      string name=CElement::ProgramName()+"_listview_edit_"+(string)i+"__"+(string)CElement::Id();
      //--- 计算 Y 坐标
      y=(i>0) ? y+m_item_y_size-1 : CElement::Y()+1;
      //--- 创建对象
      if(!m_items[i].Create(m_chart_id,name,m_subwin,x,y,w,m_item_y_size))
         return(false);
      //--- 设置属性
      m_items[i].Description(m_value_items[i]);
      m_items[i].TextAlign(m_align_mode);
      m_items[i].Font(FONT);
      m_items[i].FontSize(FONT_SIZE);
      m_items[i].Color(m_item_text_color);
      m_items[i].BackColor(m_item_color);
      m_items[i].BorderColor(m_item_color);
      m_items[i].Corner(m_corner);
      m_items[i].Anchor(m_anchor);
      m_items[i].Selectable(false);
      m_items[i].Z_Order(m_item_zorder);
      m_items[i].ReadOnly(true);
      m_items[i].Tooltip("\n");
      //--- 坐标
      m_items[i].X(x);
      m_items[i].Y(y);
      //--- 大小
      m_items[i].XSize(w);
      m_items[i].YSize(m_item_y_size);
      //--- 面板边缘的距离
      m_items[i].XGap(x-m_wnd.X());
      m_items[i].YGap(y-m_wnd.Y());
      //--- 保存对象指针
      CElement::AddToArray(m_items[i]);
     }
//--- 突出显示选择的项目 
   HighlightSelectedItem();
//--- Store the text of the selected item
   m_selected_item_text=m_value_items[m_selected_item_index];
   return(true);
  }
```

当在 **CListView::CreateScrollV** ()方法中创建滚动条时，在最开始会检查整个列表视图中项目数量与可见部分项目数量的比例，如果项目总数小于或者等于可见部分的项目数，就没有必要继续，程序会退出此方法。然后 (1)保存表单指针, (2) 计算坐标 以及 (3) 设置属性。滚动条元件的ID必须与它的父元件相同。下拉元件的模式也必须相同。

```
//+------------------------------------------------------------------+
//| 创建垂直滚动条                           |
//+------------------------------------------------------------------+
bool CListView::CreateScrollV(void)
  {
//--- 如果项目数量大于列表的大小，则
//    设置垂直滚动条
   if(m_items_total<=m_visible_items_total)
      return(true);
//--- 保存表单指针
   m_scrollv.WindowPointer(m_wnd);
//--- 坐标
   int x=CElement::X()+m_area.X_Size()-m_scrollv.ScrollWidth();
   int y=CElement::Y();
//--- 设置属性
   m_scrollv.Id(CElement::Id());
   m_scrollv.XSize(m_scrollv.ScrollWidth());
   m_scrollv.YSize(CElement::YSize());
   m_scrollv.AreaBorderColor(m_area_border_color);
   m_scrollv.IsDropdown(CElement::IsDropdown());
//--- 创建滚动条
   if(!m_scrollv.CreateScroll(m_chart_id,m_subwin,x,y,m_items_total,m_visible_items_total))
      return(false);
//---
   return(true);
  }
```

在 **Y** 轴上的大小是在创建列表视图的主方法 **CListView::CreateListView** ()中计算的，如上所述，当计算大小时，必须要考虑列表视图项目之间有一个像素点的重叠。也请记住，项目数组也必须严格位于列表视图背景范围之内，不要占据它的边框。

```
//+------------------------------------------------------------------+
//| 创建列表视图                             |
//+------------------------------------------------------------------+
bool CListView::CreateListView(const long chart_id,const int window,const int x,const int y)
  {
//--- 如果没有表单指针，退出
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建列表视图之前, 必须给该类传入 "
              "表单指针: CListView::WindowPointer(CWindow &object)");
      return(false);
     }
//--- 初始化变量
   m_id       =m_wnd.LastId()+1;
   m_chart_id =chart_id;
   m_subwin   =window;
   m_x        =x;
   m_y        =y;
   2

//--- 到边缘的距离
   CElement::XGap(m_x-m_wnd.X());
   CElement::YGap(m_y-m_wnd.Y());
//--- 创建一个按钮
   if(!CreateArea())
      return(false);
   if(!CreateList())
      return(false);
   if(!CreateScrollV())
      return(false);
//--- 如果在对话框窗口或者最小化时隐藏元件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

库的用户将决定，他或她是否需要在鼠标光标掠过列表时突出显示项目，默认条件下，突出显示将被禁用。作为一个额外可调的属性，让我们创建一个方法来设置文字对齐方式 (1)左边缘对齐, (2)右边缘对齐 或者 (3)中间对齐。默认文字是对齐左侧边缘的。

```
class CListView : public CElement
  {
private:
   //--- 当光标掠过时的突出显示模式
   bool              m_lights_hover;
   //--- 列表视图文字的对齐模式
   ENUM_ALIGN_MODE   m_align_mode;
   //---
public:
   //--- (1) 当光标掠过的突出显示模式, (2)文字对齐
   void              LightsHover(const bool state)                       { m_lights_hover=state;             }
   void              TextAlign(const ENUM_ALIGN_MODE align_mode)         { m_align_mode=align_mode;          }
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CListView::CListView(void) : m_lights_hover(false),
                             m_align_mode(ALIGN_LEFT)
  {
//--- ...
  }
```

在创建列表视图之前，数据数组必须被初始化。为此, 创建 **CListView::ValueToList** ()方法用于检查数组大小以及在索引超出数组大小时调整索引。

```
class CListView : public CElement
  {
public:
   //--- 根据指定行的索引设置列表视图的值
   void              ValueToList(const int item_index,const string value);
  };
//+------------------------------------------------------------------+
//| 根据指定索引保存传到列表视图中的值                                 |
//+------------------------------------------------------------------+
void CListView::ValueToList(const int item_index,const string value)
  {
   int array_size=::ArraySize(m_value_items);
//--- 如果上下文菜单中没有项目，就报告
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "当列表视图至少包含一个项目!");
     }
//---如果超出范围就做调整
   int i=(item_index>=array_size)? array_size-1 : (item_index <0)? 0 : item_index;
//--- 保存列表视图中的值
   m_value_items[i]=value;
  }
```

现在，我们将测试带有垂直滚动条的列表视图并随后逐渐增加所有为其管理所需的方法。

### 测试列表视图的设置

因为 **ListView.mqh** 文件已经包含在库中，列表视图元件的类(**CListView**)已经可以由用户在自定义类中使用了。在我们测试包含列表视图之前，我们需要在 **CWndContainer** 类中加入一些内容。列表视图是一个组合元件，因而必须确保把滚动条的指针加到库中。

为此，让我们开发 **CWndContainer::AddListViewElements** ()方法。在这个方法的开始会检查类的名称，如果元件不是列表视图，程序就会退出此方法。之后，增加通用指针数组的大小，并取得对应元件类型的指针，再保存。

```
class CWndContainer
  {
private:
   //--- 把列表视图对象指针保存到库中
   bool              AddListViewElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 把列表视图指针保存到库中                                   |
//+------------------------------------------------------------------+
bool CWndContainer::AddListViewElements(const int window_index,CElement &object)
  {
//--- 如果不是列表视图，退出
   if(object.ClassName()!="CListView")
      return(false);
//--- 取得列表视图指针
   CListView *lv=::GetPointer(object);
//--- 加大元件数组
   int size=::ArraySize(m_wnd[window_index].m_elements);
   ::ArrayResize(m_wnd[window_index].m_elements,size+1);
//--- 取得滚动条指针
   CScrollV *sv=lv.GetScrollVPointer();
//--- 在库中保存元件
   m_wnd[window_index].m_elements[size]=sv;
   return(true);
  }
```

**CWndContainer::AddListViewElements** ()方法是在把元件加到库中的共用主方法中调用的:

```
//+------------------------------------------------------------------+
//| 把指针加到元件数组中                         |
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
//--- 把主菜单对象的指针存储到库中
//--- 在库中保存分割按钮的指针
//--- 在库中保存工具提示的指针
//--- 在库中保存列表视图对象的指针
   if(AddListViewElements(window_index,object))
      return;
  }
```

让我们使用本系列前面部分的EA来做测试。我们将只留下主菜单，以及上下文菜单和状态栏，其他的元件必须被删除。在自定义类中创建一个类的实例，声明用于创建元件的方法并定义距离表单边缘的距离：

```
class CProgram : public CWndEvents
  {
private:
   //--- 列表视图
   CListView         m_listview1;
   //--- 
private:
   //--- 列表视图
#define LISTVIEW1_GAP_X       (2)
#define LISTVIEW1_GAP_Y       (43)
   bool              CreateListView1(void);
  };
```

以下是用于创建列表视图的方法的代码，列表视图将含有20个项目，只有10个项目是可见的。当鼠标光标掠过时我们将启用项目的突出显示。选择列表视图中的第六个(5)项目。这只是一个例子，使用 «SYMBOL» 文字以及项目编号来填充列表.

```
//+------------------------------------------------------------------+
//| 创建列表视图 1                            |
//+------------------------------------------------------------------+
bool CProgram::CreateListView1(void)
  {
//--- 列表视图的大小
#define ITEMS_TOTAL1 20
//--- 保存窗口指针
   m_listview1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+LISTVIEW1_GAP_X;
   int y=m_window1.Y()+LISTVIEW1_GAP_Y;
//--- 在创建之前设置属性
   m_listview1.XSize(100);
   m_listview1.LightsHover(true);
   m_listview1.ListSize(ITEMS_TOTAL1);
   m_listview1.VisibleListSize(10);
   m_listview1.AreaBorderColor(clrDarkGray);
   m_listview1.SelectedItemIndex(5);
//--- 取得滚动条指针
   CScrollV *sv=m_listview1.GetScrollVPointer();
//--- 滚动条的属性
   sv.ThumbBorderColor(C'190,190,190');
   sv.ThumbBorderColorHover(C'180,180,180');
   sv.ThumbBorderColorPressed(C'160,160,160');
//--- 使用数据填充列表视图
   for(int r=0; r<ITEMS_TOTAL1; r++)
      m_listview1.ValueToList(r,"SYMBOL "+string(r));
//--- 创建列表视图
   if(!m_listview1.CreateListView(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(0,m_listview1);
   return(true);
  }
```

创建列表视图的方法必须在创建图形界面的主方法中调用:

```
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 为控件创建表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
//--- 列表视图
   if(!CreateListView1())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

现在，代码可以编译，程序可以在图表中载入了。如果一切正常，您将看到如以下屏幕截图显示的结果:

![图 2. 设置列表视图元件的测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-06.rne "图 2. 设置列表视图元件的测试")
![[Pasted image 20260628214330.png]]
图 2. 设置列表视图元件的测试

看起来很好，但是现在的列表视图不能管理，对象也不能对鼠标光标做出回应。在文章的下个部分中，我们将开发用于管理列表视图的方法。

### 管理元件的方法

首先，让我们创建使得项目在鼠标光标掠过它们时改变颜色的方法。之后，我们将需要一个方法来恢复默认颜色。

```
class CListView : public CElement
  {
public:
   //--- (1) 重设列表视图项目的颜色, (2) 在鼠标光标掠过项目时改变它们的颜色
   void              ResetItemsColor(void);
   void              ChangeItemsColor(const int x,const int y);
  };
```

在 **CListView::ResetItemsColor** ()方法中重设除了选择的项目之外的所有项目的颜色。在方法的开始，标识了滑轨的位置。这个值将保留在变量中，在未来的循环中作为计数器使用以识别选择的项目。

```
//+------------------------------------------------------------------+
//| 重设列表视图的颜色                              |
//+------------------------------------------------------------------+
void CListView::ResetItemsColor(void)
  {
//--- 取得滚动条滑轨的当前位置
   int v=m_scrollv.CurrentPos();
//--- 在列表视图可见部分迭代
   for(int i=0; i<m_visible_items_total; i++)
     {
      //--- 如果列表视图范围没有超过，就增加计数器
      if(v>=0 && v<m_items_total)
         v++;
      //--- 跳过选择的项目
      if(m_selected_item_index==v-1)
         continue;
      //--- 设置颜色 (背景，文字)
      m_items[i].BackColor(m_item_color);
      m_items[i].Color(m_item_text_color);
     }
  }
```

在 **CListView::ChangeItemsColor** ()方法的开始需要通过几项检查，程序在以下情况下将会退出此方法:

- 如果没有启用鼠标掠过项目时突出显示；
- 如果正在操作滚动条；
- 如果不是下拉元件而表单被屏蔽。

然后，与许多此类的其他方法一样，我们使用变量取得滚动条的当前位置，此变量将用于在循环中标识所选择的项目，这样就可以跳过它，因为它的颜色不需要改变。光标的坐标将会传给这个方法，这些坐标将使在循环中识别鼠标位于哪个项目。 **CListView::ChangeItemsColor** () 方法更加详细的代码如下所示。

```
//+------------------------------------------------------------------+
//| 在光标掠过时改变列表视图项目的颜色                               |
//+------------------------------------------------------------------+
void CListView::ChangeItemsColor(const int x,const int y)
  {
//--- 如果禁用光标掠过时项目的突出显示或者滚动条是活动的，退出
   if(!m_lights_hover || m_scrollv.ScrollState())
      return;
//--- 如果不是下拉元件而表单被屏蔽，退出
   if(!CElement::IsDropdown() && m_wnd.IsLocked())
      return;
//--- 取得滚动条滑轨的当前位置
   int v=m_scrollv.CurrentPos();
//--- 识别光标掠过哪个项目并且突出显示
   for(int i=0; i<m_visible_items_total; i++)
     {
      //--- 如果列表视图范围没有超过，就增加计数器
      if(v>=0 && v<m_items_total)
         v++;
      //--- 跳过选择的项目
      if(m_selected_item_index==v-1)
         continue;
      //--- 如果光标掠过次项目，突出显示它
      if(x>m_items[i].X() && x<m_items[i].X2() && y>m_items[i].Y() && y<m_items[i].Y2())
        {
         m_items[i].BackColor(m_item_color_hover);
         m_items[i].Color(m_item_text_color_hover);
        }
      //--- 如果光标没有掠过此项目，根据它的状态设置对应的颜色
      else
        {
         m_items[i].BackColor(m_item_color);
         m_items[i].Color(m_item_text_color);
        }
     }
  }
```

现在, 我们需要在 **CListView** 类的事件处理函数中使用 **CListView::ChangeItemsColor** ()方法了:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CListView::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 列表被隐藏
      if(!CElement::IsVisible())
         return;
      //--- 坐标
      int x=(int)lparam;
      int y=(int)dparam;
      //--- 当鼠标掠过时修改列表视图项目的颜色
      ChangeItemsColor(x,y);
      return;
     }
  }
```

如果我们编译程序做测试，则当我们在列表视图项目上掠过鼠标光标时，它们的颜色将会改变，如以下屏幕截图所示:

![图 3. 当鼠标光标掠过时修改列表视图项目的颜色。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-07_%5D1%2Cplg "图 3. 当鼠标光标掠过时修改列表视图项目的颜色。")
![[Pasted image 20260628214356.png]]
图 3. 当鼠标光标掠过时修改列表视图项目的颜色。

为了使列表视图与滚动条的滑轨一起移动，让我们开发 **CListView::ShiftList** ()方法，此方法在开始也使用变量保存滑轨的当前位置，与之前的方法类似，它将在循环中作为计数器使用，保存列表中选择的项目以及移动数据。参见以下代码。

```
class CListView : public CElement
  {
public:
   //--- 滚动列表视图
   void              ShiftList(void);
  };
//+------------------------------------------------------------------+
//| 随着滚动条移动列表视图                          |
//+------------------------------------------------------------------+
void CListView::ShiftList(void)
  {
//--- 取得滚动条滑轨的当前位置
   int v=m_scrollv.CurrentPos();
//--- 在列表视图可见部分迭代
   for(int i=0; i<m_visible_items_total; i++)
     {
      //--- 如果在列表视图范围之内
      if(v>=0 && v<m_items_total)
        {
         //--- 移动文字，背景色以及文字颜色
         m_items[i].Description(m_value_items[v]);
         m_items[i].BackColor((m_selected_item_index==v) ? m_item_color_selected : m_item_color);
         m_items[i].Color((m_selected_item_index==v) ? m_item_text_color_selected : m_item_text_color);
         //--- 增加计数器
         v++;
        }
     }
  }
```

**CListView::ShiftList** () 方法必须在 **CListView::OnEvent** () 事件处理函数中调用，当时滚动条的 **CScrollV::ScrollBarControl** () 应当返回 **true** 。那是意味着启用了滑轨的管理。

```
class CListView : public CElement
  {
private:
   //--- 鼠标左键的状态 (按下/松开)
   bool              m_mouse_state;
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CListView::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 列表被隐藏
      if(!CElement::IsVisible())
         return;
      //--- 鼠标左键的坐标和状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      //--- 在列表视图中检查焦点
      CElement::MouseFocus(x>CElement::X() && x<CElement::X2() && 
                           y>CElement::Y() && y<CElement::Y2());
      //--- 如果滑轨管理被启用，移动列表
      if(m_scrollv.ScrollBarControl(x,y,m_mouse_state))
         ShiftList();
      //--- 当鼠标掠过时修改列表视图项目的颜色
      ChangeItemsColor(x,y);
      return;
     }
  }
```

在编译程序之后，列表视图就可以通过滚动条的滑轨管理了，如以下屏幕截图所示，一切都以此种方式实现，就算在按下鼠标左键后光标离开了滑轨边界，管理还是会被传送到滚动条，而滑轨会移动。

![图 4. 使用滚动条滑轨管理列表视图。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-04_%5D1%2Cplg "图 4. 使用滚动条滑轨管理列表视图。")
![[Pasted image 20260628214410.png]]
图 4. 使用滚动条滑轨管理列表视图。

现在，我们需要一个用于识别列表视图中被按下项目的方法，让我们创建一个私有方法，并称它为 **CListView::OnClickListItem** ()。另外，还需要 **CListView::IdFromObjectName** () 私有方法，它是用来从对象名称中展开元件ID的，就像我们库中其他元件的类一样。

另外，我们还将需要点击列表视图事件的唯一ID (**ON\_CLICK\_LIST\_ITEM**),把它加到 **Defines.mqh** 文件中:

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_CLICK_LIST_ITEM        (16) // 选择列表视图项目
```

在 **CListView::OnClickListItem** ()方法的开始，会检查点击对象的名称和ID,然后, 有一个局部变量用于保存滑轨的当前位置，这个变量在循环中用做计数器用来识别项目的索引和文字，在方法的末尾，发出一条含有(1) ID为 **ON\_CLICK\_LIST\_ITEM** 的事件, (2) 元件的ID 以及(3) 当前选择项目的文字 的消息。

```
class CListView : public CElement
  {
private:
   //--- 处理列表视图点击事件
   bool              OnClickListItem(const string clicked_object);
   //--- 取得列表视图元件的ID和名称
   int               IdFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 处理按下列表视图项目事件　                      |
//+------------------------------------------------------------------+
bool CListView::OnClickListItem(const string clicked_object)
  {
//--- 如果按下的不是菜单项，就退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_listview_edit_",0)<0)
      return(false);
//--- 从对象名称取得ID和索引
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配就退出
   if(id!=CElement::Id())
      return(false);
//--- 取得滚动条滑轨的当前位置
   int v=m_scrollv.CurrentPos();
//--- 访问列表视图可见部分
   for(int i=0; i<m_visible_items_total; i++)
     {
      //--- 如果选择了列表视图项目
      if(m_items[i].Name()==clicked_object)
        {
         m_selected_item_index =v;
         m_selected_item_text  =m_value_items[v];
        }
      //--- 如果在列表视图范围之内
      if(v>=0 && v<m_items_total)
         //--- 增加计数器
         v++;
     }
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_LIST_ITEM,CElement::Id(),0,m_selected_item_text);
   return(true);
  }
```

现在，我们已经有了所有管理列表视图的所需方法，我们只需把代码放入 **CListView::OnEvent** ()列表视图事件处理函数之中，如以下代码所示。按下列表视图的一个项目会调用 **CListView::HighlightSelectedItem** ()方法，在这个方法中，会跟踪滚动条按钮的点击，如果点击了一个按钮，列表视图会移动到当前滑轨所在的位置。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CListView::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理对象的点击
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果点击了列表视图元件
      if(OnClickListItem(sparam))
        {
         //--- 突出显示项目
         HighlightSelectedItem();
         return;
        }
      //--- 如果点击了滚动条的按钮
      if(m_scrollv.OnClickScrollInc(sparam) || m_scrollv.OnClickScrollDec(sparam))
        {
         //--- 根据滚动条移动列表
         ShiftList();
         return;
        }
     }
  }
```

### 列表视图的快进

我们已经结束了管理列表视图的最小所需开发，我们可以扩展功能，让我们再多创建一个方法，用于在持续按下滚动条的一个按钮时，列表视图的快进移动。

我们需要确认，当时鼠标左键在滚动条的按钮上按下并且在列表视图快进之前有一点延迟，如果不这样做，快进立即进行，在仅点击按钮一次时就不适合了，那时列表视图应该只移动一个项目。把 **SPIN\_DELAY\_MSC** 标识符加到 **Defines.mqh** 文件中，数值等于 **\-450** ，它的意思是延迟将为 **450** 毫秒。

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//--- 启用快进时的延迟　(毫秒)
#define SPIN_DELAY_MSC (-450)
```

以下是 **CListView::FastSwitching** () 方法的代码，我们还需要声明 **m\_timer\_counter** 栏位，它将用作时间计数器。在 **CListView::FastSwitching** ()方法的开始，我们检查列表视图的焦点。如果没有焦点，程序就退出此方法。之后，如果鼠标按键被松开，计数器被复制为延迟的数值(在我们的例子中它是 **\-450** 毫秒)，如果鼠标按键被按下，计数器的值会逐步增加库中计时器的步长值(在本例中它是 **16** 毫秒)，如果有情况阻止程序继续运行，直到计时器大于等于零，一旦条件符合，就检查滚动条按钮的状态，根据哪个按钮被按下，就调用对应的方法，然后列表视图会根据滚动条滑轨当前位置进行移动。

```
class CListView : public CElement
  {
private:
   //--- 用于列表视图快进的计时计数器
   int               m_timer_counter;
private:
   //--- 列表视图的快进
   void              FastSwitching(void);
  };
//+------------------------------------------------------------------+
//| 滚动条的快进                              |
//+------------------------------------------------------------------+
void CListView::FastSwitching(void)
  {
//--- 如果列表视图没有焦点
   if(!CElement::MouseFocus())
      return;
//--- 如果鼠标按键被松开，返回计时器的初始值
   if(!m_mouse_state)
      m_timer_counter=SPIN_DELAY_MSC;
//--- 如果鼠标按键被按下
   else
     {
      //--- 使用设置的步长增加计数器
      m_timer_counter+=TIMER_STEP_MSC;
      //--- 如果小于零，退出
      if(m_timer_counter<0)
         return;
      //--- 如果向上滚动
      if(m_scrollv.ScrollIncState())
         m_scrollv.OnClickScrollInc(m_scrollv.ScrollIncName());
      //--- 如果向下滚动
      else if(m_scrollv.ScrollDecState())
         m_scrollv.OnClickScrollDec(m_scrollv.ScrollDecName());
      //--- 移动列表
      ShiftList();
     }
  }
```

**CListView::FastSwitching** () 方法必须在 **CListView::OnEventTimer** () 计时器函数中调用，如下所示，如果列表视图是一个下拉元件，不需要做另外的检查，否则，我们需要检查，表单是否被屏蔽。

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CListView::OnEventTimer(void)
  {
//--- 如果是下拉元件
   if(CElement::IsDropdown())
      //--- 列表视图的快进
      FastSwitching();
//--- 如果不是下拉元件，要考虑当前表单是否可用
   else
     {
      //--- 如果表单没有屏蔽，则跟踪列表视图的快进功能
      if(!m_wnd.IsLocked())
         FastSwitching();
     }
  }
```

现在，所有用于管理列表视图的方法都开发完毕了，我们可以测试它们了，让我们在之前创建的基础上增加两个列表视图:

![图 5. 在图形界面中测试三个列表视图。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-05_%5D2%2Cplg "图 5. 在图形界面中测试三个列表视图。")
![[Pasted image 20260628214431.png]]
图 5. 在图形界面中测试三个列表视图。

我们将从自定义类(**CProgram**)的事件处理函数中受到列表视图的消息:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下列表视图项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LIST_ITEM)
     {
      if(lparam==m_listview1.Id())
         ::Print(__FUNCTION__," > This message is from the first list view > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      else if(lparam==m_listview2.Id())
         ::Print(__FUNCTION__," > This message is from the second list view > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      else if(lparam==m_listview3.Id())
         ::Print(__FUNCTION__," > This message is from the third list view > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
  }
```

当列表视图被点击时，会在日志中打印如下消息:

```
2016.01.16 13:02:00.085 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the first list view > id: 1016; lparam: 7; dparam: 0.0; sparam: SYMBOL 11
2016.01.16 13:01:59.056 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the third list view > id: 1016; lparam: 9; dparam: 0.0; sparam: SYMBOL 12
2016.01.16 13:01:58.479 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the second list view > id: 1016; lparam: 8; dparam: 0.0; sparam: SYMBOL 9
2016.01.16 13:01:57.868 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the third list view > id: 1016; lparam: 9; dparam: 0.0; sparam: SYMBOL 19
2016.01.16 13:01:56.854 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the second list view > id: 1016; lparam: 8; dparam: 0.0; sparam: SYMBOL 4
2016.01.16 13:01:56.136 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the first list view> id: 1016; lparam: 7; dparam: 0.0; sparam: SYMBOL 9
2016.01.16 13:01:55.433 TestLibrary (GBPUSD,D1) CProgram::OnEvent > This message is from the first list view > id: 1016; lparam: 7; dparam: 0.0; sparam: SYMBOL 14
```

### 结论

在本文中，我们已经探讨了组合控件列表视图，我们还演示了如何使用垂直滚动条，在后面的文章中，我们将讨论另一个组合控件 - **组合框(combobox)**,

您可以在第五部分中下载资料来测试看它如何工作。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第五部分的文章列表:**

- [图形界面 V: 垂直与水平滚动条 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359)
- [图形界面 V: 列表视图元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0)
- 图形界面 V: 组合框控件 (第三章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2380](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F03%3A0)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2182.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2182%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (196.34 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2182%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (196.3 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)