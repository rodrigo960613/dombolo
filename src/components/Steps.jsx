import { Reveal } from "./Reveal";

const STEPS = [
  ["Escolha o bolo", "Veja os sabores e escolha o que combina com o seu momento."],
  ["Chame no WhatsApp", "Diga qual bolo você quer e o horário de retirada. A gente confirma tudo por lá."],
  ["Retire e aproveite", "Passe na loja, leve seu bolo fresquinho e divida (ou não)."],
];

export function Steps() {
  return (
    <section id="como-pedir" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2>Pedir é <em>simples</em></h2>
          <p>Três passos e o bolo é seu.</p>
        </Reveal>
        <div className="steps__grid">
          {STEPS.map(([title, text], i) => (
            <Reveal key={title} className="step">
              <div className="step__n">{i + 1}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
