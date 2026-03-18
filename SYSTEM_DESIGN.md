# 🏗️ SYSTEM DESIGN & AESTHETICS

Tài liệu này quy định kiến trúc kỹ thuật, tiêu chuẩn thiết kế và các công cụ mặc định cho dự án.

---

## 🏛️ 1. ARCHITECTURE & TECH STACK

Dự án ưu tiên các công nghệ hiện đại, có khả năng mở rộng và hiệu năng cao.

- **Frontend**: React 19, Next.js 15, Tailwind CSS v4.
- **Backend**: Node.js (TypeScript), Python (FastAPI) hoặc Go tùy thuộc vào yêu cầu hiệu năng.
- **Database**: PostgreSQL (Prisma/Drizzle), Redis cho caching.
- **AI Integration**: Hệ thống hỗ trợ đa Model (GPT-4, Claude 3.5/3.7, Gemini 2.0) thông qua API Gateway.

---

## 🎨 2. DESIGN SYSTEM (Aesthetics)

Dự án theo đuổi phong cách **Hiện đại, Đơn giản, Tối giản (Minimalist)**.

### 🌓 Color Palettes

| Chế độ (Mode) | Tông màu chủ đạo                | Cảm hứng (Theme)          |
| :------------ | :------------------------------ | :------------------------ |
| **Lightmode** | Vani/Sữa, Trắng nhẹ, Cam pastel | Thanh lịch, Sáng sủa      |
| **Darkmode**  | Hồng và Xanh pastel             | Aesthetic, Cosmic, Galaxy |

### 📐 Typography & Layout

- **Font**: Montserrat, Inter hoặc Roboto (Ưu tiên Sans-serif hiện đại).
- **Layout**: Bento Grid, Glassmorphism (đối với Darkmode).

---

## 🛠️ 3. DEFAULT KITS & SKILLS

Các bộ công cụ sau được thiết lập làm tiêu chuẩn mặc định cho dự án:

1.  **UI/UX Pro Max**: [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) - Thư viện thiết kế và tương tác cao cấp.
2.  **AntiGravity Kit**: [antigravity-kit](https://github.com/vudovn/antigravity-kit) - Bộ tiện ích tối ưu hóa vận hành.
3.  **AntiGravity IDE**: [antigravity-ide](https://github.com/Dokhacgiakhoa/antigravity-ide) - Cấu hình môi trường phát triển chuyên sâu.
4.  **Global Skills**: Tích hợp danh mục kỹ thuật từ [Microsoft Skills](https://github.com/microsoft/skills), [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills).

---

## 📏 4. PROJECT RULES

- **PDCA Cycle**: Lập kế hoạch -> Thực hiện -> Kiểm tra -> Tối ưu.
- **Socratic Gate**: Luôn đặt câu hỏi để làm rõ yêu cầu trước khi thực thi.
- **Zero-Bug Tolerance**: Mọi code phải được kiểm thử và xác minh bằng bằng chứng thực tế.

---

> **"Simplicity is the ultimate sophistication."** — Thiết kế tối giản, hiệu năng tối đa.
