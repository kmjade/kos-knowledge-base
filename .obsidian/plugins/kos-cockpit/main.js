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
        // Day names
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
        "ai.placeholder": "\u8BE2\u95EE KOS \u77E5\u8BC6\u5E93...",
        "ai.welcome": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u95EE\u6211\u5173\u4E8E\u77E5\u8BC6\u5E93\u3001\u9879\u76EE\u72B6\u6001\u6216\u4EFB\u4F55 KOS \u76F8\u5173\u7684\u95EE\u9898\u3002",
        "ai.sendBtn": "\u53D1\u9001",
        "ai.clearBtn": "\u6E05\u7A7A\u5BF9\u8BDD",
        "ai.thinking": "\u601D\u8003\u4E2D...",
        "ai.needConfig": "\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6E API \u5BC6\u94A5\u548C\u6A21\u578B\u3002",
        "ai.error": "\u8BF7\u6C42\u5931\u8D25: {msg}",
        "ai.retry": "\u91CD\u8BD5",
        "ai.copy": "\u590D\u5236",
        "ai.copied": "\u5DF2\u590D\u5236",
        // AI settings
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "\u914D\u7F6E AI \u5BF9\u8BDD\u7684 API \u63A5\u5165\u53C2\u6570\u3002\u7559\u7A7A\u5219\u804A\u5929\u533A\u663E\u793A\u4E3A\u4E0D\u53EF\u7528\u3002",
        "ai.apiEndpoint": "API Endpoint",
        "ai.apiKey": "API Key",
        "ai.model": "\u6A21\u578B\u540D\u79F0",
        "ai.systemPrompt": "\u7CFB\u7EDF\u63D0\u793A\u8BCD",
        "ai.systemPromptPlaceholder": "\u4F60\u662F\u4E00\u4E2A\u77E5\u8BC6\u7BA1\u7406\u52A9\u624B\uFF0C\u5E2E\u52A9\u7528\u6237\u5904\u7406 KOS \u77E5\u8BC6\u5E93\u3002",
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
        "ai.placeholder": "Ask about the KOS vault...",
        "ai.welcome": "Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.",
        "ai.sendBtn": "Send",
        "ai.clearBtn": "Clear Chat",
        "ai.thinking": "Thinking...",
        "ai.needConfig": "Please configure API key and model in settings first.",
        "ai.error": "Request failed: {msg}",
        "ai.retry": "Retry",
        "ai.copy": "Copy",
        "ai.copied": "Copied",
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "Configure API access for the AI chat. Leave empty to show chat as unavailable.",
        "ai.apiEndpoint": "API Endpoint",
        "ai.apiKey": "API Key",
        "ai.model": "Model Name",
        "ai.systemPrompt": "System Prompt",
        "ai.systemPromptPlaceholder": "You are a knowledge management assistant helping the user navigate their KOS vault.",
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
        "ai.placeholder": "\u8A62\u554F KOS \u77E5\u8B58\u5EAB...",
        "ai.welcome": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u554F\u6211\u95DC\u65BC\u77E5\u8B58\u5EAB\u3001\u5C08\u6848\u72C0\u614B\u6216\u4EFB\u4F55 KOS \u76F8\u95DC\u7684\u554F\u984C\u3002",
        "ai.sendBtn": "\u767C\u9001",
        "ai.clearBtn": "\u6E05\u7A7A\u5C0D\u8A71",
        "ai.thinking": "\u601D\u8003\u4E2D...",
        "ai.needConfig": "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u914D\u7F6E API \u5BC6\u9470\u548C\u6A21\u578B\u3002",
        "ai.error": "\u8ACB\u6C42\u5931\u6557: {msg}",
        "ai.retry": "\u91CD\u8A66",
        "ai.copy": "\u8907\u88FD",
        "ai.copied": "\u5DF2\u8907\u88FD",
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "\u914D\u7F6E AI \u5C0D\u8A71\u7684 API \u63A5\u5165\u53C3\u6578\u3002\u7559\u7A7A\u5247\u804A\u5929\u5340\u986F\u793A\u70BA\u4E0D\u53EF\u7528\u3002",
        "ai.apiEndpoint": "API Endpoint",
        "ai.apiKey": "API Key",
        "ai.model": "\u6A21\u578B\u540D\u7A31",
        "ai.systemPrompt": "\u7CFB\u7D71\u63D0\u793A\u8A5E",
        "ai.systemPromptPlaceholder": "\u4F60\u662F\u4E00\u500B\u77E5\u8B58\u7BA1\u7406\u52A9\u624B\uFF0C\u5E6B\u52A9\u7528\u6236\u8655\u7406 KOS \u77E5\u8B58\u5EAB\u3002",
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

// src/ai-chat.js
var require_ai_chat = __commonJS({
  "src/ai-chat.js"(exports2, module2) {
    var DEFAULT_SYSTEM_PROMPT = "You are a knowledge management assistant helping the user navigate their KOS vault. Respond concisely in the user's language.";
    var AIChat = class {
      constructor(settings) {
        this.settings = settings;
        this.messages = [];
        this.abortController = null;
        this._addWelcome();
      }
      /** Current locale from settings */
      get _locale() {
        return this.settings && this.settings.locale || "zh-cn";
      }
      /** Check if API configuration is present */
      get isConfigured() {
        const s = this.settings || {};
        return !!(s.aiEndpoint && s.aiApiKey && s.aiModel);
      }
      /** Reset conversation */
      clear() {
        this.messages = [];
        this._addWelcome();
      }
      /** Expose message history (read-only copy) */
      getHistory() {
        return this.messages.slice();
      }
      /**
       * Send a user message and stream the assistant response.
       * @param {string} content - User message text
       * @param {object} callbacks - { onToken(text), onDone(fullText), onError(err) }
       * @returns {AbortSignal} - signal to abort the request
       */
      sendMessage(content, callbacks = {}) {
        const { onToken, onDone, onError } = callbacks;
        const s = this.settings || {};
        if (!this.isConfigured) {
          if (onError) onError(new Error("AI not configured"));
          return null;
        }
        const userMsg = { role: "user", content: String(content).trim() };
        this.messages.push(userMsg);
        const systemPrompt = (s.aiSystemPrompt || "").trim() || DEFAULT_SYSTEM_PROMPT;
        const payload = {
          model: s.aiModel,
          messages: [
            { role: "system", content: systemPrompt },
            ...this.messages.filter((m) => m.role !== "system")
          ]
        };
        this.abortController = new AbortController();
        const signal = this.abortController.signal;
        let fullResponse = "";
        this._doStreamRequest(s.aiEndpoint, s.aiApiKey, payload, signal, {
          onToken(text) {
            fullResponse += text;
            if (onToken) onToken(text);
          },
          onDone() {
            if (fullResponse) {
              this.messages.push({ role: "assistant", content: fullResponse });
            }
            this.abortController = null;
            if (onDone) onDone(fullResponse);
          },
          onError(err) {
            this.abortController = null;
            if (onError) onError(err);
          }
        });
        return signal;
      }
      /** Abort an in-flight request */
      abort() {
        if (this.abortController) {
          this.abortController.abort();
          this.abortController = null;
        }
      }
      // ── Private ──
      _addWelcome() {
        const locale = this._locale;
        const welcomes = {
          "zh-cn": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u95EE\u6211\u5173\u4E8E\u77E5\u8BC6\u5E93\u3001\u9879\u76EE\u72B6\u6001\u6216\u4EFB\u4F55 KOS \u76F8\u5173\u7684\u95EE\u9898\u3002",
          "en": "Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.",
          "zh-tw": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u554F\u6211\u95DC\u65BC\u77E5\u8B58\u5EAB\u3001\u5C08\u6848\u72C0\u614B\u6216\u4EFB\u4F55 KOS \u76F8\u95DC\u7684\u554F\u984C\u3002"
        };
        this.messages.push({
          role: "assistant",
          content: welcomes[locale] || welcomes["zh-cn"]
        });
      }
      /**
       * Stream a chat completion request via fetch + ReadableStream.
       */
      async _doStreamRequest(endpoint, apiKey, payload, signal, callbacks) {
        const { onToken, onDone, onError } = callbacks;
        let url = String(endpoint || "").trim();
        if (!url) url = "https://api.openai.com/v1";
        if (!/\/chat\/completions$/i.test(url)) {
          url = url.replace(/\/+$/, "") + "/chat/completions";
        }
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + String(apiKey || "").trim()
            },
            body: JSON.stringify({
              ...payload,
              stream: true
            }),
            signal
          });
          if (!response.ok) {
            let errBody = "";
            try {
              errBody = await response.text();
            } catch {
            }
            const errMsg = "HTTP " + response.status + (errBody ? ": " + errBody.slice(0, 200) : "");
            if (onError) onError(new Error(errMsg));
            return;
          }
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || trimmed === "data: [DONE]") continue;
              if (!trimmed.startsWith("data: ")) continue;
              try {
                const json = JSON.parse(trimmed.slice(6));
                const delta = json.choices && json.choices[0] && json.choices[0].delta;
                const content = delta && delta.content;
                if (content) {
                  if (onToken) onToken(content);
                }
              } catch {
              }
            }
          }
          if (buffer.trim()) {
            const trimmed = buffer.trim();
            if (trimmed.startsWith("data: ") && trimmed !== "data: [DONE]") {
              try {
                const json = JSON.parse(trimmed.slice(6));
                const delta = json.choices && json.choices[0] && json.choices[0].delta;
                const content = delta && delta.content;
                if (content && onToken) onToken(content);
              } catch {
              }
            }
          }
          if (onDone) onDone();
        } catch (err) {
          if (err.name === "AbortError") {
            return;
          }
          if (onError) onError(err);
        }
      }
    };
    module2.exports = { AIChat, DEFAULT_SYSTEM_PROMPT };
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
    var { AIChat } = require_ai_chat();
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
        this.aiChat = null;
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
      _t(key, params) {
        return t(key, this.settings?.locale || "zh-cn", params);
      }
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
      // ── Today's Task Panel ──
      renderTodayTasks(container, data) {
        const section = container.createEl("div", { cls: "kos-db-section kos-db-today-tasks" });
        const header = section.createEl("div", { cls: "kos-db-today-header" });
        header.createEl("div", { text: "\u2705 " + this._t("task.title"), cls: "kos-db-section-title" });
        if (data.today?.tasks) {
          const { done, total, completionRate } = data.today.tasks;
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
      // ── Inbox File List ──
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
      // ── Engine State Display ──
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
          if (eng.lastRun) chip.createEl("span", { text: " " + eng.lastRun.slice(5), cls: "kos-db-engine-date" });
          if (eng.summary) chip.setAttr("title", eng.summary);
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
      // ──────────────── AI Chat ────────────────
      renderAIChat(container) {
        const section = container.createEl("div", { cls: "kos-db-section kos-db-ai" });
        const headerRow = section.createEl("div", { cls: "kos-db-ai-header" });
        headerRow.createEl("div", { text: "\u{1F916} " + this._t("ai.title"), cls: "kos-db-section-title" });
        const clearBtn = headerRow.createEl("button", { cls: "kos-db-ai-clear", text: this._t("ai.clearBtn") });
        clearBtn.addEventListener("click", () => {
          this._clearChat();
        });
        const msgContainer = section.createEl("div", { cls: "kos-db-ai-msgs" });
        const inputRow = section.createEl("div", { cls: "kos-db-ai-input-row" });
        const input = inputRow.createEl("input", {
          cls: "kos-db-ai-input",
          attr: { type: "text", placeholder: this._t("ai.placeholder") }
        });
        const sendBtn = inputRow.createEl("button", { cls: "kos-db-ai-send", text: this._t("ai.sendBtn") });
        this._initAiChat();
        this._renderChatMessages(msgContainer);
        const doSend = () => {
          const val = input.value.trim();
          if (!val) return;
          this._sendChatMessage(val, msgContainer, input);
        };
        sendBtn.addEventListener("click", doSend);
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") doSend();
        });
      }
      _initAiChat() {
        if (this.aiChat && this.aiChat.isConfigured) return;
        if (!this.aiChat) {
          this.aiChat = new AIChat({
            locale: this.settings?.locale || "zh-cn",
            aiEndpoint: this.settings?.aiEndpoint || "",
            aiApiKey: this.settings?.aiApiKey || "",
            aiModel: this.settings?.aiModel || "gpt-4o",
            aiSystemPrompt: this.settings?.aiSystemPrompt || ""
          });
        }
      }
      _clearChat() {
        if (this.aiChat) {
          this.aiChat.abort();
          this.aiChat.clear();
        }
        const section = this.contentEl.querySelector(".kos-db-ai");
        if (section) {
          const msgContainer = section.querySelector(".kos-db-ai-msgs");
          if (msgContainer) this._renderChatMessages(msgContainer);
        }
      }
      _renderChatMessages(container) {
        container.empty();
        const msgs = this.aiChat ? this.aiChat.getHistory() : [];
        if (!this.aiChat || !this.aiChat.isConfigured) {
          container.createEl("div", { text: this._t("ai.needConfig"), cls: "kos-db-ai-need-config" });
          return;
        }
        msgs.forEach((msg) => {
          const bubble = container.createEl("div", {
            cls: "kos-db-ai-msg kos-db-ai-msg-" + msg.role
          });
          const textEl = bubble.createEl("div", { cls: "kos-db-ai-msg-text" });
          textEl.textContent = msg.content;
          if (msg.role === "assistant") {
            const copyBtn = bubble.createEl("button", { cls: "kos-db-ai-copy-btn", text: this._t("ai.copy") });
            copyBtn.addEventListener("click", async () => {
              try {
                await navigator.clipboard.writeText(msg.content);
                copyBtn.textContent = this._t("ai.copied");
                setTimeout(() => {
                  copyBtn.textContent = this._t("ai.copy");
                }, 2e3);
              } catch {
              }
            });
          }
        });
        container.scrollTop = container.scrollHeight;
      }
      _sendChatMessage(text, msgContainer, inputEl) {
        if (!this.aiChat || !this.aiChat.isConfigured) return;
        inputEl.disabled = true;
        inputEl.value = "";
        this._renderChatMessages(msgContainer);
        const thinkingEl = msgContainer.createEl("div", { cls: "kos-db-ai-msg kos-db-ai-msg-assistant kos-db-ai-thinking" });
        thinkingEl.createEl("span", { text: this._t("ai.thinking"), cls: "kos-db-ai-msg-text" });
        let assistantText = "";
        let assistantBubble = null;
        this.aiChat.sendMessage(text, {
          onToken: (token) => {
            assistantText += token;
            if (!assistantBubble) {
              thinkingEl.remove();
              assistantBubble = msgContainer.createEl("div", { cls: "kos-db-ai-msg kos-db-ai-msg-assistant" });
              assistantBubble.createEl("div", { cls: "kos-db-ai-msg-text" });
            }
            assistantBubble.querySelector(".kos-db-ai-msg-text").textContent = assistantText;
            msgContainer.scrollTop = msgContainer.scrollHeight;
          },
          onDone: () => {
            if (thinkingEl.isConnected) thinkingEl.remove();
            if (!assistantBubble && assistantText) {
              assistantBubble = msgContainer.createEl("div", { cls: "kos-db-ai-msg kos-db-ai-msg-assistant" });
              assistantBubble.createEl("div", { cls: "kos-db-ai-msg-text", text: assistantText });
            }
            if (assistantBubble && assistantText) {
              const copyBtn = assistantBubble.createEl("button", { cls: "kos-db-ai-copy-btn", text: this._t("ai.copy") });
              copyBtn.addEventListener("click", async () => {
                try {
                  await navigator.clipboard.writeText(assistantText);
                  copyBtn.textContent = this._t("ai.copied");
                  setTimeout(() => {
                    copyBtn.textContent = this._t("ai.copy");
                  }, 2e3);
                } catch {
                }
              });
            }
            inputEl.disabled = false;
            inputEl.focus();
            msgContainer.scrollTop = msgContainer.scrollHeight;
          },
          onError: (err) => {
            if (thinkingEl.isConnected) thinkingEl.remove();
            const errBubble = msgContainer.createEl("div", { cls: "kos-db-ai-msg kos-db-ai-msg-error" });
            errBubble.createEl("div", {
              text: this._t("ai.error", { msg: err.message || "Unknown error" }),
              cls: "kos-db-ai-msg-text"
            });
            const retryBtn = errBubble.createEl("button", { cls: "kos-db-ai-retry-btn", text: this._t("ai.retry") });
            retryBtn.addEventListener("click", () => {
              this._sendChatMessage(text, msgContainer, inputEl);
            });
            inputEl.disabled = false;
            msgContainer.scrollTop = msgContainer.scrollHeight;
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
      maxInboxItems: 6,
      // AI Chat provider
      aiEndpoint: "",
      aiApiKey: "",
      aiModel: "gpt-4o",
      aiSystemPrompt: ""
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
        this.renderAiSection(containerEl);
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
      renderAiSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("ai.providerSection") });
        containerEl.createEl("p", {
          text: this._t("ai.providerSectionDesc"),
          cls: "setting-item-description"
        });
        new Setting(containerEl).setName(this._t("ai.apiEndpoint")).setDesc("https://api.openai.com/v1").addText(
          (text) => text.setPlaceholder("https://api.openai.com/v1").setValue(this.plugin.settings.aiEndpoint || "").onChange(async (v) => {
            this.plugin.settings.aiEndpoint = v.trim();
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName(this._t("ai.apiKey")).setDesc("sk-...").addText((text) => {
          text.setPlaceholder("sk-...").setValue(this.plugin.settings.aiApiKey || "").onChange(async (v) => {
            this.plugin.settings.aiApiKey = v.trim();
            await this.plugin.saveSettings();
          });
          text.inputEl.type = "password";
        });
        new Setting(containerEl).setName(this._t("ai.model")).setDesc("gpt-4o, claude-3.5-sonnet, deepseek-chat, ...").addText(
          (text) => text.setPlaceholder("gpt-4o").setValue(this.plugin.settings.aiModel || "gpt-4o").onChange(async (v) => {
            this.plugin.settings.aiModel = v.trim() || "gpt-4o";
            await this.plugin.saveSettings();
          })
        );
        new Setting(containerEl).setName(this._t("ai.systemPrompt")).setDesc(this._t("ai.systemPromptPlaceholder")).addTextArea((text) => {
          text.setPlaceholder(this._t("ai.systemPromptPlaceholder")).setValue(this.plugin.settings.aiSystemPrompt || "").onChange(async (v) => {
            this.plugin.settings.aiSystemPrompt = v.trim();
            await this.plugin.saveSettings();
          });
          text.inputEl.rows = 4;
          text.inputEl.cols = 60;
          text.inputEl.addClass("kos-cockpit-textarea");
        });
      }
      renderDashboardSection(containerEl) {
        containerEl.createEl("h3", { text: this._t("settings.dashboard") });
        containerEl.createEl("p", {
          text: this._t("settings.dashboardDesc"),
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
          { key: "showAiChat", name: "AI Chat", desc: "AI chat with LLM provider." }
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
        desc.createEl("span", { text: this._t("settings.versionDesc") });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cblxuY29uc3QgTE9DQUxFUyA9IHtcbiAgJ3poLWNuJzoge1xuICAgIC8vIEdlbmVyYWxcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU1MkEwXHU4RjdEXHU0RUVBXHU4ODY4XHU3NkQ4XHU2NUY2XHU1MUZBXHU5NTE5XHUzMDAyJyxcblxuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1MjFCXHU1RUZBJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QkJFXHU1QjlBKScsXG5cbiAgICAvLyBEYXkgbmFtZXNcbiAgICAnZGF5LnN1bic6ICdcdTY1RTUnLFxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcbiAgICAnZGF5LndlZCc6ICdcdTRFMDknLFxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcbiAgICAnZGF5LnNhdCc6ICdcdTUxNkQnLFxuXG4gICAgLy8gUXVpY2sgYWN0aW9uc1xuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1ODNCNycsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODdFJyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU5ODc5XHU3NkVFJyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcblxuICAgIC8vIFRvZGF5IFRhc2tzXG4gICAgJ3Rhc2sudGl0bGUnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExJyxcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxuICAgICd0YXNrLm5vbmUnOiAnXHU2NjgyXHU2NUUwXHU0RUZCXHU1MkExXHUzMDAyJyxcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnXHU0RUNBXHU2NUU1XHU3QjE0XHU4QkIwXHU2NzJBXHU1MjFCXHU1RUZBXHUzMDAyXHU3MEI5XHU1MUZCIFtcdTg5QzRcdTUyMTJcdTRFQ0FcdTU5MjldIFx1NTIxQlx1NUVGQVx1MzAwMicsXG5cbiAgICAvLyBQcm9qZWN0c1xuICAgICdwcm9qZWN0LnRpdGxlJzogJ1x1NkQzQlx1OERDM1x1OTg3OVx1NzZFRScsXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFXHUzMDAyJyxcblxuICAgIC8vIFZhdWx0IHN0YXRzXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEJDNlx1NUU5M1x1N0VERlx1OEJBMScsXG4gICAgJ3N0YXRzLnRvdGFsTm90ZXMnOiAnXHU2MDNCXHU3QjE0XHU4QkIwJyxcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdcdTVGODVcdTUyMDZcdTYyRTMnLFxuXG4gICAgLy8gUmVjZW50IGFjdGl2aXR5XG4gICAgJ3JlY2VudC50aXRsZSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyQTgnLFxuICAgICdyZWNlbnQuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU1MkE4XHUzMDAyJyxcblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAnbmF2LnRpdGxlJzogJ1x1NEUwOVx1NjUyRlx1NjdGMSBcdTAwQjcgXHU1QkZDXHU4MjJBJyxcblxuICAgIC8vIEluYm94XG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAvLyBFbmdpbmUgc3RhdGVcbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMScsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTVGMTVcdTY0Q0VcdTcyQjZcdTYwMDFcdTY1NzBcdTYzNkVcdTMwMDInLFxuXG4gICAgLy8gV2Vla2x5IGNoYXJ0XG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTU0NjhcdThCQjBcdTVGNTVcdTUyMDZcdTVFMDMnLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnXHU2NzJDXHU1NDY4XHU2NjgyXHU2NUUwXHU2NUU1XHU4QkIwXHU4QkIwXHU1RjU1XHUzMDAyJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IFx1Njc2MScsXG5cbiAgICAvLyBBSSBDaGF0XG4gICAgJ2FpLnRpdGxlJzogJ0FJIFx1NUJGOVx1OEJERCcsXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEJFMlx1OTVFRSBLT1MgXHU3N0U1XHU4QkM2XHU1RTkzLi4uJyxcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1OTVFRVx1NjIxMVx1NTE3M1x1NEU4RVx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMVx1OTg3OVx1NzZFRVx1NzJCNlx1NjAwMVx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU1MTczXHU3Njg0XHU5NUVFXHU5ODk4XHUzMDAyJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdcdTUzRDFcdTkwMDEnLFxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVCRjlcdThCREQnLFxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxuICAgICdhaS5uZWVkQ29uZmlnJzogJ1x1OEJGN1x1NTE0OFx1NTcyOFx1OEJCRVx1N0Y2RVx1NEUyRFx1OTE0RFx1N0Y2RSBBUEkgXHU1QkM2XHU5NEE1XHU1NDhDXHU2QTIxXHU1NzhCXHUzMDAyJyxcbiAgICAnYWkuZXJyb3InOiAnXHU4QkY3XHU2QzQyXHU1OTMxXHU4RDI1OiB7bXNnfScsXG4gICAgJ2FpLnJldHJ5JzogJ1x1OTFDRFx1OEJENScsXG4gICAgJ2FpLmNvcHknOiAnXHU1OTBEXHU1MjM2JyxcbiAgICAnYWkuY29waWVkJzogJ1x1NURGMlx1NTkwRFx1NTIzNicsXG5cbiAgICAvLyBBSSBzZXR0aW5nc1xuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxuICAgICdhaS5wcm92aWRlclNlY3Rpb25EZXNjJzogJ1x1OTE0RFx1N0Y2RSBBSSBcdTVCRjlcdThCRERcdTc2ODQgQVBJIFx1NjNBNVx1NTE2NVx1NTNDMlx1NjU3MFx1MzAwMlx1NzU1OVx1N0E3QVx1NTIxOVx1ODA0QVx1NTkyOVx1NTMzQVx1NjYzRVx1NzkzQVx1NEUzQVx1NEUwRFx1NTNFRlx1NzUyOFx1MzAwMicsXG4gICAgJ2FpLmFwaUVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcbiAgICAnYWkubW9kZWwnOiAnXHU2QTIxXHU1NzhCXHU1NDBEXHU3OUYwJyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0JzogJ1x1N0NGQlx1N0VERlx1NjNEMFx1NzkzQVx1OEJDRCcsXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1x1NEY2MFx1NjYyRlx1NEUwMFx1NEUyQVx1NzdFNVx1OEJDNlx1N0JBMVx1NzQwNlx1NTJBOVx1NjI0Qlx1RkYwQ1x1NUUyRVx1NTJBOVx1NzUyOFx1NjIzN1x1NTkwNFx1NzQwNiBLT1MgXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAyJyxcblxuICAgIC8vIFNldHRpbmdzXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NzU0Q1x1OTc2Mlx1OEJFRFx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwMDlcdTYyRTlcdTRFRUFcdTg4NjhcdTc2RDhcdTc1NENcdTk3NjJcdTc2ODRcdTY2M0VcdTc5M0FcdThCRURcdThBMDBcdTMwMDInLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU0MkZcdTUyQThcdTY1RjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDAgS09TIENvY2twaXRcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnRGFzaGJvYXJkIFNlY3Rpb25zJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTRFRUFcdTg4NjhcdTc2RDhcdTRFMEFcdTU0MDRcdTUzM0FcdTU3NTdcdTc2ODRcdTY2M0VcdTc5M0FcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOFx1NjU3MCcsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnXHU2NjNFXHU3OTNBXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU2NTg3XHU0RUY2XHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnXHU2NzAwXHU1OTI3XHU0RUZCXHU1MkExXHU2NTcwJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1NjYzRVx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMVx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ1x1NjcwMFx1NTkyNyBJbmJveCBcdTY1NzAnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnXHU2NjNFXHU3OTNBIEluYm94IFx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ0Fib3V0JyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTRFRUFcdTg4NjhcdTc2RDhcdTMwMDJLT1MgXHU3NTFGXHU2MDAxXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcbiAgfSxcblxuICAnZW4nOiB7XG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcbiAgICAnYXBwLmxvYWRpbmcnOiAnTG9hZGluZyBLT1MgQ29ja3BpdC4uLicsXG4gICAgJ2FwcC5lcnJvcic6ICdTb21ldGhpbmcgd2VudCB3cm9uZyBsb2FkaW5nIHRoZSBkYXNoYm9hcmQuJyxcblxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnRGFpbHkgTm90ZSBbe3N0YXR1c31dJyxcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ0NyZWF0ZWQnLFxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnTm90IENyZWF0ZWQnLFxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdUb2RheVxcJ3MgRm9jdXM6IHtmb2N1c30nLFxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKE5vdCBTZXQpJyxcblxuICAgICdkYXkuc3VuJzogJ1MnLFxuICAgICdkYXkubW9uJzogJ00nLFxuICAgICdkYXkudHVlJzogJ1QnLFxuICAgICdkYXkud2VkJzogJ1cnLFxuICAgICdkYXkudGh1JzogJ1QnLFxuICAgICdkYXkuZnJpJzogJ0YnLFxuICAgICdkYXkuc2F0JzogJ1MnLFxuXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnUGxhbiBUb2RheScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1F1aWNrIENhcHR1cmUnLFxuICAgICdhY3Rpb24uZGF5UmV2aWV3JzogJ0RheSBSZXZpZXcnLFxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdOZXcgUHJvamVjdCcsXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcbiAgICAnYWN0aW9uLnNldHRpbmdzJzogJ1NldHRpbmdzJyxcblxuICAgICd0YXNrLnRpdGxlJzogJ1RvZGF5XFwncyBUYXNrcycsXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcbiAgICAndGFzay5ub25lJzogJ05vIHRhc2tzIHlldC4nLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdEYWlseSBub3RlIG5vdCBjcmVhdGVkLiBDbGljayBbUGxhbiBUb2RheV0gdG8gY3JlYXRlIG9uZS4nLFxuXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnQWN0aXZlIFByb2plY3RzJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdObyBhY3RpdmUgcHJvamVjdHMuJyxcblxuICAgICdzdGF0cy50aXRsZSc6ICdWYXVsdCBTdGF0aXN0aWNzJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdUb3RhbCBOb3RlcycsXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ0FjdGl2ZSBQcm9qZWN0cycsXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1RvZGF5IE5ldycsXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnSW5ib3gnLFxuXG4gICAgJ3JlY2VudC50aXRsZSc6ICdSZWNlbnQgQWN0aXZpdHknLFxuICAgICdyZWNlbnQuZW1wdHknOiAnTm8gYWN0aXZpdHkgeWV0LicsXG5cbiAgICAnbmF2LnRpdGxlJzogJ1RocmVlIFBpbGxhcnMgXFx1MDBCNyBOYXYnLFxuXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAnZW5naW5lLnRpdGxlJzogJ0VuZ2luZSBTdGF0ZScsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdObyBlbmdpbmUgc3RhdGUgZGF0YSB5ZXQuJyxcblxuICAgICd3ZWVrbHkudGl0bGUnOiAnV2Vla2x5IFJlY29yZCBEaXN0cmlidXRpb24nLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnTm8gZGFpbHkgcmVjb3JkcyB0aGlzIHdlZWsuJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IGl0ZW1zJyxcblxuICAgICdhaS50aXRsZSc6ICdBSSBDaGF0JyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnQXNrIGFib3V0IHRoZSBLT1MgdmF1bHQuLi4nLFxuICAgICdhaS53ZWxjb21lJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdTZW5kJyxcbiAgICAnYWkuY2xlYXJCdG4nOiAnQ2xlYXIgQ2hhdCcsXG4gICAgJ2FpLnRoaW5raW5nJzogJ1RoaW5raW5nLi4uJyxcbiAgICAnYWkubmVlZENvbmZpZyc6ICdQbGVhc2UgY29uZmlndXJlIEFQSSBrZXkgYW5kIG1vZGVsIGluIHNldHRpbmdzIGZpcnN0LicsXG4gICAgJ2FpLmVycm9yJzogJ1JlcXVlc3QgZmFpbGVkOiB7bXNnfScsXG4gICAgJ2FpLnJldHJ5JzogJ1JldHJ5JyxcbiAgICAnYWkuY29weSc6ICdDb3B5JyxcbiAgICAnYWkuY29waWVkJzogJ0NvcGllZCcsXG5cbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdDb25maWd1cmUgQVBJIGFjY2VzcyBmb3IgdGhlIEFJIGNoYXQuIExlYXZlIGVtcHR5IHRvIHNob3cgY2hhdCBhcyB1bmF2YWlsYWJsZS4nLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ01vZGVsIE5hbWUnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1lvdSBhcmUgYSBrbm93bGVkZ2UgbWFuYWdlbWVudCBhc3Npc3RhbnQgaGVscGluZyB0aGUgdXNlciBuYXZpZ2F0ZSB0aGVpciBLT1MgdmF1bHQuJyxcblxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ0dlbmVyYWwnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdJbnRlcmZhY2UgTGFuZ3VhZ2UnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnQ2hvb3NlIHRoZSBkaXNwbGF5IGxhbmd1YWdlIGZvciB0aGUgZGFzaGJvYXJkLicsXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1xcdTdCODBcXHU0RjUzXFx1NEUyRFxcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1xcdTdFNDFcXHU5QUQ0XFx1NEUyRFxcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdBdXRvLW9wZW4gb24gc3RhcnR1cCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdBdXRvbWF0aWNhbGx5IG9wZW4gdGhlIEtPUyBDb2NrcGl0IHdoZW4gT2JzaWRpYW4gc3RhcnRzLicsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJzogJ1RvZ2dsZSB3aGljaCBzZWN0aW9ucyBhcHBlYXIgb24gdGhlIGNvY2twaXQgZGFzaGJvYXJkLicsXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnTWF4IHJlY2VudCBpdGVtcycsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnTnVtYmVyIG9mIHJlY2VudGx5IG1vZGlmaWVkIGZpbGVzIHRvIHNob3cgKG1heCAyMCkuJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnTWF4IHRhc2sgaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnTnVtYmVyIG9mIGRhaWx5LW5vdGUgdGFza3MgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdNYXggaW5ib3ggaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnTnVtYmVyIG9mIGluYm94IGZpbGUgbmFtZXMgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdBYm91dCcsXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnVmVyc2lvbicsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcXHUyMDE0IEEga25vd2xlZGdlIG1hbmFnZW1lbnQgZGFzaGJvYXJkIGZvciB0aGUgS09TX0xMTS1XaWtpIHZhdWx0LiBQYXJ0IG9mIHRoZSBLT1MgZWNvc3lzdGVtLicsXG4gIH0sXG5cbiAgJ3poLXR3Jzoge1xuICAgICdhcHAubmFtZSc6ICdLT1MgQ29ja3BpdCcsXG4gICAgJ2FwcC5sb2FkaW5nJzogJ1x1NkI2M1x1NTcyOFx1OEYwOVx1NTE2NSBLT1MgQ29ja3BpdC4uLicsXG4gICAgJ2FwcC5lcnJvcic6ICdcdThGMDlcdTUxNjVcdTUxMDBcdTg4NjhcdTY3N0ZcdTY2NDJcdTc2N0NcdTc1MUZcdTkzMkZcdThBQTRcdTMwMDInLFxuXG4gICAgJ2hlYWRlci5kYXRlRm9ybWF0JzogJ1lZWVktTU0tREQnLFxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdcdTZCQ0ZcdTY1RTVcdTdCNDZcdThBMTggW3tzdGF0dXN9XScsXG4gICAgJ2hlYWRlci5ub3RlQ3JlYXRlZCc6ICdcdTVERjJcdTVFRkFcdTdBQ0InLFxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnXHU2NzJBXHU1RUZBXHU3QUNCJyxcbiAgICAnaGVhZGVyLnRvZGF5Rm9jdXMnOiAnXHU0RUNBXHU2NUU1XHU3MTI2XHU5RURFOiB7Zm9jdXN9JyxcbiAgICAnaGVhZGVyLmZvY3VzTm90U2V0JzogJyhcdTY3MkFcdThBMkRcdTVCOUEpJyxcblxuICAgICdkYXkuc3VuJzogJ1x1NjVFNScsXG4gICAgJ2RheS5tb24nOiAnXHU0RTAwJyxcbiAgICAnZGF5LnR1ZSc6ICdcdTRFOEMnLFxuICAgICdkYXkud2VkJzogJ1x1NEUwOScsXG4gICAgJ2RheS50aHUnOiAnXHU1NkRCJyxcbiAgICAnZGF5LmZyaSc6ICdcdTRFOTQnLFxuICAgICdkYXkuc2F0JzogJ1x1NTE2RCcsXG5cbiAgICAnYWN0aW9uLnBsYW5Ub2RheSc6ICdcdTg5OEZcdTUyODNcdTRFQ0FcdTU5MjknLFxuICAgICdhY3Rpb24uY2FwdHVyZSc6ICdcdTVGRUJcdTkwMUZcdTYzNTVcdTYzNDknLFxuICAgICdhY3Rpb24uZGF5UmV2aWV3JzogJ1x1NkJDRlx1NjVFNVx1NTZERVx1OTg2NycsXG4gICAgJ2FjdGlvbi5uZXdQcm9qZWN0JzogJ1x1NjVCMFx1NUVGQVx1NUMwOFx1Njg0OCcsXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcbiAgICAnYWN0aW9uLnNldHRpbmdzJzogJ1x1OEEyRFx1NUI5QScsXG5cbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDknLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2QUJcdTcxMjFcdTRFRkJcdTUyRDlcdTMwMDInLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCNDZcdThBMThcdTY3MkFcdTVFRkFcdTdBQ0JcdTMwMDJcdTlFREVcdTY0Q0EgW1x1ODk4Rlx1NTI4M1x1NEVDQVx1NTkyOV0gXHU1RUZBXHU3QUNCXHUzMDAyJyxcblxuICAgICdwcm9qZWN0LnRpdGxlJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4XHUzMDAyJyxcblxuICAgICdzdGF0cy50aXRsZSc6ICdcdTc3RTVcdThCNThcdTVFQUJcdTdENzFcdThBMDgnLFxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1x1N0UzRFx1N0I0Nlx1OEExOCcsXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1x1NEVDQVx1NjVFNVx1NjVCMFx1NTg5RScsXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnXHU1Rjg1XHU1MjA2XHU5ODVFJyxcblxuICAgICdyZWNlbnQudGl0bGUnOiAnXHU2NzAwXHU4RkQxXHU2RDNCXHU1MkQ1JyxcbiAgICAncmVjZW50LmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NkQzQlx1NTJENVx1MzAwMicsXG5cbiAgICAnbmF2LnRpdGxlJzogJ1x1NEUwOVx1NjUyRlx1NjdGMSBcdTAwQjcgXHU1QzBFXHU4MjJBJyxcblxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxuICAgICdpbmJveC5tb3JlJzogJyt7Y291bnR9IG1vcmUuLi4nLFxuXG4gICAgJ2VuZ2luZS50aXRsZSc6ICdcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEInLFxuICAgICdlbmdpbmUuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU1RjE1XHU2NENFXHU3MkMwXHU2MTRCXHU4Q0M3XHU2NTk5XHUzMDAyJyxcblxuICAgICd3ZWVrbHkudGl0bGUnOiAnXHU2NzJDXHU5MDMxXHU4QTE4XHU5MzA0XHU1MjA2XHU0RjQ4JyxcbiAgICAnd2Vla2x5LmVtcHR5JzogJ1x1NjcyQ1x1OTAzMVx1NjZBQlx1NzEyMVx1NjVFNVx1OEExOFx1OEExOFx1OTMwNFx1MzAwMicsXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBcdTY4OUQnLFxuXG4gICAgJ2FpLnRpdGxlJzogJ0FJIFx1NUMwRFx1OEE3MScsXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEE2Mlx1NTU0RiBLT1MgXHU3N0U1XHU4QjU4XHU1RUFCLi4uJyxcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdcdTc2N0NcdTkwMDEnLFxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVDMERcdThBNzEnLFxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxuICAgICdhaS5uZWVkQ29uZmlnJzogJ1x1OEFDQlx1NTE0OFx1NTcyOFx1OEEyRFx1NUI5QVx1NEUyRFx1OTE0RFx1N0Y2RSBBUEkgXHU1QkM2XHU5NDcwXHU1NDhDXHU2QTIxXHU1NzhCXHUzMDAyJyxcbiAgICAnYWkuZXJyb3InOiAnXHU4QUNCXHU2QzQyXHU1OTMxXHU2NTU3OiB7bXNnfScsXG4gICAgJ2FpLnJldHJ5JzogJ1x1OTFDRFx1OEE2NicsXG4gICAgJ2FpLmNvcHknOiAnXHU4OTA3XHU4OEZEJyxcbiAgICAnYWkuY29waWVkJzogJ1x1NURGMlx1ODkwN1x1ODhGRCcsXG5cbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdcdTkxNERcdTdGNkUgQUkgXHU1QzBEXHU4QTcxXHU3Njg0IEFQSSBcdTYzQTVcdTUxNjVcdTUzQzNcdTY1NzhcdTMwMDJcdTc1NTlcdTdBN0FcdTUyNDdcdTgwNEFcdTU5MjlcdTUzNDBcdTk4NkZcdTc5M0FcdTcwQkFcdTRFMERcdTUzRUZcdTc1MjhcdTMwMDInLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ1x1NkEyMVx1NTc4Qlx1NTQwRFx1N0EzMScsXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdENzFcdTYzRDBcdTc5M0FcdThBNUUnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTY2MkZcdTRFMDBcdTUwMEJcdTc3RTVcdThCNThcdTdCQTFcdTc0MDZcdTUyQTlcdTYyNEJcdUZGMENcdTVFNkJcdTUyQTlcdTc1MjhcdTYyMzZcdTg2NTVcdTc0MDYgS09TIFx1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMicsXG5cbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdcdTRFMDBcdTgyMkMnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdcdTRFQ0JcdTk3NjJcdThBOUVcdThBMDAnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnXHU5MDc4XHU2NEM3XHU1MTAwXHU4ODY4XHU2NzdGXHU3Njg0XHU5ODZGXHU3OTNBXHU4QTlFXHU4QTAwXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcdTdFNDFcdTlBRDRcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTk1OEJcdTU1NUYnLFxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnT2JzaWRpYW4gXHU1NTVGXHU1MkQ1XHU2NjQyXHU4MUVBXHU1MkQ1XHU5NThCXHU1NTVGIEtPUyBDb2NrcGl0XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ1x1NTEwMFx1ODg2OFx1Njc3Rlx1NTM0MFx1NTg0QScsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnXHU2M0E3XHU1MjM2XHU1MTAwXHU4ODY4XHU2NzdGXHU0RTBBXHU1NDA0XHU1MzQwXHU1ODRBXHU3Njg0XHU5ODZGXHU3OTNBXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGF0YUxpbWl0cyc6ICdcdThDQzdcdTY1OTlcdTk2NTBcdTUyMzYnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnXHU2NzAwXHU1OTI3XHU2NzAwXHU4RkQxXHU2RDNCXHU1MkQ1XHU2NTc4JyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdcdTk4NkZcdTc5M0FcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTZBOTRcdTY4NDhcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdcdTY3MDBcdTU5MjdcdTRFRkJcdTUyRDlcdTY1NzgnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnXHU5ODZGXHU3OTNBXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkQ5XHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnXHU2NzAwXHU1OTI3IEluYm94IFx1NjU3OCcsXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdcdTk4NkZcdTc5M0EgSW5ib3ggXHU2QTk0XHU1NDBEXHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnXHU5NURDXHU2NUJDJyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCNThcdTdCQTFcdTc0MDZcdTUxMDBcdTg4NjhcdTY3N0ZcdTMwMDJLT1MgXHU3NTFGXHU2MTRCXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcbiAgfSxcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlIGEga2V5IHVzaW5nIHRoZSBjdXJyZW50IGxvY2FsZS5cbiAqIFN1cHBvcnRzIHtwbGFjZWhvbGRlcn0gc3Vic3RpdHV0aW9uIHZpYSB0aGUgcGFyYW1zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdChrZXksIGxvY2FsZSwgcGFyYW1zID0ge30pIHtcbiAgY29uc3QgZGljdCA9IExPQ0FMRVNbbG9jYWxlXSB8fCBMT0NBTEVTWyd6aC1jbiddO1xuICBsZXQgdGV4dCA9IGRpY3Rba2V5XTtcbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRleHQgPSBMT0NBTEVTWyd6aC1jbiddW2tleV07XG4gIH1cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMocGFyYW1zKSkge1xuICAgIHRleHQgPSBTdHJpbmcodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7a31cXFxcfWAsICdnJyksIFN0cmluZyh2KSk7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyB0LCBMT0NBTEVTLCBMT0NBTEVfS0VZUzogT2JqZWN0LmtleXMoTE9DQUxFUykgfTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgQUkgQ2hhdCBTZXJ2aWNlXG4vLyBPcGVuQUktY29tcGF0aWJsZSAvY2hhdC9jb21wbGV0aW9ucyBjbGllbnQgd2l0aCBBYm9ydENvbnRyb2xsZXIgc3VwcG9ydC5cblxuLyoqIERlZmF1bHQgc3lzdGVtIHByb21wdCBmb3IgS09TIGNvbnRleHQgKi9cbmNvbnN0IERFRkFVTFRfU1lTVEVNX1BST01QVCA9ICdZb3UgYXJlIGEga25vd2xlZGdlIG1hbmFnZW1lbnQgYXNzaXN0YW50IGhlbHBpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdGhlaXIgS09TIHZhdWx0LiBSZXNwb25kIGNvbmNpc2VseSBpbiB0aGUgdXNlclxcJ3MgbGFuZ3VhZ2UuJztcblxuY2xhc3MgQUlDaGF0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICB0aGlzLl9hZGRXZWxjb21lKCk7XG4gIH1cblxuICAvKiogQ3VycmVudCBsb2NhbGUgZnJvbSBzZXR0aW5ncyAqL1xuICBnZXQgX2xvY2FsZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy5sb2NhbGUpIHx8ICd6aC1jbic7XG4gIH1cblxuICAvKiogQ2hlY2sgaWYgQVBJIGNvbmZpZ3VyYXRpb24gaXMgcHJlc2VudCAqL1xuICBnZXQgaXNDb25maWd1cmVkKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLnNldHRpbmdzIHx8IHt9O1xuICAgIHJldHVybiAhIShzLmFpRW5kcG9pbnQgJiYgcy5haUFwaUtleSAmJiBzLmFpTW9kZWwpO1xuICB9XG5cbiAgLyoqIFJlc2V0IGNvbnZlcnNhdGlvbiAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5fYWRkV2VsY29tZSgpO1xuICB9XG5cbiAgLyoqIEV4cG9zZSBtZXNzYWdlIGhpc3RvcnkgKHJlYWQtb25seSBjb3B5KSAqL1xuICBnZXRIaXN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzLnNsaWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHVzZXIgbWVzc2FnZSBhbmQgc3RyZWFtIHRoZSBhc3Npc3RhbnQgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVXNlciBtZXNzYWdlIHRleHRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNhbGxiYWNrcyAtIHsgb25Ub2tlbih0ZXh0KSwgb25Eb25lKGZ1bGxUZXh0KSwgb25FcnJvcihlcnIpIH1cbiAgICogQHJldHVybnMge0Fib3J0U2lnbmFsfSAtIHNpZ25hbCB0byBhYm9ydCB0aGUgcmVxdWVzdFxuICAgKi9cbiAgc2VuZE1lc3NhZ2UoY29udGVudCwgY2FsbGJhY2tzID0ge30pIHtcbiAgICBjb25zdCB7IG9uVG9rZW4sIG9uRG9uZSwgb25FcnJvciB9ID0gY2FsbGJhY2tzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnNldHRpbmdzIHx8IHt9O1xuXG4gICAgaWYgKCF0aGlzLmlzQ29uZmlndXJlZCkge1xuICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IobmV3IEVycm9yKCdBSSBub3QgY29uZmlndXJlZCcpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEFkZCB1c2VyIG1lc3NhZ2VcbiAgICBjb25zdCB1c2VyTXNnID0geyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IFN0cmluZyhjb250ZW50KS50cmltKCkgfTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2godXNlck1zZyk7XG5cbiAgICAvLyBCdWlsZCBwYXlsb2FkXG4gICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gKHMuYWlTeXN0ZW1Qcm9tcHQgfHwgJycpLnRyaW0oKSB8fCBERUZBVUxUX1NZU1RFTV9QUk9NUFQ7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1vZGVsOiBzLmFpTW9kZWwsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7IHJvbGU6ICdzeXN0ZW0nLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgLi4udGhpcy5tZXNzYWdlcy5maWx0ZXIoKG0pID0+IG0ucm9sZSAhPT0gJ3N5c3RlbScpLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIGFib3J0IGNvbnRyb2xsZXJcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBzaWduYWwgPSB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG5cbiAgICAvLyBBY2N1bXVsYXRvciBmb3IgdGhlIGFzc2lzdGFudCByZXNwb25zZVxuICAgIGxldCBmdWxsUmVzcG9uc2UgPSAnJztcblxuICAgIC8vIFN0YXJ0IHRoZSByZXF1ZXN0XG4gICAgdGhpcy5fZG9TdHJlYW1SZXF1ZXN0KHMuYWlFbmRwb2ludCwgcy5haUFwaUtleSwgcGF5bG9hZCwgc2lnbmFsLCB7XG4gICAgICBvblRva2VuKHRleHQpIHtcbiAgICAgICAgZnVsbFJlc3BvbnNlICs9IHRleHQ7XG4gICAgICAgIGlmIChvblRva2VuKSBvblRva2VuKHRleHQpO1xuICAgICAgfSxcbiAgICAgIG9uRG9uZSgpIHtcbiAgICAgICAgaWYgKGZ1bGxSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiBmdWxsUmVzcG9uc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICBpZiAob25Eb25lKSBvbkRvbmUoZnVsbFJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yKGVycikge1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25hbDtcbiAgfVxuXG4gIC8qKiBBYm9ydCBhbiBpbi1mbGlnaHQgcmVxdWVzdCAqL1xuICBhYm9ydCgpIHtcbiAgICBpZiAodGhpcy5hYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFByaXZhdGUgXHUyNTAwXHUyNTAwXG5cbiAgX2FkZFdlbGNvbWUoKSB7XG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5fbG9jYWxlO1xuICAgIGNvbnN0IHdlbGNvbWVzID0ge1xuICAgICAgJ3poLWNuJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxuICAgICAgJ2VuJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcbiAgICAgICd6aC10dyc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcbiAgICB9O1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgIGNvbnRlbnQ6IHdlbGNvbWVzW2xvY2FsZV0gfHwgd2VsY29tZXNbJ3poLWNuJ10sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RyZWFtIGEgY2hhdCBjb21wbGV0aW9uIHJlcXVlc3QgdmlhIGZldGNoICsgUmVhZGFibGVTdHJlYW0uXG4gICAqL1xuICBhc3luYyBfZG9TdHJlYW1SZXF1ZXN0KGVuZHBvaW50LCBhcGlLZXksIHBheWxvYWQsIHNpZ25hbCwgY2FsbGJhY2tzKSB7XG4gICAgY29uc3QgeyBvblRva2VuLCBvbkRvbmUsIG9uRXJyb3IgfSA9IGNhbGxiYWNrcztcblxuICAgIC8vIERldGVybWluZSBmdWxsIFVSTFxuICAgIGxldCB1cmwgPSBTdHJpbmcoZW5kcG9pbnQgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIXVybCkgdXJsID0gJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnO1xuICAgIC8vIEFwcGVuZCAvY2hhdC9jb21wbGV0aW9ucyBpZiBub3QgYWxyZWFkeSBpbiBwYXRoXG4gICAgaWYgKCEvXFwvY2hhdFxcL2NvbXBsZXRpb25zJC9pLnRlc3QodXJsKSkge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy9jaGF0L2NvbXBsZXRpb25zJztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgU3RyaW5nKGFwaUtleSB8fCAnJykudHJpbSgpLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICBzaWduYWwsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgZXJyQm9keSA9ICcnO1xuICAgICAgICB0cnkgeyBlcnJCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyB9IGNhdGNoIHt9XG4gICAgICAgIGNvbnN0IGVyck1zZyA9ICdIVFRQICcgKyByZXNwb25zZS5zdGF0dXMgKyAoZXJyQm9keSA/ICc6ICcgKyBlcnJCb2R5LnNsaWNlKDAsIDIwMCkgOiAnJyk7XG4gICAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKG5ldyBFcnJvcihlcnJNc2cpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgICAgbGV0IGJ1ZmZlciA9ICcnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICBjb25zdCB0cmltbWVkID0gbGluZS50cmltKCk7XG4gICAgICAgICAgaWYgKCF0cmltbWVkIHx8IHRyaW1tZWQgPT09ICdkYXRhOiBbRE9ORV0nKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAoIXRyaW1tZWQuc3RhcnRzV2l0aCgnZGF0YTogJykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHRyaW1tZWQuc2xpY2UoNikpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBqc29uLmNob2ljZXMgJiYganNvbi5jaG9pY2VzWzBdICYmIGpzb24uY2hvaWNlc1swXS5kZWx0YTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkZWx0YSAmJiBkZWx0YS5jb250ZW50O1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZsdXNoIHJlbWFpbmluZyBidWZmZXJcbiAgICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBidWZmZXIudHJpbSgpO1xuICAgICAgICBpZiAodHJpbW1lZC5zdGFydHNXaXRoKCdkYXRhOiAnKSAmJiB0cmltbWVkICE9PSAnZGF0YTogW0RPTkVdJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0cmltbWVkLnNsaWNlKDYpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ganNvbi5jaG9pY2VzICYmIGpzb24uY2hvaWNlc1swXSAmJiBqc29uLmNob2ljZXNbMF0uZGVsdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVsdGEgJiYgZGVsdGEuY29udGVudDtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkRvbmUpIG9uRG9uZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgLy8gQWJvcnRlZCBieSB1c2VyLCBub3QgYW4gZXJyb3JcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEFJQ2hhdCwgREVGQVVMVF9TWVNURU1fUFJPTVBUIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHNoYXJlZCB1dGlsaXRpZXNcblxuLyoqXG4gKiBQYXJzZSBmcm9udG1hdHRlciBmcm9tIG1hcmtkb3duIGNvbnRlbnQuXG4gKiBSZXR1cm5zIHt9IGlmIG5vIHZhbGlkIGZyb250bWF0dGVyIGZvdW5kLlxuICovXG5mdW5jdGlvbiBwYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpIHtcbiAgY29uc3QgdGV4dCA9IFN0cmluZyhjb250ZW50IHx8ICcnKTtcbiAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eLS0tXFxuKFtcXHNcXFNdKj8pXFxuLS0tLyk7XG4gIGlmICghbWF0Y2gpIHJldHVybiB7fTtcblxuICBjb25zdCBvdXQgPSB7fTtcbiAgbWF0Y2hbMV0uc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IFN0cmluZyhsaW5lIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFpdGVtIHx8IGl0ZW0uc3RhcnRzV2l0aCgnIycpKSByZXR1cm47XG4gICAgY29uc3QgY29sb24gPSBpdGVtLmluZGV4T2YoJzonKTtcbiAgICBpZiAoY29sb24gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGtleSA9IGl0ZW0uc2xpY2UoMCwgY29sb24pLnRyaW0oKTtcbiAgICBsZXQgdmFsdWUgPSBpdGVtLnNsaWNlKGNvbG9uICsgMSkudHJpbSgpO1xuICAgIGlmICgha2V5KSByZXR1cm47XG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1snKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXScpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKS5zcGxpdCgnLCcpLm1hcCgocCkgPT4gcC50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgb3V0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0IGZyb250bWF0dGVyIHZhbHVlIGJ5IG11bHRpcGxlIHBvc3NpYmxlIGtleSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gZm1WYWx1ZShmcm9udG1hdHRlciwga2V5cywgZmFsbGJhY2spIHtcbiAgY29uc3QgZm0gPSBmcm9udG1hdHRlciAmJiB0eXBlb2YgZnJvbnRtYXR0ZXIgPT09ICdvYmplY3QnID8gZnJvbnRtYXR0ZXIgOiB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm0sIGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZm1ba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmpvaW4oJywgJyk7XG4gICAgICBjb25zdCB0ZXh0ID0gU3RyaW5nKHZhbHVlID8/ICcnKS50cmltKCk7XG4gICAgICBpZiAodGV4dCkgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxsYmFjaztcbn1cblxuLyoqXG4gKiBGb3JtYXQgZGF0ZSB0byBZWVlZLU1NLUREIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cihkYXRlKSB7XG4gIGNvbnN0IGQgPSBkYXRlIHx8IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGRheSA9IFN0cmluZyhkLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG59XG5cbi8qKlxuICogQnVpbGQgdGhlIEtPUyBkYWlseSBub3RlIHBhdGggZm9yIGEgZ2l2ZW4gZGF0ZS5cbiAqIEtPUyBjb252ZW50aW9uOiBQZXJpb2RpYy9ZWVlZL01NL1lZWVktTU0tREQubWRcbiAqL1xuZnVuY3Rpb24gZGFpbHlOb3RlUGF0aChkYXRlU3RyKSB7XG4gIGNvbnN0IHBhcnRzID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xuICByZXR1cm4gYFBlcmlvZGljLyR7cGFydHNbMF19LyR7cGFydHNbMV19LyR7ZGF0ZVN0cn0ubWRgO1xufVxuXG4vKipcbiAqIEdldCBmaWxlIGJ5IHBhdGggZnJvbSB2YXVsdCwgcmV0dXJuaW5nIG51bGwgaWYgbWlzc2luZy5cbiAqL1xuZnVuY3Rpb24gZ2V0RmlsZUJ5UGF0aCh2YXVsdCwgcGF0aCkge1xuICB0cnkge1xuICAgIHJldHVybiB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogU2FmZWx5IHJlYWQgZmlsZSB0ZXh0IGNvbnRlbnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlVGV4dCh2YXVsdCwgZmlsZSkge1xuICBpZiAoIXZhdWx0IHx8ICFmaWxlKSByZXR1cm4gJyc7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB2YXVsdC5jYWNoZWRSZWFkID09PSAnZnVuY3Rpb24nKSByZXR1cm4gU3RyaW5nKGF3YWl0IHZhdWx0LmNhY2hlZFJlYWQoZmlsZSkgfHwgJycpO1xuICAgIGlmICh0eXBlb2YgdmF1bHQucmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5yZWFkKGZpbGUpIHx8ICcnKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRhc2sgc3RhdHMgKG9wZW4vZG9uZS90b3RhbCkgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICovXG5mdW5jdGlvbiB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XG4gIGxldCBvcGVuID0gMDtcbiAgbGV0IGRvbmUgPSAwO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbWyB4WF1cXF1cXHMrLy50ZXN0KGxpbmUpKSB7XG4gICAgICBpZiAoL15cXHMqWy0qXVxccytcXFtbeFhdXFxdXFxzKy8udGVzdChsaW5lKSkgZG9uZSArPSAxO1xuICAgICAgZWxzZSBvcGVuICs9IDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBvcGVuLFxuICAgIGRvbmUsXG4gICAgdG90YWw6IG9wZW4gKyBkb25lLFxuICAgIGNvbXBsZXRpb25SYXRlOiBvcGVuICsgZG9uZSA+IDAgPyBNYXRoLnJvdW5kKChkb25lIC8gKG9wZW4gKyBkb25lKSkgKiAxMDApIDogMCxcbiAgfTtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYW5kIGNsZWFuIGEgZmlsZSBwYXRoLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXRoIHx8ICcnKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXFwvKy9nLCAnLycpLnJlcGxhY2UoL1xcLyskLywgJycpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIHN5c3RlbS9pbnRlcm5hbCBwYXRoIHRoYXQgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gc3RhdHMuXG4gKi9cbmZ1bmN0aW9uIGlzU3lzdGVtUGF0aChwYXRoKSB7XG4gIGNvbnN0IHZhbHVlID0gbm9ybWFsaXplUGF0aChwYXRoKTtcbiAgaWYgKC8oXnxcXC8pXFwuW14vXSsoXFwvfCQpLy50ZXN0KHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdfbG9ncy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdfbWV0YS8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCcwIEluYm94L19wcm9jZXNzZWQvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdub2RlX21vZHVsZXMvJykpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZUZyb250bWF0dGVyLFxuICBmbVZhbHVlLFxuICBmb3JtYXREYXRlU3RyLFxuICBkYWlseU5vdGVQYXRoLFxuICBnZXRGaWxlQnlQYXRoLFxuICByZWFkRmlsZVRleHQsXG4gIHRhc2tTdGF0c0Zyb21Db250ZW50LFxuICBub3JtYWxpemVQYXRoLFxuICBpc1N5c3RlbVBhdGgsXG59O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwcm9qZWN0IHNjYW5uaW5nIHNlcnZpY2VcblxuY29uc3QgeyBwYXJzZUZyb250bWF0dGVyLCBmbVZhbHVlLCByZWFkRmlsZVRleHQsIHRhc2tTdGF0c0Zyb21Db250ZW50IH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogU2NhbiAxIFByb2plY3RzLyBkaXJlY3RvcmllcyBhbmQgYnVpbGQgYSBsaXN0IG9mIHByb2plY3Qgb3ZlcnZpZXcgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0RmlsZXModmF1bHQpIHtcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IHZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgcmV0dXJuIGZpbGVzLmZpbHRlcigoZmlsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBTdHJpbmcoZmlsZS5wYXRoIHx8ICcnKTtcbiAgICAvLyBNYXRjaDogMSBQcm9qZWN0cy88cHJvamVjdC1kaXI+Lzxwcm9qZWN0LW5hbWU+Lm1kXG4gICAgLy8gRXhjbHVkZTogXHU5ODc5XHU3NkVFXHU2MDNCXHU4OUM4Lm1kLCBSRUFETUUubWRcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnMSBQcm9qZWN0cy8nKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLnNwbGl0KCcvJykubGVuZ3RoICE9PSAzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBhdGguZW5kc1dpdGgoJ1JFQURNRS5tZCcpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBhdGguZW5kc1dpdGgoJ1xcdUQ4M0RcXHVEQ0NEIFxcdTk4NzlcXHU3NkVFXFx1NjAzQlxcdTg5QzgubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBwcm9qZWN0IG1ldGFkYXRhIGZyb20gYSBmaWxlJ3MgY29udGVudCBhbmQgT2JzaWRpYW4gbWV0YWRhdGEgY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBtZXRhZGF0YUNhY2hlKSB7XG4gIGNvbnN0IGZtID0ge1xuICAgIC4uLnBhcnNlRnJvbnRtYXR0ZXIoY29udGVudCksXG4gIH07XG5cbiAgLy8gVHJ5IHRvIGdldCByaWNoZXIgZnJvbnRtYXR0ZXIgZnJvbSBtZXRhZGF0YSBjYWNoZVxuICB0cnkge1xuICAgIGNvbnN0IGNhY2hlID0gbWV0YWRhdGFDYWNoZSAmJiB0eXBlb2YgbWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSlcbiAgICAgIDogbnVsbDtcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGUuZnJvbnRtYXR0ZXIpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZm0sIGNhY2hlLmZyb250bWF0dGVyKTtcbiAgICB9XG4gIH0gY2F0Y2gge31cblxuICBjb25zdCBzdGF0dXMgPSBmbVZhbHVlKGZtLCBbJ3N0YXR1cycsICdTdGF0dXMnXSwgJ2FjdGl2ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGZtVmFsdWUoZm0sIFsncHJpb3JpdHknLCAnUHJpb3JpdHknXSwgJycpO1xuICBjb25zdCBpdGVyYXRpb24gPSBmbVZhbHVlKGZtLCBbJ2l0ZXJhdGlvbicsICdJdGVyYXRpb24nXSwgJycpO1xuICBjb25zdCBhcmVhID0gZm1WYWx1ZShmbSwgWydhcmVhJywgJ0FyZWEnLCAnZG9tYWluJywgJ0RvbWFpbiddLCAnJyk7XG4gIGNvbnN0IHRhZ3MgPSBBcnJheS5pc0FycmF5KGZtLnRhZ3MpID8gZm0udGFncyA6IFtdO1xuXG4gIC8vIENvbXB1dGUgdGFzayBwcm9ncmVzcyBmcm9tIHRoZSBwcm9qZWN0IGZpbGUgY29udGVudFxuICBjb25zdCB0YXNrcyA9IHRhc2tTdGF0c0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gIC8vIEdldCBwcm9qZWN0IHRpdGxlIGZyb20gZmlyc3QgaDEgb3IgZGlyZWN0b3J5IG5hbWVcbiAgY29uc3QgaGVhZGluZyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5tYXRjaCgvXiNcXHMrKC4rKSQvbSk7XG4gIGNvbnN0IHRpdGxlID0gaGVhZGluZyA/IGhlYWRpbmdbMV0udHJpbSgpIDogZmlsZS5iYXNlbmFtZSB8fCAnJztcblxuICByZXR1cm4ge1xuICAgIGZpbGUsXG4gICAgcGF0aDogZmlsZS5wYXRoLFxuICAgIHRpdGxlLFxuICAgIHN0YXR1cyxcbiAgICBwcmlvcml0eSxcbiAgICBpdGVyYXRpb24sXG4gICAgYXJlYSxcbiAgICB0YWdzLFxuICAgIHRhc2tzLFxuICAgIG10aW1lOiBmaWxlLnN0YXQ/Lm10aW1lIHx8IDAsXG4gICAgY3RpbWU6IGZpbGUuc3RhdD8uY3RpbWUgfHwgMCxcbiAgfTtcbn1cblxuLyoqXG4gKiBMaXN0IGFsbCBwcm9qZWN0cywgd2l0aCBvcHRpb25hbCBmaWx0ZXJpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYWN0aXZlT25seSBcdTIwMTQgb25seSByZXR1cm4gYWN0aXZlIHByb2plY3RzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3RQcm9qZWN0cyhhcHAsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gW107XG4gIGNvbnN0IGZpbGVzID0gZmluZFByb2plY3RGaWxlcyhhcHAudmF1bHQpO1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcGFyc2VQcm9qZWN0KGZpbGUsIGNvbnRlbnQsIGFwcC5tZXRhZGF0YUNhY2hlKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgLy8gU29ydDogYWN0aXZlIGZpcnN0LCB0aGVuIGJ5IHByaW9yaXR5LCB0aGVuIGJ5IG10aW1lXG4gIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhQWN0aXZlID0gYS5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGNvbnN0IGJBY3RpdmUgPSBiLnN0YXR1cyA9PT0gJ2FjdGl2ZSc7XG4gICAgaWYgKGFBY3RpdmUgIT09IGJBY3RpdmUpIHJldHVybiBhQWN0aXZlID8gLTEgOiAxO1xuXG4gICAgY29uc3QgcmFuayA9IChwKSA9PiB7XG4gICAgICBjb25zdCB2ID0gU3RyaW5nKHAgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodiA9PT0gJ3AxJyB8fCB2ID09PSAnaGlnaCcpIHJldHVybiAwO1xuICAgICAgaWYgKHYgPT09ICdwMicgfHwgdiA9PT0gJ21lZGl1bScpIHJldHVybiAxO1xuICAgICAgaWYgKHYgPT09ICdwMycgfHwgdiA9PT0gJ2xvdycpIHJldHVybiAyO1xuICAgICAgcmV0dXJuIDM7XG4gICAgfTtcbiAgICBjb25zdCBieVByaW9yaXR5ID0gcmFuayhhLnByaW9yaXR5KSAtIHJhbmsoYi5wcmlvcml0eSk7XG4gICAgaWYgKGJ5UHJpb3JpdHkgIT09IDApIHJldHVybiBieVByaW9yaXR5O1xuICAgIHJldHVybiBiLm10aW1lIC0gYS5tdGltZTtcbiAgfSk7XG5cbiAgaWYgKG9wdGlvbnMuYWN0aXZlT25seSkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuc3RhdHVzID09PSAnYWN0aXZlJyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG4vKipcbiAqIEdldCBlbmdpbmUgc3RhdGUgZnJvbSBfbWV0YS9haS9tZW1vcnkvU1RBVEUubWQgKGJ1bGxldC1saXN0IGZvcm1hdCkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEVuZ2luZVN0YXRlKGFwcCkge1xuICBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgdHJpYWdlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgY29tcGlsZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGxpbms6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBkYWlseTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIHByb2plY3Q6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBhcmNoaXZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgY2FudmFzOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgJ2tvcy1pbml0JzogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGxpZmU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgfTtcblxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKCdfbWV0YS9haS9tZW1vcnkvU1RBVEUubWQnKTtcbiAgaWYgKCFmaWxlKSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcblxuICAvLyBTVEFURS5tZCB1c2VzIHNlY3Rpb24tYmFzZWQgYnVsbGV0IGZvcm1hdDpcbiAgLy8gIyMgdHJpYWdlXG4gIC8vIC0gbGFzdF9ydW46IDIwMjYtMDYtMDlcbiAgLy8gLSBwZW5kaW5nOiAwXG4gIC8vIC0gc3VtbWFyeTogSW5ib3ggY2xlYXJlZFxuICBjb25zdCBlbmdpbmVzID0gT2JqZWN0LmtleXMoZGVmYXVsdFN0YXRlKTtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBjdXJyZW50RW5naW5lID0gbnVsbDtcblxuICBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGxpbmUubWF0Y2goL14jI1xccysoXFxTKylcXHMqJC8pO1xuICAgIGlmIChzZWN0aW9uICYmIGVuZ2luZXMuaW5jbHVkZXMoc2VjdGlvblsxXSkpIHtcbiAgICAgIGN1cnJlbnRFbmdpbmUgPSBzZWN0aW9uWzFdO1xuICAgICAgcGFyc2VkW2N1cnJlbnRFbmdpbmVdID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY3VycmVudEVuZ2luZSkgcmV0dXJuO1xuICAgIGNvbnN0IGt2ID0gbGluZS5tYXRjaCgvXi1cXHMrKFxcdyspOlxccyooLiopJC8pO1xuICAgIGlmIChrdikge1xuICAgICAgcGFyc2VkW2N1cnJlbnRFbmdpbmVdW2t2WzFdXSA9IGt2WzJdLnRyaW0oKSB8fCBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTm9ybWFsaXplIHRvIHsgbGFzdFJ1biwgc3RhdHVzLCBzdW1tYXJ5IH0gZm9yIGNvY2twaXQgY29uc3VtcHRpb25cbiAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgZW5naW5lcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgY29uc3QgcmF3ID0gcGFyc2VkW2VdIHx8IHt9O1xuICAgIHN0YXRlW2VdID0ge1xuICAgICAgbGFzdFJ1bjogcmF3Lmxhc3RfcnVuIHx8IHJhdy5sYXN0X2RhaWx5IHx8IG51bGwsXG4gICAgICBzdGF0dXM6IHJhdy5wZW5kaW5nICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoTnVtYmVyKHJhdy5wZW5kaW5nKSA9PT0gMCA/ICdkb25lJyA6ICdwZW5kaW5nJylcbiAgICAgICAgOiAncGVuZGluZycsXG4gICAgICBzdW1tYXJ5OiByYXcuc3VtbWFyeSB8fCBudWxsLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpbmRQcm9qZWN0RmlsZXMsXG4gIHBhcnNlUHJvamVjdCxcbiAgbGlzdFByb2plY3RzLFxuICBnZXRFbmdpbmVTdGF0ZSxcbn07XG4iLCAiXHVGRUZGLy8gS09TIENvY2twaXQgXHU5MjI1P2hvbWUgZGF0YSBlbmdpbmVcclxuXHJcbmNvbnN0IHtcclxuICBwYXJzZUZyb250bWF0dGVyLFxyXG4gIGZtVmFsdWUsXHJcbiAgZm9ybWF0RGF0ZVN0cixcclxuICBkYWlseU5vdGVQYXRoLFxyXG4gIGdldEZpbGVCeVBhdGgsXHJcbiAgcmVhZEZpbGVUZXh0LFxyXG4gIHRhc2tTdGF0c0Zyb21Db250ZW50LFxyXG4gIGlzU3lzdGVtUGF0aCxcclxuICBub3JtYWxpemVQYXRoLFxyXG59ID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5jb25zdCB7IGxpc3RQcm9qZWN0cywgZ2V0RW5naW5lU3RhdGUgfSA9IHJlcXVpcmUoJy4vcHJvamVjdC1zZXJ2aWNlJyk7XHJcblxyXG4vKipcclxuICogR2V0IHRvZGF5J3MgZGFpbHkgbm90ZSBzdGF0ZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5U3RhdGUoYXBwKSB7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBjb25zdCBwYXRoID0gZGFpbHlOb3RlUGF0aChkYXRlU3RyKTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsIHBhdGgpO1xyXG5cclxuICBpZiAoIWZpbGUpIHtcclxuICAgIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogZmFsc2UsIGZpbGU6IG51bGwsIHRhc2tzOiB7IG9wZW46MCxkb25lOjAsdG90YWw6MCxjb21wbGV0aW9uUmF0ZTowIH0sIHRhc2tJdGVtczogW10gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcclxuICBjb25zdCB0YXNrcyA9IHRhc2tTdGF0c0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XHJcbiAgY29uc3QgdGFza0l0ZW1zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbSA9IFN0cmluZyhsaW5lc1tpXSB8fCAnJykubWF0Y2goL14oXFxzKlstKl1cXHMrXFxbKShbIHhYXSkoXFxdXFxzKykoLispJC8pO1xyXG4gICAgaWYgKCFtKSBjb250aW51ZTtcclxuICAgIGNvbnN0IHRleHQgPSBtWzRdLnRyaW0oKTtcclxuICAgIGlmICghdGV4dCkgY29udGludWU7XHJcbiAgICB0YXNrSXRlbXMucHVzaCh7IGxpbmVJbmRleDogaSwgdGV4dCwgZG9uZTogL3gvaS50ZXN0KG1bMl0pIH0pO1xyXG4gICAgaWYgKHRhc2tJdGVtcy5sZW5ndGggPj0gMTIpIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgLy8gRXh0cmFjdCB0b2RheSdzIGZvY3VzIChmaXJzdCBoMiBvciBib2xkIGxpbmUgdW5kZXIgIyMgXFx1NEVDQVxcdTY1RTVcXHU4MDVBXFx1NzEyNilcclxuICBsZXQgZm9jdXMgPSAnJztcclxuICBjb25zdCBmb2N1c01hdGNoID0gY29udGVudC5tYXRjaCgvIyMgXFx1NEVDQVxcdTY1RTVcXHU4MDVBXFx1NzEyNlteI10qP1xcbigtIC4rKS8pO1xyXG4gIGlmIChmb2N1c01hdGNoKSBmb2N1cyA9IGZvY3VzTWF0Y2hbMV0ucmVwbGFjZSgvXi0gLywgJycpLnRyaW0oKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0ZVN0ciwgcGF0aCwgZXhpc3RzOiB0cnVlLCBmaWxlLCB0YXNrcywgdGFza0l0ZW1zLCBmb2N1cywgY29udGVudCB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgZmlsZXMgaW4gMCBJbmJveCAoZXhjbHVkaW5nIF9wcm9jZXNzZWQvKS5cclxuICogUmV0dXJucyBURmlsZSBvYmplY3RzICh3aXRoIC5wYXRoLCAuYmFzZW5hbWUsIC5zdGF0KS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluYm94RmlsZXModmF1bHQpIHtcclxuICBpZiAoIXZhdWx0IHx8IHR5cGVvZiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW107XHJcbiAgcmV0dXJuIHZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoKGYpID0+IHtcclxuICAgIGNvbnN0IHAgPSBTdHJpbmcoZi5wYXRoIHx8ICcnKTtcclxuICAgIHJldHVybiBwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykgJiYgIXAuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2NhbiB2YXVsdCBhbmQgY29tcHV0ZSBrbm93bGVkZ2UgZ2FyZGVuIHN0YXRpc3RpY3MuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cyhhcHApIHtcclxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0IHx8IHR5cGVvZiBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHsgdG90YWxOb3RlczogMCwgdG9kYXlOZXc6IDAsIHN0YXRzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZm9ybWF0RGF0ZVN0cigpO1xyXG4gIGxldCB0b2RheU5ldyA9IDA7XHJcbiAgY29uc3Qgc3RhdHMgPSB7IHJvb3Q6MCwgcHJvamVjdHM6MCwgYXJlYXM6MCwgcmVzb3VyY2VzOjAsIGluYm94OjAsIHBlcmlvZGljOjAsIHN5c3RlbTowIH07XHJcblxyXG4gIGZpbGVzLmZvckVhY2goKGYpID0+IHtcclxuICAgIGNvbnN0IHAgPSBTdHJpbmcoZi5wYXRoIHx8ICcnKTtcclxuICAgIGlmIChwLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHN0YXRzLnByb2plY3RzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzIgQXJlYXMvJykpIHN0YXRzLmFyZWFzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzMgUmVzb3VyY2VzLycpKSBzdGF0cy5yZXNvdXJjZXMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnMCBJbmJveC8nKSkgeyBpZiAoIXAuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSBzdGF0cy5pbmJveCArPSAxOyB9XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJ1BlcmlvZGljLycpKSBzdGF0cy5wZXJpb2RpYyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdfJykgfHwgcC5zdGFydHNXaXRoKCcuJykpIHN0YXRzLnN5c3RlbSArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCc0IEFyY2hpdmVzLycpKSB7fVxyXG4gICAgZWxzZSBzdGF0cy5yb290ICs9IDE7XHJcblxyXG4gICAgLy8gQ291bnQgdG9kYXktbmV3IGZpbGVzXHJcbiAgICBjb25zdCBjdGltZSA9IGYuc3RhdD8uY3RpbWUgPyBuZXcgRGF0ZShmLnN0YXQuY3RpbWUpIDogbnVsbDtcclxuICAgIGlmIChjdGltZSkge1xyXG4gICAgICBjb25zdCBjZCA9IGZvcm1hdERhdGVTdHIoY3RpbWUpO1xyXG4gICAgICBpZiAoY2QgPT09IHRvZGF5KSB0b2RheU5ldyArPSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyB0b3RhbE5vdGVzOiBmaWxlcy5sZW5ndGgsIHRvZGF5TmV3LCBzdGF0cyB9O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJlY2VudCBtb2RpZmllZCBmaWxlcyAodG9wIDEwKS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFJlY2VudEFjdGl2aXR5KHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKClcclxuICAgIC5maWx0ZXIoKGYpID0+ICFpc1N5c3RlbVBhdGgoZi5wYXRoKSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiAoYi5zdGF0Py5tdGltZSB8fCAwKSAtIChhLnN0YXQ/Lm10aW1lIHx8IDApKVxyXG4gICAgLnNsaWNlKDAsIDI0KVxyXG4gICAgLm1hcCgoZikgPT4gKHsgcGF0aDogZi5wYXRoLCB0aXRsZTogZi5iYXNlbmFtZSB8fCAnJywgbXRpbWU6IGYuc3RhdD8ubXRpbWUgfHwgMCB9KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgaG90IGNvbnRleHQgZnJvbSBfbWV0YS9ob3QubWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEhvdENvbnRleHQoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgJ19tZXRhL2hvdC5tZCcpO1xyXG4gIGlmICghZmlsZSkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcclxuICBjb25zdCBlbnRyaWVzID0gW107XHJcbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pXFxzKltcXHUyMDE0XFx1MjAxM1xcLV1cXHMqKC4rKSQvKTtcclxuICAgIGlmIChtKSBlbnRyaWVzLnB1c2goeyBkYXRlOiBtWzFdLCBzdW1tYXJ5OiBtWzJdLnRyaW0oKSB9KTtcclxuICB9KTtcclxuICByZXR1cm4gZW50cmllcy5zbGljZSgwLCA1KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdGhlIGN1cnJlbnQgd2VlaydzIGRhaWx5IG5vdGVzIGZvciB3ZWVrbHkgcmVjb3JkIGJhciBjaGFydC5cclxuICogUmV0dXJucyA3IGNlbGxzIChNb24tU3VuKSB3aXRoIGNhcHR1cmUgY291bnQgcGVyIGRheS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlZWtseVJlY29yZHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xyXG5cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheU9mV2VlayA9IG5vdy5nZXREYXkoKTsgLy8gMD1TdW4sIDE9TW9uIC4uLlxyXG4gIGNvbnN0IG1vbmRheU9mZnNldCA9IGRheU9mV2VlayA9PT0gMCA/IC02IDogMSAtIGRheU9mV2VlaztcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XHJcbiAgICBkLnNldERhdGUobm93LmdldERhdGUoKSArIG1vbmRheU9mZnNldCArIGkpO1xyXG4gICAgY29uc3QgZHMgPSBmb3JtYXREYXRlU3RyKGQpO1xyXG4gICAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZHMpO1xyXG4gICAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgICAgIC8vIENvdW50IG5vbi10YXNrLCBub24taGVhZGluZywgbm9uLWVtcHR5IGxpbmVzIGFzIFwiY2FwdHVyZXNcIlxyXG4gICAgICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gICAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGxpbmUudHJpbSgpO1xyXG4gICAgICAgIGlmICghdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXi0tLSQvLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBpZiAoL14jezEsNn1cXHMrLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbWyB4WF1cXF0vLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBpZiAoL14oY3JlYXRlZHx1cGRhdGVkfHRhZ3N8c3RhdHVzfHByaW9yaXR5KS9pLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdlZWtkYXlzID0gWydcXHU2NUU1JywnXFx1NEUwMCcsJ1xcdTRFOEMnLCdcXHU0RTA5JywnXFx1NTZEQicsJ1xcdTRFOTQnLCdcXHU1MTZEJ107XHJcbiAgICBjZWxscy5wdXNoKHsgZGF0ZTogZHMsIGNvdW50LCB3ZWVrZGF5OiB3ZWVrZGF5c1tpXSwgaXNUb2RheTogZHMgPT09IGZvcm1hdERhdGVTdHIobm93KSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGNlbGxzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRUb2RheVN0YXRlLFxyXG4gIGdldEluYm94RmlsZXMsXHJcbiAgZ2V0RGFzaGJvYXJkU3RhdHMsXHJcbiAgZ2V0UmVjZW50QWN0aXZpdHksXHJcbiAgZ2V0SG90Q29udGV4dCxcclxuICBnZXRXZWVrbHlSZWNvcmRzLFxyXG4gIGdldEVuZ2luZVN0YXRlLFxyXG4gIGxpc3RQcm9qZWN0cyxcclxufTtcclxuIiwgIi8vIEtPUyBDb2NrcGl0IHY5IFx1MjAxNCBDU1MtZHJpdmVuIG5hdHVyYWwgcmVmbG93XG4vLyArIFNldHRpbmdzLWF3YXJlICsgbG9jYWxlIGkxOG4gKyBBSSBDaGF0IChPcGVuQUktY29tcGF0aWJsZSlcblxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0IH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuY29uc3QgeyBBSUNoYXQgfSA9IHJlcXVpcmUoJy4vYWktY2hhdCcpO1xuY29uc3Qge1xuICBnZXRUb2RheVN0YXRlLCBnZXRJbmJveEZpbGVzLCBnZXREYXNoYm9hcmRTdGF0cyxcbiAgZ2V0UmVjZW50QWN0aXZpdHksIGdldEhvdENvbnRleHQsIGdldFdlZWtseVJlY29yZHMsXG4gIGdldEVuZ2luZVN0YXRlLCBsaXN0UHJvamVjdHMsXG59ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcblxuY29uc3QgVklFV19UWVBFX0NPQ0tQSVQgPSAna29zLWNvY2twaXQtdmlldyc7XG5cbmNsYXNzIENvY2twaXRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZWFmLCBwbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmFpQ2hhdCA9IG51bGw7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpIHsgcmV0dXJuIFZJRVdfVFlQRV9DT0NLUElUOyB9XG4gIGdldERpc3BsYXlUZXh0KCkgeyByZXR1cm4gJ0tPUyBDb2NrcGl0JzsgfVxuICBnZXRJY29uKCkgeyByZXR1cm4gJ2dhdWdlJzsgfVxuXG4gIGdldCBzZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbi5zZXR0aW5ncyA6IG51bGw7XG4gIH1cblxuICBfdChrZXksIHBhcmFtcykge1xuICAgIHJldHVybiB0KGtleSwgdGhpcy5zZXR0aW5ncz8ubG9jYWxlIHx8ICd6aC1jbicsIHBhcmFtcyk7XG4gIH1cblxuICBnZXQgX2RheU5hbWVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLl90KCdkYXkuc3VuJyksIHRoaXMuX3QoJ2RheS5tb24nKSwgdGhpcy5fdCgnZGF5LnR1ZScpLFxuICAgICAgdGhpcy5fdCgnZGF5LndlZCcpLCB0aGlzLl90KCdkYXkudGh1JyksIHRoaXMuX3QoJ2RheS5mcmknKSxcbiAgICAgIHRoaXMuX3QoJ2RheS5zYXQnKSxcbiAgICBdO1xuICB9XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIHN1cGVyLm9ubG9hZCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gICAgdGhpcy5jb250ZW50RWwuYWRkQ2xhc3MoJ2tvcy1jb2NrcGl0LWNvbnRhaW5lcicpO1xuICAgIHRoaXMucmVuZGVyTG9hZGluZygpO1xuICAgIGF3YWl0IHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVuZGVyTG9hZGluZygpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5pbm5lckhUTUwgPVxuICAgICAgJzxkaXYgY2xhc3M9XCJrb3MtY29ja3BpdC1sb2FkaW5nXCI+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwia29zLWNvY2twaXQtbG9hZGluZy1zcGlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICc8c3Bhbj4nICsgdGhpcy5fdCgnYXBwLmxvYWRpbmcnKSArICc8L3NwYW4+JyArXG4gICAgICAnPC9kaXY+JztcbiAgfVxuXG4gIHJlbmRlckVycm9yKG1zZykge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcbiAgICBjb25zdCBlcnJCb3ggPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWRiJyk7XG4gICAgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ2FwcC5lcnJvcicpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIGlmIChtc2cpIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcobXNnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICBjb25zdCByZXRyeSA9IGVyckJveC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWN0aW9uLWJ0bicsIHRleHQ6ICdcXHUyMUJCIFJldHJ5JyB9KTtcbiAgICByZXRyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW5kZXJMb2FkaW5nKCk7IHRoaXMucmVmcmVzaCgpOyB9KTtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmNvbGxlY3REYXRhKHRoaXMuYXBwKTtcbiAgICAgIHRoaXMucmVuZGVyRGFzaGJvYXJkKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0tPUyBDb2NrcGl0IHJlZnJlc2ggZXJyb3I6JywgZSk7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKGU/Lm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbGxlY3REYXRhKGFwcCkge1xuICAgIGNvbnN0IFt0b2RheSwgcHJvamVjdHMsIHN0YXRzLCByZWNlbnQsIGhvdCwgd2Vla2x5LCBlbmdpbmVzLCBpbmJveEZpbGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldFRvZGF5U3RhdGUoYXBwKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGxpc3RQcm9qZWN0cyhhcHAsIHsgYWN0aXZlT25seTogdHJ1ZSB9KS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXREYXNoYm9hcmRTdGF0cyhhcHApLmNhdGNoKCgpID0+ICh7IHRvdGFsTm90ZXM6MCwgdG9kYXlOZXc6MCwgc3RhdHM6e30gfSkpLFxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldFJlY2VudEFjdGl2aXR5KGFwcC52YXVsdCkpLFxuICAgICAgZ2V0SG90Q29udGV4dChhcHApLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldFdlZWtseVJlY29yZHMoYXBwKS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXRFbmdpbmVTdGF0ZShhcHApLmNhdGNoKCgpID0+ICh7fSkpLFxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEluYm94RmlsZXMoYXBwLnZhdWx0KSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlcyB9O1xuICB9XG5cbiAgcmVuZGVyRGFzaGJvYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBtYWluID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYicgfSk7XG5cbiAgICB0aGlzLnJlbmRlckhlYWRlcihtYWluLCBkYXRhKTtcbiAgICB0aGlzLnJlbmRlclF1aWNrQWN0aW9ucyhtYWluKTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VG9kYXlUYXNrcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVyVG9kYXlUYXNrcyhtYWluLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlIHx8IHRoaXMuc2V0dGluZ3M/LnNob3dSZWNlbnRBY3Rpdml0eSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucmVuZGVyVHdvQ29sdW1ucyhtYWluLCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dOYXYgIT09IGZhbHNlKSB0aGlzLnJlbmRlck5hdihtYWluKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd0luYm94RmlsZXMgIT09IGZhbHNlKSB0aGlzLnJlbmRlckluYm94RmlsZXMobWFpbiwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dQcm9qZWN0Q2FyZHMgIT09IGZhbHNlKSB0aGlzLnJlbmRlclByb2plY3RzKG1haW4sIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93RW5naW5lU3RhdGUgIT09IGZhbHNlKSB0aGlzLnJlbmRlckVuZ2luZVN0YXRlKG1haW4sIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93V2Vla2x5Q2hhcnQgIT09IGZhbHNlKSB0aGlzLnJlbmRlcldlZWtseUNoYXJ0KG1haW4sIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93QWlDaGF0ICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJBSUNoYXQobWFpbik7XG4gIH1cblxuICByZW5kZXJIZWFkZXIoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgaCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaGVhZGVyJyB9KTtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCBkYXlOYW1lcyA9IHRoaXMuX2RheU5hbWVzO1xuICAgIGguY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIHRleHQ6ICdcXHVEODNEXFx1RENDNSAnICsgbm93LmZvcm1hdCh0aGlzLl90KCdoZWFkZXIuZGF0ZUZvcm1hdCcpKSArICcgXFx1NjYxRlxcdTY3MUYnICsgZGF5TmFtZXNbbm93LmRheSgpXSxcbiAgICAgIGNsczogJ2tvcy1kYi1oZWFkZXItZGF0ZScsXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGRhdGEudG9kYXk/LmV4aXN0c1xuICAgICAgPyB0aGlzLl90KCdoZWFkZXIubm90ZUNyZWF0ZWQnKVxuICAgICAgOiB0aGlzLl90KCdoZWFkZXIubm90ZU5vdENyZWF0ZWQnKTtcbiAgICBjb25zdCBmb2N1c1ZhbCA9IGRhdGEudG9kYXk/LmZvY3VzIHx8ICcnO1xuICAgIGguY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ2hlYWRlci5ub3RlU3RhdHVzJywgeyBzdGF0dXM6IHN0YXR1c1RleHQgfSlcbiAgICAgICAgKyAnICBcXHUwMEI3ICAnXG4gICAgICAgICsgdGhpcy5fdCgnaGVhZGVyLnRvZGF5Rm9jdXMnLCB7IGZvY3VzOiBmb2N1c1ZhbCB8fCB0aGlzLl90KCdoZWFkZXIuZm9jdXNOb3RTZXQnKSB9KSxcbiAgICAgIGNsczogJ2tvcy1kYi1oZWFkZXItc3RhdHVzJyxcbiAgICB9KTtcbiAgICBjb25zdCByZWZyZXNoQnRuID0gaC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItcmVmcmVzaC1idG4nIH0pO1xuICAgIHJlZnJlc2hCdG4uaW5uZXJIVE1MID0gJ1xcdTIxQkInO1xuICAgIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XG4gIH1cblxuICByZW5kZXJRdWlja0FjdGlvbnMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcWEgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFjdGlvbnMnIH0pO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQzUgJyArIHRoaXMuX3QoJ2FjdGlvbi5wbGFuVG9kYXknKSwgY21kOiAnZGFpbHktb3BlbicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENERCAnICsgdGhpcy5fdCgnYWN0aW9uLmNhcHR1cmUnKSwgY21kOiAnY2FwdHVyZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1REQwNCAnICsgdGhpcy5fdCgnYWN0aW9uLmRheVJldmlldycpLCBjbWQ6ICdkYXktcmV2aWV3JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0NCICcgKyB0aGlzLl90KCdhY3Rpb24ubmV3UHJvamVjdCcpLCBjbWQ6ICdwcm9qZWN0JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEREMyXFx1RkUwRiAnICsgdGhpcy5fdCgnYWN0aW9uLnRyaWFnZScpLCBjbWQ6ICd0cmlhZ2UnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1MjY5OVxcdUZFMEYgJyArIHRoaXMuX3QoJ2FjdGlvbi5zZXR0aW5ncycpLCBjbWQ6ICdzZXR0aW5ncycgfSxcbiAgICBdO1xuICAgIGFjdGlvbnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gcWEuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFjdGlvbi1idG4nIH0pO1xuICAgICAgYnRuLnRleHRDb250ZW50ID0gYS5sYWJlbDtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5oYW5kbGVRdWlja0FjdGlvbihhLmNtZCk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUXVpY2tBY3Rpb24oY21kKSB7XG4gICAgc3dpdGNoIChjbWQpIHtcbiAgICAgIGNhc2UgJ2RhaWx5LW9wZW4nOiB7XG4gICAgICAgIGNvbnN0IHsgZGFpbHlOb3RlUGF0aCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGRhaWx5Tm90ZVBhdGgobW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykpLCAnJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2V0dGluZ3MnOiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB0aGlzLmFwcC5zZXR0aW5nO1xuICAgICAgICBpZiAoc2V0dGluZykgeyBzZXR0aW5nLm9wZW4oKTsgc2V0dGluZy5vcGVuVGFiQnlJZCgna29zLWNvY2twaXQnKTsgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJ19tZXRhL2hvdC5tZCcsICcnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgVG9kYXkncyBUYXNrIFBhbmVsIFx1MjUwMFx1MjUwMFxuICByZW5kZXJUb2RheVRhc2tzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLXRvZGF5LXRhc2tzJyB9KTtcbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1oZWFkZXInIH0pO1xuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1MjcwNSAnICsgdGhpcy5fdCgndGFzay50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgaWYgKGRhdGEudG9kYXk/LnRhc2tzKSB7XG4gICAgICBjb25zdCB7IGRvbmUsIHRvdGFsLCBjb21wbGV0aW9uUmF0ZSB9ID0gZGF0YS50b2RheS50YXNrcztcbiAgICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgdGV4dDogdGhpcy5fdCgndGFzay5wcm9ncmVzcycsIHsgZG9uZSwgdG90YWwsIHJhdGU6IGNvbXBsZXRpb25SYXRlIH0pLFxuICAgICAgICBjbHM6ICdrb3MtZGItdG9kYXktY291bnQgJyArICh0b3RhbCA+IDAgJiYgY29tcGxldGlvblJhdGUgPj0gMTAwID8gJ2tvcy1kYi10b2RheS1kb25lJyA6ICcnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItdG9kYXktbGlzdCcgfSk7XG4gICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhUYXNrSXRlbXMgfHwgMTI7XG4gICAgY29uc3QgaXRlbXMgPSAoZGF0YS50b2RheT8udGFza0l0ZW1zIHx8IFtdKS5zbGljZSgwLCBtYXhJdGVtcyk7XG4gICAgaWYgKCFkYXRhLnRvZGF5Py5leGlzdHMpIHtcbiAgICAgIGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgndGFzay5kYWlseU1pc3NpbmcnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCd0YXNrLm5vbmUnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1pdGVtJyArIChpdGVtLmRvbmUgPyAnIGtvcy1kYi10b2RheS1pdGVtLWRvbmUnIDogJycpIH0pO1xuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1kYi10b2RheS1jYicgfSkudGV4dENvbnRlbnQgPSBpdGVtLmRvbmUgPyAnXFx1MjYxMScgOiAnXFx1MjYxMCc7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogaXRlbS50ZXh0LCBjbHM6ICdrb3MtZGItdG9kYXktdGV4dCcgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQcm9qZWN0cyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDQiAnICsgdGhpcy5fdCgncHJvamVjdC50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgZ3JpZCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtZ3JpZCcgfSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzIHx8IFtdO1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgncHJvamVjdC5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC1jYXJkJyB9KTtcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQocHJvai5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgY29uc3QgdGl0bGVSb3cgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LXRpdGxlLXJvdycgfSk7XG4gICAgICB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogcHJvai50aXRsZSB8fCAnVW5uYW1lZCcsIGNsczogJ2tvcy1kYi1wcm9qZWN0LXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IHAgPSBTdHJpbmcocHJvai5wcmlvcml0eSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChwKSB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogcHJvai5wcmlvcml0eSwgY2xzOiAna29zLWRiLWJhZGdlIGtvcy1kYi1iYWRnZS0nICsgcCB9KTtcbiAgICAgIGNvbnN0IHJhdGUgPSBwcm9qLnRhc2tzPy5jb21wbGV0aW9uUmF0ZSB8fCAwO1xuICAgICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvZ3Jlc3MnLCBhdHRyOiB7IHN0eWxlOiAnLS1wcm9ncmVzczonICsgcmF0ZSArICclJyB9IH0pO1xuICAgICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAocHJvai50YXNrcz8uZG9uZSB8fCAwKSArICcvJyArIChwcm9qLnRhc2tzPy50b3RhbCB8fCAwKSwgY2xzOiAna29zLWRiLXByb2dyZXNzLWxhYmVsJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclR3b0NvbHVtbnMoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgY29scyA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29scycgfSk7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gY29scy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29sJyB9KTtcbiAgICAgIGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0NBICcgKyB0aGlzLl90KCdzdGF0cy50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCBtZXRyaWNzID0gW1xuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy50b3RhbE5vdGVzJyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwKSB9LFxuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy5hY3RpdmVQcm9qZWN0cycpLCB2YWx1ZTogU3RyaW5nKChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGgpIH0sXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvZGF5TmV3JyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG9kYXlOZXcgfHwgMCkgfSxcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMucGVuZGluZ1RyaWFnZScpLCB2YWx1ZTogU3RyaW5nKChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aCkgfSxcbiAgICAgIF07XG4gICAgICBjb25zdCBncmlkID0gbGVmdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbWV0cmljcycgfSk7XG4gICAgICBtZXRyaWNzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW1ldHJpYycgfSk7XG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLW1ldHJpYy12YWwnIH0pO1xuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IG0ubGFiZWwsIGNsczogJ2tvcy1kYi1tZXRyaWMtbGFiZWwnIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YS5zdGF0cz8uc3RhdHMpIHtcbiAgICAgICAgY29uc3QgcyA9IGRhdGEuc3RhdHMuc3RhdHM7XG4gICAgICAgIGNvbnN0IHN1YlN0YXRzID0gW1xuICAgICAgICAgIHsgbGFiZWw6ICdQcm9qZWN0cycsIHZhbHVlOiBTdHJpbmcocy5wcm9qZWN0cyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdBcmVhcycsIHZhbHVlOiBTdHJpbmcocy5hcmVhcyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdSZXNvdXJjZXMnLCB2YWx1ZTogU3RyaW5nKHMucmVzb3VyY2VzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1BlcmlvZGljJywgdmFsdWU6IFN0cmluZyhzLnBlcmlvZGljIHx8IDApIH0sXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHN1YkdyaWQgPSBsZWZ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zdWItbWV0cmljcycgfSk7XG4gICAgICAgIHN1YlN0YXRzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3ViR3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYycgfSk7XG4gICAgICAgICAgaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWMtdmFsJyB9KTtcbiAgICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnICcgKyBtLmxhYmVsLCBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYy1sYWJlbCcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93UmVjZW50QWN0aXZpdHkgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCByaWdodCA9IGNvbHMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbCcgfSk7XG4gICAgICByaWdodC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdUREMDQgJyArIHRoaXMuX3QoJ3JlY2VudC50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCByZWNlbnQgPSBkYXRhLnJlY2VudCB8fCBbXTtcbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gdGhpcy5zZXR0aW5ncz8ubWF4UmVjZW50SXRlbXMgfHwgODtcbiAgICAgIGNvbnN0IGxpc3QgPSByaWdodC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcmVjZW50LWxpc3QnIH0pO1xuICAgICAgaWYgKHJlY2VudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdyZWNlbnQuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY2VudC5zbGljZSgwLCBtYXhJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXJlY2VudC1pdGVtJyB9KTtcbiAgICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IG1vbWVudChpdGVtLm10aW1lKS5mb3JtYXQoJ01NLUREIEhIOm1tJyksIGNsczogJ2tvcy1kYi1yZWNlbnQtdGltZScgfSk7XG4gICAgICAgICAgY29uc3QgbGluayA9IHJvdy5jcmVhdGVFbCgnYScsIHsgdGV4dDogJyAgJyArIGl0ZW0udGl0bGUsIGNsczogJ2tvcy1kYi1yZWNlbnQtbGluaycgfSk7XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck5hdihjb250YWluZXIpIHtcbiAgICBjb25zdCBuYXYgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW5hdicgfSk7XG4gICAgbmF2LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNDXFx1REZFMCAnICsgdGhpcy5fdCgnbmF2LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBsaW5rcyA9IG5hdi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbmF2LWxpbmtzJyB9KTtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNDXFx1REZFMCBcXHU3NTFGXFx1NkQzQicsIHBhdGg6ICcyIEFyZWFzL1xcdTc1MUZcXHU2RDNCL1xcdTc1MUZcXHU2RDNCJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0Q2IFxcdTVCNjZcXHU0RTYwJywgcGF0aDogJzIgQXJlYXMvXFx1NUI2NlxcdTRFNjAvXFx1NUI2NlxcdTRFNjAnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQkMgXFx1NURFNVxcdTRGNUMnLCBwYXRoOiAnMiBBcmVhcy9cXHU1REU1XFx1NEY1Qy9cXHU1REU1XFx1NEY1QycgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENENiBcXHU2MDNCXFx1N0QyMlxcdTVGMTUnLCBwYXRoOiAnX21ldGEvXFx1RDgzRFxcdUREMTcgXFx1NzdFNVxcdThCQzZcXHU1MTczXFx1ODA1NC9JbmRleC9faW5kZXgtemgtY24nIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzRcXHVGRTBGIFxcdTVGNTJcXHU2ODYzJywgcGF0aDogJzQgQXJjaGl2ZXMnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRTUgSW5ib3gnLCBwYXRoOiAnMCBJbmJveCcgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiBIb3QgQ2FjaGUnLCBwYXRoOiAnX21ldGEvaG90JyB9LFxuICAgIF07XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgYSA9IGxpbmtzLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiBpdGVtLmxhYmVsLCBjbHM6ICdrb3MtZGItbmF2LWxpbmsnIH0pO1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgSW5ib3ggRmlsZSBMaXN0IFx1MjUwMFx1MjUwMFxuICByZW5kZXJJbmJveEZpbGVzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IGZpbGVzID0gZGF0YS5pbmJveEZpbGVzIHx8IFtdO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heEluYm94SXRlbXMgfHwgNjtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uIGtvcy1kYi1pbmJveCcgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDRTUgJyArIHRoaXMuX3QoJ2luYm94LnRpdGxlJywgeyBjb3VudDogZmlsZXMubGVuZ3RoIH0pLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LWxpc3QnIH0pO1xuICAgIGZpbGVzLnNsaWNlKDAsIG1heEl0ZW1zKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1pdGVtJyB9KTtcbiAgICAgIGNvbnN0IG5hbWUgPSByb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGZpbGUuYmFzZW5hbWUgfHwgZmlsZS5wYXRoLCBjbHM6ICdrb3MtZGItaW5ib3gtbGluaycgfSk7XG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGZpbGUucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgIGlmIChmaWxlLnN0YXQ/Lm10aW1lKSB7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbW9tZW50KGZpbGUuc3RhdC5tdGltZSkuZm9ybWF0KCdNTS1ERCBISDptbScpLCBjbHM6ICdrb3MtZGItaW5ib3gtdGltZScgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IG1heEl0ZW1zKSB7XG4gICAgICBjb25zdCBtb3JlID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaW5ib3gtbW9yZScgfSk7XG4gICAgICBtb3JlLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0aGlzLl90KCdpbmJveC5tb3JlJywgeyBjb3VudDogZmlsZXMubGVuZ3RoIC0gbWF4SXRlbXMgfSksIGNsczogJ2tvcy1kYi1pbmJveC1saW5rJyB9KVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJzAgSW5ib3gnLCAnJywgdHJ1ZSk7IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBFbmdpbmUgU3RhdGUgRGlzcGxheSBcdTI1MDBcdTI1MDBcbiAgcmVuZGVyRW5naW5lU3RhdGUoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgZW5naW5lcyA9IGRhdGEuZW5naW5lcyB8fCB7fTtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnZW5naW5lLnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBncmlkID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItZW5naW5lLWdyaWQnIH0pO1xuICAgIGNvbnN0IHByaW1hcnlFbmdpbmVzID0gWyd0cmlhZ2UnLCAnY29tcGlsZScsICdsaW5rJywgJ2RhaWx5JywgJ3Byb2plY3QnLCAnYXJjaGl2ZSddO1xuICAgIGNvbnN0IGhhc0RhdGEgPSBwcmltYXJ5RW5naW5lcy5zb21lKChlKSA9PiBlbmdpbmVzW2VdPy5sYXN0UnVuIHx8IGVuZ2luZXNbZV0/LnN1bW1hcnkpO1xuICAgIGlmICghaGFzRGF0YSkge1xuICAgICAgZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdlbmdpbmUuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJpbWFyeUVuZ2luZXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlbmcgPSBlbmdpbmVzW2tleV0gfHwge307XG4gICAgICBjb25zdCBjaGlwID0gZ3JpZC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdrb3MtZGItZW5naW5lLWNoaXAnXG4gICAgICAgICAgKyAoZW5nLnN0YXR1cyA9PT0gJ2RvbmUnID8gJyBrb3MtZGItZW5naW5lLWRvbmUnIDogJycpXG4gICAgICAgICAgKyAoZW5nLmxhc3RSdW4gPyAnJyA6ICcga29zLWRiLWVuZ2luZS1pZGxlJyksXG4gICAgICB9KTtcbiAgICAgIGNoaXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGtleSwgY2xzOiAna29zLWRiLWVuZ2luZS1uYW1lJyB9KTtcbiAgICAgIGlmIChlbmcubGFzdFJ1bikgY2hpcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJyAnICsgZW5nLmxhc3RSdW4uc2xpY2UoNSksIGNsczogJ2tvcy1kYi1lbmdpbmUtZGF0ZScgfSk7XG4gICAgICBpZiAoZW5nLnN1bW1hcnkpIGNoaXAuc2V0QXR0cigndGl0bGUnLCBlbmcuc3VtbWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDOCAnICsgdGhpcy5fdCgnd2Vla2x5LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBjaGFydCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXJ0JyB9KTtcbiAgICBjb25zdCBjZWxscyA9IGRhdGEud2Vla2x5IHx8IFtdO1xuICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4uY2VsbHMubWFwKChjKSA9PiBjLmNvdW50KSk7XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hhcnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnd2Vla2x5LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNvbCA9IGNoYXJ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1jb2wnIH0pO1xuICAgICAgaWYgKGNlbGwuaXNUb2RheSkgY29sLmFkZENsYXNzKCdrb3MtZGItY2hhcnQtdG9kYXknKTtcbiAgICAgIGNvbnN0IGJhckhlaWdodCA9IE1hdGgubWF4KDQsIChjZWxsLmNvdW50IC8gbWF4Q291bnQpICogNjApO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1iYXInLCBhdHRyOiB7IHN0eWxlOiAnaGVpZ2h0OicgKyBiYXJIZWlnaHQgKyAncHgnIH0gfSlcbiAgICAgICAgIC5zZXRBdHRyKCd0aXRsZScsIHRoaXMuX3QoJ3dlZWtseS5iYXJUb29sdGlwJywgeyBkYXRlOiBjZWxsLmRhdGUsIGNvdW50OiBjZWxsLmNvdW50IH0pKTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcoY2VsbC5jb3VudCksIGNsczogJ2tvcy1kYi1jaGFydC12YWwnIH0pO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IGNlbGwud2Vla2RheSwgY2xzOiAna29zLWRiLWNoYXJ0LWRheScgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgQUkgQ2hhdCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgcmVuZGVyQUlDaGF0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLWFpJyB9KTtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1oZWFkZXInIH0pO1xuICAgIGhlYWRlclJvdy5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRVxcdUREMTYgJyArIHRoaXMuX3QoJ2FpLnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBjbGVhckJ0biA9IGhlYWRlclJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktY2xlYXInLCB0ZXh0OiB0aGlzLl90KCdhaS5jbGVhckJ0bicpIH0pO1xuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLl9jbGVhckNoYXQoKTsgfSk7XG5cbiAgICAvLyBNZXNzYWdlIGNvbnRhaW5lclxuICAgIGNvbnN0IG1zZ0NvbnRhaW5lciA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZ3MnIH0pO1xuXG4gICAgLy8gSW5wdXQgcm93XG4gICAgY29uc3QgaW5wdXRSb3cgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1pbnB1dC1yb3cnIH0pO1xuICAgIGNvbnN0IGlucHV0ID0gaW5wdXRSb3cuY3JlYXRlRWwoJ2lucHV0Jywge1xuICAgICAgY2xzOiAna29zLWRiLWFpLWlucHV0JyxcbiAgICAgIGF0dHI6IHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogdGhpcy5fdCgnYWkucGxhY2Vob2xkZXInKSB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHNlbmRCdG4gPSBpbnB1dFJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktc2VuZCcsIHRleHQ6IHRoaXMuX3QoJ2FpLnNlbmRCdG4nKSB9KTtcblxuICAgIC8vIENoYXQgZW5naW5lXG4gICAgdGhpcy5faW5pdEFpQ2hhdCgpO1xuXG4gICAgLy8gUmVuZGVyIGV4aXN0aW5nIG1lc3NhZ2VzXG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG5cbiAgICAvLyBXaXJlIHVwIGlucHV0XG4gICAgY29uc3QgZG9TZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh2YWwsIG1zZ0NvbnRhaW5lciwgaW5wdXQpO1xuICAgIH07XG4gICAgc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvU2VuZCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgZG9TZW5kKCk7IH0pO1xuICB9XG5cbiAgX2luaXRBaUNoYXQoKSB7XG4gICAgaWYgKHRoaXMuYWlDaGF0ICYmIHRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuOyAvLyBhbHJlYWR5IGluaXRpYWxpc2VkXG4gICAgaWYgKCF0aGlzLmFpQ2hhdCkge1xuICAgICAgdGhpcy5haUNoYXQgPSBuZXcgQUlDaGF0KHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJyxcbiAgICAgICAgYWlFbmRwb2ludDogdGhpcy5zZXR0aW5ncz8uYWlFbmRwb2ludCB8fCAnJyxcbiAgICAgICAgYWlBcGlLZXk6IHRoaXMuc2V0dGluZ3M/LmFpQXBpS2V5IHx8ICcnLFxuICAgICAgICBhaU1vZGVsOiB0aGlzLnNldHRpbmdzPy5haU1vZGVsIHx8ICdncHQtNG8nLFxuICAgICAgICBhaVN5c3RlbVByb21wdDogdGhpcy5zZXR0aW5ncz8uYWlTeXN0ZW1Qcm9tcHQgfHwgJycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXJDaGF0KCkge1xuICAgIGlmICh0aGlzLmFpQ2hhdCkge1xuICAgICAgdGhpcy5haUNoYXQuYWJvcnQoKTtcbiAgICAgIHRoaXMuYWlDaGF0LmNsZWFyKCk7XG4gICAgfVxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpJyk7XG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IG1zZ0NvbnRhaW5lciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmtvcy1kYi1haS1tc2dzJyk7XG4gICAgICBpZiAobXNnQ29udGFpbmVyKSB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyQ2hhdE1lc3NhZ2VzKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnN0IG1zZ3MgPSB0aGlzLmFpQ2hhdCA/IHRoaXMuYWlDaGF0LmdldEhpc3RvcnkoKSA6IFtdO1xuXG4gICAgaWYgKCF0aGlzLmFpQ2hhdCB8fCAhdGhpcy5haUNoYXQuaXNDb25maWd1cmVkKSB7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnYWkubmVlZENvbmZpZycpLCBjbHM6ICdrb3MtZGItYWktbmVlZC1jb25maWcnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1zZ3MuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgICBjb25zdCBidWJibGUgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xzOiAna29zLWRiLWFpLW1zZyBrb3MtZGItYWktbXNnLScgKyBtc2cucm9sZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGV4dEVsID0gYnViYmxlLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2ctdGV4dCcgfSk7XG4gICAgICB0ZXh0RWwudGV4dENvbnRlbnQgPSBtc2cuY29udGVudDtcblxuICAgICAgLy8gQ29weSBidXR0b24gb24gYXNzaXN0YW50IG1lc3NhZ2VzXG4gICAgICBpZiAobXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAgIGNvbnN0IGNvcHlCdG4gPSBidWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLWNvcHktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkuY29weScpIH0pO1xuICAgICAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChtc2cuY29udGVudCk7XG4gICAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29weUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX3QoJ2FpLmNvcHknKTsgfSwgMjAwMCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpIHtcbiAgICBpZiAoIXRoaXMuYWlDaGF0IHx8ICF0aGlzLmFpQ2hhdC5pc0NvbmZpZ3VyZWQpIHJldHVybjtcblxuICAgIC8vIERpc2FibGUgaW5wdXQgZHVyaW5nIHJlcXVlc3RcbiAgICBpbnB1dEVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpbnB1dEVsLnZhbHVlID0gJyc7XG5cbiAgICAvLyBTaG93IHVzZXIgbWVzc2FnZSBpbW1lZGlhdGVseVxuICAgIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xuXG4gICAgLy8gQWRkIGEgXCJ0aGlua2luZ1wiIHBsYWNlaG9sZGVyXG4gICAgY29uc3QgdGhpbmtpbmdFbCA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnIGtvcy1kYi1haS1tc2ctYXNzaXN0YW50IGtvcy1kYi1haS10aGlua2luZycgfSk7XG4gICAgdGhpbmtpbmdFbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5fdCgnYWkudGhpbmtpbmcnKSwgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyB9KTtcblxuICAgIC8vIFN0cmVhbSByZXNwb25zZSBpbnRvIGEgdGVtcG9yYXJ5IGFzc2lzdGFudCBidWJibGVcbiAgICBsZXQgYXNzaXN0YW50VGV4dCA9ICcnO1xuICAgIGxldCBhc3Npc3RhbnRCdWJibGUgPSBudWxsO1xuXG4gICAgdGhpcy5haUNoYXQuc2VuZE1lc3NhZ2UodGV4dCwge1xuICAgICAgb25Ub2tlbjogKHRva2VuKSA9PiB7XG4gICAgICAgIGFzc2lzdGFudFRleHQgKz0gdG9rZW47XG4gICAgICAgIGlmICghYXNzaXN0YW50QnViYmxlKSB7XG4gICAgICAgICAgdGhpbmtpbmdFbC5yZW1vdmUoKTtcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUgPSBtc2dDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZyBrb3MtZGItYWktbXNnLWFzc2lzdGFudCcgfSk7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2ctdGV4dCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzaXN0YW50QnViYmxlLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWktbXNnLXRleHQnKS50ZXh0Q29udGVudCA9IGFzc2lzdGFudFRleHQ7XG4gICAgICAgIG1zZ0NvbnRhaW5lci5zY3JvbGxUb3AgPSBtc2dDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIG9uRG9uZTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgdGhpbmtpbmcgaWYgc3RpbGwgcHJlc2VudFxuICAgICAgICBpZiAodGhpbmtpbmdFbC5pc0Nvbm5lY3RlZCkgdGhpbmtpbmdFbC5yZW1vdmUoKTtcbiAgICAgICAgaWYgKCFhc3Npc3RhbnRCdWJibGUgJiYgYXNzaXN0YW50VGV4dCkge1xuICAgICAgICAgIC8vIEZhbGxiYWNrOiBpZiBubyB0b2tlbnMgYXJyaXZlZCB2aWEgb25Ub2tlbiBidXQgb25Eb25lIGhhcyBjb250ZW50XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQnIH0pO1xuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnLCB0ZXh0OiBhc3Npc3RhbnRUZXh0IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBjb3B5IGJ1dHRvblxuICAgICAgICBpZiAoYXNzaXN0YW50QnViYmxlICYmIGFzc2lzdGFudFRleHQpIHtcbiAgICAgICAgICBjb25zdCBjb3B5QnRuID0gYXNzaXN0YW50QnViYmxlLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1haS1jb3B5LWJ0bicsIHRleHQ6IHRoaXMuX3QoJ2FpLmNvcHknKSB9KTtcbiAgICAgICAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYXNzaXN0YW50VGV4dCk7XG4gICAgICAgICAgICAgIGNvcHlCdG4udGV4dENvbnRlbnQgPSB0aGlzLl90KCdhaS5jb3BpZWQnKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNvcHlCdG4udGV4dENvbnRlbnQgPSB0aGlzLl90KCdhaS5jb3B5Jyk7IH0sIDIwMDApO1xuICAgICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGlmICh0aGlua2luZ0VsLmlzQ29ubmVjdGVkKSB0aGlua2luZ0VsLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBlcnJCdWJibGUgPSBtc2dDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZyBrb3MtZGItYWktbXNnLWVycm9yJyB9KTtcbiAgICAgICAgZXJyQnViYmxlLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgdGV4dDogdGhpcy5fdCgnYWkuZXJyb3InLCB7IG1zZzogZXJyLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InIH0pLFxuICAgICAgICAgIGNsczogJ2tvcy1kYi1haS1tc2ctdGV4dCcsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXRyeSBidXR0b25cbiAgICAgICAgY29uc3QgcmV0cnlCdG4gPSBlcnJCdWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLXJldHJ5LWJ0bicsIHRleHQ6IHRoaXMuX3QoJ2FpLnJldHJ5JykgfSk7XG4gICAgICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzZXR0aW5ncyB0YWJcblxuY29uc3QgeyBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0LCBMT0NBTEVfS0VZUyB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUyA9IHtcbiAgLy8gR2VuZXJhbFxuICBsb2NhbGU6ICd6aC1jbicsXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIERhc2hib2FyZCBzZWN0aW9uIHZpc2liaWxpdHlcbiAgc2hvd1RvZGF5VGFza3M6IHRydWUsXG4gIHNob3dJbmJveEZpbGVzOiB0cnVlLFxuICBzaG93RW5naW5lU3RhdGU6IHRydWUsXG4gIHNob3dXZWVrbHlDaGFydDogdHJ1ZSxcbiAgc2hvd0FpQ2hhdDogdHJ1ZSxcbiAgc2hvd1Byb2plY3RDYXJkczogdHJ1ZSxcbiAgc2hvd1JlY2VudEFjdGl2aXR5OiB0cnVlLFxuICBzaG93VmF1bHRTdGF0czogdHJ1ZSxcbiAgc2hvd05hdjogdHJ1ZSxcblxuICAvLyBEYXRhIGxpbWl0c1xuICBtYXhSZWNlbnRJdGVtczogOCxcbiAgbWF4VGFza0l0ZW1zOiAxMixcbiAgbWF4SW5ib3hJdGVtczogNixcblxuICAvLyBBSSBDaGF0IHByb3ZpZGVyXG4gIGFpRW5kcG9pbnQ6ICcnLFxuICBhaUFwaUtleTogJycsXG4gIGFpTW9kZWw6ICdncHQtNG8nLFxuICBhaVN5c3RlbVByb21wdDogJycsXG59O1xuXG5jbGFzcyBDb2NrcGl0U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBjb25zdHJ1Y3RvcihhcHAsIHBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8qKiBIZWxwZXI6IHRyYW5zbGF0ZSB1c2luZyBjdXJyZW50IGxvY2FsZSAqL1xuICBfdChrZXksIHBhcmFtcykge1xuICAgIHJldHVybiB0KGtleSwgdGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlLCBwYXJhbXMpO1xuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICB0aGlzLnJlbmRlckdlbmVyYWxTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFpU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFib3V0U2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICByZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZ2VuZXJhbCcpIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5sYW5ndWFnZScpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJykpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbignemgtY24nLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhDTicpKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ2VuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ0VuJykpXG4gICAgICAgICAgLmFkZE9wdGlvbignemgtdHcnLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhUVycpKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW5EZXNjJykpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvT3BlbilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyQWlTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdhaS5wcm92aWRlclNlY3Rpb24nKSB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnKSxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicsXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ2FpLmFwaUVuZHBvaW50JykpXG4gICAgICAuc2V0RGVzYygnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpRW5kcG9pbnQgfHwgJycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haUVuZHBvaW50ID0gdi50cmltKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkuYXBpS2V5JykpXG4gICAgICAuc2V0RGVzYygnc2stLi4uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ3NrLS4uLicpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpQXBpS2V5IHx8ICcnKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlBcGlLZXkgPSB2LnRyaW0oKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkubW9kZWwnKSlcbiAgICAgIC5zZXREZXNjKCdncHQtNG8sIGNsYXVkZS0zLjUtc29ubmV0LCBkZWVwc2Vlay1jaGF0LCAuLi4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2dwdC00bycpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpTW9kZWwgfHwgJ2dwdC00bycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haU1vZGVsID0gdi50cmltKCkgfHwgJ2dwdC00byc7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkuc3lzdGVtUHJvbXB0JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcicpKVxuICAgICAgLmFkZFRleHRBcmVhKCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIodGhpcy5fdCgnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInKSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlTeXN0ZW1Qcm9tcHQgfHwgJycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haVN5c3RlbVByb21wdCA9IHYudHJpbSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRleHQuaW5wdXRFbC5yb3dzID0gNDtcbiAgICAgICAgdGV4dC5pbnB1dEVsLmNvbHMgPSA2MDtcbiAgICAgICAgdGV4dC5pbnB1dEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC10ZXh0YXJlYScpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXNoYm9hcmQnKSB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnKSxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICAgIHsga2V5OiAnc2hvd1RvZGF5VGFza3MnLCBuYW1lOiAnVG9kYXlcXCdzIFRhc2tzJywgZGVzYzogJ0RhaWx5IG5vdGUgdGFzayBsaXN0IGFuZCBwcm9ncmVzcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dQcm9qZWN0Q2FyZHMnLCBuYW1lOiAnQWN0aXZlIFByb2plY3RzJywgZGVzYzogJ1Byb2plY3QgY2FyZHMgd2l0aCBwcmlvcml0eSBhbmQgcHJvZ3Jlc3MuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93VmF1bHRTdGF0cycsIG5hbWU6ICdWYXVsdCBTdGF0aXN0aWNzJywgZGVzYzogJ1RvdGFsIG5vdGVzLCBhY3RpdmUgcHJvamVjdHMsIGluYm94IGNvdW50LicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1JlY2VudEFjdGl2aXR5JywgbmFtZTogJ1JlY2VudCBBY3Rpdml0eScsIGRlc2M6ICdSZWNlbnRseSBtb2RpZmllZCBmaWxlcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dOYXYnLCBuYW1lOiAnTmF2aWdhdGlvbicsIGRlc2M6ICdRdWljayBsaW5rcyB0byBhcmVhcywgaW5ib3gsIGhvdCBjYWNoZS4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dJbmJveEZpbGVzJywgbmFtZTogJ0luYm94IEZpbGVzJywgZGVzYzogJ0xpc3Qgb2YgcGVuZGluZyBmaWxlcyBpbiAwIEluYm94Ly4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dFbmdpbmVTdGF0ZScsIG5hbWU6ICdFbmdpbmUgU3RhdGUnLCBkZXNjOiAnVHJpYWdlL0NvbXBpbGUvTGluayBlbmdpbmUgc3RhdHVzIGNoaXBzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1dlZWtseUNoYXJ0JywgbmFtZTogJ1dlZWtseSBDaGFydCcsIGRlc2M6ICdCYXIgY2hhcnQgb2Ygd2Vla2x5IGRhaWx5LW5vdGUgY2FwdHVyZXMuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93QWlDaGF0JywgbmFtZTogJ0FJIENoYXQnLCBkZXNjOiAnQUkgY2hhdCB3aXRoIExMTSBwcm92aWRlci4nIH0sXG4gICAgXTtcblxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsga2V5LCBuYW1lLCBkZXNjIH0pID0+IHtcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAuc2V0RGVzYyhkZXNjKVxuICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5nc1trZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRGF0YUxpbWl0c1NlY3Rpb24oY29udGFpbmVyRWwpIHtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhdGFMaW1pdHMnKSB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubWF4UmVjZW50JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignOCcpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgzLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDgpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFRhc2tzJykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCcxMicpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhUYXNrSXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCAxMikpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4VGFza0l0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heEluYm94JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveERlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCc2JylcbiAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heEluYm94SXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA2KSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICByZW5kZXJBYm91dFNlY3Rpb24oY29udGFpbmVyRWwpIHtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmFib3V0JykgfSk7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGRlc2MuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLnZlcnNpb25EZXNjJykgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLnZlcnNpb24nKSlcbiAgICAgIC5zZXREZXNjKGRlc2MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBDb2NrcGl0U2V0dGluZ1RhYiwgREVGQVVMVF9TRVRUSU5HUyB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwbHVnaW4gZW50cnkgcG9pbnRcblxuY29uc3QgeyBQbHVnaW4gfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9ID0gcmVxdWlyZSgnLi9jb2NrcGl0LXZpZXcnKTtcbmNvbnN0IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MgfSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MtdGFiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgS29zQ29ja3BpdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIC8vIExvYWQgc2F2ZWQgc2V0dGluZ3NcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGN1c3RvbSB2aWV3LCBwYXNzaW5nIHRoZSBwbHVnaW4gcmVmZXJlbmNlXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFX0NPQ0tQSVQsIChsZWFmKSA9PiBuZXcgQ29ja3BpdFZpZXcobGVhZiwgdGhpcykpO1xuXG4gICAgLy8gQWRkIHJpYmJvbiBpY29uXG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdnYXVnZScsICdPcGVuIEtPUyBDb2NrcGl0JywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29ja3BpdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGNvbW1hbmQgdG8gb3BlbiBjb2NrcGl0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnT3BlbiBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vcGVuQ29ja3BpdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGNvbW1hbmQgdG8gcmVmcmVzaCBjb2NrcGl0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmVmcmVzaC1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnUmVmcmVzaCBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5yZWZyZXNoQ29ja3BpdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gUmVnaXN0ZXIgc2V0dGluZ3MgdGFiXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBDb2NrcGl0U2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gT3BlbiB0aGUgY29ja3BpdCBhdXRvbWF0aWNhbGx5IG9uIGxheW91dCByZWFkeVxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID09PSAwICYmIHRoaXMuc2V0dGluZ3MuYXV0b09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuQ29ja3BpdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb3BlbkNvY2twaXQoKSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgY29uc3QgZXhpc3RpbmcgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgd29ya3NwYWNlLnJldmVhbExlYWYoZXhpc3RpbmdbMF0pO1xuICAgICAgY29uc3QgdmlldyA9IGV4aXN0aW5nWzBdLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhZih0cnVlKTtcbiAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7XG4gICAgICB0eXBlOiBWSUVXX1RZUEVfQ09DS1BJVCxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2hDb2NrcGl0KCkge1xuICAgIGNvbnN0IGxlYXZlcyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgIGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgc2F2ZWQpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgLy8gTm90aWZ5IG9wZW4gdmlld3Mgb2Ygc2V0dGluZ3MgY2hhbmdlXG4gICAgdGhpcy5yZWZyZXNoQ29ja3BpdCgpO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCkuZm9yRWFjaCgobGVhZikgPT4ge1xuICAgICAgbGVhZi5kZXRhY2goKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUEsa0JBQUFBLFVBQUFDLFNBQUE7QUFHQSxRQUFNLFVBQVU7QUFBQSxNQUNkLFNBQVM7QUFBQTtBQUFBLFFBRVAsWUFBWTtBQUFBLFFBQ1osZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBO0FBQUEsUUFHYixxQkFBcUI7QUFBQSxRQUNyQixxQkFBcUI7QUFBQSxRQUNyQixzQkFBc0I7QUFBQSxRQUN0Qix5QkFBeUI7QUFBQSxRQUN6QixxQkFBcUI7QUFBQSxRQUNyQixzQkFBc0I7QUFBQTtBQUFBLFFBR3RCLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQTtBQUFBLFFBR1gsb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUE7QUFBQSxRQUduQixjQUFjO0FBQUEsUUFDZCxpQkFBaUI7QUFBQSxRQUNqQixhQUFhO0FBQUEsUUFDYixxQkFBcUI7QUFBQTtBQUFBLFFBR3JCLGlCQUFpQjtBQUFBLFFBQ2pCLGlCQUFpQjtBQUFBO0FBQUEsUUFHakIsZUFBZTtBQUFBLFFBQ2Ysb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFDeEIsa0JBQWtCO0FBQUEsUUFDbEIsdUJBQXVCO0FBQUE7QUFBQSxRQUd2QixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQTtBQUFBLFFBR2hCLGFBQWE7QUFBQTtBQUFBLFFBR2IsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBO0FBQUEsUUFHZCxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7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UTtBQUFBLElBQ1YsQ0FBQztBQUNELGNBQVUsV0FBVyxJQUFJO0FBQUEsRUFDM0I7QUFBQSxFQUVBLE1BQU0saUJBQWlCO0FBQ3JCLFVBQU0sU0FBUyxLQUFLLElBQUksVUFBVSxnQkFBZ0IsaUJBQWlCO0FBQ25FLGVBQVcsUUFBUSxRQUFRO0FBQ3pCLFlBQU0sT0FBTyxLQUFLO0FBQ2xCLFVBQUksUUFBUSxPQUFPLEtBQUssWUFBWSxZQUFZO0FBQzlDLGNBQU0sS0FBSyxRQUFRO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sUUFBUSxNQUFNLEtBQUssU0FBUztBQUNsQyxTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsS0FBSztBQUFBLEVBQzNEO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBRWpDLFNBQUssZUFBZTtBQUFBLEVBQ3RCO0FBQUEsRUFFQSxXQUFXO0FBQ1QsU0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ3RFLFdBQUssT0FBTztBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiVklFV19UWVBFX0NPQ0tQSVQiLCAiQ29ja3BpdFZpZXciLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiREVGQVVMVF9TRVRUSU5HUyIsICJDb2NrcGl0U2V0dGluZ1RhYiJdCn0K
