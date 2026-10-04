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

## Phase 3: Part 2 - Prompt Engineering Techniques
- [x] **Official Coursera Assets Extracted & Downloaded**
  - [x] Extracted lecture transcripts and slides across all 5 videos
  - [x] Downloaded official starter notebook [`coursera_snapshots/001_prompting.ipynb`](coursera_snapshots/001_prompting.ipynb)
  - [x] Downloaded official solution notebook [`coursera_snapshots/002_prompting_completed.ipynb`](coursera_snapshots/002_prompting_completed.ipynb)
- [x] **Dual-API Interactive Notebooks**
  - [x] Implement [`002-claude-prompt-techniques.ipynb`](../002-claude-prompt-techniques.ipynb) (Clarity, Specificity, XML Tags, Few-Shot, Sarcasm Edge Case, and PromptEvaluator loop)
  - [x] Implement [`002-gemini-prompt-techniques.ipynb`](../002-gemini-prompt-techniques.ipynb) (Google Gemini parity with `system_instruction`, structured markdown delimiters, and Pydantic schemas)
- [x] **Quiz on Prompt Engineering Techniques**: Passed with 100% (5/5 points)
- [x] **Dialogue on Improving Your Prompts**: Completed interactive dialogue on prompt refinement

## Phase 4: Flagship Production Capstone
- [x] Implement `case-study.ipynb` (**Automated Prompt Evaluation & Benchmark Engine**)
  - [x] End-to-end evaluation harness
  - [x] Side-by-side prompt regression testing (Baseline vs. Few-Shot vs. CoT)
  - [x] Markdown benchmark report generator

## Phase 5: Documentation & Learning Review
- [x] Create initial `module-02-dialogue-review.md` (Part 1 Assessment review)
- [x] Create initial curriculum sub-pages (`01-eval-framework.md`, `02-grading-strategies.md`, `03-composite-scoring-runner.md`, `knowledge-checks.md`)
- [x] Create Part 2 lecture pages:
  - [x] `04-prompt-techniques-clarity.md` (Clarity, Direct Directives, Specific Constraints)
  - [x] `05-xml-structuring-few-shot.md` (XML Tag Architecture, In-Context Few-Shot Learning, Nuance & Sarcasm)
- [x] Expand `knowledge-checks.md` with Part 2 Quiz questions and deep pedagogical rationales
- [x] Expand `dialogue-review.md` with Part 2 Dialogue analysis and prompt diffs
- [x] Update `02-prompt-engineering-evals/README.md` and `docs/module-02/index.md`
- [x] Verify live site rendering and interactive routing on local dev server
