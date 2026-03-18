# create-heyai-ruleset

CLI scaffolder để cài bộ quy tắc HEYAI vào dự án và chuẩn hoá cách Agent nạp rule.

[![CI](https://github.com/Arter2507/create-heyai-ruleset/actions/workflows/ci.yml/badge.svg)](https://github.com/Arter2507/create-heyai-ruleset/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/create-heyai-ruleset.svg)](https://www.npmjs.com/package/create-heyai-ruleset)

## Mục tiêu

- Cài nhanh bộ rule vào thư mục ẩn `.heyai-ruleset`.
- Cho phép chọn kit mặc định + kit GitHub tự nhập.
- Cho phép tuỳ biến Lightmode/Darkmode bằng text tự do.
- Tạo file `HEYAI.agent.md` ngay trong project root để quản lý tên Agent và cơ chế trigger.

## Tính năng chính

- Hỗ trợ các lệnh tạo:
  - `npx create-heyai-ruleset@latest`
  - `npm create heyai-ruleset@latest`
  - `pnpm create heyai-ruleset`
- Prompt chọn kit từ `SYSTEM_DESIGN.md`:
  - Chọn nhiều mục
  - Không cài thêm
  - Tự cài bằng nhiều link GitHub (ngăn cách `,`)
- Prompt cấu hình thiết kế:
  - Lightmode: màu sắc + theme (text)
  - Darkmode: màu sắc + theme (text)
  - Bỏ qua để giữ mặc định hiện có
- Ghi override vào `.heyai-ruleset/SYSTEM_DESIGN.md`.
- Cài kit theo lệnh hướng dẫn trong README của từng GitHub project (ưu tiên `npx/pnpm dlx/npm create`), thay vì clone nguyên repo.
- Sinh báo cáo cài đặt tại `install-report.md` ở root dự án (đồng thời giữ bản legacy trong `.heyai-ruleset/install-report.md`).

## Cơ chế Agent

Installer tạo `HEYAI.agent.md` trực tiếp tại project root.

Thông tin trong file:

- `agent_name` (mặc định `AI`)
- Activation greetings:
  - `Hey, AI`
  - `Hey, <AgentName>`
- Thứ tự nạp rule ưu tiên trong `.heyai-ruleset`:
  - `MAP.md`
  - `IDENTITY_SOUL.md`
  - `PROTOCOLS.md`
  - `RULES.md`
  - `WORKFLOWS.md`
  - `CODE_STANDARDS.md`
  - `SYSTEM_DESIGN.md`

## Cài đặt từ source

```bash
npm install
npm run check
```

Chạy trực tiếp CLI local:

```bash
node index.js /path/to/target-project
```

## Chạy tương tác (interactive)

```bash
node index.js ./my-project
```

CLI sẽ hỏi:

- B2: chọn kit mặc định / không cài / tự cài link GitHub
- B3: nhập màu + theme cho Lightmode/Darkmode hoặc bỏ qua
- Tên Agent (`HEYAI.agent.md` sẽ được đặt tại project root)

## Chạy CI (non-interactive)

```bash
node index.js ./demo \
  --non-interactive \
  --no-kits \
  --skip-design \
  --agent-name HEYAI
```

Ví dụ đầy đủ:

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

## Tuỳ chọn CLI

```text
-y, --yes
--non-interactive
-t, --target <path>
--kits <indexes>
--no-kits
--custom-links <links>
--configure-design
--skip-design
--light-color <text>
--light-theme <text>
--dark-color <text>
--dark-theme <text>
--agent-name <name>
--agent-config-path <path>
--overwrite-agent-config
-h, --help
```

## Phát hành npm

Xem checklist: [RELEASE.md](./RELEASE.md)

## Auto publish

- Workflow `Publish npm (main)` sẽ tự publish khi push `main` nếu version trong `package.json` chưa tồn tại trên npm.
- Cần cấu hình `NPM_TOKEN` trong GitHub repo secrets.
