---
name: test-driven-development
description: Ensure every piece of written code is accompanied by tests (Red-Green-Refactor).
---

# 🧪 Test-Driven Development (TDD)

## Overview
Tests are proof. This skill assumes the role of **CHECK** in the PDCA cycle. If a feature lacks tests, it is incomplete.

## When to Use
- After completing a new code segment (`incremental-implementation`).
- When refactoring existing code.
- When fixing a bug (`systematic-debugging`) - you must write a failing test that reproduces the bug before fixing it.

## Progressive Disclosure
To understand language-specific testing syntax, the Agent **MUST** briefly scan this reference file:
👉 `.agent/references/testing-patterns.md`

## Process

### Step 1: Red
Write a Unit Test representing the desired behavior. Run the test and ensure it fails (accurately reporting that the logic does not yet exist).

### Step 2: Green
Write the absolute minimum, simplest code required to pass the test. Do not optimize at this stage. Run the test again and ensure it Passes.

### Step 3: Refactor
Clean up the newly written code. Apply principles from `.agent/references/coding-standards.md`. After restructuring, run the test again to ensure it remains Green.

### Step 4: Boundary Control
Test edge cases: Empty inputs, Null values, Maximum bounds, and Special characters.

## Anti-Rationalization
- *"The UI doesn't really need testing."* -> UI logic absolutely needs testing using libraries like React Testing Library, focusing on user behavior rather than HTML structure.

## Verification
- [ ] Does the test pass successfully locally? (Display the log or command output).
- [ ] Are there tests covering the Edge Cases?
