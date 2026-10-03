# Unit 1.4: Interactive Knowledge Checks & Self-Assessment

<div class="lms-banner">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
    <div>
      <span class="lms-badge-header">
        Module 02 • Unit 1.4
      </span>
      <h1 class="lms-title" style="margin-top: 6px;">
        Interactive Knowledge Checks &amp; Quizzes
      </h1>
      <p class="lms-subtitle">
        Validate your mastery of systematic prompt evaluation principles before advancing to prompt engineering techniques. Click each question card to reveal the complete architectural rationale and common industry misconceptions.
      </p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
      <span class="lms-status-pill">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span> 100% Passing Benchmark
      </span>
      <span class="lms-meta-text">4 / 4 Core Questions • 1 Bonus Security Case</span>
    </div>
  </div>
</div>

---

## 🎯 Conceptual Self-Assessment Quiz

??? question "Question 1: You wrote a prompt and tested it once on a sample email. It worked fine, so you deployed it to production. What is the primary risk?"
    **Correct Answer:** **Users will provide unexpected inputs that break it.**
    
    <div class="lms-answer-box">
      <strong>Deep Architectural Rationale:</strong><br>
      Single-run manual testing ("vibe-checking") only validates happy-path assumptions. Real-world users provide edge cases: misspellings, angry multi-paragraph rants, missing fields, or prompt injection attacks. Without an automated evaluation suite of 50+ diverse test cases, deploying a prompt tested only once guarantees production regressions.
      <br><br>
      <strong>Common Misconception:</strong> Thinking that modern frontier models (Claude 3.5 Sonnet or Gemini 1.5 Pro) are "smart enough" to understand implicit user intent without failure. Prompt fragility is a universal property of probabilistic systems.
    </div>

??? question "Question 2: When generating synthetic test cases for an evaluation dataset, which model tier should you use?"
    **Correct Answer:** **A faster, cost-efficient model like Claude Haiku or Gemini Flash.**
    
    <div class="lms-answer-box">
      <strong>Deep Architectural Rationale:</strong><br>
      Generating hundreds of synthetic test cases is a volume-heavy task where format compliance and topic breadth matter far more than deep multi-step reasoning. Fast, lightweight models (Haiku / Flash) generate diverse test cases at ~10x lower latency and ~95% lower cost compared to flagship frontier models (Sonnet / Opus / Pro).
      <br><br>
      <strong>Engineering Tip:</strong> Reserve your expensive flagship models for the actual candidate generation or for complex multi-criteria evaluation judges.
    </div>

??? question "Question 3: In an automated prompt evaluation workflow, after candidate responses are generated, what is the mandatory next step?"
    **Correct Answer:** **Feed the responses through an automated grader (Code-based or Model-based).**
    
    <div class="lms-answer-box">
      <strong>Deep Architectural Rationale:</strong><br>
      Candidate outputs cannot be evaluated by eye at scale. They must be routed through automated graders: Deterministic Code Graders (to verify syntax, schema, and length constraints in $<1\text{ ms}$) and Model Graders (to verify semantic accuracy, security, and criteria adherence), computing quantitative scores across the entire test suite.
      <br><br>
      <strong>Workflow Check:</strong> Execution &rarr; Grading &rarr; Aggregation &rarr; Error Triage.
    </div>

??? question "Question 4: To objectively measure how well your prompts work in production, what must you prioritize?"
    **Correct Answer:** **Prompt evaluation methods.**
    
    <div class="lms-answer-box">
      <strong>Deep Architectural Rationale:</strong><br>
      Prompt engineering techniques (such as few-shot exemplars, XML tags, or chain-of-thought) only change the wording of a prompt. Without rigorous evaluation methods (golden datasets, automated graders, and regression benchmarks), you have no scientific proof whether a prompt change actually improved overall system performance or caused silent regressions.
    </div>

??? question "Question 5 (Bonus Security Check): Why do we use `ast.parse()` instead of `eval()` to validate Python code?"
    **Correct Answer:** **`eval()` executes untrusted code and introduces severe code injection vulnerabilities; `ast.parse()` only checks grammar without execution.**
    
    <div class="lms-answer-box">
      <strong>Deep Architectural Rationale:</strong><br>
      If an AI model generates code containing `import os; os.system('rm -rf /')` or file-system reads, calling `eval()` or `exec()` executes that code directly inside your backend evaluation runner. `ast.parse()` converts the string into an Abstract Syntax Tree data structure. It verifies that the code is syntactically valid Python without executing a single instruction.
    </div>

---

## 📝 Self-Assessment Mastery Rubric

Before advancing to Part 2 (*Prompt Engineering Techniques*), verify that you can explain each of these concepts to another engineer:

- [x] **The Vibe-Check Fallacy**: Why manual playground testing fails under production traffic.
- [x] **The 5-Stage Lifecycle**: Define criteria &rarr; Build dataset &rarr; Run candidate &rarr; Hybrid grade &rarr; Triage errors.
- [x] **Dataset Anatomy**: The role of `task`, `format`, and `solution_criteria`.
- [x] **Deterministic vs. Semantic Grading**: When to use `ast.parse`/`json.loads` vs. LLM-as-a-Judge.
- [x] **The Anchoring Trap**: Why LLMs default to 7 and how reasoning precedence solves it.
- [x] **Regression Testing**: Re-running the full evaluation suite whenever a prompt is modified.

---

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--card-border);">
  <a href="../03-composite-scoring-runner/" style="font-weight: 600; text-decoration: none;">&larr; Back to Lecture 3: Composite Scoring</a>
  <a href="../dialogue-review/" style="font-weight: 600; text-decoration: none;">Proceed to Interactive Dialogue Assessment &rarr;</a>
</div>
