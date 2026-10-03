# Module 03: Tools and Multimodal Features

This module covers function calling (tool use), multimodal inputs (vision and documents), and model reasoning capabilities.

### Topics & Lessons
1. **Tool Use / Function Calling**:
   - Defining tool schemas (JSON Schema / Pydantic).
   - The tool call execution loop (model calls tool -> user executes -> model resumes).
   - Handling errors and multi-tool execution.
2. **Multimodal Inputs**:
   - Sending images (PNG/JPEG) to vision models.
   - Processing PDFs and document content.
3. **Extended Thinking**:
   - Understanding internal reasoning tokens in modern models.
4. **Prompt Caching**:
   - Reusing static prompt prefixes (`cache_control`) to lower latency and costs.

### Planned Notebooks
- `01-function-calling-tools.ipynb`
- `02-multimodal-images-and-pdf.ipynb`
- `03-extended-thinking-and-caching.ipynb`
