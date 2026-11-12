import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

const ITEMS = [
  ["flame", "Produção diária", "Assamos todo dia para o bolo chegar à sua mesa macio e com cheirinho de forno."],
  ["heart", "Receita caseira", "Ingredientes simples, massa fofinha e sabor de casa de avó. Sem pressa e sem atalho."],
  ["cake", "Encomendas", "Café da tarde, aniversário ou presente: chame no WhatsApp e combine do seu jeito."],
];

export function Features() {
  return (
    <section id="diferenciais" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Por que Dom Bolo</span>
          <h2>Tudo que um bolo bom precisa <em>ter</em></h2>
          <p>Sem fórmula pronta: o que a gente faz é bolo caseiro, do jeito que sempre foi.</p>
        </Reveal>
        <div className="features">
          {ITEMS.map(([icon, title, text]) => (
            <Reveal key={title} className="feature">
              <div className="feature__icon"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
