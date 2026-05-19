# 🎮 Pilo Masterkit - Slash Commands Wiki

Welcome to the **Slash Command** system of Pilo Masterkit. These commands let you control your AI Agent using the **Ultimate Core Skill Pack**.
Chào mừng bạn đến với hệ thống lệnh **Slash Command** của Pilo Masterkit. Đây là bộ công cụ điều khiển AI Agent thông qua **Bộ Kỹ Năng Lõi Tối Thượng (Ultimate Core Skill Pack)**.

---

## 🏗️ 1. Core Lifecycle / Vòng Đời Cốt Lõi (PDCA)

These commands map directly to the software development lifecycle.
Các lệnh này ánh xạ trực tiếp đến vòng đời phát triển phần mềm.

| Command       | Core Skill File               | EN Description                                                | VI Mô tả                                            |
| :------------ | :---------------------------- | :------------------------------------------------------------ | :-------------------------------------------------- |
| `/brainstorm` | `brainstorming.md`            | Apply Socratic Gate to clarify vague requests.                | Động não và làm rõ yêu cầu mơ hồ bằng Socratic Gate.|
| `/spec`       | `spec-driven-development.md`  | Write a detailed PRD/Spec before writing code.                | Viết tài liệu đặc tả (Spec) trước khi code.         |
| `/plan`       | `planning-and-task-breakdown.md`| Decompose Spec into actionable, vertical-slice tasks.     | Phân rã Spec thành các tác vụ nhỏ theo lát cắt dọc. |
| `/build`      | `incremental-implementation.md` | Implement code in safe, incremental slices.               | Triển khai mã nguồn theo từng bước an toàn.         |
| `/test`       | `test-driven-development.md`  | Ensure behavior is verified (Red-Green-Refactor).             | Viết kiểm thử đảm bảo hành vi hệ thống (TDD).       |

---

## 🛡️ 2. Quality & Validation / Kiểm Định & Chất Lượng

| Command       | Core Skill File               | EN Description                                                | VI Mô tả                                            |
| :------------ | :---------------------------- | :------------------------------------------------------------ | :-------------------------------------------------- |
| `/doubt`      | `doubt-driven-development.md` | Adversarial self-review to prevent hallucinations/bugs.       | Tư duy phản biện để chống ảo giác/lỗi logic.        |
| `/debug`      | `systematic-debugging.md`     | Systematic 5-step triage for resolving errors.                | Quy trình 5 bước gỡ lỗi có hệ thống.                |
| `/review`     | `code-review-and-quality.md`  | Rigorous 5-axis code quality review.                          | Đánh giá chất lượng mã nguồn trên 5 phương diện.    |
| `/simplify`   | `code-simplification.md`      | Refactor complex code to improve readability.                 | Đơn giản hóa mã nguồn phức tạp (Refactoring).       |

---

## 🚀 3. Deployment & Environment / Môi Trường & Triển Khai

| Command       | Core Skill File               | EN Description                                                | VI Mô tả                                            |
| :------------ | :---------------------------- | :------------------------------------------------------------ | :-------------------------------------------------- |
| `/ui`         | `design-system-and-ui.md`     | Apply premium UI/UX standards and Markdown aesthetics.        | Thiết kế giao diện và tài liệu đạt chuẩn cao cấp.   |
| `/commit`     | `git-workflow-and-versioning.md`| Manage atomic commits and version history.                | Quản lý commit atomic và lịch sử phiên bản.         |
| `/ship`       | `shipping-and-launch.md`      | Pre-flight checks and safe deployment procedures.             | Kiểm tra trước khi ra mắt và triển khai an toàn.    |
| `/clean`      | `context-engineering.md`      | Clear memory bloat and save context state.                    | Dọn dẹp ngữ cảnh để tránh tràn bộ nhớ.              |

---

> [!TIP]
> **Pro Tip**: The AI Agent reads the corresponding `.md` file in `.agent/skills/` whenever you call a slash command. If you don't use any command, the Agent defaults to `using-pilo-skills.md` to route your request automatically.
>
> **Mẹo**: Agent sẽ tự động đọc file skill tương ứng trong `.agent/skills/` mỗi khi bạn gọi lệnh slash. Nếu bạn không gọi lệnh nào, Agent sẽ dùng `using-pilo-skills.md` để tự định tuyến.

---

_© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul._
