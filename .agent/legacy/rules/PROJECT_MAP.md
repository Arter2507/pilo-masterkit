# 🗺️ Project Map / Bản đồ Điều hướng Dự án

> **Dự án**: Pilo Masterkit
> **Vai trò**: Cung cấp cái nhìn tổng quan về cấu trúc hệ thống, quy chuẩn kỹ thuật và triết lý vận hành.

---

## 🏛️ Quản trị Hệ thống (.agent/)

Đây là "não bộ" của dự án, chứa các quy tắc và thực thể AI:

- **[PILO_MASTER.md](../agents/PILO_MASTER.md)**: Nhân dạng chính & Điều phối viên (Senior Architect).
- **[CORE_RULES.md](CORE_RULES.md)**: Giao thức bắt buộc (P0), PDCA, Socratic Gate.
- **[SECURITY_ARMOR.md](SECURITY_ARMOR.md)**: Quy chuẩn bảo mật và quét lỗ hổng.
- **`agents/`**: Danh sách 20+ chuyên gia kỹ thuật (Planner, Debugger, v.v.).
- **`skills/`**: Thư viện 125+ kỹ năng chuyên sâu (UI/UX Pro, React Expert, v.v.).
- **`workflows/`**: Các quy trình tự động hóa kích hoạt bằng Slash Command.

### 🔍 Giao thức Đọc File (Reading Protocol)
> **Selective Reading**: AI PHẢI đọc có chọn lọc các file cần thiết dựa trên yêu cầu của người dùng thay vì quét toàn bộ project. Hãy ưu tiên các sơ đồ kiến trúc và file quy tắc trước khi đi sâu vào mã nguồn.

---

## 💻 Tiêu chuẩn Kỹ thuật (Technical Standards)

Các quy ước bắt buộc cho mã nguồn:

- **[CODE_STANDARDS.md](../../products/CODE_STANDARDS.md)**: Quy tắc đặt tên và cấu trúc file.
- **[SYSTEM_DESIGN.md](../../products/SYSTEM_DESIGN.md)**: Kiến trúc hệ thống và thẩm mỹ (Master + Overrides).
- **[TESTING_POLICY.md](../../products/TESTING_POLICY.md)**: Quy trình TDD và yêu cầu Coverage >80%.
- **[GIT_WORKFLOW.md](../../products/GIT_WORKFLOW.md)**: Conventional Commits và chiến lược nhánh.

---

## 📁 Thư mục Chức năng (Functional Directories)

- **`lessons/`**: Bài học kinh nghiệm và kinh nghiệm tích lũy sau mỗi task.
- **`reports/`**: Báo cáo tiến độ, kết quả audit và hiệu năng.
- **`plans/`**: Kế hoạch triển khai chi tiết cho các tính năng mới.
- **`status/`**: Trạng thái hiện tại của dự án và các module.
- **`tasks/`**: Nhiệm vụ chi tiết (todo, in-progress, done).
- **`logs/`**: Nhật ký hoạt động chi tiết của Agent và hệ thống.
- **`walkthroughs/`**: Hướng dẫn từng bước cho các tính năng phức tạp.
- **`producs/`**: Tài liệu đặc tả sản phẩm (specs, PRD, roadmap).
- **`.agent/scripts/`**: Các kịch bản Master Audit (`checklist.py`, `verify_all.py`).

---

## 🛠️ Trạng thái Hệ thống

| Thành phần | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| **Agent Fleet** | ✅ Sẵn sàng | 20+ Agents đã nạp |
| **Skill Matrix** | ✅ Sẵn sàng | 125+ Skills đã nạp |
| **Security Gate** | ✅ Kích hoạt | Bắt buộc quét trước commit |

---
> *"Orchestrating the technology of the future with discipline and soul."*
