---
created: 2026-06-06
updated: 2026-06-06
udc: 004.8:159.9
tags: [resource, llm, prompting, prompt-engineering]
aliases:
  - Prompt Engineering
---

# Prompt Engineering

> **Resource:** Methodology and practice for effective LLM interaction.
> UDC: 004.8:159.9 (AI + Cognitive Psychology)

---

## What is Prompt Engineering?

Prompt Engineering is the practice of designing input text (prompts) to guide LLMs toward desired outputs. It is currently the primary technical means of interacting with LLMs.

## Core Framework

### CO-STAR Framework
| Element | Description |
|---------|-------------|
| **C**ontext | Provide background information |
| **O**bjective | Define the task goal |
| **S**tyle | Specify output style |
| **T**one | Set the tone |
| **A**udience | Define target audience |
| **R**esponse | Specify output format |

### Prompt Elements
```
[Role Definition]   → You are a senior Python developer
[Context]           → We are building a data analysis pipeline
[Task]              → Explain how to use pandas for data cleaning
[Output Format]     → Code examples with text explanations
[Constraints]       → Within 300 words
[Examples]          → As shown below: ...
```

## Common Techniques

| Technique | Description | Use Case |
|-----------|-------------|----------|
| Zero-shot | Direct instruction | Simple tasks |
| Few-shot | Provide examples | Format/style requirements |
| Chain-of-Thought | Guide step-by-step reasoning | Complex reasoning |
| Tree-of-Thought | Multi-branch exploration | Planning/search |
| Self-Consistency | Multiple samples, majority vote | Reliability needed |
| ReAct | Reasoning + Action loop | Agent / Tool calling |

## Structured Prompt Template

```
## Role
[Your role definition]

## Context
[Task background]

## Task
[Specific task description]

## Requirements
- Requirement 1
- Requirement 2

## Output Format
[Expected format]

## Example
[Optional: input-output example]
```

## Related Notes

- [[en/03-Resources/LLM-Wiki/llm-fundamentals|LLM Fundamentals]]
- [[en/03-Resources/LLM-Wiki/kos-and-llm|KOS & LLM]]
