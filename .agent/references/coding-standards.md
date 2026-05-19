# 💻 Coding Standards & Best Practices

> **Purpose**: A reference guide focusing on clean code principles, system design, and multi-language standards.

---

## 1. Core Principles

- **Simplicity First**: Code is read much more often than it is written. Keep it clear and avoid over-engineering. If something can be solved with a simple function, don't build a complex class factory.
- **Immutability**: Prefer creating new objects over mutating the state of existing ones. Limit side-effects.
- **Modularization**: Avoid excessively large files (< 400 lines recommended). Break down code into components/functions that adhere to the Single Responsibility Principle.
- **Clear Naming**: Variable and function names must accurately describe their intent and behavior (in English). Avoid obscure abbreviations.
- **Fail Fast**: Check input conditions early and throw/return errors immediately rather than letting bugs silently propagate deep into the logic.

## 2. Architecture Patterns

- **Clean / Hexagonal Architecture**: Maintain a strict separation between Domain logic (Core) and Infrastructure (Database, UI, Network). Apply Dependency Inversion.
- **API Design**:
  - Follow RESTful principles: Resource-based URLs, correct HTTP Methods, appropriate Status Codes.
  - Hyrum's Law: "With a sufficient number of users, all observable behaviors of your system will be depended on." -> Do not arbitrarily change response formats.
  - Implement Pagination and Filtering for all list endpoints.

## 3. Language-Specific Standards

### 🟢 Go (Golang)
- Avoid using `panic`. Handle errors explicitly with `if err != nil`.
- Keep interfaces small (1-2 methods).
- "Accept interfaces, return structs".

### 🐍 Python
- Strictly adhere to **PEP 8**.
- Mandatory use of Type Hints (`def foo(a: int) -> str:`).
- Use list comprehensions judiciously (avoid deep nesting).

### ☕ Java & Kotlin
- **Java**: Use `Optional` instead of null checks; prefer the Stream API over traditional loops for collections.
- **Kotlin**: Leverage null-safety, `data class`, `sealed class`, and Coroutines for asynchronous operations.

### 🔷 TypeScript / Node.js
- Enable `strict: true` in `tsconfig.json`. Absolutely no `any` types.
- Handle asynchronous code with `async/await` instead of nested callbacks. Use `try/catch` for error handling.

---

## 4. Chesterton's Fence

"Do not remove a fence until you know why it was put up in the first place."
- Before deleting or refactoring "weird-looking" code, thoroughly investigate its history, test cases, and context. Do not delete code simply because you don't immediately understand it.
