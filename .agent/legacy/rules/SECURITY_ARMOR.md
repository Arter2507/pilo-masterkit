# 🛡️ SECURITY ARMOR / Giao thức Bảo mật Cốt lõi

> **Dự án**: Pilo Masterkit
> **Nguyên tắc**: Bảo mật không phải là một sản phẩm, mà là một quy trình xuyên suốt (Security-First).

---

## 🔐 1. Quản lý Bí mật (Zero Secrets)

- **Tuyệt đối cấm**: Không bao giờ hardcode API Keys, mật khẩu, tokens vào mã nguồn hoặc commit lên Git.
- **Lưu trữ**: Chỉ sử dụng biến môi trường (`.env`) hoặc hệ thống quản lý bí mật chuyên dụng.
- **Xác minh**: Luôn kiểm tra file `.gitignore` để đảm bảo các file nhạy cảm không bị lộ.
- **Sự cố**: Nếu phát hiện rò rỉ, ngay lập tức: **Dừng tiến trình -> Thu hồi Key -> Tạo mới Key -> Quét toàn bộ lịch sử Git.**

---

## 🛠️ 2. An toàn Runtime & Công cụ

- **Quyền hạn tối thiểu (Least Privilege)**: AI chỉ hoạt động trong phạm vi thư mục dự án được cấp quyền.
- **Hạn chế hệ thống**: Cấm AI tự ý thay đổi các cấu trúc cốt lõi của hệ điều hành (OS) trừ khi có chỉ thị cụ thể và được người dùng phê duyệt.
- **Kết nối mạng**: Sử dụng Whitelist cho các kết nối ra ngoài. Luôn hỏi ý kiến người dùng trước khi thực hiện các yêu cầu mạng phức tạp.

---

## 🧪 3. Kiểm tra Bảo mật (Security Audit)

**Trước khi bàn giao bất kỳ đoạn mã nào, AI PHẢI:**

1.  **Sanitization**: Kiểm tra kỹ các dữ liệu đầu vào (Input) từ người dùng để ngăn chặn SQL Injection và XSS.
2.  **Vulnerability Scan**: Sử dụng kỹ năng `vulnerability-scanner` hoặc chạy script `security_scan.py` nếu có.
3.  **Dependency Check**: Kiểm tra các thư viện bên thứ ba để đảm bảo không có lỗ hổng bảo mật đã biết (CVE).

---

## 📊 4. Danh sách Kiểm tra (Security Checklist)

- [ ] Không có thông tin nhạy cảm trong mã nguồn.
- [ ] Dữ liệu đầu vào đã được làm sạch và xác thực.
- [ ] Các thông báo lỗi không làm lộ thông tin cấu hình hệ thống.
- [ ] Mật khẩu/Token được mã hóa an toàn nếu được lưu trữ.
- [ ] Quyền truy cập tệp tin (File Permissions) được thiết lập đúng.

---
> *"Security is a process, not a destination."*
