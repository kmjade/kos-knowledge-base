---
title: "图形界面III：简单与多功能按钮组(第二章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-04-25T10:42:29+00:00Z
created: 2026-06-28
description: "本系列的第一章是关于简单和多功能按钮的，第二篇文章将致力于相互关联的按钮组，这样在应用程序中就可以创建元件，让用户从一个集合(组)中选择一个选项。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_22)
- [开发用于创建简单按钮组的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_23)
- [开发用于创建单选按钮组的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_24)
- [开发用于创建图标按钮组的类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_25)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_26)

### 简介

第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细考虑了库的目标. 文章链接的完整列表在系列文章每章的最后。在那里您可以找到和下载当前开发阶段的完整版本的库。文件在目录中的位置必须和在档案中相同。

本系列第三部分的第一篇文章介绍了简单和多功能的按钮，在第二篇文章中，我们将讨论相互关联的按钮组。它们的创建是用于使用户可以在一个集合(组)的选项中选择一个项目。

### 开发用于创建简单按钮组的类

一组简单按钮本质上就是一个 [OBJ\_BUTTON](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60uvtmn) 类型的图形对象数组，这些控件的不同特点就是，在这样的组中每次只能有一个按钮被按下。在本阶段，这种控件类可以使用两种方式创建:

1. 通过已经实现的 **CSimpleButton类型** 的控件来创建一个组；
2. 通过从 **CButton** 类型的基本对象来创建一个组。

第二个选项更为简单，因为它不需要为每个 **CSimpleButton** 类型的控件都创建额外一个方法来取得指针库，我们就将使用这种方法。

在包含所有控件的 **Controls** 文件夹下使用 **CButtonsGroup** 类来创建 **ButtonsGroup.mqh** 文件，并且在 **WndContainer.mqh** 文件中包含它。这个类必须和所有其它之前开发过的控件一样，含有虚方法和表单指针。我们不会在此讨论它们，而是直接讨论构成它们的属性和方法的描述，

有些属性对组内每个按钮是通用的，但是也有一些独特的属性。以下是两组与按钮外观有关的属性。

**按钮的通用属性:**

- 高度；
- 被屏蔽按钮的颜色；
- 可用状态和屏蔽禁用状态边框的颜色；
- 不同状态下文字的颜色；
- 鼠标左键点击优先级。

**按钮的独特属性:**

- 按钮状态(按下/抬起)；
- 与表单边界的距离；
- 文字；
- 宽度；
- 不同状态下按钮的颜色；
- 按钮的渐变色。

每个按钮到表单边缘的距离将使得可以使用任何顺序排列按钮。

![图 1.  按钮在组内排列的实例。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-0%3B.rne "图 1.  按钮在组内排列的实例。")
![[Pasted image 20260628212713.png]]
图 1. 按钮在组内排列的实例。

声明 **CButton** 类型对象的动态数组并且设置按钮的独特属性，代码如下所示。

```
//+------------------------------------------------------------------+
//| 用于创建简单按钮组的类                           |
//+------------------------------------------------------------------+
class CButtonsGroup : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CButton           m_buttons[];
   //--- 按钮渐变色
   struct ButtonsGradients
     {
      color             m_buttons_color_array[];
     };
   ButtonsGradients  m_buttons_total[];
   //--- 按钮属性:
   //    按钮独特属性的数组
   bool              m_buttons_state[];
   int               m_buttons_x_gap[];
   int               m_buttons_y_gap[];
   string            m_buttons_text[];
   int               m_buttons_width[];
   color             m_buttons_color[];
   color             m_buttons_color_hover[];
   color             m_buttons_color_pressed[];
   //--- 按钮高度
   int               m_button_y_size;
   //--- 被屏蔽禁用按钮的颜色
   color             m_back_color_off;
   //--- 激活和屏蔽模式下的边框颜色
   color             m_border_color;
   color             m_border_color_off;
   //--- 文字颜色
   color             m_text_color;
   color             m_text_color_off;
   color             m_text_color_pressed;
   //--- 鼠标左键点击优先级
   int               m_buttons_zorder;
   //---
public:
   //--- 按钮数量
   int               ButtonsTotal(void)                       const { return(::ArraySize(m_buttons));  }
   //--- (1) 按钮的高度
   void              ButtonYSize(const int y_size)                  { m_button_y_size=y_size;          }
   //--- (1) 被屏蔽按钮的背景色以及边框色 ((2) 可用/(3) 被屏蔽禁用)
   void              BackColorOff(const color clr)                  { m_back_color_off=clr;            }
   void              BorderColor(const color clr)                   { m_border_color=clr;              }
   void              BorderColorOff(const color clr)                { m_border_color_off=clr;          }
   //--- 文字颜色
   void              TextColor(const color clr)                     { m_text_color=clr;                }
   void              TextColorOff(const color clr)                  { m_text_color_off=clr;            }
   void              TextColorPressed(const color clr)              { m_text_color_pressed=clr;        }
  };
```

动态数组的大小将它的创建(附加到图表)之前，构造按钮组的时候定义，每次调用 **CButtonsGroup::AddButton** ()方法时, 数组都会增加一个元素，然后在其中填充传入的参数。

```
class CButtonsGroup : public CElement
  {
public:
   //--- 在创建按钮前设置指定的属性
   void              AddButton(const int x_gap,const int y_gap,const string text,const int width,
                               const color button_color,const color button_color_hover,const color button_color_pressed);
  };
//+------------------------------------------------------------------+
//| 添加一个按钮                             |
//+------------------------------------------------------------------+
void CButtonsGroup::AddButton(const int x_gap,const int y_gap,const string text,const int width,
                              const color button_color,const color button_color_hover,const color pressed_button_color)
  {
//--- 把数组大小增加一个元件
   int array_size=::ArraySize(m_buttons);
   ::ArrayResize(m_buttons,array_size+1);
   ::ArrayResize(m_buttons_total,array_size+1);
   ::ArrayResize(m_buttons_state,array_size+1);
   ::ArrayResize(m_buttons_x_gap,array_size+1);
   ::ArrayResize(m_buttons_y_gap,array_size+1);
   ::ArrayResize(m_buttons_text,array_size+1);
   ::ArrayResize(m_buttons_width,array_size+1);
   ::ArrayResize(m_buttons_color,array_size+1);
   ::ArrayResize(m_buttons_color_hover,array_size+1);
   ::ArrayResize(m_buttons_color_pressed,array_size+1);
//--- 保存传入参数的值
   m_buttons_x_gap[array_size]         =x_gap;
   m_buttons_y_gap[array_size]         =y_gap;
   m_buttons_text[array_size]          =text;
   m_buttons_width[array_size]         =width;
   m_buttons_color[array_size]         =button_color;
   m_buttons_color_hover[array_size]   =button_color_hover;
   m_buttons_color_pressed[array_size] =pressed_button_color;
   m_buttons_state[array_size]         =false;
  }
```

当创建一组按钮时，如果之前没有使用 **CButtonsGroup::AddButton** ()方法增加按钮，创建图形界面的过程会停止，并且在日志中会打印相关消息。按钮将在循环中创建，如以下精简版的 **CButtonsGroup::CreateButtons** () 方法代码所示。

```
class CButtonsGroup : public CElement
  {
public:
   //--- 创建按钮的方法
   bool              CreateButtonsGroup(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateButtons(void);
  };
//+------------------------------------------------------------------+
//| 创建按钮                               |
//+------------------------------------------------------------------+
bool CButtonsGroup::CreateButtons(void)
  {
//--- 坐标
   int l_x =m_x;
   int l_y =m_y;
//--- 取得按钮数量
   int buttons_total=ButtonsTotal();
//--- 如果组中没有按钮，报告
   if(buttons_total<1)
     {
      ::Print(__FUNCTION__," > 本方法将被调用 "
              "一个组至少要包含一个按钮!使用 CButtonsGroup::AddButton() 方法");
      return(false);
     }
//--- 创建指定数量的按钮
   for(int i=0; i<buttons_total; i++)
     {
      //--- 构建对象名称
      //--- 计算坐标
      //--- 设置一个按钮
      //--- 设置属性
      //--- 保存到面板边缘的距离，坐标和大小
      //--- 初始化渐变色数组
      //--- 保存对象指针
     }
//---
   return(true);
  }
```

让我们为这种类型的按钮组创建两种模式。为了如此设置，需要在类中加入设计好的栏位和方法，如以下代码所示。它的默认值将为 **false**, 意思是在组是可用时允许所有的按钮都是抬起的状态，默认值是 **true** 的意思就是组中总有一个按钮是按下的。

```
class CButtonsGroup : public CElement
  {
public:
   //--- 单选按钮模式
   bool              m_radio_buttons_mode;
   //---
public:
   //--- 设置单选按钮模式
   void              RadioButtonsMode(const bool flag)              { m_radio_buttons_mode=flag;       }
  };
```

和任何其它控件一样，这个类必须包含一个用于屏蔽禁用此控件的方法。对于这种类型的按钮组，很重要的一点就是要确保在解除了之前按下按钮的禁用后，它需要恢复其状态的外观。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 可用/禁用
   bool              m_buttons_group_state;
   //---
public:
   //--- 按钮组的通用状态 (可用/禁用)
   bool              ButtonsGroupState(void)                  const { return(m_buttons_group_state);   }
   void              ButtonsGroupState(const bool state);
  };
//+------------------------------------------------------------------+
//| 改变按钮状态                               |
//+------------------------------------------------------------------+
void CButtonsGroup::ButtonsGroupState(const bool state)
  {
   m_buttons_group_state=state;
//---
   int buttons_total=ButtonsTotal();
   for(int i=0; i<buttons_total; i++)
     {
      m_buttons[i].State(false);
      m_buttons[i].Color((state)? m_text_color : m_text_color_off);
      m_buttons[i].BackColor((state)? m_buttons_color[i]: m_back_color_off);
      m_buttons[i].BorderColor((state)? m_border_color : m_border_color_off);
     }
//--- 如果在禁用之前是按下的状态
   if(m_buttons_group_state)
     {
      if(m_selected_button_index!=WRONG_VALUE)
        {
         m_buttons_state[m_selected_button_index]=true;
         m_buttons[m_selected_button_index].Color(m_text_color_pressed);
         m_buttons[m_selected_button_index].BackColor(m_buttons_color_pressed[m_selected_button_index]);
        }
     }
  }
```

我们需要一个方法来在按下按钮时切换按钮的状态，我们还需要用于保存和获取高亮按钮的文字和索引的栏位和方法。

在切换按钮状态方法的开始，代码中会先检查组中按钮的数量，如果没有任何按钮，就会在日志中打印对应的消息，程序不会退出此方法，程序会继续进行，然后在某个点会遇到超出 **m\_buttons\_state** \[\] 数组范围的错误，这说明应用程序的开发人员必须在组里加入至少一个按钮以避免这样的错误。在检查之后，如果已经有了至少一个按钮，如果超出了数组范围，程序将调整传入的索引，然后，根据指定的索引修改按钮的状态，在那之后，除了按下的按钮之外，在一个循环中根据组的模式把所有的按钮都设为抬起状态(设置相关的颜色)，换句话说，如果启用了单选按钮模式，每次至少有一个按钮必须是按下的状态，那么在每个迭代中都要进行检查，看传入的索引和循环中当前的索引是否相等。如果模式是允许所有按钮都抬起，那么除了检查索引，还要检查按钮的当前状态，如果条件达到，则根据模式来设置按下按钮的标志。在这个方法的结尾，在高亮按钮的文字和索引将要保存的类中，它的栏位会根据此标志取得对应的数值，如果不是一个按下的按钮，就设置空值(""以及 [WRONG\_VALUE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Flaoefcmnqtcnvs-ovhgraolsvaltq))。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 高亮按钮的(1) 文字 和 (2) 索引
   string            m_selected_button_text;
   int               m_selected_button_index;
   //---
public:
   //--- 返回高亮按钮的 (1) 文字 和 (2) 索引
   string            SelectedButtonText(void)                 const { return(m_selected_button_text);  }
   int               SelectedButtonIndex(void)                const { return(m_selected_button_index); }
   //--- 根据指定的索引切换按钮的状态
   void              SelectionButton(const int index);
  };
//+------------------------------------------------------------------+
//| 根据指定的索引切换按钮的状态                         |
//+------------------------------------------------------------------+
void CButtonsGroup::SelectionButton(const int index)
  {
//--- 检查组中按下的按钮
   bool check_pressed_button=false;
//--- 取得按钮数量
   int buttons_total=ButtonsTotal();
//--- 如果组中没有按钮，报告
   if(buttons_total<1)
     {
      ::Print(__FUNCTION__," > 本方法将被调用 "
              "一个组至少要包含一个按钮!使用 CButtonsGroup::AddButton() 方法");
     }
//--- 如果超出数组范围则调整索引值
   int correct_index=(index>=buttons_total)? buttons_total-1 : (index<0)? 0 : index;
//--- 把按钮状态调整相反状态
   m_buttons_state[correct_index]=(m_buttons_state[correct_index])? false : true;
//--- 在一组按钮中迭代
   for(int i=0; i<buttons_total; i++)
     {
      //--- 根据模式做相关检查
      bool condition=(m_radio_buttons_mode)? (i==correct_index) : (i==correct_index && m_buttons_state[i]);
      //--- 如果满足条件，使按钮按下/s0>
      if(condition)
        {
         if(m_radio_buttons_mode)
            m_buttons_state[i]=true;
         //--- 有按下的按钮
         check_pressed_button=true;
         //--- 设置颜色
         m_buttons[i].Color(m_text_color_pressed);
         m_buttons[i].BackColor(m_buttons_color_pressed[i]);
         CElement::InitColorArray(m_buttons_color_pressed[i],m_buttons_color_pressed[i],m_buttons_total[i].m_buttons_color_array);
        }
      //--- 如果条件满足，使按钮抬起
      else
        {
         //--- 设置禁用状态和颜色
         m_buttons_state[i]=false;
         m_buttons[i].Color(m_text_color);
         m_buttons[i].BackColor(m_buttons_color[i]);
         CElement::InitColorArray(m_buttons_color[i],m_buttons_color_hover[i],m_buttons_total[i].m_buttons_color_array);
        }
      //--- 把按钮正常状态清零
      m_buttons[i].State(false);
     }
//--- 如果有按下的按钮，保存它的文字和索引
   m_selected_button_text  =(check_pressed_button) ? m_buttons[correct_index].Description() : "";
   m_selected_button_index =(check_pressed_button) ? correct_index : WRONG_VALUE;
  }
```

为了处理一个组按钮的按下事件，创建 **CButtonsGroup::OnClickButton** () 方法，与我们讨论过的其它类似名称的方法一样，需要进行以下检查:

- 检查名称；
- 检查ID；为了从对象名称中展开ID，需要使用 **CButtonsGroup::IdFromObjectName** () 方法，这个方法的代码与之前讨论过的其他控件类中同名方法类似，我们在此就不讨论了；
- 检查当前状态(可用/禁用)。

如果所有检查都通过而程序没有退出此方法，就会在我们之前讨论过的 **CButtonsGroup::SelectionButton** ()方法中在组里切换按钮的状态。在这个方法的最后，会向事件流中发送一条包含按下按钮数据的消息,这个消息可以在自定义类的事件处理函数中接收到。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 处理按钮被按下
   bool              OnClickButton(const string clicked_object);
   //--- 从按钮名称中取得ID
   int               IdFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 图表事件处理函数                                              |
//+------------------------------------------------------------------+
void CButtonsGroup::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理在对象上使用鼠标左键点击的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      if(OnClickButton(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 在组里按下按钮                            |
//+------------------------------------------------------------------+
bool CButtonsGroup::OnClickButton(const string pressed_object)
  {
//--- 如果按下的不是菜单项，就退出
   if(::StringFind(pressed_object,CElement::ProgramName()+"_buttons_",0)<0)
      return(false);
//--- 从对象名称中取得ID
   int id=IdFromObjectName(pressed_object);
//--- 如果ID不匹配，就退出
   if(id!=CElement::Id())
      return(false);
//--- 用于检查索引
   int check_index=WRONG_VALUE;
//--- 检查是否按下了组内的一个按钮
   int buttons_total=ButtonsTotal();
//--- 如果此按钮被禁用，就退出
   if(!m_buttons_group_state)
     {
      for(int i=0; i<buttons_total; i++)
         m_buttons[i].State(false);
      //---
      return(false);
     }
//--- 如果按下了按钮，保存索引
   for(int i=0; i<buttons_total; i++)
     {
      if(m_buttons[i].Name()==pressed_object)
        {
         check_index=i;
         break;
        }
     }
//--- 如果这个组的按钮没有被按下，就退出
   if(check_index==WRONG_VALUE)
      return(false);
//--- 切换按钮状态
   SelectionButton(check_index);
//--- 发送相关信号
   ::EventChartCustom(m_chart_id,ON_CLICK_BUTTON,CElement::Id(),m_selected_button_index,m_selected_button_text);
   return(true);
  }
```

现在我们需要设置组按钮对鼠标光标掠过以及鼠标左键点击的回应，为此，让我们写下 **CButtonsGroup::CheckPressedOverButton** () 方法, 它将在控件事件处理函数中处理 [CHARTEVENT\_MOUSE\_MOVE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 事件时调用。在调用那个方法之前，会进行以下的检查: (1) 控件是否可见, (2) 控件是否可用, (3) 表单是否可用 以及 (4)鼠标左键是否按下。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 检查鼠标左键在组按钮上按下
   void              CheckPressedOverButton(void);
  };
//+------------------------------------------------------------------+
//| 图表事件处理函数                                              |
//+------------------------------------------------------------------+
void CButtonsGroup::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果控件隐藏，就退出
      if(!CElement::IsVisible())
         return;
      //--- 如果按钮被禁用，就退出
      if(!m_buttons_group_state)
         return;
      //--- 定义焦点
      int x=(int)lparam;
      int y=(int)dparam;
      int buttons_total=ButtonsTotal();
      for(int i=0; i<buttons_total; i++)
        {
         m_buttons[i].MouseFocus(x>m_buttons[i].X() && x<m_buttons[i].X2() && 
                                 y>m_buttons[i].Y() && y<m_buttons[i].Y2());
        }
      //--- 如果表单被封锁屏蔽，则退出
      if(m_wnd.IsLocked())
         return;
      //--- 如果鼠标键没有被按下，就退出
      if(sparam!="1")
         return;
      //--- 检查鼠标左键在组按钮上按下
      CheckPressedOverButton();
      return;
     }
  }
//+------------------------------------------------------------------+
//| 检查在组按钮上按下鼠标左键                                       |
//+------------------------------------------------------------------+
void CButtonsGroup::CheckPressedOverButton(void)
  {
   int buttons_total=ButtonsTotal();
//--- 根据鼠标左键按下的位置设置颜色
   for(int i=0; i<buttons_total; i++)
     {
      //--- 如果有焦点，就是按下按钮的颜色
      if(m_buttons[i].MouseFocus())
         m_buttons[i].BackColor(m_buttons_color_pressed[i]);
      //--- 如果没有焦点，则...
      else
        {
         //--- ...如果没有按下组按钮，设置背景颜色
         if(!m_buttons_state[i])
            m_buttons[i].BackColor(m_buttons_color[i]);
        }
     }
  }
```

在测试程序中测试简单按钮组的准备工作已经完成，复制一份我们之前测试过的EA，把除了主菜单和它的上下文菜单之外的其他所有控件删除，在这篇文章中，我们将使用这个程序来测试各种按钮组。

在自定义类中创建一个按钮组 **CButtonsGroup** 类的实例，声明 **CProgram::CreateButtonsGroup1** ()方法用于它的创建以及设定它与表单边缘的距离。

```
class CProgram : public CWndEvents
  {
private:
   //--- 简单按钮组
   CButtonsGroup     m_buttons_group1;
   //---
private:
   //--- 简单按钮组
#define BUTTONS_GROUP1_GAP_X (7)
#define BUTTONS_GROUP1_GAP_Y (50)
   bool              CreateButtonsGroup1(void);
  };
```

创建一个四个按钮组成的组，把它们水平排放，在这个例子中，我们将两个按钮设为红色，而两个按钮设为蓝色。 **CProgram::CreateButtonsGroup1** () 方法的实现如以下代码所示，如果您需要有一个按钮在按钮组创建之后就是高亮状态的，就使用 **CButtonsGroup::SelectionButton** () 公有方法。

```
//+------------------------------------------------------------------+
//| 创建一个简单按钮组                          |
//+------------------------------------------------------------------+
bool CProgram::CreateButtonsGroup1(void)
  {
//--- 保存窗口指针
   m_buttons_group1.WindowPointer(m_window);
//--- 坐标
   int x =m_window.X()+BUTTONS_GROUP1_GAP_X;
   int y =m_window.Y()+BUTTONS_GROUP1_GAP_Y;
//--- 属性
   int    buttons_x_gap[]         ={0,72,144,216};
   string buttons_text[]          ={"BUTTON 1","BUTTON 2","BUTTON 3","BUTTON 4"};
   int    buttons_width[]         ={70,70,70,70};
   color  buttons_color[]         ={C'195,0,0',C'195,0,0',clrRoyalBlue,clrRoyalBlue};
   color  buttons_color_hover[]   ={C'255,51,51',C'255,51,51',C'85,170,255',C'85,170,255'};
   color  buttons_color_pressed[] ={C'135,0,0',C'135,0,0',C'50,100,135',C'50,100,135'};
//--- 设置属性
   m_buttons_group1.TextColor(clrWhite);
   m_buttons_group1.TextColorPressed(clrGold);
//--- 在组中加入四个按钮
   for(int i=0; i<4; i++)
      m_buttons_group1.AddButton(buttons_x_gap[i],0,buttons_text[i],buttons_width[i],
                                 buttons_color[i],buttons_color_hover[i],buttons_color_pressed[i]);
//--- 创建一组按钮
   if(!m_buttons_group1.CreateButtonsGroup(m_chart_id,m_subwin,x,y))
      return(false);
//--- 高亮显示组中的第二个按钮
   m_buttons_group1.SelectionButton(1);
//--- 在对象组的共用数组中加入一个对象
   CWndContainer::AddToElementsArray(0,m_buttons_group1);
   return(true);
  }
```

在编译文件并在图表上载入程序之后，您应当得到如以下屏幕截图所示的结果。

![图 2. 简单按钮组控件的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-12_n.rne "图 2. 简单按钮组控件的测试。")
![[Pasted image 20260628212818.png]]
图 2. 简单按钮组控件的测试。

我们已经完成了第一组按钮， **CButtonsGroup** 类的完整版可以在文章末尾下载。下一个将要探讨的控件是单选按钮组。

### 开发用于创建单选按钮组的类

使用 **CRadioButtons** 类创建 **RadioButtons.mqh** 文件，其中必须含有标准的虚方法以及用于保存和取得表单指针的类成员。您可以看到上面其他控件类中的例子。在库中(**WndContainer.mqh**)包含 **RadioButtons.mqh** 文件，

每个单选项将由三个基本对象构成:

1. 背景;
2. 图标;
3. 文字标签。

![图 3. 单选按钮的组成部分。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-13_%5D3%5Del.rne "图 3. 单选按钮的组成部分。")
![[Pasted image 20260628212835.png]]
图 3. 单选按钮的组成部分。

与简单按钮组不同，一个单选按钮组将只有一种模式。这是因为在这个控件中，所有的按钮不能同时是抬起状态，这个组中总有一个按钮是按下的。组的背景色通常与它所附加的表单背景颜色相同。本质上，它是用于识别焦点以及跟踪单选按钮按下事件的(更高优先级)，在这个版本中，我们可以在鼠标光标进出按钮背景区域时改变文字标签的颜色。单选按钮的特别与共有属性列表和简单按钮的属性列表是不同的，显示如下。

**共有属性:**

- 背景和边框的颜色；
- 文字颜色；
- 高度；
- 按钮图标 (1) 活动状态, (2) 禁用状态 以及 (3) 屏蔽状态；
- 鼠标左键点击优先级。

**特别属性:**

- 文字.
- 宽度.
- 状态. 组中只有一个按钮可以被按下.
- 边缘. 与简单按钮类似，单选按钮可以按任何顺序排布(马赛克，水平，垂直，等等）。
- 文本标签的渐变色.

您可以在以下 **CRadioButtons** 类的代码中看到这些属性。在自定义类中创建控件之前，会使用 **CRadioButtons::AddButton** ()共有方法来设置特定属性数组的大小和数值，如果没有添加任何按钮，那么图形界面的创建将会终止。这在简单按钮组的开发过程中我们已经演示过了，现在我们就不在上面花费更多时间了。

```
//+------------------------------------------------------------------+
//| 创建单选按钮组的类                             |
//+------------------------------------------------------------------+
class CRadioButtons : public CElement
  {
private:
   //--- 文字标签的渐变色
   struct LabelsGradients
     {
      color             m_labels_color_array[];
     };
   LabelsGradients   m_labels_total[];
   //--- 按钮属性:
   //    (1) 背景颜色 以及 (2) 鼠标左键点击优先级
   color             m_area_color;
   int               m_area_zorder;
   //--- 按钮特别属性的数组
   bool              m_buttons_state[];
   int               m_buttons_x_gap[];
   int               m_buttons_y_gap[];
   int               m_buttons_width[];
   string            m_buttons_text[];
   //--- 按钮高度
   int               m_button_y_size;
   //--- 活动状态，禁用状态和屏蔽状态的按钮图标/s0>
   string            m_icon_file_on;
   string            m_icon_file_off;
   string            m_icon_file_on_locked;
   string            m_icon_file_off_locked;
   //--- 文字颜色
   color             m_text_color;
   color             m_text_color_off;
   color             m_text_color_hover;
   //--- 鼠标左键点击优先级
   int               m_buttons_zorder;
   //---
public:
   //--- 设置按钮在活动状态，禁用状态和屏蔽状态的图标
   void              IconFileOn(const string file_path)           { m_icon_file_on=file_path;         }
   void              IconFileOff(const string file_path)          { m_icon_file_off=file_path;        }
   void              IconFileOnLocked(const string file_path)     { m_icon_file_on_locked=file_path;  }
   void              IconFileOffLocked(const string file_path)    { m_icon_file_off_locked=file_path; }
   //--- (1) 背景颜色, (2) 文字颜色
   void              AreaColor(const color clr)                   { m_area_color=clr;                 }
   void              TextColor(const color clr)                   { m_text_color=clr;                 }
   void              TextColorOff(const color clr)                { m_text_color_off=clr;             }
   void              TextColorHover(const color clr)              { m_text_color_hover=clr;           }

   //--- 在创建按钮前设置指定的属性
   void              AddButton(const int x_gap,const int y_gap,const string text,const int width);
  };
```

然后，我们需要创建类中基本对象的实例数组和方法，与简单按钮组类似，单选按钮将在循环中创建。然而，在这里循环将位于主方法中并且会在创建那些对象的过程中传入索引, 以参与每个对象名称的构成。

```
class CRadioButtons : public CElement
  {
private:
   //--- 用于创建按钮的对象
   CRectLabel        m_area[];
   CBmpLabel         m_icon[];
   CLabel            m_label[];
   //---
public:
   //--- 创建按钮的方法
   bool              CreateRadioButtons(const long chart_id,const int window,const int x,const int y);
   //---
private:
   bool              CreateArea(const int index);
   bool              CreateRadio(const int index);
   bool              CreateLabel(const int index);
   //---
public:
   //--- 按钮数量
   int               RadioButtonsTotal(void)                const { return(::ArraySize(m_icon));      }
  };
//+------------------------------------------------------------------+
//| 创建一组按钮对象                           |
//+------------------------------------------------------------------+
bool CRadioButtons::CreateRadioButtons(const long chart_id,const int window,const int x,const int y)
  {
//--- 如果没有表单指针
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建一组单选按钮之前, 类中必须 "
              "传入表单指针: CButtonsGroup::WindowPointer(CWindow &object)");
      return(false);
     }
//--- 初始化变量
   m_id       =m_wnd.LastId()+1;
   m_chart_id =chart_id;
   m_subwin   =window;
   m_x        =x;
   m_y        =y;
//--- 取得组中按钮的数量
   int radio_buttons_total=RadioButtonsTotal();
//--- 如果组中没有按钮，报告
   if(radio_buttons_total<1)
     {
      ::Print(__FUNCTION__," > 本方法将被调用 "
              "一个组至少要包含一个按钮!使用 CRadioButtons::AddButton() 方法");
      return(false);
     }
//--- 设置按钮组
   for(int i=0; i<radio_buttons_total; i++)
     {
      CreateArea(i);
      CreateRadio(i);
      CreateLabel(i);
      //--- 焦点清零
      m_area[i].MouseFocus(false);
     }
//--- 如果在对话框窗口或者最小化时隐藏元件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

这个类还必须含有修改控件状态(可用/屏蔽)以及根据指定索引切换按钮状态的方法。在此，这些方法比 **CButtonsGroup** 类稍微简单一些，因为一组单选项只有一种模式。您可以在文章附件的文件中学习这些方法。另外，这个类与简单按钮类一样，还需要取得高亮按钮的文字和索引的方法。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 高亮按钮的(1) 文字 和 (2) 索引
   string            m_selected_button_text;
   int               m_selected_button_index;
   //--- 可用/禁用
   bool              m_buttons_group_state;
   //---
public:
   //--- 按钮组的通用状态 (可用/禁用)
   bool              ButtonsGroupState(void)                  const { return(m_buttons_group_state);   }
   void              ButtonsGroupState(const bool state);
   //--- 返回高亮按钮的 (1) 文字 和 (2) 索引
   string            SelectedButtonText(void)                 const { return(m_selected_button_text);  }
   int               SelectedButtonIndex(void)                const { return(m_selected_button_index); }
   //--- 根据指定的索引切换按钮的状态
   void              SelectionButton(const int index);
  };
```

我们将使用新的ID， **ON\_CLICK\_LABEL** ，就像表单上的文字标签那样用于发送控件被按下的消息，把它加到 **Defines.mqh** 文件中:

```
#define ON_CLICK_LABEL            (10) // 按下文字标签
```

处理组中按钮按下事件的方法的实现在以下代码中显示。需要进行以下检查，(1) 属于该控件类型, (2) ID 以及(3)可用, 按下按钮的索引将在循环中使用索引标识，如果这个组中的按钮被按下并且该按钮当前没有高亮显示，进行状态切换以及发送消息, 该消息可以在自定义类中收到。

```
class CButtonsGroup : public CElement
  {
private:
   //--- 处理按钮被按下
   bool              OnClickButton(const string pressed_object);
   //--- 根据单选按钮名称取得ID
   int               IdFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 图表事件处理函数                                              |
//+------------------------------------------------------------------+
void CRadioButtons::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理在对象上使用鼠标左键点击的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 切换按钮状态
      if(OnClickButton(sparam))
         return;
     }
  }
//+------------------------------------------------------------------+
//| 按下一个单选按钮                           |
//+------------------------------------------------------------------+
bool CRadioButtons::OnClickButton(const string pressed_object)
  {
//--- 如果按下的不是菜单项，就退出
   if(::StringFind(pressed_object,CElement::ProgramName()+"_radio_area_",0)<0)
      return(false);
//--- 从对象名称取得ID和索引
   int id=IdFromObjectName(pressed_object);
//--- 如果按下的不是附加上下文菜单的项目，就退出
   if(id!=CElement::Id())
      return(false);
//--- 用于检查索引
   int check_index=WRONG_VALUE;
//--- 如果此按钮被禁用，就退出
   if(!m_radio_buttons_state)
      return(false);
//--- 如果按下了按钮，保存索引
   int radio_buttons_total=RadioButtonsTotal();
   for(int i=0; i<radio_buttons_total; i++)
     {
      if(m_area[i].Name()==pressed_object)
        {
         check_index=i;
         break;
        }
     }
//--- 如果按下的不是组中按钮或者
//  它已经是高亮的单选按钮，就退出
   if(check_index==WRONG_VALUE || check_index==m_selected_button_index)
      return(false);
//--- 切换按钮状态
   SelectionRadioButton(check_index);
//--- 发送相关信号
   ::EventChartCustom(m_chart_id,ON_CLICK_LABEL,CElement::Id(),check_index,m_selected_button_text);
   return(true);
  }
```

现在，已经可以进行测试了，在用于测试简单按钮组的EA中添加四个由四个单选按钮(**CRadioButtons**)构成的组，以及一个简单按钮组(**CButtonsGroup**)。

```
class CProgram : public CWndEvents
  {
private:
   //--- 单选按钮组1
   CRadioButtons     m_radio_buttons1;
   //--- 简单按钮组2
   CButtonsGroup     m_buttons_group2;
   //--- 单选按钮组 2,3,4
   CRadioButtons     m_radio_buttons2;
   CRadioButtons     m_radio_buttons3;
   CRadioButtons     m_radio_buttons4;
   //---
private:
   //--- 单选按钮组1
#define RADIO_BUTTONS1_GAP_X     (7)
#define RADIO_BUTTONS1_GAP_Y     (75)
   bool              CreateRadioButtons1();
   //--- 简单按钮组2
#define BUTTONS_GROUP2_GAP_X     (7)
#define BUTTONS_GROUP2_GAP_Y     (100)
   bool              CreateButtonsGroup2(void);
   //--- 单选按钮组 2,3,4
#define RADIO_BUTTONS2_GAP_X     (7)
#define RADIO_BUTTONS2_GAP_Y     (125)
   bool              CreateRadioButtons2();
#define RADIO_BUTTONS3_GAP_X     (105)
#define RADIO_BUTTONS3_GAP_Y     (125)
   bool              CreateRadioButtons3();
#define RADIO_BUTTONS4_GAP_X     (203)
#define RADIO_BUTTONS4_GAP_Y     (125)
   bool              CreateRadioButtons4();
  };
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 简单按钮组1
//--- 单选按钮组1
   if(!CreateRadioButtons1())
      return(false);
//--- 简单按钮组2
   if(!CreateButtonsGroup2())
      return(false);
   //--- 单选按钮组 2,3,4
   if(!CreateRadioButtons2())
      return(false);
   if(!CreateRadioButtons3())
      return(false);
   if(!CreateRadioButtons4())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

我们将使用其中一个方法的实现来作为例子，其他的只是参数值方面有所不同。

```
//+------------------------------------------------------------------+
//| 创建单选按钮组1                           |
//+------------------------------------------------------------------+
bool CProgram::CreateRadioButtons1(void)
  {
//--- 传入面板对象
   m_radio_buttons1.WindowPointer(m_window);
//--- 坐标
   int x =m_window.X()+RADIO_BUTTONS1_GAP_X;
   int y =m_window.Y()+RADIO_BUTTONS1_GAP_Y;
//--- 属性
   int    buttons_x_offset[] ={0,98,196};
   int    buttons_y_offset[] ={0,0,0};
   string buttons_text[]     ={"Radio Button 1","Radio Button 2","Radio Button 3"};
   int    buttons_width[]    ={92,92,92};
//---
   for(int i=0; i<3; i++)
      m_radio_buttons1.AddButton(buttons_x_offset[i],buttons_y_offset[i],buttons_text[i],buttons_width[i]);
//--- 创建一组按钮
   if(!m_radio_buttons1.CreateRadioButtons(m_chart_id,m_subwin,x,y))
      return(false);
//--- 高亮显示组中的第二个按钮
   m_radio_buttons1.SelectedRadioButton(1);
//--- 屏蔽单选按钮
   m_radio_buttons1.RadioButtonsState(false);
//--- 在对象组的共用数组中加入一个对象
   CWndContainer::AddToElementsArray(0,m_radio_buttons1);
   return(true);
  }
```

让我们在另外的(第二个) **CButtonsGroup** 类型的按钮组中创建两个按钮，为了演示用法，让我们这样安排，使得组中第二个按钮将屏蔽第一组简单和单选按钮组而第一个按钮将使得它们变成可用状态。

```
//+------------------------------------------------------------------+
//| 事件处理函数                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 按下按钮的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      ::Print("id: ",id,"; lparam: ",lparam,"; dparam: ",dparam,"; sparam: ",sparam);
      //--- 如果第二组的ID或者简单按钮以及 
      //  这个组中高亮按钮的文字满足消息中的字符串参数
      if(lparam==m_buttons_group2.Id() && sparam==m_buttons_group2.SelectedButtonText())
        {
         //--- 如果索引是第一个按钮，解除指定控件的屏蔽
         if((int)dparam==0)
           {
            m_buttons_group1.ButtonsGroupState(true);
            m_radio_buttons1.RadioButtonsState(true);
           }
         //--- 如果索引是第二个按钮，屏蔽指定的控件
         else
           {
            m_buttons_group1.ButtonsGroupState(false);
            m_radio_buttons1.RadioButtonsState(false);
           }
        }
      return;
     }     
  }
```

编译文件并把程序加到图表上. 在这个开发阶段，您应当取得如以下屏幕截图所示的结果。

![图 4. 单选按钮控件的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-10_n.rne "图 4. 单选按钮控件的测试。")
![[Pasted image 20260628212904.png]]
图 4. 单选按钮控件的测试。

我们已经结束了创建单选按钮组的类的开发，您可以在本文附件中下载完整版本。

### 开发用于创建图标按钮组的类

我们之前已经创建了用于创建图标按钮控件的 **CIconButton** 类，现在，我们将实现一个控件，它将使我们可以创建一组这样的按钮。在包含着之前控件类文件的 **Controls** 文件夹下使用 **CIconButtonsGroup** 类创建 **IconButtonsGroup.mqh** 文件，其中您可以声明和实现标准的虚方法，在库的 **WndContainer.mqh** 文件中包含这个文件。

我们将不会详细描述它了，因为 **CIconButtonsGroup** 类中的这些方法已经在 **CButtonsGroup** 和 **CRadioButtons** 类中讨论过。与单选按钮的 **CRadioButtons** 类相似，创建控件时，这个按钮组中的对象也将在主方法的循环中使用私有方法创建出来。这些方法的唯一参数是索引，它将用于构成图形对象的名称。我们可以设置，这个组中的按钮在鼠标光标在上方掠过时将改变背景和文字的颜色，

本文中已经讨论了与之相关的事件处理，它们与这种类型的按钮组是一样的，所以我们只在以下代码中显示 **CIconButtonsGroup** 类的内容，这些方法的实现在类的外面，它们可以在文章附件的文件中找到。

```
//+------------------------------------------------------------------+
//| 用于创建图标按钮组的类                            |
//+------------------------------------------------------------------+
class CIconButtonsGroup : public CElement
  {
private:
   //--- 控件附加表单的指针
   CWindow          *m_wnd;
   //--- 用于创建按钮的对象
   CButton           m_buttons[];
   CBmpLabel         m_icons[];
   CLabel            m_labels[];
   //--- 文字标签的渐变色
   struct IconButtonsGradients
     {
      color             m_back_color_array[];
      color             m_label_color_array[];
     };
   IconButtonsGradients   m_icon_buttons_total[];
   //--- 按钮属性:
   //    按钮独特属性的数组
   bool              m_buttons_state[];
   int               m_buttons_x_gap[];
   int               m_buttons_y_gap[];
   string            m_buttons_text[];
   int               m_buttons_width[];
   string            m_icon_file_on[];
   string            m_icon_file_off[];
   //--- 按钮高度
   int               m_buttons_y_size;
   //--- 不同模式下的背景色
   color             m_back_color;
   color             m_back_color_off;
   color             m_back_color_hover;
   color             m_back_color_pressed;
   //--- 边框颜色
   color             m_border_color;
   color             m_border_color_off;
   //--- 图标边缘
   int               m_icon_x_gap;
   int               m_icon_y_gap;
   //--- 文字以及文字标签的边缘
   int               m_label_x_gap;
   int               m_label_y_gap;
   //--- 不同模式下文字标签的颜色
   color             m_label_color;
   color             m_label_color_off;
   color             m_label_color_hover;
   color             m_label_color_pressed;
   //--- 高亮按钮的(1) 文字 和 (2) 索引
   string            m_selected_button_text;
   int               m_selected_button_index;
   //--- 不能点击对象的一般优先级
   int               m_zorder;
   //--- 鼠标左键点击优先级
   int               m_buttons_zorder;
   //--- 可用/禁用
   bool              m_icon_buttons_state;
   //---
public:
                     CIconButtonsGroup(void);
                    ~CIconButtonsGroup(void);
   //--- 创建按钮的方法
   bool              CreateIconButtonsGroup(const long chart_id,const int window,const int x,const int y);
   //---
private:
   bool              CreateButton(const int index);
   bool              CreateIcon(const int index);
   bool              CreateLabel(const int index);
   //---
public:
   //--- (1) 保存表单指针, (2) 按钮高度, (3) 按钮数量,
   //    (4) 按钮的一般状态 (可用/被屏蔽)
   void              WindowPointer(CWindow &object)               { m_wnd=::GetPointer(object);      }
   void              ButtonsYSize(const int y_size)               { m_buttons_y_size=y_size;         }
   int               IconButtonsTotal(void)                 const { return(::ArraySize(m_icons));    }
   bool              IconButtonsState(void)                 const { return(m_icon_buttons_state);    }
   void              IconButtonsState(const bool state);
   //--- 按钮背景色
   void              BackColor(const color clr)                   { m_back_color=clr;                }
   void              BackColorOff(const color clr)                { m_back_color_off=clr;            }
   void              BackColorHover(const color clr)              { m_back_color_hover=clr;          }
   void              BackColorPressed(const color clr)            { m_back_color_pressed=clr;        }
   //--- 图标边缘
   void              IconXGap(const int x_gap)                    { m_icon_x_gap=x_gap;              }
   void              IconYGap(const int y_gap)                    { m_icon_y_gap=y_gap;              }
   //--- 文字标签边缘
   void              LabelXGap(const int x_gap)                   { m_label_x_gap=x_gap;             }
   void              LabelYGap(const int y_gap)                   { m_label_y_gap=y_gap;             }
   //--- 返回高亮按钮的 (1) 文字 和 (2) 索引
   string            SelectedButtonText(void)               const { return(m_selected_button_text);  }
   int               SelectedButtonIndex(void)              const { return(m_selected_button_index); }
   //--- 根据指定的索引切换单选项的状态
   void              SelectedRadioButton(const int index);

   //--- 在创建按钮前设置指定的属性
   void              AddButton(const int x_gap,const int y_gap,const string text,
                               const int width,const string icon_file_on,const string icon_file_off);
   //--- 改变颜色
   void              ChangeObjectsColor(void);
   //---
public:
   //--- 图表事件处理函数
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
   //--- (1) 设置, (2) 重置鼠标左键点击的优先级
   virtual void      SetZorders(void);
   virtual void      ResetZorders(void);
   //---
private:
   //--- 处理按钮被按下
   bool              OnClickButton(const string pressed_object);
   //--- 检查鼠标左键在组按钮上按下
   void              CheckPressedOverButton(void);
   //--- 根据单选按钮名称取得ID
   int               IdFromObjectName(const string object_name);
  };
```

让我们测试此控件，作为例子，我们在我们之前测试过 **CButtonsGroup** 和 **CRadioButtons** 类型按钮组的相同EA中创建一组图标按钮。为此，把以下代码行加到自定义类中，代码如下所示。

```
class CProgram : public CWndEvents
  {
private:
   //--- 图标按钮组 1
   CIconButtonsGroup m_icon_buttons_group1;
   //---
private:
   //--- 图标按钮组 1
#define IBUTTONS_GROUP1_GAP_X    (7)
#define IBUTTONS_GROUP1_GAP_Y    (190)
   bool              CreateIconButtonsGroup1(void);
  };
//+------------------------------------------------------------------+
//| 创建交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateTradePanel(void)
  {
//--- 创建控件表单
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 简单按钮组1
//--- 单选按钮组1
//--- 简单按钮组2
//--- 单选按钮组 2,3,4
//--- 图标按钮组 1
   if(!CreateIconButtonsGroup1())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

编译文件并把程序载入到图表，您应当取得如下面屏幕截图所示的结果。

![图 5. 图标按钮组的测试。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-11_n.rne "图 5. 图标按钮组的测试。")
![[Pasted image 20260628212926.png]]
图 5. 图标按钮组的测试。

创建图表按钮组的类的开发已经完成了，您可以在本文附件中下载完整版本。

### 结论

在 **MetaTrader** 交易终端中开发图形界面库系列的第三部分就这样结束了，现在，库的结构如下图中所示。

![图 6. 当前开发阶段的库结构。](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-17.rne "图 6. 当前开发阶段的库结构。")
![[Pasted image 20260628212939.png]]
图 6. 当前开发阶段的库结构。

在系列文章的下一个(第四)部分中，我们将继续开发此库。我们将探讨以下主题：

- 多窗口模式；
- 鼠标左键点击图形对象优先级的属性管理系统；
- 状态栏以及工具提示信息界面元件。

下面的档案中包含了本文中当前开发阶段的库文件，图片和程序文件，可以下载它们用于在\<b0>MetaTrader\</b0>终端中测试,如果您对使用文件中的资料有任何问题，您可以参考下面文章列表中对库的描述，或者在文章的留言处问问题。

**文章列表(第三部分的章节):**

- [图形界面III：简单与多功能按钮(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6)
- [图形界面III：简单与多功能按钮组(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B8!pcrv_21)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2298](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F02%3B8)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-209%3A.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-209%3A%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (166.06 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-209%3A%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (166.06 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[图形界面 IV: 信息界面元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327)

在当前开发阶段，用于创建图形界面的库包含了表单以及可以附加其中的几个控件。之前已经说过，未来的文章中将有一篇专门致力于多窗口模式，现在，我们已经万事具备，我们将在下面的章节中讨论它。在本章中，我们将开发用于创建状态栏和工具提示信息界面元件的类。

[通用智能交易系统：事件模型和交易策略原型(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0149)

本文是通用智能交易模型系列文章的又一篇。这一部分详细介绍了基于数据集中处理的原始事件模型，并考虑了交易引擎CStrategy基类的结构。

[图形界面 IV: 多窗口模式与优先级系统 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0328)

在本章中，我们将扩展库的实现，为MQL应用程序创建多窗口界面。我们还将开发一个优先级系统，用于管理鼠标左键对图形对象的点击，它是用于避免元件对用户操作没有回应的问题的。

[图形界面III：简单与多功能按钮(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F02%3B6)

让我们探讨按钮控件。我们将讨论几个用于创建简单按钮，扩展功能按钮(图标按钮和分割按钮)以及关联按钮(按钮组和单选按钮)的类的实例。另外，我们还将在已有的类中增加一些内容以扩展它们的功能。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F0vekhnz95yxydtp4x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dfmrwm'2D47068%3A%26c%3Ddl%60g%60wxjwamzpjimizta%60jlxdnjofe%60s%24s%3F6%3Afa73d4e6c4d452c%3A91f3e2e%3Bfad551c5c08a411ddca1aa43c475025d3%3A6%3Bb%60%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F02%3B8%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>