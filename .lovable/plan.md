## 1. Sidebar điều hướng trong trang bài tập (`src/routes/bai-tap.$id.tsx`)

- Bỏ section "🧭 Khám phá các bài tập khác" hiện tại (grid 3 cột ở cuối) và bỏ luôn khối "Bài trước / Bài tiếp" ở cuối trang.
- Bọc vùng nội dung chính bằng layout 2 cột trên desktop (`lg:grid-cols-[220px_1fr] gap-8`):
  - **Cột trái (sticky)**: thanh công cụ liệt kê 6 bài tập, đứng cố định (`lg:sticky lg:top-24 lg:self-start`). Mỗi mục là `<Link>` hiển thị `Bài N · shortTitle`; bài đang xem được highlight `bg-lime-500/10 border-lime-500/50 text-lime-300`.
  - **Cột phải**: toàn bộ các section hiện có (Mục tiêu, Tải file, Tóm tắt, Đạt được, Toàn bộ trang).
- Trên mobile (`< lg`): sidebar chuyển thành thanh ngang scroll (`flex overflow-x-auto`) đặt ngay trên nội dung.

## 2. Đổi tiêu đề ở trang chủ (`src/routes/index.tsx`)

- "Sáu Bài Tập Cốt Lõi" → **"Bài Tập"**
- "Kỹ Năng Số Đã Đạt Được" → **"Các Kỹ Năng Đạt Được"**
- "Quy Tắc Đạo Đức AI Cá Nhân" → **"Nguyên Tắc Sử Dụng AI"**

## 3. Bổ sung thông tin liên hệ (`src/routes/index.tsx`, section `#contact`)

Thêm các dòng:
- Trường: **Trường Đại học Công nghệ — ĐHQGHN (UET)**
- Ngành: **CNTT — K70 — IT5**
- Mã lớp: **(giữ giá trị hiện có)**

## 4. Sửa lỗi phông chữ tiếng Việt (`src/styles.css` + các nơi dùng heading)

Vấn đề: **Playfair Display** thiếu một số glyph dấu tiếng Việt (Cốt Lõi, Lỡ, Đạt Được, Ngẫm…) khiến chữ "to nhỏ" lệch.

- Thay font heading: bỏ `Playfair Display`, dùng **Be Vietnam Pro** (đã có) hoặc bổ sung **Plus Jakarta Sans** / **Manrope** từ Google Fonts — cả 3 đều full Vietnamese subset.
- Cập nhật `@import` Google Fonts trong `src/styles.css`: nạp `Be Vietnam Pro` weights 400/600/700/800 + `Inter` weights 400/500/600/700 (subset `vietnamese`).
- Mọi class `font-[Playfair_Display,serif]` ở `src/routes/index.tsx` → đổi sang `font-[Be_Vietnam_Pro,sans-serif]`.
- Heading hero giữ Be Vietnam Pro 800 với `tracking-tight`.

## Files thay đổi

- `src/routes/bai-tap.$id.tsx` — layout sidebar, bỏ nav cuối
- `src/routes/index.tsx` — đổi 3 tiêu đề + bổ sung contact + thay font heading
- `src/styles.css` — cập nhật @import Google Fonts (vietnamese subset), bỏ Playfair
