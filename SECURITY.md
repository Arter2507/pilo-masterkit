# 🛡️ SECURITY STANDARDS (Tiêu chuẩn Bảo mật)

Tài liệu này quy định các quy tắc bảo mật cốt lõi cho hệ thống Trợ lý AI, đảm bảo an toàn vận hành và bảo vệ dữ liệu người dùng.

---

## 🔐 1. ACCESS CONTROL (Kiểm soát Truy cập)

### 👤 Assistant Model (One-User Policy)

- **Scope First**: Hệ thống được thiết kế cho mô hình trợ lý cá nhân (tiếp cận theo ranh giới tin cậy của một người dùng duy nhất).
- **Isolation**: Không sử dụng chung một môi trường làm việc cho nhiều người dùng không tin tưởng lẫn nhau. Nếu cần, hãy tách biệt bằng VPS/Host hoặc tài khoản người dùng OS riêng.

### ✉️ Messaging Policy

- **Access Gating**: Mặc định yêu cầu xác thực hoặc ghép nối (pairing) trước khi phản hồi. Người dùng mới/lạ phải được phê duyệt thủ công.
- **Group Gating**: Trong môi trường trò chuyện nhóm, AI chỉ phản hồi khi được gọi trực tiếp (ví dụ qua `@mention`). Cấm tự ý phản hồi mọi tin nhắn nếu không có yêu cầu cụ thể.
- **Allowlists Only**: Ưu tiên sử dụng danh sách cho phép (allowlist) cho các định danh được phép tương tác.

---

## 🛠️ 2. TOOL & RUNTIME SAFETY (An toàn Công cụ)

### 🚫 Restricted Tools

- **System Level**: Cấm AI tự ý thay đổi cấu trúc cốt lõi của hệ thống điều hành, quản lý tiến trình hệ thống hoặc tạo các phiên làm việc không kiểm soát.
- **Write Access**: Hạn chế quyền ghi (`rw`) trừ khi thực hiện các tác vụ lập trình cụ thể đã được phê duyệt. Ưu tiên quyền chỉ đọc (Read-Only) đối với các tài nguyên nhạy cảm.

### 🐳 Sandboxing (Khuyến nghị)

- **Environment Isolation**: Mọi công cụ thực thi lệnh nên được chạy trong môi trường cô lập (Sandbox/Container) để bảo vệ hệ thống máy chủ (host system).
- **Path Gating**: Giới hạn phạm vi hoạt động của AI trong thư mục dự án được chỉ định, cấm truy cập trái phép vào thư mục cá nhân hoặc thư mục gốc của hệ thống.

---

## 🌐 3. NETWORK SECURITY (An toàn Mạng)

- **Loopback Default**: Các cổng kết nối của hệ thống AI chỉ nên được mở trên giao diện nội bộ (localhost).
- **No Public Bind**: Cấm mở cổng công khai (Public IP) mà không có tầng xác thực mạnh và tường lửa (Firewall) bảo vệ.
- **Secure Tunneling**: Khuyến khích sử dụng các giải pháp mạng riêng ảo (VPN) hoặc Tunnel bảo mật nếu cần truy cập từ xa.

---

## 🔑 4. SECRETS & DATA PRIVACY (Bảo mật Dữ liệu)

### 🤐 No Hardcoding

- **Strict Prohibition**: Cấm tuyệt đối việc ghi trực tiếp các khóa API, mật khẩu hoặc mã thông báo (Tokens) vào mã nguồn hoặc hệ thống quản lý phiên bản.
- **Secret Management**: Sử dụng các file cấu hình môi trường (.env) hoặc hệ thống quản lý bí mật chuyên dụng của nền tảng.

### 🧹 Log Redaction

- **Sensitive Data Scrubbing**: Tự động lọc và xóa các thông tin nhạy cảm (Keys, Passwords) khỏi nhật ký vận hành (Logs).
- **Retention Policy**: Định kỳ dọn dẹp nhật ký và dữ liệu phiên làm việc cũ để giảm thiểu rủi ro rò rỉ.

---

## 🚀 5. INCIDENT RESPONSE (Quy trình Sự cố)

Khi phát hiện dấu hiệu bị xâm nhập hoặc lộ thông tin bí mật:

1. **Contain**: Dừng ngay lập tức các tiến trình đang chạy, ngắt kết nối mạng nếu cần thiết.
2. **Rotate**: Thu hồi và tạo mới TẤT CẢ các khóa API, mã thông báo và mật khẩu liên quan.
3. **Audit**: Kiểm tra nhật ký hệ thống và lịch sử phiên làm việc trong các thư mục lưu trữ tạm thời để xác định phạm vi ảnh hưởng.
4. **Report**: Lập báo cáo chi tiết về sự cố gửi cho người quản trị.

---

## 🔍 6. SECURITY AUDIT CHECKLIST

AI và Người dùng nên định kỳ thực hiện kiểm tra bảo mật thông qua các công cụ sẵn có của nền tảng.

### Tiêu chí kiểm tra nhanh (Quick Audit)

- [ ] Các kênh giao tiếp (DMs/Groups) đã được khóa chặt (xác thực/mention)?
- [ ] Cổng kết nối có đang lộ ra Internet công cộng không?
- [ ] Quyền truy cập các file cấu hình nhạy cảm có được giới hạn tối thiểu (ReadOnly/Owner only) không?
- [ ] Có công cụ nguy hiểm nào chưa được đưa vào danh sách hạn chế không?

---

> **"Security is not a product, but a process."** — Luôn ưu tiên an toàn hệ thống trước mọi tiện ích công nghệ.
