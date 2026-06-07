---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8:519.6
tags: [resource, llm, transformer, deep-learning]
aliases:
  - Transformer Architecture
---

# Transformer Architecture

> **Resource:** The cornerstone of modern LLMs — a detailed look at the Transformer architecture.
> UDC: 004.8:519.6 (AI + Computational Mathematics / Neural Networks)

---

## Core Innovation

The Transformer (Vaswani et al., 2017) centers on the **attention mechanism**, which replaces the recurrent structure of RNNs, enabling:

- **Parallel computation** — No longer sequential dependency
- **Long-range dependencies** — Any two positions can interact directly
- **Scalability** — Both depth and width can be stacked

## Basic Architecture

```
Input Sequence → [Token Embedding + Positional Encoding]
                      ↓
             [ Multi-Head Self-Attention ]
                      ↓
             [ Add & LayerNorm ]
                      ↓
             [ Feed Forward (MLP) ]
                      ↓
             [ Add & LayerNorm ]
                      ↓
                     ×N layers
                      ↓
             [Output: sequence representations]
```

### Key Components

| Component | Function |
|-----------|----------|
| Token Embedding | Converts text to vectors |
| Positional Encoding | Injects position information |
| Multi-Head Attention | Attends to different subspaces simultaneously |
| Feed-Forward Network | Non-linear transformation |
| LayerNorm | Stabilizes training |
| Residual Connection | Mitigates vanishing gradients |

## Attention Mechanism

```
Attention(Q, K, V) = softmax(Q × K^T / √d_k) × V
```

- **Q** (Query) — Current token's query vector
- **K** (Key) — Each token's key vector
- **V** (Value) — Each token's value vector
- **√d_k** — Scaling factor to prevent softmax saturation

## Variant Evolution

| Architecture | Representative | Features |
|-------------|---------------|----------|
| Encoder-only | BERT | Understanding tasks |
| Decoder-only | GPT series | Generation tasks |
| Encoder-Decoder | T5, BART | Sequence transformation |
| MoE | Mixtral 8x7B | Sparse activation |
| Mamba | Mamba | State-space model replacing attention |

## Related Notes

- [[en/03-Resources/LLM-Wiki/llm-fundamentals|LLM Fundamentals]]
- [[en/03-Resources/LLM-Wiki/training-and-fine-tuning|Training & Fine-tuning]]
