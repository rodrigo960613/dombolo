import { waLink } from "../data";
import { Icon, Whatsapp } from "./Icons";

export function FloatingActions() {
  return (
    <div className="float-actions">
      <a className="float-top" href="#topo" aria-label="Voltar ao início"><Icon name="up" /></a>
      <a className="float-order" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Pedir agora pelo WhatsApp"><Whatsapp /></a>
    </div>
  );
}
