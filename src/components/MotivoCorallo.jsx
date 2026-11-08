// Il disegno del corallo, da solo e con sfondo trasparente. Prende il colore del testo
// (currentColor): si cambia con una classe come text-logo-motivo o text-white/10.
// Ha tre livelli di dettaglio: nelle dimensioni piccole i rami più sottili si fondono in una
// macchia, per questo esistono una versione intermedia e una minima, con meno rami e più spessi.
const FILE = {
  completo: "/img/motivo-corallo.svg",
  medio: "/img/motivo-corallo-medio.svg",
  minimo: "/img/motivo-corallo-minimo.svg",
};

function MotivoCorallo({ className = "", variante = "completo", style }) {
  const url = `url(${FILE[variante] ?? FILE.completo})`;
  return (
    <span
      aria-hidden="true"
      className={`block aspect-square bg-current ${className}`}
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
    />
  );
}

export default MotivoCorallo;
