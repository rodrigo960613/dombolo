import { useEffect, useState } from "react";

/* Posição de rolagem: devolve `stuck` (passou de 12px) e `progress` (0 a 1). */
export function useScrollProgress(threshold = 12) {
  const [state, setState] = useState({ stuck: false, progress: 0 });

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ stuck: y > threshold, progress: max > 0 ? Math.min(y / max, 1) : 0 });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [threshold]);

  return state;
}
