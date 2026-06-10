// KOS Cockpit — Health service (composite score, maturity, link density)
// Phase 1: Lightweight version via home-service data

const { readFileText, getFileByPath } = require('./utils');

/**
 * Calculate composite system health score (0-100).
 * Weighted formula from v2 design doc:
 *   Inbox pressure × 0.25 + Compile backlog × 0.25 + Link density × 0.2 + Freshness × 0.15 + Maturity × 0.15
 */
function calcHealthScore(data) {
  // Inbox pressure (0-100): more files = lower score
  const inboxCount = (data.inboxFiles || []).length;
  const inboxScore = Math.max(0, 100 - inboxCount * 8);

  // Daily note exists → good
  const dailyScore = data.today?.exists ? 100 : 40;

  // Active project health
  const projectCount = (data.projects || []).length;
  const projectScore = Math.min(100, projectCount * 20);

  // Stats coverage
  const totalNotes = data.stats?.totalNotes || 0;
  const coverageScore = Math.min(100, Math.round(totalNotes / 10));

  // Freshness: any recent activity counts
  const recentCount = (data.recent || []).length;
  const freshnessScore = Math.min(100, recentCount * 10);

  const score = Math.round(
    inboxScore * 0.25 +
    dailyScore * 0.20 +
    projectScore * 0.20 +
    coverageScore * 0.15 +
    freshnessScore * 0.20
  );

  return Math.min(100, Math.max(0, score));
}

/**
 * Get trend direction vs baseline.
 * Returns 'up' | 'down' | 'flat'
 * Phase 1: based on inbox trend (today vs yesterday approximate)
 */
function getTrend(data) {
  const inboxCount = (data.inboxFiles || []).length;
  // Rough heuristic: if inbox < 5 → good, 5-10 → stable, >10 → bad
  if (inboxCount <= 3) return 'up';
  if (inboxCount <= 8) return 'flat';
  return 'down';
}

/**
 * Get key metrics for the metrics row.
 * Returns array of { label, value, trend, trendLabel, color? }
 */
function getKeyMetrics(data) {
  const totalNotes = data.stats?.totalNotes || 0;
  const inboxCount = (data.inboxFiles || []).length;
  const projectCount = (data.projects || []).length;
  const todayNew = data.stats?.todayNew || 0;
  const weekly = data.weekly || [];
  const weekTotal = weekly.reduce((s, c) => s + c.count, 0);

  return [
    {
      label: 'Total Notes',
      value: String(totalNotes),
      trend: todayNew > 0 ? 'up' : 'flat',
      trendLabel: '+' + todayNew + ' today',
      color: 'var(--kc-cyan)',
    },
    {
      label: 'Inbox',
      value: String(inboxCount),
      trend: inboxCount <= 5 ? 'up' : inboxCount <= 10 ? 'flat' : 'down',
      trendLabel: inboxCount <= 5 ? 'Healthy' : inboxCount + ' pending',
      color: inboxCount <= 5 ? 'var(--kc-green)' : inboxCount <= 10 ? 'var(--kc-amber)' : 'var(--kc-red)',
    },
    {
      label: 'Active Projects',
      value: String(projectCount),
      trend: projectCount >= 1 ? 'up' : 'flat',
      trendLabel: projectCount + ' in progress',
      color: 'var(--kc-amber)',
    },
    {
      label: 'Weekly Captures',
      value: String(weekTotal),
      trend: weekTotal >= 5 ? 'up' : weekTotal >= 2 ? 'flat' : 'down',
      trendLabel: Math.round(weekTotal / Math.max(1, weekly.length)) + '/day avg',
      color: 'var(--kc-purple)',
    },
  ];
}

/**
 * Get today capture count from weekly data.
 */
function getTodayCaptureCount(weekly) {
  if (!weekly || !Array.isArray(weekly)) return 0;
  const today = weekly.find((w) => w.isToday);
  return today ? today.count : 0;
}

/**
 * Calculate daily note streak (consecutive days with notes).
 * Phase 1: simple version from weekly data.
 */
function calcStreak(weekly) {
  if (!weekly || !Array.isArray(weekly)) return 0;
  let streak = 0;
  // Count from end (today) backwards
  for (let i = weekly.length - 1; i >= 0; i--) {
    if (weekly[i].count > 0) streak += 1;
    else break;
  }
  return streak;
}

module.exports = {
  calcHealthScore,
  getTrend,
  getKeyMetrics,
  getTodayCaptureCount,
  calcStreak,
};
