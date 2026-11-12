import { CONFIG, waLink } from "../data";
import { Reveal } from "./Reveal";
import { Icon, Whatsapp, Instagram } from "./Icons";

const igUrl = `https://instagram.com/${CONFIG.instagram}`;

export function Place() {
  return (
    <section id="local" className="section place">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Onde estamos</span>
          <h2>Venha pegar seu <em>bolo</em></h2>
        </Reveal>
        <ul className="info-list">
          <Reveal as="li">
            <a className="ico" href={CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir no Google Maps"><Icon name="pin" /></a>
            <div><b>Endereço</b><a href={CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer">{CONFIG.addressLine}</a></div>
          </Reveal>
          <Reveal as="li">
            <span className="ico"><Icon name="clock" /></span>
            <div>
              <b>Horário de atendimento</b>
              {CONFIG.hours.map((h) => <span key={h} className="hours">{h}</span>)}
            </div>
          </Reveal>
          <Reveal as="li">
            <a className="ico" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp"><Whatsapp /></a>
            <div><b>WhatsApp</b><a href={waLink()} target="_blank" rel="noopener noreferrer">{CONFIG.phoneDisplay}</a></div>
          </Reveal>
          <Reveal as="li">
            <a className="ico" href={igUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir o Instagram"><Instagram /></a>
            <div><b>Instagram</b><a href={igUrl} target="_blank" rel="noopener noreferrer">@{CONFIG.instagram}</a></div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
