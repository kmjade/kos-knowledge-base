---
title: "04 工具与 MCP"
aliases: [Hermes Tools, Hermes MCP, Hermes 工具]
udc: "004.8"
tags: [hermes-agent, tools, mcp]
created: 2026-09-05
updated: 2026-09-05
---

# 04 工具与 MCP

## 工具与工具集

工具是扩展 Agent 能力的函数，被组织成**工具集（Toolset）**，可按平台启用或禁用。内置约 48 个工具、20 个平台工具集，覆盖网络搜索、终端执行、文件编辑、记忆管理、任务委派、浏览器自动化等。

### 终端（6 种后端）

| 后端 | 执行位置 | 隔离级别 | 适用场景 |
|------|----------|:--:|----------|
| local | 本机 | 无 | 开发、个人使用 |
| docker | Docker 容器 | 完全 | 安全沙箱、CI/CD |
| ssh | 远程服务器 | 网络边界 | 远程开发、高性能硬件 |
| modal | Modal 云沙箱 | 完全 | 临时云计算、评估 |
| daytona | Daytona 工作区 | 完全 | 托管云开发环境 |
| singularity | Singularity/Apptainer 容器 | 命名空间 | HPC 集群 |

### 浏览器（5 种后端）

Browserbase 云、Browser Use 云、本地 Chrome（CDP）、本地 Chromium、Camofox 隐身浏览器——可导航网站、填表、提取信息。

### Web 搜索（4 种后端）

Firecrawl（默认）/ Parallel / Tavily / Exa，提供 `web_search`、`web_extract`、`web_crawl`。

### 其他内置能力

- **代码执行** `execute_code`：沙箱化 RPC 执行 Python，把多步工作流压成单次 LLM 调用
- **文件工具**：read_file / write_file / patch / search_files（含读取去重与大小限制）
- **危险命令审批**：检测危险命令，支持 manual / smart / off 三种模式

## MCP（模型上下文协议）

MCP 让 Agent 连接外部工具服务器（GitHub、数据库、文件系统、浏览器栈、内部 API），无需先写原生工具。

### 两种服务器

| 类型 | 说明 | 配置 |
|------|------|------|
| Stdio | 本地子进程，stdin/stdout 通信 | `command` + `args` + `env` |
| HTTP | 远程端点 | `url` + `headers` |

```yaml
# ~/.hermes/config.yaml
mcp_servers:
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "***"
  company_api:
    url: "https://mcp.internal.example.com"
    headers:
      Authorization: "Bearer ***"
```

### 工具命名与注册

MCP 工具带前缀避免冲突：`mcp_<server>_<tool>`，如 `mcp_github_create_issue`。启动时自动发现注册；服务器支持时额外注册 `list_resources` / `read_resource` / `list_prompts` / `get_prompt` 实用工具。

### 每服务器过滤与安全

```yaml
mcp_servers:
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    tools:
      include: [create_issue, list_issues]   # 白名单（优先级高于 exclude）
      prompts: false                          # 禁用提示词包装器
      resources: false                        # 禁用资源包装器
  legacy:
    url: "https://mcp.legacy.internal"
    enabled: false                            # 完全跳过
```

- Stdio 环境变量过滤：只传显式配置的 `env` + 安全基线，防止密钥泄露
- `sampling`：默认启用，MCP 服务器可反向请求 Hermes 做 LLM 推理，含速率/超时/白名单限制
- 动态工具发现：服务器 `tools/list_changed` 通知自动刷新，`/reload-mcp` 手动重载

### 反向：Hermes 作为 MCP 服务器

```bash
hermes mcp serve
```

其他 MCP 客户端（Claude Code、Cursor、Codex）可调用 Hermes 的消息桥接能力——列出会话、读取消息、跨平台发消息，暴露 10 个工具（`conversations_list`、`messages_send`、`events_wait` 等）。

## 关联

[[03-核心架构]] · [[05-技能系统]] · [[wiki/concepts/MCP-模型上下文协议|MCP]] · [[wiki/concepts/工具集-Toolset|工具集]]
