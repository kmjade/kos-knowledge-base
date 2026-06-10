// KOS Cockpit — settings tab

const { PluginSettingTab, Setting, moment } = require('obsidian');

const DEFAULT_SETTINGS = {
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
  maxInboxItems: 6,
};

class CockpitSettingTab extends PluginSettingTab {
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
    containerEl.createEl('h3', { text: 'General' });

    new Setting(containerEl)
      .setName('Auto-open on startup')
      .setDesc('Automatically open the KOS Cockpit when Obsidian starts.')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoOpen)
          .onChange(async (v) => {
            this.plugin.settings.autoOpen = v;
            await this.plugin.saveSettings();
          })
      );
  }

  renderDashboardSection(containerEl) {
    containerEl.createEl('h3', { text: 'Dashboard Sections' });
    containerEl.createEl('p', {
      text: 'Toggle which sections appear on the cockpit dashboard.',
      cls: 'setting-item-description',
    });

    const sections = [
      { key: 'showTodayTasks', name: 'Today\'s Tasks', desc: 'Daily note task list and progress.' },
      { key: 'showProjectCards', name: 'Active Projects', desc: 'Project cards with priority and progress.' },
      { key: 'showVaultStats', name: 'Vault Statistics', desc: 'Total notes, active projects, inbox count.' },
      { key: 'showRecentActivity', name: 'Recent Activity', desc: 'Recently modified files.' },
      { key: 'showNav', name: 'Navigation', desc: 'Quick links to areas, inbox, hot cache.' },
      { key: 'showInboxFiles', name: 'Inbox Files', desc: 'List of pending files in 0 Inbox/.' },
      { key: 'showEngineState', name: 'Engine State', desc: 'Triage/Compile/Link engine status chips.' },
      { key: 'showWeeklyChart', name: 'Weekly Chart', desc: 'Bar chart of weekly daily-note captures.' },
      { key: 'showAiChat', name: 'AI Chat', desc: 'AI chat input placeholder.' },
    ];

    sections.forEach(({ key, name, desc }) => {
      new Setting(containerEl)
        .setName(name)
        .setDesc(desc)
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings[key])
            .onChange(async (v) => {
              this.plugin.settings[key] = v;
              await this.plugin.saveSettings();
            })
        );
    });
  }

  renderDataLimitsSection(containerEl) {
    containerEl.createEl('h3', { text: 'Data Limits' });

    new Setting(containerEl)
      .setName('Max recent items')
      .setDesc('Number of recently modified files to show (max 20).')
      .addText((text) =>
        text
          .setPlaceholder('8')
          .setValue(String(this.plugin.settings.maxRecentItems))
          .onChange(async (v) => {
            const val = Math.max(3, Math.min(20, Number(v) || 8));
            this.plugin.settings.maxRecentItems = val;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Max task items')
      .setDesc('Number of daily-note tasks to show (max 20).')
      .addText((text) =>
        text
          .setPlaceholder('12')
          .setValue(String(this.plugin.settings.maxTaskItems))
          .onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 12));
            this.plugin.settings.maxTaskItems = val;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Max inbox items')
      .setDesc('Number of inbox file names to show (max 20).')
      .addText((text) =>
        text
          .setPlaceholder('6')
          .setValue(String(this.plugin.settings.maxInboxItems))
          .onChange(async (v) => {
            const val = Math.max(1, Math.min(20, Number(v) || 6));
            this.plugin.settings.maxInboxItems = val;
            await this.plugin.saveSettings();
          })
      );
  }

  renderAboutSection(containerEl) {
    containerEl.createEl('h3', { text: 'About' });

    const desc = document.createDocumentFragment();
    desc.createEl('span', {
      text: 'KOS Cockpit v0.2.0 — A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem.',
    });

    new Setting(containerEl)
      .setName('Version')
      .setDesc(desc);
  }
}

module.exports = { CockpitSettingTab, DEFAULT_SETTINGS };
