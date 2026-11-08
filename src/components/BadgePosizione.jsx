import { useEffect, useRef, useState } from "react";
import IconaPin from "./IconaPin";
import { RECAPITI, LINK_MAPPA } from "../data/sito";

// Etichetta "Fronte spiaggia" con l'indirizzo in sovrimpressione.
// Si apre passando il mouse, con la tastiera (Tab) o con un tocco su smartphone.
// Si chiude uscendo con il mouse, premendo Esc o toccando fuori.
function BadgePosizione({ testo = "Fronte spiaggia" }) {
  const [aperto, setAperto] = useState(false);
  const contenitore = useRef(null);

  useEffect(() => {
    if (!aperto) return undefined;
    const alTocco = (e) => {
      if (!contenitore.current?.contains(e.target)) setAperto(false);
    };
    document.addEventListener("pointerdown", alTocco);
    return () => document.removeEventListener("pointerdown", alTocco);
  }, [aperto]);

  return (
    <span
      ref={contenitore}
      className="relative inline-block"
      onMouseEnter={() => setAperto(true)}
      onMouseLeave={() => setAperto(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setAperto(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setAperto(false);
      }}
    >
      <button
        type="button"
        aria-expanded={aperto}
        onFocus={() => setAperto(true)}
        onClick={() => setAperto(true)}
        className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <IconaPin />
        {testo}
      </button>

      <span
        className={`absolute top-full left-0 z-20 block w-72 pt-2 text-left transition-opacity duration-150 ${
          aperto ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <span className="block rounded-xl bg-superficie p-4 text-inchiostro shadow-xl">
          <span className="block text-xs font-semibold uppercase tracking-wider text-corallo-testo">Dove siamo</span>
          <span className="mt-1 block font-medium">{RECAPITI.indirizzo}</span>
          <a
            href={LINK_MAPPA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-mare-testo underline underline-offset-4 hover:text-titoli"
          >
            Apri in Google Maps
          </a>
        </span>
      </span>
    </span>
  );
}

export default BadgePosizione;
