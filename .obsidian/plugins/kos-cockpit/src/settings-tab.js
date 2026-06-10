// KOS Cockpit — settings tab

const { PluginSettingTab, Setting } = require('obsidian');
const { t, LOCALE_KEYS } = require('./locale');

const DEFAULT_SETTINGS = {
  // General
  locale: 'zh-cn',
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
    containerEl.createEl('h3', { text: this._t('settings.general') });

    // Language selector
    new Setting(containerEl)
      .setName(this._t('settings.language'))
      .setDesc(this._t('settings.languageDesc'))
      .addDropdown((dropdown) => {
        dropdown
          .addOption('zh-cn', this._t('settings.langZhCN'))
          .addOption('en', this._t('settings.langEn'))
          .addOption('zh-tw', this._t('settings.langZhTW'))
          .setValue(this.plugin.settings.locale)
          .onChange(async (v) => {
            this.plugin.settings.locale = v;
            await this.plugin.saveSettings();
            // Re-render settings tab with new language
            this.display();
          });
      });

    // Auto-open toggle
    new Setting(containerEl)
      .setName(this._t('settings.autoOpen'))
      .setDesc(this._t('settings.autoOpenDesc'))
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
    containerEl.createEl('h3', { text: this._t('settings.dashboard') });
    containerEl.createEl('p', {
      text: this._t('settings.dashboardDesc'),
      cls: 'setting-item-description',
    });

    const sections = [
      { key: 'showTodayTasks', nameKey: 'settings.showTodayTasks', name: 'Today\'s Tasks', desc: 'Daily note task list and progress.' },
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
    containerEl.createEl('h3', { text: this._t('settings.dataLimits') });

    new Setting(containerEl)
      .setName(this._t('settings.maxRecent'))
      .setDesc(this._t('settings.maxRecentDesc'))
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
      .setName(this._t('settings.maxTasks'))
      .setDesc(this._t('settings.maxTasksDesc'))
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
      .setName(this._t('settings.maxInbox'))
      .setDesc(this._t('settings.maxInboxDesc'))
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
    containerEl.createEl('h3', { text: this._t('settings.about') });

    const desc = document.createDocumentFragment();
    desc.createEl('span', {
      text: this._t('settings.versionDesc'),
    });

    new Setting(containerEl)
      .setName(this._t('settings.version'))
      .setDesc(desc);
  }
}

module.exports = { CockpitSettingTab, DEFAULT_SETTINGS };
