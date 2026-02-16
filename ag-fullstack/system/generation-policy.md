# Generation Policy

> Rules for AI-generated code and how it enters the application.

## Pipeline

1. **Generate** → AI writes code to `.generated/`
2. **Validate** → Code is checked against contracts and moved to `.staging/`
3. **Review** → Human reviews staged code
4. **Promote** → Approved code is moved to `app/`

## Rules

- AI-generated code must never be placed directly in `app/`
- All generated code must pass contract validation before staging
- Snapshots are taken at each generation step for rollback
- The `.tmp/` directory is used for intermediate processing only
