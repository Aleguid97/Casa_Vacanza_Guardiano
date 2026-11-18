// Il logo tondo della casa, preso dai file in public/img (colori fissi del marchio).
//
// - variante "completo": il logo con la scritta (public/img/logo-corallo.svg).
// - variante "simbolo": solo la barca nel tondo blu (public/img/logo-simbolo.svg), per le
//   misure piccole dove la scritta non si leggerebbe.
// - dimensione: in pixel. Se manca, la misura si decide con le classi (utile per le misure fluide).
// - animato: ingrandisce piano il logo quando il mouse passa sull'elemento padre con classe "group".
// Se non si indica la variante, sotto i 96 pixel si usa il simbolo.
const FILE = {
  completo: "/img/logo-corallo.svg",
  simbolo: "/img/logo-simbolo.svg",
};

function LogoCorallo({ dimensione, variante, animato = false, className = "", titolo }) {
  const tipo = variante ?? (dimensione && dimensione < 96 ? "simbolo" : "completo");
  const misura = dimensione ? { width: dimensione, height: dimensione } : {};
  const ingrandimento = animato ? "motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105" : "";

  return (
    <img
      src={FILE[tipo]}
      alt={titolo ?? ""}
      aria-hidden={titolo ? undefined : "true"}
      decoding="async"
      draggable="false"
      className={`inline-block shrink-0 rounded-full object-contain ${ingrandimento} ${className}`}
      style={misura}
    />
  );
}

export default LogoCorallo;
