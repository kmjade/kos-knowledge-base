---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:005.1
tags: [concept, release, workflow, operations]
---

# Release 发行流程

> **概念** — KOS-LLM-Wiki 版本发行操作的手顺与注意事项。

## 操作步骤

### 1. 提交变更

```bash
git add -A
git commit -m "release: vX.Y.Z — 标题"
```

注意检查 `index.lock` 残留锁，以及 Windows 环境下超长文件名（>260 字符）会导致 `git add` 失败。

### 2. 打标签

```bash
git tag -a vX.Y.Z -m "vX.Y.Z — 标题"
```

### 3. 推送

```bash
git push origin main vX.Y.Z
git push origin --tags     # 推送所有本地标签
```

## 已知问题

### GitHub API 中文乱码

PowerShell 的 `ConvertTo-Json` 对中文字符的 UTF-8 编码处理不当，导致通过 API 创建的 Release body 中文变成 `???`。

**修复方法**：手动构造 JSON 字符串并用 UTF-8 bytes 发送：

```powershell
$body = '{"tag_name":"vX.Y.Z","name":"vX.Y.Z","body":"中文内容"}'
$bytes = [Text.Encoding]::UTF8.GetBytes($body)
Invoke-RestMethod -Uri "https://api.github.com/repos/owner/repo/releases/ID" `
  -Method Patch -Headers $headers -Body $bytes `
  -ContentType "application/json; charset=utf-8"
```

### 文件锁冲突

`.git/index.lock` 残留导致 `git add` 失败，需先清除锁文件。

### 超长文件名

Inbox 中网页剪藏文件名可能超过 Windows MAX_PATH 限制（260 字符），需重命名为短名称后再提交。

## 发行版本记录

| 版本 | 日期 | 主要内容 |
|------|------|---------|
| v1.0.0 | 2026-06-07 | 初始架构，PARA+UDC+LLM-Wiki 融合 |
| v1.1.0 | 2026-06-07 | 子模块分解，三语言同步 |
| v1.1.1 | 2026-06-07 | 索引链接修复 |
| v1.2.0 | 2026-06-07 | People CRM，EN/ZH-TW 实体页 |
| v1.2.1 | 2026-06-07 | 表格/Dataview/PowerShell 编码修复 |
| v1.3-file-lock | 2026-06-08 | 文件锁系统 wiki-lock.py |
| v3.0 | 2026-06-09 | Canvas 可视层，三平台 Skills 架构 |
| v3.2.0 | 2026-06-09 | 知识库重组，Skills 补齐 |
