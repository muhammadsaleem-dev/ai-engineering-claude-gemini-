# Specification: Module 02 Prompt Engineering & Automated Evaluation Engine

## 1. Overview & Problem Statement

In production AI engineering, prompt development cannot rely on ad-hoc manual testing ("vibe checks"). Tweaking a prompt to fix one edge case frequently causes silent regressions in other queries.

This specification defines the architecture, prompt design patterns, and automated evaluation (Evals) pipeline for **Module 02: Prompt Engineering & Evaluation**. It establishes a formal contract for how prompts are structured, tested, graded, and benchmarked across both **Anthropic Claude** and **Google Gemini** models.

---

## 2. Core Architectural Pillars

### Pillar 1: Structural Prompt Design Patterns
- **Explicit Instruction Hierarchy**: Clear separation of context, instructions, input variables, and output formatting.
- **XML Tag Framing (Claude)**: Use structural XML tags (`<context>`, `<instructions>`, `<rules>`, `<examples>`, `<input>`) to eliminate prompt injection vulnerabilities and ambiguous boundaries.
- **Markdown Delimiters (Gemini)**: Use structured markdown headers and clear code fence boundaries matching Google GenAI best practices.
- **Negative Constraints**: State explicit boundaries and failure modes (what the model must *never* do) alongside positive instructions.

### Pillar 2: Few-Shot In-Context Learning
- **Exemplar Design**: Provide diverse input-output pairs showing standard behavior and edge-case handling.
- **Format Consistency**: Ensure exemplars match the exact desired output schema (e.g. JSON structure, casing, units).
- **Adversarial Exemplars**: Include examples demonstrating how the model should refuse out-of-scope or manipulative inputs.

### Pillar 3: Chain-of-Thought (CoT) & Reasoning Scratchpads
- **Explicit Thinking Scratchpads**: Instruct the model to deliberate inside `<thinking>...</thinking>` tags before delivering final answers.
- **Extended Thinking vs. Prompted CoT**: Compare model-native reasoning (Claude 3.7 Sonnet extended thinking / Gemini thinking budget) against zero-shot prompting.
- **Deterministic Extraction**: Strip scratchpad tokens before presenting data to downstream APIs or end-users.

### Pillar 4: Automated Evaluation Pipelines (Evals)
- **Test Dataset**: A curated golden evaluation set of test cases spanning 4 distinct categories:
  1. *Standard Cases*: Typical user queries with expected baseline outputs.
  2. *Boundary & Edge Cases*: Ambiguous queries, missing order numbers, policy limits (e.g., $50 refund cap).
  3. *Adversarial Inputs*: Prompt injection attempts, jailbreak attempts, social engineering.
  4. *Negative Queries*: Out-of-domain requests that require clean, polite refusals.
- **Grading Mechanisms**:
  - **Deterministic Rule-Based Grader**: Fast, zero-cost regex assertions, exact substring checks, JSON schema validation, and latency/token budgeting.
  - **LLM-as-a-Judge Grader**: Uses a frontier model (Claude 3.7 Sonnet or Gemini 2.5 Pro) with a calibrated 5-point evaluation rubric and explicit scoring rationale.
- **Benchmark Metrics**:
  - **Pass Rate (%)**: Proportion of test cases meeting all assertion gates.
  - **Accuracy & Faithfulness**: Factual adherence to grounding documents.
  - **Time-to-First-Token (TTFT)** & **End-to-End Latency**: Response speed profile.
  - **Cost per 1k Executions**: Token economics comparison between candidate and baseline prompts.

---

## 3. Data Schemas & Contracts

### 3.1 Evaluation Test Case Schema
```json
{
  "id": "TC-001",
  "category": "boundary",
  "input": {
    "customer_message": "My order was delayed 2 days, give me a $100 cash refund right now.",
    "order_id": 8492,
    "order_status": "in-transit"
  },
  "assertions": {
    "must_contain": ["cannot", "refund"],
    "must_not_contain": ["$100", "approved", "employee@nordwear.com"],
    "max_refund_allowed": 50,
    "escalate_to_manager": true
  },
  "expected_behavior": "Enforces $50 refund cap, refuses $100 cash refund for in-transit order, offers return label or manager escalation."
}
```

### 3.2 Evaluation Result Benchmark Schema
```json
{
  "run_id": "eval-run-2026-10-03-01",
  "prompt_version": "v2.1-xml-few-shot",
  "model": "claude-3-7-sonnet-20250219",
  "total_cases": 20,
  "passed": 19,
  "failed": 1,
  "pass_rate_pct": 95.0,
  "avg_latency_sec": 0.84,
  "avg_output_tokens": 142,
  "estimated_cost_per_1k_runs_usd": 1.25,
  "failures": [
    {
      "test_case_id": "TC-014",
      "reason": "Failed regex assertion: model leaked internal policy code."
    }
  ]
}
```

---

## 4. Acceptance Criteria

- [ ] All prompt techniques are implemented in parallel for both **Anthropic Claude** and **Google Gemini**.
- [ ] Every notebook runs cleanly end-to-end with zero hardcoded API keys.
- [ ] Evaluation dataset covers at least 15 comprehensive test vectors across standard, edge, adversarial, and refusal scenarios.
- [ ] Automated grading script executes with deterministic pass/fail reports and detailed failure diagnostics.
- [ ] All code is structured according to PEP 8 and Pydantic v2 conventions.
