"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Spelar upp en SVG-scen (CSS-animationer under `.scene-play`) en gång när den
 * scrollas in i bild. Utan JS / med prefers-reduced-motion visas slutbilden
 * direkt – den statiska SSR-markupen ÄR slutbilden. Klasserna sätts direkt på
 * DOM-noden (ingen React-state → ingen extra rendering).
 */
export function AnimatedScene({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("scene-ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scene-play");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
