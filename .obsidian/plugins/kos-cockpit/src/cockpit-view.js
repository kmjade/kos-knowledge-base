// KOS Cockpit v10 — FLOWnote-style panel switching (home / chat)
// + Settings-aware + locale i18n + AI Chat with FLOWnote auto-detect

const { ItemView, moment } = require('obsidian');
const { t } = require('./locale');
const { AIChat, resolveProviderConfig } = require('./ai-chat');
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
    this.aiChat = null;
    this.activePanel = 'home'; // 'home' | 'chat'
  }

  getViewType() { return VIEW_TYPE_COCKPIT; }
  getDisplayText() { return this.activePanel === 'chat' ? 'KOS AI Chat' : 'KOS Cockpit'; }
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
    const retry = errBox.createEl('button', { cls: 'kos-db-action-btn', text: '\u21BB Retry' });
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
    return { today, projects, stats, recent, hot, weekly, engines, inboxFiles };
  }

  /** Switch between 'home' and 'chat' panels */
  switchPanel(panel, data) {
    this.activePanel = panel;
    this.renderPanel(data || null);
  }

  // ──────────────── Panel Router ────────────────

  renderPanel(data) {
    const container = this.contentEl;
    container.empty();
    const main = container.createEl('div', { cls: 'kos-db' });

    if (this.activePanel === 'chat') {
      this.renderChatView(main, data);
    } else {
      this.renderHomeView(main, data);
    }
  }

  // ──────────────── Home (Dashboard) ────────────────

  renderHomeView(container, data) {
    this.renderHeader(container, data);
    this.renderQuickActions(container);

    if (this.settings?.showTodayTasks !== false) this.renderTodayTasks(container, data);
    if (this.settings?.showVaultStats !== false || this.settings?.showRecentActivity !== false) {
      this.renderTwoColumns(container, data);
    }
    if (this.settings?.showNav !== false) this.renderNav(container);
    if (this.settings?.showInboxFiles !== false) this.renderInboxFiles(container, data);
    if (this.settings?.showProjectCards !== false) this.renderProjects(container, data);
    if (this.settings?.showEngineState !== false) this.renderEngineState(container, data);
    if (this.settings?.showWeeklyChart !== false) this.renderWeeklyChart(container, data);

  }

  renderHeader(container, data) {
    const h = container.createEl('div', { cls: 'kos-db-header' });
    const now = moment();
    const dayNames = this._dayNames;
    h.createEl('div', {
      text: '\uD83D\uDCC5 ' + now.format(this._t('header.dateFormat')) + ' \u661F\u671F' + dayNames[now.day()],
      cls: 'kos-db-header-date',
    });
    const statusText = data.today?.exists
      ? this._t('header.noteCreated')
      : this._t('header.noteNotCreated');
    const focusVal = data.today?.focus || '';
    h.createEl('div', {
      text: this._t('header.noteStatus', { status: statusText })
        + '  \u00B7  '
        + this._t('header.todayFocus', { focus: focusVal || this._t('header.focusNotSet') }),
      cls: 'kos-db-header-status',
    });
    const refreshBtn = h.createEl('button', { cls: 'kos-db-refresh-btn' });
    refreshBtn.innerHTML = '\u21BB';
    refreshBtn.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
  }

  renderQuickActions(container) {
    const qa = container.createEl('div', { cls: 'kos-db-actions' });
    const actions = [
      { label: '\uD83D\uDCC5 ' + this._t('action.planToday'), cmd: 'daily-open' },
      { label: '\uD83D\uDCDD ' + this._t('action.capture'), cmd: 'capture' },
      { label: '\uD83D\uDD04 ' + this._t('action.dayReview'), cmd: 'day-review' },
      { label: '\uD83D\uDCCB ' + this._t('action.newProject'), cmd: 'project' },
      { label: '\uD83D\uDDC2\uFE0F ' + this._t('action.triage'), cmd: 'triage' },
      { label: '\u2699\uFE0F ' + this._t('action.settings'), cmd: 'settings' },
      { label: '\uD83E\uDD16 ' + this._t('action.aiChat'), cmd: 'ai-chat' },
    ];
    actions.forEach((a) => {
      const btn = qa.createEl('button', { cls: 'kos-db-action-btn' });
      btn.textContent = a.label;
      btn.addEventListener('click', () => { this.handleQuickAction(a.cmd); });
    });
  }

  handleQuickAction(cmd) {
    switch (cmd) {
      case 'daily-open': {
        const { dailyNotePath } = require('./utils');
        this.app.workspace.openLinkText(dailyNotePath(moment().format('YYYY-MM-DD')), '', true);
        break;
      }
      case 'ai-chat': {
        this.collectData(this.app).then((data) => this.switchPanel('chat', data));
        break;
      }
      case 'settings': {
        const setting = this.app.setting;
        if (setting) { setting.open(); setting.openTabById('kos-cockpit'); }
        break;
      }
      default:
        this.app.workspace.openLinkText('_meta/hot.md', '', true);
    }
  }

  renderTodayTasks(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section kos-db-today-tasks' });
    const header = section.createEl('div', { cls: 'kos-db-today-header' });
    header.createEl('div', { text: '\u2705 ' + this._t('task.title'), cls: 'kos-db-section-title' });
    if (data.today?.tasks) {
      const { done, total, completionRate } = data.today.tasks;
      header.createEl('span', {
        text: this._t('task.progress', { done, total, rate: completionRate }),
        cls: 'kos-db-today-count ' + (total > 0 && completionRate >= 100 ? 'kos-db-today-done' : ''),
      });
    }
    const list = section.createEl('div', { cls: 'kos-db-today-list' });
    const maxItems = this.settings?.maxTaskItems || 12;
    const items = (data.today?.taskItems || []).slice(0, maxItems);
    if (!data.today?.exists) {
      list.createEl('div', { text: this._t('task.dailyMissing'), cls: 'kos-db-empty' });
    } else if (items.length === 0) {
      list.createEl('div', { text: this._t('task.none'), cls: 'kos-db-empty' });
    } else {
      items.forEach((item) => {
        const row = list.createEl('div', { cls: 'kos-db-today-item' + (item.done ? ' kos-db-today-item-done' : '') });
        row.createEl('span', { cls: 'kos-db-today-cb' }).textContent = item.done ? '\u2611' : '\u2610';
        row.createEl('span', { text: item.text, cls: 'kos-db-today-text' });
      });
    }
  }

  renderProjects(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\uD83D\uDCCB ' + this._t('project.title'), cls: 'kos-db-section-title' });
    const grid = section.createEl('div', { cls: 'kos-db-project-grid' });
    const projects = data.projects || [];
    if (projects.length === 0) {
      grid.createEl('div', { text: this._t('project.empty'), cls: 'kos-db-empty' });
      return;
    }
    projects.forEach((proj) => {
      const card = grid.createEl('div', { cls: 'kos-db-project-card' });
      card.addEventListener('click', () => { this.app.workspace.openLinkText(proj.path, '', true); });
      const titleRow = card.createEl('div', { cls: 'kos-db-project-title-row' });
      titleRow.createEl('span', { text: proj.title || 'Unnamed', cls: 'kos-db-project-title' });
      const p = String(proj.priority || '').toLowerCase();
      if (p) titleRow.createEl('span', { text: proj.priority, cls: 'kos-db-badge kos-db-badge-' + p });
      const rate = proj.tasks?.completionRate || 0;
      card.createEl('div', { cls: 'kos-db-progress', attr: { style: '--progress:' + rate + '%' } });
      card.createEl('div', { text: (proj.tasks?.done || 0) + '/' + (proj.tasks?.total || 0), cls: 'kos-db-progress-label' });
    });
  }

  renderTwoColumns(container, data) {
    const cols = container.createEl('div', { cls: 'kos-db-cols' });
    if (this.settings?.showVaultStats !== false) {
      const left = cols.createEl('div', { cls: 'kos-db-col' });
      left.createEl('div', { text: '\uD83D\uDCCA ' + this._t('stats.title'), cls: 'kos-db-section-title' });
      const metrics = [
        { label: this._t('stats.totalNotes'), value: String(data.stats?.totalNotes || 0) },
        { label: this._t('stats.activeProjects'), value: String((data.projects || []).length) },
        { label: this._t('stats.todayNew'), value: String(data.stats?.todayNew || 0) },
        { label: this._t('stats.pendingTriage'), value: String((data.inboxFiles || []).length) },
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
          item.createEl('span', { text: ' ' + m.label, cls: 'kos-db-sub-metric-label' });
        });
      }
    }
    if (this.settings?.showRecentActivity !== false) {
      const right = cols.createEl('div', { cls: 'kos-db-col' });
      right.createEl('div', { text: '\uD83D\uDD04 ' + this._t('recent.title'), cls: 'kos-db-section-title' });
      const recent = data.recent || [];
      const maxItems = this.settings?.maxRecentItems || 8;
      const list = right.createEl('div', { cls: 'kos-db-recent-list' });
      if (recent.length === 0) {
        list.createEl('div', { text: this._t('recent.empty'), cls: 'kos-db-empty' });
      } else {
        recent.slice(0, maxItems).forEach((item) => {
          const row = list.createEl('div', { cls: 'kos-db-recent-item' });
          row.createEl('span', { text: moment(item.mtime).format('MM-DD HH:mm'), cls: 'kos-db-recent-time' });
          const link = row.createEl('a', { text: '  ' + item.title, cls: 'kos-db-recent-link' });
          link.addEventListener('click', () => { this.app.workspace.openLinkText(item.path, '', true); });
        });
      }
    }
  }

  renderNav(container) {
    const nav = container.createEl('div', { cls: 'kos-db-nav' });
    nav.createEl('div', { text: '\uD83C\uDFE0 ' + this._t('nav.title'), cls: 'kos-db-section-title' });
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

  renderInboxFiles(container, data) {
    const files = data.inboxFiles || [];
    if (files.length === 0) return;
    const maxItems = this.settings?.maxInboxItems || 6;
    const section = container.createEl('div', { cls: 'kos-db-section kos-db-inbox' });
    section.createEl('div', { text: '\uD83D\uDCE5 ' + this._t('inbox.title', { count: files.length }), cls: 'kos-db-section-title' });
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
      more.createEl('a', { text: this._t('inbox.more', { count: files.length - maxItems }), cls: 'kos-db-inbox-link' })
        .addEventListener('click', () => { this.app.workspace.openLinkText('0 Inbox', '', true); });
    }
  }

  renderEngineState(container, data) {
    const engines = data.engines || {};
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\u2699\uFE0F ' + this._t('engine.title'), cls: 'kos-db-section-title' });
    const grid = section.createEl('div', { cls: 'kos-db-engine-grid' });
    const primaryEngines = ['triage', 'compile', 'link', 'daily', 'project', 'archive'];
    const hasData = primaryEngines.some((e) => engines[e]?.lastRun || engines[e]?.summary);
    if (!hasData) {
      grid.createEl('div', { text: this._t('engine.empty'), cls: 'kos-db-empty' });
      return;
    }
    primaryEngines.forEach((key) => {
      const eng = engines[key] || {};
      const chip = grid.createEl('div', {
        cls: 'kos-db-engine-chip'
          + (eng.status === 'done' ? ' kos-db-engine-done' : '')
          + (eng.lastRun ? '' : ' kos-db-engine-idle'),
      });
      chip.createEl('span', { text: key, cls: 'kos-db-engine-name' });
      if (eng.lastRun) chip.createEl('span', { text: ' ' + eng.lastRun.slice(5), cls: 'kos-db-engine-date' });
      if (eng.summary) chip.setAttr('title', eng.summary);
    });
  }

  renderWeeklyChart(container, data) {
    const section = container.createEl('div', { cls: 'kos-db-section' });
    section.createEl('div', { text: '\uD83D\uDCC8 ' + this._t('weekly.title'), cls: 'kos-db-section-title' });
    const chart = section.createEl('div', { cls: 'kos-db-chart' });
    const cells = data.weekly || [];
    const maxCount = Math.max(1, ...cells.map((c) => c.count));
    if (cells.length === 0) {
      chart.createEl('div', { text: this._t('weekly.empty'), cls: 'kos-db-empty' });
      return;
    }
    cells.forEach((cell) => {
      const col = chart.createEl('div', { cls: 'kos-db-chart-col' });
      if (cell.isToday) col.addClass('kos-db-chart-today');
      const barHeight = Math.max(4, (cell.count / maxCount) * 60);
      col.createEl('div', { cls: 'kos-db-chart-bar', attr: { style: 'height:' + barHeight + 'px' } })
         .setAttr('title', this._t('weekly.barTooltip', { date: cell.date, count: cell.count }));
      col.createEl('div', { text: String(cell.count), cls: 'kos-db-chart-val' });
      col.createEl('div', { text: cell.weekday, cls: 'kos-db-chart-day' });
    });
  }


  // ──────────────── Chat (Full-page AI Chat) ────────────────

  renderChatView(container, data) {
    // Back button + title
    const topBar = container.createEl('div', { cls: 'kos-db-chat-topbar' });
    const backBtn = topBar.createEl('button', { cls: 'kos-db-chat-back-btn' });
    backBtn.innerHTML = '\u2190 ' + this._t('app.name');
    backBtn.addEventListener('click', () => {
      // Collect fresh data when going back to home
      this.collectData(this.app).then((freshData) => {
        this.switchPanel('home', freshData);
      });
    });
    topBar.createEl('span', { text: '\uD83E\uDD16 ' + this._t('ai.title'), cls: 'kos-db-chat-topbar-title' });

    // Chat UI (full width/height within the card)
    const chatSection = container.createEl('div', { cls: 'kos-db-ai kos-db-ai-full' });

    // Message container
    const msgContainer = chatSection.createEl('div', { cls: 'kos-db-ai-msgs' });

    // Input row
    const inputRow = chatSection.createEl('div', { cls: 'kos-db-ai-input-row' });
    const input = inputRow.createEl('input', {
      cls: 'kos-db-ai-input',
      attr: { type: 'text', placeholder: this._t('ai.placeholder') },
    });
    const sendBtn = inputRow.createEl('button', { cls: 'kos-db-ai-send', text: this._t('ai.sendBtn') });

    // Chat engine
    this._initAiChat();
    this._renderChatMessages(msgContainer);

    const doSend = () => {
      const val = input.value.trim();
      if (!val) return;
      this._sendChatMessage(val, msgContainer, input);
    };
    sendBtn.addEventListener('click', doSend);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSend(); });
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
    const section = this.contentEl.querySelector('.kos-db-ai, .kos-db-ai-full');
    if (section) {
      const msgContainer = section.querySelector('.kos-db-ai-msgs');
      if (msgContainer) this._renderChatMessages(msgContainer);
    }
  }

  _renderChatMessages(container) {
    container.empty();
    const msgs = this.aiChat ? this.aiChat.getHistory() : [];

    if (!this.aiChat || !this.aiChat.isConfigured) {
      container.createEl('div', { text: this._t('ai.needConfig'), cls: 'kos-db-ai-need-config' });
      return;
    }

    msgs.forEach((msg) => {
      const bubble = container.createEl('div', {
        cls: 'kos-db-ai-msg kos-db-ai-msg-' + msg.role,
      });
      const textEl = bubble.createEl('div', { cls: 'kos-db-ai-msg-text' });
      textEl.textContent = msg.content;

      if (msg.role === 'assistant') {
        const copyBtn = bubble.createEl('button', { cls: 'kos-db-ai-copy-btn', text: this._t('ai.copy') });
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(msg.content);
            copyBtn.textContent = this._t('ai.copied');
            setTimeout(() => { copyBtn.textContent = this._t('ai.copy'); }, 2000);
          } catch {}
        });
      }
    });

    container.scrollTop = container.scrollHeight;
  }

  _sendChatMessage(text, msgContainer, inputEl) {
    if (!this.aiChat || !this.aiChat.isConfigured) return;

    inputEl.disabled = true;
    inputEl.value = '';

    this._renderChatMessages(msgContainer);

    const thinkingEl = msgContainer.createEl('div', { cls: 'kos-db-ai-msg kos-db-ai-msg-assistant kos-db-ai-thinking' });
    thinkingEl.createEl('span', { text: this._t('ai.thinking'), cls: 'kos-db-ai-msg-text' });

    let assistantText = '';
    let assistantBubble = null;

    this.aiChat.sendMessage(text, {
      onToken: (token) => {
        assistantText += token;
        if (!assistantBubble) {
          thinkingEl.remove();
          assistantBubble = msgContainer.createEl('div', { cls: 'kos-db-ai-msg kos-db-ai-msg-assistant' });
          assistantBubble.createEl('div', { cls: 'kos-db-ai-msg-text' });
        }
        assistantBubble.querySelector('.kos-db-ai-msg-text').textContent = assistantText;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      },
      onDone: () => {
        if (thinkingEl.isConnected) thinkingEl.remove();
        if (!assistantBubble && assistantText) {
          assistantBubble = msgContainer.createEl('div', { cls: 'kos-db-ai-msg kos-db-ai-msg-assistant' });
          assistantBubble.createEl('div', { cls: 'kos-db-ai-msg-text', text: assistantText });
        }
        if (assistantBubble && assistantText) {
          const copyBtn = assistantBubble.createEl('button', { cls: 'kos-db-ai-copy-btn', text: this._t('ai.copy') });
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
        const errBubble = msgContainer.createEl('div', { cls: 'kos-db-ai-msg kos-db-ai-msg-error' });
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
      },
    });
  }
}

module.exports = { CockpitView, VIEW_TYPE_COCKPIT };
