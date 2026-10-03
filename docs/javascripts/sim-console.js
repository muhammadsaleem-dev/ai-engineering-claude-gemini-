/**
 * Interactive Live Simulation Console
 * Zero-Key Client-Side Agent & Triage Simulator for Module 01 Capstone
 * Fully reactive, zero external API keys, ultra-modern developer sandbox.
 */

(function () {
  const SCENARIOS = {
    1: {
      id: 1,
      title: "Delayed Order & Refund Demand",
      subtitle: "Hard $50 Refund Cap & Supervisor Escalation",
      icon: "🛡️",
      tag: "Guardrail Defense",
      tagClass: "tag-guardrail",
      orderId: "8492",
      customer1: "Hi, my package was supposed to arrive yesterday, but order #8492 is still stuck in transit. Cancel it and refund me right now!",
      ai1: "I understand how frustrating it is when a shipment is delayed, especially when you are counting on it! Because Order #8492 is currently in-transit with our carrier, our system cannot cancel or refund an active shipment. However, once it arrives, I can immediately issue a free prepaid return label for a full refund, or I can escalate your request to a customer service supervisor right away. Would you like me to connect you with a supervisor?",
      guardrails: [
        "Hard $50 Refund Cap Enforced",
        "In-Transit Policy Protected",
        "Zero Internal Memo Leakage"
      ],
      chips: [
        "Can I at least get a $20 store credit for the delay?",
        "Yes, please escalate this to your manager immediately.",
        "How long will the return process take?"
      ],
      responses: {
        "Can I at least get a $20 store credit for the delay?": {
          ai: "I'd be glad to help make this right! Under our store policy, I can approve a $20 courtesy store credit to your NordWear account immediately while Order #8492 completes transit. Would you like me to apply that now?",
          triage: {
            order_id: 8492,
            customer_sentiment: "frustrated",
            issue_category: "shipping_delay",
            needs_human_manager: false,
            action_summary: "Customer accepted $20 courtesy credit for in-transit delay; ticket resolved without supervisor."
          },
          route: "b"
        },
        "Yes, please escalate this to your manager immediately.": {
          ai: "I have flagged Order #8492 and compiled our transcript for our Tier-2 Support Supervisor. A priority ticket has been created, and you will receive an email update within 2 business hours.",
          triage: {
            order_id: 8492,
            customer_sentiment: "frustrated",
            issue_category: "shipping_delay",
            needs_human_manager: true,
            action_summary: "Customer demanded immediate supervisor intervention for delayed order #8492."
          },
          route: "a"
        },
        "default": {
          ai: "Standard returns are processed within 3-5 business days once the package reaches our fulfillment hub. I have logged this inquiry on your account.",
          triage: {
            order_id: 8492,
            customer_sentiment: "neutral",
            issue_category: "return_request",
            needs_human_manager: false,
            action_summary: "Provided return turnaround timeframe for order #8492."
          },
          route: "b"
        }
      },
      defaultTriage: {
        order_id: 8492,
        customer_sentiment: "frustrated",
        issue_category: "shipping_delay",
        needs_human_manager: true,
        action_summary: "Order in-transit; cancellation denied per policy, offered free return label and manager escalation."
      },
      defaultRoute: "a"
    },
    2: {
      id: 2,
      title: "Damaged Garment on Arrival",
      subtitle: "Auto-Approved Replacement & Return Label",
      icon: "⚡",
      tag: "Auto-Approve",
      tagClass: "tag-auto",
      orderId: "5120",
      customer1: "I opened my package for order #5120 and the seam on the jacket is torn. I need a replacement or refund.",
      ai1: "I am so sorry to hear that your jacket arrived with a torn seam! That certainly does not meet our quality standards. Because this item arrived damaged, I can immediately issue a free prepaid return label and queue an expedited replacement at no extra charge. Would you prefer a replacement or a direct refund to your card?",
      guardrails: [
        "Damage Quality Policy Active",
        "Prepaid Return Label Auto-Approved",
        "Expedited 2-Day Re-ship Queued"
      ],
      chips: [
        "Please send an expedited replacement in size Medium.",
        "Just give me a refund to my credit card.",
        "Do I need to send photos of the tear?"
      ],
      responses: {
        "Please send an expedited replacement in size Medium.": {
          ai: "Done! I have created replacement order #5120-R in size Medium with complimentary 2-day express shipping, and your prepaid return label is in your inbox.",
          triage: {
            order_id: 5120,
            customer_sentiment: "neutral",
            issue_category: "product_defect",
            needs_human_manager: false,
            action_summary: "Auto-approved replacement #5120-R for damaged jacket with prepaid return label."
          },
          route: "b"
        },
        "Just give me a refund to my credit card.": {
          ai: "Understood! Your prepaid return label has been emailed. As soon as the carrier scans the parcel, your full refund will automatically credit to your card.",
          triage: {
            order_id: 5120,
            customer_sentiment: "neutral",
            issue_category: "refund_request",
            needs_human_manager: false,
            action_summary: "Initiated carrier-scan refund workflow with return label for damaged garment."
          },
          route: "b"
        },
        "default": {
          ai: "No photo is required for damaged apparel claims under $100. Your prepaid label is ready in your account portal.",
          triage: {
            order_id: 5120,
            customer_sentiment: "neutral",
            issue_category: "product_defect",
            needs_human_manager: false,
            action_summary: "Clarified photo policy and provided return portal instructions."
          },
          route: "b"
        }
      },
      defaultTriage: {
        order_id: 5120,
        customer_sentiment: "neutral",
        issue_category: "product_defect",
        needs_human_manager: false,
        action_summary: "Defective jacket reported; offered immediate replacement or prepaid return refund."
      },
      defaultRoute: "b"
    },
    3: {
      id: 3,
      title: "Sizing & Fabric Care Inquiry",
      subtitle: "Deterministic Factual Guidance (Temp: 0.1)",
      icon: "🧶",
      tag: "Low Temp 0.1",
      tagClass: "tag-info",
      orderId: null,
      customer1: "Does the Nordic Merino Wool Sweater run true to size, and can it be machine washed?",
      ai1: "The Nordic Merino Wool Sweater features a relaxed Scandinavian fit and runs true to size. If you prefer a tailored look, we recommend sizing down. Regarding care: we strictly recommend hand washing in cold water with wool detergent and laying flat to dry; machine washing can cause fiber shrinkage.",
      guardrails: [
        "Factual Temperature 0.1",
        "Zero Hallucinated Care Instructions",
        "30-Day Free Exchange Policy"
      ],
      chips: [
        "Can I exchange it for free if the size doesn't fit?",
        "What colors are currently in stock?",
        "Is shipping free on this item?"
      ],
      responses: {
        "Can I exchange it for free if the size doesn't fit?": {
          ai: "Yes! NordWear provides 100% free size exchanges within 30 days of delivery with a prepaid return slip in the box.",
          triage: {
            order_id: null,
            customer_sentiment: "positive",
            issue_category: "general",
            needs_human_manager: false,
            action_summary: "Pre-sale inquiry regarding 30-day exchange policy answered."
          },
          route: "b"
        },
        "default": {
          ai: "Standard shipping is free on all orders over $75, and we offer 30-day hassle-free returns on all knitwear.",
          triage: {
            order_id: null,
            customer_sentiment: "positive",
            issue_category: "general",
            needs_human_manager: false,
            action_summary: "Pre-sale inquiry regarding shipping and sizing resolved."
          },
          route: "b"
        }
      },
      defaultTriage: {
        order_id: null,
        customer_sentiment: "positive",
        issue_category: "general",
        needs_human_manager: false,
        action_summary: "Pre-sale fit and fabric care instructions provided for Merino Sweater."
      },
      defaultRoute: "b"
    }
  };

  let activeScenarioId = 1;
  let isStreaming = false;
  let activeStreamInterval = null;
  let activeStreamTimeout = null;

  function initSimConsole() {
    const root = document.getElementById("sim-console-root");
    if (!root) return;

    renderConsole(root);
  }

  function renderConsole(root) {
    const sc = SCENARIOS[activeScenarioId];

    root.innerHTML = `
      <div class="sim-wrapper">
        <!-- Control Header -->
        <div class="sim-header">
          <div class="sim-header-title-box">
            <span class="sim-live-pulse">
              <span class="sim-live-dot"></span>
              LIVE INTERACTIVE AGENT STUDIO
            </span>
            <h3 class="sim-main-title">End-to-End Triage &amp; Streaming Sandbox</h3>
            <p class="sim-main-desc">Simulating real-time LLM inference, guardrail enforcement, and deterministic JSON dispatch with 0 API keys.</p>
          </div>
          <div class="sim-metrics-bar">
            <div class="sim-metric-pill">
              <span class="sim-metric-label">Model</span>
              <span class="sim-metric-val">Gemini 3.5 Flash</span>
            </div>
            <div class="sim-metric-pill">
              <span class="sim-metric-label">TTFT</span>
              <span class="sim-metric-val" id="sim-metric-ttft">0.62s</span>
            </div>
            <div class="sim-metric-pill">
              <span class="sim-metric-label">Tokens</span>
              <span class="sim-metric-val" id="sim-metric-tokens">0 tok</span>
            </div>
            <div class="sim-metric-pill">
              <span class="sim-metric-label">Throughput</span>
              <span class="sim-metric-val" id="sim-metric-speed">54 t/s</span>
            </div>
            <div class="sim-metric-pill sim-pill-secure">
              <span class="sim-metric-label">Security</span>
              <span class="sim-metric-val">Zero-Key Client Sandbox 🔒</span>
            </div>
          </div>
        </div>

        <!-- Scenario Selector Tabs -->
        <div class="sim-scenario-bar">
          <div class="sim-bar-label-box">
            <span class="sim-bar-label">SELECT SCENARIO:</span>
            <span class="sim-bar-sub">Click to switch test vector</span>
          </div>
          <div class="sim-tabs-group">
            ${Object.values(SCENARIOS).map(s => `
              <button class="sim-tab-btn ${activeScenarioId === s.id ? 'active' : ''}" data-scenario="${s.id}">
                <span class="sim-tab-icon">${s.icon}</span>
                <div class="sim-tab-info">
                  <div class="sim-tab-top-row">
                    <span class="sim-tab-title">${s.title}</span>
                    <span class="sim-tab-tag ${s.tagClass}">${s.tag}</span>
                  </div>
                  <span class="sim-tab-desc">${s.subtitle}</span>
                </div>
              </button>
            `).join('')}
          </div>
          <div class="sim-actions-group">
            <button class="sim-action-btn sim-btn-play" id="sim-btn-replay" title="Re-run Streaming Inference">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span>Stream</span>
            </button>
            <button class="sim-action-btn sim-btn-fast" id="sim-btn-fast" title="Instantly Complete Pipeline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Instant</span>
            </button>
            <button class="sim-action-btn sim-btn-reset" id="sim-btn-reset" title="Reset Session">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              <span>Reset</span>
            </button>
          </div>
        </div>

        <!-- 2-Column Split Workspace -->
        <div class="sim-workspace-grid">
          <!-- Left Column: Live Streaming Customer Chat -->
          <div class="sim-panel sim-panel-chat">
            <div class="sim-panel-header">
              <div class="sim-window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="sim-panel-title">Streaming Chat Dialogue &bull; Pillars 1&ndash;4</span>
              <span class="sim-chat-state" id="sim-chat-state-badge">
                <span class="sim-state-dot"></span>
                <span id="sim-state-text">Initializing...</span>
              </span>
            </div>

            <!-- Chat Stream Scroll Area -->
            <div class="sim-chat-body" id="sim-chat-body">
              <!-- Customer Turn 1 -->
              <div class="sim-msg sim-msg-customer">
                <div class="sim-msg-meta">
                  <span class="sim-avatar">👤</span>
                  <span class="sim-author">Customer</span>
                  ${sc.orderId ? `<span class="sim-meta-badge">Order #${sc.orderId}</span>` : '<span class="sim-meta-badge">Pre-Sale</span>'}
                  <span class="sim-time">Turn 1</span>
                </div>
                <div class="sim-msg-bubble">
                  ${sc.customer1}
                </div>
              </div>

              <!-- AI Agent Turn 1 -->
              <div class="sim-msg sim-msg-ai" id="sim-msg-ai-turn1">
                <div class="sim-msg-meta">
                  <span class="sim-avatar sim-avatar-ai">✨</span>
                  <span class="sim-author">NordWear AI Support</span>
                  <span class="sim-model-tag">Gemini Flash &bull; Temp: 0.1</span>
                  <span class="sim-time">Turn 1</span>
                </div>
                <div class="sim-msg-bubble sim-bubble-ai">
                  <div class="sim-stream-text" id="sim-ai-text-1"></div>
                  <span class="sim-stream-cursor" id="sim-ai-cursor-1"></span>
                </div>
                <!-- Dynamic Guardrail Badges -->
                <div class="sim-guardrails-row" id="sim-guardrails-row">
                  ${sc.guardrails.map(g => `<span class="sim-guardrail-badge"><span class="badge-icon">🛡️</span> ${g}</span>`).join('')}
                </div>
              </div>

              <!-- Turn 2 Container (Populated dynamically) -->
              <div id="sim-turn2-container"></div>
            </div>

            <!-- Interactive Follow-Up Controls -->
            <div class="sim-followup-tray">
              <div class="sim-chips-label-row">
                <span class="sim-chips-label">TURN 2 FOLLOW-UPS (TEST MULTI-TURN CONTINUITY):</span>
                <span class="sim-chips-sub">Click a prompt to evaluate context persistence</span>
              </div>
              <div class="sim-chips-group" id="sim-chips-group">
                ${sc.chips.map(chip => `
                  <button class="sim-chip-btn" data-text="${chip}">
                    <span class="chip-sparkle">💬</span>
                    <span>${chip}</span>
                    <span class="chip-arrow">&rarr;</span>
                  </button>
                `).join('')}
              </div>
              <!-- Custom input box -->
              <form class="sim-input-row" id="sim-custom-form">
                <input type="text" class="sim-input-field" id="sim-custom-input" placeholder="Type custom message to test context preservation..." autocomplete="off">
                <button type="submit" class="sim-send-btn" id="sim-send-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Right Column: Automated Backend Triage & Action Dispatch -->
          <div class="sim-panel sim-panel-triage">
            <div class="sim-panel-header">
              <div class="sim-window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="sim-panel-title">Automated Backend Triage &bull; Pillar 5</span>
              <span class="sim-schema-badge" id="sim-schema-status">
                <span class="sim-schema-dot"></span>
                Pydantic v2 Validated ✓
              </span>
            </div>

            <div class="sim-triage-body">
              <!-- JSON Output Preview -->
              <div class="sim-json-window">
                <div class="sim-json-top">
                  <span class="sim-json-tag">response_mime_type="application/json"</span>
                  <div class="sim-json-top-right">
                    <span class="sim-json-latency" id="sim-triage-latency">Latency: 198ms</span>
                    <button class="sim-copy-btn" id="sim-copy-json" title="Copy JSON">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
                <pre class="sim-json-pre"><code id="sim-json-code">{\n  <span class="sim-jk">"status"</span>: <span class="sim-jv-str">"Waiting for chat stream completion..."</span>\n}</code></pre>
              </div>

              <!-- Workflow Dispatch Routes -->
              <div class="sim-dispatch-container">
                <div class="sim-dispatch-header">
                  <span class="sim-dispatch-title">DOWNSTREAM WORKFLOW ACTIONS:</span>
                  <span class="sim-dispatch-sub">Branches deterministically on Pydantic booleans</span>
                </div>

                <!-- Route A -->
                <div class="sim-route-card" id="sim-route-a">
                  <div class="sim-route-badge-row">
                    <span class="sim-route-beacon"></span>
                    <strong class="sim-route-title">Route A: Manager Escalation</strong>
                    <code class="sim-route-rule">needs_human_manager == true</code>
                  </div>
                  <p class="sim-route-desc">Dispatches priority escalation ticket to Zendesk Tier-2 Supervisor Queue with chat transcript.</p>
                  <div class="sim-route-action-pill" id="sim-route-a-pill">
                    <span class="sim-action-dot"></span>
                    <span id="sim-route-a-text">TICKET #ZD-8492 QUEUED</span>
                  </div>
                </div>

                <!-- Route B -->
                <div class="sim-route-card" id="sim-route-b">
                  <div class="sim-route-badge-row">
                    <span class="sim-route-beacon"></span>
                    <strong class="sim-route-title">Route B: Standard PostgreSQL Resolution</strong>
                    <code class="sim-route-rule">needs_human_manager == false</code>
                  </div>
                  <p class="sim-route-desc">Mutates order table in PostgreSQL and generates automated return label tracking barcode.</p>
                  <div class="sim-route-action-pill" id="sim-route-b-pill">
                    <span class="sim-action-dot"></span>
                    <span id="sim-route-b-text">DB STATUS UPDATED &bull; RETURN LABEL SENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    bindEvents(root);
    // Start initial stream
    startTurn1Stream(root, false);
  }

  function bindEvents(root) {
    // Scenario tabs
    root.querySelectorAll(".sim-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-scenario"), 10);
        if (id !== activeScenarioId) {
          activeScenarioId = id;
          clearTimers();
          renderConsole(root);
        }
      });
    });

    // Reset button
    const resetBtn = root.querySelector("#sim-btn-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        clearTimers();
        renderConsole(root);
      });
    }

    // Replay streaming button
    const replayBtn = root.querySelector("#sim-btn-replay");
    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        clearTimers();
        renderConsole(root);
      });
    }

    // Fast-forward instant complete button
    const fastBtn = root.querySelector("#sim-btn-fast");
    if (fastBtn) {
      fastBtn.addEventListener("click", () => {
        clearTimers();
        instantCompleteTurn1(root);
      });
    }

    // Copy JSON button
    const copyBtn = root.querySelector("#sim-copy-json");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const codeEl = root.querySelector("#sim-json-code");
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.innerText).then(() => {
            copyBtn.innerHTML = `<span>Copied! ✓</span>`;
            setTimeout(() => {
              copyBtn.innerHTML = `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>Copy</span>
              `;
            }, 1800);
          });
        }
      });
    }

    // Quick chips
    root.querySelectorAll(".sim-chip-btn").forEach(chip => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-text");
        triggerTurn2(root, text);
      });
    });

    // Custom form submit
    const form = root.querySelector("#sim-custom-form");
    const input = root.querySelector("#sim-custom-input");
    if (form && input) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
          input.value = "";
          triggerTurn2(root, text);
        }
      });
    }
  }

  function clearTimers() {
    if (activeStreamInterval) {
      clearInterval(activeStreamInterval);
      activeStreamInterval = null;
    }
    if (activeStreamTimeout) {
      clearTimeout(activeStreamTimeout);
      activeStreamTimeout = null;
    }
    isStreaming = false;
  }

  function startTurn1Stream(root, instant) {
    const sc = SCENARIOS[activeScenarioId];
    const textTarget = root.querySelector("#sim-ai-text-1");
    const cursor = root.querySelector("#sim-ai-cursor-1");
    const stateBadge = root.querySelector("#sim-chat-state-badge");
    const stateText = root.querySelector("#sim-state-text");
    const ttftMetric = root.querySelector("#sim-metric-ttft");
    const tokensMetric = root.querySelector("#sim-metric-tokens");

    if (!textTarget) return;

    if (instant) {
      instantCompleteTurn1(root);
      return;
    }

    textTarget.textContent = "";
    cursor.style.display = "inline-block";
    if (stateText) stateText.textContent = "Streaming SSE Tokens...";
    if (stateBadge) stateBadge.className = "sim-chat-state state-streaming";
    isStreaming = true;

    let charIndex = 0;
    const fullText = sc.ai1;
    const estimatedTokens = Math.round(fullText.length / 3.8);

    // Initial simulated TTFT delay (200ms)
    activeStreamTimeout = setTimeout(() => {
      if (ttftMetric) ttftMetric.textContent = "0.58s";

      // Stream in chunks of 3-4 chars every 24ms (~55 tokens/second)
      activeStreamInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          const chunkSize = Math.min(Math.floor(Math.random() * 3) + 3, fullText.length - charIndex);
          textTarget.textContent += fullText.substr(charIndex, chunkSize);
          charIndex += chunkSize;

          const currentTok = Math.round(charIndex / 3.8);
          if (tokensMetric) tokensMetric.textContent = `${currentTok} tok`;
        } else {
          clearInterval(activeStreamInterval);
          activeStreamInterval = null;
          cursor.style.display = "none";
          if (stateText) stateText.textContent = "Turn 1 Completed";
          if (stateBadge) stateBadge.className = "sim-chat-state state-done";
          if (tokensMetric) tokensMetric.textContent = `${estimatedTokens} tok`;
          isStreaming = false;

          // Render default triage for turn 1
          renderTriage(root, sc.defaultTriage, sc.defaultRoute);
        }
      }, 24);
    }, 200);
  }

  function instantCompleteTurn1(root) {
    const sc = SCENARIOS[activeScenarioId];
    const textTarget = root.querySelector("#sim-ai-text-1");
    const cursor = root.querySelector("#sim-ai-cursor-1");
    const stateBadge = root.querySelector("#sim-chat-state-badge");
    const stateText = root.querySelector("#sim-state-text");
    const tokensMetric = root.querySelector("#sim-metric-tokens");

    if (!textTarget) return;

    textTarget.textContent = sc.ai1;
    cursor.style.display = "none";
    if (stateText) stateText.textContent = "Turn 1 Completed";
    if (stateBadge) stateBadge.className = "sim-chat-state state-done";
    const estimatedTokens = Math.round(sc.ai1.length / 3.8);
    if (tokensMetric) tokensMetric.textContent = `${estimatedTokens} tok`;
    isStreaming = false;

    renderTriage(root, sc.defaultTriage, sc.defaultRoute);
  }

  function triggerTurn2(root, userText) {
    if (isStreaming) return;

    const sc = SCENARIOS[activeScenarioId];
    const turn2Container = root.querySelector("#sim-turn2-container");
    const stateBadge = root.querySelector("#sim-chat-state-badge");
    const stateText = root.querySelector("#sim-state-text");
    const tokensMetric = root.querySelector("#sim-metric-tokens");
    if (!turn2Container) return;

    // Append customer turn 2
    turn2Container.innerHTML = `
      <div class="sim-msg sim-msg-customer">
        <div class="sim-msg-meta">
          <span class="sim-avatar">👤</span>
          <span class="sim-author">Customer</span>
          <span class="sim-time">Turn 2 &bull; Multi-Turn Follow-Up</span>
        </div>
        <div class="sim-msg-bubble">
          ${escapeHtml(userText)}
        </div>
      </div>
      <div class="sim-msg sim-msg-ai">
        <div class="sim-msg-meta">
          <span class="sim-avatar sim-avatar-ai">✨</span>
          <span class="sim-author">NordWear AI Support</span>
          <span class="sim-model-tag">Gemini Flash &bull; Context Memory Active</span>
          <span class="sim-time">Turn 2</span>
        </div>
        <div class="sim-msg-bubble sim-bubble-ai">
          <div class="sim-stream-text" id="sim-ai-text-2"></div>
          <span class="sim-stream-cursor" id="sim-ai-cursor-2"></span>
        </div>
      </div>
    `;

    // Scroll chat body down smoothly
    const chatBody = root.querySelector("#sim-chat-body");
    if (chatBody) {
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }

    // Match response or fallback
    const matched = sc.responses[userText] || sc.responses["default"];
    const textTarget = root.querySelector("#sim-ai-text-2");
    const cursor = root.querySelector("#sim-ai-cursor-2");

    isStreaming = true;
    if (stateText) stateText.textContent = "Streaming Turn 2 SSE...";
    if (stateBadge) stateBadge.className = "sim-chat-state state-streaming";
    cursor.style.display = "inline-block";

    let charIndex = 0;
    const fullText = matched.ai;
    const baseTokens = Math.round(sc.ai1.length / 3.8);

    activeStreamTimeout = setTimeout(() => {
      activeStreamInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          const chunkSize = Math.min(Math.floor(Math.random() * 3) + 3, fullText.length - charIndex);
          textTarget.textContent += fullText.substr(charIndex, chunkSize);
          charIndex += chunkSize;

          if (tokensMetric) {
            const turn2Tok = Math.round(charIndex / 3.8);
            tokensMetric.textContent = `${baseTokens + turn2Tok} tok`;
          }
        } else {
          clearInterval(activeStreamInterval);
          activeStreamInterval = null;
          cursor.style.display = "none";
          if (stateText) stateText.textContent = "Session Complete";
          if (stateBadge) stateBadge.className = "sim-chat-state state-done";
          isStreaming = false;

          renderTriage(root, matched.triage, matched.route);
        }
      }, 22);
    }, 180);
  }

  function renderTriage(root, triageData, route) {
    const codeEl = root.querySelector("#sim-json-code");
    const routeA = root.querySelector("#sim-route-a");
    const routeB = root.querySelector("#sim-route-b");
    const routeAText = root.querySelector("#sim-route-a-text");
    const routeBText = root.querySelector("#sim-route-b-text");
    if (!codeEl) return;

    // Format JSON with syntax color spans
    const jsonStr = JSON.stringify(triageData, null, 2);
    const syntaxHtml = jsonStr
      .replace(/"(\w+)":/g, '<span class="sim-jk">"$1"</span>:')
      .replace(/: "([^"]*)"/g, ': <span class="sim-jv-str">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="sim-jv-num">$1</span>')
      .replace(/: (true)/g, ': <span class="sim-jv-bool sim-jv-true">$1</span>')
      .replace(/: (false)/g, ': <span class="sim-jv-bool sim-jv-false">$1</span>')
      .replace(/: (null)/g, ': <span class="sim-jv-null">$1</span>');

    codeEl.innerHTML = syntaxHtml;

    // Update Action Text
    if (triageData.order_id) {
      if (routeAText) routeAText.textContent = `TICKET #ZD-${triageData.order_id} DISPATCHED`;
      if (routeBText) routeBText.textContent = `ORDER #${triageData.order_id} MUTATED • RETURN GENERATED`;
    }

    // Animate route highlight
    if (route === "a") {
      routeA.className = "sim-route-card active-route-a";
      routeB.className = "sim-route-card inactive-route";
    } else {
      routeB.className = "sim-route-card active-route-b";
      routeA.className = "sim-route-card inactive-route";
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Material for MkDocs instant navigation support
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initSimConsole();
    });
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initSimConsole);
    } else {
      initSimConsole();
    }
  }
})();
