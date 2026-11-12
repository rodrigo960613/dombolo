import { useEffect } from "react";

/* Rolagem suave ao clicar em links internos (menu, "Ver sabores", logo, voltar ao início).
   A curva acelera e desacelera, e a duração acompanha a distância (1,2 s a 2,6 s).
   Roda do mouse, toque ou teclado interrompem a animação. */
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function useSmoothAnchors(headerOffset = 76) {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const stop = () => {
      if (raf) { cancelAnimationFrame(raf); raf = 0; root.style.scrollBehavior = ""; }
    };
    const onClick = (e) => {
      const a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const el = id === "#topo" ? root : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      stop();

      const max = root.scrollHeight - window.innerHeight;
      const to = id === "#topo" ? 0 : Math.min(max, Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset));
      const from = window.scrollY;
      const dist = to - from;
      if (Math.abs(dist) < 2) return;

      const dur = Math.min(2600, Math.max(1200, Math.abs(dist) * 0.95));
      let t0 = null;
      root.style.scrollBehavior = "auto";
      const step = (ts) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        window.scrollTo(0, from + dist * ease(p));
        if (p < 1) raf = requestAnimationFrame(step);
        else { raf = 0; root.style.scrollBehavior = ""; }
      };
      raf = requestAnimationFrame(step);
    };

    const events = ["wheel", "touchstart", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, stop, { passive: true }));
    document.addEventListener("click", onClick);
    return () => {
      stop();
      events.forEach((ev) => window.removeEventListener(ev, stop));
      document.removeEventListener("click", onClick);
    };
  }, [headerOffset]);
}
