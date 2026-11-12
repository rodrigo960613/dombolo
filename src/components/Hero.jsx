import heroImg from "../assets/hero.webp";
import { waLink } from "../data";
import { Whatsapp } from "./Icons";

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container">
        <span className="eyebrow">Bolos caseiros · Produção diária</span>
        <h1>Bolo de verdade, <em>fresquinho</em> todo dia.</h1>
        <p className="lead">
          Na Dom Bolo, a massa é caseira, o forno acende todo dia e cada bolo sai com cara e sabor de casa.
          Escolha o seu e peça pelo WhatsApp.
        </p>
        <div className="hero__photo"><img src={heroImg} alt="" /></div>
        <div className="hero__cta">
          <a className="btn btn--navy btn--lg" href={waLink()} target="_blank" rel="noopener noreferrer"><Whatsapp /> Pedir agora</a>
          <a className="btn btn--ghost btn--lg" href="#sabores">Ver sabores</a>
        </div>
        <ul className="hero__facts">
          <li>100% caseiro</li><li>Assado todo dia</li><li>Jóquei Clube, Fortaleza</li>
        </ul>
      </div>
    </section>
  );
}
