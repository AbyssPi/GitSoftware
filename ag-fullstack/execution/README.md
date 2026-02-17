# Execution Layer

> Layer 3 — The Deterministic Layer

The execution layer handles all deterministic, testable, and repeatable work. If something can break due to randomness, it belongs here — not in reasoning.

## Responsibilities

- Python scripts
- Database migrations
- API calls
- Data processing
- File operations
- Type generation
- Testing

## Requirements

All execution must be:

- **Deterministic** — Same inputs always produce same outputs
- **Testable** — Every script must have verifiable behavior
- **Repeatable** — Can be run multiple times safely
- **Fast** — Optimized for performance

## Rules

- Never rely on LLM reasoning for stable computation.
- All scripts must be independently runnable and verifiable.
- Failures must be logged in `orchestration/execution-log.md`.
