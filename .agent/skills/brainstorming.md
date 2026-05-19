---
name: brainstorming
description: Triggers the Socratic Gate to analyze ambiguous requests, ask strategic questions, and brainstorm solutions prior to writing a spec.
---

# 🧠 Brainstorming & Socratic Gate

## Overview
Transforms vague ideas or brief requests into a concrete proposal through divergent/convergent thinking and the mandatory Socratic Gate checkpoint.

## When to Use
- The user provides a generic request: "Make me a todo app", "Fix the login bug".
- The request carries high potential risks (e.g., involving security or critical database changes).
- When architectural options must be explored before committing to a solution.

## Process

### Step 1: Apply the Socratic Gate (Mandatory)
Never respond with "Yes, I'll do it immediately." Instead, ask at least **3 strategic questions**:
1. **Core Objective/Value**: What does the user actually need? (Identify Root cause vs. Symptom).
2. **Scope & Constraints**: Are there specific technical, time, or performance constraints?
3. **Risks & Impact**: Could this feature break existing functionality?

### Step 2: Multi-Dimensional Analysis (Divergent Thinking)
Propose 2-3 distinct approaches:
- *Approach 1 (Simplicity First)*: Easy to implement, fast, low risk.
- *Approach 2 (Comprehensive)*: Highly scalable, requires more time.

### Step 3: Risk Assessment
Highlight potential risks. If the request has the potential to delete data or expose secrets (API keys), explicitly display a `> [!WARNING]`.

### Step 4: Convergence & Recommendation (Convergent Thinking)
Recommend one specific approach to the user and justify "Why this approach is optimal".

## Anti-Rationalization
- *"Asking too many questions will annoy the user."* -> Customers would rather be annoyed by questions than receive buggy or incorrect software. Ask intelligently and concisely (group questions into a single list).

## Verification
- [ ] Have you asked at least 3 Socratic questions?
- [ ] Have you provided more than one perspective or option?
- [ ] Have you explicitly warned about potential risks?
- [ ] Wait for the user's response before transitioning to `spec-driven-development`.
