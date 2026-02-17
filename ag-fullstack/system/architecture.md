# Architecture

> 3-Layer AI-Assisted Development Architecture

This system operates using a layered AI-assisted development model.
The goal is to separate probabilistic reasoning from deterministic execution
while maintaining a clean full-stack web architecture.

---

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

## Application Architecture

The product itself lives in:

```
app/
  frontend/
  backend/
  shared/
```

The application is isolated from:

- directives
- orchestration
- execution

AI must never directly corrupt production code.

---

## State Separation

All generated code flows through:

```
.generated/ → .staging/ → app/
```

This ensures stability and reviewability.

---

## Architectural Goal

Maximize reliability by:

- Isolating reasoning
- Isolating execution
- Protecting production code
- Enforcing structural contracts

---

## Layers Overview

- **Frontend** — Client-side application (SPA)
- **Backend** — API server and business logic
- **Shared** — Types, utilities, and constants shared across layers
- **Runtime** — Scripts, migrations, and seed data
