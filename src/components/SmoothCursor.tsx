import { useEffect, useRef } from "react";

export function SmoothCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      const t = e.target as HTMLElement | null;
      const hov = !!t?.closest('a, button, [role="button"], input, textarea, select, label');
      ringRef.current?.classList.toggle("is-hover", hov);
    };

    const onDown = () => ringRef.current?.classList.add("press-pop");
    const onUp = () => ringRef.current?.classList.remove("press-pop");

    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 4}px, ${dy - 4}px, 0)`;
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth;
        ringRef.current.style.transform = `translate3d(${rx - w / 2}px, ${ry - w / 2}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="smooth-cursor-ring" aria-hidden />
      <div ref={dotRef} className="smooth-cursor-dot" aria-hidden />
    </>
  );
}

export function attachRipple(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const span = document.createElement("span");
  span.className = "ripple-span";
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${e.clientX - rect.left - size / 2}px`;
  span.style.top = `${e.clientY - rect.top - size / 2}px`;
  const prevPos = getComputedStyle(el).position;
  if (prevPos === "static") el.style.position = "relative";
  const prevOverflow = el.style.overflow;
  el.style.overflow = "hidden";
  el.appendChild(span);
  window.setTimeout(() => {
    span.remove();
    el.style.overflow = prevOverflow;
  }, 650);
}