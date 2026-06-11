  _renderTopBar(container, data) {
    const bar = container.createEl('div', { cls: 'kos-topbar' });
    const brand = bar.createEl('div', { cls: 'kos-topbar-brand' });
    brand.createEl('span', { cls: 'kos-logo', text: 'KOS' });
    brand.createEl('small', { cls: 'kos-logo-sub', text: 'v2' });
    const score = calcHealthScore(data);
    const badgeCls = score >= 85 ? 'health-optimal' : score >= 65 ? 'health-warning' : 'health-critical';
    const badge = bar.createEl('div', { cls: 'kos-health-badge ' + badgeCls, attr: { title: 'Vault Health: ' + score + '%' } });
    badge.createEl('span', { cls: 'dot' });
    badge.createEl('span', { cls: 'health-text', text: score + '/100' });
    badge.addEventListener('click', () => { this._handleLaunch('init'); });
    bar.createEl('div', { cls: 'kos-topbar-spacer' });
    const searchWrap = bar.createEl('div', { cls: 'kos-topbar-search' });
    searchWrap.createEl('input', { cls: 'kos-topbar-search-input', attr: { type: 'text', placeholder: 'Search notes...' } });
    const actions = bar.createEl('div', { cls: 'kos-topbar-actions' });
    const refreshBtn = actions.createEl('button', { cls: 'kos-topbar-btn', text: '\u21BB', attr: { title: 'Refresh' } });
    refreshBtn.addEventListener('click', () => { this.renderLoading(); this.refresh(); });
    const clock = actions.createEl('div', { cls: 'kos-topbar-clock' });
    const now = moment();
    clock.createEl('span', { cls: 'kos-topbar-date', text: now.format('YYYY-MM-DD') });
    clock.createEl('span', { cls: 'kos-topbar-time', text: now.format('HH:mm') });
  }

