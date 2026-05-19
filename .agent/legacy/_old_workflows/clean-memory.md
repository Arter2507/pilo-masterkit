---
description: Chiến lược Quản trị Tri thức & Dọn dẹp Ngữ cảnh toàn diện cho AI Agent.
---

# 🧠 Knowledge Distillation & Memory Hygiene Protocol

Quy mô dự án càng lớn, AI càng dễ bị "nhiễu" bởi các log cũ và các bước thực thi rườm rà. Workflow này không chỉ xóa dữ liệu, mà là quá trình **TỔNG HỢP** tri thức để giữ cho AI luôn thực tế và nhạy bén.

## 1. Giai đoạn Quét tri thức (Knowledge Sweep)
Agent phải rà soát toàn bộ các nguồn dữ liệu đang "phình to":
- **Tasks**: Toàn bộ file trong `.agent/tasks/` (Tìm các task đã `DONE` nhưng chưa được tổng hợp kết quả).
- **Session Memory**: Tệp `session_memory.md` hoặc các tệp ghi chép nháp.
- **Workflow Logs**: Các kết quả thực thi lệnh slash trước đó.

## 2. Giai đoạn Chắt lọc tinh hoa (Synthesis & Extraction)
Thay vì xóa bỏ, Agent phải **TRÍCH XUẤT** các giá trị vĩnh viễn:
- **ADRs**: Các quyết định kiến trúc quan trọng phải được chuyển vào `PROJECT_MAP.md`.
- **Instincts**: Các quy tắc làm việc mới "học" được từ lỗi sai phải được chuyển vào `PILO_MASTER.md` hoặc `.agent/rules/`.
- **State Compression**: Tóm lược 10 bước làm việc thành 1 dòng trạng thái duy nhất ("Ví dụ: Đã hoàn thành refactor module X, cấu trúc hiện tại là Y").

## 3. Giai đoạn Thực thi Làm sạch (Atomic Pruning)
Sau khi đã cất giữ tinh hoa vào các file "não bộ" (`PROJECT_MAP.md`, `PILO_MASTER.md`), Agent mới được phép:
- Lưu trữ (Archive) hoặc xóa bỏ các task cũ đã hoàn thành.
- Làm sạch các log thừa trong terminal hoặc file tạm.
- Cắt tỉa các tệp memory để chỉ giữ lại **Ngữ cảnh hiện tại (Current Status)** và **Mục tiêu tiếp theo (Next Goal)**.

## 4. Xác nhận & Báo cáo
Agent báo cáo lại:
- `Synthesized`: Những tri thức mới nào đã được đưa vào bản đồ dự án?
- `Pruned`: Đã xóa bỏ bao nhiêu KB/Dòng dữ liệu dư thừa?
- `Ready`: Xác nhận ngữ cảnh hiện tại đã "sạch" và tập trung vào mục tiêu mới.

---
> **Triết lý**: Đừng chỉ xóa đi quá khứ, hãy biến nó thành kinh nghiệm để tối ưu tương lai.
