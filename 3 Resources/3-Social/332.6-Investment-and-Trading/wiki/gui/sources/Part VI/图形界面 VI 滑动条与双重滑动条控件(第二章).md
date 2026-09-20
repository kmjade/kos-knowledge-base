---
title: "图形界面 VI: 滑动条与双重滑动条控件(第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-07-04T10:50:13+00:00Z
created: 2026-06-28
description: "在前一篇文章中，我们已经使用四个常用图形界面控件加强我们的开发库：复选框，编辑框，带有复选框的编辑框，以及复选组合框。第六部分的第二章将致力于滑动条与双重滑动条控件的开发。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc2)
- [滑动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc3)
- [开发用于创建滑动条控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc4)
	- [测试滑动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc5)
- [双重滑动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc6)
- [开发用于双重滑动条控件的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc7)
	- [测试双重滑动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc8)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc9)

### 简介

第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了库的目标. 您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在前面一篇文章中，我们使用图形界面中的常用控件使我们的开发库更丰富：复选框，编辑框，带有复选框的编辑框和复选组合框。第六部分的第二章将致力于滑动条与双重滑动条控件的开发。

### 滑动条控件

滑动条是一种编辑控件，它包含了由最小值和最大值限制的一个范围。和我们在前面文章中详细探讨的编辑框控件不同，滑动条不包含用于修改输入栏位的按钮，为此，会有一条滑动条可以移动的线。这样的界面对象适合的情形是，只需要一定范围内的大概数值而并不需要精确数值，然而，还是有可能输入一个精确数值的。

元件将由六个图形对象构成，它们是:

1. 背景
2. 标题 (文字标签)
3. 输入栏位
4. 滑块线
5. 滑动条滑块
6. 滑动条指示针

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-el_3.rne)
![[Pasted image 20260628215838.png]]
图 1. 滑动条控件的组成部分。

让我们仔细研究这个控件的类。

### 开发用于创建滑动条控件的类

创建 **Slider.mqh** 文件并且在 **WndContainer.mqh** 文件中包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Slider.mqh"
```

在 **Slider.mqh** 文件中创建 **CSlider** 类，以及开发库中每个控件必须具有的标准方法，还要包含一些文件，例如 **Element.mqh** 和 **Window.mqh**, 包含含有 **CSeperateLine** 类的 **SeparateLine.mqh** 文件，来创建分隔线。CSeparateLine类已经在文章 [图形界面 II: 分隔线与上下文菜单元件(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222) 中讨论过，所以我们这里就不再探讨它了。我想提醒您的唯一事情就是，如果设置的高度大于两个像素，在两条线之间就会有空隙，在视觉上它看起来是中空的，正好可以用来创建滑轨线(沟或槽)，滑动条的滑块就在其中移动。

```
//+------------------------------------------------------------------+
//|                                                       Slider.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "SeparateLine.mqh"
//+------------------------------------------------------------------+
//| 用于创建滑轨的类                                  |
//+------------------------------------------------------------------+
class CSlider : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
public:
                     CSlider(void);
                    ~CSlider(void);
   //---
public:
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)                 { m_wnd=::GetPointer(object);         }
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
   //--- (1) 设置, (2) 重设 鼠标左键点击优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //--- 重设颜色
   virtual void      ResetColors(void);
  };
```

库的用户可以设置滑轨控件所包含的所有对象的属性，这些属性列举如下。

- 元件背景的颜色
- 滑轨的文字描述
- 不同状态下文本标签的颜色
- 输入栏位的当前数值
- 输入栏位的大小
- 不同状态的输入栏位的颜色
- 不同状态的输入栏位文字的颜色
- 不同状态的输入栏位边框的颜色
- 在Y轴上沟槽的大小(高度)
- 滑轨线的颜色
- 不同状态下滑块指示针的颜色
- 滑动条滑块的大小
- 滑动条滑块的颜色
- 鼠标左键点击优先级

下面是在类中以上所列元件对象属性对应栏位和方法的代码：

```
class CSlider : public CElement
  {
private:
   //--- 元件背景的颜色
   color             m_area_color;
   //--- 滑动条的文字描述
   string            m_label_text;
   //--- 不同状态下文字标签的颜色
   color             m_label_color;
   color             m_label_color_hover;
   color             m_label_color_locked;
   color             m_label_color_array[];
   //--- 输入栏位的大小
   int               m_edit_x_size;
   int               m_edit_y_size;
   //--- 不同状态的输入栏位的颜色
   color             m_edit_color;
   color             m_edit_color_locked;
   //--- 不同状态下输入栏位文字的颜色
   color             m_edit_text_color;
   color             m_edit_text_color_locked;
   //--- 不同状态下输入栏位边框的颜色
   color             m_edit_border_color;
   color             m_edit_border_color_hover;
   color             m_edit_border_color_locked;
   color             m_edit_border_color_array[];
   //--- 沟槽的大小
   int               m_slot_y_size;
   //--- 沟槽的颜色
   color             m_slot_line_dark_color;
   color             m_slot_line_light_color;
   //--- 不同状态下指示针的颜色
   color             m_slot_indicator_color;
   color             m_slot_indicator_color_locked;
   //--- 滑动条滑块的大小
   int               m_thumb_x_size;
   int               m_thumb_y_size;
   //--- 滑动条滑块的颜色
   color             m_thumb_color;
   color             m_thumb_color_hover;
   color             m_thumb_color_locked;
   color             m_thumb_color_pressed;
   //--- 鼠标左键点击优先级
   int               m_zorder;
   int               m_area_zorder;
   int               m_edit_zorder;
   //---
public:
   //--- (1) 背景颜色, (2) 文字标签颜色
   void              AreaColor(const color clr)                     { m_area_color=clr;                   }
   void              LabelColor(const color clr)                    { m_label_color=clr;                  }
   void              LabelColorHover(const color clr)               { m_label_color_hover=clr;            }
   void              LabelColorLocked(const color clr)              { m_label_color_locked=clr;           }
   //--- (1) 输入栏位 和(2)沟槽 的大小
   void              EditXSize(const int x_size)                    { m_edit_x_size=x_size;               }
   void              EditYSize(const int y_size)                    { m_edit_y_size=y_size;               }
   void              SlotYSize(const int y_size)                    { m_slot_y_size=y_size;               }
   //--- 不同状态下输入栏位的颜色
   void              EditColor(const color clr)                     { m_edit_color=clr;                   }
   void              EditColorLocked(const color clr)               { m_edit_color_locked=clr;            }
   //--- 不同状态下输入栏位文字的颜色
   void              EditTextColor(const color clr)                 { m_edit_text_color=clr;              }
   void              EditTextColorLocked(const color clr)           { m_edit_text_color_locked=clr;       }
   //--- 不同状态下输入栏位边框的颜色
   void              EditBorderColor(const color clr)               { m_edit_border_color=clr;            }
   void              EditBorderColorHover(const color clr)          { m_edit_border_color_hover=clr;      }
   void              EditBorderColorLocked(const color clr)         { m_edit_border_color_locked=clr;     }
   //--- 分隔线(沟槽)的(1)深色 和(2)浅色
   void              SlotLineDarkColor(const color clr)             { m_slot_line_dark_color=clr;         }
   void              SlotLineLightColor(const color clr)            { m_slot_line_light_color=clr;        }
   //--- 不同状态下滑块指示针的颜色
   void              SlotIndicatorColor(const color clr)            { m_slot_indicator_color=clr;         }
   void              SlotIndicatorColorLocked(const color clr)      { m_slot_indicator_color_locked=clr;  }
   //--- 滑动条滑块的大小
   void              ThumbXSize(const int x_size)                   { m_thumb_x_size=x_size;              }
   void              ThumbYSize(const int y_size)                   { m_thumb_y_size=y_size;              }
   //--- 滑动条滑块的颜色
   void              ThumbColor(const color clr)                    { m_thumb_color=clr;                  }
   void              ThumbColorHover(const color clr)               { m_thumb_color_hover=clr;            }
   void              ThumbColorLocked(const color clr)              { m_thumb_color_locked=clr;           }
   void              ThumbColorPressed(const color clr)             { m_thumb_color_pressed=clr;          }
  };
```

上面列表中列出的主要都是元件对象颜色和大小的属性，与范围和滑块输入栏位相关的属性将构成单独的一组，这些属性是:

- 最小值
- 最大值
- 在输入栏位中修改数值的步长
- 文字对齐模式
- 小数点位数

```
class CSlider : public CElement
  {
private:
   //--- (1) 最小值 和 (2) 最大值, (3) 修改数值的步长
   double            m_min_value;
   double            m_max_value;
   double            m_step_value;
   //--- 小数点位数
   int               m_digits;
   //--- 文字对齐方式
   ENUM_ALIGN_MODE   m_align_mode;
   //---
public:
   //--- 最小值
   double            MinValue(void)                           const { return(m_min_value);                }
   void              MinValue(const double value)                   { m_min_value=value;                  }
   //--- 最大值
   double            MaxValue(void)                           const { return(m_max_value);                }
   void              MaxValue(const double value)                   { m_max_value=value;                  }
   //--- 修改数值的步长
   double            StepValue(void)                          const { return(m_step_value);               }
   void              StepValue(const double value)                  { m_step_value=(value<=0)?1 : value; }
   //--- (1) 小数点位数, (2) 文字对齐方式
   void              SetDigits(const int digits)                    { m_digits=::fabs(digits);            }
   void              AlignMode(ENUM_ALIGN_MODE mode)                { m_align_mode=mode;                  }
  };
```

为了取得当前数值以及在输入栏位中设置和调整新的数值，我们将使用 **CSlider::GetValue** (), **CSlider::SetValue** () 和 **CSlider::ChangeValue** () 方法:

```
class CSlider : public CElement
  {
private:
   //--- 输入栏位的当前数值
   double            m_edit_value;
   //---
public:
   //--- 在输入栏位中返回和设置数值
   double            GetValue(void)                           const { return(m_edit_value);               }
   bool              SetValue(const double value);
   //--- 修改输入栏位中的数值
   void              ChangeValue(const double value);
  };
//+------------------------------------------------------------------+
//| 设置当前数值                             |
//+------------------------------------------------------------------+
bool CSlider::SetValue(const double value)
  {
//--- 用于调整
   double corrected_value=0.0;
//--- 考虑到步长调整数值
   corrected_value=::MathRound(value/m_step_value)*m_step_value;
//--- 检查最小值/最大值
   if(corrected_value<=m_min_value)
      corrected_value=m_min_value;
   if(corrected_value>=m_max_value)
      corrected_value=m_max_value;
//--- 如果修改了数值
   if(m_edit_value!=corrected_value)
     {
      m_edit_value=corrected_value;
      return(true);
     }
//--- 数值没有变化
   return(false);
  }
//+------------------------------------------------------------------+
//| 修改输入栏位中的数值                         |
//+------------------------------------------------------------------+
void CSlider::ChangeValue(const double value)
  {
//--- 检查，调整和保存新的数值
   SetValue(value);
//--- 在输入栏位中设置新的数值
   m_edit.Description(::DoubleToString(GetValue(),m_digits));
  }
```

当滑动条滑块正在移动时，必须根据它的 **X** 坐标计算输入栏位的数值，如果人工输入数值，滑动条滑块的 **X** 坐标必须根据输入栏位中新的数值进行计算。换句话说，在元件开发过程中必须允许双向转换。

为了正确计算，在类中我们需要辅助栏位(变量)进行计算，这些变量在元件创建之后只能计算(初始化)一次。以下是这些变量的描述：

- 工作区域内像素的数量(**m\_pixels\_total**).
- 工作区域内范围内的步数(**m\_value\_steps\_total**).
- 相对工作区域宽度的步长(**m\_position\_step**).

让我们写一个方法来计算这些数值，并称它为 **CSlider::CalculateCoefficients** ():

```
class CSlider : public CElement
  {
private:
   //--- 工作区域内的像素总数
   int               m_pixels_total;
   //--- 工作区域的步数
   int               m_value_steps_total;
   //--- 根据工作区域宽度转换计算的步长
   double            m_position_step;
   //---
private:
   //--- 数值的计算 (步数和系数)
   bool              CalculateCoefficients(void);
  };
//+------------------------------------------------------------------+
//| 数值的计算 (步数和系数)                           |
//+------------------------------------------------------------------+
bool CSlider::CalculateCoefficients(void)
  {
//--- 如果元件宽度小于滑动条滑块的宽度，退出
   if(CElement::XSize()<m_thumb_x_size)
      return(false);
//--- 工作区域内的像素数量
   m_pixels_total=CElement::XSize()-m_thumb_x_size;
//--- 工作区域内的步数
   m_value_steps_total=int((m_max_value-m_min_value)/m_step_value);
//--- 工作区域内根据宽度计算的步长
   m_position_step=m_step_value*(double(m_value_steps_total)/double(m_pixels_total));
   return(true);
  }
```

现在，以上列出的变量的数值可以用于根据输入栏位的值计算滑动条滑块的 **X** 坐标了，反之亦然。为此，让我们写两个独立的方法， **CSlider::CalculateThumbX** () 和 **CSlider::CalculateThumbPos** ()，

在 **CSlider::CalculateThumbX** ()方法的开始，我们将计算辅助局部变量(**neg\_range**)的值，它在最小限制值为负时用于调整，然后，我们计算滑动条滑块的 **X** 坐标，在那之后，如果滑动条线越界了，该数值就会被调整过来，在方法的末尾，会为滑动条滑块设置新的 **X** 坐标以及它与它所附加的表单边缘的距离。

在 **CSlider::CalculateThumbPos** ()方法的最开始，我们在一定数值范围内取得滑动条滑块的位置，然后，如果最小值的限制为负时，会做出调整，这样 **m\_current\_pos\_x** 变量的值就是正确的了，这样，如果超出了工作区域，就会做出对应的数值调整。

```
class CSlider : public CElement
  {
private:
   //--- 滑动条滑块的当前位置: (1) 数值, (2) X 坐标
   double            m_current_pos;
   double            m_current_pos_x;
   //---
private:
   //--- 计算滑动条滑块的 X 坐标
   void              CalculateThumbX(void);
   //--- 把当前滑动条滑块的位置转换为对应的数值
   void              CalculateThumbPos(void);
  };
//+------------------------------------------------------------------+
//| 计算滑动条滑块的X坐标                               |
//+------------------------------------------------------------------+
void CSlider::CalculateThumbX(void)
  {
//--- 考虑到最小值可能为负，做调整
   double neg_range=(m_min_value<0)?::fabs(m_min_value/m_position_step) : 0;
//--- 计算滑动条滑块的X坐标
   m_current_pos_x=m_area.X()+(m_edit_value/m_position_step)+neg_range;
//--- 如果工作区域超过了左侧限制
   if(m_current_pos_x<m_area.X())
      m_current_pos_x=m_area.X();
//--- 如果工作区域超过了右侧限制
   if(m_current_pos_x+m_thumb.XSize()>m_area.X2())
      m_current_pos_x=m_area.X2()-m_thumb.XSize();
//--- 保存并设置新的 X 坐标
   m_thumb.X(int(m_current_pos_x));
   m_thumb.X_Distance(int(m_current_pos_x));
   m_thumb.XGap(m_thumb.X()-m_wnd.X());
  }
//+------------------------------------------------------------------+
//| 在取值范围内计算滑动条滑块的位置                                   |
//+------------------------------------------------------------------+
void CSlider::CalculateThumbPos(void)
  {
//--- 取得滑动条滑块的位置编号
   m_current_pos=(m_thumb.X()-m_area.X())*m_position_step;
//--- 考虑到最小值可能为负做调整
   if(m_min_value<0 && m_current_pos_x!=WRONG_VALUE)
      m_current_pos+=int(m_min_value);
//--- 检查工作区域超出右侧/左侧界限
   if(m_thumb.X2()>=m_area.X2())
      m_current_pos=int(m_max_value);
   if(m_thumb.X()<=m_area.X())
      m_current_pos=int(m_min_value);
  }
```

当滑动条的滑块在移动时，必须计算和更新滑动条指示针的宽度，滑动条指示针的右侧必须与滑动条滑块绑定，为此，让我们来写 **CSlider::UpdateIndicator** () 方法:

```
class CSlider : public CElement
  {
private:
   //--- 更新滑动条指示针
   void              UpdateIndicator(void);
  };
//+------------------------------------------------------------------+
//| 更新滑动条指示针 　                          |
//+------------------------------------------------------------------+
void CSlider::UpdateIndicator(void)
  {
//--- 计算大小
   int x_size=m_thumb.X()-m_indicator.X();
//--- 如果有不允许的数值则做出调整
   if(x_size<=0)
      x_size=1;
//--- 设置新的大小
   m_indicator.X_Size(x_size);
  }
```

为了创建滑动条控件，我们将需要六个 **私有** 和一个 **公有** 方法。

```
class CSlider : public CElement
  {
public:
   //--- 用于创建控件的方法
   bool              CreateSlider(const long chart_id,const int subwin,const string text,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabel(void);
   bool              CreateEdit(void);
   bool              CreateSlot(void);
   bool              CreateIndicator(void);
   bool              CreateThumb(void);
  };
```

我们将只讨论 **CSlider::CreateThumb** ()方法的代码，因为是在这里调用之前探讨的所有计算方法。其他用于创建控件对象的方法并没有包含本系列之前文章中没有谈到的内容。

```
//+------------------------------------------------------------------+
//| 创建滑动条滑块                            |
//+------------------------------------------------------------------+
bool CSlider::CreateThumb(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_slider_thumb_"+(string)CElement::Id();
//--- 坐标
   int x=CElement::X();
   int y=m_slot.Y()-((m_thumb_y_size-m_slot_y_size)/2);
//--- 设置对象
   if(!m_thumb.Create(m_chart_id,name,m_subwin,x,y,m_thumb_x_size,m_thumb_y_size))
      return(false);
//--- 设置属性
   m_thumb.Color(m_thumb_color);
   m_thumb.BackColor(m_thumb_color);
   m_thumb.BorderType(BORDER_FLAT);
   m_thumb.Corner(m_corner);
   m_thumb.Selectable(false);
   m_thumb.Z_Order(m_zorder);
   m_thumb.Tooltip("\n");
//--- (在对象中)保存大小
   m_thumb.XSize(m_thumb.X_Size());
   m_thumb.YSize(m_thumb.Y_Size());
//--- 保存坐标
   m_thumb.X(x);
   m_thumb.Y(y);
//--- 边缘距离
   m_thumb.XGap(x-m_wnd.X());
   m_thumb.YGap(y-m_wnd.Y());
//--- 计算辅助变量的数值
   CalculateCoefficients();
//--- 根据输入栏位当前的数值计算滑动条滑块的X坐标
   CalculateThumbX();
//--- 在数值范围内计算滑动条滑块的位置
   CalculateThumbPos();
//--- 更新滑动条指示针
   UpdateIndicator();
//--- 保存对象指针
   CElement::AddToArray(m_thumb);
   return(true);
  }
```

用于移动滑动条滑块的方法与 **CScroll** 和 **CScrollH** 类中的类似名称的方法是一样的, 这在文章 [图形界面 V: 垂直于水平滚动条(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0359) 中已经详细讨论过，所以我们在此就不再讨论它们的代码了。我们只是在 **CSlider** 类中声明它们。

```
class CSlider : public CElement
  {
private:
   //--- 鼠标按键的状态(按下/松开)
   ENUM_THUMB_MOUSE_STATE m_clamping_area_mouse;
   //--- 用于识别滑动条滑块的运动模式
   bool              m_slider_thumb_state;
   //--- 与滑动条滑块的移动相关的变量
   int               m_slider_size_fixing;
   int               m_slider_point_fixing;
   //---
private:
   //--- 滑动条滑块移动的处理
   void              OnDragThumb(const int x);
   //--- 更新滑动条滑块的位置
   void              UpdateThumb(const int new_x_point);
   //--- 检查鼠标键的状态
   void              CheckMouseButtonState(void);
   //--- 把与滑动条滑块移动相关的变量清零
   void              ZeroThumbVariables(void);
  };
```

为了处理在输入栏位输入变量，创建 **CSlider::OnEndEdit** ()方法，将在 **CSlider::OnEvent** ()事件处理函数中调用。

在 **CSlider::OnEndEdit** ()方法的开始，如果在滑动条的输入栏位有数值输入，就会检查对象的名称，之后，我们就获取输入栏位的当前数值，然后，再检查是否有不允许的数据输入，做调整，再计算滑块移动块的 **X** 坐标和在数值范围内的位置。在那之后，再更新滑动条的指示针。在方法的末尾，必须发送一条消息，其中包含 (1) the **ON\_END\_EDIT** 自定义事件标识符, (2) 元件标识符, (3) 元件索引 以及(4)文字标签中的描述。

```
class CSlider : public CElement
  {
private:
   //--- 处理在输入栏位中输入数值
   bool              OnEndEdit(const string object_name);
  };
//+------------------------------------------------------------------+
//| 处理在输入栏位中输入数值                          |
//+------------------------------------------------------------------+
bool CSlider::OnEndEdit(const string object_name)
  {
//--- 如果对象名称不同，退出
   if(object_name!=m_edit.Name())
      return(false);
//--- 取得输入的数值
   double entered_value=::StringToDouble(m_edit.Description());
//--- 检查，调整和保存新的数值
   ChangeValue(entered_value);
//--- 计算滑动条滑块的X坐标
   CalculateThumbX();
//--- 取得数值范围内的位置
   CalculateThumbPos();
//--- 更新滑动条指示针
   UpdateIndicator();
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
   return(true);
  }
```

在滑动条滑块停止移动而更新输入栏位中的数值时，需要发送同样的自定义消息， **CSlider::ZeroThumbVariables** ()方法就是为了这个目的而实现的，它是在 **CSlider::CheckMouseButtonState** ()方法中调用的，在这个方法中会追踪鼠标左键按下的区域，在鼠标左键松开时，会调用 **CSlider::ZeroThumbVariables** () 方法，如果是在滑块移动块区域内松开，就意味着滑动条滑块的运动结束了，需要发送一条消息，声明输入栏位的数值已经改变。

```
//+------------------------------------------------------------------+
//| 把与滑块移动块运动相关的变量清零                                 |
//+------------------------------------------------------------------+
void CSlider::ZeroThumbVariables(void)
  {
//--- 如果运行到这里，意味着鼠标左键松开了，
//    如果鼠标左键在滑动条滑块上方松开...
   if(m_clamping_area_mouse==THUMB_PRESSED_INSIDE)
     {
      //--- ... 发送消息，声明输入栏位的数值在滑动条滑块运动完成后发生改变
      ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
     }
//---
   m_slider_size_fixing  =0;
   m_clamping_area_mouse =THUMB_NOT_PRESSED;
//--- 如果元件标识符与活动元件标识符匹配,
//    解除表单的屏蔽并重置活动元件标识符
   if(CElement::Id()==m_wnd.IdActivatedElement())
     {
      m_wnd.IsLocked(false);
      m_wnd.IdActivatedElement(WRONG_VALUE);
     }
  }
```

**CSlider::OnEvent** () 事件处理函数的完整代码将如下所示:

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

我们已经实现了用于创建和管理滑动条元件的方法，让我们在前一篇文章中使用过的MQL应用程序中来测试它。

### 测试滑动条控件

在前面的文章中，在测试程序中我们创建了四个复选框，用来管理其他元件的可用性。我们将加上滑动条元件和第五个复选框，用来管理它在图形界面上的可用性。为此，在 **CProgram** 自定义类中，声明 **CCheckBox** 和 **CSlider** 类的实例以及用于设置它们到边缘距离的方法。

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                         |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 复选框
   CCheckBox         m_checkbox5;
   //--- 滑动条
   CSlider           m_slider1;
   //---
private:
   //--- 复选框
#define CHECKBOX5_GAP_X       (7)
#define CHECKBOX5_GAP_Y       (200)
   bool              CreateCheckBox5(const string text);
   //--- 滑动条
#define SLIDER1_GAP_X         (32)
#define SLIDER1_GAP_Y         (225)
   bool              CreateSlider1(const string text);
  };
```

在前面的文章中我们已经探讨了创建复选框方法的代码，在此我们就直接看用于创建滑动条元件的方法 **CProgram::CreateSlider1** ()，使用 **CSlider::MinValue** () 和 **CSlider::MaxValue** () 方法把数值范围设为从 - **1** 到 **1** ，把小数点位数设为 **8** 位 (**0.00000001**)，它的可用性将依赖于第五个复选框的当前状态。

```
//+------------------------------------------------------------------+
//| 创建滑动条 1                             |
//+------------------------------------------------------------------+
bool CProgram::CreateSlider1(const string text)
  {
//--- 保存窗口指针
   m_slider1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+SLIDER1_GAP_X;
   int y=m_window1.Y()+SLIDER1_GAP_Y;
//--- 数值
   double v=(m_slider1.GetValue()==WRONG_VALUE) ?0.84615385 : m_slider1.GetValue();
//--- 在创建之前设置属性
   m_slider1.XSize(264);
   m_slider1.YSize(40);
   m_slider1.EditXSize(87);
   m_slider1.MaxValue(1);
   m_slider1.StepValue(0.00000001);
   m_slider1.MinValue(-1);
   m_slider1.SetDigits(8);
   m_slider1.SetValue(v);
   m_slider1.AreaColor(clrWhiteSmoke);
   m_slider1.LabelColor(clrBlack);
   m_slider1.LabelColorLocked(clrSilver);
   m_slider1.EditColorLocked(clrWhiteSmoke);
   m_slider1.EditBorderColor(clrSilver);
   m_slider1.EditBorderColorLocked(clrSilver);
   m_slider1.EditTextColorLocked(clrSilver);
   m_slider1.SlotLineDarkColor(clrSilver);
   m_slider1.SlotLineLightColor(clrWhite);
   m_slider1.SlotYSize(4);
   m_slider1.ThumbColorLocked(clrLightGray);
   m_slider1.ThumbColorPressed(clrSilver);
   m_slider1.SlotIndicatorColor(C'85,170,255');
   m_slider1.SlotIndicatorColorLocked(clrLightGray);
//--- 创建控件
   if(!m_slider1.CreateSlider(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 可用性将依赖于第五个复选框的当前状态
   m_slider1.SliderState(m_checkbox5.CheckButtonState());
//--- 把对象加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_slider1);
   return(true);
  }
```

创建元件的新方法必须在创建图形界面的主方法中调用，以下是这个方法的精简版本:

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
   if(!CreateCheckBox5("Checkbox 5"))
      return(false);
//--- 滑动条
   if(!CreateSlider1("Slider 1:"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

在应用程序的事件处理函数 **CProgram::OnEvent** ()方法中，我们会跟踪第五个复选框的状态来控制滑动条的可用性，当输入栏位的数值有改变时，含有 **ON\_END\_EDIT** 自定义标识符的事件会有指示。

```
//+------------------------------------------------------------------+
//| 事件处理函数                              |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下文字标签的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 点击了第五个复选框
      if(lparam==m_checkbox5.Id())
        {
         //--- 设置第一个滑动条的状态
         m_slider1.SliderState(m_checkbox5.CheckButtonState());
        }
     }
//--- 结束输入栏位中的数据输入事件
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
  }
```

现在，程序可以编译并载入到图表上了，试一试使用图形界面应用程序的控件来进行交互，如果一切正常，您将看到如以下屏幕截图所示的结果：

![图 2. 测试滑动条控件 ](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-0%3B.hpe "图 2. 测试滑动条控件 ")
![[Pasted image 20260628220618.png]]
图 2. 测试滑动条控件

### 双重滑动条控件

双重滑动条控件与简单滑动条控件的区别是，前者允许用户设置数值范围，为此，滑轨线上有两个滑动条。左侧滑动条滑块可以从滑轨线的左侧移动到右侧滑块，而右侧滑动条滑块可以从滑轨线的右侧移动到左侧滑块。双重滑动条也有两个输入栏位，其数值分别对应着滑轨线上的滑块，数值也可以在这些输入栏位中人工输入，这将改变滑动条滑块的位置，

这个控件将由八个基本图形对象构成。它们是:

1. 背景.
2. 标题(文字).
3. 左方输入栏位.
4. 右方输入栏位.
5. 滑块线.
6. 左侧滑块移动块.
7. 右侧滑块移动块.
8. 滑块指示针.

![](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-2%5Del_%5D6%2Cplg)
![[Pasted image 20260628221413.png]]
图 3. 双重滑块控件的构成部分.

让我们看一下双重滑块类，注意它与简单滑块的区别。

### 开发用于双重滑动条控件的类

在 **WndContainer.mqh** 文件中包含含有 **CDualSlider** 控件类的 **DualSlider.mqh** 文件:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "DualSlider.mqh"
```

关于控件的属性， **CDualSlider** 类与 **CSlider** 类是一样的，唯一的区别是它含有左侧和右侧的输入栏位和移动块，需要独立的栏位和方法，这两个方法差别很小，所以我们在这里就不讨论它们的代码了,您可以在文章的附件中找到文件。

```
class CDualSlider : public CElement
  {
private:
   //--- 输入栏位中当前数值 (左侧和右侧)
   double            m_left_edit_value;
   double            m_right_edit_value;
   //--- 滑动条滑块的当前位置 (左侧和右侧)
   double            m_left_current_pos;
   double            m_left_current_pos_x;
   double            m_right_current_pos;
   double            m_right_current_pos_x;
   //--- 对于滑动条滑块(左侧和右侧)，鼠标键的状态(按下/松开)
   ENUM_THUMB_MOUSE_STATE m_clamping_mouse_left_thumb;
   ENUM_THUMB_MOUSE_STATE m_clamping_mouse_right_thumb;
   //---
public:
   //--- 返回输入栏位中的数值 (左侧和右侧)
   double            GetLeftValue(void)                       const { return(m_left_edit_value);          }
   double            GetRightValue(void)                      const { return(m_right_edit_value);         }
   bool              SetLeftValue(double value);
   bool              SetRightValue(double value);
   //--- 修改输入栏位中的数值 (左侧和右侧)
   void              ChangeLeftValue(const double value);
   void              ChangeRightValue(const double value);
   //---
private:
   //--- 移动滑动条滑块的处理 (左侧和右侧)
   void              OnDragLeftThumb(const int x);
   void              OnDragRightThumb(const int x);
   //--- 更新滑动条滑块的位置 (左侧和右侧)
   void              UpdateLeftThumb(const int new_x_point);
   void              UpdateRightThumb(const int new_x_point);
   //--- 检查滑动条滑块上鼠标左键的状态
   void              CheckMouseOnLeftThumb(void);
   void              CheckMouseOnRightThumb(void);
   //--- 计算滑动条滑块的X坐标 (左侧和右侧)
   void              CalculateLeftThumbX(void);
   void              CalculateRightThumbX(void);
   //--- 根据数值改变滑动条滑块的位置 (左侧和右侧)
   void              CalculateLeftThumbPos(void);
   void              CalculateRightThumbPos(void);
  };
```

在此，我们将只展示有关两个输入栏位和滑动条滑块的代码，以下是 **CDualSlider::OnEndEdit** () 方法的结构:

```
class CDualSlider : public CElement
  {
private:
   //--- 处理在输入栏位中输入数值的事件
   bool              OnEndEdit(const string object_name);
  };
//+------------------------------------------------------------------+
//| 完成数值的输入                            |
//+------------------------------------------------------------------+
bool CDualSlider::OnEndEdit(const string object_name)
  {
//--- 如果是在左侧输入栏位中输入数值
   if(object_name==m_left_edit.Name())
     {
      //--- 取得输入的数值
      double entered_value=::StringToDouble(m_left_edit.Description());
      //--- 检查，调整并保存新的数值
      ChangeLeftValue(entered_value);
      //--- 计算滑动条滑块的X坐标
      CalculateLeftThumbX();
      //--- 更新滑动条滑块的位置
      UpdateLeftThumb(m_left_thumb.X());
      //--- 计算在数值范围内的位置
      CalculateLeftThumbPos();
      //--- 检查，调整并存储新的数值
      ChangeLeftValue(m_left_current_pos);
      //--- 更新滑动条指示针
      UpdateIndicator();
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
      return(true);
     }
//--- 如果是在右侧输入栏位中输入数值
   if(object_name==m_right_edit.Name())
     {
      //--- 取得输入的数值
      double entered_value=::StringToDouble(m_right_edit.Description());
      //--- 检查，调整并存储新的数值
      ChangeRightValue(entered_value);
      //--- 计算滑动条滑块的X坐标
      CalculateRightThumbX();
      //--- 更新滑动条滑块的位置
      UpdateRightThumb(m_right_thumb.X());
      //--- 计算数值范围内的位置
      CalculateRightThumbPos();
      //--- 检查，调整并存储新的数值
      ChangeRightValue(m_right_current_pos);
      //--- Update the slider indicator
      UpdateIndicator();
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),CElement::Index(),m_label.Description());
      return(true);
     }
//---
   return(false);
  }
```

移动左侧和右侧滑动条滑块也是采用相同的原则， **CDualSlider::OnEvent** () 事件处理函数包含了对它们的检查:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                           |
//+------------------------------------------------------------------+
void CDualSlider::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的，退出   
      if(!CElement::IsVisible())
         return;
      //--- 鼠标左键的坐标和状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      //--- 检查元件的焦点
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      m_left_thumb.MouseFocus(x>m_left_thumb.X() && x<m_left_thumb.X2() && 
                              y>m_left_thumb.Y() && y<m_left_thumb.Y2());
      m_right_thumb.MouseFocus(x>m_right_thumb.X() && x<m_right_thumb.X2() && 
                               y>m_right_thumb.Y() && y<m_right_thumb.Y2());
      //--- 如果元件被屏蔽，退出
      if(!m_slider_state)
         return;
      //--- 检查和存储鼠标按键的状态
      CheckMouseOnLeftThumb();
      CheckMouseOnRightThumb();
      //--- 改变滑动条滑块的颜色
      ChangeThumbColor();
      //--- 处理滑动条滑块在滑轨线上的运动 (左侧)
      if(m_clamping_mouse_left_thumb==THUMB_PRESSED_INSIDE)
        {
         //--- 移动滑动条滑块
         OnDragLeftThumb(x);
         //--- 计算滑动条滑块在数值范围内的位置
         CalculateLeftThumbPos();
         //--- 在输入栏位中设置新的数值
         ChangeLeftValue(m_left_current_pos);
         //--- 更新滑块指示针
         UpdateIndicator();
         return;
        }
      //--- 处理滑动条滑块在滑轨上的运动(右侧)
      if(m_clamping_mouse_right_thumb==THUMB_PRESSED_INSIDE)
        {
         //--- 移动滑动条滑块
         OnDragRightThumb(x);
         //--- 计算滑动条滑块在数值范围内的位置
         CalculateRightThumbPos();
         //--- 在输入栏位中设置新的数值
         ChangeRightValue(m_right_current_pos);
         //--- 更新滑动条指示针
         UpdateIndicator();
         return;
        }
     }
  }
```

您可以在本文的附件中下载 **CDualSlider** 类的详细代码文件。

### 测试双重滑动条控件

把双重滑动条控件添加到测试程序的图形界面上，声明一个 **CDualSlider** 类的实例，并在应用程序的自定义类 **CProgram** 中加上设置到表单边缘距离的方法。

```
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                         |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 滑动条
   CDualSlider       m_dual_slider1;
   //---
private:
   //--- 滑动条
#define DUALSLIDER1_GAP_X     (32)
#define DUALSLIDER1_GAP_Y     (275)
   bool              CreateDualSlider1(const string text);
  };
```

以下是 **CProgram::CreateDualSlider1** ()方法的代码。把数值范围设为从 - **2000** 到 **1000** ，该控件的可用性将依赖于第五个复选框的当前状态，与本文中早些时候创建的简单滑动条类似。

```
//+------------------------------------------------------------------+
//| 创建双重滑动条 1                           |
//+------------------------------------------------------------------+
bool CProgram::CreateDualSlider1(const string text)
  {
//--- 保存窗口指针
   m_dual_slider1.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+DUALSLIDER1_GAP_X;
   int y=m_window1.Y()+DUALSLIDER1_GAP_Y;
//--- 数值
   double v1=(m_dual_slider1.GetLeftValue()==WRONG_VALUE) ?0 : m_dual_slider1.GetLeftValue();
   double v2=(m_dual_slider1.GetRightValue()==WRONG_VALUE) ?500 : m_dual_slider1.GetRightValue();
//--- 在创建之前设置属性
   m_dual_slider1.XSize(264);
   m_dual_slider1.YSize(40);
   m_dual_slider1.EditXSize(87);
   m_dual_slider1.MaxValue(1000);
   m_dual_slider1.StepValue(1);
   m_dual_slider1.MinValue(-2000);
   m_dual_slider1.SetDigits(0);
   m_dual_slider1.SetLeftValue(v1);
   m_dual_slider1.SetRightValue(v2);
   m_dual_slider1.AreaColor(clrWhiteSmoke);
   m_dual_slider1.LabelColor(clrBlack);
   m_dual_slider1.LabelColorLocked(clrSilver);
   m_dual_slider1.EditColorLocked(clrWhiteSmoke);
   m_dual_slider1.EditBorderColor(clrSilver);
   m_dual_slider1.EditBorderColorLocked(clrSilver);
   m_dual_slider1.EditTextColorLocked(clrSilver);
   m_dual_slider1.SlotLineDarkColor(clrSilver);
   m_dual_slider1.SlotLineLightColor(clrWhite);
   m_dual_slider1.SlotYSize(4);
   m_dual_slider1.ThumbColorLocked(clrLightGray);
   m_dual_slider1.ThumbColorPressed(clrSilver);
   m_dual_slider1.SlotIndicatorColor(C'85,170,255');
   m_dual_slider1.SlotIndicatorColorLocked(clrLightGray);
//--- 创建控件
   if(!m_dual_slider1.CreateSlider(m_chart_id,m_subwin,text,x,y))
      return(false);
//--- 可用性将依赖于第五个复选框的当前状态
   m_dual_slider1.SliderState(m_checkbox5.CheckButtonState());
//--- 把对象添加到对象组的通用数组中
   CWndContainer::AddToElementsArray(0,m_dual_slider1);
   return(true);
  }
```

不要忘记把对此方法的调用添加到创建图形界面的主方法中，以下代码是精简版本。

```
//+------------------------------------------------------------------+
//| 创建交易面板                            |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
//--- 复选框
//--- 滑动条
   if(!CreateDualSlider1("Dual Slider 1:"))
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

现在，第五个复选框的当前状态将决定两个控件的可用性 - 简单滑动条 和 双重滑动条。

```
//+------------------------------------------------------------------+
//| 事件处理函数                             |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下文字标签的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LABEL)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 如果点击了第五个复选框
      if(lparam==m_checkbox5.Id())
        {
         //--- 设置滑动条的状态
         m_slider1.SliderState(m_checkbox5.CheckButtonState());
         m_dual_slider1.SliderState(m_checkbox5.CheckButtonState());
        }
     }
//--- 结束在输入栏位中的数值输入事件
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      ::Print(__FUNCTION__," > id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
     }
  }
```

现在，编译程序并把它载入到图表上，下面的屏幕截图演示了结果:

![图 4. 双重滑动条控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-13.hpe "图 4. 双重滑动条控件")
![[Pasted image 20260628221439.png]]
图 4. 双重滑动条控件

### 结论

在本系列的第六部分中，我们探讨了六个控件:

- 复选框，
- 编辑框控件，
- 带有复选框的编辑框，
- 复选组合框，
- 滑动条，
- 双重滑动条，

现在，用于创建图形界面库的结构看起来如下:

![图 5. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-10.hpe "图 5. 当前开发阶段的库结构。")
![[Pasted image 20260628221459.png]]
图 5. 当前开发阶段的库结构。

在本系列的后面部分中，我们将使用表格和页面使我们的开发库更加强大，

您可以下载第六部分的资料并测试看它如何工作。如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第六部分的文章列表(章节):**

- [图形界面 VI: 复选框控件，编辑框控件以及它们的组合类型 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446)
- [图形界面 VI: 滑动条与双重滑动条控件(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0448!pcrc1)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2468](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0448)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-266%3A.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-266%3A%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (248.19 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-266%3A%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (248.15 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[通用智能交易系统：自定义追踪止损(第六章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0431)

通用智能交易系统的第六章介绍追踪止损功能的用法。本文将指导你如何使用通用规则创建一个自己的追踪止损模型，以及如何将其添加到交易引擎中来实现自动管理持仓头寸的功能。

[如何采用 MQL5 创建用于 Telegram 的 bots](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0375)

本文包含了采用 MQL5 逐步创建用于 Telegram 的 bots 教程。对于那些期望将自己的交易机器人与移动终端同步的用户来说, 这些信息十分有用。文章里的 bots 例程可以提供交易信号, 从网站上搜索情报, 发送有关账户余额信息以及图表报价和截图至您的智能手机。

[为莫斯科交易所开发一个交易机器人从哪里开始呢?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0533)

很多莫斯科交易所的交易者想把他们的交易算法自动化，但是他们不知道从何做起，MQL5语言提供了很大范围的交易功能，它还额外提供了方便使用的类，以使用户在算法交易中方便地起步。

[图形界面 VI: 复选框控件，编辑框控件以及它们的组合类型 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0446)

本文是在MetaTrader终端图形界面开发库系列中第六部分的开端，在第一章中，我们将讨论复选框控件，编辑框控件以及它们的组合类型。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F16pyl3x2w6sc%6077cx2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dngupo%60omk'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_vepm'3Frgaf.lewrmbmoi%2506wto_aoltgnv%251Dtiqiv.raee'24uvm%5Dccmrakgl%251Dlewrmbmoi.rrmmm.24%2C2226%26c%3Dmcvfmlgyjdol%7Bjetis%7Bbaevwvidvrmsc%24s%3F74c%3B5%604f8136ff0d3%3A36c%60c6a6b35ffd5a80306f0gd7ac76e0c011a%3Bf0e3e6e4%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0448%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>