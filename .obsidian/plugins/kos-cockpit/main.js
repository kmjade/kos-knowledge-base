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
        "action.aiChat": "AI Chat",
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
        "ai.needConfig": "\u672A\u68C0\u6D4B\u5230 FLOWnote \u914D\u7F6E\uFF0C\u4E5F\u672A\u627E\u5230\u624B\u52A8 API \u8BBE\u7F6E\u3002\u8BF7\u5728 FLOWnote \u4E2D\u914D\u7F6E AI Provider\uFF0C\u6216\u5728 Cockpit \u8BBE\u7F6E\u4E2D\u624B\u52A8\u586B\u5199\u3002",
        "ai.error": "\u8BF7\u6C42\u5931\u8D25: {msg}",
        "ai.retry": "\u91CD\u8BD5",
        "ai.copy": "\u590D\u5236",
        "ai.copied": "\u5DF2\u590D\u5236",
        // AI settings
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "\u914D\u7F6E AI \u5BF9\u8BDD\u7684 API \u63A5\u5165\u53C2\u6570\u3002\u82E5 FLOWnote \u5DF2\u914D\u7F6E AI Provider\uFF08\u63A8\u8350\uFF09\uFF0CCockpit \u5C06\u81EA\u52A8\u8BFB\u53D6\u5176\u8BBE\u7F6E\u3002\u7559\u7A7A\u5219\u804A\u5929\u533A\u4E0D\u53EF\u7528\u3002",
        "ai.apiEndpoint": "API Endpoint",
        "ai.apiKey": "API Key",
        "ai.model": "\u6A21\u578B\u540D\u79F0",
        "ai.systemPrompt": "\u7CFB\u7EDF\u63D0\u793A\u8BCD",
        "ai.systemPromptPlaceholder": "\u4F60\u662F\u4E00\u4E2A\u77E5\u8BC6\u7BA1\u7406\u52A9\u624B\uFF0C\u5E2E\u52A9\u7528\u6237\u5904\u7406 KOS \u77E5\u8BC6\u5E93\u3002",
        // Providers
        "provider.claude": "Claude",
        "provider.codex": "Codex",
        "provider.opencode": "OpenCode",
        "provider.endpoint": "API Endpoint",
        "provider.apiKey": "API Key",
        "provider.model": "Model",
        "provider.systemPrompt": "System Prompt",
        "provider.systemPromptPlaceholder": "You are a helpful assistant...",
        "provider.activeProvider": "Active AI Provider",
        "provider.activeProviderDesc": "Select which provider the AI Chat panel uses.",
        "provider.settings": "Provider Settings",
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
        "action.aiChat": "AI Chat",
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
        "ai.needConfig": "No FLOWnote config detected and no manual API settings found. Configure AI Provider in FLOWnote, or fill in manually in Cockpit settings.",
        "ai.error": "Request failed: {msg}",
        "ai.retry": "Retry",
        "ai.copy": "Copy",
        "ai.copied": "Copied",
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "Configure API access for the AI chat. If FLOWnote has AI Provider configured (recommended), Cockpit will auto-detect it. Leave empty to disable.",
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
        "action.aiChat": "AI Chat",
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
        "ai.needConfig": "\u672A\u5075\u6E2C\u5230 FLOWnote \u914D\u7F6E\uFF0C\u4E5F\u672A\u627E\u5230\u624B\u52D5 API \u8A2D\u5B9A\u3002\u8ACB\u5728 FLOWnote \u4E2D\u914D\u7F6E AI Provider\uFF0C\u6216\u5728 Cockpit \u8A2D\u5B9A\u4E2D\u624B\u52D5\u586B\u5BEB\u3002",
        "ai.error": "\u8ACB\u6C42\u5931\u6557: {msg}",
        "ai.retry": "\u91CD\u8A66",
        "ai.copy": "\u8907\u88FD",
        "ai.copied": "\u5DF2\u8907\u88FD",
        "ai.providerSection": "AI Provider",
        "ai.providerSectionDesc": "\u914D\u7F6E AI \u5C0D\u8A71\u7684 API \u63A5\u5165\u53C3\u6578\u3002\u82E5 FLOWnote \u5DF2\u914D\u7F6E AI Provider\uFF08\u63A8\u85A6\uFF09\uFF0CCockpit \u5C07\u81EA\u52D5\u8B80\u53D6\u5176\u8A2D\u5B9A\u3002\u7559\u7A7A\u5247\u804A\u5929\u5340\u4E0D\u53EF\u7528\u3002",
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
    async function resolveProviderConfig(settings, vaultAdapter) {
      if (!settings) return null;
      const pid = settings.activeProvider || "claude";
      const provider = settings.providers && settings.providers[pid];
      if (provider && provider.apiKey && provider.endpoint && provider.model) {
        return {
          providerId: pid,
          apiKey: provider.apiKey,
          model: provider.model,
          baseUrl: provider.endpoint,
          systemPrompt: provider.systemPrompt || "",
          label: provider.label || pid
        };
      }
      const providerIds = ["claude", "codex", "opencode"];
      for (const id of providerIds) {
        const p = settings.providers && settings.providers[id];
        if (p && p.apiKey && p.endpoint && p.model) {
          return {
            providerId: id,
            apiKey: p.apiKey,
            model: p.model,
            baseUrl: p.endpoint,
            systemPrompt: p.systemPrompt || "",
            label: p.label || id
          };
        }
      }
      if (vaultAdapter && typeof vaultAdapter.read === "function") {
        try {
          const raw = await vaultAdapter.read(".obsidian/plugins/flownote/data.json");
          const config = JSON.parse(raw);
          const ap = config && config.settings && config.settings.agentProvider;
          if (ap && ap.enabled) {
            const direct = ap.direct || ap[ap.mode];
            if (direct) {
              const providerId = direct.providerId;
              const apiKeys = direct.apiKeys || {};
              const apiKey = apiKeys[providerId];
              const model = direct.model || "";
              if (apiKey && model) {
                return {
                  providerId,
                  apiKey,
                  model,
                  baseUrl: direct.baseUrlOverride || "https://api.deepseek.com/v1",
                  systemPrompt: "",
                  label: "FLOWnote: " + providerId
                };
              }
            }
          }
        } catch {
        }
      }
      return null;
    }
    var AIChat = class {
      constructor(cfg) {
        this.cfg = cfg || {};
        this.messages = [];
        this.abortController = null;
        this._addWelcome();
      }
      get _locale() {
        return this.cfg && this.cfg.locale || "zh-cn";
      }
      get isConfigured() {
        const c = this.cfg || {};
        return !!(c.baseUrl && c.apiKey && c.model);
      }
      get providerLabel() {
        const c = this.cfg || {};
        return c.label || c.baseUrl || "Unknown";
      }
      clear() {
        this.messages = [];
        this._addWelcome();
      }
      getHistory() {
        return this.messages.slice();
      }
      sendMessage(content, callbacks = {}) {
        const { onToken, onDone, onError } = callbacks;
        const c = this.cfg || {};
        if (!this.isConfigured) {
          if (onError) onError(new Error("AI not configured"));
          return null;
        }
        this.messages.push({ role: "user", content: String(content).trim() });
        const systemPrompt = (c.systemPrompt || "").trim() || DEFAULT_SYSTEM_PROMPT;
        const payload = {
          model: c.model,
          messages: [
            { role: "system", content: systemPrompt },
            ...this.messages.filter((m) => m.role !== "system")
          ]
        };
        this.abortController = new AbortController();
        const signal = this.abortController.signal;
        let fullResponse = "";
        this._doStreamRequest(c.baseUrl, c.apiKey, payload, signal, {
          onToken: (token) => {
            fullResponse += token;
            if (onToken) onToken(token);
          },
          onDone: () => {
            if (fullResponse) this.messages.push({ role: "assistant", content: fullResponse });
            this.abortController = null;
            if (onDone) onDone(fullResponse);
          },
          onError: (err) => {
            this.abortController = null;
            if (onError) onError(err);
          }
        });
        return signal;
      }
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
        this.messages.push({ role: "assistant", content: welcomes[locale] || welcomes["zh-cn"] });
      }
      async _doStreamRequest(baseUrl, apiKey, payload, signal, callbacks) {
        const { onToken, onDone, onError } = callbacks;
        let endpoint = String(baseUrl || "").trim();
        if (!endpoint) endpoint = "https://api.openai.com/v1";
        if (!/\/chat\/completions$/i.test(endpoint)) {
          endpoint = endpoint.replace(/\/+$/, "") + "/chat/completions";
        }
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + String(apiKey || "").trim()
            },
            body: JSON.stringify({ ...payload, stream: true }),
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
                if (content && onToken) onToken(content);
              } catch {
              }
            }
          }
          if (buffer.trim()) {
            const t = buffer.trim();
            if (t.startsWith("data: ") && t !== "data: [DONE]") {
              try {
                const json = JSON.parse(t.slice(6));
                const delta = json.choices && json.choices[0] && json.choices[0].delta;
                const content = delta && delta.content;
                if (content && onToken) onToken(content);
              } catch {
              }
            }
          }
          if (onDone) onDone();
        } catch (err) {
          if (err.name === "AbortError") return;
          if (onError) onError(err);
        }
      }
    };
    module2.exports = { AIChat, resolveProviderConfig, DEFAULT_SYSTEM_PROMPT };
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
    var { AIChat, resolveProviderConfig } = require_ai_chat();
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
        this.activePanel = "home";
      }
      getViewType() {
        return VIEW_TYPE_COCKPIT2;
      }
      getDisplayText() {
        return this.activePanel === "chat" ? "KOS AI Chat" : "KOS Cockpit";
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
          this.renderPanel(data);
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
      /** Switch between 'home' and 'chat' panels */
      switchPanel(panel, data) {
        this.activePanel = panel;
        this.renderPanel(data || null);
      }
      // ──────────────── Panel Router ────────────────
      renderPanel(data) {
        const container = this.contentEl;
        container.empty();
        const main = container.createEl("div", { cls: "kos-db" });
        if (this.activePanel === "chat") {
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
          { label: "\u2699\uFE0F " + this._t("action.settings"), cmd: "settings" },
          { label: "\u{1F916} " + this._t("action.aiChat"), cmd: "ai-chat" }
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
          case "ai-chat": {
            this.collectData(this.app).then((data) => this.switchPanel("chat", data));
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
      // ──────────────── Chat (Full-page AI Chat) ────────────────
      renderChatView(container, data) {
        const topBar = container.createEl("div", { cls: "kos-db-chat-topbar" });
        const backBtn = topBar.createEl("button", { cls: "kos-db-chat-back-btn" });
        backBtn.innerHTML = "\u2190 " + this._t("app.name");
        backBtn.addEventListener("click", () => {
          this.collectData(this.app).then((freshData) => {
            this.switchPanel("home", freshData);
          });
        });
        topBar.createEl("span", { text: "\u{1F916} " + this._t("ai.title"), cls: "kos-db-chat-topbar-title" });
        const chatSection = container.createEl("div", { cls: "kos-db-ai kos-db-ai-full" });
        const msgContainer = chatSection.createEl("div", { cls: "kos-db-ai-msgs" });
        const inputRow = chatSection.createEl("div", { cls: "kos-db-ai-input-row" });
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
      // ──────────────── Shared AI Chat Logic ────────────────
      _initAiChat() {
        if (this.aiChat && this.aiChat.isConfigured) return;
        if (this.aiChat) return;
        const self = this;
        resolveProviderConfig(self.settings, self.app.vault.adapter).then((cfg) => {
          if (cfg) {
            self.aiChat = new AIChat({
              locale: self.settings?.locale || "zh-cn",
              baseUrl: cfg.baseUrl,
              apiKey: cfg.apiKey,
              model: cfg.model,
              systemPrompt: cfg.systemPrompt || self.settings?.aiSystemPrompt || "",
              label: cfg.label
            });
            self._refreshChatMsgs();
          }
        });
      }
      _refreshChatMsgs() {
        const section = this.contentEl.querySelector(".kos-db-ai, .kos-db-ai-full");
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
      locale: "zh-cn",
      autoOpen: true,
      // Active provider
      activeProvider: "claude",
      // Per-provider configuration
      providers: {
        claude: {
          label: "Claude",
          endpoint: "",
          apiKey: "",
          model: "claude-sonnet-4-20250514",
          systemPrompt: ""
        },
        codex: {
          label: "Codex",
          endpoint: "",
          apiKey: "",
          model: "",
          systemPrompt: ""
        },
        opencode: {
          label: "OpenCode",
          endpoint: "",
          apiKey: "",
          model: "",
          systemPrompt: ""
        }
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
      maxInboxItems: 6
    };
    var PROVIDER_PRESETS = {
      claude: {
        endpoint: "https://api.anthropic.com/v1",
        model: "claude-sonnet-4-20250514",
        models: ["claude-sonnet-4-20250514", "claude-3-5-sonnet-20241022", "claude-3-opus-20240229", "claude-3-5-haiku-20241022"]
      },
      codex: {
        endpoint: "",
        model: "",
        models: []
      },
      opencode: {
        endpoint: "",
        model: "",
        models: []
      }
    };
    var CockpitSettingTab2 = class extends PluginSettingTab {
      constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
        this.activeTab = "general";
      }
      _t(key, params) {
        return t(key, this.plugin.settings.locale, params);
      }
      display() {
        const { containerEl } = this;
        containerEl.empty();
        const providerIds = ["claude", "codex", "opencode"];
        const tabIds = ["general", ...providerIds];
        const tabBar = containerEl.createDiv({ cls: "kos-cockpit-settings-tabs" });
        const tabButtons = /* @__PURE__ */ new Map();
        const tabContents = /* @__PURE__ */ new Map();
        if (!tabIds.includes(this.activeTab)) this.activeTab = "general";
        for (const id of tabIds) {
          const label = id === "general" ? "General" : this.plugin.settings.providers[id]?.label || id;
          const btn = tabBar.createEl("button", {
            cls: "kos-cockpit-settings-tab" + (id === this.activeTab ? " kos-cockpit-settings-tab--active" : ""),
            text: label
          });
          btn.addEventListener("click", () => {
            this.activeTab = id;
            for (const tid of tabIds) {
              tabButtons.get(tid)?.toggleClass("kos-cockpit-settings-tab--active", tid === id);
              tabContents.get(tid)?.toggleClass("kos-cockpit-settings-tab-content--active", tid === id);
            }
          });
          tabButtons.set(id, btn);
        }
        for (const id of tabIds) {
          const content = containerEl.createDiv({
            cls: "kos-cockpit-settings-tab-content" + (id === this.activeTab ? " kos-cockpit-settings-tab-content--active" : "")
          });
          tabContents.set(id, content);
        }
        this.renderGeneralTab(tabContents.get("general"));
        for (const providerId of providerIds) {
          this.renderProviderTab(tabContents.get(providerId), providerId);
        }
      }
      renderGeneralTab(container) {
        container.createEl("h3", { text: "General" });
        new Setting(container).setName(this._t("settings.language")).setDesc(this._t("settings.languageDesc")).addDropdown((d) => {
          d.addOption("zh-cn", this._t("settings.langZhCN")).addOption("en", this._t("settings.langEn")).addOption("zh-tw", this._t("settings.langZhTW")).setValue(this.plugin.settings.locale).onChange(async (v) => {
            this.plugin.settings.locale = v;
            await this.plugin.saveSettings();
            this.display();
          });
        });
        new Setting(container).setName(this._t("settings.autoOpen")).setDesc(this._t("settings.autoOpenDesc")).addToggle(
          (t2) => t2.setValue(this.plugin.settings.autoOpen).onChange(async (v) => {
            this.plugin.settings.autoOpen = v;
            await this.plugin.saveSettings();
          })
        );
        const providerIds = ["claude", "codex", "opencode"];
        new Setting(container).setName(this._t("provider.activeProvider")).setDesc(this._t("provider.activeProviderDesc")).addDropdown((d) => {
          for (const pid of providerIds) {
            d.addOption(pid, this.plugin.settings.providers[pid]?.label || pid);
          }
          d.setValue(this.plugin.settings.activeProvider || "claude").onChange(async (v) => {
            this.plugin.settings.activeProvider = v;
            await this.plugin.saveSettings();
          });
        });
        container.createEl("h3", { text: this._t("settings.dashboard") });
        container.createEl("p", { text: this._t("settings.dashboardDesc"), cls: "setting-item-description" });
        const sections = [
          { key: "showTodayTasks", name: "Today's Tasks", desc: "Daily note task list and progress." },
          { key: "showProjectCards", name: "Active Projects", desc: "Project cards with priority and progress." },
          { key: "showVaultStats", name: "Vault Statistics", desc: "Total notes, active projects, inbox count." },
          { key: "showRecentActivity", name: "Recent Activity", desc: "Recently modified files." },
          { key: "showNav", name: "Navigation", desc: "Quick links to areas, inbox, hot cache." },
          { key: "showInboxFiles", name: "Inbox Files", desc: "List of pending files in 0 Inbox/." },
          { key: "showEngineState", name: "Engine State", desc: "Triage/Compile/Link engine status chips." },
          { key: "showWeeklyChart", name: "Weekly Chart", desc: "Bar chart of weekly daily-note captures." }
        ];
        sections.forEach(({ key, name, desc: desc2 }) => {
          new Setting(container).setName(name).setDesc(desc2).addToggle(
            (t2) => t2.setValue(this.plugin.settings[key]).onChange(async (v) => {
              this.plugin.settings[key] = v;
              await this.plugin.saveSettings();
            })
          );
        });
        container.createEl("h3", { text: this._t("settings.dataLimits") });
        new Setting(container).setName(this._t("settings.maxRecent")).setDesc(this._t("settings.maxRecentDesc")).addText(
          (t2) => t2.setPlaceholder("8").setValue(String(this.plugin.settings.maxRecentItems)).onChange(async (v) => {
            this.plugin.settings.maxRecentItems = Math.max(3, Math.min(20, Number(v) || 8));
            await this.plugin.saveSettings();
          })
        );
        new Setting(container).setName(this._t("settings.maxTasks")).setDesc(this._t("settings.maxTasksDesc")).addText(
          (t2) => t2.setPlaceholder("12").setValue(String(this.plugin.settings.maxTaskItems)).onChange(async (v) => {
            this.plugin.settings.maxTaskItems = Math.max(1, Math.min(20, Number(v) || 12));
            await this.plugin.saveSettings();
          })
        );
        new Setting(container).setName(this._t("settings.maxInbox")).setDesc(this._t("settings.maxInboxDesc")).addText(
          (t2) => t2.setPlaceholder("6").setValue(String(this.plugin.settings.maxInboxItems)).onChange(async (v) => {
            this.plugin.settings.maxInboxItems = Math.max(1, Math.min(20, Number(v) || 6));
            await this.plugin.saveSettings();
          })
        );
        container.createEl("h3", { text: this._t("settings.about") });
        const desc = document.createDocumentFragment();
        desc.createEl("span", { text: this._t("settings.versionDesc") });
        new Setting(container).setName(this._t("settings.version")).setDesc(desc);
      }
      renderProviderTab(container, providerId) {
        const provider = this.plugin.settings.providers[providerId];
        const preset = PROVIDER_PRESETS[providerId];
        const label = provider?.label || providerId;
        container.createEl("h3", { text: label + " Settings" });
        new Setting(container).setName(this._t("provider.endpoint")).setDesc(preset?.endpoint ? "Default: " + preset.endpoint : "OpenAI-compatible endpoint URL").addText(
          (t2) => t2.setPlaceholder(preset?.endpoint || "https://api.openai.com/v1").setValue(provider?.endpoint || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].endpoint = v.trim();
            await this.plugin.saveSettings();
          })
        );
        new Setting(container).setName(this._t("provider.apiKey")).setDesc("sk-... or API key").addText((t2) => {
          t2.setPlaceholder("sk-...").setValue(provider?.apiKey || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].apiKey = v.trim();
            await this.plugin.saveSettings();
          });
          t2.inputEl.type = "password";
        });
        new Setting(container).setName(this._t("provider.model")).setDesc(preset?.models?.length ? preset.models.join(", ") : "Model identifier").addText(
          (t2) => t2.setPlaceholder(preset?.model || "gpt-4o").setValue(provider?.model || preset?.model || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].model = v.trim();
            await this.plugin.saveSettings();
          })
        );
        new Setting(container).setName(this._t("provider.systemPrompt")).setDesc(this._t("provider.systemPromptPlaceholder")).addTextArea((t2) => {
          t2.setPlaceholder(this._t("provider.systemPromptPlaceholder")).setValue(provider?.systemPrompt || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].systemPrompt = v.trim();
            await this.plugin.saveSettings();
          });
          t2.inputEl.rows = 4;
          t2.inputEl.cols = 60;
          t2.inputEl.addClass("kos-cockpit-textarea");
        });
      }
    };
    module2.exports = { CockpitSettingTab: CockpitSettingTab2, DEFAULT_SETTINGS: DEFAULT_SETTINGS2, PROVIDER_PRESETS };
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
    this.addRibbonIcon("gauge", "KOS Cockpit", () => {
      this.openCockpit({ panel: "home" });
    });
    this.addRibbonIcon("bot", "KOS AI Chat", () => {
      this.openCockpit({ panel: "chat" });
    });
    this.addCommand({
      id: "open-kos-cockpit",
      name: "Open KOS Cockpit",
      callback: () => this.openCockpit({ panel: "home" })
    });
    this.addCommand({
      id: "open-kos-ai-chat",
      name: "Open KOS AI Chat",
      callback: () => this.openCockpit({ panel: "chat" })
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
        this.openCockpit({ panel: "home" });
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
        if (options.panel === "chat" && typeof view.switchPanel === "function") {
          this.collectData().then((data) => view.switchPanel("chat", data));
        } else if (options.panel === "home" && typeof view.switchPanel === "function") {
          this.collectData().then((data) => view.switchPanel("home", data));
        } else if (typeof view.refresh === "function") {
          await view.refresh();
        }
      }
      return;
    }
    const leaf = workspace.getLeaf(true);
    await leaf.setViewState({
      type: VIEW_TYPE_COCKPIT,
      active: true
    });
    if (options.panel === "chat") {
      const view = leaf.view;
      if (view && typeof view.switchPanel === "function") {
        this.collectData().then((data) => view.switchPanel("chat", data));
      }
    }
    workspace.revealLeaf(leaf);
  }
  async collectData() {
    const { getTodayState, getDashboardStats, listProjects } = require_home_service();
    const app = this.app;
    const [today, projects, stats] = await Promise.all([
      getTodayState(app).catch(() => null),
      listProjects(app, { activeOnly: true }).catch(() => []),
      getDashboardStats(app).catch(() => ({ totalNotes: 0, todayNew: 0, stats: {} }))
    ]);
    return { today, projects, stats };
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cblxuY29uc3QgTE9DQUxFUyA9IHtcbiAgJ3poLWNuJzoge1xuICAgIC8vIEdlbmVyYWxcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU1MkEwXHU4RjdEXHU0RUVBXHU4ODY4XHU3NkQ4XHU2NUY2XHU1MUZBXHU5NTE5XHUzMDAyJyxcblxuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1MjFCXHU1RUZBJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QkJFXHU1QjlBKScsXG5cbiAgICAvLyBEYXkgbmFtZXNcbiAgICAnZGF5LnN1bic6ICdcdTY1RTUnLFxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcbiAgICAnZGF5LndlZCc6ICdcdTRFMDknLFxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcbiAgICAnZGF5LnNhdCc6ICdcdTUxNkQnLFxuXG4gICAgLy8gUXVpY2sgYWN0aW9uc1xuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1ODNCNycsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODdFJyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU5ODc5XHU3NkVFJyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcbidhY3Rpb24uYWlDaGF0JzogJ0FJIENoYXQnLFxuXG4gICAgLy8gVG9kYXkgVGFza3NcbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTEnLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2ODJcdTY1RTBcdTRFRkJcdTUyQTFcdTMwMDInLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCMTRcdThCQjBcdTY3MkFcdTUyMUJcdTVFRkFcdTMwMDJcdTcwQjlcdTUxRkIgW1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOV0gXHU1MjFCXHU1RUZBXHUzMDAyJyxcblxuICAgIC8vIFByb2plY3RzXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUVcdTMwMDInLFxuXG4gICAgLy8gVmF1bHQgc3RhdHNcbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU1RTkzXHU3RURGXHU4QkExJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTYwM0JcdTdCMTRcdThCQjAnLFxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUUnLFxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1NjJFMycsXG5cbiAgICAvLyBSZWNlbnQgYWN0aXZpdHlcbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOCcsXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdTUyQThcdTMwMDInLFxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVCRkNcdTgyMkEnLFxuXG4gICAgLy8gSW5ib3hcbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgIC8vIEVuZ2luZSBzdGF0ZVxuICAgICdlbmdpbmUudGl0bGUnOiAnXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ1x1NjY4Mlx1NjVFMFx1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMVx1NjU3MFx1NjM2RVx1MzAwMicsXG5cbiAgICAvLyBXZWVrbHkgY2hhcnRcbiAgICAnd2Vla2x5LnRpdGxlJzogJ1x1NjcyQ1x1NTQ2OFx1OEJCMFx1NUY1NVx1NTIwNlx1NUUwMycsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTU0NjhcdTY2ODJcdTY1RTBcdTY1RTVcdThCQjBcdThCQjBcdTVGNTVcdTMwMDInLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gXHU2NzYxJyxcblxuICAgIC8vIEFJIENoYXRcbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QkY5XHU4QkREJyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnXHU4QkUyXHU5NUVFIEtPUyBcdTc3RTVcdThCQzZcdTVFOTMuLi4nLFxuICAgICdhaS53ZWxjb21lJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxuICAgICdhaS5zZW5kQnRuJzogJ1x1NTNEMVx1OTAwMScsXG4gICAgJ2FpLmNsZWFyQnRuJzogJ1x1NkUwNVx1N0E3QVx1NUJGOVx1OEJERCcsXG4gICAgJ2FpLnRoaW5raW5nJzogJ1x1NjAxRFx1ODAwM1x1NEUyRC4uLicsXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnXHU2NzJBXHU2OEMwXHU2RDRCXHU1MjMwIEZMT1dub3RlIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEU1Rlx1NjcyQVx1NjI3RVx1NTIzMFx1NjI0Qlx1NTJBOCBBUEkgXHU4QkJFXHU3RjZFXHUzMDAyXHU4QkY3XHU1NzI4IEZMT1dub3RlIFx1NEUyRFx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwQ1x1NjIxNlx1NTcyOCBDb2NrcGl0IFx1OEJCRVx1N0Y2RVx1NEUyRFx1NjI0Qlx1NTJBOFx1NTg2Qlx1NTE5OVx1MzAwMicsXG4gICAgJ2FpLmVycm9yJzogJ1x1OEJGN1x1NkM0Mlx1NTkzMVx1OEQyNToge21zZ30nLFxuICAgICdhaS5yZXRyeSc6ICdcdTkxQ0RcdThCRDUnLFxuICAgICdhaS5jb3B5JzogJ1x1NTkwRFx1NTIzNicsXG4gICAgJ2FpLmNvcGllZCc6ICdcdTVERjJcdTU5MERcdTUyMzYnLFxuXG4gICAgLy8gQUkgc2V0dGluZ3NcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdcdTkxNERcdTdGNkUgQUkgXHU1QkY5XHU4QkREXHU3Njg0IEFQSSBcdTYzQTVcdTUxNjVcdTUzQzJcdTY1NzBcdTMwMDJcdTgyRTUgRkxPV25vdGUgXHU1REYyXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjA4XHU2M0E4XHU4MzUwXHVGRjA5XHVGRjBDQ29ja3BpdCBcdTVDMDZcdTgxRUFcdTUyQThcdThCRkJcdTUzRDZcdTUxNzZcdThCQkVcdTdGNkVcdTMwMDJcdTc1NTlcdTdBN0FcdTUyMTlcdTgwNEFcdTU5MjlcdTUzM0FcdTRFMERcdTUzRUZcdTc1MjhcdTMwMDInLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ1x1NkEyMVx1NTc4Qlx1NTQwRFx1NzlGMCcsXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdFREZcdTYzRDBcdTc5M0FcdThCQ0QnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTY2MkZcdTRFMDBcdTRFMkFcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTUyQTlcdTYyNEJcdUZGMENcdTVFMkVcdTUyQTlcdTc1MjhcdTYyMzdcdTU5MDRcdTc0MDYgS09TIFx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMicsXG5cbiAgICAvLyBQcm92aWRlcnNcbiAgICAncHJvdmlkZXIuY2xhdWRlJzogJ0NsYXVkZScsXG4gICAgJ3Byb3ZpZGVyLmNvZGV4JzogJ0NvZGV4JyxcbiAgICAncHJvdmlkZXIub3BlbmNvZGUnOiAnT3BlbkNvZGUnLFxuICAgICdwcm92aWRlci5lbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdwcm92aWRlci5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ3Byb3ZpZGVyLm1vZGVsJzogJ01vZGVsJyxcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0JzogJ1N5c3RlbSBQcm9tcHQnLFxuICAgICdwcm92aWRlci5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdZb3UgYXJlIGEgaGVscGZ1bCBhc3Npc3RhbnQuLi4nLFxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlcic6ICdBY3RpdmUgQUkgUHJvdmlkZXInLFxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlckRlc2MnOiAnU2VsZWN0IHdoaWNoIHByb3ZpZGVyIHRoZSBBSSBDaGF0IHBhbmVsIHVzZXMuJyxcbiAgICAncHJvdmlkZXIuc2V0dGluZ3MnOiAnUHJvdmlkZXIgU2V0dGluZ3MnLFxuICAgIC8vIFNldHRpbmdzXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NzU0Q1x1OTc2Mlx1OEJFRFx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwMDlcdTYyRTlcdTRFRUFcdTg4NjhcdTc2RDhcdTc1NENcdTk3NjJcdTc2ODRcdTY2M0VcdTc5M0FcdThCRURcdThBMDBcdTMwMDInLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU0MkZcdTUyQThcdTY1RjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDAgS09TIENvY2twaXRcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnRGFzaGJvYXJkIFNlY3Rpb25zJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTRFRUFcdTg4NjhcdTc2RDhcdTRFMEFcdTU0MDRcdTUzM0FcdTU3NTdcdTc2ODRcdTY2M0VcdTc5M0FcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOFx1NjU3MCcsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnXHU2NjNFXHU3OTNBXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU2NTg3XHU0RUY2XHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnXHU2NzAwXHU1OTI3XHU0RUZCXHU1MkExXHU2NTcwJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1NjYzRVx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMVx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ1x1NjcwMFx1NTkyNyBJbmJveCBcdTY1NzAnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnXHU2NjNFXHU3OTNBIEluYm94IFx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ0Fib3V0JyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTRFRUFcdTg4NjhcdTc2RDhcdTMwMDJLT1MgXHU3NTFGXHU2MDAxXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcbiAgfSxcblxuICAnZW4nOiB7XG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcbiAgICAnYXBwLmxvYWRpbmcnOiAnTG9hZGluZyBLT1MgQ29ja3BpdC4uLicsXG4gICAgJ2FwcC5lcnJvcic6ICdTb21ldGhpbmcgd2VudCB3cm9uZyBsb2FkaW5nIHRoZSBkYXNoYm9hcmQuJyxcblxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnRGFpbHkgTm90ZSBbe3N0YXR1c31dJyxcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ0NyZWF0ZWQnLFxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnTm90IENyZWF0ZWQnLFxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdUb2RheVxcJ3MgRm9jdXM6IHtmb2N1c30nLFxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKE5vdCBTZXQpJyxcblxuICAgICdkYXkuc3VuJzogJ1MnLFxuICAgICdkYXkubW9uJzogJ00nLFxuICAgICdkYXkudHVlJzogJ1QnLFxuICAgICdkYXkud2VkJzogJ1cnLFxuICAgICdkYXkudGh1JzogJ1QnLFxuICAgICdkYXkuZnJpJzogJ0YnLFxuICAgICdkYXkuc2F0JzogJ1MnLFxuXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnUGxhbiBUb2RheScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1F1aWNrIENhcHR1cmUnLFxuICAgICdhY3Rpb24uZGF5UmV2aWV3JzogJ0RheSBSZXZpZXcnLFxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdOZXcgUHJvamVjdCcsXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcbiAgICAnYWN0aW9uLnNldHRpbmdzJzogJ1NldHRpbmdzJyxcbiAgICAnYWN0aW9uLmFpQ2hhdCc6ICdBSSBDaGF0JyxcblxuICAgICd0YXNrLnRpdGxlJzogJ1RvZGF5XFwncyBUYXNrcycsXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcbiAgICAndGFzay5ub25lJzogJ05vIHRhc2tzIHlldC4nLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdEYWlseSBub3RlIG5vdCBjcmVhdGVkLiBDbGljayBbUGxhbiBUb2RheV0gdG8gY3JlYXRlIG9uZS4nLFxuXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnQWN0aXZlIFByb2plY3RzJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdObyBhY3RpdmUgcHJvamVjdHMuJyxcblxuICAgICdzdGF0cy50aXRsZSc6ICdWYXVsdCBTdGF0aXN0aWNzJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdUb3RhbCBOb3RlcycsXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ0FjdGl2ZSBQcm9qZWN0cycsXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1RvZGF5IE5ldycsXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnSW5ib3gnLFxuXG4gICAgJ3JlY2VudC50aXRsZSc6ICdSZWNlbnQgQWN0aXZpdHknLFxuICAgICdyZWNlbnQuZW1wdHknOiAnTm8gYWN0aXZpdHkgeWV0LicsXG5cbiAgICAnbmF2LnRpdGxlJzogJ1RocmVlIFBpbGxhcnMgXFx1MDBCNyBOYXYnLFxuXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAnZW5naW5lLnRpdGxlJzogJ0VuZ2luZSBTdGF0ZScsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdObyBlbmdpbmUgc3RhdGUgZGF0YSB5ZXQuJyxcblxuICAgICd3ZWVrbHkudGl0bGUnOiAnV2Vla2x5IFJlY29yZCBEaXN0cmlidXRpb24nLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnTm8gZGFpbHkgcmVjb3JkcyB0aGlzIHdlZWsuJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IGl0ZW1zJyxcblxuICAgICdhaS50aXRsZSc6ICdBSSBDaGF0JyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnQXNrIGFib3V0IHRoZSBLT1MgdmF1bHQuLi4nLFxuICAgICdhaS53ZWxjb21lJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdTZW5kJyxcbiAgICAnYWkuY2xlYXJCdG4nOiAnQ2xlYXIgQ2hhdCcsXG4gICAgJ2FpLnRoaW5raW5nJzogJ1RoaW5raW5nLi4uJyxcbiAgICAnYWkubmVlZENvbmZpZyc6ICdObyBGTE9Xbm90ZSBjb25maWcgZGV0ZWN0ZWQgYW5kIG5vIG1hbnVhbCBBUEkgc2V0dGluZ3MgZm91bmQuIENvbmZpZ3VyZSBBSSBQcm92aWRlciBpbiBGTE9Xbm90ZSwgb3IgZmlsbCBpbiBtYW51YWxseSBpbiBDb2NrcGl0IHNldHRpbmdzLicsXG4gICAgJ2FpLmVycm9yJzogJ1JlcXVlc3QgZmFpbGVkOiB7bXNnfScsXG4gICAgJ2FpLnJldHJ5JzogJ1JldHJ5JyxcbiAgICAnYWkuY29weSc6ICdDb3B5JyxcbiAgICAnYWkuY29waWVkJzogJ0NvcGllZCcsXG5cbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdDb25maWd1cmUgQVBJIGFjY2VzcyBmb3IgdGhlIEFJIGNoYXQuIElmIEZMT1dub3RlIGhhcyBBSSBQcm92aWRlciBjb25maWd1cmVkIChyZWNvbW1lbmRlZCksIENvY2twaXQgd2lsbCBhdXRvLWRldGVjdCBpdC4gTGVhdmUgZW1wdHkgdG8gZGlzYWJsZS4nLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ01vZGVsIE5hbWUnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1lvdSBhcmUgYSBrbm93bGVkZ2UgbWFuYWdlbWVudCBhc3Npc3RhbnQgaGVscGluZyB0aGUgdXNlciBuYXZpZ2F0ZSB0aGVpciBLT1MgdmF1bHQuJyxcblxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ0dlbmVyYWwnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdJbnRlcmZhY2UgTGFuZ3VhZ2UnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnQ2hvb3NlIHRoZSBkaXNwbGF5IGxhbmd1YWdlIGZvciB0aGUgZGFzaGJvYXJkLicsXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1xcdTdCODBcXHU0RjUzXFx1NEUyRFxcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1xcdTdFNDFcXHU5QUQ0XFx1NEUyRFxcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdBdXRvLW9wZW4gb24gc3RhcnR1cCcsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdBdXRvbWF0aWNhbGx5IG9wZW4gdGhlIEtPUyBDb2NrcGl0IHdoZW4gT2JzaWRpYW4gc3RhcnRzLicsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJzogJ1RvZ2dsZSB3aGljaCBzZWN0aW9ucyBhcHBlYXIgb24gdGhlIGNvY2twaXQgZGFzaGJvYXJkLicsXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnTWF4IHJlY2VudCBpdGVtcycsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnTnVtYmVyIG9mIHJlY2VudGx5IG1vZGlmaWVkIGZpbGVzIHRvIHNob3cgKG1heCAyMCkuJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnTWF4IHRhc2sgaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnTnVtYmVyIG9mIGRhaWx5LW5vdGUgdGFza3MgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdNYXggaW5ib3ggaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnTnVtYmVyIG9mIGluYm94IGZpbGUgbmFtZXMgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdBYm91dCcsXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnVmVyc2lvbicsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcXHUyMDE0IEEga25vd2xlZGdlIG1hbmFnZW1lbnQgZGFzaGJvYXJkIGZvciB0aGUgS09TX0xMTS1XaWtpIHZhdWx0LiBQYXJ0IG9mIHRoZSBLT1MgZWNvc3lzdGVtLicsXG4gIH0sXG5cbiAgJ3poLXR3Jzoge1xuICAgICdhcHAubmFtZSc6ICdLT1MgQ29ja3BpdCcsXG4gICAgJ2FwcC5sb2FkaW5nJzogJ1x1NkI2M1x1NTcyOFx1OEYwOVx1NTE2NSBLT1MgQ29ja3BpdC4uLicsXG4gICAgJ2FwcC5lcnJvcic6ICdcdThGMDlcdTUxNjVcdTUxMDBcdTg4NjhcdTY3N0ZcdTY2NDJcdTc2N0NcdTc1MUZcdTkzMkZcdThBQTRcdTMwMDInLFxuXG4gICAgJ2hlYWRlci5kYXRlRm9ybWF0JzogJ1lZWVktTU0tREQnLFxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdcdTZCQ0ZcdTY1RTVcdTdCNDZcdThBMTggW3tzdGF0dXN9XScsXG4gICAgJ2hlYWRlci5ub3RlQ3JlYXRlZCc6ICdcdTVERjJcdTVFRkFcdTdBQ0InLFxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnXHU2NzJBXHU1RUZBXHU3QUNCJyxcbiAgICAnaGVhZGVyLnRvZGF5Rm9jdXMnOiAnXHU0RUNBXHU2NUU1XHU3MTI2XHU5RURFOiB7Zm9jdXN9JyxcbiAgICAnaGVhZGVyLmZvY3VzTm90U2V0JzogJyhcdTY3MkFcdThBMkRcdTVCOUEpJyxcblxuICAgICdkYXkuc3VuJzogJ1x1NjVFNScsXG4gICAgJ2RheS5tb24nOiAnXHU0RTAwJyxcbiAgICAnZGF5LnR1ZSc6ICdcdTRFOEMnLFxuICAgICdkYXkud2VkJzogJ1x1NEUwOScsXG4gICAgJ2RheS50aHUnOiAnXHU1NkRCJyxcbiAgICAnZGF5LmZyaSc6ICdcdTRFOTQnLFxuICAgICdkYXkuc2F0JzogJ1x1NTE2RCcsXG5cbiAgICAnYWN0aW9uLnBsYW5Ub2RheSc6ICdcdTg5OEZcdTUyODNcdTRFQ0FcdTU5MjknLFxuICAgICdhY3Rpb24uY2FwdHVyZSc6ICdcdTVGRUJcdTkwMUZcdTYzNTVcdTYzNDknLFxuICAgICdhY3Rpb24uZGF5UmV2aWV3JzogJ1x1NkJDRlx1NjVFNVx1NTZERVx1OTg2NycsXG4gICAgJ2FjdGlvbi5uZXdQcm9qZWN0JzogJ1x1NjVCMFx1NUVGQVx1NUMwOFx1Njg0OCcsXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcbiAgICAnYWN0aW9uLnNldHRpbmdzJzogJ1x1OEEyRFx1NUI5QScsXG4gICAgJ2FjdGlvbi5haUNoYXQnOiAnQUkgQ2hhdCcsXG5cbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDknLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2QUJcdTcxMjFcdTRFRkJcdTUyRDlcdTMwMDInLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCNDZcdThBMThcdTY3MkFcdTVFRkFcdTdBQ0JcdTMwMDJcdTlFREVcdTY0Q0EgW1x1ODk4Rlx1NTI4M1x1NEVDQVx1NTkyOV0gXHU1RUZBXHU3QUNCXHUzMDAyJyxcblxuICAgICdwcm9qZWN0LnRpdGxlJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4XHUzMDAyJyxcblxuICAgICdzdGF0cy50aXRsZSc6ICdcdTc3RTVcdThCNThcdTVFQUJcdTdENzFcdThBMDgnLFxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1x1N0UzRFx1N0I0Nlx1OEExOCcsXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1x1NEVDQVx1NjVFNVx1NjVCMFx1NTg5RScsXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnXHU1Rjg1XHU1MjA2XHU5ODVFJyxcblxuICAgICdyZWNlbnQudGl0bGUnOiAnXHU2NzAwXHU4RkQxXHU2RDNCXHU1MkQ1JyxcbiAgICAncmVjZW50LmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NkQzQlx1NTJENVx1MzAwMicsXG5cbiAgICAnbmF2LnRpdGxlJzogJ1x1NEUwOVx1NjUyRlx1NjdGMSBcdTAwQjcgXHU1QzBFXHU4MjJBJyxcblxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxuICAgICdpbmJveC5tb3JlJzogJyt7Y291bnR9IG1vcmUuLi4nLFxuXG4gICAgJ2VuZ2luZS50aXRsZSc6ICdcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEInLFxuICAgICdlbmdpbmUuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU1RjE1XHU2NENFXHU3MkMwXHU2MTRCXHU4Q0M3XHU2NTk5XHUzMDAyJyxcblxuICAgICd3ZWVrbHkudGl0bGUnOiAnXHU2NzJDXHU5MDMxXHU4QTE4XHU5MzA0XHU1MjA2XHU0RjQ4JyxcbiAgICAnd2Vla2x5LmVtcHR5JzogJ1x1NjcyQ1x1OTAzMVx1NjZBQlx1NzEyMVx1NjVFNVx1OEExOFx1OEExOFx1OTMwNFx1MzAwMicsXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBcdTY4OUQnLFxuXG4gICAgJ2FpLnRpdGxlJzogJ0FJIFx1NUMwRFx1OEE3MScsXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEE2Mlx1NTU0RiBLT1MgXHU3N0U1XHU4QjU4XHU1RUFCLi4uJyxcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdcdTc2N0NcdTkwMDEnLFxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVDMERcdThBNzEnLFxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxuICAgICdhaS5uZWVkQ29uZmlnJzogJ1x1NjcyQVx1NTA3NVx1NkUyQ1x1NTIzMCBGTE9Xbm90ZSBcdTkxNERcdTdGNkVcdUZGMENcdTRFNUZcdTY3MkFcdTYyN0VcdTUyMzBcdTYyNEJcdTUyRDUgQVBJIFx1OEEyRFx1NUI5QVx1MzAwMlx1OEFDQlx1NTcyOCBGTE9Xbm90ZSBcdTRFMkRcdTkxNERcdTdGNkUgQUkgUHJvdmlkZXJcdUZGMENcdTYyMTZcdTU3MjggQ29ja3BpdCBcdThBMkRcdTVCOUFcdTRFMkRcdTYyNEJcdTUyRDVcdTU4NkJcdTVCRUJcdTMwMDInLFxuICAgICdhaS5lcnJvcic6ICdcdThBQ0JcdTZDNDJcdTU5MzFcdTY1NTc6IHttc2d9JyxcbiAgICAnYWkucmV0cnknOiAnXHU5MUNEXHU4QTY2JyxcbiAgICAnYWkuY29weSc6ICdcdTg5MDdcdTg4RkQnLFxuICAgICdhaS5jb3BpZWQnOiAnXHU1REYyXHU4OTA3XHU4OEZEJyxcblxuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxuICAgICdhaS5wcm92aWRlclNlY3Rpb25EZXNjJzogJ1x1OTE0RFx1N0Y2RSBBSSBcdTVDMERcdThBNzFcdTc2ODQgQVBJIFx1NjNBNVx1NTE2NVx1NTNDM1x1NjU3OFx1MzAwMlx1ODJFNSBGTE9Xbm90ZSBcdTVERjJcdTkxNERcdTdGNkUgQUkgUHJvdmlkZXJcdUZGMDhcdTYzQThcdTg1QTZcdUZGMDlcdUZGMENDb2NrcGl0IFx1NUMwN1x1ODFFQVx1NTJENVx1OEI4MFx1NTNENlx1NTE3Nlx1OEEyRFx1NUI5QVx1MzAwMlx1NzU1OVx1N0E3QVx1NTI0N1x1ODA0QVx1NTkyOVx1NTM0MFx1NEUwRFx1NTNFRlx1NzUyOFx1MzAwMicsXG4gICAgJ2FpLmFwaUVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcbiAgICAnYWkubW9kZWwnOiAnXHU2QTIxXHU1NzhCXHU1NDBEXHU3QTMxJyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0JzogJ1x1N0NGQlx1N0Q3MVx1NjNEMFx1NzkzQVx1OEE1RScsXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1x1NEY2MFx1NjYyRlx1NEUwMFx1NTAwQlx1NzdFNVx1OEI1OFx1N0JBMVx1NzQwNlx1NTJBOVx1NjI0Qlx1RkYwQ1x1NUU2Qlx1NTJBOVx1NzUyOFx1NjIzNlx1ODY1NVx1NzQwNiBLT1MgXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAyJyxcblxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ1x1NEUwMFx1ODIyQycsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NEVDQlx1OTc2Mlx1OEE5RVx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwNzhcdTY0QzdcdTUxMDBcdTg4NjhcdTY3N0ZcdTc2ODRcdTk4NkZcdTc5M0FcdThBOUVcdThBMDBcdTMwMDInLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTU1Rlx1NTJENVx1NjY0Mlx1ODFFQVx1NTJENVx1OTU4Qlx1NTU1RicsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTk1OEJcdTU1NUYgS09TIENvY2twaXRcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnXHU1MTAwXHU4ODY4XHU2NzdGXHU1MzQwXHU1ODRBJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTUxMDBcdTg4NjhcdTY3N0ZcdTRFMEFcdTU0MDRcdTUzNDBcdTU4NEFcdTc2ODRcdTk4NkZcdTc5M0FcdTMwMDInLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ1x1OENDN1x1NjU5OVx1OTY1MFx1NTIzNicsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudCc6ICdcdTY3MDBcdTU5MjdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDVcdTY1NzgnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJzogJ1x1OTg2Rlx1NzkzQVx1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NkE5NFx1Njg0OFx1NzY4NFx1NjU3OFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ1x1NjcwMFx1NTkyN1x1NEVGQlx1NTJEOVx1NjU3OCcsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzRGVzYyc6ICdcdTk4NkZcdTc5M0FcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDlcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdcdTY3MDBcdTU5MjcgSW5ib3ggXHU2NTc4JyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ1x1OTg2Rlx1NzkzQSBJbmJveCBcdTZBOTRcdTU0MERcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdcdTk1RENcdTY1QkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uJzogJ1x1NzI0OFx1NjcyQycsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgS09TX0xMTS1XaWtpIFx1NzdFNVx1OEI1OFx1N0JBMVx1NzQwNlx1NTEwMFx1ODg2OFx1Njc3Rlx1MzAwMktPUyBcdTc1MUZcdTYxNEJcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdTMwMDInLFxuICB9LFxufTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBrZXkgdXNpbmcgdGhlIGN1cnJlbnQgbG9jYWxlLlxuICogU3VwcG9ydHMge3BsYWNlaG9sZGVyfSBzdWJzdGl0dXRpb24gdmlhIHRoZSBwYXJhbXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0KGtleSwgbG9jYWxlLCBwYXJhbXMgPSB7fSkge1xuICBjb25zdCBkaWN0ID0gTE9DQUxFU1tsb2NhbGVdIHx8IExPQ0FMRVNbJ3poLWNuJ107XG4gIGxldCB0ZXh0ID0gZGljdFtrZXldO1xuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGV4dCA9IExPQ0FMRVNbJ3poLWNuJ11ba2V5XTtcbiAgfVxuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhwYXJhbXMpKSB7XG4gICAgdGV4dCA9IFN0cmluZyh0ZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7JHtrfVxcXFx9YCwgJ2cnKSwgU3RyaW5nKHYpKTtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHQsIExPQ0FMRVMsIExPQ0FMRV9LRVlTOiBPYmplY3Qua2V5cyhMT0NBTEVTKSB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBBSSBDaGF0IFNlcnZpY2Vcbi8vIFByb3ZpZGVyLWJhc2VkIGNoYXQgd2l0aCBGTE9Xbm90ZSBmYWxsYmFjay5cblxuY29uc3QgREVGQVVMVF9TWVNURU1fUFJPTVBUID0gJ1lvdSBhcmUgYSBrbm93bGVkZ2UgbWFuYWdlbWVudCBhc3Npc3RhbnQgaGVscGluZyB0aGUgdXNlciBuYXZpZ2F0ZSB0aGVpciBLT1MgdmF1bHQuIFJlc3BvbmQgY29uY2lzZWx5IGluIHRoZSB1c2VyXFwncyBsYW5ndWFnZS4nO1xuXG4vKipcbiAqIFJlc29sdmUgYWN0aXZlIHByb3ZpZGVyIGNvbmZpZyBmcm9tIENvY2twaXQgc2V0dGluZ3MuXG4gKiBGYWxscyBiYWNrIHRvIEZMT1dub3RlIGF1dG8tZGV0ZWN0IGlmIG5vIHByb3ZpZGVyIGhhcyBhcGlLZXkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVQcm92aWRlckNvbmZpZyhzZXR0aW5ncywgdmF1bHRBZGFwdGVyKSB7XG4gIGlmICghc2V0dGluZ3MpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHBpZCA9IHNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyIHx8ICdjbGF1ZGUnO1xuICBjb25zdCBwcm92aWRlciA9IHNldHRpbmdzLnByb3ZpZGVycyAmJiBzZXR0aW5ncy5wcm92aWRlcnNbcGlkXTtcblxuICAvLyBJZiB0aGUgc2VsZWN0ZWQgcHJvdmlkZXIgaGFzIGFuIEFQSSBrZXksIHVzZSBpdFxuICBpZiAocHJvdmlkZXIgJiYgcHJvdmlkZXIuYXBpS2V5ICYmIHByb3ZpZGVyLmVuZHBvaW50ICYmIHByb3ZpZGVyLm1vZGVsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVySWQ6IHBpZCxcbiAgICAgIGFwaUtleTogcHJvdmlkZXIuYXBpS2V5LFxuICAgICAgbW9kZWw6IHByb3ZpZGVyLm1vZGVsLFxuICAgICAgYmFzZVVybDogcHJvdmlkZXIuZW5kcG9pbnQsXG4gICAgICBzeXN0ZW1Qcm9tcHQ6IHByb3ZpZGVyLnN5c3RlbVByb21wdCB8fCAnJyxcbiAgICAgIGxhYmVsOiBwcm92aWRlci5sYWJlbCB8fCBwaWQsXG4gICAgfTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrOiB0cnkgYW55IHByb3ZpZGVyIHRoYXQgaGFzIGFuIEFQSSBrZXlcbiAgY29uc3QgcHJvdmlkZXJJZHMgPSBbJ2NsYXVkZScsICdjb2RleCcsICdvcGVuY29kZSddO1xuICBmb3IgKGNvbnN0IGlkIG9mIHByb3ZpZGVySWRzKSB7XG4gICAgY29uc3QgcCA9IHNldHRpbmdzLnByb3ZpZGVycyAmJiBzZXR0aW5ncy5wcm92aWRlcnNbaWRdO1xuICAgIGlmIChwICYmIHAuYXBpS2V5ICYmIHAuZW5kcG9pbnQgJiYgcC5tb2RlbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZXJJZDogaWQsXG4gICAgICAgIGFwaUtleTogcC5hcGlLZXksXG4gICAgICAgIG1vZGVsOiBwLm1vZGVsLFxuICAgICAgICBiYXNlVXJsOiBwLmVuZHBvaW50LFxuICAgICAgICBzeXN0ZW1Qcm9tcHQ6IHAuc3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgICBsYWJlbDogcC5sYWJlbCB8fCBpZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gTGFzdCBmYWxsYmFjazogRkxPV25vdGUgYXV0by1kZXRlY3RcbiAgaWYgKHZhdWx0QWRhcHRlciAmJiB0eXBlb2YgdmF1bHRBZGFwdGVyLnJlYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdmF1bHRBZGFwdGVyLnJlYWQoJy5vYnNpZGlhbi9wbHVnaW5zL2Zsb3dub3RlL2RhdGEuanNvbicpO1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgY29uc3QgYXAgPSBjb25maWcgJiYgY29uZmlnLnNldHRpbmdzICYmIGNvbmZpZy5zZXR0aW5ncy5hZ2VudFByb3ZpZGVyO1xuICAgICAgaWYgKGFwICYmIGFwLmVuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0ID0gYXAuZGlyZWN0IHx8IGFwW2FwLm1vZGVdO1xuICAgICAgICBpZiAoZGlyZWN0KSB7XG4gICAgICAgICAgY29uc3QgcHJvdmlkZXJJZCA9IGRpcmVjdC5wcm92aWRlcklkO1xuICAgICAgICAgIGNvbnN0IGFwaUtleXMgPSBkaXJlY3QuYXBpS2V5cyB8fCB7fTtcbiAgICAgICAgICBjb25zdCBhcGlLZXkgPSBhcGlLZXlzW3Byb3ZpZGVySWRdO1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gZGlyZWN0Lm1vZGVsIHx8ICcnO1xuICAgICAgICAgIGlmIChhcGlLZXkgJiYgbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHByb3ZpZGVySWQsXG4gICAgICAgICAgICAgIGFwaUtleSxcbiAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgIGJhc2VVcmw6IGRpcmVjdC5iYXNlVXJsT3ZlcnJpZGUgfHwgJ2h0dHBzOi8vYXBpLmRlZXBzZWVrLmNvbS92MScsXG4gICAgICAgICAgICAgIHN5c3RlbVByb21wdDogJycsXG4gICAgICAgICAgICAgIGxhYmVsOiAnRkxPV25vdGU6ICcgKyBwcm92aWRlcklkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIHt9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4vLyBBSUNoYXQgY2xhc3Ncbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jbGFzcyBBSUNoYXQge1xuICBjb25zdHJ1Y3RvcihjZmcpIHtcbiAgICB0aGlzLmNmZyA9IGNmZyB8fCB7fTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgIHRoaXMuX2FkZFdlbGNvbWUoKTtcbiAgfVxuXG4gIGdldCBfbG9jYWxlKCkgeyByZXR1cm4gKHRoaXMuY2ZnICYmIHRoaXMuY2ZnLmxvY2FsZSkgfHwgJ3poLWNuJzsgfVxuXG4gIGdldCBpc0NvbmZpZ3VyZWQoKSB7XG4gICAgY29uc3QgYyA9IHRoaXMuY2ZnIHx8IHt9O1xuICAgIHJldHVybiAhIShjLmJhc2VVcmwgJiYgYy5hcGlLZXkgJiYgYy5tb2RlbCk7XG4gIH1cblxuICBnZXQgcHJvdmlkZXJMYWJlbCgpIHtcbiAgICBjb25zdCBjID0gdGhpcy5jZmcgfHwge307XG4gICAgcmV0dXJuIGMubGFiZWwgfHwgYy5iYXNlVXJsIHx8ICdVbmtub3duJztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLl9hZGRXZWxjb21lKCk7XG4gIH1cblxuICBnZXRIaXN0b3J5KCkgeyByZXR1cm4gdGhpcy5tZXNzYWdlcy5zbGljZSgpOyB9XG5cbiAgc2VuZE1lc3NhZ2UoY29udGVudCwgY2FsbGJhY2tzID0ge30pIHtcbiAgICBjb25zdCB7IG9uVG9rZW4sIG9uRG9uZSwgb25FcnJvciB9ID0gY2FsbGJhY2tzO1xuICAgIGNvbnN0IGMgPSB0aGlzLmNmZyB8fCB7fTtcblxuICAgIGlmICghdGhpcy5pc0NvbmZpZ3VyZWQpIHtcbiAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKG5ldyBFcnJvcignQUkgbm90IGNvbmZpZ3VyZWQnKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IFN0cmluZyhjb250ZW50KS50cmltKCkgfSk7XG5cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSAoYy5zeXN0ZW1Qcm9tcHQgfHwgJycpLnRyaW0oKSB8fCBERUZBVUxUX1NZU1RFTV9QUk9NUFQ7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1vZGVsOiBjLm1vZGVsLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgeyByb2xlOiAnc3lzdGVtJywgY29udGVudDogc3lzdGVtUHJvbXB0IH0sXG4gICAgICAgIC4uLnRoaXMubWVzc2FnZXMuZmlsdGVyKChtKSA9PiBtLnJvbGUgIT09ICdzeXN0ZW0nKSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHNpZ25hbCA9IHRoaXMuYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcblxuICAgIGxldCBmdWxsUmVzcG9uc2UgPSAnJztcblxuICAgIHRoaXMuX2RvU3RyZWFtUmVxdWVzdChjLmJhc2VVcmwsIGMuYXBpS2V5LCBwYXlsb2FkLCBzaWduYWwsIHtcbiAgICAgIG9uVG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBmdWxsUmVzcG9uc2UgKz0gdG9rZW47XG4gICAgICAgIGlmIChvblRva2VuKSBvblRva2VuKHRva2VuKTtcbiAgICAgIH0sXG4gICAgICBvbkRvbmU6ICgpID0+IHtcbiAgICAgICAgaWYgKGZ1bGxSZXNwb25zZSkgdGhpcy5tZXNzYWdlcy5wdXNoKHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IGZ1bGxSZXNwb25zZSB9KTtcbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICBpZiAob25Eb25lKSBvbkRvbmUoZnVsbFJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmFsO1xuICB9XG5cbiAgYWJvcnQoKSB7XG4gICAgaWYgKHRoaXMuYWJvcnRDb250cm9sbGVyKSB7IHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7IHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDsgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFByaXZhdGUgXHUyNTAwXHUyNTAwXG5cbiAgX2FkZFdlbGNvbWUoKSB7XG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5fbG9jYWxlO1xuICAgIGNvbnN0IHdlbGNvbWVzID0ge1xuICAgICAgJ3poLWNuJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxuICAgICAgJ2VuJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcbiAgICAgICd6aC10dyc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcbiAgICB9O1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiB3ZWxjb21lc1tsb2NhbGVdIHx8IHdlbGNvbWVzWyd6aC1jbiddIH0pO1xuICB9XG5cbiAgYXN5bmMgX2RvU3RyZWFtUmVxdWVzdChiYXNlVXJsLCBhcGlLZXksIHBheWxvYWQsIHNpZ25hbCwgY2FsbGJhY2tzKSB7XG4gICAgY29uc3QgeyBvblRva2VuLCBvbkRvbmUsIG9uRXJyb3IgfSA9IGNhbGxiYWNrcztcblxuICAgIGxldCBlbmRwb2ludCA9IFN0cmluZyhiYXNlVXJsIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFlbmRwb2ludCkgZW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSc7XG4gICAgaWYgKCEvXFwvY2hhdFxcL2NvbXBsZXRpb25zJC9pLnRlc3QoZW5kcG9pbnQpKSB7XG4gICAgICBlbmRwb2ludCA9IGVuZHBvaW50LnJlcGxhY2UoL1xcLyskLywgJycpICsgJy9jaGF0L2NvbXBsZXRpb25zJztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBTdHJpbmcoYXBpS2V5IHx8ICcnKS50cmltKCksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4ucGF5bG9hZCwgc3RyZWFtOiB0cnVlIH0pLFxuICAgICAgICBzaWduYWwsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgZXJyQm9keSA9ICcnO1xuICAgICAgICB0cnkgeyBlcnJCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyB9IGNhdGNoIHt9XG4gICAgICAgIGNvbnN0IGVyck1zZyA9ICdIVFRQICcgKyByZXNwb25zZS5zdGF0dXMgKyAoZXJyQm9keSA/ICc6ICcgKyBlcnJCb2R5LnNsaWNlKDAsIDIwMCkgOiAnJyk7XG4gICAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKG5ldyBFcnJvcihlcnJNc2cpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgICAgbGV0IGJ1ZmZlciA9ICcnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG4gICAgICAgIGJ1ZmZlciArPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSwgeyBzdHJlYW06IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gYnVmZmVyLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgICAgIGlmICghdHJpbW1lZCB8fCB0cmltbWVkID09PSAnZGF0YTogW0RPTkVdJykgY29udGludWU7XG4gICAgICAgICAgaWYgKCF0cmltbWVkLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSBjb250aW51ZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodHJpbW1lZC5zbGljZSg2KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGpzb24uY2hvaWNlcyAmJiBqc29uLmNob2ljZXNbMF0gJiYganNvbi5jaG9pY2VzWzBdLmRlbHRhO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRlbHRhICYmIGRlbHRhLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBvblRva2VuKSBvblRva2VuKGNvbnRlbnQpO1xuICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYnVmZmVyLnRyaW0oKSkge1xuICAgICAgICBjb25zdCB0ID0gYnVmZmVyLnRyaW0oKTtcbiAgICAgICAgaWYgKHQuc3RhcnRzV2l0aCgnZGF0YTogJykgJiYgdCAhPT0gJ2RhdGE6IFtET05FXScpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodC5zbGljZSg2KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGpzb24uY2hvaWNlcyAmJiBqc29uLmNob2ljZXNbMF0gJiYganNvbi5jaG9pY2VzWzBdLmRlbHRhO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRlbHRhICYmIGRlbHRhLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBvblRva2VuKSBvblRva2VuKGNvbnRlbnQpO1xuICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob25Eb25lKSBvbkRvbmUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSByZXR1cm47XG4gICAgICBpZiAob25FcnJvcikgb25FcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQUlDaGF0LCByZXNvbHZlUHJvdmlkZXJDb25maWcsIERFRkFVTFRfU1lTVEVNX1BST01QVCB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzaGFyZWQgdXRpbGl0aWVzXG5cbi8qKlxuICogUGFyc2UgZnJvbnRtYXR0ZXIgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICogUmV0dXJucyB7fSBpZiBubyB2YWxpZCBmcm9udG1hdHRlciBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoY29udGVudCB8fCAnJyk7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXi0tLVxcbihbXFxzXFxTXSo/KVxcbi0tLS8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG5cbiAgY29uc3Qgb3V0ID0ge307XG4gIG1hdGNoWzFdLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghaXRlbSB8fCBpdGVtLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbG9uID0gaXRlbS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGNvbG9uIDw9IDApIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBpdGVtLnNsaWNlKDAsIGNvbG9uKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gaXRlbS5zbGljZShjb2xvbiArIDEpLnRyaW0oKTtcbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkuc3BsaXQoJywnKS5tYXAoKHApID0+IHAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIG91dFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCBmcm9udG1hdHRlciB2YWx1ZSBieSBtdWx0aXBsZSBwb3NzaWJsZSBrZXkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGZtVmFsdWUoZnJvbnRtYXR0ZXIsIGtleXMsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgJiYgdHlwZW9mIGZyb250bWF0dGVyID09PSAnb2JqZWN0JyA/IGZyb250bWF0dGVyIDoge307XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZtLCBrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZtW2tleV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgICAgaWYgKHRleHQpIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogRm9ybWF0IGRhdGUgdG8gWVlZWS1NTS1ERCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGVTdHIoZGF0ZSkge1xuICBjb25zdCBkID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBLT1MgZGFpbHkgbm90ZSBwYXRoIGZvciBhIGdpdmVuIGRhdGUuXG4gKiBLT1MgY29udmVudGlvbjogUGVyaW9kaWMvWVlZWS9NTS9ZWVlZLU1NLURELm1kXG4gKi9cbmZ1bmN0aW9uIGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cikge1xuICBjb25zdCBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGBQZXJpb2RpYy8ke3BhcnRzWzBdfS8ke3BhcnRzWzFdfS8ke2RhdGVTdHJ9Lm1kYDtcbn1cblxuLyoqXG4gKiBHZXQgZmlsZSBieSBwYXRoIGZyb20gdmF1bHQsIHJldHVybmluZyBudWxsIGlmIG1pc3NpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVCeVBhdGgodmF1bHQsIHBhdGgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSByZWFkIGZpbGUgdGV4dCBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkRmlsZVRleHQodmF1bHQsIGZpbGUpIHtcbiAgaWYgKCF2YXVsdCB8fCAhZmlsZSkgcmV0dXJuICcnO1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmF1bHQuY2FjaGVkUmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKTtcbiAgICBpZiAodHlwZW9mIHZhdWx0LnJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQucmVhZChmaWxlKSB8fCAnJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0YXNrIHN0YXRzIChvcGVuL2RvbmUvdG90YWwpIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgb3BlbiA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdXFxzKy8udGVzdChsaW5lKSkge1xuICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbW3hYXVxcXVxccysvLnRlc3QobGluZSkpIGRvbmUgKz0gMTtcbiAgICAgIGVsc2Ugb3BlbiArPSAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3BlbixcbiAgICBkb25lLFxuICAgIHRvdGFsOiBvcGVuICsgZG9uZSxcbiAgICBjb21wbGV0aW9uUmF0ZTogb3BlbiArIGRvbmUgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIChvcGVuICsgZG9uZSkpICogMTAwKSA6IDAsXG4gIH07XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFuZCBjbGVhbiBhIGZpbGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gIHJldHVybiBTdHJpbmcocGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLysvZywgJy8nKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzeXN0ZW0vaW50ZXJuYWwgcGF0aCB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHN0YXRzLlxuICovXG5mdW5jdGlvbiBpc1N5c3RlbVBhdGgocGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gIGlmICgvKF58XFwvKVxcLlteL10rKFxcL3wkKS8udGVzdCh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX2xvZ3MvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX21ldGEvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGcm9udG1hdHRlcixcbiAgZm1WYWx1ZSxcbiAgZm9ybWF0RGF0ZVN0cixcbiAgZGFpbHlOb3RlUGF0aCxcbiAgZ2V0RmlsZUJ5UGF0aCxcbiAgcmVhZEZpbGVUZXh0LFxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcbiAgbm9ybWFsaXplUGF0aCxcbiAgaXNTeXN0ZW1QYXRoLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcHJvamVjdCBzY2FubmluZyBzZXJ2aWNlXG5cbmNvbnN0IHsgcGFyc2VGcm9udG1hdHRlciwgZm1WYWx1ZSwgcmVhZEZpbGVUZXh0LCB0YXNrU3RhdHNGcm9tQ29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIFNjYW4gMSBQcm9qZWN0cy8gZGlyZWN0b3JpZXMgYW5kIGJ1aWxkIGEgbGlzdCBvZiBwcm9qZWN0IG92ZXJ2aWV3IGZpbGVzLlxuICovXG5mdW5jdGlvbiBmaW5kUHJvamVjdEZpbGVzKHZhdWx0KSB7XG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gU3RyaW5nKGZpbGUucGF0aCB8fCAnJyk7XG4gICAgLy8gTWF0Y2g6IDEgUHJvamVjdHMvPHByb2plY3QtZGlyPi88cHJvamVjdC1uYW1lPi5tZFxuICAgIC8vIEV4Y2x1ZGU6IFx1OTg3OVx1NzZFRVx1NjAzQlx1ODlDOC5tZCwgUkVBRE1FLm1kXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5zcGxpdCgnLycpLmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdSRUFETUUubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdcXHVEODNEXFx1RENDRCBcXHU5ODc5XFx1NzZFRVxcdTYwM0JcXHU4OUM4Lm1kJykpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2UgcHJvamVjdCBtZXRhZGF0YSBmcm9tIGEgZmlsZSdzIGNvbnRlbnQgYW5kIE9ic2lkaWFuIG1ldGFkYXRhIGNhY2hlLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgbWV0YWRhdGFDYWNoZSkge1xuICBjb25zdCBmbSA9IHtcbiAgICAuLi5wYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpLFxuICB9O1xuXG4gIC8vIFRyeSB0byBnZXQgcmljaGVyIGZyb250bWF0dGVyIGZyb20gbWV0YWRhdGEgY2FjaGVcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZSA9IG1ldGFkYXRhQ2FjaGUgJiYgdHlwZW9mIG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmZyb250bWF0dGVyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZtLCBjYWNoZS5mcm9udG1hdHRlcik7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgY29uc3Qgc3RhdHVzID0gZm1WYWx1ZShmbSwgWydzdGF0dXMnLCAnU3RhdHVzJ10sICdhY3RpdmUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmbVZhbHVlKGZtLCBbJ3ByaW9yaXR5JywgJ1ByaW9yaXR5J10sICcnKTtcbiAgY29uc3QgaXRlcmF0aW9uID0gZm1WYWx1ZShmbSwgWydpdGVyYXRpb24nLCAnSXRlcmF0aW9uJ10sICcnKTtcbiAgY29uc3QgYXJlYSA9IGZtVmFsdWUoZm0sIFsnYXJlYScsICdBcmVhJywgJ2RvbWFpbicsICdEb21haW4nXSwgJycpO1xuICBjb25zdCB0YWdzID0gQXJyYXkuaXNBcnJheShmbS50YWdzKSA/IGZtLnRhZ3MgOiBbXTtcblxuICAvLyBDb21wdXRlIHRhc2sgcHJvZ3Jlc3MgZnJvbSB0aGUgcHJvamVjdCBmaWxlIGNvbnRlbnRcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAvLyBHZXQgcHJvamVjdCB0aXRsZSBmcm9tIGZpcnN0IGgxIG9yIGRpcmVjdG9yeSBuYW1lXG4gIGNvbnN0IGhlYWRpbmcgPSBTdHJpbmcoY29udGVudCB8fCAnJykubWF0Y2goL14jXFxzKyguKykkL20pO1xuICBjb25zdCB0aXRsZSA9IGhlYWRpbmcgPyBoZWFkaW5nWzFdLnRyaW0oKSA6IGZpbGUuYmFzZW5hbWUgfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICB0aXRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHJpb3JpdHksXG4gICAgaXRlcmF0aW9uLFxuICAgIGFyZWEsXG4gICAgdGFncyxcbiAgICB0YXNrcyxcbiAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIGN0aW1lOiBmaWxlLnN0YXQ/LmN0aW1lIHx8IDAsXG4gIH07XG59XG5cbi8qKlxuICogTGlzdCBhbGwgcHJvamVjdHMsIHdpdGggb3B0aW9uYWwgZmlsdGVyaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFjdGl2ZU9ubHkgXHUyMDE0IG9ubHkgcmV0dXJuIGFjdGl2ZSBwcm9qZWN0c1xuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0UHJvamVjdHMoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IGZpbmRQcm9qZWN0RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBhcHAubWV0YWRhdGFDYWNoZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IGFjdGl2ZSBmaXJzdCwgdGhlbiBieSBwcmlvcml0eSwgdGhlbiBieSBtdGltZVxuICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUFjdGl2ZSA9IGEuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBjb25zdCBiQWN0aXZlID0gYi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGlmIChhQWN0aXZlICE9PSBiQWN0aXZlKSByZXR1cm4gYUFjdGl2ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IHJhbmsgPSAocCkgPT4ge1xuICAgICAgY29uc3QgdiA9IFN0cmluZyhwIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHYgPT09ICdwMScgfHwgdiA9PT0gJ2hpZ2gnKSByZXR1cm4gMDtcbiAgICAgIGlmICh2ID09PSAncDInIHx8IHYgPT09ICdtZWRpdW0nKSByZXR1cm4gMTtcbiAgICAgIGlmICh2ID09PSAncDMnIHx8IHYgPT09ICdsb3cnKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAzO1xuICAgIH07XG4gICAgY29uc3QgYnlQcmlvcml0eSA9IHJhbmsoYS5wcmlvcml0eSkgLSByYW5rKGIucHJpb3JpdHkpO1xuICAgIGlmIChieVByaW9yaXR5ICE9PSAwKSByZXR1cm4gYnlQcmlvcml0eTtcbiAgICByZXR1cm4gYi5tdGltZSAtIGEubXRpbWU7XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmFjdGl2ZU9ubHkpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLnN0YXR1cyA9PT0gJ2FjdGl2ZScpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgZW5naW5lIHN0YXRlIGZyb20gX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kIChidWxsZXQtbGlzdCBmb3JtYXQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRFbmdpbmVTdGF0ZShhcHApIHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIHRyaWFnZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNvbXBpbGU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaW5rOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgZGFpbHk6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBwcm9qZWN0OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgYXJjaGl2ZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNhbnZhczogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgICdrb3MtaW5pdCc6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaWZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gIH07XG5cbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCgnX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kJyk7XG4gIGlmICghZmlsZSkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG5cbiAgLy8gU1RBVEUubWQgdXNlcyBzZWN0aW9uLWJhc2VkIGJ1bGxldCBmb3JtYXQ6XG4gIC8vICMjIHRyaWFnZVxuICAvLyAtIGxhc3RfcnVuOiAyMDI2LTA2LTA5XG4gIC8vIC0gcGVuZGluZzogMFxuICAvLyAtIHN1bW1hcnk6IEluYm94IGNsZWFyZWRcbiAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQgY3VycmVudEVuZ2luZSA9IG51bGw7XG5cbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBsaW5lLm1hdGNoKC9eIyNcXHMrKFxcUyspXFxzKiQvKTtcbiAgICBpZiAoc2VjdGlvbiAmJiBlbmdpbmVzLmluY2x1ZGVzKHNlY3Rpb25bMV0pKSB7XG4gICAgICBjdXJyZW50RW5naW5lID0gc2VjdGlvblsxXTtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXSA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRFbmdpbmUpIHJldHVybjtcbiAgICBjb25zdCBrdiA9IGxpbmUubWF0Y2goL14tXFxzKyhcXHcrKTpcXHMqKC4qKSQvKTtcbiAgICBpZiAoa3YpIHtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXVtrdlsxXV0gPSBrdlsyXS50cmltKCkgfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5vcm1hbGl6ZSB0byB7IGxhc3RSdW4sIHN0YXR1cywgc3VtbWFyeSB9IGZvciBjb2NrcGl0IGNvbnN1bXB0aW9uXG4gIGNvbnN0IHN0YXRlID0ge307XG4gIGVuZ2luZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHBhcnNlZFtlXSB8fCB7fTtcbiAgICBzdGF0ZVtlXSA9IHtcbiAgICAgIGxhc3RSdW46IHJhdy5sYXN0X3J1biB8fCByYXcubGFzdF9kYWlseSB8fCBudWxsLFxuICAgICAgc3RhdHVzOiByYXcucGVuZGluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKE51bWJlcihyYXcucGVuZGluZykgPT09IDAgPyAnZG9uZScgOiAncGVuZGluZycpXG4gICAgICAgIDogJ3BlbmRpbmcnLFxuICAgICAgc3VtbWFyeTogcmF3LnN1bW1hcnkgfHwgbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kUHJvamVjdEZpbGVzLFxuICBwYXJzZVByb2plY3QsXG4gIGxpc3RQcm9qZWN0cyxcbiAgZ2V0RW5naW5lU3RhdGUsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IFx1OTIyNT9ob21lIGRhdGEgZW5naW5lXHJcblxyXG5jb25zdCB7XHJcbiAgcGFyc2VGcm9udG1hdHRlcixcclxuICBmbVZhbHVlLFxyXG4gIGZvcm1hdERhdGVTdHIsXHJcbiAgZGFpbHlOb3RlUGF0aCxcclxuICBnZXRGaWxlQnlQYXRoLFxyXG4gIHJlYWRGaWxlVGV4dCxcclxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcclxuICBpc1N5c3RlbVBhdGgsXHJcbiAgbm9ybWFsaXplUGF0aCxcclxufSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgeyBsaXN0UHJvamVjdHMsIGdldEVuZ2luZVN0YXRlIH0gPSByZXF1aXJlKCcuL3Byb2plY3Qtc2VydmljZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0b2RheSdzIGRhaWx5IG5vdGUgc3RhdGUuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRlKGFwcCkge1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cik7XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuXHJcbiAgaWYgKCFmaWxlKSB7XHJcbiAgICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IGZhbHNlLCBmaWxlOiBudWxsLCB0YXNrczogeyBvcGVuOjAsZG9uZTowLHRvdGFsOjAsY29tcGxldGlvblJhdGU6MCB9LCB0YXNrSXRlbXM6IFtdIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcclxuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gIGNvbnN0IHRhc2tJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZXNbaV0gfHwgJycpLm1hdGNoKC9eKFxccypbLSpdXFxzK1xcWykoWyB4WF0pKFxcXVxccyspKC4rKSQvKTtcclxuICAgIGlmICghbSkgY29udGludWU7XHJcbiAgICBjb25zdCB0ZXh0ID0gbVs0XS50cmltKCk7XHJcbiAgICBpZiAoIXRleHQpIGNvbnRpbnVlO1xyXG4gICAgdGFza0l0ZW1zLnB1c2goeyBsaW5lSW5kZXg6IGksIHRleHQsIGRvbmU6IC94L2kudGVzdChtWzJdKSB9KTtcclxuICAgIGlmICh0YXNrSXRlbXMubGVuZ3RoID49IDEyKSBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgdG9kYXkncyBmb2N1cyAoZmlyc3QgaDIgb3IgYm9sZCBsaW5lIHVuZGVyICMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjYpXHJcbiAgbGV0IGZvY3VzID0gJyc7XHJcbiAgY29uc3QgZm9jdXNNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjZbXiNdKj9cXG4oLSAuKykvKTtcclxuICBpZiAoZm9jdXNNYXRjaCkgZm9jdXMgPSBmb2N1c01hdGNoWzFdLnJlcGxhY2UoL14tIC8sICcnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogdHJ1ZSwgZmlsZSwgdGFza3MsIHRhc2tJdGVtcywgZm9jdXMsIGNvbnRlbnQgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IGZpbGVzIGluIDAgSW5ib3ggKGV4Y2x1ZGluZyBfcHJvY2Vzc2VkLykuXHJcbiAqIFJldHVybnMgVEZpbGUgb2JqZWN0cyAod2l0aCAucGF0aCwgLmJhc2VuYW1lLCAuc3RhdCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmJveEZpbGVzKHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICByZXR1cm4gcC5zdGFydHNXaXRoKCcwIEluYm94LycpICYmICFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdmF1bHQgYW5kIGNvbXB1dGUga25vd2xlZGdlIGdhcmRlbiBzdGF0aXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCB8fCB0eXBlb2YgYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuICBjb25zdCB0b2RheSA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBsZXQgdG9kYXlOZXcgPSAwO1xyXG4gIGNvbnN0IHN0YXRzID0geyByb290OjAsIHByb2plY3RzOjAsIGFyZWFzOjAsIHJlc291cmNlczowLCBpbmJveDowLCBwZXJpb2RpYzowLCBzeXN0ZW06MCB9O1xyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICBpZiAocC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSBzdGF0cy5wcm9qZWN0cyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcyIEFyZWFzLycpKSBzdGF0cy5hcmVhcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCczIFJlc291cmNlcy8nKSkgc3RhdHMucmVzb3VyY2VzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykpIHsgaWYgKCFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgc3RhdHMuaW5ib3ggKz0gMTsgfVxyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgc3RhdHMucGVyaW9kaWMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnXycpIHx8IHAuc3RhcnRzV2l0aCgnLicpKSBzdGF0cy5zeXN0ZW0gKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkge31cclxuICAgIGVsc2Ugc3RhdHMucm9vdCArPSAxO1xyXG5cclxuICAgIC8vIENvdW50IHRvZGF5LW5ldyBmaWxlc1xyXG4gICAgY29uc3QgY3RpbWUgPSBmLnN0YXQ/LmN0aW1lID8gbmV3IERhdGUoZi5zdGF0LmN0aW1lKSA6IG51bGw7XHJcbiAgICBpZiAoY3RpbWUpIHtcclxuICAgICAgY29uc3QgY2QgPSBmb3JtYXREYXRlU3RyKGN0aW1lKTtcclxuICAgICAgaWYgKGNkID09PSB0b2RheSkgdG9kYXlOZXcgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgdG90YWxOb3RlczogZmlsZXMubGVuZ3RoLCB0b2RheU5ldywgc3RhdHMgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZWNlbnQgbW9kaWZpZWQgZmlsZXMgKHRvcCAxMCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZWNlbnRBY3Rpdml0eSh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpXHJcbiAgICAuZmlsdGVyKChmKSA9PiAhaXNTeXN0ZW1QYXRoKGYucGF0aCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGIuc3RhdD8ubXRpbWUgfHwgMCkgLSAoYS5zdGF0Py5tdGltZSB8fCAwKSlcclxuICAgIC5zbGljZSgwLCAyNClcclxuICAgIC5tYXAoKGYpID0+ICh7IHBhdGg6IGYucGF0aCwgdGl0bGU6IGYuYmFzZW5hbWUgfHwgJycsIG10aW1lOiBmLnN0YXQ/Lm10aW1lIHx8IDAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGhvdCBjb250ZXh0IGZyb20gX21ldGEvaG90Lm1kXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRIb3RDb250ZXh0KGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsICdfbWV0YS9ob3QubWQnKTtcclxuICBpZiAoIWZpbGUpIHJldHVybiBbXTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KVxccypbXFx1MjAxNFxcdTIwMTNcXC1dXFxzKiguKykkLyk7XHJcbiAgICBpZiAobSkgZW50cmllcy5wdXNoKHsgZGF0ZTogbVsxXSwgc3VtbWFyeTogbVsyXS50cmltKCkgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVudHJpZXMuc2xpY2UoMCwgNSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHRoZSBjdXJyZW50IHdlZWsncyBkYWlseSBub3RlcyBmb3Igd2Vla2x5IHJlY29yZCBiYXIgY2hhcnQuXHJcbiAqIFJldHVybnMgNyBjZWxscyAoTW9uLVN1bikgd2l0aCBjYXB0dXJlIGNvdW50IHBlciBkYXkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWVrbHlSZWNvcmRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7IC8vIDA9U3VuLCAxPU1vbiAuLi5cclxuICBjb25zdCBtb25kYXlPZmZzZXQgPSBkYXlPZldlZWsgPT09IDAgPyAtNiA6IDEgLSBkYXlPZldlZWs7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgZC5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBtb25kYXlPZmZzZXQgKyBpKTtcclxuICAgIGNvbnN0IGRzID0gZm9ybWF0RGF0ZVN0cihkKTtcclxuICAgIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRzKTtcclxuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gICAgICAvLyBDb3VudCBub24tdGFzaywgbm9uLWhlYWRpbmcsIG5vbi1lbXB0eSBsaW5lcyBhcyBcImNhcHR1cmVzXCJcclxuICAgICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBpZiAoL14tLS0kLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eI3sxLDZ9XFxzKy8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eKGNyZWF0ZWR8dXBkYXRlZHx0YWdzfHN0YXR1c3xwcmlvcml0eSkvaS50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFsnXFx1NjVFNScsJ1xcdTRFMDAnLCdcXHU0RThDJywnXFx1NEUwOScsJ1xcdTU2REInLCdcXHU0RTk0JywnXFx1NTE2RCddO1xyXG4gICAgY2VsbHMucHVzaCh7IGRhdGU6IGRzLCBjb3VudCwgd2Vla2RheTogd2Vla2RheXNbaV0sIGlzVG9kYXk6IGRzID09PSBmb3JtYXREYXRlU3RyKG5vdykgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSxcclxuICBnZXRJbmJveEZpbGVzLFxyXG4gIGdldERhc2hib2FyZFN0YXRzLFxyXG4gIGdldFJlY2VudEFjdGl2aXR5LFxyXG4gIGdldEhvdENvbnRleHQsXHJcbiAgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSxcclxuICBsaXN0UHJvamVjdHMsXHJcbn07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCB2MTAgXHUyMDE0IEZMT1dub3RlLXN0eWxlIHBhbmVsIHN3aXRjaGluZyAoaG9tZSAvIGNoYXQpXG4vLyArIFNldHRpbmdzLWF3YXJlICsgbG9jYWxlIGkxOG4gKyBBSSBDaGF0IHdpdGggRkxPV25vdGUgYXV0by1kZXRlY3RcblxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0IH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuY29uc3QgeyBBSUNoYXQsIHJlc29sdmVQcm92aWRlckNvbmZpZyB9ID0gcmVxdWlyZSgnLi9haS1jaGF0Jyk7XG5jb25zdCB7XG4gIGdldFRvZGF5U3RhdGUsIGdldEluYm94RmlsZXMsIGdldERhc2hib2FyZFN0YXRzLFxuICBnZXRSZWNlbnRBY3Rpdml0eSwgZ2V0SG90Q29udGV4dCwgZ2V0V2Vla2x5UmVjb3JkcyxcbiAgZ2V0RW5naW5lU3RhdGUsIGxpc3RQcm9qZWN0cyxcbn0gPSByZXF1aXJlKCcuL2hvbWUtc2VydmljZScpO1xuXG5jb25zdCBWSUVXX1RZUEVfQ09DS1BJVCA9ICdrb3MtY29ja3BpdC12aWV3JztcblxuY2xhc3MgQ29ja3BpdFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxlYWYsIHBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuYWlDaGF0ID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gJ2hvbWUnOyAvLyAnaG9tZScgfCAnY2hhdCdcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCkgeyByZXR1cm4gVklFV19UWVBFX0NPQ0tQSVQ7IH1cbiAgZ2V0RGlzcGxheVRleHQoKSB7IHJldHVybiB0aGlzLmFjdGl2ZVBhbmVsID09PSAnY2hhdCcgPyAnS09TIEFJIENoYXQnIDogJ0tPUyBDb2NrcGl0JzsgfVxuICBnZXRJY29uKCkgeyByZXR1cm4gJ2dhdWdlJzsgfVxuXG4gIGdldCBzZXR0aW5ncygpIHsgcmV0dXJuIHRoaXMucGx1Z2luID8gdGhpcy5wbHVnaW4uc2V0dGluZ3MgOiBudWxsOyB9XG5cbiAgX3Qoa2V5LCBwYXJhbXMpIHsgcmV0dXJuIHQoa2V5LCB0aGlzLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJywgcGFyYW1zKTsgfVxuXG4gIGdldCBfZGF5TmFtZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuX3QoJ2RheS5zdW4nKSwgdGhpcy5fdCgnZGF5Lm1vbicpLCB0aGlzLl90KCdkYXkudHVlJyksXG4gICAgICB0aGlzLl90KCdkYXkud2VkJyksIHRoaXMuX3QoJ2RheS50aHUnKSwgdGhpcy5fdCgnZGF5LmZyaScpLFxuICAgICAgdGhpcy5fdCgnZGF5LnNhdCcpLFxuICAgIF07XG4gIH1cblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgc3VwZXIub25sb2FkKCk7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5hZGRDbGFzcygna29zLWNvY2twaXQtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZW5kZXJMb2FkaW5nKCkge1xuICAgIHRoaXMuY29udGVudEVsLmlubmVySFRNTCA9XG4gICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJrb3MtY29ja3BpdC1sb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgJzxzcGFuPicgKyB0aGlzLl90KCdhcHAubG9hZGluZycpICsgJzwvc3Bhbj4nICtcbiAgICAgICc8L2Rpdj4nO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IobXNnKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xuICAgIGNvbnN0IGVyckJveCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGInKTtcbiAgICBlcnJCb3guY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnYXBwLmVycm9yJyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgaWYgKG1zZykgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IFN0cmluZyhtc2cpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgUmV0cnknIH0pO1xuICAgIHJldHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLnJlbmRlckxvYWRpbmcoKTsgdGhpcy5yZWZyZXNoKCk7IH0pO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xuICAgICAgdGhpcy5yZW5kZXJQYW5lbChkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdLT1MgQ29ja3BpdCByZWZyZXNoIGVycm9yOicsIGUpO1xuICAgICAgdGhpcy5yZW5kZXJFcnJvcihlPy5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb2xsZWN0RGF0YShhcHApIHtcbiAgICBjb25zdCBbdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRUb2RheVN0YXRlKGFwcCkuY2F0Y2goKCkgPT4gbnVsbCksXG4gICAgICBsaXN0UHJvamVjdHMoYXBwLCB7IGFjdGl2ZU9ubHk6IHRydWUgfSkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKS5jYXRjaCgoKSA9PiAoeyB0b3RhbE5vdGVzOjAsIHRvZGF5TmV3OjAsIHN0YXRzOnt9IH0pKSxcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRSZWNlbnRBY3Rpdml0eShhcHAudmF1bHQpKSxcbiAgICAgIGdldEhvdENvbnRleHQoYXBwKS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXRXZWVrbHlSZWNvcmRzKGFwcCkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0RW5naW5lU3RhdGUoYXBwKS5jYXRjaCgoKSA9PiAoe30pKSxcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRJbmJveEZpbGVzKGFwcC52YXVsdCkpLFxuICAgIF0pO1xuICAgIHJldHVybiB7IHRvZGF5LCBwcm9qZWN0cywgc3RhdHMsIHJlY2VudCwgaG90LCB3ZWVrbHksIGVuZ2luZXMsIGluYm94RmlsZXMgfTtcbiAgfVxuXG4gIC8qKiBTd2l0Y2ggYmV0d2VlbiAnaG9tZScgYW5kICdjaGF0JyBwYW5lbHMgKi9cbiAgc3dpdGNoUGFuZWwocGFuZWwsIGRhdGEpIHtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gcGFuZWw7XG4gICAgdGhpcy5yZW5kZXJQYW5lbChkYXRhIHx8IG51bGwpO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIFBhbmVsIFJvdXRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXJQYW5lbChkYXRhKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29uc3QgbWFpbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwgPT09ICdjaGF0Jykge1xuICAgICAgdGhpcy5yZW5kZXJDaGF0VmlldyhtYWluLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJIb21lVmlldyhtYWluLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgSG9tZSAoRGFzaGJvYXJkKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXJIb21lVmlldyhjb250YWluZXIsIGRhdGEpIHtcbiAgICB0aGlzLnJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpO1xuICAgIHRoaXMucmVuZGVyUXVpY2tBY3Rpb25zKGNvbnRhaW5lcik7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1RvZGF5VGFza3MgIT09IGZhbHNlKSB0aGlzLnJlbmRlclRvZGF5VGFza3MoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlIHx8IHRoaXMuc2V0dGluZ3M/LnNob3dSZWNlbnRBY3Rpdml0eSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucmVuZGVyVHdvQ29sdW1ucyhjb250YWluZXIsIGRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd05hdiAhPT0gZmFsc2UpIHRoaXMucmVuZGVyTmF2KGNvbnRhaW5lcik7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dJbmJveEZpbGVzICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJJbmJveEZpbGVzKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dQcm9qZWN0Q2FyZHMgIT09IGZhbHNlKSB0aGlzLnJlbmRlclByb2plY3RzKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dFbmdpbmVTdGF0ZSAhPT0gZmFsc2UpIHRoaXMucmVuZGVyRW5naW5lU3RhdGUoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1dlZWtseUNoYXJ0ICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpO1xuXG4gIH1cblxuICByZW5kZXJIZWFkZXIoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgaCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaGVhZGVyJyB9KTtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCBkYXlOYW1lcyA9IHRoaXMuX2RheU5hbWVzO1xuICAgIGguY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIHRleHQ6ICdcXHVEODNEXFx1RENDNSAnICsgbm93LmZvcm1hdCh0aGlzLl90KCdoZWFkZXIuZGF0ZUZvcm1hdCcpKSArICcgXFx1NjYxRlxcdTY3MUYnICsgZGF5TmFtZXNbbm93LmRheSgpXSxcbiAgICAgIGNsczogJ2tvcy1kYi1oZWFkZXItZGF0ZScsXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGRhdGEudG9kYXk/LmV4aXN0c1xuICAgICAgPyB0aGlzLl90KCdoZWFkZXIubm90ZUNyZWF0ZWQnKVxuICAgICAgOiB0aGlzLl90KCdoZWFkZXIubm90ZU5vdENyZWF0ZWQnKTtcbiAgICBjb25zdCBmb2N1c1ZhbCA9IGRhdGEudG9kYXk/LmZvY3VzIHx8ICcnO1xuICAgIGguY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ2hlYWRlci5ub3RlU3RhdHVzJywgeyBzdGF0dXM6IHN0YXR1c1RleHQgfSlcbiAgICAgICAgKyAnICBcXHUwMEI3ICAnXG4gICAgICAgICsgdGhpcy5fdCgnaGVhZGVyLnRvZGF5Rm9jdXMnLCB7IGZvY3VzOiBmb2N1c1ZhbCB8fCB0aGlzLl90KCdoZWFkZXIuZm9jdXNOb3RTZXQnKSB9KSxcbiAgICAgIGNsczogJ2tvcy1kYi1oZWFkZXItc3RhdHVzJyxcbiAgICB9KTtcbiAgICBjb25zdCByZWZyZXNoQnRuID0gaC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItcmVmcmVzaC1idG4nIH0pO1xuICAgIHJlZnJlc2hCdG4uaW5uZXJIVE1MID0gJ1xcdTIxQkInO1xuICAgIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XG4gIH1cblxuICByZW5kZXJRdWlja0FjdGlvbnMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcWEgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFjdGlvbnMnIH0pO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQzUgJyArIHRoaXMuX3QoJ2FjdGlvbi5wbGFuVG9kYXknKSwgY21kOiAnZGFpbHktb3BlbicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENERCAnICsgdGhpcy5fdCgnYWN0aW9uLmNhcHR1cmUnKSwgY21kOiAnY2FwdHVyZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1REQwNCAnICsgdGhpcy5fdCgnYWN0aW9uLmRheVJldmlldycpLCBjbWQ6ICdkYXktcmV2aWV3JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0NCICcgKyB0aGlzLl90KCdhY3Rpb24ubmV3UHJvamVjdCcpLCBjbWQ6ICdwcm9qZWN0JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEREMyXFx1RkUwRiAnICsgdGhpcy5fdCgnYWN0aW9uLnRyaWFnZScpLCBjbWQ6ICd0cmlhZ2UnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1MjY5OVxcdUZFMEYgJyArIHRoaXMuX3QoJ2FjdGlvbi5zZXR0aW5ncycpLCBjbWQ6ICdzZXR0aW5ncycgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNFXFx1REQxNiAnICsgdGhpcy5fdCgnYWN0aW9uLmFpQ2hhdCcpLCBjbWQ6ICdhaS1jaGF0JyB9LFxuICAgIF07XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBxYS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWN0aW9uLWJ0bicgfSk7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBhLmxhYmVsO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmhhbmRsZVF1aWNrQWN0aW9uKGEuY21kKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVRdWlja0FjdGlvbihjbWQpIHtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgY2FzZSAnZGFpbHktb3Blbic6IHtcbiAgICAgICAgY29uc3QgeyBkYWlseU5vdGVQYXRoIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZGFpbHlOb3RlUGF0aChtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSksICcnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhaS1jaGF0Jzoge1xuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKHRoaXMuYXBwKS50aGVuKChkYXRhKSA9PiB0aGlzLnN3aXRjaFBhbmVsKCdjaGF0JywgZGF0YSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NldHRpbmdzJzoge1xuICAgICAgICBjb25zdCBzZXR0aW5nID0gdGhpcy5hcHAuc2V0dGluZztcbiAgICAgICAgaWYgKHNldHRpbmcpIHsgc2V0dGluZy5vcGVuKCk7IHNldHRpbmcub3BlblRhYkJ5SWQoJ2tvcy1jb2NrcGl0Jyk7IH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KCdfbWV0YS9ob3QubWQnLCAnJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVG9kYXlUYXNrcyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uIGtvcy1kYi10b2RheS10YXNrcycgfSk7XG4gICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItdG9kYXktaGVhZGVyJyB9KTtcbiAgICBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdTI3MDUgJyArIHRoaXMuX3QoJ3Rhc2sudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGlmIChkYXRhLnRvZGF5Py50YXNrcykge1xuICAgICAgY29uc3QgeyBkb25lLCB0b3RhbCwgY29tcGxldGlvblJhdGUgfSA9IGRhdGEudG9kYXkudGFza3M7XG4gICAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIHRleHQ6IHRoaXMuX3QoJ3Rhc2sucHJvZ3Jlc3MnLCB7IGRvbmUsIHRvdGFsLCByYXRlOiBjb21wbGV0aW9uUmF0ZSB9KSxcbiAgICAgICAgY2xzOiAna29zLWRiLXRvZGF5LWNvdW50ICcgKyAodG90YWwgPiAwICYmIGNvbXBsZXRpb25SYXRlID49IDEwMCA/ICdrb3MtZGItdG9kYXktZG9uZScgOiAnJyksXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWxpc3QnIH0pO1xuICAgIGNvbnN0IG1heEl0ZW1zID0gdGhpcy5zZXR0aW5ncz8ubWF4VGFza0l0ZW1zIHx8IDEyO1xuICAgIGNvbnN0IGl0ZW1zID0gKGRhdGEudG9kYXk/LnRhc2tJdGVtcyB8fCBbXSkuc2xpY2UoMCwgbWF4SXRlbXMpO1xuICAgIGlmICghZGF0YS50b2RheT8uZXhpc3RzKSB7XG4gICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3Rhc2suZGFpbHlNaXNzaW5nJyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgfSBlbHNlIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgndGFzay5ub25lJyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItdG9kYXktaXRlbScgKyAoaXRlbS5kb25lID8gJyBrb3MtZGItdG9kYXktaXRlbS1kb25lJyA6ICcnKSB9KTtcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtZGItdG9kYXktY2InIH0pLnRleHRDb250ZW50ID0gaXRlbS5kb25lID8gJ1xcdTI2MTEnIDogJ1xcdTI2MTAnO1xuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGl0ZW0udGV4dCwgY2xzOiAna29zLWRiLXRvZGF5LXRleHQnIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUHJvamVjdHMoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbicgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDQ0IgJyArIHRoaXMuX3QoJ3Byb2plY3QudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGdyaWQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LWdyaWQnIH0pO1xuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cyB8fCBbXTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3Byb2plY3QuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtY2FyZCcgfSk7XG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHByb2oucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgIGNvbnN0IHRpdGxlUm93ID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC10aXRsZS1yb3cnIH0pO1xuICAgICAgdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHByb2oudGl0bGUgfHwgJ1VubmFtZWQnLCBjbHM6ICdrb3MtZGItcHJvamVjdC10aXRsZScgfSk7XG4gICAgICBjb25zdCBwID0gU3RyaW5nKHByb2oucHJpb3JpdHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocCkgdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHByb2oucHJpb3JpdHksIGNsczogJ2tvcy1kYi1iYWRnZSBrb3MtZGItYmFkZ2UtJyArIHAgfSk7XG4gICAgICBjb25zdCByYXRlID0gcHJvai50YXNrcz8uY29tcGxldGlvblJhdGUgfHwgMDtcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2dyZXNzJywgYXR0cjogeyBzdHlsZTogJy0tcHJvZ3Jlc3M6JyArIHJhdGUgKyAnJScgfSB9KTtcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogKHByb2oudGFza3M/LmRvbmUgfHwgMCkgKyAnLycgKyAocHJvai50YXNrcz8udG90YWwgfHwgMCksIGNsczogJ2tvcy1kYi1wcm9ncmVzcy1sYWJlbCcgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJUd29Db2x1bW5zKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IGNvbHMgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbHMnIH0pO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VmF1bHRTdGF0cyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBjb2xzLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jb2wnIH0pO1xuICAgICAgbGVmdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDQ0EgJyArIHRoaXMuX3QoJ3N0YXRzLnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IG1ldHJpY3MgPSBbXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvdGFsTm90ZXMnKSwgdmFsdWU6IFN0cmluZyhkYXRhLnN0YXRzPy50b3RhbE5vdGVzIHx8IDApIH0sXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLmFjdGl2ZVByb2plY3RzJyksIHZhbHVlOiBTdHJpbmcoKGRhdGEucHJvamVjdHMgfHwgW10pLmxlbmd0aCkgfSxcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMudG9kYXlOZXcnKSwgdmFsdWU6IFN0cmluZyhkYXRhLnN0YXRzPy50b2RheU5ldyB8fCAwKSB9LFxuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy5wZW5kaW5nVHJpYWdlJyksIHZhbHVlOiBTdHJpbmcoKGRhdGEuaW5ib3hGaWxlcyB8fCBbXSkubGVuZ3RoKSB9LFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGdyaWQgPSBsZWZ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1tZXRyaWNzJyB9KTtcbiAgICAgIG1ldHJpY3MuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbWV0cmljJyB9KTtcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBtLnZhbHVlLCBjbHM6ICdrb3MtZGItbWV0cmljLXZhbCcgfSk7XG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogbS5sYWJlbCwgY2xzOiAna29zLWRiLW1ldHJpYy1sYWJlbCcgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhLnN0YXRzPy5zdGF0cykge1xuICAgICAgICBjb25zdCBzID0gZGF0YS5zdGF0cy5zdGF0cztcbiAgICAgICAgY29uc3Qgc3ViU3RhdHMgPSBbXG4gICAgICAgICAgeyBsYWJlbDogJ1Byb2plY3RzJywgdmFsdWU6IFN0cmluZyhzLnByb2plY3RzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0FyZWFzJywgdmFsdWU6IFN0cmluZyhzLmFyZWFzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1Jlc291cmNlcycsIHZhbHVlOiBTdHJpbmcocy5yZXNvdXJjZXMgfHwgMCkgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUGVyaW9kaWMnLCB2YWx1ZTogU3RyaW5nKHMucGVyaW9kaWMgfHwgMCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgc3ViR3JpZCA9IGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWNzJyB9KTtcbiAgICAgICAgc3ViU3RhdHMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdWJHcmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zdWItbWV0cmljJyB9KTtcbiAgICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtLnZhbHVlLCBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYy12YWwnIH0pO1xuICAgICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcgJyArIG0ubGFiZWwsIGNsczogJ2tvcy1kYi1zdWItbWV0cmljLWxhYmVsJyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93UmVjZW50QWN0aXZpdHkgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCByaWdodCA9IGNvbHMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbCcgfSk7XG4gICAgICByaWdodC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdUREMDQgJyArIHRoaXMuX3QoJ3JlY2VudC50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCByZWNlbnQgPSBkYXRhLnJlY2VudCB8fCBbXTtcbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gdGhpcy5zZXR0aW5ncz8ubWF4UmVjZW50SXRlbXMgfHwgODtcbiAgICAgIGNvbnN0IGxpc3QgPSByaWdodC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcmVjZW50LWxpc3QnIH0pO1xuICAgICAgaWYgKHJlY2VudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdyZWNlbnQuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY2VudC5zbGljZSgwLCBtYXhJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXJlY2VudC1pdGVtJyB9KTtcbiAgICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IG1vbWVudChpdGVtLm10aW1lKS5mb3JtYXQoJ01NLUREIEhIOm1tJyksIGNsczogJ2tvcy1kYi1yZWNlbnQtdGltZScgfSk7XG4gICAgICAgICAgY29uc3QgbGluayA9IHJvdy5jcmVhdGVFbCgnYScsIHsgdGV4dDogJyAgJyArIGl0ZW0udGl0bGUsIGNsczogJ2tvcy1kYi1yZWNlbnQtbGluaycgfSk7XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck5hdihjb250YWluZXIpIHtcbiAgICBjb25zdCBuYXYgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW5hdicgfSk7XG4gICAgbmF2LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNDXFx1REZFMCAnICsgdGhpcy5fdCgnbmF2LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBsaW5rcyA9IG5hdi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbmF2LWxpbmtzJyB9KTtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNDXFx1REZFMCBcXHU3NTFGXFx1NkQzQicsIHBhdGg6ICcyIEFyZWFzL1xcdTc1MUZcXHU2RDNCL1xcdTc1MUZcXHU2RDNCJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0Q2IFxcdTVCNjZcXHU0RTYwJywgcGF0aDogJzIgQXJlYXMvXFx1NUI2NlxcdTRFNjAvXFx1NUI2NlxcdTRFNjAnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQkMgXFx1NURFNVxcdTRGNUMnLCBwYXRoOiAnMiBBcmVhcy9cXHU1REU1XFx1NEY1Qy9cXHU1REU1XFx1NEY1QycgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENENiBcXHU2MDNCXFx1N0QyMlxcdTVGMTUnLCBwYXRoOiAnX21ldGEvXFx1RDgzRFxcdUREMTcgXFx1NzdFNVxcdThCQzZcXHU1MTczXFx1ODA1NC9JbmRleC9faW5kZXgtemgtY24nIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzRcXHVGRTBGIFxcdTVGNTJcXHU2ODYzJywgcGF0aDogJzQgQXJjaGl2ZXMnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRTUgSW5ib3gnLCBwYXRoOiAnMCBJbmJveCcgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiBIb3QgQ2FjaGUnLCBwYXRoOiAnX21ldGEvaG90JyB9LFxuICAgIF07XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgYSA9IGxpbmtzLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiBpdGVtLmxhYmVsLCBjbHM6ICdrb3MtZGItbmF2LWxpbmsnIH0pO1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJJbmJveEZpbGVzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IGZpbGVzID0gZGF0YS5pbmJveEZpbGVzIHx8IFtdO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heEluYm94SXRlbXMgfHwgNjtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uIGtvcy1kYi1pbmJveCcgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDRTUgJyArIHRoaXMuX3QoJ2luYm94LnRpdGxlJywgeyBjb3VudDogZmlsZXMubGVuZ3RoIH0pLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LWxpc3QnIH0pO1xuICAgIGZpbGVzLnNsaWNlKDAsIG1heEl0ZW1zKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1pdGVtJyB9KTtcbiAgICAgIGNvbnN0IG5hbWUgPSByb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGZpbGUuYmFzZW5hbWUgfHwgZmlsZS5wYXRoLCBjbHM6ICdrb3MtZGItaW5ib3gtbGluaycgfSk7XG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGZpbGUucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgIGlmIChmaWxlLnN0YXQ/Lm10aW1lKSB7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbW9tZW50KGZpbGUuc3RhdC5tdGltZSkuZm9ybWF0KCdNTS1ERCBISDptbScpLCBjbHM6ICdrb3MtZGItaW5ib3gtdGltZScgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IG1heEl0ZW1zKSB7XG4gICAgICBjb25zdCBtb3JlID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaW5ib3gtbW9yZScgfSk7XG4gICAgICBtb3JlLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0aGlzLl90KCdpbmJveC5tb3JlJywgeyBjb3VudDogZmlsZXMubGVuZ3RoIC0gbWF4SXRlbXMgfSksIGNsczogJ2tvcy1kYi1pbmJveC1saW5rJyB9KVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJzAgSW5ib3gnLCAnJywgdHJ1ZSk7IH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVuZ2luZVN0YXRlKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IGVuZ2luZXMgPSBkYXRhLmVuZ2luZXMgfHwge307XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbicgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1MjY5OVxcdUZFMEYgJyArIHRoaXMuX3QoJ2VuZ2luZS50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgZ3JpZCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWVuZ2luZS1ncmlkJyB9KTtcbiAgICBjb25zdCBwcmltYXJ5RW5naW5lcyA9IFsndHJpYWdlJywgJ2NvbXBpbGUnLCAnbGluaycsICdkYWlseScsICdwcm9qZWN0JywgJ2FyY2hpdmUnXTtcbiAgICBjb25zdCBoYXNEYXRhID0gcHJpbWFyeUVuZ2luZXMuc29tZSgoZSkgPT4gZW5naW5lc1tlXT8ubGFzdFJ1biB8fCBlbmdpbmVzW2VdPy5zdW1tYXJ5KTtcbiAgICBpZiAoIWhhc0RhdGEpIHtcbiAgICAgIGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnZW5naW5lLmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByaW1hcnlFbmdpbmVzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZW5nID0gZW5naW5lc1trZXldIHx8IHt9O1xuICAgICAgY29uc3QgY2hpcCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xzOiAna29zLWRiLWVuZ2luZS1jaGlwJ1xuICAgICAgICAgICsgKGVuZy5zdGF0dXMgPT09ICdkb25lJyA/ICcga29zLWRiLWVuZ2luZS1kb25lJyA6ICcnKVxuICAgICAgICAgICsgKGVuZy5sYXN0UnVuID8gJycgOiAnIGtvcy1kYi1lbmdpbmUtaWRsZScpLFxuICAgICAgfSk7XG4gICAgICBjaGlwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBrZXksIGNsczogJ2tvcy1kYi1lbmdpbmUtbmFtZScgfSk7XG4gICAgICBpZiAoZW5nLmxhc3RSdW4pIGNoaXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcgJyArIGVuZy5sYXN0UnVuLnNsaWNlKDUpLCBjbHM6ICdrb3MtZGItZW5naW5lLWRhdGUnIH0pO1xuICAgICAgaWYgKGVuZy5zdW1tYXJ5KSBjaGlwLnNldEF0dHIoJ3RpdGxlJywgZW5nLnN1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyV2Vla2x5Q2hhcnQoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbicgfSk7XG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzRFxcdURDQzggJyArIHRoaXMuX3QoJ3dlZWtseS50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgY2hhcnQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydCcgfSk7XG4gICAgY29uc3QgY2VsbHMgPSBkYXRhLndlZWtseSB8fCBbXTtcbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGgubWF4KDEsIC4uLmNlbGxzLm1hcCgoYykgPT4gYy5jb3VudCkpO1xuICAgIGlmIChjZWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoYXJ0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3dlZWtseS5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBjb2wgPSBjaGFydC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhcnQtY29sJyB9KTtcbiAgICAgIGlmIChjZWxsLmlzVG9kYXkpIGNvbC5hZGRDbGFzcygna29zLWRiLWNoYXJ0LXRvZGF5Jyk7XG4gICAgICBjb25zdCBiYXJIZWlnaHQgPSBNYXRoLm1heCg0LCAoY2VsbC5jb3VudCAvIG1heENvdW50KSAqIDYwKTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhcnQtYmFyJywgYXR0cjogeyBzdHlsZTogJ2hlaWdodDonICsgYmFySGVpZ2h0ICsgJ3B4JyB9IH0pXG4gICAgICAgICAuc2V0QXR0cigndGl0bGUnLCB0aGlzLl90KCd3ZWVrbHkuYmFyVG9vbHRpcCcsIHsgZGF0ZTogY2VsbC5kYXRlLCBjb3VudDogY2VsbC5jb3VudCB9KSk7XG4gICAgICBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogU3RyaW5nKGNlbGwuY291bnQpLCBjbHM6ICdrb3MtZGItY2hhcnQtdmFsJyB9KTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBjZWxsLndlZWtkYXksIGNsczogJ2tvcy1kYi1jaGFydC1kYXknIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgQ2hhdCAoRnVsbC1wYWdlIEFJIENoYXQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHJlbmRlckNoYXRWaWV3KGNvbnRhaW5lciwgZGF0YSkge1xuICAgIC8vIEJhY2sgYnV0dG9uICsgdGl0bGVcbiAgICBjb25zdCB0b3BCYXIgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXQtdG9wYmFyJyB9KTtcbiAgICBjb25zdCBiYWNrQnRuID0gdG9wQmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1jaGF0LWJhY2stYnRuJyB9KTtcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICdcXHUyMTkwICcgKyB0aGlzLl90KCdhcHAubmFtZScpO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBDb2xsZWN0IGZyZXNoIGRhdGEgd2hlbiBnb2luZyBiYWNrIHRvIGhvbWVcbiAgICAgIHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApLnRoZW4oKGZyZXNoRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaFBhbmVsKCdob21lJywgZnJlc2hEYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRvcEJhci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1xcdUQ4M0VcXHVERDE2ICcgKyB0aGlzLl90KCdhaS50aXRsZScpLCBjbHM6ICdrb3MtZGItY2hhdC10b3BiYXItdGl0bGUnIH0pO1xuXG4gICAgLy8gQ2hhdCBVSSAoZnVsbCB3aWR0aC9oZWlnaHQgd2l0aGluIHRoZSBjYXJkKVxuICAgIGNvbnN0IGNoYXRTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haSBrb3MtZGItYWktZnVsbCcgfSk7XG5cbiAgICAvLyBNZXNzYWdlIGNvbnRhaW5lclxuICAgIGNvbnN0IG1zZ0NvbnRhaW5lciA9IGNoYXRTZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2dzJyB9KTtcblxuICAgIC8vIElucHV0IHJvd1xuICAgIGNvbnN0IGlucHV0Um93ID0gY2hhdFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLWlucHV0LXJvdycgfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICBjbHM6ICdrb3MtZGItYWktaW5wdXQnLFxuICAgICAgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdhaS5wbGFjZWhvbGRlcicpIH0sXG4gICAgfSk7XG4gICAgY29uc3Qgc2VuZEJ0biA9IGlucHV0Um93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1haS1zZW5kJywgdGV4dDogdGhpcy5fdCgnYWkuc2VuZEJ0bicpIH0pO1xuXG4gICAgLy8gQ2hhdCBlbmdpbmVcbiAgICB0aGlzLl9pbml0QWlDaGF0KCk7XG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkb1NlbmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGhpcy5fc2VuZENoYXRNZXNzYWdlKHZhbCwgbXNnQ29udGFpbmVyLCBpbnB1dCk7XG4gICAgfTtcbiAgICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9TZW5kKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBkb1NlbmQoKTsgfSk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgU2hhcmVkIEFJIENoYXQgTG9naWMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2luaXRBaUNoYXQoKSB7XG4gICAgaWYgKHRoaXMuYWlDaGF0ICYmIHRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmFpQ2hhdCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmVzb2x2ZVByb3ZpZGVyQ29uZmlnKHNlbGYuc2V0dGluZ3MsIHNlbGYuYXBwLnZhdWx0LmFkYXB0ZXIpLnRoZW4oKGNmZykgPT4ge1xuICAgICAgaWYgKGNmZykge1xuICAgICAgICBzZWxmLmFpQ2hhdCA9IG5ldyBBSUNoYXQoe1xuICAgICAgICAgIGxvY2FsZTogc2VsZi5zZXR0aW5ncz8ubG9jYWxlIHx8ICd6aC1jbicsXG4gICAgICAgICAgYmFzZVVybDogY2ZnLmJhc2VVcmwsXG4gICAgICAgICAgYXBpS2V5OiBjZmcuYXBpS2V5LFxuICAgICAgICAgIG1vZGVsOiBjZmcubW9kZWwsXG4gICAgICAgICAgc3lzdGVtUHJvbXB0OiBjZmcuc3lzdGVtUHJvbXB0IHx8IHNlbGYuc2V0dGluZ3M/LmFpU3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgICAgIGxhYmVsOiBjZmcubGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLl9yZWZyZXNoQ2hhdE1zZ3MoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWZyZXNoQ2hhdE1zZ3MoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWksIC5rb3MtZGItYWktZnVsbCcpO1xuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICBjb25zdCBtc2dDb250YWluZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWktbXNncycpO1xuICAgICAgaWYgKG1zZ0NvbnRhaW5lcikgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckNoYXRNZXNzYWdlcyhjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBtc2dzID0gdGhpcy5haUNoYXQgPyB0aGlzLmFpQ2hhdC5nZXRIaXN0b3J5KCkgOiBbXTtcblxuICAgIGlmICghdGhpcy5haUNoYXQgfHwgIXRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkge1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ2FpLm5lZWRDb25maWcnKSwgY2xzOiAna29zLWRiLWFpLW5lZWQtY29uZmlnJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtc2dzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgY29uc3QgYnViYmxlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy0nICsgbXNnLnJvbGUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRleHRFbCA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuICAgICAgdGV4dEVsLnRleHRDb250ZW50ID0gbXNnLmNvbnRlbnQ7XG5cbiAgICAgIGlmIChtc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgY29uc3QgY29weUJ0biA9IGJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktY29weS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jb3B5JykgfSk7XG4gICAgICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG1zZy5jb250ZW50KTtcbiAgICAgICAgICAgIGNvcHlCdG4udGV4dENvbnRlbnQgPSB0aGlzLl90KCdhaS5jb3BpZWQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LCAyMDAwKTtcbiAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBfc2VuZENoYXRNZXNzYWdlKHRleHQsIG1zZ0NvbnRhaW5lciwgaW5wdXRFbCkge1xuICAgIGlmICghdGhpcy5haUNoYXQgfHwgIXRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuO1xuXG4gICAgaW5wdXRFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgaW5wdXRFbC52YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aGlua2luZ0VsID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQga29zLWRiLWFpLXRoaW5raW5nJyB9KTtcbiAgICB0aGlua2luZ0VsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLl90KCdhaS50aGlua2luZycpLCBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuXG4gICAgbGV0IGFzc2lzdGFudFRleHQgPSAnJztcbiAgICBsZXQgYXNzaXN0YW50QnViYmxlID0gbnVsbDtcblxuICAgIHRoaXMuYWlDaGF0LnNlbmRNZXNzYWdlKHRleHQsIHtcbiAgICAgIG9uVG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBhc3Npc3RhbnRUZXh0ICs9IHRva2VuO1xuICAgICAgICBpZiAoIWFzc2lzdGFudEJ1YmJsZSkge1xuICAgICAgICAgIHRoaW5raW5nRWwucmVtb3ZlKCk7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQnIH0pO1xuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFzc2lzdGFudEJ1YmJsZS5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpLW1zZy10ZXh0JykudGV4dENvbnRlbnQgPSBhc3Npc3RhbnRUZXh0O1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgICBvbkRvbmU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaW5raW5nRWwuaXNDb25uZWN0ZWQpIHRoaW5raW5nRWwucmVtb3ZlKCk7XG4gICAgICAgIGlmICghYXNzaXN0YW50QnViYmxlICYmIGFzc2lzdGFudFRleHQpIHtcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUgPSBtc2dDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZyBrb3MtZGItYWktbXNnLWFzc2lzdGFudCcgfSk7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2ctdGV4dCcsIHRleHQ6IGFzc2lzdGFudFRleHQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzc2lzdGFudEJ1YmJsZSAmJiBhc3Npc3RhbnRUZXh0KSB7XG4gICAgICAgICAgY29uc3QgY29weUJ0biA9IGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktY29weS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jb3B5JykgfSk7XG4gICAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFzc2lzdGFudFRleHQpO1xuICAgICAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dEVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICBpZiAodGhpbmtpbmdFbC5pc0Nvbm5lY3RlZCkgdGhpbmtpbmdFbC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgZXJyQnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1lcnJvcicgfSk7XG4gICAgICAgIGVyckJ1YmJsZS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIHRleHQ6IHRoaXMuX3QoJ2FpLmVycm9yJywgeyBtc2c6IGVyci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyB9KSxcbiAgICAgICAgICBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmV0cnlCdG4gPSBlcnJCdWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLXJldHJ5LWJ0bicsIHRleHQ6IHRoaXMuX3QoJ2FpLnJldHJ5JykgfSk7XG4gICAgICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzZXR0aW5ncyB0YWJcbi8vIENsYXVkaWFuLWluc3BpcmVkOiB0YWJiZWQgc2V0dGluZ3Mgd2l0aCBwZXItcHJvdmlkZXIgY29uZmlndXJhdGlvblxuXG5jb25zdCB7IFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IHQsIExPQ0FMRV9LRVlTIH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTID0ge1xuICBsb2NhbGU6ICd6aC1jbicsXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIEFjdGl2ZSBwcm92aWRlclxuICBhY3RpdmVQcm92aWRlcjogJ2NsYXVkZScsXG5cbiAgLy8gUGVyLXByb3ZpZGVyIGNvbmZpZ3VyYXRpb25cbiAgcHJvdmlkZXJzOiB7XG4gICAgY2xhdWRlOiB7XG4gICAgICBsYWJlbDogJ0NsYXVkZScsXG4gICAgICBlbmRwb2ludDogJycsXG4gICAgICBhcGlLZXk6ICcnLFxuICAgICAgbW9kZWw6ICdjbGF1ZGUtc29ubmV0LTQtMjAyNTA1MTQnLFxuICAgICAgc3lzdGVtUHJvbXB0OiAnJyxcbiAgICB9LFxuICAgIGNvZGV4OiB7XG4gICAgICBsYWJlbDogJ0NvZGV4JyxcbiAgICAgIGVuZHBvaW50OiAnJyxcbiAgICAgIGFwaUtleTogJycsXG4gICAgICBtb2RlbDogJycsXG4gICAgICBzeXN0ZW1Qcm9tcHQ6ICcnLFxuICAgIH0sXG4gICAgb3BlbmNvZGU6IHtcbiAgICAgIGxhYmVsOiAnT3BlbkNvZGUnLFxuICAgICAgZW5kcG9pbnQ6ICcnLFxuICAgICAgYXBpS2V5OiAnJyxcbiAgICAgIG1vZGVsOiAnJyxcbiAgICAgIHN5c3RlbVByb21wdDogJycsXG4gICAgfSxcbiAgfSxcblxuICAvLyBEYXNoYm9hcmQgc2VjdGlvbiB2aXNpYmlsaXR5XG4gIHNob3dUb2RheVRhc2tzOiB0cnVlLFxuICBzaG93SW5ib3hGaWxlczogdHJ1ZSxcbiAgc2hvd0VuZ2luZVN0YXRlOiB0cnVlLFxuICBzaG93V2Vla2x5Q2hhcnQ6IHRydWUsXG4gIHNob3dQcm9qZWN0Q2FyZHM6IHRydWUsXG4gIHNob3dSZWNlbnRBY3Rpdml0eTogdHJ1ZSxcbiAgc2hvd1ZhdWx0U3RhdHM6IHRydWUsXG4gIHNob3dOYXY6IHRydWUsXG5cbiAgLy8gRGF0YSBsaW1pdHNcbiAgbWF4UmVjZW50SXRlbXM6IDgsXG4gIG1heFRhc2tJdGVtczogMTIsXG4gIG1heEluYm94SXRlbXM6IDYsXG59O1xuXG4vKiogQnVpbHQtaW4gcHJvdmlkZXIgcHJlc2V0cyBmb3IgcXVpY2sgZmlsbCAqL1xuY29uc3QgUFJPVklERVJfUFJFU0VUUyA9IHtcbiAgY2xhdWRlOiB7XG4gICAgZW5kcG9pbnQ6ICdodHRwczovL2FwaS5hbnRocm9waWMuY29tL3YxJyxcbiAgICBtb2RlbDogJ2NsYXVkZS1zb25uZXQtNC0yMDI1MDUxNCcsXG4gICAgbW9kZWxzOiBbJ2NsYXVkZS1zb25uZXQtNC0yMDI1MDUxNCcsICdjbGF1ZGUtMy01LXNvbm5ldC0yMDI0MTAyMicsICdjbGF1ZGUtMy1vcHVzLTIwMjQwMjI5JywgJ2NsYXVkZS0zLTUtaGFpa3UtMjAyNDEwMjInXSxcbiAgfSxcbiAgY29kZXg6IHtcbiAgICBlbmRwb2ludDogJycsXG4gICAgbW9kZWw6ICcnLFxuICAgIG1vZGVsczogW10sXG4gIH0sXG4gIG9wZW5jb2RlOiB7XG4gICAgZW5kcG9pbnQ6ICcnLFxuICAgIG1vZGVsOiAnJyxcbiAgICBtb2RlbHM6IFtdLFxuICB9LFxufTtcblxuY2xhc3MgQ29ja3BpdFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgY29uc3RydWN0b3IoYXBwLCBwbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5hY3RpdmVUYWIgPSAnZ2VuZXJhbCc7IC8vICdnZW5lcmFsJyB8IHByb3ZpZGVySWRcbiAgfVxuXG4gIF90KGtleSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHQoa2V5LCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUsIHBhcmFtcyk7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnN0IHByb3ZpZGVySWRzID0gWydjbGF1ZGUnLCAnY29kZXgnLCAnb3BlbmNvZGUnXTtcbiAgICBjb25zdCB0YWJJZHMgPSBbJ2dlbmVyYWwnLCAuLi5wcm92aWRlcklkc107XG5cbiAgICAvLyBUYWIgYmFyXG4gICAgY29uc3QgdGFiQmFyID0gY29udGFpbmVyRWwuY3JlYXRlRGl2KHsgY2xzOiAna29zLWNvY2twaXQtc2V0dGluZ3MtdGFicycgfSk7XG4gICAgY29uc3QgdGFiQnV0dG9ucyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCB0YWJDb250ZW50cyA9IG5ldyBNYXAoKTtcblxuICAgIGlmICghdGFiSWRzLmluY2x1ZGVzKHRoaXMuYWN0aXZlVGFiKSkgdGhpcy5hY3RpdmVUYWIgPSAnZ2VuZXJhbCc7XG5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRhYklkcykge1xuICAgICAgY29uc3QgbGFiZWwgPSBpZCA9PT0gJ2dlbmVyYWwnXG4gICAgICAgID8gJ0dlbmVyYWwnXG4gICAgICAgIDogKHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1tpZF0/LmxhYmVsIHx8IGlkKTtcbiAgICAgIGNvbnN0IGJ0biA9IHRhYkJhci5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICBjbHM6ICdrb3MtY29ja3BpdC1zZXR0aW5ncy10YWInICsgKGlkID09PSB0aGlzLmFjdGl2ZVRhYiA/ICcga29zLWNvY2twaXQtc2V0dGluZ3MtdGFiLS1hY3RpdmUnIDogJycpLFxuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgIH0pO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IGlkO1xuICAgICAgICBmb3IgKGNvbnN0IHRpZCBvZiB0YWJJZHMpIHtcbiAgICAgICAgICB0YWJCdXR0b25zLmdldCh0aWQpPy50b2dnbGVDbGFzcygna29zLWNvY2twaXQtc2V0dGluZ3MtdGFiLS1hY3RpdmUnLCB0aWQgPT09IGlkKTtcbiAgICAgICAgICB0YWJDb250ZW50cy5nZXQodGlkKT8udG9nZ2xlQ2xhc3MoJ2tvcy1jb2NrcGl0LXNldHRpbmdzLXRhYi1jb250ZW50LS1hY3RpdmUnLCB0aWQgPT09IGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0YWJCdXR0b25zLnNldChpZCwgYnRuKTtcbiAgICB9XG5cbiAgICAvLyBUYWIgY29udGVudCBjb250YWluZXJzXG4gICAgZm9yIChjb25zdCBpZCBvZiB0YWJJZHMpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250YWluZXJFbC5jcmVhdGVEaXYoe1xuICAgICAgICBjbHM6ICdrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItY29udGVudCcgKyAoaWQgPT09IHRoaXMuYWN0aXZlVGFiID8gJyBrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItY29udGVudC0tYWN0aXZlJyA6ICcnKSxcbiAgICAgIH0pO1xuICAgICAgdGFiQ29udGVudHMuc2V0KGlkLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgZWFjaCB0YWJcbiAgICB0aGlzLnJlbmRlckdlbmVyYWxUYWIodGFiQ29udGVudHMuZ2V0KCdnZW5lcmFsJykpO1xuICAgIGZvciAoY29uc3QgcHJvdmlkZXJJZCBvZiBwcm92aWRlcklkcykge1xuICAgICAgdGhpcy5yZW5kZXJQcm92aWRlclRhYih0YWJDb250ZW50cy5nZXQocHJvdmlkZXJJZCksIHByb3ZpZGVySWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckdlbmVyYWxUYWIoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0dlbmVyYWwnIH0pO1xuXG4gICAgLy8gTGFuZ3VhZ2VcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5sYW5ndWFnZScpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJykpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+IHtcbiAgICAgICAgZC5hZGRPcHRpb24oJ3poLWNuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ1poQ04nKSlcbiAgICAgICAgIC5hZGRPcHRpb24oJ2VuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ0VuJykpXG4gICAgICAgICAuYWRkT3B0aW9uKCd6aC10dycsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaFRXJykpXG4gICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlKVxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSA9IHY7XG4gICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBBdXRvLW9wZW5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW5EZXNjJykpXG4gICAgICAuYWRkVG9nZ2xlKCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBBY3RpdmUgcHJvdmlkZXIgc2VsZWN0b3JcbiAgICBjb25zdCBwcm92aWRlcklkcyA9IFsnY2xhdWRlJywgJ2NvZGV4JywgJ29wZW5jb2RlJ107XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXInKSlcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyRGVzYycpKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcGlkIG9mIHByb3ZpZGVySWRzKSB7XG4gICAgICAgICAgZC5hZGRPcHRpb24ocGlkLCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcGlkXT8ubGFiZWwgfHwgcGlkKTtcbiAgICAgICAgfVxuICAgICAgICBkLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyIHx8ICdjbGF1ZGUnKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIERhc2hib2FyZCBzZWN0aW9uc1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhc2hib2FyZCcpIH0pO1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYycpLCBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nIH0pO1xuXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAgICB7IGtleTogJ3Nob3dUb2RheVRhc2tzJywgbmFtZTogJ1RvZGF5XFwncyBUYXNrcycsIGRlc2M6ICdEYWlseSBub3RlIHRhc2sgbGlzdCBhbmQgcHJvZ3Jlc3MuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93UHJvamVjdENhcmRzJywgbmFtZTogJ0FjdGl2ZSBQcm9qZWN0cycsIGRlc2M6ICdQcm9qZWN0IGNhcmRzIHdpdGggcHJpb3JpdHkgYW5kIHByb2dyZXNzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1ZhdWx0U3RhdHMnLCBuYW1lOiAnVmF1bHQgU3RhdGlzdGljcycsIGRlc2M6ICdUb3RhbCBub3RlcywgYWN0aXZlIHByb2plY3RzLCBpbmJveCBjb3VudC4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dSZWNlbnRBY3Rpdml0eScsIG5hbWU6ICdSZWNlbnQgQWN0aXZpdHknLCBkZXNjOiAnUmVjZW50bHkgbW9kaWZpZWQgZmlsZXMuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93TmF2JywgbmFtZTogJ05hdmlnYXRpb24nLCBkZXNjOiAnUXVpY2sgbGlua3MgdG8gYXJlYXMsIGluYm94LCBob3QgY2FjaGUuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93SW5ib3hGaWxlcycsIG5hbWU6ICdJbmJveCBGaWxlcycsIGRlc2M6ICdMaXN0IG9mIHBlbmRpbmcgZmlsZXMgaW4gMCBJbmJveC8uJyB9LFxuICAgICAgeyBrZXk6ICdzaG93RW5naW5lU3RhdGUnLCBuYW1lOiAnRW5naW5lIFN0YXRlJywgZGVzYzogJ1RyaWFnZS9Db21waWxlL0xpbmsgZW5naW5lIHN0YXR1cyBjaGlwcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dXZWVrbHlDaGFydCcsIG5hbWU6ICdXZWVrbHkgQ2hhcnQnLCBkZXNjOiAnQmFyIGNoYXJ0IG9mIHdlZWtseSBkYWlseS1ub3RlIGNhcHR1cmVzLicgfSxcbiAgICBdO1xuXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBrZXksIG5hbWUsIGRlc2MgfSkgPT4ge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKS5zZXROYW1lKG5hbWUpLnNldERlc2MoZGVzYykuYWRkVG9nZ2xlKCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzW2tleV0pLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gRGF0YSBsaW1pdHNcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXRhTGltaXRzJykgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnQnKSlcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3NldHRpbmdzLm1heFJlY2VudERlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKCc4Jykuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcyA9IE1hdGgubWF4KDMsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgOCkpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFRhc2tzJykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKCcxMicpLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhUYXNrSXRlbXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcyA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgMTIpKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4SW5ib3hEZXNjJykpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcignNicpLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA2KSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gQWJvdXRcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5hYm91dCcpIH0pO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGVzYy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbkRlc2MnKSB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbicpKS5zZXREZXNjKGRlc2MpO1xuICB9XG5cbiAgcmVuZGVyUHJvdmlkZXJUYWIoY29udGFpbmVyLCBwcm92aWRlcklkKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF07XG4gICAgY29uc3QgcHJlc2V0ID0gUFJPVklERVJfUFJFU0VUU1twcm92aWRlcklkXTtcbiAgICBjb25zdCBsYWJlbCA9IHByb3ZpZGVyPy5sYWJlbCB8fCBwcm92aWRlcklkO1xuXG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogbGFiZWwgKyAnIFNldHRpbmdzJyB9KTtcblxuICAgIC8vIEFQSSBFbmRwb2ludFxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLmVuZHBvaW50JykpXG4gICAgICAuc2V0RGVzYyhwcmVzZXQ/LmVuZHBvaW50ID8gJ0RlZmF1bHQ6ICcgKyBwcmVzZXQuZW5kcG9pbnQgOiAnT3BlbkFJLWNvbXBhdGlibGUgZW5kcG9pbnQgVVJMJylcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKHByZXNldD8uZW5kcG9pbnQgfHwgJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnKVxuICAgICAgICAgLnNldFZhbHVlKHByb3ZpZGVyPy5lbmRwb2ludCB8fCAnJylcbiAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF0uZW5kcG9pbnQgPSB2LnRyaW0oKTtcbiAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEFQSSBLZXlcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdwcm92aWRlci5hcGlLZXknKSlcbiAgICAgIC5zZXREZXNjKCdzay0uLi4gb3IgQVBJIGtleScpXG4gICAgICAuYWRkVGV4dCgodCkgPT4ge1xuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKCdzay0uLi4nKVxuICAgICAgICAgLnNldFZhbHVlKHByb3ZpZGVyPy5hcGlLZXkgfHwgJycpXG4gICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJvdmlkZXJzW3Byb3ZpZGVySWRdLmFwaUtleSA9IHYudHJpbSgpO1xuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICB9KTtcblxuICAgIC8vIE1vZGVsXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgncHJvdmlkZXIubW9kZWwnKSlcbiAgICAgIC5zZXREZXNjKHByZXNldD8ubW9kZWxzPy5sZW5ndGggPyBwcmVzZXQubW9kZWxzLmpvaW4oJywgJykgOiAnTW9kZWwgaWRlbnRpZmllcicpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihwcmVzZXQ/Lm1vZGVsIHx8ICdncHQtNG8nKVxuICAgICAgICAgLnNldFZhbHVlKHByb3ZpZGVyPy5tb2RlbCB8fCBwcmVzZXQ/Lm1vZGVsIHx8ICcnKVxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1twcm92aWRlcklkXS5tb2RlbCA9IHYudHJpbSgpO1xuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gU3lzdGVtIFByb21wdFxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLnN5c3RlbVByb21wdCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgncHJvdmlkZXIuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInKSlcbiAgICAgIC5hZGRUZXh0QXJlYSgodCkgPT4ge1xuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKHRoaXMuX3QoJ3Byb3ZpZGVyLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJykpXG4gICAgICAgICAuc2V0VmFsdWUocHJvdmlkZXI/LnN5c3RlbVByb21wdCB8fCAnJylcbiAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF0uc3lzdGVtUHJvbXB0ID0gdi50cmltKCk7XG4gICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgfSk7XG4gICAgICAgIHQuaW5wdXRFbC5yb3dzID0gNDtcbiAgICAgICAgdC5pbnB1dEVsLmNvbHMgPSA2MDtcbiAgICAgICAgdC5pbnB1dEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC10ZXh0YXJlYScpO1xuICAgICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRTZXR0aW5nVGFiLCBERUZBVUxUX1NFVFRJTkdTLCBQUk9WSURFUl9QUkVTRVRTIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHBsdWdpbiBlbnRyeSBwb2ludFxuXG5jb25zdCB7IFBsdWdpbiB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcbmNvbnN0IHsgQ29ja3BpdFZpZXcsIFZJRVdfVFlQRV9DT0NLUElUIH0gPSByZXF1aXJlKCcuL2NvY2twaXQtdmlldycpO1xuY29uc3QgeyBDb2NrcGl0U2V0dGluZ1RhYiwgREVGQVVMVF9TRVRUSU5HUyB9ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy10YWInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBLb3NDb2NrcGl0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3MgPSB7IC4uLkRFRkFVTFRfU0VUVElOR1MgfTtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRV9DT0NLUElULCAobGVhZikgPT4gbmV3IENvY2twaXRWaWV3KGxlYWYsIHRoaXMpKTtcblxuICAgIC8vIFJpYmJvbjogRGFzaGJvYXJkXG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdnYXVnZScsICdLT1MgQ29ja3BpdCcsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2hvbWUnIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gUmliYm9uOiBBSSBDaGF0XG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdib3QnLCAnS09TIEFJIENoYXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdjaGF0JyB9KTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmQ6IERhc2hib2FyZFxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ29wZW4ta29zLWNvY2twaXQnLFxuICAgICAgbmFtZTogJ09wZW4gS09TIENvY2twaXQnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2hvbWUnIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZDogQUkgQ2hhdFxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ29wZW4ta29zLWFpLWNoYXQnLFxuICAgICAgbmFtZTogJ09wZW4gS09TIEFJIENoYXQnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2NoYXQnIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZDogUmVmcmVzaFxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3JlZnJlc2gta29zLWNvY2twaXQnLFxuICAgICAgbmFtZTogJ1JlZnJlc2ggS09TIENvY2twaXQnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVmcmVzaENvY2twaXQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ29ja3BpdFNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID09PSAwICYmIHRoaXMuc2V0dGluZ3MuYXV0b09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnaG9tZScgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBvcGVuQ29ja3BpdChvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcblxuICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB3b3Jrc3BhY2UucmV2ZWFsTGVhZihleGlzdGluZ1swXSk7XG4gICAgICBjb25zdCB2aWV3ID0gZXhpc3RpbmdbMF0udmlldztcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIGlmIChvcHRpb25zLnBhbmVsID09PSAnY2hhdCcgJiYgdHlwZW9mIHZpZXcuc3dpdGNoUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCkudGhlbigoZGF0YSkgPT4gdmlldy5zd2l0Y2hQYW5lbCgnY2hhdCcsIGRhdGEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnBhbmVsID09PSAnaG9tZScgJiYgdHlwZW9mIHZpZXcuc3dpdGNoUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCkudGhlbigoZGF0YSkgPT4gdmlldy5zd2l0Y2hQYW5lbCgnaG9tZScsIGRhdGEpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYXdhaXQgdmlldy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWFmID0gd29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XG4gICAgYXdhaXQgbGVhZi5zZXRWaWV3U3RhdGUoe1xuICAgICAgdHlwZTogVklFV19UWVBFX0NPQ0tQSVQsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBBZnRlciB2aWV3IGlzIHNldCwgc3dpdGNoIHRvIHJlcXVlc3RlZCBwYW5lbFxuICAgIGlmIChvcHRpb25zLnBhbmVsID09PSAnY2hhdCcpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5zd2l0Y2hQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCkudGhlbigoZGF0YSkgPT4gdmlldy5zd2l0Y2hQYW5lbCgnY2hhdCcsIGRhdGEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIGFzeW5jIGNvbGxlY3REYXRhKCkge1xuICAgIC8vIE1pbmltYWwgZGF0YSBjb2xsZWN0b3IgZm9yIHBhbmVsIHN3aXRjaGluZ1xuICAgIGNvbnN0IHsgZ2V0VG9kYXlTdGF0ZSwgZ2V0RGFzaGJvYXJkU3RhdHMsIGxpc3RQcm9qZWN0cyB9ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmFwcDtcbiAgICBjb25zdCBbdG9kYXksIHByb2plY3RzLCBzdGF0c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRUb2RheVN0YXRlKGFwcCkuY2F0Y2goKCkgPT4gbnVsbCksXG4gICAgICBsaXN0UHJvamVjdHMoYXBwLCB7IGFjdGl2ZU9ubHk6IHRydWUgfSkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKS5jYXRjaCgoKSA9PiAoeyB0b3RhbE5vdGVzOiAwLCB0b2RheU5ldzogMCwgc3RhdHM6IHt9IH0pKSxcbiAgICBdKTtcbiAgICByZXR1cm4geyB0b2RheSwgcHJvamVjdHMsIHN0YXRzIH07XG4gIH1cblxuICBhc3luYyByZWZyZXNoQ29ja3BpdCgpIHtcbiAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcucmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhd2FpdCB2aWV3LnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIHNhdmVkKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgIHRoaXMucmVmcmVzaENvY2twaXQoKTtcbiAgfVxuXG4gIG9udW5sb2FkKCkge1xuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpLmZvckVhY2goKGxlYWYpID0+IHtcbiAgICAgIGxlYWYuZGV0YWNoKCk7XG4gICAgfSk7XG4gIH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQTtBQUFBLGtCQUFBQSxVQUFBQyxTQUFBO0FBR0EsUUFBTSxVQUFVO0FBQUEsTUFDZCxTQUFTO0FBQUE7QUFBQSxRQUVQLFlBQVk7QUFBQSxRQUNaLGVB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RixDQUFDO0FBQ0QsV0FBTyxFQUFFLE9BQU8sVUFBVSxNQUFNO0FBQUEsRUFDbEM7QUFBQSxFQUVBLE1BQU0saUJBQWlCO0FBQ3JCLFVBQU0sU0FBUyxLQUFLLElBQUksVUFBVSxnQkFBZ0IsaUJBQWlCO0FBQ25FLGVBQVcsUUFBUSxRQUFRO0FBQ3pCLFlBQU0sT0FBTyxLQUFLO0FBQ2xCLFVBQUksUUFBUSxPQUFPLEtBQUssWUFBWSxZQUFZO0FBQzlDLGNBQU0sS0FBSyxRQUFRO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sUUFBUSxNQUFNLEtBQUssU0FBUztBQUNsQyxTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsS0FBSztBQUFBLEVBQzNEO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQ2pDLFNBQUssZUFBZTtBQUFBLEVBQ3RCO0FBQUEsRUFFQSxXQUFXO0FBQ1QsU0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ3RFLFdBQUssT0FBTztBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiVklFV19UWVBFX0NPQ0tQSVQiLCAiQ29ja3BpdFZpZXciLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiREVGQVVMVF9TRVRUSU5HUyIsICJDb2NrcGl0U2V0dGluZ1RhYiIsICJ0IiwgImRlc2MiXQp9Cg==
