var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/locale.js
var require_locale = __commonJS({
  "src/locale.js"(exports2, module2) {
    var LOCALES = {
      "zh-cn": {
        // General
        "app.name": "KOS Cockpit",
        "app.loading": "\u6B63\u5728\u52A0\u8F7D KOS Cockpit...",
        "app.error": "\u52A0\u8F7D\u4EEA\u8868\u76D8\u65F6\u51FA\u9519\u3002",
        // Header
        "header.dateFormat": "YYYY-MM-DD",
        "header.noteStatus": "\u6BCF\u65E5\u7B14\u8BB0 [{status}]",
        "header.noteCreated": "\u5DF2\u521B\u5EFA",
        "header.noteNotCreated": "\u672A\u521B\u5EFA",
        "header.todayFocus": "\u4ECA\u65E5\u805A\u7126: {focus}",
        "header.focusNotSet": "(\u672A\u8BBE\u5B9A)",
        // Day names (short, single character)
        "day.sun": "\u65E5",
        "day.mon": "\u4E00",
        "day.tue": "\u4E8C",
        "day.wed": "\u4E09",
        "day.thu": "\u56DB",
        "day.fri": "\u4E94",
        "day.sat": "\u516D",
        // Quick actions
        "action.planToday": "\u89C4\u5212\u4ECA\u5929",
        "action.capture": "\u5FEB\u901F\u6355\u83B7",
        "action.dayReview": "\u6BCF\u65E5\u56DE\u987E",
        "action.newProject": "\u65B0\u5EFA\u9879\u76EE",
        "action.triage": "Triage",
        "action.settings": "\u8BBE\u7F6E",
        // Today Tasks
        "task.title": "\u4ECA\u65E5\u4EFB\u52A1",
        "task.progress": "{done}/{total} ({rate}%)",
        "task.none": "\u6682\u65E0\u4EFB\u52A1\u3002",
        "task.dailyMissing": "\u4ECA\u65E5\u7B14\u8BB0\u672A\u521B\u5EFA\u3002\u70B9\u51FB [\u89C4\u5212\u4ECA\u5929] \u521B\u5EFA\u3002",
        // Projects
        "project.title": "\u6D3B\u8DC3\u9879\u76EE",
        "project.empty": "\u6682\u65E0\u6D3B\u8DC3\u9879\u76EE\u3002",
        // Vault stats
        "stats.title": "\u77E5\u8BC6\u5E93\u7EDF\u8BA1",
        "stats.totalNotes": "\u603B\u7B14\u8BB0",
        "stats.activeProjects": "\u6D3B\u8DC3\u9879\u76EE",
        "stats.todayNew": "\u4ECA\u65E5\u65B0\u589E",
        "stats.pendingTriage": "\u5F85\u5206\u62E3",
        // Recent activity
        "recent.title": "\u6700\u8FD1\u6D3B\u52A8",
        "recent.empty": "\u6682\u65E0\u6D3B\u52A8\u3002",
        // Navigation
        "nav.title": "\u4E09\u652F\u67F1 \xB7 \u5BFC\u822A",
        // Inbox
        "inbox.title": "Inbox ({count})",
        "inbox.more": "+{count} more...",
        // Engine state
        "engine.title": "\u5F15\u64CE\u72B6\u6001",
        "engine.empty": "\u6682\u65E0\u5F15\u64CE\u72B6\u6001\u6570\u636E\u3002",
        // Weekly chart
        "weekly.title": "\u672C\u5468\u8BB0\u5F55\u5206\u5E03",
        "weekly.empty": "\u672C\u5468\u6682\u65E0\u65E5\u8BB0\u8BB0\u5F55\u3002",
        "weekly.barTooltip": "{date}: {count} \u6761",
        // AI Chat
        "ai.title": "AI \u5BF9\u8BDD",
        "ai.placeholder": "\u5728\u6B64\u5904\u5D4C\u5165 AI \u5BF9\u8BDD\u89C6\u56FE\u3002\u76EE\u524D\u4F7F\u7528\u547D\u4EE4\u9762\u677F\u6216\u4FA7\u680F\u8FDB\u884C AI \u4EA4\u4E92\u3002",
        "ai.inputPlaceholder": "\u8F93\u5165\u547D\u4EE4\u6216\u95EE\u9898\u2026\u2026",
        "ai.send": "\u53D1\u9001",
        // Settings
        "settings.general": "General",
        "settings.language": "\u754C\u9762\u8BED\u8A00",
        "settings.languageDesc": "\u9009\u62E9\u4EEA\u8868\u76D8\u754C\u9762\u7684\u663E\u793A\u8BED\u8A00\u3002",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        "settings.autoOpen": "\u542F\u52A8\u65F6\u81EA\u52A8\u6253\u5F00",
        "settings.autoOpenDesc": "Obsidian \u542F\u52A8\u65F6\u81EA\u52A8\u6253\u5F00 KOS Cockpit\u3002",
        "settings.dashboard": "Dashboard Sections",
        "settings.dashboardDesc": "\u63A7\u5236\u4EEA\u8868\u76D8\u4E0A\u5404\u533A\u5757\u7684\u663E\u793A\u3002",
        "settings.dataLimits": "Data Limits",
        "settings.maxRecent": "\u6700\u5927\u6700\u8FD1\u6D3B\u52A8\u6570",
        "settings.maxRecentDesc": "\u663E\u793A\u6700\u8FD1\u4FEE\u6539\u6587\u4EF6\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxTasks": "\u6700\u5927\u4EFB\u52A1\u6570",
        "settings.maxTasksDesc": "\u663E\u793A\u4ECA\u65E5\u4EFB\u52A1\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxInbox": "\u6700\u5927 Inbox \u6570",
        "settings.maxInboxDesc": "\u663E\u793A Inbox \u6587\u4EF6\u540D\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.about": "About",
        "settings.version": "\u7248\u672C",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 KOS_LLM-Wiki \u77E5\u8BC6\u7BA1\u7406\u4EEA\u8868\u76D8\u3002KOS \u751F\u6001\u7684\u4E00\u90E8\u5206\u3002"
      },
      "en": {
        "app.name": "KOS Cockpit",
        "app.loading": "Loading KOS Cockpit...",
        "app.error": "Something went wrong loading the dashboard.",
        "header.dateFormat": "YYYY-MM-DD",
        "header.noteStatus": "Daily Note [{status}]",
        "header.noteCreated": "Created",
        "header.noteNotCreated": "Not Created",
        "header.todayFocus": "Today's Focus: {focus}",
        "header.focusNotSet": "(Not Set)",
        "day.sun": "S",
        "day.mon": "M",
        "day.tue": "T",
        "day.wed": "W",
        "day.thu": "T",
        "day.fri": "F",
        "day.sat": "S",
        "action.planToday": "Plan Today",
        "action.capture": "Quick Capture",
        "action.dayReview": "Day Review",
        "action.newProject": "New Project",
        "action.triage": "Triage",
        "action.settings": "Settings",
        "task.title": "Today's Tasks",
        "task.progress": "{done}/{total} ({rate}%)",
        "task.none": "No tasks yet.",
        "task.dailyMissing": "Daily note not created. Click [Plan Today] to create one.",
        "project.title": "Active Projects",
        "project.empty": "No active projects.",
        "stats.title": "Vault Statistics",
        "stats.totalNotes": "Total Notes",
        "stats.activeProjects": "Active Projects",
        "stats.todayNew": "Today New",
        "stats.pendingTriage": "Inbox",
        "recent.title": "Recent Activity",
        "recent.empty": "No activity yet.",
        "nav.title": "Three Pillars \xB7 Nav",
        "inbox.title": "Inbox ({count})",
        "inbox.more": "+{count} more...",
        "engine.title": "Engine State",
        "engine.empty": "No engine state data yet.",
        "weekly.title": "Weekly Record Distribution",
        "weekly.empty": "No daily records this week.",
        "weekly.barTooltip": "{date}: {count} items",
        "ai.title": "AI Chat",
        "ai.placeholder": "AI chat view can be embedded here. Currently use the command palette or sidebar for AI interaction.",
        "ai.inputPlaceholder": "Enter command or question...",
        "ai.send": "Send",
        "settings.general": "General",
        "settings.language": "Interface Language",
        "settings.languageDesc": "Choose the display language for the dashboard.",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        "settings.autoOpen": "Auto-open on startup",
        "settings.autoOpenDesc": "Automatically open the KOS Cockpit when Obsidian starts.",
        "settings.dashboard": "Dashboard Sections",
        "settings.dashboardDesc": "Toggle which sections appear on the cockpit dashboard.",
        "settings.dataLimits": "Data Limits",
        "settings.maxRecent": "Max recent items",
        "settings.maxRecentDesc": "Number of recently modified files to show (max 20).",
        "settings.maxTasks": "Max task items",
        "settings.maxTasksDesc": "Number of daily-note tasks to show (max 20).",
        "settings.maxInbox": "Max inbox items",
        "settings.maxInboxDesc": "Number of inbox file names to show (max 20).",
        "settings.about": "About",
        "settings.version": "Version",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem."
      },
      "zh-tw": {
        "app.name": "KOS Cockpit",
        "app.loading": "\u6B63\u5728\u8F09\u5165 KOS Cockpit...",
        "app.error": "\u8F09\u5165\u5100\u8868\u677F\u6642\u767C\u751F\u932F\u8AA4\u3002",
        "header.dateFormat": "YYYY-MM-DD",
        "header.noteStatus": "\u6BCF\u65E5\u7B46\u8A18 [{status}]",
        "header.noteCreated": "\u5DF2\u5EFA\u7ACB",
        "header.noteNotCreated": "\u672A\u5EFA\u7ACB",
        "header.todayFocus": "\u4ECA\u65E5\u7126\u9EDE: {focus}",
        "header.focusNotSet": "(\u672A\u8A2D\u5B9A)",
        "day.sun": "\u65E5",
        "day.mon": "\u4E00",
        "day.tue": "\u4E8C",
        "day.wed": "\u4E09",
        "day.thu": "\u56DB",
        "day.fri": "\u4E94",
        "day.sat": "\u516D",
        "action.planToday": "\u898F\u5283\u4ECA\u5929",
        "action.capture": "\u5FEB\u901F\u6355\u6349",
        "action.dayReview": "\u6BCF\u65E5\u56DE\u9867",
        "action.newProject": "\u65B0\u5EFA\u5C08\u6848",
        "action.triage": "Triage",
        "action.settings": "\u8A2D\u5B9A",
        "task.title": "\u4ECA\u65E5\u4EFB\u52D9",
        "task.progress": "{done}/{total} ({rate}%)",
        "task.none": "\u66AB\u7121\u4EFB\u52D9\u3002",
        "task.dailyMissing": "\u4ECA\u65E5\u7B46\u8A18\u672A\u5EFA\u7ACB\u3002\u9EDE\u64CA [\u898F\u5283\u4ECA\u5929] \u5EFA\u7ACB\u3002",
        "project.title": "\u6D3B\u8E8D\u5C08\u6848",
        "project.empty": "\u66AB\u7121\u6D3B\u8E8D\u5C08\u6848\u3002",
        "stats.title": "\u77E5\u8B58\u5EAB\u7D71\u8A08",
        "stats.totalNotes": "\u7E3D\u7B46\u8A18",
        "stats.activeProjects": "\u6D3B\u8E8D\u5C08\u6848",
        "stats.todayNew": "\u4ECA\u65E5\u65B0\u589E",
        "stats.pendingTriage": "\u5F85\u5206\u985E",
        "recent.title": "\u6700\u8FD1\u6D3B\u52D5",
        "recent.empty": "\u66AB\u7121\u6D3B\u52D5\u3002",
        "nav.title": "\u4E09\u652F\u67F1 \xB7 \u5C0E\u822A",
        "inbox.title": "Inbox ({count})",
        "inbox.more": "+{count} more...",
        "engine.title": "\u5F15\u64CE\u72C0\u614B",
        "engine.empty": "\u66AB\u7121\u5F15\u64CE\u72C0\u614B\u8CC7\u6599\u3002",
        "weekly.title": "\u672C\u9031\u8A18\u9304\u5206\u4F48",
        "weekly.empty": "\u672C\u9031\u66AB\u7121\u65E5\u8A18\u8A18\u9304\u3002",
        "weekly.barTooltip": "{date}: {count} \u689D",
        "ai.title": "AI \u5C0D\u8A71",
        "ai.placeholder": "\u5728\u6B64\u8655\u5D4C\u5165 AI \u5C0D\u8A71\u6AA2\u8996\u3002\u76EE\u524D\u4F7F\u7528\u547D\u4EE4\u9762\u677F\u6216\u5074\u6B04\u9032\u884C AI \u4E92\u52D5\u3002",
        "ai.inputPlaceholder": "\u8F38\u5165\u547D\u4EE4\u6216\u554F\u984C\u2026\u2026",
        "ai.send": "\u767C\u9001",
        "settings.general": "\u4E00\u822C",
        "settings.language": "\u4ECB\u9762\u8A9E\u8A00",
        "settings.languageDesc": "\u9078\u64C7\u5100\u8868\u677F\u7684\u986F\u793A\u8A9E\u8A00\u3002",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        "settings.autoOpen": "\u555F\u52D5\u6642\u81EA\u52D5\u958B\u555F",
        "settings.autoOpenDesc": "Obsidian \u555F\u52D5\u6642\u81EA\u52D5\u958B\u555F KOS Cockpit\u3002",
        "settings.dashboard": "\u5100\u8868\u677F\u5340\u584A",
        "settings.dashboardDesc": "\u63A7\u5236\u5100\u8868\u677F\u4E0A\u5404\u5340\u584A\u7684\u986F\u793A\u3002",
        "settings.dataLimits": "\u8CC7\u6599\u9650\u5236",
        "settings.maxRecent": "\u6700\u5927\u6700\u8FD1\u6D3B\u52D5\u6578",
        "settings.maxRecentDesc": "\u986F\u793A\u6700\u8FD1\u4FEE\u6539\u6A94\u6848\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxTasks": "\u6700\u5927\u4EFB\u52D9\u6578",
        "settings.maxTasksDesc": "\u986F\u793A\u4ECA\u65E5\u4EFB\u52D9\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxInbox": "\u6700\u5927 Inbox \u6578",
        "settings.maxInboxDesc": "\u986F\u793A Inbox \u6A94\u540D\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.about": "\u95DC\u65BC",
        "settings.version": "\u7248\u672C",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 KOS_LLM-Wiki \u77E5\u8B58\u7BA1\u7406\u5100\u8868\u677F\u3002KOS \u751F\u614B\u7684\u4E00\u90E8\u5206\u3002"
      }
    };
    function t(key, locale, params = {}) {
      const dict = LOCALES[locale] || LOCALES["zh-cn"];
      let text = dict[key];
      if (text === void 0) {
        text = LOCALES["zh-cn"][key];
      }
      if (text === void 0) {
        return key;
      }
      for (const [k, v] of Object.entries(params)) {
        text = String(text).replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      }
      return text;
    }
    module2.exports = { t, LOCALES, LOCALE_KEYS: Object.keys(LOCALES) };
  }
});

// src/utils.js
var require_utils = __commonJS({
  "src/utils.js"(exports2, module2) {
    function parseFrontmatter(content) {
      const text = String(content || "");
      const match = text.match(/^---\n([\s\S]*?)\n---/);
      if (!match) return {};
      const out = {};
      match[1].split(/\r?\n/).forEach((line) => {
        const item = String(line || "").trim();
        if (!item || item.startsWith("#")) return;
        const colon = item.indexOf(":");
        if (colon <= 0) return;
        const key = item.slice(0, colon).trim();
        let value = item.slice(colon + 1).trim();
        if (!key) return;
        if (value.startsWith("[") && value.endsWith("]")) {
          value = value.slice(1, -1).split(",").map((p) => p.trim()).filter(Boolean);
        }
        out[key] = value;
      });
      return out;
    }
    function fmValue(frontmatter, keys, fallback) {
      const fm = frontmatter && typeof frontmatter === "object" ? frontmatter : {};
      for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(fm, key)) {
          const value = fm[key];
          if (Array.isArray(value)) return value.join(", ");
          const text = String(value ?? "").trim();
          if (text) return text;
        }
      }
      return fallback;
    }
    function formatDateStr(date) {
      const d = date || /* @__PURE__ */ new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function dailyNotePath(dateStr) {
      const parts = dateStr.split("-");
      return `Periodic/${parts[0]}/${parts[1]}/${dateStr}.md`;
    }
    function getFileByPath(vault, path) {
      try {
        return vault.getAbstractFileByPath(path);
      } catch {
        return null;
      }
    }
    async function readFileText(vault, file) {
      if (!vault || !file) return "";
      try {
        if (typeof vault.cachedRead === "function") return String(await vault.cachedRead(file) || "");
        if (typeof vault.read === "function") return String(await vault.read(file) || "");
      } catch {
        return "";
      }
      return "";
    }
    function taskStatsFromContent(content) {
      const lines = String(content || "").split(/\r?\n/);
      let open = 0;
      let done = 0;
      lines.forEach((line) => {
        if (/^\s*[-*]\s+\[[ xX]\]\s+/.test(line)) {
          if (/^\s*[-*]\s+\[[xX]\]\s+/.test(line)) done += 1;
          else open += 1;
        }
      });
      return {
        open,
        done,
        total: open + done,
        completionRate: open + done > 0 ? Math.round(done / (open + done) * 100) : 0
      };
    }
    function normalizePath(path) {
      return String(path || "").replace(/\\/g, "/").replace(/\/+/g, "/").replace(/\/+$/, "");
    }
    function isSystemPath(path) {
      const value = normalizePath(path);
      if (/(^|\/)\.[^/]+(\/|$)/.test(value)) return true;
      if (value.startsWith("_logs/")) return true;
      if (value.startsWith("_meta/")) return true;
      if (value.startsWith("0 Inbox/_processed/")) return true;
      if (value.startsWith("4 Archives/")) return true;
      if (value.startsWith("Periodic/")) return true;
      if (value.startsWith("node_modules/")) return true;
      return false;
    }
    module2.exports = {
      parseFrontmatter,
      fmValue,
      formatDateStr,
      dailyNotePath,
      getFileByPath,
      readFileText,
      taskStatsFromContent,
      normalizePath,
      isSystemPath
    };
  }
});

// src/project-service.js
var require_project_service = __commonJS({
  "src/project-service.js"(exports2, module2) {
    var { parseFrontmatter, fmValue, readFileText, taskStatsFromContent } = require_utils();
    function findProjectFiles(vault) {
      if (!vault || typeof vault.getMarkdownFiles !== "function") return [];
      const files = vault.getMarkdownFiles();
      return files.filter((file) => {
        const path = String(file.path || "");
        if (!path.startsWith("1 Projects/")) return false;
        if (path.split("/").length !== 3) return false;
        if (path.endsWith("README.md")) return false;
        if (path.endsWith("\u{1F4CD} \u9879\u76EE\u603B\u89C8.md")) return false;
        return true;
      });
    }
    function parseProject(file, content, metadataCache) {
      const fm = {
        ...parseFrontmatter(content)
      };
      try {
        const cache = metadataCache && typeof metadataCache.getFileCache === "function" ? metadataCache.getFileCache(file) : null;
        if (cache && cache.frontmatter) {
          Object.assign(fm, cache.frontmatter);
        }
      } catch {
      }
      const status = fmValue(fm, ["status", "Status"], "active");
      const priority = fmValue(fm, ["priority", "Priority"], "");
      const iteration = fmValue(fm, ["iteration", "Iteration"], "");
      const area = fmValue(fm, ["area", "Area", "domain", "Domain"], "");
      const tags = Array.isArray(fm.tags) ? fm.tags : [];
      const tasks = taskStatsFromContent(content);
      const heading = String(content || "").match(/^#\s+(.+)$/m);
      const title = heading ? heading[1].trim() : file.basename || "";
      return {
        file,
        path: file.path,
        title,
        status,
        priority,
        iteration,
        area,
        tags,
        tasks,
        mtime: file.stat?.mtime || 0,
        ctime: file.stat?.ctime || 0
      };
    }
    async function listProjects(app, options = {}) {
      if (!app || !app.vault) return [];
      const files = findProjectFiles(app.vault);
      const projects = [];
      for (const file of files) {
        const content = await readFileText(app.vault, file);
        const project = parseProject(file, content, app.metadataCache);
        projects.push(project);
      }
      projects.sort((a, b) => {
        const aActive = a.status === "active";
        const bActive = b.status === "active";
        if (aActive !== bActive) return aActive ? -1 : 1;
        const rank = (p) => {
          const v = String(p || "").toLowerCase();
          if (v === "p1" || v === "high") return 0;
          if (v === "p2" || v === "medium") return 1;
          if (v === "p3" || v === "low") return 2;
          return 3;
        };
        const byPriority = rank(a.priority) - rank(b.priority);
        if (byPriority !== 0) return byPriority;
        return b.mtime - a.mtime;
      });
      if (options.activeOnly) {
        return projects.filter((p) => p.status === "active");
      }
      return projects;
    }
    async function getEngineState(app) {
      const defaultState = {
        triage: { lastRun: null, status: "pending", summary: null },
        compile: { lastRun: null, status: "pending", summary: null },
        link: { lastRun: null, status: "pending", summary: null },
        daily: { lastRun: null, status: "pending", summary: null },
        project: { lastRun: null, status: "pending", summary: null },
        archive: { lastRun: null, status: "pending", summary: null },
        canvas: { lastRun: null, status: "pending", summary: null },
        "kos-init": { lastRun: null, status: "pending", summary: null },
        life: { lastRun: null, status: "pending", summary: null }
      };
      if (!app || !app.vault) return defaultState;
      const file = app.vault.getAbstractFileByPath("_meta/ai/memory/STATE.md");
      if (!file) return defaultState;
      const content = await readFileText(app.vault, file);
      const engines = Object.keys(defaultState);
      const parsed = {};
      let currentEngine = null;
      String(content || "").split(/\r?\n/).forEach((line) => {
        const section = line.match(/^##\s+(\S+)\s*$/);
        if (section && engines.includes(section[1])) {
          currentEngine = section[1];
          parsed[currentEngine] = {};
          return;
        }
        if (!currentEngine) return;
        const kv = line.match(/^-\s+(\w+):\s*(.*)$/);
        if (kv) {
          parsed[currentEngine][kv[1]] = kv[2].trim() || null;
        }
      });
      const state = {};
      engines.forEach((e) => {
        const raw = parsed[e] || {};
        state[e] = {
          lastRun: raw.last_run || raw.last_daily || null,
          status: raw.pending !== void 0 ? Number(raw.pending) === 0 ? "done" : "pending" : "pending",
          summary: raw.summary || null
        };
      });
      return state;
    }
    module2.exports = {
      findProjectFiles,
      parseProject,
      listProjects,
      getEngineState
    };
  }
});

// src/home-service.js
var require_home_service = __commonJS({
  "src/home-service.js"(exports2, module2) {
    var {
      parseFrontmatter,
      fmValue,
      formatDateStr,
      dailyNotePath,
      getFileByPath,
      readFileText,
      taskStatsFromContent,
      isSystemPath,
      normalizePath
    } = require_utils();
    var { listProjects, getEngineState } = require_project_service();
    async function getTodayState(app) {
      const dateStr = formatDateStr();
      const path = dailyNotePath(dateStr);
      const file = getFileByPath(app.vault, path);
      if (!file) {
        return { dateStr, path, exists: false, file: null, tasks: { open: 0, done: 0, total: 0, completionRate: 0 }, taskItems: [] };
      }
      const content = await readFileText(app.vault, file);
      const tasks = taskStatsFromContent(content);
      const lines = String(content || "").split(/\r?\n/);
      const taskItems = [];
      for (let i = 0; i < lines.length; i += 1) {
        const m = String(lines[i] || "").match(/^(\s*[-*]\s+\[)([ xX])(\]\s+)(.+)$/);
        if (!m) continue;
        const text = m[4].trim();
        if (!text) continue;
        taskItems.push({ lineIndex: i, text, done: /x/i.test(m[2]) });
        if (taskItems.length >= 12) break;
      }
      let focus = "";
      const focusMatch = content.match(/## \u4ECA\u65E5\u805A\u7126[^#]*?\n(- .+)/);
      if (focusMatch) focus = focusMatch[1].replace(/^- /, "").trim();
      return { dateStr, path, exists: true, file, tasks, taskItems, focus, content };
    }
    function getInboxFiles(vault) {
      if (!vault || typeof vault.getMarkdownFiles !== "function") return [];
      return vault.getMarkdownFiles().filter((f) => {
        const p = String(f.path || "");
        return p.startsWith("0 Inbox/") && !p.startsWith("0 Inbox/_processed/");
      });
    }
    async function getDashboardStats(app) {
      if (!app || !app.vault || typeof app.vault.getMarkdownFiles !== "function") {
        return { totalNotes: 0, todayNew: 0, stats: {} };
      }
      const files = app.vault.getMarkdownFiles();
      const today = formatDateStr();
      let todayNew = 0;
      const stats = { root: 0, projects: 0, areas: 0, resources: 0, inbox: 0, periodic: 0, system: 0 };
      files.forEach((f) => {
        const p = String(f.path || "");
        if (p.startsWith("1 Projects/")) stats.projects += 1;
        else if (p.startsWith("2 Areas/")) stats.areas += 1;
        else if (p.startsWith("3 Resources/")) stats.resources += 1;
        else if (p.startsWith("0 Inbox/")) {
          if (!p.startsWith("0 Inbox/_processed/")) stats.inbox += 1;
        } else if (p.startsWith("Periodic/")) stats.periodic += 1;
        else if (p.startsWith("_") || p.startsWith(".")) stats.system += 1;
        else if (p.startsWith("4 Archives/")) {
        } else stats.root += 1;
        const ctime = f.stat?.ctime ? new Date(f.stat.ctime) : null;
        if (ctime) {
          const cd = formatDateStr(ctime);
          if (cd === today) todayNew += 1;
        }
      });
      return { totalNotes: files.length, todayNew, stats };
    }
    function getRecentActivity(vault) {
      if (!vault || typeof vault.getMarkdownFiles !== "function") return [];
      return vault.getMarkdownFiles().filter((f) => !isSystemPath(f.path)).sort((a, b) => (b.stat?.mtime || 0) - (a.stat?.mtime || 0)).slice(0, 24).map((f) => ({ path: f.path, title: f.basename || "", mtime: f.stat?.mtime || 0 }));
    }
    async function getHotContext(app) {
      if (!app || !app.vault) return [];
      const file = getFileByPath(app.vault, "_meta/hot.md");
      if (!file) return [];
      const content = await readFileText(app.vault, file);
      const entries = [];
      String(content || "").split(/\r?\n/).forEach((line) => {
        const m = line.match(/^(\d{4}-\d{2}-\d{2})\s*[\u2014\u2013\-]\s*(.+)$/);
        if (m) entries.push({ date: m[1], summary: m[2].trim() });
      });
      return entries.slice(0, 5);
    }
    async function getWeeklyRecords(app) {
      if (!app || !app.vault) return [];
      const now = /* @__PURE__ */ new Date();
      const dayOfWeek = now.getDay();
      const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      const cells = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(now);
        d.setDate(now.getDate() + mondayOffset + i);
        const ds = formatDateStr(d);
        const path = dailyNotePath(ds);
        const file = getFileByPath(app.vault, path);
        let count = 0;
        if (file) {
          const content = await readFileText(app.vault, file);
          const lines = String(content || "").split(/\r?\n/);
          lines.forEach((line) => {
            const t = line.trim();
            if (!t) return;
            if (/^---$/.test(t)) return;
            if (/^#{1,6}\s+/.test(t)) return;
            if (/^\s*[-*]\s+\[[ xX]\]/.test(t)) return;
            if (/^(created|updated|tags|status|priority)/i.test(t)) return;
            count += 1;
          });
        }
        const weekdays = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
        cells.push({ date: ds, count, weekday: weekdays[i], isToday: ds === formatDateStr(now) });
      }
      return cells;
    }
    module2.exports = {
      getTodayState,
      getInboxFiles,
      getDashboardStats,
      getRecentActivity,
      getHotContext,
      getWeeklyRecords,
      getEngineState,
      listProjects
    };
  }
});

// src/cockpit-view.js
var require_cockpit_view = __commonJS({
  "src/cockpit-view.js"(exports2, module2) {
    var { ItemView, moment } = require("obsidian");
    var { t } = require_locale();
    var {
      getTodayState,
      getInboxFiles,
      getDashboardStats,
      getRecentActivity,
      getHotContext,
      getWeeklyRecords,
      getEngineState,
      listProjects
    } = require_home_service();
    var VIEW_TYPE_COCKPIT2 = "kos-cockpit-view";
    var CockpitView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
      }
      getViewType() {
        return VIEW_TYPE_COCKPIT2;
      }
      getDisplayText() {
        return "KOS Cockpit";
      }
      getIcon() {
        return "gauge";
      }
      get settings() {
        return this.plugin ? this.plugin.settings : null;
      }
      /** Translate with current locale */
      _t(key, params) {
        return t(key, this.settings?.locale || "zh-cn", params);
      }
      /** Day names as array indexed 0=Sun..6=Sat */
      get _dayNames() {
        return [
          this._t("day.sun"),
          this._t("day.mon"),
          this._t("day.tue"),
          this._t("day.wed"),
          this._t("day.thu"),
          this._t("day.fri"),
          this._t("day.sat")
        ];
      }
      async onload() {
        super.onload();
        this.contentEl.empty();
        this.contentEl.addClass("kos-cockpit-container");
        this.renderLoading();
        await this.refresh();
      }
      renderLoading() {
        this.contentEl.innerHTML = '<div class="kos-cockpit-loading"><div class="kos-cockpit-loading-spinner"></div><span>' + this._t("app.loading") + "</span></div>";
      }
      renderError(msg) {
        this.contentEl.empty();
        this.contentEl.createEl("div", { cls: "kos-db" });
        const errBox = this.contentEl.querySelector(".kos-db");
        errBox.createEl("div", { text: this._t("app.error"), cls: "kos-db-empty" });
        if (msg) errBox.createEl("div", { text: String(msg), cls: "kos-db-empty" });
        const retry = errBox.createEl("button", { cls: "kos-db-action-btn", text: "\u21BB Retry" });
        retry.addEventListener("click", () => {
          this.renderLoading();
          this.refresh();
        });
      }
      async refresh() {
        try {
          const data = await this.collectData(this.app);
          this.renderDashboard(data);
        } catch (e) {
          console.error("KOS Cockpit refresh error:", e);
          this.renderError(e?.message);
        }
      }
      async collectData(app) {
        const [today, projects, stats, recent, hot, weekly, engines, inboxFiles] = await Promise.all([
          getTodayState(app).catch(() => null),
          listProjects(app, { activeOnly: true }).catch(() => []),
          getDashboardStats(app).catch(() => ({ totalNotes: 0, todayNew: 0, stats: {} })),
          Promise.resolve(getRecentActivity(app.vault)),
          getHotContext(app).catch(() => []),
          getWeeklyRecords(app).catch(() => []),
          getEngineState(app).catch(() => ({})),
          Promise.resolve(getInboxFiles(app.vault))
        ]);
        return { today, projects, stats, recent, hot, weekly, engines, inboxFiles };
      }
      renderDashboard(data) {
        const container = this.contentEl;
        container.empty();
        const main = container.createEl("div", { cls: "kos-db" });
        this.renderHeader(main, data);
        this.renderQuickActions(main);
        if (this.settings?.showTodayTasks !== false) this.renderTodayTasks(main, data);
        if (this.settings?.showVaultStats !== false || this.settings?.showRecentActivity !== false) {
          this.renderTwoColumns(main, data);
        }
        if (this.settings?.showNav !== false) this.renderNav(main);
        if (this.settings?.showInboxFiles !== false) this.renderInboxFiles(main, data);
        if (this.settings?.showProjectCards !== false) this.renderProjects(main, data);
        if (this.settings?.showEngineState !== false) this.renderEngineState(main, data);
        if (this.settings?.showWeeklyChart !== false) this.renderWeeklyChart(main, data);
        if (this.settings?.showAiChat !== false) this.renderAIChat(main);
      }
      renderHeader(container, data) {
        const h = container.createEl("div", { cls: "kos-db-header" });
        const now = moment();
        const dayNames = this._dayNames;
        h.createEl("div", {
          text: "\u{1F4C5} " + now.format(this._t("header.dateFormat")) + " \u661F\u671F" + dayNames[now.day()],
          cls: "kos-db-header-date"
        });
        const statusText = data.today?.exists ? this._t("header.noteCreated") : this._t("header.noteNotCreated");
        const focusVal = data.today?.focus || "";
        h.createEl("div", {
          text: this._t("header.noteStatus", { status: statusText }) + "  \xB7  " + this._t("header.todayFocus", { focus: focusVal || this._t("header.focusNotSet") }),
          cls: "kos-db-header-status"
        });
        const refreshBtn = h.createEl("button", { cls: "kos-db-refresh-btn" });
        refreshBtn.innerHTML = "\u21BB";
        refreshBtn.addEventListener("click", () => {
          this.renderLoading();
          this.refresh();
        });
      }
      renderQuickActions(container) {
        const qa = container.createEl("div", { cls: "kos-db-actions" });
        const actions = [
          { label: "\u{1F4C5} " + this._t("action.planToday"), cmd: "daily-open" },
          { label: "\u{1F4DD} " + this._t("action.capture"), cmd: "capture" },
          { label: "\u{1F504} " + this._t("action.dayReview"), cmd: "day-review" },
          { label: "\u{1F4CB} " + this._t("action.newProject"), cmd: "project" },
          { label: "\u{1F5C2}\uFE0F " + this._t("action.triage"), cmd: "triage" },
          { label: "\u2699\uFE0F " + this._t("action.settings"), cmd: "settings" }
        ];
        actions.forEach((a) => {
          const btn = qa.createEl("button", { cls: "kos-db-action-btn" });
          btn.textContent = a.label;
          btn.addEventListener("click", () => {
            this.handleQuickAction(a.cmd);
          });
        });
      }
      handleQuickAction(cmd) {
        switch (cmd) {
          case "daily-open": {
            const { dailyNotePath } = require_utils();
            this.app.workspace.openLinkText(dailyNotePath(moment().format("YYYY-MM-DD")), "", true);
            break;
          }
          case "settings": {
            const setting = this.app.setting;
            if (setting) {
              setting.open();
              setting.openTabById("kos-cockpit");
            }
            break;
          }
          default:
            this.app.workspace.openLinkText("_meta/hot.md", "", true);
        }
      }
      // --- Today's Task Panel ---
      renderTodayTasks(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section kos-db-today-tasks" });
        const header = section.createEl("div", { cls: "kos-db-today-header" });
        header.createEl("div", { text: "\u2705 " + this._t("task.title"), cls: "kos-db-section-title" });
        if (data.today?.tasks) {
          const { open, done, total, completionRate } = data.today.tasks;
          header.createEl("span", {
            text: this._t("task.progress", { done, total, rate: completionRate }),
            cls: "kos-db-today-count " + (total > 0 && completionRate >= 100 ? "kos-db-today-done" : "")
          });
        }
        const list = section.createEl("div", { cls: "kos-db-today-list" });
        const maxItems = this.settings?.maxTaskItems || 12;
        const items = (data.today?.taskItems || []).slice(0, maxItems);
        if (!data.today?.exists) {
          list.createEl("div", { text: this._t("task.dailyMissing"), cls: "kos-db-empty" });
        } else if (items.length === 0) {
          list.createEl("div", { text: this._t("task.none"), cls: "kos-db-empty" });
        } else {
          items.forEach((item) => {
            const row = list.createEl("div", { cls: "kos-db-today-item" + (item.done ? " kos-db-today-item-done" : "") });
            row.createEl("span", { cls: "kos-db-today-cb" }).textContent = item.done ? "\u2611" : "\u2610";
            row.createEl("span", { text: item.text, cls: "kos-db-today-text" });
          });
        }
      }
      renderProjects(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u{1F4CB} " + this._t("project.title"), cls: "kos-db-section-title" });
        const grid = section.createEl("div", { cls: "kos-db-project-grid" });
        const projects = data.projects || [];
        if (projects.length === 0) {
          grid.createEl("div", { text: this._t("project.empty"), cls: "kos-db-empty" });
          return;
        }
        projects.forEach((proj) => {
          const card = grid.createEl("div", { cls: "kos-db-project-card" });
          card.addEventListener("click", () => {
            this.app.workspace.openLinkText(proj.path, "", true);
          });
          const titleRow = card.createEl("div", { cls: "kos-db-project-title-row" });
          titleRow.createEl("span", { text: proj.title || "Unnamed", cls: "kos-db-project-title" });
          const p = String(proj.priority || "").toLowerCase();
          if (p) titleRow.createEl("span", { text: proj.priority, cls: "kos-db-badge kos-db-badge-" + p });
          const rate = proj.tasks?.completionRate || 0;
          card.createEl("div", { cls: "kos-db-progress", attr: { style: "--progress:" + rate + "%" } });
          card.createEl("div", { text: (proj.tasks?.done || 0) + "/" + (proj.tasks?.total || 0), cls: "kos-db-progress-label" });
        });
      }
      renderTwoColumns(container, data) {
        const cols = container.createEl("div", { cls: "kos-db-cols" });
        if (this.settings?.showVaultStats !== false) {
          const left = cols.createEl("div", { cls: "kos-db-col" });
          left.createEl("div", { text: "\u{1F4CA} " + this._t("stats.title"), cls: "kos-db-section-title" });
          const metrics = [
            { label: this._t("stats.totalNotes"), value: String(data.stats?.totalNotes || 0) },
            { label: this._t("stats.activeProjects"), value: String((data.projects || []).length) },
            { label: this._t("stats.todayNew"), value: String(data.stats?.todayNew || 0) },
            { label: this._t("stats.pendingTriage"), value: String((data.inboxFiles || []).length) }
          ];
          const grid = left.createEl("div", { cls: "kos-db-metrics" });
          metrics.forEach((m) => {
            const item = grid.createEl("div", { cls: "kos-db-metric" });
            item.createEl("div", { text: m.value, cls: "kos-db-metric-val" });
            item.createEl("div", { text: m.label, cls: "kos-db-metric-label" });
          });
          if (data.stats?.stats) {
            const s = data.stats.stats;
            const subStats = [
              { label: "Projects", value: String(s.projects || 0) },
              { label: "Areas", value: String(s.areas || 0) },
              { label: "Resources", value: String(s.resources || 0) },
              { label: "Periodic", value: String(s.periodic || 0) }
            ];
            const subGrid = left.createEl("div", { cls: "kos-db-sub-metrics" });
            subStats.forEach((m) => {
              const item = subGrid.createEl("div", { cls: "kos-db-sub-metric" });
              item.createEl("span", { text: m.value, cls: "kos-db-sub-metric-val" });
              item.createEl("span", { text: " " + m.label, cls: "kos-db-sub-metric-label" });
            });
          }
        }
        if (this.settings?.showRecentActivity !== false) {
          const right = cols.createEl("div", { cls: "kos-db-col" });
          right.createEl("div", { text: "\u{1F504} " + this._t("recent.title"), cls: "kos-db-section-title" });
          const recent = data.recent || [];
          const maxItems = this.settings?.maxRecentItems || 8;
          const list = right.createEl("div", { cls: "kos-db-recent-list" });
          if (recent.length === 0) {
            list.createEl("div", { text: this._t("recent.empty"), cls: "kos-db-empty" });
          } else {
            recent.slice(0, maxItems).forEach((item) => {
              const row = list.createEl("div", { cls: "kos-db-recent-item" });
              row.createEl("span", { text: moment(item.mtime).format("MM-DD HH:mm"), cls: "kos-db-recent-time" });
              const link = row.createEl("a", { text: "  " + item.title, cls: "kos-db-recent-link" });
              link.addEventListener("click", () => {
                this.app.workspace.openLinkText(item.path, "", true);
              });
            });
          }
        }
      }
      renderNav(container) {
        const nav = container.createEl("div", { cls: "kos-db-nav" });
        nav.createEl("div", { text: "\u{1F3E0} " + this._t("nav.title"), cls: "kos-db-section-title" });
        const links = nav.createEl("div", { cls: "kos-db-nav-links" });
        const items = [
          { label: "\u{1F3E0} \u751F\u6D3B", path: "2 Areas/\u751F\u6D3B/\u751F\u6D3B" },
          { label: "\u{1F4D6} \u5B66\u4E60", path: "2 Areas/\u5B66\u4E60/\u5B66\u4E60" },
          { label: "\u{1F4BC} \u5DE5\u4F5C", path: "2 Areas/\u5DE5\u4F5C/\u5DE5\u4F5C" },
          { label: "\u{1F4D6} \u603B\u7D22\u5F15", path: "_meta/\u{1F517} \u77E5\u8BC6\u5173\u8054/Index/_index-zh-cn" },
          { label: "\u{1F5C4}\uFE0F \u5F52\u6863", path: "4 Archives" },
          { label: "\u{1F4E5} Inbox", path: "0 Inbox" },
          { label: "\u2699\uFE0F Hot Cache", path: "_meta/hot" }
        ];
        items.forEach((item) => {
          const a = links.createEl("a", { text: item.label, cls: "kos-db-nav-link" });
          a.addEventListener("click", () => {
            this.app.workspace.openLinkText(item.path, "", true);
          });
        });
      }
      // --- Inbox File List ---
      renderInboxFiles(container, data) {
        const files = data.inboxFiles || [];
        if (files.length === 0) return;
        const maxItems = this.settings?.maxInboxItems || 6;
        const section = container.createEl("div", { cls: "kos-db-section kos-db-inbox" });
        section.createEl("div", { text: "\u{1F4E5} " + this._t("inbox.title", { count: files.length }), cls: "kos-db-section-title" });
        const list = section.createEl("div", { cls: "kos-db-inbox-list" });
        files.slice(0, maxItems).forEach((file) => {
          const row = list.createEl("div", { cls: "kos-db-inbox-item" });
          const name = row.createEl("a", { text: file.basename || file.path, cls: "kos-db-inbox-link" });
          name.addEventListener("click", () => {
            this.app.workspace.openLinkText(file.path, "", true);
          });
          if (file.stat?.mtime) {
            row.createEl("span", { text: moment(file.stat.mtime).format("MM-DD HH:mm"), cls: "kos-db-inbox-time" });
          }
        });
        if (files.length > maxItems) {
          const more = section.createEl("div", { cls: "kos-db-inbox-more" });
          more.createEl("a", { text: this._t("inbox.more", { count: files.length - maxItems }), cls: "kos-db-inbox-link" }).addEventListener("click", () => {
            this.app.workspace.openLinkText("0 Inbox", "", true);
          });
        }
      }
      // --- Engine State Display ---
      renderEngineState(container, data) {
        const engines = data.engines || {};
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u2699\uFE0F " + this._t("engine.title"), cls: "kos-db-section-title" });
        const grid = section.createEl("div", { cls: "kos-db-engine-grid" });
        const primaryEngines = ["triage", "compile", "link", "daily", "project", "archive"];
        const hasData = primaryEngines.some((e) => engines[e]?.lastRun || engines[e]?.summary);
        if (!hasData) {
          grid.createEl("div", { text: this._t("engine.empty"), cls: "kos-db-empty" });
          return;
        }
        primaryEngines.forEach((key) => {
          const eng = engines[key] || {};
          const chip = grid.createEl("div", {
            cls: "kos-db-engine-chip" + (eng.status === "done" ? " kos-db-engine-done" : "") + (eng.lastRun ? "" : " kos-db-engine-idle")
          });
          chip.createEl("span", { text: key, cls: "kos-db-engine-name" });
          if (eng.lastRun) {
            chip.createEl("span", { text: " " + eng.lastRun.slice(5), cls: "kos-db-engine-date" });
          }
          if (eng.summary) {
            chip.setAttr("title", eng.summary);
          }
        });
      }
      renderWeeklyChart(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u{1F4C8} " + this._t("weekly.title"), cls: "kos-db-section-title" });
        const chart = section.createEl("div", { cls: "kos-db-chart" });
        const cells = data.weekly || [];
        const maxCount = Math.max(1, ...cells.map((c) => c.count));
        if (cells.length === 0) {
          chart.createEl("div", { text: this._t("weekly.empty"), cls: "kos-db-empty" });
          return;
        }
        cells.forEach((cell) => {
          const col = chart.createEl("div", { cls: "kos-db-chart-col" });
          if (cell.isToday) col.addClass("kos-db-chart-today");
          const barHeight = Math.max(4, cell.count / maxCount * 60);
          col.createEl("div", { cls: "kos-db-chart-bar", attr: { style: "height:" + barHeight + "px" } }).setAttr("title", this._t("weekly.barTooltip", { date: cell.date, count: cell.count }));
          col.createEl("div", { text: String(cell.count), cls: "kos-db-chart-val" });
          col.createEl("div", { text: cell.weekday, cls: "kos-db-chart-day" });
        });
      }
      renderAIChat(container) {
        const section = container.createEl("div", { cls: "kos-db-section kos-db-ai" });
        section.createEl("div", { text: "\u{1F916} " + this._t("ai.title"), cls: "kos-db-section-title" });
        const body = section.createEl("div", { cls: "kos-db-ai-body" });
        body.createEl("div", { text: this._t("ai.placeholder"), cls: "kos-db-ai-placeholder" });
        const inputRow = body.createEl("div", { cls: "kos-db-ai-input-row" });
        const input = inputRow.createEl("input", {
          cls: "kos-db-ai-input",
          attr: { type: "text", placeholder: this._t("ai.inputPlaceholder") }
        });
        const sendBtn = inputRow.createEl("button", { cls: "kos-db-ai-send", text: this._t("ai.send") });
        sendBtn.addEventListener("click", () => {
          const val = input.value.trim();
          if (!val) return;
          this.app.workspace.openLinkText("_meta/hot.md", "", true);
          input.value = "";
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") sendBtn.click();
        });
      }
    };
    module2.exports = { CockpitView: CockpitView2, VIEW_TYPE_COCKPIT: VIEW_TYPE_COCKPIT2 };
  }
});

// src/settings-tab.js
var require_settings_tab = __commonJS({
  "src/settings-tab.js"(exports2, module2) {
    var { PluginSettingTab, Setting } = require("obsidian");
    var { t, LOCALE_KEYS } = require_locale();
    var DEFAULT_SETTINGS2 = {
      // General
      locale: "zh-cn",
      autoOpen: true,
      // Dashboard section visibility
      showTodayTasks: true,
      showInboxFiles: true,
      showEngineState: true,
      showWeeklyChart: true,
      showAiChat: true,
      showProjectCards: true,
      showRecentActivity: true,
      showVaultStats: true,
      showNav: true,
      // Data limits
      maxRecentItems: 8,
      maxTaskItems: 12,
      maxInboxItems: 6
    };
    var CockpitSettingTab2 = class extends PluginSettingTab {
      constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
      }
      /** Helper: translate using current locale */
      _t(key, params) {
        return t(key, this.plugin.settings.locale, params);
      }
      display() {
        const { containerEl } = this;
        containerEl.empty();
        this.renderGeneralSection(containerEl);
        this.renderDashboardSection(containerEl);
        this.renderDataLimitsSection(containerEl);
        this.renderAboutSection(containerEl);
      }
      renderGeneralSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("settings.general") });
        new Setting(containerEl).setName(this._t("settings.language")).setDesc(this._t("settings.languageDesc")).addDropdown((dropdown) => {
          dropdown.addOption("zh-cn", this._t("settings.langZhCN")).addOption("en", this._t("settings.langEn")).addOption("zh-tw", this._t("settings.langZhTW")).setValue(this.plugin.settings.locale).onChange(async (v) => {
            this.plugin.settings.locale = v;
            await this.plugin.saveSettings();
            this.display();
          });
        });
        new Setting(containerEl).setName(this._t("settings.autoOpen")).setDesc(this._t("settings.autoOpenDesc")).addToggle(
          (toggle) => toggle.setValue(this.plugin.settings.autoOpen).onChange(async (v) => {
            this.plugin.settings.autoOpen = v;
            await this.plugin.saveSettings();
          })
        );
      }
      renderDashboardSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("settings.dashboard") });
        containerEl.createEl("p", {
          text: this._t("settings.dashboardDesc"),
          cls: "setting-item-description"
        });
        const sections = [
          { key: "showTodayTasks", nameKey: "settings.showTodayTasks", name: "Today's Tasks", desc: "Daily note task list and progress." },
          { key: "showProjectCards", name: "Active Projects", desc: "Project cards with priority and progress." },
          { key: "showVaultStats", name: "Vault Statistics", desc: "Total notes, active projects, inbox count." },
          { key: "showRecentActivity", name: "Recent Activity", desc: "Recently modified files." },
          { key: "showNav", name: "Navigation", desc: "Quick links to areas, inbox, hot cache." },
          { key: "showInboxFiles", name: "Inbox Files", desc: "List of pending files in 0 Inbox/." },
          { key: "showEngineState", name: "Engine State", desc: "Triage/Compile/Link engine status chips." },
          { key: "showWeeklyChart", name: "Weekly Chart", desc: "Bar chart of weekly daily-note captures." },
          { key: "showAiChat", name: "AI Chat", desc: "AI chat input placeholder." }
        ];
        sections.forEach(({ key, name, desc }) => {
          new Setting(containerEl).setName(name).setDesc(desc).addToggle(
            (toggle) => toggle.setValue(this.plugin.settings[key]).onChange(async (v) => {
              this.plugin.settings[key] = v;
              await this.plugin.saveSettings();
            })
          );
        });
      }
      renderDataLimitsSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("settings.dataLimits") });
        new Setting(containerEl).setName(this._t("settings.maxRecent")).setDesc(this._t("settings.maxRecentDesc")).addText(
          (text) => text.setPlaceholder("8").setValue(String(this.plugin.settings.maxRecentItems)).onChange(async (v) => {
            const val = Math.max(3, Math.min(20, Number(v) || 8));
            this.plugin.settings.maxRecentItems = val;
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName(this._t("settings.maxTasks")).setDesc(this._t("settings.maxTasksDesc")).addText(
          (text) => text.setPlaceholder("12").setValue(String(this.plugin.settings.maxTaskItems)).onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 12));
            this.plugin.settings.maxTaskItems = val;
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName(this._t("settings.maxInbox")).setDesc(this._t("settings.maxInboxDesc")).addText(
          (text) => text.setPlaceholder("6").setValue(String(this.plugin.settings.maxInboxItems)).onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 6));
            this.plugin.settings.maxInboxItems = val;
            await this.plugin.saveSettings();
          })
        );
      }
      renderAboutSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("settings.about") });
        const desc = document.createDocumentFragment();
        desc.createEl("span", {
          text: this._t("settings.versionDesc")
        });
        new Setting(containerEl).setName(this._t("settings.version")).setDesc(desc);
      }
    };
    module2.exports = { CockpitSettingTab: CockpitSettingTab2, DEFAULT_SETTINGS: DEFAULT_SETTINGS2 };
  }
});

// src/main.js
var { Plugin } = require("obsidian");
var { CockpitView, VIEW_TYPE_COCKPIT } = require_cockpit_view();
var { CockpitSettingTab, DEFAULT_SETTINGS } = require_settings_tab();
module.exports = class KosCockpitPlugin extends Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings", { ...DEFAULT_SETTINGS });
  }
  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE_COCKPIT, (leaf) => new CockpitView(leaf, this));
    this.addRibbonIcon("gauge", "Open KOS Cockpit", () => {
      this.openCockpit();
    });
    this.addCommand({
      id: "open-kos-cockpit",
      name: "Open KOS Cockpit",
      callback: () => this.openCockpit()
    });
    this.addCommand({
      id: "refresh-kos-cockpit",
      name: "Refresh KOS Cockpit",
      callback: () => this.refreshCockpit()
    });
    this.addSettingTab(new CockpitSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);
      if (existing.length === 0 && this.settings.autoOpen) {
        this.openCockpit();
      }
    });
  }
  async openCockpit() {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);
    if (existing.length > 0) {
      workspace.revealLeaf(existing[0]);
      const view = existing[0].view;
      if (view && typeof view.refresh === "function") {
        await view.refresh();
      }
      return;
    }
    const leaf = workspace.getLeaf(true);
    await leaf.setViewState({
      type: VIEW_TYPE_COCKPIT,
      active: true
    });
    workspace.revealLeaf(leaf);
  }
  async refreshCockpit() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view && typeof view.refresh === "function") {
        await view.refresh();
      }
    }
  }
  async loadSettings() {
    const saved = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, saved);
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.refreshCockpit();
  }
  onunload() {
    this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT).forEach((leaf) => {
      leaf.detach();
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cblxuY29uc3QgTE9DQUxFUyA9IHtcbiAgJ3poLWNuJzoge1xuICAgIC8vIEdlbmVyYWxcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU1MkEwXHU4RjdEXHU0RUVBXHU4ODY4XHU3NkQ4XHU2NUY2XHU1MUZBXHU5NTE5XHUzMDAyJyxcblxuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1MjFCXHU1RUZBJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QkJFXHU1QjlBKScsXG5cbiAgICAvLyBEYXkgbmFtZXMgKHNob3J0LCBzaW5nbGUgY2hhcmFjdGVyKVxuICAgICdkYXkuc3VuJzogJ1x1NjVFNScsXG4gICAgJ2RheS5tb24nOiAnXHU0RTAwJyxcbiAgICAnZGF5LnR1ZSc6ICdcdTRFOEMnLFxuICAgICdkYXkud2VkJzogJ1x1NEUwOScsXG4gICAgJ2RheS50aHUnOiAnXHU1NkRCJyxcbiAgICAnZGF5LmZyaSc6ICdcdTRFOTQnLFxuICAgICdkYXkuc2F0JzogJ1x1NTE2RCcsXG5cbiAgICAvLyBRdWljayBhY3Rpb25zXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnXHU4OUM0XHU1MjEyXHU0RUNBXHU1OTI5JyxcbiAgICAnYWN0aW9uLmNhcHR1cmUnOiAnXHU1RkVCXHU5MDFGXHU2MzU1XHU4M0I3JyxcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdcdTZCQ0ZcdTY1RTVcdTU2REVcdTk4N0UnLFxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdcdTY1QjBcdTVFRkFcdTk4NzlcdTc2RUUnLFxuICAgICdhY3Rpb24udHJpYWdlJzogJ1RyaWFnZScsXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdcdThCQkVcdTdGNkUnLFxuXG4gICAgLy8gVG9kYXkgVGFza3NcbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTEnLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2ODJcdTY1RTBcdTRFRkJcdTUyQTFcdTMwMDInLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCMTRcdThCQjBcdTY3MkFcdTUyMUJcdTVFRkFcdTMwMDJcdTcwQjlcdTUxRkIgW1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOV0gXHU1MjFCXHU1RUZBXHUzMDAyJyxcblxuICAgIC8vIFByb2plY3RzXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUVcdTMwMDInLFxuXG4gICAgLy8gVmF1bHQgc3RhdHNcbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU1RTkzXHU3RURGXHU4QkExJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTYwM0JcdTdCMTRcdThCQjAnLFxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUUnLFxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1NjJFMycsXG5cbiAgICAvLyBSZWNlbnQgYWN0aXZpdHlcbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOCcsXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdTUyQThcdTMwMDInLFxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVCRkNcdTgyMkEnLFxuXG4gICAgLy8gSW5ib3hcbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgIC8vIEVuZ2luZSBzdGF0ZVxuICAgICdlbmdpbmUudGl0bGUnOiAnXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ1x1NjY4Mlx1NjVFMFx1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMVx1NjU3MFx1NjM2RVx1MzAwMicsXG5cbiAgICAvLyBXZWVrbHkgY2hhcnRcbiAgICAnd2Vla2x5LnRpdGxlJzogJ1x1NjcyQ1x1NTQ2OFx1OEJCMFx1NUY1NVx1NTIwNlx1NUUwMycsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTU0NjhcdTY2ODJcdTY1RTBcdTY1RTVcdThCQjBcdThCQjBcdTVGNTVcdTMwMDInLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gXHU2NzYxJyxcblxuICAgIC8vIEFJIENoYXRcbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QkY5XHU4QkREJyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnXHU1NzI4XHU2QjY0XHU1OTA0XHU1RDRDXHU1MTY1IEFJIFx1NUJGOVx1OEJERFx1ODlDNlx1NTZGRVx1MzAwMlx1NzZFRVx1NTI0RFx1NEY3Rlx1NzUyOFx1NTQ3RFx1NEVFNFx1OTc2Mlx1Njc3Rlx1NjIxNlx1NEZBN1x1NjgwRlx1OEZEQlx1ODg0QyBBSSBcdTRFQTRcdTRFOTJcdTMwMDInLFxuICAgICdhaS5pbnB1dFBsYWNlaG9sZGVyJzogJ1x1OEY5M1x1NTE2NVx1NTQ3RFx1NEVFNFx1NjIxNlx1OTVFRVx1OTg5OFx1MjAyNlx1MjAyNicsXG4gICAgJ2FpLnNlbmQnOiAnXHU1M0QxXHU5MDAxJyxcblxuICAgIC8vIFNldHRpbmdzXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NzU0Q1x1OTc2Mlx1OEJFRFx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwMDlcdTYyRTlcdTRFRUFcdTg4NjhcdTc2RDhcdTc1NENcdTk3NjJcdTc2ODRcdTY2M0VcdTc5M0FcdThCRURcdThBMDBcdTMwMDInLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU0MkZcdTUyQThcdTY1RjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDAgS09TIENvY2twaXRcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnRGFzaGJvYXJkIFNlY3Rpb25zJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTRFRUFcdTg4NjhcdTc2RDhcdTRFMEFcdTU0MDRcdTUzM0FcdTU3NTdcdTc2ODRcdTY2M0VcdTc5M0FcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOFx1NjU3MCcsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnXHU2NjNFXHU3OTNBXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU2NTg3XHU0RUY2XHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnXHU2NzAwXHU1OTI3XHU0RUZCXHU1MkExXHU2NTcwJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1NjYzRVx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMVx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ1x1NjcwMFx1NTkyNyBJbmJveCBcdTY1NzAnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnXHU2NjNFXHU3OTNBIEluYm94IFx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ0Fib3V0JyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTRFRUFcdTg4NjhcdTc2RDhcdTMwMDJLT1MgXHU3NTFGXHU2MDAxXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcbiAgfSxcblxuICAnZW4nOiB7XG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcbiAgICAnYXBwLmxvYWRpbmcnOiAnTG9hZGluZyBLT1MgQ29ja3BpdC4uLicsXG4gICAgJ2FwcC5lcnJvcic6ICdTb21ldGhpbmcgd2VudCB3cm9uZyBsb2FkaW5nIHRoZSBkYXNoYm9hcmQuJyxcblxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnRGFpbHkgTm90ZSBbe3N0YXR1c31dJyxcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ0NyZWF0ZWQnLFxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnTm90IENyZWF0ZWQnLFxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdUb2RheVxcJ3MgRm9jdXM6IHtmb2N1c30nLFxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKE5vdCBTZXQpJyxcblxuICAgICdkYXkuc3VuJzogJ1MnLFxuICAgICdkYXkubW9uJzogJ00nLFxuICAgICdkYXkudHVlJzogJ1QnLFxuICAgICdkYXkud2VkJzogJ1cnLFxuICAgICdkYXkudGh1JzogJ1QnLFxuICAgICdkYXkuZnJpJzogJ0YnLFxuICAgICdkYXkuc2F0JzogJ1MnLFxuXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnUGxhbiBUb2RheScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1F1aWNrIENhcHR1cmUnLFxuICAgICdhY3Rpb24uZGF5UmV2aWV3JzogJ0RheSBSZXZpZXcnLFxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdOZXcgUHJvamVjdCcsXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcbiAgICAnYWN0aW9uLnNldHRpbmdzJzogJ1NldHRpbmdzJyxcblxuICAgICd0YXNrLnRpdGxlJzogJ1RvZGF5XFwncyBUYXNrcycsXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcbiAgICAndGFzay5ub25lJzogJ05vIHRhc2tzIHlldC4nLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdEYWlseSBub3RlIG5vdCBjcmVhdGVkLiBDbGljayBbUGxhbiBUb2RheV0gdG8gY3JlYXRlIG9uZS4nLFxuXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnQWN0aXZlIFByb2plY3RzJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdObyBhY3RpdmUgcHJvamVjdHMuJyxcblxuICAgICdzdGF0cy50aXRsZSc6ICdWYXVsdCBTdGF0aXN0aWNzJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdUb3RhbCBOb3RlcycsXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ0FjdGl2ZSBQcm9qZWN0cycsXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1RvZGF5IE5ldycsXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnSW5ib3gnLFxuXG4gICAgJ3JlY2VudC50aXRsZSc6ICdSZWNlbnQgQWN0aXZpdHknLFxuICAgICdyZWNlbnQuZW1wdHknOiAnTm8gYWN0aXZpdHkgeWV0LicsXG5cbiAgICAnbmF2LnRpdGxlJzogJ1RocmVlIFBpbGxhcnMgXHUwMEI3IE5hdicsXG5cbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgICdlbmdpbmUudGl0bGUnOiAnRW5naW5lIFN0YXRlJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ05vIGVuZ2luZSBzdGF0ZSBkYXRhIHlldC4nLFxuXG4gICAgJ3dlZWtseS50aXRsZSc6ICdXZWVrbHkgUmVjb3JkIERpc3RyaWJ1dGlvbicsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdObyBkYWlseSByZWNvcmRzIHRoaXMgd2Vlay4nLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gaXRlbXMnLFxuXG4gICAgJ2FpLnRpdGxlJzogJ0FJIENoYXQnLFxuICAgICdhaS5wbGFjZWhvbGRlcic6ICdBSSBjaGF0IHZpZXcgY2FuIGJlIGVtYmVkZGVkIGhlcmUuIEN1cnJlbnRseSB1c2UgdGhlIGNvbW1hbmQgcGFsZXR0ZSBvciBzaWRlYmFyIGZvciBBSSBpbnRlcmFjdGlvbi4nLFxuICAgICdhaS5pbnB1dFBsYWNlaG9sZGVyJzogJ0VudGVyIGNvbW1hbmQgb3IgcXVlc3Rpb24uLi4nLFxuICAgICdhaS5zZW5kJzogJ1NlbmQnLFxuXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ0ludGVyZmFjZSBMYW5ndWFnZScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdDaG9vc2UgdGhlIGRpc3BsYXkgbGFuZ3VhZ2UgZm9yIHRoZSBkYXNoYm9hcmQuJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcdTdFNDFcdTlBRDRcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdBdXRvLW9wZW4gb24gc3RhcnR1cCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdBdXRvbWF0aWNhbGx5IG9wZW4gdGhlIEtPUyBDb2NrcGl0IHdoZW4gT2JzaWRpYW4gc3RhcnRzLicsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJzogJ1RvZ2dsZSB3aGljaCBzZWN0aW9ucyBhcHBlYXIgb24gdGhlIGNvY2twaXQgZGFzaGJvYXJkLicsXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnTWF4IHJlY2VudCBpdGVtcycsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnTnVtYmVyIG9mIHJlY2VudGx5IG1vZGlmaWVkIGZpbGVzIHRvIHNob3cgKG1heCAyMCkuJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnTWF4IHRhc2sgaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnTnVtYmVyIG9mIGRhaWx5LW5vdGUgdGFza3MgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdNYXggaW5ib3ggaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnTnVtYmVyIG9mIGluYm94IGZpbGUgbmFtZXMgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdBYm91dCcsXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnVmVyc2lvbicsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgQSBrbm93bGVkZ2UgbWFuYWdlbWVudCBkYXNoYm9hcmQgZm9yIHRoZSBLT1NfTExNLVdpa2kgdmF1bHQuIFBhcnQgb2YgdGhlIEtPUyBlY29zeXN0ZW0uJyxcbiAgfSxcblxuICAnemgtdHcnOiB7XG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcbiAgICAnYXBwLmxvYWRpbmcnOiAnXHU2QjYzXHU1NzI4XHU4RjA5XHU1MTY1IEtPUyBDb2NrcGl0Li4uJyxcbiAgICAnYXBwLmVycm9yJzogJ1x1OEYwOVx1NTE2NVx1NTEwMFx1ODg2OFx1Njc3Rlx1NjY0Mlx1NzY3Q1x1NzUxRlx1OTMyRlx1OEFBNFx1MzAwMicsXG5cbiAgICAnaGVhZGVyLmRhdGVGb3JtYXQnOiAnWVlZWS1NTS1ERCcsXG4gICAgJ2hlYWRlci5ub3RlU3RhdHVzJzogJ1x1NkJDRlx1NjVFNVx1N0I0Nlx1OEExOCBbe3N0YXR1c31dJyxcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ1x1NURGMlx1NUVGQVx1N0FDQicsXG4gICAgJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCc6ICdcdTY3MkFcdTVFRkFcdTdBQ0InLFxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdcdTRFQ0FcdTY1RTVcdTcxMjZcdTlFREU6IHtmb2N1c30nLFxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKFx1NjcyQVx1OEEyRFx1NUI5QSknLFxuXG4gICAgJ2RheS5zdW4nOiAnXHU2NUU1JyxcbiAgICAnZGF5Lm1vbic6ICdcdTRFMDAnLFxuICAgICdkYXkudHVlJzogJ1x1NEU4QycsXG4gICAgJ2RheS53ZWQnOiAnXHU0RTA5JyxcbiAgICAnZGF5LnRodSc6ICdcdTU2REInLFxuICAgICdkYXkuZnJpJzogJ1x1NEU5NCcsXG4gICAgJ2RheS5zYXQnOiAnXHU1MTZEJyxcblxuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODk4Rlx1NTI4M1x1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1NjM0OScsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODY3JyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU1QzA4XHU2ODQ4JyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QTJEXHU1QjlBJyxcblxuICAgICd0YXNrLnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOScsXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcbiAgICAndGFzay5ub25lJzogJ1x1NjZBQlx1NzEyMVx1NEVGQlx1NTJEOVx1MzAwMicsXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ1x1NEVDQVx1NjVFNVx1N0I0Nlx1OEExOFx1NjcyQVx1NUVGQVx1N0FDQlx1MzAwMlx1OUVERVx1NjRDQSBbXHU4OThGXHU1MjgzXHU0RUNBXHU1OTI5XSBcdTVFRkFcdTdBQ0JcdTMwMDInLFxuXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTZEM0JcdThFOERcdTVDMDhcdTY4NDhcdTMwMDInLFxuXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEI1OFx1NUVBQlx1N0Q3MVx1OEEwOCcsXG4gICAgJ3N0YXRzLnRvdGFsTm90ZXMnOiAnXHU3RTNEXHU3QjQ2XHU4QTE4JyxcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdcdTVGODVcdTUyMDZcdTk4NUUnLFxuXG4gICAgJ3JlY2VudC50aXRsZSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDUnLFxuICAgICdyZWNlbnQuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU2RDNCXHU1MkQ1XHUzMDAyJyxcblxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVDMEVcdTgyMkEnLFxuXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJDMFx1NjE0QicsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEJcdThDQzdcdTY1OTlcdTMwMDInLFxuXG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTkwMzFcdThBMThcdTkzMDRcdTUyMDZcdTRGNDgnLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnXHU2NzJDXHU5MDMxXHU2NkFCXHU3MTIxXHU2NUU1XHU4QTE4XHU4QTE4XHU5MzA0XHUzMDAyJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IFx1Njg5RCcsXG5cbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QzBEXHU4QTcxJyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnXHU1NzI4XHU2QjY0XHU4NjU1XHU1RDRDXHU1MTY1IEFJIFx1NUMwRFx1OEE3MVx1NkFBMlx1ODk5Nlx1MzAwMlx1NzZFRVx1NTI0RFx1NEY3Rlx1NzUyOFx1NTQ3RFx1NEVFNFx1OTc2Mlx1Njc3Rlx1NjIxNlx1NTA3NFx1NkIwNFx1OTAzMlx1ODg0QyBBSSBcdTRFOTJcdTUyRDVcdTMwMDInLFxuICAgICdhaS5pbnB1dFBsYWNlaG9sZGVyJzogJ1x1OEYzOFx1NTE2NVx1NTQ3RFx1NEVFNFx1NjIxNlx1NTU0Rlx1OTg0Q1x1MjAyNlx1MjAyNicsXG4gICAgJ2FpLnNlbmQnOiAnXHU3NjdDXHU5MDAxJyxcblxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ1x1NEUwMFx1ODIyQycsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NEVDQlx1OTc2Mlx1OEE5RVx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwNzhcdTY0QzdcdTUxMDBcdTg4NjhcdTY3N0ZcdTc2ODRcdTk4NkZcdTc5M0FcdThBOUVcdThBMDBcdTMwMDInLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTU1Rlx1NTJENVx1NjY0Mlx1ODFFQVx1NTJENVx1OTU4Qlx1NTU1RicsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTk1OEJcdTU1NUYgS09TIENvY2twaXRcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnXHU1MTAwXHU4ODY4XHU2NzdGXHU1MzQwXHU1ODRBJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTUxMDBcdTg4NjhcdTY3N0ZcdTRFMEFcdTU0MDRcdTUzNDBcdTU4NEFcdTc2ODRcdTk4NkZcdTc5M0FcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ1x1OENDN1x1NjU5OVx1OTY1MFx1NTIzNicsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudCc6ICdcdTY3MDBcdTU5MjdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDVcdTY1NzgnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJzogJ1x1OTg2Rlx1NzkzQVx1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NkE5NFx1Njg0OFx1NzY4NFx1NjU3OFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ1x1NjcwMFx1NTkyN1x1NEVGQlx1NTJEOVx1NjU3OCcsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzRGVzYyc6ICdcdTk4NkZcdTc5M0FcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDlcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdcdTY3MDBcdTU5MjcgSW5ib3ggXHU2NTc4JyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ1x1OTg2Rlx1NzkzQSBJbmJveCBcdTZBOTRcdTU0MERcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdcdTk1RENcdTY1QkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uJzogJ1x1NzI0OFx1NjcyQycsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgS09TX0xMTS1XaWtpIFx1NzdFNVx1OEI1OFx1N0JBMVx1NzQwNlx1NTEwMFx1ODg2OFx1Njc3Rlx1MzAwMktPUyBcdTc1MUZcdTYxNEJcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdTMwMDInLFxuICB9LFxufTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBrZXkgdXNpbmcgdGhlIGN1cnJlbnQgbG9jYWxlLlxuICogU3VwcG9ydHMge3BsYWNlaG9sZGVyfSBzdWJzdGl0dXRpb24gdmlhIHRoZSBwYXJhbXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0KGtleSwgbG9jYWxlLCBwYXJhbXMgPSB7fSkge1xuICBjb25zdCBkaWN0ID0gTE9DQUxFU1tsb2NhbGVdIHx8IExPQ0FMRVNbJ3poLWNuJ107XG4gIGxldCB0ZXh0ID0gZGljdFtrZXldO1xuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmFsbGJhY2s6IHRyeSB6aC1jblxuICAgIHRleHQgPSBMT0NBTEVTWyd6aC1jbiddW2tleV07XG4gIH1cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBrZXk7IC8vIGxhc3QgcmVzb3J0OiBzaG93IHRoZSBrZXkgaXRzZWxmXG4gIH1cbiAgLy8gUmVwbGFjZSB7cGxhY2Vob2xkZXJzfVxuICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhwYXJhbXMpKSB7XG4gICAgdGV4dCA9IFN0cmluZyh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7JHtrfVxcXFx9YCwgJ2cnKSwgU3RyaW5nKHYpKTtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHQsIExPQ0FMRVMsIExPQ0FMRV9LRVlTOiBPYmplY3Qua2V5cyhMT0NBTEVTKSB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzaGFyZWQgdXRpbGl0aWVzXG5cbi8qKlxuICogUGFyc2UgZnJvbnRtYXR0ZXIgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICogUmV0dXJucyB7fSBpZiBubyB2YWxpZCBmcm9udG1hdHRlciBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoY29udGVudCB8fCAnJyk7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXi0tLVxcbihbXFxzXFxTXSo/KVxcbi0tLS8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG5cbiAgY29uc3Qgb3V0ID0ge307XG4gIG1hdGNoWzFdLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghaXRlbSB8fCBpdGVtLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbG9uID0gaXRlbS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGNvbG9uIDw9IDApIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBpdGVtLnNsaWNlKDAsIGNvbG9uKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gaXRlbS5zbGljZShjb2xvbiArIDEpLnRyaW0oKTtcbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkuc3BsaXQoJywnKS5tYXAoKHApID0+IHAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIG91dFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCBmcm9udG1hdHRlciB2YWx1ZSBieSBtdWx0aXBsZSBwb3NzaWJsZSBrZXkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGZtVmFsdWUoZnJvbnRtYXR0ZXIsIGtleXMsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgJiYgdHlwZW9mIGZyb250bWF0dGVyID09PSAnb2JqZWN0JyA/IGZyb250bWF0dGVyIDoge307XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZtLCBrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZtW2tleV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgICAgaWYgKHRleHQpIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogRm9ybWF0IGRhdGUgdG8gWVlZWS1NTS1ERCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGVTdHIoZGF0ZSkge1xuICBjb25zdCBkID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBLT1MgZGFpbHkgbm90ZSBwYXRoIGZvciBhIGdpdmVuIGRhdGUuXG4gKiBLT1MgY29udmVudGlvbjogUGVyaW9kaWMvWVlZWS9NTS9ZWVlZLU1NLURELm1kXG4gKi9cbmZ1bmN0aW9uIGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cikge1xuICBjb25zdCBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGBQZXJpb2RpYy8ke3BhcnRzWzBdfS8ke3BhcnRzWzFdfS8ke2RhdGVTdHJ9Lm1kYDtcbn1cblxuLyoqXG4gKiBHZXQgZmlsZSBieSBwYXRoIGZyb20gdmF1bHQsIHJldHVybmluZyBudWxsIGlmIG1pc3NpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVCeVBhdGgodmF1bHQsIHBhdGgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSByZWFkIGZpbGUgdGV4dCBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkRmlsZVRleHQodmF1bHQsIGZpbGUpIHtcbiAgaWYgKCF2YXVsdCB8fCAhZmlsZSkgcmV0dXJuICcnO1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmF1bHQuY2FjaGVkUmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKTtcbiAgICBpZiAodHlwZW9mIHZhdWx0LnJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQucmVhZChmaWxlKSB8fCAnJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0YXNrIHN0YXRzIChvcGVuL2RvbmUvdG90YWwpIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgb3BlbiA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdXFxzKy8udGVzdChsaW5lKSkge1xuICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbW3hYXVxcXVxccysvLnRlc3QobGluZSkpIGRvbmUgKz0gMTtcbiAgICAgIGVsc2Ugb3BlbiArPSAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3BlbixcbiAgICBkb25lLFxuICAgIHRvdGFsOiBvcGVuICsgZG9uZSxcbiAgICBjb21wbGV0aW9uUmF0ZTogb3BlbiArIGRvbmUgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIChvcGVuICsgZG9uZSkpICogMTAwKSA6IDAsXG4gIH07XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFuZCBjbGVhbiBhIGZpbGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gIHJldHVybiBTdHJpbmcocGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLysvZywgJy8nKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzeXN0ZW0vaW50ZXJuYWwgcGF0aCB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHN0YXRzLlxuICovXG5mdW5jdGlvbiBpc1N5c3RlbVBhdGgocGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gIGlmICgvKF58XFwvKVxcLlteL10rKFxcL3wkKS8udGVzdCh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX2xvZ3MvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX21ldGEvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGcm9udG1hdHRlcixcbiAgZm1WYWx1ZSxcbiAgZm9ybWF0RGF0ZVN0cixcbiAgZGFpbHlOb3RlUGF0aCxcbiAgZ2V0RmlsZUJ5UGF0aCxcbiAgcmVhZEZpbGVUZXh0LFxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcbiAgbm9ybWFsaXplUGF0aCxcbiAgaXNTeXN0ZW1QYXRoLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcHJvamVjdCBzY2FubmluZyBzZXJ2aWNlXG5cbmNvbnN0IHsgcGFyc2VGcm9udG1hdHRlciwgZm1WYWx1ZSwgcmVhZEZpbGVUZXh0LCB0YXNrU3RhdHNGcm9tQ29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIFNjYW4gMSBQcm9qZWN0cy8gZGlyZWN0b3JpZXMgYW5kIGJ1aWxkIGEgbGlzdCBvZiBwcm9qZWN0IG92ZXJ2aWV3IGZpbGVzLlxuICovXG5mdW5jdGlvbiBmaW5kUHJvamVjdEZpbGVzKHZhdWx0KSB7XG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gU3RyaW5nKGZpbGUucGF0aCB8fCAnJyk7XG4gICAgLy8gTWF0Y2g6IDEgUHJvamVjdHMvPHByb2plY3QtZGlyPi88cHJvamVjdC1uYW1lPi5tZFxuICAgIC8vIEV4Y2x1ZGU6IFx1OTg3OVx1NzZFRVx1NjAzQlx1ODlDOC5tZCwgUkVBRE1FLm1kXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5zcGxpdCgnLycpLmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdSRUFETUUubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdcXHVEODNEXFx1RENDRCBcXHU5ODc5XFx1NzZFRVxcdTYwM0JcXHU4OUM4Lm1kJykpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2UgcHJvamVjdCBtZXRhZGF0YSBmcm9tIGEgZmlsZSdzIGNvbnRlbnQgYW5kIE9ic2lkaWFuIG1ldGFkYXRhIGNhY2hlLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgbWV0YWRhdGFDYWNoZSkge1xuICBjb25zdCBmbSA9IHtcbiAgICAuLi5wYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpLFxuICB9O1xuXG4gIC8vIFRyeSB0byBnZXQgcmljaGVyIGZyb250bWF0dGVyIGZyb20gbWV0YWRhdGEgY2FjaGVcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZSA9IG1ldGFkYXRhQ2FjaGUgJiYgdHlwZW9mIG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmZyb250bWF0dGVyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZtLCBjYWNoZS5mcm9udG1hdHRlcik7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgY29uc3Qgc3RhdHVzID0gZm1WYWx1ZShmbSwgWydzdGF0dXMnLCAnU3RhdHVzJ10sICdhY3RpdmUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmbVZhbHVlKGZtLCBbJ3ByaW9yaXR5JywgJ1ByaW9yaXR5J10sICcnKTtcbiAgY29uc3QgaXRlcmF0aW9uID0gZm1WYWx1ZShmbSwgWydpdGVyYXRpb24nLCAnSXRlcmF0aW9uJ10sICcnKTtcbiAgY29uc3QgYXJlYSA9IGZtVmFsdWUoZm0sIFsnYXJlYScsICdBcmVhJywgJ2RvbWFpbicsICdEb21haW4nXSwgJycpO1xuICBjb25zdCB0YWdzID0gQXJyYXkuaXNBcnJheShmbS50YWdzKSA/IGZtLnRhZ3MgOiBbXTtcblxuICAvLyBDb21wdXRlIHRhc2sgcHJvZ3Jlc3MgZnJvbSB0aGUgcHJvamVjdCBmaWxlIGNvbnRlbnRcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAvLyBHZXQgcHJvamVjdCB0aXRsZSBmcm9tIGZpcnN0IGgxIG9yIGRpcmVjdG9yeSBuYW1lXG4gIGNvbnN0IGhlYWRpbmcgPSBTdHJpbmcoY29udGVudCB8fCAnJykubWF0Y2goL14jXFxzKyguKykkL20pO1xuICBjb25zdCB0aXRsZSA9IGhlYWRpbmcgPyBoZWFkaW5nWzFdLnRyaW0oKSA6IGZpbGUuYmFzZW5hbWUgfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICB0aXRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHJpb3JpdHksXG4gICAgaXRlcmF0aW9uLFxuICAgIGFyZWEsXG4gICAgdGFncyxcbiAgICB0YXNrcyxcbiAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIGN0aW1lOiBmaWxlLnN0YXQ/LmN0aW1lIHx8IDAsXG4gIH07XG59XG5cbi8qKlxuICogTGlzdCBhbGwgcHJvamVjdHMsIHdpdGggb3B0aW9uYWwgZmlsdGVyaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFjdGl2ZU9ubHkgXHUyMDE0IG9ubHkgcmV0dXJuIGFjdGl2ZSBwcm9qZWN0c1xuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0UHJvamVjdHMoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IGZpbmRQcm9qZWN0RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBhcHAubWV0YWRhdGFDYWNoZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IGFjdGl2ZSBmaXJzdCwgdGhlbiBieSBwcmlvcml0eSwgdGhlbiBieSBtdGltZVxuICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUFjdGl2ZSA9IGEuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBjb25zdCBiQWN0aXZlID0gYi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGlmIChhQWN0aXZlICE9PSBiQWN0aXZlKSByZXR1cm4gYUFjdGl2ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IHJhbmsgPSAocCkgPT4ge1xuICAgICAgY29uc3QgdiA9IFN0cmluZyhwIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHYgPT09ICdwMScgfHwgdiA9PT0gJ2hpZ2gnKSByZXR1cm4gMDtcbiAgICAgIGlmICh2ID09PSAncDInIHx8IHYgPT09ICdtZWRpdW0nKSByZXR1cm4gMTtcbiAgICAgIGlmICh2ID09PSAncDMnIHx8IHYgPT09ICdsb3cnKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAzO1xuICAgIH07XG4gICAgY29uc3QgYnlQcmlvcml0eSA9IHJhbmsoYS5wcmlvcml0eSkgLSByYW5rKGIucHJpb3JpdHkpO1xuICAgIGlmIChieVByaW9yaXR5ICE9PSAwKSByZXR1cm4gYnlQcmlvcml0eTtcbiAgICByZXR1cm4gYi5tdGltZSAtIGEubXRpbWU7XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmFjdGl2ZU9ubHkpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLnN0YXR1cyA9PT0gJ2FjdGl2ZScpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgZW5naW5lIHN0YXRlIGZyb20gX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kIChidWxsZXQtbGlzdCBmb3JtYXQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRFbmdpbmVTdGF0ZShhcHApIHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIHRyaWFnZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNvbXBpbGU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaW5rOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgZGFpbHk6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBwcm9qZWN0OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgYXJjaGl2ZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNhbnZhczogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgICdrb3MtaW5pdCc6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaWZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gIH07XG5cbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCgnX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kJyk7XG4gIGlmICghZmlsZSkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG5cbiAgLy8gU1RBVEUubWQgdXNlcyBzZWN0aW9uLWJhc2VkIGJ1bGxldCBmb3JtYXQ6XG4gIC8vICMjIHRyaWFnZVxuICAvLyAtIGxhc3RfcnVuOiAyMDI2LTA2LTA5XG4gIC8vIC0gcGVuZGluZzogMFxuICAvLyAtIHN1bW1hcnk6IEluYm94IGNsZWFyZWRcbiAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQgY3VycmVudEVuZ2luZSA9IG51bGw7XG5cbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBsaW5lLm1hdGNoKC9eIyNcXHMrKFxcUyspXFxzKiQvKTtcbiAgICBpZiAoc2VjdGlvbiAmJiBlbmdpbmVzLmluY2x1ZGVzKHNlY3Rpb25bMV0pKSB7XG4gICAgICBjdXJyZW50RW5naW5lID0gc2VjdGlvblsxXTtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXSA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRFbmdpbmUpIHJldHVybjtcbiAgICBjb25zdCBrdiA9IGxpbmUubWF0Y2goL14tXFxzKyhcXHcrKTpcXHMqKC4qKSQvKTtcbiAgICBpZiAoa3YpIHtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXVtrdlsxXV0gPSBrdlsyXS50cmltKCkgfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5vcm1hbGl6ZSB0byB7IGxhc3RSdW4sIHN0YXR1cywgc3VtbWFyeSB9IGZvciBjb2NrcGl0IGNvbnN1bXB0aW9uXG4gIGNvbnN0IHN0YXRlID0ge307XG4gIGVuZ2luZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHBhcnNlZFtlXSB8fCB7fTtcbiAgICBzdGF0ZVtlXSA9IHtcbiAgICAgIGxhc3RSdW46IHJhdy5sYXN0X3J1biB8fCByYXcubGFzdF9kYWlseSB8fCBudWxsLFxuICAgICAgc3RhdHVzOiByYXcucGVuZGluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKE51bWJlcihyYXcucGVuZGluZykgPT09IDAgPyAnZG9uZScgOiAncGVuZGluZycpXG4gICAgICAgIDogJ3BlbmRpbmcnLFxuICAgICAgc3VtbWFyeTogcmF3LnN1bW1hcnkgfHwgbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kUHJvamVjdEZpbGVzLFxuICBwYXJzZVByb2plY3QsXG4gIGxpc3RQcm9qZWN0cyxcbiAgZ2V0RW5naW5lU3RhdGUsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IFx1OTIyNT9ob21lIGRhdGEgZW5naW5lXHJcblxyXG5jb25zdCB7XHJcbiAgcGFyc2VGcm9udG1hdHRlcixcclxuICBmbVZhbHVlLFxyXG4gIGZvcm1hdERhdGVTdHIsXHJcbiAgZGFpbHlOb3RlUGF0aCxcclxuICBnZXRGaWxlQnlQYXRoLFxyXG4gIHJlYWRGaWxlVGV4dCxcclxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcclxuICBpc1N5c3RlbVBhdGgsXHJcbiAgbm9ybWFsaXplUGF0aCxcclxufSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgeyBsaXN0UHJvamVjdHMsIGdldEVuZ2luZVN0YXRlIH0gPSByZXF1aXJlKCcuL3Byb2plY3Qtc2VydmljZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0b2RheSdzIGRhaWx5IG5vdGUgc3RhdGUuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRlKGFwcCkge1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cik7XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuXHJcbiAgaWYgKCFmaWxlKSB7XHJcbiAgICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IGZhbHNlLCBmaWxlOiBudWxsLCB0YXNrczogeyBvcGVuOjAsZG9uZTowLHRvdGFsOjAsY29tcGxldGlvblJhdGU6MCB9LCB0YXNrSXRlbXM6IFtdIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcclxuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gIGNvbnN0IHRhc2tJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZXNbaV0gfHwgJycpLm1hdGNoKC9eKFxccypbLSpdXFxzK1xcWykoWyB4WF0pKFxcXVxccyspKC4rKSQvKTtcclxuICAgIGlmICghbSkgY29udGludWU7XHJcbiAgICBjb25zdCB0ZXh0ID0gbVs0XS50cmltKCk7XHJcbiAgICBpZiAoIXRleHQpIGNvbnRpbnVlO1xyXG4gICAgdGFza0l0ZW1zLnB1c2goeyBsaW5lSW5kZXg6IGksIHRleHQsIGRvbmU6IC94L2kudGVzdChtWzJdKSB9KTtcclxuICAgIGlmICh0YXNrSXRlbXMubGVuZ3RoID49IDEyKSBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgdG9kYXkncyBmb2N1cyAoZmlyc3QgaDIgb3IgYm9sZCBsaW5lIHVuZGVyICMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjYpXHJcbiAgbGV0IGZvY3VzID0gJyc7XHJcbiAgY29uc3QgZm9jdXNNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjZbXiNdKj9cXG4oLSAuKykvKTtcclxuICBpZiAoZm9jdXNNYXRjaCkgZm9jdXMgPSBmb2N1c01hdGNoWzFdLnJlcGxhY2UoL14tIC8sICcnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogdHJ1ZSwgZmlsZSwgdGFza3MsIHRhc2tJdGVtcywgZm9jdXMsIGNvbnRlbnQgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IGZpbGVzIGluIDAgSW5ib3ggKGV4Y2x1ZGluZyBfcHJvY2Vzc2VkLykuXHJcbiAqIFJldHVybnMgVEZpbGUgb2JqZWN0cyAod2l0aCAucGF0aCwgLmJhc2VuYW1lLCAuc3RhdCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmJveEZpbGVzKHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICByZXR1cm4gcC5zdGFydHNXaXRoKCcwIEluYm94LycpICYmICFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdmF1bHQgYW5kIGNvbXB1dGUga25vd2xlZGdlIGdhcmRlbiBzdGF0aXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCB8fCB0eXBlb2YgYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuICBjb25zdCB0b2RheSA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBsZXQgdG9kYXlOZXcgPSAwO1xyXG4gIGNvbnN0IHN0YXRzID0geyByb290OjAsIHByb2plY3RzOjAsIGFyZWFzOjAsIHJlc291cmNlczowLCBpbmJveDowLCBwZXJpb2RpYzowLCBzeXN0ZW06MCB9O1xyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICBpZiAocC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSBzdGF0cy5wcm9qZWN0cyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcyIEFyZWFzLycpKSBzdGF0cy5hcmVhcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCczIFJlc291cmNlcy8nKSkgc3RhdHMucmVzb3VyY2VzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykpIHsgaWYgKCFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgc3RhdHMuaW5ib3ggKz0gMTsgfVxyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgc3RhdHMucGVyaW9kaWMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnXycpIHx8IHAuc3RhcnRzV2l0aCgnLicpKSBzdGF0cy5zeXN0ZW0gKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkge31cclxuICAgIGVsc2Ugc3RhdHMucm9vdCArPSAxO1xyXG5cclxuICAgIC8vIENvdW50IHRvZGF5LW5ldyBmaWxlc1xyXG4gICAgY29uc3QgY3RpbWUgPSBmLnN0YXQ/LmN0aW1lID8gbmV3IERhdGUoZi5zdGF0LmN0aW1lKSA6IG51bGw7XHJcbiAgICBpZiAoY3RpbWUpIHtcclxuICAgICAgY29uc3QgY2QgPSBmb3JtYXREYXRlU3RyKGN0aW1lKTtcclxuICAgICAgaWYgKGNkID09PSB0b2RheSkgdG9kYXlOZXcgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgdG90YWxOb3RlczogZmlsZXMubGVuZ3RoLCB0b2RheU5ldywgc3RhdHMgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZWNlbnQgbW9kaWZpZWQgZmlsZXMgKHRvcCAxMCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZWNlbnRBY3Rpdml0eSh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpXHJcbiAgICAuZmlsdGVyKChmKSA9PiAhaXNTeXN0ZW1QYXRoKGYucGF0aCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGIuc3RhdD8ubXRpbWUgfHwgMCkgLSAoYS5zdGF0Py5tdGltZSB8fCAwKSlcclxuICAgIC5zbGljZSgwLCAyNClcclxuICAgIC5tYXAoKGYpID0+ICh7IHBhdGg6IGYucGF0aCwgdGl0bGU6IGYuYmFzZW5hbWUgfHwgJycsIG10aW1lOiBmLnN0YXQ/Lm10aW1lIHx8IDAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGhvdCBjb250ZXh0IGZyb20gX21ldGEvaG90Lm1kXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRIb3RDb250ZXh0KGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsICdfbWV0YS9ob3QubWQnKTtcclxuICBpZiAoIWZpbGUpIHJldHVybiBbXTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KVxccypbXFx1MjAxNFxcdTIwMTNcXC1dXFxzKiguKykkLyk7XHJcbiAgICBpZiAobSkgZW50cmllcy5wdXNoKHsgZGF0ZTogbVsxXSwgc3VtbWFyeTogbVsyXS50cmltKCkgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVudHJpZXMuc2xpY2UoMCwgNSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHRoZSBjdXJyZW50IHdlZWsncyBkYWlseSBub3RlcyBmb3Igd2Vla2x5IHJlY29yZCBiYXIgY2hhcnQuXHJcbiAqIFJldHVybnMgNyBjZWxscyAoTW9uLVN1bikgd2l0aCBjYXB0dXJlIGNvdW50IHBlciBkYXkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWVrbHlSZWNvcmRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7IC8vIDA9U3VuLCAxPU1vbiAuLi5cclxuICBjb25zdCBtb25kYXlPZmZzZXQgPSBkYXlPZldlZWsgPT09IDAgPyAtNiA6IDEgLSBkYXlPZldlZWs7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgZC5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBtb25kYXlPZmZzZXQgKyBpKTtcclxuICAgIGNvbnN0IGRzID0gZm9ybWF0RGF0ZVN0cihkKTtcclxuICAgIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRzKTtcclxuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gICAgICAvLyBDb3VudCBub24tdGFzaywgbm9uLWhlYWRpbmcsIG5vbi1lbXB0eSBsaW5lcyBhcyBcImNhcHR1cmVzXCJcclxuICAgICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBpZiAoL14tLS0kLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eI3sxLDZ9XFxzKy8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eKGNyZWF0ZWR8dXBkYXRlZHx0YWdzfHN0YXR1c3xwcmlvcml0eSkvaS50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFsnXFx1NjVFNScsJ1xcdTRFMDAnLCdcXHU0RThDJywnXFx1NEUwOScsJ1xcdTU2REInLCdcXHU0RTk0JywnXFx1NTE2RCddO1xyXG4gICAgY2VsbHMucHVzaCh7IGRhdGU6IGRzLCBjb3VudCwgd2Vla2RheTogd2Vla2RheXNbaV0sIGlzVG9kYXk6IGRzID09PSBmb3JtYXREYXRlU3RyKG5vdykgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSxcclxuICBnZXRJbmJveEZpbGVzLFxyXG4gIGdldERhc2hib2FyZFN0YXRzLFxyXG4gIGdldFJlY2VudEFjdGl2aXR5LFxyXG4gIGdldEhvdENvbnRleHQsXHJcbiAgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSxcclxuICBsaXN0UHJvamVjdHMsXHJcbn07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCB2OCBcdTIwMTQgQ1NTLWRyaXZlbiBuYXR1cmFsIHJlZmxvd1xuLy8gKyBTZXR0aW5ncy1hd2FyZTogc2VjdGlvbiB0b2dnbGVzLCBkYXRhIGxpbWl0cywgbG9jYWxlIGkxOG4gKHQoKSlcblxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0IH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuY29uc3Qge1xuICBnZXRUb2RheVN0YXRlLCBnZXRJbmJveEZpbGVzLCBnZXREYXNoYm9hcmRTdGF0cyxcbiAgZ2V0UmVjZW50QWN0aXZpdHksIGdldEhvdENvbnRleHQsIGdldFdlZWtseVJlY29yZHMsXG4gIGdldEVuZ2luZVN0YXRlLCBsaXN0UHJvamVjdHMsXG59ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcblxuY29uc3QgVklFV19UWVBFX0NPQ0tQSVQgPSAna29zLWNvY2twaXQtdmlldyc7XG5cbmNsYXNzIENvY2twaXRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZWFmLCBwbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCkgeyByZXR1cm4gVklFV19UWVBFX0NPQ0tQSVQ7IH1cbiAgZ2V0RGlzcGxheVRleHQoKSB7IHJldHVybiAnS09TIENvY2twaXQnOyB9XG4gIGdldEljb24oKSB7IHJldHVybiAnZ2F1Z2UnOyB9XG5cbiAgZ2V0IHNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luLnNldHRpbmdzIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBUcmFuc2xhdGUgd2l0aCBjdXJyZW50IGxvY2FsZSAqL1xuICBfdChrZXksIHBhcmFtcykge1xuICAgIHJldHVybiB0KGtleSwgdGhpcy5zZXR0aW5ncz8ubG9jYWxlIHx8ICd6aC1jbicsIHBhcmFtcyk7XG4gIH1cblxuICAvKiogRGF5IG5hbWVzIGFzIGFycmF5IGluZGV4ZWQgMD1TdW4uLjY9U2F0ICovXG4gIGdldCBfZGF5TmFtZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuX3QoJ2RheS5zdW4nKSwgdGhpcy5fdCgnZGF5Lm1vbicpLCB0aGlzLl90KCdkYXkudHVlJyksXG4gICAgICB0aGlzLl90KCdkYXkud2VkJyksIHRoaXMuX3QoJ2RheS50aHUnKSwgdGhpcy5fdCgnZGF5LmZyaScpLFxuICAgICAgdGhpcy5fdCgnZGF5LnNhdCcpLFxuICAgIF07XG4gIH1cblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgc3VwZXIub25sb2FkKCk7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5hZGRDbGFzcygna29zLWNvY2twaXQtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZW5kZXJMb2FkaW5nKCkge1xuICAgIHRoaXMuY29udGVudEVsLmlubmVySFRNTCA9XG4gICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJrb3MtY29ja3BpdC1sb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgJzxzcGFuPicgKyB0aGlzLl90KCdhcHAubG9hZGluZycpICsgJzwvc3Bhbj4nICtcbiAgICAgICc8L2Rpdj4nO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IobXNnKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xuICAgIGNvbnN0IGVyckJveCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGInKTtcbiAgICBlcnJCb3guY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnYXBwLmVycm9yJyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgaWYgKG1zZykgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IFN0cmluZyhtc2cpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgUmV0cnknIH0pO1xuICAgIHJldHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLnJlbmRlckxvYWRpbmcoKTsgdGhpcy5yZWZyZXNoKCk7IH0pO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xuICAgICAgdGhpcy5yZW5kZXJEYXNoYm9hcmQoZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignS09TIENvY2twaXQgcmVmcmVzaCBlcnJvcjonLCBlKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoZT8ubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29sbGVjdERhdGEoYXBwKSB7XG4gICAgY29uc3QgW3RvZGF5LCBwcm9qZWN0cywgc3RhdHMsIHJlY2VudCwgaG90LCB3ZWVrbHksIGVuZ2luZXMsIGluYm94RmlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0VG9kYXlTdGF0ZShhcHApLmNhdGNoKCgpID0+IG51bGwpLFxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldERhc2hib2FyZFN0YXRzKGFwcCkuY2F0Y2goKCkgPT4gKHsgdG90YWxOb3RlczowLCB0b2RheU5ldzowLCBzdGF0czp7fSB9KSksXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0UmVjZW50QWN0aXZpdHkoYXBwLnZhdWx0KSksXG4gICAgICBnZXRIb3RDb250ZXh0KGFwcCkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0V2Vla2x5UmVjb3JkcyhhcHApLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldEVuZ2luZVN0YXRlKGFwcCkuY2F0Y2goKCkgPT4gKHt9KSksXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0SW5ib3hGaWxlcyhhcHAudmF1bHQpKSxcbiAgICBdKTtcbiAgICByZXR1cm4geyB0b2RheSwgcHJvamVjdHMsIHN0YXRzLCByZWNlbnQsIGhvdCwgd2Vla2x5LCBlbmdpbmVzLCBpbmJveEZpbGVzIH07XG4gIH1cblxuICByZW5kZXJEYXNoYm9hcmQoZGF0YSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnN0IG1haW4gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcblxuICAgIHRoaXMucmVuZGVySGVhZGVyKG1haW4sIGRhdGEpO1xuICAgIHRoaXMucmVuZGVyUXVpY2tBY3Rpb25zKG1haW4pO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dUb2RheVRhc2tzICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJUb2RheVRhc2tzKG1haW4sIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VmF1bHRTdGF0cyAhPT0gZmFsc2UgfHwgdGhpcy5zZXR0aW5ncz8uc2hvd1JlY2VudEFjdGl2aXR5ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZW5kZXJUd29Db2x1bW5zKG1haW4sIGRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd05hdiAhPT0gZmFsc2UpIHRoaXMucmVuZGVyTmF2KG1haW4pO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93SW5ib3hGaWxlcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVySW5ib3hGaWxlcyhtYWluLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1Byb2plY3RDYXJkcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVyUHJvamVjdHMobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dFbmdpbmVTdGF0ZSAhPT0gZmFsc2UpIHRoaXMucmVuZGVyRW5naW5lU3RhdGUobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dXZWVrbHlDaGFydCAhPT0gZmFsc2UpIHRoaXMucmVuZGVyV2Vla2x5Q2hhcnQobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dBaUNoYXQgIT09IGZhbHNlKSB0aGlzLnJlbmRlckFJQ2hhdChtYWluKTtcbiAgfVxuXG4gIHJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBoID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1oZWFkZXInIH0pO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IGRheU5hbWVzID0gdGhpcy5fZGF5TmFtZXM7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M1ICcgKyBub3cuZm9ybWF0KHRoaXMuX3QoJ2hlYWRlci5kYXRlRm9ybWF0JykpICsgJyBcXHU2NjFGXFx1NjcxRicgKyBkYXlOYW1lc1tub3cuZGF5KCldLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1kYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gZGF0YS50b2RheT8uZXhpc3RzXG4gICAgICA/IHRoaXMuX3QoJ2hlYWRlci5ub3RlQ3JlYXRlZCcpXG4gICAgICA6IHRoaXMuX3QoJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCcpO1xuICAgIGNvbnN0IGZvY3VzVmFsID0gZGF0YS50b2RheT8uZm9jdXMgfHwgJyc7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogdGhpcy5fdCgnaGVhZGVyLm5vdGVTdGF0dXMnLCB7IHN0YXR1czogc3RhdHVzVGV4dCB9KVxuICAgICAgICArICcgIFxcdTAwQjcgICdcbiAgICAgICAgKyB0aGlzLl90KCdoZWFkZXIudG9kYXlGb2N1cycsIHsgZm9jdXM6IGZvY3VzVmFsIHx8IHRoaXMuX3QoJ2hlYWRlci5mb2N1c05vdFNldCcpIH0pLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1zdGF0dXMnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlZnJlc2hCdG4gPSBoLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1yZWZyZXNoLWJ0bicgfSk7XG4gICAgcmVmcmVzaEJ0bi5pbm5lckhUTUwgPSAnXFx1MjFCQic7XG4gICAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW5kZXJMb2FkaW5nKCk7IHRoaXMucmVmcmVzaCgpOyB9KTtcbiAgfVxuXG4gIHJlbmRlclF1aWNrQWN0aW9ucyhjb250YWluZXIpIHtcbiAgICBjb25zdCBxYSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWN0aW9ucycgfSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENDNSAnICsgdGhpcy5fdCgnYWN0aW9uLnBsYW5Ub2RheScpLCBjbWQ6ICdkYWlseS1vcGVuJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0REICcgKyB0aGlzLl90KCdhY3Rpb24uY2FwdHVyZScpLCBjbWQ6ICdjYXB0dXJlJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVERDA0ICcgKyB0aGlzLl90KCdhY3Rpb24uZGF5UmV2aWV3JyksIGNtZDogJ2RheS1yZXZpZXcnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQ0IgJyArIHRoaXMuX3QoJ2FjdGlvbi5uZXdQcm9qZWN0JyksIGNtZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzJcXHVGRTBGICcgKyB0aGlzLl90KCdhY3Rpb24udHJpYWdlJyksIGNtZDogJ3RyaWFnZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnYWN0aW9uLnNldHRpbmdzJyksIGNtZDogJ3NldHRpbmdzJyB9LFxuICAgIF07XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBxYS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWN0aW9uLWJ0bicgfSk7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBhLmxhYmVsO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmhhbmRsZVF1aWNrQWN0aW9uKGEuY21kKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVRdWlja0FjdGlvbihjbWQpIHtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgY2FzZSAnZGFpbHktb3Blbic6IHtcbiAgICAgICAgY29uc3QgeyBkYWlseU5vdGVQYXRoIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZGFpbHlOb3RlUGF0aChtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSksICcnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzZXR0aW5ncyc6IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHRoaXMuYXBwLnNldHRpbmc7XG4gICAgICAgIGlmIChzZXR0aW5nKSB7XG4gICAgICAgICAgc2V0dGluZy5vcGVuKCk7XG4gICAgICAgICAgc2V0dGluZy5vcGVuVGFiQnlJZCgna29zLWNvY2twaXQnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJ19tZXRhL2hvdC5tZCcsICcnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVG9kYXkncyBUYXNrIFBhbmVsIC0tLVxuICByZW5kZXJUb2RheVRhc2tzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLXRvZGF5LXRhc2tzJyB9KTtcbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1oZWFkZXInIH0pO1xuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1MjcwNSAnICsgdGhpcy5fdCgndGFzay50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgaWYgKGRhdGEudG9kYXk/LnRhc2tzKSB7XG4gICAgICBjb25zdCB7IG9wZW4sIGRvbmUsIHRvdGFsLCBjb21wbGV0aW9uUmF0ZSB9ID0gZGF0YS50b2RheS50YXNrcztcbiAgICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgdGV4dDogdGhpcy5fdCgndGFzay5wcm9ncmVzcycsIHsgZG9uZSwgdG90YWwsIHJhdGU6IGNvbXBsZXRpb25SYXRlIH0pLFxuICAgICAgICBjbHM6ICdrb3MtZGItdG9kYXktY291bnQgJyArICh0b3RhbCA+IDAgJiYgY29tcGxldGlvblJhdGUgPj0gMTAwID8gJ2tvcy1kYi10b2RheS1kb25lJyA6ICcnKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1saXN0JyB9KTtcbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heFRhc2tJdGVtcyB8fCAxMjtcbiAgICBjb25zdCBpdGVtcyA9IChkYXRhLnRvZGF5Py50YXNrSXRlbXMgfHwgW10pLnNsaWNlKDAsIG1heEl0ZW1zKTtcbiAgICBpZiAoIWRhdGEudG9kYXk/LmV4aXN0cykge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCd0YXNrLmRhaWx5TWlzc2luZycpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIH0gZWxzZSBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3Rhc2subm9uZScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWl0ZW0nICsgKGl0ZW0uZG9uZSA/ICcga29zLWRiLXRvZGF5LWl0ZW0tZG9uZScgOiAnJykgfSk7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWNiJyB9KS50ZXh0Q29udGVudCA9IGl0ZW0uZG9uZSA/ICdcXHUyNjExJyA6ICdcXHUyNjEwJztcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBpdGVtLnRleHQsIGNsczogJ2tvcy1kYi10b2RheS10ZXh0JyB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclByb2plY3RzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0NCICcgKyB0aGlzLl90KCdwcm9qZWN0LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBncmlkID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC1ncmlkJyB9KTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHMgfHwgW107XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdwcm9qZWN0LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LWNhcmQnIH0pO1xuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChwcm9qLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgICBjb25zdCB0aXRsZVJvdyA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtdGl0bGUtcm93JyB9KTtcbiAgICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBwcm9qLnRpdGxlIHx8ICdVbm5hbWVkJywgY2xzOiAna29zLWRiLXByb2plY3QtdGl0bGUnIH0pO1xuICAgICAgY29uc3QgcCA9IFN0cmluZyhwcm9qLnByaW9yaXR5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHApIHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBwcm9qLnByaW9yaXR5LCBjbHM6ICdrb3MtZGItYmFkZ2Uga29zLWRiLWJhZGdlLScgKyBwIH0pO1xuICAgICAgY29uc3QgcmF0ZSA9IHByb2oudGFza3M/LmNvbXBsZXRpb25SYXRlIHx8IDA7XG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9ncmVzcycsIGF0dHI6IHsgc3R5bGU6ICctLXByb2dyZXNzOicgKyByYXRlICsgJyUnIH0gfSk7XG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IChwcm9qLnRhc2tzPy5kb25lIHx8IDApICsgJy8nICsgKHByb2oudGFza3M/LnRvdGFsIHx8IDApLCBjbHM6ICdrb3MtZGItcHJvZ3Jlc3MtbGFiZWwnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyVHdvQ29sdW1ucyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBjb2xzID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jb2xzJyB9KTtcblxuICAgIC8vIC0tLSBMZWZ0OiBWYXVsdCBTdGF0cyAtLS1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gY29scy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29sJyB9KTtcbiAgICAgIGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0NBICcgKyB0aGlzLl90KCdzdGF0cy50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCBtZXRyaWNzID0gW1xuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy50b3RhbE5vdGVzJyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwKSB9LFxuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy5hY3RpdmVQcm9qZWN0cycpLCB2YWx1ZTogU3RyaW5nKChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGgpIH0sXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvZGF5TmV3JyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG9kYXlOZXcgfHwgMCkgfSxcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMucGVuZGluZ1RyaWFnZScpLCB2YWx1ZTogU3RyaW5nKChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aCkgfSxcbiAgICAgIF07XG4gICAgICBjb25zdCBncmlkID0gbGVmdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbWV0cmljcycgfSk7XG4gICAgICBtZXRyaWNzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW1ldHJpYycgfSk7XG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLW1ldHJpYy12YWwnIH0pO1xuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IG0ubGFiZWwsIGNsczogJ2tvcy1kYi1tZXRyaWMtbGFiZWwnIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRzPy5zdGF0cykge1xuICAgICAgICBjb25zdCBzID0gZGF0YS5zdGF0cy5zdGF0cztcbiAgICAgICAgY29uc3Qgc3ViU3RhdHMgPSBbXG4gICAgICAgICAgeyBsYWJlbDogJ1Byb2plY3RzJywgdmFsdWU6IFN0cmluZyhzLnByb2plY3RzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0FyZWFzJywgdmFsdWU6IFN0cmluZyhzLmFyZWFzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1Jlc291cmNlcycsIHZhbHVlOiBTdHJpbmcocy5yZXNvdXJjZXMgfHwgMCkgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUGVyaW9kaWMnLCB2YWx1ZTogU3RyaW5nKHMucGVyaW9kaWMgfHwgMCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgc3ViR3JpZCA9IGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWNzJyB9KTtcbiAgICAgICAgc3ViU3RhdHMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdWJHcmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zdWItbWV0cmljJyB9KTtcbiAgICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtLnZhbHVlLCBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYy12YWwnIH0pO1xuICAgICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcgJyArIG0ubGFiZWwsIGNsczogJ2tvcy1kYi1zdWItbWV0cmljLWxhYmVsJyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tIFJpZ2h0OiBSZWNlbnQgQWN0aXZpdHkgLS0tXG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dSZWNlbnRBY3Rpdml0eSAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gY29scy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29sJyB9KTtcbiAgICAgIHJpZ2h0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1REQwNCAnICsgdGhpcy5fdCgncmVjZW50LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IGRhdGEucmVjZW50IHx8IFtdO1xuICAgICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhSZWNlbnRJdGVtcyB8fCA4O1xuICAgICAgY29uc3QgbGlzdCA9IHJpZ2h0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1yZWNlbnQtbGlzdCcgfSk7XG4gICAgICBpZiAocmVjZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3JlY2VudC5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjZW50LnNsaWNlKDAsIG1heEl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcmVjZW50LWl0ZW0nIH0pO1xuICAgICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbW9tZW50KGl0ZW0ubXRpbWUpLmZvcm1hdCgnTU0tREQgSEg6bW0nKSwgY2xzOiAna29zLWRiLXJlY2VudC10aW1lJyB9KTtcbiAgICAgICAgICBjb25zdCBsaW5rID0gcm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiAnICAnICsgaXRlbS50aXRsZSwgY2xzOiAna29zLWRiLXJlY2VudC1saW5rJyB9KTtcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTmF2KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IG5hdiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbmF2JyB9KTtcbiAgICBuYXYuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0NcXHVERkUwICcgKyB0aGlzLl90KCduYXYudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGxpbmtzID0gbmF2LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1uYXYtbGlua3MnIH0pO1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0NcXHVERkUwIFxcdTc1MUZcXHU2RDNCJywgcGF0aDogJzIgQXJlYXMvXFx1NzUxRlxcdTZEM0IvXFx1NzUxRlxcdTZEM0InIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRDYgXFx1NUI2NlxcdTRFNjAnLCBwYXRoOiAnMiBBcmVhcy9cXHU1QjY2XFx1NEU2MC9cXHU1QjY2XFx1NEU2MCcgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENCQyBcXHU1REU1XFx1NEY1QycsIHBhdGg6ICcyIEFyZWFzL1xcdTVERTVcXHU0RjVDL1xcdTVERTVcXHU0RjVDJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0Q2IFxcdTYwM0JcXHU3RDIyXFx1NUYxNScsIHBhdGg6ICdfbWV0YS9cXHVEODNEXFx1REQxNyBcXHU3N0U1XFx1OEJDNlxcdTUxNzNcXHU4MDU0L0luZGV4L19pbmRleC16aC1jbicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RERDNFxcdUZFMEYgXFx1NUY1MlxcdTY4NjMnLCBwYXRoOiAnNCBBcmNoaXZlcycgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENFNSBJbmJveCcsIHBhdGg6ICcwIEluYm94JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdTI2OTlcXHVGRTBGIEhvdCBDYWNoZScsIHBhdGg6ICdfbWV0YS9ob3QnIH0sXG4gICAgXTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBhID0gbGlua3MuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGl0ZW0ubGFiZWwsIGNsczogJ2tvcy1kYi1uYXYtbGluaycgfSk7XG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBJbmJveCBGaWxlIExpc3QgLS0tXG4gIHJlbmRlckluYm94RmlsZXMoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgZmlsZXMgPSBkYXRhLmluYm94RmlsZXMgfHwgW107XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhJbmJveEl0ZW1zIHx8IDY7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbiBrb3MtZGItaW5ib3gnIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0U1ICcgKyB0aGlzLl90KCdpbmJveC50aXRsZScsIHsgY291bnQ6IGZpbGVzLmxlbmd0aCB9KSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1saXN0JyB9KTtcblxuICAgIGZpbGVzLnNsaWNlKDAsIG1heEl0ZW1zKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1pdGVtJyB9KTtcbiAgICAgIGNvbnN0IG5hbWUgPSByb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGZpbGUuYmFzZW5hbWUgfHwgZmlsZS5wYXRoLCBjbHM6ICdrb3MtZGItaW5ib3gtbGluaycgfSk7XG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGZpbGUucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgIGlmIChmaWxlLnN0YXQ/Lm10aW1lKSB7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbW9tZW50KGZpbGUuc3RhdC5tdGltZSkuZm9ybWF0KCdNTS1ERCBISDptbScpLCBjbHM6ICdrb3MtZGItaW5ib3gtdGltZScgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gbWF4SXRlbXMpIHtcbiAgICAgIGNvbnN0IG1vcmUgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1tb3JlJyB9KTtcbiAgICAgIG1vcmUuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRoaXMuX3QoJ2luYm94Lm1vcmUnLCB7IGNvdW50OiBmaWxlcy5sZW5ndGggLSBtYXhJdGVtcyB9KSwgY2xzOiAna29zLWRiLWluYm94LWxpbmsnIH0pXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnMCBJbmJveCcsICcnLCB0cnVlKTsgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEVuZ2luZSBTdGF0ZSBEaXNwbGF5IC0tLVxuICByZW5kZXJFbmdpbmVTdGF0ZShjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBlbmdpbmVzID0gZGF0YS5lbmdpbmVzIHx8IHt9O1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdTI2OTlcXHVGRTBGICcgKyB0aGlzLl90KCdlbmdpbmUudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuXG4gICAgY29uc3QgZ3JpZCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWVuZ2luZS1ncmlkJyB9KTtcbiAgICBjb25zdCBwcmltYXJ5RW5naW5lcyA9IFsndHJpYWdlJywgJ2NvbXBpbGUnLCAnbGluaycsICdkYWlseScsICdwcm9qZWN0JywgJ2FyY2hpdmUnXTtcbiAgICBjb25zdCBoYXNEYXRhID0gcHJpbWFyeUVuZ2luZXMuc29tZSgoZSkgPT4gZW5naW5lc1tlXT8ubGFzdFJ1biB8fCBlbmdpbmVzW2VdPy5zdW1tYXJ5KTtcblxuICAgIGlmICghaGFzRGF0YSkge1xuICAgICAgZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdlbmdpbmUuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmltYXJ5RW5naW5lcy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVuZyA9IGVuZ2luZXNba2V5XSB8fCB7fTtcbiAgICAgIGNvbnN0IGNoaXAgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2tvcy1kYi1lbmdpbmUtY2hpcCdcbiAgICAgICAgICArIChlbmcuc3RhdHVzID09PSAnZG9uZScgPyAnIGtvcy1kYi1lbmdpbmUtZG9uZScgOiAnJylcbiAgICAgICAgICArIChlbmcubGFzdFJ1biA/ICcnIDogJyBrb3MtZGItZW5naW5lLWlkbGUnKSxcbiAgICAgIH0pO1xuICAgICAgY2hpcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDoga2V5LCBjbHM6ICdrb3MtZGItZW5naW5lLW5hbWUnIH0pO1xuICAgICAgaWYgKGVuZy5sYXN0UnVuKSB7XG4gICAgICAgIGNoaXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcgJyArIGVuZy5sYXN0UnVuLnNsaWNlKDUpLCBjbHM6ICdrb3MtZGItZW5naW5lLWRhdGUnIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGVuZy5zdW1tYXJ5KSB7XG4gICAgICAgIGNoaXAuc2V0QXR0cigndGl0bGUnLCBlbmcuc3VtbWFyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDOCAnICsgdGhpcy5fdCgnd2Vla2x5LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBjaGFydCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXJ0JyB9KTtcbiAgICBjb25zdCBjZWxscyA9IGRhdGEud2Vla2x5IHx8IFtdO1xuICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4uY2VsbHMubWFwKChjKSA9PiBjLmNvdW50KSk7XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hhcnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnd2Vla2x5LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNvbCA9IGNoYXJ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1jb2wnIH0pO1xuICAgICAgaWYgKGNlbGwuaXNUb2RheSkgY29sLmFkZENsYXNzKCdrb3MtZGItY2hhcnQtdG9kYXknKTtcbiAgICAgIGNvbnN0IGJhckhlaWdodCA9IE1hdGgubWF4KDQsIChjZWxsLmNvdW50IC8gbWF4Q291bnQpICogNjApO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1iYXInLCBhdHRyOiB7IHN0eWxlOiAnaGVpZ2h0OicgKyBiYXJIZWlnaHQgKyAncHgnIH0gfSlcbiAgICAgICAgIC5zZXRBdHRyKCd0aXRsZScsIHRoaXMuX3QoJ3dlZWtseS5iYXJUb29sdGlwJywgeyBkYXRlOiBjZWxsLmRhdGUsIGNvdW50OiBjZWxsLmNvdW50IH0pKTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcoY2VsbC5jb3VudCksIGNsczogJ2tvcy1kYi1jaGFydC12YWwnIH0pO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IGNlbGwud2Vla2RheSwgY2xzOiAna29zLWRiLWNoYXJ0LWRheScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJBSUNoYXQoY29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbiBrb3MtZGItYWknIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0VcXHVERDE2ICcgKyB0aGlzLl90KCdhaS50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgYm9keSA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLWJvZHknIH0pO1xuICAgIGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnYWkucGxhY2Vob2xkZXInKSwgY2xzOiAna29zLWRiLWFpLXBsYWNlaG9sZGVyJyB9KTtcbiAgICBjb25zdCBpbnB1dFJvdyA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLWlucHV0LXJvdycgfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICBjbHM6ICdrb3MtZGItYWktaW5wdXQnLFxuICAgICAgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdhaS5pbnB1dFBsYWNlaG9sZGVyJykgfSxcbiAgICB9KTtcbiAgICBjb25zdCBzZW5kQnRuID0gaW5wdXRSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLXNlbmQnLCB0ZXh0OiB0aGlzLl90KCdhaS5zZW5kJykgfSk7XG5cbiAgICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJ19tZXRhL2hvdC5tZCcsICcnLCB0cnVlKTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHNlbmRCdG4uY2xpY2soKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29ja3BpdFZpZXcsIFZJRVdfVFlQRV9DT0NLUElUIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHNldHRpbmdzIHRhYlxuXG5jb25zdCB7IFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IHQsIExPQ0FMRV9LRVlTIH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTID0ge1xuICAvLyBHZW5lcmFsXG4gIGxvY2FsZTogJ3poLWNuJyxcbiAgYXV0b09wZW46IHRydWUsXG5cbiAgLy8gRGFzaGJvYXJkIHNlY3Rpb24gdmlzaWJpbGl0eVxuICBzaG93VG9kYXlUYXNrczogdHJ1ZSxcbiAgc2hvd0luYm94RmlsZXM6IHRydWUsXG4gIHNob3dFbmdpbmVTdGF0ZTogdHJ1ZSxcbiAgc2hvd1dlZWtseUNoYXJ0OiB0cnVlLFxuICBzaG93QWlDaGF0OiB0cnVlLFxuICBzaG93UHJvamVjdENhcmRzOiB0cnVlLFxuICBzaG93UmVjZW50QWN0aXZpdHk6IHRydWUsXG4gIHNob3dWYXVsdFN0YXRzOiB0cnVlLFxuICBzaG93TmF2OiB0cnVlLFxuXG4gIC8vIERhdGEgbGltaXRzXG4gIG1heFJlY2VudEl0ZW1zOiA4LFxuICBtYXhUYXNrSXRlbXM6IDEyLFxuICBtYXhJbmJveEl0ZW1zOiA2LFxufTtcblxuY2xhc3MgQ29ja3BpdFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgY29uc3RydWN0b3IoYXBwLCBwbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvKiogSGVscGVyOiB0cmFuc2xhdGUgdXNpbmcgY3VycmVudCBsb2NhbGUgKi9cbiAgX3Qoa2V5LCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdChrZXksIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSwgcGFyYW1zKTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgdGhpcy5yZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFib3V0U2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICByZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZ2VuZXJhbCcpIH0pO1xuXG4gICAgLy8gTGFuZ3VhZ2Ugc2VsZWN0b3JcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLmxhbmd1YWdlJykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5sYW5ndWFnZURlc2MnKSlcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKCd6aC1jbicsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaENOJykpXG4gICAgICAgICAgLmFkZE9wdGlvbignZW4nLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nRW4nKSlcbiAgICAgICAgICAuYWRkT3B0aW9uKCd6aC10dycsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaFRXJykpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIC8vIFJlLXJlbmRlciBzZXR0aW5ncyB0YWIgd2l0aCBuZXcgbGFuZ3VhZ2VcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBBdXRvLW9wZW4gdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW5EZXNjJykpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvT3BlbilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyRGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZGFzaGJvYXJkJykgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJyksXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAgICB7IGtleTogJ3Nob3dUb2RheVRhc2tzJywgbmFtZUtleTogJ3NldHRpbmdzLnNob3dUb2RheVRhc2tzJywgbmFtZTogJ1RvZGF5XFwncyBUYXNrcycsIGRlc2M6ICdEYWlseSBub3RlIHRhc2sgbGlzdCBhbmQgcHJvZ3Jlc3MuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93UHJvamVjdENhcmRzJywgbmFtZTogJ0FjdGl2ZSBQcm9qZWN0cycsIGRlc2M6ICdQcm9qZWN0IGNhcmRzIHdpdGggcHJpb3JpdHkgYW5kIHByb2dyZXNzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1ZhdWx0U3RhdHMnLCBuYW1lOiAnVmF1bHQgU3RhdGlzdGljcycsIGRlc2M6ICdUb3RhbCBub3RlcywgYWN0aXZlIHByb2plY3RzLCBpbmJveCBjb3VudC4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dSZWNlbnRBY3Rpdml0eScsIG5hbWU6ICdSZWNlbnQgQWN0aXZpdHknLCBkZXNjOiAnUmVjZW50bHkgbW9kaWZpZWQgZmlsZXMuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93TmF2JywgbmFtZTogJ05hdmlnYXRpb24nLCBkZXNjOiAnUXVpY2sgbGlua3MgdG8gYXJlYXMsIGluYm94LCBob3QgY2FjaGUuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93SW5ib3hGaWxlcycsIG5hbWU6ICdJbmJveCBGaWxlcycsIGRlc2M6ICdMaXN0IG9mIHBlbmRpbmcgZmlsZXMgaW4gMCBJbmJveC8uJyB9LFxuICAgICAgeyBrZXk6ICdzaG93RW5naW5lU3RhdGUnLCBuYW1lOiAnRW5naW5lIFN0YXRlJywgZGVzYzogJ1RyaWFnZS9Db21waWxlL0xpbmsgZW5naW5lIHN0YXR1cyBjaGlwcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dXZWVrbHlDaGFydCcsIG5hbWU6ICdXZWVrbHkgQ2hhcnQnLCBkZXNjOiAnQmFyIGNoYXJ0IG9mIHdlZWtseSBkYWlseS1ub3RlIGNhcHR1cmVzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd0FpQ2hhdCcsIG5hbWU6ICdBSSBDaGF0JywgZGVzYzogJ0FJIGNoYXQgaW5wdXQgcGxhY2Vob2xkZXIuJyB9LFxuICAgIF07XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGtleSwgbmFtZSwgZGVzYyB9KSA9PiB7XG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgLnNldERlc2MoZGVzYylcbiAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzW2tleV0pXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXRhTGltaXRzJykgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFJlY2VudCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4UmVjZW50RGVzYycpKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzgnKVxuICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4UmVjZW50SXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMywgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA4KSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrcycpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4VGFza3NEZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignMTInKVxuICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4VGFza0l0ZW1zKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgMTIpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4SW5ib3hEZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignNicpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgNikpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4SW5ib3hJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyQWJvdXRTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5hYm91dCcpIH0pO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBkZXNjLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbkRlc2MnKSxcbiAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbicpKVxuICAgICAgLnNldERlc2MoZGVzYyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRTZXR0aW5nVGFiLCBERUZBVUxUX1NFVFRJTkdTIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHBsdWdpbiBlbnRyeSBwb2ludFxuXG5jb25zdCB7IFBsdWdpbiB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcbmNvbnN0IHsgQ29ja3BpdFZpZXcsIFZJRVdfVFlQRV9DT0NLUElUIH0gPSByZXF1aXJlKCcuL2NvY2twaXQtdmlldycpO1xuY29uc3QgeyBDb2NrcGl0U2V0dGluZ1RhYiwgREVGQVVMVF9TRVRUSU5HUyB9ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy10YWInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBLb3NDb2NrcGl0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3MgPSB7IC4uLkRFRkFVTFRfU0VUVElOR1MgfTtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgLy8gTG9hZCBzYXZlZCBzZXR0aW5nc1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgY3VzdG9tIHZpZXcsIHBhc3NpbmcgdGhlIHBsdWdpbiByZWZlcmVuY2VcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhWSUVXX1RZUEVfQ09DS1BJVCwgKGxlYWYpID0+IG5ldyBDb2NrcGl0VmlldyhsZWFmLCB0aGlzKSk7XG5cbiAgICAvLyBBZGQgcmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ2dhdWdlJywgJ09wZW4gS09TIENvY2twaXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db2NrcGl0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgY29tbWFuZCB0byBvcGVuIGNvY2twaXRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdPcGVuIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5Db2NrcGl0KCksXG4gICAgfSk7XG5cbiAgICAvLyBBZGQgY29tbWFuZCB0byByZWZyZXNoIGNvY2twaXRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZWZyZXNoLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdSZWZyZXNoIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hDb2NrcGl0KCksXG4gICAgfSk7XG5cbiAgICAvLyBSZWdpc3RlciBzZXR0aW5ncyB0YWJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENvY2twaXRTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAvLyBPcGVuIHRoZSBjb2NrcGl0IGF1dG9tYXRpY2FsbHkgb24gbGF5b3V0IHJlYWR5XG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9uTGF5b3V0UmVhZHkoKCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPT09IDAgJiYgdGhpcy5zZXR0aW5ncy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5Db2NrcGl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBvcGVuQ29ja3BpdCgpIHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICBjb25zdCBleGlzdGluZyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB3b3Jrc3BhY2UucmV2ZWFsTGVhZihleGlzdGluZ1swXSk7XG4gICAgICBjb25zdCB2aWV3ID0gZXhpc3RpbmdbMF0udmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXdhaXQgdmlldy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKHRydWUpO1xuICAgIGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHtcbiAgICAgIHR5cGU6IFZJRVdfVFlQRV9DT0NLUElULFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaENvY2twaXQoKSB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXdhaXQgdmlldy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBzYXZlZCk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICAvLyBOb3RpZnkgb3BlbiB2aWV3cyBvZiBzZXR0aW5ncyBjaGFuZ2VcbiAgICB0aGlzLnJlZnJlc2hDb2NrcGl0KCk7XG4gIH1cblxuICBvbnVubG9hZCgpIHtcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKS5mb3JFYWNoKChsZWFmKSA9PiB7XG4gICAgICBsZWFmLmRldGFjaCgpO1xuICAgIH0pO1xuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQSxrQkFBQUEsVUFBQUMsU0FBQTtBQUdBLFFBQU0sVUFBVTtBQUFBLE1BQ2QsU0FBUztBQUFBO0FBQUEsUUFFUCxZQUFZO0FBQUEsUUFDWixlQUFlO0FBQUEsUUFDZixhQUFhO0FBQUE7QUFBQSxRQUdiLHFCQUFxQjtBQUFBLFFBQ3JCLHFCQUFxQjtBQUFBLFFBQ3JCLHNCQUFzQjtBQUFBLFFBQ3RCLHlCQUF5QjtBQUFBLFFBQ3pCLHFCQUFxQjtBQUFBLFFBQ3JCLHNCQUFzQjtBQUFBO0FBQUEsUUFHdEIsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFHWCxv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QU0sZUFBZTtBQUNuQixVQUFNLFFBQVEsTUFBTSxLQUFLLFNBQVM7QUFDbEMsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLEtBQUs7QUFBQSxFQUMzRDtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUVqQyxTQUFLLGVBQWU7QUFBQSxFQUN0QjtBQUFBLEVBRUEsV0FBVztBQUNULFNBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FBUztBQUN0RSxXQUFLLE9BQU87QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlZJRVdfVFlQRV9DT0NLUElUIiwgIkNvY2twaXRWaWV3IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkRFRkFVTFRfU0VUVElOR1MiLCAiQ29ja3BpdFNldHRpbmdUYWIiXQp9Cg==
