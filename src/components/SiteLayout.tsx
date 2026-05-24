import { Link } from "@tanstack/react-router";
import uetLogo from "@/assets/uet-logo.png";
import { SmoothCursor, attachRipple } from "@/components/SmoothCursor";
import { exercises } from "@/data/exercises";

const NAME = "Đỗ Văn Sang";
const EMAIL = "25020343@vnu.edu.vn";

const navItems = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0f08] text-stone-200 font-[Nunito,sans-serif] selection:bg-lime-500/30">
      <SmoothCursor />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0f08]/70 border-b border-lime-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" onClick={attachRipple} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95">
            <img src={uetLogo} alt="UET logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-stone-400 font-medium">
            {navItems.map((it) => (
              <li key={it.to}>
                <Link
                  to={it.to}
                  onClick={attachRipple}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-lime-400" }}
                  className="relative overflow-hidden px-2 py-1 rounded-md hover:text-lime-400 transition-all duration-300 active:scale-95 inline-block"
                >
                  {it.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                onClick={attachRipple}
                href="#contact"
                className="px-4 py-1.5 rounded-full text-sm font-bold border border-lime-500/50 text-lime-400 hover:bg-lime-500 hover:text-[#0a0f08] transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer id="contact" className="border-t border-[#1e3319] bg-[#080c06]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={uetLogo} alt="UET" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <span className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100">{NAME}</span>
            </div>
            <p className="mt-4 text-sm text-stone-400 max-w-md">
              Portfolio số ghi lại hành trình học tập trong môn Nhập môn Công nghệ Số và Ứng dụng Trí tuệ Nhân tạo.
            </p>
            <p className="mt-6 text-xs text-stone-500">© 2025 {NAME}. Bảo lưu mọi quyền.</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-bold text-stone-100 mb-3">Điều hướng</p>
            <ul className="space-y-2 text-sm text-stone-400">
              {navItems.map((it) => (
                <li key={it.to}>
                  <Link to={it.to} onClick={attachRipple} className="relative overflow-hidden inline-block px-1 hover:text-lime-400 transition-all duration-300 active:scale-95">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-bold text-stone-100 mb-3">Bài tập</p>
            <ul className="space-y-2 text-sm text-stone-400">
              {exercises.map((e) => (
                <li key={e.id}>
                  <Link
                    to="/bai-tap/$id"
                    params={{ id: e.id }}
                    onClick={attachRipple}
                    className="relative overflow-hidden inline-block px-1 hover:text-lime-400 transition-all duration-300 active:scale-95"
                  >
                    {e.icon} Bài {e.n} — {e.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-bold text-stone-100 mb-3">Liên Hệ</p>
            <p className="text-sm text-stone-400">
              ✉ <a href={`mailto:${EMAIL}`} className="hover:text-lime-400 font-semibold break-all">{EMAIL}</a>
            </p>
            <p className="mt-2 text-sm text-stone-400">🪪 MSV: 25020343</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionTitle({ id, eyebrow, title, sub }: { id?: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-lime-400">{eyebrow}</p>
      <h2 className="mt-3 font-[Be_Vietnam_Pro,sans-serif] text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl mx-auto text-stone-400">{sub}</p>}
    </div>
  );
}

export function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
      <h3 className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400">{title}</h3>
      <div className="mt-4 text-sm text-stone-300 leading-relaxed">{children}</div>
    </div>
  );
}

export { NAME, EMAIL };