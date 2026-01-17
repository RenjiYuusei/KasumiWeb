# 🌐 Kasumi Web - Trang Reset Giới Hạn

Hệ thống web interface hiện đại với 2 file HTML tĩnh để hiển thị hướng dẫn và mã reset cho bot Discord.

---

## 📁 Files

```
web/
├── index.html    # Landing Page - Hướng dẫn vượt link (Purple theme)
├── verify.html   # Success Page - Hiển thị mã reset (Green theme)
└── README.md     # Tài liệu này
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

## 📞 Liên Hệ & Hỗ Trợ

- 🐛 **Report bugs:** [Discord Server](https://discord.gg/Kasumi)
- 💡 **Feature requests:** Open issue on GitHub
- 📧 **Email:** hoangdoan.yy@gmail.com
- 🌐 **Website:** [Kasumi Bot](https://discord.gg/Kasumi)

---

## 📄 License

MIT License - Free to use and modify

---

## 🌟 Credits

- **Design & Development:** [Doan Dinh Hoang](https://discord.gg/Kasumi)
- **Framework:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Particles:** [Particles.js](https://vincentgarreau.com/particles.js/)
- **Font:** [Inter(https://fonts.google.com/specimen/Inter) by Rasmus Andersson

---

**Made with 💜 by [Doan Dinh Hoang](https://discord.gg/Kasumi)**
*Kasumi Discord Bot*

**⭐ Star this repo nếu bạn thấy hữu ích!**
