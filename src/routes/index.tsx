import { createFileRoute, Link } from "@tanstack/react-router";
import uetLogo from "@/assets/uet-logo.png";
import { attachRipple, SmoothCursor } from "@/components/SmoothCursor";
import { exercises } from "@/data/exercises";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Đỗ Văn Sang — Portfolio Số" },
      { name: "description", content: "Portfolio số ghi lại hành trình học tập trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo — Đỗ Văn Sang, UET." },
    ],
  }),
});

function Index() {
  return <Portfolio />;
}

const NAME = "Đỗ Văn Sang";
const EMAIL = "25020343@vnu.edu.vn";

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

const tools = [
  "File Explorer",
  "Google Scholar",
  "Microsoft Academic",
  "Trello",
  "Asana",
  "ClickUp",
  "Microsoft Planner",
  "Google Docs",
  "Microsoft Office Online",
  "Google Drive",
  "OneDrive",
  "Dropbox",
  "Slack",
  "Discord",
  "Microsoft Teams",
  "ChatGPT",
  "Google Gemini",
  "Claude",
  "DALL-E",
  "Midjourney",
  "Stable Diffusion",
  "Canva AI",
  "Adobe Firefly",
];

const ethics = [
  { icon: "🔎", title: "01. Minh Bạch", text: "Tôi luôn ghi chú rõ ràng khi công cụ AI hỗ trợ tạo nội dung học thuật, bao gồm tên công cụ, phiên bản và mức độ sử dụng — coi AI như bất kỳ nguồn tài liệu nào khác." },
  { icon: "✅", title: "02. Kiểm tra & Xác minh", text: "Đầu ra của AI sẽ không bao giờ được nộp mà không có kiểm tra độc lập từ nguồn tin cậy. AI có thể sai — tôi coi mỗi câu trả lời của AI là điểm khởi đầu, không phải kết luận." },
  { icon: "🔒", title: "03. Bảo vệ Dữ liệu Cá nhân", text: "Tôi sẽ không nhập thông tin nhận dạng cá nhân của mình hoặc người khác vào hệ thống AI công cộng mà không có sự đồng ý, và sẽ đọc kỹ chính sách lưu trữ dữ liệu của mỗi công cụ." },
  { icon: "🧠", title: "04. Tư duy Phản biện Là Trọng tâm", text: "AI là công cụ khuếch đại, không phải thay thế tư duy của tôi. Tôi cam kết hình thành phân tích riêng trước khi hỏi AI, rồi so sánh kết quả để học hỏi sâu hơn." },
  { icon: "🌱", title: "05. Công bằng & Hòa nhập", text: "Tôi sẽ chủ động kiểm tra nội dung do AI tạo ra để phát hiện thiên kiến, rập khuôn hay ngôn ngữ loại trừ, và dùng chiến lược prompt hướng tới kết quả đa dạng, bình đẳng." },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-slate-900 font-[Inter,sans-serif] selection:bg-teal-500/30 relative">
      <div className="tech-bg" aria-hidden="true">
        <span className="tech-orb tech-orb-1" />
        <span className="tech-orb tech-orb-2" />
        <span className="tech-orb tech-orb-3" />
      </div>
      <SmoothCursor />
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#e8f0f8]/85 border-b border-teal-500/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-slate-600 font-medium">
            <li><a onClick={(e) => { attachRipple(e); e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} href="#top" className="relative overflow-hidden px-2 py-1 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block">Giới thiệu</a></li>
            <li><a onClick={attachRipple} href="#projects" className="relative overflow-hidden px-2 py-1 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block">Bài tập</a></li>
            <li><a onClick={attachRipple} href="#skills" className="relative overflow-hidden px-2 py-1 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block">Kỹ năng</a></li>
            <li><a onClick={attachRipple} href="#ethics" className="relative overflow-hidden px-2 py-1 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block">Đạo đức AI</a></li>
            <li><a onClick={attachRipple} href="#reflection" className="relative overflow-hidden px-2 py-1 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block">Tổng kết</a></li>
            <li>
              <a onClick={attachRipple} href="#contact"
                 className="px-4 py-1.5 rounded-full text-sm font-bold border border-teal-500/60 text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 inline-block">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/30 blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-teal-500/10 border border-teal-500/40 text-teal-700">
              📚 Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
            </span>
            <h1 className="mt-6 vn-heading text-5xl md:text-7xl font-bold text-slate-900">
              <span className="vn-heading italic font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {NAME}
              </span>
            </h1>
            <ul className="mt-8 flex flex-wrap gap-2.5 text-[13px] text-slate-900">
              <li className="px-3 py-1.5 rounded-lg bg-white border border-[#b8d4e8] transition-all duration-300 hover:scale-[1.03] hover:border-teal-500/60 active:scale-95 font-medium">
                🏫 Trường <span className="text-teal-600 font-semibold">Đại học Công Nghệ — ĐHQG Hà Nội</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-white border border-[#b8d4e8] transition-all duration-300 hover:scale-[1.03] hover:border-teal-500/60 active:scale-95 font-medium">
                🎓 Ngành <span className="text-teal-600 font-semibold">Công nghệ Thông tin</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-white border border-[#b8d4e8] transition-all duration-300 hover:scale-[1.03] hover:border-teal-500/60 active:scale-95 font-medium">
                📅 Khoá <span className="text-teal-600 font-semibold">K70</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-white border border-[#b8d4e8] transition-all duration-300 hover:scale-[1.03] hover:border-teal-500/60 active:scale-95 font-medium">
                🪪 Mã sinh viên <span className="text-teal-600 font-semibold">25020343</span>
              </li>
              <li className="px-3 py-1.5 rounded-lg bg-white border border-[#b8d4e8] transition-all duration-300 hover:scale-[1.03] hover:border-teal-500/60 active:scale-95 font-medium">
                📋 Mã lớp <span className="text-teal-600 font-semibold">VNU1001_E252016</span>
              </li>
            </ul>
            <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Tôi là sinh viên năm nhất với niềm đam mê khám phá công nghệ . Portfolio này ghi lại hành trình cả học kỳ của tôi trong việc làm chủ công nghệ số, sử dụng AI có trách nhiệm và xây dựng tư duy phản biện trong thời đại số.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a onClick={attachRipple} href="#projects" className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm bg-teal-600 text-white hover:bg-teal-500 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:scale-105 active:scale-95 inline-block">Xem Bài Tập →</a>
              <a onClick={attachRipple} href="#contact" className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm text-teal-700 border border-[#b8d4e8] hover:border-teal-600/70 hover:bg-teal-500/5 transition-all duration-300 hover:scale-105 active:scale-95 inline-block">Liên Hệ Tôi</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full" />
            <img src={uetLogo} alt="Đại học Công nghệ - UET" className="relative w-72 md:w-80 rounded-full bg-white p-3 shadow-2xl shadow-teal-500/30" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-5">
          <div className="p-7 rounded-2xl bg-white border border-[#b8d4e8]">
            <h3 className="vn-heading font-bold text-teal-700 text-lg">🎯 Mục Tiêu Học Tập</h3>
            <ul className="mt-4 space-y-2 text-slate-800 text-sm">
              <li>▸ Làm chủ quy trình tổ chức tệp và quản lý số</li>
              <li>▸ Đánh giá phê phán nội dung do AI tạo ra</li>
              <li>▸ Thành thạo kỹ năng thiết kế câu lệnh (prompt)</li>
              <li>▸ Cộng tác hiệu quả trong môi trường số</li>
              <li>▸ Xây dựng quy tắc đạo đức AI cá nhân</li>
            </ul>
          </div>
          <div className="p-7 rounded-2xl bg-white border border-[#b8d4e8]">
            <h3 className="vn-heading font-bold text-teal-700 text-lg">📂 Mục Đích Portfolio</h3>
            <ul className="mt-4 space-y-2 text-slate-800 text-sm">
              <li>▸ Lưu trữ sản phẩm học thuật số trong một nơi</li>
              <li>▸ Minh chứng sự tiến bộ về năng lực số</li>
              <li>▸ Phản ánh trung thực những thử thách và bài học</li>
              <li>▸ Chia sẻ sản phẩm với giảng viên và bạn bè</li>
              <li>▸ Làm hồ sơ năng lực cho sự nghiệp tương lai</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionTitle id="projects" eyebrow="Bài tập học phần" title="Bài Tập" sub="Sáu bài tập nền tảng theo yêu cầu học phần. Nhấn vào mỗi thẻ để xem chi tiết yêu cầu và nội dung trình bày." />
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((p) => (
          <Link
            key={p.n}
            to="/bai-tap/$id"
            params={{ id: p.id }}
            onClick={attachRipple}
            className="group relative overflow-hidden flex flex-col p-6 rounded-2xl bg-gradient-to-b from-[#0f160c] to-[#e8f0f8] border border-[#b8d4e8] hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/20 cursor-pointer active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl leading-none">{p.icon}</span>
              <span className="text-xs font-bold tracking-widest text-teal-600/80">{p.n}</span>
            </div>
            <div className="mt-5 min-h-[76px]">
              <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Bài tập {p.n}</p>
              <h3 className="mt-1 vn-heading font-bold text-slate-900 text-[14px] line-clamp-2 uppercase">
                {p.shortTitle}
              </h3>
            </div>
            <div className="mt-3">
              <p className="text-[11px] uppercase tracking-widest text-teal-700 font-bold">Mục tiêu</p>
              <p className="mt-1 text-[13.5px] text-slate-600 leading-relaxed line-clamp-2">{p.goal}</p>
            </div>
            <div className="mt-3">
              <p className="text-[11px] uppercase tracking-widest text-teal-700 font-bold">Định hướng</p>
              <p className="mt-1 text-[13.5px] text-slate-600 leading-relaxed line-clamp-2">{p.summary}</p>
            </div>
            <span className="mt-5 inline-block text-sm font-bold text-teal-700 group-hover:text-teal-600 group-hover:translate-x-1 transition-transform">
              Xem Bài tập →
            </span>
          </Link>
        ))}
      </section>

      <SectionTitle id="skills" eyebrow="Năng lực số" title="Các Kỹ Năng Đạt Được" sub="Bản đồ tự đánh giá các năng lực số được phát triển trong suốt học kỳ. Con số % thể hiện mức độ thành thạo cá nhân." />
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-5">
        {skills.map(s => (
          <div key={s.name} className="p-5 rounded-2xl bg-white border border-[#b8d4e8]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl">{s.icon}</span>
                <div className="min-w-0">
                  <p className="vn-heading font-semibold text-slate-900 truncate">{s.name}</p>
                  <p className="text-[10px] tracking-widest font-bold text-teal-600/90">{s.level}</p>
                </div>
              </div>
              <span className="vn-heading font-bold text-teal-700">{s.pct}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#cfe0ec] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-600 to-cyan-500" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </section>
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-wrap gap-2">
        {tools.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-white border border-[#b8d4e8] text-slate-800">{t}</span>
        ))}
      </div>

      <SectionTitle id="ethics" eyebrow="AI & Đạo đức" title="Nguyên Tắc Sử Dụng AI" sub="Năm nguyên tắc cá nhân tôi cam kết thực hiện khi tích hợp công cụ AI vào học tập và nghiên cứu." />
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ethics.map(e => (
          <div key={e.title} className="p-6 rounded-2xl bg-white border border-[#b8d4e8]">
            <span className="text-3xl">{e.icon}</span>
            <h3 className="mt-4 vn-heading font-bold text-slate-900">{e.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{e.text}</p>
          </div>
        ))}
        <div className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/40">
          <p className="vn-heading italic font-medium text-2xl md:text-3xl text-slate-900">
            “Rủi ro thực sự của AI không phải là nó sẽ suy nghĩ thay chúng ta — mà là chúng ta sẽ ngừng tự suy nghĩ.”
          </p>
          <p className="mt-3 text-sm text-teal-700 font-bold tracking-wide">— Suy ngẫm cá nhân, 2026</p>
        </div>
      </section>

      <SectionTitle id="reflection" eyebrow="Tổng kết học kỳ" title="Suy Ngẫm Cá Nhân" />
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <blockquote className="p-8 rounded-2xl bg-white border-l-4 border-teal-600 vn-heading italic font-medium text-xl md:text-2xl text-slate-900">
          “Khóa học này không chỉ dạy tôi cách dùng công nghệ — nó dạy tôi cách suy nghĩ cùng với công nghệ.”
        </blockquote>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <Block title="🗺️ Hành Trình Học Kỳ Của Tôi">
            Khi đăng ký khóa học này, tôi nghĩ đây sẽ là một môn khảo sát công nghệ thông thường. Những gì tôi trải qua là một chương trình học thực hành có cấu trúc, thách thức tôi xem xét lại cách mình tương tác với công cụ số mỗi ngày. Từ việc sắp xếp lại hàng năm tệp lộn xộn đến tạo ra video đầu tiên với hỗ trợ của AI, mỗi bài tập đưa tôi vào vùng đất mới — và tôi đã trưởng thành hơn từ đó.
          </Block>
          <Block title="💡 Bài Học Cốt Lõi">
            <ol className="space-y-3 list-decimal list-inside marker:text-teal-700 marker:font-bold">
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

      </section>

      <footer id="contact" className="border-t border-[#b8d4e8] bg-[#d8e6f0]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <img src={uetLogo} alt="UET" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <span className="vn-heading font-bold text-slate-900">{NAME}</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-md">
              Portfolio số ghi lại hành trình học tập trong môn Nhập môn Công nghệ Số & Ứng dụng AI Tạo sinh.
            </p>
            <p className="mt-6 text-xs text-slate-500">© 2026 {NAME}. Bảo lưu mọi quyền.</p>
          </div>
          <div className="md:col-span-2 md:pl-4">
            <p className="font-bold text-slate-900 mb-3">Điều hướng</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a onClick={(e) => { attachRipple(e); e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} href="#top" className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95">Giới thiệu</a></li>
              <li><a onClick={attachRipple} href="#projects" className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95">Bài tập</a></li>
              <li><a onClick={attachRipple} href="#skills" className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95">Kỹ năng</a></li>
              <li><a onClick={attachRipple} href="#ethics" className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95">Đạo đức AI</a></li>
              <li><a onClick={attachRipple} href="#reflection" className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95">Tổng kết</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-bold text-slate-900 mb-3">Bài tập</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {exercises.map((e) => (
                <li key={e.id}>
                  <Link
                    to="/bai-tap/$id"
                    params={{ id: e.id }}
                    onClick={attachRipple}
                    className="relative overflow-hidden inline-block px-1 hover:text-teal-700 transition-all duration-300 active:scale-95"
                  >
                    {e.icon} Bài {e.n} — {e.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-bold text-slate-900 mb-3">Liên Hệ</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="whitespace-nowrap">🏫 Trường <span className="text-slate-900 font-semibold">Đại học Công nghệ — ĐHQGHN</span></li>
              <li>🎓 Ngành <span className="text-slate-900 font-semibold">Công nghệ Thông tin</span></li>
              <li>📅 Khoá <span className="text-slate-900 font-semibold">K70</span></li>
              <li>👥 Lớp <span className="text-slate-900 font-semibold">IT5</span></li>
              <li>📋 Mã lớp <span className="text-slate-900 font-semibold">VNU1001_E252016</span></li>
              <li>🪪 MSV <span className="text-slate-900 font-semibold">25020343</span></li>
              <li className="break-all">✉ <a href={`mailto:${EMAIL}`} className="hover:text-teal-700 font-semibold">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ id, eyebrow, title, sub }: { id?: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div id={id} className="scroll-mt-24 max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 vn-heading text-2xl md:text-3xl font-bold text-slate-900 uppercase">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl mx-auto text-slate-600">{sub}</p>}
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-[#b8d4e8]">
      <h3 className="vn-heading font-bold text-teal-700">{title}</h3>
      <div className="mt-4 text-sm text-slate-800 leading-relaxed">{children}</div>
    </div>
  );
}
