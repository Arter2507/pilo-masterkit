---
name: context-engineering
description: Manage, clean, and optimize the Agent's context window to prevent memory bloat and hallucinations.
---

# 🧠 Context Engineering & Hygiene

## Overview
Large Language Models have finite context windows. Over time, logs, old code, and unnecessary conversational history bloat the context, leading to degraded performance, forgetfulness, and hallucinations. This skill actively manages memory.

## When to Use
- The session has been active for a long time.
- The Agent begins forgetting previously stated rules or instructions.
- Transitioning between two completely different tasks within the same session.

## Process

### Step 1: Assess Context Bloat
Determine if the current context contains large, unnecessary artifacts (e.g., thousands of lines of terminal output, content from files no longer being edited).

### Step 2: Context Compaction
Summarize the current state of the project and active decisions into a concise log (or update the `task.md` artifact).

### Step 3: Clear Memory
- Instruct the system to clear conversational history if supported (e.g., using specific slash commands like `/clean_memory`).
- Close files that are no longer actively being modified.

### Step 4: Progressive Disclosure
Do not load entire massive files if only a small section is needed. Use tools to view specific line ranges or grep for specific patterns. Avoid dumping entire reference manuals into the context.

## Anti-Rationalization
- *"I'll just read the whole 5000-line file so I have all the context."* -> You will drown out the actual task instructions. Read only what is necessary.

## Verification
- [ ] Has the `task.md` been updated to preserve the current state before clearing memory?
- [ ] Are unrelated files closed or removed from active context?
