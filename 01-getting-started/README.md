# Module 01: Getting Started with LLM APIs

This module covers foundational API connectivity, request lifecycles, and core parameter configuration.

---

## 📖 Revision Notes: Model Selection Guide

| Model | Intelligence & Capabilities | Speed & Cost | Best Used For | Gemini Counterpart |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Opus** | 🧠 Highest intelligence<br>• Supports deep reasoning | ⏳ Moderate speed<br>• High cost ($$$) | Complex system architecture, multi-step problem solving, deep research | **Gemini Pro** |
| **Claude Sonnet**<br>*(Default for 90%)* | ⚖️ Strong balanced intelligence<br>• Supports reasoning | ⚡ Fast speed<br>• Medium cost ($$) | Daily coding, RAG pipelines, document editing, tool calling | **Gemini Flash** |
| **Claude Haiku** | 🚀 Moderate intelligence<br>• Latency & cost optimized | 🏎️ Fastest speed<br>• Lowest cost ($) | Autocomplete, classification, content moderation, high-volume tasks | **Gemini Flash-Lite** |

### 🎯 Decision Rule of Thumb
1. **Default to Sonnet (or Gemini Flash)**: Start here for almost every project. It delivers near-flagship intelligence at a fraction of the cost and latency.
2. **Step down to Haiku (or Flash-Lite)**: If you need ultra-low latency, real-time responses, or are processing high volumes on a budget.
3. **Step up to Opus (or Gemini Pro)**: Only when Sonnet struggles with exceptionally complex logic, massive codebases, or complex multi-agent planning.

---

## 📚 Module Syllabus: Getting Started with Claude

### Part 1: API Fundamentals and First Steps (✅ Completed)
- [x] **Overview of Claude Models**: Model tiers (Opus, Sonnet, Haiku) & decision guide
- [x] **Working with the API**: Authentication, 7-stage request lifecycle, token economics
- [x] **Making a Request**: Initializing client, sending prompt, mandatory `max_tokens`
- [x] **Multi-Turn Conversations**: Stateless API nature, maintaining history, alternating roles
- [x] **Build a Simple Chatbot**: Continuous conversation loop in Jupyter, input handling
- [x] **Assessment & Dialogue**: Graded assignment & interactive tutor dialogue

### Part 2: Controlling Claude's Output (🔄 Current / In Progress)
- [ ] **System Prompts & Exercise**: Guiding role, persona, and behavioral boundaries
- [ ] **Temperature**: Sampling control (deterministic 0.0 vs. creative 1.0)
- [ ] **Practical Scenario**: Real-world application case study
- [ ] **Response Streaming**: Real-time token streaming via Server-Sent Events (SSE)
- [ ] **Controlled Model Output & Structured Data**: Forcing JSON and schema compliance
- [ ] **Structured Data Exercise**: Parsing, validation, and real-world extraction
- [ ] **Optimizing Output & Dialogue**: Graded assignment and second interactive dialogue

---

## 📓 Practical Exercises & Review Materials
- [001-claude-requests.ipynb](001-claude-requests.ipynb) — Anthropic Messages API (Single-turn & Multi-turn).
- [001-gemini-requests.ipynb](001-gemini-requests.ipynb) — Google Gemini companion implementation (Free execution).
- [002-claude-chatbot-exercise.ipynb](002-claude-chatbot-exercise.ipynb) — Interactive Notebook Chatbot (Course `001_requests_exercise.ipynb`).
- [002-gemini-chatbot-exercise.ipynb](002-gemini-chatbot-exercise.ipynb) — Interactive Notebook Chatbot (Free Gemini execution).
- [module-01-dialogue-review.md](module-01-dialogue-review.md) — 💬 Coursera Interactive Dialogue Assessment & Cheat-Sheet.

---

## 🔄 The Complete API Request Lifecycle

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

## 💬 Multi-Turn Conversations & API Statelessness

### 🧠 The Core Principle: LLM APIs Have Zero Memory
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

### 🔑 The Two Golden Rules for Multi-Turn Conversations
1. **Maintain History in Your Code**: Keep a local list/array of all exchanged turns (`user` prompts and `assistant`/`model` responses) in your application state.
2. **Re-Send Full History Every Turn**: Pass the entire cumulative conversation list with every subsequent request.

---

### 🛠️ Helper Functions Comparison: Claude vs. Gemini

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

## 🤖 Exercise: Building an Interactive Notebook Chatbot

The course exercise demonstrates a continuous conversational loop directly inside a Jupyter notebook cell.

### 🔄 The 6-Step Conversation Loop
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

### 💡 Handling Notebook Execution & Interruption
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

## 🔗 Supplemental Reading: Working with the API

> 📖 **Course Link**: [Coursera — Working with the API](https://www.coursera.org/learn/building-with-the-claude-api/supplement/Fk551/working-with-the-api)
>
> **Core Concepts from the Lesson**:
> - **Security Boundary**: API keys must strictly live on your backend server—never in client-side code (web or mobile).
> - **Model Processing Pipeline**: The 4-stage transformation from raw text $\rightarrow$ tokens $\rightarrow$ vector embeddings $\rightarrow$ contextual attention $\rightarrow$ next-token generation.
> - **Stop Conditions**: Always inspect `response.stop_reason` (`end_turn` vs. `max_tokens`) to ensure responses weren't prematurely cut off.
> - **Token Accounting**: Track `usage.input_tokens` and `usage.output_tokens` to monitor latency, cost, and rate limits.
