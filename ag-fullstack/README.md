# ag-fullstack

A full-stack application scaffold with structured AI generation policies.

## Structure

| Directory       | Purpose                                      |
|-----------------|----------------------------------------------|
| `system/`       | Architecture docs & policies (never touched by features) |
| `directives/`   | Feature specifications (WHAT to build)       |
| `contracts/`    | Structural guarantees for code quality       |
| `app/`          | Production application code                  |
| `runtime/`      | Scripts, migrations, and seed data           |
| `.generated/`   | Raw AI output (never trusted directly)       |
| `.staging/`     | Cleaned & validated AI output                |
| `.snapshots/`   | Versioned generation states                  |
| `.tmp/`         | Disposable temporary files                   |
| `logs/`         | Application logs                             |

## Getting Started

1. Copy `.env.example` to `.env` and fill in values
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Feature Directives

- **001** — Authentication
- **002** — Products
- **003** — Checkout
- **004** — Admin Dashboard
