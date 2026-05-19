# 🧪 Quality Assurance & Testing Policy

This document defines the rigorous automated testing standards for the Pilo Masterkit. **Zero-Bug Tolerance** is our ultimate target.

> *"If it's not tested, it's broken."*

---

## 📐 1. The Testing Pyramid

1. **Unit Tests (Base)**: Individual functions, utilities, and components (Vitest/Pytest).
2. **Integration Tests (Middle)**: Interaction between modules and service integrations.
3. **End-to-End (E2E) Tests (Peak)**: Critical user flows and frontend-backend interactions (Playwright).

---

## 🚀 2. Mandatory TDD Workflow (CRITICAL)

**Test-Driven Development (TDD)** is mandatory for all new features and bug fixes. Follow the **Red-Green-Refactor** cycle:

1. **RED**: Write a failing test for the new functionality or bug. (Viết test thất bại trước).
2. **GREEN**: Write the minimal implementation to make the test pass. (Viết code tối thiểu để pass).
3. **REFACTOR**: Optimize the code and test suite for clarity and performance. (Tối ưu hóa mã nguồn).

---

## 🛠️ 3. Testing Stack & Tools

- **Core Engine**: Vitest (Web), Pytest (Python).
- **Automation**: Playwright (E2E, Cross-browser).
- **Mocking**: MSW (Mock Service Worker) for API layer simulation.
- **Component Test**: Testing Library (React/Vue/Svelte).

---

## 📜 4. Operational Requirements

- **Root Cause Analysis**: Every failing test must be analyzed for its root cause. Fix the cause, not the symptoms.
- **Regression Guard**: Every discovered bug MUST have a corresponding regression test to prevent its return.
- **Coverage Goal**: 
  - **Business Logic**: 80%+ mandatory coverage.
  - **Main API Endpoints**: 100% coverage (Success & Error cases).
  - **UI Components**: Ensure error, loading, and success states are tested.

---

## 🏁 5. Verification & Reporting

- **Manual Audit**: Use `python .agent/scripts/checklist.py .` before completion.
- **Evidence Collection**: Test logs and coverage reports MUST be included in the final `walkthrough.md`.
- **Pre-Commit Check**: No code shall be committed with failing tests or critical lint errors.

---
> *"Quality is not an act, it is a habit."*
