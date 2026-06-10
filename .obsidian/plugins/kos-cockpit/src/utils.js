// KOS Cockpit — shared utilities

/**
 * Parse frontmatter from markdown content.
 * Returns {} if no valid frontmatter found.
 */
function parseFrontmatter(content) {
  const text = String(content || '');
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const out = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const item = String(line || '').trim();
    if (!item || item.startsWith('#')) return;
    const colon = item.indexOf(':');
    if (colon <= 0) return;
    const key = item.slice(0, colon).trim();
    let value = item.slice(colon + 1).trim();
    if (!key) return;
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((p) => p.trim()).filter(Boolean);
    }
    out[key] = value;
  });
  return out;
}

/**
 * Get frontmatter value by multiple possible key names.
 */
function fmValue(frontmatter, keys, fallback) {
  const fm = frontmatter && typeof frontmatter === 'object' ? frontmatter : {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(fm, key)) {
      const value = fm[key];
      if (Array.isArray(value)) return value.join(', ');
      const text = String(value ?? '').trim();
      if (text) return text;
    }
  }
  return fallback;
}

/**
 * Format date to YYYY-MM-DD string.
 */
function formatDateStr(date) {
  const d = date || new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Build the KOS daily note path for a given date.
 * KOS convention: Periodic/YYYY/MM/YYYY-MM-DD.md
 */
function dailyNotePath(dateStr) {
  const parts = dateStr.split('-');
  return `Periodic/${parts[0]}/${parts[1]}/${dateStr}.md`;
}

/**
 * Get file by path from vault, returning null if missing.
 */
function getFileByPath(vault, path) {
  try {
    return vault.getAbstractFileByPath(path);
  } catch {
    return null;
  }
}

/**
 * Safely read file text content.
 */
async function readFileText(vault, file) {
  if (!vault || !file) return '';
  try {
    if (typeof vault.cachedRead === 'function') return String(await vault.cachedRead(file) || '');
    if (typeof vault.read === 'function') return String(await vault.read(file) || '');
  } catch {
    return '';
  }
  return '';
}

/**
 * Extract task stats (open/done/total) from markdown content.
 */
function taskStatsFromContent(content) {
  const lines = String(content || '').split(/\r?\n/);
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
    completionRate: open + done > 0 ? Math.round((done / (open + done)) * 100) : 0,
  };
}

/**
 * Normalize and clean a file path.
 */
function normalizePath(path) {
  return String(path || '').replace(/\\/g, '/').replace(/\/+/g, '/').replace(/\/+$/, '');
}

/**
 * Check if a path is a system/internal path that should be excluded from stats.
 */
function isSystemPath(path) {
  const value = normalizePath(path);
  if (/(^|\/)\.[^/]+(\/|$)/.test(value)) return true;
  if (value.startsWith('_logs/')) return true;
  if (value.startsWith('_meta/')) return true;
  if (value.startsWith('0 Inbox/_processed/')) return true;
  if (value.startsWith('4 Archives/')) return true;
  if (value.startsWith('Periodic/')) return true;
  if (value.startsWith('node_modules/')) return true;
  return false;
}

module.exports = {
  parseFrontmatter,
  fmValue,
  formatDateStr,
  dailyNotePath,
  getFileByPath,
  readFileText,
  taskStatsFromContent,
  normalizePath,
  isSystemPath,
};
