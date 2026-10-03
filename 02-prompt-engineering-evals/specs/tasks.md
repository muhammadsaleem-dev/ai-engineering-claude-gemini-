# Tasks & Implementation Checklist: Module 02 Prompt Engineering & Evals

## Phase 1: Specifications & Golden Dataset Setup
- [x] Create formal specification [`02-prompt-engineering-evals/specs/spec.md`](spec.md)
- [x] Create implementation plan [`02-prompt-engineering-evals/specs/plan.md`](plan.md)
- [x] Create task checklist [`02-prompt-engineering-evals/specs/tasks.md`](tasks.md)
- [x] Define the Golden Evaluation Test Dataset ([`data/eval_test_suite.json`](../data/eval_test_suite.json) and [`dataset.json`](../dataset.json))

## Phase 2: Part 1 - Evaluating Prompt Performance (Official Anthropic Curriculum)
- [x] **Lesson 1-4: Dataset Generation & Eval Runner**
  - [x] Download official starter notebook [`001-claude-prompt-evals.ipynb`](../001-claude-prompt-evals.ipynb)
- [x] **Lesson 5: Model-Based Grading**
  - [x] Download official grader notebook [`001-claude-prompt-evals-grader.ipynb`](../001-claude-prompt-evals-grader.ipynb)
- [x] **Lesson 6: Code-Based Syntax Grading**
  - [x] Download official code grader notebook [`001-claude-prompt-evals-code-grader.ipynb`](../001-claude-prompt-evals-code-grader.ipynb)
- [x] **Lesson 7: Practice Evaluation Complete**
  - [x] Download complete practice exercise notebook [`001-claude-prompt-evals-complete.ipynb`](../001-claude-prompt-evals-complete.ipynb)
- [x] **Google Gemini Companion Implementation (Dual API Parity)**
  - [x] Implement [`001-gemini-prompt-evals.ipynb`](../001-gemini-prompt-evals.ipynb) with `google-genai` and `gemini-3.1-flash-lite`
  - [x] Implement native structured JSON schema output (`response_mime_type="application/json"`)
  - [x] Implement deterministic AST/JSON/Regex syntax validators
  - [x] Verify end-to-end composite evaluation execution
- [x] **Quiz on Prompt Evaluation**: Passed with 100% (4/4 points)
- [x] **Dialogue on Evaluation**: Completed with advanced proficiency assessment

## Phase 3: Part 2 - Prompt Engineering Techniques (Upcoming)
- [ ] **Lesson 8: Being Clear & Direct**
- [ ] **Lesson 9: Being Specific**
- [ ] **Lesson 10: Structure with XML Tags**
- [ ] **Lesson 11: Providing Examples (Few-Shot / Multishot)**

## Phase 4: Flagship Production Capstone
- [ ] Implement `case-study.ipynb` (**Automated Prompt Evaluation & Benchmark Engine**)
  - [ ] End-to-end evaluation harness
  - [ ] Side-by-side prompt regression testing (Baseline vs. Few-Shot vs. CoT)
  - [ ] Markdown benchmark report generator

## Phase 5: Documentation & Learning Review
- [x] Create `module-02-dialogue-review.md` (Dialogue Assessment review)
- [x] Create modular university-grade curriculum sub-pages (`01-eval-framework.md`, `02-grading-strategies.md`, `03-composite-scoring-runner.md`, `knowledge-checks.md`)
- [x] Update `02-prompt-engineering-evals/README.md` and `docs/module-02/index.md`
- [x] Verify live site rendering and interactive routing on local dev server
