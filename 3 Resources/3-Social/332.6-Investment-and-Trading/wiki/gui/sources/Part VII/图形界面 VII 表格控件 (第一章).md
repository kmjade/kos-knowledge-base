---
title: "图形界面 VII: 表格控件 (第一章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-09-14T10:57:57+00:00Z
created: 2026-06-28
description: "MetaTrader 图形界面系列的第七部分处理的是三种表格类型：文本标签型，编辑框型，以及绘制型。另一种重要并且常用的控件是页面，它使您可以显示/隐藏成组的其他控件并且在您的MQL应用程序中开发有效利用空间的界面。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc2)
- [文本标签型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc3)
- [开发 CLabelsTable 类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!cna%60ensva%60lg)
	- [测试文本标签型表格](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc5)
- [编辑框型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc6)
- [绘制型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc9)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc10)

### 简介

第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了库的目标. 您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

本文开发了三个类，使您可以创建不同类型的表格在MQL应用程序图形界面中显示二维数据集:

- 文本标签型表格;
- 编辑框型表格;
- 绘制型表格。

每个表格类型都有其自己的特性和优点，在下面会有描述。

在下一篇文章中(部分 VII, 第二章), 我们将描述以下控件:

- 页面;
- 带有图形的页面。

### 文本标签型表格控件

表格是一种复杂的图形界面控件，因为它包含了其它的控件 - 水平和垂直滚动条。因为数据可能会超出控件指定的区域，滚动条可以使您在垂直和水平方向上移动显示的数据。

文本标签型表格包含以下的组件:

1. 背景.
2. 文本标签.
3. 垂直滚动条.
4. 水平滚动条.

![图 1. 文本标签型表格的组成部分](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-03_%5D4%2Cjrg "图 1. 文本标签型表格的组成部分")
![[Pasted image 20260628221626.png]]
图 1. 文本标签型表格控件的组成部分

让我们仔细研究一下此控件的类。

### 开发 CLabelsTable 类

创建 **LabelsTable.mqh** 文件并且在库中(**WndContainer.mqh**)包含它:

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              https://www.mql5.com |
//+------------------------------------------------------------------+
#include "LabelsTable.mqh"
```

在 **LabelsTable.mqh** 文件中, 创建 **CLabelsTable** 类的库中每个控件都应该存在的标准方法，以及用于保存指向控件所连接表单的指针的方法。在目前的文章中所做的和所有控件都一样。

```
//+------------------------------------------------------------------+
//| 用于创建文字标签型表格的类                         |
//+------------------------------------------------------------------+
class CLabelsTable : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CLabelsTable(void);
                    ~CLabelsTable(void);
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
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CLabelsTable::CLabelsTable(void)
  {
  }
//+------------------------------------------------------------------+
//| 析构函数                                |
//+------------------------------------------------------------------+
CLabelsTable::~CLabelsTable(void)
  {
  }
```

在创建表格之前，设置它的一些属性。让我们命名它们。

- 行高
- 第一列从控件左边缘的缩进
- 列间距离
- 背景颜色
- 文字颜色
- 第一行的锁定模式
- 第一列的锁定模式
- 总列数
- 总行数
- 表格可见部份的列数
- 表格可见部份的行数

在这种表格类型中，文本标签的坐标是根据中心锚点计算的([ANCHOR\_CENTER](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Dalcjoppmilt))，就是说，第一列中文字标签相对左方边缘的缩进，以及每列中文字标签之间的距离都是根据它们每个中心点来计算的。

对于锁定模式，可能会需要表格的第一行和/或第一列(用户设置每列和/或数据序列名称的地方)在所有的时候都可见，即使当水平和/或垂直滚动条的滑块以及离开了第一的位置时也要可见。表头的锁定模式可以一起使用也可以分开使用。

```
class CLabelsTable : public CElement
  {
private:
   //--- 每行高度
   int               m_row_y_size;
   //--- 表格背景颜色
   color             m_area_color;
   //--- 表格文字的默认颜色
   color             m_text_color;
   //--- 第一列的中心锚点与控件左方边缘的距离
   int               m_x_offset;
   //--- 列间锚点的距离
   int               m_column_x_offset;
   //--- 第一行的锁定模式
   bool              m_fix_first_row;
   //--- 第一列的锁定模式
   bool              m_fix_first_column; 
   //--- 鼠标左键点击优先级
   int               m_zorder;
   int               m_area_zorder;
   //---
public:
   //--- (1) 背景颜色, (2) 文字颜色
   void              AreaColor(const color clr)                   { m_area_color=clr;                }
   void              TextColor(const color clr)                   { m_text_color=clr;                }
   //--- (1) 行的高度, (2) 设置第一列锚点与表格左方边缘的距离,
   //    (3) 设置列间锚点的距离
   void              RowYSize(const int y_size)                   { m_row_y_size=y_size;             }
   void              XOffset(const int x_offset)                  { m_x_offset=x_offset;             }
   void              ColumnXOffset(const int x_offset)            { m_column_x_offset=x_offset;      }
   //--- (1) 读取 和 (2) 设置第一行的锁定模式
   bool              FixFirstRow(void)                      const { return(m_fix_first_row);         }
   void              FixFirstRow(const bool flag)                 { m_fix_first_row=flag;            }
   //--- (1) 读取 和 (2) 设置第一列的锁定模式
   bool              FixFirstColumn(void)                   const { return(m_fix_first_column);      }
   void              FixFirstColumn(const bool flag)              { m_fix_first_column=flag;         }
  };
```

让我们创建 **CLabelsTable::TableSize** () 和 **CLabelsTable::VisibleTableSize** () 方法用于设置表格中可见的列与行的总的数目。另外，我们需要二维动态数组的结构形式，其中一个结构 (**LTLabels**)创建表格可见部份的文字标签数组，另一个结构(**LTOptions**)保存每个表格单元的数值和属性。在我们的实现中，它将保存显示的值(在行中)和文字的颜色。

对 **CLabelsTable::TableSize** () 和 **CLabelsTable::VisibleTableSize** () 方法应该传入两个参数(列和行的编号)。传入的数值在方法的开头会做修正，以防列数小于1而行数小于2。所有数组的大小和数组的属性在初始化后都要定义，

除了表格大小的方法之外，我们还需要用于取得表格总的和可见的行与列的大小的方法。

```
class CLabelsTable : public CElement
  {
private:
   //--- 表格可见部分的对象数组
   struct LTLabels
     {
      CLabel            m_rows[];
     };
   LTLabels          m_columns[];
   //--- 表格数值和属性的数组
   struct LTOptions
     {
      string            m_vrows[];
      color             m_colors[];
     };
   LTOptions         m_vcolumns[];
   //---
public:
   //--- 返回 (1) 行 和(2) 列 的总数
   int               RowsTotal(void)                        const { return(m_rows_total);            }
   int               ColumnsTotal(void)                     const { return(m_columns_total);         }
   //--- 返回表格中可见部份的 (1) 行 和 (2) 列 的总数
   int               VisibleRowsTotal(void)                 const { return(m_visible_rows_total);    }
   int               VisibleColumnsTotal(void)              const { return(m_visible_columns_total); }

   //--- 设置 (1) 表格的大小 和 (2) 可见部份的大小
   void              TableSize(const int columns_total,const int rows_total);
   void              VisibleTableSize(const int visible_columns_total,const int visible_rows_total);
  };
//+------------------------------------------------------------------+
//| 设置表格的大小                                  |
//+------------------------------------------------------------------+
void CLabelsTable::TableSize(const int columns_total,const int rows_total)
  {
//--- 必须至少有一列
   m_columns_total=(columns_total<1) ? 1 : columns_total;
//--- 必须至少有两行
   m_rows_total=(rows_total<2) ? 2 : rows_total;
//--- 设置列数组的大小
   ::ArrayResize(m_vcolumns,m_columns_total);
//--- 设置行数组的大小
   for(int i=0; i<m_columns_total; i++)
     {
      ::ArrayResize(m_vcolumns[i].m_vrows,m_rows_total);
      ::ArrayResize(m_vcolumns[i].m_colors,m_rows_total);
      //--- 使用默认值初始化文字颜色数组
      ::ArrayInitialize(m_vcolumns[i].m_colors,m_text_color);
     }
  }
//+------------------------------------------------------------------+
//| 设置表格可见部份的大小                             |
//+------------------------------------------------------------------+
void CLabelsTable::VisibleTableSize(const int visible_columns_total,const int visible_rows_total)
  {
//--- 必须至少有一列
   m_visible_columns_total=(visible_columns_total<1) ? 1 : visible_columns_total;
//--- 必须至少有两行
   m_visible_rows_total=(visible_rows_total<2) ? 2 : visible_rows_total;
//--- 设置列数组的大小
   ::ArrayResize(m_columns,m_visible_columns_total);
//--- 设置行数组的大小
   for(int i=0; i<m_visible_columns_total; i++)
      ::ArrayResize(m_columns[i].m_rows,m_visible_rows_total);
  }
```

在创建控件之前，所有的属性都应该使用默认值初始化，我建议在类的构造函数中做这些工作:

```
//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                  |
//+------------------------------------------------------------------+
CLabelsTable::CLabelsTable(void) : m_fix_first_row(false),
                                   m_fix_first_column(false),
                                   m_row_y_size(18),
                                   m_x_offset(30),
                                   m_column_x_offset(60),
                                   m_area_color(clrWhiteSmoke),
                                   m_text_color(clrBlack),
                                   m_rows_total(2),
                                   m_columns_total(1),
                                   m_visible_rows_total(2),
                                   m_visible_columns_total(1)
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击的优先级
   m_zorder      =0;
   m_area_zorder =1;
//--- 设置表格和它可见部分的大小
   TableSize(m_columns_total,m_rows_total);
   VisibleTableSize(m_visible_columns_total,m_visible_rows_total);
  }
```

在开发控件的过程中，让我们创建四个 **私有(private)** 和一个 **公有(public)** 方法用于从外部调用,为了允许用户配置表格的滚动条，我们应该加上返回它们指针的方法。

```
class CLabelsTable : public CElement
  {
private:
   //--- 创建表格的对象
   CRectLabel        m_area;
   CScrollV          m_scrollv;
   CScrollH          m_scrollh;
   //--- 表格可见部分的对象数组
   struct LTLabels
     {
      CLabel            m_rows[];
     };
   LTLabels          m_columns[];
   //---
public:
   //--- 返回滚动条的指针
   CScrollV         *GetScrollVPointer(void)                const { return(::GetPointer(m_scrollv)); }
   CScrollH         *GetScrollHPointer(void)                const { return(::GetPointer(m_scrollh)); }
   //--- 用于创建表格的方法
   bool              CreateLabelsTable(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateArea(void);
   bool              CreateLabels(void);
   bool              CreateScrollV(void);
   bool              CreateScrollH(void);
  };
```

在所有创建对象的方法中，在此只展示用于创建文字标签数组的 **CLabelsTable::CreateLabels** ()方法。请确保在构建对象名称时加上列和行的索引。所有其他方法都可以在附件的文件中找到。

```
//+------------------------------------------------------------------+
//| 创建文字标签的数组                            |
//+------------------------------------------------------------------+
bool CLabelsTable::CreateLabels(void)
  {
//--- 坐标和偏移
   int x      =CElement::X();
   int y      =0;
   int offset =0;
//--- 列
   for(int c=0; c<m_visible_columns_total; c++)
     {
      //--- 计算表格偏移
      offset=(c>0) ? m_column_x_offset : m_x_offset;
      //--- 计算X坐标
      x=x+offset;
      //--- 行
      for(int r=0; r<m_visible_rows_total; r++)
        {
         //--- 构建对象名称
         string name=CElement::ProgramName()+"_labelstable_label_"+(string)c+"_"+(string)r+"__"+(string)CElement::Id();
         //--- 计算 Y 坐标
         y=(r>0) ? y+m_row_y_size-1 : CElement::Y()+10;
         //--- 创建对象
         if(!m_columns[c].m_rows[r].Create(m_chart_id,name,m_subwin,x,y))
            return(false);
         //--- 设置属性
         m_columns[c].m_rows[r].Description(m_vcolumns[c].m_vrows[r]);
         m_columns[c].m_rows[r].Font(FONT);
         m_columns[c].m_rows[r].FontSize(FONT_SIZE);
         m_columns[c].m_rows[r].Color(m_text_color);
         m_columns[c].m_rows[r].Corner(m_corner);
         m_columns[c].m_rows[r].Anchor(ANCHOR_CENTER);
         m_columns[c].m_rows[r].Selectable(false);
         m_columns[c].m_rows[r].Z_Order(m_zorder);
         m_columns[c].m_rows[r].Tooltip("\n");
         //--- 与表单边缘的距离
         m_columns[c].m_rows[r].XGap(x-m_wnd.X());
         m_columns[c].m_rows[r].YGap(y-m_wnd.Y());
         //--- 坐标
         m_columns[c].m_rows[r].X(x);
         m_columns[c].m_rows[r].Y(y);
         //--- 保存对象指针
         CElement::AddToArray(m_columns[c].m_rows[r]);
        }
     }
//---
   return(true);
  }
```

在表格创建完毕后，我们将需要用于在任何时候修改表格中任意单元的值和属性的方法，让我们写下 **CLabelsTable::SetValue** () 和 **CLabelsTable::GetValue** () 方法用于修改和接收单元的数值。对于这两个方法，前两个参数都是表格的列和行。在 **CLabelsTable::SetValue** ()方法中的第三个参数是将要按照指定索引放到数组中的值。在方法的开头要强制检查是否超出了数组的范围。

```
class CLabelsTable : public CElement
  {
public:
   //--- 设置指定表格单元的值
   void              SetValue(const int column_index,const int row_index,const string value);
   //--- 取得指定表格单元的值
   string            GetValue(const int column_index,const int row_index);
  };
//+------------------------------------------------------------------+
//| 设置指定索引的值                               |
//+------------------------------------------------------------------+
void CLabelsTable::SetValue(const int column_index,const int row_index,const string value)
  {
//--- 检查是否超出了列的范围
   int csize=::ArraySize(m_vcolumns);
   if(csize<1 || column_index<0 || column_index>=csize)
      return;
//--- 检查是否超出了行的范围
   int rsize=::ArraySize(m_vcolumns[column_index].m_vrows);
   if(rsize<1 || row_index<0 || row_index>=rsize)
      return;
//--- 设置值
   m_vcolumns[column_index].m_vrows[row_index]=value;
  }
//+------------------------------------------------------------------+
//| 返回指定索引的值                             |
//+------------------------------------------------------------------+
string CLabelsTable::GetValue(const int column_index,const int row_index)
  {
//--- 检查是否超出了列的范围
   int csize=::ArraySize(m_vcolumns);
   if(csize<1 || column_index<0 || column_index>=csize)
      return("");
//--- 检查是否超出了行的范围
   int rsize=::ArraySize(m_vcolumns[column_index].m_vrows);
   if(rsize<1 || row_index<0 || row_index>=rsize)
      return("");
//--- 返回值
   return(m_vcolumns[column_index].m_vrows[row_index]);
  }
```

除了修改表格的数值，用户也许还想修改文字的颜色。例如，正的数值以绿色显示，而负数以红色显示。让我们为此实现 **CLabelsTable::TextColor** ()方法，它与 **CLabelsTable::SetValue** ()类似，唯一的区别就是颜色作为第三个参数。

```
class CLabelsTable : public CElement
  {
public:
   //--- 修改指定表格单元的文字颜色
   void              TextColor(const int column_index,const int row_index,const color clr);
  };
//+------------------------------------------------------------------+
//| 修改指定索引的颜色                          |
//+------------------------------------------------------------------+
void CLabelsTable::TextColor(const int column_index,const int row_index,const color clr)
  {
//--- 检查是否超出了列的范围
   int csize=::ArraySize(m_vcolumns);
   if(csize<1 || column_index<0 || column_index>=csize)
      return;
//--- 检查是否超出了行的范围
   int rsize=::ArraySize(m_vcolumns[column_index].m_vrows);
   if(rsize<1 || row_index<0 || row_index>=rsize)
      return;
//--- 设置颜色
   m_vcolumns[column_index].m_colors[row_index]=clr;
  }
```

实现的变化只有在表格更新之后才能显示出来。为此，我们应当创建一个统一的方法，它也可以用于把表格的数据移动到相对于滚动条滑块的位置。

让我们把这个方法命名为 **CLabelsTable::UpdateTable** ()。如果表头被锁定，数据会从数组索引2开始偏移，以确保第一行永远在顶部以及/或者最左边的列永远在最左边。在这个方法的开头，声明了 *t* 和 *l* 变量，并且根据当前使用的模式为它们赋值1或者0。

为了定义索引，即从何处开始移动/更新数据，需要取得滚动条滑块当前的位置。在左侧列和顶部行的表头部分是在独立的循环中移动的(如果启用了锁定模式的话)，

表格的基本数据和单元的颜色在方法的末尾在双重循环中移动。

```
class CLabelsTable : public CElement
  {
public:
   //--- 根据最近的变化更新表格数据
   void              UpdateTable(void);
  };
//+------------------------------------------------------------------+
//| 根据最近的变化更新表格数据                                     |
//+------------------------------------------------------------------+
void CLabelsTable::UpdateTable(void)
  {
//--- 如果启用了固定表头模式，偏移一个索引
   int t=(m_fix_first_row) ? 1 : 0;
   int l=(m_fix_first_column) ? 1 : 0;
//--- 取得垂直和水平滚动条滑块的当前位置
   int h=m_scrollh.CurrentPos()+l;
   int v=m_scrollv.CurrentPos()+t;
//--- 在左侧列中移动表头
   if(m_fix_first_column)
     {
      m_columns[0].m_rows[0].Description(m_vcolumns[0].m_vrows[0]);
      //--- 行
      for(int r=t; r<m_visible_rows_total; r++)
        {
         if(r>=t && r<m_rows_total)
            m_columns[0].m_rows[r].Description(m_vcolumns[0].m_vrows[v]);
         //---
         v++;
        }
     }
//--- 在顶部行中移动表头
   if(m_fix_first_row)
     {
      m_columns[0].m_rows[0].Description(m_vcolumns[0].m_vrows[0]);
      //--- 列
      for(int c=l; c<m_visible_columns_total; c++)
        {
         if(h>=l && h<m_columns_total)
            m_columns[c].m_rows[0].Description(m_vcolumns[h].m_vrows[0]);
         //---
         h++;
        }
     }
//--- 取得水平滚动条滑块的当前位置
   h=m_scrollh.CurrentPos()+l;
//--- 列
   for(int c=l; c<m_visible_columns_total; c++)
     {
      //--- 取得垂直滚动条滑块的当前位置
      v=m_scrollv.CurrentPos()+t;
      //--- 行
      for(int r=t; r<m_visible_rows_total; r++)
        {
         //--- 移动表格数据
         if(v>=t && v<m_rows_total && h>=l && h<m_columns_total)
           {
            //--- 颜色的调整
            m_columns[c].m_rows[r].Color(m_vcolumns[h].m_colors[v]);
            //--- 值的调整
            m_columns[c].m_rows[r].Description(m_vcolumns[h].m_vrows[v]);
            v++;
           }
        }
      //---
      h++;
     }
  }
```

让我们实现当鼠标左键在滚动条按钮上持续按下时表格的快进功能，这与在输入框和列表控件中所做的类似。不需要在此展示 **CLabelsTable::FastSwitching** ()方法的代码了，因为它与之前文章中在 **CListView**, **CSpinEdit** 和 **CCheckBoxEdit** 类中同名的方法非常接近，

处理控件事件的代码如下所示:

```
//+------------------------------------------------------------------+
//| 事件处理函数                               |
//+------------------------------------------------------------------+
void CLabelsTable::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 鼠标左键的坐标和状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      //--- 检查表格的焦点
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 如果滑轨管理被启用，移动列表
      if(m_scrollv.ScrollBarControl(x,y,m_mouse_state) || m_scrollh.ScrollBarControl(x,y,m_mouse_state))
         UpdateTable();
      //---
      return;
     }
//--- 处理对象的点击
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果在表格滚动条按钮上按下按键
      if(m_scrollv.OnClickScrollInc(sparam) || m_scrollv.OnClickScrollDec(sparam) ||
         m_scrollh.OnClickScrollInc(sparam) || m_scrollh.OnClickScrollDec(sparam))
         //--- 相对滚动条移动表格
         UpdateTable();
      //---
      return;
     }
  }
//+------------------------------------------------------------------+
//| 计时器方法                              |
//+------------------------------------------------------------------+
void CLabelsTable::OnEventTimer(void)
  {
//--- 如果是下拉元件
   if(CElement::IsDropdown())
      FastSwitching();
//--- 如果不是下拉元件，要考虑当前表单是否可用
   else
     {
      //--- 只有在表单没有被屏蔽时进行表格的快进
      if(!m_wnd.IsLocked())
         FastSwitching();
     }
  }
```

表格是一个复杂图形界面控件，所以，指向其他控件的指针(在这种情况下是指水平和垂直滚动条) 应该包含在指针数据库中。我们应该为表格创建自身的指针数组。您可以在 **WndContainer.mqh** 文件中的 **CWndContainer** 类发现这些改变，这个主题在本系列的其他文章中已经介绍过了，所以，我将跳过它而进行文字标签型表格的测试。

### 测试文本标签型表格

为了测试的目的，我们将采用前面文章中的EA交易，只保留其中的主菜单和状态条，为了在MQL应用程序的图形界面中加入文字标签型表格，需要在表单中声明 **CLabelsTable** 类型的类的实例，以及相关的方法 (参见以下代码)。

```
class CProgram : public CWndEvents
  {
private:
   //--- 文字标签型表格
   CLabelsTable      m_labels_table;
   //---
private:
   //--- 文字标签型表格
#define LABELS_TABLE1_GAP_X   (1)
#define LABELS_TABLE1_GAP_Y   (42)
   bool              CreateLabelsTable(void);
  };
```

现在，让我们详细学习 **CProgram::CreateLabelsTable** () 方法的代码。我们需要创建一个表格，包含有 **21** 列和 **100** 行，可见的列数是 **5**, 而可见的行数是 **10** 。我们应当锁定顶部的行和第一列，防止它们被移动。在表格创建完成后，它会以随机数值(从 - **1000** 到 **1000**) 和定义的颜色来填充，正的数值以绿色显示，而负值是红色的。请记住， 要显示最近的改变需要更新表格。

```
//+------------------------------------------------------------------+
//| 创建文字标签型表格                             |
//+------------------------------------------------------------------+
bool CProgram::CreateLabelsTable(void)
  {
#define COLUMNS1_TOTAL (21)
#define ROWS1_TOTAL    (100)
//--- 保存指向表单的指针
   m_labels_table.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+LABELS_TABLE1_GAP_X;
   int y=m_window1.Y()+LABELS_TABLE1_GAP_Y;
//--- 可见的列数和行数
   int visible_columns_total =5;
   int visible_rows_total    =10;
//--- 设置属性
   m_labels_table.XSize(400);
   m_labels_table.XOffset(40);
   m_labels_table.ColumnXOffset(75);
   m_labels_table.FixFirstRow(true);
   m_labels_table.FixFirstColumn(true);
   m_labels_table.TableSize(COLUMNS1_TOTAL,ROWS1_TOTAL);
   m_labels_table.VisibleTableSize(visible_columns_total,visible_rows_total);
//--- 创建表格
   if(!m_labels_table.CreateLabelsTable(m_chart_id,m_subwin,x,y))
      return(false);
//--- 填充表格:
//    第一个单元是空的
   m_labels_table.SetValue(0,0,"-");
//--- 列的表头
   for(int c=1; c<COLUMNS1_TOTAL; c++)
     {
      for(int r=0; r<1; r++)
         m_labels_table.SetValue(c,r,"SYMBOL "+string(c));
     }
//--- 行的头部，文字是右边对齐的
   for(int c=0; c<1; c++)
     {
      for(int r=1; r<ROWS1_TOTAL; r++)
        m_labels_table.SetValue(c,r,"PARAMETER "+string(r));
     }
//--- 数据和表格的格式 (背景和单元的颜色)
   for(int c=1; c<COLUMNS1_TOTAL; c++)
     {
      for(int r=1; r<ROWS1_TOTAL; r++)
         m_labels_table.SetValue(c,r,string(::rand()%1000-::rand()%1000));
     }
//--- 设置表格单元的文字颜色
   for(int c=1; c<m_labels_table.ColumnsTotal(); c++)
      for(int r=1; r<m_labels_table.RowsTotal(); r++)
         m_labels_table.TextColor(c,r,((double)m_labels_table.GetValue(c,r)>=0) ? clrGreen : clrRed);
//--- 更新表格
   m_labels_table.UpdateTable();
//--- 把元件指针加到库中
   CWndContainer::AddToElementsArray(0,m_labels_table);
   return(true);
  }
```

另外，我们应该测试当程序在终端图表上运行时，如何改变表格中的数值。为此，在MQL应用程序类的 **CProgram::OnTimerEvent** ()计时器函数中加入代码，如下所示:

```
//+------------------------------------------------------------------+
//| 计时器方法                              |
//+------------------------------------------------------------------+
void CProgram::OnTimerEvent(void)
  {
   CWndEvents::OnTimerEvent();
//--- 每隔500毫秒更新状态行的第二部分
   static int count=0;
   if(count<500)
     {
      count+=TIMER_STEP_MSC;
      return;
     }
//--- 重置计时器
   count=0;
//--- 改变状态行第二部分的数值
   m_status_bar.ValueToItem(1,::TimeToString(::TimeLocal(),TIME_DATE|TIME_SECONDS));
//--- 在表格中填入数据
   for(int c=1; c<m_labels_table.ColumnsTotal(); c++)
      for(int r=1; r<m_labels_table.RowsTotal(); r++)
         m_labels_table.SetValue(c,r,string(::rand()%1000-::rand()%1000));
//--- 设置表格单元的文字颜色
   for(int c=1; c<m_labels_table.ColumnsTotal(); c++)
      for(int r=1; r<m_labels_table.RowsTotal(); r++)
         m_labels_table.TextColor(c,r,((double)m_labels_table.GetValue(c,r)>=0) ? clrGreen : clrRed);
//--- 更新表格
   m_labels_table.UpdateTable();
  }
```

用于创建文字标签型表格的方法应该在应用程序图形界面的主方法 **CProgram::CreateExpertPanel** () 中调用，以下是此方法精简版的代码:

```
//+------------------------------------------------------------------+
//| 创建EA交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 创建控件表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态行
//--- 文字标签型表格
   if(!CreateLabelsTable())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

现在，可以编译代码并在图表上运行应用程序了，以下屏幕截图显示了结果:

![图 2. 测试文字标签型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-00_%5D1%2Cjrg "图 2. 测试文字标签型表格控件")
![[Pasted image 20260628221725.png]]
图 2. 测试文字标签型表格控件

一切工作正常。现在让我们开发用于创建第二种类型表格的类。

### 编辑框型表格控件

与文字标签型表格不同，编辑框型表格提供了更大的灵活性，也有更多的特性。它不仅允许您修改文字的颜色，而且还可以:

- 设置一个单元的文字对齐模式(左/右/中心);
- 改变背景色和编辑框边框的颜色;
- 如果启用了适当的模式，可以人工修改编辑框内的数值。

所有这些特性使表格对用户更加友好，而且可以用于更大范围的任务。文本标签型表格包含以下的组件:

1. 背景
2. 编辑框
3. 垂直滚动条
4. 水平滚动条

![图 3. 编辑框型表格控件的组成部分](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-01_%5D4%2Cjrg "图 3. 编辑框型表格控件的组成部分")
![[Pasted image 20260628221737.png]]
图 3. 编辑框型表格控件的组成部分

让我们看一下这种表格的代码与前者有何不同。

### 开发 CTable 类

让我们描述表格的属性并突出它与文字标签型表格的不同点，表格可见部分的图形对象数组在此是另外一种类型 – (**CEdit**)，换句话说，它使用编辑框而不是文字标签 (参见以下代码)。

```
class CTable : public CElement
  {
private:
   //--- 表格可见部分的对象数组
   struct TEdits
     {
      CEdit             m_rows[];
     };
   TEdits            m_columns[];
  };
```

在这里，每个单元都有更多唯一的属性，因为该表格允许您设置/修改文字的对齐方式以及编辑框的背景颜色，当然还有文字的颜色。

```
class CTable : public CElement
  {
private:
   //--- 表格值和属性的数组
   struct TOptions
     {
      string            m_vrows[];
      ENUM_ALIGN_MODE   m_text_align[];
      color             m_text_color[];
      color             m_cell_color[];
     };
   TOptions          m_vcolumns[];
  };
```

以下是文字标签表格中没有的模式和特性的列表。

- 可编辑表格模式
- 当鼠标光标掠过时突出显示的模式
- 可选择行的模式
- 行高
- 网格颜色
- 表头背景颜色
- 表头文字颜色
- 当鼠标光标掠过时单元的颜色
- 单元文字的默认颜色
- 默认的单元文字对齐方式
- 突出显示的行的背景色
- 突出显示行的文字颜色

这种表格类型也允许您在第一列和第一行锁定表头，当移动滚动条的滑块时，如果启用了该模式，它们会在原地保留。以下代码提供了设置表格属性的方法的完整列表:

```
class CTable : public CElement
  {
private:
   //--- 表格中行的高度
   int               m_row_y_size;
   //--- (1) 背景颜色 和(2)表格的背景边框颜色
   color             m_area_color;
   color             m_area_border_color;
   //--- 网格颜色
   color             m_grid_color;
   //--- 表头背景颜色
   color             m_headers_color;
   //--- 表头文字颜色
   color             m_headers_text_color;
   //--- 不同状态下单元的颜色
   color             m_cell_color;
   color             m_cell_color_hover;
   //--- 单元文字的默认颜色
   color             m_cell_text_color;
   //--- 被选中行的 (1)背景颜色 和(2)文字颜色
   color             m_selected_row_color;
   color             m_selected_row_text_color;
   //--- 可编辑表格模式
   bool              m_read_only;
   //--- 当鼠标掠过时突出显示的模式
   bool              m_lights_hover;
   //--- 可选择行模式
   bool              m_selectable_row;
   //--- 第一行的锁定模式
   bool              m_fix_first_row;
   //--- 第一列的锁定模式
   bool              m_fix_first_column;
   //--- 编辑框中默认的文字对齐方式
   ENUM_ALIGN_MODE   m_align_mode;
   //---
public:
   //--- (1) 背景色 和 (2) 表格边框颜色
   void              AreaColor(const color clr)                        { m_area_color=clr;                }
   void              BorderColor(const color clr)                      { m_area_border_color=clr;         }
   //--- (1) 读取 和 (2) 设置第一行的锁定模式
   bool              FixFirstRow(void)                           const { return(m_fix_first_row);         }
   void              FixFirstRow(const bool flag)                      { m_fix_first_row=flag;            }
   //--- (1) 读取 和 (2) 设置第一列的锁定模式
   bool              FixFirstColumn(void)                        const { return(m_fix_first_column);      }
   void              FixFirstColumn(const bool flag)                   { m_fix_first_column=flag;         }
   //--- (1) 表头背景色, (2) 表头文字颜色 (3) 表格网格颜色
   void              HeadersColor(const color clr)                     { m_headers_color=clr;             }
   void              HeadersTextColor(const color clr)                 { m_headers_text_color=clr;        }
   void              GridColor(const color clr)                        { m_grid_color=clr;                }
   //--- Y轴上行的大小
   void              RowYSize(const int y_size)                        { m_row_y_size=y_size;             }
   void              CellColor(const color clr)                        { m_cell_color=clr;                }
   void              CellColorHover(const color clr)                   { m_cell_color_hover=clr;          }
   //--- (1) "只读", (2) 当鼠标掠过时突出显示, (3) 可选择行 模式 
   void              ReadOnly(const bool flag)                         { m_read_only=flag;                }
   void              LightsHover(const bool flag)                      { m_lights_hover=flag;             }
   void              SelectableRow(const bool flag)                    { m_selectable_row=flag;           }
   //--- 单元文字对齐方式
   void              TextAlign(const ENUM_ALIGN_MODE align_mode)       { m_align_mode=align_mode;         }
  };
```

以下列出的是设计用来根据列与行的索引设置属性和取得表格单元数值的方法。

- 表格的总的大小(列和行的总数)
- 表格可见部分的大小(可见的列数和行数)
- 单元文字的对齐方式(左/右/中)
- 文字颜色
- 背景颜色
- 设置/修改值
- 获取值

这些方法的代码就没有必要在这里展示了，因为在文字标签型表格的类似方法中已经描述过了。在设置属性之后，要确保通过调用 **CTable::UpdateTable** ()方法来更新表格, 这样变化才能显示出来。

```
class CTable : public CElement
  {
public:
   //--- 设置 (1) 表格的大小 和 (2) 可见部份的大小
   void              TableSize(const int columns_total,const int rows_total);
   void              VisibleTableSize(const int visible_columns_total,const int visible_rows_total);
   //--- 设置 (1)文字的对齐模式, (2)文字颜色, (3)单元背景色
   void              TextAlign(const int column_index,const int row_index,const ENUM_ALIGN_MODE mode);
   void              TextColor(const int column_index,const int row_index,const color clr);
   void              CellColor(const int column_index,const int row_index,const color clr);
   //--- 设置指定表格单元的值
   void              SetValue(const int column_index,const int row_index,const string value);
   //--- 取得指定表格单元的值
   string            GetValue(const int column_index,const int row_index);
   //--- 根据最近的变化更新表格数据
   void              UpdateTable(void);
  };
```

现在，让我们考虑表格的管理方法。它们都是用于内部使用的 **私有(private)** 类方法。它们的功能包括:

- 处理按下表格中的一行；
- 处理在表格的一个单元中输入数值；
- 从对象名称中取得ID;
- 从对象名称中取得列的索引;
- 从对象名称中取得行的索引；
- 突出显示选择的行；
- 当鼠标光标掠过时改变表格行的颜色；
- 表格数据的快速滚动。

让我们从处理按下表格中一行的 **CTable::OnClickTableRow** () 方法开始，在该方法的开始要做几项检查，程序在遇到以下几种情况会退出:

- 启用了可编辑表格模式;
- 一个滚动条是在激活状态 (滑块正在移动);
- 有一个与表格单元无关的鼠标按键按下的事件，这是决定于在对象名称中是否包含程序的名称和表格单元成员关系属性的。
- 控件的ID不匹配， **CTable::IdFromObjectName** ()方法就是用于从对象名称中取得ID的，这个方法在其他控件处已经描述过的。

现在，是时候遍历搜索所有的单元来寻找被按下的单元了，这要根据它的名称，还要考虑到当前表头的锁定模式(第一行)以及当前垂直滚动条的滑块位置。如果找到了按下的单元，行的索引和单元的值就保存到类的栏位中。

如果按下了表头(第一行)，程序就退出此方法，否则，会生成一个自定义消息，它包含了(1) 图表 ID, (2) 事件 ID (**ON\_CLICK\_LIST\_ITEM**), (3) 控件 ID 和 (4) 所选择行的索引。

```
class CTable : public CElement
  {
private:
   //--- 处理按下表格行的事件
   bool              OnClickTableRow(const string clicked_object);
   //--- 根据对象名称取得ID
   int               IdFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 处理按下表格行的事件                         |
//+------------------------------------------------------------------+
bool CTable::OnClickTableRow(const string clicked_object)
  {
//--- 如果启用了可编辑表格模式，就退出
   if(!m_read_only)
      return(false);
//--- 如果滚动条是活动的，就退出
   if(m_scrollv.ScrollState() || m_scrollh.ScrollState())
      return(false);
//--- 如果没有按在表格单元上，就退出
   if(::StringFind(clicked_object,CElement::ProgramName()+"_table_edit_",0)<0)
      return(false);
//--- 从对象名称中取得ID
   int id=IdFromObjectName(clicked_object);
//--- 如果ID不匹配就退出
   if(id!=CElement::Id())
      return(false);
//--- 搜索行的索引
   int row_index=0;
//--- 如果启用了固定表头模式，偏移一个索引
   int t=(m_fix_first_row) ? 1 : 0;
//--- 列
   for(int c=0; c<m_visible_columns_total; c++)
     {
      //--- 取得垂直滚动条滑块的当前位置
      int v=m_scrollv.CurrentPos()+t;
      //--- 行
      for(int r=t; r<m_visible_rows_total; r++)
        {
         //--- 如果没有按在此单元上
         if(m_columns[c].m_rows[r].Name()==clicked_object)
           {
            //--- 保存行的索引
            m_selected_item=row_index=v;
            //--- 保存单元内容
            m_selected_item_text=m_columns[c].m_rows[r].Description();
            break;
           }
         //--- 增加行计数器
         if(v>=t && v<m_rows_total)
            v++;
        }
     }
//--- 如果按在表头上，就退出
   if(m_fix_first_row && row_index<1)
      return(false);
//--- 发送相关消息
   ::EventChartCustom(m_chart_id,ON_CLICK_LIST_ITEM,CElement::Id(),m_selected_item,"");
   return(true);
  }
```

让我们写下 **CTable::OnEndEditCell** () 方法用于处理在可编辑表格模式下在单元中输入数值的过程，程序应该在方法的开始通过几项检查，在下列情况发生时退出此方法:

- 禁用了可编辑表格模式;
- 程序名称或者表格单元成员关系属性不匹配;
- 控件 ID 不匹配。

如果检查通过，我们会使用 **CTable::ColumnIndexFromObjectName** ()和 **CTable::RowIndexFromObjectName** ()辅助方法来取得表格可见部分单元的列和行的索引(图形对象数组索引)。现在，我们应该把当前滚动条滑块的位置加上对象的索引，这样就能获得数据数组的索引，然后，如果启用了锁定表头的模式，并且对象数组索引等于0，我们应该修正行的索引。然后，我们需要检查单元的值是否已经改变，如果改变了，就在相应的数据数组中保存新的值，并且生成自定义消息，其中包含(1) 图表 ID, (2) 事件 ID (**ON\_END\_EDIT**), (3) 控件 ID 以及 (4) 由列和行的索引，当前单元值构成的文字行，文字行中用"\_"字符作为分隔符。

```
class CTable : public CElement
  {
private:
   //--- 处理在表格单元中输入值的事件
   bool              OnEndEditCell(const string edited_object);
   //--- 从对象名称中取得列的索引
   int               ColumnIndexFromObjectName(const string object_name);
   //--- 从对象名称中取得行的索引
   int               RowIndexFromObjectName(const string object_name);
  };
//+------------------------------------------------------------------+
//| 结束单元值编辑的事件                                          |
//+------------------------------------------------------------------+
bool CTable::OnEndEditCell(const string edited_object)
  {
//--- 如果禁用了可编辑表格模式，就退出
   if(m_read_only)
      return(false);
//--- 如果没有按在表格单元上，就退出
   if(::StringFind(edited_object,CElement::ProgramName()+"_table_edit_",0)<0)
      return(false);
//--- 从对象名称中取得ID
   int id=IdFromObjectName(edited_object);
//--- 如果ID不匹配就退出
   if(id!=CElement::Id())
      return(false);
//--- 取得单元的列和行的索引
   int c =ColumnIndexFromObjectName(edited_object);
   int r =RowIndexFromObjectName(edited_object);
//--- 取得数据数组中列和行的索引
   int vc =c+m_scrollh.CurrentPos();
   int vr =r+m_scrollv.CurrentPos();
//--- 如果点击了表头，调整行的索引
   if(m_fix_first_row && r==0)
      vr=0;
//--- 取得输入的值
   string cell_text=m_columns[c].m_rows[r].Description();
//--- 如果单元的值已经有改变
   if(cell_text!=m_vcolumns[vc].m_vrows[vr])
     {
      //--- 在数组中保存值
      SetValue(vc,vr,cell_text);
      //--- 发送相关消息
      ::EventChartCustom(m_chart_id,ON_END_EDIT,CElement::Id(),0,string(vc)+"_"+string(vr)+"_"+cell_text);
     }
//---
   return(true);
  }
//+------------------------------------------------------------------+
//| 从对象名称中取得列的索引                         |
//+------------------------------------------------------------------+
int CTable::ColumnIndexFromObjectName(const string object_name)
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
   if(array_size-3<0)
     {
      ::Print(PREVENTING_OUT_OF_RANGE);
      return(WRONG_VALUE);
     }
//--- 返回项目索引
   return((int)result[array_size-3]);
  }
//+------------------------------------------------------------------+
//| 从对象名称中取得行的索引                         |
//+------------------------------------------------------------------+
int CTable::RowIndexFromObjectName(const string object_name)
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
//--- 返回项目索引
   return((int)result[array_size-2]);
  }
```

**CTable::HighlightSelectedItem** () 方法用于启用了对应模式时，突出显示表格行的内容，突出显示的行的背景色和文字原色与其他行不同。这些可编辑的属性之前已经检查过了，

在这个方法前面有两项检查(参见以下代码)，程序在这样的状况下会退出:

- 启用了表格单元的编辑模式；
- 禁用了突出显示行的模式。

如果检查通过，如果启用了锁定表头的模式，还需要把行和列的索引偏移一个单位。现在，我们应该找到被选中的行，并且在双重循环中，使用两个计数器(行和列)，来把它的单元的背景色和文字颜色设置成相应的颜色，还需要考虑到滚动条滑块的当前位置。数组中的颜色还用于其它行的对象。

```
class CTable : public CElement
  {
private:
   //--- 突出显示被选中的行
   void              HighlightSelectedItem(void);
  };
//+------------------------------------------------------------------+
//| 突出显示被选中的行                         |
//+------------------------------------------------------------------+
void CTable::HighlightSelectedItem(void)
  {
//--- 如果禁用了其中一个模式 ("只读", "行可被选中")，就退出
   if(!m_read_only || !m_selectable_row)
      return;
//--- 如果启用了固定表头模式，偏移一个索引
   int t=(m_fix_first_row) ? 1 : 0;
   int l=(m_fix_first_column) ? 1 : 0;
//--- 取得水平滚动条滑块的当前位置
   int h=m_scrollh.CurrentPos()+l;
//--- 列
   for(int c=l; c<m_visible_columns_total; c++)
     {
      //--- 取得垂直滚动条滑块的当前位置
      int v=m_scrollv.CurrentPos()+t;
      //--- 行
      for(int r=t; r<m_visible_rows_total; r++)
        {
         //--- 移动表格数据
         if(v>=t && v<m_rows_total)
           {
            //--- 考虑到被选中的行而做出调整
            color back_color=(m_selected_item==v) ? m_selected_row_color : m_vcolumns[h].m_cell_color[v];
            color text_color=(m_selected_item==v) ? m_selected_row_text_color : m_vcolumns[h].m_text_color[v];
            //--- 修改单元的文字颜色和背景色
            m_columns[c].m_rows[r].Color(text_color);
            m_columns[c].m_rows[r].BackColor(back_color);
            v++;
           }
        }
      //---
      h++;
     }
  }
```

另一个有用的模式是，当鼠标光标掠过时，突出显示表格行， **CTable::RowColorByHover** () 方法就是用于此功能的。它也包含了几项检查，如果没有通过，程序会退出此方法。在以下状况时会退出:

- 禁用了鼠标光标掠过而突出显示的模式;
- 启用了表格的编辑模式;
- 控件所附加的表单被屏蔽;
- 一个滚动条是活动状态(滑块正在移动)。

如果通过了所有的检查，我们就要在一个双重循环中遍历所有的单元，并且根据鼠标光标掠过的行而改变单元的颜色。唯一的例外是已经突出显示的行，当达到它时，行的计数器会增加，而行的单元颜色不会改变。

```
class CTable : public CElement
  {
private:
   //--- 当鼠标光标掠过时改变表格行的颜色
   void              RowColorByHover(const int x,const int y);
  };
//+-------------------------------------------------------------------+
//| 当鼠标光标掠过时改变表格行的颜色                                   |
//+-------------------------------------------------------------------+
void CTable::RowColorByHover(const int x,const int y)
  {
//--- 如果光标掠过则突出显示的模式被禁止或者表单被屏蔽，则退出
   if(!m_lights_hover || !m_read_only || m_wnd.IsLocked())
      return;
//--- 如果滚动条在移动过程中，则退出
   if(m_scrollv.ScrollState() || m_scrollh.ScrollState())
      return;
//--- 如果启用了固定表头模式，偏移一个索引
   int t=(m_fix_first_row) ? 1 : 0;
   int l=(m_fix_first_column) ? 1 : 0;
//--- 取得水平滚动条滑块的当前位置
   int h=m_scrollh.CurrentPos()+l;
//--- 列
   for(int c=l; c<m_visible_columns_total; c++)
     {
      //--- 取得垂直滚动条滑块的当前位置
      int v=m_scrollv.CurrentPos()+t;
      //--- 行
      for(int r=t; r<m_visible_rows_total; r++)
        {
         //--- 检查以免超出数组范围
         if(v>=t && v<m_rows_total)
           {
            //--- 如果是"只读"模式，启用了行选择的模式，而到达了被选中的行，就跳过
            if(m_selected_item==v && m_read_only && m_selectable_row)
              {
               v++;
               continue;
              }
            //--- 如果是光标掠过的行，把它突出显示
            if(x>m_columns[0].m_rows[r].X() && x<m_columns[m_visible_columns_total-1].m_rows[r].X2() &&
               y>m_columns[c].m_rows[r].Y() && y<m_columns[c].m_rows[r].Y2())
              {
               m_columns[c].m_rows[r].BackColor(m_cell_color_hover);
              }
            //--- 如果光标到了范围之外，恢复默认颜色
            else
              {
               if(v>=t && v<m_rows_total)
                  m_columns[c].m_rows[r].BackColor(m_vcolumns[h].m_cell_color[v]);
              }
            //---
            v++;
           }
        }
      //---
      h++;
     }
  }
```

我们已经讨论了所有的表格管理方法，您可以阅读以下代码中的 **CTable::OnEvent** () 控件事件处理函数的详细内容，请注意， **CTable::HighlightSelectedItem** () 方法在处理垂直滚动条滑块移动之后也会被使用。

```
//+------------------------------------------------------------------+
//| 事件处理函数                               |
//+------------------------------------------------------------------+
void CTable::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理鼠标光标移动事件
   if(id==CHARTEVENT_MOUSE_MOVE)
     {
      //--- 如果元件是隐藏的就退出
      if(!CElement::IsVisible())
         return;
      //--- 鼠标左键的坐标和状态
      int x=(int)lparam;
      int y=(int)dparam;
      m_mouse_state=(bool)int(sparam);
      CElement::MouseFocus(x>X() && x<X2() && y>Y() && y<Y2());
      //--- 如果滚动条是活动的
      if(m_scrollv.ScrollBarControl(x,y,m_mouse_state) || m_scrollh.ScrollBarControl(x,y,m_mouse_state))
         //--- 移动表格
         UpdateTable();
      //--- 突出显示被选中的行
      HighlightSelectedItem();
      //--- 当鼠标光标掠过时改变表格行的颜色
      RowColorByHover(x,y);
      return;
     }
//--- 处理对象的点击
   if(id==CHARTEVENT_OBJECT_CLICK)
     {
      //--- 如果按下表格行
      if(OnClickTableRow(sparam))
        {
         //--- 突出显示被选中的行
         HighlightSelectedItem();
         return;
        }
      //--- 如果按下滚动条按钮
      if(m_scrollv.OnClickScrollInc(sparam) || m_scrollv.OnClickScrollDec(sparam) ||
         m_scrollh.OnClickScrollInc(sparam) || m_scrollh.OnClickScrollDec(sparam))
        {
         //--- 根据最近的变化更新表格数据
         UpdateTable();
         //--- 突出显示被选中的行
         HighlightSelectedItem();
         return;
        }
      return;
     }
//--- 处理输入栏位中数值改变的事件
   if(id==CHARTEVENT_OBJECT_ENDEDIT)
     {
      OnEndEditCell(sparam);
      //--- 重置表格颜色
      ResetColors();
      return;
     }
  }
```

### 测试编辑框型表格

测试编辑框型表格的准备工作已经完成了，让我们复制一份前面测试的EA，并且删除其中与文本标签型表格相关的所有元件，现在，在 **CProgram** 自定义类中创建一个 **CTable** 类型的类的实例，并且声明用于创建表格和设置表格与表单边缘缩进距离的方法:

```
class CProgram : public CWndEvents
  {
private:
   //--- 编辑框型表格
   CTable            m_table;
   //---
private:
   //--- 编辑框型表格
#define TABLE1_GAP_X          (1)
#define TABLE1_GAP_Y          (42)
   bool              CreateTable(void);
  };
```

让我们创建一个由 **100** 个列和 **1000** 行构成的表格，可见的列数是 **6**, 而可见的行数是 **15** 。让我们锁定表格的表头(第一行和第一列), 这样当滚动条滑块移动时它们还会保持在原位，我们还应当启用行选择的模式以及当鼠标光标掠过时突出显示行的模式。

在创建完控件之后，使用数据填充表格的数组并设定格式。例如，让我们对第一列单元的文字应用 [ALIGN\_RIGHT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) (右对齐)对齐方法,使每行单元背景的颜色以"斑马"的风格来设置，而每列的文字使用交替的红色和蓝色设置。另外一定要更新表格以显示变化。

```
//+------------------------------------------------------------------+
//| 创建表格                              |
//+------------------------------------------------------------------+
bool CProgram::CreateTable(void)
  {
#define COLUMNS1_TOTAL (100)
#define ROWS1_TOTAL    (1000)
//--- 保存表单的指针
   m_table.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+TABLE1_GAP_X;
   int y=m_window1.Y()+TABLE1_GAP_Y;
//--- 可见的列数和行数
   int visible_columns_total =6;
   int visible_rows_total    =15;
//--- 在创建之前设置属性
   m_table.XSize(600);
   m_table.RowYSize(20);
   m_table.FixFirstRow(true);
   m_table.FixFirstColumn(true);
   m_table.LightsHover(true);
   m_table.SelectableRow(true);
   m_table.TextAlign(ALIGN_CENTER);
   m_table.HeadersColor(C'255,244,213');
   m_table.HeadersTextColor(clrBlack);
   m_table.GridColor(clrLightGray);
   m_table.CellColorHover(clrGold);
   m_table.TableSize(COLUMNS1_TOTAL,ROWS1_TOTAL);
   m_table.VisibleTableSize(visible_columns_total,visible_rows_total);
//--- 创建控件元件
   if(!m_table.CreateTable(m_chart_id,m_subwin,x,y))
      return(false);
//--- 填充表格:
//    第一个单元是空的
   m_table.SetValue(0,0,"-");
//--- 列的表头
   for(int c=1; c<COLUMNS1_TOTAL; c++)
     {
      for(int r=0; r<1; r++)
         m_table.SetValue(c,r,"SYMBOL "+string(c));
     }
//--- 行的头部，文字是右边对齐的
   for(int c=0; c<1; c++)
     {
      for(int r=1; r<ROWS1_TOTAL; r++)
        {
         m_table.SetValue(c,r,"PARAMETER "+string(r));
         m_table.TextAlign(c,r,ALIGN_RIGHT);
        }
     }
//---  数据和表格的格式(背景和单元颜色)
   for(int c=1; c<COLUMNS1_TOTAL; c++)
     {
      for(int r=1; r<ROWS1_TOTAL; r++)
        {
         m_table.SetValue(c,r,string(c)+":"+string(r));
         m_table.TextColor(c,r,(c%2==0)? clrRed : clrRoyalBlue);
         m_table.CellColor(c,r,(r%2==0)? clrWhiteSmoke : clrWhite);
        }
     }
//--- 更新表格以显示改变
   m_table.UpdateTable();
//--- 把对象加到对象组的总的数组中
   CWndContainer::AddToElementsArray(0,m_table);
   return(true);
  }
```

**CProgram::CreateTable** () 方法应该在应用程序图形界面的主方法中调用 (参见以下的精简版代码):

```
//+------------------------------------------------------------------+
//| 创建EA交易面板                             |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 创建控件表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态行
//--- 编辑框型表格
   if(!CreateTable())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

编译程序并在图表上运行，如果一切正常，我们将得到以下屏幕截图所示的结果:

![图 4. 测试编辑框型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-06_%5D1%2Cjrg "图 4. 测试编辑框型表格控件")
![[Pasted image 20260628221832.png]]
图 4. 测试编辑框型表格控件

一切工作正常。然而，如果您在一个单个的单元中放入了超过 **63** 个字符的文字，文字就不能完整显示出来。所有终端中能够显示的图形对象的文字都有 **63** 个字符的限制，可以使用 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类通过绘图来绕过它，这个类有方法可以没有限制地显示文字。在以下文章中我们已经在绘制一些控件的时候应用了它 (分割线以及上下文菜单):

- [图形界面 II: 分隔线和上下文菜单元件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0222)
- [图形界面 IV: 信息界面元件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327)

因为 **63** 个字符在显示数据时可能经常不够，第三个表格类将使用 [CCanvas](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fqtcnfapdni%60rcr%7B%2Faalvcsercpjias-caalvcs) 类来绘制出来。

### 绘制型表格控件

绘制型表格在每个单元的字符数方面没有限制，另外，每个列的宽度也可以不必改变表格可见部分的宽度就可以修改，这在上面讨论的其他类型的表格中是很难实现的。这样，我们已经注意到了绘制型表格的几个优点:

- 每个单元的字数没有限制;
- 每个列的宽度可以单独设置;
- 创建表格只用到一种类型的对象([OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl))，而不是多种类似文字标签 ([OBJ\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_na%60en)) 或者编辑框([OBJ\_EDIT](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_gdkt))的对象。

文本标签型表格包含以下的组件:

1. 背景
2. 绘制的表格
3. 垂直滚动条
4. 水平滚动条

![图 5. 绘制型表格控件的组成部分](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-07_%5D4%2Cjrg "图 5. 绘制型表格控件的组成部分")
![[Pasted image 20260628221850.png]]
图 5. 绘制型表格控件的组成部分

让我们探讨用于创建此种表格的类的代码。

### 开发 CCanvasTable 类

让我们创建 **CTOptions** 结构来保存表格的值和属性:

```
//+------------------------------------------------------------------+
//| 用于创建绘制型表格的类                         |
//+------------------------------------------------------------------+
class CCanvasTable : public CElement
  {
private:
   //--- 表格值和属性的数组
   struct CTOptions
     {
      string            m_vrows[];
      int               m_width;
      ENUM_ALIGN_MODE   m_text_align;
     };
   CTOptions         m_vcolumns[];
  };
```

当设置表格的基本大小(总的列数和行数)时， **CTOptions** 结构的栏位是使用默认值初始化的，我们将把所有列的宽度设为 **100** 个像素宽，而单元的文字对齐模式为 [ALIGN\_CENTER](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) (中间对齐)。

```
class CCanvasTable : public CElement
  {
public:
   //--- 设置表格的大小
   void              TableSize(const int columns_total,const int rows_total);
  };
//+------------------------------------------------------------------+
//| 设置表格的大小                                  |
//+------------------------------------------------------------------+
void CCanvasTable::TableSize(const int columns_total,const int rows_total)
  {
//--- 必须至少有一列
   m_columns_total=(columns_total<1) ? 1 : columns_total;
//--- 必须至少有两行
   m_rows_total=(rows_total<2) ? 2 : rows_total;
//--- 设置列数组的大小
   ::ArrayResize(m_vcolumns,m_columns_total);
//--- 设置行数组的大小
   for(int i=0; i<m_columns_total; i++)
     {
      ::ArrayResize(m_vcolumns[i].m_vrows,m_rows_total);
      //--- 使用默认值初始化列的属性
      m_vcolumns[i].m_width      =100;
      m_vcolumns[i].m_text_align =ALIGN_CENTER;
     }
  }
```

现在，让我们创建允许在表格大小已经设置的情况下，修改某些列(如有需要)宽度或者文字对齐方式的方法，为此，您需要初始化数组并把它传给对应的方法，例子展示如下。

```
class CCanvasTable : public CElement
  {
public:
   //--- 设置每一列的 (1) 文字对齐方式 和 (2) 宽度
   void              TextAlign(const ENUM_ALIGN_MODE &array[]);
   void              ColumnsWidth(const int &array[]);
  };
//+------------------------------------------------------------------+
//| 填充文字对齐方式的数组                         |
//+------------------------------------------------------------------+
void CCanvasTable::TextAlign(const ENUM_ALIGN_MODE &array[])
  {
   int total=0;
   int array_size=::ArraySize(array);
//--- 如果传入的数组大小为0，退出
   if(array_size<1)
      return;
//--- 调整数值以免数组超出范围
   total=(array_size<m_columns_total)? array_size : m_columns_total;
//--- 在结构中保存数值
   for(int c=0; c<total; c++)
      m_vcolumns[c].m_text_align=array[c];
  }
//+------------------------------------------------------------------+
//| 填充列宽度的数组                           |
//+------------------------------------------------------------------+
void CCanvasTable::ColumnsWidth(const int &array[])
  {
   int total=0;
   int array_size=::ArraySize(array);
//--- 如果传入的数组大小为0，退出
   if(array_size<1)
      return;
//--- 调整数值以免数组超出范围 
   total=(array_size<m_columns_total)? array_size : m_columns_total;
//--- 在结构中保存数值
   for(int c=0; c<total; c++)
      m_vcolumns[c].m_width=array[c];
  }
```

在我们开始创建表格之前，我们应该设置它的总的大小，以及可见部分的大小，相对于指定的参数(所有列的宽度，所有行的高度以及是否有滚动条等）。为此，我们将写下 **CCanvasTable::CalculateTableSize** ()方法，代码如下所示:

```
class CCanvasTable : public CElement
  {
private:
   //--- 表格可见部分的总大小
   int               m_table_x_size;
   int               m_table_y_size;
   int               m_table_visible_x_size;
   int               m_table_visible_y_size;
//---
private:
   //--- 计算表格大小
   void              CalculateTableSize(void);
  };
//+------------------------------------------------------------------+
//| 计算表格大小                              |
//+------------------------------------------------------------------+
void CCanvasTable::CalculateTableSize(void)
  {
//--- 计算表格总的宽度
   m_table_x_size=0;
   for(int c=0; c<m_columns_total; c++)
      m_table_x_size=m_table_x_size+m_vcolumns[c].m_width;
//--- 带有垂直滚动条的表格宽度
   int x_size=(m_rows_total>m_visible_rows_total) ? m_x_size-m_scrollh.ScrollWidth() : m_x_size-2;
//--- 如果所有列的宽度小于表格宽度，使用表格宽度
   if(m_table_x_size<m_x_size)
      m_table_x_size=x_size;
//--- 计算表格的总高度
   m_table_y_size=m_cell_y_size*m_rows_total-(m_rows_total-1);
//--- 设置显示图形部分(表格的可见部分)的边框大小
   m_table_visible_x_size=x_size;
   m_table_visible_y_size=m_cell_y_size*m_visible_rows_total-(m_visible_rows_total-1);
//--- 如果有水平滚动条，调整控件在Y轴上的大小
   int y_size=m_cell_y_size*m_visible_rows_total+2-(m_visible_rows_total-1);
   m_y_size=(m_table_x_size>m_table_visible_x_size) ? y_size+m_scrollh.ScrollWidth()-1 : y_size;
  }
```

在计算完表格大小并创建过画布之后，我们需要开发用于绘制表格网格(边框)和单元文字的方法，为了画出网格，我们将开发 **CCanvasTable::DrawGrid** () 方法。首先，在第一个循环中画出水平网格线，然后，在第二个循环中画出垂直网格线。

```
class CCanvasTable : public CElement
  {
private:
   //--- 网格颜色
   color             m_grid_color;
   //--- 单元的大小(高度)
   int               m_cell_y_size;
//---
public:
   //--- 网格颜色
   void              GridColor(const color clr)           { m_grid_color=clr;                }
//---
private:
   //--- 画网格
   void              DrawGrid(void);
  };
//+------------------------------------------------------------------+
//| 画出网格                              |
//+------------------------------------------------------------------+
void CCanvasTable::DrawGrid(void)
  {
//--- 网格颜色
   uint clr=::ColorToARGB(m_grid_color,255);
//--- 用于绘画的画布大小
   int x_size =m_canvas.XSize()-1;
   int y_size =m_canvas.YSize()-1;
//--- 坐标
   int x1=0,x2=0,y1=0,y2=0;
//--- 水平线
   x1=0;
   y1=0;
   x2=x_size;
   y2=0;
   for(int i=0; i<=m_rows_total; i++)
     {
      m_canvas.Line(x1,y1,x2,y2,clr);
      y2=y1+=m_cell_y_size-1;
     }
//--- 垂直线
   x1=0;
   y1=0;
   x2=0;
   y2=y_size;
   for(int i=0; i<m_columns_total; i++)
     {
      m_canvas.Line(x1,y1,x2,y2,clr);
      x2=x1+=m_vcolumns[i].m_width;
     }
//--- 向右
   x1=x_size;
   y1=0;
   x2=x_size;
   y2=y_size;
   m_canvas.Line(x1,y1,x2,y2,clr);
  }
```

用于画出文字的 **CCanvasTable::DrawText** ()方法比画网格线的方法要复杂，我们不仅要考虑到当前列的文字对齐方式，还要考虑前一列，以正确计算出缩进。我们设置的右对齐和左对齐距离单元边缘的距离是 **10** 个像素点，上方单元边缘的距离将是 **3** 个像素点。方法的代码在以下详细列出:

```
class CCanvasTable : public CElement
  {
private:
   //--- 文字颜色
   color             m_cell_text_color;
//---
public:
   //--- 表格文字的颜色
   void              TextColor(const color clr)           { m_cell_text_color=clr;           }
//---
private:
   //--- 绘制文字
   void              DrawText(void);
  };
//+------------------------------------------------------------------+
//| 绘制文字                              |
//+------------------------------------------------------------------+
void CCanvasTable::DrawText(void)
  {
//--- 用于计算坐标和偏移
   int  x             =0;
   int  y             =0;
   uint text_align    =0;
   int  column_offset =0;
   int  cell_x_offset =10;
   int  cell_y_offset =3;
//--- 文字颜色
   uint clr=::ColorToARGB(m_cell_text_color,255);
//--- 字体属性
   m_canvas.FontSet(FONT,-80,FW_NORMAL);
//--- 列
   for(int c=0; c<m_columns_total; c++)
     {
      //--- 计算第一列的偏移
      if(c==0)
        {
         //--- 基于每个列设置的单元中的文字对齐方式
         switch(m_vcolumns[0].m_text_align)
           {
            //--- 中间对齐
            case ALIGN_CENTER :
               column_offset=column_offset+m_vcolumns[0].m_width/2;
               x=column_offset;
               break;
               //--- 右对齐
            case ALIGN_RIGHT :
               column_offset=column_offset+m_vcolumns[0].m_width;
               x=column_offset-cell_x_offset;
               break;
               //--- 左对齐
            case ALIGN_LEFT :
               x=column_offset+cell_x_offset;
               break;
           }
        }
      //--- 计算除了第一列之外的其他列的偏移
      else
        {
         //--- 基于每个列设置的单元中的文字对齐方式
         switch(m_vcolumns[c].m_text_align)
           {
            //--- 中间对齐
            case ALIGN_CENTER :
               //--- 计算相对前一列的偏移
               switch(m_vcolumns[c-1].m_text_align)
                 {
                  case ALIGN_CENTER :
                     column_offset=column_offset+(m_vcolumns[c-1].m_width/2)+(m_vcolumns[c].m_width/2);
                     break;
                  case ALIGN_RIGHT :
                     column_offset=column_offset+(m_vcolumns[c].m_width/2);
                     break;
                  case ALIGN_LEFT :
                     column_offset=column_offset+m_vcolumns[c-1].m_width+(m_vcolumns[c].m_width/2);
                     break;
                 }
               //---
               x=column_offset;
               break;
               //--- 右对齐
            case ALIGN_RIGHT :
               //--- 计算相对前一列的偏移
               switch(m_vcolumns[c-1].m_text_align)
                 {
                  case ALIGN_CENTER :
                     column_offset=column_offset+(m_vcolumns[c-1].m_width/2)+m_vcolumns[c].m_width;
                     x=column_offset-cell_x_offset;
                     break;
                  case ALIGN_RIGHT :
                     column_offset=column_offset+m_vcolumns[c].m_width;
                     x=column_offset-cell_x_offset;
                     break;
                  case ALIGN_LEFT :
                     column_offset=column_offset+m_vcolumns[c-1].m_width+m_vcolumns[c].m_width;
                     x=column_offset-cell_x_offset;
                     break;
                 }
               //---
               break;
               //--- 左对齐
            case ALIGN_LEFT :
               //--- 计算相对前一列的偏移
               switch(m_vcolumns[c-1].m_text_align)
                 {
                  case ALIGN_CENTER :
                     column_offset=column_offset+(m_vcolumns[c-1].m_width/2);
                     x=column_offset+cell_x_offset;
                     break;
                  case ALIGN_RIGHT :
                     x=column_offset+cell_x_offset;
                     break;
                  case ALIGN_LEFT :
                     column_offset=column_offset+m_vcolumns[c-1].m_width;
                     x=column_offset+cell_x_offset;
                     break;
                 }
               //---
               break;
           }
        }
      //--- 行
      for(int r=0; r<m_rows_total; r++)
        {
         //---
         y+=(r>0) ? m_cell_y_size-1 : cell_y_offset;
         //---
         switch(m_vcolumns[c].m_text_align)
           {
            case ALIGN_CENTER :
               text_align=TA_CENTER|TA_TOP;
               break;
            case ALIGN_RIGHT :
               text_align=TA_RIGHT|TA_TOP;
               break;
            case ALIGN_LEFT :
               text_align=TA_LEFT|TA_TOP;
               break;
           }
         //--- 绘制文字
         m_canvas.TextOut(x,y,m_vcolumns[c].m_vrows[r],clr,text_align);
        }
      //--- 为下一次循环清零Y坐标
      y=0;
     }
  }
```

在前面讨论过的两种类型的表格中，滚动条引起的数据的移动是通过改变表格可见部分的对象的值(文字标签和编辑框)来进行的，在此我们将移动图形上可见的长方形范围，换句话说，表格(图形)的大小等于所有列的宽度和所有行的高度，这是原始图形的大小，在其中我们会移动可见的范围。可见范围的大小可以随时改变，而且是在创建控件的 **CCanvasTable::CreateCells** () 方法之后进行。

可见范围可以通过 [OBJPROP\_XSIZE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) 和 [OBJPROP\_YSIZE](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) 属性设置, 而范围的偏移(在原始图形范围之内) 可以通过设置 [OBJPROP\_XOFFSET](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) 和 [OBJPROP\_YOFFSET](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv_rrmpgrvy) 属性做到(参见以下代码中的实例):

```
//--- 设置可见区域的大小
   ::ObjectSetInteger(m_chart_id,name,OBJPROP_XSIZE,m_table_visible_x_size);
   ::ObjectSetInteger(m_chart_id,name,OBJPROP_YSIZE,m_table_visible_y_size);
//--- 设置边界在图形中X轴和Y轴上的偏移
   ::ObjectSetInteger(m_chart_id,name,OBJPROP_XOFFSET,0);
   ::ObjectSetInteger(m_chart_id,name,OBJPROP_YOFFSET,0);
```

让我们开发一个简单方法 **CCanvasTable::ShiftTable** () 来相对当前滚动条滑块的位置移动可见范围，垂直移动的步长等于行的高度，而水平步长单位是像素点(参见以下代码):

```
class CCanvasTable : public CElement
  {
public:
   //--- 相对滚动条位置移动表格
   void              ShiftTable(void);
  };
//+------------------------------------------------------------------+
//| 相对滚动条位置移动表格                         |
//+------------------------------------------------------------------+
void CCanvasTable::ShiftTable(void)
  {
//--- 取得垂直和水平滚动条滑块的当前位置
   int h=m_scrollh.CurrentPos();
   int v=m_scrollv.CurrentPos();
//--- 计算表格相对滚动条滑块的位置
   long c=h;
   long r=v*(m_cell_y_size-1);
//--- 移动表格
   ::ObjectSetInteger(m_chart_id,m_canvas.Name(),OBJPROP_XOFFSET,c);
   ::ObjectSetInteger(m_chart_id,m_canvas.Name(),OBJPROP_YOFFSET,r);
  }
```

用于绘制表格的通用的 **CCanvasTable::DrawTable** () 方法的代码如下所示:

```
class CCanvasTable : public CElement
  {
public:
   //--- 考虑到最近的变化而绘制表格
   void              DrawTable(void);
  };
//+------------------------------------------------------------------+
//| 绘制表格                              |
//+------------------------------------------------------------------+
void CCanvasTable::DrawTable(void)
  {
//--- 使背景透明
   m_canvas.Erase(::ColorToARGB(clrNONE,0));
//--- 画网格
   DrawGrid();
//--- 画文字
   DrawText();
//--- 显示最近的改变
   m_canvas.Update();
//--- 相对滚动条偏移表格
   ShiftTable();
  }
```

现在，测试这种类型表格的准备已经完成。

### 测试绘制型表格

让我们复制一份之前测试的EA，并且删除其中与 **CTable** 表格类型有关的所有元件，现在，在 **CProgram** 自定义类中创建 **CCanvasTable** 类型的类的实例，并声明 (1) **CProgram::CreateCanvasTable** () 方法，用于创建表格，以及 (2) 设置距离表单边界距离的方法，代码如下所示:

```
class CProgram : public CWndEvents
  {
private:
   //--- 绘制型表格
   CCanvasTable      m_canvas_table;
   //---
private:
   //--- 绘制型表格
#define TABLE1_GAP_X          (1)
#define TABLE1_GAP_Y          (42)
   bool              CreateCanvasTable(void);
  };
```

让我们创建一个包含 **15** 列和 **1000** 行的表格，可见的行数将等于 **16** ，我们不用设置可见的列数，因为水平方向的偏移是根据像素点数量而进行的，在这种情况下，表格可见区域的宽度应该明确指定，让我们将它设为 **601** 个像素。

作为例子，让我们把所有的列的宽度(除了前两列)都设为 **70** 个像素，第一列和第二列的宽度分别设为 **100** 和 **90** 个像素。在所有的列中(除了前3列), 文字都是中间对齐的，第一列和第三列的文字是向右对齐的，而第二列文字向左对齐， **CProgram::CreateCanvasTable** () 方法的完整代码如下所示:

```
//+------------------------------------------------------------------+
//| 创建绘制型表格                            |
//+------------------------------------------------------------------+
bool CProgram::CreateCanvasTable(void)
  {
#define COLUMNS1_TOTAL 15
#define ROWS1_TOTAL    1000
//--- 保存表单的指针
   m_canvas_table.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+TABLE1_GAP_X;
   int y=m_window1.Y()+TABLE1_GAP_Y;
//--- 可见的行数
   int visible_rows_total=16;
//--- 列宽度数组
   int width[COLUMNS1_TOTAL];
   ::ArrayInitialize(width,70);
   width[0]=100;
   width[1]=90;
//--- 列文字对齐方式数组
   ENUM_ALIGN_MODE align[COLUMNS1_TOTAL];
   ::ArrayInitialize(align,ALIGN_CENTER);
   align[0]=ALIGN_RIGHT;
   align[1]=ALIGN_LEFT;
   align[2]=ALIGN_RIGHT;
//--- 在创建之前设置属性
   m_canvas_table.XSize(601);
   m_canvas_table.TableSize(COLUMNS1_TOTAL,ROWS1_TOTAL);
   m_canvas_table.VisibleTableSize(0,visible_rows_total);
   m_canvas_table.TextAlign(align);
   m_canvas_table.ColumnsWidth(width);
   m_canvas_table.GridColor(clrLightGray);
//--- 在表格中填入数据
   for(int c=0; c<COLUMNS1_TOTAL; c++)
      for(int r=0; r<ROWS1_TOTAL; r++)
         m_canvas_table.SetValue(c,r,string(c)+":"+string(r));
//--- 创建控件
   if(!m_canvas_table.CreateTable(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把对象加到对象组的总的数组中
   CWndContainer::AddToElementsArray(0,m_canvas_table);
   return(true);
  }
```

调用是在主图形界面创建方法中进行的:

```
//+------------------------------------------------------------------+
//| 创建交易面板                            |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 创建控件表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态行
//--- 创建绘制型表格
   if(!CreateCanvasTable())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
```

现在，让我们编译程序并在图表上运行，结果如以下屏幕截图所示:

![图 6. 在EA中测试绘制型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-04_%5D1%2Cjrg "图 6. 在EA中测试绘制型表格控件")
![[Pasted image 20260628221926.png]]
图 6. 在EA中测试绘制型表格控件

在本系列第一部分的第五章中，我们在脚本程序中测试了表单的使用，不含有滚动条的表格可以在这种类型的MQL应用程序中使用。例如，让我们在脚本程序中加上绘制型表格，并且每隔 **250** 毫秒更新数据，把表格的代码加到应用程序的自定义类中，就像之前演示的那样，另外，代码应该加到 **CProgram::OnEvent** () 脚本事件处理函数中，如下面的代码所示。现在，第二列中的数据会在指定的时间间隔内持续改变了。

```
//+------------------------------------------------------------------+
//| 事件                                |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int milliseconds)
  {
   static int count =0;  // 计数器
   string     str   =""; // 表头行
//--- 从表头开始显示过程
   switch(count)
     {
      case 0 : str="脚本面板";     break;
      case 1 : str="脚本面板 .";   break;
      case 2 : str="脚本面板 ..";  break;
      case 3 : str="脚本面板 ..."; break;
     }
//--- 更新表头行
   m_window.CaptionText(str);
//--- 改变第一列数据
   for(int r=0; r<13; r++)
      m_canvas_table.SetValue(1,r,string(::rand()));
//--- 显示新的表格数据
   m_canvas_table.DrawTable();
//--- 重绘图表
   m_chart.Redraw();
//--- 增加计数器
   count++;
//--- 如果超过3就再设为0
   if(count>3)
      count=0;
//--- 暂停
   ::Sleep(milliseconds);
  }
```

编译程序并在图表上运行脚本，您将看到以下结果:

![图 7. 在脚本程序中测试绘制型表格控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-05_%5D1%2Cjrg "图 7. 在脚本程序中测试绘制型表格控件")
![[Pasted image 20260628221942.png]]
图 7. 在脚本程序中测试绘制型表格控件

我们已经结束了用于创建绘制型表格的 **CCanvasTable** 类的开发，现在，是时候做些总结了。

### 结论

在本文中，我们讨论了三种用于创建重要界面控件 - 表格的类，这些类的每一种都有它自己的特点，而适合于特定的任务。例如，CTable 类允许开发带有编辑框的表格，可以修改格式，这使它看起来对用户更加友好；CCanvasTable 类使您避免了单元格内字符数量的限制，它利用图形的可见范围移动表格，可以设置每个列的宽度。这些还都不是表格的最终版本，如有需要，它们还可以进一步提高。

在下一篇文章中，我们会详细讨论用于开发页面控件的类，它也是常用的图形界面控件。

您可以下载下面的第七部分的资料来测试看它们如何工作，如果您对使用这些文件中的资料有任何问题，您可以参考对应部分文章的详细描述，或者在这些文章的留言部分问问题。

**第七部分的文章(章节)列表:**

- [图形界面 VII: 表格控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0520!pcrc1)
- [图形界面 VII: 页面控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0523)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2500](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0520)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2702.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2702%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (313.25 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2702%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (313.88 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[研究 CCanvas 类。抗锯齿和阴影](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3632)

CCanvas 类的抗锯齿算法是所有使用抗锯齿构造的基础。本文包括其算法的操作内容, 并提供相应的直观示例。它也涵盖了绘制图形对象造型, 以及在画布上绘制造型的算法详情。数值分析库 ALGLIB 用于计算。

[交易机器人的虚假触发保护](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0130)

交易系统的盈利能力不仅由逻辑和金融工具的动态分析精度, 而且还要由逻辑算法的性能品质来定义。虚假触发就是交易机器人主要逻辑品质低的典型。在本文里研究这个特别问题的解决方式。

[如何使用 EA 遵照您的规则拷贝信号?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0418)

当您订阅了一个信号, 也许会发生这样的情形: 您的交易账户杠杆为 1:100, 而提供者的杠杆为 1:500, 且使用最小手数, 而您的账户余额大约相等 — 但拷贝比率只有 10% 到 15%。本文介绍在这种情况下如何增加拷贝比率。

[Thomas DeMark 对于技术分析做出的贡献](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F39%3B5)

本文详细描述了由 Thomas DeMark 发现的 TD 点和 TD 线。揭示了它们的实际实现。除此之外, 还展示了使用 Thomas DeMark 的概念编写三款指标, 两款智能交易程序的过程。

[![](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sk%2Fpgxn2twxxmdkrd5n%3A2%2Cplg)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-gm%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F41%3A%251Fwto_qowrae'3Fwuw%2Cmsl7.aoo%2506wto_oefiwm'3Fdksrlcy%2Cfmovep%2506wto_vepm'3Fskglan.cdtaltcgg%2506wto_aoltgnv%251Dqu%60sarkbg.qiencl'24uvm%5Dccmrakgl%251D2602%2CMSL7.aoo.Knvepncl%24a%3Fsexitsl%7Betz%60jafxdlgsjerdutjjaduh%26q%3D68671e46513071%3Bd183d%3B608a0a0ff%60032f7d0472960710f487331dc11%3Bc%3Ad48%24v%3F1%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24ukd%3Fz%60esaxa%7Bmvardpixqqmotnnhrlamugcp%26qsl%3D37%3A24541414858%3A3125%26qsl_fr%3F1%24sqn%5Dsp%3D2%26dv%5Ddctg%3D37%3A24430%3B9%24rgf%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0520%24bcci_ped%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dzj%250Fwsgrq%250Fvon66%250Fraee6%251F'21uqepAatkols%24tktne%3F%25G5'9%40%25%40E'E7%25%40D'A0%25G7'97%25%3AC'E%3B%25%3BD'A0%2500TIK%251A'22%25G8'A3%25C8'E4%25C0'BA%25G6'8G%25C7'E6%25%40B'B4%2500*%25G7'AA%25CC'E6%25%408'82%25G7'A%40%25C0%2B%2500%2F%2500OQN5'E4%25%3B6'85%25G7'A%40%25C0%24sar%5Drgs%3F1%3B22x30%3A0%24aa%3D37%3A245414223727462%24fx_wnkq%3F615%3A016%3B03232540623%24st%3D0572)