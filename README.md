# Lá Thư Tình 20/10

Một ứng dụng web lãng mạn để gửi thư tình nhân ngày Phụ nữ Việt Nam (20/10).

## ✨ Tính năng

- **Phong bì tương tác**: Nhấn vào phong bì để mở và xem lá thư
- **Hiệu ứng động mượt mà**: Animations mượt mà với CSS transitions
- **Thiết kế responsive**: Hoạt động tốt trên mọi thiết bị
- **Ảnh gallery**: Bộ sưu tập ảnh lãng mạn
- **Typography đẹp**: Sử dụng Google Fonts (Playfair Display & Lato)

## 🚀 Cách chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 16+)
- npm hoặc yarn

### Cài đặt và chạy

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Chạy development server:**
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt:**
   Truy cập `http://localhost:5173` để xem ứng dụng

### Các lệnh khác

- `npm run build` - Build cho production
- `npm run preview` - Preview build production

## 🛠️ Công nghệ sử dụng

- **React 18** với TypeScript
- **Vite** - Build tool nhanh
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon library
- **React Router** - Routing (cho tương lai)

## 📱 Responsive Design

Ứng dụng được tối ưu cho:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Tùy chỉnh

### Thay đổi nội dung thư:
Chỉnh sửa file `src/components/Letter.tsx`

### Thay đổi ảnh:
- Ảnh hero: Thay URL trong `Letter.tsx`
- Ảnh gallery: Thay URL trong `PhotoGrid.tsx`

### Thay đổi màu sắc:
Chỉnh sửa CSS variables trong `src/index.css`

## 📄 Cấu trúc dự án

```
src/
├── components/
│   ├── Envelope.tsx      # Component phong bì
│   ├── Letter.tsx        # Component lá thư
│   └── PhotoGrid.tsx     # Component gallery ảnh
├── App.tsx               # Component chính
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🤝 Đóng góp

Miễn phí tùy chỉnh cho mục đích cá nhân! 🎉

## 📄 License

Dự án này được tạo cho mục đích cá nhân và lãng mạn.