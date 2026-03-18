# create-heyai-ruleset

CLI scaffolder để cài bộ quy tắc HEYAI vào dự án và chuẩn hoá cách Agent nạp rule.
(CLI scaffolder to install the HEYAI ruleset into a project and standardize how Agents load rules.)

[![CI](https://github.com/Arter2507/create-heyai-ruleset/actions/workflows/ci.yml/badge.svg)](https://github.com/Arter2507/create-heyai-ruleset/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/create-heyai-ruleset.svg)](https://www.npmjs.com/package/@heyai-rules/heyai-ruleset?activeTab=readme)

## 🎯 Mục tiêu / Objectives

- Cài nhanh bộ rule vào thư mục ẩn `.heyai-ruleset`. (Quickly install the ruleset into the hidden `.heyai-ruleset` folder.)
- Cho phép chọn kit mặc định + kit GitHub tự nhập. (Allow choosing default kits + custom GitHub kits.)
- Cho phép tuỳ biến Lightmode/Darkmode bằng text tự do. (Allow customizing Lightmode/Darkmode with free-form text.)
- Tạo file `HEYAI.agent.md` ngay trong project root để quản lý tên Agent và cơ chế trigger. (Create a `HEYAI.agent.md` file in the project root to manage the Agent name and trigger mechanism.)

## 🚀 Tính năng chính / Key Features

- **Hỗ trợ các lệnh tạo (Create Command Support)**:
  - `npx create-heyai-ruleset@latest`
  - `npm create heyai-ruleset@latest`
  - `pnpm create heyai-ruleset`
- **Prompt chọn kit từ `SYSTEM_DESIGN.md` (Kit selection from `SYSTEM_DESIGN.md`)**:
  - Chọn nhiều mục (Select multiple items)
  - Không cài thêm (Do not install more)
  - Tự cài bằng nhiều link GitHub (ngăn cách `,`) (Manually install using multiple GitHub links, separated by `,`)
- **Prompt cấu hình thiết kế (Design configuration prompt)**:
  - Lightmode: màu sắc + theme (text) (Lightmode: color + theme (text))
  - Darkmode: màu sắc + theme (text) (Darkmode: color + theme (text))
  - Bỏ qua để giữ mặc định hiện có (Skip to keep existing defaults)
- **Ghi override vào (Write overrides to) `.heyai-ruleset/SYSTEM_DESIGN.md`**.
- **Cài kit theo lệnh hướng dẫn** trong README của từng GitHub project (ưu tiên `npx/pnpm dlx/npm create`), thay vì clone nguyên repo. (Install kits according to instructions in each project's README, favoring `npx/pnpm dlx/npm create` over cloning.)
- **Sinh báo cáo cài đặt (Generate installation report)** tại `install-report.md` ở root dự án (đồng thời giữ bản legacy trong `.heyai-ruleset/install-report.md`). (Generate an installation report at `install-report.md` in the project root, while keeping a legacy version in `.heyai-ruleset/install-report.md`.)

## 🤖 Cơ chế Agent / Agent Mechanism

Installer tạo `HEYAI.agent.md` trực tiếp tại project root. (The installer creates `HEYAI.agent.md` directly at the project root.)

Thông tin trong file / Information in the file:

- `agent_name` (mặc định / default: `AI`)
- **Activation greetings / Lời chào kích hoạt**:
  - `Hey, AI`
  - `Hey, <AgentName>`
- **Thứ tự nạp rule ưu tiên trong (Rule loading priority in) `.heyai-ruleset`**:
  1. `MAP.md`
  2. `IDENTITY_SOUL.md`
  3. `PROTOCOLS.md`
  4. `RULES.md`
  5. `WORKFLOWS.md`
  6. `CODE_STANDARDS.md`
  7. `SYSTEM_DESIGN.md`

## 💻 Cài đặt từ source / Installation from Source

```bash
npm install
npm run check
```

Chạy trực tiếp CLI local / Run CLI locally:

```bash
node index.js /path/to/target-project
```

## 🎮 Chạy tương tác (interactive) / Run Interactively

```bash
node index.js ./my-project
```

CLI sẽ hỏi / The CLI will ask:

- **B2**: chọn kit mặc định / không cài / tự cài link GitHub (Choose default kit / no install / manual GitHub links)
- **B3**: nhập màu + theme cho Lightmode/Darkmode hoặc bỏ qua (Enter color + theme for Lightmode/Darkmode or skip)
- **Tên Agent (Agent Name)**: `HEYAI.agent.md` sẽ được đặt tại project root (will be placed at the project root)

## 🤖 Chạy CI (non-interactive) / Run in CI

```bash
node index.js ./demo \
  --non-interactive \
  --no-kits \
  --skip-design \
  --agent-name HEYAI
```

Ví dụ đầy đủ / Full example:

```bash
node index.js ./demo \
  --non-interactive \
  --kits 1,3 \
  --custom-links https://github.com/org/a,https://github.com/org/b \
  --configure-design \
  --light-color "mau cam" \
  --light-theme "aesthetics" \
  --dark-color "xanh den" \
  --dark-theme "cosmic" \
  --agent-name "HEYAI" \
  --overwrite-agent-config
```

## 🛠️ Tuỳ chọn CLI / CLI Options

```text
-y, --yes                     Use defaults and skip prompts
--non-interactive             Disable prompts (for CI)
-t, --target <path>           Target project root
--kits <indexes>              Default kit indexes, e.g. 1,3
--no-kits                     Skip all default kit installs
--custom-links <links>        Comma-separated GitHub links
--configure-design            Enable design overrides
--skip-design                 Keep existing design defaults
--light-color <text>          Lightmode color text
--light-theme <text>          Lightmode theme text
--dark-color <text>           Darkmode color text
--dark-theme <text>           Darkmode theme text
--agent-name <name>           Agent name (default: AI)
--agent-config-path <path>    Optional explicit path
--overwrite-agent-config      Overwrite agent config file if exists
-h, --help                    Show help
```

## 📦 Phát hành npm / npm Release

Xem checklist: [RELEASE.md](./RELEASE.md) (Check the checklist in [RELEASE.md](./RELEASE.md))

## 🔄 Auto publish

- Chỉ dùng **1 kênh publish**: workflow `Publish npm` khi push tag `v*` (ví dụ `v0.1.3`). (Uses only one publish channel: the `Publish npm` workflow when pushing tag `v*`).
- Workflow ưu tiên xác thực bằng **GitHub OIDC (npm trusted publishing)**. (Workflow prioritizes authentication via GitHub OIDC.)
- Nếu OIDC chưa được cấu hình trên npm, workflow fallback sang `NPM_TOKEN`. (If OIDC is not configured on npm, the workflow falls back to `NPM_TOKEN`.)

---

> **"Code with intent, build with soul."**
