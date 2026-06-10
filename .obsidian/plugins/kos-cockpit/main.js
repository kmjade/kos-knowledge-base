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
        this.renderChatEntryBtn(container);
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
      // ─── AI Chat Entry Button (always at bottom of home) ───
      renderChatEntryBtn(container) {
        const section = container.createEl("div", { cls: "kos-db-section" });
        const btn = section.createEl("button", { cls: "kos-db-ai-entry-btn" });
        btn.innerHTML = "\u{1F916} " + this._t("ai.title") + " \u2192";
        btn.addEventListener("click", () => {
          this.switchPanel("chat", null);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cblxuY29uc3QgTE9DQUxFUyA9IHtcbiAgJ3poLWNuJzoge1xuICAgIC8vIEdlbmVyYWxcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxuICAgICdhcHAuZXJyb3InOiAnXHU1MkEwXHU4RjdEXHU0RUVBXHU4ODY4XHU3NkQ4XHU2NUY2XHU1MUZBXHU5NTE5XHUzMDAyJyxcblxuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1MjFCXHU1RUZBJyxcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QkJFXHU1QjlBKScsXG5cbiAgICAvLyBEYXkgbmFtZXNcbiAgICAnZGF5LnN1bic6ICdcdTY1RTUnLFxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcbiAgICAnZGF5LndlZCc6ICdcdTRFMDknLFxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcbiAgICAnZGF5LnNhdCc6ICdcdTUxNkQnLFxuXG4gICAgLy8gUXVpY2sgYWN0aW9uc1xuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1ODNCNycsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODdFJyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU5ODc5XHU3NkVFJyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcblxuICAgIC8vIFRvZGF5IFRhc2tzXG4gICAgJ3Rhc2sudGl0bGUnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExJyxcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxuICAgICd0YXNrLm5vbmUnOiAnXHU2NjgyXHU2NUUwXHU0RUZCXHU1MkExXHUzMDAyJyxcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnXHU0RUNBXHU2NUU1XHU3QjE0XHU4QkIwXHU2NzJBXHU1MjFCXHU1RUZBXHUzMDAyXHU3MEI5XHU1MUZCIFtcdTg5QzRcdTUyMTJcdTRFQ0FcdTU5MjldIFx1NTIxQlx1NUVGQVx1MzAwMicsXG5cbiAgICAvLyBQcm9qZWN0c1xuICAgICdwcm9qZWN0LnRpdGxlJzogJ1x1NkQzQlx1OERDM1x1OTg3OVx1NzZFRScsXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFXHUzMDAyJyxcblxuICAgIC8vIFZhdWx0IHN0YXRzXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEJDNlx1NUU5M1x1N0VERlx1OEJBMScsXG4gICAgJ3N0YXRzLnRvdGFsTm90ZXMnOiAnXHU2MDNCXHU3QjE0XHU4QkIwJyxcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdcdTVGODVcdTUyMDZcdTYyRTMnLFxuXG4gICAgLy8gUmVjZW50IGFjdGl2aXR5XG4gICAgJ3JlY2VudC50aXRsZSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyQTgnLFxuICAgICdyZWNlbnQuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU1MkE4XHUzMDAyJyxcblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAnbmF2LnRpdGxlJzogJ1x1NEUwOVx1NjUyRlx1NjdGMSBcdTAwQjcgXHU1QkZDXHU4MjJBJyxcblxuICAgIC8vIEluYm94XG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAvLyBFbmdpbmUgc3RhdGVcbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMScsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTVGMTVcdTY0Q0VcdTcyQjZcdTYwMDFcdTY1NzBcdTYzNkVcdTMwMDInLFxuXG4gICAgLy8gV2Vla2x5IGNoYXJ0XG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTU0NjhcdThCQjBcdTVGNTVcdTUyMDZcdTVFMDMnLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnXHU2NzJDXHU1NDY4XHU2NjgyXHU2NUUwXHU2NUU1XHU4QkIwXHU4QkIwXHU1RjU1XHUzMDAyJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IFx1Njc2MScsXG5cbiAgICAvLyBBSSBDaGF0XG4gICAgJ2FpLnRpdGxlJzogJ0FJIFx1NUJGOVx1OEJERCcsXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEJFMlx1OTVFRSBLT1MgXHU3N0U1XHU4QkM2XHU1RTkzLi4uJyxcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1OTVFRVx1NjIxMVx1NTE3M1x1NEU4RVx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMVx1OTg3OVx1NzZFRVx1NzJCNlx1NjAwMVx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU1MTczXHU3Njg0XHU5NUVFXHU5ODk4XHUzMDAyJyxcbiAgICAnYWkuc2VuZEJ0bic6ICdcdTUzRDFcdTkwMDEnLFxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVCRjlcdThCREQnLFxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxuICAgICdhaS5uZWVkQ29uZmlnJzogJ1x1NjcyQVx1NjhDMFx1NkQ0Qlx1NTIzMCBGTE9Xbm90ZSBcdTkxNERcdTdGNkVcdUZGMENcdTRFNUZcdTY3MkFcdTYyN0VcdTUyMzBcdTYyNEJcdTUyQTggQVBJIFx1OEJCRVx1N0Y2RVx1MzAwMlx1OEJGN1x1NTcyOCBGTE9Xbm90ZSBcdTRFMkRcdTkxNERcdTdGNkUgQUkgUHJvdmlkZXJcdUZGMENcdTYyMTZcdTU3MjggQ29ja3BpdCBcdThCQkVcdTdGNkVcdTRFMkRcdTYyNEJcdTUyQThcdTU4NkJcdTUxOTlcdTMwMDInLFxuICAgICdhaS5lcnJvcic6ICdcdThCRjdcdTZDNDJcdTU5MzFcdThEMjU6IHttc2d9JyxcbiAgICAnYWkucmV0cnknOiAnXHU5MUNEXHU4QkQ1JyxcbiAgICAnYWkuY29weSc6ICdcdTU5MERcdTUyMzYnLFxuICAgICdhaS5jb3BpZWQnOiAnXHU1REYyXHU1OTBEXHU1MjM2JyxcblxuICAgIC8vIEFJIHNldHRpbmdzXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbic6ICdBSSBQcm92aWRlcicsXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnXHU5MTREXHU3RjZFIEFJIFx1NUJGOVx1OEJERFx1NzY4NCBBUEkgXHU2M0E1XHU1MTY1XHU1M0MyXHU2NTcwXHUzMDAyXHU4MkU1IEZMT1dub3RlIFx1NURGMlx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwOFx1NjNBOFx1ODM1MFx1RkYwOVx1RkYwQ0NvY2twaXQgXHU1QzA2XHU4MUVBXHU1MkE4XHU4QkZCXHU1M0Q2XHU1MTc2XHU4QkJFXHU3RjZFXHUzMDAyXHU3NTU5XHU3QTdBXHU1MjE5XHU4MDRBXHU1OTI5XHU1MzNBXHU0RTBEXHU1M0VGXHU3NTI4XHUzMDAyJyxcbiAgICAnYWkuYXBpRW5kcG9pbnQnOiAnQVBJIEVuZHBvaW50JyxcbiAgICAnYWkuYXBpS2V5JzogJ0FQSSBLZXknLFxuICAgICdhaS5tb2RlbCc6ICdcdTZBMjFcdTU3OEJcdTU0MERcdTc5RjAnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnXHU3Q0ZCXHU3RURGXHU2M0QwXHU3OTNBXHU4QkNEJyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnXHU0RjYwXHU2NjJGXHU0RTAwXHU0RTJBXHU3N0U1XHU4QkM2XHU3QkExXHU3NDA2XHU1MkE5XHU2MjRCXHVGRjBDXHU1RTJFXHU1MkE5XHU3NTI4XHU2MjM3XHU1OTA0XHU3NDA2IEtPUyBcdTc3RTVcdThCQzZcdTVFOTNcdTMwMDInLFxuXG4gICAgLy8gU2V0dGluZ3NcbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdHZW5lcmFsJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1x1OTAwOVx1NjJFOVx1NEVFQVx1ODg2OFx1NzZEOFx1NzU0Q1x1OTc2Mlx1NzY4NFx1NjYzRVx1NzkzQVx1OEJFRFx1OEEwMFx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmxhbmdFbic6ICdFbmdsaXNoJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW4nOiAnXHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwJyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW5EZXNjJzogJ09ic2lkaWFuIFx1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMCBLT1MgQ29ja3BpdFx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJzogJ1x1NjNBN1x1NTIzNlx1NEVFQVx1ODg2OFx1NzZEOFx1NEUwQVx1NTQwNFx1NTMzQVx1NTc1N1x1NzY4NFx1NjYzRVx1NzkzQVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnXHU2NzAwXHU1OTI3XHU2NzAwXHU4RkQxXHU2RDNCXHU1MkE4XHU2NTcwJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdcdTY2M0VcdTc5M0FcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTY1ODdcdTRFRjZcdTc2ODRcdTY1NzBcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdcdTY3MDBcdTU5MjdcdTRFRkJcdTUyQTFcdTY1NzAnLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnXHU2NjNFXHU3OTNBXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExXHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnXHU2NzAwXHU1OTI3IEluYm94IFx1NjU3MCcsXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdcdTY2M0VcdTc5M0EgSW5ib3ggXHU2NTg3XHU0RUY2XHU1NDBEXHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnQWJvdXQnLFxuICAgICdzZXR0aW5ncy52ZXJzaW9uJzogJ1x1NzI0OFx1NjcyQycsXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgS09TX0xMTS1XaWtpIFx1NzdFNVx1OEJDNlx1N0JBMVx1NzQwNlx1NEVFQVx1ODg2OFx1NzZEOFx1MzAwMktPUyBcdTc1MUZcdTYwMDFcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdTMwMDInLFxuICB9LFxuXG4gICdlbic6IHtcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxuICAgICdhcHAubG9hZGluZyc6ICdMb2FkaW5nIEtPUyBDb2NrcGl0Li4uJyxcbiAgICAnYXBwLmVycm9yJzogJ1NvbWV0aGluZyB3ZW50IHdyb25nIGxvYWRpbmcgdGhlIGRhc2hib2FyZC4nLFxuXG4gICAgJ2hlYWRlci5kYXRlRm9ybWF0JzogJ1lZWVktTU0tREQnLFxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdEYWlseSBOb3RlIFt7c3RhdHVzfV0nLFxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnQ3JlYXRlZCcsXG4gICAgJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCc6ICdOb3QgQ3JlYXRlZCcsXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1RvZGF5XFwncyBGb2N1czoge2ZvY3VzfScsXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoTm90IFNldCknLFxuXG4gICAgJ2RheS5zdW4nOiAnUycsXG4gICAgJ2RheS5tb24nOiAnTScsXG4gICAgJ2RheS50dWUnOiAnVCcsXG4gICAgJ2RheS53ZWQnOiAnVycsXG4gICAgJ2RheS50aHUnOiAnVCcsXG4gICAgJ2RheS5mcmknOiAnRicsXG4gICAgJ2RheS5zYXQnOiAnUycsXG5cbiAgICAnYWN0aW9uLnBsYW5Ub2RheSc6ICdQbGFuIFRvZGF5JyxcbiAgICAnYWN0aW9uLmNhcHR1cmUnOiAnUXVpY2sgQ2FwdHVyZScsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnRGF5IFJldmlldycsXG4gICAgJ2FjdGlvbi5uZXdQcm9qZWN0JzogJ05ldyBQcm9qZWN0JyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnU2V0dGluZ3MnLFxuXG4gICAgJ3Rhc2sudGl0bGUnOiAnVG9kYXlcXCdzIFRhc2tzJyxcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxuICAgICd0YXNrLm5vbmUnOiAnTm8gdGFza3MgeWV0LicsXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ0RhaWx5IG5vdGUgbm90IGNyZWF0ZWQuIENsaWNrIFtQbGFuIFRvZGF5XSB0byBjcmVhdGUgb25lLicsXG5cbiAgICAncHJvamVjdC50aXRsZSc6ICdBY3RpdmUgUHJvamVjdHMnLFxuICAgICdwcm9qZWN0LmVtcHR5JzogJ05vIGFjdGl2ZSBwcm9qZWN0cy4nLFxuXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1ZhdWx0IFN0YXRpc3RpY3MnLFxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1RvdGFsIE5vdGVzJyxcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnQWN0aXZlIFByb2plY3RzJyxcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnVG9kYXkgTmV3JyxcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdJbmJveCcsXG5cbiAgICAncmVjZW50LnRpdGxlJzogJ1JlY2VudCBBY3Rpdml0eScsXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdObyBhY3Rpdml0eSB5ZXQuJyxcblxuICAgICduYXYudGl0bGUnOiAnVGhyZWUgUGlsbGFycyBcXHUwMEI3IE5hdicsXG5cbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcblxuICAgICdlbmdpbmUudGl0bGUnOiAnRW5naW5lIFN0YXRlJyxcbiAgICAnZW5naW5lLmVtcHR5JzogJ05vIGVuZ2luZSBzdGF0ZSBkYXRhIHlldC4nLFxuXG4gICAgJ3dlZWtseS50aXRsZSc6ICdXZWVrbHkgUmVjb3JkIERpc3RyaWJ1dGlvbicsXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdObyBkYWlseSByZWNvcmRzIHRoaXMgd2Vlay4nLFxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gaXRlbXMnLFxuXG4gICAgJ2FpLnRpdGxlJzogJ0FJIENoYXQnLFxuICAgICdhaS5wbGFjZWhvbGRlcic6ICdBc2sgYWJvdXQgdGhlIEtPUyB2YXVsdC4uLicsXG4gICAgJ2FpLndlbGNvbWUnOiAnSGVsbG8hIEkgYW0gdGhlIEtPUyBBSSBhc3Npc3RhbnQuIEFzayBtZSBhYm91dCB0aGUga25vd2xlZGdlIGJhc2UsIHByb2plY3Qgc3RhdHVzLCBvciBhbnl0aGluZyBLT1MtcmVsYXRlZC4nLFxuICAgICdhaS5zZW5kQnRuJzogJ1NlbmQnLFxuICAgICdhaS5jbGVhckJ0bic6ICdDbGVhciBDaGF0JyxcbiAgICAnYWkudGhpbmtpbmcnOiAnVGhpbmtpbmcuLi4nLFxuICAgICdhaS5uZWVkQ29uZmlnJzogJ05vIEZMT1dub3RlIGNvbmZpZyBkZXRlY3RlZCBhbmQgbm8gbWFudWFsIEFQSSBzZXR0aW5ncyBmb3VuZC4gQ29uZmlndXJlIEFJIFByb3ZpZGVyIGluIEZMT1dub3RlLCBvciBmaWxsIGluIG1hbnVhbGx5IGluIENvY2twaXQgc2V0dGluZ3MuJyxcbiAgICAnYWkuZXJyb3InOiAnUmVxdWVzdCBmYWlsZWQ6IHttc2d9JyxcbiAgICAnYWkucmV0cnknOiAnUmV0cnknLFxuICAgICdhaS5jb3B5JzogJ0NvcHknLFxuICAgICdhaS5jb3BpZWQnOiAnQ29waWVkJyxcblxuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxuICAgICdhaS5wcm92aWRlclNlY3Rpb25EZXNjJzogJ0NvbmZpZ3VyZSBBUEkgYWNjZXNzIGZvciB0aGUgQUkgY2hhdC4gSWYgRkxPV25vdGUgaGFzIEFJIFByb3ZpZGVyIGNvbmZpZ3VyZWQgKHJlY29tbWVuZGVkKSwgQ29ja3BpdCB3aWxsIGF1dG8tZGV0ZWN0IGl0LiBMZWF2ZSBlbXB0eSB0byBkaXNhYmxlLicsXG4gICAgJ2FpLmFwaUVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcbiAgICAnYWkubW9kZWwnOiAnTW9kZWwgTmFtZScsXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdTeXN0ZW0gUHJvbXB0JyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnWW91IGFyZSBhIGtub3dsZWRnZSBtYW5hZ2VtZW50IGFzc2lzdGFudCBoZWxwaW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRoZWlyIEtPUyB2YXVsdC4nLFxuXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ0ludGVyZmFjZSBMYW5ndWFnZScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdDaG9vc2UgdGhlIGRpc3BsYXkgbGFuZ3VhZ2UgZm9yIHRoZSBkYXNoYm9hcmQuJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXFx1N0I4MFxcdTRGNTNcXHU0RTJEXFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmxhbmdFbic6ICdFbmdsaXNoJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXFx1N0U0MVxcdTlBRDRcXHU0RTJEXFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ0F1dG8tb3BlbiBvbiBzdGFydHVwJyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW5EZXNjJzogJ0F1dG9tYXRpY2FsbHkgb3BlbiB0aGUgS09TIENvY2twaXQgd2hlbiBPYnNpZGlhbiBzdGFydHMuJyxcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCBTZWN0aW9ucycsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnVG9nZ2xlIHdoaWNoIHNlY3Rpb25zIGFwcGVhciBvbiB0aGUgY29ja3BpdCBkYXNoYm9hcmQuJyxcbiAgICAnc2V0dGluZ3MuZGF0YUxpbWl0cyc6ICdEYXRhIExpbWl0cycsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudCc6ICdNYXggcmVjZW50IGl0ZW1zJyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdOdW1iZXIgb2YgcmVjZW50bHkgbW9kaWZpZWQgZmlsZXMgdG8gc2hvdyAobWF4IDIwKS4nLFxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdNYXggdGFzayBpdGVtcycsXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzRGVzYyc6ICdOdW1iZXIgb2YgZGFpbHktbm90ZSB0YXNrcyB0byBzaG93IChtYXggMjApLicsXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ01heCBpbmJveCBpdGVtcycsXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdOdW1iZXIgb2YgaW5ib3ggZmlsZSBuYW1lcyB0byBzaG93IChtYXggMjApLicsXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ0Fib3V0JyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdWZXJzaW9uJyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbkRlc2MnOiAnS09TIENvY2twaXQgdjAuMi4wIFxcdTIwMTQgQSBrbm93bGVkZ2UgbWFuYWdlbWVudCBkYXNoYm9hcmQgZm9yIHRoZSBLT1NfTExNLVdpa2kgdmF1bHQuIFBhcnQgb2YgdGhlIEtPUyBlY29zeXN0ZW0uJyxcbiAgfSxcblxuICAnemgtdHcnOiB7XG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcbiAgICAnYXBwLmxvYWRpbmcnOiAnXHU2QjYzXHU1NzI4XHU4RjA5XHU1MTY1IEtPUyBDb2NrcGl0Li4uJyxcbiAgICAnYXBwLmVycm9yJzogJ1x1OEYwOVx1NTE2NVx1NTEwMFx1ODg2OFx1Njc3Rlx1NjY0Mlx1NzY3Q1x1NzUxRlx1OTMyRlx1OEFBNFx1MzAwMicsXG5cbiAgICAnaGVhZGVyLmRhdGVGb3JtYXQnOiAnWVlZWS1NTS1ERCcsXG4gICAgJ2hlYWRlci5ub3RlU3RhdHVzJzogJ1x1NkJDRlx1NjVFNVx1N0I0Nlx1OEExOCBbe3N0YXR1c31dJyxcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ1x1NURGMlx1NUVGQVx1N0FDQicsXG4gICAgJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCc6ICdcdTY3MkFcdTVFRkFcdTdBQ0InLFxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdcdTRFQ0FcdTY1RTVcdTcxMjZcdTlFREU6IHtmb2N1c30nLFxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKFx1NjcyQVx1OEEyRFx1NUI5QSknLFxuXG4gICAgJ2RheS5zdW4nOiAnXHU2NUU1JyxcbiAgICAnZGF5Lm1vbic6ICdcdTRFMDAnLFxuICAgICdkYXkudHVlJzogJ1x1NEU4QycsXG4gICAgJ2RheS53ZWQnOiAnXHU0RTA5JyxcbiAgICAnZGF5LnRodSc6ICdcdTU2REInLFxuICAgICdkYXkuZnJpJzogJ1x1NEU5NCcsXG4gICAgJ2RheS5zYXQnOiAnXHU1MTZEJyxcblxuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1x1ODk4Rlx1NTI4M1x1NEVDQVx1NTkyOScsXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1NjM0OScsXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODY3JyxcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnXHU2NUIwXHU1RUZBXHU1QzA4XHU2ODQ4JyxcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QTJEXHU1QjlBJyxcblxuICAgICd0YXNrLnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOScsXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcbiAgICAndGFzay5ub25lJzogJ1x1NjZBQlx1NzEyMVx1NEVGQlx1NTJEOVx1MzAwMicsXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ1x1NEVDQVx1NjVFNVx1N0I0Nlx1OEExOFx1NjcyQVx1NUVGQVx1N0FDQlx1MzAwMlx1OUVERVx1NjRDQSBbXHU4OThGXHU1MjgzXHU0RUNBXHU1OTI5XSBcdTVFRkFcdTdBQ0JcdTMwMDInLFxuXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTZEM0JcdThFOERcdTVDMDhcdTY4NDhcdTMwMDInLFxuXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEI1OFx1NUVBQlx1N0Q3MVx1OEEwOCcsXG4gICAgJ3N0YXRzLnRvdGFsTm90ZXMnOiAnXHU3RTNEXHU3QjQ2XHU4QTE4JyxcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdcdTVGODVcdTUyMDZcdTk4NUUnLFxuXG4gICAgJ3JlY2VudC50aXRsZSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDUnLFxuICAgICdyZWNlbnQuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU2RDNCXHU1MkQ1XHUzMDAyJyxcblxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVDMEVcdTgyMkEnLFxuXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXG5cbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJDMFx1NjE0QicsXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEJcdThDQzdcdTY1OTlcdTMwMDInLFxuXG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTkwMzFcdThBMThcdTkzMDRcdTUyMDZcdTRGNDgnLFxuICAgICd3ZWVrbHkuZW1wdHknOiAnXHU2NzJDXHU5MDMxXHU2NkFCXHU3MTIxXHU2NUU1XHU4QTE4XHU4QTE4XHU5MzA0XHUzMDAyJyxcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IFx1Njg5RCcsXG5cbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QzBEXHU4QTcxJyxcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnXHU4QTYyXHU1NTRGIEtPUyBcdTc3RTVcdThCNThcdTVFQUIuLi4nLFxuICAgICdhaS53ZWxjb21lJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU1NTRGXHU2MjExXHU5NURDXHU2NUJDXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAxXHU1QzA4XHU2ODQ4XHU3MkMwXHU2MTRCXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTk1RENcdTc2ODRcdTU1NEZcdTk4NENcdTMwMDInLFxuICAgICdhaS5zZW5kQnRuJzogJ1x1NzY3Q1x1OTAwMScsXG4gICAgJ2FpLmNsZWFyQnRuJzogJ1x1NkUwNVx1N0E3QVx1NUMwRFx1OEE3MScsXG4gICAgJ2FpLnRoaW5raW5nJzogJ1x1NjAxRFx1ODAwM1x1NEUyRC4uLicsXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnXHU2NzJBXHU1MDc1XHU2RTJDXHU1MjMwIEZMT1dub3RlIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEU1Rlx1NjcyQVx1NjI3RVx1NTIzMFx1NjI0Qlx1NTJENSBBUEkgXHU4QTJEXHU1QjlBXHUzMDAyXHU4QUNCXHU1NzI4IEZMT1dub3RlIFx1NEUyRFx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwQ1x1NjIxNlx1NTcyOCBDb2NrcGl0IFx1OEEyRFx1NUI5QVx1NEUyRFx1NjI0Qlx1NTJENVx1NTg2Qlx1NUJFQlx1MzAwMicsXG4gICAgJ2FpLmVycm9yJzogJ1x1OEFDQlx1NkM0Mlx1NTkzMVx1NjU1Nzoge21zZ30nLFxuICAgICdhaS5yZXRyeSc6ICdcdTkxQ0RcdThBNjYnLFxuICAgICdhaS5jb3B5JzogJ1x1ODkwN1x1ODhGRCcsXG4gICAgJ2FpLmNvcGllZCc6ICdcdTVERjJcdTg5MDdcdTg4RkQnLFxuXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbic6ICdBSSBQcm92aWRlcicsXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnXHU5MTREXHU3RjZFIEFJIFx1NUMwRFx1OEE3MVx1NzY4NCBBUEkgXHU2M0E1XHU1MTY1XHU1M0MzXHU2NTc4XHUzMDAyXHU4MkU1IEZMT1dub3RlIFx1NURGMlx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwOFx1NjNBOFx1ODVBNlx1RkYwOVx1RkYwQ0NvY2twaXQgXHU1QzA3XHU4MUVBXHU1MkQ1XHU4QjgwXHU1M0Q2XHU1MTc2XHU4QTJEXHU1QjlBXHUzMDAyXHU3NTU5XHU3QTdBXHU1MjQ3XHU4MDRBXHU1OTI5XHU1MzQwXHU0RTBEXHU1M0VGXHU3NTI4XHUzMDAyJyxcbiAgICAnYWkuYXBpRW5kcG9pbnQnOiAnQVBJIEVuZHBvaW50JyxcbiAgICAnYWkuYXBpS2V5JzogJ0FQSSBLZXknLFxuICAgICdhaS5tb2RlbCc6ICdcdTZBMjFcdTU3OEJcdTU0MERcdTdBMzEnLFxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnXHU3Q0ZCXHU3RDcxXHU2M0QwXHU3OTNBXHU4QTVFJyxcbiAgICAnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnXHU0RjYwXHU2NjJGXHU0RTAwXHU1MDBCXHU3N0U1XHU4QjU4XHU3QkExXHU3NDA2XHU1MkE5XHU2MjRCXHVGRjBDXHU1RTZCXHU1MkE5XHU3NTI4XHU2MjM2XHU4NjU1XHU3NDA2IEtPUyBcdTc3RTVcdThCNThcdTVFQUJcdTMwMDInLFxuXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnXHU0RTAwXHU4MjJDJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnXHU0RUNCXHU5NzYyXHU4QTlFXHU4QTAwJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1x1OTA3OFx1NjRDN1x1NTEwMFx1ODg2OFx1Njc3Rlx1NzY4NFx1OTg2Rlx1NzkzQVx1OEE5RVx1OEEwMFx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXG4gICAgJ3NldHRpbmdzLmxhbmdFbic6ICdFbmdsaXNoJyxcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW4nOiAnXHU1NTVGXHU1MkQ1XHU2NjQyXHU4MUVBXHU1MkQ1XHU5NThCXHU1NTVGJyxcbiAgICAnc2V0dGluZ3MuYXV0b09wZW5EZXNjJzogJ09ic2lkaWFuIFx1NTU1Rlx1NTJENVx1NjY0Mlx1ODFFQVx1NTJENVx1OTU4Qlx1NTU1RiBLT1MgQ29ja3BpdFx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdcdTUxMDBcdTg4NjhcdTY3N0ZcdTUzNDBcdTU4NEEnLFxuICAgICdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJzogJ1x1NjNBN1x1NTIzNlx1NTEwMFx1ODg2OFx1Njc3Rlx1NEUwQVx1NTQwNFx1NTM0MFx1NTg0QVx1NzY4NFx1OTg2Rlx1NzkzQVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnXHU4Q0M3XHU2NTk5XHU5NjUwXHU1MjM2JyxcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJENVx1NjU3OCcsXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnXHU5ODZGXHU3OTNBXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU2QTk0XHU2ODQ4XHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnXHU2NzAwXHU1OTI3XHU0RUZCXHU1MkQ5XHU2NTc4JyxcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1OTg2Rlx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOVx1NzY4NFx1NjU3OFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ1x1NjcwMFx1NTkyNyBJbmJveCBcdTY1NzgnLFxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnXHU5ODZGXHU3OTNBIEluYm94IFx1NkE5NFx1NTQwRFx1NzY4NFx1NjU3OFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ1x1OTVEQ1x1NjVCQycsXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnXHU3MjQ4XHU2NzJDJyxcbiAgICAnc2V0dGluZ3MudmVyc2lvbkRlc2MnOiAnS09TIENvY2twaXQgdjAuMi4wIFx1MjAxNCBLT1NfTExNLVdpa2kgXHU3N0U1XHU4QjU4XHU3QkExXHU3NDA2XHU1MTAwXHU4ODY4XHU2NzdGXHUzMDAyS09TIFx1NzUxRlx1NjE0Qlx1NzY4NFx1NEUwMFx1OTBFOFx1NTIwNlx1MzAwMicsXG4gIH0sXG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIGtleSB1c2luZyB0aGUgY3VycmVudCBsb2NhbGUuXG4gKiBTdXBwb3J0cyB7cGxhY2Vob2xkZXJ9IHN1YnN0aXR1dGlvbiB2aWEgdGhlIHBhcmFtcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHQoa2V5LCBsb2NhbGUsIHBhcmFtcyA9IHt9KSB7XG4gIGNvbnN0IGRpY3QgPSBMT0NBTEVTW2xvY2FsZV0gfHwgTE9DQUxFU1snemgtY24nXTtcbiAgbGV0IHRleHQgPSBkaWN0W2tleV07XG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0ZXh0ID0gTE9DQUxFU1snemgtY24nXVtrZXldO1xuICB9XG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHBhcmFtcykpIHtcbiAgICB0ZXh0ID0gU3RyaW5nKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXHske2t9XFxcXH1gLCAnZycpLCBTdHJpbmcodikpO1xuICB9XG4gIHJldHVybiB0ZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdCwgTE9DQUxFUywgTE9DQUxFX0tFWVM6IE9iamVjdC5rZXlzKExPQ0FMRVMpIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IEFJIENoYXQgU2VydmljZVxuLy8gRkxPV25vdGUtY29tcGF0aWJsZSBwcm92aWRlciByZXNvbHV0aW9uICsgT3BlbkFJLWNvbXBhdGlibGUgc3RyZWFtaW5nIGNsaWVudC5cblxuLyoqIERlZmF1bHQgc3lzdGVtIHByb21wdCBmb3IgS09TIGNvbnRleHQgKi9cbmNvbnN0IERFRkFVTFRfU1lTVEVNX1BST01QVCA9ICdZb3UgYXJlIGEga25vd2xlZGdlIG1hbmFnZW1lbnQgYXNzaXN0YW50IGhlbHBpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdGhlaXIgS09TIHZhdWx0LiBSZXNwb25kIGNvbmNpc2VseSBpbiB0aGUgdXNlclxcJ3MgbGFuZ3VhZ2UuJztcblxuLyoqXG4gKiBGTE9Xbm90ZSBwcm92aWRlciBwcmVzZXRzIChtaXJyb3JzIEZMT1dub3RlJ3MgYnVpbHQtaW4gcHJvdmlkZXJzKS5cbiAqIEtleSA9IHByb3ZpZGVySWQgdXNlZCBpbiBGTE9Xbm90ZSdzIGRhdGEuanNvbiAtPiBhZ2VudFByb3ZpZGVyLmRpcmVjdC5wcm92aWRlcklkXG4gKi9cbmNvbnN0IEZMT1dOT1RFX1BST1ZJREVSUyA9IHtcbiAgJ2RlZXBzZWVrJzoge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5kZWVwc2Vlay5jb20vdjEnLFxuICAgIGxhYmVsOiAnRGVlcFNlZWsnLFxuICB9LFxuICAnb3BlbmFpLW9mZmljaWFsJzoge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxJyxcbiAgICBsYWJlbDogJ09wZW5BSScsXG4gIH0sXG4gICdvcGVuYWktY29tcGF0LWN1c3RvbSc6IHtcbiAgICBiYXNlVXJsOiAnJywgLy8gdXNlci1jb25maWd1cmVkXG4gICAgbGFiZWw6ICdPcGVuQUkgQ29tcGF0aWJsZScsXG4gIH0sXG4gICdjbGF1ZGUnOiB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmFudGhyb3BpYy5jb20vdjEnLFxuICAgIGxhYmVsOiAnQW50aHJvcGljIENsYXVkZScsXG4gIH0sXG4gICdnZW1pbmknOiB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL3YxYmV0YS9vcGVuYWknLFxuICAgIGxhYmVsOiAnR29vZ2xlIEdlbWluaScsXG4gIH0sXG4gICdzaWxpY29uZmxvdyc6IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuc2lsaWNvbmZsb3cuY24vdjEnLFxuICAgIGxhYmVsOiAnU2lsaWNvbkZsb3cnLFxuICB9LFxuICAnZ3JvcSc6IHtcbiAgICBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuZ3JvcS5jb20vb3BlbmFpL3YxJyxcbiAgICBsYWJlbDogJ0dyb3EnLFxuICB9LFxuICAndG9nZXRoZXInOiB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vYXBpLnRvZ2V0aGVyLnh5ei92MScsXG4gICAgbGFiZWw6ICdUb2dldGhlciBBSScsXG4gIH0sXG59O1xuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbi8vIFJlc29sdmVyOiByZWFkIEZMT1dub3RlJ3MgcHJvdmlkZXIgY29uZmlnXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBUcnkgdG8gbG9hZCBGTE9Xbm90ZSdzIGFnZW50IHByb3ZpZGVyIGNvbmZpZ3VyYXRpb24gZnJvbSBpdHMgZGF0YS5qc29uLlxuICogUmV0dXJucyBudWxsIGlmIEZMT1dub3RlIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IGNvbmZpZ3VyZWQuXG4gKlxuICogQHBhcmFtIHt7IGFkYXB0ZXI6IHsgcmVhZDogKHBhdGgpID0+IFByb21pc2U8c3RyaW5nPiB9IH19IHZhdWx0QWRhcHRlclxuICovXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRmxvd25vdGVQcm92aWRlcih2YXVsdEFkYXB0ZXIpIHtcbiAgaWYgKCF2YXVsdEFkYXB0ZXIgfHwgdHlwZW9mIHZhdWx0QWRhcHRlci5yZWFkICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGF3YWl0IHZhdWx0QWRhcHRlci5yZWFkKCcub2JzaWRpYW4vcGx1Z2lucy9mbG93bm90ZS9kYXRhLmpzb24nKTtcbiAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgY29uc3QgYXAgPSBjb25maWcgJiYgY29uZmlnLnNldHRpbmdzICYmIGNvbmZpZy5zZXR0aW5ncy5hZ2VudFByb3ZpZGVyO1xuICAgIGlmICghYXAgfHwgIWFwLmVuYWJsZWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZGlyZWN0ID0gYXAuZGlyZWN0IHx8IGFwW2FwLm1vZGVdO1xuICAgIGlmICghZGlyZWN0KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHByb3ZpZGVySWQgPSBkaXJlY3QucHJvdmlkZXJJZDtcbiAgICBjb25zdCBwcmVzZXQgPSBGTE9XTk9URV9QUk9WSURFUlNbcHJvdmlkZXJJZF07XG4gICAgaWYgKCFwcmVzZXQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgYXBpS2V5cyA9IGRpcmVjdC5hcGlLZXlzIHx8IHt9O1xuICAgIGNvbnN0IGFwaUtleSA9IGFwaUtleXNbcHJvdmlkZXJJZF07XG4gICAgaWYgKCFhcGlLZXkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbW9kZWwgPSBkaXJlY3QubW9kZWwgfHwgcHJlc2V0LmRlZmF1bHRNb2RlbCB8fCAnJztcbiAgICBjb25zdCBiYXNlVXJsID0gZGlyZWN0LmJhc2VVcmxPdmVycmlkZSB8fCBwcmVzZXQuYmFzZVVybDtcbiAgICBpZiAoIWJhc2VVcmwgJiYgcHJvdmlkZXJJZCAhPT0gJ29wZW5haS1jb21wYXQtY3VzdG9tJykgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBGb3Igb3BlbmFpLWNvbXBhdC1jdXN0b20sIHdlIG5lZWQgdGhlIHVzZXIncyBtYW51YWwgY29uZmlnXG4gICAgaWYgKHByb3ZpZGVySWQgPT09ICdvcGVuYWktY29tcGF0LWN1c3RvbScgJiYgIWJhc2VVcmwpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVySWQsXG4gICAgICBhcGlLZXksXG4gICAgICBtb2RlbCxcbiAgICAgIGJhc2VVcmwsXG4gICAgICBsYWJlbDogcHJlc2V0LmxhYmVsLFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuLy8gQUlDaGF0IGNsYXNzXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuY2xhc3MgQUlDaGF0IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncyAtIFJlc29sdmVkIHByb3ZpZGVyIHNldHRpbmdzIChmcm9tIHJlc29sdmVGbG93bm90ZVByb3ZpZGVyIG9yIG1hbnVhbClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmdzLmxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2V0dGluZ3MuYmFzZVVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2V0dGluZ3MuYXBpS2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXR0aW5ncy5tb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NldHRpbmdzLnN5c3RlbVByb21wdF1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgdGhpcy5fYWRkV2VsY29tZSgpO1xuICB9XG5cbiAgZ2V0IF9sb2NhbGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNldHRpbmdzICYmIHRoaXMuc2V0dGluZ3MubG9jYWxlKSB8fCAnemgtY24nO1xuICB9XG5cbiAgZ2V0IGlzQ29uZmlndXJlZCgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncyB8fCB7fTtcbiAgICByZXR1cm4gISEocy5iYXNlVXJsICYmIHMuYXBpS2V5ICYmIHMubW9kZWwpO1xuICB9XG5cbiAgLyoqIFByb3ZpZGVyIGxhYmVsIGZvciBkaXNwbGF5ICovXG4gIGdldCBwcm92aWRlckxhYmVsKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLnNldHRpbmdzIHx8IHt9O1xuICAgIHJldHVybiBzLnByb3ZpZGVyTGFiZWwgfHwgcy5iYXNlVXJsIHx8ICdVbmtub3duJztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLl9hZGRXZWxjb21lKCk7XG4gIH1cblxuICBnZXRIaXN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzLnNsaWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHVzZXIgbWVzc2FnZSBhbmQgc3RyZWFtIHRoZSBhc3Npc3RhbnQgcmVzcG9uc2UuXG4gICAqL1xuICBzZW5kTWVzc2FnZShjb250ZW50LCBjYWxsYmFja3MgPSB7fSkge1xuICAgIGNvbnN0IHsgb25Ub2tlbiwgb25Eb25lLCBvbkVycm9yIH0gPSBjYWxsYmFja3M7XG4gICAgY29uc3QgcyA9IHRoaXMuc2V0dGluZ3MgfHwge307XG5cbiAgICBpZiAoIXRoaXMuaXNDb25maWd1cmVkKSB7XG4gICAgICBpZiAob25FcnJvcikgb25FcnJvcihuZXcgRXJyb3IoJ0FJIG5vdCBjb25maWd1cmVkJykpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlck1zZyA9IHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBTdHJpbmcoY29udGVudCkudHJpbSgpIH07XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHVzZXJNc2cpO1xuXG4gICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gKHMuc3lzdGVtUHJvbXB0IHx8ICcnKS50cmltKCkgfHwgREVGQVVMVF9TWVNURU1fUFJPTVBUO1xuICAgIC8vIEJ1aWxkIHBheWxvYWQgXHUyMDE0IGluY2x1ZGUgc3lzdGVtIHByb21wdCBmcm9tIHNldHRpbmdzIG9ubHksIG5vdCBmcm9tIGhpc3RvcnlcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbW9kZWw6IHMubW9kZWwsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7IHJvbGU6ICdzeXN0ZW0nLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgLi4udGhpcy5tZXNzYWdlcy5maWx0ZXIoKG0pID0+IG0ucm9sZSAhPT0gJ3N5c3RlbScpLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3Qgc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXG4gICAgbGV0IGZ1bGxSZXNwb25zZSA9ICcnO1xuXG4gICAgdGhpcy5fZG9TdHJlYW1SZXF1ZXN0KHMuYmFzZVVybCwgcy5hcGlLZXksIHBheWxvYWQsIHNpZ25hbCwge1xuICAgICAgb25Ub2tlbjogKHRleHQpID0+IHtcbiAgICAgICAgZnVsbFJlc3BvbnNlICs9IHRleHQ7XG4gICAgICAgIGlmIChvblRva2VuKSBvblRva2VuKHRleHQpO1xuICAgICAgfSxcbiAgICAgIG9uRG9uZTogKCkgPT4ge1xuICAgICAgICBpZiAoZnVsbFJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IGZ1bGxSZXNwb25zZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIGlmIChvbkRvbmUpIG9uRG9uZShmdWxsUmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICBpZiAob25FcnJvcikgb25FcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduYWw7XG4gIH1cblxuICBhYm9ydCgpIHtcbiAgICBpZiAodGhpcy5hYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFByaXZhdGUgXHUyNTAwXHUyNTAwXG5cbiAgX2FkZFdlbGNvbWUoKSB7XG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5fbG9jYWxlO1xuICAgIGNvbnN0IHdlbGNvbWVzID0ge1xuICAgICAgJ3poLWNuJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxuICAgICAgJ2VuJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcbiAgICAgICd6aC10dyc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcbiAgICB9O1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgIGNvbnRlbnQ6IHdlbGNvbWVzW2xvY2FsZV0gfHwgd2VsY29tZXNbJ3poLWNuJ10sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfZG9TdHJlYW1SZXF1ZXN0KGJhc2VVcmwsIGFwaUtleSwgcGF5bG9hZCwgc2lnbmFsLCBjYWxsYmFja3MpIHtcbiAgICBjb25zdCB7IG9uVG9rZW4sIG9uRG9uZSwgb25FcnJvciB9ID0gY2FsbGJhY2tzO1xuXG4gICAgLy8gQnVpbGQgdGhlIGZ1bGwgVVJMXG4gICAgbGV0IGVuZHBvaW50ID0gU3RyaW5nKGJhc2VVcmwgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWVuZHBvaW50KSBlbmRwb2ludCA9ICdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxJztcbiAgICBpZiAoIS9cXC9jaGF0XFwvY29tcGxldGlvbnMkL2kudGVzdChlbmRwb2ludCkpIHtcbiAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnL2NoYXQvY29tcGxldGlvbnMnO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIFN0cmluZyhhcGlLZXkgfHwgJycpLnRyaW0oKSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5wYXlsb2FkLCBzdHJlYW06IHRydWUgfSksXG4gICAgICAgIHNpZ25hbCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxldCBlcnJCb2R5ID0gJyc7XG4gICAgICAgIHRyeSB7IGVyckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IH0gY2F0Y2gge31cbiAgICAgICAgY29uc3QgZXJyTXNnID0gJ0hUVFAgJyArIHJlc3BvbnNlLnN0YXR1cyArIChlcnJCb2R5ID8gJzogJyArIGVyckJvZHkuc2xpY2UoMCwgMjAwKSA6ICcnKTtcbiAgICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IobmV3IEVycm9yKGVyck1zZykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSBicmVhaztcblxuICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGJ1ZmZlciA9IGxpbmVzLnBvcCgpIHx8ICcnO1xuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgICBpZiAoIXRyaW1tZWQgfHwgdHJpbW1lZCA9PT0gJ2RhdGE6IFtET05FXScpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICghdHJpbW1lZC5zdGFydHNXaXRoKCdkYXRhOiAnKSkgY29udGludWU7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodHJpbW1lZC5zbGljZSg2KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGpzb24uY2hvaWNlcyAmJiBqc29uLmNob2ljZXNbMF0gJiYganNvbi5jaG9pY2VzWzBdLmRlbHRhO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRlbHRhICYmIGRlbHRhLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBvblRva2VuKSBvblRva2VuKGNvbnRlbnQpO1xuICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGbHVzaCByZW1haW5pbmcgYnVmZmVyXG4gICAgICBpZiAoYnVmZmVyLnRyaW0oKSkge1xuICAgICAgICBjb25zdCB0cmltbWVkID0gYnVmZmVyLnRyaW0oKTtcbiAgICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aCgnZGF0YTogJykgJiYgdHJpbW1lZCAhPT0gJ2RhdGE6IFtET05FXScpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodHJpbW1lZC5zbGljZSg2KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGpzb24uY2hvaWNlcyAmJiBqc29uLmNob2ljZXNbMF0gJiYganNvbi5jaG9pY2VzWzBdLmRlbHRhO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRlbHRhICYmIGRlbHRhLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBvblRva2VuKSBvblRva2VuKGNvbnRlbnQpO1xuICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob25Eb25lKSBvbkRvbmUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSByZXR1cm47XG4gICAgICBpZiAob25FcnJvcikgb25FcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQUlDaGF0LCByZXNvbHZlRmxvd25vdGVQcm92aWRlciwgRkxPV05PVEVfUFJPVklERVJTLCBERUZBVUxUX1NZU1RFTV9QUk9NUFQgfTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgc2hhcmVkIHV0aWxpdGllc1xuXG4vKipcbiAqIFBhcnNlIGZyb250bWF0dGVyIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqIFJldHVybnMge30gaWYgbm8gdmFsaWQgZnJvbnRtYXR0ZXIgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRnJvbnRtYXR0ZXIoY29udGVudCkge1xuICBjb25zdCB0ZXh0ID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpO1xuICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goL14tLS1cXG4oW1xcc1xcU10qPylcXG4tLS0vKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IG91dCA9IHt9O1xuICBtYXRjaFsxXS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBpdGVtID0gU3RyaW5nKGxpbmUgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWl0ZW0gfHwgaXRlbS5zdGFydHNXaXRoKCcjJykpIHJldHVybjtcbiAgICBjb25zdCBjb2xvbiA9IGl0ZW0uaW5kZXhPZignOicpO1xuICAgIGlmIChjb2xvbiA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qga2V5ID0gaXRlbS5zbGljZSgwLCBjb2xvbikudHJpbSgpO1xuICAgIGxldCB2YWx1ZSA9IGl0ZW0uc2xpY2UoY29sb24gKyAxKS50cmltKCk7XG4gICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnWycpICYmIHZhbHVlLmVuZHNXaXRoKCddJykpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSwgLTEpLnNwbGl0KCcsJykubWFwKChwKSA9PiBwLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBvdXRba2V5XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZXQgZnJvbnRtYXR0ZXIgdmFsdWUgYnkgbXVsdGlwbGUgcG9zc2libGUga2V5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBmbVZhbHVlKGZyb250bWF0dGVyLCBrZXlzLCBmYWxsYmFjaykge1xuICBjb25zdCBmbSA9IGZyb250bWF0dGVyICYmIHR5cGVvZiBmcm9udG1hdHRlciA9PT0gJ29iamVjdCcgPyBmcm9udG1hdHRlciA6IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmbSwga2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBmbVtrZXldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuam9pbignLCAnKTtcbiAgICAgIGNvbnN0IHRleHQgPSBTdHJpbmcodmFsdWUgPz8gJycpLnRyaW0oKTtcbiAgICAgIGlmICh0ZXh0KSByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG4vKipcbiAqIEZvcm1hdCBkYXRlIHRvIFlZWVktTU0tREQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBmb3JtYXREYXRlU3RyKGRhdGUpIHtcbiAgY29uc3QgZCA9IGRhdGUgfHwgbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgS09TIGRhaWx5IG5vdGUgcGF0aCBmb3IgYSBnaXZlbiBkYXRlLlxuICogS09TIGNvbnZlbnRpb246IFBlcmlvZGljL1lZWVkvTU0vWVlZWS1NTS1ERC5tZFxuICovXG5mdW5jdGlvbiBkYWlseU5vdGVQYXRoKGRhdGVTdHIpIHtcbiAgY29uc3QgcGFydHMgPSBkYXRlU3RyLnNwbGl0KCctJyk7XG4gIHJldHVybiBgUGVyaW9kaWMvJHtwYXJ0c1swXX0vJHtwYXJ0c1sxXX0vJHtkYXRlU3RyfS5tZGA7XG59XG5cbi8qKlxuICogR2V0IGZpbGUgYnkgcGF0aCBmcm9tIHZhdWx0LCByZXR1cm5pbmcgbnVsbCBpZiBtaXNzaW5nLlxuICovXG5mdW5jdGlvbiBnZXRGaWxlQnlQYXRoKHZhdWx0LCBwYXRoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBTYWZlbHkgcmVhZCBmaWxlIHRleHQgY29udGVudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGVUZXh0KHZhdWx0LCBmaWxlKSB7XG4gIGlmICghdmF1bHQgfHwgIWZpbGUpIHJldHVybiAnJztcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHZhdWx0LmNhY2hlZFJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQuY2FjaGVkUmVhZChmaWxlKSB8fCAnJyk7XG4gICAgaWYgKHR5cGVvZiB2YXVsdC5yZWFkID09PSAnZnVuY3Rpb24nKSByZXR1cm4gU3RyaW5nKGF3YWl0IHZhdWx0LnJlYWQoZmlsZSkgfHwgJycpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGFzayBzdGF0cyAob3Blbi9kb25lL3RvdGFsKSBmcm9tIG1hcmtkb3duIGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHRhc2tTdGF0c0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcbiAgbGV0IG9wZW4gPSAwO1xuICBsZXQgZG9uZSA9IDA7XG4gIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBpZiAoL15cXHMqWy0qXVxccytcXFtbIHhYXVxcXVxccysvLnRlc3QobGluZSkpIHtcbiAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1t4WF1cXF1cXHMrLy50ZXN0KGxpbmUpKSBkb25lICs9IDE7XG4gICAgICBlbHNlIG9wZW4gKz0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG9wZW4sXG4gICAgZG9uZSxcbiAgICB0b3RhbDogb3BlbiArIGRvbmUsXG4gICAgY29tcGxldGlvblJhdGU6IG9wZW4gKyBkb25lID4gMCA/IE1hdGgucm91bmQoKGRvbmUgLyAob3BlbiArIGRvbmUpKSAqIDEwMCkgOiAwLFxuICB9O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbmQgY2xlYW4gYSBmaWxlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocGF0aCkge1xuICByZXR1cm4gU3RyaW5nKHBhdGggfHwgJycpLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXRoIGlzIGEgc3lzdGVtL2ludGVybmFsIHBhdGggdGhhdCBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSBzdGF0cy5cbiAqL1xuZnVuY3Rpb24gaXNTeXN0ZW1QYXRoKHBhdGgpIHtcbiAgY29uc3QgdmFsdWUgPSBub3JtYWxpemVQYXRoKHBhdGgpO1xuICBpZiAoLyhefFxcLylcXC5bXi9dKyhcXC98JCkvLnRlc3QodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ19sb2dzLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ19tZXRhLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCc0IEFyY2hpdmVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1BlcmlvZGljLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ25vZGVfbW9kdWxlcy8nKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlRnJvbnRtYXR0ZXIsXG4gIGZtVmFsdWUsXG4gIGZvcm1hdERhdGVTdHIsXG4gIGRhaWx5Tm90ZVBhdGgsXG4gIGdldEZpbGVCeVBhdGgsXG4gIHJlYWRGaWxlVGV4dCxcbiAgdGFza1N0YXRzRnJvbUNvbnRlbnQsXG4gIG5vcm1hbGl6ZVBhdGgsXG4gIGlzU3lzdGVtUGF0aCxcbn07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHByb2plY3Qgc2Nhbm5pbmcgc2VydmljZVxuXG5jb25zdCB7IHBhcnNlRnJvbnRtYXR0ZXIsIGZtVmFsdWUsIHJlYWRGaWxlVGV4dCwgdGFza1N0YXRzRnJvbUNvbnRlbnQgfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBTY2FuIDEgUHJvamVjdHMvIGRpcmVjdG9yaWVzIGFuZCBidWlsZCBhIGxpc3Qgb2YgcHJvamVjdCBvdmVydmlldyBmaWxlcy5cbiAqL1xuZnVuY3Rpb24gZmluZFByb2plY3RGaWxlcyh2YXVsdCkge1xuICBpZiAoIXZhdWx0IHx8IHR5cGVvZiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW107XG4gIGNvbnN0IGZpbGVzID0gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICByZXR1cm4gZmlsZXMuZmlsdGVyKChmaWxlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IFN0cmluZyhmaWxlLnBhdGggfHwgJycpO1xuICAgIC8vIE1hdGNoOiAxIFByb2plY3RzLzxwcm9qZWN0LWRpcj4vPHByb2plY3QtbmFtZT4ubWRcbiAgICAvLyBFeGNsdWRlOiBcdTk4NzlcdTc2RUVcdTYwM0JcdTg5QzgubWQsIFJFQURNRS5tZFxuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBhdGguc3BsaXQoJy8nKS5sZW5ndGggIT09IDMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5lbmRzV2l0aCgnUkVBRE1FLm1kJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5lbmRzV2l0aCgnXFx1RDgzRFxcdURDQ0QgXFx1OTg3OVxcdTc2RUVcXHU2MDNCXFx1ODlDOC5tZCcpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHByb2plY3QgbWV0YWRhdGEgZnJvbSBhIGZpbGUncyBjb250ZW50IGFuZCBPYnNpZGlhbiBtZXRhZGF0YSBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9qZWN0KGZpbGUsIGNvbnRlbnQsIG1ldGFkYXRhQ2FjaGUpIHtcbiAgY29uc3QgZm0gPSB7XG4gICAgLi4ucGFyc2VGcm9udG1hdHRlcihjb250ZW50KSxcbiAgfTtcblxuICAvLyBUcnkgdG8gZ2V0IHJpY2hlciBmcm9udG1hdHRlciBmcm9tIG1ldGFkYXRhIGNhY2hlXG4gIHRyeSB7XG4gICAgY29uc3QgY2FjaGUgPSBtZXRhZGF0YUNhY2hlICYmIHR5cGVvZiBtZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBtZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKVxuICAgICAgOiBudWxsO1xuICAgIGlmIChjYWNoZSAmJiBjYWNoZS5mcm9udG1hdHRlcikge1xuICAgICAgT2JqZWN0LmFzc2lnbihmbSwgY2FjaGUuZnJvbnRtYXR0ZXIpO1xuICAgIH1cbiAgfSBjYXRjaCB7fVxuXG4gIGNvbnN0IHN0YXR1cyA9IGZtVmFsdWUoZm0sIFsnc3RhdHVzJywgJ1N0YXR1cyddLCAnYWN0aXZlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZm1WYWx1ZShmbSwgWydwcmlvcml0eScsICdQcmlvcml0eSddLCAnJyk7XG4gIGNvbnN0IGl0ZXJhdGlvbiA9IGZtVmFsdWUoZm0sIFsnaXRlcmF0aW9uJywgJ0l0ZXJhdGlvbiddLCAnJyk7XG4gIGNvbnN0IGFyZWEgPSBmbVZhbHVlKGZtLCBbJ2FyZWEnLCAnQXJlYScsICdkb21haW4nLCAnRG9tYWluJ10sICcnKTtcbiAgY29uc3QgdGFncyA9IEFycmF5LmlzQXJyYXkoZm0udGFncykgPyBmbS50YWdzIDogW107XG5cbiAgLy8gQ29tcHV0ZSB0YXNrIHByb2dyZXNzIGZyb20gdGhlIHByb2plY3QgZmlsZSBjb250ZW50XG4gIGNvbnN0IHRhc2tzID0gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgLy8gR2V0IHByb2plY3QgdGl0bGUgZnJvbSBmaXJzdCBoMSBvciBkaXJlY3RvcnkgbmFtZVxuICBjb25zdCBoZWFkaW5nID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLm1hdGNoKC9eI1xccysoLispJC9tKTtcbiAgY29uc3QgdGl0bGUgPSBoZWFkaW5nID8gaGVhZGluZ1sxXS50cmltKCkgOiBmaWxlLmJhc2VuYW1lIHx8ICcnO1xuXG4gIHJldHVybiB7XG4gICAgZmlsZSxcbiAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgdGl0bGUsXG4gICAgc3RhdHVzLFxuICAgIHByaW9yaXR5LFxuICAgIGl0ZXJhdGlvbixcbiAgICBhcmVhLFxuICAgIHRhZ3MsXG4gICAgdGFza3MsXG4gICAgbXRpbWU6IGZpbGUuc3RhdD8ubXRpbWUgfHwgMCxcbiAgICBjdGltZTogZmlsZS5zdGF0Py5jdGltZSB8fCAwLFxuICB9O1xufVxuXG4vKipcbiAqIExpc3QgYWxsIHByb2plY3RzLCB3aXRoIG9wdGlvbmFsIGZpbHRlcmluZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hY3RpdmVPbmx5IFx1MjAxNCBvbmx5IHJldHVybiBhY3RpdmUgcHJvamVjdHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGlzdFByb2plY3RzKGFwcCwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSBmaW5kUHJvamVjdEZpbGVzKGFwcC52YXVsdCk7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgYXBwLm1ldGFkYXRhQ2FjaGUpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICAvLyBTb3J0OiBhY3RpdmUgZmlyc3QsIHRoZW4gYnkgcHJpb3JpdHksIHRoZW4gYnkgbXRpbWVcbiAgcHJvamVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFBY3RpdmUgPSBhLnN0YXR1cyA9PT0gJ2FjdGl2ZSc7XG4gICAgY29uc3QgYkFjdGl2ZSA9IGIuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBpZiAoYUFjdGl2ZSAhPT0gYkFjdGl2ZSkgcmV0dXJuIGFBY3RpdmUgPyAtMSA6IDE7XG5cbiAgICBjb25zdCByYW5rID0gKHApID0+IHtcbiAgICAgIGNvbnN0IHYgPSBTdHJpbmcocCB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh2ID09PSAncDEnIHx8IHYgPT09ICdoaWdoJykgcmV0dXJuIDA7XG4gICAgICBpZiAodiA9PT0gJ3AyJyB8fCB2ID09PSAnbWVkaXVtJykgcmV0dXJuIDE7XG4gICAgICBpZiAodiA9PT0gJ3AzJyB8fCB2ID09PSAnbG93JykgcmV0dXJuIDI7XG4gICAgICByZXR1cm4gMztcbiAgICB9O1xuICAgIGNvbnN0IGJ5UHJpb3JpdHkgPSByYW5rKGEucHJpb3JpdHkpIC0gcmFuayhiLnByaW9yaXR5KTtcbiAgICBpZiAoYnlQcmlvcml0eSAhPT0gMCkgcmV0dXJuIGJ5UHJpb3JpdHk7XG4gICAgcmV0dXJuIGIubXRpbWUgLSBhLm10aW1lO1xuICB9KTtcblxuICBpZiAob3B0aW9ucy5hY3RpdmVPbmx5KSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbHRlcigocCkgPT4gcC5zdGF0dXMgPT09ICdhY3RpdmUnKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbi8qKlxuICogR2V0IGVuZ2luZSBzdGF0ZSBmcm9tIF9tZXRhL2FpL21lbW9yeS9TVEFURS5tZCAoYnVsbGV0LWxpc3QgZm9ybWF0KS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0RW5naW5lU3RhdGUoYXBwKSB7XG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICB0cmlhZ2U6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBjb21waWxlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgbGluazogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGRhaWx5OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgcHJvamVjdDogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGFyY2hpdmU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBjYW52YXM6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICAna29zLWluaXQnOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgbGlmZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICB9O1xuXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoJ19tZXRhL2FpL21lbW9yeS9TVEFURS5tZCcpO1xuICBpZiAoIWZpbGUpIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xuXG4gIC8vIFNUQVRFLm1kIHVzZXMgc2VjdGlvbi1iYXNlZCBidWxsZXQgZm9ybWF0OlxuICAvLyAjIyB0cmlhZ2VcbiAgLy8gLSBsYXN0X3J1bjogMjAyNi0wNi0wOVxuICAvLyAtIHBlbmRpbmc6IDBcbiAgLy8gLSBzdW1tYXJ5OiBJbmJveCBjbGVhcmVkXG4gIGNvbnN0IGVuZ2luZXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0U3RhdGUpO1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGN1cnJlbnRFbmdpbmUgPSBudWxsO1xuXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gbGluZS5tYXRjaCgvXiMjXFxzKyhcXFMrKVxccyokLyk7XG4gICAgaWYgKHNlY3Rpb24gJiYgZW5naW5lcy5pbmNsdWRlcyhzZWN0aW9uWzFdKSkge1xuICAgICAgY3VycmVudEVuZ2luZSA9IHNlY3Rpb25bMV07XG4gICAgICBwYXJzZWRbY3VycmVudEVuZ2luZV0gPSB7fTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50RW5naW5lKSByZXR1cm47XG4gICAgY29uc3Qga3YgPSBsaW5lLm1hdGNoKC9eLVxccysoXFx3Kyk6XFxzKiguKikkLyk7XG4gICAgaWYgKGt2KSB7XG4gICAgICBwYXJzZWRbY3VycmVudEVuZ2luZV1ba3ZbMV1dID0ga3ZbMl0udHJpbSgpIHx8IG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyBOb3JtYWxpemUgdG8geyBsYXN0UnVuLCBzdGF0dXMsIHN1bW1hcnkgfSBmb3IgY29ja3BpdCBjb25zdW1wdGlvblxuICBjb25zdCBzdGF0ZSA9IHt9O1xuICBlbmdpbmVzLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCByYXcgPSBwYXJzZWRbZV0gfHwge307XG4gICAgc3RhdGVbZV0gPSB7XG4gICAgICBsYXN0UnVuOiByYXcubGFzdF9ydW4gfHwgcmF3Lmxhc3RfZGFpbHkgfHwgbnVsbCxcbiAgICAgIHN0YXR1czogcmF3LnBlbmRpbmcgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IChOdW1iZXIocmF3LnBlbmRpbmcpID09PSAwID8gJ2RvbmUnIDogJ3BlbmRpbmcnKVxuICAgICAgICA6ICdwZW5kaW5nJyxcbiAgICAgIHN1bW1hcnk6IHJhdy5zdW1tYXJ5IHx8IG51bGwsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmluZFByb2plY3RGaWxlcyxcbiAgcGFyc2VQcm9qZWN0LFxuICBsaXN0UHJvamVjdHMsXG4gIGdldEVuZ2luZVN0YXRlLFxufTtcbiIsICJcdUZFRkYvLyBLT1MgQ29ja3BpdCBcdTkyMjU/aG9tZSBkYXRhIGVuZ2luZVxyXG5cclxuY29uc3Qge1xyXG4gIHBhcnNlRnJvbnRtYXR0ZXIsXHJcbiAgZm1WYWx1ZSxcclxuICBmb3JtYXREYXRlU3RyLFxyXG4gIGRhaWx5Tm90ZVBhdGgsXHJcbiAgZ2V0RmlsZUJ5UGF0aCxcclxuICByZWFkRmlsZVRleHQsXHJcbiAgdGFza1N0YXRzRnJvbUNvbnRlbnQsXHJcbiAgaXNTeXN0ZW1QYXRoLFxyXG4gIG5vcm1hbGl6ZVBhdGgsXHJcbn0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbmNvbnN0IHsgbGlzdFByb2plY3RzLCBnZXRFbmdpbmVTdGF0ZSB9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LXNlcnZpY2UnKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdG9kYXkncyBkYWlseSBub3RlIHN0YXRlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlTdGF0ZShhcHApIHtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybWF0RGF0ZVN0cigpO1xyXG4gIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRhdGVTdHIpO1xyXG4gIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcblxyXG4gIGlmICghZmlsZSkge1xyXG4gICAgcmV0dXJuIHsgZGF0ZVN0ciwgcGF0aCwgZXhpc3RzOiBmYWxzZSwgZmlsZTogbnVsbCwgdGFza3M6IHsgb3BlbjowLGRvbmU6MCx0b3RhbDowLGNvbXBsZXRpb25SYXRlOjAgfSwgdGFza0l0ZW1zOiBbXSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gIGNvbnN0IHRhc2tzID0gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCk7XHJcbiAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICBjb25zdCB0YXNrSXRlbXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBtID0gU3RyaW5nKGxpbmVzW2ldIHx8ICcnKS5tYXRjaCgvXihcXHMqWy0qXVxccytcXFspKFsgeFhdKShcXF1cXHMrKSguKykkLyk7XHJcbiAgICBpZiAoIW0pIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgdGV4dCA9IG1bNF0udHJpbSgpO1xyXG4gICAgaWYgKCF0ZXh0KSBjb250aW51ZTtcclxuICAgIHRhc2tJdGVtcy5wdXNoKHsgbGluZUluZGV4OiBpLCB0ZXh0LCBkb25lOiAveC9pLnRlc3QobVsyXSkgfSk7XHJcbiAgICBpZiAodGFza0l0ZW1zLmxlbmd0aCA+PSAxMikgYnJlYWs7XHJcbiAgfVxyXG5cclxuICAvLyBFeHRyYWN0IHRvZGF5J3MgZm9jdXMgKGZpcnN0IGgyIG9yIGJvbGQgbGluZSB1bmRlciAjIyBcXHU0RUNBXFx1NjVFNVxcdTgwNUFcXHU3MTI2KVxyXG4gIGxldCBmb2N1cyA9ICcnO1xyXG4gIGNvbnN0IGZvY3VzTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC8jIyBcXHU0RUNBXFx1NjVFNVxcdTgwNUFcXHU3MTI2W14jXSo/XFxuKC0gLispLyk7XHJcbiAgaWYgKGZvY3VzTWF0Y2gpIGZvY3VzID0gZm9jdXNNYXRjaFsxXS5yZXBsYWNlKC9eLSAvLCAnJykudHJpbSgpO1xyXG5cclxuICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IHRydWUsIGZpbGUsIHRhc2tzLCB0YXNrSXRlbXMsIGZvY3VzLCBjb250ZW50IH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudCBmaWxlcyBpbiAwIEluYm94IChleGNsdWRpbmcgX3Byb2Nlc3NlZC8pLlxyXG4gKiBSZXR1cm5zIFRGaWxlIG9iamVjdHMgKHdpdGggLnBhdGgsIC5iYXNlbmFtZSwgLnN0YXQpLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5ib3hGaWxlcyh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT4ge1xyXG4gICAgY29uc3QgcCA9IFN0cmluZyhmLnBhdGggfHwgJycpO1xyXG4gICAgcmV0dXJuIHAuc3RhcnRzV2l0aCgnMCBJbmJveC8nKSAmJiAhcC5zdGFydHNXaXRoKCcwIEluYm94L19wcm9jZXNzZWQvJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHZhdWx0IGFuZCBjb21wdXRlIGtub3dsZWRnZSBnYXJkZW4gc3RhdGlzdGljcy5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZFN0YXRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQgfHwgdHlwZW9mIGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4geyB0b3RhbE5vdGVzOiAwLCB0b2RheU5ldzogMCwgc3RhdHM6IHt9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XHJcbiAgY29uc3QgdG9kYXkgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgbGV0IHRvZGF5TmV3ID0gMDtcclxuICBjb25zdCBzdGF0cyA9IHsgcm9vdDowLCBwcm9qZWN0czowLCBhcmVhczowLCByZXNvdXJjZXM6MCwgaW5ib3g6MCwgcGVyaW9kaWM6MCwgc3lzdGVtOjAgfTtcclxuXHJcbiAgZmlsZXMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgY29uc3QgcCA9IFN0cmluZyhmLnBhdGggfHwgJycpO1xyXG4gICAgaWYgKHAuc3RhcnRzV2l0aCgnMSBQcm9qZWN0cy8nKSkgc3RhdHMucHJvamVjdHMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnMiBBcmVhcy8nKSkgc3RhdHMuYXJlYXMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnMyBSZXNvdXJjZXMvJykpIHN0YXRzLnJlc291cmNlcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcwIEluYm94LycpKSB7IGlmICghcC5zdGFydHNXaXRoKCcwIEluYm94L19wcm9jZXNzZWQvJykpIHN0YXRzLmluYm94ICs9IDE7IH1cclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHN0YXRzLnBlcmlvZGljICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJ18nKSB8fCBwLnN0YXJ0c1dpdGgoJy4nKSkgc3RhdHMuc3lzdGVtICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHt9XHJcbiAgICBlbHNlIHN0YXRzLnJvb3QgKz0gMTtcclxuXHJcbiAgICAvLyBDb3VudCB0b2RheS1uZXcgZmlsZXNcclxuICAgIGNvbnN0IGN0aW1lID0gZi5zdGF0Py5jdGltZSA/IG5ldyBEYXRlKGYuc3RhdC5jdGltZSkgOiBudWxsO1xyXG4gICAgaWYgKGN0aW1lKSB7XHJcbiAgICAgIGNvbnN0IGNkID0gZm9ybWF0RGF0ZVN0cihjdGltZSk7XHJcbiAgICAgIGlmIChjZCA9PT0gdG9kYXkpIHRvZGF5TmV3ICs9IDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHRvdGFsTm90ZXM6IGZpbGVzLmxlbmd0aCwgdG9kYXlOZXcsIHN0YXRzIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmVjZW50IG1vZGlmaWVkIGZpbGVzICh0b3AgMTApLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVjZW50QWN0aXZpdHkodmF1bHQpIHtcclxuICBpZiAoIXZhdWx0IHx8IHR5cGVvZiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW107XHJcbiAgcmV0dXJuIHZhdWx0LmdldE1hcmtkb3duRmlsZXMoKVxyXG4gICAgLmZpbHRlcigoZikgPT4gIWlzU3lzdGVtUGF0aChmLnBhdGgpKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IChiLnN0YXQ/Lm10aW1lIHx8IDApIC0gKGEuc3RhdD8ubXRpbWUgfHwgMCkpXHJcbiAgICAuc2xpY2UoMCwgMjQpXHJcbiAgICAubWFwKChmKSA9PiAoeyBwYXRoOiBmLnBhdGgsIHRpdGxlOiBmLmJhc2VuYW1lIHx8ICcnLCBtdGltZTogZi5zdGF0Py5tdGltZSB8fCAwIH0pKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBob3QgY29udGV4dCBmcm9tIF9tZXRhL2hvdC5tZFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SG90Q29udGV4dChhcHApIHtcclxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gW107XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCAnX21ldGEvaG90Lm1kJyk7XHJcbiAgaWYgKCFmaWxlKSByZXR1cm4gW107XHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcclxuICBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICBjb25zdCBtID0gbGluZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSlcXHMqW1xcdTIwMTRcXHUyMDEzXFwtXVxccyooLispJC8pO1xyXG4gICAgaWYgKG0pIGVudHJpZXMucHVzaCh7IGRhdGU6IG1bMV0sIHN1bW1hcnk6IG1bMl0udHJpbSgpIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBlbnRyaWVzLnNsaWNlKDAsIDUpO1xyXG59XHJcblxyXG4vKipcclxuICogU2NhbiB0aGUgY3VycmVudCB3ZWVrJ3MgZGFpbHkgbm90ZXMgZm9yIHdlZWtseSByZWNvcmQgYmFyIGNoYXJ0LlxyXG4gKiBSZXR1cm5zIDcgY2VsbHMgKE1vbi1TdW4pIHdpdGggY2FwdHVyZSBjb3VudCBwZXIgZGF5LlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2Vla2x5UmVjb3JkcyhhcHApIHtcclxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gW107XHJcblxyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5T2ZXZWVrID0gbm93LmdldERheSgpOyAvLyAwPVN1biwgMT1Nb24gLi4uXHJcbiAgY29uc3QgbW9uZGF5T2Zmc2V0ID0gZGF5T2ZXZWVrID09PSAwID8gLTYgOiAxIC0gZGF5T2ZXZWVrO1xyXG5cclxuICBjb25zdCBjZWxscyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcclxuICAgIGQuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpICsgbW9uZGF5T2Zmc2V0ICsgaSk7XHJcbiAgICBjb25zdCBkcyA9IGZvcm1hdERhdGVTdHIoZCk7XHJcbiAgICBjb25zdCBwYXRoID0gZGFpbHlOb3RlUGF0aChkcyk7XHJcbiAgICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsIHBhdGgpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcclxuICAgICAgLy8gQ291bnQgbm9uLXRhc2ssIG5vbi1oZWFkaW5nLCBub24tZW1wdHkgbGluZXMgYXMgXCJjYXB0dXJlc1wiXHJcbiAgICAgIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XHJcbiAgICAgIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gbGluZS50cmltKCk7XHJcbiAgICAgICAgaWYgKCF0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eLS0tJC8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXiN7MSw2fVxccysvLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBpZiAoL15cXHMqWy0qXVxccytcXFtbIHhYXVxcXS8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXihjcmVhdGVkfHVwZGF0ZWR8dGFnc3xzdGF0dXN8cHJpb3JpdHkpL2kudGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2Vla2RheXMgPSBbJ1xcdTY1RTUnLCdcXHU0RTAwJywnXFx1NEU4QycsJ1xcdTRFMDknLCdcXHU1NkRCJywnXFx1NEU5NCcsJ1xcdTUxNkQnXTtcclxuICAgIGNlbGxzLnB1c2goeyBkYXRlOiBkcywgY291bnQsIHdlZWtkYXk6IHdlZWtkYXlzW2ldLCBpc1RvZGF5OiBkcyA9PT0gZm9ybWF0RGF0ZVN0cihub3cpIH0pO1xyXG4gIH1cclxuICByZXR1cm4gY2VsbHM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldFRvZGF5U3RhdGUsXHJcbiAgZ2V0SW5ib3hGaWxlcyxcclxuICBnZXREYXNoYm9hcmRTdGF0cyxcclxuICBnZXRSZWNlbnRBY3Rpdml0eSxcclxuICBnZXRIb3RDb250ZXh0LFxyXG4gIGdldFdlZWtseVJlY29yZHMsXHJcbiAgZ2V0RW5naW5lU3RhdGUsXHJcbiAgbGlzdFByb2plY3RzLFxyXG59O1xyXG4iLCAiLy8gS09TIENvY2twaXQgdjEwIFx1MjAxNCBGTE9Xbm90ZS1zdHlsZSBwYW5lbCBzd2l0Y2hpbmcgKGhvbWUgLyBjaGF0KVxuLy8gKyBTZXR0aW5ncy1hd2FyZSArIGxvY2FsZSBpMThuICsgQUkgQ2hhdCB3aXRoIEZMT1dub3RlIGF1dG8tZGV0ZWN0XG5cbmNvbnN0IHsgSXRlbVZpZXcsIG1vbWVudCB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcbmNvbnN0IHsgdCB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcbmNvbnN0IHsgQUlDaGF0LCByZXNvbHZlRmxvd25vdGVQcm92aWRlciB9ID0gcmVxdWlyZSgnLi9haS1jaGF0Jyk7XG5jb25zdCB7XG4gIGdldFRvZGF5U3RhdGUsIGdldEluYm94RmlsZXMsIGdldERhc2hib2FyZFN0YXRzLFxuICBnZXRSZWNlbnRBY3Rpdml0eSwgZ2V0SG90Q29udGV4dCwgZ2V0V2Vla2x5UmVjb3JkcyxcbiAgZ2V0RW5naW5lU3RhdGUsIGxpc3RQcm9qZWN0cyxcbn0gPSByZXF1aXJlKCcuL2hvbWUtc2VydmljZScpO1xuXG5jb25zdCBWSUVXX1RZUEVfQ09DS1BJVCA9ICdrb3MtY29ja3BpdC12aWV3JztcblxuY2xhc3MgQ29ja3BpdFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxlYWYsIHBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuYWlDaGF0ID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gJ2hvbWUnOyAvLyAnaG9tZScgfCAnY2hhdCdcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCkgeyByZXR1cm4gVklFV19UWVBFX0NPQ0tQSVQ7IH1cbiAgZ2V0RGlzcGxheVRleHQoKSB7IHJldHVybiB0aGlzLmFjdGl2ZVBhbmVsID09PSAnY2hhdCcgPyAnS09TIEFJIENoYXQnIDogJ0tPUyBDb2NrcGl0JzsgfVxuICBnZXRJY29uKCkgeyByZXR1cm4gJ2dhdWdlJzsgfVxuXG4gIGdldCBzZXR0aW5ncygpIHsgcmV0dXJuIHRoaXMucGx1Z2luID8gdGhpcy5wbHVnaW4uc2V0dGluZ3MgOiBudWxsOyB9XG5cbiAgX3Qoa2V5LCBwYXJhbXMpIHsgcmV0dXJuIHQoa2V5LCB0aGlzLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJywgcGFyYW1zKTsgfVxuXG4gIGdldCBfZGF5TmFtZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuX3QoJ2RheS5zdW4nKSwgdGhpcy5fdCgnZGF5Lm1vbicpLCB0aGlzLl90KCdkYXkudHVlJyksXG4gICAgICB0aGlzLl90KCdkYXkud2VkJyksIHRoaXMuX3QoJ2RheS50aHUnKSwgdGhpcy5fdCgnZGF5LmZyaScpLFxuICAgICAgdGhpcy5fdCgnZGF5LnNhdCcpLFxuICAgIF07XG4gIH1cblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgc3VwZXIub25sb2FkKCk7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5hZGRDbGFzcygna29zLWNvY2twaXQtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZW5kZXJMb2FkaW5nKCkge1xuICAgIHRoaXMuY29udGVudEVsLmlubmVySFRNTCA9XG4gICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJrb3MtY29ja3BpdC1sb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgJzxzcGFuPicgKyB0aGlzLl90KCdhcHAubG9hZGluZycpICsgJzwvc3Bhbj4nICtcbiAgICAgICc8L2Rpdj4nO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IobXNnKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xuICAgIGNvbnN0IGVyckJveCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGInKTtcbiAgICBlcnJCb3guY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgnYXBwLmVycm9yJyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgaWYgKG1zZykgZXJyQm94LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IFN0cmluZyhtc2cpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgUmV0cnknIH0pO1xuICAgIHJldHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLnJlbmRlckxvYWRpbmcoKTsgdGhpcy5yZWZyZXNoKCk7IH0pO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xuICAgICAgdGhpcy5yZW5kZXJQYW5lbChkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdLT1MgQ29ja3BpdCByZWZyZXNoIGVycm9yOicsIGUpO1xuICAgICAgdGhpcy5yZW5kZXJFcnJvcihlPy5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb2xsZWN0RGF0YShhcHApIHtcbiAgICBjb25zdCBbdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRUb2RheVN0YXRlKGFwcCkuY2F0Y2goKCkgPT4gbnVsbCksXG4gICAgICBsaXN0UHJvamVjdHMoYXBwLCB7IGFjdGl2ZU9ubHk6IHRydWUgfSkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKS5jYXRjaCgoKSA9PiAoeyB0b3RhbE5vdGVzOjAsIHRvZGF5TmV3OjAsIHN0YXRzOnt9IH0pKSxcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRSZWNlbnRBY3Rpdml0eShhcHAudmF1bHQpKSxcbiAgICAgIGdldEhvdENvbnRleHQoYXBwKS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXRXZWVrbHlSZWNvcmRzKGFwcCkuY2F0Y2goKCkgPT4gW10pLFxuICAgICAgZ2V0RW5naW5lU3RhdGUoYXBwKS5jYXRjaCgoKSA9PiAoe30pKSxcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRJbmJveEZpbGVzKGFwcC52YXVsdCkpLFxuICAgIF0pO1xuICAgIHJldHVybiB7IHRvZGF5LCBwcm9qZWN0cywgc3RhdHMsIHJlY2VudCwgaG90LCB3ZWVrbHksIGVuZ2luZXMsIGluYm94RmlsZXMgfTtcbiAgfVxuXG4gIC8qKiBTd2l0Y2ggYmV0d2VlbiAnaG9tZScgYW5kICdjaGF0JyBwYW5lbHMgKi9cbiAgc3dpdGNoUGFuZWwocGFuZWwsIGRhdGEpIHtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gcGFuZWw7XG4gICAgdGhpcy5yZW5kZXJQYW5lbChkYXRhIHx8IG51bGwpO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIFBhbmVsIFJvdXRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXJQYW5lbChkYXRhKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29uc3QgbWFpbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwgPT09ICdjaGF0Jykge1xuICAgICAgdGhpcy5yZW5kZXJDaGF0VmlldyhtYWluLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJIb21lVmlldyhtYWluLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgSG9tZSAoRGFzaGJvYXJkKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXJIb21lVmlldyhjb250YWluZXIsIGRhdGEpIHtcbiAgICB0aGlzLnJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpO1xuICAgIHRoaXMucmVuZGVyUXVpY2tBY3Rpb25zKGNvbnRhaW5lcik7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1RvZGF5VGFza3MgIT09IGZhbHNlKSB0aGlzLnJlbmRlclRvZGF5VGFza3MoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlIHx8IHRoaXMuc2V0dGluZ3M/LnNob3dSZWNlbnRBY3Rpdml0eSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucmVuZGVyVHdvQ29sdW1ucyhjb250YWluZXIsIGRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd05hdiAhPT0gZmFsc2UpIHRoaXMucmVuZGVyTmF2KGNvbnRhaW5lcik7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dJbmJveEZpbGVzICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJJbmJveEZpbGVzKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dQcm9qZWN0Q2FyZHMgIT09IGZhbHNlKSB0aGlzLnJlbmRlclByb2plY3RzKGNvbnRhaW5lciwgZGF0YSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3M/LnNob3dFbmdpbmVTdGF0ZSAhPT0gZmFsc2UpIHRoaXMucmVuZGVyRW5naW5lU3RhdGUoY29udGFpbmVyLCBkYXRhKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1dlZWtseUNoYXJ0ICE9PSBmYWxzZSkgdGhpcy5yZW5kZXJXZWVrbHlDaGFydChjb250YWluZXIsIGRhdGEpO1xuXG4gICAgLy8gQUkgQ2hhdCBlbnRyeSBidXR0b24gKGFsd2F5cyBhdCBib3R0b20pXG4gICAgdGhpcy5yZW5kZXJDaGF0RW50cnlCdG4oY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbmRlckhlYWRlcihjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBoID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1oZWFkZXInIH0pO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IGRheU5hbWVzID0gdGhpcy5fZGF5TmFtZXM7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M1ICcgKyBub3cuZm9ybWF0KHRoaXMuX3QoJ2hlYWRlci5kYXRlRm9ybWF0JykpICsgJyBcXHU2NjFGXFx1NjcxRicgKyBkYXlOYW1lc1tub3cuZGF5KCldLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1kYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gZGF0YS50b2RheT8uZXhpc3RzXG4gICAgICA/IHRoaXMuX3QoJ2hlYWRlci5ub3RlQ3JlYXRlZCcpXG4gICAgICA6IHRoaXMuX3QoJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCcpO1xuICAgIGNvbnN0IGZvY3VzVmFsID0gZGF0YS50b2RheT8uZm9jdXMgfHwgJyc7XG4gICAgaC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgdGV4dDogdGhpcy5fdCgnaGVhZGVyLm5vdGVTdGF0dXMnLCB7IHN0YXR1czogc3RhdHVzVGV4dCB9KVxuICAgICAgICArICcgIFxcdTAwQjcgICdcbiAgICAgICAgKyB0aGlzLl90KCdoZWFkZXIudG9kYXlGb2N1cycsIHsgZm9jdXM6IGZvY3VzVmFsIHx8IHRoaXMuX3QoJ2hlYWRlci5mb2N1c05vdFNldCcpIH0pLFxuICAgICAgY2xzOiAna29zLWRiLWhlYWRlci1zdGF0dXMnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlZnJlc2hCdG4gPSBoLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1yZWZyZXNoLWJ0bicgfSk7XG4gICAgcmVmcmVzaEJ0bi5pbm5lckhUTUwgPSAnXFx1MjFCQic7XG4gICAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW5kZXJMb2FkaW5nKCk7IHRoaXMucmVmcmVzaCgpOyB9KTtcbiAgfVxuXG4gIHJlbmRlclF1aWNrQWN0aW9ucyhjb250YWluZXIpIHtcbiAgICBjb25zdCBxYSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWN0aW9ucycgfSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENDNSAnICsgdGhpcy5fdCgnYWN0aW9uLnBsYW5Ub2RheScpLCBjbWQ6ICdkYWlseS1vcGVuJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0REICcgKyB0aGlzLl90KCdhY3Rpb24uY2FwdHVyZScpLCBjbWQ6ICdjYXB0dXJlJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVERDA0ICcgKyB0aGlzLl90KCdhY3Rpb24uZGF5UmV2aWV3JyksIGNtZDogJ2RheS1yZXZpZXcnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQ0IgJyArIHRoaXMuX3QoJ2FjdGlvbi5uZXdQcm9qZWN0JyksIGNtZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdUREQzJcXHVGRTBGICcgKyB0aGlzLl90KCdhY3Rpb24udHJpYWdlJyksIGNtZDogJ3RyaWFnZScgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnYWN0aW9uLnNldHRpbmdzJyksIGNtZDogJ3NldHRpbmdzJyB9LFxuICAgIF07XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBxYS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWN0aW9uLWJ0bicgfSk7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBhLmxhYmVsO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmhhbmRsZVF1aWNrQWN0aW9uKGEuY21kKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVRdWlja0FjdGlvbihjbWQpIHtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgY2FzZSAnZGFpbHktb3Blbic6IHtcbiAgICAgICAgY29uc3QgeyBkYWlseU5vdGVQYXRoIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZGFpbHlOb3RlUGF0aChtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSksICcnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzZXR0aW5ncyc6IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHRoaXMuYXBwLnNldHRpbmc7XG4gICAgICAgIGlmIChzZXR0aW5nKSB7IHNldHRpbmcub3BlbigpOyBzZXR0aW5nLm9wZW5UYWJCeUlkKCdrb3MtY29ja3BpdCcpOyB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnX21ldGEvaG90Lm1kJywgJycsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvZGF5VGFza3MoY29udGFpbmVyLCBkYXRhKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbiBrb3MtZGItdG9kYXktdGFza3MnIH0pO1xuICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWhlYWRlcicgfSk7XG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdcXHUyNzA1ICcgKyB0aGlzLl90KCd0YXNrLnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBpZiAoZGF0YS50b2RheT8udGFza3MpIHtcbiAgICAgIGNvbnN0IHsgZG9uZSwgdG90YWwsIGNvbXBsZXRpb25SYXRlIH0gPSBkYXRhLnRvZGF5LnRhc2tzO1xuICAgICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiB0aGlzLl90KCd0YXNrLnByb2dyZXNzJywgeyBkb25lLCB0b3RhbCwgcmF0ZTogY29tcGxldGlvblJhdGUgfSksXG4gICAgICAgIGNsczogJ2tvcy1kYi10b2RheS1jb3VudCAnICsgKHRvdGFsID4gMCAmJiBjb21wbGV0aW9uUmF0ZSA+PSAxMDAgPyAna29zLWRiLXRvZGF5LWRvbmUnIDogJycpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi10b2RheS1saXN0JyB9KTtcbiAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heFRhc2tJdGVtcyB8fCAxMjtcbiAgICBjb25zdCBpdGVtcyA9IChkYXRhLnRvZGF5Py50YXNrSXRlbXMgfHwgW10pLnNsaWNlKDAsIG1heEl0ZW1zKTtcbiAgICBpZiAoIWRhdGEudG9kYXk/LmV4aXN0cykge1xuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCd0YXNrLmRhaWx5TWlzc2luZycpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIH0gZWxzZSBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ3Rhc2subm9uZScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWl0ZW0nICsgKGl0ZW0uZG9uZSA/ICcga29zLWRiLXRvZGF5LWl0ZW0tZG9uZScgOiAnJykgfSk7XG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWRiLXRvZGF5LWNiJyB9KS50ZXh0Q29udGVudCA9IGl0ZW0uZG9uZSA/ICdcXHUyNjExJyA6ICdcXHUyNjEwJztcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBpdGVtLnRleHQsIGNsczogJ2tvcy1kYi10b2RheS10ZXh0JyB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclByb2plY3RzKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0NCICcgKyB0aGlzLl90KCdwcm9qZWN0LnRpdGxlJyksIGNsczogJ2tvcy1kYi1zZWN0aW9uLXRpdGxlJyB9KTtcbiAgICBjb25zdCBncmlkID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItcHJvamVjdC1ncmlkJyB9KTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHMgfHwgW107XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdwcm9qZWN0LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9qZWN0LWNhcmQnIH0pO1xuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChwcm9qLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgICBjb25zdCB0aXRsZVJvdyA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXByb2plY3QtdGl0bGUtcm93JyB9KTtcbiAgICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBwcm9qLnRpdGxlIHx8ICdVbm5hbWVkJywgY2xzOiAna29zLWRiLXByb2plY3QtdGl0bGUnIH0pO1xuICAgICAgY29uc3QgcCA9IFN0cmluZyhwcm9qLnByaW9yaXR5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHApIHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBwcm9qLnByaW9yaXR5LCBjbHM6ICdrb3MtZGItYmFkZ2Uga29zLWRiLWJhZGdlLScgKyBwIH0pO1xuICAgICAgY29uc3QgcmF0ZSA9IHByb2oudGFza3M/LmNvbXBsZXRpb25SYXRlIHx8IDA7XG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1wcm9ncmVzcycsIGF0dHI6IHsgc3R5bGU6ICctLXByb2dyZXNzOicgKyByYXRlICsgJyUnIH0gfSk7XG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IChwcm9qLnRhc2tzPy5kb25lIHx8IDApICsgJy8nICsgKHByb2oudGFza3M/LnRvdGFsIHx8IDApLCBjbHM6ICdrb3MtZGItcHJvZ3Jlc3MtbGFiZWwnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyVHdvQ29sdW1ucyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBjb2xzID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jb2xzJyB9KTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1ZhdWx0U3RhdHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gY29scy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY29sJyB9KTtcbiAgICAgIGxlZnQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0NBICcgKyB0aGlzLl90KCdzdGF0cy50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgICBjb25zdCBtZXRyaWNzID0gW1xuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy50b3RhbE5vdGVzJyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwKSB9LFxuICAgICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy5hY3RpdmVQcm9qZWN0cycpLCB2YWx1ZTogU3RyaW5nKChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGgpIH0sXG4gICAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvZGF5TmV3JyksIHZhbHVlOiBTdHJpbmcoZGF0YS5zdGF0cz8udG9kYXlOZXcgfHwgMCkgfSxcbiAgICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMucGVuZGluZ1RyaWFnZScpLCB2YWx1ZTogU3RyaW5nKChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aCkgfSxcbiAgICAgIF07XG4gICAgICBjb25zdCBncmlkID0gbGVmdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItbWV0cmljcycgfSk7XG4gICAgICBtZXRyaWNzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW1ldHJpYycgfSk7XG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLW1ldHJpYy12YWwnIH0pO1xuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IG0ubGFiZWwsIGNsczogJ2tvcy1kYi1tZXRyaWMtbGFiZWwnIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YS5zdGF0cz8uc3RhdHMpIHtcbiAgICAgICAgY29uc3QgcyA9IGRhdGEuc3RhdHMuc3RhdHM7XG4gICAgICAgIGNvbnN0IHN1YlN0YXRzID0gW1xuICAgICAgICAgIHsgbGFiZWw6ICdQcm9qZWN0cycsIHZhbHVlOiBTdHJpbmcocy5wcm9qZWN0cyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdBcmVhcycsIHZhbHVlOiBTdHJpbmcocy5hcmVhcyB8fCAwKSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdSZXNvdXJjZXMnLCB2YWx1ZTogU3RyaW5nKHMucmVzb3VyY2VzIHx8IDApIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1BlcmlvZGljJywgdmFsdWU6IFN0cmluZyhzLnBlcmlvZGljIHx8IDApIH0sXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHN1YkdyaWQgPSBsZWZ0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1zdWItbWV0cmljcycgfSk7XG4gICAgICAgIHN1YlN0YXRzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3ViR3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYycgfSk7XG4gICAgICAgICAgaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogbS52YWx1ZSwgY2xzOiAna29zLWRiLXN1Yi1tZXRyaWMtdmFsJyB9KTtcbiAgICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnICcgKyBtLmxhYmVsLCBjbHM6ICdrb3MtZGItc3ViLW1ldHJpYy1sYWJlbCcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncz8uc2hvd1JlY2VudEFjdGl2aXR5ICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgcmlnaHQgPSBjb2xzLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1jb2wnIH0pO1xuICAgICAgcmlnaHQuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVERDA0ICcgKyB0aGlzLl90KCdyZWNlbnQudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgICAgY29uc3QgcmVjZW50ID0gZGF0YS5yZWNlbnQgfHwgW107XG4gICAgICBjb25zdCBtYXhJdGVtcyA9IHRoaXMuc2V0dGluZ3M/Lm1heFJlY2VudEl0ZW1zIHx8IDg7XG4gICAgICBjb25zdCBsaXN0ID0gcmlnaHQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXJlY2VudC1saXN0JyB9KTtcbiAgICAgIGlmIChyZWNlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogdGhpcy5fdCgncmVjZW50LmVtcHR5JyksIGNsczogJ2tvcy1kYi1lbXB0eScgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNlbnQuc2xpY2UoMCwgbWF4SXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1yZWNlbnQtaXRlbScgfSk7XG4gICAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBtb21lbnQoaXRlbS5tdGltZSkuZm9ybWF0KCdNTS1ERCBISDptbScpLCBjbHM6ICdrb3MtZGItcmVjZW50LXRpbWUnIH0pO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSByb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6ICcgICcgKyBpdGVtLnRpdGxlLCBjbHM6ICdrb3MtZGItcmVjZW50LWxpbmsnIH0pO1xuICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJOYXYoY29udGFpbmVyKSB7XG4gICAgY29uc3QgbmF2ID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1uYXYnIH0pO1xuICAgIG5hdi5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnXFx1RDgzQ1xcdURGRTAgJyArIHRoaXMuX3QoJ25hdi50aXRsZScpLCBjbHM6ICdrb3MtZGItc2VjdGlvbi10aXRsZScgfSk7XG4gICAgY29uc3QgbGlua3MgPSBuYXYuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLW5hdi1saW5rcycgfSk7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzQ1xcdURGRTAgXFx1NzUxRlxcdTZEM0InLCBwYXRoOiAnMiBBcmVhcy9cXHU3NTFGXFx1NkQzQi9cXHU3NTFGXFx1NkQzQicgfSxcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENENiBcXHU1QjY2XFx1NEU2MCcsIHBhdGg6ICcyIEFyZWFzL1xcdTVCNjZcXHU0RTYwL1xcdTVCNjZcXHU0RTYwJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0JDIFxcdTVERTVcXHU0RjVDJywgcGF0aDogJzIgQXJlYXMvXFx1NURFNVxcdTRGNUMvXFx1NURFNVxcdTRGNUMnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRDYgXFx1NjAzQlxcdTdEMjJcXHU1RjE1JywgcGF0aDogJ19tZXRhL1xcdUQ4M0RcXHVERDE3IFxcdTc3RTVcXHU4QkM2XFx1NTE3M1xcdTgwNTQvSW5kZXgvX2luZGV4LXpoLWNuJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEREM0XFx1RkUwRiBcXHU1RjUyXFx1Njg2MycsIHBhdGg6ICc0IEFyY2hpdmVzJyB9LFxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0U1IEluYm94JywgcGF0aDogJzAgSW5ib3gnIH0sXG4gICAgICB7IGxhYmVsOiAnXFx1MjY5OVxcdUZFMEYgSG90IENhY2hlJywgcGF0aDogJ19tZXRhL2hvdCcgfSxcbiAgICBdO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGEgPSBsaW5rcy5jcmVhdGVFbCgnYScsIHsgdGV4dDogaXRlbS5sYWJlbCwgY2xzOiAna29zLWRiLW5hdi1saW5rJyB9KTtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCAnJywgdHJ1ZSk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVySW5ib3hGaWxlcyhjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBmaWxlcyA9IGRhdGEuaW5ib3hGaWxlcyB8fCBbXTtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgbWF4SXRlbXMgPSB0aGlzLnNldHRpbmdzPy5tYXhJbmJveEl0ZW1zIHx8IDY7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbiBrb3MtZGItaW5ib3gnIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0U1ICcgKyB0aGlzLl90KCdpbmJveC50aXRsZScsIHsgY291bnQ6IGZpbGVzLmxlbmd0aCB9KSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1pbmJveC1saXN0JyB9KTtcbiAgICBmaWxlcy5zbGljZSgwLCBtYXhJdGVtcykuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItaW5ib3gtaXRlbScgfSk7XG4gICAgICBjb25zdCBuYW1lID0gcm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiBmaWxlLmJhc2VuYW1lIHx8IGZpbGUucGF0aCwgY2xzOiAna29zLWRiLWluYm94LWxpbmsnIH0pO1xuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChmaWxlLnBhdGgsICcnLCB0cnVlKTsgfSk7XG4gICAgICBpZiAoZmlsZS5zdGF0Py5tdGltZSkge1xuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IG1vbWVudChmaWxlLnN0YXQubXRpbWUpLmZvcm1hdCgnTU0tREQgSEg6bW0nKSwgY2xzOiAna29zLWRiLWluYm94LXRpbWUnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiBtYXhJdGVtcykge1xuICAgICAgY29uc3QgbW9yZSA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWluYm94LW1vcmUnIH0pO1xuICAgICAgbW9yZS5jcmVhdGVFbCgnYScsIHsgdGV4dDogdGhpcy5fdCgnaW5ib3gubW9yZScsIHsgY291bnQ6IGZpbGVzLmxlbmd0aCAtIG1heEl0ZW1zIH0pLCBjbHM6ICdrb3MtZGItaW5ib3gtbGluaycgfSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KCcwIEluYm94JywgJycsIHRydWUpOyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJFbmdpbmVTdGF0ZShjb250YWluZXIsIGRhdGEpIHtcbiAgICBjb25zdCBlbmdpbmVzID0gZGF0YS5lbmdpbmVzIHx8IHt9O1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdTI2OTlcXHVGRTBGICcgKyB0aGlzLl90KCdlbmdpbmUudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGdyaWQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1lbmdpbmUtZ3JpZCcgfSk7XG4gICAgY29uc3QgcHJpbWFyeUVuZ2luZXMgPSBbJ3RyaWFnZScsICdjb21waWxlJywgJ2xpbmsnLCAnZGFpbHknLCAncHJvamVjdCcsICdhcmNoaXZlJ107XG4gICAgY29uc3QgaGFzRGF0YSA9IHByaW1hcnlFbmdpbmVzLnNvbWUoKGUpID0+IGVuZ2luZXNbZV0/Lmxhc3RSdW4gfHwgZW5naW5lc1tlXT8uc3VtbWFyeSk7XG4gICAgaWYgKCFoYXNEYXRhKSB7XG4gICAgICBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IHRoaXMuX3QoJ2VuZ2luZS5lbXB0eScpLCBjbHM6ICdrb3MtZGItZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcmltYXJ5RW5naW5lcy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVuZyA9IGVuZ2luZXNba2V5XSB8fCB7fTtcbiAgICAgIGNvbnN0IGNoaXAgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2tvcy1kYi1lbmdpbmUtY2hpcCdcbiAgICAgICAgICArIChlbmcuc3RhdHVzID09PSAnZG9uZScgPyAnIGtvcy1kYi1lbmdpbmUtZG9uZScgOiAnJylcbiAgICAgICAgICArIChlbmcubGFzdFJ1biA/ICcnIDogJyBrb3MtZGItZW5naW5lLWlkbGUnKSxcbiAgICAgIH0pO1xuICAgICAgY2hpcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDoga2V5LCBjbHM6ICdrb3MtZGItZW5naW5lLW5hbWUnIH0pO1xuICAgICAgaWYgKGVuZy5sYXN0UnVuKSBjaGlwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnICcgKyBlbmcubGFzdFJ1bi5zbGljZSg1KSwgY2xzOiAna29zLWRiLWVuZ2luZS1kYXRlJyB9KTtcbiAgICAgIGlmIChlbmcuc3VtbWFyeSkgY2hpcC5zZXRBdHRyKCd0aXRsZScsIGVuZy5zdW1tYXJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcldlZWtseUNoYXJ0KGNvbnRhaW5lciwgZGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLXNlY3Rpb24nIH0pO1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M4ICcgKyB0aGlzLl90KCd3ZWVrbHkudGl0bGUnKSwgY2xzOiAna29zLWRiLXNlY3Rpb24tdGl0bGUnIH0pO1xuICAgIGNvbnN0IGNoYXJ0ID0gc2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItY2hhcnQnIH0pO1xuICAgIGNvbnN0IGNlbGxzID0gZGF0YS53ZWVrbHkgfHwgW107XG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCgxLCAuLi5jZWxscy5tYXAoKGMpID0+IGMuY291bnQpKTtcbiAgICBpZiAoY2VsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjaGFydC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCd3ZWVrbHkuZW1wdHknKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY29sID0gY2hhcnQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXJ0LWNvbCcgfSk7XG4gICAgICBpZiAoY2VsbC5pc1RvZGF5KSBjb2wuYWRkQ2xhc3MoJ2tvcy1kYi1jaGFydC10b2RheScpO1xuICAgICAgY29uc3QgYmFySGVpZ2h0ID0gTWF0aC5tYXgoNCwgKGNlbGwuY291bnQgLyBtYXhDb3VudCkgKiA2MCk7XG4gICAgICBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXJ0LWJhcicsIGF0dHI6IHsgc3R5bGU6ICdoZWlnaHQ6JyArIGJhckhlaWdodCArICdweCcgfSB9KVxuICAgICAgICAgLnNldEF0dHIoJ3RpdGxlJywgdGhpcy5fdCgnd2Vla2x5LmJhclRvb2x0aXAnLCB7IGRhdGU6IGNlbGwuZGF0ZSwgY291bnQ6IGNlbGwuY291bnQgfSkpO1xuICAgICAgY29sLmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6IFN0cmluZyhjZWxsLmNvdW50KSwgY2xzOiAna29zLWRiLWNoYXJ0LXZhbCcgfSk7XG4gICAgICBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogY2VsbC53ZWVrZGF5LCBjbHM6ICdrb3MtZGItY2hhcnQtZGF5JyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMCBBSSBDaGF0IEVudHJ5IEJ1dHRvbiAoYWx3YXlzIGF0IGJvdHRvbSBvZiBob21lKSBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXJDaGF0RW50cnlCdG4oY29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItc2VjdGlvbicgfSk7XG4gICAgY29uc3QgYnRuID0gc2VjdGlvbi5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktZW50cnktYnRuJyB9KTtcbiAgICBidG4uaW5uZXJIVE1MID0gJ1xcdUQ4M0VcXHVERDE2ICcgKyB0aGlzLl90KCdhaS50aXRsZScpICsgJyBcXHUyMTkyJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaFBhbmVsKCdjaGF0JywgbnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgQ2hhdCAoRnVsbC1wYWdlIEFJIENoYXQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHJlbmRlckNoYXRWaWV3KGNvbnRhaW5lciwgZGF0YSkge1xuICAgIC8vIEJhY2sgYnV0dG9uICsgdGl0bGVcbiAgICBjb25zdCB0b3BCYXIgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWNoYXQtdG9wYmFyJyB9KTtcbiAgICBjb25zdCBiYWNrQnRuID0gdG9wQmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1jaGF0LWJhY2stYnRuJyB9KTtcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICdcXHUyMTkwICcgKyB0aGlzLl90KCdhcHAubmFtZScpO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBDb2xsZWN0IGZyZXNoIGRhdGEgd2hlbiBnb2luZyBiYWNrIHRvIGhvbWVcbiAgICAgIHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApLnRoZW4oKGZyZXNoRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaFBhbmVsKCdob21lJywgZnJlc2hEYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRvcEJhci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1xcdUQ4M0VcXHVERDE2ICcgKyB0aGlzLl90KCdhaS50aXRsZScpLCBjbHM6ICdrb3MtZGItY2hhdC10b3BiYXItdGl0bGUnIH0pO1xuXG4gICAgLy8gQ2hhdCBVSSAoZnVsbCB3aWR0aC9oZWlnaHQgd2l0aGluIHRoZSBjYXJkKVxuICAgIGNvbnN0IGNoYXRTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haSBrb3MtZGItYWktZnVsbCcgfSk7XG5cbiAgICAvLyBNZXNzYWdlIGNvbnRhaW5lclxuICAgIGNvbnN0IG1zZ0NvbnRhaW5lciA9IGNoYXRTZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2dzJyB9KTtcblxuICAgIC8vIElucHV0IHJvd1xuICAgIGNvbnN0IGlucHV0Um93ID0gY2hhdFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLWlucHV0LXJvdycgfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICBjbHM6ICdrb3MtZGItYWktaW5wdXQnLFxuICAgICAgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdhaS5wbGFjZWhvbGRlcicpIH0sXG4gICAgfSk7XG4gICAgY29uc3Qgc2VuZEJ0biA9IGlucHV0Um93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1haS1zZW5kJywgdGV4dDogdGhpcy5fdCgnYWkuc2VuZEJ0bicpIH0pO1xuXG4gICAgLy8gQ2hhdCBlbmdpbmVcbiAgICB0aGlzLl9pbml0QWlDaGF0KCk7XG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkb1NlbmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuO1xuICAgICAgdGhpcy5fc2VuZENoYXRNZXNzYWdlKHZhbCwgbXNnQ29udGFpbmVyLCBpbnB1dCk7XG4gICAgfTtcbiAgICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9TZW5kKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBkb1NlbmQoKTsgfSk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgU2hhcmVkIEFJIENoYXQgTG9naWMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2luaXRBaUNoYXQoKSB7XG4gICAgaWYgKHRoaXMuYWlDaGF0ICYmIHRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmFpQ2hhdCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmVzb2x2ZUZsb3dub3RlUHJvdmlkZXIodGhpcy5hcHAudmF1bHQuYWRhcHRlcikudGhlbigoZmxvd25vdGVDb25maWcpID0+IHtcbiAgICAgIGlmIChmbG93bm90ZUNvbmZpZykge1xuICAgICAgICBzZWxmLmFpQ2hhdCA9IG5ldyBBSUNoYXQoe1xuICAgICAgICAgIGxvY2FsZTogc2VsZi5zZXR0aW5ncz8ubG9jYWxlIHx8ICd6aC1jbicsXG4gICAgICAgICAgYmFzZVVybDogZmxvd25vdGVDb25maWcuYmFzZVVybCxcbiAgICAgICAgICBhcGlLZXk6IGZsb3dub3RlQ29uZmlnLmFwaUtleSxcbiAgICAgICAgICBtb2RlbDogZmxvd25vdGVDb25maWcubW9kZWwsXG4gICAgICAgICAgc3lzdGVtUHJvbXB0OiBzZWxmLnNldHRpbmdzPy5haVN5c3RlbVByb21wdCB8fCAnJyxcbiAgICAgICAgICBwcm92aWRlckxhYmVsOiBmbG93bm90ZUNvbmZpZy5sYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuX3JlZnJlc2hDaGF0TXNncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBiYXNlVXJsID0gKHNlbGYuc2V0dGluZ3M/LmFpRW5kcG9pbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGFwaUtleSA9IChzZWxmLnNldHRpbmdzPy5haUFwaUtleSB8fCAnJykudHJpbSgpO1xuICAgICAgY29uc3QgbW9kZWwgPSAoc2VsZi5zZXR0aW5ncz8uYWlNb2RlbCB8fCAnJykudHJpbSgpO1xuICAgICAgaWYgKGJhc2VVcmwgJiYgYXBpS2V5ICYmIG1vZGVsKSB7XG4gICAgICAgIHNlbGYuYWlDaGF0ID0gbmV3IEFJQ2hhdCh7XG4gICAgICAgICAgbG9jYWxlOiBzZWxmLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJyxcbiAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgIGFwaUtleSxcbiAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6IHNlbGYuc2V0dGluZ3M/LmFpU3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgICAgIHByb3ZpZGVyTGFiZWw6ICdNYW51YWwnLFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5fcmVmcmVzaENoYXRNc2dzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVmcmVzaENoYXRNc2dzKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpLCAua29zLWRiLWFpLWZ1bGwnKTtcbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgY29uc3QgbXNnQ29udGFpbmVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpLW1zZ3MnKTtcbiAgICAgIGlmIChtc2dDb250YWluZXIpIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJDaGF0TWVzc2FnZXMoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29uc3QgbXNncyA9IHRoaXMuYWlDaGF0ID8gdGhpcy5haUNoYXQuZ2V0SGlzdG9yeSgpIDogW107XG5cbiAgICBpZiAoIXRoaXMuYWlDaGF0IHx8ICF0aGlzLmFpQ2hhdC5pc0NvbmZpZ3VyZWQpIHtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhaS5uZWVkQ29uZmlnJyksIGNsczogJ2tvcy1kYi1haS1uZWVkLWNvbmZpZycgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbXNncy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdrb3MtZGItYWktbXNnIGtvcy1kYi1haS1tc2ctJyArIG1zZy5yb2xlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB0ZXh0RWwgPSBidWJibGUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyB9KTtcbiAgICAgIHRleHRFbC50ZXh0Q29udGVudCA9IG1zZy5jb250ZW50O1xuXG4gICAgICBpZiAobXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAgIGNvbnN0IGNvcHlCdG4gPSBidWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLWNvcHktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkuY29weScpIH0pO1xuICAgICAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChtc2cuY29udGVudCk7XG4gICAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29weUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX3QoJ2FpLmNvcHknKTsgfSwgMjAwMCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpIHtcbiAgICBpZiAoIXRoaXMuYWlDaGF0IHx8ICF0aGlzLmFpQ2hhdC5pc0NvbmZpZ3VyZWQpIHJldHVybjtcblxuICAgIGlucHV0RWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlucHV0RWwudmFsdWUgPSAnJztcblxuICAgIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGhpbmtpbmdFbCA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnIGtvcy1kYi1haS1tc2ctYXNzaXN0YW50IGtvcy1kYi1haS10aGlua2luZycgfSk7XG4gICAgdGhpbmtpbmdFbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5fdCgnYWkudGhpbmtpbmcnKSwgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyB9KTtcblxuICAgIGxldCBhc3Npc3RhbnRUZXh0ID0gJyc7XG4gICAgbGV0IGFzc2lzdGFudEJ1YmJsZSA9IG51bGw7XG5cbiAgICB0aGlzLmFpQ2hhdC5zZW5kTWVzc2FnZSh0ZXh0LCB7XG4gICAgICBvblRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgYXNzaXN0YW50VGV4dCArPSB0b2tlbjtcbiAgICAgICAgaWYgKCFhc3Npc3RhbnRCdWJibGUpIHtcbiAgICAgICAgICB0aGlua2luZ0VsLnJlbW92ZSgpO1xuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZSA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnIGtvcy1kYi1haS1tc2ctYXNzaXN0YW50JyB9KTtcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICBhc3Npc3RhbnRCdWJibGUucXVlcnlTZWxlY3RvcignLmtvcy1kYi1haS1tc2ctdGV4dCcpLnRleHRDb250ZW50ID0gYXNzaXN0YW50VGV4dDtcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICB9LFxuICAgICAgb25Eb25lOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlua2luZ0VsLmlzQ29ubmVjdGVkKSB0aGlua2luZ0VsLnJlbW92ZSgpO1xuICAgICAgICBpZiAoIWFzc2lzdGFudEJ1YmJsZSAmJiBhc3Npc3RhbnRUZXh0KSB7XG4gICAgICAgICAgYXNzaXN0YW50QnViYmxlID0gbXNnQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1kYi1haS1tc2cga29zLWRiLWFpLW1zZy1hc3Npc3RhbnQnIH0pO1xuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnLCB0ZXh0OiBhc3Npc3RhbnRUZXh0IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3Npc3RhbnRCdWJibGUgJiYgYXNzaXN0YW50VGV4dCkge1xuICAgICAgICAgIGNvbnN0IGNvcHlCdG4gPSBhc3Npc3RhbnRCdWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWRiLWFpLWNvcHktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkuY29weScpIH0pO1xuICAgICAgICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhc3Npc3RhbnRUZXh0KTtcbiAgICAgICAgICAgICAgY29weUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX3QoJ2FpLmNvcGllZCcpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29weUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX3QoJ2FpLmNvcHknKTsgfSwgMjAwMCk7XG4gICAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICAgIG1zZ0NvbnRhaW5lci5zY3JvbGxUb3AgPSBtc2dDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgaWYgKHRoaW5raW5nRWwuaXNDb25uZWN0ZWQpIHRoaW5raW5nRWwucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGVyckJ1YmJsZSA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnIGtvcy1kYi1haS1tc2ctZXJyb3InIH0pO1xuICAgICAgICBlcnJCdWJibGUuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLl90KCdhaS5lcnJvcicsIHsgbXNnOiBlcnIubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicgfSksXG4gICAgICAgICAgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJldHJ5QnRuID0gZXJyQnViYmxlLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1haS1yZXRyeS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5yZXRyeScpIH0pO1xuICAgICAgICByZXRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zZW5kQ2hhdE1lc3NhZ2UodGV4dCwgbXNnQ29udGFpbmVyLCBpbnB1dEVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBDb2NrcGl0VmlldywgVklFV19UWVBFX0NPQ0tQSVQgfTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgc2V0dGluZ3MgdGFiXG5cbmNvbnN0IHsgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcbmNvbnN0IHsgdCwgTE9DQUxFX0tFWVMgfSA9IHJlcXVpcmUoJy4vbG9jYWxlJyk7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1MgPSB7XG4gIC8vIEdlbmVyYWxcbiAgbG9jYWxlOiAnemgtY24nLFxuICBhdXRvT3BlbjogdHJ1ZSxcblxuICAvLyBEYXNoYm9hcmQgc2VjdGlvbiB2aXNpYmlsaXR5XG4gIHNob3dUb2RheVRhc2tzOiB0cnVlLFxuICBzaG93SW5ib3hGaWxlczogdHJ1ZSxcbiAgc2hvd0VuZ2luZVN0YXRlOiB0cnVlLFxuICBzaG93V2Vla2x5Q2hhcnQ6IHRydWUsXG4gIHNob3dBaUNoYXQ6IHRydWUsXG4gIHNob3dQcm9qZWN0Q2FyZHM6IHRydWUsXG4gIHNob3dSZWNlbnRBY3Rpdml0eTogdHJ1ZSxcbiAgc2hvd1ZhdWx0U3RhdHM6IHRydWUsXG4gIHNob3dOYXY6IHRydWUsXG5cbiAgLy8gRGF0YSBsaW1pdHNcbiAgbWF4UmVjZW50SXRlbXM6IDgsXG4gIG1heFRhc2tJdGVtczogMTIsXG4gIG1heEluYm94SXRlbXM6IDYsXG5cbiAgLy8gQUkgQ2hhdCBwcm92aWRlclxuICBhaUVuZHBvaW50OiAnJyxcbiAgYWlBcGlLZXk6ICcnLFxuICBhaU1vZGVsOiAnZ3B0LTRvJyxcbiAgYWlTeXN0ZW1Qcm9tcHQ6ICcnLFxufTtcblxuY2xhc3MgQ29ja3BpdFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgY29uc3RydWN0b3IoYXBwLCBwbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvKiogSGVscGVyOiB0cmFuc2xhdGUgdXNpbmcgY3VycmVudCBsb2NhbGUgKi9cbiAgX3Qoa2V5LCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdChrZXksIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSwgcGFyYW1zKTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgdGhpcy5yZW5kZXJHZW5lcmFsU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBaVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyRGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEYXRhTGltaXRzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBYm91dFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICB9XG5cbiAgcmVuZGVyR2VuZXJhbFNlY3Rpb24oY29udGFpbmVyRWwpIHtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmdlbmVyYWwnKSB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2UnKSlcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3NldHRpbmdzLmxhbmd1YWdlRGVzYycpKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oJ3poLWNuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ1poQ04nKSlcbiAgICAgICAgICAuYWRkT3B0aW9uKCdlbicsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdFbicpKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ3poLXR3JywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ1poVFcnKSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW4nKSlcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3NldHRpbmdzLmF1dG9PcGVuRGVzYycpKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b09wZW4pXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvT3BlbiA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHJlbmRlckFpU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnYWkucHJvdmlkZXJTZWN0aW9uJykgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiB0aGlzLl90KCdhaS5wcm92aWRlclNlY3Rpb25EZXNjJyksXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nLFxuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdhaS5hcGlFbmRwb2ludCcpKVxuICAgICAgLnNldERlc2MoJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5haUVuZHBvaW50IHx8ICcnKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlFbmRwb2ludCA9IHYudHJpbSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ2FpLmFwaUtleScpKVxuICAgICAgLnNldERlc2MoJ3NrLS4uLicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdzay0uLi4nKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5haUFwaUtleSB8fCAnJylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFpQXBpS2V5ID0gdi50cmltKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ2FpLm1vZGVsJykpXG4gICAgICAuc2V0RGVzYygnZ3B0LTRvLCBjbGF1ZGUtMy41LXNvbm5ldCwgZGVlcHNlZWstY2hhdCwgLi4uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdncHQtNG8nKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5haU1vZGVsIHx8ICdncHQtNG8nKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlNb2RlbCA9IHYudHJpbSgpIHx8ICdncHQtNG8nO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ2FpLnN5c3RlbVByb21wdCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInKSlcbiAgICAgIC5hZGRUZXh0QXJlYSgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKHRoaXMuX3QoJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJykpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFpU3lzdGVtUHJvbXB0IHx8ICcnKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWlTeXN0ZW1Qcm9tcHQgPSB2LnRyaW0oKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0ZXh0LmlucHV0RWwucm93cyA9IDQ7XG4gICAgICAgIHRleHQuaW5wdXRFbC5jb2xzID0gNjA7XG4gICAgICAgIHRleHQuaW5wdXRFbC5hZGRDbGFzcygna29zLWNvY2twaXQtdGV4dGFyZWEnKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCkge1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZGFzaGJvYXJkJykgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJyksXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAgICB7IGtleTogJ3Nob3dUb2RheVRhc2tzJywgbmFtZTogJ1RvZGF5XFwncyBUYXNrcycsIGRlc2M6ICdEYWlseSBub3RlIHRhc2sgbGlzdCBhbmQgcHJvZ3Jlc3MuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93UHJvamVjdENhcmRzJywgbmFtZTogJ0FjdGl2ZSBQcm9qZWN0cycsIGRlc2M6ICdQcm9qZWN0IGNhcmRzIHdpdGggcHJpb3JpdHkgYW5kIHByb2dyZXNzLicgfSxcbiAgICAgIHsga2V5OiAnc2hvd1ZhdWx0U3RhdHMnLCBuYW1lOiAnVmF1bHQgU3RhdGlzdGljcycsIGRlc2M6ICdUb3RhbCBub3RlcywgYWN0aXZlIHByb2plY3RzLCBpbmJveCBjb3VudC4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dSZWNlbnRBY3Rpdml0eScsIG5hbWU6ICdSZWNlbnQgQWN0aXZpdHknLCBkZXNjOiAnUmVjZW50bHkgbW9kaWZpZWQgZmlsZXMuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93TmF2JywgbmFtZTogJ05hdmlnYXRpb24nLCBkZXNjOiAnUXVpY2sgbGlua3MgdG8gYXJlYXMsIGluYm94LCBob3QgY2FjaGUuJyB9LFxuICAgICAgeyBrZXk6ICdzaG93SW5ib3hGaWxlcycsIG5hbWU6ICdJbmJveCBGaWxlcycsIGRlc2M6ICdMaXN0IG9mIHBlbmRpbmcgZmlsZXMgaW4gMCBJbmJveC8uJyB9LFxuICAgICAgeyBrZXk6ICdzaG93RW5naW5lU3RhdGUnLCBuYW1lOiAnRW5naW5lIFN0YXRlJywgZGVzYzogJ1RyaWFnZS9Db21waWxlL0xpbmsgZW5naW5lIHN0YXR1cyBjaGlwcy4nIH0sXG4gICAgICB7IGtleTogJ3Nob3dXZWVrbHlDaGFydCcsIG5hbWU6ICdXZWVrbHkgQ2hhcnQnLCBkZXNjOiAnQmFyIGNoYXJ0IG9mIHdlZWtseSBkYWlseS1ub3RlIGNhcHR1cmVzLicgfSxcblxuICAgIF07XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGtleSwgbmFtZSwgZGVzYyB9KSA9PiB7XG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLnNldE5hbWUobmFtZSlcbiAgICAgICAgLnNldERlc2MoZGVzYylcbiAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzW2tleV0pXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGFMaW1pdHNTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXRhTGltaXRzJykgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFJlY2VudCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4UmVjZW50RGVzYycpKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzgnKVxuICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4UmVjZW50SXRlbXMpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMywgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA4KSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhSZWNlbnRJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrcycpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4VGFza3NEZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignMTInKVxuICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4VGFza0l0ZW1zKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgMTIpKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveCcpKVxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4SW5ib3hEZXNjJykpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignNicpXG4gICAgICAgICAgLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgNikpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4SW5ib3hJdGVtcyA9IHZhbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyQWJvdXRTZWN0aW9uKGNvbnRhaW5lckVsKSB7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5hYm91dCcpIH0pO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBkZXNjLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy52ZXJzaW9uRGVzYycpIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy52ZXJzaW9uJykpXG4gICAgICAuc2V0RGVzYyhkZXNjKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MgfTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcGx1Z2luIGVudHJ5IHBvaW50XG5cbmNvbnN0IHsgUGx1Z2luIH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyBDb2NrcGl0VmlldywgVklFV19UWVBFX0NPQ0tQSVQgfSA9IHJlcXVpcmUoJy4vY29ja3BpdC12aWV3Jyk7XG5jb25zdCB7IENvY2twaXRTZXR0aW5nVGFiLCBERUZBVUxUX1NFVFRJTkdTIH0gPSByZXF1aXJlKCcuL3NldHRpbmdzLXRhYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEtvc0NvY2twaXRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAvLyBMb2FkIHNhdmVkIHNldHRpbmdzXG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjdXN0b20gdmlldywgcGFzc2luZyB0aGUgcGx1Z2luIHJlZmVyZW5jZVxuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRV9DT0NLUElULCAobGVhZikgPT4gbmV3IENvY2twaXRWaWV3KGxlYWYsIHRoaXMpKTtcblxuICAgIC8vIEFkZCByaWJib24gaWNvblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignZ2F1Z2UnLCAnT3BlbiBLT1MgQ29ja3BpdCcsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbkNvY2twaXQoKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBjb21tYW5kIHRvIG9wZW4gY29ja3BpdFxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ29wZW4ta29zLWNvY2twaXQnLFxuICAgICAgbmFtZTogJ09wZW4gS09TIENvY2twaXQnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMub3BlbkNvY2twaXQoKSxcbiAgICB9KTtcblxuICAgIC8vIEFkZCBjb21tYW5kIHRvIHJlZnJlc2ggY29ja3BpdFxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3JlZnJlc2gta29zLWNvY2twaXQnLFxuICAgICAgbmFtZTogJ1JlZnJlc2ggS09TIENvY2twaXQnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVmcmVzaENvY2twaXQoKSxcbiAgICB9KTtcblxuICAgIC8vIFJlZ2lzdGVyIHNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ29ja3BpdFNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIE9wZW4gdGhlIGNvY2twaXQgYXV0b21hdGljYWxseSBvbiBsYXlvdXQgcmVhZHlcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnNldHRpbmdzLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbkNvY2twaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Db2NrcGl0KCkge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcblxuICAgIGNvbnN0IGV4aXN0aW5nID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGV4aXN0aW5nWzBdKTtcbiAgICAgIGNvbnN0IHZpZXcgPSBleGlzdGluZ1swXS52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcucmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhd2FpdCB2aWV3LnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWFmID0gd29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XG4gICAgYXdhaXQgbGVhZi5zZXRWaWV3U3RhdGUoe1xuICAgICAgdHlwZTogVklFV19UWVBFX0NPQ0tQSVQsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgfSk7XG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG4gIH1cblxuICBhc3luYyByZWZyZXNoQ29ja3BpdCgpIHtcbiAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcucmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhd2FpdCB2aWV3LnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIHNhdmVkKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgIC8vIE5vdGlmeSBvcGVuIHZpZXdzIG9mIHNldHRpbmdzIGNoYW5nZVxuICAgIHRoaXMucmVmcmVzaENvY2twaXQoKTtcbiAgfVxuXG4gIG9udW5sb2FkKCkge1xuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpLmZvckVhY2goKGxlYWYpID0+IHtcbiAgICAgIGxlYWYuZGV0YWNoKCk7XG4gICAgfSk7XG4gIH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQTtBQUFBLGtCQUFBQSxVQUFBQyxTQUFBO0FBR0EsUUFBTSxVQUFVO0FBQUEsTUFDZCxTQUFTO0FBQUE7QUFBQSxRQUVQLFlBQVk7QUFBQSxRQUNaLGVBQWU7QUFBQSxRQUNmLGFBQWE7QUFBQTtBQUFBLFFBR2IscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUE7QUFBQSxRQUd0QixXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUE7QUFBQSxRQUdYLG9CQUFvQjtBQUFBLFFBQ3BCLGtCQUFrQjtBQUFBLFFBQ2xCLG9CQUFvQjtBQUFBLFFBQ3BCLHFCQUFxQjtBQUFBLFFBQ3JCLGlCQUFpQjtBQUFBLFFBQ2pCLG1CQUFtQjtBQUFBO0FBQUEsUUFHbkIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsYUFBYTtBQUFBLFFBQ2IscUJBQXFCO0FBQUE7QUFBQSxRQUdyQixpQkFBaUI7QUFBQSxRQUNqQixpQkFBaUI7QUFBQTtBQUFBLFFBR2pCLGVBQWU7QUFBQSxRQUNmLG9CQUFvQjtBQUFBLFFBQ3BCLHdCQUF3QjtBQUFBLFFBQ3hCLGtCQUFrQjtBQUFBLFFBQ2xCLHVCQUF1QjtBQUFBO0FBQUEsUUFHdkIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUE7QUFBQSxRQUdoQixhQUFhO0FBQUE7QUFBQSxRQUdiLGVBQWU7QUFBQSxRQUNmLGNBQWM7QUFBQTtBQUFBLFFBR2QsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUE7QUFBQSxRQUdoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixxQkFBcUI7QUFBQTtBQUFBLFFBR3JCLFlBQVk7QUFBQSxRQUNaLGtCQUFrQjtBQUFBLFFBQ2xCLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLGVBQWU7QUFBQSxRQUNmLGlCQUFpQjtBQUFBLFFBQ2pCLFlBQVk7QUFBQSxRQUNaLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYLGFBQWE7QUFBQTtBQUFBLFFBR2Isc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osbUJBQW1CO0FBQUEsUUFDbkIsOEJBQThCO0FBQUE7QUFBQSxRQUc5QixvQkFBb0I7QUFBQSxRQUNwQixxQkFBcUI7QUFBQSxRQUNyQix5QkFBeUI7QUFBQSxRQUN6QixxQkFBcUI7QUFBQSxRQUNyQixtQkFBbUI7QUFBQSxRQUNuQixxQkFBcUI7QUFBQSxRQUNyQixxQkFBcUI7QUFBQSxRQUNyQix5QkFBeUI7QUFBQSxRQUN6QixzQkFBc0I7QUFBQSxRQUN0QiwwQkFBMEI7QUFBQSxRQUMxQix1QkFBdUI7QUFBQSxRQUN2QixzQkFBc0I7QUFBQSxRQUN0QiwwQkFBMEI7QUFBQSxRQUMxQixxQkFBcUI7QUFBQSxRQUNyQix5QkFBeUI7QUFBQSxRQUN6QixxQkFBcUI7QUFBQSxRQUNyQix5QkFBeUI7QUFBQSxRQUN6QixrQkFBa0I7QUFBQSxRQUNsQixvQkFBb0I7QUFBQSxRQUNwQix3QkFBd0I7QUFBQSxNQUMxQjtBQUFBLE1BRUEsTUFBTTtBQUFBLFFBQ0osWUFBWTtBQUFBLFFBQ1osZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBRWIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFFdEIsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBRVgsb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFFbkIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsYUFBYTtBQUFBLFFBQ2IscUJBQXFCO0FBQUEsUUFFckIsaUJBQWlCO0FBQUEsUUFDakIsaUJBQWlCO0FBQUEsUUFFakIsZUFBZTtBQUFBLFFBQ2Ysb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFDeEIsa0JBQWtCO0FBQUEsUUFDbEIsdUJBQXVCO0FBQUEsUUFFdkIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsYUFBYTtBQUFBLFFBRWIsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLFFBRWQsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIscUJBQXFCO0FBQUEsUUFFckIsWUFBWTtBQUFBLFFBQ1osa0JBQWtCO0FBQUEsUUFDbEIsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsYUFBYTtBQUFBLFFBRWIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osbUJBQW1CO0FBQUEsUUFDbkIsOEJBQThCO0FBQUEsUUFFOUIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsbUJBQW1CO0FBQUEsUUFDbkIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEs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QzlDLGNBQU0sS0FBSyxRQUFRO0FBQUEsTUFDckI7QUFDQTtBQUFBLElBQ0Y7QUFFQSxVQUFNLE9BQU8sVUFBVSxRQUFRLElBQUk7QUFDbkMsVUFBTSxLQUFLLGFBQWE7QUFBQSxNQUN0QixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDVixDQUFDO0FBQ0QsY0FBVSxXQUFXLElBQUk7QUFBQSxFQUMzQjtBQUFBLEVBRUEsTUFBTSxpQkFBaUI7QUFDckIsVUFBTSxTQUFTLEtBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUI7QUFDbkUsZUFBVyxRQUFRLFFBQVE7QUFDekIsWUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBSSxRQUFRLE9BQU8sS0FBSyxZQUFZLFlBQVk7QUFDOUMsY0FBTSxLQUFLLFFBQVE7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFTO0FBQ2xDLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixLQUFLO0FBQUEsRUFDM0Q7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFFakMsU0FBSyxlQUFlO0FBQUEsRUFDdEI7QUFBQSxFQUVBLFdBQVc7QUFDVCxTQUFLLElBQUksVUFBVSxnQkFBZ0IsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDdEUsV0FBSyxPQUFPO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJWSUVXX1RZUEVfQ09DS1BJVCIsICJDb2NrcGl0VmlldyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJERUZBVUxUX1NFVFRJTkdTIiwgIkNvY2twaXRTZXR0aW5nVGFiIl0KfQo=
