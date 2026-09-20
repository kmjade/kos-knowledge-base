---
title: "07 API 与自动化"
aliases: [ComfyUI API, Comfy SDK, Comfy MCP]
udc: "004.8"
tags: [comfyui, api, sdk, mcp]
created: 2026-09-05
updated: 2026-09-05
---

# 07 API 与自动化

## 内置 API

ComfyUI 内置 **WebSocket + REST API + 队列系统**，用于自动化与生产管线：

| 端点 | 用途 |
|------|------|
| `/system_stats` | 系统状态 |
| `/api/object_info` | 节点信息 |
| `/api/queue` | 队列 |
| `/api/upload/image` | 上传图片 |
| `/history` | 历史 |

## Comfy SDK

`@comfyorg/sdk`（beta）从 TypeScript/Python 运行工作流：

```ts
const client = new Comfy({ apiKey: "comfyui-..." });
const wf = await client.workflows.fromFile("workflow_api.json");
wf.setInput("61", "image", asset);
const job = await client.run(wf);
```

每个工作流本质是 **JSON 图**（File → Export Workflow (API)）。

## Comfy MCP

通过 MCP 连接 AI agent，让 agent 调用 ComfyUI 做图像/视频/音频/3D 生成。云端托管于 cloud.comfy.org。

## Comfy CLI

```bash
comfy generate "..."     # 从终端调用合作伙伴模型（beta）
comfy node install <name>  # 安装自定义节点
```

## 关联

[[06-Manager与自定义节点]] · [[09-平台与实战]] · [[wiki/concepts/API-接口|API]] · [[wiki/concepts/Comfy-MCP|Comfy MCP]]
