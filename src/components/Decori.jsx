import MotivoCorallo from "./MotivoCorallo";

// Il corallo trasparente sparso come decorazione dietro ai contenuti, in posizioni, misure e
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

function Decori({ seme = "pagina", quanti }) {
  const caso = generatore(typeof seme === "number" ? seme : daTesto(seme));
  const numero = quanti ?? 1 + Math.floor(caso() * 3);

  const elementi = Array.from({ length: numero }, (_, i) => {
    const lato = caso() < 0.5 ? "left" : "right";
    const dimensione = 12 + caso() * 16;
    return {
      chiave: i,
      dimensione,
      lato,
      fuori: -(0.3 + caso() * 0.35) * dimensione,
      alto: -8 + caso() * 96,
      rotazione: Math.round(caso() * 360),
      opacita: 0.05 + caso() * 0.06,
    };
  });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {elementi.map((e) => (
        <MotivoCorallo
          key={e.chiave}
          className="absolute text-logo-motivo"
          style={{
            width: `${e.dimensione}rem`,
            height: `${e.dimensione}rem`,
            [e.lato]: `${e.fuori}rem`,
            top: `${e.alto}%`,
            transform: `rotate(${e.rotazione}deg)`,
            opacity: e.opacita,
          }}
        />
      ))}
    </div>
  );
}

export default Decori;
