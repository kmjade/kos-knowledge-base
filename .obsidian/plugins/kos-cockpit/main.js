var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
      async onload() {
        super.onload();
        this.contentEl.empty();
        this.contentEl.addClass("kos-cockpit-container");
        this.renderLoading();
        await this.refresh();
      }
      renderLoading() {
        this.contentEl.innerHTML = `
      <div class="kos-cockpit-loading">
        <div class="kos-cockpit-loading-spinner"></div>
        <span>Loading KOS Cockpit...</span>
      </div>`;
      }
      renderError(msg) {
        this.contentEl.empty();
        this.contentEl.createEl("div", { cls: "kos-db" });
        const errBox = this.contentEl.querySelector(".kos-db");
        errBox.createEl("div", { text: "Something went wrong loading the cockpit.", cls: "kos-db-empty" });
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
        const dayNames = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
        h.createEl("div", { text: `\u{1F4C5} ${now.format("YYYY-MM-DD")} \u661F\u671F${dayNames[now.day()]}`, cls: "kos-db-header-date" });
        const statusText = data.today?.exists ? "\u5DF2\u521B\u5EFA" : "\u672A\u521B\u5EFA";
        const focusVal = data.today?.focus || "";
        h.createEl("div", { text: `\u6BCF\u65E5\u7B14\u8BB0 [${statusText}]  \xB7  \u4ECA\u65E5\u805A\u7126: ${focusVal || "(\u672A\u8BBE\u5B9A)"}`, cls: "kos-db-header-status" });
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
          { label: "\u{1F4C5} \u89C4\u5212\u4ECA\u5929", cmd: "daily-open" },
          { label: "\u{1F4DD} \u5FEB\u901F\u6355\u83B7", cmd: "capture" },
          { label: "\u{1F504} \u6BCF\u65E5\u56DE\u987E", cmd: "day-review" },
          { label: "\u{1F4CB} \u65B0\u5EFA\u9879\u76EE", cmd: "project" },
          { label: "\u{1F5C2}\uFE0F Triage", cmd: "triage" },
          { label: "\u2699\uFE0F \u8BBE\u7F6E", cmd: "settings" }
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
        header.createEl("div", { text: "\u2705 \u4ECA\u65E5\u4EFB\u52A1", cls: "kos-db-section-title" });
        if (data.today?.tasks) {
          const { open, done, total, completionRate } = data.today.tasks;
          header.createEl("span", {
            text: `${done}/${total} (${completionRate}%)`,
            cls: `kos-db-today-count ${total > 0 && completionRate >= 100 ? "kos-db-today-done" : ""}`
          });
        }
        const list = section.createEl("div", { cls: "kos-db-today-list" });
        const maxItems = this.settings?.maxTaskItems || 12;
        const items = (data.today?.taskItems || []).slice(0, maxItems);
        if (!data.today?.exists) {
          list.createEl("div", { text: "\u4ECA\u65E5\u7B14\u8BB0\u672A\u521B\u5EFA\u3002\u70B9\u51FB [\u89C4\u5212\u4ECA\u5929] \u521B\u5EFA\u3002", cls: "kos-db-empty" });
        } else if (items.length === 0) {
          list.createEl("div", { text: "\u6682\u65E0\u4EFB\u52A1\u3002", cls: "kos-db-empty" });
        } else {
          items.forEach((item) => {
            const row = list.createEl("div", { cls: `kos-db-today-item ${item.done ? "kos-db-today-item-done" : ""}` });
            const checkbox = row.createEl("span", { cls: "kos-db-today-cb" });
            checkbox.textContent = item.done ? "\u2611" : "\u2610";
            row.createEl("span", { text: item.text, cls: "kos-db-today-text" });
          });
        }
      }
      renderProjects(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u{1F4CB} \u6D3B\u8DC3\u9879\u76EE", cls: "kos-db-section-title" });
        const grid = section.createEl("div", { cls: "kos-db-project-grid" });
        const projects = data.projects || [];
        if (projects.length === 0) {
          grid.createEl("div", { text: "\u6682\u65E0\u6D3B\u8DC3\u9879\u76EE\u3002", cls: "kos-db-empty" });
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
          if (p) titleRow.createEl("span", { text: proj.priority, cls: `kos-db-badge kos-db-badge-${p}` });
          const rate = proj.tasks?.completionRate || 0;
          card.createEl("div", { cls: "kos-db-progress", attr: { style: `--progress:${rate}%` } });
          card.createEl("div", { text: `${proj.tasks?.done || 0}/${proj.tasks?.total || 0}`, cls: "kos-db-progress-label" });
        });
      }
      renderTwoColumns(container, data) {
        const cols = container.createEl("div", { cls: "kos-db-cols" });
        if (this.settings?.showVaultStats !== false) {
          const left = cols.createEl("div", { cls: "kos-db-col" });
          left.createEl("div", { text: "\u{1F4CA} \u77E5\u8BC6\u5E93\u7EDF\u8BA1", cls: "kos-db-section-title" });
          const total = data.stats?.totalNotes || 0;
          const todayNew = data.stats?.todayNew || 0;
          const activeCount = (data.projects || []).length;
          const inboxCount = (data.inboxFiles || []).length;
          const metrics = [
            { label: "\u603B\u7B14\u8BB0", value: String(total) },
            { label: "\u6D3B\u8DC3\u9879\u76EE", value: String(activeCount) },
            { label: "\u4ECA\u65E5\u65B0\u589E", value: String(todayNew) },
            { label: "\u5F85\u5206\u62E3", value: String(inboxCount) }
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
              item.createEl("span", { text: ` ${m.label}`, cls: "kos-db-sub-metric-label" });
            });
          }
        }
        if (this.settings?.showRecentActivity !== false) {
          const right = cols.createEl("div", { cls: "kos-db-col" });
          right.createEl("div", { text: "\u{1F504} \u6700\u8FD1\u6D3B\u52A8", cls: "kos-db-section-title" });
          const recent = data.recent || [];
          const maxItems = this.settings?.maxRecentItems || 8;
          const list = right.createEl("div", { cls: "kos-db-recent-list" });
          if (recent.length === 0) {
            list.createEl("div", { text: "\u6682\u65E0\u6D3B\u52A8\u3002", cls: "kos-db-empty" });
          } else {
            recent.slice(0, maxItems).forEach((item) => {
              const row = list.createEl("div", { cls: "kos-db-recent-item" });
              row.createEl("span", { text: moment(item.mtime).format("MM-DD HH:mm"), cls: "kos-db-recent-time" });
              const link = row.createEl("a", { text: `  ${item.title}`, cls: "kos-db-recent-link" });
              link.addEventListener("click", () => {
                this.app.workspace.openLinkText(item.path, "", true);
              });
            });
          }
        }
      }
      renderNav(container) {
        const nav = container.createEl("div", { cls: "kos-db-nav" });
        nav.createEl("div", { text: "\u{1F3E0} \u4E09\u652F\u67F1 \xB7 \u5BFC\u822A", cls: "kos-db-section-title" });
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
        section.createEl("div", { text: `\u{1F4E5} Inbox (${files.length})`, cls: "kos-db-section-title" });
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
          more.createEl("a", { text: `+${files.length - maxItems} more...`, cls: "kos-db-inbox-link" }).addEventListener("click", () => {
            this.app.workspace.openLinkText("0 Inbox", "", true);
          });
        }
      }
      // --- Engine State Display ---
      renderEngineState(container, data) {
        const engines = data.engines || {};
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u2699\uFE0F \u5F15\u64CE\u72B6\u6001", cls: "kos-db-section-title" });
        const grid = section.createEl("div", { cls: "kos-db-engine-grid" });
        const primaryEngines = ["triage", "compile", "link", "daily", "project", "archive"];
        const hasData = primaryEngines.some((e) => engines[e]?.lastRun || engines[e]?.summary);
        if (!hasData) {
          grid.createEl("div", { text: "\u6682\u65E0\u5F15\u64CE\u72B6\u6001\u6570\u636E\u3002", cls: "kos-db-empty" });
          return;
        }
        primaryEngines.forEach((key) => {
          const eng = engines[key] || {};
          const chip = grid.createEl("div", {
            cls: `kos-db-engine-chip ${eng.status === "done" ? "kos-db-engine-done" : ""} ${eng.lastRun ? "" : "kos-db-engine-idle"}`
          });
          chip.createEl("span", { text: key, cls: "kos-db-engine-name" });
          if (eng.lastRun) {
            chip.createEl("span", { text: ` ${eng.lastRun.slice(5)}`, cls: "kos-db-engine-date" });
          }
          if (eng.summary) {
            chip.setAttr("title", eng.summary);
          }
        });
      }
      renderWeeklyChart(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section" });
        section.createEl("div", { text: "\u{1F4C8} \u672C\u5468\u8BB0\u5F55\u5206\u5E03", cls: "kos-db-section-title" });
        const chart = section.createEl("div", { cls: "kos-db-chart" });
        const cells = data.weekly || [];
        const maxCount = Math.max(1, ...cells.map((c) => c.count));
        if (cells.length === 0) {
          chart.createEl("div", { text: "\u672C\u5468\u6682\u65E0\u65E5\u8BB0\u8BB0\u5F55\u3002", cls: "kos-db-empty" });
          return;
        }
        cells.forEach((cell) => {
          const col = chart.createEl("div", { cls: "kos-db-chart-col" });
          if (cell.isToday) col.addClass("kos-db-chart-today");
          const barHeight = Math.max(4, cell.count / maxCount * 60);
          col.createEl("div", { cls: "kos-db-chart-bar", attr: { style: `height:${barHeight}px` } }).setAttr("title", `${cell.date}: ${cell.count} \u6761`);
          col.createEl("div", { text: String(cell.count), cls: "kos-db-chart-val" });
          col.createEl("div", { text: cell.weekday, cls: "kos-db-chart-day" });
        });
      }
      renderAIChat(container) {
        const section = container.createEl("div", { cls: "kos-db-section kos-db-ai" });
        section.createEl("div", { text: "\u{1F916} AI \u5BF9\u8BDD", cls: "kos-db-section-title" });
        const body = section.createEl("div", { cls: "kos-db-ai-body" });
        body.createEl("div", {
          text: "\u5728\u6B64\u5904\u5D4C\u5165 Codex / FLOWnote AI \u5BF9\u8BDD\u89C6\u56FE\u3002\u76EE\u524D\u4F7F\u7528\u547D\u4EE4\u9762\u677F\u6216\u4FA7\u680F\u8FDB\u884C AI \u4EA4\u4E92\u3002",
          cls: "kos-db-ai-placeholder"
        });
        const inputRow = body.createEl("div", { cls: "kos-db-ai-input-row" });
        const input = inputRow.createEl("input", {
          cls: "kos-db-ai-input",
          attr: { type: "text", placeholder: "\u8F93\u5165\u547D\u4EE4\u6216\u95EE\u9898\u2026\u2026" }
        });
        const sendBtn = inputRow.createEl("button", { cls: "kos-db-ai-send", text: "\u53D1\u9001" });
        sendBtn.addEventListener("click", () => {
          const val = input.value.trim();
          if (!val) return;
          this.app.workspace.openLinkText("_meta/hot.md", "", true);
          input.value = "";
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            sendBtn.click();
          }
        });
      }
    };
    module2.exports = { CockpitView: CockpitView2, VIEW_TYPE_COCKPIT: VIEW_TYPE_COCKPIT2 };
  }
});

// src/settings-tab.js
var require_settings_tab = __commonJS({
  "src/settings-tab.js"(exports2, module2) {
    var { PluginSettingTab, Setting, moment } = require("obsidian");
    var DEFAULT_SETTINGS2 = {
      // General
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
      display() {
        const { containerEl } = this;
        containerEl.empty();
        this.renderGeneralSection(containerEl);
        this.renderDashboardSection(containerEl);
        this.renderDataLimitsSection(containerEl);
        this.renderAboutSection(containerEl);
      }
      renderGeneralSection(containerEl) {
        containerEl.createEl("h3", { text: "General" });
        new Setting(containerEl).setName("Auto-open on startup").setDesc("Automatically open the KOS Cockpit when Obsidian starts.").addToggle(
          (toggle) => toggle.setValue(this.plugin.settings.autoOpen).onChange(async (v) => {
            this.plugin.settings.autoOpen = v;
            await this.plugin.saveSettings();
          })
        );
      }
      renderDashboardSection(containerEl) {
        containerEl.createEl("h3", { text: "Dashboard Sections" });
        containerEl.createEl("p", {
          text: "Toggle which sections appear on the cockpit dashboard.",
          cls: "setting-item-description"
        });
        const sections = [
          { key: "showTodayTasks", name: "Today's Tasks", desc: "Daily note task list and progress." },
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
        containerEl.createEl("h3", { text: "Data Limits" });
        new Setting(containerEl).setName("Max recent items").setDesc("Number of recently modified files to show (max 20).").addText(
          (text) => text.setPlaceholder("8").setValue(String(this.plugin.settings.maxRecentItems)).onChange(async (v) => {
            const val = Math.max(3, Math.min(20, Number(v) || 8));
            this.plugin.settings.maxRecentItems = val;
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName("Max task items").setDesc("Number of daily-note tasks to show (max 20).").addText(
          (text) => text.setPlaceholder("12").setValue(String(this.plugin.settings.maxTaskItems)).onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 12));
            this.plugin.settings.maxTaskItems = val;
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName("Max inbox items").setDesc("Number of inbox file names to show (max 20).").addText(
          (text) => text.setPlaceholder("6").setValue(String(this.plugin.settings.maxInboxItems)).onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 6));
            this.plugin.settings.maxInboxItems = val;
            await this.plugin.saveSettings();
          })
        );
      }
      renderAboutSection(containerEl) {
        containerEl.createEl("h3", { text: "About" });
        const desc = document.createDocumentFragment();
        desc.createEl("span", {
          text: "KOS Cockpit v0.2.0 \u2014 A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem."
        });
        new Setting(containerEl).setName("Version").setDesc(desc);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzLmpzIiwgInNyYy9wcm9qZWN0LXNlcnZpY2UuanMiLCAic3JjL2hvbWUtc2VydmljZS5qcyIsICJzcmMvY29ja3BpdC12aWV3LmpzIiwgInNyYy9zZXR0aW5ncy10YWIuanMiLCAic3JjL21haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzaGFyZWQgdXRpbGl0aWVzXG5cbi8qKlxuICogUGFyc2UgZnJvbnRtYXR0ZXIgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICogUmV0dXJucyB7fSBpZiBubyB2YWxpZCBmcm9udG1hdHRlciBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoY29udGVudCB8fCAnJyk7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXi0tLVxcbihbXFxzXFxTXSo/KVxcbi0tLS8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG5cbiAgY29uc3Qgb3V0ID0ge307XG4gIG1hdGNoWzFdLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghaXRlbSB8fCBpdGVtLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbG9uID0gaXRlbS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGNvbG9uIDw9IDApIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBpdGVtLnNsaWNlKDAsIGNvbG9uKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gaXRlbS5zbGljZShjb2xvbiArIDEpLnRyaW0oKTtcbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkuc3BsaXQoJywnKS5tYXAoKHApID0+IHAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIG91dFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCBmcm9udG1hdHRlciB2YWx1ZSBieSBtdWx0aXBsZSBwb3NzaWJsZSBrZXkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGZtVmFsdWUoZnJvbnRtYXR0ZXIsIGtleXMsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgJiYgdHlwZW9mIGZyb250bWF0dGVyID09PSAnb2JqZWN0JyA/IGZyb250bWF0dGVyIDoge307XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZtLCBrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZtW2tleV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgICAgaWYgKHRleHQpIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogRm9ybWF0IGRhdGUgdG8gWVlZWS1NTS1ERCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGVTdHIoZGF0ZSkge1xuICBjb25zdCBkID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBLT1MgZGFpbHkgbm90ZSBwYXRoIGZvciBhIGdpdmVuIGRhdGUuXG4gKiBLT1MgY29udmVudGlvbjogUGVyaW9kaWMvWVlZWS9NTS9ZWVlZLU1NLURELm1kXG4gKi9cbmZ1bmN0aW9uIGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cikge1xuICBjb25zdCBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGBQZXJpb2RpYy8ke3BhcnRzWzBdfS8ke3BhcnRzWzFdfS8ke2RhdGVTdHJ9Lm1kYDtcbn1cblxuLyoqXG4gKiBHZXQgZmlsZSBieSBwYXRoIGZyb20gdmF1bHQsIHJldHVybmluZyBudWxsIGlmIG1pc3NpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVCeVBhdGgodmF1bHQsIHBhdGgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSByZWFkIGZpbGUgdGV4dCBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkRmlsZVRleHQodmF1bHQsIGZpbGUpIHtcbiAgaWYgKCF2YXVsdCB8fCAhZmlsZSkgcmV0dXJuICcnO1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmF1bHQuY2FjaGVkUmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKTtcbiAgICBpZiAodHlwZW9mIHZhdWx0LnJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQucmVhZChmaWxlKSB8fCAnJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0YXNrIHN0YXRzIChvcGVuL2RvbmUvdG90YWwpIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgb3BlbiA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdXFxzKy8udGVzdChsaW5lKSkge1xuICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbW3hYXVxcXVxccysvLnRlc3QobGluZSkpIGRvbmUgKz0gMTtcbiAgICAgIGVsc2Ugb3BlbiArPSAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3BlbixcbiAgICBkb25lLFxuICAgIHRvdGFsOiBvcGVuICsgZG9uZSxcbiAgICBjb21wbGV0aW9uUmF0ZTogb3BlbiArIGRvbmUgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIChvcGVuICsgZG9uZSkpICogMTAwKSA6IDAsXG4gIH07XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFuZCBjbGVhbiBhIGZpbGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gIHJldHVybiBTdHJpbmcocGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLysvZywgJy8nKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzeXN0ZW0vaW50ZXJuYWwgcGF0aCB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHN0YXRzLlxuICovXG5mdW5jdGlvbiBpc1N5c3RlbVBhdGgocGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gIGlmICgvKF58XFwvKVxcLlteL10rKFxcL3wkKS8udGVzdCh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX2xvZ3MvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX21ldGEvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGcm9udG1hdHRlcixcbiAgZm1WYWx1ZSxcbiAgZm9ybWF0RGF0ZVN0cixcbiAgZGFpbHlOb3RlUGF0aCxcbiAgZ2V0RmlsZUJ5UGF0aCxcbiAgcmVhZEZpbGVUZXh0LFxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcbiAgbm9ybWFsaXplUGF0aCxcbiAgaXNTeXN0ZW1QYXRoLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcHJvamVjdCBzY2FubmluZyBzZXJ2aWNlXG5cbmNvbnN0IHsgcGFyc2VGcm9udG1hdHRlciwgZm1WYWx1ZSwgcmVhZEZpbGVUZXh0LCB0YXNrU3RhdHNGcm9tQ29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIFNjYW4gMSBQcm9qZWN0cy8gZGlyZWN0b3JpZXMgYW5kIGJ1aWxkIGEgbGlzdCBvZiBwcm9qZWN0IG92ZXJ2aWV3IGZpbGVzLlxuICovXG5mdW5jdGlvbiBmaW5kUHJvamVjdEZpbGVzKHZhdWx0KSB7XG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gU3RyaW5nKGZpbGUucGF0aCB8fCAnJyk7XG4gICAgLy8gTWF0Y2g6IDEgUHJvamVjdHMvPHByb2plY3QtZGlyPi88cHJvamVjdC1uYW1lPi5tZFxuICAgIC8vIEV4Y2x1ZGU6IFx1OTg3OVx1NzZFRVx1NjAzQlx1ODlDOC5tZCwgUkVBRE1FLm1kXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5zcGxpdCgnLycpLmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdSRUFETUUubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdcXHVEODNEXFx1RENDRCBcXHU5ODc5XFx1NzZFRVxcdTYwM0JcXHU4OUM4Lm1kJykpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2UgcHJvamVjdCBtZXRhZGF0YSBmcm9tIGEgZmlsZSdzIGNvbnRlbnQgYW5kIE9ic2lkaWFuIG1ldGFkYXRhIGNhY2hlLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgbWV0YWRhdGFDYWNoZSkge1xuICBjb25zdCBmbSA9IHtcbiAgICAuLi5wYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpLFxuICB9O1xuXG4gIC8vIFRyeSB0byBnZXQgcmljaGVyIGZyb250bWF0dGVyIGZyb20gbWV0YWRhdGEgY2FjaGVcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZSA9IG1ldGFkYXRhQ2FjaGUgJiYgdHlwZW9mIG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmZyb250bWF0dGVyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZtLCBjYWNoZS5mcm9udG1hdHRlcik7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgY29uc3Qgc3RhdHVzID0gZm1WYWx1ZShmbSwgWydzdGF0dXMnLCAnU3RhdHVzJ10sICdhY3RpdmUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmbVZhbHVlKGZtLCBbJ3ByaW9yaXR5JywgJ1ByaW9yaXR5J10sICcnKTtcbiAgY29uc3QgaXRlcmF0aW9uID0gZm1WYWx1ZShmbSwgWydpdGVyYXRpb24nLCAnSXRlcmF0aW9uJ10sICcnKTtcbiAgY29uc3QgYXJlYSA9IGZtVmFsdWUoZm0sIFsnYXJlYScsICdBcmVhJywgJ2RvbWFpbicsICdEb21haW4nXSwgJycpO1xuICBjb25zdCB0YWdzID0gQXJyYXkuaXNBcnJheShmbS50YWdzKSA/IGZtLnRhZ3MgOiBbXTtcblxuICAvLyBDb21wdXRlIHRhc2sgcHJvZ3Jlc3MgZnJvbSB0aGUgcHJvamVjdCBmaWxlIGNvbnRlbnRcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAvLyBHZXQgcHJvamVjdCB0aXRsZSBmcm9tIGZpcnN0IGgxIG9yIGRpcmVjdG9yeSBuYW1lXG4gIGNvbnN0IGhlYWRpbmcgPSBTdHJpbmcoY29udGVudCB8fCAnJykubWF0Y2goL14jXFxzKyguKykkL20pO1xuICBjb25zdCB0aXRsZSA9IGhlYWRpbmcgPyBoZWFkaW5nWzFdLnRyaW0oKSA6IGZpbGUuYmFzZW5hbWUgfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICB0aXRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHJpb3JpdHksXG4gICAgaXRlcmF0aW9uLFxuICAgIGFyZWEsXG4gICAgdGFncyxcbiAgICB0YXNrcyxcbiAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIGN0aW1lOiBmaWxlLnN0YXQ/LmN0aW1lIHx8IDAsXG4gIH07XG59XG5cbi8qKlxuICogTGlzdCBhbGwgcHJvamVjdHMsIHdpdGggb3B0aW9uYWwgZmlsdGVyaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFjdGl2ZU9ubHkgXHUyMDE0IG9ubHkgcmV0dXJuIGFjdGl2ZSBwcm9qZWN0c1xuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0UHJvamVjdHMoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IGZpbmRQcm9qZWN0RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBhcHAubWV0YWRhdGFDYWNoZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IGFjdGl2ZSBmaXJzdCwgdGhlbiBieSBwcmlvcml0eSwgdGhlbiBieSBtdGltZVxuICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUFjdGl2ZSA9IGEuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBjb25zdCBiQWN0aXZlID0gYi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGlmIChhQWN0aXZlICE9PSBiQWN0aXZlKSByZXR1cm4gYUFjdGl2ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IHJhbmsgPSAocCkgPT4ge1xuICAgICAgY29uc3QgdiA9IFN0cmluZyhwIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHYgPT09ICdwMScgfHwgdiA9PT0gJ2hpZ2gnKSByZXR1cm4gMDtcbiAgICAgIGlmICh2ID09PSAncDInIHx8IHYgPT09ICdtZWRpdW0nKSByZXR1cm4gMTtcbiAgICAgIGlmICh2ID09PSAncDMnIHx8IHYgPT09ICdsb3cnKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAzO1xuICAgIH07XG4gICAgY29uc3QgYnlQcmlvcml0eSA9IHJhbmsoYS5wcmlvcml0eSkgLSByYW5rKGIucHJpb3JpdHkpO1xuICAgIGlmIChieVByaW9yaXR5ICE9PSAwKSByZXR1cm4gYnlQcmlvcml0eTtcbiAgICByZXR1cm4gYi5tdGltZSAtIGEubXRpbWU7XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmFjdGl2ZU9ubHkpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLnN0YXR1cyA9PT0gJ2FjdGl2ZScpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgZW5naW5lIHN0YXRlIGZyb20gX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kIChidWxsZXQtbGlzdCBmb3JtYXQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRFbmdpbmVTdGF0ZShhcHApIHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIHRyaWFnZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNvbXBpbGU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaW5rOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgZGFpbHk6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBwcm9qZWN0OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgYXJjaGl2ZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNhbnZhczogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgICdrb3MtaW5pdCc6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaWZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gIH07XG5cbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCgnX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kJyk7XG4gIGlmICghZmlsZSkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG5cbiAgLy8gU1RBVEUubWQgdXNlcyBzZWN0aW9uLWJhc2VkIGJ1bGxldCBmb3JtYXQ6XG4gIC8vICMjIHRyaWFnZVxuICAvLyAtIGxhc3RfcnVuOiAyMDI2LTA2LTA5XG4gIC8vIC0gcGVuZGluZzogMFxuICAvLyAtIHN1bW1hcnk6IEluYm94IGNsZWFyZWRcbiAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQgY3VycmVudEVuZ2luZSA9IG51bGw7XG5cbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBsaW5lLm1hdGNoKC9eIyNcXHMrKFxcUyspXFxzKiQvKTtcbiAgICBpZiAoc2VjdGlvbiAmJiBlbmdpbmVzLmluY2x1ZGVzKHNlY3Rpb25bMV0pKSB7XG4gICAgICBjdXJyZW50RW5naW5lID0gc2VjdGlvblsxXTtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXSA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRFbmdpbmUpIHJldHVybjtcbiAgICBjb25zdCBrdiA9IGxpbmUubWF0Y2goL14tXFxzKyhcXHcrKTpcXHMqKC4qKSQvKTtcbiAgICBpZiAoa3YpIHtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXVtrdlsxXV0gPSBrdlsyXS50cmltKCkgfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5vcm1hbGl6ZSB0byB7IGxhc3RSdW4sIHN0YXR1cywgc3VtbWFyeSB9IGZvciBjb2NrcGl0IGNvbnN1bXB0aW9uXG4gIGNvbnN0IHN0YXRlID0ge307XG4gIGVuZ2luZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHBhcnNlZFtlXSB8fCB7fTtcbiAgICBzdGF0ZVtlXSA9IHtcbiAgICAgIGxhc3RSdW46IHJhdy5sYXN0X3J1biB8fCByYXcubGFzdF9kYWlseSB8fCBudWxsLFxuICAgICAgc3RhdHVzOiByYXcucGVuZGluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKE51bWJlcihyYXcucGVuZGluZykgPT09IDAgPyAnZG9uZScgOiAncGVuZGluZycpXG4gICAgICAgIDogJ3BlbmRpbmcnLFxuICAgICAgc3VtbWFyeTogcmF3LnN1bW1hcnkgfHwgbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kUHJvamVjdEZpbGVzLFxuICBwYXJzZVByb2plY3QsXG4gIGxpc3RQcm9qZWN0cyxcbiAgZ2V0RW5naW5lU3RhdGUsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IFx1OTIyNT9ob21lIGRhdGEgZW5naW5lXHJcblxyXG5jb25zdCB7XHJcbiAgcGFyc2VGcm9udG1hdHRlcixcclxuICBmbVZhbHVlLFxyXG4gIGZvcm1hdERhdGVTdHIsXHJcbiAgZGFpbHlOb3RlUGF0aCxcclxuICBnZXRGaWxlQnlQYXRoLFxyXG4gIHJlYWRGaWxlVGV4dCxcclxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcclxuICBpc1N5c3RlbVBhdGgsXHJcbiAgbm9ybWFsaXplUGF0aCxcclxufSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgeyBsaXN0UHJvamVjdHMsIGdldEVuZ2luZVN0YXRlIH0gPSByZXF1aXJlKCcuL3Byb2plY3Qtc2VydmljZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0b2RheSdzIGRhaWx5IG5vdGUgc3RhdGUuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRlKGFwcCkge1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cik7XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuXHJcbiAgaWYgKCFmaWxlKSB7XHJcbiAgICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IGZhbHNlLCBmaWxlOiBudWxsLCB0YXNrczogeyBvcGVuOjAsZG9uZTowLHRvdGFsOjAsY29tcGxldGlvblJhdGU6MCB9LCB0YXNrSXRlbXM6IFtdIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcclxuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gIGNvbnN0IHRhc2tJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZXNbaV0gfHwgJycpLm1hdGNoKC9eKFxccypbLSpdXFxzK1xcWykoWyB4WF0pKFxcXVxccyspKC4rKSQvKTtcclxuICAgIGlmICghbSkgY29udGludWU7XHJcbiAgICBjb25zdCB0ZXh0ID0gbVs0XS50cmltKCk7XHJcbiAgICBpZiAoIXRleHQpIGNvbnRpbnVlO1xyXG4gICAgdGFza0l0ZW1zLnB1c2goeyBsaW5lSW5kZXg6IGksIHRleHQsIGRvbmU6IC94L2kudGVzdChtWzJdKSB9KTtcclxuICAgIGlmICh0YXNrSXRlbXMubGVuZ3RoID49IDEyKSBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgdG9kYXkncyBmb2N1cyAoZmlyc3QgaDIgb3IgYm9sZCBsaW5lIHVuZGVyICMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjYpXHJcbiAgbGV0IGZvY3VzID0gJyc7XHJcbiAgY29uc3QgZm9jdXNNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjZbXiNdKj9cXG4oLSAuKykvKTtcclxuICBpZiAoZm9jdXNNYXRjaCkgZm9jdXMgPSBmb2N1c01hdGNoWzFdLnJlcGxhY2UoL14tIC8sICcnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogdHJ1ZSwgZmlsZSwgdGFza3MsIHRhc2tJdGVtcywgZm9jdXMsIGNvbnRlbnQgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IGZpbGVzIGluIDAgSW5ib3ggKGV4Y2x1ZGluZyBfcHJvY2Vzc2VkLykuXHJcbiAqIFJldHVybnMgVEZpbGUgb2JqZWN0cyAod2l0aCAucGF0aCwgLmJhc2VuYW1lLCAuc3RhdCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmJveEZpbGVzKHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICByZXR1cm4gcC5zdGFydHNXaXRoKCcwIEluYm94LycpICYmICFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdmF1bHQgYW5kIGNvbXB1dGUga25vd2xlZGdlIGdhcmRlbiBzdGF0aXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCB8fCB0eXBlb2YgYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuICBjb25zdCB0b2RheSA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBsZXQgdG9kYXlOZXcgPSAwO1xyXG4gIGNvbnN0IHN0YXRzID0geyByb290OjAsIHByb2plY3RzOjAsIGFyZWFzOjAsIHJlc291cmNlczowLCBpbmJveDowLCBwZXJpb2RpYzowLCBzeXN0ZW06MCB9O1xyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICBpZiAocC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSBzdGF0cy5wcm9qZWN0cyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcyIEFyZWFzLycpKSBzdGF0cy5hcmVhcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCczIFJlc291cmNlcy8nKSkgc3RhdHMucmVzb3VyY2VzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykpIHsgaWYgKCFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgc3RhdHMuaW5ib3ggKz0gMTsgfVxyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgc3RhdHMucGVyaW9kaWMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnXycpIHx8IHAuc3RhcnRzV2l0aCgnLicpKSBzdGF0cy5zeXN0ZW0gKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkge31cclxuICAgIGVsc2Ugc3RhdHMucm9vdCArPSAxO1xyXG5cclxuICAgIC8vIENvdW50IHRvZGF5LW5ldyBmaWxlc1xyXG4gICAgY29uc3QgY3RpbWUgPSBmLnN0YXQ/LmN0aW1lID8gbmV3IERhdGUoZi5zdGF0LmN0aW1lKSA6IG51bGw7XHJcbiAgICBpZiAoY3RpbWUpIHtcclxuICAgICAgY29uc3QgY2QgPSBmb3JtYXREYXRlU3RyKGN0aW1lKTtcclxuICAgICAgaWYgKGNkID09PSB0b2RheSkgdG9kYXlOZXcgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgdG90YWxOb3RlczogZmlsZXMubGVuZ3RoLCB0b2RheU5ldywgc3RhdHMgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZWNlbnQgbW9kaWZpZWQgZmlsZXMgKHRvcCAxMCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZWNlbnRBY3Rpdml0eSh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpXHJcbiAgICAuZmlsdGVyKChmKSA9PiAhaXNTeXN0ZW1QYXRoKGYucGF0aCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGIuc3RhdD8ubXRpbWUgfHwgMCkgLSAoYS5zdGF0Py5tdGltZSB8fCAwKSlcclxuICAgIC5zbGljZSgwLCAyNClcclxuICAgIC5tYXAoKGYpID0+ICh7IHBhdGg6IGYucGF0aCwgdGl0bGU6IGYuYmFzZW5hbWUgfHwgJycsIG10aW1lOiBmLnN0YXQ/Lm10aW1lIHx8IDAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGhvdCBjb250ZXh0IGZyb20gX21ldGEvaG90Lm1kXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRIb3RDb250ZXh0KGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsICdfbWV0YS9ob3QubWQnKTtcclxuICBpZiAoIWZpbGUpIHJldHVybiBbXTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KVxccypbXFx1MjAxNFxcdTIwMTNcXC1dXFxzKiguKykkLyk7XHJcbiAgICBpZiAobSkgZW50cmllcy5wdXNoKHsgZGF0ZTogbVsxXSwgc3VtbWFyeTogbVsyXS50cmltKCkgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVudHJpZXMuc2xpY2UoMCwgNSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHRoZSBjdXJyZW50IHdlZWsncyBkYWlseSBub3RlcyBmb3Igd2Vla2x5IHJlY29yZCBiYXIgY2hhcnQuXHJcbiAqIFJldHVybnMgNyBjZWxscyAoTW9uLVN1bikgd2l0aCBjYXB0dXJlIGNvdW50IHBlciBkYXkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWVrbHlSZWNvcmRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7IC8vIDA9U3VuLCAxPU1vbiAuLi5cclxuICBjb25zdCBtb25kYXlPZmZzZXQgPSBkYXlPZldlZWsgPT09IDAgPyAtNiA6IDEgLSBkYXlPZldlZWs7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgZC5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBtb25kYXlPZmZzZXQgKyBpKTtcclxuICAgIGNvbnN0IGRzID0gZm9ybWF0RGF0ZVN0cihkKTtcclxuICAgIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRzKTtcclxuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gICAgICAvLyBDb3VudCBub24tdGFzaywgbm9uLWhlYWRpbmcsIG5vbi1lbXB0eSBsaW5lcyBhcyBcImNhcHR1cmVzXCJcclxuICAgICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBpZiAoL14tLS0kLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eI3sxLDZ9XFxzKy8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eKGNyZWF0ZWR8dXBkYXRlZHx0YWdzfHN0YXR1c3xwcmlvcml0eSkvaS50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFsnXFx1NjVFNScsJ1xcdTRFMDAnLCdcXHU0RThDJywnXFx1NEUwOScsJ1xcdTU2REInLCdcXHU0RTk0JywnXFx1NTE2RCddO1xyXG4gICAgY2VsbHMucHVzaCh7IGRhdGU6IGRzLCBjb3VudCwgd2Vla2RheTogd2Vla2RheXNbaV0sIGlzVG9kYXk6IGRzID09PSBmb3JtYXREYXRlU3RyKG5vdykgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSxcclxuICBnZXRJbmJveEZpbGVzLFxyXG4gIGdldERhc2hib2FyZFN0YXRzLFxyXG4gIGdldFJlY2VudEFjdGl2aXR5LFxyXG4gIGdldEhvdENvbnRleHQsXHJcbiAgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSxcclxuICBsaXN0UHJvamVjdHMsXHJcbn07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCB2NyBcdTIwMTQgQ1NTLWRyaXZlbiBuYXR1cmFsIHJlZmxvdyAoRkxPV25vdGUgcGF0dGVybilcbi8vICsgU2V0dGluZ3MtYXdhcmU6IHNlY3Rpb24gdG9nZ2xlcywgZGF0YSBsaW1pdHMsIHBsdWdpbiByZWZcblxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3Qge1xuICBnZXRUb2RheVN0YXRlLCBnZXRJbmJveEZpbGVzLCBnZXREYXNoYm9hcmRTdGF0cyxcbiAgZ2V0UmVjZW50QWN0aXZpdHksIGdldEhvdENvbnRleHQsIGdldFdlZWtseVJlY29yZHMsXG4gIGdldEVuZ2luZVN0YXRlLCBsaXN0UHJvamVjdHMsXG59ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcblxuY29uc3QgVklFV19UWVBFX0NPQ0tQSVQgPSAna29zLWNvY2twaXQtdmlldyc7XG5cbmNsYXNzIENvY2twaXRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZWFmLCBwbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCkgeyByZXR1cm4gVklFV19UWVBFX0NPQ0tQSVQ7IH1cbiAgZ2V0RGlzcGxheVRleHQoKSB7IHJldHVybiAnS09TIENvY2twaXQnOyB9XG4gIGdldEljb24oKSB7IHJldHVybiAnZ2F1Z2UnOyB9XG5cbiAgZ2V0IHNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luLnNldHRpbmdzIDogbnVsbDtcbiAgfVxuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBzdXBlci5vbmxvYWQoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC1jb250YWluZXInKTtcbiAgICB0aGlzLnJlbmRlckxvYWRpbmcoKTtcbiAgICBhd2FpdCB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHJlbmRlckxvYWRpbmcoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj5Mb2FkaW5nIEtPUyBDb2NrcGl0Li4uPC9zcGFuPlxuICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIHJlbmRlckVycm9yKG1zZykge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcbiAgICBjb25zdCBlcnJCb3ggPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWRiJyk7XG4gICAgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdTb21ldGhpbmcgd2VudCB3cm9uZyBsb2FkaW5nIHRoZSBjb2NrcGl0LicsIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgaWYgKG1zZykgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IFN0cmluZyhtc2cpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgUmV0cnknIH0pO1xuICAgIHJldHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLnJlbmRlckxvYWRpbmcoKTsgdGhpcy5yZWZyZXNoKCk7IH0pO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xuICAgICAgdGhpcy5yZW5kZXJEYXNoYm9hcmQoZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignS09TIENvY2twaXQgcmVmcmVzaCBlcnJvcjonLCBlKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoZT8ubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29sbGVjdERhdGEoYXBwKSB7XG4gICAgY29uc3QgW3RvZGF5LCBwcm9qZWN0cywgc3RhdHMsIHJlY2VudCwgaG90LCB3ZWVrbHksIGVuZ2luZXMsIGluYm94RmlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0VG9kYXlTdGF0ZShhcHApLmNhdGNoKCgpID0+IG51bGwpLFxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldERhc2hib2FyZFN0YXRzKGFwcCkuY2F0Y2goKCkgPT4gKHsgdG90YWxOb3RlczowLCB0b2RheU5ldzowLCBzdGF0czp7fSB9KSksXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0UmVjZW50QWN0aXZpdHkoYXBwLnZhdWx0KSksXG4gICAgICBnZXRIb3RDb250ZXh0KGFwcCkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0V2Vla2x5UmVjb3JkcyhhcHApLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldEVuZ2luZVN0YXRlKGFwcCkuY2F0Y2goKCkgPT4gKHt9KSksXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0SW5ib3hGaWxlcyhhcHAudmF1bHQpKSxcbiAgICBdKTtcbiAgICByZXR1cm4geyB0b2RheSwgcHJvamVjdHMsIHN0YXRzLCByZWNlbnQsIGhvdCwgd2Vla2x5LCBlbmdpbmVzLCBpbmJveEZpbGVzIH07XG4gIH1cblxuICByZW5kZXJEYXNoYm9hcmQoZGF0YSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnN0IG1haW4gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcblxuICAgIHRoaXMucmVuZGVySGVhZGVyKG1haW4sIGRhdGEpO1xuICAgIHRoaXMucmVuZGVyUXVpY2tBY3Rpb25zKG1haW4pO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dUb2RheVRhc2tzICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJUb2RheVRhc2tzKG1haW4sIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VmF1bHRTdGF0cyAhPT0gZmFsc2UgfHwgdGhpcy5zZXR0aW5ncz8uc2hvd1JlY2VudEFjdGl2aXR5ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZW5kZXJUd29Db2x1bW5zKG1haW4sIGRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd05hdiAhPT0gZmFsc2UpIHRoaXMucmVuZGVyTmF2KG1haW4pO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93SW5ib3hGaWxlcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVySW5ib3hGaWxlcyhtYWluLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1Byb2plY3RDYXJkcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVyUHJvamVjdHMobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dFbmdpbmVTdGF0ZSAhPT0gZmFsc2UpIHRoaXMucmVuZGVyRW5naW5lU3RhdGUobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dXZWVrbHlDaGFydCAhPT0gZmFsc2UpIHRoaXMucmVuZGVyV2Vla2x5Q2hhcnQobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dBaUNoYXQgIT09IGZhbHNlKSB0aGlzLnJlbmRlckFJQ2hhdChtYWluKTtcbiAgfVxuXG4gIHJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBoID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1oZWFkZXInIH0pO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IGRheU5hbWVzID0gWydcXHU2NUU1JywnXFx1NEUwMCcsJ1xcdTRFOEMnLCdcXHU0RTA5JywnXFx1NTZEQicsJ1xcdTRFOTQnLCdcXHU1MTZEJ107XG4gICAgaC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBgXFx1RDgzRFxcdURDQzUgJHtub3cuZm9ybWF0KCdZWVlZLU1NLUREJyl9IFxcdTY2MUZcXHU2NzFGJHtkYXlOYW1lc1tub3cuZGF5KCldfWAsIGNsczogJ2tvcy1kYi1oZWFkZXItZGF0ZScgfSk7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGRhdGEudG9kYXk/LmV4aXN0cyA/ICdcXHU1REYyXFx1NTIxQlxcdTVFRkEnIDogJ1xcdTY3MkFcXHU1MjFCXFx1NUVGQSc7XG4gICAgY29uc3QgZm9jdXNWYWwgPSBkYXRhLnRvZGF5Py5mb2N1cyB8fCAnJztcbiAgICBoLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IGBcXHU2QkNGXFx1NjVFNVxcdTdCMTRcXHU4QkIwIFske3N0YXR1c1RleHR9XSAgXFx1MDBCNyAgXFx1NEVDQVxcdTY1RTVcXHU4MDVBXFx1NzEyNjogJHtmb2N1c1ZhbCB8fCAnKFxcdTY3MkFcXHU4QkJFXFx1NUI5QSknfWAsIGNsczogJ2tvcy1kYi1oZWFkZXItc3RhdHVzJyB9KTtcbiAgICBjb25zdCByZWZyZXNoQnRuID0gaC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItcmVmcmVzaC1idG4nIH0pO1xuICAgIHJlZnJlc2hCdG4uaW5uZXJIVE1MID0gJ1xcdTIxQkInO1xuICAgIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XG4gIH1cblxuICByZW5kZXJRdWlja0FjdGlvbnMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcWEgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFjdGlvbnMnIH0pO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQzUgXFx1ODlDNFxcdTUyMTJcXHU0RUNBXFx1NTkyOScsIGNtZDogJ2RhaWx5LW9wZW4nIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDREQgXFx1NUZFQlxcdTkwMUZcXHU2MzU1XFx1ODNCNycsIGNtZDogJ2NhcHR1cmUnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREMDQgXFx1NkJDRlxcdTY1RTVcXHU1NkRFXFx1OTg3RScsIGNtZDogJ2RheS1yZXZpZXcnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQ0IgXFx1NjVCMFxcdTVFRkFcXHU5ODc5XFx1NzZFRScsIGNtZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzJcXHVGRTBGIFRyaWFnZScsIGNtZDogJ3RyaWFnZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiBcXHU4QkJFXFx1N0Y2RScsIGNtZDogJ3NldHRpbmdzJyB9LFxuICAgIF07XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBxYS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWN0aW9uLWJ0bicgfSk7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBhLmxhYmVsO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVF1aWNrQWN0aW9uKGEuY21kKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUXVpY2tBY3Rpb24oY21kKSB7XG4gICAgc3dpdGNoIChjbWQpIHtcbiAgICAgIGNhc2UgJ2RhaWx5LW9wZW4nOiB7XG4gICAgICAgIGNvbnN0IHsgZGFpbHlOb3RlUGF0aCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGRhaWx5Tm90ZVBhdGgobW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykpLCAnJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2V0dGluZ3MnOiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB0aGlzLmFwcC5zZXR0aW5nO1xuICAgICAgICBpZiAoc2V0dGluZykge1xuICAgICAgICAgIHNldHRpbmcub3BlbigpO1xuICAgICAgICAgIHNldHRpbmcub3BlblRhYkJ5SWQoJ2tvcy1jb2NrcGl0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KCdfbWV0YS9ob3QubWQnLCAnJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRvZGF5J3MgVGFzayBQYW5lbCAtLS1cbiAgcmVuZGVyVG9kYXlUYXNrcyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uIGtvcy1kYi10b2RheS10YXNrcycgfSk7XG4gICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItdG9kYXktaGVhZGVyJyB9KTtcbiAgICBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdTI3MDUgXFx1NEVDQVxcdTY1RTVcXHU0RUZCXFx1NTJBMScsIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBpZiAoZGF0YS50b2RheT8udGFza3MpIHtcbiAgICAgIGNvbnN0IHsgb3BlbiwgZG9uZSwgdG90YWwsIGNvbXBsZXRpb25SYXRlIH0gPSBkYXRhLnRvZGF5LnRhc2tzO1xuICAgICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHtkb25lfS8ke3RvdGFsfSAoJHtjb21wbGV0aW9uUmF0ZX0lKWAsXG4gICAgICAgIGNsczogYGtvcy1kYi10b2RheS1jb3VudCAke3RvdGFsID4gMCAmJiBjb21wbGV0aW9uUmF0ZSA+PSAxMDAgPyAna29zLWRiLXRvZGF5LWRvbmUnIDogJyd9YCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1saXN0JyB9KTtcbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heFRhc2tJdGVtcyB8fCAxMjtcbiAgICBjb25zdCBpdGVtcyA9IChkYXRhLnRvZGF5Py50YXNrSXRlbXMgfHwgW10pLnNsaWNlKDAsIG1heEl0ZW1zKTtcbiAgICBpZiAoIWRhdGEudG9kYXk/LmV4aXN0cykge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1NEVDQVxcdTY1RTVcXHU3QjE0XFx1OEJCMFxcdTY3MkFcXHU1MjFCXFx1NUVGQVxcdTMwMDJcXHU3MEI5XFx1NTFGQiBbXFx1ODlDNFxcdTUyMTJcXHU0RUNBXFx1NTkyOV0gXFx1NTIxQlxcdTVFRkFcXHUzMDAyJywgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1NjY4MlxcdTY1RTBcXHU0RUZCXFx1NTJBMVxcdTMwMDInLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiBga29zLWRiLXRvZGF5LWl0ZW0gJHtpdGVtLmRvbmUgPyAna29zLWRiLXRvZGF5LWl0ZW0tZG9uZScgOiAnJ31gIH0pO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWNiJyB9KTtcbiAgICAgICAgY2hlY2tib3gudGV4dENvbnRlbnQgPSBpdGVtLmRvbmUgPyAnXFx1MjYxMScgOiAnXFx1MjYxMCc7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogaXRlbS50ZXh0LCBjbHM6ICdrb3MtZGItdG9kYXktdGV4dCcgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQcm9qZWN0cyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDQiBcXHU2RDNCXFx1OERDM1xcdTk4NzlcXHU3NkVFJywgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGdyaWQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LWdyaWQnIH0pO1xuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cyB8fCBbXTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHU2NjgyXFx1NjVFMFxcdTZEM0JcXHU4REMzXFx1OTg3OVxcdTc2RUVcXHUzMDAyJywgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtY2FyZCcgfSk7XG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHByb2oucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgIGNvbnN0IHRpdGxlUm93ID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC10aXRsZS1yb3cnIH0pO1xuICAgICAgdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHByb2oudGl0bGUgfHwgJ1VubmFtZWQnLCBjbHM6ICdrb3MtZGItcHJvamVjdC10aXRsZScgfSk7XG4gICAgICBjb25zdCBwID0gU3RyaW5nKHByb2oucHJpb3JpdHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocCkgdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHByb2oucHJpb3JpdHksIGNsczogYGtvcy1kYi1iYWRnZSBrb3MtZGItYmFkZ2UtJHtwfWAgfSk7XG4gICAgICBjb25zdCByYXRlID0gcHJvai50YXNrcz8uY29tcGxldGlvblJhdGUgfHwgMDtcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2dyZXNzJywgYXR0cjogeyBzdHlsZTogYC0tcHJvZ3Jlc3M6JHtyYXRlfSVgIH0gfSk7XG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IGAke3Byb2oudGFza3M/LmRvbmUgfHwgMH0vJHtwcm9qLnRhc2tzPy50b3RhbCB8fCAwfWAsIGNsczogJ2tvcy1kYi1wcm9ncmVzcy1sYWJlbCcgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJUd29Db2x1bW5zKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IGNvbHMgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbHMnIH0pO1xuXG4gICAgLy8gLS0tIExlZnQ6IFZhdWx0IFN0YXRzIC0tLVxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VmF1bHRTdGF0cyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBjb2xzLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jb2wnIH0pO1xuICAgICAgbGVmdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDQ0EgXFx1NzdFNVxcdThCQzZcXHU1RTkzXFx1N0VERlxcdThCQTEnLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCB0b3RhbCA9IGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMDtcbiAgICAgIGNvbnN0IHRvZGF5TmV3ID0gZGF0YS5zdGF0cz8udG9kYXlOZXcgfHwgMDtcbiAgICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gKGRhdGEucHJvamVjdHMgfHwgW10pLmxlbmd0aDtcbiAgICAgIGNvbnN0IGluYm94Q291bnQgPSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGg7XG4gICAgICBjb25zdCBtZXRyaWNzID0gW1xuICAgICAgICB7IGxhYmVsOiAnXFx1NjAzQlxcdTdCMTRcXHU4QkIwJywgdmFsdWU6IFN0cmluZyh0b3RhbCkgfSxcbiAgICAgICAgeyBsYWJlbDogJ1xcdTZEM0JcXHU4REMzXFx1OTg3OVxcdTc2RUUnLCB2YWx1ZTogU3RyaW5nKGFjdGl2ZUNvdW50KSB9LFxuICAgICAgICB7IGxhYmVsOiAnXFx1NEVDQVxcdTY1RTVcXHU2NUIwXFx1NTg5RScsIHZhbHVlOiBTdHJpbmcodG9kYXlOZXcpIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcXHU1Rjg1XFx1NTIwNlxcdTYyRTMnLCB2YWx1ZTogU3RyaW5nKGluYm94Q291bnQpIH0sXG4gICAgICBdO1xuICAgICAgY29uc3QgZ3JpZCA9IGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW1ldHJpY3MnIH0pO1xuICAgICAgbWV0cmljcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1tZXRyaWMnIH0pO1xuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IG0udmFsdWUsIGNsczogJ2tvcy1kYi1tZXRyaWMtdmFsJyB9KTtcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBtLmxhYmVsLCBjbHM6ICdrb3MtZGItbWV0cmljLWxhYmVsJyB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0cz8uc3RhdHMpIHtcbiAgICAgICAgY29uc3QgcyA9IGRhdGEuc3RhdHMuc3RhdHM7XG4gICAgICAgIGNvbnN0IHN1YlN0YXRzID0gW1xuICAgICAgICAgIHsgbGFiZWw6ICdQcm9qZWN0cycsIHZhbHVlOiBTdHJpbmcocy5wcm9qZWN0cyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdBcmVhcycsIHZhbHVlOiBTdHJpbmcocy5hcmVhcyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdSZXNvdXJjZXMnLCB2YWx1ZTogU3RyaW5nKHMucmVzb3VyY2VzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1BlcmlvZGljJywgdmFsdWU6IFN0cmluZyhzLnBlcmlvZGljIHx8IDApIH0sXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHN1YkdyaWQgPSBsZWZ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zdWItbWV0cmljcycgfSk7XG4gICAgICAgIHN1YlN0YXRzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3ViR3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYycgfSk7XG4gICAgICAgICAgaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWMtdmFsJyB9KTtcbiAgICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgICR7bS5sYWJlbH1gLCBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYy1sYWJlbCcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLSBSaWdodDogUmVjZW50IEFjdGl2aXR5IC0tLVxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93UmVjZW50QWN0aXZpdHkgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCByaWdodCA9IGNvbHMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbCcgfSk7XG4gICAgICByaWdodC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdUREMDQgXFx1NjcwMFxcdThGRDFcXHU2RDNCXFx1NTJBOCcsIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IGRhdGEucmVjZW50IHx8IFtdO1xuICAgICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhSZWNlbnRJdGVtcyB8fCA4O1xuICAgICAgY29uc3QgbGlzdCA9IHJpZ2h0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1yZWNlbnQtbGlzdCcgfSk7XG4gICAgICBpZiAocmVjZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHU2NjgyXFx1NjVFMFxcdTZEM0JcXHU1MkE4XFx1MzAwMicsIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNlbnQuc2xpY2UoMCwgbWF4SXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1yZWNlbnQtaXRlbScgfSk7XG4gICAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtb21lbnQoaXRlbS5tdGltZSkuZm9ybWF0KCdNTS1ERCBISDptbScpLCBjbHM6ICdrb3MtZGItcmVjZW50LXRpbWUnIH0pO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSByb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGAgICR7aXRlbS50aXRsZX1gLCBjbHM6ICdrb3MtZGItcmVjZW50LWxpbmsnIH0pO1xuICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJOYXYoY29udGFpbmVyKSB7XG4gICAgY29uc3QgbmF2ID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1uYXYnIH0pO1xuICAgIG5hdi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzQ1xcdURGRTAgXFx1NEUwOVxcdTY1MkZcXHU2N0YxIFxcdTAwQjcgXFx1NUJGQ1xcdTgyMkEnLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgbGlua3MgPSBuYXYuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW5hdi1saW5rcycgfSk7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzQ1xcdURGRTAgXFx1NzUxRlxcdTZEM0InLCBwYXRoOiAnMiBBcmVhcy9cXHU3NTFGXFx1NkQzQi9cXHU3NTFGXFx1NkQzQicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENENiBcXHU1QjY2XFx1NEU2MCcsIHBhdGg6ICcyIEFyZWFzL1xcdTVCNjZcXHU0RTYwL1xcdTVCNjZcXHU0RTYwJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0JDIFxcdTVERTVcXHU0RjVDJywgcGF0aDogJzIgQXJlYXMvXFx1NURFNVxcdTRGNUMvXFx1NURFNVxcdTRGNUMnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRDYgXFx1NjAzQlxcdTdEMjJcXHU1RjE1JywgcGF0aDogJ19tZXRhL1xcdUQ4M0RcXHVERDE3IFxcdTc3RTVcXHU4QkM2XFx1NTE3M1xcdTgwNTQvSW5kZXgvX2luZGV4LXpoLWNuJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEREM0XFx1RkUwRiBcXHU1RjUyXFx1Njg2MycsIHBhdGg6ICc0IEFyY2hpdmVzJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0U1IEluYm94JywgcGF0aDogJzAgSW5ib3gnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1MjY5OVxcdUZFMEYgSG90IENhY2hlJywgcGF0aDogJ19tZXRhL2hvdCcgfSxcbiAgICBdO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGEgPSBsaW5rcy5jcmVhdGVFbCgnYScsIHsgdGV4dDogaXRlbS5sYWJlbCwgY2xzOiAna29zLWRiLW5hdi1saW5rJyB9KTtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIEluYm94IEZpbGUgTGlzdCAtLS1cbiAgcmVuZGVySW5ib3hGaWxlcyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBmaWxlcyA9IGRhdGEuaW5ib3hGaWxlcyB8fCBbXTtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heEluYm94SXRlbXMgfHwgNjtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uIGtvcy1kYi1pbmJveCcgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBgXFx1RDgzRFxcdURDRTUgSW5ib3ggKCR7ZmlsZXMubGVuZ3RofSlgLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LWxpc3QnIH0pO1xuXG4gICAgZmlsZXMuc2xpY2UoMCwgbWF4SXRlbXMpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LWl0ZW0nIH0pO1xuICAgICAgY29uc3QgbmFtZSA9IHJvdy5jcmVhdGVFbCgnYScsIHsgdGV4dDogZmlsZS5iYXNlbmFtZSB8fCBmaWxlLnBhdGgsIGNsczogJ2tvcy1kYi1pbmJveC1saW5rJyB9KTtcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZmlsZS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgaWYgKGZpbGUuc3RhdD8ubXRpbWUpIHtcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtb21lbnQoZmlsZS5zdGF0Lm10aW1lKS5mb3JtYXQoJ01NLUREIEhIOm1tJyksIGNsczogJ2tvcy1kYi1pbmJveC10aW1lJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmaWxlcy5sZW5ndGggPiBtYXhJdGVtcykge1xuICAgICAgY29uc3QgbW9yZSA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LW1vcmUnIH0pO1xuICAgICAgbW9yZS5jcmVhdGVFbCgnYScsIHsgdGV4dDogYCske2ZpbGVzLmxlbmd0aCAtIG1heEl0ZW1zfSBtb3JlLi4uYCwgY2xzOiAna29zLWRiLWluYm94LWxpbmsnIH0pXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnMCBJbmJveCcsICcnLCB0cnVlKTsgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEVuZ2luZSBTdGF0ZSBEaXNwbGF5IC0tLVxuICByZW5kZXJFbmdpbmVTdGF0ZShjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBlbmdpbmVzID0gZGF0YS5lbmdpbmVzIHx8IHt9O1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdTI2OTlcXHVGRTBGIFxcdTVGMTVcXHU2NENFXFx1NzJCNlxcdTYwMDEnLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG5cbiAgICBjb25zdCBncmlkID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItZW5naW5lLWdyaWQnIH0pO1xuICAgIGNvbnN0IHByaW1hcnlFbmdpbmVzID0gWyd0cmlhZ2UnLCAnY29tcGlsZScsICdsaW5rJywgJ2RhaWx5JywgJ3Byb2plY3QnLCAnYXJjaGl2ZSddO1xuICAgIGNvbnN0IGhhc0RhdGEgPSBwcmltYXJ5RW5naW5lcy5zb21lKChlKSA9PiBlbmdpbmVzW2VdPy5sYXN0UnVuIHx8IGVuZ2luZXNbZV0/LnN1bW1hcnkpO1xuXG4gICAgaWYgKCFoYXNEYXRhKSB7XG4gICAgICBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHU2NjgyXFx1NjVFMFxcdTVGMTVcXHU2NENFXFx1NzJCNlxcdTYwMDFcXHU2NTcwXFx1NjM2RVxcdTMwMDInLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByaW1hcnlFbmdpbmVzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZW5nID0gZW5naW5lc1trZXldIHx8IHt9O1xuICAgICAgY29uc3QgY2hpcCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xzOiBga29zLWRiLWVuZ2luZS1jaGlwICR7ZW5nLnN0YXR1cyA9PT0gJ2RvbmUnID8gJ2tvcy1kYi1lbmdpbmUtZG9uZScgOiAnJ30gJHtlbmcubGFzdFJ1biA/ICcnIDogJ2tvcy1kYi1lbmdpbmUtaWRsZSd9YCxcbiAgICAgIH0pO1xuICAgICAgY2hpcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDoga2V5LCBjbHM6ICdrb3MtZGItZW5naW5lLW5hbWUnIH0pO1xuICAgICAgaWYgKGVuZy5sYXN0UnVuKSB7XG4gICAgICAgIGNoaXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAgJHtlbmcubGFzdFJ1bi5zbGljZSg1KX1gLCBjbHM6ICdrb3MtZGItZW5naW5lLWRhdGUnIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGVuZy5zdW1tYXJ5KSB7XG4gICAgICAgIGNoaXAuc2V0QXR0cigndGl0bGUnLCBlbmcuc3VtbWFyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDOCBcXHU2NzJDXFx1NTQ2OFxcdThCQjBcXHU1RjU1XFx1NTIwNlxcdTVFMDMnLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgY2hhcnQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydCcgfSk7XG4gICAgY29uc3QgY2VsbHMgPSBkYXRhLndlZWtseSB8fCBbXTtcbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGgubWF4KDEsIC4uLmNlbGxzLm1hcCgoYykgPT4gYy5jb3VudCkpO1xuICAgIGlmIChjZWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoYXJ0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHU2NzJDXFx1NTQ2OFxcdTY2ODJcXHU2NUUwXFx1NjVFNVxcdThCQjBcXHU4QkIwXFx1NUY1NVxcdTMwMDInLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBjb2wgPSBjaGFydC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhcnQtY29sJyB9KTtcbiAgICAgIGlmIChjZWxsLmlzVG9kYXkpIGNvbC5hZGRDbGFzcygna29zLWRiLWNoYXJ0LXRvZGF5Jyk7XG4gICAgICBjb25zdCBiYXJIZWlnaHQgPSBNYXRoLm1heCg0LCAoY2VsbC5jb3VudCAvIG1heENvdW50KSAqIDYwKTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhcnQtYmFyJywgYXR0cjogeyBzdHlsZTogYGhlaWdodDoke2JhckhlaWdodH1weGAgfSB9KVxuICAgICAgICAgLnNldEF0dHIoJ3RpdGxlJywgYCR7Y2VsbC5kYXRlfTogJHtjZWxsLmNvdW50fSBcXHU2NzYxYCk7XG4gICAgICBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogU3RyaW5nKGNlbGwuY291bnQpLCBjbHM6ICdrb3MtZGItY2hhcnQtdmFsJyB9KTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBjZWxsLndlZWtkYXksIGNsczogJ2tvcy1kYi1jaGFydC1kYXknIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQUlDaGF0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLWFpJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNFXFx1REQxNiBBSSBcXHU1QkY5XFx1OEJERCcsIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBib2R5ID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktYm9keScgfSk7XG4gICAgYm9keS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogJ1xcdTU3MjhcXHU2QjY0XFx1NTkwNFxcdTVENENcXHU1MTY1IENvZGV4IC8gRkxPV25vdGUgQUkgXFx1NUJGOVxcdThCRERcXHU4OUM2XFx1NTZGRVxcdTMwMDJcXHU3NkVFXFx1NTI0RFxcdTRGN0ZcXHU3NTI4XFx1NTQ3RFxcdTRFRTRcXHU5NzYyXFx1Njc3RlxcdTYyMTZcXHU0RkE3XFx1NjgwRlxcdThGREJcXHU4ODRDIEFJIFxcdTRFQTRcXHU0RTkyXFx1MzAwMicsXG4gICAgICBjbHM6ICdrb3MtZGItYWktcGxhY2Vob2xkZXInLFxuICAgIH0pO1xuICAgIGNvbnN0IGlucHV0Um93ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktaW5wdXQtcm93JyB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0Um93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcbiAgICAgIGNsczogJ2tvcy1kYi1haS1pbnB1dCcsXG4gICAgICBhdHRyOiB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdcXHU4RjkzXFx1NTE2NVxcdTU0N0RcXHU0RUU0XFx1NjIxNlxcdTk1RUVcXHU5ODk4XFx1MjAyNlxcdTIwMjYnIH0sXG4gICAgfSk7XG4gICAgY29uc3Qgc2VuZEJ0biA9IGlucHV0Um93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1haS1zZW5kJywgdGV4dDogJ1xcdTUzRDFcXHU5MDAxJyB9KTtcblxuICAgIHNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnX21ldGEvaG90Lm1kJywgJycsIHRydWUpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9KTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHNlbmRCdG4uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29ja3BpdFZpZXcsIFZJRVdfVFlQRV9DT0NLUElUIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHNldHRpbmdzIHRhYlxuXG5jb25zdCB7IFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIG1vbWVudCB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUyA9IHtcbiAgLy8gR2VuZXJhbFxuICBhdXRvT3BlbjogdHJ1ZSxcblxuICAvLyBEYXNoYm9hcmQgc2VjdGlvbiB2aXNpYmlsaXR5XG4gIHNob3dUb2RheVRhc2tzOiB0cnVlLFxuICBzaG93SW5ib3hGaWxlczogdHJ1ZSxcbiAgc2hvd0VuZ2luZVN0YXRlOiB0cnVlLFxuICBzaG93V2Vla2x5Q2hhcnQ6IHRydWUsXG4gIHNob3dBaUNoYXQ6IHRydWUsXG4gIHNob3dQcm9qZWN0Q2FyZHM6IHRydWUsXG4gIHNob3dSZWNlbnRBY3Rpdml0eTogdHJ1ZSxcbiAgc2hvd1ZhdWx0U3RhdHM6IHRydWUsXG4gIHNob3dOYXY6IHRydWUsXG5cbiAgLy8gRGF0YSBsaW1pdHNcbiAgbWF4UmVjZW50SXRlbXM6IDgsXG4gIG1heFRhc2tJdGVtczogMTIsXG4gIG1heEluYm94SXRlbXM6IDYsXG59O1xuXG5jbGFzcyBDb2NrcGl0U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBjb25zdHJ1Y3RvcihhcHAsIHBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgdGhpcy5yZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFib3V0U2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICByZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0dlbmVyYWwnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0by1vcGVuIG9uIHN0YXJ0dXAnKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgb3BlbiB0aGUgS09TIENvY2twaXQgd2hlbiBPYnNpZGlhbiBzdGFydHMuJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b09wZW4gPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICByZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnRGFzaGJvYXJkIFNlY3Rpb25zJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6ICdUb2dnbGUgd2hpY2ggc2VjdGlvbnMgYXBwZWFyIG9uIHRoZSBjb2NrcGl0IGRhc2hib2FyZC4nLFxuICAgICAgY2xzOiAnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgICAgeyBrZXk6ICdzaG93VG9kYXlUYXNrcycsIG5hbWU6ICdUb2RheVxcJ3MgVGFza3MnLCBkZXNjOiAnRGFpbHkgbm90ZSB0YXNrIGxpc3QgYW5kIHByb2dyZXNzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1Byb2plY3RDYXJkcycsIG5hbWU6ICdBY3RpdmUgUHJvamVjdHMnLCBkZXNjOiAnUHJvamVjdCBjYXJkcyB3aXRoIHByaW9yaXR5IGFuZCBwcm9ncmVzcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dWYXVsdFN0YXRzJywgbmFtZTogJ1ZhdWx0IFN0YXRpc3RpY3MnLCBkZXNjOiAnVG90YWwgbm90ZXMsIGFjdGl2ZSBwcm9qZWN0cywgaW5ib3ggY291bnQuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93UmVjZW50QWN0aXZpdHknLCBuYW1lOiAnUmVjZW50IEFjdGl2aXR5JywgZGVzYzogJ1JlY2VudGx5IG1vZGlmaWVkIGZpbGVzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd05hdicsIG5hbWU6ICdOYXZpZ2F0aW9uJywgZGVzYzogJ1F1aWNrIGxpbmtzIHRvIGFyZWFzLCBpbmJveCwgaG90IGNhY2hlLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd0luYm94RmlsZXMnLCBuYW1lOiAnSW5ib3ggRmlsZXMnLCBkZXNjOiAnTGlzdCBvZiBwZW5kaW5nIGZpbGVzIGluIDAgSW5ib3gvLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd0VuZ2luZVN0YXRlJywgbmFtZTogJ0VuZ2luZSBTdGF0ZScsIGRlc2M6ICdUcmlhZ2UvQ29tcGlsZS9MaW5rIGVuZ2luZSBzdGF0dXMgY2hpcHMuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93V2Vla2x5Q2hhcnQnLCBuYW1lOiAnV2Vla2x5IENoYXJ0JywgZGVzYzogJ0JhciBjaGFydCBvZiB3ZWVrbHkgZGFpbHktbm90ZSBjYXB0dXJlcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dBaUNoYXQnLCBuYW1lOiAnQUkgQ2hhdCcsIGRlc2M6ICdBSSBjaGF0IGlucHV0IHBsYWNlaG9sZGVyLicgfSxcbiAgICBdO1xuXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBrZXksIG5hbWUsIGRlc2MgfSkgPT4ge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKG5hbWUpXG4gICAgICAgIC5zZXREZXNjKGRlc2MpXG4gICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5nc1trZXldKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzW2tleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJEYXRhTGltaXRzU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0RhdGEgTGltaXRzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ01heCByZWNlbnQgaXRlbXMnKVxuICAgICAgLnNldERlc2MoJ051bWJlciBvZiByZWNlbnRseSBtb2RpZmllZCBmaWxlcyB0byBzaG93IChtYXggMjApLicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignOCcpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgzLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDgpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdNYXggdGFzayBpdGVtcycpXG4gICAgICAuc2V0RGVzYygnTnVtYmVyIG9mIGRhaWx5LW5vdGUgdGFza3MgdG8gc2hvdyAobWF4IDIwKS4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzEyJylcbiAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDEyKSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhUYXNrSXRlbXMgPSB2YWw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ01heCBpbmJveCBpdGVtcycpXG4gICAgICAuc2V0RGVzYygnTnVtYmVyIG9mIGluYm94IGZpbGUgbmFtZXMgdG8gc2hvdyAobWF4IDIwKS4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzYnKVxuICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4SW5ib3hJdGVtcykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDYpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heEluYm94SXRlbXMgPSB2YWw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHJlbmRlckFib3V0U2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0Fib3V0JyB9KTtcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGVzYy5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIHRleHQ6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEEga25vd2xlZGdlIG1hbmFnZW1lbnQgZGFzaGJvYXJkIGZvciB0aGUgS09TX0xMTS1XaWtpIHZhdWx0LiBQYXJ0IG9mIHRoZSBLT1MgZWNvc3lzdGVtLicsXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdWZXJzaW9uJylcbiAgICAgIC5zZXREZXNjKGRlc2MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBDb2NrcGl0U2V0dGluZ1RhYiwgREVGQVVMVF9TRVRUSU5HUyB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwbHVnaW4gZW50cnkgcG9pbnRcblxuY29uc3QgeyBQbHVnaW4gfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9ID0gcmVxdWlyZSgnLi9jb2NrcGl0LXZpZXcnKTtcbmNvbnN0IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MgfSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MtdGFiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgS29zQ29ja3BpdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIC8vIExvYWQgc2F2ZWQgc2V0dGluZ3NcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGN1c3RvbSB2aWV3LCBwYXNzaW5nIHRoZSBwbHVnaW4gcmVmZXJlbmNlXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFX0NPQ0tQSVQsIChsZWFmKSA9PiBuZXcgQ29ja3BpdFZpZXcobGVhZiwgdGhpcykpO1xuXG4gICAgLy8gQWRkIHJpYmJvbiBpY29uXG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdnYXVnZScsICdPcGVuIEtPUyBDb2NrcGl0JywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29ja3BpdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGNvbW1hbmQgdG8gb3BlbiBjb2NrcGl0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnT3BlbiBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vcGVuQ29ja3BpdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGNvbW1hbmQgdG8gcmVmcmVzaCBjb2NrcGl0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmVmcmVzaC1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnUmVmcmVzaCBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5yZWZyZXNoQ29ja3BpdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gUmVnaXN0ZXIgc2V0dGluZ3MgdGFiXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBDb2NrcGl0U2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gT3BlbiB0aGUgY29ja3BpdCBhdXRvbWF0aWNhbGx5IG9uIGxheW91dCByZWFkeVxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID09PSAwICYmIHRoaXMuc2V0dGluZ3MuYXV0b09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuQ29ja3BpdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb3BlbkNvY2twaXQoKSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgY29uc3QgZXhpc3RpbmcgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgd29ya3NwYWNlLnJldmVhbExlYWYoZXhpc3RpbmdbMF0pO1xuICAgICAgY29uc3QgdmlldyA9IGV4aXN0aW5nWzBdLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhZih0cnVlKTtcbiAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7XG4gICAgICB0eXBlOiBWSUVXX1RZUEVfQ09DS1BJVCxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2hDb2NrcGl0KCkge1xuICAgIGNvbnN0IGxlYXZlcyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgIGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgc2F2ZWQpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgLy8gTm90aWZ5IG9wZW4gdmlld3Mgb2Ygc2V0dGluZ3MgY2hhbmdlXG4gICAgdGhpcy5yZWZyZXNoQ29ja3BpdCgpO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCkuZm9yRWFjaCgobGVhZikgPT4ge1xuICAgICAgbGVhZi5kZXRhY2goKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUEsaUJBQUFBLFVBQUFDLFNBQUE7QUFNQSxhQUFTLGlCQUFpQixTQUFTO0FBQ2pDLFlBQU0sT0FBTyxPQUFPLFdBQVcsRUFBRTtBQUNqQyxZQUFNLFFBQVEsS0FBSyxNQUFNLHVCQUF1QjtBQUNoRCxVQUFJLENBQUMsTUFBTyxRQUFPLENBQUM7QUFFcEIsWUFBTSxNQUFNLENBQUM7QUFDYixZQUFNLENBQUMsRUFBRSxNQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FBUztBQUN4QyxjQUFNLE9BQU8sT0FBTyxRQUFRLEVBQUUsRUFBRSxLQUFLO0FBQ3JDLFlBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxHQUFHLEVBQUc7QUFDbkMsY0FBTSxRQUFRLEtBQUssUUFBUSxHQUFHO0FBQzlCLFlBQUksU0FBUyxFQUFHO0FBQ2hCLGNBQU0sTUFBTSxLQUFLLE1BQU0sR0FBRyxLQUFLLEVBQUUsS0FBSztBQUN0QyxZQUFJLFFBQVEsS0FBSyxNQUFNLFFBQVEsQ0FBQyxFQUFFLEtBQUs7QUFDdkMsWUFBSSxDQUFDLElBQUs7QUFDVixZQUFJLE1BQU0sV0FBVyxHQUFHLEtBQUssTUFBTSxTQUFTLEdBQUcsR0FBRztBQUNoRCxrQkFBUSxNQUFNLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxRQUMzRTtBQUNBLFlBQUksR0FBRyxJQUFJO0FBQUEsTUFDYixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1Q7QUFLQSxhQUFTLFFBQVEsYUFBYSxNQUFNLFVBQVU7QUFDNUMsWUFBTSxLQUFLLGVBQWUsT0FBTyxnQkFBZ0IsV0FBVyxjQUFjLENBQUM7QUFDM0UsaUJBQVcsT0FBTyxNQUFNO0FBQ3RCLFlBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxJQUFJLEdBQUcsR0FBRztBQUNqRCxnQkFBTSxRQUFRLEdBQUcsR0FBRztBQUNwQixjQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUcsUUFBTyxNQUFNLEtBQUssSUFBSTtBQUNoRCxnQkFBTSxPQUFPLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSztBQUN0QyxjQUFJLEtBQU0sUUFBTztBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUNBLGFBQU87QUFBQSxJQUNUO0FBS0EsYUFBUyxjQUFjLE1BQU07QUFDM0IsWUFBTSxJQUFJLFFBQVEsb0JBQUksS0FBSztBQUMzQixZQUFNLE9BQU8sRUFBRSxZQUFZO0FBQzNCLFlBQU0sUUFBUSxPQUFPLEVBQUUsU0FBUyxJQUFJLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN0RCxZQUFNLE1BQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQy9DLGFBQU8sR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUc7QUFBQSxJQUNoQztBQU1BLGFBQVMsY0FBYyxTQUFTO0FBQzlCLFlBQU0sUUFBUSxRQUFRLE1BQU0sR0FBRztBQUMvQixhQUFPLFlBQVksTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLE9BQU87QUFBQSxJQUNwRDtBQUtBLGFBQVMsY0FBYyxPQUFPLE1BQU07QUFDbEMsVUFBSTtBQUNGLGVBQU8sTUFBTSxzQkFBc0IsSUFBSTtBQUFBLE1BQ3pDLFFBQVE7QUFDTixlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFLQSxtQkFBZSxhQUFhLE9BQU8sTUFBTTtBQUN2QyxVQUFJLENBQUMsU0FBUyxDQUFDLEtBQU0sUUFBTztBQUM1QixVQUFJO0FBQ0YsWUFBSSxPQUFPLE1BQU0sZUFBZSxXQUFZLFFBQU8sT0FBTyxNQUFNLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRTtBQUM1RixZQUFJLE9BQU8sTUFBTSxTQUFTLFdBQVksUUFBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLElBQUksS0FBSyxFQUFFO0FBQUEsTUFDbEYsUUFBUTtBQUNOLGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFLQSxhQUFTLHFCQUFxQixTQUFTO0FBQ3JDLFlBQU0sUUFBUSxPQUFPLFdBQVcsRUFBRSxFQUFFLE1BQU0sT0FBTztBQUNqRCxVQUFJLE9BQU87QUFDWCxVQUFJLE9BQU87QUFDWCxZQUFNLFFBQVEsQ0FBQyxTQUFTO0FBQ3RCLFlBQUksMEJBQTBCLEtBQUssSUFBSSxHQUFHO0FBQ3hDLGNBQUkseUJBQXlCLEtBQUssSUFBSSxFQUFHLFNBQVE7QUFBQSxjQUM1QyxTQUFRO0FBQUEsUUFDZjtBQUFBLE1BQ0YsQ0FBQztBQUNELGFBQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFFBQ0EsT0FBTyxPQUFPO0FBQUEsUUFDZCxnQkFBZ0IsT0FBTyxPQUFPLElBQUksS0FBSyxNQUFPLFFBQVEsT0FBTyxRQUFTLEdBQUcsSUFBSTtBQUFBLE1BQy9FO0FBQUEsSUFDRjtBQUtBLGFBQVMsY0FBYyxNQUFNO0FBQzNCLGFBQU8sT0FBTyxRQUFRLEVBQUUsRUFBRSxRQUFRLE9BQU8sR0FBRyxFQUFFLFFBQVEsUUFBUSxHQUFHLEVBQUUsUUFBUSxRQUFRLEVBQUU7QUFBQSxJQUN2RjtBQUtBLGFBQVMsYUFBYSxNQUFNO0FBQzFCLFlBQU0sUUFBUSxjQUFjLElBQUk7QUFDaEMsVUFBSSxzQkFBc0IsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM5QyxVQUFJLE1BQU0sV0FBVyxRQUFRLEVBQUcsUUFBTztBQUN2QyxVQUFJLE1BQU0sV0FBVyxRQUFRLEVBQUcsUUFBTztBQUN2QyxVQUFJLE1BQU0sV0FBVyxxQkFBcUIsRUFBRyxRQUFPO0FBQ3BELFVBQUksTUFBTSxXQUFXLGFBQWEsRUFBRyxRQUFPO0FBQzVDLFVBQUksTUFBTSxXQUFXLFdBQVcsRUFBRyxRQUFPO0FBQzFDLFVBQUksTUFBTSxXQUFXLGVBQWUsRUFBRyxRQUFPO0FBQzlDLGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQzlJQTtBQUFBLDJCQUFBQyxVQUFBQyxTQUFBO0FBRUEsUUFBTSxFQUFFLGtCQUFrQixTQUFTLGNBQWMscUJBQXFCLElBQUk7QUFLMUUsYUFBUyxpQkFBaUIsT0FBTztBQUMvQixVQUFJLENBQUMsU0FBUyxPQUFPLE1BQU0scUJBQXFCLFdBQVksUUFBTyxDQUFDO0FBQ3BFLFlBQU0sUUFBUSxNQUFNLGlCQUFpQjtBQUNyQyxhQUFPLE1BQU0sT0FBTyxDQUFDLFNBQVM7QUFDNUIsY0FBTSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFHbkMsWUFBSSxDQUFDLEtBQUssV0FBVyxhQUFhLEVBQUcsUUFBTztBQUM1QyxZQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsV0FBVyxFQUFHLFFBQU87QUFDekMsWUFBSSxLQUFLLFNBQVMsV0FBVyxFQUFHLFFBQU87QUFDdkMsWUFBSSxLQUFLLFNBQVMsdUNBQTBDLEVBQUcsUUFBTztBQUN0RSxlQUFPO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDSDtBQUtBLGFBQVMsYUFBYSxNQUFNLFNBQVMsZUFBZTtBQUNsRCxZQUFNLEtBQUs7QUFBQSxRQUNULEdBQUcsaUJBQWlCLE9BQU87QUFBQSxNQUM3QjtBQUdBLFVBQUk7QUFDRixjQUFNLFFBQVEsaUJBQWlCLE9BQU8sY0FBYyxpQkFBaUIsYUFDakUsY0FBYyxhQUFhLElBQUksSUFDL0I7QUFDSixZQUFJLFNBQVMsTUFBTSxhQUFhO0FBQzlCLGlCQUFPLE9BQU8sSUFBSSxNQUFNLFdBQVc7QUFBQSxRQUNyQztBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQUM7QUFFVCxZQUFNLFNBQVMsUUFBUSxJQUFJLENBQUMsVUFBVSxRQUFRLEdBQUcsUUFBUTtBQUN6RCxZQUFNLFdBQVcsUUFBUSxJQUFJLENBQUMsWUFBWSxVQUFVLEdBQUcsRUFBRTtBQUN6RCxZQUFNLFlBQVksUUFBUSxJQUFJLENBQUMsYUFBYSxXQUFXLEdBQUcsRUFBRTtBQUM1RCxZQUFNLE9BQU8sUUFBUSxJQUFJLENBQUMsUUFBUSxRQUFRLFVBQVUsUUFBUSxHQUFHLEVBQUU7QUFDakUsWUFBTSxPQUFPLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUdqRCxZQUFNLFFBQVEscUJBQXFCLE9BQU87QUFHMUMsWUFBTSxVQUFVLE9BQU8sV0FBVyxFQUFFLEVBQUUsTUFBTSxhQUFhO0FBQ3pELFlBQU0sUUFBUSxVQUFVLFFBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxLQUFLLFlBQVk7QUFFN0QsYUFBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLE1BQU0sS0FBSztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLE9BQU8sS0FBSyxNQUFNLFNBQVM7QUFBQSxRQUMzQixPQUFPLEtBQUssTUFBTSxTQUFTO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBTUEsbUJBQWUsYUFBYSxLQUFLLFVBQVUsQ0FBQyxHQUFHO0FBQzdDLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFPLFFBQU8sQ0FBQztBQUNoQyxZQUFNLFFBQVEsaUJBQWlCLElBQUksS0FBSztBQUN4QyxZQUFNLFdBQVcsQ0FBQztBQUVsQixpQkFBVyxRQUFRLE9BQU87QUFDeEIsY0FBTSxVQUFVLE1BQU0sYUFBYSxJQUFJLE9BQU8sSUFBSTtBQUNsRCxjQUFNLFVBQVUsYUFBYSxNQUFNLFNBQVMsSUFBSSxhQUFhO0FBQzdELGlCQUFTLEtBQUssT0FBTztBQUFBLE1BQ3ZCO0FBR0EsZUFBUyxLQUFLLENBQUMsR0FBRyxNQUFNO0FBQ3RCLGNBQU0sVUFBVSxFQUFFLFdBQVc7QUFDN0IsY0FBTSxVQUFVLEVBQUUsV0FBVztBQUM3QixZQUFJLFlBQVksUUFBUyxRQUFPLFVBQVUsS0FBSztBQUUvQyxjQUFNLE9BQU8sQ0FBQyxNQUFNO0FBQ2xCLGdCQUFNLElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRSxZQUFZO0FBQ3RDLGNBQUksTUFBTSxRQUFRLE1BQU0sT0FBUSxRQUFPO0FBQ3ZDLGNBQUksTUFBTSxRQUFRLE1BQU0sU0FBVSxRQUFPO0FBQ3pDLGNBQUksTUFBTSxRQUFRLE1BQU0sTUFBTyxRQUFPO0FBQ3RDLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGNBQU0sYUFBYSxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUssRUFBRSxRQUFRO0FBQ3JELFlBQUksZUFBZSxFQUFHLFFBQU87QUFDN0IsZUFBTyxFQUFFLFFBQVEsRUFBRTtBQUFBLE1BQ3JCLENBQUM7QUFFRCxVQUFJLFFBQVEsWUFBWTtBQUN0QixlQUFPLFNBQVMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLFFBQVE7QUFBQSxNQUNyRDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBS0EsbUJBQWUsZUFBZSxLQUFLO0FBQ2pDLFlBQU0sZUFBZTtBQUFBLFFBQ25CLFFBQVEsRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzFELFNBQVMsRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzNELE1BQU0sRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQ3hELE9BQU8sRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQ3pELFNBQVMsRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzNELFNBQVMsRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzNELFFBQVEsRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzFELFlBQVksRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLFFBQzlELE1BQU0sRUFBRSxTQUFTLE1BQU0sUUFBUSxXQUFXLFNBQVMsS0FBSztBQUFBLE1BQzFEO0FBRUEsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU8sUUFBTztBQUUvQixZQUFNLE9BQU8sSUFBSSxNQUFNLHNCQUFzQiwwQkFBMEI7QUFDdkUsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUVsQixZQUFNLFVBQVUsTUFBTSxhQUFhLElBQUksT0FBTyxJQUFJO0FBT2xELFlBQU0sVUFBVSxPQUFPLEtBQUssWUFBWTtBQUN4QyxZQUFNLFNBQVMsQ0FBQztBQUNoQixVQUFJLGdCQUFnQjtBQUVwQixhQUFPLFdBQVcsRUFBRSxFQUFFLE1BQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ3JELGNBQU0sVUFBVSxLQUFLLE1BQU0saUJBQWlCO0FBQzVDLFlBQUksV0FBVyxRQUFRLFNBQVMsUUFBUSxDQUFDLENBQUMsR0FBRztBQUMzQywwQkFBZ0IsUUFBUSxDQUFDO0FBQ3pCLGlCQUFPLGFBQWEsSUFBSSxDQUFDO0FBQ3pCO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyxjQUFlO0FBQ3BCLGNBQU0sS0FBSyxLQUFLLE1BQU0scUJBQXFCO0FBQzNDLFlBQUksSUFBSTtBQUNOLGlCQUFPLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssS0FBSztBQUFBLFFBQ2pEO0FBQUEsTUFDRixDQUFDO0FBR0QsWUFBTSxRQUFRLENBQUM7QUFDZixjQUFRLFFBQVEsQ0FBQyxNQUFNO0FBQ3JCLGNBQU0sTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzFCLGNBQU0sQ0FBQyxJQUFJO0FBQUEsVUFDVCxTQUFTLElBQUksWUFBWSxJQUFJLGNBQWM7QUFBQSxVQUMzQyxRQUFRLElBQUksWUFBWSxTQUNuQixPQUFPLElBQUksT0FBTyxNQUFNLElBQUksU0FBUyxZQUN0QztBQUFBLFVBQ0osU0FBUyxJQUFJLFdBQVc7QUFBQSxRQUMxQjtBQUFBLE1BQ0YsQ0FBQztBQUVELGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUM5S0E7QUFBQSx3QkFBQUMsVUFBQUMsU0FBQTtBQUVBLFFBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFNLEVBQUUsY0FBYyxlQUFlLElBQUk7QUFLekMsbUJBQWUsY0FBYyxLQUFLO0FBQ2hDLFlBQU0sVUFBVSxjQUFjO0FBQzlCLFlBQU0sT0FBTyxjQUFjLE9BQU87QUFDbEMsWUFBTSxPQUFPLGNBQWMsSUFBSSxPQUFPLElBQUk7QUFFMUMsVUFBSSxDQUFDLE1BQU07QUFDVCxlQUFPLEVBQUUsU0FBUyxNQUFNLFFBQVEsT0FBTyxNQUFNLE1BQU0sT0FBTyxFQUFFLE1BQUssR0FBRSxNQUFLLEdBQUUsT0FBTSxHQUFFLGdCQUFlLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRTtBQUFBLE1BQ3RIO0FBRUEsWUFBTSxVQUFVLE1BQU0sYUFBYSxJQUFJLE9BQU8sSUFBSTtBQUNsRCxZQUFNLFFBQVEscUJBQXFCLE9BQU87QUFDMUMsWUFBTSxRQUFRLE9BQU8sV0FBVyxFQUFFLEVBQUUsTUFBTSxPQUFPO0FBQ2pELFlBQU0sWUFBWSxDQUFDO0FBQ25CLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN4QyxjQUFNLElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxvQ0FBb0M7QUFDM0UsWUFBSSxDQUFDLEVBQUc7QUFDUixjQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSztBQUN2QixZQUFJLENBQUMsS0FBTTtBQUNYLGtCQUFVLEtBQUssRUFBRSxXQUFXLEdBQUcsTUFBTSxNQUFNLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUQsWUFBSSxVQUFVLFVBQVUsR0FBSTtBQUFBLE1BQzlCO0FBR0EsVUFBSSxRQUFRO0FBQ1osWUFBTSxhQUFhLFFBQVEsTUFBTSwyQ0FBMkM7QUFDNUUsVUFBSSxXQUFZLFNBQVEsV0FBVyxDQUFDLEVBQUUsUUFBUSxPQUFPLEVBQUUsRUFBRSxLQUFLO0FBRTlELGFBQU8sRUFBRSxTQUFTLE1BQU0sUUFBUSxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sUUFBUTtBQUFBLElBQy9FO0FBTUEsYUFBUyxjQUFjLE9BQU87QUFDNUIsVUFBSSxDQUFDLFNBQVMsT0FBTyxNQUFNLHFCQUFxQixXQUFZLFFBQU8sQ0FBQztBQUNwRSxhQUFPLE1BQU0saUJBQWlCLEVBQUUsT0FBTyxDQUFDLE1BQU07QUFDNUMsY0FBTSxJQUFJLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDN0IsZUFBTyxFQUFFLFdBQVcsVUFBVSxLQUFLLENBQUMsRUFBRSxXQUFXLHFCQUFxQjtBQUFBLE1BQ3hFLENBQUM7QUFBQSxJQUNIO0FBS0EsbUJBQWUsa0JBQWtCLEtBQUs7QUFDcEMsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsT0FBTyxJQUFJLE1BQU0scUJBQXFCLFlBQVk7QUFDMUUsZUFBTyxFQUFFLFlBQVksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUU7QUFBQSxNQUNqRDtBQUVBLFlBQU0sUUFBUSxJQUFJLE1BQU0saUJBQWlCO0FBQ3pDLFlBQU0sUUFBUSxjQUFjO0FBQzVCLFVBQUksV0FBVztBQUNmLFlBQU0sUUFBUSxFQUFFLE1BQUssR0FBRyxVQUFTLEdBQUcsT0FBTSxHQUFHLFdBQVUsR0FBRyxPQUFNLEdBQUcsVUFBUyxHQUFHLFFBQU8sRUFBRTtBQUV4RixZQUFNLFFBQVEsQ0FBQyxNQUFNO0FBQ25CLGNBQU0sSUFBSSxPQUFPLEVBQUUsUUFBUSxFQUFFO0FBQzdCLFlBQUksRUFBRSxXQUFXLGFBQWEsRUFBRyxPQUFNLFlBQVk7QUFBQSxpQkFDMUMsRUFBRSxXQUFXLFVBQVUsRUFBRyxPQUFNLFNBQVM7QUFBQSxpQkFDekMsRUFBRSxXQUFXLGNBQWMsRUFBRyxPQUFNLGFBQWE7QUFBQSxpQkFDakQsRUFBRSxXQUFXLFVBQVUsR0FBRztBQUFFLGNBQUksQ0FBQyxFQUFFLFdBQVcscUJBQXFCLEVBQUcsT0FBTSxTQUFTO0FBQUEsUUFBRyxXQUN4RixFQUFFLFdBQVcsV0FBVyxFQUFHLE9BQU0sWUFBWTtBQUFBLGlCQUM3QyxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsV0FBVyxHQUFHLEVBQUcsT0FBTSxVQUFVO0FBQUEsaUJBQ3hELEVBQUUsV0FBVyxhQUFhLEdBQUc7QUFBQSxRQUFDLE1BQ2xDLE9BQU0sUUFBUTtBQUduQixjQUFNLFFBQVEsRUFBRSxNQUFNLFFBQVEsSUFBSSxLQUFLLEVBQUUsS0FBSyxLQUFLLElBQUk7QUFDdkQsWUFBSSxPQUFPO0FBQ1QsZ0JBQU0sS0FBSyxjQUFjLEtBQUs7QUFDOUIsY0FBSSxPQUFPLE1BQU8sYUFBWTtBQUFBLFFBQ2hDO0FBQUEsTUFDRixDQUFDO0FBRUQsYUFBTyxFQUFFLFlBQVksTUFBTSxRQUFRLFVBQVUsTUFBTTtBQUFBLElBQ3JEO0FBS0EsYUFBUyxrQkFBa0IsT0FBTztBQUNoQyxVQUFJLENBQUMsU0FBUyxPQUFPLE1BQU0scUJBQXFCLFdBQVksUUFBTyxDQUFDO0FBQ3BFLGFBQU8sTUFBTSxpQkFBaUIsRUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQ25DLEtBQUssQ0FBQyxHQUFHLE9BQU8sRUFBRSxNQUFNLFNBQVMsTUFBTSxFQUFFLE1BQU0sU0FBUyxFQUFFLEVBQzFELE1BQU0sR0FBRyxFQUFFLEVBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxPQUFPLEVBQUUsWUFBWSxJQUFJLE9BQU8sRUFBRSxNQUFNLFNBQVMsRUFBRSxFQUFFO0FBQUEsSUFDdEY7QUFLQSxtQkFBZSxjQUFjLEtBQUs7QUFDaEMsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU8sUUFBTyxDQUFDO0FBQ2hDLFlBQU0sT0FBTyxjQUFjLElBQUksT0FBTyxjQUFjO0FBQ3BELFVBQUksQ0FBQyxLQUFNLFFBQU8sQ0FBQztBQUNuQixZQUFNLFVBQVUsTUFBTSxhQUFhLElBQUksT0FBTyxJQUFJO0FBQ2xELFlBQU0sVUFBVSxDQUFDO0FBQ2pCLGFBQU8sV0FBVyxFQUFFLEVBQUUsTUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDckQsY0FBTSxJQUFJLEtBQUssTUFBTSxpREFBaUQ7QUFDdEUsWUFBSSxFQUFHLFNBQVEsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUFBLE1BQzFELENBQUM7QUFDRCxhQUFPLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQU1BLG1CQUFlLGlCQUFpQixLQUFLO0FBQ25DLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFPLFFBQU8sQ0FBQztBQUVoQyxZQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixZQUFNLFlBQVksSUFBSSxPQUFPO0FBQzdCLFlBQU0sZUFBZSxjQUFjLElBQUksS0FBSyxJQUFJO0FBRWhELFlBQU0sUUFBUSxDQUFDO0FBQ2YsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxJQUFJLElBQUksS0FBSyxHQUFHO0FBQ3RCLFVBQUUsUUFBUSxJQUFJLFFBQVEsSUFBSSxlQUFlLENBQUM7QUFDMUMsY0FBTSxLQUFLLGNBQWMsQ0FBQztBQUMxQixjQUFNLE9BQU8sY0FBYyxFQUFFO0FBQzdCLGNBQU0sT0FBTyxjQUFjLElBQUksT0FBTyxJQUFJO0FBQzFDLFlBQUksUUFBUTtBQUNaLFlBQUksTUFBTTtBQUNSLGdCQUFNLFVBQVUsTUFBTSxhQUFhLElBQUksT0FBTyxJQUFJO0FBRWxELGdCQUFNLFFBQVEsT0FBTyxXQUFXLEVBQUUsRUFBRSxNQUFNLE9BQU87QUFDakQsZ0JBQU0sUUFBUSxDQUFDLFNBQVM7QUFDdEIsa0JBQU0sSUFBSSxLQUFLLEtBQUs7QUFDcEIsZ0JBQUksQ0FBQyxFQUFHO0FBQ1IsZ0JBQUksUUFBUSxLQUFLLENBQUMsRUFBRztBQUNyQixnQkFBSSxhQUFhLEtBQUssQ0FBQyxFQUFHO0FBQzFCLGdCQUFJLHVCQUF1QixLQUFLLENBQUMsRUFBRztBQUNwQyxnQkFBSSwyQ0FBMkMsS0FBSyxDQUFDLEVBQUc7QUFDeEQscUJBQVM7QUFBQSxVQUNYLENBQUM7QUFBQSxRQUNIO0FBQ0EsY0FBTSxXQUFXLENBQUMsVUFBUyxVQUFTLFVBQVMsVUFBUyxVQUFTLFVBQVMsUUFBUTtBQUNoRixjQUFNLEtBQUssRUFBRSxNQUFNLElBQUksT0FBTyxTQUFTLFNBQVMsQ0FBQyxHQUFHLFNBQVMsT0FBTyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQUEsTUFDMUY7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQzNLQTtBQUFBLHdCQUFBQyxVQUFBQyxTQUFBO0FBR0EsUUFBTSxFQUFFLFVBQVUsT0FBTyxJQUFJLFFBQVEsVUFBVTtBQUMvQyxRQUFNO0FBQUEsTUFDSjtBQUFBLE1BQWU7QUFBQSxNQUFlO0FBQUEsTUFDOUI7QUFBQSxNQUFtQjtBQUFBLE1BQWU7QUFBQSxNQUNsQztBQUFBLE1BQWdCO0FBQUEsSUFDbEIsSUFBSTtBQUVKLFFBQU1DLHFCQUFvQjtBQUUxQixRQUFNQyxlQUFOLGNBQTBCLFNBQVM7QUFBQSxNQUNqQyxZQUFZLE1BQU0sUUFBUTtBQUN4QixjQUFNLElBQUk7QUFDVixhQUFLLFNBQVM7QUFBQSxNQUNoQjtBQUFBLE1BRUEsY0FBYztBQUFFLGVBQU9EO0FBQUEsTUFBbUI7QUFBQSxNQUMxQyxpQkFBaUI7QUFBRSxlQUFPO0FBQUEsTUFBZTtBQUFBLE1BQ3pDLFVBQVU7QUFBRSxlQUFPO0FBQUEsTUFBUztBQUFBLE1BRTVCLElBQUksV0FBVztBQUNiLGVBQU8sS0FBSyxTQUFTLEtBQUssT0FBTyxXQUFXO0FBQUEsTUFDOUM7QUFBQSxNQUVBLE1BQU0sU0FBUztBQUNiLGNBQU0sT0FBTztBQUNiLGFBQUssVUFBVSxNQUFNO0FBQ3JCLGFBQUssVUFBVSxTQUFTLHVCQUF1QjtBQUMvQyxhQUFLLGNBQWM7QUFDbkIsY0FBTSxLQUFLLFFBQVE7QUFBQSxNQUNyQjtBQUFBLE1BRUEsZ0JBQWdCO0FBQ2QsYUFBSyxVQUFVLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzdCO0FBQUEsTUFFQSxZQUFZLEtBQUs7QUFDZixhQUFLLFVBQVUsTUFBTTtBQUNyQixhQUFLLFVBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyxTQUFTLENBQUM7QUFDaEQsY0FBTSxTQUFTLEtBQUssVUFBVSxjQUFjLFNBQVM7QUFDckQsZUFBTyxTQUFTLE9BQU8sRUFBRSxNQUFNLDZDQUE2QyxLQUFLLGVBQWUsQ0FBQztBQUNqRyxZQUFJLElBQUssUUFBTyxTQUFTLE9BQU8sRUFBRSxNQUFNLE9BQU8sR0FBRyxHQUFHLEtBQUssZUFBZSxDQUFDO0FBQzFFLGNBQU0sUUFBUSxPQUFPLFNBQVMsVUFBVSxFQUFFLEtBQUsscUJBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLGNBQU0saUJBQWlCLFNBQVMsTUFBTTtBQUFFLGVBQUssY0FBYztBQUFHLGVBQUssUUFBUTtBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQ2pGO0FBQUEsTUFFQSxNQUFNLFVBQVU7QUFDZCxZQUFJO0FBQ0YsZ0JBQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxLQUFLLEdBQUc7QUFDNUMsZUFBSyxnQkFBZ0IsSUFBSTtBQUFBLFFBQzNCLFNBQVMsR0FBRztBQUNWLGtCQUFRLE1BQU0sOEJBQThCLENBQUM7QUFDN0MsZUFBSyxZQUFZLEdBQUcsT0FBTztBQUFBLFFBQzdCO0FBQUEsTUFDRjtBQUFBLE1BRUEsTUFBTSxZQUFZLEtBQUs7QUFDckIsY0FBTSxDQUFDLE9BQU8sVUFBVSxPQUFPLFFBQVEsS0FBSyxRQUFRLFNBQVMsVUFBVSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsVUFDM0YsY0FBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLElBQUk7QUFBQSxVQUNuQyxhQUFhLEtBQUssRUFBRSxZQUFZLEtBQUssQ0FBQyxFQUFFLE1BQU0sTUFBTSxDQUFDLENBQUM7QUFBQSxVQUN0RCxrQkFBa0IsR0FBRyxFQUFFLE1BQU0sT0FBTyxFQUFFLFlBQVcsR0FBRyxVQUFTLEdBQUcsT0FBTSxDQUFDLEVBQUUsRUFBRTtBQUFBLFVBQzNFLFFBQVEsUUFBUSxrQkFBa0IsSUFBSSxLQUFLLENBQUM7QUFBQSxVQUM1QyxjQUFjLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQyxDQUFDO0FBQUEsVUFDakMsaUJBQWlCLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQyxDQUFDO0FBQUEsVUFDcEMsZUFBZSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUMsRUFBRTtBQUFBLFVBQ3BDLFFBQVEsUUFBUSxjQUFjLElBQUksS0FBSyxDQUFDO0FBQUEsUUFDMUMsQ0FBQztBQUNELGVBQU8sRUFBRSxPQUFPLFVBQVUsT0FBTyxRQUFRLEtBQUssUUFBUSxTQUFTLFdBQVc7QUFBQSxNQUM1RTtBQUFBLE1BRUEsZ0JBQWdCLE1BQU07QUFDcEIsY0FBTSxZQUFZLEtBQUs7QUFDdkIsa0JBQVUsTUFBTTtBQUNoQixjQUFNLE9BQU8sVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLFNBQVMsQ0FBQztBQUV4RCxhQUFLLGFBQWEsTUFBTSxJQUFJO0FBQzVCLGFBQUssbUJBQW1CLElBQUk7QUFFNUIsWUFBSSxLQUFLLFVBQVUsbUJBQW1CLE1BQU8sTUFBSyxpQkFBaUIsTUFBTSxJQUFJO0FBQzdFLFlBQUksS0FBSyxVQUFVLG1CQUFtQixTQUFTLEtBQUssVUFBVSx1QkFBdUIsT0FBTztBQUMxRixlQUFLLGlCQUFpQixNQUFNLElBQUk7QUFBQSxRQUNsQztBQUNBLFlBQUksS0FBSyxVQUFVLFlBQVksTUFBTyxNQUFLLFVBQVUsSUFBSTtBQUN6RCxZQUFJLEtBQUssVUFBVSxtQkFBbUIsTUFBTyxNQUFLLGlCQUFpQixNQUFNLElBQUk7QUFDN0UsWUFBSSxLQUFLLFVBQVUscUJBQXFCLE1BQU8sTUFBSyxlQUFlLE1BQU0sSUFBSTtBQUM3RSxZQUFJLEtBQUssVUFBVSxvQkFBb0IsTUFBTyxNQUFLLGtCQUFrQixNQUFNLElBQUk7QUFDL0UsWUFBSSxLQUFLLFVBQVUsb0JBQW9CLE1BQU8sTUFBSyxrQkFBa0IsTUFBTSxJQUFJO0FBQy9FLFlBQUksS0FBSyxVQUFVLGVBQWUsTUFBTyxNQUFLLGFBQWEsSUFBSTtBQUFBLE1BQ2pFO0FBQUEsTUFFQSxhQUFhLFdBQVcsTUFBTTtBQUM1QixjQUFNLElBQUksVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLGdCQUFnQixDQUFDO0FBQzVELGNBQU0sTUFBTSxPQUFPO0FBQ25CLGNBQU0sV0FBVyxDQUFDLFVBQVMsVUFBUyxVQUFTLFVBQVMsVUFBUyxVQUFTLFFBQVE7QUFDaEYsVUFBRSxTQUFTLE9BQU8sRUFBRSxNQUFNLGFBQWdCLElBQUksT0FBTyxZQUFZLENBQUMsZ0JBQWdCLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUM7QUFDcEksY0FBTSxhQUFhLEtBQUssT0FBTyxTQUFTLHVCQUF1QjtBQUMvRCxjQUFNLFdBQVcsS0FBSyxPQUFPLFNBQVM7QUFDdEMsVUFBRSxTQUFTLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixVQUFVLHNDQUF3QyxZQUFZLHNCQUFzQixJQUFJLEtBQUssdUJBQXVCLENBQUM7QUFDNUssY0FBTSxhQUFhLEVBQUUsU0FBUyxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUNyRSxtQkFBVyxZQUFZO0FBQ3ZCLG1CQUFXLGlCQUFpQixTQUFTLE1BQU07QUFBRSxlQUFLLGNBQWM7QUFBRyxlQUFLLFFBQVE7QUFBQSxRQUFHLENBQUM7QUFBQSxNQUN0RjtBQUFBLE1BRUEsbUJBQW1CLFdBQVc7QUFDNUIsY0FBTSxLQUFLLFVBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQztBQUM5RCxjQUFNLFVBQVU7QUFBQSxVQUNkLEVBQUUsT0FBTyxzQ0FBeUMsS0FBSyxhQUFhO0FBQUEsVUFDcEUsRUFBRSxPQUFPLHNDQUF5QyxLQUFLLFVBQVU7QUFBQSxVQUNqRSxFQUFFLE9BQU8sc0NBQXlDLEtBQUssYUFBYTtBQUFBLFVBQ3BFLEVBQUUsT0FBTyxzQ0FBeUMsS0FBSyxVQUFVO0FBQUEsVUFDakUsRUFBRSxPQUFPLDBCQUE2QixLQUFLLFNBQVM7QUFBQSxVQUNwRCxFQUFFLE9BQU8sNkJBQTZCLEtBQUssV0FBVztBQUFBLFFBQ3hEO0FBQ0EsZ0JBQVEsUUFBUSxDQUFDLE1BQU07QUFDckIsZ0JBQU0sTUFBTSxHQUFHLFNBQVMsVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFDOUQsY0FBSSxjQUFjLEVBQUU7QUFDcEIsY0FBSSxpQkFBaUIsU0FBUyxNQUFNO0FBQ2xDLGlCQUFLLGtCQUFrQixFQUFFLEdBQUc7QUFBQSxVQUM5QixDQUFDO0FBQUEsUUFDSCxDQUFDO0FBQUEsTUFDSDtBQUFBLE1BRUEsa0JBQWtCLEtBQUs7QUFDckIsZ0JBQVEsS0FBSztBQUFBLFVBQ1gsS0FBSyxjQUFjO0FBQ2pCLGtCQUFNLEVBQUUsY0FBYyxJQUFJO0FBQzFCLGlCQUFLLElBQUksVUFBVSxhQUFhLGNBQWMsT0FBTyxFQUFFLE9BQU8sWUFBWSxDQUFDLEdBQUcsSUFBSSxJQUFJO0FBQ3RGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSyxZQUFZO0FBQ2Ysa0JBQU0sVUFBVSxLQUFLLElBQUk7QUFDekIsZ0JBQUksU0FBUztBQUNYLHNCQUFRLEtBQUs7QUFDYixzQkFBUSxZQUFZLGFBQWE7QUFBQSxZQUNuQztBQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFDRSxpQkFBSyxJQUFJLFVBQVUsYUFBYSxnQkFBZ0IsSUFBSSxJQUFJO0FBQUEsUUFDNUQ7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUdBLGlCQUFpQixXQUFXLE1BQU07QUFDaEMsY0FBTSxVQUFVLFVBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyxvQ0FBb0MsQ0FBQztBQUN0RixjQUFNLFNBQVMsUUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQ3JFLGVBQU8sU0FBUyxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsS0FBSyx1QkFBdUIsQ0FBQztBQUMvRixZQUFJLEtBQUssT0FBTyxPQUFPO0FBQ3JCLGdCQUFNLEVBQUUsTUFBTSxNQUFNLE9BQU8sZUFBZSxJQUFJLEtBQUssTUFBTTtBQUN6RCxpQkFBTyxTQUFTLFFBQVE7QUFBQSxZQUN0QixNQUFNLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxjQUFjO0FBQUEsWUFDekMsS0FBSyxzQkFBc0IsUUFBUSxLQUFLLGtCQUFrQixNQUFNLHNCQUFzQixFQUFFO0FBQUEsVUFDMUYsQ0FBQztBQUFBLFFBQ0g7QUFFQSxjQUFNLE9BQU8sUUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLG9CQUFvQixDQUFDO0FBQ2pFLGNBQU0sV0FBVyxLQUFLLFVBQVUsZ0JBQWdCO0FBQ2hELGNBQU0sU0FBUyxLQUFLLE9BQU8sYUFBYSxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVE7QUFDN0QsWUFBSSxDQUFDLEtBQUssT0FBTyxRQUFRO0FBQ3ZCLGVBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSw4R0FBOEcsS0FBSyxlQUFlLENBQUM7QUFBQSxRQUNsSyxXQUFXLE1BQU0sV0FBVyxHQUFHO0FBQzdCLGVBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSxrQ0FBa0MsS0FBSyxlQUFlLENBQUM7QUFBQSxRQUN0RixPQUFPO0FBQ0wsZ0JBQU0sUUFBUSxDQUFDLFNBQVM7QUFDdEIsa0JBQU0sTUFBTSxLQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUsscUJBQXFCLEtBQUssT0FBTywyQkFBMkIsRUFBRSxHQUFHLENBQUM7QUFDMUcsa0JBQU0sV0FBVyxJQUFJLFNBQVMsUUFBUSxFQUFFLEtBQUssa0JBQWtCLENBQUM7QUFDaEUscUJBQVMsY0FBYyxLQUFLLE9BQU8sV0FBVztBQUM5QyxnQkFBSSxTQUFTLFFBQVEsRUFBRSxNQUFNLEtBQUssTUFBTSxLQUFLLG9CQUFvQixDQUFDO0FBQUEsVUFDcEUsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsTUFFQSxlQUFlLFdBQVcsTUFBTTtBQUM5QixjQUFNLFVBQVUsVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBQ25FLGdCQUFRLFNBQVMsT0FBTyxFQUFFLE1BQU0sc0NBQXlDLEtBQUssdUJBQXVCLENBQUM7QUFDdEcsY0FBTSxPQUFPLFFBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxzQkFBc0IsQ0FBQztBQUNuRSxjQUFNLFdBQVcsS0FBSyxZQUFZLENBQUM7QUFDbkMsWUFBSSxTQUFTLFdBQVcsR0FBRztBQUN6QixlQUFLLFNBQVMsT0FBTyxFQUFFLE1BQU0sOENBQThDLEtBQUssZUFBZSxDQUFDO0FBQ2hHO0FBQUEsUUFDRjtBQUNBLGlCQUFTLFFBQVEsQ0FBQyxTQUFTO0FBQ3pCLGdCQUFNLE9BQU8sS0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQ2hFLGVBQUssaUJBQWlCLFNBQVMsTUFBTTtBQUFFLGlCQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBTSxJQUFJLElBQUk7QUFBQSxVQUFHLENBQUM7QUFDOUYsZ0JBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUssMkJBQTJCLENBQUM7QUFDekUsbUJBQVMsU0FBUyxRQUFRLEVBQUUsTUFBTSxLQUFLLFNBQVMsV0FBVyxLQUFLLHVCQUF1QixDQUFDO0FBQ3hGLGdCQUFNLElBQUksT0FBTyxLQUFLLFlBQVksRUFBRSxFQUFFLFlBQVk7QUFDbEQsY0FBSSxFQUFHLFVBQVMsU0FBUyxRQUFRLEVBQUUsTUFBTSxLQUFLLFVBQVUsS0FBSyw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7QUFDL0YsZ0JBQU0sT0FBTyxLQUFLLE9BQU8sa0JBQWtCO0FBQzNDLGVBQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxtQkFBbUIsTUFBTSxFQUFFLE9BQU8sY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3ZGLGVBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSxHQUFHLEtBQUssT0FBTyxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sU0FBUyxDQUFDLElBQUksS0FBSyx3QkFBd0IsQ0FBQztBQUFBLFFBQ25ILENBQUM7QUFBQSxNQUNIO0FBQUEsTUFFQSxpQkFBaUIsV0FBVyxNQUFNO0FBQ2hDLGNBQU0sT0FBTyxVQUFVLFNBQVMsT0FBTyxFQUFFLEtBQUssY0FBYyxDQUFDO0FBRzdELFlBQUksS0FBSyxVQUFVLG1CQUFtQixPQUFPO0FBQzNDLGdCQUFNLE9BQU8sS0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLGFBQWEsQ0FBQztBQUN2RCxlQUFLLFNBQVMsT0FBTyxFQUFFLE1BQU0sNENBQStDLEtBQUssdUJBQXVCLENBQUM7QUFDekcsZ0JBQU0sUUFBUSxLQUFLLE9BQU8sY0FBYztBQUN4QyxnQkFBTSxXQUFXLEtBQUssT0FBTyxZQUFZO0FBQ3pDLGdCQUFNLGVBQWUsS0FBSyxZQUFZLENBQUMsR0FBRztBQUMxQyxnQkFBTSxjQUFjLEtBQUssY0FBYyxDQUFDLEdBQUc7QUFDM0MsZ0JBQU0sVUFBVTtBQUFBLFlBQ2QsRUFBRSxPQUFPLHNCQUFzQixPQUFPLE9BQU8sS0FBSyxFQUFFO0FBQUEsWUFDcEQsRUFBRSxPQUFPLDRCQUE0QixPQUFPLE9BQU8sV0FBVyxFQUFFO0FBQUEsWUFDaEUsRUFBRSxPQUFPLDRCQUE0QixPQUFPLE9BQU8sUUFBUSxFQUFFO0FBQUEsWUFDN0QsRUFBRSxPQUFPLHNCQUFzQixPQUFPLE9BQU8sVUFBVSxFQUFFO0FBQUEsVUFDM0Q7QUFDQSxnQkFBTSxPQUFPLEtBQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQztBQUMzRCxrQkFBUSxRQUFRLENBQUMsTUFBTTtBQUNyQixrQkFBTSxPQUFPLEtBQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQztBQUMxRCxpQkFBSyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxLQUFLLG9CQUFvQixDQUFDO0FBQ2hFLGlCQUFLLFNBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEtBQUssc0JBQXNCLENBQUM7QUFBQSxVQUNwRSxDQUFDO0FBRUQsY0FBSSxLQUFLLE9BQU8sT0FBTztBQUNyQixrQkFBTSxJQUFJLEtBQUssTUFBTTtBQUNyQixrQkFBTSxXQUFXO0FBQUEsY0FDZixFQUFFLE9BQU8sWUFBWSxPQUFPLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRTtBQUFBLGNBQ3BELEVBQUUsT0FBTyxTQUFTLE9BQU8sT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQUEsY0FDOUMsRUFBRSxPQUFPLGFBQWEsT0FBTyxPQUFPLEVBQUUsYUFBYSxDQUFDLEVBQUU7QUFBQSxjQUN0RCxFQUFFLE9BQU8sWUFBWSxPQUFPLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRTtBQUFBLFlBQ3REO0FBQ0Esa0JBQU0sVUFBVSxLQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFDbEUscUJBQVMsUUFBUSxDQUFDLE1BQU07QUFDdEIsb0JBQU0sT0FBTyxRQUFRLFNBQVMsT0FBTyxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFDakUsbUJBQUssU0FBUyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sS0FBSyx3QkFBd0IsQ0FBQztBQUNyRSxtQkFBSyxTQUFTLFFBQVEsRUFBRSxNQUFNLElBQUksRUFBRSxLQUFLLElBQUksS0FBSywwQkFBMEIsQ0FBQztBQUFBLFlBQy9FLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQUdBLFlBQUksS0FBSyxVQUFVLHVCQUF1QixPQUFPO0FBQy9DLGdCQUFNLFFBQVEsS0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLGFBQWEsQ0FBQztBQUN4RCxnQkFBTSxTQUFTLE9BQU8sRUFBRSxNQUFNLHNDQUF5QyxLQUFLLHVCQUF1QixDQUFDO0FBQ3BHLGdCQUFNLFNBQVMsS0FBSyxVQUFVLENBQUM7QUFDL0IsZ0JBQU0sV0FBVyxLQUFLLFVBQVUsa0JBQWtCO0FBQ2xELGdCQUFNLE9BQU8sTUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBQ2hFLGNBQUksT0FBTyxXQUFXLEdBQUc7QUFDdkIsaUJBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSxrQ0FBa0MsS0FBSyxlQUFlLENBQUM7QUFBQSxVQUN0RixPQUFPO0FBQ0wsbUJBQU8sTUFBTSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUztBQUMxQyxvQkFBTSxNQUFNLEtBQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUM5RCxrQkFBSSxTQUFTLFFBQVEsRUFBRSxNQUFNLE9BQU8sS0FBSyxLQUFLLEVBQUUsT0FBTyxhQUFhLEdBQUcsS0FBSyxxQkFBcUIsQ0FBQztBQUNsRyxvQkFBTSxPQUFPLElBQUksU0FBUyxLQUFLLEVBQUUsTUFBTSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUsscUJBQXFCLENBQUM7QUFDckYsbUJBQUssaUJBQWlCLFNBQVMsTUFBTTtBQUFFLHFCQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBTSxJQUFJLElBQUk7QUFBQSxjQUFHLENBQUM7QUFBQSxZQUNoRyxDQUFDO0FBQUEsVUFDSDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFFQSxVQUFVLFdBQVc7QUFDbkIsY0FBTSxNQUFNLFVBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyxhQUFhLENBQUM7QUFDM0QsWUFBSSxTQUFTLE9BQU8sRUFBRSxNQUFNLGtEQUF1RCxLQUFLLHVCQUF1QixDQUFDO0FBQ2hILGNBQU0sUUFBUSxJQUFJLFNBQVMsT0FBTyxFQUFFLEtBQUssbUJBQW1CLENBQUM7QUFDN0QsY0FBTSxRQUFRO0FBQUEsVUFDWixFQUFFLE9BQU8sMEJBQTZCLE1BQU0sb0NBQW9DO0FBQUEsVUFDaEYsRUFBRSxPQUFPLDBCQUE2QixNQUFNLG9DQUFvQztBQUFBLFVBQ2hGLEVBQUUsT0FBTywwQkFBNkIsTUFBTSxvQ0FBb0M7QUFBQSxVQUNoRixFQUFFLE9BQU8sZ0NBQW1DLE1BQU0sOERBQWlFO0FBQUEsVUFDbkgsRUFBRSxPQUFPLGdDQUFtQyxNQUFNLGFBQWE7QUFBQSxVQUMvRCxFQUFFLE9BQU8sbUJBQXNCLE1BQU0sVUFBVTtBQUFBLFVBQy9DLEVBQUUsT0FBTywwQkFBMEIsTUFBTSxZQUFZO0FBQUEsUUFDdkQ7QUFDQSxjQUFNLFFBQVEsQ0FBQyxTQUFTO0FBQ3RCLGdCQUFNLElBQUksTUFBTSxTQUFTLEtBQUssRUFBRSxNQUFNLEtBQUssT0FBTyxLQUFLLGtCQUFrQixDQUFDO0FBQzFFLFlBQUUsaUJBQWlCLFNBQVMsTUFBTTtBQUFFLGlCQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBTSxJQUFJLElBQUk7QUFBQSxVQUFHLENBQUM7QUFBQSxRQUM3RixDQUFDO0FBQUEsTUFDSDtBQUFBO0FBQUEsTUFHQSxpQkFBaUIsV0FBVyxNQUFNO0FBQ2hDLGNBQU0sUUFBUSxLQUFLLGNBQWMsQ0FBQztBQUNsQyxZQUFJLE1BQU0sV0FBVyxFQUFHO0FBRXhCLGNBQU0sV0FBVyxLQUFLLFVBQVUsaUJBQWlCO0FBQ2pELGNBQU0sVUFBVSxVQUFVLFNBQVMsT0FBTyxFQUFFLEtBQUssOEJBQThCLENBQUM7QUFDaEYsZ0JBQVEsU0FBUyxPQUFPLEVBQUUsTUFBTSxvQkFBdUIsTUFBTSxNQUFNLEtBQUssS0FBSyx1QkFBdUIsQ0FBQztBQUNyRyxjQUFNLE9BQU8sUUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLG9CQUFvQixDQUFDO0FBRWpFLGNBQU0sTUFBTSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUztBQUN6QyxnQkFBTSxNQUFNLEtBQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUM3RCxnQkFBTSxPQUFPLElBQUksU0FBUyxLQUFLLEVBQUUsTUFBTSxLQUFLLFlBQVksS0FBSyxNQUFNLEtBQUssb0JBQW9CLENBQUM7QUFDN0YsZUFBSyxpQkFBaUIsU0FBUyxNQUFNO0FBQUUsaUJBQUssSUFBSSxVQUFVLGFBQWEsS0FBSyxNQUFNLElBQUksSUFBSTtBQUFBLFVBQUcsQ0FBQztBQUM5RixjQUFJLEtBQUssTUFBTSxPQUFPO0FBQ3BCLGdCQUFJLFNBQVMsUUFBUSxFQUFFLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxFQUFFLE9BQU8sYUFBYSxHQUFHLEtBQUssb0JBQW9CLENBQUM7QUFBQSxVQUN4RztBQUFBLFFBQ0YsQ0FBQztBQUVELFlBQUksTUFBTSxTQUFTLFVBQVU7QUFDM0IsZ0JBQU0sT0FBTyxRQUFRLFNBQVMsT0FBTyxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFDakUsZUFBSyxTQUFTLEtBQUssRUFBRSxNQUFNLElBQUksTUFBTSxTQUFTLFFBQVEsWUFBWSxLQUFLLG9CQUFvQixDQUFDLEVBQ3pGLGlCQUFpQixTQUFTLE1BQU07QUFBRSxpQkFBSyxJQUFJLFVBQVUsYUFBYSxXQUFXLElBQUksSUFBSTtBQUFBLFVBQUcsQ0FBQztBQUFBLFFBQzlGO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFHQSxrQkFBa0IsV0FBVyxNQUFNO0FBQ2pDLGNBQU0sVUFBVSxLQUFLLFdBQVcsQ0FBQztBQUNqQyxjQUFNLFVBQVUsVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBQ25FLGdCQUFRLFNBQVMsT0FBTyxFQUFFLE1BQU0seUNBQXlDLEtBQUssdUJBQXVCLENBQUM7QUFFdEcsY0FBTSxPQUFPLFFBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUNsRSxjQUFNLGlCQUFpQixDQUFDLFVBQVUsV0FBVyxRQUFRLFNBQVMsV0FBVyxTQUFTO0FBQ2xGLGNBQU0sVUFBVSxlQUFlLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHLFdBQVcsUUFBUSxDQUFDLEdBQUcsT0FBTztBQUVyRixZQUFJLENBQUMsU0FBUztBQUNaLGVBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSwwREFBMEQsS0FBSyxlQUFlLENBQUM7QUFDNUc7QUFBQSxRQUNGO0FBRUEsdUJBQWUsUUFBUSxDQUFDLFFBQVE7QUFDOUIsZ0JBQU0sTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzdCLGdCQUFNLE9BQU8sS0FBSyxTQUFTLE9BQU87QUFBQSxZQUNoQyxLQUFLLHNCQUFzQixJQUFJLFdBQVcsU0FBUyx1QkFBdUIsRUFBRSxJQUFJLElBQUksVUFBVSxLQUFLLG9CQUFvQjtBQUFBLFVBQ3pILENBQUM7QUFDRCxlQUFLLFNBQVMsUUFBUSxFQUFFLE1BQU0sS0FBSyxLQUFLLHFCQUFxQixDQUFDO0FBQzlELGNBQUksSUFBSSxTQUFTO0FBQ2YsaUJBQUssU0FBUyxRQUFRLEVBQUUsTUFBTSxJQUFJLElBQUksUUFBUSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUM7QUFBQSxVQUN2RjtBQUNBLGNBQUksSUFBSSxTQUFTO0FBQ2YsaUJBQUssUUFBUSxTQUFTLElBQUksT0FBTztBQUFBLFVBQ25DO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLE1BRUEsa0JBQWtCLFdBQVcsTUFBTTtBQUNqQyxjQUFNLFVBQVUsVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBQ25FLGdCQUFRLFNBQVMsT0FBTyxFQUFFLE1BQU0sa0RBQXFELEtBQUssdUJBQXVCLENBQUM7QUFDbEgsY0FBTSxRQUFRLFFBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxlQUFlLENBQUM7QUFDN0QsY0FBTSxRQUFRLEtBQUssVUFBVSxDQUFDO0FBQzlCLGNBQU0sV0FBVyxLQUFLLElBQUksR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDekQsWUFBSSxNQUFNLFdBQVcsR0FBRztBQUN0QixnQkFBTSxTQUFTLE9BQU8sRUFBRSxNQUFNLDBEQUEwRCxLQUFLLGVBQWUsQ0FBQztBQUM3RztBQUFBLFFBQ0Y7QUFDQSxjQUFNLFFBQVEsQ0FBQyxTQUFTO0FBQ3RCLGdCQUFNLE1BQU0sTUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixDQUFDO0FBQzdELGNBQUksS0FBSyxRQUFTLEtBQUksU0FBUyxvQkFBb0I7QUFDbkQsZ0JBQU0sWUFBWSxLQUFLLElBQUksR0FBSSxLQUFLLFFBQVEsV0FBWSxFQUFFO0FBQzFELGNBQUksU0FBUyxPQUFPLEVBQUUsS0FBSyxvQkFBb0IsTUFBTSxFQUFFLE9BQU8sVUFBVSxTQUFTLEtBQUssRUFBRSxDQUFDLEVBQ3JGLFFBQVEsU0FBUyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxTQUFTO0FBQ3pELGNBQUksU0FBUyxPQUFPLEVBQUUsTUFBTSxPQUFPLEtBQUssS0FBSyxHQUFHLEtBQUssbUJBQW1CLENBQUM7QUFDekUsY0FBSSxTQUFTLE9BQU8sRUFBRSxNQUFNLEtBQUssU0FBUyxLQUFLLG1CQUFtQixDQUFDO0FBQUEsUUFDckUsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUVBLGFBQWEsV0FBVztBQUN0QixjQUFNLFVBQVUsVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLDJCQUEyQixDQUFDO0FBQzdFLGdCQUFRLFNBQVMsT0FBTyxFQUFFLE1BQU0sNkJBQWdDLEtBQUssdUJBQXVCLENBQUM7QUFDN0YsY0FBTSxPQUFPLFFBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQztBQUM5RCxhQUFLLFNBQVMsT0FBTztBQUFBLFVBQ25CLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQLENBQUM7QUFDRCxjQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQ3BFLGNBQU0sUUFBUSxTQUFTLFNBQVMsU0FBUztBQUFBLFVBQ3ZDLEtBQUs7QUFBQSxVQUNMLE1BQU0sRUFBRSxNQUFNLFFBQVEsYUFBYSx5REFBeUQ7QUFBQSxRQUM5RixDQUFDO0FBQ0QsY0FBTSxVQUFVLFNBQVMsU0FBUyxVQUFVLEVBQUUsS0FBSyxrQkFBa0IsTUFBTSxlQUFlLENBQUM7QUFFM0YsZ0JBQVEsaUJBQWlCLFNBQVMsTUFBTTtBQUN0QyxnQkFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQzdCLGNBQUksQ0FBQyxJQUFLO0FBQ1YsZUFBSyxJQUFJLFVBQVUsYUFBYSxnQkFBZ0IsSUFBSSxJQUFJO0FBQ3hELGdCQUFNLFFBQVE7QUFBQSxRQUNoQixDQUFDO0FBRUQsY0FBTSxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDdkMsY0FBSSxFQUFFLFFBQVEsU0FBUztBQUNyQixvQkFBUSxNQUFNO0FBQUEsVUFDaEI7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUVBLElBQUFELFFBQU8sVUFBVSxFQUFFLGFBQUFFLGNBQWEsbUJBQUFELG1CQUFrQjtBQUFBO0FBQUE7OztBQ25ZbEQ7QUFBQSx3QkFBQUUsVUFBQUMsU0FBQTtBQUVBLFFBQU0sRUFBRSxrQkFBa0IsU0FBUyxPQUFPLElBQUksUUFBUSxVQUFVO0FBRWhFLFFBQU1DLG9CQUFtQjtBQUFBO0FBQUEsTUFFdkIsVUFBVTtBQUFBO0FBQUEsTUFHVixnQkFBZ0I7QUFBQSxNQUNoQixnQkFBZ0I7QUFBQSxNQUNoQixpQkFBaUI7QUFBQSxNQUNqQixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixnQkFBZ0I7QUFBQSxNQUNoQixTQUFTO0FBQUE7QUFBQSxNQUdULGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxJQUNqQjtBQUVBLFFBQU1DLHFCQUFOLGNBQWdDLGlCQUFpQjtBQUFBLE1BQy9DLFlBQVksS0FBSyxRQUFRO0FBQ3ZCLGNBQU0sS0FBSyxNQUFNO0FBQ2pCLGFBQUssU0FBUztBQUFBLE1BQ2hCO0FBQUEsTUFFQSxVQUFVO0FBQ1IsY0FBTSxFQUFFLFlBQVksSUFBSTtBQUN4QixvQkFBWSxNQUFNO0FBRWxCLGFBQUsscUJBQXFCLFdBQVc7QUFDckMsYUFBSyx1QkFBdUIsV0FBVztBQUN2QyxhQUFLLHdCQUF3QixXQUFXO0FBQ3hDLGFBQUssbUJBQW1CLFdBQVc7QUFBQSxNQUNyQztBQUFBLE1BRUEscUJBQXFCLGFBQWE7QUFDaEMsb0JBQVksU0FBUyxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFOUMsWUFBSSxRQUFRLFdBQVcsRUFDcEIsUUFBUSxzQkFBc0IsRUFDOUIsUUFBUSwwREFBMEQsRUFDbEU7QUFBQSxVQUFVLENBQUMsV0FDVixPQUNHLFNBQVMsS0FBSyxPQUFPLFNBQVMsUUFBUSxFQUN0QyxTQUFTLE9BQU8sTUFBTTtBQUNyQixpQkFBSyxPQUFPLFNBQVMsV0FBVztBQUNoQyxrQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFVBQ2pDLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSjtBQUFBLE1BRUEsdUJBQXVCLGFBQWE7QUFDbEMsb0JBQVksU0FBUyxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxvQkFBWSxTQUFTLEtBQUs7QUFBQSxVQUN4QixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsUUFDUCxDQUFDO0FBRUQsY0FBTSxXQUFXO0FBQUEsVUFDZixFQUFFLEtBQUssa0JBQWtCLE1BQU0saUJBQWtCLE1BQU0scUNBQXFDO0FBQUEsVUFDNUYsRUFBRSxLQUFLLG9CQUFvQixNQUFNLG1CQUFtQixNQUFNLDRDQUE0QztBQUFBLFVBQ3RHLEVBQUUsS0FBSyxrQkFBa0IsTUFBTSxvQkFBb0IsTUFBTSw2Q0FBNkM7QUFBQSxVQUN0RyxFQUFFLEtBQUssc0JBQXNCLE1BQU0sbUJBQW1CLE1BQU0sMkJBQTJCO0FBQUEsVUFDdkYsRUFBRSxLQUFLLFdBQVcsTUFBTSxjQUFjLE1BQU0sMENBQTBDO0FBQUEsVUFDdEYsRUFBRSxLQUFLLGtCQUFrQixNQUFNLGVBQWUsTUFBTSxxQ0FBcUM7QUFBQSxVQUN6RixFQUFFLEtBQUssbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sMkNBQTJDO0FBQUEsVUFDakcsRUFBRSxLQUFLLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLDJDQUEyQztBQUFBLFVBQ2pHLEVBQUUsS0FBSyxjQUFjLE1BQU0sV0FBVyxNQUFNLDZCQUE2QjtBQUFBLFFBQzNFO0FBRUEsaUJBQVMsUUFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUN4QyxjQUFJLFFBQVEsV0FBVyxFQUNwQixRQUFRLElBQUksRUFDWixRQUFRLElBQUksRUFDWjtBQUFBLFlBQVUsQ0FBQyxXQUNWLE9BQ0csU0FBUyxLQUFLLE9BQU8sU0FBUyxHQUFHLENBQUMsRUFDbEMsU0FBUyxPQUFPLE1BQU07QUFDckIsbUJBQUssT0FBTyxTQUFTLEdBQUcsSUFBSTtBQUM1QixvQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFlBQ2pDLENBQUM7QUFBQSxVQUNMO0FBQUEsUUFDSixDQUFDO0FBQUEsTUFDSDtBQUFBLE1BRUEsd0JBQXdCLGFBQWE7QUFDbkMsb0JBQVksU0FBUyxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQsWUFBSSxRQUFRLFdBQVcsRUFDcEIsUUFBUSxrQkFBa0IsRUFDMUIsUUFBUSxxREFBcUQsRUFDN0Q7QUFBQSxVQUFRLENBQUMsU0FDUixLQUNHLGVBQWUsR0FBRyxFQUNsQixTQUFTLE9BQU8sS0FBSyxPQUFPLFNBQVMsY0FBYyxDQUFDLEVBQ3BELFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGtCQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGlCQUFLLE9BQU8sU0FBUyxpQkFBaUI7QUFDdEMsa0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxVQUNqQyxDQUFDO0FBQUEsUUFDTDtBQUVGLFlBQUksUUFBUSxXQUFXLEVBQ3BCLFFBQVEsZ0JBQWdCLEVBQ3hCLFFBQVEsOENBQThDLEVBQ3REO0FBQUEsVUFBUSxDQUFDLFNBQ1IsS0FDRyxlQUFlLElBQUksRUFDbkIsU0FBUyxPQUFPLEtBQUssT0FBTyxTQUFTLFlBQVksQ0FBQyxFQUNsRCxTQUFTLE9BQU8sTUFBTTtBQUNyQixrQkFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyRCxpQkFBSyxPQUFPLFNBQVMsZUFBZTtBQUNwQyxrQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFVBQ2pDLENBQUM7QUFBQSxRQUNMO0FBRUYsWUFBSSxRQUFRLFdBQVcsRUFDcEIsUUFBUSxpQkFBaUIsRUFDekIsUUFBUSw4Q0FBOEMsRUFDdEQ7QUFBQSxVQUFRLENBQUMsU0FDUixLQUNHLGVBQWUsR0FBRyxFQUNsQixTQUFTLE9BQU8sS0FBSyxPQUFPLFNBQVMsYUFBYSxDQUFDLEVBQ25ELFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGtCQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGlCQUFLLE9BQU8sU0FBUyxnQkFBZ0I7QUFDckMsa0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxVQUNqQyxDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFBQSxNQUVBLG1CQUFtQixhQUFhO0FBQzlCLG9CQUFZLFNBQVMsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTVDLGNBQU0sT0FBTyxTQUFTLHVCQUF1QjtBQUM3QyxhQUFLLFNBQVMsUUFBUTtBQUFBLFVBQ3BCLE1BQU07QUFBQSxRQUNSLENBQUM7QUFFRCxZQUFJLFFBQVEsV0FBVyxFQUNwQixRQUFRLFNBQVMsRUFDakIsUUFBUSxJQUFJO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBRUEsSUFBQUYsUUFBTyxVQUFVLEVBQUUsbUJBQUFFLG9CQUFtQixrQkFBQUQsa0JBQWlCO0FBQUE7QUFBQTs7O0FDckp2RCxJQUFNLEVBQUUsT0FBTyxJQUFJLFFBQVEsVUFBVTtBQUNyQyxJQUFNLEVBQUUsYUFBYSxrQkFBa0IsSUFBSTtBQUMzQyxJQUFNLEVBQUUsbUJBQW1CLGlCQUFpQixJQUFJO0FBRWhELE9BQU8sVUFBVSxNQUFNLHlCQUF5QixPQUFPO0FBQUEsRUFBdEM7QUFBQTtBQUNmLG9DQUFXLEVBQUUsR0FBRyxpQkFBaUI7QUFBQTtBQUFBLEVBRWpDLE1BQU0sU0FBUztBQUViLFVBQU0sS0FBSyxhQUFhO0FBR3hCLFNBQUssYUFBYSxtQkFBbUIsQ0FBQyxTQUFTLElBQUksWUFBWSxNQUFNLElBQUksQ0FBQztBQUcxRSxTQUFLLGNBQWMsU0FBUyxvQkFBb0IsTUFBTTtBQUNwRCxXQUFLLFlBQVk7QUFBQSxJQUNuQixDQUFDO0FBR0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU0sS0FBSyxZQUFZO0FBQUEsSUFDbkMsQ0FBQztBQUdELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNLEtBQUssZUFBZTtBQUFBLElBQ3RDLENBQUM7QUFHRCxTQUFLLGNBQWMsSUFBSSxrQkFBa0IsS0FBSyxLQUFLLElBQUksQ0FBQztBQUd4RCxTQUFLLElBQUksVUFBVSxjQUFjLE1BQU07QUFDckMsWUFBTSxXQUFXLEtBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUI7QUFDckUsVUFBSSxTQUFTLFdBQVcsS0FBSyxLQUFLLFNBQVMsVUFBVTtBQUNuRCxhQUFLLFlBQVk7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLE1BQU0sY0FBYztBQUNsQixVQUFNLEVBQUUsVUFBVSxJQUFJLEtBQUs7QUFFM0IsVUFBTSxXQUFXLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUM1RCxRQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3ZCLGdCQUFVLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDaEMsWUFBTSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3pCLFVBQUksUUFBUSxPQUFPLEtBQUssWUFBWSxZQUFZO0FBQzlDLGNBQU0sS0FBSyxRQUFRO0FBQUEsTUFDckI7QUFDQTtBQUFBLElBQ0Y7QUFFQSxVQUFNLE9BQU8sVUFBVSxRQUFRLElBQUk7QUFDbkMsVUFBTSxLQUFLLGFBQWE7QUFBQSxNQUN0QixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDVixDQUFDO0FBQ0QsY0FBVSxXQUFXLElBQUk7QUFBQSxFQUMzQjtBQUFBLEVBRUEsTUFBTSxpQkFBaUI7QUFDckIsVUFBTSxTQUFTLEtBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUI7QUFDbkUsZUFBVyxRQUFRLFFBQVE7QUFDekIsWUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBSSxRQUFRLE9BQU8sS0FBSyxZQUFZLFlBQVk7QUFDOUMsY0FBTSxLQUFLLFFBQVE7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFTO0FBQ2xDLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixLQUFLO0FBQUEsRUFDM0Q7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFFakMsU0FBSyxlQUFlO0FBQUEsRUFDdEI7QUFBQSxFQUVBLFdBQVc7QUFDVCxTQUFLLElBQUksVUFBVSxnQkFBZ0IsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDdEUsV0FBSyxPQUFPO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJWSUVXX1RZUEVfQ09DS1BJVCIsICJDb2NrcGl0VmlldyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJERUZBVUxUX1NFVFRJTkdTIiwgIkNvY2twaXRTZXR0aW5nVGFiIl0KfQo=
