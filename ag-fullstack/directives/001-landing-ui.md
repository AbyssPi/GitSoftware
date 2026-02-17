# Directive 001: Build Core Landing Page UI

## Objective
Build the foundational Landing Page for a digital products store. The design must be extremely clean, modern, and flat (similar to Craftwork.design). No 3D elements, no complex animations.

## Context & Rules
- This is a purely static frontend right now. No database, no auth.
- Use Next.js (App Router) + Tailwind CSS.
- **DO NOT** build any payment gateways or cart systems.
- Follow the `.generated/` -> `.staging/` -> `app/` file movement rule.

## Tasks

### 1. Setup Mock Data
Create a file `shared/constants/mock-data.ts`.
Define an array of `CATEGORIES` (e.g., Illustrations, Framer Templates, UX/UI Kits, Mockups, Fonts). Include a placeholder for an icon/SVG and a short subtitle for each.

### 2. Build the Navbar Component
Create `.generated/components/Navbar.tsx`.
- Left side: Simple Logo text or icon.
- Center: Navigation links (Resources, Inspiration).
- Right side: A "Contact Us" button (No login, no cart).
- Style: Clean white background, subtle bottom border.

### 3. Build the Hero Section Component
Create `.generated/components/Hero.tsx`.
- Layout: Centered or Left-aligned text.
- Headline: Big, bold typography (e.g., text-5xl or text-6xl, font-bold, tracking-tight).
- Subtitle: Gray text explaining the value proposition.
- CTA: A solid button (e.g., bright color like Tailwind's `lime-400` or solid black).
- **CRITICAL:** Do NOT include any "Pro Access" or "Pricing" boxes. Keep the space clean.

### 4. Build the Categories Grid Component
Create `.generated/components/Categories.tsx`.
- Heading: "Top categories".
- Layout: CSS Grid (2 columns on mobile, 3-4 columns on desktop).
- Card Style: Very subtle border or very soft shadow, flex layout (icon on left, text on right).
- Feed it the data from `mock-data.ts`.

### 5. Assemble in Page
Create `.generated/app/page.tsx`.
Import and stack the components: Navbar -> Hero -> Categories.

## Execution Requirements
1. Generate all components in `.generated/`.
2. Stop and wait for user review. Do NOT move to `.staging/` or `app/` until the user approves the visual structure.
