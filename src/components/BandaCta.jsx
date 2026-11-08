import { Link } from "react-router-dom";
import MotivoCorallo from "./MotivoCorallo";

function BandaCta({ titolo, testo, testoPulsante = "Richiedi disponibilità", link = "/contatti" }) {
  return (
    <section className="relative overflow-hidden bg-mare py-16 text-center text-white">
      <MotivoCorallo className="pointer-events-none absolute -right-20 -bottom-24 h-96 w-96 text-white/10" />
      <MotivoCorallo className="pointer-events-none absolute -top-24 -left-20 hidden h-80 w-80 text-white/5 md:block" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{titolo}</h2>
        {testo && <p className="mt-4 text-lg text-white/85">{testo}</p>}
        <Link
          to={link}
          className="mt-8 inline-block rounded-full bg-corallo px-8 py-3 font-semibold text-white transition-colors hover:bg-corallo-scuro"
        >
          {testoPulsante}
        </Link>
      </div>
    </section>
  );
}

export default BandaCta;
