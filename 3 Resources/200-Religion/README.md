---
title: "200 宗教 知识库"
aliases: [宗教 知识库, 宗教知识库, 宗教神学 知识库, Religion KB]
udc: "2"
tags: [resources, religion, udc/2]
created: 2026-09-28
updated: 2026-09-28
---

# 200 宗教 知识库

> 宗教·神学容器，**DDC 200 / UDC 2**。覆盖：宗教专用复分（`2-1/-9`）与 `21`–`29` 诸宗教体系。
> 入口页：[[3 Resources/200-Religion/200-Religion|200 宗教]]。

## 快速导航

### UDC 2 骨架壳

| 壳 | UDC | 支线 | 状态 |
|:---|:----|:----|:----:|
| [[3 Resources/200-Religion/21-史前与原始宗教/21-史前与原始宗教\|21 史前与原始宗教]] | 21 | `212` 史前 · `213` 原始 | 🟢 |
| [[3 Resources/200-Religion/22-远东发祥的宗教/22-远东发祥的宗教\|22 远东发祥的宗教]] | 22 | `221` 中国 · `221.3` 道教 · `223` 韩国 · `225` 日本 | 🟢 |
| [[3 Resources/200-Religion/23-印度次大陆发祥的宗教/23-印度次大陆发祥的宗教\|23 印度次大陆发祥的宗教]] | 23 | `233` 印度教 · `234` 耆那教 · `235` 锡克教 | 🟢 |
| [[3 Resources/200-Religion/24-佛教/24-佛教\|24 佛教]] | 24 | `241`–`244` | 🟢 |
| [[3 Resources/200-Religion/25-古代宗教与异教/25-古代宗教与异教\|25 古代宗教与异教]] | 25 | `251`·`252`·`254`·`255`·`257`·`258` | 🟢 |
| [[3 Resources/200-Religion/26-犹太教/26-犹太教\|26 犹太教]] | 26 | `261`–`267` | 🟢 |
| [[3 Resources/200-Religion/27-基督教/27-基督教\|27 基督教]] | 27 | `271`–`279` | 🟢 |
| [[3 Resources/200-Religion/28-伊斯兰教/28-伊斯兰教\|28 伊斯兰教]] | 28 | `281`·`282`·`284`·`285`·`286` | 🟢 |
| [[3 Resources/200-Religion/29-现代精神运动/29-现代精神运动\|29 现代精神运动]] | 29 | 主题式 | 🟢 |

> ✅ **9 / 9 就位**（`21`–`29`）。

### 既有子库

> 无（本轮新建；原容器仅有入口 stub）。

## 层次定位

```
200 宗教（DDC 200 容器 / UDC 2）
├── 21 史前与原始宗教      UDC 21   🟢 骨架壳
├── 22 远东发祥的宗教      UDC 22   🟢 骨架壳
├── 23 印度次大陆发祥的宗教 UDC 23   🟢 骨架壳
├── 24 佛教                UDC 24   🟢 骨架壳
├── 25 古代宗教与异教      UDC 25   🟢 骨架壳
├── 26 犹太教              UDC 26   🟢 骨架壳
├── 27 基督教              UDC 27   🟢 骨架壳
├── 28 伊斯兰教            UDC 28   🟢 骨架壳
├── 29 现代精神运动        UDC 29   🟢 骨架壳（主题式）
├── wiki/                  容器级编译产物（concepts · entities · sources）
└── raw/                   原始资料（articles · books）

专用复分轴：2-1/-9（理论·人士·活动·仪式·组织·宗教法…）
旁系：1 哲学（宗教哲学）| 3 社会科学（政教 322 · 教会法 348）| 9 历史地理（宗教史）
```

## 建壳规范

- **形态**：集合节点式 —— 入口页 + `README` + `CLAUDE`(schema) + `raw/articles/` + `wiki/{concepts,entities,sources}/` + `wiki/index.md` + `wiki/log.md`
- **粒度**：类号级建子库壳（容器根 `200-Religion/<类号>-<名>/`）；细粒度类号建**文件夹笔记**，落于 `<壳>/raw/articles/`
- **编号轴**：容器内以 **UDC 2** 为轴（顶层容器名保留 DDC `200`，见 [[_meta/architecture/adr/ADR-009-新建02-信息学子库与DDC编号主轴|ADR-009]]）
- **目录移动**：一律走 Obsidian link-aware（`obsidian move` / `FileManager.renameFile`），禁 shell `mv`

## 关联

- 兄弟容器：[[3 Resources/000-Knowledge/000-Knowledge|000 知识组织]] · [[3 Resources/100-Philosophy/100-Philosophy|100 哲学]] · [[3 Resources/300-Social/300-Social|300 社会科学]] · [[3 Resources/500-NaturalSciences/500-NaturalSciences|500 自然科学]] · [[3 Resources/600-Technology/600-Technology|600 技术]] · [[3 Resources/900-HistoryGeography/900-HistoryGeography|900 历史地理]]
- Wiki 索引：[[3 Resources/200-Religion/wiki/index|200 宗教 Wiki 索引]]
