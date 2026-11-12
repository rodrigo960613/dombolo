import { waLink } from "../data";
import { Reveal } from "./Reveal";
import { Whatsapp } from "./Icons";

export function FinalCta() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__card">
          <div>
            <h2>Bateu vontade de <em>bolo?</em></h2>
            <p>Chame a gente agora e garanta o bolo caseiro de hoje.</p>
          </div>
          <a className="btn btn--coral btn--lg" href={waLink()} target="_blank" rel="noopener noreferrer"><Whatsapp /> Pedir agora</a>
        </Reveal>
      </div>
    </section>
  );
}
