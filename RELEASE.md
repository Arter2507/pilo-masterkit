# NPM Release Checklist

## 1. Local preflight

```bash
npm install
npm run release:check
```

`release:check` runs:
- `node --check index.js`
- `npm pack --dry-run`
- `npm whoami`

## 2. Version bump

```bash
npm version patch
```

Use `minor` or `major` when needed.

## 3. Publish

```bash
npm publish --access public
```

## 4. Quick install validation

```bash
npx create-heyai-ruleset@latest --help
```

## 5. CI/non-interactive example

```bash
npx create-heyai-ruleset@latest ./demo \
  --yes \
  --no-kits \
  --skip-design \
  --agent-name AI \
  --agent-config-path ../HEYAI.agent.md
```
