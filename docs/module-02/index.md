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
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span> Parts 1 &amp; 2 Completed (100%)
      </span>
      <span class="lms-meta-text">Est. Total Study Time: 120 min • Level: Senior AI Engineering</span>
    </div>
  </div>

  <div style="margin-top: 20px;">
    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 6px;" class="lms-subtitle">
      <span>Curriculum Progress: <strong>100% (Part 1: Evals &amp; Part 2: Techniques Completed)</strong></span>
      <span>9 / 9 Quiz Points • 2 Interactive Dialogues Assessed (Advanced Proficiency)</span>
    </div>
    <div class="lms-progress-bar-bg">
      <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #6366f1, #10b981); border-radius: 4px; transition: width 0.4s ease;"></div>
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
> Before you touch a single word of your prompt, you must build the evaluation harness that quantitatively measures its baseline accuracy, syntax conformance, and edge-case behavior. Once your test harness is established, apply systematic prompt engineering (clarity, specificity, XML structuring, and few-shot exemplars) to optimize statistical performance.

---

## 🎯 Master Learning Objectives

By working through the modular units and interactive notebooks in this module, you will master:

1. **The 5-Stage Scientific Evaluation Lifecycle**: Moving from ad-hoc prompting to a repeatable test framework (Criteria &rarr; Dataset &rarr; Execution &rarr; Hybrid Grading &rarr; Error Triage).
2. **Golden Dataset Engineering**: Designing balanced test suites comprising routine tasks (happy paths), boundary edge cases, and adversarial prompt injections.
3. **High-Speed Synthetic Generation**: Using lightweight models (Claude Haiku / Gemini Flash) to generate test datasets at 95% lower cost.
4. **Deterministic Code Graders**: Implementing sub-millisecond, zero-cost syntax verification using Python `ast.parse()`, `json.loads()`, and `re.compile()`, while avoiding the security vulnerabilities of `eval()`.
5. **Calibrated Model Graders (LLM-as-a-Judge)**: Eliminating the statistical "Anchoring Trap" (why models default to 7) using reasoning precedence and multi-attribute rubrics.
6. **Core Prompt Engineering Principles**: Applying imperative directive verbs, specialized personas, and concrete numerical boundaries.
7. **XML Tag Architecture**: Utilizing semantic delimiter tags (`<context>`, `<document>`, `<rules>`) to eliminate prompt injection and structure multi-document contexts.
8. **In-Context Few-Shot Exemplars**: Anchoring output schemas, formatting density, and resolving subtle edge cases like sarcasm detection.

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

  <a href="04-prompt-techniques-clarity/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Lecture 2.1</span>
          <span class="lms-pill-type">Techniques</span>
        </div>
        <h3 class="lms-card-title">4. Clarity, Directives &amp; Specificity</h3>
        <p class="lms-card-desc">
          Eliminating conversational preamble, setting imperative task verbs, persona decoupling, and the 4 pillars of specificity (numerical, temporal, structural, and negative bounds).
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #6366f1;">
        Read Lecture 2.1 &rarr;
      </div>
    </div>
  </a>

  <a href="05-xml-structuring-few-shot/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-gemini">Lecture 2.2</span>
          <span class="lms-pill-type">Structural Mastery</span>
        </div>
        <h3 class="lms-card-title">5. XML Tags &amp; Few-Shot In-Context Learning</h3>
        <p class="lms-card-desc">
          XML delimiter architecture for prompt injection defense, multi-document attention gating, one-shot vs. multi-shot exemplars, and mastering subtle edge cases like sarcasm detection.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #0284c7;">
        Read Lecture 2.2 &rarr;
      </div>
    </div>
  </a>

  <a href="knowledge-checks/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-review">Unit 2.3</span>
          <span class="lms-pill-type">Self-Assessment</span>
        </div>
        <h3 class="lms-card-title">6. Knowledge Checks &amp; Quizzes (100%)</h3>
        <p class="lms-card-desc">
          Interactive quiz cards covering both Part 1 and Part 2 quizzes: workout planning, sarcasm few-shotting, prompt engineering definitions, AST security, and XML delimiters.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #f59e0b;">
        Take Knowledge Checks &rarr;
      </div>
    </div>
  </a>

  <a href="dialogue-review/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Unit 2.4</span>
          <span class="lms-pill-type">Oral Assessments</span>
        </div>
        <h3 class="lms-card-title">7. Interactive Dialogue Reviews</h3>
        <p class="lms-card-desc">
          Complete study records for both technical dialogue assessments: Designing Evaluation Pipelines and Improving Vague Prompts, assessed at Advanced Proficiency.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #8b5cf6;">
        Read Dialogue Assessments &rarr;
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
    <h3 class="lms-card-title">XML Delimiters &amp; Prefill</h3>
    <p class="lms-card-desc">
      Anthropic natively recognizes XML tags (<code>&lt;context&gt;</code>, <code>&lt;rules&gt;</code>, <code>&lt;instructions&gt;</code>) for boundary protection and supports <strong>Assistant Message Prefilling</strong>:
      <br>
      <code>messages.append({"role": "assistant", "content": "```json"})</code>
      <br><br>
      This anchors token generation and cleanly decouples instructions from untrusted user content.
    </p>
  </div>

  <div class="lms-bento-card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span class="lms-tag-gemini">Google Gemini</span>
      <span class="lms-pill-type">google-genai SDK</span>
    </div>
    <h3 class="lms-card-title">Native Schemas &amp; system_instruction</h3>
    <p class="lms-card-desc">
      Gemini cleanly decouples personas via <strong>system_instruction</strong> and enforces schemas at the logit level:
      <br>
      <code>config=types.GenerateContentConfig(system_instruction=..., response_mime_type="application/json", response_schema=BaseModel)</code>
      <br><br>
      Guarantees 100% type-safe JSON and structured markdown section parsing without extra syntax hacks.
    </p>
  </div>

</div>

---

## 💻 Interactive Jupyter Laboratories

All evaluation pipelines and prompt optimization notebooks are fully coded, verified, and runnable in your local workspace:

<div class="lms-resource-grid">

  <a href="notebooks/001-claude-prompt-evals/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Anthropic Claude</span>
          <span class="lms-pill-type">Part 1 Notebook</span>
        </div>
        <h3 class="lms-card-title">001-claude-prompt-evals.ipynb</h3>
        <p class="lms-card-desc">
          Foundational 20-cell educational master notebook implementing the 3-layer eval harness, synthetic dataset generation, deterministic AST syntax validation, and composite scoring.
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
          <span class="lms-pill-type">Part 1 Companion</span>
        </div>
        <h3 class="lms-card-title">001-gemini-prompt-evals.ipynb</h3>
        <p class="lms-card-desc">
          Gemini 3.1 Flash Lite companion implementing native Pydantic schema generation, AST syntax grading, and full evaluation suite execution with dual-API parity.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #0284c7;">
        Open Interactive Notebook &rarr;
      </div>
    </div>
  </a>

  <a href="notebooks/002-claude-prompt-techniques/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-claude">Anthropic Claude</span>
          <span class="lms-pill-type">Part 2 Notebook</span>
        </div>
        <h3 class="lms-card-title">002-claude-prompt-techniques.ipynb</h3>
        <p class="lms-card-desc">
          Multi-iteration prompt engineering lab: Moving from V0 (vague, 2.3/10) to V4 (XML + Few-shot, 9.8/10), measuring the exact quantitative score gain of each technique.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #6366f1;">
        Open Interactive Notebook &rarr;
      </div>
    </div>
  </a>

  <a href="notebooks/002-gemini-prompt-techniques/" class="lms-resource-link">
    <div class="lms-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-gemini">Google Gemini</span>
          <span class="lms-pill-type">Part 2 Companion</span>
        </div>
        <h3 class="lms-card-title">002-gemini-prompt-techniques.ipynb</h3>
        <p class="lms-card-desc">
          Google Gemini 2.5 Flash companion lab demonstrating <code>system_instruction</code>, structured markdown section delimiters, and few-shot in-context learning.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #0284c7;">
        Open Interactive Notebook &rarr;
      </div>
    </div>
  </a>

  <a href="case-study/" class="lms-resource-link" style="grid-column: 1 / -1;">
    <div class="lms-resource-card" style="border: 1px solid rgba(99, 102, 241, 0.35); background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05));">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="lms-tag-review" style="background: rgba(99, 102, 241, 0.2); color: #818cf8;">Case Study</span>
          <span class="lms-pill-type">Enterprise CI/CD Gate</span>
        </div>
        <h3 class="lms-card-title">case-study.ipynb — Autonomous Evaluation &amp; Regression Benchmark Engine</h3>
        <p class="lms-card-desc">
          Complete production-grade evaluation engine: Pairwise regression detection across Candidate A (V0), B (V2), and C (V4), 2-tier hybrid grading (deterministic code + calibrated model judge), and automated CI/CD markdown scorecard report generation across Claude and Gemini.
        </p>
      </div>
      <div style="margin-top: 16px; font-size: 0.85rem; font-weight: 700; color: #6366f1;">
        Launch Case Study &rarr;
      </div>
    </div>
  </a>

</div>

---

<div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--card-border);">
  <a href="case-study/" style="font-weight: 600; text-decoration: none;">Launch Case Study: Autonomous Evaluation &amp; Regression Engine &rarr;</a>
</div>

