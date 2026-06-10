// KOS Cockpit — plugin entry point

const { Plugin } = require('obsidian');
const { CockpitView, VIEW_TYPE_COCKPIT } = require('./cockpit-view');
const { CockpitSettingTab, DEFAULT_SETTINGS } = require('./settings-tab');

module.exports = class KosCockpitPlugin extends Plugin {
  settings = { ...DEFAULT_SETTINGS };

  async onload() {
    await this.loadSettings();

    this.registerView(VIEW_TYPE_COCKPIT, (leaf) => new CockpitView(leaf, this));

    // Ribbon: Dashboard
    this.addRibbonIcon('gauge', 'KOS Cockpit', () => {
      this.openCockpit({ panel: 'home' });
    });

    // Ribbon: AI Chat
    this.addRibbonIcon('bot', 'KOS AI Chat', () => {
      this.openCockpit({ panel: 'chat' });
    });

    // Command: Dashboard
    this.addCommand({
      id: 'open-kos-cockpit',
      name: 'Open KOS Cockpit',
      callback: () => this.openCockpit({ panel: 'home' }),
    });

    // Command: AI Chat
    this.addCommand({
      id: 'open-kos-ai-chat',
      name: 'Open KOS AI Chat',
      callback: () => this.openCockpit({ panel: 'chat' }),
    });

    // Command: Refresh
    this.addCommand({
      id: 'refresh-kos-cockpit',
      name: 'Refresh KOS Cockpit',
      callback: () => this.refreshCockpit(),
    });

    this.addSettingTab(new CockpitSettingTab(this.app, this));

    this.app.workspace.onLayoutReady(() => {
      const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);
      if (existing.length === 0 && this.settings.autoOpen) {
        this.openCockpit({ panel: 'home' });
      }
    });
  }

  async openCockpit(options = {}) {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);

    if (existing.length > 0) {
      workspace.revealLeaf(existing[0]);
      const view = existing[0].view;
      if (view) {
        if (options.panel === 'chat' && typeof view.switchPanel === 'function') {
          this.collectData().then((data) => view.switchPanel('chat', data));
        } else if (options.panel === 'home' && typeof view.switchPanel === 'function') {
          this.collectData().then((data) => view.switchPanel('home', data));
        } else if (typeof view.refresh === 'function') {
          await view.refresh();
        }
      }
      return;
    }

    const leaf = workspace.getLeaf(true);
    await leaf.setViewState({
      type: VIEW_TYPE_COCKPIT,
      active: true,
    });

    // After view is set, switch to requested panel
    if (options.panel === 'chat') {
      const view = leaf.view;
      if (view && typeof view.switchPanel === 'function') {
        this.collectData().then((data) => view.switchPanel('chat', data));
      }
    }

    workspace.revealLeaf(leaf);
  }

  async collectData() {
    // Minimal data collector for panel switching
    const { getTodayState, getDashboardStats, listProjects } = require('./home-service');
    const app = this.app;
    const [today, projects, stats] = await Promise.all([
      getTodayState(app).catch(() => null),
      listProjects(app, { activeOnly: true }).catch(() => []),
      getDashboardStats(app).catch(() => ({ totalNotes: 0, todayNew: 0, stats: {} })),
    ]);
    return { today, projects, stats };
  }

  async refreshCockpit() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT);
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view && typeof view.refresh === 'function') {
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
