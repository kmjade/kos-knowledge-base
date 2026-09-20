---
title: "图形界面 II: 菜单项元件 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-14T12:48:38+00:00Z
created: 2026-06-28
description: "在本系列文章的第二部分中, 我们将向您展示界面元件开发的详细过程, 例如主菜单和上下文菜单. 我们还会提到元件的绘制以及为此开发一个特别的类. 我们还将深度讨论程序事件管理, 包括自定义事件的问题."
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
  - "[[gui/compiled/MQL图形界面II-菜单系统]]"
  - "[[3 Resources/People/wiki/entities/Anatoli-Kazharski-tol64]]"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_22)
- [程序的主菜单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_23)
- [开发用于创建菜单项的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_24)
- [测试附加一个菜单项](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_25)
- [库中主要类的进一步开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_26)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220!pcrv_27)

### 简介

在第一系列的章节中, 我们全面讨论了创建图形界面库的主体结构的开发过程. 在其中我们也创建了界面的主要元件 - 一个控件表单. 第一篇文章: [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了这个库的目的. 在每章末尾会有第一部分文章的完整链接列表. 在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

当前开发阶段中一些类还没有完成. 因为界面库会不断丰富, 加入新的控件, **CWndContainer** 类将会做一些扩展, 它是保存元件和对象指针的基础. **CWndEvents** 类也需要扩展. 这是因为图表事件以及控件生成的事件将在其中处理.

当前版本的 **CWindow** 控件表单类也还没有最终完成. 在前面文章中提过的多窗口模式也还没有实现. 我们将在本系列的第四部分实现这个模式. 另外, 还会演示创建上下文菜单. 尽管这是主菜单的一部分, 它也可以作为其他一些控件的一部分, 在本系列的其他文章中会做介绍.

我们推荐尽可能多尝试各种方法, 这样对资料部分会有更好的理解. 属于同一类型的方法代码, 如果在不同类中有重复, 就会忽略掉以便节约文章的空间. 如果您遇到了这样的方法, 可以参考文章的附件来查找所需的代码, 然后继续学习文章中的资料.

### 程序的主菜单

很难找到一个没有主菜单的程序. **MetaTrader** 终端也有这种界面元素 (参见下面的屏幕截图). 通常情况下, 菜单位于程序窗口的左上角, 并且包含若干项目. 鼠标左键点击了菜单项会弹出下拉列表, 带有程序的选项.

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-1%5D_0.rne)
![[Pasted image 20260628184148.png]]
图 1. MetaTrader 5 终端中的主菜单

这种下拉列表被称为上下文菜单, 可以包含几种类型的项目. 让我们仔细看一下它们中的每一类:

- 按钮(button)项目. 这是上下文菜单中最简单的元素. 通常情况下, 使用鼠标左键点击它会打开一个窗口, 包含用于设置程序的扩展功能或者包含一些信息的窗口. 也可以是非常简单的功能. 在点击了按钮项目之后, 可能会改变程序界面的外观.
- 两种状态的复选框(checkbox)类型项目. 这个元件可以用于激活一些过程或者打开(使得可见)程序界面的某部分. 当它发生时, 此项目会改变它的外观并向应用程序的用户显示它目前的状态.
- 一组项目. 在这个组中只有一个项目可以被启用. 这种控件被称为单选按钮或者开关. 在这篇文章中我们将称它为单选项目.
- 调用上下文菜单的项目. 上下文菜单是从主程序文件调用的, 也可以包含一个或多个其他上下文菜单. 在点击了这样的菜单项之后, 会在右侧出现上下文菜单.

**MetaEditor** 代码编辑器也含有主菜单:

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-2%601g_%5D1%2Cplg)
![[Pasted image 20260628184313.png]]
图 2. MetaEditor 代码编辑器中的主菜单

现在, 我们需要确定构成这样一个复杂的界面元件需要哪些类. 很明显, 把所有东西集中到一个类中是不实际的, 因为这样学习和使用这样的类将非常困难. 所以, 更合理的实现方式是, 从简单的部分组合成整个复杂结构. 让我们决定应该分为哪些部分.

主菜单和上下文菜单由几个项组成. 可以在这两种菜单类型中使用同样的类来代表这些项. 上下文菜单经常包含一个分隔线, 用于把菜单项分成不同种类. 因而, 我们可以看到我们已经需要至少四个类来在代码中创建这样的界面元件:

1. 菜单项. 为了创建这个元件, 我们将开发 **CMenuItem** 类.
2. **CSeparateLine** 类将用于创建分隔线.
3. 上下文菜单. **CContextMenu** 类. 这个界面元件将由 **CMenuItem** 类的对象组合而成.
4. 主菜单. **CMenuBar** 类. 和上下文菜单一样, 组成部分为菜单项 (**CMenuItem**).

我们已经定义了主要任务. 综上所述, 很明显, 创建主菜单和上下文菜单最重要的部分就是菜单项. 所以, 我们将继续创建 **CMenuItem** 类.

### 开发用于创建菜单项的类

在 **Controls** 文件夹中, 库的所有其他文件都在这里, 为 **CMenuItem** 派生类创建 **MenuItem.mqh** 文件. 您可以直接声明所有控件中标准的虚方法. 它的基类是 **CElement** 类, 我们在前面的文章中已经详细了解了. 我们现在不去实现这些方法, 因为晚些时候在文章中我们将着重了解编译器的一个有趣特性.

```
//+------------------------------------------------------------------+
//|                                                     MenuItem.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
//+------------------------------------------------------------------+
//| Class for creating a menu item                                   |
//+------------------------------------------------------------------+
class CMenuItem : public CElement
  {
   //---
public:
                     CMenuItem(void);
                    ~CMenuItem(void);  
   //---
public:
   //--- Chart event handler
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- Timer
   virtual void      OnEventTimer(void);
   //--- Moving element
   virtual void      Moving(const int x,const int y);
   //--- Showing, hiding, resetting, deleting
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- Setting, resetting priorities for the left mouse click
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);  
  };
//+------------------------------------------------------------------+
//| Constructor                                                      |
//+------------------------------------------------------------------+
CMenuItem::CMenuItem(void)
  {
  }
//+------------------------------------------------------------------+
//| Destructor                                                       |
//+------------------------------------------------------------------+
CMenuItem::~CMenuItem(void)
  {
  }  
//+------------------------------------------------------------------+
```

使用哪些图形对象来组成菜单项元件呢?在主菜单中, 通常有标题可以在鼠标光标掠过时改变它们背景的颜色和/或字体的颜色. 上下文菜单通常有图标. 如果一个菜单项包含自己的上下文菜单, 在它们的右面部分会有一个指向右方的肩头, 以提示用户那里有一个附加的菜单. 这就意味着菜单项根据它们属于什么种类以及用于做什么任务可以有几种类型. 让我们把所有可能组成的部分都列举出来:

1. 背景.
2. 标签.
3. 标题.
4. 上下文菜单指示.

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-01_%5D3%2Cplg)
![[Pasted image 20260628184332.png]]
图 3. 组成菜单项控件的部分.

在 **Element.mqh** 文件中增加图形对象类的实例, 并且为创建图形对象 **CMenuItem** 类增加方法的声明. 在把菜单项附加到图表时, 需要把菜单项的索引编号传给这个方法. 这个编号将用于构造图形对象的名称, 然后用它们组成一个菜单项. 它也可以用于点击它们时在列表或项目中的识别工作.

```
class CMenuItem : public CElement
  {
private:
   //--- Objects for creating a menu item
   CRectLabel        m_area;
   CBmpLabel         m_icon;
   CLabel            m_label;
   CBmpLabel         m_arrow;
   //---
public:
   //--- Methods for creating a menu item
   bool              CreateMenuItem(const long chart_id,const int window,const int index_number,const string label_text,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateIcon(void);
   bool              CreateLabel(void);
   bool              CreateArrow(void);
   //---
  };
```

因为菜单项可能是几种不同的类型, 在创建之前必须可以设置其属于那一种类型. 我们将需要一个菜单项类型的枚举 (**ENUM\_TYPE\_MENU\_ITEM**).

把它加到 **Enums.mqh** 文件中, 这里保存着库中所有的枚举. **ENUM\_TYPE\_MENU\_ITEM** 枚举中必须包含之前提到的选项:

- **MI\_SIMPLE** — 简单的菜单项.
- **MI\_HAS\_CONTEXT\_MENU** — 包含上下文菜单的项目.
- **MI\_CHECKBOX** — 复选框项目.
- **MI\_RADIOBUTTON** — 属于单选组的项目.

```
//+------------------------------------------------------------------+
//| Enumeration of the menu item types                               |
//+------------------------------------------------------------------+
enum ENUM_TYPE_MENU_ITEM
  {
   MI_SIMPLE           =0,
   MI_HAS_CONTEXT_MENU =1,
   MI_CHECKBOX         =2,
   MI_RADIOBUTTON      =3
  };
```

在 **CMenuItem** 类中加入对应的栏位以及用于设置和获取菜单项类型的方法:

```
class CMenuItem : public CElement
  {
private:
   //--- Menu item properties
   ENUM_TYPE_MENU_ITEM m_type_menu_item;
   //---
public:
   //--- Setting and getting the type
   void              TypeMenuItem(const ENUM_TYPE_MENU_ITEM type)   { m_type_menu_item=type;                 }
   ENUM_TYPE_MENU_ITEM TypeMenuItem(void)                     const { return(m_type_menu_item);              }
   //---
  };
```

**MI\_SIMPLE** 类型是一个简单的菜单项, 将是属性的默认值:

```
//+------------------------------------------------------------------+
//| Constructor                                                      |
//+------------------------------------------------------------------+
CMenuItem::CMenuItem(void) : m_type_menu_item(MI_SIMPLE)
  {
  }
```

用于设置菜单项图形对象外观的方法需要像之前文章中所述的那样来创建. 这些方法将有一些独特的属性. 让我们把这个控件中所需的每一项都列举出来:

1. 改变背景颜色.
2. 如果菜单项不可用, 它的背景色就不能改变, 因为当前不能使用菜单项的功能.
3. 改变背景边框颜色.
4. 鼠标左键点击对象的优先级必须是统一的, 在等于零的时候按下就相当于点击了背景.
5. 重新定义标签和上下文菜单指示的图标.
6. 用于管理文本标签的属性例如:
	- 零点坐标距离菜单项背景边缘的距离;
		- 字体颜色;
		- 当光标掠过控件的文本颜色;
		- 当菜单项被禁用时的文本颜色.
7. 用于跟踪菜单项状态的变量:
	- 一般状态 (可用/禁用);
		- 复选框的状态;
		- 单选项的状态;
		- 上下文菜单的状态, 它是否被附加到菜单项上.
8. 一组单选项的标识符. 当一个上下文菜单中含有几组单选项时会有用. 此标识符使我们可以知道一个单选项属于哪个组.
9. 菜单项的索引编号.

把以上所列的项目加到 **CMenuItem** 类中:

```
class CMenuItem : public CElement
  {
private:
   //--- Background properties
   int               m_area_zorder;
   color             m_area_border_color;
   color             m_area_color;
   color             m_area_color_off;
   color             m_area_color_hover;
   //--- Label properties
   string            m_icon_file_on;
   string            m_icon_file_off;
   //--- Text label properties
   string            m_label_text;
   int               m_label_x_gap;
   int               m_label_y_gap;
   color             m_label_color;
   color             m_label_color_off;
   color             m_label_color_hover;
   //--- Properties of the indication of the context menu
   string            m_right_arrow_file_on;
   string            m_right_arrow_file_off;
   //--- General priority for clicking
   int               m_zorder;
   //--- Available/blocked
   bool              m_item_state;
   //--- Checkbox state
   bool              m_checkbox_state;
   //--- State of the radio button and its identifier
   bool              m_radiobutton_state;
   int               m_radiobutton_id;
   //--- State of the context menu
   bool              m_context_menu_state;
   //---
public:
   //--- Background methods
   void              AreaBackColor(const color clr)                 { m_area_color=clr;                      }
   void              AreaBackColorOff(const color clr)              { m_area_color_off=clr;                  }
   void              AreaBorderColor(const color clr)               { m_area_border_color=clr;               }
   //--- Label methods
   void              IconFileOn(const string file_path)             { m_icon_file_on=file_path;              }
   void              IconFileOff(const string file_path)            { m_icon_file_off=file_path;             }
   //--- Text label methods
   string            LabelText(void)                          const { return(m_label.Description());         }
   void              LabelXGap(const int x_gap)                     { m_label_x_gap=x_gap;                   }
   void              LabelYGap(const int y_gap)                     { m_label_y_gap=y_gap;                   }
   void              LabelColor(const color clr)                    { m_label_color=clr;                     }
   void              LabelColorOff(const color clr)                 { m_label_color_off=clr;                 }
   void              LabelColorHover(const color clr)               { m_label_color_hover=clr;               }
   //--- Methods to indicate the presence of the context menu
   void              RightArrowFileOn(const string file_path)       { m_right_arrow_file_on=file_path;       }
   void              RightArrowFileOff(const string file_path)      { m_right_arrow_file_off=file_path;      }
   //--- Common (1) state of the item and (2) the checkbox item
   void              ItemState(const bool state);
   bool              ItemState(void)                          const { return(m_item_state);                  }
   void              CheckBoxState(const bool flag)                 { m_checkbox_state=flag;                 }
   bool              CheckBoxState(void)                      const { return(m_checkbox_state);              }
   //--- Radio item identifier
   void              RadioButtonID(const int id)                    { m_radiobutton_id=id;                   }
   int               RadioButtonID(void)                      const { return(m_radiobutton_id);              }
   //--- State of the radio item
   void              RadioButtonState(const bool flag)              { m_radiobutton_state=flag;              }
   bool              RadioButtonState(void)                   const { return(m_radiobutton_state);           }
   //--- State of the context menu attached to this item
   bool              ContextMenuState(void)                   const { return(m_context_menu_state);          }
   void              ContextMenuState(const bool flag)              { m_context_menu_state=flag;             }
   //---
  };
```

在前面的文章中, 我们已经解释过, 库的结构非常清晰, 用户不会面对它的时候不知所措. 时间长了, 一系列的操作就会忘记. 在创建一个控件之前, 必须要传给它目标表单的指针. 如果不这样做, 程序将根本没有办法把控件附加到表单上, 会在日志中打印相关的信息记录. 信息的构成必须非常清楚, 指明用户是在操作哪一个控件时造成的错误.

包含表单类 (**CWindow**) 的文件并声明一个表单类型的指针. 为了在每个控件类中保存表单的指针, 我们需要一个对应的方法. 让我们称它为 **WindowPointer** (). 它的唯一参数是接收一个 **CWindow** 类型的对象指针. 它的任务是保存传给对象的指针. [GetPointer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faoommn-ggtroknvep) () 函数用于返回对象指针. 在我们将要创建的每个控件类中都需要这样做.

```
//+------------------------------------------------------------------+
//|                                                     MenuItem.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| Class for creating a menu item                                   |
//+------------------------------------------------------------------+
class CMenuItem : public CElement
  {
private:
   //--- Pointer to the form to which the control is attached
   CWindow          *m_wnd;
   //---
public:
   //--- Stores the pointer of the passed form
   void              WindowPointer(CWindow &object)                 { m_wnd=::GetPointer(object);            }
   //---
  };
```

现在让我们看一下 **CMenuItem::CreateMenuItem** () 方法怎样来创建一个菜单项. 在这个方法的开始, 我们会使用 [CheckPointer](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faoommn-cjeakroknvep) ()函数来检查附加元件目标表单指针是否有效. 如果指针是无效的, 程序就需要在日志中打印一条信息并退出函数返回false. 如果指针是有效的, 就初始化元件的变量.

在前面的文章中, 我们创建的每个界面元件都有自己的标识符, 并且仔细介绍了它是如何构建的. 为了避免重复, 我在此仅简要提示一下.

在创建主表单的时候, 当主表单的指针加到元件库 (**CWndContainer** 类)时, 标识符是通过 **CWndContainer::AddWindow** () 方法从界面元件计数器中取得的. 在每个元件添加到库中时, 计数器的值就保存在表单类中. 因为表单指针对每个元件来说是必需的, 每个新创建的界面元件都会通过这个表单指针而最新的控件就能取得标识编号. 在创建元件之前, 它的标识符将以以下代码所示的方式构建(黄色高亮显示).

然后计算元件距离表单边缘的距离并存储. 可以通过表单指针访问表单的坐标并计算它们之间的距离. 使用同样的方式可以计算元件中的每个对象. 之后, 所有元件的对象都创建好了, 最后检查窗口的状态. 如果窗口是最小化的, 则元件要被隐藏.

```
//+------------------------------------------------------------------+
//| Creates the menu item element                                    |
//+------------------------------------------------------------------+
bool CMenuItem::CreateMenuItem(const long chart_id,const int subwin,const int index_number,const string label_text,const int x,const int y)
  {
//--- Leave, if there is no pointer to the form
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > Before creating a menu item, the class has to be passed  "
            "the window pointer: CMenuItem::WindowPointer(CWindow &object)");
      return(false);
     }
//--- Initialization of variables
   m_id           =m_wnd.LastId()+1;
   m_index        =index_number;
   m_chart_id     =chart_id;
   m_subwin       =subwin;
   m_label_text   =label_text;
   m_x            =x;
   m_y            =y;
//--- Margins from the edge point
   CElement::XGap(m_x-m_wnd.X());
   CElement::YGap(m_y-m_wnd.Y());
//--- Creating a menu item
   if(!CreateArea())
      return(false);
   if(!CreateIcon())
      return(false);
   if(!CreateLabel())
      return(false);
   if(!CreateArrow())
      return(false);
//--- If the window is minimized, hide the element after creation
   if(m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

在隐藏元件的 **CMenuItem::Hide** () 方法中, 所有对象都要被隐藏, 有些变量要被清零, 颜色要重置:

```
//+------------------------------------------------------------------+
//| Hides the menu item                                              |
//+------------------------------------------------------------------+
void CMenuItem::Hide(void)
  {
//--- Leave, if the element is hidden
   if(!CElement::m_is_visible)
      return;
//--- Hide all objects
   for(int i=0; i<ObjectsElementTotal(); i++)
      Object(i).Timeframes(OBJ_NO_PERIODS);
//--- Zeroing variables
   m_context_menu_state=false;
   CElement::m_is_visible=false;
   CElement::MouseFocus(false);
//--- Reset the color
   m_area.BackColor(m_area_color);
   m_arrow.State(false);
  }
```

构建菜单项元件图形对象的名称会比 **CWindow** 类复杂一些. 如果菜单项是作为一个独立元件, 就像一个既不属于主菜单, 也不属于上下文菜单的独立菜单项, 那就没有任何问题, 因为它有唯一的标识. 如果这个元件是在一个组内创建的, 还有其他类似的对象, 那么一个标识符是不够的. 这是因为, 如果同一类型图形对象的名称都一样的话, 最终只有一个元件可以显示在图表上.

当创建菜单项时, 它的索引编号将传到 **CMenuItem::CreateMenuItem** () 方法中. 然后它会存储在类的 *m\_index\_number* 栏位中, 之后它会用于构建元件内每个图形对象的名称. 以下是菜单项对象名称的组成部分:

- 程序名称.
- 所属元件.
- 所属元件的部分.
- 元件索引编号.
- 元件标识.

创建背景, 文字标签和上下文菜单指示的方法与在 **CWindow** 类中的方法没有大的区别, 您可以在本文附件中的 **MenuItem.mqh** 文件中自己学习它们的代码. 在此, 我们将以 **CMenuItem::CreateIcon** () 方法为例创建一个图标. 在这个方法中, 会检查菜单项类型并根据结果生成对应的图标.

简单菜单项 (**MI\_SIMPLE**) 和包含上下文菜单的项目 (**MI\_HAS\_CONTEXT\_MENU**) 不能有图标. 如果用户没有定义它们, 程序会退出方法并返回 **true**, 因为这不属于错误, 而是不需要图标. 如果复选框菜单项或者单选菜单项的图标没有定义, 会使用默认图标. 库代码中使用的图表在文章的附件中.

**CMenuItem::CreateIcon** () 方法的代码:

```
//+------------------------------------------------------------------+
//| Creates an item label                                            |
//+------------------------------------------------------------------+
#resource "\\Images\\Controls\\CheckBoxOn_min_gray.bmp"
#resource "\\Images\\Controls\\CheckBoxOn_min_white.bmp"
//---
bool CMenuItem::CreateIcon(void)
  {
//--- If this is a simple item or an item containing a context menu
   if(m_type_menu_item==MI_SIMPLE || m_type_menu_item==MI_HAS_CONTEXT_MENU)
     {
      //--- If the label is not required (icon is not defined), leave
      if(m_icon_file_on=="" || m_icon_file_off=="")
         return(true);
     }
//--- If this is a checkbox
   else if(m_type_menu_item==MI_CHECKBOX)
     {
      //--- If the icon is not defined, set the default one
      if(m_icon_file_on=="")
         m_icon_file_on="Images\\Controls\\CheckBoxOn_min_white.bmp";
      if(m_icon_file_off=="")
         m_icon_file_off="Images\\Controls\\CheckBoxOn_min_gray.bmp";
     }
//--- If this is a radio item     
   else if(m_type_menu_item==MI_RADIOBUTTON)
     {
      //--- If the icon is not defined, set the default one
      if(m_icon_file_on=="")
         m_icon_file_on="Images\\Controls\\CheckBoxOn_min_white.bmp";
      if(m_icon_file_off=="")
         m_icon_file_off="Images\\Controls\\CheckBoxOn_min_gray.bmp";
     }
//--- Forming the object name
   string name=CElement::ProgramName()+"_menuitem_icon_"+(string)CElement::Index()+"__"+(string)CElement::Id();
//--- Object coordinates
   int x =m_x+7;
   int y =m_y+4;
//--- Set the label
   if(!m_icon.Create(m_chart_id,name,m_subwin,x,y))
      return(false);
//--- Set properties
   m_icon.BmpFileOn("::"+m_icon_file_on);
   m_icon.BmpFileOff("::"+m_icon_file_off);
   m_icon.State(m_item_state);
   m_icon.Corner(m_corner);
   m_icon.GetInteger(OBJPROP_ANCHOR,m_anchor);
   m_icon.Selectable(false);
   m_icon.Z_Order(m_zorder);
   m_icon.Tooltip("\n");
//--- Margins from the edge point
   m_icon.XGap(x-m_wnd.X());
   m_icon.YGap(y-m_wnd.Y());
//--- Store the object pointer
   CElement::AddToArray(m_icon);
   return(true);
  }
```

用于隐藏元件的 **CMenuItem::Hide** () 方法之前已经展示过了. 现在我们将要实现使元件可见的 **CMenuItem::Show** () 方法. 如果菜单项是复选框或者单选项类型, 此方法必须要考虑它们的状态(启用/禁用):

```
//+------------------------------------------------------------------+
//| Makes the menu item visible                                      |
//+------------------------------------------------------------------+
void CMenuItem::Show(void)
  {
//--- Leave, if the element is already visible
   if(CElement::m_is_visible)
      return;
//--- Make all the objects visible
   for(int i=0; i<ObjectsElementTotal(); i++)
      Object(i).Timeframes(OBJ_ALL_PERIODS);
//--- If this is a checkbox, then considering its state
   if(m_type_menu_item==MI_CHECKBOX)
      m_icon.Timeframes((m_checkbox_state)? OBJ_ALL_PERIODS : OBJ_NO_PERIODS);
//--- If this is a radio item, then considering its state
   else if(m_type_menu_item==MI_RADIOBUTTON)
      m_icon.Timeframes((m_radiobutton_state)? OBJ_ALL_PERIODS : OBJ_NO_PERIODS);
//--- Zeroing variables
   CElement::m_is_visible=true;
   CElement::MouseFocus(false);
  }
```

当实现了创建界面元件的所有方法之后, 我们就可以在图表上测试了. 在 **WndContainer.mqh** 文件中包含 **CMenuItem** 类, 这样就可以使用了:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Window.mqh"
#include "MenuItem.mqh"
```

我们可以使用前一篇文章中测试的EA交易. 在 **CProgram** 类中, 创建一个 **CMenuItem** 类的实例, **CProgram::CreateMenuItem1** () 方法用于创建一个菜单项. 每个所创建元件与图表边缘的距离使用宏定义, 这样更加方便. 当有很多元件的时候, 有一个更加方便快捷的方法来调整它们的位置, 就是通过它们之间的相对关系而不是分别实现移动它们中的每一个.

```
//+------------------------------------------------------------------+
//| Class for creating an application                                |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- Window
   CWindow           m_window;
   //--- Menu item
   CMenuItem         m_menu_item1;
public:
                     CProgram();
                    ~CProgram();
   //--- Initialization/uninitialization
   void              OnInitEvent(void);
   void              OnDeinitEvent(const int reason);
   //--- Timer
   void              OnTimerEvent(void);
   //---
protected:
   //--- Chart event handler
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //---
public:
   //--- Creates the trading panel
   bool              CreateTradePanel(void);
   //---
private:
//--- Creating a form
   bool              CreateWindow(const string text);
//--- Creating a menu item
#define MENU_ITEM1_GAP_X (6)
#define MENU_ITEM1_GAP_Y (25)
   bool              CreateMenuItem1(const string item_text);
  };
```

为了看到功能完整的元件看起来如何, 让我们创建一个带有图标并包含上下文菜单的菜单项来进行测试. 我们有两个图标 - 彩色的和单色的. 单色图标将用于菜单项被禁用(不可用)时.

以下是 **CProgram::CreateMenuItem1** () 方法的代码. 包含的资源 (图标)在文章末尾有. 在方法的开头, 元件将要附加表单的指针存储在元件类中. 然后计算坐标, 设置所需的元件属性再把菜单项元件附加到图标中.

```
//+------------------------------------------------------------------+
//| Creates a menu item                                              |
//+------------------------------------------------------------------+
#resource "\\Images\\Controls\\bar_chart.bmp"
#resource "\\Images\\Controls\\bar_chart_colorless.bmp"
//---
bool CProgram::CreateMenuItem1(string item_text)
  {
//--- Store the window pointer
   m_menu_item1.WindowPointer(m_window);
//--- Coordinates  
   int x=m_window.X()+MENU_ITEM1_GAP_X;
   int y=m_window.Y()+MENU_ITEM1_GAP_Y;
//--- Set up properties before creation
   m_menu_item1.XSize(193);
   m_menu_item1.YSize(24);
   m_menu_item1.TypeMenuItem(MI_HAS_CONTEXT_MENU);
   m_menu_item1.IconFileOn("Images\\Controls\\bar_chart.bmp");
   m_menu_item1.IconFileOff("Images\\Controls\\bar_chart_colorless.bmp");
   m_menu_item1.LabelColor(clrWhite);
   m_menu_item1.LabelColorHover(clrWhite);
//--- Creating a menu item
   if(!m_menu_item1.CreateMenuItem(m_chart_id,m_subwin,0,item_text,x,y))
      return(false);
//---
   return(true);
  }
```

现在, 可以把调用创建菜单项的方法代码加到 **CProgram::CreateTradePanel** () 方法中了:

```
//+------------------------------------------------------------------+
//| Creates the trading panel                                        |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- Creating a form for controls
   if(!CreateWindow("EXPERT PANEL"))
      return(false);
//--- Creating controls:
//    Menu item
   if(!CreateMenuItem1("Menu item"))
      return(false);
//--- Redrawing of the chart
   m_chart.Redraw();
   return(true);
  }
```

细心的读者将会有个问题: "元件指针怎样保存到元件库中呢?". 这是个很好的问题, 因为这还没有实现, 元件指针还没有保存到库中. 之前我曾说过, 我会演示一个编译器的有趣特点. 现在, 已经万事俱备了. 用于管理元件和处理其事件的方法现在还没有在 **CMenuItem** 类中实现, 而且库中也没有它的指针. 而编译 **CMenuItem** 类的文件并不会指出任何错误. 尝试编译EA交易的文件时您会收到一条错误消息, 指出有些方法需要它们的实现 (参见以下屏幕截图).

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-4%2Cplg)
![[Pasted image 20260628184543.png]]
图 4. 缺少方法实现的消息

当编译 **CMenuItem** 类的文件时, 没有遇到错误是因为在当前开发阶段, 没有实现的方法还没有被调用. 元件库当时只有表单的指针. 从上面的屏幕截图中看来, 方法只是通过表单(**CWindow**), 在 **CWndEvents** 类的 **CheckElementsEvents** (), **MovingWindow** (), **CheckElementsEventsTimer** () 和 **Destroy** () 方法的循环中调用的. 元件指针保存在 **CElement** 类型的数组中, 这就意味着调用是通过 **CElement** 基类中声明的这些虚方法来进行的.

因为在 **WndContainer.mqh** 文件中包含了 **Window.mqh** 和 **MenuItem.mqh** 的文件, 其中的类是派生于 **CElement** 类的, 编译器会识别所有的从中派生的类并要求所调用的方法必须都被实现, 哪怕其中有些并没有直接调用. 让我们在 **CMenuItem** 类中创建所需的方法. 我们还将创建用于把控件指针加到 **CWndContainer** 类中的方法.

在本阶段, 当鼠标光标掠过时, 可以使用 **CMenuItem::ChangeObjectsColor** ()方法来改变元件对象的颜色. 在这个方法中, 必须还要考虑菜单项元件的的状态(可用/禁用). 在方法的开始, 必须要检查这个菜单项是否含有上下文菜单, 以及是否被启用. 这样做的原因是, 当上下文菜单被启用时, 要对它进行管理. 另外, 调用时菜单项的颜色必须记录下来.

之后, 我们会需要一个方法来重置菜单项的焦点颜色, 我们就将创建 **CMenuItem::ResetColors** () 方法.

```
class CMenuItem : public CElement
  {
public:
   //--- Changing the color of the control objects
   void              ChangeObjectsColor(void);
   //--- Reset color
   void              ResetColors(void);
   //---
  };
//+------------------------------------------------------------------+
//| Changing the object color when the cursor is hovering over it    |
//+------------------------------------------------------------------+
void CMenuItem::ChangeObjectsColor(void)
  {
//--- Leave, if this item has a context menu and it is enabled
   if(m_type_menu_item==MI_HAS_CONTEXT_MENU && m_context_menu_state)
      return;
//--- Code block for simple items and items containing a context menu
   if(m_type_menu_item==MI_HAS_CONTEXT_MENU || m_type_menu_item==MI_SIMPLE)
     {
      //--- If there is a focus
      if(CElement::MouseFocus())
        {
         m_icon.State(m_item_state);
         m_area.BackColor((m_item_state)? m_area_color_hover : m_area_color_off);
         m_label.Color((m_item_state)? m_label_color_hover : m_label_color_off);
         if(m_item_state)
            m_arrow.State(true);
        }
      //--- If there is no focus
      else
        {
         m_arrow.State(false);
         m_area.BackColor(m_area_color);
         m_label.Color((m_item_state)? m_label_color : m_label_color_off);
        }
     }
//--- Block code for checkbox items and radio items
   else if(m_type_menu_item==MI_CHECKBOX || m_type_menu_item==MI_RADIOBUTTON)
     {
      m_icon.State(CElement::MouseFocus());
      m_area.BackColor((CElement::MouseFocus())? m_area_color_hover : m_area_color);
      m_label.Color((CElement::MouseFocus())? m_label_color_hover : m_label_color);
     }
  }
//+------------------------------------------------------------------+
//| Reset the item color                                             |
//+------------------------------------------------------------------+
void CMenuItem::ResetColors(void)
  {
   CElement::MouseFocus(false);
   m_area.BackColor(m_area_color);
   m_label.Color(m_label_color);
  }
```

用于移动和删除对象的方法实现起来是与 **CWindow** 类中的做法类似的, 因而也就不需要在此重复了. 您可以在文章的附件中找到代码. 这就是为何我们只在 **CMenuItem::OnEvent** ()和 **CMenuItem::OnEventTimer** ()方法中加上最少的代码 (参见以下代码), 然后编译库文件和EA交易. 现在, 就不会再报错, 说有必需的方法没有实现了.

```
//+------------------------------------------------------------------+
//| Event handler                                                    |
//+------------------------------------------------------------------+
void CMenuItem::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- If the control is not hidden
      if(!CElement::m_is_visible)
         return;
      //--- Identify the focus
      int x=(int)lparam;
      int y=(int)dparam;
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      return;
     }  
  }
//+------------------------------------------------------------------+
//| Timer                                                            |
//+------------------------------------------------------------------+
void CMenuItem::OnEventTimer(void)
  {
//--- Changing the color of the form objects
   ChangeObjectsColor();
  }
```

### 测试附加一个菜单项

当您把EA交易载入到图表时, 您将看到一个带有菜单项的表单, 如下面屏幕截图所示. 您在这里看不到它, 因为默认的元件背景颜色和表单背景色是一样的. 您已经可以使用类的功能来修改对象的许多属性- 如有需要, 包括表单和菜单项元件.

![图 5. 把菜单项元件添加到图表上的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-07_niehv.rne "图 5. 把菜单项元件添加到图表上的测试.")
![[Pasted image 20260628184607.png]]
图 5. 把菜单项元件添加到图表上的测试

元件已经添加到图表上了, 不过如果您尝试移动表单, 元件还是处在原来的位置, 并且如果您把鼠标光标掠过它, 它的外观也不变. 让我们创建一个方法来把元件指针添加到库中. 这样所有元件的属性就可以通过在一个循环中调用它们来管理了.

让我们把这个方法称为 **CWndContainer::AddToElementsArray** (). 它将有两个参数: (1) 元件将要附加的表单索引编号 (2) 将要保存到库中的元件对象指针. 在这个方法的开头, 需要检查库中是否含有一个或多个表单. 如果没有表单, 就会在日志中打印消息说明, 在把元件附加到表单之前, 表单必须首先加入库中. 然后还要检查是否超过了数组大小.

如果没有问题, 然后 (1)把指针加到附加表单的数组中 (2) 元件对象加到通用对象数组中 (3)保存元件的标识编号 (4)元件计数器加一. 这还不是此方法的最终版本, 我们晚点还会回来修改它. 当前版本的代码显示如下:

```
//+------------------------------------------------------------------+
//| Adds a pointer to the element array                              |
//+------------------------------------------------------------------+
void CWndContainer::AddToElementsArray(const int window_index,CElement &object)
  {
//--- If the base does not contain forms for controls
   if(ArraySize(m_windows)<1)
     {
      Print(__FUNCTION__," > Before creating a control, create a form  "
            "and add it to the base using the CWndContainer::AddWindow(CWindow &object) method.");
      return;
     }
//--- If there is a request for a non-existent form
   if(window_index>=ArraySize(m_windows))
     {
      Print(PREVENTING_OUT_OF_RANGE," window_index: ",window_index,"; ArraySize(m_windows): ",ArraySize(m_windows));
      return;
     }
//--- Add to the common array of elements
   int size=ArraySize(m_wnd[window_index].m_elements);
   ArrayResize(m_wnd[window_index].m_elements,size+1);
   m_wnd[window_index].m_elements[size]=GetPointer(object);
//--- Add element objects to the common array of objects
   AddToObjectsArray(window_index,object);
//--- Store the id of the last element in all forms
   int windows_total=ArraySize(m_windows);
   for(int w=0; w<windows_total; w++)
      m_windows[w].LastId(m_counter_element_id);
//--- Increase the counter of element identifiers
   m_counter_element_id++;
  }
```

我们之前使用过的当前版本的 **CWndContainer::AddToElementsArray** () 方法已经足够用来测试EA交易了. 在 **CProgram::CreateMenuItem** () 方法的末尾, 在创建元件之后, 添加一行如下的代码.

```
//+------------------------------------------------------------------+
//| Creates a menu item                                              |
//+------------------------------------------------------------------+
bool CProgram::CreateMenuItem(string item_text)
  {
//--- Store the window pointer
//--- Coordinates  
//--- Set up properties before creation
//--- Creating a menu item
//--- Add the element pointer to the base
   CWndContainer::AddToElementsArray(0,m_menu_item);
   return(true);
  }
```

如果修改过的文件编译过了, 并把EA载入到图表中, 那么当表单被移动时, 菜单项元件也会被一起移动, 并且当鼠标光标掠过时, 它的对象也会改变它们的外观了:

![图 6. 菜单项元件作为图形界面部分的测试](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-04_niehv.rne "图 6. 菜单项元件作为图形界面部分的测试")
![[Pasted image 20260628184621.png]]
图 6. 菜单项元件作为图形界面部分的测试

### 库中主要类的进一步开发

如果现在表单被最小化, 菜单项并不会如期待般隐藏. 怎样才能实现隐藏附加到表单的元件呢?图表事件的管理现在是在 **CWndEvents** 类中组织的, 它可以通过它的基类 **CWndContainer** 来访问所有的元件. 有没有指示说明最小化或最大化按钮被按下呢?对于这种情况, MQL有 [EventChartCustom](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltahcrvcwsvoo) () 函数可以用于生成自定义事件.

现在, 当最小化表单的按钮被点击时, 程序会在 **CWindow** 类的 **OnEvent** ()处理函数中跟踪 **CHARTEVENT\_OBJECT\_CLICK** 事件, 验证了事件的字符串参数值(**sparam**) 和图形对象的名称一致时, 就会调用 **CWindow::RollUp** ()方法. 这个时候可以把消息发到事件流的队列中, 然后就可以在CWndEvents 类的处理函数中收到. 因为 CWndEvents 类可以访问所有的元件, 可以在循环中调用每个元件的 **CElement::Hide** () 方法. 在表单最大化事件中必须做同样的事情, 使所有的表单元件显示出来, 使用的是它们的 **CElement::Show** () 方法.

每个自定义事件都需要唯一的标识号. 把表单最小化/最大化事件的标识号加到 **Defines.mqh** 文件中:

```
//--- Events
#define ON_WINDOW_UNROLL          (1) // Form maximization
#define ON_WINDOW_ROLLUP          (2) // Form minimization
```

在 **CWindow::RollUp** () 和 **CWindow::Unroll** () 方法的末尾调用 [EventChartCustom](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fgvgnvfwnatkols-eteltahcrvcwsvoo) () 函数, 参数有:

1. 图表id.
2. 自定义事件id.
3. 元件id是第三个参数 (**lparam**).
4. 程序所在的图表子窗口编号是第四个参数 (**dparam**).

第三个和第四个参数在做进一步检查时是需要的, 防止该事件是由其他程序或者其他元件发送来的.

以下是精简版的 **CWindow::RollUp** () 和 **CWindow::Unroll** () 方法的代码, 只包含增加的部分 (所有注释保留):

```
//+------------------------------------------------------------------+
//| Minimizes the window                                             |
//+------------------------------------------------------------------+
void CWindow::RollUp(void)
  {
//--- Change the button
//--- Set and store the size
//--- Disable the button
//--- Minimized state of the form
//--- If this is an indicator with a set height and with the sub-window minimization mode,
//    set the size of the indicator sub-window
//--- Send a message about it
   ::EventChartCustom(m_chart_id,ON_WINDOW_ROLLUP,CElement::Id(),m_subwin,"");
  }
//+------------------------------------------------------------------+
//| Maximizes the window                                             |
//+------------------------------------------------------------------+
void CWindow::Unroll(void)
  {
//--- Change the button
//--- Set and store the size
//--- Disable the button
//--- Maximized state of the form
//--- If this is an indicator with a set height and with the sub-window minimization mode,
//    set the size of the indicator sub-window
//--- Send a message about it
   ::EventChartCustom(m_chart_id,ON_WINDOW_UNROLL,CElement::Id(),m_subwin,"");
  }
```

现在, 我们需要在 **CWndEvents** 类中创建方法, 将用来处理这些自定义事件. 我们将以与宏定义相同的方式命名它们. 以下是 **CWndEvents** 类中声明和实现这些方法的代码:

```
class CWndEvents : public CWndContainer
  {
private:
   //--- Minimizing/maximizing the form
   bool              OnWindowRollUp(void);
   bool              OnWindowUnroll(void);
   //---
  };
//+------------------------------------------------------------------+
//| ON_WINDOW_ROLLUP event                                           |
//+------------------------------------------------------------------+
bool CWndEvents::OnWindowRollUp(void)
  {
//--- If the signal is to minimize the form
   if(m_id!=CHARTEVENT_CUSTOM+ON_WINDOW_ROLLUP)
      return(false);
//--- If the window identifier and the sub-window number match
   if(m_lparam==m_windows[0].Id() && (int)m_dparam==m_subwin)
     {
      int elements_total=CWndContainer::ElementsTotal(0);
      for(int e=0; e<elements_total; e++)
        {
         //--- Hide all elements except the form
         if(m_wnd[0].m_elements[e].ClassName()!="CWindow")
            m_wnd[0].m_elements[e].Hide();
        }
     }
//---
   return(true);
  }
//+------------------------------------------------------------------+
//| ON_WINDOW_UNROLL event                                           |
//+------------------------------------------------------------------+
bool CWndEvents::OnWindowUnroll(void)
  {
//--- If the signal is to maximize the form
   if(m_id!=CHARTEVENT_CUSTOM+ON_WINDOW_UNROLL)
      return(false);
//--- If the window identifier and the sub-window number match
   if(m_lparam==m_windows[0].Id() && (int)m_dparam==m_subwin)
     {
      int elements_total=CWndContainer::ElementsTotal(0);
      for(int e=0; e<elements_total; e++)
        {
         //--- Make all elements visible except the form and the
         //    drop-down ones
         if(m_wnd[0].m_elements[e].ClassName()!="CWindow")
            if(!m_wnd[0].m_elements[e].IsDropdown())
               m_wnd[0].m_elements[e].Show();
        }
     }
//---
   return(true);
  }
```

表单类的 **CWindow::Show** () 方法还没有实现. 因为这个方法将在循环中所有元件中调用, 它的实现是必须的, 尽管在以上代码中, 条件设定使得程序不会走到 **CWindow** 类中.

**CWindow::Show** () 方法的代码:

```
//+------------------------------------------------------------------+
//| Shows the window                                                 |
//+------------------------------------------------------------------+
void CWindow::Show(void)
  {
//--- Make all the objects visible
   for(int i=0; i<ObjectsElementTotal(); i++)
      Object(i).Timeframes(OBJ_ALL_PERIODS);
//--- Visible state
   CElement::m_is_visible=true;
//--- Zeroing the focus
   CElement::MouseFocus(false);
   m_button_close.MouseFocus(false);
   m_button_close.State(false);
  }
```

我们将在 **CWndEvents::ChartEventCustom** () 方法中调用这些方法:

```
//+------------------------------------------------------------------+
//| CHARTEVENT_CUSTOM event                                          |
//+------------------------------------------------------------------+
void CWndEvents::ChartEventCustom(void)
  {
//--- If the signal is to minimize the form
   if(OnWindowRollUp())
      return;
//--- If the signal is to maximize the form
   if(OnWindowUnroll())
      return;
  }
```

从现在开始, 所有处理自定义事件的方法都将位于 **CWndEvents::ChartEventCustom** () 方法中.

根据顺序, 对 **CWndEvents::ChartEventCustom** () 的调用必须放到 **CWndEvents::ChartEvent** () 方法之前, 在图表事件处理之前进行处理:

```
//+------------------------------------------------------------------+
//| Handling program events                                          |
//+------------------------------------------------------------------+
void CWndEvents::ChartEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- Leave, if the array is empty
   if(CWndContainer::WindowsTotal()<1)
      return;
//--- Initialization of the event parameter fields
   InitChartEventsParams(id,lparam,dparam,sparam);
//--- Custom event
   ChartEventCustom();
//--- Checking events of the interface elements
   CheckElementsEvents();
//--- Mouse movement event
   ChartEventMouseMove();
//--- The chart properties change event
   ChartEventChartChange();
  }
```

在编译修改过的文件以及主程序文件之后, 把它载入到图表中. 现在, 当表单最小化时, 菜单项元件将被隐藏, 而表单最大化时会显示出来.

我们已经完成了 **CMenuItem** 类主要部分的开发. 现在我们只需要设定此控件的事件处理函数了. 我们会在实现了上下文菜单的创建之后回到这里, 这样所有更改都可以完整一致地测试了. 在那之前, 我们会开发另外一个界面元件, 它是上下文菜单的一部分 - 分隔线.

### 结论

在本文中, 我们详细讨论了创建菜单项控件的过程. 我们也介绍了控件表单(**CWindow**)中必要的增强和主要的事件处理类 (**CWndEvents**). 在下一篇文章中我们将创建用于创建分隔线和上下文菜单的类.

您可以下载本文中相关的当前开发阶段的库文件, 图标和程序文件(EA交易, 指标和脚本程序), 并在 **MetaTrader 4** 和 **MetaTrader 5** 终端中进行测试. 如果您对如何使用资料中的文件有问题, 您可以参考列表文章中对库开发的详细描述, 并且在对应文章的注释部分问问题.

**第二部分文章(章节)列表:**

- [图形界面 II: 菜单项元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0220)
- 图形界面 II: 分隔线和上下文菜单元件 (第二章)
- 图形界面 II: 设置库的事件处理函数 (第三章)
- 图形界面 II: 主菜单元件 (第四章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2200](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0220)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2002.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2002%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (15.02 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2002%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (19.1 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-74132)** (7)

![](https://c.mql5.com/avatar/avatar_na2.png)

**\[删除\]** | 11 2月 2016 在 18:18

谢谢您，从您的回答中我意识到我可以在哪里使用它：  
在实时交易过程中，我想看到测试器中的实时交易情况。也就是说，我可以通过正常方式看到战斗环境。我可以使用您的可视化工具看到测试器的实时环境。同时，我还可以看到虚拟测试器中的历史记录和交易图表。  
  
这样就可以快速分析测试器和真实环境之间存在差异的原因：重新报价、重新劫持和其他细微差别。您的库是否能轻松创建如 [本文](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F32%3B7) [图片所示的](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F32-gxkssaz1ya0x_651beca_JT%2Cplg "https://c.mql5.com/2/12/gzkqscz3yc0z_453bgcc_HT.png") 界面？  
  
库是否能绘制 2D 图表？

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 11 2月 2016 在 19:08

**zaskok3:**

在实时交易过程中，我想看看交易在测试器中是如何进行的--实时。也就是说，我可以使用标准工具查看实战环境。而我可以使用你们的可视化工具看到测试器的实时环境。同时，我还可以看到虚拟测试器中的历史记录和交易图表。

是的，但如果你自己编写了这样一个测试器。在这个库的帮助下，您可以为它创建一个图形界面。

**zaskok3：**

这将允许您快速分析测试仪和真实情况之间出现分歧的原因：重新报价、重新加载和其他细微差别。您的库是否能轻松创建类似 [本文](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F32%3B7) [图片上的](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F32-gxkssaz1ya0x_651beca_JT%2Cplg "https://c.mql5.com/2/12/gzkqscz3yc0z_453bgcc_HT.png") 界面？

是的，可以。但我们必须等到整个库出版后才能实现。总共会有大约 20 篇文章，甚至更多。目前该系列只发表了 6 篇文章。

**zaskok3：**

图书馆会绘制二维图表吗？

我已经有了一个这样的类元素，也许对您来说已经足够了。但它只是标准库中的一个稍作修改的类。当然，这对我来说也不够，我打算创建自己的图表绘制库。除非有人比我先写出来。)我希望能有类似于 **Excel** 中实现的质量。

![](https://c.mql5.com/avatar/avatar_na2.png)

**\[删除\]** | 12 2月 2016 在 09:58

**Anatoli Kazharski:**

感谢您的详细解答！现在我知道了它在哪些方面可以满足交易者-开发者的实际需求，而不是为了华而不实。这些文章信息量很大，但我会详细了解，并在有能力时试用。二维图表尤其出色.... ![](https://c.mql5.com/avatar/avatar_na2.png)

**\[删除\]** | 5 4月 2019 在 12:16

请为第 2 部分的文章列表添加链接：

```
Список статей (глав) второй части:

Графические интерфейсы II: Элемент "菜单项"。 (Глава 1)
Графические интерфейсы II: Элементы "分界线"。 и "上下文菜单"。 (Глава 2)
Графические интерфейсы II: Настройка обработчиков событий библиотеки (Глава 3)
Графические интерфейсы II: Элемент "主菜单" (Глава 4)
```

现在只有第一篇（第 1 章）可以点击。同样，我也希望在第 2 章和第 3 章末尾看到所有链接。

![Thiago Duarte](https://c.mql5.com/avatar/2019/5/5CCB0EAE-0909.jpg "Thiago Duarte")

| 10 4月 2020 在 04:17

我收到这些错误，不知道为什么:(  
  
[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F1%2F117%2Fgrpops%5D_3.RNE)](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F1%2F117%2Fgrpops%2CPLG "https://c.mql5.com/3/315/errors.PNG")

[使用分形绘制水平突破位](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3415)

本文描述了使用上/下分形显示支撑/阻力位的指标创建。

[图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0109)

在图形界面系列的第一部分前面的章节中, 我们已经丰富了表单类, 可以通过按下其中的控件来管理表单. 在本文中, 我们将使用不同类型的MQL程序, 例如指标和脚本程序, 来测试我们的成果. 因为此函数库被设计为跨平台的, 因而它可以用于所有MetaTrader平台, 我们也会在MetaTrader 4中测试它.

[群集指标在嘉盛市场中的实际应用](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3452)

群集指标是一系列将货币对分成独立的货币的指标。指标允许跟踪相对货币波动，确定形成新的货币趋势的潜能，接收交易信号，以及跟踪中期和长期仓位。

[图形界面 I：控件构成(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)

在本文中我们将创建第一个图形界面的主元素 — 控件的一个窗体。多个控件可以以任何组合被附加到此窗体的任何地方。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fca7m%3As3gxpvcod5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F784%251Fwto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fhmw%2Ctgsv.gxrept'24uvm%5Dcmnvelt'3Fbwy%2Cezpgrv%2506wto_aaopcien'3F0420.OQN5%2Ccmm%2CIltgrlan%26c%3Dtdmvkhsheoepjikxzevolhoouzjwakgw%24s%3F7dc50610a5b4e30101ffa69%3B335de2f60f66d4d6012252337gaf767%3Bfa6ddg12%26t%3D3%26joqt%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fdf'2D%26kd%3Fwfawszxsrrvjeibujpjnhsjeh%7Bhgspqsaw%26wif%3Dckjsmlqfteln%7Bmkaeiqrnpasigdtil%60a%24sqn%3F158066305%3A007503372%24sqn%5Ddp%3D2%26qsl_qr%3F0%24ft_fave%3F158066129%3B%26ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fcrvialgs'2D2002%26%60aak%5Drgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Duqeps'2Dtml44'2Dpcgg4'3D%2503wsgrCcvimnq%26vivlg%3D'E7%25%3BB'BG%25G5'BF%25C2'E5%25%3B5'8A%25G9'9F%25C2'22IK%251A'22%25G8'8D%25%3BC'E7%25%3AD'97%25G9'A3%25%409'E7%25%3A5'81%25G4'B%40%25%406'22\('E5%25CC'AA%25G4'B%3A%25%3A0'E5%25CB'A2\)'22-'22MSL7%25G6'94%25%3A7'E5%25CB'A2%26qcp_peq%3D3900z1282%26cc%3F158066305%3A97932716%26dz%5Dulis%3D4378234921010762401%26qv%3F2750)