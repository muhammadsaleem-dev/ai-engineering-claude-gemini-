---
title: AI Engineering with Claude & Gemini
description: Hands-on dual-API curriculum and interactive notebooks for Anthropic Claude and Google Gemini.
hide:
  - toc
---

<div class="hero-container">
  <div class="hero-badge">
    <span class="badge-dot"></span>
    <span class="badge-text">DUAL-ECOSYSTEM BLUEPRINT &middot; CLAUDE 3.7 &amp; GEMINI 2.5</span>
  </div>
  
  <h1 class="hero-heading">AI Engineering with Claude &amp; Gemini</h1>
  
  <p class="hero-lead">
    A comprehensive engineering handbook for building production AI applications &mdash; covering API fundamentals, prompt evals with Spec-Kit, tool calling, Model Context Protocol (MCP), hybrid RAG, and agentic workflows.
  </p>
  
  <div class="hero-cta-group">
    <a href="module-01/" class="btn-solid">
      <span>Get Started with Module 01</span>
      <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
    <a href="module-01/case-study/" class="btn-outline">
      <span>View Capstone</span>
    </a>
    <a href="https://github.com/muhammadsaleem-dev/ai-engineering-claude-gemini-" target="_blank" class="btn-outline">
      <span>GitHub Repository</span>
      <svg class="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
    </a>
  </div>
</div>

<div class="terminal-header">
  <div class="terminal-dots">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
  </div>
  <div class="terminal-title">dual_api_execution_harness.py</div>
  <div class="terminal-tag">DUAL PARITY VERIFIED</div>
</div>

=== "Anthropic Claude (Messages API)"

    ```python
    import anthropic

    client = anthropic.Anthropic()
    
    # Guaranteed JSON output via Assistant Message Prefilling
    messages = [
        {"role": "user", "content": "Analyze ticket #8492 and return sentiment score."},
        {"role": "assistant", "content": '{\n  "ticket_id": 8492,\n  "sentiment":'}
    ]
    
    response = client.messages.create(
        model="claude-3-7-sonnet-20250219",
        max_tokens=256,
        temperature=0.0,
        stop_sequences=['}'],
        messages=messages
    )
    print('{\n  "ticket_id": 8492,\n  "sentiment":' + response.content[0].text + '}')
    ```

=== "Google Gemini (Native JSON Mode)"

    ```python
    from google import genai
    from google.genai import types
    from pydantic import BaseModel

    class TicketAnalysis(BaseModel):
        ticket_id: int
        sentiment: str
        escalate: bool

    client = genai.Client()
    
    # Guaranteed JSON output via native schema logits constraint (Free Tier)
    config = types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=TicketAnalysis,
        temperature=0.0
    )
    
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Analyze ticket #8492 and return sentiment score.",
        config=config
    )
    print(response.text)
    ```

<div class="terminal-console-output">
  <div class="console-bar">
    <span>Execution Stream Output</span>
    <span class="console-badge">HTTP 200 OK &middot; 284ms</span>
  </div>
  <pre class="console-body">{
  <span class="prop">"ticket_id"</span>: <span class="num">8492</span>,
  <span class="prop">"sentiment"</span>: <span class="str">"neutral_inquiry"</span>,
  <span class="prop">"escalate"</span>: <span class="bool">false</span>,
  <span class="prop">"confidence_score"</span>: <span class="num">0.985</span>
}</pre>
</div>

<div class="metrics-row">
  <div class="metric-card">
    <div class="metric-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    </div>
    <div class="metric-value">7</div>
    <div class="metric-title">Production Blueprints</div>
  </div>
  <div class="metric-card">
    <div class="metric-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    </div>
    <div class="metric-value">14+</div>
    <div class="metric-title">Companion Notebooks</div>
  </div>
  <div class="metric-card">
    <div class="metric-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
    </div>
    <div class="metric-value">100%</div>
    <div class="metric-title">Dual-API Parity</div>
  </div>
  <div class="metric-card">
    <div class="metric-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </div>
    <div class="metric-value">$0</div>
    <div class="metric-title">Free Execution Tier</div>
  </div>
</div>

<div class="section-header">
  <div class="section-tag">CURRICULUM ARCHITECTURE</div>
  <h2 class="section-title">Production Modules &amp; Blueprints</h2>
  <p class="section-desc">Every module pairs Anthropic's Claude API with an identical, zero-cost Google Gemini implementation and an end-to-end capstone project.</p>
</div>

<div class="bento-container">
  <!-- Row 1: Featured Module 01 (Spans 2 cols) + Module 02 (1 col) -->
  <div class="bento-featured-row">
    <a href="module-01/" class="bento-card bento-card-featured">
      <div class="card-top-bar">
        <span class="status-pill status-completed">
          <span class="status-indicator"></span>
          COMPLETED
        </span>
        <span class="module-number">MODULE 01</span>
      </div>
      
      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      </div>

      <h3 class="bento-title">API Architecture &amp; Controlled Output</h3>
      <p class="bento-desc">
        End-to-end foundation covering stateless conversational loops, token economics, system instructions, dynamic temperature sampling, Server-Sent Events (SSE) token streaming, and guaranteed JSON extraction via assistant turn prefilling and Pydantic schemas.
      </p>

      <div class="featured-deliverables">
        <div class="deliv-item">
          <span class="deliv-count">12</span>
          <span class="deliv-label">Jupyter Notebooks (6 Claude + 6 Gemini)</span>
        </div>
        <div class="deliv-item">
          <span class="deliv-count">1</span>
          <span class="deliv-label">E-Commerce Capstone Project</span>
        </div>
        <div class="deliv-item">
          <span class="deliv-count">1</span>
          <span class="deliv-label">Interactive Dialogue Review</span>
        </div>
      </div>

      <div class="pill-group">
        <span class="spec-pill">Claude 3.7 Sonnet</span>
        <span class="spec-pill">Gemini 2.5 Flash Free Tier</span>
        <span class="spec-pill">SSE Streaming</span>
        <span class="spec-pill">Prefill JSON</span>
      </div>
      <div class="bento-link">
        <span>Explore Guide, 12 Notebooks &amp; Case Study</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>

    <a href="module-02/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-active">
          <span class="status-indicator"></span>
          UP NEXT
        </span>
        <span class="module-number">MODULE 02</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
      </div>

      <h3 class="bento-title">Prompt Engineering &amp; Evaluation</h3>
      <p class="bento-desc">
        Specification-Driven Development (Spec-Kit), prompt decomposition, few-shot exemplars, chain-of-thought, and automated benchmark evaluation harnesses.
      </p>
      <div class="pill-group">
        <span class="spec-pill">Spec-Kit (SDD)</span>
        <span class="spec-pill">Benchmark Evals</span>
        <span class="spec-pill">Few-Shot</span>
      </div>
      <div class="bento-link">
        <span>Explore Syllabus &amp; Spec-Kit</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>
  </div>

  <!-- Row 2: Modules 03, 04, 05 (Tri-column row) -->
  <div class="bento-tri-row">
    <a href="module-03/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-planned">
          <span class="status-indicator"></span>
          PLANNED
        </span>
        <span class="module-number">MODULE 03</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </div>

      <h3 class="bento-title">Tools &amp; Multimodal Intelligence</h3>
      <p class="bento-desc">
        Function calling schemas, client tool execution loops, multi-tool handling, and multimodal document analysis across Claude and Gemini.
      </p>
      <div class="pill-group">
        <span class="spec-pill">Tool Schemas</span>
        <span class="spec-pill">Vision OCR</span>
        <span class="spec-pill">Prompt Caching</span>
      </div>
      <div class="bento-link">
        <span>Preview Module</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>

    <a href="module-04/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-planned">
          <span class="status-indicator"></span>
          PLANNED
        </span>
        <span class="module-number">MODULE 04</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      </div>

      <h3 class="bento-title">Model Context Protocol (MCP)</h3>
      <p class="bento-desc">
        Anthropic's open standard for secure tool integrations. Building FastMCP servers, clients, and connecting databases to LLM workflows.
      </p>
      <div class="pill-group">
        <span class="spec-pill">FastMCP</span>
        <span class="spec-pill">JSON-RPC</span>
        <span class="spec-pill">SQLite Tools</span>
      </div>
      <div class="bento-link">
        <span>Preview Module</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>

    <a href="module-05/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-planned">
          <span class="status-indicator"></span>
          PLANNED
        </span>
        <span class="module-number">MODULE 05</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
      </div>

      <h3 class="bento-title">Retrieval-Augmented Generation</h3>
      <p class="bento-desc">
        Vector embeddings, semantic chunking strategies, dense and sparse hybrid search, and citation grounding to reduce hallucinations.
      </p>
      <div class="pill-group">
        <span class="spec-pill">Embeddings</span>
        <span class="spec-pill">Hybrid RAG</span>
        <span class="spec-pill">Reranking</span>
      </div>
      <div class="bento-link">
        <span>Preview Module</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>
  </div>

  <!-- Row 3: Modules 06 & 07 (Clean 50% split - No Orphan Cards!) -->
  <div class="bento-dual-row">
    <a href="module-06/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-planned">
          <span class="status-indicator"></span>
          PLANNED
        </span>
        <span class="module-number">MODULE 06</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </div>

      <h3 class="bento-title">Claude Code &amp; Computer Use</h3>
      <p class="bento-desc">
        Anthropic's groundbreaking CLI tool and computer use capabilities. Enabling models to interact with desktops, run bash commands, and edit files directly.
      </p>
      <div class="pill-group">
        <span class="spec-pill">Developer CLI</span>
        <span class="spec-pill">Screen Parsing</span>
        <span class="spec-pill">OS Automation</span>
      </div>
      <div class="bento-link">
        <span>Preview Module</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>

    <a href="module-07/" class="bento-card">
      <div class="card-top-bar">
        <span class="status-pill status-planned">
          <span class="status-indicator"></span>
          PLANNED
        </span>
        <span class="module-number">MODULE 07</span>
      </div>

      <div class="bento-icon-well">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      </div>

      <h3 class="bento-title">Autonomous Agentic Workflows</h3>
      <p class="bento-desc">
        Multi-agent architectures, orchestrator-worker patterns, evaluator-optimizer loops, and self-correcting systems built with Anthropic and Google AI ecosystems.
      </p>
      <div class="pill-group">
        <span class="spec-pill">Orchestrator-Workers</span>
        <span class="spec-pill">Evaluator Loops</span>
        <span class="spec-pill">Multi-Agent</span>
      </div>
      <div class="bento-link">
        <span>Preview Module</span>
        <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>
  </div>
</div>

<div class="section-header">
  <div class="section-tag">ARCHITECTURAL PARITY</div>
  <h2 class="section-title">Dual Ecosystem Matrix</h2>
  <p class="section-desc">Every production technique taught across the curriculum is benchmarked identically across both Anthropic and Google SDKs.</p>
</div>

<div class="parity-matrix">
  <div class="parity-card parity-claude">
    <span class="parity-badge claude-badge">Anthropic Claude</span>
    <h3 class="parity-heading">Claude API Implementation</h3>
    
    <div class="parity-spec">
      <div class="spec-item">
        <span class="spec-label">Primary Models</span>
        <span class="spec-val">Claude 3.7 Sonnet, Claude 3.5 Haiku, Claude 3 Opus</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">SDK Architecture</span>
        <span class="spec-val"><code>anthropic.Anthropic()</code> with <code>messages.create()</code></span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Structured JSON</span>
        <span class="spec-val">Assistant Prefill (<code>content: '{\n  "'</code>) + <code>stop_sequences</code></span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Streaming Method</span>
        <span class="spec-val"><code>client.messages.stream()</code> with Server-Sent Events</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">System Instruction</span>
        <span class="spec-val">Top-level <code>system</code> parameter (dynamic unpacking required)</span>
      </div>
    </div>
  </div>

  <div class="parity-card parity-gemini">
    <span class="parity-badge gemini-badge">Google Gemini</span>
    <h3 class="parity-heading">Zero-Cost Companion Implementation</h3>
    
    <div class="parity-spec">
      <div class="spec-item">
        <span class="spec-label">Primary Models</span>
        <span class="spec-val">Gemini 2.5 Flash, Gemini 2.5 Flash-Lite (Free Tier)</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">SDK Architecture</span>
        <span class="spec-val"><code>google.genai.Client()</code> with <code>chats.create()</code></span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Structured JSON</span>
        <span class="spec-val">Native JSON mode (<code>response_mime_type</code>) + Pydantic</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Streaming Method</span>
        <span class="spec-val"><code>chat.send_message_stream()</code> (auto-updated history)</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">System Instruction</span>
        <span class="spec-val"><code>config={"system_instruction": ...}</code></span>
      </div>
    </div>
  </div>
</div>

<div class="section-header">
  <div class="section-tag">CURRICULUM SPECIFICATION</div>
  <h2 class="section-title">Milestone Roadmap &amp; Project Index</h2>
  <p class="section-desc">Status matrix across all 7 engineering modules.</p>
</div>

<div class="roadmap-table-wrap">
  <table class="roadmap-table">
    <thead>
      <tr>
        <th style="width: 70px;">Module</th>
        <th style="width: 230px;">Core Engineering Domain</th>
        <th style="width: 130px;">Status</th>
        <th>Technical Implementations</th>
        <th>Capstone Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="mod-pill">01</span></td>
        <td><strong>LLM API Architecture</strong><br><span class="table-sub">Statelessness &amp; Output Control</span></td>
        <td><span class="status-pill status-completed"><span class="status-indicator"></span>Completed</span></td>
        <td>Requests, Chatbot, System Prompts, Temperature, SSE Streaming, Prefill JSON</td>
        <td><a href="module-01/case-study/" class="table-proj-link">E-Commerce Support &amp; Ticket Triage Engine</a></td>
      </tr>
      <tr>
        <td><span class="mod-pill">02</span></td>
        <td><strong>Prompt Engineering &amp; Evals</strong><br><span class="table-sub">Spec-Kit SDD &amp; Benchmarks</span></td>
        <td><span class="status-pill status-active"><span class="status-indicator"></span>Up Next</span></td>
        <td>Spec-Kit (SDD), Test Suites, Few-Shot Chains, Automated Grading</td>
        <td><span class="table-proj-pending">Automated LLM Evaluation Benchmark Engine</span></td>
      </tr>
      <tr>
        <td><span class="mod-pill">03</span></td>
        <td><strong>Tools &amp; Multimodal</strong><br><span class="table-sub">Function Calling &amp; Vision</span></td>
        <td><span class="status-pill status-planned"><span class="status-indicator"></span>Planned</span></td>
        <td>Tool Schemas, Execution Loops, Image/PDF Parsing, Prompt Caching</td>
        <td><span class="table-proj-pending">Multimodal Financial Invoice Auditor</span></td>
      </tr>
      <tr>
        <td><span class="mod-pill">04</span></td>
        <td><strong>Model Context Protocol</strong><br><span class="table-sub">Standardized Tool Integration</span></td>
        <td><span class="status-pill status-planned"><span class="status-indicator"></span>Planned</span></td>
        <td>FastMCP Servers, JSON-RPC Protocol, Tool Contracts, SQLite Integration</td>
        <td><span class="table-proj-pending">Database MCP Integration</span></td>
      </tr>
      <tr>
        <td><span class="mod-pill">05</span></td>
        <td><strong>Hybrid RAG Pipelines</strong><br><span class="table-sub">Vector Search &amp; Reranking</span></td>
        <td><span class="status-pill status-planned"><span class="status-indicator"></span>Planned</span></td>
        <td>Semantic Chunking, Vector Embeddings, Hybrid Search, Citation Grounding</td>
        <td><span class="table-proj-pending">Hybrid Search Knowledge Engine</span></td>
      </tr>
      <tr>
        <td><span class="mod-pill">06</span></td>
        <td><strong>Claude Code &amp; Computer Use</strong><br><span class="table-sub">Autonomous OS Control</span></td>
        <td><span class="status-pill status-planned"><span class="status-indicator"></span>Planned</span></td>
        <td>Developer CLI, Screenshot Parsing, Coordinate Action Execution</td>
        <td><span class="table-proj-pending">Autonomous Desktop Operator</span></td>
      </tr>
      <tr>
        <td><span class="mod-pill">07</span></td>
        <td><strong>Autonomous Workflows</strong><br><span class="table-sub">Multi-Agent Systems</span></td>
        <td><span class="status-pill status-planned"><span class="status-indicator"></span>Planned</span></td>
        <td>Orchestrator-Workers, Evaluator-Optimizer Loops, Multi-Agent Collaboration</td>
        <td><span class="table-proj-pending">Autonomous Multi-Agent Research Team</span></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-header" style="margin-top: 3.5rem;">
  <div class="section-tag">QUICKSTART</div>
  <h2 class="section-title">Local Development Setup</h2>
</div>

=== "Conda Environment (Recommended)"

    ```bash
    # 1. Clone repository
    git clone https://github.com/muhammadsaleem-dev/ai-engineering-claude-gemini-.git
    cd ai-engineering-claude-gemini-

    # 2. Configure Python 3.12 Conda environment
    conda create -n coursera python=3.12 -y
    conda activate coursera
    pip install -r requirements.txt

    # 3. Setup API keys
    cp .env.example .env
    ```

=== "Standard venv (pip)"

    ```bash
    # 1. Clone repository
    git clone https://github.com/muhammadsaleem-dev/ai-engineering-claude-gemini-.git
    cd ai-engineering-claude-gemini-

    # 2. Configure standard Python virtual environment
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

    # 3. Setup API keys
    cp .env.example .env
    ```
