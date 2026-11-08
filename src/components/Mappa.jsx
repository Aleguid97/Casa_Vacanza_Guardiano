import { useState } from "react";
import IconaPin from "./IconaPin";
import { SITO, RECAPITI, MAPPA_SRC, MAPPA_PER_INDIRIZZO, LINK_MAPPA, LINK_INDICAZIONI } from "../data/sito";

// La mappa di Google si carica solo dopo un clic: finché non la apri, nessun dato
// viene inviato a Google e non servono avvisi sui cookie per questo elemento.
function Mappa() {
  const [caricata, setCaricata] = useState(false);
  const src = MAPPA_SRC || MAPPA_PER_INDIRIZZO;

  return (
    <div className="overflow-hidden rounded-2xl bg-superficie shadow-sm">
      <div className="relative aspect-4/3 w-full bg-mare-scuro sm:aspect-21/9">
        {caricata ? (
          <iframe
            title="Mappa della posizione della casa"
            src={src}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linear-to-br from-mare-scuro to-mare p-6 text-center text-white">
            <IconaPin className="h-10 w-10 text-corallo-testo" />
            <p className="max-w-md text-sm text-white/85">
              La mappa è fornita da Google: quando la mostri, Google può usare propri cookie. Decidi tu se caricarla.
            </p>
            <button
              type="button"
              onClick={() => setCaricata(true)}
              className="rounded-full bg-corallo px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-corallo-scuro"
            >
              Mostra la mappa
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-titoli">{SITO.nome}</p>
          <p className="text-sm text-inchiostro/70">{RECAPITI.indirizzo}</p>
          <p className="mt-1 text-sm font-semibold text-corallo-testo">Fronte spiaggia</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={LINK_INDICAZIONI}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-mare px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-mare-scuro"
          >
            Indicazioni stradali
          </a>
          <a
            href={LINK_MAPPA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-mare-testo px-5 py-2 text-sm font-semibold text-mare-testo transition-colors hover:bg-mare hover:text-white"
          >
            Apri in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mappa;
