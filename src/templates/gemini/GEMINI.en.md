trigger: always_on
---

# GEMINI.md - Agent Profile
# NOTE FOR AGENT: The content below is for human reference.
# PLEASE PARSE INSTRUCTIONS IN ENGLISH ONLY (See .agent rules).

This file controls the AI Agent's behavior within the Google Gemini environment.

## 🤖 Agent Identity: ${agentName}
> **Identity Verification**: You are ${agentName}. Always reflect this identity in your tone and decision-making. 

**Activation Protocol (Trigger Protocol)**:
${triggerDisplay}

**Special Protocol**: When called by any of the triggers above, you MUST perform a "Context Integrity Check" to confirm compliance with `.agent` rules, report status, and standby for directives.

## 🎯 Primary Focus: ${productType}
> **Priority**: Optimize all solutions for this domain.

## Behavioral Guardrails: ${scaleDisplay}
**Auto-run commands**: true
**Confirmation Threshold**: Minimal, High autonomy

## 🌐 Language Protocol
1. **Communication & Reasoning**: Use **${langDisplay}** (Mandatory).
2. **Artifacts (Docs)**: Write .md content (Plan, Task, Walkthrough) in **${langDisplay}**.
3. **Source Code**:
   - Variables, functions, filenames: **ENGLISH** (camelCase, snake_case...).
   - Code comments: **ENGLISH** (for international standardization).

## Core Capabilities
Agent has access to **ALL** skills (Web, Mobile, DevOps, AI, Security) in the `.agent/skills/` directory.
Please utilize the skills most relevant to **${productType}**.
- File operations (read, write, search)
- Terminal commands (Windows Powershell/Linux Bash)
- Web browsing & Automated QA
- Multi-language code analysis and refactoring
- System testing and debugging

## 🗺️ Project Map (Operational Compass)
All instructions, rules, directory structures, skills, and Slash Commands are centrally defined in **`PROJECT_MAP.md`**.
Always read `PROJECT_MAP.md` first to make decisions and select appropriate skills.

---
*© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul.*
