---
title: "图形界面 V: 组合框控件 (第三章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-06-27T17:16:02+00:00Z
created: 2026-06-28
description: "在本系列第五部分的前两章中，我们开发了用于创建滚动条和列表视图的类，在本章中，我们将讨论创建组合框(combobox)控件的类，这也是一个组合控件，包含了第五部分前面章节中讨论的一些元件。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_22)
- [组合框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_23)
- [开发用于创建组合框控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_24)
- [控件事件处理的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_25)
- [把控件类与库引擎相连](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_26)
- [在自定义应用程序的图形界面中测试组合框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_27)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_28)

### 简介

第一篇文章， [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 中详细解释了库的目标，您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在本系列第五部分的前两章中，我们开发了用于创建滚动条和列表视图的类，在那里，我们演示了如何在数据无法容纳在设计区域中时，把滚动条附加到元件之上。在本章中，我们将讨论创建组合框(combobox)控件的类，这也是一个组合控件，包含了第五部分前面章节中讨论的一些元件。

### 组合框控件

**组合框(combobox)** 是一种复合控件，它的主要部分是(1)按钮以及(2)列表视图，当按下按钮时，就会以下拉元件的方式调用列表视图，在选择了一个列表视图项目之后，它的文字会在按钮上显示出来，而列表视图会隐藏起来。当程序包含了多个选项的参数时，就可以使用组合框来创建紧凑的图形界面，

以下是构成组合框控件的基本对象：

1. 元件背景
2. 文字标签 (元件描述)
3. 按钮(Button)
4. 下拉列表视图的标记

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-ioa3.rne)
![[Pasted image 20260628214637.png]]
图 1. 组合框控件的构成部分

在本文的下一个部分中，我们将开发用于创建此控件的类。

### 开发用于创建组合框控件的类

我们将探讨组合框控件开发的所有阶段，这样在将来就可以把本文作为示例来开发相似的类了。首先，创建一个 mqh 文件 (**ComboBox.mqh**) 并在其中包含所有创建组合框所需类的文件。在我们的情况中，这些类文件是:

- **CElement** — 用于创建控件的基类，
- **CWindow** — 控件将要附加其中的表单类，
- **CListView —** 列表视图类，其显示与否由组合框进行管理。

```
//+------------------------------------------------------------------+
//|                                                     ComboBox.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "ListView.mqh"
```

然后, 在 **ComboBox.mqh** 文件中创建创建 **CComboBox** 类以及针对每个元件的标准方法：

```
//+------------------------------------------------------------------+
//| 用于创建组合框的类                             |
//+------------------------------------------------------------------+
class CComboBox : public CElement
  {
private:
   //--- 元件附加的表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CComboBox(void);
                    ~CComboBox(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)                   { m_wnd=::GetPointer(object);                      }
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
   //--- (1) 设置, (2)重设 鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- Reset the color
   virtual void      ResetColors(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                               |
//+------------------------------------------------------------------+
CComboBox::CComboBox(void)
  {
//--- 在基类中保存类的名称
   CElement::ClassName(CLASS_NAME);
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CComboBox::~CComboBox(void)
  {
  }
```

用户应该有机会选择图形界面中自己的颜色设置，为此，他应该能够访问到用于组成控件的对象属性的设置，以下是在创建控件之前设置的属性:

- 控件背景的颜色
- 组合框显示的描述(文本标签)
- 文本标签在 **X** 和 **Y** 轴上的边缘距离
- 不同状态下文本标签的颜色
- 按钮的文字(选中的列表视图项目的文字)
- 按钮大小
- 不同状态下按钮的颜色
- 不同状态下按钮边框的颜色
- 不同状态下按钮文字的颜色
- 箭头的图标 - 活动模式和阻止模式下下拉列表视图的标记
- 箭头图标在 **X** 和 **Y** 轴上的边缘距离

以下代码包含了以上列出的属性相关的栏位和方法:

```
class CComboBox : public CElement
  {
private:
   //--- 组合框属性:
   //    一般背景颜色
   color             m_area_color;
   //--- 文字标签的文字和边缘距离
   string            m_label_text;
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 不同状态下文本标签的颜色
   color             m_label_color;
   color             m_label_color_off;
   color             m_label_color_hover;
   color             m_label_color_array[];
   //--- (1) 按钮的文字 和 (2)它的大小
   string            m_button_text;
   int               m_button_x_size;
   int               m_button_y_size;
   //--- 不同状态下按钮的颜色
   color             m_button_color;
   color             m_button_color_off;
   color             m_button_color_hover;
   color             m_button_color_pressed;
   color             m_button_color_array[];
   //--- 不同状态下按钮
   color             m_button_border_color;
   color             m_button_border_color_off;
   //--- 不同状态下按钮文字的颜色
   color             m_button_text_color;
   color             m_button_text_color_off;
   //--- 标签的边缘距离
   int               m_drop_arrow_x_gap;
   int               m_drop_arrow_y_gap;
   //--- 活动与阻止状态下带有下拉菜单的按钮的标签
   string            m_drop_arrow_file_on;
   string            m_drop_arrow_file_off;
   //--- 鼠标左键点击的优先级
   int               m_area_zorder;
   int               m_button_zorder;
   int               m_zorder;
   //---
public:
   //--- (1) 背景颜色, (2) 设置 以及 (3)返回 文本标签的内容
   void              AreaColor(const color clr)                       { m_area_color=clr;                                }
   void              LabelText(const string label_text)               { m_label_text=label_text;                         }
   string            LabelText(void)                            const { return(m_label_text);                            }
   //--- 文本标签的边缘距离
   void              LabelXGap(const int x_gap)                       { m_label_x_gap=x_gap;                             }
   void              LabelYGap(const int y_gap)                       { m_label_y_gap=y_gap;                             }
   //--- (1) 返回按钮文字, (2) 设置按钮大小
   string            ButtonText(void)                           const { return(m_button_text);                           }
   void              ButtonXSize(const int x_size)                    { m_button_x_size=x_size;                          }
   void              ButtonYSize(const int y_size)                    { m_button_y_size=y_size;                          }
   //--- (1) 背景颜色, (2) 文字标签颜色
   void              LabelColor(const color clr)                      { m_label_color=clr;                               }
   void              LabelColorOff(const color clr)                   { m_label_color_off=clr;                           }
   void              LabelColorHover(const color clr)                 { m_label_color_hover=clr;                         }
   //--- 按钮颜色
   void              ButtonBackColor(const color clr)                 { m_button_color=clr;                              }
   void              ButtonBackColorOff(const color clr)              { m_button_color_off=clr;                          }
   void              ButtonBackColorHover(const color clr)            { m_button_color_hover=clr;                        }
   void              ButtonBackColorPressed(const color clr)          { m_button_color_pressed=clr;                      }
   //--- 按钮边框的颜色
   void              ButtonBorderColor(const color clr)               { m_button_border_color=clr;                       }
   void              ButtonBorderColorOff(const color clr)            { m_button_border_color_off=clr;                   }
   //--- 按钮文字的颜色
   void              ButtonTextColor(const color clr)                 { m_button_text_color=clr;                         }
   void              ButtonTextColorOff(const color clr)              { m_button_text_color_off=clr;                     }
   //--- 设置在活动与阻止状态下下拉菜单按钮的图标
   void              DropArrowFileOn(const string file_path)          { m_drop_arrow_file_on=file_path;                  }
   void              DropArrowFileOff(const string file_path)         { m_drop_arrow_file_off=file_path;                 }
   //--- 标签边缘距离
   void              DropArrowXGap(const int x_gap)                   { m_drop_arrow_x_gap=x_gap;                        }
   void              DropArrowYGap(const int y_gap)                   { m_drop_arrow_y_gap=y_gap;                        }
  };
```

在类的构造函数中使用默认值初始化所有以上列出的属性:

```
//+------------------------------------------------------------------+
//| 构造函数                                |
//+------------------------------------------------------------------+
CComboBox::CComboBox(void) : m_area_color(C'15,15,15'),
                             m_label_text("combobox: "),
                             m_label_x_gap(0),
                             m_label_y_gap(2),
                             m_label_color(clrWhite),
                             m_label_color_off(clrGray),
                             m_label_color_hover(C'85,170,255'),
                             m_button_text(""),
                             m_button_y_size(18),
                             m_button_text_color(clrBlack),
                             m_button_text_color_off(clrDarkGray),
                             m_button_color(clrGainsboro),
                             m_button_color_off(clrLightGray),
                             m_button_color_hover(C'193,218,255'),
                             m_button_color_pressed(C'153,178,215'),
                             m_button_border_color(clrWhite),
                             m_button_border_color_off(clrWhite),
                             m_drop_arrow_x_gap(16),
                             m_drop_arrow_y_gap(1),
                             m_drop_arrow_file_on(""),
                             m_drop_arrow_file_off("")
  {
//--- 设置鼠标左键点击优先级
   m_zorder        =0;
   m_area_zorder   =1;
   m_button_zorder =2;
  }
```

一个组合框将使用五个私有方法创建，它们将在主公有方法 **CComboBox::CreateComboBox** ()中调用，为了取得对列表视图设置和滚动条属性的访问，创建获取这些元件指针的方法:

```
class CComboBox : public CElement
  {
private:
   //--- 用于创建组合框的对象
   CRectLabel        m_area;
   CLabel            m_label;
   CEdit             m_button;
   CBmpLabel         m_drop_arrow;
   CListView         m_listview;
   //---
public:
   //--- 用于创建组合框的方法
   bool              CreateComboBox(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabel(void);
   bool              CreateButton(void);
   bool              CreateDropArrow(void);
   bool              CreateList(void);
   //---
public:
   //--- 返回(1)列表视图 和(2)滚动条 的指针
   CListView        *GetListViewPointer(void)                         { return(::GetPointer(m_listview));                }
   CScrollV         *GetScrollVPointer(void)                          { return(m_listview.GetScrollVPointer());          }
  };
```

除了以上展示的方法的代码，我们将只详细探讨创建列表视图的 **CComboBox::CreateList** ()方法，其他的方法没有什么特别之处，在前面的系列文章中已经学习过了。在那之前，我们必须介绍列表视图的 **CListView** 类中所做的一些改变，

下拉列表视图永远是另外一个元件的组成部分，这就是说，它的事件处理函数中可能需要跟踪它所附加元件的焦点，在我们的例子中，它是一个组合框。在CListView类中增加一个栏位和一个方法来保存列表视图将要附加的组合框的指针。

```
class CListView : public CElement
  {
private:
   //--- 管理列表视图是否可见的元件的指针
   CElement         *m_combobox;
   //---
public:
   //--- 保存组合框指针
   void              ComboBoxPointer(CElement &object)                   { m_combobox=::GetPointer(object); }
  };
```

如果列表视图是下拉的，在创建列表视图的主(公有)方法中增加对指针的检查，如果在列表视图的创建过程中没有指针，那么图形界面的创建过程将会终止，并在日志中显示相关的信息。

以下是 **CListView::CreateListView** ()方法的精简版本:

```
//+------------------------------------------------------------------+
//| 创建列表视图                              |
//+------------------------------------------------------------------+
bool CListView::CreateListView(const long chart_id,const int window,const int x,const int y)
  {
//--- 如果没有表单指针，退出

//--- 如果列表视图是下拉的，则需要它所附加的组合框的指针
   if(CElement::IsDropdown())
     {
      //--- 如果没有组合框的指针，退出
      if(::CheckPointer(m_combobox)==POINTER_INVALID)
        {
         ::Print(__FUNCTION__," > 在创建下拉列表视图之前, 必须向此类传入"
                 "组合框的指针: CListView::ComboBoxPointer(CElement &object)");
         return(false);
        }
     }
//--- 初始化变量
//--- 边缘距离
//--- 创建按钮
//--- 如果窗口是对话框或者是最小化的，隐藏元件
//---
   return(true);
  }
```

现在，我们将回到组合框类(**CComboBox**)的开发中，在最开始的阶段，也就是在类的构造函数中就要设置声明列表视图将是下拉模式的属性:

```
CComboBox::CComboBox(void)
  {
//--- 下拉列表视图模式
   m_listview.IsDropdown(true);
  }
```

当创建列表视图时，表单和组合框的指针都要在方法的开始部分保存，请注意，列表视图和组合框必须有统一的标识符(ID)，因为它们构成了同一个控件。在列表视图创建完毕后，它必须被隐藏。

```
//+------------------------------------------------------------------+
//| 创建列表视图                              |
//+------------------------------------------------------------------+
bool CComboBox::CreateList(void)
  {
//--- 保存表单和组合框的指针
   m_listview.WindowPointer(m_wnd);
   m_listview.ComboBoxPointer(this);
//--- 坐标
   int x=CElement::X2()-m_button_x_size;
   int y=CElement::Y()+m_button_y_size;
//--- 设置属性
   m_listview.Id(CElement::Id());
   m_listview.XSize(m_button_x_size);
//--- 创建控件
   if(!m_listview.CreateListView(m_chart_id,m_subwin,x,y))
      return(false);
//--- 隐藏列表视图
   m_listview.Hide();
   return(true);
  }
```

为了设置列表视图项目的数量以及填充列表视图的值，在 **CComboBox** 类中增加相关的方法:

```
class CListView : public CElement
  {
public:
   //--- 设置 (1)列表视图的大小(项目的数量) 以及(2)它的可见部分
   void              ItemsTotal(const int items_total)                { m_listview.ListSize(items_total);                }
   void              VisibleItemsTotal(const int visible_items_total) { m_listview.VisibleListSize(visible_items_total); }
   
   //--- 根据指定的索引在列表视图中保存传入的值
   void              ValueToList(const int item_index,const string item_text);
  };
//+------------------------------------------------------------------+
//| 根据指定的索引在列表视图中保存传入的值                          |
//+------------------------------------------------------------------+
void CComboBox::ValueToList(const int item_index,const string item_text)
  {
   m_listview.ValueToList(item_index,item_text);
  }
```

为了选择(突出显示)一个列表视图项目，需创建 **CComboBox::SelectedItemByIndex** ()方法，这个方法的唯一参数是将要突出显示的项目的索引，然后，使用列表视图(**CListView**)类中的同名方法来突出显示该项目 (**CListView**), 假如索引超出范围，就要调整索引，在那之后，在组合框按钮上保存并设置项目的文字。

```
class CListView : public CElement
  {
public:
   //--- 根据指定的索引突出显示项目
   void              SelectedItemByIndex(const int index);
  };
//+------------------------------------------------------------------+
//| 根据指定的索引突出显示项目                       |
//+------------------------------------------------------------------+
void CComboBox::SelectedItemByIndex(const int index)
  {
//--- 突出显示列表视图的项目
   m_listview.SelectedItemByIndex(index);
//--- 在按钮上保存和设置文字
   m_button_text=m_listview.SelectedItemText();
   m_button.Description(m_listview.SelectedItemText());
  }
```

我们也将需要一个方法来屏蔽以及解除元件的屏蔽，还有取得它的当前状态。根据元件新的状态，设置其对象对应状态的颜色。本文未来将展示其示例。

```
class CListView : public CElement
  {
public:
   //--- 获取及设置对象的当前状态
   bool              ComboBoxState(void)                        const { return(m_combobox_state);                        }
   void              ComboBoxState(const bool state);
  };
//+------------------------------------------------------------------+
//| 改变组合框的状态                           |
//+------------------------------------------------------------------+
void CComboBox::ComboBoxState(const bool state)
  {
   m_combobox_state=state;
//--- 根据对象的当前状态设置对应的颜色
   m_label.Color((state)?m_label_color : m_label_color_off);
   m_button.Color((state)?m_button_text_color : m_button_text_color_off);
   m_button.BackColor((state)?m_button_color : m_button_color_off);
   m_button.BorderColor((state)?m_button_border_color : m_button_border_color_off);
   m_drop_arrow.State(state);
  }
```

当鼠标光标掠过元件的对象时，如果元件可用，将使用 **CComboBox::ChangeObjectsColor** ()方法来改变它们的颜色:

```
class CListView : public CElement
  {
public:
   //--- 当光标掠过时改变对象的颜色
   void              ChangeObjectsColor(void);
  };
//+------------------------------------------------------------------+
//| 当光标掠过时改变对象的颜色                                     |
//+------------------------------------------------------------------+
void CComboBox::ChangeObjectsColor(void)
  {
//--- 如果元件被阻止，退出
   if(!m_combobox_state)
      return;
//--- 改变对象颜色
   CElement::ChangeObjectColor(m_label.Name(),CElement::MouseFocus(),OBJPROP_COLOR,m_label_color,m_label_color_hover,m_label_color_array);
   CElement::ChangeObjectColor(m_button.Name(),CElement::MouseFocus(),OBJPROP_BGCOLOR,m_button_color,m_button_color_hover,m_button_color_array);
  }
```

**CComboBox::ChangeObjectsColor** ()方法必须在控件的计时器函数 **CComboBox::OnEventTimer** ()中调用。做点前瞻，应该提一下，组合框可以作为一个更加复杂的控件的组成部分，也可以是下拉的，在未来的一篇文章中，我们会谈到下拉日历 - 就是这样的一个元件例子,它的一个组成部分就是组合框。为这样的元件在计时器中改变颜色的条件将如以下代码所示:

1. 如果它是一个下拉元件并且列表视图是隐藏的。
2. 如果第一个条件没有满足，检查表单和元件本身是否可用。

```
//+------------------------------------------------------------------+
//| 计时器函数                               |
//+------------------------------------------------------------------+
void CComboBox::OnEventTimer(void)
  {
//--- 如果这是一个下拉元件并且列表视图是隐藏的
   if(CElement::IsDropdown() && !m_listview.IsVisible())
      ChangeObjectsColor();
   else
     {
      //--- 如果表单和元件没有被阻挡
      if(!m_wnd.IsLocked() && m_combobox_state)
         ChangeObjectsColor();
     }
  }
```

让我们创建 **CComboBox::ChangeComboboxListState** ()方法来管理组合框中列表视图的可见与否，这个方法将把组合框的当前状态改成相反的状态。在方法的开始，会有对元件可用性的检查，如果组合框被阻挡，程序会退出此方法。然后代码会分成两个分支：

1. 如果列表视图已经可见，它会被隐藏并且组合框的按钮会设成相应的颜色。在那之后，如果它不是一个下拉元件，表单必须被解除阻挡而活动元件的标识符必须被重置。
2. 如果列表是隐藏的，它必须显示出来并且组合框按钮会被设成相应的颜色。在分支的末尾，表单必须被阻挡，而活动元件的标识符必须被保存下来。

```
class CListView : public CElement
  {
public:
   //--- 把组合框的当前状态设成相反状态
   void              ChangeComboBoxListState(void);
  };
//+------------------------------------------------------------------+
//| 把组合框的当前状态改成相反状态                               |
//+------------------------------------------------------------------+
void CComboBox::ChangeComboBoxListState(void)
  {
//--- 如果元件被阻挡，退出
   if(!m_combobox_state)
      return;
//--- 如果列表视图可见
   if(m_listview.IsVisible())
     {
      //--- 隐藏列表视图
      m_listview.Hide();
      //--- 设置颜色
      m_label.Color(m_label_color_hover);
      m_button.BackColor(m_button_color_hover);
      //--- 如果不是下拉元件
      if(!CElement::IsDropdown())
        {
         //--- 解除表单的阻挡
         m_wnd.IsLocked(false);
         m_wnd.IdActivatedElement(WRONG_VALUE);
        }
     }
//--- 如果列表视图是隐藏的
   else
     {
      //--- 显示列表视图
      m_listview.Show();
      //--- 设置颜色
      m_label.Color(m_label_color_hover);
      m_button.BackColor(m_button_color_pressed);
      //--- 阻挡表单
      m_wnd.IsLocked(true);
      m_wnd.IdActivatedElement(CElement::Id());
     }
  }
```

### 控件事件处理的方法

我们可以转到设置 **CComboBox::OnEvent** ()控件事件处理函数中了。为此，我们将需要两个辅助 **私有** 方法:

- **CComboBox::OnClickButton** () – 在此方法中处理组合框按钮按下的事件；
- **CComboBox::CheckPressedOverButton** () – 会在此跟踪鼠标左键在组合框按钮上时的状态。

```
class CListView : public CElement
  {
private:
   //--- 处理按钮被按下
   bool              OnClickButton(const string clicked_object);
   //--- 检查组合框按钮上鼠标左键被按下
   void              CheckPressedOverButton(void);
  };
```

**CComboBox::OnClickButton** ()方法的代码很简单，它只包含对按钮按下时对象名称的检查，以及调用之前讨论过的 **CComboBox::ChangeComboBoxListState** ()方法，在以下代码中它管理组合框列表视图是否可见。

```
//+------------------------------------------------------------------+
//| 按下组合框的按钮                           |
//+------------------------------------------------------------------+
bool CComboBox::OnClickButton(const string clicked_object)
  {
//--- 如果对象名称不同，退出  
   if(clicked_object!=m_button.Name())
      return(false);
//--- 改变列表视图的状态
   ChangeComboboxListState();
   return(true);
  }
```

**CComboBox::CheckPressedOverButton** ()方法的代码如下所示，在方法的开始，会检查表单的可用性以及活动元件的标识符，如果表单被阻止并且标识符不匹配，程序会退出此方法。

然后，如果元件上没有焦点，我们就检查列表视图上是否有焦点以及滚动条的状态，如果焦点不在列表视图上，或者滚动条没有在移动，程序会退出此方法。您知道，如果滚动条的滑轨在移动模式下，即使光标离开了滑轨区域它还是能够移动。如果这些条件都没有满足，则:

(1) 列表视图被隐藏,

(2) 元件对象的颜色被恢复，

并且在代码块的末尾，如果标识符不匹配并且元件不是下拉的， (3) 表单必须被解除阻挡。我想提醒您，表单只能被阻挡它的元件解除阻挡。

如果元件上有焦点，首先会检查列表视图是否可见，如果列表是可见的，就没有必要继续，程序会退出此方法，如果列表是隐藏的，根据焦点是否在组合框按钮上会设置对应的颜色。

```
//+------------------------------------------------------------------+
//| 检查是否在按钮上按下了鼠标左键                             |
//+------------------------------------------------------------------+
void CComboBox::CheckPressedOverButton(void)
  {
//--- 如果表单被阻挡并且标识符不匹配，退出
   if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
      return;
//--- 如果没有焦点
   if(!CElement::MouseFocus())
     {
      //--- 如果列表视图上没有焦点或者启用了滚动条，退出
      if(m_listview.MouseFocus() || m_listview.ScrollState())
         return;
      //--- 隐藏列表视图
      m_listview.Hide();
      //--- 恢复颜色
      ResetColors();
      //--- 如果标识符匹配并且元件不是下拉的
      if(m_wnd.IdActivatedElement()==CElement::Id() && !CElement::IsDropdown())
         //--- 解除表单的阻挡
         m_wnd.IsLocked(false);
     }
//--- 如果有焦点
   else
     {
      //--- 如果列表视图可见，退出
      if(m_listview.IsVisible())
         return;
      //--- 根据焦点设置颜色
      if(m_button.MouseFocus())
         m_button.BackColor(m_button_color_pressed);
      else
         m_button.BackColor(m_button_color_hover);
     }
  }
```

对 **CComboBox::OnClickButton** ()方法的调用必须传入以 [CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 标识符标记的图形对象按下事件处理模块:

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CComboBox::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理在对象上按下鼠标左键的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 按下组合框按钮
      if(OnClickButton(sparam))
         return;
     }
  }
```

在调用 [CComboBox::CheckPressedOverButton](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) ()方法之前, 必须在处理 **CHARTEVENT\_MOUSE\_MOVE** 的鼠标光标移动事件代码块中做检查:

- 元件的可见性;
- 元件的可用性;
- 鼠标左键的状态.

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CComboBox::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件隐藏，退出
      if(!CElement::IsVisible())
         return;
      //--- 坐标
      int  x=(int)lparam;
      int  y=(int)dparam;
      //--- 检查元件上的焦点
      CElement::MouseFocus(x>CElement::X() && x<CElement::X2() && 
                           y>CElement::Y() && y<CElement::Y2());
      m_button.MouseFocus(x>m_button.X() && x<m_button.X2() && 
                          y>m_button.Y() && y<m_button.Y2());
      //--- 如果元件被阻挡，退出
      if(!m_combobox_state)
         return;
      //--- 如果鼠标左键松开，退出
      if(sparam=="0")
         return;
      //--- 检查在分割按钮上按下鼠标左键
      CheckPressedOverButton();
      return;
     }
  }
```

在列表视图的一个项目上按下的时候, 会生成如以下代码所示的 **ON\_CLICK\_LIST\_ITEM** 自定义事件，这个消息必须在组合框事件处理函数中被接收。如果元件标识符匹配，也就是说消息来自附加于组合框的列表视图，就把列表视图中突出显示项目的文字保存下来并使用 **CComboBox::ChangeComboBoxListState** ()方法隐藏列表视图。

为了确保与正在开发的应用程序相联系，含有 **ON\_CLICK\_LIST\_ITEM** 标识符的消息需要在 **CProgram** 自定义类中接收到。消息也可以通过组合框发出，使用其唯一的(1)事件标识符, (2)元件标识符 (3)以及组合框描述。为了扩展控件事件的识别，我们还需要加上这样的选项，在 **Defines.mqh** 文件中为组合框控件加上唯一的标识符。

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_CLICK_COMBOBOX_ITEM    (17) // 在组合框列表视图中选择一个项目
```

在这种情况下，在控件的事件处理函数中加上以下使用蓝色突出显示的代码:

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CComboBox::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理列表视图项目被按下的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LIST_ITEM)
     {
      //--- 如果标识符匹配
      if(lparam==CElement::Id())
        {
         //--- 保存或者设置按钮的文字
         m_button_text=m_listview.SelectedItemText();
         m_button.Description(m_listview.SelectedItemText());
         //--- 改变列表视图的状态
         ChangeComboBoxListState();
         //--- 发送相关消息
         ::EventChartCustom(m_chart_id,ON_CLICK_COMBOBOX_ITEM,CElement::Id(),0,m_label_text);
        }
      //---
      return;
     }
  }
```

我们也可以在图表属性改变时设置隐藏列表视图，为此，必须按以下代码所示，处理以 [CHARTEVENT\_CHART\_CHANGE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 标识的事件:

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CComboBox::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理图表属性改变事件
   if(id==CHARTEVENT_CHART_CHANGE)
     {
      //--- 如果元件被阻挡，退出
      if(!m_combobox_state)
         return;
      //--- 隐藏列表视图
      m_listview.Hide();
      //--- 恢复颜色
      ResetColors();
      //--- 解除表单的屏蔽
      m_wnd.IsLocked(false);
      m_wnd.IdActivatedElement(WRONG_VALUE);
      return;
     }
  }
```

用于创建组合框控件的类已经可以用于测试了，但是在那之前它必须与库引擎相连以便正确工作。

### 把控件类与库引擎相连

把一个控件与库引擎相连只需要几个简单的步骤:

> 1.在库的跟文件， **WndContainer.mqh** 中包含控件类的文件。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "ComboBox.mqh"
```

> 2.如有必要，为元件创建一个私有数组以及一个用于取得数组大小的方法，在我们的情况中，下拉列表视图需要一个私有数组。

```
class CWndContainer
  {
protected:
   //--- 元件数组结构
   struct WindowElements
     {
      //--- 所有对象的通用数组
      //--- 所有元件的通用数组

      //--- 元件的私有数组:
      //  上下文菜单数组
      //--- 主菜单数组
      //--- 工具提示
      //--- 不同类型的下拉列表视图数组
      CElement         *m_drop_lists[];
     };
   //--- 每个窗口的元件数组
   WindowElements    m_wnd[];
   //---
public:
   //--- 下拉列表视图的数量
   int               DropListsTotal(const int window_index);
  };
//+------------------------------------------------------------------+
//| 根据指定的窗口索引返回下拉列表视图的数量                            |
//+------------------------------------------------------------------+
int CWndContainer::DropListsTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_drop_lists));
  }
```

> 3.为把指针加到私有数组中创建一个私有方法。在这种情况下，我们需要从组合框控件中取得列表视图的指针，并把它加到私有数组中。另外, 列表视图对象指针和列表视图的滚动条必须加到通用对象数组中。 **CWndContainer::AddComboBoxElements** () 方法的代码如下所示。

```
class CWndContainer
  {
private:
   //--- 把上下文菜单元件指针保存到库中
   //--- 把主菜单元件指针保存到库中
   //--- 把分割按钮元件指针保存到库中
   //--- 把工具提示元件指针保存到库中
   //--- 把列表视图对象指针保存到库中

   //--- 把下拉列表视图元件指针保存到库中
   bool              AddComboBoxElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 把下拉列表视图元件指针保存到私有数组中                              |
//+------------------------------------------------------------------+
bool CWndContainer::AddComboBoxElements(const int window_index,CElement &object)
  {
//--- 如果不是组合框，退出
   if(object.ClassName()!="CComboBox")
      return(false);
//--- 取得组合框指针
   CComboBox *cb=::GetPointer(object);
//---
   for(int i=0; i<2; i++)
     {
      //--- 扩大元件数组
      int size=::ArraySize(m_wnd[window_index].m_elements);
      ::ArrayResize(m_wnd[window_index].m_elements,size+1);
      //--- 把列表加到库中
      if(i==0)
        {
         CListView *lv=cb.GetListViewPointer();
         m_wnd[window_index].m_elements[size]=lv;
         AddToObjectsArray(window_index,lv);
         //--- 把指针加到私有数组中
         AddToRefArray(lv,m_wnd[window_index].m_drop_lists);
        }
      //--- 把滚动条加到库中
      else if(i==1)
        {
         CScrollV *sv=cb.GetScrollVPointer();
         m_wnd[window_index].m_elements[size]=sv;
         AddToObjectsArray(window_index,sv);
        }
     }
//---
   return(true);
  }
```

> 4.如果需要第三项的处理，不要忘记在主方法 **CWndContainer::AddToElementsArray** ()中调用 **CWndContainer::AddComboBoxElements** ()方法。

```
//+------------------------------------------------------------------+
//| 把指针加到元件数组中                          |
//+------------------------------------------------------------------+
void CWndContainer::AddToElementsArray(const int window_index,CElement &object)
  {
//--- 如果库中没有包含控件表单
//--- 如果请求来自不存在的表单
//--- 加到通用元件数组中
//--- 把元件对象加到通用对象数组中
//--- 保存所有表单中最后一个元件的id
//--- 增加元件id计数器

//--- 在库中保存上下文菜单对象的指针
//--- 在库中保存主菜单对象的指针
//--- 在库中保存分割按钮对象的指针
//--- 在库中保存工具提示对象的指针
//--- 在库中保存列表视图对象的指针

//--- 在库中保存组合框控件对象的指针
   if(AddComboBoxElements(window_index,object))
      return;
  }
```

当一个元件是下拉形式时，根据此元件在表单的位置，有时可能超出表单的边界。鼠标光标的位置必须在所有时间中被控制，并且如果图表上有这样的元件，图表的滚动必须被禁止，这将可以避免当鼠标左键按下下拉元件时图表滚动。为此，我们已经在 **CWndEvents** 类中写了 **CWndEvents::SetChartState** ()方法。现在，是时候扩展它，并加上对下拉列表视图的检查了。在以下代码中，这部分用黄色突出显示:

```
//+------------------------------------------------------------------+
//| 设置图表状态                             |
//+------------------------------------------------------------------+
void CWndEvents::SetChartState(void)
  {
   int awi=m_active_window_index;
//--- 当禁止管理时识别事件
   bool condition=false;
//--- 检查窗口
   int windows_total=CWndContainer::WindowsTotal();
   for(int i=0; i<windows_total; i++)
     {
      //--- 如果表单是隐藏的，转到下一个
      if(!m_windows[i].IsVisible())
         continue;
      //--- 在表单的内部处理函数中检查条件
      m_windows[i].OnEvent(m_id,m_lparam,m_dparam,m_sparam);
      //--- 如果有焦点，做出标记
      if(m_windows[i].MouseFocus())
        {
         condition=true;
         break;
        }
     }
//--- 检查下拉列表视图
   if(!condition)
     {
      //--- 取得下拉列表视图总数
      int drop_lists_total=CWndContainer::DropListsTotal(awi);
      for(int i=0; i<drop_lists_total; i++)
        {
         //--- 取得下拉列表视图指针
         CListView *lv=m_wnd[awi].m_drop_lists[i];
         //--- 如果列表视图被激活 (可见)
         if(lv.IsVisible())
           {
            //--- 检查列表视图上的焦点以及滚动条的状态
            if(m_wnd[awi].m_drop_lists[i].MouseFocus() || lv.ScrollState())
              {
               condition=true;
               break;
              }
           }
        }
     }
//--- 检查上下文菜单的焦点
   if(!condition)
     {
      //--- 检查下拉上下文菜单总数
      int context_menus_total=CWndContainer::ContextMenusTotal(awi);
      for(int i=0; i<context_menus_total; i++)
        {
         //--- 如果上下文菜单上有焦点
         if(m_wnd[awi].m_context_menus[i].MouseFocus())
           {
            condition=true;
            break;
           }
        }
     }
//--- 设置所有表单的图表状态
   for(int i=0; i<windows_total; i++)
      m_windows[i].CustomEventChartState(condition);
  }
```

我们为测试组合框控件的准备都已完成了。

### 在自定义应用程序的图形界面中测试组合框控件

让我们在本系列第五部分的自定义应用程序的图形界面中做测试，前一篇文章最后的测试是三个列表视图，让我们保留列表视图，再在应用程序的图形界面上加上四个组合框，其中两个组合框用于测试下拉列表视图对其下方的静态列表视图的影响。另外，我们还要测试 **CWndEvents::SetChartState** ()方法的工作状况。为此，我们把组合框的位置放到当其下拉列表视图可见时，会超出表单边界的位置。

在测试程序的自定义类 **CProgram** 中，组合框类已经通过其基类可以使用了。创建四个 **CComboBox** 类型的类的实例，并为它们中的每一个都声明方法来设置它们距离表单左上角的距离，代码如下所示。

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                          |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 组合框
   CComboBox         m_combobox1;
   CComboBox         m_combobox2;
   CComboBox         m_combobox3;
   CComboBox         m_combobox4;
   //---
private:
   //--- 组合框 1
#define COMBOBOX1_GAP_X       (7)
#define COMBOBOX1_GAP_Y       (50)
   bool              CreateComboBox1(const string text);
   //--- 组合框 2
#define COMBOBOX2_GAP_X       (160)
#define COMBOBOX2_GAP_Y       (50)
   bool              CreateComboBox2(const string text);
   //--- 组合框 3
#define COMBOBOX3_GAP_X       (7)
#define COMBOBOX3_GAP_Y       (202)
   bool              CreateComboBox3(const string text);
   //--- 组合框 4
#define COMBOBOX4_GAP_X       (160)
#define COMBOBOX4_GAP_Y       (202)
   bool              CreateComboBox4(const string text);
  };
```

让我们讨论其中的一个方法，因为它们除了用户设置的属性之外都差不多一样。例如，我们将在创建第四个组合框之后立即阻挡它，以下是创建组合框空间的一系列步骤：

- 在控件类中保存表单指针；
- 计算坐标；
- 声明和初始化列表视图项目使用的文字数组；
- 设置控件的属性，它们中的大部分都使用默认值初始化，如果有需要，这些值在创建控件之前可以重新定义；
- 在组合框列表视图中保存项目的值，
- 如有必要，设置列表视图以及滚动条的属性；
- 突出显示列表视图中的项目；默认会突出显示第一个项目(**0**)；
- 创建控件；
- 如有必要，可以阻挡屏蔽控件，在测试程序中，作为例子我们将屏蔽第四个组合框。
- 在方法的末尾，把对象传给基类以便保存它的指针。

步骤的顺序可以不同，重要的是保证主要三个步骤的顺序:

1. 在控件类中加上表单指针，否则图形界面的创建将会终止，失败的原因可以在日志的消息中看到。
2. 创建控件。
3. 在对象库中保存控件的指针。

```
//+------------------------------------------------------------------+
//| 创建组合框 1                                |
//+------------------------------------------------------------------+
bool CProgram::CreateComboBox1(const string text)
  {
//--- 列表视图项目总数
#define ITEMS_TOTAL1 8
//--- 传入表单对象
   m_combobox1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+COMBOBOX1_GAP_X;
   int y=m_window1.Y()+COMBOBOX1_GAP_Y;
//--- 列表视图中项目内容的数组
   string items_text[ITEMS_TOTAL1]={"FALSE","item 1","item 2","item 3","item 4","item 5","item 6","item 7"};
//--- 在创建之前设置属性
   m_combobox1.XSize(140);
   m_combobox1.YSize(18);
   m_combobox1.LabelText(text);
   m_combobox1.ButtonXSize(70);
   m_combobox1.AreaColor(clrWhiteSmoke);
   m_combobox1.LabelColor(clrBlack);
   m_combobox1.LabelColorHover(clrCornflowerBlue);
   m_combobox1.ButtonBackColor(C'206,206,206');
   m_combobox1.ButtonBackColorHover(C'193,218,255');
   m_combobox1.ButtonBorderColor(C'150,170,180');
   m_combobox1.ButtonBorderColorOff(C'178,195,207');
   m_combobox1.ItemsTotal(ITEMS_TOTAL1);
   m_combobox1.VisibleItemsTotal(5);
//--- 在组合框列表视图中保存项目内容
   for(int i=0; i<ITEMS_TOTAL1; i++)
      m_combobox1.ValueToList(i,items_text[i]);
//--- 取得列表视图指针
   CListView *lv=m_combobox1.GetListViewPointer();
//--- 设置列表视图属性
   lv.LightsHover(true);
   lv.SelectedItemByIndex(lv.SelectedItemIndex()==WRONG_VALUE ?2 : lv.SelectedItemIndex());
//--- 创建控件
   if(!m_combobox1.CreateComboBox(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_combobox1);
   return(true);
  }
```

创建控件的方法必须在创建图形界面的主方法中调用，在我们的例子中，它就是 **CProgram::CreateTradePanel** ()，以下是该方法的精简版本:

```
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单1

//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏

//--- 组合框
   if(!CreateComboBox1("Combobox 1:"))
      return(false);
   if(!CreateComboBox2("Combobox 2:"))
      return(false);
   if(!CreateComboBox3("Combobox 3:"))
      return(false);
   if(!CreateComboBox4("Combobox 4:"))
      return(false);

//--- 列表视图

//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

在 **CProgram** 自定义类的事件处理函数中加入组合框以 **ON\_CLICK\_COMBOBOX\_ITEM** 标识的消息处理模块，让我们确保，假如收到了来自第三个组合框的消息，根据选择了列表视图的哪个项目，第四个组合框的状态会发生改变，在我们的实例中，选择了列表视图中除了第一个(**0**)项目之外的任何项目，第四个组合框都会变成可用状态，选择第一个项目将会阻止屏蔽它。

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 选择了组合框项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_COMBOBOX_ITEM)
     {
      if(sparam==m_combobox1.LabelText())
         ::Print(__FUNCTION__," > This message is from combobox 1 > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      else if(sparam==m_combobox2.LabelText())
         ::Print(__FUNCTION__," > This message is from combobox 2 > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 处理来自第三个组合框的事件
      else if(sparam==m_combobox3.LabelText())
        {
         ::Print(__FUNCTION__," > This message is from combobox 3 > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
         //--- 如果选择了指定的值，禁用组合框 4
         if(m_combobox3.ButtonText()=="FALSE")
            m_combobox4.ComboBoxState(false);
         //--- 如果选择了其他值，启用组合框 4
         else
            m_combobox4.ComboBoxState(true);
        }
      else if(sparam==m_combobox4.LabelText())
         ::Print(__FUNCTION__," > This message is from combobox 4 > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
  }
```

如果我们编译程序并把它载入到图表中，结果将如以下屏幕截图所示:

![图 2. 测试组合框控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-0%3B_%5D1%2Cplg "图 2. 测试组合框控件。")
![[Pasted image 20260628215004.png]]
图 2. 测试组合框控件。

我们已经结束了用于创建组合框的 **CComboBox** 类的开发。

### 结论

在本文中，我们探讨了一个复合控件，组合框。当前开发阶段中创建图形界面库的结构如下所示:

![图 3. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-12_%5D1%2Cplg "图 3. 当前开发阶段的库结构。")
![[Pasted image 20260628215018.png]]
图 3. 当前开发阶段的库结构。

下一篇文章将是致力于图形界面开发库系列的第六部分的开端，在那里，我们将创建用于复选框和编辑框控件的类以及它们的组合类型。

您可以在第五部分中下载资料来测试看它如何工作。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第五部分的文章列表:**

- [图形界面 V: 垂直与水平滚动条 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359)
- [图形界面 V: 列表视图元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A0)
- [图形界面 V: 组合框控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1!pcrv_21)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2381](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F03%3A1)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2183.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2183%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (196.34 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2183%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (196.3 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-8%3B811)** (20)

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 28 12月 2016 在 18:34

**Pavel Kolchin:**  

如果我们考虑 10.3 版，您认为是否有可能在事件处理程序中删除带有新参数的组合框 ，然后在同一位置创建新组合框 ？

![Artyom Trishkin](https://c.mql5.com/avatar/2022/7/62C4775C-ABD6.jpg "Artyom Trishkin")

| 28 12月 2016 在 19:07

**Pavel Kolchin:**  

MT4 库的最新版本是什么？

\----------

...

![Oleksii Chepurnyi](https://c.mql5.com/avatar/2017/2/58AECC00-2B2B.png "Oleksii Chepurnyi")

| 13 6月 2017 在 13:29

下午好。

```
//--- 列表中的项目总数
#define  ITEMS_TOTAL1 8
```

您能告诉我，除了这个功能之外，这个功能还能用在其他地方吗？

我的意思是，如果我把它放在最后。

```
#undef ITEMS_TOTAL1
```

不会影响任何事情吗？

![Alexander Fedosov](https://c.mql5.com/avatar/2019/5/5CE6AA22-02C3.jpg "Alexander Fedosov")

| 22 11月 2019 在 13:24

在创建像这样的下拉列表时：

```
bool CProgram::CreateComboBox(CComboBox &combobox,const int x_gap,const int y_gap)
```

如果在第一个参数中放入一个 [已声明的变量](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Ftapicbneq "MQL5 文档：变量") ，就像这样：

```
if(!CreateComboBox(m_currency_box_1,25,25))
   return(false);
```

似乎一切正常。

但只要第一个参数是一个数组元素，整个界面就会停止响应交互，或者在点击下拉列表时挂起。

```
if(!CreateComboBox(m_currency_box[0],25,25))
   return(false);
```

![Oleksii Chepurnyi](https://c.mql5.com/avatar/2017/2/58AECC00-2B2B.png "Oleksii Chepurnyi")

| 22 11月 2019 在 14:00

**Alexander Fedosov:**  

当您创建这样一个下拉列表时：

如果在第一个参数中放入一个 [已声明的变量](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Ftapicbneq "MQL5 文档：变量") ，例如像这样

一切似乎都很顺利。

但只要第一个参数是一个数组元素，整个界面就会停止响应交互，或者在点击下拉列表时挂起。

嗯...虽然不会崩溃，但如果是数组，字体就会出现问题。我得在自由空间里找找看 )

[图形界面 VI: 复选框控件，编辑框控件以及它们的组合类型 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446)

本文是在MetaTrader终端图形界面开发库系列中第六部分的开端，在第一章中，我们将讨论复选框控件，编辑框控件以及它们的组合类型。

[通用智能交易系统：支持挂单和对冲(第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0424)

本文是对CStrategy交易引擎的进一步描述。由于交易者的广泛需要，我们向交易引擎中添加了支持挂单的相关函数。同时，最新版的MetaTrader 5现在也支持了具有对冲选项的帐户。同样的功能也添加到了CStrategy中。本文给出了使用挂单进行交易和在账户中用CStrategy类进行对冲交易的详细算法描述。

[如何采用 MQL5 创建用于 Telegram 的 bots](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0375)

本文包含了采用 MQL5 逐步创建用于 Telegram 的 bots 教程。对于那些期望将自己的交易机器人与移动终端同步的用户来说, 这些信息十分有用。文章里的 bots 例程可以提供交易信号, 从网站上搜索情报, 发送有关账户余额信息以及图表报价和截图至您的智能手机。

[如何为 MetaTrader 市场创建一款非标准图表的指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B7)

通过离线图表, 以 MQL4 编程, 以及合理的意愿, 您可以得到各种图表类型: "点线图", "Renko", "Kagi", "范围柱线", 等量图表, 等等。在本文中, 我们将展示如何在不使用 DLL 的情况下来实现它, 而且这种 "二并一" 的指标可以发布, 并从市场上购买。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fzy%3Bah01g6nsxuup3r2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmgtctpafep.aoo%250Fxh'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_aoltgnv%251Dtiqiv%2506wto_aaopcien'3Fvkskt%2Cmgtctpafep.aoo.624%26c%3Dukax%7Bihiuozkwf%60shktmikehaofcqulg%24s%3F5%608%3B32e48d6ae43fc2f%3Afff1e000b%3B051%3A1f3dd2c65%3B071f713%601aede513f1ff%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F03%3A1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>