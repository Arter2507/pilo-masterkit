# 🏗️ Architectural Blueprints & Design System

This document specifies the technical architecture, design standards, and default tools for the Pilo Masterkit. It follows the **Master + Overrides** pattern for flexible design management.

---

## 🏛️ 1. Core Architecture & Tech Stack

- **Frontend**: React 19, Next.js 15, Tailwind CSS v4.
- **Backend**: Node.js (TypeScript) or Python (FastAPI).
- **Database**: PostgreSQL (Prisma/Drizzle), Redis for caching.
- **AI Integration**: Multi-model support (GPT-4o, Claude 3.5/3.7, Gemini 2.0) via API Gateway.

---

## 🎨 2. Design System (Aesthetics)

The project follows a **Modern, Minimalist, and Elegant** design philosophy. 

### Global Design Master (`design-system/MASTER.md`)
All global design tokens, color scales, and typography are defined here. 

### Page-Specific Overrides (`design-system/pages/`)
Specific pages (e.g., Dashboard, Checkout) can deviate from the Master by providing an override file in this folder.

### Visual Styles
- **Light Mode**: Elegant (Vanilla/Milk, Soft White, Pastel Orange).
- **Dark Mode**: Aesthetic/Cosmic (Pink and Blue Pastels, Galaxy theme).
- **Glassmorphism**: Primary effect for dark mode cards and navbars.
- **Layout**: Bento Grid, consistent spacing (`max-w-7xl` containers).
- **Typography**: Inter, Montserrat, or Outfit (Google Fonts).

---

## 🛠️ 3. Integrated Kits & Capabilities

We leverage world-class skill sets to ensure project excellence:

1.  **UI/UX Pro Max**: 67 styles, 96 palettes, 57 font pairings. Use for all visual enhancements.
2.  **Antigravity Kit**: 20 specialized agents and 36 foundational skills.
3.  **Claude ECC**: Advanced TDD, security auditing, and autonomous workflows.

---

## 📐 4. Professional UI Rules (Mandatory)

1.  **No Emojis as Icons**: Use SVG icons ONLY (Heroicons, Lucide, Simple Icons).
2.  **Stable Hover States**: Use color/opacity transitions. Avoid scale transforms that shift layout.
3.  **Cursor Pointer**: Mandatory `cursor-pointer` for ALL interactive elements (cards, buttons, links).
4.  **Floating Navbar**: Fixed elements should have proper floating spacing (e.g., `top-4 left-4 right-4`).
5.  **Theme Direct Use**: Use theme colors directly (`bg-primary`) instead of wrapping them in unverified variables.

---

## 🏁 5. Quality Standards

- **PDCA Cycle**: Plan -> Do -> Check -> Act.
- **Socratic Gate**: Clarify requirements BEFORE implementation.
- **Zero-Bug Tolerance**: Every feature must include automated tests and manual walkthroughs.

---
> *"Simplicity is the ultimate sophistication."*
