// KOS Cockpit — AI Chat Service
// Provider-based chat with FLOWnote fallback.

const DEFAULT_SYSTEM_PROMPT = 'You are a knowledge management assistant helping the user navigate their KOS vault. Respond concisely in the user\'s language.';

/**
 * Resolve active provider config from Cockpit settings.
 * Falls back to FLOWnote auto-detect if no provider has apiKey.
 */
async function resolveProviderConfig(settings, vaultAdapter) {
  if (!settings) return null;

  const pid = settings.activeProvider || 'claude';
  const provider = settings.providers && settings.providers[pid];

  // If the selected provider has an API key, use it
  if (provider && provider.apiKey && provider.endpoint && provider.model) {
    return {
      providerId: pid,
      apiKey: provider.apiKey,
      model: provider.model,
      baseUrl: provider.endpoint,
      systemPrompt: provider.systemPrompt || '',
      label: provider.label || pid,
    };
  }

  // Fallback: try any provider that has an API key
  const providerIds = ['claude', 'codex', 'opencode'];
  for (const id of providerIds) {
    const p = settings.providers && settings.providers[id];
    if (p && p.apiKey && p.endpoint && p.model) {
      return {
        providerId: id,
        apiKey: p.apiKey,
        model: p.model,
        baseUrl: p.endpoint,
        systemPrompt: p.systemPrompt || '',
        label: p.label || id,
      };
    }
  }

  // Last fallback: FLOWnote auto-detect
  if (vaultAdapter && typeof vaultAdapter.read === 'function') {
    try {
      const raw = await vaultAdapter.read('.obsidian/plugins/flownote/data.json');
      const config = JSON.parse(raw);
      const ap = config && config.settings && config.settings.agentProvider;
      if (ap && ap.enabled) {
        const direct = ap.direct || ap[ap.mode];
        if (direct) {
          const providerId = direct.providerId;
          const apiKeys = direct.apiKeys || {};
          const apiKey = apiKeys[providerId];
          const model = direct.model || '';
          if (apiKey && model) {
            return {
              providerId,
              apiKey,
              model,
              baseUrl: direct.baseUrlOverride || 'https://api.deepseek.com/v1',
              systemPrompt: '',
              label: 'FLOWnote: ' + providerId,
            };
          }
        }
      }
    } catch {}
  }

  return null;
}

// ────────────────────────────────────────────
// AIChat class
// ────────────────────────────────────────────

class AIChat {
  constructor(cfg) {
    this.cfg = cfg || {};
    this.messages = [];
    this.abortController = null;
    this._addWelcome();
  }

  get _locale() { return (this.cfg && this.cfg.locale) || 'zh-cn'; }

  get isConfigured() {
    const c = this.cfg || {};
    return !!(c.baseUrl && c.apiKey && c.model);
  }

  get providerLabel() {
    const c = this.cfg || {};
    return c.label || c.baseUrl || 'Unknown';
  }

  clear() {
    this.messages = [];
    this._addWelcome();
  }

  getHistory() { return this.messages.slice(); }

  sendMessage(content, callbacks = {}) {
    const { onToken, onDone, onError } = callbacks;
    const c = this.cfg || {};

    if (!this.isConfigured) {
      if (onError) onError(new Error('AI not configured'));
      return null;
    }

    this.messages.push({ role: 'user', content: String(content).trim() });

    const systemPrompt = (c.systemPrompt || '').trim() || DEFAULT_SYSTEM_PROMPT;
    const payload = {
      model: c.model,
      messages: [
        { role: 'system', content: systemPrompt },
        ...this.messages.filter((m) => m.role !== 'system'),
      ],
    };

    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    let fullResponse = '';

    this._doStreamRequest(c.baseUrl, c.apiKey, payload, signal, {
      onToken: (token) => {
        fullResponse += token;
        if (onToken) onToken(token);
      },
      onDone: () => {
        if (fullResponse) this.messages.push({ role: 'assistant', content: fullResponse });
        this.abortController = null;
        if (onDone) onDone(fullResponse);
      },
      onError: (err) => {
        this.abortController = null;
        if (onError) onError(err);
      },
    });

    return signal;
  }

  abort() {
    if (this.abortController) { this.abortController.abort(); this.abortController = null; }
  }

  // ── Private ──

  _addWelcome() {
    const locale = this._locale;
    const welcomes = {
      'zh-cn': '你好！我是 KOS AI 助手。你可以问我关于知识库、项目状态或任何 KOS 相关的问题。',
      'en': 'Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.',
      'zh-tw': '你好！我是 KOS AI 助手。你可以問我關於知識庫、專案狀態或任何 KOS 相關的問題。',
    };
    this.messages.push({ role: 'assistant', content: welcomes[locale] || welcomes['zh-cn'] });
  }

  async _doStreamRequest(baseUrl, apiKey, payload, signal, callbacks) {
    const { onToken, onDone, onError } = callbacks;

    let endpoint = String(baseUrl || '').trim();
    if (!endpoint) endpoint = 'https://api.openai.com/v1';
    if (!/\/chat\/completions$/i.test(endpoint)) {
      endpoint = endpoint.replace(/\/+$/, '') + '/chat/completions';
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(apiKey || '').trim(),
        },
        body: JSON.stringify({ ...payload, stream: true }),
        signal,
      });

      if (!response.ok) {
        let errBody = '';
        try { errBody = await response.text(); } catch {}
        const errMsg = 'HTTP ' + response.status + (errBody ? ': ' + errBody.slice(0, 200) : '');
        if (onError) onError(new Error(errMsg));
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;
          if (!trimmed.startsWith('data: ')) continue;
          try {
            const json = JSON.parse(trimmed.slice(6));
            const delta = json.choices && json.choices[0] && json.choices[0].delta;
            const content = delta && delta.content;
            if (content && onToken) onToken(content);
          } catch {}
        }
      }

      if (buffer.trim()) {
        const t = buffer.trim();
        if (t.startsWith('data: ') && t !== 'data: [DONE]') {
          try {
            const json = JSON.parse(t.slice(6));
            const delta = json.choices && json.choices[0] && json.choices[0].delta;
            const content = delta && delta.content;
            if (content && onToken) onToken(content);
          } catch {}
        }
      }

      if (onDone) onDone();
    } catch (err) {
      if (err.name === 'AbortError') return;
      if (onError) onError(err);
    }
  }
}

module.exports = { AIChat, resolveProviderConfig, DEFAULT_SYSTEM_PROMPT };
