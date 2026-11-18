import { Link } from "react-router-dom";
import SimboloBarca from "./SimboloBarca";

function BandaCta({ titolo, testo, testoPulsante = "Richiedi disponibilità", link = "/contatti" }) {
  return (
    <section className="relative overflow-hidden bg-mare py-16 text-center text-white">
      <SimboloBarca monocromo className="pointer-events-none absolute -right-24 -bottom-16 h-auto w-[30rem] text-white opacity-10" />
      <SimboloBarca monocromo className="pointer-events-none absolute -top-10 -left-24 hidden h-auto w-96 -scale-x-100 text-white opacity-5 md:block" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{titolo}</h2>
        {testo && <p className="mt-4 text-lg text-white/85">{testo}</p>}
        <Link
          to={link}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-mare-scuro transition-colors hover:bg-sabbia"
        >
          {testoPulsante}
        </Link>
      </div>
    </section>
  );
}

export default BandaCta;
