// KOS Cockpit — AI Chat Service
// OpenAI-compatible /chat/completions client with AbortController support.

/** Default system prompt for KOS context */
const DEFAULT_SYSTEM_PROMPT = 'You are a knowledge management assistant helping the user navigate their KOS vault. Respond concisely in the user\'s language.';

class AIChat {
  constructor(settings) {
    this.settings = settings;
    this.messages = [];
    this.abortController = null;
    this._addWelcome();
  }

  /** Current locale from settings */
  get _locale() {
    return (this.settings && this.settings.locale) || 'zh-cn';
  }

  /** Check if API configuration is present */
  get isConfigured() {
    const s = this.settings || {};
    return !!(s.aiEndpoint && s.aiApiKey && s.aiModel);
  }

  /** Reset conversation */
  clear() {
    this.messages = [];
    this._addWelcome();
  }

  /** Expose message history (read-only copy) */
  getHistory() {
    return this.messages.slice();
  }

  /**
   * Send a user message and stream the assistant response.
   * @param {string} content - User message text
   * @param {object} callbacks - { onToken(text), onDone(fullText), onError(err) }
   * @returns {AbortSignal} - signal to abort the request
   */
  sendMessage(content, callbacks = {}) {
    const { onToken, onDone, onError } = callbacks;
    const s = this.settings || {};

    if (!this.isConfigured) {
      if (onError) onError(new Error('AI not configured'));
      return null;
    }

    // Add user message
    const userMsg = { role: 'user', content: String(content).trim() };
    this.messages.push(userMsg);

    // Build payload
    const systemPrompt = (s.aiSystemPrompt || '').trim() || DEFAULT_SYSTEM_PROMPT;
    const payload = {
      model: s.aiModel,
      messages: [
        { role: 'system', content: systemPrompt },
        ...this.messages.filter((m) => m.role !== 'system'),
      ],
    };

    // Create abort controller
    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    // Accumulator for the assistant response
    let fullResponse = '';

    // Start the request
    this._doStreamRequest(s.aiEndpoint, s.aiApiKey, payload, signal, {
      onToken(text) {
        fullResponse += text;
        if (onToken) onToken(text);
      },
      onDone() {
        if (fullResponse) {
          this.messages.push({ role: 'assistant', content: fullResponse });
        }
        this.abortController = null;
        if (onDone) onDone(fullResponse);
      },
      onError(err) {
        this.abortController = null;
        if (onError) onError(err);
      },
    });

    return signal;
  }

  /** Abort an in-flight request */
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

  /**
   * Stream a chat completion request via fetch + ReadableStream.
   */
  async _doStreamRequest(endpoint, apiKey, payload, signal, callbacks) {
    const { onToken, onDone, onError } = callbacks;

    // Determine full URL
    let url = String(endpoint || '').trim();
    if (!url) url = 'https://api.openai.com/v1';
    // Append /chat/completions if not already in path
    if (!/\/chat\/completions$/i.test(url)) {
      url = url.replace(/\/+$/, '') + '/chat/completions';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(apiKey || '').trim(),
        },
        body: JSON.stringify({
          ...payload,
          stream: true,
        }),
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
            if (content) {
              if (onToken) onToken(content);
            }
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
      if (err.name === 'AbortError') {
        // Aborted by user, not an error
        return;
      }
      if (onError) onError(err);
    }
  }
}

module.exports = { AIChat, DEFAULT_SYSTEM_PROMPT };
