# 💻 CODE STANDARDS (Quy chuẩn Mã nguồn)

## 🌐 Language / Ngôn ngữ
- `VI`: Mô tả quy chuẩn bằng tiếng Việt.
- `EN`: AI keeps English-equivalent interpretation to implement code consistently.
- Trigger language behavior: on `Hey, AI`, AI responds in the user's primary language.

Tài liệu này quy định các tiêu chuẩn viết mã, cấu trúc thư mục và các mẫu thiết kế (Patterns) bắt buộc cho dự án.

---

## 🏗️ 1. PROJECT STRUCTURE (Cấu trúc Thư mục)

Dự án sử dụng cơ chế **Feature-based Architecture** (Kiến trúc dựa trên tính năng).

### Frontend (Next.js 15 App Router)
- `src/app/`: Định nghĩa Routes (Pages, Layouts).
- `src/components/ui/`: Các thành phần giao diện cơ bản (shadcn/ui).
- `src/components/features/`: Các thành phần phức tạp gắn liền với logic nghiệp vụ.
- `src/hooks/`: Các custom React Hooks.
- `src/lib/`: Các thư viện tiện ích và cấu hình (Prisma, Cloudinary, v.v.).

### Backend (FastAPI / Node.js)
- `api/routes/`: Định nghĩa các Endpoints.
- `api/controllers/`: Xử lý logic nghiệp vụ chính.
- `api/models/`: Định nghĩa cấu trúc dữ liệu và Schema.
- `api/services/`: Các dịch vụ tích hợp bên thứ ba.

---

## 📝 2. NAMING CONVENTIONS (Quy tắc đặt tên)

- **Files & Folders**: Sử dụng `kebab-case` (ví dụ: `user-profile.tsx`, `api-gateway/`).
- **Components**: Sử dụng `PascalCase` (ví dụ: `UserProfileCard`).
- **Variables & Functions**: Sử dụng `camelCase` (ví dụ: `fetchUserData`).
- **Constants**: Sử dụng `UPPER_SNAKE_CASE` (ví dụ: `MAX_RETRY_LIMIT`).
- **Database Tables**: Sử dụng `snake_case` (ví dụ: `user_accounts`).

---

## ⚡ 3. DEVELOPMENT PATTERNS

### React 19 & Next.js 15
- **Server Components (RSC)**: Luôn ưu tiên Server Components làm mặc định. Chỉ sử dụng `'use client'` khi thực sự cần tương tác hoặc Hooks phía client.
- **Data Fetching**: Sử dụng Server Actions cho các thao tác thay đổi dữ liệu (Mutations).
- **Zustand/React Query**: Sử dụng cho quản lý State tập trung và caching dữ liệu.

### Backend Principles
- **Stateless API**: Mọi API phải là stateless.
- **Validation**: Luôn sử dụng `Zod` (Node.js) hoặc `Pydantic` (FastAPI) để xác thực dữ liệu đầu vào.
- **Error Handling**: Sử dụng mã trạng thái HTTP chuẩn (200, 201, 400, 401, 403, 404, 500).

---

## 🧹 4. CODE QUALITY

- **No Over-engineering**: Ưu tiên giải pháp đơn giản và dễ hiểu.
- **DRY (Don't Repeat Yourself)**: Tái sử dụng code thông qua Components/Utilities.
- **Comments**: Chỉ viết comment cho các logic phức tạp hoặc các quyết định "không hiển nhiên". Prefer self-documenting code.

---

> **"Code is read more often than it is written."** — Viết code cho người (và AI) sau này dễ đọc.
