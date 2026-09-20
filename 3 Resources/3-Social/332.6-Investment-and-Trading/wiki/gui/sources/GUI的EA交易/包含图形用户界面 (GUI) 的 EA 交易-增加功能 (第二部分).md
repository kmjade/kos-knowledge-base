---
created: 2026-06-22
tags:
  - mql5
  - gui
  - ea
triage:
  status: processed
  timeliness: reference
  type: reference
  complexity: medium
see_also:
  - "[[gui/compiled/MQL图形界面I-库结构]]"
---

### 目录

- [简介](https://www.mql5.com/zh/articles/4727#para1)
- [取得交易品种和指标数据](https://www.mql5.com/zh/articles/4727#para2)
- [取得开启仓位的数据](https://www.mql5.com/zh/articles/4727#para3)
- [使用数据初始化表格](https://www.mql5.com/zh/articles/4727#para4)
- [实时更新表格](https://www.mql5.com/zh/articles/4727#para5)
- [处理控件的事件](https://www.mql5.com/zh/articles/4727#para6)
- [进行交易操作的方法](https://www.mql5.com/zh/articles/4727#para7)
- [结论](https://www.mql5.com/zh/articles/4727#para8)

### 简介

[在前一篇文章中](https://www.mql5.com/zh/articles/4715), 我演示了如何快速开发 EA 的图形界面 (GUI)，在这里我们将会把开发好的 GUI 与 EA 的功能关联起来。 

### 取得交易品种和指标数据

首先，我们需要处理的是取得交易品种和指标的数据。让我们根据 **Symbols filter（交易品种过滤器）** 输入栏位的过滤值来把外汇交易品种以表格方式显示，这是通过 **CProgram::GetSymbols**() 方法完成的。

在方法的开始，在进度条上标记现在正在接收的交易品种，一开始，交易品种的总数是不知道的，所以，把进度条的进度设为 50%. 下一步，释放交易品种数组。当使用应用程序操作时，我们可能需要构建另一个交易品种列表，这就是为什么我们每次调用 **CProgram::GetSymbols**() 方法的时候都要这样做。

只有在 **Symbols filter** 输入栏位的复选框被启用的时候，才会使用栏位内容过滤，输入栏位中包含了一些逗号分隔的文本字符。如果满足条件, 这些字符会作为分隔的元素填入数组中，这样之后在搜索所需交易品种的时候就可以使用了。如有需要，会从每个元素的边缘删除特定的字符。

下一步是循环收集外汇交易品种，它会便利服务器上可用的所有交易品种的完整列表。在每次迭代的开始，我们取得交易品种的名称并从市场报价窗口中删除它，这样，程序 GUI 和这个窗口中的列表就不会冲突了。下一步，检查得到的交易品种是否属于外汇交易品种的类别. 如果所有的交易品种都是需要的，只要简单把这个条件注释掉或者删除它就可以了。在本文中，我们只会处理外汇交易品种。

如果启用了名称过滤，在循环中检查所得到交易品种的名称是否与 **Symbols filter** 输入栏位的文本字符匹配。如果没有匹配，就把交易品种加到数组中，

如果没有找到交易品种，就只会把当前主图表的交易品种加到数组中。随后，所有加在数组中的交易品种都会显示在市场报价窗口中。 

```c++

//+------------------------------------------------------------------+
//| 用于创建应用程序的类                                                 |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 交易品种
   string            m_symbols[];
   //---
private:
   //--- 取得交易品种
   void              GetSymbols(void);
  };
//+------------------------------------------------------------------+
//| 取得交易品种                                                       |
//+------------------------------------------------------------------+
void CProgram::GetSymbols(void)
  {
   m_progress_bar.LabelText("Get symbols...");
   m_progress_bar.Update(1,2);
   ::Sleep(5);
//--- 释放交易品种数组
   ::ArrayFree(m_symbols);
//--- 元素字符串数组
   string elements[];
//--- 交易品种名称过滤
   if(m_symb_filter.IsPressed())
     {
      string text=m_symb_filter.GetValue();
      if(text!="")
        {
         ushort sep=::StringGetCharacter(",",0);
         ::StringSplit(text,sep,elements);
         //---
         int elements_total=::ArraySize(elements);
         for(int e=0; e<elements_total; e++)
           {
            //--- 清除边界
            ::StringTrimLeft(elements[e]);
            ::StringTrimRight(elements[e]);
           }
        }
     }
//--- 收集外汇交易品种数组
   int symbols_total=::SymbolsTotal(false);
   for(int i=0; i<symbols_total; i++)
     {
      //--- 取得交易品种名称
      string symbol_name=::SymbolName(i,false);
      //--- 在市场报价窗口中隐藏
      ::SymbolSelect(symbol_name,false);
      //--- 如果这不是一个外汇交易品种，就转到下一个
      if(::SymbolInfoInteger(symbol_name,SYMBOL_TRADE_CALC_MODE)!=SYMBOL_CALC_MODE_FOREX)
         continue;
      //--- 交易品种名称过滤
      if(m_symb_filter.IsPressed())
        {
         bool check=false;
         int elements_total=::ArraySize(elements);
         for(int e=0; e<elements_total; e++)
           {
            //--- 搜索交易品种名称匹配
            if(::StringFind(symbol_name,elements[e])>-1)
              {
               check=true;
               break;
              }
           }
         //--- 如果过滤器不通过，转到下一个
         if(!check)
            continue;
        }
      //--- 把交易品种保存到数组中
      int array_size=::ArraySize(m_symbols);
      ::ArrayResize(m_symbols,array_size+1);
      m_symbols[array_size]=symbol_name;
     }
//--- 如果数组为空，就把当前交易品种设为默认的一个
   int array_size=::ArraySize(m_symbols);
   if(array_size<1)
     {
      ::ArrayResize(m_symbols,array_size+1);
      m_symbols[array_size]=::Symbol();
     }
//--- 在市场报价窗口中显示
   int selected_symbols_total=::ArraySize(m_symbols);
   for(int i=0; i<selected_symbols_total; i++)
      ::SymbolSelect(m_symbols[i],true);
  }

```

现在，让我们探讨使用 **CProgram::GetHandles**() 方法取得所有交易品种的指标句柄。首先，把句柄数组的大小设为与交易品种数组相同。句柄对应的时段是在 **Timeframes** 组合框中设置的，因为组合框允许您取得字符串的值，它在随后应当被转换为相应的类型 ([ENUM_TIMEFRAMES](https://www.mql5.com/zh/docs/constants/chartconstants/enum_timeframes))。在循环中填充句柄数组. 在本例中，这是使用了默认参数值的 **Stochastic(随机振荡)**指标。在每次迭代中要更新进度条指示。要记住图中第一个句柄的索引，会在方法的末尾显示。

```c++

class CProgram : public CWndEvents
  {
private:
   //--- 指标句柄
   int               m_handles[];
   //--- 当前图的句柄索引
   int               m_current_handle_index;
   //---
private:
   //--- 取得句柄
   void              GetHandles(void);
  };
//+------------------------------------------------------------------+
//| 取得所有交易品种的指标句柄                                            |
//+------------------------------------------------------------------+
void CProgram::GetHandles(void)
  {
//--- 设置句柄数组的大小
   int symbols_total=::ArraySize(m_symbols);
   ::ArrayResize(m_handles,symbols_total);
//--- 从组合框下拉列表中取值
   string tf=m_timeframes.GetListViewPointer().SelectedItemText();
//--- 遍历交易品种列表
   for(int i=0; i<symbols_total; i++)
     {
      //--- 取得指标句柄
      m_handles[i]=::iStochastic(m_symbols[i],StringToTimeframe(tf),5,3,3,MODE_SMA,STO_LOWHIGH);
      //--- 进度条
      m_progress_bar.LabelText("Get handles: "+string(symbols_total)+"/"+string(i)+" ["+m_symbols[i]+"] "+((m_handles[i]!=WRONG_VALUE)? "ok" : "wrong")+"...");
      m_progress_bar.Update(i,symbols_total);
      ::Sleep(5);
     }
//--- 记住图中句柄的索引
   m_current_handle_index=0;
  }

```


使用 **CProgram::GetIndicatorValues**() 方法来取得指标值。描述算法首先，把指标值数组的大小设为与句柄数组大小相等，在主循环中，遍历句柄数组并在每次迭代的时候尝试5次来读取指标数据。检查句柄是否有效，并且如果之前没有成功得到就再次尝试读取。在主循环的末尾更新进度条，这样我们就能看到当前程序的执行阶段。

```c++

class CProgram : public CWndEvents
  {
private:
   //--- 指标值
   double            m_values[];
   //---
private:
   //--- 读取所有交易品种上的指标值
   void              GetIndicatorValues(void);
  };
//+------------------------------------------------------------------+
//| 读取所有交易品种的指标值                                              |
//+------------------------------------------------------------------+
void CProgram::GetIndicatorValues(void)
  {
//--- 设置大小
   int handles_total=::ArraySize(m_handles);
   ::ArrayResize(m_values,handles_total);
//--- 从组合框下拉列表中取值
   string tf=m_timeframes.GetListViewPointer().SelectedItemText();
//--- 针对列表中的所有交易品种读取指标数据
   for(int i=0; i<handles_total; i++)
     {
      //--- 尝试5次读取数据
      int attempts=0;
      int received=0;
      while(attempts<5)
        {
         //--- 如果句柄无效，尝试再次获取
         if(m_handles[i]==WRONG_VALUE)
           {
            //--- 取得指标句柄
            m_handles[i]=::iStochastic(m_symbols[i],StringToTimeframe(tf),5,3,3,MODE_SMA,STO_LOWHIGH);
            continue;
           }
         //--- 尝试读取指标值
         double values[1];
         received=::CopyBuffer(m_handles[i],1,0,1,values);
         if(received>0)
           {
            //--- 保存数值
            m_values[i]=values[0];
            break;
           }
         //--- 增加计数器
         attempts++;
         ::Sleep(100);
        }
      //--- 进度条
      m_progress_bar.LabelText("Get values: "+string(handles_total)+"/"+string(i)+" ["+m_symbols[i]+"] "+((received>0)? "ok" : "wrong")+"...");
      m_progress_bar.Update(i,handles_total);
      ::Sleep(5);
     }
  }

```


在构建了交易品种列表并读取了指标值之后，把数组中的值加到 **Trade(交易)** 页面的表格中。**CProgram::RebuildingTables**() 方法就是执行这项工作的。交易品种的数量可能是变化的，所以，表格在每次调用这个方法的时候要全部重新构建。

首先，所有的行，除了备份的之外，要从表格中全部删除。然后，再次根据交易品种的数量来把行加入表格。然后我们在循环中遍历它们，并加上之前在另外独立的数组中得到的数值。除了数值它们本身，我们还需要使用颜色来突出显示文字，来看到哪个信号已经根据指标值生成了。低于 **Stochastic** 指标值将会使用蓝色突出显示，作为买入信号，而高于指标最大值的数值将以红色突出显示，作为卖出信号。进度条在程序工作中每次迭代的时候都要更新。在方法的末尾，要更新表格和滚动条。

```c++

//+------------------------------------------------------------------+
//| 重新构建交易品种表格                                                 |
//+------------------------------------------------------------------+
void CProgram::RebuildingTables(void)
  {
//--- 删除所有行
   m_table_symb.DeleteAllRows();
//--- 根据交易品种数量设置行数
   int symbols_total=::ArraySize(m_symbols);
   for(int i=0; i<symbols_total-1; i++)
      m_table_symb.AddRow(i);
//--- 设置第一列的数值
   uint rows_total=m_table_symb.RowsTotal();
   for(uint r=0; r<(uint)rows_total; r++)
     {
      //--- 设置数值
      m_table_symb.SetValue(0,r,m_symbols[r]);
      m_table_symb.SetValue(1,r,::DoubleToString(m_values[r],2));
      //--- 设置颜色
      color clr=(m_values[r]>(double)m_up_level.GetValue())? clrRed :(m_values[r]<(double)m_down_level.GetValue())? C'85,170,255' : clrBlack;
      m_table_symb.TextColor(0,r,clr);
      m_table_symb.TextColor(1,r,clr);
      //--- 更新进度条
      m_progress_bar.LabelText("Initialize tables: "+string(rows_total)+"/"+string(r)+"...");
      m_progress_bar.Update(r,rows_total);
      ::Sleep(5);
     }
//--- 更新表格
   m_table_symb.Update(true);
   m_table_symb.GetScrollVPointer().Update(true);
   m_table_symb.GetScrollHPointer().Update(true);
  }

```

所有上面描述的方法都在 **CProgram::RequestData**() 方法中调用，它只接收一个参数，用于检查控件元件的 ID — **Request(请求)** 按钮。在检查之后，会临时隐藏表格并使进度条可见，然后，在按顺序调用所有上面描述的方法来取得数据和把它加入表格，然后，再隐藏进度条，把组合框中的时段信息加到图中再使最新的变化可见。 

```c++

//+------------------------------------------------------------------+
//| 请求数据                                                           |
//+------------------------------------------------------------------+
bool CProgram::RequestData(const long id)
  {
//--- 检查元件 ID
   if(id!=m_request.Id())
      return(false);
//--- 隐藏表格
   m_table_symb.Hide();
//--- 显示进度
   m_progress_bar.Show();
   m_chart.Redraw();
//--- 初始化图形和表格
   GetSymbols();
   GetHandles();
   GetIndicatorValues();
   RebuildingTables();
//--- 隐藏进度条
   m_progress_bar.Hide();
//--- 从组合框下拉列表中取值
   string tf=m_timeframes.GetListViewPointer().SelectedItemText();
//--- 根据索引取得图的指针
   m_sub_chart1.GetSubChartPointer(0).Period(StringToTimeframe(tf));
   m_sub_chart1.ResetCharts();
//--- 显示表格
   m_table_symb.Show();
   m_chart.Redraw();
   return(true);
  }

```


### 取得开启仓位的数据

当 EA 被附加到图表的时候，我们需要立即确定是否有开启的仓位来把数据显示在 **Positions(仓位)** 页面的表格中，在Toolbox(工具箱)窗口的Trade(交易)页面，可以找到全部仓位的列表。如需根据交易品种只关闭一个仓位，可点击 **Profit(利润)**列的表格单元。如果这个交易品种有几个仓位 (锁仓账户) 而您需要全部关闭它们，您将需要几个步骤。在 GUI 的仓位表格，一行(对于每个交易品种)应当包含了当前当前结果、存款负载和平均价格这些总的数据。另外，增加了功能来对指定交易品种的全部仓位可以单击关闭全部。 

首先，让我们探讨 **CProgram::GetPositionsSymbols**() 方法，它是用于根据仓位取得交易品种列表的方法。要向它传入一个空的动态数组，以便读取交易品种。然后，在循环中遍历所有开启的仓位，在每次迭代中，取得仓位的交易品种名称，并且把它使用 "," 分隔符加到字符串变量中。在加入交易品种名称之前，要检查它是否已经存在于其中。 

在完成循环并构建交易品种行之后， 我们就能够从传入的数组中取得行元素并返回得到的交易品种数量。

```c++

//+------------------------------------------------------------------+
//| 根据开启仓位的数组读取交易品种                                         |
//+------------------------------------------------------------------+
int CProgram::GetPositionsSymbols(string &symbols_name[])
  {
   string symbols="";
//--- 第一次循环遍历，取得已开启仓位的交易品种
   int positions_total=::PositionsTotal();
   for(int i=0; i<positions_total; i++)
     {
      //--- 选择一个仓位并取得它的交易品种
      string position_symbol=::PositionGetSymbol(i);
      //--- 如果有交易品种名称
      if(position_symbol=="")
         continue;
      //--- 如果没有，就加上这样一行
      if(::StringFind(symbols,position_symbol,0)==WRONG_VALUE)
         ::StringAdd(symbols,(symbols=="")? position_symbol : ","+position_symbol);
     }
//--- 根据分隔符取得行元素
   ushort u_sep=::StringGetCharacter(",",0);
   int symbols_total=::StringSplit(symbols,u_sep,symbols_name);
//--- 返回交易品种数量
   return(symbols_total);
  }

```


现在我们已经有了交易品种数组，我们可以简单地根据指定的交易品种名称取得仓位累积数据了。让我们探讨一下在仓位表格中取得所有数据列数值的方法，

为了根据指定的交易品种取得仓位的数量，要使用 **CProgram::PositionsTotal**() 方法，它会在循环中遍历所有的仓位，然后只计数那些与在方法参数中指定的交易品种匹配的交易品种。

```c++

//+------------------------------------------------------------------+
//| 根据指定属性取得交易仓位数量                                          |
//+------------------------------------------------------------------+
int CProgram::PositionsTotal(const string symbol)
  {
//--- 仓位计数器
   int pos_counter=0;
//--- 检查仓位中是否有指定属性
   int positions_total=::PositionsTotal();
   for(int i=positions_total-1; i>=0; i--)
     {
      //--- 如果选择仓位失败，转到下一个
      if(symbol!=::PositionGetSymbol(i))
         continue;
      //--- 增加计数器
      pos_counter++;
     }
//--- 返回仓位数量
   return(pos_counter);
  }

```


仓位的交易量可以使用 **CProgram::PositionsVolumeTotal**() 方法获得。除了从交易品种来取得仓位总的交易量之外，, 也可以向这个方法传入它们的类型，尽管，类型是这个参数的一个可选参数。默认情况下指定的是 [WRONG_VALUE](https://www.mql5.com/zh/docs/constants/namedconstants/otherconstants) 值。如果没有指定类型，就不使用检查，方法会返回所有仓位的交易量。 

```c++

//+------------------------------------------------------------------+
//| 根据指定属性得到仓位的总交易量                                         |
//+------------------------------------------------------------------+
double CProgram::PositionsVolumeTotal(const string symbol,const ENUM_POSITION_TYPE type=WRONG_VALUE)
  {
//--- 交易量计数器
   double volume_counter=0;
//--- 检查仓位中是否有指定属性
   int positions_total=::PositionsTotal();
   for(int i=positions_total-1; i>=0; i--)
     {
      //--- 如果选择仓位失败，转到下一个
      if(symbol!=::PositionGetSymbol(i))
         continue;
      //--- 如果我们需要检查类型
      if(type!=WRONG_VALUE)
        {
         //--- 如果类型不匹配，就转到下一个仓位
         if(type!=(ENUM_POSITION_TYPE)::PositionGetInteger(POSITION_TYPE))
            continue;
        }
      //--- 总计交易量
      volume_counter+=::PositionGetDouble(POSITION_VOLUME);
     }
//--- 返回交易量
   return(volume_counter);
  }

```

**CProgram::PositionsFloatingProfitTotal**() 方法可以得到指定交易品种仓位的总浮动利润，在计算中也会考虑到仓位的累积隔夜息。我们用来计算浮动利润的仓位的类型可以在一个可选参数中进行设置，这样，该方法就变得更加通用了。 

```c++

//+------------------------------------------------------------------+
//| 根据指定属性计算仓位的总浮动利润                                       |
//+------------------------------------------------------------------+
double CProgram::PositionsFloatingProfitTotal(const string symbol,const ENUM_POSITION_TYPE type=WRONG_VALUE)
  {
//--- 当前利润计数器
   double profit_counter=0.0;
//--- 检查仓位中是否有指定属性
   int positions_total=::PositionsTotal();
   for(int i=positions_total-1; i>=0; i--)
     {
      //--- 如果选择仓位失败，转到下一个
      if(symbol!=::PositionGetSymbol(i))
         continue;
      //--- 如果我们需要检查类型
      if(type!=WRONG_VALUE)
        {
         //--- 如果类型不匹配，就转到下一个仓位
         if(type!=(ENUM_POSITION_TYPE)::PositionGetInteger(POSITION_TYPE))
            continue;
        }
      //--- 总计当前利润 + 累积隔夜息
      profit_counter+=::PositionGetDouble(POSITION_PROFIT)+::PositionGetDouble(POSITION_SWAP);
     }
//--- 返回结果
   return(profit_counter);
  }

```


平均价格是使用 **CProgram::PositionAveragePrice**() 方法来计算的。在循环中取得每个交易品种仓位的价格和交易量，然后, 把这些数值的乘积相加, 并且 把仓位的交易量相加 (分开)，在完成循环之后，用价格和交易量乘积的和除以交易量的和，就得到了指定交易品种仓位的平均价格。所述的方法就返回这个值。

```c++

//+------------------------------------------------------------------+
//| 平均仓位价格                                                       |
//+------------------------------------------------------------------+
double CProgram::PositionAveragePrice(const string symbol)
  {
//--- 用于计算平均价格
   double sum_mult    =0.0;
   double sum_volumes =0.0;
//--- 检查是否有仓位符合指定属性
   int positions_total=::PositionsTotal();
   for(int i=positions_total-1; i>=0; i--)
     {
      //--- 如果选择仓位失败，转到下一个
      if(symbol!=::PositionGetSymbol(i))
         continue;
      //--- 取得价格和仓位的交易量
      double pos_price  =::PositionGetDouble(POSITION_PRICE_OPEN);
      double pos_volume =::PositionGetDouble(POSITION_VOLUME);
      //--- 汇总中间值
      sum_mult+=(pos_price*pos_volume);
      sum_volumes+=pos_volume;
     }
//--- 防止除零错误
   if(sum_volumes<=0)
      return(0.0);
//--- 返回平均价格
   return(::NormalizeDouble(sum_mult/sum_volumes,(int)::SymbolInfoInteger(symbol,SYMBOL_DIGITS)));
  }

```


让我们再探讨资金负载参数，如需得到它，需要 **CProgram::DepositLoad**() 通用方法。根据传入的参数，可以使用不同的表现形式来取得数值：以存款数量以及以百分数 %. 另外，还可以只针对指定的交易品种来取得所有开启仓位的总资金负载。 

这个方法有四个参数，其中的三个是可选的。如果第一个参数是 **false**, 方法返回的值就是存款币别，如果传入的是 **true**， 返回的数值就是相对于可用保证金的百分比。 

如果您需要取得某一特定交易品种的资金负载， 如果账户的币别与交易品种的基础币别不同， 计算就需要仓位的价格，如果一个交易品种有多个开启的仓位，就应当传入平均价格。 

```c++

//+------------------------------------------------------------------+
//| 资金负载                                                           |
//+------------------------------------------------------------------+
double CProgram::DepositLoad(const bool percent_mode,const double price=0.0,const string symbol="",const double volume=0.0)
  {
//--- 计算当前的资金负载值
   double margin=0.0;
//--- 总账户负载
   if(symbol=="" || volume==0.0)
      margin=::AccountInfoDouble(ACCOUNT_MARGIN);
//--- 特定交易品种的负载
   else
     {
      //--- 为保证金计算取得数据
      double leverage         =((double)::AccountInfoInteger(ACCOUNT_LEVERAGE)==0)? 1 : (double)::AccountInfoInteger(ACCOUNT_LEVERAGE);
      double contract_size    =::SymbolInfoDouble(symbol,SYMBOL_TRADE_CONTRACT_SIZE);
      string account_currency =::AccountInfoString(ACCOUNT_CURRENCY);
      string base_currency    =::SymbolInfoString(symbol,SYMBOL_CURRENCY_BASE);
      //--- 如果交易账户的币别与交易品种的基础币别匹配
      if(account_currency==base_currency)
         margin=(volume*contract_size)/leverage;
      else
         margin=(volume*contract_size)/leverage*price;
     }
//--- 取得当前资金
   double equity=(::AccountInfoDouble(ACCOUNT_EQUITY)==0)? 1 : ::AccountInfoDouble(ACCOUNT_EQUITY);
//--- 返回当前资金负载
   return((!percent_mode)? margin : (margin/equity)*100);
  }

```

所有用于接收参数的方法都通过调用 **CProgram::SetValuesToPositionsTable**() 方法来加入表格，应当给这个方法传入所需交易品种的数组。首先，确认传入的数组不少于表格行数，然后，把得到的参数传给所有表格行，再按顺序把它们填充到表格单元中。除了数值，我们还应当设置文字的颜色：正的数值使用绿色，负数使用红色，而0则使用灰色。请注意，资金负载是针对每个交易品种显示的，在 以资金和百分比方式显示之间使用"/"做分隔。 

```c++

//+------------------------------------------------------------------+
//| 把数值加到仓位表格中                                                 |
//+------------------------------------------------------------------+
void CProgram::SetValuesToPositionsTable(string &symbols_name[])
  {
//--- 检查是否超出范围
   uint symbols_total =::ArraySize(symbols_name);
   uint rows_total    =m_table_positions.RowsTotal();
   if(symbols_total<rows_total)
      return;
//--- 把参数加到表格中
   for(uint r=0; r<rows_total; r++)
     {
      int    positions_total =PositionsTotal(symbols_name[r]);
      double pos_volume      =PositionsVolumeTotal(symbols_name[r]);
      double buy_volume      =PositionsVolumeTotal(symbols_name[r],POSITION_TYPE_BUY);
      double sell_volume     =PositionsVolumeTotal(symbols_name[r],POSITION_TYPE_SELL);
      double pos_profit      =PositionsFloatingProfitTotal(symbols_name[r]);
      double buy_profit      =PositionsFloatingProfitTotal(symbols_name[r],POSITION_TYPE_BUY);
      double sell_profit     =PositionsFloatingProfitTotal(symbols_name[r],POSITION_TYPE_SELL);
      double average_price   =PositionAveragePrice(symbols_name[r]);
      string deposit_load    =::DoubleToString(DepositLoad(false,average_price,symbols_name[r],pos_volume),2)+"/"+
                              ::DoubleToString(DepositLoad(true,average_price,symbols_name[r],pos_volume),2)+"%";
      //--- 设置数值
      m_table_positions.SetValue(0,r,symbols_name[r]);
      m_table_positions.SetValue(1,r,(string)positions_total);
      m_table_positions.SetValue(2,r,::DoubleToString(pos_volume,2));
      m_table_positions.SetValue(3,r,::DoubleToString(buy_volume,2));
      m_table_positions.SetValue(4,r,::DoubleToString(sell_volume,2));
      m_table_positions.SetValue(5,r,::DoubleToString(pos_profit,2));
      m_table_positions.SetValue(6,r,::DoubleToString(buy_profit,2));
      m_table_positions.SetValue(7,r,::DoubleToString(sell_profit,2));
      m_table_positions.SetValue(8,r,deposit_load);
      m_table_positions.SetValue(9,r,::DoubleToString(average_price,(int)::SymbolInfoInteger(symbols_name[r],SYMBOL_DIGITS)));
      //--- 设置颜色
      m_table_positions.TextColor(3,r,(buy_volume>0)? clrBlack : clrLightGray);
      m_table_positions.TextColor(4,r,(sell_volume>0)? clrBlack : clrLightGray);
      m_table_positions.TextColor(5,r,(pos_profit!=0)? (pos_profit>0)? clrGreen : clrRed : clrLightGray);
      m_table_positions.TextColor(6,r,(buy_profit!=0)? (buy_profit>0)? clrGreen : clrRed : clrLightGray);
      m_table_positions.TextColor(7,r,(sell_profit!=0)?(sell_profit>0)? clrGreen : clrRed : clrLightGray);
     }
  }

```


我们应当提供一个单独的方法来在发生改变后更新表格，因为在程序中它会被调用多次。

```c++

//+------------------------------------------------------------------+
//| 更新仓位表格                                                       |
//+------------------------------------------------------------------+
void CProgram::UpdatePositionsTable(void)
  {
//--- 更新表格
   m_table_positions.Update(true);
   m_table_positions.GetScrollVPointer().Update(true);
   m_table_positions.GetScrollHPointer().Update(true);
  }

```


仓位表格是在 **CProgram::InitializePositionsTable**() 方法中初始化的，所有上面讨论的方法都在其中被调用。首先，在数组中得到交易品种的开启仓位，然后，准备表格 — 删除所有行以及 根据数组中得到的交易品种数量加上新的表格行。如果存在开启的仓位，我们首先需要把第一列的单元设计成为按钮，为此，需要 设置相应的类型 (**CELL_BUTTON**) 并加上图片。随后，再在单元中设置数值并更新表格。

```c++

//+------------------------------------------------------------------+
//| 初始化仓位表格                                                      |
//+------------------------------------------------------------------+
#resource "\\Images\\EasyAndFastGUI\\Controls\\close_black.bmp"
//---
void CProgram::InitializePositionsTable(void)
  {
//--- 取得开启仓位的交易品种
   string symbols_name[];
   int symbols_total=GetPositionsSymbols(symbols_name);
//--- 删除所有行
   m_table_positions.DeleteAllRows();
//--- 根据交易品种数量设置行数
   for(int i=0; i<symbols_total-1; i++)
      m_table_positions.AddRow(i);
//--- 如果存在仓位
   if(symbols_total>0)
     {
      //--- 按钮图片的数组
      string button_images[1]={"Images\\EasyAndFastGUI\\Controls\\close_black.bmp"};
      //--- 把数值设到第三列
      for(uint r=0; r<(uint)symbols_total; r++)
        {
         //--- 设置类型和图片
         m_table_positions.CellType(0,r,CELL_BUTTON);
         m_table_positions.SetImages(0,r,button_images);
        }
      //--- 把数值设置到表格
      SetValuesToPositionsTable(symbols_name);
     }
//--- 更新表格
   UpdatePositionsTable();
  }

```


### 使用数据初始化表格

交易品种和仓位表格应该在创建程序 GUI 之后立即初始化，在事件处理函数中的 **ON_END_CREATE_GUI** 自定义事件 会指示构建已经完成。为了初始化交易品种表格，调用[前面](https://www.mql5.com/zh/articles/4715#para15)已经描述过的 **CProgram::RequestData**() 方法，为了使方法能够成功工作，要把 **Request** 按钮元件的 ID 传给它。

```c++

//+------------------------------------------------------------------+
//| 事件处理函数                                                       |
//+------------------------------------------------------------------+
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
//--- GUI 创建事件
   if(id==CHARTEVENT_CUSTOM+ON_END_CREATE_GUI)
     {
      //--- 数据请求
      RequestData(m_request.Id());
      //--- 初始化仓位表格
      InitializePositionsTable();
      return;
     }
  }

```


这样，在把程序上传到图表之后，交易品种表格看起来如下:

 ![[Pasted image 20260622093709.png]]
 
 图 1. 初始化过的交易品种表格

如果在程序上传的时候账户中已经有了开启的仓位，仓位表格看起来如下:

 ![[Pasted image 20260622093744.png]]
 
图 2. 初始化仓位表格

### 实时更新表格

价格是在不断变化的，所以表格中的数据在交易期间不断重新计算，表格会在程序计时器设置的某个时间间隔中不断更新。为了使用不同的时间间隔更新元件，我们可以使用 **CTimeCounter** 类型的对象，这个类可以在 [EasyAndFast](https://www.mql5.com/zh/code/19703) 开发库中找到，如需在项目中使用它，只要简单把文件和它的内容包含进去就可以了:

```c++

//+------------------------------------------------------------------+
//|                                                      Program.mqh |
//|                        Copyright 2018, MetaQuotes Software Corp. |
//|                                              http://www.mql5.com |
//+------------------------------------------------------------------+
...
#include <EasyAndFastGUI\TimeCounter.mqh>
...

```


我们的 EA 需要三个计时器来更新进度条和表格中的数据， 

- 根据计时器会更新状态条中的第二个和第三个部分，第二个部分显示的是整个账户的资金负载，而第三个显示交易服务器的当前时间，把这个计数器的时间间隔设为 500 毫秒。
- 对于所有交易品种的当前指标值也是要在交易品种表格中更新的，因为可能会有很多交易品种，推荐不要更新得过于频繁，所以把时间间隔设为 5000 毫秒。
- 仓位表格的参数数据是依赖于当前价格的，所以我们也需要不断地按时更新相关数据，让我们把这个计时器的时间间隔设为 1000 毫秒。

为了设置计时器，只要简单声明 **CTimeCounter** 类型的对象并在构造函数中设置它们的参数 (参见下面的列表). 第一个参数是计时器的频率，而第二个是时间间隔。在调用之后，**CTimeCounter::CheckTimeCounter**() 方法返回 'true'，随后，计时器会重置再重新开始计时。

```c++

//+------------------------------------------------------------------+
//| 用于创建应用程序的类                                                 |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
...
   //--- 计时器
   CTimeCounter      m_counter1;
   CTimeCounter      m_counter2;
   CTimeCounter      m_counter3;
...
  };
//+------------------------------------------------------------------+
//| 构造函数                                                           |
//+------------------------------------------------------------------+
CProgram::CProgram(void)
  {
//--- 为计时器设置参数
   m_counter1.SetParameters(16,500);
   m_counter2.SetParameters(16,5000);
   m_counter3.SetParameters(16,1000);
...
  }

```


把显示在下面的代码加到程序计时器代码的第一块，以更新状态条。为了显示实现的变化，不要忘记单独更新每一块。

```c++

//+------------------------------------------------------------------+
//| 计时器函数                                                         |
//+------------------------------------------------------------------+
void CProgram::OnTimerEvent(void)
  {
...
//--- 更新状态条上的状态块
   if(m_counter1.CheckTimeCounter())
     {
      //--- 设置数值
      m_status_bar.SetValue(1,"Deposit load: "+::DoubleToString(DepositLoad(false),2)+"/"+::DoubleToString(DepositLoad(true),2)+"%");
      m_status_bar.SetValue(2,::TimeToString(::TimeTradeServer(),TIME_DATE|TIME_SECONDS));
      //--- Update the points
      m_status_bar.GetItemPointer(1).Update(true);
      m_status_bar.GetItemPointer(2).Update(true);
     }
...
  }

```


为了在只有指标值部分应当被更新时加快表格的更新，我们将使用独立的方法 — **CProgram::UpdateSymbolsTable**(). 在调用它之前，您应当首先更新指标值数组，然后，再调用 **CProgram::UpdateSymbolsTable**() 方法。在每次迭代时要检查数组是否超出范围，如果检查通过，更新第二个表格列的单元，再调整文字的颜色。接收数据和初始化表格信息会显示在进度条上。

```c++

//+------------------------------------------------------------------+
//| 更新交易品种表格                                                    |
//+------------------------------------------------------------------+
void CProgram::UpdateSymbolsTable(void)
  {
   uint values_total=::ArraySize(m_values);
//--- 把数值加入交易品种表格
   uint rows_total=m_table_symb.RowsTotal();
   for(uint r=0; r<(uint)rows_total; r++)
     {
      //--- 如果数组超出范围，就停止循环
      if(r>values_total-1 || values_total<1)
         break;
      //--- 设置数值
      m_table_symb.SetValue(1,r,::DoubleToString(m_values[r],2));
      //--- 设置颜色
      color clr=(m_values[r]>(double)m_up_level.GetValue())? clrRed :(m_values[r]<(double)m_down_level.GetValue())? C'85,170,255' : clrBlack;
      m_table_symb.TextColor(0,r,clr,true);
      m_table_symb.TextColor(1,r,clr,true);
      //--- 更新进度条
      m_progress_bar.LabelText("Initialize tables: "+string(rows_total)+"/"+string(r)+"...");
      m_progress_bar.Update(r,rows_total);
      ::Sleep(5);
     }
//--- 更新表格
   m_table_symb.Update();
  }

```


用于更新表格计时器的第二个模块显示如下，这样，程序将接收到所有交易品种的指标当前值，并每5秒更新一次表格。

```c++

void CProgram::OnTimerEvent(void)
  {
...
//--- 更新交易品种表格
   if(m_counter2.CheckTimeCounter())
     {
      //--- 显示进度
      m_progress_bar.Show();
      m_chart.Redraw();
      //--- 更新表格中的数值
      GetIndicatorValues();
      UpdateSymbolsTable();
      //--- 隐藏进度条
      m_progress_bar.Hide();
      m_chart.Redraw();
     }
...
  }

```


为了在计时器中更新仓位表格，首先我们会得到有开启仓位的交易品种数组，然后，使用相关数据更新表格。在更新前根据相同列和方向进行排序。. 应用到表格，再显示实现的改变。

```c++

void CProgram::OnTimerEvent(void)
  {
...
//---更新仓位表格
   if(m_counter3.CheckTimeCounter())
     {
      //--- 取得开启仓位中的交易品种
      string symbols_name[];
      int symbols_total=GetPositionsSymbols(symbols_name);
      //--- 更新表格中的数值
      SetValuesToPositionsTable(symbols_name);
      //--- 在更新前，用于已经排序完成了。
      m_table_positions.SortData((uint)m_table_positions.IsSortedColumnIndex(),m_table_positions.IsSortDirection());
      //--- 更新表格
      UpdatePositionsTable();
     }
  }

```

### 处理控件的事件

在这一部分，我们将会探讨处理在与我们 EA 的图形界面交互时产生事件的方法。我们已经分析了用于接收交易品种和指标数据的 **CProgram::RequestData**() 方法，如果这不是第一次初始化，在程序执行时，这个方法在点击了 **Request** 按钮的时候也会被调用。当点击按钮时，会生成一个 ID 为 **ON_CLICK_BUTTON** 的自定义事件。

```c++

void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 按钮按下事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 数据请求
      if(RequestData(lparam))
         return;
      //---
      return;
     }
...
  }

```


下面的 gif 图片显示了以下内容：表格中含有包含 USD 的外汇交易品种列表。然后，我们很快地生成了包含 EUR 的交易品种列表。为此，只要在 **Symbols filter** 输入栏位中输入 "EUR" 并点击 **Request** 按钮。如果您想看到服务器上可用的所有包含 USD 和 EUR 的交易品种，它们应当使用逗号来分隔: "USD,EUR".

![[005__1.gif]]

![[Pasted image 20260622094258.png]]
 
图 3. 生成外汇交易品种列表

构建外汇交易品种列表，取得根据在 **Timeframes** 组合框中设置时段计算的指标句柄列表。如果我们在下拉列表中选择了其它的时段，我们应当取得新的句柄并更新表格中的数值。为此，我们需要 **CProgram::ChangePeriod**() 方法，如果得到了组合框的 ID，首先要更新对象图表中的时段，然后，针对表格中的所有交易品种取得句柄和指标数据，之后，表格要更新以显示所实现的变化。 

```c++

//+------------------------------------------------------------------+
//| 改变时段                                                           |
//+------------------------------------------------------------------+
bool CProgram::ChangePeriod(const long id)
  {
//--- 检查元件 ID
   if(id!=m_timeframes.Id())
      return(false);
//--- 从组合框下拉列表中取值
   string tf=m_timeframes.GetListViewPointer().SelectedItemText();
//--- 根据索引取得图表指针
   m_sub_chart1.GetSubChartPointer(0).Period(StringToTimeframe(tf));
   m_sub_chart1.ResetCharts();
//--- 显示进度
   m_progress_bar.Show();
   m_chart.Redraw();
//--- 取得句柄和指标数据
   GetHandles();
   GetIndicatorValues();
//--- 更新表格
   UpdateSymbolsTable();
//--- 隐藏进度条
   m_progress_bar.Hide();
   m_chart.Redraw();
   return(true);
  }

```


当从下拉列表中选择项目的时候，会生成 ID 为**ON_CLICK_COMBOBOX_ITEM** 的自定义事件。

```c++

void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 在组合框中选择项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_COMBOBOX_ITEM)
     {
      //--- 改变时段
      if(ChangePeriod(lparam))
         return;
      //---
      return;
     }
...
  }

```


这里就是改变时段并接收新数据的样子:

![[006__1.gif]]

 ![[Pasted image 20260622094507.png]]
 
 图 4. 改变时段

现在，让我们探讨如何在对象图表上快速改变交易品种。交易品种的名称已经在交易品种表格的第一列中显示，所以，只要简单地突出显示表格行就能在它们之间切换。在点击了所需的行时，会调用 **CProgram::ChangeSymbol**() 方法。在这里，首先会检查交易品种表格 ID。现在， 检查表格行是否已经突出显示, 因为行的突出显示可以通过重复点击禁止。如果检查通过，保存突出显示行的索引作为要处理的，它可以用于在图表上放置指标 (下面会讨论)。

在从第一个表格列中得到交易品种之后，使用突出显示行的索引, 在对象图表中设置。作为补充信息，会在状态条的第一部分显示完整的交易品种描述，当行的突出显示禁止时，文字会改成默认。

```c++

//+------------------------------------------------------------------+
//| 改变交易品种                                                       |
//+------------------------------------------------------------------+
bool CProgram::ChangeSymbol(const long id)
  {
//--- 检查元件 ID
   if(id!=m_table_symb.Id())
      return(false);
//--- 如果行没有突出显示，就退出
   if(m_table_symb.SelectedItem()==WRONG_VALUE)
     {
      //--- 在进度条上显示交易品种的完整描述
      m_status_bar.SetValue(0,"For Help, press F1");
      m_status_bar.GetItemPointer(0).Update(true);
      return(false);
     }
//--- 保存句柄索引
   m_current_handle_index=m_table_symb.SelectedItem();
//--- 取得交易品种
   string symbol=m_table_symb.GetValue(0,m_current_handle_index);
//--- 更新图表
   m_sub_chart1.GetSubChartPointer(0).Symbol(symbol);
   m_sub_chart1.ResetCharts();
//--- 在进度条上显示完整的交易品种描述
   m_status_bar.SetValue(0,::SymbolInfoString(symbol,SYMBOL_DESCRIPTION));
   m_status_bar.GetItemPointer(0).Update(true);
   m_chart.Redraw();
   return(true);
  }

```


当突出显示表格行的时候, 会生成ID 为 **ON_CLICK_LIST_ITEM** 的自定义事件。交易品种也可以使用 Up, Down, Home 和 End 按键来改变。在这种情况下，会生成 [CHARTEVENT_KEYDOWN](https://www.mql5.com/zh/docs/constants/chartconstants/enum_chartevents) 事件。它的处理方法在[前面的文章中](https://www.mql5.com/zh/articles/4636)已经介绍过, 所以这里就不再赘述。

```c++

void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 在列表/表格中选择一个项目的事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_LIST_ITEM)
     {
      //--- 改变交易品种
      if(ChangeSymbol(lparam))
         return;
      //---
      return;
     }
//--- 点击按钮
   if(id==CHARTEVENT_KEYDOWN)
     {
      //--- 使用按键选择结果
      if(SelectingResultsUsingKeys(lparam))
         return;
      //---
      return;
     }
...
  }

```


处理这些事件的结果，我们将会看到是这样的:  

![[007__1.gif]]

 ![[Pasted image 20260622094832.png]]

图 5. 切换交易品种

有的时候，我们需要看到用于取得信号的指标。通过 **Show indicator(显示指标)** 复选框您就可以启用它。**CProgram::ShowIndicator**() 方法负责与之进行交互，在这里也要检查元件的 ID 以及是否超出句柄数组范围。从相应的对象图表中增加或者删除指标，需要图表的 ID。这样，如果勾选了复选框，就把指标加到图表上。因为我们所有时候就使用一个指标，子窗口索引设为 1。对于更加复杂的情况，应该在图表上定义更多的指标。 

```c++

//+------------------------------------------------------------------+
//| 指标的显示                                                         |
//+------------------------------------------------------------------+
bool CProgram::ShowIndicator(const long id)
  {
//--- 检查元件 ID
   if(id!=m_show_indicator.Id())
      return(false);
//--- 检查是否超出数组范围
   int handles_total=::ArraySize(m_handles);
   if(m_current_handle_index<0 || m_current_handle_index>handles_total-1)
      return(true);
//--- 取得图表 ID
   long sub_chart_id=m_sub_chart1.GetSubChartPointer(0).GetInteger(OBJPROP_CHART_ID);
//--- 指标的子窗口索引
   int subwindow =1;
//--- 根据索引取得图表指针
   if(m_show_indicator.IsPressed())
     {
      //--- 把指标加到图表上
      ::ChartIndicatorAdd(sub_chart_id,subwindow,m_handles[m_current_handle_index]);
     }
   else
     {
      //--- 从图表上删除指标
      ::ChartIndicatorDelete(sub_chart_id,subwindow,ChartIndicatorName(sub_chart_id,subwindow,0));
     }
//--- 更新图表
   m_chart.Redraw();
   return(true);
  }

```


当与复选框交互时，会生成 **ON_CLICK_CHECKBOX** 自定义事件：


```c++
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 点击了 "Check box" 元件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_CHECKBOX)
     {
      //--- 如果点击了 "Show indicator" 复选框
      if(ShowIndicator(lparam))
         return;
      //---
      return;
     }
  }
```


在实际使用中看起来的样子:

![[008__1.gif]]

![[Pasted image 20260622095112.png]]
 
图 6. 显示指标

在 EA 的 GUI 中的另外两个控件也是和指标相关的，它们是数字型输入栏位，用于**随机振荡**指标: **Up level(顶部水平)** 和 **Down level(底部水平)**。默认条件下，它们被设为 80 和 20。如果某个交易品种的指标值超过了这些限制的上下边界，交易品种表格单元中的文字在高于顶部水平时就会从黑色变成蓝色，而低于底部水平时就会从黑色变成红色。如果我们改变了这些输入栏位中的值，颜色指示在下一次更新的时候（每五秒更新一次）也会有变化。 

这是当您把数值从80/20改成90/10，再改回来的效果:

![[009__1.gif]]
 
 ![[Pasted image 20260622095200.png]]
 
图 7. 改变指标信号水平

有几个控件是用于操作图表属性的，它们是:

- **Date scale（日期缩放）** 和 **Price scale（价格缩放）** 复选用于管理图表缩放的显示;  
    
- **Chart scale（图表缩放）**输入栏位用于管理图表的缩放  
    
- 而 **Chart shift（图表偏移）**按钮用于启用图表右边的缩进。 

处理来自 **Date scale** 和**Price scale** 复选框事件的方法非常类似，在这两种情况下, 会根据复选框的状态来启用或者禁用对应图表的属性，**CStandardChart::ResetCharts**() 方法把图表移动到最末尾。

```c++

//+------------------------------------------------------------------+
//| 时间缩放的显示                                                      |
//+------------------------------------------------------------------+
bool CProgram::DateScale(const long id)
  {
//--- 检查元件 ID
   if(id!=m_date_scale.Id())
      return(false);
//--- 根据索引取得图表指针
   m_sub_chart1.GetSubChartPointer(0).DateScale(m_date_scale.IsPressed());
   m_sub_chart1.ResetCharts();
//--- 更新图表
   m_chart.Redraw();
   return(true);
  }
//+------------------------------------------------------------------+
//| 价格缩放的显示                                                      |
//+------------------------------------------------------------------+
bool CProgram::PriceScale(const long id)
  {
//--- 检查元件 ID
   if(id!=m_price_scale.Id())
      return(false);
//--- 根据索引取得图表指针
   m_sub_chart1.GetSubChartPointer(0).PriceScale(m_price_scale.IsPressed());
   m_sub_chart1.ResetCharts();
//--- 更新图表
   m_chart.Redraw();
   return(true);
  }

```


**CProgram::ChartScale**() 方法用于管理图表的缩放，在此，如果输入栏位的值改变，就赋给图表.

```c++
//+------------------------------------------------------------------+
//| 图表缩放                                                           |
//+------------------------------------------------------------------+
bool CProgram::ChartScale(const long id)
  {
//--- 检查元件 ID
   if(id!=m_chart_scale.Id())
      return(false);
//--- 设置缩放
   if((int)m_chart_scale.GetValue()!=m_sub_chart1.GetSubChartPointer(0).Scale())
      m_sub_chart1.GetSubChartPointer(0).Scale((int)m_chart_scale.GetValue());
//--- 更新
   m_chart.Redraw();
   return(true);
  }
```

**Chart scale** 输入栏位中数值的变化是由 ID 为 **ON_CLICK_BUTTON** 和 **ON_END_EDIT** 的自定义事件到来时处理的。

```c++
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 按钮点击事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      //--- 图表缩放
      if(ChartScale(lparam))
         return;
      //---
      return;
     }
//--- 输入栏位中修改数值结束的事件
   if(id==CHARTEVENT_CUSTOM+ON_END_EDIT)
     {
      //--- 图表缩放
      if(ChartScale(lparam))
         return;
      //---
      return;
     }
  }
```
**CProgram::ChartShift**() 方法是用于启用图表的右侧缩进的，代码在下面展示，在检查了元件 ID 后, 取得图表 ID, 并把它作为访问键值来设置缩进 ([CHART_SHIFT](https://www.mql5.com/zh/docs/constants/chartconstants/enum_chart_property)).

```c++
//+------------------------------------------------------------------+
//| 图表的偏移                                                         |
//+------------------------------------------------------------------+
bool CProgram::ChartShift(const long id)
  {
//--- 检查元件 ID
   if(id!=m_chart_shift.Id())
      return(false);
//--- 取得图表 ID
   long sub_chart_id=m_sub_chart1.GetSubChartPointer(0).GetInteger(OBJPROP_CHART_ID);
//--- 设置图表在右侧的缩进
   ::ChartSetInteger(sub_chart_id,CHART_SHIFT,true);
   m_sub_chart1.ResetCharts();
   return(true);
  }
```

这里是它看起来的样子:
![[010__1.gif]]

![[Pasted image 20260622095622.png]]
 ![图 8. 管理图表属性](./包含图形用户界面%20\(GUI\)%20的%20EA%20交易_%20增加功能%20\(第二部分\)%20-%20MQL5文章_files/010__1.gif "图 8. 管理图表属性")

图 8. 管理图表属性

### 进行交易操作的方法

我将使用例子来向您展示如何快速把交易方法与 EA 的 GUI 相关联。我们的 EA 不仅会显示数据，也可以进行交易操作。当一切都放在一起时会更方便，如有必要您可以快速切换图表和进行交易。作为例子，我们将使用标准库的功能来进行交易操作，也可以包含其它的交易开发库。 

在项目中包含 **Trade.mqh** 文件，其中有 **CTrade** 类，并声明这个类的实例:

```c++
//--- 用于交易操作的类
#include <Trade\Trade.mqh>
//+------------------------------------------------------------------+
//| 用于创建应用程序的类                                                 |
//+------------------------------------------------------------------+
class CProgram : public CWndEvents
  {
private:
   //--- 交易操作
   CTrade            m_trade;
  };
```

设置异步交易模式, 这样程序就不用等待每个交易操作的结果了。另外， 设置允许的最大滑点. 这是指在交易操作中，交易在距离价格有一定偏差的时候也可以进行。

```c++
//+------------------------------------------------------------------+
//| 构造函数                                                           |
//+------------------------------------------------------------------+
CProgram::CProgram(void)
  {
...
   m_trade.SetAsyncMode(true);
   m_trade.SetDeviationInPoints(INT_MAX);
  }
```

点击 **Buy(买入)** 和 **Sell(卖出)** 按钮是使用类似方法处理的 — **CProgram::OnBuy**() 和 **CProgram::OnSell**()。交易量是从**Lot(手数)** 输入栏位得到的，交易品种是从对象图表中取得的，这是进行交易操作所要求的最少条件。**CTrade** 类中含有 **CTrade::Buy**() 和 **CTrade::Sell**() 方法，在调用这些方法时，只能传入两个参数。 

```c++
//+------------------------------------------------------------------+
//| 买入                                                              |
//+------------------------------------------------------------------+
bool CProgram::OnBuy(const long id)
  {
//--- 检查元件 ID
   if(id!=m_buy.Id())
      return(false);
//--- 用于开启仓位的交易量和交易品种
   double lot    =::NormalizeDouble((double)m_lot.GetValue(),2);
   string symbol =m_sub_chart1.GetSubChartPointer(0).Symbol();
//--- 开启仓位
   m_trade.Buy(lot,symbol);
   return(true);
  }
//+------------------------------------------------------------------+
//| 卖出                                                              |
//+------------------------------------------------------------------+
bool CProgram::OnSell(const long id)
  {
//--- 检查元件 ID
   if(id!=m_sell.Id())
      return(false);
//--- 用于开启仓位的交易量和交易品种
   double lot    =::NormalizeDouble((double)m_lot.GetValue(),2);
   string symbol =m_sub_chart1.GetSubChartPointer(0).Symbol();
//--- 开启仓位
   m_trade.Sell(lot,symbol);
   return(true);
  }
```

应当实现一个独立的方法用来同时关闭所有仓位或者一个特定交易品种的仓位，因为 **CTrade** 类中没有这样的方法。如果向这个方法传入了一个交易品种 (可选参数) ，就只有这个交易品种的仓位会被关闭。如果没有指定交易品种，所有的仓位都被关闭。

```c++
//+------------------------------------------------------------------+
//| 关闭所有仓位                                                       |
//+------------------------------------------------------------------+
bool CProgram::CloseAllPosition(const string symbol="")
  {
//--- 检查仓位中是否有指定属性
   int total=::PositionsTotal();
   for(int i=total-1; i>=0; i--)
     {
      //--- 选择一个仓位
      string pos_symbol=::PositionGetSymbol(i);
      //--- 如果根据交易品种关闭
      if(symbol!="")
         if(symbol!=pos_symbol)
            continue;
      //--- 取得编号
      ulong position_ticket=::PositionGetInteger(POSITION_TICKET);
      //--- 重置最近的错误
      ::ResetLastError();
      //--- 如果没有关闭仓位，做通知
      if(!m_trade.PositionClose(position_ticket))
         ::Print(__FUNCTION__,": > 当关闭仓位时出错: ",::GetLastError());
     }
//---
   return(true);
  }
```

关闭所有仓位是绑定到 **"Close all positions"** 按钮的，它的点击将由 **CProgram::OnCloseAllPositions**() 方法处理，为了防止不小心点击了这个按钮，要打开确认窗口。  

```c++
//+------------------------------------------------------------------+
//| 关闭所有仓位                                                       |
//+------------------------------------------------------------------+
bool CProgram::OnCloseAllPositions(const long id)
  {
//--- 检查元件 ID
   if(id!=m_close_all.Id())
      return(false);
//--- 对话框窗口
   int mb_id=::MessageBox("Are you sure you want to close \nall positions?","Close positions",MB_YESNO|MB_ICONWARNING);
//--- 关闭仓位
   if(mb_id==IDYES)
      CloseAllPosition();
//---
   return(true);
  }
```

这就是它看起来的样子:

![[Pasted image 20260622100240.png]]
 ![图 9. 关闭所有仓位](./包含图形用户界面%20\(GUI\)%20的%20EA%20交易_%20增加功能%20\(第二部分\)%20-%20MQL5文章_files/011__1.png "图 9. 关闭所有仓位")

图 9. 关闭所有仓位

指定交易品种的仓位可以在 **Positions** 页面关闭，在仓位表格的第一列的单元中加入了有叉号的按钮，它们允许您同时关闭在相应行显示的交易品种的全部仓位，点击了单元按钮会生成含有 **ON_CLICK_BUTTON** ID 的用户事件。但是 **CTable** 类型的元件含有滚动条，它们的按钮也生成同样的事件，而元件的 ID 也是一样的，这就意味着我们需要跟踪事件的字符串型参数 (**sparam**) 以避免处理了元件上其它按钮的点击。在字符串型参数中，我们定义了发生点击的元件的类型，对于滚动条，这里的值是 "scroll"。如果事件到来是这样的值，程序就退出此方法。随后，我们需要检查这时候是否还有开启的仓位。

如果所有的检查都通过了，我们需要从字符串参数描述中展开行的索引，它在表格第一列中定义了交易品种。为了避免意外点击了按钮，要首先打开确认行动的对话框窗口。点击了 **Yes** 会只关闭指定交易品种的仓位。 

```c++
//+------------------------------------------------------------------+
//| 关闭指定交易品种的所有仓位                                            |
//+------------------------------------------------------------------+
bool CProgram::OnCloseSymbolPositions(const long id,const string desc)
  {
//--- 检查元件 ID
   if(id!=m_table_positions.Id())
      return(false);
//--- 如果是点击在滚动条按钮上，就退出
   if(::StringFind(desc,"scroll",0)!=WRONG_VALUE)
      return(false);
//--- 如果没有仓位就退出
   if(::PositionsTotal()<1)
      return(true);
//---从字符串中展开数据
   string str_elements[];
   ushort sep=::StringGetCharacter("_",0);
   ::StringSplit(desc,sep,str_elements);
//--- 取得索引和交易品种 
   int    row_index =(int)str_elements[1];
   string symbol    =m_table_positions.GetValue(0,row_index);
//--- 对话框窗口
   int mb_id=::MessageBox("您是否想要关闭\n交易品种的所有仓位 -  "+symbol+"?","关闭仓位",MB_YESNO|MB_ICONWARNING);
//--- 关闭一个指定交易品种的所有仓位
   if(mb_id==IDYES)
      CloseAllPosition(symbol);
//---
   return(true);
  }
```

这里是它看起来的样子:

 ![[Pasted image 20260622100421.png]]
 ![图 10. 关闭指定交易品种的所有仓位](./包含图形用户界面%20\(GUI\)%20的%20EA%20交易_%20增加功能%20\(第二部分\)%20-%20MQL5文章_files/004__1.png "图 10. 关闭指定交易品种的所有仓位")

图 10. 关闭指定交易品种的所有仓位

上面所描述的所有交易操作都是根据 **ON_CLICK_BUTTON** 事件的到达来处理的:

```c++
void CProgram::OnEvent(const int id,const long &lparam,const double &dparam,const string &sparam)
  {
...
//--- 按钮点击事件
   if(id==CHARTEVENT_CUSTOM+ON_CLICK_BUTTON)
     {
      ...
      //--- 买入
      if(OnBuy(lparam))
         return;
      //--- 卖出
      if(OnSell(lparam))

         return;
      //--- 关闭所有仓位
      if(OnCloseAllPositions(lparam))
         return;
      //--- 关闭指定交易品种的所有仓位
      if(OnCloseSymbolPositions(lparam,sparam))
         return;
      //---
      return;
     }
...
  }
```

每个交易操作都应当加到仓位表格中，为此，我们需要跟踪交易事件以及账户的交易历史。如果交易的数量有改变，表格就应当重新生成。**CProgram::IsLastDealTicket**() 方法就是用于检查历史是否有变化，时间和最后交易的单号应当在每次检查后都保存下来。我们保存时间是为了不要不断请求全部交易历史，单号允许我们检查历史中的交易数量是否有变化。因为交易会初始化一些交易时间，这个方法只会返回 **true** 一次。

```c++
class CProgram : public CWndEvents
  {
private:
   //--- 时间和最后检查的交易的单号
   datetime          m_last_deal_time;
   ulong             m_last_deal_ticket;
   //---
private:
   //--- 在历史中检查新的交易
   bool              IsLastDealTicket(void);
  };
//+------------------------------------------------------------------+
//| 构造函数                                                           |
//+------------------------------------------------------------------+
CProgram::CProgram(void) : m_last_deal_time(NULL),
                           m_last_deal_ticket(WRONG_VALUE)
  {
...
  }
//+------------------------------------------------------------------+
//| 在历史中检查新的交易                                                 |
//+------------------------------------------------------------------+
bool CProgram::IsLastDealTicket(void)
  {
//--- 如果没有得到历史，就退出
   if(!::HistorySelect(m_last_deal_time,UINT_MAX))
      return(false);
//--- 在取得的列表中得到交易的数量
   int total_deals=::HistoryDealsTotal();
//--- 遍历在获得的列表中的全部交易，从最新的到最开始的
   for(int i=total_deals-1; i>=0; i--)
     {
      //--- 取得交易编号
      ulong deal_ticket=::HistoryDealGetTicket(i);
      //--- 如果单号匹配，就退出
      if(deal_ticket==m_last_deal_ticket)
         return(false);
      //--- 如果单号没有匹配，就进行通知
      else
        {
         datetime deal_time=(datetime)::HistoryDealGetInteger(deal_ticket,DEAL_TIME);
         //--- 记住最新交易的时间和单号
         m_last_deal_time   =deal_time;
         m_last_deal_ticket =deal_ticket;
         return(true);
        }
     }
//--- 另一个交易品种的订单
   return(false);
  }
```

**CProgram::IsLastDealTicket**() 方法是在交易事件处理函数中调用的，如果历史有变化，仓位表格就会重新生成:

```c++
//+------------------------------------------------------------------+
//| 交易操作事件                                                       |
//+------------------------------------------------------------------+
void CProgram::OnTradeEvent(void)
  {
//--- 如果有新的交易
   if(IsLastDealTicket())
     {
      //--- 初始化仓位表格
      InitializePositionsTable();
     }
  }
```

这里是它看起来的样子:

 ![[Pasted image 20260622100713.png]]
 ![图 11. 当关闭一个交易品种上的仓位时生成表格](./包含图形用户界面%20\(GUI\)%20的%20EA%20交易_%20增加功能%20\(第二部分\)%20-%20MQL5文章_files/012__1.gif "图 11. 当关闭一个交易品种上的仓位时生成表格")

图 11. 当关闭一个交易品种上的仓位时生成表格

### 结论

我们已经讨论了如何不花费额外经历为任何复杂程序开发 GUI，您可以继续开发这个程序，为您自己的目标使用它。可以通过增加自定义指标和计算结果来进一步提高它。

市场中已经有了做好的 [Trading Exposure](https://www.mql5.com/zh/market/product/29731) 应用程序，不想修改代码和编译程序的用户可以使用它。

附件中包含了用于测试和更加详细研究本文中代码的文件。

|文件名|注释|
|---|---|
|MQL5\Experts\TradePanel\TradePanel.mq5|用于有GUI的人工交易 EA|
|MQL5\Experts\TradePanel\Program.mqh|Program 类|
|MQL5\Experts\TradePanel\CreateGUI.mqh|程序类中用于开发 GUI 的方法都在 Program.mqh 中|
|MQL5\Include\EasyAndFastGUI\Controls\Table.mqh|更新过的 CTable 类|
|MQL5\Include\EasyAndFastGUI\Keys.mqh|更新过的 CKeys 类|
