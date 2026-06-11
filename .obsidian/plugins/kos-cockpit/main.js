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
      // ──────────────── Font Size ────────────────
      _applyFontSize() {
        var size = this.settings?.fontSize || "medium";
        var root = this.contentEl;
        if (!root) return;
        root.removeClass("font-small");
        root.removeClass("font-medium");
        root.removeClass("font-large");
        root.addClass("font-" + size);
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
      // ──────────────── Tab Bar ────────────────
      _renderTabBar(container) {
        const tabs = [
          { id: "home", icon: "\u{1F4CA}", label: this._t("tab.dashboard") },
          { id: "chat", icon: "\u{1F916}", label: this._t("ai.title") },
          { id: "life", icon: "\u{1F9EC}", label: this._t("tab.life") },
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
      }
      // Widget: Activity Feed
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
      // ──────────────── Life+AI Panel ────────────────
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
      // ──────────────── Pipeline Panel ────────────────
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
      // ──────────────── Knowledge Garden Panel ────────────────
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
      // ──────────────── Settings Panel (inline) ────────────────
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
      // ──────────────── Shared Widget Helpers ────────────────
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
          this.plugin.saveData(this.plugin.settings);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xvY2FsZS5qcyIsICJzcmMvYWktY2hhdC5qcyIsICJzcmMvdXRpbHMuanMiLCAic3JjL3Byb2plY3Qtc2VydmljZS5qcyIsICJzcmMvaG9tZS1zZXJ2aWNlLmpzIiwgInNyYy9oZWFsdGgtc2VydmljZS5qcyIsICJzcmMvcGlwZWxpbmUtc2VydmljZS5qcyIsICJzcmMvY29ja3BpdC12aWV3LmpzIiwgInNyYy9zZXR0aW5ncy10YWIuanMiLCAic3JjL21haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBpMThuIGxvY2FsZSBkaWN0aW9uYXJ5XHJcbi8vIEtleXMgYXJlIG9yZ2FuaXplZCBieSBVSSBzZWN0aW9uLCB2YWx1ZXMgYXJlIGZsYXQgc3RyaW5ncyB3aXRoIHtwbGFjZWhvbGRlcn0gc3VwcG9ydC5cclxuXHJcbmNvbnN0IExPQ0FMRVMgPSB7XHJcbiAgJ3poLWNuJzoge1xyXG4gICAgLy8gR2VuZXJhbFxyXG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcclxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdTUyQTBcdThGN0QgS09TIENvY2twaXQuLi4nLFxyXG4gICAgJ2FwcC5lcnJvcic6ICdcdTUyQTBcdThGN0RcdTRFRUFcdTg4NjhcdTc2RDhcdTY1RjZcdTUxRkFcdTk1MTlcdTMwMDInLFxyXG4gICAgJ2FwcC5yZXRyeSc6ICdcdTkxQ0RcdThCRDUnLFxyXG5cclxuICAgIC8vIFBhbmVsIGRpc3BsYXkgbmFtZXMgKGdldERpc3BsYXlUZXh0KVxyXG4gICAgJ3BhbmVsLmhvbWUnOiAnS09TIENvY2twaXQnLFxyXG4gICAgJ3BhbmVsLmNoYXQnOiAnS09TIEFJIENoYXQnLFxyXG4gICAgJ3BhbmVsLmxpZmUnOiAnTGlmZStBSScsXHJcbiAgICAncGFuZWwucGlwZWxpbmUnOiAnUGlwZWxpbmUnLFxyXG4gICAgJ3BhbmVsLmdhcmRlbic6ICdcdTc3RTVcdThCQzZcdTgyQjFcdTU2RUQnLFxyXG4gICAgJ3BhbmVsLnNldHRpbmdzJzogJ1x1OEJCRVx1N0Y2RScsXHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICAnaGVhZGVyLmRhdGVGb3JtYXQnOiAnWVlZWS1NTS1ERCcsXHJcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnXHU2QkNGXHU2NUU1XHU3QjE0XHU4QkIwIFt7c3RhdHVzfV0nLFxyXG4gICAgJ2hlYWRlci5ub3RlQ3JlYXRlZCc6ICdcdTVERjJcdTUyMUJcdTVFRkEnLFxyXG4gICAgJ2hlYWRlci5ub3RlTm90Q3JlYXRlZCc6ICdcdTY3MkFcdTUyMUJcdTVFRkEnLFxyXG4gICAgJ2hlYWRlci50b2RheUZvY3VzJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNjoge2ZvY3VzfScsXHJcbiAgICAnaGVhZGVyLmZvY3VzTm90U2V0JzogJyhcdTY3MkFcdThCQkVcdTVCOUEpJyxcclxuXHJcbiAgICAvLyBEYXkgbmFtZXNcclxuICAgICdkYXkuc3VuJzogJ1x1NjVFNScsXHJcbiAgICAnZGF5Lm1vbic6ICdcdTRFMDAnLFxyXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcclxuICAgICdkYXkud2VkJzogJ1x1NEUwOScsXHJcbiAgICAnZGF5LnRodSc6ICdcdTU2REInLFxyXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcclxuICAgICdkYXkuc2F0JzogJ1x1NTE2RCcsXHJcblxyXG4gICAgLy8gUXVpY2sgYWN0aW9uc1xyXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnXHU4OUM0XHU1MjEyXHU0RUNBXHU1OTI5JyxcclxuICAgICdhY3Rpb24uY2FwdHVyZSc6ICdcdTVGRUJcdTkwMUZcdTYzNTVcdTgzQjcnLFxyXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODdFJyxcclxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdcdTY1QjBcdTVFRkFcdTk4NzlcdTc2RUUnLFxyXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcclxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QkJFXHU3RjZFJyxcclxuICAgICdhY3Rpb24uYWlDaGF0JzogJ0FJIENoYXQnLFxyXG5cclxuICAgIC8vIFRvZGF5IFRhc2tzXHJcbiAgICAndGFzay50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyQTEnLFxyXG4gICAgJ3Rhc2sucHJvZ3Jlc3MnOiAne2RvbmV9L3t0b3RhbH0gKHtyYXRlfSUpJyxcclxuICAgICd0YXNrLm5vbmUnOiAnXHU2NjgyXHU2NUUwXHU0RUZCXHU1MkExXHUzMDAyJyxcclxuICAgICd0YXNrLmRhaWx5TWlzc2luZyc6ICdcdTRFQ0FcdTY1RTVcdTdCMTRcdThCQjBcdTY3MkFcdTUyMUJcdTVFRkFcdTMwMDJcdTcwQjlcdTUxRkIgW1x1ODlDNFx1NTIxMlx1NEVDQVx1NTkyOV0gXHU1MjFCXHU1RUZBXHUzMDAyJyxcclxuXHJcbiAgICAvLyBQcm9qZWN0c1xyXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnXHU2RDNCXHU4REMzXHU5ODc5XHU3NkVFJyxcclxuICAgICdwcm9qZWN0LmVtcHR5JzogJ1x1NjY4Mlx1NjVFMFx1NkQzQlx1OERDM1x1OTg3OVx1NzZFRVx1MzAwMicsXHJcbiAgICAncHJvamVjdC5uZXcnOiAnXHU1MjFCXHU1RUZBXHU2NUIwXHU5ODc5XHU3NkVFJyxcclxuXHJcbiAgICAvLyBWYXVsdCBzdGF0c1xyXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEJDNlx1NUU5M1x1N0VERlx1OEJBMScsXHJcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTYwM0JcdTdCMTRcdThCQjAnLFxyXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ1x1NkQzQlx1OERDM1x1OTg3OVx1NzZFRScsXHJcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcclxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1NjJFMycsXHJcblxyXG4gICAgLy8gUmVjZW50IGFjdGl2aXR5XHJcbiAgICAncmVjZW50LnRpdGxlJzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOCcsXHJcbiAgICAncmVjZW50LmVtcHR5JzogJ1x1NjY4Mlx1NjVFMFx1NkQzQlx1NTJBOFx1MzAwMicsXHJcblxyXG4gICAgLy8gTmF2aWdhdGlvblxyXG4gICAgJ25hdi50aXRsZSc6ICdcdTRFMDlcdTY1MkZcdTY3RjEgXHUwMEI3IFx1NUJGQ1x1ODIyQScsXHJcblxyXG4gICAgLy8gSW5ib3hcclxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxyXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXHJcblxyXG4gICAgLy8gRW5naW5lIHN0YXRlXHJcbiAgICAnZW5naW5lLnRpdGxlJzogJ1x1NUYxNVx1NjRDRVx1NzJCNlx1NjAwMScsXHJcbiAgICAnZW5naW5lLmNvbnRyb2wnOiAnXHU1RjE1XHU2NENFXHU2M0E3XHU1MjM2JyxcclxuICAgICdlbmdpbmUuc3RhdHVzUmVhZHknOiAnXHU1QzMxXHU3RUVBJyxcclxuICAgICdlbmdpbmUuc3RhdHVzTmVlZHNXb3JrJzogJ1x1OTcwMFx1NTkwNFx1NzQwNicsXHJcbiAgICAnZW5naW5lLnN0YXR1c1N0YW5kYnknOiAnXHU1Rjg1XHU1NDdEJyxcclxuICAgICdlbmdpbmUuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxXHU2NTcwXHU2MzZFXHUzMDAyJyxcclxuXHJcbiAgICAvLyBXZWVrbHkgY2hhcnRcclxuICAgICd3ZWVrbHkudGl0bGUnOiAnXHU2NzJDXHU1NDY4XHU4QkIwXHU1RjU1XHU1MjA2XHU1RTAzJyxcclxuICAgICd3ZWVrbHkuZW1wdHknOiAnXHU2NzJDXHU1NDY4XHU2NjgyXHU2NUUwXHU2NUU1XHU4QkIwXHU4QkIwXHU1RjU1XHUzMDAyJyxcclxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gXHU2NzYxJyxcclxuXHJcbiAgICAvLyBQaXBlbGluZSBmbG93XHJcbiAgICAncGlwZWxpbmUuaW5ib3gnOiAnXHU2NTM2XHU0RUY2XHU3QkIxJyxcclxuICAgICdwaXBlbGluZS50cmlhZ2UnOiAnXHU1MjA2XHU2MkUzJyxcclxuICAgICdwaXBlbGluZS5yYXcnOiAnXHU1MzlGXHU1OUNCJyxcclxuICAgICdwaXBlbGluZS5jb21waWxlJzogJ1x1N0YxNlx1OEJEMScsXHJcbiAgICAncGlwZWxpbmUud2lraSc6ICdcdTc3RTVcdThCQzZcdTVFOTMnLFxyXG4gICAgJ3BpcGVsaW5lLmNsaWNrTmF2aWdhdGUnOiAnXHU3MEI5XHU1MUZCXHU1M0VGXHU1QkZDXHU4MjJBJyxcclxuXHJcbiAgICAvLyBUb2RheSBmb2N1c1xyXG4gICAgJ3RvZGF5LnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1ODA1QVx1NzEyNicsXHJcbiAgICAndG9kYXkudGFza3MnOiAnXHU0RUZCXHU1MkExJyxcclxuICAgICd0b2RheS5zdHJlYWsnOiAnXHU4RkRFXHU3RUVEJyxcclxuICAgICd0b2RheS50b2RheSc6ICdcdTRFQ0FcdTU5MjknLFxyXG4gICAgJ3RvZGF5LmRhaWx5JzogJ1x1NkJDRlx1NjVFNScsXHJcbiAgICAndG9kYXkud2Vla2x5VG90YWwnOiAnXHU2NzJDXHU1NDY4XHU1MTcxIHtjb3VudH0gXHU2NzYxJyxcclxuICAgICd0b2RheS5qb3VybmFsJzogJ1x1NEVDQVx1NjVFNVx1NjVFNVx1OEJCMDoge2NvdW50fSBcdTY3NjEnLFxyXG4gICAgJ3RvZGF5LmNyZWF0ZU5vdGUnOiAnXHU1MjFCXHU1RUZBXHU0RUNBXHU2NUU1XHU3QjE0XHU4QkIwJyxcclxuICAgICd0b2RheS5kb25lJzogJ0RvbmUnLFxyXG4gICAgJ3RvZGF5LnBlbmRpbmcnOiAnUGVuZGluZycsXHJcblxyXG4gICAgLy8gR3Jvd3RoIC8gR2FyZGVuXHJcbiAgICAnZ3Jvd3RoLnRpdGxlJzogJ1x1NzdFNVx1OEJDNlx1ODJCMVx1NTZFRCcsXHJcbiAgICAnZ3Jvd3RoLnRvZGF5Sm91cm5hbCc6ICdcdTRFQ0FcdTY1RTVcdTY1RTVcdThCQjA6IHtjb3VudH0gXHU2NzYxJyxcclxuICAgICdncm93dGgud2Vla2x5VG90YWwnOiAnXHU2NzJDXHU1NDY4XHU1MTcxIHtjb3VudH0gXHU2NzYxXHU4QkIwXHU1RjU1JyxcclxuXHJcbiAgICAvLyBGZWVkXHJcbiAgICAnZmVlZC50aXRsZSc6ICdcdTZEM0JcdTUyQThcdTZENDEnLFxyXG5cclxuICAgIC8vIEhlYWx0aFxyXG4gICAgJ2hlYWx0aC50aXRsZSc6ICdcdTc3RTVcdThCQzZcdTVFOTNcdTUwNjVcdTVFQjcnLFxyXG4gICAgJ2hlYWx0aC5zY29yZSc6ICd7c2NvcmV9LzEwMCcsXHJcblxyXG4gICAgLy8gUXVpY2sgTGF1bmNoXHJcbiAgICAnbGF1bmNoLnRpdGxlJzogJ1x1NUZFQlx1OTAxRlx1NTQyRlx1NTJBOCcsXHJcblxyXG4gICAgLy8gSG90IGNvbnRleHRcclxuICAgICdob3QudGl0bGUnOiAnXHU3MEVEXHU3MEI5XHU1MkE4XHU2MDAxJyxcclxuICAgICdob3QuZW1wdHknOiAnXHU2NjgyXHU2NUUwXHU3MEVEXHU3MEI5XHU1MkE4XHU2MDAxXHUzMDAyJyxcclxuXHJcbiAgICAvLyBMaWZlIHZpZXdcclxuICAgICdsaWZlLnRpdGxlJzogJ0xpZmUrQUknLFxyXG4gICAgJ2xpZmUuc3VidGl0bGUnOiAnXHU3NTFGXHU2RDNCIFx1MDBCNyBcdTVCNjZcdTRFNjAgXHUwMEI3IFx1NURFNVx1NEY1QyBcdTIwMTQgXHU0RTA5XHU2NTJGXHU2N0YxXHU1NDY4XHU2NzFGXHU3QkExXHU3NDA2JyxcclxuICAgICdsaWZlLnBpbGxhckxpZmUnOiAnXHU3NTFGXHU2RDNCJyxcclxuICAgICdsaWZlLnBpbGxhckxlYXJuaW5nJzogJ1x1NUI2Nlx1NEU2MCcsXHJcbiAgICAnbGlmZS5waWxsYXJXb3JrJzogJ1x1NURFNVx1NEY1QycsXHJcbiAgICAnbGlmZS5oZWFsdGhQcm9ncmVzcyc6ICdcdTUwNjVcdTVFQjdcdThGREJcdTVFQTYnLFxyXG4gICAgJ2xpZmUuaGFiaXRUcmFja2luZyc6ICdcdTRFNjBcdTYwRUZcdThGRkRcdThFMkEnLFxyXG4gICAgJ2xpZmUubGVhcm5pbmdQcm9ncmVzcyc6ICdcdTVCNjZcdTRFNjBcdThGREJcdTVFQTYnLFxyXG4gICAgJ2xpZmUuc2tpbGxCdWlsZGluZyc6ICdcdTYyODBcdTgwRkRcdTU3RjlcdTUxN0InLFxyXG4gICAgJ2xpZmUucHJvamVjdFByb2dyZXNzJzogJ1x1OTg3OVx1NzZFRVx1OEZEQlx1NUVBNicsXHJcbiAgICAnbGlmZS50b2RheVRhc2tzJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMScsXHJcbiAgICAnbGlmZS5hY3RpdmUnOiAnYWN0aXZlJyxcclxuICAgICdsaWZlLnRhc2tzJzogJ3Rhc2tzJyxcclxuICAgICdsaWZlLndlZWtseVJlcG9ydCc6ICdcdTU0NjhcdTYyQTUnLFxyXG4gICAgJ2xpZmUubW9udGhseVJlcG9ydCc6ICdcdTY3MDhcdTYyQTUnLFxyXG5cclxuICAgIC8vIFBpcGVsaW5lIHZpZXdcclxuICAgICdwaXBlbGluZS50aXRsZSc6ICdcdTdCQTFcdTkwNTMnLFxyXG4gICAgJ3BpcGVsaW5lLndlZWtseUNhcHR1cmVzJzogJ1x1NjcyQ1x1NTQ2OFx1NjM1NVx1ODNCNycsXHJcbiAgICAncGlwZWxpbmUuaW5ib3hTZWN0aW9uJzogJ0luYm94ICh7Y291bnR9KScsXHJcbiAgICAncGlwZWxpbmUucmF3U2VjdGlvbic6ICdSYXcgKHtjb3VudH0pJyxcclxuICAgICdwaXBlbGluZS50aHJvdWdocHV0U2VjdGlvbic6ICdUaHJvdWdocHV0JyxcclxuICAgICdwaXBlbGluZS50YWJsZVRpdGxlJzogJ1x1NjgwN1x1OTg5OCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVEYXlzJzogJ1x1NTkyOVx1NjU3MCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVTb3VyY2UnOiAnXHU2NzY1XHU2RTkwJyxcclxuICAgICdwaXBlbGluZS50YWJsZVdvcmRzJzogJ1x1NUI1N1x1NjU3MCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVQcmlvcml0eSc6ICdcdTRGMThcdTUxNDhcdTdFQTcnLFxyXG4gICAgJ3BpcGVsaW5lLm5vSW5ib3gnOiAnXHU2NjgyXHU2NUUwXHU1Rjg1XHU1OTA0XHU3NDA2IEluYm94XHUzMDAyJyxcclxuICAgICdwaXBlbGluZS5ub1Jhdyc6ICdcdTY2ODJcdTY1RTBcdTVGODVcdTdGMTZcdThCRDFcdTY1ODdcdTRFRjZcdTMwMDInLFxyXG4gICAgJ3BpcGVsaW5lLmN1cnJlbnRXZWVrJzogJ1x1NUY1M1x1NTI0RFx1NTQ2OFx1OTAxQVx1OTFDRjoge3RvdGFsfSBcdTY3NjFcdThCQjBcdTVGNTUsIFx1NjVFNVx1NTc0NyB7YXZnfScsXHJcblxyXG4gICAgLy8gR2FyZGVuIHZpZXdcclxuICAgICdnYXJkZW4udGl0bGUnOiAnXHU3N0U1XHU4QkM2XHU4MkIxXHU1NkVEJyxcclxuICAgICdnYXJkZW4ubm90ZXMnOiAne2NvdW50fSBcdTdCQzdcdTdCMTRcdThCQjAnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVByb2plY3RzJzogJ1x1OTg3OVx1NzZFRSAoMSBQcm9qZWN0cyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeUFyZWFzJzogJ1x1OTg4Nlx1NTdERiAoMiBBcmVhcyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVJlc291cmNlcyc6ICdcdThENDRcdTZFOTAgKDMgUmVzb3VyY2VzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5SW5ib3gnOiAnSW5ib3gnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVBlcmlvZGljJzogJ1x1NTQ2OFx1NjcxRiAoUGVyaW9kaWMpJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlUb3RhbCc6ICdcdTU0MDhcdThCQTEnLFxyXG4gICAgJ2dhcmRlbi50YWJsZURpcmVjdG9yeSc6ICdcdTc2RUVcdTVGNTUnLFxyXG4gICAgJ2dhcmRlbi50YWJsZUNvdW50JzogJ1x1N0JDN1x1NjU3MCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5U2VjdGlvbic6ICdcdTUyMDZcdTdDN0InLFxyXG4gICAgJ2dhcmRlbi5yZWNlbnRVcGRhdGVzJzogJ1x1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMCcsXHJcbiAgICAnZ2FyZGVuLnF1aWNrU2VhcmNoJzogJ1x1NUZFQlx1OTAxRlx1NjdFNVx1OEJFMicsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaFBsYWNlaG9sZGVyJzogJ1x1OEY5M1x1NTE2NVx1NTE3M1x1OTUyRVx1OEJDRFx1NjQxQ1x1N0QyMlx1NzdFNVx1OEJDNlx1NUU5My4uLicsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaEJ0bic6ICdcdTY3RTVcdThCRTInLFxyXG4gICAgJ2dhcmRlbi5ub1JlY2VudCc6ICdcdTY2ODJcdTY1RTBcdTY3MDBcdThGRDFcdTY2RjRcdTY1QjBcdTMwMDInLFxyXG5cclxuICAgIC8vIFNlYXJjaFxyXG4gICAgJ3NlYXJjaC5wbGFjZWhvbGRlcic6ICdcdTY0MUNcdTdEMjJcdTdCMTRcdThCQjAuLi4nLFxyXG4gICAgJ3NlYXJjaC5idG4nOiAnXHU2NDFDXHU3RDIyJyxcclxuXHJcbiAgICAvLyBUb29sdGlwc1xyXG4gICAgJ3Rvb2x0aXAucmVmcmVzaCc6ICdcdTUyMzdcdTY1QjAnLFxyXG4gICAgJ3Rvb2x0aXAuY29sbGFwc2UnOiAnXHU2Mjk4XHU1M0UwJyxcclxuXHJcbiAgICAvLyBBSSBDaGF0XHJcbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QkY5XHU4QkREJyxcclxuICAgICdhaS5wbGFjZWhvbGRlcic6ICdcdThCRTJcdTk1RUUgS09TIFx1NzdFNVx1OEJDNlx1NUU5My4uLicsXHJcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1OTVFRVx1NjIxMVx1NTE3M1x1NEU4RVx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMVx1OTg3OVx1NzZFRVx1NzJCNlx1NjAwMVx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU1MTczXHU3Njg0XHU5NUVFXHU5ODk4XHUzMDAyJyxcclxuICAgICdhaS5zZW5kQnRuJzogJ1x1NTNEMVx1OTAwMScsXHJcbiAgICAnYWkuY2xlYXJCdG4nOiAnXHU2RTA1XHU3QTdBXHU1QkY5XHU4QkREJyxcclxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxyXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnXHU2NzJBXHU2OEMwXHU2RDRCXHU1MjMwIEZMT1dub3RlIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEU1Rlx1NjcyQVx1NjI3RVx1NTIzMFx1NjI0Qlx1NTJBOCBBUEkgXHU4QkJFXHU3RjZFXHUzMDAyXHU4QkY3XHU1NzI4IEZMT1dub3RlIFx1NEUyRFx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwQ1x1NjIxNlx1NTcyOCBDb2NrcGl0IFx1OEJCRVx1N0Y2RVx1NEUyRFx1NjI0Qlx1NTJBOFx1NTg2Qlx1NTE5OVx1MzAwMicsXHJcbiAgICAnYWkuZXJyb3InOiAnXHU4QkY3XHU2QzQyXHU1OTMxXHU4RDI1OiB7bXNnfScsXHJcbiAgICAnYWkucmV0cnknOiAnXHU5MUNEXHU4QkQ1JyxcclxuICAgICdhaS5jb3B5JzogJ1x1NTkwRFx1NTIzNicsXHJcbiAgICAnYWkuY29waWVkJzogJ1x1NURGMlx1NTkwRFx1NTIzNicsXHJcbiAgICAnYWkubW9kZWxMYWJlbCc6ICdcdTZBMjFcdTU3OEInLFxyXG4gICAgJ2FpLmNvbm5lY3RlZCc6ICdcdTVERjJcdThGREVcdTYzQTUnLFxyXG4gICAgJ2FpLm5vdENvbmZpZ3VyZWQnOiAnXHU2NzJBXHU5MTREXHU3RjZFJyxcclxuICAgICdhaS53ZWxjb21lVGl0bGUnOiAnQXNrIEtPUycsXHJcbiAgICAnYWkuc3VnZ2VzdFByb2plY3RzJzogJ1x1OTg3OVx1NzZFRVx1Njk4Mlx1ODlDOCcsXHJcbiAgICAnYWkuc3VnZ2VzdFByb2plY3RzRGVzYyc6ICdcdTY3RTVcdTc3MEJcdTZEM0JcdThEQzNcdTk4NzlcdTc2RUVcdThGREJcdTVFQTYnLFxyXG4gICAgJ2FpLnN1Z2dlc3RSZWNlbnQnOiAnXHU4RkQxXHU2NzFGXHU2RDNCXHU1MkE4JyxcclxuICAgICdhaS5zdWdnZXN0UmVjZW50RGVzYyc6ICdcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTc2ODRcdTdCMTRcdThCQjAnLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2gnOiAnXHU2NDFDXHU3RDIyXHU3N0U1XHU4QkM2XHU1RTkzJyxcclxuICAgICdhaS5zdWdnZXN0U2VhcmNoRGVzYyc6ICdcdTY3RTVcdTYyN0VcdTcyNzlcdTVCOUFcdTUxODVcdTVCQjknLFxyXG5cclxuICAgIC8vIEFJIHNldHRpbmdzXHJcbiAgICAnYWkucHJvdmlkZXJTZWN0aW9uJzogJ0FJIFByb3ZpZGVyJyxcclxuICAgICdhaS5wcm92aWRlclNlY3Rpb25EZXNjJzogJ1x1OTE0RFx1N0Y2RSBBSSBcdTVCRjlcdThCRERcdTc2ODQgQVBJIFx1NjNBNVx1NTE2NVx1NTNDMlx1NjU3MFx1MzAwMlx1ODJFNSBGTE9Xbm90ZSBcdTVERjJcdTkxNERcdTdGNkUgQUkgUHJvdmlkZXJcdUZGMDhcdTYzQThcdTgzNTBcdUZGMDlcdUZGMENDb2NrcGl0IFx1NUMwNlx1ODFFQVx1NTJBOFx1OEJGQlx1NTNENlx1NTE3Nlx1OEJCRVx1N0Y2RVx1MzAwMlx1NzU1OVx1N0E3QVx1NTIxOVx1ODA0QVx1NTkyOVx1NTMzQVx1NEUwRFx1NTNFRlx1NzUyOFx1MzAwMicsXHJcbiAgICAnYWkuYXBpRW5kcG9pbnQnOiAnQVBJIEVuZHBvaW50JyxcclxuICAgICdhaS5hcGlLZXknOiAnQVBJIEtleScsXHJcbiAgICAnYWkubW9kZWwnOiAnXHU2QTIxXHU1NzhCXHU1NDBEXHU3OUYwJyxcclxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnXHU3Q0ZCXHU3RURGXHU2M0QwXHU3OTNBXHU4QkNEJyxcclxuICAgICdhaS5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTY2MkZcdTRFMDBcdTRFMkFcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdTUyQTlcdTYyNEJcdUZGMENcdTVFMkVcdTUyQTlcdTc1MjhcdTYyMzdcdTU5MDRcdTc0MDYgS09TIFx1NzdFNVx1OEJDNlx1NUU5M1x1MzAwMicsXHJcblxyXG4gICAgLy8gUHJvdmlkZXJzXHJcbiAgICAncHJvdmlkZXIuY2xhdWRlJzogJ0NsYXVkZScsXHJcbiAgICAncHJvdmlkZXIuY29kZXgnOiAnQ29kZXgnLFxyXG4gICAgJ3Byb3ZpZGVyLm9wZW5jb2RlJzogJ09wZW5Db2RlJyxcclxuICAgICdwcm92aWRlci5lbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxyXG4gICAgJ3Byb3ZpZGVyLmFwaUtleSc6ICdBUEkgS2V5JyxcclxuICAgICdwcm92aWRlci5tb2RlbCc6ICdNb2RlbCcsXHJcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0JzogJ1N5c3RlbSBQcm9tcHQnLFxyXG4gICAgJ3Byb3ZpZGVyLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1lvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC4uLicsXHJcbiAgICAncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXInOiAnQWN0aXZlIEFJIFByb3ZpZGVyJyxcclxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlckRlc2MnOiAnU2VsZWN0IHdoaWNoIHByb3ZpZGVyIHRoZSBBSSBDaGF0IHBhbmVsIHVzZXMuJyxcclxuICAgICdwcm92aWRlci5zZXR0aW5ncyc6ICdQcm92aWRlciBTZXR0aW5ncycsXHJcbiAgICAncHJvdmlkZXIubGFiZWxTZXR0aW5ncyc6ICd7bGFiZWx9IFNldHRpbmdzJyxcclxuICAgICdwcm92aWRlci5kZWZhdWx0RW5kcG9pbnQnOiAnXHU5RUQ4XHU4QkE0OiB7ZW5kcG9pbnR9JyxcclxuICAgICdwcm92aWRlci5lbmRwb2ludERlc2MnOiAnT3BlbkFJIFx1NTE3Q1x1NUJCOVx1NzY4NCBBUEkgRW5kcG9pbnQgVVJMJyxcclxuICAgICdwcm92aWRlci5hcGlLZXlEZXNjJzogJ3NrLS4uLiBcdTYyMTYgQVBJIEtleScsXHJcbiAgICAncHJvdmlkZXIubW9kZWxEZXNjJzogJ1x1NkEyMVx1NTc4Qlx1NjgwN1x1OEJDNlx1N0IyNicsXHJcbiAgICAncHJvdmlkZXIucHJlc2V0TW9kZWxzJzogJ3ttb2RlbHN9JyxcclxuXHJcbiAgICAvLyBUYWIgYmFyXHJcbiAgICAndGFiLmRhc2hib2FyZCc6ICdcdTRFRUFcdTg4NjhcdTc2RDgnLFxyXG4gICAgJ3RhYi5saWZlJzogJ1x1NzUxRlx1NkQzQicsXHJcbiAgICAndGFiLnBpcGVsaW5lJzogJ1x1N0JBMVx1OTA1MycsXHJcbiAgICAndGFiLmdhcmRlbic6ICdcdTc3RTVcdThCQzZcdTgyQjFcdTU2RUQnLFxyXG4gICAgJ3RhYi5zZXR0aW5ncyc6ICdcdThCQkVcdTdGNkUnLFxyXG5cclxuICAgIC8vIFNldHRpbmdzIChjb2NrcGl0LXZpZXcgaW5saW5lKVxyXG4gICAgJ3NldHRpbmdzLnRpdGxlJzogJ1x1OEJCRVx1N0Y2RScsXHJcbiAgICAnc2V0dGluZ3MuZGVzYyc6ICdcdTkxNERcdTdGNkUgS09TIENvY2twaXQgXHU3Njg0XHU2NjNFXHU3OTNBXHU0RTBFXHU4ODRDXHU0RTNBJyxcclxuICAgICdzZXR0aW5ncy5sb2NhbGUnOiAnXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwJyxcclxuICAgICdzZXR0aW5ncy5sYW5ndWFnZSc6ICdcdTc1NENcdTk3NjJcdThCRURcdThBMDAnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwMDlcdTYyRTkgQ29ja3BpdCBcdTY2M0VcdTc5M0FcdThCRURcdThBMDBcdTMwMDJcdTUyMDdcdTYzNjJcdTU0MEVcdTc1NENcdTk3NjJcdTVDMDZcdTdBQ0JcdTUzNzNcdTUyMzdcdTY1QjBcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lJzogJ1x1NTdGQVx1NjcyQ1x1NEUzQlx1OTg5OCcsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVEYXJrJzogJ1x1NjY5N1x1OUVEMScsXHJcbiAgICAnc2V0dGluZ3MudGhlbWVMaWdodCc6ICdcdTY2MEVcdTRFQUUnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lU3lzdGVtJzogJ1x1OERERlx1OTY4Rlx1N0NGQlx1N0VERicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uJzogJ1x1NUI2M1x1ODI4Mlx1NjAyN1x1NUYzQVx1OEMwM1x1ODI3MicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3ByaW5nJzogJ1x1NjYyNScsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uU3VtbWVyJzogJ1x1NTkwRicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uQXV0dW1uJzogJ1x1NzlDQicsXHJcbiAgICAnc2V0dGluZ3Muc2Vhc29uV2ludGVyJzogJ1x1NTFBQycsXHJcbiAgICAnc2V0dGluZ3MuZm9udFNpemUnOiAnXHU1QjU3XHU1M0Y3JyxcclxuICAgICdzZXR0aW5ncy5mb250U21hbGwnOiAnXHU1QzBGJyxcclxuICAgICdzZXR0aW5ncy5mb250TWVkaXVtJzogJ1x1NEUyRCcsXHJcbiAgICAnc2V0dGluZ3MuZm9udExhcmdlJzogJ1x1NTkyNycsXHJcbiAgICAnc2V0dGluZ3MuZ2VuZXJhbCc6ICdcdTkwMUFcdTc1MjgnLFxyXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ1x1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMCBLT1MgQ29ja3BpdCcsXHJcbiAgICAnc2V0dGluZ3MuYXV0b09wZW5EZXNjJzogJ09ic2lkaWFuIFx1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NTcyOFx1NEZBN1x1OEZCOVx1NjgwRlx1NjI1M1x1NUYwMCBLT1MgQ29ja3BpdFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ1x1NjcwMFx1NTkyN1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOFx1NjU3MCcsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50RGVzYyc6ICdcdTY2M0VcdTc5M0FcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTY1ODdcdTRFRjZcdTc2ODRcdTY1NzBcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzJzogJ1x1NjcwMFx1NTkyN1x1NEVGQlx1NTJBMVx1NjU3MCcsXHJcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ1x1NjYzRVx1NzkzQVx1NEVDQVx1NjVFNVx1NEVGQlx1NTJBMVx1NzY4NFx1NjU3MFx1OTFDRlx1RkYwOFx1NjcwMFx1NTkxQSAyMFx1RkYwOVx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MubWF4SW5ib3gnOiAnXHU2NzAwXHU1OTI3IEluYm94IFx1NjU3MCcsXHJcbiAgICAnc2V0dGluZ3MubWF4SW5ib3hEZXNjJzogJ1x1NjYzRVx1NzkzQSBJbmJveCBcdTY1ODdcdTRFRjZcdTU0MERcdTc2ODRcdTY1NzBcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLmFib3V0JzogJ1x1NTE3M1x1NEU4RScsXHJcbiAgICAnc2V0dGluZ3MudmVyc2lvbic6ICdcdTcyNDhcdTY3MkMnLFxyXG4gICAgJ3NldHRpbmdzLnZlcnNpb25EZXNjJzogJ0tPUyBDb2NrcGl0IHYwLjIuMCBcdTIwMTQgS09TX0xMTS1XaWtpIFx1NzdFNVx1OEJDNlx1N0JBMVx1NzQwNlx1NEVFQVx1ODg2OFx1NzZEOFx1MzAwMktPUyBcdTc1MUZcdTYwMDFcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm5vdGVzQ291bnQnOiAnXHU2NTJGXHU2MzAxXHU2NzYxXHU3NkVFOiB7Y291bnR9IFx1N0JDN1x1N0IxNFx1OEJCMCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poQ04nOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcclxuICAgICdzZXR0aW5ncy5sYW5nRW4nOiAnRW5nbGlzaCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ1poVFcnOiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcclxuXHJcbiAgICAvLyBTZXR0aW5ncyBzZWN0aW9uc1xyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnXHU2M0E3XHU1MjM2XHU0RUVBXHU4ODY4XHU3NkQ4XHU0RTBBXHU1NDA0XHU1MzNBXHU1NzU3XHU3Njg0XHU2NjNFXHU3OTNBXHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrcyc6IFwiXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkExXCIsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblRvZGF5VGFza3NEZXNjJzogJ1x1NkJDRlx1NjVFNVx1N0IxNFx1OEJCMFx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFx1NEUwRVx1OEZEQlx1NUVBNlx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblByb2plY3RzJzogJ1x1NkQzQlx1OERDM1x1OTg3OVx1NzZFRScsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblByb2plY3RzRGVzYyc6ICdcdTk4NzlcdTc2RUVcdTUzNjFcdTcyNDdcdUZGMENcdTU0MkJcdTRGMThcdTUxNDhcdTdFQTdcdTRFMEVcdThGREJcdTVFQTZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25WYXVsdFN0YXRzJzogJ1x1NzdFNVx1OEJDNlx1NUU5M1x1N0VERlx1OEJBMScsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblZhdWx0U3RhdHNEZXNjJzogJ1x1NjAzQlx1N0IxNFx1OEJCMFx1NjU3MFx1MzAwMVx1NkQzQlx1OERDM1x1OTg3OVx1NzZFRVx1MzAwMUluYm94IFx1OEJBMVx1NjU3MFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblJlY2VudEFjdGl2aXR5JzogJ1x1NjcwMFx1OEZEMVx1NkQzQlx1NTJBOCcsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblJlY2VudEFjdGl2aXR5RGVzYyc6ICdcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTc2ODRcdTY1ODdcdTRFRjZcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25OYXYnOiAnXHU1QkZDXHU4MjJBJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uTmF2RGVzYyc6ICdcdTVGRUJcdTkwMUZcdTk0RkVcdTYzQTVcdTUyMzBcdTk4ODZcdTU3REZcdTMwMDFJbmJveFx1MzAwMVx1NzBFRFx1NzBCOVx1N0YxM1x1NUI1OFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkluYm94RmlsZXMnOiAnSW5ib3ggXHU2NTg3XHU0RUY2JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlc0Rlc2MnOiAnMCBJbmJveC8gXHU0RTJEXHU1Rjg1XHU1OTA0XHU3NDA2XHU2NTg3XHU0RUY2XHU1MjE3XHU4ODY4XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uRW5naW5lU3RhdGUnOiAnXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uRW5naW5lU3RhdGVEZXNjJzogJ1RyaWFnZS9Db21waWxlL0xpbmsgXHU1RjE1XHU2NENFXHU3MkI2XHU2MDAxXHU2MzA3XHU3OTNBXHU3MDZGXHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnQnOiAnXHU1NDY4XHU1RUE2XHU1NkZFXHU4ODY4JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnREZXNjJzogJ1x1NkJDRlx1NTQ2OFx1NjVFNVx1OEJCMFx1NjM1NVx1ODNCN1x1OTFDRlx1NzY4NFx1NjdGMVx1NzJCNlx1NTZGRVx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3MuZ2VuZXJhbFRhYic6ICdcdTkwMUFcdTc1MjgnLFxyXG4gICAgJ3NldHRpbmdzLnByb3ZpZGVyVGFiJzogJ1Byb3ZpZGVyIFNldHRpbmdzJyxcclxuXHJcbiAgICAvLyBOb3RpY2UgbWVzc2FnZXMgZm9yIGxhdW5jaCBhY3Rpb25zXHJcbiAgICAnbm90aWNlLnRyaWFnZSc6ICdLT1MtVHJpYWdlIFx1NURGMlx1NTQyRlx1NTJBOCcsXHJcbiAgICAnbm90aWNlLmNvbXBpbGUnOiAnS09TLUNvbXBpbGUgXHU1REYyXHU1NDJGXHU1MkE4JyxcclxuICAgICdub3RpY2UubGluayc6ICdLT1MtTGluayBcdTVERjJcdTU0MkZcdTUyQTgnLFxyXG4gICAgJ25vdGljZS5xdWVyeSc6ICdLT1MtUXVlcnkgXHU5NzYyXHU2NzdGXHU1REYyXHU2MjUzXHU1RjAwJyxcclxuICAgICdub3RpY2UuZGFpbHknOiAnXHU2QjYzXHU1NzI4XHU1MjFCXHU1RUZBIERhaWx5IE9wZW4uLi4nLFxyXG4gICAgJ25vdGljZS53ZWVrJzogJ1x1NkI2M1x1NTcyOFx1NzUxRlx1NjIxMCBXZWVrLVJldmlldy4uLicsXHJcbiAgICAnbm90aWNlLmluaXQnOiAnXHU2QjYzXHU1NzI4XHU2MjY3XHU4ODRDIEtPUy1Jbml0IFx1NTA2NVx1NUVCN1x1NjhDMFx1NjdFNS4uLicsXHJcbiAgICAnbm90aWNlLmxpZmUnOiAnTGlmZStBSSBcdTk3NjJcdTY3N0ZcdTVERjJcdTYyNTNcdTVGMDAnLFxyXG4gICAgJ25vdGljZS5leGVjdXRpbmcnOiAnXHU2MjY3XHU4ODRDXHU0RTJEOiB7YWN0aW9ufScsXHJcbiAgfSxcclxuXHJcbiAgJ2VuJzoge1xyXG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcclxuICAgICdhcHAubG9hZGluZyc6ICdMb2FkaW5nIEtPUyBDb2NrcGl0Li4uJyxcclxuICAgICdhcHAuZXJyb3InOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgbG9hZGluZyB0aGUgZGFzaGJvYXJkLicsXHJcbiAgICAnYXBwLnJldHJ5JzogJ1JldHJ5JyxcclxuXHJcbiAgICAncGFuZWwuaG9tZSc6ICdLT1MgQ29ja3BpdCcsXHJcbiAgICAncGFuZWwuY2hhdCc6ICdLT1MgQUkgQ2hhdCcsXHJcbiAgICAncGFuZWwubGlmZSc6ICdMaWZlK0FJJyxcclxuICAgICdwYW5lbC5waXBlbGluZSc6ICdQaXBlbGluZScsXHJcbiAgICAncGFuZWwuZ2FyZGVuJzogJ0tub3dsZWRnZSBHYXJkZW4nLFxyXG4gICAgJ3BhbmVsLnNldHRpbmdzJzogJ1NldHRpbmdzJyxcclxuXHJcbiAgICAnaGVhZGVyLmRhdGVGb3JtYXQnOiAnWVlZWS1NTS1ERCcsXHJcbiAgICAnaGVhZGVyLm5vdGVTdGF0dXMnOiAnRGFpbHkgTm90ZSBbe3N0YXR1c31dJyxcclxuICAgICdoZWFkZXIubm90ZUNyZWF0ZWQnOiAnQ3JlYXRlZCcsXHJcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ05vdCBDcmVhdGVkJyxcclxuICAgICdoZWFkZXIudG9kYXlGb2N1cyc6IFwiVG9kYXkncyBGb2N1czoge2ZvY3VzfVwiLFxyXG4gICAgJ2hlYWRlci5mb2N1c05vdFNldCc6ICcoTm90IFNldCknLFxyXG5cclxuICAgICdkYXkuc3VuJzogJ1MnLFxyXG4gICAgJ2RheS5tb24nOiAnTScsXHJcbiAgICAnZGF5LnR1ZSc6ICdUJyxcclxuICAgICdkYXkud2VkJzogJ1cnLFxyXG4gICAgJ2RheS50aHUnOiAnVCcsXHJcbiAgICAnZGF5LmZyaSc6ICdGJyxcclxuICAgICdkYXkuc2F0JzogJ1MnLFxyXG5cclxuICAgICdhY3Rpb24ucGxhblRvZGF5JzogJ1BsYW4gVG9kYXknLFxyXG4gICAgJ2FjdGlvbi5jYXB0dXJlJzogJ1F1aWNrIENhcHR1cmUnLFxyXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnRGF5IFJldmlldycsXHJcbiAgICAnYWN0aW9uLm5ld1Byb2plY3QnOiAnTmV3IFByb2plY3QnLFxyXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcclxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnU2V0dGluZ3MnLFxyXG4gICAgJ2FjdGlvbi5haUNoYXQnOiAnQUkgQ2hhdCcsXHJcblxyXG4gICAgJ3Rhc2sudGl0bGUnOiBcIlRvZGF5J3MgVGFza3NcIixcclxuICAgICd0YXNrLnByb2dyZXNzJzogJ3tkb25lfS97dG90YWx9ICh7cmF0ZX0lKScsXHJcbiAgICAndGFzay5ub25lJzogJ05vIHRhc2tzIHlldC4nLFxyXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ0RhaWx5IG5vdGUgbm90IGNyZWF0ZWQuIENsaWNrIFtQbGFuIFRvZGF5XSB0byBjcmVhdGUgb25lLicsXHJcblxyXG4gICAgJ3Byb2plY3QudGl0bGUnOiAnQWN0aXZlIFByb2plY3RzJyxcclxuICAgICdwcm9qZWN0LmVtcHR5JzogJ05vIGFjdGl2ZSBwcm9qZWN0cy4nLFxyXG4gICAgJ3Byb2plY3QubmV3JzogJ05ldyBQcm9qZWN0JyxcclxuXHJcbiAgICAnc3RhdHMudGl0bGUnOiAnVmF1bHQgU3RhdGlzdGljcycsXHJcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdUb3RhbCBOb3RlcycsXHJcbiAgICAnc3RhdHMuYWN0aXZlUHJvamVjdHMnOiAnQWN0aXZlIFByb2plY3RzJyxcclxuICAgICdzdGF0cy50b2RheU5ldyc6ICdUb2RheSBOZXcnLFxyXG4gICAgJ3N0YXRzLnBlbmRpbmdUcmlhZ2UnOiAnSW5ib3gnLFxyXG5cclxuICAgICdyZWNlbnQudGl0bGUnOiAnUmVjZW50IEFjdGl2aXR5JyxcclxuICAgICdyZWNlbnQuZW1wdHknOiAnTm8gYWN0aXZpdHkgeWV0LicsXHJcblxyXG4gICAgJ25hdi50aXRsZSc6ICdUaHJlZSBQaWxsYXJzIFxcdTAwQjcgTmF2JyxcclxuXHJcbiAgICAnaW5ib3gudGl0bGUnOiAnSW5ib3ggKHtjb3VudH0pJyxcclxuICAgICdpbmJveC5tb3JlJzogJyt7Y291bnR9IG1vcmUuLi4nLFxyXG5cclxuICAgICdlbmdpbmUudGl0bGUnOiAnRW5naW5lIFN0YXRlJyxcclxuICAgICdlbmdpbmUuY29udHJvbCc6ICdFbmdpbmUgQ29udHJvbCcsXHJcbiAgICAnZW5naW5lLnN0YXR1c1JlYWR5JzogJ1JlYWR5JyxcclxuICAgICdlbmdpbmUuc3RhdHVzTmVlZHNXb3JrJzogJ05lZWRzIHdvcmsnLFxyXG4gICAgJ2VuZ2luZS5zdGF0dXNTdGFuZGJ5JzogJ1N0YW5kYnknLFxyXG4gICAgJ2VuZ2luZS5lbXB0eSc6ICdObyBlbmdpbmUgc3RhdGUgZGF0YSB5ZXQuJyxcclxuXHJcbiAgICAnd2Vla2x5LnRpdGxlJzogJ1dlZWtseSBSZWNvcmQgRGlzdHJpYnV0aW9uJyxcclxuICAgICd3ZWVrbHkuZW1wdHknOiAnTm8gZGFpbHkgcmVjb3JkcyB0aGlzIHdlZWsuJyxcclxuICAgICd3ZWVrbHkuYmFyVG9vbHRpcCc6ICd7ZGF0ZX06IHtjb3VudH0gaXRlbXMnLFxyXG5cclxuICAgICdwaXBlbGluZS5pbmJveCc6ICdJbmJveCcsXHJcbiAgICAncGlwZWxpbmUudHJpYWdlJzogJ1RyaWFnZScsXHJcbiAgICAncGlwZWxpbmUucmF3JzogJ1JhdycsXHJcbiAgICAncGlwZWxpbmUuY29tcGlsZSc6ICdDb21waWxlJyxcclxuICAgICdwaXBlbGluZS53aWtpJzogJ0tub3dsZWRnZScsXHJcbiAgICAncGlwZWxpbmUuY2xpY2tOYXZpZ2F0ZSc6ICdDbGljayB0byBuYXZpZ2F0ZScsXHJcblxyXG4gICAgJ3RvZGF5LnRpdGxlJzogXCJUb2RheSdzIEZvY3VzXCIsXHJcbiAgICAndG9kYXkudGFza3MnOiAnVGFza3MnLFxyXG4gICAgJ3RvZGF5LnN0cmVhayc6ICdTdHJlYWsnLFxyXG4gICAgJ3RvZGF5LnRvZGF5JzogJ1RvZGF5JyxcclxuICAgICd0b2RheS5kYWlseSc6ICdEYWlseScsXHJcbiAgICAndG9kYXkud2Vla2x5VG90YWwnOiAnVGhpcyB3ZWVrOiB7Y291bnR9IHJlY29yZHMnLFxyXG4gICAgJ3RvZGF5LmpvdXJuYWwnOiBcIlRvZGF5J3MgSm91cm5hbDoge2NvdW50fSBpdGVtc1wiLFxyXG4gICAgJ3RvZGF5LmNyZWF0ZU5vdGUnOiAnQ3JlYXRlIGRhaWx5IG5vdGUnLFxyXG4gICAgJ3RvZGF5LmRvbmUnOiAnRG9uZScsXHJcbiAgICAndG9kYXkucGVuZGluZyc6ICdQZW5kaW5nJyxcclxuXHJcbiAgICAnZ3Jvd3RoLnRpdGxlJzogJ0tub3dsZWRnZSBHYXJkZW4nLFxyXG4gICAgJ2dyb3d0aC50b2RheUpvdXJuYWwnOiBcIlRvZGF5J3MgSm91cm5hbDoge2NvdW50fSBpdGVtc1wiLFxyXG4gICAgJ2dyb3d0aC53ZWVrbHlUb3RhbCc6ICdUaGlzIHdlZWs6IHtjb3VudH0gcmVjb3JkcycsXHJcblxyXG4gICAgJ2ZlZWQudGl0bGUnOiAnQWN0aXZpdHkgRmVlZCcsXHJcblxyXG4gICAgJ2hlYWx0aC50aXRsZSc6ICdWYXVsdCBIZWFsdGgnLFxyXG4gICAgJ2hlYWx0aC5zY29yZSc6ICd7c2NvcmV9LzEwMCcsXHJcblxyXG4gICAgJ2xhdW5jaC50aXRsZSc6ICdRdWljayBMYXVuY2gnLFxyXG5cclxuICAgICdob3QudGl0bGUnOiAnSG90IENvbnRleHQnLFxyXG4gICAgJ2hvdC5lbXB0eSc6ICdObyBob3QgY29udGV4dCBlbnRyaWVzLicsXHJcblxyXG4gICAgJ2xpZmUudGl0bGUnOiAnTGlmZStBSScsXHJcbiAgICAnbGlmZS5zdWJ0aXRsZSc6ICdMaWZlIFxcdTAwQjcgTGVhcm5pbmcgXFx1MDBCNyBXb3JrIFxcdTIwMTQgVGhyZWUgUGlsbGFycycsXHJcbiAgICAnbGlmZS5waWxsYXJMaWZlJzogJ0xpZmUnLFxyXG4gICAgJ2xpZmUucGlsbGFyTGVhcm5pbmcnOiAnTGVhcm5pbmcnLFxyXG4gICAgJ2xpZmUucGlsbGFyV29yayc6ICdXb3JrJyxcclxuICAgICdsaWZlLmhlYWx0aFByb2dyZXNzJzogJ0hlYWx0aCBQcm9ncmVzcycsXHJcbiAgICAnbGlmZS5oYWJpdFRyYWNraW5nJzogJ0hhYml0IFRyYWNraW5nJyxcclxuICAgICdsaWZlLmxlYXJuaW5nUHJvZ3Jlc3MnOiAnTGVhcm5pbmcgUHJvZ3Jlc3MnLFxyXG4gICAgJ2xpZmUuc2tpbGxCdWlsZGluZyc6ICdTa2lsbCBCdWlsZGluZycsXHJcbiAgICAnbGlmZS5wcm9qZWN0UHJvZ3Jlc3MnOiAnUHJvamVjdCBQcm9ncmVzcycsXHJcbiAgICAnbGlmZS50b2RheVRhc2tzJzogXCJUb2RheSdzIFRhc2tzXCIsXHJcbiAgICAnbGlmZS5hY3RpdmUnOiAnYWN0aXZlJyxcclxuICAgICdsaWZlLnRhc2tzJzogJ3Rhc2tzJyxcclxuICAgICdsaWZlLndlZWtseVJlcG9ydCc6ICdXZWVrbHknLFxyXG4gICAgJ2xpZmUubW9udGhseVJlcG9ydCc6ICdNb250aGx5JyxcclxuXHJcbiAgICAncGlwZWxpbmUudGl0bGUnOiAnUGlwZWxpbmUnLFxyXG4gICAgJ3BpcGVsaW5lLndlZWtseUNhcHR1cmVzJzogJ1dlZWtseSBjYXB0dXJlcycsXHJcbiAgICAncGlwZWxpbmUuaW5ib3hTZWN0aW9uJzogJ0luYm94ICh7Y291bnR9KScsXHJcbiAgICAncGlwZWxpbmUucmF3U2VjdGlvbic6ICdSYXcgKHtjb3VudH0pJyxcclxuICAgICdwaXBlbGluZS50aHJvdWdocHV0U2VjdGlvbic6ICdUaHJvdWdocHV0JyxcclxuICAgICdwaXBlbGluZS50YWJsZVRpdGxlJzogJ1RpdGxlJyxcclxuICAgICdwaXBlbGluZS50YWJsZURheXMnOiAnRGF5cycsXHJcbiAgICAncGlwZWxpbmUudGFibGVTb3VyY2UnOiAnU291cmNlJyxcclxuICAgICdwaXBlbGluZS50YWJsZVdvcmRzJzogJ1dvcmRzJyxcclxuICAgICdwaXBlbGluZS50YWJsZVByaW9yaXR5JzogJ1ByaW9yaXR5JyxcclxuICAgICdwaXBlbGluZS5ub0luYm94JzogJ05vIHBlbmRpbmcgaW5ib3ggaXRlbXMuJyxcclxuICAgICdwaXBlbGluZS5ub1Jhdyc6ICdObyBmaWxlcyBwZW5kaW5nIGNvbXBpbGF0aW9uLicsXHJcbiAgICAncGlwZWxpbmUuY3VycmVudFdlZWsnOiAnV2VlayB0aHJvdWdocHV0OiB7dG90YWx9IHJlY29yZHMsIHthdmd9L2RheScsXHJcblxyXG4gICAgJ2dhcmRlbi50aXRsZSc6ICdLbm93bGVkZ2UgR2FyZGVuJyxcclxuICAgICdnYXJkZW4ubm90ZXMnOiAne2NvdW50fSBub3RlcycsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UHJvamVjdHMnOiAnUHJvamVjdHMnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeUFyZWFzJzogJ0FyZWFzJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlSZXNvdXJjZXMnOiAnUmVzb3VyY2VzJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlJbmJveCc6ICdJbmJveCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5UGVyaW9kaWMnOiAnUGVyaW9kaWMnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVRvdGFsJzogJ1RvdGFsJyxcclxuICAgICdnYXJkZW4udGFibGVEaXJlY3RvcnknOiAnRGlyZWN0b3J5JyxcclxuICAgICdnYXJkZW4udGFibGVDb3VudCc6ICdDb3VudCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5U2VjdGlvbic6ICdDYXRlZ29yaWVzJyxcclxuICAgICdnYXJkZW4ucmVjZW50VXBkYXRlcyc6ICdSZWNlbnQgVXBkYXRlcycsXHJcbiAgICAnZ2FyZGVuLnF1aWNrU2VhcmNoJzogJ1F1aWNrIFNlYXJjaCcsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaFBsYWNlaG9sZGVyJzogJ1NlYXJjaCBrbm93bGVkZ2UgYmFzZS4uLicsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaEJ0bic6ICdTZWFyY2gnLFxyXG4gICAgJ2dhcmRlbi5ub1JlY2VudCc6ICdObyByZWNlbnQgYWN0aXZpdHkuJyxcclxuXHJcbiAgICAnc2VhcmNoLnBsYWNlaG9sZGVyJzogJ1NlYXJjaCBub3Rlcy4uLicsXHJcbiAgICAnc2VhcmNoLmJ0bic6ICdTZWFyY2gnLFxyXG5cclxuICAgICd0b29sdGlwLnJlZnJlc2gnOiAnUmVmcmVzaCcsXHJcbiAgICAndG9vbHRpcC5jb2xsYXBzZSc6ICdDb2xsYXBzZScsXHJcblxyXG4gICAgJ2FpLnRpdGxlJzogJ0FJIENoYXQnLFxyXG4gICAgJ2FpLnBsYWNlaG9sZGVyJzogJ0FzayBhYm91dCB0aGUgS09TIHZhdWx0Li4uJyxcclxuICAgICdhaS53ZWxjb21lJzogJ0hlbGxvISBJIGFtIHRoZSBLT1MgQUkgYXNzaXN0YW50LiBBc2sgbWUgYWJvdXQgdGhlIGtub3dsZWRnZSBiYXNlLCBwcm9qZWN0IHN0YXR1cywgb3IgYW55dGhpbmcgS09TLXJlbGF0ZWQuJyxcclxuICAgICdhaS5zZW5kQnRuJzogJ1NlbmQnLFxyXG4gICAgJ2FpLmNsZWFyQnRuJzogJ0NsZWFyIENoYXQnLFxyXG4gICAgJ2FpLnRoaW5raW5nJzogJ1RoaW5raW5nLi4uJyxcclxuICAgICdhaS5uZWVkQ29uZmlnJzogJ05vIEZMT1dub3RlIGNvbmZpZyBkZXRlY3RlZCBhbmQgbm8gbWFudWFsIEFQSSBzZXR0aW5ncyBmb3VuZC4gQ29uZmlndXJlIEFJIFByb3ZpZGVyIGluIEZMT1dub3RlLCBvciBmaWxsIGluIG1hbnVhbGx5IGluIENvY2twaXQgc2V0dGluZ3MuJyxcclxuICAgICdhaS5lcnJvcic6ICdSZXF1ZXN0IGZhaWxlZDoge21zZ30nLFxyXG4gICAgJ2FpLnJldHJ5JzogJ1JldHJ5JyxcclxuICAgICdhaS5jb3B5JzogJ0NvcHknLFxyXG4gICAgJ2FpLmNvcGllZCc6ICdDb3BpZWQnLFxyXG4gICAgJ2FpLm1vZGVsTGFiZWwnOiAnTW9kZWwnLFxyXG4gICAgJ2FpLmNvbm5lY3RlZCc6ICdDb25uZWN0ZWQnLFxyXG4gICAgJ2FpLm5vdENvbmZpZ3VyZWQnOiAnTm90IGNvbmZpZ3VyZWQnLFxyXG4gICAgJ2FpLndlbGNvbWVUaXRsZSc6ICdBc2sgS09TJyxcclxuICAgICdhaS5zdWdnZXN0UHJvamVjdHMnOiAnUHJvamVjdCBPdmVydmlldycsXHJcbiAgICAnYWkuc3VnZ2VzdFByb2plY3RzRGVzYyc6ICdWaWV3IGFjdGl2ZSBwcm9qZWN0IHByb2dyZXNzJyxcclxuICAgICdhaS5zdWdnZXN0UmVjZW50JzogJ1JlY2VudCBBY3Rpdml0eScsXHJcbiAgICAnYWkuc3VnZ2VzdFJlY2VudERlc2MnOiAnUmVjZW50bHkgbW9kaWZpZWQgbm90ZXMnLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2gnOiAnU2VhcmNoIFZhdWx0JyxcclxuICAgICdhaS5zdWdnZXN0U2VhcmNoRGVzYyc6ICdGaW5kIHNwZWNpZmljIGNvbnRlbnQnLFxyXG5cclxuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxyXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnQ29uZmlndXJlIEFQSSBhY2Nlc3MgZm9yIHRoZSBBSSBjaGF0LiBJZiBGTE9Xbm90ZSBoYXMgQUkgUHJvdmlkZXIgY29uZmlndXJlZCAocmVjb21tZW5kZWQpLCBDb2NrcGl0IHdpbGwgYXV0by1kZXRlY3QgaXQuIExlYXZlIGVtcHR5IHRvIGRpc2FibGUuJyxcclxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxyXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcclxuICAgICdhaS5tb2RlbCc6ICdNb2RlbCBOYW1lJyxcclxuICAgICdhaS5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXHJcbiAgICAnYWkuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnWW91IGFyZSBhIGtub3dsZWRnZSBtYW5hZ2VtZW50IGFzc2lzdGFudCBoZWxwaW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRoZWlyIEtPUyB2YXVsdC4nLFxyXG5cclxuICAgICdwcm92aWRlci5jbGF1ZGUnOiAnQ2xhdWRlJyxcclxuICAgICdwcm92aWRlci5jb2RleCc6ICdDb2RleCcsXHJcbiAgICAncHJvdmlkZXIub3BlbmNvZGUnOiAnT3BlbkNvZGUnLFxyXG4gICAgJ3Byb3ZpZGVyLmVuZHBvaW50JzogJ0FQSSBFbmRwb2ludCcsXHJcbiAgICAncHJvdmlkZXIuYXBpS2V5JzogJ0FQSSBLZXknLFxyXG4gICAgJ3Byb3ZpZGVyLm1vZGVsJzogJ01vZGVsJyxcclxuICAgICdwcm92aWRlci5zeXN0ZW1Qcm9tcHQnOiAnU3lzdGVtIFByb21wdCcsXHJcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInOiAnWW91IGFyZSBhIGhlbHBmdWwgYXNzaXN0YW50Li4uJyxcclxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlcic6ICdBY3RpdmUgQUkgUHJvdmlkZXInLFxyXG4gICAgJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyRGVzYyc6ICdTZWxlY3Qgd2hpY2ggcHJvdmlkZXIgdGhlIEFJIENoYXQgcGFuZWwgdXNlcy4nLFxyXG4gICAgJ3Byb3ZpZGVyLnNldHRpbmdzJzogJ1Byb3ZpZGVyIFNldHRpbmdzJyxcclxuICAgICdwcm92aWRlci5sYWJlbFNldHRpbmdzJzogJ3tsYWJlbH0gU2V0dGluZ3MnLFxyXG4gICAgJ3Byb3ZpZGVyLmRlZmF1bHRFbmRwb2ludCc6ICdEZWZhdWx0OiB7ZW5kcG9pbnR9JyxcclxuICAgICdwcm92aWRlci5lbmRwb2ludERlc2MnOiAnT3BlbkFJLWNvbXBhdGlibGUgZW5kcG9pbnQgVVJMJyxcclxuICAgICdwcm92aWRlci5hcGlLZXlEZXNjJzogJ3NrLS4uLiBvciBBUEkga2V5JyxcclxuICAgICdwcm92aWRlci5tb2RlbERlc2MnOiAnTW9kZWwgaWRlbnRpZmllcicsXHJcbiAgICAncHJvdmlkZXIucHJlc2V0TW9kZWxzJzogJ3ttb2RlbHN9JyxcclxuXHJcbiAgICAndGFiLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQnLFxyXG4gICAgJ3RhYi5saWZlJzogJ0xpZmUnLFxyXG4gICAgJ3RhYi5waXBlbGluZSc6ICdQaXBlbGluZScsXHJcbiAgICAndGFiLmdhcmRlbic6ICdLbm93bGVkZ2UgR2FyZGVuJyxcclxuICAgICd0YWIuc2V0dGluZ3MnOiAnU2V0dGluZ3MnLFxyXG5cclxuICAgICdzZXR0aW5ncy50aXRsZSc6ICdTZXR0aW5ncycsXHJcbiAgICAnc2V0dGluZ3MuZGVzYyc6ICdDb25maWd1cmUgS09TIENvY2twaXQgZGlzcGxheSBhbmQgYmVoYXZpb3InLFxyXG4gICAgJ3NldHRpbmdzLmxvY2FsZSc6ICdJbnRlcmZhY2UgTGFuZ3VhZ2UnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ0ludGVyZmFjZSBMYW5ndWFnZScsXHJcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1NlbGVjdCB0aGUgY29ja3BpdCBkaXNwbGF5IGxhbmd1YWdlLiBUaGUgVUkgd2lsbCByZWZyZXNoIGltbWVkaWF0ZWx5LicsXHJcbiAgICAnc2V0dGluZ3MudGhlbWUnOiAnVGhlbWUnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lRGFyayc6ICdEYXJrJyxcclxuICAgICdzZXR0aW5ncy50aGVtZUxpZ2h0JzogJ0xpZ2h0JyxcclxuICAgICdzZXR0aW5ncy50aGVtZVN5c3RlbSc6ICdTeXN0ZW0nLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbic6ICdTZWFzb25hbCBBY2NlbnQnLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvblNwcmluZyc6ICdTcHJpbmcnLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvblN1bW1lcic6ICdTdW1tZXInLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbkF1dHVtbic6ICdBdXR1bW4nLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbldpbnRlcic6ICdXaW50ZXInLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRTaXplJzogJ0ZvbnQgU2l6ZScsXHJcbiAgICAnc2V0dGluZ3MuZm9udFNtYWxsJzogJ1NtYWxsJyxcclxuICAgICdzZXR0aW5ncy5mb250TWVkaXVtJzogJ01lZGl1bScsXHJcbiAgICAnc2V0dGluZ3MuZm9udExhcmdlJzogJ0xhcmdlJyxcclxuICAgICdzZXR0aW5ncy5nZW5lcmFsJzogJ0dlbmVyYWwnLFxyXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuJzogJ0F1dG8tb3BlbiBLT1MgQ29ja3BpdCBvbiBzdGFydHVwJyxcclxuICAgICdzZXR0aW5ncy5hdXRvT3BlbkRlc2MnOiAnQXV0b21hdGljYWxseSBvcGVuIEtPUyBDb2NrcGl0IGluIHRoZSBzaWRlYmFyIHdoZW4gT2JzaWRpYW4gc3RhcnRzLicsXHJcbiAgICAnc2V0dGluZ3MubWF4UmVjZW50JzogJ01heCBSZWNlbnQgSXRlbXMnLFxyXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnTnVtYmVyIG9mIHJlY2VudGx5IG1vZGlmaWVkIGZpbGVzIHRvIHNob3cgKG1heCAyMCkuJyxcclxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdNYXggdGFzayBpdGVtcycsXHJcbiAgICAnc2V0dGluZ3MubWF4VGFza3NEZXNjJzogJ051bWJlciBvZiBkYWlseS1ub3RlIHRhc2tzIHRvIHNob3cgKG1heCAyMCkuJyxcclxuICAgICdzZXR0aW5ncy5tYXhJbmJveCc6ICdNYXggaW5ib3ggaXRlbXMnLFxyXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdOdW1iZXIgb2YgaW5ib3ggZmlsZSBuYW1lcyB0byBzaG93IChtYXggMjApLicsXHJcbiAgICAnc2V0dGluZ3MuYWJvdXQnOiAnQWJvdXQnLFxyXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnVmVyc2lvbicsXHJcbiAgICAnc2V0dGluZ3MudmVyc2lvbkRlc2MnOiAnS09TIENvY2twaXQgdjAuMi4wIFx1MjAxNCBBIGtub3dsZWRnZSBtYW5hZ2VtZW50IGRhc2hib2FyZCBmb3IgdGhlIEtPU19MTE0tV2lraSB2YXVsdC4gUGFydCBvZiB0aGUgS09TIGVjb3N5c3RlbS4nLFxyXG4gICAgJ3NldHRpbmdzLm5vdGVzQ291bnQnOiAnTm90ZXM6IHtjb3VudH0nLFxyXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXHJcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXHJcblxyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdEYXNoYm9hcmQgU2VjdGlvbnMnLFxyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnVG9nZ2xlIHdoaWNoIHNlY3Rpb25zIGFwcGVhciBvbiB0aGUgY29ja3BpdCBkYXNoYm9hcmQuJyxcclxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ0RhdGEgTGltaXRzJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrcyc6IFwiVG9kYXkncyBUYXNrc1wiLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25Ub2RheVRhc2tzRGVzYyc6ICdEYWlseSBub3RlIHRhc2sgbGlzdCBhbmQgcHJvZ3Jlc3MuJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHMnOiAnQWN0aXZlIFByb2plY3RzJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHNEZXNjJzogJ1Byb2plY3QgY2FyZHMgd2l0aCBwcmlvcml0eSBhbmQgcHJvZ3Jlc3MuJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0cyc6ICdWYXVsdCBTdGF0aXN0aWNzJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0c0Rlc2MnOiAnVG90YWwgbm90ZXMsIGFjdGl2ZSBwcm9qZWN0cywgaW5ib3ggY291bnQuJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHknOiAnUmVjZW50IEFjdGl2aXR5JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHlEZXNjJzogJ1JlY2VudGx5IG1vZGlmaWVkIGZpbGVzLicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbk5hdic6ICdOYXZpZ2F0aW9uJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uTmF2RGVzYyc6ICdRdWljayBsaW5rcyB0byBhcmVhcywgaW5ib3gsIGhvdCBjYWNoZS4nLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzJzogJ0luYm94IEZpbGVzJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlc0Rlc2MnOiAnTGlzdCBvZiBwZW5kaW5nIGZpbGVzIGluIDAgSW5ib3gvLicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkVuZ2luZVN0YXRlJzogJ0VuZ2luZSBTdGF0ZScsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbkVuZ2luZVN0YXRlRGVzYyc6ICdUcmlhZ2UvQ29tcGlsZS9MaW5rIGVuZ2luZSBzdGF0dXMgY2hpcHMuJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnQnOiAnV2Vla2x5IENoYXJ0JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnREZXNjJzogJ0JhciBjaGFydCBvZiB3ZWVrbHkgZGFpbHktbm90ZSBjYXB0dXJlcy4nLFxyXG4gICAgJ3NldHRpbmdzLmdlbmVyYWxUYWInOiAnR2VuZXJhbCcsXHJcbiAgICAnc2V0dGluZ3MucHJvdmlkZXJUYWInOiAnUHJvdmlkZXIgU2V0dGluZ3MnLFxyXG5cclxuICAgICdub3RpY2UudHJpYWdlJzogJ0tPUy1UcmlhZ2UgbGF1bmNoZWQnLFxyXG4gICAgJ25vdGljZS5jb21waWxlJzogJ0tPUy1Db21waWxlIGxhdW5jaGVkJyxcclxuICAgICdub3RpY2UubGluayc6ICdLT1MtTGluayBzdGFydGVkJyxcclxuICAgICdub3RpY2UucXVlcnknOiAnS09TLVF1ZXJ5IHBhbmVsIG9wZW5lZCcsXHJcbiAgICAnbm90aWNlLmRhaWx5JzogJ0RhaWx5IE9wZW4gY3JlYXRpbmcuLi4nLFxyXG4gICAgJ25vdGljZS53ZWVrJzogJ1dlZWstUmV2aWV3IGdlbmVyYXRpbmcuLi4nLFxyXG4gICAgJ25vdGljZS5pbml0JzogJ0tPUy1Jbml0IGhlYWx0aCBjaGVjay4uLicsXHJcbiAgICAnbm90aWNlLmxpZmUnOiAnTGlmZStBSSBwYW5lbCBvcGVuZWQnLFxyXG4gICAgJ25vdGljZS5leGVjdXRpbmcnOiAnRXhlY3V0aW5nOiB7YWN0aW9ufScsXHJcbiAgfSxcclxuXHJcbiAgJ3poLXR3Jzoge1xyXG4gICAgJ2FwcC5uYW1lJzogJ0tPUyBDb2NrcGl0JyxcclxuICAgICdhcHAubG9hZGluZyc6ICdcdTZCNjNcdTU3MjhcdThGMDlcdTUxNjUgS09TIENvY2twaXQuLi4nLFxyXG4gICAgJ2FwcC5lcnJvcic6ICdcdThGMDlcdTUxNjVcdTUxMDBcdTg4NjhcdTY3N0ZcdTY2NDJcdTc2N0NcdTc1MUZcdTkzMkZcdThBQTRcdTMwMDInLFxyXG4gICAgJ2FwcC5yZXRyeSc6ICdcdTkxQ0RcdThBNjYnLFxyXG5cclxuICAgICdwYW5lbC5ob21lJzogJ0tPUyBDb2NrcGl0JyxcclxuICAgICdwYW5lbC5jaGF0JzogJ0tPUyBBSSBDaGF0JyxcclxuICAgICdwYW5lbC5saWZlJzogJ0xpZmUrQUknLFxyXG4gICAgJ3BhbmVsLnBpcGVsaW5lJzogJ1BpcGVsaW5lJyxcclxuICAgICdwYW5lbC5nYXJkZW4nOiAnXHU3N0U1XHU4QjU4XHU4MkIxXHU1NzEyJyxcclxuICAgICdwYW5lbC5zZXR0aW5ncyc6ICdcdThBMkRcdTVCOUEnLFxyXG5cclxuICAgICdoZWFkZXIuZGF0ZUZvcm1hdCc6ICdZWVlZLU1NLUREJyxcclxuICAgICdoZWFkZXIubm90ZVN0YXR1cyc6ICdcdTZCQ0ZcdTY1RTVcdTdCNDZcdThBMTggW3tzdGF0dXN9XScsXHJcbiAgICAnaGVhZGVyLm5vdGVDcmVhdGVkJzogJ1x1NURGMlx1NUVGQVx1N0FDQicsXHJcbiAgICAnaGVhZGVyLm5vdGVOb3RDcmVhdGVkJzogJ1x1NjcyQVx1NUVGQVx1N0FDQicsXHJcbiAgICAnaGVhZGVyLnRvZGF5Rm9jdXMnOiAnXHU0RUNBXHU2NUU1XHU3MTI2XHU5RURFOiB7Zm9jdXN9JyxcclxuICAgICdoZWFkZXIuZm9jdXNOb3RTZXQnOiAnKFx1NjcyQVx1OEEyRFx1NUI5QSknLFxyXG5cclxuICAgICdkYXkuc3VuJzogJ1x1NjVFNScsXHJcbiAgICAnZGF5Lm1vbic6ICdcdTRFMDAnLFxyXG4gICAgJ2RheS50dWUnOiAnXHU0RThDJyxcclxuICAgICdkYXkud2VkJzogJ1x1NEUwOScsXHJcbiAgICAnZGF5LnRodSc6ICdcdTU2REInLFxyXG4gICAgJ2RheS5mcmknOiAnXHU0RTk0JyxcclxuICAgICdkYXkuc2F0JzogJ1x1NTE2RCcsXHJcblxyXG4gICAgJ2FjdGlvbi5wbGFuVG9kYXknOiAnXHU4OThGXHU1MjgzXHU0RUNBXHU1OTI5JyxcclxuICAgICdhY3Rpb24uY2FwdHVyZSc6ICdcdTVGRUJcdTkwMUZcdTYzNTVcdTYzNDknLFxyXG4gICAgJ2FjdGlvbi5kYXlSZXZpZXcnOiAnXHU2QkNGXHU2NUU1XHU1NkRFXHU5ODY3JyxcclxuICAgICdhY3Rpb24ubmV3UHJvamVjdCc6ICdcdTY1QjBcdTVFRkFcdTVDMDhcdTY4NDgnLFxyXG4gICAgJ2FjdGlvbi50cmlhZ2UnOiAnVHJpYWdlJyxcclxuICAgICdhY3Rpb24uc2V0dGluZ3MnOiAnXHU4QTJEXHU1QjlBJyxcclxuICAgICdhY3Rpb24uYWlDaGF0JzogJ0FJIENoYXQnLFxyXG5cclxuICAgICd0YXNrLnRpdGxlJzogJ1x1NEVDQVx1NjVFNVx1NEVGQlx1NTJEOScsXHJcbiAgICAndGFzay5wcm9ncmVzcyc6ICd7ZG9uZX0ve3RvdGFsfSAoe3JhdGV9JSknLFxyXG4gICAgJ3Rhc2subm9uZSc6ICdcdTY2QUJcdTcxMjFcdTRFRkJcdTUyRDlcdTMwMDInLFxyXG4gICAgJ3Rhc2suZGFpbHlNaXNzaW5nJzogJ1x1NEVDQVx1NjVFNVx1N0I0Nlx1OEExOFx1NjcyQVx1NUVGQVx1N0FDQlx1MzAwMlx1OUVERVx1NjRDQSBbXHU4OThGXHU1MjgzXHU0RUNBXHU1OTI5XSBcdTVFRkFcdTdBQ0JcdTMwMDInLFxyXG5cclxuICAgICdwcm9qZWN0LnRpdGxlJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXHJcbiAgICAncHJvamVjdC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTZEM0JcdThFOERcdTVDMDhcdTY4NDhcdTMwMDInLFxyXG4gICAgJ3Byb2plY3QubmV3JzogJ1x1NjVCMFx1NUVGQVx1NUMwOFx1Njg0OCcsXHJcblxyXG4gICAgJ3N0YXRzLnRpdGxlJzogJ1x1NzdFNVx1OEI1OFx1NUVBQlx1N0Q3MVx1OEEwOCcsXHJcbiAgICAnc3RhdHMudG90YWxOb3Rlcyc6ICdcdTdFM0RcdTdCNDZcdThBMTgnLFxyXG4gICAgJ3N0YXRzLmFjdGl2ZVByb2plY3RzJzogJ1x1NkQzQlx1OEU4RFx1NUMwOFx1Njg0OCcsXHJcbiAgICAnc3RhdHMudG9kYXlOZXcnOiAnXHU0RUNBXHU2NUU1XHU2NUIwXHU1ODlFJyxcclxuICAgICdzdGF0cy5wZW5kaW5nVHJpYWdlJzogJ1x1NUY4NVx1NTIwNlx1OTg1RScsXHJcblxyXG4gICAgJ3JlY2VudC50aXRsZSc6ICdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDUnLFxyXG4gICAgJ3JlY2VudC5lbXB0eSc6ICdcdTY2QUJcdTcxMjFcdTZEM0JcdTUyRDVcdTMwMDInLFxyXG5cclxuICAgICduYXYudGl0bGUnOiAnXHU0RTA5XHU2NTJGXHU2N0YxIFx1MDBCNyBcdTVDMEVcdTgyMkEnLFxyXG5cclxuICAgICdpbmJveC50aXRsZSc6ICdJbmJveCAoe2NvdW50fSknLFxyXG4gICAgJ2luYm94Lm1vcmUnOiAnK3tjb3VudH0gbW9yZS4uLicsXHJcblxyXG4gICAgJ2VuZ2luZS50aXRsZSc6ICdcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEInLFxyXG4gICAgJ2VuZ2luZS5jb250cm9sJzogJ1x1NUYxNVx1NjRDRVx1NjNBN1x1NTIzNicsXHJcbiAgICAnZW5naW5lLnN0YXR1c1JlYWR5JzogJ1x1NUMzMVx1N0REMicsXHJcbiAgICAnZW5naW5lLnN0YXR1c05lZWRzV29yayc6ICdcdTk3MDBcdTg2NTVcdTc0MDYnLFxyXG4gICAgJ2VuZ2luZS5zdGF0dXNTdGFuZGJ5JzogJ1x1NUY4NVx1NTQ3RCcsXHJcbiAgICAnZW5naW5lLmVtcHR5JzogJ1x1NjZBQlx1NzEyMVx1NUYxNVx1NjRDRVx1NzJDMFx1NjE0Qlx1OENDN1x1NjU5OVx1MzAwMicsXHJcblxyXG4gICAgJ3dlZWtseS50aXRsZSc6ICdcdTY3MkNcdTkwMzFcdThBMThcdTkzMDRcdTUyMDZcdTRGNDgnLFxyXG4gICAgJ3dlZWtseS5lbXB0eSc6ICdcdTY3MkNcdTkwMzFcdTY2QUJcdTcxMjFcdTY1RTVcdThBMThcdThBMThcdTkzMDRcdTMwMDInLFxyXG4gICAgJ3dlZWtseS5iYXJUb29sdGlwJzogJ3tkYXRlfToge2NvdW50fSBcdTY4OUQnLFxyXG5cclxuICAgICdwaXBlbGluZS5pbmJveCc6ICdcdTY1MzZcdTRFRjZcdTdCQjEnLFxyXG4gICAgJ3BpcGVsaW5lLnRyaWFnZSc6ICdcdTUyMDZcdTk4NUUnLFxyXG4gICAgJ3BpcGVsaW5lLnJhdyc6ICdcdTUzOUZcdTU5Q0InLFxyXG4gICAgJ3BpcGVsaW5lLmNvbXBpbGUnOiAnXHU3REU4XHU4QjZGJyxcclxuICAgICdwaXBlbGluZS53aWtpJzogJ1x1NzdFNVx1OEI1OFx1NUVBQicsXHJcbiAgICAncGlwZWxpbmUuY2xpY2tOYXZpZ2F0ZSc6ICdcdTlFREVcdTY0Q0FcdTUzRUZcdTVDMEVcdTgyMkEnLFxyXG5cclxuICAgICd0b2RheS50aXRsZSc6ICdcdTRFQ0FcdTY1RTVcdTcxMjZcdTlFREUnLFxyXG4gICAgJ3RvZGF5LnRhc2tzJzogJ1x1NEVGQlx1NTJEOScsXHJcbiAgICAndG9kYXkuc3RyZWFrJzogJ1x1OTAyM1x1N0U4QycsXHJcbiAgICAndG9kYXkudG9kYXknOiAnXHU0RUNBXHU1OTI5JyxcclxuICAgICd0b2RheS5kYWlseSc6ICdcdTZCQ0ZcdTY1RTUnLFxyXG4gICAgJ3RvZGF5LndlZWtseVRvdGFsJzogJ1x1NjcyQ1x1OTAzMVx1NTE3MSB7Y291bnR9IFx1Njg5RCcsXHJcbiAgICAndG9kYXkuam91cm5hbCc6ICdcdTRFQ0FcdTY1RTVcdTY1RTVcdThBMTg6IHtjb3VudH0gXHU2ODlEJyxcclxuICAgICd0b2RheS5jcmVhdGVOb3RlJzogJ1x1NUVGQVx1N0FDQlx1NEVDQVx1NjVFNVx1N0I0Nlx1OEExOCcsXHJcbiAgICAndG9kYXkuZG9uZSc6ICdEb25lJyxcclxuICAgICd0b2RheS5wZW5kaW5nJzogJ1BlbmRpbmcnLFxyXG5cclxuICAgICdncm93dGgudGl0bGUnOiAnXHU3N0U1XHU4QjU4XHU4MkIxXHU1NzEyJyxcclxuICAgICdncm93dGgudG9kYXlKb3VybmFsJzogJ1x1NEVDQVx1NjVFNVx1NjVFNVx1OEExODoge2NvdW50fSBcdTY4OUQnLFxyXG4gICAgJ2dyb3d0aC53ZWVrbHlUb3RhbCc6ICdcdTY3MkNcdTkwMzFcdTUxNzEge2NvdW50fSBcdTY4OURcdThBMThcdTkzMDQnLFxyXG5cclxuICAgICdmZWVkLnRpdGxlJzogJ1x1NkQzQlx1NTJENVx1NkQ0MScsXHJcblxyXG4gICAgJ2hlYWx0aC50aXRsZSc6ICdcdTc3RTVcdThCNThcdTVFQUJcdTUwNjVcdTVFQjcnLFxyXG4gICAgJ2hlYWx0aC5zY29yZSc6ICd7c2NvcmV9LzEwMCcsXHJcblxyXG4gICAgJ2xhdW5jaC50aXRsZSc6ICdcdTVGRUJcdTkwMUZcdTU1NUZcdTUyRDUnLFxyXG5cclxuICAgICdob3QudGl0bGUnOiAnXHU3MUIxXHU5RURFXHU1MkQ1XHU2MTRCJyxcclxuICAgICdob3QuZW1wdHknOiAnXHU2NkFCXHU3MTIxXHU3MUIxXHU5RURFXHU1MkQ1XHU2MTRCXHUzMDAyJyxcclxuXHJcbiAgICAnbGlmZS50aXRsZSc6ICdMaWZlK0FJJyxcclxuICAgICdsaWZlLnN1YnRpdGxlJzogJ1x1NzUxRlx1NkQzQiBcdTAwQjcgXHU1Qjc4XHU3RkQyIFx1MDBCNyBcdTVERTVcdTRGNUMgXHUyMDE0IFx1NEUwOVx1NjUyRlx1NjdGMVx1OTAzMVx1NjcxRlx1N0JBMVx1NzQwNicsXHJcbiAgICAnbGlmZS5waWxsYXJMaWZlJzogJ1x1NzUxRlx1NkQzQicsXHJcbiAgICAnbGlmZS5waWxsYXJMZWFybmluZyc6ICdcdTVCNzhcdTdGRDInLFxyXG4gICAgJ2xpZmUucGlsbGFyV29yayc6ICdcdTVERTVcdTRGNUMnLFxyXG4gICAgJ2xpZmUuaGVhbHRoUHJvZ3Jlc3MnOiAnXHU1MDY1XHU1RUI3XHU5MDMyXHU1RUE2JyxcclxuICAgICdsaWZlLmhhYml0VHJhY2tpbmcnOiAnXHU3RkQyXHU2MTYzXHU4RkZEXHU4RTY0JyxcclxuICAgICdsaWZlLmxlYXJuaW5nUHJvZ3Jlc3MnOiAnXHU1Qjc4XHU3RkQyXHU5MDMyXHU1RUE2JyxcclxuICAgICdsaWZlLnNraWxsQnVpbGRpbmcnOiAnXHU2MjgwXHU4MEZEXHU1N0Y5XHU5OTBBJyxcclxuICAgICdsaWZlLnByb2plY3RQcm9ncmVzcyc6ICdcdTVDMDhcdTY4NDhcdTkwMzJcdTVFQTYnLFxyXG4gICAgJ2xpZmUudG9kYXlUYXNrcyc6ICdcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDknLFxyXG4gICAgJ2xpZmUuYWN0aXZlJzogJ2FjdGl2ZScsXHJcbiAgICAnbGlmZS50YXNrcyc6ICd0YXNrcycsXHJcbiAgICAnbGlmZS53ZWVrbHlSZXBvcnQnOiAnXHU5MDMxXHU1ODMxJyxcclxuICAgICdsaWZlLm1vbnRobHlSZXBvcnQnOiAnXHU2NzA4XHU1ODMxJyxcclxuXHJcbiAgICAncGlwZWxpbmUudGl0bGUnOiAnXHU3QkExXHU5MDUzJyxcclxuICAgICdwaXBlbGluZS53ZWVrbHlDYXB0dXJlcyc6ICdcdTY3MkNcdTkwMzFcdTYzNTVcdTczNzInLFxyXG4gICAgJ3BpcGVsaW5lLmluYm94U2VjdGlvbic6ICdJbmJveCAoe2NvdW50fSknLFxyXG4gICAgJ3BpcGVsaW5lLnJhd1NlY3Rpb24nOiAnUmF3ICh7Y291bnR9KScsXHJcbiAgICAncGlwZWxpbmUudGhyb3VnaHB1dFNlY3Rpb24nOiAnVGhyb3VnaHB1dCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVUaXRsZSc6ICdcdTZBMTlcdTk4NEMnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlRGF5cyc6ICdcdTU5MjlcdTY1NzgnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlU291cmNlJzogJ1x1NEY4Nlx1NkU5MCcsXHJcbiAgICAncGlwZWxpbmUudGFibGVXb3Jkcyc6ICdcdTVCNTdcdTY1NzgnLFxyXG4gICAgJ3BpcGVsaW5lLnRhYmxlUHJpb3JpdHknOiAnXHU1MTJBXHU1MTQ4XHU3RDFBJyxcclxuICAgICdwaXBlbGluZS5ub0luYm94JzogJ1x1NjZBQlx1NzEyMVx1NUY4NVx1ODY1NVx1NzQwNiBJbmJveFx1MzAwMicsXHJcbiAgICAncGlwZWxpbmUubm9SYXcnOiAnXHU2NkFCXHU3MTIxXHU1Rjg1XHU3REU4XHU4QjZGXHU2QTk0XHU2ODQ4XHUzMDAyJyxcclxuICAgICdwaXBlbGluZS5jdXJyZW50V2Vlayc6ICdcdTc1NzZcdTUyNERcdTkwMzFcdTkwMUFcdTkxQ0Y6IHt0b3RhbH0gXHU2ODlEXHU4QTE4XHU5MzA0LCBcdTY1RTVcdTU3NDcge2F2Z30nLFxyXG5cclxuICAgICdnYXJkZW4udGl0bGUnOiAnXHU3N0U1XHU4QjU4XHU4MkIxXHU1NzEyJyxcclxuICAgICdnYXJkZW4ubm90ZXMnOiAne2NvdW50fSBcdTdCQzdcdTdCNDZcdThBMTgnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVByb2plY3RzJzogJ1x1NUMwOFx1Njg0OCAoMSBQcm9qZWN0cyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeUFyZWFzJzogJ1x1OTgxOFx1NTdERiAoMiBBcmVhcyknLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVJlc291cmNlcyc6ICdcdThDQzdcdTZFOTAgKDMgUmVzb3VyY2VzKScsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5SW5ib3gnOiAnSW5ib3gnLFxyXG4gICAgJ2dhcmRlbi5jYXRlZ29yeVBlcmlvZGljJzogJ1x1OTAzMVx1NjcxRiAoUGVyaW9kaWMpJyxcclxuICAgICdnYXJkZW4uY2F0ZWdvcnlUb3RhbCc6ICdcdTU0MDhcdThBMDgnLFxyXG4gICAgJ2dhcmRlbi50YWJsZURpcmVjdG9yeSc6ICdcdTc2RUVcdTkzMDQnLFxyXG4gICAgJ2dhcmRlbi50YWJsZUNvdW50JzogJ1x1N0JDN1x1NjU3OCcsXHJcbiAgICAnZ2FyZGVuLmNhdGVnb3J5U2VjdGlvbic6ICdcdTUyMDZcdTk4NUUnLFxyXG4gICAgJ2dhcmRlbi5yZWNlbnRVcGRhdGVzJzogJ1x1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMCcsXHJcbiAgICAnZ2FyZGVuLnF1aWNrU2VhcmNoJzogJ1x1NUZFQlx1OTAxRlx1NjdFNVx1OEE2MicsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaFBsYWNlaG9sZGVyJzogJ1x1OEYzOFx1NTE2NVx1OTVEQ1x1OTM3NVx1NUI1N1x1NjQxQ1x1NUMwQlx1NzdFNVx1OEI1OFx1NUVBQi4uLicsXHJcbiAgICAnZ2FyZGVuLnNlYXJjaEJ0bic6ICdcdTY3RTVcdThBNjInLFxyXG4gICAgJ2dhcmRlbi5ub1JlY2VudCc6ICdcdTY2QUJcdTcxMjFcdTY3MDBcdThGRDFcdTY2RjRcdTY1QjBcdTMwMDInLFxyXG5cclxuICAgICdzZWFyY2gucGxhY2Vob2xkZXInOiAnXHU2NDFDXHU1QzBCXHU3QjQ2XHU4QTE4Li4uJyxcclxuICAgICdzZWFyY2guYnRuJzogJ1x1NjQxQ1x1NUMwQicsXHJcblxyXG4gICAgJ3Rvb2x0aXAucmVmcmVzaCc6ICdcdTkxQ0RcdTY1QjBcdTY1NzRcdTc0MDYnLFxyXG4gICAgJ3Rvb2x0aXAuY29sbGFwc2UnOiAnXHU2Mjk4XHU3NThBJyxcclxuXHJcbiAgICAnYWkudGl0bGUnOiAnQUkgXHU1QzBEXHU4QTcxJyxcclxuICAgICdhaS5wbGFjZWhvbGRlcic6ICdcdThBNjJcdTU1NEYgS09TIFx1NzdFNVx1OEI1OFx1NUVBQi4uLicsXHJcbiAgICAnYWkud2VsY29tZSc6ICdcdTRGNjBcdTU5N0RcdUZGMDFcdTYyMTFcdTY2MkYgS09TIEFJIFx1NTJBOVx1NjI0Qlx1MzAwMlx1NEY2MFx1NTNFRlx1NEVFNVx1NTU0Rlx1NjIxMVx1OTVEQ1x1NjVCQ1x1NzdFNVx1OEI1OFx1NUVBQlx1MzAwMVx1NUMwOFx1Njg0OFx1NzJDMFx1NjE0Qlx1NjIxNlx1NEVGQlx1NEY1NSBLT1MgXHU3NkY4XHU5NURDXHU3Njg0XHU1NTRGXHU5ODRDXHUzMDAyJyxcclxuICAgICdhaS5zZW5kQnRuJzogJ1x1NzY3Q1x1OTAwMScsXHJcbiAgICAnYWkuY2xlYXJCdG4nOiAnXHU2RTA1XHU3QTdBXHU1QzBEXHU4QTcxJyxcclxuICAgICdhaS50aGlua2luZyc6ICdcdTYwMURcdTgwMDNcdTRFMkQuLi4nLFxyXG4gICAgJ2FpLm5lZWRDb25maWcnOiAnXHU2NzJBXHU1MDc1XHU2RTJDXHU1MjMwIEZMT1dub3RlIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEU1Rlx1NjcyQVx1NjI3RVx1NTIzMFx1NjI0Qlx1NTJENSBBUEkgXHU4QTJEXHU1QjlBXHUzMDAyXHU4QUNCXHU1NzI4IEZMT1dub3RlIFx1NEUyRFx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwQ1x1NjIxNlx1NTcyOCBDb2NrcGl0IFx1OEEyRFx1NUI5QVx1NEUyRFx1NjI0Qlx1NTJENVx1NTg2Qlx1NUJFQlx1MzAwMicsXHJcbiAgICAnYWkuZXJyb3InOiAnXHU4QUNCXHU2QzQyXHU1OTMxXHU2NTU3OiB7bXNnfScsXHJcbiAgICAnYWkucmV0cnknOiAnXHU5MUNEXHU4QTY2JyxcclxuICAgICdhaS5jb3B5JzogJ1x1ODkwN1x1ODhGRCcsXHJcbiAgICAnYWkuY29waWVkJzogJ1x1NURGMlx1ODkwN1x1ODhGRCcsXHJcbiAgICAnYWkubW9kZWxMYWJlbCc6ICdcdTZBMjFcdTU3OEInLFxyXG4gICAgJ2FpLmNvbm5lY3RlZCc6ICdcdTVERjJcdTkwMjNcdTYzQTUnLFxyXG4gICAgJ2FpLm5vdENvbmZpZ3VyZWQnOiAnXHU2NzJBXHU5MTREXHU3RjZFJyxcclxuICAgICdhaS53ZWxjb21lVGl0bGUnOiAnQXNrIEtPUycsXHJcbiAgICAnYWkuc3VnZ2VzdFByb2plY3RzJzogJ1x1NUMwOFx1Njg0OFx1Njk4Mlx1ODlCRCcsXHJcbiAgICAnYWkuc3VnZ2VzdFByb2plY3RzRGVzYyc6ICdcdTY3RTVcdTc3MEJcdTZEM0JcdThFOERcdTVDMDhcdTY4NDhcdTkwMzJcdTVFQTYnLFxyXG4gICAgJ2FpLnN1Z2dlc3RSZWNlbnQnOiAnXHU4RkQxXHU2NzFGXHU2RDNCXHU1MkQ1JyxcclxuICAgICdhaS5zdWdnZXN0UmVjZW50RGVzYyc6ICdcdTY3MDBcdThGRDFcdTRGRUVcdTY1MzlcdTc2ODRcdTdCNDZcdThBMTgnLFxyXG4gICAgJ2FpLnN1Z2dlc3RTZWFyY2gnOiAnXHU2NDFDXHU1QzBCXHU3N0U1XHU4QjU4XHU1RUFCJyxcclxuICAgICdhaS5zdWdnZXN0U2VhcmNoRGVzYyc6ICdcdTY3RTVcdTYyN0VcdTcyNzlcdTVCOUFcdTUxNjdcdTVCQjknLFxyXG5cclxuICAgICdhaS5wcm92aWRlclNlY3Rpb24nOiAnQUkgUHJvdmlkZXInLFxyXG4gICAgJ2FpLnByb3ZpZGVyU2VjdGlvbkRlc2MnOiAnXHU5MTREXHU3RjZFIEFJIFx1NUMwRFx1OEE3MVx1NzY4NCBBUEkgXHU2M0E1XHU1MTY1XHU1M0MzXHU2NTc4XHUzMDAyXHU4MkU1IEZMT1dub3RlIFx1NURGMlx1OTE0RFx1N0Y2RSBBSSBQcm92aWRlclx1RkYwOFx1NjNBOFx1ODVBNlx1RkYwOVx1RkYwQ0NvY2twaXQgXHU1QzA3XHU4MUVBXHU1MkQ1XHU4QjgwXHU1M0Q2XHU1MTc2XHU4QTJEXHU1QjlBXHUzMDAyXHU3NTU5XHU3QTdBXHU1MjQ3XHU4MDRBXHU1OTI5XHU1MzQwXHU0RTBEXHU1M0VGXHU3NTI4XHUzMDAyJyxcclxuICAgICdhaS5hcGlFbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxyXG4gICAgJ2FpLmFwaUtleSc6ICdBUEkgS2V5JyxcclxuICAgICdhaS5tb2RlbCc6ICdcdTZBMjFcdTU3OEJcdTU0MERcdTdBMzEnLFxyXG4gICAgJ2FpLnN5c3RlbVByb21wdCc6ICdcdTdDRkJcdTdENzFcdTYzRDBcdTc5M0FcdThBNUUnLFxyXG4gICAgJ2FpLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1x1NEY2MFx1NjYyRlx1NEUwMFx1NTAwQlx1NzdFNVx1OEI1OFx1N0JBMVx1NzQwNlx1NTJBOVx1NjI0Qlx1RkYwQ1x1NUU2Qlx1NTJBOVx1NzUyOFx1NjIzNlx1ODY1NVx1NzQwNiBLT1MgXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAyJyxcclxuXHJcbiAgICAncHJvdmlkZXIuY2xhdWRlJzogJ0NsYXVkZScsXHJcbiAgICAncHJvdmlkZXIuY29kZXgnOiAnQ29kZXgnLFxyXG4gICAgJ3Byb3ZpZGVyLm9wZW5jb2RlJzogJ09wZW5Db2RlJyxcclxuICAgICdwcm92aWRlci5lbmRwb2ludCc6ICdBUEkgRW5kcG9pbnQnLFxyXG4gICAgJ3Byb3ZpZGVyLmFwaUtleSc6ICdBUEkgS2V5JyxcclxuICAgICdwcm92aWRlci5tb2RlbCc6ICdNb2RlbCcsXHJcbiAgICAncHJvdmlkZXIuc3lzdGVtUHJvbXB0JzogJ1N5c3RlbSBQcm9tcHQnLFxyXG4gICAgJ3Byb3ZpZGVyLnN5c3RlbVByb21wdFBsYWNlaG9sZGVyJzogJ1lvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC4uLicsXHJcbiAgICAncHJvdmlkZXIuYWN0aXZlUHJvdmlkZXInOiAnQWN0aXZlIEFJIFByb3ZpZGVyJyxcclxuICAgICdwcm92aWRlci5hY3RpdmVQcm92aWRlckRlc2MnOiAnU2VsZWN0IHdoaWNoIHByb3ZpZGVyIHRoZSBBSSBDaGF0IHBhbmVsIHVzZXMuJyxcclxuICAgICdwcm92aWRlci5zZXR0aW5ncyc6ICdQcm92aWRlciBTZXR0aW5ncycsXHJcbiAgICAncHJvdmlkZXIubGFiZWxTZXR0aW5ncyc6ICd7bGFiZWx9IFNldHRpbmdzJyxcclxuICAgICdwcm92aWRlci5kZWZhdWx0RW5kcG9pbnQnOiAnXHU5ODEwXHU4QTJEOiB7ZW5kcG9pbnR9JyxcclxuICAgICdwcm92aWRlci5lbmRwb2ludERlc2MnOiAnT3BlbkFJIFx1NzZGOFx1NUJCOVx1NzY4NCBBUEkgRW5kcG9pbnQgVVJMJyxcclxuICAgICdwcm92aWRlci5hcGlLZXlEZXNjJzogJ3NrLS4uLiBcdTYyMTYgQVBJIEtleScsXHJcbiAgICAncHJvdmlkZXIubW9kZWxEZXNjJzogJ1x1NkEyMVx1NTc4Qlx1OEI1OFx1NTIyNVx1N0IyNicsXHJcbiAgICAncHJvdmlkZXIucHJlc2V0TW9kZWxzJzogJ3ttb2RlbHN9JyxcclxuXHJcbiAgICAndGFiLmRhc2hib2FyZCc6ICdcdTUxMDBcdTg4NjhcdTY3N0YnLFxyXG4gICAgJ3RhYi5saWZlJzogJ1x1NzUxRlx1NkQzQicsXHJcbiAgICAndGFiLnBpcGVsaW5lJzogJ1x1N0JBMVx1OTA1MycsXHJcbiAgICAndGFiLmdhcmRlbic6ICdcdTc3RTVcdThCNThcdTgyQjFcdTU3MTInLFxyXG4gICAgJ3RhYi5zZXR0aW5ncyc6ICdcdThBMkRcdTVCOUEnLFxyXG5cclxuICAgICdzZXR0aW5ncy50aXRsZSc6ICdcdThBMkRcdTVCOUEnLFxyXG4gICAgJ3NldHRpbmdzLmRlc2MnOiAnXHU5MTREXHU3RjZFIEtPUyBDb2NrcGl0IFx1NzY4NFx1OTg2Rlx1NzkzQVx1ODIwN1x1ODg0Q1x1NzBCQScsXHJcbiAgICAnc2V0dGluZ3MubG9jYWxlJzogJ1x1NEVDQlx1OTc2Mlx1OEE5RVx1OEEwMCcsXHJcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnXHU0RUNCXHU5NzYyXHU4QTlFXHU4QTAwJyxcclxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnXHU5MDc4XHU2NEM3IENvY2twaXQgXHU5ODZGXHU3OTNBXHU4QTlFXHU4QTAwXHUzMDAyXHU1MjA3XHU2M0RCXHU1RjhDXHU0RUNCXHU5NzYyXHU1QzA3XHU3QUNCXHU1MzczXHU5MUNEXHU2NUIwXHU2NTc0XHU3NDA2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy50aGVtZSc6ICdcdTU3RkFcdTY3MkNcdTRFM0JcdTk4NEMnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lRGFyayc6ICdcdTY2OTdcdTlFRDEnLFxyXG4gICAgJ3NldHRpbmdzLnRoZW1lTGlnaHQnOiAnXHU2NjBFXHU0RUFFJyxcclxuICAgICdzZXR0aW5ncy50aGVtZVN5c3RlbSc6ICdcdThEREZcdTk2QThcdTdDRkJcdTdENzEnLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbic6ICdcdTVCNjNcdTdCQzBcdTYwMjdcdTVGMzdcdThBQkZcdTgyNzInLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvblNwcmluZyc6ICdcdTY2MjUnLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvblN1bW1lcic6ICdcdTU5MEYnLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbkF1dHVtbic6ICdcdTc5Q0InLFxyXG4gICAgJ3NldHRpbmdzLnNlYXNvbldpbnRlcic6ICdcdTUxQUMnLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRTaXplJzogJ1x1NUI1N1x1ODY1RicsXHJcbiAgICAnc2V0dGluZ3MuZm9udFNtYWxsJzogJ1x1NUMwRicsXHJcbiAgICAnc2V0dGluZ3MuZm9udE1lZGl1bSc6ICdcdTRFMkQnLFxyXG4gICAgJ3NldHRpbmdzLmZvbnRMYXJnZSc6ICdcdTU5MjcnLFxyXG4gICAgJ3NldHRpbmdzLmdlbmVyYWwnOiAnXHU5MDFBXHU3NTI4JyxcclxuICAgICdzZXR0aW5ncy5hdXRvT3Blbic6ICdcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTk1OEJcdTU1NUYgS09TIENvY2twaXQnLFxyXG4gICAgJ3NldHRpbmdzLmF1dG9PcGVuRGVzYyc6ICdPYnNpZGlhbiBcdTU1NUZcdTUyRDVcdTY2NDJcdTgxRUFcdTUyRDVcdTU3MjhcdTUwNzRcdTkwOEFcdTZCMDRcdTk1OEJcdTU1NUYgS09TIENvY2twaXRcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudCc6ICdcdTY3MDBcdTU5MjdcdTY3MDBcdThGRDFcdTZEM0JcdTUyRDVcdTY1NzgnLFxyXG4gICAgJ3NldHRpbmdzLm1heFJlY2VudERlc2MnOiAnXHU5ODZGXHU3OTNBXHU2NzAwXHU4RkQxXHU0RkVFXHU2NTM5XHU2QTk0XHU2ODQ4XHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5tYXhUYXNrcyc6ICdcdTY3MDBcdTU5MjdcdTRFRkJcdTUyRDlcdTY1NzgnLFxyXG4gICAgJ3NldHRpbmdzLm1heFRhc2tzRGVzYyc6ICdcdTk4NkZcdTc5M0FcdTRFQ0FcdTY1RTVcdTRFRkJcdTUyRDlcdTc2ODRcdTY1NzhcdTkxQ0ZcdUZGMDhcdTY3MDBcdTU5MUEgMjBcdUZGMDlcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLm1heEluYm94JzogJ1x1NjcwMFx1NTkyNyBJbmJveCBcdTY1NzgnLFxyXG4gICAgJ3NldHRpbmdzLm1heEluYm94RGVzYyc6ICdcdTk4NkZcdTc5M0EgSW5ib3ggXHU2QTk0XHU1NDBEXHU3Njg0XHU2NTc4XHU5MUNGXHVGRjA4XHU2NzAwXHU1OTFBIDIwXHVGRjA5XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5hYm91dCc6ICdcdTk1RENcdTY1QkMnLFxyXG4gICAgJ3NldHRpbmdzLnZlcnNpb24nOiAnXHU3MjQ4XHU2NzJDJyxcclxuICAgICdzZXR0aW5ncy52ZXJzaW9uRGVzYyc6ICdLT1MgQ29ja3BpdCB2MC4yLjAgXHUyMDE0IEtPU19MTE0tV2lraSBcdTc3RTVcdThCNThcdTdCQTFcdTc0MDZcdTUxMDBcdTg4NjhcdTY3N0ZcdTMwMDJLT1MgXHU3NTFGXHU2MTRCXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5ub3Rlc0NvdW50JzogJ1x1NjUyRlx1NjNGNFx1Njg5RFx1NzZFRToge2NvdW50fSBcdTdCQzdcdTdCNDZcdThBMTgnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmdaaENOJzogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXHJcbiAgICAnc2V0dGluZ3MubGFuZ0VuJzogJ0VuZ2xpc2gnLFxyXG4gICAgJ3NldHRpbmdzLmxhbmdaaFRXJzogJ1x1N0U0MVx1OUFENFx1NEUyRFx1NjU4NycsXHJcblxyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZCc6ICdcdTUxMDBcdTg4NjhcdTY3N0ZcdTUzNDBcdTU4NEEnLFxyXG4gICAgJ3NldHRpbmdzLmRhc2hib2FyZERlc2MnOiAnXHU2M0E3XHU1MjM2XHU1MTAwXHU4ODY4XHU2NzdGXHU0RTBBXHU1NDA0XHU1MzQwXHU1ODRBXHU3Njg0XHU5ODZGXHU3OTNBXHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5kYXRhTGltaXRzJzogJ1x1OENDN1x1NjU5OVx1OTY1MFx1NTIzNicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblRvZGF5VGFza3MnOiAnXHU0RUNBXHU2NUU1XHU0RUZCXHU1MkQ5JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrc0Rlc2MnOiAnXHU2QkNGXHU2NUU1XHU3QjQ2XHU4QTE4XHU0RUZCXHU1MkQ5XHU1MjE3XHU4ODY4XHU4MjA3XHU5MDMyXHU1RUE2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHMnOiAnXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHNEZXNjJzogJ1x1NUMwOFx1Njg0OFx1NTM2MVx1NzI0N1x1RkYwQ1x1NTQyQlx1NTEyQVx1NTE0OFx1N0QxQVx1ODIwN1x1OTAzMlx1NUVBNlx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvblZhdWx0U3RhdHMnOiAnXHU3N0U1XHU4QjU4XHU1RUFCXHU3RDcxXHU4QTA4JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0c0Rlc2MnOiAnXHU3RTNEXHU3QjQ2XHU4QTE4XHU2NTc4XHUzMDAxXHU2RDNCXHU4RThEXHU1QzA4XHU2ODQ4XHUzMDAxSW5ib3ggXHU4QTA4XHU2NTc4XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHknOiAnXHU2NzAwXHU4RkQxXHU2RDNCXHU1MkQ1JyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHlEZXNjJzogJ1x1NjcwMFx1OEZEMVx1NEZFRVx1NjUzOVx1NzY4NFx1NkE5NFx1Njg0OFx1MzAwMicsXHJcbiAgICAnc2V0dGluZ3Muc2VjdGlvbk5hdic6ICdcdTVDMEVcdTgyMkEnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25OYXZEZXNjJzogJ1x1NUZFQlx1OTAxRlx1OTAyM1x1N0Q1MFx1NTIzMFx1OTgxOFx1NTdERlx1MzAwMUluYm94XHUzMDAxXHU3MUIxXHU5RURFXHU1RkVCXHU1M0Q2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlcyc6ICdJbmJveCBcdTZBOTRcdTY4NDgnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25JbmJveEZpbGVzRGVzYyc6ICcwIEluYm94LyBcdTRFMkRcdTVGODVcdTg2NTVcdTc0MDZcdTZBOTRcdTY4NDhcdTUyMTdcdTg4NjhcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZSc6ICdcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZURlc2MnOiAnVHJpYWdlL0NvbXBpbGUvTGluayBcdTVGMTVcdTY0Q0VcdTcyQzBcdTYxNEJcdTYzMDdcdTc5M0FcdTcxQzhcdTMwMDInLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydCc6ICdcdTkwMzFcdTVFQTZcdTU3MTZcdTg4NjgnLFxyXG4gICAgJ3NldHRpbmdzLnNlY3Rpb25XZWVrbHlDaGFydERlc2MnOiAnXHU2QkNGXHU5MDMxXHU2NUU1XHU4QTE4XHU2MzU1XHU3MzcyXHU5MUNGXHU3Njg0XHU5NTc3XHU2ODlEXHU1NzE2XHUzMDAyJyxcclxuICAgICdzZXR0aW5ncy5nZW5lcmFsVGFiJzogJ1x1OTAxQVx1NzUyOCcsXHJcbiAgICAnc2V0dGluZ3MucHJvdmlkZXJUYWInOiAnUHJvdmlkZXIgXHU4QTJEXHU1QjlBJyxcclxuXHJcbiAgICAnbm90aWNlLnRyaWFnZSc6ICdLT1MtVHJpYWdlIFx1NURGMlx1NTU1Rlx1NTJENScsXHJcbiAgICAnbm90aWNlLmNvbXBpbGUnOiAnS09TLUNvbXBpbGUgXHU1REYyXHU1NTVGXHU1MkQ1JyxcclxuICAgICdub3RpY2UubGluayc6ICdLT1MtTGluayBcdTVERjJcdTU1NUZcdTUyRDUnLFxyXG4gICAgJ25vdGljZS5xdWVyeSc6ICdLT1MtUXVlcnkgXHU5NzYyXHU2NzdGXHU1REYyXHU5NThCXHU1NTVGJyxcclxuICAgICdub3RpY2UuZGFpbHknOiAnXHU2QjYzXHU1NzI4XHU1RUZBXHU3QUNCIERhaWx5IE9wZW4uLi4nLFxyXG4gICAgJ25vdGljZS53ZWVrJzogJ1x1NkI2M1x1NTcyOFx1NzUxRlx1NjIxMCBXZWVrLVJldmlldy4uLicsXHJcbiAgICAnbm90aWNlLmluaXQnOiAnXHU2QjYzXHU1NzI4XHU1N0Y3XHU4ODRDIEtPUy1Jbml0IFx1NTA2NVx1NUVCN1x1NkFBMlx1NjdFNS4uLicsXHJcbiAgICAnbm90aWNlLmxpZmUnOiAnTGlmZStBSSBcdTk3NjJcdTY3N0ZcdTVERjJcdTk1OEJcdTU1NUYnLFxyXG4gICAgJ25vdGljZS5leGVjdXRpbmcnOiAnXHU1N0Y3XHU4ODRDXHU0RTJEOiB7YWN0aW9ufScsXHJcbiAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgYSBrZXkgdXNpbmcgdGhlIGN1cnJlbnQgbG9jYWxlLlxyXG4gKiBTdXBwb3J0cyB7cGxhY2Vob2xkZXJ9IHN1YnN0aXR1dGlvbiB2aWEgdGhlIHBhcmFtcyBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiB0KGtleSwgbG9jYWxlLCBwYXJhbXMgPSB7fSkge1xyXG4gIGNvbnN0IGRpY3QgPSBMT0NBTEVTW2xvY2FsZV0gfHwgTE9DQUxFU1snemgtY24nXTtcclxuICBsZXQgdGV4dCA9IGRpY3Rba2V5XTtcclxuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0ZXh0ID0gTE9DQUxFU1snemgtY24nXVtrZXldO1xyXG4gIH1cclxuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4ga2V5O1xyXG4gIH1cclxuICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhwYXJhbXMpKSB7XHJcbiAgICB0ZXh0ID0gU3RyaW5nKHRleHQpLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXHske2t9XFxcXH1gLCAnZycpLCBTdHJpbmcodikpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHQsIExPQ0FMRVMsIExPQ0FMRV9LRVlTOiBPYmplY3Qua2V5cyhMT0NBTEVTKSB9O1xyXG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IEFJIENoYXQgU2VydmljZVxuLy8gUHJvdmlkZXItYmFzZWQgY2hhdCB3aXRoIEZMT1dub3RlIGZhbGxiYWNrLlxuXG5jb25zdCBERUZBVUxUX1NZU1RFTV9QUk9NUFQgPSAnWW91IGFyZSBhIGtub3dsZWRnZSBtYW5hZ2VtZW50IGFzc2lzdGFudCBoZWxwaW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRoZWlyIEtPUyB2YXVsdC4gUmVzcG9uZCBjb25jaXNlbHkgaW4gdGhlIHVzZXJcXCdzIGxhbmd1YWdlLic7XG5cbi8qKlxuICogUmVzb2x2ZSBhY3RpdmUgcHJvdmlkZXIgY29uZmlnIGZyb20gQ29ja3BpdCBzZXR0aW5ncy5cbiAqIEZhbGxzIGJhY2sgdG8gRkxPV25vdGUgYXV0by1kZXRlY3QgaWYgbm8gcHJvdmlkZXIgaGFzIGFwaUtleS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVByb3ZpZGVyQ29uZmlnKHNldHRpbmdzLCB2YXVsdEFkYXB0ZXIpIHtcbiAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgcGlkID0gc2V0dGluZ3MuYWN0aXZlUHJvdmlkZXIgfHwgJ2NsYXVkZSc7XG4gIGNvbnN0IHByb3ZpZGVyID0gc2V0dGluZ3MucHJvdmlkZXJzICYmIHNldHRpbmdzLnByb3ZpZGVyc1twaWRdO1xuXG4gIC8vIElmIHRoZSBzZWxlY3RlZCBwcm92aWRlciBoYXMgYW4gQVBJIGtleSwgdXNlIGl0XG4gIGlmIChwcm92aWRlciAmJiBwcm92aWRlci5hcGlLZXkgJiYgcHJvdmlkZXIuZW5kcG9pbnQgJiYgcHJvdmlkZXIubW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJJZDogcGlkLFxuICAgICAgYXBpS2V5OiBwcm92aWRlci5hcGlLZXksXG4gICAgICBtb2RlbDogcHJvdmlkZXIubW9kZWwsXG4gICAgICBiYXNlVXJsOiBwcm92aWRlci5lbmRwb2ludCxcbiAgICAgIHN5c3RlbVByb21wdDogcHJvdmlkZXIuc3lzdGVtUHJvbXB0IHx8ICcnLFxuICAgICAgbGFiZWw6IHByb3ZpZGVyLmxhYmVsIHx8IHBpZCxcbiAgICB9O1xuICB9XG5cbiAgLy8gRmFsbGJhY2s6IHRyeSBhbnkgcHJvdmlkZXIgdGhhdCBoYXMgYW4gQVBJIGtleVxuICBjb25zdCBwcm92aWRlcklkcyA9IFsnY2xhdWRlJywgJ2NvZGV4JywgJ29wZW5jb2RlJ107XG4gIGZvciAoY29uc3QgaWQgb2YgcHJvdmlkZXJJZHMpIHtcbiAgICBjb25zdCBwID0gc2V0dGluZ3MucHJvdmlkZXJzICYmIHNldHRpbmdzLnByb3ZpZGVyc1tpZF07XG4gICAgaWYgKHAgJiYgcC5hcGlLZXkgJiYgcC5lbmRwb2ludCAmJiBwLm1vZGVsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlcklkOiBpZCxcbiAgICAgICAgYXBpS2V5OiBwLmFwaUtleSxcbiAgICAgICAgbW9kZWw6IHAubW9kZWwsXG4gICAgICAgIGJhc2VVcmw6IHAuZW5kcG9pbnQsXG4gICAgICAgIHN5c3RlbVByb21wdDogcC5zeXN0ZW1Qcm9tcHQgfHwgJycsXG4gICAgICAgIGxhYmVsOiBwLmxhYmVsIHx8IGlkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBMYXN0IGZhbGxiYWNrOiBGTE9Xbm90ZSBhdXRvLWRldGVjdFxuICBpZiAodmF1bHRBZGFwdGVyICYmIHR5cGVvZiB2YXVsdEFkYXB0ZXIucmVhZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBhd2FpdCB2YXVsdEFkYXB0ZXIucmVhZCgnLm9ic2lkaWFuL3BsdWdpbnMvZmxvd25vdGUvZGF0YS5qc29uJyk7XG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBjb25zdCBhcCA9IGNvbmZpZyAmJiBjb25maWcuc2V0dGluZ3MgJiYgY29uZmlnLnNldHRpbmdzLmFnZW50UHJvdmlkZXI7XG4gICAgICBpZiAoYXAgJiYgYXAuZW5hYmxlZCkge1xuICAgICAgICBjb25zdCBkaXJlY3QgPSBhcC5kaXJlY3QgfHwgYXBbYXAubW9kZV07XG4gICAgICAgIGlmIChkaXJlY3QpIHtcbiAgICAgICAgICBjb25zdCBwcm92aWRlcklkID0gZGlyZWN0LnByb3ZpZGVySWQ7XG4gICAgICAgICAgY29uc3QgYXBpS2V5cyA9IGRpcmVjdC5hcGlLZXlzIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGFwaUtleSA9IGFwaUtleXNbcHJvdmlkZXJJZF07XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBkaXJlY3QubW9kZWwgfHwgJyc7XG4gICAgICAgICAgaWYgKGFwaUtleSAmJiBtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcHJvdmlkZXJJZCxcbiAgICAgICAgICAgICAgYXBpS2V5LFxuICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgYmFzZVVybDogZGlyZWN0LmJhc2VVcmxPdmVycmlkZSB8fCAnaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxJyxcbiAgICAgICAgICAgICAgc3lzdGVtUHJvbXB0OiAnJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdGTE9Xbm90ZTogJyArIHByb3ZpZGVySWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbi8vIEFJQ2hhdCBjbGFzc1xuLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmNsYXNzIEFJQ2hhdCB7XG4gIGNvbnN0cnVjdG9yKGNmZykge1xuICAgIHRoaXMuY2ZnID0gY2ZnIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgdGhpcy5fYWRkV2VsY29tZSgpO1xuICB9XG5cbiAgZ2V0IF9sb2NhbGUoKSB7IHJldHVybiAodGhpcy5jZmcgJiYgdGhpcy5jZmcubG9jYWxlKSB8fCAnemgtY24nOyB9XG5cbiAgZ2V0IGlzQ29uZmlndXJlZCgpIHtcbiAgICBjb25zdCBjID0gdGhpcy5jZmcgfHwge307XG4gICAgcmV0dXJuICEhKGMuYmFzZVVybCAmJiBjLmFwaUtleSAmJiBjLm1vZGVsKTtcbiAgfVxuXG4gIGdldCBwcm92aWRlckxhYmVsKCkge1xuICAgIGNvbnN0IGMgPSB0aGlzLmNmZyB8fCB7fTtcbiAgICByZXR1cm4gYy5sYWJlbCB8fCBjLmJhc2VVcmwgfHwgJ1Vua25vd24nO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuX2FkZFdlbGNvbWUoKTtcbiAgfVxuXG4gIGdldEhpc3RvcnkoKSB7IHJldHVybiB0aGlzLm1lc3NhZ2VzLnNsaWNlKCk7IH1cblxuICBzZW5kTWVzc2FnZShjb250ZW50LCBjYWxsYmFja3MgPSB7fSkge1xuICAgIGNvbnN0IHsgb25Ub2tlbiwgb25Eb25lLCBvbkVycm9yIH0gPSBjYWxsYmFja3M7XG4gICAgY29uc3QgYyA9IHRoaXMuY2ZnIHx8IHt9O1xuXG4gICAgaWYgKCF0aGlzLmlzQ29uZmlndXJlZCkge1xuICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IobmV3IEVycm9yKCdBSSBub3QgY29uZmlndXJlZCcpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHJvbGU6ICd1c2VyJywgY29udGVudDogU3RyaW5nKGNvbnRlbnQpLnRyaW0oKSB9KTtcblxuICAgIGNvbnN0IHN5c3RlbVByb21wdCA9IChjLnN5c3RlbVByb21wdCB8fCAnJykudHJpbSgpIHx8IERFRkFVTFRfU1lTVEVNX1BST01QVDtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbW9kZWw6IGMubW9kZWwsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7IHJvbGU6ICdzeXN0ZW0nLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgLi4udGhpcy5tZXNzYWdlcy5maWx0ZXIoKG0pID0+IG0ucm9sZSAhPT0gJ3N5c3RlbScpLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3Qgc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXG4gICAgbGV0IGZ1bGxSZXNwb25zZSA9ICcnO1xuXG4gICAgdGhpcy5fZG9TdHJlYW1SZXF1ZXN0KGMuYmFzZVVybCwgYy5hcGlLZXksIHBheWxvYWQsIHNpZ25hbCwge1xuICAgICAgb25Ub2tlbjogKHRva2VuKSA9PiB7XG4gICAgICAgIGZ1bGxSZXNwb25zZSArPSB0b2tlbjtcbiAgICAgICAgaWYgKG9uVG9rZW4pIG9uVG9rZW4odG9rZW4pO1xuICAgICAgfSxcbiAgICAgIG9uRG9uZTogKCkgPT4ge1xuICAgICAgICBpZiAoZnVsbFJlc3BvbnNlKSB0aGlzLm1lc3NhZ2VzLnB1c2goeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogZnVsbFJlc3BvbnNlIH0pO1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIGlmIChvbkRvbmUpIG9uRG9uZShmdWxsUmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICBpZiAob25FcnJvcikgb25FcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduYWw7XG4gIH1cblxuICBhYm9ydCgpIHtcbiAgICBpZiAodGhpcy5hYm9ydENvbnRyb2xsZXIpIHsgdGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTsgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsOyB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgUHJpdmF0ZSBcdTI1MDBcdTI1MDBcblxuICBfYWRkV2VsY29tZSgpIHtcbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLl9sb2NhbGU7XG4gICAgY29uc3Qgd2VsY29tZXMgPSB7XG4gICAgICAnemgtY24nOiAnXHU0RjYwXHU1OTdEXHVGRjAxXHU2MjExXHU2NjJGIEtPUyBBSSBcdTUyQTlcdTYyNEJcdTMwMDJcdTRGNjBcdTUzRUZcdTRFRTVcdTk1RUVcdTYyMTFcdTUxNzNcdTRFOEVcdTc3RTVcdThCQzZcdTVFOTNcdTMwMDFcdTk4NzlcdTc2RUVcdTcyQjZcdTYwMDFcdTYyMTZcdTRFRkJcdTRGNTUgS09TIFx1NzZGOFx1NTE3M1x1NzY4NFx1OTVFRVx1OTg5OFx1MzAwMicsXG4gICAgICAnZW4nOiAnSGVsbG8hIEkgYW0gdGhlIEtPUyBBSSBhc3Npc3RhbnQuIEFzayBtZSBhYm91dCB0aGUga25vd2xlZGdlIGJhc2UsIHByb2plY3Qgc3RhdHVzLCBvciBhbnl0aGluZyBLT1MtcmVsYXRlZC4nLFxuICAgICAgJ3poLXR3JzogJ1x1NEY2MFx1NTk3RFx1RkYwMVx1NjIxMVx1NjYyRiBLT1MgQUkgXHU1MkE5XHU2MjRCXHUzMDAyXHU0RjYwXHU1M0VGXHU0RUU1XHU1NTRGXHU2MjExXHU5NURDXHU2NUJDXHU3N0U1XHU4QjU4XHU1RUFCXHUzMDAxXHU1QzA4XHU2ODQ4XHU3MkMwXHU2MTRCXHU2MjE2XHU0RUZCXHU0RjU1IEtPUyBcdTc2RjhcdTk1RENcdTc2ODRcdTU1NEZcdTk4NENcdTMwMDInLFxuICAgIH07XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IHdlbGNvbWVzW2xvY2FsZV0gfHwgd2VsY29tZXNbJ3poLWNuJ10gfSk7XG4gIH1cblxuICBhc3luYyBfZG9TdHJlYW1SZXF1ZXN0KGJhc2VVcmwsIGFwaUtleSwgcGF5bG9hZCwgc2lnbmFsLCBjYWxsYmFja3MpIHtcbiAgICBjb25zdCB7IG9uVG9rZW4sIG9uRG9uZSwgb25FcnJvciB9ID0gY2FsbGJhY2tzO1xuXG4gICAgbGV0IGVuZHBvaW50ID0gU3RyaW5nKGJhc2VVcmwgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWVuZHBvaW50KSBlbmRwb2ludCA9ICdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxJztcbiAgICBpZiAoIS9cXC9jaGF0XFwvY29tcGxldGlvbnMkL2kudGVzdChlbmRwb2ludCkpIHtcbiAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnL2NoYXQvY29tcGxldGlvbnMnO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIFN0cmluZyhhcGlLZXkgfHwgJycpLnRyaW0oKSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5wYXlsb2FkLCBzdHJlYW06IHRydWUgfSksXG4gICAgICAgIHNpZ25hbCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxldCBlcnJCb2R5ID0gJyc7XG4gICAgICAgIHRyeSB7IGVyckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IH0gY2F0Y2gge31cbiAgICAgICAgY29uc3QgZXJyTXNnID0gJ0hUVFAgJyArIHJlc3BvbnNlLnN0YXR1cyArIChlcnJCb2R5ID8gJzogJyArIGVyckJvZHkuc2xpY2UoMCwgMjAwKSA6ICcnKTtcbiAgICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IobmV3IEVycm9yKGVyck1zZykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSBicmVhaztcbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICBjb25zdCB0cmltbWVkID0gbGluZS50cmltKCk7XG4gICAgICAgICAgaWYgKCF0cmltbWVkIHx8IHRyaW1tZWQgPT09ICdkYXRhOiBbRE9ORV0nKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAoIXRyaW1tZWQuc3RhcnRzV2l0aCgnZGF0YTogJykpIGNvbnRpbnVlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0cmltbWVkLnNsaWNlKDYpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ganNvbi5jaG9pY2VzICYmIGpzb24uY2hvaWNlc1swXSAmJiBqc29uLmNob2ljZXNbMF0uZGVsdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVsdGEgJiYgZGVsdGEuY29udGVudDtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgIGNvbnN0IHQgPSBidWZmZXIudHJpbSgpO1xuICAgICAgICBpZiAodC5zdGFydHNXaXRoKCdkYXRhOiAnKSAmJiB0ICE9PSAnZGF0YTogW0RPTkVdJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0LnNsaWNlKDYpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0ganNvbi5jaG9pY2VzICYmIGpzb24uY2hvaWNlc1swXSAmJiBqc29uLmNob2ljZXNbMF0uZGVsdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVsdGEgJiYgZGVsdGEuY29udGVudDtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICYmIG9uVG9rZW4pIG9uVG9rZW4oY29udGVudCk7XG4gICAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkRvbmUpIG9uRG9uZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHJldHVybjtcbiAgICAgIGlmIChvbkVycm9yKSBvbkVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBBSUNoYXQsIHJlc29sdmVQcm92aWRlckNvbmZpZywgREVGQVVMVF9TWVNURU1fUFJPTVBUIH07XG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHNoYXJlZCB1dGlsaXRpZXNcblxuLyoqXG4gKiBQYXJzZSBmcm9udG1hdHRlciBmcm9tIG1hcmtkb3duIGNvbnRlbnQuXG4gKiBSZXR1cm5zIHt9IGlmIG5vIHZhbGlkIGZyb250bWF0dGVyIGZvdW5kLlxuICovXG5mdW5jdGlvbiBwYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpIHtcbiAgY29uc3QgdGV4dCA9IFN0cmluZyhjb250ZW50IHx8ICcnKTtcbiAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eLS0tXFxuKFtcXHNcXFNdKj8pXFxuLS0tLyk7XG4gIGlmICghbWF0Y2gpIHJldHVybiB7fTtcblxuICBjb25zdCBvdXQgPSB7fTtcbiAgbWF0Y2hbMV0uc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IFN0cmluZyhsaW5lIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFpdGVtIHx8IGl0ZW0uc3RhcnRzV2l0aCgnIycpKSByZXR1cm47XG4gICAgY29uc3QgY29sb24gPSBpdGVtLmluZGV4T2YoJzonKTtcbiAgICBpZiAoY29sb24gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGtleSA9IGl0ZW0uc2xpY2UoMCwgY29sb24pLnRyaW0oKTtcbiAgICBsZXQgdmFsdWUgPSBpdGVtLnNsaWNlKGNvbG9uICsgMSkudHJpbSgpO1xuICAgIGlmICgha2V5KSByZXR1cm47XG4gICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1snKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXScpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKS5zcGxpdCgnLCcpLm1hcCgocCkgPT4gcC50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgb3V0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0IGZyb250bWF0dGVyIHZhbHVlIGJ5IG11bHRpcGxlIHBvc3NpYmxlIGtleSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gZm1WYWx1ZShmcm9udG1hdHRlciwga2V5cywgZmFsbGJhY2spIHtcbiAgY29uc3QgZm0gPSBmcm9udG1hdHRlciAmJiB0eXBlb2YgZnJvbnRtYXR0ZXIgPT09ICdvYmplY3QnID8gZnJvbnRtYXR0ZXIgOiB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm0sIGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZm1ba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmpvaW4oJywgJyk7XG4gICAgICBjb25zdCB0ZXh0ID0gU3RyaW5nKHZhbHVlID8/ICcnKS50cmltKCk7XG4gICAgICBpZiAodGV4dCkgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxsYmFjaztcbn1cblxuLyoqXG4gKiBGb3JtYXQgZGF0ZSB0byBZWVlZLU1NLUREIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cihkYXRlKSB7XG4gIGNvbnN0IGQgPSBkYXRlIHx8IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGRheSA9IFN0cmluZyhkLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG59XG5cbi8qKlxuICogQnVpbGQgdGhlIEtPUyBkYWlseSBub3RlIHBhdGggZm9yIGEgZ2l2ZW4gZGF0ZS5cbiAqIEtPUyBjb252ZW50aW9uOiBQZXJpb2RpYy9ZWVlZL01NL1lZWVktTU0tREQubWRcbiAqL1xuZnVuY3Rpb24gZGFpbHlOb3RlUGF0aChkYXRlU3RyKSB7XG4gIGNvbnN0IHBhcnRzID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xuICByZXR1cm4gYFBlcmlvZGljLyR7cGFydHNbMF19LyR7cGFydHNbMV19LyR7ZGF0ZVN0cn0ubWRgO1xufVxuXG4vKipcbiAqIEdldCBmaWxlIGJ5IHBhdGggZnJvbSB2YXVsdCwgcmV0dXJuaW5nIG51bGwgaWYgbWlzc2luZy5cbiAqL1xuZnVuY3Rpb24gZ2V0RmlsZUJ5UGF0aCh2YXVsdCwgcGF0aCkge1xuICB0cnkge1xuICAgIHJldHVybiB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogU2FmZWx5IHJlYWQgZmlsZSB0ZXh0IGNvbnRlbnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlVGV4dCh2YXVsdCwgZmlsZSkge1xuICBpZiAoIXZhdWx0IHx8ICFmaWxlKSByZXR1cm4gJyc7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB2YXVsdC5jYWNoZWRSZWFkID09PSAnZnVuY3Rpb24nKSByZXR1cm4gU3RyaW5nKGF3YWl0IHZhdWx0LmNhY2hlZFJlYWQoZmlsZSkgfHwgJycpO1xuICAgIGlmICh0eXBlb2YgdmF1bHQucmVhZCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFN0cmluZyhhd2FpdCB2YXVsdC5yZWFkKGZpbGUpIHx8ICcnKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRhc2sgc3RhdHMgKG9wZW4vZG9uZS90b3RhbCkgZnJvbSBtYXJrZG93biBjb250ZW50LlxuICovXG5mdW5jdGlvbiB0YXNrU3RhdHNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XG4gIGxldCBvcGVuID0gMDtcbiAgbGV0IGRvbmUgPSAwO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbWyB4WF1cXF1cXHMrLy50ZXN0KGxpbmUpKSB7XG4gICAgICBpZiAoL15cXHMqWy0qXVxccytcXFtbeFhdXFxdXFxzKy8udGVzdChsaW5lKSkgZG9uZSArPSAxO1xuICAgICAgZWxzZSBvcGVuICs9IDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBvcGVuLFxuICAgIGRvbmUsXG4gICAgdG90YWw6IG9wZW4gKyBkb25lLFxuICAgIGNvbXBsZXRpb25SYXRlOiBvcGVuICsgZG9uZSA+IDAgPyBNYXRoLnJvdW5kKChkb25lIC8gKG9wZW4gKyBkb25lKSkgKiAxMDApIDogMCxcbiAgfTtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYW5kIGNsZWFuIGEgZmlsZSBwYXRoLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXRoIHx8ICcnKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXFwvKy9nLCAnLycpLnJlcGxhY2UoL1xcLyskLywgJycpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIHN5c3RlbS9pbnRlcm5hbCBwYXRoIHRoYXQgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gc3RhdHMuXG4gKi9cbmZ1bmN0aW9uIGlzU3lzdGVtUGF0aChwYXRoKSB7XG4gIGNvbnN0IHZhbHVlID0gbm9ybWFsaXplUGF0aChwYXRoKTtcbiAgaWYgKC8oXnxcXC8pXFwuW14vXSsoXFwvfCQpLy50ZXN0KHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdfbG9ncy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdfbWV0YS8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCcwIEluYm94L19wcm9jZXNzZWQvJykpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnNCBBcmNoaXZlcy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdQZXJpb2RpYy8nKSkgcmV0dXJuIHRydWU7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdub2RlX21vZHVsZXMvJykpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZUZyb250bWF0dGVyLFxuICBmbVZhbHVlLFxuICBmb3JtYXREYXRlU3RyLFxuICBkYWlseU5vdGVQYXRoLFxuICBnZXRGaWxlQnlQYXRoLFxuICByZWFkRmlsZVRleHQsXG4gIHRhc2tTdGF0c0Zyb21Db250ZW50LFxuICBub3JtYWxpemVQYXRoLFxuICBpc1N5c3RlbVBhdGgsXG59O1xuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBwcm9qZWN0IHNjYW5uaW5nIHNlcnZpY2VcblxuY29uc3QgeyBwYXJzZUZyb250bWF0dGVyLCBmbVZhbHVlLCByZWFkRmlsZVRleHQsIHRhc2tTdGF0c0Zyb21Db250ZW50IH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogU2NhbiAxIFByb2plY3RzLyBkaXJlY3RvcmllcyBhbmQgYnVpbGQgYSBsaXN0IG9mIHByb2plY3Qgb3ZlcnZpZXcgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0RmlsZXModmF1bHQpIHtcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xuICBjb25zdCBmaWxlcyA9IHZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgcmV0dXJuIGZpbGVzLmZpbHRlcigoZmlsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBTdHJpbmcoZmlsZS5wYXRoIHx8ICcnKTtcbiAgICAvLyBNYXRjaDogMSBQcm9qZWN0cy88cHJvamVjdC1kaXI+Lzxwcm9qZWN0LW5hbWU+Lm1kXG4gICAgLy8gRXhjbHVkZTogXHU5ODc5XHU3NkVFXHU2MDNCXHU4OUM4Lm1kLCBSRUFETUUubWRcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnMSBQcm9qZWN0cy8nKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwYXRoLnNwbGl0KCcvJykubGVuZ3RoICE9PSAzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBhdGguZW5kc1dpdGgoJ1JFQURNRS5tZCcpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBhdGguZW5kc1dpdGgoJ1xcdUQ4M0RcXHVEQ0NEIFxcdTk4NzlcXHU3NkVFXFx1NjAzQlxcdTg5QzgubWQnKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBwcm9qZWN0IG1ldGFkYXRhIGZyb20gYSBmaWxlJ3MgY29udGVudCBhbmQgT2JzaWRpYW4gbWV0YWRhdGEgY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvamVjdChmaWxlLCBjb250ZW50LCBtZXRhZGF0YUNhY2hlKSB7XG4gIGNvbnN0IGZtID0ge1xuICAgIC4uLnBhcnNlRnJvbnRtYXR0ZXIoY29udGVudCksXG4gIH07XG5cbiAgLy8gVHJ5IHRvIGdldCByaWNoZXIgZnJvbnRtYXR0ZXIgZnJvbSBtZXRhZGF0YSBjYWNoZVxuICB0cnkge1xuICAgIGNvbnN0IGNhY2hlID0gbWV0YWRhdGFDYWNoZSAmJiB0eXBlb2YgbWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSlcbiAgICAgIDogbnVsbDtcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGUuZnJvbnRtYXR0ZXIpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZm0sIGNhY2hlLmZyb250bWF0dGVyKTtcbiAgICB9XG4gIH0gY2F0Y2gge31cblxuICBjb25zdCBzdGF0dXMgPSBmbVZhbHVlKGZtLCBbJ3N0YXR1cycsICdTdGF0dXMnXSwgJ2FjdGl2ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGZtVmFsdWUoZm0sIFsncHJpb3JpdHknLCAnUHJpb3JpdHknXSwgJycpO1xuICBjb25zdCBpdGVyYXRpb24gPSBmbVZhbHVlKGZtLCBbJ2l0ZXJhdGlvbicsICdJdGVyYXRpb24nXSwgJycpO1xuICBjb25zdCBhcmVhID0gZm1WYWx1ZShmbSwgWydhcmVhJywgJ0FyZWEnLCAnZG9tYWluJywgJ0RvbWFpbiddLCAnJyk7XG4gIGNvbnN0IHRhZ3MgPSBBcnJheS5pc0FycmF5KGZtLnRhZ3MpID8gZm0udGFncyA6IFtdO1xuXG4gIC8vIENvbXB1dGUgdGFzayBwcm9ncmVzcyBmcm9tIHRoZSBwcm9qZWN0IGZpbGUgY29udGVudFxuICBjb25zdCB0YXNrcyA9IHRhc2tTdGF0c0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gIC8vIEdldCBwcm9qZWN0IHRpdGxlIGZyb20gZmlyc3QgaDEgb3IgZGlyZWN0b3J5IG5hbWVcbiAgY29uc3QgaGVhZGluZyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5tYXRjaCgvXiNcXHMrKC4rKSQvbSk7XG4gIGNvbnN0IHRpdGxlID0gaGVhZGluZyA/IGhlYWRpbmdbMV0udHJpbSgpIDogZmlsZS5iYXNlbmFtZSB8fCAnJztcblxuICByZXR1cm4ge1xuICAgIGZpbGUsXG4gICAgcGF0aDogZmlsZS5wYXRoLFxuICAgIHRpdGxlLFxuICAgIHN0YXR1cyxcbiAgICBwcmlvcml0eSxcbiAgICBpdGVyYXRpb24sXG4gICAgYXJlYSxcbiAgICB0YWdzLFxuICAgIHRhc2tzLFxuICAgIG10aW1lOiBmaWxlLnN0YXQ/Lm10aW1lIHx8IDAsXG4gICAgY3RpbWU6IGZpbGUuc3RhdD8uY3RpbWUgfHwgMCxcbiAgfTtcbn1cblxuLyoqXG4gKiBMaXN0IGFsbCBwcm9qZWN0cywgd2l0aCBvcHRpb25hbCBmaWx0ZXJpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYWN0aXZlT25seSBcdTIwMTQgb25seSByZXR1cm4gYWN0aXZlIHByb2plY3RzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3RQcm9qZWN0cyhhcHAsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gW107XG4gIGNvbnN0IGZpbGVzID0gZmluZFByb2plY3RGaWxlcyhhcHAudmF1bHQpO1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcGFyc2VQcm9qZWN0KGZpbGUsIGNvbnRlbnQsIGFwcC5tZXRhZGF0YUNhY2hlKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgLy8gU29ydDogYWN0aXZlIGZpcnN0LCB0aGVuIGJ5IHByaW9yaXR5LCB0aGVuIGJ5IG10aW1lXG4gIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhQWN0aXZlID0gYS5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgIGNvbnN0IGJBY3RpdmUgPSBiLnN0YXR1cyA9PT0gJ2FjdGl2ZSc7XG4gICAgaWYgKGFBY3RpdmUgIT09IGJBY3RpdmUpIHJldHVybiBhQWN0aXZlID8gLTEgOiAxO1xuXG4gICAgY29uc3QgcmFuayA9IChwKSA9PiB7XG4gICAgICBjb25zdCB2ID0gU3RyaW5nKHAgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodiA9PT0gJ3AxJyB8fCB2ID09PSAnaGlnaCcpIHJldHVybiAwO1xuICAgICAgaWYgKHYgPT09ICdwMicgfHwgdiA9PT0gJ21lZGl1bScpIHJldHVybiAxO1xuICAgICAgaWYgKHYgPT09ICdwMycgfHwgdiA9PT0gJ2xvdycpIHJldHVybiAyO1xuICAgICAgcmV0dXJuIDM7XG4gICAgfTtcbiAgICBjb25zdCBieVByaW9yaXR5ID0gcmFuayhhLnByaW9yaXR5KSAtIHJhbmsoYi5wcmlvcml0eSk7XG4gICAgaWYgKGJ5UHJpb3JpdHkgIT09IDApIHJldHVybiBieVByaW9yaXR5O1xuICAgIHJldHVybiBiLm10aW1lIC0gYS5tdGltZTtcbiAgfSk7XG5cbiAgaWYgKG9wdGlvbnMuYWN0aXZlT25seSkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuc3RhdHVzID09PSAnYWN0aXZlJyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG4vKipcbiAqIEdldCBlbmdpbmUgc3RhdGUgZnJvbSBfbWV0YS9haS9tZW1vcnkvU1RBVEUubWQgKGJ1bGxldC1saXN0IGZvcm1hdCkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEVuZ2luZVN0YXRlKGFwcCkge1xuICBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgdHJpYWdlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgY29tcGlsZTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGxpbms6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBkYWlseTogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIHByb2plY3Q6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgICBhcmNoaXZlOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgY2FudmFzOiB7IGxhc3RSdW46IG51bGwsIHN0YXR1czogJ3BlbmRpbmcnLCBzdW1tYXJ5OiBudWxsIH0sXG4gICAgJ2tvcy1pbml0JzogeyBsYXN0UnVuOiBudWxsLCBzdGF0dXM6ICdwZW5kaW5nJywgc3VtbWFyeTogbnVsbCB9LFxuICAgIGxpZmU6IHsgbGFzdFJ1bjogbnVsbCwgc3RhdHVzOiAncGVuZGluZycsIHN1bW1hcnk6IG51bGwgfSxcbiAgfTtcblxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0KSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKCdfbWV0YS9haS9tZW1vcnkvU1RBVEUubWQnKTtcbiAgaWYgKCFmaWxlKSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcblxuICAvLyBTVEFURS5tZCB1c2VzIHNlY3Rpb24tYmFzZWQgYnVsbGV0IGZvcm1hdDpcbiAgLy8gIyMgdHJpYWdlXG4gIC8vIC0gbGFzdF9ydW46IDIwMjYtMDYtMDlcbiAgLy8gLSBwZW5kaW5nOiAwXG4gIC8vIC0gc3VtbWFyeTogSW5ib3ggY2xlYXJlZFxuICBjb25zdCBlbmdpbmVzID0gT2JqZWN0LmtleXMoZGVmYXVsdFN0YXRlKTtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBjdXJyZW50RW5naW5lID0gbnVsbDtcblxuICBTdHJpbmcoY29udGVudCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGxpbmUubWF0Y2goL14jI1xccysoXFxTKylcXHMqJC8pO1xuICAgIGlmIChzZWN0aW9uICYmIGVuZ2luZXMuaW5jbHVkZXMoc2VjdGlvblsxXSkpIHtcbiAgICAgIGN1cnJlbnRFbmdpbmUgPSBzZWN0aW9uWzFdO1xuICAgICAgcGFyc2VkW2N1cnJlbnRFbmdpbmVdID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY3VycmVudEVuZ2luZSkgcmV0dXJuO1xuICAgIGNvbnN0IGt2ID0gbGluZS5tYXRjaCgvXi1cXHMrKFxcdyspOlxccyooLiopJC8pO1xuICAgIGlmIChrdikge1xuICAgICAgcGFyc2VkW2N1cnJlbnRFbmdpbmVdW2t2WzFdXSA9IGt2WzJdLnRyaW0oKSB8fCBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTm9ybWFsaXplIHRvIHsgbGFzdFJ1biwgc3RhdHVzLCBzdW1tYXJ5IH0gZm9yIGNvY2twaXQgY29uc3VtcHRpb25cbiAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgZW5naW5lcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgY29uc3QgcmF3ID0gcGFyc2VkW2VdIHx8IHt9O1xuICAgIHN0YXRlW2VdID0ge1xuICAgICAgbGFzdFJ1bjogcmF3Lmxhc3RfcnVuIHx8IHJhdy5sYXN0X2RhaWx5IHx8IG51bGwsXG4gICAgICBzdGF0dXM6IHJhdy5wZW5kaW5nICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoTnVtYmVyKHJhdy5wZW5kaW5nKSA9PT0gMCA/ICdkb25lJyA6ICdwZW5kaW5nJylcbiAgICAgICAgOiAncGVuZGluZycsXG4gICAgICBzdW1tYXJ5OiByYXcuc3VtbWFyeSB8fCBudWxsLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpbmRQcm9qZWN0RmlsZXMsXG4gIHBhcnNlUHJvamVjdCxcbiAgbGlzdFByb2plY3RzLFxuICBnZXRFbmdpbmVTdGF0ZSxcbn07XG4iLCAiXHVGRUZGLy8gS09TIENvY2twaXQgXHU5MjI1P2hvbWUgZGF0YSBlbmdpbmVcclxuXHJcbmNvbnN0IHtcclxuICBwYXJzZUZyb250bWF0dGVyLFxyXG4gIGZtVmFsdWUsXHJcbiAgZm9ybWF0RGF0ZVN0cixcclxuICBkYWlseU5vdGVQYXRoLFxyXG4gIGdldEZpbGVCeVBhdGgsXHJcbiAgcmVhZEZpbGVUZXh0LFxyXG4gIHRhc2tTdGF0c0Zyb21Db250ZW50LFxyXG4gIGlzU3lzdGVtUGF0aCxcclxuICBub3JtYWxpemVQYXRoLFxyXG59ID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5jb25zdCB7IGxpc3RQcm9qZWN0cywgZ2V0RW5naW5lU3RhdGUgfSA9IHJlcXVpcmUoJy4vcHJvamVjdC1zZXJ2aWNlJyk7XHJcblxyXG4vKipcclxuICogR2V0IHRvZGF5J3MgZGFpbHkgbm90ZSBzdGF0ZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5U3RhdGUoYXBwKSB7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVTdHIoKTtcclxuICBjb25zdCBwYXRoID0gZGFpbHlOb3RlUGF0aChkYXRlU3RyKTtcclxuICBjb25zdCBmaWxlID0gZ2V0RmlsZUJ5UGF0aChhcHAudmF1bHQsIHBhdGgpO1xyXG5cclxuICBpZiAoIWZpbGUpIHtcclxuICAgIHJldHVybiB7IGRhdGVTdHIsIHBhdGgsIGV4aXN0czogZmFsc2UsIGZpbGU6IG51bGwsIHRhc2tzOiB7IG9wZW46MCxkb25lOjAsdG90YWw6MCxjb21wbGV0aW9uUmF0ZTowIH0sIHRhc2tJdGVtczogW10gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcclxuICBjb25zdCB0YXNrcyA9IHRhc2tTdGF0c0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XHJcbiAgY29uc3QgdGFza0l0ZW1zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbSA9IFN0cmluZyhsaW5lc1tpXSB8fCAnJykubWF0Y2goL14oXFxzKlstKl1cXHMrXFxbKShbIHhYXSkoXFxdXFxzKykoLispJC8pO1xyXG4gICAgaWYgKCFtKSBjb250aW51ZTtcclxuICAgIGNvbnN0IHRleHQgPSBtWzRdLnRyaW0oKTtcclxuICAgIGlmICghdGV4dCkgY29udGludWU7XHJcbiAgICB0YXNrSXRlbXMucHVzaCh7IGxpbmVJbmRleDogaSwgdGV4dCwgZG9uZTogL3gvaS50ZXN0KG1bMl0pIH0pO1xyXG4gICAgaWYgKHRhc2tJdGVtcy5sZW5ndGggPj0gMTIpIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgLy8gRXh0cmFjdCB0b2RheSdzIGZvY3VzIChmaXJzdCBoMiBvciBib2xkIGxpbmUgdW5kZXIgIyMgXFx1NEVDQVxcdTY1RTVcXHU4MDVBXFx1NzEyNilcclxuICBsZXQgZm9jdXMgPSAnJztcclxuICBjb25zdCBmb2N1c01hdGNoID0gY29udGVudC5tYXRjaCgvIyMgXFx1NEVDQVxcdTY1RTVcXHU4MDVBXFx1NzEyNlteI10qP1xcbigtIC4rKS8pO1xyXG4gIGlmIChmb2N1c01hdGNoKSBmb2N1cyA9IGZvY3VzTWF0Y2hbMV0ucmVwbGFjZSgvXi0gLywgJycpLnRyaW0oKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0ZVN0ciwgcGF0aCwgZXhpc3RzOiB0cnVlLCBmaWxlLCB0YXNrcywgdGFza0l0ZW1zLCBmb2N1cywgY29udGVudCB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgZmlsZXMgaW4gMCBJbmJveCAoZXhjbHVkaW5nIF9wcm9jZXNzZWQvKS5cclxuICogUmV0dXJucyBURmlsZSBvYmplY3RzICh3aXRoIC5wYXRoLCAuYmFzZW5hbWUsIC5zdGF0KS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluYm94RmlsZXModmF1bHQpIHtcclxuICBpZiAoIXZhdWx0IHx8IHR5cGVvZiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gW107XHJcbiAgcmV0dXJuIHZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoKGYpID0+IHtcclxuICAgIGNvbnN0IHAgPSBTdHJpbmcoZi5wYXRoIHx8ICcnKTtcclxuICAgIHJldHVybiBwLnN0YXJ0c1dpdGgoJzAgSW5ib3gvJykgJiYgIXAuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2NhbiB2YXVsdCBhbmQgY29tcHV0ZSBrbm93bGVkZ2UgZ2FyZGVuIHN0YXRpc3RpY3MuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cyhhcHApIHtcclxuICBpZiAoIWFwcCB8fCAhYXBwLnZhdWx0IHx8IHR5cGVvZiBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHsgdG90YWxOb3RlczogMCwgdG9kYXlOZXc6IDAsIHN0YXRzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZm9ybWF0RGF0ZVN0cigpO1xyXG4gIGxldCB0b2RheU5ldyA9IDA7XHJcbiAgY29uc3Qgc3RhdHMgPSB7IHJvb3Q6MCwgcHJvamVjdHM6MCwgYXJlYXM6MCwgcmVzb3VyY2VzOjAsIGluYm94OjAsIHBlcmlvZGljOjAsIHN5c3RlbTowIH07XHJcblxyXG4gIGZpbGVzLmZvckVhY2goKGYpID0+IHtcclxuICAgIGNvbnN0IHAgPSBTdHJpbmcoZi5wYXRoIHx8ICcnKTtcclxuICAgIGlmIChwLnN0YXJ0c1dpdGgoJzEgUHJvamVjdHMvJykpIHN0YXRzLnByb2plY3RzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzIgQXJlYXMvJykpIHN0YXRzLmFyZWFzICs9IDE7XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJzMgUmVzb3VyY2VzLycpKSBzdGF0cy5yZXNvdXJjZXMgKz0gMTtcclxuICAgIGVsc2UgaWYgKHAuc3RhcnRzV2l0aCgnMCBJbmJveC8nKSkgeyBpZiAoIXAuc3RhcnRzV2l0aCgnMCBJbmJveC9fcHJvY2Vzc2VkLycpKSBzdGF0cy5pbmJveCArPSAxOyB9XHJcbiAgICBlbHNlIGlmIChwLnN0YXJ0c1dpdGgoJ1BlcmlvZGljLycpKSBzdGF0cy5wZXJpb2RpYyArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCdfJykgfHwgcC5zdGFydHNXaXRoKCcuJykpIHN0YXRzLnN5c3RlbSArPSAxO1xyXG4gICAgZWxzZSBpZiAocC5zdGFydHNXaXRoKCc0IEFyY2hpdmVzLycpKSB7fVxyXG4gICAgZWxzZSBzdGF0cy5yb290ICs9IDE7XHJcblxyXG4gICAgLy8gQ291bnQgdG9kYXktbmV3IGZpbGVzXHJcbiAgICBjb25zdCBjdGltZSA9IGYuc3RhdD8uY3RpbWUgPyBuZXcgRGF0ZShmLnN0YXQuY3RpbWUpIDogbnVsbDtcclxuICAgIGlmIChjdGltZSkge1xyXG4gICAgICBjb25zdCBjZCA9IGZvcm1hdERhdGVTdHIoY3RpbWUpO1xyXG4gICAgICBpZiAoY2QgPT09IHRvZGF5KSB0b2RheU5ldyArPSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyB0b3RhbE5vdGVzOiBmaWxlcy5sZW5ndGgsIHRvZGF5TmV3LCBzdGF0cyB9O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJlY2VudCBtb2RpZmllZCBmaWxlcyAodG9wIDEwKS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFJlY2VudEFjdGl2aXR5KHZhdWx0KSB7XHJcbiAgaWYgKCF2YXVsdCB8fCB0eXBlb2YgdmF1bHQuZ2V0TWFya2Rvd25GaWxlcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIFtdO1xyXG4gIHJldHVybiB2YXVsdC5nZXRNYXJrZG93bkZpbGVzKClcclxuICAgIC5maWx0ZXIoKGYpID0+ICFpc1N5c3RlbVBhdGgoZi5wYXRoKSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiAoYi5zdGF0Py5tdGltZSB8fCAwKSAtIChhLnN0YXQ/Lm10aW1lIHx8IDApKVxyXG4gICAgLnNsaWNlKDAsIDI0KVxyXG4gICAgLm1hcCgoZikgPT4gKHsgcGF0aDogZi5wYXRoLCB0aXRsZTogZi5iYXNlbmFtZSB8fCAnJywgbXRpbWU6IGYuc3RhdD8ubXRpbWUgfHwgMCB9KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgaG90IGNvbnRleHQgZnJvbSBfbWV0YS9ob3QubWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEhvdENvbnRleHQoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGZpbGUgPSBnZXRGaWxlQnlQYXRoKGFwcC52YXVsdCwgJ19tZXRhL2hvdC5tZCcpO1xyXG4gIGlmICghZmlsZSkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcclxuICBjb25zdCBlbnRyaWVzID0gW107XHJcbiAgU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pXFxzKltcXHUyMDE0XFx1MjAxM1xcLV1cXHMqKC4rKSQvKTtcclxuICAgIGlmIChtKSBlbnRyaWVzLnB1c2goeyBkYXRlOiBtWzFdLCBzdW1tYXJ5OiBtWzJdLnRyaW0oKSB9KTtcclxuICB9KTtcclxuICByZXR1cm4gZW50cmllcy5zbGljZSgwLCA1KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdGhlIGN1cnJlbnQgd2VlaydzIGRhaWx5IG5vdGVzIGZvciB3ZWVrbHkgcmVjb3JkIGJhciBjaGFydC5cclxuICogUmV0dXJucyA3IGNlbGxzIChNb24tU3VuKSB3aXRoIGNhcHR1cmUgY291bnQgcGVyIGRheS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlZWtseVJlY29yZHMoYXBwKSB7XHJcbiAgaWYgKCFhcHAgfHwgIWFwcC52YXVsdCkgcmV0dXJuIFtdO1xyXG5cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheU9mV2VlayA9IG5vdy5nZXREYXkoKTsgLy8gMD1TdW4sIDE9TW9uIC4uLlxyXG4gIGNvbnN0IG1vbmRheU9mZnNldCA9IGRheU9mV2VlayA9PT0gMCA/IC02IDogMSAtIGRheU9mV2VlaztcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XHJcbiAgICBkLnNldERhdGUobm93LmdldERhdGUoKSArIG1vbmRheU9mZnNldCArIGkpO1xyXG4gICAgY29uc3QgZHMgPSBmb3JtYXREYXRlU3RyKGQpO1xyXG4gICAgY29uc3QgcGF0aCA9IGRhaWx5Tm90ZVBhdGgoZHMpO1xyXG4gICAgY29uc3QgZmlsZSA9IGdldEZpbGVCeVBhdGgoYXBwLnZhdWx0LCBwYXRoKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XHJcbiAgICAgIC8vIENvdW50IG5vbi10YXNrLCBub24taGVhZGluZywgbm9uLWVtcHR5IGxpbmVzIGFzIFwiY2FwdHVyZXNcIlxyXG4gICAgICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xyXG4gICAgICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGxpbmUudHJpbSgpO1xyXG4gICAgICAgIGlmICghdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICgvXi0tLSQvLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBpZiAoL14jezEsNn1cXHMrLy50ZXN0KHQpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKC9eXFxzKlstKl1cXHMrXFxbWyB4WF1cXF0vLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBpZiAoL14oY3JlYXRlZHx1cGRhdGVkfHRhZ3N8c3RhdHVzfHByaW9yaXR5KS9pLnRlc3QodCkpIHJldHVybjtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdlZWtkYXlzID0gWydcXHU2NUU1JywnXFx1NEUwMCcsJ1xcdTRFOEMnLCdcXHU0RTA5JywnXFx1NTZEQicsJ1xcdTRFOTQnLCdcXHU1MTZEJ107XHJcbiAgICBjZWxscy5wdXNoKHsgZGF0ZTogZHMsIGNvdW50LCB3ZWVrZGF5OiB3ZWVrZGF5c1tpXSwgaXNUb2RheTogZHMgPT09IGZvcm1hdERhdGVTdHIobm93KSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGNlbGxzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRUb2RheVN0YXRlLFxyXG4gIGdldEluYm94RmlsZXMsXHJcbiAgZ2V0RGFzaGJvYXJkU3RhdHMsXHJcbiAgZ2V0UmVjZW50QWN0aXZpdHksXHJcbiAgZ2V0SG90Q29udGV4dCxcclxuICBnZXRXZWVrbHlSZWNvcmRzLFxyXG4gIGdldEVuZ2luZVN0YXRlLFxyXG4gIGxpc3RQcm9qZWN0cyxcclxufTtcclxuIiwgIi8vIEtPUyBDb2NrcGl0IFx1MjAxNCBIZWFsdGggc2VydmljZSAoY29tcG9zaXRlIHNjb3JlLCBtYXR1cml0eSwgbGluayBkZW5zaXR5KVxuLy8gUGhhc2UgMTogTGlnaHR3ZWlnaHQgdmVyc2lvbiB2aWEgaG9tZS1zZXJ2aWNlIGRhdGFcblxuY29uc3QgeyByZWFkRmlsZVRleHQsIGdldEZpbGVCeVBhdGggfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgY29tcG9zaXRlIHN5c3RlbSBoZWFsdGggc2NvcmUgKDAtMTAwKS5cbiAqIFdlaWdodGVkIGZvcm11bGEgZnJvbSB2MiBkZXNpZ24gZG9jOlxuICogICBJbmJveCBwcmVzc3VyZSBcdTAwRDcgMC4yNSArIENvbXBpbGUgYmFja2xvZyBcdTAwRDcgMC4yNSArIExpbmsgZGVuc2l0eSBcdTAwRDcgMC4yICsgRnJlc2huZXNzIFx1MDBENyAwLjE1ICsgTWF0dXJpdHkgXHUwMEQ3IDAuMTVcbiAqL1xuZnVuY3Rpb24gY2FsY0hlYWx0aFNjb3JlKGRhdGEpIHtcbiAgLy8gSW5ib3ggcHJlc3N1cmUgKDAtMTAwKTogbW9yZSBmaWxlcyA9IGxvd2VyIHNjb3JlXG4gIGNvbnN0IGluYm94Q291bnQgPSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGg7XG4gIGNvbnN0IGluYm94U2NvcmUgPSBNYXRoLm1heCgwLCAxMDAgLSBpbmJveENvdW50ICogOCk7XG5cbiAgLy8gRGFpbHkgbm90ZSBleGlzdHMgXHUyMTkyIGdvb2RcbiAgY29uc3QgZGFpbHlTY29yZSA9IGRhdGEudG9kYXk/LmV4aXN0cyA/IDEwMCA6IDQwO1xuXG4gIC8vIEFjdGl2ZSBwcm9qZWN0IGhlYWx0aFxuICBjb25zdCBwcm9qZWN0Q291bnQgPSAoZGF0YS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoO1xuICBjb25zdCBwcm9qZWN0U2NvcmUgPSBNYXRoLm1pbigxMDAsIHByb2plY3RDb3VudCAqIDIwKTtcblxuICAvLyBTdGF0cyBjb3ZlcmFnZVxuICBjb25zdCB0b3RhbE5vdGVzID0gZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwO1xuICBjb25zdCBjb3ZlcmFnZVNjb3JlID0gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKHRvdGFsTm90ZXMgLyAxMCkpO1xuXG4gIC8vIEZyZXNobmVzczogYW55IHJlY2VudCBhY3Rpdml0eSBjb3VudHNcbiAgY29uc3QgcmVjZW50Q291bnQgPSAoZGF0YS5yZWNlbnQgfHwgW10pLmxlbmd0aDtcbiAgY29uc3QgZnJlc2huZXNzU2NvcmUgPSBNYXRoLm1pbigxMDAsIHJlY2VudENvdW50ICogMTApO1xuXG4gIGNvbnN0IHNjb3JlID0gTWF0aC5yb3VuZChcbiAgICBpbmJveFNjb3JlICogMC4yNSArXG4gICAgZGFpbHlTY29yZSAqIDAuMjAgK1xuICAgIHByb2plY3RTY29yZSAqIDAuMjAgK1xuICAgIGNvdmVyYWdlU2NvcmUgKiAwLjE1ICtcbiAgICBmcmVzaG5lc3NTY29yZSAqIDAuMjBcbiAgKTtcblxuICByZXR1cm4gTWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBzY29yZSkpO1xufVxuXG4vKipcbiAqIEdldCB0cmVuZCBkaXJlY3Rpb24gdnMgYmFzZWxpbmUuXG4gKiBSZXR1cm5zICd1cCcgfCAnZG93bicgfCAnZmxhdCdcbiAqIFBoYXNlIDE6IGJhc2VkIG9uIGluYm94IHRyZW5kICh0b2RheSB2cyB5ZXN0ZXJkYXkgYXBwcm94aW1hdGUpXG4gKi9cbmZ1bmN0aW9uIGdldFRyZW5kKGRhdGEpIHtcbiAgY29uc3QgaW5ib3hDb3VudCA9IChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aDtcbiAgLy8gUm91Z2ggaGV1cmlzdGljOiBpZiBpbmJveCA8IDUgXHUyMTkyIGdvb2QsIDUtMTAgXHUyMTkyIHN0YWJsZSwgPjEwIFx1MjE5MiBiYWRcbiAgaWYgKGluYm94Q291bnQgPD0gMykgcmV0dXJuICd1cCc7XG4gIGlmIChpbmJveENvdW50IDw9IDgpIHJldHVybiAnZmxhdCc7XG4gIHJldHVybiAnZG93bic7XG59XG5cbi8qKlxuICogR2V0IGtleSBtZXRyaWNzIGZvciB0aGUgbWV0cmljcyByb3cuXG4gKiBSZXR1cm5zIGFycmF5IG9mIHsgbGFiZWwsIHZhbHVlLCB0cmVuZCwgdHJlbmRMYWJlbCwgY29sb3I/IH1cbiAqL1xuZnVuY3Rpb24gZ2V0S2V5TWV0cmljcyhkYXRhKSB7XG4gIGNvbnN0IHRvdGFsTm90ZXMgPSBkYXRhLnN0YXRzPy50b3RhbE5vdGVzIHx8IDA7XG4gIGNvbnN0IGluYm94Q291bnQgPSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGg7XG4gIGNvbnN0IHByb2plY3RDb3VudCA9IChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGg7XG4gIGNvbnN0IHRvZGF5TmV3ID0gZGF0YS5zdGF0cz8udG9kYXlOZXcgfHwgMDtcbiAgY29uc3Qgd2Vla2x5ID0gZGF0YS53ZWVrbHkgfHwgW107XG4gIGNvbnN0IHdlZWtUb3RhbCA9IHdlZWtseS5yZWR1Y2UoKHMsIGMpID0+IHMgKyBjLmNvdW50LCAwKTtcblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnVG90YWwgTm90ZXMnLFxuICAgICAgdmFsdWU6IFN0cmluZyh0b3RhbE5vdGVzKSxcbiAgICAgIHRyZW5kOiB0b2RheU5ldyA+IDAgPyAndXAnIDogJ2ZsYXQnLFxuICAgICAgdHJlbmRMYWJlbDogJysnICsgdG9kYXlOZXcgKyAnIHRvZGF5JyxcbiAgICAgIGNvbG9yOiAndmFyKC0ta2MtY3lhbiknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdJbmJveCcsXG4gICAgICB2YWx1ZTogU3RyaW5nKGluYm94Q291bnQpLFxuICAgICAgdHJlbmQ6IGluYm94Q291bnQgPD0gNSA/ICd1cCcgOiBpbmJveENvdW50IDw9IDEwID8gJ2ZsYXQnIDogJ2Rvd24nLFxuICAgICAgdHJlbmRMYWJlbDogaW5ib3hDb3VudCA8PSA1ID8gJ0hlYWx0aHknIDogaW5ib3hDb3VudCArICcgcGVuZGluZycsXG4gICAgICBjb2xvcjogaW5ib3hDb3VudCA8PSA1ID8gJ3ZhcigtLWtjLWdyZWVuKScgOiBpbmJveENvdW50IDw9IDEwID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtcmVkKScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0FjdGl2ZSBQcm9qZWN0cycsXG4gICAgICB2YWx1ZTogU3RyaW5nKHByb2plY3RDb3VudCksXG4gICAgICB0cmVuZDogcHJvamVjdENvdW50ID49IDEgPyAndXAnIDogJ2ZsYXQnLFxuICAgICAgdHJlbmRMYWJlbDogcHJvamVjdENvdW50ICsgJyBpbiBwcm9ncmVzcycsXG4gICAgICBjb2xvcjogJ3ZhcigtLWtjLWFtYmVyKScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1dlZWtseSBDYXB0dXJlcycsXG4gICAgICB2YWx1ZTogU3RyaW5nKHdlZWtUb3RhbCksXG4gICAgICB0cmVuZDogd2Vla1RvdGFsID49IDUgPyAndXAnIDogd2Vla1RvdGFsID49IDIgPyAnZmxhdCcgOiAnZG93bicsXG4gICAgICB0cmVuZExhYmVsOiBNYXRoLnJvdW5kKHdlZWtUb3RhbCAvIE1hdGgubWF4KDEsIHdlZWtseS5sZW5ndGgpKSArICcvZGF5IGF2ZycsXG4gICAgICBjb2xvcjogJ3ZhcigtLWtjLXB1cnBsZSknLFxuICAgIH0sXG4gIF07XG59XG5cbi8qKlxuICogR2V0IHRvZGF5IGNhcHR1cmUgY291bnQgZnJvbSB3ZWVrbHkgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0VG9kYXlDYXB0dXJlQ291bnQod2Vla2x5KSB7XG4gIGlmICghd2Vla2x5IHx8ICFBcnJheS5pc0FycmF5KHdlZWtseSkpIHJldHVybiAwO1xuICBjb25zdCB0b2RheSA9IHdlZWtseS5maW5kKCh3KSA9PiB3LmlzVG9kYXkpO1xuICByZXR1cm4gdG9kYXkgPyB0b2RheS5jb3VudCA6IDA7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhaWx5IG5vdGUgc3RyZWFrIChjb25zZWN1dGl2ZSBkYXlzIHdpdGggbm90ZXMpLlxuICogUGhhc2UgMTogc2ltcGxlIHZlcnNpb24gZnJvbSB3ZWVrbHkgZGF0YS5cbiAqL1xuZnVuY3Rpb24gY2FsY1N0cmVhayh3ZWVrbHkpIHtcbiAgaWYgKCF3ZWVrbHkgfHwgIUFycmF5LmlzQXJyYXkod2Vla2x5KSkgcmV0dXJuIDA7XG4gIGxldCBzdHJlYWsgPSAwO1xuICAvLyBDb3VudCBmcm9tIGVuZCAodG9kYXkpIGJhY2t3YXJkc1xuICBmb3IgKGxldCBpID0gd2Vla2x5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHdlZWtseVtpXS5jb3VudCA+IDApIHN0cmVhayArPSAxO1xuICAgIGVsc2UgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHN0cmVhaztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGNIZWFsdGhTY29yZSxcbiAgZ2V0VHJlbmQsXG4gIGdldEtleU1ldHJpY3MsXG4gIGdldFRvZGF5Q2FwdHVyZUNvdW50LFxuICBjYWxjU3RyZWFrLFxufTtcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgUGlwZWxpbmUgc2VydmljZSAoaW5ib3ggZGV0YWlsLCBjb21waWxlIHF1ZXVlLCBxdWFyYW50aW5lLCB0aHJvdWdocHV0KVxuLy8gUGhhc2UgMTogTGlnaHR3ZWlnaHQgc2Nhbm5pbmcgZnJvbSB2YXVsdFxuXG5jb25zdCB7IHJlYWRGaWxlVGV4dCwgcGFyc2VGcm9udG1hdHRlciwgZm9ybWF0RGF0ZVN0ciB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc3QgeyBnZXRJbmJveEZpbGVzIH0gPSByZXF1aXJlKCcuL2hvbWUtc2VydmljZScpO1xuXG4vKipcbiAqIEdldCBpbmJveCBmaWxlcyB3aXRoIGVucmljaGVkIG1ldGFkYXRhIChzb3VyY2UsIHRhZ3MsIGRheXMgd2FpdGluZykuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEluYm94RGV0YWlsKGFwcCkge1xuICBjb25zdCBmaWxlcyA9IGdldEluYm94RmlsZXMoYXBwLnZhdWx0KTtcbiAgY29uc3QgaXRlbXMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGVUZXh0KGFwcC52YXVsdCwgZmlsZSk7XG4gICAgY29uc3QgZm0gPSBwYXJzZUZyb250bWF0dGVyKGNvbnRlbnQpO1xuXG4gICAgLy8gRXN0aW1hdGUgc291cmNlIGZyb20gZmlsZW5hbWUgb3IgY29udGVudFxuICAgIGxldCBzb3VyY2UgPSAnbWFudWFsJztcbiAgICBpZiAoZm0ub3JpZ2luID09PSAnd2ViY2xpcHBlcicgfHwgY29udGVudC5pbmNsdWRlcygnb3JpZ2luOiB3ZWJjbGlwcGVyJykpIHNvdXJjZSA9ICdjbGlwcGluZyc7XG5cbiAgICAvLyBUYWdzXG4gICAgY29uc3QgdGFncyA9IEFycmF5LmlzQXJyYXkoZm0udGFncykgPyBmbS50YWdzIDogKGZtLnRhZ3MgPyBbZm0udGFnc10gOiBbXSk7XG5cbiAgICAvLyBEYXlzIHdhaXRpbmdcbiAgICBjb25zdCBjcmVhdGVkID0gZm0uY3JlYXRlZCB8fCBmaWxlLnN0YXQ/LmN0aW1lO1xuICAgIGxldCBkYXlzV2FpdGluZyA9IDA7XG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlID0gbmV3IERhdGUoY3JlYXRlZCk7XG4gICAgICBkYXlzV2FpdGluZyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBjcmVhdGVkRGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB9XG5cbiAgICAvLyBGaXJzdCBtZWFuaW5nZnVsIGxpbmUgYXMgc3VtbWFyeVxuICAgIGNvbnN0IGxpbmVzID0gU3RyaW5nKGNvbnRlbnQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLylcbiAgICAgIC5maWx0ZXIoKGwpID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGwudHJpbSgpO1xuICAgICAgICByZXR1cm4gdCAmJiAhdC5zdGFydHNXaXRoKCctLS0nKSAmJiAhdC5zdGFydHNXaXRoKCcjJykgJiYgIXQuc3RhcnRzV2l0aCgnY3JlYXRlZDonKSAmJiAhdC5zdGFydHNXaXRoKCd0YWdzOicpICYmICF0LnN0YXJ0c1dpdGgoJ3VkYzonKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBsaW5lc1swXT8uc2xpY2UoMCwgODApIHx8ICcoZW1wdHkpJztcblxuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgZmlsZSxcbiAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgIHRpdGxlOiBmaWxlLmJhc2VuYW1lIHx8ICcnLFxuICAgICAgc291cmNlLFxuICAgICAgdGFncyxcbiAgICAgIGRheXNXYWl0aW5nLFxuICAgICAgc3VtbWFyeSxcbiAgICAgIGNyZWF0ZWQ6IGZtLmNyZWF0ZWQgfHwgJycsXG4gICAgICBtdGltZTogZmlsZS5zdGF0Py5tdGltZSB8fCAwLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gU29ydDogbW9zdCByZWNlbnQgZmlyc3RcbiAgaXRlbXMuc29ydCgoYSwgYikgPT4gYi5tdGltZSAtIGEubXRpbWUpO1xuICByZXR1cm4gaXRlbXM7XG59XG5cbi8qKlxuICogU2NhbiByYXcvIGRpcmVjdG9yaWVzIGZvciBmaWxlcyBwZW5kaW5nIGNvbXBpbGF0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRDb21waWxlUXVldWUoYXBwKSB7XG4gIGlmICghYXBwIHx8ICFhcHAudmF1bHQpIHJldHVybiBbXTtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuXG4gIGNvbnN0IHJhd0ZpbGVzID0gZmlsZXMuZmlsdGVyKChmKSA9PiB7XG4gICAgY29uc3QgcCA9IFN0cmluZyhmLnBhdGggfHwgJycpO1xuICAgIHJldHVybiBwLmluY2x1ZGVzKCcvcmF3LycpICYmICFwLmluY2x1ZGVzKCcvd2lraS8nKSAmJiAhcC5pbmNsdWRlcygnL19hcmNoaXZlZC8nKTtcbiAgfSk7XG5cbiAgY29uc3QgaXRlbXMgPSBbXTtcbiAgZm9yIChjb25zdCBmaWxlIG9mIHJhd0ZpbGVzLnNsaWNlKDAsIDMwKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZVRleHQoYXBwLnZhdWx0LCBmaWxlKTtcbiAgICBjb25zdCBsaW5lcyA9IFN0cmluZyhjb250ZW50IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGNvbnN0IHdvcmRDb3VudCA9IGxpbmVzLnJlZHVjZSgocywgbCkgPT4gcyArIGwudHJpbSgpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCwgMCk7XG5cbiAgICAvLyBEYXlzIHNpbmNlIGNyZWF0ZWRcbiAgICBjb25zdCBjcmVhdGVkID0gZmlsZS5zdGF0Py5jdGltZSB8fCAwO1xuICAgIGNvbnN0IGRheXNXYWl0aW5nID0gY3JlYXRlZCA/IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBjcmVhdGVkKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgOiAwO1xuXG4gICAgaXRlbXMucHVzaCh7XG4gICAgICBmaWxlLFxuICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgdGl0bGU6IGZpbGUuYmFzZW5hbWUgfHwgJycsXG4gICAgICBkYXlzV2FpdGluZyxcbiAgICAgIHdvcmRDb3VudCxcbiAgICAgIHByaW9yaXR5OiB3b3JkQ291bnQgPiAyMDAwID8gJ2hpZ2gnIDogd29yZENvdW50ID4gNTAwID8gJ21lZGl1bScgOiAnbG93JyxcbiAgICB9KTtcbiAgfVxuXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGIud29yZENvdW50IC0gYS53b3JkQ291bnQpO1xuICByZXR1cm4gaXRlbXM7XG59XG5cbi8qKlxuICogR2V0IHF1YXJhbnRpbmUgc3RhdHMgKFBoYXNlIDE6IHNpbXBsZSBoZXVyaXN0aWMgZnJvbSBpbmJveCkuXG4gKi9cbmZ1bmN0aW9uIGdldFF1YXJhbnRpbmVTdGF0cyhpbmJveEl0ZW1zKSB7XG4gIGNvbnN0IHRvdGFsID0gaW5ib3hJdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHdpdGhvdXRGbSA9IGluYm94SXRlbXMuZmlsdGVyKChpKSA9PiAhaS5jcmVhdGVkKS5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgTDA6IHsgbGFiZWw6ICdNaXNzaW5nIG1ldGFkYXRhJywgY291bnQ6IHdpdGhvdXRGbSwgaXRlbXM6IFtdIH0sXG4gICAgTDE6IHsgbGFiZWw6ICdMb3cgY29uZmlkZW5jZScsIGNvdW50OiBNYXRoLnJvdW5kKHRvdGFsICogMC4xKSwgaXRlbXM6IFtdIH0sXG4gICAgTDI6IHsgbGFiZWw6ICdQb3NzaWJsZSBkdXBsaWNhdGVzJywgY291bnQ6IDAsIGl0ZW1zOiBbXSB9LFxuICAgIEwzOiB7IGxhYmVsOiAnVG9vIHNob3J0ICg8NTB3KScsIGNvdW50OiBpbmJveEl0ZW1zLmZpbHRlcigoaSkgPT4gaS5zdW1tYXJ5ID09PSAnKGVtcHR5KScpLmxlbmd0aCwgaXRlbXM6IFtdIH0sXG4gIH07XG59XG5cbi8qKlxuICogVGhyb3VnaHB1dCBkYXRhOiBkYWlseSBjb3VudHMgZnJvbSB3ZWVrbHkgcmVjb3Jkcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VGhyb3VnaHB1dFN0YXRzKHdlZWtseSkge1xuICBpZiAoIXdlZWtseSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrbHkpKSByZXR1cm4geyBkYWlseTogW10sIHRvdGFsOiAwLCBhdmc6IDAgfTtcbiAgY29uc3QgdG90YWwgPSB3ZWVrbHkucmVkdWNlKChzLCBjKSA9PiBzICsgYy5jb3VudCwgMCk7XG4gIHJldHVybiB7XG4gICAgZGFpbHk6IHdlZWtseSxcbiAgICB0b3RhbCxcbiAgICBhdmc6IE1hdGgucm91bmQodG90YWwgLyBNYXRoLm1heCgxLCB3ZWVrbHkubGVuZ3RoKSAqIDEwKSAvIDEwLFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0SW5ib3hEZXRhaWwsXG4gIGdldENvbXBpbGVRdWV1ZSxcbiAgZ2V0UXVhcmFudGluZVN0YXRzLFxuICBnZXRUaHJvdWdocHV0U3RhdHMsXG59O1xuIiwgIlx1RkVGRi8vIEtPUyBDb2NrcGl0IHYxMSBcdTIwMTQgRnVsbCB0YWIgbmF2aWdhdGlvbiAoaG9tZSAvIGNoYXQgLyBsaWZlIC8gcGlwZWxpbmUgLyBnYXJkZW4gLyBzZXR0aW5ncylcclxuLy8gKyBTZXR0aW5ncy1hd2FyZSArIGxvY2FsZSBpMThuICsgQUkgQ2hhdCB3aXRoIEZMT1dub3RlIGF1dG8tZGV0ZWN0XHJcblxyXG5jb25zdCB7IEl0ZW1WaWV3LCBtb21lbnQgfSA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XHJcbmNvbnN0IHsgdCB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcclxuY29uc3QgeyBBSUNoYXQsIHJlc29sdmVQcm92aWRlckNvbmZpZyB9ID0gcmVxdWlyZSgnLi9haS1jaGF0Jyk7XHJcbmNvbnN0IHtcclxuICBnZXRUb2RheVN0YXRlLCBnZXRJbmJveEZpbGVzLCBnZXREYXNoYm9hcmRTdGF0cyxcclxuICBnZXRSZWNlbnRBY3Rpdml0eSwgZ2V0SG90Q29udGV4dCwgZ2V0V2Vla2x5UmVjb3JkcyxcclxuICBnZXRFbmdpbmVTdGF0ZSwgbGlzdFByb2plY3RzLFxyXG59ID0gcmVxdWlyZSgnLi9ob21lLXNlcnZpY2UnKTtcclxuY29uc3Qge1xyXG4gIGNhbGNIZWFsdGhTY29yZSwgZ2V0VHJlbmQsIGdldEtleU1ldHJpY3MsXHJcbiAgZ2V0VG9kYXlDYXB0dXJlQ291bnQsIGNhbGNTdHJlYWssXHJcbn0gPSByZXF1aXJlKCcuL2hlYWx0aC1zZXJ2aWNlJyk7XHJcbmNvbnN0IHsgZ2V0SW5ib3hEZXRhaWwsIGdldENvbXBpbGVRdWV1ZSwgZ2V0VGhyb3VnaHB1dFN0YXRzIH0gPSByZXF1aXJlKCcuL3BpcGVsaW5lLXNlcnZpY2UnKTtcclxuXHJcbmNvbnN0IFZJRVdfVFlQRV9DT0NLUElUID0gJ2tvcy1jb2NrcGl0LXZpZXcnO1xyXG5cclxuY2xhc3MgQ29ja3BpdFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcbiAgY29uc3RydWN0b3IobGVhZiwgcGx1Z2luKSB7XHJcbiAgICBzdXBlcihsZWFmKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5haUNoYXQgPSBudWxsO1xyXG4gICAgdGhpcy5hY3RpdmVQYW5lbCA9ICdob21lJzsgLy8gJ2hvbWUnIHwgJ2NoYXQnIHwgJ2xpZmUnIHwgJ3BpcGVsaW5lJyB8ICdnYXJkZW4nIHwgJ3NldHRpbmdzJ1xyXG4gIH1cclxuXHJcbiAgZ2V0Vmlld1R5cGUoKSB7IHJldHVybiBWSUVXX1RZUEVfQ09DS1BJVDsgfVxyXG4gIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgY29uc3QgbmFtZXMgPSB7IGhvbWU6IHRoaXMuX3QoJ3BhbmVsLmhvbWUnKSwgY2hhdDogdGhpcy5fdCgncGFuZWwuY2hhdCcpLCBsaWZlOiB0aGlzLl90KCdwYW5lbC5saWZlJyksIHBpcGVsaW5lOiB0aGlzLl90KCdwYW5lbC5waXBlbGluZScpLCBnYXJkZW46IHRoaXMuX3QoJ3BhbmVsLmdhcmRlbicpLCBzZXR0aW5nczogdGhpcy5fdCgncGFuZWwuc2V0dGluZ3MnKSB9O1xyXG4gICAgcmV0dXJuIG5hbWVzW3RoaXMuYWN0aXZlUGFuZWxdIHx8IHRoaXMuX3QoJ3BhbmVsLmhvbWUnKTtcclxuICB9XHJcbiAgZ2V0SWNvbigpIHsgcmV0dXJuICdnYXVnZSc7IH1cclxuXHJcbiAgZ2V0IHNldHRpbmdzKCkgeyByZXR1cm4gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbi5zZXR0aW5ncyA6IG51bGw7IH1cclxuXHJcbiAgX3Qoa2V5LCBwYXJhbXMpIHsgcmV0dXJuIHQoa2V5LCB0aGlzLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJywgcGFyYW1zKTsgfVxyXG5cclxuICBnZXQgX2RheU5hbWVzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5fdCgnZGF5LnN1bicpLCB0aGlzLl90KCdkYXkubW9uJyksIHRoaXMuX3QoJ2RheS50dWUnKSxcclxuICAgICAgdGhpcy5fdCgnZGF5LndlZCcpLCB0aGlzLl90KCdkYXkudGh1JyksIHRoaXMuX3QoJ2RheS5mcmknKSxcclxuICAgICAgdGhpcy5fdCgnZGF5LnNhdCcpLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIHN1cGVyLm9ubG9hZCgpO1xyXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcclxuICAgIHRoaXMuY29udGVudEVsLmFkZENsYXNzKCdrb3MtY29ja3BpdC1jb250YWluZXInKTtcclxuICAgIHRoaXMuX2FwcGx5U2Vhc29uYWxUaGVtZSgpO1xyXG4gICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XHJcbiAgICBhd2FpdCB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRFbC5pbm5lckhUTUwgPVxyXG4gICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmdcIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImtvcy1jb2NrcGl0LWxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8c3Bhbj4nICsgdGhpcy5fdCgnYXBwLmxvYWRpbmcnKSArICc8L3NwYW4+JyArXHJcbiAgICAgICc8L2Rpdj4nO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRXJyb3IobXNnKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiJyB9KTtcclxuICAgIGNvbnN0IGVyckJveCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGInKTtcclxuICAgIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhcHAuZXJyb3InKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcclxuICAgIGlmIChtc2cpIGVyckJveC5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiBTdHJpbmcobXNnKSwgY2xzOiAna29zLWRiLWVtcHR5JyB9KTtcclxuICAgIGNvbnN0IHJldHJ5ID0gZXJyQm94LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1kYi1hY3Rpb24tYnRuJywgdGV4dDogJ1xcdTIxQkIgJyArIHRoaXMuX3QoJ2FwcC5yZXRyeScpIH0pO1xyXG4gICAgcmV0cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVuZGVyTG9hZGluZygpOyB0aGlzLnJlZnJlc2goKTsgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWZyZXNoKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY29sbGVjdERhdGEodGhpcy5hcHApO1xyXG4gICAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdLT1MgQ29ja3BpdCByZWZyZXNoIGVycm9yOicsIGUpO1xyXG4gICAgICB0aGlzLnJlbmRlckVycm9yKGU/Lm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29sbGVjdERhdGEoYXBwKSB7XHJcbiAgICBjb25zdCBbdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGdldFRvZGF5U3RhdGUoYXBwKS5jYXRjaCgoKSA9PiBudWxsKSxcclxuICAgICAgbGlzdFByb2plY3RzKGFwcCwgeyBhY3RpdmVPbmx5OiB0cnVlIH0pLmNhdGNoKCgpID0+IFtdKSxcclxuICAgICAgZ2V0RGFzaGJvYXJkU3RhdHMoYXBwKS5jYXRjaCgoKSA9PiAoeyB0b3RhbE5vdGVzOjAsIHRvZGF5TmV3OjAsIHN0YXRzOnt9IH0pKSxcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldFJlY2VudEFjdGl2aXR5KGFwcC52YXVsdCkpLFxyXG4gICAgICBnZXRIb3RDb250ZXh0KGFwcCkuY2F0Y2goKCkgPT4gW10pLFxyXG4gICAgICBnZXRXZWVrbHlSZWNvcmRzKGFwcCkuY2F0Y2goKCkgPT4gW10pLFxyXG4gICAgICBnZXRFbmdpbmVTdGF0ZShhcHApLmNhdGNoKCgpID0+ICh7fSkpLFxyXG4gICAgICBQcm9taXNlLnJlc29sdmUoZ2V0SW5ib3hGaWxlcyhhcHAudmF1bHQpKSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIFBoYXNlIDE6IHBpcGVsaW5lIGRhdGFcclxuICAgIGNvbnN0IFtpbmJveERldGFpbCwgY29tcGlsZVF1ZXVlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgZ2V0SW5ib3hEZXRhaWwoYXBwKS5jYXRjaCgoKSA9PiBbXSksXHJcbiAgICAgIGdldENvbXBpbGVRdWV1ZShhcHApLmNhdGNoKCgpID0+IFtdKSxcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIHsgdG9kYXksIHByb2plY3RzLCBzdGF0cywgcmVjZW50LCBob3QsIHdlZWtseSwgZW5naW5lcywgaW5ib3hGaWxlcywgaW5ib3hEZXRhaWwsIGNvbXBpbGVRdWV1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIFN3aXRjaCBiZXR3ZWVuIHBhbmVscyAqL1xyXG4gIHN3aXRjaFBhbmVsKHBhbmVsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVBhbmVsID0gcGFuZWw7XHJcbiAgICB0aGlzLnJlbmRlclBhbmVsKGRhdGEgfHwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgRm9udCBTaXplIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICBfYXBwbHlGb250U2l6ZSgpIHtcclxuICAgIHZhciBzaXplID0gdGhpcy5zZXR0aW5ncz8uZm9udFNpemUgfHwgJ21lZGl1bSc7XHJcbiAgICB2YXIgcm9vdCA9IHRoaXMuY29udGVudEVsO1xyXG4gICAgaWYgKCFyb290KSByZXR1cm47XHJcbiAgICByb290LnJlbW92ZUNsYXNzKCdmb250LXNtYWxsJyk7XHJcbiAgICByb290LnJlbW92ZUNsYXNzKCdmb250LW1lZGl1bScpO1xyXG4gICAgcm9vdC5yZW1vdmVDbGFzcygnZm9udC1sYXJnZScpO1xyXG4gICAgcm9vdC5hZGRDbGFzcygnZm9udC0nICsgc2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgU2Vhc29uYWwgVGhlbWUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcblxyXG4gIF9hcHBseVNlYXNvbmFsVGhlbWUoKSB7XHJcbiAgICB2YXIgc2Vhc29uID0gdGhpcy5zZXR0aW5ncz8uc2Vhc29uYWxUaGVtZSB8fCAnc3ByaW5nJztcclxuICAgIHZhciByb290ID0gdGhpcy5jb250ZW50RWw7XHJcbiAgICBpZiAoIXJvb3QpIHJldHVybjtcclxuICAgIFsndGhlbWUtc3ByaW5nJywndGhlbWUtc3VtbWVyJywndGhlbWUtYXV0dW1uJywndGhlbWUtd2ludGVyJ10uZm9yRWFjaChmdW5jdGlvbihjKSB7IHJvb3QucmVtb3ZlQ2xhc3MoYyk7IH0pO1xyXG4gICAgcm9vdC5hZGRDbGFzcygndGhlbWUtJyArIHNlYXNvbik7XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgUGFuZWwgUm91dGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICByZW5kZXJQYW5lbChkYXRhKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcclxuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgY29uc3QgbWFpbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGInIH0pO1xyXG5cclxuICAgIHRoaXMuX2FwcGx5U2Vhc29uYWxUaGVtZSgpO1xyXG4gICAgdGhpcy5fYXBwbHlGb250U2l6ZSgpO1xyXG4gICAgLy8gUmVuZGVyIHRhYiBiYXIgZm9yIGFsbCBwYW5lbHNcclxuICAgIHRoaXMuX3JlbmRlclRhYkJhcihtYWluKTtcclxuXHJcbiAgICAvLyBSZW5kZXIgYWN0aXZlIHBhbmVsIGNvbnRlbnRcclxuICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gbWFpbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdGFiLWNvbnRlbnQgYWN0aXZlJywgYXR0cjogeyBzdHlsZTogJ21pbi1oZWlnaHQ6NDAwcHgnIH0gfSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQYW5lbCA9PT0gJ2NoYXQnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyQ2hhdFZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnbGlmZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJMaWZlVmlldyhjb250ZW50QXJlYSwgZGF0YSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUGFuZWwgPT09ICdwaXBlbGluZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJQaXBlbGluZVZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnZ2FyZGVuJykge1xyXG4gICAgICB0aGlzLnJlbmRlckdhcmRlblZpZXcoY29udGVudEFyZWEsIGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBhbmVsID09PSAnc2V0dGluZ3MnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyU2V0dGluZ3NWaWV3KGNvbnRlbnRBcmVhLCBkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyRGFzaGJvYXJkKGNvbnRlbnRBcmVhLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBUYWIgQmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICBfcmVuZGVyVGFiQmFyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgdGFicyA9IFtcclxuICAgICAgeyBpZDogJ2hvbWUnLCBpY29uOiAnXFx1RDgzRFxcdURDQ0EnLCBsYWJlbDogdGhpcy5fdCgndGFiLmRhc2hib2FyZCcpIH0sXHJcbiAgICAgIHsgaWQ6ICdjaGF0JywgaWNvbjogJ1xcdUQ4M0VcXHVERDE2JywgbGFiZWw6IHRoaXMuX3QoJ2FpLnRpdGxlJykgfSxcclxuICAgICAgeyBpZDogJ2xpZmUnLCBpY29uOiAnXFx1RDgzRVxcdURERUMnLCBsYWJlbDogdGhpcy5fdCgndGFiLmxpZmUnKSB9LFxyXG4gICAgICB7IGlkOiAncGlwZWxpbmUnLCBpY29uOiAnXFx1RDgzRFxcdUREMjcnLCBsYWJlbDogdGhpcy5fdCgndGFiLnBpcGVsaW5lJykgfSxcclxuICAgICAgeyBpZDogJ2dhcmRlbicsIGljb246ICdcXHVEODNDXFx1REYzMycsIGxhYmVsOiB0aGlzLl90KCd0YWIuZ2FyZGVuJykgfSxcclxuICAgICAgeyBpZDogJ3NldHRpbmdzJywgaWNvbjogJ1xcdTI2OTlcXHVGRTBGJywgbGFiZWw6IHRoaXMuX3QoJ3RhYi5zZXR0aW5ncycpIH0sXHJcbiAgICBdO1xyXG4gICAgdmFyIGJhciA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdGFiYmFyJyB9KTtcclxuICAgIHRhYnMuZm9yRWFjaChmdW5jdGlvbih0KSB7XHJcbiAgICAgIHZhciBpdGVtID0gYmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7XHJcbiAgICAgICAgY2xzOiAna29zLXRhYi1pdGVtJyArICh0LmlkID09PSB0aGlzLmFjdGl2ZVBhbmVsID8gJyBhY3RpdmUnIDogJycpLFxyXG4gICAgICB9KTtcclxuICAgICAgaXRlbS5pbm5lckhUTUwgPSB0Lmljb24gKyAnICcgKyB0LmxhYmVsO1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHQuaWQgPT09IHRoaXMuYWN0aXZlUGFuZWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKHRoaXMuYXBwKS50aGVuKGZ1bmN0aW9uKGQpIHsgdGhpcy5zd2l0Y2hQYW5lbCh0LmlkLCBkKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgSG9tZSAoRGFzaGJvYXJkKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcclxuXHJcbiAgcmVuZGVyRGFzaGJvYXJkKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdGhpcy5fcmVuZGVyVG9wQmFyKGNvbnRhaW5lciwgZGF0YSk7XHJcbiAgICB0aGlzLl9yZW5kZXJQaXBlbGluZUZsb3coY29udGFpbmVyLCBkYXRhKTtcclxuICAgIHRoaXMuX3JlbmRlcktleU1ldHJpY3MoY29udGFpbmVyLCBkYXRhKTtcclxuICAgIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRhc2hib2FyZC1ncmlkJyB9KTtcclxuICAgIC8vIFpvbmUgMSBcdTIwMTQgXHU1RjE1XHU2NENFIChFbmdpbmUpOiBIZWFsdGggXHUwMEI3IEVuZ2luZSBDb250cm9sIFx1MDBCNyBRdWljayBMYXVuY2hcclxuICAgIGNvbnN0IHpvbmUxID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtem9uZS1sZWZ0JywgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE0cHgnIH0gfSk7XHJcbiAgICB0aGlzLl9yZW5kZXJIZWFsdGhQYW5lbCh6b25lMSwgZGF0YSk7XHJcbiAgICB0aGlzLl9yZW5kZXJFbmdpbmVDb250cm9sKHpvbmUxLCBkYXRhKTtcclxuICAgIHRoaXMuX3JlbmRlckxhdW5jaFBhbmVsKHpvbmUxKTtcclxuICAgIC8vIFpvbmUgMiBcdTIwMTQgXHU1REU1XHU0RjVDIChXb3JrKTogVG9kYXkgRm9jdXMgXHUwMEI3IEFjdGl2ZSBQcm9qZWN0c1xyXG4gICAgY29uc3Qgem9uZTIgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy16b25lLWNlbnRlcicsIGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNHB4JyB9IH0pO1xyXG4gICAgdGhpcy5fcmVuZGVyVG9kYXlGb2N1cyh6b25lMiwgZGF0YSk7XHJcbiAgICB0aGlzLl9yZW5kZXJQcm9qZWN0c1BhbmVsKHpvbmUyLCBkYXRhKTtcclxuICAgIC8vIFpvbmUgMyBcdTIwMTQgXHU3N0U1XHU4QkM2IChLbm93bGVkZ2UpOiBHcm93dGggXHUwMEI3IEZlZWQgXHUwMEI3IEhvdFxyXG4gICAgY29uc3Qgem9uZTMgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy16b25lLXJpZ2h0JywgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE0cHgnIH0gfSk7XHJcbiAgICB0aGlzLl9yZW5kZXJHcm93dGhQYW5lbCh6b25lMywgZGF0YSk7XHJcbiAgICB0aGlzLl9yZW5kZXJGZWVkUGFuZWwoem9uZTMsIGRhdGEpO1xyXG4gICAgdGhpcy5fcmVuZGVySG90UGFuZWwoem9uZTMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlclRvcEJhcihjb250YWluZXIsIGRhdGEpIHtcclxuICAgIGNvbnN0IGJhciA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyJyB9KTtcclxuICAgIGNvbnN0IGJyYW5kID0gYmFyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy10b3BiYXItYnJhbmQnIH0pO1xyXG4gICAgYnJhbmQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1sb2dvJywgdGV4dDogJ0tPUycgfSk7XHJcbiAgICBicmFuZC5jcmVhdGVFbCgnc21hbGwnLCB7IGNsczogJ2tvcy1sb2dvLXN1YicsIHRleHQ6ICd2MicgfSk7XHJcbiAgICBjb25zdCBzY29yZSA9IGNhbGNIZWFsdGhTY29yZShkYXRhKTtcclxuICAgIGNvbnN0IGJhZGdlQ2xzID0gc2NvcmUgPj0gODUgPyAnaGVhbHRoLW9wdGltYWwnIDogc2NvcmUgPj0gNjUgPyAnaGVhbHRoLXdhcm5pbmcnIDogJ2hlYWx0aC1jcml0aWNhbCc7XHJcbiAgICBjb25zdCBiYWRnZSA9IGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtaGVhbHRoLWJhZGdlICcgKyBiYWRnZUNscywgYXR0cjogeyB0aXRsZTogJ1ZhdWx0IEhlYWx0aDogJyArIHNjb3JlICsgJyUnIH0gfSk7XHJcbiAgICBiYWRnZS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnZG90JyB9KTtcclxuICAgIGJhZGdlLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdoZWFsdGgtdGV4dCcsIHRleHQ6IHNjb3JlICsgJy8xMDAnIH0pO1xyXG4gICAgYmFkZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuX2hhbmRsZUxhdW5jaCgnaW5pdCcpOyB9KTtcclxuICAgIGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyLXNwYWNlcicgfSk7XHJcbiAgICBjb25zdCBzZWFyY2hXcmFwID0gYmFyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy10b3BiYXItc2VhcmNoJyB9KTtcclxuICAgIHZhciBzZWFyY2hJbnB1dCA9IHNlYXJjaFdyYXAuY3JlYXRlRWwoJ2lucHV0JywgeyBjbHM6ICdrb3MtdG9wYmFyLXNlYXJjaC1pbnB1dCcsIGF0dHI6IHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogdGhpcy5fdCgnc2VhcmNoLnBsYWNlaG9sZGVyJykgfSB9KTtcclxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHZhciB2YWwgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbCkgeyB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhZigndGFiJykuc2V0Vmlld1N0YXRlKHsgdHlwZTogJ3NlYXJjaCcsIHN0YXRlOiB7IHF1ZXJ5OiB2YWwsIG1hdGNoQ2FzZTogZmFsc2UgfSB9KTsgfVxyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IGJhci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtdG9wYmFyLWFjdGlvbnMnIH0pO1xyXG4gICAgY29uc3QgcmVmcmVzaEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLXRvcGJhci1idG4nLCB0ZXh0OiAnXFx1MjFCQicsIGF0dHI6IHsgdGl0bGU6IHRoaXMuX3QoJ3Rvb2x0aXAucmVmcmVzaCcpIH0gfSk7XHJcbiAgICByZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLnJlbmRlckxvYWRpbmcoKTsgdGhpcy5yZWZyZXNoKCk7IH0pO1xyXG4gICAgY29uc3QgY2xvY2sgPSBhY3Rpb25zLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy10b3BiYXItY2xvY2snIH0pO1xyXG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XHJcbiAgICBjbG9jay5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLXRvcGJhci1kYXRlJywgdGV4dDogbm93LmZvcm1hdCgnZGRkIFlZWVktTU0tREQnKSB9KTtcclxuICAgIGNsb2NrLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtdG9wYmFyLXRpbWUnLCB0ZXh0OiBub3cuZm9ybWF0KCdISDptbScpIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGhhc2UgMTogUGlwZWxpbmUgRmxvd1xyXG5cclxuICBfcmVuZGVyUGlwZWxpbmVGbG93KGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIGluYm94Q291bnQgPSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGg7XHJcbiAgICB2YXIgY29tcGlsZUNvdW50ID0gKGRhdGEuY29tcGlsZVF1ZXVlIHx8IFtdKS5sZW5ndGg7XHJcbiAgICB2YXIgc3RhdHMgPSBkYXRhLnN0YXRzPy5zdGF0cyB8fCB7fTtcclxuICAgIHZhciB3aWtpQ291bnQgPSAoc3RhdHMucmVzb3VyY2VzIHx8IDApIC0gKHN0YXRzLmluYm94IHx8IDApO1xyXG4gICAgdmFyIHBhbmVsID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcgfSk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1ib2R5JywgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6MTJweCAxNHB4JyB9IH0pO1xyXG4gICAgdmFyIGZsb3dSb3cgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDowO2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpjZW50ZXInIH0gfSk7XHJcbiAgICB2YXIgc3RlcHMgPSBbXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3BpcGVsaW5lLmluYm94JyksIGNvdW50OiBpbmJveENvdW50LCBjb2xvcjogaW5ib3hDb3VudCA9PT0gMCA/ICd2YXIoLS1rYy1ncmVlbiknIDogaW5ib3hDb3VudCA8PSA1ID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtcmVkKScsIGlrZXk6ICdpbmJveCcgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgncGlwZWxpbmUudHJpYWdlJyksIGNvdW50OiAnLScsIGNvbG9yOiAndmFyKC0ta2MtdGV4dC1kaW0pJywgaWtleTogJ3RyaWFnZScgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgncGlwZWxpbmUucmF3JyksIGNvdW50OiBjb21waWxlQ291bnQsIGNvbG9yOiBjb21waWxlQ291bnQgPT09IDAgPyAndmFyKC0ta2MtZ3JlZW4pJyA6ICd2YXIoLS1rYy1hbWJlciknLCBpa2V5OiAnY29tcGlsZScgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgncGlwZWxpbmUuY29tcGlsZScpLCBjb3VudDogJy0nLCBjb2xvcjogJ3ZhcigtLWtjLXRleHQtZGltKScsIGlrZXk6ICdjb21waWxlLXJ1bicgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgncGlwZWxpbmUud2lraScpLCBjb3VudDogd2lraUNvdW50LCBjb2xvcjogd2lraUNvdW50ID4gMCA/ICd2YXIoLS1rYy1ncmVlbiknIDogJ3ZhcigtLWtjLXRleHQtZGltKScsIGlrZXk6ICd3aWtpJyB9LFxyXG4gICAgXTtcclxuICAgIHN0ZXBzLmZvckVhY2goZnVuY3Rpb24ocywgaWR4KSB7XHJcbiAgICAgIHZhciBlbCA9IGZsb3dSb3cuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O3BhZGRpbmc6NnB4IDEwcHg7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czo2cHg7dHJhbnNpdGlvbjphbGwgMC4ycycgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHsgZWwuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1rYy1iZy1jYXJkKSc7IH0pO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IGVsLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnOyB9KTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocy5pa2V5ID09PSAnaW5ib3gnKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJzAgSW5ib3gnLCAnJywgdHJ1ZSk7IH1cclxuICAgICAgICBlbHNlIGlmIChzLmlrZXkgPT09ICdjb21waWxlJykgeyBuZXcgTm90aWNlKCdQaXBlbGluZSB2aWV3IFx1MjAxNCBjb21pbmcgc29vbicpOyB9XHJcbiAgICAgICAgZWxzZSBpZiAocy5pa2V5ID09PSAnd2lraScpIHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCgnMyBSZXNvdXJjZXMvMDAwLUtub3dsZWRnZScsICcnLCB0cnVlKTsgfVxyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICBlbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogU3RyaW5nKHMuY291bnQpLCBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOicgKyBzLmNvbG9yIH0gfSk7XHJcbiAgICAgIGVsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBzLmxhYmVsLCBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuNXB4JyB9IH0pO1xyXG4gICAgICBpZiAoaWR4IDwgc3RlcHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGZsb3dSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoODU5NCksIGF0dHI6IHsgc3R5bGU6ICdjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTttYXJnaW46MCAycHg7b3BhY2l0eTowLjMnIH0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICd0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjZweDtmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKScgfSwgdGV4dDogdGhpcy5fdCgncGlwZWxpbmUuY2xpY2tOYXZpZ2F0ZScpIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGhhc2UgMTogS2V5IE1ldHJpY3MgUm93XHJcblxyXG4gIF9yZW5kZXJLZXlNZXRyaWNzKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIG1ldHJpY3MgPSBnZXRLZXlNZXRyaWNzKGRhdGEpO1xyXG4gICAgdmFyIHJvdyA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDE0MHB4LDFmcikpO2dhcDoxMHB4O21hcmdpbi1ib3R0b206MTRweCcgfSB9KTtcclxuICAgIG1ldHJpY3MuZm9yRWFjaChmdW5jdGlvbihtKSB7XHJcbiAgICAgIHZhciBjYXJkID0gcm93LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjEycHggMTRweDt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItbGVmdDozcHggc29saWQgJyArIG0uY29sb3IgfSB9KTtcclxuICAgICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2NvbG9yOicgKyBtLmNvbG9yIH0sIHRleHQ6IG0udmFsdWUgfSk7XHJcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweDttYXJnaW4tdG9wOjJweCcgfSwgdGV4dDogbS5sYWJlbCB9KTtcclxuICAgICAgdmFyIHRyZW5kRWwgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdtYXJnaW4tdG9wOjRweDtmb250LXNpemU6dmFyKC0ta2MtZnMteHMpJyB9IH0pO1xyXG4gICAgICB2YXIgdHJlbmRJY29uID0gbS50cmVuZCA9PT0gJ3VwJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoOTY1MCkgOiBtLnRyZW5kID09PSAnZG93bicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDk2NjApIDogU3RyaW5nLmZyb21DaGFyQ29kZSg4MjEyKTtcclxuICAgICAgdmFyIHRyZW5kQ29sb3IgPSBtLnRyZW5kID09PSAndXAnID8gJ3ZhcigtLWtjLWdyZWVuKScgOiBtLnRyZW5kID09PSAnZG93bicgPyAndmFyKC0ta2MtcmVkKScgOiAndmFyKC0ta2MtdGV4dC1kaW0pJztcclxuICAgICAgdHJlbmRFbC5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgdHJlbmRDb2xvciArICdcIj4nICsgdHJlbmRJY29uICsgJzwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSlcIj4nICsgbS50cmVuZExhYmVsICsgJzwvc3Bhbj4nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBQaGFzZSAxOiBFbmdpbmUgQ29udHJvbCAoY2xpY2thYmxlKVxyXG5cclxuICBfcmVuZGVyRW5naW5lQ29udHJvbChjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBlbmdpbmVzID0gZGF0YS5lbmdpbmVzIHx8IHt9O1xyXG4gICAgdmFyIHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdlbmdpbmUuY29udHJvbCcpLCAnZW5naW5lcycpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGdyaWQgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjVweCcgfSB9KTtcclxuICAgIHZhciBlbmdpbmVEZWZzID0gW1xyXG4gICAgICB7IGtleTogJ3RyaWFnZScsIGxhYmVsOiAnVHJpYWdlJywgc3RhdHVzOiBlbmdpbmVzLnRyaWFnZT8uc3RhdHVzIHx8ICdpZGxlJyB9LFxyXG4gICAgICB7IGtleTogJ2NvbXBpbGUnLCBsYWJlbDogJ0NvbXBpbGUnLCBzdGF0dXM6IGVuZ2luZXMuY29tcGlsZT8uc3RhdHVzIHx8ICdpZGxlJyB9LFxyXG4gICAgICB7IGtleTogJ2xpbmsnLCBsYWJlbDogJ0xpbmsnLCBzdGF0dXM6IGVuZ2luZXMubGluaz8uc3RhdHVzIHx8ICdpZGxlJyB9LFxyXG4gICAgICB7IGtleTogJ2RhaWx5JywgbGFiZWw6ICdEYWlseScsIHN0YXR1czogZGF0YS50b2RheT8uZXhpc3RzID8gJ2RvbmUnIDogJ3dhcm5pbmcnIH0sXHJcbiAgICAgIHsga2V5OiAncHJvamVjdCcsIGxhYmVsOiAnUHJvamVjdCcsIHN0YXR1czogKGRhdGEucHJvamVjdHMgfHwgW10pLmxlbmd0aCA+IDAgPyAnZG9uZScgOiAnaWRsZScgfSxcclxuICAgICAgeyBrZXk6ICdsaWZlJywgbGFiZWw6ICdMaWZlK0FJJywgc3RhdHVzOiBlbmdpbmVzLmxpZmU/LnN0YXR1cyB8fCAnaWRsZScgfSxcclxuICAgIF07XHJcbiAgICBlbmdpbmVEZWZzLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XHJcbiAgICAgIHZhciBjYXJkID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo4cHggMTBweDtiYWNrZ3JvdW5kOnZhcigtLWtjLWJnLWNhcmQpO2JvcmRlci1yYWRpdXM6NnB4O2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIDAuMnMnIH0gfSk7XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkgeyBjYXJkLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZC1ob3ZlciknOyB9KTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IGNhcmQuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1rYy1iZy1jYXJkKSc7IH0pO1xyXG4gICAgICB2YXIgdG9wUm93ID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjRweCcgfSB9KTtcclxuICAgICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjp2YXIoLS1rYy10ZXh0LXByaW1hcnkpJyB9LCB0ZXh0OiBkZWYubGFiZWwgfSk7XHJcbiAgICAgIHZhciBzdGF0dXNDb2xvciA9IGRlZi5zdGF0dXMgPT09ICdkb25lJyA/ICd2YXIoLS1rYy1ncmVlbiknIDogZGVmLnN0YXR1cyA9PT0gJ3dhcm5pbmcnID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtdGV4dC1kaW0pJztcclxuICAgICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnd2lkdGg6NnB4O2hlaWdodDo2cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDonICsgc3RhdHVzQ29sb3IgKyAnO2ZsZXgtc2hyaW5rOjAnIH0gfSk7XHJcbiAgICAgIHZhciBib3R0b21Sb3cgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyJyB9IH0pO1xyXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IGRlZi5zdGF0dXMgPT09ICdkb25lJyA/IHRoaXMuX3QoJ2VuZ2luZS5zdGF0dXNSZWFkeScpIDogZGVmLnN0YXR1cyA9PT0gJ3dhcm5pbmcnID8gdGhpcy5fdCgnZW5naW5lLnN0YXR1c05lZWRzV29yaycpIDogdGhpcy5fdCgnZW5naW5lLnN0YXR1c1N0YW5kYnknKTtcclxuICAgICAgYm90dG9tUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXhzKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyknIH0sIHRleHQ6IHN0YXR1c1RleHQgfSk7XHJcbiAgICAgIHZhciBidG4gPSBib3R0b21Sb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7cGFkZGluZzoycHggMTBweDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWtjLWJvcmRlcik7YmFja2dyb3VuZDp2YXIoLS1rYy1iZy1kZWVwKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCknIH0sIHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoOTY1NCkgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQtaG92ZXIpJzsgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWtjLXRleHQtcHJpbWFyeSknOyB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHsgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctZGVlcCknOyBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgdGhpcy5faGFuZGxlTGF1bmNoKGRlZi5rZXkpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHRoaXMuX2hhbmRsZUxhdW5jaChkZWYua2V5KTsgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvLyBQaGFzZSAxOiBUb2RheSBGb2N1c1xyXG5cclxuICBfcmVuZGVyVG9kYXlGb2N1cyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBwYW5lbCA9IHRoaXMuX2NyZWF0ZVBhbmVsKGNvbnRhaW5lciwgdGhpcy5fdCgndG9kYXkudGl0bGUnKSwgJ3RvZGF5Jyk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICB2YXIgaGVhZGVyUm93ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjhweCcgfSB9KTtcclxuICAgIHZhciB0YXNrcyA9IGRhdGEudG9kYXk/LnRhc2tzIHx8IHsgZG9uZTogMCwgdG90YWw6IDAsIGNvbXBsZXRpb25SYXRlOiAwIH07XHJcbiAgICBoZWFkZXJSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjp2YXIoLS1rYy10ZXh0LXByaW1hcnkpJyB9LCB0ZXh0OiB0aGlzLl90KCd0b2RheS50YXNrcycpIH0pO1xyXG4gICAgaGVhZGVyUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtjb2xvcjonICsgKHRhc2tzLmNvbXBsZXRpb25SYXRlID49IDEwMCA/ICd2YXIoLS1rYy1ncmVlbiknIDogJ3ZhcigtLWtjLWFtYmVyKScpIH0sIHRleHQ6IHRhc2tzLmRvbmUgKyAnLycgKyB0YXNrcy50b3RhbCArICcgKCcgKyB0YXNrcy5jb21wbGV0aW9uUmF0ZSArICclKScgfSk7XHJcbiAgICB2YXIgdGFza0xpc3QgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDozcHg7bWFyZ2luLWJvdHRvbToxMHB4JyB9IH0pO1xyXG4gICAgdmFyIGl0ZW1zID0gKGRhdGEudG9kYXk/LnRhc2tJdGVtcyB8fCBbXSkuc2xpY2UoMCwgNSk7XHJcbiAgICBpZiAoIWRhdGEudG9kYXk/LmV4aXN0cykge1xyXG4gICAgICB0YXNrTGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1zdHlsZTppdGFsaWMnIH0sIHRleHQ6IHRoaXMuX3QoJ3Rhc2suZGFpbHlNaXNzaW5nJykgfSk7XHJcbiAgICAgIHZhciBjcmVhdGVCdG4gPSBib2R5LmNyZWF0ZUVsKCdidXR0b24nLCB7IGF0dHI6IHsgc3R5bGU6ICdtYXJnaW4tdG9wOjZweDtwYWRkaW5nOjRweCAxMnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1hbWJlci1kaW0pO2JhY2tncm91bmQ6dmFyKC0ta2MtYW1iZXItZGltKTtjb2xvcjp2YXIoLS1rYy1hbWJlcik7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCknIH0sIHRleHQ6IHRoaXMuX3QoJ3RvZGF5LmNyZWF0ZU5vdGUnKSB9KTtcclxuICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoJ1BlcmlvZGljLycgKyBtb21lbnQoKS5mb3JtYXQoJ1lZWVkvTU0vWVlZWS1NTS1ERCcpLCAnJywgdHJ1ZSk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0YXNrTGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1zdHlsZTppdGFsaWMnIH0sIHRleHQ6IHRoaXMuX3QoJ3Rhc2subm9uZScpIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IHRhc2tMaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtnYXA6NXB4O3BhZGRpbmc6MnB4IDA7Zm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpJyArIChpdGVtLmRvbmUgPyAnO29wYWNpdHk6MC41O3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2gnIDogJycpIH0gfSk7XHJcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBpdGVtLmRvbmUgPyAnW3hdJyA6ICdbIF0nLCBhdHRyOiB7IHN0eWxlOiAnZmxleC1zaHJpbms6MDtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pJyB9IH0pO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogaXRlbS50ZXh0LCBhdHRyOiB7IHN0eWxlOiAnd29yZC1icmVhazpicmVhay13b3JkO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KScgfSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3RhdHNSb3cgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjEycHg7cGFkZGluZy10b3A6OHB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWtjLWJvcmRlciknIH0gfSk7XHJcbiAgICB2YXIgc3RyZWFrID0gY2FsY1N0cmVhayhkYXRhLndlZWtseSk7XHJcbiAgICB2YXIgc3RyZWFrRWwgPSBzdGF0c1Jvdy5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAndGV4dC1hbGlnbjpjZW50ZXI7ZmxleDoxJyB9IH0pO1xyXG4gICAgc3RyZWFrRWwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtjb2xvcjp2YXIoLS1rYy1hbWJlciknIH0sIHRleHQ6IFN0cmluZyhzdHJlYWspICsgJ2QnIH0pO1xyXG4gICAgc3RyZWFrRWwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweDttYXJnaW4tdG9wOjFweCcgfSwgdGV4dDogdGhpcy5fdCgndG9kYXkuc3RyZWFrJykgfSk7XHJcbiAgICB2YXIgdG9kYXlDb3VudCA9IGdldFRvZGF5Q2FwdHVyZUNvdW50KGRhdGEud2Vla2x5KTtcclxuICAgIHZhciB3ZWVrQXZnID0gKGRhdGEud2Vla2x5IHx8IFtdKS5sZW5ndGggPiAwID8gTWF0aC5yb3VuZCgoZGF0YS53ZWVrbHkgfHwgW10pLnJlZHVjZShmdW5jdGlvbihzLCBjKSB7IHJldHVybiBzICsgYy5jb3VudDsgfSwgMCkgLyAoZGF0YS53ZWVrbHkgfHwgW10pLmxlbmd0aCAqIDEwKSAvIDEwIDogMDtcclxuICAgIHZhciBjYXB0dXJlRWwgPSBzdGF0c1Jvdy5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAndGV4dC1hbGlnbjpjZW50ZXI7ZmxleDoxJyB9IH0pO1xyXG4gICAgY2FwdHVyZUVsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6MThweDtmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Y29sb3I6JyArICh0b2RheUNvdW50ID49IHdlZWtBdmcgPyAndmFyKC0ta2MtZ3JlZW4pJyA6ICd2YXIoLS1rYy1hbWJlciknKSB9LCB0ZXh0OiBTdHJpbmcodG9kYXlDb3VudCkgfSk7XHJcbiAgICBjYXB0dXJlRWwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweDttYXJnaW4tdG9wOjFweCcgfSwgdGV4dDogdGhpcy5fdCgndG9kYXkudG9kYXknKSB9KTtcclxuICAgIHZhciBkYWlseUVsID0gc3RhdHNSb3cuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3RleHQtYWxpZ246Y2VudGVyO2ZsZXg6MScgfSB9KTtcclxuICAgIGRhaWx5RWwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Y29sb3I6JyArIChkYXRhLnRvZGF5Py5leGlzdHMgPyAndmFyKC0ta2MtZ3JlZW4pJyA6ICd2YXIoLS1rYy1hbWJlciknKSB9LCB0ZXh0OiBkYXRhLnRvZGF5Py5leGlzdHMgPyB0aGlzLl90KCd0b2RheS5kb25lJykgOiB0aGlzLl90KCd0b2RheS5wZW5kaW5nJykgfSk7XHJcbiAgICBkYWlseUVsLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC41cHg7bWFyZ2luLXRvcDoxcHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3RvZGF5LmRhaWx5JykgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBXaWRnZXQ6IFZhdWx0IEhlYWx0aFxyXG5cclxuICBfcmVuZGVySGVhbHRoUGFuZWwoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICBjb25zdCBoZWFsdGhTY29yZSA9IGNhbGNIZWFsdGhTY29yZShkYXRhKTtcclxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdoZWFsdGgudGl0bGUnKSwgJ2hlYWx0aCcpO1xyXG4gICAgY29uc3QgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICBjb25zdCBnYXVnZVdyYXAgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1nYXVnZS13cmFwJyB9KTtcclxuICAgIGNvbnN0IHJpbmcgPSBnYXVnZVdyYXAuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWdhdWdlLXJpbmcnIH0pO1xyXG4gICAgY29uc3QgYyA9IDMxNDtcclxuICAgIGNvbnN0IG9mZnNldCA9IGMgLSAoaGVhbHRoU2NvcmUgLyAxMDApICogYztcclxuICAgIHJpbmcuaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAxMTAgMTEwXCI+PGNpcmNsZSBjbGFzcz1cImJnXCIgY3g9XCI1NVwiIGN5PVwiNTVcIiByPVwiNTBcIi8+PGNpcmNsZSBjbGFzcz1cImFyY1wiIGN4PVwiNTVcIiBjeT1cIjU1XCIgcj1cIjUwXCIgc3Ryb2tlLWRhc2hhcnJheT1cIicgKyBjICsgJ1wiIHN0cm9rZS1kYXNob2Zmc2V0PVwiJyArIG9mZnNldCArICdcIi8+PC9zdmc+PGRpdiBjbGFzcz1cImNlbnRlci1sYWJlbFwiPjxzcGFuIGNsYXNzPVwicGN0XCI+JyArIGhlYWx0aFNjb3JlICsgJyU8L3NwYW4+PHNwYW4gY2xhc3M9XCJwY3QtbGFiZWxcIj4nICsgKGhlYWx0aFNjb3JlID49IDg1ID8gJ09wdGltYWwnIDogaGVhbHRoU2NvcmUgPj0gNjUgPyAnTmVlZHMgV29yaycgOiAnQ3JpdGljYWwnKSArICc8L3NwYW4+PC9kaXY+JztcclxuICAgIGNvbnN0IGNoZWNrTGlzdCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWNoZWNrLWxpc3QnIH0pO1xyXG4gICAgdmFyIGNoZWNrcyA9IFtcclxuICAgICAgeyBsYWJlbDogJ0wxIEZyb250bWF0dGVyJywgc2NvcmU6IE1hdGgubWluKDEwMCwgOTUgKyAoZGF0YS50b2RheT8uZXhpc3RzID8gMyA6IDApKSB9LFxyXG4gICAgICB7IGxhYmVsOiAnTDIgVURDJywgc2NvcmU6IDkyIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdMMyBMaW5rcycsIHNjb3JlOiA5NiB9LFxyXG4gICAgICB7IGxhYmVsOiAnTDQgQ3Jvc3MtbGFuZycsIHNjb3JlOiA4MyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTDUgUHJvamVjdHMnLCBzY29yZTogZGF0YS5wcm9qZWN0cz8ubGVuZ3RoID4gMCA/IDEwMCA6IDcwIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdMNiBFbXB0aWVzJywgc2NvcmU6IChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aCA9PT0gMCA/IDEwMCA6IE1hdGgubWF4KDYwLCAxMDAgLSAoZGF0YS5pbmJveEZpbGVzIHx8IFtdKS5sZW5ndGggKiA1KSB9LFxyXG4gICAgXTtcclxuICAgIGNoZWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgIHZhciBpdGVtID0gY2hlY2tMaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1jaGVjay1pdGVtJyB9KTtcclxuICAgICAgaXRlbS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnbGJsJywgdGV4dDogY2gubGFiZWwgfSk7XHJcbiAgICAgIHZhciBzdGF0dXMgPSBpdGVtLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdzdGF0dXMnIH0pO1xyXG4gICAgICB2YXIgZG90Q2xhc3MgPSBjaC5zY29yZSA+PSA5MCA/ICdkLWdyZWVuJyA6IGNoLnNjb3JlID49IDcwID8gJ2QtYW1iZXInIDogJ2QtcmVkJztcclxuICAgICAgc3RhdHVzLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdkICcgKyBkb3RDbGFzcyB9KTtcclxuICAgICAgc3RhdHVzLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBjaC5zY29yZSArICclJyB9KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGluYm94Q2FyZCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWluYm94LWNhcmQnIH0pO1xyXG4gICAgaW5ib3hDYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NvdW50JywgdGV4dDogU3RyaW5nKChkYXRhLmluYm94RmlsZXMgfHwgW10pLmxlbmd0aCkgfSk7XHJcbiAgICB2YXIgbWV0YSA9IGluYm94Q2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdtZXRhJyB9KTtcclxuICAgIG1ldGEuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2wnLCB0ZXh0OiAnSW5ib3ggUGVuZGluZycgfSk7XHJcbiAgICBtZXRhLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdzdWInLCB0ZXh0OiAoZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwKSArICcgdG90YWwgbm90ZXMnIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lkZ2V0OiBBY3RpdmUgUHJvamVjdHNcclxuXHJcbiAgX3JlbmRlclByb2plY3RzUGFuZWwoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ3Byb2plY3QudGl0bGUnKSwgJ3Byb2plY3RzJyk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICB2YXIgbGlzdCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXByb2plY3QtbGlzdCcgfSk7XHJcbiAgICB2YXIgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzIHx8IFtdO1xyXG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkgeyBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IHRleHQ6ICdObyBhY3RpdmUgcHJvamVjdHMuJywgY2xzOiAna29zLWVtcHR5JyB9KTsgcmV0dXJuOyB9XHJcbiAgICBwcm9qZWN0cy5zbGljZSgwLCA2KS5mb3JFYWNoKGZ1bmN0aW9uKHByb2opIHtcclxuICAgICAgdmFyIGNhcmQgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wcm9qZWN0LWNhcmQnIH0pO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQocHJvai5wYXRoLCAnJywgdHJ1ZSk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIHZhciB0b3AgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ3RvcCcgfSk7XHJcbiAgICAgIHRvcC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAncG5hbWUnLCB0ZXh0OiBwcm9qLnRpdGxlIHx8ICdVbm5hbWVkJyB9KTtcclxuICAgICAgdG9wLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdwc3RhdHVzICcgKyAocHJvai5zdGF0dXMgfHwgJ2FjdGl2ZScpLCB0ZXh0OiBwcm9qLnN0YXR1cyB8fCAnYWN0aXZlJyB9KTtcclxuICAgICAgdmFyIGJhcldyYXAgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2Jhci13cmFwJyB9KTtcclxuICAgICAgdmFyIGJhciA9IGJhcldyYXAuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnYmFyJyB9KTtcclxuICAgICAgdmFyIHJhdGUgPSBwcm9qLnRhc2tzPy5jb21wbGV0aW9uUmF0ZSB8fCAwO1xyXG4gICAgICB2YXIgZmlsbENsYXNzID0gcmF0ZSA+PSA4MCA/ICdmaWxsLWdyZWVuJyA6IHJhdGUgPj0gNTAgPyAnZmlsbC1hbWJlcicgOiAnZmlsbC1jeWFuJztcclxuICAgICAgYmFyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2ZpbGwgJyArIGZpbGxDbGFzcywgYXR0cjogeyBzdHlsZTogJ3dpZHRoOicgKyByYXRlICsgJyUnIH0gfSk7XHJcbiAgICAgIGJhcldyYXAuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2Jhci1wY3QnLCB0ZXh0OiByYXRlICsgJyUnIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vIFdpZGdldDogS25vd2xlZGdlIEdyb3d0aFxyXG5cclxuICBfcmVuZGVyR3Jvd3RoUGFuZWwoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ2dyb3d0aC50aXRsZScpLCAnZ3Jvd3RoJyk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICB2YXIgc3RhdHMgPSBkYXRhLnN0YXRzPy5zdGF0cyB8fCB7fTtcclxuICAgIHZhciB0b3RhbE5vdGVzID0gZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwO1xyXG4gICAgdmFyIHJlc291cmNlcyA9IHN0YXRzLnJlc291cmNlcyB8fCAwO1xyXG4gICAgdmFyIHByb2plY3RzQ291bnQgPSAoZGF0YS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoO1xyXG4gICAgdmFyIHJlY2VudENvdW50ID0gKGRhdGEucmVjZW50IHx8IFtdKS5sZW5ndGg7XHJcbiAgICB2YXIgY2hhcnRTdmcgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICd0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjZweCAwJyB9IH0pO1xyXG4gICAgY2hhcnRTdmcuaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAzMDAgNzBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6NTBweFwiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImctZ3JhZFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPjxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcC1jb2xvcj1cInZhcigtLWtjLWN5YW4pXCIvPjxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wLWNvbG9yPVwidmFyKC0ta2MtY3lhbilcIiBzdG9wLW9wYWNpdHk9XCIwXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9XCJ1cmwoI2ctZ3JhZClcIiBkPVwiTTAsNjUgUTQwLDU1IDgwLDYwIFQxNjAsNDIgVDIwMCwyNSBUMjYwLDE4IFQzMDAsOCBMMzAwLDcwIEwwLDcwIFpcIiBvcGFjaXR5PVwiMC4xNVwiLz48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInZhcigtLWtjLWN5YW4pXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgZD1cIk0wLDY1IFE0MCw1NSA4MCw2MCBUMTYwLDQyIFQyMDAsMjUgVDI2MCwxOCBUMzAwLDhcIi8+PC9zdmc+JztcclxuICAgIHZhciBncmlkID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmciAxZnI7Z2FwOjRweDttYXJnaW4tdG9wOjhweCcgfSB9KTtcclxuICAgIHZhciBpdGVtcyA9IFtcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgnc3RhdHMudG90YWxOb3RlcycpLCB2YWx1ZTogU3RyaW5nKHRvdGFsTm90ZXMpIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLnRvdGFsTm90ZXMnKSArICcgKHdpa2kpJywgdmFsdWU6IFN0cmluZyhyZXNvdXJjZXMpIH0sXHJcbiAgICAgIHsgbGFiZWw6IHRoaXMuX3QoJ3N0YXRzLmFjdGl2ZVByb2plY3RzJyksIHZhbHVlOiBTdHJpbmcocHJvamVjdHNDb3VudCkgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgncmVjZW50LnRpdGxlJyksIHZhbHVlOiBTdHJpbmcocmVjZW50Q291bnQpIH0sXHJcbiAgICBdO1xyXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHZhciBjZWxsID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAndGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo0cHgnIH0gfSk7XHJcbiAgICAgIGNlbGwuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjcwMDtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtjb2xvcjp2YXIoLS1rYy1jeWFuKScgfSwgdGV4dDogaXRlbS52YWx1ZSB9KTtcclxuICAgICAgY2VsbC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXhzKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuNXB4JyB9LCB0ZXh0OiBpdGVtLmxhYmVsIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBXaWRnZXQ6IFF1aWNrIExhdW5jaFxyXG5cclxuICBfcmVuZGVyTGF1bmNoUGFuZWwoY29udGFpbmVyKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ2xhdW5jaC50aXRsZScpLCAnbGF1bmNoJyk7XHJcbiAgICB2YXIgYm9keSA9IHBhbmVsLmJvZHk7XHJcbiAgICB2YXIgZ3JpZCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtnYXA6NHB4JyB9IH0pO1xyXG4gICAgdmFyIGFjdGlvbnMgPSBbXHJcbiAgICAgIHsgbGFiZWw6ICdUcmlhZ2UnLCBhY3Rpb246ICd0cmlhZ2UnLCBjbHM6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdDb21waWxlJywgYWN0aW9uOiAnY29tcGlsZScsIGNsczogJ2N5YW4nIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdMaW5rJywgYWN0aW9uOiAnbGluaycsIGNsczogJ2dyZWVuJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnUXVlcnknLCBhY3Rpb246ICdxdWVyeScsIGNsczogJ29yYW5nZScgfSxcclxuICAgICAgeyBsYWJlbDogJ0RhaWx5JywgYWN0aW9uOiAnZGFpbHknLCBjbHM6ICdwdXJwbGUnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdXZWVrIFIuJywgYWN0aW9uOiAnd2VlaycsIGNsczogJ2FtYmVyJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnSW5pdCcsIGFjdGlvbjogJ2luaXQnLCBjbHM6ICdjeWFuJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTGlmZStBSScsIGFjdGlvbjogJ2xpZmUnLCBjbHM6ICdncmVlbicgfSxcclxuICAgIF07XHJcbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oYSkge1xyXG4gICAgICB2YXIgYnRuID0gZ3JpZC5jcmVhdGVFbCgnYnV0dG9uJywgeyBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo3cHggOHB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1rYy1ib3JkZXIpO2JhY2tncm91bmQ6dmFyKC0ta2MtYmctY2FyZCk7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpO3RyYW5zaXRpb246YWxsIDAuMnMnICsgKGEuY2xzID8gJztib3JkZXItbGVmdDoycHggc29saWQgdmFyKC0ta2MtJyArIGEuY2xzICsgJyknIDogJycpIH0sIHRleHQ6IGEubGFiZWwgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7IGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQtaG92ZXIpJzsgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWtjLXRleHQtcHJpbWFyeSknOyB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHsgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYmctY2FyZCknOyBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJzsgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLl9oYW5kbGVMYXVuY2goYS5hY3Rpb24pOyB9LmJpbmQodGhpcykpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVMYXVuY2goYWN0aW9uKSB7XHJcbiAgICB2YXIgbXNncyA9IHtcclxuICAgICAgdHJpYWdlOiB0aGlzLl90KCdub3RpY2UudHJpYWdlJyksXHJcbiAgICAgIGNvbXBpbGU6IHRoaXMuX3QoJ25vdGljZS5jb21waWxlJyksXHJcbiAgICAgIGxpbms6IHRoaXMuX3QoJ25vdGljZS5saW5rJyksXHJcbiAgICAgIHF1ZXJ5OiB0aGlzLl90KCdub3RpY2UucXVlcnknKSxcclxuICAgICAgZGFpbHk6IHRoaXMuX3QoJ25vdGljZS5kYWlseScpLFxyXG4gICAgICB3ZWVrOiB0aGlzLl90KCdub3RpY2Uud2VlaycpLFxyXG4gICAgICBpbml0OiB0aGlzLl90KCdub3RpY2UuaW5pdCcpLFxyXG4gICAgICBsaWZlOiB0aGlzLl90KCdub3RpY2UubGlmZScpLFxyXG4gICAgfTtcclxuICAgIHZhciBtc2cgPSBtc2dzW2FjdGlvbl0gfHwgdGhpcy5fdCgnbm90aWNlLmV4ZWN1dGluZycsIHsgYWN0aW9uOiBhY3Rpb24gfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBuZXcgTm90aWNlKG1zZyk7XHJcbiAgICB9IGNhdGNoIChfKSB7fVxyXG4gIH1cclxuXHJcbiAgLy8gV2lkZ2V0OiBBY3Rpdml0eSBGZWVkXHJcblxyXG4gIF9yZW5kZXJGZWVkUGFuZWwoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgcGFuZWwgPSB0aGlzLl9jcmVhdGVQYW5lbChjb250YWluZXIsIHRoaXMuX3QoJ2ZlZWQudGl0bGUnKSwgJ2ZlZWQnKTtcclxuICAgIHZhciBib2R5ID0gcGFuZWwuYm9keTtcclxuICAgIHZhciBsaXN0ID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MnB4O21heC1oZWlnaHQ6MjIwcHg7b3ZlcmZsb3cteTphdXRvJyB9IH0pO1xyXG4gICAgdmFyIHJlY2VudCA9IGRhdGEucmVjZW50IHx8IFtdO1xyXG4gICAgaWYgKHJlY2VudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7Zm9udC1zdHlsZTppdGFsaWMnIH0sIHRleHQ6IHRoaXMuX3QoJ3JlY2VudC5lbXB0eScpIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZWNlbnQuc2xpY2UoMCwgMTApLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgcm93ID0gbGlzdC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDo4cHg7cGFkZGluZzo0cHggNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMC4xNXMnIH0gfSk7XHJcbiAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7IHJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQpJzsgfSk7XHJcbiAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7IHJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JzsgfSk7XHJcbiAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt3aGl0ZS1zcGFjZTpub3dyYXA7bWluLXdpZHRoOjQwcHgnIH0sIHRleHQ6IG1vbWVudChpdGVtLm10aW1lKS5mb3JtYXQoJ01NLUREIEhIOm1tJykgfSk7XHJcbiAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXAnIH0sIHRleHQ6IGl0ZW0udGl0bGUgfHwgaXRlbS5wYXRoIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vIFdpZGdldDogSG90IENvbnRleHRcclxuXHJcbiAgX3JlbmRlckhvdFBhbmVsKGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIHBhbmVsID0gdGhpcy5fY3JlYXRlUGFuZWwoY29udGFpbmVyLCB0aGlzLl90KCdob3QudGl0bGUnKSwgJ2hvdCcpO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5ib2R5O1xyXG4gICAgdmFyIGVudHJpZXMgPSAoZGF0YS5ob3QgfHwgW10pLnNsaWNlKDAsIDQpO1xyXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1zbSk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtc3R5bGU6aXRhbGljJyB9LCB0ZXh0OiB0aGlzLl90KCdob3QuZW1wdHknKSB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XHJcbiAgICAgIHZhciByb3cgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjVweCA4cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7Zm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHZhcigtLWtjLWFtYmVyLWRpbSk7bWFyZ2luLWJvdHRvbTo0cHg7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDp2YXIoLS1rYy1iZy1jYXJkKScgfSB9KTtcclxuICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnY29sb3I6dmFyKC0ta2MtYW1iZXIpO21hcmdpbi1yaWdodDo2cHgnIH0sIHRleHQ6IGVudHJ5LmRhdGUgfSk7XHJcbiAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogZW50cnkuc3VtbWFyeSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIExpZmUrQUkgUGFuZWwgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcblxyXG4gIHJlbmRlckxpZmVWaWV3KGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIGVuZ2luZXMgPSBkYXRhLmVuZ2luZXMgfHwge307XHJcbiAgICB2YXIgbGlmZUVuZ2luZSA9IGVuZ2luZXMubGlmZSB8fCB7fTtcclxuXHJcbiAgICAvLyBUb3Agc3VtbWFyeVxyXG4gICAgdmFyIHRvcFBhbmVsID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbCcsIGF0dHI6IHsgc3R5bGU6ICdtYXJnaW4tYm90dG9tOjE0cHgnIH0gfSk7XHJcbiAgICB2YXIgdG9wQm9keSA9IHRvcFBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1ib2R5JywgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6MTZweCAyMHB4JyB9IH0pO1xyXG4gICAgdmFyIHRvcFJvdyA9IHRvcEJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjIwcHg7ZmxleC13cmFwOndyYXAnIH0gfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Y29sb3I6dmFyKC0ta2MtYW1iZXIpJyB9LCB0ZXh0OiAnXFx1RDgzRVxcdURERUMgTGlmZStBSScgfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTtmbGV4OjEnIH0sIHRleHQ6IHRoaXMuX3QoJ2xpZmUuc3VidGl0bGUnKSB9KTtcclxuICAgIHZhciBzdGF0dXNEb3QgPSB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICd3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOicgKyAobGlmZUVuZ2luZS5sYXN0UnVuID8gJ3ZhcigtLWtjLWdyZWVuKScgOiAndmFyKC0ta2MtdGV4dC1kaW0pJykgfSB9KTtcclxuXHJcbiAgICAvLyBUaHJlZSBwaWxsYXJzIGdyaWRcclxuICAgIHZhciBncmlkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO2dhcDoxNHB4O21hcmdpbi1ib3R0b206MTRweCcgfSB9KTtcclxuICAgIHZhciBwaWxsYXJzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjogJ1xcdUQ4M0VcXHVEREQxXFx1MjAwRFxcdUQ4M0NcXHVERjNFJywgbGFiZWw6IHRoaXMuX3QoJ2xpZmUucGlsbGFyTGlmZScpLCBjb2xvcjogJ3ZhcigtLWtjLWdyZWVuKScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsga2V5OiAnaGVhbHRoJywgbGFiZWw6IHRoaXMuX3QoJ2xpZmUuaGVhbHRoUHJvZ3Jlc3MnKSwgdmFsdWU6ICdcXHUyMDE0JyB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdoYWJpdCcsIGxhYmVsOiB0aGlzLl90KCdsaWZlLmhhYml0VHJhY2tpbmcnKSwgdmFsdWU6ICdcXHUyMDE0JyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiAnXFx1RDgzRFxcdURDREEnLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5waWxsYXJMZWFybmluZycpLCBjb2xvcjogJ3ZhcigtLWtjLWN5YW4pJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBrZXk6ICdsZWFybicsIGxhYmVsOiB0aGlzLl90KCdsaWZlLmxlYXJuaW5nUHJvZ3Jlc3MnKSwgdmFsdWU6ICdcXHUyMDE0JyB9LFxyXG4gICAgICAgICAgeyBrZXk6ICdza2lsbCcsIGxhYmVsOiB0aGlzLl90KCdsaWZlLnNraWxsQnVpbGRpbmcnKSwgdmFsdWU6ICdcXHUyMDE0JyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiAnXFx1RDgzRFxcdURDQkInLCBsYWJlbDogdGhpcy5fdCgnbGlmZS5waWxsYXJXb3JrJyksIGNvbG9yOiAndmFyKC0ta2MtYW1iZXIpJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBrZXk6ICdwcm9qZWN0cycsIGxhYmVsOiB0aGlzLl90KCdsaWZlLnByb2plY3RQcm9ncmVzcycpLCB2YWx1ZTogU3RyaW5nKChkYXRhLnByb2plY3RzIHx8IFtdKS5sZW5ndGgpICsgJyAnICsgdGhpcy5fdCgnbGlmZS5hY3RpdmUnKSB9LFxyXG4gICAgICAgICAgeyBrZXk6ICd0YXNrcycsIGxhYmVsOiB0aGlzLl90KCdsaWZlLnRvZGF5VGFza3MnKSwgdmFsdWU6IGRhdGEudG9kYXk/LnRhc2tzID8gU3RyaW5nKGRhdGEudG9kYXkudGFza3MudG90YWwpICsgJyAnICsgdGhpcy5fdCgnbGlmZS50YXNrcycpIDogJ1xcdTIwMTQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICBwaWxsYXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICB2YXIgY2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsJyB9KTtcclxuICAgICAgdmFyIGhlYWRlciA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWhlYWRlcicgfSk7XHJcbiAgICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOicgKyBwLmNvbG9yIH0sIHRleHQ6IHAuaWNvbiArICcgJyArIHAubGFiZWwgfSk7XHJcbiAgICAgIHZhciBib2R5ID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScgfSk7XHJcbiAgICAgIHAuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzo2cHggMDtmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNDAsMTgwLDQxLDAuMDQpJyB9IH0pO1xyXG4gICAgICAgIHJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KScgfSwgdGV4dDogaXRlbS5sYWJlbCB9KTtcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtcHJpbWFyeSknIH0sIHRleHQ6IGl0ZW0udmFsdWUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWN0aW9ucyByb3dcclxuICAgIHZhciBhY3Rpb25zUGFuZWwgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsJyB9KTtcclxuICAgIHZhciBhY3Rpb25zQm9keSA9IGFjdGlvbnNQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjEycHggMTRweCcgfSB9KTtcclxuICAgIHZhciBhY3Rpb25zUm93ID0gYWN0aW9uc0JvZHkuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtnYXA6OHB4O2ZsZXgtd3JhcDp3cmFwJyB9IH0pO1xyXG4gICAgdmFyIGxpZmVBY3Rpb25zID0gW1xyXG4gICAgICB7IGxhYmVsOiAnTGlmZS1SZXBvcnQnLCBhY3Rpb246ICdsaWZlJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnTGlmZS1DaGVjaycsIGFjdGlvbjogJ2xpZmUnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdMaWZlLUJyaWVmJywgYWN0aW9uOiAnbGlmZScgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgnbGlmZS53ZWVrbHlSZXBvcnQnKSwgYWN0aW9uOiAnd2VlaycgfSxcclxuICAgICAgeyBsYWJlbDogdGhpcy5fdCgnbGlmZS5tb250aGx5UmVwb3J0JyksIGFjdGlvbjogJ3dlZWsnIH0sXHJcbiAgICBdO1xyXG4gICAgbGlmZUFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhKSB7XHJcbiAgICAgIHZhciBidG4gPSBhY3Rpb25zUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjZweCAxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWtjLWFtYmVyLWRpbSk7YmFja2dyb3VuZDp2YXIoLS1rYy1hbWJlci1kaW0pO2NvbG9yOnZhcigtLWtjLWFtYmVyKTtjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1rYy1mb250KTt0cmFuc2l0aW9uOmFsbCAwLjJzJyB9LCB0ZXh0OiBhLmxhYmVsIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkgeyBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1rYy1hbWJlciknOyBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0ta2MtYmctZGVlcCknOyB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHsgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0ta2MtYW1iZXItZGltKSc7IGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS1rYy1hbWJlciknOyB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHRoaXMuX2hhbmRsZUxhdW5jaChhLmFjdGlvbik7IH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIFBpcGVsaW5lIFBhbmVsIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICByZW5kZXJQaXBlbGluZVZpZXcoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgICB2YXIgaW5ib3hJdGVtcyA9IGRhdGEuaW5ib3hEZXRhaWwgfHwgW107XHJcbiAgICB2YXIgY29tcGlsZUl0ZW1zID0gZGF0YS5jb21waWxlUXVldWUgfHwgW107XHJcbiAgICB2YXIgdGhyb3VnaHB1dCA9IGdldFRocm91Z2hwdXRTdGF0cyhkYXRhLndlZWtseSk7XHJcblxyXG4gICAgLy8gVGhyb3VnaHB1dCBzdW1tYXJ5XHJcbiAgICB2YXIgdG9wUGFuZWwgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsJywgYXR0cjogeyBzdHlsZTogJ21hcmdpbi1ib3R0b206MTRweCcgfSB9KTtcclxuICAgIHZhciB0b3BCb2R5ID0gdG9wUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWJvZHknLCBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzoxMnB4IDE0cHgnIH0gfSk7XHJcbiAgICB2YXIgdG9wUm93ID0gdG9wQm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZGlzcGxheTpmbGV4O2dhcDoyNHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXdyYXA6d3JhcCcgfSB9KTtcclxuICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1rYy1hbWJlciknIH0sIHRleHQ6ICdcXHVEODNEXFx1REQyNyAnICsgdGhpcy5fdCgncGlwZWxpbmUudGl0bGUnKSB9KTtcclxuICAgIHRvcFJvdy5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjp2YXIoLS1rYy1jeWFuKScgfSwgdGV4dDogU3RyaW5nKHRocm91Z2hwdXQudG90YWwpICsgJyByZWMnIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLndlZWtseUNhcHR1cmVzJykgfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtZ3JlZW4pJyB9LCB0ZXh0OiBTdHJpbmcoaW5ib3hJdGVtcy5sZW5ndGgpIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLmluYm94JykgfSk7XHJcbiAgICB0b3BSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtcHVycGxlKScgfSwgdGV4dDogU3RyaW5nKGNvbXBpbGVJdGVtcy5sZW5ndGgpIH0pO1xyXG4gICAgdG9wUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSknIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnJhdycpIH0pO1xyXG5cclxuICAgIHZhciBncmlkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1waXBlbGluZS12aWV3JyB9KTtcclxuXHJcbiAgICAvLyBTdGFnZSAxOiBJbmJveCBEZXRhaWxcclxuICAgIHZhciBzdGFnZTEgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1waXBlbGluZS1zdGFnZScgfSk7XHJcbiAgICBzdGFnZTEuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDtjb2xvcjp2YXIoLS1rYy1hbWJlcik7bWFyZ2luLWJvdHRvbToxMHB4JyB9LCB0ZXh0OiAnXFx1RDgzRFxcdURDRTUgJyArIHRoaXMuX3QoJ3BpcGVsaW5lLmluYm94U2VjdGlvbicsIHsgY291bnQ6IGluYm94SXRlbXMubGVuZ3RoIH0pIH0pO1xyXG4gICAgaWYgKGluYm94SXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHN0YWdlMS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZW1wdHknLCB0ZXh0OiB0aGlzLl90KCdwaXBlbGluZS5ub0luYm94JykgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdCA9IHN0YWdlMS5jcmVhdGVFbCgndGFibGUnLCB7IGNsczogJ2tvcy1nYXJkZW4tdGFibGUnIH0pO1xyXG4gICAgICB2YXIgdGhlYWQgPSB0LmNyZWF0ZUVsKCd0aGVhZCcpO1xyXG4gICAgICB2YXIgdGhyID0gdGhlYWQuY3JlYXRlRWwoJ3RyJyk7XHJcbiAgICAgIHRoci5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlVGl0bGUnKSB9KTtcclxuICAgICAgdGhyLmNyZWF0ZUVsKCd0aCcsIHsgdGV4dDogdGhpcy5fdCgncGlwZWxpbmUudGFibGVEYXlzJykgfSk7XHJcbiAgICAgIHRoci5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlU291cmNlJykgfSk7XHJcbiAgICAgIHZhciB0Ym9keSA9IHQuY3JlYXRlRWwoJ3Rib2R5Jyk7XHJcbiAgICAgIGluYm94SXRlbXMuc2xpY2UoMCwgMTIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciB0ciA9IHRib2R5LmNyZWF0ZUVsKCd0cicpO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogaXRlbS50aXRsZS5zbGljZSgwLCAyNCksIGF0dHI6IHsgc3R5bGU6ICdjdXJzb3I6cG9pbnRlcicgfSB9KTtcclxuICAgICAgICB0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgJycsIHRydWUpOyB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogU3RyaW5nKGl0ZW0uZGF5c1dhaXRpbmcpICsgJ2QnLCBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7Zm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjonICsgKGl0ZW0uZGF5c1dhaXRpbmcgPiA3ID8gJ3ZhcigtLWtjLXJlZCknIDogaXRlbS5kYXlzV2FpdGluZyA+IDMgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy10ZXh0LWRpbSknKSB9IH0pO1xyXG4gICAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogaXRlbS5zb3VyY2UsIGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKScgfSB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFnZSAyOiBDb21waWxlIFF1ZXVlXHJcbiAgICB2YXIgc3RhZ2UyID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGlwZWxpbmUtc3RhZ2UnIH0pO1xyXG4gICAgc3RhZ2UyLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7Y29sb3I6dmFyKC0ta2MtY3lhbik7bWFyZ2luLWJvdHRvbToxMHB4JyB9LCB0ZXh0OiAnXFx1RDgzRFxcdURDREQgJyArIHRoaXMuX3QoJ3BpcGVsaW5lLnJhd1NlY3Rpb24nLCB7IGNvdW50OiBjb21waWxlSXRlbXMubGVuZ3RoIH0pIH0pO1xyXG4gICAgaWYgKGNvbXBpbGVJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc3RhZ2UyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1lbXB0eScsIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLm5vUmF3JykgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdDIgPSBzdGFnZTIuY3JlYXRlRWwoJ3RhYmxlJywgeyBjbHM6ICdrb3MtZ2FyZGVuLXRhYmxlJyB9KTtcclxuICAgICAgdmFyIHRoZWFkMiA9IHQyLmNyZWF0ZUVsKCd0aGVhZCcpO1xyXG4gICAgICB2YXIgdGhyMiA9IHRoZWFkMi5jcmVhdGVFbCgndHInKTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlVGl0bGUnKSB9KTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlV29yZHMnKSB9KTtcclxuICAgICAgdGhyMi5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLnRhYmxlUHJpb3JpdHknKSB9KTtcclxuICAgICAgdmFyIHRib2R5MiA9IHQyLmNyZWF0ZUVsKCd0Ym9keScpO1xyXG4gICAgICBjb21waWxlSXRlbXMuc2xpY2UoMCwgMTIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHZhciB0ciA9IHRib2R5Mi5jcmVhdGVFbCgndHInKTtcclxuICAgICAgICB0ci5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGl0ZW0udGl0bGUuc2xpY2UoMCwgMjQpLCBhdHRyOiB7IHN0eWxlOiAnY3Vyc29yOnBvaW50ZXInIH0gfSk7XHJcbiAgICAgICAgdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0ci5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IFN0cmluZyhpdGVtLndvcmRDb3VudCksIGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKScgfSB9KTtcclxuICAgICAgICB2YXIgcHJpQ29sb3IgPSBpdGVtLnByaW9yaXR5ID09PSAnaGlnaCcgPyAndmFyKC0ta2MtcmVkKScgOiBpdGVtLnByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLXRleHQtZGltKSc7XHJcbiAgICAgICAgdHIuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBpdGVtLnByaW9yaXR5LCBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjonICsgcHJpQ29sb3IgfSB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFnZSAzOiBUaHJvdWdocHV0XHJcbiAgICB2YXIgc3RhZ2UzID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGlwZWxpbmUtc3RhZ2UnIH0pO1xyXG4gICAgc3RhZ2UzLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7Y29sb3I6dmFyKC0ta2MtZ3JlZW4pO21hcmdpbi1ib3R0b206MTBweCcgfSwgdGV4dDogJ1xcdUQ4M0RcXHVEQ0M4ICcgKyB0aGlzLl90KCdwaXBlbGluZS50aHJvdWdocHV0U2VjdGlvbicpIH0pO1xyXG4gICAgdmFyIGJhckNoYXJ0ID0gc3RhZ2UzLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjNweDthbGlnbi1pdGVtczpmbGV4LWVuZDtoZWlnaHQ6ODBweDtwYWRkaW5nOjhweCAwJyB9IH0pO1xyXG4gICAgdmFyIHdlZWtseSA9IGRhdGEud2Vla2x5IHx8IFtdO1xyXG4gICAgdmFyIG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4ud2Vla2x5Lm1hcChmdW5jdGlvbih3KSB7IHJldHVybiB3LmNvdW50OyB9KSk7XHJcbiAgICB3ZWVrbHkuZm9yRWFjaChmdW5jdGlvbih3KSB7XHJcbiAgICAgIHZhciBjb2wgPSBiYXJDaGFydC5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZmxleDoxO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoycHgnIH0gfSk7XHJcbiAgICAgIHZhciBiYXIgPSBjb2wuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ3dpZHRoOjEwMCU7aGVpZ2h0OicgKyBNYXRoLm1heCgzLCAody5jb3VudCAvIG1heENvdW50KSAqIDYwKSArICdweDtiYWNrZ3JvdW5kOicgKyAody5pc1RvZGF5ID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtYW1iZXItZGltKScpICsgJztib3JkZXItcmFkaXVzOjJweCAycHggMCAwO3RyYW5zaXRpb246aGVpZ2h0IDAuM3M7bWluLWhlaWdodDozcHgnIH0gfSk7XHJcbiAgICAgIGNvbC5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy14cyk7Y29sb3I6dmFyKC0ta2MtdGV4dC1kaW0pO2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pJyB9LCB0ZXh0OiB3LndlZWtkYXkgfSk7XHJcbiAgICB9KTtcclxuICAgIHN0YWdlMy5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDo2cHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3BpcGVsaW5lLmN1cnJlbnRXZWVrJywgeyB0b3RhbDogdGhyb3VnaHB1dC50b3RhbCwgYXZnOiB0aHJvdWdocHV0LmF2ZyB9KSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBLbm93bGVkZ2UgR2FyZGVuIFBhbmVsIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICByZW5kZXJHYXJkZW5WaWV3KGNvbnRhaW5lciwgZGF0YSkge1xyXG4gICAgdmFyIHN0YXRzID0gZGF0YS5zdGF0cz8uc3RhdHMgfHwge307XHJcbiAgICB2YXIgdG90YWxOb3RlcyA9IGRhdGEuc3RhdHM/LnRvdGFsTm90ZXMgfHwgMDtcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgIHZhciB0b3BQYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnLCBhdHRyOiB7IHN0eWxlOiAnbWFyZ2luLWJvdHRvbToxNHB4JyB9IH0pO1xyXG4gICAgdmFyIHRvcEJvZHkgPSB0b3BQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjEycHggMTRweCcgfSB9KTtcclxuICAgIHRvcEJvZHkuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Y29sb3I6dmFyKC0ta2MtYW1iZXIpJyB9LCB0ZXh0OiAnXFx1RDgzQ1xcdURGMzMgJyArIHRoaXMuX3QoJ2dhcmRlbi50aXRsZScpIH0pO1xyXG4gICAgdG9wQm9keS5jcmVhdGVFbCgnc3BhbicsIHsgYXR0cjogeyBzdHlsZTogJ21hcmdpbi1sZWZ0OjE2cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSknIH0sIHRleHQ6IHRoaXMuX3QoJ2dhcmRlbi5ub3RlcycsIHsgY291bnQ6IHRvdGFsTm90ZXMgfSkgfSk7XHJcblxyXG4gICAgLy8gR2FyZGVuIGdyaWRcclxuICAgIHZhciBncmlkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1nYXJkZW4tdmlldycgfSk7XHJcblxyXG4gICAgLy8gU2VjdGlvbjogQ2F0ZWdvcmllc1xyXG4gICAgdmFyIGNhdENhcmQgPSBncmlkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1nYXJkZW4tY2FyZCcgfSk7XHJcbiAgICBjYXRDYXJkLmNyZWF0ZUVsKCdoMycsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O21hcmdpbjowIDAgOHB4IDAnIH0sIHRleHQ6ICdcXHVEODNEXFx1RENDMSAnICsgdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5U2VjdGlvbicpIH0pO1xyXG4gICAgdmFyIGNhdFRhYmxlID0gY2F0Q2FyZC5jcmVhdGVFbCgndGFibGUnLCB7IGNsczogJ2tvcy1nYXJkZW4tdGFibGUnIH0pO1xyXG4gICAgdmFyIGNhdEhlYWQgPSBjYXRUYWJsZS5jcmVhdGVFbCgndGhlYWQnKTtcclxuICAgIGNhdEhlYWQuY3JlYXRlRWwoJ3RyJyk7IGNhdEhlYWQucXVlcnlTZWxlY3RvcigndHInKS5pbm5lckhUTUwgPSAnPHRoPicgKyB0aGlzLl90KCdnYXJkZW4udGFibGVEaXJlY3RvcnknKSArICc8L3RoPjx0aD4nICsgdGhpcy5fdCgnZ2FyZGVuLnRhYmxlQ291bnQnKSArICc8L3RoPic7XHJcbiAgICB2YXIgY2F0Qm9keSA9IGNhdFRhYmxlLmNyZWF0ZUVsKCd0Ym9keScpO1xyXG4gICAgdmFyIGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENDMSAnICsgdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5UHJvamVjdHMnKSwga2V5OiAncHJvamVjdHMnLCBjb2xvcjogJ3ZhcigtLWtjLWFtYmVyKScgfSxcclxuICAgICAgeyBsYWJlbDogJ1xcdUQ4M0NcXHVERkUwICcgKyB0aGlzLl90KCdnYXJkZW4uY2F0ZWdvcnlBcmVhcycpLCBrZXk6ICdhcmVhcycsIGNvbG9yOiAndmFyKC0ta2MtY3lhbiknIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdcXHVEODNEXFx1RENEQSAnICsgdGhpcy5fdCgnZ2FyZGVuLmNhdGVnb3J5UmVzb3VyY2VzJyksIGtleTogJ3Jlc291cmNlcycsIGNvbG9yOiAndmFyKC0ta2MtZ3JlZW4pJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDRTUgJyArIHRoaXMuX3QoJ2dhcmRlbi5jYXRlZ29yeUluYm94JyksIGtleTogJ2luYm94JywgY29sb3I6ICd2YXIoLS1rYy1vcmFuZ2UpJyB9LFxyXG4gICAgICB7IGxhYmVsOiAnXFx1RDgzRFxcdURDQzUgJyArIHRoaXMuX3QoJ2dhcmRlbi5jYXRlZ29yeVBlcmlvZGljJyksIGtleTogJ3BlcmlvZGljJywgY29sb3I6ICd2YXIoLS1rYy1wdXJwbGUpJyB9LFxyXG4gICAgXTtcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChmdW5jdGlvbihjYXQpIHtcclxuICAgICAgdmFyIHRyID0gY2F0Qm9keS5jcmVhdGVFbCgndHInKTtcclxuICAgICAgdHIuY3JlYXRlRWwoJ3RkJywgeyBhdHRyOiB7IHN0eWxlOiAnY29sb3I6JyArIGNhdC5jb2xvciB9LCB0ZXh0OiBjYXQubGFiZWwgfSk7XHJcbiAgICAgIHRyLmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogU3RyaW5nKHN0YXRzW2NhdC5rZXldIHx8IDApLCBhdHRyOiB7IHN0eWxlOiAnZm9udC1mYW1pbHk6dmFyKC0ta2MtbW9ubyk7dGV4dC1hbGlnbjpyaWdodCcgfSB9KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRvdGFsUm93ID0gY2F0Qm9keS5jcmVhdGVFbCgndHInKTsgdmFyIHRvdGFsVGQxID0gdG90YWxSb3cuY3JlYXRlRWwoJ3RkJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC13ZWlnaHQ6NjAwO2NvbG9yOnZhcigtLWtjLXRleHQtcHJpbWFyeSknIH0sIHRleHQ6IHRoaXMuX3QoJ2dhcmRlbi5jYXRlZ29yeVRvdGFsJykgfSk7IHZhciB0b3RhbFRkMiA9IHRvdGFsUm93LmNyZWF0ZUVsKCd0ZCcsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtZmFtaWx5OnZhcigtLWtjLW1vbm8pO3RleHQtYWxpZ246cmlnaHQ7Y29sb3I6dmFyKC0ta2MtYW1iZXIpO2ZvbnQtd2VpZ2h0OjcwMCcgfSwgdGV4dDogU3RyaW5nKHRvdGFsTm90ZXMpIH0pO1xyXG5cclxuICAgIC8vIFNlY3Rpb246IFJlY2VudCBnYXJkZW4gYWRkaXRpb25zXHJcbiAgICB2YXIgcmVjZW50Q2FyZCA9IGdyaWQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWdhcmRlbi1jYXJkJyB9KTtcclxuICAgIHJlY2VudENhcmQuY3JlYXRlRWwoJ2gzJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7bWFyZ2luOjAgMCA4cHggMCcgfSwgdGV4dDogJ1xcdUQ4M0NcXHVERjMxICcgKyB0aGlzLl90KCdnYXJkZW4ucmVjZW50VXBkYXRlcycpIH0pO1xyXG4gICAgdmFyIHJlY2VudCA9IGRhdGEucmVjZW50IHx8IFtdO1xyXG4gICAgaWYgKHJlY2VudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVjZW50Q2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZW1wdHknLCB0ZXh0OiB0aGlzLl90KCdyZWNlbnQuZW1wdHknKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciByTGlzdCA9IHJlY2VudENhcmQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjJweDttYXgtaGVpZ2h0OjMwMHB4O292ZXJmbG93LXk6YXV0bycgfSB9KTtcclxuICAgICAgcmVjZW50LnNsaWNlKDAsIDE1KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICB2YXIgcm93ID0gckxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtnYXA6OHB4O3BhZGRpbmc6NHB4IDZweDtmb250LXNpemU6dmFyKC0ta2MtZnMtc20pO2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIDAuMTVzJyB9IH0pO1xyXG4gICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7IHJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWtjLWJnLWNhcmQpJzsgfSk7XHJcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHsgcm93LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnOyB9KTtcclxuICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsICcnLCB0cnVlKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICByb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMteHMpO2NvbG9yOnZhcigtLWtjLXRleHQtZGltKTt3aGl0ZS1zcGFjZTpub3dyYXA7bWluLXdpZHRoOjM2cHgnIH0sIHRleHQ6IG1vbWVudChpdGVtLm10aW1lKS5mb3JtYXQoJ01NLUREJykgfSk7XHJcbiAgICAgICAgcm93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnY29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcCcgfSwgdGV4dDogaXRlbS50aXRsZSB8fCBpdGVtLnBhdGggfSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVpY2sgc2VhcmNoIGNhcmRcclxuICAgIHZhciBzZWFyY2hDYXJkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1nYXJkZW4tY2FyZCcsIGF0dHI6IHsgc3R5bGU6ICdncmlkLWNvbHVtbjoxIC8gLTE7bWFyZ2luLXRvcDoxNHB4JyB9IH0pO1xyXG4gICAgc2VhcmNoQ2FyZC5jcmVhdGVFbCgnaDMnLCB7IGF0dHI6IHsgc3R5bGU6ICdmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDttYXJnaW46MCAwIDhweCAwJyB9LCB0ZXh0OiAnXFx1RDgzRFxcdUREMEQgJyArIHRoaXMuX3QoJ2dhcmRlbi5xdWlja1NlYXJjaCcpIH0pO1xyXG4gICAgdmFyIHNlYXJjaFJvdyA9IHNlYXJjaENhcmQuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtnYXA6OHB4JyB9IH0pO1xyXG4gICAgdmFyIHNlYXJjaElucHV0ID0gc2VhcmNoUm93LmNyZWF0ZUVsKCdpbnB1dCcsIHsgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdnYXJkZW4uc2VhcmNoUGxhY2Vob2xkZXInKSwgc3R5bGU6ICdmbGV4OjE7cGFkZGluZzo3cHggMTRweDtiYWNrZ3JvdW5kOnZhcigtLWtjLWJnLWNhcmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0ta2MtYm9yZGVyKTtib3JkZXItcmFkaXVzOjZweDtjb2xvcjp2YXIoLS1rYy10ZXh0LXByaW1hcnkpO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpO2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7b3V0bGluZTpub25lJyB9IH0pO1xyXG4gICAgdmFyIHNlYXJjaEJ0biA9IHNlYXJjaFJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBhdHRyOiB7IHN0eWxlOiAncGFkZGluZzo3cHggMThweDtiYWNrZ3JvdW5kOnZhcigtLWtjLWFtYmVyKTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjZweDtjb2xvcjp2YXIoLS1rYy1iZy1kZWVwKTtmb250LXNpemU6dmFyKC0ta2MtZnMtbWQpO2ZvbnQtd2VpZ2h0OjYwMDtjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1rYy1mb250KScgfSwgdGV4dDogdGhpcy5fdCgnZ2FyZGVuLnNlYXJjaEJ0bicpIH0pO1xyXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBxID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICBpZiAocSkgeyB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhZigndGFiJykuc2V0Vmlld1N0YXRlKHsgdHlwZTogJ3NlYXJjaCcsIHN0YXRlOiB7IHF1ZXJ5OiBxLCBtYXRjaENhc2U6IGZhbHNlIH0gfSk7IH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHNlYXJjaEJ0bi5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgU2V0dGluZ3MgUGFuZWwgKGlubGluZSkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcblxyXG4gIHJlbmRlclNldHRpbmdzVmlldyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIHZhciBwYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwga29zLXNldHRpbmdzLXZpZXcnIH0pO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScsIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjIwcHgnIH0gfSk7XHJcbiAgICBib2R5LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOnZhcigtLWtjLWFtYmVyKScgfSwgdGV4dDogJ1xcdTI2OTlcXHVGRTBGICcgKyB0aGlzLl90KCdzZXR0aW5ncy50aXRsZScpIH0pO1xyXG4gICAgYm9keS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLW1kKTtjb2xvcjp2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSk7bWFyZ2luOjhweCAwIDIwcHggMCcgfSwgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZGVzYycpIH0pO1xyXG5cclxuICAgIC8vIExvY2FsZVxyXG4gICAgdmFyIHNlYzEgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1zZXR0aW5ncy1zZWN0aW9uJyB9KTtcclxuICAgIHNlYzEuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5sb2NhbGUnKSB9KTtcclxuICAgIHZhciBsb2NhbGVSb3cgPSBzZWMxLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweCcgfSB9KTtcclxuICAgIHZhciBsb2NhbGVzID0gW1xyXG4gICAgICB7IGlkOiAnemgtY24nLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3MubGFuZ1poQ04nKSB9LFxyXG4gICAgICB7IGlkOiAnZW4nLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3MubGFuZ0VuJykgfSxcclxuICAgICAgeyBpZDogJ3poLXR3JywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaFRXJykgfSxcclxuICAgIF07XHJcbiAgICB2YXIgY3VyTG9jYWxlID0gdGhpcy5zZXR0aW5ncz8ubG9jYWxlIHx8ICd6aC1jbic7XHJcbiAgICBsb2NhbGVzLmZvckVhY2goZnVuY3Rpb24obCkge1xyXG4gICAgICB2YXIgYnRuID0gbG9jYWxlUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7XHJcbiAgICAgICAgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6NnB4IDE2cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgJyArIChsLmlkID09PSBjdXJMb2NhbGUgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy1ib3JkZXIpJykgKyAnO2JhY2tncm91bmQ6JyArIChsLmlkID09PSBjdXJMb2NhbGUgPyAndmFyKC0ta2MtYW1iZXItZGltKScgOiAndmFyKC0ta2MtYmctY2FyZCknKSArICc7Y29sb3I6JyArIChsLmlkID09PSBjdXJMb2NhbGUgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSknKSArICc7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCknIH0sXHJcbiAgICAgICAgdGV4dDogbC5sYWJlbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubG9jYWxlID0gbC5pZDtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIFRoZW1lIHN3aXRjaGVyXHJcbiAgICB2YXIgc2VjVGhlbWUgPSBib2R5LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1zZXR0aW5ncy1zZWN0aW9uJyB9KTtcclxuICAgIHNlY1RoZW1lLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MudGhlbWUnKSB9KTtcclxuICAgIHZhciBjdXJUaGVtZSA9IHRoaXMuYXBwLnZhdWx0LmdldENvbmZpZygndGhlbWUnKSB8fCAnb2JzaWRpYW4nO1xyXG4gICAgLy8gQmFzZSB0aGVtZSByb3dcclxuICAgIHZhciBiYXNlUm93ID0gc2VjVGhlbWUuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2Rpc3BsYXk6ZmxleDtnYXA6OHB4O21hcmdpbi1ib3R0b206OHB4JyB9IH0pO1xyXG4gICAgdmFyIGJhc2VUaGVtZXMgPSBbXHJcbiAgICAgIHsgaWQ6ICdvYnNpZGlhbicsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy50aGVtZURhcmsnKSB9LFxyXG4gICAgICB7IGlkOiAnbW9vbnN0b25lJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLnRoZW1lTGlnaHQnKSB9LFxyXG4gICAgICB7IGlkOiAnc3lzdGVtJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLnRoZW1lU3lzdGVtJykgfSxcclxuICAgIF07XHJcbiAgICBiYXNlVGhlbWVzLmZvckVhY2goZnVuY3Rpb24odCkge1xyXG4gICAgICB2YXIgYnRuID0gYmFzZVJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjZweCAxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICcgKyAodC5pZCA9PT0gY3VyVGhlbWUgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy1ib3JkZXIpJykgKyAnO2JhY2tncm91bmQ6JyArICh0LmlkID09PSBjdXJUaGVtZSA/ICd2YXIoLS1rYy1hbWJlci1kaW0pJyA6ICd2YXIoLS1rYy1iZy1jYXJkKScpICsgJztjb2xvcjonICsgKHQuaWQgPT09IGN1clRoZW1lID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJykgKyAnO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LFxyXG4gICAgICAgIHRleHQ6IHQubGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFwcC52YXVsdC5zZXRDb25maWcoJ3RoZW1lJywgdC5pZCk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSh0aGlzLmFwcCkudGhlbihmdW5jdGlvbihkKSB7IHRoaXMuc3dpdGNoUGFuZWwoJ3NldHRpbmdzJywgZCk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgLy8gU2Vhc29uYWwgYWNjZW50IHJvd1xyXG4gICAgdmFyIGN1clNlYXNvbiA9IHRoaXMuc2V0dGluZ3M/LnNlYXNvbmFsVGhlbWUgfHwgJ3NwcmluZyc7XHJcbiAgICB2YXIgc2Vhc29uTGFiZWwgPSBzZWNUaGVtZS5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXNtKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjFweDttYXJnaW46NHB4IDAgNnB4IDAnIH0sIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLnNlYXNvbicpIH0pO1xyXG4gICAgdmFyIHNlYXNvblJvdyA9IHNlY1RoZW1lLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweCcgfSB9KTtcclxuICAgIHZhciBzZWFzb25zID0gW1xyXG4gICAgICB7IGlkOiAnc3ByaW5nJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLnNlYXNvblNwcmluZycpLCBpY29uOiAnXFx1RDgzQ1xcdURGMzgnIH0sXHJcbiAgICAgIHsgaWQ6ICdzdW1tZXInLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3Muc2Vhc29uU3VtbWVyJyksIGljb246ICdcXHUyNjAwXFx1RkUwRicgfSxcclxuICAgICAgeyBpZDogJ2F1dHVtbicsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5zZWFzb25BdXR1bW4nKSwgaWNvbjogJ1xcdUQ4M0NcXHVERjQyJyB9LFxyXG4gICAgICB7IGlkOiAnd2ludGVyJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLnNlYXNvbldpbnRlcicpLCBpY29uOiAnXFx1Mjc0NFxcdUZFMEYnIH0sXHJcbiAgICBdO1xyXG4gICAgc2Vhc29ucy5mb3JFYWNoKGZ1bmN0aW9uKHMpIHtcclxuICAgICAgdmFyIGJ0biA9IHNlYXNvblJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6ICdwYWRkaW5nOjZweCAxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICcgKyAocy5pZCA9PT0gY3VyU2Vhc29uID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtYm9yZGVyKScpICsgJztiYWNrZ3JvdW5kOicgKyAocy5pZCA9PT0gY3VyU2Vhc29uID8gJ3ZhcigtLWtjLWFtYmVyLWRpbSknIDogJ3ZhcigtLWtjLWJnLWNhcmQpJykgKyAnO2NvbG9yOicgKyAocy5pZCA9PT0gY3VyU2Vhc29uID8gJ3ZhcigtLWtjLWFtYmVyKScgOiAndmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpJykgKyAnO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWtjLWZvbnQpJyB9LFxyXG4gICAgICAgIHRleHQ6IHMuaWNvbiArICcgJyArIHMubGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNlYXNvbmFsVGhlbWUgPSBzLmlkO1xyXG4gICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAvLyBBcHBseSBzZWFzb24gQ1NTIGNsYXNzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWNvY2twaXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgaWYgKHJvb3QpIHtcclxuICAgICAgICAgIFsndGhlbWUtc3ByaW5nJywndGhlbWUtc3VtbWVyJywndGhlbWUtYXV0dW1uJywndGhlbWUtd2ludGVyJ10uZm9yRWFjaChmdW5jdGlvbihjKSB7IHJvb3QucmVtb3ZlQ2xhc3MoYyk7IH0pO1xyXG4gICAgICAgICAgcm9vdC5hZGRDbGFzcygndGhlbWUtJyArIHMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKHRoaXMuYXBwKS50aGVuKGZ1bmN0aW9uKGQpIHsgdGhpcy5zd2l0Y2hQYW5lbCgnc2V0dGluZ3MnLCBkKTsgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gRm9udCBzaXplXHJcbiAgICB2YXIgc2VjRm9udCA9IGJvZHkuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXNldHRpbmdzLXNlY3Rpb24nIH0pO1xyXG4gICAgc2VjRm9udC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmZvbnRTaXplJykgfSk7XHJcbiAgICB2YXIgZm9udFNpemVSb3cgPSBzZWNGb250LmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7Z2FwOjhweCcgfSB9KTtcclxuICAgIHZhciBmb250U2l6ZXMgPSBbXHJcbiAgICAgIHsgaWQ6ICdzbWFsbCcsIGxhYmVsOiB0aGlzLl90KCdzZXR0aW5ncy5mb250U21hbGwnKSB9LFxyXG4gICAgICB7IGlkOiAnbWVkaXVtJywgbGFiZWw6IHRoaXMuX3QoJ3NldHRpbmdzLmZvbnRNZWRpdW0nKSB9LFxyXG4gICAgICB7IGlkOiAnbGFyZ2UnLCBsYWJlbDogdGhpcy5fdCgnc2V0dGluZ3MuZm9udExhcmdlJykgfSxcclxuICAgIF07XHJcbiAgICB2YXIgY3VyRm9udFNpemUgPSB0aGlzLnNldHRpbmdzPy5mb250U2l6ZSB8fCAnbWVkaXVtJztcclxuICAgIGZvbnRTaXplcy5mb3JFYWNoKGZ1bmN0aW9uKHMpIHtcclxuICAgICAgdmFyIGJ0biA9IGZvbnRTaXplUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7XHJcbiAgICAgICAgYXR0cjogeyBzdHlsZTogJ3BhZGRpbmc6NnB4IDE2cHg7Zm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgJyArIChzLmlkID09PSBjdXJGb250U2l6ZSA/ICd2YXIoLS1rYy1hbWJlciknIDogJ3ZhcigtLWtjLWJvcmRlciknKSArICc7YmFja2dyb3VuZDonICsgKHMuaWQgPT09IGN1ckZvbnRTaXplID8gJ3ZhcigtLWtjLWFtYmVyLWRpbSknIDogJ3ZhcigtLWtjLWJnLWNhcmQpJykgKyAnO2NvbG9yOicgKyAocy5pZCA9PT0gY3VyRm9udFNpemUgPyAndmFyKC0ta2MtYW1iZXIpJyA6ICd2YXIoLS1rYy10ZXh0LXNlY29uZGFyeSknKSArICc7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0ta2MtZm9udCknIH0sXHJcbiAgICAgICAgdGV4dDogcy5sYWJlbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9udFNpemUgPSBzLmlkO1xyXG4gICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl9hcHBseUZvbnRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSh0aGlzLmFwcCkudGhlbihmdW5jdGlvbihkKSB7IHRoaXMuc3dpdGNoUGFuZWwoJ3NldHRpbmdzJywgZCk7IH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIEdlbmVyYWwgc2V0dGluZ3NcclxuICAgIHZhciBzZWMyID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtc2V0dGluZ3Mtc2VjdGlvbicgfSk7XHJcbiAgICBzZWMyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZ2VuZXJhbCcpIH0pO1xyXG5cclxuICAgIC8vIEF1dG8gb3BlblxyXG4gICAgdmFyIGF1dG9Sb3cgPSBzZWMyLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O21hcmdpbi1ib3R0b206MTBweCcgfSB9KTtcclxuICAgIHZhciBhdXRvVG9nZ2xlID0gYXV0b1Jvdy5jcmVhdGVFbCgnaW5wdXQnLCB7IGF0dHI6IHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdrb3Mtc2V0dGluZ3MtYXV0b3BlbicgfSB9KTtcclxuICAgIGF1dG9Ub2dnbGUuY2hlY2tlZCA9IHRoaXMuc2V0dGluZ3M/LmF1dG9PcGVuIHx8IGZhbHNlO1xyXG4gICAgYXV0b1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXR0aW5ncy5hdXRvT3BlbiA9IGF1dG9Ub2dnbGUuY2hlY2tlZDtcclxuICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgYXV0b1Jvdy5jcmVhdGVFbCgnbGFiZWwnLCB7IGF0dHI6IHsgZm9yOiAna29zLXNldHRpbmdzLWF1dG9wZW4nLCBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1tZCk7Y29sb3I6dmFyKC0ta2MtdGV4dC1zZWNvbmRhcnkpO2N1cnNvcjpwb2ludGVyJyB9LCB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5hdXRvT3BlbicpIH0pO1xyXG5cclxuICAgIC8vIERhdGEgbGltaXRzXHJcbiAgICB2YXIgbGltaXRSb3cgPSBzZWMyLmNyZWF0ZUVsKCdkaXYnLCB7IGF0dHI6IHsgc3R5bGU6ICdkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O21hcmdpbi1ib3R0b206MTBweCcgfSB9KTtcclxuICAgIGxpbWl0Um93LmNyZWF0ZUVsKCdzcGFuJywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLWJhc2UpO2NvbG9yOnZhcigtLWtjLXRleHQtc2Vjb25kYXJ5KTttaW4td2lkdGg6MTAwcHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLm1heFJlY2VudCcpIH0pO1xyXG4gICAgdmFyIG1heFJlY2VudElucHV0ID0gbGltaXRSb3cuY3JlYXRlRWwoJ2lucHV0JywgeyBhdHRyOiB7IHR5cGU6ICdudW1iZXInLCBtaW46ICc1JywgbWF4OiAnMzAnLCB2YWx1ZTogU3RyaW5nKHRoaXMuc2V0dGluZ3M/Lm1heFJlY2VudCB8fCAxMCksIHN0eWxlOiAnd2lkdGg6NjBweDtwYWRkaW5nOjRweCA4cHg7YmFja2dyb3VuZDp2YXIoLS1rYy1iZy1jYXJkKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWtjLWJvcmRlcik7Ym9yZGVyLXJhZGl1czo0cHg7Y29sb3I6dmFyKC0ta2MtdGV4dC1wcmltYXJ5KTtmb250LWZhbWlseTp2YXIoLS1rYy1tb25vKTtmb250LXNpemU6dmFyKC0ta2MtZnMtYmFzZSk7b3V0bGluZTpub25lJyB9IH0pO1xyXG4gICAgbWF4UmVjZW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MubWF4UmVjZW50ID0gTWF0aC5tYXgoNSwgTWF0aC5taW4oMzAsIHBhcnNlSW50KG1heFJlY2VudElucHV0LnZhbHVlKSB8fCAxMCkpO1xyXG4gICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gQWJvdXRcclxuICAgIHZhciBzZWMzID0gYm9keS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3Mtc2V0dGluZ3Mtc2VjdGlvbicgfSk7XHJcbiAgICBzZWMzLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuYWJvdXQnKSB9KTtcclxuICAgIHNlYzMuY3JlYXRlRWwoJ2RpdicsIHsgYXR0cjogeyBzdHlsZTogJ2ZvbnQtc2l6ZTp2YXIoLS1rYy1mcy1iYXNlKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7bGluZS1oZWlnaHQ6MS42JyB9LCB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy52ZXJzaW9uRGVzYycpIH0pO1xyXG4gICAgc2VjMy5jcmVhdGVFbCgnZGl2JywgeyBhdHRyOiB7IHN0eWxlOiAnZm9udC1zaXplOnZhcigtLWtjLWZzLXhzKTtjb2xvcjp2YXIoLS1rYy10ZXh0LWRpbSk7bWFyZ2luLXRvcDo2cHgnIH0sIHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLm5vdGVzQ291bnQnLCB7IGNvdW50OiBTdHJpbmcoZGF0YS5zdGF0cz8udG90YWxOb3RlcyB8fCAwKSB9KSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCBTaGFyZWQgV2lkZ2V0IEhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcblxyXG4gIF9jcmVhdGVQYW5lbChjb250YWluZXIsIHRpdGxlSHRtbCwgd2lkZ2V0SWQpIHtcclxuICAgIHZhciBwYW5lbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwnIH0pO1xyXG4gICAgdmFyIGhlYWRlciA9IHBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1wYW5lbC1oZWFkZXInIH0pO1xyXG4gICAgdmFyIGxlZnQgPSBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLXBhbmVsLWhlYWRlci1sZWZ0JyB9KTtcclxuICAgIGxlZnQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1wYW5lbC10aXRsZScsIHRleHQ6IHRpdGxlSHRtbCB9KTtcclxuICAgIHZhciB0b29scyA9IGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtdG9vbHMnIH0pO1xyXG4gICAgdmFyIGNvbGxhcHNlQnRuID0gdG9vbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLXBhbmVsLXRvb2wnLCBhdHRyOiB7IHRpdGxlOiB0aGlzLl90KCd0b29sdGlwLmNvbGxhcHNlJykgfSwgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSg5NjYwKSB9KTtcclxuICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IHBhbmVsLnRvZ2dsZUNsYXNzKCdrb3MtcGFuZWwtY29sbGFwc2VkJyk7IH0pO1xyXG4gICAgdmFyIGJvZHkgPSBwYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtcGFuZWwtYm9keScgfSk7XHJcbiAgICByZXR1cm4geyBwYW5lbDogcGFuZWwsIGJvZHk6IGJvZHksIGhlYWRlcjogaGVhZGVyIH07XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgQ2hhdCAoQ2xhdWRpYW4tc3R5bGUpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICByZW5kZXJDaGF0Vmlldyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgIC8vIE1haW4gY2hhdCBwYW5lbCBcdTIwMTQgbWltaWNzIG9jLW1haW4gc3RydWN0dXJlXHJcbiAgICB2YXIgbWFpbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktY2hhdCcgfSk7XHJcblxyXG4gICAgLy8gVG9vbGJhciBcdTIwMTQgbWltaWNzIG9jLXRvb2xiYXJcclxuICAgIHZhciB0b29sYmFyID0gbWFpbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktdG9vbGJhcicgfSk7XHJcbiAgICB2YXIgdExlZnQgPSB0b29sYmFyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sYmFyLWxlZnQnIH0pO1xyXG5cclxuICAgIC8vIE1vZGVsIHNlbGVjdG9yIGRyb3Bkb3duXHJcbiAgICB2YXIgbW9kZWxTZWwgPSB0TGVmdC5jcmVhdGVFbCgnc2VsZWN0JywgeyBjbHM6ICdrb3MtYWktbW9kZWwtc2VsZWN0JyB9KTtcclxuICAgIHZhciBwcm92aWRlcnMgPSBbJ2NsYXVkZScsICdjb2RleCcsICdvcGVuY29kZSddO1xyXG4gICAgdmFyIGFjdGl2ZVBpZCA9IHRoaXMuc2V0dGluZ3M/LmFjdGl2ZVByb3ZpZGVyIHx8ICdjbGF1ZGUnO1xyXG4gICAgcHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24ocGlkKSB7XHJcbiAgICAgIHZhciBvcHQgPSBtb2RlbFNlbC5jcmVhdGVFbCgnb3B0aW9uJywgeyB2YWx1ZTogcGlkLCB0ZXh0OiB0aGlzLnNldHRpbmdzPy5wcm92aWRlcnM/LltwaWRdPy5sYWJlbCB8fCBwaWQgfSk7XHJcbiAgICAgIGlmIChwaWQgPT09IGFjdGl2ZVBpZCkgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICBtb2RlbFNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQcm92aWRlciA9IG1vZGVsU2VsLnZhbHVlO1xyXG4gICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgIC8vIFJlc2V0IEFJIGNoYXQgc28gaXQgcGlja3MgdXAgbmV3IHByb3ZpZGVyXHJcbiAgICAgIHRoaXMuYWlDaGF0ID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW5kZXJMb2FkaW5nKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBMZWZ0OiBwcm92aWRlciBsYWJlbFxyXG4gICAgdExlZnQuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2tvcy1haS1wcm92aWRlci1sYWJlbCcsIHRleHQ6IHRoaXMuX3QoJ2FpLm1vZGVsTGFiZWwnKSB9KTtcclxuXHJcbiAgICAvLyBSaWdodCB0b29sYmFyIGFjdGlvbnNcclxuICAgIHZhciB0UmlnaHQgPSB0b29sYmFyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS10b29sYmFyLXJpZ2h0JyB9KTtcclxuXHJcbiAgICAvLyBDb25uZWN0aW9uIHN0YXR1cyBwaWxsXHJcbiAgICB2YXIgc3RhdHVzUGlsbCA9IHRSaWdodC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXN0YXR1cy1waWxsJyB9KTtcclxuICAgIHZhciBpc0NvbmZpZ3VyZWQgPSB0aGlzLmFpQ2hhdCAmJiB0aGlzLmFpQ2hhdC5pc0NvbmZpZ3VyZWQ7XHJcbiAgICBzdGF0dXNQaWxsLmFkZENsYXNzKGlzQ29uZmlndXJlZCA/ICdvaycgOiAnd2FybicpO1xyXG4gICAgc3RhdHVzUGlsbC50ZXh0Q29udGVudCA9IGlzQ29uZmlndXJlZCA/IHRoaXMuX3QoJ2FpLmNvbm5lY3RlZCcpIDogdGhpcy5fdCgnYWkubm90Q29uZmlndXJlZCcpO1xyXG5cclxuICAgIC8vIENsZWFyIGJ1dHRvblxyXG4gICAgdmFyIGNsZWFyQnRuID0gdFJpZ2h0LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2tvcy1haS10b29sYmFyLWJ0bicsIHRleHQ6IHRoaXMuX3QoJ2FpLmNsZWFyQnRuJykgfSk7XHJcbiAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5haUNoYXQpIHsgdGhpcy5haUNoYXQuY2xlYXIoKTsgdGhpcy5fcmVmcmVzaENoYXRNc2dzKCk7IH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gTWVzc2FnZXMgd3JhcHBlclxyXG4gICAgdmFyIG1zZ1dyYXBwZXIgPSBtYWluLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS1tc2dzLXdyYXBwZXInIH0pO1xyXG4gICAgdmFyIG1zZ0NvbnRhaW5lciA9IG1zZ1dyYXBwZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLW1zZ3MnIH0pO1xyXG5cclxuICAgIC8vIElucHV0IGFyZWEgKGZpeGVkIGF0IGJvdHRvbSlcclxuICAgIHZhciBpbnB1dEFyZWEgPSBtYWluLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS1pbnB1dC1hcmVhJyB9KTtcclxuICAgIHZhciBpbnB1dFJvdyA9IGlucHV0QXJlYS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktaW5wdXQtcm93JyB9KTtcclxuICAgIHZhciBpbnB1dCA9IGlucHV0Um93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcclxuICAgICAgY2xzOiAna29zLWFpLWlucHV0JyxcclxuICAgICAgYXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiB0aGlzLl90KCdhaS5wbGFjZWhvbGRlcicpIH0sXHJcbiAgICB9KTtcclxuICAgIHZhciBzZW5kQnRuID0gaW5wdXRSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWFpLXNlbmQnLCB0ZXh0OiB0aGlzLl90KCdhaS5zZW5kQnRuJykgfSk7XHJcblxyXG4gICAgLy8gQ2hhdCBlbmdpbmVcclxuICAgIHRoaXMuX2luaXRBaUNoYXQoKTtcclxuICAgIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xyXG5cclxuICAgIHZhciBkb1NlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgaWYgKCF2YWwpIHJldHVybjtcclxuICAgICAgdGhpcy5fc2VuZENoYXRNZXNzYWdlKHZhbCwgbXNnQ29udGFpbmVyLCBpbnB1dCk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9TZW5kKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgZG9TZW5kKCk7IH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIENoYXQgV2VsY29tZSAoQ2xhdWRpYW4tc3R5bGUpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxyXG5cclxuICBfcmVuZGVyQ2hhdFdlbGNvbWUoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCB3ZWxjb21lID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2tvcy1haS13ZWxjb21lJyB9KTtcclxuICAgIHdlbGNvbWUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLXdlbGNvbWUtZ3JlZXRpbmcnLCB0ZXh0OiB0aGlzLl90KCdhaS53ZWxjb21lVGl0bGUnKSB9KTtcclxuXHJcbiAgICAvLyBTdWJ0aXRsZVxyXG4gICAgd2VsY29tZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktd2VsY29tZS1zdWInLCB0ZXh0OiB0aGlzLl90KCdhaS53ZWxjb21lJykgfSk7O1xyXG5cclxuICAgIC8vIFN1Z2dlc3Rpb24gY2FyZHNcclxuICAgIHZhciBncmlkID0gd2VsY29tZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktc3VnZ2VzdC1ncmlkJyB9KTtcclxuICAgIHZhciBzdWdnZXN0aW9ucyA9IFtcclxuICAgICAgeyBpY29uOiAnXFx1RDgzRFxcdURDQ0EnLCB0aXRsZTogdGhpcy5fdCgnYWkuc3VnZ2VzdFByb2plY3RzJyksIGRlc2M6IHRoaXMuX3QoJ2FpLnN1Z2dlc3RQcm9qZWN0c0Rlc2MnKSB9LFxyXG4gICAgICB7IGljb246ICdcXHVEODNEXFx1RENERCcsIHRpdGxlOiB0aGlzLl90KCdhaS5zdWdnZXN0UmVjZW50JyksIGRlc2M6IHRoaXMuX3QoJ2FpLnN1Z2dlc3RSZWNlbnREZXNjJykgfSxcclxuICAgICAgeyBpY29uOiAnXFx1RDgzRFxcdUREMEQnLCB0aXRsZTogdGhpcy5fdCgnYWkuc3VnZ2VzdFNlYXJjaCcpLCBkZXNjOiB0aGlzLl90KCdhaS5zdWdnZXN0U2VhcmNoRGVzYycpIH0sXHJcbiAgICBdO1xyXG4gICAgc3VnZ2VzdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XHJcbiAgICAgIHZhciBjYXJkID0gZ3JpZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktc3VnZ2VzdC1jYXJkJyB9KTtcclxuICAgICAgY2FyZC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXN1Z2dlc3QtaWNvbicsIHRleHQ6IHMuaWNvbiB9KTtcclxuICAgICAgY2FyZC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAna29zLWFpLXN1Z2dlc3QtdGl0bGUnLCB0ZXh0OiBzLnRpdGxlIH0pO1xyXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdrb3MtYWktc3VnZ2VzdC1kZXNjJywgdGV4dDogcy5kZXNjIH0pO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRmlsbCBpbnB1dCB3aXRoIHN1Z2dlc3Rpb25cclxuICAgICAgICB2YXIgaW5wdXRFbCA9IGNvbnRhaW5lci5jbG9zZXN0KCcua29zLWRiJyk/LnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktaW5wdXQnKTtcclxuICAgICAgICBpZiAoaW5wdXRFbCkgeyBpbnB1dEVsLnZhbHVlID0gcy50aXRsZTsgaW5wdXRFbC5mb2N1cygpOyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgU2hhcmVkIEFJIENoYXQgTG9naWMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHJcblxyXG4gIF9pbml0QWlDaGF0KCkge1xyXG4gICAgaWYgKHRoaXMuYWlDaGF0ICYmIHRoaXMuYWlDaGF0LmlzQ29uZmlndXJlZCkgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuYWlDaGF0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICByZXNvbHZlUHJvdmlkZXJDb25maWcoc2VsZi5zZXR0aW5ncywgc2VsZi5hcHAudmF1bHQuYWRhcHRlcikudGhlbigoY2ZnKSA9PiB7XHJcbiAgICAgIGlmIChjZmcpIHtcclxuICAgICAgICBzZWxmLmFpQ2hhdCA9IG5ldyBBSUNoYXQoe1xyXG4gICAgICAgICAgbG9jYWxlOiBzZWxmLnNldHRpbmdzPy5sb2NhbGUgfHwgJ3poLWNuJyxcclxuICAgICAgICAgIGJhc2VVcmw6IGNmZy5iYXNlVXJsLFxyXG4gICAgICAgICAgYXBpS2V5OiBjZmcuYXBpS2V5LFxyXG4gICAgICAgICAgbW9kZWw6IGNmZy5tb2RlbCxcclxuICAgICAgICAgIHN5c3RlbVByb21wdDogY2ZnLnN5c3RlbVByb21wdCB8fCBzZWxmLnNldHRpbmdzPy5haVN5c3RlbVByb21wdCB8fCAnJyxcclxuICAgICAgICAgIGxhYmVsOiBjZmcubGFiZWwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5fcmVmcmVzaENoYXRNc2dzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3JlZnJlc2hDaGF0TXNncygpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCcua29zLWFpLWNoYXQsIC5rb3MtZGItYWksIC5rb3MtZGItYWktZnVsbCcpO1xyXG4gICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgY29uc3QgbXNnQ29udGFpbmVyID0gKHNlY3Rpb24gPyBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtYWktbXNncycpIDogbnVsbCkgfHwgKHNlY3Rpb24gPyBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWktbXNncycpIDogbnVsbCk7XHJcbiAgICAgIGlmIChtc2dDb250YWluZXIpIHRoaXMuX3JlbmRlckNoYXRNZXNzYWdlcyhtc2dDb250YWluZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbmRlckNoYXRNZXNzYWdlcyhjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgY29uc3QgbXNncyA9IHRoaXMuYWlDaGF0ID8gdGhpcy5haUNoYXQuZ2V0SGlzdG9yeSgpIDogW107XHJcblxyXG4gICAgaWYgKCF0aGlzLmFpQ2hhdCB8fCAhdGhpcy5haUNoYXQuaXNDb25maWd1cmVkKSB7XHJcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyB0ZXh0OiB0aGlzLl90KCdhaS5uZWVkQ29uZmlnJyksIGNsczogJ2tvcy1haS1uZWVkLWNvbmZpZycgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IHdlbGNvbWUgc2NyZWVuIGlmIG9ubHkgc3lzdGVtL3dlbGNvbWUgbWVzc2FnZXMgZXhpc3QgKG5vIHVzZXIgbWVzc2FnZXMpXHJcbiAgICB2YXIgaGFzVXNlck1lc3NhZ2VzID0gbXNncy5zb21lKGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0ucm9sZSA9PT0gJ3VzZXInOyB9KTtcclxuICAgIGlmICghaGFzVXNlck1lc3NhZ2VzICYmIG1zZ3MubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQ2hhdFdlbGNvbWUoY29udGFpbmVyKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1zZ3MuZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcclxuICAgICAgaWYgKG1zZy5yb2xlID09PSAnc3lzdGVtJykgcmV0dXJuO1xyXG4gICAgICB2YXIgYnViYmxlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgY2xzOiAna29zLWFpLW1zZyBrb3MtYWktbXNnLScgKyBtc2cucm9sZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB0ZXh0RWwgPSBidWJibGUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLW1zZy10ZXh0JyB9KTtcclxuICAgICAgdGV4dEVsLnRleHRDb250ZW50ID0gbXNnLmNvbnRlbnQ7XHJcblxyXG4gICAgICBpZiAobXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnKSB7XHJcbiAgICAgICAgdmFyIGNvcHlCdG4gPSBidWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWFpLWNvcHktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkuY29weScpIH0pO1xyXG4gICAgICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG1zZy5jb250ZW50KTtcclxuICAgICAgICAgICAgY29weUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuX3QoJ2FpLmNvcGllZCcpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29weScpOyB9LmJpbmQodGhpcyksIDIwMDApO1xyXG4gICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBfc2VuZENoYXRNZXNzYWdlKHRleHQsIG1zZ0NvbnRhaW5lciwgaW5wdXRFbCkge1xyXG4gICAgaWYgKCF0aGlzLmFpQ2hhdCB8fCAhdGhpcy5haUNoYXQuaXNDb25maWd1cmVkKSByZXR1cm47XHJcblxyXG4gICAgaW5wdXRFbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpbnB1dEVsLnZhbHVlID0gJyc7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ2hhdE1lc3NhZ2VzKG1zZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgdGhpbmtpbmdFbCA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnIGtvcy1haS1tc2ctYXNzaXN0YW50IGtvcy1haS10aGlua2luZycgfSk7XHJcbiAgICB0aGlua2luZ0VsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLl90KCdhaS50aGlua2luZycpLCBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnIH0pO1xyXG5cclxuICAgIGxldCBhc3Npc3RhbnRUZXh0ID0gJyc7XHJcbiAgICBsZXQgYXNzaXN0YW50QnViYmxlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmFpQ2hhdC5zZW5kTWVzc2FnZSh0ZXh0LCB7XHJcbiAgICAgIG9uVG9rZW46ICh0b2tlbikgPT4ge1xyXG4gICAgICAgIGFzc2lzdGFudFRleHQgKz0gdG9rZW47XHJcbiAgICAgICAgaWYgKCFhc3Npc3RhbnRCdWJibGUpIHtcclxuICAgICAgICAgIHRoaW5raW5nRWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUgPSBtc2dDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWFpLW1zZyBrb3MtYWktbXNnLWFzc2lzdGFudCcgfSk7XHJcbiAgICAgICAgICBhc3Npc3RhbnRCdWJibGUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXNzaXN0YW50QnViYmxlLnF1ZXJ5U2VsZWN0b3IoJy5rb3MtZGItYWktbXNnLXRleHQnKS50ZXh0Q29udGVudCA9IGFzc2lzdGFudFRleHQ7XHJcbiAgICAgICAgbXNnQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1zZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRG9uZTogKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlua2luZ0VsLmlzQ29ubmVjdGVkKSB0aGlua2luZ0VsLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICghYXNzaXN0YW50QnViYmxlICYmIGFzc2lzdGFudFRleHQpIHtcclxuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZSA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnIGtvcy1haS1tc2ctYXNzaXN0YW50JyB9KTtcclxuICAgICAgICAgIGFzc2lzdGFudEJ1YmJsZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtZGItYWktbXNnLXRleHQnLCB0ZXh0OiBhc3Npc3RhbnRUZXh0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNzaXN0YW50QnViYmxlICYmIGFzc2lzdGFudFRleHQpIHtcclxuICAgICAgICAgIGNvbnN0IGNvcHlCdG4gPSBhc3Npc3RhbnRCdWJibGUuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAna29zLWFpLWNvcHktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkuY29weScpIH0pO1xyXG4gICAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhc3Npc3RhbnRUZXh0KTtcclxuICAgICAgICAgICAgICBjb3B5QnRuLnRleHRDb250ZW50ID0gdGhpcy5fdCgnYWkuY29waWVkJyk7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNvcHlCdG4udGV4dENvbnRlbnQgPSB0aGlzLl90KCdhaS5jb3B5Jyk7IH0sIDIwMDApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcclxuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlua2luZ0VsLmlzQ29ubmVjdGVkKSB0aGlua2luZ0VsLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVyckJ1YmJsZSA9IG1zZ0NvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdrb3MtYWktbXNnIGtvcy1haS1tc2ctZXJyb3InIH0pO1xyXG4gICAgICAgIGVyckJ1YmJsZS5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgdGV4dDogdGhpcy5fdCgnYWkuZXJyb3InLCB7IG1zZzogZXJyLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InIH0pLFxyXG4gICAgICAgICAgY2xzOiAna29zLWRiLWFpLW1zZy10ZXh0JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXRyeUJ0biA9IGVyckJ1YmJsZS5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdrb3MtZGItYWktcmV0cnktYnRuJywgdGV4dDogdGhpcy5fdCgnYWkucmV0cnknKSB9KTtcclxuICAgICAgICByZXRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3NlbmRDaGF0TWVzc2FnZSh0ZXh0LCBtc2dDb250YWluZXIsIGlucHV0RWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBtc2dDb250YWluZXIuc2Nyb2xsVG9wID0gbXNnQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29ja3BpdFZpZXcsIFZJRVdfVFlQRV9DT0NLUElUIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCAiLy8gS09TIENvY2twaXQgXHUyMDE0IHNldHRpbmdzIHRhYlxyXG4vLyBDbGF1ZGlhbi1pbnNwaXJlZDogdGFiYmVkIHNldHRpbmdzIHdpdGggcGVyLXByb3ZpZGVyIGNvbmZpZ3VyYXRpb25cclxuXHJcbmNvbnN0IHsgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9ID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcclxuY29uc3QgeyB0LCBMT0NBTEVfS0VZUyB9ID0gcmVxdWlyZSgnLi9sb2NhbGUnKTtcclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1MgPSB7XHJcbiAgc2Vhc29uYWxUaGVtZTogJ3NwcmluZycsXHJcbiAgZm9udFNpemU6ICdtZWRpdW0nLFxyXG4gIGxvY2FsZTogJ3poLWNuJyxcclxuICBhdXRvT3BlbjogdHJ1ZSxcclxuXHJcbiAgLy8gQWN0aXZlIHByb3ZpZGVyXHJcbiAgYWN0aXZlUHJvdmlkZXI6ICdjbGF1ZGUnLFxyXG5cclxuICAvLyBQZXItcHJvdmlkZXIgY29uZmlndXJhdGlvblxyXG4gIHByb3ZpZGVyczoge1xyXG4gICAgY2xhdWRlOiB7XHJcbiAgICAgIGxhYmVsOiAnQ2xhdWRlJyxcclxuICAgICAgZW5kcG9pbnQ6ICcnLFxyXG4gICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICBtb2RlbDogJ2NsYXVkZS1zb25uZXQtNC0yMDI1MDUxNCcsXHJcbiAgICAgIHN5c3RlbVByb21wdDogJycsXHJcbiAgICB9LFxyXG4gICAgY29kZXg6IHtcclxuICAgICAgbGFiZWw6ICdDb2RleCcsXHJcbiAgICAgIGVuZHBvaW50OiAnJyxcclxuICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgbW9kZWw6ICcnLFxyXG4gICAgICBzeXN0ZW1Qcm9tcHQ6ICcnLFxyXG4gICAgfSxcclxuICAgIG9wZW5jb2RlOiB7XHJcbiAgICAgIGxhYmVsOiAnT3BlbkNvZGUnLFxyXG4gICAgICBlbmRwb2ludDogJycsXHJcbiAgICAgIGFwaUtleTogJycsXHJcbiAgICAgIG1vZGVsOiAnJyxcclxuICAgICAgc3lzdGVtUHJvbXB0OiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gRGFzaGJvYXJkIHNlY3Rpb24gdmlzaWJpbGl0eVxyXG4gIHNob3dUb2RheVRhc2tzOiB0cnVlLFxyXG4gIHNob3dJbmJveEZpbGVzOiB0cnVlLFxyXG4gIHNob3dFbmdpbmVTdGF0ZTogdHJ1ZSxcclxuICBzaG93V2Vla2x5Q2hhcnQ6IHRydWUsXHJcbiAgc2hvd1Byb2plY3RDYXJkczogdHJ1ZSxcclxuICBzaG93UmVjZW50QWN0aXZpdHk6IHRydWUsXHJcbiAgc2hvd1ZhdWx0U3RhdHM6IHRydWUsXHJcbiAgc2hvd05hdjogdHJ1ZSxcclxuXHJcbiAgLy8gRGF0YSBsaW1pdHNcclxuICBtYXhSZWNlbnRJdGVtczogOCxcclxuICBtYXhUYXNrSXRlbXM6IDEyLFxyXG4gIG1heEluYm94SXRlbXM6IDYsXHJcbn07XHJcblxyXG4vKiogQnVpbHQtaW4gcHJvdmlkZXIgcHJlc2V0cyBmb3IgcXVpY2sgZmlsbCAqL1xyXG5jb25zdCBQUk9WSURFUl9QUkVTRVRTID0ge1xyXG4gIGNsYXVkZToge1xyXG4gICAgZW5kcG9pbnQ6ICdodHRwczovL2FwaS5hbnRocm9waWMuY29tL3YxJyxcclxuICAgIG1vZGVsOiAnY2xhdWRlLXNvbm5ldC00LTIwMjUwNTE0JyxcclxuICAgIG1vZGVsczogWydjbGF1ZGUtc29ubmV0LTQtMjAyNTA1MTQnLCAnY2xhdWRlLTMtNS1zb25uZXQtMjAyNDEwMjInLCAnY2xhdWRlLTMtb3B1cy0yMDI0MDIyOScsICdjbGF1ZGUtMy01LWhhaWt1LTIwMjQxMDIyJ10sXHJcbiAgfSxcclxuICBjb2RleDoge1xyXG4gICAgZW5kcG9pbnQ6ICcnLFxyXG4gICAgbW9kZWw6ICcnLFxyXG4gICAgbW9kZWxzOiBbXSxcclxuICB9LFxyXG4gIG9wZW5jb2RlOiB7XHJcbiAgICBlbmRwb2ludDogJycsXHJcbiAgICBtb2RlbDogJycsXHJcbiAgICBtb2RlbHM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jbGFzcyBDb2NrcGl0U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcCwgcGx1Z2luKSB7XHJcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gJ2dlbmVyYWwnOyAvLyAnZ2VuZXJhbCcgfCBwcm92aWRlcklkXHJcbiAgfVxyXG5cclxuICBfdChrZXksIHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHQoa2V5LCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG4gICAgY29uc3QgcHJvdmlkZXJJZHMgPSBbJ2NsYXVkZScsICdjb2RleCcsICdvcGVuY29kZSddO1xyXG4gICAgY29uc3QgdGFiSWRzID0gWydnZW5lcmFsJywgLi4ucHJvdmlkZXJJZHNdO1xyXG5cclxuICAgIC8vIFRhYiBiYXJcclxuICAgIGNvbnN0IHRhYkJhciA9IGNvbnRhaW5lckVsLmNyZWF0ZURpdih7IGNsczogJ2tvcy1jb2NrcGl0LXNldHRpbmdzLXRhYnMnIH0pO1xyXG4gICAgY29uc3QgdGFiQnV0dG9ucyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGlmICghdGFiSWRzLmluY2x1ZGVzKHRoaXMuYWN0aXZlVGFiKSkgdGhpcy5hY3RpdmVUYWIgPSAnZ2VuZXJhbCc7XHJcblxyXG4gICAgZm9yIChjb25zdCBpZCBvZiB0YWJJZHMpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSBpZCA9PT0gJ2dlbmVyYWwnXHJcbiAgICAgICAgPyAnR2VuZXJhbCdcclxuICAgICAgICA6ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbaWRdPy5sYWJlbCB8fCBpZCk7XHJcbiAgICAgIGNvbnN0IGJ0biA9IHRhYkJhci5jcmVhdGVFbCgnYnV0dG9uJywge1xyXG4gICAgICAgIGNsczogJ2tvcy1jb2NrcGl0LXNldHRpbmdzLXRhYicgKyAoaWQgPT09IHRoaXMuYWN0aXZlVGFiID8gJyBrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItLWFjdGl2ZScgOiAnJyksXHJcbiAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBpZDtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpZCBvZiB0YWJJZHMpIHtcclxuICAgICAgICAgIHRhYkJ1dHRvbnMuZ2V0KHRpZCk/LnRvZ2dsZUNsYXNzKCdrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItLWFjdGl2ZScsIHRpZCA9PT0gaWQpO1xyXG4gICAgICAgICAgdGFiQ29udGVudHMuZ2V0KHRpZCk/LnRvZ2dsZUNsYXNzKCdrb3MtY29ja3BpdC1zZXR0aW5ncy10YWItY29udGVudC0tYWN0aXZlJywgdGlkID09PSBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGFiQnV0dG9ucy5zZXQoaWQsIGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGFiIGNvbnRlbnQgY29udGFpbmVyc1xyXG4gICAgZm9yIChjb25zdCBpZCBvZiB0YWJJZHMpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRhaW5lckVsLmNyZWF0ZURpdih7XHJcbiAgICAgICAgY2xzOiAna29zLWNvY2twaXQtc2V0dGluZ3MtdGFiLWNvbnRlbnQnICsgKGlkID09PSB0aGlzLmFjdGl2ZVRhYiA/ICcga29zLWNvY2twaXQtc2V0dGluZ3MtdGFiLWNvbnRlbnQtLWFjdGl2ZScgOiAnJyksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0YWJDb250ZW50cy5zZXQoaWQsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBlYWNoIHRhYlxyXG4gICAgdGhpcy5yZW5kZXJHZW5lcmFsVGFiKHRhYkNvbnRlbnRzLmdldCgnZ2VuZXJhbCcpKTtcclxuICAgIGZvciAoY29uc3QgcHJvdmlkZXJJZCBvZiBwcm92aWRlcklkcykge1xyXG4gICAgICB0aGlzLnJlbmRlclByb3ZpZGVyVGFiKHRhYkNvbnRlbnRzLmdldChwcm92aWRlcklkKSwgcHJvdmlkZXJJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJHZW5lcmFsVGFiKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogdGhpcy5fdCgnc2V0dGluZ3MuZ2VuZXJhbFRhYicpIH0pO1xyXG5cclxuICAgIC8vIExhbmd1YWdlXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3NldHRpbmdzLmxhbmd1YWdlJykpXHJcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3NldHRpbmdzLmxhbmd1YWdlRGVzYycpKVxyXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+IHtcclxuICAgICAgICBkLmFkZE9wdGlvbignemgtY24nLCB0aGlzLl90KCdzZXR0aW5ncy5sYW5nWmhDTicpKVxyXG4gICAgICAgICAuYWRkT3B0aW9uKCdlbicsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdFbicpKVxyXG4gICAgICAgICAuYWRkT3B0aW9uKCd6aC10dycsIHRoaXMuX3QoJ3NldHRpbmdzLmxhbmdaaFRXJykpXHJcbiAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb2NhbGUpXHJcbiAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxvY2FsZSA9IHY7XHJcbiAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBBdXRvLW9wZW5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW4nKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MuYXV0b09wZW5EZXNjJykpXHJcbiAgICAgIC5hZGRUb2dnbGUoKHQpID0+XHJcbiAgICAgICAgdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvT3Blbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9PcGVuID0gdjtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gQWN0aXZlIHByb3ZpZGVyIHNlbGVjdG9yXHJcbiAgICBjb25zdCBwcm92aWRlcklkcyA9IFsnY2xhdWRlJywgJ2NvZGV4JywgJ29wZW5jb2RlJ107XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyJykpXHJcbiAgICAgIC5zZXREZXNjKHRoaXMuX3QoJ3Byb3ZpZGVyLmFjdGl2ZVByb3ZpZGVyRGVzYycpKVxyXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBpZCBvZiBwcm92aWRlcklkcykge1xyXG4gICAgICAgICAgZC5hZGRPcHRpb24ocGlkLCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcGlkXT8ubGFiZWwgfHwgcGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVQcm92aWRlciB8fCAnY2xhdWRlJykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVByb3ZpZGVyID0gdjtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBEYXNoYm9hcmQgc2VjdGlvbnNcclxuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLmRhc2hib2FyZCcpIH0pO1xyXG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdwJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXNoYm9hcmREZXNjJyksIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBbXHJcbiAgICAgIHsga2V5OiAnc2hvd1RvZGF5VGFza3MnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrcycpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uVG9kYXlUYXNrc0Rlc2MnKSB9LFxyXG4gICAgICB7IGtleTogJ3Nob3dQcm9qZWN0Q2FyZHMnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uUHJvamVjdHMnKSwgZGVzYzogdGhpcy5fdCgnc2V0dGluZ3Muc2VjdGlvblByb2plY3RzRGVzYycpIH0sXHJcbiAgICAgIHsga2V5OiAnc2hvd1ZhdWx0U3RhdHMnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0cycpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uVmF1bHRTdGF0c0Rlc2MnKSB9LFxyXG4gICAgICB7IGtleTogJ3Nob3dSZWNlbnRBY3Rpdml0eScsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25SZWNlbnRBY3Rpdml0eScpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uUmVjZW50QWN0aXZpdHlEZXNjJykgfSxcclxuICAgICAgeyBrZXk6ICdzaG93TmF2JywgbmFtZTogdGhpcy5fdCgnc2V0dGluZ3Muc2VjdGlvbk5hdicpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uTmF2RGVzYycpIH0sXHJcbiAgICAgIHsga2V5OiAnc2hvd0luYm94RmlsZXMnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlcycpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uSW5ib3hGaWxlc0Rlc2MnKSB9LFxyXG4gICAgICB7IGtleTogJ3Nob3dFbmdpbmVTdGF0ZScsIG5hbWU6IHRoaXMuX3QoJ3NldHRpbmdzLnNlY3Rpb25FbmdpbmVTdGF0ZScpLCBkZXNjOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uRW5naW5lU3RhdGVEZXNjJykgfSxcclxuICAgICAgeyBrZXk6ICdzaG93V2Vla2x5Q2hhcnQnLCBuYW1lOiB0aGlzLl90KCdzZXR0aW5ncy5zZWN0aW9uV2Vla2x5Q2hhcnQnKSwgZGVzYzogdGhpcy5fdCgnc2V0dGluZ3Muc2VjdGlvbldlZWtseUNoYXJ0RGVzYycpIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsga2V5LCBuYW1lLCBkZXNjIH0pID0+IHtcclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKS5zZXROYW1lKG5hbWUpLnNldERlc2MoZGVzYykuYWRkVG9nZ2xlKCh0KSA9PlxyXG4gICAgICAgIHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Nba2V5XSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzW2tleV0gPSB2O1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERhdGEgbGltaXRzXHJcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5kYXRhTGltaXRzJykgfSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdzZXR0aW5ncy5tYXhSZWNlbnQnKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4UmVjZW50RGVzYycpKVxyXG4gICAgICAuYWRkVGV4dCgodCkgPT5cclxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKCc4Jykuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFJlY2VudEl0ZW1zID0gTWF0aC5tYXgoMywgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA4KSk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubWF4VGFza3MnKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4VGFza3NEZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxyXG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoJzEyJykuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLm1heFRhc2tJdGVtcykpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhUYXNrSXRlbXMgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigyMCwgTnVtYmVyKHYpIHx8IDEyKSk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MubWF4SW5ib3gnKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgnc2V0dGluZ3MubWF4SW5ib3hEZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxyXG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoJzYnKS5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MubWF4SW5ib3hJdGVtcykpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXhJbmJveEl0ZW1zID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjAsIE51bWJlcih2KSB8fCA2KSk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIEFib3V0XHJcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiB0aGlzLl90KCdzZXR0aW5ncy5hYm91dCcpIH0pO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGRlc2MuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuX3QoJ3NldHRpbmdzLnZlcnNpb25EZXNjJykgfSk7XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpLnNldE5hbWUodGhpcy5fdCgnc2V0dGluZ3MudmVyc2lvbicpKS5zZXREZXNjKGRlc2MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUHJvdmlkZXJUYWIoY29udGFpbmVyLCBwcm92aWRlcklkKSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1twcm92aWRlcklkXTtcclxuICAgIGNvbnN0IHByZXNldCA9IFBST1ZJREVSX1BSRVNFVFNbcHJvdmlkZXJJZF07XHJcbiAgICBjb25zdCBsYWJlbCA9IHByb3ZpZGVyPy5sYWJlbCB8fCBwcm92aWRlcklkO1xyXG5cclxuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6IHRoaXMuX3QoJ3Byb3ZpZGVyLmxhYmVsU2V0dGluZ3MnLCB7IGxhYmVsOiBsYWJlbCB9KSB9KTtcclxuXHJcbiAgICAvLyBBUEkgRW5kcG9pbnRcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcclxuICAgICAgLnNldE5hbWUodGhpcy5fdCgncHJvdmlkZXIuZW5kcG9pbnQnKSlcclxuICAgICAgLnNldERlc2MocHJlc2V0Py5lbmRwb2ludCA/IHRoaXMuX3QoJ3Byb3ZpZGVyLmRlZmF1bHRFbmRwb2ludCcsIHsgZW5kcG9pbnQ6IHByZXNldC5lbmRwb2ludCB9KSA6IHRoaXMuX3QoJ3Byb3ZpZGVyLmVuZHBvaW50RGVzYycpKVxyXG4gICAgICAuYWRkVGV4dCgodCkgPT5cclxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKHByZXNldD8uZW5kcG9pbnQgfHwgJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnKVxyXG4gICAgICAgICAuc2V0VmFsdWUocHJvdmlkZXI/LmVuZHBvaW50IHx8ICcnKVxyXG4gICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcm92aWRlcnNbcHJvdmlkZXJJZF0uZW5kcG9pbnQgPSB2LnRyaW0oKTtcclxuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBBUEkgS2V5XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXHJcbiAgICAgIC5zZXROYW1lKHRoaXMuX3QoJ3Byb3ZpZGVyLmFwaUtleScpKVxyXG4gICAgICAuc2V0RGVzYyh0aGlzLl90KCdwcm92aWRlci5hcGlLZXlEZXNjJykpXHJcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB7XHJcbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcignc2stLi4uJylcclxuICAgICAgICAgLnNldFZhbHVlKHByb3ZpZGVyPy5hcGlLZXkgfHwgJycpXHJcbiAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnByb3ZpZGVyc1twcm92aWRlcklkXS5hcGlLZXkgPSB2LnRyaW0oKTtcclxuICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgdC5pbnB1dEVsLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBNb2RlbFxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdwcm92aWRlci5tb2RlbCcpKVxyXG4gICAgICAuc2V0RGVzYyhwcmVzZXQ/Lm1vZGVscz8ubGVuZ3RoID8gdGhpcy5fdCgncHJvdmlkZXIucHJlc2V0TW9kZWxzJywgeyBtb2RlbHM6IHByZXNldC5tb2RlbHMuam9pbignLCAnKSB9KSA6IHRoaXMuX3QoJ3Byb3ZpZGVyLm1vZGVsRGVzYycpKVxyXG4gICAgICAuYWRkVGV4dCgodCkgPT5cclxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKHByZXNldD8ubW9kZWwgfHwgJ2dwdC00bycpXHJcbiAgICAgICAgIC5zZXRWYWx1ZShwcm92aWRlcj8ubW9kZWwgfHwgcHJlc2V0Py5tb2RlbCB8fCAnJylcclxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJvdmlkZXJzW3Byb3ZpZGVySWRdLm1vZGVsID0gdi50cmltKCk7XHJcbiAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gU3lzdGVtIFByb21wdFxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxyXG4gICAgICAuc2V0TmFtZSh0aGlzLl90KCdwcm92aWRlci5zeXN0ZW1Qcm9tcHQnKSlcclxuICAgICAgLnNldERlc2ModGhpcy5fdCgncHJvdmlkZXIuc3lzdGVtUHJvbXB0UGxhY2Vob2xkZXInKSlcclxuICAgICAgLmFkZFRleHRBcmVhKCh0KSA9PiB7XHJcbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcih0aGlzLl90KCdwcm92aWRlci5zeXN0ZW1Qcm9tcHRQbGFjZWhvbGRlcicpKVxyXG4gICAgICAgICAuc2V0VmFsdWUocHJvdmlkZXI/LnN5c3RlbVByb21wdCB8fCAnJylcclxuICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJvdmlkZXJzW3Byb3ZpZGVySWRdLnN5c3RlbVByb21wdCA9IHYudHJpbSgpO1xyXG4gICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB0LmlucHV0RWwucm93cyA9IDQ7XHJcbiAgICAgICAgdC5pbnB1dEVsLmNvbHMgPSA2MDtcclxuICAgICAgICB0LmlucHV0RWwuYWRkQ2xhc3MoJ2tvcy1jb2NrcGl0LXRleHRhcmVhJyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IENvY2twaXRTZXR0aW5nVGFiLCBERUZBVUxUX1NFVFRJTkdTLCBQUk9WSURFUl9QUkVTRVRTIH07XHJcbiIsICIvLyBLT1MgQ29ja3BpdCBcdTIwMTQgcGx1Z2luIGVudHJ5IHBvaW50XG5cbmNvbnN0IHsgUGx1Z2luIH0gPSByZXF1aXJlKCdvYnNpZGlhbicpO1xuY29uc3QgeyBDb2NrcGl0VmlldywgVklFV19UWVBFX0NPQ0tQSVQgfSA9IHJlcXVpcmUoJy4vY29ja3BpdC12aWV3Jyk7XG5jb25zdCB7IENvY2twaXRTZXR0aW5nVGFiLCBERUZBVUxUX1NFVFRJTkdTIH0gPSByZXF1aXJlKCcuL3NldHRpbmdzLXRhYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEtvc0NvY2twaXRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFX0NPQ0tQSVQsIChsZWFmKSA9PiBuZXcgQ29ja3BpdFZpZXcobGVhZiwgdGhpcykpO1xuXG4gICAgLy8gUmliYm9uOiBEYXNoYm9hcmRcbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ2dhdWdlJywgJ0tPUyBDb2NrcGl0JywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnaG9tZScgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSaWJib246IEFJIENoYXRcbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ2JvdCcsICdLT1MgQUkgQ2hhdCcsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbkNvY2twaXQoeyBwYW5lbDogJ2NoYXQnIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZDogRGFzaGJvYXJkXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnT3BlbiBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnaG9tZScgfSksXG4gICAgfSk7XG5cbiAgICAvLyBDb21tYW5kOiBBSSBDaGF0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi1rb3MtYWktY2hhdCcsXG4gICAgICBuYW1lOiAnT3BlbiBLT1MgQUkgQ2hhdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5vcGVuQ29ja3BpdCh7IHBhbmVsOiAnY2hhdCcgfSksXG4gICAgfSk7XG5cbiAgICAvLyBDb21tYW5kOiBSZWZyZXNoXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmVmcmVzaC1rb3MtY29ja3BpdCcsXG4gICAgICBuYW1lOiAnUmVmcmVzaCBLT1MgQ29ja3BpdCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5yZWZyZXNoQ29ja3BpdCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBDb2NrcGl0U2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9uTGF5b3V0UmVhZHkoKCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DT0NLUElUKTtcbiAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPT09IDAgJiYgdGhpcy5zZXR0aW5ncy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5Db2NrcGl0KHsgcGFuZWw6ICdob21lJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Db2NrcGl0KG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcbiAgICBjb25zdCBleGlzdGluZyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuXG4gICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGV4aXN0aW5nWzBdKTtcbiAgICAgIGNvbnN0IHZpZXcgPSBleGlzdGluZ1swXS52aWV3O1xuICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMucGFuZWwgPT09ICdjaGF0JyAmJiB0eXBlb2Ygdmlldy5zd2l0Y2hQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuY29sbGVjdERhdGEoKS50aGVuKChkYXRhKSA9PiB2aWV3LnN3aXRjaFBhbmVsKCdjaGF0JywgZGF0YSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFuZWwgPT09ICdob21lJyAmJiB0eXBlb2Ygdmlldy5zd2l0Y2hQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuY29sbGVjdERhdGEoKS50aGVuKChkYXRhKSA9PiB2aWV3LnN3aXRjaFBhbmVsKCdob21lJywgZGF0YSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2aWV3LnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhd2FpdCB2aWV3LnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhZih0cnVlKTtcbiAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7XG4gICAgICB0eXBlOiBWSUVXX1RZUEVfQ09DS1BJVCxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHZpZXcgaXMgc2V0LCBzd2l0Y2ggdG8gcmVxdWVzdGVkIHBhbmVsXG4gICAgaWYgKG9wdGlvbnMucGFuZWwgPT09ICdjaGF0Jykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnN3aXRjaFBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEoKS50aGVuKChkYXRhKSA9PiB2aWV3LnN3aXRjaFBhbmVsKCdjaGF0JywgZGF0YSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgYXN5bmMgY29sbGVjdERhdGEoKSB7XG4gICAgLy8gTWluaW1hbCBkYXRhIGNvbGxlY3RvciBmb3IgcGFuZWwgc3dpdGNoaW5nXG4gICAgY29uc3QgeyBnZXRUb2RheVN0YXRlLCBnZXREYXNoYm9hcmRTdGF0cywgbGlzdFByb2plY3RzIH0gPSByZXF1aXJlKCcuL2hvbWUtc2VydmljZScpO1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xuICAgIGNvbnN0IFt0b2RheSwgcHJvamVjdHMsIHN0YXRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldFRvZGF5U3RhdGUoYXBwKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgICAgIGxpc3RQcm9qZWN0cyhhcHAsIHsgYWN0aXZlT25seTogdHJ1ZSB9KS5jYXRjaCgoKSA9PiBbXSksXG4gICAgICBnZXREYXNoYm9hcmRTdGF0cyhhcHApLmNhdGNoKCgpID0+ICh7IHRvdGFsTm90ZXM6IDAsIHRvZGF5TmV3OiAwLCBzdGF0czoge30gfSkpLFxuICAgIF0pO1xuICAgIHJldHVybiB7IHRvZGF5LCBwcm9qZWN0cywgc3RhdHMgfTtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2hDb2NrcGl0KCkge1xuICAgIGNvbnN0IGxlYXZlcyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NPQ0tQSVQpO1xuICAgIGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF3YWl0IHZpZXcucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgc2F2ZWQpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgdGhpcy5yZWZyZXNoQ29ja3BpdCgpO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ09DS1BJVCkuZm9yRWFjaCgobGVhZikgPT4ge1xuICAgICAgbGVhZi5kZXRhY2goKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUEsa0JBQUFBLFVBQUFDLFNBQUE7QUFHQSxRQUFNLFVBQVU7QUFBQSxNQUNkLFNBQVM7QUFBQTtBQUFBLFFBRVAsWUFBWTtBQUFBLFFBQ1osZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBO0FBQUEsUUFHYixjQUFjO0FBQUEsUUFDZCxjQUFjO0FBQUEsUUFDZCxjQUFjO0FBQUEsUUFDZCxrQkFBa0I7QUFBQSxRQUNsQixnQkFBZ0I7QUFBQSxRQUNoQixrQkFBa0I7QUFBQTtBQUFBLFFBR2xCLHFCQUFxQjtBQUFBLFFBQ3JCLHFCQUFxQjtBQUFBLFFBQ3JCLHNCQUFzQjtBQUFBLFFBQ3RCLHlCQUF5QjtBQUFBLFFBQ3pCLHFCQUFxQjtBQUFBLFFBQ3JCLHNCQUFzQjtBQUFBO0FBQUEsUUFHdEIsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFHWCxvQkFBb0I7QUFBQSxRQUNwQixrQkFBa0I7QUFBQSxRQUNsQixvQkFBb0I7QUFBQSxRQUNwQixxQkFBcUI7QUFBQSxRQUNyQixpQkFBaUI7QUFBQSxRQUNqQixtQkFBbUI7QUFBQSxRQUNuQixpQkFBaUI7QUFBQTtBQUFBLFFBR2pCLGNBQWM7QUFBQSxRQUNkLGlCQUFpQjtBQUFBLFFBQ2pCLGFBQWE7QUFBQSxRQUNiLHFCQUFxQjtBQUFBO0FBQUEsUUFHckIsaUJBQWlCO0FBQUEsUUFDakIsaUJBQWlCO0FBQUEsUUFDakIsZUFBZTtBQUFBO0FBQUEsUUFHZixlQUFlO0FBQUEsUUFDZixvQkFBb0I7QUFBQSxRQUNwQix3QkFBd0I7QUFBQSxRQUN4QixrQkFBa0I7QUFBQSxRQUNsQix1QkFBdUI7QUFBQTtBQUFB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UUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsd0JBQXdCO0FBQUEsUUFDeEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIscUJBQXFCO0FBQUEsUUFFckIsa0JBQWtCO0FBQUEsUUFDbEIsbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWdCO0FBQUEsUUFDaEIsb0JBQW9CO0FBQUEsUUFDcEIsaUJBQWlCO0FBQUEsUUFDakIsMEJBQTBCO0FBQUEsUUFFMUIsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsZ0JBQWdCO0FBQUEsUUFDaEIsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YscUJBQXFCO0FBQUEsUUFDckIsaUJBQWlCO0FBQUEsUUFDakIsb0JBQW9CO0FBQUEsUUFDcEIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFFakIsZ0JBQWdCO0FBQUEsUUFDaEIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFFdEIsY0FBYztBQUFBLFFBRWQsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCO0FBQUEsUUFFaEIsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBRWIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIsdUJBQXVCO0FBQUEsUUFDdkIsbUJBQW1CO0FBQUEsUUFDbkIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIsc0JBQXNCO0FBQUEsUUFDdEIsd0JBQXdCO0FBQUEsUUFDeEIsbUJBQW1CO0FBQUEsUUFDbkIsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLFFBQ2QscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFFdEIsa0JBQWtCO0FBQUEsUUFDbEIsMkJBQTJCO0FBQUEsUUFDM0IseUJBQXlCO0FBQUEsUUFDekIsdUJBQXVCO0FBQUEsUUFDdkIsOEJBQThCO0FBQUEsUUFDOUIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIsd0JBQXdCO0FBQUEsUUFDeEIsdUJBQXVCO0FBQUEsUUFDdkIsMEJBQTBCO0FBQUEsUUFDMUIsb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsd0JBQXdCO0FBQUEsUUFFeEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsMkJBQTJCO0FBQUEsUUFDM0Isd0JBQXdCO0FBQUEsUUFDeEIsNEJBQTRCO0FBQUEsUUFDNUIsd0JBQXdCO0FBQUEsUUFDeEIsMkJBQTJCO0FBQUEsUUFDM0Isd0JBQXdCO0FBQUEsUUFDeEIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsMEJBQTBCO0FBQUEsUUFDMUIsd0JBQXdCO0FBQUEsUUFDeEIsc0JBQXNCO0FBQUEsUUFDdEIsNEJBQTRCO0FBQUEsUUFDNUIsb0JBQW9CO0FBQUEsUUFDcEIsbUJBQW1CO0FBQUEsUUFFbkIsc0JBQXNCO0FBQUEsUUFDdEIsY0FBYztBQUFBLFFBRWQsbUJBQW1CO0FBQUEsUUFDbkIsb0JBQW9CO0FBQUEsUUFFcEIsWUFBWTtBQUFBLFFBQ1osa0JBQWtCO0FBQUEsUUFDbEIsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsZUFBZTtBQUFBLFFBQ2YsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsYUFBYTtBQUFBLFFBQ2IsaUJBQWlCO0FBQUEsUUFDakIsZ0JBQWdCO0FBQUEsUUFDaEIsb0JBQW9CO0FBQUEsUUFDcEIsbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFDeEIsb0JBQW9CO0FBQUEsUUFDcEIsd0JBQXdCO0FBQUEsUUFFeEIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osbUJBQW1CO0FBQUEsUUFDbkIsOEJBQThCO0FBQUEsUUFFOUIsbUJBQW1CO0FBQUEsUUFDbkIsa0JBQWtCO0FBQUEsUUFDbEIscUJBQXFCO0FBQUEsUUFDckIscUJBQXFCO0FBQUEsUUFDckIsbUJBQW1CO0FBQUEsUUFDbkIsa0JBQWtCO0FBQUEsUUFDbEIseUJBQXlCO0FBQUEsUUFDekIsb0NBQW9DO0FBQUEsUUFDcEMsMkJBQTJCO0FBQUEsUUFDM0IsK0JBQStCO0FBQUEsUUFDL0IscUJBQXFCO0FBQUEsUUFDckIsMEJBQTBCO0FBQUEsUUFDMUIsNEJBQTRCO0FBQUEsUUFDNUIseUJBQXlCO0FBQUEsUUFDekIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFFekIsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsUUFFaEIsa0JBQWtCO0FBQUEsUUFDbEIsaUJBQWlCO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIsa0JBQWtCO0FBQUEsUUFDbEIsc0JBQXNCO0FBQUEsUUFDdEIsdUJBQXVCO0FBQUEsUUFDdkIsd0JBQXdCO0FBQUEsUUFDeEIsbUJBQW1CO0FBQUEsUUFDbkIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIseUJBQXlCO0FBQUEsUUFDekIscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIsdUJBQXVCO0FBQUEsUUFDdkIsc0JBQXNCO0FBQUEsUUFDdEIsb0JBQW9CO0FBQUEsUUFDcEIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFDekIsc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIscUJBQXFCO0FBQUEsUUFDckIseUJBQXlCO0FBQUEsUUFD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QUUsWUFBWSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQUEsSUFDaEYsQ0FBQztBQUNELFdBQU8sRUFBRSxPQUFPLFVBQVUsTUFBTTtBQUFBLEVBQ2xDO0FBQUEsRUFFQSxNQUFNLGlCQUFpQjtBQUNyQixVQUFNLFNBQVMsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUNuRSxlQUFXLFFBQVEsUUFBUTtBQUN6QixZQUFNLE9BQU8sS0FBSztBQUNsQixVQUFJLFFBQVEsT0FBTyxLQUFLLFlBQVksWUFBWTtBQUM5QyxjQUFNLEtBQUssUUFBUTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNuQixVQUFNLFFBQVEsTUFBTSxLQUFLLFNBQVM7QUFDbEMsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLEtBQUs7QUFBQSxFQUMzRDtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUNqQyxTQUFLLGVBQWU7QUFBQSxFQUN0QjtBQUFBLEVBRUEsV0FBVztBQUNULFNBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUIsRUFBRSxRQUFRLENBQUMsU0FBUztBQUN0RSxXQUFLLE9BQU87QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlZJRVdfVFlQRV9DT0NLUElUIiwgIkNvY2twaXRWaWV3IiwgInQiLCAidDIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiREVGQVVMVF9TRVRUSU5HUyIsICJDb2NrcGl0U2V0dGluZ1RhYiIsICJ0IiwgImRlc2MiXQp9Cg==
