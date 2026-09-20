---
title: "06 工具与 MCP"
aliases: [OpenCode Tools, OpenCode MCP]
udc: "004.8"
tags: [opencode, tools, mcp, lsp]
created: 2026-09-05
updated: 2026-09-05
---

# 06 工具与 MCP

## 内置工具

OpenCode 内置编码所需工具：文件读写/编辑、搜索（grep/glob/list）、终端命令、网络访问（webfetch/websearch）等。配合 **LSP** 提供类型/诊断/符号级上下文。

## MCP（模型上下文协议）

MCP 服务器在 `opencode.json` 的 `mcp.servers` 下配置：

```json
{
  "mcp": {
    "servers": {
      "codeindex": {
        "type": "local",
        "command": ["npx", "-y", "some-mcp-server"],
        "environment": { "KEY": "value" }
      }
    },
    "permissions": {
      "allow": ["mcp__codeindex__*"]
    }
  }
}
```

注意：环境变量键用 `environment`（非 `env`）。

### MCP 命令

```bash
opencode mcp add        # 交互式添加（本地/远程）
opencode mcp list       # 列出
opencode mcp auth <name>   # 认证
opencode mcp debug <name>  # 调试
```

## LSP 服务器

`opencode.json` 可配置 LSP 服务器，为模型提供类型、诊断、符号、跳转等语言智能。

## 关联

[[04-配置与规则]] · [[05-代理与技能]] · [[wiki/concepts/MCP-模型上下文协议|MCP]]
