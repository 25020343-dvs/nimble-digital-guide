import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { exercises, getExercise, type Exercise } from "@/data/exercises";
import uetLogo from "@/assets/uet-logo.png";
import { attachRipple, SmoothCursor } from "@/components/SmoothCursor";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-[#e8f0f8] text-slate-900">
      <div className="text-center">
        <p className="text-teal-700 font-bold tracking-widest">404</p>
        <p className="mt-2">Không tìm thấy bài tập.</p>
        <Link to="/" className="mt-6 inline-block text-teal-700 hover:underline">← Về trang chủ</Link>
      </div>
    </div>
  ),
});

function BaiTapPage() {
  const ex = Route.useLoaderData() as Exercise;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(ex.id);

  useEffect(() => {
    setAnimKey(ex.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [ex.id]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p === null ? p : Math.min(ex.pages, p + 1)));
      if (e.key === "ArrowLeft") setLightbox((p) => (p === null ? p : Math.max(1, p - 1)));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, ex.pages]);

  const navItems = [
    { hash: "top", label: "Giới thiệu" },
    { hash: "projects", label: "Bài tập" },
    { hash: "skills", label: "Kỹ năng" },
    { hash: "ethics", label: "Đạo đức AI" },
    { hash: "reflection", label: "Tổng kết" },
  ];

  return (
    <div className="min-h-screen bg-[#e8f0f8] text-slate-900 font-[Inter,sans-serif] selection:bg-teal-500/30">
      <SmoothCursor />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#e8f0f8]/85 border-b border-teal-500/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" onClick={attachRipple} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95 shrink-0">
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </Link>
          <ul className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-800">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  onClick={attachRipple}
                  className="relative overflow-hidden px-3 py-1.5 rounded-md hover:text-teal-700 transition-all duration-300 active:scale-95 inline-block"
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
            className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-teal-500/30"
          >
            Liên hệ
          </Link>
        </nav>
      </header>

      {/* Layout: sidebar sát mép trái (bắt đầu từ trên) + hero & nội dung bên phải */}
      <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] gap-6 lg:gap-8 pt-6 pb-10 pr-4 lg:pr-8 relative">
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-teal-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/30 blur-[140px]" />
        </div>
        {/* Sidebar sát mép trái, đẩy lên trên */}
        <aside className="lg:sticky lg:top-20 lg:self-start lg:pl-4">
          <div className="p-4 rounded-r-2xl lg:rounded-l-none rounded-2xl bg-white border border-[#b8d4e8] lg:border-l-0">
            <p className="px-2 pb-3 text-[11px] uppercase tracking-[0.25em] text-teal-700 font-bold">🧭 DANH SÁCH BÀI TẬP</p>
            <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {exercises.map((e) => {
                const active = e.id === ex.id;
                return (
                  <li key={e.id} className="shrink-0 lg:shrink">
                    <Link
                      to="/bai-tap/$id"
                      params={{ id: e.id }}
                      onClick={attachRipple}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-[13.5px] font-semibold transition-all duration-300 active:scale-95 ${
                        active
                          ? "bg-teal-500/10 border-teal-500/60 text-teal-600"
                          : "bg-[#e8f0f8] border-[#b8d4e8] text-slate-800 hover:border-teal-500/50 hover:text-teal-600"
                      }`}
                    >
                      <span className="text-lg leading-none">{e.icon}</span>
                      <span className="flex flex-col leading-tight">
                        <span className={`text-[10px] tracking-widest font-bold ${active ? "text-teal-700" : "text-slate-500"}`}>BÀI {e.n}</span>
                        <span className="line-clamp-1">{e.shortTitle}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Nội dung phải */}
        <div key={animKey} className="space-y-10 min-w-0 animate-[bounceIn_.7s_cubic-bezier(.34,1.56,.64,1)_both] max-w-5xl px-4 lg:px-0">
          {/* Hero header */}
          <div className="pt-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-teal-700 font-bold">
              <span>{ex.icon}</span>
              <span>BÀI TẬP {ex.n}</span>
            </div>
            <h1 className="mt-4 vn-heading text-lg md:text-xl font-bold text-slate-900 uppercase">
              {ex.title}
            </h1>
            <p className="mt-4 text-slate-800 leading-relaxed text-base">
              <span className="font-bold text-teal-700 uppercase tracking-wider text-sm">MỤC TIÊU: </span>
              {ex.goal}
            </p>
          </div>

        {/* Mục tiêu bài học chi tiết */}
        <div className="p-7 rounded-2xl bg-white border border-[#b8d4e8]">
          <h2 className="vn-heading font-bold text-teal-700 text-sm uppercase">🎯 MỤC TIÊU BÀI HỌC CHI TIẾT</h2>
          <ul className="mt-5 grid md:grid-cols-2 gap-3 text-[15px] text-slate-800 leading-relaxed">
            {ex.objectives.map((o, i) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#e8f0f8] border border-[#b8d4e8]">
                <span className="shrink-0 text-teal-700 font-bold">✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tải bài tập đầy đủ */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#e8f0f8] border border-dashed border-[#6ba3c8] flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-teal-700 font-bold">TÀI LIỆU GỐC</p>
            <p className="mt-2 text-slate-800 text-[15px]">Toàn bộ nội dung bài tập đã hoàn thiện ở định dạng Word.</p>
          </div>
          <a
            href={ex.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={attachRipple}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/30"
          >
            📄 TẢI BÀI TẬP ĐẦY ĐỦ (.DOCX)
          </a>
        </div>

        <div className="p-7 rounded-2xl bg-white border border-[#b8d4e8]">
          <h2 className="vn-heading font-bold text-teal-700 text-sm uppercase">🛠️ TÓM TẮT QUÁ TRÌNH THỰC HIỆN</h2>
          <ol className="mt-5 space-y-4">
            {ex.process.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-teal-500/15 border border-teal-500/50 grid place-items-center text-teal-700 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-[15px] text-slate-800 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Những gì đạt được */}
        <div className="p-7 rounded-2xl bg-gradient-to-br from-white to-[#e8f0f8] border border-teal-500/40">
          <h2 className="vn-heading font-bold text-sm uppercase bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
            🏆 NHỮNG GÌ ĐẠT ĐƯỢC SAU BÀI TẬP
          </h2>
          <ul className="mt-5 grid gap-3">
            {ex.achievements.map((a, i) => (
              <li key={i} className="flex gap-3 p-4 rounded-xl bg-[#e8f0f8] border border-[#b8d4e8]">
                <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 text-white grid place-items-center text-xs font-extrabold">
                  {i + 1}
                </span>
                <p className="text-[15px] text-slate-900 leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Toàn bộ trang bài tập */}
        <div className="p-7 rounded-2xl bg-white border border-[#b8d4e8]">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="vn-heading font-bold text-teal-700 text-sm uppercase">📑 TOÀN BỘ TRANG BÀI TẬP</h2>
            <p className="text-xs text-slate-500">{ex.pages} TRANG · CLICK ĐỂ PHÓNG TO</p>
          </div>
          <div className="mt-5 flex flex-col gap-5 max-w-3xl mx-auto">
            {Array.from({ length: ex.pages }, (_, i) => i + 1).map((p) => {
              const src = `/bai-tap/bai-${ex.id}/page-${p}.jpg`;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={(e) => { attachRipple(e); setLightbox(p); }}
                  className="group relative overflow-hidden rounded-xl border border-[#b8d4e8] bg-white transition-all duration-300 hover:border-teal-600/70 hover:scale-[1.02] active:scale-95 block w-full text-left cursor-zoom-in"
                >
                  <img
                    src={src}
                    alt={`Bài ${ex.id} – trang ${p}`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#e8f0f8]/90 text-teal-700 text-[11px] font-bold tracking-wider">
                    TRANG {p}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_.2s_ease-out]"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-teal-500/20 border border-teal-500/50 text-teal-600 text-xl font-bold hover:bg-teal-500/40 transition"
            aria-label="Đóng"
          >×</button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(1, lightbox - 1)); }}
            disabled={lightbox <= 1}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/50 text-teal-600 text-2xl font-bold hover:bg-teal-500/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Trang trước"
          >‹</button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(ex.pages, lightbox + 1)); }}
            disabled={lightbox >= ex.pages}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/50 text-teal-600 text-2xl font-bold hover:bg-teal-500/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Trang kế"
          >›</button>
          <div className="relative max-w-5xl max-h-[90vh] animate-[fadeSlideIn_.25s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/bai-tap/bai-${ex.id}/page-${lightbox}.jpg`}
              alt={`Bài ${ex.id} - trang ${lightbox}`}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#e8f0f8]/90 text-teal-700 text-xs font-bold tracking-widest">
              TRANG {lightbox} / {ex.pages}
            </span>
          </div>
        </div>
      )}

      <footer className="border-t border-[#b8d4e8] bg-[#d8e6f0]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-xs text-slate-500">
          © 2025 Đỗ Văn Sang · Portfolio số UET
        </div>
      </footer>
    </div>
  );
}