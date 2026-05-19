# 🔄 Workflow Orchestration Protocols

This document defines the advanced operational workflows for the Pilo Masterkit. These rules ensure autonomy, elegance, and continuous self-improvement.

---

## 1. Plan Mode Default
- **Trigger**: Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions).
- **Control**: If something goes sideways, **STOP and re-plan immediately** — don't keep pushing.
- **Verification**: Use plan mode for verification steps, not just building.
- **Spec First**: Write detailed specs upfront to reduce ambiguity.

## 2. Subagent Strategy
- **Clean Context**: Use subagents liberally to keep main context window clean.
- **Delegation**: Offload research, exploration, and parallel analysis to specialized subagents.
- **Scale**: For complex problems, throw more compute at it via multiple parallel subagents.
- **Focus**: One specific task per subagent for maximum accuracy.

## 3. Self-Improvement Loop
- **Memory Update**: After ANY correction from the user: update `.agent/tasks/lessons.md` with the new pattern.
- **Preventive Rules**: Write rules for yourself in this project to prevent repeating the same mistake.
- **Iteration**: Ruthlessly iterate on these lessons until the mistake rate drops.
- **Awareness**: Review previous lessons at the start of every session.

## 4. Verification Before Done
- **No Assumptions**: Never mark a task complete without proving it works.
- **Diff Analysis**: Diff behavior between the original code and your changes.
- **Peer Review**: Ask yourself: *"Would a staff engineer approve this change?"*.
- **Demonstration**: Run tests, check logs, and clearly demonstrate correctness to the user.

## 5. Demand Elegance (Balanced)
- **Pause & Reflect**: For non-trivial changes, pause and ask: *"Is there a more elegant way?"*.
- **Refinement**: If a fix feels hacky: *"Knowing everything I know, implement the elegant solution instead"*.
- **Practicality**: Skip this for simple, obvious fixes — do not over-engineer.
- **Self-Critique**: Challenge your own work before presenting it.

## 6. Autonomous Bug Fixing
- **Direct Resolution**: When given a bug report: just fix it. Don't ask for hand-holding.
- **Root Cause**: Identify logs, errors, or failing tests — then resolve them thoroughly.
- **Minimal User Burden**: Aim for zero context switching required from the user.
- **CI Ownership**: Fix failing CI tests automatically without being told how.

---

## Task Management Lifecycle

1. **Plan First**: Write the plan to `.agent/tasks/todo.md` with checkable items.
2. **Verify Plan**: Check in with the user (if required) before starting implementation.
3. **Track Progress**: Mark items as complete as you progress.
4. **Explain Changes**: Provide a high-level summary at each major step.
5. **Document Results**: Add a "Review" section to `.agent/tasks/todo.md` after completion.
6. **Capture Lessons**: Update `.agent/tasks/lessons.md` immediately after any corrections.

---
> *"Efficiency is doing things right; effectiveness is doing the right things."*
