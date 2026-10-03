# Lecture 2: Hybrid Grading: Deterministic Code vs. Calibrated LLM-as-a-Judge

<div class="lms-banner">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
    <div>
      <span class="lms-badge-header">
        Module 02 • Unit 1.2
      </span>
      <h1 class="lms-title" style="margin-top: 6px;">
        Hybrid Grading: Code Graders &amp; Model Judges
      </h1>
      <p class="lms-subtitle">
        Architecting a multi-layered grading system. Discover why code checks alone cannot verify semantic correctness, how to avoid the dangerous pitfalls of <code>eval()</code> using Python AST parsing, and how to eliminate the "Anchoring Trap" when using LLMs as automated evaluators.
      </p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
      <span class="lms-status-pill">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #6366f1;"></span> Advanced Grading
      </span>
      <span class="lms-meta-text">Est. Study Time: 20 min • Level: Senior AI Engineering</span>
    </div>
  </div>
</div>

---

## 1. ⚖️ The Grading Dilemma: Why One Grader is Not Enough

Once an LLM generates a response to an evaluation prompt, **how do you score it automatically?**

Many engineering teams make one of two critical mistakes:

```
┌───────────────────────────────────────────────┐  ┌───────────────────────────────────────────────┐
│     ❌ Mistake 1: Relying ONLY on Code        │  │     ❌ Mistake 2: Relying ONLY on an LLM      │
├───────────────────────────────────────────────┤  ├───────────────────────────────────────────────┤
│ • Code checks pass valid syntax even if the   │  │ • LLMs are slow (1-3 seconds per sample).     │
│   output is completely wrong or insecure.     │  │ • Expensive at scale ($$$ on large suites).   │
│ • Example: A JSON object with hardcoded plain-│  │ • LLM judges suffer from statistical drift    │
│   text passwords passes `json.loads()` 10/10! │  │   and "grade inflation" (Anchoring Trap).     │
└───────────────────────────────────────────────┘  └───────────────────────────────────────────────┘
```

### The Engineering Solution: The Hybrid Grader Hierarchy

In professional AI systems, we implement a **two-tier hybrid grading architecture**:

```
                       ┌──────────────────────────────────────────────┐
                       │          Candidate Solution Output           │
                       └──────────────────────┬───────────────────────┘
                                              │
                       ┌──────────────────────┴──────────────────────┐
                       ▼                                             ▼
          ┌─────────────────────────┐                   ┌─────────────────────────┐
          │   Tier 1: Code Grader   │                   │   Tier 2: Model Grader  │
          │ (AST, JSON, Regex Check)│                   │    (LLM-as-a-Judge)     │
          ├─────────────────────────┤                   ├─────────────────────────┤
          │ • Latency: < 1 ms       │                   │ • Latency: 1.5 seconds  │
          │ • Cost: $0.00           │                   │ • Cost: ~$0.001 / check │
          │ • 100% Deterministic    │                   │ • Deep Semantic Review  │
          │ • Checks: Syntax & Specs│                   │ • Checks: Logic & Safety│
          │ • Score: 0.0 or 10.0    │                   │ • Score: 1.0 to 10.0    │
          └────────────┬────────────┘                   └────────────┬────────────┘
                       │                                             │
                       └──────────────────────┬──────────────────────┘
                                              ▼
                       ┌──────────────────────────────────────────────┐
                       │            Composite Final Score             │
                       │   Score = (Model Score + Syntax Score) / 2   │
                       └──────────────────────────────────────────────┘
```

---

## 2. 🛡️ Tier 1: Deterministic Code Graders (The Gatekeepers)

Before spending a penny on an LLM API call or waiting 2 seconds for a model judge, your pipeline must execute instantaneous, deterministic code validation.

### Grader A: The JSON Validator
If the test case requests `"format": "json"`, we verify whether the response can be parsed into valid JSON:

```python
import json

def validate_json(text: str) -> float:
    """Validates whether text is parseable JSON.
    Returns 10.0 for valid JSON, 0.0 for syntax errors."""
    try:
        json.loads(text.strip())
        return 10.0
    except (json.JSONDecodeError, TypeError):
        return 0.0
```

#### What Happens When an Amateur Prompt Fails:
Suppose a candidate prompt outputs:
```text
Here is your JSON configuration:
{
  "FunctionName": "ProcessInvoice",
  "Runtime": "python3.11"
}
```
When piped into `validate_json()`, Python raises:
```text
json.decoder.JSONDecodeError: Extra data: line 1 column 1 (char 0)
```
The validator catches the failure and immediately assigns **`0.0 / 10.0`**.

---

### Grader B: The Python AST Validator (The Safe Way to Test Code)

> [!CAUTION]
> **The Critical Security Pitfall: Never Use `eval()` or `exec()`**
> 
> Many beginners attempt to grade Python code by running `eval(output)` or `exec(output)`.
> **This is a severe security vulnerability!** If an adversarial test prompt tricks the model into generating `import os; os.system('rm -rf /')` or opening a reverse shell, `exec()` will execute malicious code inside your evaluation server!

#### The Professional Solution: Abstract Syntax Tree (AST) Parsing
Python provides a built-in module called `ast` (Abstract Syntax Tree). The function `ast.parse()` parses source code into a compiler syntax tree **without executing a single line of code**:

```python
import ast

def validate_python(code_str: str) -> float:
    """Parses code into an Abstract Syntax Tree to ensure valid syntax.
    Safe against malicious execution; returns 10.0 on success, 0.0 on syntax error."""
    try:
        ast.parse(code_str.strip())
        return 10.0
    except SyntaxError:
        return 0.0
```

#### Concrete AST Execution Example:

Let us compare two candidate outputs tested against `ast.parse`:

```python
# Test Case: "Write a function to extract AWS region from an ARN"

# Candidate Output 1 (Valid Syntax):
code_good = """
def get_region(arn):
    parts = arn.split(':')
    return parts[3] if len(parts) > 3 else ''
"""
print(validate_python(code_good))
# Output: 10.0 (Parsed successfully into <ast.Module object>)

# Candidate Output 2 (Malformed Syntax - unclosed bracket):
code_bad = """
def get_region(arn):
    parts = arn.split(':'
    return parts[3]
"""
print(validate_python(code_bad))
# Output: 0.0 (ast.parse caught SyntaxError: '(' was never closed)
```

Notice that `ast.parse()` catches the missing parenthesis in **0.1 milliseconds** with zero security exposure!

---

### Grader C: The Regex Validator
For regular expression tasks, we verify that the string compiles under Python's `re` engine without raising `re.error`:

```python
import re

def validate_regex(pattern: str) -> float:
    """Validates whether a regular expression pattern compiles successfully."""
    try:
        re.compile(pattern.strip())
        return 10.0
    except re.error:
        return 0.0
```

---

## 3. 🧠 Tier 2: Model-Based Graders (LLM-as-a-Judge)

Why can't we stop at deterministic code graders?

Consider this real candidate output for an AWS Lambda database configuration:
```json
{
  "FunctionName": "OrderHandler",
  "Environment": {
    "Variables": {
      "DB_USER": "admin",
      "DB_PASSWORD": "plaintext_password_123!"
    }
  }
}
```

What does our code grader say?
`validate_json()` parses it in 0.01 ms and awards **`10.0 / 10.0`**!

Yet from an AI Engineering perspective, this solution is a disaster:
1. It **failed the criteria**: It did not set `MemorySize` or `Timeout`.
2. It is a **security breach**: Hardcoding plaintext database credentials into environment variables violates AWS well-architected guidelines.

To grade semantic quality, security, and criteria compliance, we must employ an **LLM-as-a-Judge**.

---

### The Psychological Pathology: The "Anchoring Trap"

When novice engineers first build an LLM judge, they write a prompt like this:

```text
❌ THE AMATEUR JUDGE PROMPT:
"Please review the following code and assign it a score from 1 to 10."
```

#### What happens in production?
Frontier models will almost **always award a score of `7`**.

#### Why does the model default to 6 or 7?
LLMs are autoregressive token predictors trained on human internet text. Most content graded by humans on the internet (product reviews, movies, code snippets) clusters around a polite, average score of 6 or 7. If the model is asked for the number immediately, it regresses to this statistical mean ("anchoring").

```
                                Distribution of Uncalibrated Scores
                     ▲
                     │                    ████
                     │                  ████████
                     │                 ██████████
                     │              ██████████████
                     │              ██████████████
                     └────┬───┬───┬───┬───┬───┬───┬───┬───┬───►
                          1   2   3   4   5   6   7   8   9   10
                                              ▲
                                              │
                                 Over 75% of scores cluster
                                  at 6 or 7 ("Anchoring")
```

---

### The Professional Solution: Multi-Attribute Rubric & Reasoning Precedence

To eliminate the Anchoring Trap, we force the LLM judge to produce qualitative evidence **before** it is allowed to emit the numerical score:

1. `strengths`: Concrete elements the candidate executed correctly.
2. `weaknesses`: Specific criteria from the rubric that were violated or missed.
3. `reasoning`: A synthesized paragraph defending the evaluation.
4. `score`: The calibrated integer grade (1 to 10).

Because autoregressive models attend to all previously generated tokens, **the model is mathematically forced to read its own itemized weaknesses before selecting the score token!**

```python
def grade_by_model(test_case: dict, candidate_output: str) -> dict:
    """Evaluates candidate response using multi-attribute anchored LLM-as-a-Judge."""
    judge_prompt = f"""
You are an expert AWS Solutions Architect and code reviewer.
Your job is to rigorously evaluate an AI-generated solution against strict technical criteria.

Original Task:
<task>
{test_case["task"]}
</task>

Solution to Evaluate:
<solution>
{candidate_output}
</solution>

Evaluation Criteria:
<criteria>
{test_case["solution_criteria"]}
</criteria>

Output Format:
You must provide your evaluation as a valid JSON object with the following fields in EXACT order:
- "strengths": A list of 1-3 specific strengths of the solution.
- "weaknesses": A list of 1-3 specific omissions, bugs, or criteria violations.
- "reasoning": A clear 2-3 sentence technical justification.
- "score": An integer from 1 to 10 reflecting strictly whether the solution satisfied the criteria.

Respond ONLY with valid JSON.
"""
    messages = [
        {"role": "user", "content": judge_prompt},
        {"role": "assistant", "content": "```json"}
    ]
    
    response = client.messages.create(
        model="claude-3-5-haiku-20241022",
        max_tokens=1024,
        temperature=0.0,  # 🔑 Deterministic temperature for calibrated grading
        stop_sequences=["```"],
        messages=messages
    )
    
    return json.loads(response.content[0].text)
```

---

### Real-World Proof: The Calibrated Grade Output

Look at the actual JSON produced by our calibrated judge when evaluating the Lambda database configuration task:

```json
{
  "strengths": [
    "Correctly generates a valid JSON configuration object for AWS Lambda",
    "Properly specifies the Environment block with database connection variables"
  ],
  "weaknesses": [
    "Missing critical configuration fields explicitly requested in criteria: MemorySize and Timeout",
    "Severe security anti-pattern: Plaintext database passwords should not be hardcoded in environment variables; AWS Secrets Manager should be referenced"
  ],
  "reasoning": "While the output is valid JSON and sets up environment variables, it completely omits the required MemorySize and Timeout properties specified in the criteria. Furthermore, hardcoding plaintext credentials violates enterprise security practices.",
  "score": 5
}
```

**Look at the score: `5 / 10`.** 
Because the model articulated the missing timeout and plaintext password first, it could not give an unearned `7` or `8`!

---

## 4. 🔄 Dual-API Parity: Grader Implementation

=== "Anthropic Claude Implementation"
    ```python
    import json
    from anthropic import Anthropic

    client = Anthropic()

    def grade_with_claude(test_case: dict, output: str) -> dict:
        prompt = f"""Evaluate this solution:
Task: {test_case['task']}
Solution: {output}
Criteria: {test_case['solution_criteria']}

Format: JSON with strengths (list), weaknesses (list), reasoning (str), score (int 1-10)."""

        messages = [
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": "```json"}
        ]
        
        resp = client.messages.create(
            model="claude-3-5-haiku-20241022",
            max_tokens=1000,
            temperature=0.0,
            stop_sequences=["```"],
            messages=messages
        )
        return json.loads(resp.content[0].text)
    ```

=== "Google Gemini Implementation"
    ```python
    import json
    from pydantic import BaseModel, Field
    from google import genai
    from google.genai import types

    client = genai.Client()

    class ModelGrade(BaseModel):
        strengths: list[str] = Field(description="1-3 key technical strengths")
        weaknesses: list[str] = Field(description="1-3 key technical omissions or security defects")
        reasoning: str = Field(description="Detailed technical rationale for score")
        score: int = Field(ge=1, le=10, description="Numerical score between 1 and 10")

    def grade_with_gemini(test_case: dict, output: str) -> dict:
        prompt = f"""Evaluate this solution against criteria:
Task: {test_case['task']}
Solution: {output}
Criteria: {test_case['solution_criteria']}"""

        resp = client.models.generate_content(
            model="gemini-3.1-flash-lite",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=ModelGrade,
                temperature=0.0,
            ),
        )
        return json.loads(resp.text)
    ```

---

## 5. 🧑‍🏫 Professor's Key Takeaways

1. **Code graders are gatekeepers**: Run AST, JSON, and Regex checks first. They cost $\$0.00$ and take $<1\text{ ms}$.
2. **Never execute AI code with `eval()`**: Always use Python's `ast.parse()` to check syntax safely without arbitrary code execution vulnerabilities.
3. **Beware the Anchoring Trap**: LLMs asked for a score directly default to 7.
4. **Order matters in prompts**: Always force the model judge to emit `strengths`, `weaknesses`, and `reasoning` *before* the numerical `score`.

---

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--card-border);">
  <a href="../01-eval-framework/" style="font-weight: 600; text-decoration: none;">&larr; Back to Lecture 1: Evaluation Lifecycle</a>
  <a href="../03-composite-scoring-runner/" style="font-weight: 600; text-decoration: none;">Proceed to Lecture 3: Composite Scoring & Runner &rarr;</a>
</div>
