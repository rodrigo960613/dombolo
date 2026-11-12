import { useState } from "react";
import { Reveal } from "./Reveal";
import { FLAVORS, TABS, waLink } from "../data";

export function Flavors() {
  const [tab, setTab] = useState("Todos");
  const list = FLAVORS.filter((f) => tab === "Todos" || f.cat === tab);
  return (
    <section id="sabores" className="section flavors">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nossos sabores</span>
          <h2>Qual vai ser o de <em>hoje?</em></h2>
          <p>Escolha o sabor e mande o pedido pelo WhatsApp.</p>
        </Reveal>
        <div className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab ${t === tab ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="flavor-grid">
          {list.map((f) => (
            <article key={`${tab}-${f.name}`} className="flavor" data-cat={f.cat}>
              <div className="flavor__main">
                <span className="flavor__tag">{f.cat}</span>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
              <a href={waLink(f.msg)} target="_blank" rel="noopener noreferrer">Pedir este</a>
            </article>
          ))}
        </div>
        <p className="flavors__note">Os sabores do dia podem variar. Chame no WhatsApp para saber o que saiu do forno hoje.</p>
      </div>
    </section>
  );
}
