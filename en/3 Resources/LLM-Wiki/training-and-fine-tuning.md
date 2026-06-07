---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8:681.3
tags: [resource, llm, training, fine-tuning]
aliases:
  - Training & Fine-tuning
---

# Training & Fine-tuning

> **Resource:** LLM training pipeline and fine-tuning methods.
> UDC: 004.8:681.3 (AI + Computer Systems / Training Infrastructure)

---

## Three Training Stages

```
Pre-training
    ↓
Supervised Fine-tuning (SFT / Instruction Tuning)
    ↓
Reinforcement Learning Alignment (RLHF / DPO)
```

### 1. Pre-training
- **Objective** — Next token prediction (autoregressive)
- **Data** — TB-scale internet text, books, code
- **Compute** — Thousands of GPUs training for weeks to months
- **Output** — Base model (language capable, not aligned)

### 2. Supervised Fine-tuning (SFT)
- **Objective** — Instruction following and dialogue
- **Data** — Human-annotated instruction-response pairs
- **Method** — Full parameter fine-tuning or LoRA/QLoRA

### 3. Alignment
- **RLHF** — Reinforcement Learning from Human Feedback
  - Train reward model → PPO optimization
- **DPO** — Direct Preference Optimization (simpler, no reward model)

## Fine-tuning Method Comparison

| Method | Parameters | Memory | Effect | Use Case |
|--------|------------|--------|--------|----------|
| Full Fine-tune | All | Very high | Best | Sufficient resources |
| LoRA | 0.1-1% | Low | Good | Task adaptation |
| QLoRA | 0.1-1% | Very low | Good | Single GPU tuning |
| Adapter | Small | Low | Moderate | Lightweight adaptation |

## Key Concepts

| Concept | Description |
|---------|-------------|
| Epoch | One complete pass through the dataset |
| Batch Size | Number of samples per update |
| Learning Rate | Update step size |
| Gradient Accumulation | Accumulate gradients over multiple batches |
| Warmup | Gradually increase learning rate |
| Cosine Schedule | Cosine decay learning rate strategy |

## Related Notes

- [[en/3 Resources/LLM-Wiki/llm-fundamentals|LLM Fundamentals]]
- [[en/3 Resources/LLM-Wiki/transformer-architecture|Transformer Architecture]]

## Core Content

Training and fine-tuning are the processes by which LLMs learn and specialize.

**Training Stages:**
1. **Pre-training:** Learning from large-scale unlabeled data (next token prediction)
2. **Supervised Fine-Tuning (SFT):** Training on labeled examples for specific tasks
3. **Reinforcement Learning from Human Feedback (RLHF):** Aligning with human preferences

**Fine-Tuning Approaches:**
- **Full Fine-Tuning:** Updating all model parameters
- **LoRA (Low-Rank Adaptation):** Training small adapter modules
- **Adapter Layers:** Inserting small trainable layers between frozen layers
- **Prompt Tuning:** Learning soft prompts without updating model weights

**Key Considerations:**
- Fine-tuning requires high-quality, task-specific data
- Catastrophic forgetting — model may lose general capabilities
- Compute cost varies significantly by approach
- Data privacy implications of custom fine-tuning
