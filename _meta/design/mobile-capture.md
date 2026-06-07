---
created: 2026-06-07
updated: 2026-06-07
udc: 004.4
tags: [meta, mobile, capture]
---

# 移动端捕获方案

> 在移动设备上快速捕获想法、链接和文件，同步到 KOS_LLM-Wiki。

## 需求分析

| 场景 | 频率 | 捕获内容 | 推荐方式 |
|------|------|----------|----------|
| 快速想法/灵感 | 高 | 几句话、标题 | iOS Shortcut → Drafts → Inbox |
| 网页剪藏 | 中 | 文章链接、摘要 | iOS Share Sheet → Obsidian |
| 拍照/扫描 | 低 | 白板、书页、名片 | iOS Shortcut → 临时目录 |
| 语音备忘 | 低 | 语音转文字 | 系统语音备忘录 → 定期整理 |

## iOS Shortcut 方案

### 快捷指令 1：快速捕获

```
输入：文本
↓
添加 frontmatter：
  created: {当前日期}
  updated: {当前日期}
  tags: [inbox, mobile]
↓
追加到 Obsidian 收件箱：
  00-Inbox/{日期}-{标题}.md
↓
通知：已捕获到 Inbox
```

### 快捷指令 2：网页剪藏

```
输入：Safari 共享 → "捕获到 Wiki"
↓
提取：标题、URL、选中文本
↓
创建文件：
  00-Inbox/clip-{日期}-{标题}.md
  格式：
    # {标题}
    来源：{URL}
    ---
    {选中文本}
↓
通知：已剪藏
```

### 快捷指令 3：拍照捕获

```
输入：拍照或选图
↓
保存到临时目录：
  _inbox/assets/{日期}-{文件名}.jpg
↓
创建引用文件：
  00-Inbox/asset-{日期}.md
  内容：![[assets/{日期}-{文件名}.jpg]]
↓
通知：图片已捕获
```

## 多设备同步策略

| 方案 | 优点 | 缺点 | 推荐度 |
|------|------|------|--------|
| **iCloud + Obsidian Sync** | 原生集成，实时同步 | 需付费 Obsidian Sync | ⭐⭐⭐ |
| **iCloud + Working Copy** | 免费，Git 版本控制 | 需手动提交 | ⭐⭐ |
| **Syncthing** | 跨平台，开源 | 配置复杂，iOS 支持有限 | ⭐ |
| **Git + Working Copy** | 版本控制，全平台 | 需手动操作 | ⭐⭐ |

### 推荐方案
**iCloud + Obsidian Sync** 为最佳实践：
1. 在 iOS 上安装 Obsidian
2. 启用 Obsidian Sync（加密同步）
3. 在 Mac/PC 上安装 Obsidian 并登录同一账号
4. 所有设备自动同步

## 文件组织

```
00-Inbox/
├── 2026-06-07-快速想法.md        ← Shortcut 捕获
├── clip-2026-06-07-文章标题.md   ← 网页剪藏
└── asset-2026-06-07.md          ← 拍照捕获
```

Triage 时统一处理这些文件 → 路由到正确的子库。
