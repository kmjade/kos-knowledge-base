// KOS Cockpit — AI Chat Service
// FLOWnote-compatible provider resolution + OpenAI-compatible streaming client.

/** Default system prompt for KOS context */
const DEFAULT_SYSTEM_PROMPT = 'You are a knowledge management assistant helping the user navigate their KOS vault. Respond concisely in the user\'s language.';

/**
 * FLOWnote provider presets (mirrors FLOWnote's built-in providers).
 * Key = providerId used in FLOWnote's data.json -> agentProvider.direct.providerId
 */
const FLOWNOTE_PROVIDERS = {
  'deepseek': {
    baseUrl: 'https://api.deepseek.com/v1',
    label: 'DeepSeek',
  },
  'openai-official': {
    baseUrl: 'https://api.openai.com/v1',
    label: 'OpenAI',
  },
  'openai-compat-custom': {
    baseUrl: '', // user-configured
    label: 'OpenAI Compatible',
  },
  'claude': {
    baseUrl: 'https://api.anthropic.com/v1',
    label: 'Anthropic Claude',
  },
  'gemini': {
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
    label: 'Google Gemini',
  },
  'siliconflow': {
    baseUrl: 'https://api.siliconflow.cn/v1',
    label: 'SiliconFlow',
  },
  'groq': {
    baseUrl: 'https://api.groq.com/openai/v1',
    label: 'Groq',
  },
  'together': {
    baseUrl: 'https://api.together.xyz/v1',
    label: 'Together AI',
  },
};

// ────────────────────────────────────────────
// Resolver: read FLOWnote's provider config
// ────────────────────────────────────────────

/**
 * Try to load FLOWnote's agent provider configuration from its data.json.
 * Returns null if FLOWnote is not installed or not configured.
 *
 * @param {{ adapter: { read: (path) => Promise<string> } }} vaultAdapter
 */
async function resolveFlownoteProvider(vaultAdapter) {
  if (!vaultAdapter || typeof vaultAdapter.read !== 'function') return null;

  try {
    const raw = await vaultAdapter.read('.obsidian/plugins/flownote/data.json');
    const config = JSON.parse(raw);
    const ap = config && config.settings && config.settings.agentProvider;
    if (!ap || !ap.enabled) return null;

    const direct = ap.direct || ap[ap.mode];
    if (!direct) return null;

    const providerId = direct.providerId;
    const preset = FLOWNOTE_PROVIDERS[providerId];
    if (!preset) return null;

    const apiKeys = direct.apiKeys || {};
    const apiKey = apiKeys[providerId];
    if (!apiKey) return null;

    const model = direct.model || preset.defaultModel || '';
    const baseUrl = direct.baseUrlOverride || preset.baseUrl;
    if (!baseUrl && providerId !== 'openai-compat-custom') return null;

    // For openai-compat-custom, we need the user's manual config
    if (providerId === 'openai-compat-custom' && !baseUrl) return null;

    return {
      providerId,
      apiKey,
      model,
      baseUrl,
      label: preset.label,
    };
  } catch {
    return null;
  }
}

// ────────────────────────────────────────────
// AIChat class
// ────────────────────────────────────────────

class AIChat {
  /**
   * @param {object} settings - Resolved provider settings (from resolveFlownoteProvider or manual)
   * @param {string} settings.locale
   * @param {string} settings.baseUrl
   * @param {string} settings.apiKey
   * @param {string} settings.model
   * @param {string} [settings.systemPrompt]
   */
  constructor(settings) {
    this.settings = settings || {};
    this.messages = [];
    this.abortController = null;
    this._addWelcome();
  }

  get _locale() {
    return (this.settings && this.settings.locale) || 'zh-cn';
  }

  get isConfigured() {
    const s = this.settings || {};
    return !!(s.baseUrl && s.apiKey && s.model);
  }

  /** Provider label for display */
  get providerLabel() {
    const s = this.settings || {};
    return s.providerLabel || s.baseUrl || 'Unknown';
  }

  clear() {
    this.messages = [];
    this._addWelcome();
  }

  getHistory() {
    return this.messages.slice();
  }

  /**
   * Send a user message and stream the assistant response.
   */
  sendMessage(content, callbacks = {}) {
    const { onToken, onDone, onError } = callbacks;
    const s = this.settings || {};

    if (!this.isConfigured) {
      if (onError) onError(new Error('AI not configured'));
      return null;
    }

    const userMsg = { role: 'user', content: String(content).trim() };
    this.messages.push(userMsg);

    const systemPrompt = (s.systemPrompt || '').trim() || DEFAULT_SYSTEM_PROMPT;
    // Build payload — include system prompt from settings only, not from history
    const payload = {
      model: s.model,
      messages: [
        { role: 'system', content: systemPrompt },
        ...this.messages.filter((m) => m.role !== 'system'),
      ],
    };

    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    let fullResponse = '';

    this._doStreamRequest(s.baseUrl, s.apiKey, payload, signal, {
      onToken: (text) => {
        fullResponse += text;
        if (onToken) onToken(text);
      },
      onDone: () => {
        if (fullResponse) {
          this.messages.push({ role: 'assistant', content: fullResponse });
        }
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
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  // ── Private ──

  _addWelcome() {
    const locale = this._locale;
    const welcomes = {
      'zh-cn': '你好！我是 KOS AI 助手。你可以问我关于知识库、项目状态或任何 KOS 相关的问题。',
      'en': 'Hello! I am the KOS AI assistant. Ask me about the knowledge base, project status, or anything KOS-related.',
      'zh-tw': '你好！我是 KOS AI 助手。你可以問我關於知識庫、專案狀態或任何 KOS 相關的問題。',
    };
    this.messages.push({
      role: 'assistant',
      content: welcomes[locale] || welcomes['zh-cn'],
    });
  }

  async _doStreamRequest(baseUrl, apiKey, payload, signal, callbacks) {
    const { onToken, onDone, onError } = callbacks;

    // Build the full URL
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

      // Flush remaining buffer
      if (buffer.trim()) {
        const trimmed = buffer.trim();
        if (trimmed.startsWith('data: ') && trimmed !== 'data: [DONE]') {
          try {
            const json = JSON.parse(trimmed.slice(6));
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

module.exports = { AIChat, resolveFlownoteProvider, FLOWNOTE_PROVIDERS, DEFAULT_SYSTEM_PROMPT };
