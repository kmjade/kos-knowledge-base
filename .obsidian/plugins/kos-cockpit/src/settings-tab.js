// KOS Cockpit — settings tab
// Claudian-inspired: tabbed settings with per-provider configuration

const { PluginSettingTab, Setting } = require('obsidian');
const { t, LOCALE_KEYS } = require('./locale');

const DEFAULT_SETTINGS = {
  seasonalTheme: 'spring',
  fontSize: 'medium',
  locale: 'zh-cn',
  autoOpen: true,

  // Active provider
  activeProvider: 'claude',

  // Per-provider configuration
  providers: {
    claude: {
      label: 'Claude',
      endpoint: '',
      apiKey: '',
      model: 'claude-sonnet-4-20250514',
      systemPrompt: '',
    },
    codex: {
      label: 'Codex',
      endpoint: '',
      apiKey: '',
      model: '',
      systemPrompt: '',
    },
    opencode: {
      label: 'OpenCode',
      endpoint: '',
      apiKey: '',
      model: '',
      systemPrompt: '',
    },
  },

  // Dashboard section visibility
  showTodayTasks: true,
  showInboxFiles: true,
  showEngineState: true,
  showWeeklyChart: true,
  showProjectCards: true,
  showRecentActivity: true,
  showVaultStats: true,
  showNav: true,

  // Data limits
  maxRecentItems: 8,
  maxTaskItems: 12,
  maxInboxItems: 6,
};

/** Built-in provider presets for quick fill */
const PROVIDER_PRESETS = {
  claude: {
    endpoint: 'https://api.anthropic.com/v1',
    model: 'claude-sonnet-4-20250514',
    models: ['claude-sonnet-4-20250514', 'claude-3-5-sonnet-20241022', 'claude-3-opus-20240229', 'claude-3-5-haiku-20241022'],
  },
  codex: {
    endpoint: '',
    model: '',
    models: [],
  },
  opencode: {
    endpoint: '',
    model: '',
    models: [],
  },
};

class CockpitSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.activeTab = 'general'; // 'general' | providerId
  }

  _t(key, params) {
    return t(key, this.plugin.settings.locale, params);
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    const providerIds = ['claude', 'codex', 'opencode'];
    const tabIds = ['general', ...providerIds];

    // Tab bar
    const tabBar = containerEl.createDiv({ cls: 'kos-cockpit-settings-tabs' });
    const tabButtons = new Map();
    const tabContents = new Map();

    if (!tabIds.includes(this.activeTab)) this.activeTab = 'general';

    for (const id of tabIds) {
      const label = id === 'general'
        ? 'General'
        : (this.plugin.settings.providers[id]?.label || id);
      const btn = tabBar.createEl('button', {
        cls: 'kos-cockpit-settings-tab' + (id === this.activeTab ? ' kos-cockpit-settings-tab--active' : ''),
        text: label,
      });
      btn.addEventListener('click', () => {
        this.activeTab = id;
        for (const tid of tabIds) {
          tabButtons.get(tid)?.toggleClass('kos-cockpit-settings-tab--active', tid === id);
          tabContents.get(tid)?.toggleClass('kos-cockpit-settings-tab-content--active', tid === id);
        }
      });
      tabButtons.set(id, btn);
    }

    // Tab content containers
    for (const id of tabIds) {
      const content = containerEl.createDiv({
        cls: 'kos-cockpit-settings-tab-content' + (id === this.activeTab ? ' kos-cockpit-settings-tab-content--active' : ''),
      });
      tabContents.set(id, content);
    }

    // Render each tab
    this.renderGeneralTab(tabContents.get('general'));
    for (const providerId of providerIds) {
      this.renderProviderTab(tabContents.get(providerId), providerId);
    }
  }

  renderGeneralTab(container) {
    container.createEl('h3', { text: this._t('settings.generalTab') });

    // Language
    new Setting(container)
      .setName(this._t('settings.language'))
      .setDesc(this._t('settings.languageDesc'))
      .addDropdown((d) => {
        d.addOption('zh-cn', this._t('settings.langZhCN'))
         .addOption('en', this._t('settings.langEn'))
         .addOption('zh-tw', this._t('settings.langZhTW'))
         .setValue(this.plugin.settings.locale)
         .onChange(async (v) => {
           this.plugin.settings.locale = v;
           await this.plugin.saveSettings();
           this.display();
         });
      });

    // Auto-open
    new Setting(container)
      .setName(this._t('settings.autoOpen'))
      .setDesc(this._t('settings.autoOpenDesc'))
      .addToggle((t) =>
        t.setValue(this.plugin.settings.autoOpen).onChange(async (v) => {
          this.plugin.settings.autoOpen = v;
          await this.plugin.saveSettings();
        })
      );

    // Active provider selector
    const providerIds = ['claude', 'codex', 'opencode'];
    new Setting(container)
      .setName(this._t('provider.activeProvider'))
      .setDesc(this._t('provider.activeProviderDesc'))
      .addDropdown((d) => {
        for (const pid of providerIds) {
          d.addOption(pid, this.plugin.settings.providers[pid]?.label || pid);
        }
        d.setValue(this.plugin.settings.activeProvider || 'claude').onChange(async (v) => {
          this.plugin.settings.activeProvider = v;
          await this.plugin.saveSettings();
        });
      });

    // Dashboard sections
    container.createEl('h3', { text: this._t('settings.dashboard') });
    container.createEl('p', { text: this._t('settings.dashboardDesc'), cls: 'setting-item-description' });

    const sections = [
      { key: 'showTodayTasks', name: this._t('settings.sectionTodayTasks'), desc: this._t('settings.sectionTodayTasksDesc') },
      { key: 'showProjectCards', name: this._t('settings.sectionProjects'), desc: this._t('settings.sectionProjectsDesc') },
      { key: 'showVaultStats', name: this._t('settings.sectionVaultStats'), desc: this._t('settings.sectionVaultStatsDesc') },
      { key: 'showRecentActivity', name: this._t('settings.sectionRecentActivity'), desc: this._t('settings.sectionRecentActivityDesc') },
      { key: 'showNav', name: this._t('settings.sectionNav'), desc: this._t('settings.sectionNavDesc') },
      { key: 'showInboxFiles', name: this._t('settings.sectionInboxFiles'), desc: this._t('settings.sectionInboxFilesDesc') },
      { key: 'showEngineState', name: this._t('settings.sectionEngineState'), desc: this._t('settings.sectionEngineStateDesc') },
      { key: 'showWeeklyChart', name: this._t('settings.sectionWeeklyChart'), desc: this._t('settings.sectionWeeklyChartDesc') },
    ];

    sections.forEach(({ key, name, desc }) => {
      new Setting(container).setName(name).setDesc(desc).addToggle((t) =>
        t.setValue(this.plugin.settings[key]).onChange(async (v) => {
          this.plugin.settings[key] = v;
          await this.plugin.saveSettings();
        })
      );
    });

    // Data limits
    container.createEl('h3', { text: this._t('settings.dataLimits') });

    new Setting(container)
      .setName(this._t('settings.maxRecent'))
      .setDesc(this._t('settings.maxRecentDesc'))
      .addText((t) =>
        t.setPlaceholder('8').setValue(String(this.plugin.settings.maxRecentItems)).onChange(async (v) => {
          this.plugin.settings.maxRecentItems = Math.max(3, Math.min(20, Number(v) || 8));
          await this.plugin.saveSettings();
        })
      );

    new Setting(container)
      .setName(this._t('settings.maxTasks'))
      .setDesc(this._t('settings.maxTasksDesc'))
      .addText((t) =>
        t.setPlaceholder('12').setValue(String(this.plugin.settings.maxTaskItems)).onChange(async (v) => {
          this.plugin.settings.maxTaskItems = Math.max(1, Math.min(20, Number(v) || 12));
          await this.plugin.saveSettings();
        })
      );

    new Setting(container)
      .setName(this._t('settings.maxInbox'))
      .setDesc(this._t('settings.maxInboxDesc'))
      .addText((t) =>
        t.setPlaceholder('6').setValue(String(this.plugin.settings.maxInboxItems)).onChange(async (v) => {
          this.plugin.settings.maxInboxItems = Math.max(1, Math.min(20, Number(v) || 6));
          await this.plugin.saveSettings();
        })
      );

    // About
    container.createEl('h3', { text: this._t('settings.about') });
    const desc = document.createDocumentFragment();
    desc.createEl('span', { text: this._t('settings.versionDesc') });
    new Setting(container).setName(this._t('settings.version')).setDesc(desc);
  }

  renderProviderTab(container, providerId) {
    const provider = this.plugin.settings.providers[providerId];
    const preset = PROVIDER_PRESETS[providerId];
    const label = provider?.label || providerId;

    container.createEl('h3', { text: this._t('provider.labelSettings', { label: label }) });

    // API Endpoint
    new Setting(container)
      .setName(this._t('provider.endpoint'))
      .setDesc(preset?.endpoint ? this._t('provider.defaultEndpoint', { endpoint: preset.endpoint }) : this._t('provider.endpointDesc'))
      .addText((t) =>
        t.setPlaceholder(preset?.endpoint || 'https://api.openai.com/v1')
         .setValue(provider?.endpoint || '')
         .onChange(async (v) => {
           this.plugin.settings.providers[providerId].endpoint = v.trim();
           await this.plugin.saveSettings();
         })
      );

    // API Key
    new Setting(container)
      .setName(this._t('provider.apiKey'))
      .setDesc(this._t('provider.apiKeyDesc'))
      .addText((t) => {
        t.setPlaceholder('sk-...')
         .setValue(provider?.apiKey || '')
         .onChange(async (v) => {
           this.plugin.settings.providers[providerId].apiKey = v.trim();
           await this.plugin.saveSettings();
         });
        t.inputEl.type = 'password';
      });

    // Model
    new Setting(container)
      .setName(this._t('provider.model'))
      .setDesc(preset?.models?.length ? this._t('provider.presetModels', { models: preset.models.join(', ') }) : this._t('provider.modelDesc'))
      .addText((t) =>
        t.setPlaceholder(preset?.model || 'gpt-4o')
         .setValue(provider?.model || preset?.model || '')
         .onChange(async (v) => {
           this.plugin.settings.providers[providerId].model = v.trim();
           await this.plugin.saveSettings();
         })
      );

    // System Prompt
    new Setting(container)
      .setName(this._t('provider.systemPrompt'))
      .setDesc(this._t('provider.systemPromptPlaceholder'))
      .addTextArea((t) => {
        t.setPlaceholder(this._t('provider.systemPromptPlaceholder'))
         .setValue(provider?.systemPrompt || '')
         .onChange(async (v) => {
           this.plugin.settings.providers[providerId].systemPrompt = v.trim();
           await this.plugin.saveSettings();
         });
        t.inputEl.rows = 4;
        t.inputEl.cols = 60;
        t.inputEl.addClass('kos-cockpit-textarea');
      });
  }
}

module.exports = { CockpitSettingTab, DEFAULT_SETTINGS, PROVIDER_PRESETS };
