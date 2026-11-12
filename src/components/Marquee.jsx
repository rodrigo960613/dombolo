const WORDS = ["Bolos caseiros", "Produção diária", "Feito com carinho", "Sabor de casa"];

export function Marquee() {
  const items = Array.from({ length: 10 }, () => WORDS).flat();
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((w, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span>{w}</span><span className="dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
