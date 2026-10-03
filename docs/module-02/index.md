# Module 02: Prompt Engineering & Systematic Evaluation

<div class="lms-banner">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
    <div>
      <span class="lms-badge-header">
        Curriculum Course • Module 02 Hub
      </span>
      <h1 class="lms-title" style="margin-top: 6px;">
        Prompt Engineering &amp; Systematic Evaluation
      </h1>
      <p class="lms-subtitle">
        A masterclass curriculum on moving from amateur "vibe-checking" to production AI engineering: Building reproducible evaluation pipelines, synthetic dataset generators, deterministic AST syntax validators, and calibrated LLM-as-a-Judge scoring systems across Anthropic Claude and Google Gemini.
      </p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
      <span class="lms-status-pill">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span> Part 1: Evals Completed (100%)
      </span>
      <span class="lms-meta-text">Est. Total Study Time: 65 min • Level: Senior AI Engineering</span>
    </div>
  </div>

  <div style="margin-top: 20px;">
    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 6px;" class="lms-subtitle">
      <span>Curriculum Progress: <strong>50% (Part 1 Done, Part 2 In Progress)</strong></span>
      <span>4 / 4 Quiz Points • Dialogue Assessed (Advanced Proficiency)</span>
    </div>
    <div class="lms-progress-bar-bg">
      <div style="width: 50%; height: 100%; background: linear-gradient(90deg, #6366f1, #06b6d4); border-radius: 4px; transition: width 0.4s ease;"></div>
    </div>
  </div>
</div>

---

## 🧑‍🏫 Professor's Welcome & The Core Philosophy

Welcome to **Module 02: Prompt Engineering & Systematic Evaluation**.

In the software industry today, millions of developers "program" LLMs by typing instructions into a web playground, looking at a single response, and declaring, *"Looks good to me!"*

In engineering, we have a name for this practice: **"Vibe-Checking."** 

Vibe-checking is the single greatest cause of catastrophic failures, security vulnerabilities, and broken parsers when LLMs transition from a local prototype into enterprise production. 

```
   Traditional Software Engineering              Production AI Engineering
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│  Requirements & Specifications       │     │  Input / Output Criteria Rubric      │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│  Unit Tests (pytest / vitest)        │ <==>│  Evaluation Suite (evals)            │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│  Compiler & Static Analysis          │     │  Deterministic AST & Schema Graders  │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│  Code Review & Integration Tests     │     │  Calibrated LLM-as-a-Judge           │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

> [!IMPORTANT]
> **The Fundamental Axiom of AI Engineering**:
> **Evaluations (evals) ARE your unit tests.**
> Before you touch a single word of your prompt, you must build the evaluation harness that quantitatively measures its baseline accuracy, syntax conformance, and edge-case behavior.

---

## 🎯 Master Learning Objectives

By working through the modular units and interactive notebooks in this module, you will master:

1. **The 5-Stage Scientific Evaluation Lifecycle**: Moving from ad-hoc prompting to a repeatable test framework (Criteria &rarr; Dataset &rarr; Execution &rarr; Hybrid Grading &rarr; Error Triage).
2. **Golden Dataset Engineering**: Designing balanced test suites comprising routine tasks (happy paths), boundary edge cases, and adversarial prompt injections.
3. **High-Speed Synthetic Generation**: Using lightweight models (Claude Haiku / Gemini Flash) to generate test datasets at 95% lower cost.
4. **Deterministic Code Graders**: Implementing sub-millisecond, zero-cost syntax verification using Python `ast.parse()`, `json.loads()`, and `re.compile()`, while avoiding the security vulnerabilities of `eval()`.
5. **Calibrated Model Graders (LLM-as-a-Judge)**: Eliminating the statistical "Anchoring Trap" (why models default to 7) using reasoning precedence and multi-attribute rubrics.
6. **Composite Scoring & Error Triage**: Calculating balanced mathematical scores and executing regression suites to verify that prompt fixes do not introduce regressions.

---

## 📚 Curriculum Roadmap & Lecture Units

Module 02 is broken into bite-sized, sequential lectures designed for university-level learning:

<div class="lms-resource-grid">

  <a href="01-eval-framework/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Lecture 1.1</span>
          <span class="lms-pill-type">Core Concept</span>
        </div>
        <h3 class="lms-card-title">1. The Evaluation Lifecycle &amp; Datasets</h3>
        <p class="lms-card-desc">
          Why single-test demos fail in production (User A, B, C case studies), the 5-stage lifecycle, dataset anatomy, and synthetic dataset generation across Claude and Gemini.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #6366f1;">
        Read Lecture 1.1 &rarr;
      </div>
    </div>
  </a>

  <a href="02-grading-strategies/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-gemini">Lecture 1.2</span>
          <span class="lms-pill-type">Architecture</span>
        </div>
        <h3 class="lms-card-title">2. Hybrid Grading (Code vs. LLM-as-a-Judge)</h3>
        <p class="lms-card-desc">
          Building the two-tier grading hierarchy. Secure Python AST parsing, JSON validation, overcoming the "Anchoring Trap," and multi-attribute scoring rubrics.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #0284c7;">
        Read Lecture 1.2 &rarr;
      </div>
    </div>
  </a>

  <a href="03-composite-scoring-runner/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-review">Lecture 1.3</span>
          <span class="lms-pill-type">Pipeline</span>
        </div>
        <h3 class="lms-card-title">3. Composite Scoring &amp; Benchmark Runner</h3>
        <p class="lms-card-desc">
          The composite mathematical model, end-to-end evaluation runner implementation, real AWS benchmark scorecards, and the 4-step error triage methodology.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #059669;">
        Read Lecture 1.3 &rarr;
      </div>
    </div>
  </a>

  <a href="knowledge-checks/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-review">Unit 1.4</span>
          <span class="lms-pill-type">Self-Assessment</span>
        </div>
        <h3 class="lms-card-title">4. Interactive Knowledge Checks</h3>
        <p class="lms-card-desc">
          Interactive quiz cards with clickable reveals and in-depth architectural rationales covering evaluation risks, dataset tiers, and AST security.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #f59e0b;">
        Take Knowledge Check &rarr;
      </div>
    </div>
  </a>

  <a href="dialogue-review/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Unit 1.5</span>
          <span class="lms-pill-type">Oral Assessment</span>
        </div>
        <h3 class="lms-card-title">5. Interactive Dialogue Assessment</h3>
        <p class="lms-card-desc">
          Complete study review covering the 4-stage interactive technical dialogue, demonstrating failure triage, regression prevention, and Advanced Proficiency rating.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #8b5cf6;">
        Read Dialogue Assessment &rarr;
      </div>
    </div>
  </a>

</div>

---

## 🔄 Dual-API Parity: Anthropic Claude vs. Google Gemini

Throughout this module, every concept is implemented with complete feature parity across both frontier API ecosystems:

<div class="lms-bento-grid">

  <div class="lms-bento-card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span class="lms-tag-claude">Anthropic Claude</span>
      <span class="lms-pill-type">anthropic SDK</span>
    </div>
    <h3 class="lms-card-title">Assistant Prefill Strategy</h3>
    <p class="lms-card-desc">
      Anthropic uses <strong>Assistant Message Prefilling</strong>:
      <br>
      <code>messages.append({"role": "assistant", "content": "```json"})</code>
      <br><br>
      Combined with <code>stop_sequences=["```"]</code>, this technique primes Claude's autoregressive generation to start directly at the JSON array without preambles or conversational noise.
    </p>
  </div>

  <div class="lms-bento-card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span class="lms-tag-gemini">Google Gemini</span>
      <span class="lms-pill-type">google-genai SDK</span>
    </div>
    <h3 class="lms-card-title">Native Schema Enforcement</h3>
    <p class="lms-card-desc">
      Gemini uses <strong>Native Token Constrained Decoding</strong>:
      <br>
      <code>config=types.GenerateContentConfig(response_mime_type="application/json", response_schema=list[TestCase])</code>
      <br><br>
      Gemini constrains decoder logits at the token level, guaranteeing 100% valid JSON conforming to Pydantic type annotations with zero prompt hacks.
    </p>
  </div>

</div>

---

## 💻 Interactive Jupyter Laboratories

Both evaluation pipelines are fully coded, verified, and runnable in your local workspace:

<div class="lms-resource-grid">

  <a href="notebooks/001-claude-prompt-evals/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Anthropic Claude</span>
          <span class="lms-pill-type">Master Notebook</span>
        </div>
        <h3 class="lms-card-title">001-claude-prompt-evals.ipynb</h3>
        <p class="lms-card-desc">
          Complete 20-cell educational master notebook implementing the 3-layer eval harness, assistant prefilling, deterministic AST syntax validation, and composite scoring.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #6366f1;">
        Open Interactive Notebook &rarr;
      </div>
    </div>
  </a>

  <a href="notebooks/001-gemini-prompt-evals/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-gemini">Google Gemini</span>
          <span class="lms-pill-type">Companion Notebook</span>
        </div>
        <h3 class="lms-card-title">001-gemini-prompt-evals.ipynb</h3>
        <p class="lms-card-desc">
          Gemini 3.1 Flash Lite companion implementing native Pydantic schema generation, AST syntax grading, and full evaluation suite execution.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #0284c7;">
        Open Interactive Notebook &rarr;
      </div>
    </div>
  </a>

</div>

---

<div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--card-border);">
  <a href="01-eval-framework/" style="font-weight: 600; text-decoration: none;">Start Learning: Lecture 1: The Evaluation Lifecycle &rarr;</a>
</div>
