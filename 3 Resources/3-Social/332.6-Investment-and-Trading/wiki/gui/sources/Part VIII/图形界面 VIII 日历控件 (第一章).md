---
title: "图形界面 VIII: 日历控件 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-09-27T11:07:57+00:00Z
created: 2026-06-28
description: "在 MetaTrader 中创建图形界面的系列文章的第八部分中，我们将探讨复杂的组合控件，例如日历(calendar)，树形视图(tree view)，以及文件浏览器(file navigator)。因为有大量的信息，对每个主题都有独立的文章，此部分的第一章描述了日历控件以及它的扩展版本 - 下拉日历。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc2)
- [日历控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc3)
- [CDateTime 结构的描述](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!cfavevioe)
	- [CCalendar 类的开发](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!caaneldcr)
	- [日历事件的处理函数](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc6)
	- [测试日历控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc7)
- [下拉日历](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc8)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc13)

### 简介

为了更好地理解这个开发库的目标，请阅读第一篇文章: [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) ，在每个部分中，文章末尾都提供了章节链接的列表，您也可以在那里下载最新版的完整开发库。文件必须按照它们在归档中的位置，放到相同的目录下。

在本章中，我们将集中精力开发复杂的组合控件:

- 静态的和下拉的日历
- 树形视图
- 文件浏览器

在本文中，我们将探讨用于创建静态和下拉日历的类和结构([struct](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Falcsqeq))，我们使用来自标准库的 [CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构用于在开发过程中操作日期和时间。

### 日历控件

日历是一个计算时间并将其展示在表格中的周期系统，图形界面必须有控件允许用户在日历中简单选择所需的时间，除了与用户交互的自定义方法之外，在日历类中还包含了其他库中的控件，例如，我们将包含的类分别用于创建 (1) 组合框, (2) 输入栏位 和 (3) 按钮。

让我们列出日历的所有组件：

1. 区域
2. 用于切换前面和后面月份的按钮
3. 用于列出月份的组合框控件
4. 用于输入年份的栏位
5. 星期几简称的文字标签数组
6. 分隔线
7. 包含日期的二维文字标签数组
8. 用于快速跳到下一个日期的按钮

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-el1%5D_0.rne)
![[Pasted image 20260628222446.png]]
图 1. 日历的组件

例如，需要在正在开发的MQL应用程序中选择一定范围的日期，所以，必须指出开始和结束日期。只要在表格中点击任意日期项目，就可以选择某一天。月份的选择有几种方法: (1) 使用按钮切换到前一个月, (2) 使用按钮切换到后一个月 以及 (3) 使用包含所有月份的组合框。年份可以通过指示栏位人工输入或者使用控件来切换。为了快速转到当前的日期，可以点击日历底部的" **Today(今天): YYYY.MM.DD** "按钮。

让我们仔细研究一下 [CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构，它用于处理日期和时间。

### CDateTime 结构的描述

**DateTime.mqh** 文件包含着 [CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构，它放置在 **MetaTrader** 交易终端的目录中:

- MetaTrader 4: *\<data folder>\\MQL4\\Include\\Tools*
- MetaTrader 5: *\<data folder>\\MQL5\\Include\\Tools*

[CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构是系统的日期和时间结构，被称为 [MqlDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fqtpuatwrgs-mslfavevioe) 结构的派生(扩展)，它包含了8个 [int](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Fknveeep%2Fknveeept%7Bpgs) 类型的栏位 (参见MQL语言文档中的实例):

```
struct MqlDateTime
  {
   int year;           // 年份
   int mon;            // 月份
   int day;            // 日期
   int hour;           // 小时
   int min;            // 分钟
   int sec;            // 秒
   int day_of_week;    // 星期几 (0-星期日, 1-星期一, ... ,6-星期六)
   int day_of_year;    // 日期在年中的排号 (1月1日排号为0)
  };
```

[CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构不含代码的方法简要描述可以在 *MQL5 Reference/Standard Library/Classes for Control Panels and Dialogs/CDateTime* 中使用本地搜索(**F1**)得到，在处理这个结构的过程中，您需要记住的是 **月份的计数是从1开始的，而星期的计数从0开始。**

打开 **DateTime.mqh** 文件，您可以自己熟悉代码。

### CCalendar 类的开发

我们创建 **Calendar.mqh** 文件，并且把它包含在 **WndContainer.mqh** 文件中, 就像我们开发库中所有控件一样。

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Calendar.mqh"
```

在 **Calendar.mqh** 文件中，我们创建 **CCalendar** 类，并且加上所有控件都有的标准方法，并且也包含开发控件所需的文件:

```
//+------------------------------------------------------------------+
//|                                                     Calendar.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "SpinEdit.mqh"
#include "ComboBox.mqh"
#include "IconButton.mqh"
#include <Tools\DateTime.mqh>
//+------------------------------------------------------------------+
//| 用于创建日历的类                           |
//+------------------------------------------------------------------+
class CCalendar : public CElement
  {
private:
   //--- 控件所附加的表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CCalendar(void);
                    ~CCalendar(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)             { m_wnd=::GetPointer(object);            }
   //---
public:
   //--- 事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void);
   //--- 移动控件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重置鼠标左键点击优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重置颜色
   virtual void      ResetColors(void) {}
  };
```

就和开发库中的其他控件一样，也要有选项来设置日历的外观，以下是用户可以设置外观相关的属性。

- 区域的颜色
- 区域边框的颜色
- 不同状态下项目(日期)的颜色
- 不同状态下项目边框的颜色
- 不同状态下项目文字的颜色
- 分隔线的颜色
- 按钮的标签(活动/阻止)，用于转到之前/之后的月份

以下的代码展示了 **CCalendar** 类中在创建日历之前用于设置其外观的栏位和方法的名称:

```
class CCalendar : public CElement
  {
private:
   //--- 区域颜色
   color             m_area_color;
   //--- 区域边框的颜色
   color             m_area_border_color;
   //--- 不同状态下日历项目(日期)的颜色
   color             m_item_back_color;
   color             m_item_back_color_off;
   color             m_item_back_color_hover;
   color             m_item_back_color_selected;
   //--- 不同状态下项目边框的颜色
   color             m_item_border_color;
   color             m_item_border_color_hover;
   color             m_item_border_color_selected;
   //--- 不同状态下项目文字的颜色
   color             m_item_text_color;
   color             m_item_text_color_off;
   color             m_item_text_color_hover;
   //--- 分隔线的颜色
   color             m_sepline_color;
   //--- 转到之前/之后月份的按钮的标签(在活动/阻止状态下)
   string            m_left_arrow_file_on;
   string            m_left_arrow_file_off;
   string            m_right_arrow_file_on;
   string            m_right_arrow_file_off;
   //---
public:
   //--- 设置颜色 (1) 区域, (2) 区域边框, (3) 分隔线
   void              AreaBackColor(const color clr)             { m_area_color=clr;                      }
   void              AreaBorderColor(const color clr)           { m_area_border_color=clr;               }
   void              SeparateLineColor(const color clr)         { m_sepline_color=clr;                   }
   //--- 不同状态下日历项目(日期)的颜色
   void              ItemBackColor(const color clr)             { m_item_back_color=clr;                 }
   void              ItemBackColorOff(const color clr)          { m_item_back_color_off=clr;             }
   void              ItemBackColorHover(const color clr)        { m_item_back_color_hover=clr;           }
   void              ItemBackColorSelected(const color clr)     { m_item_back_color_selected=clr;        }
   //--- 不同状态下项目边框的颜色
   void              ItemBorderColor(const color clr)           { m_item_border_color=clr;               }
   void              ItemBorderColorHover(const color clr)      { m_item_border_color_hover=clr;         }
   void              ItemBorderColorSelected(const color clr)   { m_item_border_color_selected=clr;      }
   //--- 不同状态下项目文字的颜色
   void              ItemTextColor(const color clr)             { m_item_text_color=clr;                 }
   void              ItemTextColorOff(const color clr)          { m_item_text_color_off=clr;             }
   void              ItemTextColorHover(const color clr)        { m_item_text_color_hover=clr;           }
   //--- 设置转到之前/之后月份按钮(在活动/阻止状态下)的标签
   void              LeftArrowFileOn(const string file_path)    { m_left_arrow_file_on=file_path;        }
   void              LeftArrowFileOff(const string file_path)   { m_left_arrow_file_off=file_path;       }
   void              RightArrowFileOn(const string file_path)   { m_right_arrow_file_on=file_path;       }
   void              RightArrowFileOff(const string file_path)  { m_right_arrow_file_off=file_path;      }
  };
```

我们将需要9个 **私有(private)** 方法和1个 **公有(public)** 方法来创建日历，需要 **CEdit** 类型的静态数组来显示星期和日期，

日期表格将包含 **42** 项。这对每个月最多31天来说已经足够了，这是考虑到一个月的第一天的最大可能偏移到星期天来计算的(在这种实现方法中，星期天是一个星期的第七天)。

```
class CCalendar : public CElement
  {
private:
   //--- 用于创建日历的对象和控件
   CRectLabel        m_area;
   CBmpLabel         m_month_dec;
   CBmpLabel         m_month_inc;
   CComboBox         m_months;
   CSpinEdit         m_years;
   CEdit             m_days_week[7];
   CRectLabel        m_sep_line;
   CEdit             m_days[42];
   CIconButton       m_button_today;
   //---
public:
   //--- 用于创建日历的方法
   bool              CreateCalendar(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateMonthLeftArrow(void);
   bool              CreateMonthRightArrow(void);
   bool              CreateMonthsList(void);
   bool              CreateYearsSpinEdit(void);
   bool              CreateDaysWeek(void);
   bool              CreateSeparateLine(void);
   bool              CreateDaysMonth(void);
   bool              CreateButtonToday(void);
  };
```

如果日历是另外一个控件的一部分，可能需要访问日历的组成控件，为此，我们将在类中增加返回以上所列控件的方法。

- 组合框 (**CComboBox**)
- 组合框的列表(**CListView**)
- 列表的垂直滚动条(**CScrollV**)
- 输入栏位(**CSpinEdit**)
- 按钮(**CIconButton**)

```
class CCalendar : public CElement
  {
public:
   //--- (1) 取得组合框指针 
   //    (2) 取得列表指针, (3) 取得列表滚动条指针, 
   //    (4) 取得输入栏位指针, (5) 取得按钮指针
   CComboBox        *GetComboBoxPointer(void)             const { return(::GetPointer(m_months));        }
   CListView        *GetListViewPointer(void)                   { return(m_months.GetListViewPointer()); }
   CScrollV         *GetScrollVPointer(void)                    { return(m_months.GetScrollVPointer());  }
   CSpinEdit        *GetSpinEditPointer(void)             const { return(::GetPointer(m_years));         }
   CIconButton      *GetIconButtonPointer(void)           const { return(::GetPointer(m_button_today));  }
  };
```

将需要3个 [CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构的实例用来操作日期和时间。

- 用于和用户的交互；用户自己所选择的日期(在日历中的选择)；
- 用户电脑上的当前或者系统日期，这个日期一直标记在日历上。
- 用于计算和检查的实例，它会在 **CCalendar** 类的很多方法中用作计数器。

```
class CCalendar : public CElement
  {
private:
   //--- 用于操作日期和时间的结构的实例:
   CDateTime         m_date;      // 用户所选择的日期
   CDateTime         m_today;     // 用户电脑的当前/系统日期
   CDateTime         m_temp_date; // 用于计算和检查的实例
  };
```

时间结构的初始化将在 **CCalendar** 类的构造函数中进行，我们将为 **m\_date** 和 **m\_today** 实例的初始值设为用户电脑的本地时间(在以下代码中用黄色标出).

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                                        |
//+------------------------------------------------------------------+
CCalendar::CCalendar(void) : m_area_color(clrWhite),
                             m_area_border_color(clrSilver),
                             m_sepline_color(clrBlack),
                             m_item_back_color(clrWhite),
                             m_item_back_color_off(clrWhite),
                             m_item_back_color_hover(C'235,245,255'),
                             m_item_back_color_selected(C'193,218,255'),
                             m_item_border_color(clrWhite),
                             m_item_border_color_hover(C'160,220,255'),
                             m_item_border_color_selected(C'85,170,255'),
                             m_item_text_color(clrBlack),
                             m_item_text_color_off(C'200,200,200'),
                             m_item_text_color_hover(C'0,102,204'),
                             m_left_arrow_file_on(""),
                             m_left_arrow_file_off(""),
                             m_right_arrow_file_on(""),
                             m_right_arrow_file_off("")
  {
//--- 在基类中保存控件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击优先级
   m_zorder        =0;
   m_area_zorder   =1;
   m_button_zorder =2;
//--- 初始化时间结构
   m_date.DateTime(::TimeLocal());
   m_today.DateTime(::TimeLocal());
  }
```

在设置日历之后，必须在表格的项目(日期)中设置当前的月份和年份数值，为此需要四个方法。

> 1\. **CCalendar::OffsetFirstDayOfMonth** () 方法用于计算当前月份的第一天和表格中的第一项之间的距离(天数),在这个方法中，我们使用当前年月的第一天构建一个日期字符串，然后，把这个字符串转换为 [datetime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fvyreq%2Fknveeep%2Ffavevioe) 格式, 我们再设置结构用于计算。如果从当前的星期数减去1而结果大于等于0，我们就返回结果，如果小于0(**\-1**), 就返回 **6** ，在方法的最后需要反向移动取得的差 (天数)。

```
class CCalendar : public CElement
  {
private:
   //--- 计算当前月份的第一天与日历表格第一项之间的差
   int               OffsetFirstDayOfMonth(void);
  };
//+------------------------------------------------------------------+
//| 定义日历表格第一项与                                                |
//| 当前月份第一天的差                                                  |
//+------------------------------------------------------------------+
int CCalendar::OffsetFirstDayOfMonth(void)
  {
//--- 以字符串形式取得所选年月第一天的日期
   string date=string(m_date.year)+"."+string(m_date.mon)+"."+string(1);
//--- 把日期转换为结构以便计算
   m_temp_date.DateTime(::StringToTime(date));
//--- 如果从当前星期数减1大于等于0,
//    返回结果，否则 — 返回 6
   int diff=(m_temp_date.day_of_week-1>=0) ? m_temp_date.day_of_week-1 : 6;
//--- 保存表格中第一项的日期
   m_temp_date.DayDec(diff);
   return(diff);
  }
```

> 2\. **CCalendar::SetCalendar** () 方法，此方法是用于在表格中填入选定年月的日期项目。在开始会调用 **CCalendar::OffsetFirstDayOfMonth** ()方法，然后，在循环中我们迭代表格中所有的项目，在每项中设置与用于计算的结构(**m\_temp\_date.day**)距离的天数，设置的天数为 **CCalendar::OffsetFirstDayOfMonth** ()方法所返回的值，在方法的最后会修改日历的下一个日期。

```
Class CCalendar : public CElement
  {
private:
   //--- 显示日历表格中的最近变化
   void              SetCalendar(void);
  };
//+------------------------------------------------------------------+
//| 设置日历值                                                         |
//+------------------------------------------------------------------+
void CCalendar::SetCalendar(void)
  {
//--- 计算当前月第一天和日历表格第一个项目之间的差距
   int diff=OffsetFirstDayOfMonth();
//--- 在日历表格中循环迭代所有项目
   for(int i=0; i<42; i++)
     {
      //--- 设置表格当前项目的日期
      m_days[i].Description(string(m_temp_date.day));
      //--- 转到下一天
      m_temp_date.DayInc();
     }
  }
```

> 3\. **CCalendar::HighlightDate** () 方法将用于突出显示当前的日期(用户电脑上的系统日期)以及用户在日历表格中选择的日期。先把日历表格的第一项的日期设置到用于计算的结构(**m\_temp\_date**)中，然后，在循环中确定 (1) 区域, (2) 区域边框 和 (3) 显示文字的颜色。

```
Class CCalendar : public CElement
  {
private:
   //--- 突出显示当前日期和用户选择的日期i
   void              HighlightDate(void);
  };
//+------------------------------------------------------------------+
//| 突出显示当前的日期和用户选择的日期                                    |
//+------------------------------------------------------------------+
void CCalendar::HighlightDate(void)
  {
//--- 计算当前月第一天和日历表格第一个项目之间的差距
   OffsetFirstDayOfMonth();
//--- 在循环中迭代所有表格项
   for(int i=0; i<42; i++)
     {
      //--- 如果表格项的月份与当前月匹配，并且
      //    项目的日期与选择的日期匹配
      if(m_temp_date.mon==m_date.mon &&
         m_temp_date.day==m_date.day)
        {
         m_days[i].Color(m_item_text_color);
         m_days[i].BackColor(m_item_back_color_selected);
         m_days[i].BorderColor(m_item_border_color_selected);
         //--- 继续表格中的下一个项目
         m_temp_date.DayInc();
         continue;
        }
      //--- 如果是当前的日期 (今天)
      if(m_temp_date.year==m_today.year && 
         m_temp_date.mon==m_today.mon &&
         m_temp_date.day==m_today.day)
        {
         m_days[i].BackColor(m_item_back_color);
         m_days[i].BorderColor(m_item_text_color_hover);
         m_days[i].Color(m_item_text_color_hover);
         //--- 继续表格中的下一个项目
         m_temp_date.DayInc();
         continue;
        }
      //---
      m_days[i].BackColor(m_item_back_color);
      m_days[i].BorderColor(m_item_border_color);
      m_days[i].Color((m_temp_date.mon==m_date.mon)? m_item_text_color : m_item_text_color_off);
      //--- 继续表格中的下一个项目
      m_temp_date.DayInc();
     }
  }
```

> 4\. **CCalendar::UpdateCalendar** () 方法将在所有用户和日历界面交互的方法中应用，我们之前谈到的 **CCalendar::SetCalendar** () 和 **CCalendar::HighlightDate** () 方法会接下来被调用，然后，会在日历的输入栏位和组合框中设置年份和月份。请注意，在组合框列表中选择所需项目时，需要把月份减1，因为在日期和时间的结构中，月份的枚举是从1开始的，而开发库中列表(**CListView**)的项目枚举则是从0开始的。

```
Class CCalendar : public CElement
  {
public:
   //--- 显示日历的最近变化
   void              UpdateCalendar(void);
  };
//+------------------------------------------------------------------+
//| 显示日历的最近变化                                                  |
//+------------------------------------------------------------------+
void CCalendar::UpdateCalendar(void)
  {
//--- 在日历表格中显示变化
   SetCalendar();
//--- 突出显示当前日期和用户选择的日期
   HighlightDate();
//--- 在输入栏位中设置年份
   m_years.ChangeValue(m_date.year);
//--- 在组合框列表中设置月份
   m_months.SelectedItemByIndex(m_date.mon-1);
  }
```

当鼠标光标掠过时在日历表格中改变日期项目的颜色的行为将在 **CCalendar::ChangeObjectsColor** ()方法中进行，必须在那里指定 **x**, **y** 的坐标。在开始在全部项目上迭代之前，我们要确定表格中月份的第一天和表格的第一项之间的差距，以此来设置初始计数器的值(在 **m\_temp\_date** 结构中)，然后，所选的日期和当前(用户电脑的系统日期)日期会跳过，其余的用于检查鼠标光标的焦点。当改变颜色时，会考虑到日期所属于的月份。

```
Class CCalendar : public CElement
  {
public:
   //--- 在日历表格中改变对象的颜色 
   void              ChangeObjectsColor(const int x,const int y);
  };
//+------------------------------------------------------------------+
//| 修改日历表格中对象的颜色                                            |
//| 在鼠标光标掠过时                                                   |
//+------------------------------------------------------------------+
void CCalendar::ChangeObjectsColor(const int x,const int y)
  {
//--- 计算当前月第一天和日历表格第一个项目之间的差距
   OffsetFirstDayOfMonth();
//--- 在循环中迭代所有表格项
   int items_total=::ArraySize(m_days);
   for(int i=0; i<items_total; i++)
     {
      //--- 如果表格项的月份与当前月匹配，并且
      //    项目的日期与选择的日期匹配
      if(m_temp_date.mon==m_date.mon &&
         m_temp_date.day==m_date.day)
        {
         //--- 继续表格中的下一个项目
         m_temp_date.DayInc();
         continue;
        }
      //--- 如果项目的 年/月/日 与当前日期(今天)的年/月/日 相匹配
      if(m_temp_date.year==m_today.year && 
         m_temp_date.mon==m_today.mon &&
         m_temp_date.day==m_today.day)
        {
         //--- 继续表格中的下一个项目
         m_temp_date.DayInc();
         continue;
        }
      //--- 如果鼠标光标在此项目之上
      if(x>m_days[i].X() && x<m_days[i].X2() &&
         y>m_days[i].Y() && y<m_days[i].Y2())
        {
         m_days[i].BackColor(m_item_back_color_hover);
         m_days[i].BorderColor(m_item_border_color_hover);
         m_days[i].Color((m_temp_date.mon==m_date.mon)? m_item_text_color_hover : m_item_text_color_off);
        }
      else
        {
         m_days[i].BackColor(m_item_back_color);
         m_days[i].BorderColor(m_item_border_color);
         m_days[i].Color((m_temp_date.mon==m_date.mon)? m_item_text_color : m_item_text_color_off);
        }
      //--- 继续表格中的下一个项目
      m_temp_date.DayInc();
     }
  }
```

还需要一个选项来从程序中在日历上选择日期，以及取得由用户选择的日期和当前日期(今天)。所以，我们将需要增加 **公有(public)** 方法 **CCalendar::SelectedDate** () 和 **CCalendar::Today** ()。

```
Class CCalendar : public CElement
  {
public:
   //--- (1) 设置 (选择) 以及 (2) 取得所选择的日期, (3) 取得日历上的当前日期
   void              SelectedDate(const datetime date);
   datetime          SelectedDate(void)                         { return(m_date.DateTime());             }
   datetime          Today(void)                                { return(m_today.DateTime());            }
  };
//+------------------------------------------------------------------+
//| 选择一个新的日期                                                   |
//+------------------------------------------------------------------+
void CCalendar::SelectedDate(const datetime date)
  {
//--- 在结构中以及类的栏位中保存日期
   m_date.DateTime(date);
//--- 显示日历中的最新变化
   UpdateCalendar();
  }
```

例如, 在日历上选择了 **2016** 年二月 **29** 日 **2016** (**2016.02.29**)，并且用户在输入栏位中输入(或者使用增加按钮设置)了 **2017** ，而 **2017** 年二月只有 **28** 天，那么在这种情况下，应该在日历表格中选择哪个日期呢?通常，在这种情况下，不同界面的日历会选择最近的日期，也就是一个月的最后一天，在我们的例子中就是 **2017** 年二月 **28** 日。所以，我们也使用同样的方法。最后，将在类中加入 **CCalendar::CorrectingSelectedDay** () 方法来进行类似的修正。这个方法的代码包含了许多字符串操作。 [CDateTime](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe) 结构已经有了方法来取得一个月的天数，并且考虑到了闰年 — [CDateTime::DaysInMonth()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faoltpons-cfavevioe-cfavevioefa%7Bsknooltj) ，所以只需要比较当前的日期与当前月份的天数，如果日期超过了日历中的天数，就要被替换。

```
Class CCalendar : public CElement
  {
private:
   //--- 根据一个月的天数修改选择的日期
   void              CorrectingSelectedDay(void);
  };
//+------------------------------------------------------------------+
//| 确定一个月的第一天                                                  |
//+------------------------------------------------------------------+
void CCalendar::CorrectingSelectedDay(void)
  {
//--- 如果所选择的日期大于一个月的天数
   if(m_date.day>m_date.DaysInMonth())
      m_date.day=m_date.DaysInMonth();
  }
```

### 日历事件的处理函数

现在让我们查看日历的事件处理函数。一共有8个 **私有(private)** 方法用于处理以下列表中的事件。

- 点击按钮转到前一个月
- 点击按钮转到后一个月
- 从组合框的下拉列表中选择一个月
- 在年份输入栏位中输入数值
- 点击按钮转到下一年
- 点击按钮转到前一年
- 点击一个月中的某一天
- 点击按钮转到当前日期
- 以上列表中的每个动作都会使日历中有所变化，让我们整理这些方法的代码。

为了操作日历，我们需要一个新的用户事件ID， **ON\_CHANGE\_DATE** ，它用于发送消息以通知用户改变了日历中的日期。另外，我们还要再增加一个新的ID用于操作组合框 — **ON\_CLICK\_COMBOBOX\_BUTTON** ，用于确定按下了这个控件的按钮。

```
#define ON_CLICK_COMBOBOX_BUTTON  (21) // 点击了组合框的按钮
#define ON_CHANGE_DATE            (22) // 修改了日历上的日期
```

在 **CComboBox** 的 **OnClickButton** ()方法中必须发送含有 **ON\_CLICK\_COMBOBOX\_BUTTON** 为ID的消息。让我们为在方法中发送消息增加一个选项 (参见以下代码):

```
//+------------------------------------------------------------------+
//| 点击组合框按钮                                                     |
//+------------------------------------------------------------------+
bool CComboBox::OnClickButton(const string clicked_object)
  {
//--- 如果表单被屏蔽并且ID不匹配，退出
   if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
      return(false);
//--- 如果对象名称不对，退出  
   if(clicked_object!=m_button.Name())
      return(false);
//--- 改变列表的状态
   ChangeComboBoxListState();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_COMBOBOX_BUTTON,CElement::Id(),0,"");
   return(true);
  }
```

在 **CCalendar** 类中，还要管理日历部分的其他控件的状态(b3>CSpinEdit和 **CIconButton**)，在其中处理自定义事件 **ON\_CLICK\_COMBOBOX\_BUTTON** (参见以下代码):

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CCalendar::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理点击组合框按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_COMBOBOX_BUTTON)
     {
      //--- 如果控件的ID不匹配，退出
      if(lparam!=CElement::Id())
         return;
      //--- 根据当前列表是否可见的状态激活或者禁用控件
      m_years.SpinEditState(!m_months.GetListViewPointer().IsVisible());
      m_button_today.ButtonState(!m_months.GetListViewPointer().IsVisible());
     }
  }
```

在各种系统的图形界面中，例如，在 **Windows 7** 操作系统中，通过点击左边/右边的箭头按钮而转到之前/之后月份时，会选择那个月的第一天，而不论之前用户在日历上选择的是哪一天。我们在开发库中实现的日历行为是相同的。为了转到之前/之后的月份, 将会使用 **CCalendar::OnClickMonthDec** () 和 **CCalendar::OnClickMonthInc** () 方法。这些方法的代码非常类似，例如，我们将提供其中一个方法的描述，也就是点击按钮转到前一个月的事件处理。

在方法的开始会检查用户点击的图形对象的名称，然后，如果日历上的当前年份等于指定的最小值，并且当前月份为 "一月(January)" (也就是说，我们达到了最小限制), 我们就将突出显示输入栏位中的文字并退出此方法。

如果我们没有达到最小限制，就执行以下操作。

- 把按钮的状态设为 **可用(On)** ；
- 转到前一个月；
- 设置这个月的第一天；
- 重置时间(**00:00:00**)，为此还要增加 **CCalendar::ResetTime** ()方法；
- 更新日历以显示最新的变化；
- 我们再发送一条消息，其中含有 (1) 图表ID, (2) **ON\_CHANGE\_DATE** 事件ID, (3) 控件ID 以及 (4)指定的日期。在其他处理日历事件的方法中也会发送同样参数的消息。

```
Class CCalendar : public CElement
  {
private:
   //--- 处理点击转到前一个月按钮
   bool              OnClickMonthDec(const string clicked_object);
   //--- 处理点击转到后一个月的按钮
   bool              OnClickMonthInc(const string clicked_object);
   //--- 重置时间
   void              ResetTime(void);
  };
//+------------------------------------------------------------------+
//| 点击左边的按钮，转到前一个月。                                       |
//+------------------------------------------------------------------+
bool CCalendar::OnClickMonthDec(const string clicked_object)
  {
//--- 如果对象名称不对，退出
   if(::StringFind(clicked_object,m_month_dec.Name(),0)<0)
      return(false);
//--- 如果日历中的当前年份等于最小限制并且
//    当前月份是"一月"
   if(m_date.year==m_years.MinValue() && m_date.mon==1)
     {
      //--- 突出显示数值并退出
      m_years.HighlightLimit();
      return(true);
     }
//--- 把按钮状态设为打开(On)
   m_month_dec.State(true);
//--- 转到前一个月
   m_date.MonDec();
//--- 设置一个月的第一天
   m_date.day=1;
//--- 重置时间
   ResetTime();
//--- 显示日历中的最新变化
   UpdateCalendar();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
//+------------------------------------------------------------------+
//| 重置时间                                                          |
//+------------------------------------------------------------------+
void CCalendar::ResetTime(void)
  {
   m_date.hour =0;
   m_date.min  =0;
   m_date.sec  =0;
  }
```

**CCalendar::OnClickMonthInc** () 方法中的代码几乎是一样的，唯一的区别是当检查限制的时候，是要检查最大年份以及一年中的最后一个月(十二月)。

在列表中选择月份是在有ID为 **ON\_CLICK\_COMBOBOX\_ITEM** 的消息到来时，在 **CCalendar::OnClickMonthList** ()方法中处理的 (参见以下代码)。在主处理函数中， **长整形(long)** 参数包含了发给此方法的控件ID，如果ID不匹配，程序就会从这个方法中退出。因为在列表中选择项目后，列表会关闭，我们就要解除之前日历上控件的屏蔽(输入栏位和按钮)。然后在日期和时间结构中设置所选的月份，并且如有必要，我们要根据一个月中的天数修改所选的日期，剩下的就是设置时间，显示日历中的最近变化以及发送日历上日期已经改变的消息。

```
Class CCalendar : public CElement
  {
private:
   //--- 处理月份列表中的选择
   bool              OnClickMonthList(const long id);
  };
//+------------------------------------------------------------------+
//| 处理日历列表中的选择                                                |
//+------------------------------------------------------------------+
bool CCalendar::OnClickMonthList(const long id)
  {
//--- 如果控件ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 解除控件的屏蔽
   m_years.SpinEditState(true);
   m_button_today.ButtonState(true);
//--- 从列表中获得所选的月份
   int month=m_months.GetListViewPointer().SelectedItemIndex()+1;
   m_date.Mon(month);
//--- 根据一个月中的天数修改所选的日期
   CorrectingSelectedDay();
//--- 重置时间
   ResetTime();
//--- 在日历表格中显示变化
   UpdateCalendar();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
```

**CCalendar::OnEndEnterYear** () 方法是用于处理在年份输入栏位输入数值的，在方法的开始，会检查输入新的数值的 [OBJ\_EDIT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_gdkt) 类型对象的名称，然后，会检查数值是否确实有变化。如果输入栏位的名称不属于这个日历或者数值没有变化，程序就从这个方法中退出。如果前两项检查通过了，输入的数值如果超出了限制，还会被修正。如果用户选择的日期超出了这个月的天数，就会被修改。此后，您可以在日期和时间的结构中设置这个日期，在日历中显示变化并发送有关日历所选日期有变的消息。 **CCalendar::OnEndEnterYear** () 方法的代码可以在下面全面研究:

```
Class CCalendar : public CElement
  {
private:
   //--- 处理在年份栏位输入数值
   bool              OnEndEnterYear(const string edited_object);
  };
//+------------------------------------------------------------------+
//| 处理在年份输入栏位输入数值                                           |
//+------------------------------------------------------------------+
bool CCalendar::OnEndEnterYear(const string edited_object)
  {
//--- 如果对象名称不对，退出
   if(::StringFind(edited_object,m_years.Object(2).Name(),0)<0)
      return(false);
//--- 如果数值没有变化，退出
   string value=m_years.Object(2).Description();
   if(m_date.year==(int)value)
      return(false);
//--- 如果超出限制，修改数值
   if((int)value<m_years.MinValue())
     {
      value=(string)int(m_years.MinValue());
      //--- 突出显示数值
      m_years.HighlightLimit();
     }
   if((int)value>m_years.MaxValue())
     {
      value=(string)int(m_years.MaxValue());
      //--- 突出显示数值
      m_years.HighlightLimit();
     }
//--- 定义当前月份的天数
   string year  =value;
   string month =string(m_date.mon);
   string day   =string(1);
   m_temp_date.DateTime(::StringToTime(year+"."+month+"."+day));
//--- 如果所选的日期超出了这个月的天数,
//    就把所选日期设为这个月的最后一天
   if(m_date.day>m_temp_date.DaysInMonth())
      m_date.day=m_temp_date.DaysInMonth();
//--- 在结构中设置日期
   m_date.DateTime(::StringToTime(year+"."+month+"."+string(m_date.day)));
//--- 显示日历表格的变化
   UpdateCalendar();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
```

用于处理通过点击按钮转到之前/之后年份的方法是 **CCalendar::OnClickYearInc** () 和 **CCalendar::OnClickYearDec** ()，这里只提供它们之中一个方法的代码，因为它们几乎是一样的，除了检查是否超出限制的部分。在开始，会检查月份选择列表的状态，如果它是打开的，我们将会把它关闭。然后，如果控件ID不匹配，程序就从这里退出。随后就是方法的主要处理部分，如果是 **CCalendar::OnClickYearInc** ()方法就会前进一步, 而 **CCalendar::OnClickYearDec** ()方法会退后一步。然后，如有必要，(1) 根据一个月的天数来修改所选择的日期, (2) 在日历上显示最近的变化 以及 (3)发送消息通知日历的日期已经改变。

```
Class CCalendar : public CElement
  {
private:
   //--- 处理点击按钮转到下一年的事件
   bool              OnClickYearInc(const long id);
   //--- 处理点击按钮转到前一年的事件
   bool              OnClickYearDec(const long id);
  };
//+------------------------------------------------------------------+
//| 处理点击按钮转到后一年的事件                                         |
//+------------------------------------------------------------------+
bool CCalendar::OnClickYearInc(const long id)
  {
//--- 如果月份列表打开，我们将会把它关闭
   if(m_months.GetListViewPointer().IsVisible())
      m_months.ChangeComboBoxListState();
//--- 如果控件ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 如果年份小于设置的最大值，我们需要把数值加1
   if(m_date.year<m_years.MaxValue())
      m_date.YearInc();
//--- 根据一个月中的天数修改所选的日期
   CorrectingSelectedDay();
//--- 在日历表格中显示变化
   UpdateCalendar();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
```

现在，我们来探讨 **CCalendar::OnClickDayOfMonth** ()方法，它处理在日历表格中点击一个月的某一天的事件。

之前已经说过，日历表格包含了 **42** 个项目，所以，根据当前月份第一天的位置，表格中有时会出现前一个月和后一个月的日期，如果用户点击了不属于当前月份的某一天，就会切换到所选日期的月份。

在方法的开始，我们要进行检查，对象是否属于日历表格中的项目，并且还要比较控件的ID，ID可以通过使用 **CCalendar::IdFromObjectName** ()方法从对象名称中展开获得，这个方法在之前其他库控件讨论时已经学习过了。如果通过了开始的两项检查，就使用 **CCalendar::OffsetFirstDayOfMonth** ()方法来取得当前月份的第一天和表格中第一个项之间的差距。在调用这个方法之后， **m\_temp\_date** 计数器就可以使用了，在随后的循环中，程序会迭代所有项目来找到用户点击的项目。

让我们尝试理解循环背后的逻辑。有可能第一个项目的日期指向的年份小于系统设置的最小值(**1970** 年)，如果出现这种情况，我们会在输入栏位突出显示数值并立即转到后面的项目，因为不允许用户超出指定的限制。如果项目位于可用区域并且被点击到，那么 (1)日期被保存到操作结构中(**m\_date**), (2) 日历显示最新的变化, (3) 循环被打断 并且(4)在方法的末尾发送一条日历日期已经改变的消息。

如果前两个循环条件没有满足，则计算计数器结构(**m\_temp\_date**)会加一天，再检查是否超出了日历系统的最大设置，如果没有达到最大值，程序就转到下一个项目，在达到最大值之后，突出显示年份输入栏位的数值，随后程序会从此方法中退出。

```
Class CCalendar : public CElement
  {
private:
   //--- 处理点击一个月中某一天的事件
   bool              OnClickDayOfMonth(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 处理点击一个月中某一天的事件                                         |
//+------------------------------------------------------------------+
bool CCalendar::OnClickDayOfMonth(const string clicked_object)
  {
//--- 如果没有点击在日历中的某一天上
   if(::StringFind(clicked_object,CElement::ProgramName()+"_calendar_day_",0)<0)
      return(false);
//--- 根据对象名称取得ID和索引
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配，退出
   if(id!=CElement::Id())
      return(false);
//--- 计算当前月第一天和日历表格第一个项目之间的差距
   OffsetFirstDayOfMonth();
//--- 在循环中迭代所有表格项
   for(int i=0; i<42; i++)
     {
      //--- 如果当前项小于系统中的最小值设定
      if(m_temp_date.DateTime()<datetime(D'01.01.1970'))
        {
         //--- 如果这是我们点击的对象
         if(m_days[i].Name()==clicked_object)
           {
            //--- 突出显示数值并退出
            m_years.HighlightLimit();
            return(false);
           }
         //--- 转到下一天
         m_temp_date.DayInc();
         continue;
        }
      //--- 如果这是我们点击的对象
      if(m_days[i].Name()==clicked_object)
        {
         //--- 保存日期
         m_date.DateTime(m_temp_date.DateTime());
         //--- 显示日历的最近变化
         UpdateCalendar();
         break;
        }
      //--- 转到下一天
      m_temp_date.DayInc();
      //--- 检查是否超出了系统的最大值设定
      if(m_temp_date.year>m_years.MaxValue())
        {
         //--- 突出显示数值并退出
         m_years.HighlightLimit();
         return(false);
        }
     }
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
```

还剩下要最后讨论的日历事件处理函数 — **CCalendar::OnClickTodayButton** ()，它是用于处理点击了转到当前日期按钮的。主事件处理函数会发送 **长整形(long)** 参数(控件ID)的事件。在方法的开始，如果月份选择列表是打开的，要先把它关闭，随后，再比较ID，如果ID匹配，我们就在操作结构中设置本地日期和时间(用户电脑上的)，随后日历会更新以显示变化，在方法的最后发送消息通知日历中的日期已经有所变化。

```
Class CCalendar : public CElement
  {
private:
   //--- 处理点击转到当前日期按钮的事件
   bool              OnClickTodayButton(const long id);
  };
//+------------------------------------------------------------------+
//| 处理点击转到当前日期按钮的事件                                       |
//+------------------------------------------------------------------+
bool CCalendar::OnClickTodayButton(const long id)
  {
//--- 如果月份列表打开，我们将会把它关闭
   if(m_months.GetListViewPointer().IsVisible())
      m_months.ChangeComboBoxListState();
//--- 如果控件ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 设置当前日期
   m_date.DateTime(::TimeLocal());
//--- 显示日历中的最新变化
   UpdateCalendar();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
   return(true);
  }
```

在日历事件处理的主函数 **CCalendar::OnEvent** () 中，有8块代码 (在这个部分的开始有一块已经提供)，我们将把它们列举出来。

- 处理鼠标光标移动的事件([CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq))，当控件不是隐藏状态，以及有下拉控件而表单没有被屏蔽时都需要追踪鼠标的光标，当月份列表是活动状态(打开的)时，程序会从这个部分退出，当列表是隐藏的而点击了鼠标左键时，之前被屏蔽的(在打开列表时)的日历控件如果有被屏蔽的，就会被激活。在最后，用于改变表格项颜色的鼠标光标的坐标会被发送到 **CCalendar::ChangeObjectsColor** ()方法中。

```
//--- 处理移动鼠标的事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果控件隐藏，就退出
      if(!CElement::IsVisible())
         return;
      //--- 如果不是下拉控件并且表单被屏蔽，退出
      if(!CElement::IsDropdown() && m_wnd.IsLocked())
         return;
      //--- 坐标以及鼠标左键的状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      m_month_dec.MouseFocus(x>m_month_dec.X() && x<m_month_dec.X2() && 
                             y>m_month_dec.Y() && y<m_month_dec.Y2());
      m_month_inc.MouseFocus(x>m_month_inc.X() && x<m_month_inc.X2() && 
                             y>m_month_inc.Y() && y<m_month_inc.Y2());
      //--- 如果月份列表是活动的，退出
      if(m_months.GetListViewPointer().IsVisible())
         return;
      //--- 如果列表不是活动的，而且点击了鼠标左键...
      else if(m_mouse_state)
        {
         //--- ...激活之前被屏蔽的控件 (在打开列表时),
         //       如果其中至少有一个没有被屏蔽
         if(!m_button_today.ButtonState())
           {
            m_years.SpinEditState(true);
            m_button_today.ButtonState(true);
           }
        }
      //--- 修改对象颜色
      ChangeObjectsColor(x,y);
      return;
     }
```

- 处理鼠标左键点击对象的事件([CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq))，这在点击日历上的任何对象时都会发生，如果标志表明按下了鼠标左键，日历控件就会被激活(输入栏位和按钮)，然后会进一步检查，哪个控件被点击，而我们可能会使用之前谈到的方法 **CCalendar::OnClickMonthDec** (), **CCalendar::OnClickMonthInc** () 和 **CCalendar::OnClickDayOfMonth** ()。

```
//--- 处理鼠标左键点击对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果表单被屏蔽而ID不匹配
      if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
         return;
      //--- 如果月份列表被激活，退出
      if(m_months.GetListViewPointer().IsVisible())
         return;
      //--- 如果使用鼠标左键点击，激活控件(列表和输入栏位) 
      if(m_mouse_state)
        {
         m_years.SpinEditState(true);
         m_button_today.ButtonState(true);
        }
      //--- 处理点击切换月份按钮
      if(OnClickMonthDec(sparam))
         return;
      if(OnClickMonthInc(sparam))
         return;
      //--- 如理点击日历上的日期
      if(OnClickDayOfMonth(sparam))
         return;
     }
```

- 处理点击组合框列表上项目的事件 (**ON\_CLICK\_COMBOBOX\_ITEM**)，为了处理这个事件，需要使用 **CCalendar::OnClickMonthList** ()方法。

```
//--- 处理点击组合框列表项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_COMBOBOX_ITEM)
     {
      //--- 处理月份列表中的选择
      if(!OnClickMonthList(lparam))
         return;
      //---
      return;
     }
```

- 处理点击增加/减小按钮的事件(**ON\_CLICK\_INC** / **ON\_CLICK\_DEC**)，为了处理这些事件，有两个独立的代码块分别会调用 **CCalendar::OnClickYearInc** () 和 **CCalendar::OnClickYearDec** () 方法。

```
//--- 处理点击增加按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_INC)
     {
      //--- 处理点击按钮转到下一年的事件
      if(!OnClickYearInc(lparam))
         return;
      //---
      return;
     }
//--- 处理点击减小按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_DEC)
     {
      //--- 处理点击按钮转到前一年的事件
      if(!OnClickYearDec(lparam))
         return;
      //---
      return;
     }
```

- 处理在输入栏位中输入数值的事件 ([CHARTEVENT\_OBJECT\_ENDEDIT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq))，在年份输入栏位中输入数值将使程序运行到调用 **CCalendar::OnEndEnterYear** ()方法的部分。

```
//--- 处理在输入栏位中输入数值的事件
   if(id==CHARTEVENT_OBJECT_ENDEDIT)
     {
      //--- 处理在年份栏位输入数值
      if(OnEndEnterYear(sparam))
         return;
      //---
      return;
     }
```

- 处理点击按钮的事件 (**ON\_CLICK\_BUTTON**)，在这个代码块，点击按钮使日期转到当前日期(用户电脑上的本地日期)是使用 **CCalendar::OnClickTodayButton** () 方法处理的:

```
//--- 处理点击按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 处理点击转到当前日期按钮的事件
      if(!OnClickTodayButton(lparam))
         return;
      //---
      return;
     }
```

为了使复杂控件，例如日历的使用更加方便，我们将增加能使数值切换更加快速的功能。在列表类(**CListView**)和输入栏位类(**CSpinEdit**)中已经实现了类似的功能。在使用输入栏位的快速数值切换时，它必须与日历表格相连，以取得表格中的更新数值。我们还将增加选项实现在日历中使用按钮快速切换月份。

我们在此将只提供该方法的主要(操作)部分的描述，因为在其它的文章中已经讨论过进入操作模块的条件了，在条件达成之后，我们必须检查是日历上的哪个控件按钮被点击到了(参见黄色突出显示的文字)，如果列出的按钮都没有被按下，程序就从方法中退出。在侦测到按钮被点击之后，还需要做几项检查来看数值是否超出了日历中设置的限制，如果我们打到了限制，则输入栏位的文字会突出显示并且程序会退出此方法，如果没有达到限制，日历会更新以显示最新的变化，并且发送消息来通知日期已经改变。

```
Class CCalendar : public CElement
  {
private:
   //--- 日历数值的快速变换
   void              FastSwitching(void);
  };
//+------------------------------------------------------------------+
//| 日历的快速变换                                                     |
//+------------------------------------------------------------------+
void CCalendar::FastSwitching(void)
  {
//--- 如果控件上没有焦点，退出
   if(!CElement::MouseFocus())
      return;
//--- 如果表单被屏蔽并且ID不匹配，退出
   if(m_wnd.IsLocked() && m_wnd.IdActivatedElement()!=CElement::Id())
      return;
//--- 如果鼠标按钮松开，把计数器返回到初始值
   if(!m_mouse_state)
      m_timer_counter=SPIN_DELAY_MSC;
//--- 如果鼠标键有点击
   else
     {
      //--- 把计数器增加指定的间隔
      m_timer_counter+=TIMER_STEP_MSC;
      //--- Exit if below zero
      if(m_timer_counter<0)
         return;
      //--- 如果点击了左边的箭头
      if(m_month_dec.State())
        {
         //--- 如果日历中的当前年份超过/达到了最小设置
         if(m_date.year>=m_years.MinValue())
           {
            //--- 如果当前年份已经等于设置的最小值并且
            //    当前月份为"一月"
            if(m_date.year==m_years.MinValue() && m_date.mon==1)
              {
               //--- 突出显示数值并退出
               m_years.HighlightLimit();
               return;
              }
            //--- 继续下一个月 (向前)
            m_date.MonDec();
            //--- 设置为该月的第一天
            m_date.day=1;
           }
        }
      //--- 如果点击了右边的箭头
      else if(m_month_inc.State())
        {
         //--- 如果当前日历中的年份小于/等于指定的最大值
         if(m_date.year<=m_years.MaxValue())
           {
            //--- 如果当前日历中的年份已经等于指定的最大值并且
            //    当前月份是"十二月"
            if(m_date.year==m_years.MaxValue() && m_date.mon==12)
              {
               //--- 突出显示数值并退出
               m_years.HighlightLimit();
               return;
              }
            //--- 转到下一个月 (向后)
            m_date.MonInc();
            //--- 设置为该月的第一天
            m_date.day=1;
           }
        }
      //--- 如果点击了年份输入栏位的增加按钮
      else if(m_years.StateInc())
        {
         //--- 如果小于指定的最大年份,
         //    转向下一年 (向后)
         if(m_date.year<m_years.MaxValue())
            m_date.YearInc();
         else
           {
            //--- 突出显示数值并退出
            m_years.HighlightLimit();
            return;
           }
        }
      //--- 如果点击了输入栏位的减小按钮
      else if(m_years.StateDec())
        {
         //--- 如果超过了指定的最小年份,
         //    转到前一年 (向前)
         if(m_date.year>m_years.MinValue())
            m_date.YearDec();
         else
           {
            //--- 突出显示数值并退出
            m_years.HighlightLimit();
            return;
           }
        }
      else
        return;
      //--- 显示日历的最近变化
      UpdateCalendar();
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_CHANGE_DATE,CElement::Id(),m_date.DateTime(),"");
     }
  }
```

在有日期改变的时候，日历中的当前日期应该要更新(用户电脑上的本地时间),另外，在按钮上显示的当前日期也应该更新。我们将使用一个特定的方法，称为 **CCalendar::UpdateCurrentDate** ()，来完成这项工作，它将每秒都会检查是否到了新的一天 (参见以下代码)。

```
Class CCalendar : public CElement
  {
public:
   //--- 更新当前日期
   void              UpdateCurrentDate(void);
  };
//+------------------------------------------------------------------+
//| 更新当前日期                                                       |
//+------------------------------------------------------------------+
void CCalendar::UpdateCurrentDate(void)
  {
//--- 计数器
   static int count=0;
//--- 如果小于一秒，退出
   if(count<1000)
     {
      count+=TIMER_STEP_MSC;
      return;
     }
//--- 计数器清零
   count=0;
//--- 取得当前 (本地) 时间
   MqlDateTime local_time;
   ::TimeToStruct(::TimeLocal(),local_time);
//--- 如果已经开始新的一天
   if(local_time.day!=m_today.day)
     {
      //--- 在日历上更新日期
      m_today.DateTime(::TimeLocal());
      m_button_today.Object(2).Description(::TimeToString(m_today.DateTime()));
      //--- 显示日历的最近变化
      UpdateCalendar();
      return;
     }
//--- 在日历上更新日期
   m_today.DateTime(::TimeLocal());
  }
```

根据这种情况，日历控件计时器的代码如下:

```
//+------------------------------------------------------------------+
//| 计时器函数                                                        |
//+------------------------------------------------------------------+
void CCalendar::OnEventTimer(void)
  {
//--- 如果是下拉控件并且列表是隐藏的
   if(CElement::IsDropdown() && !m_months.GetListViewPointer().IsVisible())
     {
      ChangeObjectsColor();
      FastSwitching();
     }
   else
     {
      //--- 跟踪颜色的变化以及快速变换数值, 
      //    只有在表单未被屏蔽时进行
      if(!m_wnd.IsLocked())
        {
         ChangeObjectsColor();
         FastSwitching();
        }
     }
//--- 更新日历上的当前日期
   UpdateCurrentDate();
  }
```

我们已经讨论了 **CCalendar** 类的所有方法，让我们现在测试看能否工作。但是，在那之前我们需要把控件与开发库引擎相连，以保证正确运行。在前面的文章， [图形界面 V: 组合框控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1) 中已经详细介绍了实现的步骤，所以，我们这里只是提供私有控件数组结构的声明(在 **CWndContainer** 类中)，以及相关方法，其中有 (1)在MQL应用程序的图形界面中取得日历的数量 以及(2)在创建图形界面时把控件的指针加到库中。这些方法的详细代码可以在文章的附件文件中参考。

```
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                                             |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 控件数组的结构
   struct WindowElements
     {
      //--- 控件数组:
      //--- 日历数组
      CCalendar        *m_calendars[];
   //---
public:
   //--- 日历的数量
   int               CalendarsTotal(const int window_index);
   //---
private:
   //--- 在库中保存日历控件的指针
   bool              AddCalendarElements(const int window_index,CElement &object);
     };
```

### 测试日历控件

为了进行测试，您可以使用任意之前文章中的EA交易，在表单的图形界面的控件中，我们将只保留主菜单和一个指示状态的字符串。我们将创建两个日历，来分析在它们的运行过程中是否会有冲突。

在应用程序的自定义类(**CProgram**)中，我们将声明两个 **CCalendar** 类的实例以及一个方法用于距离表单边缘一定的位置上创建日历控件:

```
class CProgram : public CWndEvents
  {
private:
   //--- 日历
   CCalendar         m_calendar1;
   CCalendar         m_calendar2;
   //---
private:
   //--- 日历
#define CALENDAR1_GAP_X       (2)
#define CALENDAR1_GAP_Y       (43)
   bool              CreateCalendar1(void);
#define CALENDAR2_GAP_X       (164)
#define CALENDAR2_GAP_Y       (43)
   bool              CreateCalendar2(void);
  };
```

作为示例，我们将在这里提供其中一个方法的代码,我们将使用日历的默认属性 (参见以下代码)。

```
//+------------------------------------------------------------------+
//| 创建日历1                                                         |
//+------------------------------------------------------------------+
bool CProgram::CreateCalendar1(void)
  {
//--- 把对象传给面板
   m_calendar1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+CALENDAR1_GAP_X;
   int y=m_window1.Y()+CALENDAR1_GAP_Y;
//--- 创建控件
   if(!m_calendar1.CreateCalendar(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把对象加到通用对象组的数组中
   CWndContainer::AddToElementsArray(0,m_calendar1);
   return(true);
  }
```

我们把对这些方法的调用放到MQL应用程序创建图形界面的主方法中，然后编译并在图表上运行，最终我们将得到以下结果:

![图 2. 测试日历控件。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-00_%5D2%2Cjrg "图 2. 测试日历控件。")
![[Pasted image 20260628222618.png]]
图 2. 测试日历控件。

用于创建日历控件的 **CCalendar** 类的开发到这里就结束了，在将来，它的功能将被扩展，并且在本文中我们将探讨这个控件的第二个版本，即下拉日历。

### 下拉日历

下拉日历控件和静态的日历(**CCalendar**)不同, 它可以节省应用程序图形界面的空间，因为它在绝大多数时候是最小化的。用户可以在显示在组合框的文字栏位中选择日期，如果要选择另一个日期，必须点击组合框的按钮，这样的操作就会调用(显示)日历，如果您再次点击按钮，就会打开日历，当鼠标左键点击了控件之外的区域时，或者图表有所变化日历就会最小化。

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F04-el2%5D_1.rne)
![[Pasted image 20260628222629.png]]
图 3. 下拉日历的组件，

这个控件的结构将会进一步进行分析。

### CDropCalendar 类

之前，在文章 [图形界面 V: 组合框控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1) 和 [图形界面 VI: 复选框控件，编辑框控件和它们的组合类型 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446) 中, 组合框控件已经在开发库中有所介绍，例如含有列表的组合框(**CComboBox**) 和含有列表及复选框的组合框(**CCheckComboBox**)，所以，我们这里只是介绍下拉日历控件最关键的方面。

我们创建 **DropCalendar.mqh** 文件并在库(**WndContainer.mqh** 文件)中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "DropCalendar.mqh"
```

在 **DropCalendar.mqh** 文件中，我们创建类的标准方法，和所有的库控件一样，并在其中包含日历类的文件， **Calendar.mqh**:

```
//+------------------------------------------------------------------+
//|                                                 DropCalendar.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "Calendar.mqh"
```

我们将继续声明用于创建控件的一系列所需方法，一共需要6个 **私有(private)** 方法和1个 **公有(public)**:

```
//+------------------------------------------------------------------+
//| 用于创建下拉日历的类                                                |
//+------------------------------------------------------------------+
class CDropCalendar : public CElement
  {
private:
   //--- 用于创建控件的对象和控件
   CRectLabel        m_area;
   CLabel            m_label;
   CEdit             m_field;
   CEdit             m_drop_button;
   CBmpLabel         m_drop_button_icon;
   CCalendar         m_calendar;
   //---
public:
   //--- 用于创建下拉日历的方法
   bool              CreateDropCalendar(const long chart_id,const int subwin,const string text,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabel(void);
   bool              CreateEditBox(void);
   bool              CreateDropButton(void);
   bool              CreateDropButtonIcon(void);
   bool              CreateCalendar(void);
  };
```

请注意，在创建日历的过程中，我们需要为下拉控件设置一个标志,在主(公有)方法 **CDropCalendar::CreateDropCalendar** ()中创建了控件所包含的所有对象之后，还需要以下操作:

- 隐藏日历；
- 在创建日历之后，在组合框的信息栏位部分设置一个选定的日期，并且可以通过使用 **CCalendar::SelectedDate** ()方法获得。

**CDropCalendar::CreateDropCalendar** () 方法的精简版代码在下面提供，完整版可以在本文的附件文件中查看。

```
//+------------------------------------------------------------------+
//| 创建下拉日历                                                       |
//+------------------------------------------------------------------+
bool CDropCalendar::CreateDropCalendar(const long chart_id,const int subwin,const string text,const int x,const int y)
  {
//--- 如果没有表单指针，退出
//--- 初始化变量
//--- 与表单边缘的距离
//--- 创建控件
//--- 隐藏日历
   m_calendar.Hide();
//--- 显示日历中选择的日期
   m_field.Description(::TimeToString((datetime)m_calendar.SelectedDate(),TIME_DATE));
//--- 在对话框或者最小化窗口中隐藏控件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
//+------------------------------------------------------------------+
//| 创建列表                                                          |
//+------------------------------------------------------------------+
bool CDropCalendar::CreateCalendar(void)
  {
//--- 把对象传给面板
   m_calendar.WindowPointer(m_wnd);
//--- 坐标
   int x=m_field.X();
   int y=m_field.Y2();
//--- 设置日历的下拉控件标志
   m_calendar.IsDropdown(true);
//--- 创建控件
   if(!m_calendar.CreateCalendar(m_chart_id,m_subwin,x,y))
      return(false);
//---
   return(true);
  }
```

为使用组合框操作，需要以下的方法。

- 把日历的可见性变成相反状态 — **CDropCalendar::ChangeComboBoxCalendarState** ()；
- 处理点击组合框按钮 — **CDropCalendar::OnClickButton** ()；
- 在组合框按钮上检查是否点击鼠标左键 — **CDropCalendar::CheckPressedOverButton** ()。

所有这些方法和之前在 **CComboBox** 类中谈到的非常类似，所以这里就不提供它们的代码了。

下拉日历的事件处理函数将如下所示，有四个区块来处理以下的事件:

- 移动鼠标光标 — [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq).
- 在日历中选择了新的日期 — **ON\_CHANGE\_DATE**.
- 鼠标左键点击了一个图形对象 — [CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq).
- 图表属性改变 — [CHARTEVENT\_CHART\_CHANGE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq).

当 **ON\_CHANGE\_DATE** 事件由 **CCalendar** 类生成并发送时，我们需要比较控件的ID并在组合框的栏位中设置一个新的日期。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CDropCalendar::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理移动鼠标的事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果控件隐藏，就退出
      if(!CElement::IsVisible())
         return;
      //--- 坐标以及鼠标左键的状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      m_drop_button.MouseFocus(x>m_drop_button.X() && x<m_drop_button.X2() && 
                               y>m_drop_button.Y() && y<m_drop_button.Y2());
      //--- 检查是否在组合框按钮上点击了鼠标左键
      CheckPressedOverButton();
      return;
     }
//--- 处理在日历上选择了新的日期的事件
   if(id==CHARTEVENT_CUSTOM+ON_CHANGE_DATE)
     {
      //--- 如果控件的ID不匹配，退出
      if(lparam!=CElement::Id())
         return;
      //--- 在组合框栏位中设置新的日期
      m_field.Description(::TimeToString((datetime)dparam,TIME_DATE));
      return;
     }
//--- 处理鼠标左键点击对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 点击了组合框按钮
      if(OnClickButton(sparam))
         return;
      //---
      return;
     }
//--- 处理图表属性改变的事件
   if(id==CHARTEVENT_CHART_CHANGE)
     {
      //--- 如果控件被屏蔽，退出
      if(!m_drop_calendar_state)
         return;
      //--- 隐藏日历
      m_calendar.Hide();
      m_drop_button_icon.State(false);
      //--- 重设颜色
      ResetColors();
      return;
     }
  }
```

为了确保控件正常运行，需要在开发库的基类 **CWndContainer** 类中增加内容，就和 **CCalendar** 类一样:

```
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                                             |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 控件数组的结构
   struct WindowElements
     {
      //--- 控件数组:
      //--- 下拉日历的数组
      CDropCalendar    *m_drop_calendars[];
   //---
public:
   //--- 下拉日历总数
   int               DropCalendarsTotal(const int window_index);
   //---
private:
   //--- 在库中保存下拉日历控件的指针
   bool              AddDropCalendarElements(const int window_index,CElement &object);
     };
```

另外，我们必须在开发库主类的事件处理函数中增加检查下拉日历的代码块，加到 **CWndEvents::SetChartState** () 方法中，它会控制图表的状态 (参见以下这个方法的精简版代码):

```
//+------------------------------------------------------------------+
//| 设置图表的状态                                                     |
//+------------------------------------------------------------------+
void CWndEvents::SetChartState(void)
  {
   int awi=m_active_window_index;
//--- 当管理被禁用时用于标识事件
   bool condition=false;
//--- 检查窗口
//--- 检查下拉列表
//--- 检查日历
   if(!condition)
     {
      int drop_calendars_total=CWndContainer::DropCalendarsTotal(awi);
      for(int i=0; i<drop_calendars_total; i++)
        {
         if(m_wnd[awi].m_drop_calendars[i].GetCalendarPointer().MouseFocus())
           {
            condition=true;
            break;
           }
        }
     }
//--- 检查上下文菜单的焦点
//--- 检查滚动条的状态
//--- 在所有表单中设置图表的状态
   for(int i=0; i<windows_total; i++)
      m_windows[i].CustomEventChartState(condition);
  }
```

### 测试下拉日历控件

我们将在本文之前测试过的EA交易图形界面中加入两个下拉日历，在应用程序的自定义类中我们声明两个 **CDropCalendar** 类型下拉日历类的实例，并且设置它们距离表单边缘(左上角)的距离。

```
class CProgram : public CWndEvents
  {
private:
   //--- 下拉日历
   CDropCalendar     m_drop_calendar1;
   CDropCalendar     m_drop_calendar2;
   //---
private:
   //--- 下拉日历
#define DROPCALENDAR1_GAP_X   (7)
#define DROPCALENDAR1_GAP_Y   (207)
   bool              CreateDropCalendar1(const string text);
#define DROPCALENDAR2_GAP_X   (170)
#define DROPCALENDAR2_GAP_Y   (207)
   bool              CreateDropCalendar2(const string text);
  };
```

作为示例，我们提供其中一个方法的代码:

```
//+------------------------------------------------------------------+
//| 创建下拉日历 1                                                     |
//+------------------------------------------------------------------+
bool CProgram::CreateDropCalendar1(const string text)
  {
//--- 把对象传给面板
   m_drop_calendar1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+DROPCALENDAR1_GAP_X;
   int y=m_window1.Y()+DROPCALENDAR1_GAP_Y;
//--- 在创建之前设置属性
   m_drop_calendar1.XSize(145);
   m_drop_calendar1.YSize(20);
   m_drop_calendar1.AreaBackColor(clrWhiteSmoke);
//--- 创建控件
   if(!m_drop_calendar1.CreateDropCalendar(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 把控件指针加到库中
   CWndContainer::AddToElementsArray(0,m_drop_calendar1);
   return(true);
  }
```

必须在创建界面的主方法中调用创建控件的方法，在本例中即是 **CProgram::CreateExpertPanel** ()方法。实例中有在 **CProgram::OnEvent** ()方法中处理日历事件, 增加的代码如下所示，每一次在日历中改变日期时，这个事件所包含的参数数值将在记录中显示。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 在日历中改变日期的事件
   if(id==CHARTEVENT_CUSTOM+ON_CHANGE_DATE)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",datetime(dparam),"; sparam: ",sparam);
     }
  }
```

编译应用程序的代码并在终端的图表上运行，结果如以下屏幕截图所示:

![图 4. 下拉控件的测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-06_%5D2%2Cjrg "图 4. 下拉控件的测试.")
![[Pasted image 20260628222655.png]]
图 4. 下拉控件的测试.

### 结论

在本文中(第八部分的第一章)我们探讨了一个相对复杂的集成控件，日历图形界面控件以及它的扩展版本 — 下拉日历，这样的图表控件对于有时间设置的图表来说非常适合，这还不是最终版本，未来还会有个更新以使日历更加方便使用，还会发布更多的功能。您也可以在留言部分提出自己的建议。

在下一篇文章中，我们将分析一个重要的图形界面控件，树形视图以及等级列表。

您可以下载所有有关第八部分的资料，这样您可以测试看它们运行得如何。如果您对这些文件资料中有任何问题，您可以参考开发库过程中以下列出的对应文章的详细描述，也可以在文章的留言处问问题。

**第八部分的文章(章节)列表:**

- [图形界面 VIII: 日历控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517!pcrc1)
- [图形界面 VIII: 树形视图控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519)
- [图形界面 VIII: 文件浏览器控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2537](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0517)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2735.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2735%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (364.54 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2735%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (364.68 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[Erik Nayman 的绳索指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0007)

本文揭示 Erik L. Nayman 如何基于 "交易员小百科" 来创建 "绳索" 指标。此指标通过计算覆盖指定周期时间的牛熊数值来显示趋势方向。本文还包含指标创建和计算的原理以及例程代码。其它涉及的主题包括建立基于指标的智能交易程序, 和外部参数的优化。

[如何在 MetaTrader 5 里快速开发并调试交易策略](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0641)

自动剥头皮系统理所当然地被认为是算法交易的巅峰, 但同时它们的代码也最难编写。在本文中, 我们将介绍如何使用内置调试工具并基于接收的瞬时报价分析来构建策略, 以及可视测试。开发入场和离场规则, 往往需要经历多年的手工交易。但借助 MetaTrader 5, 您可以在真实历史数据的基础上快速测试任何策略。

[跨平台智能交易程序: 订单](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F05%3B0)

MetaTrader 4 和 MetaTrader 5 在处理交易请求时使用不同的约定。本文讨论使用类对象来表达由服务器处理的交易的可能性, 目的是让跨平台智能交易程序可以无视交易平台版本和使用模式均可工作。

[MQL5 酷宝书 - 移动通道交易信号](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3843)

本文描述的过程, 是开发和实现基于移动通道发送信号的类。每个信号版本均随带交易策略和测试结果。标准库的类用于创建派生类。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F%3A77m%3As%3Axt33pxh%3A9x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dvrs%24a%3Fxvu%60fmzpkwcsnoj%7Bpfrsqkkhtchxwjtx%26q%3D1929a9a4641068aegc0b57%3Ab561d1004cc42%3Aaa1257578ae%3B314aa3d%3B1gfdf4c%24v%3F1%24w%3F820%24h%3F82%26p%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fcrvialgs'2D2735%26joqt%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fdf'2D%26kd%3Fwfawszxsrrvjeibujpjnhsjeh%7Bhgspqsaw%26dz%5Dulis%3D4378234921010762401%26auqtmm%3F"></iframe>