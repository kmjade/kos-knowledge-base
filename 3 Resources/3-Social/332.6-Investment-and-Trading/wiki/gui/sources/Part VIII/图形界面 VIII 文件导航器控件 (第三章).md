---
title: "图形界面 VIII: 文件导航器控件 (第三章)"
source: "https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561"
author:
  - "[[Anatoli Kazharski]]"
published: 2016-10-13T10:45:20+00:00Z
created: 2026-06-28
description: "在系列文章第八部分前面的章节中，我们的库加入了几个类用于开发鼠标指针，日历和树形视图，本文介绍的是文件导航器控件，可以用作MQL应用程序图形界面的一部分。"
tags:
  - "clippings"
---
### 目录

- [简介](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc2)
- [文件导航器控件](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc3)
- [开发 CFileNavigator 类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!cdinelatieavop)
- [准备分级式文件系统结构](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc5)
	- [用于创建控件的方法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc6)
	- [事件处理函数](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc7)
	- [把控件和开发库相集成](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc8)
- [测试文件导航器](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc9)
- [结论](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc12)

### 简介

第一篇文章 [图形界面 I: 库结构的准备工作 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0105) 详细解释了库的目标. 您将能在每章末尾找到文章链接的列表，在那里您可以下载当前开发阶段的库的完整版本. 文件必须按照它们在档案中的位置放到相同目录中.

在系列文章第八部分的第一和第二章中，我们的开发库加入了几个类，用于开发鼠标指针(**CPointer**), 日历(**CCalendar** 和 **CDropCalendar** 类) 以及树形视图(**CTreeItem** 和 **CTreeView** 类)，在本文中，我们进一步开发前一章的烛体，即文件导航器控件。

### 文件导航器控件

文件导航器是一种向导，它使您在程序的图形界面中看到分级式文件系统的元件，另外，它使您可以访问分级中的每个元件，进行某些操作，例如打开文件预览数据，把数据保存到文件，移动文件，等等。

本文开发的就是文件导航器的第一个版本，它给用户提供了以下功能:

- 在一个MQL应用程序的图形界面中浏览终端的文件"沙盒";
- 在终端的通用文件夹和客户终端的本地文件夹中寻找所需的文件夹和文件;
- 保存在文件导航器中选择的文件夹或者文件的路径，用于编程访问。

**注意:**

在 MQL5 语言中，为了安全方面的原因，对文件的操作是严格控制的，通过 MQL5 语言处理的文件总是位于文件"沙箱"之中，打开的文件位于客户终端的目录中，在 MQL5\\Files 目录(或者在测试中时为 testing\_agent\_directory\\MQL5\\Files)，如果在其它标志中指定了 FILE\_COMMON 标志，文件打开的位置是所有客户终端的公用目录 \\Terminal\\Common\\Files。

### 开发 CFileNavigator 类

在当前的开发阶段，我们在开发库中已经有了所有用于开发文件导航器的所需工具，之前描述过的树形视图控件事实上就是创建文件导航器的基础，除了带有内容区域的树形视图，我们还需要开发一个地址条，包含相对当前在树形视图中选中元件的完整路径。

让我们提供一个功能来在根目录中选择显示的文件夹，例如，我们可以使用终端中的一个文件"沙盒"目录或者提供对它们两个的访问，为此，要把 **ENUM\_FILE\_NAVIGATOR\_CONTENT** 枚举加到 **Enums.mqh** 文件中 (参见以下代码):

- **FN\_BOTH** – 显示两个目录。
- **FN\_ONLY\_MQL** – 只显示客户终端的本地文件夹目录。
- **FN\_ONLY\_COMMON** – 只显示所有已安装的终端公用目录。

```
//+------------------------------------------------------------------+
//| 文件导航器内容的枚举                          |
//+------------------------------------------------------------------+
enum ENUM_FILE_NAVIGATOR_CONTENT
  {
   FN_BOTH        =0,
   FN_ONLY_MQL    =1,
   FN_ONLY_COMMON =2
  };
```

创建 **FileNavigator.mqh** 文件，其中含有 **CFileNavigator** 类，然后把它包含在库引擎中 (**WndContainer.mqh** 文件):

```
//+------------------------------------------------------------------+
//|                                                 WndContainer.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "FileNavigator.mqh"
```

还应该在 **CFileNavigator** 类中实现库元件的标准方法集，如以下代码所示:

```
//+------------------------------------------------------------------+
//| 创建文件导航器的类                           |
//+------------------------------------------------------------------+
class CFileNavigator : public CElement
  {
private:
   //--- 指向元件附加表单的指针
   CWindow          *m_wnd;
   //---
public:
                     CFileNavigator(void);
                    ~CFileNavigator(void);
   //--- 保存表单指针
   void              WindowPointer(CWindow &object)                           { m_wnd=::GetPointer(object);                }
   //---
public:
   //--- 图表事件处理函数
   virtual void      OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam);
   //--- 计时器
   virtual void      OnEventTimer(void) {}
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
```

让我们把库用户可以用来配置文件导航器的属性列举出来。

- 树形视图区域的宽度
- 内容区域的宽度
- 区域的背景颜色
- 边框的颜色
- 地址条背景色
- 地址条文字颜色
- 地址条的高度
- 文件夹和文件的图片
- 导航器模式(显示全部/只显示文件夹)
- 文件导航器内容模式 (公用文件夹/本地文件夹/全部)

```
//+------------------------------------------------------------------+
//| 用于创建文件导航器的类                       |
//+------------------------------------------------------------------+
class CFileNavigator : public CElement
  {
private:
   //--- 树形视图的区域宽度
   int               m_treeview_area_width;
   //--- 内容区域宽度
   int               m_content_area_width;
   //--- 背景和背景边框的颜色
   color             m_area_color;
   color             m_area_border_color;
   //--- 地址条背景色
   color             m_address_bar_back_color;
   //--- 地址条文字颜色
   color             m_address_bar_text_color;
   //--- 地址条高度
   int               m_address_bar_y_size;
   //--- 用于 (1) 文件夹 和 (2) 文件 的图片
   string            m_file_icon;
   string            m_folder_icon;
   //--- 文件导航器内容模式
   ENUM_FILE_NAVIGATOR_CONTENT m_navigator_content;
   //--- 鼠标左键点击优先级
   int               m_zorder;
   //---
public:
   //--- (1) 导航器模式 (显示全部/只显示文件夹), (2) 导航器内容 (公用文件夹/本地文件夹/全部)
   void              NavigatorMode(const ENUM_FILE_NAVIGATOR_MODE mode)       { m_treeview.NavigatorMode(mode);            }
   void              NavigatorContent(const ENUM_FILE_NAVIGATOR_CONTENT mode) { m_navigator_content=mode;                  }
   //--- (1) 地址条高度, (2) 树形视图宽度 和 (3) 内容列表宽度
   void              AddressBarYSize(const int y_size)                        { m_address_bar_y_size=y_size;               }
   void              TreeViewAreaWidth(const int x_size)                      { m_treeview_area_width=x_size;              }
   void              ContentAreaWidth(const int x_size)                       { m_content_area_width=x_size;               }
   //--- (1) 背景 和 (2) 背景边框的颜色
   void              AreaBackColor(const color clr)                           { m_area_color=clr;                          }
   void              AreaBorderColor(const color clr)                         { m_area_border_color=clr;                   }
   //--- (1) 背景 (2) 地址条文字 的颜色
   void              AddressBarBackColor(const color clr)                     { m_address_bar_back_color=clr;              }
   void              AddressBarTextColor(const color clr)                     { m_address_bar_text_color=clr;              }
   //--- 设置图片文件路径，指向 (1) 文件 和 (2) 文件夹
   void              FileIcon(const string file_path)                         { m_file_icon=file_path;                     }
   void              FolderIcon(const string file_path)                       { m_folder_icon=file_path;                   }
  };
```

在类的构造函数中对属性栏位使用默认值进行初始化 (参见以下代码)，默认的文件夹和文件的图片是以资源(resources)的形式关联到开发库中的，它们可以从以下档案中下载。

```
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\folder.bmp"
#resource "\\Images\\EasyAndFastGUI\\Icons\\bmp16\\text_file.bmp"

//+------------------------------------------------------------------+
//| 构造函数　  　 　　　　　　　                |
//+------------------------------------------------------------------+
CFileNavigator::CFileNavigator(void) : m_address_bar_y_size(20),
                                       m_treeview_area_width(300),
                                       m_content_area_width(0),
                                       m_navigator_content(FN_ONLY_MQL),
                                       m_area_border_color(clrLightGray),
                                       m_address_bar_back_color(clrWhiteSmoke),
                                       m_address_bar_text_color(clrBlack),
                                       m_file_icon("Images\\EasyAndFastGUI\\Icons\\bmp16\\text_file.bmp"),
                                       m_folder_icon("Images\\EasyAndFastGUI\\Icons\\bmp16\\folder.bmp")
  {
//--- 在基类中保存元件类的名称
   CElement::ClassName(CLASS_NAME);
//--- 设置鼠标左键点击的优先级
   m_zorder=0;
  }
```

为了创建文件导航器，我们需要两个私有(private)和一个公有(public)方法，分级的系统文件系统是使用前面文章中介绍过的 **CTreeView** 类来实现的，这个类的文件应该在 **FileNavigator.mqh** 文件中包含。

```
//+------------------------------------------------------------------+
//|                                                FileNavigator.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
#include "Element.mqh"
#include "Window.mqh"
#include "TreeView.mqh"
//+------------------------------------------------------------------+
//| 用于创建文件导航器的类                       |
//+------------------------------------------------------------------+
class CFileNavigator : public CElement
  {
private:
   //--- 用于创建元件的对象
   CRectCanvas       m_address_bar;
   CTreeView         m_treeview;
   //---
public:
   //--- 用于创建文件导航器的方法
   bool              CreateFileNavigator(const long chart_id,const int subwin,const int x,const int y);
   //---
private:
   bool              CreateAddressBar(void);
   bool              CreateTreeView(void);
  };
```

在详细介绍文件导航器的开发方法之前，让我们先熟悉一下终端的分级式文件系统结构。

### 准备分级式文件系统结构

在创建文件导航器之前，我们首先应该扫描一下终端的文件系统，并且保存所有建立树形视图的元件的参数。这些参数在前面的文章中已经介绍过，所以，这里只是显示了建立树形视图所需的参数数组列表。

- 总索引
- 前一节点的总索引
- 文件夹/文件名称
- 局部索引
- 节点等级
- 前一节点的局部索引
- 文件夹中总元素的数量
- 文件夹中文件夹的数量
- 文件夹标志
- 项目状态(收起/展开)

为了准备这些参数，我们需要两个数组列表 – 主 (**g** 为前缀) 和 辅助 (**l** 为前缀):

```
class CFileNavigator : public CElement
  {
private:
   //--- 保存数据的主数组 
   int               m_g_list_index[];           // 总索引
   int               m_g_prev_node_list_index[]; // 前一节点的总索引
   string            m_g_item_text[];            // 文件/文件夹名称
   int               m_g_item_index[];           // 局部索引
   int               m_g_node_level[];           // 节点等级
   int               m_g_prev_node_item_index[]; // 前一节点的局部索引
   int               m_g_items_total[];          // 文件夹中元素的数量
   int               m_g_folders_total[];        // 文件夹中文件夹的数量
   bool              m_g_is_folder[];            // 文件夹属性
   bool              m_g_item_state[];           // 项目状态 (收起/打开)
   //--- 用于收集数据的辅助数组
   int               m_l_prev_node_list_index[];
   string            m_l_item_text[];
   string            m_l_path[];
   int               m_l_item_index[];
   int               m_l_item_total[];
   int               m_l_folders_total[];
  };
```

我们需要一些额外的方法来扫描终端的文件系统，收集数据并把它们保存到数组中。 **CFileNavigator::AuxiliaryArraysResize** () 方法是用于操作辅助数组的，它可以修改它们相对当前使用的节点级别的大小 (参见下方代码)，换句话说，数组的大小要比传入参数的当前节点等级数值大一个元素，如果当前节点等级数值为 **0**, 数组的大小就设为 **1**, 如果节点等级为 **1**, 数组的大小就是 **2**, 以此类推。因为在数据收集过程中节点的等级可能增加或者减少，数组的大小也会有对应的变化。初始化当前节点的数组元件时也会使用同样的方法。

```
class CFileNavigator : public CElement
  {
private:
   //--- 把数组大小增加一个元素
   void              AuxiliaryArraysResize(const int node_level);
  };
//+------------------------------------------------------------------+
//| 把数组大小额外增加一个元素                                 |
//+------------------------------------------------------------------+
void CFileNavigator::AuxiliaryArraysResize(const int node_level)
  {
   int new_size=node_level+1;
   ::ArrayResize(m_l_prev_node_list_index,new_size);
   ::ArrayResize(m_l_item_text,new_size);
   ::ArrayResize(m_l_path,new_size);
   ::ArrayResize(m_l_item_index,new_size);
   ::ArrayResize(m_l_item_total,new_size);
   ::ArrayResize(m_l_folders_total,new_size);
//--- 初始化最新值
   m_l_prev_node_list_index[node_level] =0;
   m_l_item_text[node_level]            ="";
   m_l_path[node_level]                 ="";
   m_l_item_index[node_level]           =-1;
   m_l_item_total[node_level]           =0;
   m_l_folders_total[node_level]        =0;
  }
```

**CFileNavigator::AddItem** () 方法是用于使用参数把元件加到主数组中的，在此，数组在每次调用方法中增加一个元素，传入参数的数值保存到元素的最后一个单元中。

```
class CFileNavigator : public CElement
  {
private:
   //--- 把项目加到数组中
   void              AddItem(const int list_index,const string item_text,const int node_level,const int prev_node_item_index,
                             const int item_index,const int items_total,const int folders_total,const bool is_folder);
  };
//+------------------------------------------------------------------+
//| 使用指定参数把项目加到数组中                           |
//+------------------------------------------------------------------+
void CFileNavigator::AddItem(const int list_index,const string item_text,const int node_level,const int prev_node_item_index,
                             const int item_index,const int items_total,const int folders_total,const bool is_folder)
  {
//--- 把数组大小增加一个元件
   int array_size =::ArraySize(m_g_list_index);
   int new_size   =array_size+1;
   ::ArrayResize(m_g_prev_node_list_index,new_size);
   ::ArrayResize(m_g_list_index,new_size);
   ::ArrayResize(m_g_item_text,new_size);
   ::ArrayResize(m_g_item_index,new_size);
   ::ArrayResize(m_g_node_level,new_size);
   ::ArrayResize(m_g_prev_node_item_index,new_size);
   ::ArrayResize(m_g_items_total,new_size);
   ::ArrayResize(m_g_folders_total,new_size);
   ::ArrayResize(m_g_is_folder,new_size);
//--- 保存传入的参数值
   m_g_prev_node_list_index[array_size] =(node_level==0)? -1 : m_l_prev_node_list_index[node_level-1];
   m_g_list_index[array_size]           =list_index;
   m_g_item_text[array_size]            =item_text;
   m_g_item_index[array_size]           =item_index;
   m_g_node_level[array_size]           =node_level;
   m_g_prev_node_item_index[array_size] =prev_node_item_index;
   m_g_items_total[array_size]          =items_total;
   m_g_folders_total[array_size]        =folders_total;
   m_g_is_folder[array_size]            =is_folder;
  }
```

当扫描文件系统时，需要转到每个侦测到的文件夹来读取它的内容，为此，需要使用 **CFileNavigator::IsFolder** () 方法，它确定了当前的元素是一个文件夹还是一个文件。文件系统元素的名称应该作为唯一参数传给它，如果在元素名称中发现了"\\"字符，这就意味着方法会返回 **true** ，如果这是一个文件，方法就返回 **false** 。

[FileIsExist()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fdineq%2Fdineksgxksv) 系统函数是另一种检查元素是否为文件的方法，这个函数根据传入的名称进行搜索，如果最后搜索到的句柄是个文件，就返回 true，如果这是一个目录，这个函数会产生 [ERR\_FILE\_IS\_DIRECTORY](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fgrpopsuapnknes-eprmraofeq) 错误。

```
class CFileNavigator : public CElement
  {
private:
   //--- 确定传入的名称是文件还是文件夹
   bool              IsFolder(const string file_name);
  };
//+------------------------------------------------------------------+
//| 确定传入的名称是文件还是文件夹                       |
//+------------------------------------------------------------------+
bool CFileNavigator::IsFolder(const string file_name)
  {
//--- 如果名称包含 "\\" 字符, 它就是一个文件夹
   if(::StringFind(file_name,"\\",0)>-1)
      return(true);
//---
   return(false);
  }
```

为了构建一个树形视图，要指定项目中的元素数量，以及文件夹元素的数量，所以，我们需要对应的方法来定义参数的数值。这些方法是 **CFileNavigator::ItemsTotal** () 和 **CFileNavigator::FoldersTotal** ()。它们很类似，在第二个方法中，计数器只有在检查到元素为文件夹的时候才会增加。这两个方法都接受两个参数: (1) 路径 和(2)搜索范围。搜索范围是指所有终端的共用文件夹还是一个终端的本地文件夹。下一步，会使用 [FileFindFirst()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fdineq%2Fdinedilddipsv) 系统函数来在指定的路径中同时取得搜索句柄，以及第一个元素的名称 (如果找到的话)。有效的句柄和对象名称指示了找到第一个元素。

下一步，在循环中使用 [FileFindNext()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fdineq%2Fdinedildlezt) 系统函数， 尝试访问相同目录中的所有其它元素，之前获得的句柄作为目录的钥匙，如果找到了元素，函数返回 **true** 而计数器会增加，一旦函数返回 **false** ，搜索就立即停止。在两个方法结束时，应该关闭搜索句柄， [FileFindClose()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fdineq%2Fdinedildalmsg) 系统函数就是用于这个任务。

```
class CFileNavigator : public CElement
  {
private:
   //--- 返回指定目录中 (1) 项目 和 (2) 文件夹的数量
   int               ItemsTotal(const string search_path,const int mode);
   int               FoldersTotal(const string search_path,const int mode);
  };
//+------------------------------------------------------------------+
//| 计算当前目录的文件数量                               |
//+------------------------------------------------------------------+
int CFileNavigator::ItemsTotal(const string search_path,const int search_area)
  {
   int    counter       =0;              // 项目计数器 
   string file_name     ="";             // 文件名称
   long   search_handle =INVALID_HANDLE; // 搜索句柄
//--- 取得当前目录的第一个文件
   search_handle=::FileFindFirst(search_path,file_name,search_area);
//--- 如果目录不是空的
   if(search_handle!=INVALID_HANDLE && file_name!="")
     {
      //--- 计算当前目录中的对象数量
      counter++;
      while(::FileFindNext(search_handle,file_name))
         counter++;
     }
//--- 关闭搜索句柄
   ::FileFindClose(search_handle);
   return(counter);
  }
//+------------------------------------------------------------------+
//| 计算当前目录中的文件夹数量                            |
//+------------------------------------------------------------------+
int CFileNavigator::FoldersTotal(const string search_path,const int search_area)
  {
   int    counter       =0;              // 项目计数器 
   string file_name     ="";             // 文件名称
   long   search_handle =INVALID_HANDLE; // 搜索句柄
//--- 取得当前目录的第一个文件
   search_handle=::FileFindFirst(search_path,file_name,search_area);
//--- 如果不为空，在循环中计算当前目录的对象数量
   if(search_handle!=INVALID_HANDLE && file_name!="")
     {
      //--- 如果是一个文件夹，增加计数器
      if(IsFolder(file_name))
         counter++;
      //--- 在列表中迭代，计算其他文件夹
      while(::FileFindNext(search_handle,file_name))
        {
         if(IsFolder(file_name))
            counter++;
        }
     }
//--- 关闭搜索句柄
   ::FileFindClose(search_handle);
   return(counter);
  }
```

当收集文件系统元素的参数时，我们需要取得前面节点的局部索引， **CFileNavigator::PrevNodeItemIndex** () 方法就是用于此项任务的。传入的参数有 (1) 在根目录当前项目的索引 以及 (2)当前节点的等级。这两个参数的数值是由调用方法的主方法中的外部循环计数器管理的。

```
class CFileNavigator : public CElement
  {
private:
   //--- 根据传入的参数返回前面节点的局部索引
   int               PrevNodeItemIndex(const int root_index,const int node_level);
  };
//+------------------------------------------------------------------+
//| 返回前面节点的局部索引                      |
//| 依据是传入的参数                         |
//+------------------------------------------------------------------+
int CFileNavigator::PrevNodeItemIndex(const int root_index,const int node_level)
  {
   int prev_node_item_index=0;
//--- 如果不是根目录
   if(node_level>1)
      prev_node_item_index=m_l_item_index[node_level-1];
   else
     {
      //--- 如果不是列表中第一个项目
      if(root_index>0)
         prev_node_item_index=m_l_item_index[node_level-1];
     }
//--- 返回前面节点的局部索引
   return(prev_node_item_index);
  }
```

每次找到一个文件夹时，就会转向它 (也就是进入下一个节点等级)， **CFileNavigator::ToNextNode** () 方法就是用于这个功能。有些参数是通过引用传入以使函数能够管理它们的数值。

在这里，在最开始会构建用于计算目录元素的路径，然后，根据当前节点的等级索引把元件参数保存到辅助数组中，之后，我们需要取得前面节点的项目索引，并把项目根据指定的参数加到主数组中，换句话说，是把它加到我们根据参数准备好的数组中。

在那以后，增加节点计数器以及增加辅助数组的大小。之后，我们应当为新的节点等级保存几个参数: (1) 路径, (2) 元素数量 以及 (3) 文件夹的数量。在方法的末尾，(1) 重置局部索引的计数器 以及 (2) 关闭当前的搜索句柄。

```
class CFileNavigator : public CElement
  {
private:
   //--- 转到下一个节点
   void              ToNextNode(const int root_index,int list_index,int &node_level,
                                int &item_index,long &handle,const string item_text,const int search_area);
  };
//+------------------------------------------------------------------+
//| 转到下一个节点                            |
//+------------------------------------------------------------------+
void CFileNavigator::ToNextNode(const int root_index,int list_index,int &node_level,
                                int &item_index,long &handle,const string item_text,const int search_area)
  {
//--- 搜索过滤字符串 (* - 检查所有文件/文件夹)
   string filter="*";
//--- 生成路径
   string search_path=m_l_path[node_level]+item_text+filter;
//--- 获取并保存数据
   m_l_item_total[node_level]           =ItemsTotal(search_path,search_area);
   m_l_folders_total[node_level]        =FoldersTotal(search_path,search_area);
   m_l_item_text[node_level]            =item_text;
   m_l_item_index[node_level]           =item_index;
   m_l_prev_node_list_index[node_level] =list_index;
//--- 取得前面节点项目的索引
   int prev_node_item_index=PrevNodeItemIndex(root_index,node_level);
//--- 把项目使用指定的数据加到主数组中
   AddItem(list_index,item_text,node_level,prev_node_item_index,
           item_index,m_l_item_total[node_level],m_l_folders_total[node_level],true);
//--- 增加节点计数器
   node_level++;
//--- 把数组大小增加一个元件
   AuxiliaryArraysResize(node_level);
//--- 获取并保存数据
   m_l_path[node_level]          =m_l_path[node_level-1]+item_text;
   m_l_item_total[node_level]    =ItemsTotal(m_l_path[node_level]+filter,search_area);
   m_l_folders_total[node_level] =FoldersTotal(m_l_path[node_level]+item_text+filter,search_area);
//--- 局部索引计数器清零
   item_index=0;
//--- 关闭搜索句柄
   ::FileFindClose(handle);
  }
```

现在，让我们讨论主循环，也就是进行主要操作的地方。为了更加方便起见，循环位于独立的方法中，即 **CFileNavigator::FileSystemScan** ()。在这个方法中将会读取终端的文件系统并把侦测到的元素的参数保存到主数组中。这些数组随后会用于构建树形视图。循环会一直运行，直到算法达到列表的最后或者程序从图表上删除。

算法的工作方法如下，在循环的开始，先检查当前目录中列表的开端(列表中的第一个元素)，如果检查的元素真的是新的，在文件系统的指定区域中我们就侦测得到一个句柄和第一个元素的名称，并且在当前节点等级的辅助数组中保存元素和文件夹的数量。

如果这不是第一个索引，随后会检查当前节点的局部索引顺序，如果节点索引已经存在，局部索引计数器就增加，然后转到下个目录中的下一个元素中。

如果算法达到了下面的代码块，检查我们是否超出了根节点对应的元素列表的范围，如果是这样，循环就停止，也意味着搜索句柄 (在循环快之外)关闭，程序退出此方法。如果我们已经到达了列表的最后，除了根节点，那么我们就需要转到下一个等级，在此, (1) 节点计数器等级减少一级, (2) 重置局部索引计数器, (3) 关闭搜索句柄 并且 (4) 转到下一个循环迭代。

如果在前一个 **if** - **else** 判断中都执行过，检查当前文件系统元素是否是一个文件夹，如果是，就使用之前说过的 **CFileNavigator::ToNextNode** () 方法转到下一个级别，随后，总索引的计数器会增加，并且会激活转到下一次迭代的命令。

如果文件系统元素是一个文件，那么我们首先将得到前面节点的局部索引，然后我们应当使用指定的参数把项目加到总数组中，增加总的和局部索引的计数器，作为循环中的最后一步，再转到下一个终端文件系统元素，在那以后，下一次循环迭代开始，算法再经历之前描述的所有过程。

```
class CFileNavigator : public CElement
  {
private:
   //--- 读取文件系统并把参数写入数组中
   void              FileSystemScan(const int root_index,int &list_index,int &node_level,int &item_index,int search_area);
  };
//+------------------------------------------------------------------+
//| 读取文件系统并把项目的参数写到                          |
//| 数组中                                    |
//+------------------------------------------------------------------+
void CFileNavigator::FileSystemScan(const int root_index,int &list_index,int &node_level,int &item_index,int search_area)
  {
   long   search_handle =INVALID_HANDLE; // 文件夹/文件搜索句柄
   string file_name     ="";             // 找到项目的名称 (文件/文件夹)
   string filter        ="*";            // 搜索过滤字符串 (* - 检查所有文件/文件夹)
//--- 扫描目录并把数据保存到数组中
   while(!::IsStopped())
     {
      //--- 如果是目录列表的开始
      if(item_index==0)
        {
         //--- 搜索所有项目的路径
         string search_path=m_l_path[node_level]+filter;
         //--- 取得第一个文件的句柄和名称
         search_handle=::FileFindFirst(search_path,file_name,search_area);
         //--- 取得在指定目录下文件和文件夹的数量
         m_l_item_total[node_level]    =ItemsTotal(search_path,search_area);
         m_l_folders_total[node_level] =FoldersTotal(search_path,search_area);
        }
      //--- 如果这个节点的索引已经使用过，就转到下一个文件
      if(m_l_item_index[node_level]>-1 && item_index<=m_l_item_index[node_level])
        {
         //--- 增加局部索引计数器
         item_index++;
         //--- 转到下一个项目
         ::FileFindNext(search_handle,file_name);
         continue;
        }
      //--- 如果达到了根节点列表的最后，结束循环
      if(node_level==1 && item_index>=m_l_item_total[node_level])
         break;
      //--- 如果达到了除了根节点的任何节点的列表末端
      else if(item_index>=m_l_item_total[node_level])
        {
         //--- 把节点计数器设置返回一级
         node_level--;
         //--- 局部索引计数器清零
         item_index=0;
         //--- 关闭搜索句柄
         ::FileFindClose(search_handle);
         continue;
        }
      //--- 如果是文件夹
      if(IsFolder(file_name))
        {
         //--- 转到下一个节点
         ToNextNode(root_index,list_index,node_level,item_index,search_handle,file_name,search_area);
         //--- 增加总索引计数器并开始新的迭代
         list_index++;
         continue;
        }
      //--- 取得前一节点的局部索引
      int prev_node_item_index=PrevNodeItemIndex(root_index,node_level);
      //--- 把项目根据指定数据加到总数组中
      AddItem(list_index,file_name,node_level,prev_node_item_index,item_index,0,0,false);
      //--- 增加总索引计数器
      list_index++;
      //--- 增加局部索引计数器
      item_index++;
      //--- 转到下一个元素
      ::FileFindNext(search_handle,file_name);
     }
//--- 关闭搜索句柄
   ::FileFindClose(search_handle);
  }
```

现在，让我们探讨主方法 **CFileNavigator::FillArraysData** (), 在其中会调用之前描述的所有方法。

首先，设置终端公用和本地文件夹目录的顺序，这个顺序依赖于在文件导航器属性中设置的模式 (**ENUM\_FILE\_NAVIGATOR\_CONTENT**)。在默认情况下，顺序的设置是在列表中首先加入公用终端目录, 而其次再加入终端的本地目录。这只在设置了 **FN\_BOTH** ("显示两个目录下的内容")模式时才这样做。如果选择了"显示其中一个目录内容"的模式，就会初始化循环中对应的起始(**begin**)和终止(**end**)范围。

在循环的开始，会定义搜索区域，然后会进行以下步骤。

- 重设局部索引计数器
- 根据当前节点等级修改辅助数组的大小
- 在相同数组中的第一个索引处保存当前目录中元素和文件夹的数量
- 把元素根据指定参数加入主数组，因为这里使用了跟目录，当前元素可能来自两个目录: *Common\\\\Files\\\\ 或者 MQL5\\\\Files\\\\*
- 增加总索引和节点等级计数器
- 根据当前节点的等级再次修改辅助数组的大小
- 如果当前的搜索范围位于终端的本地文件夹，辅助数组第一个索引的值: (1) 局部索引 以及(2)前面节点的总索引 被修正。

最后, 调用 **CFileNavigator::FileSystemScan** () 方法，用于在指定的搜索区域中读取文件系统并把元素参数保存到主数组中。

```
class CFileNavigator : public CElement
  {
private:
   //--- 使用终端文件系统元素的参数填充数组
   void              FillArraysData(void);
  };
//+------------------------------------------------------------------+
//| 使用文件系统元素的参数填充数组                              |
//+------------------------------------------------------------------+
void CFileNavigator::FillArraysData(void)
  {
//--- 计数器 (1) 总索引, (2) 节点等级, (3) 局部索引
   int list_index =0;
   int node_level =0;
   int item_index =0;
//--- 如果两个目录都要显示 (公用 (0)/本地 (1))
   int begin=0,end=1;
//--- 如果只显示本地目录
   if(m_navigator_content==FN_ONLY_MQL)
      begin=1;
//--- 如果只显示公用目录
   else if(m_navigator_content==FN_ONLY_COMMON)
      begin=end=0;
//--- 在指定目录做迭代
   for(int root_index=begin; root_index<=end; root_index++)
     {
      //--- 确定扫描文件结构的目录
      int search_area=0
 : FILE_COMMON;
      //--- 重置局部索引计数器
      item_index=0;
      //--- 把数组大小增加一个元素 (相对节点等级)
      AuxiliaryArraysResize(node_level);
      //--- 取得指定目录下文件和文件夹的数量 (* - 扫描所有文件/文件夹)
      string search_path   =m_l_path[0]+"*";
      m_l_item_total[0]    =ItemsTotal(search_path,search_area);
      m_l_folders_total[0] =FoldersTotal(search_path,search_area);
      //--- 把含有根目录名称的项目加到列表顶端
      string item_text=(root_index>0)? "MQL5\\Files\\" : "Common\\Files\\";
      AddItem(list_index,item_text,0,0,root_index,m_l_item_total[0],m_l_folders_total[0],true);
      //--- 增加总索引和节点等级计数器
      list_index++;
      node_level++;
      //--- 把数组大小增加一个元素 (相对节点等级)
      AuxiliaryArraysResize(node_level);
      //--- 初始化终端本地目录的第一个项目
      if(root_index>0)
        {
         m_l_item_index[0]           =root_index;
         m_l_prev_node_list_index[0] =list_index-1;
        }
      //--- 扫描目录并在数组中保存数据
      FileSystemScan(root_index,list_index,node_level,item_index,search_area);
     }
  }
```

### 用于创建控件的方法

在创建文件导航器控件之前调用 **CFileNavigator::FillArraysData** ()方法，实际上，库的用户可能都不会意识到它，只需要设置一些通用的影响到文件导航器外观和内容的属性。

```
//+------------------------------------------------------------------+
//| 创建文件导航器                           |
//+------------------------------------------------------------------+
bool CFileNavigator::CreateFileNavigator(const long chart_id,const int subwin,const int x,const int y)
  {
//--- 如果没有表单指针
   if(::CheckPointer(m_wnd)==POINTER_INVALID)
     {
      ::Print(__FUNCTION__," > 在创建文件导航器之前, "
              "必须传给它表单的指针: CFileNavigator::WindowPointer(CWindow &object).");
      return(false);
     }
//--- 扫描终端文件系统并在数组中保存数据
   FillArraysData();
//--- 初始化变量
   m_id       =m_wnd.LastId()+1;
   m_chart_id =chart_id;
   m_subwin   =subwin;
   m_x        =x;
   m_y        =y;
//--- 到边缘的距离
   CElement::XGap(CElement::X()-m_wnd.X());
   CElement::YGap(CElement::Y()-m_wnd.Y());
//--- 创建元件
   if(!CreateAddressBar())
      return(false);
   if(!CreateTreeView())
      return(false);
//--- 如果窗口是对话框或者是最小化状态，隐藏元件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      Hide();
//---
   return(true);
  }
```

当开发文件导航器时，第一步是创建地址条，它是一个 [OBJ\_BITMAP\_LABEL](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Faolsvaltq%2Fmbheataolsvaltq%2Fgnwm%5Do%60jgcv%2Fmbh_%60ivmcp%5Dlcbgl) 类型的对象，它的内容是完全绘制出来的。之前，我们已经讨论了在画布上绘制创建控件的例子，所以，我们在此将只考虑与开发控件相关的不同部分，

为了绘制地址条，我们需要两个方法:

- **CFileNavigator::Border** () 方法是用于绘制地址条的边框的，
- **CFileNavigator::UpdateAddressBar** () 是绘制和显示最新变化的主要方法，包含在树形视图中选择的目录。

在此让我们只讨论 **CFileNavigator::UpdateAddressBar** ()方法的代码，因为边框部分在开发其他控件时已经说过了，例如，在文章 [图形界面 IV: 信息界面元件(第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0327) 中。

我们已经说过，用户可以在创建文件导航器之前设置地址条的背景色和它在 **Y** 轴上的大小，在画布区域的文字在X轴距离左边界有5个像素点大小的缩进，而在 **Y** 轴上的位置在中间，因为我们已经有了 **Y** 轴上的大小，我们只需要把 **地址条的高度** 除以 **2** 来获取Y坐标。为了调用 [TextOut()](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-dmcq%2Fmbheatq%2Fveztmuv) 方法来在画布上画出文字，我们也需要传入锚点类型为左侧纵向居中标志。

在文件导航器第一次安装中，路径还没有初始化过，而 **m\_current\_path** 类栏位包含的是空字符串，因为文件系统元素可能很多，构建数组并创建树形视图可能需要一些时间。因为先要创建地址条，它可以展示一条消息提醒用户等待一会儿，比如，它可以看起来是: " *正在载入，请稍候...*".

在方法的最后，会更新画布以显示最新的变化。

```
class CFileNavigator : public CElement
  {
private:
   //--- 绘制地址条的边框
   void              Border(void);
   //--- 在地址条中显示当前路径
   void              UpdateAddressBar(void);
  };
//+------------------------------------------------------------------+
//| 在地址条中显示当前路径                          |
//+------------------------------------------------------------------+
void CFileNavigator::UpdateAddressBar(void)
  {
//--- 坐标
   int x=5;
   int y=m_address_bar_y_size/2;
//--- 清空背景
   m_address_bar.Erase(::ColorToARGB(m_address_bar_back_color,0));
//--- 绘制背景边框
   Border();
//--- 文字属性
   m_address_bar.FontSet("Calibri",14,FW_NORMAL);
//--- 如果路径没有设置，显示默认字符串
   if(m_current_full_path=="")
      m_current_full_path="正在载入，请稍候...";
//--- 输出文件导航器的地址条路径
   m_address_bar.TextOut(x,y,m_current_path,::ColorToARGB(m_address_bar_text_color),TA_LEFT|TA_VCENTER);
//--- 更新绘制的画布
   m_address_bar.Update();
  }
```

地址条的宽度是在它的创建之前设置的， 它的创建使用的是 **CFileNavigator::CreateAddressBar** () 方法。如果内容区域在设置中被禁用，地址条的宽度就等于树形视图的宽度，在其它情况下，它是使用在树形视图类(**CTreeView**)中通用控件宽度的计算原则来计算的。

在创建对象之后，调用 **CFileNavigator::UpdateAddressBar** () 方法来绘制背景，边框和默认信息。

```
//+------------------------------------------------------------------+
//| 创建地址条                               |
//+------------------------------------------------------------------+
bool CFileNavigator::CreateAddressBar(void)
  {
//--- 构造对象名称
   string name=CElement::ProgramName()+"_file_navigator_address_bar_"+(string)CElement::Id();
//--- 坐标
   int x =CElement::X();
   int y =CElement::Y();
//--- 大小:
//    计算宽度
   int x_size=0;
//--- 如果没有内容区域
   if(m_content_area_width<0)
      x_size=m_treeview_area_width;
   else
     {
      //--- 如果定义了指定的内容区域宽度
      if(m_content_area_width>0)
         x_size=m_treeview_area_width+m_content_area_width-1;
      //--- 如果内容区域的右边必须在表单的右侧边缘
      else
         x_size=m_wnd.X2()-x-2;
     }
//--- 高度
   int y_size=m_address_bar_y_size;
//--- 创建对象
   if(!m_address_bar.CreateBitmapLabel(m_chart_id,m_subwin,name,x,y,x_size,y_size,COLOR_FORMAT_XRGB_NOALPHA))
      return(false);
//--- 附加到图表
   if(!m_address_bar.Attach(m_chart_id,name,m_subwin,1))
      return(false);
//--- 设置属性
   m_address_bar.Background(false);
   m_address_bar.Z_Order(m_zorder);
   m_address_bar.Tooltip("\n");
//--- 保存大小
   CElement::X(x);
   CElement::Y(y);
//--- 保存大小
   CElement::XSize(x_size);
   CElement::YSize(y_size);
//--- 到边缘的距离
   m_address_bar.XGap(x-m_wnd.X());
   m_address_bar.YGap(y-m_wnd.Y());
//--- 更新地址条
   UpdateAddressBar();
//--- 保存对象指针
   CElement::AddToArray(m_address_bar);
//--- 如果窗口是对话框或者是最小化状态，隐藏元件
   if(m_wnd.WindowType()==W_DIALOG || m_wnd.IsMinimized())
      m_address_bar.Timeframes(OBJ_NO_PERIODS);
//---
   return(true);
  }
```

现在，我们已经达到了调用 **CFileNavigator::CreateTreeView** ()方法来设置树形视图的部分了。在前一篇文章中，我指出了在创建 **CTreeView** 类型的控件之前，我们首先要把项目和参数加到控件的数组中，在此阶段，所有用于项目的参数都在 **CFileNavigator** 类的主数组中，我们所需要的就是在循环中把它们传给树形视图类，

在相同的循环中还要定义每个项目的图片，另外，应该在文件夹名称中删除最后的字符(‘\\’)。

```
//+------------------------------------------------------------------+
//| 创建树形视图                              |
//+------------------------------------------------------------------+
bool CFileNavigator::CreateTreeView(void)
  {
//--- 保存窗口指针
   m_treeview.WindowPointer(m_wnd);
//--- 设置属性
   m_treeview.Id(CElement::Id());
   m_treeview.XSize(CElement::XSize());
   m_treeview.YSize(CElement::YSize());
   m_treeview.ResizeListAreaMode(true);
   m_treeview.TreeViewAreaWidth(m_treeview_area_width);
   m_treeview.ContentAreaWidth(m_content_area_width);
//--- 构建树形视图的数组
   int items_total=::ArraySize(m_g_item_text);
   for(int i=0; i<items_total; i++)
     {
      //--- 设置项目的图标 (文件夹/文件)
      string icon_path=(m_g_is_folder[i])? m_folder_icon : m_file_icon;
      //--- 如果是文件夹，在字符串中删除最后的字符 ('\') 
      if(m_g_is_folder[i])
         m_g_item_text[i]=::StringSubstr(m_g_item_text[i],0,::StringLen(m_g_item_text[i])-1);
      //--- 在树形视图中增加项目u
      m_treeview.AddItem(i,m_g_prev_node_list_index[i],m_g_item_text[i],icon_path,m_g_item_index[i],
                         m_g_node_level[i],m_g_prev_node_item_index[i],m_g_items_total[i],m_g_folders_total[i],false,m_g_is_folder[i]);
     }
//--- 创建树形视图
   if(!m_treeview.CreateTreeView(m_chart_id,m_subwin,m_x,m_y+m_address_bar_y_size))
      return(false);
//---
   return(true);
  }
```

### 事件处理函数

(1) 在树形视图列表中选择目录相对文件系统的完整路径(包括硬盘的卷标), (2) 相对终端沙盒的路径 以及 (3) 当前目录 都保存在类的栏位中，我们需要对应的方法来取得这些值。另外，我们还将需要 **CFileNavigator::SelectedFile** ()方法来取得选中的文件元素。

```
class CFileNavigator : public CElement
  {
private:
   //--- 当前路径相对于终端"沙盒"的路径
   string            m_current_path;
   //--- 相对于文件系统的当前路径，包含硬盘卷标
   string            m_current_full_path;
   //--- 当前目录区域
   int               m_directory_area;
   //---
public:
   //--- 返回 (1) 当前路径 (2) 完整路径 
   string            CurrentPath(void)                                  const { return(m_current_path);                    }
   string            CurrentFullPath(void)                              const { return(m_current_full_path);               }
   //--- 返回 (1) 目录区域 (2) 选中的文件
   int               DirectoryArea(void)                                const { return(m_directory_area);                  }
   string            SelectedFile(void)                                 const { return(m_treeview.SelectedItemFileName()); }
  };
```

文件导航器的事件处理函数经过配置只接收ID为 **ON\_CHANGE\_TREE\_PATH** 的事件，它是由在树形视图结构中选中一个项目时生成， **CFileNavigator::OnChangeTreePath** () 方法就是实现用来处理这个ID的事件的。

首先，我们得到树形视图中保存的路径，之后，根据路径的种类 (公用或是本地), 我们 (1) 得到数据文件夹根目录的地址 并且 (2) 构建短的和长的路径并保存目录区域标志。

```
class CFileNavigator : public CElement
  {
private:
   //--- 处理在树形视图中选择新路径的事件
   void              OnChangeTreePath(void);
  };
//+------------------------------------------------------------------+
//| 处理在树形视图中选择新路径的事件                         |
//+------------------------------------------------------------------+
void CFileNavigator::OnChangeTreePath(void)
  {
//--- 取得当前路径
   string path=m_treeview.CurrentFullPath();
//--- 如果这是终端公用文件夹
   if(::StringFind(path,"Common\\Files\\",0)>-1)
     {
      //--- 取得终端公用文件夹的地址
      string common_path=::TerminalInfoString(TERMINAL_COMMONDATA_PATH);
      //--- 删除字符串中的 "Common\" 前缀 (在事件中得到的)
      path=::StringSubstr(path,7,::StringLen(common_path)-7);
      //--- 生成路径 (短的和完整的版本 )
      m_current_path      =::StringSubstr(path,6,::StringLen(path)-6);
      m_current_full_path =common_path+"\\"+path;
      //--- 保存目录区域
      m_directory_area=FILE_COMMON;
     }
//--- 如果这是终端的本地目录
   else if(::StringFind(path,"MQL5\\Files\\",0)>-1)
     {
      //--- 取得终端中本地数据目录的地址
      string local_path=::TerminalInfoString(TERMINAL_DATA_PATH);
      //--- 生成路径 (短的和完整的版本 )
      m_current_path      =::StringSubstr(path,11,::StringLen(path)-11);
      m_current_full_path =local_path+"\\"+path;
      //--- 保存目录区域
      m_directory_area=0;
     }
//--- 在地址条上显示当前路径 
   UpdateAddressBar();
  }
```

结果是，当 **ON\_CHANGE\_TREE\_PATH** 事件到来时，应该在控件的事件处理函数中调用 **CFileNavigator::OnChangeTreePath** ()方法， 代码如下所示:

```
//+------------------------------------------------------------------+
//| 事件处理函数                           |
//+------------------------------------------------------------------+
void CFileNavigator::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理 "树形视图中路径改变" 事件
   if(id==CHARTEVENT_CUSTOM+ON_CHANGE_TREE_PATH)
     {
      OnChangeTreePath();
      return;
     }
  }
```

与该ID相同的事件可以在自定义类的处理函数中接收，例子在下面讨论。

### 把控件和开发库相集成

为了控件能够正常工作，它应该与库引擎相集成。增加的代码主要是插入在 **CWndContainer** 类中，它位于 **WndContainer.mqh** 文件，所有其他的库元件都在此集成。我们应该加入以下内容:

- 文件导航器的私有数组;
- 在应用程序图形界面中用于取得文件导航器(**CFileNavigator**)数量的方法;
- 用于把文件导航器元件指针保存到数据库中的方法。

精简版本的 **CWndContainer** 类 (只有添加内容)可参见下方代码:

```
#include "FileNavigator.mqh"
//+------------------------------------------------------------------+
//| 用于保存所有界面对象的类                       |
//+------------------------------------------------------------------+
class CWndContainer
  {
protected:
   //--- 窗口数组
   CWindow          *m_windows[];
   //--- 元件数组的结构
   struct WindowElements
     {
      //--- 文件导航器
      CFileNavigator   *m_file_navigators[];
     };
   //--- 每个窗口的元件数组
   WindowElements    m_wnd[];
   //---
public:
   //--- 文件导航器的数量
   int               FileNavigatorsTotal(const int window_index);
   //---
private:
   //--- 把树形视图的指针保存到库中
   bool              AddFileNavigatorElements(const int window_index,CElement &object);
  };
```

您可以在下面附件的文件中详细学习方法的代码。

### 测试文件导航器

现在，测试文件导航器的准备已经完毕，让我们从前面的文章中复制一份EA，从用户类(**CProgram**)中删除除了主菜单和状态条之外的所有元件。为了快速测试主文件编辑器内容模式，让我们创建两个EA参数，代码如下方所示。这些类型的枚举和模式已经在上面的文章部分详细介绍了。

```
//+------------------------------------------------------------------+
//|                                                      Program.mqh |
//|                        Copyright 2015, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
//--- 外部参数
input ENUM_FILE_NAVIGATOR_CONTENT NavigatorContent =FN_BOTH;         // 导航器内容
input ENUM_FILE_NAVIGATOR_MODE    NavigatorMode    =FN_ONLY_FOLDERS; // 导航器模式
```

现在，我们需要声明 **CFileNavigator** 文件导航器的实例，以及创建元件的方法，并制定它们距离表单边缘的距离。

```
class CProgram : public CWndEvents
  {
private:
   //--- 文件导航器
   CFileNavigator    m_navigator;
   //---
private:
   //--- 文件导航器
#define NAVIGATOR1_GAP_X      (2)
#define NAVIGATOR1_GAP_Y      (43)
   bool              CreateFileNavigator(void);
  };
```

用于创建文件导航器的 **CProgram::CreateFileNavigator** () 方法的代码提供在下方，我们将把导航器的高度设为 **10** 个点，它们的默认值(**20** 个像素点)是在 **CFileNavigator** 类的构造函数中指定的。上面已经提到，内容模式将通过外部参数进行管理，组件的外观可以通过使用方法得到指针来做到，下面的代码提供了实例，可以得到树形视图的指针和它的滚动条。对方法的调用应该是位于创建图形界面的主方法之中。

```
//+------------------------------------------------------------------+
//| 创建EA面板                            |
//+------------------------------------------------------------------+
bool CProgram::CreateExpertPanel(void)
  {
//--- 创建控件表单1
//--- 创建控件:
//    主菜单
//--- 上下文菜单
//--- 创建状态栏
//--- 创建文件导航器
   if(!CreateFileNavigator())
      return(false);
//--- 重绘图表
   m_chart.Redraw();
   return(true);
  }
//+------------------------------------------------------------------+
//| 创建文件导航器                           |
//+------------------------------------------------------------------+
bool CProgram::CreateFileNavigator(void)
  {
//--- 保存表单的指针
   m_navigator.WindowPointer(m_window1);
//--- 坐标
   int x=m_window1.X()+NAVIGATOR1_GAP_X;
   int y=m_window1.Y()+NAVIGATOR1_GAP_Y;
//--- 在创建之前设置属性
   m_navigator.TreeViewPointer().VisibleItemsTotal(10);
   m_navigator.NavigatorMode(NavigatorMode);
   m_navigator.NavigatorContent(NavigatorContent);
   m_navigator.TreeViewAreaWidth(250);
   m_navigator.AddressBarBackColor(clrWhite);
   m_navigator.AddressBarTextColor(clrSteelBlue);
//--- 滚动条属性
   m_navigator.TreeViewPointer().GetScrollVPointer().AreaBorderColor(clrLightGray);
   m_navigator.TreeViewPointer().GetContentScrollVPointer().AreaBorderColor(clrLightGray);
//--- 创建控件
   if(!m_navigator.CreateFileNavigator(m_chart_id,m_subwin,x,y))
      return(false);
//--- 把控件之阵加到库中
   CWndContainer::AddToElementsArray(0,m_navigator);
   return(true);
  }
```

作为实例，让我们在事件处理函数中同时显示完整和短的路径，以及当前选择的文件的名称。如果文件被选中，我们将打开它，读取前三行写入记录中。请注意，我们使用 **CFileNavigator::DirectoryArea** () 方法来根据文件位置获取标志，这样我们就能够管理一定的目录范围。

```
//+------------------------------------------------------------------+
//| 事件处理函数                            |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- 处理 "在树形视图中改变路径" 的事件
   if(id==CHARTEVENT_CUSTOM+ON_CHANGE_TREE_PATH)
     {
      ::Print(__FUNCTION__," > id: ",id,"; 文件名: ",m_navigator.SelectedFile());
      ::Print(__FUNCTION__," > id: ",id,"; 路径: ",m_navigator.CurrentPath()+m_navigator.SelectedFile());
      ::Print(__FUNCTION__," > id: ",id,"; 完整路径: ",m_navigator.CurrentFullPath()+m_navigator.SelectedFile());
      //--- 如果文件被选中，就读取它 (前三行)
      if(m_navigator.SelectedFile()!="")
        {
         //--- 构建文件的路径
         string path=m_navigator.CurrentPath()+m_navigator.SelectedFile();
         //--- 取得指定文件的句柄
         int filehandle=::FileOpen(path,FILE_READ|FILE_TXT|FILE_ANSI|m_navigator.DirectoryArea(),'\n');
         //--- 如果得到了句柄，读取前三行
         if(filehandle!=INVALID_HANDLE)
           {
            ::Print(__FUNCTION__," > 打开的文件: ",path);
            ::Print(__FUNCTION__," > 行 01: ",::FileReadString(filehandle));
            ::Print(__FUNCTION__," > 行 02: ",::FileReadString(filehandle));
            ::Print(__FUNCTION__," > 行 03: ",::FileReadString(filehandle));
           }
         //--- 关闭文件
         ::FileClose(filehandle);
        }
      ::Print("---");
     }
  }
```

现在，是时候编译程序并在图表上运行它了，结果显示在下面的屏幕截图中，对于您来说，文件导航器的内容应该与您电脑中终端文件系统的内容相符合。

![图 1. 测试文件导航器](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-24.hpe "图 1. 测试文件导航器")
![[Pasted image 20260628223934.png]]
图 1. 测试文件导航器

下面的屏幕截图显示了展开的文件导航器树形视图:

![图 2. 文件导航器树形视图的展开结构](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-25.hpe "图 2. 文件导航器树形视图的展开结构")
![[Pasted image 20260628223945.png]]
图 2. 文件导航器树形视图的展开结构

在我们的测试EA中处理自定义类的事件时，会在记录文件中得到下面的结果:

```
2016.06.16 02:15:29.994         CProgram::OnEvent > 行 03: 2,155.66,1028.00,1.04,0.30,0.64,0.24,0.01,2,0,10,10,0
2016.06.16 02:15:29.994         CProgram::OnEvent > 行 02: 1,260.67,498.00,1.13,1.05,0.26,1.00,0.03,3,0,10,10,0
2016.06.16 02:15:29.994         CProgram::OnEvent > 行 01: №,PROFIT,TOTAL DEALS,PROFIT FACTOR,EXPECTED PAYOFF,EQUITY DD MAX REL%,RECOVERY FACTOR,SHARPE RATIO,AmountBars,TakeProfit,StopLoss,TrailingSL,ReversePosition
2016.06.16 02:15:29.994         CProgram::OnEvent > 打开的文件: DATA_OPTIMIZATION\WriteResOptByCriterion\optimization_results2.csv
2016.06.16 02:15:29.994         CProgram::OnEvent > id: 1023; 完整路径: C:\Users\tol64\AppData\Roaming\MetaQuotes\Terminal\Common\Files\DATA_OPTIMIZATION\WriteResOptByCriterion\optimization_results2.csv
2016.06.16 02:15:29.994         CProgram::OnEvent > id: 1023; 路径: DATA_OPTIMIZATION\WriteResOptByCriterion\optimization_results2.csv
2016.06.16 02:15:29.994         CProgram::OnEvent > id: 1023; 文件名: optimization_results2.csv
```

一切工作正常!

### 结论

当前开发阶段中创建图形界面库的结构如下所示:

![图 3. 当前开发阶段的库结构](https://us-03.server2386.com/uv/service/hvtrs8%2F-c%2Cmsl7.aoo%2F0%2F03-32.hpe "图 3. 当前开发阶段的库结构")
![[Pasted image 20260628223959.png]]
图 3. 当前开发阶段的库结构

这是在 **MetaTrader** 交易终端中创建图形界面系列第八部分的最后一章，在这个部分，我们讨论了诸如静态和下拉日历，树形视图，鼠标箭头以及文件导航器的控件，

系列文章的下个(第九)部分中，我们将讨论以下控件:

- 颜色选择器；
- 进度条；
- 线形图表。

您可以在下面下载整个第八部分的资料，如果您对使用这些资料有任何问题，您可以在以下列出的文章中找到库开发过程的详细描述，或者您也可以在文章的留言处问问题。

**第八部分的文章(章节)列表:**

- [图形界面 VIII: 日历控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0517)
- [图形界面 VIII: 树形视图控件 (第二章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0519)
- [图形界面 VIII: 文件浏览器控件 (第三章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0561!pcrc1)

本文由MetaQuotes Ltd译自俄文  
原文地址： [https://www.mql5.com/ru/articles/2541](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fpu-aptkcneq%2F0561)

**附加的文件** |

[下载ZIP](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2743.xir "下载单独ZIP中的所有附件")

[easyandfastgui\_mql4.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2743%2Fgaqycnffcsvgwi%5Dmsl6.xir "下载 easyandfastgui_mql4.zip") (358.62 KB)

[easyandfastgui\_mql5.zip](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2Ffounnocd-2743%2Fgaqycnffcsvgwi%5Dmsl7.xir "下载 easyandfastgui_mql5.zip") (358.75 KB)

#### 该作者的其他文章

- [帧分析器（Frames Analyzer）工具带来的时间片交易魔法](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F31465)
- [ZigZag (之字折线) 的力量(第二部分)。 接收、处理和显示数据的示例](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7564)
- [ZigZag(之字折线)的力量(第一部分)。 开发指标基类](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F7563)
- [同时双向工作的通用 RSI 指标](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6808)
- [包含图形用户界面 (GUI) 的 EA 交易: 增加功能 (第二部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6707)
- [包含图形用户界面 (GUI) 的 EA 交易: 创建面板 (第一部分)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6735)
- [可视化使用选定标准优化的结果](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F6616)

[采用栈式 RBM 的深度神经网络。自训练, 自控制](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F3608)

本文是有关深度神经网络和预测器选择的前文之续篇。在此我们将涵盖由栈式 RBM 初始化的深度神经网络特性, 以及它在 "darch" 软件包里的实现。

[在外汇市场中货币篮子的运作](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0640)

本文论述了如何将货币对分组 (篮子), 以及如何使用某些指标来获取它们的有关状态数据 (例如, 超买和超卖), 以及如何在交易中应用此数据。

[图形界面 IX: 颜色选择器控件 (第一章)](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0559)

从本文开始，我们来到了致力于在 MetaTrader 交易终端中创建图形界面系列文章的第九部份。它有两章，包含了新的控件和接口，例如颜色选择器，颜色按钮，进度条和线性图表等。

[MQL5 对决 QLUA - 为什么在 MQL5 中交易操作速度快达 28 倍?](https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fxh-aptkcneq%2F0615)

您可曾想过您的订单是如何迅速传递到交易所, 它的执行速度如何, 而您的终端需要多久才能收到操作结果？我们已经准备好一场交易操作执行速度的比对, 因为从未有人测量过使用 MQL5 和 QLUA 应用时的这些数值。

<iframe width="800" height="80" frameborder="0" src="https://us-03.server2386.com/uv/service/hvtrs8%2F-wuw%2Cmsl7.aoo%2Fdf-sj%2F16pyl3x2w6sc%6077cx2-ildgx%2Chvmn%3Fnilk%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Dngupo%60omk'3Duvm%5Dsmupcg%251Duwu.oqn5%2Ccmm'24uvm%5Dmgdkuo%251Dfiqpna%7B%2506wto_vepm'3Frgaf.lewrmbmoi%2506wto_aoltgnv%251Dtiqiv.raee'24uvm%5Dccmrakgl%251Dlewrmbmoi.rrmmm.24%2C2226%26c%3Dmcvfmlgyjdol%7Bjetis%7Bbaevwvidvrmsc%24s%3F74c%3B5%604f8136ff0d3%3A36c%60c6a6b35ffd5a80306f0gd7ac76e0c011a%3Bf0e3e6e4%26t%3D3%26u%3D%3A02%26j%3D%3A0%24r%3Fhvtrs'3C%250F'2Dwuw%2Cmsl7.aoo%250Fxh'2Daptkcneq%250F0561%24hmsv%3Djtvpq%251A'2D%250Fuwu.oqn5%2Ccmm'2Dfd%250F%24if%3Dudcuqxzqppthgk%60whrhljqhgjyjeqrsqcu%24fx_wnkq%3F615%3A016%3B03232540623%24cwsvoo%3D"></iframe>