import MotivoCorallo from "./MotivoCorallo";

// Il logo tondo: cerchio, filo sottile e disegno del corallo, con le proporzioni del logo
// originale. I colori seguono il tema chiaro o scuro e la palette scelta (variabili --c-logo-*).
//
// - dimensione: in pixel. Se manca, la misura si decide con le classi (utile per le misure fluide).
// - variante: "completo", "medio" o "minimo" (livello di dettaglio). Se manca si sceglie dalla misura.
// - morbido: tiene accese le versioni completa e media e le fa dissolvere l'una nell'altra.
// - animato: il disegno ruota piano quando il mouse passa sull'elemento padre con classe "group".
// - colori: serve solo per mostrare l'anteprima con i colori di un'altra palette.
function LogoCorallo({ dimensione, variante, morbido = false, animato = false, className = "", titolo, colori }) {
  const spessore = dimensione ? Math.max(1, Number((dimensione * 0.0064).toFixed(2))) : 1;
  const livello = variante ?? (dimensione && dimensione < 48 ? "minimo" : dimensione && dimensione < 80 ? "medio" : "completo");
  const variabili = colori
    ? { "--c-logo-sfondo": colori.sfondo, "--c-logo-motivo": colori.motivo, "--c-logo-anello": colori.anello }
    : {};
  const misura = dimensione ? { width: dimensione, height: dimensione } : {};
  const rotazione = animato
    ? "motion-safe:transition-transform motion-safe:duration-700 group-hover:rotate-[24deg]"
    : "";
  const dissolvenza = "motion-safe:transition-opacity motion-safe:duration-300";

  return (
    <span
      role={titolo ? "img" : undefined}
      aria-label={titolo}
      aria-hidden={titolo ? undefined : "true"}
      className={`relative inline-block shrink-0 rounded-full ${className}`}
      style={{ backgroundColor: "var(--c-logo-sfondo)", ...misura, ...variabili }}
    >
      <span
        className="absolute rounded-full"
        style={{ inset: "3.28%", border: `${spessore}px solid var(--c-logo-anello)` }}
      />
      <span className={`absolute inset-0 ${rotazione}`} style={{ color: "var(--c-logo-motivo)" }}>
        {morbido ? (
          <>
            <MotivoCorallo
              variante="completo"
              className={`absolute inset-0 h-full w-full ${dissolvenza}`}
              style={{ opacity: livello === "completo" ? 1 : 0 }}
            />
            <MotivoCorallo
              variante="medio"
              className={`absolute inset-0 h-full w-full ${dissolvenza}`}
              style={{ opacity: livello === "completo" ? 0 : 1 }}
            />
          </>
        ) : (
          <MotivoCorallo variante={livello} className="h-full w-full" />
        )}
      </span>
    </span>
  );
}

export default LogoCorallo;
