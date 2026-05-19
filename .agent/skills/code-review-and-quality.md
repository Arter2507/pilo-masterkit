---
name: code-review-and-quality
description: A comprehensive review process to act as a quality gate before merging code.
---

# 🧐 Code Review & Quality Assurance

## Overview
Acts as the final quality gate before code is merged into the main branch. Ensures code maintainability, security, and adherence to established patterns.

## When to Use
- Before completing a feature or merging a Pull Request.
- When tasked with reviewing existing code for technical debt.

## Progressive Disclosure
The Agent **MUST** cross-reference the following files during the review:
👉 `.agent/references/coding-standards.md`
👉 `.agent/references/security-checklist.md`

## Process: The 5-Axis Review

Review the code based on the following 5 axes:

### 1. Correctness & Logic
- Does the code do what it's supposed to do?
- Are Edge cases handled properly?
- Are there any off-by-one errors or logical loopholes?

### 2. Architecture & Design
- Does it adhere to Clean Code principles?
- Is there unnecessary coupling between components?
- Is it overly complex (Over-engineered)?

### 3. Security
- Are there any hardcoded secrets?
- Is user input validated and sanitized?
- Are permissions checked?

### 4. Testing
- Is the new logic accompanied by Unit/Integration Tests?
- Do the tests actually assert the correct behavior, or do they just execute the code (coverage theater)?

### 5. Readability & Style
- Are names descriptive and meaningful?
- Is the code self-documenting?

## Change Sizing Norms
- Reviews should ideally encompass changes of ~100-300 lines. If a change is massive (>500 lines), request that it be broken down.

## Anti-Rationalization
- *"LGTM (Looks Good To Me) - It passes tests so it's fine."* -> Tests prove functionality, not maintainability or security. Conduct a thorough manual review across all 5 axes.

## Verification
- [ ] Have you evaluated the code against the Security Checklist?
- [ ] Are all suggestions actionable and specific rather than vague complaints?
