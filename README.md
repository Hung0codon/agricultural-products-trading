Các bước thiết lập:

1. Tải source code & Cài đặt thư viện

Bash
git clone <link-repo-github-cua-ban>
cd agricultural-products-trading
npm install
2. Cấu hình biến môi trường

Tạo một file tên là .env tại thư mục gốc của dự án (ngang hàng với package.json).

Liên hệ với người quản trị dự án (hoặc team member) để lấy nội dung bảo mật dán vào file này.

3. Khởi chạy Database ngầm bằng Docker

Bash
docker-compose up -d
(💡 Mẹo: Có thể xem giao diện quản lý Database tại http://localhost:8080)

4. Đồng bộ cấu trúc Database (50+ bảng)

Bash
npx prisma db push
npx prisma generate
5. Khởi chạy dự án

Bash
npm run dev
🎉 Hoàn tất! Truy cập dự án tại: http://localhost:3000

Lưu ý thao tác hàng ngày: > * Mở máy lên code: Bật Docker -> gõ docker-compose start -> gõ npm run dev.

Code xong tắt máy: Gõ docker-compose stop.
