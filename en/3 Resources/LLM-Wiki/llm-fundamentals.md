---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8
tags: [resource, llm, ai, fundamental]
aliases:
  - Large Language Model
  - LLM Fundamentals
---

# LLM Fundamentals

> **Resource:** Core concepts and knowledge architecture of Large Language Models.

---

## What is an LLM?

A Large Language Model (LLM) is a neural network model trained on massive text data, capable of understanding and generating human language. Key characteristics:

- **Scale effect** — Parameter sizes range from billions to trillions
- **Emergent abilities** — Capabilities that appear only at scale, absent in smaller models
- **In-context learning** — Ability to perform new tasks via examples without fine-tuning

## Timeline

```
2017 — Transformer architecture proposed
2018 — BERT (Google), GPT-1 (OpenAI)
2019 — GPT-2 (1.5B parameters)
2020 — GPT-3 (175B parameters)
2022 — ChatGPT (conversational AI breakthrough)
2023 — GPT-4, Llama 2, Claude
2024+ — Multimodal, reasoning enhancement, open-source ecosystem
```

## Core Capabilities

| Capability | Description |
|------------|-------------|
| Text Generation | Dialogue, writing, code generation |
| Reasoning | Logical reasoning, math, analysis |
| Knowledge QA | Fact retrieval from training data |
| Translation | Multilingual translation |
| Summarization | Long text compression and extraction |
| Classification | Text categorization and sentiment analysis |
| Code | Programming, debugging, explanation |

## Key Model Families

| Family | Representative | Features |
|--------|---------------|----------|
| GPT | GPT-4, GPT-4o | Closed-source, comprehensive |
| Llama | Llama 2/3 | Open-source, active community |
| Claude | Claude 3/4 | Safety-focused, long context |
| Gemini | Gemini 1.5/2 | Multimodal, Google ecosystem |
| Qwen | Qwen 2/2.5 | Strong Chinese, Alibaba |
| DeepSeek | DeepSeek-V2/R1 | Reasoning-enhanced, cost-effective |

## Limitations & Challenges

- **Hallucination** — Generating false information
- **Knowledge cutoff** — Training data has a cutoff date
- **Context limits** — Finite information window
- **Computational cost** — High resource consumption
- **Alignment** — Value and safety concerns

## Related Notes

- [[en/03-Resources/LLM-Wiki/transformer-architecture|Transformer Architecture]]
- [[en/03-Resources/LLM-Wiki/training-and-fine-tuning|Training & Fine-tuning]]
- [[en/03-Resources/LLM-Wiki/prompt-engineering|Prompt Engineering]]
- [[en/03-Resources/LLM-Wiki/kos-and-llm|KOS & LLM]]
- [[en/02-Areas/llm-research|LLM Research]]
