// KOS Cockpit v7 — CSS-driven natural reflow (FLOWnote pattern)
// + Settings-aware: section toggles, data limits, plugin ref

const { ItemView, moment } = require('obsidian');
const {
  getTodayState, getInboxFiles, getDashboardStats,
  getRecentActivity, getHotContext, getWeeklyRecords,
  getEngineState, listProjects,
} = require('./home-service');

const VIEW_TYPE_COCKPIT = 'kos-cockpit-view';

class CockpitView extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType() { return VIEW_TYPE_COCKPIT; }
  getDisplayText() { return 'KOS Cockpit'; }
  getIcon() { return 'gauge'; }

  get settings() {
    return this.plugin ? this.plugin.settings : null;
  }

  async onload() {
    super.onload();
    this.contentEl.empty();
    this.contentEl.addClass('kos-cockpit-container');
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
    this.contentEl.createEl('div', { cls: 'kos-db' });
    const errBox = this.contentEl.querySelector('.kos-db');
    errBox.createEl('div', { text: 'Something went wrong loading the cockpit.', cls: 'kos-db-empty' });
    if (msg) errBox.createEl('div', { text: String(msg), cls: 'kos-db-empty' });
    const retry = errBox.createEl('button', { cls: 'kos-db-action-btn', text: '\u21BB Retry' });
    retry.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
  }

  async refresh() {
    try {
      const data = await this.collectData(this.app);
      this.renderDashboard(data);
    } catch (e) {
      console.error('KOS Cockpit refresh error:', e);
      this.renderError(e?.message);
    }
  }

  async collectData(app) {
    const [today, projects, stats, recent, hot, weekly, engines, inboxFiles] = await Promise.all([
      getTodayState(app).catch(() => null),
      listProjects(app, { activeOnly: true }).catch(() => []),
      getDashboardStats(app).catch(() => ({ totalNotes:0, todayNew:0, stats:{} })),
      Promise.resolve(getRecentActivity(app.vault)),
      getHotContext(app).catch(() => []),
      getWeeklyRecords(app).catch(() => []),
      getEngineState(app).catch(() => ({})),
      Promise.resolve(getInboxFiles(app.vault)),
    ]);
    return { today, projects, stats, recent, hot, weekly, engines, inboxFiles };
  }

  renderDashboard(data) {
    const container = this.contentEl;
    container.empty();
    const main = container.createEl('div', { cls: 'kos-db' });

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
    const h = container.createEl('div', { cls: 'kos-db-header' });
    const now = moment();
    const dayNames = ['\u65E5','\u4E00','\u4E8C','\u4E09','\u56DB','\u4E94','\u516D'];
    h.createEl('div', { text: `\uD83D\uDCC5 ${now.format('YYYY-MM-DD')} \u661F\u671F${dayNames[now.day()]}`, cls: 'kos-db-header-date' });
    const statusText = data.today?.exists ? '\u5DF2\u521B\u5EFA' : '\u672A\u521B\u5EFA';
    const focusVal = data.today?.focus || '';
    h.createEl('div', { text: `\u6BCF\u65E5\u7B14\u8BB0 [${statusText}]  \u00B7  \u4ECA\u65E5\u805A\u7126: ${focusVal || '(\u672A\u8BBE\u5B9A)'}`, cls: 'kos-db-header-status' });
    const refreshBtn = h.createEl('button', { cls: 'kos-db-refresh-btn' });
    refreshBtn.innerHTML = '\u21BB';
    refreshBtn.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
  }

  renderQuickActions(container) {
    const qa = container.createEl('div', { cls: 'kos-db-actions' });
    const actions = [
      { label: '\uD83D\uDCC5 \u89C4\u5212\u4ECA\u5929', cmd: 'daily-open' },
      { label: '\uD83D\uDCDD \u5FEB\u901F\u6355\u83B7', cmd: 'capture' },
      { label: '\uD83D\uDD04 \u6BCF\u65E5\u56DE\u987E', cmd: 'day-review' },
      { label: '\uD83D\uDCCB \u65B0\u5EFA\u9879\u76EE', cmd: 'project' },
      { label: '\uD83D\uDDC2\uFE0F Triage', cmd: 'triage' },
      { label: '\u2699\uFE0F \u8BBE\u7F6E', cmd: 'settings' },
    ];
    actions.forEach((a) => {
      const btn = qa.createEl('button', { cls: 'kos-db-action-btn' });
      btn.textContent = a.label;
      btn.addEventListener('click', () => {
        this.handleQuickAction(a.cmd);
      });
    });
  }

  handleQuickAction(cmd) {
    switch (cmd) {
      case 'daily-open': {
        const { dailyNotePath } = require('./utils');
        this.app.workspace.openLinkText(dailyNotePath(moment().format('YYYY-MM-DD')), '', true);
        break;
      }
      case 'settings': {
        const setting = this.app.setting;
        if (setting) {
          setting.open();
          setting.openTabById('kos-cockpit');
        }
        break;
      }
      default:
        this.app.workspace.openLinkText('_meta/hot.md', '', true);
    }
  }

  // --- Today's Task Panel ---
  renderTodayTasks(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section kos-db-today-tasks' });
    const header = section.createEl('div', { cls: 'kos-db-today-header' });
    header.createEl('div', { text: '\u2705 \u4ECA\u65E5\u4EFB\u52A1', cls: 'kos-db-section-title' });
    if (data.today?.tasks) {
      const { open, done, total, completionRate } = data.today.tasks;
      header.createEl('span', {
        text: `${done}/${total} (${completionRate}%)`,
        cls: `kos-db-today-count ${total > 0 && completionRate >= 100 ? 'kos-db-today-done' : ''}`,
      });
    }

    const list = section.createEl('div', { cls: 'kos-db-today-list' });
    const maxItems = this.settings?.maxTaskItems || 12;
    const items = (data.today?.taskItems || []).slice(0, maxItems);
    if (!data.today?.exists) {
      list.createEl('div', { text: '\u4ECA\u65E5\u7B14\u8BB0\u672A\u521B\u5EFA\u3002\u70B9\u51FB [\u89C4\u5212\u4ECA\u5929] \u521B\u5EFA\u3002', cls: 'kos-db-empty' });
    } else if (items.length === 0) {
      list.createEl('div', { text: '\u6682\u65E0\u4EFB\u52A1\u3002', cls: 'kos-db-empty' });
    } else {
      items.forEach((item) => {
        const row = list.createEl('div', { cls: `kos-db-today-item ${item.done ? 'kos-db-today-item-done' : ''}` });
        const checkbox = row.createEl('span', { cls: 'kos-db-today-cb' });
        checkbox.textContent = item.done ? '\u2611' : '\u2610';
        row.createEl('span', { text: item.text, cls: 'kos-db-today-text' });
      });
    }
  }

  renderProjects(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\uD83D\uDCCB \u6D3B\u8DC3\u9879\u76EE', cls: 'kos-db-section-title' });
    const grid = section.createEl('div', { cls: 'kos-db-project-grid' });
    const projects = data.projects || [];
    if (projects.length === 0) {
      grid.createEl('div', { text: '\u6682\u65E0\u6D3B\u8DC3\u9879\u76EE\u3002', cls: 'kos-db-empty' });
      return;
    }
    projects.forEach((proj) => {
      const card = grid.createEl('div', { cls: 'kos-db-project-card' });
      card.addEventListener('click', () => { this.app.workspace.openLinkText(proj.path, '', true); });
      const titleRow = card.createEl('div', { cls: 'kos-db-project-title-row' });
      titleRow.createEl('span', { text: proj.title || 'Unnamed', cls: 'kos-db-project-title' });
      const p = String(proj.priority || '').toLowerCase();
      if (p) titleRow.createEl('span', { text: proj.priority, cls: `kos-db-badge kos-db-badge-${p}` });
      const rate = proj.tasks?.completionRate || 0;
      card.createEl('div', { cls: 'kos-db-progress', attr: { style: `--progress:${rate}%` } });
      card.createEl('div', { text: `${proj.tasks?.done || 0}/${proj.tasks?.total || 0}`, cls: 'kos-db-progress-label' });
    });
  }

  renderTwoColumns(container, data) {
    const cols = container.createEl('div', { cls: 'kos-db-cols' });

    // --- Left: Vault Stats ---
    if (this.settings?.showVaultStats !== false) {
      const left = cols.createEl('div', { cls: 'kos-db-col' });
      left.createEl('div', { text: '\uD83D\uDCCA \u77E5\u8BC6\u5E93\u7EDF\u8BA1', cls: 'kos-db-section-title' });
      const total = data.stats?.totalNotes || 0;
      const todayNew = data.stats?.todayNew || 0;
      const activeCount = (data.projects || []).length;
      const inboxCount = (data.inboxFiles || []).length;
      const metrics = [
        { label: '\u603B\u7B14\u8BB0', value: String(total) },
        { label: '\u6D3B\u8DC3\u9879\u76EE', value: String(activeCount) },
        { label: '\u4ECA\u65E5\u65B0\u589E', value: String(todayNew) },
        { label: '\u5F85\u5206\u62E3', value: String(inboxCount) },
      ];
      const grid = left.createEl('div', { cls: 'kos-db-metrics' });
      metrics.forEach((m) => {
        const item = grid.createEl('div', { cls: 'kos-db-metric' });
        item.createEl('div', { text: m.value, cls: 'kos-db-metric-val' });
        item.createEl('div', { text: m.label, cls: 'kos-db-metric-label' });
      });

      if (data.stats?.stats) {
        const s = data.stats.stats;
        const subStats = [
          { label: 'Projects', value: String(s.projects || 0) },
          { label: 'Areas', value: String(s.areas || 0) },
          { label: 'Resources', value: String(s.resources || 0) },
          { label: 'Periodic', value: String(s.periodic || 0) },
        ];
        const subGrid = left.createEl('div', { cls: 'kos-db-sub-metrics' });
        subStats.forEach((m) => {
          const item = subGrid.createEl('div', { cls: 'kos-db-sub-metric' });
          item.createEl('span', { text: m.value, cls: 'kos-db-sub-metric-val' });
          item.createEl('span', { text: ` ${m.label}`, cls: 'kos-db-sub-metric-label' });
        });
      }
    }

    // --- Right: Recent Activity ---
    if (this.settings?.showRecentActivity !== false) {
      const right = cols.createEl('div', { cls: 'kos-db-col' });
      right.createEl('div', { text: '\uD83D\uDD04 \u6700\u8FD1\u6D3B\u52A8', cls: 'kos-db-section-title' });
      const recent = data.recent || [];
      const maxItems = this.settings?.maxRecentItems || 8;
      const list = right.createEl('div', { cls: 'kos-db-recent-list' });
      if (recent.length === 0) {
        list.createEl('div', { text: '\u6682\u65E0\u6D3B\u52A8\u3002', cls: 'kos-db-empty' });
      } else {
        recent.slice(0, maxItems).forEach((item) => {
          const row = list.createEl('div', { cls: 'kos-db-recent-item' });
          row.createEl('span', { text: moment(item.mtime).format('MM-DD HH:mm'), cls: 'kos-db-recent-time' });
          const link = row.createEl('a', { text: `  ${item.title}`, cls: 'kos-db-recent-link' });
          link.addEventListener('click', () => { this.app.workspace.openLinkText(item.path, '', true); });
        });
      }
    }
  }

  renderNav(container) {
    const nav = container.createEl('div', { cls: 'kos-db-nav' });
    nav.createEl('div', { text: '\uD83C\uDFE0 \u4E09\u652F\u67F1 \u00B7 \u5BFC\u822A', cls: 'kos-db-section-title' });
    const links = nav.createEl('div', { cls: 'kos-db-nav-links' });
    const items = [
      { label: '\uD83C\uDFE0 \u751F\u6D3B', path: '2 Areas/\u751F\u6D3B/\u751F\u6D3B' },
      { label: '\uD83D\uDCD6 \u5B66\u4E60', path: '2 Areas/\u5B66\u4E60/\u5B66\u4E60' },
      { label: '\uD83D\uDCBC \u5DE5\u4F5C', path: '2 Areas/\u5DE5\u4F5C/\u5DE5\u4F5C' },
      { label: '\uD83D\uDCD6 \u603B\u7D22\u5F15', path: '_meta/\uD83D\uDD17 \u77E5\u8BC6\u5173\u8054/Index/_index-zh-cn' },
      { label: '\uD83D\uDDC4\uFE0F \u5F52\u6863', path: '4 Archives' },
      { label: '\uD83D\uDCE5 Inbox', path: '0 Inbox' },
      { label: '\u2699\uFE0F Hot Cache', path: '_meta/hot' },
    ];
    items.forEach((item) => {
      const a = links.createEl('a', { text: item.label, cls: 'kos-db-nav-link' });
      a.addEventListener('click', () => { this.app.workspace.openLinkText(item.path, '', true); });
    });
  }

  // --- Inbox File List ---
  renderInboxFiles(container, data) {
    const files = data.inboxFiles || [];
    if (files.length === 0) return;

    const maxItems = this.settings?.maxInboxItems || 6;
    const section = container.createEl('div', { cls: 'kos-db-section kos-db-inbox' });
    section.createEl('div', { text: `\uD83D\uDCE5 Inbox (${files.length})`, cls: 'kos-db-section-title' });
    const list = section.createEl('div', { cls: 'kos-db-inbox-list' });

    files.slice(0, maxItems).forEach((file) => {
      const row = list.createEl('div', { cls: 'kos-db-inbox-item' });
      const name = row.createEl('a', { text: file.basename || file.path, cls: 'kos-db-inbox-link' });
      name.addEventListener('click', () => { this.app.workspace.openLinkText(file.path, '', true); });
      if (file.stat?.mtime) {
        row.createEl('span', { text: moment(file.stat.mtime).format('MM-DD HH:mm'), cls: 'kos-db-inbox-time' });
      }
    });

    if (files.length > maxItems) {
      const more = section.createEl('div', { cls: 'kos-db-inbox-more' });
      more.createEl('a', { text: `+${files.length - maxItems} more...`, cls: 'kos-db-inbox-link' })
        .addEventListener('click', () => { this.app.workspace.openLinkText('0 Inbox', '', true); });
    }
  }

  // --- Engine State Display ---
  renderEngineState(container, data) {
    const engines = data.engines || {};
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\u2699\uFE0F \u5F15\u64CE\u72B6\u6001', cls: 'kos-db-section-title' });

    const grid = section.createEl('div', { cls: 'kos-db-engine-grid' });
    const primaryEngines = ['triage', 'compile', 'link', 'daily', 'project', 'archive'];
    const hasData = primaryEngines.some((e) => engines[e]?.lastRun || engines[e]?.summary);

    if (!hasData) {
      grid.createEl('div', { text: '\u6682\u65E0\u5F15\u64CE\u72B6\u6001\u6570\u636E\u3002', cls: 'kos-db-empty' });
      return;
    }

    primaryEngines.forEach((key) => {
      const eng = engines[key] || {};
      const chip = grid.createEl('div', {
        cls: `kos-db-engine-chip ${eng.status === 'done' ? 'kos-db-engine-done' : ''} ${eng.lastRun ? '' : 'kos-db-engine-idle'}`,
      });
      chip.createEl('span', { text: key, cls: 'kos-db-engine-name' });
      if (eng.lastRun) {
        chip.createEl('span', { text: ` ${eng.lastRun.slice(5)}`, cls: 'kos-db-engine-date' });
      }
      if (eng.summary) {
        chip.setAttr('title', eng.summary);
      }
    });
  }

  renderWeeklyChart(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\uD83D\uDCC8 \u672C\u5468\u8BB0\u5F55\u5206\u5E03', cls: 'kos-db-section-title' });
    const chart = section.createEl('div', { cls: 'kos-db-chart' });
    const cells = data.weekly || [];
    const maxCount = Math.max(1, ...cells.map((c) => c.count));
    if (cells.length === 0) {
      chart.createEl('div', { text: '\u672C\u5468\u6682\u65E0\u65E5\u8BB0\u8BB0\u5F55\u3002', cls: 'kos-db-empty' });
      return;
    }
    cells.forEach((cell) => {
      const col = chart.createEl('div', { cls: 'kos-db-chart-col' });
      if (cell.isToday) col.addClass('kos-db-chart-today');
      const barHeight = Math.max(4, (cell.count / maxCount) * 60);
      col.createEl('div', { cls: 'kos-db-chart-bar', attr: { style: `height:${barHeight}px` } })
         .setAttr('title', `${cell.date}: ${cell.count} \u6761`);
      col.createEl('div', { text: String(cell.count), cls: 'kos-db-chart-val' });
      col.createEl('div', { text: cell.weekday, cls: 'kos-db-chart-day' });
    });
  }

  renderAIChat(container) {
    const section = container.createEl('div', { cls: 'kos-db-section kos-db-ai' });
    section.createEl('div', { text: '\uD83E\uDD16 AI \u5BF9\u8BDD', cls: 'kos-db-section-title' });
    const body = section.createEl('div', { cls: 'kos-db-ai-body' });
    body.createEl('div', {
      text: '\u5728\u6B64\u5904\u5D4C\u5165 Codex / FLOWnote AI \u5BF9\u8BDD\u89C6\u56FE\u3002\u76EE\u524D\u4F7F\u7528\u547D\u4EE4\u9762\u677F\u6216\u4FA7\u680F\u8FDB\u884C AI \u4EA4\u4E92\u3002',
      cls: 'kos-db-ai-placeholder',
    });
    const inputRow = body.createEl('div', { cls: 'kos-db-ai-input-row' });
    const input = inputRow.createEl('input', {
      cls: 'kos-db-ai-input',
      attr: { type: 'text', placeholder: '\u8F93\u5165\u547D\u4EE4\u6216\u95EE\u9898\u2026\u2026' },
    });
    const sendBtn = inputRow.createEl('button', { cls: 'kos-db-ai-send', text: '\u53D1\u9001' });

    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      this.app.workspace.openLinkText('_meta/hot.md', '', true);
      input.value = '';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  }
}

module.exports = { CockpitView, VIEW_TYPE_COCKPIT };
