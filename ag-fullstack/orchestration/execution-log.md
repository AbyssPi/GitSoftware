# Execution Log

> A running log of improvements, corrections, and decisions made by the system.

Each entry captures what broke, how it was fixed, and what was learned.

---

<!-- Log entries follow this format:

## [Date] — [Short Title]

**Error:** Description of the error.
**Root Cause:** What caused it.
**Fix:** What was changed in execution.
**Directive Update:** What constraint was added to the directive.
**Contract Update:** Any architecture changes (if applicable).

-->

## 2026-02-17 — Violation of Rule #2 (Direct App Write)

**Error:** Created `shared/constants/mock-data.ts` directly in `app/`, violating Rule #2 ("Never write directly into `app/` without staging").
**Root Cause:** Blindly followed directive path instruction which omitted `.generated/`.
**Fix:** Moved `mock-data.ts` to `.generated/shared/constants/mock-data.ts` and updated imports in `Categories.tsx`.
**Directive Update:** (To be applied) Ensure all file paths in directives explicitly include `.generated/` prefix or note the rule override.
