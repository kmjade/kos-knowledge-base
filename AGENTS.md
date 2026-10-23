# AGENTS — KOS_LLM-Wiki 维护指南

> 本仓库是知识组织管理系统，**非软件项目** — 无构建系统、无测试套件、无应用代码。通过 Obsidian 管理，AI 辅助分拣、编译与链接校验。
> `CLAUDE.md` 是快速上手参考；本文件是权威行为规范。

---

## 目录结构

```
├── 0 Inbox/          # IOO 流水线：1-input/ → 2-output/ → 3-outcome/ + WORKSPACE.md
├── 1 Projects/       # ITO 生命周期：1-proposal/ → 2-execution/ → 3-completion/ + WORKSPACE.md
├── 2 Areas/          # 人生轨迹：生活/工作/学习 + WORKSPACE.md
├── 3 Resources/      # 参考资料与知识库 + WORKSPACE.md
├── 4 Archives/       # 冷存储：projects/（项目） tasks/（工单） legacy/（不明） + WORKSPACE.md

├── _meta/            # 模板、ADR、日志、查询、索引、AI（技能/记忆/角色）、资产、schema + WORKSPACE.md
├── _attachments/     # 附件/图片（受 git 跟踪的媒体目录）

├── Periodic/         # 日/周/月/季/年笔记（gitignored）
├── en/               # English 镜像
├── zh-tw/            # 繁體中文鏡像
└── .obsidian/        # Obsidian 配置（gitignored）
```

---

### 0 Inbox 流水线结构

```
0 Inbox/
├── 0 Inbox.md              ← Dashboard
├── 1-input/
│   ├── clippings/          ← 网页剪藏
│   └── fleeting/           ← 碎片想法
├── 2-output/               ← 处理后的输出件
├── 3-outcome/
│   ├── learnings/          ← 沉淀的知识
│   └── impacts/            ← 实际行动/决策影响
└── _processed/             ← AI 处理后暂存
```

### 1 Projects 生命周期结构

```
1 Projects/
├── 1 Projects.md              ← Dashboard
├── 1-proposal/                ← 验入法论证通过，待立项
├── 2-execution/               ← 已立项，正在执行
└── 3-completion/              ← 产出完成，待结项 → 直接移入 4 Archives/projects/
```

> ℹ️ **阶段四 `4-archived/` 已于 2026-09-20 移除**（自建成起从未被任何项目使用，全部归档均为 `2-execution/` · `3-completion/` · `1-proposal/` → `4 Archives/projects/` 直连）。物理目录暂留，不再作为流水线阶段。

## 笔记规范

### 文件命名

| 语言 | 约定 | 示例 |
|------|------|------|
| 简体中文（根目录） | 中文描述 + 空格分隔 | `提示工程.md` |
| English（`en/`） | kebab-case | `prompt-engineering.md` |

### 目录命名

| 区域 | 目录语言 | 内容语言 | 备注 |
|------|---------|---------|------|
| 0 Inbox/（新） | 英文 | 中文 | 流水线结构：1-input/ 2-output/ 3-outcome/ |
| 1 Projects/（新） | 英文 | 中文 | 生命周期：1-proposal/ 2-execution/ 3-completion/ |
| 2 Areas/（现有） | 中文 | 中文 | 不动 |
| 3 Resources/（现有） | 中英混合 | 中文 | 不动 |
| 4 Archives/（现有） | 英文 | 中文 | 不动 |
| en/ 镜像 | 英文 | 英文 | 按新结构同步 |
| zh-tw/ 镜像 | 繁体中文 | 繁体中文 | 按新结构同步 |
| 繁體中文（`zh-tw/`） | 中文描述 + 空格分隔 | `提示工程.md` |

### Frontmatter（必填）

```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <类号>
tags: [tag1, tag2]
---
```

- `_meta/system/logs/` 和 `0 Inbox/` 下的文件不要求完整 frontmatter
- `tags` 中 PARA 所属用 `#area/*` / `#resource/*` / `#project`
- 三语言版本必须保持相同标签

### UDC 分类法

UDC 格式：`\d{1,3}(\.\d+)?((:|/)\d{1,3}(\.\d+)?|/\.\d+|-\d{1,3}(\.\d+)?|\([^()]*\))*`

> **主类号位数** —— UDC 主类号可为 **1–3 位**：`0`–`9` 单数字主类（其细分惯用三位：`001` · `004` · `020` · `929` · `681.5`）；**类 7「艺术」** 惯用 **1–2 位**：`7` 艺术 · `72` 建筑 · `74` 图形装饰艺术 · `76` 图形艺术 · `79` 休闲娱乐游戏体育 —— 与下方 **L2 目录启发式**的 `74-…/* → 74`、`76-…/* → 76` 等映射一致；**类号跨度**用 `/` 连接（`626/627` 水力工程 · `502/504` 环境科学 · `592/599` 动物学 · `141/165` 哲学流派）。
>
> **连接符扩展** —— 除 `:` 复合与 `/` 跨度外，正则另覆盖：**`-` 形式复分**（`82-1` 诗歌 · `82-311.9` 小说体裁，可再接 `:` 如 `82-311.9:004.8`）；**`/` 缩写范围**（`82.02/.09` 文学理论 · `37.01/.09`，后一位省略重复主类号）；**`(...)` 辅助号**（`51(091)` 统计学史）。

| 类号 | 类目 |
|------|------|
| `001.8` | 知识组织与管理 |
| `004.8` | 人工智能 / LLM |
| `025.4` | 分类法 |
| `02` | 信息学（信息组织 / 检索 / 管理） |
| `929` | 人物传记 |
| `681.5` | 自动控制工程 / 机器人学 |
| `001.8:005` | PARA 方法 |
| `001.8:004.8` | 知识组织与 AI |
| `004.8:519.6` | AI 数学基础 |
| `004.8:159.9` | 提示工程 / 认知 |
| `001.8:311` | 报告与统计 |
| `929:316.77` | 核心人物 |

组合使用 `:` 表达复合主题。

> **编号契约（两级 · 见 [[_meta/architecture/adr/ADR-010-两级编号契约与DDC-UDC缝隙裁决规则|ADR-010]]）** —— **一级（容器货架）= DDC**：`3 Resources/` 顶层容器 `000`–`900`（装饰性 · 冻结；改名须 ADR + 三语索引同步）；**二级（子库 / 骨架 / 深库编号）= UDC**：`NN-中文名`，语义权威、常态增长。`000-Knowledge` 顶层子库沿用 [[_meta/architecture/adr/ADR-009-新建02-信息学子库与DDC编号主轴|ADR-009]]（`01`=010 · `02`=020）。名称可依需裁剪，裁剪须在设计稿或本文件记一笔。

#### UDC 自动建议（四层管道，优先级递减）

**L1 — 模板默认值**

| 模板 | 默认 UDC | | 模板 | 默认 UDC |
|------|----------|---|------|----------|
| 每日笔记 / 周报 / 月报 / 年报 | `001.8:004.8` 或 `001.8:311` | | 概念 / 领域 / 资源 | `001.8` |
| 项目模板 | `001.8:005` | | 人物-核心/重要/背景 | `929:316.77` / `929:65.01` / `929` |

**L2 — 目录启发式**

| 目录匹配 | UDC | | 目录匹配 | UDC |
|----------|-----|---|----------|-----|
| `3 Resources/000-Knowledge/00-总类/004-计算机科学/raw/articles/004.8-人工智能/*` / `004.8-*/*` | `004.8` | | `_meta/system/logs/operations/*` | `004.8:005.1` |
| `3 Resources/000-Knowledge/00-总类/*` | `000` | | `3 Resources/000-Knowledge/01-目录学/*` | `01` |
| `3 Resources/000-Knowledge/00-总类/003-*/*` | `003` | | `3 Resources/000-Knowledge/00-总类/005-*/*` | `005` |
| `3 Resources/000-Knowledge/02-信息学/*` | `02` | | `3 Resources/000-Knowledge/06-一般性质的组织/*` | `06` | | `3 Resources/000-Knowledge/00-总类/006-*/*` | `006` |
| `3 Resources/000-Knowledge/00-总类/007-*/*` | `007` | | `3 Resources/000-Knowledge/00-总类/008-*/*` | `008` |
| `3 Resources/000-Knowledge/00-总类/raw/articles/030-*/*` | `030` | | `3 Resources/000-Knowledge/00-总类/raw/articles/050-*/*` | `050` |
| `3 Resources/000-Knowledge/00-总类/raw/articles/070-*/*` | `070` |
| `3 Resources/000-Knowledge/08-多图作品、集体作品/*` | `08` | | `3 Resources/000-Knowledge/09-手稿、珍本、善本/*` | `09` | | `3 Resources/000-Knowledge/00-总类/004-*/*` | `004` |
| `3 Resources/000-Knowledge/00-总类/005-管理/005.94-知识组织与管理/*` | `001.8` | | `3 Resources/000-Knowledge/02-信息学/raw/articles/025-分类法与元数据/*` | `025.4` |
| `3 Resources/000-Knowledge/00-总类/002-*/*` | `002` | | `3 Resources/000-Knowledge/00-总类/001-科学与知识总论、智力工作组织/raw/articles/*-*` | `001` |
| `3 Resources/000-Knowledge/02-信息学/raw/articles/025-知识组织/*` | `025` | | `3 Resources/000-Knowledge/00-总类/001-*/*` | `001` |
| `Periodic/*`（每日笔记） | `001.8:004.8` | | `Periodic/*`（周/月/季/年回顾） | `001.8:311` |
| `3 Resources/People/*` | `929` | | `_meta/architecture/adr/*` / `_meta/architecture/design/*` | `001.8` |
| `2 Areas/*` | `001.8` | | `_meta/index/queries/*` | `001.8:025.4` |
| `3 Resources/000-Knowledge/raw/articles/001-知识组织与管理/001.8-Obsidian/*` | `001.8` | | `3 Resources/000-Knowledge/raw/articles/004.4-软件/*` | `004.4` |
| `3 Resources/000-Knowledge/raw/articles/004.7-物联网/*` | `004.7` | | `3 Resources/000-Knowledge/raw/articles/007.52-Robotics-机器人/*` | `681.5` |
| `3 Resources/600-Technology/69-城建与建筑/*` | `69` | | `3 Resources/600-Technology/69-城建与建筑/696-*/*` | `696` |
| `3 Resources/600-Technology/60-生物科技/*` | `60` | | `3 Resources/600-Technology/62-工程学/*` | `62` |
| `3 Resources/600-Technology/61-医学/*` | `61` | | `3 Resources/600-Technology/63-农学/*` | `63` |
| `3 Resources/600-Technology/64-家政学/*` | `64` | | `3 Resources/600-Technology/66-化学技术/*` | `66` |
| `3 Resources/600-Technology/67-各种工业/*` | `67` | | `3 Resources/600-Technology/68-成品制造/*` | `68` |
| `3 Resources/600-Technology/65-通信运输与工商/*` | `65` | | `3 Resources/600-Technology/65-通信运输与工商/raw/articles/658-*/*` | `658` |
| `3 Resources/600-Technology/*` | `6` | | `3 Resources/600-Technology/62-工程学/raw/articles/62-AutoCAD/*` | `62` |
| `3 Resources/600-Technology/62-工程学/raw/articles/62-SolidWorks/*` | `62` | | `3 Resources/600-Technology/62-工程学/raw/articles/621.38-*/*` | `621.38` |
| `3 Resources/600-Technology/62-工程学/raw/articles/629.7-*/*` | `629.7` | | `3 Resources/600-Technology/62-工程学/raw/articles/621.7-*/*` | `621.7` |
| `3 Resources/600-Technology/68-成品制造/681-精密机械与仪器/681.5-*/*` | `681.5` | | `3 Resources/600-Technology/65-通信运输与工商/raw/articles/655-印刷出版/655-InDesign/*` | `655` |
| `3 Resources/000-Knowledge/00-总类/005-管理/raw/articles/管理学通论/*` | `005` | | `3 Resources/000-Knowledge/00-总类/007-控制论/007.52-004.4-*/*` | `007.52` |
| `3 Resources/900-HistoryGeography/*` | `9` | | `3 Resources/900-HistoryGeography/90-考古学、史前文化、文化遗迹、区域研究/raw/articles/902-*/*` | `902` |
| `3 Resources/900-HistoryGeography/90-考古学、史前文化、文化遗迹、区域研究/raw/articles/903-*/*` | `903` | | `3 Resources/900-HistoryGeography/90-考古学、史前文化、文化遗迹、区域研究/raw/articles/904-*/*` | `904` |
| `3 Resources/900-HistoryGeography/90-考古学、史前文化、文化遗迹、区域研究/raw/articles/908-*/*` | `908` | | `3 Resources/900-HistoryGeography/94-历史/raw/articles/94(510)-*/*` | `94(510)` |
| `3 Resources/900-HistoryGeography/91-*/*` | `91` | | `3 Resources/900-HistoryGeography/92-*/*` | `929` |
| `3 Resources/900-HistoryGeography/93-*/*` | `93` | | `3 Resources/900-HistoryGeography/94-*/*` | `94` |
| `3 Resources/500-NaturalSciences/*` | `5` | | `3 Resources/500-NaturalSciences/502-504-*/*` | `502/504` |
| `3 Resources/500-NaturalSciences/51-*/*` | `51` | | `3 Resources/500-NaturalSciences/52-*/*` | `52` |
| `3 Resources/500-NaturalSciences/53-*/*` | `53` | | `3 Resources/500-NaturalSciences/54-*/*` | `54` |
| `3 Resources/500-NaturalSciences/55-*/*` | `55` | | `3 Resources/500-NaturalSciences/56-*/*` | `56` |
| `3 Resources/500-NaturalSciences/57-*/*` | `57` | | `3 Resources/500-NaturalSciences/58-*/*` | `58` |
| `3 Resources/500-NaturalSciences/59-*/*` | `59` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/519-*/*` | `519.6` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/510-*/*` | `510` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/510.*-*.md` | `510.x` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/511-*/*` | `511` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/512-*/*` | `512` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/514-*/*` | `514` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/514.*-*.md` | `514.x` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/515.1-*/*` | `515.1` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/517-*/*` | `517` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/517.*-*.md` | `517.x` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/519.1-*/*` | `519.1` |
| `3 Resources/500-NaturalSciences/51-数学/raw/articles/519.2-*/*` | `519.2` | | `3 Resources/500-NaturalSciences/51-数学/raw/articles/519.7-*/*` | `519.7` |
| `3 Resources/500-NaturalSciences/53-物理学/raw/articles/531-*/*` | `531` | | `3 Resources/500-NaturalSciences/53-物理学/raw/articles/532-*/*` | `532` |
| `3 Resources/500-NaturalSciences/53-物理学/raw/articles/533-*/*` | `533` | | `3 Resources/500-NaturalSciences/53-物理学/raw/articles/534-*/*` | `534` |
| `3 Resources/500-NaturalSciences/53-物理学/raw/articles/535-*/*` | `535` | | `3 Resources/500-NaturalSciences/53-物理学/raw/articles/536-*/*` | `536` |
| `3 Resources/500-NaturalSciences/53-物理学/raw/articles/537-*/*` | `537` | | `3 Resources/500-NaturalSciences/53-物理学/raw/articles/538.9-*/*` | `538.9` |
| `3 Resources/500-NaturalSciences/53-物理学/raw/articles/539-*/*` | `539` | | `3 Resources/500-NaturalSciences/53-物理学/raw/articles/53.0*-*/*` | `53.0x` |
| `3 Resources/500-NaturalSciences/502-504-环境科学/raw/articles/502-*/*` | `502` | | `3 Resources/500-NaturalSciences/502-504-环境科学/raw/articles/504-*/*` | `504` |
| `3 Resources/500-NaturalSciences/56-古生物学/raw/articles/56-*/*` | `56` | | `3 Resources/500-NaturalSciences/56-古生物学/raw/articles/561-*/*` | `561` |
| `3 Resources/500-NaturalSciences/58-植物学/raw/articles/581-*/*` | `581` | | `3 Resources/500-NaturalSciences/58-植物学/raw/articles/582-*/*` | `582` |
| `3 Resources/500-NaturalSciences/59-动物学/raw/articles/591-*/*` | `591` | | `3 Resources/500-NaturalSciences/59-动物学/raw/articles/592-599-*/*` | `592/599` |
| `3 Resources/300-Social/*` | `3` | | `3 Resources/300-Social/31-统计学/*` | `31` |
| `3 Resources/300-Social/31-统计学/raw/articles/310-*/*` | `310` | | `3 Resources/300-Social/31-统计学/raw/articles/311-*/*` | `311` |
| `3 Resources/300-Social/31-统计学/raw/articles/314-*/*` | `314` | | `3 Resources/300-Social/31-统计学/raw/articles/316-*/*` | `316` |
| `3 Resources/300-Social/33-经济学/*` | `33` | | `3 Resources/300-Social/33-经济学/raw/articles/330-*/*` | `330` |
| `3 Resources/300-Social/33-经济学/raw/articles/331-*/*` | `331` | | `3 Resources/300-Social/33-经济学/raw/articles/332-*/*` | `332` |
| `3 Resources/300-Social/33-经济学/raw/articles/334-*/*` | `334` | | `3 Resources/300-Social/33-经济学/raw/articles/336-*/*` | `336` |
| `3 Resources/300-Social/33-经济学/raw/articles/338-*/*` | `338` | | `3 Resources/300-Social/33-经济学/raw/articles/339-*/*` | `339` |
| `3 Resources/300-Social/37-教育/*` | `37` | | `3 Resources/300-Social/37-教育/raw/articles/37.01-*/*` | `37.01` |
| `3 Resources/300-Social/37-教育/raw/articles/373-*/*` | `373` | | `3 Resources/300-Social/37-教育/raw/articles/374-*/*` | `374` |
| `3 Resources/300-Social/37-教育/raw/articles/376-*/*` | `376` | | `3 Resources/300-Social/37-教育/raw/articles/377-*/*` | `377` |
| `3 Resources/300-Social/37-教育/raw/articles/378-*/*` | `378` | | `3 Resources/300-Social/37-教育/raw/articles/379.8-*/*` | `379.8` |
| `3 Resources/300-Social/336.7-Investment-and-Trading/*` | `336.7` | | `3 Resources/600-Technology/65-通信运输与工商/raw/articles/658-工商管理/658-Marketing/*` | `658.8` |
| `3 Resources/300-Social/32-政治学/*` | `32` | | `3 Resources/300-Social/32-政治学/raw/articles/321-*/*` | `321` |
| `3 Resources/300-Social/32-政治学/raw/articles/322-*/*` | `322` | | `3 Resources/300-Social/32-政治学/raw/articles/323-*/*` | `323` |
| `3 Resources/300-Social/32-政治学/raw/articles/324-*/*` | `324` | | `3 Resources/300-Social/32-政治学/raw/articles/325-*/*` | `325` |
| `3 Resources/300-Social/32-政治学/raw/articles/326-*/*` | `326` | | `3 Resources/300-Social/32-政治学/raw/articles/327-*/*` | `327` |
| `3 Resources/300-Social/32-政治学/raw/articles/328-*/*` | `328` | | `3 Resources/300-Social/32-政治学/raw/articles/329-*/*` | `329` |
| `3 Resources/300-Social/34-法律/*` | `34` | | `3 Resources/300-Social/34-法律/raw/articles/340-*/*` | `340` |
| `3 Resources/300-Social/34-法律/raw/articles/341-*/*` | `341` | | `3 Resources/300-Social/34-法律/raw/articles/342-*/*` | `342` |
| `3 Resources/300-Social/34-法律/raw/articles/343-*/*` | `343` | | `3 Resources/300-Social/34-法律/raw/articles/344-*/*` | `344` |
| `3 Resources/300-Social/34-法律/raw/articles/346-*/*` | `346` | | `3 Resources/300-Social/34-法律/raw/articles/347-*/*` | `347` |
| `3 Resources/300-Social/34-法律/raw/articles/348-*/*` | `348` | | `3 Resources/300-Social/34-法律/raw/articles/349-*/*` | `349` |
| `3 Resources/300-Social/303-社会科学方法/*` | `303` | | `3 Resources/300-Social/304-社会问题/*` | `304` |
| `3 Resources/300-Social/305-性别研究/*` | `305` | | `3 Resources/300-Social/308-社会地理学/*` | `308` |
| `3 Resources/300-Social/35-公共管理军事/*` | `35` | | `3 Resources/300-Social/35-公共管理军事/raw/articles/351-*/*` | `351` |
| `3 Resources/300-Social/35-公共管理军事/raw/articles/353-*/*` | `353` | | `3 Resources/300-Social/35-公共管理军事/raw/articles/355-*/*` | `355` |
| `3 Resources/300-Social/35-公共管理军事/raw/articles/359-*/*` | `359` | | `3 Resources/300-Social/36-社会保障/*` | `36` |
| `3 Resources/300-Social/36-社会保障/raw/articles/364-*/*` | `364` | | `3 Resources/300-Social/36-社会保障/raw/articles/368-*/*` | `368` |
| `3 Resources/300-Social/39-文化人类学/*` | `39` | | `3 Resources/300-Social/39-文化人类学/raw/articles/391-*/*` | `391` |
| `3 Resources/300-Social/39-文化人类学/raw/articles/39[3-8]-*/*` | `39x` | | | |
| `3 Resources/200-Religion/*` | `2` | | `3 Resources/200-Religion/21-史前与原始宗教/*` | `21` |
| `3 Resources/200-Religion/21-史前与原始宗教/raw/articles/21[2-3]-*/*` | `21x` | | `3 Resources/200-Religion/22-远东发祥的宗教/*` | `22` |
| `3 Resources/200-Religion/22-远东发祥的宗教/raw/articles/221-*/*` | `221` | | `3 Resources/200-Religion/22-远东发祥的宗教/raw/articles/221.3-*/*` | `221.3` |
| `3 Resources/200-Religion/22-远东发祥的宗教/raw/articles/223-*/*` | `223` | | `3 Resources/200-Religion/22-远东发祥的宗教/raw/articles/225-*/*` | `225` |
| `3 Resources/200-Religion/23-印度次大陆发祥的宗教/*` | `23` | | `3 Resources/200-Religion/23-印度次大陆发祥的宗教/raw/articles/23[3-5]-*/*` | `23x` |
| `3 Resources/200-Religion/24-佛教/*` | `24` | | `3 Resources/200-Religion/24-佛教/raw/articles/24[1-4]-*/*` | `24x` |
| `3 Resources/200-Religion/25-古代宗教与异教/*` | `25` | | `3 Resources/200-Religion/25-古代宗教与异教/raw/articles/25[1-8]-*/*` | `25x` |
| `3 Resources/200-Religion/26-犹太教/*` | `26` | | `3 Resources/200-Religion/26-犹太教/raw/articles/26[1-7]-*/*` | `26x` |
| `3 Resources/200-Religion/27-基督教/*` | `27` | | `3 Resources/200-Religion/27-基督教/raw/articles/27[1-9]-*/*` | `27x` |
| `3 Resources/200-Religion/28-伊斯兰教/*` | `28` | | `3 Resources/200-Religion/28-伊斯兰教/raw/articles/28[1-6]-*/*` | `28x` |
| `3 Resources/200-Religion/29-现代精神运动/*` | `29` | | | |
| `3 Resources/100-Philosophy/*` | `1` | | `3 Resources/100-Philosophy/11-*/*` | `11` |
| `3 Resources/100-Philosophy/16-*/*` | `16` | | `3 Resources/100-Philosophy/17-*/*` | `17` |
| `3 Resources/100-Philosophy/101-*/*` | `101` | | `3 Resources/100-Philosophy/13-*/*` | `13` |
| `3 Resources/100-Philosophy/14-哲学体系与观点/raw/articles/141-165-*/*` | `141/165` | | `3 Resources/100-Philosophy/14-*/*` | `14` |
| `3 Resources/100-Philosophy/raw/articles/181-*/*` | `181` | | `3 Resources/100-Philosophy/raw/articles/181.11-*/*` | `181.11` |
| `3 Resources/100-Philosophy/159.9-*/*` | `159.9` | | | |
| `3 Resources/700-Arts/*` | `7` | | `3 Resources/700-Arts/71-*/*` | `71` |
| `3 Resources/700-Arts/72-*/*` | `72` | | `3 Resources/700-Arts/73-*/*` | `73` |
| `3 Resources/700-Arts/74-*/*` | `74` | | `3 Resources/700-Arts/75-*/*` | `75` |
| `3 Resources/700-Arts/76-*/*` | `76` | | `3 Resources/700-Arts/77-*/*` | `77` |
| `3 Resources/700-Arts/76-图形艺术/76-004.8-*/*` | `76:004.8` | | | |
| `3 Resources/700-Arts/78-*/*` | `78` | | `3 Resources/700-Arts/79-*/*` | `79` |
| `3 Resources/700-Arts/74-图形装饰艺术/745.5-*/*` | `745.5` | | `3 Resources/700-Arts/74-图形装饰艺术/747-*/*` | `747` |
| `3 Resources/700-Arts/79-休闲娱乐游戏体育/791-*/*` | `791` | | `3 Resources/700-Arts/793.932-*/*` | `793.9` |
| `3 Resources/700-Arts/79-休闲娱乐游戏体育/794.8-*/*` | `794.8` | | `3 Resources/700-Arts/79-休闲娱乐游戏体育/794-004-*/*` | `794:004` |
| `3 Resources/700-Arts/79-休闲娱乐游戏体育/794-*/*` | `794` | | `3 Resources/700-Arts/79-休闲娱乐游戏体育/794.8-*/*` | `794.8` |
| `3 Resources/800-Literature/80-*/*` | `80` | | `3 Resources/800-Literature/821-*/*` | `821` |
| `3 Resources/400-Language/81-语言学与语言/*` | `81` | | `3 Resources/400-Language/811-语言/*` | `811` |
| `3 Resources/800-Literature/*` | `82` | | `3 Resources/800-Literature/82-文学/*` | `82` |
| `3 Resources/800-Literature/82-文学/82-*/*` | `82` | | `3 Resources/800-Literature/raw/articles/821-*/*` | `821` |
| `3 Resources/400-Language/*` | `81` | | | |

**L3 — 关键词匹配：** 扫描标题和内容，对照映射表中的 `title_map`（首选）、`keyword_map`（52 条，置信度 ≥60%）和 `compound_rules`（10 条正则规则）。

**L4 — AI 兜底：** 前三层无匹配时按内容特征推断：

| 内容特征 | UDC |
|----------|-----|
| transformer / attention / neural network | `004.8:519.6` |
| RAG / 向量检索 / Chroma / FAISS | `001.8:004.8` |
| 提示词 / prompt / system prompt | `004.8:159.9` |
| 学习率 / 损失函数 / 训练 | `004.8:681.3` |
| PARA / 项目管理 / GTD | `001.8:005` |
| 分类 / 索引 / ontology / taxonomy | `025.4` |
| 人物 / 传记 / 生平（非模板） | `929` |
| 无特征匹配 | `001.8` |

建议值写入后标记 `udc:suggested` 待人工审核。

### 表格格式

所有 Markdown 表格**必须使用对齐的分隔行**。表格内 `[[wikilink]]` 中的 `|` 须转义为 `\|`。

### 跨语言链接

**A — 同语言存在对应页面 → 指向同语言**

| 场景 | 正确 | 错误 |
|------|------|------|
| EN 页引用另一 EN 页 | `[[llm-fundamentals]]` | `[[LLM 基础]]` |
| TW 页引用另一 TW 页 | `[[LLM 基础]]` | `[[LLM 基礎]]` |

> EN 文件名使用 kebab-case（实际文件名），非显示名。

**B — 同语言不存在 → fallback 到 CN，使用完整路径**

`[[3 Resources/000-Knowledge/xxx/xxx|显示名]]`

**C — 共享内容统一指向 CN**

索引页（前缀 `en/` 或 `zh-tw/`）、模板、UDC/DDC 分类法、raw/ 目录 → CN 路径。

**索引页例外：**
- EN → `[[en/_meta/index/links/Index/_index-en|display]]`
- TW → `[[zh-tw/_meta/index/links/Index/_index|顯示]]`
- CN → `[[_meta/index/links/Index/_index-zh-cn|索引]]`

### 新建笔记后必须更新索引

三语言同步更新：
- `_meta/index/links/Index/_index-zh-cn.md`
- `en/_meta/index/links/Index/_index-en.md`
- `zh-tw/_meta/index/links/Index/_index.md`

---

## Inbox ⇄ Projects 交汇

两个流水线在 **3-outcome** 节点交汇：

| 方向 | 流程 |
|------|------|
| 想法 → 项目 | 验入法/隔离区/ → 1-proposal/ → 2-execution/ |
| 项目 → 成果 | 3-completion/ → Outcome 记录到 0 Inbox/3-outcome/impacts/ |

项目进入 3-completion/ 后，必须产出 Outcome 摘要（实际影响、关键成果、可复用方法），
写入 `0 Inbox/3-outcome/impacts/`。
这是项目生命周期在知识库中的闭环标志。

---

## 镜像同步

en/、zh-tw/ 镜像按新流水线结构同步索引页：

| 语言 | Inbox 路径 | Projects 路径 |
|------|-----------|--------------|
| English | en/0-inbox/ | en/1-projects/ |
| 繁體中文 | zh-tw/0-收件匣/ | zh-tw/1-專案/ |

镜像仅含索引/Dashboard 页，不镜像具体 Inbox 文件（临时内容不需要镜像）。
三语言索引页之间建立 [[wikilink]] 互链。

---

## AI 引擎命令

所有引擎**幂等**（已处理的文件不重复操作）。

| 命令 | 功能 |
|------|------|
| `KOS-Triage [--file <path>] [--status]` | 分拣 Inbox 文件 → 路由到目标目录 |
| `KOS-Wiki-Compile [--topic <name>] [--file <path>] [--status]` | 编译 raw/ → wiki/ 页面 |
| `KOS-Research --topic "..." [--depth quick\|standard\|deep]` | 自主研究（搜索→抓取→综合） |
| `KOS-Link [--path <dir>] [--file <path>] [--fix] [--status]` | 校验 frontmatter / UDC / 断链 / 跨语言一致性 |
| `KOS-Query [quick\|standard\|deep] <问题>` | 三级知识库查询（Quick/Standard/Deep） |
| `KOS-Project` | 创建/管理项目 |
| `KOS-Audit [--list\|--findings\|--overdue\|--type schema]` | 审计管理与执行 |
| `KOS-Init [--status] [--fix]` | 初始化/健康检查 vault |
| `KOS-Archive` | 归档已完成项目 |
| `Daily Open` | 创建今日笔记 |
| `Day-Review` / `Week-Review` / `Month-Review` / `Quarter-Review` / `Year-Review` | 周期回顾 |

### 斜杠命令（`/` 菜单）

`.claude/commands/` 下为斜杠命令薄包装，触发对应技能。高频入口：

| 斜杠命令 | 对应技能 | | 斜杠命令 | 对应技能 |
|---------|---------|---|---------|---------|
| `/kos` | kos（统一分发） | | `/kos-query` | kos-query |
| `/kos-triage` | kos-triage | | `/kos-research` | kos-research |
| `/kos-compile` | kos-compile | | `/kos-project` | kos-project |
| `/kos-link` | kos-link | | `/kos-audit` | kos-audit |
| `/kos-daily` | kos-daily | | `/kos-init` | kos-init |
| `/kos-month` | kos-daily | | `/kos-quarter` | kos-daily |
| `/kos-year` | kos-daily | | | |

> 底层/辅助技能（kos-think、canvas、obsidian-*、kos-life、defuddle、json-canvas）不建斜杠命令，靠自然语言或 `/kos` 分发器自动触发。

### KOS-Triage 规则

**扫描：** 读 `0 Inbox/1-input/` 下所有 `.md` 文件，忽略 `triage.status: processed` 文件。非 `.md` 文件仅记录日志。

**四维分析：**

| 维度 | 判定规则 |
|------|---------|
| **A — 时效性** | 日期 + 动作动词（提交/发送/完成/买/约/提醒）→ `ephemeral`；项目+任务无截止 → `operational`；技术文章/教程 → `reference`；原则/方法论 → `evergreen` |
| **B — 主题** | 匹配项目名（扫描 `1 Projects/` 所有 README）→ 领域关键词 → 否则 `needs-mapping` |
| **C — 类型** | 动作动词 + 可交付物 → `task`；知识内容无动作 → `reference`；<50字碎片 → `fleeting`；人名+背景 → `people`；含 `origin: webclipper` → `clipping` |
| **D — 复杂度** | <500字单主题 → `low`；500–2000字多主题 → `medium`；>2000字或多独立段 → `high` |
| **E — UDC** | 按四层管道建议，无匹配标记 `needs-mapping` |

**路由：** 复制文件到 `0 Inbox/2-output/`（添加 frontmatter + UDC 建议）→ 原始文件移入 `0 Inbox/_processed/`；闭环记录移入 `0 Inbox/3-outcome/` → 日志写入 `_meta/system/logs/operations/triage.md`。

### KOS-Wiki-Compile 规则

**扫描：** `3 Resources/` 下 `.md` 文件，忽略 `compiled: true`。文件 <50字标记 `too-short` 跳过；>10000字标记 `long-doc` 建议拆分。

**Delta 追踪（v1.1+）：** 编译前先检查 `_meta/.manifest.json`，避免重复处理未变更的来源文件。

```bash
# 检查 manifest 是否存在
[ -f _meta/.manifest.json ] && echo "exists" || echo "no manifest"
```

**Manifest 格式（自动创建）：** `_meta/.manifest.json`
```json
{
  "version": 1,
  "updated": "YYYY-MM-DD",
  "sources": {
    "3 Resources/004-LLM-Wiki/raw/llm-fundamentals.md": {
      "hash": "abc123",
      "compiled_at": "2026-06-07",
      "pages_created": ["3 Resources/000-Knowledge/004-LLM-Wiki/wiki/concepts/LLM 基础.md"],
      "pages_updated": ["3 Resources/000-Knowledge/004-LLM-Wiki/wiki/_index.md"]
    }
  }
}
```

**编译前检查（接入扫描阶段）：**
1. 计算源文件哈希：`sha256sum <file> | cut -d' ' -f1`（Linux/macOS）或 `certutil -hashfile <file> SHA256`（Windows）
2. 检查路径是否在 manifest 中且哈希匹配
3. 哈希匹配 → 跳过，报告："已编译且无变更。使用 --force 强制重新编译。"
4. 文件缺失或哈希不同 → 继续编译

**编译后记录：**
1. 记录 `{hash, compiled_at, pages_created, pages_updated}` 到 manifest
2. 写回 manifest 文件

**跳过 delta：** 用户指定 `--force` 或 `force compile` 时跳过 delta 检查。

**六步管道：**
1. **来源分析** → 确定主题领域
2. **概念提取** → 决定页面类型：Concept（理论/方法）| Entity（工具/人物/产品）| Source（论文/文章/书）
3. **页面创建/更新** — 不存在 → 按模板新建；存在且 `reviewed: false` → 合并更新；`reviewed: true` → 跳过
4. **交叉引用** — 扫描 `[[链接]]`，按上下文推导关联原因（直接引用/主体定义/比较引用/依赖关系）
5. **索引更新** — 三语言 `_index.md`
6. **日志记录** — `_meta/system/logs/operations/compile.md`

**冲突处理：** 一致跳过 | 补充追加 | 矛盾双方保留 + 标记 `conflict: true` | 完全覆盖时旧版移入 `_archived/`

### KOS-Link 检查项

| 级别 | 检查内容 | 排除目录 |
|------|---------|---------|
| **L1** | Frontmatter 完整性（created/updated/udc/tags + 日期格式） | `_meta/system/logs/`、`0 Inbox/` |
| **L2** | UDC 类号格式 + 是否在映射表中 | `_meta/system/logs/`、`0 Inbox/`、`Periodic/`、`_meta/` |
| **L3** | `[[wiki链接]]` 和 `[md](link.md)` 目标存在性；循环引用 >10 跳报 info | 忽略外部 URL |
| **L4** | 三语言镜像齐全 + udc/tags 一致 | `_meta/system/logs/`、`0 Inbox/`、`Periodic/` |
| **L5** | 项目 `status: completed` 仍留在 `1 Projects/`；`[x]` 任务但 status: active | — |
| **L6** | 空正文检测：文件仅含 frontmatter 无正文（可选，`--level 6`/`--all` 启用） | `_meta/system/logs/`、`0 Inbox/`、`.git/`、`.obsidian/` |
| **L7** | 陈旧声明检测：updated >180 天且无 `stale: true`（可选，`--level 7`/`--all` 启用） | — |

**自动修复（`--fix`，须用户确认）：** created/updated 缺失 → 用当前日期；UDC 格式错误 → 标准化（不改类号）；跨语言文件缺失 → 复制骨架。不可自动修复：udc/tags 缺失、断链、项目状态。

---

## 周期自动化

### 每日 / 每周 / 每月 / 每季 / 每年

所有周期操作**幂等**（已有则跳过）。创建时使用 `_meta/system/templates/` 对应模板。

| 操作                          | 输出位置                                   | 关键输入                             |
| --------------------------- | -------------------------------------- | -------------------------------- |
| `Daily Open` / `Day-Review` | `Periodic/YYYY/MM/YYYY-MM-DD.md`       | 活跃工单未完成任务                        |
| `Week-Review`               | `Periodic/YYYY/YYYY-WW.md`       | triage/compile 统计 + 本周日记数 + 项目状态 |
| `Month-Review`              | `Periodic/YYYY/YYYY-MM.md`       | 聚合本月周报 + 子库增长统计                  |
| `Quarter-Review`            | `Periodic/YYYY/YYYY-QQ.md`       | 聚合本月报 + 项目完成统计                   |
| `Year-Review`               | `Periodic/YYYY/YYYY.md`          | 聚合全季度 + ADR 变更历史                 |

---

## People CRM

人物页面位于 `3 Resources/People/wiki/entities/`，使用英文文件名。

| Tier | 定义 | 模板 | UDC | 标签 |
|------|------|------|-----|------|
| 1 — 核心 | 频繁互动者 | `person-核心人物.md` | `929:316.77` | `#people/tier-1` |
| 2 — 重要 | 定期互动者 | `person-重要联系人.md` | `929:65.01` | `#people/tier-2` |
| 3 — 背景 | 知识库引用 | `person-背景人物.md` | `929` | `#people/tier-3` |

- 首次出现的人名自动标注为 Tier 3 stub
- 互动记录格式：`{date, type: meeting|chat|email|note, summary, tags}`
- **禁止记录：** 电话号码、住址、银行账户、健康信息。所有人物页 frontmatter 标记 `privacy: restricted`。

---

## 会话协议

**开始：** 加载 AGENTS.md → 读取 `_meta/hot.md` 恢复最近上下文（Codex/OpenCode 平台；Claude Code 通过 hooks 自动完成）→ 扫描 `1 Projects/` 活跃工单 → 检查 Inbox 流水线状态（1-input/ → 2-output/ → 3-outcome/） → 检查编译状态 → **检查 `_meta/.locks/` 残留锁（如有则 `python3 _meta/system/scripts/wiki-lock.py clear-stale --max-age 3600` 清理并记录）** → 检查当日笔记 → 输出状态摘要。

**运行中：** KOS-Triage / KOS-Compile / 周期回顾完成后，更新 `_meta/hot.md` 记录最新上下文。仅记录对 vault 知识状态有实质改变的操作。

**结束：** 更新 `_meta/hot.md`（本会话摘要、关键进展、活跃线程、当前状态）→ **检查 `_meta/.locks/` 确认所有锁已释放（如有残留则 `python3 _meta/system/scripts/wiki-lock.py clear-stale --max-age 0` 强制清理并记录）** → 操作日志写入 `_meta/system/logs/operations/maintenance.md` → 有未完成 Triage/Compile 时提醒用户。

---

## 全局约束

- **绝不修改** `reviewed: true` 的页面
- **绝不删除**文件（Triage 移入 `_processed/`，Compile 是复制）
- **绝不覆盖**人工编辑内容
- **不重复** `compiled: true` 或 `triage.status: processed` 文件
- **不扫描** `.git/`、`.obsidian/`、`node_modules/`
- **不加 `--fix` 不修改任何文件**

---

## 关键参考文件

- `CLAUDE.md` — 快速上手参考
- `_meta/index/links/Index/_index-zh-cn.md` — 总索引
- `_meta/system/templates/` — 全部模板
- `_meta/index/queries/` — Dataview 查询库（8 个预定义查询）
- `_meta/architecture/adr/` — 架构决策记录
- `_meta/ai/memory/全局状态.md` — 跨会话状态
- `_meta/ai/agents/life/` — Life+AI 三支柱角色定义
- `_meta/workspace-index.yaml` — 工作区注册表（9 个工作区定义）
- `_meta/schema/taxonomy.yaml` — Type & Topic 枚举（含 methodology_equivalents）
- `_meta/schema/frontmatter.yaml` — Frontmatter 字段约束（per-workspace）
- `_meta/schema/subsystems.yaml` — 工作区子系统契约（状态机、流转）
- `_meta/schema/workspace-tools.yaml` — Workspace→Skill 绑定（路由矩阵）
- `_meta/schema/event-capture.yaml` — Agent 事件采集规格（操作日志格式）
- `0 Inbox/WORKSPACE.md` — Inbox 工作区规范
- `1 Projects/WORKSPACE.md` — Projects 工作区规范
- `2 Areas/WORKSPACE.md` — Areas 工作区规范
- `3 Resources/WORKSPACE.md` — Resources 工作区规范
- `4 Archives/WORKSPACE.md` — Archives 工作区规范
- `Periodic/WORKSPACE.md` — Periodic 工作区规范
- `_meta/WORKSPACE.md` — 系统元数据工作区规范
- `en/WORKSPACE.md` — 英文镜像工作区规范
- `zh-tw/WORKSPACE.md` — 繁体镜像工作区规范


