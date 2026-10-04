# Part 2.1 — Core Prompt Engineering: Clarity, Directives, and Specificity

> **Curriculum Unit**: Module 02 — Section 2: Prompt Engineering Techniques  
> **Topic**: Eliminating Ambiguity, Imperative Directives, Persona Architecture, and Numerical Boundary Constraints  
> **Dual API Parity**: Anthropic Claude (`claude-3-5-haiku`) & Google Gemini (`gemini-2.5-flash`)

---

## 1. The Engineering Discipline vs. "Prompt Guessing"

Most engineers approaching Large Language Models for the first time fall into the **"Prompt Guessing" anti-pattern**:
1. Write a conversational request (*"Write a workout plan"*).
2. Look at a single output in a playground interface.
3. Tweak an adjective (*"Write a really good, intense workout plan"*).
4. Repeat until one output looks acceptable, then ship to production.

In production software systems, this trial-and-error approach fails catastrophically:
- **Silent Regressions**: Changing a phrasing that fixes an edge case frequently degrades compliance on 30% of normal inputs.
- **Unbounded Variance**: Conversational, open-ended prompts cause model responses to swing between 150 and 1,200 tokens, breaking frontend layouts and blowing up API token budgets.
- **Hallucinated Omissions**: When a model is not explicitly required to compute or include a field (e.g., daily calorie totals or allergen checks), it silently drops it whenever attention is drawn to another topic.

```
                  THE PROMPT ENGINEERING REGRESSION LOOP
                  
  ┌──────────────────────────────────────────────────────────────┐
  │ 1. FORMULATE HYPOTHESIS                                      │
  │    "Adding an explicit persona and imperative verbs will     │
  │     eliminate generic introductory filler."                  │
  └──────────────────────────────┬───────────────────────────────┘
                                 │
                                 ▼
  ┌──────────────────────────────────────────────────────────────┐
  │ 2. TARGETED PROMPT TRANSFORMATION                            │
  │    Apply: Clarity & Directives ──> Concrete Constraints      │
  └──────────────────────────────┬───────────────────────────────┘
                                 │
                                 ▼
  ┌──────────────────────────────────────────────────────────────┐
  │ 3. AUTOMATED BENCHMARK EVALUATION                            │
  │    Execute Candidate against 50-case Golden Test Suite       │
  │    Run Deterministic Syntax Graders + LLM-as-a-Judge         │
  └──────────────────────────────┬───────────────────────────────┘
                                 │
                                 ▼
  ┌──────────────────────────────────────────────────────────────┐
  │ 4. STATISTICAL TRIAGE & REGRESSION CHECK                     │
  │    • Pass Rate Delta: +24.0%                                 │
  │    • Average Score: 5.4 ──> 7.8 / 10                         │
  │    • Regressions: 0 detected across previously passed cases  │
  └──────────────────────────────────────────────────────────────┘
```

---

## 2. Principle 1: Being Clear & Direct

The first foundational law of prompt engineering is **clarity and directness**:
> *"State your requirements directly using strong, imperative verbs. Eliminate conversational preamble, avoid vague requests, and establish a specialized professional role."*

### Why Models Stumble on Polite Ambiguity
LLMs are autoregressive token predictors trained on vast internet corpora. When you open a prompt with conversational filler:
- *"I was wondering if you might know something about fitness workouts..."*
- *"Do you think you could maybe help me write a plan?"*

The model predicts completion tokens matching casual internet forums or chat rooms. The response is predictably filled with polite disclaimers, conversational pleasantries, and superficial recommendations.

### The Imperative Directives Pattern
Replace conversational suggestions with direct, imperative command verbs:

| Weak, Vague Phrasing | Strong, Imperative Phrasing |
| :--- | :--- |
| *"Can you talk about why the sales dropped?"* | **"Analyze the quarterly sales drop by comparing current vs. previous market metrics."** |
| *"I need some ideas for a workout plan."* | **"Create a 30-minute structured workout plan for beginners focusing on bodyweight mobility."** |
| *"Try to keep it short if you can."* | **"Limit the response to exactly 3 bullet points, under 150 words total."** |
| *"Make sure you don't use dairy."* | **"Strictly exclude all dairy and lactose-containing ingredients; zero tolerance for milk, butter, or whey."** |

### Persona Architecture: The Role Pattern
Establishing a precise role narrows the model's latent probability space to specialized vocabulary and established industry methodologies.

=== "Anthropic Claude (Messages API)"
    ```python
    import os
    from anthropic import Anthropic

    client = Anthropic()

    response = client.messages.create(
        model="claude-3-5-haiku-latest",
        max_tokens=800,
        temperature=0.2,
        # Set explicit role in the top-level system parameter
        system="You are an elite sports performance dietitian specializing in athletic macronutrient programming.",
        messages=[
            {
                "role": "user",
                "content": "Generate a single-day performance meal plan for a 74kg competitive boxer cutting weight."
            }
        ]
    )
    print(response.content[0].text)
    ```

=== "Google Gemini (google-genai SDK)"
    ```python
    import os
    from google import genai
    from google.genai import types

    client = genai.Client()

    config = types.GenerateContentConfig(
        temperature=0.2,
        # Set explicit role in the system_instruction configuration
        system_instruction="You are an elite sports performance dietitian specializing in athletic macronutrient programming."
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Generate a single-day performance meal plan for a 74kg competitive boxer cutting weight.",
        config=config
    )
    print(response.text)
    ```

---

## 3. Principle 2: Being Specific & Adding Concrete Constraints

The second foundational law is **specificity**:
> *"Never leave units, lengths, timing, or format to the model's imagination. Provide a numbered list of concrete, verifiable guidelines."*

### The 4 Pillars of Prompt Specificity

```
┌────────────────────────────────────────────────────────┐
│                   PILLARS OF SPECIFICITY               │
├────────────────────┬───────────────────────────────────┤
│ 1. Numerical Bounds│ Exact calorie targets, word caps, │
│                    │ portion weights in grams (g)      │
├────────────────────┼───────────────────────────────────┤
│ 2. Temporal Metrics│ Clock times for meal windows      │
│                    │ (e.g., 07:00 AM, 12:30 PM)        │
├────────────────────┼───────────────────────────────────┤
│ 3. Structural Rules│ Number of meals (minimum 4),      │
│                    │ required header hierarchy         │
├────────────────────┼───────────────────────────────────┤
│ 4. Negative Guard  │ Explicit prohibition of specific  │
│    Rails           │ ingredients or unauthorized terms │
└────────────────────┴───────────────────────────────────┘
```

### Concrete Code Walkthrough: Transforming the Prompt

Let's observe the prompt diff between an unconstrained prompt and an engineered prompt evaluated against an automated benchmark.

#### ❌ The Vague Candidate (Baseline Score: 2.3 / 10)
```python
prompt_v0 = f"""
Generate a meal plan for an athlete.
Height: {athlete['height']}
Weight: {athlete['weight']}
Goal: {athlete['goal']}
Restrictions: {athlete['restrictions']}
"""
```
**Why it fails automated evals**:
- Generates generic recipes without calculating total daily caloric expenditure.
- Fails to specify macronutrient grams (protein/carbs/fat).
- Omits meal timing schedules.
- Often suggests foods containing allergens (e.g., suggesting yogurt for a lactose-intolerant athlete because it "didn't realize" yogurt is dairy).

#### ✅ The Specific & Constrained Candidate (Score: 7.8 / 10)
```python
prompt_v2 = f"""
Generate a structured, single-day athletic meal plan designed specifically for the following athlete profile:

Athlete Profile:
- Height: {athlete['height']}
- Weight: {athlete['weight']}
- Primary Goal: {athlete['goal']}
- Dietary Restrictions: {athlete['restrictions']}

Follow these specific guidelines:
1. Caloric Calculation: State the calculated daily calorie target appropriate for the athlete's mass and training stimulus.
2. Macronutrient Breakdown: State daily totals for protein, carbohydrates, and dietary fats in exact grams (g).
3. Meal Schedule: Divide the day into at least 4 distinct eating windows with exact clock times (e.g., 07:30 AM Breakfast, 12:30 PM Lunch).
4. Portion Sizes: List every single food ingredient with its exact portion weight in grams (g).
5. Dietary Safety: Strict zero-tolerance for any ingredient violating the stated restrictions; never suggest prohibited items or common cross-contaminants.
6. Ingredient Quality: Prioritize nutrient-dense, recovery-promoting whole foods tailored to the athlete's sport.
"""
```

---

## 4. Production Failure Story: The OOM Memory Crash

In a production sports nutrition platform, an unconstrained prompt was deployed to generate weekly recipe books.
- **The Bug**: The prompt instructed: *"Write recipes for the whole week with detailed instructions."*
- **The Incident**: On Monday morning, 5,000 concurrent user requests were processed. Because no word caps or section bounds were provided, Claude generated expansive 3,500-token culinary treatises for each day of the week.
- **The Fallout**:
  1. Downstream PDF rendering services ran out of memory (OOM) trying to render 40-page booklets instead of 4-page summaries.
  2. Latency spiked from 1.8 seconds to 34 seconds per request.
  3. API token consumption increased by 420%, exhausting the company's monthly API tier quota in 6 hours.
- **The Fix**: Adding two lines of strict specificity:
  ```
  Constraints:
  1. Format: Exactly 7 daily tables, maximum 150 words per day.
  2. Maximum output length: strictly under 1,200 tokens total.
  ```

---

## 5. Architectural Checklist Before Moving to XML Structuring

Before advancing to XML tags and few-shot exemplars, ensure every prompt in your production codebase satisfies:

- [ ] **Imperative Task Verb**: Begins with *"Generate"*, *"Analyze"*, *"Extract"*, or *"Validate"*, never polite queries.
- [ ] **Persona Decoupling**: High-level role is defined in `system` (Claude) or `system_instruction` (Gemini).
- [ ] **Quantified Boundaries**: Explicit word caps, item counts, or numerical ranges.
- [ ] **Temporal / Format Anchors**: Output format and timing schedules explicitly enumerated.
- [ ] **Negative Constraints**: Explicitly forbids prohibited outputs or dangerous edge-case violations.
