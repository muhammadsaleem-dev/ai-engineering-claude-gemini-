# Module 01: Getting Started with LLM APIs

This module covers foundational API connectivity, request lifecycles, and core parameter configuration.

---

## Model Selection & Architecture Guide

| Model | Intelligence Tier | Latency & Cost | Production Workload | Gemini Companion |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Opus** | Flagship Reasoning | Moderate · Premium ($$$) | System architecture, deep analysis, complex multi-agent logic | **Gemini Pro** |
| **Claude Sonnet** | Balanced Intelligence (Default 90%) | Fast · Balanced ($$) | Daily software engineering, RAG pipelines, tool execution | **Gemini Flash** |
| **Claude Haiku** | High Throughput | Sub-second · Ultra-low ($) | Autocomplete, classification, content moderation, streaming triage | **Gemini Flash-Lite** |

### Model Selection Framework
1. **Default to Sonnet (or Gemini Flash)**: Start here for almost every project. It delivers near-flagship intelligence at a fraction of the cost and latency.
2. **Step down to Haiku (or Flash-Lite)**: If you need ultra-low latency, real-time responses, or are processing high volumes on a budget.
3. **Step up to Opus (or Gemini Pro)**: Only when Sonnet struggles with exceptionally complex logic, massive codebases, or complex multi-agent planning.

---

## Module Curriculum & Learning Objectives

### Part 1: API Fundamentals and First Steps (Completed)
- [x] **Overview of Claude Models**: Model tiers (Opus, Sonnet, Haiku) & decision guide
- [x] **Working with the API**: Authentication, 7-stage request lifecycle, token economics
- [x] **Making a Request**: Initializing client, sending prompt, mandatory `max_tokens`
- [x] **Multi-Turn Conversations**: Stateless API nature, maintaining history, alternating roles
- [x] **Build a Simple Chatbot**: Continuous conversation loop in Jupyter, input handling
- [x] **Assessment & Dialogue**: Graded assignment & interactive tutor dialogue

### Part 2: Controlling Claude's Output (Completed)
- [x] **System Prompts**: Guiding role, persona, and behavioral boundaries
- [x] **Exercise on Writing a System Prompt**: Practical prompt tuning (Concise Python Engineer)
- [x] **Temperature**: Sampling control (deterministic 0.0 vs. creative 1.0)
- [x] **Practical Scenario**: Real-world application case study (Customer Support Specialist AI)
- [x] **Response Streaming**: Real-time token streaming via Server-Sent Events (SSE)
- [x] **Controlled Model Output**: `max_tokens`, `stop_sequences`, `top_k`, and `top_p` parameters
- [x] **Structured Data & JSON Mode**: Forcing schema compliance and predictable outputs
- [x] **Structured Data Exercise**: Parsing, validation, and real-world extraction (AWS CLI Commands)
- [x] **Optimizing Output & Dialogue**: Graded assignment & interactive dialogue (Passed 100% - 27 XP)
- [x] **Module 01 Capstone**: Deploy live documentation portal website (MkDocs Material + Jupyter)

---

## Practical Notebooks & Reference Materials
- [001-claude-requests.ipynb](notebooks/001-claude-requests.ipynb) — Anthropic Messages API (Single-turn & Multi-turn).
- [001-gemini-requests.ipynb](notebooks/001-gemini-requests.ipynb) — Google Gemini companion implementation (Free execution).
- [002-claude-chatbot-exercise.ipynb](notebooks/002-claude-chatbot-exercise.ipynb) — Interactive Notebook Chatbot (Course `001_requests_exercise.ipynb`).
- [002-gemini-chatbot-exercise.ipynb](notebooks/002-gemini-chatbot-exercise.ipynb) — Interactive Notebook Chatbot (Free Gemini execution).
- [003-claude-system-prompts.ipynb](notebooks/003-claude-system-prompts.ipynb) — System Prompts & Dynamic Params (Course `002_system_prompt.ipynb`).
- [003-gemini-system-prompts.ipynb](notebooks/003-gemini-system-prompts.ipynb) — System Instructions Companion (Free Gemini execution).
- [004-claude-temperature.ipynb](notebooks/004-claude-temperature.ipynb) — Temperature & Sampling Randomness (Claude).
- [004-gemini-temperature.ipynb](notebooks/004-gemini-temperature.ipynb) — Temperature Parameter Companion (Free Gemini execution).
- [005-claude-streaming.ipynb](notebooks/005-claude-streaming.ipynb) — Response Streaming & Event Handling (Claude `messages.stream`).
- [005-gemini-streaming.ipynb](notebooks/005-gemini-streaming.ipynb) — Response Streaming Companion (Google GenAI `generate_content_stream` & `chats`).
- [006-claude-controlling-output.ipynb](notebooks/006-claude-controlling-output.ipynb) — Structured JSON Output via Assistant Prefill & Stop Sequences (Claude).
- [006-gemini-controlling-output.ipynb](notebooks/006-gemini-controlling-output.ipynb) — Native JSON Mode & Pydantic Schema Enforcement (Gemini).
- [case-study.ipynb](case-study.ipynb) — **Module 01 Flagship Project**: E-Commerce AI Support & Ticket Triage Engine (Uniting all 5 pillars).
- [module-01-dialogue-review.md](dialogue-review.md) — Coursera Interactive Dialogue Assessment & Cheat-Sheet.

---

## The End-to-End API Request Lifecycle

Understanding the end-to-end request lifecycle is essential for building robust AI architectures and debugging issues effectively:

```text
[ 1. User Interface (Client) ]
       │  User inputs text (e.g. "What is quantum computing?")
       ▼
[ 2. Application Backend (Python Server) ]  ◄── SECURE ZONE
       │  • Attaches secret API Key (never exposed to browser)
       │  • Assembles conversation history into `messages` array
       │  • Sets parameters (`model`, `temperature`, `max_tokens`)
       ▼
[ 3. Anthropic API Endpoint ] (https://api.anthropic.com/v1/messages)
       │  • Authenticates request via `x-api-key` header
       │  • Routes payload to the model inference engine
       ▼
[ 4. Inside the Model Inference Engine ]
       │  1. Tokenization: Splits text/subwords into numerical token IDs
       │  2. Embedding: Maps tokens into high-dimensional vector representations
       │  3. Contextualization: Adjusts embeddings via attention layers to resolve word meaning in context
       │  4. Generation: Predicts next-token probability distribution sequentially
       ▼
[ 5. Stop Conditions (Generation Ends When) ]
       │  • Natural Ending: Model generates an End-of-Sequence (EOS) token (`stop_reason: "end_turn"`)
       │  • Token Limit: Generation hits user-defined `max_tokens` (`stop_reason: "max_tokens"`)
       │  • Stop Sequence: Generation matches a custom stop phrase (`stop_reason: "stop_sequence"`)
       ▼
[ 6. Response Payload Returned ]
       │  • Content: `[{"type": "text", "text": "..."}]`
       │  • Usage: Token consumption (`input_tokens`, `output_tokens`)
       │  • Stop Reason: Reason for termination
       ▼
[ 7. Client UI Displays Output to User ]
```

---

## Multi-Turn Conversations & API Statelessness

### The Core Principle: LLM APIs Have Zero Memory
Neither the Anthropic API (Claude) nor Google Gemini stores your past requests or generated outputs on their servers. **Every API call is 100% stateless and isolated.**

If you ask:
> Turn 1: *"Define quantum computing in one sentence."* $\rightarrow$ Model explains quantum computing.
> Turn 2: *"Write another sentence."*

Without conversation history, the model in Turn 2 sees only `"Write another sentence"`. It has no knowledge of Turn 1 and will generate an arbitrary, out-of-context sentence.

```text
❌ Without History (Stateless Failure):
Request 1: ["Define quantum computing in one sentence"] ──► Claude ──► "Quantum computing uses qubits..."
Request 2: ["Write another sentence"]                  ──► Claude ──► "The blue whale is the largest animal."

✅ With Message History (Contextual Continuity):
Request 1: [User: "Define quantum computing..."]        ──► Claude ──► Assistant: "Quantum computing uses qubits..."
Request 2: [
  User: "Define quantum computing...",
  Assistant: "Quantum computing uses qubits...",
  User: "Write another sentence"
]                                                      ──► Claude ──► Assistant: "Unlike classical bits, qubits leverage superposition..."
```

### Core Architecture Principles for Multi-Turn Conversations
1. **Maintain History in Your Code**: Keep a local list/array of all exchanged turns (`user` prompts and `assistant`/`model` responses) in your application state.
2. **Re-Send Full History Every Turn**: Pass the entire cumulative conversation list with every subsequent request.

---

### Helper Function Patterns: Claude vs. Gemini

| Feature | Anthropic Claude | Google Gemini |
| :--- | :--- | :--- |
| **Assistant Role Name** | `"assistant"` | `"model"` |
| **Message Dictionary Format** | `{"role": "user", "content": text}` | `{"role": "user", "parts": [{"text": text}]}` |
| **Token Limit Parameter** | `max_tokens=1000` *(Mandatory)* | `config={"max_output_tokens": 1000}` *(Optional)* |
| **Extracting Output Text** | `response.content[0].text` | `response.text` |
| **SDK Chat Abstraction** | Manual message array | Manual array OR `client.chats.create()` |

#### 1. Claude Implementation Pattern
```python
def add_user_message(messages, text):
    user_message = {"role": "user", "content": text}
    messages.append(user_message)

def add_assistant_message(messages, text):
    assistant_message = {"role": "assistant", "content": text}
    messages.append(assistant_message)

def chat(messages):
    message = client.messages.create(
        model=model,
        max_tokens=1000,
        messages=messages,
    )
    return message.content[0].text
```

#### 2. Gemini Implementation Pattern
```python
def add_user_message(messages, text):
    user_message = {"role": "user", "parts": [{"text": text}]}
    messages.append(user_message)

def add_model_message(messages, text):
    model_message = {"role": "model", "parts": [{"text": text}]}
    messages.append(model_message)

def chat(messages):
    response = client.models.generate_content(
        model=model,
        contents=messages,
        config={"max_output_tokens": 1000},
    )
    return response.text
```

---

## Exercise: Interactive Notebook Chatbot Engine

The course exercise demonstrates a continuous conversational loop directly inside a Jupyter notebook cell.

### The 6-Step Conversational State Loop
```text
┌────────────────────────────────────────────────────────┐
│ 1. Prompt user for input: user_input = input("> ")    │
└──────────────────────────┬─────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│ 2. Append user message to history                      │
│    add_user_message(messages, user_input)              │
└──────────────────────────┬─────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│ 3. Call API with entire history: answer = chat(messages)│
└──────────────────────────┬─────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│ 4. Append assistant/model reply to history             │
│    add_assistant_message(messages, answer)             │
└──────────────────────────┬─────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│ 5. Display response formatted with delimiters ("---")  │
└──────────────────────────┬─────────────────────────────┘
                           ▼
┌────────────────────────────────────────────────────────┐
│ 6. Loop back to Step 1 (`while True`)                  │
└────────────────────────────────────────────────────────┘
```

### Managing Notebook Execution & Interruption
- **Input Prompt Overlay**: In VS Code / Jupyter, calling `input("> ")` opens an input bar at the top of the editor window.
- **Stopping the Chatbot**:
  - *Option A (Course method)*: Click the **Interrupt Kernel** (stop square) button in the Jupyter toolbar or press `Esc`.
  - *Option B (Graceful exit)*: Add an exit check `if user_input.strip().lower() in ("exit", "quit"): break`.

#### Complete Chatbot Loop Code:
```python
messages = []

while True:
    user_input = input("> ")
    print(">", user_input)

    # Optional graceful exit check
    if user_input.strip().lower() in ("exit", "quit"):
        print("Exiting chat session.")
        break

    # Guard against accidental empty inputs (Enter key)
    if not user_input.strip():
        continue

    add_user_message(messages, user_input)
    answer = chat(messages)
    add_assistant_message(messages, answer)

    print("---")
    print(answer)
    print("---")
```

> [!WARNING]
> **Critical Edge Case: Empty Inputs & Turn Validation**
> - **The Symptom**: `ClientError: 400 INVALID_ARGUMENT: Requests ending with a model turn are not supported.` (or Anthropic `messages: content cannot be empty`).
> - **The Cause**: Pressing **Enter** without typing anything produces an empty string (`user_input = ""`). The API validation layer discards empty text blocks, causing the payload to effectively terminate on the previous `model`/`assistant` response.
> - **The Rule**: In both Claude and Gemini, the message payload must strictly alternate roles and **MUST end with a non-empty `user` turn**.
> - **The Fix**: Always validate input with `if not user_input.strip(): continue` before appending to the message history.

---

## System Prompts: Persona & Behavioral Steering

System prompts provide meta-level instructions that define the model's persona, tone, guardrails, and behavioral boundaries before conversational turns begin.

### Case Study: The Math Tutor Pattern
| Without System Prompt (Default) | With Math Tutor System Prompt |
| :--- | :--- |
| User: *"How do I solve $5x + 3 = 2$ for $x$?"* | User: *"How do I solve $5x + 3 = 2$ for $x$?"* |
| **Model gives away full solution**: <br>`Subtract 3: 5x = -1, Divide by 5: x = -1/5` | **Model guides step-by-step**: <br>`"Our goal is to isolate x. What do you think we should do first to move the +3?"` |

### API Parameter Patterns: Claude vs. Gemini

| Feature | Anthropic Claude SDK | Google Gemini SDK |
| :--- | :--- | :--- |
| **Parameter Location** | Top-level argument `system="..."` | Inside `config={"system_instruction": "..."}` |
| **Handling `None`** | ⚠️ **Throws error if passed `system=None`!** Must omit key dynamically. | Safely omitted or passed conditionally in `config`. |

### Critical SDK Gotcha: Dynamic Parameter Unpacking
In the Anthropic Python SDK, calling `client.messages.create(..., system=None)` raises a validation error. To create a flexible, reusable `chat()` helper function, dynamically construct the `params` dictionary:

```python
def chat(messages, system=None):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
    }

    # Only include the "system" key if a system prompt was actually provided
    if system:
        params["system"] = system

    message = client.messages.create(**params)
    return message.content[0].text
```

### Implementation: Enforcing Concise Code Generation
When asked to write a function checking for duplicate characters without a system prompt, models tend to be verbose—providing lengthy background explanations, time complexity breakdowns, and multiple alternatives.

* **Target Prompt**: `"Write a Python function that checks a string for duplicate characters."`
* **System Prompt Applied**: `"You are a Python engineer who writes very concise code"`
* **Output Comparison**:
  * *Default*: ~1,300+ characters with docstrings, explanations, and edge-case caveats.
  * *With System Prompt*: Under 90 characters:
    ```python
    def has_duplicates(s: str) -> bool:
        return len(s) != len(set(s))
    ```
  * **Result**: **93% token reduction** while preserving 100% functionality and correctness.

---

## Temperature: Controlling Output Randomness & Distribution

Temperature is a float value between `0.0` and `1.0` that governs the **probability distribution** when sampling next tokens.

```text
Input Tokens: "What" ──► "do" ──► "you" ──► "think"
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 ▼                                                             ▼
       Low Temperature (near 0.0)                                    High Temperature (near 1.0)
• Sharpens probability toward top token                        • Flattens distribution across tokens
• "about" probability approaches 100%                          • Rare tokens (e.g. "when", "we") get selected
• Deterministic, reproducible, consistent                      • Creative, diverse, unexpected output
```

### Temperature Ranges & Recommended Use Cases

| Temperature Range | Behavior | Optimal Real-World Use Cases |
| :--- | :--- | :--- |
| **Low (`0.0 - 0.3`)** | **Deterministic & Factual**<br>• Greedily picks highest-probability token | • Data extraction & schema parsing<br>• Code generation & debugging<br>• Content moderation & classification |
| **Medium (`0.4 - 0.7`)** | **Balanced & Coherent**<br>• Blends creativity with logical structure | • Document summarization<br>• Educational tutoring & Q&A<br>• Constrained writing & problem solving |
| **High (`0.8 - 1.0`)** | **Creative & Exploratory**<br>• Greater variance across runs | • Brainstorming novel concepts<br>• Marketing copy & ad headlines<br>• Creative writing & joke generation |

### Parameter Integration: Updating chat() for Temperature

```python
def chat(messages, system=None, temperature=1.0):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
        "temperature": temperature,
    }

    if system:
        params["system"] = system

    message = client.messages.create(**params)
    return message.content[0].text
```

---

## Production Architecture: Customer Support Specialist Service

> 💡 **Coursera Real-World Application**: [Practical Scenario — Customer Support Specialist AI](https://www.coursera.org/learn/building-with-the-claude-api/activity/practice-moment-static/17BC3/practical-scenario)
>
> In production applications, **System Prompting** and **Temperature** work together as two complimentary control axes:
> 1. **System Prompt** = The **Rulebook & Guardrails** (Who the model is, what it knows, what it must NEVER reveal).
> 2. **Temperature** = The **Creativity Dial** (How strictly it adheres to high-probability factual tokens vs. exploring novel token paths).

```text
                                  ┌─────────────────────────────┐
                                  │       Incoming Query        │
                                  └──────────────┬──────────────┘
                                                 │
                                                 ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. SYSTEM PROMPT (Fixed Persona & Corporate Boundaries)                                      │
│ "You are a helpful, empathetic customer support agent for a clothing brand. Always         │
│  prioritize solving the customer's issue. Never provide internal company policy documents." │
└──────────────────────────────────────────────┬──────────────────────────────────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────────┐
                              │  Query Routing & Task Selection  │
                              └───────┬──────────────────┬───────┘
                                      │                  │
                Factual Inquiries     │                  │  Creative Tasks
        (Order status, return policy) │                  │  (Outfit styling, recommendations)
                                      ▼                  ▼
                     ┌──────────────────┐      ┌──────────────────┐
                     │ Temperature: 0.1 │      │ Temperature: 0.8 │
                     └────────┬─────────┘      └────────┬─────────┘
                              │                         │
                              ▼                         ▼
                     [ Precise & Factual ]     [ Varied & Expressive ]
                     • Zero hallucinations     • Diverse fashion pairings
                     • Predictable citations   • Engaging recommendations
```

### 1. Role Assignment via System Prompting
* **Prompt**: `"You are a helpful, empathetic customer support agent for a clothing brand. Always prioritize solving the customer's issue and maintain a polite, professional tone. Never provide internal company policy documents directly to the customer."`
* **Production Value**:
  * **Brand Alignment**: Prevents the assistant from sounding like a generic, ungrounded LLM.
  * **Security & Boundary Enforcement**: Restricts disclosure of confidential internal procedures or confidential documents.
  * **Clarifying Questions Pattern**: Encourages active dialogue (e.g., asking *"What is your order number?"* or *"What style are you looking for?"*) instead of generating unhelpful text dumps.

### 2. Dynamic Temperature Routing Pattern
A robust real-world backend routes queries to different temperature settings based on the user's intent:

```python
# Production Pattern: Dynamic Temperature Allocation
def handle_customer_query(client, messages, intent="factual"):
    system_prompt = (
        "You are a helpful, empathetic customer support agent for a clothing brand. "
        "Always prioritize solving the customer's issue and maintain a polite, professional tone. "
        "Never provide internal company policy documents directly to the customer. "
        "Ask clarifying questions when key information is missing."
    )

    # Route temperature based on task intent
    temperature = 0.1 if intent == "factual" else 0.8

    # Anthropic Messages API
    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1000,
        system=system_prompt,
        temperature=temperature,
        messages=messages,
    )
    return response.content[0].text
```

---

## Core API Mechanics & Security Boundaries

> 📖 **Course Link**: [Coursera — Working with the API](https://www.coursera.org/learn/building-with-the-claude-api/supplement/Fk551/working-with-the-api)
>
> **Core Concepts from the Lesson**:
> - **Security Boundary**: API keys must strictly live on your backend server—never in client-side code (web or mobile).
> - **Model Processing Pipeline**: The 4-stage transformation from raw text $\rightarrow$ tokens $\rightarrow$ vector embeddings $\rightarrow$ contextual attention $\rightarrow$ next-token generation.
> - **Stop Conditions**: Always inspect `response.stop_reason` (`end_turn` vs. `max_tokens`) to ensure responses weren't prematurely cut off.
> - **Token Accounting**: Track `usage.input_tokens` and `usage.output_tokens` to monitor latency, cost, and rate limits.

---

## Response Streaming: Real-Time Token Generation

### Latency Optimization: Time-to-First-Token (TTFT)
In standard synchronous calls, generation blocks completely until the model generates the entire response. For lengthy explanations or complex reasoning, this can take **10 to 30 seconds**.
Users left staring at a spinning loader perceive the application as unresponsive or broken.

```text
❌ Synchronous Request (Blocked):
User ──► Request ──► Server ──► Claude (Generates for 10-30s...) ──► Full Message ──► User sees text all at once

✅ Streamed Request (Instant Feedback):
User ──► Request ──► Server ──► Claude
                                  │
                                  ├──► Event 1: "Quantum "    ──► Relayed to User (~0.8s)
                                  ├──► Event 2: "computing "  ──► Relayed to User (~1.0s)
                                  ├──► Event 3: "is a type "  ──► Relayed to User (~1.2s)
                                  └──► Event N: "of physics." ──► Relayed to User (~2.1s)
```

### Server-Sent Events (SSE) Stream Lifecycle
Anthropic's Messages API streams structured events over a single persistent Server-Sent Events (SSE) connection:

```text
 ┌─────────────────────────────────────────────────────────────┐
 │ 1. RawMessageStartEvent / MessageStart                      │
 │    • Sent immediately when Claude accepts the request       │
 │    • Contains initial message metadata (id, role, model)    │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ 2. RawContentBlockStartEvent / ContentBlockStart            │
 │    • Marks the beginning of a content block (text or tool)  │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ 3. RawContentBlockDeltaEvent / ContentBlockDelta (REPEATED) │
 │    • ⭐ CONTAINS THE GENERATED TEXT CHUNKS ⭐               │
 │    • Emitted continuously as new tokens are predicted       │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ 4. RawContentBlockStopEvent / ContentBlockStop              │
 │    • Marks the completion of the current content block      │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ 5. RawMessageDeltaEvent / MessageDelta                      │
 │    • Emits final completion data: stop_reason & usage stats │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ 6. RawMessageStopEvent / MessageStop                        │
 │    • Formal closure event signaling the end of the stream   │
 └─────────────────────────────────────────────────────────────┘
```

---

### Claude Streaming Implementations

#### Pattern A: High-Level Context Manager (`client.messages.stream`) — Recommended
Provides an ergonomic `.text_stream` iterator and handles connection lifecycles automatically:

```python
with client.messages.stream(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1000,
    messages=messages,
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

# Collect accumulated full message for database storage
final_message = stream.get_final_message()
print("\nTokens consumed:", final_message.usage.output_tokens)
```

#### Pattern B: Low-Level Event Streaming (`stream=True`)
Directly iterate through raw SDK events when you need low-level telemetry, tool-call chunk tracking, or custom event routing:

```python
stream = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1000,
    messages=messages,
    stream=True,
)

for event in stream:
    if event.type == "content_block_delta":
        print(event.delta.text, end="", flush=True)
```

---

### Google Gemini Streaming Implementation (`google-genai`)

| Feature | Anthropic Claude | Google Gemini (`google-genai`) |
| :--- | :--- | :--- |
| **High-Level Text Iterator** | `stream.text_stream` | `for chunk in response: chunk.text` |
| **Chat Session Streaming** | Manual event accumulator | `chat.send_message_stream(prompt)` |
| **Accumulated Final Message** | `stream.get_final_message()` | `chat.get_history()` (auto-maintained) |
| **Low-Level Method** | `client.messages.create(stream=True)` | `client.models.generate_content_stream()` |

#### Gemini Chat Streaming Implementation
```python
from google import genai

client = genai.Client()
chat = client.chats.create(model="gemini-3.5-flash-lite")

response = chat.send_message_stream(
    "Write a 1 sentence description of a fake database"
)
for chunk in response:
    print(chunk.text, end="", flush=True)

# Conversation history is updated automatically
print("\nHistory length:", len(chat.get_history()))
```

---

## Controlled Model Output: Sampling Parameters & Boundaries

Beyond System Prompts and Temperature, LLM APIs provide several fine-grained parameters to constrain, shape, and terminate output generation with mathematical precision.

### Parameter Reference & Comparison Matrix

| Parameter | Type / Range | What It Controls | When to Use | Stop Reason When Triggered |
| :--- | :--- | :--- | :--- | :--- |
| **`max_tokens`** | Integer (e.g. `100`, `1000`) | Hard ceiling on output length in tokens | Strict cost budgets, preventing runaway loops, concise answers | `stop_reason == "max_tokens"` |
| **`stop_sequences`** | List of Strings (e.g. `["\n\n"]`, `["###"]`) | Text pattern that immediately halts generation when emitted | Section delimiters, markdown blocks, stop before unwanted chatter | `stop_reason == "stop_sequence"` |
| **`temperature`** | Float (`0.0` – `1.0`) | Sharpness of token probability distribution | `0.0` for deterministic/factual, `0.8+` for creative diversity | — |
| **`top_k`** | Integer (e.g. `40`) | Restricts candidate tokens to the $k$ highest-probability tokens | Eliminates extreme long-tail low-probability nonsense tokens | — |
| **`top_p`** | Float (`0.0` – `1.0`, e.g. `0.9`) | **Nucleus Sampling**: Cuts off tokens once cumulative probability reaches $p$ | Adapts dynamically: tighter pool when confident, wider pool when unsure | — |

---

### Deep Dive: Sampling Pipeline Filter Stages

```text
Full Vocabulary (~100,000+ Tokens)
        │
        ▼
[ Step 1: Top-K Filter (e.g. top_k = 40) ]
        │  Discards all tokens outside the top 40 candidates.
        ▼
[ Step 2: Top-P / Nucleus Filter (e.g. top_p = 0.90) ]
        │  Sorts remaining tokens by probability and keeps only the smallest set
        │  whose cumulative sum reaches 90%.
        ▼
[ Step 3: Temperature Scaling (e.g. temperature = 0.3) ]
        │  Divides log probabilities by temperature to sharpen (low) or flatten (high)
        │  the final selection odds.
        ▼
[ Step 4: Token Picked & Checked Against Stop Sequences ]
        │  If token completes any string in `stop_sequences` (e.g. "###"),
        ▼  generation terminates immediately with `stop_reason="stop_sequence"`.
```

---

### Dual Implementations: Combining Parameters for Fine-Grained Control

#### 1. Anthropic Claude Implementation
```python
import anthropic

client = anthropic.Anthropic()

# Combine parameters for deterministic, bounded product description
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=500,
    temperature=0.3,
    top_p=0.9,
    top_k=40,
    stop_sequences=["###", "\n\n---"],
    messages=[
        {"role": "user", "content": "Generate a concise product description for waterproof running shoes."}
    ],
)

print(message.content[0].text)
print("Stop Reason:", message.stop_reason)      # e.g. "end_turn" or "stop_sequence"
print("Tokens Used:", message.usage.output_tokens)
```

#### 2. Google Gemini Companion (`google-genai`)
In the Google GenAI SDK, sampling parameters and stop sequences are configured cleanly through `types.GenerateContentConfig`:

```python
from google import genai
from google.genai import types

client = genai.Client()

config = types.GenerateContentConfig(
    max_output_tokens=500,
    temperature=0.3,
    top_p=0.9,
    top_k=40,
    stop_sequences=["###", "\n\n---"],
)

response = client.models.generate_content(
    model="gemini-3.5-flash-lite",
    contents="Generate a concise product description for waterproof running shoes.",
    config=config,
)

print(response.text)
```

---

## Structured Data Generation: Assistant Prefilling & Native Schemas

In production backends and UI tools (e.g. an **AWS EventBridge Rule Generator**), applications require raw, parseable data (valid JSON, code, or bulleted lists) with **zero conversational filler**.

### The Engineering Challenge: Conversational Pollution & Parsing Failures
By default, language models wrap structured output in markdown code fences and add friendly conversational text:

```markdown
# EventBridge Rule
```json
{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"]
}
```
This rule captures EC2 instance state changes when instances start running or stop.
```

If your Python backend attempts `json.loads(response.text)`, it **crashes immediately** with `json.decoder.JSONDecodeError`.

---

### Anthropic Architecture: Assistant Prefilling & Stop Sequences

Claude allows developers to **end the `messages` list with an `assistant` turn**. When Claude receives an unfinished assistant message, it treats that text as already spoken and continues generating directly from that token.

```text
 ┌─────────────────────────────────────────────────────────────┐
 │ User Message                                                │
 │ "Generate an EventBridge rule as JSON"                      │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ Assistant Message (PREFILLED)                               │
 │ "```json"                                                   │
 └──────────────────────────────┬──────────────────────────────┘
                                │  Claude thinks: "I've already started the code block!
                                │  I can't write conversational intro text now."
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ Claude Generates JSON Tokens                                │
 │ \n{\n  "source": ["aws.ec2"]\n}\n                           │
 └──────────────────────────────┬──────────────────────────────┘
                                │  Claude reaches the end and wants to close the block:
                                │  It emits "```"
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ Stop Sequence Triggered: ["```"]                            │
 │ • Halts generation IMMEDIATELY                              │
 │ • Completely cuts off closing explanations & chatter        │
 └─────────────────────────────────────────────────────────────┘
```

#### Production Python Pattern (Claude):
```python
messages = []
add_user_message(messages, "Generate a very short event bridge rule as json")
add_assistant_message(messages, "```json")

# Claude stops the exact moment it closes the markdown block
clean_json_str = chat(messages, stop_sequences=["```"])

# Parses cleanly into Python dictionary without any regex!
import json
data = json.loads(clean_json_str.strip())
```

---

### Google Gemini Architecture: Logit-Constrained Native JSON & Pydantic

In Google Gemini, ending requests with an assistant/model turn is forbidden (`ClientError: 400 Requests ending with a model turn are not supported`).
Instead, Gemini solves this natively at the token generation level:

1. **Native JSON Mode (`response_mime_type="application/json"`)**:
   Forces the model's logits to output only syntactically valid JSON. No markdown backticks are ever produced.
2. **Pydantic Schema Enforcement (`response_schema=BaseModel`)**:
   Guarantees that the returned JSON strictly adheres to your required keys, arrays, and types.

#### Production Python Pattern (Gemini):
```python
from google import genai
from google.genai import types
from pydantic import BaseModel, Field

client = genai.Client()

class EventBridgeRule(BaseModel):
    source: list[str] = Field(description="AWS source service")
    detail_type: list[str] = Field(description="Event detail type")
    state: list[str] = Field(description="State filters")

config = types.GenerateContentConfig(
    response_mime_type="application/json",
    response_schema=EventBridgeRule,
    temperature=0.0
)

response = client.models.generate_content(
    model="gemini-3.5-flash-lite",
    contents="Generate an EventBridge rule to monitor EC2 instances state changes",
    config=config
)

# 100% Guaranteed valid JSON matching EventBridgeRule schema
import json
rule = json.loads(response.text)
```

---

### Architectural Comparison: Claude vs. Gemini

| Feature | Anthropic Claude | Google Gemini (`google-genai`) |
| :--- | :--- | :--- |
| **Primary Technique** | Assistant Turn Prefill (`add_assistant_message("```json")`) | Native JSON Mode (`response_mime_type="application/json"`) |
| **Stop Mechanism** | `stop_sequences=["```"]` | `stop_sequences` OR native schema termination |
| **Intro Chatter Prevention** | Pre-fills the assistant turn before model begins | Logit-level token mask restricts non-JSON tokens |
| **Outro Chatter Prevention** | Stop sequence triggers on closing delimiter | Schema boundary automatically closes JSON object |
| **Type Validation** | Manual via Pydantic after response | Direct API enforcement via `response_schema` |

---

## Production Blueprint: Automated Support & Ticket Triage Engine

> [!NOTE]
> In production enterprise systems, **all 5 techniques you learned in Module 1 work together in a single unified architecture**.
> Below is a complete architectural blueprint of an **Automated Customer Support & Ticket Escalation Service** (as used in modern e-commerce systems).

---

### System Architecture & Pipeline Flow

```text
[ 1. Customer in Mobile/Web App ]
  "Hi, my package was supposed to arrive yesterday, but order #8492
   is still stuck in transit. Cancel it and refund me right now!"
                 │
                 ▼
[ 2. Backend Application Server (FastAPI / Express) ]
  • Retrieves user session history from Redis (PILLAR 4: Multi-Turn Continuity)
  • Injects corporate guardrails & boundaries (PILLAR 1: System Prompt)
  • Selects temperature based on task intent (PILLAR 2: Dynamic Temperature)
                 │
                 ├──► STREAMING PATH (User Experience)
                 │    Uses `client.messages.stream` or `chat.send_message_stream`
                 │    Pushes tokens over WebSockets / SSE in real time (PILLAR 3: Streaming)
                 │    Customer sees response typing within ~0.8 seconds!
                 │
                 ▼
[ 3. Post-Conversation Triage Engine ]
  • Backend requests structured analysis from Claude/Gemini
  • Uses Assistant Prefill (`"```json"`) + Stop Sequence (`"```"`) OR Native JSON Mode
  • Obtains 100% pure, parseable JSON (PILLAR 5: Structured Output)
                 │
                 ▼
[ 4. Production Database & CRM Actions ]
  {
    "order_id": 8492,
    "sentiment": "angry",
    "issue": "shipping_delay",
    "escalate_to_human": true
  }
  • Automatically inserts high-priority ticket into Zendesk / Salesforce
  • Flags order #8492 for warehouse review in PostgreSQL
```

---

### Architectural Value: How the 5 Pillars Solve Real Engineering Problems

| Module 1 Concept | Real-World Engineering Problem It Solves | What Happens If You Don't Use It |
| :--- | :--- | :--- |
| **1. System Prompt** | **Brand Safety & Legal Guardrails**: Restricts refunds over $50, protects internal employee emails, and forces polite empathy. | The model promises unauthorized $500 refunds or leaks confidential company memos. |
| **2. Temperature (`0.0`)** | **Eliminating Business Hallucinations**: Ensures return policies and warranty rules are deterministic and factual. | High temperature causes the model to invent non-existent 90-day return windows. |
| **3. Response Streaming** | **Sub-Second TTFT (User Retention)**: Streams tokens incrementally over SSE instead of waiting 15s for full blocks. | 40%+ of users bounce when staring at a frozen screen with a spinning loader. |
| **4. Multi-Turn History** | **Conversation Continuity**: Re-sends conversation context so references like *"check my previous order instead"* work seamlessly. | The model has total amnesia on Turn 2, asking the customer to repeat everything. |
| **5. Structured Data & Stop Sequences** | **Connecting AI to SQL & CRMs**: Emits pure JSON so Python can run `json.loads()` and update databases without regex failures. | Markdown backticks and conversational chatter cause `JSONDecodeError`, crashing backend workers. |

---

### Interactive Production Project Notebook

> **Run the Flagship Project**: [**`case-study.ipynb`**](case-study.ipynb)
> 
> Open and execute the full working implementation in Jupyter with zero API fees using Google Gemini (`gemini-3.5-flash-lite`).
>
> **What You Can Test Live**:
> 1. **Real-Time Token Streaming**: Watch tokens stream chunk-by-chunk across multiple conversational turns.
> 2. **Strict Guardrail Compliance**: Test how the agent gracefully denies unauthorized cash refunds and defends brand boundaries.
> 3. **Automated Pydantic Schema Extraction**: Freeform English chat is converted directly into validated, structured JSON.
> 4. **Automated Database & CRM Mutations**: Triggers mock Zendesk priority escalations and PostgreSQL order updates.
