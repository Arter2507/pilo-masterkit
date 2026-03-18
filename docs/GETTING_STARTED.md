# Getting Started for Developers 🛠️

Welcome! This guide will help you set up the project locally to contribute to `heyai-ruleset`.

## 1. Prerequisites
- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0

## 2. Setup
1. Fork and Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

## 3. Running Locally
You can test the CLI without publishing:
```bash
node index.js --target ./test-project
```

## 4. Development Workflow
- **Rules updates**: Modify templates in `index.js` or the markdown files in the root (for scaffolding).
- **Logic updates**: Modify `index.js`.
- **Validation**:
  ```bash
  npm run check
  ```

## 5. Security
All code is scanned for malware. We use a strict review process for any PR that modifies the scaffolding logic to prevent supply-chain attacks.
