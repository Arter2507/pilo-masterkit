---
name: planning-and-task-breakdown
description: Decompose the Spec into small, actionable, independently testable tasks with clear checkpoints.
---

# 📋 Planning & Task Breakdown

## Overview
Transform a PRD/Spec into a concrete list of tasks (TODO list). Each task must be small enough to implement, test, and verify within a single iteration (vertical slice). This is the final step of the **PLAN** phase.

## When to Use
- You possess a clear Spec/PRD, but the workload exceeds 5 files.
- The feature involves multiple interdependent components (e.g., Database -> API -> UI).

## Process

### Step 1: Identify the Dependency Graph
Determine the order of operations. (e.g., The DB Schema must exist before writing the API; the API must exist before building the UI). Build from the foundation up.

### Step 2: Vertical Slicing
- ABSOLUTELY DO NOT slice horizontally (e.g., Building all UI, then all DB).
- Slice vertically: Build 1 complete feature path from DB -> API -> UI (e.g., "User can log in").

### Step 3: Task Sizing
Each Task should conform to these sizes:
- **XS**: 1 file (config, utility).
- **S**: 1-2 files (1 Component or 1 API endpoint).
- **M**: 3-5 files (1 complete user flow).
- **L**: >5 files -> TOO LARGE. Break it down into two 'M' tasks.

### Step 4: Establish Checkpoints
After every 2-3 tasks, insert a `Checkpoint`. At the checkpoint, the entire system must be runnable, tests must pass, and there should be no dangling errors.

## Plan Template
Create an `implementation_plan.md` artifact with the following structure:
- Overall objective.
- Task List (e.g., `Task 1`, `Task 2`, `Checkpoint 1`).
- Request user feedback and await approval before execution.

## Anti-Rationalization
- *"These tasks are obvious, I don't need to write them down."* -> Writing them down maintains context. If the Agent's memory gets compacted or lost mid-session, the `plan.md` artifact rescues the entire progress.

## Verification
- [ ] Is the largest task constrained to 5 files or fewer?
- [ ] Are there Checkpoints established to pause for review?
- [ ] Has the plan been `Approved` by the user?
