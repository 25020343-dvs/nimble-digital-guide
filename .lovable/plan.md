## Thay đổi UI trang chủ portfolio

**File chỉnh sửa:** `src/routes/index.tsx` (+ nhẹ `src/styles.css` nếu cần cho hiệu ứng)

### 1. Header (nav trên cùng)
- Xoá text "Đỗ Văn Sang" cạnh logo, chỉ giữ logo UET.

### 2. Hiệu ứng nhấn (click) mượt mà
- Thêm class tiện ích cho các link/nút trong nav, Hero CTA, project cards, footer links: `transition-all duration-300 active:scale-95 hover:scale-[1.02]` (với nút) và ripple-like nhẹ qua `transition-transform`.
- Thêm `scroll-smooth` (đã có ở html mẫu) — đảm bảo class trên `<html>` hoặc dùng CSS `html { scroll-behavior: smooth }` trong `styles.css`.

### 3. Hero section
- Badge: đổi text thành **"NHẬP MÔN CÔNG NGHỆ SỐ VÀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO"**.
- Bỏ dòng "Xin chào, tôi là" — chỉ hiển thị tên "Đỗ Văn Sang" (giữ nguyên kiểu Playfair Display italic gradient lime→emerald).

### 4. Thông tin dưới tên (thay thế 4 chip hiện tại)
Sắp xếp lại theo đúng thứ tự, màu chữ **trắng** (`text-white`), từ khoá trọng tâm tô màu **gradient green pha yellow** (`bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold`):

1. Trường **Đại học Công Nghệ - Đại học Quốc gia Hà Nội**
2. Ngành **Công nghệ Thông tin**
3. Khoá **K70**
4. Mã sinh viên **25020343**
5. Mã lớp học **VNU1001_E252016**

Mỗi mục là 1 chip nền `bg-[#121a0f] border border-[#1e3319]`, label trắng + giá trị highlight gradient.

### 5. Đồng bộ
- Cập nhật MSV ở footer từ `250203` → `25020343`.
- Giữ nguyên các section khác (Projects, Skills, Ethics, Reflection).
