# 🌿 Version Orchestration & Collaboration

This document defines the Git workflow, branching strategy, and commit message standards for the Pilo Masterkit to ensure a clean, traceable, and professional history.

> *"Clean Git history is as important as clean code."*

---

## 🌿 1. Modular Branching Strategy

- **`main`**: The source of truth. Always stable and production-ready.
- **`dev`**: The primary integration branch for new features and fixes.
- **`feature/[name]`**: Dedicated branch for developing a specific feature.
- **`bugfix/[name]`**: Dedicated branch for fixing identified bugs.
- **`hotfix/[name]`**: Urgent production fixes.

---

## 💬 2. Conventional Commit Standards

Every commit message MUST follow the **Conventional Commits** format: `type(scope): description`.

| Type | Description |
| :--- | :--- |
| **feat** | A new feature or capability. |
| **fix** | A bug fix. |
| **docs** | Documentation-only changes. |
| **style** | Formatting, missing semi-colons, etc. (no business logic change). |
| **refactor** | Code change that neither fixes a bug nor adds a feature. |
| **perf** | A code change that improves performance. |
| **test** | Adding missing tests or correcting existing tests. |
| **chore** | Changes to the build process, auxiliary tools, or libraries. |
| **ci** | Changes to CI configuration files and scripts. |

*Example: `feat(auth): add JWT login support`*

---

## 🚀 3. Pull Request (PR) Protocol

Before submitting or merging any PR, the AI Task Force must ensure:

1. **Protocol Verification**: All code adheres to `CORE_RULES.md` and `CODE_CRAFTSMANSHIP.md`.
2. **Quality Gate**: 
   - `python .agent/scripts/checklist.py .` must pass with zero critical blockers.
   - All tests pass with **80%+ coverage**.
3. **Walkthrough Inclusion**: A final `walkthrough.md` report must be provided, detailing:
   - What changed and why.
   - Evidence of successful tests (logs/screenshots).
   - Side-effects analyzed via mental simulation.
4. **Knowledge Capture**: Any important project context, architectural decisions, or lessons learned must be updated in `.agent/tasks/lessons.md`.
5. **Approval**: Final confirmation from the User or a senior AI Orchestrator.

---

## 🧹 4. Repository Hygiene

- **Micro-Commits**: Prefer small, atomic commits covering a single logical change.
- **Zero Secrets**: Strictly prohibit committing `.env` files, API keys, or any sensitive credentials.
- **Sanitized History**: Use `rebase` (where appropriate) to keep a linear and clean history.
- **File Integrity**: Never leave temporary files, build artifacts, or IDE configs in the repository.

---
> *"Orchestrate the history as you orchestrate the code."*
