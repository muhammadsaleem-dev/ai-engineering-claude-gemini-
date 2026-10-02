# Module 02: Prompt Engineering & Evaluation

This module moves beyond basic prompts to systematic prompt engineering and automated evaluation pipelines.

> [!IMPORTANT]
> 🚀 **SPEC-DRIVEN DEVELOPMENT (SDD) MILESTONE**:
> In this module, we introduce **GitHub Spec-Kit** ([`github/spec-kit`](https://github.com/github/spec-kit))!
> Before writing ad-hoc prompts, we will use `spec.md`, `plan.md`, and `tasks.md` to formally define prompt schemas, acceptance criteria, and automated evaluation benchmarks.

---

### 📚 Topics & Lessons
1. **Prompt Design Patterns**: Role prompting, direct instructions, and context framing.
2. **Few-Shot Prompting**: Providing input/output exemplars to steer formatting.
3. **Structured Outputs (JSON Mode)**: Forcing models to adhere to JSON schemas.
4. **Evaluation Pipelines (Evals)**:
   - Creating test datasets representing edge cases.
   - Building automated grading scripts (LLM-as-a-judge, rule-based checks).
   - Measuring prompt improvements objectively.

---

### 📓 Planned Notebooks & Specs
- `specs/` — Formal Spec-Kit specifications for evaluation benchmarks.
- `01-prompt-patterns-claude.ipynb` / `01-prompt-patterns-gemini.ipynb`
- `02-structured-json-outputs.ipynb`
- `03-evals-and-benchmarking.ipynb`
