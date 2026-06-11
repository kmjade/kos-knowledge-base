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
        "app.retry": "\u91CD\u8BD5",
        // Panel display names (getDisplayText)
        "panel.home": "KOS Cockpit",
        "panel.chat": "KOS AI Chat",
        "panel.life": "Life+AI",
        "panel.pipeline": "Pipeline",
        "panel.garden": "\u77E5\u8BC6\u82B1\u56ED",
        "panel.settings": "\u8BBE\u7F6E",
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
        "project.new": "\u521B\u5EFA\u65B0\u9879\u76EE",
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
        "engine.control": "\u5F15\u64CE\u63A7\u5236",
        "engine.statusReady": "\u5C31\u7EEA",
        "engine.statusNeedsWork": "\u9700\u5904\u7406",
        "engine.statusStandby": "\u5F85\u547D",
        "engine.empty": "\u6682\u65E0\u5F15\u64CE\u72B6\u6001\u6570\u636E\u3002",
        // Weekly chart
        "weekly.title": "\u672C\u5468\u8BB0\u5F55\u5206\u5E03",
        "weekly.empty": "\u672C\u5468\u6682\u65E0\u65E5\u8BB0\u8BB0\u5F55\u3002",
        "weekly.barTooltip": "{date}: {count} \u6761",
        // Pipeline flow
        "pipeline.inbox": "\u6536\u4EF6\u7BB1",
        "pipeline.triage": "\u5206\u62E3",
        "pipeline.raw": "\u539F\u59CB",
        "pipeline.compile": "\u7F16\u8BD1",
        "pipeline.wiki": "\u77E5\u8BC6\u5E93",
        "pipeline.clickNavigate": "\u70B9\u51FB\u53EF\u5BFC\u822A",
        // Today focus
        "today.title": "\u4ECA\u65E5\u805A\u7126",
        "today.tasks": "\u4EFB\u52A1",
        "today.streak": "\u8FDE\u7EED",
        "today.today": "\u4ECA\u5929",
        "today.daily": "\u6BCF\u65E5",
        "today.weeklyTotal": "\u672C\u5468\u5171 {count} \u6761",
        "today.journal": "\u4ECA\u65E5\u65E5\u8BB0: {count} \u6761",
        "today.createNote": "\u521B\u5EFA\u4ECA\u65E5\u7B14\u8BB0",
        "today.done": "Done",
        "today.pending": "Pending",
        // Growth / Garden
        "growth.title": "\u77E5\u8BC6\u82B1\u56ED",
        "growth.todayJournal": "\u4ECA\u65E5\u65E5\u8BB0: {count} \u6761",
        "growth.weeklyTotal": "\u672C\u5468\u5171 {count} \u6761\u8BB0\u5F55",
        // Feed
        "feed.title": "\u6D3B\u52A8\u6D41",
        // Health
        "health.title": "\u77E5\u8BC6\u5E93\u5065\u5EB7",
        "health.score": "{score}/100",
        // Quick Launch
        "launch.title": "\u5FEB\u901F\u542F\u52A8",
        // Hot context
        "hot.title": "\u70ED\u70B9\u52A8\u6001",
        "hot.empty": "\u6682\u65E0\u70ED\u70B9\u52A8\u6001\u3002",
        // Life view
        "life.title": "Life+AI",
        "life.subtitle": "\u751F\u6D3B \xB7 \u5B66\u4E60 \xB7 \u5DE5\u4F5C \u2014 \u4E09\u652F\u67F1\u5468\u671F\u7BA1\u7406",
        "life.pillarLife": "\u751F\u6D3B",
        "life.pillarLearning": "\u5B66\u4E60",
        "life.pillarWork": "\u5DE5\u4F5C",
        "life.healthProgress": "\u5065\u5EB7\u8FDB\u5EA6",
        "life.habitTracking": "\u4E60\u60EF\u8FFD\u8E2A",
        "life.learningProgress": "\u5B66\u4E60\u8FDB\u5EA6",
        "life.skillBuilding": "\u6280\u80FD\u57F9\u517B",
        "life.projectProgress": "\u9879\u76EE\u8FDB\u5EA6",
        "life.todayTasks": "\u4ECA\u65E5\u4EFB\u52A1",
        "life.active": "active",
        "life.tasks": "tasks",
        "life.weeklyReport": "\u5468\u62A5",
        "life.monthlyReport": "\u6708\u62A5",
        // Pipeline view
        "pipeline.title": "\u7BA1\u9053",
        "pipeline.weeklyCaptures": "\u672C\u5468\u6355\u83B7",
        "pipeline.inboxSection": "Inbox ({count})",
        "pipeline.rawSection": "Raw ({count})",
        "pipeline.throughputSection": "Throughput",
        "pipeline.tableTitle": "\u6807\u9898",
        "pipeline.tableDays": "\u5929\u6570",
        "pipeline.tableSource": "\u6765\u6E90",
        "pipeline.tableWords": "\u5B57\u6570",
        "pipeline.tablePriority": "\u4F18\u5148\u7EA7",
        "pipeline.noInbox": "\u6682\u65E0\u5F85\u5904\u7406 Inbox\u3002",
        "pipeline.noRaw": "\u6682\u65E0\u5F85\u7F16\u8BD1\u6587\u4EF6\u3002",
        "pipeline.currentWeek": "\u5F53\u524D\u5468\u901A\u91CF: {total} \u6761\u8BB0\u5F55, \u65E5\u5747 {avg}",
        // Garden view
        "garden.title": "\u77E5\u8BC6\u82B1\u56ED",
        "garden.notes": "{count} \u7BC7\u7B14\u8BB0",
        "garden.categoryProjects": "\u9879\u76EE (1 Projects)",
        "garden.categoryAreas": "\u9886\u57DF (2 Areas)",
        "garden.categoryResources": "\u8D44\u6E90 (3 Resources)",
        "garden.categoryInbox": "Inbox",
        "garden.categoryPeriodic": "\u5468\u671F (Periodic)",
        "garden.categoryTotal": "\u5408\u8BA1",
        "garden.tableDirectory": "\u76EE\u5F55",
        "garden.tableCount": "\u7BC7\u6570",
        "garden.categorySection": "\u5206\u7C7B",
        "garden.recentUpdates": "\u6700\u8FD1\u66F4\u65B0",
        "garden.quickSearch": "\u5FEB\u901F\u67E5\u8BE2",
        "garden.searchPlaceholder": "\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\u77E5\u8BC6\u5E93...",
        "garden.searchBtn": "\u67E5\u8BE2",
        "garden.noRecent": "\u6682\u65E0\u6700\u8FD1\u66F4\u65B0\u3002",
        // Search
        "search.placeholder": "\u641C\u7D22\u7B14\u8BB0...",
        "search.btn": "\u641C\u7D22",
        // Tooltips
        "tooltip.refresh": "\u5237\u65B0",
        "tooltip.collapse": "\u6298\u53E0",
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
        "provider.labelSettings": "{label} Settings",
        "provider.defaultEndpoint": "\u9ED8\u8BA4: {endpoint}",
        "provider.endpointDesc": "OpenAI \u517C\u5BB9\u7684 API Endpoint URL",
        "provider.apiKeyDesc": "sk-... \u6216 API Key",
        "provider.modelDesc": "\u6A21\u578B\u6807\u8BC6\u7B26",
        "provider.presetModels": "{models}",
        // Tab bar
        "tab.dashboard": "\u4EEA\u8868\u76D8",
        "tab.life": "\u751F\u6D3B",
        "tab.pipeline": "\u7BA1\u9053",
        "tab.garden": "\u77E5\u8BC6\u82B1\u56ED",
        "tab.settings": "\u8BBE\u7F6E",
        // Settings (cockpit-view inline)
        "settings.title": "\u8BBE\u7F6E",
        "settings.desc": "\u914D\u7F6E KOS Cockpit \u7684\u663E\u793A\u4E0E\u884C\u4E3A",
        "settings.locale": "\u754C\u9762\u8BED\u8A00",
        "settings.language": "\u754C\u9762\u8BED\u8A00",
        "settings.languageDesc": "\u9009\u62E9 Cockpit \u663E\u793A\u8BED\u8A00\u3002\u5207\u6362\u540E\u754C\u9762\u5C06\u7ACB\u5373\u5237\u65B0\u3002",
        "settings.theme": "\u57FA\u672C\u4E3B\u9898",
        "settings.themeDark": "\u6697\u9ED1",
        "settings.themeLight": "\u660E\u4EAE",
        "settings.themeSystem": "\u8DDF\u968F\u7CFB\u7EDF",
        "settings.season": "\u5B63\u8282\u6027\u5F3A\u8C03\u8272",
        "settings.seasonSpring": "\u6625",
        "settings.seasonSummer": "\u590F",
        "settings.seasonAutumn": "\u79CB",
        "settings.seasonWinter": "\u51AC",
        "settings.fontSize": "\u5B57\u53F7",
        "settings.fontSmall": "\u5C0F",
        "settings.fontMedium": "\u4E2D",
        "settings.fontLarge": "\u5927",
        "settings.general": "\u901A\u7528",
        "settings.autoOpen": "\u542F\u52A8\u65F6\u81EA\u52A8\u6253\u5F00 KOS Cockpit",
        "settings.autoOpenDesc": "Obsidian \u542F\u52A8\u65F6\u81EA\u52A8\u5728\u4FA7\u8FB9\u680F\u6253\u5F00 KOS Cockpit\u3002",
        "settings.maxRecent": "\u6700\u5927\u6700\u8FD1\u6D3B\u52A8\u6570",
        "settings.maxRecentDesc": "\u663E\u793A\u6700\u8FD1\u4FEE\u6539\u6587\u4EF6\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxTasks": "\u6700\u5927\u4EFB\u52A1\u6570",
        "settings.maxTasksDesc": "\u663E\u793A\u4ECA\u65E5\u4EFB\u52A1\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxInbox": "\u6700\u5927 Inbox \u6570",
        "settings.maxInboxDesc": "\u663E\u793A Inbox \u6587\u4EF6\u540D\u7684\u6570\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.about": "\u5173\u4E8E",
        "settings.version": "\u7248\u672C",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 KOS_LLM-Wiki \u77E5\u8BC6\u7BA1\u7406\u4EEA\u8868\u76D8\u3002KOS \u751F\u6001\u7684\u4E00\u90E8\u5206\u3002",
        "settings.notesCount": "\u652F\u6301\u6761\u76EE: {count} \u7BC7\u7B14\u8BB0",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        // Settings sections
        "settings.dashboard": "Dashboard Sections",
        "settings.dashboardDesc": "\u63A7\u5236\u4EEA\u8868\u76D8\u4E0A\u5404\u533A\u5757\u7684\u663E\u793A\u3002",
        "settings.dataLimits": "Data Limits",
        "settings.sectionTodayTasks": "\u4ECA\u65E5\u4EFB\u52A1",
        "settings.sectionTodayTasksDesc": "\u6BCF\u65E5\u7B14\u8BB0\u4EFB\u52A1\u5217\u8868\u4E0E\u8FDB\u5EA6\u3002",
        "settings.sectionProjects": "\u6D3B\u8DC3\u9879\u76EE",
        "settings.sectionProjectsDesc": "\u9879\u76EE\u5361\u7247\uFF0C\u542B\u4F18\u5148\u7EA7\u4E0E\u8FDB\u5EA6\u3002",
        "settings.sectionVaultStats": "\u77E5\u8BC6\u5E93\u7EDF\u8BA1",
        "settings.sectionVaultStatsDesc": "\u603B\u7B14\u8BB0\u6570\u3001\u6D3B\u8DC3\u9879\u76EE\u3001Inbox \u8BA1\u6570\u3002",
        "settings.sectionRecentActivity": "\u6700\u8FD1\u6D3B\u52A8",
        "settings.sectionRecentActivityDesc": "\u6700\u8FD1\u4FEE\u6539\u7684\u6587\u4EF6\u3002",
        "settings.sectionNav": "\u5BFC\u822A",
        "settings.sectionNavDesc": "\u5FEB\u901F\u94FE\u63A5\u5230\u9886\u57DF\u3001Inbox\u3001\u70ED\u70B9\u7F13\u5B58\u3002",
        "settings.sectionInboxFiles": "Inbox \u6587\u4EF6",
        "settings.sectionInboxFilesDesc": "0 Inbox/ \u4E2D\u5F85\u5904\u7406\u6587\u4EF6\u5217\u8868\u3002",
        "settings.sectionEngineState": "\u5F15\u64CE\u72B6\u6001",
        "settings.sectionEngineStateDesc": "Triage/Compile/Link \u5F15\u64CE\u72B6\u6001\u6307\u793A\u706F\u3002",
        "settings.sectionWeeklyChart": "\u5468\u5EA6\u56FE\u8868",
        "settings.sectionWeeklyChartDesc": "\u6BCF\u5468\u65E5\u8BB0\u6355\u83B7\u91CF\u7684\u67F1\u72B6\u56FE\u3002",
        "settings.generalTab": "\u901A\u7528",
        "settings.providerTab": "Provider Settings",
        // Notice messages for launch actions
        "notice.triage": "KOS-Triage \u5DF2\u542F\u52A8",
        "notice.compile": "KOS-Compile \u5DF2\u542F\u52A8",
        "notice.link": "KOS-Link \u5DF2\u542F\u52A8",
        "notice.query": "KOS-Query \u9762\u677F\u5DF2\u6253\u5F00",
        "notice.daily": "\u6B63\u5728\u521B\u5EFA Daily Open...",
        "notice.week": "\u6B63\u5728\u751F\u6210 Week-Review...",
        "notice.init": "\u6B63\u5728\u6267\u884C KOS-Init \u5065\u5EB7\u68C0\u67E5...",
        "notice.life": "Life+AI \u9762\u677F\u5DF2\u6253\u5F00",
        "notice.executing": "\u6267\u884C\u4E2D: {action}"
      },
      "en": {
        "app.name": "KOS Cockpit",
        "app.loading": "Loading KOS Cockpit...",
        "app.error": "Something went wrong loading the dashboard.",
        "app.retry": "Retry",
        "panel.home": "KOS Cockpit",
        "panel.chat": "KOS AI Chat",
        "panel.life": "Life+AI",
        "panel.pipeline": "Pipeline",
        "panel.garden": "Knowledge Garden",
        "panel.settings": "Settings",
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
        "project.new": "New Project",
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
        "engine.control": "Engine Control",
        "engine.statusReady": "Ready",
        "engine.statusNeedsWork": "Needs work",
        "engine.statusStandby": "Standby",
        "engine.empty": "No engine state data yet.",
        "weekly.title": "Weekly Record Distribution",
        "weekly.empty": "No daily records this week.",
        "weekly.barTooltip": "{date}: {count} items",
        "pipeline.inbox": "Inbox",
        "pipeline.triage": "Triage",
        "pipeline.raw": "Raw",
        "pipeline.compile": "Compile",
        "pipeline.wiki": "Knowledge",
        "pipeline.clickNavigate": "Click to navigate",
        "today.title": "Today's Focus",
        "today.tasks": "Tasks",
        "today.streak": "Streak",
        "today.today": "Today",
        "today.daily": "Daily",
        "today.weeklyTotal": "This week: {count} records",
        "today.journal": "Today's Journal: {count} items",
        "today.createNote": "Create daily note",
        "today.done": "Done",
        "today.pending": "Pending",
        "growth.title": "Knowledge Garden",
        "growth.todayJournal": "Today's Journal: {count} items",
        "growth.weeklyTotal": "This week: {count} records",
        "feed.title": "Activity Feed",
        "health.title": "Vault Health",
        "health.score": "{score}/100",
        "launch.title": "Quick Launch",
        "hot.title": "Hot Context",
        "hot.empty": "No hot context entries.",
        "life.title": "Life+AI",
        "life.subtitle": "Life \xB7 Learning \xB7 Work \u2014 Three Pillars",
        "life.pillarLife": "Life",
        "life.pillarLearning": "Learning",
        "life.pillarWork": "Work",
        "life.healthProgress": "Health Progress",
        "life.habitTracking": "Habit Tracking",
        "life.learningProgress": "Learning Progress",
        "life.skillBuilding": "Skill Building",
        "life.projectProgress": "Project Progress",
        "life.todayTasks": "Today's Tasks",
        "life.active": "active",
        "life.tasks": "tasks",
        "life.weeklyReport": "Weekly",
        "life.monthlyReport": "Monthly",
        "pipeline.title": "Pipeline",
        "pipeline.weeklyCaptures": "Weekly captures",
        "pipeline.inboxSection": "Inbox ({count})",
        "pipeline.rawSection": "Raw ({count})",
        "pipeline.throughputSection": "Throughput",
        "pipeline.tableTitle": "Title",
        "pipeline.tableDays": "Days",
        "pipeline.tableSource": "Source",
        "pipeline.tableWords": "Words",
        "pipeline.tablePriority": "Priority",
        "pipeline.noInbox": "No pending inbox items.",
        "pipeline.noRaw": "No files pending compilation.",
        "pipeline.currentWeek": "Week throughput: {total} records, {avg}/day",
        "garden.title": "Knowledge Garden",
        "garden.notes": "{count} notes",
        "garden.categoryProjects": "Projects",
        "garden.categoryAreas": "Areas",
        "garden.categoryResources": "Resources",
        "garden.categoryInbox": "Inbox",
        "garden.categoryPeriodic": "Periodic",
        "garden.categoryTotal": "Total",
        "garden.tableDirectory": "Directory",
        "garden.tableCount": "Count",
        "garden.categorySection": "Categories",
        "garden.recentUpdates": "Recent Updates",
        "garden.quickSearch": "Quick Search",
        "garden.searchPlaceholder": "Search knowledge base...",
        "garden.searchBtn": "Search",
        "garden.noRecent": "No recent activity.",
        "search.placeholder": "Search notes...",
        "search.btn": "Search",
        "tooltip.refresh": "Refresh",
        "tooltip.collapse": "Collapse",
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
        "provider.labelSettings": "{label} Settings",
        "provider.defaultEndpoint": "Default: {endpoint}",
        "provider.endpointDesc": "OpenAI-compatible endpoint URL",
        "provider.apiKeyDesc": "sk-... or API key",
        "provider.modelDesc": "Model identifier",
        "provider.presetModels": "{models}",
        "tab.dashboard": "Dashboard",
        "tab.life": "Life",
        "tab.pipeline": "Pipeline",
        "tab.garden": "Knowledge Garden",
        "tab.settings": "Settings",
        "settings.title": "Settings",
        "settings.desc": "Configure KOS Cockpit display and behavior",
        "settings.locale": "Interface Language",
        "settings.language": "Interface Language",
        "settings.languageDesc": "Select the cockpit display language. The UI will refresh immediately.",
        "settings.theme": "Theme",
        "settings.themeDark": "Dark",
        "settings.themeLight": "Light",
        "settings.themeSystem": "System",
        "settings.season": "Seasonal Accent",
        "settings.seasonSpring": "Spring",
        "settings.seasonSummer": "Summer",
        "settings.seasonAutumn": "Autumn",
        "settings.seasonWinter": "Winter",
        "settings.fontSize": "Font Size",
        "settings.fontSmall": "Small",
        "settings.fontMedium": "Medium",
        "settings.fontLarge": "Large",
        "settings.general": "General",
        "settings.autoOpen": "Auto-open KOS Cockpit on startup",
        "settings.autoOpenDesc": "Automatically open KOS Cockpit in the sidebar when Obsidian starts.",
        "settings.maxRecent": "Max Recent Items",
        "settings.maxRecentDesc": "Number of recently modified files to show (max 20).",
        "settings.maxTasks": "Max task items",
        "settings.maxTasksDesc": "Number of daily-note tasks to show (max 20).",
        "settings.maxInbox": "Max inbox items",
        "settings.maxInboxDesc": "Number of inbox file names to show (max 20).",
        "settings.about": "About",
        "settings.version": "Version",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem.",
        "settings.notesCount": "Notes: {count}",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        "settings.dashboard": "Dashboard Sections",
        "settings.dashboardDesc": "Toggle which sections appear on the cockpit dashboard.",
        "settings.dataLimits": "Data Limits",
        "settings.sectionTodayTasks": "Today's Tasks",
        "settings.sectionTodayTasksDesc": "Daily note task list and progress.",
        "settings.sectionProjects": "Active Projects",
        "settings.sectionProjectsDesc": "Project cards with priority and progress.",
        "settings.sectionVaultStats": "Vault Statistics",
        "settings.sectionVaultStatsDesc": "Total notes, active projects, inbox count.",
        "settings.sectionRecentActivity": "Recent Activity",
        "settings.sectionRecentActivityDesc": "Recently modified files.",
        "settings.sectionNav": "Navigation",
        "settings.sectionNavDesc": "Quick links to areas, inbox, hot cache.",
        "settings.sectionInboxFiles": "Inbox Files",
        "settings.sectionInboxFilesDesc": "List of pending files in 0 Inbox/.",
        "settings.sectionEngineState": "Engine State",
        "settings.sectionEngineStateDesc": "Triage/Compile/Link engine status chips.",
        "settings.sectionWeeklyChart": "Weekly Chart",
        "settings.sectionWeeklyChartDesc": "Bar chart of weekly daily-note captures.",
        "settings.generalTab": "General",
        "settings.providerTab": "Provider Settings",
        "notice.triage": "KOS-Triage launched",
        "notice.compile": "KOS-Compile launched",
        "notice.link": "KOS-Link started",
        "notice.query": "KOS-Query panel opened",
        "notice.daily": "Daily Open creating...",
        "notice.week": "Week-Review generating...",
        "notice.init": "KOS-Init health check...",
        "notice.life": "Life+AI panel opened",
        "notice.executing": "Executing: {action}"
      },
      "zh-tw": {
        "app.name": "KOS Cockpit",
        "app.loading": "\u6B63\u5728\u8F09\u5165 KOS Cockpit...",
        "app.error": "\u8F09\u5165\u5100\u8868\u677F\u6642\u767C\u751F\u932F\u8AA4\u3002",
        "app.retry": "\u91CD\u8A66",
        "panel.home": "KOS Cockpit",
        "panel.chat": "KOS AI Chat",
        "panel.life": "Life+AI",
        "panel.pipeline": "Pipeline",
        "panel.garden": "\u77E5\u8B58\u82B1\u5712",
        "panel.settings": "\u8A2D\u5B9A",
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
        "project.new": "\u65B0\u5EFA\u5C08\u6848",
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
        "engine.control": "\u5F15\u64CE\u63A7\u5236",
        "engine.statusReady": "\u5C31\u7DD2",
        "engine.statusNeedsWork": "\u9700\u8655\u7406",
        "engine.statusStandby": "\u5F85\u547D",
        "engine.empty": "\u66AB\u7121\u5F15\u64CE\u72C0\u614B\u8CC7\u6599\u3002",
        "weekly.title": "\u672C\u9031\u8A18\u9304\u5206\u4F48",
        "weekly.empty": "\u672C\u9031\u66AB\u7121\u65E5\u8A18\u8A18\u9304\u3002",
        "weekly.barTooltip": "{date}: {count} \u689D",
        "pipeline.inbox": "\u6536\u4EF6\u7BB1",
        "pipeline.triage": "\u5206\u985E",
        "pipeline.raw": "\u539F\u59CB",
        "pipeline.compile": "\u7DE8\u8B6F",
        "pipeline.wiki": "\u77E5\u8B58\u5EAB",
        "pipeline.clickNavigate": "\u9EDE\u64CA\u53EF\u5C0E\u822A",
        "today.title": "\u4ECA\u65E5\u7126\u9EDE",
        "today.tasks": "\u4EFB\u52D9",
        "today.streak": "\u9023\u7E8C",
        "today.today": "\u4ECA\u5929",
        "today.daily": "\u6BCF\u65E5",
        "today.weeklyTotal": "\u672C\u9031\u5171 {count} \u689D",
        "today.journal": "\u4ECA\u65E5\u65E5\u8A18: {count} \u689D",
        "today.createNote": "\u5EFA\u7ACB\u4ECA\u65E5\u7B46\u8A18",
        "today.done": "Done",
        "today.pending": "Pending",
        "growth.title": "\u77E5\u8B58\u82B1\u5712",
        "growth.todayJournal": "\u4ECA\u65E5\u65E5\u8A18: {count} \u689D",
        "growth.weeklyTotal": "\u672C\u9031\u5171 {count} \u689D\u8A18\u9304",
        "feed.title": "\u6D3B\u52D5\u6D41",
        "health.title": "\u77E5\u8B58\u5EAB\u5065\u5EB7",
        "health.score": "{score}/100",
        "launch.title": "\u5FEB\u901F\u555F\u52D5",
        "hot.title": "\u71B1\u9EDE\u52D5\u614B",
        "hot.empty": "\u66AB\u7121\u71B1\u9EDE\u52D5\u614B\u3002",
        "life.title": "Life+AI",
        "life.subtitle": "\u751F\u6D3B \xB7 \u5B78\u7FD2 \xB7 \u5DE5\u4F5C \u2014 \u4E09\u652F\u67F1\u9031\u671F\u7BA1\u7406",
        "life.pillarLife": "\u751F\u6D3B",
        "life.pillarLearning": "\u5B78\u7FD2",
        "life.pillarWork": "\u5DE5\u4F5C",
        "life.healthProgress": "\u5065\u5EB7\u9032\u5EA6",
        "life.habitTracking": "\u7FD2\u6163\u8FFD\u8E64",
        "life.learningProgress": "\u5B78\u7FD2\u9032\u5EA6",
        "life.skillBuilding": "\u6280\u80FD\u57F9\u990A",
        "life.projectProgress": "\u5C08\u6848\u9032\u5EA6",
        "life.todayTasks": "\u4ECA\u65E5\u4EFB\u52D9",
        "life.active": "active",
        "life.tasks": "tasks",
        "life.weeklyReport": "\u9031\u5831",
        "life.monthlyReport": "\u6708\u5831",
        "pipeline.title": "\u7BA1\u9053",
        "pipeline.weeklyCaptures": "\u672C\u9031\u6355\u7372",
        "pipeline.inboxSection": "Inbox ({count})",
        "pipeline.rawSection": "Raw ({count})",
        "pipeline.throughputSection": "Throughput",
        "pipeline.tableTitle": "\u6A19\u984C",
        "pipeline.tableDays": "\u5929\u6578",
        "pipeline.tableSource": "\u4F86\u6E90",
        "pipeline.tableWords": "\u5B57\u6578",
        "pipeline.tablePriority": "\u512A\u5148\u7D1A",
        "pipeline.noInbox": "\u66AB\u7121\u5F85\u8655\u7406 Inbox\u3002",
        "pipeline.noRaw": "\u66AB\u7121\u5F85\u7DE8\u8B6F\u6A94\u6848\u3002",
        "pipeline.currentWeek": "\u7576\u524D\u9031\u901A\u91CF: {total} \u689D\u8A18\u9304, \u65E5\u5747 {avg}",
        "garden.title": "\u77E5\u8B58\u82B1\u5712",
        "garden.notes": "{count} \u7BC7\u7B46\u8A18",
        "garden.categoryProjects": "\u5C08\u6848 (1 Projects)",
        "garden.categoryAreas": "\u9818\u57DF (2 Areas)",
        "garden.categoryResources": "\u8CC7\u6E90 (3 Resources)",
        "garden.categoryInbox": "Inbox",
        "garden.categoryPeriodic": "\u9031\u671F (Periodic)",
        "garden.categoryTotal": "\u5408\u8A08",
        "garden.tableDirectory": "\u76EE\u9304",
        "garden.tableCount": "\u7BC7\u6578",
        "garden.categorySection": "\u5206\u985E",
        "garden.recentUpdates": "\u6700\u8FD1\u66F4\u65B0",
        "garden.quickSearch": "\u5FEB\u901F\u67E5\u8A62",
        "garden.searchPlaceholder": "\u8F38\u5165\u95DC\u9375\u5B57\u641C\u5C0B\u77E5\u8B58\u5EAB...",
        "garden.searchBtn": "\u67E5\u8A62",
        "garden.noRecent": "\u66AB\u7121\u6700\u8FD1\u66F4\u65B0\u3002",
        "search.placeholder": "\u641C\u5C0B\u7B46\u8A18...",
        "search.btn": "\u641C\u5C0B",
        "tooltip.refresh": "\u91CD\u65B0\u6574\u7406",
        "tooltip.collapse": "\u6298\u758A",
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
        "provider.labelSettings": "{label} Settings",
        "provider.defaultEndpoint": "\u9810\u8A2D: {endpoint}",
        "provider.endpointDesc": "OpenAI \u76F8\u5BB9\u7684 API Endpoint URL",
        "provider.apiKeyDesc": "sk-... \u6216 API Key",
        "provider.modelDesc": "\u6A21\u578B\u8B58\u5225\u7B26",
        "provider.presetModels": "{models}",
        "tab.dashboard": "\u5100\u8868\u677F",
        "tab.life": "\u751F\u6D3B",
        "tab.pipeline": "\u7BA1\u9053",
        "tab.garden": "\u77E5\u8B58\u82B1\u5712",
        "tab.settings": "\u8A2D\u5B9A",
        "settings.title": "\u8A2D\u5B9A",
        "settings.desc": "\u914D\u7F6E KOS Cockpit \u7684\u986F\u793A\u8207\u884C\u70BA",
        "settings.locale": "\u4ECB\u9762\u8A9E\u8A00",
        "settings.language": "\u4ECB\u9762\u8A9E\u8A00",
        "settings.languageDesc": "\u9078\u64C7 Cockpit \u986F\u793A\u8A9E\u8A00\u3002\u5207\u63DB\u5F8C\u4ECB\u9762\u5C07\u7ACB\u5373\u91CD\u65B0\u6574\u7406\u3002",
        "settings.theme": "\u57FA\u672C\u4E3B\u984C",
        "settings.themeDark": "\u6697\u9ED1",
        "settings.themeLight": "\u660E\u4EAE",
        "settings.themeSystem": "\u8DDF\u96A8\u7CFB\u7D71",
        "settings.season": "\u5B63\u7BC0\u6027\u5F37\u8ABF\u8272",
        "settings.seasonSpring": "\u6625",
        "settings.seasonSummer": "\u590F",
        "settings.seasonAutumn": "\u79CB",
        "settings.seasonWinter": "\u51AC",
        "settings.fontSize": "\u5B57\u865F",
        "settings.fontSmall": "\u5C0F",
        "settings.fontMedium": "\u4E2D",
        "settings.fontLarge": "\u5927",
        "settings.general": "\u901A\u7528",
        "settings.autoOpen": "\u555F\u52D5\u6642\u81EA\u52D5\u958B\u555F KOS Cockpit",
        "settings.autoOpenDesc": "Obsidian \u555F\u52D5\u6642\u81EA\u52D5\u5728\u5074\u908A\u6B04\u958B\u555F KOS Cockpit\u3002",
        "settings.maxRecent": "\u6700\u5927\u6700\u8FD1\u6D3B\u52D5\u6578",
        "settings.maxRecentDesc": "\u986F\u793A\u6700\u8FD1\u4FEE\u6539\u6A94\u6848\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxTasks": "\u6700\u5927\u4EFB\u52D9\u6578",
        "settings.maxTasksDesc": "\u986F\u793A\u4ECA\u65E5\u4EFB\u52D9\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.maxInbox": "\u6700\u5927 Inbox \u6578",
        "settings.maxInboxDesc": "\u986F\u793A Inbox \u6A94\u540D\u7684\u6578\u91CF\uFF08\u6700\u591A 20\uFF09\u3002",
        "settings.about": "\u95DC\u65BC",
        "settings.version": "\u7248\u672C",
        "settings.versionDesc": "KOS Cockpit v0.2.0 \u2014 KOS_LLM-Wiki \u77E5\u8B58\u7BA1\u7406\u5100\u8868\u677F\u3002KOS \u751F\u614B\u7684\u4E00\u90E8\u5206\u3002",
        "settings.notesCount": "\u652F\u63F4\u689D\u76EE: {count} \u7BC7\u7B46\u8A18",
        "settings.langZhCN": "\u7B80\u4F53\u4E2D\u6587",
        "settings.langEn": "English",
        "settings.langZhTW": "\u7E41\u9AD4\u4E2D\u6587",
        "settings.dashboard": "\u5100\u8868\u677F\u5340\u584A",
        "settings.dashboardDesc": "\u63A7\u5236\u5100\u8868\u677F\u4E0A\u5404\u5340\u584A\u7684\u986F\u793A\u3002",
        "settings.dataLimits": "\u8CC7\u6599\u9650\u5236",
        "settings.sectionTodayTasks": "\u4ECA\u65E5\u4EFB\u52D9",
        "settings.sectionTodayTasksDesc": "\u6BCF\u65E5\u7B46\u8A18\u4EFB\u52D9\u5217\u8868\u8207\u9032\u5EA6\u3002",
        "settings.sectionProjects": "\u6D3B\u8E8D\u5C08\u6848",
        "settings.sectionProjectsDesc": "\u5C08\u6848\u5361\u7247\uFF0C\u542B\u512A\u5148\u7D1A\u8207\u9032\u5EA6\u3002",
        "settings.sectionVaultStats": "\u77E5\u8B58\u5EAB\u7D71\u8A08",
        "settings.sectionVaultStatsDesc": "\u7E3D\u7B46\u8A18\u6578\u3001\u6D3B\u8E8D\u5C08\u6848\u3001Inbox \u8A08\u6578\u3002",
        "settings.sectionRecentActivity": "\u6700\u8FD1\u6D3B\u52D5",
        "settings.sectionRecentActivityDesc": "\u6700\u8FD1\u4FEE\u6539\u7684\u6A94\u6848\u3002",
        "settings.sectionNav": "\u5C0E\u822A",
        "settings.sectionNavDesc": "\u5FEB\u901F\u9023\u7D50\u5230\u9818\u57DF\u3001Inbox\u3001\u71B1\u9EDE\u5FEB\u53D6\u3002",
        "settings.sectionInboxFiles": "Inbox \u6A94\u6848",
        "settings.sectionInboxFilesDesc": "0 Inbox/ \u4E2D\u5F85\u8655\u7406\u6A94\u6848\u5217\u8868\u3002",
        "settings.sectionEngineState": "\u5F15\u64CE\u72C0\u614B",
        "settings.sectionEngineStateDesc": "Triage/Compile/Link \u5F15\u64CE\u72C0\u614B\u6307\u793A\u71C8\u3002",
        "settings.sectionWeeklyChart": "\u9031\u5EA6\u5716\u8868",
        "settings.sectionWeeklyChartDesc": "\u6BCF\u9031\u65E5\u8A18\u6355\u7372\u91CF\u7684\u9577\u689D\u5716\u3002",
        "settings.generalTab": "\u901A\u7528",
        "settings.providerTab": "Provider \u8A2D\u5B9A",
        "notice.triage": "KOS-Triage \u5DF2\u555F\u52D5",
        "notice.compile": "KOS-Compile \u5DF2\u555F\u52D5",
        "notice.link": "KOS-Link \u5DF2\u555F\u52D5",
        "notice.query": "KOS-Query \u9762\u677F\u5DF2\u958B\u555F",
        "notice.daily": "\u6B63\u5728\u5EFA\u7ACB Daily Open...",
        "notice.week": "\u6B63\u5728\u751F\u6210 Week-Review...",
        "notice.init": "\u6B63\u5728\u57F7\u884C KOS-Init \u5065\u5EB7\u6AA2\u67E5...",
        "notice.life": "Life+AI \u9762\u677F\u5DF2\u958B\u555F",
        "notice.executing": "\u57F7\u884C\u4E2D: {action}"
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

// src/ai-chat/stream-parser.js
var require_stream_parser = __commonJS({
  "src/ai-chat/stream-parser.js"(exports2, module2) {
    async function parseStream(providerType, response, callbacks) {
      if (!response.ok) {
        var errBody = "";
        try {
          errBody = await response.text();
        } catch (_) {
        }
        var errMsg = "HTTP " + response.status + (errBody ? ": " + errBody.slice(0, 200) : "");
        if (callbacks.onError) callbacks.onError(new Error(errMsg));
        return;
      }
      var reader = response.body.getReader();
      var decoder = new TextDecoder();
      if (providerType === "anthropic") {
        await parseAnthropicSSE(reader, decoder, callbacks);
      } else {
        await parseOpenaiSSE(reader, decoder, callbacks);
      }
    }
    async function parseOpenaiSSE(reader, decoder, callbacks) {
      var buffer = "";
      var onToken = callbacks.onToken;
      var onReasoning = callbacks.onReasoning;
      var onDone = callbacks.onDone;
      while (true) {
        var result = await reader.read();
        if (result.done) break;
        buffer += decoder.decode(result.value, { stream: true });
        var lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (var i = 0; i < lines.length; i++) {
          var trimmed = lines[i].trim();
          if (!trimmed || trimmed === "data: [DONE]") continue;
          if (trimmed.indexOf("data: ") !== 0) continue;
          try {
            var json = JSON.parse(trimmed.slice(6));
            var choice = json.choices && json.choices[0];
            if (!choice) continue;
            var delta = choice.delta;
            if (!delta) continue;
            if (delta.content && onToken) {
              onToken(delta.content);
            }
            if (delta.reasoning_content && onReasoning) {
              onReasoning(delta.reasoning_content);
            }
            var finishReason = choice.finish_reason;
            if (finishReason && finishReason !== "null" && onDone) {
              onDone({ finishReason, usage: json.usage });
            }
          } catch (_) {
          }
        }
      }
      if (buffer.trim()) {
        var t = buffer.trim();
        if (t.indexOf("data: ") === 0 && t !== "data: [DONE]") {
          try {
            var json = JSON.parse(t.slice(6));
            var choice = json.choices && json.choices[0];
            if (choice && choice.delta && choice.delta.content && onToken) {
              onToken(choice.delta.content);
            }
          } catch (_) {
          }
        }
      }
      if (onDone) onDone({});
    }
    async function parseAnthropicSSE(reader, decoder, callbacks) {
      var buffer = "";
      var currentEvent = "";
      var onToken = callbacks.onToken;
      var onDone = callbacks.onDone;
      while (true) {
        var result = await reader.read();
        if (result.done) break;
        buffer += decoder.decode(result.value, { stream: true });
        var lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          if (line.indexOf("event: ") === 0) {
            currentEvent = line.slice(7).trim();
          } else if (line.indexOf("data: ") === 0) {
            var dataStr = line.slice(6).trim();
            if (!dataStr) continue;
            try {
              var data = JSON.parse(dataStr);
              switch (currentEvent) {
                case "content_block_start":
                  if (callbacks.onToolBlockStart) {
                    callbacks.onToolBlockStart({
                      index: data.index,
                      type: data.content_block && data.content_block.type,
                      name: data.content_block && data.content_block.name
                    });
                  }
                  break;
                case "content_block_delta":
                  if (data.delta && data.delta.type === "text_delta" && data.delta.text && onToken) {
                    onToken(data.delta.text);
                  }
                  if (data.delta && data.delta.type === "input_json_delta" && data.delta.partial_json && callbacks.onToolBlockUpdate) {
                    callbacks.onToolBlockUpdate({
                      index: data.index,
                      partial_json: data.delta.partial_json
                    });
                  }
                  break;
                case "content_block_stop":
                  if (callbacks.onToolBlockEnd) {
                    callbacks.onToolBlockEnd({ index: data.index });
                  }
                  break;
                case "message_delta":
                  if (onDone) {
                    onDone({
                      stopReason: data.delta && data.delta.stop_reason,
                      usage: data.usage
                    });
                  }
                  break;
                case "message_start":
                  break;
                case "ping":
                  break;
              }
            } catch (_) {
            }
          }
        }
      }
      if (onDone) onDone({});
    }
    module2.exports = { parseStream };
  }
});

// src/ai-chat/index.js
var require_ai_chat = __commonJS({
  "src/ai-chat/index.js"(exports2, module2) {
    var DEFAULT_SYSTEM_PROMPT = "You are a knowledge management assistant helping the user navigate their KOS vault. Respond concisely in the user's language.";
    var PROVIDER_TYPES = {
      claude: "anthropic",
      codex: "openai",
      opencode: "openai"
    };
    var _globalMsgCounter = 0;
    function genMsgId() {
      return "msg-" + Date.now() + "-" + (++_globalMsgCounter).toString(36);
    }
    function upgradeMessage(msg) {
      if (msg.blocks) return msg;
      var text = msg.content || msg.text || msg.summary || "";
      return {
        id: msg.id || genMsgId(),
        role: msg.role || "user",
        text,
        createdAt: typeof msg.createdAt === "number" ? msg.createdAt : Date.now(),
        linkedContextFiles: msg.linkedContextFiles || [],
        reasoning: msg.reasoning || "",
        meta: msg.meta || "",
        blocks: msg.blocks || [{ type: "stream-text", text }],
        pending: msg.pending === true,
        error: msg.error || ""
      };
    }
    function createMessage(role, text, contextFiles) {
      var msg = {
        id: genMsgId(),
        role,
        text: text || "",
        createdAt: Date.now(),
        linkedContextFiles: contextFiles || []
      };
      if (role === "assistant") {
        msg.reasoning = "";
        msg.meta = "";
        msg.blocks = [];
        msg.pending = false;
        msg.error = "";
      }
      return msg;
    }
    function buildEndpoint(baseUrl, providerType) {
      var url = String(baseUrl || "").trim();
      if (!url) {
        return providerType === "anthropic" ? "https://api.anthropic.com/v1/messages" : "https://api.openai.com/v1/chat/completions";
      }
      url = url.replace(/\/+$/, "");
      if (providerType === "anthropic") {
        if (!/\/messages$/i.test(url)) url += "/messages";
      } else {
        if (!/\/chat\/completions$/i.test(url)) url += "/chat/completions";
      }
      return url;
    }
    function buildRequest(providerType, model, messages, systemPrompt) {
      var apiMessages = messages.filter(function(m) {
        return m.role !== "system";
      }).map(function(m) {
        return { role: m.role, content: m.text || "" };
      });
      if (providerType === "anthropic") {
        return {
          body: {
            model,
            max_tokens: 4096,
            messages: apiMessages,
            stream: true
          },
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "",
            "anthropic-version": "2023-06-01"
          },
          systemField: systemPrompt || DEFAULT_SYSTEM_PROMPT
        };
      }
      return {
        body: {
          model,
          messages: [
            { role: "system", content: systemPrompt || DEFAULT_SYSTEM_PROMPT }
          ].concat(apiMessages),
          stream: true
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        },
        systemField: null
      };
    }
    async function resolveProviderConfig(settings, vaultAdapter) {
      if (!settings) return null;
      var pid = settings.activeProvider || "claude";
      var provider = settings.providers && settings.providers[pid];
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
      var providerIds = ["claude", "codex", "opencode"];
      for (var i = 0; i < providerIds.length; i++) {
        var id = providerIds[i];
        var p = settings.providers && settings.providers[id];
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
          var raw = await vaultAdapter.read(".obsidian/plugins/flownote/data.json");
          var config = JSON.parse(raw);
          var ap = config && config.settings && config.settings.agentProvider;
          if (ap && ap.enabled) {
            var direct = ap.direct || ap[ap.mode];
            if (direct) {
              var providerId = direct.providerId;
              var apiKeys = direct.apiKeys || {};
              var apiKey = apiKeys[providerId];
              var model = direct.model || "";
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
        } catch (_) {
        }
      }
      return null;
    }
    var AIChat = class {
      constructor(cfg) {
        this.cfg = cfg || {};
        this.providerType = PROVIDER_TYPES[this.cfg.providerId] || "openai";
        this.messages = [];
        this.abortController = null;
        this._addWelcome();
      }
      get _locale() {
        return this.cfg && this.cfg.locale || "zh-cn";
      }
      get isConfigured() {
        var c = this.cfg || {};
        return !!(c.baseUrl && c.apiKey && c.model);
      }
      get isStreaming() {
        return this.abortController !== null;
      }
      get providerLabel() {
        var c = this.cfg || {};
        return c.label || c.baseUrl || "Unknown";
      }
      get stats() {
        var user = 0, assistant = 0, toolCalls = 0;
        for (var i = 0; i < this.messages.length; i++) {
          var m = this.messages[i];
          if (m.role === "user") user++;
          if (m.role === "assistant") assistant++;
          if (m.blocks) {
            for (var j = 0; j < m.blocks.length; j++) {
              if (m.blocks[j].type === "tool") toolCalls++;
            }
          }
        }
        return { user, assistant, total: user + assistant, toolCalls };
      }
      upgradeAll() {
        for (var i = 0; i < this.messages.length; i++) {
          this.messages[i] = upgradeMessage(this.messages[i]);
        }
      }
      clear() {
        this.messages = [];
        this._addWelcome();
      }
      getHistory() {
        return this.messages.slice();
      }
      /**
       * Send a message to the AI provider.
       *
       * 8-step flow:
       *   1. Validate config
       *   2. Create user message + emit onUserMessage
       *   3. Create assistant placeholder + emit onAssistantCreated
       *   4. Build API request
       *   5. Send HTTP request
       *   6. Parse SSE stream (delegated to stream-parser)
       *   7. Finalize (update tool blocks, meta, pending)
       *   8. Handle errors
       *
       * @param {string} content - User message text
       * @param {object} [callbacks] - Event callbacks
       * @param {function} [callbacks.onUserMessage] - User message created
       * @param {function} [callbacks.onAssistantCreated] - Assistant placeholder created
       * @param {function} [callbacks.onToken] - Stream token received
       * @param {function} [callbacks.onBlockUpdate] - Tool block updated
       * @param {function} [callbacks.onReasoning] - Reasoning text received
       * @param {function} [callbacks.onDone] - Stream completed
       * @param {function} [callbacks.onError] - Error occurred
       * @returns {AbortSignal|null}
       */
      sendMessage(content, callbacks) {
        callbacks = callbacks || {};
        var onToken = callbacks.onToken;
        var onDone = callbacks.onDone;
        var onError = callbacks.onError;
        var c = this.cfg || {};
        if (!this.isConfigured) {
          if (onError) onError(new Error("AI not configured"));
          return null;
        }
        var userMsg = createMessage("user", String(content).trim());
        this.messages.push(userMsg);
        if (callbacks.onUserMessage) callbacks.onUserMessage(userMsg);
        var assistantMsg = createMessage("assistant", "");
        assistantMsg.pending = true;
        assistantMsg.meta = this.providerLabel + " \xB7 " + (c.model || "unknown");
        this.messages.push(assistantMsg);
        if (callbacks.onAssistantCreated) callbacks.onAssistantCreated(assistantMsg);
        var systemPrompt = (c.systemPrompt || "").trim() || DEFAULT_SYSTEM_PROMPT;
        var req = buildRequest(this.providerType, c.model, this.messages, systemPrompt);
        var payload = req.body;
        if (req.systemField) {
          payload.system = req.systemField;
        }
        var endpoint = buildEndpoint(c.baseUrl, this.providerType);
        var reqHeaders = {};
        for (var k in req.headers) {
          if (Object.prototype.hasOwnProperty.call(req.headers, k)) {
            reqHeaders[k] = req.headers[k];
          }
        }
        if (this.providerType === "anthropic") {
          reqHeaders["x-api-key"] = String(c.apiKey || "").trim();
        } else {
          reqHeaders["Authorization"] = "Bearer " + String(c.apiKey || "").trim();
        }
        this.abortController = new AbortController();
        var signal = this.abortController.signal;
        this._doFetch(endpoint, reqHeaders, payload, signal, assistantMsg, callbacks);
        return signal;
      }
      async _doFetch(endpoint, headers, payload, signal, assistantMsg, callbacks) {
        try {
          var response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
            signal
          });
          var { parseStream } = require_stream_parser();
          await parseStream(this.providerType, response, {
            onToken: (function(token) {
              assistantMsg.text += token;
              var textBlock = null;
              for (var i = 0; i < assistantMsg.blocks.length; i++) {
                if (assistantMsg.blocks[i].type === "stream-text") {
                  textBlock = assistantMsg.blocks[i];
                  break;
                }
              }
              if (!textBlock) {
                textBlock = { type: "stream-text", text: "" };
                assistantMsg.blocks.push(textBlock);
              }
              textBlock.text += token;
              if (callbacks.onToken) callbacks.onToken(token);
            }).bind(this),
            onReasoning: (function(text) {
              assistantMsg.reasoning += text;
              if (callbacks.onReasoning) callbacks.onReasoning(text);
            }).bind(this),
            onToolBlockStart: (function(blockInfo) {
              var block = {
                type: "tool",
                tool: blockInfo.name || blockInfo.type || "unknown",
                status: "running",
                summary: blockInfo.name || "",
                durationMs: 0,
                _startTime: Date.now()
              };
              var idx = assistantMsg.blocks.push(block) - 1;
              if (callbacks.onBlockUpdate) callbacks.onBlockUpdate(block, idx);
            }).bind(this),
            onToolBlockUpdate: (function(update) {
              var block = assistantMsg.blocks[update.index];
              if (block) {
                if (update.partial_json) {
                  if (!block._partialInput) block._partialInput = "";
                  block._partialInput += update.partial_json;
                }
                if (callbacks.onBlockUpdate) callbacks.onBlockUpdate(block, update.index);
              }
            }).bind(this),
            onToolBlockEnd: (function(blockEndInfo) {
              var block = assistantMsg.blocks[blockEndInfo.index];
              if (block && block.type === "tool") {
                block.status = "completed";
                if (block._startTime) {
                  block.durationMs = Date.now() - block._startTime;
                  delete block._startTime;
                }
                if (block._partialInput) {
                  try {
                    block.input = JSON.parse(block._partialInput);
                  } catch (_) {
                  }
                  delete block._partialInput;
                }
                if (callbacks.onBlockUpdate) callbacks.onBlockUpdate(block, blockEndInfo.index);
              }
            }).bind(this),
            onDone: (function() {
              this._finalizeMessage(assistantMsg, callbacks.onDone);
            }).bind(this),
            onError: (function(err) {
              this._handleError(assistantMsg, err, callbacks.onError);
            }).bind(this)
          });
        } catch (err) {
          if (err.name === "AbortError") return;
          this._handleError(assistantMsg, err, callbacks.onError);
        }
      }
      _finalizeMessage(assistantMsg, onDone) {
        assistantMsg.pending = false;
        for (var i = 0; i < assistantMsg.blocks.length; i++) {
          var b = assistantMsg.blocks[i];
          if (b.type === "tool" && b.status === "running") {
            b.status = "completed";
            if (b._startTime) {
              b.durationMs = Date.now() - b._startTime;
              delete b._startTime;
            }
            if (b._partialInput) {
              try {
                b.input = JSON.parse(b._partialInput);
              } catch (_) {
                b.input = b._partialInput;
              }
              delete b._partialInput;
            }
          }
        }
        var toolCount = 0;
        for (var i = 0; i < assistantMsg.blocks.length; i++) {
          if (assistantMsg.blocks[i].type === "tool") toolCount++;
        }
        assistantMsg.meta = this.providerLabel + " \xB7 " + (this.cfg.model || "unknown") + " \xB7 tools=" + toolCount;
        this.abortController = null;
        if (onDone) onDone();
      }
      _handleError(assistantMsg, err, onError) {
        assistantMsg.pending = false;
        assistantMsg.error = err.message || String(err);
        this.abortController = null;
        if (onError) onError(err);
      }
      abort() {
        if (this.abortController) {
          this.abortController.abort();
          this.abortController = null;
        }
      }
      _addWelcome() {
        var locale = this._locale;
        var welcomes = {
          "zh-cn": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u95EE\u6211\u5173\u4E8E\u77E5\u8BC6\u5E93\u3001\u9879\u76EE\u72B6\u6001\u6216\u4EFB\u4F55 KOS \u76F8\u5173\u7684\u95EE\u9898\u3002",
          "en": "Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.",
          "zh-tw": "\u4F60\u597D\uFF01\u6211\u662F KOS AI \u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u554F\u6211\u6709\u95DC\u77E5\u8B58\u5EAB\u3001\u5C08\u6848\u72C0\u614B\u6216\u4EFB\u4F55 KOS \u76F8\u95DC\u7684\u554F\u984C\u3002"
        };
        var text = welcomes[locale] || welcomes["zh-cn"];
        var msg = {
          id: genMsgId(),
          role: "assistant",
          text,
          createdAt: Date.now(),
          reasoning: "",
          meta: "",
          blocks: [{ type: "stream-text", text }],
          pending: false,
          error: "",
          linkedContextFiles: []
        };
        this.messages.push(msg);
      }
    };
    module2.exports = {
      AIChat,
      resolveProviderConfig,
      DEFAULT_SYSTEM_PROMPT,
      genMsgId,
      upgradeMessage,
      createMessage,
      buildEndpoint,
      buildRequest,
      PROVIDER_TYPES
    };
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
        this.aiChats = /* @__PURE__ */ new Map();
        this.chatTabs = [];
        this.activeChatTabId = null;
      }
      getViewType() {
        return VIEW_TYPE_COCKPIT2;
      }
      getDisplayText() {
        const names = { home: this._t("panel.home"), chat: this._t("panel.chat"), life: this._t("panel.life"), pipeline: this._t("panel.pipeline"), garden: this._t("panel.garden"), settings: this._t("panel.settings") };
        return names[this.activePanel] || this._t("panel.home");
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
        const retry = errBox.createEl("button", { cls: "kos-db-action-btn", text: "\u21BB " + this._t("app.retry") });
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
      // ========================= Font Size =========================
      _applyFontSize() {
        var size = this.settings?.fontSize || "medium";
        var root = this.contentEl;
        if (!root) return;
        root.removeClass("font-small");
        root.removeClass("font-medium");
        root.removeClass("font-large");
        root.addClass("font-" + size);
      }
      // ========================= Seasonal Theme =========================
      _applySeasonalTheme() {
        var season = this.settings?.seasonalTheme || "spring";
        var root = this.contentEl;
        if (!root) return;
        ["theme-spring", "theme-summer", "theme-autumn", "theme-winter"].forEach(function(c) {
          root.removeClass(c);
        });
        root.addClass("theme-" + season);
      }
      // ========================= Panel Router =========================
      renderPanel(data) {
        const container = this.contentEl;
        container.empty();
        const main = container.createEl("div", { cls: "kos-db" });
        this._applySeasonalTheme();
        this._applyFontSize();
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
      // ========================= Tab Bar =========================
      _renderTabBar(container) {
        const tabs = [
          { id: "home", icon: "\u{1F4CA}", label: this._t("tab.dashboard") },
          { id: "chat", icon: "\u{1F916}", label: this._t("ai.title") },
          { id: "kos-life", icon: "\u{1F9EC}", label: this._t("tab.life") },
          { id: "pipeline", icon: "\u{1F527}", label: this._t("tab.pipeline") },
          { id: "garden", icon: "\u{1F333}", label: this._t("tab.garden") },
          { id: "settings", icon: "\u2699\uFE0F", label: this._t("tab.settings") }
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
      // ========================= Home (Dashboard) =========================
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
        var searchInput = searchWrap.createEl("input", { cls: "kos-topbar-search-input", attr: { type: "text", placeholder: this._t("search.placeholder") } });
        searchInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter") {
            var val = searchInput.value.trim();
            if (val) {
              this.app.workspace.getLeaf("tab").setViewState({ type: "search", state: { query: val, matchCase: false } });
            }
          }
        }.bind(this));
        const actions = bar.createEl("div", { cls: "kos-topbar-actions" });
        const refreshBtn = actions.createEl("button", { cls: "kos-topbar-btn", text: "\u21BB", attr: { title: this._t("tooltip.refresh") } });
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
          { label: this._t("pipeline.inbox"), count: inboxCount, color: inboxCount === 0 ? "var(--kc-green)" : inboxCount <= 5 ? "var(--kc-amber)" : "var(--kc-red)", ikey: "inbox" },
          { label: this._t("pipeline.triage"), count: "-", color: "var(--kc-text-dim)", ikey: "triage" },
          { label: this._t("pipeline.raw"), count: compileCount, color: compileCount === 0 ? "var(--kc-green)" : "var(--kc-amber)", ikey: "compile" },
          { label: this._t("pipeline.compile"), count: "-", color: "var(--kc-text-dim)", ikey: "compile-run" },
          { label: this._t("pipeline.wiki"), count: wikiCount, color: wikiCount > 0 ? "var(--kc-green)" : "var(--kc-text-dim)", ikey: "wiki" }
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
          el.createEl("span", { text: s.label, attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px" } });
          if (idx < steps.length - 1) {
            flowRow.createEl("span", { text: String.fromCharCode(8594), attr: { style: "color:var(--kc-text-dim);font-size:var(--kc-fs-md);margin:0 2px;opacity:0.3" } });
          }
        }.bind(this));
        body.createEl("div", { attr: { style: "text-align:center;margin-top:6px;font-size:var(--kc-fs-xs);color:var(--kc-text-dim)" }, text: this._t("pipeline.clickNavigate") });
      }
      // Phase 1: Key Metrics Row
      _renderKeyMetrics(container, data) {
        var metrics = getKeyMetrics(data);
        var row = container.createEl("div", { attr: { style: "display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px" } });
        metrics.forEach(function(m) {
          var card = row.createEl("div", { cls: "kos-panel", attr: { style: "padding:12px 14px;text-align:center;border-left:3px solid " + m.color } });
          card.createEl("div", { attr: { style: "font-size:24px;font-weight:700;font-family:var(--kc-mono);color:" + m.color }, text: m.value });
          card.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px" }, text: m.label });
          var trendEl = card.createEl("div", { attr: { style: "margin-top:4px;font-size:var(--kc-fs-xs)" } });
          var trendIcon = m.trend === "up" ? String.fromCharCode(9650) : m.trend === "down" ? String.fromCharCode(9660) : String.fromCharCode(8212);
          var trendColor = m.trend === "up" ? "var(--kc-green)" : m.trend === "down" ? "var(--kc-red)" : "var(--kc-text-dim)";
          trendEl.innerHTML = '<span style="color:' + trendColor + '">' + trendIcon + '</span> <span style="color:var(--kc-text-dim)">' + m.trendLabel + "</span>";
        });
      }
      // Phase 1: Engine Control (clickable)
      _renderEngineControl(container, data) {
        var engines = data.engines || {};
        var panel = this._createPanel(container, this._t("engine.control"), "engines");
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
          topRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-base);font-weight:500;color:var(--kc-text-primary)" }, text: def.label });
          var statusColor = def.status === "done" ? "var(--kc-green)" : def.status === "warning" ? "var(--kc-amber)" : "var(--kc-text-dim)";
          topRow.createEl("span", { attr: { style: "width:6px;height:6px;border-radius:50%;background:" + statusColor + ";flex-shrink:0" } });
          var bottomRow = card.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center" } });
          var statusText = def.status === "done" ? this._t("engine.statusReady") : def.status === "warning" ? this._t("engine.statusNeedsWork") : this._t("engine.statusStandby");
          bottomRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);font-family:var(--kc-mono)" }, text: statusText });
          var btn = bottomRow.createEl("button", { attr: { style: "font-size:var(--kc-fs-xs);padding:2px 10px;border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-deep);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font)" }, text: String.fromCharCode(9654) });
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
        var panel = this._createPanel(container, this._t("today.title"), "today");
        var body = panel.body;
        var headerRow = body.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center;margin-bottom:8px" } });
        var tasks = data.today?.tasks || { done: 0, total: 0, completionRate: 0 };
        headerRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-md);font-weight:500;color:var(--kc-text-primary)" }, text: this._t("today.tasks") });
        headerRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-sm);font-family:var(--kc-mono);color:" + (tasks.completionRate >= 100 ? "var(--kc-green)" : "var(--kc-amber)") }, text: tasks.done + "/" + tasks.total + " (" + tasks.completionRate + "%)" });
        var taskList = body.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:3px;margin-bottom:10px" } });
        var items = (data.today?.taskItems || []).slice(0, 5);
        if (!data.today?.exists) {
          taskList.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic" }, text: this._t("task.dailyMissing") });
          var createBtn = body.createEl("button", { attr: { style: "margin-top:6px;padding:4px 12px;font-size:var(--kc-fs-sm);border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font)" }, text: this._t("today.createNote") });
          createBtn.addEventListener("click", function() {
            this.app.workspace.openLinkText("Periodic/" + moment().format("YYYY/MM/YYYY-MM-DD"), "", true);
          }.bind(this));
        } else if (items.length === 0) {
          taskList.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic" }, text: this._t("task.none") });
        } else {
          items.forEach(function(item) {
            var row = taskList.createEl("div", { attr: { style: "display:flex;align-items:flex-start;gap:5px;padding:2px 0;font-size:var(--kc-fs-base)" + (item.done ? ";opacity:0.5;text-decoration:line-through" : "") } });
            row.createEl("span", { text: item.done ? "[x]" : "[ ]", attr: { style: "flex-shrink:0;font-size:var(--kc-fs-sm);font-family:var(--kc-mono)" } });
            row.createEl("span", { text: item.text, attr: { style: "word-break:break-word;color:var(--kc-text-secondary)" } });
          });
        }
        var statsRow = body.createEl("div", { attr: { style: "display:flex;gap:12px;padding-top:8px;border-top:1px solid var(--kc-border)" } });
        var streak = calcStreak(data.weekly);
        var streakEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        streakEl.createEl("div", { attr: { style: "font-size:18px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-amber)" }, text: String(streak) + "d" });
        streakEl.createEl("div", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: this._t("today.streak") });
        var todayCount = getTodayCaptureCount(data.weekly);
        var weekAvg = (data.weekly || []).length > 0 ? Math.round((data.weekly || []).reduce(function(s, c) {
          return s + c.count;
        }, 0) / (data.weekly || []).length * 10) / 10 : 0;
        var captureEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        captureEl.createEl("div", { attr: { style: "font-size:18px;font-weight:700;font-family:var(--kc-mono);color:" + (todayCount >= weekAvg ? "var(--kc-green)" : "var(--kc-amber)") }, text: String(todayCount) });
        captureEl.createEl("div", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: this._t("today.today") });
        var dailyEl = statsRow.createEl("div", { attr: { style: "text-align:center;flex:1" } });
        dailyEl.createEl("div", { attr: { style: "font-size:var(--kc-fs-md);color:" + (data.today?.exists ? "var(--kc-green)" : "var(--kc-amber)") }, text: data.today?.exists ? this._t("today.done") : this._t("today.pending") });
        dailyEl.createEl("div", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-top:1px" }, text: this._t("today.daily") });
      }
      // Widget: Vault Health
      _renderHealthPanel(container, data) {
        const healthScore = calcHealthScore(data);
        const panel = this._createPanel(container, this._t("health.title"), "health");
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
        var panel = this._createPanel(container, this._t("project.title"), "projects");
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
        var panel = this._createPanel(container, this._t("growth.title"), "growth");
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
          { label: this._t("stats.totalNotes"), value: String(totalNotes) },
          { label: this._t("stats.totalNotes") + " (wiki)", value: String(resources) },
          { label: this._t("stats.activeProjects"), value: String(projectsCount) },
          { label: this._t("recent.title"), value: String(recentCount) }
        ];
        items.forEach(function(item) {
          var cell = grid.createEl("div", { attr: { style: "text-align:center;padding:4px" } });
          cell.createEl("div", { attr: { style: "font-size:16px;font-weight:700;font-family:var(--kc-mono);color:var(--kc-cyan)" }, text: item.value });
          cell.createEl("div", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:0.5px" }, text: item.label });
        });
      }
      // Widget: Quick Launch
      _renderLaunchPanel(container) {
        var panel = this._createPanel(container, this._t("launch.title"), "launch");
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
          var btn = grid.createEl("button", { attr: { style: "padding:7px 8px;font-size:var(--kc-fs-sm);border-radius:4px;border:1px solid var(--kc-border);background:var(--kc-bg-card);color:var(--kc-text-secondary);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s" + (a.cls ? ";border-left:2px solid var(--kc-" + a.cls + ")" : "") }, text: a.label });
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
          triage: this._t("notice.triage"),
          compile: this._t("notice.compile"),
          link: this._t("notice.link"),
          query: this._t("notice.query"),
          daily: this._t("notice.daily"),
          week: this._t("notice.week"),
          init: this._t("notice.init"),
          life: this._t("notice.life")
        };
        var msg = msgs[action] || this._t("notice.executing", { action });
        try {
          new Notice(msg);
        } catch (_) {
        }
        if (this.app && this.app.commands) {
          var cmdId = "obsidian-" + action;
          try {
            this.app.commands.executeCommandById(cmdId);
          } catch (_) {
          }
          try {
            this.app.commands.executeCommandById(action);
          } catch (_) {
          }
        }
        if (action === "kos-daily" || action === "daily") {
          try {
            var self = this;
            var m = this.app.moment ? this.app.moment() : moment();
            var dateStr = m.format("YYYY-MM-DD");
            var dailyRelPath = "Periodic/" + m.format("YYYY/MM/YYYY-MM-DD");
            var fullRelPath = dailyRelPath + ".md";
            var vault = this.app.vault;
            vault.adapter.exists(fullRelPath).then(function(exists) {
              if (!exists) {
                var tplPath = "_meta/system/templates/\u6BCF\u65E5\u7B14\u8BB0\u6A21\u677F.md";
                Promise.all([
                  vault.adapter.read(tplPath),
                  vault.adapter.list("0 Inbox/").catch(function() {
                    return { files: [] };
                  }),
                  vault.adapter.read("_meta/hot.md").catch(function() {
                    return "";
                  })
                ]).then(function(results) {
                  var tpl = results[0];
                  var inboxList = results[1];
                  var hotContent = results[2];
                  var wk = m.format("YYYY-WW");
                  var inboxCount = 0;
                  if (inboxList && inboxList.files) {
                    inboxCount = inboxList.files.filter(function(f) {
                      return f.endsWith(".md") && f.indexOf("_processed/") < 0;
                    }).length;
                  }
                  var recentCtx = "";
                  if (hotContent) {
                    var lines = hotContent.split("\n");
                    for (var hi = 0; hi < lines.length && hi < 15; hi++) {
                      var line = lines[hi].trim();
                      if (line && !line.startsWith("---") && !line.startsWith("#")) {
                        recentCtx += line.substring(0, 120) + "\n";
                      }
                    }
                  }
                  var content = tpl.replace(/\{\{date:YYYY-MM-DD\}\}/g, dateStr).replace(/\{\{date:YYYY-WW\}\}/g, wk);
                  if (inboxCount > 0) {
                    content = content.replace("- \u65E0\u5F85\u5904\u7406", "- " + inboxCount + " \u4E2A\u5F85\u5904\u7406\u6587\u4EF6\uFF08\u89C1 0 Inbox/\uFF09");
                  }
                  if (recentCtx) {
                    content = content.replace("## \u{1F4E5} Inbox", "## \u{1F504} \u6700\u8FD1\u4E0A\u4E0B\u6587\n> " + recentCtx.trim().split("\n").join("\n> ") + "\n\n## \u{1F4E5} Inbox");
                  }
                  vault.adapter.write(fullRelPath, content).then(function() {
                    self.app.workspace.openLinkText(dailyRelPath, "", true);
                  });
                }).catch(function() {
                  self.app.workspace.openLinkText(dailyRelPath, "", true);
                });
              } else {
                self.app.workspace.openLinkText(dailyRelPath, "", true);
              }
            });
          } catch (_) {
          }
        }
      }
      _renderFeedPanel(container, data) {
        var panel = this._createPanel(container, this._t("feed.title"), "feed");
        var body = panel.body;
        var list = body.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:2px;max-height:220px;overflow-y:auto" } });
        var recent = data.recent || [];
        if (recent.length === 0) {
          list.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic" }, text: this._t("recent.empty") });
          return;
        }
        recent.slice(0, 10).forEach(function(item) {
          var row = list.createEl("div", { attr: { style: "display:flex;gap:8px;padding:4px 6px;font-size:var(--kc-fs-sm);border-radius:4px;cursor:pointer;transition:all 0.15s" } });
          row.addEventListener("mouseenter", function() {
            row.style.background = "var(--kc-bg-card)";
          });
          row.addEventListener("mouseleave", function() {
            row.style.background = "transparent";
          });
          row.addEventListener("click", function() {
            this.app.workspace.openLinkText(item.path, "", true);
          }.bind(this));
          row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:var(--kc-fs-xs);color:var(--kc-text-dim);white-space:nowrap;min-width:40px" }, text: moment(item.mtime).format("MM-DD HH:mm") });
          row.createEl("span", { attr: { style: "color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" }, text: item.title || item.path });
        }.bind(this));
      }
      // Widget: Hot Context
      _renderHotPanel(container, data) {
        var panel = this._createPanel(container, this._t("hot.title"), "hot");
        var body = panel.body;
        var entries = (data.hot || []).slice(0, 4);
        if (entries.length === 0) {
          body.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);font-style:italic" }, text: this._t("hot.empty") });
          return;
        }
        entries.forEach(function(entry) {
          var row = body.createEl("div", { attr: { style: "padding:5px 8px;font-size:var(--kc-fs-sm);color:var(--kc-text-secondary);font-family:var(--kc-mono);border-left:2px solid var(--kc-amber-dim);margin-bottom:4px;border-radius:2px;background:var(--kc-bg-card)" } });
          row.createEl("span", { attr: { style: "color:var(--kc-amber);margin-right:6px" }, text: entry.date });
          row.createEl("span", { text: entry.summary });
        });
      }
      // ========================= Life+AI Panel =========================
      renderLifeView(container, data) {
        var engines = data.engines || {};
        var lifeEngine = engines.life || {};
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:16px 20px" } });
        var topRow = topBody.createEl("div", { attr: { style: "display:flex;align-items:center;gap:20px;flex-wrap:wrap" } });
        topRow.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F9EC} Life+AI" });
        topRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-md);color:var(--kc-text-secondary);flex:1" }, text: this._t("life.subtitle") });
        var statusDot = topRow.createEl("span", { attr: { style: "width:8px;height:8px;border-radius:50%;background:" + (lifeEngine.lastRun ? "var(--kc-green)" : "var(--kc-text-dim)") } });
        var grid = container.createEl("div", { attr: { style: "display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px" } });
        var pillars = [
          {
            icon: "\u{1F9D1}\u200D\u{1F33E}",
            label: this._t("life.pillarLife"),
            color: "var(--kc-green)",
            items: [
              { key: "health", label: this._t("life.healthProgress"), value: "\u2014" },
              { key: "habit", label: this._t("life.habitTracking"), value: "\u2014" }
            ]
          },
          {
            icon: "\u{1F4DA}",
            label: this._t("life.pillarLearning"),
            color: "var(--kc-cyan)",
            items: [
              { key: "learn", label: this._t("life.learningProgress"), value: "\u2014" },
              { key: "skill", label: this._t("life.skillBuilding"), value: "\u2014" }
            ]
          },
          {
            icon: "\u{1F4BB}",
            label: this._t("life.pillarWork"),
            color: "var(--kc-amber)",
            items: [
              { key: "projects", label: this._t("life.projectProgress"), value: String((data.projects || []).length) + " " + this._t("life.active") },
              { key: "tasks", label: this._t("life.todayTasks"), value: data.today?.tasks ? String(data.today.tasks.total) + " " + this._t("life.tasks") : "\u2014" }
            ]
          }
        ];
        pillars.forEach(function(p) {
          var card = grid.createEl("div", { cls: "kos-panel" });
          var header = card.createEl("div", { cls: "kos-panel-header" });
          header.createEl("span", { attr: { style: "font-size:var(--kc-fs-md);font-weight:600;color:" + p.color }, text: p.icon + " " + p.label });
          var body = card.createEl("div", { cls: "kos-panel-body" });
          p.items.forEach(function(item) {
            var row = body.createEl("div", { attr: { style: "display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:var(--kc-fs-base);border-bottom:1px solid rgba(240,180,41,0.04)" } });
            row.createEl("span", { attr: { style: "color:var(--kc-text-secondary)" }, text: item.label });
            row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:var(--kc-text-primary)" }, text: item.value });
          });
        });
        var actionsPanel = container.createEl("div", { cls: "kos-panel" });
        var actionsBody = actionsPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        var actionsRow = actionsBody.createEl("div", { attr: { style: "display:flex;gap:8px;flex-wrap:wrap" } });
        var lifeActions = [
          { label: "Life-Report", action: "life" },
          { label: "Life-Check", action: "life" },
          { label: "Life-Brief", action: "life" },
          { label: this._t("life.weeklyReport"), action: "week" },
          { label: this._t("life.monthlyReport"), action: "week" }
        ];
        lifeActions.forEach(function(a) {
          var btn = actionsRow.createEl("button", { attr: { style: "padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid var(--kc-amber-dim);background:var(--kc-amber-dim);color:var(--kc-amber);cursor:pointer;font-family:var(--kc-font);transition:all 0.2s" }, text: a.label });
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
      // ========================= Pipeline Panel =========================
      renderPipelineView(container, data) {
        var inboxItems = data.inboxDetail || [];
        var compileItems = data.compileQueue || [];
        var throughput = getThroughputStats(data.weekly);
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        var topRow = topBody.createEl("div", { attr: { style: "display:flex;gap:24px;align-items:center;flex-wrap:wrap" } });
        topRow.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F527} " + this._t("pipeline.title") });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-cyan)" }, text: String(throughput.total) + " rec" });
        topRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim)" }, text: this._t("pipeline.weeklyCaptures") });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-green)" }, text: String(inboxItems.length) });
        topRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim)" }, text: this._t("pipeline.inbox") });
        topRow.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:14px;font-weight:600;color:var(--kc-purple)" }, text: String(compileItems.length) });
        topRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim)" }, text: this._t("pipeline.raw") });
        var grid = container.createEl("div", { cls: "kos-pipeline-view" });
        var stage1 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage1.createEl("div", { attr: { style: "font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-amber);margin-bottom:10px" }, text: "\u{1F4E5} " + this._t("pipeline.inboxSection", { count: inboxItems.length }) });
        if (inboxItems.length === 0) {
          stage1.createEl("div", { cls: "kos-empty", text: this._t("pipeline.noInbox") });
        } else {
          var t2 = stage1.createEl("table", { cls: "kos-garden-table" });
          var thead = t2.createEl("thead");
          var thr = thead.createEl("tr");
          thr.createEl("th", { text: this._t("pipeline.tableTitle") });
          thr.createEl("th", { text: this._t("pipeline.tableDays") });
          thr.createEl("th", { text: this._t("pipeline.tableSource") });
          var tbody = t2.createEl("tbody");
          inboxItems.slice(0, 12).forEach(function(item) {
            var tr = tbody.createEl("tr");
            tr.createEl("td", { text: item.title.slice(0, 24), attr: { style: "cursor:pointer" } });
            tr.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            tr.createEl("td", { text: String(item.daysWaiting) + "d", attr: { style: "font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:" + (item.daysWaiting > 7 ? "var(--kc-red)" : item.daysWaiting > 3 ? "var(--kc-amber)" : "var(--kc-text-dim)") } });
            tr.createEl("td", { text: item.source, attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim)" } });
          }.bind(this));
        }
        var stage2 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage2.createEl("div", { attr: { style: "font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-cyan);margin-bottom:10px" }, text: "\u{1F4DD} " + this._t("pipeline.rawSection", { count: compileItems.length }) });
        if (compileItems.length === 0) {
          stage2.createEl("div", { cls: "kos-empty", text: this._t("pipeline.noRaw") });
        } else {
          var t22 = stage2.createEl("table", { cls: "kos-garden-table" });
          var thead2 = t22.createEl("thead");
          var thr2 = thead2.createEl("tr");
          thr2.createEl("th", { text: this._t("pipeline.tableTitle") });
          thr2.createEl("th", { text: this._t("pipeline.tableWords") });
          thr2.createEl("th", { text: this._t("pipeline.tablePriority") });
          var tbody2 = t22.createEl("tbody");
          compileItems.slice(0, 12).forEach(function(item) {
            var tr = tbody2.createEl("tr");
            tr.createEl("td", { text: item.title.slice(0, 24), attr: { style: "cursor:pointer" } });
            tr.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            tr.createEl("td", { text: String(item.wordCount), attr: { style: "font-family:var(--kc-mono);font-size:var(--kc-fs-sm);color:var(--kc-text-dim)" } });
            var priColor = item.priority === "high" ? "var(--kc-red)" : item.priority === "medium" ? "var(--kc-amber)" : "var(--kc-text-dim)";
            tr.createEl("td", { text: item.priority, attr: { style: "font-size:var(--kc-fs-sm);color:" + priColor } });
          }.bind(this));
        }
        var stage3 = grid.createEl("div", { cls: "kos-pipeline-stage" });
        stage3.createEl("div", { attr: { style: "font-size:var(--kc-fs-base);font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--kc-green);margin-bottom:10px" }, text: "\u{1F4C8} " + this._t("pipeline.throughputSection") });
        var barChart = stage3.createEl("div", { attr: { style: "display:flex;gap:3px;align-items:flex-end;height:80px;padding:8px 0" } });
        var weekly = data.weekly || [];
        var maxCount = Math.max(1, ...weekly.map(function(w) {
          return w.count;
        }));
        weekly.forEach(function(w) {
          var col = barChart.createEl("div", { attr: { style: "flex:1;display:flex;flex-direction:column;align-items:center;gap:2px" } });
          var bar = col.createEl("div", { attr: { style: "width:100%;height:" + Math.max(3, w.count / maxCount * 60) + "px;background:" + (w.isToday ? "var(--kc-amber)" : "var(--kc-amber-dim)") + ";border-radius:2px 2px 0 0;transition:height 0.3s;min-height:3px" } });
          col.createEl("span", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);font-family:var(--kc-mono)" }, text: w.weekday });
        });
        stage3.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-align:center;margin-top:6px" }, text: this._t("pipeline.currentWeek", { total: throughput.total, avg: throughput.avg }) });
      }
      // ========================= Knowledge Garden Panel =========================
      renderGardenView(container, data) {
        var stats = data.stats?.stats || {};
        var totalNotes = data.stats?.totalNotes || 0;
        var topPanel = container.createEl("div", { cls: "kos-panel", attr: { style: "margin-bottom:14px" } });
        var topBody = topPanel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:12px 14px" } });
        topBody.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u{1F333} " + this._t("garden.title") });
        topBody.createEl("span", { attr: { style: "margin-left:16px;font-size:var(--kc-fs-md);color:var(--kc-text-secondary)" }, text: this._t("garden.notes", { count: totalNotes }) });
        var grid = container.createEl("div", { cls: "kos-garden-view" });
        var catCard = grid.createEl("div", { cls: "kos-garden-card" });
        catCard.createEl("h3", { attr: { style: "font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F4C1} " + this._t("garden.categorySection") });
        var catTable = catCard.createEl("table", { cls: "kos-garden-table" });
        var catHead = catTable.createEl("thead");
        catHead.createEl("tr");
        catHead.querySelector("tr").innerHTML = "<th>" + this._t("garden.tableDirectory") + "</th><th>" + this._t("garden.tableCount") + "</th>";
        var catBody = catTable.createEl("tbody");
        var categories = [
          { label: "\u{1F4C1} " + this._t("garden.categoryProjects"), key: "projects", color: "var(--kc-amber)" },
          { label: "\u{1F3E0} " + this._t("garden.categoryAreas"), key: "areas", color: "var(--kc-cyan)" },
          { label: "\u{1F4DA} " + this._t("garden.categoryResources"), key: "resources", color: "var(--kc-green)" },
          { label: "\u{1F4E5} " + this._t("garden.categoryInbox"), key: "inbox", color: "var(--kc-orange)" },
          { label: "\u{1F4C5} " + this._t("garden.categoryPeriodic"), key: "periodic", color: "var(--kc-purple)" }
        ];
        categories.forEach(function(cat) {
          var tr = catBody.createEl("tr");
          tr.createEl("td", { attr: { style: "color:" + cat.color }, text: cat.label });
          tr.createEl("td", { text: String(stats[cat.key] || 0), attr: { style: "font-family:var(--kc-mono);text-align:right" } });
        });
        var totalRow = catBody.createEl("tr");
        var totalTd1 = totalRow.createEl("td", { attr: { style: "font-weight:600;color:var(--kc-text-primary)" }, text: this._t("garden.categoryTotal") });
        var totalTd2 = totalRow.createEl("td", { attr: { style: "font-family:var(--kc-mono);text-align:right;color:var(--kc-amber);font-weight:700" }, text: String(totalNotes) });
        var recentCard = grid.createEl("div", { cls: "kos-garden-card" });
        recentCard.createEl("h3", { attr: { style: "font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F331} " + this._t("garden.recentUpdates") });
        var recent = data.recent || [];
        if (recent.length === 0) {
          recentCard.createEl("div", { cls: "kos-empty", text: this._t("recent.empty") });
        } else {
          var rList = recentCard.createEl("div", { attr: { style: "display:flex;flex-direction:column;gap:2px;max-height:300px;overflow-y:auto" } });
          recent.slice(0, 15).forEach(function(item) {
            var row = rList.createEl("div", { attr: { style: "display:flex;gap:8px;padding:4px 6px;font-size:var(--kc-fs-sm);border-radius:4px;cursor:pointer;transition:all 0.15s" } });
            row.addEventListener("mouseenter", function() {
              row.style.background = "var(--kc-bg-card)";
            });
            row.addEventListener("mouseleave", function() {
              row.style.background = "transparent";
            });
            row.addEventListener("click", function() {
              this.app.workspace.openLinkText(item.path, "", true);
            }.bind(this));
            row.createEl("span", { attr: { style: "font-family:var(--kc-mono);font-size:var(--kc-fs-xs);color:var(--kc-text-dim);white-space:nowrap;min-width:36px" }, text: moment(item.mtime).format("MM-DD") });
            row.createEl("span", { attr: { style: "color:var(--kc-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" }, text: item.title || item.path });
          }.bind(this));
        }
        var searchCard = container.createEl("div", { cls: "kos-garden-card", attr: { style: "grid-column:1 / -1;margin-top:14px" } });
        searchCard.createEl("h3", { attr: { style: "font-size:var(--kc-fs-md);font-weight:600;color:var(--kc-text-secondary);text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0" }, text: "\u{1F50D} " + this._t("garden.quickSearch") });
        var searchRow = searchCard.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var searchInput = searchRow.createEl("input", { attr: { type: "text", placeholder: this._t("garden.searchPlaceholder"), style: "flex:1;padding:7px 14px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:6px;color:var(--kc-text-primary);font-family:var(--kc-font);font-size:var(--kc-fs-md);outline:none" } });
        var searchBtn = searchRow.createEl("button", { attr: { style: "padding:7px 18px;background:var(--kc-amber);border:none;border-radius:6px;color:var(--kc-bg-deep);font-size:var(--kc-fs-md);font-weight:600;cursor:pointer;font-family:var(--kc-font)" }, text: this._t("garden.searchBtn") });
        searchBtn.addEventListener("click", function() {
          var q = searchInput.value.trim();
          if (q) {
            this.app.workspace.getLeaf("tab").setViewState({ type: "search", state: { query: q, matchCase: false } });
          }
        }.bind(this));
        searchInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter") searchBtn.click();
        });
      }
      // ========================= Settings Panel (inline) =========================
      renderSettingsView(container, data) {
        var panel = container.createEl("div", { cls: "kos-panel kos-settings-view" });
        var body = panel.createEl("div", { cls: "kos-panel-body", attr: { style: "padding:20px" } });
        body.createEl("span", { attr: { style: "font-size:20px;font-weight:700;color:var(--kc-amber)" }, text: "\u2699\uFE0F " + this._t("settings.title") });
        body.createEl("div", { attr: { style: "font-size:var(--kc-fs-md);color:var(--kc-text-secondary);margin:8px 0 20px 0" }, text: this._t("settings.desc") });
        var sec1 = body.createEl("div", { cls: "kos-settings-section" });
        sec1.createEl("h3", { text: this._t("settings.locale") });
        var localeRow = sec1.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var locales = [
          { id: "zh-cn", label: this._t("settings.langZhCN") },
          { id: "en", label: this._t("settings.langEn") },
          { id: "zh-tw", label: this._t("settings.langZhTW") }
        ];
        var curLocale = this.settings?.locale || "zh-cn";
        locales.forEach(function(l) {
          var btn = localeRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid " + (l.id === curLocale ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (l.id === curLocale ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (l.id === curLocale ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: l.label
          });
          btn.addEventListener("click", function() {
            this.settings.locale = l.id;
            this.plugin.saveSettings();
          }.bind(this));
        }.bind(this));
        var secTheme = body.createEl("div", { cls: "kos-settings-section" });
        secTheme.createEl("h3", { text: this._t("settings.theme") });
        var curTheme = this.app.vault.getConfig("theme") || "obsidian";
        var baseRow = secTheme.createEl("div", { attr: { style: "display:flex;gap:8px;margin-bottom:8px" } });
        var baseThemes = [
          { id: "obsidian", label: this._t("settings.themeDark") },
          { id: "moonstone", label: this._t("settings.themeLight") },
          { id: "system", label: this._t("settings.themeSystem") }
        ];
        baseThemes.forEach(function(t2) {
          var btn = baseRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid " + (t2.id === curTheme ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (t2.id === curTheme ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (t2.id === curTheme ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
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
        var seasonLabel = secTheme.createEl("div", { attr: { style: "font-size:var(--kc-fs-sm);color:var(--kc-text-dim);text-transform:uppercase;letter-spacing:1px;margin:4px 0 6px 0" }, text: this._t("settings.season") });
        var seasonRow = secTheme.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var seasons = [
          { id: "spring", label: this._t("settings.seasonSpring"), icon: "\u{1F338}" },
          { id: "summer", label: this._t("settings.seasonSummer"), icon: "\u2600\uFE0F" },
          { id: "autumn", label: this._t("settings.seasonAutumn"), icon: "\u{1F342}" },
          { id: "winter", label: this._t("settings.seasonWinter"), icon: "\u2744\uFE0F" }
        ];
        seasons.forEach(function(s) {
          var btn = seasonRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid " + (s.id === curSeason ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (s.id === curSeason ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (s.id === curSeason ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: s.icon + " " + s.label
          });
          btn.addEventListener("click", function() {
            this.settings.seasonalTheme = s.id;
            this.plugin.saveData(this.plugin.settings);
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
        var secFont = body.createEl("div", { cls: "kos-settings-section" });
        secFont.createEl("h3", { text: this._t("settings.fontSize") });
        var fontSizeRow = secFont.createEl("div", { attr: { style: "display:flex;gap:8px" } });
        var fontSizes = [
          { id: "small", label: this._t("settings.fontSmall") },
          { id: "medium", label: this._t("settings.fontMedium") },
          { id: "large", label: this._t("settings.fontLarge") }
        ];
        var curFontSize = this.settings?.fontSize || "medium";
        fontSizes.forEach(function(s) {
          var btn = fontSizeRow.createEl("button", {
            attr: { style: "padding:6px 16px;font-size:var(--kc-fs-base);border-radius:4px;border:1px solid " + (s.id === curFontSize ? "var(--kc-amber)" : "var(--kc-border)") + ";background:" + (s.id === curFontSize ? "var(--kc-amber-dim)" : "var(--kc-bg-card)") + ";color:" + (s.id === curFontSize ? "var(--kc-amber)" : "var(--kc-text-secondary)") + ";cursor:pointer;font-family:var(--kc-font)" },
            text: s.label
          });
          btn.addEventListener("click", function() {
            this.settings.fontSize = s.id;
            this.plugin.saveData(this.plugin.settings);
            this._applyFontSize();
            this.collectData(this.app).then(function(d) {
              this.switchPanel("settings", d);
            }.bind(this));
          }.bind(this));
        }.bind(this));
        var sec2 = body.createEl("div", { cls: "kos-settings-section" });
        sec2.createEl("h3", { text: this._t("settings.general") });
        var autoRow = sec2.createEl("div", { attr: { style: "display:flex;align-items:center;gap:12px;margin-bottom:10px" } });
        var autoToggle = autoRow.createEl("input", { attr: { type: "checkbox", id: "kos-settings-autopen" } });
        autoToggle.checked = this.settings?.autoOpen || false;
        autoToggle.addEventListener("change", function() {
          this.settings.autoOpen = autoToggle.checked;
          this.plugin.saveSettings();
        }.bind(this));
        autoRow.createEl("label", { attr: { for: "kos-settings-autopen", style: "font-size:var(--kc-fs-md);color:var(--kc-text-secondary);cursor:pointer" }, text: this._t("settings.autoOpen") });
        var limitRow = sec2.createEl("div", { attr: { style: "display:flex;align-items:center;gap:12px;margin-bottom:10px" } });
        limitRow.createEl("span", { attr: { style: "font-size:var(--kc-fs-base);color:var(--kc-text-secondary);min-width:100px" }, text: this._t("settings.maxRecent") });
        var maxRecentInput = limitRow.createEl("input", { attr: { type: "number", min: "5", max: "30", value: String(this.settings?.maxRecent || 10), style: "width:60px;padding:4px 8px;background:var(--kc-bg-card);border:1px solid var(--kc-border);border-radius:4px;color:var(--kc-text-primary);font-family:var(--kc-mono);font-size:var(--kc-fs-base);outline:none" } });
        maxRecentInput.addEventListener("change", function() {
          this.settings.maxRecent = Math.max(5, Math.min(30, parseInt(maxRecentInput.value) || 10));
          this.plugin.saveSettings();
        }.bind(this));
        var sec3 = body.createEl("div", { cls: "kos-settings-section" });
        sec3.createEl("h3", { text: this._t("settings.about") });
        sec3.createEl("div", { attr: { style: "font-size:var(--kc-fs-base);color:var(--kc-text-dim);line-height:1.6" }, text: this._t("settings.versionDesc") });
        sec3.createEl("div", { attr: { style: "font-size:var(--kc-fs-xs);color:var(--kc-text-dim);margin-top:6px" }, text: this._t("settings.notesCount", { count: String(data.stats?.totalNotes || 0) }) });
      }
      // ========================= Shared Widget Helpers =========================
      _createPanel(container, titleHtml, widgetId) {
        var panel = container.createEl("div", { cls: "kos-panel" });
        var header = panel.createEl("div", { cls: "kos-panel-header" });
        var left = header.createEl("div", { cls: "kos-panel-header-left" });
        left.createEl("span", { cls: "kos-panel-title", text: titleHtml });
        var tools = header.createEl("div", { cls: "kos-panel-tools" });
        var collapseBtn = tools.createEl("button", { cls: "kos-panel-tool", attr: { title: this._t("tooltip.collapse") }, text: String.fromCharCode(9660) });
        collapseBtn.addEventListener("click", function() {
          panel.toggleClass("kos-panel-collapsed");
        });
        var body = panel.createEl("div", { cls: "kos-panel-body" });
        return { panel, body, header };
      }
      // ========================= Chat (Claudian-style) =========================
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
          this.plugin.saveData(this.plugin.settings);
          this.aiChat = null;
          this.renderLoading();
          this.refresh();
        }.bind(this));
        tLeft.createEl("span", { cls: "kos-ai-provider-label", text: this._t("ai.modelLabel") });
        var tRight = toolbar.createEl("div", { cls: "kos-ai-toolbar-right" });
        var statusPill = tRight.createEl("span", { cls: "kos-ai-status-pill" });
        var activeAiChat = this.activeChatTabId ? this.aiChats.get(this.activeChatTabId) : null;
        var isConfigured = activeAiChat && activeAiChat.isConfigured;
        statusPill.addClass(isConfigured ? "ok" : "warn");
        statusPill.textContent = isConfigured ? this._t("ai.connected") : this._t("ai.notConfigured");
        var clearBtn = tRight.createEl("button", { cls: "kos-ai-toolbar-btn", text: this._t("ai.clearBtn") });
        clearBtn.addEventListener("click", function() {
          var clearAi = this.activeChatTabId ? this.aiChats.get(this.activeChatTabId) : null;
          if (clearAi) {
            clearAi.clear();
            this._refreshChatMsgs();
          }
        }.bind(this));
        var msgWrapper = main.createEl("div", { cls: "kos-ai-msgs-wrapper" });
        var msgContainer = msgWrapper.createEl("div", { cls: "kos-ai-msgs" });
        var slashCommands = [
          { id: "kos-triage", icon: "\u{1F50D}", label: "Triage", desc: this._t("action.triage"), action: "launch", obsidianId: "obsidian-kos-triage" },
          { id: "kos-compile", icon: "\u2699\uFE0F", label: "Compile", desc: "Compile raw/", action: "launch", obsidianId: "obsidian-kos-compile" },
          { id: "kos-link", icon: "\u{1F517}", label: "Link", desc: "Link check", action: "launch", obsidianId: "obsidian-kos-link" },
          { id: "kos-daily", icon: "\u{1F4C5}", label: "Daily", desc: "Daily note", action: "launch", obsidianId: "obsidian-kos-daily" },
          { id: "kos-query", icon: "\u{1F50D}", label: "Query", desc: "Search vault", action: "launch", obsidianId: "obsidian-kos-query" },
          { id: "kos-project", icon: "\u{1F4C1}", label: "Project", desc: "New project", action: "launch", obsidianId: "obsidian-kos-project" },
          { id: "kos-week", icon: "\u{1F4CA}", label: "Week-R", desc: "Week review", action: "launch", obsidianId: "obsidian-kos-week" },
          { id: "kos-month", icon: "\u{1F4C8}", label: "Month-R", desc: "Month review", action: "launch", obsidianId: "obsidian-kos-month" },
          { id: "kos-init", icon: "\u{1F3E0}", label: "Init", desc: "Health check", action: "launch", obsidianId: "obsidian-kos-init" },
          { id: "kos-life", icon: "\u{1F9EC}", label: "Life+AI", desc: "Three pillars", action: "launch", obsidianId: "obsidian-kos-life" }
        ];
        var inputArea = main.createEl("div", { cls: "kos-ai-input-area" });
        var inputRow = inputArea.createEl("div", { cls: "kos-ai-input-row" });
        var input = inputRow.createEl("input", {
          cls: "kos-ai-input",
          attr: { type: "text", placeholder: this._t("ai.placeholder") }
        });
        var sendBtn = inputRow.createEl("button", { cls: "kos-ai-send", text: this._t("ai.sendBtn") });
        var slashMenu = inputArea.createEl("div", { cls: "kos-slash-menu", attr: { style: "display:none" } });
        var activeSlashIdx = -1;
        var isSlashOpen = false;
        var _pendingSlashCmd = null;
        function renderSlashMenu(query) {
          slashMenu.empty();
          var q = query.slice(1).toLowerCase();
          var matched = q ? slashCommands.filter(function(c) {
            return c.id.indexOf(q) === 0 || c.label.toLowerCase().indexOf(q) === 0;
          }) : slashCommands;
          if (matched.length === 0) {
            slashMenu.style.display = "none";
            isSlashOpen = false;
            return;
          }
          matched.forEach(function(cmd, idx) {
            var item = slashMenu.createEl("div", { cls: "kos-slash-item" + (idx === 0 ? " kos-slash-selected" : "") });
            item.createEl("span", { cls: "kos-slash-icon", text: cmd.icon });
            var info = item.createEl("div", { cls: "kos-slash-info" });
            info.createEl("span", { cls: "kos-slash-label", text: "/" + cmd.id });
            info.createEl("span", { cls: "kos-slash-desc", text: cmd.desc });
            item.addEventListener("mousedown", function(e) {
              e.preventDefault();
              executeSlashCommand(cmd);
            }.bind(this));
          }.bind(this));
          slashMenu.style.display = "block";
          isSlashOpen = true;
          activeSlashIdx = 0;
        }
        function executeSlashCommand(cmd) {
          slashMenu.style.display = "none";
          isSlashOpen = false;
          input.value = "/" + cmd.id + " ";
          input.focus();
          _pendingSlashCmd = cmd;
        }
        this._initChatTabs();
        this._renderChatMessages(msgContainer);
        var doSend = function() {
          var val = input.value.trim();
          if (!val) return;
          var pending = _pendingSlashCmd;
          if (pending) {
            _pendingSlashCmd = null;
            this._handleLaunch(pending.id);
          }
          this._sendChatMessage(val, msgContainer, input);
        }.bind(this);
        sendBtn.addEventListener("click", doSend);
        input.addEventListener("keydown", function(e) {
          if (isSlashOpen) {
            var items = slashMenu.querySelectorAll(".kos-slash-item");
            if (e.key === "ArrowDown") {
              e.preventDefault();
              activeSlashIdx = (activeSlashIdx + 1) % items.length;
              items.forEach(function(el, i) {
                el.toggleClass("kos-slash-selected", i === activeSlashIdx);
              });
              return;
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              activeSlashIdx = (activeSlashIdx - 1 + items.length) % items.length;
              items.forEach(function(el, i) {
                el.toggleClass("kos-slash-selected", i === activeSlashIdx);
              });
              return;
            }
            if (e.key === "Enter") {
              e.preventDefault();
              var sel = slashMenu.querySelector(".kos-slash-selected");
              if (sel) {
                var itemsArr = Array.prototype.slice.call(items);
                var idx = itemsArr.indexOf(sel);
                var q = input.value.slice(1).toLowerCase();
                var matched = q ? slashCommands.filter(function(c) {
                  return c.id.indexOf(q) === 0 || c.label.toLowerCase().indexOf(q) === 0;
                }) : slashCommands;
                if (idx >= 0 && idx < matched.length) executeSlashCommand.call(this, matched[idx]);
              }
              return;
            }
            if (e.key === "Escape") {
              slashMenu.style.display = "none";
              isSlashOpen = false;
              input.value = "";
              return;
            }
          }
          if (e.key === "Enter") {
            doSend();
          }
        }.bind(this));
        input.addEventListener("keyup", function(e) {
          var v = input.value;
          if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === "Escape") return;
          if (v.indexOf("/") === 0 && v.length > 0) {
            renderSlashMenu.call(this, v);
          } else if (isSlashOpen) {
            slashMenu.style.display = "none";
            isSlashOpen = false;
          }
        }.bind(this));
      }
      // ========================= Chat Welcome (Claudian-style) =========================
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
      // ========================= Shared AI Chat Logic =========================
      _initAiChat(tabId) {
        tabId = tabId || this.activeChatTabId;
        if (!tabId) return null;
        if (this.aiChats.has(tabId)) return this.aiChats.get(tabId);
        if (this._initLocks && this._initLocks[tabId]) return null;
        if (!this._initLocks) this._initLocks = {};
        this._initLocks[tabId] = true;
        var self = this;
        resolveProviderConfig(self.settings, self.app.vault.adapter).then(function(cfg) {
          if (cfg) {
            var chat = new AIChat({
              locale: self.settings?.locale || "zh-cn",
              providerId: cfg.providerId,
              baseUrl: cfg.baseUrl,
              apiKey: cfg.apiKey,
              model: cfg.model,
              systemPrompt: cfg.systemPrompt || self.settings?.aiSystemPrompt || "",
              label: cfg.label
            });
            self.aiChats.set(tabId, chat);
            if (self._initLocks) delete self._initLocks[tabId];
            if (!self.aiChat) self.aiChat = chat;
            self._refreshChatMsgs();
            var pill = self.contentEl.querySelector(".kos-ai-status-pill");
            if (pill) {
              pill.textContent = self._t("ai.connected");
              pill.removeClass("warn");
              pill.addClass("ok");
            }
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
      _renderUserMessage(container, msg) {
        var bubble = container.createEl("div", { cls: "kos-ai-msg kos-ai-msg-user" });
        bubble.createEl("div", { cls: "kos-ai-msg-text", text: msg.text || "" });
        if (msg.linkedContextFiles && msg.linkedContextFiles.length > 0) {
          var filesEl = bubble.createEl("div", { cls: "kos-ai-msg-files" });
          var maxChips = Math.min(msg.linkedContextFiles.length, 3);
          for (var fi = 0; fi < maxChips; fi++) {
            var fpath = msg.linkedContextFiles[fi];
            (function(fp) {
              var chip = filesEl.createEl("span", { cls: "kos-ai-msg-file-chip", text: fp.split("/").pop() });
              chip.title = fp;
              chip.addEventListener("click", function() {
                this.app.workspace.openLinkText(fp, "", true);
              }.bind(this));
            }).bind(this)(fpath);
          }
          if (msg.linkedContextFiles.length > 3) {
            filesEl.createEl("span", { cls: "kos-ai-msg-file-chip", text: "+" + (msg.linkedContextFiles.length - 3) });
          }
        }
      }
      _renderAssistantMessage(container, msg) {
        var bubble = container.createEl("div", {
          cls: "kos-ai-msg kos-ai-msg-assistant" + (msg.pending && !msg.text ? " kos-ai-thinking" : "")
        });
        if (msg.text) {
          bubble.createEl("div", { cls: "kos-ai-msg-text", text: msg.text });
        } else if (msg.pending) {
          bubble.createEl("div", { cls: "kos-ai-msg-text", text: this._t("ai.thinking") });
        }
        if (msg.reasoning) {
          this._renderReasoningSection(bubble, msg.reasoning);
        }
        if (msg.blocks && msg.blocks.length > 0) {
          this._renderToolSection(bubble, msg.blocks);
        }
        if (msg.meta && !msg.pending) {
          bubble.createEl("div", { cls: "kos-ai-msg-meta", text: msg.meta });
        }
        if (msg.text && !msg.pending && msg.meta) {
          var msgText = msg.text;
          var copyBtn = bubble.createEl("button", { cls: "kos-ai-copy-btn", text: this._t("ai.copy") });
          copyBtn.addEventListener("click", async function() {
            try {
              await navigator.clipboard.writeText(msgText);
              copyBtn.textContent = this._t("ai.copied");
              setTimeout(function() {
                copyBtn.textContent = this._t("ai.copy");
              }, 2e3);
            } catch {
            }
          }.bind(this));
        }
        if (msg.error) {
          var errRow = bubble.createEl("div", { cls: "kos-ai-tool-row", attr: { style: "margin-top:6px;color:var(--kc-red)" } });
          errRow.createEl("span", { text: "\u2717 Error: " + msg.error });
        }
      }
      _renderReasoningSection(bubble, reasoning) {
        var section = bubble.createEl("div", { cls: "kos-ai-msg-reasoning" });
        var toggle = section.createEl("button", {
          cls: "kos-ai-reasoning-toggle",
          text: "\u{1F9D0} Show thinking"
        });
        var content = section.createEl("div", {
          cls: "kos-ai-reasoning-content",
          text: reasoning,
          attr: { style: "display:none" }
        });
        var isVisible = false;
        toggle.addEventListener("click", function() {
          isVisible = !isVisible;
          content.style.display = isVisible ? "block" : "none";
          toggle.textContent = isVisible ? "\u{1F9D0} Hide thinking" : "\u{1F9D0} Show thinking";
        });
      }
      _renderToolSection(bubble, blocks) {
        var visibleBlocks = [];
        for (var bi = 0; bi < blocks.length; bi++) {
          if (!blocks[bi].internal) visibleBlocks.push(blocks[bi]);
        }
        if (visibleBlocks.length === 0) return;
        var section = bubble.createEl("div", { cls: "kos-ai-msg-tool-section" });
        var header = section.createEl("div", { cls: "kos-ai-tool-header" });
        var completed = 0, total = 0;
        for (var bi = 0; bi < visibleBlocks.length; bi++) {
          if (visibleBlocks[bi].type === "tool") {
            total++;
            if (visibleBlocks[bi].status === "completed") completed++;
          }
        }
        header.textContent = "\u26A1 Tools (" + completed + "/" + total + ")";
        var list = section.createEl("div", { cls: "kos-ai-tool-list" });
        var isCollapsed = false;
        header.addEventListener("click", function() {
          isCollapsed = !isCollapsed;
          list.style.display = isCollapsed ? "none" : "block";
        });
        for (var bi = 0; bi < visibleBlocks.length; bi++) {
          var block = visibleBlocks[bi];
          if (block.type === "stream-text") {
            if (!block.text) continue;
            var row = list.createEl("div", { cls: "kos-ai-tool-row" });
            row.createEl("span", { cls: "kos-ai-tool-icon", text: "\u25B6" });
            row.createEl("span", { cls: "kos-ai-tool-name", text: "stream-text" });
            var tokenCount = Math.max(1, Math.round(block.text.length / 4));
            row.createEl("span", { cls: "kos-ai-tool-summary", text: tokenCount + " tokens" });
            continue;
          }
          if (block.type === "tool") {
            var row = list.createEl("div", { cls: "kos-ai-tool-row" });
            var icon, color;
            if (block.status === "completed") {
              icon = "\u2713";
              color = "var(--kc-green)";
            } else if (block.status === "error") {
              icon = "\u2717";
              color = "var(--kc-red)";
            } else if (block.status === "running") {
              icon = "\u25CB";
              color = "var(--kc-amber)";
            } else {
              icon = "?";
              color = "var(--kc-text-dim)";
            }
            row.createEl("span", { cls: "kos-ai-tool-icon", text: icon, attr: { style: "color:" + color } });
            row.createEl("span", { cls: "kos-ai-tool-name", text: block.tool || "tool" });
            if (block.summary) {
              row.createEl("span", { cls: "kos-ai-tool-summary", text: block.summary.slice(0, 40) });
            }
            if (block.durationMs != null) {
              var durText = block.durationMs >= 1e3 ? (block.durationMs / 1e3).toFixed(1) + "s" : block.durationMs + "ms";
              row.createEl("span", { cls: "kos-ai-tool-duration", text: durText });
            }
            if (block.detail || block.input || block.output) {
              var detailExpanded = false;
              row.addEventListener("click", function() {
                detailExpanded = !detailExpanded;
                var detailEl = row.querySelector(".kos-ai-tool-detail");
                if (!detailEl) {
                  detailEl = row.createEl("div", { cls: "kos-ai-tool-detail" });
                  if (block.input) {
                    detailEl.createEl("div", { text: "Input:", cls: "kos-ai-tool-detail-label" });
                    detailEl.createEl("pre", { text: JSON.stringify(block.input, null, 2) });
                  }
                  if (block.output) {
                    detailEl.createEl("div", { text: "Output:", cls: "kos-ai-tool-detail-label" });
                    detailEl.createEl("pre", { text: String(block.output).slice(0, 1e3) });
                  }
                  if (block.detail && !block.input && !block.output) {
                    detailEl.createEl("pre", { text: block.detail });
                  }
                }
                detailEl.style.display = detailExpanded ? "block" : "none";
              });
            }
          }
        }
      }
      // W8: Render messages for current active tab
      _renderChatMessages(container) {
        container.empty();
        var activeAiChat = this.activeChatTabId ? this.aiChats.get(this.activeChatTabId) : null;
        var msgs = activeAiChat ? activeAiChat.getHistory() : [];
        if (!activeAiChat || !activeAiChat.isConfigured) {
          container.createEl("div", { text: this._t("ai.needConfig"), cls: "kos-ai-need-config" });
          return;
        }
        var userCount = 0;
        for (var mi = 0; mi < msgs.length; mi++) {
          if (msgs[mi].role === "user") userCount++;
        }
        if (userCount === 0) {
          this._renderChatWelcome(container);
          return;
        }
        var startIdx = Math.max(0, msgs.length - 50);
        var rendered = 0;
        for (var mi = startIdx; mi < msgs.length; mi++) {
          var msg = msgs[mi];
          if (msg.role === "assistant" && !msg.meta && userCount > 0) continue;
          if (msg.role === "user") {
            this._renderUserMessage(container, msg);
            rendered++;
          } else if (msg.role === "assistant") {
            this._renderAssistantMessage(container, msg);
            rendered++;
          }
        }
        container.scrollTop = container.scrollHeight;
      }
      _sendChatMessage(text, msgContainer, inputEl) {
        var chat = this.activeChatTabId ? this.aiChats.get(this.activeChatTabId) : this.aiChat;
        if (!chat || !chat.isConfigured) {
          try {
            new Notice(this._t("ai.needConfig"));
          } catch (_) {
          }
          return;
        }
        inputEl.disabled = true;
        inputEl.value = "";
        chat.sendMessage(text, {
          onUserMessage: (function(msg) {
            this._renderChatMessages(msgContainer);
          }).bind(this),
          onAssistantCreated: (function(msg) {
            this._renderChatMessages(msgContainer);
          }).bind(this),
          onToken: (function(token) {
            this._renderChatMessages(msgContainer);
          }).bind(this),
          onBlockUpdate: (function(block, index) {
            this._renderChatMessages(msgContainer);
          }).bind(this),
          onReasoning: (function(text2) {
            this._renderChatMessages(msgContainer);
          }).bind(this),
          onDone: (function() {
            this._renderChatMessages(msgContainer);
            inputEl.disabled = false;
            inputEl.focus();
            msgContainer.scrollTop = msgContainer.scrollHeight;
          }).bind(this),
          onError: (function(err) {
            this._renderChatMessages(msgContainer);
            inputEl.disabled = false;
            msgContainer.scrollTop = msgContainer.scrollHeight;
          }).bind(this)
        });
      }
      // W8: Multi-Chat Tab Management
      // ============================================================
      _genChatTabId() {
        return "tab-" + Date.now().toString(36) + "-" + (Math.random() * 46656 | 0).toString(36);
      }
      _initChatTabs() {
        var saved = this.settings?.tabManagerState;
        if (saved && saved.tabs && saved.tabs.length > 0) {
          this.chatTabs = saved.tabs.map(function(t2) {
            return { id: t2.id, title: t2.title, createdAt: t2.createdAt || Date.now() };
          });
          this.activeChatTabId = saved.activeTabId || this.chatTabs[0].id;
        } else {
          var defaultId = this._genChatTabId();
          this.chatTabs = [{ id: defaultId, title: this._t("ai.defaultTab"), createdAt: Date.now() }];
          this.activeChatTabId = defaultId;
        }
        var found = false;
        for (var i = 0; i < this.chatTabs.length; i++) {
          if (this.chatTabs[i].id === this.activeChatTabId) {
            found = true;
            break;
          }
        }
        if (!found && this.chatTabs.length > 0) this.activeChatTabId = this.chatTabs[0].id;
        if (!this.activeChatTabId && this.chatTabs.length === 0) {
          var id = this._genChatTabId();
          this.chatTabs.push({ id, title: this._t("ai.defaultTab"), createdAt: Date.now() });
          this.activeChatTabId = id;
        }
        this._initAiChat(this.activeChatTabId);
      }
      _saveChatTabState() {
        if (!this.plugin) return;
        var state = {
          tabs: this.chatTabs.map(function(t2) {
            return { id: t2.id, title: t2.title, createdAt: t2.createdAt };
          }),
          activeTabId: this.activeChatTabId
        };
        if (!this.plugin.settings.tabManagerState) this.plugin.settings.tabManagerState = {};
        this.plugin.settings.tabManagerState.tabs = state.tabs;
        this.plugin.settings.tabManagerState.activeTabId = state.activeTabId;
        this.plugin.saveData(this.plugin.settings);
      }
      _renderChatTabBar(container) {
        var existing = container.querySelector(".kos-ai-chat-tabbar");
        if (existing) existing.remove();
        var bar = container.createEl("div", { cls: "kos-ai-chat-tabbar" });
        for (var i = 0; i < this.chatTabs.length; i++) {
          (function(self, tab, isActive, tabId, tabTitle) {
            var item = bar.createEl("div", {
              cls: "kos-ai-chat-tab" + (isActive ? " active" : "")
            });
            var titleSpan = item.createEl("span", {
              cls: "kos-ai-chat-tab-title",
              text: tabTitle
            });
            if (self.chatTabs.length > 1) {
              var closeBtn = item.createEl("span", {
                cls: "kos-ai-chat-tab-close",
                text: "\xD7"
              });
              closeBtn.addEventListener("click", function(e) {
                e.stopPropagation();
                self._closeChatTab(tabId);
              });
            }
            item.addEventListener("click", function() {
              self._switchChatTab(tabId);
            });
            titleSpan.addEventListener("dblclick", function() {
              var input = document.createElement("input");
              input.type = "text";
              input.value = tabTitle;
              input.className = "kos-ai-chat-tab-rename-input";
              input.style.cssText = "width:80px;background:var(--kc-bg-card);border:1px solid var(--kc-border-focus);border-radius:4px;color:var(--kc-text-primary);font-size:12px;padding:2px 6px;outline:none;font-family:var(--kc-font)";
              titleSpan.textContent = "";
              titleSpan.appendChild(input);
              input.focus();
              input.select();
              input.addEventListener("blur", function() {
                var newTitle = input.value.trim() || tabTitle;
                titleSpan.textContent = newTitle;
                for (var j = 0; j < self.chatTabs.length; j++) {
                  if (self.chatTabs[j].id === tabId) {
                    self.chatTabs[j].title = newTitle;
                    break;
                  }
                }
                self._saveChatTabState();
              });
              input.addEventListener("keydown", function(e) {
                if (e.key === "Enter") {
                  input.blur();
                }
                if (e.key === "Escape") {
                  titleSpan.textContent = tabTitle;
                  input.blur();
                }
              });
            });
          })(this, this.chatTabs[i], this.chatTabs[i].id === this.activeChatTabId, this.chatTabs[i].id, this.chatTabs[i].title);
        }
        var newBtn = bar.createEl("button", {
          cls: "kos-ai-chat-tab-new",
          text: "+",
          attr: { title: this._t("ai.newTab") }
        });
        newBtn.addEventListener("click", function() {
          this._createChatTab();
        }.bind(this));
      }
      _switchChatTab(tabId) {
        if (tabId === this.activeChatTabId) return;
        var inputEl = this.contentEl.querySelector(".kos-ai-input");
        this.activeChatTabId = tabId;
        this._initAiChat(tabId);
        var chatPanel = this.contentEl.querySelector(".kos-ai-chat");
        if (chatPanel) this._renderChatTabBar(chatPanel);
        var msgContainer = this.contentEl.querySelector(".kos-ai-msgs");
        if (msgContainer) this._renderChatMessages(msgContainer);
        if (inputEl) inputEl.value = "";
        this._saveChatTabState();
      }
      _createChatTab(title) {
        title = title || this._t("ai.newTab");
        var id = this._genChatTabId();
        this.chatTabs.push({ id, title, createdAt: Date.now() });
        this._switchChatTab(id);
        var chatPanel = this.contentEl.querySelector(".kos-ai-chat");
        if (chatPanel) this._renderChatTabBar(chatPanel);
        this._saveChatTabState();
      }
      _closeChatTab(tabId) {
        if (this.chatTabs.length <= 1) return;
        var idx = -1;
        for (var i = 0; i < this.chatTabs.length; i++) {
          if (this.chatTabs[i].id === tabId) {
            idx = i;
            break;
          }
        }
        if (idx < 0) return;
        var nextTabId = null;
        if (tabId === this.activeChatTabId) {
          var nextIdx = idx > 0 ? idx - 1 : 0;
          if (nextIdx < this.chatTabs.length) nextTabId = this.chatTabs[nextIdx].id;
        }
        if (this.aiChats.has(tabId)) {
          var chat = this.aiChats.get(tabId);
          if (chat && chat.isStreaming) chat.abort();
          this.aiChats.delete(tabId);
        }
        this.chatTabs.splice(idx, 1);
        if (nextTabId) this._switchChatTab(nextTabId);
        var chatPanel = this.contentEl.querySelector(".kos-ai-chat");
        if (chatPanel) this._renderChatTabBar(chatPanel);
        this._saveChatTabState();
      }
      getOrCreateAIChat(tabId) {
        tabId = tabId || this.activeChatTabId;
        if (!tabId) return null;
        if (this.aiChats.has(tabId)) return this.aiChats.get(tabId);
        this._initAiChat(tabId);
        return null;
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
      fontSize: "medium",
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
      maxInboxItems: 6,
      // Tab manager state (multi-chat tabs)
      tabManagerState: {
        tabs: [
          { id: "tab-default", title: "Chat 1", createdAt: Date.now() }
        ],
        activeTabId: "tab-default"
      }
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
        container.createEl("h3", { text: this._t("settings.generalTab") });
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
          { key: "showTodayTasks", name: this._t("settings.sectionTodayTasks"), desc: this._t("settings.sectionTodayTasksDesc") },
          { key: "showProjectCards", name: this._t("settings.sectionProjects"), desc: this._t("settings.sectionProjectsDesc") },
          { key: "showVaultStats", name: this._t("settings.sectionVaultStats"), desc: this._t("settings.sectionVaultStatsDesc") },
          { key: "showRecentActivity", name: this._t("settings.sectionRecentActivity"), desc: this._t("settings.sectionRecentActivityDesc") },
          { key: "showNav", name: this._t("settings.sectionNav"), desc: this._t("settings.sectionNavDesc") },
          { key: "showInboxFiles", name: this._t("settings.sectionInboxFiles"), desc: this._t("settings.sectionInboxFilesDesc") },
          { key: "showEngineState", name: this._t("settings.sectionEngineState"), desc: this._t("settings.sectionEngineStateDesc") },
          { key: "showWeeklyChart", name: this._t("settings.sectionWeeklyChart"), desc: this._t("settings.sectionWeeklyChartDesc") }
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
        container.createEl("h3", { text: this._t("provider.labelSettings", { label }) });
        new Setting(container).setName(this._t("provider.endpoint")).setDesc(preset?.endpoint ? this._t("provider.defaultEndpoint", { endpoint: preset.endpoint }) : this._t("provider.endpointDesc")).addText(
          (t2) => t2.setPlaceholder(preset?.endpoint || "https://api.openai.com/v1").setValue(provider?.endpoint || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].endpoint = v.trim();
            await this.plugin.saveSettings();
          })
        );
        new Setting(container).setName(this._t("provider.apiKey")).setDesc(this._t("provider.apiKeyDesc")).addText((t2) => {
          t2.setPlaceholder("sk-...").setValue(provider?.apiKey || "").onChange(async (v) => {
            this.plugin.settings.providers[providerId].apiKey = v.trim();
            await this.plugin.saveSettings();
          });
          t2.inputEl.type = "password";
        });
        new Setting(container).setName(this._t("provider.model")).setDesc(preset?.models?.length ? this._t("provider.presetModels", { models: preset.models.join(", ") }) : this._t("provider.modelDesc")).addText(
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC9zdHJlYW0tcGFyc2VyLmpzIiwgInNyYy9haS1jaGF0L2luZGV4LmpzIiwgInNyYy91dGlscy5qcyIsICJzcmMvcHJvamVjdC1zZXJ2aWNlLmpzIiwgInNyYy9ob21lLXNlcnZpY2UuanMiLCAic3JjL2hlYWx0aC1zZXJ2aWNlLmpzIiwgInNyYy9waXBlbGluZS1zZXJ2aWNlLmpzIiwgInNyYy9jb2NrcGl0LXZpZXcuanMiLCAic3JjL3NldHRpbmdzLXRhYi5qcyIsICJzcmMvbWFpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gS09TIENvY2twaXQgXHUyMDE0IGkxOG4gbG9jYWxlIGRpY3Rpb25hcnlcclxuLy8gS2V5cyBhcmUgb3JnYW5pemVkIGJ5IFVJIHNlY3Rpb24sIHZhbHVlcyBhcmUgZmxhdCBzdHJpbmdzIHdpdGgge3BsYWNlaG9sZGVyfSBzdXBwb3J0LlxyXG5cclxuY29uc3QgTE9DQUxFUyA9IHtcclxuICAnemgtY24nOiB7XHJcbiAgICAvLyBHZW5lcmFsXHJcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxyXG4gICAgJ2FwcC5sb2FkaW5nJzogJ1x1NkI2M1x1NTcyOFx1NTJBMFx1OEY3RCBLT1MgQ29ja3BpdC4uLicsXHJcbiAgICAnYXBwLmVycm9yJzogJ1x1NTJBMFx1OEY3RFx1NEVFQVx1ODg2OFx1NzZEOFx1NjVGNlx1NTFGQVx1OTUxOVx1MzAwMicsXHJcbiAgICAnYXBwLnJldHJ5JzogJ1x1OTFDRFx1OEJENScsXHJcblxyXG4gICAgLy8gUGFuZWwgZGlzcGxheSBuYW1lcyAoZ2V0RGlzcGxheVRleHQpXHJcbiAgICAncGFuZWwuaG9tZSc6ICdLT1MgQ29ja3BpdCcsXHJcbiAgICAncGFuZWwuY2hhdCc6ICdLT1MgQUkgQ2hhdCcsXHJcbiAgICAncGFuZWwubGlmZSc6ICdMaWZlK0FJJyxcclxuICAgICdwYW5lbC5waXBlbGluZSc6ICdQaXBlbGluZScsXHJcbiAgICAncGFuZWwuZ2FyZGVuJzogJ1x1NzdFNVx1OEJDNlx1ODJCMVx1NTZFRCcsXHJcbiAgICAncGFuZWwuc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcclxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdcdTZCQ0ZcdTY1RTVcdTdCMTRcdThCQjAgW3tzdGF0dXN9XScsXHJcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ1x1NURGMlx1NTIxQlx1NUVGQScsXHJcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NTIxQlx1NUVGQScsXHJcbiAgICAnaGVhZGVyLnRvZGF5Rm9jdXMnOiAnXHU0RUNBXHU2NUU1XHU4MDVBXHU3MTI2OiB7Zm9jdXN9JyxcclxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKFx1NjcyQVx1OEJCRVx1NUI5QSknLFxyXG5cclxuICAgIC8vIERheSBuYW1lc1xyXG4gICAgJ2RheS5zdW4nOiAnXHU2NUU1JyxcclxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXHJcbiAgICAnZGF5LnR1ZSc6ICdcdTRFOEMnLFxyXG4gICAgJ2RheS53ZWQnOiAnXHU0RTA5JyxcclxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXHJcbiAgICAnZGF5LmZyaSc6ICdcdTRFOTQnLFxyXG4gICAgJ2RheS5zYXQnOiAnXHU1MTZEJyxcclxuXHJcbiAgICAvLyBRdWljayBhY3Rpb25zXHJcbiAgICAnYWN0aW9uLnBsYW5Ub2RheSc6ICdcdTg5QzRcdTUyMTJcdTRFQ0FcdTU5MjknLFxyXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1ODNCNycsXHJcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdcdTZCQ0ZcdTY1RTVcdTU2REVcdTk4N0UnLFxyXG4gICAgJ2FjdGlvbi5uZXdQcm9qZWN0JzogJ1x1NjVCMFx1NUVGQVx1OTg3OVx1NzZFRScsXHJcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxyXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdcdThCQkVcdTdGNkUnLFxyXG4gICAgJ2FjdGlvbi5haUNoYXQnOiAnQUkgQ2hhdCcsXHJcblxyXG4gICAgLy8gVG9kYXkgVGFza3NcclxuICAgICd0YXNrLnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMScsXHJcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxyXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2ODJcdTY1RTBcdTRFRkJcdTUyQTFcdTMwMDInLFxyXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ1x1NEVDQVx1NjVFNVx1N0IxNFx1OEJCMFx1NjcyQVx1NTIxQlx1NUVGQVx1MzAwMlx1NzBCOVx1NTFGQiBbXHU4OUM0XHU1MjEyXHU0RUNBXHU1OTI5XSBcdTUyMUJcdTVFRkFcdTMwMDInLFxyXG5cclxuICAgIC8vIFByb2plY3RzXHJcbiAgICAncHJvamVjdC50aXRsZSc6ICdcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUUnLFxyXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFXHUzMDAyJyxcclxuICAgICdwcm9qZWN0Lm5ldyc6ICdcdTUyMUJcdTVFRkFcdTY1QjBcdTk4NzlcdTc2RUUnLFxyXG5cclxuICAgIC8vIFZhdWx0IHN0YXRzXHJcbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU1RTkzXHU3RURGXHU4QkExJyxcclxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1x1NjAzQlx1N0IxNFx1OEJCMCcsXHJcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcclxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxyXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnXHU1Rjg1XHU1MjA2XHU2MkUzJyxcclxuXHJcbiAgICAvLyBSZWNlbnQgYWN0aXZpdHlcclxuICAgICdyZWNlbnQudGl0bGUnOiAnXHU2NzAwXHU4RkQxXHU2RDNCXHU1MkE4JyxcclxuICAgICdyZWNlbnQuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU2RDNCXHU1MkE4XHUzMDAyJyxcclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uXHJcbiAgICAnbmF2LnRpdGxlJzogJ1x1NEUwOVx1NjUyRlx1NjdGMSBcdTAwQjcgXHU1QkZDXHU4MjJBJyxcclxuXHJcbiAgICAvLyBJbmJveFxyXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXHJcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcclxuXHJcbiAgICAvLyBFbmdpbmUgc3RhdGVcclxuICAgICdlbmdpbmUudGl0bGUnOiAnXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxJyxcclxuICAgICdlbmdpbmUuY29udHJvbCc6ICdcdTVGMTVcdTY0Q0VcdTYzQTdcdTUyMzYnLFxyXG4gICAgJ2VuZ2luZS5zdGF0dXNSZWFkeSc6ICdcdTVDMzFcdTdFRUEnLFxyXG4gICAgJ2VuZ2luZS5zdGF0dXNOZWVkc1dvcmsnOiAnXHU5NzAwXHU1OTA0XHU3NDA2JyxcclxuICAgICdlbmdpbmUuc3RhdHVzU3RhbmRieSc6ICdcdTVGODVcdTU0N0QnLFxyXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTVGMTVcdTY0Q0VcdTcyQjZcdTYwMDFcdTY1NzBcdTYzNkVcdTMwMDInLFxyXG5cclxuICAgIC8vIFdlZWtseSBjaGFydFxyXG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTU0NjhcdThCQjBcdTVGNTVcdTUyMDZcdTVFMDMnLFxyXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTU0NjhcdTY2ODJcdTY1RTBcdTY1RTVcdThCQjBcdThCQjBcdTVGNTVcdTMwMDInLFxyXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBcdTY3NjEnLFxyXG5cclxuICAgIC8vIFBpcGVsaW5lIGZsb3dcclxuICAgICdwaXBlbGluZS5pbmJveCc6ICdcdTY1MzZcdTRFRjZcdTdCQjEnLFxyXG4gICAgJ3BpcGVsaW5lLnRyaWFnZSc6ICdcdTUyMDZcdTYyRTMnLFxyXG4gICAgJ3BpcGVsaW5lLnJhdyc6ICdcdTUzOUZcdTU5Q0InLFxyXG4gICAgJ3BpcGVsaW5lLmNvbXBpbGUnOiAnXHU3RjE2XHU4QkQxJyxcclxuICAgICdwaXBlbGluZS53aWtpJzogJ1x1NzdFNVx1OEJDNlx1NUU5MycsXHJcbiAgICAncGlwZWxpbmUuY2xpY2tOYXZpZ2F0ZSc6ICdcdTcwQjlcdTUxRkJcdTUzRUZcdTVCRkNcdTgyMkEnLFxyXG5cclxuICAgIC8vIFRvZGF5IGZvY3VzXHJcbiAgICAndG9kYXkudGl0bGUnOiAnXHU0RUNBXHU2NUU1XHU4MDVBXHU3MTI2JyxcclxuICAgICd0b2RheS50YXNrcyc6ICdcdTRFRkJcdTUyQTEnLFxyXG4gICAgJ3RvZGF5LnN0cmVhayc6ICdcdThGREVcdTdFRUQnLFxyXG4gICAgJ3RvZGF5LnRvZGF5JzogJ1x1NEVDQVx1NTkyOScsXHJcbiAgICAndG9kYXkuZGFpbHknOiAnXHU2QkNGXHU2NUU1JyxcclxuICAgICd0b2RheS53ZWVrbHlUb3RhbCc6ICdcdTY3MkNcdTU0NjhcdTUxNzEge2NvdW50fSBcdTY3NjEnLFxyXG4gICAgJ3RvZGF5LmpvdXJuYWwnOiAnXHU0RUNBXHU2NUU1XHU2NUU1XHU4QkIwOiB7Y291bnR9IFx1Njc2MScsXHJcbiAgICAndG9kYXkuY3JlYXRlTm90ZSc6ICdcdTUyMUJcdTVFRkFcdTRFQ0FcdTY1RTVcdTdCMTRcdThCQjAnLFxyXG4gICAgJ3RvZGF5LmRvbmUnOiAnRG9uZScsXHJcbiAgICAndG9kYXkucGVuZGluZyc6ICdQZW5kaW5nJyxcclxuXHJcbiAgICAvLyBHcm93dGggLyBHYXJkZW5cclxuICAgICdncm93dGgudGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU4MkIxXHU1NkVEJyxcclxuICAgICdncm93dGgudG9kYXlKb3VybmFsJzogJ1x1NEVDQVx1NjVFNVx1NjVFNVx1OEJCMDoge2NvdW50fSBcdTY3NjEnLFxyXG4gICAgJ2dyb3d0aC53ZWVrbHlUb3RhbCc6ICdcdTY3MkNcdTU0NjhcdTUxNzEge2NvdW50fSBcdTY3NjFcdThCQjBcdTVGNTUnLFxyXG5cclxuICAgIC8vIEZlZWRcclxuICAgICdmZWVkLnRpdGxlJzogJ1x1NkQzQlx1NTJBOFx1NkQ0MScsXHJcblxyXG4gICAgLy8gSGVhbHRoXHJcbiAgICAnaGVhbHRoLnRpdGxlJzogJ1x1NzdFNVx1OEJDNlx1NUU5M1x1NTA2NVx1NUVCNycsXHJcbiAgICAnaGVhbHRoLnNjb3JlJzogJ3tzY29yZX0vMTAwJyxcclxuXHJcbiAgICAvLyBRdWljayBMYXVuY2hcclxuICAgICdsYXVuY2gudGl0bGUnOiAnXHU1RkVCXHU5MDFGXHU1NDJGXHU1MkE4JyxcclxuXHJcbiAgICAvLyBIb3QgY29udGV4dFxyXG4gICAgJ2hvdC50aXRsZSc6ICdcdTcwRURcdTcwQjlcdTUyQThcdTYwMDEnLFxyXG4gICAgJ2hvdC5lbXB0eSc6ICdcdTY2ODJcdTY1RTBcdTcwRURcdTcwQjlcdTUyQThcdTYwMDFcdTMwMDInLFxyXG5cclxuICAgIC8vIExpZmUgdmlld1xyXG4gICAgJ2xpZmUudGl0bGUnOiAnTGlmZStBSScsXHJcbiAgICAnbGlmZS5zdWJ0aXRsZSc6ICdcdTc1MUZcdTZEM0IgXHUwMEI3IFx1NUI2Nlx1NEU2MCBcdTAwQjcgXHU1REU1XHU0RjVDIFx1MjAxNCBcdTRFMDlcdTY1MkZcdTY3RjFcdTU0NjhcdTY3MUZcdTdCQTFcdTc0MDYnLFxyXG4gICAgJ2xpZmUucGlsbGFyTGlmZSc6ICdcdTc1MUZcdTZEM0InLFxyXG4gICAgJ2xpZmUucGlsbGFyTGVhcm5pbmcnOiAnXHU1QjY2XHU0RTYwJyxcclxuICAgICdsaWZlLnBpbGxhcldvcmsnOiAnXHU1REU1XHU0RjVDJyxcclxuICAgICdsaWZlLmhlYWx0aFByb2dyZXNzJzogJ1x1NTA2NVx1NUVCN1x1OEZEQlx1NUVBNicsXHJcbiAgICAnbGlmZS5oYWJpdFRyYWNraW5nJzogJ1x1NEU2MFx1NjBFRlx1OEZGRFx1OEUyQScsXHJcbiAgICAnbGlmZS5sZWFybmluZ1Byb2dyZXNzJzogJ1x1NUI2Nlx1NEU2MFx1OEZEQlx1NUVBNicsXHJcbiAgICAnbGlmZS5za2lsbEJ1aWxkaW5nJzogJ1x1NjI4MFx1ODBGRFx1NTdGOVx1NTE3QicsXHJcbiAgICAnbGlmZS5wcm9qZWN0UHJvZ3Jlc3MnOiAnXHU5ODc5XHU3NkVFXHU4RkRCXHU1RUE2JyxcclxuICAgICdsaWZlLnRvZGF5VGFza3MnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExJyxcclxuICAgICdsaWZlLmFjdGl2ZSc6ICdhY3RpdmUnLFxyXG4gICAgJ2xpZmUudGFza3MnOiAndGFza3MnLFxyXG4gICAgJ2xpZmUud2Vla2x5UmVwb3J0JzogJ1x1NTQ2OFx1NjJBNScsXHJcbiAgICAnbGlmZS5tb250aGx5UmVwb3J0JzogJ1x1NjcwOFx1NjJBNScsXHJcblxyXG4gICAgLy8gUGlwZWxpbmUgdmlld1xyXG4gICAgJ3BpcGVsaW5lLnRpdGxlJzogJ1x1N0JBMVx1OTA1MycsXHJcbiAgICAncGlwZWxpbmUud2Vla2x5Q2FwdHVyZXMnOiAnXHU2NzJDXHU1NDY4XHU2MzU1XHU4M0I3JyxcclxuICAgICdwaXBlbGluZS5pbmJveFNlY3Rpb24nOiAnSW5ib3ggKHtjb3VudH0pJyxcclxuICAgICdwaXBlbGluZS5yYXdTZWN0aW9uJzogJ1JhdyAoe2NvdW50fSknLFxyXG4gICAgJ3BpcGVsaW5lLnRocm91Z2hwdXRTZWN0aW9uJzogJ1Rocm91Z2hwdXQnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlVGl0bGUnOiAnXHU2ODA3XHU5ODk4JyxcclxuICAgICdwaXBlbGluZS50YWJsZURheXMnOiAnXHU1OTI5XHU2NTcwJyxcclxuICAgICdwaXBlbGluZS50YWJsZVNvdXJjZSc6ICdcdTY3NjVcdTZFOTAnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlV29yZHMnOiAnXHU1QjU3XHU2NTcwJyxcclxuICAgICdwaXBlbGluZS50YWJsZVByaW9yaXR5JzogJ1x1NEYxOFx1NTE0OFx1N0VBNycsXHJcbiAgICAncGlwZWxpbmUubm9JbmJveCc6ICdcdTY2ODJcdTY1RTBcdTVGODVcdTU5MDRcdTc0MDYgSW5ib3hcdTMwMDInLFxyXG4gICAgJ3BpcGVsaW5lLm5vUmF3JzogJ1x1NjY4Mlx1NjVFMFx1NUY4NVx1N0YxNlx1OEJEMVx1NjU4N1x1NEVGNlx1MzAwMicsXHJcbiAgICAncGlwZWxpbmUuY3VycmVudFdlZWsnOiAnXHU1RjUzXHU1MjREXHU1NDY4XHU5MDFBXHU5MUNGOiB7dG90YWx9IFx1Njc2MVx1OEJCMFx1NUY1NSwgXHU2NUU1XHU1NzQ3IHthdmd9JyxcclxuXHJcbiAgICAvLyBHYXJkZW4gdmlld1xyXG4gICAgJ2dhcmRlbi50aXRsZSc6ICdcdTc3RTVcdThCQzZcdTgyQjFcdTU2RUQnLFxyXG4gICAgJ2dhcmRlbi5ub3Rlcyc6ICd7Y291bnR9IFx1N0JDN1x1N0IxNFx1OEJCMCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UHJvamVjdHMnOiAnXHU5ODc5XHU3NkVFICgxIFByb2plY3RzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5QXJlYXMnOiAnXHU5ODg2XHU1N0RGICgyIEFyZWFzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UmVzb3VyY2VzJzogJ1x1OEQ0NFx1NkU5MCAoMyBSZXNvdXJjZXMpJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlJbmJveCc6ICdJbmJveCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UGVyaW9kaWMnOiAnXHU1NDY4XHU2NzFGIChQZXJpb2RpYyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVRvdGFsJzogJ1x1NTQwOFx1OEJBMScsXHJcbiAgICAnZ2FyZGVuLnRhYmxlRGlyZWN0b3J5JzogJ1x1NzZFRVx1NUY1NScsXHJcbiAgICAnZ2FyZGVuLnRhYmxlQ291bnQnOiAnXHU3QkM3XHU2NTcwJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlTZWN0aW9uJzogJ1x1NTIwNlx1N0M3QicsXHJcbiAgICAnZ2FyZGVuLnJlY2VudFVwZGF0ZXMnOiAnXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwJyxcclxuICAgICdnYXJkZW4ucXVpY2tTZWFyY2gnOiAnXHU1RkVCXHU5MDFGXHU2N0U1XHU4QkUyJyxcclxuICAgICdnYXJkZW4uc2VhcmNoUGxhY2Vob2xkZXInOiAnXHU4RjkzXHU1MTY1XHU1MTczXHU5NTJFXHU4QkNEXHU2NDFDXHU3RDIyXHU3N0U1XHU4QkM2XHU1RTkzLi4uJyxcclxuICAgICdnYXJkZW4uc2VhcmNoQnRuJzogJ1x1NjdFNVx1OEJFMicsXHJcbiAgICAnZ2FyZGVuLm5vUmVjZW50JzogJ1x1NjY4Mlx1NjVFMFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1MzAwMicsXHJcblxyXG4gICAgLy8gU2VhcmNoXHJcbiAgICAnc2VhcmNoLnBsYWNlaG9sZGVyJzogJ1x1NjQxQ1x1N0QyMlx1N0IxNFx1OEJCMC4uLicsXHJcbiAgICAnc2VhcmNoLmJ0bic6ICdcdTY0MUNcdTdEMjInLFxyXG5cclxuICAgIC8vIFRvb2x0aXBzXHJcbiAgICAndG9vbHRpcC5yZWZyZXNoJzogJ1x1NTIzN1x1NjVCMCcsXHJcbiAgICAndG9vbHRpcC5jb2xsYXBzZSc6ICdcdTYyOThcdTUzRTAnLFxyXG5cclxuICAgIC8vIEFJIENoYXRcclxuICAgICdhaS50aXRsZSc6ICdBSSBcdTVCRjlcdThCREQnLFxyXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEJFMlx1OTVFRSBLT1MgXHU3N0U1XHU4QkM2XHU1RTkzLi4uJyxcclxuICAgICdhaS53ZWxjb21lJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU5NUVFXHU2MjExXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAxXHU5ODc5XHU3NkVFXHU3MkI2XHU2MDAxXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTUxNzNcdTc2ODRcdTk1RUVcdTk4OThcdTMwMDInLFxyXG4gICAgJ2FpLnNlbmRCdG4nOiAnXHU1M0QxXHU5MDAxJyxcclxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVCRjlcdThCREQnLFxyXG4gICAgJ2FpLnRoaW5raW5nJzogJ1x1NjAxRFx1ODAwM1x1NEUyRC4uLicsXHJcbiAgICAnYWkubmVlZENvbmZpZyc6ICdcdTY3MkFcdTY4QzBcdTZENEJcdTUyMzAgRkxPV25vdGUgXHU5MTREXHU3RjZFXHVGRjBDXHU0RTVGXHU2NzJBXHU2MjdFXHU1MjMwXHU2MjRCXHU1MkE4IEFQSSBcdThCQkVcdTdGNkVcdTMwMDJcdThCRjdcdTU3MjggRkxPV25vdGUgXHU0RTJEXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjBDXHU2MjE2XHU1NzI4IENvY2twaXQgXHU4QkJFXHU3RjZFXHU0RTJEXHU2MjRCXHU1MkE4XHU1ODZCXHU1MTk5XHUzMDAyJyxcclxuICAgICdhaS5lcnJvcic6ICdcdThCRjdcdTZDNDJcdTU5MzFcdThEMjU6IHttc2d9JyxcclxuICAgICdhaS5yZXRyeSc6ICdcdTkxQ0RcdThCRDUnLFxyXG4gICAgJ2FpLmNvcHknOiAnXHU1OTBEXHU1MjM2JyxcclxuICAgICdhaS5jb3BpZWQnOiAnXHU1REYyXHU1OTBEXHU1MjM2JyxcclxuICAgICdhaS5tb2RlbExhYmVsJzogJ1x1NkEyMVx1NTc4QicsXHJcbiAgICAnYWkuY29ubmVjdGVkJzogJ1x1NURGMlx1OEZERVx1NjNBNScsXHJcbiAgICAnYWkubm90Q29uZmlndXJlZCc6ICdcdTY3MkFcdTkxNERcdTdGNkUnLFxyXG4gICAgJ2FpLndlbGNvbWVUaXRsZSc6ICdBc2sgS09TJyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHMnOiAnXHU5ODc5XHU3NkVFXHU2OTgyXHU4OUM4JyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHNEZXNjJzogJ1x1NjdFNVx1NzcwQlx1NkQzQlx1OERDM1x1OTg3OVx1NzZFRVx1OEZEQlx1NUVBNicsXHJcbiAgICAnYWkuc3VnZ2VzdFJlY2VudCc6ICdcdThGRDFcdTY3MUZcdTZEM0JcdTUyQTgnLFxyXG4gICAgJ2FpLnN1Z2dlc3RSZWNlbnREZXNjJzogJ1x1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NzY4NFx1N0IxNFx1OEJCMCcsXHJcbiAgICAnYWkuc3VnZ2VzdFNlYXJjaCc6ICdcdTY0MUNcdTdEMjJcdTc3RTVcdThCQzZcdTVFOTMnLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2hEZXNjJzogJ1x1NjdFNVx1NjI3RVx1NzI3OVx1NUI5QVx1NTE4NVx1NUJCOScsXHJcblxyXG4gICAgLy8gQUkgc2V0dGluZ3NcclxuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxyXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnXHU5MTREXHU3RjZFIEFJIFx1NUJGOVx1OEJERFx1NzY4NCBBUEkgXHU2M0E1XHU1MTY1XHU1M0MyXHU2NTcwXHUzMDAyXHU4MkU1IEZMT1dub3RlIFx1NURGMlx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwOFx1NjNBOFx1ODM1MFx1RkYwOVx1RkYwQ0NvY2twaXQgXHU1QzA2XHU4MUVBXHU1MkE4XHU4QkZCXHU1M0Q2XHU1MTc2XHU4QkJFXHU3RjZFXHUzMDAyXHU3NTU5XHU3QTdBXHU1MjE5XHU4MDRBXHU1OTI5XHU1MzNBXHU0RTBEXHU1M0VGXHU3NTI4XHUzMDAyJyxcclxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxyXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcclxuICAgICdhaS5tb2RlbCc6ICdcdTZBMjFcdTU3OEJcdTU0MERcdTc5RjAnLFxyXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdFREZcdTYzRDBcdTc5M0FcdThCQ0QnLFxyXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1x1NEY2MFx1NjYyRlx1NEUwMFx1NEUyQVx1NzdFNVx1OEJDNlx1N0JBMVx1NzQwNlx1NTJBOVx1NjI0Qlx1RkYwQ1x1NUUyRVx1NTJBOVx1NzUyOFx1NjIzN1x1NTkwNFx1NzQwNiBLT1MgXHU3N0U1XHU4QkM2XHU1RTkzXHUzMDAyJyxcclxuXHJcbiAgICAvLyBQcm92aWRlcnNcclxuICAgICdwcm92aWRlci5jbGF1ZGUnOiAnQ2xhdWRlJyxcclxuICAgICdwcm92aWRlci5jb2RleCc6ICdDb2RleCcsXHJcbiAgICAncHJvdmlkZXIub3BlbmNvZGUnOiAnT3BlbkNvZGUnLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXHJcbiAgICAncHJvdmlkZXIuYXBpS2V5JzogJ0FQSSBLZXknLFxyXG4gICAgJ3Byb3ZpZGVyLm1vZGVsJzogJ01vZGVsJyxcclxuICAgICdwcm92aWRlci5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXHJcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnWW91IGFyZSBhIGhlbHBmdWwgYXNzaXN0YW50Li4uJyxcclxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlcic6ICdBY3RpdmUgQUkgUHJvdmlkZXInLFxyXG4gICAgJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyRGVzYyc6ICdTZWxlY3Qgd2hpY2ggcHJvdmlkZXIgdGhlIEFJIENoYXQgcGFuZWwgdXNlcy4nLFxyXG4gICAgJ3Byb3ZpZGVyLnNldHRpbmdzJzogJ1Byb3ZpZGVyIFNldHRpbmdzJyxcclxuICAgICdwcm92aWRlci5sYWJlbFNldHRpbmdzJzogJ3tsYWJlbH0gU2V0dGluZ3MnLFxyXG4gICAgJ3Byb3ZpZGVyLmRlZmF1bHRFbmRwb2ludCc6ICdcdTlFRDhcdThCQTQ6IHtlbmRwb2ludH0nLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50RGVzYyc6ICdPcGVuQUkgXHU1MTdDXHU1QkI5XHU3Njg0IEFQSSBFbmRwb2ludCBVUkwnLFxyXG4gICAgJ3Byb3ZpZGVyLmFwaUtleURlc2MnOiAnc2stLi4uIFx1NjIxNiBBUEkgS2V5JyxcclxuICAgICdwcm92aWRlci5tb2RlbERlc2MnOiAnXHU2QTIxXHU1NzhCXHU2ODA3XHU4QkM2XHU3QjI2JyxcclxuICAgICdwcm92aWRlci5wcmVzZXRNb2RlbHMnOiAne21vZGVsc30nLFxyXG5cclxuICAgIC8vIFRhYiBiYXJcclxuICAgICd0YWIuZGFzaGJvYXJkJzogJ1x1NEVFQVx1ODg2OFx1NzZEOCcsXHJcbiAgICAndGFiLmxpZmUnOiAnXHU3NTFGXHU2RDNCJyxcclxuICAgICd0YWIucGlwZWxpbmUnOiAnXHU3QkExXHU5MDUzJyxcclxuICAgICd0YWIuZ2FyZGVuJzogJ1x1NzdFNVx1OEJDNlx1ODJCMVx1NTZFRCcsXHJcbiAgICAndGFiLnNldHRpbmdzJzogJ1x1OEJCRVx1N0Y2RScsXHJcblxyXG4gICAgLy8gU2V0dGluZ3MgKGNvY2twaXQtdmlldyBpbmxpbmUpXHJcbiAgICAnc2V0dGluZ3MudGl0bGUnOiAnXHU4QkJFXHU3RjZFJyxcclxuICAgICdzZXR0aW5ncy5kZXNjJzogJ1x1OTE0RFx1N0Y2RSBLT1MgQ29ja3BpdCBcdTc2ODRcdTY2M0VcdTc5M0FcdTRFMEVcdTg4NENcdTRFM0EnLFxyXG4gICAgJ3NldHRpbmdzLmxvY2FsZSc6ICdcdTc1NENcdTk3NjJcdThCRURcdThBMDAnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1NzU0Q1x1OTc2Mlx1OEJFRFx1OEEwMCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1x1OTAwOVx1NjJFOSBDb2NrcGl0IFx1NjYzRVx1NzkzQVx1OEJFRFx1OEEwMFx1MzAwMlx1NTIwN1x1NjM2Mlx1NTQwRVx1NzU0Q1x1OTc2Mlx1NUMwNlx1N0FDQlx1NTM3M1x1NTIzN1x1NjVCMFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MudGhlbWUnOiAnXHU1N0ZBXHU2NzJDXHU0RTNCXHU5ODk4JyxcclxuICAgICdzZXR0aW5ncy50aGVtZURhcmsnOiAnXHU2Njk3XHU5RUQxJyxcclxuICAgICdzZXR0aW5ncy50aGVtZUxpZ2h0JzogJ1x1NjYwRVx1NEVBRScsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVTeXN0ZW0nOiAnXHU4RERGXHU5NjhGXHU3Q0ZCXHU3RURGJyxcclxuICAgICdzZXR0aW5ncy5zZWFzb24nOiAnXHU1QjYzXHU4MjgyXHU2MDI3XHU1RjNBXHU4QzAzXHU4MjcyJyxcclxuICAgICdzZXR0aW5ncy5zZWFzb25TcHJpbmcnOiAnXHU2NjI1JyxcclxuICAgICdzZXR0aW5ncy5zZWFzb25TdW1tZXInOiAnXHU1OTBGJyxcclxuICAgICdzZXR0aW5ncy5zZWFzb25BdXR1bW4nOiAnXHU3OUNCJyxcclxuICAgICdzZXR0aW5ncy5zZWFzb25XaW50ZXInOiAnXHU1MUFDJyxcclxuICAgICdzZXR0aW5ncy5mb250U2l6ZSc6ICdcdTVCNTdcdTUzRjcnLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRTbWFsbCc6ICdcdTVDMEYnLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRNZWRpdW0nOiAnXHU0RTJEJyxcclxuICAgICdzZXR0aW5ncy5mb250TGFyZ2UnOiAnXHU1OTI3JyxcclxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ1x1OTAxQVx1NzUyOCcsXHJcbiAgICAnc2V0dGluZ3MuYXV0b09wZW4nOiAnXHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwIEtPUyBDb2NrcGl0JyxcclxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnT2JzaWRpYW4gXHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU1NzI4XHU0RkE3XHU4RkI5XHU2ODBGXHU2MjUzXHU1RjAwIEtPUyBDb2NrcGl0XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnXHU2NzAwXHU1OTI3XHU2NzAwXHU4RkQxXHU2RDNCXHU1MkE4XHU2NTcwJyxcclxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJzogJ1x1NjYzRVx1NzkzQVx1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NjU4N1x1NEVGNlx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MubWF4VGFza3MnOiAnXHU2NzAwXHU1OTI3XHU0RUZCXHU1MkExXHU2NTcwJyxcclxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnXHU2NjNFXHU3OTNBXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExXHU3Njg0XHU2NTcwXHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdcdTY3MDBcdTU5MjcgSW5ib3ggXHU2NTcwJyxcclxuICAgICdzZXR0aW5ncy5tYXhJbmJveERlc2MnOiAnXHU2NjNFXHU3OTNBIEluYm94IFx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnXHU1MTczXHU0RThFJyxcclxuICAgICdzZXR0aW5ncy52ZXJzaW9uJzogJ1x1NzI0OFx1NjcyQycsXHJcbiAgICAnc2V0dGluZ3MudmVyc2lvbkRlc2MnOiAnS09TIENvY2twaXQgdjAuMi4wIFx1MjAxNCBLT1NfTExNLVdpa2kgXHU3N0U1XHU4QkM2XHU3QkExXHU3NDA2XHU0RUVBXHU4ODY4XHU3NkQ4XHUzMDAyS09TIFx1NzUxRlx1NjAwMVx1NzY4NFx1NEUwMFx1OTBFOFx1NTIwNlx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Mubm90ZXNDb3VudCc6ICdcdTY1MkZcdTYzMDFcdTY3NjFcdTc2RUU6IHtjb3VudH0gXHU3QkM3XHU3QjE0XHU4QkIwJyxcclxuICAgICdzZXR0aW5ncy5sYW5nWmhDTic6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmdFbic6ICdFbmdsaXNoJyxcclxuICAgICdzZXR0aW5ncy5sYW5nWmhUVyc6ICdcdTdFNDFcdTlBRDRcdTRFMkRcdTY1ODcnLFxyXG5cclxuICAgIC8vIFNldHRpbmdzIHNlY3Rpb25zXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCBTZWN0aW9ucycsXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTRFRUFcdTg4NjhcdTc2RDhcdTRFMEFcdTU0MDRcdTUzM0FcdTU3NTdcdTc2ODRcdTY2M0VcdTc5M0FcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzJzogXCJcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTFcIixcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrc0Rlc2MnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XHU0RTBFXHU4RkRCXHU1RUE2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHMnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHNEZXNjJzogJ1x1OTg3OVx1NzZFRVx1NTM2MVx1NzI0N1x1RkYwQ1x1NTQyQlx1NEYxOFx1NTE0OFx1N0VBN1x1NEUwRVx1OEZEQlx1NUVBNlx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblZhdWx0U3RhdHMnOiAnXHU3N0U1XHU4QkM2XHU1RTkzXHU3RURGXHU4QkExJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0c0Rlc2MnOiAnXHU2MDNCXHU3QjE0XHU4QkIwXHU2NTcwXHUzMDAxXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFXHUzMDAxSW5ib3ggXHU4QkExXHU2NTcwXHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHknOiAnXHU2NzAwXHU4RkQxXHU2RDNCXHU1MkE4JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHlEZXNjJzogJ1x1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NzY4NFx1NjU4N1x1NEVGNlx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbk5hdic6ICdcdTVCRkNcdTgyMkEnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25OYXZEZXNjJzogJ1x1NUZFQlx1OTAxRlx1OTRGRVx1NjNBNVx1NTIzMFx1OTg4Nlx1NTdERlx1MzAwMUluYm94XHUzMDAxXHU3MEVEXHU3MEI5XHU3RjEzXHU1QjU4XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlcyc6ICdJbmJveCBcdTY1ODdcdTRFRjYnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzRGVzYyc6ICcwIEluYm94LyBcdTRFMkRcdTVGODVcdTU5MDRcdTc0MDZcdTY1ODdcdTRFRjZcdTUyMTdcdTg4NjhcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZSc6ICdcdTVGMTVcdTY0Q0VcdTcyQjZcdTYwMDEnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZURlc2MnOiAnVHJpYWdlL0NvbXBpbGUvTGluayBcdTVGMTVcdTY0Q0VcdTcyQjZcdTYwMDFcdTYzMDdcdTc5M0FcdTcwNkZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydCc6ICdcdTU0NjhcdTVFQTZcdTU2RkVcdTg4NjgnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydERlc2MnOiAnXHU2QkNGXHU1NDY4XHU2NUU1XHU4QkIwXHU2MzU1XHU4M0I3XHU5MUNGXHU3Njg0XHU2N0YxXHU3MkI2XHU1NkZFXHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5nZW5lcmFsVGFiJzogJ1x1OTAxQVx1NzUyOCcsXHJcbiAgICAnc2V0dGluZ3MucHJvdmlkZXJUYWInOiAnUHJvdmlkZXIgU2V0dGluZ3MnLFxyXG5cclxuICAgIC8vIE5vdGljZSBtZXNzYWdlcyBmb3IgbGF1bmNoIGFjdGlvbnNcclxuICAgICdub3RpY2UudHJpYWdlJzogJ0tPUy1UcmlhZ2UgXHU1REYyXHU1NDJGXHU1MkE4JyxcclxuICAgICdub3RpY2UuY29tcGlsZSc6ICdLT1MtQ29tcGlsZSBcdTVERjJcdTU0MkZcdTUyQTgnLFxyXG4gICAgJ25vdGljZS5saW5rJzogJ0tPUy1MaW5rIFx1NURGMlx1NTQyRlx1NTJBOCcsXHJcbiAgICAnbm90aWNlLnF1ZXJ5JzogJ0tPUy1RdWVyeSBcdTk3NjJcdTY3N0ZcdTVERjJcdTYyNTNcdTVGMDAnLFxyXG4gICAgJ25vdGljZS5kYWlseSc6ICdcdTZCNjNcdTU3MjhcdTUyMUJcdTVFRkEgRGFpbHkgT3Blbi4uLicsXHJcbiAgICAnbm90aWNlLndlZWsnOiAnXHU2QjYzXHU1NzI4XHU3NTFGXHU2MjEwIFdlZWstUmV2aWV3Li4uJyxcclxuICAgICdub3RpY2UuaW5pdCc6ICdcdTZCNjNcdTU3MjhcdTYyNjdcdTg4NEMgS09TLUluaXQgXHU1MDY1XHU1RUI3XHU2OEMwXHU2N0U1Li4uJyxcclxuICAgICdub3RpY2UubGlmZSc6ICdMaWZlK0FJIFx1OTc2Mlx1Njc3Rlx1NURGMlx1NjI1M1x1NUYwMCcsXHJcbiAgICAnbm90aWNlLmV4ZWN1dGluZyc6ICdcdTYyNjdcdTg4NENcdTRFMkQ6IHthY3Rpb259JyxcclxuICB9LFxyXG5cclxuICAnZW4nOiB7XHJcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxyXG4gICAgJ2FwcC5sb2FkaW5nJzogJ0xvYWRpbmcgS09TIENvY2twaXQuLi4nLFxyXG4gICAgJ2FwcC5lcnJvcic6ICdTb21ldGhpbmcgd2VudCB3cm9uZyBsb2FkaW5nIHRoZSBkYXNoYm9hcmQuJyxcclxuICAgICdhcHAucmV0cnknOiAnUmV0cnknLFxyXG5cclxuICAgICdwYW5lbC5ob21lJzogJ0tPUyBDb2NrcGl0JyxcclxuICAgICdwYW5lbC5jaGF0JzogJ0tPUyBBSSBDaGF0JyxcclxuICAgICdwYW5lbC5saWZlJzogJ0xpZmUrQUknLFxyXG4gICAgJ3BhbmVsLnBpcGVsaW5lJzogJ1BpcGVsaW5lJyxcclxuICAgICdwYW5lbC5nYXJkZW4nOiAnS25vd2xlZGdlIEdhcmRlbicsXHJcbiAgICAncGFuZWwuc2V0dGluZ3MnOiAnU2V0dGluZ3MnLFxyXG5cclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcclxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdEYWlseSBOb3RlIFt7c3RhdHVzfV0nLFxyXG4gICAgJ2hlYWRlci5ub3RlQ3JlYXRlZCc6ICdDcmVhdGVkJyxcclxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnTm90IENyZWF0ZWQnLFxyXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogXCJUb2RheSdzIEZvY3VzOiB7Zm9jdXN9XCIsXHJcbiAgICAnaGVhZGVyLmZvY3VzTm90U2V0JzogJyhOb3QgU2V0KScsXHJcblxyXG4gICAgJ2RheS5zdW4nOiAnUycsXHJcbiAgICAnZGF5Lm1vbic6ICdNJyxcclxuICAgICdkYXkudHVlJzogJ1QnLFxyXG4gICAgJ2RheS53ZWQnOiAnVycsXHJcbiAgICAnZGF5LnRodSc6ICdUJyxcclxuICAgICdkYXkuZnJpJzogJ0YnLFxyXG4gICAgJ2RheS5zYXQnOiAnUycsXHJcblxyXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnUGxhbiBUb2RheScsXHJcbiAgICAnYWN0aW9uLmNhcHR1cmUnOiAnUXVpY2sgQ2FwdHVyZScsXHJcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdEYXkgUmV2aWV3JyxcclxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdOZXcgUHJvamVjdCcsXHJcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxyXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdTZXR0aW5ncycsXHJcbiAgICAnYWN0aW9uLmFpQ2hhdCc6ICdBSSBDaGF0JyxcclxuXHJcbiAgICAndGFzay50aXRsZSc6IFwiVG9kYXkncyBUYXNrc1wiLFxyXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcclxuICAgICd0YXNrLm5vbmUnOiAnTm8gdGFza3MgeWV0LicsXHJcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnRGFpbHkgbm90ZSBub3QgY3JlYXRlZC4gQ2xpY2sgW1BsYW4gVG9kYXldIHRvIGNyZWF0ZSBvbmUuJyxcclxuXHJcbiAgICAncHJvamVjdC50aXRsZSc6ICdBY3RpdmUgUHJvamVjdHMnLFxyXG4gICAgJ3Byb2plY3QuZW1wdHknOiAnTm8gYWN0aXZlIHByb2plY3RzLicsXHJcbiAgICAncHJvamVjdC5uZXcnOiAnTmV3IFByb2plY3QnLFxyXG5cclxuICAgICdzdGF0cy50aXRsZSc6ICdWYXVsdCBTdGF0aXN0aWNzJyxcclxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1RvdGFsIE5vdGVzJyxcclxuICAgICdzdGF0cy5hY3RpdmVQcm9qZWN0cyc6ICdBY3RpdmUgUHJvamVjdHMnLFxyXG4gICAgJ3N0YXRzLnRvZGF5TmV3JzogJ1RvZGF5IE5ldycsXHJcbiAgICAnc3RhdHMucGVuZGluZ1RyaWFnZSc6ICdJbmJveCcsXHJcblxyXG4gICAgJ3JlY2VudC50aXRsZSc6ICdSZWNlbnQgQWN0aXZpdHknLFxyXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdObyBhY3Rpdml0eSB5ZXQuJyxcclxuXHJcbiAgICAnbmF2LnRpdGxlJzogJ1RocmVlIFBpbGxhcnMgXFx1MDBCNyBOYXYnLFxyXG5cclxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxyXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXHJcblxyXG4gICAgJ2VuZ2luZS50aXRsZSc6ICdFbmdpbmUgU3RhdGUnLFxyXG4gICAgJ2VuZ2luZS5jb250cm9sJzogJ0VuZ2luZSBDb250cm9sJyxcclxuICAgICdlbmdpbmUuc3RhdHVzUmVhZHknOiAnUmVhZHknLFxyXG4gICAgJ2VuZ2luZS5zdGF0dXNOZWVkc1dvcmsnOiAnTmVlZHMgd29yaycsXHJcbiAgICAnZW5naW5lLnN0YXR1c1N0YW5kYnknOiAnU3RhbmRieScsXHJcbiAgICAnZW5naW5lLmVtcHR5JzogJ05vIGVuZ2luZSBzdGF0ZSBkYXRhIHlldC4nLFxyXG5cclxuICAgICd3ZWVrbHkudGl0bGUnOiAnV2Vla2x5IFJlY29yZCBEaXN0cmlidXRpb24nLFxyXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdObyBkYWlseSByZWNvcmRzIHRoaXMgd2Vlay4nLFxyXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBpdGVtcycsXHJcblxyXG4gICAgJ3BpcGVsaW5lLmluYm94JzogJ0luYm94JyxcclxuICAgICdwaXBlbGluZS50cmlhZ2UnOiAnVHJpYWdlJyxcclxuICAgICdwaXBlbGluZS5yYXcnOiAnUmF3JyxcclxuICAgICdwaXBlbGluZS5jb21waWxlJzogJ0NvbXBpbGUnLFxyXG4gICAgJ3BpcGVsaW5lLndpa2knOiAnS25vd2xlZGdlJyxcclxuICAgICdwaXBlbGluZS5jbGlja05hdmlnYXRlJzogJ0NsaWNrIHRvIG5hdmlnYXRlJyxcclxuXHJcbiAgICAndG9kYXkudGl0bGUnOiBcIlRvZGF5J3MgRm9jdXNcIixcclxuICAgICd0b2RheS50YXNrcyc6ICdUYXNrcycsXHJcbiAgICAndG9kYXkuc3RyZWFrJzogJ1N0cmVhaycsXHJcbiAgICAndG9kYXkudG9kYXknOiAnVG9kYXknLFxyXG4gICAgJ3RvZGF5LmRhaWx5JzogJ0RhaWx5JyxcclxuICAgICd0b2RheS53ZWVrbHlUb3RhbCc6ICdUaGlzIHdlZWs6IHtjb3VudH0gcmVjb3JkcycsXHJcbiAgICAndG9kYXkuam91cm5hbCc6IFwiVG9kYXkncyBKb3VybmFsOiB7Y291bnR9IGl0ZW1zXCIsXHJcbiAgICAndG9kYXkuY3JlYXRlTm90ZSc6ICdDcmVhdGUgZGFpbHkgbm90ZScsXHJcbiAgICAndG9kYXkuZG9uZSc6ICdEb25lJyxcclxuICAgICd0b2RheS5wZW5kaW5nJzogJ1BlbmRpbmcnLFxyXG5cclxuICAgICdncm93dGgudGl0bGUnOiAnS25vd2xlZGdlIEdhcmRlbicsXHJcbiAgICAnZ3Jvd3RoLnRvZGF5Sm91cm5hbCc6IFwiVG9kYXkncyBKb3VybmFsOiB7Y291bnR9IGl0ZW1zXCIsXHJcbiAgICAnZ3Jvd3RoLndlZWtseVRvdGFsJzogJ1RoaXMgd2Vlazoge2NvdW50fSByZWNvcmRzJyxcclxuXHJcbiAgICAnZmVlZC50aXRsZSc6ICdBY3Rpdml0eSBGZWVkJyxcclxuXHJcbiAgICAnaGVhbHRoLnRpdGxlJzogJ1ZhdWx0IEhlYWx0aCcsXHJcbiAgICAnaGVhbHRoLnNjb3JlJzogJ3tzY29yZX0vMTAwJyxcclxuXHJcbiAgICAnbGF1bmNoLnRpdGxlJzogJ1F1aWNrIExhdW5jaCcsXHJcblxyXG4gICAgJ2hvdC50aXRsZSc6ICdIb3QgQ29udGV4dCcsXHJcbiAgICAnaG90LmVtcHR5JzogJ05vIGhvdCBjb250ZXh0IGVudHJpZXMuJyxcclxuXHJcbiAgICAnbGlmZS50aXRsZSc6ICdMaWZlK0FJJyxcclxuICAgICdsaWZlLnN1YnRpdGxlJzogJ0xpZmUgXFx1MDBCNyBMZWFybmluZyBcXHUwMEI3IFdvcmsgXFx1MjAxNCBUaHJlZSBQaWxsYXJzJyxcclxuICAgICdsaWZlLnBpbGxhckxpZmUnOiAnTGlmZScsXHJcbiAgICAnbGlmZS5waWxsYXJMZWFybmluZyc6ICdMZWFybmluZycsXHJcbiAgICAnbGlmZS5waWxsYXJXb3JrJzogJ1dvcmsnLFxyXG4gICAgJ2xpZmUuaGVhbHRoUHJvZ3Jlc3MnOiAnSGVhbHRoIFByb2dyZXNzJyxcclxuICAgICdsaWZlLmhhYml0VHJhY2tpbmcnOiAnSGFiaXQgVHJhY2tpbmcnLFxyXG4gICAgJ2xpZmUubGVhcm5pbmdQcm9ncmVzcyc6ICdMZWFybmluZyBQcm9ncmVzcycsXHJcbiAgICAnbGlmZS5za2lsbEJ1aWxkaW5nJzogJ1NraWxsIEJ1aWxkaW5nJyxcclxuICAgICdsaWZlLnByb2plY3RQcm9ncmVzcyc6ICdQcm9qZWN0IFByb2dyZXNzJyxcclxuICAgICdsaWZlLnRvZGF5VGFza3MnOiBcIlRvZGF5J3MgVGFza3NcIixcclxuICAgICdsaWZlLmFjdGl2ZSc6ICdhY3RpdmUnLFxyXG4gICAgJ2xpZmUudGFza3MnOiAndGFza3MnLFxyXG4gICAgJ2xpZmUud2Vla2x5UmVwb3J0JzogJ1dlZWtseScsXHJcbiAgICAnbGlmZS5tb250aGx5UmVwb3J0JzogJ01vbnRobHknLFxyXG5cclxuICAgICdwaXBlbGluZS50aXRsZSc6ICdQaXBlbGluZScsXHJcbiAgICAncGlwZWxpbmUud2Vla2x5Q2FwdHVyZXMnOiAnV2Vla2x5IGNhcHR1cmVzJyxcclxuICAgICdwaXBlbGluZS5pbmJveFNlY3Rpb24nOiAnSW5ib3ggKHtjb3VudH0pJyxcclxuICAgICdwaXBlbGluZS5yYXdTZWN0aW9uJzogJ1JhdyAoe2NvdW50fSknLFxyXG4gICAgJ3BpcGVsaW5lLnRocm91Z2hwdXRTZWN0aW9uJzogJ1Rocm91Z2hwdXQnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlVGl0bGUnOiAnVGl0bGUnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlRGF5cyc6ICdEYXlzJyxcclxuICAgICdwaXBlbGluZS50YWJsZVNvdXJjZSc6ICdTb3VyY2UnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlV29yZHMnOiAnV29yZHMnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlUHJpb3JpdHknOiAnUHJpb3JpdHknLFxyXG4gICAgJ3BpcGVsaW5lLm5vSW5ib3gnOiAnTm8gcGVuZGluZyBpbmJveCBpdGVtcy4nLFxyXG4gICAgJ3BpcGVsaW5lLm5vUmF3JzogJ05vIGZpbGVzIHBlbmRpbmcgY29tcGlsYXRpb24uJyxcclxuICAgICdwaXBlbGluZS5jdXJyZW50V2Vlayc6ICdXZWVrIHRocm91Z2hwdXQ6IHt0b3RhbH0gcmVjb3Jkcywge2F2Z30vZGF5JyxcclxuXHJcbiAgICAnZ2FyZGVuLnRpdGxlJzogJ0tub3dsZWRnZSBHYXJkZW4nLFxyXG4gICAgJ2dhcmRlbi5ub3Rlcyc6ICd7Y291bnR9IG5vdGVzJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlQcm9qZWN0cyc6ICdQcm9qZWN0cycsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5QXJlYXMnOiAnQXJlYXMnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVJlc291cmNlcyc6ICdSZXNvdXJjZXMnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeUluYm94JzogJ0luYm94JyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlQZXJpb2RpYyc6ICdQZXJpb2RpYycsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5VG90YWwnOiAnVG90YWwnLFxyXG4gICAgJ2dhcmRlbi50YWJsZURpcmVjdG9yeSc6ICdEaXJlY3RvcnknLFxyXG4gICAgJ2dhcmRlbi50YWJsZUNvdW50JzogJ0NvdW50JyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlTZWN0aW9uJzogJ0NhdGVnb3JpZXMnLFxyXG4gICAgJ2dhcmRlbi5yZWNlbnRVcGRhdGVzJzogJ1JlY2VudCBVcGRhdGVzJyxcclxuICAgICdnYXJkZW4ucXVpY2tTZWFyY2gnOiAnUXVpY2sgU2VhcmNoJyxcclxuICAgICdnYXJkZW4uc2VhcmNoUGxhY2Vob2xkZXInOiAnU2VhcmNoIGtub3dsZWRnZSBiYXNlLi4uJyxcclxuICAgICdnYXJkZW4uc2VhcmNoQnRuJzogJ1NlYXJjaCcsXHJcbiAgICAnZ2FyZGVuLm5vUmVjZW50JzogJ05vIHJlY2VudCBhY3Rpdml0eS4nLFxyXG5cclxuICAgICdzZWFyY2gucGxhY2Vob2xkZXInOiAnU2VhcmNoIG5vdGVzLi4uJyxcclxuICAgICdzZWFyY2guYnRuJzogJ1NlYXJjaCcsXHJcblxyXG4gICAgJ3Rvb2x0aXAucmVmcmVzaCc6ICdSZWZyZXNoJyxcclxuICAgICd0b29sdGlwLmNvbGxhcHNlJzogJ0NvbGxhcHNlJyxcclxuXHJcbiAgICAnYWkudGl0bGUnOiAnQUkgQ2hhdCcsXHJcbiAgICAnYWkucGxhY2Vob2xkZXInOiAnQXNrIGFib3V0IHRoZSBLT1MgdmF1bHQuLi4nLFxyXG4gICAgJ2FpLndlbGNvbWUnOiAnSGVsbG8hIEkgYW0gdGhlIEtPUyBBSSBhc3Npc3RhbnQuIEFzayBtZSBhYm91dCB0aGUga25vd2xlZGdlIGJhc2UsIHByb2plY3Qgc3RhdHVzLCBvciBhbnl0aGluZyBLT1MtcmVsYXRlZC4nLFxyXG4gICAgJ2FpLnNlbmRCdG4nOiAnU2VuZCcsXHJcbiAgICAnYWkuY2xlYXJCdG4nOiAnQ2xlYXIgQ2hhdCcsXHJcbiAgICAnYWkudGhpbmtpbmcnOiAnVGhpbmtpbmcuLi4nLFxyXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnTm8gRkxPV25vdGUgY29uZmlnIGRldGVjdGVkIGFuZCBubyBtYW51YWwgQVBJIHNldHRpbmdzIGZvdW5kLiBDb25maWd1cmUgQUkgUHJvdmlkZXIgaW4gRkxPV25vdGUsIG9yIGZpbGwgaW4gbWFudWFsbHkgaW4gQ29ja3BpdCBzZXR0aW5ncy4nLFxyXG4gICAgJ2FpLmVycm9yJzogJ1JlcXVlc3QgZmFpbGVkOiB7bXNnfScsXHJcbiAgICAnYWkucmV0cnknOiAnUmV0cnknLFxyXG4gICAgJ2FpLmNvcHknOiAnQ29weScsXHJcbiAgICAnYWkuY29waWVkJzogJ0NvcGllZCcsXHJcbiAgICAnYWkubW9kZWxMYWJlbCc6ICdNb2RlbCcsXHJcbiAgICAnYWkuY29ubmVjdGVkJzogJ0Nvbm5lY3RlZCcsXHJcbiAgICAnYWkubm90Q29uZmlndXJlZCc6ICdOb3QgY29uZmlndXJlZCcsXHJcbiAgICAnYWkud2VsY29tZVRpdGxlJzogJ0FzayBLT1MnLFxyXG4gICAgJ2FpLnN1Z2dlc3RQcm9qZWN0cyc6ICdQcm9qZWN0IE92ZXJ2aWV3JyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHNEZXNjJzogJ1ZpZXcgYWN0aXZlIHByb2plY3QgcHJvZ3Jlc3MnLFxyXG4gICAgJ2FpLnN1Z2dlc3RSZWNlbnQnOiAnUmVjZW50IEFjdGl2aXR5JyxcclxuICAgICdhaS5zdWdnZXN0UmVjZW50RGVzYyc6ICdSZWNlbnRseSBtb2RpZmllZCBub3RlcycsXHJcbiAgICAnYWkuc3VnZ2VzdFNlYXJjaCc6ICdTZWFyY2ggVmF1bHQnLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2hEZXNjJzogJ0ZpbmQgc3BlY2lmaWMgY29udGVudCcsXHJcblxyXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbic6ICdBSSBQcm92aWRlcicsXHJcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdDb25maWd1cmUgQVBJIGFjY2VzcyBmb3IgdGhlIEFJIGNoYXQuIElmIEZMT1dub3RlIGhhcyBBSSBQcm92aWRlciBjb25maWd1cmVkIChyZWNvbW1lbmRlZCksIENvY2twaXQgd2lsbCBhdXRvLWRldGVjdCBpdC4gTGVhdmUgZW1wdHkgdG8gZGlzYWJsZS4nLFxyXG4gICAgJ2FpLmFwaUVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXHJcbiAgICAnYWkuYXBpS2V5JzogJ0FQSSBLZXknLFxyXG4gICAgJ2FpLm1vZGVsJzogJ01vZGVsIE5hbWUnLFxyXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdTeXN0ZW0gUHJvbXB0JyxcclxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdZb3UgYXJlIGEga25vd2xlZGdlIG1hbmFnZW1lbnQgYXNzaXN0YW50IGhlbHBpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdGhlaXIgS09TIHZhdWx0LicsXHJcblxyXG4gICAgJ3Byb3ZpZGVyLmNsYXVkZSc6ICdDbGF1ZGUnLFxyXG4gICAgJ3Byb3ZpZGVyLmNvZGV4JzogJ0NvZGV4JyxcclxuICAgICdwcm92aWRlci5vcGVuY29kZSc6ICdPcGVuQ29kZScsXHJcbiAgICAncHJvdmlkZXIuZW5kcG9pbnQnOiAnQVBJIEVuZHBvaW50JyxcclxuICAgICdwcm92aWRlci5hcGlLZXknOiAnQVBJIEtleScsXHJcbiAgICAncHJvdmlkZXIubW9kZWwnOiAnTW9kZWwnLFxyXG4gICAgJ3Byb3ZpZGVyLnN5c3RlbVByb21wdCc6ICdTeXN0ZW0gUHJvbXB0JyxcclxuICAgICdwcm92aWRlci5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdZb3UgYXJlIGEgaGVscGZ1bCBhc3Npc3RhbnQuLi4nLFxyXG4gICAgJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyJzogJ0FjdGl2ZSBBSSBQcm92aWRlcicsXHJcbiAgICAncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXJEZXNjJzogJ1NlbGVjdCB3aGljaCBwcm92aWRlciB0aGUgQUkgQ2hhdCBwYW5lbCB1c2VzLicsXHJcbiAgICAncHJvdmlkZXIuc2V0dGluZ3MnOiAnUHJvdmlkZXIgU2V0dGluZ3MnLFxyXG4gICAgJ3Byb3ZpZGVyLmxhYmVsU2V0dGluZ3MnOiAne2xhYmVsfSBTZXR0aW5ncycsXHJcbiAgICAncHJvdmlkZXIuZGVmYXVsdEVuZHBvaW50JzogJ0RlZmF1bHQ6IHtlbmRwb2ludH0nLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50RGVzYyc6ICdPcGVuQUktY29tcGF0aWJsZSBlbmRwb2ludCBVUkwnLFxyXG4gICAgJ3Byb3ZpZGVyLmFwaUtleURlc2MnOiAnc2stLi4uIG9yIEFQSSBrZXknLFxyXG4gICAgJ3Byb3ZpZGVyLm1vZGVsRGVzYyc6ICdNb2RlbCBpZGVudGlmaWVyJyxcclxuICAgICdwcm92aWRlci5wcmVzZXRNb2RlbHMnOiAne21vZGVsc30nLFxyXG5cclxuICAgICd0YWIuZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCcsXHJcbiAgICAndGFiLmxpZmUnOiAnTGlmZScsXHJcbiAgICAndGFiLnBpcGVsaW5lJzogJ1BpcGVsaW5lJyxcclxuICAgICd0YWIuZ2FyZGVuJzogJ0tub3dsZWRnZSBHYXJkZW4nLFxyXG4gICAgJ3RhYi5zZXR0aW5ncyc6ICdTZXR0aW5ncycsXHJcblxyXG4gICAgJ3NldHRpbmdzLnRpdGxlJzogJ1NldHRpbmdzJyxcclxuICAgICdzZXR0aW5ncy5kZXNjJzogJ0NvbmZpZ3VyZSBLT1MgQ29ja3BpdCBkaXNwbGF5IGFuZCBiZWhhdmlvcicsXHJcbiAgICAnc2V0dGluZ3MubG9jYWxlJzogJ0ludGVyZmFjZSBMYW5ndWFnZScsXHJcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnSW50ZXJmYWNlIExhbmd1YWdlJyxcclxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnU2VsZWN0IHRoZSBjb2NrcGl0IGRpc3BsYXkgbGFuZ3VhZ2UuIFRoZSBVSSB3aWxsIHJlZnJlc2ggaW1tZWRpYXRlbHkuJyxcclxuICAgICdzZXR0aW5ncy50aGVtZSc6ICdUaGVtZScsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVEYXJrJzogJ0RhcmsnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lTGlnaHQnOiAnTGlnaHQnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lU3lzdGVtJzogJ1N5c3RlbScsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uJzogJ1NlYXNvbmFsIEFjY2VudCcsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3ByaW5nJzogJ1NwcmluZycsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3VtbWVyJzogJ1N1bW1lcicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uQXV0dW1uJzogJ0F1dHVtbicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uV2ludGVyJzogJ1dpbnRlcicsXHJcbiAgICAnc2V0dGluZ3MuZm9udFNpemUnOiAnRm9udCBTaXplJyxcclxuICAgICdzZXR0aW5ncy5mb250U21hbGwnOiAnU21hbGwnLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRNZWRpdW0nOiAnTWVkaXVtJyxcclxuICAgICdzZXR0aW5ncy5mb250TGFyZ2UnOiAnTGFyZ2UnLFxyXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnR2VuZXJhbCcsXHJcbiAgICAnc2V0dGluZ3MuYXV0b09wZW4nOiAnQXV0by1vcGVuIEtPUyBDb2NrcGl0IG9uIHN0YXJ0dXAnLFxyXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdBdXRvbWF0aWNhbGx5IG9wZW4gS09TIENvY2twaXQgaW4gdGhlIHNpZGViYXIgd2hlbiBPYnNpZGlhbiBzdGFydHMuJyxcclxuICAgICdzZXR0aW5ncy5tYXhSZWNlbnQnOiAnTWF4IFJlY2VudCBJdGVtcycsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdOdW1iZXIgb2YgcmVjZW50bHkgbW9kaWZpZWQgZmlsZXMgdG8gc2hvdyAobWF4IDIwKS4nLFxyXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ01heCB0YXNrIGl0ZW1zJyxcclxuICAgICdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnOiAnTnVtYmVyIG9mIGRhaWx5LW5vdGUgdGFza3MgdG8gc2hvdyAobWF4IDIwKS4nLFxyXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ01heCBpbmJveCBpdGVtcycsXHJcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ051bWJlciBvZiBpbmJveCBmaWxlIG5hbWVzIHRvIHNob3cgKG1heCAyMCkuJyxcclxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdBYm91dCcsXHJcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdWZXJzaW9uJyxcclxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEEga25vd2xlZGdlIG1hbmFnZW1lbnQgZGFzaGJvYXJkIGZvciB0aGUgS09TX0xMTS1XaWtpIHZhdWx0LiBQYXJ0IG9mIHRoZSBLT1MgZWNvc3lzdGVtLicsXHJcbiAgICAnc2V0dGluZ3Mubm90ZXNDb3VudCc6ICdOb3Rlczoge2NvdW50fScsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcclxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcclxuXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCBTZWN0aW9ucycsXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdUb2dnbGUgd2hpY2ggc2VjdGlvbnMgYXBwZWFyIG9uIHRoZSBjb2NrcGl0IGRhc2hib2FyZC4nLFxyXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnRGF0YSBMaW1pdHMnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzJzogXCJUb2RheSdzIFRhc2tzXCIsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblRvZGF5VGFza3NEZXNjJzogJ0RhaWx5IG5vdGUgdGFzayBsaXN0IGFuZCBwcm9ncmVzcy4nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Qcm9qZWN0cyc6ICdBY3RpdmUgUHJvamVjdHMnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Qcm9qZWN0c0Rlc2MnOiAnUHJvamVjdCBjYXJkcyB3aXRoIHByaW9yaXR5IGFuZCBwcm9ncmVzcy4nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzJzogJ1ZhdWx0IFN0YXRpc3RpY3MnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzRGVzYyc6ICdUb3RhbCBub3RlcywgYWN0aXZlIHByb2plY3RzLCBpbmJveCBjb3VudC4nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eSc6ICdSZWNlbnQgQWN0aXZpdHknLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eURlc2MnOiAnUmVjZW50bHkgbW9kaWZpZWQgZmlsZXMuJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uTmF2JzogJ05hdmlnYXRpb24nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25OYXZEZXNjJzogJ1F1aWNrIGxpbmtzIHRvIGFyZWFzLCBpbmJveCwgaG90IGNhY2hlLicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkluYm94RmlsZXMnOiAnSW5ib3ggRmlsZXMnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzRGVzYyc6ICdMaXN0IG9mIHBlbmRpbmcgZmlsZXMgaW4gMCBJbmJveC8uJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uRW5naW5lU3RhdGUnOiAnRW5naW5lIFN0YXRlJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uRW5naW5lU3RhdGVEZXNjJzogJ1RyaWFnZS9Db21waWxlL0xpbmsgZW5naW5lIHN0YXR1cyBjaGlwcy4nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydCc6ICdXZWVrbHkgQ2hhcnQnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydERlc2MnOiAnQmFyIGNoYXJ0IG9mIHdlZWtseSBkYWlseS1ub3RlIGNhcHR1cmVzLicsXHJcbiAgICAnc2V0dGluZ3MuZ2VuZXJhbFRhYic6ICdHZW5lcmFsJyxcclxuICAgICdzZXR0aW5ncy5wcm92aWRlclRhYic6ICdQcm92aWRlciBTZXR0aW5ncycsXHJcblxyXG4gICAgJ25vdGljZS50cmlhZ2UnOiAnS09TLVRyaWFnZSBsYXVuY2hlZCcsXHJcbiAgICAnbm90aWNlLmNvbXBpbGUnOiAnS09TLUNvbXBpbGUgbGF1bmNoZWQnLFxyXG4gICAgJ25vdGljZS5saW5rJzogJ0tPUy1MaW5rIHN0YXJ0ZWQnLFxyXG4gICAgJ25vdGljZS5xdWVyeSc6ICdLT1MtUXVlcnkgcGFuZWwgb3BlbmVkJyxcclxuICAgICdub3RpY2UuZGFpbHknOiAnRGFpbHkgT3BlbiBjcmVhdGluZy4uLicsXHJcbiAgICAnbm90aWNlLndlZWsnOiAnV2Vlay1SZXZpZXcgZ2VuZXJhdGluZy4uLicsXHJcbiAgICAnbm90aWNlLmluaXQnOiAnS09TLUluaXQgaGVhbHRoIGNoZWNrLi4uJyxcclxuICAgICdub3RpY2UubGlmZSc6ICdMaWZlK0FJIHBhbmVsIG9wZW5lZCcsXHJcbiAgICAnbm90aWNlLmV4ZWN1dGluZyc6ICdFeGVjdXRpbmc6IHthY3Rpb259JyxcclxuICB9LFxyXG5cclxuICAnemgtdHcnOiB7XHJcbiAgICAnYXBwLm5hbWUnOiAnS09TIENvY2twaXQnLFxyXG4gICAgJ2FwcC5sb2FkaW5nJzogJ1x1NkI2M1x1NTcyOFx1OEYwOVx1NTE2NSBLT1MgQ29ja3BpdC4uLicsXHJcbiAgICAnYXBwLmVycm9yJzogJ1x1OEYwOVx1NTE2NVx1NTEwMFx1ODg2OFx1Njc3Rlx1NjY0Mlx1NzY3Q1x1NzUxRlx1OTMyRlx1OEFBNFx1MzAwMicsXHJcbiAgICAnYXBwLnJldHJ5JzogJ1x1OTFDRFx1OEE2NicsXHJcblxyXG4gICAgJ3BhbmVsLmhvbWUnOiAnS09TIENvY2twaXQnLFxyXG4gICAgJ3BhbmVsLmNoYXQnOiAnS09TIEFJIENoYXQnLFxyXG4gICAgJ3BhbmVsLmxpZmUnOiAnTGlmZStBSScsXHJcbiAgICAncGFuZWwucGlwZWxpbmUnOiAnUGlwZWxpbmUnLFxyXG4gICAgJ3BhbmVsLmdhcmRlbic6ICdcdTc3RTVcdThCNThcdTgyQjFcdTU3MTInLFxyXG4gICAgJ3BhbmVsLnNldHRpbmdzJzogJ1x1OEEyRFx1NUI5QScsXHJcblxyXG4gICAgJ2hlYWRlci5kYXRlRm9ybWF0JzogJ1lZWVktTU0tREQnLFxyXG4gICAgJ2hlYWRlci5ub3RlU3RhdHVzJzogJ1x1NkJDRlx1NjVFNVx1N0I0Nlx1OEExOCBbe3N0YXR1c31dJyxcclxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnXHU1REYyXHU1RUZBXHU3QUNCJyxcclxuICAgICdoZWFkZXIubm90ZU5vdENyZWF0ZWQnOiAnXHU2NzJBXHU1RUZBXHU3QUNCJyxcclxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6ICdcdTRFQ0FcdTY1RTVcdTcxMjZcdTlFREU6IHtmb2N1c30nLFxyXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoXHU2NzJBXHU4QTJEXHU1QjlBKScsXHJcblxyXG4gICAgJ2RheS5zdW4nOiAnXHU2NUU1JyxcclxuICAgICdkYXkubW9uJzogJ1x1NEUwMCcsXHJcbiAgICAnZGF5LnR1ZSc6ICdcdTRFOEMnLFxyXG4gICAgJ2RheS53ZWQnOiAnXHU0RTA5JyxcclxuICAgICdkYXkudGh1JzogJ1x1NTZEQicsXHJcbiAgICAnZGF5LmZyaSc6ICdcdTRFOTQnLFxyXG4gICAgJ2RheS5zYXQnOiAnXHU1MTZEJyxcclxuXHJcbiAgICAnYWN0aW9uLnBsYW5Ub2RheSc6ICdcdTg5OEZcdTUyODNcdTRFQ0FcdTU5MjknLFxyXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1x1NUZFQlx1OTAxRlx1NjM1NVx1NjM0OScsXHJcbiAgICAnYWN0aW9uLmRheVJldmlldyc6ICdcdTZCQ0ZcdTY1RTVcdTU2REVcdTk4NjcnLFxyXG4gICAgJ2FjdGlvbi5uZXdQcm9qZWN0JzogJ1x1NjVCMFx1NUVGQVx1NUMwOFx1Njg0OCcsXHJcbiAgICAnYWN0aW9uLnRyaWFnZSc6ICdUcmlhZ2UnLFxyXG4gICAgJ2FjdGlvbi5zZXR0aW5ncyc6ICdcdThBMkRcdTVCOUEnLFxyXG4gICAgJ2FjdGlvbi5haUNoYXQnOiAnQUkgQ2hhdCcsXHJcblxyXG4gICAgJ3Rhc2sudGl0bGUnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkQ5JyxcclxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXHJcbiAgICAndGFzay5ub25lJzogJ1x1NjZBQlx1NzEyMVx1NEVGQlx1NTJEOVx1MzAwMicsXHJcbiAgICAndGFzay5kYWlseU1pc3NpbmcnOiAnXHU0RUNBXHU2NUU1XHU3QjQ2XHU4QTE4XHU2NzJBXHU1RUZBXHU3QUNCXHUzMDAyXHU5RURFXHU2NENBIFtcdTg5OEZcdTUyODNcdTRFQ0FcdTU5MjldIFx1NUVGQVx1N0FDQlx1MzAwMicsXHJcblxyXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcclxuICAgICdwcm9qZWN0LmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OFx1MzAwMicsXHJcbiAgICAncHJvamVjdC5uZXcnOiAnXHU2NUIwXHU1RUZBXHU1QzA4XHU2ODQ4JyxcclxuXHJcbiAgICAnc3RhdHMudGl0bGUnOiAnXHU3N0U1XHU4QjU4XHU1RUFCXHU3RDcxXHU4QTA4JyxcclxuICAgICdzdGF0cy50b3RhbE5vdGVzJzogJ1x1N0UzRFx1N0I0Nlx1OEExOCcsXHJcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcclxuICAgICdzdGF0cy50b2RheU5ldyc6ICdcdTRFQ0FcdTY1RTVcdTY1QjBcdTU4OUUnLFxyXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnXHU1Rjg1XHU1MjA2XHU5ODVFJyxcclxuXHJcbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJENScsXHJcbiAgICAncmVjZW50LmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NkQzQlx1NTJENVx1MzAwMicsXHJcblxyXG4gICAgJ25hdi50aXRsZSc6ICdcdTRFMDlcdTY1MkZcdTY3RjEgXHUwMEI3IFx1NUMwRVx1ODIyQScsXHJcblxyXG4gICAgJ2luYm94LnRpdGxlJzogJ0luYm94ICh7Y291bnR9KScsXHJcbiAgICAnaW5ib3gubW9yZSc6ICcre2NvdW50fSBtb3JlLi4uJyxcclxuXHJcbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJDMFx1NjE0QicsXHJcbiAgICAnZW5naW5lLmNvbnRyb2wnOiAnXHU1RjE1XHU2NENFXHU2M0E3XHU1MjM2JyxcclxuICAgICdlbmdpbmUuc3RhdHVzUmVhZHknOiAnXHU1QzMxXHU3REQyJyxcclxuICAgICdlbmdpbmUuc3RhdHVzTmVlZHNXb3JrJzogJ1x1OTcwMFx1ODY1NVx1NzQwNicsXHJcbiAgICAnZW5naW5lLnN0YXR1c1N0YW5kYnknOiAnXHU1Rjg1XHU1NDdEJyxcclxuICAgICdlbmdpbmUuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU1RjE1XHU2NENFXHU3MkMwXHU2MTRCXHU4Q0M3XHU2NTk5XHUzMDAyJyxcclxuXHJcbiAgICAnd2Vla2x5LnRpdGxlJzogJ1x1NjcyQ1x1OTAzMVx1OEExOFx1OTMwNFx1NTIwNlx1NEY0OCcsXHJcbiAgICAnd2Vla2x5LmVtcHR5JzogJ1x1NjcyQ1x1OTAzMVx1NjZBQlx1NzEyMVx1NjVFNVx1OEExOFx1OEExOFx1OTMwNFx1MzAwMicsXHJcbiAgICAnd2Vla2x5LmJhclRvb2x0aXAnOiAne2RhdGV9OiB7Y291bnR9IFx1Njg5RCcsXHJcblxyXG4gICAgJ3BpcGVsaW5lLmluYm94JzogJ1x1NjUzNlx1NEVGNlx1N0JCMScsXHJcbiAgICAncGlwZWxpbmUudHJpYWdlJzogJ1x1NTIwNlx1OTg1RScsXHJcbiAgICAncGlwZWxpbmUucmF3JzogJ1x1NTM5Rlx1NTlDQicsXHJcbiAgICAncGlwZWxpbmUuY29tcGlsZSc6ICdcdTdERThcdThCNkYnLFxyXG4gICAgJ3BpcGVsaW5lLndpa2knOiAnXHU3N0U1XHU4QjU4XHU1RUFCJyxcclxuICAgICdwaXBlbGluZS5jbGlja05hdmlnYXRlJzogJ1x1OUVERVx1NjRDQVx1NTNFRlx1NUMwRVx1ODIyQScsXHJcblxyXG4gICAgJ3RvZGF5LnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1NzEyNlx1OUVERScsXHJcbiAgICAndG9kYXkudGFza3MnOiAnXHU0RUZCXHU1MkQ5JyxcclxuICAgICd0b2RheS5zdHJlYWsnOiAnXHU5MDIzXHU3RThDJyxcclxuICAgICd0b2RheS50b2RheSc6ICdcdTRFQ0FcdTU5MjknLFxyXG4gICAgJ3RvZGF5LmRhaWx5JzogJ1x1NkJDRlx1NjVFNScsXHJcbiAgICAndG9kYXkud2Vla2x5VG90YWwnOiAnXHU2NzJDXHU5MDMxXHU1MTcxIHtjb3VudH0gXHU2ODlEJyxcclxuICAgICd0b2RheS5qb3VybmFsJzogJ1x1NEVDQVx1NjVFNVx1NjVFNVx1OEExODoge2NvdW50fSBcdTY4OUQnLFxyXG4gICAgJ3RvZGF5LmNyZWF0ZU5vdGUnOiAnXHU1RUZBXHU3QUNCXHU0RUNBXHU2NUU1XHU3QjQ2XHU4QTE4JyxcclxuICAgICd0b2RheS5kb25lJzogJ0RvbmUnLFxyXG4gICAgJ3RvZGF5LnBlbmRpbmcnOiAnUGVuZGluZycsXHJcblxyXG4gICAgJ2dyb3d0aC50aXRsZSc6ICdcdTc3RTVcdThCNThcdTgyQjFcdTU3MTInLFxyXG4gICAgJ2dyb3d0aC50b2RheUpvdXJuYWwnOiAnXHU0RUNBXHU2NUU1XHU2NUU1XHU4QTE4OiB7Y291bnR9IFx1Njg5RCcsXHJcbiAgICAnZ3Jvd3RoLndlZWtseVRvdGFsJzogJ1x1NjcyQ1x1OTAzMVx1NTE3MSB7Y291bnR9IFx1Njg5RFx1OEExOFx1OTMwNCcsXHJcblxyXG4gICAgJ2ZlZWQudGl0bGUnOiAnXHU2RDNCXHU1MkQ1XHU2RDQxJyxcclxuXHJcbiAgICAnaGVhbHRoLnRpdGxlJzogJ1x1NzdFNVx1OEI1OFx1NUVBQlx1NTA2NVx1NUVCNycsXHJcbiAgICAnaGVhbHRoLnNjb3JlJzogJ3tzY29yZX0vMTAwJyxcclxuXHJcbiAgICAnbGF1bmNoLnRpdGxlJzogJ1x1NUZFQlx1OTAxRlx1NTU1Rlx1NTJENScsXHJcblxyXG4gICAgJ2hvdC50aXRsZSc6ICdcdTcxQjFcdTlFREVcdTUyRDVcdTYxNEInLFxyXG4gICAgJ2hvdC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTcxQjFcdTlFREVcdTUyRDVcdTYxNEJcdTMwMDInLFxyXG5cclxuICAgICdsaWZlLnRpdGxlJzogJ0xpZmUrQUknLFxyXG4gICAgJ2xpZmUuc3VidGl0bGUnOiAnXHU3NTFGXHU2RDNCIFx1MDBCNyBcdTVCNzhcdTdGRDIgXHUwMEI3IFx1NURFNVx1NEY1QyBcdTIwMTQgXHU0RTA5XHU2NTJGXHU2N0YxXHU5MDMxXHU2NzFGXHU3QkExXHU3NDA2JyxcclxuICAgICdsaWZlLnBpbGxhckxpZmUnOiAnXHU3NTFGXHU2RDNCJyxcclxuICAgICdsaWZlLnBpbGxhckxlYXJuaW5nJzogJ1x1NUI3OFx1N0ZEMicsXHJcbiAgICAnbGlmZS5waWxsYXJXb3JrJzogJ1x1NURFNVx1NEY1QycsXHJcbiAgICAnbGlmZS5oZWFsdGhQcm9ncmVzcyc6ICdcdTUwNjVcdTVFQjdcdTkwMzJcdTVFQTYnLFxyXG4gICAgJ2xpZmUuaGFiaXRUcmFja2luZyc6ICdcdTdGRDJcdTYxNjNcdThGRkRcdThFNjQnLFxyXG4gICAgJ2xpZmUubGVhcm5pbmdQcm9ncmVzcyc6ICdcdTVCNzhcdTdGRDJcdTkwMzJcdTVFQTYnLFxyXG4gICAgJ2xpZmUuc2tpbGxCdWlsZGluZyc6ICdcdTYyODBcdTgwRkRcdTU3RjlcdTk5MEEnLFxyXG4gICAgJ2xpZmUucHJvamVjdFByb2dyZXNzJzogJ1x1NUMwOFx1Njg0OFx1OTAzMlx1NUVBNicsXHJcbiAgICAnbGlmZS50b2RheVRhc2tzJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOScsXHJcbiAgICAnbGlmZS5hY3RpdmUnOiAnYWN0aXZlJyxcclxuICAgICdsaWZlLnRhc2tzJzogJ3Rhc2tzJyxcclxuICAgICdsaWZlLndlZWtseVJlcG9ydCc6ICdcdTkwMzFcdTU4MzEnLFxyXG4gICAgJ2xpZmUubW9udGhseVJlcG9ydCc6ICdcdTY3MDhcdTU4MzEnLFxyXG5cclxuICAgICdwaXBlbGluZS50aXRsZSc6ICdcdTdCQTFcdTkwNTMnLFxyXG4gICAgJ3BpcGVsaW5lLndlZWtseUNhcHR1cmVzJzogJ1x1NjcyQ1x1OTAzMVx1NjM1NVx1NzM3MicsXHJcbiAgICAncGlwZWxpbmUuaW5ib3hTZWN0aW9uJzogJ0luYm94ICh7Y291bnR9KScsXHJcbiAgICAncGlwZWxpbmUucmF3U2VjdGlvbic6ICdSYXcgKHtjb3VudH0pJyxcclxuICAgICdwaXBlbGluZS50aHJvdWdocHV0U2VjdGlvbic6ICdUaHJvdWdocHV0JyxcclxuICAgICdwaXBlbGluZS50YWJsZVRpdGxlJzogJ1x1NkExOVx1OTg0QycsXHJcbiAgICAncGlwZWxpbmUudGFibGVEYXlzJzogJ1x1NTkyOVx1NjU3OCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVTb3VyY2UnOiAnXHU0Rjg2XHU2RTkwJyxcclxuICAgICdwaXBlbGluZS50YWJsZVdvcmRzJzogJ1x1NUI1N1x1NjU3OCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVQcmlvcml0eSc6ICdcdTUxMkFcdTUxNDhcdTdEMUEnLFxyXG4gICAgJ3BpcGVsaW5lLm5vSW5ib3gnOiAnXHU2NkFCXHU3MTIxXHU1Rjg1XHU4NjU1XHU3NDA2IEluYm94XHUzMDAyJyxcclxuICAgICdwaXBlbGluZS5ub1Jhdyc6ICdcdTY2QUJcdTcxMjFcdTVGODVcdTdERThcdThCNkZcdTZBOTRcdTY4NDhcdTMwMDInLFxyXG4gICAgJ3BpcGVsaW5lLmN1cnJlbnRXZWVrJzogJ1x1NzU3Nlx1NTI0RFx1OTAzMVx1OTAxQVx1OTFDRjoge3RvdGFsfSBcdTY4OURcdThBMThcdTkzMDQsIFx1NjVFNVx1NTc0NyB7YXZnfScsXHJcblxyXG4gICAgJ2dhcmRlbi50aXRsZSc6ICdcdTc3RTVcdThCNThcdTgyQjFcdTU3MTInLFxyXG4gICAgJ2dhcmRlbi5ub3Rlcyc6ICd7Y291bnR9IFx1N0JDN1x1N0I0Nlx1OEExOCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UHJvamVjdHMnOiAnXHU1QzA4XHU2ODQ4ICgxIFByb2plY3RzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5QXJlYXMnOiAnXHU5ODE4XHU1N0RGICgyIEFyZWFzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UmVzb3VyY2VzJzogJ1x1OENDN1x1NkU5MCAoMyBSZXNvdXJjZXMpJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlJbmJveCc6ICdJbmJveCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UGVyaW9kaWMnOiAnXHU5MDMxXHU2NzFGIChQZXJpb2RpYyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVRvdGFsJzogJ1x1NTQwOFx1OEEwOCcsXHJcbiAgICAnZ2FyZGVuLnRhYmxlRGlyZWN0b3J5JzogJ1x1NzZFRVx1OTMwNCcsXHJcbiAgICAnZ2FyZGVuLnRhYmxlQ291bnQnOiAnXHU3QkM3XHU2NTc4JyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlTZWN0aW9uJzogJ1x1NTIwNlx1OTg1RScsXHJcbiAgICAnZ2FyZGVuLnJlY2VudFVwZGF0ZXMnOiAnXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwJyxcclxuICAgICdnYXJkZW4ucXVpY2tTZWFyY2gnOiAnXHU1RkVCXHU5MDFGXHU2N0U1XHU4QTYyJyxcclxuICAgICdnYXJkZW4uc2VhcmNoUGxhY2Vob2xkZXInOiAnXHU4RjM4XHU1MTY1XHU5NURDXHU5Mzc1XHU1QjU3XHU2NDFDXHU1QzBCXHU3N0U1XHU4QjU4XHU1RUFCLi4uJyxcclxuICAgICdnYXJkZW4uc2VhcmNoQnRuJzogJ1x1NjdFNVx1OEE2MicsXHJcbiAgICAnZ2FyZGVuLm5vUmVjZW50JzogJ1x1NjZBQlx1NzEyMVx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1MzAwMicsXHJcblxyXG4gICAgJ3NlYXJjaC5wbGFjZWhvbGRlcic6ICdcdTY0MUNcdTVDMEJcdTdCNDZcdThBMTguLi4nLFxyXG4gICAgJ3NlYXJjaC5idG4nOiAnXHU2NDFDXHU1QzBCJyxcclxuXHJcbiAgICAndG9vbHRpcC5yZWZyZXNoJzogJ1x1OTFDRFx1NjVCMFx1NjU3NFx1NzQwNicsXHJcbiAgICAndG9vbHRpcC5jb2xsYXBzZSc6ICdcdTYyOThcdTc1OEEnLFxyXG5cclxuICAgICdhaS50aXRsZSc6ICdBSSBcdTVDMERcdThBNzEnLFxyXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ1x1OEE2Mlx1NTU0RiBLT1MgXHU3N0U1XHU4QjU4XHU1RUFCLi4uJyxcclxuICAgICdhaS53ZWxjb21lJzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU1NTRGXHU2MjExXHU5NURDXHU2NUJDXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAxXHU1QzA4XHU2ODQ4XHU3MkMwXHU2MTRCXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTk1RENcdTc2ODRcdTU1NEZcdTk4NENcdTMwMDInLFxyXG4gICAgJ2FpLnNlbmRCdG4nOiAnXHU3NjdDXHU5MDAxJyxcclxuICAgICdhaS5jbGVhckJ0bic6ICdcdTZFMDVcdTdBN0FcdTVDMERcdThBNzEnLFxyXG4gICAgJ2FpLnRoaW5raW5nJzogJ1x1NjAxRFx1ODAwM1x1NEUyRC4uLicsXHJcbiAgICAnYWkubmVlZENvbmZpZyc6ICdcdTY3MkFcdTUwNzVcdTZFMkNcdTUyMzAgRkxPV25vdGUgXHU5MTREXHU3RjZFXHVGRjBDXHU0RTVGXHU2NzJBXHU2MjdFXHU1MjMwXHU2MjRCXHU1MkQ1IEFQSSBcdThBMkRcdTVCOUFcdTMwMDJcdThBQ0JcdTU3MjggRkxPV25vdGUgXHU0RTJEXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjBDXHU2MjE2XHU1NzI4IENvY2twaXQgXHU4QTJEXHU1QjlBXHU0RTJEXHU2MjRCXHU1MkQ1XHU1ODZCXHU1QkVCXHUzMDAyJyxcclxuICAgICdhaS5lcnJvcic6ICdcdThBQ0JcdTZDNDJcdTU5MzFcdTY1NTc6IHttc2d9JyxcclxuICAgICdhaS5yZXRyeSc6ICdcdTkxQ0RcdThBNjYnLFxyXG4gICAgJ2FpLmNvcHknOiAnXHU4OTA3XHU4OEZEJyxcclxuICAgICdhaS5jb3BpZWQnOiAnXHU1REYyXHU4OTA3XHU4OEZEJyxcclxuICAgICdhaS5tb2RlbExhYmVsJzogJ1x1NkEyMVx1NTc4QicsXHJcbiAgICAnYWkuY29ubmVjdGVkJzogJ1x1NURGMlx1OTAyM1x1NjNBNScsXHJcbiAgICAnYWkubm90Q29uZmlndXJlZCc6ICdcdTY3MkFcdTkxNERcdTdGNkUnLFxyXG4gICAgJ2FpLndlbGNvbWVUaXRsZSc6ICdBc2sgS09TJyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHMnOiAnXHU1QzA4XHU2ODQ4XHU2OTgyXHU4OUJEJyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHNEZXNjJzogJ1x1NjdFNVx1NzcwQlx1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OFx1OTAzMlx1NUVBNicsXHJcbiAgICAnYWkuc3VnZ2VzdFJlY2VudCc6ICdcdThGRDFcdTY3MUZcdTZEM0JcdTUyRDUnLFxyXG4gICAgJ2FpLnN1Z2dlc3RSZWNlbnREZXNjJzogJ1x1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NzY4NFx1N0I0Nlx1OEExOCcsXHJcbiAgICAnYWkuc3VnZ2VzdFNlYXJjaCc6ICdcdTY0MUNcdTVDMEJcdTc3RTVcdThCNThcdTVFQUInLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2hEZXNjJzogJ1x1NjdFNVx1NjI3RVx1NzI3OVx1NUI5QVx1NTE2N1x1NUJCOScsXHJcblxyXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbic6ICdBSSBQcm92aWRlcicsXHJcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uRGVzYyc6ICdcdTkxNERcdTdGNkUgQUkgXHU1QzBEXHU4QTcxXHU3Njg0IEFQSSBcdTYzQTVcdTUxNjVcdTUzQzNcdTY1NzhcdTMwMDJcdTgyRTUgRkxPV25vdGUgXHU1REYyXHU5MTREXHU3RjZFIEFJIFByb3ZpZGVyXHVGRjA4XHU2M0E4XHU4NUE2XHVGRjA5XHVGRjBDQ29ja3BpdCBcdTVDMDdcdTgxRUFcdTUyRDVcdThCODBcdTUzRDZcdTUxNzZcdThBMkRcdTVCOUFcdTMwMDJcdTc1NTlcdTdBN0FcdTUyNDdcdTgwNEFcdTU5MjlcdTUzNDBcdTRFMERcdTUzRUZcdTc1MjhcdTMwMDInLFxyXG4gICAgJ2FpLmFwaUVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXHJcbiAgICAnYWkuYXBpS2V5JzogJ0FQSSBLZXknLFxyXG4gICAgJ2FpLm1vZGVsJzogJ1x1NkEyMVx1NTc4Qlx1NTQwRFx1N0EzMScsXHJcbiAgICAnYWkuc3lzdGVtUHJvbXB0JzogJ1x1N0NGQlx1N0Q3MVx1NjNEMFx1NzkzQVx1OEE1RScsXHJcbiAgICAnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnXHU0RjYwXHU2NjJGXHU0RTAwXHU1MDBCXHU3N0U1XHU4QjU4XHU3QkExXHU3NDA2XHU1MkE5XHU2MjRCXHVGRjBDXHU1RTZCXHU1MkE5XHU3NTI4XHU2MjM2XHU4NjU1XHU3NDA2IEtPUyBcdTc3RTVcdThCNThcdTVFQUJcdTMwMDInLFxyXG5cclxuICAgICdwcm92aWRlci5jbGF1ZGUnOiAnQ2xhdWRlJyxcclxuICAgICdwcm92aWRlci5jb2RleCc6ICdDb2RleCcsXHJcbiAgICAncHJvdmlkZXIub3BlbmNvZGUnOiAnT3BlbkNvZGUnLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXHJcbiAgICAncHJvdmlkZXIuYXBpS2V5JzogJ0FQSSBLZXknLFxyXG4gICAgJ3Byb3ZpZGVyLm1vZGVsJzogJ01vZGVsJyxcclxuICAgICdwcm92aWRlci5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXHJcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnWW91IGFyZSBhIGhlbHBmdWwgYXNzaXN0YW50Li4uJyxcclxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlcic6ICdBY3RpdmUgQUkgUHJvdmlkZXInLFxyXG4gICAgJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyRGVzYyc6ICdTZWxlY3Qgd2hpY2ggcHJvdmlkZXIgdGhlIEFJIENoYXQgcGFuZWwgdXNlcy4nLFxyXG4gICAgJ3Byb3ZpZGVyLnNldHRpbmdzJzogJ1Byb3ZpZGVyIFNldHRpbmdzJyxcclxuICAgICdwcm92aWRlci5sYWJlbFNldHRpbmdzJzogJ3tsYWJlbH0gU2V0dGluZ3MnLFxyXG4gICAgJ3Byb3ZpZGVyLmRlZmF1bHRFbmRwb2ludCc6ICdcdTk4MTBcdThBMkQ6IHtlbmRwb2ludH0nLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50RGVzYyc6ICdPcGVuQUkgXHU3NkY4XHU1QkI5XHU3Njg0IEFQSSBFbmRwb2ludCBVUkwnLFxyXG4gICAgJ3Byb3ZpZGVyLmFwaUtleURlc2MnOiAnc2stLi4uIFx1NjIxNiBBUEkgS2V5JyxcclxuICAgICdwcm92aWRlci5tb2RlbERlc2MnOiAnXHU2QTIxXHU1NzhCXHU4QjU4XHU1MjI1XHU3QjI2JyxcclxuICAgICdwcm92aWRlci5wcmVzZXRNb2RlbHMnOiAne21vZGVsc30nLFxyXG5cclxuICAgICd0YWIuZGFzaGJvYXJkJzogJ1x1NTEwMFx1ODg2OFx1Njc3RicsXHJcbiAgICAndGFiLmxpZmUnOiAnXHU3NTFGXHU2RDNCJyxcclxuICAgICd0YWIucGlwZWxpbmUnOiAnXHU3QkExXHU5MDUzJyxcclxuICAgICd0YWIuZ2FyZGVuJzogJ1x1NzdFNVx1OEI1OFx1ODJCMVx1NTcxMicsXHJcbiAgICAndGFiLnNldHRpbmdzJzogJ1x1OEEyRFx1NUI5QScsXHJcblxyXG4gICAgJ3NldHRpbmdzLnRpdGxlJzogJ1x1OEEyRFx1NUI5QScsXHJcbiAgICAnc2V0dGluZ3MuZGVzYyc6ICdcdTkxNERcdTdGNkUgS09TIENvY2twaXQgXHU3Njg0XHU5ODZGXHU3OTNBXHU4MjA3XHU4ODRDXHU3MEJBJyxcclxuICAgICdzZXR0aW5ncy5sb2NhbGUnOiAnXHU0RUNCXHU5NzYyXHU4QTlFXHU4QTAwJyxcclxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdcdTRFQ0JcdTk3NjJcdThBOUVcdThBMDAnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwNzhcdTY0QzcgQ29ja3BpdCBcdTk4NkZcdTc5M0FcdThBOUVcdThBMDBcdTMwMDJcdTUyMDdcdTYzREJcdTVGOENcdTRFQ0JcdTk3NjJcdTVDMDdcdTdBQ0JcdTUzNzNcdTkxQ0RcdTY1QjBcdTY1NzRcdTc0MDZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lJzogJ1x1NTdGQVx1NjcyQ1x1NEUzQlx1OTg0QycsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVEYXJrJzogJ1x1NjY5N1x1OUVEMScsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVMaWdodCc6ICdcdTY2MEVcdTRFQUUnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lU3lzdGVtJzogJ1x1OERERlx1OTZBOFx1N0NGQlx1N0Q3MScsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uJzogJ1x1NUI2M1x1N0JDMFx1NjAyN1x1NUYzN1x1OEFCRlx1ODI3MicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3ByaW5nJzogJ1x1NjYyNScsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3VtbWVyJzogJ1x1NTkwRicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uQXV0dW1uJzogJ1x1NzlDQicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uV2ludGVyJzogJ1x1NTFBQycsXHJcbiAgICAnc2V0dGluZ3MuZm9udFNpemUnOiAnXHU1QjU3XHU4NjVGJyxcclxuICAgICdzZXR0aW5ncy5mb250U21hbGwnOiAnXHU1QzBGJyxcclxuICAgICdzZXR0aW5ncy5mb250TWVkaXVtJzogJ1x1NEUyRCcsXHJcbiAgICAnc2V0dGluZ3MuZm9udExhcmdlJzogJ1x1NTkyNycsXHJcbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdcdTkwMUFcdTc1MjgnLFxyXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTU1Rlx1NTJENVx1NjY0Mlx1ODFFQVx1NTJENVx1OTU4Qlx1NTU1RiBLT1MgQ29ja3BpdCcsXHJcbiAgICAnc2V0dGluZ3MuYXV0b09wZW5EZXNjJzogJ09ic2lkaWFuIFx1NTU1Rlx1NTJENVx1NjY0Mlx1ODFFQVx1NTJENVx1NTcyOFx1NTA3NFx1OTA4QVx1NkIwNFx1OTU4Qlx1NTU1RiBLT1MgQ29ja3BpdFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJENVx1NjU3OCcsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdcdTk4NkZcdTc5M0FcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTZBOTRcdTY4NDhcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ1x1NjcwMFx1NTkyN1x1NEVGQlx1NTJEOVx1NjU3OCcsXHJcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1OTg2Rlx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOVx1NzY4NFx1NjU3OFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnXHU2NzAwXHU1OTI3IEluYm94IFx1NjU3OCcsXHJcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ1x1OTg2Rlx1NzkzQSBJbmJveCBcdTZBOTRcdTU0MERcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ1x1OTVEQ1x1NjVCQycsXHJcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxyXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgS09TX0xMTS1XaWtpIFx1NzdFNVx1OEI1OFx1N0JBMVx1NzQwNlx1NTEwMFx1ODg2OFx1Njc3Rlx1MzAwMktPUyBcdTc1MUZcdTYxNEJcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm5vdGVzQ291bnQnOiAnXHU2NTJGXHU2M0Y0XHU2ODlEXHU3NkVFOiB7Y291bnR9IFx1N0JDN1x1N0I0Nlx1OEExOCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcclxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcclxuXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkJzogJ1x1NTEwMFx1ODg2OFx1Njc3Rlx1NTM0MFx1NTg0QScsXHJcbiAgICAnc2V0dGluZ3MuZGFzaGJvYXJkRGVzYyc6ICdcdTYzQTdcdTUyMzZcdTUxMDBcdTg4NjhcdTY3N0ZcdTRFMEFcdTU0MDRcdTUzNDBcdTU4NEFcdTc2ODRcdTk4NkZcdTc5M0FcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLmRhdGFMaW1pdHMnOiAnXHU4Q0M3XHU2NTk5XHU5NjUwXHU1MjM2JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrcyc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDknLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzRGVzYyc6ICdcdTZCQ0ZcdTY1RTVcdTdCNDZcdThBMThcdTRFRkJcdTUyRDlcdTUyMTdcdTg4NjhcdTgyMDdcdTkwMzJcdTVFQTZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Qcm9qZWN0cyc6ICdcdTZEM0JcdThFOERcdTVDMDhcdTY4NDgnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Qcm9qZWN0c0Rlc2MnOiAnXHU1QzA4XHU2ODQ4XHU1MzYxXHU3MjQ3XHVGRjBDXHU1NDJCXHU1MTJBXHU1MTQ4XHU3RDFBXHU4MjA3XHU5MDMyXHU1RUE2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0cyc6ICdcdTc3RTVcdThCNThcdTVFQUJcdTdENzFcdThBMDgnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzRGVzYyc6ICdcdTdFM0RcdTdCNDZcdThBMThcdTY1NzhcdTMwMDFcdTZEM0JcdThFOERcdTVDMDhcdTY4NDhcdTMwMDFJbmJveCBcdThBMDhcdTY1NzhcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDUnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eURlc2MnOiAnXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU3Njg0XHU2QTk0XHU2ODQ4XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uTmF2JzogJ1x1NUMwRVx1ODIyQScsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbk5hdkRlc2MnOiAnXHU1RkVCXHU5MDFGXHU5MDIzXHU3RDUwXHU1MjMwXHU5ODE4XHU1N0RGXHUzMDAxSW5ib3hcdTMwMDFcdTcxQjFcdTlFREVcdTVGRUJcdTUzRDZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzJzogJ0luYm94IFx1NkE5NFx1Njg0OCcsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkluYm94RmlsZXNEZXNjJzogJzAgSW5ib3gvIFx1NEUyRFx1NUY4NVx1ODY1NVx1NzQwNlx1NkE5NFx1Njg0OFx1NTIxN1x1ODg2OFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkVuZ2luZVN0YXRlJzogJ1x1NUYxNVx1NjRDRVx1NzJDMFx1NjE0QicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkVuZ2luZVN0YXRlRGVzYyc6ICdUcmlhZ2UvQ29tcGlsZS9MaW5rIFx1NUYxNVx1NjRDRVx1NzJDMFx1NjE0Qlx1NjMwN1x1NzkzQVx1NzFDOFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbldlZWtseUNoYXJ0JzogJ1x1OTAzMVx1NUVBNlx1NTcxNlx1ODg2OCcsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbldlZWtseUNoYXJ0RGVzYyc6ICdcdTZCQ0ZcdTkwMzFcdTY1RTVcdThBMThcdTYzNTVcdTczNzJcdTkxQ0ZcdTc2ODRcdTk1NzdcdTY4OURcdTU3MTZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLmdlbmVyYWxUYWInOiAnXHU5MDFBXHU3NTI4JyxcclxuICAgICdzZXR0aW5ncy5wcm92aWRlclRhYic6ICdQcm92aWRlciBcdThBMkRcdTVCOUEnLFxyXG5cclxuICAgICdub3RpY2UudHJpYWdlJzogJ0tPUy1UcmlhZ2UgXHU1REYyXHU1NTVGXHU1MkQ1JyxcclxuICAgICdub3RpY2UuY29tcGlsZSc6ICdLT1MtQ29tcGlsZSBcdTVERjJcdTU1NUZcdTUyRDUnLFxyXG4gICAgJ25vdGljZS5saW5rJzogJ0tPUy1MaW5rIFx1NURGMlx1NTU1Rlx1NTJENScsXHJcbiAgICAnbm90aWNlLnF1ZXJ5JzogJ0tPUy1RdWVyeSBcdTk3NjJcdTY3N0ZcdTVERjJcdTk1OEJcdTU1NUYnLFxyXG4gICAgJ25vdGljZS5kYWlseSc6ICdcdTZCNjNcdTU3MjhcdTVFRkFcdTdBQ0IgRGFpbHkgT3Blbi4uLicsXHJcbiAgICAnbm90aWNlLndlZWsnOiAnXHU2QjYzXHU1NzI4XHU3NTFGXHU2MjEwIFdlZWstUmV2aWV3Li4uJyxcclxuICAgICdub3RpY2UuaW5pdCc6ICdcdTZCNjNcdTU3MjhcdTU3RjdcdTg4NEMgS09TLUluaXQgXHU1MDY1XHU1RUI3XHU2QUEyXHU2N0U1Li4uJyxcclxuICAgICdub3RpY2UubGlmZSc6ICdMaWZlK0FJIFx1OTc2Mlx1Njc3Rlx1NURGMlx1OTU4Qlx1NTU1RicsXHJcbiAgICAnbm90aWNlLmV4ZWN1dGluZyc6ICdcdTU3RjdcdTg4NENcdTRFMkQ6IHthY3Rpb259JyxcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zbGF0ZSBhIGtleSB1c2luZyB0aGUgY3VycmVudCBsb2NhbGUuXHJcbiAqIFN1cHBvcnRzIHtwbGFjZWhvbGRlcn0gc3Vic3RpdHV0aW9uIHZpYSB0aGUgcGFyYW1zIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHQoa2V5LCBsb2NhbGUsIHBhcmFtcyA9IHt9KSB7XHJcbiAgY29uc3QgZGljdCA9IExPQ0FMRVNbbG9jYWxlXSB8fCBMT0NBTEVTWyd6aC1jbiddO1xyXG4gIGxldCB0ZXh0ID0gZGljdFtrZXldO1xyXG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRleHQgPSBMT0NBTEVTWyd6aC1jbiddW2tleV07XHJcbiAgfVxyXG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBrZXk7XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHBhcmFtcykpIHtcclxuICAgIHRleHQgPSBTdHJpbmcodGV4dCkucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7a31cXFxcfWAsICdnJyksIFN0cmluZyh2KSk7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgdCwgTE9DQUxFUywgTE9DQUxFX0tFWVM6IE9iamVjdC5rZXlzKExPQ0FMRVMpIH07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCAtIFNTRSBTdHJlYW0gUGFyc2VyXG4vLyBTdXBwb3J0cyBPcGVuQUkgYW5kIEFudGhyb3BpYyBzdHJlYW1pbmcgZm9ybWF0cy5cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmVhbWluZyByZXNwb25zZSBmcm9tIHRoZSBnaXZlbiBwcm92aWRlciB0eXBlLlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYXBwcm9wcmlhdGUgU1NFIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvdmlkZXJUeXBlIC0gJ29wZW5haScgb3IgJ2FudGhyb3BpYydcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIC0gRmV0Y2ggUmVzcG9uc2Ugb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gY2FsbGJhY2tzIC0geyBvblRva2VuLCBvblJlYXNvbmluZywgb25Ub29sQmxvY2tTdGFydCwgb25Ub29sQmxvY2tVcGRhdGUsIG9uVG9vbEJsb2NrRW5kLCBvbkRvbmUsIG9uRXJyb3IgfVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlU3RyZWFtKHByb3ZpZGVyVHlwZSwgcmVzcG9uc2UsIGNhbGxiYWNrcykge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdmFyIGVyckJvZHkgPSAnJztcbiAgICB0cnkgeyBlcnJCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpOyB9IGNhdGNoIChfKSB7fVxuICAgIHZhciBlcnJNc2cgPSAnSFRUUCAnICsgcmVzcG9uc2Uuc3RhdHVzICsgKGVyckJvZHkgPyAnOiAnICsgZXJyQm9keS5zbGljZSgwLCAyMDApIDogJycpO1xuICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikgY2FsbGJhY2tzLm9uRXJyb3IobmV3IEVycm9yKGVyck1zZykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICB2YXIgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG4gIGlmIChwcm92aWRlclR5cGUgPT09ICdhbnRocm9waWMnKSB7XG4gICAgYXdhaXQgcGFyc2VBbnRocm9waWNTU0UocmVhZGVyLCBkZWNvZGVyLCBjYWxsYmFja3MpO1xuICB9IGVsc2Uge1xuICAgIGF3YWl0IHBhcnNlT3BlbmFpU1NFKHJlYWRlciwgZGVjb2RlciwgY2FsbGJhY2tzKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIE9wZW5BSS1zdHlsZSBTU0Ugc3RyZWFtLlxuICpcbiAqIExpbmUgZm9ybWF0OlxuICogICBkYXRhOiB7XCJjaG9pY2VzXCI6W3tcImRlbHRhXCI6e1wiY29udGVudFwiOlwiSGVsbG9cIn19XX1cbiAqICAgZGF0YTogW0RPTkVdXG4gKlxuICogQWxzbyBzdXBwb3J0cyByZWFzb25pbmdfY29udGVudCAobzEvbzMgbW9kZWxzKTpcbiAqICAgZGF0YToge1wiY2hvaWNlc1wiOlt7XCJkZWx0YVwiOntcInJlYXNvbmluZ19jb250ZW50XCI6XCIuLi5cIn19XX1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGFyc2VPcGVuYWlTU0UocmVhZGVyLCBkZWNvZGVyLCBjYWxsYmFja3MpIHtcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuICB2YXIgb25Ub2tlbiA9IGNhbGxiYWNrcy5vblRva2VuO1xuICB2YXIgb25SZWFzb25pbmcgPSBjYWxsYmFja3Mub25SZWFzb25pbmc7XG4gIHZhciBvbkRvbmUgPSBjYWxsYmFja3Mub25Eb25lO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgaWYgKHJlc3VsdC5kb25lKSBicmVhaztcblxuICAgIGJ1ZmZlciArPSBkZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgIHZhciBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdHJpbW1lZCA9IGxpbmVzW2ldLnRyaW0oKTtcbiAgICAgIGlmICghdHJpbW1lZCB8fCB0cmltbWVkID09PSAnZGF0YTogW0RPTkVdJykgY29udGludWU7XG4gICAgICBpZiAodHJpbW1lZC5pbmRleE9mKCdkYXRhOiAnKSAhPT0gMCkgY29udGludWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZSh0cmltbWVkLnNsaWNlKDYpKTtcbiAgICAgICAgdmFyIGNob2ljZSA9IGpzb24uY2hvaWNlcyAmJiBqc29uLmNob2ljZXNbMF07XG4gICAgICAgIGlmICghY2hvaWNlKSBjb250aW51ZTtcbiAgICAgICAgdmFyIGRlbHRhID0gY2hvaWNlLmRlbHRhO1xuICAgICAgICBpZiAoIWRlbHRhKSBjb250aW51ZTtcblxuICAgICAgICAvLyBUZXh0IGNvbnRlbnRcbiAgICAgICAgaWYgKGRlbHRhLmNvbnRlbnQgJiYgb25Ub2tlbikge1xuICAgICAgICAgIG9uVG9rZW4oZGVsdGEuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWFzb25pbmcgY29udGVudCAobzEvbzMgbW9kZWxzKVxuICAgICAgICBpZiAoZGVsdGEucmVhc29uaW5nX2NvbnRlbnQgJiYgb25SZWFzb25pbmcpIHtcbiAgICAgICAgICBvblJlYXNvbmluZyhkZWx0YS5yZWFzb25pbmdfY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5pc2ggcmVhc29uXG4gICAgICAgIHZhciBmaW5pc2hSZWFzb24gPSBjaG9pY2UuZmluaXNoX3JlYXNvbjtcbiAgICAgICAgaWYgKGZpbmlzaFJlYXNvbiAmJiBmaW5pc2hSZWFzb24gIT09ICdudWxsJyAmJiBvbkRvbmUpIHtcbiAgICAgICAgICBvbkRvbmUoeyBmaW5pc2hSZWFzb246IGZpbmlzaFJlYXNvbiwgdXNhZ2U6IGpzb24udXNhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gU2luZ2xlIGxpbmUgcGFyc2UgZmFpbHVyZSBcdTIwMTQgc2tpcCwgZG9uJ3QgYnJlYWsgc3RyZWFtXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyByZW1haW5pbmcgYnVmZmVyXG4gIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgdmFyIHQgPSBidWZmZXIudHJpbSgpO1xuICAgIGlmICh0LmluZGV4T2YoJ2RhdGE6ICcpID09PSAwICYmIHQgIT09ICdkYXRhOiBbRE9ORV0nKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UodC5zbGljZSg2KSk7XG4gICAgICAgIHZhciBjaG9pY2UgPSBqc29uLmNob2ljZXMgJiYganNvbi5jaG9pY2VzWzBdO1xuICAgICAgICBpZiAoY2hvaWNlICYmIGNob2ljZS5kZWx0YSAmJiBjaG9pY2UuZGVsdGEuY29udGVudCAmJiBvblRva2VuKSB7XG4gICAgICAgICAgb25Ub2tlbihjaG9pY2UuZGVsdGEuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuICB9XG5cbiAgaWYgKG9uRG9uZSkgb25Eb25lKHt9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBBbnRocm9waWMtc3R5bGUgU1NFIHN0cmVhbS5cbiAqXG4gKiBFdmVudCBmb3JtYXQ6XG4gKiAgIGV2ZW50OiBjb250ZW50X2Jsb2NrX2RlbHRhXG4gKiAgIGRhdGE6IHtcImRlbHRhXCI6e1widHlwZVwiOlwidGV4dF9kZWx0YVwiLFwidGV4dFwiOlwiSGVsbG9cIn19XG4gKlxuICogICBldmVudDogbWVzc2FnZV9kZWx0YVxuICogICBkYXRhOiB7XCJkZWx0YVwiOntcInN0b3BfcmVhc29uXCI6XCJlbmRfdHVyblwifSxcInVzYWdlXCI6ey4uLn19XG4gKlxuICogICBldmVudDogY29udGVudF9ibG9ja19zdGFydFxuICogICBkYXRhOiB7XCJpbmRleFwiOjAsXCJjb250ZW50X2Jsb2NrXCI6e1widHlwZVwiOlwidGV4dFwifX1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGFyc2VBbnRocm9waWNTU0UocmVhZGVyLCBkZWNvZGVyLCBjYWxsYmFja3MpIHtcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuICB2YXIgY3VycmVudEV2ZW50ID0gJyc7XG4gIHZhciBvblRva2VuID0gY2FsbGJhY2tzLm9uVG9rZW47XG4gIHZhciBvbkRvbmUgPSBjYWxsYmFja3Mub25Eb25lO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgaWYgKHJlc3VsdC5kb25lKSBicmVhaztcblxuICAgIGJ1ZmZlciArPSBkZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgIHZhciBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGxpbmVzW2ldO1xuXG4gICAgICBpZiAobGluZS5pbmRleE9mKCdldmVudDogJykgPT09IDApIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gbGluZS5zbGljZSg3KS50cmltKCk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignZGF0YTogJykgPT09IDApIHtcbiAgICAgICAgdmFyIGRhdGFTdHIgPSBsaW5lLnNsaWNlKDYpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFkYXRhU3RyKSBjb250aW51ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcblxuICAgICAgICAgIHN3aXRjaCAoY3VycmVudEV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdjb250ZW50X2Jsb2NrX3N0YXJ0JzpcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vblRvb2xCbG9ja1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uVG9vbEJsb2NrU3RhcnQoe1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGRhdGEuaW5kZXgsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBkYXRhLmNvbnRlbnRfYmxvY2sgJiYgZGF0YS5jb250ZW50X2Jsb2NrLnR5cGUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLmNvbnRlbnRfYmxvY2sgJiYgZGF0YS5jb250ZW50X2Jsb2NrLm5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnRfYmxvY2tfZGVsdGEnOlxuICAgICAgICAgICAgICBpZiAoZGF0YS5kZWx0YSAmJiBkYXRhLmRlbHRhLnR5cGUgPT09ICd0ZXh0X2RlbHRhJyAmJiBkYXRhLmRlbHRhLnRleHQgJiYgb25Ub2tlbikge1xuICAgICAgICAgICAgICAgIG9uVG9rZW4oZGF0YS5kZWx0YS50ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZGF0YS5kZWx0YSAmJiBkYXRhLmRlbHRhLnR5cGUgPT09ICdpbnB1dF9qc29uX2RlbHRhJyAmJiBkYXRhLmRlbHRhLnBhcnRpYWxfanNvbiAmJiBjYWxsYmFja3Mub25Ub29sQmxvY2tVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25Ub29sQmxvY2tVcGRhdGUoe1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGRhdGEuaW5kZXgsXG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsX2pzb246IGRhdGEuZGVsdGEucGFydGlhbF9qc29uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb250ZW50X2Jsb2NrX3N0b3AnOlxuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uVG9vbEJsb2NrRW5kKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uVG9vbEJsb2NrRW5kKHsgaW5kZXg6IGRhdGEuaW5kZXggfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2VfZGVsdGEnOlxuICAgICAgICAgICAgICBpZiAob25Eb25lKSB7XG4gICAgICAgICAgICAgICAgb25Eb25lKHtcbiAgICAgICAgICAgICAgICAgIHN0b3BSZWFzb246IGRhdGEuZGVsdGEgJiYgZGF0YS5kZWx0YS5zdG9wX3JlYXNvbixcbiAgICAgICAgICAgICAgICAgIHVzYWdlOiBkYXRhLnVzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtZXNzYWdlX3N0YXJ0JzpcbiAgICAgICAgICAgICAgLy8gTWVzc2FnZSBpbml0aWFsaXplZCBcdTIwMTQgbm8gYWN0aW9uIG5lZWRlZFxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncGluZyc6XG4gICAgICAgICAgICAgIC8vIEhlYXJ0YmVhdCBcdTIwMTQgbm8gYWN0aW9uIG5lZWRlZFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAvLyBTaW5nbGUgbGluZSBwYXJzZSBmYWlsdXJlIFx1MjAxNCBza2lwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAob25Eb25lKSBvbkRvbmUoe30pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcGFyc2VTdHJlYW0gfTtcbiIsICIvLyBLT1MgQ29ja3BpdCAtIEFJIENoYXQgU2VydmljZSAodjAuNC4wKVxuLy8gTWVzc2FnZSBtb2RlbDoge2lkLCByb2xlLCB0ZXh0LCBibG9ja3NbXSwgcmVhc29uaW5nLCBtZXRhLCAuLi59XG4vLyBTdHJlYW0gcGFyc2VyOiBkZWxlZ2F0ZWQgdG8gc3RyZWFtLXBhcnNlci5qc1xuXG5jb25zdCBERUZBVUxUX1NZU1RFTV9QUk9NUFQgPSAnWW91IGFyZSBhIGtub3dsZWRnZSBtYW5hZ2VtZW50IGFzc2lzdGFudCBoZWxwaW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRoZWlyIEtPUyB2YXVsdC4gUmVzcG9uZCBjb25jaXNlbHkgaW4gdGhlIHVzZXJcXCdzIGxhbmd1YWdlLic7XG5cbmNvbnN0IFBST1ZJREVSX1RZUEVTID0ge1xuICBjbGF1ZGU6ICdhbnRocm9waWMnLFxuICBjb2RleDogJ29wZW5haScsXG4gIG9wZW5jb2RlOiAnb3BlbmFpJyxcbn07XG5cbnZhciBfZ2xvYmFsTXNnQ291bnRlciA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgbWVzc2FnZSBJRC5cbiAqIEZvcm1hdDogbXNnLXt0aW1lc3RhbXB9LXtjb3VudGVyMzZ9XG4gKi9cbmZ1bmN0aW9uIGdlbk1zZ0lkKCkge1xuICByZXR1cm4gJ21zZy0nICsgRGF0ZS5ub3coKSArICctJyArICgrK19nbG9iYWxNc2dDb3VudGVyKS50b1N0cmluZygzNik7XG59XG5cbi8qKlxuICogVXBncmFkZSBhbiBvbGQtZm9ybWF0IG1lc3NhZ2Uge3JvbGUsIGNvbnRlbnR9IHRvIG5ldyBNZXNzYWdlIGZvcm1hdC5cbiAqIERldGVjdGVkIGJ5IGFic2VuY2Ugb2YgYGJsb2Nrc2AgZmllbGQuXG4gKi9cbmZ1bmN0aW9uIHVwZ3JhZGVNZXNzYWdlKG1zZykge1xuICBpZiAobXNnLmJsb2NrcykgcmV0dXJuIG1zZztcblxuICB2YXIgdGV4dCA9IG1zZy5jb250ZW50IHx8IG1zZy50ZXh0IHx8IG1zZy5zdW1tYXJ5IHx8ICcnO1xuICByZXR1cm4ge1xuICAgIGlkOiBtc2cuaWQgfHwgZ2VuTXNnSWQoKSxcbiAgICByb2xlOiBtc2cucm9sZSB8fCAndXNlcicsXG4gICAgdGV4dDogdGV4dCxcbiAgICBjcmVhdGVkQXQ6ICh0eXBlb2YgbXNnLmNyZWF0ZWRBdCA9PT0gJ251bWJlcicpID8gbXNnLmNyZWF0ZWRBdCA6IERhdGUubm93KCksXG4gICAgbGlua2VkQ29udGV4dEZpbGVzOiBtc2cubGlua2VkQ29udGV4dEZpbGVzIHx8IFtdLFxuICAgIHJlYXNvbmluZzogbXNnLnJlYXNvbmluZyB8fCAnJyxcbiAgICBtZXRhOiBtc2cubWV0YSB8fCAnJyxcbiAgICBibG9ja3M6IG1zZy5ibG9ja3MgfHwgW3sgdHlwZTogJ3N0cmVhbS10ZXh0JywgdGV4dDogdGV4dCB9XSxcbiAgICBwZW5kaW5nOiBtc2cucGVuZGluZyA9PT0gdHJ1ZSxcbiAgICBlcnJvcjogbXNnLmVycm9yIHx8ICcnLFxuICB9O1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgbmV3IE1lc3NhZ2Ugb2JqZWN0IGZvciB0aGUgZ2l2ZW4gcm9sZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShyb2xlLCB0ZXh0LCBjb250ZXh0RmlsZXMpIHtcbiAgdmFyIG1zZyA9IHtcbiAgICBpZDogZ2VuTXNnSWQoKSxcbiAgICByb2xlOiByb2xlLFxuICAgIHRleHQ6IHRleHQgfHwgJycsXG4gICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuICAgIGxpbmtlZENvbnRleHRGaWxlczogY29udGV4dEZpbGVzIHx8IFtdLFxuICB9O1xuXG4gIGlmIChyb2xlID09PSAnYXNzaXN0YW50Jykge1xuICAgIG1zZy5yZWFzb25pbmcgPSAnJztcbiAgICBtc2cubWV0YSA9ICcnO1xuICAgIG1zZy5ibG9ja3MgPSBbXTtcbiAgICBtc2cucGVuZGluZyA9IGZhbHNlO1xuICAgIG1zZy5lcnJvciA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIG1zZztcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgQVBJIGVuZHBvaW50IFVSTCBmcm9tIGJhc2UgVVJMIGFuZCBwcm92aWRlciB0eXBlLlxuICovXG5mdW5jdGlvbiBidWlsZEVuZHBvaW50KGJhc2VVcmwsIHByb3ZpZGVyVHlwZSkge1xuICB2YXIgdXJsID0gU3RyaW5nKGJhc2VVcmwgfHwgJycpLnRyaW0oKTtcbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gcHJvdmlkZXJUeXBlID09PSAnYW50aHJvcGljJ1xuICAgICAgPyAnaHR0cHM6Ly9hcGkuYW50aHJvcGljLmNvbS92MS9tZXNzYWdlcydcbiAgICAgIDogJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9ucyc7XG4gIH1cbiAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLyskLywgJycpO1xuICBpZiAocHJvdmlkZXJUeXBlID09PSAnYW50aHJvcGljJykge1xuICAgIGlmICghL1xcL21lc3NhZ2VzJC9pLnRlc3QodXJsKSkgdXJsICs9ICcvbWVzc2FnZXMnO1xuICB9IGVsc2Uge1xuICAgIGlmICghL1xcL2NoYXRcXC9jb21wbGV0aW9ucyQvaS50ZXN0KHVybCkpIHVybCArPSAnL2NoYXQvY29tcGxldGlvbnMnO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBib2R5IGFuZCBoZWFkZXJzIGZvciB0aGUgZ2l2ZW4gcHJvdmlkZXIgdHlwZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRSZXF1ZXN0KHByb3ZpZGVyVHlwZSwgbW9kZWwsIG1lc3NhZ2VzLCBzeXN0ZW1Qcm9tcHQpIHtcbiAgdmFyIGFwaU1lc3NhZ2VzID0gbWVzc2FnZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0ucm9sZSAhPT0gJ3N5c3RlbSc7IH0pXG4gICAgLm1hcChmdW5jdGlvbihtKSB7IHJldHVybiB7IHJvbGU6IG0ucm9sZSwgY29udGVudDogbS50ZXh0IHx8ICcnIH07IH0pO1xuXG4gIGlmIChwcm92aWRlclR5cGUgPT09ICdhbnRocm9waWMnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICBtYXhfdG9rZW5zOiA0MDk2LFxuICAgICAgICBtZXNzYWdlczogYXBpTWVzc2FnZXMsXG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFwaS1rZXknOiAnJyxcbiAgICAgICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogJzIwMjMtMDYtMDEnLFxuICAgICAgfSxcbiAgICAgIHN5c3RlbUZpZWxkOiBzeXN0ZW1Qcm9tcHQgfHwgREVGQVVMVF9TWVNURU1fUFJPTVBULFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHsgcm9sZTogJ3N5c3RlbScsIGNvbnRlbnQ6IHN5c3RlbVByb21wdCB8fCBERUZBVUxUX1NZU1RFTV9QUk9NUFQgfSxcbiAgICAgIF0uY29uY2F0KGFwaU1lc3NhZ2VzKSxcbiAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICB9LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyxcbiAgICB9LFxuICAgIHN5c3RlbUZpZWxkOiBudWxsLFxuICB9O1xufVxuXG4vKipcbiAqIFJlc29sdmUgYWN0aXZlIHByb3ZpZGVyIGNvbmZpZyBmcm9tIENvY2twaXQgc2V0dGluZ3MuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVQcm92aWRlckNvbmZpZyhzZXR0aW5ncywgdmF1bHRBZGFwdGVyKSB7XG4gIGlmICghc2V0dGluZ3MpIHJldHVybiBudWxsO1xuXG4gIHZhciBwaWQgPSBzZXR0aW5ncy5hY3RpdmVQcm92aWRlciB8fCAnY2xhdWRlJztcbiAgdmFyIHByb3ZpZGVyID0gc2V0dGluZ3MucHJvdmlkZXJzICYmIHNldHRpbmdzLnByb3ZpZGVyc1twaWRdO1xuXG4gIGlmIChwcm92aWRlciAmJiBwcm92aWRlci5hcGlLZXkgJiYgcHJvdmlkZXIuZW5kcG9pbnQgJiYgcHJvdmlkZXIubW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJJZDogcGlkLFxuICAgICAgYXBpS2V5OiBwcm92aWRlci5hcGlLZXksXG4gICAgICBtb2RlbDogcHJvdmlkZXIubW9kZWwsXG4gICAgICBiYXNlVXJsOiBwcm92aWRlci5lbmRwb2ludCxcbiAgICAgIHN5c3RlbVByb21wdDogcHJvdmlkZXIuc3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgbGFiZWw6IHByb3ZpZGVyLmxhYmVsIHx8IHBpZCxcbiAgICB9O1xuICB9XG5cbiAgdmFyIHByb3ZpZGVySWRzID0gWydjbGF1ZGUnLCAnY29kZXgnLCAnb3BlbmNvZGUnXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm92aWRlcklkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpZCA9IHByb3ZpZGVySWRzW2ldO1xuICAgIHZhciBwID0gc2V0dGluZ3MucHJvdmlkZXJzICYmIHNldHRpbmdzLnByb3ZpZGVyc1tpZF07XG4gICAgaWYgKHAgJiYgcC5hcGlLZXkgJiYgcC5lbmRwb2ludCAmJiBwLm1vZGVsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlcklkOiBpZCxcbiAgICAgICAgYXBpS2V5OiBwLmFwaUtleSxcbiAgICAgICAgbW9kZWw6IHAubW9kZWwsXG4gICAgICAgIGJhc2VVcmw6IHAuZW5kcG9pbnQsXG4gICAgICAgIHN5c3RlbVByb21wdDogcC5zeXN0ZW1Qcm9tcHQgfHwgJycsXG4gICAgICAgIGxhYmVsOiBwLmxhYmVsIHx8IGlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBpZiAodmF1bHRBZGFwdGVyICYmIHR5cGVvZiB2YXVsdEFkYXB0ZXIucmVhZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmF3ID0gYXdhaXQgdmF1bHRBZGFwdGVyLnJlYWQoJy5vYnNpZGlhbi9wbHVnaW5zL2Zsb3dub3RlL2RhdGEuanNvbicpO1xuICAgICAgdmFyIGNvbmZpZyA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgIHZhciBhcCA9IGNvbmZpZyAmJiBjb25maWcuc2V0dGluZ3MgJiYgY29uZmlnLnNldHRpbmdzLmFnZW50UHJvdmlkZXI7XG4gICAgICBpZiAoYXAgJiYgYXAuZW5hYmxlZCkge1xuICAgICAgICB2YXIgZGlyZWN0ID0gYXAuZGlyZWN0IHx8IGFwW2FwLm1vZGVdO1xuICAgICAgICBpZiAoZGlyZWN0KSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVySWQgPSBkaXJlY3QucHJvdmlkZXJJZDtcbiAgICAgICAgICB2YXIgYXBpS2V5cyA9IGRpcmVjdC5hcGlLZXlzIHx8IHt9O1xuICAgICAgICAgIHZhciBhcGlLZXkgPSBhcGlLZXlzW3Byb3ZpZGVySWRdO1xuICAgICAgICAgIHZhciBtb2RlbCA9IGRpcmVjdC5tb2RlbCB8fCAnJztcbiAgICAgICAgICBpZiAoYXBpS2V5ICYmIG1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlcklkLFxuICAgICAgICAgICAgICBhcGlLZXk6IGFwaUtleSxcbiAgICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgICBiYXNlVXJsOiBkaXJlY3QuYmFzZVVybE92ZXJyaWRlIHx8ICdodHRwczovL2FwaS5kZWVwc2Vlay5jb20vdjEnLFxuICAgICAgICAgICAgICBzeXN0ZW1Qcm9tcHQ6ICcnLFxuICAgICAgICAgICAgICBsYWJlbDogJ0ZMT1dub3RlOiAnICsgcHJvdmlkZXJJZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge31cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyAtLS0tIEFJQ2hhdCBjbGFzcyAtLS0tXG5cbmNsYXNzIEFJQ2hhdCB7XG4gIGNvbnN0cnVjdG9yKGNmZykge1xuICAgIHRoaXMuY2ZnID0gY2ZnIHx8IHt9O1xuICAgIHRoaXMucHJvdmlkZXJUeXBlID0gUFJPVklERVJfVFlQRVNbdGhpcy5jZmcucHJvdmlkZXJJZF0gfHwgJ29wZW5haSc7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICB0aGlzLl9hZGRXZWxjb21lKCk7XG4gIH1cblxuICBnZXQgX2xvY2FsZSgpIHsgcmV0dXJuICh0aGlzLmNmZyAmJiB0aGlzLmNmZy5sb2NhbGUpIHx8ICd6aC1jbic7IH1cblxuICBnZXQgaXNDb25maWd1cmVkKCkge1xuICAgIHZhciBjID0gdGhpcy5jZmcgfHwge307XG4gICAgcmV0dXJuICEhKGMuYmFzZVVybCAmJiBjLmFwaUtleSAmJiBjLm1vZGVsKTtcbiAgfVxuXG4gIGdldCBpc1N0cmVhbWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5hYm9ydENvbnRyb2xsZXIgIT09IG51bGw7XG4gIH1cblxuICBnZXQgcHJvdmlkZXJMYWJlbCgpIHtcbiAgICB2YXIgYyA9IHRoaXMuY2ZnIHx8IHt9O1xuICAgIHJldHVybiBjLmxhYmVsIHx8IGMuYmFzZVVybCB8fCAnVW5rbm93bic7XG4gIH1cblxuICBnZXQgc3RhdHMoKSB7XG4gICAgdmFyIHVzZXIgPSAwLCBhc3Npc3RhbnQgPSAwLCB0b29sQ2FsbHMgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG0gPSB0aGlzLm1lc3NhZ2VzW2ldO1xuICAgICAgaWYgKG0ucm9sZSA9PT0gJ3VzZXInKSB1c2VyKys7XG4gICAgICBpZiAobS5yb2xlID09PSAnYXNzaXN0YW50JykgYXNzaXN0YW50Kys7XG4gICAgICBpZiAobS5ibG9ja3MpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtLmJsb2Nrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChtLmJsb2Nrc1tqXS50eXBlID09PSAndG9vbCcpIHRvb2xDYWxscysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHVzZXI6IHVzZXIsIGFzc2lzdGFudDogYXNzaXN0YW50LCB0b3RhbDogdXNlciArIGFzc2lzdGFudCwgdG9vbENhbGxzOiB0b29sQ2FsbHMgfTtcbiAgfVxuXG4gIHVwZ3JhZGVBbGwoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzW2ldID0gdXBncmFkZU1lc3NhZ2UodGhpcy5tZXNzYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuX2FkZFdlbGNvbWUoKTtcbiAgfVxuXG4gIGdldEhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgQUkgcHJvdmlkZXIuXG4gICAqXG4gICAqIDgtc3RlcCBmbG93OlxuICAgKiAgIDEuIFZhbGlkYXRlIGNvbmZpZ1xuICAgKiAgIDIuIENyZWF0ZSB1c2VyIG1lc3NhZ2UgKyBlbWl0IG9uVXNlck1lc3NhZ2VcbiAgICogICAzLiBDcmVhdGUgYXNzaXN0YW50IHBsYWNlaG9sZGVyICsgZW1pdCBvbkFzc2lzdGFudENyZWF0ZWRcbiAgICogICA0LiBCdWlsZCBBUEkgcmVxdWVzdFxuICAgKiAgIDUuIFNlbmQgSFRUUCByZXF1ZXN0XG4gICAqICAgNi4gUGFyc2UgU1NFIHN0cmVhbSAoZGVsZWdhdGVkIHRvIHN0cmVhbS1wYXJzZXIpXG4gICAqICAgNy4gRmluYWxpemUgKHVwZGF0ZSB0b29sIGJsb2NrcywgbWV0YSwgcGVuZGluZylcbiAgICogICA4LiBIYW5kbGUgZXJyb3JzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVXNlciBtZXNzYWdlIHRleHRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtjYWxsYmFja3NdIC0gRXZlbnQgY2FsbGJhY2tzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja3Mub25Vc2VyTWVzc2FnZV0gLSBVc2VyIG1lc3NhZ2UgY3JlYXRlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tzLm9uQXNzaXN0YW50Q3JlYXRlZF0gLSBBc3Npc3RhbnQgcGxhY2Vob2xkZXIgY3JlYXRlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tzLm9uVG9rZW5dIC0gU3RyZWFtIHRva2VuIHJlY2VpdmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja3Mub25CbG9ja1VwZGF0ZV0gLSBUb29sIGJsb2NrIHVwZGF0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrcy5vblJlYXNvbmluZ10gLSBSZWFzb25pbmcgdGV4dCByZWNlaXZlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tzLm9uRG9uZV0gLSBTdHJlYW0gY29tcGxldGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja3Mub25FcnJvcl0gLSBFcnJvciBvY2N1cnJlZFxuICAgKiBAcmV0dXJucyB7QWJvcnRTaWduYWx8bnVsbH1cbiAgICovXG4gIHNlbmRNZXNzYWdlKGNvbnRlbnQsIGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcyB8fCB7fTtcbiAgICB2YXIgb25Ub2tlbiA9IGNhbGxiYWNrcy5vblRva2VuO1xuICAgIHZhciBvbkRvbmUgPSBjYWxsYmFja3Mub25Eb25lO1xuICAgIHZhciBvbkVycm9yID0gY2FsbGJhY2tzLm9uRXJyb3I7XG4gICAgdmFyIGMgPSB0aGlzLmNmZyB8fCB7fTtcblxuICAgIC8vIFN0ZXAgMTogVmFsaWRhdGUgY29uZmlnXG4gICAgaWYgKCF0aGlzLmlzQ29uZmlndXJlZCkge1xuICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IobmV3IEVycm9yKCdBSSBub3QgY29uZmlndXJlZCcpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMjogQ3JlYXRlIHVzZXIgbWVzc2FnZVxuICAgIHZhciB1c2VyTXNnID0gY3JlYXRlTWVzc2FnZSgndXNlcicsIFN0cmluZyhjb250ZW50KS50cmltKCkpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh1c2VyTXNnKTtcbiAgICBpZiAoY2FsbGJhY2tzLm9uVXNlck1lc3NhZ2UpIGNhbGxiYWNrcy5vblVzZXJNZXNzYWdlKHVzZXJNc2cpO1xuXG4gICAgLy8gU3RlcCAzOiBDcmVhdGUgYXNzaXN0YW50IHBsYWNlaG9sZGVyXG4gICAgdmFyIGFzc2lzdGFudE1zZyA9IGNyZWF0ZU1lc3NhZ2UoJ2Fzc2lzdGFudCcsICcnKTtcbiAgICBhc3Npc3RhbnRNc2cucGVuZGluZyA9IHRydWU7XG4gICAgYXNzaXN0YW50TXNnLm1ldGEgPSB0aGlzLnByb3ZpZGVyTGFiZWwgKyAnIFxcdTAwQjcgJyArIChjLm1vZGVsIHx8ICd1bmtub3duJyk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKGFzc2lzdGFudE1zZyk7XG4gICAgaWYgKGNhbGxiYWNrcy5vbkFzc2lzdGFudENyZWF0ZWQpIGNhbGxiYWNrcy5vbkFzc2lzdGFudENyZWF0ZWQoYXNzaXN0YW50TXNnKTtcblxuICAgIC8vIFN0ZXAgNDogQnVpbGQgQVBJIHJlcXVlc3RcbiAgICB2YXIgc3lzdGVtUHJvbXB0ID0gKGMuc3lzdGVtUHJvbXB0IHx8ICcnKS50cmltKCkgfHwgREVGQVVMVF9TWVNURU1fUFJPTVBUO1xuICAgIHZhciByZXEgPSBidWlsZFJlcXVlc3QodGhpcy5wcm92aWRlclR5cGUsIGMubW9kZWwsIHRoaXMubWVzc2FnZXMsIHN5c3RlbVByb21wdCk7XG4gICAgdmFyIHBheWxvYWQgPSByZXEuYm9keTtcbiAgICBpZiAocmVxLnN5c3RlbUZpZWxkKSB7XG4gICAgICBwYXlsb2FkLnN5c3RlbSA9IHJlcS5zeXN0ZW1GaWVsZDtcbiAgICB9XG5cbiAgICB2YXIgZW5kcG9pbnQgPSBidWlsZEVuZHBvaW50KGMuYmFzZVVybCwgdGhpcy5wcm92aWRlclR5cGUpO1xuXG4gICAgLy8gQXBwbHkgYXV0aCB0byBoZWFkZXJzXG4gICAgdmFyIHJlcUhlYWRlcnMgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHJlcS5oZWFkZXJzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcS5oZWFkZXJzLCBrKSkge1xuICAgICAgICByZXFIZWFkZXJzW2tdID0gcmVxLmhlYWRlcnNba107XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3ZpZGVyVHlwZSA9PT0gJ2FudGhyb3BpYycpIHtcbiAgICAgIHJlcUhlYWRlcnNbJ3gtYXBpLWtleSddID0gU3RyaW5nKGMuYXBpS2V5IHx8ICcnKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcUhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIFN0cmluZyhjLmFwaUtleSB8fCAnJykudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgNS02OiBTZW5kIHJlcXVlc3QgKyBwYXJzZSBzdHJlYW1cbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB2YXIgc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXG4gICAgdGhpcy5fZG9GZXRjaChlbmRwb2ludCwgcmVxSGVhZGVycywgcGF5bG9hZCwgc2lnbmFsLCBhc3Npc3RhbnRNc2csIGNhbGxiYWNrcyk7XG5cbiAgICByZXR1cm4gc2lnbmFsO1xuICB9XG5cbiAgYXN5bmMgX2RvRmV0Y2goZW5kcG9pbnQsIGhlYWRlcnMsIHBheWxvYWQsIHNpZ25hbCwgYXNzaXN0YW50TXNnLCBjYWxsYmFja3MpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgICAgICBzaWduYWw6IHNpZ25hbCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTdGVwIDY6IFBhcnNlIFNTRSBzdHJlYW1cbiAgICAgIHZhciB7IHBhcnNlU3RyZWFtIH0gPSByZXF1aXJlKCcuL3N0cmVhbS1wYXJzZXInKTtcbiAgICAgIGF3YWl0IHBhcnNlU3RyZWFtKHRoaXMucHJvdmlkZXJUeXBlLCByZXNwb25zZSwge1xuICAgICAgICBvblRva2VuOiAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICBhc3Npc3RhbnRNc2cudGV4dCArPSB0b2tlbjtcbiAgICAgICAgICB2YXIgdGV4dEJsb2NrID0gbnVsbDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2lzdGFudE1zZy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhc3Npc3RhbnRNc2cuYmxvY2tzW2ldLnR5cGUgPT09ICdzdHJlYW0tdGV4dCcpIHtcbiAgICAgICAgICAgICAgdGV4dEJsb2NrID0gYXNzaXN0YW50TXNnLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGV4dEJsb2NrKSB7XG4gICAgICAgICAgICB0ZXh0QmxvY2sgPSB7IHR5cGU6ICdzdHJlYW0tdGV4dCcsIHRleHQ6ICcnIH07XG4gICAgICAgICAgICBhc3Npc3RhbnRNc2cuYmxvY2tzLnB1c2godGV4dEJsb2NrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dEJsb2NrLnRleHQgKz0gdG9rZW47XG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vblRva2VuKSBjYWxsYmFja3Mub25Ub2tlbih0b2tlbik7XG4gICAgICAgIH0pLmJpbmQodGhpcyksXG5cbiAgICAgICAgb25SZWFzb25pbmc6IChmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgYXNzaXN0YW50TXNnLnJlYXNvbmluZyArPSB0ZXh0O1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25SZWFzb25pbmcpIGNhbGxiYWNrcy5vblJlYXNvbmluZyh0ZXh0KTtcbiAgICAgICAgfSkuYmluZCh0aGlzKSxcblxuICAgICAgICBvblRvb2xCbG9ja1N0YXJ0OiAoZnVuY3Rpb24oYmxvY2tJbmZvKSB7XG4gICAgICAgICAgdmFyIGJsb2NrID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Rvb2wnLFxuICAgICAgICAgICAgdG9vbDogYmxvY2tJbmZvLm5hbWUgfHwgYmxvY2tJbmZvLnR5cGUgfHwgJ3Vua25vd24nLFxuICAgICAgICAgICAgc3RhdHVzOiAncnVubmluZycsXG4gICAgICAgICAgICBzdW1tYXJ5OiBibG9ja0luZm8ubmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGR1cmF0aW9uTXM6IDAsXG4gICAgICAgICAgICBfc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGlkeCA9IGFzc2lzdGFudE1zZy5ibG9ja3MucHVzaChibG9jaykgLSAxO1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25CbG9ja1VwZGF0ZSkgY2FsbGJhY2tzLm9uQmxvY2tVcGRhdGUoYmxvY2ssIGlkeCk7XG4gICAgICAgIH0pLmJpbmQodGhpcyksXG5cbiAgICAgICAgb25Ub29sQmxvY2tVcGRhdGU6IChmdW5jdGlvbih1cGRhdGUpIHtcbiAgICAgICAgICB2YXIgYmxvY2sgPSBhc3Npc3RhbnRNc2cuYmxvY2tzW3VwZGF0ZS5pbmRleF07XG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlLnBhcnRpYWxfanNvbikge1xuICAgICAgICAgICAgICBpZiAoIWJsb2NrLl9wYXJ0aWFsSW5wdXQpIGJsb2NrLl9wYXJ0aWFsSW5wdXQgPSAnJztcbiAgICAgICAgICAgICAgYmxvY2suX3BhcnRpYWxJbnB1dCArPSB1cGRhdGUucGFydGlhbF9qc29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkJsb2NrVXBkYXRlKSBjYWxsYmFja3Mub25CbG9ja1VwZGF0ZShibG9jaywgdXBkYXRlLmluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmJpbmQodGhpcyksXG5cbiAgICAgICAgb25Ub29sQmxvY2tFbmQ6IChmdW5jdGlvbihibG9ja0VuZEluZm8pIHtcbiAgICAgICAgICB2YXIgYmxvY2sgPSBhc3Npc3RhbnRNc2cuYmxvY2tzW2Jsb2NrRW5kSW5mby5pbmRleF07XG4gICAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLnR5cGUgPT09ICd0b29sJykge1xuICAgICAgICAgICAgYmxvY2suc3RhdHVzID0gJ2NvbXBsZXRlZCc7XG4gICAgICAgICAgICBpZiAoYmxvY2suX3N0YXJ0VGltZSkge1xuICAgICAgICAgICAgICBibG9jay5kdXJhdGlvbk1zID0gRGF0ZS5ub3coKSAtIGJsb2NrLl9zdGFydFRpbWU7XG4gICAgICAgICAgICAgIGRlbGV0ZSBibG9jay5fc3RhcnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJsb2NrLl9wYXJ0aWFsSW5wdXQpIHtcbiAgICAgICAgICAgICAgdHJ5IHsgYmxvY2suaW5wdXQgPSBKU09OLnBhcnNlKGJsb2NrLl9wYXJ0aWFsSW5wdXQpOyB9IGNhdGNoIChfKSB7fVxuICAgICAgICAgICAgICBkZWxldGUgYmxvY2suX3BhcnRpYWxJbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25CbG9ja1VwZGF0ZSkgY2FsbGJhY2tzLm9uQmxvY2tVcGRhdGUoYmxvY2ssIGJsb2NrRW5kSW5mby5pbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5iaW5kKHRoaXMpLFxuXG4gICAgICAgIG9uRG9uZTogKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFN0ZXAgNzogRmluYWxpemVcbiAgICAgICAgICB0aGlzLl9maW5hbGl6ZU1lc3NhZ2UoYXNzaXN0YW50TXNnLCBjYWxsYmFja3Mub25Eb25lKTtcbiAgICAgICAgfSkuYmluZCh0aGlzKSxcblxuICAgICAgICBvbkVycm9yOiAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgLy8gU3RlcCA4OiBFcnJvciBoYW5kbGluZ1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGFzc2lzdGFudE1zZywgZXJyLCBjYWxsYmFja3Mub25FcnJvcik7XG4gICAgICAgIH0pLmJpbmQodGhpcyksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSByZXR1cm47IC8vIFNpbGVudCBhYm9ydFxuICAgICAgdGhpcy5faGFuZGxlRXJyb3IoYXNzaXN0YW50TXNnLCBlcnIsIGNhbGxiYWNrcy5vbkVycm9yKTtcbiAgICB9XG4gIH1cblxuICBfZmluYWxpemVNZXNzYWdlKGFzc2lzdGFudE1zZywgb25Eb25lKSB7XG4gICAgYXNzaXN0YW50TXNnLnBlbmRpbmcgPSBmYWxzZTtcblxuICAgIC8vIEZpbmFsaXplIGFueSByZW1haW5pbmcgcnVubmluZyB0b29sIGJsb2Nrc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzaXN0YW50TXNnLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGIgPSBhc3Npc3RhbnRNc2cuYmxvY2tzW2ldO1xuICAgICAgaWYgKGIudHlwZSA9PT0gJ3Rvb2wnICYmIGIuc3RhdHVzID09PSAncnVubmluZycpIHtcbiAgICAgICAgYi5zdGF0dXMgPSAnY29tcGxldGVkJztcbiAgICAgICAgaWYgKGIuX3N0YXJ0VGltZSkge1xuICAgICAgICAgIGIuZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBiLl9zdGFydFRpbWU7XG4gICAgICAgICAgZGVsZXRlIGIuX3N0YXJ0VGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYi5fcGFydGlhbElucHV0KSB7XG4gICAgICAgICAgdHJ5IHsgYi5pbnB1dCA9IEpTT04ucGFyc2UoYi5fcGFydGlhbElucHV0KTsgfSBjYXRjaCAoXykgeyBiLmlucHV0ID0gYi5fcGFydGlhbElucHV0OyB9XG4gICAgICAgICAgZGVsZXRlIGIuX3BhcnRpYWxJbnB1dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBtZXRhXG4gICAgdmFyIHRvb2xDb3VudCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3Npc3RhbnRNc2cuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXNzaXN0YW50TXNnLmJsb2Nrc1tpXS50eXBlID09PSAndG9vbCcpIHRvb2xDb3VudCsrO1xuICAgIH1cbiAgICBhc3Npc3RhbnRNc2cubWV0YSA9IHRoaXMucHJvdmlkZXJMYWJlbCArICcgXFx1MDBCNyAnICsgKHRoaXMuY2ZnLm1vZGVsIHx8ICd1bmtub3duJykgKyAnIFxcdTAwQjcgdG9vbHM9JyArIHRvb2xDb3VudDtcblxuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbnVsbDtcbiAgICBpZiAob25Eb25lKSBvbkRvbmUoKTtcbiAgfVxuXG4gIF9oYW5kbGVFcnJvcihhc3Npc3RhbnRNc2csIGVyciwgb25FcnJvcikge1xuICAgIGFzc2lzdGFudE1zZy5wZW5kaW5nID0gZmFsc2U7XG4gICAgYXNzaXN0YW50TXNnLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgU3RyaW5nKGVycik7XG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGVycik7XG4gIH1cblxuICBhYm9ydCgpIHtcbiAgICBpZiAodGhpcy5hYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX2FkZFdlbGNvbWUoKSB7XG4gICAgdmFyIGxvY2FsZSA9IHRoaXMuX2xvY2FsZTtcbiAgICB2YXIgd2VsY29tZXMgPSB7XG4gICAgICAnemgtY24nOiAnXHU0RjYwXHU1OTdEXHVGRjAxXHU2MjExXHU2NjJGIEtPUyBBSSBcdTUyQTlcdTYyNEJcdTMwMDJcdTRGNjBcdTUzRUZcdTRFRTVcdTk1RUVcdTYyMTFcdTUxNzNcdTRFOEVcdTc3RTVcdThCQzZcdTVFOTNcdTMwMDFcdTk4NzlcdTc2RUVcdTcyQjZcdTYwMDFcdTYyMTZcdTRFRkJcdTRGNTUgS09TIFx1NzZGOFx1NTE3M1x1NzY4NFx1OTVFRVx1OTg5OFx1MzAwMicsXG4gICAgICAnZW4nOiAnSGVsbG8hIEkgYW0gdGhlIEtPUyBBSSBhc3Npc3RhbnQuIEFzayBtZSBhYm91dCB0aGUga25vd2xlZGdlIGJhc2UsIHByb2plY3Qgc3RhdHVzLCBvciBhbnl0aGluZyBLT1MtcmVsYXRlZC4nLFxuICAgICAgJ3poLXR3JzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU1NTRGXHU2MjExXHU2NzA5XHU5NURDXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAxXHU1QzA4XHU2ODQ4XHU3MkMwXHU2MTRCXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTk1RENcdTc2ODRcdTU1NEZcdTk4NENcdTMwMDInLFxuICAgIH07XG4gICAgdmFyIHRleHQgPSB3ZWxjb21lc1tsb2NhbGVdIHx8IHdlbGNvbWVzWyd6aC1jbiddO1xuICAgIHZhciBtc2cgPSB7XG4gICAgICBpZDogZ2VuTXNnSWQoKSxcbiAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgIHJlYXNvbmluZzogJycsXG4gICAgICBtZXRhOiAnJyxcbiAgICAgIGJsb2NrczogW3sgdHlwZTogJ3N0cmVhbS10ZXh0JywgdGV4dDogdGV4dCB9XSxcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6ICcnLFxuICAgICAgbGlua2VkQ29udGV4dEZpbGVzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBSUNoYXQsXG4gIHJlc29sdmVQcm92aWRlckNvbmZpZyxcbiAgREVGQVVMVF9TWVNURU1fUFJPTVBULFxuICBnZW5Nc2dJZCxcbiAgdXBncmFkZU1lc3NhZ2UsXG4gIGNyZWF0ZU1lc3NhZ2UsXG4gIGJ1aWxkRW5kcG9pbnQsXG4gIGJ1aWxkUmVxdWVzdCxcbiAgUFJPVklERVJfVFlQRVMsXG59O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBzaGFyZWQgdXRpbGl0aWVzXG5cbi8qKlxuICogUGFyc2UgZnJvbnRtYXR0ZXIgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICogUmV0dXJucyB7fSBpZiBubyB2YWxpZCBmcm9udG1hdHRlciBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoY29udGVudCB8fCAnJyk7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXi0tLVxcbihbXFxzXFxTXSo/KVxcbi0tLS8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG5cbiAgY29uc3Qgb3V0ID0ge307XG4gIG1hdGNoWzFdLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghaXRlbSB8fCBpdGVtLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbG9uID0gaXRlbS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGNvbG9uIDw9IDApIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBpdGVtLnNsaWNlKDAsIGNvbG9uKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gaXRlbS5zbGljZShjb2xvbiArIDEpLnRyaW0oKTtcbiAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkuc3BsaXQoJywnKS5tYXAoKHApID0+IHAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIG91dFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCBmcm9udG1hdHRlciB2YWx1ZSBieSBtdWx0aXBsZSBwb3NzaWJsZSBrZXkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGZtVmFsdWUoZnJvbnRtYXR0ZXIsIGtleXMsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgJiYgdHlwZW9mIGZyb250bWF0dGVyID09PSAnb2JqZWN0JyA/IGZyb250bWF0dGVyIDoge307XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZtLCBrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZtW2tleV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgICAgaWYgKHRleHQpIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogRm9ybWF0IGRhdGUgdG8gWVlZWS1NTS1ERCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGVTdHIoZGF0ZSkge1xuICBjb25zdCBkID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBLT1MgZGFpbHkgbm90ZSBwYXRoIGZvciBhIGdpdmVuIGRhdGUuXG4gKiBLT1MgY29udmVudGlvbjogUGVyaW9kaWMvWVlZWS9NTS9ZWVlZLU1NLURELm1kXG4gKi9cbmZ1bmN0aW9uIGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cikge1xuICBjb25zdCBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIGBQZXJpb2RpYy8ke3BhcnRzWzBdfS8ke3BhcnRzWzFdfS8ke2RhdGVTdHJ9Lm1kYDtcbn1cblxuLyoqXG4gKiBHZXQgZmlsZSBieSBwYXRoIGZyb20gdmF1bHQsIHJldHVybmluZyBudWxsIGlmIG1pc3NpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVCeVBhdGgodmF1bHQsIHBhdGgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNhZmVseSByZWFkIGZpbGUgdGV4dCBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkRmlsZVRleHQodmF1bHQsIGZpbGUpIHtcbiAgaWYgKCF2YXVsdCB8fCAhZmlsZSkgcmV0dXJuICcnO1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmF1bHQuY2FjaGVkUmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKTtcbiAgICBpZiAodHlwZW9mIHZhdWx0LnJlYWQgPT09ICdmdW5jdGlvbicpIHJldHVybiBTdHJpbmcoYXdhaXQgdmF1bHQucmVhZChmaWxlKSB8fCAnJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0YXNrIHN0YXRzIChvcGVuL2RvbmUvdG90YWwpIGZyb20gbWFya2Rvd24gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gdGFza1N0YXRzRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgb3BlbiA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdXFxzKy8udGVzdChsaW5lKSkge1xuICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbW3hYXVxcXVxccysvLnRlc3QobGluZSkpIGRvbmUgKz0gMTtcbiAgICAgIGVsc2Ugb3BlbiArPSAxO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3BlbixcbiAgICBkb25lLFxuICAgIHRvdGFsOiBvcGVuICsgZG9uZSxcbiAgICBjb21wbGV0aW9uUmF0ZTogb3BlbiArIGRvbmUgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIChvcGVuICsgZG9uZSkpICogMTAwKSA6IDAsXG4gIH07XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFuZCBjbGVhbiBhIGZpbGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gIHJldHVybiBTdHJpbmcocGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLysvZywgJy8nKS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzeXN0ZW0vaW50ZXJuYWwgcGF0aCB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHN0YXRzLlxuICovXG5mdW5jdGlvbiBpc1N5c3RlbVBhdGgocGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gIGlmICgvKF58XFwvKVxcLlteL10rKFxcL3wkKS8udGVzdCh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX2xvZ3MvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnX21ldGEvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJzQgQXJjaGl2ZXMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnUGVyaW9kaWMvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGcm9udG1hdHRlcixcbiAgZm1WYWx1ZSxcbiAgZm9ybWF0RGF0ZVN0cixcbiAgZGFpbHlOb3RlUGF0aCxcbiAgZ2V0RmlsZUJ5UGF0aCxcbiAgcmVhZEZpbGVUZXh0LFxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcbiAgbm9ybWFsaXplUGF0aCxcbiAgaXNTeXN0ZW1QYXRoLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcHJvamVjdCBzY2FubmluZyBzZXJ2aWNlXG5cbmNvbnN0IHsgcGFyc2VGcm9udG1hdHRlciwgZm1WYWx1ZSwgcmVhZEZpbGVUZXh0LCB0YXNrU3RhdHNGcm9tQ29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIFNjYW4gMSBQcm9qZWN0cy8gZGlyZWN0b3JpZXMgYW5kIGJ1aWxkIGEgbGlzdCBvZiBwcm9qZWN0IG92ZXJ2aWV3IGZpbGVzLlxuICovXG5mdW5jdGlvbiBmaW5kUHJvamVjdEZpbGVzKHZhdWx0KSB7XG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gU3RyaW5nKGZpbGUucGF0aCB8fCAnJyk7XG4gICAgLy8gTWF0Y2g6IDEgUHJvamVjdHMvPHByb2plY3QtZGlyPi88cHJvamVjdC1uYW1lPi5tZFxuICAgIC8vIEV4Y2x1ZGU6IFx1OTg3OVx1NzZFRVx1NjAzQlx1ODlDOC5tZCwgUkVBRE1FLm1kXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocGF0aC5zcGxpdCgnLycpLmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdSRUFETUUubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLmVuZHNXaXRoKCdcXHVEODNEXFx1RENDRCBcXHU5ODc5XFx1NzZFRVxcdTYwM0JcXHU4OUM4Lm1kJykpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2UgcHJvamVjdCBtZXRhZGF0YSBmcm9tIGEgZmlsZSdzIGNvbnRlbnQgYW5kIE9ic2lkaWFuIG1ldGFkYXRhIGNhY2hlLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoZmlsZSwgY29udGVudCwgbWV0YWRhdGFDYWNoZSkge1xuICBjb25zdCBmbSA9IHtcbiAgICAuLi5wYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpLFxuICB9O1xuXG4gIC8vIFRyeSB0byBnZXQgcmljaGVyIGZyb250bWF0dGVyIGZyb20gbWV0YWRhdGEgY2FjaGVcbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZSA9IG1ldGFkYXRhQ2FjaGUgJiYgdHlwZW9mIG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmZyb250bWF0dGVyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZtLCBjYWNoZS5mcm9udG1hdHRlcik7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgY29uc3Qgc3RhdHVzID0gZm1WYWx1ZShmbSwgWydzdGF0dXMnLCAnU3RhdHVzJ10sICdhY3RpdmUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmbVZhbHVlKGZtLCBbJ3ByaW9yaXR5JywgJ1ByaW9yaXR5J10sICcnKTtcbiAgY29uc3QgaXRlcmF0aW9uID0gZm1WYWx1ZShmbSwgWydpdGVyYXRpb24nLCAnSXRlcmF0aW9uJ10sICcnKTtcbiAgY29uc3QgYXJlYSA9IGZtVmFsdWUoZm0sIFsnYXJlYScsICdBcmVhJywgJ2RvbWFpbicsICdEb21haW4nXSwgJycpO1xuICBjb25zdCB0YWdzID0gQXJyYXkuaXNBcnJheShmbS50YWdzKSA/IGZtLnRhZ3MgOiBbXTtcblxuICAvLyBDb21wdXRlIHRhc2sgcHJvZ3Jlc3MgZnJvbSB0aGUgcHJvamVjdCBmaWxlIGNvbnRlbnRcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAvLyBHZXQgcHJvamVjdCB0aXRsZSBmcm9tIGZpcnN0IGgxIG9yIGRpcmVjdG9yeSBuYW1lXG4gIGNvbnN0IGhlYWRpbmcgPSBTdHJpbmcoY29udGVudCB8fCAnJykubWF0Y2goL14jXFxzKyguKykkL20pO1xuICBjb25zdCB0aXRsZSA9IGhlYWRpbmcgPyBoZWFkaW5nWzFdLnRyaW0oKSA6IGZpbGUuYmFzZW5hbWUgfHwgJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICB0aXRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHJpb3JpdHksXG4gICAgaXRlcmF0aW9uLFxuICAgIGFyZWEsXG4gICAgdGFncyxcbiAgICB0YXNrcyxcbiAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIGN0aW1lOiBmaWxlLnN0YXQ/LmN0aW1lIHx8IDAsXG4gIH07XG59XG5cbi8qKlxuICogTGlzdCBhbGwgcHJvamVjdHMsIHdpdGggb3B0aW9uYWwgZmlsdGVyaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFjdGl2ZU9ubHkgXHUyMDE0IG9ubHkgcmV0dXJuIGFjdGl2ZSBwcm9qZWN0c1xuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0UHJvamVjdHMoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IGZpbmRQcm9qZWN0RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBhcHAubWV0YWRhdGFDYWNoZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IGFjdGl2ZSBmaXJzdCwgdGhlbiBieSBwcmlvcml0eSwgdGhlbiBieSBtdGltZVxuICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUFjdGl2ZSA9IGEuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICBjb25zdCBiQWN0aXZlID0gYi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGlmIChhQWN0aXZlICE9PSBiQWN0aXZlKSByZXR1cm4gYUFjdGl2ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IHJhbmsgPSAocCkgPT4ge1xuICAgICAgY29uc3QgdiA9IFN0cmluZyhwIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHYgPT09ICdwMScgfHwgdiA9PT0gJ2hpZ2gnKSByZXR1cm4gMDtcbiAgICAgIGlmICh2ID09PSAncDInIHx8IHYgPT09ICdtZWRpdW0nKSByZXR1cm4gMTtcbiAgICAgIGlmICh2ID09PSAncDMnIHx8IHYgPT09ICdsb3cnKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAzO1xuICAgIH07XG4gICAgY29uc3QgYnlQcmlvcml0eSA9IHJhbmsoYS5wcmlvcml0eSkgLSByYW5rKGIucHJpb3JpdHkpO1xuICAgIGlmIChieVByaW9yaXR5ICE9PSAwKSByZXR1cm4gYnlQcmlvcml0eTtcbiAgICByZXR1cm4gYi5tdGltZSAtIGEubXRpbWU7XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmFjdGl2ZU9ubHkpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLnN0YXR1cyA9PT0gJ2FjdGl2ZScpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgZW5naW5lIHN0YXRlIGZyb20gX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kIChidWxsZXQtbGlzdCBmb3JtYXQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRFbmdpbmVTdGF0ZShhcHApIHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIHRyaWFnZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNvbXBpbGU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaW5rOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgZGFpbHk6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBwcm9qZWN0OiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgYXJjaGl2ZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGNhbnZhczogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgICdrb3MtaW5pdCc6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBsaWZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gIH07XG5cbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBmaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCgnX21ldGEvYWkvbWVtb3J5L1NUQVRFLm1kJyk7XG4gIGlmICghZmlsZSkgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG5cbiAgLy8gU1RBVEUubWQgdXNlcyBzZWN0aW9uLWJhc2VkIGJ1bGxldCBmb3JtYXQ6XG4gIC8vICMjIHRyaWFnZVxuICAvLyAtIGxhc3RfcnVuOiAyMDI2LTA2LTA5XG4gIC8vIC0gcGVuZGluZzogMFxuICAvLyAtIHN1bW1hcnk6IEluYm94IGNsZWFyZWRcbiAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQgY3VycmVudEVuZ2luZSA9IG51bGw7XG5cbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBsaW5lLm1hdGNoKC9eIyNcXHMrKFxcUyspXFxzKiQvKTtcbiAgICBpZiAoc2VjdGlvbiAmJiBlbmdpbmVzLmluY2x1ZGVzKHNlY3Rpb25bMV0pKSB7XG4gICAgICBjdXJyZW50RW5naW5lID0gc2VjdGlvblsxXTtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXSA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRFbmdpbmUpIHJldHVybjtcbiAgICBjb25zdCBrdiA9IGxpbmUubWF0Y2goL14tXFxzKyhcXHcrKTpcXHMqKC4qKSQvKTtcbiAgICBpZiAoa3YpIHtcbiAgICAgIHBhcnNlZFtjdXJyZW50RW5naW5lXVtrdlsxXV0gPSBrdlsyXS50cmltKCkgfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5vcm1hbGl6ZSB0byB7IGxhc3RSdW4sIHN0YXR1cywgc3VtbWFyeSB9IGZvciBjb2NrcGl0IGNvbnN1bXB0aW9uXG4gIGNvbnN0IHN0YXRlID0ge307XG4gIGVuZ2luZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHBhcnNlZFtlXSB8fCB7fTtcbiAgICBzdGF0ZVtlXSA9IHtcbiAgICAgIGxhc3RSdW46IHJhdy5sYXN0X3J1biB8fCByYXcubGFzdF9kYWlseSB8fCBudWxsLFxuICAgICAgc3RhdHVzOiByYXcucGVuZGluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKE51bWJlcihyYXcucGVuZGluZykgPT09IDAgPyAnZG9uZScgOiAncGVuZGluZycpXG4gICAgICAgIDogJ3BlbmRpbmcnLFxuICAgICAgc3VtbWFyeTogcmF3LnN1bW1hcnkgfHwgbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kUHJvamVjdEZpbGVzLFxuICBwYXJzZVByb2plY3QsXG4gIGxpc3RQcm9qZWN0cyxcbiAgZ2V0RW5naW5lU3RhdGUsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IFx1OTIyNT9ob21lIGRhdGEgZW5naW5lXHJcblxyXG5jb25zdCB7XHJcbiAgcGFyc2VGcm9udG1hdHRlcixcclxuICBmbVZhbHVlLFxyXG4gIGZvcm1hdERhdGVTdHIsXHJcbiAgZGFpbHlOb3RlUGF0aCxcclxuICBnZXRGaWxlQnlQYXRoLFxyXG4gIHJlYWRGaWxlVGV4dCxcclxuICB0YXNrU3RhdHNGcm9tQ29udGVudCxcclxuICBpc1N5c3RlbVBhdGgsXHJcbiAgbm9ybWFsaXplUGF0aCxcclxufSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgeyBsaXN0UHJvamVjdHMsIGdldEVuZ2luZVN0YXRlIH0gPSByZXF1aXJlKCcuL3Byb2plY3Qtc2VydmljZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0b2RheSdzIGRhaWx5IG5vdGUgc3RhdGUuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRlKGFwcCkge1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtYXREYXRlU3RyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZGF0ZVN0cik7XHJcbiAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuXHJcbiAgaWYgKCFmaWxlKSB7XHJcbiAgICByZXR1cm4geyBkYXRlU3RyLCBwYXRoLCBleGlzdHM6IGZhbHNlLCBmaWxlOiBudWxsLCB0YXNrczogeyBvcGVuOjAsZG9uZTowLHRvdGFsOjAsY29tcGxldGlvblJhdGU6MCB9LCB0YXNrSXRlbXM6IFtdIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgdGFza3MgPSB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KTtcclxuICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gIGNvbnN0IHRhc2tJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZXNbaV0gfHwgJycpLm1hdGNoKC9eKFxccypbLSpdXFxzK1xcWykoWyB4WF0pKFxcXVxccyspKC4rKSQvKTtcclxuICAgIGlmICghbSkgY29udGludWU7XHJcbiAgICBjb25zdCB0ZXh0ID0gbVs0XS50cmltKCk7XHJcbiAgICBpZiAoIXRleHQpIGNvbnRpbnVlO1xyXG4gICAgdGFza0l0ZW1zLnB1c2goeyBsaW5lSW5kZXg6IGksIHRleHQsIGRvbmU6IC94L2kudGVzdChtWzJdKSB9KTtcclxuICAgIGlmICh0YXNrSXRlbXMubGVuZ3RoID49IDEyKSBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIEV4dHJhY3QgdG9kYXkncyBmb2N1cyAoZmlyc3QgaDIgb3IgYm9sZCBsaW5lIHVuZGVyICMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjYpXHJcbiAgbGV0IGZvY3VzID0gJyc7XHJcbiAgY29uc3QgZm9jdXNNYXRjaCA9IGNvbnRlbnQubWF0Y2goLyMjIFxcdTRFQ0FcXHU2NUU1XFx1ODA1QVxcdTcxMjZbXiNdKj9cXG4oLSAuKykvKTtcclxuICBpZiAoZm9jdXNNYXRjaCkgZm9jdXMgPSBmb2N1c01hdGNoWzFdLnJlcGxhY2UoL14tIC8sICcnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogdHJ1ZSwgZmlsZSwgdGFza3MsIHRhc2tJdGVtcywgZm9jdXMsIGNvbnRlbnQgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IGZpbGVzIGluIDAgSW5ib3ggKGV4Y2x1ZGluZyBfcHJvY2Vzc2VkLykuXHJcbiAqIFJldHVybnMgVEZpbGUgb2JqZWN0cyAod2l0aCAucGF0aCwgLmJhc2VuYW1lLCAuc3RhdCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmJveEZpbGVzKHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICByZXR1cm4gcC5zdGFydHNXaXRoKCcwIEluYm94LycpICYmICFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdmF1bHQgYW5kIGNvbXB1dGUga25vd2xlZGdlIGdhcmRlbiBzdGF0aXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCB8fCB0eXBlb2YgYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuICBjb25zdCB0b2RheSA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBsZXQgdG9kYXlOZXcgPSAwO1xyXG4gIGNvbnN0IHN0YXRzID0geyByb290OjAsIHByb2plY3RzOjAsIGFyZWFzOjAsIHJlc291cmNlczowLCBpbmJveDowLCBwZXJpb2RpYzowLCBzeXN0ZW06MCB9O1xyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBjb25zdCBwID0gU3RyaW5nKGYucGF0aCB8fCAnJyk7XHJcbiAgICBpZiAocC5zdGFydHNXaXRoKCcxIFByb2plY3RzLycpKSBzdGF0cy5wcm9qZWN0cyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCcyIEFyZWFzLycpKSBzdGF0cy5hcmVhcyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCczIFJlc291cmNlcy8nKSkgc3RhdHMucmVzb3VyY2VzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykpIHsgaWYgKCFwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvX3Byb2Nlc3NlZC8nKSkgc3RhdHMuaW5ib3ggKz0gMTsgfVxyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgc3RhdHMucGVyaW9kaWMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnXycpIHx8IHAuc3RhcnRzV2l0aCgnLicpKSBzdGF0cy5zeXN0ZW0gKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkge31cclxuICAgIGVsc2Ugc3RhdHMucm9vdCArPSAxO1xyXG5cclxuICAgIC8vIENvdW50IHRvZGF5LW5ldyBmaWxlc1xyXG4gICAgY29uc3QgY3RpbWUgPSBmLnN0YXQ/LmN0aW1lID8gbmV3IERhdGUoZi5zdGF0LmN0aW1lKSA6IG51bGw7XHJcbiAgICBpZiAoY3RpbWUpIHtcclxuICAgICAgY29uc3QgY2QgPSBmb3JtYXREYXRlU3RyKGN0aW1lKTtcclxuICAgICAgaWYgKGNkID09PSB0b2RheSkgdG9kYXlOZXcgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgdG90YWxOb3RlczogZmlsZXMubGVuZ3RoLCB0b2RheU5ldywgc3RhdHMgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZWNlbnQgbW9kaWZpZWQgZmlsZXMgKHRvcCAxMCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZWNlbnRBY3Rpdml0eSh2YXVsdCkge1xyXG4gIGlmICghdmF1bHQgfHwgdHlwZW9mIHZhdWx0LmdldE1hcmtkb3duRmlsZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBbXTtcclxuICByZXR1cm4gdmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpXHJcbiAgICAuZmlsdGVyKChmKSA9PiAhaXNTeXN0ZW1QYXRoKGYucGF0aCkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gKGIuc3RhdD8ubXRpbWUgfHwgMCkgLSAoYS5zdGF0Py5tdGltZSB8fCAwKSlcclxuICAgIC5zbGljZSgwLCAyNClcclxuICAgIC5tYXAoKGYpID0+ICh7IHBhdGg6IGYucGF0aCwgdGl0bGU6IGYuYmFzZW5hbWUgfHwgJycsIG10aW1lOiBmLnN0YXQ/Lm10aW1lIHx8IDAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGhvdCBjb250ZXh0IGZyb20gX21ldGEvaG90Lm1kXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRIb3RDb250ZXh0KGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsICdfbWV0YS9ob3QubWQnKTtcclxuICBpZiAoIWZpbGUpIHJldHVybiBbXTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gIFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KVxccypbXFx1MjAxNFxcdTIwMTNcXC1dXFxzKiguKykkLyk7XHJcbiAgICBpZiAobSkgZW50cmllcy5wdXNoKHsgZGF0ZTogbVsxXSwgc3VtbWFyeTogbVsyXS50cmltKCkgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVudHJpZXMuc2xpY2UoMCwgNSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2FuIHRoZSBjdXJyZW50IHdlZWsncyBkYWlseSBub3RlcyBmb3Igd2Vla2x5IHJlY29yZCBiYXIgY2hhcnQuXHJcbiAqIFJldHVybnMgNyBjZWxscyAoTW9uLVN1bikgd2l0aCBjYXB0dXJlIGNvdW50IHBlciBkYXkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWVrbHlSZWNvcmRzKGFwcCkge1xyXG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7IC8vIDA9U3VuLCAxPU1vbiAuLi5cclxuICBjb25zdCBtb25kYXlPZmZzZXQgPSBkYXlPZldlZWsgPT09IDAgPyAtNiA6IDEgLSBkYXlPZldlZWs7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgZC5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBtb25kYXlPZmZzZXQgKyBpKTtcclxuICAgIGNvbnN0IGRzID0gZm9ybWF0RGF0ZVN0cihkKTtcclxuICAgIGNvbnN0IHBhdGggPSBkYWlseU5vdGVQYXRoKGRzKTtcclxuICAgIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgcGF0aCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xyXG4gICAgICAvLyBDb3VudCBub24tdGFzaywgbm9uLWhlYWRpbmcsIG5vbi1lbXB0eSBsaW5lcyBhcyBcImNhcHR1cmVzXCJcclxuICAgICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBpZiAoL14tLS0kLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eI3sxLDZ9XFxzKy8udGVzdCh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXlxccypbLSpdXFxzK1xcW1sgeFhdXFxdLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eKGNyZWF0ZWR8dXBkYXRlZHx0YWdzfHN0YXR1c3xwcmlvcml0eSkvaS50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFsnXFx1NjVFNScsJ1xcdTRFMDAnLCdcXHU0RThDJywnXFx1NEUwOScsJ1xcdTU2REInLCdcXHU0RTk0JywnXFx1NTE2RCddO1xyXG4gICAgY2VsbHMucHVzaCh7IGRhdGU6IGRzLCBjb3VudCwgd2Vla2RheTogd2Vla2RheXNbaV0sIGlzVG9kYXk6IGRzID09PSBmb3JtYXREYXRlU3RyKG5vdykgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSxcclxuICBnZXRJbmJveEZpbGVzLFxyXG4gIGdldERhc2hib2FyZFN0YXRzLFxyXG4gIGdldFJlY2VudEFjdGl2aXR5LFxyXG4gIGdldEhvdENvbnRleHQsXHJcbiAgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSxcclxuICBsaXN0UHJvamVjdHMsXHJcbn07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgSGVhbHRoIHNlcnZpY2UgKGNvbXBvc2l0ZSBzY29yZSwgbWF0dXJpdHksIGxpbmsgZGVuc2l0eSlcbi8vIFBoYXNlIDE6IExpZ2h0d2VpZ2h0IHZlcnNpb24gdmlhIGhvbWUtc2VydmljZSBkYXRhXG5cbmNvbnN0IHsgcmVhZEZpbGVUZXh0LCBnZXRGaWxlQnlQYXRoIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGNvbXBvc2l0ZSBzeXN0ZW0gaGVhbHRoIHNjb3JlICgwLTEwMCkuXG4gKiBXZWlnaHRlZCBmb3JtdWxhIGZyb20gdjIgZGVzaWduIGRvYzpcbiAqICAgSW5ib3ggcHJlc3N1cmUgXHUwMEQ3IDAuMjUgKyBDb21waWxlIGJhY2tsb2cgXHUwMEQ3IDAuMjUgKyBMaW5rIGRlbnNpdHkgXHUwMEQ3IDAuMiArIEZyZXNobmVzcyBcdTAwRDcgMC4xNSArIE1hdHVyaXR5IFx1MDBENyAwLjE1XG4gKi9cbmZ1bmN0aW9uIGNhbGNIZWFsdGhTY29yZShkYXRhKSB7XG4gIC8vIEluYm94IHByZXNzdXJlICgwLTEwMCk6IG1vcmUgZmlsZXMgPSBsb3dlciBzY29yZVxuICBjb25zdCBpbmJveENvdW50ID0gKGRhdGEuaW5ib3hGaWxlcyB8fCBbXSkubGVuZ3RoO1xuICBjb25zdCBpbmJveFNjb3JlID0gTWF0aC5tYXgoMCwgMTAwIC0gaW5ib3hDb3VudCAqIDgpO1xuXG4gIC8vIERhaWx5IG5vdGUgZXhpc3RzIFx1MjE5MiBnb29kXG4gIGNvbnN0IGRhaWx5U2NvcmUgPSBkYXRhLnRvZGF5Py5leGlzdHMgPyAxMDAgOiA0MDtcblxuICAvLyBBY3RpdmUgcHJvamVjdCBoZWFsdGhcbiAgY29uc3QgcHJvamVjdENvdW50ID0gKGRhdGEucHJvamVjdHMgfHwgW10pLmxlbmd0aDtcbiAgY29uc3QgcHJvamVjdFNjb3JlID0gTWF0aC5taW4oMTAwLCBwcm9qZWN0Q291bnQgKiAyMCk7XG5cbiAgLy8gU3RhdHMgY292ZXJhZ2VcbiAgY29uc3QgdG90YWxOb3RlcyA9IGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMDtcbiAgY29uc3QgY292ZXJhZ2VTY29yZSA9IE1hdGgubWluKDEwMCwgTWF0aC5yb3VuZCh0b3RhbE5vdGVzIC8gMTApKTtcblxuICAvLyBGcmVzaG5lc3M6IGFueSByZWNlbnQgYWN0aXZpdHkgY291bnRzXG4gIGNvbnN0IHJlY2VudENvdW50ID0gKGRhdGEucmVjZW50IHx8IFtdKS5sZW5ndGg7XG4gIGNvbnN0IGZyZXNobmVzc1Njb3JlID0gTWF0aC5taW4oMTAwLCByZWNlbnRDb3VudCAqIDEwKTtcblxuICBjb25zdCBzY29yZSA9IE1hdGgucm91bmQoXG4gICAgaW5ib3hTY29yZSAqIDAuMjUgK1xuICAgIGRhaWx5U2NvcmUgKiAwLjIwICtcbiAgICBwcm9qZWN0U2NvcmUgKiAwLjIwICtcbiAgICBjb3ZlcmFnZVNjb3JlICogMC4xNSArXG4gICAgZnJlc2huZXNzU2NvcmUgKiAwLjIwXG4gICk7XG5cbiAgcmV0dXJuIE1hdGgubWluKDEwMCwgTWF0aC5tYXgoMCwgc2NvcmUpKTtcbn1cblxuLyoqXG4gKiBHZXQgdHJlbmQgZGlyZWN0aW9uIHZzIGJhc2VsaW5lLlxuICogUmV0dXJucyAndXAnIHwgJ2Rvd24nIHwgJ2ZsYXQnXG4gKiBQaGFzZSAxOiBiYXNlZCBvbiBpbmJveCB0cmVuZCAodG9kYXkgdnMgeWVzdGVyZGF5IGFwcHJveGltYXRlKVxuICovXG5mdW5jdGlvbiBnZXRUcmVuZChkYXRhKSB7XG4gIGNvbnN0IGluYm94Q291bnQgPSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGg7XG4gIC8vIFJvdWdoIGhldXJpc3RpYzogaWYgaW5ib3ggPCA1IFx1MjE5MiBnb29kLCA1LTEwIFx1MjE5MiBzdGFibGUsID4xMCBcdTIxOTIgYmFkXG4gIGlmIChpbmJveENvdW50IDw9IDMpIHJldHVybiAndXAnO1xuICBpZiAoaW5ib3hDb3VudCA8PSA4KSByZXR1cm4gJ2ZsYXQnO1xuICByZXR1cm4gJ2Rvd24nO1xufVxuXG4vKipcbiAqIEdldCBrZXkgbWV0cmljcyBmb3IgdGhlIG1ldHJpY3Mgcm93LlxuICogUmV0dXJucyBhcnJheSBvZiB7IGxhYmVsLCB2YWx1ZSwgdHJlbmQsIHRyZW5kTGFiZWwsIGNvbG9yPyB9XG4gKi9cbmZ1bmN0aW9uIGdldEtleU1ldHJpY3MoZGF0YSkge1xuICBjb25zdCB0b3RhbE5vdGVzID0gZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwO1xuICBjb25zdCBpbmJveENvdW50ID0gKGRhdGEuaW5ib3hGaWxlcyB8fCBbXSkubGVuZ3RoO1xuICBjb25zdCBwcm9qZWN0Q291bnQgPSAoZGF0YS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoO1xuICBjb25zdCB0b2RheU5ldyA9IGRhdGEuc3RhdHM/LnRvZGF5TmV3IHx8IDA7XG4gIGNvbnN0IHdlZWtseSA9IGRhdGEud2Vla2x5IHx8IFtdO1xuICBjb25zdCB3ZWVrVG90YWwgPSB3ZWVrbHkucmVkdWNlKChzLCBjKSA9PiBzICsgYy5jb3VudCwgMCk7XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1RvdGFsIE5vdGVzJyxcbiAgICAgIHZhbHVlOiBTdHJpbmcodG90YWxOb3RlcyksXG4gICAgICB0cmVuZDogdG9kYXlOZXcgPiAwID8gJ3VwJyA6ICdmbGF0JyxcbiAgICAgIHRyZW5kTGFiZWw6ICcrJyArIHRvZGF5TmV3ICsgJyB0b2RheScsXG4gICAgICBjb2xvcjogJ3ZhcigtLWtjLWN5YW4pJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnSW5ib3gnLFxuICAgICAgdmFsdWU6IFN0cmluZyhpbmJveENvdW50KSxcbiAgICAgIHRyZW5kOiBpbmJveENvdW50IDw9IDUgPyAndXAnIDogaW5ib3hDb3VudCA8PSAxMCA/ICdmbGF0JyA6ICdkb3duJyxcbiAgICAgIHRyZW5kTGFiZWw6IGluYm94Q291bnQgPD0gNSA/ICdIZWFsdGh5JyA6IGluYm94Q291bnQgKyAnIHBlbmRpbmcnLFxuICAgICAgY29sb3I6IGluYm94Q291bnQgPD0gNSA/ICd2YXIoLS1rYy1ncmVlbiknIDogaW5ib3hDb3VudCA8PSAxMCA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXJlZCknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdBY3RpdmUgUHJvamVjdHMnLFxuICAgICAgdmFsdWU6IFN0cmluZyhwcm9qZWN0Q291bnQpLFxuICAgICAgdHJlbmQ6IHByb2plY3RDb3VudCA+PSAxID8gJ3VwJyA6ICdmbGF0JyxcbiAgICAgIHRyZW5kTGFiZWw6IHByb2plY3RDb3VudCArICcgaW4gcHJvZ3Jlc3MnLFxuICAgICAgY29sb3I6ICd2YXIoLS1rYy1hbWJlciknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdXZWVrbHkgQ2FwdHVyZXMnLFxuICAgICAgdmFsdWU6IFN0cmluZyh3ZWVrVG90YWwpLFxuICAgICAgdHJlbmQ6IHdlZWtUb3RhbCA+PSA1ID8gJ3VwJyA6IHdlZWtUb3RhbCA+PSAyID8gJ2ZsYXQnIDogJ2Rvd24nLFxuICAgICAgdHJlbmRMYWJlbDogTWF0aC5yb3VuZCh3ZWVrVG90YWwgLyBNYXRoLm1heCgxLCB3ZWVrbHkubGVuZ3RoKSkgKyAnL2RheSBhdmcnLFxuICAgICAgY29sb3I6ICd2YXIoLS1rYy1wdXJwbGUpJyxcbiAgICB9LFxuICBdO1xufVxuXG4vKipcbiAqIEdldCB0b2RheSBjYXB0dXJlIGNvdW50IGZyb20gd2Vla2x5IGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldFRvZGF5Q2FwdHVyZUNvdW50KHdlZWtseSkge1xuICBpZiAoIXdlZWtseSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrbHkpKSByZXR1cm4gMDtcbiAgY29uc3QgdG9kYXkgPSB3ZWVrbHkuZmluZCgodykgPT4gdy5pc1RvZGF5KTtcbiAgcmV0dXJuIHRvZGF5ID8gdG9kYXkuY291bnQgOiAwO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBkYWlseSBub3RlIHN0cmVhayAoY29uc2VjdXRpdmUgZGF5cyB3aXRoIG5vdGVzKS5cbiAqIFBoYXNlIDE6IHNpbXBsZSB2ZXJzaW9uIGZyb20gd2Vla2x5IGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGNhbGNTdHJlYWsod2Vla2x5KSB7XG4gIGlmICghd2Vla2x5IHx8ICFBcnJheS5pc0FycmF5KHdlZWtseSkpIHJldHVybiAwO1xuICBsZXQgc3RyZWFrID0gMDtcbiAgLy8gQ291bnQgZnJvbSBlbmQgKHRvZGF5KSBiYWNrd2FyZHNcbiAgZm9yIChsZXQgaSA9IHdlZWtseS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh3ZWVrbHlbaV0uY291bnQgPiAwKSBzdHJlYWsgKz0gMTtcbiAgICBlbHNlIGJyZWFrO1xuICB9XG4gIHJldHVybiBzdHJlYWs7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjSGVhbHRoU2NvcmUsXG4gIGdldFRyZW5kLFxuICBnZXRLZXlNZXRyaWNzLFxuICBnZXRUb2RheUNhcHR1cmVDb3VudCxcbiAgY2FsY1N0cmVhayxcbn07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IFBpcGVsaW5lIHNlcnZpY2UgKGluYm94IGRldGFpbCwgY29tcGlsZSBxdWV1ZSwgcXVhcmFudGluZSwgdGhyb3VnaHB1dClcbi8vIFBoYXNlIDE6IExpZ2h0d2VpZ2h0IHNjYW5uaW5nIGZyb20gdmF1bHRcblxuY29uc3QgeyByZWFkRmlsZVRleHQsIHBhcnNlRnJvbnRtYXR0ZXIsIGZvcm1hdERhdGVTdHIgfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmNvbnN0IHsgZ2V0SW5ib3hGaWxlcyB9ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcblxuLyoqXG4gKiBHZXQgaW5ib3ggZmlsZXMgd2l0aCBlbnJpY2hlZCBtZXRhZGF0YSAoc291cmNlLCB0YWdzLCBkYXlzIHdhaXRpbmcpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRJbmJveERldGFpbChhcHApIHtcbiAgY29uc3QgZmlsZXMgPSBnZXRJbmJveEZpbGVzKGFwcC52YXVsdCk7XG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlVGV4dChhcHAudmF1bHQsIGZpbGUpO1xuICAgIGNvbnN0IGZtID0gcGFyc2VGcm9udG1hdHRlcihjb250ZW50KTtcblxuICAgIC8vIEVzdGltYXRlIHNvdXJjZSBmcm9tIGZpbGVuYW1lIG9yIGNvbnRlbnRcbiAgICBsZXQgc291cmNlID0gJ21hbnVhbCc7XG4gICAgaWYgKGZtLm9yaWdpbiA9PT0gJ3dlYmNsaXBwZXInIHx8IGNvbnRlbnQuaW5jbHVkZXMoJ29yaWdpbjogd2ViY2xpcHBlcicpKSBzb3VyY2UgPSAnY2xpcHBpbmcnO1xuXG4gICAgLy8gVGFnc1xuICAgIGNvbnN0IHRhZ3MgPSBBcnJheS5pc0FycmF5KGZtLnRhZ3MpID8gZm0udGFncyA6IChmbS50YWdzID8gW2ZtLnRhZ3NdIDogW10pO1xuXG4gICAgLy8gRGF5cyB3YWl0aW5nXG4gICAgY29uc3QgY3JlYXRlZCA9IGZtLmNyZWF0ZWQgfHwgZmlsZS5zdGF0Py5jdGltZTtcbiAgICBsZXQgZGF5c1dhaXRpbmcgPSAwO1xuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGNyZWF0ZWQpO1xuICAgICAgZGF5c1dhaXRpbmcgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gY3JlYXRlZERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgfVxuXG4gICAgLy8gRmlyc3QgbWVhbmluZ2Z1bCBsaW5lIGFzIHN1bW1hcnlcbiAgICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pXG4gICAgICAuZmlsdGVyKChsKSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBsLnRyaW0oKTtcbiAgICAgICAgcmV0dXJuIHQgJiYgIXQuc3RhcnRzV2l0aCgnLS0tJykgJiYgIXQuc3RhcnRzV2l0aCgnIycpICYmICF0LnN0YXJ0c1dpdGgoJ2NyZWF0ZWQ6JykgJiYgIXQuc3RhcnRzV2l0aCgndGFnczonKSAmJiAhdC5zdGFydHNXaXRoKCd1ZGM6Jyk7XG4gICAgICB9KTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gbGluZXNbMF0/LnNsaWNlKDAsIDgwKSB8fCAnKGVtcHR5KSc7XG5cbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIGZpbGUsXG4gICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICB0aXRsZTogZmlsZS5iYXNlbmFtZSB8fCAnJyxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHRhZ3MsXG4gICAgICBkYXlzV2FpdGluZyxcbiAgICAgIHN1bW1hcnksXG4gICAgICBjcmVhdGVkOiBmbS5jcmVhdGVkIHx8ICcnLFxuICAgICAgbXRpbWU6IGZpbGUuc3RhdD8ubXRpbWUgfHwgMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNvcnQ6IG1vc3QgcmVjZW50IGZpcnN0XG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGIubXRpbWUgLSBhLm10aW1lKTtcbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG4vKipcbiAqIFNjYW4gcmF3LyBkaXJlY3RvcmllcyBmb3IgZmlsZXMgcGVuZGluZyBjb21waWxhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcGlsZVF1ZXVlKGFwcCkge1xuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gW107XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICBjb25zdCByYXdGaWxlcyA9IGZpbGVzLmZpbHRlcigoZikgPT4ge1xuICAgIGNvbnN0IHAgPSBTdHJpbmcoZi5wYXRoIHx8ICcnKTtcbiAgICByZXR1cm4gcC5pbmNsdWRlcygnL3Jhdy8nKSAmJiAhcC5pbmNsdWRlcygnL3dpa2kvJykgJiYgIXAuaW5jbHVkZXMoJy9fYXJjaGl2ZWQvJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGZvciAoY29uc3QgZmlsZSBvZiByYXdGaWxlcy5zbGljZSgwLCAzMCkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgbGluZXMgPSBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcbiAgICBjb25zdCB3b3JkQ291bnQgPSBsaW5lcy5yZWR1Y2UoKHMsIGwpID0+IHMgKyBsLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKS5sZW5ndGgsIDApO1xuXG4gICAgLy8gRGF5cyBzaW5jZSBjcmVhdGVkXG4gICAgY29uc3QgY3JlYXRlZCA9IGZpbGUuc3RhdD8uY3RpbWUgfHwgMDtcbiAgICBjb25zdCBkYXlzV2FpdGluZyA9IGNyZWF0ZWQgPyBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gY3JlYXRlZCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIDogMDtcblxuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgZmlsZSxcbiAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgIHRpdGxlOiBmaWxlLmJhc2VuYW1lIHx8ICcnLFxuICAgICAgZGF5c1dhaXRpbmcsXG4gICAgICB3b3JkQ291bnQsXG4gICAgICBwcmlvcml0eTogd29yZENvdW50ID4gMjAwMCA/ICdoaWdoJyA6IHdvcmRDb3VudCA+IDUwMCA/ICdtZWRpdW0nIDogJ2xvdycsXG4gICAgfSk7XG4gIH1cblxuICBpdGVtcy5zb3J0KChhLCBiKSA9PiBiLndvcmRDb3VudCAtIGEud29yZENvdW50KTtcbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG4vKipcbiAqIEdldCBxdWFyYW50aW5lIHN0YXRzIChQaGFzZSAxOiBzaW1wbGUgaGV1cmlzdGljIGZyb20gaW5ib3gpLlxuICovXG5mdW5jdGlvbiBnZXRRdWFyYW50aW5lU3RhdHMoaW5ib3hJdGVtcykge1xuICBjb25zdCB0b3RhbCA9IGluYm94SXRlbXMubGVuZ3RoO1xuICBjb25zdCB3aXRob3V0Rm0gPSBpbmJveEl0ZW1zLmZpbHRlcigoaSkgPT4gIWkuY3JlYXRlZCkubGVuZ3RoO1xuICByZXR1cm4ge1xuICAgIEwwOiB7IGxhYmVsOiAnTWlzc2luZyBtZXRhZGF0YScsIGNvdW50OiB3aXRob3V0Rm0sIGl0ZW1zOiBbXSB9LFxuICAgIEwxOiB7IGxhYmVsOiAnTG93IGNvbmZpZGVuY2UnLCBjb3VudDogTWF0aC5yb3VuZCh0b3RhbCAqIDAuMSksIGl0ZW1zOiBbXSB9LFxuICAgIEwyOiB7IGxhYmVsOiAnUG9zc2libGUgZHVwbGljYXRlcycsIGNvdW50OiAwLCBpdGVtczogW10gfSxcbiAgICBMMzogeyBsYWJlbDogJ1RvbyBzaG9ydCAoPDUwdyknLCBjb3VudDogaW5ib3hJdGVtcy5maWx0ZXIoKGkpID0+IGkuc3VtbWFyeSA9PT0gJyhlbXB0eSknKS5sZW5ndGgsIGl0ZW1zOiBbXSB9LFxuICB9O1xufVxuXG4vKipcbiAqIFRocm91Z2hwdXQgZGF0YTogZGFpbHkgY291bnRzIGZyb20gd2Vla2x5IHJlY29yZHMuXG4gKi9cbmZ1bmN0aW9uIGdldFRocm91Z2hwdXRTdGF0cyh3ZWVrbHkpIHtcbiAgaWYgKCF3ZWVrbHkgfHwgIUFycmF5LmlzQXJyYXkod2Vla2x5KSkgcmV0dXJuIHsgZGFpbHk6IFtdLCB0b3RhbDogMCwgYXZnOiAwIH07XG4gIGNvbnN0IHRvdGFsID0gd2Vla2x5LnJlZHVjZSgocywgYykgPT4gcyArIGMuY291bnQsIDApO1xuICByZXR1cm4ge1xuICAgIGRhaWx5OiB3ZWVrbHksXG4gICAgdG90YWwsXG4gICAgYXZnOiBNYXRoLnJvdW5kKHRvdGFsIC8gTWF0aC5tYXgoMSwgd2Vla2x5Lmxlbmd0aCkgKiAxMCkgLyAxMCxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEluYm94RGV0YWlsLFxuICBnZXRDb21waWxlUXVldWUsXG4gIGdldFF1YXJhbnRpbmVTdGF0cyxcbiAgZ2V0VGhyb3VnaHB1dFN0YXRzLFxufTtcbiIsICJcdUZFRkYvLyBLT1MgQ29ja3BpdCB2MTEgXHUyMDE0IEZ1bGwgdGFiIG5hdmlnYXRpb24gKGhvbWUgLyBjaGF0IC8gbGlmZSAvIHBpcGVsaW5lIC8gZ2FyZGVuIC8gc2V0dGluZ3MpXHJcbi8vICsgU2V0dGluZ3MtYXdhcmUgKyBsb2NhbGUgaTE4biArIEFJIENoYXQgd2l0aCBGTE9Xbm90ZSBhdXRvLWRldGVjdFxyXG5cclxuY29uc3QgeyBJdGVtVmlldywgbW9tZW50IH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xyXG5jb25zdCB7IHQgfSA9IHJlcXVpcmUoJy4vbG9jYWxlJyk7XHJcbmNvbnN0IHsgQUlDaGF0LCByZXNvbHZlUHJvdmlkZXJDb25maWcgfSA9IHJlcXVpcmUoJy4vYWktY2hhdC9pbmRleCcpO1xyXG5jb25zdCB7XHJcbiAgZ2V0VG9kYXlTdGF0ZSwgZ2V0SW5ib3hGaWxlcywgZ2V0RGFzaGJvYXJkU3RhdHMsXHJcbiAgZ2V0UmVjZW50QWN0aXZpdHksIGdldEhvdENvbnRleHQsIGdldFdlZWtseVJlY29yZHMsXHJcbiAgZ2V0RW5naW5lU3RhdGUsIGxpc3RQcm9qZWN0cyxcclxufSA9IHJlcXVpcmUoJy4vaG9tZS1zZXJ2aWNlJyk7XHJcbmNvbnN0IHtcclxuICBjYWxjSGVhbHRoU2NvcmUsIGdldFRyZW5kLCBnZXRLZXlNZXRyaWNzLFxyXG4gIGdldFRvZGF5Q2FwdHVyZUNvdW50LCBjYWxjU3RyZWFrLFxyXG59ID0gcmVxdWlyZSgnLi9oZWFsdGgtc2VydmljZScpO1xyXG5jb25zdCB7IGdldEluYm94RGV0YWlsLCBnZXRDb21waWxlUXVldWUsIGdldFRocm91Z2hwdXRTdGF0cyB9ID0gcmVxdWlyZSgnLi9waXBlbGluZS1zZXJ2aWNlJyk7XHJcblxyXG5jb25zdCBWSUVXX1RZUEVfQ09DS1BJVCA9ICdrb3MtY29ja3BpdC12aWV3JztcclxuXHJcbmNsYXNzIENvY2twaXRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKGxlYWYsIHBsdWdpbikge1xyXG4gICAgc3VwZXIobGVhZik7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIHRoaXMuYWlDaGF0ID0gbnVsbDtcclxuICAgIHRoaXMuYWN0aXZlUGFuZWwgPSAnaG9tZSc7IC8vICdob21lJyB8ICdjaGF0JyB8ICdsaWZlJyB8ICdwaXBlbGluZScgfCAnZ2FyZGVuJyB8ICdzZXR0aW5ncydcclxuICAgIHRoaXMuYWlDaGF0cyA9IG5ldyBNYXAoKTsgICAgICAgICAvLyBNYXA8dGFiSWQsIEFJQ2hhdD5cclxuICAgIHRoaXMuY2hhdFRhYnMgPSBbXTsgICAgICAgICAgICAgICAvLyB7aWQsIHRpdGxlLCBjcmVhdGVkQXR9W11cclxuICAgIHRoaXMuYWN0aXZlQ2hhdFRhYklkID0gbnVsbDsgICAgICAgLy8gQ3VycmVudGx5IGFjdGl2ZSBjaGF0IHRhYlxyXG4gIH1cclxuXHJcbiAgZ2V0Vmlld1R5cGUoKSB7IHJldHVybiBWSUVXX1RZUEVfQ09DS1BJVDsgfVxyXG4gIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgY29uc3QgbmFtZXMgPSB7IGhvbWU6IHRoaXMuX3QoJ3BhbmVsLmhvbWUnKSwgY2hhdDogdGhpcy5fdCgncGFuZWwuY2hhdCcpLCBsaWZlOiB0aGlzLl90KCdwYW5lbC5saWZlJyksIHBpcGVsaW5lOiB0aGlzLl90KCdwYW5lbC5waXBlbGluZScpLCBnYXJkZW46IHRoaXMuX3QoJ3BhbmVsLmdhcmRlbicpLCBzZXR0aW5nczogdGhpcy5fdCgncGFuZWwuc2V0dGluZ3MnKSB9O1xyXG4gICAgcmV0dXJuIG5hbWVzW3RoaXMuYWN0aXZlUGFuZWxdIHx8IHRoaXMuX3QoJ3BhbmVsLmhvbWUnKTtcclxuICB9XHJcbiAgZ2V0SWNvbigpIHsgcmV0dXJuICdnYXVnZSc7IH1cclxuXHJcbiAgZ2V0IHNldHRpbmdzKCkgeyByZXR1cm4gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbi5zZXR0aW5ncyA6IG51bGw7IH1cclxuXHJcbiAgX3Qoa2V5LCBwYXJhbXMpIHsgcmV0dXJuIHQoa2V5LCB0aGlzLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJywgcGFyYW1zKTsgfVxyXG5cclxuICBnZXQgX2RheU5hbWVzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5fdCgnZGF5LnN1bicpLCB0aGlzLl90KCdkYXkubW9uJyksIHRoaXMuX3QoJ2RheS50dWUnKSxcclxuICAgICAgdGhpcy5fdCgnZGF5LndlZCcpLCB0aGlzLl90KCdkYXkudGh1JyksIHRoaXMuX3QoJ2RheS5mcmknKSxcclxuICAgICAgdGhpcy5fdCgnZGF5LnNhdCcpLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIHN1cGVyLm9ubG9hZCgpO1xyXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcclxuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC1jb250YWluZXInKTtcclxuICAgIHRoaXMuX2FwcGx5U2Vhc29uYWxUaGVtZSgpO1xyXG4gICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XHJcbiAgICBhd2FpdCB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRFbC5pbm5lckhUTUwgPVxyXG4gICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8c3Bhbj4nICsgdGhpcy5fdCgnYXBwLmxvYWRpbmcnKSArICc8L3NwYW4+JyArXHJcbiAgICAgICc8L2Rpdj4nO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRXJyb3IobXNnKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcclxuICAgIGNvbnN0IGVyckJveCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGInKTtcclxuICAgIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhcHAuZXJyb3InKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcclxuICAgIGlmIChtc2cpIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcobXNnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcclxuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgJyArIHRoaXMuX3QoJ2FwcC5yZXRyeScpIH0pO1xyXG4gICAgcmV0cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWZyZXNoKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xyXG4gICAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdLT1MgQ29ja3BpdCByZWZyZXNoIGVycm9yOicsIGUpO1xyXG4gICAgICB0aGlzLnJlbmRlckVycm9yKGU/Lm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29sbGVjdERhdGEoYXBwKSB7XHJcbiAgICBjb25zdCBbdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGdldFRvZGF5U3RhdGUoYXBwKS5jYXRjaCgoKSA9PiBudWxsKSxcclxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcclxuICAgICAgZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKS5jYXRjaCgoKSA9PiAoeyB0b3RhbE5vdGVzOjAsIHRvZGF5TmV3OjAsIHN0YXRzOnt9IH0pKSxcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldFJlY2VudEFjdGl2aXR5KGFwcC52YXVsdCkpLFxyXG4gICAgICBnZXRIb3RDb250ZXh0KGFwcCkuY2F0Y2goKCkgPT4gW10pLFxyXG4gICAgICBnZXRXZWVrbHlSZWNvcmRzKGFwcCkuY2F0Y2goKCkgPT4gW10pLFxyXG4gICAgICBnZXRFbmdpbmVTdGF0ZShhcHApLmNhdGNoKCgpID0+ICh7fSkpLFxyXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0SW5ib3hGaWxlcyhhcHAudmF1bHQpKSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIFBoYXNlIDE6IHBpcGVsaW5lIGRhdGFcclxuICAgIGNvbnN0IFtpbmJveERldGFpbCwgY29tcGlsZVF1ZXVlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgZ2V0SW5ib3hEZXRhaWwoYXBwKS5jYXRjaCgoKSA9PiBbXSksXHJcbiAgICAgIGdldENvbXBpbGVRdWV1ZShhcHApLmNhdGNoKCgpID0+IFtdKSxcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlcywgaW5ib3hEZXRhaWwsIGNvbXBpbGVRdWV1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIFN3aXRjaCBiZXR3ZWVuIHBhbmVscyAqL1xyXG4gIHN3aXRjaFBhbmVsKHBhbmVsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gcGFuZWw7XHJcbiAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEgfHwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEZvbnQgU2l6ZSA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIF9hcHBseUZvbnRTaXplKCkge1xyXG4gICAgdmFyIHNpemUgPSB0aGlzLnNldHRpbmdzPy5mb250U2l6ZSB8fCAnbWVkaXVtJztcclxuICAgIHZhciByb290ID0gdGhpcy5jb250ZW50RWw7XHJcbiAgICBpZiAoIXJvb3QpIHJldHVybjtcclxuICAgIHJvb3QucmVtb3ZlQ2xhc3MoJ2ZvbnQtc21hbGwnKTtcclxuICAgIHJvb3QucmVtb3ZlQ2xhc3MoJ2ZvbnQtbWVkaXVtJyk7XHJcbiAgICByb290LnJlbW92ZUNsYXNzKCdmb250LWxhcmdlJyk7XHJcbiAgICByb290LmFkZENsYXNzKCdmb250LScgKyBzaXplKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gU2Vhc29uYWwgVGhlbWUgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBfYXBwbHlTZWFzb25hbFRoZW1lKCkge1xyXG4gICAgdmFyIHNlYXNvbiA9IHRoaXMuc2V0dGluZ3M/LnNlYXNvbmFsVGhlbWUgfHwgJ3NwcmluZyc7XHJcbiAgICB2YXIgcm9vdCA9IHRoaXMuY29udGVudEVsO1xyXG4gICAgaWYgKCFyb290KSByZXR1cm47XHJcbiAgICBbJ3RoZW1lLXNwcmluZycsJ3RoZW1lLXN1bW1lcicsJ3RoZW1lLWF1dHVtbicsJ3RoZW1lLXdpbnRlciddLmZvckVhY2goZnVuY3Rpb24oYykgeyByb290LnJlbW92ZUNsYXNzKGMpOyB9KTtcclxuICAgIHJvb3QuYWRkQ2xhc3MoJ3RoZW1lLScgKyBzZWFzb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBQYW5lbCBSb3V0ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICByZW5kZXJQYW5lbChkYXRhKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcclxuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgY29uc3QgbWFpbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xyXG5cclxuICAgIHRoaXMuX2FwcGx5U2Vhc29uYWxUaGVtZSgpO1xyXG4gICAgdGhpcy5fYXBwbHlGb250U2l6ZSgpO1xyXG4gICAgLy8gUmVuZGVyIHRhYiBiYXIgZm9yIGFsbCBwYW5lbHNcclxuICAgIHRoaXMuX3JlbmRlclRhYkJhcihtYWluKTtcclxuXHJcbiAgICAvLyBSZW5kZXIgYWN0aXZlIHBhbmVsIGNvbnRlbnRcclxuICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gbWFpbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdGFiLWNvbnRlbnQgYWN0aXZlJywgYXR0cjogeyBzdHlsZTogJ21pbi1oZWlnaHQ6NDAwcHgnIH0gfSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQYW5lbCA9PT0gJ2NoYXQnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyQ2hhdFZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnbGlmZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJMaWZlVmlldyhjb250ZW50QXJlYSwgZGF0YSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUGFuZWwgPT09ICdwaXBlbGluZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJQaXBlbGluZVZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnZ2FyZGVuJykge1xyXG4gICAgICB0aGlzLnJlbmRlckdhcmRlblZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnc2V0dGluZ3MnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyU2V0dGluZ3NWaWV3KGNvbnRlbnRBcmVhLCBkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyRGFzaGJvYXJkKGNvbnRlbnRBcmVhLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFiIEJhciA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIF9yZW5kZXJUYWJCYXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCB0YWJzID0gW1xyXG4gICAgICB7IGlkOiAnaG9tZScsIGljb246ICdcXHVEODNEXFx1RENDQScsIGxhYmVsOiB0aGlzLl90KCd0YWIuZGFzaGJvYXJkJykgfSxcclxuICAgICAgeyBpZDogJ2NoYXQnLCBpY29uOiAnXFx1RDgzRVxcdUREMTYnLCBsYWJlbDogdGhpcy5fdCgnYWkudGl0bGUnKSB9LFxyXG4gICAgICB7IGlkOiAna29zLWxpZmUnLCBpY29uOiAnXFx1RDgzRVxcdURERUMnLCBsYWJlbDogdGhpcy5fdCgndGFiLmxpZmUnKSB9LFxyXG4gICAgICB7IGlkOiAncGlwZWxpbmUnLCBpY29uOiAnXFx1RDgzRFxcdUREMjcnLCBsYWJlbDogdGhpcy5fdCgndGFiLnBpcGVsaW5lJykgfSxcclxuICAgICAgeyBpZDogJ2dhcmRlbicsIGljb246ICdcXHVEODNDXFx1REYzMycsIGxhYmVsOiB0aGlzLl90KCd0YWIuZ2FyZGVuJykgfSxcclxuICAgICAgeyBpZDogJ3NldHRpbmdzJywgaWNvbjogJ1xcdTI2OTlcXHVGRTBGJywgbGFiZWw6IHRoaXMuX3QoJ3RhYi5zZXR0aW5ncycpIH0sXHJcbiAgICBdO1xyXG4gICAgdmFyIGJhciA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdGFiYmFyJyB9KTtcclxuICAgIHRhYnMuZm9yRWFjaChmdW5jdGlvbih0KSB7XHJcbiAgICAgIHZhciBpdGVtID0gYmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7XHJcbiAgICAgICAgY2xzOiAna29zLXRhYi1pdGVtJyArICh0LmlkID09PSB0aGlzLmFjdGl2ZVBhbmVsID8gJyBhY3RpdmUnIDogJycpLFxyXG4gICAgICB9KTtcclxuICAgICAgaXRlbS5pbm5lckhUTUwgPSB0Lmljb24gKyAnICcgKyB0LmxhYmVsO1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHQuaWQgPT09IHRoaXMuYWN0aXZlUGFuZWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKHRoaXMuYXBwKS50aGVuKGZ1bmN0aW9uKGQpIHsgdGhpcy5zd2l0Y2hQYW5lbCh0LmlkLCBkKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEhvbWUgKERhc2hib2FyZCkgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICByZW5kZXJEYXNoYm9hcmQoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJUb3BCYXIoY29udGFpbmVyLCBkYXRhKTtcclxuICAgIHRoaXMuX3JlbmRlclBpcGVsaW5lRmxvdyhjb250YWluZXIsIGRhdGEpO1xyXG4gICAgdGhpcy5fcmVuZGVyS2V5TWV0cmljcyhjb250YWluZXIsIGRhdGEpO1xyXG4gICAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGFzaGJvYXJkLWdyaWQnIH0pO1xyXG4gICAgLy8gWm9uZSAxIFx1MjAxNCBFbmdpbmU6IEhlYWx0aCB8IEVuZ2luZSBDb250cm9sIHwgUXVpY2sgTGF1bmNoXHJcbiAgICBjb25zdCB6b25lMSA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXpvbmUtbGVmdCcsIGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNHB4JyB9IH0pO1xyXG4gICAgdGhpcy5fcmVuZGVySGVhbHRoUGFuZWwoem9uZTEsIGRhdGEpO1xyXG4gICAgdGhpcy5fcmVuZGVyRW5naW5lQ29udHJvbCh6b25lMSwgZGF0YSk7XHJcbiAgICB0aGlzLl9yZW5kZXJMYXVuY2hQYW5lbCh6b25lMSk7XHJcbiAgICAvLyBab25lIDIgXHUyMDE0IFdvcms6IFRvZGF5IEZvY3VzIHwgQWN0aXZlIFByb2plY3RzXHJcbiAgICBjb25zdCB6b25lMiA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXpvbmUtY2VudGVyJywgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE0cHgnIH0gfSk7XHJcbiAgICB0aGlzLl9yZW5kZXJUb2RheUZvY3VzKHpvbmUyLCBkYXRhKTtcclxuICAgIHRoaXMuX3JlbmRlclByb2plY3RzUGFuZWwoem9uZTIsIGRhdGEpO1xyXG4gICAgLy8gWm9uZSAzIFx1MjAxNCBLbm93bGVkZ2U6IEdyb3d0aCB8IEZlZWQgfCBIb3RcclxuICAgIGNvbnN0IHpvbmUzID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtem9uZS1yaWdodCcsIGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNHB4JyB9IH0pO1xyXG4gICAgdGhpcy5fcmVuZGVyR3Jvd3RoUGFuZWwoem9uZTMsIGRhdGEpO1xyXG4gICAgdGhpcy5fcmVuZGVyRmVlZFBhbmVsKHpvbmUzLCBkYXRhKTtcclxuICAgIHRoaXMuX3JlbmRlckhvdFBhbmVsKHpvbmUzLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIF9yZW5kZXJUb3BCYXIoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICBjb25zdCBiYXIgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXRvcGJhcicgfSk7XHJcbiAgICBjb25zdCBicmFuZCA9IGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyLWJyYW5kJyB9KTtcclxuICAgIGJyYW5kLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtbG9nbycsIHRleHQ6ICdLT1MnIH0pO1xyXG4gICAgYnJhbmQuY3JlYXRlRWwoJ3NtYWxsJywgeyBjbHM6ICdrb3MtbG9nby1zdWInLCB0ZXh0OiAndjInIH0pO1xyXG4gICAgY29uc3Qgc2NvcmUgPSBjYWxjSGVhbHRoU2NvcmUoZGF0YSk7XHJcbiAgICBjb25zdCBiYWRnZUNscyA9IHNjb3JlID49IDg1ID8gJ2hlYWx0aC1vcHRpbWFsJyA6IHNjb3JlID49IDY1ID8gJ2hlYWx0aC13YXJuaW5nJyA6ICdoZWFsdGgtY3JpdGljYWwnO1xyXG4gICAgY29uc3QgYmFkZ2UgPSBiYXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWhlYWx0aC1iYWRnZSAnICsgYmFkZ2VDbHMsIGF0dHI6IHsgdGl0bGU6ICdWYXVsdCBIZWFsdGg6ICcgKyBzY29yZSArICclJyB9IH0pO1xyXG4gICAgYmFkZ2UuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2RvdCcgfSk7XHJcbiAgICBiYWRnZS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnaGVhbHRoLXRleHQnLCB0ZXh0OiBzY29yZSArICcvMTAwJyB9KTtcclxuICAgIGJhZGdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLl9oYW5kbGVMYXVuY2goJ2luaXQnKTsgfSk7XHJcbiAgICBiYXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXRvcGJhci1zcGFjZXInIH0pO1xyXG4gICAgY29uc3Qgc2VhcmNoV3JhcCA9IGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyLXNlYXJjaCcgfSk7XHJcbiAgICB2YXIgc2VhcmNoSW5wdXQgPSBzZWFyY2hXcmFwLmNyZWF0ZUVsKCdpbnB1dCcsIHsgY2xzOiAna29zLXRvcGJhci1zZWFyY2gtaW5wdXQnLCBhdHRyOiB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6IHRoaXMuX3QoJ3NlYXJjaC5wbGFjZWhvbGRlcicpIH0gfSk7XHJcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICB2YXIgdmFsID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2YWwpIHsgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoJ3RhYicpLnNldFZpZXdTdGF0ZSh7IHR5cGU6ICdzZWFyY2gnLCBzdGF0ZTogeyBxdWVyeTogdmFsLCBtYXRjaENhc2U6IGZhbHNlIH0gfSk7IH1cclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBiYXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXRvcGJhci1hY3Rpb25zJyB9KTtcclxuICAgIGNvbnN0IHJlZnJlc2hCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy10b3BiYXItYnRuJywgdGV4dDogJ1xcdTIxQkInLCBhdHRyOiB7IHRpdGxlOiB0aGlzLl90KCd0b29sdGlwLnJlZnJlc2gnKSB9IH0pO1xyXG4gICAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW5kZXJMb2FkaW5nKCk7IHRoaXMucmVmcmVzaCgpOyB9KTtcclxuICAgIGNvbnN0IGNsb2NrID0gYWN0aW9ucy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyLWNsb2NrJyB9KTtcclxuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgY2xvY2suY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy10b3BiYXItZGF0ZScsIHRleHQ6IG5vdy5mb3JtYXQoJ2RkZCBZWVlZLU1NLUREJykgfSk7XHJcbiAgICBjbG9jay5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLXRvcGJhci10aW1lJywgdGV4dDogbm93LmZvcm1hdCgnSEg6bW0nKSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFBoYXNlIDE6IFBpcGVsaW5lIEZsb3dcclxuXHJcbiAgX3JlbmRlclBpcGVsaW5lRmxvdyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBpbmJveENvdW50ID0gKGRhdGEuaW5ib3hGaWxlcyB8fCBbXSkubGVuZ3RoO1xyXG4gICAgdmFyIGNvbXBpbGVDb3VudCA9IChkYXRhLmNvbXBpbGVRdWV1ZSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgdmFyIHN0YXRzID0gZGF0YS5zdGF0cz8uc3RhdHMgfHwge307XHJcbiAgICB2YXIgd2lraUNvdW50ID0gKHN0YXRzLnJlc291cmNlcyB8fCAwKSAtIChzdGF0cy5pbmJveCB8fCAwKTtcclxuICAgIHZhciBwYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnIH0pO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjEycHggMTRweCcgfSB9KTtcclxuICAgIHZhciBmbG93Um93ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyJyB9IH0pO1xyXG4gICAgdmFyIHN0ZXBzID0gW1xyXG4gICAgICB7IGxhYmVsOiB0aGlzLl90KCdwaXBlbGluZS5pbmJveCcpLCBjb3VudDogaW5ib3hDb3VudCwgY29sb3I6IGluYm94Q291bnQgPT09IDAgPyAndmFyKC0ta2MtZ3JlZW4pJyA6IGluYm94Q291bnQgPD0gNSA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXJlZCknLCBpa2V5OiAnaW5ib3gnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3BpcGVsaW5lLnRyaWFnZScpLCBjb3VudDogJy0nLCBjb2xvcjogJ3ZhcigtLWtjLXRleHQtZGltKScsIGlrZXk6ICd0cmlhZ2UnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3BpcGVsaW5lLnJhdycpLCBjb3VudDogY29tcGlsZUNvdW50LCBjb2xvcjogY29tcGlsZUNvdW50ID09PSAwID8gJ3ZhcigtLWtjLWdyZWVuKScgOiAndmFyKC0ta2MtYW1iZXIpJywgaWtleTogJ2NvbXBpbGUnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3BpcGVsaW5lLmNvbXBpbGUnKSwgY291bnQ6ICctJywgY29sb3I6ICd2YXIoLS1rYy10ZXh0LWRpbSknLCBpa2V5OiAnY29tcGlsZS1ydW4nIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3BpcGVsaW5lLndpa2knKSwgY291bnQ6IHdpa2lDb3VudCwgY29sb3I6IHdpa2lDb3VudCA+IDAgPyAndmFyKC0ta2MtZ3JlZW4pJyA6ICd2YXIoLS1rYy10ZXh0LWRpbSknLCBpa2V5OiAnd2lraScgfSxcclxuICAgIF07XHJcbiAgICBzdGVwcy5mb3JFYWNoKGZ1bmN0aW9uKHMsIGlkeCkge1xyXG4gICAgICB2YXIgZWwgPSBmbG93Um93LmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6NnB4O3RyYW5zaXRpb246YWxsIDAuMnMnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7IGVsLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZCknOyB9KTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkgeyBlbC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JzsgfSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHMuaWtleSA9PT0gJ2luYm94JykgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KCcwIEluYm94JywgJycsIHRydWUpOyB9XHJcbiAgICAgICAgZWxzZSBpZiAocy5pa2V5ID09PSAnY29tcGlsZScpIHsgbmV3IE5vdGljZSgnUGlwZWxpbmUgdmlldyBcdTIwMTQgY29taW5nIHNvb24nKTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMuaWtleSA9PT0gJ3dpa2knKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJzMgUmVzb3VyY2VzLzAwMC1Lbm93bGVkZ2UnLCAnJywgdHJ1ZSk7IH1cclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgZWwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IFN0cmluZyhzLmNvdW50KSwgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjonICsgcy5jb2xvciB9IH0pO1xyXG4gICAgICBlbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogcy5sYWJlbCwgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweCcgfSB9KTtcclxuICAgICAgaWYgKGlkeCA8IHN0ZXBzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBmbG93Um93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDg1OTQpLCBhdHRyOiB7IHN0eWxlOiAnY29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7bWFyZ2luOjAgMnB4O29wYWNpdHk6MC4zJyB9IH0pO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAndGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDo2cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLXhzKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLmNsaWNrTmF2aWdhdGUnKSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFBoYXNlIDE6IEtleSBNZXRyaWNzIFJvd1xyXG5cclxuICBfcmVuZGVyS2V5TWV0cmljcyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBtZXRyaWNzID0gZ2V0S2V5TWV0cmljcyhkYXRhKTtcclxuICAgIHZhciByb3cgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNDBweCwxZnIpKTtnYXA6MTBweDttYXJnaW4tYm90dG9tOjE0cHgnIH0gfSk7XHJcbiAgICBtZXRyaWNzLmZvckVhY2goZnVuY3Rpb24obSkge1xyXG4gICAgICB2YXIgY2FyZCA9IHJvdy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnLCBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzoxMnB4IDE0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICcgKyBtLmNvbG9yIH0gfSk7XHJcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtjb2xvcjonICsgbS5jb2xvciB9LCB0ZXh0OiBtLnZhbHVlIH0pO1xyXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC41cHg7bWFyZ2luLXRvcDoycHgnIH0sIHRleHQ6IG0ubGFiZWwgfSk7XHJcbiAgICAgIHZhciB0cmVuZEVsID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLXRvcDo0cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLXhzKScgfSB9KTtcclxuICAgICAgdmFyIHRyZW5kSWNvbiA9IG0udHJlbmQgPT09ICd1cCcgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDk2NTApIDogbS50cmVuZCA9PT0gJ2Rvd24nID8gU3RyaW5nLmZyb21DaGFyQ29kZSg5NjYwKSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoODIxMik7XHJcbiAgICAgIHZhciB0cmVuZENvbG9yID0gbS50cmVuZCA9PT0gJ3VwJyA/ICd2YXIoLS1rYy1ncmVlbiknIDogbS50cmVuZCA9PT0gJ2Rvd24nID8gJ3ZhcigtLWtjLXJlZCknIDogJ3ZhcigtLWtjLXRleHQtZGltKSc7XHJcbiAgICAgIHRyZW5kRWwuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6JyArIHRyZW5kQ29sb3IgKyAnXCI+JyArIHRyZW5kSWNvbiArICc8L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pXCI+JyArIG0udHJlbmRMYWJlbCArICc8L3NwYW4+JztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGhhc2UgMTogRW5naW5lIENvbnRyb2wgKGNsaWNrYWJsZSlcclxuXHJcbiAgX3JlbmRlckVuZ2luZUNvbnRyb2woY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgZW5naW5lcyA9IGRhdGEuZW5naW5lcyB8fCB7fTtcclxuICAgIHZhciBwYW5lbCA9IHRoaXMuX2NyZWF0ZVBhbmVsKGNvbnRhaW5lciwgdGhpcy5fdCgnZW5naW5lLmNvbnRyb2wnKSwgJ2VuZ2luZXMnKTtcclxuICAgIHZhciBib2R5ID0gcGFuZWwuYm9keTtcclxuICAgIHZhciBncmlkID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDo1cHgnIH0gfSk7XHJcbiAgICB2YXIgZW5naW5lRGVmcyA9IFtcclxuICAgICAgeyBrZXk6ICd0cmlhZ2UnLCBsYWJlbDogJ1RyaWFnZScsIHN0YXR1czogZW5naW5lcy50cmlhZ2U/LnN0YXR1cyB8fCAnaWRsZScgfSxcclxuICAgICAgeyBrZXk6ICdjb21waWxlJywgbGFiZWw6ICdDb21waWxlJywgc3RhdHVzOiBlbmdpbmVzLmNvbXBpbGU/LnN0YXR1cyB8fCAnaWRsZScgfSxcclxuICAgICAgeyBrZXk6ICdsaW5rJywgbGFiZWw6ICdMaW5rJywgc3RhdHVzOiBlbmdpbmVzLmxpbms/LnN0YXR1cyB8fCAnaWRsZScgfSxcclxuICAgICAgeyBrZXk6ICdkYWlseScsIGxhYmVsOiAnRGFpbHknLCBzdGF0dXM6IGRhdGEudG9kYXk/LmV4aXN0cyA/ICdkb25lJyA6ICd3YXJuaW5nJyB9LFxyXG4gICAgICB7IGtleTogJ3Byb2plY3QnLCBsYWJlbDogJ1Byb2plY3QnLCBzdGF0dXM6IChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGggPiAwID8gJ2RvbmUnIDogJ2lkbGUnIH0sXHJcbiAgICAgIHsga2V5OiAnbGlmZScsIGxhYmVsOiAnTGlmZStBSScsIHN0YXR1czogZW5naW5lcy5saWZlPy5zdGF0dXMgfHwgJ2lkbGUnIH0sXHJcbiAgICBdO1xyXG4gICAgZW5naW5lRGVmcy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xyXG4gICAgICB2YXIgY2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6OHB4IDEwcHg7YmFja2dyb3VuZDp2YXIoLS1rYy1iZy1jYXJkKTtib3JkZXItcmFkaXVzOjZweDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAwLjJzJyB9IH0pO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHsgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQtaG92ZXIpJzsgfSk7XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkgeyBjYXJkLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZCknOyB9KTtcclxuICAgICAgdmFyIHRvcFJvdyA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTo0cHgnIH0gfSk7XHJcbiAgICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtmb250LXdlaWdodDo1MDA7Y29sb3I6dmFyKC0ta2MtdGV4dC1wcmltYXJ5KScgfSwgdGV4dDogZGVmLmxhYmVsIH0pO1xyXG4gICAgICB2YXIgc3RhdHVzQ29sb3IgPSBkZWYuc3RhdHVzID09PSAnZG9uZScgPyAndmFyKC0ta2MtZ3JlZW4pJyA6IGRlZi5zdGF0dXMgPT09ICd3YXJuaW5nJyA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXRleHQtZGltKSc7XHJcbiAgICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ3dpZHRoOjZweDtoZWlnaHQ6NnB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6JyArIHN0YXR1c0NvbG9yICsgJztmbGV4LXNocmluazowJyB9IH0pO1xyXG4gICAgICB2YXIgYm90dG9tUm93ID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcicgfSB9KTtcclxuICAgICAgdmFyIHN0YXR1c1RleHQgPSBkZWYuc3RhdHVzID09PSAnZG9uZScgPyB0aGlzLl90KCdlbmdpbmUuc3RhdHVzUmVhZHknKSA6IGRlZi5zdGF0dXMgPT09ICd3YXJuaW5nJyA/IHRoaXMuX3QoJ2VuZ2luZS5zdGF0dXNOZWVkc1dvcmsnKSA6IHRoaXMuX3QoJ2VuZ2luZS5zdGF0dXNTdGFuZGJ5Jyk7XHJcbiAgICAgIGJvdHRvbVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pJyB9LCB0ZXh0OiBzdGF0dXNUZXh0IH0pO1xyXG4gICAgICB2YXIgYnRuID0gYm90dG9tUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO3BhZGRpbmc6MnB4IDEwcHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1ib3JkZXIpO2JhY2tncm91bmQ6dmFyKC0ta2MtYmctZGVlcCk7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LCB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk2NTQpIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkgeyBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1rYy1iZy1jYXJkLWhvdmVyKSc7IGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS1rYy10ZXh0LXByaW1hcnkpJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWRlZXApJzsgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KSc7IH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHRoaXMuX2hhbmRsZUxhdW5jaChkZWYua2V5KTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLl9oYW5kbGVMYXVuY2goZGVmLmtleSk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGhhc2UgMTogVG9kYXkgRm9jdXNcclxuXHJcbiAgX3JlbmRlclRvZGF5Rm9jdXMoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ3RvZGF5LnRpdGxlJyksICd0b2RheScpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGhlYWRlclJvdyA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTo4cHgnIH0gfSk7XHJcbiAgICB2YXIgdGFza3MgPSBkYXRhLnRvZGF5Py50YXNrcyB8fCB7IGRvbmU6IDAsIHRvdGFsOiAwLCBjb21wbGV0aW9uUmF0ZTogMCB9O1xyXG4gICAgaGVhZGVyUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtmb250LXdlaWdodDo1MDA7Y29sb3I6dmFyKC0ta2MtdGV4dC1wcmltYXJ5KScgfSwgdGV4dDogdGhpcy5fdCgndG9kYXkudGFza3MnKSB9KTtcclxuICAgIGhlYWRlclJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Y29sb3I6JyArICh0YXNrcy5jb21wbGV0aW9uUmF0ZSA+PSAxMDAgPyAndmFyKC0ta2MtZ3JlZW4pJyA6ICd2YXIoLS1rYy1hbWJlciknKSB9LCB0ZXh0OiB0YXNrcy5kb25lICsgJy8nICsgdGFza3MudG90YWwgKyAnICgnICsgdGFza3MuY29tcGxldGlvblJhdGUgKyAnJSknIH0pO1xyXG4gICAgdmFyIHRhc2tMaXN0ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6M3B4O21hcmdpbi1ib3R0b206MTBweCcgfSB9KTtcclxuICAgIHZhciBpdGVtcyA9IChkYXRhLnRvZGF5Py50YXNrSXRlbXMgfHwgW10pLnNsaWNlKDAsIDUpO1xyXG4gICAgaWYgKCFkYXRhLnRvZGF5Py5leGlzdHMpIHtcclxuICAgICAgdGFza0xpc3QuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtc3R5bGU6aXRhbGljJyB9LCB0ZXh0OiB0aGlzLl90KCd0YXNrLmRhaWx5TWlzc2luZycpIH0pO1xyXG4gICAgICB2YXIgY3JlYXRlQnRuID0gYm9keS5jcmVhdGVFbCgnYnV0dG9uJywgeyBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLXRvcDo2cHg7cGFkZGluZzo0cHggMTJweDtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgdmFyKC0ta2MtYW1iZXItZGltKTtiYWNrZ3JvdW5kOnZhcigtLWtjLWFtYmVyLWRpbSk7Y29sb3I6dmFyKC0ta2MtYW1iZXIpO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LCB0ZXh0OiB0aGlzLl90KCd0b2RheS5jcmVhdGVOb3RlJykgfSk7XHJcbiAgICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KCdQZXJpb2RpYy8nICsgbW9tZW50KCkuZm9ybWF0KCdZWVlZL01NL1lZWVktTU0tREQnKSwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGFza0xpc3QuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtc3R5bGU6aXRhbGljJyB9LCB0ZXh0OiB0aGlzLl90KCd0YXNrLm5vbmUnKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciByb3cgPSB0YXNrTGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7Z2FwOjVweDtwYWRkaW5nOjJweCAwO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKScgKyAoaXRlbS5kb25lID8gJztvcGFjaXR5OjAuNTt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoJyA6ICcnKSB9IH0pO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogaXRlbS5kb25lID8gJ1t4XScgOiAnWyBdJywgYXR0cjogeyBzdHlsZTogJ2ZsZXgtc2hyaW5rOjA7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKScgfSB9KTtcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGl0ZW0udGV4dCwgYXR0cjogeyBzdHlsZTogJ3dvcmQtYnJlYWs6YnJlYWstd29yZDtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSknIH0gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0YXRzUm93ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDoxMnB4O3BhZGRpbmctdG9wOjhweDtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1rYy1ib3JkZXIpJyB9IH0pO1xyXG4gICAgdmFyIHN0cmVhayA9IGNhbGNTdHJlYWsoZGF0YS53ZWVrbHkpO1xyXG4gICAgdmFyIHN0cmVha0VsID0gc3RhdHNSb3cuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3RleHQtYWxpZ246Y2VudGVyO2ZsZXg6MScgfSB9KTtcclxuICAgIHN0cmVha0VsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6MThweDtmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Y29sb3I6dmFyKC0ta2MtYW1iZXIpJyB9LCB0ZXh0OiBTdHJpbmcoc3RyZWFrKSArICdkJyB9KTtcclxuICAgIHN0cmVha0VsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC41cHg7bWFyZ2luLXRvcDoxcHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3RvZGF5LnN0cmVhaycpIH0pO1xyXG4gICAgdmFyIHRvZGF5Q291bnQgPSBnZXRUb2RheUNhcHR1cmVDb3VudChkYXRhLndlZWtseSk7XHJcbiAgICB2YXIgd2Vla0F2ZyA9IChkYXRhLndlZWtseSB8fCBbXSkubGVuZ3RoID4gMCA/IE1hdGgucm91bmQoKGRhdGEud2Vla2x5IHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24ocywgYykgeyByZXR1cm4gcyArIGMuY291bnQ7IH0sIDApIC8gKGRhdGEud2Vla2x5IHx8IFtdKS5sZW5ndGggKiAxMCkgLyAxMCA6IDA7XHJcbiAgICB2YXIgY2FwdHVyZUVsID0gc3RhdHNSb3cuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3RleHQtYWxpZ246Y2VudGVyO2ZsZXg6MScgfSB9KTtcclxuICAgIGNhcHR1cmVFbC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2NvbG9yOicgKyAodG9kYXlDb3VudCA+PSB3ZWVrQXZnID8gJ3ZhcigtLWtjLWdyZWVuKScgOiAndmFyKC0ta2MtYW1iZXIpJykgfSwgdGV4dDogU3RyaW5nKHRvZGF5Q291bnQpIH0pO1xyXG4gICAgY2FwdHVyZUVsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC41cHg7bWFyZ2luLXRvcDoxcHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3RvZGF5LnRvZGF5JykgfSk7XHJcbiAgICB2YXIgZGFpbHlFbCA9IHN0YXRzUm93LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICd0ZXh0LWFsaWduOmNlbnRlcjtmbGV4OjEnIH0gfSk7XHJcbiAgICBkYWlseUVsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2NvbG9yOicgKyAoZGF0YS50b2RheT8uZXhpc3RzID8gJ3ZhcigtLWtjLWdyZWVuKScgOiAndmFyKC0ta2MtYW1iZXIpJykgfSwgdGV4dDogZGF0YS50b2RheT8uZXhpc3RzID8gdGhpcy5fdCgndG9kYXkuZG9uZScpIDogdGhpcy5fdCgndG9kYXkucGVuZGluZycpIH0pO1xyXG4gICAgZGFpbHlFbC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXhzKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuNXB4O21hcmdpbi10b3A6MXB4JyB9LCB0ZXh0OiB0aGlzLl90KCd0b2RheS5kYWlseScpIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lkZ2V0OiBWYXVsdCBIZWFsdGhcclxuXHJcbiAgX3JlbmRlckhlYWx0aFBhbmVsKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgY29uc3QgaGVhbHRoU2NvcmUgPSBjYWxjSGVhbHRoU2NvcmUoZGF0YSk7XHJcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMuX2NyZWF0ZVBhbmVsKGNvbnRhaW5lciwgdGhpcy5fdCgnaGVhbHRoLnRpdGxlJyksICdoZWFsdGgnKTtcclxuICAgIGNvbnN0IGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgY29uc3QgZ2F1Z2VXcmFwID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZ2F1Z2Utd3JhcCcgfSk7XHJcbiAgICBjb25zdCByaW5nID0gZ2F1Z2VXcmFwLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1nYXVnZS1yaW5nJyB9KTtcclxuICAgIGNvbnN0IGMgPSAzMTQ7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBjIC0gKGhlYWx0aFNjb3JlIC8gMTAwKSAqIGM7XHJcbiAgICByaW5nLmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTEwIDExMFwiPjxjaXJjbGUgY2xhc3M9XCJiZ1wiIGN4PVwiNTVcIiBjeT1cIjU1XCIgcj1cIjUwXCIvPjxjaXJjbGUgY2xhc3M9XCJhcmNcIiBjeD1cIjU1XCIgY3k9XCI1NVwiIHI9XCI1MFwiIHN0cm9rZS1kYXNoYXJyYXk9XCInICsgYyArICdcIiBzdHJva2UtZGFzaG9mZnNldD1cIicgKyBvZmZzZXQgKyAnXCIvPjwvc3ZnPjxkaXYgY2xhc3M9XCJjZW50ZXItbGFiZWxcIj48c3BhbiBjbGFzcz1cInBjdFwiPicgKyBoZWFsdGhTY29yZSArICclPC9zcGFuPjxzcGFuIGNsYXNzPVwicGN0LWxhYmVsXCI+JyArIChoZWFsdGhTY29yZSA+PSA4NSA/ICdPcHRpbWFsJyA6IGhlYWx0aFNjb3JlID49IDY1ID8gJ05lZWRzIFdvcmsnIDogJ0NyaXRpY2FsJykgKyAnPC9zcGFuPjwvZGl2Pic7XHJcbiAgICBjb25zdCBjaGVja0xpc3QgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1jaGVjay1saXN0JyB9KTtcclxuICAgIHZhciBjaGVja3MgPSBbXHJcbiAgICAgIHsgbGFiZWw6ICdMMSBGcm9udG1hdHRlcicsIHNjb3JlOiBNYXRoLm1pbigxMDAsIDk1ICsgKGRhdGEudG9kYXk/LmV4aXN0cyA/IDMgOiAwKSkgfSxcclxuICAgICAgeyBsYWJlbDogJ0wyIFVEQycsIHNjb3JlOiA5MiB9LFxyXG4gICAgICB7IGxhYmVsOiAnTDMgTGlua3MnLCBzY29yZTogOTYgfSxcclxuICAgICAgeyBsYWJlbDogJ0w0IENyb3NzLWxhbmcnLCBzY29yZTogODMgfSxcclxuICAgICAgeyBsYWJlbDogJ0w1IFByb2plY3RzJywgc2NvcmU6IGRhdGEucHJvamVjdHM/Lmxlbmd0aCA+IDAgPyAxMDAgOiA3MCB9LFxyXG4gICAgICB7IGxhYmVsOiAnTDYgRW1wdGllcycsIHNjb3JlOiAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGggPT09IDAgPyAxMDAgOiBNYXRoLm1heCg2MCwgMTAwIC0gKGRhdGEuaW5ib3hGaWxlcyB8fCBbXSkubGVuZ3RoICogNSkgfSxcclxuICAgIF07XHJcbiAgICBjaGVja3MuZm9yRWFjaChmdW5jdGlvbihjaCkge1xyXG4gICAgICB2YXIgaXRlbSA9IGNoZWNrTGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtY2hlY2staXRlbScgfSk7XHJcbiAgICAgIGl0ZW0uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2xibCcsIHRleHQ6IGNoLmxhYmVsIH0pO1xyXG4gICAgICB2YXIgc3RhdHVzID0gaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnc3RhdHVzJyB9KTtcclxuICAgICAgdmFyIGRvdENsYXNzID0gY2guc2NvcmUgPj0gOTAgPyAnZC1ncmVlbicgOiBjaC5zY29yZSA+PSA3MCA/ICdkLWFtYmVyJyA6ICdkLXJlZCc7XHJcbiAgICAgIHN0YXR1cy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnZCAnICsgZG90Q2xhc3MgfSk7XHJcbiAgICAgIHN0YXR1cy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogY2guc2NvcmUgKyAnJScgfSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBpbmJveENhcmQgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1pbmJveC1jYXJkJyB9KTtcclxuICAgIGluYm94Q2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjb3VudCcsIHRleHQ6IFN0cmluZygoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGgpIH0pO1xyXG4gICAgdmFyIG1ldGEgPSBpbmJveENhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnbWV0YScgfSk7XHJcbiAgICBtZXRhLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdsJywgdGV4dDogJ0luYm94IFBlbmRpbmcnIH0pO1xyXG4gICAgbWV0YS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnc3ViJywgdGV4dDogKGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMCkgKyAnIHRvdGFsIG5vdGVzJyB9KTtcclxuICB9XHJcblxyXG4gIC8vIFdpZGdldDogQWN0aXZlIFByb2plY3RzXHJcblxyXG4gIF9yZW5kZXJQcm9qZWN0c1BhbmVsKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdwcm9qZWN0LnRpdGxlJyksICdwcm9qZWN0cycpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGxpc3QgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wcm9qZWN0LWxpc3QnIH0pO1xyXG4gICAgdmFyIHByb2plY3RzID0gZGF0YS5wcm9qZWN0cyB8fCBbXTtcclxuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHsgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnTm8gYWN0aXZlIHByb2plY3RzLicsIGNsczogJ2tvcy1lbXB0eScgfSk7IHJldHVybjsgfVxyXG4gICAgcHJvamVjdHMuc2xpY2UoMCwgNikuZm9yRWFjaChmdW5jdGlvbihwcm9qKSB7XHJcbiAgICAgIHZhciBjYXJkID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcHJvamVjdC1jYXJkJyB9KTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHByb2oucGF0aCwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICB2YXIgdG9wID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICd0b3AnIH0pO1xyXG4gICAgICB0b3AuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ3BuYW1lJywgdGV4dDogcHJvai50aXRsZSB8fCAnVW5uYW1lZCcgfSk7XHJcbiAgICAgIHRvcC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAncHN0YXR1cyAnICsgKHByb2ouc3RhdHVzIHx8ICdhY3RpdmUnKSwgdGV4dDogcHJvai5zdGF0dXMgfHwgJ2FjdGl2ZScgfSk7XHJcbiAgICAgIHZhciBiYXJXcmFwID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdiYXItd3JhcCcgfSk7XHJcbiAgICAgIHZhciBiYXIgPSBiYXJXcmFwLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2JhcicgfSk7XHJcbiAgICAgIHZhciByYXRlID0gcHJvai50YXNrcz8uY29tcGxldGlvblJhdGUgfHwgMDtcclxuICAgICAgdmFyIGZpbGxDbGFzcyA9IHJhdGUgPj0gODAgPyAnZmlsbC1ncmVlbicgOiByYXRlID49IDUwID8gJ2ZpbGwtYW1iZXInIDogJ2ZpbGwtY3lhbic7XHJcbiAgICAgIGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdmaWxsICcgKyBmaWxsQ2xhc3MsIGF0dHI6IHsgc3R5bGU6ICd3aWR0aDonICsgcmF0ZSArICclJyB9IH0pO1xyXG4gICAgICBiYXJXcmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdiYXItcGN0JywgdGV4dDogcmF0ZSArICclJyB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvLyBXaWRnZXQ6IEtub3dsZWRnZSBHcm93dGhcclxuXHJcbiAgX3JlbmRlckdyb3d0aFBhbmVsKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdncm93dGgudGl0bGUnKSwgJ2dyb3d0aCcpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIHN0YXRzID0gZGF0YS5zdGF0cz8uc3RhdHMgfHwge307XHJcbiAgICB2YXIgdG90YWxOb3RlcyA9IGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMDtcclxuICAgIHZhciByZXNvdXJjZXMgPSBzdGF0cy5yZXNvdXJjZXMgfHwgMDtcclxuICAgIHZhciBwcm9qZWN0c0NvdW50ID0gKGRhdGEucHJvamVjdHMgfHwgW10pLmxlbmd0aDtcclxuICAgIHZhciByZWNlbnRDb3VudCA9IChkYXRhLnJlY2VudCB8fCBbXSkubGVuZ3RoO1xyXG4gICAgdmFyIGNoYXJ0U3ZnID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAndGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo2cHggMCcgfSB9KTtcclxuICAgIGNoYXJ0U3ZnLmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMzAwIDcwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjUwcHhcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJnLWdyYWRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj48c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3AtY29sb3I9XCJ2YXIoLS1rYy1jeWFuKVwiLz48c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj1cInZhcigtLWtjLWN5YW4pXCIgc3RvcC1vcGFjaXR5PVwiMFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPVwidXJsKCNnLWdyYWQpXCIgZD1cIk0wLDY1IFE0MCw1NSA4MCw2MCBUMTYwLDQyIFQyMDAsMjUgVDI2MCwxOCBUMzAwLDggTDMwMCw3MCBMMCw3MCBaXCIgb3BhY2l0eT1cIjAuMTVcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ2YXIoLS1rYy1jeWFuKVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIGQ9XCJNMCw2NSBRNDAsNTUgODAsNjAgVDE2MCw0MiBUMjAwLDI1IFQyNjAsMTggVDMwMCw4XCIvPjwvc3ZnPic7XHJcbiAgICB2YXIgZ3JpZCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgMWZyO2dhcDo0cHg7bWFyZ2luLXRvcDo4cHgnIH0gfSk7XHJcbiAgICB2YXIgaXRlbXMgPSBbXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvdGFsTm90ZXMnKSwgdmFsdWU6IFN0cmluZyh0b3RhbE5vdGVzKSB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy50b3RhbE5vdGVzJykgKyAnICh3aWtpKScsIHZhbHVlOiBTdHJpbmcocmVzb3VyY2VzKSB9LFxyXG4gICAgICB7IGxhYmVsOiB0aGlzLl90KCdzdGF0cy5hY3RpdmVQcm9qZWN0cycpLCB2YWx1ZTogU3RyaW5nKHByb2plY3RzQ291bnQpIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3JlY2VudC50aXRsZScpLCB2YWx1ZTogU3RyaW5nKHJlY2VudENvdW50KSB9LFxyXG4gICAgXTtcclxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgY2VsbCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NHB4JyB9IH0pO1xyXG4gICAgICBjZWxsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6MTZweDtmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Y29sb3I6dmFyKC0ta2MtY3lhbiknIH0sIHRleHQ6IGl0ZW0udmFsdWUgfSk7XHJcbiAgICAgIGNlbGwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweCcgfSwgdGV4dDogaXRlbS5sYWJlbCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lkZ2V0OiBRdWljayBMYXVuY2hcclxuXHJcbiAgX3JlbmRlckxhdW5jaFBhbmVsKGNvbnRhaW5lcikge1xyXG4gICAgdmFyIHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdsYXVuY2gudGl0bGUnKSwgJ2xhdW5jaCcpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGdyaWQgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjRweCcgfSB9KTtcclxuICAgIHZhciBhY3Rpb25zID0gW1xyXG4gICAgICB7IGxhYmVsOiAnVHJpYWdlJywgYWN0aW9uOiAndHJpYWdlJywgY2xzOiAnJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnQ29tcGlsZScsIGFjdGlvbjogJ2NvbXBpbGUnLCBjbHM6ICdjeWFuJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTGluaycsIGFjdGlvbjogJ2xpbmsnLCBjbHM6ICdncmVlbicgfSxcclxuICAgICAgeyBsYWJlbDogJ1F1ZXJ5JywgYWN0aW9uOiAncXVlcnknLCBjbHM6ICdvcmFuZ2UnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEYWlseScsIGFjdGlvbjogJ2RhaWx5JywgY2xzOiAncHVycGxlJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnV2VlayBSLicsIGFjdGlvbjogJ3dlZWsnLCBjbHM6ICdhbWJlcicgfSxcclxuICAgICAgeyBsYWJlbDogJ0luaXQnLCBhY3Rpb246ICdpbml0JywgY2xzOiAnY3lhbicgfSxcclxuICAgICAgeyBsYWJlbDogJ0xpZmUrQUknLCBhY3Rpb246ICdsaWZlJywgY2xzOiAnZ3JlZW4nIH0sXHJcbiAgICBdO1xyXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcclxuICAgICAgdmFyIGJ0biA9IGdyaWQuY3JlYXRlRWwoJ2J1dHRvbicsIHsgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6N3B4IDhweDtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgdmFyKC0ta2MtYm9yZGVyKTtiYWNrZ3JvdW5kOnZhcigtLWtjLWJnLWNhcmQpO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTtjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1rYy1mb250KTt0cmFuc2l0aW9uOmFsbCAwLjJzJyArIChhLmNscyA/ICc7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHZhcigtLWtjLScgKyBhLmNscyArICcpJyA6ICcnKSB9LCB0ZXh0OiBhLmxhYmVsIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkgeyBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1rYy1iZy1jYXJkLWhvdmVyKSc7IGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS1rYy10ZXh0LXByaW1hcnkpJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQpJzsgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KSc7IH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgdGhpcy5faGFuZGxlTGF1bmNoKGEuYWN0aW9uKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGF1bmNoKGFjdGlvbikge1xyXG4gICAgdmFyIG1zZ3MgPSB7XHJcbiAgICAgIHRyaWFnZTogdGhpcy5fdCgnbm90aWNlLnRyaWFnZScpLFxyXG4gICAgICBjb21waWxlOiB0aGlzLl90KCdub3RpY2UuY29tcGlsZScpLFxyXG4gICAgICBsaW5rOiB0aGlzLl90KCdub3RpY2UubGluaycpLFxyXG4gICAgICBxdWVyeTogdGhpcy5fdCgnbm90aWNlLnF1ZXJ5JyksXHJcbiAgICAgIGRhaWx5OiB0aGlzLl90KCdub3RpY2UuZGFpbHknKSxcclxuICAgICAgd2VlazogdGhpcy5fdCgnbm90aWNlLndlZWsnKSxcclxuICAgICAgaW5pdDogdGhpcy5fdCgnbm90aWNlLmluaXQnKSxcclxuICAgICAgbGlmZTogdGhpcy5fdCgnbm90aWNlLmxpZmUnKSxcclxuICAgIH07XHJcbiAgICB2YXIgbXNnID0gbXNnc1thY3Rpb25dIHx8IHRoaXMuX3QoJ25vdGljZS5leGVjdXRpbmcnLCB7IGFjdGlvbjogYWN0aW9uIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmV3IE5vdGljZShtc2cpO1xyXG4gICAgfSBjYXRjaCAoXykge31cclxuICAgIC8vIEFsc28gZXhlY3V0ZSB0aGUgYWN0dWFsIE9ic2lkaWFuIGNvbW1hbmQgaWYgcmVnaXN0ZXJlZFxyXG4gICAgaWYgKHRoaXMuYXBwICYmIHRoaXMuYXBwLmNvbW1hbmRzKSB7XHJcbiAgICAgIHZhciBjbWRJZCA9ICdvYnNpZGlhbi0nICsgYWN0aW9uO1xyXG4gICAgICB0cnkgeyB0aGlzLmFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoY21kSWQpOyB9IGNhdGNoIChfKSB7fVxyXG4gICAgICB0cnkgeyB0aGlzLmFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoYWN0aW9uKTsgfSBjYXRjaCAoXykge31cclxuICAgIH1cclxuICAgICAgICAvLyBGYWxsYmFjazogY3JlYXRlIGRhaWx5IG5vdGUgZnJvbSB0ZW1wbGF0ZVxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2tvcy1kYWlseScgfHwgYWN0aW9uID09PSAnZGFpbHknKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtID0gdGhpcy5hcHAubW9tZW50ID8gdGhpcy5hcHAubW9tZW50KCkgOiBtb21lbnQoKTtcclxuICAgICAgICB2YXIgZGF0ZVN0ciA9IG0uZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgdmFyIGRhaWx5UmVsUGF0aCA9ICdQZXJpb2RpYy8nICsgbS5mb3JtYXQoJ1lZWVkvTU0vWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIHZhciBmdWxsUmVsUGF0aCA9IGRhaWx5UmVsUGF0aCArICcubWQnO1xyXG4gICAgICAgIHZhciB2YXVsdCA9IHRoaXMuYXBwLnZhdWx0O1xyXG4gICAgICAgIHZhdWx0LmFkYXB0ZXIuZXhpc3RzKGZ1bGxSZWxQYXRoKS50aGVuKGZ1bmN0aW9uKGV4aXN0cykge1xyXG4gICAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgdmFyIHRwbFBhdGggPSAnX21ldGEvc3lzdGVtL3RlbXBsYXRlcy9cXHU2QkNGXFx1NjVFNVxcdTdCMTRcXHU4QkIwXFx1NkEyMVxcdTY3N0YubWQnO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgdmF1bHQuYWRhcHRlci5yZWFkKHRwbFBhdGgpLFxyXG4gICAgICAgICAgICAgIHZhdWx0LmFkYXB0ZXIubGlzdCgnMCBJbmJveC8nKS5jYXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIHsgZmlsZXM6IFtdIH07IH0pLFxyXG4gICAgICAgICAgICAgIHZhdWx0LmFkYXB0ZXIucmVhZCgnX21ldGEvaG90Lm1kJykuY2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiAnJzsgfSksXHJcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIHZhciB0cGwgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgIHZhciBpbmJveExpc3QgPSByZXN1bHRzWzFdO1xyXG4gICAgICAgICAgICAgIHZhciBob3RDb250ZW50ID0gcmVzdWx0c1syXTtcclxuICAgICAgICAgICAgICB2YXIgd2sgPSBtLmZvcm1hdCgnWVlZWS1XVycpO1xyXG4gICAgICAgICAgICAgIHZhciBpbmJveENvdW50ID0gMDtcclxuICAgICAgICAgICAgICBpZiAoaW5ib3hMaXN0ICYmIGluYm94TGlzdC5maWxlcykge1xyXG4gICAgICAgICAgICAgICAgaW5ib3hDb3VudCA9IGluYm94TGlzdC5maWxlcy5maWx0ZXIoZnVuY3Rpb24oZikgeyByZXR1cm4gZi5lbmRzV2l0aCgnLm1kJykgJiYgZi5pbmRleE9mKCdfcHJvY2Vzc2VkLycpIDwgMDsgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgcmVjZW50Q3R4ID0gJyc7XHJcbiAgICAgICAgICAgICAgaWYgKGhvdENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGhvdENvbnRlbnQuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaGkgPSAwOyBoaSA8IGxpbmVzLmxlbmd0aCAmJiBoaSA8IDE1OyBoaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0gbGluZXNbaGldLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGxpbmUgJiYgIWxpbmUuc3RhcnRzV2l0aCgnLS0tJykgJiYgIWxpbmUuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50Q3R4ICs9IGxpbmUuc3Vic3RyaW5nKDAsIDEyMCkgKyAnXFxuJztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRwbFxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xce1xce2RhdGU6WVlZWS1NTS1ERFxcfVxcfS9nLCBkYXRlU3RyKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xce1xce2RhdGU6WVlZWS1XV1xcfVxcfS9nLCB3ayk7XHJcbiAgICAgICAgICAgICAgaWYgKGluYm94Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKCctIFxcdTY1RTBcXHU1Rjg1XFx1NTkwNFxcdTc0MDYnLCAnLSAnICsgaW5ib3hDb3VudCArICcgXFx1NEUyQVxcdTVGODVcXHU1OTA0XFx1NzQwNlxcdTY1ODdcXHU0RUY2XFx1RkYwOFxcdTg5QzEgMCBJbmJveC9cXHVGRjA5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZWNlbnRDdHgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoJyMjIFxcdUQ4M0RcXHVEQ0U1IEluYm94JywgJyMjIFxcdUQ4M0RcXHVERDA0IFxcdTY3MDBcXHU4RkQxXFx1NEUwQVxcdTRFMEJcXHU2NTg3XFxuPiAnICsgcmVjZW50Q3R4LnRyaW0oKS5zcGxpdCgnXFxuJykuam9pbignXFxuPiAnKSArICdcXG5cXG4jIyBcXHVEODNEXFx1RENFNSBJbmJveCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXVsdC5hZGFwdGVyLndyaXRlKGZ1bGxSZWxQYXRoLCBjb250ZW50KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChkYWlseVJlbFBhdGgsICcnLCB0cnVlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgc2VsZi5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChkYWlseVJlbFBhdGgsICcnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGRhaWx5UmVsUGF0aCwgJycsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbmRlckZlZWRQYW5lbChjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBwYW5lbCA9IHRoaXMuX2NyZWF0ZVBhbmVsKGNvbnRhaW5lciwgdGhpcy5fdCgnZmVlZC50aXRsZScpLCAnZmVlZCcpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGxpc3QgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoycHg7bWF4LWhlaWdodDoyMjBweDtvdmVyZmxvdy15OmF1dG8nIH0gfSk7XHJcbiAgICB2YXIgcmVjZW50ID0gZGF0YS5yZWNlbnQgfHwgW107XHJcbiAgICBpZiAocmVjZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTtmb250LXN0eWxlOml0YWxpYycgfSwgdGV4dDogdGhpcy5fdCgncmVjZW50LmVtcHR5JykgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlY2VudC5zbGljZSgwLCAxMCkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHZhciByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweDtwYWRkaW5nOjRweCA2cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAwLjE1cycgfSB9KTtcclxuICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHsgcm93LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZCknOyB9KTtcclxuICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHsgcm93LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnOyB9KTtcclxuICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoaXRlbS5wYXRoLCAnJywgdHJ1ZSk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3doaXRlLXNwYWNlOm5vd3JhcDttaW4td2lkdGg6NDBweCcgfSwgdGV4dDogbW9tZW50KGl0ZW0ubXRpbWUpLmZvcm1hdCgnTU0tREQgSEg6bW0nKSB9KTtcclxuICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnY29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcCcgfSwgdGV4dDogaXRlbS50aXRsZSB8fCBpdGVtLnBhdGggfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lkZ2V0OiBIb3QgQ29udGV4dFxyXG5cclxuICBfcmVuZGVySG90UGFuZWwoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ2hvdC50aXRsZScpLCAnaG90Jyk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICB2YXIgZW50cmllcyA9IChkYXRhLmhvdCB8fCBbXSkuc2xpY2UoMCwgNCk7XHJcbiAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1zdHlsZTppdGFsaWMnIH0sIHRleHQ6IHRoaXMuX3QoJ2hvdC5lbXB0eScpIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgdmFyIHJvdyA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6NXB4IDhweDtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtib3JkZXItbGVmdDoycHggc29saWQgdmFyKC0ta2MtYW1iZXItZGltKTttYXJnaW4tYm90dG9tOjRweDtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kOnZhcigtLWtjLWJnLWNhcmQpJyB9IH0pO1xyXG4gICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdjb2xvcjp2YXIoLS1rYy1hbWJlcik7bWFyZ2luLXJpZ2h0OjZweCcgfSwgdGV4dDogZW50cnkuZGF0ZSB9KTtcclxuICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBlbnRyeS5zdW1tYXJ5IH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IExpZmUrQUkgUGFuZWwgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICByZW5kZXJMaWZlVmlldyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBlbmdpbmVzID0gZGF0YS5lbmdpbmVzIHx8IHt9O1xyXG4gICAgdmFyIGxpZmVFbmdpbmUgPSBlbmdpbmVzLmxpZmUgfHwge307XHJcblxyXG4gICAgLy8gVG9wIHN1bW1hcnlcclxuICAgIHZhciB0b3BQYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnLCBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLWJvdHRvbToxNHB4JyB9IH0pO1xyXG4gICAgdmFyIHRvcEJvZHkgPSB0b3BQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjE2cHggMjBweCcgfSB9KTtcclxuICAgIHZhciB0b3BSb3cgPSB0b3BCb2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoyMHB4O2ZsZXgtd3JhcDp3cmFwJyB9IH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOnZhcigtLWtjLWFtYmVyKScgfSwgdGV4dDogJ1xcdUQ4M0VcXHVEREVDIExpZmUrQUknIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7ZmxleDoxJyB9LCB0ZXh0OiB0aGlzLl90KCdsaWZlLnN1YnRpdGxlJykgfSk7XHJcbiAgICB2YXIgc3RhdHVzRG90ID0gdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnd2lkdGg6OHB4O2hlaWdodDo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDonICsgKGxpZmVFbmdpbmUubGFzdFJ1biA/ICd2YXIoLS1rYy1ncmVlbiknIDogJ3ZhcigtLWtjLXRleHQtZGltKScpIH0gfSk7XHJcblxyXG4gICAgLy8gVGhyZWUgcGlsbGFycyBncmlkXHJcbiAgICB2YXIgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcjtnYXA6MTRweDttYXJnaW4tYm90dG9tOjE0cHgnIH0gfSk7XHJcbiAgICB2YXIgcGlsbGFycyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246ICdcXHVEODNFXFx1REREMVxcdTIwMERcXHVEODNDXFx1REYzRScsIGxhYmVsOiB0aGlzLl90KCdsaWZlLnBpbGxhckxpZmUnKSwgY29sb3I6ICd2YXIoLS1rYy1ncmVlbiknLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IGtleTogJ2hlYWx0aCcsIGxhYmVsOiB0aGlzLl90KCdsaWZlLmhlYWx0aFByb2dyZXNzJyksIHZhbHVlOiAnXFx1MjAxNCcgfSxcclxuICAgICAgICAgIHsga2V5OiAnaGFiaXQnLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5oYWJpdFRyYWNraW5nJyksIHZhbHVlOiAnXFx1MjAxNCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogJ1xcdUQ4M0RcXHVEQ0RBJywgbGFiZWw6IHRoaXMuX3QoJ2xpZmUucGlsbGFyTGVhcm5pbmcnKSwgY29sb3I6ICd2YXIoLS1rYy1jeWFuKScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsga2V5OiAnbGVhcm4nLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5sZWFybmluZ1Byb2dyZXNzJyksIHZhbHVlOiAnXFx1MjAxNCcgfSxcclxuICAgICAgICAgIHsga2V5OiAnc2tpbGwnLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5za2lsbEJ1aWxkaW5nJyksIHZhbHVlOiAnXFx1MjAxNCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogJ1xcdUQ4M0RcXHVEQ0JCJywgbGFiZWw6IHRoaXMuX3QoJ2xpZmUucGlsbGFyV29yaycpLCBjb2xvcjogJ3ZhcigtLWtjLWFtYmVyKScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsga2V5OiAncHJvamVjdHMnLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5wcm9qZWN0UHJvZ3Jlc3MnKSwgdmFsdWU6IFN0cmluZygoZGF0YS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoKSArICcgJyArIHRoaXMuX3QoJ2xpZmUuYWN0aXZlJykgfSxcclxuICAgICAgICAgIHsga2V5OiAndGFza3MnLCBsYWJlbDogdGhpcy5fdCgnbGlmZS50b2RheVRhc2tzJyksIHZhbHVlOiBkYXRhLnRvZGF5Py50YXNrcyA/IFN0cmluZyhkYXRhLnRvZGF5LnRhc2tzLnRvdGFsKSArICcgJyArIHRoaXMuX3QoJ2xpZmUudGFza3MnKSA6ICdcXHUyMDE0JyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcGlsbGFycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgdmFyIGNhcmQgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcgfSk7XHJcbiAgICAgIHZhciBoZWFkZXIgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1oZWFkZXInIH0pO1xyXG4gICAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjonICsgcC5jb2xvciB9LCB0ZXh0OiBwLmljb24gKyAnICcgKyBwLmxhYmVsIH0pO1xyXG4gICAgICB2YXIgYm9keSA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWJvZHknIH0pO1xyXG4gICAgICBwLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciByb3cgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6NnB4IDA7Zm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjQwLDE4MCw0MSwwLjA0KScgfSB9KTtcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSknIH0sIHRleHQ6IGl0ZW0ubGFiZWwgfSk7XHJcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXByaW1hcnkpJyB9LCB0ZXh0OiBpdGVtLnZhbHVlIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdGlvbnMgcm93XHJcbiAgICB2YXIgYWN0aW9uc1BhbmVsID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcgfSk7XHJcbiAgICB2YXIgYWN0aW9uc0JvZHkgPSBhY3Rpb25zUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWJvZHknLCBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzoxMnB4IDE0cHgnIH0gfSk7XHJcbiAgICB2YXIgYWN0aW9uc1JvdyA9IGFjdGlvbnNCb2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweDtmbGV4LXdyYXA6d3JhcCcgfSB9KTtcclxuICAgIHZhciBsaWZlQWN0aW9ucyA9IFtcclxuICAgICAgeyBsYWJlbDogJ0xpZmUtUmVwb3J0JywgYWN0aW9uOiAnbGlmZScgfSxcclxuICAgICAgeyBsYWJlbDogJ0xpZmUtQ2hlY2snLCBhY3Rpb246ICdsaWZlJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTGlmZS1CcmllZicsIGFjdGlvbjogJ2xpZmUnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ2xpZmUud2Vla2x5UmVwb3J0JyksIGFjdGlvbjogJ3dlZWsnIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ2xpZmUubW9udGhseVJlcG9ydCcpLCBhY3Rpb246ICd3ZWVrJyB9LFxyXG4gICAgXTtcclxuICAgIGxpZmVBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oYSkge1xyXG4gICAgICB2YXIgYnRuID0gYWN0aW9uc1Jvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo2cHggMTZweDtmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1hbWJlci1kaW0pO2JhY2tncm91bmQ6dmFyKC0ta2MtYW1iZXItZGltKTtjb2xvcjp2YXIoLS1rYy1hbWJlcik7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCk7dHJhbnNpdGlvbjphbGwgMC4ycycgfSwgdGV4dDogYS5sYWJlbCB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHsgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYW1iZXIpJzsgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWtjLWJnLWRlZXApJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWFtYmVyLWRpbSknOyBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0ta2MtYW1iZXIpJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLl9oYW5kbGVMYXVuY2goYS5hY3Rpb24pOyB9LmJpbmQodGhpcykpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gUGlwZWxpbmUgUGFuZWwgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICByZW5kZXJQaXBlbGluZVZpZXcoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgaW5ib3hJdGVtcyA9IGRhdGEuaW5ib3hEZXRhaWwgfHwgW107XHJcbiAgICB2YXIgY29tcGlsZUl0ZW1zID0gZGF0YS5jb21waWxlUXVldWUgfHwgW107XHJcbiAgICB2YXIgdGhyb3VnaHB1dCA9IGdldFRocm91Z2hwdXRTdGF0cyhkYXRhLndlZWtseSk7XHJcblxyXG4gICAgLy8gVGhyb3VnaHB1dCBzdW1tYXJ5XHJcbiAgICB2YXIgdG9wUGFuZWwgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsJywgYXR0cjogeyBzdHlsZTogJ21hcmdpbi1ib3R0b206MTRweCcgfSB9KTtcclxuICAgIHZhciB0b3BCb2R5ID0gdG9wUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWJvZHknLCBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzoxMnB4IDE0cHgnIH0gfSk7XHJcbiAgICB2YXIgdG9wUm93ID0gdG9wQm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDoyNHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXdyYXA6d3JhcCcgfSB9KTtcclxuICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1rYy1hbWJlciknIH0sIHRleHQ6ICdcXHVEODNEXFx1REQyNyAnICsgdGhpcy5fdCgncGlwZWxpbmUudGl0bGUnKSB9KTtcclxuICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjp2YXIoLS1rYy1jeWFuKScgfSwgdGV4dDogU3RyaW5nKHRocm91Z2hwdXQudG90YWwpICsgJyByZWMnIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLndlZWtseUNhcHR1cmVzJykgfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtZ3JlZW4pJyB9LCB0ZXh0OiBTdHJpbmcoaW5ib3hJdGVtcy5sZW5ndGgpIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLmluYm94JykgfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtcHVycGxlKScgfSwgdGV4dDogU3RyaW5nKGNvbXBpbGVJdGVtcy5sZW5ndGgpIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnJhdycpIH0pO1xyXG5cclxuICAgIHZhciBncmlkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1waXBlbGluZS12aWV3JyB9KTtcclxuXHJcbiAgICAvLyBTdGFnZSAxOiBJbmJveCBEZXRhaWxcclxuICAgIHZhciBzdGFnZTEgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1waXBlbGluZS1zdGFnZScgfSk7XHJcbiAgICBzdGFnZTEuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDtjb2xvcjp2YXIoLS1rYy1hbWJlcik7bWFyZ2luLWJvdHRvbToxMHB4JyB9LCB0ZXh0OiAnXFx1RDgzRFxcdURDRTUgJyArIHRoaXMuX3QoJ3BpcGVsaW5lLmluYm94U2VjdGlvbicsIHsgY291bnQ6IGluYm94SXRlbXMubGVuZ3RoIH0pIH0pO1xyXG4gICAgaWYgKGluYm94SXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHN0YWdlMS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZW1wdHknLCB0ZXh0OiB0aGlzLl90KCdwaXBlbGluZS5ub0luYm94JykgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdCA9IHN0YWdlMS5jcmVhdGVFbCgndGFibGUnLCB7IGNsczogJ2tvcy1nYXJkZW4tdGFibGUnIH0pO1xyXG4gICAgICB2YXIgdGhlYWQgPSB0LmNyZWF0ZUVsKCd0aGVhZCcpO1xyXG4gICAgICB2YXIgdGhyID0gdGhlYWQuY3JlYXRlRWwoJ3RyJyk7XHJcbiAgICAgIHRoci5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlVGl0bGUnKSB9KTtcclxuICAgICAgdGhyLmNyZWF0ZUVsKCd0aCcsIHsgdGV4dDogdGhpcy5fdCgncGlwZWxpbmUudGFibGVEYXlzJykgfSk7XHJcbiAgICAgIHRoci5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlU291cmNlJykgfSk7XHJcbiAgICAgIHZhciB0Ym9keSA9IHQuY3JlYXRlRWwoJ3Rib2R5Jyk7XHJcbiAgICAgIGluYm94SXRlbXMuc2xpY2UoMCwgMTIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciB0ciA9IHRib2R5LmNyZWF0ZUVsKCd0cicpO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogaXRlbS50aXRsZS5zbGljZSgwLCAyNCksIGF0dHI6IHsgc3R5bGU6ICdjdXJzb3I6cG9pbnRlcicgfSB9KTtcclxuICAgICAgICB0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogU3RyaW5nKGl0ZW0uZGF5c1dhaXRpbmcpICsgJ2QnLCBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjonICsgKGl0ZW0uZGF5c1dhaXRpbmcgPiA3ID8gJ3ZhcigtLWtjLXJlZCknIDogaXRlbS5kYXlzV2FpdGluZyA+IDMgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy10ZXh0LWRpbSknKSB9IH0pO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogaXRlbS5zb3VyY2UsIGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKScgfSB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFnZSAyOiBDb21waWxlIFF1ZXVlXHJcbiAgICB2YXIgc3RhZ2UyID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGlwZWxpbmUtc3RhZ2UnIH0pO1xyXG4gICAgc3RhZ2UyLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7Y29sb3I6dmFyKC0ta2MtY3lhbik7bWFyZ2luLWJvdHRvbToxMHB4JyB9LCB0ZXh0OiAnXFx1RDgzRFxcdURDREQgJyArIHRoaXMuX3QoJ3BpcGVsaW5lLnJhd1NlY3Rpb24nLCB7IGNvdW50OiBjb21waWxlSXRlbXMubGVuZ3RoIH0pIH0pO1xyXG4gICAgaWYgKGNvbXBpbGVJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc3RhZ2UyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1lbXB0eScsIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLm5vUmF3JykgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdDIgPSBzdGFnZTIuY3JlYXRlRWwoJ3RhYmxlJywgeyBjbHM6ICdrb3MtZ2FyZGVuLXRhYmxlJyB9KTtcclxuICAgICAgdmFyIHRoZWFkMiA9IHQyLmNyZWF0ZUVsKCd0aGVhZCcpO1xyXG4gICAgICB2YXIgdGhyMiA9IHRoZWFkMi5jcmVhdGVFbCgndHInKTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlVGl0bGUnKSB9KTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlV29yZHMnKSB9KTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlUHJpb3JpdHknKSB9KTtcclxuICAgICAgdmFyIHRib2R5MiA9IHQyLmNyZWF0ZUVsKCd0Ym9keScpO1xyXG4gICAgICBjb21waWxlSXRlbXMuc2xpY2UoMCwgMTIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciB0ciA9IHRib2R5Mi5jcmVhdGVFbCgndHInKTtcclxuICAgICAgICB0ci5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGl0ZW0udGl0bGUuc2xpY2UoMCwgMjQpLCBhdHRyOiB7IHN0eWxlOiAnY3Vyc29yOnBvaW50ZXInIH0gfSk7XHJcbiAgICAgICAgdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0ci5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IFN0cmluZyhpdGVtLndvcmRDb3VudCksIGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKScgfSB9KTtcclxuICAgICAgICB2YXIgcHJpQ29sb3IgPSBpdGVtLnByaW9yaXR5ID09PSAnaGlnaCcgPyAndmFyKC0ta2MtcmVkKScgOiBpdGVtLnByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXRleHQtZGltKSc7XHJcbiAgICAgICAgdHIuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBpdGVtLnByaW9yaXR5LCBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjonICsgcHJpQ29sb3IgfSB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFnZSAzOiBUaHJvdWdocHV0XHJcbiAgICB2YXIgc3RhZ2UzID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGlwZWxpbmUtc3RhZ2UnIH0pO1xyXG4gICAgc3RhZ2UzLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7Y29sb3I6dmFyKC0ta2MtZ3JlZW4pO21hcmdpbi1ib3R0b206MTBweCcgfSwgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M4ICcgKyB0aGlzLl90KCdwaXBlbGluZS50aHJvdWdocHV0U2VjdGlvbicpIH0pO1xyXG4gICAgdmFyIGJhckNoYXJ0ID0gc3RhZ2UzLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjNweDthbGlnbi1pdGVtczpmbGV4LWVuZDtoZWlnaHQ6ODBweDtwYWRkaW5nOjhweCAwJyB9IH0pO1xyXG4gICAgdmFyIHdlZWtseSA9IGRhdGEud2Vla2x5IHx8IFtdO1xyXG4gICAgdmFyIG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4ud2Vla2x5Lm1hcChmdW5jdGlvbih3KSB7IHJldHVybiB3LmNvdW50OyB9KSk7XHJcbiAgICB3ZWVrbHkuZm9yRWFjaChmdW5jdGlvbih3KSB7XHJcbiAgICAgIHZhciBjb2wgPSBiYXJDaGFydC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZmxleDoxO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoycHgnIH0gfSk7XHJcbiAgICAgIHZhciBiYXIgPSBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3dpZHRoOjEwMCU7aGVpZ2h0OicgKyBNYXRoLm1heCgzLCAody5jb3VudCAvIG1heENvdW50KSAqIDYwKSArICdweDtiYWNrZ3JvdW5kOicgKyAody5pc1RvZGF5ID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtYW1iZXItZGltKScpICsgJztib3JkZXItcmFkaXVzOjJweCAycHggMCAwO3RyYW5zaXRpb246aGVpZ2h0IDAuM3M7bWluLWhlaWdodDozcHgnIH0gfSk7XHJcbiAgICAgIGNvbC5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pJyB9LCB0ZXh0OiB3LndlZWtkYXkgfSk7XHJcbiAgICB9KTtcclxuICAgIHN0YWdlMy5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDo2cHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLmN1cnJlbnRXZWVrJywgeyB0b3RhbDogdGhyb3VnaHB1dC50b3RhbCwgYXZnOiB0aHJvdWdocHV0LmF2ZyB9KSB9KTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gS25vd2xlZGdlIEdhcmRlbiBQYW5lbCA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIHJlbmRlckdhcmRlblZpZXcoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgc3RhdHMgPSBkYXRhLnN0YXRzPy5zdGF0cyB8fCB7fTtcclxuICAgIHZhciB0b3RhbE5vdGVzID0gZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwO1xyXG5cclxuICAgIC8vIEhlYWRlclxyXG4gICAgdmFyIHRvcFBhbmVsID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcsIGF0dHI6IHsgc3R5bGU6ICdtYXJnaW4tYm90dG9tOjE0cHgnIH0gfSk7XHJcbiAgICB2YXIgdG9wQm9keSA9IHRvcFBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1ib2R5JywgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6MTJweCAxNHB4JyB9IH0pO1xyXG4gICAgdG9wQm9keS5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1rYy1hbWJlciknIH0sIHRleHQ6ICdcXHVEODNDXFx1REYzMyAnICsgdGhpcy5fdCgnZ2FyZGVuLnRpdGxlJykgfSk7XHJcbiAgICB0b3BCb2R5LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLWxlZnQ6MTZweDtmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KScgfSwgdGV4dDogdGhpcy5fdCgnZ2FyZGVuLm5vdGVzJywgeyBjb3VudDogdG90YWxOb3RlcyB9KSB9KTtcclxuXHJcbiAgICAvLyBHYXJkZW4gZ3JpZFxyXG4gICAgdmFyIGdyaWQgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWdhcmRlbi12aWV3JyB9KTtcclxuXHJcbiAgICAvLyBTZWN0aW9uOiBDYXRlZ29yaWVzXHJcbiAgICB2YXIgY2F0Q2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWdhcmRlbi1jYXJkJyB9KTtcclxuICAgIGNhdENhcmQuY3JlYXRlRWwoJ2gzJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7bWFyZ2luOjAgMCA4cHggMCcgfSwgdGV4dDogJ1xcdUQ4M0RcXHVEQ0MxICcgKyB0aGlzLl90KCdnYXJkZW4uY2F0ZWdvcnlTZWN0aW9uJykgfSk7XHJcbiAgICB2YXIgY2F0VGFibGUgPSBjYXRDYXJkLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAna29zLWdhcmRlbi10YWJsZScgfSk7XHJcbiAgICB2YXIgY2F0SGVhZCA9IGNhdFRhYmxlLmNyZWF0ZUVsKCd0aGVhZCcpO1xyXG4gICAgY2F0SGVhZC5jcmVhdGVFbCgndHInKTsgY2F0SGVhZC5xdWVyeVNlbGVjdG9yKCd0cicpLmlubmVySFRNTCA9ICc8dGg+JyArIHRoaXMuX3QoJ2dhcmRlbi50YWJsZURpcmVjdG9yeScpICsgJzwvdGg+PHRoPicgKyB0aGlzLl90KCdnYXJkZW4udGFibGVDb3VudCcpICsgJzwvdGg+JztcclxuICAgIHZhciBjYXRCb2R5ID0gY2F0VGFibGUuY3JlYXRlRWwoJ3Rib2R5Jyk7XHJcbiAgICB2YXIgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0MxICcgKyB0aGlzLl90KCdnYXJkZW4uY2F0ZWdvcnlQcm9qZWN0cycpLCBrZXk6ICdwcm9qZWN0cycsIGNvbG9yOiAndmFyKC0ta2MtYW1iZXIpJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzQ1xcdURGRTAgJyArIHRoaXMuX3QoJ2dhcmRlbi5jYXRlZ29yeUFyZWFzJyksIGtleTogJ2FyZWFzJywgY29sb3I6ICd2YXIoLS1rYy1jeWFuKScgfSxcclxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0RcXHVEQ0RBICcgKyB0aGlzLl90KCdnYXJkZW4uY2F0ZWdvcnlSZXNvdXJjZXMnKSwga2V5OiAncmVzb3VyY2VzJywgY29sb3I6ICd2YXIoLS1rYy1ncmVlbiknIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENFNSAnICsgdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5SW5ib3gnKSwga2V5OiAnaW5ib3gnLCBjb2xvcjogJ3ZhcigtLWtjLW9yYW5nZSknIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENDNSAnICsgdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5UGVyaW9kaWMnKSwga2V5OiAncGVyaW9kaWMnLCBjb2xvcjogJ3ZhcigtLWtjLXB1cnBsZSknIH0sXHJcbiAgICBdO1xyXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGNhdCkge1xyXG4gICAgICB2YXIgdHIgPSBjYXRCb2R5LmNyZWF0ZUVsKCd0cicpO1xyXG4gICAgICB0ci5jcmVhdGVFbCgndGQnLCB7IGF0dHI6IHsgc3R5bGU6ICdjb2xvcjonICsgY2F0LmNvbG9yIH0sIHRleHQ6IGNhdC5sYWJlbCB9KTtcclxuICAgICAgdHIuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBTdHJpbmcoc3RhdHNbY2F0LmtleV0gfHwgMCksIGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTt0ZXh0LWFsaWduOnJpZ2h0JyB9IH0pO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgdG90YWxSb3cgPSBjYXRCb2R5LmNyZWF0ZUVsKCd0cicpOyB2YXIgdG90YWxUZDEgPSB0b3RhbFJvdy5jcmVhdGVFbCgndGQnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtdGV4dC1wcmltYXJ5KScgfSwgdGV4dDogdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5VG90YWwnKSB9KTsgdmFyIHRvdGFsVGQyID0gdG90YWxSb3cuY3JlYXRlRWwoJ3RkJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7dGV4dC1hbGlnbjpyaWdodDtjb2xvcjp2YXIoLS1rYy1hbWJlcik7Zm9udC13ZWlnaHQ6NzAwJyB9LCB0ZXh0OiBTdHJpbmcodG90YWxOb3RlcykgfSk7XHJcblxyXG4gICAgLy8gU2VjdGlvbjogUmVjZW50IGdhcmRlbiBhZGRpdGlvbnNcclxuICAgIHZhciByZWNlbnRDYXJkID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZ2FyZGVuLWNhcmQnIH0pO1xyXG4gICAgcmVjZW50Q2FyZC5jcmVhdGVFbCgnaDMnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDttYXJnaW46MCAwIDhweCAwJyB9LCB0ZXh0OiAnXFx1RDgzQ1xcdURGMzEgJyArIHRoaXMuX3QoJ2dhcmRlbi5yZWNlbnRVcGRhdGVzJykgfSk7XHJcbiAgICB2YXIgcmVjZW50ID0gZGF0YS5yZWNlbnQgfHwgW107XHJcbiAgICBpZiAocmVjZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZWNlbnRDYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1lbXB0eScsIHRleHQ6IHRoaXMuX3QoJ3JlY2VudC5lbXB0eScpIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHJMaXN0ID0gcmVjZW50Q2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MnB4O21heC1oZWlnaHQ6MzAwcHg7b3ZlcmZsb3cteTphdXRvJyB9IH0pO1xyXG4gICAgICByZWNlbnQuc2xpY2UoMCwgMTUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciByb3cgPSByTGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHg7cGFkZGluZzo0cHggNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMC4xNXMnIH0gfSk7XHJcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHsgcm93LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZCknOyB9KTtcclxuICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkgeyByb3cuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7IH0pO1xyXG4gICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3doaXRlLXNwYWNlOm5vd3JhcDttaW4td2lkdGg6MzZweCcgfSwgdGV4dDogbW9tZW50KGl0ZW0ubXRpbWUpLmZvcm1hdCgnTU0tREQnKSB9KTtcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwJyB9LCB0ZXh0OiBpdGVtLnRpdGxlIHx8IGl0ZW0ucGF0aCB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBRdWljayBzZWFyY2ggY2FyZFxyXG4gICAgdmFyIHNlYXJjaENhcmQgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWdhcmRlbi1jYXJkJywgYXR0cjogeyBzdHlsZTogJ2dyaWQtY29sdW1uOjEgLyAtMTttYXJnaW4tdG9wOjE0cHgnIH0gfSk7XHJcbiAgICBzZWFyY2hDYXJkLmNyZWF0ZUVsKCdoMycsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O21hcmdpbjowIDAgOHB4IDAnIH0sIHRleHQ6ICdcXHVEODNEXFx1REQwRCAnICsgdGhpcy5fdCgnZ2FyZGVuLnF1aWNrU2VhcmNoJykgfSk7XHJcbiAgICB2YXIgc2VhcmNoUm93ID0gc2VhcmNoQ2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHgnIH0gfSk7XHJcbiAgICB2YXIgc2VhcmNoSW5wdXQgPSBzZWFyY2hSb3cuY3JlYXRlRWwoJ2lucHV0JywgeyBhdHRyOiB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6IHRoaXMuX3QoJ2dhcmRlbi5zZWFyY2hQbGFjZWhvbGRlcicpLCBzdHlsZTogJ2ZsZXg6MTtwYWRkaW5nOjdweCAxNHB4O2JhY2tncm91bmQ6dmFyKC0ta2MtYmctY2FyZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1ib3JkZXIpO2JvcmRlci1yYWRpdXM6NnB4O2NvbG9yOnZhcigtLWtjLXRleHQtcHJpbWFyeSk7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCk7Zm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtvdXRsaW5lOm5vbmUnIH0gfSk7XHJcbiAgICB2YXIgc2VhcmNoQnRuID0gc2VhcmNoUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjdweCAxOHB4O2JhY2tncm91bmQ6dmFyKC0ta2MtYW1iZXIpO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NnB4O2NvbG9yOnZhcigtLWtjLWJnLWRlZXApO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Zm9udC13ZWlnaHQ6NjAwO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LCB0ZXh0OiB0aGlzLl90KCdnYXJkZW4uc2VhcmNoQnRuJykgfSk7XHJcbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHEgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgIGlmIChxKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWFmKCd0YWInKS5zZXRWaWV3U3RhdGUoeyB0eXBlOiAnc2VhcmNoJywgc3RhdGU6IHsgcXVlcnk6IHEsIG1hdGNoQ2FzZTogZmFsc2UgfSB9KTsgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgc2VhcmNoQnRuLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gU2V0dGluZ3MgUGFuZWwgKGlubGluZSkgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICByZW5kZXJTZXR0aW5nc1ZpZXcoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsIGtvcy1zZXR0aW5ncy12aWV3JyB9KTtcclxuICAgIHZhciBib2R5ID0gcGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWJvZHknLCBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzoyMHB4JyB9IH0pO1xyXG4gICAgYm9keS5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1rYy1hbWJlciknIH0sIHRleHQ6ICdcXHUyNjk5XFx1RkUwRiAnICsgdGhpcy5fdCgnc2V0dGluZ3MudGl0bGUnKSB9KTtcclxuICAgIGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO21hcmdpbjo4cHggMCAyMHB4IDAnIH0sIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRlc2MnKSB9KTtcclxuXHJcbiAgICAvLyBMb2NhbGVcclxuICAgIHZhciBzZWMxID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtc2V0dGluZ3Mtc2VjdGlvbicgfSk7XHJcbiAgICBzZWMxLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MubG9jYWxlJykgfSk7XHJcbiAgICB2YXIgbG9jYWxlUm93ID0gc2VjMS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHgnIH0gfSk7XHJcbiAgICB2YXIgbG9jYWxlcyA9IFtcclxuICAgICAgeyBpZDogJ3poLWNuJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaENOJykgfSxcclxuICAgICAgeyBpZDogJ2VuJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdFbicpIH0sXHJcbiAgICAgIHsgaWQ6ICd6aC10dycsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhUVycpIH0sXHJcbiAgICBdO1xyXG4gICAgdmFyIGN1ckxvY2FsZSA9IHRoaXMuc2V0dGluZ3M/LmxvY2FsZSB8fCAnemgtY24nO1xyXG4gICAgbG9jYWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcclxuICAgICAgdmFyIGJ0biA9IGxvY2FsZVJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjZweCAxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICcgKyAobC5pZCA9PT0gY3VyTG9jYWxlID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtYm9yZGVyKScpICsgJztiYWNrZ3JvdW5kOicgKyAobC5pZCA9PT0gY3VyTG9jYWxlID8gJ3ZhcigtLWtjLWFtYmVyLWRpbSknIDogJ3ZhcigtLWtjLWJnLWNhcmQpJykgKyAnO2NvbG9yOicgKyAobC5pZCA9PT0gY3VyTG9jYWxlID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJykgKyAnO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LFxyXG4gICAgICAgIHRleHQ6IGwubGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmxvY2FsZSA9IGwuaWQ7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBUaGVtZSBzd2l0Y2hlclxyXG4gICAgdmFyIHNlY1RoZW1lID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtc2V0dGluZ3Mtc2VjdGlvbicgfSk7XHJcbiAgICBzZWNUaGVtZS5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLnRoZW1lJykgfSk7XHJcbiAgICB2YXIgY3VyVGhlbWUgPSB0aGlzLmFwcC52YXVsdC5nZXRDb25maWcoJ3RoZW1lJykgfHwgJ29ic2lkaWFuJztcclxuICAgIC8vIEJhc2UgdGhlbWUgcm93XHJcbiAgICB2YXIgYmFzZVJvdyA9IHNlY1RoZW1lLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweDttYXJnaW4tYm90dG9tOjhweCcgfSB9KTtcclxuICAgIHZhciBiYXNlVGhlbWVzID0gW1xyXG4gICAgICB7IGlkOiAnb2JzaWRpYW4nLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3MudGhlbWVEYXJrJykgfSxcclxuICAgICAgeyBpZDogJ21vb25zdG9uZScsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy50aGVtZUxpZ2h0JykgfSxcclxuICAgICAgeyBpZDogJ3N5c3RlbScsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy50aGVtZVN5c3RlbScpIH0sXHJcbiAgICBdO1xyXG4gICAgYmFzZVRoZW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgdmFyIGJ0biA9IGJhc2VSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHtcclxuICAgICAgICBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo2cHggMTZweDtmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCAnICsgKHQuaWQgPT09IGN1clRoZW1lID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtYm9yZGVyKScpICsgJztiYWNrZ3JvdW5kOicgKyAodC5pZCA9PT0gY3VyVGhlbWUgPyAndmFyKC0ta2MtYW1iZXItZGltKScgOiAndmFyKC0ta2MtYmctY2FyZCknKSArICc7Y29sb3I6JyArICh0LmlkID09PSBjdXJUaGVtZSA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KScpICsgJztjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1rYy1mb250KScgfSxcclxuICAgICAgICB0ZXh0OiB0LmxhYmVsLFxyXG4gICAgICB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hcHAudmF1bHQuc2V0Q29uZmlnKCd0aGVtZScsIHQuaWQpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApLnRoZW4oZnVuY3Rpb24oZCkgeyB0aGlzLnN3aXRjaFBhbmVsKCdzZXR0aW5ncycsIGQpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIC8vIFNlYXNvbmFsIGFjY2VudCByb3dcclxuICAgIHZhciBjdXJTZWFzb24gPSB0aGlzLnNldHRpbmdzPy5zZWFzb25hbFRoZW1lIHx8ICdzcHJpbmcnO1xyXG4gICAgdmFyIHNlYXNvbkxhYmVsID0gc2VjVGhlbWUuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7bWFyZ2luOjRweCAwIDZweCAwJyB9LCB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5zZWFzb24nKSB9KTtcclxuICAgIHZhciBzZWFzb25Sb3cgPSBzZWNUaGVtZS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHgnIH0gfSk7XHJcbiAgICB2YXIgc2Vhc29ucyA9IFtcclxuICAgICAgeyBpZDogJ3NwcmluZycsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5zZWFzb25TcHJpbmcnKSwgaWNvbjogJ1xcdUQ4M0NcXHVERjM4JyB9LFxyXG4gICAgICB7IGlkOiAnc3VtbWVyJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLnNlYXNvblN1bW1lcicpLCBpY29uOiAnXFx1MjYwMFxcdUZFMEYnIH0sXHJcbiAgICAgIHsgaWQ6ICdhdXR1bW4nLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3Muc2Vhc29uQXV0dW1uJyksIGljb246ICdcXHVEODNDXFx1REY0MicgfSxcclxuICAgICAgeyBpZDogJ3dpbnRlcicsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5zZWFzb25XaW50ZXInKSwgaWNvbjogJ1xcdTI3NDRcXHVGRTBGJyB9LFxyXG4gICAgXTtcclxuICAgIHNlYXNvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XHJcbiAgICAgIHZhciBidG4gPSBzZWFzb25Sb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHtcclxuICAgICAgICBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo2cHggMTZweDtmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCAnICsgKHMuaWQgPT09IGN1clNlYXNvbiA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLWJvcmRlciknKSArICc7YmFja2dyb3VuZDonICsgKHMuaWQgPT09IGN1clNlYXNvbiA/ICd2YXIoLS1rYy1hbWJlci1kaW0pJyA6ICd2YXIoLS1rYy1iZy1jYXJkKScpICsgJztjb2xvcjonICsgKHMuaWQgPT09IGN1clNlYXNvbiA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KScpICsgJztjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1rYy1mb250KScgfSxcclxuICAgICAgICB0ZXh0OiBzLmljb24gKyAnICcgKyBzLmxhYmVsLFxyXG4gICAgICB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWFzb25hbFRoZW1lID0gcy5pZDtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgLy8gQXBwbHkgc2Vhc29uIENTUyBjbGFzcyBpbW1lZGlhdGVseVxyXG4gICAgICAgIHZhciByb290ID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcignLmtvcy1jb2NrcGl0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmIChyb290KSB7XHJcbiAgICAgICAgICBbJ3RoZW1lLXNwcmluZycsJ3RoZW1lLXN1bW1lcicsJ3RoZW1lLWF1dHVtbicsJ3RoZW1lLXdpbnRlciddLmZvckVhY2goZnVuY3Rpb24oYykgeyByb290LnJlbW92ZUNsYXNzKGMpOyB9KTtcclxuICAgICAgICAgIHJvb3QuYWRkQ2xhc3MoJ3RoZW1lLScgKyBzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSh0aGlzLmFwcCkudGhlbihmdW5jdGlvbihkKSB7IHRoaXMuc3dpdGNoUGFuZWwoJ3NldHRpbmdzJywgZCk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIEZvbnQgc2l6ZVxyXG4gICAgdmFyIHNlY0ZvbnQgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1zZXR0aW5ncy1zZWN0aW9uJyB9KTtcclxuICAgIHNlY0ZvbnQuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5mb250U2l6ZScpIH0pO1xyXG4gICAgdmFyIGZvbnRTaXplUm93ID0gc2VjRm9udC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHgnIH0gfSk7XHJcbiAgICB2YXIgZm9udFNpemVzID0gW1xyXG4gICAgICB7IGlkOiAnc21hbGwnLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3MuZm9udFNtYWxsJykgfSxcclxuICAgICAgeyBpZDogJ21lZGl1bScsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5mb250TWVkaXVtJykgfSxcclxuICAgICAgeyBpZDogJ2xhcmdlJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLmZvbnRMYXJnZScpIH0sXHJcbiAgICBdO1xyXG4gICAgdmFyIGN1ckZvbnRTaXplID0gdGhpcy5zZXR0aW5ncz8uZm9udFNpemUgfHwgJ21lZGl1bSc7XHJcbiAgICBmb250U2l6ZXMuZm9yRWFjaChmdW5jdGlvbihzKSB7XHJcbiAgICAgIHZhciBidG4gPSBmb250U2l6ZVJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjZweCAxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICcgKyAocy5pZCA9PT0gY3VyRm9udFNpemUgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy1ib3JkZXIpJykgKyAnO2JhY2tncm91bmQ6JyArIChzLmlkID09PSBjdXJGb250U2l6ZSA/ICd2YXIoLS1rYy1hbWJlci1kaW0pJyA6ICd2YXIoLS1rYy1iZy1jYXJkKScpICsgJztjb2xvcjonICsgKHMuaWQgPT09IGN1ckZvbnRTaXplID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJykgKyAnO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LFxyXG4gICAgICAgIHRleHQ6IHMubGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmZvbnRTaXplID0gcy5pZDtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fYXBwbHlGb250U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApLnRoZW4oZnVuY3Rpb24oZCkgeyB0aGlzLnN3aXRjaFBhbmVsKCdzZXR0aW5ncycsIGQpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBHZW5lcmFsIHNldHRpbmdzXHJcbiAgICB2YXIgc2VjMiA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXNldHRpbmdzLXNlY3Rpb24nIH0pO1xyXG4gICAgc2VjMi5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmdlbmVyYWwnKSB9KTtcclxuXHJcbiAgICAvLyBBdXRvIG9wZW5cclxuICAgIHZhciBhdXRvUm93ID0gc2VjMi5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDttYXJnaW4tYm90dG9tOjEwcHgnIH0gfSk7XHJcbiAgICB2YXIgYXV0b1RvZ2dsZSA9IGF1dG9Sb3cuY3JlYXRlRWwoJ2lucHV0JywgeyBhdHRyOiB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAna29zLXNldHRpbmdzLWF1dG9wZW4nIH0gfSk7XHJcbiAgICBhdXRvVG9nZ2xlLmNoZWNrZWQgPSB0aGlzLnNldHRpbmdzPy5hdXRvT3BlbiB8fCBmYWxzZTtcclxuICAgIGF1dG9Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b09wZW4gPSBhdXRvVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIGF1dG9Sb3cuY3JlYXRlRWwoJ2xhYmVsJywgeyBhdHRyOiB7IGZvcjogJ2tvcy1zZXR0aW5ncy1hdXRvcGVuJywgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTtjdXJzb3I6cG9pbnRlcicgfSwgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW4nKSB9KTtcclxuXHJcbiAgICAvLyBEYXRhIGxpbWl0c1xyXG4gICAgdmFyIGxpbWl0Um93ID0gc2VjMi5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDttYXJnaW4tYm90dG9tOjEwcHgnIH0gfSk7XHJcbiAgICBsaW1pdFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7bWluLXdpZHRoOjEwMHB4JyB9LCB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnQnKSB9KTtcclxuICAgIHZhciBtYXhSZWNlbnRJbnB1dCA9IGxpbWl0Um93LmNyZWF0ZUVsKCdpbnB1dCcsIHsgYXR0cjogeyB0eXBlOiAnbnVtYmVyJywgbWluOiAnNScsIG1heDogJzMwJywgdmFsdWU6IFN0cmluZyh0aGlzLnNldHRpbmdzPy5tYXhSZWNlbnQgfHwgMTApLCBzdHlsZTogJ3dpZHRoOjYwcHg7cGFkZGluZzo0cHggOHB4O2JhY2tncm91bmQ6dmFyKC0ta2MtYmctY2FyZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1ib3JkZXIpO2JvcmRlci1yYWRpdXM6NHB4O2NvbG9yOnZhcigtLWtjLXRleHQtcHJpbWFyeSk7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Zm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO291dGxpbmU6bm9uZScgfSB9KTtcclxuICAgIG1heFJlY2VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnNldHRpbmdzLm1heFJlY2VudCA9IE1hdGgubWF4KDUsIE1hdGgubWluKDMwLCBwYXJzZUludChtYXhSZWNlbnRJbnB1dC52YWx1ZSkgfHwgMTApKTtcclxuICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIEFib3V0XHJcbiAgICB2YXIgc2VjMyA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXNldHRpbmdzLXNlY3Rpb24nIH0pO1xyXG4gICAgc2VjMy5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmFib3V0JykgfSk7XHJcbiAgICBzZWMzLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2xpbmUtaGVpZ2h0OjEuNicgfSwgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbkRlc2MnKSB9KTtcclxuICAgIHNlYzMuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO21hcmdpbi10b3A6NnB4JyB9LCB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5ub3Rlc0NvdW50JywgeyBjb3VudDogU3RyaW5nKGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMCkgfSkgfSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFNoYXJlZCBXaWRnZXQgSGVscGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIF9jcmVhdGVQYW5lbChjb250YWluZXIsIHRpdGxlSHRtbCwgd2lkZ2V0SWQpIHtcclxuICAgIHZhciBwYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnIH0pO1xyXG4gICAgdmFyIGhlYWRlciA9IHBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1oZWFkZXInIH0pO1xyXG4gICAgdmFyIGxlZnQgPSBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWhlYWRlci1sZWZ0JyB9KTtcclxuICAgIGxlZnQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1wYW5lbC10aXRsZScsIHRleHQ6IHRpdGxlSHRtbCB9KTtcclxuICAgIHZhciB0b29scyA9IGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtdG9vbHMnIH0pO1xyXG4gICAgdmFyIGNvbGxhcHNlQnRuID0gdG9vbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLXBhbmVsLXRvb2wnLCBhdHRyOiB7IHRpdGxlOiB0aGlzLl90KCd0b29sdGlwLmNvbGxhcHNlJykgfSwgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSg5NjYwKSB9KTtcclxuICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHBhbmVsLnRvZ2dsZUNsYXNzKCdrb3MtcGFuZWwtY29sbGFwc2VkJyk7IH0pO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScgfSk7XHJcbiAgICByZXR1cm4geyBwYW5lbDogcGFuZWwsIGJvZHk6IGJvZHksIGhlYWRlcjogaGVhZGVyIH07XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IENoYXQgKENsYXVkaWFuLXN0eWxlKSA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIHJlbmRlckNoYXRWaWV3KGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgLy8gTWFpbiBjaGF0IHBhbmVsIFx1MjAxNCBtaW1pY3Mgb2MtbWFpbiBzdHJ1Y3R1cmVcclxuICAgIHZhciBtYWluID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS1jaGF0JyB9KTtcclxuXHJcbiAgICAvLyBUb29sYmFyIFx1MjAxNCBtaW1pY3Mgb2MtdG9vbGJhclxyXG4gICAgdmFyIHRvb2xiYXIgPSBtYWluLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sYmFyJyB9KTtcclxuICAgIHZhciB0TGVmdCA9IHRvb2xiYXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXRvb2xiYXItbGVmdCcgfSk7XHJcblxyXG4gICAgLy8gTW9kZWwgc2VsZWN0b3IgZHJvcGRvd25cclxuICAgIHZhciBtb2RlbFNlbCA9IHRMZWZ0LmNyZWF0ZUVsKCdzZWxlY3QnLCB7IGNsczogJ2tvcy1haS1tb2RlbC1zZWxlY3QnIH0pO1xyXG4gICAgdmFyIHByb3ZpZGVycyA9IFsnY2xhdWRlJywgJ2NvZGV4JywgJ29wZW5jb2RlJ107XHJcbiAgICB2YXIgYWN0aXZlUGlkID0gdGhpcy5zZXR0aW5ncz8uYWN0aXZlUHJvdmlkZXIgfHwgJ2NsYXVkZSc7XHJcbiAgICBwcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbihwaWQpIHtcclxuICAgICAgdmFyIG9wdCA9IG1vZGVsU2VsLmNyZWF0ZUVsKCdvcHRpb24nLCB7IHZhbHVlOiBwaWQsIHRleHQ6IHRoaXMuc2V0dGluZ3M/LnByb3ZpZGVycz8uW3BpZF0/LmxhYmVsIHx8IHBpZCB9KTtcclxuICAgICAgaWYgKHBpZCA9PT0gYWN0aXZlUGlkKSBvcHQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIG1vZGVsU2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyID0gbW9kZWxTZWwudmFsdWU7XHJcbiAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgLy8gUmVzZXQgQUkgY2hhdCBzbyBpdCBwaWNrcyB1cCBuZXcgcHJvdmlkZXJcclxuICAgICAgdGhpcy5haUNoYXQgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbmRlckxvYWRpbmcoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIExlZnQ6IHByb3ZpZGVyIGxhYmVsXHJcbiAgICB0TGVmdC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXByb3ZpZGVyLWxhYmVsJywgdGV4dDogdGhpcy5fdCgnYWkubW9kZWxMYWJlbCcpIH0pO1xyXG5cclxuICAgIC8vIFJpZ2h0IHRvb2xiYXIgYWN0aW9uc1xyXG4gICAgdmFyIHRSaWdodCA9IHRvb2xiYXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXRvb2xiYXItcmlnaHQnIH0pO1xyXG5cclxuICAgIC8vIENvbm5lY3Rpb24gc3RhdHVzIHBpbGxcclxuICAgIHZhciBzdGF0dXNQaWxsID0gdFJpZ2h0LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtYWktc3RhdHVzLXBpbGwnIH0pO1xyXG4gICAgdmFyIGFjdGl2ZUFpQ2hhdCA9IHRoaXMuYWN0aXZlQ2hhdFRhYklkID8gdGhpcy5haUNoYXRzLmdldCh0aGlzLmFjdGl2ZUNoYXRUYWJJZCkgOiBudWxsO1xyXG4gICAgdmFyIGlzQ29uZmlndXJlZCA9IGFjdGl2ZUFpQ2hhdCAmJiBhY3RpdmVBaUNoYXQuaXNDb25maWd1cmVkO1xyXG4gICAgc3RhdHVzUGlsbC5hZGRDbGFzcyhpc0NvbmZpZ3VyZWQgPyAnb2snIDogJ3dhcm4nKTtcclxuICAgIHN0YXR1c1BpbGwudGV4dENvbnRlbnQgPSBpc0NvbmZpZ3VyZWQgPyB0aGlzLl90KCdhaS5jb25uZWN0ZWQnKSA6IHRoaXMuX3QoJ2FpLm5vdENvbmZpZ3VyZWQnKTtcclxuXHJcbiAgICAvLyBDbGVhciBidXR0b25cclxuICAgIHZhciBjbGVhckJ0biA9IHRSaWdodC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtYWktdG9vbGJhci1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jbGVhckJ0bicpIH0pO1xyXG4gICAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGNsZWFyQWkgPSB0aGlzLmFjdGl2ZUNoYXRUYWJJZCA/IHRoaXMuYWlDaGF0cy5nZXQodGhpcy5hY3RpdmVDaGF0VGFiSWQpIDogbnVsbDtcclxuICAgICAgaWYgKGNsZWFyQWkpIHsgY2xlYXJBaS5jbGVhcigpOyB0aGlzLl9yZWZyZXNoQ2hhdE1zZ3MoKTsgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBNZXNzYWdlcyB3cmFwcGVyXHJcbiAgICB2YXIgbXNnV3JhcHBlciA9IG1haW4uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLW1zZ3Mtd3JhcHBlcicgfSk7XHJcbiAgICB2YXIgbXNnQ29udGFpbmVyID0gbXNnV3JhcHBlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNncycgfSk7XHJcblxyXG4gICAgLy8gU2xhc2ggY29tbWFuZHMgZGVmaW5pdGlvblxyXG4gICAgdmFyIHNsYXNoQ29tbWFuZHMgPSBbXHJcbiAgICAgIHsgaWQ6ICdrb3MtdHJpYWdlJywgaWNvbjogJ1xcdUQ4M0RcXHVERDBEJywgbGFiZWw6ICdUcmlhZ2UnLCBkZXNjOiB0aGlzLl90KCdhY3Rpb24udHJpYWdlJyksIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtdHJpYWdlJyB9LFxyXG4gICAgICB7IGlkOiAna29zLWNvbXBpbGUnLCBpY29uOiAnXFx1MjY5OVxcdUZFMEYnLCBsYWJlbDogJ0NvbXBpbGUnLCBkZXNjOiAnQ29tcGlsZSByYXcvJywgYWN0aW9uOiAnbGF1bmNoJywgb2JzaWRpYW5JZDogJ29ic2lkaWFuLWtvcy1jb21waWxlJyB9LFxyXG4gICAgICB7IGlkOiAna29zLWxpbmsnLCBpY29uOiAnXFx1RDgzRFxcdUREMTcnLCBsYWJlbDogJ0xpbmsnLCBkZXNjOiAnTGluayBjaGVjaycsIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtbGluaycgfSxcclxuICAgICAgeyBpZDogJ2tvcy1kYWlseScsIGljb246ICdcXHVEODNEXFx1RENDNScsIGxhYmVsOiAnRGFpbHknLCBkZXNjOiAnRGFpbHkgbm90ZScsIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtZGFpbHknIH0sXHJcbiAgICAgIHsgaWQ6ICdrb3MtcXVlcnknLCBpY29uOiAnXFx1RDgzRFxcdUREMEQnLCBsYWJlbDogJ1F1ZXJ5JywgZGVzYzogJ1NlYXJjaCB2YXVsdCcsIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtcXVlcnknIH0sXHJcbiAgICAgIHsgaWQ6ICdrb3MtcHJvamVjdCcsIGljb246ICdcXHVEODNEXFx1RENDMScsIGxhYmVsOiAnUHJvamVjdCcsIGRlc2M6ICdOZXcgcHJvamVjdCcsIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtcHJvamVjdCcgfSxcclxuICAgICAgeyBpZDogJ2tvcy13ZWVrJywgaWNvbjogJ1xcdUQ4M0RcXHVEQ0NBJywgbGFiZWw6ICdXZWVrLVInLCBkZXNjOiAnV2VlayByZXZpZXcnLCBhY3Rpb246ICdsYXVuY2gnLCBvYnNpZGlhbklkOiAnb2JzaWRpYW4ta29zLXdlZWsnIH0sXHJcbiAgICAgIHsgaWQ6ICdrb3MtbW9udGgnLCBpY29uOiAnXFx1RDgzRFxcdURDQzgnLCBsYWJlbDogJ01vbnRoLVInLCBkZXNjOiAnTW9udGggcmV2aWV3JywgYWN0aW9uOiAnbGF1bmNoJywgb2JzaWRpYW5JZDogJ29ic2lkaWFuLWtvcy1tb250aCcgfSxcclxuICAgICAgeyBpZDogJ2tvcy1pbml0JywgaWNvbjogJ1xcdUQ4M0NcXHVERkUwJywgbGFiZWw6ICdJbml0JywgZGVzYzogJ0hlYWx0aCBjaGVjaycsIGFjdGlvbjogJ2xhdW5jaCcsIG9ic2lkaWFuSWQ6ICdvYnNpZGlhbi1rb3MtaW5pdCcgfSxcclxuICAgICAgeyBpZDogJ2tvcy1saWZlJywgaWNvbjogJ1xcdUQ4M0VcXHVEREVDJywgbGFiZWw6ICdMaWZlK0FJJywgZGVzYzogJ1RocmVlIHBpbGxhcnMnLCBhY3Rpb246ICdsYXVuY2gnLCBvYnNpZGlhbklkOiAnb2JzaWRpYW4ta29zLWxpZmUnIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIElucHV0IGFyZWEgKGZpeGVkIGF0IGJvdHRvbSlcclxuICAgIHZhciBpbnB1dEFyZWEgPSBtYWluLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS1pbnB1dC1hcmVhJyB9KTtcclxuICAgIHZhciBpbnB1dFJvdyA9IGlucHV0QXJlYS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktaW5wdXQtcm93JyB9KTtcclxuICAgIHZhciBpbnB1dCA9IGlucHV0Um93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcclxuICAgICAgY2xzOiAna29zLWFpLWlucHV0JyxcclxuICAgICAgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdhaS5wbGFjZWhvbGRlcicpIH0sXHJcbiAgICB9KTtcclxuICAgIHZhciBzZW5kQnRuID0gaW5wdXRSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWFpLXNlbmQnLCB0ZXh0OiB0aGlzLl90KCdhaS5zZW5kQnRuJykgfSk7XHJcblxyXG4gICAgLy8gU2xhc2ggY29tbWFuZCBtZW51XHJcbiAgICB2YXIgc2xhc2hNZW51ID0gaW5wdXRBcmVhLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1zbGFzaC1tZW51JywgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6bm9uZScgfSB9KTtcclxuXHJcbiAgICB2YXIgYWN0aXZlU2xhc2hJZHggPSAtMTtcclxuICAgIHZhciBpc1NsYXNoT3BlbiA9IGZhbHNlO1xyXG4gICAgdmFyIF9wZW5kaW5nU2xhc2hDbWQgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclNsYXNoTWVudShxdWVyeSkge1xyXG4gICAgICBzbGFzaE1lbnUuZW1wdHkoKTtcclxuICAgICAgdmFyIHEgPSBxdWVyeS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB2YXIgbWF0Y2hlZCA9IHEgPyBzbGFzaENvbW1hbmRzLmZpbHRlcihmdW5jdGlvbihjKSB7IHJldHVybiBjLmlkLmluZGV4T2YocSkgPT09IDAgfHwgYy5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocSkgPT09IDA7IH0pIDogc2xhc2hDb21tYW5kcztcclxuICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoID09PSAwKSB7IHNsYXNoTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBpc1NsYXNoT3BlbiA9IGZhbHNlOyByZXR1cm47IH1cclxuICAgICAgbWF0Y2hlZC5mb3JFYWNoKGZ1bmN0aW9uKGNtZCwgaWR4KSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzbGFzaE1lbnUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXNsYXNoLWl0ZW0nICsgKGlkeCA9PT0gMCA/ICcga29zLXNsYXNoLXNlbGVjdGVkJyA6ICcnKSB9KTtcclxuICAgICAgICBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3Mtc2xhc2gtaWNvbicsIHRleHQ6IGNtZC5pY29uIH0pO1xyXG4gICAgICAgIHZhciBpbmZvID0gaXRlbS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtc2xhc2gtaW5mbycgfSk7XHJcbiAgICAgICAgaW5mby5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLXNsYXNoLWxhYmVsJywgdGV4dDogJy8nICsgY21kLmlkIH0pO1xyXG4gICAgICAgIGluZm8uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1zbGFzaC1kZXNjJywgdGV4dDogY21kLmRlc2MgfSk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBleGVjdXRlU2xhc2hDb21tYW5kKGNtZCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgc2xhc2hNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpc1NsYXNoT3BlbiA9IHRydWU7XHJcbiAgICAgIGFjdGl2ZVNsYXNoSWR4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleGVjdXRlU2xhc2hDb21tYW5kKGNtZCkge1xyXG4gICAgICBzbGFzaE1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaXNTbGFzaE9wZW4gPSBmYWxzZTtcclxuICAgICAgLy8gRmlsbCBpbnB1dCB3aXRoIGNvbW1hbmQgdGV4dCBhbmQgd2FpdCBmb3IgdXNlciB0byBwcmVzcyBFbnRlclxyXG4gICAgICBpbnB1dC52YWx1ZSA9ICcvJyArIGNtZC5pZCArICcgJztcclxuICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgLy8gU3RvcmUgcGVuZGluZyBjb21tYW5kIGZvciBleGVjdXRpb24gb24gRW50ZXJcclxuICAgICAgX3BlbmRpbmdTbGFzaENtZCA9IGNtZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGF0IGVuZ2luZVxyXG4gICAgdGhpcy5faW5pdENoYXRUYWJzKCk7XHJcbiAgICB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcclxuXHJcbiAgICB2YXIgZG9TZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgIGlmICghdmFsKSByZXR1cm47XHJcbiAgICAgIC8vIENoZWNrIGZvciBwZW5kaW5nIHNsYXNoIGNvbW1hbmQgYW5kIGV4ZWN1dGUgZW5naW5lIGFjdGlvblxyXG4gICAgICB2YXIgcGVuZGluZyA9IF9wZW5kaW5nU2xhc2hDbWQ7XHJcbiAgICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgICAgX3BlbmRpbmdTbGFzaENtZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlTGF1bmNoKHBlbmRpbmcuaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh2YWwsIG1zZ0NvbnRhaW5lciwgaW5wdXQpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb1NlbmQpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGlmIChpc1NsYXNoT3Blbikge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHNsYXNoTWVudS5xdWVyeVNlbGVjdG9yQWxsKCcua29zLXNsYXNoLWl0ZW0nKTtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBhY3RpdmVTbGFzaElkeCA9IChhY3RpdmVTbGFzaElkeCArIDEpICUgaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkgeyBlbC50b2dnbGVDbGFzcygna29zLXNsYXNoLXNlbGVjdGVkJywgaSA9PT0gYWN0aXZlU2xhc2hJZHgpOyB9KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGFjdGl2ZVNsYXNoSWR4ID0gKGFjdGl2ZVNsYXNoSWR4IC0gMSArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7IGVsLnRvZ2dsZUNsYXNzKCdrb3Mtc2xhc2gtc2VsZWN0ZWQnLCBpID09PSBhY3RpdmVTbGFzaElkeCk7IH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBzZWwgPSBzbGFzaE1lbnUucXVlcnlTZWxlY3RvcignLmtvcy1zbGFzaC1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgaWYgKHNlbCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXNBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVtcyk7XHJcbiAgICAgICAgICAgIHZhciBpZHggPSBpdGVtc0Fyci5pbmRleE9mKHNlbCk7XHJcbiAgICAgICAgICAgIHZhciBxID0gaW5wdXQudmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSBxID8gc2xhc2hDb21tYW5kcy5maWx0ZXIoZnVuY3Rpb24oYykgeyByZXR1cm4gYy5pZC5pbmRleE9mKHEpID09PSAwIHx8IGMubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHEpID09PSAwOyB9KSA6IHNsYXNoQ29tbWFuZHM7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCAmJiBpZHggPCBtYXRjaGVkLmxlbmd0aCkgZXhlY3V0ZVNsYXNoQ29tbWFuZC5jYWxsKHRoaXMsIG1hdGNoZWRbaWR4XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgIHNsYXNoTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgaXNTbGFzaE9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgeyBkb1NlbmQoKTsgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBTaG93IHNsYXNoIG1lbnUgb24ga2V5dXBcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgdiA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAvLyBTa2lwIG5hdmlnYXRpb24ga2V5c1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5ID09PSAnQXJyb3dVcCcgfHwgZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICdFc2NhcGUnKSByZXR1cm47XHJcbiAgICAgIGlmICh2LmluZGV4T2YoJy8nKSA9PT0gMCAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZW5kZXJTbGFzaE1lbnUuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgfSBlbHNlIGlmIChpc1NsYXNoT3Blbikge1xyXG4gICAgICAgIHNsYXNoTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGlzU2xhc2hPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IENoYXQgV2VsY29tZSAoQ2xhdWRpYW4tc3R5bGUpID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgX3JlbmRlckNoYXRXZWxjb21lKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgd2VsY29tZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktd2VsY29tZScgfSk7XHJcbiAgICB3ZWxjb21lLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS13ZWxjb21lLWdyZWV0aW5nJywgdGV4dDogdGhpcy5fdCgnYWkud2VsY29tZVRpdGxlJykgfSk7XHJcblxyXG4gICAgLy8gU3VidGl0bGVcclxuICAgIHdlbGNvbWUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXdlbGNvbWUtc3ViJywgdGV4dDogdGhpcy5fdCgnYWkud2VsY29tZScpIH0pOztcclxuXHJcbiAgICAvLyBTdWdnZXN0aW9uIGNhcmRzXHJcbiAgICB2YXIgZ3JpZCA9IHdlbGNvbWUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXN1Z2dlc3QtZ3JpZCcgfSk7XHJcbiAgICB2YXIgc3VnZ2VzdGlvbnMgPSBbXHJcbiAgICAgIHsgaWNvbjogJ1xcdUQ4M0RcXHVEQ0NBJywgdGl0bGU6IHRoaXMuX3QoJ2FpLnN1Z2dlc3RQcm9qZWN0cycpLCBkZXNjOiB0aGlzLl90KCdhaS5zdWdnZXN0UHJvamVjdHNEZXNjJykgfSxcclxuICAgICAgeyBpY29uOiAnXFx1RDgzRFxcdURDREQnLCB0aXRsZTogdGhpcy5fdCgnYWkuc3VnZ2VzdFJlY2VudCcpLCBkZXNjOiB0aGlzLl90KCdhaS5zdWdnZXN0UmVjZW50RGVzYycpIH0sXHJcbiAgICAgIHsgaWNvbjogJ1xcdUQ4M0RcXHVERDBEJywgdGl0bGU6IHRoaXMuX3QoJ2FpLnN1Z2dlc3RTZWFyY2gnKSwgZGVzYzogdGhpcy5fdCgnYWkuc3VnZ2VzdFNlYXJjaERlc2MnKSB9LFxyXG4gICAgXTtcclxuICAgIHN1Z2dlc3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocykge1xyXG4gICAgICB2YXIgY2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXN1Z2dlc3QtY2FyZCcgfSk7XHJcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1haS1zdWdnZXN0LWljb24nLCB0ZXh0OiBzLmljb24gfSk7XHJcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1haS1zdWdnZXN0LXRpdGxlJywgdGV4dDogcy50aXRsZSB9KTtcclxuICAgICAgY2FyZC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXN1Z2dlc3QtZGVzYycsIHRleHQ6IHMuZGVzYyB9KTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEZpbGwgaW5wdXQgd2l0aCBzdWdnZXN0aW9uXHJcbiAgICAgICAgdmFyIGlucHV0RWwgPSBjb250YWluZXIuY2xvc2VzdCgnLmtvcy1kYicpPy5xdWVyeVNlbGVjdG9yKCcua29zLWFpLWlucHV0Jyk7XHJcbiAgICAgICAgaWYgKGlucHV0RWwpIHsgaW5wdXRFbC52YWx1ZSA9IHMudGl0bGU7IGlucHV0RWwuZm9jdXMoKTsgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBTaGFyZWQgQUkgQ2hhdCBMb2dpYyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgX2luaXRBaUNoYXQodGFiSWQpIHtcclxuICAgICAgdGFiSWQgPSB0YWJJZCB8fCB0aGlzLmFjdGl2ZUNoYXRUYWJJZDtcclxuICAgICAgaWYgKCF0YWJJZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGlmICh0aGlzLmFpQ2hhdHMuaGFzKHRhYklkKSkgcmV0dXJuIHRoaXMuYWlDaGF0cy5nZXQodGFiSWQpO1xyXG4gICAgXHJcbiAgICAgIC8vIFByZXZlbnQgY29uY3VycmVudCBpbml0IChyYWNlIGNvbmRpdGlvbiBmaXgpXHJcbiAgICAgIGlmICh0aGlzLl9pbml0TG9ja3MgJiYgdGhpcy5faW5pdExvY2tzW3RhYklkXSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGlmICghdGhpcy5faW5pdExvY2tzKSB0aGlzLl9pbml0TG9ja3MgPSB7fTtcclxuICAgICAgdGhpcy5faW5pdExvY2tzW3RhYklkXSA9IHRydWU7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgcmVzb2x2ZVByb3ZpZGVyQ29uZmlnKHNlbGYuc2V0dGluZ3MsIHNlbGYuYXBwLnZhdWx0LmFkYXB0ZXIpLnRoZW4oZnVuY3Rpb24oY2ZnKSB7XHJcbiAgICAgICAgaWYgKGNmZykge1xyXG4gICAgICAgICAgdmFyIGNoYXQgPSBuZXcgQUlDaGF0KHtcclxuICAgICAgICAgICAgbG9jYWxlOiBzZWxmLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogY2ZnLnByb3ZpZGVySWQsXHJcbiAgICAgICAgICAgIGJhc2VVcmw6IGNmZy5iYXNlVXJsLFxyXG4gICAgICAgICAgICBhcGlLZXk6IGNmZy5hcGlLZXksXHJcbiAgICAgICAgICAgIG1vZGVsOiBjZmcubW9kZWwsXHJcbiAgICAgICAgICAgIHN5c3RlbVByb21wdDogY2ZnLnN5c3RlbVByb21wdCB8fCBzZWxmLnNldHRpbmdzPy5haVN5c3RlbVByb21wdCB8fCAnJyxcclxuICAgICAgICAgICAgbGFiZWw6IGNmZy5sYWJlbCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2VsZi5haUNoYXRzLnNldCh0YWJJZCwgY2hhdCk7XHJcbiAgICAgIGlmIChzZWxmLl9pbml0TG9ja3MpIGRlbGV0ZSBzZWxmLl9pbml0TG9ja3NbdGFiSWRdO1xyXG4gICAgICAgICAgaWYgKCFzZWxmLmFpQ2hhdCkgc2VsZi5haUNoYXQgPSBjaGF0O1xyXG4gICAgICAgICAgc2VsZi5fcmVmcmVzaENoYXRNc2dzKCk7XHJcbiAgICAgICAgICB2YXIgcGlsbCA9IHNlbGYuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktc3RhdHVzLXBpbGwnKTtcclxuICAgICAgICAgIGlmIChwaWxsKSB7XHJcbiAgICAgICAgICAgIHBpbGwudGV4dENvbnRlbnQgPSBzZWxmLl90KCdhaS5jb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgcGlsbC5yZW1vdmVDbGFzcygnd2FybicpO1xyXG4gICAgICAgICAgICBwaWxsLmFkZENsYXNzKCdvaycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIF9yZWZyZXNoQ2hhdE1zZ3MoKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcignLmtvcy1haS1jaGF0LCAua29zLWRiLWFpLCAua29zLWRiLWFpLWZ1bGwnKTtcclxuICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IG1zZ0NvbnRhaW5lciA9IChzZWN0aW9uID8gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcua29zLWFpLW1zZ3MnKSA6IG51bGwpIHx8IChzZWN0aW9uID8gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcua29zLWRiLWFpLW1zZ3MnKSA6IG51bGwpO1xyXG4gICAgICBpZiAobXNnQ29udGFpbmVyKSB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgX3JlbmRlclVzZXJNZXNzYWdlKGNvbnRhaW5lciwgbXNnKSB7XHJcbiAgICB2YXIgYnViYmxlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS1tc2cga29zLWFpLW1zZy11c2VyJyB9KTtcclxuICAgIGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLXRleHQnLCB0ZXh0OiBtc2cudGV4dCB8fCAnJyB9KTtcclxuXHJcbiAgICAvLyBDb250ZXh0IGZpbGUgY2hpcHNcclxuICAgIGlmIChtc2cubGlua2VkQ29udGV4dEZpbGVzICYmIG1zZy5saW5rZWRDb250ZXh0RmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgZmlsZXNFbCA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLWZpbGVzJyB9KTtcclxuICAgICAgdmFyIG1heENoaXBzID0gTWF0aC5taW4obXNnLmxpbmtlZENvbnRleHRGaWxlcy5sZW5ndGgsIDMpO1xyXG4gICAgICBmb3IgKHZhciBmaSA9IDA7IGZpIDwgbWF4Q2hpcHM7IGZpKyspIHtcclxuICAgICAgICB2YXIgZnBhdGggPSBtc2cubGlua2VkQ29udGV4dEZpbGVzW2ZpXTtcclxuICAgICAgICAoZnVuY3Rpb24oZnApIHtcclxuICAgICAgICAgIHZhciBjaGlwID0gZmlsZXNFbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLW1zZy1maWxlLWNoaXAnLCB0ZXh0OiBmcC5zcGxpdCgnLycpLnBvcCgpIH0pO1xyXG4gICAgICAgICAgY2hpcC50aXRsZSA9IGZwO1xyXG4gICAgICAgICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGZwLCAnJywgdHJ1ZSk7XHJcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pLmJpbmQodGhpcykoZnBhdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtc2cubGlua2VkQ29udGV4dEZpbGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICBmaWxlc0VsLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtYWktbXNnLWZpbGUtY2hpcCcsIHRleHQ6ICcrJyArIChtc2cubGlua2VkQ29udGV4dEZpbGVzLmxlbmd0aCAtIDMpIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyQXNzaXN0YW50TWVzc2FnZShjb250YWluZXIsIG1zZykge1xyXG4gICAgdmFyIGJ1YmJsZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICBjbHM6ICdrb3MtYWktbXNnIGtvcy1haS1tc2ctYXNzaXN0YW50JyArIChtc2cucGVuZGluZyAmJiAhbXNnLnRleHQgPyAnIGtvcy1haS10aGlua2luZycgOiAnJyksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUZXh0IGNvbnRlbnRcclxuICAgIGlmIChtc2cudGV4dCkge1xyXG4gICAgICBidWJibGUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLW1zZy10ZXh0JywgdGV4dDogbXNnLnRleHQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG1zZy5wZW5kaW5nKSB7XHJcbiAgICAgIGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLXRleHQnLCB0ZXh0OiB0aGlzLl90KCdhaS50aGlua2luZycpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYXNvbmluZyBzZWN0aW9uXHJcbiAgICBpZiAobXNnLnJlYXNvbmluZykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJSZWFzb25pbmdTZWN0aW9uKGJ1YmJsZSwgbXNnLnJlYXNvbmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9vbCBzZWN0aW9uXHJcbiAgICBpZiAobXNnLmJsb2NrcyAmJiBtc2cuYmxvY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5fcmVuZGVyVG9vbFNlY3Rpb24oYnViYmxlLCBtc2cuYmxvY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRhIGxpbmUgKGhvdmVyIHRvIHNob3cpXHJcbiAgICBpZiAobXNnLm1ldGEgJiYgIW1zZy5wZW5kaW5nKSB7XHJcbiAgICAgIGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLW1ldGEnLCB0ZXh0OiBtc2cubWV0YSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3B5IGJ1dHRvblxyXG4gICAgaWYgKG1zZy50ZXh0ICYmICFtc2cucGVuZGluZyAmJiBtc2cubWV0YSkge1xyXG4gICAgICB2YXIgbXNnVGV4dCA9IG1zZy50ZXh0O1xyXG4gICAgICB2YXIgY29weUJ0biA9IGJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtYWktY29weS1idG4nLCB0ZXh0OiB0aGlzLl90KCdhaS5jb3B5JykgfSk7XHJcbiAgICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobXNnVGV4dCk7XHJcbiAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LCAyMDAwKTtcclxuICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXJyb3JcclxuICAgIGlmIChtc2cuZXJyb3IpIHtcclxuICAgICAgdmFyIGVyclJvdyA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktdG9vbC1yb3cnLCBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLXRvcDo2cHg7Y29sb3I6dmFyKC0ta2MtcmVkKScgfSB9KTtcclxuICAgICAgZXJyUm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnXFx1MjcxNyBFcnJvcjogJyArIG1zZy5lcnJvciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZW5kZXJSZWFzb25pbmdTZWN0aW9uKGJ1YmJsZSwgcmVhc29uaW5nKSB7XHJcbiAgICB2YXIgc2VjdGlvbiA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLXJlYXNvbmluZycgfSk7XHJcbiAgICB2YXIgdG9nZ2xlID0gc2VjdGlvbi5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICBjbHM6ICdrb3MtYWktcmVhc29uaW5nLXRvZ2dsZScsXHJcbiAgICAgIHRleHQ6ICdcXHVEODNFXFx1REREMCBTaG93IHRoaW5raW5nJyxcclxuICAgIH0pO1xyXG4gICAgdmFyIGNvbnRlbnQgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgIGNsczogJ2tvcy1haS1yZWFzb25pbmctY29udGVudCcsXHJcbiAgICAgIHRleHQ6IHJlYXNvbmluZyxcclxuICAgICAgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6bm9uZScgfSxcclxuICAgIH0pO1xyXG4gICAgdmFyIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlzVmlzaWJsZSA9ICFpc1Zpc2libGU7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgIHRvZ2dsZS50ZXh0Q29udGVudCA9IGlzVmlzaWJsZSA/ICdcXHVEODNFXFx1REREMCBIaWRlIHRoaW5raW5nJyA6ICdcXHVEODNFXFx1REREMCBTaG93IHRoaW5raW5nJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlclRvb2xTZWN0aW9uKGJ1YmJsZSwgYmxvY2tzKSB7XHJcbiAgICAvLyBGaWx0ZXIgaW50ZXJuYWwgYmxvY2tzXHJcbiAgICB2YXIgdmlzaWJsZUJsb2NrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IGJsb2Nrcy5sZW5ndGg7IGJpKyspIHtcclxuICAgICAgaWYgKCFibG9ja3NbYmldLmludGVybmFsKSB2aXNpYmxlQmxvY2tzLnB1c2goYmxvY2tzW2JpXSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmlzaWJsZUJsb2Nrcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICB2YXIgc2VjdGlvbiA9IGJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnLXRvb2wtc2VjdGlvbicgfSk7XHJcblxyXG4gICAgLy8gSGVhZGVyIChjb2xsYXBzaWJsZSlcclxuICAgIHZhciBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sLWhlYWRlcicgfSk7XHJcbiAgICB2YXIgY29tcGxldGVkID0gMCwgdG90YWwgPSAwO1xyXG4gICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHZpc2libGVCbG9ja3MubGVuZ3RoOyBiaSsrKSB7XHJcbiAgICAgIGlmICh2aXNpYmxlQmxvY2tzW2JpXS50eXBlID09PSAndG9vbCcpIHtcclxuICAgICAgICB0b3RhbCsrO1xyXG4gICAgICAgIGlmICh2aXNpYmxlQmxvY2tzW2JpXS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSBjb21wbGV0ZWQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1xcdTI2QTEgVG9vbHMgKCcgKyBjb21wbGV0ZWQgKyAnLycgKyB0b3RhbCArICcpJztcclxuXHJcbiAgICB2YXIgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXRvb2wtbGlzdCcgfSk7XHJcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZDtcclxuICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gaXNDb2xsYXBzZWQgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHZpc2libGVCbG9ja3MubGVuZ3RoOyBiaSsrKSB7XHJcbiAgICAgIHZhciBibG9jayA9IHZpc2libGVCbG9ja3NbYmldO1xyXG5cclxuICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICdzdHJlYW0tdGV4dCcpIHtcclxuICAgICAgICBpZiAoIWJsb2NrLnRleHQpIGNvbnRpbnVlO1xyXG4gICAgICAgIHZhciByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sLXJvdycgfSk7XHJcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtYWktdG9vbC1pY29uJywgdGV4dDogJ1xcdTI1QjYnIH0pO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXRvb2wtbmFtZScsIHRleHQ6ICdzdHJlYW0tdGV4dCcgfSk7XHJcbiAgICAgICAgdmFyIHRva2VuQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGJsb2NrLnRleHQubGVuZ3RoIC8gNCkpO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXRvb2wtc3VtbWFyeScsIHRleHQ6IHRva2VuQ291bnQgKyAnIHRva2VucycgfSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChibG9jay50eXBlID09PSAndG9vbCcpIHtcclxuICAgICAgICB2YXIgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktdG9vbC1yb3cnIH0pO1xyXG5cclxuICAgICAgICAvLyBTdGF0dXMgaWNvblxyXG4gICAgICAgIHZhciBpY29uLCBjb2xvcjtcclxuICAgICAgICBpZiAoYmxvY2suc3RhdHVzID09PSAnY29tcGxldGVkJykgeyBpY29uID0gJ1xcdTI3MTMnOyBjb2xvciA9ICd2YXIoLS1rYy1ncmVlbiknOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYmxvY2suc3RhdHVzID09PSAnZXJyb3InKSB7IGljb24gPSAnXFx1MjcxNyc7IGNvbG9yID0gJ3ZhcigtLWtjLXJlZCknOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYmxvY2suc3RhdHVzID09PSAncnVubmluZycpIHsgaWNvbiA9ICdcXHUyNUNCJzsgY29sb3IgPSAndmFyKC0ta2MtYW1iZXIpJzsgfVxyXG4gICAgICAgIGVsc2UgeyBpY29uID0gJz8nOyBjb2xvciA9ICd2YXIoLS1rYy10ZXh0LWRpbSknOyB9XHJcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtYWktdG9vbC1pY29uJywgdGV4dDogaWNvbiwgYXR0cjogeyBzdHlsZTogJ2NvbG9yOicgKyBjb2xvciB9IH0pO1xyXG5cclxuICAgICAgICAvLyBUb29sIG5hbWVcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1haS10b29sLW5hbWUnLCB0ZXh0OiBibG9jay50b29sIHx8ICd0b29sJyB9KTtcclxuXHJcbiAgICAgICAgLy8gU3VtbWFyeVxyXG4gICAgICAgIGlmIChibG9jay5zdW1tYXJ5KSB7XHJcbiAgICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1haS10b29sLXN1bW1hcnknLCB0ZXh0OiBibG9jay5zdW1tYXJ5LnNsaWNlKDAsIDQwKSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIER1cmF0aW9uXHJcbiAgICAgICAgaWYgKGJsb2NrLmR1cmF0aW9uTXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdmFyIGR1clRleHQgPSBibG9jay5kdXJhdGlvbk1zID49IDEwMDBcclxuICAgICAgICAgICAgPyAoYmxvY2suZHVyYXRpb25NcyAvIDEwMDApLnRvRml4ZWQoMSkgKyAncydcclxuICAgICAgICAgICAgOiBibG9jay5kdXJhdGlvbk1zICsgJ21zJztcclxuICAgICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXRvb2wtZHVyYXRpb24nLCB0ZXh0OiBkdXJUZXh0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xpY2sgdG8gZXhwYW5kIGRldGFpbFxyXG4gICAgICAgIGlmIChibG9jay5kZXRhaWwgfHwgYmxvY2suaW5wdXQgfHwgYmxvY2sub3V0cHV0KSB7XHJcbiAgICAgICAgICB2YXIgZGV0YWlsRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkZXRhaWxFeHBhbmRlZCA9ICFkZXRhaWxFeHBhbmRlZDtcclxuICAgICAgICAgICAgdmFyIGRldGFpbEVsID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktdG9vbC1kZXRhaWwnKTtcclxuICAgICAgICAgICAgaWYgKCFkZXRhaWxFbCkge1xyXG4gICAgICAgICAgICAgIGRldGFpbEVsID0gcm93LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sLWRldGFpbCcgfSk7XHJcbiAgICAgICAgICAgICAgaWYgKGJsb2NrLmlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxFbC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiAnSW5wdXQ6JywgY2xzOiAna29zLWFpLXRvb2wtZGV0YWlsLWxhYmVsJyB9KTtcclxuICAgICAgICAgICAgICAgIGRldGFpbEVsLmNyZWF0ZUVsKCdwcmUnLCB7IHRleHQ6IEpTT04uc3RyaW5naWZ5KGJsb2NrLmlucHV0LCBudWxsLCAyKSB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGJsb2NrLm91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsRWwuY3JlYXRlRWwoJ2RpdicsIHsgdGV4dDogJ091dHB1dDonLCBjbHM6ICdrb3MtYWktdG9vbC1kZXRhaWwtbGFiZWwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsRWwuY3JlYXRlRWwoJ3ByZScsIHsgdGV4dDogU3RyaW5nKGJsb2NrLm91dHB1dCkuc2xpY2UoMCwgMTAwMCkgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChibG9jay5kZXRhaWwgJiYgIWJsb2NrLmlucHV0ICYmICFibG9jay5vdXRwdXQpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbEVsLmNyZWF0ZUVsKCdwcmUnLCB7IHRleHQ6IGJsb2NrLmRldGFpbCB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGV0YWlsRWwuc3R5bGUuZGlzcGxheSA9IGRldGFpbEV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIFc4OiBSZW5kZXIgbWVzc2FnZXMgZm9yIGN1cnJlbnQgYWN0aXZlIHRhYlxyXG4gIF9yZW5kZXJDaGF0TWVzc2FnZXMoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuZW1wdHkoKTtcclxuICAgIHZhciBhY3RpdmVBaUNoYXQgPSB0aGlzLmFjdGl2ZUNoYXRUYWJJZCA/IHRoaXMuYWlDaGF0cy5nZXQodGhpcy5hY3RpdmVDaGF0VGFiSWQpIDogbnVsbDtcclxuICAgIHZhciBtc2dzID0gYWN0aXZlQWlDaGF0ID8gYWN0aXZlQWlDaGF0LmdldEhpc3RvcnkoKSA6IFtdO1xyXG5cclxuICAgIGlmICghYWN0aXZlQWlDaGF0IHx8ICFhY3RpdmVBaUNoYXQuaXNDb25maWd1cmVkKSB7XHJcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhaS5uZWVkQ29uZmlnJyksIGNsczogJ2tvcy1haS1uZWVkLWNvbmZpZycgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3VudCB1c2VyIG1lc3NhZ2VzIHRvIGRldGVybWluZSBpZiBjb252ZXJzYXRpb24gaGFzIHN0YXJ0ZWRcclxuICAgIHZhciB1c2VyQ291bnQgPSAwO1xyXG4gICAgZm9yICh2YXIgbWkgPSAwOyBtaSA8IG1zZ3MubGVuZ3RoOyBtaSsrKSB7XHJcbiAgICAgIGlmIChtc2dzW21pXS5yb2xlID09PSAndXNlcicpIHVzZXJDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgd2VsY29tZSBzY3JlZW4gb25seSB3aGVuIG5vIGNvbnZlcnNhdGlvbiBleGlzdHNcclxuICAgIGlmICh1c2VyQ291bnQgPT09IDApIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQ2hhdFdlbGNvbWUoY29udGFpbmVyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBtZXNzYWdlcyAobWF4IDUwKSwgc2tpcCB0aGUgaW50cm8vd2VsY29tZSBtZXNzYWdlIChtZXRhID09PSAnJylcclxuICAgIHZhciBzdGFydElkeCA9IE1hdGgubWF4KDAsIG1zZ3MubGVuZ3RoIC0gNTApO1xyXG4gICAgdmFyIHJlbmRlcmVkID0gMDtcclxuICAgIGZvciAodmFyIG1pID0gc3RhcnRJZHg7IG1pIDwgbXNncy5sZW5ndGg7IG1pKyspIHtcclxuICAgICAgdmFyIG1zZyA9IG1zZ3NbbWldO1xyXG4gICAgICAvLyBTa2lwIHRoZSBpbml0aWFsIHdlbGNvbWUgbWVzc2FnZSAobWV0YSA9PT0gJycpIG9uY2UgY29udmVyc2F0aW9uIHN0YXJ0c1xyXG4gICAgICBpZiAobXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnICYmICFtc2cubWV0YSAmJiB1c2VyQ291bnQgPiAwKSBjb250aW51ZTtcclxuICAgICAgaWYgKG1zZy5yb2xlID09PSAndXNlcicpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJVc2VyTWVzc2FnZShjb250YWluZXIsIG1zZyk7XHJcbiAgICAgICAgcmVuZGVyZWQrKztcclxuICAgICAgfSBlbHNlIGlmIChtc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCcpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJBc3Npc3RhbnRNZXNzYWdlKGNvbnRhaW5lciwgbXNnKTtcclxuICAgICAgICByZW5kZXJlZCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIF9zZW5kQ2hhdE1lc3NhZ2UodGV4dCwgbXNnQ29udGFpbmVyLCBpbnB1dEVsKSB7XHJcbiAgICAvLyBDYXB0dXJlIHRoZSBBSUNoYXQgcmVmZXJlbmNlIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyB3aXRoIGFzeW5jIGluaXRcclxuICAgIHZhciBjaGF0ID0gdGhpcy5hY3RpdmVDaGF0VGFiSWQgPyB0aGlzLmFpQ2hhdHMuZ2V0KHRoaXMuYWN0aXZlQ2hhdFRhYklkKSA6IHRoaXMuYWlDaGF0O1xyXG4gICAgaWYgKCFjaGF0IHx8ICFjaGF0LmlzQ29uZmlndXJlZCkge1xyXG4gICAgICB0cnkgeyBuZXcgTm90aWNlKHRoaXMuX3QoJ2FpLm5lZWRDb25maWcnKSk7IH0gY2F0Y2ggKF8pIHt9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpbnB1dEVsLnZhbHVlID0gJyc7XG5cblxuICAgIGNoYXQuc2VuZE1lc3NhZ2UodGV4dCwge1xuICAgICAgb25Vc2VyTWVzc2FnZTogKGZ1bmN0aW9uKG1zZykge1xuICAgICAgICB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcclxuICAgICAgfSkuYmluZCh0aGlzKSxcclxuXHJcbiAgICAgIG9uQXNzaXN0YW50Q3JlYXRlZDogKGZ1bmN0aW9uKG1zZykge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xyXG4gICAgICB9KS5iaW5kKHRoaXMpLFxyXG5cclxuICAgICAgb25Ub2tlbjogKGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XHJcbiAgICAgIH0pLmJpbmQodGhpcyksXHJcblxyXG4gICAgICBvbkJsb2NrVXBkYXRlOiAoZnVuY3Rpb24oYmxvY2ssIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XHJcbiAgICAgIH0pLmJpbmQodGhpcyksXHJcblxyXG4gICAgICBvblJlYXNvbmluZzogKGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcclxuICAgICAgfSkuYmluZCh0aGlzKSxcclxuXHJcbiAgICAgIG9uRG9uZTogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xyXG4gICAgICAgIGlucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XHJcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIH0pLmJpbmQodGhpcyksXHJcblxyXG4gICAgICBvbkVycm9yOiAoZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIG1zZ0NvbnRhaW5lci5zY3JvbGxUb3AgPSBtc2dDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICB9KS5iaW5kKHRoaXMpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBXODogTXVsdGktQ2hhdCBUYWIgTWFuYWdlbWVudFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBfZ2VuQ2hhdFRhYklkKCkge1xyXG4gICAgcmV0dXJuICd0YWItJyArIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgJy0nICsgKE1hdGgucmFuZG9tKCkgKiA0NjY1NiB8IDApLnRvU3RyaW5nKDM2KTtcclxuICB9XHJcblxyXG4gIF9pbml0Q2hhdFRhYnMoKSB7XHJcbiAgICB2YXIgc2F2ZWQgPSB0aGlzLnNldHRpbmdzPy50YWJNYW5hZ2VyU3RhdGU7XHJcbiAgICBpZiAoc2F2ZWQgJiYgc2F2ZWQudGFicyAmJiBzYXZlZC50YWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGF0VGFicyA9IHNhdmVkLnRhYnMubWFwKGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHsgaWQ6IHQuaWQsIHRpdGxlOiB0LnRpdGxlLCBjcmVhdGVkQXQ6IHQuY3JlYXRlZEF0IHx8IERhdGUubm93KCkgfTsgfSk7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2hhdFRhYklkID0gc2F2ZWQuYWN0aXZlVGFiSWQgfHwgdGhpcy5jaGF0VGFic1swXS5pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBkZWZhdWx0SWQgPSB0aGlzLl9nZW5DaGF0VGFiSWQoKTtcclxuICAgICAgdGhpcy5jaGF0VGFicyA9IFt7IGlkOiBkZWZhdWx0SWQsIHRpdGxlOiB0aGlzLl90KCdhaS5kZWZhdWx0VGFiJyksIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9XTtcclxuICAgICAgdGhpcy5hY3RpdmVDaGF0VGFiSWQgPSBkZWZhdWx0SWQ7XHJcbiAgICB9XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGF0VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5jaGF0VGFic1tpXS5pZCA9PT0gdGhpcy5hY3RpdmVDaGF0VGFiSWQpIHsgZm91bmQgPSB0cnVlOyBicmVhazsgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCAmJiB0aGlzLmNoYXRUYWJzLmxlbmd0aCA+IDApIHRoaXMuYWN0aXZlQ2hhdFRhYklkID0gdGhpcy5jaGF0VGFic1swXS5pZDtcclxuICAgIGlmICghdGhpcy5hY3RpdmVDaGF0VGFiSWQgJiYgdGhpcy5jaGF0VGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdmFyIGlkID0gdGhpcy5fZ2VuQ2hhdFRhYklkKCk7XHJcbiAgICAgIHRoaXMuY2hhdFRhYnMucHVzaCh7IGlkOiBpZCwgdGl0bGU6IHRoaXMuX3QoJ2FpLmRlZmF1bHRUYWInKSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH0pO1xyXG4gICAgICB0aGlzLmFjdGl2ZUNoYXRUYWJJZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW5pdEFpQ2hhdCh0aGlzLmFjdGl2ZUNoYXRUYWJJZCk7XHJcbiAgfVxyXG5cclxuICBfc2F2ZUNoYXRUYWJTdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5wbHVnaW4pIHJldHVybjtcclxuICAgIHZhciBzdGF0ZSA9IHtcclxuICAgICAgdGFiczogdGhpcy5jaGF0VGFicy5tYXAoZnVuY3Rpb24odCkgeyByZXR1cm4geyBpZDogdC5pZCwgdGl0bGU6IHQudGl0bGUsIGNyZWF0ZWRBdDogdC5jcmVhdGVkQXQgfTsgfSksXHJcbiAgICAgIGFjdGl2ZVRhYklkOiB0aGlzLmFjdGl2ZUNoYXRUYWJJZCxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucGx1Z2luLnNldHRpbmdzLnRhYk1hbmFnZXJTdGF0ZSkgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGFiTWFuYWdlclN0YXRlID0ge307XHJcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWJNYW5hZ2VyU3RhdGUudGFicyA9IHN0YXRlLnRhYnM7XHJcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWJNYW5hZ2VyU3RhdGUuYWN0aXZlVGFiSWQgPSBzdGF0ZS5hY3RpdmVUYWJJZDtcclxuICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIF9yZW5kZXJDaGF0VGFiQmFyKGNvbnRhaW5lcikge1xyXG4gICAgdmFyIGV4aXN0aW5nID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktY2hhdC10YWJiYXInKTtcclxuICAgIGlmIChleGlzdGluZykgZXhpc3RpbmcucmVtb3ZlKCk7XHJcblxyXG4gICAgdmFyIGJhciA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktY2hhdC10YWJiYXInIH0pO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGF0VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAoZnVuY3Rpb24oc2VsZiwgdGFiLCBpc0FjdGl2ZSwgdGFiSWQsIHRhYlRpdGxlKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBiYXIuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgIGNsczogJ2tvcy1haS1jaGF0LXRhYicgKyAoaXNBY3RpdmUgPyAnIGFjdGl2ZScgOiAnJyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBpdGVtLmNyZWF0ZUVsKCdzcGFuJywge1xyXG4gICAgICAgICAgY2xzOiAna29zLWFpLWNoYXQtdGFiLXRpdGxlJyxcclxuICAgICAgICAgIHRleHQ6IHRhYlRpdGxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5jaGF0VGFicy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB2YXIgY2xvc2VCdG4gPSBpdGVtLmNyZWF0ZUVsKCdzcGFuJywge1xyXG4gICAgICAgICAgICBjbHM6ICdrb3MtYWktY2hhdC10YWItY2xvc2UnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnXHUwMEQ3JyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHNlbGYuX2Nsb3NlQ2hhdFRhYih0YWJJZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYuX3N3aXRjaENoYXRUYWIodGFiSWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aXRsZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0YWJUaXRsZTtcclxuICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdrb3MtYWktY2hhdC10YWItcmVuYW1lLWlucHV0JztcclxuICAgICAgICAgIGlucHV0LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6ODBweDtiYWNrZ3JvdW5kOnZhcigtLWtjLWJnLWNhcmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0ta2MtYm9yZGVyLWZvY3VzKTtib3JkZXItcmFkaXVzOjRweDtjb2xvcjp2YXIoLS1rYy10ZXh0LXByaW1hcnkpO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MnB4IDZweDtvdXRsaW5lOm5vbmU7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCknO1xyXG4gICAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICB0aXRsZVNwYW4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgIGlucHV0LnNlbGVjdCgpO1xyXG4gICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3VGl0bGUgPSBpbnB1dC52YWx1ZS50cmltKCkgfHwgdGFiVGl0bGU7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGYuY2hhdFRhYnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc2VsZi5jaGF0VGFic1tqXS5pZCA9PT0gdGFiSWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhdFRhYnNbal0udGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLl9zYXZlQ2hhdFRhYlN0YXRlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgeyBpbnB1dC5ibHVyKCk7IH1cclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgeyB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0YWJUaXRsZTsgaW5wdXQuYmx1cigpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSkodGhpcywgdGhpcy5jaGF0VGFic1tpXSwgdGhpcy5jaGF0VGFic1tpXS5pZCA9PT0gdGhpcy5hY3RpdmVDaGF0VGFiSWQsIHRoaXMuY2hhdFRhYnNbaV0uaWQsIHRoaXMuY2hhdFRhYnNbaV0udGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdCdG4gPSBiYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcclxuICAgICAgY2xzOiAna29zLWFpLWNoYXQtdGFiLW5ldycsXHJcbiAgICAgIHRleHQ6ICcrJyxcclxuICAgICAgYXR0cjogeyB0aXRsZTogdGhpcy5fdCgnYWkubmV3VGFiJykgfSxcclxuICAgIH0pO1xyXG4gICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZUNoYXRUYWIoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBfc3dpdGNoQ2hhdFRhYih0YWJJZCkge1xyXG4gICAgaWYgKHRhYklkID09PSB0aGlzLmFjdGl2ZUNoYXRUYWJJZCkgcmV0dXJuO1xyXG5cclxuICAgIHZhciBpbnB1dEVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcignLmtvcy1haS1pbnB1dCcpO1xyXG4gICAgdGhpcy5hY3RpdmVDaGF0VGFiSWQgPSB0YWJJZDtcclxuICAgIHRoaXMuX2luaXRBaUNoYXQodGFiSWQpO1xyXG5cclxuICAgIHZhciBjaGF0UGFuZWwgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWFpLWNoYXQnKTtcclxuICAgIGlmIChjaGF0UGFuZWwpIHRoaXMuX3JlbmRlckNoYXRUYWJCYXIoY2hhdFBhbmVsKTtcclxuXHJcbiAgICB2YXIgbXNnQ29udGFpbmVyID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcignLmtvcy1haS1tc2dzJyk7XHJcbiAgICBpZiAobXNnQ29udGFpbmVyKSB0aGlzLl9yZW5kZXJDaGF0TWVzc2FnZXMobXNnQ29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoaW5wdXRFbCkgaW5wdXRFbC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5fc2F2ZUNoYXRUYWJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUNoYXRUYWIodGl0bGUpIHtcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgdGhpcy5fdCgnYWkubmV3VGFiJyk7XHJcbiAgICB2YXIgaWQgPSB0aGlzLl9nZW5DaGF0VGFiSWQoKTtcclxuICAgIHRoaXMuY2hhdFRhYnMucHVzaCh7IGlkOiBpZCwgdGl0bGU6IHRpdGxlLCBjcmVhdGVkQXQ6IERhdGUubm93KCkgfSk7XHJcbiAgICB0aGlzLl9zd2l0Y2hDaGF0VGFiKGlkKTtcclxuICAgIHZhciBjaGF0UGFuZWwgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWFpLWNoYXQnKTtcclxuICAgIGlmIChjaGF0UGFuZWwpIHRoaXMuX3JlbmRlckNoYXRUYWJCYXIoY2hhdFBhbmVsKTtcclxuICAgIHRoaXMuX3NhdmVDaGF0VGFiU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIF9jbG9zZUNoYXRUYWIodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLmNoYXRUYWJzLmxlbmd0aCA8PSAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIGlkeCA9IC0xO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoYXRUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoYXRUYWJzW2ldLmlkID09PSB0YWJJZCkgeyBpZHggPSBpOyBicmVhazsgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlkeCA8IDApIHJldHVybjtcclxuXHJcbiAgICB2YXIgbmV4dFRhYklkID0gbnVsbDtcclxuICAgIGlmICh0YWJJZCA9PT0gdGhpcy5hY3RpdmVDaGF0VGFiSWQpIHtcclxuICAgICAgdmFyIG5leHRJZHggPSBpZHggPiAwID8gaWR4IC0gMSA6IDA7XHJcbiAgICAgIGlmIChuZXh0SWR4IDwgdGhpcy5jaGF0VGFicy5sZW5ndGgpIG5leHRUYWJJZCA9IHRoaXMuY2hhdFRhYnNbbmV4dElkeF0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYWlDaGF0cy5oYXModGFiSWQpKSB7XHJcbiAgICAgIHZhciBjaGF0ID0gdGhpcy5haUNoYXRzLmdldCh0YWJJZCk7XHJcbiAgICAgIGlmIChjaGF0ICYmIGNoYXQuaXNTdHJlYW1pbmcpIGNoYXQuYWJvcnQoKTtcclxuICAgICAgdGhpcy5haUNoYXRzLmRlbGV0ZSh0YWJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGF0VGFicy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICBpZiAobmV4dFRhYklkKSB0aGlzLl9zd2l0Y2hDaGF0VGFiKG5leHRUYWJJZCk7XHJcblxyXG4gICAgdmFyIGNoYXRQYW5lbCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktY2hhdCcpO1xyXG4gICAgaWYgKGNoYXRQYW5lbCkgdGhpcy5fcmVuZGVyQ2hhdFRhYkJhcihjaGF0UGFuZWwpO1xyXG4gICAgdGhpcy5fc2F2ZUNoYXRUYWJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JDcmVhdGVBSUNoYXQodGFiSWQpIHtcclxuICAgIHRhYklkID0gdGFiSWQgfHwgdGhpcy5hY3RpdmVDaGF0VGFiSWQ7XHJcbiAgICBpZiAoIXRhYklkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0aGlzLmFpQ2hhdHMuaGFzKHRhYklkKSkgcmV0dXJuIHRoaXMuYWlDaGF0cy5nZXQodGFiSWQpO1xyXG4gICAgdGhpcy5faW5pdEFpQ2hhdCh0YWJJZCk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBDb2NrcGl0VmlldywgVklFV19UWVBFX0NPQ0tQSVQgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCAiXHVGRUZGLy8gS09TIENvY2twaXQgXHUyMDE0IHNldHRpbmdzIHRhYlxyXG4vLyBDbGF1ZGlhbi1pbnNwaXJlZDogdGFiYmVkIHNldHRpbmdzIHdpdGggcGVyLXByb3ZpZGVyIGNvbmZpZ3VyYXRpb25cclxuXHJcbmNvbnN0IHsgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcclxuY29uc3QgeyB0LCBMT0NBTEVfS0VZUyB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1MgPSB7XHJcbiAgc2Vhc29uYWxUaGVtZTogJ3NwcmluZycsXHJcbiAgZm9udFNpemU6ICdtZWRpdW0nLFxyXG4gIGxvY2FsZTogJ3poLWNuJyxcclxuICBhdXRvT3BlbjogdHJ1ZSxcclxuXHJcbiAgLy8gQWN0aXZlIHByb3ZpZGVyXHJcbiAgYWN0aXZlUHJvdmlkZXI6ICdjbGF1ZGUnLFxyXG5cclxuICAvLyBQZXItcHJvdmlkZXIgY29uZmlndXJhdGlvblxyXG4gIHByb3ZpZGVyczoge1xyXG4gICAgY2xhdWRlOiB7XHJcbiAgICAgIGxhYmVsOiAnQ2xhdWRlJyxcclxuICAgICAgZW5kcG9pbnQ6ICcnLFxyXG4gICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICBtb2RlbDogJ2NsYXVkZS1zb25uZXQtNC0yMDI1MDUxNCcsXHJcbiAgICAgIHN5c3RlbVByb21wdDogJycsXHJcbiAgICB9LFxyXG4gICAgY29kZXg6IHtcclxuICAgICAgbGFiZWw6ICdDb2RleCcsXHJcbiAgICAgIGVuZHBvaW50OiAnJyxcclxuICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgbW9kZWw6ICcnLFxyXG4gICAgICBzeXN0ZW1Qcm9tcHQ6ICcnLFxyXG4gICAgfSxcclxuICAgIG9wZW5jb2RlOiB7XHJcbiAgICAgIGxhYmVsOiAnT3BlbkNvZGUnLFxyXG4gICAgICBlbmRwb2ludDogJycsXHJcbiAgICAgIGFwaUtleTogJycsXHJcbiAgICAgIG1vZGVsOiAnJyxcclxuICAgICAgc3lzdGVtUHJvbXB0OiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gRGFzaGJvYXJkIHNlY3Rpb24gdmlzaWJpbGl0eVxyXG4gIHNob3dUb2RheVRhc2tzOiB0cnVlLFxyXG4gIHNob3dJbmJveEZpbGVzOiB0cnVlLFxyXG4gIHNob3dFbmdpbmVTdGF0ZTogdHJ1ZSxcclxuICBzaG93V2Vla2x5Q2hhcnQ6IHRydWUsXHJcbiAgc2hvd1Byb2plY3RDYXJkczogdHJ1ZSxcclxuICBzaG93UmVjZW50QWN0aXZpdHk6IHRydWUsXHJcbiAgc2hvd1ZhdWx0U3RhdHM6IHRydWUsXHJcbiAgc2hvd05hdjogdHJ1ZSxcclxuXHJcbiAgLy8gRGF0YSBsaW1pdHNcclxuICBtYXhSZWNlbnRJdGVtczogOCxcclxuICBtYXhUYXNrSXRlbXM6IDEyLFxuICBtYXhJbmJveEl0ZW1zOiA2LFxuXG4gIC8vIFRhYiBtYW5hZ2VyIHN0YXRlIChtdWx0aS1jaGF0IHRhYnMpXG4gIHRhYk1hbmFnZXJTdGF0ZToge1xuICAgIHRhYnM6IFtcbiAgICAgIHsgaWQ6ICd0YWItZGVmYXVsdCcsIHRpdGxlOiAnQ2hhdCAxJywgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cbiAgICBdLFxuICAgIGFjdGl2ZVRhYklkOiAndGFiLWRlZmF1bHQnLFxuICB9LFxufTtcclxuXHJcbi8qKiBCdWlsdC1pbiBwcm92aWRlciBwcmVzZXRzIGZvciBxdWljayBmaWxsICovXHJcbmNvbnN0IFBST1ZJREVSX1BSRVNFVFMgPSB7XHJcbiAgY2xhdWRlOiB7XHJcbiAgICBlbmRwb2ludDogJ2h0dHBzOi8vYXBpLmFudGhyb3BpYy5jb20vdjEnLFxyXG4gICAgbW9kZWw6ICdjbGF1ZGUtc29ubmV0LTQtMjAyNTA1MTQnLFxyXG4gICAgbW9kZWxzOiBbJ2NsYXVkZS1zb25uZXQtNC0yMDI1MDUxNCcsICdjbGF1ZGUtMy01LXNvbm5ldC0yMDI0MTAyMicsICdjbGF1ZGUtMy1vcHVzLTIwMjQwMjI5JywgJ2NsYXVkZS0zLTUtaGFpa3UtMjAyNDEwMjInXSxcclxuICB9LFxyXG4gIGNvZGV4OiB7XHJcbiAgICBlbmRwb2ludDogJycsXHJcbiAgICBtb2RlbDogJycsXHJcbiAgICBtb2RlbHM6IFtdLFxyXG4gIH0sXHJcbiAgb3BlbmNvZGU6IHtcclxuICAgIGVuZHBvaW50OiAnJyxcclxuICAgIG1vZGVsOiAnJyxcclxuICAgIG1vZGVsczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmNsYXNzIENvY2twaXRTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgY29uc3RydWN0b3IoYXBwLCBwbHVnaW4pIHtcclxuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSAnZ2VuZXJhbCc7IC8vICdnZW5lcmFsJyB8IHByb3ZpZGVySWRcclxuICB9XHJcblxyXG4gIF90KGtleSwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gdChrZXksIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXkoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICBjb25zdCBwcm92aWRlcklkcyA9IFsnY2xhdWRlJywgJ2NvZGV4JywgJ29wZW5jb2RlJ107XHJcbiAgICBjb25zdCB0YWJJZHMgPSBbJ2dlbmVyYWwnLCAuLi5wcm92aWRlcklkc107XHJcblxyXG4gICAgLy8gVGFiIGJhclxyXG4gICAgY29uc3QgdGFiQmFyID0gY29udGFpbmVyRWwuY3JlYXRlRGl2KHsgY2xzOiAna29zLWNvY2twaXQtc2V0dGluZ3MtdGFicycgfSk7XHJcbiAgICBjb25zdCB0YWJCdXR0b25zID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgdGFiQ29udGVudHMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgaWYgKCF0YWJJZHMuaW5jbHVkZXModGhpcy5hY3RpdmVUYWIpKSB0aGlzLmFjdGl2ZVRhYiA9ICdnZW5lcmFsJztcclxuXHJcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRhYklkcykge1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGlkID09PSAnZ2VuZXJhbCdcclxuICAgICAgICA/ICdHZW5lcmFsJ1xyXG4gICAgICAgIDogKHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1tpZF0/LmxhYmVsIHx8IGlkKTtcclxuICAgICAgY29uc3QgYnRuID0gdGFiQmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7XHJcbiAgICAgICAgY2xzOiAna29zLWNvY2twaXQtc2V0dGluZ3MtdGFiJyArIChpZCA9PT0gdGhpcy5hY3RpdmVUYWIgPyAnIGtvcy1jb2NrcGl0LXNldHRpbmdzLXRhYi0tYWN0aXZlJyA6ICcnKSxcclxuICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IGlkO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGlkIG9mIHRhYklkcykge1xyXG4gICAgICAgICAgdGFiQnV0dG9ucy5nZXQodGlkKT8udG9nZ2xlQ2xhc3MoJ2tvcy1jb2NrcGl0LXNldHRpbmdzLXRhYi0tYWN0aXZlJywgdGlkID09PSBpZCk7XHJcbiAgICAgICAgICB0YWJDb250ZW50cy5nZXQodGlkKT8udG9nZ2xlQ2xhc3MoJ2tvcy1jb2NrcGl0LXNldHRpbmdzLXRhYi1jb250ZW50LS1hY3RpdmUnLCB0aWQgPT09IGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0YWJCdXR0b25zLnNldChpZCwgYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUYWIgY29udGVudCBjb250YWluZXJzXHJcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRhYklkcykge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gY29udGFpbmVyRWwuY3JlYXRlRGl2KHtcclxuICAgICAgICBjbHM6ICdrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItY29udGVudCcgKyAoaWQgPT09IHRoaXMuYWN0aXZlVGFiID8gJyBrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItY29udGVudC0tYWN0aXZlJyA6ICcnKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRhYkNvbnRlbnRzLnNldChpZCwgY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIGVhY2ggdGFiXHJcbiAgICB0aGlzLnJlbmRlckdlbmVyYWxUYWIodGFiQ29udGVudHMuZ2V0KCdnZW5lcmFsJykpO1xyXG4gICAgZm9yIChjb25zdCBwcm92aWRlcklkIG9mIHByb3ZpZGVySWRzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyUHJvdmlkZXJUYWIodGFiQ29udGVudHMuZ2V0KHByb3ZpZGVySWQpLCBwcm92aWRlcklkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyYWxUYWIoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5nZW5lcmFsVGFiJykgfSk7XHJcblxyXG4gICAgLy8gTGFuZ3VhZ2VcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2UnKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJykpXHJcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT4ge1xyXG4gICAgICAgIGQuYWRkT3B0aW9uKCd6aC1jbicsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaENOJykpXHJcbiAgICAgICAgIC5hZGRPcHRpb24oJ2VuJywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ0VuJykpXHJcbiAgICAgICAgIC5hZGRPcHRpb24oJ3poLXR3JywgdGhpcy5fdCgnc2V0dGluZ3MubGFuZ1poVFcnKSlcclxuICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSlcclxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubG9jYWxlID0gdjtcclxuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIEF1dG8tb3BlblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnKSlcclxuICAgICAgLmFkZFRvZ2dsZSgodCkgPT5cclxuICAgICAgICB0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b09wZW4gPSB2O1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBBY3RpdmUgcHJvdmlkZXIgc2VsZWN0b3JcclxuICAgIGNvbnN0IHByb3ZpZGVySWRzID0gWydjbGF1ZGUnLCAnY29kZXgnLCAnb3BlbmNvZGUnXTtcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXInKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXJEZXNjJykpXHJcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcGlkIG9mIHByb3ZpZGVySWRzKSB7XHJcbiAgICAgICAgICBkLmFkZE9wdGlvbihwaWQsIHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1twaWRdPy5sYWJlbCB8fCBwaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyIHx8ICdjbGF1ZGUnKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlUHJvdmlkZXIgPSB2O1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIERhc2hib2FyZCBzZWN0aW9uc1xyXG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZGFzaGJvYXJkJykgfSk7XHJcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnKSwgY2xzOiAnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJyB9KTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IFtcclxuICAgICAgeyBrZXk6ICdzaG93VG9kYXlUYXNrcycsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzJyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzRGVzYycpIH0sXHJcbiAgICAgIHsga2V5OiAnc2hvd1Byb2plY3RDYXJkcycsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25Qcm9qZWN0cycpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHNEZXNjJykgfSxcclxuICAgICAgeyBrZXk6ICdzaG93VmF1bHRTdGF0cycsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzJyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzRGVzYycpIH0sXHJcbiAgICAgIHsga2V5OiAnc2hvd1JlY2VudEFjdGl2aXR5JywgbmFtZTogdGhpcy5fdCgnc2V0dGluZ3Muc2VjdGlvblJlY2VudEFjdGl2aXR5JyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eURlc2MnKSB9LFxyXG4gICAgICB7IGtleTogJ3Nob3dOYXYnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uTmF2JyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25OYXZEZXNjJykgfSxcclxuICAgICAgeyBrZXk6ICdzaG93SW5ib3hGaWxlcycsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzJyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzRGVzYycpIH0sXHJcbiAgICAgIHsga2V5OiAnc2hvd0VuZ2luZVN0YXRlJywgbmFtZTogdGhpcy5fdCgnc2V0dGluZ3Muc2VjdGlvbkVuZ2luZVN0YXRlJyksIGRlc2M6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZURlc2MnKSB9LFxyXG4gICAgICB7IGtleTogJ3Nob3dXZWVrbHlDaGFydCcsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydCcpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnREZXNjJykgfSxcclxuICAgIF07XHJcblxyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBrZXksIG5hbWUsIGRlc2MgfSkgPT4ge1xyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXIpLnNldE5hbWUobmFtZSkuc2V0RGVzYyhkZXNjKS5hZGRUb2dnbGUoKHQpID0+XHJcbiAgICAgICAgdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5nc1trZXldKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSA9IHY7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGF0YSBsaW1pdHNcclxuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhdGFMaW1pdHMnKSB9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLm1heFJlY2VudCcpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnREZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxyXG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoJzgnKS5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4UmVjZW50SXRlbXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4UmVjZW50SXRlbXMgPSBNYXRoLm1heCgzLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDgpKTtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrcycpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhUYXNrc0Rlc2MnKSlcclxuICAgICAgLmFkZFRleHQoKHQpID0+XHJcbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcignMTInKS5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4VGFza0l0ZW1zKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcyA9IE1hdGgubWF4KDEsIE1hdGgubWluKDIwLCBOdW1iZXIodikgfHwgMTIpKTtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveCcpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdzZXR0aW5ncy5tYXhJbmJveERlc2MnKSlcclxuICAgICAgLmFkZFRleHQoKHQpID0+XHJcbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcignNicpLnNldFZhbHVlKFN0cmluZyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heEluYm94SXRlbXMgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDYpKTtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gQWJvdXRcclxuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmFib3V0JykgfSk7XHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgZGVzYy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbkRlc2MnKSB9KTtcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcikuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy52ZXJzaW9uJykpLnNldERlc2MoZGVzYyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJQcm92aWRlclRhYihjb250YWluZXIsIHByb3ZpZGVySWQpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJvdmlkZXJzW3Byb3ZpZGVySWRdO1xyXG4gICAgY29uc3QgcHJlc2V0ID0gUFJPVklERVJfUFJFU0VUU1twcm92aWRlcklkXTtcclxuICAgIGNvbnN0IGxhYmVsID0gcHJvdmlkZXI/LmxhYmVsIHx8IHByb3ZpZGVySWQ7XHJcblxyXG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgncHJvdmlkZXIubGFiZWxTZXR0aW5ncycsIHsgbGFiZWw6IGxhYmVsIH0pIH0pO1xyXG5cclxuICAgIC8vIEFQSSBFbmRwb2ludFxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdwcm92aWRlci5lbmRwb2ludCcpKVxyXG4gICAgICAuc2V0RGVzYyhwcmVzZXQ/LmVuZHBvaW50ID8gdGhpcy5fdCgncHJvdmlkZXIuZGVmYXVsdEVuZHBvaW50JywgeyBlbmRwb2ludDogcHJlc2V0LmVuZHBvaW50IH0pIDogdGhpcy5fdCgncHJvdmlkZXIuZW5kcG9pbnREZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxyXG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIocHJlc2V0Py5lbmRwb2ludCB8fCAnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MScpXHJcbiAgICAgICAgIC5zZXRWYWx1ZShwcm92aWRlcj8uZW5kcG9pbnQgfHwgJycpXHJcbiAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1twcm92aWRlcklkXS5lbmRwb2ludCA9IHYudHJpbSgpO1xyXG4gICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIEFQSSBLZXlcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgncHJvdmlkZXIuYXBpS2V5JykpXHJcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3Byb3ZpZGVyLmFwaUtleURlc2MnKSlcclxuICAgICAgLmFkZFRleHQoKHQpID0+IHtcclxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKCdzay0uLi4nKVxyXG4gICAgICAgICAuc2V0VmFsdWUocHJvdmlkZXI/LmFwaUtleSB8fCAnJylcclxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJvdmlkZXJzW3Byb3ZpZGVySWRdLmFwaUtleSA9IHYudHJpbSgpO1xyXG4gICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIE1vZGVsXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLm1vZGVsJykpXHJcbiAgICAgIC5zZXREZXNjKHByZXNldD8ubW9kZWxzPy5sZW5ndGggPyB0aGlzLl90KCdwcm92aWRlci5wcmVzZXRNb2RlbHMnLCB7IG1vZGVsczogcHJlc2V0Lm1vZGVscy5qb2luKCcsICcpIH0pIDogdGhpcy5fdCgncHJvdmlkZXIubW9kZWxEZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxyXG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIocHJlc2V0Py5tb2RlbCB8fCAnZ3B0LTRvJylcclxuICAgICAgICAgLnNldFZhbHVlKHByb3ZpZGVyPy5tb2RlbCB8fCBwcmVzZXQ/Lm1vZGVsIHx8ICcnKVxyXG4gICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF0ubW9kZWwgPSB2LnRyaW0oKTtcclxuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBTeXN0ZW0gUHJvbXB0XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLnN5c3RlbVByb21wdCcpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdwcm92aWRlci5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcicpKVxyXG4gICAgICAuYWRkVGV4dEFyZWEoKHQpID0+IHtcclxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKHRoaXMuX3QoJ3Byb3ZpZGVyLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJykpXHJcbiAgICAgICAgIC5zZXRWYWx1ZShwcm92aWRlcj8uc3lzdGVtUHJvbXB0IHx8ICcnKVxyXG4gICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF0uc3lzdGVtUHJvbXB0ID0gdi50cmltKCk7XHJcbiAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIHQuaW5wdXRFbC5yb3dzID0gNDtcclxuICAgICAgICB0LmlucHV0RWwuY29scyA9IDYwO1xyXG4gICAgICAgIHQuaW5wdXRFbC5hZGRDbGFzcygna29zLWNvY2twaXQtdGV4dGFyZWEnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MsIFBST1ZJREVSX1BSRVNFVFMgfTtcclxuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwbHVnaW4gZW50cnkgcG9pbnRcblxuY29uc3QgeyBQbHVnaW4gfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG5jb25zdCB7IENvY2twaXRWaWV3LCBWSUVXX1RZUEVfQ09DS1BJVCB9ID0gcmVxdWlyZSgnLi9jb2NrcGl0LXZpZXcnKTtcbmNvbnN0IHsgQ29ja3BpdFNldHRpbmdUYWIsIERFRkFVTFRfU0VUVElOR1MgfSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MtdGFiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgS29zQ29ja3BpdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhWSUVXX1RZUEVfQ09DS1BJVCwgKGxlYWYpID0+IG5ldyBDb2NrcGl0VmlldyhsZWFmLCB0aGlzKSk7XG5cbiAgICAvLyBSaWJib246IERhc2hib2FyZFxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignZ2F1Z2UnLCAnS09TIENvY2twaXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdob21lJyB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJpYmJvbjogQUkgQ2hhdFxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignYm90JywgJ0tPUyBBSSBDaGF0JywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnY2hhdCcgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21tYW5kOiBEYXNoYm9hcmRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdPcGVuIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdob21lJyB9KSxcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmQ6IEFJIENoYXRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLWtvcy1haS1jaGF0JyxcbiAgICAgIG5hbWU6ICdPcGVuIEtPUyBBSSBDaGF0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdjaGF0JyB9KSxcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmQ6IFJlZnJlc2hcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZWZyZXNoLWtvcy1jb2NrcGl0JyxcbiAgICAgIG5hbWU6ICdSZWZyZXNoIEtPUyBDb2NrcGl0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hDb2NrcGl0KCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENvY2twaXRTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnNldHRpbmdzLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2hvbWUnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb3BlbkNvY2twaXQob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG5cbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgd29ya3NwYWNlLnJldmVhbExlYWYoZXhpc3RpbmdbMF0pO1xuICAgICAgY29uc3QgdmlldyA9IGV4aXN0aW5nWzBdLnZpZXc7XG4gICAgICBpZiAodmlldykge1xuICAgICAgICBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2NoYXQnICYmIHR5cGVvZiB2aWV3LnN3aXRjaFBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2NoYXQnLCBkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2hvbWUnICYmIHR5cGVvZiB2aWV3LnN3aXRjaFBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2hvbWUnLCBkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZpZXcucmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKHRydWUpO1xuICAgIGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHtcbiAgICAgIHR5cGU6IFZJRVdfVFlQRV9DT0NLUElULFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQWZ0ZXIgdmlldyBpcyBzZXQsIHN3aXRjaCB0byByZXF1ZXN0ZWQgcGFuZWxcbiAgICBpZiAob3B0aW9ucy5wYW5lbCA9PT0gJ2NoYXQnKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcuc3dpdGNoUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpLnRoZW4oKGRhdGEpID0+IHZpZXcuc3dpdGNoUGFuZWwoJ2NoYXQnLCBkYXRhKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG4gIH1cblxuICBhc3luYyBjb2xsZWN0RGF0YSgpIHtcbiAgICAvLyBNaW5pbWFsIGRhdGEgY29sbGVjdG9yIGZvciBwYW5lbCBzd2l0Y2hpbmdcbiAgICBjb25zdCB7IGdldFRvZGF5U3RhdGUsIGdldERhc2hib2FyZFN0YXRzLCBsaXN0UHJvamVjdHMgfSA9IHJlcXVpcmUoJy4vaG9tZS1zZXJ2aWNlJyk7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgW3RvZGF5LCBwcm9qZWN0cywgc3RhdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0VG9kYXlTdGF0ZShhcHApLmNhdGNoKCgpID0+IG51bGwpLFxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcbiAgICAgIGdldERhc2hib2FyZFN0YXRzKGFwcCkuY2F0Y2goKCkgPT4gKHsgdG90YWxOb3RlczogMCwgdG9kYXlOZXc6IDAsIHN0YXRzOiB7fSB9KSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cyB9O1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaENvY2twaXQoKSB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCk7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXdhaXQgdmlldy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBzYXZlZCk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLnJlZnJlc2hDb2NrcGl0KCk7XG4gIH1cblxuICBvbnVubG9hZCgpIHtcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKS5mb3JFYWNoKChsZWFmKSA9PiB7XG4gICAgICBsZWFmLmRldGFjaCgpO1xuICAgIH0pO1xuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQSxrQkFBQUEsVUFBQUMsU0FBQTtBQUdBLFFBQU0sVUFBVTtBQUFBLE1BQ2QsU0FBUztBQUFBO0FBQUEsUUFFUCxZQUFZO0FBQUEsUUFDWixlQUFlO0FBQUEsUUFDZixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUE7QUFBQSxRQUdiLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLGdCQUFnQjtBQUFBLFFBQ2hCLGtCQUFrQjtBQUFBO0FBQUEsUUFHbEIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUE7QUFBQSxRQUd0QixXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUE7QUFBQSxRQUdYLG9CQUFvQjtB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LFFBRWIsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLFFBRWQsZ0JBQWdCO0FBQUEsUUFDaEIsa0JBQWtCO0FBQUEsUUFDbEIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsd0JBQXdCO0FBQUEsUUFDeEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIscUJBQXFCO0FBQUEsUUFFckIsa0JBQWtCO0FBQUEsUUFDbEIsbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWdCO0FBQUEsUUFDaEIsb0JBQW9CO0FBQUEsUUFDcEIsaUJBQWlCO0FBQUEsUUFDakIsMEJBQTBCO0FBQUEsUUFFMUIsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsZ0JBQWdCO0FBQUEsUUFDaEIsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YscUJBQXFCO0FBQUEsUUFDckIsaUJBQWlCO0FBQUEsUUFDakIsb0JBQW9CO0FBQUEsUUFDcEIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFFakIsZ0JBQWdCO0FBQUEsUUFDaEIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFFdEIsY0FBYztBQUFBLFFBRWQsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFFaEIsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBRWIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIsdUJBQXVCO0FBQUEsUUFDdkIsbUJBQW1CO0FBQUEsUUFDbkIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIsc0JBQXNCO0FBQUEsUUFDdEIsd0JBQXdCO0FBQUEsUUFDeEIsbUJBQW1CO0FBQUEsUUFDbkIsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLFFBQ2QscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFFdEIsa0JBQWtCO0FBQUEsUUFDbEIsMkJBQTJCO0FBQUEsUUFDM0IseUJBQXlCO0FBQUEsUUFDekIsdUJBQXVCO0FBQUEsUUFDdkIsOEJBQThCO0FBQUEsUUFDOUIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIsd0JBQXdCO0FBQUEsUUFDeEIsdUJBQXVCO0FBQUEsUUFDdkIsMEJBQTBCO0FBQUEsUUFDMUIsb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsd0JBQXdCO0FBQUEsUUFFeEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsMkJBQTJCO0FBQUEsUUFDM0Isd0JBQXdCO0FBQUEsUUFDeEIsNEJBQTRCO0FBQUEsUUFDNUIsd0JBQXdCO0FBQUEsUUFDeEIsMkJBQTJCO0FBQUEsUUFDM0Isd0JBQXdCO0FBQUEsUUFDeEIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsMEJBQTBCO0FBQUEsUUFDMUIsd0JBQXdCO0FBQUEsUUFDeEIsc0JBQXNCO0FBQUEsUUFDdEIsNEJBQTRCO0FBQUEsUUFDNUIsb0JBQW9CO0FBQUEsUUFDcEIsbUJBQW1CO0FBQUEsUUFFbkIsc0JBQXNCO0FBQUEsUUFDdEIsY0FBYztBQUFBLFFBRWQsbUJBQW1CO0FBQUEsUUFDbkIsb0JBQW9CO0FBQUEsUUFFcEIsWUFBWTtBQUFBLFFBQ1osa0JBQWtCO0FBQUEsUUFDbEIsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsYUFBYTtBQUFBLFFBQ2IsaUJBQWlCO0FBQUEsUUFDakIsZ0JBQWdCO0FBQUEsUUFDaEIsb0JBQW9CO0FBQUEsUUFDcEIsbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFDeEIsb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFFeEIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osbUJBQW1CO0FBQUEsUUFDbkIsOEJBQThCO0FBQUEsUUFFOUIsbUJBQW1CO0FBQUEsUUFDbkIsa0JBQWtCO0FBQUEsUUFDbEIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIsbUJBQW1CO0FBQUEsUUFDbkIsa0JBQWtCO0FBQUEsUUFDbEIseUJBQXlCO0FBQUEsUUFDekIsb0NBQW9DO0FBQUEsUUFDcEMsMkJBQTJCO0FBQUEsUUFDM0IsK0JBQStCO0FBQUEsUUFDL0IscUJBQXFCO0FBQUEsUUFDckIsMEJBQTBCO0FBQUEsUUFDMUIsNEJBQTRCO0FBQUEsUUFDNUIseUJBQXlCO0FBQUEsUUFDekIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFFekIsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsUUFFaEIsa0JBQWtCO0FBQUEsUUFDbEIsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIsa0JBQWtCO0FBQUEsUUFDbEIsc0JBQXNCO0FBQUEsUUFDdEIsdUJBQXVCO0FBQUEsUUFDdkIsd0JBQXdCO0FBQUEsUUFDeEIsbUJBQW1CO0FBQUEsUUFDbkIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIseUJB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LENBQUMsR0FBRyxrQkFBa0IsS0FBSztBQUFBLEVBQzNEO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQ2pDLFNBQUssZUFBZTtBQUFBLEVBQ3RCO0FBQUEsRUFFQSxXQUFXO0FBQ1QsU0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ3RFLFdBQUssT0FBTztBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiVklFV19UWVBFX0NPQ0tQSVQiLCAiQ29ja3BpdFZpZXciLCAidCIsICJ0MiIsICJ0ZXh0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkRFRkFVTFRfU0VUVElOR1MiLCAiQ29ja3BpdFNldHRpbmdUYWIiLCAidCIsICJkZXNjIl0KfQo=
