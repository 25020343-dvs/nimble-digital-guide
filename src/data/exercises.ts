export type Exercise = {
  id: string;
  n: string;
  icon: string;
  shortTitle: string;
  title: string;
  goal: string;
  summary: string;
  requirements: string[];
};

export const exercises: Exercise[] = [
  {
    id: "1",
    n: "01",
    icon: "🗂️",
    shortTitle: "Tệp tin & Thư mục",
    title: "Bài 1 — Thao tác cơ bản với tệp tin và thư mục",
    goal:
      "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).",
    summary:
      "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
    requirements: [
      "Mở File Explorer (Windows + E hoặc biểu tượng thư mục vàng trên thanh tác vụ).",
      "Truy cập ổ đĩa/thư mục: chọn ổ không phải ổ hệ thống (D:, E:) hoặc thư mục Documents.",
      "Tạo thư mục mới: New → Folder, đặt tên ThucHanh_hotensinhvien (ví dụ ThucHanh_NguyenVanA).",
      "Vào thư mục vừa tạo bằng cách nhấp đúp.",
      "Tạo tệp tin văn bản: New → Text Document, đặt tên GhiChu.txt.",
      "Đổi tên tệp tin GhiChu.txt → GhiChuQuanTrong.txt.",
      "Tạo thư mục con TaiLieu bên trong ThucHanh_NguyenVanA.",
      "Sao chép tệp tin (Copy & Paste hoặc Ctrl+C / Ctrl+V) sang TaiLieu.",
      "Di chuyển tệp tin (Cut & Paste hoặc Ctrl+X / Ctrl+V): tạo DiChuyen.txt rồi chuyển sang TaiLieu.",
      "Xóa tệp tin: trong TaiLieu, Delete GhiChuQuanTrong.txt (tệp vào Recycle Bin).",
      "Xóa vĩnh viễn: Shift + Delete với DiChuyen.txt (không qua Recycle Bin).",
      "Khôi phục từ Thùng rác (tùy chọn): mở Recycle Bin → Restore tệp đã xóa.",
    ],
  },
  {
    id: "2",
    n: "02",
    icon: "🔍",
    shortTitle: "Tìm kiếm & Đánh giá",
    title: "Bài 2 — Tìm kiếm và đánh giá thông tin học thuật",
    goal:
      "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    summary:
      "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
    requirements: [
      "Chọn một chủ đề liên quan đến ngành học của bạn.",
      "Thực hiện tìm kiếm thông tin từ các nguồn: cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic, CSDL thư viện trường), tạp chí khoa học chuyên ngành, sách chuyên khảo, các nguồn mở trên internet.",
      "Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề (bao gồm ít nhất 5 bài báo khoa học).",
      "Đánh giá độ tin cậy của mỗi nguồn thông tin dựa trên các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, tính cập nhật.",
      "Tạo bảng tổng hợp các nguồn thông tin với đánh giá và xếp hạng độ tin cậy.",
    ],
  },
  {
    id: "3",
    n: "03",
    icon: "⚡",
    shortTitle: "Prompt hiệu quả",
    title: "Bài 3 — Viết Prompt hiệu quả cho các tác vụ học tập",
    goal:
      "Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
    summary:
      "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
    requirements: [
      "Chọn 3 tác vụ học tập phổ biến: tóm tắt một bài đọc/tài liệu học thuật, giải thích một khái niệm phức tạp, tạo bộ câu hỏi ôn tập cho một chủ đề.",
      "Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau: prompt cơ bản (đơn giản, ngắn gọn), prompt cải tiến (chi tiết hơn, có cấu trúc), prompt nâng cao (áp dụng kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples).",
      "Thử nghiệm các prompt với một công cụ AI (như ChatGPT) và so sánh kết quả.",
      "Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.",
      "Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.",
    ],
  },
  {
    id: "4",
    n: "04",
    icon: "🤝",
    shortTitle: "Hợp tác trực tuyến",
    title: "Bài 4 — Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal:
      "Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.",
    summary:
      "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
    requirements: [
      "Bối cảnh: làm việc cùng nhóm để thực hiện một dự án nhỏ. Bài nộp tập trung vào vai trò và trải nghiệm cá nhân trong quá trình đó.",
      "Lựa chọn công cụ: thiết lập/sử dụng ít nhất 3 công cụ hợp tác trực tuyến từ các nhóm: quản lý dự án (Trello, Asana, ClickUp, Microsoft Planner…), soạn thảo tài liệu cộng tác (Google Docs, Microsoft Office Online…), lưu trữ và chia sẻ tệp (Google Drive, OneDrive, Dropbox…), giao tiếp nhóm (Slack, Discord, Microsoft Teams…).",
      "Trong 1 tuần thực hiện dự án, minh chứng các hoạt động cá nhân sau:",
      "— Tự quản lý danh sách nhiệm vụ được giao trên công cụ quản lý.",
      "— Lịch sử chỉnh sửa, đóng góp nội dung trực tiếp trên tài liệu cộng tác.",
      "— Tương tác, thảo luận chủ động với các thành viên khác trên công cụ giao tiếp.",
      "— Tổ chức và lưu trữ các tệp tin cá nhân phụ trách một cách khoa học.",
    ],
  },
  {
    id: "5",
    n: "05",
    icon: "🎨",
    shortTitle: "AI tạo sinh nội dung",
    title: "Bài 5 — Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    goal: "Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
    summary:
      "Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI.",
    requirements: [
      "Chọn một dự án sáng tạo nội dung (bài thuyết trình, bài viết, infographic, hoặc video ngắn).",
      "Sử dụng ít nhất 3 công cụ AI tạo sinh khác nhau: công cụ tạo văn bản (ChatGPT, Google Gemini, Claude), công cụ tạo hình ảnh (DALL-E, Midjourney, Stable Diffusion), công cụ AI hỗ trợ thiết kế (Canva AI, Adobe Firefly).",
      "Ghi lại chi tiết quá trình sử dụng AI: các prompt đã sử dụng và kết quả nhận được; cách chỉnh sửa và tích hợp đầu ra của AI; so sánh kết quả từ các công cụ AI khác nhau.",
      "Hoàn thiện dự án bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng bạn.",
      "Viết phân tích về vai trò của AI trong quá trình sáng tạo: những phần AI làm tốt và phần còn hạn chế; cách AI thay đổi quy trình sáng tạo; các vấn đề đạo đức cần cân nhắc.",
    ],
  },
  {
    id: "6",
    n: "06",
    icon: "⚖️",
    shortTitle: "AI có trách nhiệm",
    title: "Bài 6 — Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
    summary:
      "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.",
    requirements: [
      "Nghiên cứu chính sách của trường đại học của bạn (hoặc một trường đại học lớn ở Việt Nam) về việc sử dụng AI trong học tập và nghiên cứu.",
      "Chọn một nhiệm vụ học tập (viết bài luận, chuẩn bị thuyết trình, tổng hợp tài liệu) và thực hiện với sự hỗ trợ của AI: ghi lại các prompt đã sử dụng; ghi lại đầu ra của AI; mô tả cách bạn đánh giá, chỉnh sửa và tích hợp đầu ra của AI; trích dẫn việc sử dụng AI một cách minh bạch.",
      "Phân tích các vấn đề đạo đức liên quan đến việc sử dụng AI trong học thuật: ranh giới giữa hỗ trợ hợp lý và gian lận học thuật; vấn đề về quyền sở hữu trí tuệ và trích dẫn; tác động đến quá trình học tập và phát triển kỹ năng.",
      "Xây dựng bộ nguyên tắc cá nhân (5–7 nguyên tắc) về cách sử dụng AI có trách nhiệm trong học tập.",
      "Tạo một infographic minh họa “Sử dụng AI có trách nhiệm trong học thuật”.",
    ],
  },
];

export const getExercise = (id: string) => exercises.find((e) => e.id === id);