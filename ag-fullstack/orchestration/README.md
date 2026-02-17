# Orchestration Layer

> Layer 2 — The Decision Layer

The orchestration layer connects human intent (directives) to deterministic execution. It is responsible for reasoning, planning, and routing — **never** for performing deterministic work itself.

## Responsibilities

- Read directives
- Decide execution order
- Route tasks to the execution layer
- Handle errors
- Ask clarification questions
- Log decisions
- Update directives when necessary

## Key Files

| File                | Purpose                           |
|---------------------|-----------------------------------|
| `execution-log.md`  | Log of improvements and decisions |

## Rules

- The orchestration layer **never** performs deterministic work itself.
- All complex, repeatable, or sensitive logic must be routed to `execution/`.
- Decisions and error resolutions must be logged in `execution-log.md`.
