# Generation Policy

> Rules for AI-generated code and how it enters the application.

---

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

```
.generated/ → .staging/ → app/
```

No exceptions.

---

## Pipeline

1. **Generate** → AI writes code to `.generated/`
2. **Validate** → Code is checked against contracts and moved to `.staging/`
3. **Review** → Human reviews staged code
4. **Promote** → Approved code is moved to `app/`

## Additional Rules

- AI-generated code must never be placed directly in `app/`
- All generated code must pass contract validation before staging
- Snapshots are taken at each generation step for rollback
- The `.tmp/` directory is used for intermediate processing only
