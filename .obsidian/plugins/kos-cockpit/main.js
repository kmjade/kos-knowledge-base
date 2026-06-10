var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

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
        "ai.modelLabel": "\u6A21\u578B",
        "ai.connected": "\u5DF2\u8FDE\u63A5",
        "ai.notConfigured": "\u672A\u914D\u7F6E",
        "ai.welcomeTitle": "Ask KOS",
        "ai.suggestProjects": "\u9879\u76EE\u6982\u89C8",
        "ai.suggestProjectsDesc": "\u67E5\u770B\u6D3B\u8DC3\u9879\u76EE\u8FDB\u5EA6",
        "ai.suggestRecent": "\u8FD1\u671F\u6D3B\u52A8",
        "ai.suggestRecentDesc": "\u6700\u8FD1\u4FEE\u6539\u7684\u7B14\u8BB0",
        "ai.suggestSearch": "\u641C\u7D22\u77E5\u8BC6\u5E93",
        "ai.suggestSearchDesc": "\u67E5\u627E\u7279\u5B9A\u5185\u5BB9",
        // EN
        // TW
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
        "ai.modelLabel": "Model",
        "ai.connected": "Connected",
        "ai.notConfigured": "Not configured",
        "ai.welcomeTitle": "Ask KOS",
        "ai.suggestProjects": "Project Overview",
        "ai.suggestProjectsDesc": "View active project progress",
        "ai.suggestRecent": "Recent Activity",
        "ai.suggestRecentDesc": "Recently modified notes",
        "ai.suggestSearch": "Search Vault",
        "ai.suggestSearchDesc": "Find specific content",
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
        "ai.modelLabel": "\u6A21\u578B",
        "ai.connected": "\u5DF2\u9023\u63A5",
        "ai.notConfigured": "\u672A\u914D\u7F6E",
        "ai.welcomeTitle": "Ask KOS",
        "ai.suggestProjects": "\u5C08\u6848\u6982\u89BD",
        "ai.suggestProjectsDesc": "\u67E5\u770B\u6D3B\u8E8D\u5C08\u6848\u9032\u5EA6",
        "ai.suggestRecent": "\u8FD1\u671F\u6D3B\u52D5",
        "ai.suggestRecentDesc": "\u6700\u8FD1\u4FEE\u6539\u7684\u7B46\u8A18",
        "ai.suggestSearch": "\u641C\u5C0B\u77E5\u8B58\u5EAB",
        "ai.suggestSearchDesc": "\u67E5\u627E\u7279\u5B9A\u5167\u5BB9",
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

// src/health-service.js
var require_health_service = __commonJS({
  "src/health-service.js"(exports2, module2) {
    var { readFileText, getFileByPath } = require_utils();
    function calcHealthScore(data) {
      const inboxCount = (data.inboxFiles || []).length;
      const inboxScore = Math.max(0, 100 - inboxCount * 8);
      const dailyScore = data.today?.exists ? 100 : 40;
      const projectCount = (data.projects || []).length;
      const projectScore = Math.min(100, projectCount * 20);
      const totalNotes = data.stats?.totalNotes || 0;
      const coverageScore = Math.min(100, Math.round(totalNotes / 10));
      const recentCount = (data.recent || []).length;
      const freshnessScore = Math.min(100, recentCount * 10);
      const score = Math.round(
        inboxScore * 0.25 + dailyScore * 0.2 + projectScore * 0.2 + coverageScore * 0.15 + freshnessScore * 0.2
      );
      return Math.min(100, Math.max(0, score));
    }
    function getTrend(data) {
      const inboxCount = (data.inboxFiles || []).length;
      if (inboxCount <= 3) return "up";
      if (inboxCount <= 8) return "flat";
      return "down";
    }
    function getKeyMetrics(data) {
      const totalNotes = data.stats?.totalNotes || 0;
      const inboxCount = (data.inboxFiles || []).length;
      const projectCount = (data.projects || []).length;
      const todayNew = data.stats?.todayNew || 0;
      const weekly = data.weekly || [];
      const weekTotal = weekly.reduce((s, c) => s + c.count, 0);
      return [
        {
          label: "Total Notes",
          value: String(totalNotes),
          trend: todayNew > 0 ? "up" : "flat",
          trendLabel: "+" + todayNew + " today",
          color: "var(--kc-cyan)"
        },
        {
          label: "Inbox",
          value: String(inboxCount),
          trend: inboxCount <= 5 ? "up" : inboxCount <= 10 ? "flat" : "down",
          trendLabel: inboxCount <= 5 ? "Healthy" : inboxCount + " pending",
          color: inboxCount <= 5 ? "var(--kc-green)" : inboxCount <= 10 ? "var(--kc-amber)" : "var(--kc-red)"
        },
        {
          label: "Active Projects",
          value: String(projectCount),
          trend: projectCount >= 1 ? "up" : "flat",
          trendLabel: projectCount + " in progress",
          color: "var(--kc-amber)"
        },
        {
          label: "Weekly Captures",
          value: String(weekTotal),
          trend: weekTotal >= 5 ? "up" : weekTotal >= 2 ? "flat" : "down",
          trendLabel: Math.round(weekTotal / Math.max(1, weekly.length)) + "/day avg",
          color: "var(--kc-purple)"
        }
      ];
    }
    function getTodayCaptureCount(weekly) {
      if (!weekly || !Array.isArray(weekly)) return 0;
      const today = weekly.find((w) => w.isToday);
      return today ? today.count : 0;
    }
    function calcStreak(weekly) {
      if (!weekly || !Array.isArray(weekly)) return 0;
      let streak = 0;
      for (let i = weekly.length - 1; i >= 0; i--) {
        if (weekly[i].count > 0) streak += 1;
        else break;
      }
      return streak;
    }
    module2.exports = {
      calcHealthScore,
      getTrend,
      getKeyMetrics,
      getTodayCaptureCount,
      calcStreak
    };
  }
});

// src/pipeline-service.js
var require_pipeline_service = __commonJS({
  "src/pipeline-service.js"(exports2, module2) {
    var { readFileText, parseFrontmatter, formatDateStr } = require_utils();
    var { getInboxFiles } = require_home_service();
    async function getInboxDetail(app) {
      const files = getInboxFiles(app.vault);
      const items = [];
      for (const file of files) {
        const content = await readFileText(app.vault, file);
        const fm = parseFrontmatter(content);
        let source = "manual";
        if (fm.origin === "webclipper" || content.includes("origin: webclipper")) source = "clipping";
        const tags = Array.isArray(fm.tags) ? fm.tags : fm.tags ? [fm.tags] : [];
        const created = fm.created || file.stat?.ctime;
        let daysWaiting = 0;
        if (created) {
          const createdDate = new Date(created);
          daysWaiting = Math.floor((Date.now() - createdDate.getTime()) / (1e3 * 60 * 60 * 24));
        }
        const lines = String(content || "").split(/\r?\n/).filter((l) => {
          const t = l.trim();
          return t && !t.startsWith("---") && !t.startsWith("#") && !t.startsWith("created:") && !t.startsWith("tags:") && !t.startsWith("udc:");
        });
        const summary = lines[0]?.slice(0, 80) || "(empty)";
        items.push({
          file,
          path: file.path,
          title: file.basename || "",
          source,
          tags,
          daysWaiting,
          summary,
          created: fm.created || "",
          mtime: file.stat?.mtime || 0
        });
      }
      items.sort((a, b) => b.mtime - a.mtime);
      return items;
    }
    async function getCompileQueue(app) {
      if (!app || !app.vault) return [];
      const files = app.vault.getMarkdownFiles();
      const rawFiles = files.filter((f) => {
        const p = String(f.path || "");
        return p.includes("/raw/") && !p.includes("/wiki/") && !p.includes("/_archived/");
      });
      const items = [];
      for (const file of rawFiles.slice(0, 30)) {
        const content = await readFileText(app.vault, file);
        const lines = String(content || "").split(/\r?\n/);
        const wordCount = lines.reduce((s, l) => s + l.trim().split(/\s+/).filter(Boolean).length, 0);
        const created = file.stat?.ctime || 0;
        const daysWaiting = created ? Math.floor((Date.now() - created) / (1e3 * 60 * 60 * 24)) : 0;
        items.push({
          file,
          path: file.path,
          title: file.basename || "",
          daysWaiting,
          wordCount,
          priority: wordCount > 2e3 ? "high" : wordCount > 500 ? "medium" : "low"
        });
      }
      items.sort((a, b) => b.wordCount - a.wordCount);
      return items;
    }
    function getQuarantineStats(inboxItems) {
      const total = inboxItems.length;
      const withoutFm = inboxItems.filter((i) => !i.created).length;
      return {
        L0: { label: "Missing metadata", count: withoutFm, items: [] },
        L1: { label: "Low confidence", count: Math.round(total * 0.1), items: [] },
        L2: { label: "Possible duplicates", count: 0, items: [] },
        L3: { label: "Too short (<50w)", count: inboxItems.filter((i) => i.summary === "(empty)").length, items: [] }
      };
    }
    function getThroughputStats(weekly) {
      if (!weekly || !Array.isArray(weekly)) return { daily: [], total: 0, avg: 0 };
      const total = weekly.reduce((s, c) => s + c.count, 0);
      return {
        daily: weekly,
        total,
        avg: Math.round(total / Math.max(1, weekly.length) * 10) / 10
      };
    }
    module2.exports = {
      getInboxDetail,
      getCompileQueue,
      getQuarantineStats,
      getThroughputStats
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
    var {
      calcHealthScore,
      getTrend,
      getKeyMetrics,
      getTodayCaptureCount,
      calcStreak
    } = require_health_service();
    var { getInboxDetail, getCompileQueue, getThroughputStats } = require_pipeline_service();
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
        const names = { home: "KOS Cockpit", chat: "KOS AI Chat", life: "Life+AI", pipeline: "Pipeline", garden: "Knowledge Garden", settings: "Settings" };
        return names[this.activePanel] || "KOS Cockpit";
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
        this._applySeasonalTheme();
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
        const [inboxDetail, compileQueue] = await Promise.all([
          getInboxDetail(app).catch(() => []),
          getCompileQueue(app).catch(() => [])
        ]);
        return { today, projects, stats, recent, hot, weekly, engines, inboxFiles, inboxDetail, compileQueue };
      }
      /** Switch between panels */
      switchPanel(panel, data) {
        this.activePanel = panel;
        this.renderPanel(data || null);
      }
      // ──────────────── Seasonal Theme ────────────────
      _applySeasonalTheme() {
        var season = this.settings?.seasonalTheme || "spring";
        var root = this.contentEl;
        if (!root) return;
        ["theme-spring", "theme-summer", "theme-autumn", "theme-winter"].forEach(function(c) {
          root.removeClass(c);
        });
        root.addClass("theme-" + season);
      }
      // ──────────────── Panel Router ────────────────
      renderPanel(data) {
        const container = this.contentEl;
        container.empty();
        const main = container.createEl("div", { cls: "kos-db" });
        this._applySeasonalTheme();
        this._renderTabBar(main);
        const contentArea = main.createEl("div", { cls: "kos-tab-content active", attr: { style: "min-height:400px" } });
        if (this.activePanel === "chat") {
          this.renderChatView(contentArea, data);
        } else if (this.activePanel === "life") {
          this.renderLifeView(contentArea, data);
        } else if (this.activePanel === "pipeline") {
          this.renderPipelineView(contentArea, data);
        } else if (this.activePanel === "garden") {
          this.renderGardenView(contentArea, data);
        } else if (this.activePanel === "settings") {
          this.renderSettingsView(contentArea, data);
        } else {
          this.renderDashboard(contentArea, data);
        }
      }
      // ──────────────── Tab Bar ────────────────
      _renderTabBar(container) {
        const tabs = [
          { id: "home", icon: "\u{1F4CA}", label: "\u4EEA\u8868\u76D8" },
          { id: "chat", icon: "\u{1F916}", label: "AI Chat" },
          { id: "life", icon: "\u{1F9EC}", label: "\u751F\u6D3B" },
          { id: "pipeline", icon: "\u{1F527}", label: "\u7BA1\u9053" },
          { id: "garden", icon: "\u{1F333}", label: "\u77E5\u8BC6\u82B1\u56ED" },
          { id: "settings", icon: "\u2699\uFE0F", label: "\u8BBE\u7F6E" }
        ];
        var bar = container.createEl("div", { cls: "kos-tabbar" });
        tabs.forEach(function(t2) {
          var item = bar.createEl("button", {
            cls: "kos-tab-item" + (t2.id === this.activePanel ? " active" : "")
          });
          item.innerHTML = t2.icon + " " + t2.label;
          item.addEventListener("click", function() {
            if (t2.id === this.activePanel) return;
            this.collectData(this.app).then(function(d) {
              this.switchPanel(t2.id, d);
            }.bind(this));
          }.bind(this));
        }.bind(this));
      }
      // ──────────────── Home (Dashboard) ────────────────
      renderDashboard(container, data) {
        this._renderTopBar(container, data);
        this._renderPipelineFlow(container, data);
        this._renderKeyMetrics(container, data);
        const grid = container.createEl("div", { cls: "kos-dashboard-grid" });
        const zone1 = grid.createEl("div", { cls: "kos-zone-left", attr: { style: "display:flex;flex-direction:column;gap:14px" } });
        this._renderHealthPanel(zone1, data);
        this._renderEngineControl(zone1, data);
        this._renderLaunchPanel(zone1);
        const zone2 = grid.createEl("div", { cls: "kos-zone-center", attr: { style: "display:flex;flex-direction:column;gap:14px" } });
        this._renderTodayFocus(zone2, data);
        this._renderProjectsPanel(zone2, data);
        const zone3 = grid.createEl("div", { cls: "kos-zone-right", attr: { style: "display:flex;flex-direction:column;gap:14px" } });
        this._renderGrowthPanel(zone3, data);
        this._renderFeedPanel(zone3, data);
        this._renderHotPanel(zone3, data);
      }
      _renderTopBar(container, data) {
        const bar = container.createEl("div", { cls: "kos-topbar" });
        const brand = bar.createEl("div", { cls: "kos-topbar-brand" });
        brand.createEl("span", { cls: "kos-logo", text: "KOS" });
        brand.createEl("small", { cls: "kos-logo-sub", text: "v2" });
        const score = calcHealthScore(data);
        const badgeCls = score >= 85 ? "health-optimal" : score >= 65 ? "health-warning" : "health-critical";
        const badge = bar.createEl("div", { cls: "kos-health-badge " + badgeCls, attr: { title: "Vault Health: " + score + "%" } });
        badge.createEl("span", { cls: "dot" });
        badge.createEl("span", { cls: "health-text", text: score + "/100" });
        badge.addEventListener("click", () => {
          this._handleLaunch("init");
        });
        bar.createEl("div", { cls: "kos-topbar-spacer" });
        const searchWrap = bar.createEl("div", { cls: "kos-topbar-search" });
        searchWrap.createEl("input", { cls: "kos-topbar-search-input", attr: { type: "text", placeholder: "Search notes..." } });
        const actions = bar.createEl("div", { cls: "kos-topbar-actions" });
        const refreshBtn = actions.createEl("button", { cls: "kos-topbar-btn", text: "\u21BB", attr: { title: "Refresh" } });
        refreshBtn.addEventListener("click", () => {
          this.renderLoading();
          this.refresh();
        });
        const clock = actions.createEl("div", { cls: "kos-topbar-clock" });
        const now = moment();
        clock.createEl("span", { cls: "kos-topbar-date", text: now.format("ddd YYYY-MM-DD") });
        clock.createEl("span", { cls: "kos-topbar-time", text: now.format("HH:mm") });
      }
      // Phase 1: Pipeline Flow
      _renderPipelineFlow(container, data) {
        var inboxCount = (data.inboxFiles || []).length;
        var compileCount = (data.compileQueue || []).length;
        var stats = data.stats?.stats || {};
        var wikiCount = (stats.resources || 0) - (stats.inbox || 0);
        var panel = container.createEl("div", { cls: "kos-panel" });
        var body = panel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        var flowRow = body.createEl("div", { attr: { style: "display:flex;align-items:center;gap:0;flex-wrap:wrap;justify-content:center" } });
        var steps = [
          { label: "Inbox", count: inboxCount, color: inboxCount === 0 ? "var(--kc-green)" : inboxCount <= 5 ? "var(--kc-amber)" : "var(--kc-red)", ikey: "inbox" },
          { label: "Triage", count: "-", color: "var(--kc-text-dim)", ikey: "triage" },
          { label: "Raw", count: compileCount, color: compileCount === 0 ? "var(--kc-green)" : "var(--kc-amber)", ikey: "compile" },
          { label: "Compile", count: "-", color: "var(--kc-text-dim)", ikey: "compile-run" },
          { label: "Wiki", count: wikiCount, color: wikiCount > 0 ? "var(--kc-green)" : "var(--kc-text-dim)", ikey: "wiki" }
        ];
        steps.forEach(function(s, idx) {
          var el = flowRow.createEl("div", {
            attr: { style: "display:flex;align-items:center;gap:6px;padding:6px 10px;cursor:pointer;border-radius:6px;transition:all 0.2s" }
          });
          el.addEventListener("mouseenter", function() {
            el.style.background = "var(--kc-bg-card)";
          });
          el.addEventListener("mouseleave", function() {
            el.style.background = "transparent";
          });
          el.addEventListener("click", function() {
            if (s.ikey === "inbox") {
              this.app.workspace.openLinkText("0 Inbox", "", true);
            } else if (s.ikey === "compile") {
              new Notice("Pipeline view \u2014 coming soon");
            } else if (s.ikey === "wiki") {
              this.app.workspace.openLinkText("3 Resources/000-Knowledge", "", true);
            }
          }.bind(this));
          el.createEl("span", { text: String(s.count), attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:700;color:" + s.color } });
          el.createEl("span", { text: s.label, attr: { style: "font-size:10px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px" } });
          if (idx < steps.length - 1) {
            flowRow.createEl("span", { text: String.fromCharCode(8594), attr: { style: "color:var(--kc-text-dim);font-size:12px;margin:0 2px;opacity:0.3" } });
          }
        }.bind(this));
        body.createEl("div", { attr: { style: "text-align:center;margin-top:6px;font-size:9px;color:var(--kc-text-dim)" }, text: "Pipeline flow: click to navigate" });
      }
      // Phase 1: Key Metrics Row
      _renderKeyMetrics(container, data) {
        var metrics = getKeyMetrics(data);
        var row = container.createEl("div", { attr: { style: "display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px" } });
        metrics.forEach(function(m) {
          var card = row.createEl("div", { cls: "kos-panel", attr: { style: "padding:12px 14px;text-align:center;border-left:3px solid " + m.color } });
          card.createEl("div", { attr: { style: "font-size:24px;font-weight:700;font-family:var(--kc-mono);color:" + m.color }, text: m.value });
          card.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px" }, text: m.label });
          var trendEl = card.createEl("div", { attr: { style: "margin-top:4px;font-size:9px" } });
          var trendIcon = m.trend === "up" ? String.fromCharCode(9650) : m.trend === "down" ? String.fromCharCode(9660) : String.fromCharCode(8212);
          var trendColor = m.trend === "up" ? "var(--kc-green)" : m.trend === "down" ? "var(--kc-red)" : "var(--kc-text-dim)";
          trendEl.innerHTML = '<span style="color:' + trendColor + '">' + trendIcon + '</span> <span style="color:var(--kc-text-dim)">' + m.trendLabel + "</span>";
        });
      }
      // Phase 1: Engine Control (clickable)
      _renderEngineControl(container, data) {
        var engines = data.engines || {};
        var panel = this._createPanel(container, "Engine Control", "engines");
        var body = panel.body;
        var grid = body.createEl("div", { attr: { style: "display:grid;grid-template-columns:1fr 1fr;gap:5px" } });
        var engineDefs = [
          { key: "triage", label: "Triage", status: engines.triage?.status || "idle" },
          { key: "compile", label: "Compile", status: engines.compile?.status || "idle" },
          { key: "link", label: "Link", status: engines.link?.status || "idle" },
          { key: "daily", label: "Daily", status: data.today?.exists ? "done" : "warning" },
          { key: "project", label: "Project", status: (data.projects || []).length > 0 ? "done" : "idle" },
          { key: "life", label: "Life+AI", status: engines.life?.status || "idle" }
        ];
        engineDefs.forEach(function(def) {
          var card = grid.createEl("div", { attr: { style: "padding:8px 10px;background:var(--kc-bg-card);border-radius:6px;cursor:pointer;transition:all 0.2s" } });
          card.addEventListener("mouseenter", function() {
            card.style.background = "var(--kc-bg-card-hover)";
          });
          card.addEventListener("mouseleave", function() {
            card.style.background = "var(--kc-bg-card)";
          });
          var topRow = card.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center;margin-bottom:4px" } });
          topRow.createEl("span", { attr: { style: "font-size:11px;font-weight:500;color:var(--kc-text-primary)" }, text: def.label });
          var statusColor = def.status === "done" ? "var(--kc-green)" : def.status === "warning" ? "var(--kc-amber)" : "var(--kc-text-dim)";
          topRow.createEl("span", { attr: { style: "width:6px;height:6px;border-radius:50%;background:" + statusColor + ";flex-shrink:0" } });
          var bottomRow = card.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center" } });
          var statusText = def.status === "done" ? "Ready" : def.status === "warning" ? "Action needed" : "Idle";
          bottomRow.createEl("span", { attr: { style: "font-size:9px;color:var(--kc-text-dim);font-family:var(--kc-mono)" }, text: statusText });
          var btn = bottomRow.createEl("button", { attr: { style: "font-size:9px;padding:2px 10px;border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-deep);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font)" }, text: String.fromCharCode(9654) });
          btn.addEventListener("mouseenter", function() {
            btn.style.background = "var(--kc-bg-card-hover)";
            btn.style.color = "var(--kc-text-primary)";
          });
          btn.addEventListener("mouseleave", function() {
            btn.style.background = "var(--kc-bg-deep)";
            btn.style.color = "var(--kc-text-secondary)";
          });
          btn.addEventListener("click", function(e) {
            e.stopPropagation();
            this._handleLaunch(def.key);
          }.bind(this));
          card.addEventListener("click", function() {
            this._handleLaunch(def.key);
          }.bind(this));
        }.bind(this));
      }
      // Phase 1: Today Focus
      _renderTodayFocus(container, data) {
        var panel = this._createPanel(container, "Today Focus", "today");
        var body = panel.body;
        var headerRow = body.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center;margin-bottom:8px" } });
        var tasks = data.today?.tasks || { done: 0, total: 0, completionRate: 0 };
        headerRow.createEl("span", { attr: { style: "font-size:12px;font-weight:500;color:var(--kc-text-primary)" }, text: "Tasks" });
        headerRow.createEl("span", { attr: { style: "font-size:10px;font-family:var(--kc-mono);color:" + (tasks.completionRate >= 100 ? "var(--kc-green)" : "var(--kc-amber)") }, text: tasks.done + "/" + tasks.total + " (" + tasks.completionRate + "%)" });
        var taskList = body.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:3px;margin-bottom:10px" } });
        var items = (data.today?.taskItems || []).slice(0, 5);
        if (!data.today?.exists) {
          taskList.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);font-style:italic" }, text: "Daily note not created." });
          var createBtn = body.createEl("button", { attr: { style: "margin-top:6px;padding:4px 12px;font-size:10px;border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font)" }, text: "Create Daily Note" });
          createBtn.addEventListener("click", function() {
            this.app.workspace.openLinkText("Periodic/" + moment().format("YYYY/MM/YYYY-MM-DD"), "", true);
          }.bind(this));
        } else if (items.length === 0) {
          taskList.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);font-style:italic" }, text: "No tasks." });
        } else {
          items.forEach(function(item) {
            var row = taskList.createEl("div", { attr: { style: "display:flex;align-items:flex-start;gap:5px;padding:2px 0;font-size:11px" + (item.done ? ";opacity:0.5;text-decoration:line-through" : "") } });
            row.createEl("span", { text: item.done ? "[x]" : "[ ]", attr: { style: "flex-shrink:0;font-size:10px;font-family:var(--kc-mono)" } });
            row.createEl("span", { text: item.text, attr: { style: "word-break:break-word;color:var(--kc-text-secondary)" } });
          });
        }
        var statsRow = body.createEl("div", { attr: { style: "display:flex;gap:12px;padding-top:8px;border-top:1px solid var(--kc-border)" } });
        var streak = calcStreak(data.weekly);
        var streakEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        streakEl.createEl("div", { attr: { style: "font-size:18px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-amber)" }, text: String(streak) + "d" });
        streakEl.createEl("div", { attr: { style: "font-size:8px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: "Streak" });
        var todayCount = getTodayCaptureCount(data.weekly);
        var weekAvg = (data.weekly || []).length > 0 ? Math.round((data.weekly || []).reduce(function(s, c) {
          return s + c.count;
        }, 0) / (data.weekly || []).length * 10) / 10 : 0;
        var captureEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        captureEl.createEl("div", { attr: { style: "font-size:18px;font-weight:700;font-family:var(--kc-mono);color:" + (todayCount >= weekAvg ? "var(--kc-green)" : "var(--kc-amber)") }, text: String(todayCount) });
        captureEl.createEl("div", { attr: { style: "font-size:8px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: "Today" });
        var dailyEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        dailyEl.createEl("div", { attr: { style: "font-size:12px;color:" + (data.today?.exists ? "var(--kc-green)" : "var(--kc-amber)") }, text: data.today?.exists ? "Done" : "Pending" });
        dailyEl.createEl("div", { attr: { style: "font-size:8px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: "Daily" });
      }
      // Widget: Vault Health
      _renderHealthPanel(container, data) {
        const healthScore = calcHealthScore(data);
        const panel = this._createPanel(container, "Vault Health", "health");
        const body = panel.body;
        const gaugeWrap = body.createEl("div", { cls: "kos-gauge-wrap" });
        const ring = gaugeWrap.createEl("div", { cls: "kos-gauge-ring" });
        const c = 314;
        const offset = c - healthScore / 100 * c;
        ring.innerHTML = '<svg viewBox="0 0 110 110"><circle class="bg" cx="55" cy="55" r="50"/><circle class="arc" cx="55" cy="55" r="50" stroke-dasharray="' + c + '" stroke-dashoffset="' + offset + '"/></svg><div class="center-label"><span class="pct">' + healthScore + '%</span><span class="pct-label">' + (healthScore >= 85 ? "Optimal" : healthScore >= 65 ? "Needs Work" : "Critical") + "</span></div>";
        const checkList = body.createEl("div", { cls: "kos-check-list" });
        var checks = [
          { label: "L1 Frontmatter", score: Math.min(100, 95 + (data.today?.exists ? 3 : 0)) },
          { label: "L2 UDC", score: 92 },
          { label: "L3 Links", score: 96 },
          { label: "L4 Cross-lang", score: 83 },
          { label: "L5 Projects", score: data.projects?.length > 0 ? 100 : 70 },
          { label: "L6 Empties", score: (data.inboxFiles || []).length === 0 ? 100 : Math.max(60, 100 - (data.inboxFiles || []).length * 5) }
        ];
        checks.forEach(function(ch) {
          var item = checkList.createEl("div", { cls: "kos-check-item" });
          item.createEl("span", { cls: "lbl", text: ch.label });
          var status = item.createEl("span", { cls: "status" });
          var dotClass = ch.score >= 90 ? "d-green" : ch.score >= 70 ? "d-amber" : "d-red";
          status.createEl("span", { cls: "d " + dotClass });
          status.createEl("span", { text: ch.score + "%" });
        });
        var inboxCard = body.createEl("div", { cls: "kos-inbox-card" });
        inboxCard.createEl("div", { cls: "count", text: String((data.inboxFiles || []).length) });
        var meta = inboxCard.createEl("div", { cls: "meta" });
        meta.createEl("span", { cls: "l", text: "Inbox Pending" });
        meta.createEl("span", { cls: "sub", text: (data.stats?.totalNotes || 0) + " total notes" });
      }
      // Widget: Active Projects
      _renderProjectsPanel(container, data) {
        var panel = this._createPanel(container, "Active Projects", "projects");
        var body = panel.body;
        var list = body.createEl("div", { cls: "kos-project-list" });
        var projects = data.projects || [];
        if (projects.length === 0) {
          list.createEl("div", { text: "No active projects.", cls: "kos-empty" });
          return;
        }
        projects.slice(0, 6).forEach(function(proj) {
          var card = list.createEl("div", { cls: "kos-project-card" });
          card.addEventListener("click", function() {
            this.app.workspace.openLinkText(proj.path, "", true);
          }.bind(this));
          var top = card.createEl("div", { cls: "top" });
          top.createEl("span", { cls: "pname", text: proj.title || "Unnamed" });
          top.createEl("span", { cls: "pstatus " + (proj.status || "active"), text: proj.status || "active" });
          var barWrap = card.createEl("div", { cls: "bar-wrap" });
          var bar = barWrap.createEl("div", { cls: "bar" });
          var rate = proj.tasks?.completionRate || 0;
          var fillClass = rate >= 80 ? "fill-green" : rate >= 50 ? "fill-amber" : "fill-cyan";
          bar.createEl("div", { cls: "fill " + fillClass, attr: { style: "width:" + rate + "%" } });
          barWrap.createEl("span", { cls: "bar-pct", text: rate + "%" });
        }.bind(this));
      }
      // Widget: Knowledge Growth
      _renderGrowthPanel(container, data) {
        var panel = this._createPanel(container, "Knowledge Growth", "growth");
        var body = panel.body;
        var stats = data.stats?.stats || {};
        var totalNotes = data.stats?.totalNotes || 0;
        var resources = stats.resources || 0;
        var projectsCount = (data.projects || []).length;
        var recentCount = (data.recent || []).length;
        var chartSvg = body.createEl("div", { attr: { style: "text-align:center;padding:6px 0" } });
        chartSvg.innerHTML = '<svg viewBox="0 0 300 70" preserveAspectRatio="none" style="width:100%;height:50px"><defs><linearGradient id="g-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--kc-cyan)"/><stop offset="100%" stop-color="var(--kc-cyan)" stop-opacity="0"/></linearGradient></defs><path fill="url(#g-grad)" d="M0,65 Q40,55 80,60 T160,42 T200,25 T260,18 T300,8 L300,70 L0,70 Z" opacity="0.15"/><path fill="none" stroke="var(--kc-cyan)" stroke-width="1.5" d="M0,65 Q40,55 80,60 T160,42 T200,25 T260,18 T300,8"/></svg>';
        var grid = body.createEl("div", { attr: { style: "display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:4px;margin-top:8px" } });
        var items = [
          { label: "Pages", value: String(totalNotes) },
          { label: "Resources", value: String(resources) },
          { label: "Projects", value: String(projectsCount) },
          { label: "Recent", value: String(recentCount) }
        ];
        items.forEach(function(item) {
          var cell = grid.createEl("div", { attr: { style: "text-align:center;padding:4px" } });
          cell.createEl("div", { attr: { style: "font-size:16px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-cyan)" }, text: item.value });
          cell.createEl("div", { attr: { style: "font-size:8px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px" }, text: item.label });
        });
      }
      // Widget: Quick Launch
      _renderLaunchPanel(container) {
        var panel = this._createPanel(container, "Quick Launch", "launch");
        var body = panel.body;
        var grid = body.createEl("div", { attr: { style: "display:grid;grid-template-columns:1fr 1fr;gap:4px" } });
        var actions = [
          { label: "Triage", action: "triage", cls: "" },
          { label: "Compile", action: "compile", cls: "cyan" },
          { label: "Link", action: "link", cls: "green" },
          { label: "Query", action: "query", cls: "orange" },
          { label: "Daily", action: "daily", cls: "purple" },
          { label: "Week R.", action: "week", cls: "amber" },
          { label: "Init", action: "init", cls: "cyan" },
          { label: "Life+AI", action: "life", cls: "green" }
        ];
        actions.forEach(function(a) {
          var btn = grid.createEl("button", { attr: { style: "padding:7px 8px;font-size:10px;border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-card);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s" + (a.cls ? ";border-left:2px solid var(--kc-" + a.cls + ")" : "") }, text: a.label });
          btn.addEventListener("mouseenter", function() {
            btn.style.background = "var(--kc-bg-card-hover)";
            btn.style.color = "var(--kc-text-primary)";
          });
          btn.addEventListener("mouseleave", function() {
            btn.style.background = "var(--kc-bg-card)";
            btn.style.color = "var(--kc-text-secondary)";
          });
          btn.addEventListener("click", function() {
            this._handleLaunch(a.action);
          }.bind(this));
        }.bind(this));
      }
      _handleLaunch(action) {
        var msgs = {
          triage: "KOS-Triage launched",
          compile: "KOS-Compile launched",
          link: "KOS-Link started",
          query: "KOS-Query panel opened",
          daily: "Daily Open creating...",
          week: "Week-Review generating...",
          init: "KOS-Init health check...",
          life: "Life+AI panel opened"
        };
        var msg = msgs[action] || "Executing: " + action;
        try {
          new Notice(msg);
        } catch (_) {
        }
      }
      // Widget: Activity Feed
      _renderFeedPanel(container, data) {
        var panel = this._createPanel(container, "Activity Feed", "feed");
        var body = panel.body;
        var list = body.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:2px;max-height:220px;overflow-y:auto" } });
        var recent = data.recent || [];
        if (recent.length === 0) {
          list.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);font-style:italic" }, text: "No recent activity." });
          return;
        }
        recent.slice(0, 10).forEach(function(item) {
          var row = list.createEl("div", { attr: { style: "display:flex;gap:8px;padding:4px 6px;font-size:10px;border-radius:4px;cursor:pointer;transition:all 0.15s" } });
          row.addEventListener("mouseenter", function() {
            row.style.background = "var(--kc-bg-card)";
          });
          row.addEventListener("mouseleave", function() {
            row.style.background = "transparent";
          });
          row.addEventListener("click", function() {
            this.app.workspace.openLinkText(item.path, "", true);
          }.bind(this));
          row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:9px;color:var(--kc-text-dim);white-space:nowrap;min-width:40px" }, text: moment(item.mtime).format("MM-DD HH:mm") });
          row.createEl("span", { attr: { style: "color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" }, text: item.title || item.path });
        }.bind(this));
      }
      // Widget: Hot Context
      _renderHotPanel(container, data) {
        var panel = this._createPanel(container, "Hot Context", "hot");
        var body = panel.body;
        var entries = (data.hot || []).slice(0, 4);
        if (entries.length === 0) {
          body.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);font-style:italic" }, text: "No hot context entries." });
          return;
        }
        entries.forEach(function(entry) {
          var row = body.createEl("div", { attr: { style: "padding:5px 8px;font-size:10px;color:var(--kc-text-secondary);font-family:var(--kc-mono);border-left:2px solid var(--kc-amber-dim);margin-bottom:4px;border-radius:2px;background:var(--kc-bg-card)" } });
          row.createEl("span", { attr: { style: "color:var(--kc-amber);margin-right:6px" }, text: entry.date });
          row.createEl("span", { text: entry.summary });
        });
      }
      // ──────────────── Life+AI Panel ────────────────
      renderLifeView(container, data) {
        var engines = data.engines || {};
        var lifeEngine = engines.life || {};
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:16px 20px" } });
        var topRow = topBody.createEl("div", { attr: { style: "display:flex;align-items:center;gap:20px;flex-wrap:wrap" } });
        topRow.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F9EC} Life+AI" });
        topRow.createEl("span", { attr: { style: "font-size:12px;color:var(--kc-text-secondary);flex:1" }, text: "\u751F\u6D3B \xB7 \u5B66\u4E60 \xB7 \u5DE5\u4F5C \u2014 \u4E09\u652F\u67F1\u5468\u671F\u7BA1\u7406" });
        var statusDot = topRow.createEl("span", { attr: { style: "width:8px;height:8px;border-radius:50%;background:" + (lifeEngine.lastRun ? "var(--kc-green)" : "var(--kc-text-dim)") } });
        var grid = container.createEl("div", { attr: { style: "display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px" } });
        var pillars = [
          {
            icon: "\u{1F9D1}\u200D\u{1F33E}",
            label: "\u751F\u6D3B",
            color: "var(--kc-green)",
            items: [
              { key: "health", label: "\u5065\u5EB7\u8FDB\u5EA6", value: "\u2014" },
              { key: "habit", label: "\u4E60\u60EF\u8FFD\u8E2A", value: "\u2014" }
            ]
          },
          {
            icon: "\u{1F4DA}",
            label: "\u5B66\u4E60",
            color: "var(--kc-cyan)",
            items: [
              { key: "learn", label: "\u5B66\u4E60\u8FDB\u5EA6", value: "\u2014" },
              { key: "skill", label: "\u6280\u80FD\u57F9\u517B", value: "\u2014" }
            ]
          },
          {
            icon: "\u{1F4BB}",
            label: "\u5DE5\u4F5C",
            color: "var(--kc-amber)",
            items: [
              { key: "projects", label: "\u9879\u76EE\u8FDB\u5EA6", value: String((data.projects || []).length) + " active" },
              { key: "tasks", label: "\u4ECA\u65E5\u4EFB\u52A1", value: data.today?.tasks ? String(data.today.tasks.total) + " tasks" : "\u2014" }
            ]
          }
        ];
        pillars.forEach(function(p) {
          var card = grid.createEl("div", { cls: "kos-panel" });
          var header = card.createEl("div", { cls: "kos-panel-header" });
          header.createEl("span", { attr: { style: "font-size:13px;font-weight:600;color:" + p.color }, text: p.icon + " " + p.label });
          var body = card.createEl("div", { cls: "kos-panel-body" });
          p.items.forEach(function(item) {
            var row = body.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:11px;border-bottom:1px solid rgba(240,180,41,0.04)" } });
            row.createEl("span", { attr: { style: "color:var(--kc-text-secondary)" }, text: item.label });
            row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:10px;color:var(--kc-text-primary)" }, text: item.value });
          });
        });
        var actionsPanel = container.createEl("div", { cls: "kos-panel" });
        var actionsBody = actionsPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        var actionsRow = actionsBody.createEl("div", { attr: { style: "display:flex;gap:8px;flex-wrap:wrap" } });
        var lifeActions = [
          { label: "Life-Report", action: "life" },
          { label: "Life-Check", action: "life" },
          { label: "Life-Brief", action: "life" },
          { label: "\u5468\u62A5", action: "week" },
          { label: "\u6708\u62A5", action: "week" }
        ];
        lifeActions.forEach(function(a) {
          var btn = actionsRow.createEl("button", { attr: { style: "padding:6px 16px;font-size:11px;border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s" }, text: a.label });
          btn.addEventListener("mouseenter", function() {
            btn.style.background = "var(--kc-amber)";
            btn.style.color = "var(--kc-bg-deep)";
          });
          btn.addEventListener("mouseleave", function() {
            btn.style.background = "var(--kc-amber-dim)";
            btn.style.color = "var(--kc-amber)";
          });
          btn.addEventListener("click", function() {
            this._handleLaunch(a.action);
          }.bind(this));
        }.bind(this));
      }
      // ──────────────── Pipeline Panel ────────────────
      renderPipelineView(container, data) {
        var inboxItems = data.inboxDetail || [];
        var compileItems = data.compileQueue || [];
        var throughput = getThroughputStats(data.weekly);
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        var topRow = topBody.createEl("div", { attr: { style: "display:flex;gap:24px;align-items:center;flex-wrap:wrap" } });
        topRow.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F527} \u7BA1\u9053" });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-cyan)" }, text: String(throughput.total) + " rec" });
        topRow.createEl("span", { attr: { style: "font-size:10px;color:var(--kc-text-dim)" }, text: "\u672C\u5468\u6355\u83B7" });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-green)" }, text: String(inboxItems.length) });
        topRow.createEl("span", { attr: { style: "font-size:10px;color:var(--kc-text-dim)" }, text: "Inbox" });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-purple)" }, text: String(compileItems.length) });
        topRow.createEl("span", { attr: { style: "font-size:10px;color:var(--kc-text-dim)" }, text: "Raw" });
        var grid = container.createEl("div", { cls: "kos-pipeline-view" });
        var stage1 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage1.createEl("div", { attr: { style: "font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-amber);margin-bottom:10px" }, text: "\u{1F4E5} Inbox (" + inboxItems.length + ")" });
        if (inboxItems.length === 0) {
          stage1.createEl("div", { cls: "kos-empty", text: "No pending inbox items." });
        } else {
          var t2 = stage1.createEl("table", { cls: "kos-garden-table" });
          var thead = t2.createEl("thead");
          var thr = thead.createEl("tr");
          thr.createEl("th", { text: "Title" });
          thr.createEl("th", { text: "Days" });
          thr.createEl("th", { text: "Source" });
          var tbody = t2.createEl("tbody");
          inboxItems.slice(0, 12).forEach(function(item) {
            var tr = tbody.createEl("tr");
            tr.createEl("td", { text: item.title.slice(0, 24), attr: { style: "cursor:pointer" } });
            tr.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            tr.createEl("td", { text: String(item.daysWaiting) + "d", attr: { style: "font-family:var(--kc-mono);font-size:10px;color:" + (item.daysWaiting > 7 ? "var(--kc-red)" : item.daysWaiting > 3 ? "var(--kc-amber)" : "var(--kc-text-dim)") } });
            tr.createEl("td", { text: item.source, attr: { style: "font-size:10px;color:var(--kc-text-dim)" } });
          }.bind(this));
        }
        var stage2 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage2.createEl("div", { attr: { style: "font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-cyan);margin-bottom:10px" }, text: "\u{1F4DD} Raw (" + compileItems.length + ")" });
        if (compileItems.length === 0) {
          stage2.createEl("div", { cls: "kos-empty", text: "No files pending compilation." });
        } else {
          var t22 = stage2.createEl("table", { cls: "kos-garden-table" });
          var thead2 = t22.createEl("thead");
          var thr2 = thead2.createEl("tr");
          thr2.createEl("th", { text: "Title" });
          thr2.createEl("th", { text: "Words" });
          thr2.createEl("th", { text: "Priority" });
          var tbody2 = t22.createEl("tbody");
          compileItems.slice(0, 12).forEach(function(item) {
            var tr = tbody2.createEl("tr");
            tr.createEl("td", { text: item.title.slice(0, 24), attr: { style: "cursor:pointer" } });
            tr.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            tr.createEl("td", { text: String(item.wordCount), attr: { style: "font-family:var(--kc-mono);font-size:10px;color:var(--kc-text-dim)" } });
            var priColor = item.priority === "high" ? "var(--kc-red)" : item.priority === "medium" ? "var(--kc-amber)" : "var(--kc-text-dim)";
            tr.createEl("td", { text: item.priority, attr: { style: "font-size:10px;color:" + priColor } });
          }.bind(this));
        }
        var stage3 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage3.createEl("div", { attr: { style: "font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-green);margin-bottom:10px" }, text: "\u{1F4C8} Throughput" });
        var barChart = stage3.createEl("div", { attr: { style: "display:flex;gap:3px;align-items:flex-end;height:80px;padding:8px 0" } });
        var weekly = data.weekly || [];
        var maxCount = Math.max(1, ...weekly.map(function(w) {
          return w.count;
        }));
        weekly.forEach(function(w) {
          var col = barChart.createEl("div", { attr: { style: "flex:1;display:flex;flex-direction:column;align-items:center;gap:2px" } });
          var bar = col.createEl("div", { attr: { style: "width:100%;height:" + Math.max(3, w.count / maxCount * 60) + "px;background:" + (w.isToday ? "var(--kc-amber)" : "var(--kc-amber-dim)") + ";border-radius:2px 2px 0 0;transition:height 0.3s;min-height:3px" } });
          col.createEl("span", { attr: { style: "font-size:8px;color:var(--kc-text-dim);font-family:var(--kc-mono)" }, text: w.weekday });
        });
        stage3.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);text-align:center;margin-top:6px" }, text: "\u5F53\u524D\u5468\u901A\u91CF: " + throughput.total + " \u6761\u8BB0\u5F55, \u65E5\u5747 " + throughput.avg });
      }
      // ──────────────── Knowledge Garden Panel ────────────────
      renderGardenView(container, data) {
        var stats = data.stats?.stats || {};
        var totalNotes = data.stats?.totalNotes || 0;
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        topBody.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F333} \u77E5\u8BC6\u82B1\u56ED" });
        topBody.createEl("span", { attr: { style: "margin-left:16px;font-size:12px;color:var(--kc-text-secondary)" }, text: totalNotes + " \u7BC7\u7B14\u8BB0" });
        var grid = container.createEl("div", { cls: "kos-garden-view" });
        var catCard = grid.createEl("div", { cls: "kos-garden-card" });
        catCard.createEl("h3", { attr: { style: "font-size:12px;font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F4C1} \u5206\u7C7B" });
        var catTable = catCard.createEl("table", { cls: "kos-garden-table" });
        var catHead = catTable.createEl("thead");
        catHead.createEl("tr").innerHTML = "<th>\u76EE\u5F55</th><th>\u7BC7\u6570</th>";
        var catBody = catTable.createEl("tbody");
        var categories = [
          { label: "\u{1F4C1} \u9879\u76EE (1 Project)", key: "projects", color: "var(--kc-amber)" },
          { label: "\u{1F3E0} \u9886\u57DF (2 Areas)", key: "areas", color: "var(--kc-cyan)" },
          { label: "\u{1F4DA} \u8D44\u6E90 (3 Resources)", key: "resources", color: "var(--kc-green)" },
          { label: "\u{1F4E5} Inbox", key: "inbox", color: "var(--kc-orange)" },
          { label: "\u{1F4C5} \u5468\u671F (Periodic)", key: "periodic", color: "var(--kc-purple)" }
        ];
        categories.forEach(function(cat) {
          var tr = catBody.createEl("tr");
          tr.createEl("td", { attr: { style: "color:" + cat.color }, text: cat.label });
          tr.createEl("td", { text: String(stats[cat.key] || 0), attr: { style: "font-family:var(--kc-mono);text-align:right" } });
        });
        catBody.createEl("tr").innerHTML = '<td style="font-weight:600;color:var(--kc-text-primary)">\u5408\u8BA1</td><td style="font-family:var(--kc-mono);text-align:right;color:var(--kc-amber);font-weight:700">' + totalNotes + "</td>";
        var recentCard = grid.createEl("div", { cls: "kos-garden-card" });
        recentCard.createEl("h3", { attr: { style: "font-size:12px;font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F331} \u6700\u8FD1\u66F4\u65B0" });
        var recent = data.recent || [];
        if (recent.length === 0) {
          recentCard.createEl("div", { cls: "kos-empty", text: "No recent activity." });
        } else {
          var rList = recentCard.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:2px;max-height:300px;overflow-y:auto" } });
          recent.slice(0, 15).forEach(function(item) {
            var row = rList.createEl("div", { attr: { style: "display:flex;gap:8px;padding:4px 6px;font-size:10px;border-radius:4px;cursor:pointer;transition:all 0.15s" } });
            row.addEventListener("mouseenter", function() {
              row.style.background = "var(--kc-bg-card)";
            });
            row.addEventListener("mouseleave", function() {
              row.style.background = "transparent";
            });
            row.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:9px;color:var(--kc-text-dim);white-space:nowrap;min-width:36px" }, text: moment(item.mtime).format("MM-DD") });
            row.createEl("span", { attr: { style: "color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" }, text: item.title || item.path });
          }.bind(this));
        }
        var searchCard = container.createEl("div", { cls: "kos-garden-card", attr: { style: "grid-column:1 / -1;margin-top:14px" } });
        searchCard.createEl("h3", { attr: { style: "font-size:12px;font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F50D} \u5FEB\u901F\u67E5\u8BE2" });
        var searchRow = searchCard.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var searchInput = searchRow.createEl("input", { attr: { type: "text", placeholder: "\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\u77E5\u8BC6\u5E93...", style: "flex:1;padding:7px 14px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:6px;color:var(--kc-text-primary);font-family:var(--kc-font);font-size:12px;outline:none" } });
        var searchBtn = searchRow.createEl("button", { attr: { style: "padding:7px 18px;background:var(--kc-amber);border:none;border-radius:6px;color:var(--kc-bg-deep);font-size:12px;font-weight:600;cursor:pointer;font-family:var(--kc-font)" }, text: "\u67E5\u8BE2" });
        searchBtn.addEventListener("click", function() {
          var q = searchInput.value.trim();
          if (q) {
            this.app.workspace.openLinkText("", "", true);
            new Notice("KOS-Query: " + q);
          }
        }.bind(this));
        searchInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter") searchBtn.click();
        });
      }
      // ──────────────── Settings Panel (inline) ────────────────
      renderSettingsView(container, data) {
        var panel = container.createEl("div", { cls: "kos-panel kos-settings-view" });
        var body = panel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:20px" } });
        body.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u2699\uFE0F \u8BBE\u7F6E" });
        body.createEl("div", { attr: { style: "font-size:12px;color:var(--kc-text-secondary);margin:8px 0 20px 0" }, text: "\u914D\u7F6E KOS Cockpit \u7684\u663E\u793A\u4E0E\u884C\u4E3A" });
        var sec1 = body.createEl("div", { cls: "kos-settings-section" });
        sec1.createEl("h3", { text: "\u754C\u9762\u8BED\u8A00" });
        var localeRow = sec1.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var locales = [
          { id: "zh-cn", label: "\u7B80\u4F53\u4E2D\u6587" },
          { id: "en", label: "English" },
          { id: "zh-tw", label: "\u7E41\u9AD4\u4E2D\u6587" }
        ];
        var curLocale = this.settings?.locale || "zh-cn";
        locales.forEach(function(l) {
          var btn = localeRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:11px;border-radius:4px;border:1px solid " + (l.id === curLocale ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (l.id === curLocale ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (l.id === curLocale ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: l.label
          });
          btn.addEventListener("click", function() {
            this.settings.locale = l.id;
            this.plugin.saveSettings();
            this.renderLoading();
            this.refresh();
          }.bind(this));
        }.bind(this));
        var secTheme = body.createEl("div", { cls: "kos-settings-section" });
        secTheme.createEl("h3", { text: "\u57FA\u672C\u4E3B\u9898" });
        var curTheme = this.app.vault.getConfig("theme") || "obsidian";
        var baseRow = secTheme.createEl("div", { attr: { style: "display:flex;gap:8px;margin-bottom:8px" } });
        var baseThemes = [
          { id: "obsidian", label: "\u6697\u9ED1" },
          { id: "moonstone", label: "\u660E\u4EAE" },
          { id: "system", label: "\u8DDF\u968F\u7CFB\u7EDF" }
        ];
        baseThemes.forEach(function(t2) {
          var btn = baseRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:11px;border-radius:4px;border:1px solid " + (t2.id === curTheme ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (t2.id === curTheme ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (t2.id === curTheme ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: t2.label
          });
          btn.addEventListener("click", function() {
            this.app.vault.setConfig("theme", t2.id);
            this.collectData(this.app).then(function(d) {
              this.switchPanel("settings", d);
            }.bind(this));
          }.bind(this));
        }.bind(this));
        var curSeason = this.settings?.seasonalTheme || "spring";
        var seasonLabel = secTheme.createEl("div", { attr: { style: "font-size:10px;color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:1px;margin:4px 0 6px 0" }, text: "\u5B63\u8282\u6027\u5F3A\u8C03\u8272" });
        var seasonRow = secTheme.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var seasons = [
          { id: "spring", label: "\u6625", icon: "\u{1F338}" },
          { id: "summer", label: "\u590F", icon: "\u2600\uFE0F" },
          { id: "autumn", label: "\u79CB", icon: "\u{1F342}" },
          { id: "winter", label: "\u51AC", icon: "\u2744\uFE0F" }
        ];
        seasons.forEach(function(s) {
          var btn = seasonRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:11px;border-radius:4px;border:1px solid " + (s.id === curSeason ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (s.id === curSeason ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (s.id === curSeason ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: s.icon + " " + s.label
          });
          btn.addEventListener("click", function() {
            this.settings.seasonalTheme = s.id;
            this.plugin.saveSettings();
            var root = this.contentEl.querySelector(".kos-cockpit-container");
            if (root) {
              ["theme-spring", "theme-summer", "theme-autumn", "theme-winter"].forEach(function(c) {
                root.removeClass(c);
              });
              root.addClass("theme-" + s.id);
            }
            this.collectData(this.app).then(function(d) {
              this.switchPanel("settings", d);
            }.bind(this));
          }.bind(this));
        }.bind(this));
        var sec2 = body.createEl("div", { cls: "kos-settings-section" });
        sec2.createEl("h3", { text: "\u901A\u7528" });
        var autoRow = sec2.createEl("div", { attr: { style: "display:flex;align-items:center;gap:12px;margin-bottom:10px" } });
        var autoToggle = autoRow.createEl("input", { attr: { type: "checkbox", id: "kos-settings-autopen" } });
        autoToggle.checked = this.settings?.autoOpen || false;
        autoToggle.addEventListener("change", function() {
          this.settings.autoOpen = autoToggle.checked;
          this.plugin.saveSettings();
        }.bind(this));
        autoRow.createEl("label", { attr: { for: "kos-settings-autopen", style: "font-size:12px;color:var(--kc-text-secondary);cursor:pointer" }, text: "\u542F\u52A8\u65F6\u81EA\u52A8\u6253\u5F00 KOS Cockpit" });
        var limitRow = sec2.createEl("div", { attr: { style: "display:flex;align-items:center;gap:12px;margin-bottom:10px" } });
        limitRow.createEl("span", { attr: { style: "font-size:11px;color:var(--kc-text-secondary);min-width:100px" }, text: "\u6700\u5927\u6700\u8FD1\u6D3B\u52A8\u6570" });
        var maxRecentInput = limitRow.createEl("input", { attr: { type: "number", min: "5", max: "30", value: String(this.settings?.maxRecent || 10), style: "width:60px;padding:4px 8px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:4px;color:var(--kc-text-primary);font-family:var(--kc-mono);font-size:11px;outline:none" } });
        maxRecentInput.addEventListener("change", function() {
          this.settings.maxRecent = Math.max(5, Math.min(30, parseInt(maxRecentInput.value) || 10));
          this.plugin.saveSettings();
        }.bind(this));
        var sec3 = body.createEl("div", { cls: "kos-settings-section" });
        sec3.createEl("h3", { text: "\u5173\u4E8E" });
        sec3.createEl("div", { attr: { style: "font-size:11px;color:var(--kc-text-dim);line-height:1.6" }, text: "KOS Cockpit v0.2.0 \u2014 KOS_LLM-Wiki \u77E5\u8BC6\u7BA1\u7406\u4EEA\u8868\u76D8\u3002KOS \u751F\u6001\u7684\u4E00\u90E8\u5206\u3002" });
        sec3.createEl("div", { attr: { style: "font-size:9px;color:var(--kc-text-dim);margin-top:6px" }, text: "\u652F\u6301\u6761\u76EE: " + String(data.stats?.totalNotes || 0) + " \u7BC7\u7B14\u8BB0" });
      }
      // ──────────────── Shared Widget Helpers ────────────────
      _createPanel(container, titleHtml, widgetId) {
        var panel = container.createEl("div", { cls: "kos-panel" });
        var header = panel.createEl("div", { cls: "kos-panel-header" });
        var left = header.createEl("div", { cls: "kos-panel-header-left" });
        left.createEl("span", { cls: "kos-panel-title", text: titleHtml });
        var tools = header.createEl("div", { cls: "kos-panel-tools" });
        var collapseBtn = tools.createEl("button", { cls: "kos-panel-tool", attr: { title: "Collapse" }, text: String.fromCharCode(9660) });
        collapseBtn.addEventListener("click", function() {
          panel.toggleClass("kos-panel-collapsed");
        });
        var body = panel.createEl("div", { cls: "kos-panel-body" });
        return { panel, body, header };
      }
      // ──────────────── Chat (Claudian-style) ────────────────
      renderChatView(container, data) {
        var main = container.createEl("div", { cls: "kos-ai-chat" });
        var toolbar = main.createEl("div", { cls: "kos-ai-toolbar" });
        var tLeft = toolbar.createEl("div", { cls: "kos-ai-toolbar-left" });
        var modelSel = tLeft.createEl("select", { cls: "kos-ai-model-select" });
        var providers = ["claude", "codex", "opencode"];
        var activePid = this.settings?.activeProvider || "claude";
        providers.forEach(function(pid) {
          var opt = modelSel.createEl("option", { value: pid, text: this.settings?.providers?.[pid]?.label || pid });
          if (pid === activePid) opt.selected = true;
        }.bind(this));
        modelSel.addEventListener("change", function() {
          this.settings.activeProvider = modelSel.value;
          this.plugin.saveSettings();
          this.aiChat = null;
          this.renderLoading();
          this.refresh();
        }.bind(this));
        tLeft.createEl("span", { cls: "kos-ai-provider-label", text: this._t("ai.modelLabel") });
        var tRight = toolbar.createEl("div", { cls: "kos-ai-toolbar-right" });
        var statusPill = tRight.createEl("span", { cls: "kos-ai-status-pill" });
        var isConfigured = this.aiChat && this.aiChat.isConfigured;
        statusPill.addClass(isConfigured ? "ok" : "warn");
        statusPill.textContent = isConfigured ? this._t("ai.connected") : this._t("ai.notConfigured");
        var clearBtn = tRight.createEl("button", { cls: "kos-ai-toolbar-btn", text: this._t("ai.clearBtn") });
        clearBtn.addEventListener("click", function() {
          if (this.aiChat) {
            this.aiChat.clear();
            this._refreshChatMsgs();
          }
        }.bind(this));
        var msgWrapper = main.createEl("div", { cls: "kos-ai-msgs-wrapper" });
        var msgContainer = msgWrapper.createEl("div", { cls: "kos-ai-msgs" });
        var inputArea = main.createEl("div", { cls: "kos-ai-input-area" });
        var inputRow = inputArea.createEl("div", { cls: "kos-ai-input-row" });
        var input = inputRow.createEl("input", {
          cls: "kos-ai-input",
          attr: { type: "text", placeholder: this._t("ai.placeholder") }
        });
        var sendBtn = inputRow.createEl("button", { cls: "kos-ai-send", text: this._t("ai.sendBtn") });
        this._initAiChat();
        this._renderChatMessages(msgContainer);
        var doSend = function() {
          var val = input.value.trim();
          if (!val) return;
          this._sendChatMessage(val, msgContainer, input);
        }.bind(this);
        sendBtn.addEventListener("click", doSend);
        input.addEventListener("keydown", function(e) {
          if (e.key === "Enter") doSend();
        });
      }
      // ──────────────── Chat Welcome (Claudian-style) ────────────────
      _renderChatWelcome(container) {
        const welcome = container.createEl("div", { cls: "kos-ai-welcome" });
        welcome.createEl("div", { cls: "kos-ai-welcome-greeting", text: this._t("ai.welcomeTitle") });
        welcome.createEl("div", { cls: "kos-ai-welcome-sub", text: this._t("ai.welcome") });
        ;
        var grid = welcome.createEl("div", { cls: "kos-ai-suggest-grid" });
        var suggestions = [
          { icon: "\u{1F4CA}", title: this._t("ai.suggestProjects"), desc: this._t("ai.suggestProjectsDesc") },
          { icon: "\u{1F4DD}", title: this._t("ai.suggestRecent"), desc: this._t("ai.suggestRecentDesc") },
          { icon: "\u{1F50D}", title: this._t("ai.suggestSearch"), desc: this._t("ai.suggestSearchDesc") }
        ];
        suggestions.forEach(function(s) {
          var card = grid.createEl("div", { cls: "kos-ai-suggest-card" });
          card.createEl("span", { cls: "kos-ai-suggest-icon", text: s.icon });
          card.createEl("span", { cls: "kos-ai-suggest-title", text: s.title });
          card.createEl("span", { cls: "kos-ai-suggest-desc", text: s.desc });
          card.addEventListener("click", function() {
            var inputEl = container.closest(".kos-db")?.querySelector(".kos-ai-input");
            if (inputEl) {
              inputEl.value = s.title;
              inputEl.focus();
            }
          });
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
        const section = this.contentEl.querySelector(".kos-ai-chat, .kos-db-ai, .kos-db-ai-full");
        if (section) {
          const msgContainer = (section ? section.querySelector(".kos-ai-msgs") : null) || (section ? section.querySelector(".kos-db-ai-msgs") : null);
          if (msgContainer) this._renderChatMessages(msgContainer);
        }
      }
      _renderChatMessages(container) {
        container.empty();
        const msgs = this.aiChat ? this.aiChat.getHistory() : [];
        if (!this.aiChat || !this.aiChat.isConfigured) {
          container.createEl("div", { text: this._t("ai.needConfig"), cls: "kos-ai-need-config" });
          return;
        }
        var hasUserMessages = msgs.some(function(m) {
          return m.role === "user";
        });
        if (!hasUserMessages && msgs.length <= 1) {
          this._renderChatWelcome(container);
          return;
        }
        msgs.forEach(function(msg) {
          if (msg.role === "system") return;
          var bubble = container.createEl("div", {
            cls: "kos-ai-msg kos-ai-msg-" + msg.role
          });
          var textEl = bubble.createEl("div", { cls: "kos-ai-msg-text" });
          textEl.textContent = msg.content;
          if (msg.role === "assistant") {
            var copyBtn = bubble.createEl("button", { cls: "kos-ai-copy-btn", text: this._t("ai.copy") });
            copyBtn.addEventListener("click", async function() {
              try {
                await navigator.clipboard.writeText(msg.content);
                copyBtn.textContent = this._t("ai.copied");
                setTimeout(function() {
                  copyBtn.textContent = this._t("ai.copy");
                }.bind(this), 2e3);
              } catch {
              }
            }.bind(this));
          }
        }.bind(this));
        container.scrollTop = container.scrollHeight;
      }
      _sendChatMessage(text, msgContainer, inputEl) {
        if (!this.aiChat || !this.aiChat.isConfigured) return;
        inputEl.disabled = true;
        inputEl.value = "";
        this._renderChatMessages(msgContainer);
        const thinkingEl = msgContainer.createEl("div", { cls: "kos-ai-msg kos-ai-msg-assistant kos-ai-thinking" });
        thinkingEl.createEl("span", { text: this._t("ai.thinking"), cls: "kos-db-ai-msg-text" });
        let assistantText = "";
        let assistantBubble = null;
        this.aiChat.sendMessage(text, {
          onToken: (token) => {
            assistantText += token;
            if (!assistantBubble) {
              thinkingEl.remove();
              assistantBubble = msgContainer.createEl("div", { cls: "kos-ai-msg kos-ai-msg-assistant" });
              assistantBubble.createEl("div", { cls: "kos-db-ai-msg-text" });
            }
            assistantBubble.querySelector(".kos-db-ai-msg-text").textContent = assistantText;
            msgContainer.scrollTop = msgContainer.scrollHeight;
          },
          onDone: () => {
            if (thinkingEl.isConnected) thinkingEl.remove();
            if (!assistantBubble && assistantText) {
              assistantBubble = msgContainer.createEl("div", { cls: "kos-ai-msg kos-ai-msg-assistant" });
              assistantBubble.createEl("div", { cls: "kos-db-ai-msg-text", text: assistantText });
            }
            if (assistantBubble && assistantText) {
              const copyBtn = assistantBubble.createEl("button", { cls: "kos-ai-copy-btn", text: this._t("ai.copy") });
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
            const errBubble = msgContainer.createEl("div", { cls: "kos-ai-msg kos-ai-msg-error" });
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
      seasonalTheme: "spring",
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
  settings = { ...DEFAULT_SETTINGS };
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
