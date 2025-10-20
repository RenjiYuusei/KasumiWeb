# 🌐 Kasumi Web - Trang Reset Giới Hạn

2 file HTML tĩnh để hiển thị hướng dẫn và mã reset cho hệ thống vượt link.

## 📁 Files

```
web/
├── index.html    # Trang chủ - Hướng dẫn vượt link
└── verify.html   # Trang xác nhận - Hiển thị mã reset
```

## 🚀 Deploy (Chọn 1 trong các cách)

### 1️⃣ GitHub Pages (Miễn phí - Khuyến nghị)

**Bước 1:** Tạo repository mới trên GitHub

**Bước 2:** Upload 2 file vào repository:
```bash
git init
git add index.html verify.html
git commit -m "Add Kasumi web pages"
git branch -M main
git remote add origin https://github.com/username/kasumi-web.git
git push -u origin main
```

**Bước 3:** Vào Settings → Pages → Source: **main branch** → Save

**Bước 4:** URL sẽ là: `https://username.github.io/kasumi-web/`

---

### 2️⃣ Vercel (Miễn phí)

**Bước 1:** Vào [vercel.com](https://vercel.com) và đăng nhập

**Bước 2:** Click "New Project" → Upload 2 file HTML

**Bước 3:** Deploy → Nhận URL: `https://your-project.vercel.app/`

---

### 3️⃣ Netlify (Miễn phí)

**Bước 1:** Vào [netlify.com](https://netlify.com) và đăng nhập

**Bước 2:** Drag & drop thư mục `web/` vào Netlify

**Bước 3:** Deploy → Nhận URL: `https://your-site.netlify.app/`

---

### 4️⃣ Cloudflare Pages (Miễn phí)

**Bước 1:** Vào [pages.cloudflare.com](https://pages.cloudflare.com)

**Bước 2:** Create project → Upload 2 file

**Bước 3:** Deploy → Nhận URL: `https://your-project.pages.dev/`

---

### 5️⃣ Bất kỳ Web Hosting nào

Upload 2 file HTML lên bất kỳ web hosting nào hỗ trợ static files.

---

## ⚙️ Cấu hình Bot

Sau khi deploy, cập nhật URL trong bot:

### Cách 1: Sửa file `kasumi.py`

```python
BYPASS_WEB_URL = os.getenv("BYPASS_WEB_URL", "https://your-url.com")
```

### Cách 2: Set environment variable

**Windows:**
```bash
set BYPASS_WEB_URL=https://your-url.com
```

**Linux/Mac:**
```bash
export BYPASS_WEB_URL=https://your-url.com
```

---

## 🔗 Cách Hoạt Động

1. User dùng `/getlink` trong Discord
2. Bot hiển thị dialog cho user chọn service (YeuMoney hoặc Click1s)
3. Bot tạo mã `Kasumi_xxxxx`
4. Bot tạo URL: `https://your-url.com/verify?code=Kasumi_xxxxx` (clean URL)
5. Bot rút gọn URL qua service đã chọn
6. User vượt link rút gọn → Redirect về `verify`
7. Trang `verify` hiển thị mã và auto copy
8. User dùng `/reset` trong Discord để reset giới hạn

**Lưu ý:** URL sử dụng clean URLs (không có `.html`). Hầu hết hosting platforms (Vercel, Netlify, Cloudflare Pages, GitHub Pages) đều tự động hỗ trợ clean URLs.

---

## 📝 Lưu Ý

- ✅ **Chỉ cần 2 file HTML** - Không cần backend
- ✅ **Deploy miễn phí** - GitHub Pages, Vercel, Netlify đều free
- ✅ **Không cần database** - Tất cả xử lý ở bot
- ✅ **Custom domain** - Có thể dùng domain riêng
- ✅ **HTTPS tự động** - Tất cả platform đều support SSL

---

## 🎨 Giao Diện

- **Theme:** Purple gradient với animation mượt mà
- **Icons:** Font Awesome 7.1.0 (via CDN)
- **Particles:** Animated background với interactive effects
  - index.html: Purple particles (100+) - grab, bubble effects
  - verify.html: Green particles (80+) - grab, connect effects
- **Responsive:** Hoạt động tốt trên mobile & desktop
- **Modern:** Inter font, glass-morphism, backdrop-filter
- **Dark mode:** Tối ưu cho đêm
- **Effects:** 
  - Floating logo animation
  - Shimmer code box
  - Pulsing badges
  - Glow on hover
  - Multiple particle shapes (circle, star, edge, triangle)
  - Interactive particle modes (grab, bubble, push, connect)

---

## 🔗 Link Shortener

Bot sử dụng **Unified Shortener** với Dialog Selector:

**User chọn service qua buttons:**
- 💰 **YeuMoney:** Kiếm tiền cao hơn, ưu tiên
- 🔗 **Click1s:** Dự phòng, ổn định

**Lợi ích:**
- User có quyền chọn service
- Hiển thị service đã dùng trong footer
- Không có fallback tự động

**Config:**
```bash
# Set tokens
set YEUMONEY_API_TOKEN=your_token
set CLICK1S_API_TOKEN=your_token
```

---

## 🔧 Custom

Bạn có thể tùy chỉnh:
- Màu sắc trong `:root` CSS
- Text content
- Animation timing
- Layout
- Particles config (số lượng, màu sắc, shapes, speed)

---

## 🔧 Clean URLs Config (Optional)

Nếu hosting không tự động hỗ trợ clean URLs, thêm config:

**Vercel** - Tạo `vercel.json`:
```json
{
  "cleanUrls": true
}
```

**Netlify** - Tạo `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/:splat.html"
  status = 200
```

**GitHub Pages** - Tự động hỗ trợ, không cần config!

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra URL đã set đúng trong bot chưa
2. Test URL trực tiếp: `https://your-url.com/verify?code=test`
3. Kiểm tra console log của browser (F12)
4. Nếu lỗi 404, thêm config clean URLs ở trên

---

**Made by [Doan Dinh Hoang](https://discord.gg/Kasumi)**
