# 📜 MANDATORY AI PROTOCOLS (Giao thức AI Bắt buộc)

## 🌐 Language / Ngôn ngữ
- `VI`: Nội dung vận hành gốc.
- `EN`: English equivalent interpretation is mandatory for all protocol decisions.
- Trigger language mode: after `Hey, AI`, AI responds in the user's primary language (`choose language` when unclear).

Tài liệu này định nghĩa các quy tắc vận hành bất biến mà mọi AI Agent PHẢI tuân thủ tuyệt đối khi làm việc trong hệ thống này. Xem chi tiết quy trình cụ thể tại [WORKFLOWS.md](WORKFLOWS.md).

---

## 🌐 1. LANGUAGE & COMMUNICATION (Ngôn ngữ & Giao tiếp)

Để đảm bảo tính nhất quán và hiệu quả, AI phải tuân thủ quy tắc ngôn ngữ sau:

- **Giao tiếp & Giải thích**: Sử dụng **ngôn ngữ chính của người dùng** hoặc ngôn ngữ mà người dùng lựa chọn cho mọi cuộc hội thoại, báo cáo và giải thích.
- **Tài liệu dự án**: Các file tài liệu (`.md`) phát sinh nên tuân theo ngôn ngữ ưu tiên của người dùng hoặc ngôn ngữ chính của dự án (ưu tiên tiếng Anh).
- **Kỹ thuật & Mã nguồn**:
  - Tên biến, hàm, lớp, file: **TIẾNG ANH** (camelCase hoặc snake_case).
  - Chú thích (Comments) trong mã nguồn: **TIẾNG ANH**.

---

## 🔄 2. PDCA CYCLE (Vòng đời Quản trị)

Mọi tác vụ lớn (Tính năng/Tái cấu trúc/Sửa lỗi) phải tuân thủ nghiêm ngặt chu trình 4 bước:

1. **PLAN (Lập kế hoạch)**: Phân tích yêu cầu, liệt kê file bị ảnh hưởng và đề xuất giải pháp kỹ thuật rõ ràng. Luôn lập kế hoạch trước khi thực hiện các tác vụ phức tạp (trên 3 bước).
2. **DO (Thực thi)**: Thực hiện công việc sau khi kế hoạch được phê duyệt. Tuân thủ tiêu chuẩn mã nguồn sạch (Clean Code) và hệ thống thiết kế.
3. **CHECK (Kiểm tra)**: Chạy kiểm thử, kiểm tra lỗi cú pháp (Lint) và xác minh kết quả. **Bằng chứng trước khẳng định**: Không báo cáo hoàn thành nếu chưa có logs hoặc kết quả test chứng minh.
4. **ACT (Tối ưu)**: Khắc phục lỗi phát sinh, cập nhật tài liệu và đóng phiên làm việc. Nếu gặp vấn đề bất ngờ, hãy DỪNG LẠI và lập lại kế hoạch (Re-plan).

---

## 📂 3. ORGANIZATION & LIFECYCLE (Tổ chức & Vòng đời)

- **Vị trí Artifacts**: Tuyệt đối không để các file tạm, log, hoặc plan bừa bãi tại thư mục gốc. Sử dụng đúng các thư mục chức năng được định nghĩa trong [MAP.md](MAP.md).
- **Technical Excellence**: Ngoài các giao thức vận hành, AI PHẢI tuân thủ các tiêu chuẩn kỹ thuật cụ thể tại:
  - [CODE_STANDARDS.md](CODE_STANDARDS.md) (Mã nguồn).
  - [GIT_WORKFLOW.md](GIT_WORKFLOW.md) (Phiên bản & Cộng tác).
  - [TESTING_POLICY.md](TESTING_POLICY.md) (Chống lỗi - Zero-Bug).
- **Context Hygiene**: Luôn đọc `MAP.md` và `IDENTITY_SOUL.md` khi bắt đầu một phiên làm việc mới.

---

## 🛑 4. SOCRATIC GATE (Cổng Kiểm soát)

**Luật Bất Biến**: Không bao giờ thực hiện công việc ngay khi nhận yêu cầu mơ hồ hoặc có rủi ro cao. AI phải chủ động:

- Làm rõ cấu trúc Dữ liệu đầu vào/đầu ra. -> Nếu chưa rõ: **HỎI**.
- Đánh giá rủi ro ảnh hưởng đến hệ thống hiện tại. -> Nếu có rủi ro: **CẢNH BÁO**.
- **No Laziness**: Tìm kiếm nguyên nhân gốc rễ (Root Cause) của vấn đề thay vì chỉ sửa chữa bề nổi.
- Không chạy 1 tác vụ thất bại (FAIL) quá 3 lần, nếu vượt quá 3 lần phải dừng lại ngay lập tức và thông báo cho người dụng. Mỗi tác vụ chỉ được chạy tối đa 10 phút/tác vụ, nếu phán đoán rằng đó là tác vụ lớn cần nhiều thời gian chạy hơn, hãy tính toán thời gian cần thiết và chờ xác nhận từ người đùng để tránh lãng phí tài nguyên.
- Luôn hỏi trước khi hành động, luôn hỏi trước khi xóa file, luôn hỏi trước các yêu cầu kết nối mạng/network, luôn phải có sự xác nhận của người dùng trước khi thực hiện bất cứ yêu cầu nào.

---

## 🛡️ 5. SECURITY & PRIVACY (An toàn & Riêng tư)

- **Zero Secrets**: Cấm tuyệt đối lưu trữ API Keys, mật khẩu hoặc mã thông báo vào hệ thống quản lý phiên bản (Git). Kiểm tra `.gitignore` trước khi thực hiện các thao tác lưu trữ.
- **Scope Integrity**: Chỉ thao tác trong phạm vi thư mục dự án được cấp quyền.
- **Sanitization**: Kiểm tra kỹ các đầu vào (Input) và sử dụng danh sách cho phép (Whitelist) cho các kết nối mạng.

---

## 🧹 6. TECHNICAL STANDARDS (Tiêu chuẩn Kỹ thuật)

- **Simplicity First**: Luôn ưu tiên giải pháp đơn giản và thanh lịch nhất. Tránh các bản vá tạm thời gây nợ kỹ thuật.
- **Autonomous Fixing**: Chủ động phát hiện và sửa lỗi dựa trên log. Mọi lỗi được sửa phải được ghi nhận vào hệ thống theo dõi lỗi (`ERRORS.md`).
- **Documentation Sync**: Mọi thay đổi về kiến trúc hoặc file mới phải được cập nhật ngay lập tức vào `MAP.md`.
- **Model Selection by Task**: AI phải tự chọn model phù hợp với từng loại nhiệm vụ để tối ưu hiệu năng, chi phí và tài nguyên. Quy tắc mặc định:
  - **Lập kế hoạch, phân tích, tóm tắt, rà soát nhanh**: ưu tiên các model nhẹ, nhanh, tiết kiệm token như `flash` hoặc model tương đương.
  - **Coding, refactor, debug sâu, kiến trúc phức tạp**: ưu tiên các model mạnh hơn như `pro` hoặc model tương đương.
  - **Tác vụ lặp lại, khối lượng lớn, hoặc dùng model free**: ưu tiên model tiết kiệm tài nguyên nhất nhưng vẫn đủ chất lượng cho nhiệm vụ.
  - **Khi yêu cầu có rủi ro cao hoặc độ bất định lớn**: chọn model có năng lực suy luận tốt hơn thay vì tối ưu tốc độ.

---

> **"A protocol is only as strong as its enforcement."** — Sự nhất quán và kỷ luật là nền tảng của một hệ thống AI chuyên nghiệp.
