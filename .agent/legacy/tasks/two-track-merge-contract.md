# Two-Track Merge Contract (Canonical + Alias)

Date: 2026-04-04

## Workflow Compatibility Contract
- Canonical workflow entries remain stable for: `plan`, `code-review`, `verify`, `clean-memory`, `ui-ux-pro-max`.
- Specialized workflows remain available and are treated as scoped aliases, not replacements.
- No workflow path removal until alias map and broken-link checks pass.

## Skill Compatibility Contract
- Legacy skill packs are retained while new packs are integrated.
- Overlapping skills are mapped by purpose before archive.
- Critical skills (`clean-code`, `frontend-design`, `ui-ux-pro-max`) are locked from deletion.

## Rule Compatibility Contract
- Legacy core rule files remain active baseline.
- Modular `rules/common/*` and language rules are additive during transition.
- If conflict exists, stricter security/testing requirement wins.

## Persona Safety Contract
- Current persona profiles and Trigger On behavior are preserved.
- Selective read maps are updated only if canonical paths change.
- No persona folder renaming during merge transition.

## Definition of Done for Cleanup Phase
- No critical file missing.
- No duplicate cluster without canonical+alias mapping.
- No broken internal references in `.agent` docs/workflows/profiles.
- UTF-8 readability validated on touched files.
