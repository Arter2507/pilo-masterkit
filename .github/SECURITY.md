# Chính sách bảo mật Pilo Masterkit / Security Policy 🛡️

## Các phiên bản được hỗ trợ / Supported Versions

Chúng tôi chỉ cung cấp các bản cập nhật bảo mật cho phiên bản ổn định mới nhất của **Pilo Masterkit**.
(We only provide security updates for the latest stable version of **Pilo Masterkit**.)

| Phiên bản / Version | Hỗ trợ / Supported |
| ------------------- | ------------------ |
| 2.x                 | :white_check_mark: |
| < 2.0               | :x:                |

## Báo cáo lỗ hổng / Reporting a Vulnerability

**KHÔNG mở issue công khai.** Nếu bạn tìm thấy lỗ hổng bảo mật, vui lòng báo cáo riêng tư để đảm bảo an toàn cho người dùng của chúng tôi.
(Do NOT open a public issue. If you find a security vulnerability, please report it privately to ensure the safety of our users.)

Vui lòng gửi báo cáo của bạn tới: **qtuong.257@gmail.com** với các thông tin sau:
(Please send your report to **qtuong.257@gmail.com** with the following information:)
- Mô tả về lỗ hổng. (Description of the vulnerability.)
- Các bước để tái hiện. (Steps to reproduce.)
- Tác động tiềm tàng. (Potential impact.)

Chúng tôi sẽ xác nhận báo cáo của bạn trong vòng 48 giờ và cung cấp lộ trình khắc phục.
(We will acknowledge your report within 48 hours and provide a timeline for a fix.)

## Quy tắc Ngăn chặn / Prevention Rules
Là một dự án AI-Native và mã nguồn mở, chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt:
(As an AI-Native Open Source project, we apply strict security measures:)
- **Manual Review**: Mọi Pull Request đều được xem xét thủ công để tìm mã hoặc logic đáng ngờ (backdoor, lfi-to-rce, v.v.).
  (All Pull Requests are manually reviewed for suspicious code or logic.)
- **Dependency Guard**: Giảm thiểu các dependency bên ngoài để kiểm soát rủi ro chuỗi cung ứng.
  (Minimize external dependencies to reduce supply-chain risks.)
- **Secret Scanning**: Tự động quét bí mật (secret scanning) trên mỗi commit và PR.
  (Automated secret scanning on every commit and PR.)

---
*© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul.*
