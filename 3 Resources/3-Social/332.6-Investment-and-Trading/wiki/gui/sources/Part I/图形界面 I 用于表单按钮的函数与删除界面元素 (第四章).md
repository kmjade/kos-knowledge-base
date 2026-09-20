---
title: "图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-03-07T11:31:56+00:00Z
created: 2026-06-28
description: "在本文中, 我们将继续开发CWindow类, 增加它的类方法, 可以通过点击它的控件来对它进行管理. 我们将可以通过表单按钮来关闭程序, 也会实现表单的最小化和最大化功能."
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
  - "[[gui/compiled/MQL图形界面I-库结构]]"
  - "[[3 Resources/People/wiki/entities/Anatoli-Kazharski-tol64]]"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108!pcrv_22)
- [表单按钮的函数](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108!pcrv_23)
- [删除界面元件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108!pcrv_24)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108!pcrv_25)

### 简介

本文是关于图形界面系列文章第一部分的续篇. 第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了库的目标. 在每章末尾会有第一部分文章的完整链接列表. 在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在 [前一篇文章中](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107), **CWindow** 类已经扩展了功能, 允许它在图表上移动. 现在, 表单控件可以回应鼠标光标的移动了. 在本文中, 我们将继续开发 **CWindow** 类, 增加它的方法, 这使我们可以通过点击它的控件来管理表单. 我们将可以通过表单按钮来关闭程序, 也会实现表单的最小化和最大化功能.

### 表单按钮的函数

在正在开发中的库里, 表单含有两个主要的按钮, 它们是EA交易和指标中必须的, 另外还有一个完全不显示.

1. 第一个按钮在右方, 必须含有关闭窗口功能. 在此我们会就这样实现它. 如果是在一个由主窗口调用或者另外一个对话框中调用的对话框窗口中按下它, 则会关闭此对话框窗口. 如果实在主窗口中按下这个按钮, 则程序会从图表上删除.
2. 第二个按钮包括两个部分. 说得更明确些, 这是两个按钮. 它们中的每一个都根据当前的模式来显示. 如果窗口是最大化的, 则最小化窗口的按钮会显示出来. 一个最小化的窗口将有个按钮用来把窗口最大化.
3. 第三个按钮用于启用自定义的小提示模式. 需要对 "自定义小提示" 的含义做一下解释. MQL 语言允许每个图形对象在有鼠标光标焦点时显示提示文本.
	您肯定已经注意到, 在 **CWindow** 类的代码中, **CChartObject::[Tooltip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv%2Facjaptmbheatvomlvir)** () 方法在对象的属性被指定时, 创建表单对象时会使用到的. 如果对象需要有工具提示, 那么当光标掠过传给了 [Tooltip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv%2Facjaptmbheatvomlvir) ()方法的对象时, 文字就会显示出来. 如果不需要工具提示, 就需要传入 **"\\n"** 文本.
	这个属性有一些局限: (1) 如果文本超过128个字符长, 就不能完全显示, 并且(2) 文本的属性, 例如笔画轻重, 颜色, 字体等无法管理. 因而, 它们不是自定义工具提示. 我们将会把它们分类到MQL标准工具提示中. 这些工具提示对于小注释是好的. 然而, 当文本很长而必须使用几行显示, 还有一些需要高亮提示的词语时, 它们就不适合了.
	我想每个人都会熟悉ExcelI. 作为例子, 我们可以看到在这个程序中(参见下方截屏)工具提示的选项是什么样的. 我们将会在正在开发的这个界面库中创建一个可以显示这样工具提示的一个类. 那些工具提示是可以自定义的, 我们将会自己实现它们的功能. 我们会在完全实现了用于控件的表单类后回到这个问题上, 因为表单上至少要有一个控件.

![图 1. Excel 中的工具提示](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-fkg3_gxaen.rne "图 1. Excel 中的工具提示")
![[Pasted image 20260628182221.png]]
图 1. Excel 中的工具提示

让我们从关闭窗口的按钮开始. 在 **CWindow** 类中创建 **CloseWindow** () 方法. 它会在 **CWindow::OnEvent** () 图表事件处理函数中, 处理由 [CHARTEVENT\_OBJECT\_CLICK](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fahcrvcmnqtcnvs-eluo_ahcrveteltq) 标识的事件时调用, 事件的意思是图形对象上有点击. 当任何图形对象上有点击时都会产生这个标识的事件. 那时, 图表事件的字符串型参数 (**sparam**) 包含了被点击的对象名称. 为此, 我们需要检查对象的名称, 保证找到真正被点击的对象.

**CWindow::CloseWindow** () 方法只有一个参数 - 被点击的对象名称. 在代码的开头, 会有检查看是否在对象上有点击, 这是基于我们的设计的, 有一个用于关闭窗口的按钮. 然后此方法的代码被分为两个分支 - 分别针对主窗口和对话框窗口. 因为多窗口模式还没有完成, 对话框窗口的分支将是空的. 我们晚些时候会回来实现它. 对于主窗口部分已经可以工作了. 我们需要在这种条件下检测程序的类型 (这是一个EA交易还是一个指标). 这是因为在MQL语言中, 删除不同类型的程序需要不同的函数.

MQL 有自己的函数来调用一个对话框窗口来让用户确认不同的行为. 这就是 [MessageBox](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faoommn-mgsqaee%60oz) () 函数. 我们会临时使用它来确认在图表上删除一个EA交易. 此窗口不能用于删除指标, 因为它是模态窗口. 原因是指标是在界面流中运行的, 我们不应该暂停它. 当在多窗口模式下, 并且实现了"按钮(Button)"控件, 我们将能够使用我们的对话框窗口, 那是通过我们的界面库创建的.

在程序从图表上删除之前, 会在终端的专家日志中打印出来信息说明程序是根据用户的决定而删除的.

让我们在 **CWindow** 类中增添内容, 代码显示如下.

用于关闭窗口的 **CWindow::CloseWindow** () 方法的声明和实现:

```
class CWindow: public CElement
  {
public:
   //--- 关闭窗口
   bool              CloseWindow(const string pressed_object);
  };
//+------------------------------------------------------------------+
//| 关闭对话框窗口或程序                                                |
//+------------------------------------------------------------------+
bool CWindow::CloseWindow(const string pressed_object)
  {
//--- 如果点击了关闭窗口的按钮
   if(pressed_object!=m_button_close.Name())
      return(false);
//--- 如果是主窗口
   if(m_window_type==W_MAIN)
     {
      //--- 如果程序是"EA交易"类型
      if(CElement::ProgramType()==PROGRAM_EXPERT)
        {
         string text="您是否希望在图表上删除此程序?";
         //--- 打开对话框窗口
         int mb_res=::MessageBox(text,NULL,MB_YESNO|MB_ICONQUESTION);
         //--- 如果点击了 "Yes" 按钮, 在图表上删除此程序
         if(mb_res==IDYES)
           {
            ::Print(__FUNCTION__," > 根据您的决定, 在图表上删除了这个程序!");
            //--- 从图表上删除EA交易
            ::ExpertRemove();
            return(true);
           }
        }
      //--- 如果程序是 "指标"类型
      else if(CElement::ProgramType()==PROGRAM_INDICATOR)
        {
         //--- 从图表上删除指标t
         if(::ChartIndicatorDelete(m_chart_id,m_subwin,CElement::ProgramName()))
           {
            ::Print(__FUNCTION__," > 根据您的决定, 在图表上删除了这个程序!");
            return(true);
           }
        }
     }
   //--- 如果是一个对话框窗口
   else if(m_window_type==W_DIALOG)
     {
     }
//---
   return(false);
  }
```

在图表事件处理函数中调用 **CWindow::CloseWindow** () 方法:

```
//+------------------------------------------------------------------+
//| 图表事件处理函数                                                   |
//+------------------------------------------------------------------+
void CWindow::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理点击一个对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 关闭窗口
      CloseWindow(sparam);
      return;
     }
  }
```

编译库中的文件和您之前用于测试的EA交易. 在图表上载入EA交易. 现在点击用于关闭窗口的按钮将会弹出如图所示的窗口:

![图 2. 测试通过按下表单上按钮的方法关闭程序](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F02-16_niehv.rne "图 2. 测试通过按下表单上按钮的方法关闭程序")
![[Pasted image 20260628182240.png]]
图 2. 测试通过按下表单上按钮的方法关闭程序

现在, 我们将要创建用于第二个按钮的方法, 它允许最大化和最小化表单:

- **CWindow::RollUp** () 方法是最小化表单的.
- **CWindow::Unroll** () 方法用于最大化表单.

这些方法的内容很简单和类似. 在每个方法的开头, 首先改变图标, 然后设置和存储背景的大小, 再把焦点清零, 然后根据用户的选择设置对应的状态. 当程序是指标类型并且不是位于主窗口时, 会在创建表单时设置使用指标子窗口的固定高度模式, 然后设置模式允许修改指标子窗口的大小, 再调用 **CWindow::ChangeSubwindowHeight** () 方法. 这在早些时候创建, 并且应该放到 **CWindow** 类中.

**CWindow::RollUp** () 和 **CWindow::Unroll** () 的方法

```
//+------------------------------------------------------------------+
//| 最小化窗口                                                        |
//+------------------------------------------------------------------+
void CWindow::RollUp(void)
  {
//--- 改变按钮
   m_button_rollup.Timeframes(OBJ_NO_PERIODS);
   m_button_unroll.Timeframes(OBJ_ALL_PERIODS);
//--- 设置和保存大小
   m_bg.Y_Size(m_caption_height);
   CElement::YSize(m_caption_height);
//--- 禁用按钮
   m_button_unroll.MouseFocus(false);
   m_button_unroll.State(false);
//--- 表单"最小化"的状态
   m_is_minimized=true;
//---如果这是一个指标, 高度固定且自窗口处于最小化模式,
//    设置指标自窗口的大小
   if(m_height_subwindow_mode)
      if(m_rollup_subwindow_mode)
         ChangeSubwindowHeight(m_caption_height+3);
  }
//+------------------------------------------------------------------+
//| 最大化窗口                                                        |
//+------------------------------------------------------------------+
void CWindow::Unroll(void)
  {
//--- 改变按钮
   m_button_unroll.Timeframes(OBJ_NO_PERIODS);
   m_button_rollup.Timeframes(OBJ_ALL_PERIODS);
//--- 设置和保存大小
   m_bg.Y_Size(m_bg_full_height);
   CElement::YSize(m_bg_full_height);
//--- 禁用按钮
   m_button_rollup.MouseFocus(false);
   m_button_rollup.State(false);
//--- 表单 "最大化"的状态
   m_is_minimized=false;
//---如果这是一个指标, 高度固定且自窗口处于最小化模式,
//    设置指标自窗口的大小
   if(m_height_subwindow_mode)
      if(m_rollup_subwindow_mode)
         ChangeSubwindowHeight(m_subwindow_height);
  }
```

现在, 我们必须再多创建一个方法, 可以接受图表事件中字符串类型的参数. 将会检查被点击对象的名称, 会在第三方 **CWindow::CloseWindow** () 方法中实现的方法类似. 根据点击了那个按钮, 再考虑对应的方法. 让我们把这个方法命名为 **CWindow::ChangeWindowState** ()方法. 增加声明, 实现调用图形事件处理函数, **CWindow** 类的代码显示如下:

```
class CWindow: public CElement
  {
public:
   //--- 修改窗口状态
   bool              ChangeWindowState(const string pressed_object);
  };
//+------------------------------------------------------------------+
//| 图表事件处理函数                                                    |
//+------------------------------------------------------------------+
void CWindow::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理点击一个对象的事件
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 最小化/最大化窗口
      ChangeWindowState(sparam);
      return;
     }
  }
//+------------------------------------------------------------------+
//| 检查窗口最小化/最大化事件                                           |
//+------------------------------------------------------------------+
bool CWindow::ChangeWindowState(const string pressed_object)
  {
//--- 如果点击了"最小化窗口"的按钮
   if(pressed_object==m_button_rollup.Name())
     {
      RollUp();
      return(true);
     }
//--- 如果点击了"最大化窗口"的按钮
   if(pressed_object==m_button_unroll.Name())
     {
      Unroll();
      return(true);
     }
//---
   return(false);
  }
```

编译好您做过修改的文件, 程序就可以用来测试了. 期待的结果是我们可以最小化/最大化控件的窗口. 屏幕截图显示的是最小化窗口模式的表单:

![图 3. 测试窗口功能](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-17_niehv.rne "图 3. 测试窗口功能")
![[Pasted image 20260628182301.png]]
图 3. 测试窗口的功能

它可以工作使用控件窗口可以在图表中移动, 根据设计的功能, 每个对象对鼠标光标都能有所回应, 按钮也能按照设计的功能正常工作.

### 删除界面元件

如果您按照本文中推荐的那样, 跟随了一系列操作并到达了这一点, 您将会看到, 当EA交易被从图表上删除后, 图形界面的对象也会被删除. 我们还没有讨论过从图表上删除图形对象的方法. 为什么当EA交易被删除后, 这些对象也要删除?这是在标准库中包含的, 更加明确一点, 在 [CChartObject](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Fahcrv_mbheat%5Dcnaqsgs-cahcrvo%60jgcv) 类的析构函数中, 我们的界面库中有它的派生类. 当程序被从图表上删除时, 将会调用各个类的析构函数, 也包含了这个类. 如果一个对象附加到图表, 它就被删除:

```
//+------------------------------------------------------------------+
//| 析构函数                                                          |
//+------------------------------------------------------------------+
CChartObject::~CChartObject(void)
  {
   if(m_chart_id!=-1)
      ::ObjectDelete(m_chart_id,m_name);
  }
```

如果图表的交易品种或者时段修改了, 析构函数就不会被调用, 图形界面也不会被删除. 因为图形界面是在主程序文件中的 [OnInit](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnknkt) () 初始化函数中进行的, 而在改变交易品种或者EA交易的时段时会进行去初始化然后再初始化, 图形界面会在已有基础上再创建一个. 结果, 这样就有了两份复制的对象. 如果您继续改变图表交易品种或者时段, 您就会有很多份界面对象的拷贝.

![图 4. 当切换图表交易品种和时段时的表单测试.](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F01-14_niehv.rne "图 4. 当切换图表交易品种和时段时的表单测试.")
![[Pasted image 20260628182314.png]]
图 4. 当切换图标交易品种和时段时的表单测试

我们必须在我们开发的函数库中解决这个问题, 也就是说我们必须确认在程序去初始化时, 所有的图形对象都被删除. 另外, 所有包含这些对象指针的数组也要被清空, 它们在维度上的大小要清零. 在做完这些之后, 在初始化的时候, 对象的设置就会是正确的了, 而不是克隆出来. 现在, 我们将实现这种机制.

在 **CElemenet** 类中声明 **Delete** () 虚方法. 每个从 **CElement** 类派生出来的类都对此方法有自己的实现. 之前在 **CWindow** 类中已经有了 **Delete** () 方法的声明. 现在, 我们只需要实现这个方法(参见以下代码). 在这个方法中, 一些变量被清零, 所有控件对象被删除, 在基类中对象指针的数组被清空.

```
//+------------------------------------------------------------------+
//| 删除                                                             |
//+------------------------------------------------------------------+
void CWindow::Delete(void)
  {
//--- 变量清零
   m_right_limit=0;
//--- 删除对象
   m_bg.Delete();
   m_caption_bg.Delete();
   m_icon.Delete();
   m_label.Delete();
   m_button_close.Delete();
   m_button_rollup.Delete();
   m_button_unroll.Delete();
   m_button_tooltip.Delete();
//--- 清空对象数组
   CElement::FreeObjectsArray();
//--- 控件焦点清零
   CElement::MouseFocus(false);
  }
```

访问可以从 **CWndEvents** 类中得到的所有界面控件的 **Delete** () 方法. 这样, 我们就可以创建 **CWndEvents::Destroy** () 方法来删除图形界面了. 在所有表单的这个方法中, 循环调用每个控件的 **Delete** () 方法. 在调用 **Delete** () 方法之前, 要检查指针的有效性. 在删除了所有对象之后, 控件数组必须被清空. 在离开循环以后, 它们的数组必须也被清空.

以下代码显示了 **CWndEvents::Destroy** () 方法的声明和实现:

```
class CWndEvents : public CWndContainer
  {
protected:
   //--- 删除界面
   void              Destroy(void);
  };
//+------------------------------------------------------------------+
//| 删除全部对象                                                       |
//+------------------------------------------------------------------+
void CWndEvents::Destroy(void)
  {
   int window_total=CWndContainer::WindowsTotal();
   for(int w=0; w<window_total; w++)
     {
      int elements_total=CWndContainer::ElementsTotal(w);
      for(int e=0; e<elements_total; e++)
        {
         //--- 如果指针无效, 则转到下一个
         if(::CheckPointer(m_wnd[w].m_elements[e])==POINTER_INVALID)
            continue;
         //--- 删除控件对象
         m_wnd[w].m_elements[e].Delete();
        }
      //--- 清空控件数组
      ::ArrayFree(m_wnd[w].m_objects);
      ::ArrayFree(m_wnd[w].m_elements);
     }
//--- 清空表单数组
   ::ArrayFree(m_wnd);
   ::ArrayFree(m_windows);
  }
```

现在, 在主程序文件中, 在 [CProgram::OnDeinitEvent](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2F%60aqiq%2Fdulcvimn-eteltq%23mnfeknkt) ()方法中调用 **Destroy** () 方法, 而它是与 **OnDeinit** () 函数相联系的. 代码显示如下:

```
//+------------------------------------------------------------------+
//| 去初始化                                                          |
//+------------------------------------------------------------------+
void CProgram::OnDeinitEvent(const int reason)
  {
   //--- 删除界面
   CWndEvents::Destroy();  
  }
```

编译近期修改过的库文件以及主程序文件. 把EA交易载入到图表上并改变几次图表的交易品种和时段. 现在应该一切工作正常了. 再也不会出现对象的克隆了. 问题解决了.

### 结论

在下一章中, 我们将会测试表单在不同类型程序中的运行情况, 例如指标和脚本. 我们将会在 **MetaTrader 4** 终端上进行测试, 因为我们最初创建这个界面库就是为了创建跨平台的图形界面.

您可以在以下的第一部分中下载和测试来看它如何工作. 如果您对使用这些文件中的资料有疑问, 您可以参考这个列表中界面库开发文章的对应部分, 或者在文章注释部分提出您的问题.

**第一部分的文章(章节)列表:**

- [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)
- [图形界面 I: 用于控件的表单 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)
- [图形界面 I: 图形界面的动画 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)
- [图形界面 I: 用于表单按钮的函数与删除界面元素 (第四章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0108)
- 图形界面 I: 在MetaTrader 4终端中使用不同类型的程序来测试界面库 (第五章)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2128](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0108)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3A.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3A%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (51.67 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-232%3A%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (51.59 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[图形界面 I：库结构(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105)

本文是另外一系列图形界面开发相关文章的开端。当前，还没有能够在MQL应用中快速而便捷的创建高质量图形界面的独立代码库。我所说图形界面是指我们熟悉的操作系统中的图形界面。

[图形界面 I: 图形界面的动画 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0107)

在前面的文章中, 我们开始开发了一个容纳控件的表单类. 在本文中, 我们将继续丰富此表单类的内容, 增加在图表区域内移动表单的方法. 接着我们会把这个界面组件与核心库整合. 而且我们会实现这样的功能, 在鼠标光标移动到表单之上时, 表单控件会改变它的颜色.

[图形界面 I：控件构成(第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0106)

在本文中我们将创建第一个图形界面的主元素 — 控件的一个窗体。多个控件可以以任何组合被附加到此窗体的任何地方。

[在指标中添加声音提醒](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3468)

如何为日常使用创建"语音"指标。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2Fi9u0fk2m%7Bftbl963x2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dtpafe%2Cmgtctpafep5%2Ccmm'2D%26c%3Dea%7Blajzatodaibmswthtsapqmxjiumqe%24s%3F7a3ab7d266b%3Aag7c02f23g57d40%3A3ab27c8f0653171cc367270%3B7514c3b6a%3A54%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0108%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>