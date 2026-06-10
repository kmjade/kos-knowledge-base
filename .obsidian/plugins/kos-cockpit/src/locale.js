// KOS Cockpit — i18n locale dictionary
// Keys are organized by UI section, values are flat strings with {placeholder} support.

const LOCALES = {
  'zh-cn': {
    // General
    'app.name': 'KOS Cockpit',
    'app.loading': '正在加载 KOS Cockpit...',
    'app.error': '加载仪表盘时出错。',

    // Header
    'header.dateFormat': 'YYYY-MM-DD',
    'header.noteStatus': '每日笔记 [{status}]',
    'header.noteCreated': '已创建',
    'header.noteNotCreated': '未创建',
    'header.todayFocus': '今日聚焦: {focus}',
    'header.focusNotSet': '(未设定)',

    // Day names
    'day.sun': '日',
    'day.mon': '一',
    'day.tue': '二',
    'day.wed': '三',
    'day.thu': '四',
    'day.fri': '五',
    'day.sat': '六',

    // Quick actions
    'action.planToday': '规划今天',
    'action.capture': '快速捕获',
    'action.dayReview': '每日回顾',
    'action.newProject': '新建项目',
    'action.triage': 'Triage',
    'action.settings': '设置',
'action.aiChat': 'AI Chat',

    // Today Tasks
    'task.title': '今日任务',
    'task.progress': '{done}/{total} ({rate}%)',
    'task.none': '暂无任务。',
    'task.dailyMissing': '今日笔记未创建。点击 [规划今天] 创建。',

    // Projects
    'project.title': '活跃项目',
    'project.empty': '暂无活跃项目。',

    // Vault stats
    'stats.title': '知识库统计',
    'stats.totalNotes': '总笔记',
    'stats.activeProjects': '活跃项目',
    'stats.todayNew': '今日新增',
    'stats.pendingTriage': '待分拣',

    // Recent activity
    'recent.title': '最近活动',
    'recent.empty': '暂无活动。',

    // Navigation
    'nav.title': '三支柱 · 导航',

    // Inbox
    'inbox.title': 'Inbox ({count})',
    'inbox.more': '+{count} more...',

    // Engine state
    'engine.title': '引擎状态',
    'engine.empty': '暂无引擎状态数据。',

    // Weekly chart
    'weekly.title': '本周记录分布',
    'weekly.empty': '本周暂无日记记录。',
    'weekly.barTooltip': '{date}: {count} 条',

    // AI Chat
    'ai.title': 'AI 对话',
    'ai.placeholder': '询问 KOS 知识库...',
    'ai.welcome': '你好！我是 KOS AI 助手。你可以问我关于知识库、项目状态或任何 KOS 相关的问题。',
    'ai.sendBtn': '发送',
    'ai.clearBtn': '清空对话',
    'ai.thinking': '思考中...',
    'ai.needConfig': '未检测到 FLOWnote 配置，也未找到手动 API 设置。请在 FLOWnote 中配置 AI Provider，或在 Cockpit 设置中手动填写。',
    'ai.error': '请求失败: {msg}',
    'ai.retry': '重试',
    'ai.copy': '复制',
    'ai.copied': '已复制',
    'ai.modelLabel': '模型',
    'ai.connected': '已连接',
    'ai.notConfigured': '未配置',
    'ai.welcomeTitle': 'Ask KOS',
    'ai.suggestProjects': '项目概览',
    'ai.suggestProjectsDesc': '查看活跃项目进度',
    'ai.suggestRecent': '近期活动',
    'ai.suggestRecentDesc': '最近修改的笔记',
    'ai.suggestSearch': '搜索知识库',
    'ai.suggestSearchDesc': '查找特定内容',

    // EN

    // TW


    // AI settings
    'ai.providerSection': 'AI Provider',
    'ai.providerSectionDesc': '配置 AI 对话的 API 接入参数。若 FLOWnote 已配置 AI Provider（推荐），Cockpit 将自动读取其设置。留空则聊天区不可用。',
    'ai.apiEndpoint': 'API Endpoint',
    'ai.apiKey': 'API Key',
    'ai.model': '模型名称',
    'ai.systemPrompt': '系统提示词',
    'ai.systemPromptPlaceholder': '你是一个知识管理助手，帮助用户处理 KOS 知识库。',

    // Providers
    'provider.claude': 'Claude',
    'provider.codex': 'Codex',
    'provider.opencode': 'OpenCode',
    'provider.endpoint': 'API Endpoint',
    'provider.apiKey': 'API Key',
    'provider.model': 'Model',
    'provider.systemPrompt': 'System Prompt',
    'provider.systemPromptPlaceholder': 'You are a helpful assistant...',
    'provider.activeProvider': 'Active AI Provider',
    'provider.activeProviderDesc': 'Select which provider the AI Chat panel uses.',
    'provider.settings': 'Provider Settings',
    // Settings
    'settings.general': 'General',
    'settings.language': '界面语言',
    'settings.languageDesc': '选择仪表盘界面的显示语言。',
    'settings.langZhCN': '简体中文',
    'settings.langEn': 'English',
    'settings.langZhTW': '繁體中文',
    'settings.autoOpen': '启动时自动打开',
    'settings.autoOpenDesc': 'Obsidian 启动时自动打开 KOS Cockpit。',
    'settings.dashboard': 'Dashboard Sections',
    'settings.dashboardDesc': '控制仪表盘上各区块的显示。',
    'settings.dataLimits': 'Data Limits',
    'settings.maxRecent': '最大最近活动数',
    'settings.maxRecentDesc': '显示最近修改文件的数量（最多 20）。',
    'settings.maxTasks': '最大任务数',
    'settings.maxTasksDesc': '显示今日任务的数量（最多 20）。',
    'settings.maxInbox': '最大 Inbox 数',
    'settings.maxInboxDesc': '显示 Inbox 文件名的数量（最多 20）。',
    'settings.about': 'About',
    'settings.version': '版本',
    'settings.versionDesc': 'KOS Cockpit v0.2.0 — KOS_LLM-Wiki 知识管理仪表盘。KOS 生态的一部分。',
  },

  'en': {
    'app.name': 'KOS Cockpit',
    'app.loading': 'Loading KOS Cockpit...',
    'app.error': 'Something went wrong loading the dashboard.',

    'header.dateFormat': 'YYYY-MM-DD',
    'header.noteStatus': 'Daily Note [{status}]',
    'header.noteCreated': 'Created',
    'header.noteNotCreated': 'Not Created',
    'header.todayFocus': 'Today\'s Focus: {focus}',
    'header.focusNotSet': '(Not Set)',

    'day.sun': 'S',
    'day.mon': 'M',
    'day.tue': 'T',
    'day.wed': 'W',
    'day.thu': 'T',
    'day.fri': 'F',
    'day.sat': 'S',

    'action.planToday': 'Plan Today',
    'action.capture': 'Quick Capture',
    'action.dayReview': 'Day Review',
    'action.newProject': 'New Project',
    'action.triage': 'Triage',
    'action.settings': 'Settings',
    'action.aiChat': 'AI Chat',

    'task.title': 'Today\'s Tasks',
    'task.progress': '{done}/{total} ({rate}%)',
    'task.none': 'No tasks yet.',
    'task.dailyMissing': 'Daily note not created. Click [Plan Today] to create one.',

    'project.title': 'Active Projects',
    'project.empty': 'No active projects.',

    'stats.title': 'Vault Statistics',
    'stats.totalNotes': 'Total Notes',
    'stats.activeProjects': 'Active Projects',
    'stats.todayNew': 'Today New',
    'stats.pendingTriage': 'Inbox',

    'recent.title': 'Recent Activity',
    'recent.empty': 'No activity yet.',

    'nav.title': 'Three Pillars \u00B7 Nav',

    'inbox.title': 'Inbox ({count})',
    'inbox.more': '+{count} more...',

    'engine.title': 'Engine State',
    'engine.empty': 'No engine state data yet.',

    'weekly.title': 'Weekly Record Distribution',
    'weekly.empty': 'No daily records this week.',
    'weekly.barTooltip': '{date}: {count} items',

    'ai.title': 'AI Chat',
    'ai.placeholder': 'Ask about the KOS vault...',
    'ai.welcome': 'Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.',
    'ai.sendBtn': 'Send',
    'ai.clearBtn': 'Clear Chat',
    'ai.thinking': 'Thinking...',
    'ai.needConfig': 'No FLOWnote config detected and no manual API settings found. Configure AI Provider in FLOWnote, or fill in manually in Cockpit settings.',
    'ai.error': 'Request failed: {msg}',
    'ai.retry': 'Retry',
    'ai.copy': 'Copy',
    'ai.copied': 'Copied',
    'ai.modelLabel': 'Model',
    'ai.connected': 'Connected',
    'ai.notConfigured': 'Not configured',
    'ai.welcomeTitle': 'Ask KOS',
    'ai.suggestProjects': 'Project Overview',
    'ai.suggestProjectsDesc': 'View active project progress',
    'ai.suggestRecent': 'Recent Activity',
    'ai.suggestRecentDesc': 'Recently modified notes',
    'ai.suggestSearch': 'Search Vault',
    'ai.suggestSearchDesc': 'Find specific content',

    'ai.providerSection': 'AI Provider',
    'ai.providerSectionDesc': 'Configure API access for the AI chat. If FLOWnote has AI Provider configured (recommended), Cockpit will auto-detect it. Leave empty to disable.',
    'ai.apiEndpoint': 'API Endpoint',
    'ai.apiKey': 'API Key',
    'ai.model': 'Model Name',
    'ai.systemPrompt': 'System Prompt',
    'ai.systemPromptPlaceholder': 'You are a knowledge management assistant helping the user navigate their KOS vault.',

    'settings.general': 'General',
    'settings.language': 'Interface Language',
    'settings.languageDesc': 'Choose the display language for the dashboard.',
    'settings.langZhCN': '\u7B80\u4F53\u4E2D\u6587',
    'settings.langEn': 'English',
    'settings.langZhTW': '\u7E41\u9AD4\u4E2D\u6587',
    'settings.autoOpen': 'Auto-open on startup',
    'settings.autoOpenDesc': 'Automatically open the KOS Cockpit when Obsidian starts.',
    'settings.dashboard': 'Dashboard Sections',
    'settings.dashboardDesc': 'Toggle which sections appear on the cockpit dashboard.',
    'settings.dataLimits': 'Data Limits',
    'settings.maxRecent': 'Max recent items',
    'settings.maxRecentDesc': 'Number of recently modified files to show (max 20).',
    'settings.maxTasks': 'Max task items',
    'settings.maxTasksDesc': 'Number of daily-note tasks to show (max 20).',
    'settings.maxInbox': 'Max inbox items',
    'settings.maxInboxDesc': 'Number of inbox file names to show (max 20).',
    'settings.about': 'About',
    'settings.version': 'Version',
    'settings.versionDesc': 'KOS Cockpit v0.2.0 \u2014 A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem.',
  },

  'zh-tw': {
    'app.name': 'KOS Cockpit',
    'app.loading': '正在載入 KOS Cockpit...',
    'app.error': '載入儀表板時發生錯誤。',

    'header.dateFormat': 'YYYY-MM-DD',
    'header.noteStatus': '每日筆記 [{status}]',
    'header.noteCreated': '已建立',
    'header.noteNotCreated': '未建立',
    'header.todayFocus': '今日焦點: {focus}',
    'header.focusNotSet': '(未設定)',

    'day.sun': '日',
    'day.mon': '一',
    'day.tue': '二',
    'day.wed': '三',
    'day.thu': '四',
    'day.fri': '五',
    'day.sat': '六',

    'action.planToday': '規劃今天',
    'action.capture': '快速捕捉',
    'action.dayReview': '每日回顧',
    'action.newProject': '新建專案',
    'action.triage': 'Triage',
    'action.settings': '設定',
    'action.aiChat': 'AI Chat',

    'task.title': '今日任務',
    'task.progress': '{done}/{total} ({rate}%)',
    'task.none': '暫無任務。',
    'task.dailyMissing': '今日筆記未建立。點擊 [規劃今天] 建立。',

    'project.title': '活躍專案',
    'project.empty': '暫無活躍專案。',

    'stats.title': '知識庫統計',
    'stats.totalNotes': '總筆記',
    'stats.activeProjects': '活躍專案',
    'stats.todayNew': '今日新增',
    'stats.pendingTriage': '待分類',

    'recent.title': '最近活動',
    'recent.empty': '暫無活動。',

    'nav.title': '三支柱 · 導航',

    'inbox.title': 'Inbox ({count})',
    'inbox.more': '+{count} more...',

    'engine.title': '引擎狀態',
    'engine.empty': '暫無引擎狀態資料。',

    'weekly.title': '本週記錄分佈',
    'weekly.empty': '本週暫無日記記錄。',
    'weekly.barTooltip': '{date}: {count} 條',

    'ai.title': 'AI 對話',
    'ai.placeholder': '詢問 KOS 知識庫...',
    'ai.welcome': '你好！我是 KOS AI 助手。你可以問我關於知識庫、專案狀態或任何 KOS 相關的問題。',
    'ai.sendBtn': '發送',
    'ai.clearBtn': '清空對話',
    'ai.thinking': '思考中...',
    'ai.needConfig': '未偵測到 FLOWnote 配置，也未找到手動 API 設定。請在 FLOWnote 中配置 AI Provider，或在 Cockpit 設定中手動填寫。',
    'ai.error': '請求失敗: {msg}',
    'ai.retry': '重試',
    'ai.copy': '複製',
    'ai.copied': '已複製',
    'ai.modelLabel': '模型',
    'ai.connected': '已連接',
    'ai.notConfigured': '未配置',
    'ai.welcomeTitle': 'Ask KOS',
    'ai.suggestProjects': '專案概覽',
    'ai.suggestProjectsDesc': '查看活躍專案進度',
    'ai.suggestRecent': '近期活動',
    'ai.suggestRecentDesc': '最近修改的筆記',
    'ai.suggestSearch': '搜尋知識庫',
    'ai.suggestSearchDesc': '查找特定內容',

    'ai.providerSection': 'AI Provider',
    'ai.providerSectionDesc': '配置 AI 對話的 API 接入參數。若 FLOWnote 已配置 AI Provider（推薦），Cockpit 將自動讀取其設定。留空則聊天區不可用。',
    'ai.apiEndpoint': 'API Endpoint',
    'ai.apiKey': 'API Key',
    'ai.model': '模型名稱',
    'ai.systemPrompt': '系統提示詞',
    'ai.systemPromptPlaceholder': '你是一個知識管理助手，幫助用戶處理 KOS 知識庫。',

    'settings.general': '一般',
    'settings.language': '介面語言',
    'settings.languageDesc': '選擇儀表板的顯示語言。',
    'settings.langZhCN': '简体中文',
    'settings.langEn': 'English',
    'settings.langZhTW': '繁體中文',
    'settings.autoOpen': '啟動時自動開啟',
    'settings.autoOpenDesc': 'Obsidian 啟動時自動開啟 KOS Cockpit。',
    'settings.dashboard': '儀表板區塊',
    'settings.dashboardDesc': '控制儀表板上各區塊的顯示。',
    'settings.dataLimits': '資料限制',
    'settings.maxRecent': '最大最近活動數',
    'settings.maxRecentDesc': '顯示最近修改檔案的數量（最多 20）。',
    'settings.maxTasks': '最大任務數',
    'settings.maxTasksDesc': '顯示今日任務的數量（最多 20）。',
    'settings.maxInbox': '最大 Inbox 數',
    'settings.maxInboxDesc': '顯示 Inbox 檔名的數量（最多 20）。',
    'settings.about': '關於',
    'settings.version': '版本',
    'settings.versionDesc': 'KOS Cockpit v0.2.0 — KOS_LLM-Wiki 知識管理儀表板。KOS 生態的一部分。',
  },
};

/**
 * Translate a key using the current locale.
 * Supports {placeholder} substitution via the params object.
 */
function t(key, locale, params = {}) {
  const dict = LOCALES[locale] || LOCALES['zh-cn'];
  let text = dict[key];
  if (text === undefined) {
    text = LOCALES['zh-cn'][key];
  }
  if (text === undefined) {
    return key;
  }
  for (const [k, v] of Object.entries(params)) {
    text = String(text).replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
  }
  return text;
}

module.exports = { t, LOCALES, LOCALE_KEYS: Object.keys(LOCALES) };
