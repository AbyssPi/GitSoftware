# Generation Policy

## Rule #1 (Golden Principle)

LLMs are probabilistic, while most business logic is deterministic.

Therefore:

- Never rely on the LLM for deterministic execution.
- All complex, repeatable, or sensitive logic must live in the execution layer.
- The LLM is responsible for reasoning, planning, and orchestration — not stable computation.

---

## Core Rules

1. Never generate files in the project root.
2. Never write directly into `app/` without staging.
3. All AI-generated code must first go to `.generated/`.
4. Only validated code moves to `.staging/`.
5. Only approved code enters `app/`.
6. Follow all `contracts/` strictly.
7. Never mix frontend and backend imports.
8. Prefer deterministic scripts in `execution/` over manual reasoning.
9. Do not overwrite directives without explicit permission.
10. The system must evolve — not drift.

---

## File Movement Flow

.generated/ → .staging/ → app/

No exceptions.

# Architecture Overview

This system operates using a layered AI-assisted development model.

The goal is to separate probabilistic reasoning from deterministic execution
while maintaining a clean full-stack web architecture.

---

# 3-Layer Architecture

## Layer 1: Directive (What to Build)

Location: `directives/`

- Markdown SOPs
- Define objectives
- Define inputs
- Define outputs
- Define tools/scripts required
- Define edge cases
- Define file destinations

Directives represent structured human intent.

---

## Layer 2: Orchestration (Decision Layer)

Location: `orchestration/`

Responsibilities:

- Read directives
- Decide execution order
- Route tasks to execution layer
- Handle errors
- Ask clarification questions
- Log decisions
- Update directives when necessary

The orchestration layer connects intent to execution.

It never performs deterministic work itself.

---

## Layer 3: Execution (Deterministic Layer)

Location: `execution/`

- Python scripts
- Database migrations
- API calls
- Data processing
- File operations
- Type generation
- Testing

Execution must be:

- Deterministic
- Testable
- Repeatable
- Fast

If something can break due to randomness,
it belongs here — not in reasoning.

---

# Application Architecture

The product itself lives in:

app/
  frontend/
  backend/
  shared/

The application is isolated from:

- directives
- orchestration
- execution

AI must never directly corrupt production code.

---

# State Separation

All generated code flows through:

.generated/ → .staging/ → app/

This ensures stability and reviewability.

---

# Architectural Goal

Maximize reliability by:

- Isolating reasoning
- Isolating execution
- Protecting production code
- Enforcing structural contracts

# Self-Correction System

Errors are learning signals.

The system improves over time through structured correction.

---

## When Something Breaks

1. Identify the error.
2. Fix the execution tool first (not the directive blindly).
3. Retest the tool.
4. Confirm deterministic behavior.
5. Update the directive with new constraints.
6. Update contracts if architecture changed.
7. Log the improvement in `orchestration/execution-log.md`.

---

## Example Flow

- API rate limit occurs.
- Check documentation.
- Discover batch endpoint.
- Rewrite execution script.
- Test again.
- Update directive with new best practice.
- Log improvement.

---

## Rules

- Never ignore stack traces.
- Never apply random patches.
- Never overwrite directives without reason.
- Improvements must be permanent.

---

## System Philosophy

Every failure strengthens the system.

If an error happens twice,
the system design is wrong.
