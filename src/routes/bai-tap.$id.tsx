import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { exercises, getExercise } from "@/data/exercises";
import uetLogo from "@/assets/uet-logo.png";
import { SmoothCursor, attachRipple } from "@/components/SmoothCursor";

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
  const ex = Route.useLoaderData();
  const idx = exercises.findIndex((e) => e.id === ex.id);
  const prev = exercises[idx - 1];
  const next = exercises[idx + 1];

  return (
    <div className="min-h-screen bg-[#0a0f08] text-stone-200 font-[Nunito,sans-serif] selection:bg-lime-500/30">
      <SmoothCursor />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0f08]/70 border-b border-lime-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" onClick={attachRipple} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95">
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </Link>
          <Link
            to="/"
            onClick={attachRipple}
            className="px-4 py-1.5 rounded-full text-sm font-bold border border-lime-500/50 text-lime-400 hover:bg-lime-500 hover:text-[#0a0f08] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Trang chủ
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

      <section className="max-w-5xl mx-auto px-6 pb-12 grid lg:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">📋 Yêu cầu bài tập</h2>
          <ol className="mt-4 space-y-3 text-sm text-stone-300 leading-relaxed list-decimal list-inside marker:text-lime-400 marker:font-bold">
            {ex.requirements.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </div>
        <div className="p-7 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400 text-lg">🎯 Định hướng trình bày</h2>
          <p className="mt-4 text-sm text-stone-300 leading-relaxed">{ex.summary}</p>
          <p className="mt-4 text-sm text-stone-400 leading-relaxed">
            Khu vực bên dưới là không gian để bạn bổ sung sản phẩm cá nhân: hình ảnh chụp màn hình, đoạn văn,
            đường liên kết tới file PDF/video, phân tích — bất cứ minh chứng nào thể hiện quá trình thực hiện.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121a0f] to-[#0a0f08] border border-dashed border-[#2a4422]">
          <h2 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100 text-xl">📝 Nội dung của tôi</h2>
          <p className="mt-2 text-sm text-stone-500">Thêm phần trình bày, ảnh chụp và phân tích của bạn vào khu vực này.</p>
          <div className="mt-6 grid gap-4">
            <Placeholder label="Tóm tắt quá trình thực hiện" />
            <Placeholder label="Minh chứng / Ảnh chụp / Liên kết sản phẩm" />
            <Placeholder label="Phân tích, bài học rút ra" />
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

function Placeholder({ label }: { label: string }) {
  return (
    <div className="p-5 rounded-xl bg-[#0a0f08] border border-[#1e3319] text-sm text-stone-500">
      <p className="font-bold text-stone-400">{label}</p>
      <p className="mt-2 italic">// Thêm nội dung tại đây…</p>
    </div>
  );
}