import { Link } from "react-router-dom";
import SimboloBarca from "../components/SimboloBarca";

function NonTrovata() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <SimboloBarca className="mx-auto mb-4 h-auto w-56" />
      <p className="font-titolo text-6xl font-semibold text-accento-testo">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Pagina non trovata</h1>
      <p className="mt-3 text-inchiostro/70">L'indirizzo che hai scritto non esiste o la pagina è stata spostata.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-mare px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mare-scuro"
      >
        Torna alla home
      </Link>
    </section>
  );
}

export default NonTrovata;
