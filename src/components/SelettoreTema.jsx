import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { impostaPalette, impostaModo } from "../features/ui/uiSlice";
import LogoCorallo from "./LogoCorallo";
import { PALETTE } from "../data/palette";

const modi = [
  { id: "chiaro", etichetta: "Chiaro" },
  { id: "scuro", etichetta: "Scuro" },
  { id: "auto", etichetta: "Auto" },
];

const salva = (chiave, valore) => {
  try {
    window.localStorage.setItem(chiave, valore);
  } catch {
    // il salvataggio è facoltativo: se non riesce, la scelta vale solo fino alla chiusura
  }
};

// Pannello per provare le palette e il tema chiaro o scuro.
// Serve solo al momento della scelta: si toglie mettendo MOSTRA_SELETTORE_TEMA a false in src/data/sito.js.
function SelettoreTema() {
  const dispatch = useDispatch();
  const palette = useSelector((state) => state.ui.palette);
  const modo = useSelector((state) => state.ui.modo);
  const [aperto, setAperto] = useState(false);

  const scegliPalette = (id) => {
    dispatch(impostaPalette(id));
    salva("tema-palette", id);
  };

  const scegliModo = (id) => {
    dispatch(impostaModo(id));
    salva("tema-modo", id);
  };

  return (
    <div
      className="fixed bottom-5 left-5 z-30"
      onKeyDown={(e) => {
        if (e.key === "Escape") setAperto(false);
      }}
    >
      {aperto && (
        <div
          role="dialog"
          aria-label="Scelta dei colori del sito"
          className="mb-3 max-h-[75vh] w-[min(20rem,calc(100vw-2.5rem))] overflow-y-auto rounded-2xl bg-superficie p-4 text-inchiostro shadow-2xl ring-1 ring-sabbia-scuro"
        >
          <p className="font-titolo text-lg font-semibold text-titoli">Colori del sito</p>
          <p className="mt-1 text-xs text-inchiostro/70">
            Prova le palette e il tema: il sito cambia subito. La scelta resta salvata su questo dispositivo.
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-mare-testo">Palette</p>
          <ul className="mt-2 space-y-2">
            {PALETTE.map((voce) => {
              const attiva = voce.id === palette;
              return (
                <li key={voce.id}>
                  <button
                    type="button"
                    aria-pressed={attiva}
                    onClick={() => scegliPalette(voce.id)}
                    className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors ${
                      attiva ? "bg-sabbia ring-2 ring-corallo" : "hover:bg-sabbia"
                    }`}
                  >
                    <span className="flex shrink-0 -space-x-3" aria-hidden="true">
                      <LogoCorallo dimensione={40} colori={voce.logo.chiaro} className="ring-2 ring-superficie" />
                      <LogoCorallo dimensione={40} colori={voce.logo.scuro} className="ring-2 ring-superficie" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{voce.nome}</span>
                      <span className="block text-xs text-inchiostro/70">{voce.descrizione}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-mare-testo">Tema</p>
          <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-sabbia p-1">
            {modi.map((voce) => (
              <button
                key={voce.id}
                type="button"
                aria-pressed={modo === voce.id}
                onClick={() => scegliModo(voce.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  modo === voce.id ? "bg-mare text-white" : "text-inchiostro hover:bg-sabbia-scuro"
                }`}
              >
                {voce.etichetta}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-inchiostro/70">
            Questo pannello serve solo per scegliere: sparirà dal sito finale.
          </p>
        </div>
      )}

      <button
        type="button"
        aria-expanded={aperto}
        onClick={() => setAperto((valore) => !valore)}
        className="inline-flex items-center gap-2 rounded-full bg-mare px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.5-1.9-.3-1 .4-2.1 1.5-2.1H17a4 4 0 0 0 4-4c0-5-4-10-9-10Zm-5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
        Colori
      </button>
    </div>
  );
}

export default SelettoreTema;
