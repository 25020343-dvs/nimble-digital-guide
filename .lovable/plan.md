## Mục tiêu

Tinh chỉnh trang chi tiết mỗi bài tập (`/bai-tap/$id`) và sửa lỗi neo (anchor) trên trang chủ.

## 1. Đọc & trích xuất nội dung từ 6 file .docx

Dùng `document--parse_document` đọc `public/bai-tap/bai-1.docx` … `bai-6.docx` để rút ra:
- **`objectives: string[]`** — danh sách mục tiêu bài học chi tiết (3–6 gạch đầu dòng/bài).
- **`achievements: string[]`** — những gì đạt được/sản phẩm/kết luận sau bài (rút từ phần kết luận, đánh giá, sản phẩm cuối trong từng file).

Cập nhật `src/data/exercises.ts`: thêm 2 trường `objectives` và `achievements` vào type `Exercise` và 6 entry. Giữ nguyên `goal`, `summary`, `requirements`, `process`, `fileUrl`.

## 2. Tạo ảnh xem trước các trang .docx

Cho mỗi bài 1..6:
```
soffice --headless --convert-to pdf public/bai-tap/bai-{n}.docx --outdir /tmp
pdftoppm -jpeg -r 110 /tmp/bai-{n}.pdf public/bai-tap/bai-{n}/page
```
Sinh `public/bai-tap/bai-{n}/page-01.jpg`, `page-02.jpg`, … Đếm số trang để hard-code vào `exercises.ts` (`pages: number`) hoặc tạo manifest JSON.

## 3. Viết lại `src/routes/bai-tap.$id.tsx`

Thứ tự section mới (trong vùng nội dung dưới hero):

```
[Hero: icon · "Bài tập N" · title · Mục tiêu (goal ngắn)]

[Header navigation – mục mới]   ← #2 dưới
[🎯 Mục tiêu bài học chi tiết]   ← thay "Định hướng trình bày"
   - render ex.objectives (list)
[📋 Yêu cầu bài tập]              ← giữ
[📄 Tải bài tập đầy đủ (.docx)]   ← di chuyển LÊN trên "Tóm tắt"
[🛠️ Tóm tắt quá trình thực hiện]
[🏆 Những gì đạt được sau bài tập] ← thay "Ghi chú thêm", render ex.achievements
[📑 Toàn bộ trang bài tập]         ← grid hiển thị tất cả page-XX.jpg
[← Bài trước  |  Bài tiếp →]
[Footer]
```

Bỏ component `Placeholder` và section "Ghi chú thêm". Bỏ khối "Tải sản phẩm bài tập" trùng lặp ở cuối "Tóm tắt".

### Header mới (sticky) cho trang bài tập

Thay header hiện tại bằng header đầy đủ — dùng `<Link to="/" hash="...">` để điều hướng về từng section của trang chủ:

- Logo UET → `/`
- Giới thiệu → `/#top`
- Bài tập → `/#projects`
- Kỹ năng → `/#skills`
- Đạo đức AI → `/#ethics`
- Tổng kết → `/#reflection`
- Liên hệ (CTA) → `/#contact`

Khi nhấn ở trang bài tập, router sẽ chuyển về `/` và cuộn tới hash tương ứng (bật `scrollRestoration` mặc định của TanStack Start là đủ).

### Section "Toàn bộ trang bài tập"

Grid 2 cột (md:3) các `<img src="/bai-tap/bai-{n}/page-{i}.jpg">` có viền `border-[#1e3319]`, `rounded-xl`, click để mở ảnh gốc trong tab mới.

## 4. Sửa lệch anchor ở trang chủ

Header sticky cao ~72px khiến `#projects`, `#skills`… cuộn bị che. Thêm tiện ích Tailwind `scroll-mt-24` cho các `<section id="...">` (`#projects`, `#skills`, `#ethics`, `#reflection`) trong `src/routes/index.tsx`.

Với "Giới thiệu" — đổi `href="#top"` thành `onClick` cuộn `window.scrollTo({ top: 0 })` để lên hẳn đầu trang (không lệch bởi sticky header). Giữ `id="top"` cho hero phòng khi mở từ trang khác.

Áp dụng cùng fix cho các link trong footer (`Điều hướng`).

## 5. Files thay đổi

- **edit** `src/data/exercises.ts` — thêm `objectives`, `achievements`, `pages`
- **edit** `src/routes/bai-tap.$id.tsx` — bố cục mới, header đầy đủ, gallery ảnh trang
- **edit** `src/routes/index.tsx` — `scroll-mt-24` cho các section, fix "Giới thiệu"
- **new** `public/bai-tap/bai-{1..6}/page-*.jpg` — ảnh các trang docx

## Ghi chú kỹ thuật

- TanStack Router `<Link to="/" hash="projects">` tự gắn `/#projects` và xử lý cuộn.
- Vẫn giữ `SmoothCursor` và `attachRipple` ở tất cả nút/link.
- Không động vào `routeTree.gen.ts`.
