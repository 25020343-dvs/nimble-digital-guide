import { createFileRoute, Link } from "@tanstack/react-router";
import uetLogo from "@/assets/uet-logo.png";
import { attachRipple } from "@/components/SmoothCursor";
import { SiteLayout, NAME } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Đỗ Văn Sang — Portfolio Số" },
      { name: "description", content: "Giới thiệu bản thân, mục tiêu học tập và mục đích portfolio số môn Nhập môn Công nghệ Số và Ứng dụng Trí tuệ Nhân tạo." },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
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
              <Link to="/du-an" onClick={attachRipple} className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm bg-lime-500 text-[#0a0f08] hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95 inline-block">Xem Dự Án →</Link>
              <a onClick={attachRipple} href="#contact" className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm text-lime-400 border border-[#1e3319] hover:border-lime-500/60 hover:bg-lime-500/5 transition-all duration-300 hover:scale-105 active:scale-95 inline-block">Liên Hệ Tôi</a>
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
    </SiteLayout>
  );
}