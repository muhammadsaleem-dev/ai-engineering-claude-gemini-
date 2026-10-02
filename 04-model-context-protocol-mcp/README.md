# Module 04: Model Context Protocol (MCP)

This module explores MCP—Anthropic's open-source standard for connecting AI systems to external data sources and tools across different platforms.

### 📚 Topics & Lessons
1. **MCP Architecture**: Understanding Hosts, Clients, and Servers.
2. **MCP Primitives**:
   - **Tools**: Executable functions exposed to models.
   - **Resources**: Read-only data sources (files, database tables, APIs).
   - **Prompts**: Reusable prompt templates exposed by servers.
3. **Building an MCP Server**: Creating a local Python/FastMCP server.
4. **Connecting an MCP Client**: Hooking up an LLM to call tools through MCP.

### 📓 Planned Files
- `server/` — FastMCP Python server implementation.
- `client_demo.ipynb` — Client calling tools via the MCP protocol.
