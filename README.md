# AI Engineering: Building with Claude & Gemini APIs

A comprehensive, hands-on repository covering LLM application development, prompt engineering, tool use, Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG), and agentic workflows.

This project implements the full curriculum from Anthropic's **"Building with the Claude API"** course, featuring **dual implementations**:
- **Anthropic Claude**: Official course code and advanced Anthropic features.
- **Google Gemini**: Companion implementations using the free Google GenAI SDK to practice identical concepts without API costs.

---

## Curriculum & Production Blueprints

| Module | Core Architecture | Status | Reference Notebooks | Case Study |
| :--- | :--- | :---: | :--- | :--- |
| **01** | **Getting Started with LLM APIs**<br>• API Fundamentals & Lifecycles<br>• Controlled Output & Schemas | **Completed** | Requests, Multi-turn, Chatbot, System Prompts, Temperature, Streaming, Prefilling | **[E-Commerce AI Support & Ticket Triage Engine](01-getting-started/case-study.ipynb)** |
| **02** | **Prompt Engineering & Evaluation** | **Completed** | Prompt Evals, Techniques, XML Tags, Few-Shot, Guardrails | **[Autonomous Evaluation & Regression Benchmark Engine](02-prompt-engineering-evals/case-study.ipynb)** |
| **03** | **Tools and Multimodal** | Planned | Function Calling, Tool Use Schemas, Vision, Document Analysis | **Multimodal Financial Invoice Auditor** |
| **04** | **Model Context Protocol (MCP)** | Planned | Spec-Kit (SDD), FastMCP Servers, Tool Contracts | **Enterprise Database MCP Integration** |
| **05** | **Retrieval-Augmented Generation (RAG)** | Planned | Vector Embeddings, Chunking Strategies, Semantic Search | **Internal Enterprise Hybrid Search Knowledge Engine** |
| **06** | **Claude Code & Computer Use** | Planned | Desktop Automation, Agentic OS Controls | **Autonomous Desktop Operator** |
| **07** | **Agentic Workflows** | Planned | Autonomous Agents, Routing, Chaining, Evaluator-Optimizer | **Autonomous Multi-Agent Research Team** |

---

## Live Documentation Portal

The full curriculum, architecture guides, and interactive Jupyter notebooks are published to GitHub Pages using **MkDocs Material** and **mkdocs-jupyter**:

**[https://muhammadsaleem-dev.github.io/ai-engineering-claude-gemini-/](https://muhammadsaleem-dev.github.io/ai-engineering-claude-gemini-/)**

- **Instant Search**: Search through all prompt techniques, parameter tables, and API patterns.
- **Rendered Notebooks**: Inspect Python code cells and model outputs directly in your browser.
- **Dark / Light Modes**: Tailored theme with syntax highlighting and collapsible callouts.
- **Continuous Deployment**: Automated via GitHub Actions on every push to `main`.

---

## Repository Structure

```text
├── 01-getting-started/                     # Module 01: API fundamentals & Controlling Output
│   ├── 001-claude-requests.ipynb           # Anthropic Messages API (Single-turn & Multi-turn)
│   ├── 001-gemini-requests.ipynb           # Google Gemini API (Single-turn, Multi-turn & chats.create)
│   ├── 002-claude-chatbot-exercise.ipynb   # Interactive Notebook Chatbot (Course exercise)
│   ├── 002-gemini-chatbot-exercise.ipynb   # Interactive Notebook Chatbot (Free Gemini execution)
│   ├── 003-claude-system-prompts.ipynb     # System Prompts & Dynamic Params (Course 002_system_prompt)
│   ├── 003-gemini-system-prompts.ipynb     # System Instructions Companion (Free Gemini execution)
│   ├── 004-claude-temperature.ipynb        # Temperature & Sampling Randomness (Claude)
│   ├── 004-gemini-temperature.ipynb        # Temperature Parameter Companion (Free Gemini execution)
│   ├── 005-claude-streaming.ipynb          # Response Streaming & Event Handling (Claude messages.stream)
│   ├── 005-gemini-streaming.ipynb          # Response Streaming Companion (Google GenAI streaming & chats)
│   ├── 006-claude-controlling-output.ipynb  # Structured JSON Output via Assistant Prefill & Stop Sequences
│   ├── 006-gemini-controlling-output.ipynb  # Native JSON Mode & Pydantic Schema Enforcement (Gemini)
│   ├── case-study.ipynb                    # Module 01 Case Study: E-Commerce AI Support & Ticket Engine
│   ├── module-01-dialogue-review.md        # Coursera Dialogue Assessment Q&A & Cheat-sheet
│   └── README.md                           # Comprehensive Module 1 revision guide
│
├── 02-prompt-engineering-evals/            # Module 02: Prompt design & automated evaluation (Spec-Kit)
│   └── README.md                           # Module plan & roadmap
│
├── 03-tools-and-multimodal/                # Module 03: Function calling, vision, documents
│   └── README.md                           # Tool schemas, multimodal, caching
│
├── 04-model-context-protocol-mcp/          # Module 04: Model Context Protocol (MCP) integrations
│   └── README.md                           # MCP servers, clients, resources
│
├── 05-retrieval-augmented-generation-rag/  # Module 05: RAG pipelines, embeddings, vector search
│   └── README.md                           # Ingestion, chunking, retrieval
│
├── 06-claude-code-computer-use/            # Module 06: Claude Code CLI & Computer Use
│   └── README.md                           # Desktop automation architecture
│
├── 07-agentic-workflows/                   # Module 07: Multi-agent architectures & design patterns
│   └── README.md                           # Chaining, routing, orchestrator-workers
│
├── .env.example                            # API key configuration template
├── .gitignore                              # Security exclusions (keys, venvs, cache)
├── requirements.txt                        # Python dependencies
└── README.md                               # Project overview
```

---

## Quickstart Setup

### 1. Clone the repository
```bash
git clone https://github.com/muhammadsaleem-dev/ai-engineering-claude-gemini-.git
cd ai-engineering-claude-gemini-
```

### 2. Set up the Python Environment
Using Conda:
```bash
conda create -n coursera python=3.12 -y
conda activate coursera
pip install -r requirements.txt
python -m ipykernel install --user --name coursera --display-name "Python (coursera)"
```

### 3. Configure API Keys
Copy the example environment file and add your keys:
```bash
cp .env.example .env
```
Inside `.env`:
```env
ANTHROPIC_API_KEY="your-anthropic-key"  # Optional (from console.anthropic.com)
GEMINI_API_KEY="your-gemini-key"        # Free (from aistudio.google.com)
```

---

## ⚖️ API Reference: Claude vs. Gemini

| Concept | Anthropic Claude | Google Gemini |
| :--- | :--- | :--- |
| **Package** | `anthropic` | `google-genai` |
| **Client Initialization** | `client = Anthropic()` | `client = genai.Client()` |
| **Request Method** | `client.messages.create(...)` | `client.models.generate_content(...)` |
| **Prompt Parameter** | `messages=[{"role": "user", "content": ...}]` | `contents="..."` |
| **Max Tokens** | `max_tokens=1000` *(Mandatory)* | `config={"max_output_tokens": 1000}` *(Optional)* |
| **Response Text** | `response.content[0].text` | `response.text` |

---

## 📜 License
MIT License. Created for educational purposes following Anthropic Academy and Google GenAI guidelines.
