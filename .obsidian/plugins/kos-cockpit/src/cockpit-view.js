// KOS Cockpit v11 — Full tab navigation (home / chat / life / pipeline / garden / settings)
// + Settings-aware + locale i18n + AI Chat with FLOWnote auto-detect

const { ItemView, moment } = require('obsidian');
const { t } = require('./locale');
const { AIChat, resolveProviderConfig } = require('./ai-chat');
const {
  getTodayState, getInboxFiles, getDashboardStats,
  getRecentActivity, getHotContext, getWeeklyRecords,
  getEngineState, listProjects,
} = require('./home-service');
const {
  calcHealthScore, getTrend, getKeyMetrics,
  getTodayCaptureCount, calcStreak,
} = require('./health-service');
const { getInboxDetail, getCompileQueue, getThroughputStats } = require('./pipeline-service');

const VIEW_TYPE_COCKPIT = 'kos-cockpit-view';

class CockpitView extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.aiChat = null;
    this.activePanel = 'home'; // 'home' | 'chat' | 'life' | 'pipeline' | 'garden' | 'settings'
  }

  getViewType() { return VIEW_TYPE_COCKPIT; }
  getDisplayText() {
    const names = { home: this._t('panel.home'), chat: this._t('panel.chat'), life: this._t('panel.life'), pipeline: this._t('panel.pipeline'), garden: this._t('panel.garden'), settings: this._t('panel.settings') };
    return names[this.activePanel] || this._t('panel.home');
  }
  getIcon() { return 'gauge'; }

  get settings() { return this.plugin ? this.plugin.settings : null; }

  _t(key, params) { return t(key, this.settings?.locale || 'zh-cn', params); }

  get _dayNames() {
    return [
      this._t('day.sun'), this._t('day.mon'), this._t('day.tue'),
      this._t('day.wed'), this._t('day.thu'), this._t('day.fri'),
      this._t('day.sat'),
    ];
  }

  async onload() {
    super.onload();
    this.contentEl.empty();
    this.contentEl.addClass('kos-cockpit-container');
    this._applySeasonalTheme();
    this.renderLoading();
    await this.refresh();
  }

  renderLoading() {
    this.contentEl.innerHTML =
      '<div class="kos-cockpit-loading">' +
        '<div class="kos-cockpit-loading-spinner"></div>' +
        '<span>' + this._t('app.loading') + '</span>' +
      '</div>';
  }

  renderError(msg) {
    this.contentEl.empty();
    this.contentEl.createEl('div', { cls: 'kos-db' });
    const errBox = this.contentEl.querySelector('.kos-db');
    errBox.createEl('div', { text: this._t('app.error'), cls: 'kos-db-empty' });
    if (msg) errBox.createEl('div', { text: String(msg), cls: 'kos-db-empty' });
    const retry = errBox.createEl('button', { cls: 'kos-db-action-btn', text: '\u21BB ' + this._t('app.retry') });
    retry.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
  }

  async refresh() {
    try {
      const data = await this.collectData(this.app);
      this.renderPanel(data);
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

    // Phase 1: pipeline data
    const [inboxDetail, compileQueue] = await Promise.all([
      getInboxDetail(app).catch(() => []),
      getCompileQueue(app).catch(() => []),
    ]);
    return { today, projects, stats, recent, hot, weekly, engines, inboxFiles, inboxDetail, compileQueue };
  }

  /** Switch between panels */
  switchPanel(panel, data) {
    this.activePanel = panel;
    this.renderPanel(data || null);
  }

  
  // ──────────────── Font Size ────────────────

  _applyFontSize() {
    var size = this.settings?.fontSize || 'medium';
    var root = this.contentEl;
    if (!root) return;
    root.removeClass('font-small');
    root.removeClass('font-medium');
    root.removeClass('font-large');
    root.addClass('font-' + size);
  }

  // ──────────────── Seasonal Theme ────────────────

  _applySeasonalTheme() {
    var season = this.settings?.seasonalTheme || 'spring';
    var root = this.contentEl;
    if (!root) return;
    ['theme-spring','theme-summer','theme-autumn','theme-winter'].forEach(function(c) { root.removeClass(c); });
    root.addClass('theme-' + season);
  }

  // ──────────────── Panel Router ────────────────

  renderPanel(data) {
    const container = this.contentEl;
    container.empty();
    const main = container.createEl('div', { cls: 'kos-db' });

    this._applySeasonalTheme();
    this._applyFontSize();
    // Render tab bar for all panels
    this._renderTabBar(main);

    // Render active panel content
    const contentArea = main.createEl('div', { cls: 'kos-tab-content active', attr: { style: 'min-height:400px' } });
    if (this.activePanel === 'chat') {
      this.renderChatView(contentArea, data);
    } else if (this.activePanel === 'life') {
      this.renderLifeView(contentArea, data);
    } else if (this.activePanel === 'pipeline') {
      this.renderPipelineView(contentArea, data);
    } else if (this.activePanel === 'garden') {
      this.renderGardenView(contentArea, data);
    } else if (this.activePanel === 'settings') {
      this.renderSettingsView(contentArea, data);
    } else {
      this.renderDashboard(contentArea, data);
    }
  }

  // ──────────────── Tab Bar ────────────────

  _renderTabBar(container) {
    const tabs = [
      { id: 'home', icon: '\uD83D\uDCCA', label: this._t('tab.dashboard') },
      { id: 'chat', icon: '\uD83E\uDD16', label: this._t('ai.title') },
      { id: 'life', icon: '\uD83E\uDDEC', label: this._t('tab.life') },
      { id: 'pipeline', icon: '\uD83D\uDD27', label: this._t('tab.pipeline') },
      { id: 'garden', icon: '\uD83C\uDF33', label: this._t('tab.garden') },
      { id: 'settings', icon: '\u2699\uFE0F', label: this._t('tab.settings') },
    ];
    var bar = container.createEl('div', { cls: 'kos-tabbar' });
    tabs.forEach(function(t) {
      var item = bar.createEl('button', {
        cls: 'kos-tab-item' + (t.id === this.activePanel ? ' active' : ''),
      });
      item.innerHTML = t.icon + ' ' + t.label;
      item.addEventListener('click', function() {
        if (t.id === this.activePanel) return;
        this.collectData(this.app).then(function(d) { this.switchPanel(t.id, d); }.bind(this));
      }.bind(this));
    }.bind(this));
  }

  // ──────────────── Home (Dashboard) ────────────────

  renderDashboard(container, data) {
    this._renderTopBar(container, data);
    this._renderPipelineFlow(container, data);
    this._renderKeyMetrics(container, data);
    const grid = container.createEl('div', { cls: 'kos-dashboard-grid' });
    // Zone 1 — 引擎 (Engine): Health · Engine Control · Quick Launch
    const zone1 = grid.createEl('div', { cls: 'kos-zone-left', attr: { style: 'display:flex;flex-direction:column;gap:14px' } });
    this._renderHealthPanel(zone1, data);
    this._renderEngineControl(zone1, data);
    this._renderLaunchPanel(zone1);
    // Zone 2 — 工作 (Work): Today Focus · Active Projects
    const zone2 = grid.createEl('div', { cls: 'kos-zone-center', attr: { style: 'display:flex;flex-direction:column;gap:14px' } });
    this._renderTodayFocus(zone2, data);
    this._renderProjectsPanel(zone2, data);
    // Zone 3 — 知识 (Knowledge): Growth · Feed · Hot
    const zone3 = grid.createEl('div', { cls: 'kos-zone-right', attr: { style: 'display:flex;flex-direction:column;gap:14px' } });
    this._renderGrowthPanel(zone3, data);
    this._renderFeedPanel(zone3, data);
    this._renderHotPanel(zone3, data);
  }

  _renderTopBar(container, data) {
    const bar = container.createEl('div', { cls: 'kos-topbar' });
    const brand = bar.createEl('div', { cls: 'kos-topbar-brand' });
    brand.createEl('span', { cls: 'kos-logo', text: 'KOS' });
    brand.createEl('small', { cls: 'kos-logo-sub', text: 'v2' });
    const score = calcHealthScore(data);
    const badgeCls = score >= 85 ? 'health-optimal' : score >= 65 ? 'health-warning' : 'health-critical';
    const badge = bar.createEl('div', { cls: 'kos-health-badge ' + badgeCls, attr: { title: 'Vault Health: ' + score + '%' } });
    badge.createEl('span', { cls: 'dot' });
    badge.createEl('span', { cls: 'health-text', text: score + '/100' });
    badge.addEventListener('click', () => { this._handleLaunch('init'); });
    bar.createEl('div', { cls: 'kos-topbar-spacer' });
    const searchWrap = bar.createEl('div', { cls: 'kos-topbar-search' });
    var searchInput = searchWrap.createEl('input', { cls: 'kos-topbar-search-input', attr: { type: 'text', placeholder: this._t('search.placeholder') } });
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var val = searchInput.value.trim();
        if (val) { this.app.workspace.getLeaf('tab').setViewState({ type: 'search', state: { query: val, matchCase: false } }); }
      }
    }.bind(this));
    const actions = bar.createEl('div', { cls: 'kos-topbar-actions' });
    const refreshBtn = actions.createEl('button', { cls: 'kos-topbar-btn', text: '\u21BB', attr: { title: this._t('tooltip.refresh') } });
    refreshBtn.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
    const clock = actions.createEl('div', { cls: 'kos-topbar-clock' });
    const now = moment();
    clock.createEl('span', { cls: 'kos-topbar-date', text: now.format('ddd YYYY-MM-DD') });
    clock.createEl('span', { cls: 'kos-topbar-time', text: now.format('HH:mm') });
  }

  // Phase 1: Pipeline Flow

  _renderPipelineFlow(container, data) {
    var inboxCount = (data.inboxFiles || []).length;
    var compileCount = (data.compileQueue || []).length;
    var stats = data.stats?.stats || {};
    var wikiCount = (stats.resources || 0) - (stats.inbox || 0);
    var panel = container.createEl('div', { cls: 'kos-panel' });
    var body = panel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:12px 14px' } });
    var flowRow = body.createEl('div', { attr: { style: 'display:flex;align-items:center;gap:0;flex-wrap:wrap;justify-content:center' } });
    var steps = [
      { label: this._t('pipeline.inbox'), count: inboxCount, color: inboxCount === 0 ? 'var(--kc-green)' : inboxCount <= 5 ? 'var(--kc-amber)' : 'var(--kc-red)', ikey: 'inbox' },
      { label: this._t('pipeline.triage'), count: '-', color: 'var(--kc-text-dim)', ikey: 'triage' },
      { label: this._t('pipeline.raw'), count: compileCount, color: compileCount === 0 ? 'var(--kc-green)' : 'var(--kc-amber)', ikey: 'compile' },
      { label: this._t('pipeline.compile'), count: '-', color: 'var(--kc-text-dim)', ikey: 'compile-run' },
      { label: this._t('pipeline.wiki'), count: wikiCount, color: wikiCount > 0 ? 'var(--kc-green)' : 'var(--kc-text-dim)', ikey: 'wiki' },
    ];
    steps.forEach(function(s, idx) {
      var el = flowRow.createEl('div', {
        attr: { style: 'display:flex;align-items:center;gap:6px;padding:6px 10px;cursor:pointer;border-radius:6px;transition:all 0.2s' },
      });
      el.addEventListener('mouseenter', function() { el.style.background = 'var(--kc-bg-card)'; });
      el.addEventListener('mouseleave', function() { el.style.background = 'transparent'; });
      el.addEventListener('click', function() {
        if (s.ikey === 'inbox') { this.app.workspace.openLinkText('0 Inbox', '', true); }
        else if (s.ikey === 'compile') { new Notice('Pipeline view — coming soon'); }
        else if (s.ikey === 'wiki') { this.app.workspace.openLinkText('3 Resources/000-Knowledge', '', true); }
      }.bind(this));
      el.createEl('span', { text: String(s.count), attr: { style: 'font-family:var(--kc-mono);font-size:14px;font-weight:700;color:' + s.color } });
      el.createEl('span', { text: s.label, attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px' } });
      if (idx < steps.length - 1) {
        flowRow.createEl('span', { text: String.fromCharCode(8594), attr: { style: 'color:var(--kc-text-dim);font-size:var(--kc-fs-md);margin:0 2px;opacity:0.3' } });
      }
    }.bind(this));
    body.createEl('div', { attr: { style: 'text-align:center;margin-top:6px;font-size:var(--kc-fs-xs);color:var(--kc-text-dim)' }, text: this._t('pipeline.clickNavigate') });
  }

  // Phase 1: Key Metrics Row

  _renderKeyMetrics(container, data) {
    var metrics = getKeyMetrics(data);
    var row = container.createEl('div', { attr: { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px' } });
    metrics.forEach(function(m) {
      var card = row.createEl('div', { cls: 'kos-panel', attr: { style: 'padding:12px 14px;text-align:center;border-left:3px solid ' + m.color } });
      card.createEl('div', { attr: { style: 'font-size:24px;font-weight:700;font-family:var(--kc-mono);color:' + m.color }, text: m.value });
      card.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px' }, text: m.label });
      var trendEl = card.createEl('div', { attr: { style: 'margin-top:4px;font-size:var(--kc-fs-xs)' } });
      var trendIcon = m.trend === 'up' ? String.fromCharCode(9650) : m.trend === 'down' ? String.fromCharCode(9660) : String.fromCharCode(8212);
      var trendColor = m.trend === 'up' ? 'var(--kc-green)' : m.trend === 'down' ? 'var(--kc-red)' : 'var(--kc-text-dim)';
      trendEl.innerHTML = '<span style="color:' + trendColor + '">' + trendIcon + '</span> <span style="color:var(--kc-text-dim)">' + m.trendLabel + '</span>';
    });
  }

  // Phase 1: Engine Control (clickable)

  _renderEngineControl(container, data) {
    var engines = data.engines || {};
    var panel = this._createPanel(container, this._t('engine.control'), 'engines');
    var body = panel.body;
    var grid = body.createEl('div', { attr: { style: 'display:grid;grid-template-columns:1fr 1fr;gap:5px' } });
    var engineDefs = [
      { key: 'triage', label: 'Triage', status: engines.triage?.status || 'idle' },
      { key: 'compile', label: 'Compile', status: engines.compile?.status || 'idle' },
      { key: 'link', label: 'Link', status: engines.link?.status || 'idle' },
      { key: 'daily', label: 'Daily', status: data.today?.exists ? 'done' : 'warning' },
      { key: 'project', label: 'Project', status: (data.projects || []).length > 0 ? 'done' : 'idle' },
      { key: 'life', label: 'Life+AI', status: engines.life?.status || 'idle' },
    ];
    engineDefs.forEach(function(def) {
      var card = grid.createEl('div', { attr: { style: 'padding:8px 10px;background:var(--kc-bg-card);border-radius:6px;cursor:pointer;transition:all 0.2s' } });
      card.addEventListener('mouseenter', function() { card.style.background = 'var(--kc-bg-card-hover)'; });
      card.addEventListener('mouseleave', function() { card.style.background = 'var(--kc-bg-card)'; });
      var topRow = card.createEl('div', { attr: { style: 'display:flex;justify-content:space-between;align-items:center;margin-bottom:4px' } });
      topRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-base);font-weight:500;color:var(--kc-text-primary)' }, text: def.label });
      var statusColor = def.status === 'done' ? 'var(--kc-green)' : def.status === 'warning' ? 'var(--kc-amber)' : 'var(--kc-text-dim)';
      topRow.createEl('span', { attr: { style: 'width:6px;height:6px;border-radius:50%;background:' + statusColor + ';flex-shrink:0' } });
      var bottomRow = card.createEl('div', { attr: { style: 'display:flex;justify-content:space-between;align-items:center' } });
      var statusText = def.status === 'done' ? this._t('engine.statusReady') : def.status === 'warning' ? this._t('engine.statusNeedsWork') : this._t('engine.statusStandby');
      bottomRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);font-family:var(--kc-mono)' }, text: statusText });
      var btn = bottomRow.createEl('button', { attr: { style: 'font-size:var(--kc-fs-xs);padding:2px 10px;border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-deep);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font)' }, text: String.fromCharCode(9654) });
      btn.addEventListener('mouseenter', function() { btn.style.background = 'var(--kc-bg-card-hover)'; btn.style.color = 'var(--kc-text-primary)'; });
      btn.addEventListener('mouseleave', function() { btn.style.background = 'var(--kc-bg-deep)'; btn.style.color = 'var(--kc-text-secondary)'; });
      btn.addEventListener('click', function(e) { e.stopPropagation(); this._handleLaunch(def.key); }.bind(this));
      card.addEventListener('click', function() { this._handleLaunch(def.key); }.bind(this));
    }.bind(this));
  }

  // Phase 1: Today Focus

  _renderTodayFocus(container, data) {
    var panel = this._createPanel(container, this._t('today.title'), 'today');
    var body = panel.body;
    var headerRow = body.createEl('div', { attr: { style: 'display:flex;justify-content:space-between;align-items:center;margin-bottom:8px' } });
    var tasks = data.today?.tasks || { done: 0, total: 0, completionRate: 0 };
    headerRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-md);font-weight:500;color:var(--kc-text-primary)' }, text: this._t('today.tasks') });
    headerRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-sm);font-family:var(--kc-mono);color:' + (tasks.completionRate >= 100 ? 'var(--kc-green)' : 'var(--kc-amber)') }, text: tasks.done + '/' + tasks.total + ' (' + tasks.completionRate + '%)' });
    var taskList = body.createEl('div', { attr: { style: 'display:flex;flex-direction:column;gap:3px;margin-bottom:10px' } });
    var items = (data.today?.taskItems || []).slice(0, 5);
    if (!data.today?.exists) {
      taskList.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic' }, text: this._t('task.dailyMissing') });
      var createBtn = body.createEl('button', { attr: { style: 'margin-top:6px;padding:4px 12px;font-size:var(--kc-fs-sm);border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font)' }, text: this._t('today.createNote') });
      createBtn.addEventListener('click', function() { this.app.workspace.openLinkText('Periodic/' + moment().format('YYYY/MM/YYYY-MM-DD'), '', true); }.bind(this));
    } else if (items.length === 0) {
      taskList.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic' }, text: this._t('task.none') });
    } else {
      items.forEach(function(item) {
        var row = taskList.createEl('div', { attr: { style: 'display:flex;align-items:flex-start;gap:5px;padding:2px 0;font-size:var(--kc-fs-base)' + (item.done ? ';opacity:0.5;text-decoration:line-through' : '') } });
        row.createEl('span', { text: item.done ? '[x]' : '[ ]', attr: { style: 'flex-shrink:0;font-size:var(--kc-fs-sm);font-family:var(--kc-mono)' } });
        row.createEl('span', { text: item.text, attr: { style: 'word-break:break-word;color:var(--kc-text-secondary)' } });
      });
    }
    var statsRow = body.createEl('div', { attr: { style: 'display:flex;gap:12px;padding-top:8px;border-top:1px solid var(--kc-border)' } });
    var streak = calcStreak(data.weekly);
    var streakEl = statsRow.createEl('div', { attr: { style: 'text-align:center;flex:1' } });
    streakEl.createEl('div', { attr: { style: 'font-size:18px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-amber)' }, text: String(streak) + 'd' });
    streakEl.createEl('div', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px' }, text: this._t('today.streak') });
    var todayCount = getTodayCaptureCount(data.weekly);
    var weekAvg = (data.weekly || []).length > 0 ? Math.round((data.weekly || []).reduce(function(s, c) { return s + c.count; }, 0) / (data.weekly || []).length * 10) / 10 : 0;
    var captureEl = statsRow.createEl('div', { attr: { style: 'text-align:center;flex:1' } });
    captureEl.createEl('div', { attr: { style: 'font-size:18px;font-weight:700;font-family:var(--kc-mono);color:' + (todayCount >= weekAvg ? 'var(--kc-green)' : 'var(--kc-amber)') }, text: String(todayCount) });
    captureEl.createEl('div', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px' }, text: this._t('today.today') });
    var dailyEl = statsRow.createEl('div', { attr: { style: 'text-align:center;flex:1' } });
    dailyEl.createEl('div', { attr: { style: 'font-size:var(--kc-fs-md);color:' + (data.today?.exists ? 'var(--kc-green)' : 'var(--kc-amber)') }, text: data.today?.exists ? this._t('today.done') : this._t('today.pending') });
    dailyEl.createEl('div', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px' }, text: this._t('today.daily') });
  }

  // Widget: Vault Health

  _renderHealthPanel(container, data) {
    const healthScore = calcHealthScore(data);
    const panel = this._createPanel(container, this._t('health.title'), 'health');
    const body = panel.body;
    const gaugeWrap = body.createEl('div', { cls: 'kos-gauge-wrap' });
    const ring = gaugeWrap.createEl('div', { cls: 'kos-gauge-ring' });
    const c = 314;
    const offset = c - (healthScore / 100) * c;
    ring.innerHTML = '<svg viewBox="0 0 110 110"><circle class="bg" cx="55" cy="55" r="50"/><circle class="arc" cx="55" cy="55" r="50" stroke-dasharray="' + c + '" stroke-dashoffset="' + offset + '"/></svg><div class="center-label"><span class="pct">' + healthScore + '%</span><span class="pct-label">' + (healthScore >= 85 ? 'Optimal' : healthScore >= 65 ? 'Needs Work' : 'Critical') + '</span></div>';
    const checkList = body.createEl('div', { cls: 'kos-check-list' });
    var checks = [
      { label: 'L1 Frontmatter', score: Math.min(100, 95 + (data.today?.exists ? 3 : 0)) },
      { label: 'L2 UDC', score: 92 },
      { label: 'L3 Links', score: 96 },
      { label: 'L4 Cross-lang', score: 83 },
      { label: 'L5 Projects', score: data.projects?.length > 0 ? 100 : 70 },
      { label: 'L6 Empties', score: (data.inboxFiles || []).length === 0 ? 100 : Math.max(60, 100 - (data.inboxFiles || []).length * 5) },
    ];
    checks.forEach(function(ch) {
      var item = checkList.createEl('div', { cls: 'kos-check-item' });
      item.createEl('span', { cls: 'lbl', text: ch.label });
      var status = item.createEl('span', { cls: 'status' });
      var dotClass = ch.score >= 90 ? 'd-green' : ch.score >= 70 ? 'd-amber' : 'd-red';
      status.createEl('span', { cls: 'd ' + dotClass });
      status.createEl('span', { text: ch.score + '%' });
    });
    var inboxCard = body.createEl('div', { cls: 'kos-inbox-card' });
    inboxCard.createEl('div', { cls: 'count', text: String((data.inboxFiles || []).length) });
    var meta = inboxCard.createEl('div', { cls: 'meta' });
    meta.createEl('span', { cls: 'l', text: 'Inbox Pending' });
    meta.createEl('span', { cls: 'sub', text: (data.stats?.totalNotes || 0) + ' total notes' });
  }

  // Widget: Active Projects

  _renderProjectsPanel(container, data) {
    var panel = this._createPanel(container, this._t('project.title'), 'projects');
    var body = panel.body;
    var list = body.createEl('div', { cls: 'kos-project-list' });
    var projects = data.projects || [];
    if (projects.length === 0) { list.createEl('div', { text: 'No active projects.', cls: 'kos-empty' }); return; }
    projects.slice(0, 6).forEach(function(proj) {
      var card = list.createEl('div', { cls: 'kos-project-card' });
      card.addEventListener('click', function() { this.app.workspace.openLinkText(proj.path, '', true); }.bind(this));
      var top = card.createEl('div', { cls: 'top' });
      top.createEl('span', { cls: 'pname', text: proj.title || 'Unnamed' });
      top.createEl('span', { cls: 'pstatus ' + (proj.status || 'active'), text: proj.status || 'active' });
      var barWrap = card.createEl('div', { cls: 'bar-wrap' });
      var bar = barWrap.createEl('div', { cls: 'bar' });
      var rate = proj.tasks?.completionRate || 0;
      var fillClass = rate >= 80 ? 'fill-green' : rate >= 50 ? 'fill-amber' : 'fill-cyan';
      bar.createEl('div', { cls: 'fill ' + fillClass, attr: { style: 'width:' + rate + '%' } });
      barWrap.createEl('span', { cls: 'bar-pct', text: rate + '%' });
    }.bind(this));
  }

  // Widget: Knowledge Growth

  _renderGrowthPanel(container, data) {
    var panel = this._createPanel(container, this._t('growth.title'), 'growth');
    var body = panel.body;
    var stats = data.stats?.stats || {};
    var totalNotes = data.stats?.totalNotes || 0;
    var resources = stats.resources || 0;
    var projectsCount = (data.projects || []).length;
    var recentCount = (data.recent || []).length;
    var chartSvg = body.createEl('div', { attr: { style: 'text-align:center;padding:6px 0' } });
    chartSvg.innerHTML = '<svg viewBox="0 0 300 70" preserveAspectRatio="none" style="width:100%;height:50px"><defs><linearGradient id="g-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--kc-cyan)"/><stop offset="100%" stop-color="var(--kc-cyan)" stop-opacity="0"/></linearGradient></defs><path fill="url(#g-grad)" d="M0,65 Q40,55 80,60 T160,42 T200,25 T260,18 T300,8 L300,70 L0,70 Z" opacity="0.15"/><path fill="none" stroke="var(--kc-cyan)" stroke-width="1.5" d="M0,65 Q40,55 80,60 T160,42 T200,25 T260,18 T300,8"/></svg>';
    var grid = body.createEl('div', { attr: { style: 'display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:4px;margin-top:8px' } });
    var items = [
      { label: this._t('stats.totalNotes'), value: String(totalNotes) },
      { label: this._t('stats.totalNotes') + ' (wiki)', value: String(resources) },
      { label: this._t('stats.activeProjects'), value: String(projectsCount) },
      { label: this._t('recent.title'), value: String(recentCount) },
    ];
    items.forEach(function(item) {
      var cell = grid.createEl('div', { attr: { style: 'text-align:center;padding:4px' } });
      cell.createEl('div', { attr: { style: 'font-size:16px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-cyan)' }, text: item.value });
      cell.createEl('div', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px' }, text: item.label });
    });
  }

  // Widget: Quick Launch

  _renderLaunchPanel(container) {
    var panel = this._createPanel(container, this._t('launch.title'), 'launch');
    var body = panel.body;
    var grid = body.createEl('div', { attr: { style: 'display:grid;grid-template-columns:1fr 1fr;gap:4px' } });
    var actions = [
      { label: 'Triage', action: 'triage', cls: '' },
      { label: 'Compile', action: 'compile', cls: 'cyan' },
      { label: 'Link', action: 'link', cls: 'green' },
      { label: 'Query', action: 'query', cls: 'orange' },
      { label: 'Daily', action: 'daily', cls: 'purple' },
      { label: 'Week R.', action: 'week', cls: 'amber' },
      { label: 'Init', action: 'init', cls: 'cyan' },
      { label: 'Life+AI', action: 'life', cls: 'green' },
    ];
    actions.forEach(function(a) {
      var btn = grid.createEl('button', { attr: { style: 'padding:7px 8px;font-size:var(--kc-fs-sm);border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-card);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s' + (a.cls ? ';border-left:2px solid var(--kc-' + a.cls + ')' : '') }, text: a.label });
      btn.addEventListener('mouseenter', function() { btn.style.background = 'var(--kc-bg-card-hover)'; btn.style.color = 'var(--kc-text-primary)'; });
      btn.addEventListener('mouseleave', function() { btn.style.background = 'var(--kc-bg-card)'; btn.style.color = 'var(--kc-text-secondary)'; });
      btn.addEventListener('click', function() { this._handleLaunch(a.action); }.bind(this));
    }.bind(this));
  }

  _handleLaunch(action) {
    var msgs = {
      triage: this._t('notice.triage'),
      compile: this._t('notice.compile'),
      link: this._t('notice.link'),
      query: this._t('notice.query'),
      daily: this._t('notice.daily'),
      week: this._t('notice.week'),
      init: this._t('notice.init'),
      life: this._t('notice.life'),
    };
    var msg = msgs[action] || this._t('notice.executing', { action: action });
    try {
      new Notice(msg);
    } catch (_) {}
  }

  // Widget: Activity Feed

  _renderFeedPanel(container, data) {
    var panel = this._createPanel(container, this._t('feed.title'), 'feed');
    var body = panel.body;
    var list = body.createEl('div', { attr: { style: 'display:flex;flex-direction:column;gap:2px;max-height:220px;overflow-y:auto' } });
    var recent = data.recent || [];
    if (recent.length === 0) {
      list.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic' }, text: this._t('recent.empty') });
      return;
    }
    recent.slice(0, 10).forEach(function(item) {
      var row = list.createEl('div', { attr: { style: 'display:flex;gap:8px;padding:4px 6px;font-size:var(--kc-fs-sm);border-radius:4px;cursor:pointer;transition:all 0.15s' } });
      row.addEventListener('mouseenter', function() { row.style.background = 'var(--kc-bg-card)'; });
      row.addEventListener('mouseleave', function() { row.style.background = 'transparent'; });
      row.addEventListener('click', function() { this.app.workspace.openLinkText(item.path, '', true); }.bind(this));
      row.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:var(--kc-fs-xs);color:var(--kc-text-dim);white-space:nowrap;min-width:40px' }, text: moment(item.mtime).format('MM-DD HH:mm') });
      row.createEl('span', { attr: { style: 'color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap' }, text: item.title || item.path });
    }.bind(this));
  }

  // Widget: Hot Context

  _renderHotPanel(container, data) {
    var panel = this._createPanel(container, this._t('hot.title'), 'hot');
    var body = panel.body;
    var entries = (data.hot || []).slice(0, 4);
    if (entries.length === 0) {
      body.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic' }, text: this._t('hot.empty') });
      return;
    }
    entries.forEach(function(entry) {
      var row = body.createEl('div', { attr: { style: 'padding:5px 8px;font-size:var(--kc-fs-sm);color:var(--kc-text-secondary);font-family:var(--kc-mono);border-left:2px solid var(--kc-amber-dim);margin-bottom:4px;border-radius:2px;background:var(--kc-bg-card)' } });
      row.createEl('span', { attr: { style: 'color:var(--kc-amber);margin-right:6px' }, text: entry.date });
      row.createEl('span', { text: entry.summary });
    });
  }

  // ──────────────── Life+AI Panel ────────────────

  renderLifeView(container, data) {
    var engines = data.engines || {};
    var lifeEngine = engines.life || {};

    // Top summary
    var topPanel = container.createEl('div', { cls: 'kos-panel', attr: { style: 'margin-bottom:14px' } });
    var topBody = topPanel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:16px 20px' } });
    var topRow = topBody.createEl('div', { attr: { style: 'display:flex;align-items:center;gap:20px;flex-wrap:wrap' } });
    topRow.createEl('span', { attr: { style: 'font-size:20px;font-weight:700;color:var(--kc-amber)' }, text: '\uD83E\uDDEC Life+AI' });
    topRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-md);color:var(--kc-text-secondary);flex:1' }, text: this._t('life.subtitle') });
    var statusDot = topRow.createEl('span', { attr: { style: 'width:8px;height:8px;border-radius:50%;background:' + (lifeEngine.lastRun ? 'var(--kc-green)' : 'var(--kc-text-dim)') } });

    // Three pillars grid
    var grid = container.createEl('div', { attr: { style: 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px' } });
    var pillars = [
      {
        icon: '\uD83E\uDDD1\u200D\uD83C\uDF3E', label: this._t('life.pillarLife'), color: 'var(--kc-green)',
        items: [
          { key: 'health', label: this._t('life.healthProgress'), value: '\u2014' },
          { key: 'habit', label: this._t('life.habitTracking'), value: '\u2014' },
        ],
      },
      {
        icon: '\uD83D\uDCDA', label: this._t('life.pillarLearning'), color: 'var(--kc-cyan)',
        items: [
          { key: 'learn', label: this._t('life.learningProgress'), value: '\u2014' },
          { key: 'skill', label: this._t('life.skillBuilding'), value: '\u2014' },
        ],
      },
      {
        icon: '\uD83D\uDCBB', label: this._t('life.pillarWork'), color: 'var(--kc-amber)',
        items: [
          { key: 'projects', label: this._t('life.projectProgress'), value: String((data.projects || []).length) + ' ' + this._t('life.active') },
          { key: 'tasks', label: this._t('life.todayTasks'), value: data.today?.tasks ? String(data.today.tasks.total) + ' ' + this._t('life.tasks') : '\u2014' },
        ],
      },
    ];
    pillars.forEach(function(p) {
      var card = grid.createEl('div', { cls: 'kos-panel' });
      var header = card.createEl('div', { cls: 'kos-panel-header' });
      header.createEl('span', { attr: { style: 'font-size:var(--kc-fs-md);font-weight:600;color:' + p.color }, text: p.icon + ' ' + p.label });
      var body = card.createEl('div', { cls: 'kos-panel-body' });
      p.items.forEach(function(item) {
        var row = body.createEl('div', { attr: { style: 'display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:var(--kc-fs-base);border-bottom:1px solid rgba(240,180,41,0.04)' } });
        row.createEl('span', { attr: { style: 'color:var(--kc-text-secondary)' }, text: item.label });
        row.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:var(--kc-text-primary)' }, text: item.value });
      });
    });

    // Actions row
    var actionsPanel = container.createEl('div', { cls: 'kos-panel' });
    var actionsBody = actionsPanel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:12px 14px' } });
    var actionsRow = actionsBody.createEl('div', { attr: { style: 'display:flex;gap:8px;flex-wrap:wrap' } });
    var lifeActions = [
      { label: 'Life-Report', action: 'life' },
      { label: 'Life-Check', action: 'life' },
      { label: 'Life-Brief', action: 'life' },
      { label: this._t('life.weeklyReport'), action: 'week' },
      { label: this._t('life.monthlyReport'), action: 'week' },
    ];
    lifeActions.forEach(function(a) {
      var btn = actionsRow.createEl('button', { attr: { style: 'padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s' }, text: a.label });
      btn.addEventListener('mouseenter', function() { btn.style.background = 'var(--kc-amber)'; btn.style.color = 'var(--kc-bg-deep)'; });
      btn.addEventListener('mouseleave', function() { btn.style.background = 'var(--kc-amber-dim)'; btn.style.color = 'var(--kc-amber)'; });
      btn.addEventListener('click', function() { this._handleLaunch(a.action); }.bind(this));
    }.bind(this));
  }

  // ──────────────── Pipeline Panel ────────────────

  renderPipelineView(container, data) {
    var inboxItems = data.inboxDetail || [];
    var compileItems = data.compileQueue || [];
    var throughput = getThroughputStats(data.weekly);

    // Throughput summary
    var topPanel = container.createEl('div', { cls: 'kos-panel', attr: { style: 'margin-bottom:14px' } });
    var topBody = topPanel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:12px 14px' } });
    var topRow = topBody.createEl('div', { attr: { style: 'display:flex;gap:24px;align-items:center;flex-wrap:wrap' } });
    topRow.createEl('span', { attr: { style: 'font-size:20px;font-weight:700;color:var(--kc-amber)' }, text: '\uD83D\uDD27 ' + this._t('pipeline.title') });
    topRow.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-cyan)' }, text: String(throughput.total) + ' rec' });
    topRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim)' }, text: this._t('pipeline.weeklyCaptures') });
    topRow.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-green)' }, text: String(inboxItems.length) });
    topRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim)' }, text: this._t('pipeline.inbox') });
    topRow.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-purple)' }, text: String(compileItems.length) });
    topRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim)' }, text: this._t('pipeline.raw') });

    var grid = container.createEl('div', { cls: 'kos-pipeline-view' });

    // Stage 1: Inbox Detail
    var stage1 = grid.createEl('div', { cls: 'kos-pipeline-stage' });
    stage1.createEl('div', { attr: { style: 'font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-amber);margin-bottom:10px' }, text: '\uD83D\uDCE5 ' + this._t('pipeline.inboxSection', { count: inboxItems.length }) });
    if (inboxItems.length === 0) {
      stage1.createEl('div', { cls: 'kos-empty', text: this._t('pipeline.noInbox') });
    } else {
      var t = stage1.createEl('table', { cls: 'kos-garden-table' });
      var thead = t.createEl('thead');
      var thr = thead.createEl('tr');
      thr.createEl('th', { text: this._t('pipeline.tableTitle') });
      thr.createEl('th', { text: this._t('pipeline.tableDays') });
      thr.createEl('th', { text: this._t('pipeline.tableSource') });
      var tbody = t.createEl('tbody');
      inboxItems.slice(0, 12).forEach(function(item) {
        var tr = tbody.createEl('tr');
        tr.createEl('td', { text: item.title.slice(0, 24), attr: { style: 'cursor:pointer' } });
        tr.addEventListener('click', function() { this.app.workspace.openLinkText(item.path, '', true); }.bind(this));
        tr.createEl('td', { text: String(item.daysWaiting) + 'd', attr: { style: 'font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:' + (item.daysWaiting > 7 ? 'var(--kc-red)' : item.daysWaiting > 3 ? 'var(--kc-amber)' : 'var(--kc-text-dim)') } });
        tr.createEl('td', { text: item.source, attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim)' } });
      }.bind(this));
    }

    // Stage 2: Compile Queue
    var stage2 = grid.createEl('div', { cls: 'kos-pipeline-stage' });
    stage2.createEl('div', { attr: { style: 'font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-cyan);margin-bottom:10px' }, text: '\uD83D\uDCDD ' + this._t('pipeline.rawSection', { count: compileItems.length }) });
    if (compileItems.length === 0) {
      stage2.createEl('div', { cls: 'kos-empty', text: this._t('pipeline.noRaw') });
    } else {
      var t2 = stage2.createEl('table', { cls: 'kos-garden-table' });
      var thead2 = t2.createEl('thead');
      var thr2 = thead2.createEl('tr');
      thr2.createEl('th', { text: this._t('pipeline.tableTitle') });
      thr2.createEl('th', { text: this._t('pipeline.tableWords') });
      thr2.createEl('th', { text: this._t('pipeline.tablePriority') });
      var tbody2 = t2.createEl('tbody');
      compileItems.slice(0, 12).forEach(function(item) {
        var tr = tbody2.createEl('tr');
        tr.createEl('td', { text: item.title.slice(0, 24), attr: { style: 'cursor:pointer' } });
        tr.addEventListener('click', function() { this.app.workspace.openLinkText(item.path, '', true); }.bind(this));
        tr.createEl('td', { text: String(item.wordCount), attr: { style: 'font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:var(--kc-text-dim)' } });
        var priColor = item.priority === 'high' ? 'var(--kc-red)' : item.priority === 'medium' ? 'var(--kc-amber)' : 'var(--kc-text-dim)';
        tr.createEl('td', { text: item.priority, attr: { style: 'font-size:var(--kc-fs-sm);color:' + priColor } });
      }.bind(this));
    }

    // Stage 3: Throughput
    var stage3 = grid.createEl('div', { cls: 'kos-pipeline-stage' });
    stage3.createEl('div', { attr: { style: 'font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-green);margin-bottom:10px' }, text: '\uD83D\uDCC8 ' + this._t('pipeline.throughputSection') });
    var barChart = stage3.createEl('div', { attr: { style: 'display:flex;gap:3px;align-items:flex-end;height:80px;padding:8px 0' } });
    var weekly = data.weekly || [];
    var maxCount = Math.max(1, ...weekly.map(function(w) { return w.count; }));
    weekly.forEach(function(w) {
      var col = barChart.createEl('div', { attr: { style: 'flex:1;display:flex;flex-direction:column;align-items:center;gap:2px' } });
      var bar = col.createEl('div', { attr: { style: 'width:100%;height:' + Math.max(3, (w.count / maxCount) * 60) + 'px;background:' + (w.isToday ? 'var(--kc-amber)' : 'var(--kc-amber-dim)') + ';border-radius:2px 2px 0 0;transition:height 0.3s;min-height:3px' } });
      col.createEl('span', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);font-family:var(--kc-mono)' }, text: w.weekday });
    });
    stage3.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-align:center;margin-top:6px' }, text: this._t('pipeline.currentWeek', { total: throughput.total, avg: throughput.avg }) });
  }

  // ──────────────── Knowledge Garden Panel ────────────────

  renderGardenView(container, data) {
    var stats = data.stats?.stats || {};
    var totalNotes = data.stats?.totalNotes || 0;

    // Header
    var topPanel = container.createEl('div', { cls: 'kos-panel', attr: { style: 'margin-bottom:14px' } });
    var topBody = topPanel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:12px 14px' } });
    topBody.createEl('span', { attr: { style: 'font-size:20px;font-weight:700;color:var(--kc-amber)' }, text: '\uD83C\uDF33 ' + this._t('garden.title') });
    topBody.createEl('span', { attr: { style: 'margin-left:16px;font-size:var(--kc-fs-md);color:var(--kc-text-secondary)' }, text: this._t('garden.notes', { count: totalNotes }) });

    // Garden grid
    var grid = container.createEl('div', { cls: 'kos-garden-view' });

    // Section: Categories
    var catCard = grid.createEl('div', { cls: 'kos-garden-card' });
    catCard.createEl('h3', { attr: { style: 'font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0' }, text: '\uD83D\uDCC1 ' + this._t('garden.categorySection') });
    var catTable = catCard.createEl('table', { cls: 'kos-garden-table' });
    var catHead = catTable.createEl('thead');
    catHead.createEl('tr'); catHead.querySelector('tr').innerHTML = '<th>' + this._t('garden.tableDirectory') + '</th><th>' + this._t('garden.tableCount') + '</th>';
    var catBody = catTable.createEl('tbody');
    var categories = [
      { label: '\uD83D\uDCC1 ' + this._t('garden.categoryProjects'), key: 'projects', color: 'var(--kc-amber)' },
      { label: '\uD83C\uDFE0 ' + this._t('garden.categoryAreas'), key: 'areas', color: 'var(--kc-cyan)' },
      { label: '\uD83D\uDCDA ' + this._t('garden.categoryResources'), key: 'resources', color: 'var(--kc-green)' },
      { label: '\uD83D\uDCE5 ' + this._t('garden.categoryInbox'), key: 'inbox', color: 'var(--kc-orange)' },
      { label: '\uD83D\uDCC5 ' + this._t('garden.categoryPeriodic'), key: 'periodic', color: 'var(--kc-purple)' },
    ];
    categories.forEach(function(cat) {
      var tr = catBody.createEl('tr');
      tr.createEl('td', { attr: { style: 'color:' + cat.color }, text: cat.label });
      tr.createEl('td', { text: String(stats[cat.key] || 0), attr: { style: 'font-family:var(--kc-mono);text-align:right' } });
    });
    var totalRow = catBody.createEl('tr'); var totalTd1 = totalRow.createEl('td', { attr: { style: 'font-weight:600;color:var(--kc-text-primary)' }, text: this._t('garden.categoryTotal') }); var totalTd2 = totalRow.createEl('td', { attr: { style: 'font-family:var(--kc-mono);text-align:right;color:var(--kc-amber);font-weight:700' }, text: String(totalNotes) });

    // Section: Recent garden additions
    var recentCard = grid.createEl('div', { cls: 'kos-garden-card' });
    recentCard.createEl('h3', { attr: { style: 'font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0' }, text: '\uD83C\uDF31 ' + this._t('garden.recentUpdates') });
    var recent = data.recent || [];
    if (recent.length === 0) {
      recentCard.createEl('div', { cls: 'kos-empty', text: this._t('recent.empty') });
    } else {
      var rList = recentCard.createEl('div', { attr: { style: 'display:flex;flex-direction:column;gap:2px;max-height:300px;overflow-y:auto' } });
      recent.slice(0, 15).forEach(function(item) {
        var row = rList.createEl('div', { attr: { style: 'display:flex;gap:8px;padding:4px 6px;font-size:var(--kc-fs-sm);border-radius:4px;cursor:pointer;transition:all 0.15s' } });
        row.addEventListener('mouseenter', function() { row.style.background = 'var(--kc-bg-card)'; });
        row.addEventListener('mouseleave', function() { row.style.background = 'transparent'; });
        row.addEventListener('click', function() { this.app.workspace.openLinkText(item.path, '', true); }.bind(this));
        row.createEl('span', { attr: { style: 'font-family:var(--kc-mono);font-size:var(--kc-fs-xs);color:var(--kc-text-dim);white-space:nowrap;min-width:36px' }, text: moment(item.mtime).format('MM-DD') });
        row.createEl('span', { attr: { style: 'color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap' }, text: item.title || item.path });
      }.bind(this));
    }

    // Quick search card
    var searchCard = container.createEl('div', { cls: 'kos-garden-card', attr: { style: 'grid-column:1 / -1;margin-top:14px' } });
    searchCard.createEl('h3', { attr: { style: 'font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0' }, text: '\uD83D\uDD0D ' + this._t('garden.quickSearch') });
    var searchRow = searchCard.createEl('div', { attr: { style: 'display:flex;gap:8px' } });
    var searchInput = searchRow.createEl('input', { attr: { type: 'text', placeholder: this._t('garden.searchPlaceholder'), style: 'flex:1;padding:7px 14px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:6px;color:var(--kc-text-primary);font-family:var(--kc-font);font-size:var(--kc-fs-md);outline:none' } });
    var searchBtn = searchRow.createEl('button', { attr: { style: 'padding:7px 18px;background:var(--kc-amber);border:none;border-radius:6px;color:var(--kc-bg-deep);font-size:var(--kc-fs-md);font-weight:600;cursor:pointer;font-family:var(--kc-font)' }, text: this._t('garden.searchBtn') });
    searchBtn.addEventListener('click', function() {
      var q = searchInput.value.trim();
      if (q) { this.app.workspace.getLeaf('tab').setViewState({ type: 'search', state: { query: q, matchCase: false } }); }
    }.bind(this));
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') searchBtn.click();
    });
  }

  // ──────────────── Settings Panel (inline) ────────────────

  renderSettingsView(container, data) {
    var panel = container.createEl('div', { cls: 'kos-panel kos-settings-view' });
    var body = panel.createEl('div', { cls: 'kos-panel-body', attr: { style: 'padding:20px' } });
    body.createEl('span', { attr: { style: 'font-size:20px;font-weight:700;color:var(--kc-amber)' }, text: '\u2699\uFE0F ' + this._t('settings.title') });
    body.createEl('div', { attr: { style: 'font-size:var(--kc-fs-md);color:var(--kc-text-secondary);margin:8px 0 20px 0' }, text: this._t('settings.desc') });

    // Locale
    var sec1 = body.createEl('div', { cls: 'kos-settings-section' });
    sec1.createEl('h3', { text: this._t('settings.locale') });
    var localeRow = sec1.createEl('div', { attr: { style: 'display:flex;gap:8px' } });
    var locales = [
      { id: 'zh-cn', label: this._t('settings.langZhCN') },
      { id: 'en', label: this._t('settings.langEn') },
      { id: 'zh-tw', label: this._t('settings.langZhTW') },
    ];
    var curLocale = this.settings?.locale || 'zh-cn';
    locales.forEach(function(l) {
      var btn = localeRow.createEl('button', {
        attr: { style: 'padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid ' + (l.id === curLocale ? 'var(--kc-amber)' : 'var(--kc-border)') + ';background:' + (l.id === curLocale ? 'var(--kc-amber-dim)' : 'var(--kc-bg-card)') + ';color:' + (l.id === curLocale ? 'var(--kc-amber)' : 'var(--kc-text-secondary)') + ';cursor:pointer;font-family:var(--kc-font)' },
        text: l.label,
      });
      btn.addEventListener('click', function() {
        this.settings.locale = l.id;
        this.plugin.saveSettings();
      }.bind(this));
    }.bind(this));

        // Theme switcher
    var secTheme = body.createEl('div', { cls: 'kos-settings-section' });
    secTheme.createEl('h3', { text: this._t('settings.theme') });
    var curTheme = this.app.vault.getConfig('theme') || 'obsidian';
    // Base theme row
    var baseRow = secTheme.createEl('div', { attr: { style: 'display:flex;gap:8px;margin-bottom:8px' } });
    var baseThemes = [
      { id: 'obsidian', label: this._t('settings.themeDark') },
      { id: 'moonstone', label: this._t('settings.themeLight') },
      { id: 'system', label: this._t('settings.themeSystem') },
    ];
    baseThemes.forEach(function(t) {
      var btn = baseRow.createEl('button', {
        attr: { style: 'padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid ' + (t.id === curTheme ? 'var(--kc-amber)' : 'var(--kc-border)') + ';background:' + (t.id === curTheme ? 'var(--kc-amber-dim)' : 'var(--kc-bg-card)') + ';color:' + (t.id === curTheme ? 'var(--kc-amber)' : 'var(--kc-text-secondary)') + ';cursor:pointer;font-family:var(--kc-font)' },
        text: t.label,
      });
      btn.addEventListener('click', function() {
        this.app.vault.setConfig('theme', t.id);
        this.collectData(this.app).then(function(d) { this.switchPanel('settings', d); }.bind(this));
      }.bind(this));
    }.bind(this));
    // Seasonal accent row
    var curSeason = this.settings?.seasonalTheme || 'spring';
    var seasonLabel = secTheme.createEl('div', { attr: { style: 'font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:1px;margin:4px 0 6px 0' }, text: this._t('settings.season') });
    var seasonRow = secTheme.createEl('div', { attr: { style: 'display:flex;gap:8px' } });
    var seasons = [
      { id: 'spring', label: this._t('settings.seasonSpring'), icon: '\uD83C\uDF38' },
      { id: 'summer', label: this._t('settings.seasonSummer'), icon: '\u2600\uFE0F' },
      { id: 'autumn', label: this._t('settings.seasonAutumn'), icon: '\uD83C\uDF42' },
      { id: 'winter', label: this._t('settings.seasonWinter'), icon: '\u2744\uFE0F' },
    ];
    seasons.forEach(function(s) {
      var btn = seasonRow.createEl('button', {
        attr: { style: 'padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid ' + (s.id === curSeason ? 'var(--kc-amber)' : 'var(--kc-border)') + ';background:' + (s.id === curSeason ? 'var(--kc-amber-dim)' : 'var(--kc-bg-card)') + ';color:' + (s.id === curSeason ? 'var(--kc-amber)' : 'var(--kc-text-secondary)') + ';cursor:pointer;font-family:var(--kc-font)' },
        text: s.icon + ' ' + s.label,
      });
      btn.addEventListener('click', function() {
        this.settings.seasonalTheme = s.id;
        this.plugin.saveData(this.plugin.settings);
        // Apply season CSS class immediately
        var root = this.contentEl.querySelector('.kos-cockpit-container');
        if (root) {
          ['theme-spring','theme-summer','theme-autumn','theme-winter'].forEach(function(c) { root.removeClass(c); });
          root.addClass('theme-' + s.id);
        }
        this.collectData(this.app).then(function(d) { this.switchPanel('settings', d); }.bind(this));
      }.bind(this));
    }.bind(this));

    // Font size
    var secFont = body.createEl('div', { cls: 'kos-settings-section' });
    secFont.createEl('h3', { text: this._t('settings.fontSize') });
    var fontSizeRow = secFont.createEl('div', { attr: { style: 'display:flex;gap:8px' } });
    var fontSizes = [
      { id: 'small', label: this._t('settings.fontSmall') },
      { id: 'medium', label: this._t('settings.fontMedium') },
      { id: 'large', label: this._t('settings.fontLarge') },
    ];
    var curFontSize = this.settings?.fontSize || 'medium';
    fontSizes.forEach(function(s) {
      var btn = fontSizeRow.createEl('button', {
        attr: { style: 'padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid ' + (s.id === curFontSize ? 'var(--kc-amber)' : 'var(--kc-border)') + ';background:' + (s.id === curFontSize ? 'var(--kc-amber-dim)' : 'var(--kc-bg-card)') + ';color:' + (s.id === curFontSize ? 'var(--kc-amber)' : 'var(--kc-text-secondary)') + ';cursor:pointer;font-family:var(--kc-font)' },
        text: s.label,
      });
      btn.addEventListener('click', function() {
        this.settings.fontSize = s.id;
        this.plugin.saveData(this.plugin.settings);
        this._applyFontSize();
        this.collectData(this.app).then(function(d) { this.switchPanel('settings', d); }.bind(this));
      }.bind(this));
    }.bind(this));

    // General settings
    var sec2 = body.createEl('div', { cls: 'kos-settings-section' });
    sec2.createEl('h3', { text: this._t('settings.general') });

    // Auto open
    var autoRow = sec2.createEl('div', { attr: { style: 'display:flex;align-items:center;gap:12px;margin-bottom:10px' } });
    var autoToggle = autoRow.createEl('input', { attr: { type: 'checkbox', id: 'kos-settings-autopen' } });
    autoToggle.checked = this.settings?.autoOpen || false;
    autoToggle.addEventListener('change', function() {
      this.settings.autoOpen = autoToggle.checked;
      this.plugin.saveSettings();
    }.bind(this));
    autoRow.createEl('label', { attr: { for: 'kos-settings-autopen', style: 'font-size:var(--kc-fs-md);color:var(--kc-text-secondary);cursor:pointer' }, text: this._t('settings.autoOpen') });

    // Data limits
    var limitRow = sec2.createEl('div', { attr: { style: 'display:flex;align-items:center;gap:12px;margin-bottom:10px' } });
    limitRow.createEl('span', { attr: { style: 'font-size:var(--kc-fs-base);color:var(--kc-text-secondary);min-width:100px' }, text: this._t('settings.maxRecent') });
    var maxRecentInput = limitRow.createEl('input', { attr: { type: 'number', min: '5', max: '30', value: String(this.settings?.maxRecent || 10), style: 'width:60px;padding:4px 8px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:4px;color:var(--kc-text-primary);font-family:var(--kc-mono);font-size:var(--kc-fs-base);outline:none' } });
    maxRecentInput.addEventListener('change', function() {
      this.settings.maxRecent = Math.max(5, Math.min(30, parseInt(maxRecentInput.value) || 10));
      this.plugin.saveSettings();
    }.bind(this));

    // About
    var sec3 = body.createEl('div', { cls: 'kos-settings-section' });
    sec3.createEl('h3', { text: this._t('settings.about') });
    sec3.createEl('div', { attr: { style: 'font-size:var(--kc-fs-base);color:var(--kc-text-dim);line-height:1.6' }, text: this._t('settings.versionDesc') });
    sec3.createEl('div', { attr: { style: 'font-size:var(--kc-fs-xs);color:var(--kc-text-dim);margin-top:6px' }, text: this._t('settings.notesCount', { count: String(data.stats?.totalNotes || 0) }) });
  }

  // ──────────────── Shared Widget Helpers ────────────────

  _createPanel(container, titleHtml, widgetId) {
    var panel = container.createEl('div', { cls: 'kos-panel' });
    var header = panel.createEl('div', { cls: 'kos-panel-header' });
    var left = header.createEl('div', { cls: 'kos-panel-header-left' });
    left.createEl('span', { cls: 'kos-panel-title', text: titleHtml });
    var tools = header.createEl('div', { cls: 'kos-panel-tools' });
    var collapseBtn = tools.createEl('button', { cls: 'kos-panel-tool', attr: { title: this._t('tooltip.collapse') }, text: String.fromCharCode(9660) });
    collapseBtn.addEventListener('click', function() { panel.toggleClass('kos-panel-collapsed'); });
    var body = panel.createEl('div', { cls: 'kos-panel-body' });
    return { panel: panel, body: body, header: header };
  }

  // ──────────────── Chat (Claudian-style) ────────────────

  renderChatView(container, data) {
    // Main chat panel — mimics oc-main structure
    var main = container.createEl('div', { cls: 'kos-ai-chat' });

    // Toolbar — mimics oc-toolbar
    var toolbar = main.createEl('div', { cls: 'kos-ai-toolbar' });
    var tLeft = toolbar.createEl('div', { cls: 'kos-ai-toolbar-left' });

    // Model selector dropdown
    var modelSel = tLeft.createEl('select', { cls: 'kos-ai-model-select' });
    var providers = ['claude', 'codex', 'opencode'];
    var activePid = this.settings?.activeProvider || 'claude';
    providers.forEach(function(pid) {
      var opt = modelSel.createEl('option', { value: pid, text: this.settings?.providers?.[pid]?.label || pid });
      if (pid === activePid) opt.selected = true;
    }.bind(this));
    modelSel.addEventListener('change', function() {
      this.settings.activeProvider = modelSel.value;
      this.plugin.saveData(this.plugin.settings);
      // Reset AI chat so it picks up new provider
      this.aiChat = null;
      this.renderLoading();
      this.refresh();
    }.bind(this));

    // Left: provider label
    tLeft.createEl('span', { cls: 'kos-ai-provider-label', text: this._t('ai.modelLabel') });

    // Right toolbar actions
    var tRight = toolbar.createEl('div', { cls: 'kos-ai-toolbar-right' });

    // Connection status pill
    var statusPill = tRight.createEl('span', { cls: 'kos-ai-status-pill' });
    var isConfigured = this.aiChat && this.aiChat.isConfigured;
    statusPill.addClass(isConfigured ? 'ok' : 'warn');
    statusPill.textContent = isConfigured ? this._t('ai.connected') : this._t('ai.notConfigured');

    // Clear button
    var clearBtn = tRight.createEl('button', { cls: 'kos-ai-toolbar-btn', text: this._t('ai.clearBtn') });
    clearBtn.addEventListener('click', function() {
      if (this.aiChat) { this.aiChat.clear(); this._refreshChatMsgs(); }
    }.bind(this));

    // Messages wrapper
    var msgWrapper = main.createEl('div', { cls: 'kos-ai-msgs-wrapper' });
    var msgContainer = msgWrapper.createEl('div', { cls: 'kos-ai-msgs' });

    // Input area (fixed at bottom)
    var inputArea = main.createEl('div', { cls: 'kos-ai-input-area' });
    var inputRow = inputArea.createEl('div', { cls: 'kos-ai-input-row' });
    var input = inputRow.createEl('input', {
      cls: 'kos-ai-input',
      attr: { type: 'text', placeholder: this._t('ai.placeholder') },
    });
    var sendBtn = inputRow.createEl('button', { cls: 'kos-ai-send', text: this._t('ai.sendBtn') });

    // Chat engine
    this._initAiChat();
    this._renderChatMessages(msgContainer);

    var doSend = function() {
      var val = input.value.trim();
      if (!val) return;
      this._sendChatMessage(val, msgContainer, input);
    }.bind(this);
    sendBtn.addEventListener('click', doSend);
    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') doSend(); });
  }

  // ──────────────── Chat Welcome (Claudian-style) ────────────────

  _renderChatWelcome(container) {
    const welcome = container.createEl('div', { cls: 'kos-ai-welcome' });
    welcome.createEl('div', { cls: 'kos-ai-welcome-greeting', text: this._t('ai.welcomeTitle') });

    // Subtitle
    welcome.createEl('div', { cls: 'kos-ai-welcome-sub', text: this._t('ai.welcome') });;

    // Suggestion cards
    var grid = welcome.createEl('div', { cls: 'kos-ai-suggest-grid' });
    var suggestions = [
      { icon: '\uD83D\uDCCA', title: this._t('ai.suggestProjects'), desc: this._t('ai.suggestProjectsDesc') },
      { icon: '\uD83D\uDCDD', title: this._t('ai.suggestRecent'), desc: this._t('ai.suggestRecentDesc') },
      { icon: '\uD83D\uDD0D', title: this._t('ai.suggestSearch'), desc: this._t('ai.suggestSearchDesc') },
    ];
    suggestions.forEach(function(s) {
      var card = grid.createEl('div', { cls: 'kos-ai-suggest-card' });
      card.createEl('span', { cls: 'kos-ai-suggest-icon', text: s.icon });
      card.createEl('span', { cls: 'kos-ai-suggest-title', text: s.title });
      card.createEl('span', { cls: 'kos-ai-suggest-desc', text: s.desc });
      card.addEventListener('click', function() {
        // Fill input with suggestion
        var inputEl = container.closest('.kos-db')?.querySelector('.kos-ai-input');
        if (inputEl) { inputEl.value = s.title; inputEl.focus(); }
      });
    });
  }

  // ──────────────── Shared AI Chat Logic ────────────────

  _initAiChat() {
    if (this.aiChat && this.aiChat.isConfigured) return;
    if (this.aiChat) return;

    const self = this;
    resolveProviderConfig(self.settings, self.app.vault.adapter).then((cfg) => {
      if (cfg) {
        self.aiChat = new AIChat({
          locale: self.settings?.locale || 'zh-cn',
          baseUrl: cfg.baseUrl,
          apiKey: cfg.apiKey,
          model: cfg.model,
          systemPrompt: cfg.systemPrompt || self.settings?.aiSystemPrompt || '',
          label: cfg.label,
        });
        self._refreshChatMsgs();
      }
    });
  }

  _refreshChatMsgs() {
    const section = this.contentEl.querySelector('.kos-ai-chat, .kos-db-ai, .kos-db-ai-full');
    if (section) {
      const msgContainer = (section ? section.querySelector('.kos-ai-msgs') : null) || (section ? section.querySelector('.kos-db-ai-msgs') : null);
      if (msgContainer) this._renderChatMessages(msgContainer);
    }
  }

  _renderChatMessages(container) {
    container.empty();
    const msgs = this.aiChat ? this.aiChat.getHistory() : [];

    if (!this.aiChat || !this.aiChat.isConfigured) {
      container.createEl('div', { text: this._t('ai.needConfig'), cls: 'kos-ai-need-config' });
      return;
    }

    // Show welcome screen if only system/welcome messages exist (no user messages)
    var hasUserMessages = msgs.some(function(m) { return m.role === 'user'; });
    if (!hasUserMessages && msgs.length <= 1) {
      this._renderChatWelcome(container);
      return;
    }

    msgs.forEach(function(msg) {
      if (msg.role === 'system') return;
      var bubble = container.createEl('div', {
        cls: 'kos-ai-msg kos-ai-msg-' + msg.role,
      });
      var textEl = bubble.createEl('div', { cls: 'kos-ai-msg-text' });
      textEl.textContent = msg.content;

      if (msg.role === 'assistant') {
        var copyBtn = bubble.createEl('button', { cls: 'kos-ai-copy-btn', text: this._t('ai.copy') });
        copyBtn.addEventListener('click', async function() {
          try {
            await navigator.clipboard.writeText(msg.content);
            copyBtn.textContent = this._t('ai.copied');
            setTimeout(function() { copyBtn.textContent = this._t('ai.copy'); }.bind(this), 2000);
          } catch {}
        }.bind(this));
      }
    }.bind(this));

    container.scrollTop = container.scrollHeight;
  }

  _sendChatMessage(text, msgContainer, inputEl) {
    if (!this.aiChat || !this.aiChat.isConfigured) return;

    inputEl.disabled = true;
    inputEl.value = '';

    this._renderChatMessages(msgContainer);

    const thinkingEl = msgContainer.createEl('div', { cls: 'kos-ai-msg kos-ai-msg-assistant kos-ai-thinking' });
    thinkingEl.createEl('span', { text: this._t('ai.thinking'), cls: 'kos-db-ai-msg-text' });

    let assistantText = '';
    let assistantBubble = null;

    this.aiChat.sendMessage(text, {
      onToken: (token) => {
        assistantText += token;
        if (!assistantBubble) {
          thinkingEl.remove();
          assistantBubble = msgContainer.createEl('div', { cls: 'kos-ai-msg kos-ai-msg-assistant' });
          assistantBubble.createEl('div', { cls: 'kos-db-ai-msg-text' });
        }
        assistantBubble.querySelector('.kos-db-ai-msg-text').textContent = assistantText;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      },
      onDone: () => {
        if (thinkingEl.isConnected) thinkingEl.remove();
        if (!assistantBubble && assistantText) {
          assistantBubble = msgContainer.createEl('div', { cls: 'kos-ai-msg kos-ai-msg-assistant' });
          assistantBubble.createEl('div', { cls: 'kos-db-ai-msg-text', text: assistantText });
        }
        if (assistantBubble && assistantText) {
          const copyBtn = assistantBubble.createEl('button', { cls: 'kos-ai-copy-btn', text: this._t('ai.copy') });
          copyBtn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(assistantText);
              copyBtn.textContent = this._t('ai.copied');
              setTimeout(() => { copyBtn.textContent = this._t('ai.copy'); }, 2000);
            } catch {}
          });
        }
        inputEl.disabled = false;
        inputEl.focus();
        msgContainer.scrollTop = msgContainer.scrollHeight;
      },
      onError: (err) => {
        if (thinkingEl.isConnected) thinkingEl.remove();
        const errBubble = msgContainer.createEl('div', { cls: 'kos-ai-msg kos-ai-msg-error' });
        errBubble.createEl('div', {
          text: this._t('ai.error', { msg: err.message || 'Unknown error' }),
          cls: 'kos-db-ai-msg-text',
        });
        const retryBtn = errBubble.createEl('button', { cls: 'kos-db-ai-retry-btn', text: this._t('ai.retry') });
        retryBtn.addEventListener('click', () => {
          this._sendChatMessage(text, msgContainer, inputEl);
        });
        inputEl.disabled = false;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }
    });
  }
}

module.exports = { CockpitView, VIEW_TYPE_COCKPIT };







