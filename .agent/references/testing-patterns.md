# 🧪 Testing Patterns & Standards

> **Purpose**: A centralized reference for general and language-specific testing principles. Dynamically loaded during `test-driven-development`.

---

## 1. Core Principles

- **The Beyonce Rule**: "If you liked it, you should have put a test on it." Any system behavior without a test is considered non-existent.
- **Red-Green-Refactor**: Write a failing test (Red) -> Write the minimal code to pass the test (Green) -> Improve the code while keeping the test passing (Refactor).
- **Test Pyramid (80/15/5)**: 80% Unit Tests, 15% Integration Tests, 5% E2E Tests.
- **DAMP over DRY**: Tests should be Descriptive And Meaningful Phrases. It is better to have slight duplication in tests than complex, unreadable setups.
- **Arrange-Act-Assert (AAA)** or **Given-When-Then**: Always follow a clear 3-part structure in every Unit Test.

## 2. Language-Specific Standards

### 🟢 Go (Golang)
- **Framework**: Standard `testing` package.
- **Pattern**: Table-Driven Tests are mandatory (`[]struct{}`).
- **Subtests**: Use `t.Run()` to isolate test cases.
- **Mocking**: Use interfaces for Dependency Injection, mock manually or with `gomock`.
- **Coverage**: `go test -cover`. Target: > 80%.

### 🐍 Python
- **Framework**: `pytest`.
- **Pattern**: Use Fixtures (`@pytest.fixture`) instead of traditional `setup/teardown` classes.
- **Mocking**: `unittest.mock` (patching) or `pytest-mock`.
- **Parametrization**: Use `@pytest.mark.parametrize` for table-driven testing.

### 🦀 Rust
- **Framework**: Built-in `#[cfg(test)]`.
- **Pattern**: Unit tests go in the same file (in a `tests` module). Integration tests go in the `tests/` directory.
- **Mocking**: Encourage Trait-based mocking (e.g., `mockall`).

### ☕ Java & Kotlin (Spring Boot)
- **Framework**: JUnit 5, Kotest.
- **Mocking**: Mockito, MockK.
- **Integration**: Use `@SpringBootTest` sparingly and **Testcontainers** for real database testing.
- **Pattern**: Kotlin prefers Behavior Spec (Given-When-Then).

### 🔷 TypeScript / JavaScript (Node.js & Frontend)
- **Framework**: Jest or Vitest.
- **Frontend**: React Testing Library (RTL). Do NOT test implementation details; test user behavior (`getByRole`, `getByText`).
- **Mocking**: `jest.mock()` / `vi.mock()`, prefer Mock Service Worker (MSW) for HTTP requests.

---

## 3. Anti-Rationalization

- *"This is too hard to mock, let's skip it."* -> If it's hard to test, the architecture is flawed (high coupling). Refactor instead of skipping.
- *"It's just a tiny function, no need to test."* -> Tiny bugs cause massive outages. Writing a test takes 1 minute.
- *"I'll test everything once the feature is done."* -> This violates TDD. Tests must be used as a design tool. Waiting until the end leads to shallow, performative testing.
