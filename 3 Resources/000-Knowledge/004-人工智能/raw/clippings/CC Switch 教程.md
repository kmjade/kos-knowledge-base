---
title: "如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程"
source: "https://www.intoep.com/ai/73395.html"
author:
  - "[[howkunet]]"
published: 2026-06-04
created: 2026-06-08
description: "Codex CLI 是 OpenAI 推出的终端 AI 编程 Agent，但国内用户面临协议不兼容、账号验证、网络限制三座大山。本文详解通过 CC Switch 本地路由代理，将 Codex 接入 DeepSeek/Kimi/MiniMax 等国产模型的完整流程——无需 OpenAI 账号，无需手机验证，成本直降 90%+，保姆级截图教程。"
udc: 004.8
triage.status: suggested
tags:
  - "clippings"
---
![如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程](https://www.intoep.com/wp-content/uploads/2026/06/2026060411571558.webp)

如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程

[Codex CLI](https://www.intoep.com/tag/codex-cli "Codex CLI") 是 OpenAI 推出的终端编程 Agent，但它的原生配置只认 OpenAI Responses API 和 GPT 模型。想用 DeepSeek、Kimi、MiniMax 这些国产模型？ **协议不兼容、配置繁琐、还要 OpenAI 账号手机验证** ——三座大山挡在前面。

<iframe width="820" height="280" frameborder="0" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1815728334277771&amp;output=html&amp;h=280&amp;num_ads=1&amp;adk=1308638540&amp;adf=3288028075&amp;w=820&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1780923375&amp;rafmt=1&amp;armr=3&amp;sem=mc&amp;pwprc=7339359691&amp;ad_type=text_image&amp;format=820x280&amp;url=https%3A%2F%2Fwww.intoep.com%2Fai%2F73395.html&amp;fwr=0&amp;pra=3&amp;rh=200&amp;rw=820&amp;rpe=1&amp;resp_fmts=3&amp;asro=0&amp;aiactd=0&amp;aicctd=0&amp;ailctd=0&amp;aimartd=4&amp;aieuf=1&amp;aicrs=1&amp;fa=27&amp;uach=WyJXaW5kb3dzIiwiMTkuMC4wIiwieDg2IiwiIiwiMTQ4LjAuMzk2Ny45NiIsbnVsbCwwLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjE0OC4wLjc3NzguMjE3Il0sWyJNaWNyb3NvZnQgRWRnZSIsIjE0OC4wLjM5NjcuOTYiXSxbIk5vdC9BKUJyYW5kIiwiOTkuMC4wLjAiXV0sMF0.&amp;abgtt=6&amp;dt=1780923375062&amp;bpp=2&amp;bdt=3076&amp;idt=-M&amp;shv=r20260604&amp;mjsv=m202606030101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie_enabled=1&amp;eoidce=1&amp;prev_fmts=0x0%2C820x280%2C300x300&amp;nras=2&amp;correlator=2442545977012&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=1&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1032&amp;u_aw=1920&amp;u_cd=32&amp;u_sd=1&amp;dmc=16&amp;adx=379&amp;ady=1300&amp;biw=1897&amp;bih=914&amp;scr_x=0&amp;scr_y=237&amp;eid=95390668%2C31098986%2C95392916&amp;oid=2&amp;pvsid=8206292898453064&amp;tmod=1535217083&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fcn.bing.com%2F&amp;fc=1408&amp;brdim=1920%2C0%2C1920%2C0%2C1920%2C0%2C1920%2C1032%2C1912%2C914&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=128&amp;bc=31&amp;plas=307x721_l%7C307x721_r&amp;bz=1&amp;ifi=4&amp;uci=a!4&amp;btvi=1&amp;fsb=1&amp;dtd=42" title="Advertisement" aria-label="Advertisement"></iframe>

**[CC Switch](https://www.intoep.com/tag/cc-switch "CC Switch")** 在 v3.16.0 彻底解决了这个问题：它在本地启动一个路由代理，自动把 Codex 发出的 Responses API 请求转成 Chat Completions 格式发给国产模型，再把响应转回 Codex 能理解的格式。 **全程不需要 OpenAI 账号，不需要手机验证，一个 API Key 搞定。**

本文是完整的保姆级教程，从安装到跑通，每一步都有截图级别的说明。

## 为什么 Codex 直接用不了国产模型

<iframe width="820" height="280" frameborder="0" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1815728334277771&amp;output=html&amp;h=280&amp;num_ads=1&amp;adk=1308638540&amp;adf=2868558634&amp;w=820&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1780923375&amp;rafmt=1&amp;armr=3&amp;sem=mc&amp;pwprc=7339359691&amp;ad_type=text_image&amp;format=820x280&amp;url=https%3A%2F%2Fwww.intoep.com%2Fai%2F73395.html&amp;fwr=0&amp;pra=3&amp;rh=200&amp;rw=820&amp;rpe=1&amp;resp_fmts=3&amp;asro=0&amp;aiactd=0&amp;aicctd=0&amp;ailctd=0&amp;aimartd=4&amp;aieuf=1&amp;aicrs=1&amp;fa=27&amp;uach=WyJXaW5kb3dzIiwiMTkuMC4wIiwieDg2IiwiIiwiMTQ4LjAuMzk2Ny45NiIsbnVsbCwwLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjE0OC4wLjc3NzguMjE3Il0sWyJNaWNyb3NvZnQgRWRnZSIsIjE0OC4wLjM5NjcuOTYiXSxbIk5vdC9BKUJyYW5kIiwiOTkuMC4wLjAiXV0sMF0.&amp;abgtt=6&amp;dt=1780923375062&amp;bpp=1&amp;bdt=3076&amp;idt=-M&amp;shv=r20260604&amp;mjsv=m202606030101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie_enabled=1&amp;eoidce=1&amp;prev_fmts=0x0%2C820x280%2C300x300%2C820x280&amp;nras=3&amp;correlator=2442545977012&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=1&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1032&amp;u_aw=1920&amp;u_cd=32&amp;u_sd=1&amp;dmc=16&amp;adx=379&amp;ady=2432&amp;biw=1897&amp;bih=914&amp;scr_x=0&amp;scr_y=237&amp;eid=95390668%2C31098986%2C95392916&amp;oid=2&amp;pvsid=8206292898453064&amp;tmod=1535217083&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fcn.bing.com%2F&amp;fc=1408&amp;brdim=1920%2C0%2C1920%2C0%2C1920%2C0%2C1920%2C1032%2C1912%2C914&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=128&amp;bc=31&amp;plas=307x721_l%7C307x721_r&amp;bz=1&amp;ifi=5&amp;uci=a!5&amp;btvi=2&amp;fsb=1&amp;dtd=45" title="Advertisement" aria-label="Advertisement"></iframe>

Codex CLI 底层使用的是 OpenAI **Responses API** （/v1/responses），不是传统的 Chat Completions API（/v1/chat/completions）。这两者的区别：

| 对比项 | Responses API | Chat Completions API |
| --- | --- | --- |
| 端点 | /v1/responses | /v1/chat/completions |
| 请求体 | input + instructions | messages 数组 |
| 流式事件 | Responses SSE 格式 | Chat SSE 格式 |
| 推理输出 | reasoning 字段 | reasoning\_content 字段 |
| 工具调用 | tool\_call 对象 | tool\_calls 数组 |

DeepSeek、Kimi、MiniMax 只支持 Chat Completions 格式。 **直接把它们的 API 地址填进 Codex 配置，要么 404，要么模型列表为空，要么流式输出乱码。**

![如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程](https://www.intoep.com/wp-content/uploads/2026/06/2026060413043771.webp)

如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程

CC Switch 的解决方案： **在本地 127.0.0.1:15721 起一个代理，Codex 以为自己在跟 OpenAI 对话，实际上所有请求都被 CC Switch 截获、转码、转发给国产模型。**

### 第一步：安装 CC Switch

CC Switch 是基于 Tauri 2 的原生桌面应用，支持 Windows、macOS、Linux。

下载官网： [https://ccswitch.io](https://ccswitch.io/)

GitHub Releases： [https://github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases]\(https://github.com/farion1231/cc-switch/releases)

```csharp
# macOS（Homebrew）
brew install --cask cc-switch

# Windows：下载 .msi 安装包直接安装
# Linux：下载 .deb 或 .AppImage

# 验证安装
cc-switch --version  # 或在应用中查看 设置 → 关于
```

⚠️ **警告：** CC Switch 完全免费开源，任何要求付费/充值的”CC Switch”网站都是假冒的。

### 第二步：安装 Codex CLI

如果还没装 Codex CLI：

```bash
# 安装
npm install -g @openai/codex

# 首次运行一次，让它初始化 ~/.codex/ 目录结构
codex --version
```

**重点：不需要 OpenAI API Key，不需要 OpenAI 账号登录，不需要手机验证。** CC Switch 会接管 Codex 的全部网络请求。

### 第三步：在 CC Switch 中添加国产模型 Provider

![如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程](https://www.intoep.com/wp-content/uploads/2026/06/2026060413081074.webp)

如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程

这是核心步骤。打开 CC Switch，按以下操作：

**3.1 切换到 Codex 标签页**

顶部导航栏点击 Codex，进入 Codex Provider 管理界面。

**3.2 添加 Provider**

点击右上角的 + 按钮，在弹出的 Provider 列表中选择预设。

CC Switch 内置了 22 个 Chat Completions 路由预设，覆盖主流国产模型：

| Provider | 预设名称 | 模型示例 |
| --- | --- | --- |
| DeepSeek | DeepSeek | DeepSeek V4, DeepSeek V4 Flash, DeepSeek R1 |
| Kimi | Kimi | Kimi K2, Kimi K2 Turbo |
| MiniMax | MiniMax | MiniMax M2.7, MiniMax M2.7 Flash |
| 硅基流动 | SiliconFlow | 各种开源模型代理 |
| 智谱 GLM | Zhipu GLM | GLM-5.1, GLM-5.1 Flash |
| 阶跃星辰 | StepFun | Step-2-16K |
| 小米 MiMo | Xiaomi MiMo | MiMo 系列 |

**3.3 填写 API Key**

以 DeepSeek 为例：

1\. 选择 DeepSeek 预设

2\. 填入你的 DeepSeek API Key（从 \[platform.deepseek.com\](https://platform.deepseek.com) 获取）

3\. 预设已自动填好 Base URL、默认模型、模型列表

4\. “Needs Local Routing” 自动开启——这表示该 Provider 需要 CC Switch 的协议转换

5\. 点击保存

Kimi 和 MiniMax 同理，选对应预设、填 Key、保存即可。

**3.4 自定义模型（可选）**

如果需要调整模型列表，可以在 Provider 编辑页面的 **模型目录** 中增删改：

– 模型名称：发给上游 API 的实际模型 ID（如 deepseek-chat） – 显示名称：在 Codex /model 菜单中显示的名称（如 DeepSeek V4） – 上下文窗口：模型支持的最大 token 数

### 第四步：启用本地路由

这是让一切运转的关键环节。

1\. 打开 CC Switch **设置** → **路由（Routing）**

2\. 展开 **本地路由（Local Routing）**

3\. **打开主路由开关** ——本地代理服务启动，默认监听 127.0.0.1:15721

4\. 在 **Routing Enabled** 下，打开 **Codex** 的开关

启用后，CC Switch 会自动把 Codex 的实时配置指向本地路由：

```
# ~/.codex/config.toml（CC Switch 自动写入）
model = "deepseek-chat"
model_provider = "custom"
base_url = "http://127.0.0.1:15721/v1"
```

Codex 以为自己在跟一个本地 OpenAI 兼容服务通信，实际上 CC Switch 在背后做了所有协议转换。

### 第五步：切换 Provider 并验证

**5.1 激活 Provider**

<iframe width="820" height="280" frameborder="0" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1815728334277771&amp;output=html&amp;h=280&amp;num_ads=1&amp;adk=1308638540&amp;adf=3917187600&amp;w=820&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1780923397&amp;rafmt=1&amp;armr=3&amp;sem=mc&amp;pwprc=7339359691&amp;ad_type=text_image&amp;format=820x280&amp;url=https%3A%2F%2Fwww.intoep.com%2Fai%2F73395.html&amp;fwr=0&amp;pra=3&amp;rh=200&amp;rw=820&amp;rpe=1&amp;resp_fmts=3&amp;asro=0&amp;aiactd=0&amp;aicctd=0&amp;ailctd=0&amp;aimartd=4&amp;aieuf=1&amp;aicrs=1&amp;fa=27&amp;uach=WyJXaW5kb3dzIiwiMTkuMC4wIiwieDg2IiwiIiwiMTQ4LjAuMzk2Ny45NiIsbnVsbCwwLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjE0OC4wLjc3NzguMjE3Il0sWyJNaWNyb3NvZnQgRWRnZSIsIjE0OC4wLjM5NjcuOTYiXSxbIk5vdC9BKUJyYW5kIiwiOTkuMC4wLjAiXV0sMF0.&amp;abgtt=6&amp;dt=1780923375088&amp;bpp=1&amp;bdt=3102&amp;idt=1&amp;shv=r20260604&amp;mjsv=m202606030101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D1e8d5af0e2392132%3AT%3D1780923375%3ART%3D1780923375%3AS%3DALNI_MZf5Oif2UlGsiQnx5oYwBoPqZkdCA&amp;gpic=UID%3D000014499009536b%3AT%3D1780923375%3ART%3D1780923375%3AS%3DALNI_Mbt7-kEQfs4C-zwE_-leec0-yrJIw&amp;eo_id_str=ID%3D45f766b9e5f01b71%3AT%3D1780923375%3ART%3D1780923375%3AS%3DAA-AfjYUoRO-b5eu8xILJ27aTmEq&amp;prev_fmts=0x0%2C820x280%2C300x300%2C820x280%2C820x280%2C820x280%2C1005x124%2C820x280%2C820x280%2C820x280&amp;nras=9&amp;correlator=2442545977012&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=1&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1032&amp;u_aw=1920&amp;u_cd=32&amp;u_sd=1&amp;dmc=16&amp;adx=379&amp;ady=7589&amp;biw=1897&amp;bih=914&amp;scr_x=0&amp;scr_y=3965&amp;eid=95390668%2C31098986%2C95392916&amp;oid=2&amp;psts=AOrYGslvMtQJQAXBJItL5OvZ7sryojd9gIKGWmyC0-amm9bkVonhsOS2eMIaOqrmsbcEjLFq0R9sVfDPaadqr6mA_CjEviQq8mgZQAOFjG0cwppmwGl1haPX-eprDiqmfAEcsmpZ%2CAOrYGskVLMr4Tk9hs5G4ETqPwbgHnsCXUGFpwVREYWw3HUuGh_HV_IoFCHwwtJqlT4mPu1lOAU2YVKhMTHxGCBym7rk3uly1PqiZyy6RzFRpmmeOBb0%2CAOrYGsmgMA0Fot163ypQkhAo-_cvAwT4L0H3Flv3F47Nkf1qmXypcIUcy8ijZ9-ZEIdolgk53faJjmWhioGjFZ5FgRHNQnpSUV0WehnO9mQRXi7NVtM&amp;pvsid=8206292898453064&amp;tmod=1535217083&amp;uas=1&amp;nvt=1&amp;ref=https%3A%2F%2Fcn.bing.com%2F&amp;fc=1408&amp;brdim=1920%2C0%2C1920%2C0%2C1920%2C0%2C1920%2C1032%2C1912%2C914&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=128&amp;bc=31&amp;plas=307x721_l%7C307x721_r&amp;bz=1&amp;ifi=10&amp;uci=a!a&amp;btvi=8&amp;fsb=1&amp;dtd=22538" title="Advertisement" aria-label="Advertisement"></iframe>

回到 Codex Provider 列表，点击 DeepSeek 旁边的 **启用** 按钮。

你会看到 Provider 名称旁边出现 **“Needs Routing”** 标记——这说明该 Provider 依赖本地路由，路由服务必须在运行中。

**5.2 重启 Codex**

```bash
# 关闭当前 Codex 进程，重新启动
codex
```

重启的原因：Codex 在启动时读取配置和模型目录，运行中不会热加载。

**5.3 验证模型**

在 Codex 中输入 /model，检查当前模型是否来自你刚配置的 Provider，例如 DeepSeek V4。

**5.4 发送测试请求**

```markdown
> 用 Python 写一个快速排序，要求支持自定义比较函数
```

如果 Codex 正常返回代码且没有报错，说明链路打通了。

**5.5 检查路由日志**

回到 CC Switch，查看 **用量/请求日志** ，确认： – 请求次数增加了 – 请求目标是 DeepSeek（而非 OpenAI） – 响应状态码是 200

---

## 三个 Provider 的配置速查

### DeepSeek

```bash
预设：DeepSeek
Base URL：https://api.deepseek.com
默认模型：deepseek-chat
推荐模型：deepseek-chat（V4）、deepseek-reasoner（R1）
API Key 获取：platform.deepseek.com
价格：约 ¥1/百万 token（V4 Flash）
```

### Kimi（月之暗面）

```bash
预设：Kimi
Base URL：https://api.moonshot.cn/v1
默认模型：kimi-k2-0711-preview
推荐模型：kimi-k2-0711-preview、kimi-k2-turbo-preview
API Key 获取：platform.moonshot.cn
价格：约 ¥4/百万 token（K2）
```

### MiniMax

```bash
预设：MiniMax
Base URL：https://api.minimax.chat/v1
默认模型：MiniMax-M2.7
推荐模型：MiniMax-M2.7、MiniMax-M2.7-flash
API Key 获取：platform.minimaxi.com
价格：有 Coding Plan 包月套餐，也可按量计费
```

---

## 常见问题排查

### Codex 报 404 或找不到/responses

**原因：** Codex 路由没有启用，或者上游 Base URL 被手动写进了 Codex 配置。

**解决：** 1. 检查 CC Switch 设置 → 路由 → Codex 开关是否打开 2. 检查 ~/.codex/config.toml 的 base\_url 是否指向 http://127.0.0.1:15721/v1 3. 不要手动改 Codex 配置，一切由 CC Switch 管理

### /model不显示国产模型

**原因：** Codex 进程没有重启，模型目录没有热加载。

**解决：** 关闭 Codex，重新打开。CC Switch 会在切换 Provider 时生成 cc-switch-model-catalog.json，但 Codex 需要重启才能读取。

### 路由已启用但请求仍发往 OpenAI

**原因：** 三个状态不一致——Codex 标签页的当前 Provider 不是国产模型、本地路由没启动、Codex 开关没打开。

**解决：** 逐一确认这三个状态都指向正确的 Provider。

### 流式输出乱码或中断

**原因：** 上游 Provider 的 SSE 格式与标准略有差异。

**解决：** CC Switch v3.16.0 已针对 DeepSeek、Kimi、MiniMax 做了专门的流式兼容处理。如果仍有问题，升级到最新版本。

**能不能同时用多个 Provider？**

可以，但需要手动切换。 CC Switch 支持一键切换 Provider，从系统托盘也可以快速切换。但同一时间只有一个 Provider 生效。

---

## 为什么不用 OpenAI 官方账号

![如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程](https://www.intoep.com/wp-content/uploads/2026/06/2026060413203536.webp)

如何用 CC Switch 让 Codex 接入 DeepSeek、Kimi 等国产模型？无需 OpenAI 账号，完整保姆级教程

| 对比项 | OpenAI 官方 | CC Switch + 国产模型 |
| --- | --- | --- |
| 注册门槛 | 需要海外手机号验证 | 只需邮箱注册 |
| API 费用 | GPT-4o ~$15/百万 token | DeepSeek V4 ~¥1/百万 token |
| 网络要求 | 需要访问 OpenAI API | 国内直连 |
| 模型选择 | 只有 GPT 系列 | DeepSeek/Kimi/MiniMax 等自由切换 |
| 数据合规 | 数据出境 | 数据留在国内 |

成本直降 90%+，零验证门槛，国内直连，模型自由切换。

---

## 进阶：CC Switch 的其他能力

除了 Codex 接入国产模型，CC Switch 还支持：

**– Claude Code 管理：** 同理管理 Claude Code 的 Provider 切换

**– Gemini CLI 支持：** Google Gemini 模型的 Provider 管理

**– 统一 MCP 管理：** 跨工具管理 MCP 服务器配置 – 用量看板：追踪每个 Provider 的花费、请求数、Token 用量

**– 本地代理 + 自动故障转移：** 多 Provider 备份，一个挂了自动切到下一个

**– 云端同步：** 通过 Dropbox/OneDrive/WebDAV 跨设备同步配置

---

## 总结

Codex 接入国产模型的核心链路：

```
Codex CLI
  → 发送 Responses API 请求到 127.0.0.1:15721
  → CC Switch 本地路由截获
  → 自动转码为 Chat Completions 格式
  → 转发给 DeepSeek / Kimi / MiniMax
  → 收到响应后转回 Responses 格式
  → 返回给 Codex
```

整个过程对 Codex 完全透明，它以为自己在跟 OpenAI 通信。 **你不需要 OpenAI 账号，不需要手机验证，只需要一个国产模型的 API Key。**

CC Switch 把”协议不兼容”这个技术难题封装成了”选预设、填 Key、点启用”三步操作。这就是工具的价值—— **让开发者把时间花在写代码上，而不是折腾配置上。**

转载作品，原作者：AI锋行，文章来源：https://www.toutiao.com/article/7646957257896280614
