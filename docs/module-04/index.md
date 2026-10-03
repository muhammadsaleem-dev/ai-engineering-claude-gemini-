# Module 04: Model Context Protocol (MCP)

This module explores MCP—Anthropic's open-source standard for connecting AI systems to external data sources and tools across different platforms.

> [!IMPORTANT]
> **SPECIFICATION-DRIVEN DEVELOPMENT (SDD) ARCHITECTURE**:
> In this module, every MCP Server, Tool Schema, and Client Connection will be built strictly following **GitHub Spec-Kit** ([`github/spec-kit`](https://github.com/github/spec-kit)).
> We will define:
> 1. `spec.md` — Functional specifications for MCP resources, tools, and prompts.
> 2. `plan.md` — Protocol contracts, JSON-RPC schemas, and server-client architectures.
> 3. `tasks.md` — Actionable implementation and verification checklist.

---

### Topics & Lessons
1. **MCP Architecture**: Understanding Hosts, Clients, and Servers.
2. **MCP Primitives**:
   - **Tools**: Executable functions exposed to models.
   - **Resources**: Read-only data sources (files, database tables, APIs).
   - **Prompts**: Reusable prompt templates exposed by servers.
3. **Building an MCP Server**: Creating a local Python/FastMCP server.
4. **Connecting an MCP Client**: Hooking up an LLM to call tools through MCP.

---

### Planned Specifications & Implementations
- `specs/` — Formal MCP Server & Tool specifications.
- `server/` — FastMCP Python server implementation.
- `client_demo.ipynb` — Client calling tools via the MCP protocol.
