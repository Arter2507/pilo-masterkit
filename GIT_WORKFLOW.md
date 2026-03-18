# 🌿 GIT WORKFLOW & COLLABORATION

Tài liệu này quy định quy trình làm việc với Git, cách đặt tên nhánh và định dạng Commit message để đảm bảo lịch sử dự án minh bạch.

---

## 🌿 1. BRANCHING STRATEGY

Dự án sử dụng mô hình **Feature Branching**.

- `main`: Nhánh chính, chứa mã nguồn ổn định nhất (Production-ready).
- `dev`: Nhánh tích hợp các tính năng mới trước khi merge vào main.
- `feature/[name]`: Phát triển tính năng mới (ví dụ: `feature/auth-system`).
- `bugfix/[name]`: Sửa lỗi (ví dụ: `bugfix/login-leak`).
- `hotfix/[name]`: Sửa lỗi khẩn cấp trực tiếp cho Production.

---

## 💬 2. COMMIT MESSAGE FORMAT

Sử dụng tiêu chuẩn **Conventional Commits**.

**Cấu trúc:** `<type>(<scope>): <description>`

- **feat**: Một tính năng mới.
- **fix**: Sửa một lỗi.
- **docs**: Thay đổi về tài liệu.
- **style**: Thay đổi về format (không ảnh hưởng logic).
- **refactor**: Tái cấu trúc mã nguồn (không thêm tính năng/sửa lỗi).
- **perf**: Cải thiện hiệu năng.
- **test**: Thêm hoặc sửa các đoạn mã kiểm thử.
- **chore**: Các thay đổi về build process hoặc công cụ phụ trợ.

*Ví dụ:* `feat(auth): integrate google oauth2 login`

---

## 🚀 3. PULL REQUEST (PR) PROTOCOL

Mọi PR trước khi merge PHẢI đảm bảo:

1.  **Planning Reference**: Có liên kết đến `implementation_plan.md` liên quan.
2.  **Lint & Build**: Vượt qua tất cả các bước kiểm tra cú pháp và build hệ thống.
3.  **Test Evidence**: Có bằng chứng (Logs/Screenshots) chứng minh tính năng hoạt động.
4.  **Walkthrough**: Có file `walkthrough.md` mô tả các thay đổi chính.
5.  **Review**: Ít nhất một AI Orchestrator hoặc Người dùng phê duyệt.

---

## 🧹 4. REPO HYGIENE

- **Small Commits**: Ưu tiên các commit nhỏ, tập trung vào một thay đổi duy nhất.
- **No Secrets**: Tuyệt đối không commit file `.env` hoặc thông tin nhạy cảm.
- **Git Ignore**: Luôn cập nhật `.gitignore` để loại bỏ các tàn dư của IDE/OS.

---

> **"Clean Git history is as important as clean code."**
