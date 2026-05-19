---
name: design-system-and-ui
description: Build premium, aesthetically pleasing User Interfaces and Markdown documents.
---

# 🎨 Design System & UI Engineering

## Overview
This skill ensures that all visual outputs—whether Web Apps or Markdown documents—are highly polished, modern, and provide a "WOW" factor. Minimal Viable Product (MVP) does not mean ugly.

## When to Use
- Building or modifying user-facing Web UI components.
- Generating Markdown documentation, reports, or artifacts that the user will read.

## Progressive Disclosure
To understand the specific aesthetic standards, the Agent **MUST** refer to:
👉 `.agent/references/design-templates.md`

## Process (Web UI)

### Step 1: Establish the Theme
- Ensure a cohesive, harmonious color palette is defined (e.g., utilizing CSS variables or Tailwind configs).
- Enforce modern typography (e.g., `Inter`, `Roboto`). Avoid browser defaults.

### Step 2: Build Components
- Construct UI components prioritizing generous whitespace, rounded corners, and soft shadows to create depth.
- **Mandatory**: Add `hover`, `focus`, and `active` micro-animations to every interactive element (buttons, links, inputs).

### Step 3: Responsive & Accessible
- Verify the layout responds correctly to Mobile, Tablet, and Desktop screens.
- Ensure text contrast meets WCAG AA standards.

## Process (Markdown)

### Step 1: Structure & Hierarchy
- Use clear headings (`##`, `###`) to separate sections.
- Emphasize critical information using GitHub Alerts (`> [!NOTE]`, `> [!WARNING]`).

### Step 2: Formatting
- Always specify the language for code blocks.
- Use Tables to organize comparative or dense data.

## Anti-Rationalization
- *"I'll just use standard HTML buttons to get it working fast."* -> Unstyled, default UI components degrade the perceived quality of the entire application. Apply base styles immediately.

## Verification
- [ ] Do all buttons and links have hover state animations?
- [ ] Are the colors harmonious, avoiding harsh default shades?
- [ ] If Markdown, are Alerts and Tables used effectively to improve readability?
