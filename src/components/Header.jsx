import { useState } from "react";
import { DomBoloLogo } from "./DomBoloLogo";
import { NAV, waLink } from "../data";

export function Header({ stuck }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className={`header ${stuck ? "is-stuck" : ""}`}>
      <div className="container header__in">
        <a className="logo" href="#topo">
          <DomBoloLogo className="logo__mark" />
          <span>Dom Bolo</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`}>
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a className="btn btn--navy nav__cta" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close}>Pedir agora</a>
        </nav>
        <button className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
