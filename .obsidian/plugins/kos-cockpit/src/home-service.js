// KOS Cockpit 鈥?home data engine

const {
  parseFrontmatter,
  fmValue,
  formatDateStr,
  dailyNotePath,
  getFileByPath,
  readFileText,
  taskStatsFromContent,
  isSystemPath,
  normalizePath,
} = require('./utils');
const { listProjects, getEngineState } = require('./project-service');

/**
 * Get today's daily note state.
 */
async function getTodayState(app) {
  const dateStr = formatDateStr();
  const path = dailyNotePath(dateStr);
  const file = getFileByPath(app.vault, path);

  if (!file) {
    return { dateStr, path, exists: false, file: null, tasks: { open:0,done:0,total:0,completionRate:0 }, taskItems: [] };
  }

  const content = await readFileText(app.vault, file);
  const tasks = taskStatsFromContent(content);
  const lines = String(content || '').split(/\r?\n/);
  const taskItems = [];
  for (let i = 0; i < lines.length; i += 1) {
    const m = String(lines[i] || '').match(/^(\s*[-*]\s+\[)([ xX])(\]\s+)(.+)$/);
    if (!m) continue;
    const text = m[4].trim();
    if (!text) continue;
    taskItems.push({ lineIndex: i, text, done: /x/i.test(m[2]) });
    if (taskItems.length >= 12) break;
  }

  // Extract today's focus (first h2 or bold line under ## \u4ECA\u65E5\u805A\u7126)
  let focus = '';
  const focusMatch = content.match(/## \u4ECA\u65E5\u805A\u7126[^#]*?\n(- .+)/);
  if (focusMatch) focus = focusMatch[1].replace(/^- /, '').trim();

  return { dateStr, path, exists: true, file, tasks, taskItems, focus, content };
}

/**
 * Count files in 0 Inbox (excluding _processed/).
 * Returns TFile objects (with .path, .basename, .stat).
 */
function getInboxFiles(vault) {
  if (!vault || typeof vault.getMarkdownFiles !== 'function') return [];
  return vault.getMarkdownFiles().filter((f) => {
    const p = String(f.path || '');
    return p.startsWith('0 Inbox/') && !p.startsWith('0 Inbox/_processed/');
  });
}

/**
 * Scan vault and compute knowledge garden statistics.
 */
async function getDashboardStats(app) {
  if (!app || !app.vault || typeof app.vault.getMarkdownFiles !== 'function') {
    return { totalNotes: 0, todayNew: 0, stats: {} };
  }

  const files = app.vault.getMarkdownFiles();
  const today = formatDateStr();
  let todayNew = 0;
  const stats = { root:0, projects:0, areas:0, resources:0, inbox:0, periodic:0, system:0 };

  files.forEach((f) => {
    const p = String(f.path || '');
    if (p.startsWith('1 Projects/')) stats.projects += 1;
    else if (p.startsWith('2 Areas/')) stats.areas += 1;
    else if (p.startsWith('3 Resources/')) stats.resources += 1;
    else if (p.startsWith('0 Inbox/')) { if (!p.startsWith('0 Inbox/_processed/')) stats.inbox += 1; }
    else if (p.startsWith('Periodic/')) stats.periodic += 1;
    else if (p.startsWith('_') || p.startsWith('.')) stats.system += 1;
    else if (p.startsWith('4 Archives/')) {}
    else stats.root += 1;

    // Count today-new files
    const ctime = f.stat?.ctime ? new Date(f.stat.ctime) : null;
    if (ctime) {
      const cd = formatDateStr(ctime);
      if (cd === today) todayNew += 1;
    }
  });

  return { totalNotes: files.length, todayNew, stats };
}

/**
 * Get recent modified files (top 10).
 */
function getRecentActivity(vault) {
  if (!vault || typeof vault.getMarkdownFiles !== 'function') return [];
  return vault.getMarkdownFiles()
    .filter((f) => !isSystemPath(f.path))
    .sort((a, b) => (b.stat?.mtime || 0) - (a.stat?.mtime || 0))
    .slice(0, 24)
    .map((f) => ({ path: f.path, title: f.basename || '', mtime: f.stat?.mtime || 0 }));
}

/**
 * Get hot context from _meta/hot.md
 */
async function getHotContext(app) {
  if (!app || !app.vault) return [];
  const file = getFileByPath(app.vault, '_meta/hot.md');
  if (!file) return [];
  const content = await readFileText(app.vault, file);
  const entries = [];
  String(content || '').split(/\r?\n/).forEach((line) => {
    const m = line.match(/^(\d{4}-\d{2}-\d{2})\s*[\u2014\u2013\-]\s*(.+)$/);
    if (m) entries.push({ date: m[1], summary: m[2].trim() });
  });
  return entries.slice(0, 5);
}

/**
 * Scan the current week's daily notes for weekly record bar chart.
 * Returns 7 cells (Mon-Sun) with capture count per day.
 */
async function getWeeklyRecords(app) {
  if (!app || !app.vault) return [];

  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon ...
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
      // Count non-task, non-heading, non-empty lines as "captures"
      const lines = String(content || '').split(/\r?\n/);
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
    const weekdays = ['\u65E5','\u4E00','\u4E8C','\u4E09','\u56DB','\u4E94','\u516D'];
    cells.push({ date: ds, count, weekday: weekdays[i], isToday: ds === formatDateStr(now) });
  }
  return cells;
}

module.exports = {
  getTodayState,
  getInboxFiles,
  getDashboardStats,
  getRecentActivity,
  getHotContext,
  getWeeklyRecords,
  getEngineState,
  listProjects,
};
