# Architecture Overview 🏗️

This document describes the internal structure and logic of the `@heyai-rules/heyai-ruleset`.

## 1. Core Logic
The CLI is built with Node.js and uses the following flow:
1. **User Input**: Interactive prompts (using `inquirer` or similar) to gather project preferences.
2. **Template Selection**: Based on chosen "Kits" (defined in `SYSTEM_DESIGN.md`).
3. **Scaffolding**: Copying files from the internal templates to the target directory (`.heyai-ruleset/`).
4. **Agent Injection**: Generating `HEYAI.agent.md` and modifying `AGENTS.md` (if exists).

## 2. The 7-Group Ruleset Matrix
Our architecture is centered around 7 core files that provide a complete context for AI:

- **MAP.md**: High-level map of the codebase.
- **IDENTITY_SOUL.md**: The "personality" and role of the AI Agent.
- **PROTOCOLS.md**: Standard operating procedures.
- **RULES.md**: Coding and collaboration constraints.
- **WORKFLOWS.md**: Step-by-step task execution guides.
- **CODE_STANDARDS.md**: Technical conventions (naming, patterns).
- **SYSTEM_DESIGN.md**: UI/UX and architectural philosophy.

## 3. Automation (semantic-release)
We use `semantic-release` to automate our release cycle. It strictly follows [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` -> Minor version bump.
- `fix:` -> Patch version bump.
- `BREAKING CHANGE:` -> Major version bump.
