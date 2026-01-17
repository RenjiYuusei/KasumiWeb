# Kasumi - Reset Giới Hạn

Giao diện web hiện đại cho hệ thống reset giới hạn của Kasumi bot, được xây dựng bằng React và Vite.

## Tính năng

- **Giao diện hiện đại:** Sử dụng Glassmorphism, hiệu ứng particles, và màu sắc theo chủ đề Kasumi.
- **Tương tác mượt mà:** Animations với Framer Motion.
- **Xác minh tự động:** Tự động lấy mã code từ URL (`/verify?code=...`) và copy vào clipboard.

## Cài đặt và Chạy Development

1.  Cài đặt dependencies:
    ```bash
    npm install
    ```

2.  Chạy server development:
    ```bash
    npm run dev
    ```

## Build cho Production

Dự án này là một Single Page Application (SPA). Để deploy lên server (như Nginx, Vercel, Netlify):

1.  Build dự án:
    ```bash
    npm run build
    ```
    Kết quả sẽ nằm trong thư mục `dist/`.

2.  Deploy thư mục `dist/` lên web server của bạn.
    *Lưu ý:* Cấu hình web server để rewrite tất cả các request về `index.html` để React Router hoạt động chính xác (SPA fallback).

## Cấu trúc thư mục

- `src/components`: Các component tái sử dụng (Card, Background, etc.).
- `src/pages`: Các trang chính (Home, Verify).
- `src/constants`: Cấu hình màu sắc, particles.
