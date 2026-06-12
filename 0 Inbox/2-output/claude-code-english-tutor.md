---
title: "我把 Claude Code 改造成了英语私教，每天免费纠错还能省掉报课的钱"
source: "https://mp.weixin.qq.com/s/ntvmP_qvngjrJIPzUErryA"
author:
  - "[[总钻风者行孙]]"
published:
created: 2026-06-12
description: "成年人学英语，最大的谎言是\x26quot;我没时间\x26quot;。真相是：你不缺时间，你缺的是一个不需要意志力的练习场。"
tags:
  - "clippings"
---
triage:
  timeliness: reference
  topic: "AI 应用 / 提示工程 / 语言学习"
  type: clipping
  complexity: medium
  udc_suggested: "004.8:159.9"
  status: processed

总钻风者行孙 *2026年6月10日 21:52*

**成年人学英语，最大的谎言是"我没时间"。**

真相是：你不缺时间，你缺的是一个 **不需要意志力的练习场** 。

背单词 App 卸了装、装了卸；口语课买了不上；美剧看了三集，字幕越开越大。问题从来不是方法不够多，而是所有方法都要求你"额外挤出时间"。挤时间这件事，和反人性作对，必输。

我换了个思路： **不挤时间，把工作语言换掉。**

我每天都用 Claude Code 写代码、记笔记、查问题。从两个月前开始，我强迫自己全程用英语和它对话——然后做了一件小事，让它变成了一个 7×24 小时在线、永远不会不耐烦的英语私教。

这篇文章把完整搭建过程分享给你。全程不花一分钱（如果你本来就在用 Claude Code 的话）。

## 核心机制：让纠错成为副作用

整个系统的引擎，是一个不到 30 行的配置文件。

Claude Code 有一个全局指令文件 `~/.claude/CLAUDE.md` ，里面写的规则会在 **每一个项目、每一次对话** 里自动生效。我在里面加了一段话，大意是(文末有完整配置内容)：

> 我在刻意用英语使用 Claude Code，作为真实世界的英语练习。  
>   
> 每次会话默认：  
> • 用英语回复我。  
> • 在 **每条回复的末尾** ，加一个简短的 "English notes" 板块，点评我上一条消息的语法、用词和自然度：标出原句的错误，给出更自然的版本；解释 **为什么** 这么改——讲规则和模式，而不只是改法，这样才能迁移到以后的句子；保持简洁，重点提示反复出现的错误模式；如果我的句子本来就对，直说即可，不要硬找毛病。  
> • 这个板块用分割线和正文隔开，不干扰正事。

就这一段话，效果是：我每发一条消息——不管是"帮我改个 bug"还是"提交代码"——回复末尾都会附带一段针对 **我刚才那句话** 的批改。

举个今天的真实例子。我写：

> "I usually feel difficult when I form English sentence."

它在回复正事之后，顺手告诉我：英语里 "I feel difficult" 的意思是"我这个人很难相处"。中文的"我觉得很难"，对应的句型是 **"I find it difficult to..."** 或者 **"I have a hard time doing..."** ——并且解释了为什么中式直译会掉进这个坑。

![图片](https://mmbiz.qpic.cn/mmbiz_png/QAJaMXNhBichWTbT7Uza18QAOOXm3vSmIBmF7eex3x3vsNiagDqpszVJCCgeG06raFn55fLKqxLDbHEgVyYmicPfuicibtDklYw2073wO1CIISvo/640?wx_fmt=png&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

注意：它纠的不是教科书例句，是 **我自己嘴里说出来的错误** 。这是所有英语 App 都给不了的东西。

## 第二件事：给错误建一个"复利账户"

光纠错还不够。错误被纠正的瞬间很爽，三天后照样忘。

所以我建了一个笔记本仓库，结构很简单：

每当批改里出现一个值得留下的东西，我只需要说一句：

> "Add 'walk me through' to phrases.md"

Claude 就会按统一格式写进去：

遇到值得展开的语法点，我会先问透，再说一句 "save this to grammar.md"，一篇带例句、带速查表、带"为什么中国人会犯这个错"的专题笔记就归档了。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

笔记本放在 git 仓库里，定期 commit。 **每一个犯过的错，都变成一条可检索、带日期、永不丢失的资产。**

## 每天的循环长什么样

说起来是个"系统"，跑起来其实就四步：

**1\. 用英语干正事。** 写代码、提问、记笔记，该干嘛干嘛。

**2\. 读每条回复末尾的 English notes。** 十秒钟，看一眼自己刚才哪句不地道。

**3\. 值得留的，一句话存进笔记本。** "Add X to phrases.md"，零摩擦。

**4\. 偶尔回看 + 朗读操练。** 把句型框架大声读熟，让它变成肌肉记忆。

今天是相当投入的一天，我往笔记本里存了 7 篇语法笔记、25 个问句框架、7 条短语、3 个单词。平时没这么多，但哪怕一天只捕获一个错误，一年也是 365 条——而且全是你真实会犯的那种。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## 三个让我印象很深的瞬间

**第一个瞬间** ：它指出我总把"有"直译成 have——我会说 "Does there have any phrases...?"。它解释说，中文的"有"一个词干两个活：表"拥有"用 have，表"存在"用 there is/are。英语把这两件事彻底分开，而我的大脑从来没意识到这是两件事。

**第二个瞬间** ：我发现自己总说 "there show the tool name repeat" 这种句子，于是问它为什么。它告诉我：中文是话题优先的语言，可以没有主语；英语是主语优先的语言，几乎每句话都要有一个"东西"坐在驾驶座上做动作。正确的说法是 **"The tool name appears twice."** ——把那个东西提拔成主语。

**第三个瞬间** ：练到下午，我跟它说，我感觉自己脑子里现在是两套思维模式在打架。它说，这个状态在语言学里有个名字，叫 **interlanguage（中介语）** ——每个学习者都要经过的中间系统。三天前，中文模式每次都默默获胜；现在你能"听见"打架了，这恰恰是进步的证据。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

那一刻我意识到，我练的根本不是英语句子，是 **换一套操作系统思考** 。

## 为什么这个方法有效

复盘下来，它赢在三点：

**一、纠错是针对你的，不是针对"学习者"的。** 教材防御的是别人的错误；这套系统防御的是你的。它很快会发现你的高频错误模式（我的是：逗号粘连、单复数、a/an 按发音选），然后反复敲打，直到改掉。

**二、零意志力消耗。** 练习寄生在你本来就要做的事情上。你不需要"今天开始学英语"，你只需要"今天继续上班"。

**三、错误有复利。** 每个错误从"丢脸的瞬间"变成"账户里的一笔存款"。笔记本越厚，你的英语越像你自己的，而不是教科书的。

## 三步上手

如果你也想搭一套，今天就能完成：

**1\. 装 Claude Code** （CLI 或桌面版都行）。

**2\. 把上面那段指令写进 ~/.claude/CLAUDE.md。** 这是引擎，有它就有了一切。

**3\. 建一个笔记本文件夹** ，从 phrases.md 和 grammar.md 两个文件开始。第一条笔记，就记你今天犯的第一个错。

然后，把你和 AI 的对话语言切到英语。一开始会很慢、很挫败——我第一周经常一句话改三遍。但请记住那句话：

**你不是在"学英语"，你是在用英语生活。学英语是副作用。**

而最好的副作用是：它每天自动发生。

```sql
# User Instructions
## English practice — correct my English
The user is practicing English and deliberately uses Claude Code in English insteadof Chinese as real-world practice.
**In every session, by default:**
- Reply in English.- At the **end of each reply**, add a short **"English notes"** section that reviews  the grammar, word choice, and naturalness of the user's most recent message:  - Show the original (mark errors) and a corrected/more natural version.  - Briefly explain *why* each fix matters — focus on the rule or pattern, not just    the fix, so it transfers to future sentences.  - Keep it concise; highlight recurring patterns (question word order, prepositions    like *listen to* / *based on*, present perfect *have/has + V3*, \`I\` vs \`l\`).  - If the message is already correct and natural, just say so briefly — don't invent    mistakes.- Keep this section separate from the main answer (e.g. under a divider) so it never  gets in the way of the actual task.
**Turn it off** when the user says something like "stop correcting" / "no Englishnotes" for that session, or remove this file to disable everywhere.
```

**微信扫一扫赞赏作者**

继续滑动看下一个

Ribin在思考

向上滑动看下一个