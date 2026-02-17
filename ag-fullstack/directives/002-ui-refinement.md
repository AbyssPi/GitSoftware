# Directive 002: Refine Landing Page UI

## Objective
Update the Landing Page components to simplify navigation and enhance visual appeal with a code-based background.

## Context
- Starting point: Current `app/frontend` components.
- Work location: `.generated/` -> `.staging/` -> `app/`.

## Tasks

### 1. Update Navbar
- **Target**: `.generated/components/Navbar.tsx`
- **Change**: Remove "Resources", "Inspiration". Add single "Products" link.

### 2. Update Hero Section
- **Target**: `.generated/components/Hero.tsx`
- **Change**: Remove CTA buttons. Add absolute SVG background (abstract thin lines, `stroke-gray-200`, `opacity-20`, `-z-10`).

### 3. Update Categories & Data
- **Target**: `shared/constants/mock-data.ts` (in `.generated`)
  - Limit to exactly 4 categories.
- **Target**: `.generated/components/Categories.tsx`
  - Update grid to display 4 items (`grid-cols-2 lg:grid-cols-4`).

## Execution Requirements
1. Copy existing files to `.generated/`.
2. Apply changes.
3. Wait for user review.
