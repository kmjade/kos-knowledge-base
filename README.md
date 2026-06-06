# KOS_LLM-Wiki

**Knowledge Organization System + LLM-Wiki**

一个融合 **PARA 方法**、**UDC 分类法** 与 **LLM 知识库** 的现代个人知识管理系统。

## 系统架构

```
KOS_LLM-Wiki/
├── 01-Projects/          # 项目：有明确目标与截止日期
├── 02-Areas/             # 领域：持续关注的长期主题
│   ├── 知识管理.md
│   └── LLM 研究.md
├── 03-Resources/         # 资源：参考资料与知识库
│   ├── PARA/             # PARA 方法论
│   ├── UDC/              # 国际十进分类法
│   └── LLM-Wiki/         # LLM 知识库
├── 04-Archives/          # 归档：非活跃内容
├── 05-Meta/              # 元：系统自身
│   ├── Templates/        # 笔记模板
│   ├── Scripts/          # 脚本（预留）
│   └── Attachments/      # 附件（图片等）
├── 06-Daily/             # 每日笔记
├── Home.md               # 主页
├── _索引.md              # 总索引（PARA + UDC）
└── README.md
```

## 核心特性

- **PARA 组织** — 项目/领域/资源/归档四级结构
- **UDC 分类** — 每个笔记标注国际十进分类号
- **LLM 知识库** — 涵盖 Transformer、训练、微调、提示工程
- **Obsidian 原生** — 完整的前置元数据、模板系统、双向链接

## 快速开始

1. 用 [Obsidian](https://obsidian.md) 打开本仓库
2. 启用「设置 → 核心插件 → 模板」，模板文件夹设为 `05-Meta/Templates`
3. 从 `Home.md` 开始浏览
4. 新建笔记使用 `Ctrl/Cmd+P` → `插入模板`

## UDC 分类映射

本系统核心 UDC 类号：

| 类号 | 类目 |
|------|------|
| 001.8 | 知识组织与管理 |
| 004.8 | 人工智能 / LLM |
| 025.4 | 分类法 |
| 001.8:005 | 知识管理方法（PARA） |
| 001.8:004.8 | 知识组织与 AI |

完整分类见 [[_索引]] 或 [[03-Resources/UDC/UDC 分类索引]]

## 贡献

见 LICENSE 文件。
