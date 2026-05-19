---
description: Tự động khởi tạo cấu trúc thư mục tài liệu cho dự án Pilo Masterkit.
---

# Workflow: Khởi tạo Thư mục Tài liệu (Documentation Init)

Quy trình này tự động tạo các thư mục cần thiết để quản lý tài liệu, báo cáo và nhiệm vụ theo chuẩn Pilo Masterkit.

## Các bước thực hiện:

1. **Kiểm tra và Tạo Thư mục**:
   Tạo thư mục `docs/` ở thư mục gốc của dự án (nếu chưa có), sau đó tạo 8 thư mục con bên trong `docs/`:
   - `docs/lessons/`: Lưu trữ bài học kinh nghiệm.
   - `docs/reports/`: Lưu trữ báo cáo tiến độ và audit.
   - `docs/plans/`: Lưu trữ kế hoạch triển khai.
   - `docs/status/`: Lưu trữ trạng thái dự án.
   - `docs/tasks/`: Lưu trữ danh sách nhiệm vụ chi tiết.
   - `docs/logs/`: Lưu trữ nhật ký hoạt động của Agent.
   - `docs/walkthroughs/`: Lưu trữ hướng dẫn thực hiện.
   - `docs/producs/`: Lưu trữ đặc tả sản phẩm (specs, PRD).

2. **Khởi tạo File mẫu (Tùy chọn)**:
   Trong mỗi thư mục, tạo một file `README.md` ngắn gọn mô tả mục đích của thư mục đó.

## Lệnh thực thi (Dành cho Agent):

// turbo
```pwsh
$docsDir = "docs"
if (-not (Test-Path $docsDir)) {
    New-Item -ItemType Directory -Path $docsDir -Force
    Write-Host "Created base directory: $docsDir"
}

$dirs = @("lessons", "reports", "plans", "status", "tasks", "logs", "walkthroughs", "producs")
foreach ($dir in $dirs) {
    $targetPath = Join-Path $docsDir $dir
    if (-not (Test-Path $targetPath)) {
        New-Item -ItemType Directory -Path $targetPath -Force
        Write-Host "Created directory: $targetPath"
    }
}
```

## Báo cáo kết quả:
Sau khi hoàn thành, báo cáo danh sách các thư mục đã được khởi tạo thành công.
