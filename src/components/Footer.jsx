import { Link } from "react-router-dom";
import LogoCorallo from "./LogoCorallo";
import Decori from "./Decori";
import { SITO, RECAPITI, CODICI } from "../data/sito";

const ANNO = new Date().getFullYear();

const collegamenti = [
  { to: "/la-casa", label: "La casa" },
  { to: "/galleria", label: "Galleria" },
  { to: "/territorio", label: "Territorio" },
  { to: "/come-prenotare", label: "Come prenotare" },
  { to: "/contatti", label: "Contatti" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mare-scuro text-white/85">
      <Decori seme="footer" quanti={2} />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LogoCorallo dimensione={52} />
            <p className="font-titolo text-xl font-semibold text-white">{SITO.nome}</p>
          </div>
          <p className="mt-2 text-sm">{SITO.slogan}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Recapiti</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${RECAPITI.telefono.replace(/\s/g, "")}`} className="hover:underline">
                {RECAPITI.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${RECAPITI.email}`} className="hover:underline">
                {RECAPITI.email}
              </a>
            </li>
            <li>{RECAPITI.indirizzo}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Esplora</p>
          <ul className="mt-3 space-y-2 text-sm">
            {collegamenti.map((voce) => (
              <li key={voce.to}>
                <Link to={voce.to} className="hover:underline">
                  {voce.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-5 text-center text-xs text-white/70">
        <p>
          CIR {CODICI.cir} · CIN {CODICI.cin}
        </p>
        <p className="mt-1">
          © {ANNO} {SITO.nome}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
