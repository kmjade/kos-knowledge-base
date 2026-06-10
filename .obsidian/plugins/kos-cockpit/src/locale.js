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

    // Day names (short, single character)
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
    'ai.placeholder': '在此处嵌入 AI 对话视图。目前使用命令面板或侧栏进行 AI 交互。',
    'ai.inputPlaceholder': '输入命令或问题……',
    'ai.send': '发送',

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

    'nav.title': 'Three Pillars · Nav',

    'inbox.title': 'Inbox ({count})',
    'inbox.more': '+{count} more...',

    'engine.title': 'Engine State',
    'engine.empty': 'No engine state data yet.',

    'weekly.title': 'Weekly Record Distribution',
    'weekly.empty': 'No daily records this week.',
    'weekly.barTooltip': '{date}: {count} items',

    'ai.title': 'AI Chat',
    'ai.placeholder': 'AI chat view can be embedded here. Currently use the command palette or sidebar for AI interaction.',
    'ai.inputPlaceholder': 'Enter command or question...',
    'ai.send': 'Send',

    'settings.general': 'General',
    'settings.language': 'Interface Language',
    'settings.languageDesc': 'Choose the display language for the dashboard.',
    'settings.langZhCN': '简体中文',
    'settings.langEn': 'English',
    'settings.langZhTW': '繁體中文',
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
    'settings.versionDesc': 'KOS Cockpit v0.2.0 — A knowledge management dashboard for the KOS_LLM-Wiki vault. Part of the KOS ecosystem.',
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
    'ai.placeholder': '在此處嵌入 AI 對話檢視。目前使用命令面板或側欄進行 AI 互動。',
    'ai.inputPlaceholder': '輸入命令或問題……',
    'ai.send': '發送',

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
    // Fallback: try zh-cn
    text = LOCALES['zh-cn'][key];
  }
  if (text === undefined) {
    return key; // last resort: show the key itself
  }
  // Replace {placeholders}
  for (const [k, v] of Object.entries(params)) {
    text = String(text).replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
  }
  return text;
}

module.exports = { t, LOCALES, LOCALE_KEYS: Object.keys(LOCALES) };
