# Component Contract

> Defines structural guarantees for frontend components.

## Rules

1. Every component must have a single responsibility
2. Components must accept typed props
3. Components must handle loading, error, and empty states
4. Shared components live in `components/`; feature-specific components live in `features/`

## Structure

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.test.ts  # Tests
├── ComponentName.css      # Styles (if needed)
└── index.ts               # Public export
```
