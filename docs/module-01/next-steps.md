# Module 01 Summary & Next Steps

<div class="next-steps-banner">
  <div class="next-banner-badge">
    <span class="badge-dot"></span>
    MODULE 01 COMPLETE
  </div>
  <h2 class="next-banner-title">Congratulations on completing Module 01!</h2>
  <p class="next-banner-desc">You now have a solid foundation for building applications with both Anthropic Claude and Google Gemini APIs.</p>
</div>

---

## 🏆 What You've Learned in Module 01

In this module, you covered the 5 core techniques for working with LLM APIs:

| Competency | Problem Solved | Implementations in This Repo |
| :--- | :--- | :--- |
| **Model Selection** | Latency vs. reasoning cost trade-offs | Claude 3.5 Sonnet / Haiku &bull; Gemini 2.5 Flash / Pro ([001-claude](notebooks/001-claude-requests.ipynb), [001-gemini](notebooks/001-gemini-requests.ipynb)) |
| **Authenticated Requests** | Secure API invocation without key leakage | Native SDK client patterns (`anthropic.Anthropic`, `google.genai.Client`) |
| **Multi-Turn Continuity** | Session state and conversational memory | Append-only history arrays, role alternations ([002-chatbot](notebooks/002-claude-chatbot-exercise.ipynb)) |
| **System Prompts & Guardrails** | Corporate policy, brand tone, boundaries | Hard refund limits, zero email leaks, prompt steering ([003-prompts](notebooks/003-claude-system-prompts.ipynb)) |
| **Temperature & Sampling** | Hallucination control vs. creativity | Temperature scaling (`0.0` to `1.0`), Top-P nucleus sampling ([004-temp](notebooks/004-claude-temperature.ipynb)) |
| **Response Streaming** | Eliminating frozen screens (sub-second TTFT) | Server-Sent Events (SSE) via `.stream` and `send_message_stream` ([005-stream](notebooks/005-claude-streaming.ipynb)) |
| **Structured Output** | Connecting models to SQL, CRMs, and APIs | Assistant prefilling + stop sequences (Claude) & Native Pydantic JSON (Gemini) ([006-json](notebooks/006-claude-controlling-output.ipynb)) |

---

## 🛠️ Coursera Practice Projects Realized

Coursera recommends reinforcing your foundational knowledge with four core project architectures. Here is how they map to what we built:

<div class="practice-projects-grid">
  <div class="practice-project-card project-completed">
    <div class="project-card-header">
      <span class="project-icon">💬</span>
      <span class="project-status-tag status-done">Delivered &bull; Capstone</span>
    </div>
    <h4>1. Customer Support &amp; Triage Chatbot</h4>
    <p>Build a customer service chatbot with personality, corporate policy defense, and automated CRM escalation.</p>
    <div class="project-card-footer">
      <a href="../case-study/" class="project-card-link">Explore Capstone Engine &rarr;</a>
    </div>
  </div>

  <div class="practice-project-card">
    <div class="project-card-header">
      <span class="project-icon">📝</span>
      <span class="project-status-tag status-planned">Module 02 Project</span>
    </div>
    <h4>2. Structured Content Generator</h4>
    <p>Create a tool that generates strictly validated newsletters, product specs, and marketing copy using JSON Mode.</p>
    <div class="project-card-footer">
      <span class="project-footer-note">Scheduled for Module 02 Evals</span>
    </div>
  </div>

  <div class="practice-project-card">
    <div class="project-card-header">
      <span class="project-icon">💻</span>
      <span class="project-status-tag status-planned">Module 02 Project</span>
    </div>
    <h4>3. Automated Code Explainer</h4>
    <p>Build an interactive app that ingests code snippets, generates AST-level explanations, and grades prompt clarity.</p>
    <div class="project-card-footer">
      <span class="project-footer-note">Scheduled for Module 02 Evals</span>
    </div>
  </div>

  <div class="practice-project-card">
    <div class="project-card-header">
      <span class="project-icon">📊</span>
      <span class="project-status-tag status-planned">Module 02 Project</span>
    </div>
    <h4>4. Unstructured Data Extractor</h4>
    <p>Extract typed entities and schema-compliant relational data from messy invoices, receipts, and user reviews.</p>
    <div class="project-card-footer">
      <span class="project-footer-note">Scheduled for Module 02 Evals</span>
    </div>
  </div>
</div>

---

## 🚀 Continue Your Journey: Module 02

Ready to level up? The next module in this series is **Prompt Engineering & Evaluation**, where you'll learn:

- **Systematic prompt evaluation techniques**
- **Building evaluation pipelines**
- **Advanced prompt engineering strategies**
- **Optimization through testing and iteration**

<div class="next-module-cta-box">
  <div class="cta-left">
    <span class="cta-badge">NEXT MODULE IN SERIES</span>
    <h3 class="cta-title">Module 02: Prompt Engineering &amp; Evaluation</h3>
    <p class="cta-desc">Learn systematic prompt evaluation, automated evaluation pipelines, and advanced prompt engineering strategies with Claude and Gemini.</p>
  </div>
  <div class="cta-right">
    <a href="../../module-02/" class="cta-btn">
      <span>Start Module 02</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</div>

---

## 🌐 Community & Official Resources

- **Anthropic Developer Discord**: Connect with engineers building on Claude at [discord.gg/anthropic](https://discord.gg/anthropic)
- **Google AI Developer Forum**: Discuss Gemini API techniques at [discuss.ai.google.dev](https://discuss.ai.google.dev/)
- **Anthropic Prompt Library**: Official high-performance prompt templates at [docs.anthropic.com/en/prompt-library](https://docs.anthropic.com/en/prompt-library/library)
- **Google GenAI Cookbook**: Real-world recipe implementations at [github.com/google-gemini/cookbook](https://github.com/google-gemini/cookbook)
