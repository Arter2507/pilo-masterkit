# 🎮 Pilo Masterkit - Slash Commands Wiki

Welcome to the **Slash Command** system of Pilo Masterkit. These commands let you control your AI Agent in a structured and efficient way.

Chào mừng bạn đến với hệ thống lệnh **Slash Command** của Pilo Masterkit. Đây là bộ công cụ giúp điều khiển AI Agent một cách có hệ thống và hiệu quả nhất.

---

## 🏗️ 1. Core Workflows / Quy trình Lõi

Every session should start and end with these commands for consistency.

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/plan` | Analyze requirements, assess risks, create step-by-step plan. | Lập kế hoạch chi tiết, đánh giá rủi ro. |
| `/status` | Check project progress and Agent state. | Kiểm tra tiến độ dự án và trạng thái Agent. |
| `/debug` | Systematic root-cause analysis and fix. | Tìm nguyên nhân gốc rễ và sửa lỗi có hệ thống. |
| `/brainstorm` | Structured ideation for features/strategy. | Brainstorming có cấu trúc cho tính năng/chiến lược. |
| `/aside` | Quick side-question without losing context. | Hỏi đáp nhanh không làm loãng luồng chính. |

---

## 💻 2. Feature Development / Phát triển Tính năng

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/create` | Create a new function, module, or application. | Tạo mới một hàm, module hoặc ứng dụng. |
| `/enhance` | Add features or optimize existing code. | Nâng cấp tính năng hoặc tối ưu mã nguồn. |
| `/tdd` | Test-Driven Development (write tests first). | Phát triển hướng kiểm thử (test trước, code sau). |
| `/ui-ux-pro-max` | Premium GUI design and implementation. | Thiết kế và triển khai giao diện cao cấp. |
| `/preview` | Start and check local dev server. | Khởi chạy và kiểm tra server cục bộ. |

---

## 🚀 3. Deployment / Triển khai

Commands optimized for platforms you chose during setup.

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/deploy` | Deploy to your selected platform (Vercel, GitHub Pages, Docker, Custom). | Triển khai lên nền tảng đã chọn. |

---

## 🛡️ 4. Quality & Security / Kiểm định & Chất lượng

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/code-review` | Review code quality, find logic errors, suggest refactoring. | Đánh giá chất lượng, tìm lỗi logic, đề xuất refactor. |
| `/e2e` | End-to-End testing with Playwright. | Kiểm thử End-to-End với Playwright. |
| `/verify` | Full project verification before commit/release. | Xác minh tổng thể dự án trước khi commit/release. |
| `/test` | Run test suite (language-aware). | Chạy bộ kiểm thử (tự nhận dạng ngôn ngữ). |
| `/rules-distill` | Auto-update rules from working patterns. | Tự động cập nhật quy tắc từ quá trình làm việc. |

---

## 🔬 5. Language-Specific Reviews / Review theo Ngôn ngữ

Deep code reviews focusing on idiomatic conventions and safety.

| Command | Target |
| :--- | :--- |
| `/python-review` | Python (PEP 8, type hints, security) |
| `/rust-review` | Rust (ownership, lifetimes, unsafe) |
| `/go-review` | Go (concurrency, error handling) |
| `/cpp-review` | C++ (memory safety, modern C++) |
| `/kotlin-review` | Kotlin/Java (null safety, coroutines) |
| `/flutter-review` | Flutter/Dart (widgets, state management) |
| `/laravel-review` | Laravel PHP (Eloquent, validation) |

---

## 🧠 6. Knowledge & Memory / Quản trị Tri thức

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/clean-memory` | Compress context to avoid memory bloat. | Nén ngữ cảnh tránh "loãng" bộ nhớ. |
| `/docs` | Look up library documentation. | Tra cứu tài liệu thư viện. |
| `/init-docs` | Create standard Pilo docs structure. | Tạo cấu trúc tài liệu chuẩn Pilo. |
| `/save-session` | Save session state for later resumption. | Lưu phiên làm việc để tiếp tục sau. |

---

## 🎛️ 7. Advanced Orchestration / Điều phối Nâng cao

| Command | EN Description | VI Mô tả |
| :--- | :--- | :--- |
| `/orchestrate` | Multi-agent workflow orchestration. | Điều phối luồng làm việc đa Agent. |
| `/prp-plan` | Large-scale project planning protocol. | Quy trình lập kế hoạch dự án quy mô lớn. |
| `/prp-implement` | Execute implementation plan with validation. | Thực thi kế hoạch với vòng kiểm tra. |
| `/santa-loop` | Dual-agent adversarial verification loop. | Vòng lặp kiểm tra chéo giữa 2 Agent. |
| `/skill-create` | Generate `SKILL.md` from real experience. | Tạo `SKILL.md` từ kinh nghiệm thực tế. |

---

## 🔧 8. Build Error Resolvers / Xử lý Lỗi Build

| Command | Target |
| :--- | :--- |
| `/rust-build` | Fix Rust build errors and borrow checker issues |
| `/go-build` | Fix Go build errors and `go vet` warnings |
| `/flutter-build` | Fix Dart analyzer and Flutter build failures |
| `/gradle-build` | Fix Gradle build errors for Android/KMP |
| `/kotlin-build` | Fix Kotlin/Gradle compiler issues |
| `/cpp-build` | Fix C++ build errors, CMake, and linker problems |

---

> [!TIP]
> **Pro Tip**: The AI Agent reads the corresponding `.md` file in `.agent/workflows/` whenever you call a slash command. You can create your own commands by adding a new `.md` file there!
>
> **Mẹo**: Agent sẽ tự động đọc file workflow tương ứng trong `.agent/workflows/` mỗi khi bạn gọi lệnh slash. Bạn có thể tự tạo lệnh mới bằng cách thêm file `.md` vào thư mục đó!

> [!NOTE]
> Your project also includes a **`PILO_WIKI.md`** — an auto-generated wiki with commands tailored specifically to your stack and deploy target.
>
> Dự án của bạn cũng bao gồm **`PILO_WIKI.md`** — một wiki tự động sinh với các lệnh phù hợp riêng cho Stack và Deploy của bạn.

---

*© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul.*
