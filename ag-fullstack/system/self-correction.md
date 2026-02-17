# Self-Correction System

> Errors are learning signals. The system improves over time through structured correction.

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
