// KOS Cockpit — plugin entry point

const { Plugin } = require('obsidian');
const { CockpitView, VIEW_TYPE_COCKPIT } = require('./cockpit-view');
const { CockpitSettingTab, DEFAULT_SETTINGS } = require('./settings-tab');

module.exports = class KosCockpitPlugin extends Plugin {
  settings = { ...DEFAULT_SETTINGS };

  async onload() {
    // Load saved settings
    await this.loadSettings();

    // Register the custom view, passing the plugin reference
    this.registerView(VIEW_TYPE_COCKPIT, (leaf) => new CockpitView(leaf, this));

    // Add ribbon icon
    this.addRibbonIcon('gauge', 'Open KOS Cockpit', () => {
      this.openCockpit();
    });

    // Add command to open cockpit
    this.addCommand({
      id: 'open-kos-cockpit',
      name: 'Open KOS Cockpit',
      callback: () => this.openCockpit(),
    });

    // Add command to refresh cockpit
    this.addCommand({
      id: 'refresh-kos-cockpit',
      name: 'Refresh KOS Cockpit',
      callback: () => this.refreshCockpit(),
    });

    // Register settings tab
    this.addSettingTab(new CockpitSettingTab(this.app, this));

    // Open the cockpit automatically on layout ready
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
      if (view && typeof view.refresh === 'function') {
        await view.refresh();
      }
      return;
    }

    const leaf = workspace.getLeaf(true);
    await leaf.setViewState({
      type: VIEW_TYPE_COCKPIT,
      active: true,
    });
    workspace.revealLeaf(leaf);
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
    // Notify open views of settings change
    this.refreshCockpit();
  }

  onunload() {
    this.app.workspace.getLeavesOfType(VIEW_TYPE_COCKPIT).forEach((leaf) => {
      leaf.detach();
    });
  }
};
