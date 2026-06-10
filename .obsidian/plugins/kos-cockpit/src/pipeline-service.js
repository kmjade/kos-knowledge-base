// KOS Cockpit — Pipeline service (inbox detail, compile queue, quarantine, throughput)
// Phase 1: Lightweight scanning from vault

const { readFileText, parseFrontmatter, formatDateStr } = require('./utils');
const { getInboxFiles } = require('./home-service');

/**
 * Get inbox files with enriched metadata (source, tags, days waiting).
 */
async function getInboxDetail(app) {
  const files = getInboxFiles(app.vault);
  const items = [];

  for (const file of files) {
    const content = await readFileText(app.vault, file);
    const fm = parseFrontmatter(content);

    // Estimate source from filename or content
    let source = 'manual';
    if (fm.origin === 'webclipper' || content.includes('origin: webclipper')) source = 'clipping';

    // Tags
    const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);

    // Days waiting
    const created = fm.created || file.stat?.ctime;
    let daysWaiting = 0;
    if (created) {
      const createdDate = new Date(created);
      daysWaiting = Math.floor((Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    // First meaningful line as summary
    const lines = String(content || '').split(/\r?\n/)
      .filter((l) => {
        const t = l.trim();
        return t && !t.startsWith('---') && !t.startsWith('#') && !t.startsWith('created:') && !t.startsWith('tags:') && !t.startsWith('udc:');
      });
    const summary = lines[0]?.slice(0, 80) || '(empty)';

    items.push({
      file,
      path: file.path,
      title: file.basename || '',
      source,
      tags,
      daysWaiting,
      summary,
      created: fm.created || '',
      mtime: file.stat?.mtime || 0,
    });
  }

  // Sort: most recent first
  items.sort((a, b) => b.mtime - a.mtime);
  return items;
}

/**
 * Scan raw/ directories for files pending compilation.
 */
async function getCompileQueue(app) {
  if (!app || !app.vault) return [];
  const files = app.vault.getMarkdownFiles();

  const rawFiles = files.filter((f) => {
    const p = String(f.path || '');
    return p.includes('/raw/') && !p.includes('/wiki/') && !p.includes('/_archived/');
  });

  const items = [];
  for (const file of rawFiles.slice(0, 30)) {
    const content = await readFileText(app.vault, file);
    const lines = String(content || '').split(/\r?\n/);
    const wordCount = lines.reduce((s, l) => s + l.trim().split(/\s+/).filter(Boolean).length, 0);

    // Days since created
    const created = file.stat?.ctime || 0;
    const daysWaiting = created ? Math.floor((Date.now() - created) / (1000 * 60 * 60 * 24)) : 0;

    items.push({
      file,
      path: file.path,
      title: file.basename || '',
      daysWaiting,
      wordCount,
      priority: wordCount > 2000 ? 'high' : wordCount > 500 ? 'medium' : 'low',
    });
  }

  items.sort((a, b) => b.wordCount - a.wordCount);
  return items;
}

/**
 * Get quarantine stats (Phase 1: simple heuristic from inbox).
 */
function getQuarantineStats(inboxItems) {
  const total = inboxItems.length;
  const withoutFm = inboxItems.filter((i) => !i.created).length;
  return {
    L0: { label: 'Missing metadata', count: withoutFm, items: [] },
    L1: { label: 'Low confidence', count: Math.round(total * 0.1), items: [] },
    L2: { label: 'Possible duplicates', count: 0, items: [] },
    L3: { label: 'Too short (<50w)', count: inboxItems.filter((i) => i.summary === '(empty)').length, items: [] },
  };
}

/**
 * Throughput data: daily counts from weekly records.
 */
function getThroughputStats(weekly) {
  if (!weekly || !Array.isArray(weekly)) return { daily: [], total: 0, avg: 0 };
  const total = weekly.reduce((s, c) => s + c.count, 0);
  return {
    daily: weekly,
    total,
    avg: Math.round(total / Math.max(1, weekly.length) * 10) / 10,
  };
}

module.exports = {
  getInboxDetail,
  getCompileQueue,
  getQuarantineStats,
  getThroughputStats,
};
