---
trigger: always_on
---

# 📜 CORE RULES & PROTOCOLS / Quy tắc & Giao thức Cốt lõi

> **Dự án: Pilo Masterkit**
> **Mục đích**: Thiết lập các quy tắc vận hành bất biến cho AI Agent trong dự án.
> **Lưu ý**: Tệp này có ưu tiên cao nhất (P0) đối với mọi hoạt động của Agent.

---

## 🌐 1. Ngôn ngữ & Giao tiếp (Language & Communication)

1.  **Giao tiếp & Suy luận**: Sử dụng **TIẾNG VIỆT** (Bắt buộc) cho mọi cuộc hội thoại, báo cáo và giải thích.
2.  **Tài liệu (Artifacts)**: Viết nội dung file `.md` (Plan, Task, Walkthrough) bằng **TIẾNG VIỆT**.
3.  **Kỹ thuật & Mã nguồn**:
    - Tên biến, hàm, file: **TIẾNG ANH** (camelCase, snake_case...).
    - Comment trong code: **TIẾNG ANH** (để chuẩn hóa quy chuẩn quốc tế).

---

## 🔄 2. Chu trình PDCA (Vòng đời Quản trị)

Mọi tác vụ lớn (Tính năng/Tái cấu trúc/Sửa lỗi) phải tuân thủ nghiêm ngặt chu trình 4 bước:

1.  **PLAN (Lập kế hoạch)**: Phân tích yêu cầu, liệt kê file bị ảnh hưởng và đề xuất giải pháp kỹ thuật rõ ràng. Luôn lập kế hoạch trước khi thực hiện tác vụ phức tạp. **Quy tắc Trạng thái File**: Mỗi khi một kế hoạch được Duyệt (Approved), Hoàn thành (Completed) hoặc Hủy bỏ (Cancelled), PHẢI ghi chú trạng thái ở đầu file và đổi tên file đính kèm trạng thái đó (VD: `[APPROVED]-plan.md`).
2.  **DO (Thực thi)**: Thực hiện công việc sau khi kế hoạch được phê duyệt. Tuân thủ tiêu chuẩn mã nguồn sạch (Clean Code).
3.  **CHECK (Kiểm tra)**: Chạy kiểm thử, kiểm tra lỗi cú pháp (Lint) và xác minh kết quả. **Bằng chứng trước, khẳng định sau**.
4.  **ACT (Tối ưu)**: Khắc phục lỗi phát sinh, cập nhật tài liệu và đóng phiên làm việc. Nếu gặp vấn đề bất ngờ, hãy DỪNG LẠI và lập lại kế hoạch (Re-plan).

---

## 🛑 3. Cổng Kiểm soát Socratic (Socratic Gate)

**Luật Bất Biến**: Không bao giờ thực hiện công việc ngay khi nhận yêu cầu mơ hồ hoặc có rủi ro cao. AI phải chủ động:
- Đặt ít nhất **3 câu hỏi chiến lược** để xác định mục tiêu và phạm vi nếu yêu cầu chưa rõ ràng.
- Đánh giá rủi ro ảnh hưởng đến hệ thống hiện tại. Nếu có rủi ro: **CẢNH BÁO**.
- **No Laziness**: Tìm kiếm nguyên nhân gốc rễ (Root Cause) thay vì chỉ sửa chữa bề nổi.
- **Task Limit**: Một tác vụ chỉ được thực hiện tối đa 3 lần.
- **Time Limit**: Mỗi lần thực hiện tối đa 10 phút. Nếu treo quá 10 phút, lập tức dừng tác vụ. Nếu dự tính cần nhiều thời gian hơn, phải đưa ra thời gian ước tính và hỏi ý kiến người dùng.

---

## 🛡️ 4. Bảo mật & An toàn (Security Armor)

- **Zero Secrets**: Tuyệt đối không lưu trữ API Keys, mật khẩu vào Git. Kiểm tra `.gitignore` thường xuyên.
- **Sanitization**: Kiểm tra kỹ các dữ liệu đầu vào (Input) và sử dụng Whitelist cho các kết nối mạng (nếu có).
- **Audit Requirement**: Luôn chạy quét bảo mật (`security-reviewer`) trước khi bàn giao các đoạn mã nhạy cảm.

---

## 🧹 5. Tiêu chuẩn Kỹ thuật (Technical Standards)

- **Immutability**: Ưu tiên tạo đối tượng mới thay vì thay đổi trực tiếp (mutate) đối tượng cũ.
- **Simplicity First**: Ưu tiên giải pháp đơn giản và thanh lịch nhất. Tránh over-engineering.
- **Modularization**: Không try-hard code trong một file quá lớn. Chia nhỏ file (<400 dòng), ưu tiên tách components/logic dùng chung để tăng khả năng tái sử dụng.
- **Model Selection**: Tự chọn model phù hợp (flash cho planning/review, pro cho coding/debug sâu).

---

## 📂 6. Tổ chức & Vệ sinh Ngữ cảnh (Context Hygiene)

- **Artifacts Location**: Lưu trữ file vào đúng thư mục chuyên biệt. Không để file tạm ở thư mục gốc.
- **Context Awareness**: Luôn đọc `PROJECT_MAP.md` và `PILO_MASTER.md` khi bắt đầu một phiên làm việc mới. Đọc có chọn lọc (Selective Reading) các file cần thiết thay vì quét toàn bộ project.
- **Memory Sync**: Luôn cập nhật memories (hoặc nhật ký công việc) sau mỗi phiên làm việc (bất kể lớn nhỏ) và mỗi khi lập một kế hoạch.
- **Memory Hygiene**: Tự động đánh giá và dọn dẹp memory định kỳ (hoặc bằng lệnh `/clean_memory`). Hệ thống **PHẢI tổng hợp, chắt lọc những tinh hoa, quyết định quan trọng**, đồng thời xóa bỏ triệt để các log/ngữ cảnh dư thừa để tránh "loãng" bộ nhớ.
- **Customization**: Có thể tạo thêm quy tắc, kỹ năng, hiến pháp hoặc workflows mới bằng lệnh slash tương ứng.
- **Documentation Sync**: Mọi thay đổi kiến trúc phải được cập nhật ngay lập tức vào bản đồ dự án.

---
> *"Orchestrating the technology of the future with discipline and soul."*
