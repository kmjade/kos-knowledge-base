---
title: "图形界面 VI: 复选框控件，编辑框控件以及它们的组合类型 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-06-30T14:37:40+00:00Z
created: 2026-06-28
description: "本文是在MetaTrader终端图形界面开发库系列中第六部分的开端，在第一章中，我们将讨论复选框控件，编辑框控件以及它们的组合类型。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_22)
- [复选框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_23)
- [开发用于创建复选框控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_24)
	- [测试复选框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_25)
- [编辑框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_26)
- [开发用于创建编辑框控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_27)
	- [测试编辑框控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_28)
- [复选框中的其它控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_29)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_30)

### 简介

第一篇文章， [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了这个库的目标。您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

本系列的第六部分将包含两章，在第一章中，我们将创建四个控件:

- 复选框(Checkbox)
- 文本框(Edit)
- 带有复选框的编辑框
- 带有复选框的组合框(Combobox)

我们将只讨论复选框和编辑框，因为带有复选框的编辑框以及带有复选框的组合框没有什么之前没有探讨的新内容。

第二篇文章将致力于以下元件:

- 滑块
- 双重滑块

### 复选框控件

复选框控件是设计用于管理有两种状态的参数的，使用带有两个图标的按钮来识别控件所附加的参数的当前状态，带有选中标记的图标意思是参数是被启用的(开启状态),没有选中标记的图标意思是参数是禁用的(关闭状态)。参数的简要描述在按钮旁边，

此元件将由三个图形对象构成，它们是:

1. 背景
2. 图标 (按钮)
3. 文字标签

![图 1. 复选框控件的组成部分](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-03_gn%5D_3.rne "图 1. 复选框控件的组成部分")
![[Pasted image 20260628215147.png]]
图 1. 复选框控件的组成部分

让我们仔细研究一下此控件的类。

### 开发用于创建复选框控件的类

在本系列的第三部分中，我们谈到了一个类似的控件 - 图标按钮和它的 **CIconButton** 类 (参见文章 [图形界面 III: 简单与多功能按钮 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6) 。复选框控件与具有两种状态模式的图标按钮类似，唯一的区别就是，不同状态(开/关)的按钮具有不同的背景色或者文字颜色(如果设置了的话), 而对于复选框，只有图标和文字颜色的改变(如果设置了的话)。复选框的背景色将与它所附加的窗口的背景色相同。这里的背景是用作一个范围，用于识别鼠标光标与此范围边界的关系以及识别鼠标按键在控件中被按下的情况。复选框控件比图标按钮更加简单，因为用户所能设置的属性更少。

创建 **CheckBox.mqh** 文件，并在库的 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "CheckBox.mqh"
```

在 **CheckBox.mqh** 文件中创建 **CCheckBox** 类以及所有元件类的标准方法：

```
//+------------------------------------------------------------------+
//|                                                     CheckBox.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
//+------------------------------------------------------------------+
//| 用于创建组合框的类　                         |
//+------------------------------------------------------------------+
class CCheckBox : public CElement
  {
private:
   //--- 所附加的表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CCheckBox(void);
                    ~CCheckBox(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)                 { m_wnd=::GetPointer(object);            }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器函数
   virtual void      OnEventTimer(void);
   //--- 移动元件
   virtual void      Moving(const int x,const int y);
   //--- (1) 显示, (2) 隐藏, (3) 重置, (4) 删除
   virtual void      Show(void);
   virtual void      Hide(void);
   virtual void      Reset(void);
   virtual void      Delete(void);
   //--- (1) 设置, (2) 重设鼠标左键点击优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重设颜色
   virtual void      ResetColors(void);
  };
```

在创建控件之前，用户将能使用设置以下列出属性的方法:

- 控件背景
- 复选框在活动与屏蔽状态下的图标
- 文字标签的边缘
- 不同状态下文本标签的颜色

复选框按钮有四个图标 - 两个图标用于活动状态，另外两个用于屏蔽状态。所有状态的图标在文章末尾都有，但是您也可以使用自己的图标。

```
class CCheckBox : public CElement
  {
private:
   //--- 复选框背景色
   color             m_area_color;
   //--- 活动状态和屏蔽状态下复选框的图标
   string            m_check_bmp_file_on;
   string            m_check_bmp_file_off;
   string            m_check_bmp_file_on_locked;
   string            m_check_bmp_file_off_locked;
   //--- 复选框的文字
   string            m_label_text;
   //--- 文字标签的边缘
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 不同状态下文字的颜色
   color             m_label_color;
   color             m_label_color_off;
   color             m_label_color_hover;
   color             m_label_color_locked;
   color             m_label_color_array[];
   //--- 鼠标左键优先级
   int               m_zorder;
   int               m_area_zorder;
   //---
public:
   //--- 设置活动与屏蔽状态下的按钮标签
   void              CheckFileOn(const string file_path)            { m_check_bmp_file_on=file_path;         }
   void              CheckFileOff(const string file_path)           { m_check_bmp_file_off=file_path;        }
   void              CheckFileOnLocked(const string file_path)      { m_check_bmp_file_on_locked=file_path;  }
   void              CheckFileOffLocked(const string file_path)     { m_check_bmp_file_off_locked=file_path; }
   //--- (1) 背景颜色, (2) 文字标签的边缘
   void              AreaColor(const color clr)                     { m_area_color=clr;                      }
   void              LabelXGap(const int x_gap)                     { m_label_x_gap=x_gap;                   }
   void              LabelYGap(const int y_gap)                     { m_label_y_gap=y_gap;                   }
   //--- 不同状态的文字颜色
   void              LabelColor(const color clr)                    { m_label_color=clr;                     }
   void              LabelColorOff(const color clr)                 { m_label_color_off=clr;                 }
   void              LabelColorHover(const color clr)               { m_label_color_hover=clr;               }
   void              LabelColorLocked(const color clr)              { m_label_color_locked=clr;              }
   //--- 复选框的描述
   string            LabelText(void)                          const { return(m_label.Description());         }
  };
```

为了创建复选框控件，我们需要三个 **私有** 方法和一个 **公有** 方法:

```
class CCheckBox : public CElement
  {
private:
   //--- 用于创建复选框的对象
   CRectLabel        m_area;
   CBmpLabel         m_check;
   CLabel            m_label;
   //---
public:
   //--- 创建复选框的方法
   bool              CreateCheckBox(const long chart_id,const int subwin,const string text,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateCheck(void);
   bool              CreateLabel(void);
  };
```

让我们创建 **CCheckBox::CheckButtonState** () 和 **CCheckBox::CheckBoxState** () 方法来管理复选框的状态:

```
class CCheckBox : public CElement
  {
private:
   //--- 复选框按钮的状态
   bool              m_check_button_state;
   //--- 复选框的状态 (可用/屏蔽)
   bool              m_checkbox_state;
   //---
public:
   //--- 返回/设置复选框的状态
   bool              CheckBoxState(void)                      const { return(m_checkbox_state);              }
   void              CheckBoxState(const bool state);
   //--- 返回/设置复选框按钮的状态
   bool              CheckButtonState(void)                   const { return(m_check.State());               }
   void              CheckButtonState(const bool state);
  };
```

如需屏蔽/解除控件的屏蔽，使用 **CCheckBox::CheckBoxState** () 方法:

```
//+------------------------------------------------------------------+
//| 设置控件的状态                            |
//+------------------------------------------------------------------+
void CCheckBox::CheckBoxState(const bool state)
  {
//--- 控件状态
   m_checkbox_state=state;
//--- 图标
   m_check.BmpFileOn((state)?"::"+m_check_bmp_file_on : "::"+m_check_bmp_file_on_locked);
   m_check.BmpFileOff((state)?"::"+m_check_bmp_file_off : "::"+m_check_bmp_file_off_locked);
//--- 文字标签的颜色
   m_label.Color((state)?m_label_color : m_label_color_locked);
  }
```

如需设置复选框按钮的状态，使用 **CCheckBox::CheckButtonState** () 方法:

```
//+------------------------------------------------------------------+
//| 设置复选框按钮的状态　　                        |
//+------------------------------------------------------------------+
void CCheckBox::CheckButtonState(const bool state)
  {
//--- 如果控件被屏蔽，退出
   if(!m_checkbox_state)
      return;
//--- 设置按钮状态
   m_check.State(state);
   m_check_button_state=state;
//--- 根据当前状态改变颜色
   m_label.Color((state)?m_label_color : m_label_color_off);
   CElement::InitColorArray((state)?m_label_color : m_label_color_off,m_label_color_hover,m_label_color_array);
  }
```

我们只需要创建方法来处理按下复选框控件的事件了，这个方法将在控件的主处理函数 **CCheckBox::OnEvent** ()中调用，事件标识符为 [CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) ，让我们称它为 **CCheckBox::OnClickLabel** ()。在此方法的开头，有一项检查看控件区域内(它的背景)是否有鼠标左键按下，为了避免与按下控件对象事件相混淆，背景的鼠标左键点击优先级为1，而其他对象是0。这样，就算鼠标点击在复选框按钮或者文字标签上，也会被当作点击在控件背景上，也就是对象区域具有最高的优先级。然后，我们将使用 **CCheckBox::CheckButtonState** ()方法来把复选框按钮状态设为相反。在方法的末尾，会发送一个自定义事件，其中包含(1) **ON\_CLICK\_LABEL** 事件标识符，(2)元件标识符　以及(3)元件的描述。

```
class CCheckBox : public CElement
  {
private:
   //--- 处理点击元件的事件
   bool              OnClickLabel(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 事件处理                               |
//+------------------------------------------------------------------+
void CCheckBox::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标左键点击对象事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- Click on the checkbox
      if(OnClickLabel(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 点击了元件的标签                           |
//+------------------------------------------------------------------+
bool CCheckBox::OnClickLabel(const string clicked_object)
  {
//--- 如果名称不同，退出
   if(m_area.Name()!=clicked_object)
      return(false);
//--- 如果控件被屏蔽，退出
   if(!m_checkbox_state)
      return(false);
//--- 切换到相反状态
   CheckButtonState(!m_check.State());
//--- 鼠标光标位于元件上方
   m_label.Color(m_label_color_hover);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_LABEL,CElement::Id(),0,m_label.Description());
   return(true);
  }
```

### 测试复选框控件

所有 **CCheckBox** 类的方法都完成了，我们可以测试看控件如何工作了。控件的类文件已经包含在库中，用于测试的EA可以从前面的文章中复制，删除除了主菜单和状态栏之外的控件，创建两个用于测试的复选框。确保在程序载入图表时，第二个复选框默认是屏蔽的，第一个复选框用户可以使用做交互，但是是禁用状态。启用了第一个复选框就是用于解除第二个复选框屏蔽的信号。相反的状况也是一样 - 禁用第一个复选框就是屏蔽第二个复选框的信号。

在 **CProgram** 自定义类中创建两个 **CCheckBox** 类的实例，并声明两个方法来创建复选框以及设置它们和所附加表单边缘的距离：

```
//+------------------------------------------------------------------+
//| 创建应用程序的类                           |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 复选框
   CCheckBox         m_checkbox1;
   CCheckBox         m_checkbox2;
   //---
private:
   //--- 复选框
#define CHECKBOX1_GAP_X       (7)
#define CHECKBOX1_GAP_Y       (50)
   bool              CreateCheckBox1(const string text);
#define CHECKBOX2_GAP_X       (30)
#define CHECKBOX2_GAP_Y       (75)
   bool              CreateCheckBox2(const string text);
  };
```

方法实现中的唯一不同之处就是第二个复选框是否可用将取决于第一个复选框的状态:

```
//+------------------------------------------------------------------+
//| 创建复选框 2                                               |
//+------------------------------------------------------------------+
bool CProgram::CreateCheckBox2(string text)
  {
//--- 传入面板对象
   m_checkbox2.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+CHECKBOX2_GAP_X;
   int y=m_window1.Y()+CHECKBOX2_GAP_Y;
//--- 在创建之前设置属性
   m_checkbox2.XSize(90);
   m_checkbox2.YSize(18);
   m_checkbox2.AreaColor(clrWhiteSmoke);
   m_checkbox2.LabelColor(clrBlack);
   m_checkbox2.LabelColorOff(clrBlack);
   m_checkbox2.LabelColorLocked(clrSilver);
//--- 创建控件
   if(!m_checkbox2.CreateCheckBox(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 可用性将依赖于第一个复选框的当前状态
   m_checkbox2.CheckBoxState(m_checkbox1.CheckButtonState()); 
//--- 把对象驾到通用对象数组中
   CWndContainer::AddToElementsArray(0,m_checkbox2);
   return(true);
  }
```

把创建复选框的方法调用放到创建图形界面的主方法中，以下显示精简版的代码:

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

//--- 复选框
   if(!CreateCheckBox1("Checkbox 1"))
      return(false);
   if(!CreateCheckBox2("Checkbox 2"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

我们将在 **CProgram** 类的事件处理函数中接收并处理以 **ON\_CLICK\_LABEL** 标识的消息，第二个复选框可用与否取决于第一个复选框的状态， 代码如下所示:

```
//+------------------------------------------------------------------+
//| 事件处理函数　                             |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 如果是按下复选框事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 如果按下第一个复选框
      if(lparam==m_checkbox1.Id())
        {
         //--- 设置第二个复选框的状态
         m_checkbox2.CheckBoxState(m_checkbox1.CheckButtonState());
        }
     }
  }
```

现在，编译文件并把EA载入到图表上，结果应当如以下屏幕截图所示:

![图 2. 复选框控件的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-00.hpe "图 2. 复选框控件的测试。")
![[Pasted image 20260628215324.png]]
图 2. 复选框控件的测试。

屏幕截图显示，第二个复选框被屏蔽，在这里文字的颜色和按钮的图标都对应了这样的状态(淡出的颜色),一切工作正常，我们就转到编辑框控件类的开发中。

### 编辑框控件

编辑框控件是用于在文本栏位设置数字值的，数值可以人工输入或者使用滚动的按钮，最大值和最小值(限制)以及滚动的步长可以由用户定义。如果按一次带有向上/向下箭头的按钮, 数值就会增加/减少设置的步长。如果一直按下向上-向下按钮，编辑框中的数值就会快速变化。当达到允许的最大值或者最小值时，滚动会停止。

这个控件将由五个图形对象构成。它们是:

1. 背景
2. 文字标签
3. 文本框(Edit)
4. 两个用于滚动编辑框控件数值的按钮

![图 3. 编辑框控件的构成部分。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-01_gn%5D_0.rne "图 3. 编辑框控件的构成部分。")
![[Pasted image 20260628215337.png]]
图 3. 编辑框控件的构成部分。

在文章的下一部分，我们将开发一个类用于创建这个界面元件。

### 开发用于创建编辑框控件的类

与复选框控件类似，编辑框控件是简单的而不是组合的，换句话说，它是由简单对象组成而并不包含其他控件，这就是为什么不需要把它加到 **WndContainer.mqh** 文件中。我们只要包含含有编辑框控件类的文件就可以了，

现在，创建 **SpinEdit.mqh** 文件，并且在 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "SpinEdit.mqh"
```

在 **SpinEdit.mqh** 文件中, 创建 **CSpinEdit** 类以及库中所有元件的标准方法，就像本文早些时候在 **CCheckBox** 类中的描述那样，这也是为什么我们将直接描述编辑框控件的属性，

以下是编辑框控件的全部属性列表，用户可以对它们进行设置。

- 背景颜色
- 编辑框的描述文字
- 文字标签的边缘距离
- 不同状态下文字的颜色
- 编辑框的大小
- 从元件右边算，文本框的边缘距离
- 不同状态下文本框的颜色
- 不同状态下文本框文字的颜色
- 不同状态下文本框边框的颜色
- 活动与屏蔽状态开关的标签
- 按钮的边缘距离 (从右侧算)
- 把数值重设到最小值的模式
- 最小值和最大值
- 使用按钮改变文本框数值的步长
- 文字对齐模式
- 小数点位数

以下代码显示了为设置上面列出的控件属性使用的栏位和类的方法:

```
//+------------------------------------------------------------------+
//| 用于创建编辑框的类                          |
//+------------------------------------------------------------------+
class CSpinEdit : public CElement
  {
private:
   //--- 控件背景色
   color             m_area_color;
   //--- 编辑框的文字描述
   string            m_label_text;
   //--- 文本标签边缘距离
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 不同状态下文字的颜色
   color             m_label_color;
   color             m_label_color_hover;
   color             m_label_color_locked;
   color             m_label_color_array[];
   //--- 文本框的大小
   int               m_edit_x_size;
   int               m_edit_y_size;
   //--- 从右边算文本框的边缘距离
   int               m_edit_x_gap;
   //--- 不同状态下文本框和文字的颜色
   color             m_edit_color;
   color             m_edit_color_locked;
   color             m_edit_text_color;
   color             m_edit_text_color_locked;
   color             m_edit_text_color_highlight;
   //--- 不同状态下文本框边框的颜色
   color             m_edit_border_color;
   color             m_edit_border_color_hover;
   color             m_edit_border_color_locked;
   color             m_edit_border_color_array[];
   //--- 活动与屏蔽状态开关的标签
   string            m_inc_bmp_file_on;
   string            m_inc_bmp_file_off;
   string            m_inc_bmp_file_locked;
   string            m_dec_bmp_file_on;
   string            m_dec_bmp_file_off;
   string            m_dec_bmp_file_locked;
   //--- 按钮的边缘距离(从右侧算)
   int               m_inc_x_gap;
   int               m_inc_y_gap;
   int               m_dec_x_gap;
   int               m_dec_y_gap;
   //--- 把数值重设到最小值的模式
   bool              m_reset_mode;
   //--- 最大值／最小值
   double            m_min_value;
   double            m_max_value;
   //--- 修改编辑框数值的步长
   double            m_step_value;
   //--- 文字的对齐模式
   ENUM_ALIGN_MODE   m_align_mode;
   //--- 小数点位数
   int               m_digits;
   //---
public:
   //--- (1) 背景色, (2) 编辑框文字描述, (3) 文本标签的边缘距离
   void              AreaColor(const color clr)                     { m_area_color=clr;                   }
   string            LabelText(void)                          const { return(m_label.Description());      }
   void              LabelXGap(const int x_gap)                     { m_label_x_gap=x_gap;                }
   void              LabelYGap(const int y_gap)                     { m_label_y_gap=y_gap;                }
   //--- 不同状态下文字标签的颜色
   void              LabelColor(const color clr)                    { m_label_color=clr;                  }
   void              LabelColorHover(const color clr)               { m_label_color_hover=clr;            }
   void              LabelColorLocked(const color clr)              { m_label_color_locked=clr;           }
   //--- (1) 文本框大小, (2) 从右侧算文本框的边缘距离
   void              EditXSize(const int x_size)                    { m_edit_x_size=x_size;               }
   void              EditYSize(const int y_size)                    { m_edit_y_size=y_size;               }
   void              EditXGap(const int x_gap)                      { m_edit_x_gap=x_gap;                 }
   //--- 不同状态下文本框的颜色
   void              EditColor(const color clr)                     { m_edit_color=clr;                   }
   void              EditColorLocked(const color clr)               { m_edit_color_locked=clr;            }
   //--- 不同状态下文本框文字的颜色
   void              EditTextColor(const color clr)                 { m_edit_text_color=clr;              }
   void              EditTextColorLocked(const color clr)           { m_edit_text_color_locked=clr;       }
   void              EditTextColorHighlight(const color clr)        { m_edit_text_color_highlight=clr;    }
   //--- 不同状态下文本框边框的颜色
   void              EditBorderColor(const color clr)               { m_edit_border_color=clr;            }
   void              EditBorderColorHover(const color clr)          { m_edit_border_color_hover=clr;      }
   void              EditBorderColorLocked(const color clr)         { m_edit_border_color_locked=clr;     }
   //--- 按钮在活动和屏蔽状态下的设置标签
   void              IncFileOn(const string file_path)              { m_inc_bmp_file_on=file_path;        }
   void              IncFileOff(const string file_path)             { m_inc_bmp_file_off=file_path;       }
   void              IncFileLocked(const string file_path)          { m_inc_bmp_file_locked=file_path;    }
   void              DecFileOn(const string file_path)              { m_dec_bmp_file_on=file_path;        }
   void              DecFileOff(const string file_path)             { m_dec_bmp_file_off=file_path;       }
   void              DecFileLocked(const string file_path)          { m_dec_bmp_file_locked=file_path;    }
   //--- 编辑框按钮的边缘距离
   void              IncXGap(const int x_gap)                       { m_inc_x_gap=x_gap;                  }
   void              IncYGap(const int y_gap)                       { m_inc_y_gap=y_gap;                  }
   void              DecXGap(const int x_gap)                       { m_dec_x_gap=x_gap;                  }
   void              DecYGap(const int y_gap)                       { m_dec_y_gap=y_gap;                  }
   //--- 当按下文字标签时的重设模式
   bool              ResetMode(void)                                { return(m_reset_mode);               }
   void              ResetMode(const bool mode)                     { m_reset_mode=mode;                  }
   //--- 最小值
   double            MinValue(void)                           const { return(m_min_value);                }
   void              MinValue(const double value)                   { m_min_value=value;                  }
   //--- 最大值
   double            MaxValue(void)                           const { return(m_max_value);                }
   void              MaxValue(const double value)                   { m_max_value=value;                  }
   //--- 步长值
   double            StepValue(void)                          const { return(m_step_value);               }
   void              StepValue(const double value)                  { m_step_value=(value<=0)?1 : value; }
   //--- (1) 小数位数, (2) 文字对齐模式
   void              SetDigits(const int digits)                    { m_digits=::fabs(digits);            }
   void              AlignMode(ENUM_ALIGN_MODE mode)                { m_align_mode=mode;                  }
  };
```

为了创建编辑框控件，我们需要五个 **私有** 方法来创建基本的图形对象以及一个 **公有** 方法, 在图形界面被创建时由自定义类进行调用。用于滚动按钮的图标可以在文章末尾下载，它们是默认使用的，但是您也可以使用自己的图标。

```
class CSpinEdit : public CElement
  {
private:
   //--- 用于创建编辑框的对象
   CRectLabel        m_area;
   CLabel            m_label;
   CEdit             m_edit;
   CBmpLabel         m_spin_inc;
   CBmpLabel         m_spin_dec;
   //---
public:
   //--- 创建编辑框的方法
   bool              CreateSpinEdit(const long chart_id,const int subwin,const string label_text,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabel(void);
   bool              CreateEdit(void);
   bool              CreateSpinInc(void);
   bool              CreateSpinDec(void);
  };
```

现在，我们将讨论在创建控件之后管理其状态和属性的模式和方法，让我们从 **CSpinEdit::SetValue** ()方法开始，它是用于调整和保存编辑框控件数值的，而 **CSpinEdit::HighlightLimit** ()辅助方法是用于当超出最大值和最小值限制时突出显示(闪烁)编辑框的文字的。

在 **CSpinEdit::SetValue** ()方法的开始, 会考虑到步长而对数值作调整，之后，会检查以防超出限制(最大值/最小值)，如果超出了限制，就会改成根据检查设定的值，并且调用 **CSpinEdit::HighlightLimit** ()方法来突出显示文字。如果检查并且修改的值之前已经存储，会使用新的数值覆盖原有的。

**CSpinEdit::HighlightLimit** () 方法很简单，首先，设置闪烁的颜色，默认是红色的，用户也可以重新定义它。在那之后，会暂停100毫秒，这是足够使暂时的颜色变化被注意到了，然后，在最后设回初始的文本颜色。

以下是所描述的方法的代码:

```
class CSpinEdit : public CElement
  {
private:
   //--- 文本框当前的值
   double            m_edit_value;
   //---
public:
   //--- 返回和设置文本框的值
   double            GetValue(void)                           const { return(m_edit_value);               }
   bool              SetValue(const double value);
   //--- 当超出限制时闪烁显示
   void              HighlightLimit(void);
  };
//+------------------------------------------------------------------+
//| 对当前值的检查                              |
//+------------------------------------------------------------------+
bool CSpinEdit::SetValue(double value)
  {
//--- 用于调整
   double corrected_value =0.0;
//--- 根据步长进行调整
   corrected_value=::MathRound(value/m_step_value)*m_step_value;
//--- 检查最小值/最大值
   if(corrected_value<m_min_value)
     {
      //--- 设置最小值
      corrected_value=m_min_value;
      //--- 把状态设为打开
      m_spin_dec.State(true);
      //--- 闪烁显示，指出超出限制
      HighlightLimit();
     }
   if(corrected_value>m_max_value)
     {
      //--- 设置最大值
      corrected_value=m_max_value;
      //--- 把状态设为打开
      m_spin_inc.State(true);
      //--- 闪烁显示，指出超出限制
      HighlightLimit();
     }
//--- 如果数值已经改变
   if(m_edit_value!=corrected_value)
     {
      m_edit_value=corrected_value;
      m_edit.Color(m_edit_text_color);
      return(true);
     }
//--- 数值未发生改变
   return(false);
  }
//+------------------------------------------------------------------+
//| 突出显示限制                             |
//+------------------------------------------------------------------+
void CSpinEdit::HighlightLimit(void)
  {
//--- 临时修改文字颜色
   m_edit.Color(m_edit_text_color_highlight);
//--- 更新
   ::ChartRedraw();
//--- 在返回初始颜色前延迟
   ::Sleep(100);
//--- 把文字颜色改成初始颜色
   m_edit.Color(m_edit_text_color);
  }
```

**CSpinEdit::SetValue** () 方法是专门用于在数值超出限制时做调整的， **CSpinEdit:: ChangeValue** () 方法则是用于修改文本框的数值:

```
class CSpinEdit : public CElement
  {
private:
   //--- 修改文本框中的数值
   void              ChangeValue(const double value);
  };
//+------------------------------------------------------------------+
//| 修改文本框中的数值                          |
//+------------------------------------------------------------------+
void CSpinEdit::ChangeValue(const double value)
  {
//--- 检查，调整，并保存新的数值
   SetValue(value);
//--- 在文本框中设置新数值
   m_edit.Description(::DoubleToString(GetValue(),m_digits));
  }
```

与其他元件类似，我们将需要一个来管理编辑框控件的可用性，代码如下所示:

```
class CSpinEdit : public CElement
  {
private:
   //--- 检查状态 (可用/被屏蔽)
   bool              m_spin_edit_state;
   //---
public:
   //--- 返回/设置编辑框的可用状态
   bool              SpinEditState(void)                      const { return(m_spin_edit_state);          }
   void              SpinEditState(const bool state);
  };
//+------------------------------------------------------------------+
//| 设置控件的状态                            |
//+------------------------------------------------------------------+
void CSpinEdit::SpinEditState(const bool state)
  {
   m_spin_edit_state=state;
//--- 文字标签的颜色
   m_label.Color((state)?m_label_color : m_label_color_locked);
//--- 文本框的颜色
   m_edit.Color((state)?m_edit_text_color : m_edit_text_color_locked);
   m_edit.BackColor((state)?m_edit_color : m_edit_color_locked);
   m_edit.BorderColor((state)?m_edit_border_color : m_edit_border_color_locked);
//--- 开关的图标
   m_spin_inc.BmpFileOn((state)?"::"+m_inc_bmp_file_on : "::"+m_inc_bmp_file_locked);
   m_spin_dec.BmpFileOn((state)?"::"+m_dec_bmp_file_on : "::"+m_dec_bmp_file_locked);
//--- 设置与当前状态的关系
   if(!m_spin_edit_state)
     {
      //--- 优先级
      m_edit.Z_Order(-1);
      m_spin_inc.Z_Order(-1);
      m_spin_dec.Z_Order(-1);
      //--- 只读模式下的编辑框
      m_edit.ReadOnly(true);
     }
   else
     {
      //--- 优先级
      m_edit.Z_Order(m_edit_zorder);
      m_spin_inc.Z_Order(m_spin_zorder);
      m_spin_dec.Z_Order(m_spin_zorder);
      //--- 编辑模式下的编辑框
      m_edit.ReadOnly(false);
     }
  }
```

现在，我们将探讨用于处理编辑框控件事件的方法。按下文字标签将生成自定义事件， 由 (1) **ON\_CLICK\_LABEL** 事件标识符, (2) 控件标识符, (3) 控件索引 以及 (4) 文字标签的描述 四部分构成。把编辑框数值重设到最小值的模式之前已经谈过，这种模式是默认禁用的(**false**)，它可以使用 **CSpinEdit::ResetMode** () 方法启用，如需如此，您只要把它的唯一参数设为 **true** 就可以了。如果重设数值的模式被启用，那么点击在文本标签上将会调用在编辑框上设置最小值的方法。

用于处理点击文字标签的 **CSpinEdit::OnClickLabel** ()方法的代码如下所示:

```
class CSpinEdit : public CElement
  {
private:
   //--- 处理点击文字标签的事件
   bool              OnClickLabel(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 点击元件的标签                            |
//+------------------------------------------------------------------+
bool CSpinEdit::OnClickLabel(const string clicked_object)
  {
//--- 如果名称不同，退出
   if(m_area.Name()!=clicked_object)
      return(false);
//--- 如果重设数字模式被启用
   if(m_reset_mode)
     {
      //--- 设置最小值
      ChangeValue(MinValue());
     }
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_LABEL,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

用户可以通过人工输入新的数值或者使用加大和减小按钮来改变编辑框控件中的数值，我们将需要新的自定义事件标识符(ID),把它们加到 **Defines.mqh** 文件中:

```
//+------------------------------------------------------------------+
//|                                                      Defines.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#define ON_END_EDIT               (18) // 结束编辑框中数值的编辑
#define ON_CLICK_INC              (19) // 点击了加大按钮
#define ON_CLICK_DEC              (20) // 点击了减小按钮
```

为了处理人工输入新数值的事件，让我们写出 **CSpinEdit::OnEndEdit** () 方法，它将在通用事件处理函数 **CSpinEdit::OnEvent** ()中调用，对应的事件标识符是 [CHARTEVENT\_OBJECT\_ENDEDIT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) ，如有必要，新值还可以进行调整。在方法的末尾，会生成自定义事件，由 (1) **ON\_END\_EDIT** 事件标识符, (2) 元件标识符, (3) 元件索引 以及(4)文字标签的描述构成，代码如下所示。

```
class CSpinEdit : public CElement
  {
private:
   //--- 处理在文字框中输入数值的事件
   bool              OnEndEdit(const string edited_object);
  };
//+------------------------------------------------------------------+
//| 处理在文字框中输入数值的事件                     |
//+------------------------------------------------------------------+
bool CSpinEdit::OnEndEdit(const string edited_object)
  {
//--- 如果名称不同，退出
   if(m_edit.Name()!=edited_object)
      return(false);
//--- 取得输入的数据
   double entered_value=::StringToDouble(m_edit.Description());
//--- 检查，调整和存储新的数值
   ChangeValue(entered_value);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

为了处理按下加大和减小按钮的事件，我们需要创建两个新的方法， **CSpinEdit::OnClickSpinInc** () 和 **CSpinEdit::OnClickSpinDec** ()。它们相对简单，在图形对象被按下后，会有检查来看它的名称是否是我们控件中的一个按钮，之后，我们取得文字框中当前的数值以及在控件属性中设置的加大/减小的步长，在方法的末尾，生成自定义事件，其中包含(1) the **ON\_CLICK\_INC** / **ON\_CLICK\_DEC** 事件标识符, (2) 元件标识符, (3) 元件索引 以及 (4)文字标签的描述，代码如下所示。

```
class CSpinEdit : public CElement
  {
private:
   //--- 处理编辑按钮按下的事件
   bool              OnClickSpinInc(const string clicked_object);
   bool              OnClickSpinDec(const string clicked_object);
  };
//+------------------------------------------------------------------+
//| 按下加大开关                              |
//+------------------------------------------------------------------+
bool CSpinEdit::OnClickSpinInc(const string clicked_object)
  {
//--- 如果名称不同, 退出
   if(m_spin_inc.Name()!=clicked_object)
      return(false);
//--- 取得当前数值
   double value=GetValue();
//--- 按步长增大，并检查是否超出限制
   ChangeValue(value+m_step_value);
//--- 把状态设为打开
   m_spin_inc.State(true);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_INC,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
//+------------------------------------------------------------------+
//| 按下减小开关                             |
//+------------------------------------------------------------------+
bool CSpinEdit::OnClickSpinDec(const string clicked_object)
  {
//--- 如果名称不同，退出
   if(m_spin_dec.Name()!=clicked_object)
      return(false);
//--- 取得当前数值
   double value=GetValue();
//--- 按照步长减小，并检查是否超出限制
   ChangeValue(value-m_step_value);
//--- 把状态设为打开
   m_spin_dec.State(true);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_DEC,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

所有这些方法必须在事件处理的主方法中调用，代码如下所示。对处理方法主体部分的访问是由当前控件是否可用控制的,

```
//+------------------------------------------------------------------+
//| 事件处理                               |
//+------------------------------------------------------------------+
void CSpinEdit::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标左键点击事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果控件被屏蔽，退出
      if(!m_spin_edit_state)
         return;
      //--- 处理点击文字标签
      if(OnClickLabel(sparam))
         return;
      //--- 处理按下编辑按钮
      if(OnClickSpinInc(sparam))
         return;
      if(OnClickSpinDec(sparam))
         return;
      //---
      return;
     }
//--- 处理文本框内数值变化事件
   if(id==CHARTEVENT_OBJECT_ENDEDIT)
     {
      //--- 如果控件被屏蔽，退出
      if(!m_spin_edit_state)
         return;
      //--- 处理数值的输入
      if(OnEndEdit(sparam))
         return;
     }
  }
```

为了在鼠标左键持续按下开关时数值能够快速滚动，创建 **CSpinEdit::FastSwitching** ()方法，它会在控件的计时器函数中调用。我们已经在讨论用于创建带有滚动条的列表视图 **CListView** 类的时候谈过了，那里所需的方法是用于滚动列表的，而这里将是增加或者减小文字框中的数值的。 **CSpinEdit::FastSwitching** () 方法的更多代码如下所示。

```
class CSpinEdit : public CElement
  {
private:
   //--- 编辑框数值的快速滚动
   void              FastSwitching(void);
  };
//+------------------------------------------------------------------+
//| Timer                                  |
//+------------------------------------------------------------------+
void CSpinEdit::OnEventTimer(void)
  {
//--- 如果元件是下拉的
   if(CElement::IsDropdown())
     {
      ChangeObjectsColor();
      FastSwitching();
     }
   else
     {
      //--- 进行颜色的改变和快速的数值滚动
      //    如果表单没有被屏蔽
      if(!m_wnd.IsLocked())
        {
         ChangeObjectsColor();
         FastSwitching();
        }
     }
  }
//+------------------------------------------------------------------+
//| 在编辑框内快速滚动数值                        |
//+------------------------------------------------------------------+
void CSpinEdit::FastSwitching(void)
  {
//--- 如果控件上没有焦点，退出
   if(!CElement::MouseFocus())
      return;
//--- 如果鼠标按钮松开，把计数器回复到初始值
   if(!m_mouse_state)
      m_timer_counter=SPIN_DELAY_MSC;
//--- 如果鼠标键被按下
   else
     {
      //--- 按照设置的步长增加计数器
      m_timer_counter+=TIMER_STEP_MSC;
      //--- 如果小于零，退出
      if(m_timer_counter<0)
         return;
      //--- 取得编辑框内的当前数值
      double current_value=::StringToDouble(m_edit.Description());
      //--- 如果是增加 
      if(m_spin_inc.State())
         SetValue(current_value+m_step_value);
      //--- 如果是减小
      else if(m_spin_dec.State())
         SetValue(current_value-m_step_value);
      //--- 如果开关按钮还是按下的，改变数值
      if(m_spin_inc.State() || m_spin_dec.State())
         m_edit.Description(::DoubleToString(GetValue(),m_digits));
     }
  }
```

### 测试编辑框控件

所有编辑框控件的方法都已经实现了，让我们在之前已经准备好的程序中测试它，在应用程序的 **CProgram** 自定义类中，创建一个 **CSpinEdit** 类的实例，并声明一个用于创建编辑框控件的方法。

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                         |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 编辑框
   CSpinEdit         m_spin_edit1;
   //---
private:
   //--- 编辑框
#define SPINEDIT1_GAP_X       (150)
#define SPINEDIT1_GAP_Y       (75)
   bool              CreateSpinEdit1(const string text);
  };
```

让我们用地一个复选框来管理此控件的可用性，与之前控制第二个复选框的方式相同。这样，在控件创建完毕之后，它的可用性将取决于第一个复选框的状态，代码如下所示。

```
//+------------------------------------------------------------------+
//| 创建编辑框 1                             |
//+------------------------------------------------------------------+
bool CProgram::CreateSpinEdit1(string text)
  {
//--- 保存窗口指针
   m_spin_edit1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+SPINEDIT1_GAP_X;
   int y=m_window1.Y()+SPINEDIT1_GAP_Y;
//--- 数值
   double v=(m_spin_edit1.GetValue()==WRONG_VALUE) ?4 : m_spin_edit1.GetValue();
//--- 在创建之前设置属性
   m_spin_edit1.XSize(150);
   m_spin_edit1.YSize(18);
   m_spin_edit1.EditXSize(76);
   m_spin_edit1.MaxValue(1000);
   m_spin_edit1.MinValue(-1000);
   m_spin_edit1.StepValue(1);
   m_spin_edit1.SetDigits(0);
   m_spin_edit1.SetValue(v);
   m_spin_edit1.ResetMode(true);
   m_spin_edit1.AreaColor(clrWhiteSmoke);
   m_spin_edit1.LabelColor(clrBlack);
   m_spin_edit1.LabelColorLocked(clrSilver);
   m_spin_edit1.EditColorLocked(clrWhiteSmoke);
   m_spin_edit1.EditTextColor(clrBlack);
   m_spin_edit1.EditTextColorLocked(clrSilver);
   m_spin_edit1.EditBorderColor(clrSilver);
   m_spin_edit1.EditBorderColorLocked(clrSilver);
//--- 创建控件
   if(!m_spin_edit1.CreateSpinEdit(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 可用性将依赖于第一个复选框的当前状态
   m_spin_edit1.SpinEditState(m_checkbox1.CheckButtonState());
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_spin_edit1);
   return(true);
  }
```

与其他控件类似， **CProgram::CreateSpinEdit1** () 方法必须在程序创建图形界面的主方法中调用，以下是该方法的精简版本:

```
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单 1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
//--- 复选框
//--- 编辑框
   if(!CreateSpinEdit1("Spin Edit 1:"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

在 **CProgram::OnEvent** ()事件处理函数中，增加测试侦听来自编辑框事件的代码以及指定第一个编辑框依赖于第一个复选框的状态:

```
//+------------------------------------------------------------------+
//| 事件处理函数                               |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下文字标签事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 如果按下第一个复选框
      if(lparam==m_checkbox1.Id())
        {
         //--- 设置第二个复选框和第一个编辑框的状态
         m_checkbox2.CheckBoxState(m_checkbox1.CheckButtonState());
         m_spin_edit1.SpinEditState(m_checkbox1.CheckButtonState());
        }
     }
//--- 在编辑事件中完成了数值输入
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
//--- 切换编辑框按下事件的按钮
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_INC || id==CHARTEVENT_CUSTOM+ON_CLICK_DEC)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
  }
```

编译程序并在图表中载入，您就能看到，应用程序的图形界面现在看起来如以下屏幕截图所示:

![图 4. 测试编辑框控件.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-06.hpe "图 4. 测试编辑框控件.")
![[Pasted image 20260628215605.png]]
图 4. 测试编辑框控件.

### 复选框中的其它控件

在文章的开始部分已经提到，除了复选框和编辑框，我们还会探讨带有复选框的编辑框和带有复选框的组合框，带有复选框的编辑框是 **CSpinEdit** 类的扩展版本，增加了之前文中讨论过的 **CCheckBox** 类中的栏位和方法。

![图 5. 带有复选框的编辑框控件的构成部分。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-07.hpe "图 5. 带有复选框的编辑框控件的构成部分。")
![[Pasted image 20260628215631.png]]
图 5. 带有复选框的编辑框控件的构成部分。

复选的组合框与 **CComboBox** 和 **CCheckBox** 类的综合是一样的:

![图 6. 复选组合框控件的组成部分。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-04_gn%2Cplg "图 6. 复选组合框控件的组成部分。")
![[Pasted image 20260628215648.png]]
图 6. 复选组合框控件的组成部分。

您可以在本文附件的文件中找到 **CCheckBoxEdit** (复选编辑框) 和 **CCheckComboBox** (复选组合框) 的实现，从而进行自学。因为 **CCheckComboBox** 类型的控件包含一个下拉的列表视图，需要在 **WndContainer.mqh** 文件中增加相关内容，就像其他有下拉部分的元件一样。在这种情况下，下拉列表视图的指针必须加到 **m\_drop\_lists** \[\] 私有指针数组中。在文章 [图形界面 V: 组合框控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1) 中有详细的描述。

为了作为例子，我们将在测试程序中加入这些控件，这样您就可以看到它是如何工作的了，让我们加上两个 **CCheckBox** 类型的复选框和一个 **CCheckBoxEdit** 和 **CCheckComboBox** 类型的控件， **CCheckBoxEdit** 类型控件的可用性将取决于第三个复选框的状态，而 **CCheckComboBox** 类型的控件将由第四个复选框的状态定义。

![图 7. 混合类型控件的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-05_gn%2Cplg "图 7. 混合类型控件的测试。")
![[Pasted image 20260628215714.png]]
图 7. 混合类型控件的测试。

### 结论

在本文中，我们已经开发了在许多图形界面环境下广泛使用的控件: 复选框，编辑框，带有复选框的编辑框，以及复选组合框。在第二章中，我们将开发滑块和双重滑块控件，

您可以下载第六部分的资料并测试看它如何工作。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第六部分的文章列表(章节):**

- [图形界面 VI: 复选框控件，编辑框控件以及它们的组合类型 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446!pcrv_21)
- 图形界面 VI: 滑块和双重滑块控件(第二章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2466](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0446)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2664.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2664%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (247.89 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2664%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (247.86 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

**最近评论 | [前往讨论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-fmrwm-92276)** (31)

![Artyom Trishkin](https://c.mql5.com/avatar/2022/7/62C4775C-ABD6.jpg "Artyom Trishkin")

| 16 5月 2017 在 15:50

**Anatoli Kazharski:**  
即使有，也没什么大不了的。你可以随时补救。

这很自然，但需要额外的时间。这就是我想到它的原因。

不过，我很高兴一切都在进行中，一切都很好。

问题：Tol，请告诉我，是否计划在下一次更新中添加更改 CCanvasTable 单元格 [背景颜色的](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrv_rrmpgrvy!eluo_ahcrv_rrmpgrvy%5Diltgggr "MQL5 文档：图表属性") 功能？

![Anatoli Kazharski](https://c.mql5.com/avatar/2026/6/6a3128ec-fdf5.png "Anatoli Kazharski")

| 16 5月 2017 在 15:55

**Artyom Trishkin:**  

...

问题：Tol，请告诉我，是否计划在下一次更新中添加更改 CCanvasTable 单元背景颜色的 功能？

我们只计划在下次更新中添加已公布的功能。其他所有讨论过的内容都将在下次更新中添加。

![Artyom Trishkin](https://c.mql5.com/avatar/2022/7/62C4775C-ABD6.jpg "Artyom Trishkin")

| 16 5月 2017 在 15:58

**Anatoli Kazharski:**  

只有已经公布的内容才是下一次更新的计划。其他所有讨论过的内容都在后续更新中。

![Oleksii Chepurnyi](https://c.mql5.com/avatar/2017/2/58AECC00-2B2B.png "Oleksii Chepurnyi")

| 20 6月 2017 在 23:05

我也有这样的问题--我从不按键盘布局打字:)(在 SpinEdit 中，我经常输入", "而不是"."。

```
//+------------------------------------------------------------------+
//| 在输入框中输入数值的处理过程
//+------------------------------------------------------------------+
bool CSpinEdit::OnEndEdit(const string edited_object)
  {
//--- 如果外来对象名称为
   if(m_edit.Name()!=edited_object)
      return(false);
//--- 获取输入值
   string entered_text=m_edit.Description();
   StringReplace(entered_text,",",".");
   double entered_value=::StringToDouble(entered_text);
//--- 检查、更正并记住新值
   ChangeValue(entered_value);
//--- 发送相关信息
   ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

添加了一点。我想这没什么坏处... ![Андрей](https://c.mql5.com/avatar/2015/1/54B811FB-5DBD.jpg "Андрей")

| 21 7月 2021 在 19:03

感谢您的文章，是否可以用 TAB 键在价格输入栏之间切换？

[如何采用 MQL5 创建用于 Telegram 的 bots](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0375)

本文包含了采用 MQL5 逐步创建用于 Telegram 的 bots 教程。对于那些期望将自己的交易机器人与移动终端同步的用户来说, 这些信息十分有用。文章里的 bots 例程可以提供交易信号, 从网站上搜索情报, 发送有关账户余额信息以及图表报价和截图至您的智能手机。

[图形界面 V: 组合框控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F03%3A1)

在本系列第五部分的前两章中，我们开发了用于创建滚动条和列表视图的类，在本章中，我们将讨论创建组合框(combobox)控件的类，这也是一个组合控件，包含了第五部分前面章节中讨论的一些元件。

[图形界面 VI: 滑动条与双重滑动条控件(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448)

在前一篇文章中，我们已经使用四个常用图形界面控件加强我们的开发库：复选框，编辑框，带有复选框的编辑框，以及复选组合框。第六部分的第二章将致力于滑动条与双重滑动条控件的开发。

[通用智能交易系统：支持挂单和对冲(第五章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0424)

本文是对CStrategy交易引擎的进一步描述。由于交易者的广泛需要，我们向交易引擎中添加了支持挂单的相关函数。同时，最新版的MetaTrader 5现在也支持了具有对冲选项的帐户。同样的功能也添加到了CStrategy中。本文给出了使用挂单进行交易和在账户中用CStrategy类进行对冲交易的详细算法描述。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fd6jn%60k7f14erj963x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dtpafe%2Cmgtctpafep5%2Ccmm'2D%26c%3Dlhxdtcccmynbdxebcfilivhoccjzgcti%24s%3F8564a3dcb%60240de%60104g964gc25%3Bdc1f879c2c00c%3A312184aa2%3B573c01f11c70%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0446%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>