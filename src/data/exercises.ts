export type Exercise = {
  id: string;
  n: string;
  icon: string;
  shortTitle: string;
  title: string;
  goal: string;
  summary: string;
  requirements: string[];
  process: string[];
  fileUrl: string;
};

export const exercises: Exercise[] = [
  {
    id: "1",
    n: "01",
    icon: "🗂️",
    shortTitle: "Tệp tin & Thư mục",
    title:
      "Bài 1 — Bài tập 1 (mục 1.4): Thao tác cơ bản với tệp tin và thư mục",
    goal:
      "Thành thạo các thao tác quản lý dữ liệu cá nhân trên hệ điều hành Windows: tạo, đổi tên, sao chép, di chuyển, xoá và khôi phục tệp tin/thư mục — đặt nền tảng cho kỹ năng tổ chức dữ liệu khoa học.",
    summary:
      "Thực hành toàn bộ chuỗi 12 thao tác cơ bản trong File Explorer, kèm ảnh chụp minh hoạ và quy tắc đặt tên thư mục có hệ thống.",
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
    process: [
      "Mở File Explorer bằng Windows + E và truy cập ổ D: để có không gian thực hành tách biệt với ổ hệ thống.",
      "Tạo thư mục gốc ThucHanh_DoVanSang bằng menu chuột phải → New → Folder, đặt tên có tiền tố nhận diện cá nhân.",
      "Bên trong thư mục, tạo tệp GhiChu.txt rồi đổi tên thành GhiChuQuanTrong.txt để luyện thao tác Rename.",
      "Tạo thư mục con TaiLieu để minh hoạ cấu trúc phân cấp; thực hiện Copy (Ctrl+C) tệp gốc và Paste (Ctrl+V) sang TaiLieu.",
      "Tạo tệp DiChuyen.txt rồi dùng Cut (Ctrl+X) + Paste để di chuyển sang TaiLieu, so sánh sự khác nhau giữa Copy và Cut.",
      "Xoá GhiChuQuanTrong.txt bằng phím Delete (vào Recycle Bin) và xoá vĩnh viễn DiChuyen.txt bằng Shift + Delete.",
      "Mở Recycle Bin, khôi phục lại tệp đã xoá bằng chuột phải → Restore và kiểm chứng tệp trở về vị trí cũ.",
      "Chụp ảnh từng bước, chú thích thao tác và rút ra quy tắc đặt tên: viết liền không dấu, có tiền tố mục đích và họ tên.",
    ],
    fileUrl: "/bai-tap/bai-1.docx",
  },
  {
    id: "2",
    n: "02",
    icon: "🔍",
    shortTitle: "Tìm kiếm & Đánh giá",
    title:
      "Bài 2 — Bài tập 2 (mục 2.4): Tìm kiếm và đánh giá thông tin học thuật",
    goal:
      "Phát triển kỹ năng tìm kiếm thông tin học thuật bằng toán tử nâng cao trên các CSDL uy tín (Google Scholar, Springer, Elsevier…) và đánh giá độ tin cậy của nguồn dựa trên tác giả, nơi xuất bản, phương pháp, lượt trích dẫn và tính cập nhật.",
    summary:
      "Khảo sát chủ đề “Tác động của AI đến hiệu quả tự học của sinh viên”, thu thập 10 nguồn (5 bài báo Q1, 2 sách, 3 báo cáo) và xếp hạng độ tin cậy.",
    requirements: [
      "Chọn một chủ đề liên quan đến ngành học của bạn.",
      "Thực hiện tìm kiếm thông tin từ các nguồn: cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic, CSDL thư viện trường), tạp chí khoa học chuyên ngành, sách chuyên khảo, các nguồn mở trên internet.",
      "Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề (bao gồm ít nhất 5 bài báo khoa học).",
      "Đánh giá độ tin cậy của mỗi nguồn thông tin dựa trên các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, tính cập nhật.",
      "Tạo bảng tổng hợp các nguồn thông tin với đánh giá và xếp hạng độ tin cậy.",
    ],
    process: [
      "Chọn chủ đề: “Tác động của Trí tuệ nhân tạo (AI) đến hiệu quả tự học của sinh viên đại học” — gắn với ngành CNTT và mang tính thời sự.",
      "Xác định bộ từ khoá song ngữ: “AI in higher education”, “Self-regulated learning and AI”, “Generative AI impact on students”, “Trí tuệ nhân tạo trong tự học”; giới hạn thời gian 2020–2026.",
      "Tìm kiếm trên Google Scholar, ResearchGate, thư viện số ĐHQGHN; lọc theo tạp chí Q1 như Computers & Education, BJET.",
      "Thu thập 10 tài liệu: 5 bài báo khoa học (Molenaar 2023, Lodge 2023, Baidoo-Anu 2023, Zawacki-Richter 2019, Yan 2024), 2 sách chuyên khảo (Holmes & Tuomi 2022, Selwyn 2019), 3 báo cáo tổ chức (UNESCO 2023, OECD 2021, Microsoft 2024).",
      "Đánh giá từng nguồn theo 5 tiêu chí: tác giả – cơ quan xuất bản – phương pháp nghiên cứu – số lượt trích dẫn – tính cập nhật.",
      "Lập bảng tổng hợp xếp hạng độ tin cậy (Rất cao / Cao / Trung bình – Khá) và rút ra nhận xét: nguồn UNESCO và bài Q1 đáng tin cậy nhất, whitepaper Microsoft cần đối chiếu vì có thiên kiến quảng bá.",
      "Hoàn thiện danh mục tham khảo theo chuẩn Harvard và viết phần phân tích phương pháp luận.",
    ],
    fileUrl: "/bai-tap/bai-2.docx",
  },
  {
    id: "3",
    n: "03",
    icon: "⚡",
    shortTitle: "Prompt hiệu quả",
    title:
      "Bài 3 — Bài tập 2 (mục 3.4): Viết Prompt hiệu quả cho các tác vụ học tập",
    goal:
      "Hình thành tư duy Prompt Engineering: biết viết prompt cơ bản → cải tiến → nâng cao (Role, Chain-of-Thought, Few-shot) để khai thác tối đa các mô hình ngôn ngữ lớn phục vụ học tập.",
    summary:
      "So sánh 3 cấp prompt (Cơ bản – Cải tiến – Nâng cao) trên 3 tác vụ: tóm tắt tài liệu AI, giải thích lạm phát, soạn câu hỏi ôn tập triều Nguyễn.",
    requirements: [
      "Chọn 3 tác vụ học tập phổ biến: tóm tắt một bài đọc/tài liệu học thuật, giải thích một khái niệm phức tạp, tạo bộ câu hỏi ôn tập cho một chủ đề.",
      "Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau: prompt cơ bản (đơn giản, ngắn gọn), prompt cải tiến (chi tiết hơn, có cấu trúc), prompt nâng cao (áp dụng kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples).",
      "Thử nghiệm các prompt với một công cụ AI (như ChatGPT) và so sánh kết quả.",
      "Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.",
      "Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.",
    ],
    process: [
      "Chọn 3 tác vụ học tập: (a) Tóm tắt tài liệu về Trí tuệ nhân tạo, (b) Giải thích khái niệm Lạm phát, (c) Tạo bộ câu hỏi ôn tập về Triều Nguyễn.",
      "Với mỗi tác vụ, soạn 3 phiên bản prompt: Cơ bản (ngắn, ít ràng buộc) – Cải tiến (định dạng + giới hạn độ dài) – Nâng cao (Role + Chain-of-Thought + yêu cầu bảng).",
      "Chạy thử trên ChatGPT, lưu lại screenshot toàn bộ kết quả đầu ra để có bằng chứng đối sánh.",
      "Lập bảng so sánh chất lượng đầu ra theo 3 tiêu chí: Chất lượng – Độ chính xác/Chi tiết – Tính ứng dụng.",
      "Phân tích lý do prompt nâng cao thắng: cung cấp ngữ cảnh (Role), ràng buộc định dạng, hướng dẫn suy nghĩ từng bước (CoT), ví dụ mẫu (Few-shot).",
      "Đúc kết 4 nguyên tắc cá nhân: (1) Rõ ràng – động từ mệnh lệnh, (2) Cung cấp bối cảnh/vai trò, (3) Quy định cấu trúc đầu ra, (4) Lặp – tinh chỉnh nhiều vòng.",
    ],
    fileUrl: "/bai-tap/bai-3.docx",
  },
  {
    id: "4",
    n: "04",
    icon: "🤝",
    shortTitle: "Hợp tác trực tuyến",
    title:
      "Bài 4 — Bài tập 3 (mục 4.4): Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal:
      "Thành thạo bộ công cụ hợp tác trực tuyến (Trello, Google Docs, Google Drive, Discord) và thể hiện vai trò cá nhân trong quản lý công việc, đóng góp nội dung, lưu trữ tài liệu và giao tiếp nhóm.",
    summary:
      "Tham gia dự án nhóm 1 tuần: phân chia nhiệm vụ trên Trello, đồng soạn kịch bản trên Google Docs, lưu trữ trên Drive, họp/trao đổi trên Discord.",
    requirements: [
      "Bối cảnh: làm việc cùng nhóm để thực hiện một dự án nhỏ. Bài nộp tập trung vào vai trò và trải nghiệm cá nhân trong quá trình đó.",
      "Lựa chọn công cụ: thiết lập/sử dụng ít nhất 3 công cụ hợp tác trực tuyến từ các nhóm: quản lý dự án (Trello, Asana, ClickUp, Microsoft Planner…), soạn thảo tài liệu cộng tác (Google Docs, Microsoft Office Online…), lưu trữ và chia sẻ tệp (Google Drive, OneDrive, Dropbox…), giao tiếp nhóm (Slack, Discord, Microsoft Teams…).",
      "Trong 1 tuần thực hiện dự án, minh chứng các hoạt động cá nhân sau:",
      "— Tự quản lý danh sách nhiệm vụ được giao trên công cụ quản lý.",
      "— Lịch sử chỉnh sửa, đóng góp nội dung trực tiếp trên tài liệu cộng tác.",
      "— Tương tác, thảo luận chủ động với các thành viên khác trên công cụ giao tiếp.",
      "— Tổ chức và lưu trữ các tệp tin cá nhân phụ trách một cách khoa học.",
    ],
    process: [
      "Chọn 4 công cụ đại diện 4 nhóm chức năng: Trello (quản lý), Google Docs (soạn thảo), Google Drive (lưu trữ), Discord (giao tiếp).",
      "Trên Trello: tạo board với các cột Cần làm – Đang làm – Chờ review – Đã xong; nhận 3 thẻ cá nhân (thiết kế khảo sát, kịch bản thuyết trình, dựng video) và cập nhật tiến độ hằng ngày.",
      "Trên Google Docs: đồng soạn “Kịch bản bài quay video công nghệ số”, dùng chế độ Suggesting và Version History để theo dõi đóng góp.",
      "Trên Google Drive: tổ chức thư mục Học kỳ 2_2025-2026 → Công nghệ số → các thư mục con cho từng tài liệu nhóm.",
      "Trên Discord: thảo luận nhóm về lợi ích/thách thức của AI trong học tập, chia sẻ màn hình khi họp 1-1.",
      "Ghi lại 3 thách thức gặp phải (xung đột phiên bản, quản lý deadline, mất tập trung khi họp) và giải pháp tương ứng.",
      "Tổng kết bài học: minh bạch tiến độ, tiết kiệm thời gian và phát triển kỹ năng làm việc nhóm trong môi trường số.",
    ],
    fileUrl: "/bai-tap/bai-4.docx",
  },
  {
    id: "5",
    n: "05",
    icon: "🎨",
    shortTitle: "AI tạo sinh nội dung",
    title:
      "Bài 5 — Bài tập 2 (mục 5.4): Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    goal:
      "Thành thạo việc kết hợp ≥3 công cụ AI tạo sinh (ChatGPT – viết, Gemini – hình ảnh, Canva AI – thiết kế) để hoàn thiện một sản phẩm số có giá trị thông điệp rõ ràng.",
    summary:
      "Thiết kế bài thuyết trình “Tác hại của việc thức khuya đối với sinh viên” gồm 8 slide, kết hợp nội dung ChatGPT, ảnh Gemini và layout Canva AI.",
    requirements: [
      "Chọn một dự án sáng tạo nội dung (bài thuyết trình, bài viết, infographic, hoặc video ngắn).",
      "Sử dụng ít nhất 3 công cụ AI tạo sinh khác nhau: công cụ tạo văn bản (ChatGPT, Google Gemini, Claude), công cụ tạo hình ảnh (DALL-E, Midjourney, Stable Diffusion), công cụ AI hỗ trợ thiết kế (Canva AI, Adobe Firefly).",
      "Ghi lại chi tiết quá trình sử dụng AI: các prompt đã sử dụng và kết quả nhận được; cách chỉnh sửa và tích hợp đầu ra của AI; so sánh kết quả từ các công cụ AI khác nhau.",
      "Hoàn thiện dự án bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng bạn.",
      "Viết phân tích về vai trò của AI trong quá trình sáng tạo: những phần AI làm tốt và phần còn hạn chế; cách AI thay đổi quy trình sáng tạo; các vấn đề đạo đức cần cân nhắc.",
    ],
    process: [
      "Xác định chủ đề & đối tượng: bài thuyết trình 8 slide cho sinh viên về tác hại của việc thức khuya.",
      "ChatGPT: prompt “Viết nội dung cho bài thuyết trình 8 slide về tác hại của việc thức khuya, ngắn gọn, dễ hiểu” → nhận dàn ý 8 slide (Giới thiệu → Thực trạng → Tác hại → Nguyên nhân → Giải pháp → Kết luận).",
      "Gemini: prompt tiếng Anh tạo hình ảnh minh hoạ (“A tired college student studying late at night, dark room, laptop light, realistic”) cho slide tác hại sức khoẻ.",
      "Canva AI: dùng Magic Design để dựng layout, đồng bộ font – màu – icon cho 8 slide.",
      "Chỉnh sửa cá nhân: rút gọn câu chữ, bổ sung số liệu thực tế, thay icon trùng lặp; viết phần kết luận theo giọng riêng.",
      "Sản phẩm cuối: bài thuyết trình Canva công khai — https://canva.link/zprfakst0n3afzq",
      "Phân tích vai trò AI: nhanh và đa dạng nhưng còn chung chung, cần kiểm chứng số liệu, ghi rõ phần nào AI hỗ trợ để đảm bảo minh bạch.",
    ],
    fileUrl: "/bai-tap/bai-5.docx",
  },
  {
    id: "6",
    n: "06",
    icon: "⚖️",
    shortTitle: "AI có trách nhiệm",
    title:
      "Bài 6 — Bài tập 4 (mục 6.4): Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal:
      "Phân biệt rạch ròi giữa “hỗ trợ hợp lý” và “gian lận học thuật”, hình thành bộ nguyên tắc cá nhân về sử dụng AI minh bạch, tôn trọng bản quyền và bảo vệ quá trình tư duy độc lập.",
    summary:
      "Nghiên cứu chính sách AI, thực hành viết bài luận “Tác động của AI đến Marketing” với Gemini và đề xuất 6 nguyên tắc dùng AI có trách nhiệm + infographic minh hoạ.",
    requirements: [
      "Nghiên cứu chính sách của trường đại học của bạn (hoặc một trường đại học lớn ở Việt Nam) về việc sử dụng AI trong học tập và nghiên cứu.",
      "Chọn một nhiệm vụ học tập (viết bài luận, chuẩn bị thuyết trình, tổng hợp tài liệu) và thực hiện với sự hỗ trợ của AI: ghi lại các prompt đã sử dụng; ghi lại đầu ra của AI; mô tả cách bạn đánh giá, chỉnh sửa và tích hợp đầu ra của AI; trích dẫn việc sử dụng AI một cách minh bạch.",
      "Phân tích các vấn đề đạo đức liên quan đến việc sử dụng AI trong học thuật: ranh giới giữa hỗ trợ hợp lý và gian lận học thuật; vấn đề về quyền sở hữu trí tuệ và trích dẫn; tác động đến quá trình học tập và phát triển kỹ năng.",
      "Xây dựng bộ nguyên tắc cá nhân (5–7 nguyên tắc) về cách sử dụng AI có trách nhiệm trong học tập.",
      "Tạo một infographic minh họa “Sử dụng AI có trách nhiệm trong học thuật”.",
    ],
    process: [
      "Nghiên cứu chính sách AI của các trường đại học lớn: AI được chấp nhận như công cụ hỗ trợ tìm kiếm/ý tưởng, nhưng nộp bài 100% do AI mà không khai báo bị xem là đạo văn.",
      "Chọn nhiệm vụ: viết bài luận “Tác động của AI đến hành vi người tiêu dùng 2024 – chiến lược cá nhân hoá”.",
      "Prompt Gemini với Role + yêu cầu cấu trúc: “Đóng vai chuyên gia Marketing, lập dàn ý chi tiết… tập trung mảng cá nhân hoá trải nghiệm”.",
      "Nhận dàn ý 5 mục (Giới thiệu – Tự động hoá nội dung – Cá nhân hoá dữ liệu – Thách thức quyền riêng tư – Kết luận); chỉnh sửa, bổ sung ví dụ Nghị định bảo vệ dữ liệu cá nhân tại Việt Nam.",
      "Trích dẫn minh bạch: “Bài luận có sử dụng Gemini để hỗ trợ xây dựng khung dàn ý ban đầu và gợi ý từ khoá nghiên cứu”.",
      "Phân tích 3 vấn đề đạo đức: ranh giới hỗ trợ–gian lận, quyền sở hữu trí tuệ & trích dẫn, tác động đến tư duy.",
      "Đề xuất 6 nguyên tắc cá nhân: Kiểm chứng – Minh bạch – Không thay thế tư duy – Bảo mật dữ liệu – Hiểu “Tại sao” – Cập nhật quy định.",
      "Thiết kế infographic 4 trụ cột: Khai báo minh bạch – Tư duy phê phán – Sử dụng như công cụ – Tôn trọng đạo đức.",
    ],
    fileUrl: "/bai-tap/bai-6.docx",
  },
];

export const getExercise = (id: string) => exercises.find((e) => e.id === id);