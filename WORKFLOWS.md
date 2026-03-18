# 🔄 PROJECT WORKFLOWS

## 🌐 Language / Ngôn ngữ
- `VI`: Nội dung chuẩn cho quy trình.
- `EN`: AI interprets equivalent English meaning for workflow automation.
- Trigger language rule: after `Hey, AI`, use user's primary language to ask/answer.

Tài liệu này định nghĩa các quy trình làm việc đặc thù để đảm bảo tính nhất quán và hiệu quả trong mọi phiên làm việc.

---

## 🚀 1. FIRST SESSION ONBOARDING (Khởi tạo Ngữ cảnh)

Quy trình này áp dụng khi AI bắt đầu một phiên làm việc mới, hoặc khi chưa có dữ liệu bộ nhớ (`memory`) trước đó.

### Bước 1: Xác định Ngữ cảnh (Context Definition)
AI chỉ hỏi 3 nhóm thông tin bắt buộc:

**Vai trò & phạm vi**
- Vai trò của AI trong dự án là gì?
- Vai trò của người dùng là gì?

**Mục tiêu & vấn đề**
- Dự án đang giải quyết vấn đề gì?
- Kết quả cuối cùng cần đạt là gì?

**Cách làm việc**
- Có yêu cầu đặc biệt nào về cách làm việc không? (ví dụ: tôi là ai, bạn là ai, bạn muốn tôi gọi bạn là gì, chi tiết, ngắn gọn, theo chuẩn cụ thể, v.v.)

### Bước 2: Lưu trữ Ngữ cảnh
Thông tin phản hồi sẽ được lưu trữ vào `documentation/MEMORIES.md` hoặc `documentation/CONTEXT.md` để phục vụ các phiên làm việc sau.

---

## 🧪 2. SKILL INTEGRATION (Tích hợp Kỹ năng)

Dựa trên ngữ cảnh đã xác định, AI sẽ:
1.  **Quét yêu cầu**: Xác định các kỹ năng cần thiết (Web, Security, DevOps, v.v.).
2.  **Kích hoạt bộ Kit**: Mặc định sử dụng các bộ Kit trong `SYSTEM_DESIGN.md` (UI/UX Pro Max, AntiGravity Kit).
3.  **Tham chiếu thư viện**: Truy cập và tải các kỹ năng bổ trợ từ [Microsoft Skills](https://github.com/microsoft/skills) nếu cần thiết.

---

## 🏗️ 3. EXECUTION FLOW (Luồng Thực thi)

Sau khi có đủ ngữ cảnh và kỹ năng, AI thực hiện theo quy trình tại `MAP.md`:
1.  **Kiểm tra trạng thái**: Đọc `MAP.md` và `MEMORIES.md`.
2.  **Lập kế hoạch (Planning)**: Viết `task.md` và `implementation_plan.md`.
3.  **Thực thi (Doing)**: Viết code và xác minh kết quả.
4.  **Báo cáo (Closing)**: Tạo `walkthrough.md` và cập nhật nhật ký học tập.

---

## ⚠️ 4. LIMITS & SAFEGUARDS

- **Fail-Safe**: Nếu một tác vụ thất bại (FAIL) quá 3 lần, AI phải dừng lại ngay lập tức và báo cáo cho người dùng.
- **Resource Management**: Một tác vụ không chạy quá 10 phút. Nếu dự đoán cần nhiều thời gian hơn, AI phải ước tính và chờ xác nhận trước khi tiếp tục.
- **Consent Policy**: Phải hỏi và nhận được xác nhận từ người dùng trước khi: Xóa file, Kết nối mạng, hoặc Thực hiện các thay đổi phá vỡ kiến trúc.

---

> **"Efficiency is doing things right; effectiveness is doing the right things."** — Làm đúng việc, đúng cách.
