---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
tags: [resource, llm]
---

# Transformer Architecture Deep Dive

> Source: Compiled from Transformer Architecture Deep Dive raw.

## Core Concepts

Transformer is a deep learning architecture proposed by Google in 2017, with self-attention as its core innovation.

### Main Components

### Multi-Head Attention
Multi-Head Attention allows the model to attend to different representation subspaces simultaneously.
### Feed-Forward Network
Each Transformer Block contains two feed-forward layers with ReLU activation.
### Positional Encoding
Since self-attention lacks position awareness, sinusoidal positional encodings inject position information.

### Key Advantages

- Parallel computation: Unlike RNN sequential processing, Transformers train in parallel
- Long-range dependencies: Self-attention directly models interactions at any distance
- Scalability: Increasing layers and heads significantly boosts capability

## Related Notes

- [[llm-fundamentals]]
- [[kos-and-llm]]
- [[prompt-engineering]]

## Reference

- Source: 3 Resources\000-Knowledge\004-LLM-Wiki\raw\Transformer-架构解读.md
