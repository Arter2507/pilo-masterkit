---
name: shipping-and-launch
description: Pre-flight checks and safe deployment procedures.
---

# 🚀 Shipping & Launch

## Overview
The final stage of the **ACT** phase. Ensures that code transitions from a developer's local environment to production safely, with appropriate monitoring and fallback strategies.

## When to Use
- Preparing a release build.
- Deploying to staging or production environments.

## Process

### Step 1: Pre-Flight Checklist
Verify the following before any deployment:
- All automated tests (Unit, Integration, E2E) pass on the main branch.
- No debug code or `console.log` statements remain in production paths.
- Environment variables for the target environment are correctly configured.

### Step 2: Feature Flags
Whenever possible, wrap new features in a Feature Flag. This allows the code to be deployed safely and turned on/off without requiring a full redeployment or rollback.

### Step 3: Staged Rollout
Do not deploy to 100% of users immediately.
- Deploy to a staging environment first.
- If deploying to production, perform a canary release (e.g., 5% of users) to monitor for unexpected errors.

### Step 4: Monitor & Rollback Plan
- Know exactly how to revert the deployment if critical failures occur.
- Monitor error tracking systems (e.g., Sentry, Datadog) immediately after launch.

## Anti-Rationalization
- *"It works on my machine, just push it to production."* -> Production has different data, load, and environment configurations. Always test in a staging environment mirroring production.

## Verification
- [ ] Have all pre-flight checks passed?
- [ ] Is there a clear, documented rollback procedure?
