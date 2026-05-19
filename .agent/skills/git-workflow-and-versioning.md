---
name: git-workflow-and-versioning
description: Manage atomic commits, versioning, and branch management.
---

# 🌿 Git Workflow & Versioning

## Overview
Standards for managing source code history. Focuses on atomic commits and maintaining a clean, understandable repository timeline.

## When to Use
- Whenever saving progress (making a commit).
- Creating pull requests or merging branches.

## Process

### Step 1: Atomic Commits
A commit should represent a single, logical change.
- Do not mix a bug fix and a new feature in the same commit.
- If you fixed a typo in the README while working on an API, commit the typo fix separately.

### Step 2: Conventional Commits Format
Use the conventional commit format for clear history:
- `feat: [description]` (New feature)
- `fix: [description]` (Bug fix)
- `docs: [description]` (Documentation changes)
- `refactor: [description]` (Code restructuring without behavior change)
- `test: [description]` (Adding or fixing tests)
- `chore: [description]` (Build process or auxiliary tool changes)

*Example: `feat: add user login endpoint`*

### Step 3: Commit as a Save Point
Commit frequently locally. You can always squash commits later before pushing or merging.

### Step 4: Trunk-Based Development
Merge changes back into the main branch frequently (at least daily). Avoid long-lived feature branches that lead to massive merge conflicts.

## Anti-Rationalization
- *"I'll just commit everything at the end of the day with the message 'WIP'."* -> Unhelpful commit messages make debugging and reverting extremely difficult. Write descriptive messages.

## Verification
- [ ] Does the commit message follow the Conventional Commits format?
- [ ] Does the commit contain only one logical change (Atomic)?
