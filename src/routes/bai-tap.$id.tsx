import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { exercises, getExercise, type Exercise } from "@/data/exercises";
import uetLogo from "@/assets/uet-logo.png";
import { attachRipple } from "@/components/SmoothCursor";

export const Route = createFileRoute("/bai-tap/$id")({
  component: BaiTapPage,
  loader: ({ params }) => {
    const ex = getExercise(params.id);
    if (!ex) throw notFound();
    return ex;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Đỗ Văn Sang` : "Bài tập" },
      {
        name: "description",
        content: loaderData?.goal ?? "Trang bài tập portfolio số.",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f08] text-stone-200">
      <div className="text-center">
        <p className="text-lime-400 font-bold tracking-widest">404</p>
        <p className="mt-2">Không tìm thấy bài tập.</p>
        <Link to="/" className="mt-6 inline-block text-lime-400 hover:underline">← Về trang chủ</Link>
      </div>
    </div>
  ),
});

function BaiTapPage() {
  const ex = Route.useLoaderData() as Exercise;
  const idx = exercises.findIndex((e) => e.id === ex.id);
  const prev = exercises[idx - 1];
  const next = exercises[idx + 1];

  const navItems = [
    { hash: "top", label: "Giới thiệu" },
    { hash: "projects", label: "Bài tập" },
    { hash: "skills", label: "Kỹ năng" },
    { hash: "ethics", label: "Đạo đức AI" },
    { hash: "reflection", label: "Tổng kết" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f08] text-stone-200 font-[Inter,sans-serif] selection:bg-lime-500/30">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0f08]/70 border-b border-lime-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" onClick={attachRipple} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95 shrink-0">
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </Link>
          <ul className="hidden md:flex items-center gap-1 text-sm font-semibold text-stone-300">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  onClick={attachRipple}
                  className="relative overflow-hidden px-3 py-1.5 rounded-md hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            hash="contact"
            onClick={attachRipple}
            className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-lime-400 to-emerald-500 text-[#0a0f08] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-lime-500/20"
          >
            Liên hệ
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-lime-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-lime-400 font-bold">
            <span>{ex.icon}</span>
            <span>Bài tập {ex.n}</span>
          </div>
          <h1 className="mt-5 font-[Be_Vietnam_Pro,sans-serif] text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-stone-100">
            {ex.title}
          </h1>
          <p className="mt-5 text-stone-300 leading-relaxed text-base md:text-lg">
            <span className="font-bold text-lime-400">Mục tiêu: </span>
            {ex.goal}
          </p>
        </div>
      </section>

      {/* Mục tiêu bài học chi tiết */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">🎯 Mục tiêu bài học chi tiết</h2>
          <ul className="mt-5 grid md:grid-cols-2 gap-3 text-[15px] text-stone-300 leading-relaxed">
            {ex.objectives.map((o, i) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#0a0f08] border border-[#1e3319]">
                <span className="shrink-0 text-lime-400 font-bold">✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tải bài tập đầy đủ — đặt ngay trên phần tóm tắt */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121a0f] to-[#0a0f08] border border-dashed border-[#2a4422] flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-lime-400 font-bold">Tài liệu gốc</p>
            <p className="mt-2 text-stone-300 text-[15px]">Toàn bộ nội dung bài tập đã hoàn thiện ở định dạng Word.</p>
          </div>
          <a
            href={ex.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={attachRipple}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 text-[#0a0f08] font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-lime-500/20"
          >
            📄 Tải bài tập đầy đủ (.docx)
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">🛠️ Tóm tắt quá trình thực hiện</h2>
          <ol className="mt-5 space-y-4">
            {ex.process.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-lime-500/15 border border-lime-500/40 grid place-items-center text-lime-400 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-[15px] text-stone-300 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Những gì đạt được */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="p-7 rounded-2xl bg-gradient-to-br from-[#101a0a] to-[#0a0f08] border border-lime-500/30">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-xl bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent">
            🏆 Những gì đạt được sau bài tập
          </h2>
          <ul className="mt-5 grid gap-3">
            {ex.achievements.map((a, i) => (
              <li key={i} className="flex gap-3 p-4 rounded-xl bg-[#0a0f08] border border-[#1e3319]">
                <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 text-[#0a0f08] grid place-items-center text-xs font-extrabold">
                  {i + 1}
                </span>
                <p className="text-[15px] text-stone-200 leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Toàn bộ trang bài tập */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">📑 Toàn bộ trang bài tập</h2>
            <p className="text-xs text-stone-500">{ex.pages} trang · click để xem ảnh gốc</p>
          </div>
          <div className="mt-5 flex flex-col gap-5 max-w-3xl mx-auto">
            {Array.from({ length: ex.pages }, (_, i) => i + 1).map((p) => {
              const src = `/bai-tap/bai-${ex.id}/page-${p}.jpg`;
              return (
                <a
                  key={p}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={attachRipple}
                  className="group relative overflow-hidden rounded-xl border border-[#1e3319] bg-white transition-all duration-300 hover:border-lime-500/60 hover:scale-[1.02] active:scale-95 block"
                >
                  <img
                    src={src}
                    alt={`Bài ${ex.id} – trang ${p}`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#0a0f08]/80 text-lime-400 text-[11px] font-bold tracking-wider">
                    Trang {p}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <nav className="max-w-5xl mx-auto px-6 pb-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {prev ? (
          <Link
            to="/bai-tap/$id"
            params={{ id: prev.id }}
            onClick={attachRipple}
            className="flex-1 p-4 rounded-xl bg-[#0f160c] border border-[#1e3319] hover:border-lime-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <p className="text-xs uppercase tracking-widest text-stone-500">← Bài trước</p>
            <p className="mt-1 font-bold text-stone-100">{prev.icon} {prev.shortTitle}</p>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link
            to="/bai-tap/$id"
            params={{ id: next.id }}
            onClick={attachRipple}
            className="flex-1 p-4 rounded-xl bg-[#0f160c] border border-[#1e3319] hover:border-lime-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-right"
          >
            <p className="text-xs uppercase tracking-widest text-stone-500">Bài tiếp →</p>
            <p className="mt-1 font-bold text-stone-100">{next.icon} {next.shortTitle}</p>
          </Link>
        ) : <div className="flex-1" />}
      </nav>

      <footer className="border-t border-[#1e3319] bg-[#080c06]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-xs text-stone-500">
          © 2025 Đỗ Văn Sang · Portfolio số UET
        </div>
      </footer>
    </div>
  );
}