---
name: systematic-debugging
description: A rigorous 5-step triage process for resolving bugs without introducing new ones.
---

# 🐛 Systematic Debugging & Error Recovery

## Overview
A structured methodology for diagnosing and fixing software defects. Eliminates "guess and check" programming and ensures bugs stay dead.

## When to Use
- A test fails unexpectedly.
- A build breaks.
- The system exhibits incorrect or unexpected behavior.

## Process: The 5-Step Triage

### Step 1: Reproduce (Red)
Before changing any code, you MUST reproduce the error locally. Write an automated test that fails exactly the same way the bug manifests.
- If you cannot reproduce the bug, you cannot fix it.

### Step 2: Localize
Use logging, stack traces, and `grep_search` to pinpoint the exact line or module where the error originates. Do not guess.

### Step 3: Reduce
Simplify the inputs that cause the bug until you find the absolute minimal reproducible test case.

### Step 4: Fix (Green)
Apply the fix. Keep the change as small and targeted as possible. Run the test created in Step 1 to confirm it now Passes.

### Step 5: Guard (Refactor)
Implement safeguards (e.g., input validation, type assertions) to ensure this specific class of bug cannot occur again. Review related code paths to see if the same mistake was made elsewhere.

## Anti-Rationalization
- *"I'll just add a null check here, that should fix it."* -> Guesswork. If you don't know *why* it's null, you haven't fixed the root cause, you've only hidden the symptom. Use Socratic Gate if needed.

## Verification
- [ ] Is there a new, passing automated test specifically covering this bug?
- [ ] Has the root cause been identified, not just the symptom?
