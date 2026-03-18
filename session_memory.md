# Session Memory

Last updated: 2026-03-18 (Asia/Saigon)

## Project Snapshot
- Repo: `Arter2507/create-heyai-ruleset` (transitioned to `@heyai-rules` scope)
- Local branch: `main`
- Current published version: `1.1.0` (managed by `semantic-release`)
- Registry: GitHub Packages (`npm.pkg.github.com`)
- Current state: Full bilingual documentation and automated release pipeline integrated.

## Completed Before This Session
- CLI installer created and maintained.
- `HEYAI.agent.md` is generated at project root.
- Trigger bridge is injected into root `AGENTS.md`.
- Kit install behavior improved.
- Install report moved to root.

## Newly Completed In This Session
- Fully bilingual (VI/EN) documentation for all rule files.
- **Repository Hygiene**: Added `.gitignore` to protect sensitive files (`.npmrc`, etc.).
- **Organization Transition**: 
  - Moved to organization scope: **`@heyai-rules/heyai-ruleset`**.
  - Configured project for **GitHub Packages** (`npm.pkg.github.com`).
- **Release Automation**:
  - Integrated **`semantic-release`** for automated versioning and changelog generation.
  - Configured GitHub Actions to use `GITHUB_TOKEN` for OIDC and publishing.
- **Documentation**: Updated `README.md` with the new scoped package installation commands.

## Release Verification
- **v1.0.0**: Initial release under `@heyai-rules`.
- **v1.0.1**: Fixed naming compliance and organization mapping.
- **v1.1.0**: Successful integration of `semantic-release` with automated versioning.

## New User Requests (Current Session)
1. Update README.md with new scoped package installation commands.
2. Update session_memory.md noting publish success and upcoming tasks.

## Execution Plan For Next Pass
1. Optimize `index.js` to support more rule kits.
2. Add automated tests for the CLI in the CI/CD pipeline.
3. Review `RULES.md` for historical malformed content and cleanup.

## Notes / Risks
- **Security**: The user shared an npm token in the chat; it was NOT pushed to GitHub (prevented by `.gitignore`), but the user was advised to revoke it.
- **Commit Messages**: Future development MUST follow **Conventional Commits** for `semantic-release` to function properly.
