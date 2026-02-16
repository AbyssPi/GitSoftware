# Conventions

> Coding standards and conventions for the project.

## Naming

- **Files**: `kebab-case` (e.g. `user-profile.ts`)
- **Components**: `PascalCase` (e.g. `UserProfile`)
- **Functions/Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase` prefixed as needed

## File Organization

- One component per file
- Co-locate tests with source files
- Group by feature, not by type

## Code Style

- Use TypeScript strict mode
- Prefer `const` over `let`; never use `var`
- Use explicit return types on public functions
- Prefer named exports over default exports
