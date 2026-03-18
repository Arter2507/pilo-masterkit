# Session Memory

Last updated: 2026-03-18 (Asia/Saigon)

## Project Snapshot
- Repo: `Arter2507/create-heyai-ruleset`
- Local branch: `main`
- Current published npm version: `0.1.2` (latest verified from npm view)
- Latest local package version: `0.1.4` (used for workflow verification test)
- Current state: clean worktree before this checkpoint, then new pending edits requested by user.

## Completed Before This Session
- CLI installer created and maintained.
- `HEYAI.agent.md` is generated at project root.
- Trigger bridge is injected into root `AGENTS.md`.
- Kit install behavior improved:
  - runs install commands inferred from kit README
  - avoids false `[OK]` by validating project changes/markers.
- Install report moved to root:
  - primary: `install-report.md`
  - legacy copy: `.heyai-ruleset/install-report.md`
- Publish workflows refactored to a single channel (tag `v*`) with OIDC-first + token fallback.

## New User Requests (Current Session)
1. Update context definition in `WORKFLOWS.md`:
   - Replace Step 1 with exactly 3 mandatory information groups:
     - Vai trò & phạm vi
     - Mục tiêu & vấn đề
     - Cách làm việc
2. Add bilingual Vietnamese-English content to all rule files.
3. Ensure `Hey, AI` uses primary user language automatically (`choose language`) when responding.
4. Complete npm Trusted Publishing setup verification end-to-end.

## Execution Plan For Next Session
1. Update `WORKFLOWS.md` section:
   - `Bước 1: Xác định Ngữ cảnh (Context Definition)` with required wording.
2. Apply bilingual format to rule files:
   - `MAP.md`
   - `IDENTITY_SOUL.md`
   - `PROTOCOLS.md`
   - `RULES.md`
   - `WORKFLOWS.md`
   - `CODE_STANDARDS.md`
   - `SYSTEM_DESIGN.md`
   - plus remaining policy docs if user confirms full scope.
3. Add explicit language policy for trigger:
   - on `Hey, AI`, detect user language and respond in that primary language.
   - implement in generated `HEYAI.agent.md` template and `AGENTS.md` bridge block.
4. Trusted Publishing verification:
   - validate npm trusted publisher mapping for this GitHub repo
   - rerun tag workflow with next patch version
   - confirm npm version increments.

## Notes / Risks
- GitHub Actions publish currently fails when OIDC is not configured on npm and `NPM_TOKEN` secret is empty.
- Bilingual conversion is content-heavy and should be done carefully to avoid changing technical meaning.
