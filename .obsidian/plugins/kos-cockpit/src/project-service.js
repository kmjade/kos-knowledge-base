// KOS Cockpit — project scanning service

const { parseFrontmatter, fmValue, readFileText, taskStatsFromContent } = require('./utils');

/**
 * Scan 1 Projects/ directories and build a list of project overview files.
 */
function findProjectFiles(vault) {
  if (!vault || typeof vault.getMarkdownFiles !== 'function') return [];
  const files = vault.getMarkdownFiles();
  return files.filter((file) => {
    const path = String(file.path || '');
    // Match: 1 Projects/<project-dir>/<project-name>.md
    // Exclude: 项目总览.md, README.md
    if (!path.startsWith('1 Projects/')) return false;
    if (path.split('/').length !== 3) return false;
    if (path.endsWith('README.md')) return false;
    if (path.endsWith('\uD83D\uDCCD \u9879\u76EE\u603B\u89C8.md')) return false;
    return true;
  });
}

/**
 * Parse project metadata from a file's content and Obsidian metadata cache.
 */
function parseProject(file, content, metadataCache) {
  const fm = {
    ...parseFrontmatter(content),
  };

  // Try to get richer frontmatter from metadata cache
  try {
    const cache = metadataCache && typeof metadataCache.getFileCache === 'function'
      ? metadataCache.getFileCache(file)
      : null;
    if (cache && cache.frontmatter) {
      Object.assign(fm, cache.frontmatter);
    }
  } catch {}

  const status = fmValue(fm, ['status', 'Status'], 'active');
  const priority = fmValue(fm, ['priority', 'Priority'], '');
  const iteration = fmValue(fm, ['iteration', 'Iteration'], '');
  const area = fmValue(fm, ['area', 'Area', 'domain', 'Domain'], '');
  const tags = Array.isArray(fm.tags) ? fm.tags : [];

  // Compute task progress from the project file content
  const tasks = taskStatsFromContent(content);

  // Get project title from first h1 or directory name
  const heading = String(content || '').match(/^#\s+(.+)$/m);
  const title = heading ? heading[1].trim() : file.basename || '';

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
    ctime: file.stat?.ctime || 0,
  };
}

/**
 * List all projects, with optional filtering.
 * @param {boolean} options.activeOnly — only return active projects
 */
async function listProjects(app, options = {}) {
  if (!app || !app.vault) return [];
  const files = findProjectFiles(app.vault);
  const projects = [];

  for (const file of files) {
    const content = await readFileText(app.vault, file);
    const project = parseProject(file, content, app.metadataCache);
    projects.push(project);
  }

  // Sort: active first, then by priority, then by mtime
  projects.sort((a, b) => {
    const aActive = a.status === 'active';
    const bActive = b.status === 'active';
    if (aActive !== bActive) return aActive ? -1 : 1;

    const rank = (p) => {
      const v = String(p || '').toLowerCase();
      if (v === 'p1' || v === 'high') return 0;
      if (v === 'p2' || v === 'medium') return 1;
      if (v === 'p3' || v === 'low') return 2;
      return 3;
    };
    const byPriority = rank(a.priority) - rank(b.priority);
    if (byPriority !== 0) return byPriority;
    return b.mtime - a.mtime;
  });

  if (options.activeOnly) {
    return projects.filter((p) => p.status === 'active');
  }
  return projects;
}

/**
 * Get engine state from _meta/ai/memory/STATE.md (bullet-list format).
 */
async function getEngineState(app) {
  const defaultState = {
    triage: { lastRun: null, status: 'pending', summary: null },
    compile: { lastRun: null, status: 'pending', summary: null },
    link: { lastRun: null, status: 'pending', summary: null },
    daily: { lastRun: null, status: 'pending', summary: null },
    project: { lastRun: null, status: 'pending', summary: null },
    archive: { lastRun: null, status: 'pending', summary: null },
    canvas: { lastRun: null, status: 'pending', summary: null },
    'kos-init': { lastRun: null, status: 'pending', summary: null },
    life: { lastRun: null, status: 'pending', summary: null },
  };

  if (!app || !app.vault) return defaultState;

  const file = app.vault.getAbstractFileByPath('_meta/ai/memory/STATE.md');
  if (!file) return defaultState;

  const content = await readFileText(app.vault, file);

  // STATE.md uses section-based bullet format:
  // ## triage
  // - last_run: 2026-06-09
  // - pending: 0
  // - summary: Inbox cleared
  const engines = Object.keys(defaultState);
  const parsed = {};
  let currentEngine = null;

  String(content || '').split(/\r?\n/).forEach((line) => {
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

  // Normalize to { lastRun, status, summary } for cockpit consumption
  const state = {};
  engines.forEach((e) => {
    const raw = parsed[e] || {};
    state[e] = {
      lastRun: raw.last_run || raw.last_daily || null,
      status: raw.pending !== undefined
        ? (Number(raw.pending) === 0 ? 'done' : 'pending')
        : 'pending',
      summary: raw.summary || null,
    };
  });

  return state;
}

module.exports = {
  findProjectFiles,
  parseProject,
  listProjects,
  getEngineState,
};
