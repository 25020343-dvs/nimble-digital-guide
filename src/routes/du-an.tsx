import { createFileRoute, Link } from "@tanstack/react-router";
import { exercises } from "@/data/exercises";
import { attachRipple } from "@/components/SmoothCursor";
import { SiteLayout, SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/du-an")({
  component: DuAn,
  head: () => ({
    meta: [
      { title: "Dự án — Sáu bài tập cốt lõi | Đỗ Văn Sang" },
      { name: "description", content: "Sáu bài tập cốt lõi của học phần Nhập môn Công nghệ Số và Ứng dụng Trí tuệ Nhân tạo." },
    ],
  }),
});

function DuAn() {
  return (
    <SiteLayout>
      <SectionTitle
        eyebrow="Bài tập học phần"
        title="Sáu Bài Tập Cốt Lõi"
        sub="Sáu bài tập nền tảng theo yêu cầu học phần. Nhấn vào mỗi thẻ để xem chi tiết yêu cầu và nội dung trình bày."
      />
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((p) => (
          <Link
            key={p.n}
            to="/bai-tap/$id"
            params={{ id: p.id }}
            onClick={attachRipple}
            className="group relative overflow-hidden flex flex-col p-6 rounded-2xl bg-gradient-to-b from-[#0f160c] to-[#0a0f08] border border-[#1e3319] hover:border-lime-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-500/10 cursor-pointer active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl leading-none">{p.icon}</span>
              <span className="text-xs font-bold tracking-widest text-lime-500/70">{p.n}</span>
            </div>
            <div className="mt-5 min-h-[88px]">
              <p className="text-xs uppercase tracking-widest text-stone-500">Bài tập {p.n}</p>
              <h3 className="mt-1 font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100 text-[17px] leading-[1.35]">
                {p.title.replace(/^Bài \d+\s*—\s*/, "")}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-widest text-lime-400 font-bold">Mục tiêu</p>
              <p className="mt-1.5 text-sm text-stone-400 leading-relaxed line-clamp-4">{p.goal}</p>
            </div>
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-widest text-lime-400 font-bold">Định hướng trình bày</p>
              <p className="mt-1.5 text-sm text-stone-400 leading-relaxed line-clamp-3">{p.summary}</p>
            </div>
            <span className="mt-5 inline-block text-sm font-bold text-lime-400 group-hover:text-lime-300 group-hover:translate-x-1 transition-transform">
              Xem Bài tập →
            </span>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}