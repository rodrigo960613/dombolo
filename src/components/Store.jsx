import lojaImg from "../assets/loja.webp";
import { CONFIG } from "../data";
import { Reveal } from "./Reveal";

export function Store() {
  return (
    <section id="loja" className="section store">
      <div className="container">
        <div className="store__banner">
          <img src={lojaImg} alt="" />
          <Reveal className="store__card">
            <span className="eyebrow">A loja</span>
            <h2>Passou na calçada, sentiu o <em>cheiro.</em></h2>
            <p>É só procurar a fachada laranja com letreiro coral. Lá dentro, o balcão de vidro mostra os bolos fresquinhos, prontos para ir com você.</p>
            <ul className="checks">
              <li>Balcão com os bolos do dia</li>
              <li>Ambiente aconchegante e atendimento no balcão</li>
              <li>Peça pelo WhatsApp e retire na loja</li>
            </ul>
            <a className="btn btn--navy" href={CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
