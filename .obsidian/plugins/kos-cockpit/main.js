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
    var FLOWNOTE_PROVIDERS = {
      "deepseek": {
        baseUrl: "https://api.deepseek.com/v1",
        label: "DeepSeek"
      },
      "openai-official": {
        baseUrl: "https://api.openai.com/v1",
        label: "OpenAI"
      },
      "openai-compat-custom": {
        baseUrl: "",
        // user-configured
        label: "OpenAI Compatible"
      },
      "claude": {
        baseUrl: "https://api.anthropic.com/v1",
        label: "Anthropic Claude"
      },
      "gemini": {
        baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
        label: "Google Gemini"
      },
      "siliconflow": {
        baseUrl: "https://api.siliconflow.cn/v1",
        label: "SiliconFlow"
      },
      "groq": {
        baseUrl: "https://api.groq.com/openai/v1",
        label: "Groq"
      },
      "together": {
        baseUrl: "https://api.together.xyz/v1",
        label: "Together AI"
      }
    };
    async function resolveFlownoteProvider(vaultAdapter) {
      if (!vaultAdapter || typeof vaultAdapter.read !== "function") return null;
      try {
        const raw = await vaultAdapter.read(".obsidian/plugins/flownote/data.json");
        const config = JSON.parse(raw);
        const ap = config && config.settings && config.settings.agentProvider;
        if (!ap || !ap.enabled) return null;
        const direct = ap.direct || ap[ap.mode];
        if (!direct) return null;
        const providerId = direct.providerId;
        const preset = FLOWNOTE_PROVIDERS[providerId];
        if (!preset) return null;
        const apiKeys = direct.apiKeys || {};
        const apiKey = apiKeys[providerId];
        if (!apiKey) return null;
        const model = direct.model || preset.defaultModel || "";
        const baseUrl = direct.baseUrlOverride || preset.baseUrl;
        if (!baseUrl && providerId !== "openai-compat-custom") return null;
        if (providerId === "openai-compat-custom" && !baseUrl) return null;
        return {
          providerId,
          apiKey,
          model,
          baseUrl,
          label: preset.label
        };
      } catch {
        return null;
      }
    }
    var AIChat = class {
      /**
       * @param {object} settings - Resolved provider settings (from resolveFlownoteProvider or manual)
       * @param {string} settings.locale
       * @param {string} settings.baseUrl
       * @param {string} settings.apiKey
       * @param {string} settings.model
       * @param {string} [settings.systemPrompt]
       */
      constructor(settings) {
        this.settings = settings || {};
        this.messages = [];
        this.abortController = null;
        this._addWelcome();
      }
      get _locale() {
        return this.settings && this.settings.locale || "zh-cn";
      }
      get isConfigured() {
        const s = this.settings || {};
        return !!(s.baseUrl && s.apiKey && s.model);
      }
      /** Provider label for display */
      get providerLabel() {
        const s = this.settings || {};
        return s.providerLabel || s.baseUrl || "Unknown";
      }
      clear() {
        this.messages = [];
        this._addWelcome();
      }
      getHistory() {
        return this.messages.slice();
      }
      /**
       * Send a user message and stream the assistant response.
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
        const systemPrompt = (s.systemPrompt || "").trim() || DEFAULT_SYSTEM_PROMPT;
        const payload = {
          model: s.model,
          messages: [
            { role: "system", content: systemPrompt },
            ...this.messages.filter((m) => m.role !== "system")
          ]
        };
        this.abortController = new AbortController();
        const signal = this.abortController.signal;
        let fullResponse = "";
        this._doStreamRequest(s.baseUrl, s.apiKey, payload, signal, {
          onToken: (text) => {
            fullResponse += text;
            if (onToken) onToken(text);
          },
          onDone: () => {
            if (fullResponse) {
              this.messages.push({ role: "assistant", content: fullResponse });
            }
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
        this.messages.push({
          role: "assistant",
          content: welcomes[locale] || welcomes["zh-cn"]
        });
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
          if (err.name === "AbortError") return;
          if (onError) onError(err);
        }
      }
    };
    module2.exports = { AIChat, resolveFlownoteProvider, FLOWNOTE_PROVIDERS, DEFAULT_SYSTEM_PROMPT };
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
    var { AIChat, resolveFlownoteProvider } = require_ai_chat();
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
        resolveFlownoteProvider(this.app.vault.adapter).then((flownoteConfig) => {
          if (flownoteConfig) {
            self.aiChat = new AIChat({
              locale: self.settings?.locale || "zh-cn",
              baseUrl: flownoteConfig.baseUrl,
              apiKey: flownoteConfig.apiKey,
              model: flownoteConfig.model,
              systemPrompt: self.settings?.aiSystemPrompt || "",
              providerLabel: flownoteConfig.label
            });
            self._refreshChatMsgs();
            return;
          }
          const baseUrl = (self.settings?.aiEndpoint || "").trim();
          const apiKey = (self.settings?.aiApiKey || "").trim();
          const model = (self.settings?.aiModel || "").trim();
          if (baseUrl && apiKey && model) {
            self.aiChat = new AIChat({
              locale: self.settings?.locale || "zh-cn",
              baseUrl,
              apiKey,
              model,
              systemPrompt: self.settings?.aiSystemPrompt || "",
              providerLabel: "Manual"
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
          { key: "showWeeklyChart", name: "Weekly Chart", desc: "Bar chart of weekly daily-note captures." }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cblxuY29uc3QgTE9DQUxFUyA9IHtcbiAgJ3poLWNuJzoge1xuICAgIC8vIEdlbmVyYWxcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU1MkEwXHU4RjdEXHU0RUVBXHU4ODY4XHU3NkQ4XHU2NUY2XHU1MUZBXHU5NTE5XHUzMDAyJyxcblxuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1MjFCXHU1RUZBJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QkJFXHU1QjlBKScsXG5cbiAgICAvLyBEYXkgbmFtZXNcbiAgICAnZGF5LnN1bic6ICdcdTY1RTUnLFxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcbiAgICAnZGF5LndlZCc6ICdcdTRFMDknLFxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcbiAgICAnZGF5LnNhdCc6ICdcdTUxNkQnLFxuXG4gICAgLy8gUXVpY2sgYWN0aW9uc1xuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1ODNCNycsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODdFJyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU5ODc5XHU3NkVFJyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcbidhY3Rpb24uYWlDaGF0JzogJ0FJIENoYXQnLFxuXG4gICAgLy8gVG9kYXkgVGFza3NcbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTEnLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2ODJcdTY1RTBcdTRFRkJcdTUyQTFcdTMwMDInLFxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCMTRcdThCQjBcdTY3MkFcdTUyMUJcdTVFRkFcdTMwMDJcdTcwQjlcdTUxRkIgW1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOV0gXHU1MjFCXHU1RUZBXHUzMDAyJyxcblxuICAgIC8vIFByb2plY3RzXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUVcdTMwMDInLFxuXG4gICAgLy8gVmF1bHQgc3RhdHNcbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU1RTkzXHU3RURGXHU4QkExJyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTYwM0JcdTdCMTRcdThCQjAnLFxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUUnLFxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1NjJFMycsXG5cbiAgICAvLyBSZWNlbnQgYWN0aXZpdHlcbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOCcsXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTZEM0JcdTUyQThcdTMwMDInLFxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVCRkNcdTgyMkEnLFxuXG4gICAgLy8gSW5ib3hcbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgIC8vIEVuZ2luZSBzdGF0ZVxuICAgICdlbmdpbmUudGl0bGUnOiAnXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ1x1NjY4Mlx1NjVFMFx1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMVx1NjU3MFx1NjM2RVx1MzAwMicsXG5cbiAgICAvLyBXZWVrbHkgY2hhcnRcbiAgICAnd2Vla2x5LnRpdGxlJzogJ1x1NjcyQ1x1NTQ2OFx1OEJCMFx1NUY1NVx1NTIwNlx1NUUwMycsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTU0NjhcdTY2ODJcdTY1RTBcdTY1RTVcdThCQjBcdThCQjBcdTVGNTVcdTMwMDInLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gXHU2NzYxJyxcblxuICAgIC8vIEFJIENoYXRcbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QkY5XHU4QkREJyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnXHU4QkUyXHU5NUVFIEtPUyBcdTc3RTVcdThCQzZcdTVFOTMuLi4nLFxuICAgICdhaS53ZWxjb21lJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxuICAgICdhaS5zZW5kQnRuJzogJ1x1NTNEMVx1OTAwMScsXG4gICAgJ2FpLmNsZWFyQnRuJzogJ1x1NkUwNVx1N0E3QVx1NUJGOVx1OEJERCcsXG4gICAgJ2FpLnRoaW5raW5nJzogJ1x1NjAxRFx1ODAwM1x1NEUyRC4uLicsXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnXHU2NzJBXHU2OEMwXHU2RDRCXHU1MjMwIEZMT1dub3RlIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEU1Rlx1NjcyQVx1NjI3RVx1NTIzMFx1NjI0Qlx1NTJBOCBBUEkgXHU4QkJFXHU3RjZFXHUzMDAyXHU4QkY3XHU1NzI4IEZMT1dub3RlIFx1NEUyRFx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwQ1x1NjIxNlx1NTcyOCBDb2NrcGl0IFx1OEJCRVx1N0Y2RVx1NEUyRFx1NjI0Qlx1NTJBOFx1NTg2Qlx1NTE5OVx1MzAwMicsXG4gICAgJ2FpLmVycm9yJzogJ1x1OEJGN1x1NkM0Mlx1NTkzMVx1OEQyNToge21zZ30nLFxuICAgICdhaS5yZXRyeSc6ICdcdTkxQ0RcdThCRDUnLFxuICAgICdhaS5jb3B5JzogJ1x1NTkwRFx1NTIzNicsXG4gICAgJ2FpLmNvcGllZCc6ICdcdTVERjJcdTU5MERcdTUyMzYnLFxuXG4gICAgLy8gQUkgc2V0dGluZ3NcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdcdTkxNERcdTdGNkUgQUkgXHU1QkY5XHU4QkREXHU3Njg0IEFQSSBcdTYzQTVcdTUxNjVcdTUzQzJcdTY1NzBcdTMwMDJcdTgyRTUgRkxPV25vdGUgXHU1REYyXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjA4XHU2M0E4XHU4MzUwXHVGRjA5XHVGRjBDQ29ja3BpdCBcdTVDMDZcdTgxRUFcdTUyQThcdThCRkJcdTUzRDZcdTUxNzZcdThCQkVcdTdGNkVcdTMwMDJcdTc1NTlcdTdBN0FcdTUyMTlcdTgwNEFcdTU5MjlcdTUzM0FcdTRFMERcdTUzRUZcdTc1MjhcdTMwMDInLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ1x1NkEyMVx1NTc4Qlx1NTQwRFx1NzlGMCcsXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdFREZcdTYzRDBcdTc5M0FcdThCQ0QnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTY2MkZcdTRFMDBcdTRFMkFcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTUyQTlcdTYyNEJcdUZGMENcdTVFMkVcdTUyQTlcdTc1MjhcdTYyMzdcdTU5MDRcdTc0MDYgS09TIFx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMicsXG5cbiAgICAvLyBTZXR0aW5nc1xuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ0dlbmVyYWwnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdcdTc1NENcdTk3NjJcdThCRURcdThBMDAnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnXHU5MDA5XHU2MkU5XHU0RUVBXHU4ODY4XHU3NkQ4XHU3NTRDXHU5NzYyXHU3Njg0XHU2NjNFXHU3OTNBXHU4QkVEXHU4QTAwXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcdTdFNDFcdTlBRDRcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdcdTU0MkZcdTUyQThcdTY1RjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDAnLFxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnT2JzaWRpYW4gXHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwIEtPUyBDb2NrcGl0XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCBTZWN0aW9ucycsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnXHU2M0E3XHU1MjM2XHU0RUVBXHU4ODY4XHU3NkQ4XHU0RTBBXHU1NDA0XHU1MzNBXHU1NzU3XHU3Njg0XHU2NjNFXHU3OTNBXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGF0YUxpbWl0cyc6ICdEYXRhIExpbWl0cycsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudCc6ICdcdTY3MDBcdTU5MjdcdTY3MDBcdThGRDFcdTZEM0JcdTUyQThcdTY1NzAnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJzogJ1x1NjYzRVx1NzkzQVx1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NjU4N1x1NEVGNlx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ1x1NjcwMFx1NTkyN1x1NEVGQlx1NTJBMVx1NjU3MCcsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzRGVzYyc6ICdcdTY2M0VcdTc5M0FcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTFcdTc2ODRcdTY1NzBcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdcdTY3MDBcdTU5MjcgSW5ib3ggXHU2NTcwJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ1x1NjYzRVx1NzkzQSBJbmJveCBcdTY1ODdcdTRFRjZcdTU0MERcdTc2ODRcdTY1NzBcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdBYm91dCcsXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnXHU3MjQ4XHU2NzJDJyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbkRlc2MnOiAnS09TIENvY2twaXQgdjAuMi4wIFx1MjAxNCBLT1NfTExNLVdpa2kgXHU3N0U1XHU4QkM2XHU3QkExXHU3NDA2XHU0RUVBXHU4ODY4XHU3NkQ4XHUzMDAyS09TIFx1NzUxRlx1NjAwMVx1NzY4NFx1NEUwMFx1OTBFOFx1NTIwNlx1MzAwMicsXG4gIH0sXG5cbiAgJ2VuJzoge1xuICAgICdhcHAubmFtZSc6ICdLT1MgQ29ja3BpdCcsXG4gICAgJ2FwcC5sb2FkaW5nJzogJ0xvYWRpbmcgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgbG9hZGluZyB0aGUgZGFzaGJvYXJkLicsXG5cbiAgICAnaGVhZGVyLmRhdGVGb3JtYXQnOiAnWVlZWS1NTS1ERCcsXG4gICAgJ2hlYWRlci5ub3RlU3RhdHVzJzogJ0RhaWx5IE5vdGUgW3tzdGF0dXN9XScsXG4gICAgJ2hlYWRlci5ub3RlQ3JlYXRlZCc6ICdDcmVhdGVkJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ05vdCBDcmVhdGVkJyxcbiAgICAnaGVhZGVyLnRvZGF5Rm9jdXMnOiAnVG9kYXlcXCdzIEZvY3VzOiB7Zm9jdXN9JyxcbiAgICAnaGVhZGVyLmZvY3VzTm90U2V0JzogJyhOb3QgU2V0KScsXG5cbiAgICAnZGF5LnN1bic6ICdTJyxcbiAgICAnZGF5Lm1vbic6ICdNJyxcbiAgICAnZGF5LnR1ZSc6ICdUJyxcbiAgICAnZGF5LndlZCc6ICdXJyxcbiAgICAnZGF5LnRodSc6ICdUJyxcbiAgICAnZGF5LmZyaSc6ICdGJyxcbiAgICAnZGF5LnNhdCc6ICdTJyxcblxuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1BsYW4gVG9kYXknLFxuICAgICdhY3Rpb24uY2FwdHVyZSc6ICdRdWljayBDYXB0dXJlJyxcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdEYXkgUmV2aWV3JyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnTmV3IFByb2plY3QnLFxuICAgICdhY3Rpb24udHJpYWdlJzogJ1RyaWFnZScsXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdTZXR0aW5ncycsXG4gICAgJ2FjdGlvbi5haUNoYXQnOiAnQUkgQ2hhdCcsXG5cbiAgICAndGFzay50aXRsZSc6ICdUb2RheVxcJ3MgVGFza3MnLFxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXG4gICAgJ3Rhc2subm9uZSc6ICdObyB0YXNrcyB5ZXQuJyxcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnRGFpbHkgbm90ZSBub3QgY3JlYXRlZC4gQ2xpY2sgW1BsYW4gVG9kYXldIHRvIGNyZWF0ZSBvbmUuJyxcblxuICAgICdwcm9qZWN0LnRpdGxlJzogJ0FjdGl2ZSBQcm9qZWN0cycsXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnTm8gYWN0aXZlIHByb2plY3RzLicsXG5cbiAgICAnc3RhdHMudGl0bGUnOiAnVmF1bHQgU3RhdGlzdGljcycsXG4gICAgJ3N0YXRzLnRvdGFsTm90ZXMnOiAnVG90YWwgTm90ZXMnLFxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdBY3RpdmUgUHJvamVjdHMnLFxuICAgICdzdGF0cy50b2RheU5ldyc6ICdUb2RheSBOZXcnLFxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ0luYm94JyxcblxuICAgICdyZWNlbnQudGl0bGUnOiAnUmVjZW50IEFjdGl2aXR5JyxcbiAgICAncmVjZW50LmVtcHR5JzogJ05vIGFjdGl2aXR5IHlldC4nLFxuXG4gICAgJ25hdi50aXRsZSc6ICdUaHJlZSBQaWxsYXJzIFxcdTAwQjcgTmF2JyxcblxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxuICAgICdpbmJveC5tb3JlJzogJyt7Y291bnR9IG1vcmUuLi4nLFxuXG4gICAgJ2VuZ2luZS50aXRsZSc6ICdFbmdpbmUgU3RhdGUnLFxuICAgICdlbmdpbmUuZW1wdHknOiAnTm8gZW5naW5lIHN0YXRlIGRhdGEgeWV0LicsXG5cbiAgICAnd2Vla2x5LnRpdGxlJzogJ1dlZWtseSBSZWNvcmQgRGlzdHJpYnV0aW9uJyxcbiAgICAnd2Vla2x5LmVtcHR5JzogJ05vIGRhaWx5IHJlY29yZHMgdGhpcyB3ZWVrLicsXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBpdGVtcycsXG5cbiAgICAnYWkudGl0bGUnOiAnQUkgQ2hhdCcsXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ0FzayBhYm91dCB0aGUgS09TIHZhdWx0Li4uJyxcbiAgICAnYWkud2VsY29tZSc6ICdIZWxsbyEgSSBhbSB0aGUgS09TIEFJIGFzc2lzdGFudC4gQXNrIG1lIGFib3V0IHRoZSBrbm93bGVkZ2UgYmFzZSwgcHJvamVjdCBzdGF0dXMsIG9yIGFueXRoaW5nIEtPUy1yZWxhdGVkLicsXG4gICAgJ2FpLnNlbmRCdG4nOiAnU2VuZCcsXG4gICAgJ2FpLmNsZWFyQnRuJzogJ0NsZWFyIENoYXQnLFxuICAgICdhaS50aGlua2luZyc6ICdUaGlua2luZy4uLicsXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnTm8gRkxPV25vdGUgY29uZmlnIGRldGVjdGVkIGFuZCBubyBtYW51YWwgQVBJIHNldHRpbmdzIGZvdW5kLiBDb25maWd1cmUgQUkgUHJvdmlkZXIgaW4gRkxPV25vdGUsIG9yIGZpbGwgaW4gbWFudWFsbHkgaW4gQ29ja3BpdCBzZXR0aW5ncy4nLFxuICAgICdhaS5lcnJvcic6ICdSZXF1ZXN0IGZhaWxlZDoge21zZ30nLFxuICAgICdhaS5yZXRyeSc6ICdSZXRyeScsXG4gICAgJ2FpLmNvcHknOiAnQ29weScsXG4gICAgJ2FpLmNvcGllZCc6ICdDb3BpZWQnLFxuXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbic6ICdBSSBQcm92aWRlcicsXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnQ29uZmlndXJlIEFQSSBhY2Nlc3MgZm9yIHRoZSBBSSBjaGF0LiBJZiBGTE9Xbm90ZSBoYXMgQUkgUHJvdmlkZXIgY29uZmlndXJlZCAocmVjb21tZW5kZWQpLCBDb2NrcGl0IHdpbGwgYXV0by1kZXRlY3QgaXQuIExlYXZlIGVtcHR5IHRvIGRpc2FibGUuJyxcbiAgICAnYWkuYXBpRW5kcG9pbnQnOiAnQVBJIEVuZHBvaW50JyxcbiAgICAnYWkuYXBpS2V5JzogJ0FQSSBLZXknLFxuICAgICdhaS5tb2RlbCc6ICdNb2RlbCBOYW1lJyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0JzogJ1N5c3RlbSBQcm9tcHQnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdZb3UgYXJlIGEga25vd2xlZGdlIG1hbmFnZW1lbnQgYXNzaXN0YW50IGhlbHBpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdGhlaXIgS09TIHZhdWx0LicsXG5cbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdHZW5lcmFsJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnSW50ZXJmYWNlIExhbmd1YWdlJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ0Nob29zZSB0aGUgZGlzcGxheSBsYW5ndWFnZSBmb3IgdGhlIGRhc2hib2FyZC4nLFxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcXHU3QjgwXFx1NEY1M1xcdTRFMkRcXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcXHU3RTQxXFx1OUFENFxcdTRFMkRcXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW4nOiAnQXV0by1vcGVuIG9uIHN0YXJ0dXAnLFxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnQXV0b21hdGljYWxseSBvcGVuIHRoZSBLT1MgQ29ja3BpdCB3aGVuIE9ic2lkaWFuIHN0YXJ0cy4nLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmQnOiAnRGFzaGJvYXJkIFNlY3Rpb25zJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdUb2dnbGUgd2hpY2ggc2VjdGlvbnMgYXBwZWFyIG9uIHRoZSBjb2NrcGl0IGRhc2hib2FyZC4nLFxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ01heCByZWNlbnQgaXRlbXMnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJzogJ051bWJlciBvZiByZWNlbnRseSBtb2RpZmllZCBmaWxlcyB0byBzaG93IChtYXggMjApLicsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ01heCB0YXNrIGl0ZW1zJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ051bWJlciBvZiBkYWlseS1ub3RlIHRhc2tzIHRvIHNob3cgKG1heCAyMCkuJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnTWF4IGluYm94IGl0ZW1zJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ051bWJlciBvZiBpbmJveCBmaWxlIG5hbWVzIHRvIHNob3cgKG1heCAyMCkuJyxcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnQWJvdXQnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uJzogJ1ZlcnNpb24nLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXFx1MjAxNCBBIGtub3dsZWRnZSBtYW5hZ2VtZW50IGRhc2hib2FyZCBmb3IgdGhlIEtPU19MTE0tV2lraSB2YXVsdC4gUGFydCBvZiB0aGUgS09TIGVjb3N5c3RlbS4nLFxuICB9LFxuXG4gICd6aC10dyc6IHtcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdThGMDlcdTUxNjUgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU4RjA5XHU1MTY1XHU1MTAwXHU4ODY4XHU2NzdGXHU2NjQyXHU3NjdDXHU3NTFGXHU5MzJGXHU4QUE0XHUzMDAyJyxcblxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjQ2XHU4QTE4IFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1RUZBXHU3QUNCJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NUVGQVx1N0FDQicsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1NzEyNlx1OUVERToge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QTJEXHU1QjlBKScsXG5cbiAgICAnZGF5LnN1bic6ICdcdTY1RTUnLFxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcbiAgICAnZGF5LndlZCc6ICdcdTRFMDknLFxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcbiAgICAnZGF5LnNhdCc6ICdcdTUxNkQnLFxuXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnXHU4OThGXHU1MjgzXHU0RUNBXHU1OTI5JyxcbiAgICAnYWN0aW9uLmNhcHR1cmUnOiAnXHU1RkVCXHU5MDFGXHU2MzU1XHU2MzQ5JyxcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdcdTZCQ0ZcdTY1RTVcdTU2REVcdTk4NjcnLFxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdcdTY1QjBcdTVFRkFcdTVDMDhcdTY4NDgnLFxuICAgICdhY3Rpb24udHJpYWdlJzogJ1RyaWFnZScsXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdcdThBMkRcdTVCOUEnLFxuICAgICdhY3Rpb24uYWlDaGF0JzogJ0FJIENoYXQnLFxuXG4gICAgJ3Rhc2sudGl0bGUnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkQ5JyxcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxuICAgICd0YXNrLm5vbmUnOiAnXHU2NkFCXHU3MTIxXHU0RUZCXHU1MkQ5XHUzMDAyJyxcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnXHU0RUNBXHU2NUU1XHU3QjQ2XHU4QTE4XHU2NzJBXHU1RUZBXHU3QUNCXHUzMDAyXHU5RURFXHU2NENBIFtcdTg5OEZcdTUyODNcdTRFQ0FcdTU5MjldIFx1NUVGQVx1N0FDQlx1MzAwMicsXG5cbiAgICAncHJvamVjdC50aXRsZSc6ICdcdTZEM0JcdThFOERcdTVDMDhcdTY4NDgnLFxuICAgICdwcm9qZWN0LmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OFx1MzAwMicsXG5cbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QjU4XHU1RUFCXHU3RDcxXHU4QTA4JyxcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTdFM0RcdTdCNDZcdThBMTgnLFxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdcdTZEM0JcdThFOERcdTVDMDhcdTY4NDgnLFxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1OTg1RScsXG5cbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJENScsXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTZEM0JcdTUyRDVcdTMwMDInLFxuXG4gICAgJ25hdi50aXRsZSc6ICdcdTRFMDlcdTY1MkZcdTY3RjEgXHUwMEI3IFx1NUMwRVx1ODIyQScsXG5cbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgICdlbmdpbmUudGl0bGUnOiAnXHU1RjE1XHU2NENFXHU3MkMwXHU2MTRCJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NUYxNVx1NjRDRVx1NzJDMFx1NjE0Qlx1OENDN1x1NjU5OVx1MzAwMicsXG5cbiAgICAnd2Vla2x5LnRpdGxlJzogJ1x1NjcyQ1x1OTAzMVx1OEExOFx1OTMwNFx1NTIwNlx1NEY0OCcsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTkwMzFcdTY2QUJcdTcxMjFcdTY1RTVcdThBMThcdThBMThcdTkzMDRcdTMwMDInLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gXHU2ODlEJyxcblxuICAgICdhaS50aXRsZSc6ICdBSSBcdTVDMERcdThBNzEnLFxuICAgICdhaS5wbGFjZWhvbGRlcic6ICdcdThBNjJcdTU1NEYgS09TIFx1NzdFNVx1OEI1OFx1NUVBQi4uLicsXG4gICAgJ2FpLndlbGNvbWUnOiAnXHU0RjYwXHU1OTdEXHVGRjAxXHU2MjExXHU2NjJGIEtPUyBBSSBcdTUyQTlcdTYyNEJcdTMwMDJcdTRGNjBcdTUzRUZcdTRFRTVcdTU1NEZcdTYyMTFcdTk1RENcdTY1QkNcdTc3RTVcdThCNThcdTVFQUJcdTMwMDFcdTVDMDhcdTY4NDhcdTcyQzBcdTYxNEJcdTYyMTZcdTRFRkJcdTRGNTUgS09TIFx1NzZGOFx1OTVEQ1x1NzY4NFx1NTU0Rlx1OTg0Q1x1MzAwMicsXG4gICAgJ2FpLnNlbmRCdG4nOiAnXHU3NjdDXHU5MDAxJyxcbiAgICAnYWkuY2xlYXJCdG4nOiAnXHU2RTA1XHU3QTdBXHU1QzBEXHU4QTcxJyxcbiAgICAnYWkudGhpbmtpbmcnOiAnXHU2MDFEXHU4MDAzXHU0RTJELi4uJyxcbiAgICAnYWkubmVlZENvbmZpZyc6ICdcdTY3MkFcdTUwNzVcdTZFMkNcdTUyMzAgRkxPV25vdGUgXHU5MTREXHU3RjZFXHVGRjBDXHU0RTVGXHU2NzJBXHU2MjdFXHU1MjMwXHU2MjRCXHU1MkQ1IEFQSSBcdThBMkRcdTVCOUFcdTMwMDJcdThBQ0JcdTU3MjggRkxPV25vdGUgXHU0RTJEXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjBDXHU2MjE2XHU1NzI4IENvY2twaXQgXHU4QTJEXHU1QjlBXHU0RTJEXHU2MjRCXHU1MkQ1XHU1ODZCXHU1QkVCXHUzMDAyJyxcbiAgICAnYWkuZXJyb3InOiAnXHU4QUNCXHU2QzQyXHU1OTMxXHU2NTU3OiB7bXNnfScsXG4gICAgJ2FpLnJldHJ5JzogJ1x1OTFDRFx1OEE2NicsXG4gICAgJ2FpLmNvcHknOiAnXHU4OTA3XHU4OEZEJyxcbiAgICAnYWkuY29waWVkJzogJ1x1NURGMlx1ODkwN1x1ODhGRCcsXG5cbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdcdTkxNERcdTdGNkUgQUkgXHU1QzBEXHU4QTcxXHU3Njg0IEFQSSBcdTYzQTVcdTUxNjVcdTUzQzNcdTY1NzhcdTMwMDJcdTgyRTUgRkxPV25vdGUgXHU1REYyXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjA4XHU2M0E4XHU4NUE2XHVGRjA5XHVGRjBDQ29ja3BpdCBcdTVDMDdcdTgxRUFcdTUyRDVcdThCODBcdTUzRDZcdTUxNzZcdThBMkRcdTVCOUFcdTMwMDJcdTc1NTlcdTdBN0FcdTUyNDdcdTgwNEFcdTU5MjlcdTUzNDBcdTRFMERcdTUzRUZcdTc1MjhcdTMwMDInLFxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXG4gICAgJ2FpLm1vZGVsJzogJ1x1NkEyMVx1NTc4Qlx1NTQwRFx1N0EzMScsXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdENzFcdTYzRDBcdTc5M0FcdThBNUUnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTY2MkZcdTRFMDBcdTUwMEJcdTc3RTVcdThCNThcdTdCQTFcdTc0MDZcdTUyQTlcdTYyNEJcdUZGMENcdTVFNkJcdTUyQTlcdTc1MjhcdTYyMzZcdTg2NTVcdTc0MDYgS09TIFx1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMicsXG5cbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdcdTRFMDBcdTgyMkMnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdcdTRFQ0JcdTk3NjJcdThBOUVcdThBMDAnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnXHU5MDc4XHU2NEM3XHU1MTAwXHU4ODY4XHU2NzdGXHU3Njg0XHU5ODZGXHU3OTNBXHU4QTlFXHU4QTAwXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcdTdFNDFcdTlBRDRcdTRFMkRcdTY1ODcnLFxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTk1OEJcdTU1NUYnLFxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnT2JzaWRpYW4gXHU1NTVGXHU1MkQ1XHU2NjQyXHU4MUVBXHU1MkQ1XHU5NThCXHU1NTVGIEtPUyBDb2NrcGl0XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ1x1NTEwMFx1ODg2OFx1Njc3Rlx1NTM0MFx1NTg0QScsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnXHU2M0E3XHU1MjM2XHU1MTAwXHU4ODY4XHU2NzdGXHU0RTBBXHU1NDA0XHU1MzQwXHU1ODRBXHU3Njg0XHU5ODZGXHU3OTNBXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuZGF0YUxpbWl0cyc6ICdcdThDQzdcdTY1OTlcdTk2NTBcdTUyMzYnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnXHU2NzAwXHU1OTI3XHU2NzAwXHU4RkQxXHU2RDNCXHU1MkQ1XHU2NTc4JyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdcdTk4NkZcdTc5M0FcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTZBOTRcdTY4NDhcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdcdTY3MDBcdTU5MjdcdTRFRkJcdTUyRDlcdTY1NzgnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnXHU5ODZGXHU3OTNBXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkQ5XHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnXHU2NzAwXHU1OTI3IEluYm94IFx1NjU3OCcsXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdcdTk4NkZcdTc5M0EgSW5ib3ggXHU2QTk0XHU1NDBEXHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnXHU5NURDXHU2NUJDJyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCNThcdTdCQTFcdTc0MDZcdTUxMDBcdTg4NjhcdTY3N0ZcdTMwMDJLT1MgXHU3NTFGXHU2MTRCXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcbiAgfSxcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlIGEga2V5IHVzaW5nIHRoZSBjdXJyZW50IGxvY2FsZS5cbiAqIFN1cHBvcnRzIHtwbGFjZWhvbGRlcn0gc3Vic3RpdHV0aW9uIHZpYSB0aGUgcGFyYW1zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdChrZXksIGxvY2FsZSwgcGFyYW1zID0ge30pIHtcbiAgY29uc3QgZGljdCA9IExPQ0FMRVNbbG9jYWxlXSB8fCBMT0NBTEVTWyd6aC1jbiddO1xuICBsZXQgdGV4dCA9IGRpY3Rba2V5XTtcbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRleHQgPSBMT0NBTEVTWyd6aC1jbiddW2tleV07XG4gIH1cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMocGFyYW1zKSkge1xuICAgIHRleHQgPSBTdHJpbmcodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7a31cXFxcfWAsICdnJyksIFN0cmluZyh2KSk7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyB0LCBMT0NBTEVTLCBMT0NBTEVfS0VZUzogT2JqZWN0LmtleXMoTE9DQUxFUykgfTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgQUkgQ2hhdCBTZXJ2aWNlXG4vLyBGTE9Xbm90ZS1jb21wYXRpYmxlIHByb3ZpZGVyIHJlc29sdXRpb24gKyBPcGVuQUktY29tcGF0aWJsZSBzdHJlYW1pbmcgY2xpZW50LlxuXG4vKiogRGVmYXVsdCBzeXN0ZW0gcHJvbXB0IGZvciBLT1MgY29udGV4dCAqL1xuY29uc3QgREVGQVVMVF9TWVNURU1fUFJPTVBUID0gJ1lvdSBhcmUgYSBrbm93bGVkZ2UgbWFuYWdlbWVudCBhc3Npc3RhbnQgaGVscGluZyB0aGUgdXNlciBuYXZpZ2F0ZSB0aGVpciBLT1MgdmF1bHQuIFJlc3BvbmQgY29uY2lzZWx5IGluIHRoZSB1c2VyXFwncyBsYW5ndWFnZS4nO1xuXG4vKipcbiAqIEZMT1dub3RlIHByb3ZpZGVyIHByZXNldHMgKG1pcnJvcnMgRkxPV25vdGUncyBidWlsdC1pbiBwcm92aWRlcnMpLlxuICogS2V5ID0gcHJvdmlkZXJJZCB1c2VkIGluIEZMT1dub3RlJ3MgZGF0YS5qc29uIC0+IGFnZW50UHJvdmlkZXIuZGlyZWN0LnByb3ZpZGVySWRcbiAqL1xuY29uc3QgRkxPV05PVEVfUFJPVklERVJTID0ge1xuICAnZGVlcHNlZWsnOiB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmRlZXBzZWVrLmNvbS92MScsXG4gICAgbGFiZWw6ICdEZWVwU2VlaycsXG4gIH0sXG4gICdvcGVuYWktb2ZmaWNpYWwnOiB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnLFxuICAgIGxhYmVsOiAnT3BlbkFJJyxcbiAgfSxcbiAgJ29wZW5haS1jb21wYXQtY3VzdG9tJzoge1xuICAgIGJhc2VVcmw6ICcnLCAvLyB1c2VyLWNvbmZpZ3VyZWRcbiAgICBsYWJlbDogJ09wZW5BSSBDb21wYXRpYmxlJyxcbiAgfSxcbiAgJ2NsYXVkZSc6IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuYW50aHJvcGljLmNvbS92MScsXG4gICAgbGFiZWw6ICdBbnRocm9waWMgQ2xhdWRlJyxcbiAgfSxcbiAgJ2dlbWluaSc6IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhL29wZW5haScsXG4gICAgbGFiZWw6ICdHb29nbGUgR2VtaW5pJyxcbiAgfSxcbiAgJ3NpbGljb25mbG93Jzoge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5zaWxpY29uZmxvdy5jbi92MScsXG4gICAgbGFiZWw6ICdTaWxpY29uRmxvdycsXG4gIH0sXG4gICdncm9xJzoge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5ncm9xLmNvbS9vcGVuYWkvdjEnLFxuICAgIGxhYmVsOiAnR3JvcScsXG4gIH0sXG4gICd0b2dldGhlcic6IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkudG9nZXRoZXIueHl6L3YxJyxcbiAgICBsYWJlbDogJ1RvZ2V0aGVyIEFJJyxcbiAgfSxcbn07XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuLy8gUmVzb2x2ZXI6IHJlYWQgRkxPV25vdGUncyBwcm92aWRlciBjb25maWdcbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4vKipcbiAqIFRyeSB0byBsb2FkIEZMT1dub3RlJ3MgYWdlbnQgcHJvdmlkZXIgY29uZmlndXJhdGlvbiBmcm9tIGl0cyBkYXRhLmpzb24uXG4gKiBSZXR1cm5zIG51bGwgaWYgRkxPV25vdGUgaXMgbm90IGluc3RhbGxlZCBvciBub3QgY29uZmlndXJlZC5cbiAqXG4gKiBAcGFyYW0ge3sgYWRhcHRlcjogeyByZWFkOiAocGF0aCkgPT4gUHJvbWlzZTxzdHJpbmc+IH0gfX0gdmF1bHRBZGFwdGVyXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVGbG93bm90ZVByb3ZpZGVyKHZhdWx0QWRhcHRlcikge1xuICBpZiAoIXZhdWx0QWRhcHRlciB8fCB0eXBlb2YgdmF1bHRBZGFwdGVyLnJlYWQgIT09ICdmdW5jdGlvbicpIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gYXdhaXQgdmF1bHRBZGFwdGVyLnJlYWQoJy5vYnNpZGlhbi9wbHVnaW5zL2Zsb3dub3RlL2RhdGEuanNvbicpO1xuICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UocmF3KTtcbiAgICBjb25zdCBhcCA9IGNvbmZpZyAmJiBjb25maWcuc2V0dGluZ3MgJiYgY29uZmlnLnNldHRpbmdzLmFnZW50UHJvdmlkZXI7XG4gICAgaWYgKCFhcCB8fCAhYXAuZW5hYmxlZCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkaXJlY3QgPSBhcC5kaXJlY3QgfHwgYXBbYXAubW9kZV07XG4gICAgaWYgKCFkaXJlY3QpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcHJvdmlkZXJJZCA9IGRpcmVjdC5wcm92aWRlcklkO1xuICAgIGNvbnN0IHByZXNldCA9IEZMT1dOT1RFX1BST1ZJREVSU1twcm92aWRlcklkXTtcbiAgICBpZiAoIXByZXNldCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBhcGlLZXlzID0gZGlyZWN0LmFwaUtleXMgfHwge307XG4gICAgY29uc3QgYXBpS2V5ID0gYXBpS2V5c1twcm92aWRlcklkXTtcbiAgICBpZiAoIWFwaUtleSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBtb2RlbCA9IGRpcmVjdC5tb2RlbCB8fCBwcmVzZXQuZGVmYXVsdE1vZGVsIHx8ICcnO1xuICAgIGNvbnN0IGJhc2VVcmwgPSBkaXJlY3QuYmFzZVVybE92ZXJyaWRlIHx8IHByZXNldC5iYXNlVXJsO1xuICAgIGlmICghYmFzZVVybCAmJiBwcm92aWRlcklkICE9PSAnb3BlbmFpLWNvbXBhdC1jdXN0b20nKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIEZvciBvcGVuYWktY29tcGF0LWN1c3RvbSwgd2UgbmVlZCB0aGUgdXNlcidzIG1hbnVhbCBjb25maWdcbiAgICBpZiAocHJvdmlkZXJJZCA9PT0gJ29wZW5haS1jb21wYXQtY3VzdG9tJyAmJiAhYmFzZVVybCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJJZCxcbiAgICAgIGFwaUtleSxcbiAgICAgIG1vZGVsLFxuICAgICAgYmFzZVVybCxcbiAgICAgIGxhYmVsOiBwcmVzZXQubGFiZWwsXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4vLyBBSUNoYXQgY2xhc3Ncbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jbGFzcyBBSUNoYXQge1xuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gUmVzb2x2ZWQgcHJvdmlkZXIgc2V0dGluZ3MgKGZyb20gcmVzb2x2ZUZsb3dub3RlUHJvdmlkZXIgb3IgbWFudWFsKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2V0dGluZ3MubG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXR0aW5ncy5iYXNlVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXR0aW5ncy5hcGlLZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmdzLm1vZGVsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2V0dGluZ3Muc3lzdGVtUHJvbXB0XVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3MgfHwge307XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICB0aGlzLl9hZGRXZWxjb21lKCk7XG4gIH1cblxuICBnZXQgX2xvY2FsZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy5sb2NhbGUpIHx8ICd6aC1jbic7XG4gIH1cblxuICBnZXQgaXNDb25maWd1cmVkKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLnNldHRpbmdzIHx8IHt9O1xuICAgIHJldHVybiAhIShzLmJhc2VVcmwgJiYgcy5hcGlLZXkgJiYgcy5tb2RlbCk7XG4gIH1cblxuICAvKiogUHJvdmlkZXIgbGFiZWwgZm9yIGRpc3BsYXkgKi9cbiAgZ2V0IHByb3ZpZGVyTGFiZWwoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuc2V0dGluZ3MgfHwge307XG4gICAgcmV0dXJuIHMucHJvdmlkZXJMYWJlbCB8fCBzLmJhc2VVcmwgfHwgJ1Vua25vd24nO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuX2FkZFdlbGNvbWUoKTtcbiAgfVxuXG4gIGdldEhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgdXNlciBtZXNzYWdlIGFuZCBzdHJlYW0gdGhlIGFzc2lzdGFudCByZXNwb25zZS5cbiAgICovXG4gIHNlbmRNZXNzYWdlKGNvbnRlbnQsIGNhbGxiYWNrcyA9IHt9KSB7XG4gICAgY29uc3QgeyBvblRva2VuLCBvbkRvbmUsIG9uRXJyb3IgfSA9IGNhbGxiYWNrcztcbiAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncyB8fCB7fTtcblxuICAgIGlmICghdGhpcy5pc0NvbmZpZ3VyZWQpIHtcbiAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKG5ldyBFcnJvcignQUkgbm90IGNvbmZpZ3VyZWQnKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyTXNnID0geyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IFN0cmluZyhjb250ZW50KS50cmltKCkgfTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2godXNlck1zZyk7XG5cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSAocy5zeXN0ZW1Qcm9tcHQgfHwgJycpLnRyaW0oKSB8fCBERUZBVUxUX1NZU1RFTV9QUk9NUFQ7XG4gICAgLy8gQnVpbGQgcGF5bG9hZCBcdTIwMTQgaW5jbHVkZSBzeXN0ZW0gcHJvbXB0IGZyb20gc2V0dGluZ3Mgb25seSwgbm90IGZyb20gaGlzdG9yeVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtb2RlbDogcy5tb2RlbCxcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHsgcm9sZTogJ3N5c3RlbScsIGNvbnRlbnQ6IHN5c3RlbVByb21wdCB9LFxuICAgICAgICAuLi50aGlzLm1lc3NhZ2VzLmZpbHRlcigobSkgPT4gbS5yb2xlICE9PSAnc3lzdGVtJyksXG4gICAgICBdLFxuICAgIH07XG5cbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBzaWduYWwgPSB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG5cbiAgICBsZXQgZnVsbFJlc3BvbnNlID0gJyc7XG5cbiAgICB0aGlzLl9kb1N0cmVhbVJlcXVlc3Qocy5iYXNlVXJsLCBzLmFwaUtleSwgcGF5bG9hZCwgc2lnbmFsLCB7XG4gICAgICBvblRva2VuOiAodGV4dCkgPT4ge1xuICAgICAgICBmdWxsUmVzcG9uc2UgKz0gdGV4dDtcbiAgICAgICAgaWYgKG9uVG9rZW4pIG9uVG9rZW4odGV4dCk7XG4gICAgICB9LFxuICAgICAgb25Eb25lOiAoKSA9PiB7XG4gICAgICAgIGlmIChmdWxsUmVzcG9uc2UpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogZnVsbFJlc3BvbnNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9uRG9uZSkgb25Eb25lKGZ1bGxSZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25hbDtcbiAgfVxuXG4gIGFib3J0KCkge1xuICAgIGlmICh0aGlzLmFib3J0Q29udHJvbGxlcikge1xuICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgUHJpdmF0ZSBcdTI1MDBcdTI1MDBcblxuICBfYWRkV2VsY29tZSgpIHtcbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLl9sb2NhbGU7XG4gICAgY29uc3Qgd2VsY29tZXMgPSB7XG4gICAgICAnemgtY24nOiAnXHU0RjYwXHU1OTdEXHVGRjAxXHU2MjExXHU2NjJGIEtPUyBBSSBcdTUyQTlcdTYyNEJcdTMwMDJcdTRGNjBcdTUzRUZcdTRFRTVcdTk1RUVcdTYyMTFcdTUxNzNcdTRFOEVcdTc3RTVcdThCQzZcdTVFOTNcdTMwMDFcdTk4NzlcdTc2RUVcdTcyQjZcdTYwMDFcdTYyMTZcdTRFRkJcdTRGNTUgS09TIFx1NzZGOFx1NTE3M1x1NzY4NFx1OTVFRVx1OTg5OFx1MzAwMicsXG4gICAgICAnZW4nOiAnSGVsbG8hIEkgYW0gdGhlIEtPUyBBSSBhc3Npc3RhbnQuIEFzayBtZSBhYm91dCB0aGUga25vd2xlZGdlIGJhc2UsIHByb2plY3Qgc3RhdHVzLCBvciBhbnl0aGluZyBLT1MtcmVsYXRlZC4nLFxuICAgICAgJ3poLXR3JzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU1NTRGXHU2MjExXHU5NURDXHU2NUJDXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAxXHU1QzA4XHU2ODQ4XHU3MkMwXHU2MTRCXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTk1RENcdTc2ODRcdTU1NEZcdTk4NENcdTMwMDInLFxuICAgIH07XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgY29udGVudDogd2VsY29tZXNbbG9jYWxlXSB8fCB3ZWxjb21lc1snemgtY24nXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9kb1N0cmVhbVJlcXVlc3QoYmFzZVVybCwgYXBpS2V5LCBwYXlsb2FkLCBzaWduYWwsIGNhbGxiYWNrcykge1xuICAgIGNvbnN0IHsgb25Ub2tlbiwgb25Eb25lLCBvbkVycm9yIH0gPSBjYWxsYmFja3M7XG5cbiAgICAvLyBCdWlsZCB0aGUgZnVsbCBVUkxcbiAgICBsZXQgZW5kcG9pbnQgPSBTdHJpbmcoYmFzZVVybCB8fCAnJykudHJpbSgpO1xuICAgIGlmICghZW5kcG9pbnQpIGVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnO1xuICAgIGlmICghL1xcL2NoYXRcXC9jb21wbGV0aW9ucyQvaS50ZXN0KGVuZHBvaW50KSkge1xuICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvY2hhdC9jb21wbGV0aW9ucyc7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgU3RyaW5nKGFwaUtleSB8fCAnJykudHJpbSgpLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnBheWxvYWQsIHN0cmVhbTogdHJ1ZSB9KSxcbiAgICAgICAgc2lnbmFsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgbGV0IGVyckJvZHkgPSAnJztcbiAgICAgICAgdHJ5IHsgZXJyQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgfSBjYXRjaCB7fVxuICAgICAgICBjb25zdCBlcnJNc2cgPSAnSFRUUCAnICsgcmVzcG9uc2Uuc3RhdHVzICsgKGVyckJvZHkgPyAnOiAnICsgZXJyQm9keS5zbGljZSgwLCAyMDApIDogJycpO1xuICAgICAgICBpZiAob25FcnJvcikgb25FcnJvcihuZXcgRXJyb3IoZXJyTXNnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgIGxldCBidWZmZXIgPSAnJztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuXG4gICAgICAgIGJ1ZmZlciArPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSwgeyBzdHJlYW06IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gYnVmZmVyLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgICAgIGlmICghdHJpbW1lZCB8fCB0cmltbWVkID09PSAnZGF0YTogW0RPTkVdJykgY29udGludWU7XG4gICAgICAgICAgaWYgKCF0cmltbWVkLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSBjb250aW51ZTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0cmltbWVkLnNsaWNlKDYpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ganNvbi5jaG9pY2VzICYmIGpzb24uY2hvaWNlc1swXSAmJiBqc29uLmNob2ljZXNbMF0uZGVsdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVsdGEgJiYgZGVsdGEuY29udGVudDtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZsdXNoIHJlbWFpbmluZyBidWZmZXJcbiAgICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBidWZmZXIudHJpbSgpO1xuICAgICAgICBpZiAodHJpbW1lZC5zdGFydHNXaXRoKCdkYXRhOiAnKSAmJiB0cmltbWVkICE9PSAnZGF0YTogW0RPTkVdJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0cmltbWVkLnNsaWNlKDYpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ganNvbi5jaG9pY2VzICYmIGpzb24uY2hvaWNlc1swXSAmJiBqc29uLmNob2ljZXNbMF0uZGVsdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVsdGEgJiYgZGVsdGEuY29udGVudDtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkRvbmUpIG9uRG9uZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHJldHVybjtcbiAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBBSUNoYXQsIHJlc29sdmVGbG93bm90ZVByb3ZpZGVyLCBGTE9XTk9URV9QUk9WSURFUlMsIERFRkFVTFRfU1lTVEVNX1BST01QVCB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzaGFyZWQgdXRpbGl0aWVzXG5cbi8qKlxuICogUGFyc2UgZnJvbnRtYXR0ZXIgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICogUmV0dXJucyB7fSBpZiBubyB2YWxpZCBmcm9udG1hdHRlciBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoY29udGVudCB8fCAnJyk7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXi0tLVxcbihbXFxzXFxTXSo/KVxcbi0tLS8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG5cbiAgY29uc3Qgb3V0ID0ge307XG4gIG1hdGNoWzFdLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghaXRlbSB8fCBpdGVtLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbG9uID0gaXRlbS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGNvbG9uIDw9IDApIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBpdGVtLnNsaWNlKDAsIGNvbG9uKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gaXRlbS5zbGljZShjb2xvbiArIDEpLnRyaW0oKTtcbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkuc3BsaXQoJywnKS5tYXAoKHApID0+IHAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIG91dFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCBmcm9udG1hdHRlciB2YWx1ZSBieSBtdWx0aXBsZSBwb3NzaWJsZSBrZXkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGZtVmFsdWUoZnJvbnRtYXR0ZXIsIGtleXMsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgJiYgdHlwZW9mIGZyb250bWF0dGVyID09PSAnb2JqZWN0JyA/IGZyb250bWF0dGVyIDoge307XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZtLCBrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZtW2tleV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgICAgaWYgKHRleHQpIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogRm9ybWF0IGRhdGUgdG8gWVlZWS1NTS1ERCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGVTdHIoZGF0ZSkge1xuICBjb25zdCBkID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBLT1MgZGFpbHkgbm90ZSBwYXRoIGZvciBhIGdpdmVuIGRhdGUuXG4gKiBLT1MgY29udmVudGlvbjogUGVyaW9kaWMvWVlZWS9NTS9ZWVlZLU1NLURELm1kXG4gKi9cbmZ1bmN0aW9uIGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cikge1xuICBjb25zdCBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGBQZXJpb2RpYy8ke3BhcnRzWzBdfS8ke3BhcnRzWzFdfS8ke2RhdGVTdHJ9Lm1kYDtcbn1cblxuLyoqXG4gKiBHZXQgZmlsZSBieSBwYXRoIGZyb20gdmF1bHQsIHJldHVybmluZyBudWxsIGlmIG1pc3NpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVCeVBhdGgodmF1bHQsIHBhdGgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSByZWFkIGZpbGUgdGV4dCBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkRmlsZVRleHQodmF1bHQsIGZpbGUpIHtcbiAgaWYgKCF2YXVsdCB8fCAhZmlsZSkgcmV0dXJuICcnO1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmF1bHQuY2FjaGVkUmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKTtcbiAgICBpZiAodHlwZW9mIHZhdWx0LnJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQucmVhZChmaWxlKSB8fCAnJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0YXNrIHN0YXRzIChvcGVuL2RvbmUvdG90YWwpIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgb3BlbiA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdXFxzKy8udGVzdChsaW5lKSkge1xuICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbW3hYXVxcXVxccysvLnRlc3QobGluZSkpIGRvbmUgKz0gMTtcbiAgICAgIGVsc2Ugb3BlbiArPSAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3BlbixcbiAgICBkb25lLFxuICAgIHRvdGFsOiBvcGVuICsgZG9uZSxcbiAgICBjb21wbGV0aW9uUmF0ZTogb3BlbiArIGRvbmUgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIChvcGVuICsgZG9uZSkpICogMTAwKSA6IDAsXG4gIH07XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFuZCBjbGVhbiBhIGZpbGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gIHJldHVybiBTdHJpbmcocGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLysvZywgJy8nKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzeXN0ZW0vaW50ZXJuYWwgcGF0aCB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHN0YXRzLlxuICovXG5mdW5jdGlvbiBpc1N5c3RlbVBhdGgocGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gIGlmICgvKF58XFwvKVxcLlteL10rKFxcL3wkKS8udGVzdCh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX2xvZ3MvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX21ldGEvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGcm9udG1hdHRlcixcbiAgZm1WYWx1ZSxcbiAgZm9ybWF0RGF0ZVN0cixcbiAgZGFpbHlOb3RlUGF0aCxcbiAgZ2V0RmlsZUJ5UGF0aCxcbiAgcmVhZEZpbGVUZXh0LFxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcbiAgbm9ybWFsaXplUGF0aCxcbiAgaXNTeXN0ZW1QYXRoLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcHJvamVjdCBzY2FubmluZyBzZXJ2aWNlXG5cbmNvbnN0IHsgcGFyc2VGcm9udG1hdHRlciwgZm1WYWx1ZSwgcmVhZEZpbGVUZXh0LCB0YXNrU3RhdHNGcm9tQ29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIFNjYW4gMSBQcm9qZWN0cy8gZGlyZWN0b3JpZXMgYW5kIGJ1aWxkIGEgbGlzdCBvZiBwcm9qZWN0IG92ZXJ2aWV3IGZpbGVzLlxuICovXG5mdW5jdGlvbiBmaW5kUHJvamVjdEZpbGVzKHZhdWx0KSB7XG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gU3RyaW5nKGZpbGUucGF0aCB8fCAnJyk7XG4gICAgLy8gTWF0Y2g6IDEgUHJvamVjdHMvPHByb2plY3QtZGlyPi88cHJvamVjdC1uYW1lPi5tZFxuICAgIC8vIEV4Y2x1ZGU6IFx1OTg3OVx1NzZFRVx1NjAzQlx1ODlDOC5tZCwgUkVBRE1FLm1kXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5zcGxpdCgnLycpLmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdSRUFETUUubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdcXHVEODNEXFx1RENDRCBcXHU5ODc5XFx1NzZFRVxcdTYwM0JcXHU4OUM4Lm1kJykpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2UgcHJvamVjdCBtZXRhZGF0YSBmcm9tIGEgZmlsZSdzIGNvbnRlbnQgYW5kIE9ic2lkaWFuIG1ldGFkYXRhIGNhY2hlLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgbWV0YWRhdGFDYWNoZSkge1xuICBjb25zdCBmbSA9IHtcbiAgICAuLi5wYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpLFxuICB9O1xuXG4gIC8vIFRyeSB0byBnZXQgcmljaGVyIGZyb250bWF0dGVyIGZyb20gbWV0YWRhdGEgY2FjaGVcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZSA9IG1ldGFkYXRhQ2FjaGUgJiYgdHlwZW9mIG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmZyb250bWF0dGVyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZtLCBjYWNoZS5mcm9udG1hdHRlcik7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgY29uc3Qgc3RhdHVzID0gZm1WYWx1ZShmbSwgWydzdGF0dXMnLCAnU3RhdHVzJ10sICdhY3RpdmUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmbVZhbHVlKGZtLCBbJ3ByaW9yaXR5JywgJ1ByaW9yaXR5J10sICcnKTtcbiAgY29uc3QgaXRlcmF0aW9uID0gZm1WYWx1ZShmbSwgWydpdGVyYXRpb24nLCAnSXRlcmF0aW9uJ10sICcnKTtcbiAgY29uc3QgYXJlYSA9IGZtVmFsdWUoZm0sIFsnYXJlYScsICdBcmVhJywgJ2RvbWFpbicsICdEb21haW4nXSwgJycpO1xuICBjb25zdCB0YWdzID0gQXJyYXkuaXNBcnJheShmbS50YWdzKSA/IGZtLnRhZ3MgOiBbXTtcblxuICAvLyBDb21wdXRlIHRhc2sgcHJvZ3Jlc3MgZnJvbSB0aGUgcHJvamVjdCBmaWxlIGNvbnRlbnRcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAvLyBHZXQgcHJvamVjdCB0aXRsZSBmcm9tIGZpcnN0IGgxIG9yIGRpcmVjdG9yeSBuYW1lXG4gIGNvbnN0IGhlYWRpbmcgPSBTdHJpbmcoY29udGVudCB8fCAnJykubWF0Y2goL14jXFxzKyguKykkL20pO1xuICBjb25zdCB0aXRsZSA9IGhlYWRpbmcgPyBoZWFkaW5nWzFdLnRyaW0oKSA6IGZpbGUuYmFzZW5hbWUgfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICB0aXRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHJpb3JpdHksXG4gICAgaXRlcmF0aW9uLFxuICAgIGFyZWEsXG4gICAgdGFncyxcbiAgICB0YXNrcyxcbiAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIGN0aW1lOiBmaWxlLnN0YXQ/LmN0aW1lIHx8IDAsXG4gIH07XG59XG5cbi8qKlxuICogTGlzdCBhbGwgcHJvamVjdHMsIHdpdGggb3B0aW9uYWwgZmlsdGVyaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFjdGl2ZU9ubHkgXHUyMDE0IG9ubHkgcmV0dXJuIGFjdGl2ZSBwcm9qZWN0c1xuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0UHJvamVjdHMoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IGZpbmRQcm9qZWN0RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBhcHAubWV0YWRhdGFDYWNoZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IGFjdGl2ZSBmaXJzdCwgdGhlbiBieSBwcmlvcml0eSwgdGhlbiBieSBtdGltZVxuICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUFjdGl2ZSA9IGEuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBjb25zdCBiQWN0aXZlID0gYi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGlmIChhQWN0aXZlICE9PSBiQWN0aXZlKSByZXR1cm4gYUFjdGl2ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IHJhbmsgPSAocCkgPT4ge1xuICAgICAgY29uc3QgdiA9IFN0cmluZyhwIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHYgPT09ICdwMScgfHwgdiA9PT0gJ2hpZ2gnKSByZXR1cm4gMDtcbiAgICAgIGlmICh2ID09PSAncDInIHx8IHYgPT09ICdtZWRpdW0nKSByZXR1cm4gMTtcbiAgICAgIGlmICh2ID09PSAncDMnIHx8IHYgPT09ICdsb3cnKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAzO1xuICAgIH07XG4gICAgY29uc3QgYnlQcmlvcml0eSA9IHJhbmsoYS5wcmlvcml0eSkgLSByYW5rKGIucHJpb3JpdHkpO1xuICAgIGlmIChieVByaW9yaXR5ICE9PSAwKSByZXR1cm4gYnlQcmlvcml0eTtcbiAgICByZXR1cm4gYi5tdGltZSAtIGEubXRpbWU7XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmFjdGl2ZU9ubHkpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLnN0YXR1cyA9PT0gJ2FjdGl2ZScpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgZW5naW5lIHN0YXRlIGZyb20gX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kIChidWxsZXQtbGlzdCBmb3JtYXQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRFbmdpbmVTdGF0ZShhcHApIHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIHRyaWFnZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNvbXBpbGU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaW5rOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgZGFpbHk6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBwcm9qZWN0OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgYXJjaGl2ZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNhbnZhczogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgICdrb3MtaW5pdCc6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaWZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gIH07XG5cbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCgnX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kJyk7XG4gIGlmICghZmlsZSkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG5cbiAgLy8gU1RBVEUubWQgdXNlcyBzZWN0aW9uLWJhc2VkIGJ1bGxldCBmb3JtYXQ6XG4gIC8vICMjIHRyaWFnZVxuICAvLyAtIGxhc3RfcnVuOiAyMDI2LTA2LTA5XG4gIC8vIC0gcGVuZGluZzogMFxuICAvLyAtIHN1bW1hcnk6IEluYm94IGNsZWFyZWRcbiAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQgY3VycmVudEVuZ2luZSA9IG51bGw7XG5cbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBsaW5lLm1hdGNoKC9eIyNcXHMrKFxcUyspXFxzKiQvKTtcbiAgICBpZiAoc2VjdGlvbiAmJiBlbmdpbmVzLmluY2x1ZGVzKHNlY3Rpb25bMV0pKSB7XG4gICAgICBjdXJyZW50RW5naW5lID0gc2VjdGlvblsxXTtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXSA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRFbmdpbmUpIHJldHVybjtcbiAgICBjb25zdCBrdiA9IGxpbmUubWF0Y2goL14tXFxzKyhcXHcrKTpcXHMqKC4qKSQvKTtcbiAgICBpZiAoa3YpIHtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXVtrdlsxXV0gPSBrdlsyXS50cmltKCkgfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5vcm1hbGl6ZSB0byB7IGxhc3RSdW4sIHN0YXR1cywgc3VtbWFyeSB9IGZvciBjb2NrcGl0IGNvbnN1bXB0aW9uXG4gIGNvbnN0IHN0YXRlID0ge307XG4gIGVuZ2luZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHBhcnNlZFtlXSB8fCB7fTtcbiAgICBzdGF0ZVtlXSA9IHtcbiAgICAgIGxhc3RSdW46IHJhdy5sYXN0X3J1biB8fCByYXcubGFzdF9kYWlseSB8fCBudWxsLFxuICAgICAgc3RhdHVzOiByYXcucGVuZGluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKE51bWJlcihyYXcucGVuZGluZykgPT09IDAgPyAnZG9uZScgOiAncGVuZGluZycpXG4gICAgICAgIDogJ3BlbmRpbmcnLFxuICAgICAgc3VtbWFyeTogcmF3LnN1bW1hcnkgfHwgbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kUHJvamVjdEZpbGVzLFxuICBwYXJzZVByb2plY3QsXG4gIGxpc3RQcm9qZWN0cyxcbiAgZ2V0RW5naW5lU3RhdGUsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IFx1OTIyNT9ob21lIGRhdGEgZW5naW5lXHJcblxyXG5jb25zdCB7XHJcbiAgcGFyc2VGcm9udG1hdHRlcixcclxuICBmbVZhbHVlLFxyXG4gIGZvcm1hdERhdGVTdHIsXHJcbiAgZGFpbHlOb3RlUGF0aCxcclxuICBnZXRGaWxlQnlQYXRoLFxyXG4gIHJlYWRGaWxlVGV4dCxcclxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcclxuICBpc1N5c3RlbVBhdGgsXHJcbiAgbm9ybWFsaXplUGF0aCxcclxufSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgeyBsaXN0UHJvamVjdHMsIGdldEVuZ2luZVN0YXRlIH0gPSByZXF1aXJlKCcuL3Byb2plY3Qtc2VydmljZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0b2RheSdzIGRhaWx5IG5vdGUgc3RhdGUuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRlKGFwcCkge1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cik7XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuXHJcbiAgaWYgKCFmaWxlKSB7XHJcbiAgICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IGZhbHNlLCBmaWxlOiBudWxsLCB0YXNrczogeyBvcGVuOjAsZG9uZTowLHRvdGFsOjAsY29tcGxldGlvblJhdGU6MCB9LCB0YXNrSXRlbXM6IFtdIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcclxuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gIGNvbnN0IHRhc2tJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZXNbaV0gfHwgJycpLm1hdGNoKC9eKFxccypbLSpdXFxzK1xcWykoWyB4WF0pKFxcXVxccyspKC4rKSQvKTtcclxuICAgIGlmICghbSkgY29udGludWU7XHJcbiAgICBjb25zdCB0ZXh0ID0gbVs0XS50cmltKCk7XHJcbiAgICBpZiAoIXRleHQpIGNvbnRpbnVlO1xyXG4gICAgdGFza0l0ZW1zLnB1c2goeyBsaW5lSW5kZXg6IGksIHRleHQsIGRvbmU6IC94L2kudGVzdChtWzJdKSB9KTtcclxuICAgIGlmICh0YXNrSXRlbXMubGVuZ3RoID49IDEyKSBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgdG9kYXkncyBmb2N1cyAoZmlyc3QgaDIgb3IgYm9sZCBsaW5lIHVuZGVyICMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjYpXHJcbiAgbGV0IGZvY3VzID0gJyc7XHJcbiAgY29uc3QgZm9jdXNNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjZbXiNdKj9cXG4oLSAuKykvKTtcclxuICBpZiAoZm9jdXNNYXRjaCkgZm9jdXMgPSBmb2N1c01hdGNoWzFdLnJlcGxhY2UoL14tIC8sICcnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogdHJ1ZSwgZmlsZSwgdGFza3MsIHRhc2tJdGVtcywgZm9jdXMsIGNvbnRlbnQgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IGZpbGVzIGluIDAgSW5ib3ggKGV4Y2x1ZGluZyBfcHJvY2Vzc2VkLykuXHJcbiAqIFJldHVybnMgVEZpbGUgb2JqZWN0cyAod2l0aCAucGF0aCwgLmJhc2VuYW1lLCAuc3RhdCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmJveEZpbGVzKHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICByZXR1cm4gcC5zdGFydHNXaXRoKCcwIEluYm94LycpICYmICFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdmF1bHQgYW5kIGNvbXB1dGUga25vd2xlZGdlIGdhcmRlbiBzdGF0aXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCB8fCB0eXBlb2YgYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuICBjb25zdCB0b2RheSA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBsZXQgdG9kYXlOZXcgPSAwO1xyXG4gIGNvbnN0IHN0YXRzID0geyByb290OjAsIHByb2plY3RzOjAsIGFyZWFzOjAsIHJlc291cmNlczowLCBpbmJveDowLCBwZXJpb2RpYzowLCBzeXN0ZW06MCB9O1xyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICBpZiAocC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSBzdGF0cy5wcm9qZWN0cyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcyIEFyZWFzLycpKSBzdGF0cy5hcmVhcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCczIFJlc291cmNlcy8nKSkgc3RhdHMucmVzb3VyY2VzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykpIHsgaWYgKCFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgc3RhdHMuaW5ib3ggKz0gMTsgfVxyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgc3RhdHMucGVyaW9kaWMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnXycpIHx8IHAuc3RhcnRzV2l0aCgnLicpKSBzdGF0cy5zeXN0ZW0gKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkge31cclxuICAgIGVsc2Ugc3RhdHMucm9vdCArPSAxO1xyXG5cclxuICAgIC8vIENvdW50IHRvZGF5LW5ldyBmaWxlc1xyXG4gICAgY29uc3QgY3RpbWUgPSBmLnN0YXQ/LmN0aW1lID8gbmV3IERhdGUoZi5zdGF0LmN0aW1lKSA6IG51bGw7XHJcbiAgICBpZiAoY3RpbWUpIHtcclxuICAgICAgY29uc3QgY2QgPSBmb3JtYXREYXRlU3RyKGN0aW1lKTtcclxuICAgICAgaWYgKGNkID09PSB0b2RheSkgdG9kYXlOZXcgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgdG90YWxOb3RlczogZmlsZXMubGVuZ3RoLCB0b2RheU5ldywgc3RhdHMgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZWNlbnQgbW9kaWZpZWQgZmlsZXMgKHRvcCAxMCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZWNlbnRBY3Rpdml0eSh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpXHJcbiAgICAuZmlsdGVyKChmKSA9PiAhaXNTeXN0ZW1QYXRoKGYucGF0aCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGIuc3RhdD8ubXRpbWUgfHwgMCkgLSAoYS5zdGF0Py5tdGltZSB8fCAwKSlcclxuICAgIC5zbGljZSgwLCAyNClcclxuICAgIC5tYXAoKGYpID0+ICh7IHBhdGg6IGYucGF0aCwgdGl0bGU6IGYuYmFzZW5hbWUgfHwgJycsIG10aW1lOiBmLnN0YXQ/Lm10aW1lIHx8IDAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGhvdCBjb250ZXh0IGZyb20gX21ldGEvaG90Lm1kXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRIb3RDb250ZXh0KGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsICdfbWV0YS9ob3QubWQnKTtcclxuICBpZiAoIWZpbGUpIHJldHVybiBbXTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KVxccypbXFx1MjAxNFxcdTIwMTNcXC1dXFxzKiguKykkLyk7XHJcbiAgICBpZiAobSkgZW50cmllcy5wdXNoKHsgZGF0ZTogbVsxXSwgc3VtbWFyeTogbVsyXS50cmltKCkgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVudHJpZXMuc2xpY2UoMCwgNSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHRoZSBjdXJyZW50IHdlZWsncyBkYWlseSBub3RlcyBmb3Igd2Vla2x5IHJlY29yZCBiYXIgY2hhcnQuXHJcbiAqIFJldHVybnMgNyBjZWxscyAoTW9uLVN1bikgd2l0aCBjYXB0dXJlIGNvdW50IHBlciBkYXkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWVrbHlSZWNvcmRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7IC8vIDA9U3VuLCAxPU1vbiAuLi5cclxuICBjb25zdCBtb25kYXlPZmZzZXQgPSBkYXlPZldlZWsgPT09IDAgPyAtNiA6IDEgLSBkYXlPZldlZWs7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgZC5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBtb25kYXlPZmZzZXQgKyBpKTtcclxuICAgIGNvbnN0IGRzID0gZm9ybWF0RGF0ZVN0cihkKTtcclxuICAgIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRzKTtcclxuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gICAgICAvLyBDb3VudCBub24tdGFzaywgbm9uLWhlYWRpbmcsIG5vbi1lbXB0eSBsaW5lcyBhcyBcImNhcHR1cmVzXCJcclxuICAgICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBpZiAoL14tLS0kLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eI3sxLDZ9XFxzKy8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eKGNyZWF0ZWR8dXBkYXRlZHx0YWdzfHN0YXR1c3xwcmlvcml0eSkvaS50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFsnXFx1NjVFNScsJ1xcdTRFMDAnLCdcXHU0RThDJywnXFx1NEUwOScsJ1xcdTU2REInLCdcXHU0RTk0JywnXFx1NTE2RCddO1xyXG4gICAgY2VsbHMucHVzaCh7IGRhdGU6IGRzLCBjb3VudCwgd2Vla2RheTogd2Vla2RheXNbaV0sIGlzVG9kYXk6IGRzID09PSBmb3JtYXREYXRlU3RyKG5vdykgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSxcclxuICBnZXRJbmJveEZpbGVzLFxyXG4gIGdldERhc2hib2FyZFN0YXRzLFxyXG4gIGdldFJlY2VudEFjdGl2aXR5LFxyXG4gIGdldEhvdENvbnRleHQsXHJcbiAgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSxcclxuICBsaXN0UHJvamVjdHMsXHJcbn07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCB2MTAgXHUyMDE0IEZMT1dub3RlLXN0eWxlIHBhbmVsIHN3aXRjaGluZyAoaG9tZSAvIGNoYXQpXG4vLyArIFNldHRpbmdzLWF3YXJlICsgbG9jYWxlIGkxOG4gKyBBSSBDaGF0IHdpdGggRkxPV25vdGUgYXV0by1kZXRlY3RcblxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0IH0gPSByZXF1aXJlKCcuL2xvY2FsZScpO1xuY29uc3QgeyBBSUNoYXQsIHJlc29sdmVGbG93bm90ZVByb3ZpZGVyIH0gPSByZXF1aXJlKCcuL2FpLWNoYXQnKTtcbmNvbnN0IHtcbiAgZ2V0VG9kYXlTdGF0ZSwgZ2V0SW5ib3hGaWxlcywgZ2V0RGFzaGJvYXJkU3RhdHMsXG4gIGdldFJlY2VudEFjdGl2aXR5LCBnZXRIb3RDb250ZXh0LCBnZXRXZWVrbHlSZWNvcmRzLFxuICBnZXRFbmdpbmVTdGF0ZSwgbGlzdFByb2plY3RzLFxufSA9IHJlcXVpcmUoJy4vaG9tZS1zZXJ2aWNlJyk7XG5cbmNvbnN0IFZJRVdfVFlQRV9DT0NLUElUID0gJ2tvcy1jb2NrcGl0LXZpZXcnO1xuXG5jbGFzcyBDb2NrcGl0VmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgY29uc3RydWN0b3IobGVhZiwgcGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5haUNoYXQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlUGFuZWwgPSAnaG9tZSc7IC8vICdob21lJyB8ICdjaGF0J1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKSB7IHJldHVybiBWSUVXX1RZUEVfQ09DS1BJVDsgfVxuICBnZXREaXNwbGF5VGV4dCgpIHsgcmV0dXJuIHRoaXMuYWN0aXZlUGFuZWwgPT09ICdjaGF0JyA/ICdLT1MgQUkgQ2hhdCcgOiAnS09TIENvY2twaXQnOyB9XG4gIGdldEljb24oKSB7IHJldHVybiAnZ2F1Z2UnOyB9XG5cbiAgZ2V0IHNldHRpbmdzKCkgeyByZXR1cm4gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbi5zZXR0aW5ncyA6IG51bGw7IH1cblxuICBfdChrZXksIHBhcmFtcykgeyByZXR1cm4gdChrZXksIHRoaXMuc2V0dGluZ3M/LmxvY2FsZSB8fCAnemgtY24nLCBwYXJhbXMpOyB9XG5cbiAgZ2V0IF9kYXlOYW1lcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5fdCgnZGF5LnN1bicpLCB0aGlzLl90KCdkYXkubW9uJyksIHRoaXMuX3QoJ2RheS50dWUnKSxcbiAgICAgIHRoaXMuX3QoJ2RheS53ZWQnKSwgdGhpcy5fdCgnZGF5LnRodScpLCB0aGlzLl90KCdkYXkuZnJpJyksXG4gICAgICB0aGlzLl90KCdkYXkuc2F0JyksXG4gICAgXTtcbiAgfVxuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBzdXBlci5vbmxvYWQoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC1jb250YWluZXInKTtcbiAgICB0aGlzLnJlbmRlckxvYWRpbmcoKTtcbiAgICBhd2FpdCB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHJlbmRlckxvYWRpbmcoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuaW5uZXJIVE1MID1cbiAgICAgICc8ZGl2IGNsYXNzPVwia29zLWNvY2twaXQtbG9hZGluZ1wiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAnPHNwYW4+JyArIHRoaXMuX3QoJ2FwcC5sb2FkaW5nJykgKyAnPC9zcGFuPicgK1xuICAgICAgJzwvZGl2Pic7XG4gIH1cblxuICByZW5kZXJFcnJvcihtc2cpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIHRoaXMuY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYicgfSk7XG4gICAgY29uc3QgZXJyQm94ID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcignLmtvcy1kYicpO1xuICAgIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhcHAuZXJyb3InKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICBpZiAobXNnKSBlcnJCb3guY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogU3RyaW5nKG1zZyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgY29uc3QgcmV0cnkgPSBlcnJCb3guY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFjdGlvbi1idG4nLCB0ZXh0OiAnXFx1MjFCQiBSZXRyeScgfSk7XG4gICAgcmV0cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XG4gIH1cblxuICBhc3luYyByZWZyZXNoKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5jb2xsZWN0RGF0YSh0aGlzLmFwcCk7XG4gICAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0tPUyBDb2NrcGl0IHJlZnJlc2ggZXJyb3I6JywgZSk7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKGU/Lm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbGxlY3REYXRhKGFwcCkge1xuICAgIGNvbnN0IFt0b2RheSwgcHJvamVjdHMsIHN0YXRzLCByZWNlbnQsIGhvdCwgd2Vla2x5LCBlbmdpbmVzLCBpbmJveEZpbGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldFRvZGF5U3RhdGUoYXBwKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGxpc3RQcm9qZWN0cyhhcHAsIHsgYWN0aXZlT25seTogdHJ1ZSB9KS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXREYXNoYm9hcmRTdGF0cyhhcHApLmNhdGNoKCgpID0+ICh7IHRvdGFsTm90ZXM6MCwgdG9kYXlOZXc6MCwgc3RhdHM6e30gfSkpLFxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldFJlY2VudEFjdGl2aXR5KGFwcC52YXVsdCkpLFxuICAgICAgZ2V0SG90Q29udGV4dChhcHApLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldFdlZWtseVJlY29yZHMoYXBwKS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXRFbmdpbmVTdGF0ZShhcHApLmNhdGNoKCgpID0+ICh7fSkpLFxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEluYm94RmlsZXMoYXBwLnZhdWx0KSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlcyB9O1xuICB9XG5cbiAgLyoqIFN3aXRjaCBiZXR3ZWVuICdob21lJyBhbmQgJ2NoYXQnIHBhbmVscyAqL1xuICBzd2l0Y2hQYW5lbChwYW5lbCwgZGF0YSkge1xuICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBwYW5lbDtcbiAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEgfHwgbnVsbCk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgUGFuZWwgUm91dGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHJlbmRlclBhbmVsKGRhdGEpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBtYWluID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYicgfSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVQYW5lbCA9PT0gJ2NoYXQnKSB7XG4gICAgICB0aGlzLnJlbmRlckNoYXRWaWV3KG1haW4sIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckhvbWVWaWV3KG1haW4sIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBIb21lIChEYXNoYm9hcmQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHJlbmRlckhvbWVWaWV3KGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHRoaXMucmVuZGVySGVhZGVyKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgdGhpcy5yZW5kZXJRdWlja0FjdGlvbnMoY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VG9kYXlUYXNrcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVyVG9kYXlUYXNrcyhjb250YWluZXIsIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93VmF1bHRTdGF0cyAhPT0gZmFsc2UgfHwgdGhpcy5zZXR0aW5ncz8uc2hvd1JlY2VudEFjdGl2aXR5ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZW5kZXJUd29Db2x1bW5zKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93TmF2ICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJOYXYoY29udGFpbmVyKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd0luYm94RmlsZXMgIT09IGZhbHNlKSB0aGlzLnJlbmRlckluYm94RmlsZXMoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1Byb2plY3RDYXJkcyAhPT0gZmFsc2UpIHRoaXMucmVuZGVyUHJvamVjdHMoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd0VuZ2luZVN0YXRlICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJFbmdpbmVTdGF0ZShjb250YWluZXIsIGRhdGEpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzPy5zaG93V2Vla2x5Q2hhcnQgIT09IGZhbHNlKSB0aGlzLnJlbmRlcldlZWtseUNoYXJ0KGNvbnRhaW5lciwgZGF0YSk7XG5cbiAgfVxuXG4gIHJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBoID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1oZWFkZXInIH0pO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IGRheU5hbWVzID0gdGhpcy5fZGF5TmFtZXM7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M1ICcgKyBub3cuZm9ybWF0KHRoaXMuX3QoJ2hlYWRlci5kYXRlRm9ybWF0JykpICsgJyBcXHU2NjFGXFx1NjcxRicgKyBkYXlOYW1lc1tub3cuZGF5KCldLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1kYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gZGF0YS50b2RheT8uZXhpc3RzXG4gICAgICA/IHRoaXMuX3QoJ2hlYWRlci5ub3RlQ3JlYXRlZCcpXG4gICAgICA6IHRoaXMuX3QoJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCcpO1xuICAgIGNvbnN0IGZvY3VzVmFsID0gZGF0YS50b2RheT8uZm9jdXMgfHwgJyc7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogdGhpcy5fdCgnaGVhZGVyLm5vdGVTdGF0dXMnLCB7IHN0YXR1czogc3RhdHVzVGV4dCB9KVxuICAgICAgICArICcgIFxcdTAwQjcgICdcbiAgICAgICAgKyB0aGlzLl90KCdoZWFkZXIudG9kYXlGb2N1cycsIHsgZm9jdXM6IGZvY3VzVmFsIHx8IHRoaXMuX3QoJ2hlYWRlci5mb2N1c05vdFNldCcpIH0pLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1zdGF0dXMnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlZnJlc2hCdG4gPSBoLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1yZWZyZXNoLWJ0bicgfSk7XG4gICAgcmVmcmVzaEJ0bi5pbm5lckhUTUwgPSAnXFx1MjFCQic7XG4gICAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW5kZXJMb2FkaW5nKCk7IHRoaXMucmVmcmVzaCgpOyB9KTtcbiAgfVxuXG4gIHJlbmRlclF1aWNrQWN0aW9ucyhjb250YWluZXIpIHtcbiAgICBjb25zdCBxYSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWN0aW9ucycgfSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENDNSAnICsgdGhpcy5fdCgnYWN0aW9uLnBsYW5Ub2RheScpLCBjbWQ6ICdkYWlseS1vcGVuJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0REICcgKyB0aGlzLl90KCdhY3Rpb24uY2FwdHVyZScpLCBjbWQ6ICdjYXB0dXJlJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVERDA0ICcgKyB0aGlzLl90KCdhY3Rpb24uZGF5UmV2aWV3JyksIGNtZDogJ2RheS1yZXZpZXcnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQ0IgJyArIHRoaXMuX3QoJ2FjdGlvbi5uZXdQcm9qZWN0JyksIGNtZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzJcXHVGRTBGICcgKyB0aGlzLl90KCdhY3Rpb24udHJpYWdlJyksIGNtZDogJ3RyaWFnZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnYWN0aW9uLnNldHRpbmdzJyksIGNtZDogJ3NldHRpbmdzJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0VcXHVERDE2ICcgKyB0aGlzLl90KCdhY3Rpb24uYWlDaGF0JyksIGNtZDogJ2FpLWNoYXQnIH0sXG4gICAgXTtcbiAgICBhY3Rpb25zLmZvckVhY2goKGEpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IHFhLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJyB9KTtcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGEubGFiZWw7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuaGFuZGxlUXVpY2tBY3Rpb24oYS5jbWQpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVF1aWNrQWN0aW9uKGNtZCkge1xuICAgIHN3aXRjaCAoY21kKSB7XG4gICAgICBjYXNlICdkYWlseS1vcGVuJzoge1xuICAgICAgICBjb25zdCB7IGRhaWx5Tm90ZVBhdGggfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChkYWlseU5vdGVQYXRoKG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKSwgJycsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FpLWNoYXQnOiB7XG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApLnRoZW4oKGRhdGEpID0+IHRoaXMuc3dpdGNoUGFuZWwoJ2NoYXQnLCBkYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2V0dGluZ3MnOiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB0aGlzLmFwcC5zZXR0aW5nO1xuICAgICAgICBpZiAoc2V0dGluZykgeyBzZXR0aW5nLm9wZW4oKTsgc2V0dGluZy5vcGVuVGFiQnlJZCgna29zLWNvY2twaXQnKTsgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJ19tZXRhL2hvdC5tZCcsICcnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb2RheVRhc2tzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLXRvZGF5LXRhc2tzJyB9KTtcbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1oZWFkZXInIH0pO1xuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1MjcwNSAnICsgdGhpcy5fdCgndGFzay50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgaWYgKGRhdGEudG9kYXk/LnRhc2tzKSB7XG4gICAgICBjb25zdCB7IGRvbmUsIHRvdGFsLCBjb21wbGV0aW9uUmF0ZSB9ID0gZGF0YS50b2RheS50YXNrcztcbiAgICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgdGV4dDogdGhpcy5fdCgndGFzay5wcm9ncmVzcycsIHsgZG9uZSwgdG90YWwsIHJhdGU6IGNvbXBsZXRpb25SYXRlIH0pLFxuICAgICAgICBjbHM6ICdrb3MtZGItdG9kYXktY291bnQgJyArICh0b3RhbCA+IDAgJiYgY29tcGxldGlvblJhdGUgPj0gMTAwID8gJ2tvcy1kYi10b2RheS1kb25lJyA6ICcnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItdG9kYXktbGlzdCcgfSk7XG4gICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhUYXNrSXRlbXMgfHwgMTI7XG4gICAgY29uc3QgaXRlbXMgPSAoZGF0YS50b2RheT8udGFza0l0ZW1zIHx8IFtdKS5zbGljZSgwLCBtYXhJdGVtcyk7XG4gICAgaWYgKCFkYXRhLnRvZGF5Py5leGlzdHMpIHtcbiAgICAgIGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgndGFzay5kYWlseU1pc3NpbmcnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCd0YXNrLm5vbmUnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1pdGVtJyArIChpdGVtLmRvbmUgPyAnIGtvcy1kYi10b2RheS1pdGVtLWRvbmUnIDogJycpIH0pO1xuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1kYi10b2RheS1jYicgfSkudGV4dENvbnRlbnQgPSBpdGVtLmRvbmUgPyAnXFx1MjYxMScgOiAnXFx1MjYxMCc7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogaXRlbS50ZXh0LCBjbHM6ICdrb3MtZGItdG9kYXktdGV4dCcgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQcm9qZWN0cyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDQiAnICsgdGhpcy5fdCgncHJvamVjdC50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgZ3JpZCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtZ3JpZCcgfSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzIHx8IFtdO1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgncHJvamVjdC5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC1jYXJkJyB9KTtcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQocHJvai5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgY29uc3QgdGl0bGVSb3cgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LXRpdGxlLXJvdycgfSk7XG4gICAgICB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogcHJvai50aXRsZSB8fCAnVW5uYW1lZCcsIGNsczogJ2tvcy1kYi1wcm9qZWN0LXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IHAgPSBTdHJpbmcocHJvai5wcmlvcml0eSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChwKSB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogcHJvai5wcmlvcml0eSwgY2xzOiAna29zLWRiLWJhZGdlIGtvcy1kYi1iYWRnZS0nICsgcCB9KTtcbiAgICAgIGNvbnN0IHJhdGUgPSBwcm9qLnRhc2tzPy5jb21wbGV0aW9uUmF0ZSB8fCAwO1xuICAgICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvZ3Jlc3MnLCBhdHRyOiB7IHN0eWxlOiAnLS1wcm9ncmVzczonICsgcmF0ZSArICclJyB9IH0pO1xuICAgICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAocHJvai50YXNrcz8uZG9uZSB8fCAwKSArICcvJyArIChwcm9qLnRhc2tzPy50b3RhbCB8fCAwKSwgY2xzOiAna29zLWRiLXByb2dyZXNzLWxhYmVsJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclR3b0NvbHVtbnMoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgY29scyA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29scycgfSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dWYXVsdFN0YXRzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgbGVmdCA9IGNvbHMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNvbCcgfSk7XG4gICAgICBsZWZ0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDQSAnICsgdGhpcy5fdCgnc3RhdHMudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgICAgY29uc3QgbWV0cmljcyA9IFtcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMudG90YWxOb3RlcycpLCB2YWx1ZTogU3RyaW5nKGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMCkgfSxcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMuYWN0aXZlUHJvamVjdHMnKSwgdmFsdWU6IFN0cmluZygoZGF0YS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoKSB9LFxuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy50b2RheU5ldycpLCB2YWx1ZTogU3RyaW5nKGRhdGEuc3RhdHM/LnRvZGF5TmV3IHx8IDApIH0sXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnKSwgdmFsdWU6IFN0cmluZygoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGgpIH0sXG4gICAgICBdO1xuICAgICAgY29uc3QgZ3JpZCA9IGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW1ldHJpY3MnIH0pO1xuICAgICAgbWV0cmljcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1tZXRyaWMnIH0pO1xuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IG0udmFsdWUsIGNsczogJ2tvcy1kYi1tZXRyaWMtdmFsJyB9KTtcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBtLmxhYmVsLCBjbHM6ICdrb3MtZGItbWV0cmljLWxhYmVsJyB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGRhdGEuc3RhdHM/LnN0YXRzKSB7XG4gICAgICAgIGNvbnN0IHMgPSBkYXRhLnN0YXRzLnN0YXRzO1xuICAgICAgICBjb25zdCBzdWJTdGF0cyA9IFtcbiAgICAgICAgICB7IGxhYmVsOiAnUHJvamVjdHMnLCB2YWx1ZTogU3RyaW5nKHMucHJvamVjdHMgfHwgMCkgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnQXJlYXMnLCB2YWx1ZTogU3RyaW5nKHMuYXJlYXMgfHwgMCkgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnUmVzb3VyY2VzJywgdmFsdWU6IFN0cmluZyhzLnJlc291cmNlcyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdQZXJpb2RpYycsIHZhbHVlOiBTdHJpbmcocy5wZXJpb2RpYyB8fCAwKSB9LFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBzdWJHcmlkID0gbGVmdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc3ViLW1ldHJpY3MnIH0pO1xuICAgICAgICBzdWJTdGF0cy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN1YkdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWMnIH0pO1xuICAgICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IG0udmFsdWUsIGNsczogJ2tvcy1kYi1zdWItbWV0cmljLXZhbCcgfSk7XG4gICAgICAgICAgaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJyAnICsgbS5sYWJlbCwgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWMtbGFiZWwnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dSZWNlbnRBY3Rpdml0eSAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gY29scy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29sJyB9KTtcbiAgICAgIHJpZ2h0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1REQwNCAnICsgdGhpcy5fdCgncmVjZW50LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IGRhdGEucmVjZW50IHx8IFtdO1xuICAgICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhSZWNlbnRJdGVtcyB8fCA4O1xuICAgICAgY29uc3QgbGlzdCA9IHJpZ2h0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1yZWNlbnQtbGlzdCcgfSk7XG4gICAgICBpZiAocmVjZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3JlY2VudC5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjZW50LnNsaWNlKDAsIG1heEl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcmVjZW50LWl0ZW0nIH0pO1xuICAgICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbW9tZW50KGl0ZW0ubXRpbWUpLmZvcm1hdCgnTU0tREQgSEg6bW0nKSwgY2xzOiAna29zLWRiLXJlY2VudC10aW1lJyB9KTtcbiAgICAgICAgICBjb25zdCBsaW5rID0gcm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiAnICAnICsgaXRlbS50aXRsZSwgY2xzOiAna29zLWRiLXJlY2VudC1saW5rJyB9KTtcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTmF2KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IG5hdiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbmF2JyB9KTtcbiAgICBuYXYuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0NcXHVERkUwICcgKyB0aGlzLl90KCduYXYudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGxpbmtzID0gbmF2LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1uYXYtbGlua3MnIH0pO1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0NcXHVERkUwIFxcdTc1MUZcXHU2RDNCJywgcGF0aDogJzIgQXJlYXMvXFx1NzUxRlxcdTZEM0IvXFx1NzUxRlxcdTZEM0InIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRDYgXFx1NUI2NlxcdTRFNjAnLCBwYXRoOiAnMiBBcmVhcy9cXHU1QjY2XFx1NEU2MC9cXHU1QjY2XFx1NEU2MCcgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENCQyBcXHU1REU1XFx1NEY1QycsIHBhdGg6ICcyIEFyZWFzL1xcdTVERTVcXHU0RjVDL1xcdTVERTVcXHU0RjVDJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0Q2IFxcdTYwM0JcXHU3RDIyXFx1NUYxNScsIHBhdGg6ICdfbWV0YS9cXHVEODNEXFx1REQxNyBcXHU3N0U1XFx1OEJDNlxcdTUxNzNcXHU4MDU0L0luZGV4L19pbmRleC16aC1jbicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RERDNFxcdUZFMEYgXFx1NUY1MlxcdTY4NjMnLCBwYXRoOiAnNCBBcmNoaXZlcycgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENFNSBJbmJveCcsIHBhdGg6ICcwIEluYm94JyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdTI2OTlcXHVGRTBGIEhvdCBDYWNoZScsIHBhdGg6ICdfbWV0YS9ob3QnIH0sXG4gICAgXTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBhID0gbGlua3MuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IGl0ZW0ubGFiZWwsIGNsczogJ2tvcy1kYi1uYXYtbGluaycgfSk7XG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckluYm94RmlsZXMoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgZmlsZXMgPSBkYXRhLmluYm94RmlsZXMgfHwgW107XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IG1heEl0ZW1zID0gdGhpcy5zZXR0aW5ncz8ubWF4SW5ib3hJdGVtcyB8fCA2O1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24ga29zLWRiLWluYm94JyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENFNSAnICsgdGhpcy5fdCgnaW5ib3gudGl0bGUnLCB7IGNvdW50OiBmaWxlcy5sZW5ndGggfSksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBsaXN0ID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaW5ib3gtbGlzdCcgfSk7XG4gICAgZmlsZXMuc2xpY2UoMCwgbWF4SXRlbXMpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LWl0ZW0nIH0pO1xuICAgICAgY29uc3QgbmFtZSA9IHJvdy5jcmVhdGVFbCgnYScsIHsgdGV4dDogZmlsZS5iYXNlbmFtZSB8fCBmaWxlLnBhdGgsIGNsczogJ2tvcy1kYi1pbmJveC1saW5rJyB9KTtcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZmlsZS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgaWYgKGZpbGUuc3RhdD8ubXRpbWUpIHtcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtb21lbnQoZmlsZS5zdGF0Lm10aW1lKS5mb3JtYXQoJ01NLUREIEhIOm1tJyksIGNsczogJ2tvcy1kYi1pbmJveC10aW1lJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gbWF4SXRlbXMpIHtcbiAgICAgIGNvbnN0IG1vcmUgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1tb3JlJyB9KTtcbiAgICAgIG1vcmUuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRoaXMuX3QoJ2luYm94Lm1vcmUnLCB7IGNvdW50OiBmaWxlcy5sZW5ndGggLSBtYXhJdGVtcyB9KSwgY2xzOiAna29zLWRiLWluYm94LWxpbmsnIH0pXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnMCBJbmJveCcsICcnLCB0cnVlKTsgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRW5naW5lU3RhdGUoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3QgZW5naW5lcyA9IGRhdGEuZW5naW5lcyB8fCB7fTtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnZW5naW5lLnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBncmlkID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItZW5naW5lLWdyaWQnIH0pO1xuICAgIGNvbnN0IHByaW1hcnlFbmdpbmVzID0gWyd0cmlhZ2UnLCAnY29tcGlsZScsICdsaW5rJywgJ2RhaWx5JywgJ3Byb2plY3QnLCAnYXJjaGl2ZSddO1xuICAgIGNvbnN0IGhhc0RhdGEgPSBwcmltYXJ5RW5naW5lcy5zb21lKChlKSA9PiBlbmdpbmVzW2VdPy5sYXN0UnVuIHx8IGVuZ2luZXNbZV0/LnN1bW1hcnkpO1xuICAgIGlmICghaGFzRGF0YSkge1xuICAgICAgZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdlbmdpbmUuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJpbWFyeUVuZ2luZXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlbmcgPSBlbmdpbmVzW2tleV0gfHwge307XG4gICAgICBjb25zdCBjaGlwID0gZ3JpZC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdrb3MtZGItZW5naW5lLWNoaXAnXG4gICAgICAgICAgKyAoZW5nLnN0YXR1cyA9PT0gJ2RvbmUnID8gJyBrb3MtZGItZW5naW5lLWRvbmUnIDogJycpXG4gICAgICAgICAgKyAoZW5nLmxhc3RSdW4gPyAnJyA6ICcga29zLWRiLWVuZ2luZS1pZGxlJyksXG4gICAgICB9KTtcbiAgICAgIGNoaXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGtleSwgY2xzOiAna29zLWRiLWVuZ2luZS1uYW1lJyB9KTtcbiAgICAgIGlmIChlbmcubGFzdFJ1bikgY2hpcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJyAnICsgZW5nLmxhc3RSdW4uc2xpY2UoNSksIGNsczogJ2tvcy1kYi1lbmdpbmUtZGF0ZScgfSk7XG4gICAgICBpZiAoZW5nLnN1bW1hcnkpIGNoaXAuc2V0QXR0cigndGl0bGUnLCBlbmcuc3VtbWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zZWN0aW9uJyB9KTtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHVEODNEXFx1RENDOCAnICsgdGhpcy5fdCgnd2Vla2x5LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBjaGFydCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXJ0JyB9KTtcbiAgICBjb25zdCBjZWxscyA9IGRhdGEud2Vla2x5IHx8IFtdO1xuICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4uY2VsbHMubWFwKChjKSA9PiBjLmNvdW50KSk7XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hhcnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnd2Vla2x5LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNvbCA9IGNoYXJ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1jb2wnIH0pO1xuICAgICAgaWYgKGNlbGwuaXNUb2RheSkgY29sLmFkZENsYXNzKCdrb3MtZGItY2hhcnQtdG9kYXknKTtcbiAgICAgIGNvbnN0IGJhckhlaWdodCA9IE1hdGgubWF4KDQsIChjZWxsLmNvdW50IC8gbWF4Q291bnQpICogNjApO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jaGFydC1iYXInLCBhdHRyOiB7IHN0eWxlOiAnaGVpZ2h0OicgKyBiYXJIZWlnaHQgKyAncHgnIH0gfSlcbiAgICAgICAgIC5zZXRBdHRyKCd0aXRsZScsIHRoaXMuX3QoJ3dlZWtseS5iYXJUb29sdGlwJywgeyBkYXRlOiBjZWxsLmRhdGUsIGNvdW50OiBjZWxsLmNvdW50IH0pKTtcbiAgICAgIGNvbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcoY2VsbC5jb3VudCksIGNsczogJ2tvcy1kYi1jaGFydC12YWwnIH0pO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IGNlbGwud2Vla2RheSwgY2xzOiAna29zLWRiLWNoYXJ0LWRheScgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBDaGF0IChGdWxsLXBhZ2UgQUkgQ2hhdCkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgcmVuZGVyQ2hhdFZpZXcoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgLy8gQmFjayBidXR0b24gKyB0aXRsZVxuICAgIGNvbnN0IHRvcEJhciA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhdC10b3BiYXInIH0pO1xuICAgIGNvbnN0IGJhY2tCdG4gPSB0b3BCYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWNoYXQtYmFjay1idG4nIH0pO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJ1xcdTIxOTAgJyArIHRoaXMuX3QoJ2FwcC5uYW1lJyk7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIENvbGxlY3QgZnJlc2ggZGF0YSB3aGVuIGdvaW5nIGJhY2sgdG8gaG9tZVxuICAgICAgdGhpcy5jb2xsZWN0RGF0YSh0aGlzLmFwcCkudGhlbigoZnJlc2hEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoUGFuZWwoJ2hvbWUnLCBmcmVzaERhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdG9wQmFyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnXFx1RDgzRVxcdUREMTYgJyArIHRoaXMuX3QoJ2FpLnRpdGxlJyksIGNsczogJ2tvcy1kYi1jaGF0LXRvcGJhci10aXRsZScgfSk7XG5cbiAgICAvLyBDaGF0IFVJIChmdWxsIHdpZHRoL2hlaWdodCB3aXRoaW4gdGhlIGNhcmQpXG4gICAgY29uc3QgY2hhdFNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpIGtvcy1kYi1haS1mdWxsJyB9KTtcblxuICAgIC8vIE1lc3NhZ2UgY29udGFpbmVyXG4gICAgY29uc3QgbXNnQ29udGFpbmVyID0gY2hhdFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZ3MnIH0pO1xuXG4gICAgLy8gSW5wdXQgcm93XG4gICAgY29uc3QgaW5wdXRSb3cgPSBjaGF0U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktaW5wdXQtcm93JyB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0Um93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcbiAgICAgIGNsczogJ2tvcy1kYi1haS1pbnB1dCcsXG4gICAgICBhdHRyOiB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6IHRoaXMuX3QoJ2FpLnBsYWNlaG9sZGVyJykgfSxcbiAgICB9KTtcbiAgICBjb25zdCBzZW5kQnRuID0gaW5wdXRSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLXNlbmQnLCB0ZXh0OiB0aGlzLl90KCdhaS5zZW5kQnRuJykgfSk7XG5cbiAgICAvLyBDaGF0IGVuZ2luZVxuICAgIHRoaXMuX2luaXRBaUNoYXQoKTtcbiAgICB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRvU2VuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdmFsKSByZXR1cm47XG4gICAgICB0aGlzLl9zZW5kQ2hhdE1lc3NhZ2UodmFsLCBtc2dDb250YWluZXIsIGlucHV0KTtcbiAgICB9O1xuICAgIHNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb1NlbmQpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGRvU2VuZCgpOyB9KTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBTaGFyZWQgQUkgQ2hhdCBMb2dpYyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBfaW5pdEFpQ2hhdCgpIHtcbiAgICBpZiAodGhpcy5haUNoYXQgJiYgdGhpcy5haUNoYXQuaXNDb25maWd1cmVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMuYWlDaGF0KSByZXR1cm47XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXNvbHZlRmxvd25vdGVQcm92aWRlcih0aGlzLmFwcC52YXVsdC5hZGFwdGVyKS50aGVuKChmbG93bm90ZUNvbmZpZykgPT4ge1xuICAgICAgaWYgKGZsb3dub3RlQ29uZmlnKSB7XG4gICAgICAgIHNlbGYuYWlDaGF0ID0gbmV3IEFJQ2hhdCh7XG4gICAgICAgICAgbG9jYWxlOiBzZWxmLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJyxcbiAgICAgICAgICBiYXNlVXJsOiBmbG93bm90ZUNvbmZpZy5iYXNlVXJsLFxuICAgICAgICAgIGFwaUtleTogZmxvd25vdGVDb25maWcuYXBpS2V5LFxuICAgICAgICAgIG1vZGVsOiBmbG93bm90ZUNvbmZpZy5tb2RlbCxcbiAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6IHNlbGYuc2V0dGluZ3M/LmFpU3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgICAgIHByb3ZpZGVyTGFiZWw6IGZsb3dub3RlQ29uZmlnLmxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5fcmVmcmVzaENoYXRNc2dzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSAoc2VsZi5zZXR0aW5ncz8uYWlFbmRwb2ludCB8fCAnJykudHJpbSgpO1xuICAgICAgY29uc3QgYXBpS2V5ID0gKHNlbGYuc2V0dGluZ3M/LmFpQXBpS2V5IHx8ICcnKS50cmltKCk7XG4gICAgICBjb25zdCBtb2RlbCA9IChzZWxmLnNldHRpbmdzPy5haU1vZGVsIHx8ICcnKS50cmltKCk7XG4gICAgICBpZiAoYmFzZVVybCAmJiBhcGlLZXkgJiYgbW9kZWwpIHtcbiAgICAgICAgc2VsZi5haUNoYXQgPSBuZXcgQUlDaGF0KHtcbiAgICAgICAgICBsb2NhbGU6IHNlbGYuc2V0dGluZ3M/LmxvY2FsZSB8fCAnemgtY24nLFxuICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgYXBpS2V5LFxuICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgIHN5c3RlbVByb21wdDogc2VsZi5zZXR0aW5ncz8uYWlTeXN0ZW1Qcm9tcHQgfHwgJycsXG4gICAgICAgICAgcHJvdmlkZXJMYWJlbDogJ01hbnVhbCcsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLl9yZWZyZXNoQ2hhdE1zZ3MoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWZyZXNoQ2hhdE1zZ3MoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWksIC5rb3MtZGItYWktZnVsbCcpO1xuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICBjb25zdCBtc2dDb250YWluZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWktbXNncycpO1xuICAgICAgaWYgKG1zZ0NvbnRhaW5lcikgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckNoYXRNZXNzYWdlcyhjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBtc2dzID0gdGhpcy5haUNoYXQgPyB0aGlzLmFpQ2hhdC5nZXRIaXN0b3J5KCkgOiBbXTtcblxuICAgIGlmICghdGhpcy5haUNoYXQgfHwgIXRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkge1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ2FpLm5lZWRDb25maWcnKSwgY2xzOiAna29zLWRiLWFpLW5lZWQtY29uZmlnJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtc2dzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgY29uc3QgYnViYmxlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy0nICsgbXNnLnJvbGUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRleHRFbCA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuICAgICAgdGV4dEVsLnRleHRDb250ZW50ID0gbXNnLmNvbnRlbnQ7XG5cbiAgICAgIGlmIChtc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgY29uc3QgY29weUJ0biA9IGJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktY29weS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jb3B5JykgfSk7XG4gICAgICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG1zZy5jb250ZW50KTtcbiAgICAgICAgICAgIGNvcHlCdG4udGV4dENvbnRlbnQgPSB0aGlzLl90KCdhaS5jb3BpZWQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LCAyMDAwKTtcbiAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBfc2VuZENoYXRNZXNzYWdlKHRleHQsIG1zZ0NvbnRhaW5lciwgaW5wdXRFbCkge1xuICAgIGlmICghdGhpcy5haUNoYXQgfHwgIXRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuO1xuXG4gICAgaW5wdXRFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgaW5wdXRFbC52YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aGlua2luZ0VsID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQga29zLWRiLWFpLXRoaW5raW5nJyB9KTtcbiAgICB0aGlua2luZ0VsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLl90KCdhaS50aGlua2luZycpLCBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuXG4gICAgbGV0IGFzc2lzdGFudFRleHQgPSAnJztcbiAgICBsZXQgYXNzaXN0YW50QnViYmxlID0gbnVsbDtcblxuICAgIHRoaXMuYWlDaGF0LnNlbmRNZXNzYWdlKHRleHQsIHtcbiAgICAgIG9uVG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBhc3Npc3RhbnRUZXh0ICs9IHRva2VuO1xuICAgICAgICBpZiAoIWFzc2lzdGFudEJ1YmJsZSkge1xuICAgICAgICAgIHRoaW5raW5nRWwucmVtb3ZlKCk7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQnIH0pO1xuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFzc2lzdGFudEJ1YmJsZS5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpLW1zZy10ZXh0JykudGV4dENvbnRlbnQgPSBhc3Npc3RhbnRUZXh0O1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgICBvbkRvbmU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaW5raW5nRWwuaXNDb25uZWN0ZWQpIHRoaW5raW5nRWwucmVtb3ZlKCk7XG4gICAgICAgIGlmICghYXNzaXN0YW50QnViYmxlICYmIGFzc2lzdGFudFRleHQpIHtcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUgPSBtc2dDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZyBrb3MtZGItYWktbXNnLWFzc2lzdGFudCcgfSk7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2ctdGV4dCcsIHRleHQ6IGFzc2lzdGFudFRleHQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFzc2lzdGFudEJ1YmJsZSAmJiBhc3Npc3RhbnRUZXh0KSB7XG4gICAgICAgICAgY29uc3QgY29weUJ0biA9IGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktY29weS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jb3B5JykgfSk7XG4gICAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFzc2lzdGFudFRleHQpO1xuICAgICAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dEVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICBpZiAodGhpbmtpbmdFbC5pc0Nvbm5lY3RlZCkgdGhpbmtpbmdFbC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgZXJyQnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1lcnJvcicgfSk7XG4gICAgICAgIGVyckJ1YmJsZS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIHRleHQ6IHRoaXMuX3QoJ2FpLmVycm9yJywgeyBtc2c6IGVyci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyB9KSxcbiAgICAgICAgICBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmV0cnlCdG4gPSBlcnJCdWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLXJldHJ5LWJ0bicsIHRleHQ6IHRoaXMuX3QoJ2FpLnJldHJ5JykgfSk7XG4gICAgICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzZXR0aW5ncyB0YWJcblxuY29uc3QgeyBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyB0LCBMT0NBTEVfS0VZUyB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUyA9IHtcbiAgLy8gR2VuZXJhbFxuICBsb2NhbGU6ICd6aC1jbicsXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIERhc2hib2FyZCBzZWN0aW9uIHZpc2liaWxpdHlcbiAgc2hvd1RvZGF5VGFza3M6IHRydWUsXG4gIHNob3dJbmJveEZpbGVzOiB0cnVlLFxuICBzaG93RW5naW5lU3RhdGU6IHRydWUsXG4gIHNob3dXZWVrbHlDaGFydDogdHJ1ZSxcbiAgc2hvd0FpQ2hhdDogdHJ1ZSxcbiAgc2hvd1Byb2plY3RDYXJkczogdHJ1ZSxcbiAgc2hvd1JlY2VudEFjdGl2aXR5OiB0cnVlLFxuICBzaG93VmF1bHRTdGF0czogdHJ1ZSxcbiAgc2hvd05hdjogdHJ1ZSxcblxuICAvLyBEYXRhIGxpbWl0c1xuICBtYXhSZWNlbnRJdGVtczogOCxcbiAgbWF4VGFza0l0ZW1zOiAxMixcbiAgbWF4SW5ib3hJdGVtczogNixcblxuICAvLyBBSSBDaGF0IHByb3ZpZGVyXG4gIGFpRW5kcG9pbnQ6ICcnLFxuICBhaUFwaUtleTogJycsXG4gIGFpTW9kZWw6ICdncHQtNG8nLFxuICBhaVN5c3RlbVByb21wdDogJycsXG59O1xuXG5jbGFzcyBDb2NrcGl0U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBjb25zdHJ1Y3RvcihhcHAsIHBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8qKiBIZWxwZXI6IHRyYW5zbGF0ZSB1c2luZyBjdXJyZW50IGxvY2FsZSAqL1xuICBfdChrZXksIHBhcmFtcykge1xuICAgIHJldHVybiB0KGtleSwgdGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlLCBwYXJhbXMpO1xuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICB0aGlzLnJlbmRlckdlbmVyYWxTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFpU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFib3V0U2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICByZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZ2VuZXJhbCcpIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5sYW5ndWFnZScpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJykpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbignemgtY24nLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhDTicpKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ2VuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ0VuJykpXG4gICAgICAgICAgLmFkZE9wdGlvbignemgtdHcnLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhUVycpKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW5EZXNjJykpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvT3BlbilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyQWlTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdhaS5wcm92aWRlclNlY3Rpb24nKSB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnKSxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicsXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ2FpLmFwaUVuZHBvaW50JykpXG4gICAgICAuc2V0RGVzYygnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpRW5kcG9pbnQgfHwgJycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haUVuZHBvaW50ID0gdi50cmltKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkuYXBpS2V5JykpXG4gICAgICAuc2V0RGVzYygnc2stLi4uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ3NrLS4uLicpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpQXBpS2V5IHx8ICcnKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlBcGlLZXkgPSB2LnRyaW0oKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkubW9kZWwnKSlcbiAgICAgIC5zZXREZXNjKCdncHQtNG8sIGNsYXVkZS0zLjUtc29ubmV0LCBkZWVwc2Vlay1jaGF0LCAuLi4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2dwdC00bycpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpTW9kZWwgfHwgJ2dwdC00bycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haU1vZGVsID0gdi50cmltKCkgfHwgJ2dwdC00byc7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnYWkuc3lzdGVtUHJvbXB0JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcicpKVxuICAgICAgLmFkZFRleHRBcmVhKCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIodGhpcy5fdCgnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInKSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlTeXN0ZW1Qcm9tcHQgfHwgJycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5haVN5c3RlbVByb21wdCA9IHYudHJpbSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRleHQuaW5wdXRFbC5yb3dzID0gNDtcbiAgICAgICAgdGV4dC5pbnB1dEVsLmNvbHMgPSA2MDtcbiAgICAgICAgdGV4dC5pbnB1dEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC10ZXh0YXJlYScpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXJEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXNoYm9hcmQnKSB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnKSxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICAgIHsga2V5OiAnc2hvd1RvZGF5VGFza3MnLCBuYW1lOiAnVG9kYXlcXCdzIFRhc2tzJywgZGVzYzogJ0RhaWx5IG5vdGUgdGFzayBsaXN0IGFuZCBwcm9ncmVzcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dQcm9qZWN0Q2FyZHMnLCBuYW1lOiAnQWN0aXZlIFByb2plY3RzJywgZGVzYzogJ1Byb2plY3QgY2FyZHMgd2l0aCBwcmlvcml0eSBhbmQgcHJvZ3Jlc3MuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93VmF1bHRTdGF0cycsIG5hbWU6ICdWYXVsdCBTdGF0aXN0aWNzJywgZGVzYzogJ1RvdGFsIG5vdGVzLCBhY3RpdmUgcHJvamVjdHMsIGluYm94IGNvdW50LicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1JlY2VudEFjdGl2aXR5JywgbmFtZTogJ1JlY2VudCBBY3Rpdml0eScsIGRlc2M6ICdSZWNlbnRseSBtb2RpZmllZCBmaWxlcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dOYXYnLCBuYW1lOiAnTmF2aWdhdGlvbicsIGRlc2M6ICdRdWljayBsaW5rcyB0byBhcmVhcywgaW5ib3gsIGhvdCBjYWNoZS4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dJbmJveEZpbGVzJywgbmFtZTogJ0luYm94IEZpbGVzJywgZGVzYzogJ0xpc3Qgb2YgcGVuZGluZyBmaWxlcyBpbiAwIEluYm94Ly4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dFbmdpbmVTdGF0ZScsIG5hbWU6ICdFbmdpbmUgU3RhdGUnLCBkZXNjOiAnVHJpYWdlL0NvbXBpbGUvTGluayBlbmdpbmUgc3RhdHVzIGNoaXBzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1dlZWtseUNoYXJ0JywgbmFtZTogJ1dlZWtseSBDaGFydCcsIGRlc2M6ICdCYXIgY2hhcnQgb2Ygd2Vla2x5IGRhaWx5LW5vdGUgY2FwdHVyZXMuJyB9LFxuXG4gICAgXTtcblxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsga2V5LCBuYW1lLCBkZXNjIH0pID0+IHtcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZShuYW1lKVxuICAgICAgICAuc2V0RGVzYyhkZXNjKVxuICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5nc1trZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRGF0YUxpbWl0c1NlY3Rpb24oY29udGFpbmVyRWwpIHtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhdGFMaW1pdHMnKSB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubWF4UmVjZW50JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignOCcpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgzLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDgpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFRhc2tzJykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCcxMicpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhUYXNrSXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCAxMikpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4VGFza0l0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heEluYm94JykpXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveERlc2MnKSlcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCc2JylcbiAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heEluYm94SXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA2KSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICByZW5kZXJBYm91dFNlY3Rpb24oY29udGFpbmVyRWwpIHtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmFib3V0JykgfSk7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGRlc2MuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLnZlcnNpb25EZXNjJykgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLnZlcnNpb24nKSlcbiAgICAgIC5zZXREZXNjKGRlc2MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBDb2NrcGl0U2V0dGluZ1RhYiwgREVGQVVMVF9TRVRUSU5HUyB9O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwbHVnaW4gZW50cnkgcG9pbnRcblxuY29uc3QgeyBQbHVnaW4gfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9ID0gcmVxdWlyZSgnLi9jb2NrcGl0LXZpZXcnKTtcbmNvbnN0IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MgfSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MtdGFiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgS29zQ29ja3BpdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhWSUVXX1RZUEVfQ09DS1BJVCwgKGxlYWYpID0+IG5ldyBDb2NrcGl0VmlldyhsZWFmLCB0aGlzKSk7XG5cbiAgICAvLyBSaWJib246IERhc2hib2FyZFxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignZ2F1Z2UnLCAnS09TIENvY2twaXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdob21lJyB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJpYmJvbjogQUkgQ2hhdFxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignYm90JywgJ0tPUyBBSSBDaGF0JywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnY2hhdCcgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21tYW5kOiBEYXNoYm9hcmRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdPcGVuIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdob21lJyB9KSxcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmQ6IEFJIENoYXRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLWtvcy1haS1jaGF0JyxcbiAgICAgIG5hbWU6ICdPcGVuIEtPUyBBSSBDaGF0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdjaGF0JyB9KSxcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmQ6IFJlZnJlc2hcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZWZyZXNoLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdSZWZyZXNoIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hDb2NrcGl0KCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENvY2twaXRTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnNldHRpbmdzLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2hvbWUnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb3BlbkNvY2twaXQob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG5cbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgd29ya3NwYWNlLnJldmVhbExlYWYoZXhpc3RpbmdbMF0pO1xuICAgICAgY29uc3QgdmlldyA9IGV4aXN0aW5nWzBdLnZpZXc7XG4gICAgICBpZiAodmlldykge1xuICAgICAgICBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2NoYXQnICYmIHR5cGVvZiB2aWV3LnN3aXRjaFBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2NoYXQnLCBkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2hvbWUnICYmIHR5cGVvZiB2aWV3LnN3aXRjaFBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2hvbWUnLCBkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZpZXcucmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKHRydWUpO1xuICAgIGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHtcbiAgICAgIHR5cGU6IFZJRVdfVFlQRV9DT0NLUElULFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQWZ0ZXIgdmlldyBpcyBzZXQsIHN3aXRjaCB0byByZXF1ZXN0ZWQgcGFuZWxcbiAgICBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2NoYXQnKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcuc3dpdGNoUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2NoYXQnLCBkYXRhKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG4gIH1cblxuICBhc3luYyBjb2xsZWN0RGF0YSgpIHtcbiAgICAvLyBNaW5pbWFsIGRhdGEgY29sbGVjdG9yIGZvciBwYW5lbCBzd2l0Y2hpbmdcbiAgICBjb25zdCB7IGdldFRvZGF5U3RhdGUsIGdldERhc2hib2FyZFN0YXRzLCBsaXN0UHJvamVjdHMgfSA9IHJlcXVpcmUoJy4vaG9tZS1zZXJ2aWNlJyk7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgW3RvZGF5LCBwcm9qZWN0cywgc3RhdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0VG9kYXlTdGF0ZShhcHApLmNhdGNoKCgpID0+IG51bGwpLFxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldERhc2hib2FyZFN0YXRzKGFwcCkuY2F0Y2goKCkgPT4gKHsgdG90YWxOb3RlczogMCwgdG9kYXlOZXc6IDAsIHN0YXRzOiB7fSB9KSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cyB9O1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaENvY2twaXQoKSB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXdhaXQgdmlldy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBzYXZlZCk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLnJlZnJlc2hDb2NrcGl0KCk7XG4gIH1cblxuICBvbnVubG9hZCgpIHtcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKS5mb3JFYWNoKChsZWFmKSA9PiB7XG4gICAgICBsZWFmLmRldGFjaCgpO1xuICAgIH0pO1xuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQSxrQkFBQUEs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RVgsb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIsaUJBQWlCO0FBQUEsUUFFakIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsYUFBYTtBQUFBLFFBQ2IscUJBQXFCO0FBQUEsUUFFckIsaUJBQWlCO0FBQUEsUUFDakIsaUJBQWlCO0FBQUEsUUFFakIsZUFBZTtBQUFBLFFBQ2Ysb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFDeEIsa0JBQWtCO0FBQUEsUUFDbEIsdUJBQXVCO0FBQUEsUUFFdkIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsYUFBYTtBQUFBLFFBRWIsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLFFBRWQsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIscUJBQXFCO0FBQUEsUUFFckIsWUFBWTtBQUFBLFFBQ1osa0JBQWtCO0FBQUEsUUFDbEIsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsYUFBYTtBQUFBLFFBRWIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osbUJBQW1CO0FBQUEsUUFDbkIsOEJBQThCO0FBQUEsUUFFOUIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsbUJBQW1CO0FBQUEsUUFDbkIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEs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QSxJQUNGO0FBRUEsY0FBVSxXQUFXLElBQUk7QUFBQSxFQUMzQjtBQUFBLEVBRUEsTUFBTSxjQUFjO0FBRWxCLFVBQU0sRUFBRSxlQUFlLG1CQUFtQixhQUFhLElBQUk7QUFDM0QsVUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxNQUNqRCxjQUFjLEdBQUcsRUFBRSxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ25DLGFBQWEsS0FBSyxFQUFFLFlBQVksS0FBSyxDQUFDLEVBQUUsTUFBTSxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQ3RELGtCQUFrQixHQUFHLEVBQUUsTUFBTSxPQUFPLEVBQUUsWUFBWSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQUEsSUFDaEYsQ0FBQztBQUNELFdBQU8sRUFBRSxPQUFPLFVBQVUsTUFBTTtBQUFBLEVBQ2xDO0FBQUEsRUFFQSxNQUFNLGlCQUFpQjtBQUNyQixVQUFNLFNBQVMsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUNuRSxlQUFXLFFBQVEsUUFBUTtBQUN6QixZQUFNLE9BQU8sS0FBSztBQUNsQixVQUFJLFFBQVEsT0FBTyxLQUFLLFlBQVksWUFBWTtBQUM5QyxjQUFNLEtBQUssUUFBUTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixVQUFNLFFBQVEsTUFBTSxLQUFLLFNBQVM7QUFDbEMsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLEtBQUs7QUFBQSxFQUMzRDtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUNqQyxTQUFLLGVBQWU7QUFBQSxFQUN0QjtBQUFBLEVBRUEsV0FBVztBQUNULFNBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FBUztBQUN0RSxXQUFLLE9BQU87QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlZJRVdfVFlQRV9DT0NLUElUIiwgIkNvY2twaXRWaWV3IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkRFRkFVTFRfU0VUVElOR1MiLCAiQ29ja3BpdFNldHRpbmdUYWIiXQp9Cg==
