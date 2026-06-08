---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8
tags: [guide, knowledge-base, kos]
---

# 000-Knowledge 知识库

本目录是 KOS-LLM-Wiki 的知识库核心，按 UDC 学科分类组织原始资料和编译产物。

详细行为规范请参考根目录 `AGENTS.md`（KOS-Wiki-Compile 引擎规则）。本文覆盖本目录特有的结构和约定。

## 目录结构

```
000-Knowledge/
├── raw/                          # 原始资料（immutable，AI 只读不写）
├── wiki/                         # 编译产物
│   ├── concepts/                 #   概念页面
│   ├── entities/                 #   实体页面
│   ├── sources/                  #   来源页面
│   ├── index.md                  #   子库索引
│   └── log.md                    #   编译日志
├── 004-LLM-Wiki/                 # UDC 004.8 — AI / LLM
│   └── wiki/                     #   编译产物（14 页）
├── 004-人工智能/                  # UDC 004.8 — 人工智能（备用）
├── 025-UDC/                      # UDC 025.4 — 分类法
│   └── wiki/                     #   编译产物（20+ 页）
├── 001-PARA/                     # UDC 001.8:005 — PARA
├── 99-資源收集/                   # 待整理的临时资料
├── CLAUDE.md                     # 本文件
└── 000-Knowledge.md              # 子库入口页
```

## 编译规则

### 源文件位置
- **raw/** 下的文件是 AI 不可变的原始资料
- **004-LLM-Wiki/raw/**、**025-UDC/raw/** 等子库的 raw/ 目录同理
- 编译产物写入对应的 `wiki/` 目录

### 页面类型

| 类型 | 目录 | 内容 | 模板 |
|------|------|------|------|
| **concept** | `wiki/concepts/` | 理论、方法、框架、概念 | 概念模板 |
| **entity** | `wiki/entities/` | 工具、人物、产品、组织 | 实体模板 |
| **source** | `wiki/sources/` | 论文、文章、书籍摘要 | 来源模板 |

### Frontmatter 规范

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <UDC 类号>
tags: [tag1, tag2]
compiled: true          # 编译标记
reviewed: false          # 人工审核标记（true 后 AI 跳过）
type: concept            # concept | entity | source
---
```

## UDC 分配

本目录下各子库的默认 UDC：

| 子目录 | 默认 UDC | 领域 |
|--------|---------|------|
| `004-LLM-Wiki/` | 004.8 | 人工智能 / LLM |
| `025-UDC/` | 025.4 | 分类法 / 元数据 |
| `001-PARA/` | 001.8:005 | PARA 知识管理 |
| `004-人工智能/` | 004.8 | 人工智能 |
| `99-資源收集/` | — | 待分拣 |

## 交叉引用

- 同一子库内的 wiki 页面使用 basename 链接：`[[LLM 基础]]`
- 跨子库链接使用完整路径：`[[3 Resources/000-Knowledge/025-UDC/wiki/UDC 概述\|UDC 概述]]`
- 链接到根目录文件：`[[AGENTS.md]]` 或 `[[CLAUDE.md]]`

## 跨语言

本目录的英文镜像位于 `en/3 Resources/000-Knowledge/`，繁体位于 `zh-tw/3 Resources/000-Knowledge/`。
编译产物需同步创建/更新三语言版本。详情见根目录 `AGENTS.md` §跨语言链接规则。

## Delta 追踪

编译前后的文件变更通过 `_meta/.manifest.json` 追踪，避免重复处理未变更来源。
详见 `AGENTS.md` KOS-Wiki-Compile → Delta 追踪。
