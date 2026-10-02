# AI Engineering: Building with Claude & Gemini APIs

A comprehensive, hands-on repository covering LLM application development, prompt engineering, tool use, Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG), and agentic workflows.

This project implements the full curriculum from Anthropic's **"Building with the Claude API"** course, featuring **dual implementations**:
- **Anthropic Claude**: Official course code and advanced Anthropic features.
- **Google Gemini**: Companion implementations using the free Google GenAI SDK to practice identical concepts without API costs.

---

## 📊 Course Progress Tracker

| Module | Topic | Status | Exercises & Notes |
| :--- | :--- | :---: | :--- |
| **01** | **Getting Started with Claude**<br>• Part 1: API Fundamentals<br>• Part 2: Controlling Output | 🔄 **In Progress**<br>(Part 1: ✅ Done<br>Part 2: 🏃 Active) | **Part 1**: Requests, Multi-turn, Chatbot, Dialogue<br>**Part 2**: System Prompts, Temperature, Streaming, Structured Data |
| **02** | **Prompt Engineering & Evaluation** | ⏳ Upcoming | 🌱 **Spec-Kit (SDD)**: Benchmark & eval specs, Few-shot, Chains |
| **03** | **Tools and Multimodal** | ⏳ Upcoming | Function Calling, Tool Use, Vision, Document Analysis |
| **04** | **Model Context Protocol (MCP)** | ⏳ Upcoming | 🌱 **Spec-Kit (SDD)**: MCP Server & Tool Contracts, FastMCP |
| **05** | **Retrieval-Augmented Generation (RAG)** | ⏳ Upcoming | Vector Embeddings, Chunking Strategies, Semantic Search |
| **06** | **Claude Code & Computer Use** | ⏳ Upcoming | Desktop Automation, Agentic OS Controls |
| **07** | **Agentic Workflows** | ⏳ Upcoming | Autonomous Agents, Routing, Chaining, Evaluator-Optimizer |

---

## 🌐 Live Documentation (GitHub Pages)

> 🚀 **Module 01 Capstone Milestone**:
> As soon as Module 01 Part 2 is completed, GitHub Pages will be activated to host this entire repository as an interactive, searchable handbook at:
> **`https://muhammadsaleem-dev.github.io/ai-engineering-claude-gemini-/`**

---

## 📂 Repository Structure

```text
├── 01-getting-started/                     # ✅ COMPLETED: API fundamentals, requests, parameters
│   ├── 001-claude-requests.ipynb           # Anthropic Messages API (Single-turn & Multi-turn)
│   ├── 001-gemini-requests.ipynb           # Google Gemini API (Single-turn, Multi-turn & chats.create)
│   ├── 002-claude-chatbot-exercise.ipynb   # Interactive Notebook Chatbot (Course exercise)
│   ├── 002-gemini-chatbot-exercise.ipynb   # Interactive Notebook Chatbot (Free Gemini execution)
│   ├── module-01-dialogue-review.md        # Coursera Dialogue Assessment Q&A & Cheat-sheet
│   └── README.md                           # Comprehensive Module 1 revision guide
│
├── 02-prompt-engineering-evals/            # 🔄 NEXT UP: Prompt design & automated evaluation
│   └── README.md                           # Module plan & roadmap
│
├── 03-tools-and-multimodal/                # Function calling, vision, documents
│   └── README.md                           # Tool schemas, multimodal, caching
│
├── 04-model-context-protocol-mcp/          # Model Context Protocol (MCP) integrations
│   └── README.md                           # MCP servers, clients, resources
│
├── 05-retrieval-augmented-generation-rag/  # RAG pipelines, embeddings, vector search
│   └── README.md                           # Ingestion, chunking, retrieval
│
├── 06-claude-code-computer-use/            # Claude Code CLI & Computer Use
│   └── README.md                           # Desktop automation architecture
│
├── 07-agentic-workflows/                   # Multi-agent architectures & design patterns
│   └── README.md                           # Chaining, routing, orchestrator-workers
│
├── .env.example                            # API key configuration template
├── .gitignore                              # Security exclusions (keys, venvs, cache)
├── requirements.txt                        # Python dependencies
└── README.md                               # Project overview
```

---

## ⚡ Quickstart Setup

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
