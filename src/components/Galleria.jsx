import { useEffect, useState } from "react";

function Galleria({ foto }) {
  const [indice, setIndice] = useState(null);
  const aperta = indice !== null;
  const totale = foto.length;

  useEffect(() => {
    if (!aperta) return undefined;
    const alTasto = (e) => {
      if (e.key === "Escape") setIndice(null);
      if (e.key === "ArrowRight") setIndice((i) => (i + 1) % totale);
      if (e.key === "ArrowLeft") setIndice((i) => (i - 1 + totale) % totale);
    };
    window.addEventListener("keydown", alTasto);
    return () => window.removeEventListener("keydown", alTasto);
  }, [aperta, totale]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {foto.map((immagine, i) => (
          <li key={immagine.src}>
            <button
              type="button"
              onClick={() => setIndice(i)}
              className="block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mare-testo"
              aria-label={`Ingrandisci: ${immagine.alt}`}
            >
              <img
                src={immagine.src}
                alt={immagine.alt}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {aperta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galleria fotografica"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <button
            type="button"
            aria-label="Chiudi la galleria"
            className="absolute inset-0 cursor-default"
            onClick={() => setIndice(null)}
          />
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/25"
            onClick={() => setIndice(null)}
          >
            Chiudi
          </button>
          <button
            type="button"
            aria-label="Foto precedente"
            className="absolute left-2 z-10 rounded-full bg-white/15 px-4 py-3 text-2xl text-white hover:bg-white/25 md:left-6"
            onClick={() => setIndice((i) => (i - 1 + totale) % totale)}
          >
            ‹
          </button>
          <img
            src={foto[indice].src}
            alt={foto[indice].alt}
            className="relative max-h-[85vh] max-w-full rounded-lg"
          />
          <button
            type="button"
            aria-label="Foto successiva"
            className="absolute right-2 z-10 rounded-full bg-white/15 px-4 py-3 text-2xl text-white hover:bg-white/25 md:right-6"
            onClick={() => setIndice((i) => (i + 1) % totale)}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Galleria;
