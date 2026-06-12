---
title: "让Codex用上DeepSeek：CCX配置实战指南"
source: "https://zhuanlan.zhihu.com/p/2043205016744415452"
author:
  - "[[三点钟的AI笔记全网同名，欢迎关注获取最新科技、AI、IT资讯！]]"
published:
created: 2026-06-08
description: "Codex 本身挺好用，但一直用官方 API，成本确实有点高。DeepSeek 便宜，但 Codex 又不能直接接。CCX 这个开源项目就是干这个的——中间加一层代理，让 Codex 能调用 DeepSeek 或者其他模型。 管理界面是网页的，能…"
udc: 004.8
triage.status: suggested
tags:
  - "clippings"
---
6 人赞同了该文章

[Codex](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=Codex&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJDb2RleCIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI3NTcyMDc4OCwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.I1wnYLX2WeLMH7972IW30DMotl9abY0L48Xxv5r_zrU&zhida_source=entity) 本身挺好用，但一直用官方 API，成本确实有点高。 [DeepSeek](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=DeepSeek&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJEZWVwU2VlayIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI3NTcyMDc4OCwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.dC6CSA2rxYXXuXfMaO-qZ8X2wIUR2jeB7GZInlzrK68&zhida_source=entity) 便宜，但 Codex 又不能直接接。 [CCX](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=CCX&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJDQ1giLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzU3MjA3ODgsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.zFl1ePHnv1veaJf-E6PtFt0PmwRxaaCRLV89vStTm8k&zhida_source=entity) 这个开源项目就是干这个的——中间加一层代理，让 Codex 能调用 DeepSeek 或者其他模型。

![](https://pic3.zhimg.com/v2-789c9aba96c3ddf6aed3acab821f088a_1440w.jpg)

管理界面是网页的，能看到流量、请求量、延迟这些数据。上面显示163个虚拟通道，23个在跑，系统状态正常。界面不算花哨，但该有的都有。

## 网页版还是桌面版？

CCX 给了两个选择：网页版和桌面版。我两个都装过，说实话网页版更省事。

桌面版有个独立的应用，图标是蓝绿色的“CX”字样，看着还行。

![](https://pic3.zhimg.com/v2-7ab5fa718f579292e1eff2569885e21a_1440w.jpg)

桌面版打开之后是个控制面板，左边是菜单，右边是具体内容。网关监控那一页会显示端口号、运行了多久、当前版本这些信息。

服务路径、日志路径、PID 这些都列出来了，状态显示“正常”。底下还有个命令行窗口，能看到实时日志。

![](https://picx.zhimg.com/v2-545ca7bca824e4cfc12058b6ac634487_1440w.jpg)

Agent 配置页面分了两块，左边是 [Claude Code](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=Claude+Code&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJDbGF1ZGUgQ29kZSIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI3NTcyMDc4OCwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.KKfzjlqFodJ3Dx5_lIAqDI-VEE_eaPG-y9c6EXgiLi0&zhida_source=entity) ，右边是 Codex。每个都能单独配置 Provider、URL、配置文件路径。

![](https://pic2.zhimg.com/v2-615ddc8bca0cfd9b6d04d3bbba66024d_1440w.jpg)

环境参数这页东西比较多，访问密钥、端口、日志级别、Web UI 语言这些都能改。桌面版的好处是界面集中，不用开浏览器。

但网页版更轻，部署完直接浏览器打开就能管理，不用装额外的东西。而且网页版的功能和桌面版基本一样，日常用够了。

## 怎么接入 DeepSeek

接入过程分几步走。先把 CCX 跑起来，配置文件里要设置访问密钥和端口，这个密钥是 CCX 自己用的，不是 DeepSeek 的。记住这个密钥，后面还要用。

![](https://pic3.zhimg.com/v2-28c8b66adfcf70cdf05c643cf29035e4_1440w.jpg)

![](https://pic3.zhimg.com/v2-500e5568eb3570827601af50edae4314_1440w.jpg)

配置界面能看到，渠道名称可以自己取，模型选 deepseek-v4-pro 或者其他版本。再次强调：底下还有个“规范化非常见 Chat role”的开关，记得打开。我开始没打开然后报错了……

![](https://pica.zhimg.com/v2-2b729f98b8649804e12d2c9b99480d58_1440w.jpg)

CCX 这边配好之后，还要用 [CC Switch](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=CC+Switch&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJDQyBTd2l0Y2giLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzU3MjA3ODgsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.xwONX7lO6siOi0lh5vIxPxJ0fEs5Pu8RUsUZrC0QHIo&zhida_source=entity) 来连接 Codex。打开 CC Switch，这是个专门管理多个 AI 工具配置的应用。

![](https://picx.zhimg.com/v2-7b8e98cdad7115a095e1cc1eec6b8f61_1440w.jpg)

![](https://pic2.zhimg.com/v2-5357d4b17d6040311f44a8ab699e532d_1440w.jpg)

配好之后，CC Switch 会把配置写到 Codex 的配置文件里。整个链路就通了：Codex 发请求给 CCX，CCX 把协议转换一下，转发给 DeepSeek，DeepSeek 返回结果，CCX 再转回来给 Codex。Codex 那边感觉不到变化，只是后面换了个模型在跑。

## 接上之后能干什么

配好之后，Codex 界面就能选模型了。

![](https://pica.zhimg.com/v2-435bd6c9b05413f624d17e12d44f7daa_1440w.jpg)

点开“自定义”下拉菜单，能看到 GPT-5.5、GPT-5.4、 [GPT-5.3-Codex](https://zhida.zhihu.com/search?content_id=275720788&content_type=Article&match_order=1&q=GPT-5.3-Codex&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODEwODMwMDYsInEiOiJHUFQtNS4zLUNvZGV4IiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6Mjc1NzIwNzg4LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.E6S7IAU-vAZE7X1pfUqMrCCQl2-akoKK1gIlTln0XxM&zhida_source=entity) 这些选项。右上角有推理强度，从“智能”到“超高”分了好几档。模型名字还是 OpenAI 的模型名字，想自定义的话去 codex 文件夹中的.code 文件去改。每个人电脑的目录不太一样，自己找一下对应目录和文件。

![](https://pic1.zhimg.com/v2-382544f3de28169d6b1cf96b53757624_1440w.jpg)

左边还有两个开关：“计划模式”和“追求目标模式”。这两个模式用起来有区别。开始做架构设计或者规划的时候，开“计划模式”会给更详细的方案，步骤拆得比较细。

写具体代码的时候，开“追求目标模式”,AI 会直接干活，少废话。

这种切换在实际工作中还挺有用。不用一直用同一个模式，根据当前在干什么来调整，效率会高一些。

## 一言难尽的使用体验

成本这块确实降了。DeepSeek 的定价比 OpenAI 低不少，如果你天天用 Codex，一个月下来能省不少钱。

但说实话，DeepSeek 接入 Codex 用起来没那么顺。性能方面，DeepSeek V4 在代码生成上表现还行，日常写代码、改 bug、重构这些够用。但和接入 Claude Code 比起来，差距还是挺明显的。

Claude Code 对 DeepSeek 的支持要好很多，工具调用、上下文处理都更稳定。Codex 这边就经常出些小问题，比如某些复杂的多步任务，DeepSeek 在 Claude Code 里能顺利跑完，换到 Codex 就容易卡住或者理解偏了。可能是协议转换的问题，也可能是 Codex 本身对第三方模型的适配不够好。

配置过程也是个坎。第一次配的时候，CCX 的渠道逻辑、CC Switch 的密钥关系，这些都得搞清楚。而且不同模型的能力有差异，上下文长度、支不支持某些工具调用，切换模型时要注意这些。Claude Code 接 DeepSeek 就简单多了，基本上改个配置文件就能用。

CCX 是开源的，代码在 GitHub 上，遇到问题可以去提 issue。从更新频率看，作者还在持续维护，v2.8.9 版本修了不少 Codex 相关的 bug。如果你在用 Codex，又想降低成本，可以试试 CCX。

但要做好心理准备，我自己的使用体验上确实不如 Claude Code 接 DeepSeek 那么顺手。更完全比不上 Codex 用原生 GPT5.5那种丝滑，感觉智商完全不在线，而且执行效率也很差，总之目前体验不太好。还有就是我看到不止一个人发视频证明，DeepSeek 接入之后，也具备了识别图片能力！可我用怎么不行，发给它图片直接报错了！然后让它开目标模式的时候，它自己在执行中需要看图，然后自己截图发给它自己，结果也报错了。报错了这个窗口不好修，一般只能新开一个会话，非常坑！总之，很难用。我本来不想发这个教程，可是全网都是，我也跟进下吧。你们自己试试，我认为还是 Codex 用 GPT5.5指挥 Claude Code 干活最好！

发布于 2026-05-28 05:40・北京[豆包让小白也能玩转 AI 漫画图片生成](https://www.doubao.com/chat/?channel=dbweb_zhihu_xxl_pc_cpc_ty_shengt_stcj_dmtp_512&source=dbweb_zhihu_xxl_pc_cpc_ty_shengt_stcj_dmtp_512&keywordid=3734823&ad_platform_id=zhihu_feed_lead&ug_callback_url=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D8b516be6-197d-491f-8d01-052d910a6d18%26os%3D3%26zid%3D1629%26zaid%3D3744379%26zcid%3D3734823%26cid%3D3734823%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D__MEMBERHASHID__%26adv%3D784531%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb1cXISFcCiIEex4yNyw9GGJBRCUlVFZ0DngJcmN3ehFkUwBkfwNZY1YkXSo-fX4DPhIMYHRuDhi6nAQm&cb=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D8b516be6-197d-491f-8d01-052d910a6d18%26os%3D3%26zid%3D1629%26zaid%3D3744379%26zcid%3D3734823%26cid%3D3734823%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D__MEMBERHASHID__%26adv%3D784531%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb1cXISFcCiIEex4yNyw9GGJBRCUlVFZ0DngJcmN3ehFkUwBkfwNZY1YkXSo-fX4DPhIMYHRuDhi6nAQm&ug_semver=v1.0.0&spu=biz%3D0%26ci%3D3734823%26si%3Dbf6ed07c-2736-4da8-8e89-4e70d342919c%26ts%3D1780910207%26zid%3D1629)

[

豆包让小白也能玩转 AI 漫画图片生成

](https://www.doubao.com/chat/?channel=dbweb_zhihu_xxl_pc_cpc_ty_shengt_stcj_dmtp_512&source=dbweb_zhihu_xxl_pc_cpc_ty_shengt_stcj_dmtp_512&keywordid=3734823&ad_platform_id=zhihu_feed_lead&ug_callback_url=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D8b516be6-197d-491f-8d01-052d910a6d18%26os%3D3%26zid%3D1629%26zaid%3D3744379%26zcid%3D3734823%26cid%3D3734823%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D__MEMBERHASHID__%26adv%3D784531%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb1cXISFcCiIEex4yNyw9GGJBRCUlVFZ0DngJcmN3ehFkUwBkfwNZY1YkXSo-fX4DPhIMYHRuDhi6nAQm&cb=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D8b516be6-197d-491f-8d01-052d910a6d18%26os%3D3%26zid%3D1629%26zaid%3D3744379%26zcid%3D3734823%26cid%3D3734823%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D__MEMBERHASHID__%26adv%3D784531%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb1cXISFcCiIEex4yNyw9GGJBRCUlVFZ0DngJcmN3ehFkUwBkfwNZY1YkXSo-fX4DPhIMYHRuDhi6nAQm&ug_semver=v1.0.0&spu=biz%3D0%26ci%3D3734823%26si%3Dbf6ed07c-2736-4da8-8e89-4e70d342919c%26ts%3D1780910207%26zid%3D1629)
