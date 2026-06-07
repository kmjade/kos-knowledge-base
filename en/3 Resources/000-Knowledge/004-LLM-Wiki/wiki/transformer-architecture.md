---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# Transformer Architecture

> Source: Compiled from Transformer Architecture raw.

## Core Innovation

The Transformer (Vaswani et al., 2017) is built on the attention mechanism, replacing RNN recurrence to achieve:
- Parallel computation — No sequential dependency
- Long-range dependencies — Any two positions interact directly
- Scalability — Both depth and width can be stacked

## Key Components

### Attention Mechanism

- Q (Query) — Query vector for current token
- K (Key) — Key vector for each token
- V (Value) — Value vector for each token
- √d_k — Scaling factor to prevent softmax saturation

## Related Notes

- [[llm-fundamentals]]
- [[kos-and-llm]]
- [[prompt-engineering]]

## Reference

- Source: 3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer 架构.md
