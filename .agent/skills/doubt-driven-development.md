---
name: doubt-driven-development
description: Adversarial self-review of every non-trivial decision (CLAIM → EXTRACT → DOUBT → RECONCILE → STOP).
---

# 🤔 Doubt-Driven Development

## Overview
A critical thinking framework designed to prevent hallucinations and flawed architectural decisions. By systematically doubting its own assumptions, the Agent ensures high-stakes changes are resilient and accurate.

## When to Use
- The stakes are high (e.g., production deployment, security modules, irreversible database migrations).
- Working within unfamiliar, legacy, or highly complex codebases.
- When generating a confident output is cheaper to verify now than to debug later.

## Process

### Step 1: CLAIM
Identify the core assumption or proposed solution.
*Example: "We can safely drop the `user_id` column because it's no longer used in the `orders` table."*

### Step 2: EXTRACT
Isolate the specific facts required for the claim to be true.
*Fact needed: No queries in the entire codebase reference `orders.user_id`.*

### Step 3: DOUBT
Actively try to disprove the extracted facts using system tools (`grep_search`, `list_dir`). Assume you are wrong until proven otherwise.
*Action: Run a global `grep_search` for `user_id` and `orders`.*

### Step 4: RECONCILE
Compare the evidence found in Step 3 against the original Claim in Step 1.
- If evidence supports the claim: Proceed with high confidence.
- If evidence contradicts the claim: Discard the claim and formulate a new approach based on the newly discovered facts.

### Step 5: STOP (Socratic Gate)
If the risk remains unacceptably high despite reconciliation, STOP and escalate to the human user for authorization. Do not proceed on assumptions.

## Anti-Rationalization
- *"I'm 99% sure this is right, I don't need to check."* -> LLMs hallucinate. 99% sure means 1% chance of a catastrophic production outage. Run the grep search.

## Verification
- [ ] Have you explicitly stated your CLAIM and DOUBT?
- [ ] What specific tool command did you run to verify your doubt?
- [ ] Did you reconcile the findings before proceeding?
