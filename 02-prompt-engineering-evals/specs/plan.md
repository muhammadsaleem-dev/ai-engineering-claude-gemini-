# Architecture & Implementation Plan: Module 02 Prompt Engineering & Evals

## 1. Architectural Strategy

Module 02 establishes a structured progression from raw prompt crafting to automated evaluation pipelines. We follow the **Specification-Driven Development (SDD)** model:

```
[ spec.md ] ──> [ Golden Dataset ] ──> [ Baseline Prompts ] ──> [ Optimized Prompts ] ──> [ Automated Eval Engine ]
```

---

## 2. Component Breakdown & Notebook Architecture

### Part 1: Core Prompt Engineering Patterns (`001`)
* **Claude Implementation (`001-claude-prompt-patterns.ipynb`)**:
  - Direct instructions vs. vague requests.
  - Role prompting (`system` parameter vs. in-prompt user role).
  - XML tag separation (`<context>`, `<rules>`, `<document>`, `<input>`).
  - Negative constraints & defensive framing.
* **Gemini Companion (`001-gemini-prompt-patterns.ipynb`)**:
  - `system_instruction` configuration vs user turn structuring.
  - Structured Markdown headers and fenced blocks.
  - Context placement and token attention behavior in Gemini 2.5 Flash.

### Part 2: Few-Shot In-Context Learning (`002`)
* **Claude Implementation (`002-claude-few-shot.ipynb`)**:
  - Zero-shot vs. Few-shot performance comparison.
  - Designing effective exemplars (diversity, negative examples, schema consistency).
  - XML `<examples>` block structure.
  - Dynamic few-shot selection (programmatic exemplar injection).
* **Gemini Companion (`002-gemini-few-shot.ipynb`)**:
  - Multimodal few-shot framing and text exemplar structuring.
  - In-context formatting steering with Gemini 2.5 Flash.

### Part 3: Chain-of-Thought & Reasoning Scratchpads (`003`)
* **Claude Implementation (`003-claude-chain-of-thought.ipynb`)**:
  - Prompted CoT: Using `<thinking>` tags for step-by-step reasoning.
  - Assistant prefilling with `<thinking>` to force explicit deduction before answering.
  - Anthropic Extended Thinking feature (budgeting reasoning tokens).
  - Output sanitization: Extracting final answers cleanly for production consumers.
* **Gemini Companion (`003-gemini-chain-of-thought.ipynb`)**:
  - Prompted step-by-step reasoning protocols.
  - Gemini thinking configuration (`thinking_budget`).

### Part 4: Automated Evaluation Benchmarks (`004`)
* **`004-eval-pipeline-benchmarks.ipynb`**:
  - Designing a 20-sample Golden Evaluation Dataset (JSON/JSONL).
  - Writing deterministic assertion functions (regex, forbidden keywords, JSON validation).
  - Writing an LLM-as-a-Judge grader with explicit rubric scoring (1 to 5).
  - Computing quantitative evaluation metrics: Pass Rate, Latency, and Cost.

### Part 5: Flagship Capstone Blueprint (`case-study.ipynb`)
* **Automated Prompt Evaluation & Benchmark Engine**:
  - Evaluates Candidate Prompt A (Zero-shot Baseline) vs Candidate Prompt B (XML + Few-Shot + Negative Constraints) vs Candidate Prompt C (CoT Scratchpad).
  - Generates a side-by-side benchmark table with pass rates, failure breakdown, and cost trade-offs.
  - Emits automated markdown reports for continuous integration (CI) gates.

### Part 6: Dialogue Review & Portal Integration
* **`module-02-dialogue-review.md`**: Interactive dialogue assessment review and study guide.
* **`docs/module-02/index.md`**: Complete modern documentation guide published to GitHub Pages.

---

## 3. Technology Stack & Dependencies

- **Language**: Python 3.12+
- **Frontier APIs**: `anthropic>=0.45.0`, `google-genai>=1.0.0`
- **Validation**: `pydantic>=2.0.0`
- **Documentation**: MkDocs Material with `mkdocs-jupyter`
