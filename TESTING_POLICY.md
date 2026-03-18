# 🧪 TESTING POLICY (Chính sách Kiểm thử)

Chất lượng mã nguồn được đảm bảo thông qua quy trình kiểm thử tự động nghiêm ngặt. **Zero-Bug Tolerance** là mục tiêu cao nhất.

---

## 📐 1. THE TESTING PYRAMID

1.  **Unit Tests (Đáy)**: Số lượng lớn nhất, kiểm tra từng hàm/component riêng lẻ. Sử dụng **Vitest** (Node.js) hoặc **Pytest** (Python).
2.  **Integration Tests (Giữa)**: Kiểm tra sự tương tác giữa các module (ví dụ: API call đến Database).
3.  **End-to-End (E2E) Tests (Đỉnh)**: Kiểm tra toàn bộ luồng người dùng thực tế trên trình duyệt. Sử dụng **Playwright**.

---

## 🛠️ 2. TESTING TOOLS & STACK

- **Core Engine**: Vitest (Tốc độ cao, tương thích Vite/Next.js).
- **Browser Automation**: Playwright (Hỗ trợ đa trình duyệt, chụp ảnh/video test).
- **Component Testing**: Testing Library (@testing-library/react).
- **Mocking**: MSW (Mock Service Worker) cho việc giả lập API APIs.

---

## 📜 3. MANDATORY PROCEDURES

- **Test-First (TDD)**: Khuyến khích viết test trước khi code cho các logic nghiệp vụ quan trọng.
- **Failure Analysis**: Mọi test fail PHẢI được phân tích nguyên nhân gốc rễ và sửa đổi trước khi merge.
- **Regression Testing**: Mọi bug mới được phát hiện phải có một bản test đi kèm để đảm bảo nó không xuất hiện lại trong tương lai.
- **Evidence Reporting**: Logs kết quả test PHẢI được đính kèm vào `walkthrough.md`.

---

## 📊 4. COVERAGE GOALS

- **Logic nghiệp vụ (Business Logic)**: Đảm bảo độ bao phủ > 80%.
- **Các thành phần giao diện (UI Components)**: Tập trung vào các trạng thái quan trọng (Error, Loading, Success).
- **API Endpoints**: 100% các endpoint chính phải được kiểm tra (Success & Error cases).

---

> **"If it's not tested, it's broken."** — Không có bằng chứng kiểm thử đồng nghĩa với việc mã nguồn chưa sẵn sàng.
