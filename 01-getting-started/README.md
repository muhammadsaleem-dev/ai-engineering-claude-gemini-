<div class="m01-hero">
  <div class="m01-badge-pill">
    <span class="arch-pulse-dot"></span>
    MODULE 01 FOUNDATIONS &bull; DUAL API ARCHITECTURE
  </div>
  <h1 class="m01-hero-title">API Architecture &amp; Controlled Output</h1>
  <p class="m01-hero-lead">
    Master foundational API connectivity, stateless multi-turn conversation loops, system steering, dynamic temperature sampling, Server-Sent Events (SSE) token streaming, and guaranteed JSON schema enforcement with Anthropic Claude and Google Gemini.
  </p>
  <div class="m01-stats-row">
    <span class="m01-stat-chip">⚡ Sub-Second TTFT</span>
    <span class="m01-stat-chip">🛡️ Zero Memory Leak Security</span>
    <span class="m01-stat-chip">🎯 100% Guaranteed JSON</span>
    <span class="m01-stat-chip">💻 12 Companion Notebooks</span>
    <span class="m01-stat-chip">🚀 End-to-End Capstone</span>
  </div>
</div>

---

## Model Selection & Architecture Guide

Choosing the right model tier is the foundation of production AI engineering. Each request balances intelligence depth against latency and cost budgets.

<div class="model-card-grid">
  <div class="model-tier-card featured-tier">
    <span class="model-tier-badge badge-default">RECOMMENDED DEFAULT &bull; 90% OF WORKLOADS</span>
    <h3 class="model-card-title">Claude 3.7 Sonnet</h3>
    <div class="model-companion-tag">Gemini Companion: <strong>Gemini 2.5 Flash</strong></div>
    <div class="model-metric-row">
      <span>Intelligence Tier</span>
      <span class="model-metric-val">High (Frontier)</span>
    </div>
    <div class="model-metric-row">
      <span>Latency (TTFT)</span>
      <span class="model-metric-val">~0.7s (Fast)</span>
    </div>
    <div class="model-metric-row">
      <span>Cost Profile</span>
      <span class="model-metric-val">Balanced ($$)</span>
    </div>
    <p class="model-workload-desc">
      Your primary engine for daily software engineering, tool execution, multi-turn reasoning, and production RAG pipelines.
    </p>
  </div>

  <div class="model-tier-card">
    <span class="model-tier-badge badge-speed">HIGH-THROUGHPUT &bull; REAL-TIME</span>
    <h3 class="model-card-title">Claude 3.5 Haiku</h3>
    <div class="model-companion-tag">Gemini Companion: <strong>Gemini 2.5 Flash-Lite</strong></div>
    <div class="model-metric-row">
      <span>Intelligence Tier</span>
      <span class="model-metric-val">Moderate</span>
    </div>
    <div class="model-metric-row">
      <span>Latency (TTFT)</span>
      <span class="model-metric-val">&lt; 0.4s (Ultra-fast)</span>
    </div>
    <div class="model-metric-row">
      <span>Cost Profile</span>
      <span class="model-metric-val">Ultra-Low ($)</span>
    </div>
    <p class="model-workload-desc">
      Engineered for classification, autocomplete, ticket triage, high-concurrency streaming, and cost-sensitive background workers.
    </p>
  </div>

  <div class="model-tier-card">
    <span class="model-tier-badge badge-power">DEEP REASONING &bull; SYSTEM ARCHITECTURE</span>
    <h3 class="model-card-title">Claude 3 Opus</h3>
    <div class="model-companion-tag">Gemini Companion: <strong>Gemini 2.5 Pro</strong></div>
    <div class="model-metric-row">
      <span>Intelligence Tier</span>
      <span class="model-metric-val">Maximum</span>
    </div>
    <div class="model-metric-row">
      <span>Latency (TTFT)</span>
      <span class="model-metric-val">~1.5s (Moderate)</span>
    </div>
    <div class="model-metric-row">
      <span>Cost Profile</span>
      <span class="model-metric-val">Premium ($$$)</span>
    </div>
    <p class="model-workload-desc">
      Reserved for deep multi-agent planning, hard mathematical reasoning, massive codebase refactoring, and complex analysis.
    </p>
  </div>
</div>

---

## Module Curriculum & Learning Objectives

### Part 1: API Fundamentals and First Steps
- [x] **Overview of Models**: Architecture tiers (Sonnet, Haiku, Opus) and selection trade-offs
- [x] **Working with the API**: Authentication, secure backend boundaries, and token economics
- [x] **Making Authenticated Requests**: Initializing client SDKs, prompt payloads, and `max_tokens` limits
- [x] **Multi-Turn Conversations**: Stateless API nature, maintaining history arrays, and role alternation
- [x] **Building an Interactive Chatbot**: Continuous conversation loop in Jupyter with empty-input guards
- [x] **Assessment & Dialogue**: Graded evaluation and tutor dialogue review

### Part 2: Controlling Model Output
- [x] **System Prompts**: Persona definition, brand boundaries, and legal guardrails
- [x] **Prompt Steering Exercise**: Token compression and concise code generation
- [x] **Temperature Tuning**: Sampling randomness (deterministic `0.0` vs. exploratory `1.0`)
- [x] **Real-World Triage Scenario**: Customer support specialist with dynamic temperature routing
- [x] **Response Streaming**: Sub-second TTFT via Server-Sent Events (SSE)
- [x] **Controlled Sampling Boundaries**: `max_tokens`, `stop_sequences`, `top_k`, and `top_p`
- [x] **Structured Output & JSON Mode**: Assistant prefilling (Claude) and Pydantic schemas (Gemini)
- [x] **Structured Data Exercise**: Parsing, validation, and extraction (AWS CLI Commands)
- [x] **Module 01 Capstone**: Customer Support & Ticket Triage Engine with automated actions

---

## Practical Notebooks & Reference Materials

| Notebook | Focus | Platform & Cost |
| :--- | :--- | :--- |
| [001-claude-requests.ipynb](001-claude-requests.ipynb) | Single-turn & multi-turn requests with `messages.create()` | Anthropic Claude API |
| [001-gemini-requests.ipynb](001-gemini-requests.ipynb) | Zero-cost companion implementation with `generate_content()` | Google Gemini Free Tier |
| [002-claude-chatbot-exercise.ipynb](002-claude-chatbot-exercise.ipynb) | Continuous conversational state loop with session history | Anthropic Claude API |
| [002-gemini-chatbot-exercise.ipynb](002-gemini-chatbot-exercise.ipynb) | Interactive notebook chatbot using `chats.create()` | Google Gemini Free Tier |
| [003-claude-system-prompts.ipynb](003-claude-system-prompts.ipynb) | System prompts, persona steering, and dynamic parameter packing | Anthropic Claude API |
| [003-gemini-system-prompts.ipynb](003-gemini-system-prompts.ipynb) | Native `system_instruction` configuration companion | Google Gemini Free Tier |
| [004-claude-temperature.ipynb](004-claude-temperature.ipynb) | Temperature scaling and nucleus sampling randomness | Anthropic Claude API |
| [004-gemini-temperature.ipynb](004-gemini-temperature.ipynb) | Temperature configuration and reproducibility companion | Google Gemini Free Tier |
| [005-claude-streaming.ipynb](005-claude-streaming.ipynb) | Server-Sent Events (SSE) token streaming via `messages.stream` | Anthropic Claude API |
| [005-gemini-streaming.ipynb](005-gemini-streaming.ipynb) | Streaming companion with `chat.send_message_stream` | Google Gemini Free Tier |
| [006-claude-controlling-output.ipynb](006-claude-controlling-output.ipynb) | Guaranteed JSON output via assistant prefilling & stop sequences | Anthropic Claude API |
| [006-gemini-controlling-output.ipynb](006-gemini-controlling-output.ipynb) | Native JSON Mode with Pydantic BaseModel schemas | Google Gemini Free Tier |
| [case-study.ipynb](case-study.ipynb) | **Capstone Project**: E-Commerce AI Support & Ticket Triage Engine | Dual-Engine Capstone |
| [module-01-dialogue-review.md](module-01-dialogue-review.md) | Interactive Dialogue Assessment & Cheat-Sheet | Study Reference Guide |

---

## The End-to-End API Request Lifecycle

Understanding the end-to-end request lifecycle is essential for building robust AI architectures and diagnosing latency bottlenecks.

<div class="lifecycle-wrapper">
  <div class="lifecycle-steps">
    <div class="lifecycle-step-card">
      <div class="step-num-pill">1</div>
      <div>
        <div class="step-body-title">Client UI (Web or Mobile)</div>
        <div class="step-body-desc">User submits input prompt. No API secrets live on this device.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">2</div>
      <div>
        <div class="step-body-title">Application Backend Server (Secure Zone)</div>
        <div class="step-body-desc">Injects secret API keys, retrieves user session history from Redis/PostgreSQL, binds system guardrails, and sets sampling parameters.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">3</div>
      <div>
        <div class="step-body-title">API Gateway &amp; Authentication</div>
        <div class="step-body-desc">Anthropic or Google endpoint verifies API headers, applies rate limits, and routes the payload to GPU inference clusters.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">4</div>
      <div>
        <div class="step-body-title">Inference Engine (4-Stage Generation)</div>
        <div class="step-body-desc">
          <strong>Tokenization</strong> (text &rarr; subword IDs) &rarr;
          <strong>Embeddings</strong> (high-dimensional vector mapping) &rarr;
          <strong>Self-Attention Layers</strong> (context resolution) &rarr;
          <strong>Sequential Token Generation</strong> (next-token probability sampling).
        </div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">5</div>
      <div>
        <div class="step-body-title">Stop Condition Evaluation</div>
        <div class="step-body-desc">Generation halts when encountering an End-of-Sequence token (<code>end_turn</code>), hitting <code>max_tokens</code> ceiling, or matching a custom <code>stop_sequence</code>.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">6</div>
      <div>
        <div class="step-body-title">Payload Delivery &amp; Real-Time UI Render</div>
        <div class="step-body-desc">Tokens are flushed to the client over Server-Sent Events (SSE) or WebSockets with usage telemetry (input/output tokens).</div>
      </div>
    </div>
  </div>
</div>

---

## Multi-Turn Conversations & API Statelessness

### The Core Principle: LLM APIs Have Zero Memory
Neither the Anthropic API (Claude) nor Google Gemini stores your past requests or generated outputs on their servers. **Every API call is 100% stateless and isolated.**

<div class="compare-grid">
  <div class="compare-card compare-bad">
    <div class="compare-header">
      <span>❌</span>
      <span>Without History (Stateless Failure)</span>
    </div>
    <p><strong>Turn 1</strong>: <code>"Define quantum computing in one sentence."</code><br>
    &rarr; <em>"Quantum computing uses qubits to perform calculations..."</em></p>
    <p><strong>Turn 2</strong>: <code>"Write another sentence."</code><br>
    &rarr; <em>"The blue whale is the largest animal on Earth."</em> (Total amnesia!)</p>
  </div>

  <div class="compare-card compare-good">
    <div class="compare-header">
      <span>✅</span>
      <span>With Cumulative History (Contextual Continuity)</span>
    </div>
    <p><strong>Turn 1</strong>: <code>"Define quantum computing in one sentence."</code><br>
    &rarr; <em>"Quantum computing uses qubits to perform calculations..."</em></p>
    <p><strong>Turn 2</strong>: <code>[Turn 1 Q&amp;A + "Write another sentence."]</code><br>
    &rarr; <em>"Unlike classical bits, qubits leverage superposition."</em> (Context preserved!)</p>
  </div>
</div>

### Dual SDK Implementation Patterns

=== "Anthropic Claude"

    ```python
    import anthropic

    client = anthropic.Anthropic()
    messages = []

    def add_user_message(messages, text):
        messages.append({"role": "user", "content": text})

    def add_assistant_message(messages, text):
        messages.append({"role": "assistant", "content": text})

    def chat(messages):
        response = client.messages.create(
            model="claude-3-7-sonnet-20250219",
            max_tokens=1000,
            messages=messages,
        )
        return response.content[0].text
    ```

=== "Google Gemini"

    ```python
    from google import genai

    client = genai.Client()
    messages = []

    def add_user_message(messages, text):
        messages.append({"role": "user", "parts": [{"text": text}]})

    def add_model_message(messages, text):
        messages.append({"role": "model", "parts": [{"text": text}]})

    def chat(messages):
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=messages,
            config={"max_output_tokens": 1000},
        )
        return response.text
    ```

---

## Exercise: Interactive Notebook Chatbot Engine

The course exercise demonstrates a continuous conversational loop directly inside a Jupyter notebook cell.

### The 6-Step Conversational State Loop

<div class="lifecycle-steps">
  <div class="lifecycle-step-card">
    <div class="step-num-pill">1</div>
    <div>
      <div class="step-body-title">Prompt User Input</div>
      <div class="step-body-desc">Captures user text via <code>user_input = input("&gt; ")</code>.</div>
    </div>
  </div>

  <div class="lifecycle-step-card">
    <div class="step-num-pill">2</div>
    <div>
      <div class="step-body-title">Input Sanitization &amp; Empty Turn Defense</div>
      <div class="step-body-desc">Validates <code>if not user_input.strip(): continue</code> to prevent terminal 400 validation errors.</div>
    </div>
  </div>

  <div class="lifecycle-step-card">
    <div class="step-num-pill">3</div>
    <div>
      <div class="step-body-title">Append User Turn to History</div>
      <div class="step-body-desc">Appends <code>add_user_message(messages, user_input)</code> to maintain chronological session memory.</div>
    </div>
  </div>

  <div class="lifecycle-step-card">
    <div class="step-num-pill">4</div>
    <div>
      <div class="step-body-title">Dispatch Full Cumulative History</div>
      <div class="step-body-desc">Calls <code>answer = chat(messages)</code> with the entire conversation array.</div>
    </div>
  </div>

  <div class="lifecycle-step-card">
    <div class="step-num-pill">5</div>
    <div>
      <div class="step-body-title">Append Model Response &amp; Render</div>
      <div class="step-body-desc">Saves <code>add_assistant_message(messages, answer)</code> and renders output between delimiters.</div>
    </div>
  </div>

  <div class="lifecycle-step-card">
    <div class="step-num-pill">6</div>
    <div>
      <div class="step-body-title">Loop Return (while True)</div>
      <div class="step-body-desc">Returns to Step 1 until interrupted or user inputs <code>"exit"</code>.</div>
    </div>
  </div>
</div>

```python
messages = []

while True:
    user_input = input("> ")
    print(">", user_input)

    # Graceful exit trigger
    if user_input.strip().lower() in ("exit", "quit"):
        print("Session terminated.")
        break

    # Crucial input guard: Discard accidental empty returns
    if not user_input.strip():
        continue

    add_user_message(messages, user_input)
    answer = chat(messages)
    add_assistant_message(messages, answer)

    print("---")
    print(answer)
    print("---")
```

---

## System Prompts: Persona & Behavioral Boundaries

System prompts provide meta-level instructions that define the model's persona, tone, guardrails, and behavioral boundaries before conversational turns begin.

### Case Study: Concise Code Generation (93% Token Reduction)

<div class="compare-grid">
  <div class="compare-card compare-bad">
    <div class="compare-header">
      <span>Default Prompt (No System Instructions)</span>
    </div>
    <p><code>"Write a Python function that checks a string for duplicate characters."</code></p>
    <p><strong>Result</strong>: Over <strong>1,300+ characters</strong>. Lengthy introductory essay, complex docstrings, multiple algorithmic approaches, and concluding analysis.</p>
  </div>

  <div class="compare-card compare-good">
    <div class="compare-header">
      <span>With System Prompt ("Concise Python Engineer")</span>
    </div>
    <p><code>system = "You are a Python engineer who writes very concise code"</code></p>
    <p><strong>Result</strong>: Under <strong>90 characters</strong> (93% token reduction!):</p>
    <code>def has_duplicates(s: str) -&gt; bool: return len(s) != len(set(s))</code>
  </div>
</div>

### SDK Gotcha: Dynamic Parameter Unpacking in Claude
In the Anthropic Python SDK, passing `system=None` throws a validation error. Construct dynamic parameter dictionaries:

```python
def chat(messages, system=None):
    params = {
        "model": "claude-3-7-sonnet-20250219",
        "max_tokens": 1000,
        "messages": messages,
    }
    if system:
        params["system"] = system

    message = client.messages.create(**params)
    return message.content[0].text
```

---

## Temperature: Controlling Output Randomness

Temperature is a float value between `0.0` and `1.0` that governs the probability distribution when sampling next tokens.

| Temperature Tier | Probability Distribution | Optimal Real-World Use Cases |
| :--- | :--- | :--- |
| **Low (`0.0 - 0.2`)** | **Greedy &amp; Deterministic**<br>Sharply peaks highest-probability tokens | • Code generation &amp; automated debugging<br>• Structured JSON extraction &amp; schema parsing<br>• Policy compliance &amp; ticket triage |
| **Medium (`0.4 - 0.7`)** | **Balanced &amp; Coherent**<br>Smooth probability curve | • General dialogue &amp; customer support<br>• Document summarization &amp; educational Q&amp;A<br>• Technical explanation synthesis |
| **High (`0.8 - 1.0`)** | **Creative &amp; Exploratory**<br>Flattens candidate distribution | • Brainstorming novel product concepts<br>• Marketing copy variants &amp; headline generation<br>• Creative writing &amp; roleplay |

---

## Real-World Architecture: Customer Support Specialist Service

In production backends, **System Prompting** and **Temperature** work as two complementary control axes:

1. **System Prompt** = The **Rulebook & Guardrails** (Who the model is, what it knows, what it must NEVER reveal).
2. **Temperature** = The **Creativity Dial** (Deterministic adherence for orders vs. exploratory recommendations).

### Dynamic Intent Routing Pattern

```python
def handle_customer_query(client, messages, intent="factual"):
    system_prompt = (
        "You are an empathetic customer support specialist for an e-commerce platform. "
        "Always prioritize solving the customer's problem while strictly defending company policy. "
        "Never issue cash refunds exceeding $50. Never disclose internal staff email addresses."
    )

    # Route temperature based on intent classification
    temperature = 0.1 if intent == "factual" else 0.7

    response = client.messages.create(
        model="claude-3-7-sonnet-20250219",
        max_tokens=1000,
        system=system_prompt,
        temperature=temperature,
        messages=messages,
    )
    return response.content[0].text
```

---

## Response Streaming: Real-Time Token Generation

### Eliminating Frozen Screens with Sub-Second TTFT
In standard synchronous calls, generation blocks completely until the model completes its response (often 10–25 seconds). Response streaming delivers immediate visual feedback.

### Server-Sent Events (SSE) Stream Lifecycle

<div class="sse-flow-grid">
  <div class="sse-node">
    <div class="sse-badge">STAGE 1</div>
    <div class="sse-title">RawMessageStartEvent</div>
    <div class="sse-desc">Emitted immediately upon acceptance. Contains message ID, model name, and initial role.</div>
  </div>

  <div class="sse-node">
    <div class="sse-badge">STAGE 2</div>
    <div class="sse-title">RawContentBlockStartEvent</div>
    <div class="sse-desc">Marks the beginning of a content block (text or tool call).</div>
  </div>

  <div class="sse-node sse-highlight">
    <div class="sse-badge">STAGE 3 (REPEATED)</div>
    <div class="sse-title">RawContentBlockDeltaEvent</div>
    <div class="sse-desc">⭐ Carries the actual generated token fragments. Flushed immediately to the UI.</div>
  </div>

  <div class="sse-node">
    <div class="sse-badge">STAGE 4</div>
    <div class="sse-title">RawContentBlockStopEvent</div>
    <div class="sse-desc">Signals that the current block has finished generating.</div>
  </div>

  <div class="sse-node">
    <div class="sse-badge">STAGE 5</div>
    <div class="sse-title">RawMessageDeltaEvent</div>
    <div class="sse-desc">Carries stop reason (<code>end_turn</code>, <code>stop_sequence</code>) and final token usage stats.</div>
  </div>

  <div class="sse-node">
    <div class="sse-badge">STAGE 6</div>
    <div class="sse-title">RawMessageStopEvent</div>
    <div class="sse-desc">Formal socket closure event signaling complete stream termination.</div>
  </div>
</div>

### Streaming Code Implementations

=== "Anthropic Claude (messages.stream)"

    ```python
    with client.messages.stream(
        model="claude-3-7-sonnet-20250219",
        max_tokens=1000,
        messages=messages,
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)

    # Accumulate complete message for database logging
    final_message = stream.get_final_message()
    print("\nTokens consumed:", final_message.usage.output_tokens)
    ```

=== "Google Gemini (send_message_stream)"

    ```python
    chat = client.chats.create(model="gemini-2.5-flash")

    response = chat.send_message_stream(
        "Explain quantum computing in two sentences."
    )
    for chunk in response:
        print(chunk.text, end="", flush=True)

    print("\nTotal turns stored:", len(chat.get_history()))
    ```

---

## Structured Data Generation: Assistant Prefilling & Native Schemas

Applications connecting LLMs to databases, CRMs, and APIs require raw, strictly validated JSON with **zero conversational filler**.

### The 4-Stage Assistant Prefilling Pipeline (Claude)

Claude allows developers to **end the `messages` list with an `assistant` turn**. When Claude receives an unfinished assistant message, it continues generating directly from that exact token sequence:

<div class="prefill-flow-container">
  <div class="prefill-stages">
    <div class="prefill-stage-row">
      <span class="prefill-tag tag-user">USER TURN</span>
      <span class="prefill-text"><code>"Generate an EventBridge rule for EC2 state changes as JSON"</code></span>
    </div>

    <div class="prefill-stage-row">
      <span class="prefill-tag tag-assistant">ASSISTANT PREFILL</span>
      <span class="prefill-text">Developer injects <code>{"role": "assistant", "content": '{\n  "source":'}</code> &bull; <em>Claude cannot produce intro chatter because the JSON object is already open!</em></span>
    </div>

    <div class="prefill-stage-row">
      <span class="prefill-tag tag-model">TOKEN GENERATION</span>
      <span class="prefill-text">Claude generates pure key-value pairs directly into the open schema.</span>
    </div>

    <div class="prefill-stage-row">
      <span class="prefill-tag tag-stop">STOP SEQUENCE</span>
      <span class="prefill-text">Developer sets <code>stop_sequences=['}']</code> &bull; Claude terminates immediately upon closing the root object, cutting off any closing explanations.</span>
    </div>
  </div>
</div>

### Dual Structured Output Implementations

=== "Anthropic Claude (Prefilling & Stop Sequences)"

    ```python
    messages = [
        {"role": "user", "content": "Generate an EventBridge rule for EC2 state changes as JSON"},
        {"role": "assistant", "content": '{\n  "source": ["aws.ec2"],\n  "detail-type":'}
    ]

    response = client.messages.create(
        model="claude-3-7-sonnet-20250219",
        max_tokens=256,
        temperature=0.0,
        stop_sequences=['}'],
        messages=messages
    )

    clean_json = '{\n  "source": ["aws.ec2"],\n  "detail-type":' + response.content[0].text + '}'
    import json
    data = json.loads(clean_json)
    ```

=== "Google Gemini (Pydantic Native Schema)"

    ```python
    from google import genai
    from google.genai import types
    from pydantic import BaseModel, Field

    class EventBridgeRule(BaseModel):
        source: list[str] = Field(description="AWS source service")
        detail_type: list[str] = Field(description="Event detail type")

    config = types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=EventBridgeRule,
        temperature=0.0
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Generate an EventBridge rule for EC2 state changes as JSON",
        config=config
    )

    import json
    data = json.loads(response.text)
    ```

---

## Complete Blueprint: Automated Support & Ticket Triage Engine

In real-world applications, **all 5 techniques you learned in Module 1 work together in a unified architecture**:

<div class="arch-flow-wrapper">
  <div class="arch-flow-header">
    <div>
      <span class="arch-pulse-badge">
        <span class="arch-pulse-dot"></span>
        PIPELINE BLUEPRINT
      </span>
      <h3 class="arch-title">Customer Support &amp; Triage Engine</h3>
    </div>
    <a href="case-study/" class="arch-btn-action">
      <span>Launch Interactive Capstone</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>

  <div class="lifecycle-steps">
    <div class="lifecycle-step-card">
      <div class="step-num-pill">1</div>
      <div>
        <div class="step-body-title">Incoming Customer Request</div>
        <div class="step-body-desc"><em>"Hi, my package was supposed to arrive yesterday, but order #8492 is still stuck in transit. Cancel it and refund me right now!"</em></div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">2</div>
      <div>
        <div class="step-body-title">Backend Session Continuity &amp; Guardrails</div>
        <div class="step-body-desc">Loads previous turn context, binds corporate refund boundaries ($50 max), and selects deterministic temperature (0.0).</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">3</div>
      <div>
        <div class="step-body-title">Token-Streamed Response (Sub-second TTFT)</div>
        <div class="step-body-desc">Customer sees empathetic stream response within 0.8s explaining carrier delay and policy boundaries.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">4</div>
      <div>
        <div class="step-body-title">Post-Turn Structured Extraction</div>
        <div class="step-body-desc">Assistant prefill / Native JSON mode outputs strictly validated ticket payload: <code>{"order_id": 8492, "sentiment": "angry", "escalate": true}</code>.</div>
      </div>
    </div>

    <div class="lifecycle-step-card">
      <div class="step-num-pill">5</div>
      <div>
        <div class="step-body-title">Automated CRM &amp; Database Actions</div>
        <div class="step-body-desc">Dispatches high-priority ticket to Zendesk and flags order #8492 for warehouse carrier review in PostgreSQL.</div>
      </div>
    </div>
  </div>
</div>

---

## 🚀 Next Steps

Continue to the **[Module 01 Summary & Next Steps Guide](next-steps.md)** to review core takeaways, explore practice projects, and prepare for **Module 02: Prompt Engineering & Evaluation**.
