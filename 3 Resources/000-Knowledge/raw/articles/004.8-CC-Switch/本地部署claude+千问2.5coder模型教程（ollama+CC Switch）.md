---
title: "本地部署claude+千问2.5coder模型教程（ollama+CC Switch）"
source: "https://zhuanlan.zhihu.com/p/2041288637552349991"
author:
  - "[[斑马斑马​]]"
published:
created: 2026-09-08
description: "Claude Code 是 Anthropic 推出的强大 AI 编程工具，但官方仅支持 Anthropic API ，且在国内使用受限。本文将详细介绍如何通过本地 Ollama 模型，让 Claude Code 完全免费、离线运行，并分享完整的配置过程与踩坑…"
tags:
  - "clippings"
udc: 004.8
updated: 2026-09-15
methodology: para
triage:
  status: processed
  routed_at: "2026-09-15T14:36:56Z"
  routed_to: "3 Resources/000-Knowledge/raw/articles/004.8-CC-Switch"
---
3 人赞同了该文章

[Claude](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=Claude&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJDbGF1ZGUiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.eIWUkp-0UQMJdFileWKDzdEkAATDzARwsOQ9YKwdtpw&zhida_source=entity) Code 是 [Anthropic](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=Anthropic&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJBbnRocm9waWMiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.Up0uDkORk-pX3aiefpJF-yw1OcbPmb6LwAL91ol-X0g&zhida_source=entity) 推出的强大 AI 编程工具，但官方仅支持 Anthropic API ，且在国内使用受限。本文将详细介绍如何通过本地 [Ollama](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=Ollama&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJPbGxhbWEiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.J1SnELxcLfJ2bWimeeOgWhIVeLm29y-TzjTcgPJ-g-4&zhida_source=entity) 模型，让 Claude Code 完全免费、离线运行，并分享完整的配置过程与踩坑解决方案。

## 安装步骤

### 1.安装 Node.js

Claude Code 基于 JavaScript，需要 Node.js 22.0.0+：

[nodejs.org/en](https://link.zhihu.com/?target=https%3A//nodejs.org/en)

### 2.Ollama安装

安装Ollama

访问Ollama官网下载对应 [操作系统](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiLmk43kvZzns7vnu58iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.yg0LimDU3zgRlrbg2pf2DhyDqgtj5aw_vd018KM4Zg4&zhida_source=entity) 的安装包

[ollama.com/search](https://link.zhihu.com/?target=https%3A//ollama.com/search)

完成安装后，需注册并登录账号（目前注册需要邮箱+手机号双重验证）

### 3.部署模型

```
ollama pull qwen2.5-coder:7b
```

模型选择标准

Claude Code 需要模型支持 tools/function calling，以下是经过实测的模型列表：

![](https://picx.zhimg.com/v2-0be864c58c8b1204f1763920a149d505_1440w.jpg)

### 4.Claude-Code安装

由于Claude-Code目前在中国区不支持直接安装，需要通过npm 进行全局安装：

```
npm install -g @anthropic-ai/claude -code
```

安装完成后，可以通过

```
claude --version
```

验证安装是否成功。

另:[claude-code](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=claude-code&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJjbGF1ZGUtY29kZSIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI3NTM5OTI2OSwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.sfVmzelyjtkUHLIq6BvyDQhswpCBhNjHBXvWqihErdQ&zhida_source=entity) 需要安装需要的skills(或者自己写),这里针对claude-code使用不做额外扩展

### 5.CC Switch安装

[CC Switch](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=CC+Switch&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJDQyBTd2l0Y2giLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.3mtiixgHdIUFTXbY07H5r-jVUtCN-UfQGcdffKP67Qg&zhida_source=entity) 是一个用于 [管理模型](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9E%8B&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiLnrqHnkIbmqKHlnosiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.ogZmLqa-IP8ak2kQ_AurekN7iS6dYwU7n7ckdMskws4&zhida_source=entity) 切换的工具，特别适合需要频繁切换本地和 [云端模型](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=%E4%BA%91%E7%AB%AF%E6%A8%A1%E5%9E%8B&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiLkupHnq6_mqKHlnosiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.fFss3SH0Umf7ptNUMQE0e35LpD6dyqRIblBQBTbycZg&zhida_source=entity) 的场景。

打开 CC-Switch 的中文说明（包含功能说明、系统要求与下载入口）：

README\_ZH.md： [github.com/farion1231/c](https://link.zhihu.com/?target=https%3A//github.com/farion1231/cc-switch/blob/main/README_ZH.md)

打开 Releases 页面下载安装包：

Releases： [github.com/farion1231/c](https://link.zhihu.com/?target=https%3A//github.com/farion1231/cc-switch/releases)

在 Releases 页面往下滚动，找到与你的系统与架构匹配的安装包（例如 Windows x64），然后下载并安装：

————————————————

![](https://pic1.zhimg.com/v2-240641586fdf90cbef944bb8a39ca1be_1440w.jpg)

### 6.添加本地模型至CC Switch

确保Ollama服务正常运行（默认会在11434端口开启服务）

在命令行中查看已安装的本地模型列表：

```
ollama list
```

记录下需要配置的模型名称

![](https://picx.zhimg.com/v2-0522436bb6caddd6801c6eb4010a5e33_1440w.jpg)

在CC Switch界面中添加新模型，配置信息如下：

![](https://pic2.zhimg.com/v2-d8441f195ef1144d1c0c9516430ee7ef_1440w.jpg)

API key:ollama

请求地址： [http://localhost:11434](https://link.zhihu.com/?target=http%3A//localhost%3A11434/)

模型名称：与ollama list显示的名称保持一致

![](https://pic2.zhimg.com/v2-6b276504003b225226457cd427dc6151_1440w.jpg)

其他参数保持默认即可,点击保存

路由打开，模型配置成功！！！

### 7.运行claude code

打开控制台，输入Claude，如下图一。键入enter后，如下图二，即可开启使用啦！！

![](https://pica.zhimg.com/v2-b887b448d1aec79f40b764f0f2d39d30_1440w.jpg)

![](https://pic4.zhimg.com/v2-bad63320a9101f53ba018b528608230b_1440w.jpg)

### 8.VS code

如果你不喜欢这个控制台界面，毕竟不方便看代码。 [vscode](https://zhida.zhihu.com/search?content_id=275399269&content_type=Article&match_order=1&q=vscode&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODkwNDQ3ODYsInEiOiJ2c2NvZGUiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNzUzOTkyNjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.dIEPji1T94Ivk1OwuLzvs2He-ogBKlCaQ64GDe6Qv58&zhida_source=entity) 和IDEA都支持claude code插件

以vscode为例：

![](https://pic2.zhimg.com/v2-ad6bbd4bf3545d474a4bfc51384f8083_1440w.jpg)

直接安装即可。注意：步骤9使用的前提，一定是前面的步骤都做完了才行。不然这个插件你点进去也是用不了，需要登录claude code账号，要收费！！！！

有时候CC Switch的模型映射会出问题，需要在CC Switch里建一个新的供应商

编辑于 2026-05-23 08:35・福建

赞同 3