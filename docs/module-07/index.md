# Module 07: Agentic Workflows

This module teaches production multi-step AI design patterns based on Anthropic's landmark research on building effective AI agents.

### Topics & Lessons
1. **When to Use Agents**: Prompting vs. simple workflows vs. autonomous agents.
2. **Core Agentic Patterns**:
   - **Prompt Chaining**: Output of Step A feeds into Step B sequentially.
   - **Routing**: Classifying input and branching to specialized model prompts.
   - **Parallelization**: Running multiple tasks concurrently (sectioning or voting).
3. **Advanced Architectures**:
   - **Orchestrator-Workers**: A central planner delegating subtasks to worker models.
   - **Evaluator-Optimizer**: One model generates; another model critiques and loops until standards are met.

### Planned Notebooks
- `01-prompt-chaining-and-routing.ipynb`
- `02-parallelization-and-voting.ipynb`
- `03-orchestrator-workers-agent.ipynb`
- `04-evaluator-optimizer-loop.ipynb`
