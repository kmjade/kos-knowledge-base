---
title: "图形界面 VII: 页面控件 (第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-09-19T12:28:59+00:00Z
created: 2026-06-28
description: "第七部分的第一章介绍了用于创建三种表格控件的类: 文字标签型表格(CLabelsTable), 编辑框型表格(CTable) 以及绘制型表格(CCanvasTable)。在本文中(第二章)我们将讨论页面(Tabs)控件。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc2)
- [页面控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc3)
- [开发用于创建页面控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc4)
- [测试页面控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc5)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc6)

### 简介

第一篇文章， [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了这个库的目标。您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

第七部分的第一章介绍了创建三种表格的类: 文字标签型表格(**CLabelsTable**), 编辑框型表格(**CTable**) 和绘制型表格(**CCanvasTable**)。在本文中(第二章)我们将讨论页面(Tabs)控件。这个控件将有两个类 - 简单型以及扩展功能型。

### 页面控件

页面是用于控制预先定义的图形界面控件集合显示与否的，通常情况下，多功能的应用程序需要大量的控件，而图形界面上的空间则是有限的，页面可以用于把控件按照种类分组，而只显示当前所需要的组，这使得界面的访问更加容易，并且对最终用户更有意义。在表面上，页面看起来就像一组带有标签(控件组的名称)的按钮,同时，只有它们其中之一可以被选择(活动状态)，

让我们列举出这个控件的所有组件。

1. 容纳一组控件的背景或者区域
2. 页面

![图 1. «页面(Tabs)» 控件的组件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-el4%5D_3.rne "图 1. «页面(Tabs)» 控件的组件。")
![[Pasted image 20260628222053.png]]
图 1. 页面控件的组件。

让我们针对页面相对于区域的位置创建四种模式: 顶部(top), 底部(bottom), 左边(left)和右边(right)。

### 开发用于创建页面控件的类

创建 **Tabs.mqh** 文件，并在库的 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Tabs.mqh"
```

**CTabs** 必须在 **Tabs.mqh** 文件中创建，在这个类中，和其他控件类一样，需要创建标准方法，以及保存控件所附加的表单指针的方法。

```
//+------------------------------------------------------------------+
//| 创建页面控件的类                          |
//+------------------------------------------------------------------+
class CTabs : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CTabs(void);
                    ~CTabs(void);
   //--- (1) 保存表单指针, (2) 返回滚动条的指针
   void              WindowPointer(CWindow &object)               { m_wnd=::GetPointer(object);      }
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
   //--- (1) 设置, (2) 重设鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重置颜色
   virtual void      ResetColors(void) {}
  };
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CTabs::CTabs(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                              |
//+------------------------------------------------------------------+
CTabs::~CTabs(void)
  {
  }
```

页面的属性可以分为通用的一类和独特的一类，让我们列举这两类属性。

**独特的属性**

- 附加到页面上的控件的指针数组
- 文字
- 宽度

创建 **TElements** 结构来表示这些独特的属性，并声明一个这种类型的动态数组:

```
class CTabs : public CElement
  {
private:
   //--- 附加到页面的控件的属性结构数组
   struct TElements
     {
      CElement         *elements[];
      string            m_text;
      int               m_width;
     };
   TElements         m_tab[];
  };
```

**通用属性**

- 页面位置模式
- 区域背景色
- 页面在 Y 轴上的大小(高度)
- 不同状态下页面的颜色
- 不同状态下页面文字的颜色
- 页面边框的颜色
- 鼠标左键点击优先级

为了设置位置模式，需要在 Enums.mqh 文件中加入 **ENUM\_TABS\_POSITION** 枚举:

```
//+------------------------------------------------------------------+
//| 页面位置的枚举                          |
//+------------------------------------------------------------------+
enum ENUM_TABS_POSITION
  {
   TABS_TOP    =0,
   TABS_BOTTOM =1,
   TABS_LEFT   =2,
   TABS_RIGHT  =3
  };
```

在以下的代码中提供了属性的栏位和设定属性方法的声明:

```
class CTabs : public CElement
  {
private:
   //--- 页面的位置
   ENUM_TABS_POSITION m_position_mode;
   //--- 通用区域的背景颜色
   int               m_area_color;
   //--- Y轴上的大小
   int               m_tab_y_size;
   //--- 不同状态下页面的颜色
   color             m_tab_color;
   color             m_tab_color_hover;
   color             m_tab_color_selected;
   color             m_tab_color_array[];
   //--- 不同状态下页面文字的颜色
   color             m_tab_text_color;
   color             m_tab_text_color_selected;
   //--- 页面边框的颜色
   color             m_tab_border_color;
   //--- 鼠标左键点击优先级
   int               m_zorder;
   int               m_tab_zorder;
   //---
public:
   //--- (1) 取得/设置页面的位置 (top/bottom/left/right), (2) 设置页面在Y轴上的大小
   void              PositionMode(const ENUM_TABS_POSITION mode)     { m_position_mode=mode;          }
   ENUM_TABS_POSITION PositionMode(void)                       const { return(m_position_mode);       }
   void              TabYSize(const int y_size)                      { m_tab_y_size=y_size;           }
   //--- (1)通用背景的颜色, (2) 不同状态页面的颜色, (3) 页面边框的颜色
   void              AreaColor(const color clr)                      { m_area_color=clr;              }
   void              TabBackColor(const color clr)                   { m_tab_color=clr;               }
   void              TabBackColorHover(const color clr)              { m_tab_color_hover=clr;         }
   void              TabBackColorSelected(const color clr)           { m_tab_color_selected=clr;      }
   void              TabBorderColor(const color clr)                 { m_tab_border_color=clr;        }
   //--- 不同状态下页面文字的颜色
   void              TabTextColor(const color clr)                   { m_tab_text_color=clr;          }
   void              TabTextColorSelected(const color clr)           { m_tab_text_color_selected=clr; }
  };
```

在创建控件之前，需要加上所需数量的页面，并指出显示的文字和宽度，让我们为此写出 **CTabs::AddTab** () 方法，这个方法的默认参数值是«» (空字符串) 和 **50** (宽度)。

```
class CTabs : public CElement
  {
public:
   //--- 加上一个页面
   void              AddTab(const string tab_text="",const int tab_width=50);
  };
//+------------------------------------------------------------------+
//| 加上一个页面                           |
//+------------------------------------------------------------------+
void CTabs::AddTab(const string tab_text,const int tab_width)
  {
//--- 设置页面数组的大小
   int array_size=::ArraySize(m_tabs);
   ::ArrayResize(m_tabs,array_size+1);
   ::ArrayResize(m_tab,array_size+1);
//--- 保存传入的属性
   m_tab[array_size].m_text  =tab_text;
   m_tab[array_size].m_width =tab_width;
//--- 保存页面的数量
   m_tabs_total=array_size+1;
  }
```

如果某个页面应该在图表上运行MQL应用程序时预先选择好，那么，在创建控件之前，还需要使用 **CTabs::SelectedTab** ()方法来设置它的索引。还需要一个私有(private)的 **CTabs::CheckTabIndex** ()方法来检查所选页面的索引，以防超出范围。

```
class CTabs : public CElement
  {
private:
   //--- 所选择页面的索引
   int               m_selected_tab;
   //---
public:
   //--- (1) 保存 和 (2) 返回所选页面的索引
   void              SelectedTab(const int index)                    { m_selected_tab=index;          }
   int               SelectedTab(void)                         const { return(m_selected_tab);        }
   //---
private:
   //--- 检查所选页面的索引
   void              CheckTabIndex(void);
  };
//+------------------------------------------------------------------+
//| 检查所选页面的索引                         |
//+------------------------------------------------------------------+
void CTabs::CheckTabIndex(void)
  {
//--- 检查是否超出数组范围
   int array_size=::ArraySize(m_tab);
   if(m_selected_tab<0)
      m_selected_tab=0;
   if(m_selected_tab>=array_size)
      m_selected_tab=array_size-1;
  }
```

为了创建控件，我们需要3个 **私有(private)** 方法和1个 **公有(public)** 方法:

```
class CTabs : public CElement
  {
private:
   //--- 用于创建元件的对象
   CRectLabel        m_main_area;
   CRectLabel        m_tabs_area;
   CEdit             m_tabs[];
   //---
public:
   //--- 用于创建页面的方法
   bool              CreateTabs(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateMainArea(void);
   bool              CreateTabsArea(void);
   bool              CreateButtons(void);
  };
```

如果在附加控件之前没有添加页面，那么调用 **CTabs::CreateTabs** ()共有方法将会停止图形界面的创建，并且在记录中输出这样的消息:

```
//--- 如果组中没有页面，进行报告
   if(m_tabs_total<1)
     {
      ::Print(__FUNCTION__," > 将调用此方法, "
              "一个组至少要包含一个页面!使用 CTabs::AddTab() 方法");
      return(false);
     }
```

控件中组件坐标的确定和计算将根据所选页面位置模式而有所不同，这些计算需要 **CTabs::SumWidthTabs** ()方法, 该方法返回所有页面总的宽度。当页面是偏左(**TABS\_LEFT**)和偏右(**TABS\_RIGHT**)的位置模式时，它将返回第一个页面的宽度，而对于顶部(**TABS\_TOP**)和底部(**TABS\_BOTTOM**)模式, 计算的是所有页面总的宽度。

```
class CTabs : public CElement
  {
private:
   //--- 页面的位置
   ENUM_TABS_POSITION m_position_mode;
   //---
private:
   //--- 所有页面的宽度
   int               SumWidthTabs(void);
  };
//+------------------------------------------------------------------+
//| 所有页面的总宽度                          |
//+------------------------------------------------------------------+
int CTabs::SumWidthTabs(void)
  {
   int width=0;
//--- 如果页面是偏左或者偏右的位置，返回第一个页面的宽度
   if(m_position_mode==TABS_LEFT || m_position_mode==TABS_RIGHT)
      return(m_tab[0].m_width);
//--- 所有页面的总宽度
   for(int i=0; i<m_tabs_total; i++)
      width=width+m_tab[i].m_width;
//--- 考虑到一个像素点的重叠
   width=width-(m_tabs_total-1);
   return(width);
  }
```

**CTabs::CreateMainArea** ()方法是用于创建一组控件的放置区域的，对象大小和坐标的计算如下所示 (此方法的精简版):

```
//+------------------------------------------------------------------+
//| 创建通用背景区域                          |
//+------------------------------------------------------------------+
bool CTabs::CreateMainArea(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_tabs_main_area_"+(string)CElement::Id();
//--- 坐标
   int x=0;
   int y=0;
//--- 大小
   int x_size=0;
   int y_size=0;
//--- 计算相对页面位置的坐标和大小
   switch(m_position_mode)
     {
      case TABS_TOP :
         x      =CElement::X();
         y      =CElement::Y()+m_tab_y_size-1;
         x_size =CElement::XSize();
         y_size =CElement::YSize()-m_tab_y_size;
         break;
      case TABS_BOTTOM :
         x      =CElement::X();
         y      =CElement::Y();
         x_size =CElement::XSize();
         y_size =CElement::YSize()-m_tab_y_size;
         break;
      case TABS_RIGHT :
         x      =CElement::X();
         y      =CElement::Y();
         x_size =CElement::XSize()-SumWidthTabs()+1;
         y_size =CElement::YSize();
         break;
      case TABS_LEFT :
         x      =CElement::X()+SumWidthTabs()-1;
         y      =CElement::Y();
         x_size =CElement::XSize()-SumWidthTabs()+1;
         y_size =CElement::YSize();
         break;
     }
//--- 创建对象
   if(!m_main_area.Create(m_chart_id,name,m_subwin,x,y,x_size,y_size))
      return(false);
//--- 设置属性
//--- 到边缘的距离
//--- 保存大小
//--- 保存坐标
//--- 保存对象指针
//...
   return(true);
  }
```

以下就是根据在 **CTabs::CreateTabsArea** ()方法中指定的位置模式而计算的页面背景的大小和坐标:

```
//+------------------------------------------------------------------+
//| 创建页面背景                             |
//+------------------------------------------------------------------+
bool CTabs::CreateTabsArea(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_tabs_area_"+(string)CElement::Id();
//--- 坐标
   int x=CElement::X();
   int y=CElement::Y();
//--- 大小
   int x_size=SumWidthTabs();
   int y_size=0;
//--- 计算相对页面位置的大小
   if(m_position_mode==TABS_TOP || m_position_mode==TABS_BOTTOM)
     {
      y_size=m_tab_y_size;
     }
   else
     {
      y_size=m_tab_y_size*m_tabs_total-(m_tabs_total-1);
     }
//--- 对于页面在底部和在右方的模式调整坐标
   if(m_position_mode==TABS_BOTTOM)
     {
      y=CElement::Y2()-m_tab_y_size-1;
     }
   else if(m_position_mode==TABS_RIGHT)
     {
      x=CElement::X2()-x_size;
     }
//--- 创建对象
   if(!m_tabs_area.Create(m_chart_id,name,m_subwin,x,y,x_size,y_size))
      return(false);
//--- 设置属性
//--- 到边缘的距离
//--- 保存大小
//--- 保存坐标
//--- 保存对象指针
//...
   return(true);
  }
```

**CTabs::CreateButtons** () 方法只需要计算坐标以创建页面，宽度是在创建控件之前由应用程序的自定义类设置的，否则，就使用默认值(宽度)。以下是该方法的精简版本:

```
//+------------------------------------------------------------------+
//| 创建页面                             |
//+------------------------------------------------------------------+
bool CTabs::CreateButtons(void)
  {
//--- 坐标
   int x =CElement::X();
   int y =CElement::Y();
//--- 计算相对页面位置的坐标
   if(m_position_mode==TABS_BOTTOM)
      y=CElement::Y2()-m_tab_y_size-1;
   else if(m_position_mode==TABS_RIGHT)
      x=CElement::X2()-SumWidthTabs();
//--- 计算所选页面的索引
   CheckTabIndex();
//--- 创建页面
   for(int i=0; i<m_tabs_total; i++)
     {
      //--- 构建对象名称
      string name=CElement::ProgramName()+"_tabs_edit_"+(string)i+"__"+(string)CElement::Id();
      //--- 计算每个单独页面上相对页面的坐标
      if(m_position_mode==TABS_TOP || m_position_mode==TABS_BOTTOM)
         x=(i>0) ? x+m_tab[i-1].m_width-1 : CElement::X();
      else
         y=(i>0) ? y+m_tab_y_size-1 : CElement::Y();
      //--- 创建对象
      if(!m_tabs[i].Create(m_chart_id,name,m_subwin,x,y,m_tab[i].m_width,m_tab_y_size))
         return(false);
      //--- 设置属性
      //--- 面板边缘的距离
      //--- 坐标
      //--- 大小
      //--- 初始化梯度数组
      //--- 保存对象指针
     }
//---
   return(true);
  }
```

把任意控件附加到指定页面上，让我们开发 **CTabs::AddToElementsArray** ()方法，它有两个参数: (1) 页面索引, 指定应该附加到哪个页面，以及 (2) 控件的引用, 一个应该保存到页面控件数组的指针。

```
class CTabs : public CElement
  {
public:
   //--- 把控件加到页面数组中
   void              AddToElementsArray(const int tab_index,CElement &object);
  };
//+------------------------------------------------------------------+
//| 把控件加到指定页面的数组中                      |
//+------------------------------------------------------------------+
void CTabs::AddToElementsArray(const int tab_index,CElement &object)
  {
//--- 检查是否超出数组范围
   int array_size=::ArraySize(m_tab);
   if(array_size<1 || tab_index<0 || tab_index>=array_size)
      return;
//--- 把传入控件的指针加到指定页面的数组中
   int size=::ArraySize(m_tab[tab_index].elements);
   ::ArrayResize(m_tab[tab_index].elements,size+1);
   m_tab[tab_index].elements[size]=::GetPointer(object);
  }
```

当切换页面时，需要隐藏前一个页面的控件，并显示新选择的页面的控件，为此，让我们创建 **CTabs::ShowTabElements** ()方法。在方法的开始部分检查控件是否可见，如果控件是隐藏的，程序就退出此方法。然后，它会检查活动页面的索引，如果有必要就进行调整，然后它在循环中检查所有的页面并执行方法的主要任务。

```
class CTabs : public CElement
  {
public:
   //--- 只显示所选页面的控件
   void              ShowTabElements(void);
  };
//+------------------------------------------------------------------+
//| 只显示所选页面的控件                           |
//+------------------------------------------------------------------+
void CTabs::ShowTabElements(void)
  {
//--- 如果页面是隐藏的，退出
   if(!CElement::IsVisible())
      return;
//--- 计算所选页面的索引
   CheckTabIndex();
//---
   for(int i=0; i<m_tabs_total; i++)
     {
      //--- 取得附加到页面上的控件数量
      int tab_elements_total=::ArraySize(m_tab[i].elements);
      //--- 如果页面被选中
      if(i==m_selected_tab)
        {
         //--- 显示页面控件
         for(int j=0; j<tab_elements_total; j++)
            m_tab[i].elements[j].Show();
        }
      //--- 隐藏非活动页面的控件
      else
        {
         for(int j=0; j<tab_elements_total; j++)
            m_tab[i].elements[j].Hide();
        }
     }
  }
```

**CTabs::OnClickTab** () 方法将用于处理点击按下页面的事件。首先，程序必须通过两项检查: (1) 根据点击对象的名称 然后 (2) 使用 **CTabs::IdFromObjectName** ()方法取得对象的ID，如果检查通过了，程序就(1)在循环中找到按下的页面, (2) 保存它的索引 并(3) 设置对应的颜色。在 **CTabs::ShowTabElements** ()方法的最后, 只有活动页面的控件成为可见的。

```
class CTabs : public CElement
  {
private:
   //--- 处理点击按下页面
   bool              OnClickTab(const string pressed_object);
   //--- 根据对象名称取得ID
   int               IdFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 在一组中按下一个页面                         |
//+------------------------------------------------------------------+
bool CTabs::OnClickTab(const string clicked_object)
  {
//--- 如果没有按在表格单元上，就退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_tabs_edit_",0)<0)
      return(false);
//--- 从对象名称中取得ID
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配就退出
   if(id!=CElement::Id())
      return(false);
//---
   for(int i=0; i<m_tabs_total; i++)
     {
      //--- 如果点击了这个页面
      if(m_tabs[i].Name()==clicked_object)
        {
         //--- 保存所选择页面的索引
         SelectedTab(i);
         //--- 设置颜色
         m_tabs[i].Color(m_tab_text_color_selected);
         m_tabs[i].BackColor(m_tab_color_selected);
        }
      else
        {
         //--- 设置非活动页面的颜色
         m_tabs[i].Color(m_tab_text_color);
         m_tabs[i].BackColor(m_tab_color);
        }
     }
//--- 只显示所选页面的控件
   ShowTabElements();
   return(true);
  }
```

在这种情况下， **CTabs::OnEvent** () 主事件处理函数的代码如下所示:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                            |
//+------------------------------------------------------------------+
void CTabs::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 坐标
      int x=(int)lparam;
      int y=(int)dparam;
      for(int i=0; i<m_tabs_total; i++)
         m_tabs[i].MouseFocus(x>m_tabs[i].X() && x<m_tabs[i].X2() && y>m_tabs[i].Y() && y<m_tabs[i].Y2());
      //---
      return;
     }
//--- 处理鼠标左键点击对象事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 按下一个页面
      if(OnClickTab(sparam))
         return;
     }
  }
```

**CTabs** 类中所有的方法都讨论过了，现在，让我们测试看它如何工作。

### 测试页面控件

为了测试，让我们使用系列前一部分的EA交易，并删除它的图形界面中除了主菜单和状态条之外的所有内容，我们要使所有的位置模式(顶部/底部/右/左)都易于测试，并且它们的大小(高度)易于调整。为此，在EA的 **Program.mqh** 文件的自定义类中加入外部参数:

```
//--- External parameters of the Expert Advisor
input ENUM_TABS_POSITION TabsPosition =TABS_TOP; // 页面位置
input                int TabsHeight   =20;       // 页面高度
```

随后，在应用程序的自定义类(**CProgram**)中，声明一个 **CTabs** 类的实例以及在与表单边缘一定距离内创建页面控件的方法:

```
class CProgram : public CWndEvents
  {
private:
   //--- 页面
   CTabs             m_tabs;
   //---
private:
   //--- 页面
#define TABS1_GAP_X           (4)
#define TABS1_GAP_Y           (45)
   bool              CreateTabs(void);
  };
```

总共将有四个页面，页面显示的文字和宽度可以通过初始化数组来进行调整, 它们元件的值是之后通过在循环中使用 **CTabs::AddTab** ()方法传入的。页面的高度和位置将通过外部参数来设置。第二个页面(索引 1)将被默认选择(当程序第一次在图表上载入时)。 **CProgram::CreateTabs** () 方法的完整代码如下:

```
//+------------------------------------------------------------------+
//| 创建页面的区域                           |
//+------------------------------------------------------------------+
bool CProgram::CreateTabs(void)
  {
#define TABS1_TOTAL 4
//--- 传入面板对象
   m_tabs.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+TABS1_GAP_X;
   int y=m_window1.Y()+TABS1_GAP_Y;
//--- 页面文字和宽度的数组
   string tabs_text[]={"Tab 1","Tab 2","Tab 3","Tab 4"};
   int tabs_width[]={90,90,90,90};
//--- 在创建之前设置属性
   m_tabs.XSize(596);
   m_tabs.YSize(243);
   m_tabs.TabYSize(TabsHeight);
   m_tabs.PositionMode(TabsPosition);
   m_tabs.SelectedTab((m_tabs.SelectedTab()==WRONG_VALUE) ? 1 : m_tabs.SelectedTab());
   m_tabs.AreaColor(clrWhite);
   m_tabs.TabBackColor(C'225,225,225');
   m_tabs.TabBackColorHover(C'240,240,240');
   m_tabs.TabBackColorSelected(clrWhite);
   m_tabs.TabBorderColor(clrSilver);
   m_tabs.TabTextColor(clrGray);
   m_tabs.TabTextColorSelected(clrBlack);
//--- 使用指定属性添加页面
   for(int i=0; i<TABS1_TOTAL; i++)
      m_tabs.AddTab(tabs_text[i],tabs_width[i]);
//--- 创建控件
   if(!m_tabs.CreateTabs(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_tabs);
   return(true);
  }
```

此方法必须在应用程序创建图形界面的主方法中调用(参见以下的精简版方法代码):

```
//+------------------------------------------------------------------+
//| 创建EA的面板                           |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 为控件创建表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 页面
   if(!CreateTabs())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

编译程序并在图表中载入，页面位置的模式可以通过在外部参数中成功改变 (参见以下屏幕截图):

![图 2. 页面位置模式 — «顶部(Top)».](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-0%3B_%5D1%2Cjrg "图 2. 页面位置模式 — «顶部(Top)».")
![[Pasted image 20260628222152.png]]
图 2. 页面位置模式 — «顶部(Top)».

![图 3. 页面位置模式 — «底部(Bottom)».](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-12_%5D1%2Cjrg "图 3. 页面位置模式 — «底部(Bottom)».")
![[Pasted image 20260628222206.png]]
图 3. 页面位置模式 — «底部(Bottom)».

![图 4. 页面位置模式 — «左边(Left)».](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-13_%5D1%2Cjrg "图 4. 页面位置模式 — «左边(Left)».")
![[Pasted image 20260628222219.png]]
图 4. 页面位置模式 — «左边(Left)».

![图 5. 页面位置模式 — «右边(Right)».](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-10_%5D1%2Cjrg "图 5. 页面位置模式 — «右边(Right)».")
![[Pasted image 20260628222233.png]]
图 5. 页面位置模式 — «右边(Right)».

现在让我们测试看附加到各个页面的控件组如何工作，为此，创建并复制一个相同EA，然后删除外部参数，在此，页面位置都是在工作区域的顶部(**TABS\_TOP**)，

1. 第一个页面上附加了一个文字标签型表格，
2. 第二个页面上附加了一个编辑框型表格，
3. 而第三个页面上附加的是绘制型表格，
4. 第四个 - 一组控件，包含:
- 四个复选框;
	- 四个带有复选框的编辑框;
	- 四个带有复选框的组合框;
	- 一条分隔线。

在测试程序的自定义类(**CProgram**)中，声明 (1) 这些控件的实例, (2) 创建它们的方法 以及 (3) 和表单边缘的距离 (参见以下代码):

```
class CProgram : public CWndEvents
  {
private:
   //--- 文字标签型表格
   CLabelsTable      m_labels_table;
   //--- 编辑框型表格
   CTable            m_table;
   //--- 绘制型表格
   CCanvasTable      m_canvas_table;
   //--- 复选框
   CCheckBox         m_checkbox1;
   CCheckBox         m_checkbox2;
   CCheckBox         m_checkbox3;
   CCheckBox         m_checkbox4;
   //--- 带有复选框的编辑框
   CCheckBoxEdit     m_checkboxedit1;
   CCheckBoxEdit     m_checkboxedit2;
   CCheckBoxEdit     m_checkboxedit3;
   CCheckBoxEdit     m_checkboxedit4;
   //--- 带有复选框的组合框
   CCheckComboBox    m_checkcombobox1;
   CCheckComboBox    m_checkcombobox2;
   CCheckComboBox    m_checkcombobox3;
   CCheckComboBox    m_checkcombobox4;
   //--- 分隔线
   CSeparateLine     m_sep_line;
   //---
private:
   //--- 文字标签型表格
#define TABLE1_GAP_X          (5)
#define TABLE1_GAP_Y          (65)
   bool              CreateLabelsTable(void);
   //--- 编辑框型表格
#define TABLE2_GAP_X          (5)
#define TABLE2_GAP_Y          (65)
   bool              CreateTable(void);
   //--- 绘制型表格
#define TABLE3_GAP_X          (5)
#define TABLE3_GAP_Y          (65)
   bool              CreateCanvasTable(void);
   //--- 分隔线
#define SEP_LINE_GAP_X        (300)
#define SEP_LINE_GAP_Y        (70)
   bool              CreateSepLine(void);
   //--- 复选框
#define CHECKBOX1_GAP_X       (18)
#define CHECKBOX1_GAP_Y       (75)
   bool              CreateCheckBox1(const string text);
#define CHECKBOX2_GAP_X       (18)
#define CHECKBOX2_GAP_Y       (175)
   bool              CreateCheckBox2(const string text);
#define CHECKBOX3_GAP_X       (315)
#define CHECKBOX3_GAP_Y       (75)
   bool              CreateCheckBox3(const string text);
#define CHECKBOX4_GAP_X       (315)
#define CHECKBOX4_GAP_Y       (175)
   bool              CreateCheckBox4(const string text);
   //--- 带有复选框的编辑框
#define CHECKBOXEDIT1_GAP_X   (40)
#define CHECKBOXEDIT1_GAP_Y   (105)
   bool              CreateCheckBoxEdit1(const string text);
#define CHECKBOXEDIT2_GAP_X   (40)
#define CHECKBOXEDIT2_GAP_Y   (135)
   bool              CreateCheckBoxEdit2(const string text);
#define CHECKBOXEDIT3_GAP_X   (337)
#define CHECKBOXEDIT3_GAP_Y   (105)
   bool              CreateCheckBoxEdit3(const string text);
#define CHECKBOXEDIT4_GAP_X   (337)
#define CHECKBOXEDIT4_GAP_Y   (135)
   bool              CreateCheckBoxEdit4(const string text);
   //--- 带有复选框的组合框
#define CHECKCOMBOBOX1_GAP_X  (40)
#define CHECKCOMBOBOX1_GAP_Y  (205)
   bool              CreateCheckComboBox1(const string text);
#define CHECKCOMBOBOX2_GAP_X  (40)
#define CHECKCOMBOBOX2_GAP_Y  (235)
   bool              CreateCheckComboBox2(const string text);
#define CHECKCOMBOBOX3_GAP_X  (337)
#define CHECKCOMBOBOX3_GAP_Y  (205)
   bool              CreateCheckComboBox3(const string text);
#define CHECKCOMBOBOX4_GAP_X  (337)
#define CHECKCOMBOBOX4_GAP_Y  (235)
   bool              CreateCheckComboBox4(const string text);
  };
```

在前面的文章中，已经演示了如何创建控件并把它们附加到表单上，所以，在此我们只提供其中的一段代码来演示如何把控件附加到页面上，这些控件中最简单的 - 分隔线 - 用来做例子就足够了。代码如下所示，调用 **CTabs::AddToElementsArray** () 方法的代码行已经用黄色突出显示，第一个参数是它所附加的页面的索引，这里的索引是 **3**, 也就是第四个页面，第二个参数是需要附加到指定页面的控件对象。

```
//+------------------------------------------------------------------+
//| 创建分隔线                               |
//+------------------------------------------------------------------+
bool CProgram::CreateSepLine(void)
  {
//--- 保存窗口指针
   m_sep_line.WindowPointer(m_window1);
//--- 附加到第四个页面
   m_tabs.AddToElementsArray(3,m_sep_line);
//--- 坐标  
   int x=m_window1.X()+SEP_LINE_GAP_X;
   int y=m_window1.Y()+SEP_LINE_GAP_Y;
//--- 大小
   int x_size=2;
   int y_size=210;
//--- 在创建之前设置属性
   m_sep_line.DarkColor(C'213,223,229');
   m_sep_line.LightColor(clrWhite);
   m_sep_line.TypeSepLine(V_SEP_LINE);
//--- 创建元件
   if(!m_sep_line.CreateSeparateLine(m_chart_id,m_subwin,0,x,y,x_size,y_size))
      return(false);
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(0,m_sep_line);
   return(true);
  }
```

当应用程序的图形界面创建完毕后，必须调用 **CTabs::ShowTabElements** ()方法以便只显示活动页面的控件 (参见以下精简版的方法代码)，如果不这样，所有页面的所有控件都回显示出来。

```
//+------------------------------------------------------------------+
//| 创建EA的面板                           |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 为控件创建表单1
//--- 创建控件:
//--- 主菜单
//--- 上下文菜单
//--- 状态条
//--- 页面
//...
//--- 文字标签型表格
   if(!CreateLabelsTable())
      return(false);
//--- 编辑框型表格
   if(!CreateTable())
      return(false);
//--- 创建绘制型表格
   if(!CreateCanvasTable())
      return(false);
//--- 分隔线
   if(!CreateSepLine())
      return(false);
//--- 复选框
   if(!CreateCheckBox1("Checkbox 1"))
      return(false);
   if(!CreateCheckBox2("Checkbox 2"))
      return(false);
   if(!CreateCheckBox3("Checkbox 3"))
      return(false);
   if(!CreateCheckBox4("Checkbox 4"))
      return(false);
//--- 带有复选框的编辑框
   if(!CreateCheckBoxEdit1("Checkbox Edit 1:"))
      return(false);
   if(!CreateCheckBoxEdit2("Checkbox Edit 2:"))
      return(false);
   if(!CreateCheckBoxEdit3("Checkbox Edit 3:"))
      return(false);
   if(!CreateCheckBoxEdit4("Checkbox Edit 4:"))
      return(false);
//--- 带有复选框的组合框
   if(!CreateCheckComboBox1("CheckCombobox 1:"))
      return(false);
   if(!CreateCheckComboBox2("CheckCombobox 2:"))
      return(false);
   if(!CreateCheckComboBox3("CheckCombobox 3:"))
      return(false);
   if(!CreateCheckComboBox4("CheckCombobox 4:"))
      return(false);
//--- 只显示活动页面的控件
   m_tabs.ShowTabElements();
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

结果如以下屏幕截图所示

![图 6. 第一个页面的控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-11.hpe "图 6. 第一个页面的控件")
![[Pasted image 20260628222258.png]]
图 6. 第一个页面的控件

![图 7. 第二个页面的控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-16.hpe "图 7. 第二个页面的控件。")
![[Pasted image 20260628222312.png]]
图 7. 第二个页面的控件。

![图 8. 第三个页面的控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-17.hpe "图 8. 第三个页面的控件。")
![[Pasted image 20260628222323.png]]
图 8. 第三个页面的控件。

![图 9. 第四个页面的控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-14.hpe "图 9. 第四个页面的控件。")
![[Pasted image 20260628222336.png]]
图 9. 第四个页面的控件。

一切都按计划运行。本图形开发库系列的第七部分现在可以结束了，作为补充，您可以下载另外一个类的代码(**CIconTabs**)，它具有创建页面的扩展功能，可以在本文的附件中找到。和 **CTabs** 类不同, 一个 **CIconTabs** 类型的控件的每个页面都有可以调整的图标。这有助于使图形界面对用户更加友好，

图标和显示的文字可以使用特定的方法准确放置到相对每个页面边缘的位置 (参见以下代码):

```
//+------------------------------------------------------------------+
//| 创建图标页面的类                         |
//+------------------------------------------------------------------+
class CIconTabs : public CElement
  {
private:
   //--- 标签边缘
   int               m_icon_x_gap;
   int               m_icon_y_gap;
   //--- 文字标签边缘
   int               m_label_x_gap;
   int               m_label_y_gap;
   //---
public:
   //--- 标签边缘
   void              IconXGap(const int x_gap)                       { m_icon_x_gap=x_gap;            }
   void              IconYGap(const int y_gap)                       { m_icon_y_gap=y_gap;            }
   //--- 文字标签边缘
   void              LabelXGap(const int x_gap)                      { m_label_x_gap=x_gap;           }
   void              LabelYGap(const int y_gap)                      { m_label_y_gap=y_gap;           }
  };
```

例子中图标页面控件的外观在以下屏幕截图中显示:

![图 10. «图标页面» 控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-15.hpe "图 10. «图标页面» 控件。")
![[Pasted image 20260628222349.png]]
图 10. 图标页面控件。

此EA的代码也可以在本文附件中下载。

### 结论

现在，用于创建图形界面库的结构看起来如下:

![图 11. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-1%3A.hpe "图 11. 当前开发阶段的库结构。")
![[Pasted image 20260628222359.png]]
图 11. 当前开发阶段的库结构。

在 **MetaTrader** 交易终端中创建图形界面的系列文章的第七部分介绍了表格和页面控件，有三个类(**CLabelsTable**, **CTable** 和 **CCanvasTable**) 用于创建表格，而有两个类(**CTabs** 和 **CIconTabs**) 用于创建页面，

系列文章的下一部分(第八部分)将探讨以下控件：

- 静态和下拉的日历；
- 树形视图；
- 文件浏览器。

您可以在附件中下载本系列的第七部分的资料并测试看它如何工作，如果您有关于如何使用这些资料的问题，您可以参考以下列表中对应的库开发文章来找到详细描述，或者也可以在下面的留言中问问题。

**第七部分的文章(章节)列表:**

- [图形界面 VII: 表格控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520)
- [图形界面 VII: 页面控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523!pcrc1)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2503](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0523)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2701.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2701%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (318.56 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2701%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (319.19 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-97732)** (23)

![Jefferson Judge Metha](https://c.mql5.com/avatar/2021/2/6017F3F5-4887.jpg "Jefferson Judge Metha")

| 11 10月 2019 在 03:30

我正试图在标签页中添加一个输入框，但无法正常工作。

```
input double whenToTrail=10.3;

class CProgram: public CWndEvents
{
protected:
   CSpinEdit         m_StartTS;
//Code
protected:
   bool              CreatetrailStop(const int x_gap, const int y_gap, const string text);
};
```

那么 [函数](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Flaoefcmnqtcnvs-cmmrineoaarms "MQL5 文档：预定义宏替代")

```
bool CProgram::CreatetrailStop(const int x_gap, const int y_gap, string text)
  {
//--- 保存指向主元素的指针
   m_StartTS.WindowPointer(m_window);
//--- 坐标
   int x = m_window.X() + x_gap;
   int y = m_window.Y() + y_gap;
//--- 为标签页预留
   m_tabs.AddToElementsArray(1, m_StartTS);
//--- 属性
   m_StartTS.XSize(95);
   m_StartTS.YSize(15);
   m_StartTS.EditXSize(40);
   m_StartTS.MinValue(0.01);
   m_StartTS.StepValue(0.01);
   m_StartTS.SetDigits(1);
   m_StartTS.SetValue(NormalizeDouble(whenToTrail,1));
   
   m_StartTS.ResetMode(true);
//--- 创建一个控件
   if(!m_StartTS.CreateSpinEdit(m_chart_id, m_subwin, text, x, y))
      return(false);
//--- 将对象添加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0, m_StartTS);
   return(true);
  }
```

  
该对象没有附加到面板上，而是在图表上。  
  
，删除图表后，该对象仍然存在。

![barcla](https://c.mql5.com/avatar/avatar_na2.png "barcla")

| 11 6月 2021 在 17:58

嗨，我对这篇文章很感兴趣，我试着安装了它，但在编译时却出现了这些错误：

资源文件 '\\ Images \\ EasyAndFastGUI \\ [Controls](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F112 "文章：自定义图形控件 第 1 部分.创建一个简单的控件") \\ LeftTransp\_black.bmp' 未找到 Calendar.mqh 443 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ LeftTransp\_blue.bmp' 未找到 Calendar.mqh 444 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ calendar\_today.bmp' 未找到 Calendar.mqh 738 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ calendar\_drop\_on.bmp' 未找到 DropCalendar.mqh 435 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ calendar\_drop\_off.bmp' 未找到 DropCalendar.mqh 436 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ calendar\_drop\_locked.bmp' 未找到 DropCalendar.mqh 437 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ RightTransp\_rotate\_black.bmp' 未找到 TreeItem.mqh 247 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ RightTransp\_rotate\_white.bmp' 未找到 TreeItem.mqh 248 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_x\_resize.bmp' 未找到 Pointer.mqh 8 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_x\_resize\_blue.bmp' 未找到 Pointer.mqh 9 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_y\_resize.bmp' 未找到 Pointer.mqh 10 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_y\_resize\_blue.bmp' 未找到 Pointer.mqh 11 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_xy1\_resize.bmp' 未找到 Pointer.mqh 12 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_xy1\_resize\_blue.bmp' 未找到 Pointer.mqh 13 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_xy2\_resize.bmp' 未找到 Pointer.mqh 14 11

资源文件 'Images\\ EasyAndFastGUI\\ Controls\\ pointer\_xy2\_resize\_blue.bmp' 未找到 Pointer.mqh 15 11

资源文件 'Images\\ EasyAndFastGUI \\ Icons \\ bmp16 \\ folder.bmp' 未找到 FileNavigator.mqh 284 11

资源文件 'Images\\ EasyAndFastGUI\\ Icons\\ bmp16\\ text\_file.bmp' 未找到 FileNavigator.mqh 285 11

我查看了 MQL5 压缩文件，但文件不在那里，有什么办法可以得到它们吗？

谢谢。

![Mohammad-Reza Yakhyan](https://c.mql5.com/avatar/2023/1/63c53808-3fe3.jpg "Mohammad-Reza Yakhyan")

| 19 1月 2023 在 17:32

如何将 CLabel 添加到标签页，当我 [创建 CLabel](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cna%60en "标准图书馆：类 CLabel") 项目并希望添加到标签页时，编译器给出了这些错误：

```
CLabel m_overview_titlte_label;

bool CMainPanel::CreateOverviewTitleLabel(const string text)
  {

//--- 传递面板对象
   m_overview_title_label.WindowPointer(m_window)；
//--- 附加到第一组选项卡的第四个选项卡上
   m_main_panel_tabs.AddToElementsArray(0,m_overview_title_label);  
   m_main_panel_tabs.AddToElementsArray( 
//--- 坐标
   int x=m_window.X()+OVERVIE_TITLE_LABEL_GAP_X;
   int y=m_window.Y()+OVERVIE_TITLE_LABEL_GAP_Y;
//--- 创建前设置属性
   m_overview_title_label.XSize(140);
   m_overview_title_label.YSize(18);
   //m_overview_title_label.
//--- 创建控制
   if(!m_overview_title_label.Create(m_chart_id,text,m_subwin,x,y))
      return(false);
//--- 将对象添加到对象组的通用数组中
   //CWndContainer::AddToElementsArray(0,m_overview_title_label)；
   return(true);
  }
```

Compiler Error：

WindowPointer' - 函数未定义 MainPanel.mqh 233 27

m\_overview\_title\_label' - 参数转换不允许 MainPanel.mqh 235 43

'm\_overview\_title\_label' - 希望使用相同类型的变量 MainPanel.mqh 235 43

![Mohammad-Reza Yakhyan](https://c.mql5.com/avatar/2023/1/63c53808-3fe3.jpg "Mohammad-Reza Yakhyan")

| 19 1月 2023 在 21:42

**Martin Fischer 函数。 我可以创建这些对象，但无法将它们附加到窗口。 在这种情况下不起作用...... 2.) CComboBox 是静态对象吗？是否可以在创建后修改 中的元素列表？  
  
**

**ComboBox-Listview 中的元素列表？**

**

谢谢！

**

我也遇到过同样的问题，我是通过创建一个 include 文件并编写我的标签类来解决这个问题的。您必须在 Include\\EasyAndFastGUI\\Controls\\MyLabel.mqh 中创建该文件。

这段代码是

```
//+------------------------------------------------------------------+
//|我的标签mqh
//|版权 2023, Sassiz.根
//|https：//t.me/R00T_S4SS12 | |
//+------------------------------------------------------------------+
#property copyright "Copyright 2023, Sassiz.Root"
#property link      "https://t.me/R00T_S4SS12"
#property strict

#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 创建复选框的类|
//+------------------------------------------------------------------+
class MyLabel : public CElement
  {
private:
   //-- 连接元素的表单指针
   CWindow          *m_wnd;
   //--- 创建复选框的对象

   CLabel            m_label;

   //--- 复选框文本
   string            m_label_text;
   //--- 文本标签页边距
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 不同状态下文本标签的颜色
   color             m_label_color;
   color             m_label_color_off;
   color             m_label_color_hover;
   color             m_label_color_locked;
   color             m_label_color_array[];
   //--- 按下鼠标左键的优先级
   int               m_zorder;
   int               m_area_zorder;

   //---
public:
                     MyLabel(void);
                    ~MyLabel(void);
   //--- 创建复选框的方法
   bool              CreateLabel(const long chart_id,const int subwin,const string text,const int x,const int y);
   //---
private:
   bool              CreateLabel2(void);
   //---
public:
   //--- (1) 存储表单指针，(2) 返回/设置复选框的状态
   void              WindowPointer(CWindow &object)                 { m_wnd=::GetPointer(object);            }

   //--- (1) 背景颜色，(2) 文本标签的页边距

   void              LabelXGap(const int x_gap)                     { m_label_x_gap=x_gap;                   }
   void              LabelYGap(const int y_gap)                     { m_label_y_gap=y_gap;                   }
   //--- 不同状态下文字的颜色
   void              LabelColor(const color clr)                    { m_label_color=clr;                     }

   //---（1）复选框说明，（2）返回/设置复选框按钮的状态
   string            LabelText(void)                          const { return(m_label.Description());         }

   //--- 更改颜色
   void              ChangeObjectsColor(void);
   //---
public:
   //-- 图表事件处理程序
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 定时器
   virtual void      OnEventTimer(void);
   //--- 移动元素
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示，(2) 隐藏，(3) 重置，(4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //---（1）设置、（2）重置鼠标左键按下的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //-- 重置颜色
   virtual void      ResetColors(void);
   virtual void      SetText(string text);
   virtual void      SetFontSize(int fontSize);
   //---
private:
   //--- 处理对元素的按压
   bool              OnClickLabel(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 构造函数|
//+------------------------------------------------------------------+
MyLabel::MyLabel(void) :      
                             m_label_x_gap(20),
                             m_label_y_gap(2),
                             m_label_color(clrBlack)
                             
  {
//--- 在基类中存储元素类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置点击鼠标左键的优先级
   m_zorder      =0;
   m_area_zorder =1;
  }
//+------------------------------------------------------------------+
//| 销毁器|
//+------------------------------------------------------------------+
MyLabel::~MyLabel(void)
  {
  }
//+------------------------------------------------------------------+
//| 事件处理|
//+------------------------------------------------------------------+
void MyLabel::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 光标移动事件的处理
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 离开，如果元素是隐藏的
      if(!CElement::IsVisible())
         return;
      //--- 如果子窗口的数量不匹配，则离开
      if(CElement::m_subwin!=CElement::m_mouse.SubWindowNumber())
         return;
      //--- 检查元素上的焦点
      CElement::MouseFocus(m_mouse.X()>X() && m_mouse.X()<X2() && m_mouse.Y()>Y() && m_mouse.Y()<Y2());
      return;
     }
//--- 处理对象上的鼠标左键点击
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 按下复选框
      if(OnClickLabel(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 定时器|
//+------------------------------------------------------------------+
void MyLabel::OnEventTimer(void)
  {
//--- 如果表单未被阻止
   if(!m_wnd.IsLocked())
      //--- 更改元素对象的颜色
      ChangeObjectsColor();
  }
//+------------------------------------------------------------------+
//| 创建一组复选框对象|
//+------------------------------------------------------------------+
bool MyLabel::CreateLabel(const long chart_id,const int subwin,const string text,const int x,const int y)
  {
//--- 如果没有表格指针，则离开
   if(!CElement::CheckWindowPointer(::CheckPointer(m_wnd)))
      return(false);
//--- 初始化变量
   m_id         =m_wnd.LastId()+1;
   m_chart_id   =chart_id;
   m_subwin     =subwin;
   m_x          =x;
   m_y          =y;
   m_label_text =text;
//--- 边缘的边距
   CElement::XGap(CElement::X()-m_wnd.X());
   CElement::YGap(CElement::Y()-m_wnd.Y());
//--- 创建一个元素

   if(!CreateLabel2())
      return(false);
//--- 如果窗口是对话框或已最小化，则隐藏元素
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }

//+------------------------------------------------------------------+
//| 创建复选框标签|
//+------------------------------------------------------------------+
bool MyLabel::CreateLabel2(void)
  {
//--- 生成对象名称
   string name=CElement::ProgramName()+"_lable_"+(string)CElement::Id();
//--- 坐标
   int x =CElement::X()+m_label_x_gap;
   int y =CElement::Y()+m_label_y_gap;
//--- 根据状态显示文字颜色
   color label_color=clrBlack;//(m_check_button_state) ? m_label_color : m_label_color_off；
//--- 设置对象
   if(!m_label.Create(m_chart_id,name,m_subwin,x,y))
      return(false);
//--- 设置属性
   m_label.Description(m_label_text);
   m_label.Font(FONT);
   m_label.FontSize(FONT_SIZE);
   m_label.Color(label_color);
   m_label.Corner(m_corner);
   m_label.Anchor(m_anchor);
   m_label.Selectable(false);
   m_label.Z_Order(m_zorder);
   m_label.Tooltip("\n");
//--- 边缘的边距
   m_label.XGap(x-m_wnd.X());
   m_label.YGap(y-m_wnd.Y());
//--- 初始化梯度阵列
   CElement::InitColorArray(label_color,m_label_color_hover,m_label_color_array);
//--- 存储对象指针
   CElement::AddToArray(m_label);
   return(true);
  }
//+------------------------------------------------------------------+
//| 移动元素|
//+------------------------------------------------------------------+
void MyLabel::Moving(const int x,const int y)
  {
//--- 离开，如果元素是隐藏的
   if(!CElement::IsVisible())
      return;
//-- 在元素字段中存储缩进
   CElement::X(x+XGap());
   CElement::Y(y+YGap());
//-- 在对象的字段中存储坐标
   m_label.X(x+m_label.XGap());
   m_label.Y(y+m_label.YGap());
//-- 更新图形对象的坐标
   m_label.X_Distance(m_label.X());
   m_label.Y_Distance(m_label.Y());
  }
//+------------------------------------------------------------------+
//| 当光标悬停在对象上时更改对象颜色
//+------------------------------------------------------------------+
void MyLabel::ChangeObjectsColor(void)
  {
//--- 如果元素被阻止，则离开

//---
   color label_color=clrBlack;//(m_check_button_state) ? m_label_color : m_label_color_off；
   CElement::ChangeObjectColor(m_label.Name(),CElement::MouseFocus(),OBJPROP_COLOR,label_color,m_label_color_hover,m_label_color_array);
  }
//+------------------------------------------------------------------+
//| 显示组合框|
//+------------------------------------------------------------------+
void MyLabel::Show(void)
  {
//--- 离开，如果元素已经可见
   if(CElement::IsVisible())
      return;
//--- 使所有对象可见
   for(int i=0; i<CElement::ObjectsElementTotal(); i++)
      CElement::Object(i).Timeframes(OBJ_ALL_PERIODS);
//--- 可见性状态
   CElement::IsVisible(true);
  }
//+------------------------------------------------------------------+
//| 隐藏组合框|
//+------------------------------------------------------------------+
void MyLabel::Hide(void)
  {
//--- 离开，如果元素已经可见
   if(!CElement::IsVisible())
      return;
//--- 隐藏所有对象
   for(int i=0; i<CElement::ObjectsElementTotal(); i++)
      CElement::Object(i).Timeframes(OBJ_NO_PERIODS);
//--- 可见性状态
   CElement::IsVisible(false);
  }
//+------------------------------------------------------------------+
//| 重绘|
//+------------------------------------------------------------------+
void MyLabel::Reset(void)
  {
//--- 离开，如果这是一个下拉元素
   if(CElement::IsDropdown())
      return;
//--- 隐藏和显示
   Hide();
   Show();
  }
//+------------------------------------------------------------------+
//| 删除|
//+------------------------------------------------------------------+
void MyLabel::Delete(void)
  {
//--- 删除对象
   m_label.Delete();
//-- 清空对象数组
   CElement::FreeObjectsArray();
//-- 按默认值初始化变量
   CElement::MouseFocus(false);
   CElement::IsVisible(true);
  }
//+------------------------------------------------------------------+
//eth the priorities|
//+------------------------------------------------------------------+
void MyLabel::SetZorders(void)
  {
   m_label.Z_Order(m_zorder);
  }
//+------------------------------------------------------------------+
//| 重置优先级|
//+------------------------------------------------------------------+
void MyLabel::ResetZorders(void)
  {
   m_label.Z_Order(0);
  }
//+------------------------------------------------------------------+
//| 重置元素对象的颜色|
//+------------------------------------------------------------------+
void MyLabel::ResetColors(void)
  {

//-- 重置颜色
   m_label.Color(clrBlack);
//-- 将焦点归零
   CElement::MouseFocus(false);
  }

//+------------------------------------------------------------------+
//| 点击元素标题|
//+------------------------------------------------------------------+
bool MyLabel::OnClickLabel(const string clicked_object)
  {

//--- 鼠标光标当前位于元素上方
   m_label.Color(m_label_color_hover);
//--- 发送相关信息
   ::EventChartCustom(m_chart_id,ON_CLICK_LABEL,CElement::Id(),0,m_label.Description());
   return(true);
  }
//+------------------------------------------------------------------+

void MyLabel::SetText(string text){
   m_label.Description(text);
}

void MyLabel::SetFontSize(int fontSize){
   m_label.FontSize(fontSize);
}
```

然后像这样从 MyLabel 类中创建对象并使用它：

```
//-- 标签
MyLabel           m_overview_title_label;
```

然后

```
//+------------------------------------------------------------------+
//| 创建概述标题标签|
//+------------------------------------------------------------------+
bool CMainPanel::CreateOverviewTitleLabel(const string text)
  {

//--- 传递面板对象
   m_overview_title_label.WindowPointer(m_window);
//--- 附加到第一组选项卡的第四个选项卡上
   m_main_panel_tabs.AddToElementsArray(0,m_overview_title_label);  
//--- 坐标
   int x=m_window.X()+OVERVIE_TITLE_LABEL_GAP_X;
   int y=m_window.Y()+OVERVIE_TITLE_LABEL_GAP_Y;
//--- 创建前设置属性
   m_overview_title_label.XSize(140);
   m_overview_title_label.YSize(18);
   m_overview_title_label.SetText(text);
   m_overview_title_label.SetFontSize(18);
   //m_overview_title_label.
//--- 创建控制
   if(!m_overview_title_label.CreateLabel(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 将对象添加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_overview_title_label);
   return(true);
  }
```

![matinz](https://c.mql5.com/avatar/avatar_na2.png "matinz")

| 14 4月 2025 在 11:11

如果我们增加标签页的数量，无论是纵向还是横向，都将无法滚动，从而导致窗口超出其极限，降低其效率。

[跨平台智能交易程序: 概论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0549)

本文详细介绍了一种可以更快捷开发跨平台 EA 的方法。其所倡导的方法是将两个版本共享的功能整合到一个单独的类, 并将不兼容的功能分割到派生类。

[如何使用 EA 遵照您的规则拷贝信号?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0418)

当您订阅了一个信号, 也许会发生这样的情形: 您的交易账户杠杆为 1:100, 而提供者的杠杆为 1:500, 且使用最小手数, 而您的账户余额大约相等 — 但拷贝比率只有 10% 到 15%。本文介绍在这种情况下如何增加拷贝比率。

[跨平台智能交易程序: 重用来自 MQL5 标准库的控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0554)

在 MQL5 标准库里存在的一些控件被证明在 MQL4 版本的跨平台智能交易程序里十分有用。本文涉及令某些 MQL5 标准库的控件与 MQL4 编译器兼容的方法。

[研究 CCanvas 类。抗锯齿和阴影](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3632)

CCanvas 类的抗锯齿算法是所有使用抗锯齿构造的基础。本文包括其算法的操作内容, 并提供相应的直观示例。它也涵盖了绘制图形对象造型, 以及在画布上绘制造型的算法详情。数值分析库 ALGLIB 用于计算。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fd6jn%60k7f14erj963x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dtpafe%2Cmgtctpafep5%2Ccmm'2D%26c%3Dlhxdtcccmynbdxebcfilivhoccjzgcti%24s%3F8564a3dcb%60240de%60104g964gc25%3Bdc1f879c2c00c%3A312184aa2%3B573c01f11c70%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0523%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>