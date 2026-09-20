---
title: "图形界面 II: 设置库的事件处理函数 (第三章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-07T08:24:50+00:00Z
created: 2026-06-28
description: "之前的文章中包含了用于创建主菜单构成部分类的实现. 现在, 是时候在主基础类和创建控件的类中关注事件处理函数了. 我们将特别关注根据鼠标光标的位置来管理图表的状态."
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_22)
- [私有元素数组](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_23)
- [管理图表的状态](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_24)
- [区分外部和内部使用](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_25)
- [增强上下文菜单类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_26)
- [增强菜单项类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_27)
- [增强图形界面事件处理的主类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_28)
- [事件处理函数的预先测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_29)
- [测试多个上下文菜单的调整](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_30)
- [测试在应用程序的自定义类中接收消息](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_31)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_32)

### 简介

第一篇文章 [图形界面I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 解释了库的详细目的. 在每章末尾会有第一部分文章的完整链接列表. 在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

之前的文章中包含了用于创建主菜单构成部分类的实现. 每个控件类的开发都需要预先在主基础类中和创建的空间类中把事件处理函数调整好. 在本文中将会探讨如下问题:

- 每个有意义的控件中的私有数组.
- 在库中加入元件的指针. 这些元件是复杂(组合)元件的组成部分.
- 图表状态的管理依赖于鼠标光标的位置.
- 库中内部使用与外部使用的事件的标识号(ID).

另外, 还将展示在应用程序的自定义类中处理函数接收信息的过程.

### 私有元素数组

让我们做一个小实验. 当鼠标光标位于表单区域之外时, 使用鼠标左键点击一个上下文菜单项. 我们将会看到, 图表的滚动没有被禁用并且在鼠标掠过控件时还在起作用. 这是一个功能性错误, 不应该存在. 我们将会处理这个问题, 这样不论鼠标在哪个控件之上时, 图表的滚动和交易水平移动的模式在那时是被禁止的.

首先, 让我们把对元件焦点的跟踪 增加到上下文菜单处理函数中, 如以下代码所示. 如果上下文菜单是隐藏的, 那么就没有必要继续了. 使用这种方法可以节约时间.

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CContextMenu::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::m_is_visible)
         return;
      //--- 取得焦点
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
     }
  }
```

在库开发的当前阶段, 元件的基类, 或者明确地说 **CWndContainer** 类, 包含了 **m\_elements** \[\] 这个通用元件指针数组. 这是 WindowElements 结构的一部分中的元件数组. 当某个操作需要应用到所有的或者大多数的控件上时, 这个数组正是适合此类状况的. 如果某个操作只是应用于一小部分的元件时, 这种方法就有些多余了, 因为它需要很多资源. 例如, 让我们考虑一组大小可能超过它们所附加的表单的控件. 下拉列表和上下文菜单都属于此类. 每种这样的元件都必须保存在独立的数组中. 这将使得管理更加高效和简单.

把上下文菜单类添加到 **WindowElements** 结构中并创建一个取得它的大小的方法:

```
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                                            |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 元件数组的结构
   struct WindowElements
     {
      //--- 所有对象的通用数组
      CChartObject     *m_objects[];
      //--- 所有元件的通用数组
      CElement         *m_elements[];
      
      //--- 私有的元件数组:
      //    上下文菜单数组
      CContextMenu     *m_context_menus[];
     };
   //--- 每个窗口的元件数组
   WindowElements    m_wnd[];
   //---
public:
   //--- 上下文菜单的数量
   int               ContextMenusTotal(const int window_index);
   //---
  };
//+------------------------------------------------------------------+
//| 根据指定的窗口索引返回上下文菜单的数量                                |
//+------------------------------------------------------------------+
int CWndContainer::ContextMenusTotal(const int window_index)
  {
   if(window_index>=::ArraySize(m_wnd))
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return(::ArraySize(m_wnd[window_index].m_context_menus));
  }
```

每次在应用程序的自定义类(我们的例子中是 **CProgram**)中创建了一个控件之后, 我们使用 **CWndContainer::AddToElementsArray** () 方法在库中加入这个控件的指针. 在这个方法中, 将会使用用于在通用数组中取得和保存每个复杂(组合)控件的元件指针的方法. 之前为上下文菜单我们创建了一个类似的方法, **CWndContainer::AddContextMenuElements** (). 如有需要, 我们要创建类似的方法来把指针分散保存在私有元件数组中.

因而, 我们需要一个模板方法, 用于根据链接把元件指针加到数组中, 因为这个操作将多次重复并且应用于各种不同的对象类型.

```
class CWndContainer
  {
protected:
   //--- 用于通过链接把指针加到数组的模板方法
   template<typename T1,typename T2>
   void              AddToRefArray(T1 &object,T2 &ref_array[]);
   //---
  };
//+------------------------------------------------------------------+
//| 把通过链接(T2)把指针(T1)保存到数组中                                 |
//+------------------------------------------------------------------+
template<typename T1,typename T2>
void CWndContainer::AddToRefArray(T1 &object,T2 &array[])
  {
   int size=::ArraySize(array);
   ::ArrayResize(array,size+1);
   array[size]=object;
  }
```

现在, 上下文菜单的指针可以在 **CWndContainer::AddContextMenuElements** () 方法的末尾保存到它的私有数组中, 代码如下所示 (黄色高亮显示). 让我们在其他控件中使用相同的做法.

```
//+------------------------------------------------------------------+
//| 把上下文菜单对象的指针保存到库中                                     |
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
      //--- 取得菜单项的指针
      CMenuItem *mi=cm.ItemPointerByIndex(i);
      //--- 在数组中保存指针
      m_wnd[window_index].m_elements[size]=mi;
      //--- 把菜单项中的对象指针加到通用数组中
      AddToObjectsArray(window_index,mi);
     }
//--- 把指针加到私有数组中
   AddToRefArray(cm,m_wnd[window_index].m_context_menus);
   return(true);
  }
```

### 管理图表的状态

然后, 在 **CWndEvents** 类中增加用于检查鼠标掠过控件时焦点的方法. 这样的检查需要在表单和下拉列表中进行. 表单和上下文菜单已经有了私有数组. 所以, 让我们创建 **CWndEvents::SetChartState** () 方法. 以下是此方法的声明和实现:

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 设置图表状态
   void              SetChartState(void);
  };
//+------------------------------------------------------------------+
//| 设置图表状态                                                       |
//+------------------------------------------------------------------+
void CWndEvents::SetChartState(void)
  {
//--- 当管理必须禁用时识别事件
   bool condition=false;
//--- Check windows
   int windows_total=CWndContainer::WindowsTotal();
   for(int i=0; i<windows_total; i++)
     {
      //--- 如果这个表单是隐藏的就转到下一个

      if(!m_windows[i].IsVisible())
         continue;
      //--- 在表单内部处理函数中检查条件
      m_windows[i].OnEvent(m_id,m_lparam,m_dparam,m_sparam);
      //--- 如果有焦点, 就注册
      if(m_windows[i].MouseFocus())
        {
         condition=true;
         break;
        }
     }
//--- 检查上下文菜单的焦点
   if(!condition)
     {
      int context_menus_total=CWndContainer::ContextMenusTotal(0);
      for(int i=0; i<context_menus_total; i++)
        {
         if(m_wnd[0].m_context_menus[i].MouseFocus())
           {
            condition=true;
            break;
           }
        }
     }
//---
   if(condition)
     {
      //--- 禁用滚动和交易水平的管理
      m_chart.MouseScroll(false);
      m_chart.SetInteger(CHART_DRAG_TRADE_LEVELS,false);
     }
   else
     {
      //--- 启用管理
      m_chart.MouseScroll(true);
      m_chart.SetInteger(CHART_DRAG_TRADE_LEVELS,true);
     }
  }
```

这个方法以后会增加代码继续增强, 但是对于当前的任务已经足够了. 它必须在 **CWndEvents::ChartEventMouseMove** () 方法中调用, 如下所示.

```
//+------------------------------------------------------------------+
//| 鼠标移动图表事件                                                   |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventMouseMove(void)
  {
//--- 如果不是光标移动事件就退出
   if(m_id!=CHARTEVENT_MOUSE_MOVE)
      return;
//--- 移动窗口
   MovingWindow();
//--- 设置图表状态
   SetChartState();
//--- 重绘图表
   m_chart.Redraw();
  }
```

编译所有的文件并测试EA. 我们现在可以看到, 当点击上下文菜单区域时, 当点击位置超过了图表的边界区域, 图表的滚动和交易水平的管理被禁用. 把元件附加到图表的测试成功了. 从今以后, 上下文菜单将只会根据用户的需求而弹出. 从应用程序类的 **CProgram::CreateTradePanel** () 方法中删除它的显示 (参见以下代码).

```
m_contextmenu.Show(); // <<< 这行代码必须删除
```

### 区分外部和内部使用

现在, 我们将继续处理左键点击菜单项.

我们的下一个任务是通过点击菜单项弹出上下文菜单, 也就是打开上下文菜单. 而第二次点击必须隐藏它. 这样的处理在菜单项的 **CMenuItem** 类中和上下文菜单的 **CContextMenu** 类中都存在. 其实就是上下文菜单可以访问附加于它的菜单项(前一节点)而包含上下文菜单的菜单项不能直接访问它. 上下文菜单的指针不能在 **CMenuItem** 类中创建. 这是因为如果 **ContextMenu.mqh** 文件包含于 **MenuItem.mqh** 文件, 将会产生编译错误. 这就是为什么我们把上下文菜单的显式处理放在 **CContextMenu** 类中**.** **CMenuItem** 类的处理函数将是辅助的. 它将会生成自定义的事件, 发送特有的, 也就是那个菜单项被点击的信息到上下文菜单. 另外, 当点击发生在上下文菜单区域之外时, 我们需要使上下文菜单隐藏, 就像 **MetaTrader** 终端以及 **MetaEditor** 代码编辑器中做得那样. 这是上下文菜单的标准行为.

为了实现此功能, 需要有另外的自定义事件标识符. 它们中的一部分被设计用于库的类中内部使用, 而另外一些用于自定义应用程序类的外部处理. 在我们的例子中就是 **CProgram**.

内部使用的事件:

- **ON\_CLICK\_MENU\_ITEM** — 点击菜单项.
- **ON\_HIDE\_CONTEXTMENUS** — 隐藏所有上下文菜单的信号.
- **ON\_HIDE\_BACK\_CONTEXTMENUS** — 隐藏当前菜单项以下的上下文菜单的信号. 我们将会稍后详细讨论.

对于外部使用, 创建 **ON\_CLICK\_CONTEXTMENU\_ITEM** 标识符, 通知程序在上下文菜单的菜单项中发生了点击.

把使用唯一编号进行定义的标示符放到 **Defines.mqh** 文件中:

```
#define ON_CLICK_MENU_ITEM        (4) // 点击了菜单项
#define ON_CLICK_CONTEXTMENU_ITEM (5) // 点击了上下文菜单的菜单项
#define ON_HIDE_CONTEXTMENUS      (6) // 隐藏所有上下文菜单
#define ON_HIDE_BACK_CONTEXTMENUS (7) // 隐藏位于当前菜单项之下的上下文菜单
```

### 增强上下文菜单类

必须在上下文菜单的 CContextMenu 类中加入以下栏位和方法:

- 用于设置和取得上下文菜单的状态.
- 用于处理菜单项点击事件.
- 用于根据菜单项的名称取得ID和索引. 我们已经知道了为什么索引和ID是构成各种元件的对象名称的一部分.

以下代码展示了上面列出功能的声明和实现, 并含有详细的注释:

```
class CContextMenu : public CElement
  {
private:
   //--- 上下文菜单状态
   bool              m_contextmenu_state;
public:   
   //--- (1) 获取和 (2) 设置上下文菜单的状态
   bool              ContextMenuState(void)                   const { return(m_context_menu_state);         }
   void              ContextMenuState(const bool flag)              { m_context_menu_state=flag;            }
   //---
private:
   //--- 处理附加于上下文菜单的菜单项点击
   bool              OnClickMenuItem(const string clicked_object);
   //--- 根据菜单项名称获取 (1) ID 和 (2) 索引
   int               IdFromObjectName(const string object_name);
   int               IndexFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 处理菜单项的点击                                                   |
//+------------------------------------------------------------------+
bool CContextMenu::OnClickMenuItem(const string clicked_object)
  {
//--- 如果上下文菜单已经打开, 退出 
   if(m_contextmenu_state)
      return(true);
//--- 如果没有点击在菜单项上, 退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_menuitem_",0)<0)
      return(false);
//--- 从对象名称获得ID和索引
   int id    =IdFromObjectName(clicked_object);
   int index =IndexFromObjectName(clicked_object);
//--- 如果没有点击在附加到上下文菜单的菜单项上
   if(id!=m_prev_node.Id() || index!=m_prev_node.Index())
      return(false);
//--- 显示上下文菜单
   Show();
   return(true);
  }
//+------------------------------------------------------------------+
//| 从对象名称展开ID                                                   |
//+------------------------------------------------------------------+
int CContextMenu::IdFromObjectName(const string object_name)
  {
//--- 从对象名称展开ID
   int    length =::StringLen(object_name);
   int    pos    =::StringFind(object_name,"__",0);
   string id     =::StringSubstr(object_name,pos+2,length-1);
//---
   return((int)id);
  }
//+------------------------------------------------------------------+
//| 从对象名称展开索引                                                 |
//+------------------------------------------------------------------+
int CContextMenu::IndexFromObjectName(const string object_name)
  {
   ushort u_sep=0;
   string result[];
   int    array_size=0;
//--- 获取分隔符的代码
   u_sep=::StringGetCharacter("_",0);
//--- 分割字符串
   ::StringSplit(object_name,u_sep,result);
   array_size=::ArraySize(result)-1;
//--- 检查是否超出数组范围
   if(array_size-2<0)
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//---
   return((int)result[array_size-2]);
  }
```

现在, 我们只需要在上下文菜单的 **CContextMenu::OnEvent** 事件处理函数中发生 **CHARTEVENT\_OBJECT\_CLICK** ()事件时, 加上对 **CContextMenu::OnClickMenuItem** () 方法的调用就可以了:

```
//--- 处理在对象上点击鼠标左键的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      if(OnClickMenuItem(sparam))
         return;
     }
```

### 增强菜单项类

当程序侦测到菜单项上的鼠标左键点击时, 它会向 **CContextMenu::OnClickMenuItem** () 方法传入一个字符串参数. 该字符串参数包含方形标签图形对象的名称, 它是菜单项的背景. 您也许记得, 点击背景的优先级比点击几乎所有控件元件对象的优先级要高. 这可以确保此点击不会被其他元件对象影响, 而不会引发没有料到的程序行为. 例如, 如果菜单项的标签有着比它的背景更高的优先级, 那么点击了标签区域可能引起图标的变化. 让我提醒您, 我们有定义了两种状态的表单图标. 出现这种情况的原因是所有 [OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl) 类型的对象都默认有这种表现.

在 **CContextMenu::OnClickMenuItem** () 方法的开头, 要进行一个对上下文菜单状态的检查. 如果它已经启用了, 就没有必要继续. 然后, 就检查点击对象的名称. 如果这是我们程序的一个对象并且是一个菜单项, 我们就继续. 从对象名称展开菜单项的ID和索引. 对于那些任务, 我们已经设计好了方法, 使用MQL语言中的字符串函数从对象名称中展开所有所需的参数. 菜单项的ID是使用双横线作为分隔符而展开的. 为了展开一个索引, 是根据下划线字符把文字行分开, 这个字符就是元件对象参数的分隔符.

在 **CMenuItem** 类中创建 **OnClickMenuItem** ()方法. 它的代码将与上下文菜单中的方法有所不同. 以下是这个方法的声明和实现. 在这个方法中没有必要从对象名称中展开参数. 只要比较背景的名称和传入对象的名称就足够了. 然后, 检查菜单项的当前状态. 如果是禁用的, 就不需要进一步的操作. 之后, 如果项目包含一个上下文菜单, 就赋予它元件启用或者禁用的状态. 如果在那之前上下文菜单的状态是启用的, 那么事件处理的主模块会发送一个信号用于关闭随后开启的全部上下文菜单. 这是用于应对那些多个上下文菜单相继开启或者同时开启的状况的. 这样的例子将在文章中进一步讨论. 除了 **ON\_HIDE\_BACK\_CONTEXTMENUS** 事件ID, 菜单项ID作为另一个参数传入. 这是用于标识哪个上下文菜单在循环中可以停止.

```
class CMenuItem : public CElement
  {
   //--- 处理菜单项的点击
   bool              OnClickMenuItem(const string clicked_object);
   //---
  };
//+------------------------------------------------------------------+
//| 处理菜单项的点击                                                   |
//+------------------------------------------------------------------+
bool CMenuItem::OnClickMenuItem(const string clicked_object)
  {
//--- 根据对象名称检查
   if(m_area.Name()!=clicked_object)
      return(false);
//---如果该项目没有被激活, 就退出
   if(!m_item_state)
      return(false);
//--- 如果此项目包含一个上下文菜单
   if(m_type_menu_item==MI_HAS_CONTEXT_MENU)
     {
      //--- 如果此项目的下拉菜单没有被激活
      if(!m_context_menu_state)
        {
         m_context_menu_state=true;
        }
      else
        {
         m_context_menu_state=false;
         //--- 发送一个信号用于关闭低于此项目的上下文菜单
         ::EventChartCustom(m_chart_id,ON_HIDE_BACK_CONTEXTMENUS,CElement::Id(),0,"");
        }
      return(true);
     }
//--- 如果此项目没有包含一个上下文菜单, 但是是一个上下文菜单本身的一部分
   else
     {
     }
//---
   return(true);
  }
```

### 增强图形界面事件处理的主类

这不是 **CMenuItem::OnClickMenuItem** () 方法的最终版本, 我们晚些时候会回来增加一些内容. 现在, 它的主要任务是发送一个用于隐藏上下文菜单的消息到处理自定义事件的主模块的 **CWndEvents** 类中. 在这个类中, 让我们创建一个方法来访问 **ON\_HIDE\_BACK\_CONTEXTMENUS** 事件中需要处理的内容. 让我们把它称为 **CWndEvents::OnHideBackContextMenus** (). 此方法的代码如下所示:

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 隐藏低于初始菜单项的全部上下文菜单
   bool              OnHideBackContextMenus(void);
  };
//+------------------------------------------------------------------+
//| ON_HIDE_BACK_CONTEXTMENUS 事件                                    |
//+------------------------------------------------------------------+
bool CWndEvents::OnHideBackContextMenus(void)
  {
//--- 如果信号是隐藏低于初始菜单项的上下文菜单
   if(m_id!=CHARTEVENT_CUSTOM+ON_HIDE_BACK_CONTEXTMENUS)
      return(false);
//--- 迭代之前调用的所有菜单
   int context_menus_total=CWndContainer::ContextMenusTotal(0);
   for(int i=context_menus_total-1; i>=0; i--)
     {
      //--- 上下文菜单和它前节点的指针
      CContextMenu *cm=m_wnd[0].m_context_menus[i];
      CMenuItem    *mi=cm.PrevNodePointer();
      //--- 如果是信号起始菜单项, 则...
      if(mi.Id()==m_lparam)
        {
         //--- ...如果它的上下文菜单没有交点, 隐藏它
         if(!cm.MouseFocus())
            cm.Hide();
         //--- 停止循环
         break;
        }
      else
        {
         //--- 隐藏上下文菜单
         cm.Hide();
        }
     }
//---
   return(true);
  }
```

**CWndEvents::OnHideBackContextMenus** () 方法必须在处理自定义事件的方法中调用, 代码如下所示.

```
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM 事件                                            |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- 如果信号是最小化表单
   if(OnWindowRollUp())
      return;
//--- 如果信号是最大化表单
   if(OnWindowUnroll())
      return;
//--- 如果信号是隐藏低于初始菜单项的上下文菜单
   if(OnHideBackContextMenus())
      return;
  }
```

### 事件处理函数的预先测试

在所有修改完成之后, 编译所有文件并把程序载入到图表上测试. 现在, 当在表单中点击了一个独立的菜单项时, 它的上下文菜单如之前被隐藏, 将会出现, 如果已经打开就会隐藏. 另外, 当一个上下文菜单是开启的, 那么菜单项背景的颜色将是固定的, 如果鼠标从它的区域中离开, 背景色不会再次改变, 如以下屏幕截图所示.

![图 1. 显示和隐藏上下文菜单的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-10_niehv_%5D1%2Cplg "图 1. 显示和隐藏上下文菜单的测试.")
![[Pasted image 20260628211818.png]]
图 1. 显示和隐藏上下文菜单的测试.

我们继续调整用户与上下文菜单的交互. 在很多应用程序中, 当一个或多个上下文菜单开启时(依次开启), 当鼠标点击在它们的范围之外时, 它们会一起关闭. 在此, 我们将复制相同的行为.

为了能够完整测试此功能, 让我们在我们EA的界面中增加另外一个上下文菜单. 我们将把一个上下文菜单附加到现在上下文菜单的第三项上. 为此, 在创建第一个上下文菜单的 **CProgram::CreateContextMenu1** () 方法中, 在 **items\_type** \[\]数组中, 给第三个元件赋予 **MI\_HAS\_CONTEXT\_MENU** 的类型:

```
//--- 项目类型数组
   ENUM_TYPE_MENU_ITEM items_type[CONTEXTMENU_ITEMS]=
     {
      MI_SIMPLE,
      MI_SIMPLE,
      MI_HAS_CONTEXT_MENU,
      MI_CHECKBOX,
      MI_CHECKBOX
     };
```

现在, 让我们为第二个上下文菜单创建一个方法. 在 **CProgram** 类中加入第二个 **CContextMenu** 类的实例, 并声明 **CreateContextMenu2** () 方法:

```
class CProgram : public CWndEvents
  {
private:
   //--- 菜单项与上下文菜单
   CMenuItem         m_menu_item1;
   CContextMenu      m_mi1_contextmenu1;
   CContextMenu      m_mi1_contextmenu2;
   //---
private:
#define MENU_ITEM1_GAP_X (6)
#define MENU_ITEM1_GAP_Y (25)
   bool              CreateMenuItem1(const string item_text);
   bool              CreateMI1ContextMenu1(void);
   bool              CreateMI1ContextMenu2(void);
  };
```

第二个上下文菜单将包含六个菜单项. 那将是两组单选项 (**MI\_RADIOBUTTON**), 每组有三项. 以下是这个方法的代码. 这个方法和创建第一个上下文菜单的方法有什么不同呢?请注意我们是如何获取 第一个上下文菜单第三项的指针的, 也就是第二个上下文菜单将会附加的菜单项. 就是使用的之前创建的 **CContextMenu::ItemPointerByIndex** () 方法. 因为我们将在单选项中使用默认图标, 它们不需要数组. 在 **CContextMenu::AddItem** () 方法中传入空值, 而不是图标的路径. 在此需要一条分隔线, 把第一组单选项和第二组从视觉上分开. 于是, 把它设在列表的第三个(2)项目之后.

之前我们已经说过, 在框架中每组单选项必须有自己的唯一标识号. 此参数的默认值是 **0**. 为此, 给第二组(在循环中是从4到6)的每个单选项的标识号设为1. **CContextMenu** 类中已经包含了 **CContextMenu::RadioItemIdByIndex** () 方法用于设置此标识号.

让我们使用 **CContextMenu::SelectedRadioItem** ()方法设置每个组中为初始时为高亮的单选项. 在以下代码中, 第一组中的第二个单选项(索引1)是高亮的, 而第二组中的第三个单选项(索引2)是高亮的.

```
//+------------------------------------------------------------------+
//| 创建上下文菜单 2                                                   |
//+------------------------------------------------------------------+
bool CProgram::CreateMI1ContextMenu2(void)
  {
//--- 上下文菜单中有6项
#define CONTEXTMENU_ITEMS2 6
//--- 保存窗口指针
   m_mi1_contextmenu2.WindowPointer(m_window);
//--- 保存前节点的指针
   m_mi1_contextmenu2.PrevNodePointer(m_mi1_contextmenu1.ItemPointerByIndex(2));
//--- 项目名称数组
   string items_text[CONTEXTMENU_ITEMS2]=
     {
      "ContextMenu 2 Item 1",
      "ContextMenu 2 Item 2",
      "ContextMenu 2 Item 3",
      "ContextMenu 2 Item 4",
      "ContextMenu 2 Item 5",
      "ContextMenu 2 Item 6"
     };
//--- 在创建之前设置属性
   m_mi1_contextmenu2.XSize(160);
   m_mi1_contextmenu2.ItemYSize(24);
   m_mi1_contextmenu2.AreaBackColor(C'240,240,240');
   m_mi1_contextmenu2.AreaBorderColor(clrSilver);
   m_mi1_contextmenu2.ItemBackColorHover(C'240,240,240');
   m_mi1_contextmenu2.ItemBackColorHoverOff(clrLightGray);
   m_mi1_contextmenu2.ItemBorderColor(C'240,240,240');
   m_mi1_contextmenu2.LabelColor(clrBlack);
   m_mi1_contextmenu2.LabelColorHover(clrWhite);
   m_mi1_contextmenu2.SeparateLineDarkColor(C'160,160,160');
   m_mi1_contextmenu2.SeparateLineLightColor(clrWhite);
//--- 在上下文菜单中加入菜单项
   for(int i=0; i<CONTEXTMENU_ITEMS2; i++)
      m_mi1_contextmenu2.AddItem(items_text[i],"","",MI_RADIOBUTTON);
//--- 第三项后的分隔线
   m_mi1_contextmenu2.AddSeparateLine(2);
//--- 设置第二组的唯一标识号 (1)
   for(int i=3; i<6; i++)
      m_mi1_contextmenu2.RadioItemIdByIndex(i,1);
//--- 选择两组中的单选项
   0

   1

//--- 创建上下文菜单
   if(!m_mi1_contextmenu2.CreateContextMenu(m_chart_id,m_subwin))
      return(false);
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(0,m_mi1_contextmenu2);
   return(true);
  }
```

对 **CProgram::CreateContextMenu2** () 方法的调用位于 **CProgram::CreateTradePanel** () 方法中.

### 测试多个上下文菜单的调整

编译EA的文件并在图表上载入它, 结果将如下图所示.

![图 2. 多个上下文菜单的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-11_niehv.rne "图 2. 多个上下文菜单的测试.")
![[Pasted image 20260628211837.png]]
图 2. 多个上下文菜单的测试.

如果两个上下文菜单都打开了, 当点击它们时, 两个菜单都会被关闭. 这个行为是 **CWndEvents::OnHideBackContextMenus** () 方法的作用, 我们之前已经讨论过. 然而, 如果我们点击了表单的抬头, 上下文菜单不会被关闭. 我们将会解决它.

鼠标光标的位置(焦点)在上下文菜单类(**CContextMenu**)的 **OnEvent** () 事件处理函数中定义. 所以, 在主事件处理函数(在 **CWndEvents** 类里面)中用于关闭所有上下文菜单的信号也会被发送至此. 这个任务有如下的解决方案.

1\. 当发生鼠标移动事件 ([CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq)) 时, 字符串参数 **sparam** 包含了鼠标左键的状态.

2\. 然后, 当找到了鼠标的焦点之后, 我们对上下文菜单和鼠标左键的状态进行检查. 如果上下文菜单已经被激活并且按键被按下, 我们继续检查当前光标与上下文菜单和其前节点之间的相对位置关系.

3\. 如果光标在这些范围中, 关闭所有上下文菜单的信号就不用发送. 如果光标在这些元件范围之外, 我们必须检查是否还有任何将要打开的上下文菜单.

4\. 为此, 在此上下文菜单的列表中循环检查是否有菜单项有附加的上下文菜单. 如果有这样的菜单项, 检查它的上下文菜单是否被激活. 如果上下文菜单被激活了, 光标可能在它的区域中. 这意味着来自此元件的关闭全部上下文菜单的信号不需要被发送. 如果当前的上下文菜单已经是最后打开的, 而且之前的不发送信号的条件都没有满足, 就意味着光标位于所有的激活上下文菜单范围之外.

5\. 可以在此生成 **ON\_HIDE\_CONTEXTMENUS** 自定义事件.

我们可以看到, 关键是当鼠标光标(如果鼠标左键被按下)位于最后激活的上下文菜单之外, 并且也在调用它的菜单项范围之外, 所有的上下文菜单都要关闭.

上述的逻辑就包含在以下代码中. **CContextMenu::CheckHideContextMenus** () 方法用于完成此任务.

```
class CContextMenu : public CElement
  {
private:
   //--- 检查关闭所有上下文菜单的条件
   void              CheckHideContextMenus(void);
   //---
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CContextMenu::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::m_is_visible)
         return;
      //--- 取得焦点
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 如果上下文菜单被启用并且鼠标左键按下
      if(m_context_menu_state && sparam=="1")
        {
         //--- 检查关闭所有上下文菜单的条件
         CheckHideContextMenus();
         return;
        }
      //---
      return;
     }
  }
//+------------------------------------------------------------------+
//| 检查关闭所有上下文菜单的条件                                         |
//+------------------------------------------------------------------+
void CContextMenu::CheckHideContextMenus(void)
  {
//--- 如果光标在上下文菜单范围之外或者前一节点范围之外
   if(CElement::MouseFocus() || m_prev_node.MouseFocus())
      return;
//--- 如果光标在这些元件范围之外, 则 ...
//    ... 需要检查是否之后有上下文菜单被激活
//--- 为此在这个上下文菜单项中作循环 ...
//    ... 以检查是否有菜单项包含上下文菜单
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果有这样的菜单项, 检查上下文菜单是否打开.
      //    如果是打开的, 就不发送关闭所有上下文菜单的信号, 因为...
      //    ... 也许光标在其范围之中, 需要进一步检查.
      if(m_items[i].TypeMenuItem()==MI_HAS_CONTEXT_MENU)
         if(m_items[i].ContextMenuState())
            return;
     }
//--- 发送隐藏所有上下文菜单的信号
   ::EventChartCustom(m_chart_id,ON_HIDE_CONTEXTMENUS,0,0,"");
  }
```

现在, 可以在 **CWndEvents** 类的主事件处理函数中接收 **ON\_HIDE\_CONTEXTMENUS** 事件了. 让我们写一个方法来做这项任务, 并把它命名为 **OnHideContextMenus** (). 它相对简单, 因为现在它只要在上下文菜单的私有数组中循环并隐藏它们.

**CWndEvents::OnHideContextMenus** () 方法的声明和实现位于以下代码中

```
class CWndEvents : public CWndContainer
  {
private:
   //--- 隐藏所有的上下文菜单
   bool              OnHideContextMenus(void);
  };
//+------------------------------------------------------------------+
//| ON_HIDE_CONTEXTMENUS 事件                                       |
//+------------------------------------------------------------------+
bool CWndEvents::OnHideContextMenus(void)
  {
//--- 如果是隐藏所有上下文菜单的信号
   if(m_id!=CHARTEVENT_CUSTOM+ON_HIDE_CONTEXTMENUS)
      return(false);
//---
   int cm_total=CWndContainer::ContextMenusTotal(0);
   for(int i=0; i<cm_total; i++)
      m_wnd[0].m_context_menus[i].Hide();
//---
   return(true);
  }
```

在编译过库文件并在图表上载入EA作测试后, 您会看到如果鼠标点击在范围之外, 激活的上下文菜单都会隐藏.

我们必须消除另外一个设计缺陷. 看一下以下的屏幕截图. 它展示了一种状况, 当鼠标光标位于第一个上下文菜单范围之内, 而位于调用的第二个上下文菜单范围之外时. 通常, 对于这种情况, 光标所在的上下文菜单关闭, 而所有其他的上下文菜单还是打开的. 让我们为此写下代码.

![图 3. 对于这种情况, 所有右侧的上下文菜单都需要隐藏.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-16_niehv_%5D1%2Cplg "图 3. 对于这种情况, 所有右侧的上下文菜单都需要隐藏.")
![[Pasted image 20260628211856.png]]
图 3. 对于这种情况, 所有右侧的上下文菜单都需要隐藏.

我们将把下一个方法称为 **CContextMenu::CheckHideBackContextMenus** (). 它的逻辑已经在之前的段落中描述过, 我们可以直接实现它了 (参见以下代码). 如果满足了所有的条件, 将会生成 **ON\_HIDE\_BACK\_CONTEXTMENUS** 事件.

```
class CContextMenu : public CElement
  {
private:
   //--- 检查关闭之后上下文菜单的条件
   void              CheckHideBackContextMenus(void);
   //---
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CContextMenu::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::m_is_visible)
         return;
      //--- 取得焦点
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 如果上下文菜单被启用并且鼠标左键按下
      if(m_context_menu_state && sparam=="1")
        {
         //--- 检查关闭所有上下文菜单的条件
         CheckHideContextMenus();
         return;
        }
      //--- 检查关闭之后上下文菜单的条件
      CheckHideBackContextMenus();
      return;
     }
  }
//+------------------------------------------------------------------+
//| 检查关闭所有此上下文菜单                                            |
//|  之后菜单的条件                                                    |
//+------------------------------------------------------------------+
void CContextMenu::CheckHideBackContextMenus(void)
  {
//--- 循环迭代所有菜单项
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果菜单项包含上下文菜单并且启用
      if(m_items[i].TypeMenuItem()==MI_HAS_CONTEXT_MENU && m_items[i].ContextMenuState())
        {
         //--- 如果焦点在上下文菜单, 但不是在这个菜单项上
         if(CElement::MouseFocus() && !m_items[i].MouseFocus())
            //--- 发送信号隐藏这个菜单之后的所有上下文菜单
            ::EventChartCustom(m_chart_id,ON_HIDE_BACK_CONTEXTMENUS,CElement::Id(),0,"");
        }
     }
  }
```

之前已经在 **CWndEvents** 类中写过了 **OnHideBackContextMenus** () 方法用于处理 **ON\_HIDE\_BACK\_CONTEXTMENUS** 事件, 这样项目文件可以编译并测试EA了. 如果一切正常, 上下文菜单将根据程序的需求而正确回应鼠标光标的移动了.

最困难的部分已经结束了, 但是工作还没有完成. 事件处理函数必须按照这样的方式进行设置, 当菜单项被点击时, 给应用程序的自定义类(**CProgram**)发送一条带有参数值的消息. 这些参数必须标明点击到了哪个菜单项. 通过这种方式, 应用程序的开发人员可以为菜单项分配对应的函数. 另外, 还需要设置切换上下文菜单的复选框和单选项的状态.

在检查条件的模块中, 在 **CMenuItem** 类的 **OnClickMenuItem** ()方法中, 当菜单项不包含上下文菜单而是其中一部分的代码还是空的. 将在这里发送 **ON\_CLICK\_MENU\_ITEM** 自定义事件. 此消息将包含以下额外的参数:

1. 在通用列表中的索引.
2. 元件的ID.
3. 由以下部分构成的文本行:

> - 程序名称;
> - 复选框或者单选项的指示;
> - 如果这是一个单选项, 此行还包含了单选项的ID.

您可以看出, 当 [EventChartCustom](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltahcrvcwsvoo) () 函数无能为力时, 可以生成一个包含所需参数数量的字符串. 与图形对象的名称类似, 参数也使用下划线"\_"分隔.

复选框和单选项的状态可以在同一个模块中修改. 以下是缩减版的 **CMenuItem::OnClickMenuItem** () 方法. 它显示了需要添加到 **else** 模块中的代码.

```
//+------------------------------------------------------------------+
//| 点击了元件抬头                                                     |
//+------------------------------------------------------------------+
bool CMenuItem::OnClickMenuItem(const string clicked_object)
  {
//--- 根据对象名称检查
//---如果该项目没有被激活, 就退出
//--- 如果此项目包含一个上下文菜单
      //... 
//--- 如果此项目没有包含一个上下文菜单, 但是是一个上下文菜单本身的一部分
   else
     {
      //--- 程序名称做为消息前缀
      string message=CElement::ProgramName();
      //--- 如果是复选框, 改变其状态
      if(m_type_menu_item==MI_CHECKBOX)
        {
         m_checkbox_state=(m_checkbox_state)? false : true;
         m_icon.Timeframes((m_checkbox_state)? OBJ_NO_PERIODS : OBJ_ALL_PERIODS);
         //--- 把复选框信息加入消息
         message+="_checkbox";
        }
      //--- 如果是单选项, 改变其状态
      else if(m_type_menu_item==MI_RADIOBUTTON)
        {
         m_radiobutton_state=(m_radiobutton_state)? false : true;
         m_icon.Timeframes((m_radiobutton_state)? OBJ_NO_PERIODS : OBJ_ALL_PERIODS);
         //--- 把单选项信息加入消息
         message+="_radioitem_"+(string)m_radiobutton_id;
        }
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_CLICK_MENU_ITEM,m_index,CElement::Id(),message);
     }
//---
   return(true);
  }
```

一个ID为 **ON\_CLICK\_MENU\_ITEM** 的自定义事件将用于上下文菜单类(**CContextMenu**)的处理. 我们将需要额外的方法来从事件的字符串参数中展开单选项的ID以及取得单选项在所属组中相对的索引. 您可以在以下代码中看到那些方法.

因为从字符串参数中展开ID依赖于传入字符串的结构, **CContextMenu::RadioIdFromMessage** () 方法将包含对字符串构造正确性以及是否超过数组长度的检查.

在 **CContextMenu::RadioIndexByItemIndex** () 方法的开头根据通用索引取得单选项的ID, 需要调用专门用于从通用索引返回单选项索引的,也就是使用之前所写的 **CContextMenu::RadioItemIdByIndex** ()方法. 之后, 在循环中使用这个ID对单选项计数. 如果根据通用索引取得的和传入的索引一致, 就在计数器中保存数值并停止循环. 这意味着计数器最后的值就是返回的索引.

```
class CContextMenu : public CElement
  {
private:
   //--- 从单选项消息中取得 (1) ID 和 (2) 索引
   int               RadioIdFromMessage(const string message);
   int               RadioIndexByItemIndex(const int index);
   //---
  };
//+------------------------------------------------------------------+
//| 从单选项消息中展开ID      |
//+------------------------------------------------------------------+
int CContextMenu::RadioIdFromMessage(const string message)
  {
   ushort u_sep=0;
   string result[];
   int    array_size=0;
//--- 获取分隔符的代码
   u_sep=::StringGetCharacter("_",0);
//--- 分割字符串
   ::StringSplit(message,u_sep,result);
   array_size=::ArraySize(result);
//--- 如果消息的结构与期待的不同
   if(array_size!=3)
     {
      ::Print(__FUNCTION__," > 单选项消息结构错误!信息: ",message);
      return(WRONG_VALUE);
     }
//--- 防止超出数组大小
   if(array_size<3)
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//--- 返回单选项 id
   return((int)result[2]);
  }
//+------------------------------------------------------------------+
//| 根据通用索引返回单选项索引                                           |
//+------------------------------------------------------------------+
int CContextMenu::RadioIndexByItemIndex(const int index)
  {
   int radio_index =0;
//--- 根据通用索引取得单选项id
   int radio_id =RadioItemIdByIndex(index);
//--- 在所需组中的项目计数器
   int count_radio_id=0;
//--- 在列表中迭代
   int items_total=ItemsTotal();
   for(int i=0; i<items_total; i++)
     {
      //--- 如果不是单选项, 转到下一个
      if(m_items[i].TypeMenuItem()!=MI_RADIOBUTTON)
         continue;
      //--- 如果id匹配
      if(m_items[i].RadioButtonID()==radio_id)
        {
         //--- 如果索引匹配 
         //    保存当前计数值并结束循环
         if(m_items[i].Index()==index)
           {
            radio_index=count_radio_id;
            break;
           }
         //--- 增加计数器
         count_radio_id++;
        }
     }
//--- 返回索引
   return(radio_index);
  }
```

现在, 让我们创建 **CContextMenu::ReceiveMessageFromMenuItem** ()方法用于处理菜单项的 **ON\_CLICK\_MENU\_ITEM** 自定义事件. 以下的事件参数必须传到此方法中: ID, 索引和字符串消息. 在这个方法的开始会检查这个消息是否来自我们的程序, 以及ID是否匹配. 如果检查结果是正确的, 并且如果消息是来自一个单选项, 会根据单选项的ID和组的索引来进行switch操作. ID和索引可以通过上面创建的方法获得.

不论消息是来自于何种类型的菜单项, 如果对程序名称和ID的比较是成功的, 都回发送 **ON\_CLICK\_CONTEXTMENU\_ITEM** 自定义消息. 它会发送到自定义应用程序的 **CProgram** 类中. 与这个消息一起发送的还有以下的参数: (1) ID, (2) 上下文菜单列表中的通用索引 (3) 菜单项的显示文字.

在方法的末尾, 不论是否经过第一次检查, (1) 隐藏上下文菜单, (2) 解锁表单 (3) 发送关闭所有上下文菜单的信号.

```
class CContextMenu : public CElement
  {
private:
   //--- 从菜单项接收需要处理的消息
   void              ReceiveMessageFromMenuItem(const int id_item,const int index_item,const string message_item);
   //---
  };
//+------------------------------------------------------------------+
//| 事件处理函数                                                      |
//+------------------------------------------------------------------+
void CContextMenu::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理 ON_CLICK_MENU_ITEM 事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_MENU_ITEM)
     {
      int    item_id      =int(dparam);
      int    item_index   =int(lparam);
      string item_message =sparam;
      //--- 从菜单项接收需要处理的消息
      ReceiveMessageFromMenuItem(item_id,item_index,item_message);
      return;
     }
  }
//+------------------------------------------------------------------+
//| 从菜单项接收需要处理的事件                                          |
//+------------------------------------------------------------------+
void CContextMenu::ReceiveMessageFromMenuItem(const int id_item,const int index_item,const string message_item)
  {
//--- 如果消息是来自本程序并且元件ID匹配
   if(::StringFind(message_item,CElement::ProgramName(),0)>-1 && id_item==CElement::Id())
     {
      //--- 如果点击了单选项
      if(::StringFind(message_item,"radioitem",0)>-1)
        {
         //--- 从传入的消息中取得单选项的ID
         int radio_id=RadioIdFromMessage(message_item);
         //--- 从通用索引中取得单选项的索引
         int radio_index=RadioIndexByItemIndex(index_item);
         //--- 切换单选项
         SelectedRadioItem(radio_index,radio_id);
        }
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_CLICK_CONTEXTMENU_ITEM,index_item,id_item,DescriptionByIndex(index_item));
     }
//--- 隐藏上下文菜单
   Hide();
//--- 解锁表单
   m_wnd.IsLocked(false);
//--- 发送隐藏所有上下文菜单的信号
   ::EventChartCustom(m_chart_id,ON_HIDE_CONTEXTMENUS,0,0,"");
  }
```

### 测试在应用程序的自定义类中接收消息

现在, 我们在 **CProgram** 类的处理函数中测试消息的接收. 为此, 增加如下所示的代码:

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_CONTEXTMENU_ITEM)
     {
      ::Print(__FUNCTION__," > index: ",lparam,"; id: ",int(dparam),"; description: ",sparam);
     }
  }
```

现在, 编译文件并在图表中载入EA. 当菜单项被点击时, 会在EA的日志中打印那些菜单项参数的消息:

```
2015.10.23 20:16:27.389 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 4; id: 2; description: ContextMenu 1 Item 5
2015.10.23 20:16:10.895 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 0; id: 3; description: ContextMenu 2 Item 1
2015.10.23 19:27:58.520 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 5; id: 3; description: ContextMenu 2 Item 6
2015.10.23 19:27:26.739 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 2; id: 3; description: ContextMenu 2 Item 3
2015.10.23 19:27:23.351 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 3; id: 3; description: ContextMenu 2 Item 4
2015.10.23 19:27:19.822 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 4; id: 2; description: ContextMenu 1 Item 5
2015.10.23 19:27:15.550 TestLibrary (USDCAD,D1) CProgram::OnEvent > index: 1; id: 2; description: ContextMenu 1 Item 2
```

我们已经完成了创建上下文菜单的 **CContextMenu** 类主要部分的开发. 晚些时候还需要增加一些内容, 但是我们会在测试中遇到问题的时候再回到这里. 简而言之, 我们会根据叙述的顺序来更简单地学习这些资料.

### 结论

在本文中, 我们已经增强了前文创建的元件类. 现在我们已经完全具备了主菜单元件开发的条件. 我们会在下一篇文章进行处理.

您可以在本文中下载当前开发阶段的库文件, 图标和本文中其他程序文件(EA交易, 指标和脚本程序). 然后在 **Metatrader 4** 和 **Metatrader 5** 终端上进行测试. 如果您对如何使用资料中的文件有问题, 您可以参考列表文章中对库开发的详细描述, 并且在对应文章的注释部分问问题.

**第二部分的文章(章节)列表:**

- [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)
- [图形界面 II: 分隔线和上下文菜单元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222)
- [图形界面 II: 设置库的事件处理函数 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0224!pcrv_21)
- 图形界面 II: 主菜单元件 (第四章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2204](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0224)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2006.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2006%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (94.16 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2006%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (100.99 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-7%3B800)** (3)

![Otto Pauser](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2Fcvctcr-2214%2F7%2F776C0241%2FAAA%40.HPE "Otto Pauser")

| 25 3月 2016 在 21:42

干得真不错。

在 CContextMenu 的构造函数中，我添加了以下内容

```
CContextMenu::m_item_y_size=24;
```

这样 "m\_item\_y\_size "就有了默认值，TestLibrary 的编译也就非常漂亮了。

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 26 3月 2016 在 07:52

**Otto Pauser:**  

干得真不错。

在 CContextMenu 的构造函数中，我添加了以下内容

这样 "m\_item\_y\_size "就有了默认值，TestLibrary 的编译结果也很好。

![Dmitriy Konogorov](https://c.mql5.com/avatar/2022/4/626D2435-56D8.jpg "Dmitriy Konogorov")

| 19 12月 2021 在 12:32

函数 void CContextMenu::ReceiveMessageFromMenuItem(const int id\_item,const int index\_item,const string message\_item)

如果项目属于复选框类型，则不会 [发送](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F%3A5%3A6 "文章：使用 MQL5.community 频道和群聊") 复选框状态 [信息](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F%3A5%3A6 "文章：使用 MQL5.community 频道和群聊") 。但总的来说，该库非常不错）

[通过"单元测试"的帮助来提高代码质量](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3559)

就算是简单程序也会经常出现看似难以置信的错误。 “我怎么会编出这种东西？”是我们发现这种错误时的第一反应。 “我应该如何避免它？”则是较少会映入脑海的第二个问题。 编写完美无缺的代码是不可能的，特别是在大型项目里，但可通过技术手段及时检测出这些错误。 本文介绍如何借助通用的“单元测试”方法来提高 MQL4 代码质量。

[通用智能交易系统：交易策略的模式(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0146)

任何一个智能交易系统（EA）的开发人员，无论编程技能如何，每天都面临着同样的交易目标和算法问题的困扰，即应该如何建立一个可靠的交易系统。本文介绍CStrategy交易引擎，它可以给出这些任务的解决方案，并且向用户提供一种用于描述自定义交易思想的简便机制。

[在一个 Expert Advisor 内的多个 Expert Advisor 的竞争](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3558)

使用虚拟交易，你可以创建一个自适应的 Expert Advisor，在真实市场上打开和关闭交易。 将多个策略组合到一个 Expert Advisor 内！ 你的多系统 Expert Advisor 会根据虚拟交易的获利能力，自动选择进行真实市场交易的最佳策略。 这种方法可以降低亏损并增加你在市场上操作的获利能力。 进行实验并跟其他人分享你的结果吧！ 我想，很多人会对你的策略组合感兴趣。

[向指标或者EA中快速添加控制面板](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0151)

你是不是觉得需要向你的指标或者EA中添加图形面板来提升配置参数的速度和便捷性？在本文中，你将学会如何一步一步在你的MQL4/MQL5程序中实现输入参数的交互面板。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fsg1npg19sbx6%60n1jr2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dfmree%2Cmsl7.ko'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_aoltgnv%251Dtiqiv%2506wto_aaopcien'3Fvkskt%2Cmsl7.024%26c%3Dmyenpjhxtemqxyaxijicicetqhdulvfu%24s%3F1g478ddcfg5%3B57c%3A2ga12%60538%3A47e57gf%60e31%3B60979161517%3B3g9g21a552f6d4%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0224%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>