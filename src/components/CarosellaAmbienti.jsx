import { useCallback, useEffect, useRef, useState } from "react";

function Freccia({ verso }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={verso === "sinistra" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
    </svg>
  );
}

// Carosello a scorrimento con anteprima delle slide vicine: ogni slide porta con sé
// l'immagine e il testo descrittivo. Si usa con le frecce, i puntini, la tastiera o con
// uno swipe del dito o del trackpad.
function CarosellaAmbienti({ ambienti }) {
  const pista = useRef(null);
  const [attivo, setAttivo] = useState(0);
  const totale = ambienti.length;

  const vaiA = useCallback((indice) => {
    const contenitore = pista.current;
    const slide = contenitore?.children[indice];
    if (!contenitore || !slide) return;
    contenitore.scrollTo({
      left: slide.offsetLeft - (contenitore.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Durante lo scorrimento calcolo quale slide è più vicina al centro
  useEffect(() => {
    const contenitore = pista.current;
    if (!contenitore) return undefined;
    const aggiorna = () => {
      const centro = contenitore.scrollLeft + contenitore.clientWidth / 2;
      let migliore = 0;
      let distanza = Infinity;
      Array.from(contenitore.children).forEach((slide, i) => {
        const d = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - centro);
        if (d < distanza) {
          distanza = d;
          migliore = i;
        }
      });
      setAttivo(migliore);
    };
    contenitore.addEventListener("scroll", aggiorna, { passive: true });
    return () => contenitore.removeEventListener("scroll", aggiorna);
  }, []);

  const avanti = () => vaiA((attivo + 1) % totale);
  const indietro = () => vaiA((attivo - 1 + totale) % totale);

  const aTastiera = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      avanti();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      indietro();
    }
  };

  const classeFreccia =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div role="region" aria-roledescription="carosello" aria-label="Gli ambienti della casa" className="relative">
      <button type="button" aria-label="Ambiente precedente" onClick={indietro} className={`${classeFreccia} left-2 lg:left-4`}>
        <Freccia verso="sinistra" />
      </button>
      <button type="button" aria-label="Ambiente successivo" onClick={avanti} className={`${classeFreccia} right-2 lg:right-4`}>
        <Freccia verso="destra" />
      </button>

      <ul
        ref={pista}
        tabIndex={0}
        onKeyDown={aTastiera}
        aria-label="Scorri per vedere gli ambienti"
        className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-[11%] py-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [scrollbar-width:none] lg:px-[16%] [&::-webkit-scrollbar]:hidden"
      >
        {ambienti.map((ambiente, i) => {
          const inPrimoPiano = i === attivo;
          return (
            <li
              key={ambiente.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} di ${totale}`}
              onClick={() => !inPrimoPiano && vaiA(i)}
              className={`relative aspect-4/3 min-w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl bg-mare-scuro shadow-xl motion-safe:transition-all motion-safe:duration-500 lg:aspect-16/10 lg:min-w-[68%] ${
                inPrimoPiano ? "scale-100 opacity-100" : "scale-[0.92] cursor-pointer opacity-60"
              }`}
            >
              <img
                src={ambiente.immagine}
                alt={ambiente.nome}
                loading="lazy"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

              <div
                className={`absolute inset-x-0 bottom-0 p-6 text-white motion-safe:transition-opacity motion-safe:duration-500 md:p-8 lg:p-10 ${
                  inPrimoPiano ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  {String(i + 1).padStart(2, "0")} / {String(totale).padStart(2, "0")}
                  {ambiente.letto && <span> · {ambiente.letto}</span>}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white lg:text-4xl">{ambiente.nome}</h3>
                <p className="mt-2 max-w-xl text-sm text-white/90 lg:text-base">{ambiente.descrizione}</p>
                {ambiente.dotazioni?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {ambiente.dotazioni.map((voce) => (
                      <li
                        key={voce}
                        className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30 backdrop-blur"
                      >
                        {voce}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Scegli l'ambiente">
        {ambienti.map((ambiente, i) => (
          <button
            key={ambiente.id}
            type="button"
            aria-label={`Vai a ${ambiente.nome}`}
            aria-current={i === attivo}
            onClick={() => vaiA(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === attivo ? "w-9 bg-corallo" : "w-2.5 bg-inchiostro/25 hover:bg-inchiostro/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarosellaAmbienti;
