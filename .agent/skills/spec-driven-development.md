---
name: spec-driven-development
description: Write a detailed Product Requirement Document (PRD) or Spec before writing a single line of code.
---

# 📝 Spec-Driven Development

## Overview
Define objectives, features, architecture, and system boundaries before implementation (Coding). Ensure every line of code serves a previously agreed-upon specification. This forms the foundation of the **PLAN** phase in the PDCA cycle.

## When to Use
- Starting a new feature or an entirely new project.
- Following the completion of `brainstorming` where the user has selected a design approach.
- Do NOT use for minor bug fixes (use `systematic-debugging` instead).

## Process

### Step 1: Initialize Read-Only Mode
- Absolutely no code is written during this step.
- Gather full context regarding desired UI/UX and related APIs.

### Step 2: Create the PRD/Spec Document
Draft the Spec utilizing this structure:
1. **Objectives**: What specific problem does this feature solve?
2. **Data Structure**: Schema, Types, Models.
3. **Interaction Flow**: API endpoints, UI states.
4. **Out of Scope**: What we are ABSOLUTELY NOT DOING in this iteration.

### Step 3: User Verification (Socratic Gate)
- Present the Spec to the user (or save it as a `PRD.md` artifact and request their review).
- STOP. Do not write code.

## Anti-Rationalization
- *"Let's just code it and figure it out as we go."* -> Without a Spec, you will rework the code 3 times. Writing a Spec takes 5 minutes; fixing broken architecture takes 5 days.

## Verification
- [ ] Has the Spec file (or content) been approved by the user?
- [ ] Does the Spec explicitly contain an "Out of Scope" section?
- [ ] Transition to `planning-and-task-breakdown` only after the Spec is approved.
