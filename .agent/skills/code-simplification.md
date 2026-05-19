---
name: code-simplification
description: Refactor working code to reduce complexity and improve readability while preserving exact behavior.
---

# 🧹 Code Simplification & Refactoring

## Overview
The art of making code easier to read, understand, and maintain without altering its external behavior. Complexity is a liability.

## When to Use
- The code works, but is difficult to read or contains deep nesting.
- During the "Refactor" phase of TDD.
- When you encounter "spaghetti code" that needs untangling before a new feature can be safely added.

## Process

### Step 1: Secure the Perimeter
Before modifying a single character, ensure a comprehensive suite of passing tests exists for the code block. If tests do not exist, write them first (`test-driven-development`).

### Step 2: Understand Chesterton's Fence
Do not delete or drastically alter code unless you fully understand *why* it was written that way originally. Look for edge cases the original author might have been handling.

### Step 3: Apply Simplification Tactics
- **Extract Function**: Break long, monolithic functions into smaller, well-named helper functions.
- **Early Return**: Replace deeply nested `if/else` statements with Guard Clauses (early returns) to flatten the logic.
- **Remove Dead Code**: Delete code that is unreachable or commented out.
- **Rename**: Improve variable and function names to better reflect their purpose.

### Step 4: Verify
Run the test suite. If a test fails, you broke behavior. Revert and try again.

## Anti-Rationalization
- *"I'll rewrite this whole file from scratch, it'll be faster."* -> Complete rewrites often discard hidden bug fixes and edge-case handling. Refactor incrementally.

## Verification
- [ ] Did all tests pass after the simplification?
- [ ] Is the new code objectively easier to read (less nesting, better naming)?
