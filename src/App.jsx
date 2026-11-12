import { useScrollProgress } from "./hooks/useScrollProgress";
import { useSmoothAnchors } from "./hooks/useSmoothAnchors";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Features } from "./components/Features";
import { Flavors } from "./components/Flavors";
import { Store } from "./components/Store";
import { Steps } from "./components/Steps";
import { Place } from "./components/Place";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export function App() {
  const { stuck, progress } = useScrollProgress();
  useSmoothAnchors(76);
  return (
    <>
      <div id="progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <Header stuck={stuck} />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Flavors />
        <Store />
        <Steps />
        <Place />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
