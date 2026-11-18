import SimboloBarca from "./SimboloBarca";

// La barca trasparente sparsa come decorazione dietro ai contenuti, in posizioni, misure e
// rotazioni diverse. Le posizioni sembrano casuali ma sono fissate da un "seme": con lo stesso
// seme escono sempre uguali, così la pagina non cambia a ogni visita. Per cambiarle basta
// cambiare il seme (un testo o un numero).
function generatore(seme) {
  let t = seme >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const daTesto = (testo) => [...String(testo)].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 7);

// monocromo: la barca tutta bianca, per i fondi scuri come il footer.
function Decori({ seme = "pagina", quanti, monocromo = false }) {
  const caso = generatore(typeof seme === "number" ? seme : daTesto(seme));
  const numero = quanti ?? 1 + Math.floor(caso() * 3);

  const elementi = Array.from({ length: numero }, (_, i) => {
    const lato = caso() < 0.5 ? "left" : "right";
    const dimensione = 14 + caso() * 14;
    return {
      chiave: i,
      dimensione,
      lato,
      fuori: -(0.02 + caso() * 0.18) * dimensione,
      alto: -8 + caso() * 96,
      rotazione: Math.round(-22 + caso() * 44),
      specchio: caso() < 0.5 ? -1 : 1,
      opacita: 0.09 + caso() * 0.07,
    };
  });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {elementi.map((e) => (
        <SimboloBarca
          key={e.chiave}
          monocromo={monocromo}
          className={`absolute h-auto ${monocromo ? "text-white" : ""}`}
          style={{
            width: `${e.dimensione}rem`,
            [e.lato]: `${e.fuori}rem`,
            top: `${e.alto}%`,
            transform: `rotate(${e.rotazione}deg) scaleX(${e.specchio})`,
            opacity: e.opacita,
          }}
        />
      ))}
    </div>
  );
}

export default Decori;
