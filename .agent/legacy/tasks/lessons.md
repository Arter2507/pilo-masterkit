# 💡 Lessons Learned / Nhật ký Học tập

> **Dự án**: Pilo Masterkit
> **Vai trò**: Lưu trữ tri thức, quyết định quan trọng và bài học rút ra giữa các phiên làm việc.

---

## 📅 [2026-03-29] - Khởi tạo Pilo Masterkit (Refactor v1.0.0)

### 🎯 Mục tiêu
- **Thay đổi thương hiệu**: Đổi tên từ `heyai-ruleset` sang `pilo-masterkit` để chuyên nghiệp hơn.
- **Mô-đun hóa cực hạn**: Áp dụng cấu trúc `.agent/` chuẩn (Agents, Skills, Workflows, Rules, Scripts).
- **Hợp nhất tri thức**: Tích hợp các quy tắc tinh hoa từ Antigravity, UI/UX Pro và Claude ECC.

### ✅ Quyết định Cốt lõi
- **Chỉ định Nhân dạng**: `PILO_MASTER.md` trở thành nhân dạng trung tâm điều phối.
- **Quy tắc Ưu tiên**: Thiết lập `CORE_RULES.md` (P0) làm hiến chương bất biến (PDCA, Socratic Gate).
- **Copy-Paste Thông minh**: Tận dụng trực tiếp các bộ kỹ năng (Skills) và kịch bản (Scripts) chuẩn của thế giới thay vì tự tạo lại.

### 💡 Bài học kinh nghiệm
- **Markdown Linting**: Sử dụng cách tiếp cận "Clean Rewrite" (dùng `write_to_file`) cho các file rule quan trọng để đảm bảo tính nhất quán cao nhất.
- **Tên thư mục ẩn**: Việc sử dụng `.agent/` giúp AI dễ dàng nhận diện và tự động nạp tri thức mà không cần người dùng chỉ định thủ công.

### 🚀 Nhiệm vụ Chờ thực hiện (Pending)
- Cần chạy hậu kiểm tất cả các kỹ năng vừa copy để đảm bảo đường dẫn tài sản (`assets/`) và tham chiếu chéo (`references/`) không bị hỏng.
- Nâng cấp `SYSTEM_DESIGN.md` theo mô hình "Master + Overrides" của UI/UX Pro.

---

## 📅 [2026-03-18] - Standardizing AI Identity & Operations (Từ bộ tài liệu cũ)

### ✅ Quyết định quan trọng
- **Standardized Navigation**: Di chuyển các file lẻ tẻ vào `documentation/` (tại thời điểm đó).
- **Identity Enforcement**: Hợp nhất danh tính và triết lý vận hành vào `IDENTITY_SOUL.md`.

### 💡 Bài học kinh nghiệm
- Việc sử dụng `multi_replace_file_content` đôi khi gây ra sự trùng lặp nếu phạm vi không chuẩn.

---
> *"Memory is the bridge between instructions and execution."*
