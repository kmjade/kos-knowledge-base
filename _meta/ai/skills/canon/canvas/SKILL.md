---
name: canvas
description: "KOS 第三个知识捕获层 —可视化参考层。将图片、文本卡片、PDF 和wiki 页面添加到Obsidian Canvas 文件，支持区域内自动定位。触发词：canvas、画布、可视、visual、visualize、Canvas-Status、Canvas-New、Canvas-Add-Image、Canvas-Add-Text、Canvas-Add-Note、Canvas-Add-PDF、Canvas-Zone、Canvas-List"
allowed-tools: Read Write Edit Glob Grep
---

# Canvas：可视化参考层

三个知识捕获层：
- **KOS-Compile** →文本综合（`wiki/` 页面，- **KOS-Triage + KOS-Query** →结构化知识（索引 + 查询，- **Canvas** →**可视化参考*（`_attachments/canvases/` 画布，
画布是Obsidian 渲染为无限视觉面板的 JSON 文件（`.canvas`，JSON Canvas 1.0 格式）。本技能直接读写画布JSON。先识`json-canvas` 参考技能了解完整格式。
---

## 默认画布

`_attachments/canvases/_index.canvas`

如果不存在，创建它：

```json
{
  "nodes": [
    {
      "id": "title",
      "type": "text",
      "text": "# Visual Reference\n\nKOS 知识库的可视化总览层。在这里放置图片、PDF 和笔记卡片。,
      "x": -400, "y": -300, "width": 400, "height": 120, "color": "6"
    },
    {
      "id": "zone-default",
      "type": "group",
      "label": "通用",
      "x": -400, "y": -140, "width": 800, "height": 400, "color": "4"
    }
  ],
  "edges": []
}
```

---

## 操作

### `Canvas-Status` —状态查询
1. 检查`_attachments/canvases/_index.canvas` 是否存在
2. 如果存在：读取，按类型统计节点，列出所有group 标签（区域名：   - 报告：画布有N 个节点：X 个图片，Y 个文本卡片，Z 个笔记链接。区域：[列表]"
3. 如果不存在：用起始结构创建4. 提示，在Obsidian 中打开 `_attachments/canvases/_index.canvas` 查看"

### `Canvas-New <name>` —新建画布

1. 将名称slugify：小写，空格→连字符，去特殊字符
2. 创建 `_attachments/canvases/[slug].canvas` 并用起始结构初始化3. 报告：`"已创建_attachments/canvases/[slug].canvas"`

### `Canvas-Add-Image <path>` —添加图片

**解析图片：*
- 如果是URL（以 `http` 开头）：用 `curl -sL [url] -o _attachments/media/images/[filename]`
- 如果是vault 外路径：复制到`_attachments/media/images/`
- 如果已是 vault 内相对路径：直接使用

创建 `_attachments/media/images/` 如果不存在。
**检测宽高比**（可选，仅当系统有PIL/ImageMagick 时），```bash
python3 -c "from PIL import Image; img=Image.open('[path]'); print(img.width, img.height)"
```

| 宽高比| 条件 | Canvas 宽度 | Canvas 高度 |
|--------|------|------------|------------|
| 16:9（宽，| ratio 1.6—.0 | 420 | 236 |
| 超宽 | ratio > 2.0 | 440 | 220 |
| 4:3 | ratio 1.2—.6 | 380 | 285 |
| 1:1（方形） | ratio 0.9—.1 | 280 | 280 |
| 3:4 | ratio 0.6—.9 | 240 | 320 |
| 9:16（竖屏） | ratio < 0.6 | 200 | 356 |
| 未知 | 兜底 | 320 | 240 |

**自动定位**（见下文算法）。*追加节点到画布JSON 并写入。*

报告：`"已添加[filename] 到[区域] 区域，位置([x], [y])"`

### `Canvas-Add-Text <content>` —添加文本卡片

创建文本节点（width=300, height=120, color="4"）→ 自动定位 →写入 →报告。
### `Canvas-Add-Note <page>` —添加笔记链接

1. 在vault 中搜索匹配的笔记文件（大小写不敏感，模糊匹配，2. 使用 vault 相对路径作为 `file` 字段，`type: "file"`（不是`"link"`：3. 文件节点：width=300, height=100
4. 自动定位
5. ID 模式：`note-[slug]-[timestamp]`

```json
{
  "id": "note-prompt-engineering-1744032823",
  "type": "file",
  "file": "3 Resources/004-LLM-Wiki/wiki/concepts/提示工程.md",
  "x": [auto], "y": [auto],
  "width": 300, "height": 100
}
```

### `Canvas-Add-PDF <path>` —添加 PDF

与添加图片相同。Obsidian 原生渲染 PDF。- vault 外路径→复制到`_attachments/media/pdfs/`
- 固定尺寸：width=400, height=520

### `Canvas-Zone <name> [color]` —添加区域分组

1. 读取画布 JSON
2. 找当前最大y：`max(node.y + node.height for all nodes) + 60`
3. 创建 group 节点：x=-400, width=1000, height=400, color 默认为"3"

有效颜色：`"1"`=红`"2"`=橙`"3"`=黄`"4"`=绿`"5"`=蓝`"6"`=紫
### `Canvas-List` —列出所有画布
1. `Glob _attachments/canvases/*.canvas`
2. 每个画布：读 JSON，统计节点3. 报告，```
_attachments/canvases/_index.canvas      . 14 节点， 图片, 3 文本, 2 笔记, 1 分组，_attachments/canvases/design-ideas.canvas. 42 节点，0 图片, 4 文本, 8 分组，```

---

## 自动定位算法

```python
def next_position(canvas_nodes, target_zone_label, new_w, new_h):
    # 找到目标 zone group 节点
    zone = next((n for n in canvas_nodes
                 if n.get('type') == 'group'
                 and n.get('label') == target_zone_label), None)

    if zone is None:
        # 旜zone：放在所有内容下方        max_y = max((n['y'] + n.get('height', 0) for n in canvas_nodes), default=-140)
        return -400, max_y + 60

    zx, zy = zone['x'], zone['y']
    zw, zh = zone['width'], zone['height']

    inside = [n for n in canvas_nodes
              if n.get('type') != 'group'
              and zx <= n['x'] < zx + zw
              and zy <= n['y'] < zy + zh]

    if not inside:
        return zx + 20, zy + 20

    rightmost_x = max(n['x'] + n.get('width', 0) for n in inside)
    next_x = rightmost_x + 40

    if next_x + new_w > zx + zw:
        # 超出 →换行
        max_row_y = max(n['y'] + n.get('height', 0) for n in inside)
        return zx + 20, max_row_y + 20

    # 同一行：对齐到该行最上端
    current_row_y = min(n['y'] for n in inside)
    return next_x, current_row_y
```

---

## ID 生成

读取画布，收集所有现有ID。绝不重用。
ID 模式：`[type]-[slug]-[unix-timestamp]`

示例：`img-architecture-1744032823`、`text-note-1744032845`、`zone-branding-1744032901`

检测到冲突 →追加 `-2`、`-3` 等。
---

## 并发安全

所有写入操作前获取文件锁：

```
python3 _meta/scripts/wiki-lock.py acquire _attachments/canvases/[target].canvas
... 写入 ...
python3 _meta/scripts/wiki-lock.py release _attachments/canvases/[target].canvas
```

---

## 限制

- 一次操作建议≠ 个节点- 不支持异步入回- Canvas 内容不在 KOS-Query 范围内（JSON 非Markdown，- 不自动裁剪压缩/转换图片格式
- 不跨语言翻译（视觉内容语言无关）- 创建新画布时**不更新索引*（画布是辅助可视层，非知识库主体：
---

## 总结

1. 操作前置：先识`json-canvas` 参考技能确认格引2. 写入前始终读取画布文件，解析已有节点避免 ID 冲突
3. 外部资源复制到`_attachments/media/` 对应子目录4. 使用自动定位算法维持布局整洁
5. 写入操作需文件锁保护6. 报告每次操作的位置和区域

## 参见

- `json-canvas` 参考技能：JSON Canvas 1.0 格式规范
- `_meta/design/canvas-可视层设议md`：完整设计文档