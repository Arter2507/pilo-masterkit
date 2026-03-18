# create-heyai-ruleset

CLI scaffolder để cài bộ quy tắc HEYAI vào dự án và chuẩn hoá cách Agent nạp rule.

## Mục tiêu

- Cài nhanh bộ rule vào thư mục ẩn `.heyai-ruleset`.
- Cho phép chọn kit mặc định + kit GitHub tự nhập.
- Cho phép tuỳ biến Lightmode/Darkmode bằng text tự do.
- Tạo file `HEYAI.agent.md` nằm ngoài project root để quản lý tên Agent và cơ chế trigger.

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
- Clone các kit đã chọn vào `.heyai-ruleset/kits/`.
- Sinh báo cáo tại `.heyai-ruleset/install-report.md`.

## Cơ chế Agent

Installer tạo `HEYAI.agent.md` ở vị trí ngoài project root (bạn chọn đường dẫn khi cài).

Thông tin trong file:

- `agent_name` (mặc định `AI`)
- Activation greetings:
  - `Hey, AI`
  - `Hey, <AgentName>`
- Thứ tự nạp rule ưu tiên trong `.heyai-ruleset`:
  - `MAP.md`
  - `AGENTS.md`
  - `PROTOCOL.md`
  - `PROTOCOLS.md` (fallback)

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
- Tên Agent và path file `HEYAI.agent.md` (bắt buộc nằm ngoài project root)

## Chạy CI (non-interactive)

```bash
node index.js ./demo \
  --non-interactive \
  --no-kits \
  --skip-design \
  --agent-name HEYAI \
  --agent-config-path ../HEYAI.agent.md
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
  --agent-config-path ../HEYAI.agent.md \
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
