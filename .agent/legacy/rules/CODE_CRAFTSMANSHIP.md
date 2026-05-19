# 💻 Code Craftsmanship Standards

This document specifies the coding standards, directory structures, and mandatory design patterns for the Pilo Masterkit. 

> *"Code is read more often than it is written. Write for the human first, the machine second."*

---

## 🏗️ 1. Project Architecture (Feature-based)

The project uses a **Feature-based Architecture** to ensure high cohesion and low coupling.

### Frontend (Next.js 15 App Router)
- `src/app/`: Define Routes (Pages, Layouts, Loading, Error).
- `src/components/ui/`: Base UI primitives (shadcn/ui, tailwind-v4).
- `src/components/features/`: Complex components tied to business logic.
- `src/hooks/`: Reusable custom React Hooks.
- `src/lib/`: Utility libraries and service configurations (Prisma, Cloudinary, etc.).

### Backend (Node.js / FastAPI)
- `api/routes/`: Endpoint definitions and routing logic.
- `api/controllers/`: Core business logic handlers.
- `api/models/`: Data structure definitions and validation schemas.

---

## ⚡ 2. Core Coding Principles

### Immutability (CRITICAL)
- **Rule**: Always create new objects/arrays instead of mutating existing ones.
- **Pattern**: Use spreads `[...arr]`, `{...obj}` or functional updates.
- **Reason**: Enhances predictability, debuggability, and compatibility with React's rendering cycle.

### Small & Focused Files
- **Files**: Aim for 200-400 lines typical. **800 lines MAX**.
- **Functions**: Small and atomic (<50 lines). If a function does two things, split it.
- **Cohesion**: Keep related logic together; separate unrelated concerns.

### Error Handling
- **No Silencing**: Never silently swallow errors with empty `catch` blocks.
- **User-Friendly**: Provide clear, non-technical messages in UI components.
- **Detailed Logging**: Log full error context and stack traces server-side.

---

## 📝 3. Naming Conventions

- **Files & Folders**: `kebab-case` (e.g., `user-profile.tsx`, `api-gateway/`).
- **Components**: `PascalCase` (e.g., `UserProfileCard`).
- **Variables & Functions**: `camelCase` (e.g., `fetchUserData`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_LIMIT`).
- **Boolean Variables**: Prefix with `is`, `has`, or `should` (e.g., `isLoading`, `hasError`).

---

## 🧹 4. Development Patterns

### React 19 & Next.js 15
- **Server Components (RSC)**: Default to Server Components for data fetching.
- **Client Components**: Use `"use client"` only when interactivity (hooks/events) is required.
- **Data Mutations**: Use **Server Actions** for all data-changing operations.

### Backend & API
- **Statelessness**: Every API endpoint must be stateless.
- **Validation**: Strict schema-based validation using `Zod` (TypeScript) or `Pydantic` (Python).
- **Graceful Failure**: Return consistent error envelopes with appropriate HTTP status codes.

---
> *"Simplicity is the key to brilliance."*
