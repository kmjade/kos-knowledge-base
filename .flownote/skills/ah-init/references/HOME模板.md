---
type: home
created: YYYY-MM-DD
updated: YYYY-MM-DD
version: 4.2
cssclasses:
  - flownote-home
---

# FLOWnote 知识库主页

> [!info]+ 插件提示
> 这个主页依赖 **Dataview** 插件来自动统计每日笔记、项目和最近活动；如果你想显示顶部横幅，也可以安装 **Banners** 插件。首次创建主页时会加入这段提示，后续更新不会重新插入；如果你已经配置完成，可以直接删除。

<!-- FLOWNOTE_HOME_AUTOMATED_START -->

## 今日入口

```dataviewjs
const cfg = {
  daily: "Periodic/2026/06",
  highlights: "0 Index",
  permanent: "0 Index",
  literature: "0 Index",
  topics: "0 Index",
  domains: "2 Areas",
  projects: "1 Projects",
  archives: "4 Archives",
  memory: "_meta/ai-memory"
};

const today = dv.date("today");
const todayPath = `${cfg.daily}/${today.toFormat("yyyy-MM-dd")}`;
const todayPage = dv.page(todayPath);
const tasks = todayPage?.file?.tasks ?? [];
const openTasks = tasks.filter(t => !t.completed);
const doneTasks = tasks.filter(t => t.completed);
const capturesToday = todayPage ? todayPage.file.lists.length : 0;

dv.header(3, `${today.toFormat("yyyy-MM-dd")} · 第 ${today.weekNumber} 周`);
dv.paragraph(`[[${todayPath}|打开今日日记]] · 待办 ${openTasks.length} · 已完成 ${doneTasks.length} · 今日记录 ${capturesToday}`);

if (openTasks.length) {
  dv.taskList(openTasks.slice(0, 8), false);
} else {
  dv.paragraph("今天还没有未完成待办。");
}
```

## 目录入口

```dataviewjs
const folders = [
  ["捕获", "每日笔记", "Periodic/2026/06"],
  ["捕获", "划线笔记", "0 Index"],
  ["捕获", "周记", "Periodic/2026/06"],
  ["捕获", "月记", "Periodic/2026/06"],
  ["培养", "永久笔记", "0 Index"],
  ["培养", "文献笔记", "0 Index"],
  ["培养", "主题笔记", "0 Index"],
  ["连接", "领域页", "2 Areas"],
  ["创造", "项目", "1 Projects"],
  ["创造", "归档", "4 Archives"]
];

function pageCount(folder) {
  return dv.pages(`"${folder}"`).where(p => p.file.ext === "md").length;
}

dv.table(
  ["层级", "目录", "笔记数", "路径"],
  folders.map(([layer, name, folder]) => [
    layer,
    name,
    pageCount(folder),
    `\`${folder}\``
  ])
);
```

## 进行中的项目

```dataviewjs
const projectRoot = "1 Projects";
const overviewNames = new Set(["📍 项目总览", "Project Overview"]);

function projectFolderName(page) {
  const rel = page.file.path
    .replace(`${projectRoot}/`, "")
    .replace(/\/(📍 项目总览|Project Overview)\.md$/, "");
  return rel.split("/").filter(Boolean).join(" / ");
}

const projects = dv.pages(`"${projectRoot}"`)
  .where(p => p.file.ext === "md")
  .where(p => overviewNames.has(p.file.name))
  .where(p => p.file.path !== `${projectRoot}/📍 项目总览.md`)
  .where(p => p.file.path !== `${projectRoot}/Project Overview.md`)
  .where(p => !p.file.path.includes("/归档/"))
  .where(p => !p.file.path.includes("/Archives/"))
  .sort(p => p.file.mtime, "desc");

if (!projects.length) {
  dv.paragraph("暂无进行中的项目。");
} else {
  dv.table(
    ["项目", "状态", "优先级", "更新"],
    projects.map(p => [
      dv.fileLink(p.file.path, false, projectFolderName(p)),
      p.status ?? p.状态 ?? "进行中",
      p.priority ?? p.优先级 ?? "—",
      p.file.mtime.toFormat("MM-dd")
    ])
  );
}
```

## 最近活动

```dataviewjs
const hiddenPrefixes = [".", "_meta/ai-memory", "_meta/.ai-memory", "Clippings/", "4 Archives/"];
const pages = dv.pages()
  .where(p => p.file.ext === "md")
  .where(p => !hiddenPrefixes.some(prefix => p.file.path.startsWith(prefix)))
  .where(p => p.file.path !== dv.current().file.path)
  .sort(p => p.file.mtime, "desc")
  .slice(0, 12);

dv.list(pages.map(p => `${p.file.link} · ${p.file.mtime.toFormat("MM-dd HH:mm")}`));
```

## 知识地图

```dataviewjs
const cfg = {
  daily: "Periodic/2026/06",
  highlights: "0 Index",
  permanent: "0 Index",
  literature: "0 Index",
  topics: "0 Index",
  domains: "2 Areas",
  projects: "1 Projects"
};

const overviewNames = new Set(["📍 项目总览", "Project Overview"]);
const count = (folder) => dv.pages(`"${folder}"`).where(p => p.file.ext === "md").length;
const projects = dv.pages(`"${cfg.projects}"`)
  .where(p => p.file.ext === "md" && overviewNames.has(p.file.name))
  .where(p => p.file.path !== `${cfg.projects}/📍 项目总览.md`)
  .where(p => p.file.path !== `${cfg.projects}/Project Overview.md`)
  .where(p => !p.file.path.includes("/归档/"))
  .length;

dv.table(
  ["每日笔记", "划线笔记", "永久笔记", "文献笔记", "主题", "领域", "项目"],
  [[
    count(cfg.daily),
    count(cfg.highlights),
    count(cfg.permanent),
    count(cfg.literature),
    count(cfg.topics),
    count(cfg.domains),
    projects
  ]]
);
```

## AI 工作流

| 场景 | 命令 | 场景 | 命令 |
|---|---|---|---|
| 创建今日日记 | `/ah-note` | 快速捕获到日记 | `/ah-capture` |
| 生成永久笔记 | `/ah-card` | 整理阅读笔记 | `/ah-read` |
| 创建项目 | `/ah-project` | 每日回顾 | `/ah-review` |
| 周回顾 | `/ah-week` | 月回顾 | `/ah-month` |
| 更新主页和索引 | `/ah-init` | 不清楚用哪个 | `/ah` |

<!-- FLOWNOTE_HOME_AUTOMATED_END -->
