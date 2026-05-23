import { createFileRoute } from "@tanstack/react-router";
import uetLogo from "@/assets/uet-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Đỗ Văn Sang — Portfolio Số" },
      { name: "description", content: "Portfolio số môn Nhập môn Công nghệ Số & Ứng dụng AI Tạo sinh — Đỗ Văn Sang, UET." },
    ],
  }),
});

function Index() {
  return <Portfolio />;
}

const NAME = "Đỗ Văn Sang";

const projects = [
  { icon: "🗂️", n: "01", title: "Quản lý Tệp & Thư mục Cơ bản", goal: "Tối ưu hóa cấu trúc thư mục và quy ước đặt tên tệp cho quy trình làm việc số hiệu quả.", summary: "Kiểm tra tệp hiện có, áp dụng cấu trúc đặt tên YYYY-MM-DD_TênDựÁn_Phiênbản và di chuyển toàn bộ tài liệu khóa học vào hệ thống thư mục phân cấp trên Google Drive." },
  { icon: "🔍", n: "02", title: "Tìm kiếm & Đánh giá Thông tin Học thuật", goal: "Sử dụng toán tử tìm kiếm nâng cao và kiểm tra độ tin cậy của nguồn bằng các tiêu chí đánh giá.", summary: "Thực hành toán tử Google Scholar (site:, filetype:, \"cụm từ chính xác\") và áp dụng tiêu chí CRAAP để đánh giá 10 nguồn về tính hiện thời, độ liên quan, thẩm quyền, độ chính xác." },
  { icon: "⚡", n: "03", title: "Thiết kế Câu lệnh AI Hiệu quả", goal: "So sánh câu lệnh ban đầu với câu lệnh cải tiến và đánh giá chất lượng đầu ra của AI trong học tập.", summary: "Thực hiện 15 thử nghiệm A/B prompt trên ChatGPT và Gemini, ghi lại sự khác biệt chất lượng bằng thang đánh giá tự thiết kế (độ chính xác, chiều sâu, định dạng)." },
  { icon: "🤝", n: "04", title: "Cộng tác Trực tuyến cho Dự án Nhóm", goal: "Minh chứng việc sử dụng công cụ quản lý dự án và quy trình làm việc nhóm trong môi trường số.", summary: "Dẫn dắt nhóm 4 người dùng Trello quản lý công việc, Google Docs đồng soạn thảo và Zoom họp hàng tuần, tạo ra báo cáo nghiên cứu cộng tác 10 trang." },
  { icon: "🎨", n: "05", title: "AI Tạo sinh cho Sáng tạo Nội dung", goal: "Trình bày một sản phẩm số sáng tạo: bài viết, video hoặc thiết kế đồ họa có hỗ trợ của AI.", summary: "Sản xuất video giải thích 1 phút về biến đổi khí hậu dùng Runway ML tạo hình ảnh, ElevenLabs tổng hợp giọng đọc và CapCut dựng phim và phụ đề." },
  { icon: "⚖️", n: "06", title: "AI Có Trách nhiệm trong Học tập & Nghiên cứu", goal: "Xây dựng bộ quy tắc đạo đức cá nhân khi sử dụng công cụ AI một cách an toàn và có trách nhiệm.", summary: "Nghiên cứu hướng dẫn đạo đức AI của UNESCO và Đạo luật AI EU, tổng hợp năm nguyên tắc cá nhân và viết bài phản biện 1.200 từ với các ví dụ thực tế." },
];

const skills = [
  { icon: "🗂️", name: "Quản lý Tệp & Thư mục", level: "THÀNH THẠO", pct: 85 },
  { icon: "🔍", name: "Nghiên cứu Nâng cao", level: "ĐANG PHÁT TRIỂN", pct: 78 },
  { icon: "⚡", name: "Thiết kế Câu lệnh (Prompt)", level: "THÀNH THẠO", pct: 80 },
  { icon: "🤝", name: "Cộng tác Nhóm Số", level: "VỮNG CHẮC", pct: 90 },
  { icon: "🎨", name: "Sáng tạo Nội dung AI", level: "ĐANG PHÁT TRIỂN", pct: 72 },
  { icon: "⚖️", name: "Liêm chính Học thuật & Đạo đức", level: "THÀNH THẠO", pct: 88 },
  { icon: "📊", name: "Phân tích & Đọc hiểu Dữ liệu", level: "MỚI BẮT ĐẦU", pct: 60 },
  { icon: "🌐", name: "Giao tiếp Số", level: "VỮNG CHẮC", pct: 83 },
];

const tools = ["Google Drive","Notion","Trello","ChatGPT","Google Gemini","Canva","Google Scholar","Zoom","Microsoft 365","Runway ML","ElevenLabs","CapCut","Tiêu chí CRAAP","Moodle"];

const ethics = [
  { icon: "🔎", title: "01. Minh Bạch", text: "Tôi luôn ghi chú rõ ràng khi công cụ AI hỗ trợ tạo nội dung học thuật, bao gồm tên công cụ, phiên bản và mức độ sử dụng — coi AI như bất kỳ nguồn tài liệu nào khác." },
  { icon: "✅", title: "02. Kiểm tra & Xác minh", text: "Đầu ra của AI sẽ không bao giờ được nộp mà không có kiểm tra độc lập từ nguồn tin cậy. AI có thể sai — tôi coi mỗi câu trả lời của AI là điểm khởi đầu, không phải kết luận." },
  { icon: "🔒", title: "03. Bảo vệ Dữ liệu Cá nhân", text: "Tôi sẽ không nhập thông tin nhận dạng cá nhân của mình hoặc người khác vào hệ thống AI công cộng mà không có sự đồng ý, và sẽ đọc kỹ chính sách lưu trữ dữ liệu của mỗi công cụ." },
  { icon: "🧠", title: "04. Tư duy Phản biện Là Trọng tâm", text: "AI là công cụ khuếch đại, không phải thay thế tư duy của tôi. Tôi cam kết hình thành phân tích riêng trước khi hỏi AI, rồi so sánh kết quả để học hỏi sâu hơn." },
  { icon: "🌱", title: "05. Công bằng & Hòa nhập", text: "Tôi sẽ chủ động kiểm tra nội dung do AI tạo ra để phát hiện thiên kiến, rập khuôn hay ngôn ngữ loại trừ, và dùng chiến lược prompt hướng tới kết quả đa dạng, bình đẳng." },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0f08] text-stone-200 font-[Nunito,sans-serif] selection:bg-lime-500/30">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0f08]/70 border-b border-lime-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95">
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-stone-400 font-medium">
            <li><a href="#about" className="hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block">Giới thiệu</a></li>
            <li><a href="#projects" className="hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block">Dự án</a></li>
            <li><a href="#skills" className="hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block">Kỹ năng</a></li>
            <li><a href="#ethics" className="hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block">Đạo đức AI</a></li>
            <li><a href="#reflection" className="hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block">Tổng kết</a></li>
            <li>
              <a href="mailto:dovansang@sinh.vien.edu.vn"
                 className="px-4 py-1.5 rounded-full text-sm font-bold border border-lime-500/50 text-lime-400 hover:bg-lime-500 hover:text-[#0a0f08] transition-all duration-300 hover:scale-105 active:scale-95 inline-block">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-lime-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-lime-500/10 border border-lime-500/30 text-lime-400">
              📚 Nhập môn Công nghệ Số và Ứng dụng Trí tuệ Nhân tạo
            </span>
            <h1 className="mt-6 font-[Be_Vietnam_Pro,sans-serif] text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-stone-100">
              <span className="font-[Playfair_Display,serif] italic font-bold bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
                {NAME}
              </span>
            </h1>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-white">
              <li className="px-3 py-1.5 rounded-lg bg-[#121a0f] border border-[#1e3319] transition-all duration-300 hover:scale-[1.03] hover:border-lime-500/50 active:scale-95">
                🏫 Trường <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold">Đại học Công Nghệ - Đại học Quốc gia Hà Nội</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-[#121a0f] border border-[#1e3319] transition-all duration-300 hover:scale-[1.03] hover:border-lime-500/50 active:scale-95">
                🎓 Ngành <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold">Công nghệ Thông tin</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-[#121a0f] border border-[#1e3319] transition-all duration-300 hover:scale-[1.03] hover:border-lime-500/50 active:scale-95">
                📅 Khoá <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold">K70</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-[#121a0f] border border-[#1e3319] transition-all duration-300 hover:scale-[1.03] hover:border-lime-500/50 active:scale-95">
                🪪 Mã sinh viên <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold">25020343</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-[#121a0f] border border-[#1e3319] transition-all duration-300 hover:scale-[1.03] hover:border-lime-500/50 active:scale-95">
                📋 Mã lớp học <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent font-bold">VNU1001_E252016</span>
              </li>
            </ul>
            <p className="mt-8 max-w-2xl text-lg text-stone-400 leading-relaxed">
              Tôi là sinh viên năm nhất với niềm đam mê khám phá giao điểm giữa công nghệ và sự sáng tạo.
              Portfolio này ghi lại hành trình cả học kỳ của tôi trong việc làm chủ công nghệ số, sử dụng AI
              có trách nhiệm và xây dựng tư duy phản biện trong thời đại số.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl font-bold text-sm bg-lime-500 text-[#0a0f08] hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95 inline-block">Xem Dự Án →</a>
              <a href="mailto:dovansang@sinh.vien.edu.vn" className="px-6 py-3 rounded-xl font-bold text-sm text-lime-400 border border-[#1e3319] hover:border-lime-500/60 hover:bg-lime-500/5 transition-all duration-300 hover:scale-105 active:scale-95 inline-block">Liên Hệ Tôi</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-lime-500/10 blur-3xl rounded-full" />
            <img src={uetLogo} alt="Đại học Công nghệ - UET" className="relative w-72 md:w-80 rounded-full bg-white p-3 shadow-2xl shadow-lime-500/20" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-5">
          <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <h3 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">🎯 Mục Tiêu Học Tập</h3>
            <ul className="mt-4 space-y-2 text-stone-300 text-sm">
              <li>▸ Làm chủ quy trình tổ chức tệp và quản lý số</li>
              <li>▸ Đánh giá phê phán nội dung do AI tạo ra</li>
              <li>▸ Thành thạo kỹ năng thiết kế câu lệnh (prompt)</li>
              <li>▸ Cộng tác hiệu quả trong môi trường số</li>
              <li>▸ Xây dựng quy tắc đạo đức AI cá nhân</li>
            </ul>
          </div>
          <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <h3 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">📂 Mục Đích Portfolio</h3>
            <ul className="mt-4 space-y-2 text-stone-300 text-sm">
              <li>▸ Lưu trữ sản phẩm học thuật số trong một nơi</li>
              <li>▸ Minh chứng sự tiến bộ về năng lực số</li>
              <li>▸ Phản ánh trung thực những thử thách và bài học</li>
              <li>▸ Chia sẻ sản phẩm với giảng viên và bạn bè</li>
              <li>▸ Làm hồ sơ năng lực cho sự nghiệp tương lai</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionTitle id="about" eyebrow="Bài tập học phần" title="Các Dự Án Cốt Lõi" sub="Sáu bài tập nền tảng hoàn thành trong học kỳ, mỗi bài xây dựng một năng lực số riêng biệt." />
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.n} className="group p-6 rounded-2xl bg-gradient-to-b from-[#0f160c] to-[#0a0f08] border border-[#1e3319] hover:border-lime-500/40 transition">
            <div className="flex items-center justify-between">
              <span className="text-3xl">{p.icon}</span>
              <span className="text-xs font-bold tracking-widest text-lime-500/70">{p.n}</span>
            </div>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">Bài tập {p.n}</p>
              <h3 className="mt-1 font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100 text-lg leading-snug">{p.title}</h3>
            </div>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-bold">Mục tiêu</p>
              <p className="mt-1.5 text-sm text-stone-400 leading-relaxed">{p.goal}</p>
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-bold">Tóm tắt thực hiện</p>
              <p className="mt-1.5 text-sm text-stone-400 leading-relaxed">{p.summary}</p>
            </div>
            <a href="#" className="mt-5 inline-block text-sm font-bold text-lime-400 group-hover:text-lime-300">Xem Sản phẩm →</a>
          </article>
        ))}
      </section>

      <SectionTitle id="skills" eyebrow="Năng lực số" title="Kỹ Năng Số Đã Đạt Được" sub="Bản đồ tự đánh giá các năng lực số được phát triển trong suốt học kỳ. Con số % thể hiện mức độ thành thạo cá nhân." />
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-5">
        {skills.map(s => (
          <div key={s.name} className="p-5 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl">{s.icon}</span>
                <div className="min-w-0">
                  <p className="font-[Be_Vietnam_Pro,sans-serif] font-semibold text-stone-100 truncate">{s.name}</p>
                  <p className="text-[10px] tracking-widest font-bold text-lime-500/80">{s.level}</p>
                </div>
              </div>
              <span className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400">{s.pct}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#1a2614] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-lime-500 to-emerald-400" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </section>
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-wrap gap-2">
        {tools.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-[#121a0f] border border-[#1e3319] text-stone-300">{t}</span>
        ))}
      </div>

      <SectionTitle id="ethics" eyebrow="AI & Đạo đức" title="Quy Tắc Đạo Đức AI Cá Nhân" sub="Năm nguyên tắc cá nhân tôi cam kết thực hiện khi tích hợp công cụ AI vào học tập và nghiên cứu." />
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ethics.map(e => (
          <div key={e.title} className="p-6 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <span className="text-3xl">{e.icon}</span>
            <h3 className="mt-4 font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100">{e.title}</h3>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">{e.text}</p>
          </div>
        ))}
        <div className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/30">
          <p className="font-[Playfair_Display,serif] italic text-2xl md:text-3xl text-stone-100 leading-snug">
            “Rủi ro thực sự của AI không phải là nó sẽ suy nghĩ thay chúng ta — mà là chúng ta sẽ ngừng tự suy nghĩ.”
          </p>
          <p className="mt-3 text-sm text-lime-400 font-bold tracking-wide">— Suy ngẫm cá nhân, 2025</p>
        </div>
      </section>

      <SectionTitle id="reflection" eyebrow="Tổng kết học kỳ" title="Suy Ngẫm Cá Nhân" />
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <blockquote className="p-8 rounded-2xl bg-[#0f160c] border-l-4 border-lime-500 font-[Playfair_Display,serif] italic text-xl md:text-2xl text-stone-100 leading-relaxed">
          “Khóa học này không chỉ dạy tôi cách dùng công nghệ — nó dạy tôi cách suy nghĩ cùng với công nghệ.”
        </blockquote>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <Block title="🗺️ Hành Trình Học Kỳ Của Tôi">
            Khi đăng ký khóa học này, tôi nghĩ đây sẽ là một môn khảo sát công nghệ thông thường. Những gì tôi trải qua là một chương trình học thực hành có cấu trúc, thách thức tôi xem xét lại cách mình tương tác với công cụ số mỗi ngày. Từ việc sắp xếp lại hàng năm tệp lộn xộn đến tạo ra video đầu tiên với hỗ trợ của AI, mỗi bài tập đưa tôi vào vùng đất mới — và tôi đã trưởng thành hơn từ đó.
          </Block>
          <Block title="💡 Bài Học Cốt Lõi">
            <ol className="space-y-3 list-decimal list-inside marker:text-lime-400 marker:font-bold">
              <li>Năng lực số là kỹ năng, không phải tố chất bẩm sinh.</li>
              <li>AI khuếch đại ý định — câu hỏi kém cho câu trả lời kém.</li>
              <li>Đạo đức không thể thương lượng.</li>
              <li>Cộng tác nhân lên kết quả vượt ngoài giới hạn cá nhân.</li>
            </ol>
          </Block>
          <Block title="🏆 Điều Tôi Tự Hào Nhất">
            Tôi tự hào nhất về Bài tập 5 — video giải thích với hỗ trợ AI. Nó yêu cầu tôi tích hợp năm công cụ khác nhau theo trình tự, quản lý tầm nhìn sáng tạo xuyên suốt các nền tảng, và đánh giá phê phán từng đầu ra của AI trước khi đưa vào sản phẩm.
          </Block>
          <Block title="⚠️ Thử Thách Đã Đối Mặt">
            Thử thách khó nhất là cưỡng lại cám dỗ chấp nhận đầu ra của AI một cách vô phê phán. Đầu học kỳ, tôi nộp văn bản do AI soạn thảo có chứa lỗi thực tế tinh vi — đây là bài học về cái giá của sự phụ thuộc quá mức. Tôi áp dụng quy tắc xác minh hai nguồn cá nhân sau sự cố đó.
          </Block>
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-[#121a0f] to-[#0a0f08] border border-[#1e3319] text-center">
          <p className="text-stone-300 leading-relaxed">Portfolio này không phải sản phẩm hoàn thiện — đây là tài liệu sống về sự phát triển.</p>
          <p className="mt-4 text-sm tracking-widest text-lime-400 font-bold">{NAME.toUpperCase()} · 2025</p>
        </div>
      </section>

      <footer className="border-t border-[#1e3319] bg-[#080c06]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={uetLogo} alt="UET" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <span className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100">{NAME}</span>
            </div>
            <p className="mt-4 text-sm text-stone-400 max-w-md">
              Portfolio số ghi lại hành trình học tập trong môn Nhập môn Công nghệ Số & Ứng dụng AI Tạo sinh.
            </p>
            <p className="mt-6 text-xs text-stone-500">© 2025 {NAME}. Bảo lưu mọi quyền.</p>
          </div>
          <div>
            <p className="font-bold text-stone-100 mb-3">Điều hướng</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#about" className="hover:text-lime-400">Giới thiệu</a></li>
              <li><a href="#projects" className="hover:text-lime-400">Dự án</a></li>
              <li><a href="#skills" className="hover:text-lime-400">Kỹ năng</a></li>
              <li><a href="#ethics" className="hover:text-lime-400">Đạo đức AI</a></li>
              <li><a href="#reflection" className="hover:text-lime-400">Tổng kết</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-stone-100 mb-3">Liên Hệ Học Thuật</p>
            <p className="text-sm text-stone-400">✉ <a href="mailto:dovansang@sinh.vien.edu.vn" className="hover:text-lime-400 font-semibold">dovansang@sinh.vien.edu.vn</a></p>
            <p className="mt-2 text-sm text-stone-400">🪪 MSV: 25020343</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ id, eyebrow, title, sub }: { id?: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-lime-400">{eyebrow}</p>
      <h2 className="mt-3 font-[Be_Vietnam_Pro,sans-serif] text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl mx-auto text-stone-400">{sub}</p>}
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
      <h3 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400">{title}</h3>
      <div className="mt-4 text-sm text-stone-300 leading-relaxed">{children}</div>
    </div>
  );
}
