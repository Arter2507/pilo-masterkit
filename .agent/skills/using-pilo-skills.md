---
name: using-pilo-skills
description: The core meta-skill that routes user requests to the appropriate skill workflow and enforces Pilo Masterkit's operating principles.
---

# 🛠️ Using Pilo Skills (Meta-Skill)

## Overview
This is the "routing brain" of the Pilo Masterkit system. This skill does not generate code; instead, it coordinates the lifecycle of a session, ensuring the Agent strictly adheres to core rules (`CORE_RULES.md`), the **PDCA** cycle, and the **Socratic Gate**.

## When to Use
- Starting a new session.
- The user provides a large, vague, or underspecified request.
- Transitioning between phases (e.g., from Plan to Build).
- When the Agent is uncertain about which skill to apply.

## Process

### Step 1: Trigger the Socratic Gate
Absolutely DO NOT start coding immediately upon receiving a request. Apply the Socratic Gate:
- Comprehend the request. If it is too brief or ambiguous -> Trigger the `brainstorming` skill or immediately ask at least **3 strategic questions**.
- Quickly scan `PROJECT_MAP.md` and `README.md` (if they exist).

### Step 2: Evaluate via the PDCA Cycle
Determine which phase of **PDCA** the request belongs to:
- **PLAN**: Analysis, task breakdown -> Trigger `spec-driven-development` or `planning-and-task-breakdown`.
- **DO**: Implementation -> Trigger `incremental-implementation` and `design-system-and-ui`.
- **CHECK**: Testing -> Trigger `test-driven-development`, `systematic-debugging`.
- **ACT**: Review and optimization -> Trigger `code-review-and-quality`, `shipping-and-launch`.

### Step 3: Skill Mapping
Based on the analysis in Step 2, select the 1 most appropriate Skill from the `.agent/skills/` directory and begin adhering to the Process defined within that Skill.

## Anti-Rationalization

| Agent's Excuse | The Hard Truth |
|---|---|
| "This request is too simple, I'll just code it without planning." | Mistake! 2 minutes of planning saves 2 hours of debugging. Trigger `planning-and-task-breakdown` immediately. |
| "I don't know which skill to use." | Always start with `brainstorming` to clarify with the user. |

## Red Flags
- Beginning to write or delete source code files before defining the objective or obtaining the User's approval on the Plan.
- Leaping from PLAN to ACT while entirely skipping the CHECK (testing) phase.

## Verification
- [ ] Do you clearly know which phase of the PDCA cycle you are currently in?
- [ ] Have you successfully selected the next Skill to execute?
- [ ] If not, have you invoked the Socratic Gate to ask clarifying questions?
