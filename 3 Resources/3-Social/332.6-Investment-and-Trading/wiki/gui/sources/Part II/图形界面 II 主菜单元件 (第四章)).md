---
title: "图形界面 II: 主菜单元件 (第四章))"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-08T13:26:49+00:00Z
created: 2026-06-28
description: "这是图形界面系列第二部分的最后一章。在此，我们将探讨主菜单的创建，演示这个控件的开发以及设置库中类的处理函数以正确回应用户的操作。我们还将讨论如何把上下文菜单附加到主菜单项目中。另外，我们还会提到怎样阻止当前没有激活的元件。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_22)
- [开发创建主菜单的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_23)
- [测试主菜单的设置](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_24)
- [阻止非活动控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_25)
- [与主菜单的通信方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_26)
- [主菜单的最终测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_27)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_28)

### 简介

第一篇文章， [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细探讨了这个库的目标。文章链接的完整列表在系列文章每章的最后。在那里您还可以下载当前开发阶段的库的完整版本。文件在目录中的位置必须和在档案中相同。

这是图形界面系列第二部分的最后一章。在此，我们将探讨主菜单的创建，演示这个控件的开发以及设置库中类的处理函数以正确回应用户的操作。我们还将讨论如何把上下文菜单附加到主菜单项目中。另外，我们还会谈到阻止当前非活动的元件。

### 开发创建主菜单的类

在前面的三章中，已经开发了用于创建程序主菜单的所有元件的类。我们已经有了以下的类：

在 **Controls** 文件夹创建 **MenuBar.mqh** 文件，该文件夹下包含了所有元件的文件。在这个文件中，包含基类的文件，表单类的文件以及构成它的所有组合元件的文件：

```
//+------------------------------------------------------------------+
//|                                                      MenuBar.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "MenuItem.mqh"
#include "ContextMenu.mqh"
```

主菜单的基本对象是背景和菜单项，上下文菜单将通过指针附加到主菜单的菜单项中。

![图 1. 主菜单的基本部分.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-17.rne "图 1. 主菜单的基本部分.")
![[Pasted image 20260628212027.png]]
图 1. 主菜单的基本部分.

**CMenuBar** 类的初始构造包含了所需类的实例，指针以及每个元件标准的虚方法如以下代码所示。

```
//+------------------------------------------------------------------+
//| 创建主菜单的类                                                     |
//+------------------------------------------------------------------+
class CMenuBar : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //--- 用于创建菜单项的对象
   CRectLabel        m_area;
   CMenuItem         m_items[];
   //--- 上下文菜单指针数组
   CContextMenu     *m_contextmenus[];
   //---
public:
                     CMenuBar(void);
                    ~CMenuBar(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object) { m_wnd=::GetPointer(object); }

   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
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
   //---
  };
```

与任何其他界面元件类似，必须可以设置主菜单的外观。为此将特别创建用于设置的栏位和方法：

- 主菜单的背景属性；
- 菜单项的通用属性。

另外，还需要设置和取得主菜单当前状态的方法。所有这些栏位在构造函数中需要使用默认数值进行初始化。主菜单的默认高度是 **22** 个像素，菜单项的高度将根据主菜单背景的高度而自动计算。但是，这个值在把元件附加到图表之前也可以通过基类的 **CElement::YSize** () 方法来修改。主菜单背景的宽度等于它将要附加到表单的宽度，这就是为什么我们让这个参数的计算在把元件附加到图表时自动进行。

```
class CMenuBar : public CElement
  {
private:
   //--- 背景属性
   int               m_area_zorder;
   color             m_area_color;
   color             m_area_color_hover;
   color             m_area_border_color;
   //--- 菜单项的通用属性
   int               m_item_y_size;
   color             m_item_color;
   color             m_item_color_hover;
   color             m_item_border_color;
   int               m_label_x_gap;
   int               m_label_y_gap;
   color             m_label_color;
   color             m_label_color_hover;
   //--- 主菜单的状态
   bool              m_menubar_state;
   //---
public:
   //--- 主菜单(1) 背景 和(2) 背景框 的颜色
   void              MenuBackColor(const color clr)       { m_area_color=clr;                    }
   void              MenuBorderColor(const color clr)     { m_area_border_color=clr;             }
   //--- 主菜单项的(1) 背景色, (2) 鼠标掠过的背景色 和 (3)边框颜色
   void              ItemBackColor(const color clr)       { m_item_color=clr;                    }
   void              ItemBackColorHover(const color clr)  { m_item_color_hover=clr;              }
   void              ItemBorderColor(const color clr)     { m_item_border_color=clr;             }
   //--- 文字标签距离菜单项背景边缘的距离
   void              LabelXGap(const int x_gap)           { m_label_x_gap=x_gap;                 }
   void              LabelYGap(const int y_gap)           { m_label_y_gap=y_gap;                 }
   //--- 文字的 (1) 标准颜色 (2)有焦点的颜色
   void              LabelColor(const color clr)          { m_label_color=clr;                   }
   void              LabelColorHover(const color clr)     { m_label_color_hover=clr;             }
   //--- 主菜单的状态
   void              State(const bool state);
   bool              State(void)                    const { return(m_menubar_state);             }
   //---
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　　　　　　　　　　　　　　　　　　　　                        |
//+------------------------------------------------------------------+
CMenuBar::CMenuBar(void) : m_menubar_state(false),
                           m_area_zorder(0),
                           m_area_color(C'240,240,240'),
                           m_area_border_color(clrSilver),
                           m_item_color(C'240,240,240'),
                           m_item_color_hover(C'51,153,255'),
                           m_item_border_color(C'240,240,240'),
                           m_label_x_gap(15),
                           m_label_y_gap(3),
                           m_label_color(clrBlack),
                           m_label_color_hover(clrWhite)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 主菜单的默认高度
   m_y_size=22;
  }
//+------------------------------------------------------------------+
//| 设置主菜单的状态        　　　　　　　　　　　　　　　　　             |
//+------------------------------------------------------------------+
void CMenuBar::State(const bool state)
  {
   if(state)
      m_menubar_state=true;
   else
     {
      m_menubar_state=false;
      //--- 循环迭代主菜单的所有菜单项
      //    以设置禁用的上下文菜单的状态
      int items_total=ItemsTotal();
      for(int i=0; i<items_total; i++)
         m_items[i].ContextMenuState(false);
      //--- 解锁表单
      m_wnd.IsLocked(false);
     }
  }
```

设置每个菜单项的属性需要数组。特别的属性是：

- 菜单项的宽度；
- 显示文字。

这些属性将在把主菜单附加到图表之前设置，也就是在把每个菜单项加到菜单的时候设置。为此，将使用 **CMenuBar::AddItem** () 方法，它与之前创建的 **CContextMenu** 类中的方法类似，唯一的区别就是它们传入(设置)的参数不同。

让我们创建 **CMenuBar::AddContextMenuPointer** () 方法用来把上下文菜单附加到主菜单的菜单项中，主菜单项的索引以及上下文菜单对象用于传入此方法，上下文菜单对象的指针将被保存在 **m\_contextmenus** \[\] 数组中。

```
class CMenuBar : public CElement
  {
private:
   //--- 菜单项特殊属性的数组:
   //    (1) 宽度, (2) 文字
   int               m_width[];
   string            m_label_text[];
   //---
public:
   //--- 在创建主菜单之前使用特定的属性增加菜单项
   void              AddItem(const int width,const string text);
   //--- 把传入的上下文菜单附加到指定的主菜单项上
   void              AddContextMenuPointer(const int index,CContextMenu &object);
   //---
  };
//+------------------------------------------------------------------+
//| 增加一个菜单项              　　　　　　　　　　　　　　              |
//+------------------------------------------------------------------+
void CMenuBar::AddItem(const int width,const string text)
  {
//--- 把数组大小增加一个元件  
   int array_size=::ArraySize(m_items);
   ::ArrayResize(m_items,array_size+1);
   ::ArrayResize(m_contextmenus,array_size+1);
   ::ArrayResize(m_width,array_size+1);
   ::ArrayResize(m_label_text,array_size+1);
//--- 保存传入参数的值
   m_width[array_size]      =width;
   m_label_text[array_size] =text;
  }
//+------------------------------------------------------------------+
//| 增加上下文菜单指针         　           　　　　　　　　　　　　　    |
//+------------------------------------------------------------------+
void CMenuBar::AddContextMenuPointer(const int index,CContextMenu &object)
  {
//--- 检查是否超出范围
   int size=::ArraySize(m_contextmenus);
   if(size<1 || index<0 || index>=size)
      return;
//--- 保存指针
   m_contextmenus[index]=::GetPointer(object);
  }
```

我们还需要用于取得主菜单项指针以及附加到菜单项上上下文指针的方法，这些方法中的每个都要检查数组的大小，如果数组的范围被超出，就要调整索引。另外，还需要进行许多主菜单和上下文菜单中菜单项的循环迭代，这也是为什么需要取得它们数组大小的方法。

```
class CMenuBar : public CElement
  {
public:
   //--- (1) 取得指定菜单项的指针， (2) 取得指定上下文菜单的指针
   CMenuItem        *ItemPointerByIndex(const int index);
   CContextMenu     *ContextMenuPointerByIndex(const int index);

   //--- (1) 菜单项 以及 (2) 上下文菜单　的数量
   int               ItemsTotal(void)               const { return(::ArraySize(m_items));        }
   int               ContextMenusTotal(void)        const { return(::ArraySize(m_contextmenus)); }
   //---
  };
//+------------------------------------------------------------------+
//| 根据索引返回菜单项指针　                 　　　　　　　　　  　　　    |
//+------------------------------------------------------------------+
CMenuItem *CMenuBar::ItemPointerByIndex(const int index)
  {
   int array_size=::ArraySize(m_items);
//--- 如果主菜单不包含任何菜单项，就报错
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
      "主菜单至少要包含一个菜单项!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 : (index<0)? 0 : index;
//--- 返回指针
   return(::GetPointer(m_items[i]));
  }
//+------------------------------------------------------------------+
//|　根据索引返回上下文菜单的指针       　　　　　　　　　　               |
//+------------------------------------------------------------------+
CContextMenu *CMenuBar::ContextMenuPointerByIndex(const int index)
  {
   int array_size=::ArraySize(m_contextmenus);
//--- 如果主菜单不包含任何菜单项，就报错
   if(array_size<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
      "主菜单至少要包含一个菜单项!");
     }
//---如果超出范围就做调整
   int i=(index>=array_size)? array_size-1 : (index<0)? 0 : index;
//--- 返回指针
   return(::GetPointer(m_contextmenus[i]));
  }
```

构造主菜单的过程与在 **CContextMenu** 类中构建上下文菜单没有任何本质不同，实际上，主菜单的创建还更简单一些，因为主菜单不需要指向前一节点的指针。它也不包含分割线。为了节约文章的空间，我们就不探讨那些方法的代码了。您可以在附加于文章末尾的 **MenuBar.mqh** 文件中查询它们。

之前，为了确保上下文菜单的菜单项加到 **CWndContainer** 类中的元件库中，我们写了 **AddContextMenuElements** () 特别方法。它会在 **CWndContainer::AddToElementsArray** () 主方法中调用，把元件加到库中。为了主菜单元件，必须也要写相同的方法，否则菜单项就不能和表单一起移动，也不能在鼠标掠过它们时改变颜色。

以下是一个简短的操作列表，用于把主菜单的复合元件加到库中以及把主菜单元件指针加到私有数组中。

- 把元件类的文件包含到 **WndContainer.mqh** 文件中。
- 把元件数组加到 **WindowElements** 结构中。
- 加上用于取得私有数组中主菜单数量的方法.
- 声明并实现私有方法用于把指针保存到属于另一个主元件的元件之中。
- 把新方法的调用放到通用方法中，它是在应用程序类中专门用于把主元件指针加到库中的。

以下是来自 **WndContainer.mqh** 文件的精简版代码，只是显示了需要增加的代码部分：

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "MenuBar.mqh"
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                                            |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 元件数组结构
   struct WindowElements
     {
      //--- 主菜单数组
      CMenuBar         *m_menu_bars[];
     };
   //---
public:
   //--- 主菜单数量
   int               MenuBarsTotal(const int window_index);
   //---
private:
   //--- 把主菜单元件指针保存到库中
   bool              AddMenuBarElements(const int window_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 根据指定的窗口索引返回主菜单的数量　　　　　　　　　　　　　             |
//+------------------------------------------------------------------+
int CWndContainer::MenuBarsTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_menu_bars));
  }
//+------------------------------------------------------------------+
//| 把指针加到元件数组                                                 |
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
   if(AddMenuBarElements(window_index,object))
      return;
  }
//+------------------------------------------------------------------+
//| 把主菜单对象的指针保存到库中   　　　　　　　　　　                    |
//+------------------------------------------------------------------+
bool CWndContainer::AddMenuBarElements(const int window_index,CElement &object)
  {
//--- 如果不是主菜单就退出
   if(object.ClassName()!="CMenuBar")
      return(false);
//--- 取得主菜单的指针
   CMenuBar *mb=::GetPointer(object);
//--- 在库中保存它的对象指针
   int items_total=mb.ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 加大元件数组
      int size=::ArraySize(m_wnd[window_index].m_elements);
      ::ArrayResize(m_wnd[window_index].m_elements,size+1);
      //--- 取得菜单项的指针
      CMenuItem *mi=mb.ItemPointerByIndex(i);
      //--- 在数组中保存指针
      m_wnd[window_index].m_elements[size]=mi;
      //--- 把菜单项中的对象指针加到通用数组中
      AddToObjectsArray(window_index,mi);
     }
//--- 把指针加到私有数组中
   AddToRefArray(mb,m_wnd[window_index].m_menu_bars);
   return(true);
  }
```

### 测试主菜单的设置

在本阶段我们可以测试主菜单的设置。我们将使用三个菜单项构建此元件，需要设置每个元件的宽度和显示的文字，而其他属性将使用默认值。

在 **CProgram** 应用程序类中加入创建主菜单的代码，如以下代码所示。在那之前需要调整其他附加于表单的元件的坐标。并且最后，在用于创建图形界面的主方法中加入对 **CProgram::CreateMenuBar** ()新方法的调用。

```
class CProgram : public CWndEvents
  {
private:
   //--- 主菜单
   CMenuBar          m_menubar;
   //---
private:
   //---
#define MENUBAR_GAP_X    (1)
#define MENUBAR_GAP_Y    (20)
   bool              CreateMenuBar(void);
   //---
#define MENU_ITEM1_GAP_X (6)
#define MENU_ITEM1_GAP_Y (45)
   //---
#define SEP_LINE_GAP_X   (6)
#define SEP_LINE_GAP_Y   (75)
   //---
  };
//+------------------------------------------------------------------+
//| 创建交易面板                                                       |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
//--- 创建控件:
//    主菜单
   if(!CreateMenuBar())
      return(false);
//--- 菜单项
//--- 分隔线
//--- 重绘图表
   return(true);
  }
//+------------------------------------------------------------------+
//| 创建主菜单                                                        |
//+------------------------------------------------------------------+
bool CProgram::CreateMenuBar(void)
  {
//--- 主菜单中有三个菜单项
#define MENUBAR_TOTAL 3
//--- 保存窗口指针
   m_menubar.WindowPointer(m_window);
//--- 坐标
   int x=m_window.X()+MENUBAR_GAP_X;
   int y=m_window.Y()+MENUBAR_GAP_Y;
//--- 含有每个菜单项独特属性的数组
   int    width[MENUBAR_TOTAL] ={50,55,53};
   string text[MENUBAR_TOTAL]  ={"File","View","Help"};
//--- 把菜单项加到主菜单
   for(int i=0; i<MENUBAR_TOTAL; i++)
      m_menubar.AddItem(width[i],text[i]);
//--- 创建控件
   if(!m_menubar.CreateMenuBar(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把对象添加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_menubar);
   return(true);
  }
```

编译文件并在图表中载入EA，结果应该如下图截屏所示。主菜单将与表单一起移动而且它的菜单项在有鼠标光标掠过时会改变颜色。

![图 2. 测试主菜单元件.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-14_niehv_%5D1%2Cplg "图 2. 测试主菜单元件.")
![[Pasted image 20260628212115.png]]
图 2. 测试主菜单元件.

### 阻止非活动控件

在创建上下文菜单并把它附加到主菜单项之前，我们的库需要当一个元件激活时，表单及其他元件被屏蔽的功能。为什么要做到这一点呢？这里所说的激活的元件就是通过其他元件调用而变得可见，而不再需要时就隐藏的元件。例如，下拉列表，上下文菜单，日历之类的都属于这种控件。试试在 **MetaTrader** 交易终端中激活任意的上下文菜单或者下拉列表，您会发现当这种类型的元件激活之后，整个终端中的其它控件都变得不可用了。这是显而易见的，例如，当鼠标光标掠过它们时，它们的颜色不再改变。这样屏蔽的原因是为了避免当前被下拉列表挡住的元件再对鼠标光标做出反应。

您所要做的就是复制这个行为，屏蔽被激活控件所属的表单。在这个表单上的任何其他元件都可以通过指针访问到，也就可以在任何时间取得它们的状态。这里的原则很简单 - 如果表单被屏蔽，那么就不需要调用改变元件颜色的方法了。

在 **CWindow** 类中增加一个特别的栏位和方法用于设置和取得表单的状态(屏蔽/未屏蔽)，代码如下所示。在构造函数中， **m\_is\_locked** 栏位必须以 **false** 值做初始化，这就是说表单默认情况下必须是没有屏蔽的。我们可以增加条件，定义只有当表单没有被屏蔽时,表单和它的元件的颜色才能改变。

```
class CWindow : public CElement
  {
private:
   //--- 屏蔽窗口的状态
   bool              m_is_locked;
   //---
public:
   //--- 屏蔽窗口的状态
   bool              IsLocked(void)                                    const { return(m_is_locked);                }
   void              IsLocked(const bool flag)                               { m_is_locked=flag;                   }
   //---
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　　　　     　　　                        |
//+------------------------------------------------------------------+
CWindow::CWindow(void) : m_is_locked(false)
  {
  }
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CWindow::OnEventTimer(void)
  {
//--- 如果窗口
   if(!m_is_locked)
     {
      //--- 修改表单对象的颜色
      ChangeObjectsColor();
     }
  }
```

尽管相关其他的控件，我们现在只有一个可以点击的能够用于测试功能的控件 - 一个菜单项。当鼠标光标掠过时，菜单项的颜色发生改变，这将依赖于它所附加的表单的状态。所以，需要在 **CMenuItem** 类中加入一项检查，如以下代码所示。

```
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CMenuItem::OnEventTimer(void)
  {
//--- 如果窗口是可用的
   if(!m_wnd.IsLocked())
     {
      //--- 如果是禁用的上下文菜单
      if(!m_context_menu_state)
         //--- 修改表单对象的颜色
         ChangeObjectsColor();
     }
  }
```

当上下文菜单可见时，表单必须被屏蔽，代码处理在 **CContextMenu::Show** ()方法中。

```
//+------------------------------------------------------------------+
//| 显示一个上下文菜单                                                 |
//+------------------------------------------------------------------+
void CContextMenu::Show(void)
  {
//--- 如果元件已经可见, 退出
//--- 显示上下文菜单的对象
//--- 显示菜单项
//--- 给可见元件设置状态
//--- 上下文菜单的状态
//--- 在前一节点注册状态
//--- 屏蔽表单
   m_wnd.IsLocked(true);
  }
```

也许看起来在 **CContextMenu::Hide** ()方法中调用 **CWindow::IsLocked** () 方法就足可以去掉屏蔽了，这个选项在多个上下文菜单同时打开时就不适合了。并非它们中的全部都同时关闭。让我们回忆一下，在何种情况下上下文菜单会一起关闭，必须满足一些条件。例如，在 **CContextMenu::CheckHideContextMenus** () 方法中，当检查完所有条件后，发送一个关闭所有上下文菜单的信号。第二种情况，在 **CContextMenu::ReceiveMessageFromMenuItem** () 方法中，当正在处理 **ON\_CLICK\_MENU\_ITEM** 事件时。

我们将会把解除表单屏蔽的代码加到这些方法中。以下是精简版的这些方法的代码。注释将有助于您找到使用黄色高亮显示的代码应当加到何处。

```
//+------------------------------------------------------------------+
//| 检查关闭所有上下文菜单的条件                                         |
//+------------------------------------------------------------------+
void CContextMenu::CheckHideContextMenus(void)
  {
//--- 如果光标在上下文菜单范围之外或者前一节点范围之外
//--- 如果光标在这些元件范围之外, 则 ...
//    ... 需要检查是否之后有上下文菜单被激活
//--- 为此在这个上下文菜单项中作循环 ...
//    ... 以检查是否有菜单项包含上下文菜单
//--- 解锁表单
   m_wnd.IsLocked(false);
//--- 发送隐藏所有上下文菜单的信号
  }
//+------------------------------------------------------------------+
//| 从菜单项接收需要处理的事件                                          |
//+------------------------------------------------------------------+
void CContextMenu::ReceiveMessageFromMenuItem(const int id_item,const int index_item,const string message_item)
  {
//--- 如果消息是来自本程序并且元件ID匹配
//--- 隐藏上下文菜单
//--- 解锁表单
   m_wnd.IsLocked(false);
  }
```

如果在此阶段我们编译所有文件，把之前测试的EA载入到图表中，我们会立即看到，在上下文菜单开启之后，一切都运行得和我们所期待的非常不同。所有的菜单项，即使是那些在激活的上下文菜单中的，都不能改变颜色了。这是不应该发生的。在这种情况下，上下文菜单应该有自己的方法来改变它的菜单项的颜色。如以下代码所示，让我们在 **CContextMenu** 类中创建这样一个方法并在计时器函数中进行调用。

```
class CContextMenu : public CElement
  {
public:
   //--- 当鼠标光标掠过时改变菜单项的颜色
   void              ChangeObjectsColor(void);
  };
//+------------------------------------------------------------------+
//| 计时器                                                            |
//+------------------------------------------------------------------+
void CContextMenu::OnEventTimer(void)
  {
//--- 当鼠标光标掠过时改变菜单项的颜色
   ChangeObjectsColor();
  }
//+------------------------------------------------------------------+
//| 当鼠标光标掠过时改变对象颜色 　　　　　　　　　　　　　　　　　　　      |
//+------------------------------------------------------------------+
void CContextMenu::ChangeObjectsColor(void)
  {
//--- 如果上下文菜单被禁用就退出
   if(!m_context_menu_state)
      return;
//--- 循环迭代所有菜单项
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 修改菜单项的颜色
      m_items[i].ChangeObjectsColor();
     }
  }
```

现在，一切都应该和设计得一样。

![图 3. 测试屏蔽表单和所有控件，除了当前激活的控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-15_niehv_%5D1%2Cplg "图 3. 测试屏蔽表单和所有控件，除了当前激活的控件。")
![[Pasted image 20260628212138.png]]
图 3. 测试屏蔽表单和所有控件，除了当前激活的控件。

### 与主菜单的通信方法

我们将继续开发用于创建主菜单的 **CMenuBar** 类。剩余的部分是关于此元件的管理。让我们仔细考虑主菜单如何在其他例子程序中工作。在程序载入时，主菜单默认是不激活的，在这种状态下，当鼠标光标掠过主菜单项时，它们只是会高亮显示。当点击了其中一个菜单项时，主菜单就被激活，并在点击的菜单项处出现上下文菜单。当主菜单通过这种方式激活时，如果鼠标光标掠过菜单项，上下文菜单会根据鼠标光标掠过哪个菜单项而自动切换。

在我们在库中实现这样的行为之前，让我们创建三个上下文菜单并加到主菜单的菜单项上。为了节约空间，我们将使用一个精简版本，您可以在文章末尾的EA中看到完整的文件。

以下代码只包含了很少的行数。请注意前一个节点的指针是如何传递到上下文菜单以及上下文菜单指针是如何保存在主菜单中的，当设置主菜单的属性时，上下文菜单的坐标就是根据主菜单项的底部来计算的。在其他方面，创建上下文菜单和之前探讨过的没有什么不同。

```
//+------------------------------------------------------------------+
//| 创建上下文菜单                                   　　　　　         |
//+------------------------------------------------------------------+
bool CProgram::CreateMBContextMenu1(void)
  {
//--- 上下文菜单中有三项
//--- 保存窗口指针
   m_mb_contextmenu1.WindowPointer(m_window);
//--- 保存前节点的指针
   m_mb_contextmenu1.PrevNodePointer(m_menubar.ItemPointerByIndex(0));
//--- 把上下文菜单附加到指定的菜单项
   m_menubar.AddContextMenuPointer(0,m_mb_contextmenu1);
//--- 项目名称数组
//--- 可用模式的标签数组
//--- 禁用模式的标签数组
//--- 项目类型数组
//--- 在创建之前设置属性
   m_mb_contextmenu1.FixSide(FIX_BOTTOM);
//--- 在上下文菜单中加入菜单项
//--- 第二个项目后的分隔线
//--- 去除第二项的激活状态
//--- 创建上下文菜单
   if(!m_mb_contextmenu1.CreateContextMenu(m_chart_id,m_subwin))
      return(false);
//--- 把对象添加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_mb_contextmenu1);
   return(true);
  }
```

现在，让我们设置主菜单的 **CMenuBar** 类中的事件处理函数。我们将从处理菜单项的点击开始，在那之前，与 **CMenuItem** 和 **CContextMenu** 类相似, 我们将需要 **OnClickMenuItem** () 方法以及用于从点击的对象名称中展开索引和菜单项ID的方法。

用于取得ID的方法与 **CContextMenu** 类相同，然而， **CMenuBar** 类中对点击菜单项的处理有其特点。检查ID之后会通过从对象名称取得索引后检查上下文菜单指针是否正确，如果没有指针，就会发送一个关闭所有打开的上下文菜单的信号。如果有指针，就只有在点击了菜单项，关闭当前上下文菜单的情况下发送关闭所有上下文菜单的信号。

```
class CMenuBar : public CElement
  {
private:
   //--- 处理菜单项的点击
   bool              OnClickMenuItem(const string clicked_object);
   //--- 根据菜单项名称获取 (1) ID 和 (2) 索引
   int               IdFromObjectName(const string object_name);
   int               IndexFromObjectName(const string object_name);
   //---
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                                      |
//+------------------------------------------------------------------+
void CMenuBar::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标左键点击主菜单项的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      if(OnClickMenuItem(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 点击主菜单项                     　　　　　　　　　　                |
//+------------------------------------------------------------------+
bool CMenuBar::OnClickMenuItem(const string clicked_object)
  {
//--- 如果没有点击在菜单项上, 退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_menuitem_",0)<0)
      return(false);
//--- 从对象名称获得ID和索引
   int id    =IdFromObjectName(clicked_object);
   int index =IndexFromObjectName(clicked_object);
//--- 如果ID不匹配就退出
   if(id!=CElement::Id())
      return(false);
//--- 如果是一个上下文菜单项
   if(CheckPointer(m_contextmenus[index])!=POINTER_INVALID)
     {
      //--- 主菜单的状态依赖于上下文菜单是否可见
      m_menubar_state=(m_contextmenus[index].ContextMenuState())? false : true;
      //--- 设置表单的状态
      m_wnd.IsLocked(m_menubar_state);
      //--- 如果主菜单被禁用
      if(!m_menubar_state)
         //--- 发送一个用于隐藏所有上下文菜单的信号
         ::EventChartCustom(m_chart_id,ON_HIDE_CONTEXTMENUS,0,0,"");
     }
//--- 如果没有上下文菜单指针
   else
     {
      //--- 发送一个用于隐藏所有上下文菜单的信号
      ::EventChartCustom(m_chart_id,ON_HIDE_CONTEXTMENUS,0,0,"");
     }
//---
   return(true);
  }
```

我们应该记得， **ON\_HIDE\_CONTEXTMENUS** 事件的处理是在 **CWndEvents** 类中进行的。我们需要再多调用一轮 **CWndEvents::OnHideContextMenus** ()方法，这样就可以强制关闭所有在库中的主菜单。

```
//+------------------------------------------------------------------+
//| ON_HIDE_CONTEXTMENUS 事件                                         |
//+------------------------------------------------------------------+
bool CWndEvents::OnHideContextMenus(void)
  {
//--- 如果是隐藏所有上下文菜单的信号
   if(m_id!=CHARTEVENT_CUSTOM+ON_HIDE_CONTEXTMENUS)
      return(false);
//--- 隐藏所有上下文菜单
   int cm_total=CWndContainer::ContextMenusTotal(0);
   for(int i=0; i<cm_total; i++)
      m_wnd[0].m_context_menus[i].Hide();
//--- 禁用主菜单
   int menu_bars_total=CWndContainer::MenuBarsTotal(0);
   for(int i=0; i<menu_bars_total; i++)
      false

//---
   return(true);
  }
```

如果我们编译所有文件并把EA载入到图表上，当点击了主菜单项时会打开上下文菜单，而第二次点击之后就会使它关闭。

![图 4. 测试在主菜单中调用上下文菜单。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-1%3A_niehv_%5D1%2Cplg "图 4. 测试在主菜单中调用上下文菜单。")
![[Pasted image 20260628212155.png]]
图 4. 测试在主菜单中调用上下文菜单。

下面，我们将会实现当主菜单激活时，我们可以在鼠标光标掠过时切换上下文菜单的方法，就和 **Windows** 应用程序中的实现一样。为此，我们将需要一个用于高亮显示主菜单项的方法，当它被激活时还有一个辅助方法用于定义激活的主菜单中的活动菜单项 (有焦点的菜单项)。

```
class CMenuBar : public CElement
  {
public:
   //--- 当鼠标光标掠过时改变颜色
   void              ChangeObjectsColor(void);
   //---
private:
   //--- 返回主菜单的活动菜单项
   int               ActiveItemIndex(void);
   //---
  };
//+------------------------------------------------------------------+
//| 当鼠标光标掠过时改变对象颜色 　　　　　　　　　　　　　　　　　　   　   |
//+------------------------------------------------------------------+
void CMenuBar::ChangeObjectsColor(void)
  {
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
      m_items[i].ChangeObjectsColor();
  }
//+------------------------------------------------------------------+
//| 返回活动菜单项的索引　　　　　　　　　　　　　　                       |
//+------------------------------------------------------------------+
int CMenuBar::ActiveItemIndex(void)
  {
   int active_item_index=WRONG_VALUE;
//---
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果菜单项有焦点
      if(m_items[i].MouseFocus())
        {
         //--- 保存索引并退出循环
         active_item_index=i;
         break;
        }
     }
//---
   return(active_item_index);
  }
```

另外，我们会创建一个方法，在鼠标光标掠过激活状态的主菜单时，执行上下文菜单的切换工作。让我们把这个方法命名为 **SwitchContextMenuByFocus** ()。向此方法传入的参数是主菜单中激活的菜单项的索引。这个索引将使得可以定义出哪个上下文菜单会显示出来，所有其他的上下文菜单将会隐藏。同时，需要检查是否有其他从主菜单项中调用打开的上下文菜单。如果有这样的菜单，就要生成 **ON\_HIDE\_BACK\_CONTEXTMENUS** 自定义事件，我们在本文中已经详细探讨了这个事件。

在上下文菜单隐藏后，必须重置菜单项的颜色以避免同时又两个主菜单项为高亮状态。

```
class CMenuBar : public CElement
  {
private:
   //--- 当鼠标光标掠过时切换主菜单上的上下文菜单
   void              SwitchContextMenuByFocus(const int active_item_index);
   //---
  };
//+------------------------------------------------------------------+
//| 当鼠标光标掠过时切换主菜单上的上下文菜单　　　　　　　　　　　　    　　  |
//+------------------------------------------------------------------+
void CMenuBar::SwitchContextMenuByFocus(const int active_item_index)
  {
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果本菜单项没有上下文菜单就转向下一个菜单项
      if(::CheckPointer(m_contextmenus[i])==POINTER_INVALID)
         continue;
      //--- 如果您选定了某个菜单项，就显示它的上下文菜单
      if(i==active_item_index)
         m_contextmenus[i].Show();
      //--- 隐藏其他的上下文菜单
      else
        {
         CContextMenu *cm=m_contextmenus[i];
         //--- 隐藏由其他上下文菜单开启的上下文菜单。
         //    循环迭代当前上下文菜单的菜单项，看是否有这样的菜单。
         int cm_items_total=cm.ItemsTotal();
         for(int c=0; c<cm_items_total; c++)
           {
            CMenuItem *mi=cm.ItemPointerByIndex(c);
            //--- 如果本指针不正确，就转向下一个菜单项
            if(::CheckPointer(mi)==POINTER_INVALID)
               continue;
            //--- 如果本菜单项没有上下文菜单，就转向下一个菜单项
            if(mi.TypeMenuItem()!=MI_HAS_CONTEXT_MENU)
               continue;
            //--- 如果有上下文菜单，并且是激活状态
            if(mi.ContextMenuState())
              {
               //--- 发送信号关闭本菜单项打开的所有上下文菜单
               ::EventChartCustom(m_chart_id,ON_HIDE_BACK_CONTEXTMENUS,CElement::Id(),0,"");
               break;
              }
           }
         //--- 隐藏主菜单的上下文菜单
         m_contextmenus[i].Hide();
         //--- 重置菜单项的颜色
         m_items[i].ResetColors();
        }
     }
  }
```

现在，我们只需要把新创建的方法加到 **CMenuBar** 类的 [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件处理函数中，用于检查鼠标光标移动事件：

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CMenuBar::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果主菜单没有激活，退出
      if(!m_menubar_state)
         return;
      //--- 取得主菜单中激活的菜单项的索引
      int active_item_index=ActiveItemIndex();
      if(active_item_index==WRONG_VALUE)
         return;
      //--- 如果焦点改变，修改它的颜色
      ChangeObjectsColor();
      //--- 根据主菜单激活的菜单项切换上下文菜单
      SwitchContextMenuByFocus(active_item_index);
      return;
     }
  }
```

### 主菜单的最终测试

现在，我们可以测试本文中所完成的全部内容了，在表单上加上几个独立的菜单项，再多增加一个内部的上下文菜单并把它附加到第三个上下文菜单的第二项上，如以下屏幕截图所示，

编译文件并在图表中载入EA，为了得到与以下屏幕截图相同的结果，您可以载入文章末尾附加的文件。

![图 5. 主菜单的总测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-1%3B_nieh%2Cplg "图 5. 主菜单的总测试.")
![[Pasted image 20260628212212.png]]
图 5. 主菜单的总测试.

本文末尾附加的文件中还包含了用于测试的指标，它与上面屏幕截图中的EA有类似的图形界面。还有用于 **MetaTrader 4** 交易平台测试的版本.

### 结论

这是本系列第二部分的最后一篇文章。图形界面开发库很大，但是我们已经探讨了几乎组成它的各个部分。当前的库结构可以用下图中的框架展示，详细的描述可以在第一部分的最后一章中找到。

![图 6. 当前开发阶段库的结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-22.rne "图 6. 当前开发阶段库的结构。")
![[Pasted image 20260628212226.png]]
图 6. 当前开发阶段库的结构。

如果您到达了这个阶段，好消息是最困难部分的工作已经完成。在本系列的第一和第二部分已经探讨了图形界面开发部分最复杂的主题，以后的文章主要侧重于控件的创建，这些资料就简单多了，并且不会再有那些多种多样的类。

您可以在本文中下载当前开发阶段的库文件，图标和本文中其他程序文件(EA交易, 指标和脚本程序)，然后在 **Metatrader 4** 和 **Metatrader 5** 终端上进行测试。如果您对如何使用资料中的文件有问题，您可以参考列表文章中对库开发的详细描述，并且在对应文章的注释部分问问题。

**第二部分文章(章节)列表：**

- [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)
- [图形界面 II: 分隔线和上下文菜单元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222)
- [图形界面 II: 设置库的事件处理函数 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224)
- [图形界面 II: 主菜单元件 (第四章))](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0227!pcrv_21)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2207](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0227)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2005.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2005%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (94.18 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2005%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (101.01 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[过滤的魔力](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3557)

大部分自动化交易系统开发员会使用某种形式的交易信号过滤。 在本文中，我们将探索带通滤波和 Expert Advisor 离散滤波器的创造和实施，以提高自动交易系统的特性。

[在一个 Expert Advisor 内的多个 Expert Advisor 的竞争](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3558)

使用虚拟交易，你可以创建一个自适应的 Expert Advisor，在真实市场上打开和关闭交易。 将多个策略组合到一个 Expert Advisor 内！ 你的多系统 Expert Advisor 会根据虚拟交易的获利能力，自动选择进行真实市场交易的最佳策略。 这种方法可以降低亏损并增加你在市场上操作的获利能力。 进行实验并跟其他人分享你的结果吧！ 我想，很多人会对你的策略组合感兴趣。

[烛台方向统计再现的研究](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3556)

是否能够基于烛台方向的再现趋势，在一天内的特定时间预测市场在即将到来的一小段时间内的市场行为？ 即，是否可以在第一时间找出此类事件。 每个交易者可能都想过这个问题。 本文的目的是尝试基于烛台在特定时间间隔内的统计再现来预测市场行为。

[通过"单元测试"的帮助来提高代码质量](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3559)

就算是简单程序也会经常出现看似难以置信的错误。 “我怎么会编出这种东西？”是我们发现这种错误时的第一反应。 “我应该如何避免它？”则是较少会映入脑海的第二个问题。 编写完美无缺的代码是不可能的，特别是在大型项目里，但可通过技术手段及时检测出这些错误。 本文介绍如何借助通用的“单元测试”方法来提高 MQL4 代码质量。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fhr3c%3A4ff%3Bpovtms1x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F33784%26c%3Dmjjhfaphuxsoixqzznvmgmcwlrdyaxet%24s%3F4%3Abc3g0d8d069%603g3571866582749d3641740g3d9f5ge14gcf7f1%3A6%6006a%60cd7g%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0227%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>