---
name: incremental-implementation
description: Implement code in thin vertical slices, testing and committing continuously.
---

# 🏗️ Incremental Implementation

## Overview
The core skill of the **DO** phase. Never "code 500 lines straight and then try to run it". Write code in small increments, integrate continuously, and keep the system in a perpetually deployable state.

## When to Use
- Starting execution on a Task defined in the `implementation_plan.md`.
- Modifying core modules with widespread impact.

## Process

### Step 1: Select a Task
Pick the smallest uncompleted Task from the `task.md` or plan.

### Step 2: Read Related Source Code
Use `view_file` or `grep_search` to understand how the system operates before inserting new code. Do not violate **Chesterton's Fence** (Deleting things you don't understand).

### Step 3: Code & Test the Thin Slice
- Update the DB (if necessary).
- Update the Logic.
- Immediately invoke `test-driven-development` to write tests proving the new code works correctly.

### Step 4: Regression Check
Ensure the new code has not broken existing functionality. (All previous tests must still pass).

### Step 5: Update Status
Check off `[x]` the Task and proceed to the next Checkpoint.

## Anti-Rationalization
- *"I'll code the entire UI and Backend first, then test it all at once to save time."* -> You will drown in cascading bugs. Code incrementally. Fail fast, fix fast.

## Verification
- [ ] Does the system build successfully?
- [ ] Does the recently implemented vertical slice have an accompanying passing test?
