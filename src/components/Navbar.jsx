import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, chiudiMenu } from "../features/ui/uiSlice";
import LogoCorallo from "./LogoCorallo";
import { SITO, STILE_LOGO_NAVBAR } from "../data/sito";

const links = [
  { to: "/", label: "Home" },
  { to: "/la-casa", label: "La casa" },
  { to: "/galleria", label: "Galleria" },
  { to: "/territorio", label: "Territorio" },
  { to: "/come-prenotare", label: "Come prenotare" },
  { to: "/contatti", label: "Contatti" },
];

function Navbar() {
  const menuAperto = useSelector((state) => state.ui.menuAperto);
  const dispatch = useDispatch();
  const soloLogo = STILE_LOGO_NAVBAR === "solo-logo";
  const [inCima, setInCima] = useState(true);

  // In cima alla pagina il logo è grande e sporge dalla barra; scorrendo si rimpicciolisce
  // e rientra, lasciando più spazio al contenuto.
  useEffect(() => {
    const aggiorna = () => setInCima(window.scrollY < 24);
    aggiorna();
    window.addEventListener("scroll", aggiorna, { passive: true });
    return () => window.removeEventListener("scroll", aggiorna);
  }, []);

  const grande = inCima && !menuAperto;

  const classiLink = ({ isActive }) =>
    `block rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
      isActive ? "bg-mare text-white hover:bg-corallo" : "text-inchiostro hover:bg-corallo hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-sabbia-scuro bg-superficie/85 backdrop-blur">
      <nav aria-label="Principale">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem]">
          {soloLogo ? (
            <Link
              to="/"
              aria-label={`${SITO.nome}, vai alla home`}
              onClick={() => dispatch(chiudiMenu())}
              className="group relative block h-full w-24 shrink-0 md:w-32"
            >
              <span
                className={`absolute left-0 block motion-safe:transition-all motion-safe:duration-300 ${
                  grande ? "top-1 size-24 md:top-1.5 md:size-32" : "top-2.5 size-11 md:size-[3.25rem]"
                }`}
              >
                <LogoCorallo
                  morbido
                  animato
                  variante={grande ? "completo" : "medio"}
                  className="h-full w-full shadow-xl ring-4 ring-superficie"
                />
              </span>
            </Link>
          ) : (
            <Link to="/" onClick={() => dispatch(chiudiMenu())} className="flex items-center gap-3">
              <LogoCorallo dimensione={44} />
              <span className="font-titolo text-base font-semibold text-titoli sm:text-xl">{SITO.nome}</span>
            </Link>
          )}

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={classiLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contatti"
              className="hidden rounded-full bg-corallo px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-corallo-scuro xl:inline-block"
            >
              Richiedi disponibilità
            </Link>
            <button
              type="button"
              className="rounded-full border border-mare-testo/30 px-4 py-2 text-sm font-medium text-mare-testo transition-colors hover:border-corallo hover:bg-corallo hover:text-white lg:hidden"
              onClick={() => dispatch(toggleMenu())}
              aria-expanded={menuAperto}
              aria-controls="menu-mobile"
            >
              {menuAperto ? "Chiudi" : "Menu"}
            </button>
          </div>
        </div>

        {menuAperto && (
          <ul id="menu-mobile" className="space-y-1 border-t border-sabbia-scuro px-4 py-3 lg:hidden">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={classiLink} onClick={() => dispatch(chiudiMenu())}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contatti"
                onClick={() => dispatch(chiudiMenu())}
                className="block rounded-full bg-corallo px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Richiedi disponibilità
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
