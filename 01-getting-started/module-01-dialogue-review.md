# Coursera Interactive Dialogue: Module 1 Assessment & Review

This document archives the interactive Coursera tutor dialogue on **Model Selection**, **Structuring API Requests**, **Multi-Turn Conversations**, and **Troubleshooting API Issues**.

---

## 🎯 Dialogue Objectives
- Selecting the appropriate Claude model variant based on latency, cost, and complexity.
- Constructing valid API requests with required headers and parameters.
- Implementing multi-turn conversations through local state history management.
- Diagnosing and troubleshooting common API errors (`400 Bad Request`).

---

## 💬 Full Dialogue Transcript & Knowledge Breakdown

### Topic 1: Model Selection

> **🤖 Tutor Question:**
> *Imagine you're building an application that requires high-speed, low-latency responses for a simple customer service chatbot, but you also have a separate project that involves complex data analysis and reasoning.*
> *Between Haiku, Sonnet, and Opus, which one would you pick specifically for the high-speed chatbot, and how does it differ from the others in terms of performance?*

* **✅ Best Answer:** **Claude 3.5 Haiku**
* **💡 Rationale:**
  * **Haiku** is optimized for ultra-fast response times and minimal cost per token. It is the premier choice for high-volume, low-latency, lightweight tasks like customer service routing and classification.
  * **Sonnet** is the balanced default for general coding and complex workflows.
  * **Opus** is reserved for multi-step reasoning, massive synthesis, and deep analytical problem-solving.

---

### Topic 2: Structuring API Requests & Authentication

> **🤖 Tutor Question:**
> *When you're putting together an API request for Claude, what are the essential fields or components you must include to ensure the request is valid and processed correctly? And what is the one piece of information you need to include in your request headers to authenticate your access to the Claude API?*

* **✅ Best Answer:**
  1. **Authentication Header**: An active API key supplied in the `x-api-key` header (handled automatically by `Anthropic(api_key=...)`).
  2. **`model`**: String identifier for the target model (e.g., `"claude-3-5-sonnet-latest"`).
  3. **`max_tokens`**: **Mandatory in Anthropic Claude**. Defines the maximum token limit for output generation. Omitting this parameter results in an immediate `TypeError` / `400 Bad Request`.
  4. **`messages`**: An array containing the conversation turns.

```python
from anthropic import Anthropic

client = Anthropic()  # Reads ANTHROPIC_API_KEY from environment

response = client.messages.create(
    model="claude-3-5-sonnet-latest",
    max_tokens=1000,  # REQUIRED!
    messages=[
        {"role": "user", "content": "What is an AI engineer?"}
    ]
)
```

---

### Topic 3: Multi-Turn Conversations & Message Formatting

> **🤖 Tutor Question:**
> *If you're building a chatbot that needs to remember what the user said previously in the conversation, how do you structure the `messages` field to ensure the model has that context? Specifically, how do you format each entry within that history to distinguish between the user's input and the model's previous responses?*

* **✅ Best Answer:**
  * Because LLM APIs are **stateless**, you must store all previous exchanges locally in a list and re-send the entire list on every request.
  * Each entry in the list is a dictionary formatted with two required keys:
    * `"role"`: Set to `"user"` for human prompts, or `"assistant"` for the model's generated responses.
    * `"content"`: The text payload of that turn.

```python
messages = [
    {"role": "user", "content": "What is 1+1?"},
    {"role": "assistant", "content": "1 + 1 = 2"},
    {"role": "user", "content": "Add 2 to that answer."}
]
```

---

### Topic 4: Troubleshooting API Issues (400 Bad Request)

> **🤖 Tutor Question:**
> *Imagine you've sent a request, but you receive an error message indicating that your request is invalid. What are some common steps or specific things you would check in your request structure to identify and fix the problem?*

* **✅ Best Answer Checklist:**
  1. **Missing Mandatory Parameters**: Ensure `max_tokens` is provided. In Claude, `max_tokens` is strictly required.
  2. **Message Schema & Content**: Check that each entry in `messages` has valid `"role"` and `"content"` keys, and that `"content"` is not an empty string `""` or null.
  3. **Turn Alternation Rule**: Validate that messages strictly alternate:
     $$\text{user} \longrightarrow \text{assistant} \longrightarrow \text{user}$$
     Requests cannot have two consecutive user turns, cannot start with an assistant turn, and **must terminate on a non-empty user turn**.
  4. **Authentication Headers**: Confirm the API key is non-empty, valid, and correctly passed in the `x-api-key` header.
  5. **Parameter Ranges**: Ensure `temperature` is between `0.0` and `1.0` and `max_tokens` does not exceed the model's context or output limits.

---

## 📊 Quick-Reference Summary Card

| Domain | Key Requirement | Gotcha / Common Trap |
| :--- | :--- | :--- |
| **Model Selection** | Match capability to task (Haiku $\rightarrow$ Speed; Sonnet $\rightarrow$ Balance; Opus $\rightarrow$ Reasoning) | Don't default to Opus for simple chatbots; it increases cost and latency unnecessarily. |
| **API Parameters** | `model`, `max_tokens`, `messages` | `max_tokens` is NOT optional in Anthropic Claude (unlike Gemini/OpenAI). |
| **Authentication** | `x-api-key` header | Never hardcode keys in client-side code; use `.env` backend variables. |
| **Conversation State** | Manually maintain list of message dictionaries | The API stores zero memory. You must re-send all prior turns. |
| **Turn Validation** | Must alternate `user` $\leftrightarrow$ `assistant` | Submitting empty text `""` causes API parsers to drop the turn, resulting in a 400 error. |
